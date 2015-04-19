var Mem = Mem || {};
(function(mem){

    mem.BoardView = Brace.View.extend({

        className: 'board',

        mixins: [ Backbone.mixins.ListView ],

        initialize: function(){
            this.template = JST['board'];
        }

    });

})(Mem);