var Mem = Mem || {};
(function(mem){

    var classes = "found testing";

    mem.CardView = Brace.View.extend({

        className: 'card',

        mixins: [ Backbone.mixins.DisposesAsView ],

        events: {
            'click': 'handleClick'
        },

        initialize: function(){
            this.template = JST['card'];
            this.model.on('change:isFound', this.render, this);
            this.model.on('change:isTesting', this.render, this);
        },

        render: function(){
            this.$el.removeClass(classes);

            this.$el.css({
                width: mem.CARD_WIDTH,
                height: mem.CARD_HEIGHT
            });

            if (this.model.getIsFound()){
                this.$el.addClass('found');
            }

            if (this.model.getIsTesting()){
                this.$el.addClass('testing');
            }

            // set visual for card face up
            if (this.model.getIsFound() || this.model.getIsTesting()){
                this.$el.css({
                    "background-position":
                    this.model.getImageLeft() + "px " +
                    this.model.getImageTop() + "px"
                });
            }
            return this;

        },

        handleClick: function(){
            this.model.handleSelection();
        }

    });

})(Mem);