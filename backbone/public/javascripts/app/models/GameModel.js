var Mem = Mem || {};
(function(mem){

    mem.GameModel = Brace.Model.extend({

        namedAttributes: {
            mode: 'number',
            cards: false,
            isLocked: false
        },

        initialize: function(){
            this.setMode(mem.CARD_MODE.STARK);
            this.setCards(new mem.CardCollection(null, {
                game: this
            }));
        },

        maySelect: function(){
            return this.getCards().filter(function(card){
                return card.getIsTesting();
            }).length < 2;
        }
    });

})(Mem);