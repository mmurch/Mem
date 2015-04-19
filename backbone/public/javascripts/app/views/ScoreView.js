var Mem = Mem || {};
(function(mem){

    mem.ScoreView = Brace.View.extend({

        className: 'score',

        mixins: [ Backbone.mixins.DisposesAsView ],

        initialize: function(){
            this.template = JST['score'];
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