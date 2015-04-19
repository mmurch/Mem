var Mem = Mem || {};
(function(mem){

    mem.CARD_MODE = {
        STARK: 0,
        LANNISTER: 1,
        WALL: 2,
        HODOR: 3
    };

    mem.CARD_MODE_NAME = [
        'House Stark',
        'House Lannister',
        'Night\'s Watch',
        'Hodor'
    ];

    mem.CARD_MODE_VICTORY = [
        'Winter has come and you are ready!',
        'Your debts have been paid!',
        'You did it! Don\'t forget to burn them before sundown!',
        'Hodor!'
    ];

    mem.CARD_WIDTH = 112;
    mem.CARD_HEIGHT = 150;
    mem.CARD_COUNT = 8;

})(Mem);