const menuTemplate = `<div class="PrUnTools_Menu_Wrap" id="PrUnTools_Menu"></div>`;
const menuItemTemplate = `<div class="PrUnTools_Menu_Item {{:class}}" title="{{:tooltip}}">
            <span class="PrUnTools_Menu_Item_Label" id="{{:id}}">{{:text}}</span>
            <div class="PrUnTools_Menu_Item_Indicator"></div>
        </div>`;
const bufferTemplate = `<div class="PrUnTools_TileFrame">
            <div class="PrUnTools_TileFrame_Header">
                <div class="PrUnTools_TileFrame_Title">{{:title}}</div>
                <div class="PrUnTools_TileFrame_SubTitle">{{:subtitle}}</div>
            </div>
            <div class="PrUnTools_TileFrame_Body">
                <div class="PrUnTools_TileFrame_Anchor">
                    <div style="position: relative; overflow: hidden; width: 100%; height: 100%;">
                        <div style="position: absolute; top: 0px; left: 0px; right: 0px; bottom: 0px; overflow: scroll; margin-right: -17px; margin-bottom: -17px;">
                            {{:content}}
                        </div>
                    </div>
                </div>
            </div>
        </div>`;
const alertTemplate = `
        <div class="PrUnTools_Alert_Overlay alert-{{:color}}">
            <div class="PrUnTools_Alert_Content">
                <span class="PrUnTools_Alert_Title">
                    <span>{{:alert_title}}</span>
                </span>
                <span class="PrUnTools_Alert_Content">
                    <div>
                        <span>{{:alert_message}}</span>
                    </div>
                </span>
            </div>
        </div>
    `;
const logoElement = '.JWoFGgEPrdT6JShoeS0\\+Ag\\=\\=';

class ApexUtils {
    logoObserver = new MutationObserver(function(){});

    constructor() {
        this.loaded = false;
    }
    /**
     * Loads the PrUnTools Menu Block to the page
     * @param additionalStyles - Additional styles to add to the page
     */
    load(additionalStyles='', menuTimeout=5000) {

        // Add new Styles
        if(additionalStyles != '') {
            $('HEAD').append($('<STYLE>').html(additionalStyles));
        }

        if(!$('BODY').hasClass('PrUnTools')) {

            // Add Body class so we know if PrUnTools is already loaded on page
            $('BODY').addClass('PrUnTools');

            // Add Styles
            $('HEAD').append($('<LINK>').attr('href', 'https://timthedevguy.com/apexutils/apexutils_styles.min.css').attr('rel', 'stylesheet'));

            setTimeout(function() {
                apex.monitorOnLoaded();
            }, 3000);
            // Setup On Loading monitor

        }
    }

    get isLoaded() {
        return this.loaded;
    }

    set isLoaded(loaded) {
        this.loaded = loaded;
    }

    get isLoadingData() {
        if($($(logoElement)[0]).hasClass('iydywTEIjthCtOf0nolVCQ==')) {
            return true;
        }

        return false;
    }

    /**
    /**
     * Gets the NEXT STATE information from the Redux Store
     * @returns {*} - JSON Object containing State information
     */
    get state() {
        // https://github.com/rain9441/prun-data-extraction/blob/master/src/services/redux-store-harness.ts
        // Special Thanks to Rain!!!
        return document.getElementById('container')._reactRootContainer._internalRoot.current.child.child.child.pendingProps.store.getState().toJS();
    }

    /**
     * Adds new Menu Item to the PrUnTools Menu block
     * @param {string} id Element ID
     * @param {string} text Button Text
     * @param {string} tooltip Button Tooltip
     * @param {function} handler Button Click Handler
     * @param {string} cssClass CSS Classes
     * @param {boolean} disable Add PrUnTools_Disabled?
     * @param {string} menuId ID of Menu Block to add menu to
     */
    addMenuItem(id, text, tooltip='', handler, cssClass='', disable=false, menuId='#PrUnTools_Menu') {

        // Combine Disabled Class if True
        if(disable) {cssClass += 'PrUnTools_Disabled';}

        // Create the Menu Item HTML
        let menuHtml = menuItemTemplate.replace('{{:id}}', id).replace('{{:text}}', text)
            .replace('{{:tooltip}}', tooltip).replace('{{:class}}', cssClass);
        let menuItem = $(menuHtml);

        // Add Menu Item
        $(menuId).append($(menuItem));

        // Assign Click Handler
        if(handler !== undefined) {
            $(menuItem).click(handler);
        }
    }

