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

            this.getCards().on('change:isTesting', this.handleTestingChange, this);
        },

        maySelect: function(){
            return this.getTestingCards().length < 2;
        },

        getTestingCards: function(){
            return this.getCards().filter(function(card){
                return card.getIsTesting();
            });
        },

        handleTestingChange: function(){
            var testingCards = this.getTestingCards();
            if (testingCards.length < 2){
                return;
            }

            if (testingCards.length === 2){
                if (testingCards[0].getSharedId() === testingCards[1].getSharedId()) {
                    _.each(testingCards, function(card){
                        card.setIsFound(true);
                        card.setIsTesting(false, { silent: true });
                    }, this);
                }
                else {
                    this.setIsLocked(true);
                    var _this = this;
                    setTimeout(function(){
                        _this.unlockGame();
                    }, 800);
                }
            }
        },

        unlockGame: function(){
            var testingCards = this.getTestingCards();
            _.each(testingCards, function(card){
                card.setIsTesting(false);
            }, this);
            this.setIsLocked(false);
        }
    });

})(Mem);