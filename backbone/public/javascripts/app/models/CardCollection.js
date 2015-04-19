var Mem = Mem || {};
(function(mem){

    mem.CardCollection = Brace.Collection.extend({

        initialize: function(models, options){
            this.model = mem.CardModel;
            this.options = options;
            this.generateCards();
        },

        generateCards: function(){

            var cards = [];

            // push two card models for each card type, linked by sharedId
            _.each(_.range(0, mem.CARD_COUNT), function(i){
                cards.push(new mem.CardModel({
                        sharedId: i,
                        isFound: false,
                        isTesting: false
                    },
                    {
                        game: this.options.game
                    }));
                cards.push(new mem.CardModel({
                        sharedId: i,
                        isFound: false,
                        isTesting: false
                    },
                    {
                        game: this.options.game
                    }));
            }, this);

            this.reset(cards, { silent: true });

            // shuffle collection
            this.reset(this.shuffle(), { silent: true });
        }

    });

})(Mem);