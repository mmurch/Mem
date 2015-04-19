var Mem = Mem || {};
(function(mem){

    mem.CardModel = Brace.Model.extend({

        namedAttributes: {
            sharedId: 'number',
            isFound: 'boolean'
        },

        initialize: function(props, options){
            this.options = options;
        },

        getImageLeft: function(){
            return mem.CARD_WIDTH * this.getSharedId() * -1;
        },

        getImageTop: function(){
            return mem.CARD_HEIGHT * this.options.game.getMode() * -1;
        }
    });

})(Mem);