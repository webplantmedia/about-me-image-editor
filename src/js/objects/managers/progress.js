/**
 * @class UI ProgressBar class
 * @returns {Object}
 * @augments Class
 */
imageEditor.uiProgressElement = Class.extend(
        /** @lends imageEditor.uiProgressElement.prototype */
                {
                    /**
                     * Constructor function for this class
                     * 
                     * @public
                     * @param {Object} params
                     * @constructs
                     */
                    __constructor: function(params) {
                        this.elem = $(params.elem);
                        this.counter = 0;
                    },
                    /**
                     * Show this UI element
                     * 
                     * @public
                     * @param {String} element
                     */
                    show: function(element) {
                        this.counter++;
                        this.elem.html("<span>" + element + "</span>").show();
                    },
                    /**
                     * Hide this UI element
                     * 
                     * @public
                     */
                    hide: function() {
                        this.counter--;
                        this.counter === 0 && this.elem.hide();
                    }
                }
        );