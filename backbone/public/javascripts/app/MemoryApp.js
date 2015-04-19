var Mem = Mem || {};

(function(mem){

    mem.MemoryApp = function(){

        this.start = function(root){

            var game = new mem.GameModel();

            new mem.MemoryView({
                el: root,
                model: game
            }).render();
        };

    };

})(Mem);

