var Mem = Mem || {};
(function(mem){

    mem.CardCollection = Brace.Collection.extend({

        initialize: function(){
            this.model = mem.CardModel;
        }

    });

})(Mem);