    flashMenuItem(id, color, timeout= 1000) {
        // Internet said to do this, still don't grasp promises
        return new Promise(function (fulfill, reject){

            // Get Indicator object
            let indicator = $('#' + id).parent().children("DIV.PrUnTools_Menu_Item_Indicator")
            let classes = indicator.attr('class').split(/\s+/);

            // Remove extra classes
            classes.forEach((item) => {
                if(item != 'PrUnTools_Menu_Item_Indicator') {
                    indicator.removeClass(item);
                }
            });

            // Add pulsing class
            indicator.addClass('rapid-pulse').addClass(color);

            // Add timeout
            setTimeout(function() {

                // Remove pulsing class
                indicator.removeClass('rapid-pulse').removeClass(color);

                // Add original classes back
                classes.forEach((item) => {
                    if(item != 'PrUnTools_Menu_Item_Indicator') {
                        indicator.addClass(item);
                    }
                });

                fulfill(); //if the action succeeded
            }, timeout);
        });
    }

    setMenuItemColor(id, color) {
        // Get Indicator object
        let indicator = $('#' + id).parent().children("DIV.PrUnTools_Menu_Item_Indicator")
        $(indicator).attr('class', 'PrUnTools_Menu_Item_Indicator');
        indicator.addClass(color);
    }

    /**
     * Show Buffer creates a new Buffer window with supplied values and inserts
     * the provided content
     * @param {string} title - Title to be used on the Frame
     * @param {string} subtitle - Subtitle of Frame
     * @param {number} width - Width of the Buffer Window
     * @param {number} height - Height of the Buffer Window
     * @param {string} content - HTML content to be placed in the buffer window
     */
    showBuffer(title, subtitle, width, height, content) {
        // Create new Buffer
        //$('[class^="Dock__create__"]').click();
        $('#TOUR_TARGET_BUTTON_BUFFER_NEW').click();

        // Find the new Buffer
        //let buffer = $('DIV[class="_1Gt2vj54dwdsGZMO13RxjN"]:not(".PrUnTools_taken") DIV[class="_86iI4sy8I8Gb9DRZloqFB"]:first').parent().parent().parent().addClass('PrUnTools_taken');
        let buffer = $('#TOUR_TARGET_EMPTY_BUFFER:not(.PrUnTools_taken):first').addClass("PrUnTools_taken");

        // Remove the buffer input stuff
        //$(buffer).find('DIV[class="_86iI4sy8I8Gb9DRZloqFB"]').remove();
        //$(buffer).find('DIV[class="_1mubANzqV2fICrNGnMze0y"]').remove();


        // Remove minimize button
        //$(buffer).find('SPAN[class="_3pd4GjlRDJtIK4izuUrc2Q BNTJu1og0XIu3K26V_ddU _33A_5lETf4HBqwJi_q-jhZ _2_LtsZLiGIKxWd_UHEKnY6"]').remove();

        // Build the title and frame
        let bufferFrame = bufferTemplate.replace('{{:title}}',title).replace('{{:subtitle}}',subtitle).replace('{{:content}}', content);

        // Set window size
        $(buffer).find('DIV[class="_1fygCuy4MXc3okBz3qYOdw\\=\\="]').attr('style','position: relative; user-select: auto; width: ' + width + 'px; height: ' + height + 'px; box-sizing: border-box;')

        // Add Frame
        //$(buffer).find('DIV[class="_2-M8WlI-JS7ws_xSL-0yYo"]').append($(bufferFrame));
        $(buffer).find('#TOUR_TARGET_EMPTY_TILE').html(bufferFrame);
    }

