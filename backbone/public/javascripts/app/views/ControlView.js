var Mem = Mem || {};
(function(mem){

    mem.ControlView = Brace.View.extend({

        className: 'control',

        mixins: [ Backbone.mixins.SimpleView ],

        initialize: function(){
            this.template = JST['control'];
        }

    });

})(Mem);