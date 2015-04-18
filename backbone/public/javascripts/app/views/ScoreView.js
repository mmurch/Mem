var Mem = Mem || {};
(function(mem){

    mem.ScoreView = Brace.View.extend({

        assignment: '.score',

        mixins: [ Backbone.mixins.SimpleView ],

        initialize: function(){
            this.template = JST['score'];
        }

    });

})(Mem);