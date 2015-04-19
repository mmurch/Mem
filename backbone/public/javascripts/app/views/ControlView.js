var Mem = Mem || {};
(function(mem){

    mem.ControlView = Brace.View.extend({

        className: 'control',

        mixins: [ Backbone.mixins.DisposesAsView ],

        initialize: function(){
            this.template = JST['control'];
        },

        render: function(){

            var viewModel = this.getViewModel();

            this.$el.html(this.template.render(viewModel));

            return this;
        },

        getViewModel: function(){
            return {};
        }

    });

})(Mem);