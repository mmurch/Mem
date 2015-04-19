var Mem = Mem || {};
(function(mem){

    mem.BoardView = Brace.View.extend({

        className: 'board',

        mixins: [ Backbone.mixins.ListView ],

        initialize: function(){
            this.template = JST['board'];
            this.model.getCards().on('reset', this.render, this);
        },

        preRender: function(){
            this.disposeChildren();
            this.addChildren(this.model.getCards().map(function(cardModel){
                return new mem.CardView({
                    model: cardModel,
                    game: this.model
                });
            }, this));
        }

    });

})(Mem);