var Mem = Mem || {};
(function(mem){

    mem.BoardView = Brace.View.extend({

        assignment: '.board',

        mixins: [ Backbone.mixins.ListView ],

        initialize: function(){
            this.template = JST['board'];
        }

    });

})(Mem);