var Mem = Mem || {};
(function(mem){

    mem.CardModel = Brace.Model.extend({

        namedAttributes: {
            sharedId: 'number',
            isFound: 'boolean',
            isTesting: 'boolean'
        },

        initialize: function(props, options){
            this.options = options;
        },

        getImageLeft: function(){
            return mem.CARD_WIDTH * this.getSharedId() * -1;
        },

        getImageTop: function(){
            return mem.CARD_HEIGHT * this.options.game.getMode() * -1;
        },

        handleSelection: function(){

            if (this.options.game.getIsLocked()){
                return;
            }

            if (this.getIsFound() || this.getIsTesting()){
                return;
            }

            if (this.options.game.maySelect()) {
                this.setIsTesting(true);
            }
            
        }
    });

})(Mem);