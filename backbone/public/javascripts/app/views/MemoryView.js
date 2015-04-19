var Mem = Mem || {};
(function(mem){

    mem.MemoryView = Brace.View.extend({

        mixins: [ Backbone.mixins.ListView ],

        initialize: function(){
            this.template = JST['mem'];
        },

        preRender: function(){
            this.addChild(new mem.BoardView());
            this.addChild(new mem.ScoreView());
            this.addChild(new mem.ControlView());
        }

    });

})(Mem);