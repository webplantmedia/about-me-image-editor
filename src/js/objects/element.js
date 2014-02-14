/**
 * @class UI element class
 * @returns {Object}
 * @augments imageEditor.coreObject
 */
imageEditor.uiElement = imageEditor.coreObject.extend(
        /** @lends imageEditor.uiElement.prototype */
                {
                    /**
                     * Constructor function for this class
                     * 
                     * @public
                     * @param {Object} params
                     * @constructs
                     */
                    __constructor: function(params) {
                        this.__superobject(params);
                        this.propertyQueue = [];
                    },
                    /**
                     * Process and load image(s) into this element
                     * 
                     * @param {Array} n
                     * @param {Function} t
                     */
                    loadImages: function(n, t) {
                        this.fire("progress-start", "Loading image", this);
                        var i = 0, r = {};
                        $.each(n, function(u, f) {
                            var e = new Image;
                            e.onload = function() {
                                r[f] = e;
                                i++;
                                i == n.length && (t(r), this.fire("progress-complete", this));
                            }.bind(this);
                            e.onerror = function() {
                                this.fire("progress-complete", this);
                                this.fire("error", "The image could not be loaded", this);
                            }.bind(this);
                            e.src = f.toLowerCase().startsWith("http") || f.toLowerCase().startsWith("data") ? f : config.assetsURL + f;
                        }.bind(this));
                    },
                    draw: function() {
                    },
                    deselect: function() {
                    },
                    getProperties: function() {
                    },
                    /**
                     * Select this element
                     * 
                     * @public
                     */
                    select: function() {
                        this.fire("select", this);
                    },
                    /**
                     * Redraw the main editor stage
                     * 
                     * @public
                     */
                    drawStage: function() {
                        this.layer.getStage().draw();
                    },
                    setProperty: function(type, value, callback) {
                        var found, i, f, prop;
                        if (this.propertyQueue.length > 0 || this.propertyInProgress) {
                            for (found = false, i = 0; i < this.propertyQueue.length; ++i)
                                this.propertyQueue[i].type === type && (this.propertyQueue[i].value = value, this.propertyQueue[i].callback = callback, found = true);
                            found || this.propertyQueue.push({
                                type: type,
                                value: value,
                                callback: callback
                            });
                            return;
                        }
                        this.propertyInProgress = true;
                        f = eval("this.set" + type);
                        this._isAsyncProperty(type) ? f.call(this, value, function() {
                            if (callback && callback.call(this), this.propertyInProgress = false, this.propertyQueue.length > 0) {
                                var n = this.propertyQueue.pop();
                                this.setProperty(n.type, n.value, n.callback);
                            }
                        }.bind(this)) : (f.call(this, value), callback && callback.call(this), this.propertyInProgress = false, this.propertyQueue.length > 0 && (prop = this.propertyQueue.pop(), this.setProperty(prop.type, prop.value, prop.callback)));
                    },
                    getProperty: function(type) {
                        var f = eval("this.get" + type);
                        return f ? f.call(this) : null;
                    },
                    applyProperties: function(callback) {
                        if (this.properties) {
                            var t = null, i = function(r) {
                                if (r === this.properties.length) {
                                    callback.call(this);
                                    return;
                                }
                                t = this.properties[r];
                                r++;
                                this.setProperty(t.type, t.value, function() {
                                    i(r);
                                }.bind(this));
                            }.bind(this);
                            i(0);
                        } else
                            callback.call(this);
                    },
                    /**
                     * Check if the property can lock down the browser (is async)
                     * 
                     * @private
                     * @param {String} property
                     * @returns {Boolean}
                     */
                    _isAsyncProperty: function(property) {
                        return property === "FontFamily" || property === "Frame" || property === "Filter" || property == "Contrast" || property == "Brightness";
                    },
                    /**
                     * Get the configuration of an element property
                     * 
                     * @param {Array} property
                     * @private
                     * @returns {Object}
                     */
                    _getPropertyConfig: function(property) {
                        var t, i;
                        if (property instanceof Array) {
                            for (t = [], i = 0; i < property.length; ++i)
                                t[t.length] = this._getPropertyConfig(property[i]);
                            return t;
                        }
                        return {
                            type: property,
                            value: this.getProperty(property)
                        };
                    },
                    getConfig: function() {
                        return {
                            type: this.type,
                            properties: this.getProperties()
                        };
                    }
                }
        );