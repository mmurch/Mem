var Mem = Mem || {};
(function(mem){

    mem.CardView = Brace.View.extend({

        className: 'card',

        mixins: [ Backbone.mixins.DisposesAsView ],

        initialize: function(){
            this.template = JST['card'];
        },

        render: function(){
            this.$el.html(this.template.render(this.model.toJSON()));
            this.$el.css({
                width: mem.CARD_WIDTH,
                height: mem.CARD_HEIGHT,
                "background-position":
                this.model.getImageLeft() + "px " +
                this.model.getImageTop() + "px"
            });
            return this;

        }

    });

})(Mem);