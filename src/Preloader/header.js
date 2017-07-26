/*:
 * @plugindesc v1.0.0 Plugin used to preload assets.
 * @author Dr.Yami
 *
 * @help
 * Open the Plugin with your favourite text editor and puts assets name there.
 * Videos preload only supports YSP - VideoPlayer
 */

// ----------------------------------------------------------------------------
// CONFIGURATION
// ----------------------------------------------------------------------------

var ysp = ysp || {};
ysp.Preloader = {};

// GLOBAL Preload, will be preloaded when start the game
ysp.Preloader.GLOBAL = {
    IMAGES: [
        'system/Window',
        'characters/Actor1',
    ],

    VIDEOS: [
        'test.webm',
    ]
};

// MAP_BASED Preload, will be preloaded for each map.
ysp.Preloader.MAP_BASED = {
    // ID: { IMAGES: [], VIDEOS: [] }
    1: {
        IMAGES: [
            'tilesets/World_A1',
        ],

        VIDEOS: [

        ]
    }
};

// ----------------------------------------------------------------------------
// END CONFIGURATION
// ----------------------------------------------------------------------------