    /**
     * Shows a new Alert window buffer
     * @param frame_title - Title to be used on the Frame
     * @param frame_subtitle - Subtitle of Frame
     * @param alert_title - Alert title
     * @param alert_message - Alert content
     * @param width - Width of the Buffer Window
     * @param height - Height of the Buffer Window
     * @param color - Alert color (red|yellow|green)
     */
    showAlertBuffer(frame_title, frame_subtitle, alert_title, alert_message, width, height, color='yellow') {
        // Create new Buffer
        $('[class="_38GFUZ_bqqfSehlTdlvwGE _2tgF3CjTxcwKdSpZ_motdg _33A_5lETf4HBqwJi_q-jhZ _1vWRpdI8cKNMPyOPnzlXgX"]').click();

        // Find the new Buffer
        let buffer = $('DIV[class="_1Gt2vj54dwdsGZMO13RxjN"]:not(".PrUnTools_taken") DIV[class="_86iI4sy8I8Gb9DRZloqFB"]:first')
            .parent().parent().parent().addClass('PrUnTools_taken');

        // Remove the buffer input stuff
        $(buffer).find('DIV[class="_86iI4sy8I8Gb9DRZloqFB"]').remove();
        $(buffer).find('DIV[class="_1mubANzqV2fICrNGnMze0y"]').remove();

        // Remove minimize button
        $(buffer).find('SPAN[class="_3pd4GjlRDJtIK4izuUrc2Q BNTJu1og0XIu3K26V_ddU _33A_5lETf4HBqwJi_q-jhZ _2_LtsZLiGIKxWd_UHEKnY6"]').remove();

        // Build the Alert
        let alertBox = alertTemplate.replace('{{:alert_title}}', alert_title)
            .replace('{{:alert_message}}', alert_message).replace('{{:color}}', color);

        // Build the title and frame
        let bufferFrame = bufferTemplate.replace('{{:title}}', frame_title).replace('{{:subtitle}}', frame_subtitle).replace('{{:content}}', alertBox);

        // Set window size
        $(buffer).find('DIV[class="_1T3GrusQ2ydTsNKeMaEfPl"]').attr('style','position: relative; user-select: auto; width: ' + width + 'px; height: ' + height + 'px; box-sizing: border-box;')

        // Add Frame
        $(buffer).find('DIV[class^="_2-M8WlI-JS7ws_xSL-0yYo"]').append($(bufferFrame));
    }

    /**
     * Returns Help Text HTML
     * @returns {string}
     */
    help() {
        return `<div style="padding: 0 20px;">
                <h2>Welcome to ApexUtils</h2>
                <h3>What is ApexUtils</h3>
                <p>PrUnTools started as a private set of tools that I wrote with another member of the community. I then 
                noticed that I could seperate the Apex code in to it's own reusable library which resulted in ApexUtils.  This would allow me to keep
                 my tools and provide a framework for others to use to create their own.</p>
                <p>ApexUtils is a set of utility functions designed to be used by TamperMonkey scripts (or similar products) 
                 to interact with the APEX interface in a safe way.  The utility also loads CSS that mimics the style of
                  APEX but with class names you can use in your own HTML.</p>
                <h3>What ApexUtils is NOT</h3>
                <p>ApexUtils is NOT a framework for creating Bots.  It performs only one automatic click to create a 
                new buffer window.  I have personally showed this feature to the Devs and they are ok with it.  <strong>You</strong> are
                 responsible for what  you create with the tool.</p>
                <h3>Is this against ToS</h3>
                <p>No. ApexUtils itself only reads and adds content to the Client.  It does not send data to the server or
                automate client tasks.  ApexUtils interfaces with the DOM elements of the page and does not attempt to 
                interact with the Javascript in the page, all modifications are done using it's own Javascript utilizing 
                jQuery.</p>
                <h3>What can I use ApexUtils for</h3>
                <p>ApexUtils can be used to make anything that would be useful on the client.  For example the included FMAP 
                utility used to show the Flat Map of the universe.</p>
                <h3>Resources</h3>
                <ul>
                    <li>GitHub</li>
                </ul>
            </div>`;
    }

