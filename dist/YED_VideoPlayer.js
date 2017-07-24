/*:
 * @plugindesc Plugin used for playing video.
 * @author Dr.Yami
 *
 * @help
 * Use script call:
 *   ysp.VideoPlayer.loadVideo(videoName) - Preload Video
 *   ysp.VideoPlayer.releaseVideo(videoName) - Release memory for a Video
 *   ysp.VideoPlayer.newVideo(videoName, id) - Create new Video object with id
 *   ysp.VideoPlayer.playVideoById(id) - Play a Video object by id
 *   ysp.VideoPlayer.stopVideoById(id) - Stop a Video object by id
 *   ysp.VideoPlayer.setLoopById(id) - Make a Video object playing loop by id
 *   ysp.VideoPlayer.getVideoById(id) - Get Video object by id
 *
 * Video Object is a PIXI.Sprite object, can be re-position by modifying x and y props
 */

!function(e){function t(r){if(o[r])return o[r].exports;var n=o[r]={i:r,l:!1,exports:{}};return e[r].call(n.exports,n,n.exports,t),n.l=!0,n.exports}var o={};t.m=e,t.c=o,t.d=function(e,o,r){t.o(e,o)||Object.defineProperty(e,o,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var o=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(o,"a",o),o},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=0)}([function(e,t,o){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}var n=o(1),i=r(n);(0,r(o(2)).default)(Spriteset_Base),window.ysp=window.ysp||{},window.ysp.VideoPlayer=i.default},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r={},n={},i=function(e){if(r[e])return r[e];var t=PIXI.Texture.fromVideo("movies/"+e);return t.baseTexture.autoPlay=!1,r[e]=t,t},u=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"video",o=new PIXI.Sprite(i(e));return o.update=function(){o.texture.update()},n[t]=o,o},d=function(e){e.texture.baseTexture.source.play(),SceneManager._scene._spriteset.addVideo(e)},a=function(e){var t=getVideo(e);d(t)},s=function(e){e.texture.baseTexture.source.pause(),SceneManager._scene._spriteset.removeVideo(e)},c=function(e){var t=getVideo(e);s(t),delete n[e]},p=function(e){e.texture.baseTexture.source.loop=!0},f=function(e){var t=getVideo(e);p(t)},l=function(e){delete r[e]},v=function(e){return n[e]};t.default={newVideo:u,loadVideo:i,playVideoById:a,stopVideoById:c,setLoopById:f,releaseVideo:l,getVideoById:v}},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=e.prototype.createUpperLayer;e.prototype.createUpperLayer=function(){this.createVideos(),t.call(this)},e.prototype.createVideos=function(){this._videosContainer=new Sprite,this.addChild(this._videosContainer)},e.prototype.addVideo=function(e){this._videosContainer.addChild(e)},e.prototype.removeVideo=function(e){this._videosContainer.removeChild(e)}}}]);
//# sourceMappingURL=YED_VideoPlayer.js.map