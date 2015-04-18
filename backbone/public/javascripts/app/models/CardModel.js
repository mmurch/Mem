var Mem = Mem || {};
(function(mem){

    mem.CardModel = Brace.Model.extend({

        namedAttributes: {
            sharedId: 'number',
            imageUrl: 'string',
            isFound: 'boolean',
            mode: 'number'
        }
    });

})(Mem);