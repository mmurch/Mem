var Mem = Mem || {};
(function(mem){

    mem.GameModel = Brace.Model.extend({
        namedAttributes: {
            mode: 'number',
            cards: false
        },

        initialize: function(){
            this.setMode(mem.CARD_MODE.STARK);
            this.setCards(new mem.CardCollection(null, {
                game: this
            }));
        }
    });

})(Mem);