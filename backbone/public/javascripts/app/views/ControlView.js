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

            vm.modes = _.map(_.values(mem.CARD_MODE), function(val){
                return {
                    name: mem.CARD_MODE_NAME[val],
                    value: val
                }
            }, this);

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