/**
 * @class Core object class
 * @returns {Object}
 * @augments Class
 */
imageEditor.coreObject = Class.extend(
        /** @lends imageEditor.coreObject.prototype */
                {
                    /**
                     * Constructor function for this class
                     * 
                     * @public
                     * @param {Object} params
                     * @constructs
                     */
                    __constructor: function(params) {
                        for (var t in params) {
                            this[t] = params[t];
                        }
                        this.eventListeners = {};
                    },
                    /**
                     * Setup an event
                     * 
                     * @public
                     * @param {String} event
                     * @param {Function} callback
                     */
                    on: function(event, callback) {
                        this.eventListeners[event] || (this.eventListeners[event] = []);
                        this.eventListeners[event].push(callback);
                    },
                    /**
                     * Trigger an event
                     * 
                     * @public
                     * @param {String} event
                     * @param {Object} callback
                     */
                    fire: function(event, callback) {
                        var r = this.eventListeners[event], u, i;
                        if (r) {
                            for (u = r.length, i = 0; i < u; i++) {
                                r[i].apply(this, [callback || {}]);
                            }
                        }
                    }
                }
        );