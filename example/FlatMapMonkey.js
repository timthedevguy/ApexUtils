// ==UserScript==
// @name         PrUnMap
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://apex.prosperousuniverse.com/
// @grant        none
// @require  http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js
// @require  https://cdn.jsdelivr.net/gh/binarygod/apexutils@0.0.4/dist/apexutils.min.js
// @require  https://unpkg.com/leaflet@1.6.0/dist/leaflet.js
// ==/UserScript==

(function() {
    'use strict';

    $('HEAD').append($('<LINK>').attr('href', 'https://unpkg.com/leaflet@1.6.0/dist/leaflet.css').attr('rel', 'stylesheet'));

    apex.load('container{margin-right:0;}');

    // Fired when user changes to new SCRN
    document.addEventListener('PrUnTools_ScreenChanged', () => {
        console.log('Screen Changed');
    });

    // Fired when PrUnTools Menu is ready (Occurs after 5s of page load)
    document.addEventListener('PrUnTools_Loaded', () => {

        // Add new Menu Item
        apex.addMenuItem('bg-map', 'FMAP', 'Flat Map', map_click);
        apex.addMenuItem('help', 'HELP', 'PrUn Tools Help', help_click);
    });

    function map_click() {
        apex.showBuffer("Flat Map", 'APEXUTILS',450,450, '<div id="mapid" style="width:100%;height:100%;"></div>');

        var map = L.map('mapid', {
            crs: L.CRS.Simple
        });
        var bounds = [[0,0], [1000,1000]];
        var image = L.imageOverlay('http://ausecko.com/prun_map.png', bounds).addTo(map);
        map.fitBounds(bounds);
    }

    function help_click() {
        apex.showBuffer("Help", 'APEXUTILS', 500,500, apex.help);
    }
})();