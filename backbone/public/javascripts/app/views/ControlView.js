var Mem = Mem || {};
(function(mem){

    mem.BoardView = Brace.View.extend({

        assignment: '.control',

        mixins: [ Backbone.mixins.SimpleView ],

        initialize: function(){
            this.template = JST['control'];
        }

    });

})(Mem);