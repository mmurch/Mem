var Mem = Mem || {};
(function(mem){

    mem.MemoryView = Brace.View.extend({

        mixins: [ Backbone.mixins.ListView ],

        preRender: function(){

            this.disposeChildren();

            this.addChild(new mem.BoardView({
                model: this.model
            }));

            this.addChild(new mem.ScoreView({
                model: this.model
            }));

            this.addChild(new mem.ControlView({
                model: this.model
            }));

        }

    });

})(Mem);