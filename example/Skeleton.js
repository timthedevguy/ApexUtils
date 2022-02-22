// ==UserScript==
// @name         CoolNewFeature
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://apex.prosperousuniverse.com/
// @grant        none
// @require  http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js
// @require  https://cdn.jsdelivr.net/gh/timthedevguy/apexutils@latest/dist/apexutils.min.js
// ==/UserScript==

(function() {
    'use strict';

    // Load ApexUtils (Inserts Menu on APEX UI)
    apex.load();

    // Fired when user changes to new SCRN
    document.addEventListener('PrUnTools_ScreenChanged', () => {
        console.log('Screen Changed');
    });

    // Fired when PrUnTools Menu is ready (Occurs after 5s of page load)
    document.addEventListener('PrUnTools_Loaded', () => {

        // Add new Menu Item
        apex.addMenuItem('example-item', 'EXPL', 'Example Item', example_click);
    });

    function example_click() {
        let html = '<h1>Hello World!</h1>';
        apex.showBuffer("Example", 'APEXUTILS', 500,500, html);
    }
})();