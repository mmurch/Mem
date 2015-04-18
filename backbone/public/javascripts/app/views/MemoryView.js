var Mem = Mem || {};
(function(mem){

    mem.MemoryView = Brace.View.extend({

        mixins: [ Backbone.mixins.CompositeView ],

        initialize: function(){
            this.template = JST['mem']
        },

        preRender: function(){
            this.addChild(new mem.BoardView());
        }

    });

})(Mem);