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

class ApexUtils {
    constructor() {
        if(this.screenChangeDelay == null) {
            this.screenChangeDelay = 750;
        }
    }
    /**
     * Loads the PrUnTools Menu Block to the page
     * @param additionalStyles - Additional styles to add to the page
     */
    load(additionalStyles='') {

        if($('BODY').hasClass('PrUnTools')) {
            // Add new Styles
            $('HEAD').append($('<STYLE>').html(additionalStyles));
        } else {
            // Add Body class so we know if PrUnTools is already loaded on page
            $('BODY').addClass('PrUnTools');
            // Add Styles
            let styles = ".PrUnTools_Menu_Wrap{margin-top:30px}.PrUnTools_Menu_Item{display:flex;flex-direction:row;align-items:center;justify-content:center;margin-bottom:1px;background-color:rgba(255,255,255,.05);cursor:pointer}.PrUnTools_Menu_Item_Label{display:inline-block;flex-grow:1;padding:0 4px 0 6px;line-height:19px;color:#999;text-transform:uppercase;font-family:'Droid Sans',sans-serif;font-size:11px}.PrUnTools_Menu_Item_Label:hover{color:#ddd}.PrUnTools_Menu_Item_Indicator{display:inline-block;width:2px;height:19px;background-color:rgba(63,162,222,.15)}.PrUnTools_Menu_Item.PrUnTools_Disabled .PrUnTools_Menu_Item_Label{color:#626262;cursor:not-allowed}.PrUnTools_Menu_Item.PrUnTools_Disabled .PrUnTools_Menu_Item_Label:hover{color:#626262;cursor:not-allowed}.PrUnTools_TileFrame{position:relative;display:flex;flex-direction:column;height:100%}.PrUnTools_TileFrame_Header{background-color:rgba(63,162,222,.15);color:#eee;padding:5px 8px;white-space:nowrap;border-bottom:1px solid rgba(63,162,222,.2);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;font-family:'Droid Sans',sans-serif;font-size:11px;text-transform:uppercase}.PrUnTools_TileFrame_Title{font-family:'Open Sans',sans-serif;display:inline;text-transform:uppercase;line-height:normal}.PrUnTools_TileFrame_SubTitle{font-size:8px;line-height:1;display:inline-block;margin-left:2px;color:#999}.PrUnTools_TileFrame_Body{font-family:'Droid Sans',sans-serif;font-size:11px;line-height:1.1;color:#bbb;position:relative;flex-grow:1}.PrUnTools_TileFrame_Anchor{position:absolute;top:0;bottom:0;width:100%}.PrUnTools_Menu_Item_Indicator.red{background-color:#d91818;background-color:#d91818;-webkit-box-shadow:0 0 6px 0 #5cb85c;-moz-box-shadow:0 0 6px 0 #5cb85c;box-shadow:0 0 6px 0 #d91818}.PrUnTools_Menu_Item_Indicator.green{background-color:#22d818;background-color:#22d818;-webkit-box-shadow:0 0 6px 0 #5cb85c;-moz-box-shadow:0 0 6px 0 #5cb85c;box-shadow:0 0 6px 0 #22d818}.PrUnTools_Menu_Item_Indicator.light-green{background-color:#62ef5b;background-color:#62ef5b;-webkit-box-shadow:0 0 6px 0 #5cb85c;-moz-box-shadow:0 0 6px 0 #5cb85c;box-shadow:0 0 6px 0 #62ef5b}.PrUnTools_Menu_Item_Indicator.blue{background-color:#1853d7;background-color:#1853d7;-webkit-box-shadow:0 0 6px 0 #5cb85c;-moz-box-shadow:0 0 6px 0 #5cb85c;box-shadow:0 0 6px 0 #1853d7}.PrUnTools_Menu_Item_Indicator.light-blue{background-color:#638eee;background-color:#638eee;-webkit-box-shadow:0 0 6px 0 #5cb85c;-moz-box-shadow:0 0 6px 0 #5cb85c;box-shadow:0 0 6px 0 #638eee}.PrUnTools_Menu_Item_Indicator.pulse-effect{animation:effects__pulse 2s infinite}.PrUnTools_Menu_Item_Indicator.rapid-pulse{animation:effects__pulse .25s infinite}@keyframes effects__pulse{0%{opacity:1}50%{opacity:.25}100%{opacity:1}}table.PrUnTools_Table{width:100%;border-collapse:collapse;width:100%;font-family:'Droid Sans',sans-serif;font-size:11px;line-height:1.1;color:#bbb}table.PrUnTools_Table td,table.PrUnTools_Table th{font-weight:400;padding:5px 8px}table.PrUnTools_Table thead th{border-bottom:1px solid #2b485a;text-align:left;padding:5px 8px 2px}table.PrUnTools_Table tbody td{padding:2px 8px;border-left:1px solid #2b485a}table.PrUnTools_Table tbody td:first-child{border-left:none}table.PrUnTools_Table tbody td:nth-child(odd){background-color:#23282b}table.PrUnTools_Table tbody{border-bottom:1px solid #2b485a}table.PrUnTools_Table tr.totals{border-top:1px solid #2b485a}table.PrUnTools_Table td p{margin:5px 0}.center-cell{text-align:center}.accounting-cell{text-align:right}.top-border-cell{border-top:1px solid #2b485a;border-bottom:1px solid #2b485a}input[type=number].PrUnTools_Control,input[type=text].PrUnTools_Control{height:17px;line-height:17px;padding:0 4px;border:0;border-bottom:1px solid #8d6411;background-color:#42361d;color:#bbb;text-align:right;width:100%}input.PrUnTools_Control:focus{outline:0;border-bottom:1px solid #f7a600}select.PrUnTools_Control{height:17px;line-height:17px;padding:0 4px;border:0;border-bottom:1px solid #8d6411;background-color:#42361d;color:#bbb;text-align:left}select.PrUnTools_Control:focus{outline:0;border-bottom:1px solid #f7a600}table.PrUnTools_Table td.PrUnTools_Label.PrUnTools_Label{font-weight:700;line-height:11px;border-right:1px solid #222;border-bottom:1px solid #222}table.PrUnTools_Table td.PrUnTools_Label.yellow{background-color:#f7a600;color:#000}table.PrUnTools_Table td.PrUnTools_Label_Input.yellow{background-color:#2d2920;color:#000;text-align:right;border-right:1px solid #222;border-bottom:1px solid #222}table.PrUnTools_Table td.PrUnTools_Label.blue{background-color:#3fa2de;color:#000;line-height:17px}table.PrUnTools_Table td.PrUnTools_Label_Output.blue{background-color:#23282b;color:#000;text-align:right;border-right:1px solid #222;border-bottom:1px solid #222}table.PrUnTools_Table td.PrUnTools_Label_Output.blue span{padding:2px 5px;line-height:17px;background-color:#26353e;color:#bbb}.PrUnTools_Alert_Overlay{position:absolute;top:0;right:0;bottom:0;left:0;display:flex;flex-direction:column;justify-content:center;background-size:96px 96px;z-index:99}.PrUnTools_Alert_Overlay .PrUnTools_Alert_Content{display:block;padding:10px;text-align:center;color:#fff}.PrUnTools_Alert_Overlay .PrUnTools_Alert_Title{font-size:14px;line-height:1.1;font-weight:600}.PrUnTools_Alert_Overlay.alert-yellow{background-color:rgba(240,173,78,.3);background-image:repeating-linear-gradient(-45deg,transparent,transparent 25%,rgba(240,173,78,.5) 25%,rgba(240,173,78,.5) 50%)}.PrUnTools_Alert_Overlay.alert-yellow .PrUnTools_Alert_Content{color:#272727;background-color:#f0ad4e}.PrUnTools_Alert_Overlay.alert-red{background-color:rgba(241,56,56,.316);background-image:repeating-linear-gradient(-45deg,transparent,transparent 25%,rgba(241,56,56,.4) 25%,rgba(241,56,56,.4) 50%)}.PrUnTools_Alert_Overlay.alert-red .PrUnTools_Alert_Content{color:#ebebeb;background-color:#f23838}.PrUnTools_Alert_Overlay.alert-green{background-color:rgba(56,241,56,.239);background-image:repeating-linear-gradient(-45deg,transparent,transparent 25%,rgba(56,241,56,.4) 25%,rgba(56,241,56,.4) 50%)}.PrUnTools_Alert_Overlay.alert-green .PrUnTools_Alert_Content{color:#fff;background-color:#0bae1c}";
            $('HEAD').append($('<STYLE>').html(styles + additionalStyles));

            // Wait 5s for APEX to fully load
            setTimeout(() => {

                // Add Menu Toggle Frame
                $('[class^="Frame__sidebar"] DIV[class^="Frame__toggle__"]:last').after($(menuTemplate));

                // Trigger Initial Screen Changed
                document.dispatchEvent(new Event('PrUnTools_ScreenChanged'));

                // Add event for changing of the SCRN field
                $('body').on('DOMSubtreeModified', 'SPAN[class^="HeadItem__label"]', () => {
                    // User changed screens, let the screen load and send
                    setTimeout(() => {
                        document.dispatchEvent(new Event('PrUnTools_ScreenChanged'));
                    }, this.screenChangeDelay);
                });

                // Notify load is complete
                document.dispatchEvent(new Event('PrUnTools_Loaded'));

            }, 5000);
        }
    }

