var Mem = Mem || {};

(function(mem){

    mem.MemoryApp = function(){

        this.start = function(root){

            new mem.MemoryView({
                el: root
            }).render();
        };

    };

})(Mem);

