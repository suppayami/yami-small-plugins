/*:
 * @name YSP - Spine Integration
 * @plugindesc v1.0.0 Plugin used to integrate Spine into RMMV.
 * @author Dr.Yami
 *
 * @help
 * Simply integrate Spine into RMMV. The spine assets have to be
 * loaded before create new Spine.
 *
 * Requires `https://github.com/pixijs/pixi-spine`
 * Just get the `bin` js and put it into `index.html`
 */

var ysp = ysp || {};
ysp.Spine = {};

// ----------------------------------------------------------------------------
// CONFIGURATION
// ----------------------------------------------------------------------------

ysp.Spine.SETUP = {
    "goblin": {
        skin: "goblin",
        initAnimation: {
            name: "walk",
            autoplay: true,
            loop: true
        },
        json: "spines/goblins/export/goblins.json",
        atlas: "spines/goblins/export/goblins.atlas",
        texture: "spines/goblins/export/goblins.png"
    },

    "vine": {
        skin: "default",
        initAnimation: {
            name: "grow",
            autoplay: true,
            loop: true
        },
        json: "spines/vine/export/vine.json",
        atlas: "spines/vine/export/vine.atlas",
        texture: "spines/vine/export/vine.png"
    }
};

// ----------------------------------------------------------------------------
// END CONFIGURATION
// ----------------------------------------------------------------------------