    /**
     * Gets Screen Change detection delay in milliseconds, default is 750
     * @returns {number}
     */
    get screenChangeDelay() {
        return localStorage.getItem('screenChangeDelay');
    }

    /**
     * Sets Screen Change detection delay in milliseconds, default is 750
     * @param delayInMilliseconds - New delay value
     */
    set screenChangeDelay(delayInMilliseconds) {
        localStorage.setItem('screenChangeDelay', delayInMilliseconds);
    }

    /**
     * Get an ApexUtils specific value from LocalStorage
     * @param key - Key
     * @returns {var} - Item
     */
    getValue(key) {
        return localStorage.getItem('apexutils.'+key);
    }

    /**
     * Set an ApexUtils specific value from LocalStorage
     * @param key - Item Key
     * @param value - Item
     */
    setValue(key, value) {
        localStorage.setItem('apexutils.'+key, value);
    }

    /**
     * Used for adding .on EventHandlers for dynamicly added Menu items
     * @returns {string}
     */
    get menuAnchor() {
        return '[class^="Frame__sidebar"]';
    }

    /**
     * Gets the NEXT STATE information from the Redux Store
     * @returns {*} - JSON Object containing State information
     */
    get state() {
        // https://github.com/rain9441/prun-data-extraction/blob/master/src/services/redux-store-harness.ts
        let root = document.getElementById('container');

        if (!root) {
            this.showAlertBuffer('State Error', 'PrUnTools', 'Unable to get State', "Unable to find container element, this may not be running on APEX.", 350,180,'red');
        }
        root = root.children[0];
        if (!root) {
            this.showAlertBuffer('State Error', 'PrUnTools', 'Unable to get State', "Unable to find child of root container element, this may not be running on APEX.", 350,180,'red');
        }

        var reactPropertyName = Object.keys(root).filter(x => x.substring(0,5) == "__rea")[0];
        if (!reactPropertyName)
        {
            this.showAlertBuffer('State Error', 'PrUnTools', 'Unable to get State', "Unable to find react instance property name, this may not be running on APEX.", 350,180,'red');
        }

        return root[reactPropertyName]._currentElement._owner._context.store.getState().toJS();
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
        $('[class^="Dock__create__"]').click();

        // Find the new Buffer
        let buffer = $('DIV[class^="Window__window___"]:not(".PrUnTools_taken") DIV[class^="Tile__selector__"]:first').parent().parent().parent().addClass('PrUnTools_taken');

        // Remove the buffer input stuff
        $(buffer).find('DIV[class^="Tile__selector__"]').remove();
        $(buffer).find('DIV[class^="Tile__controls__"]').remove();

        // Remove minimize button
        $(buffer).find('SPAN[class^="Window__close__"]').remove();

        // Build the title and frame
        let bufferFrame = bufferTemplate.replace('{{:title}}',title).replace('{{:subtitle}}',subtitle).replace('{{:content}}', content);

        // Set window size
        $(buffer).find('DIV[class^="Window__body__"]').attr('style','position: relative; user-select: auto; width: ' + width + 'px; height: ' + height + 'px; box-sizing: border-box;')

        // Add Frame
        $(buffer).find('DIV[class^="Tile__tile__"]').append($(bufferFrame));
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
        $('[class^="Dock__create__"]').click();

        // Find the new Buffer
        let buffer = $('DIV[class^="Window__window___"]:not(".PrUnTools_taken") DIV[class^="Tile__selector__"]:first')
            .parent().parent().parent().addClass('PrUnTools_taken');

        // Remove the buffer input stuff
        $(buffer).find('DIV[class^="Tile__selector__"]').remove();
        $(buffer).find('DIV[class^="Tile__controls__"]').remove();

        // Remove minimize button
        $(buffer).find('SPAN[class^="Window__close__"]').remove();

        // Build the Alert
        let alertBox = alertTemplate.replace('{{:alert_title}}', alert_title)
            .replace('{{:alert_message}}', alert_message).replace('{{:color}}', color);

        // Build the title and frame
        let bufferFrame = bufferTemplate.replace('{{:title}}', frame_title).replace('{{:subtitle}}', frame_subtitle).replace('{{:content}}', alertBox);

        // Set window size
        $(buffer).find('DIV[class^="Window__body__"]').attr('style','position: relative; user-select: auto; width: ' + width + 'px; height: ' + height + 'px; box-sizing: border-box;')

        // Add Frame
        $(buffer).find('DIV[class^="Tile__tile__"]').append($(bufferFrame));
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
}

const apex = new ApexUtils();
Object.freeze(apex);
