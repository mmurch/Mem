var Mem = Mem || {};
(function(mem){

    mem.ScoreView = Brace.View.extend({

        className: 'score',

        mixins: [ Backbone.mixins.SimpleView ],

        initialize: function(){
            this.template = JST['score'];
        }

    });

})(Mem);