    monitorOnBufferCreated() {

        let containerSelector = 'body';
        let elementSelector = '._8RTWQyDDvco1YEMU0yd0ag\\=\\=';

        let onMutationsObserved = function(mutations) {
            mutations.forEach(function(mutation) {
                if (mutation.addedNodes.length) {
                    var elements = $(mutation.addedNodes).find(elementSelector);
                    for (var i = 0, len = elements.length; i < len; i++) {
                        document.dispatchEvent(new Event('PrUnTools_BufferCreated'));
                    }
                }
            });
        };

        let target = $(containerSelector)[0];
        let config = { childList: true, subtree: true };
        let MutationObserver = window.MutationObserver || window.WebKitMutationObserver;
        let observer = new MutationObserver(onMutationsObserved);
        observer.observe(target, config);
    }

    monitorOnScreenChange() {

        let elementSelector = '._00nZwVF0HWBYVHUWgUmkGw\\=\\=';

        let onMutationsObserved = function(mutations) {
            document.dispatchEvent(new Event('PrUnTools_ScreenChange_Started'));
            if(!$($(logoElement)[0]).hasClass('iydywTEIjthCtOf0nolVCQ==')) {
                document.dispatchEvent(new Event('PrUnTools_ScreenChange_Complete'));
            } else {
                setTimeout(onMutationsObserved, 300); // try again in 300 milliseconds
            }
        };

        let target = $(elementSelector)[0];
        let config = { characterData: true, attributes: false, childList: false, subtree: true };
        let MutationObserver = window.MutationObserver || window.WebKitMutationObserver;
        let observer = new MutationObserver(onMutationsObserved);
        observer.observe(target, config);
    }

    monitorOnTileUpdate() {

        let containerSelector = '.yC8X0vUOtId9OdarJ-Gxvg\\=\\=';
        let elementSelector = '._2ELYlP31j95Y98WT6zodUQ\\=\\=';

        let onMutationsObserved = function(mutations) {
            // if(!$($(logoElement)[0]).hasClass('_9loCuZeuQgJye2371syub')) {
            //     console.log(mutations);
            //     document.dispatchEvent(new Event('PrUnTools_TileUpdate'));
            // } else {
            //     setTimeout(onMutationsObserved, 300); // try again in 300 milliseconds
            // }
            setTimeout(function(mutations) {

                if(!apex.isLoadingData) {
                    document.dispatchEvent(new Event('PrUnTools_TileUpdate'));
                }
            }, 300);

        };

        let target = $(containerSelector)[0];
        let config = { childList: true, subtree: true };
        let MutationObserver = window.MutationObserver || window.WebKitMutationObserver;
        let observer = new MutationObserver(onMutationsObserved);
        observer.observe(target, config);
    }

    monitorOnLoaded() {

        let onMutationsObserved = function(mutations) {
            if(!$($(logoElement)[0]).hasClass('.iydywTEIjthCtOf0nolVCQ==')) {
                if(!apex.isLoaded) {
                    // Set loaded to true
                    apex.isLoaded = true;
                    // Disconnect the Observer
                    apex.disconnect('logoObserver');
                    apex.monitorOnScreenChange();
                    apex.monitorOnBufferCreated();
                    apex.monitorOnTileUpdate();

                    // Add Menu Toggle Frame
                    $('DIV[id="TOUR_TARGET_SIDEBAR_LEFT_02"]:last').after($(menuTemplate));
                    // Send Loaded Event
                    document.dispatchEvent(new Event('PrUnTools_Loaded'));
                }
            }
        };

        let target = $(logoElement)[0];
        let config = { characterData: false, attributes: true, childList: false, subtree: false, attributeFilter: ['class'] };
        let MutationObserver = window.MutationObserver || window.WebKitMutationObserver;
        this.logoObserver = new MutationObserver(onMutationsObserved);
        this.logoObserver.observe(target, config);
    }

    disconnect(observerName) {
        if(observerName === 'logoObserver') {
            this.logoObserver.disconnect();
        }
    }
}

const apex = new ApexUtils();
//Object.freeze(apex);
