var Mem = Mem || {};
(function(mem){

    mem.ControlView = Brace.View.extend({

        className: 'control',

        mixins: [ Backbone.mixins.DisposesAsView ],

        events: {
            'click .control-reset': 'handleReset',
            'change .control-mode': 'handleModeChange'
        },

        initialize: function(){
            this.template = JST['control'];
            this.model.getCards().on('change:isFound', this.render, this);
            this.model.getCards().on('reset', this.render, this);
        },

        render: function(){

            var viewModel = this.getViewModel();

            this.$el.html(this.template.render(viewModel));

            return this;
        },

        getViewModel: function(){
            var vm = {
                resetButtonText: 'Reset Game'
            };

            var mode = this.model.getMode();

            vm.modes = _.map(_.values(mem.CARD_MODE), function(val){
                var option = {
                    name: mem.CARD_MODE_NAME[val],
                    value: val
                };

                if (val === mode) {
                    option.selected = true;
                }

                return option;
            }, this);

            if (this.model.isWinState()){
                vm.victory = mem.CARD_MODE_VICTORY[mode];
            }

            return vm;
        },

        handleReset: function(){
            this.model.getCards().generateCards();
        },

        handleModeChange: function(){
            var mode = parseInt(this.$el.find('.control-mode').val());
            this.model.setMode(mode);
        }

    });

})(Mem);