// ==UserScript==
// @name         YouTube bottom gradient remover
// @namespace    https://github.com/KrystianLesniak
// @version      0.1.1
// @license MIT
// @description  UserScript that disables bottom gradient for YouTube player, all for yours better clarity.
// @author       Krystian Leśniak
// @match  *://*.youtube.com/watch?*
// @updateURL   https://github.com/KrystianLesniak/YouTubeBottomGradientRemover/raw/master/YouTubeBottomGradientRemover.user.js
// @downloadURL https://github.com/KrystianLesniak/YouTubeBottomGradientRemover/raw/master/YouTubeBottomGradientRemover.user.js
// @supportURL https://github.com/KrystianLesniak/YouTubeBottomGradientRemover/issues
// ==/UserScript==

(function() {
    // That's it :))

    fireGradientBottomChange();

    new ResizeObserver(fireGradientBottomChange).observe(document.getElementsByClassName("video-stream html5-main-video")[0]);

    function fireGradientBottomChange(){
       document.getElementsByClassName("ytp-gradient-bottom")[0].style.height = document.getElementsByClassName("ytp-chrome-bottom")[0].offsetHeight + "px";
       document.getElementsByClassName("ytp-gradient-bottom")[0].style.paddingTop = 0;
    }

})();
