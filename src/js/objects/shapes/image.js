/**
 * @class Image element class
 * @returns {Object}
 * @augments imageEditor.uiShape
 */
imageEditor.uiImage = imageEditor.uiShape.extend(
        /** @lends imageEditor.uiClipart.prototype */
                {
                    /**
                     * Constructor function for this class
                     * 
                     * @public
                     * @param {Object} params
                     * @constructs
                     */
                    __constructor: function(params) {
                        this.cornerOffset = true;
                        this.__superobject(params);
                    },
                    /**
                     * Draw this element onto the stage
                     * 
                     * @public
                     */
                    draw: function() {
                        this.loadImages([this.src], function(n) {
                            this.photoImage = this.photoImageOrig = n[this.src];
                            this.img = new Kinetic.Image({
                                image: this.photoImage
                            });
                            this.applyProperties(function() {
                                this.group.add(this.img);
                                this.redraw();
                                this.ready = true;
                                this.fire("ready", this);
                            });
                        }.bind(this));
                    },
                    /**
                     * Redraw the element in case it gets altered
                     * 
                     * @public
                     */
                    redraw: function() {
                        this.drawStage();
                    },
                    setFilter: function(filter, callback) {
                        var i = [];
                        filter == null || filter.name === "none" ? this.filter = null : (this.filter = filter, i[i.length] = filter);
                        this._filter(this.photoImageOrig, i, function(n) {
                            this.photoImage = this.renderedImage = n;
                            this._adjust(function() {
                                this._fill();
                                callback(this);
                            }.bind(this));
                        }.bind(this));
                    },
                    getFilter: function() {
                        return this.filterConfig;
                    },
                    setOpacity: function(value) {
                        this.img.opacity(value);
                        this.redraw();
                    },
                    getOpacity: function() {
                        return this.img.getOpacity();
                    },
                    setFlipHorizontal: function() {
                        this.flipHorizontal ? (this.flipHorizontal = null, this.img.scaleX(1), this.img.setX(0)) : (this.flipHorizontal = true, this.img.scaleX(-1), this.img.setX(this.width));
                    },
                    setFlipVertical: function() {
                        this.flipVertical ? (this.flipVertical = null, this.img.scaleY(1), this.img.setY(0)) : (this.flipVertical = true, this.img.scaleY(-1), this.img.setY(this.height));
                    },
                    getFlipVertical: function() {
                        return this.flipVertical;
                    },
                    getProperties: function() {
                        var n = this.getShadowConfig();
                        return this.filterConfig && (n = n.concat(this._getPropertyConfig("Filter"))), this.FlipVertical && (n = n.concat(this._getPropertyConfig("FlipVertical"))), this.contrast && this.contrast != 0 && (n = n.concat(this._getPropertyConfig("Contrast"))), this.brightness && this.brightness != 0 && (n = n.concat(this._getPropertyConfig("Brightness"))), this.flipHorizontal && (n = n.concat(this._getPropertyConfig("FlipHorizontal"))), n;
                    },
                    getConfig: function() {
                        return jQuery.extend({
                            src: this.src
                        }, this.__superobject());
                    },
                    _getShadowedShape: function() {
                        return this.img;
                    },
                    _adjust: function(callback) {
                        var t = [];
                        this.contrast && this.contrast !== 0 && (t[t.length] = {
                            name: "contrast",
                            params: this.contrast
                        });
                        this.brightness && this.brightness !== 0 && (t[t.length] = {
                            name: "brightness",
                            params: this.brightness
                        });
                        this._filter(this.renderedImage || this.photoImageOrig, t, function(t) {
                            this.photoImage = t;
                            this._fill();
                            callback(this);
                        }.bind(this));
                    },
                    _fill: function() {
                        this.img.setImage(this.photoImage);
                    },
                    setContrast: function(value, callback) {
                        this.contrast = value;
                        this._adjust(callback);
                    },
                    getContrast: function() {
                        return this.contrast || 0;
                    },
                    setBrightness: function(value, callback) {
                        this.brightness = value;
                        this._adjust(callback);
                    },
                    getBrightness: function() {
                        return this.brightness || 0;
                    },
                    /**
                     * Apply filter on this image
                     * 
                     * @private
                     * @param {Object} n
                     * @param {Function} callback
                     * @param {Object} t
                     */
                    _filter: function(n, t, callback) {
                        var r, u;
                        if (t == null || t.length == 0) {
                            callback(n);
                            return;
                        }
                        r = document.createElement("canvas");
                        r.width = n.width;
                        r.height = n.height;
                        u = this;
                        this.fire("progress-start", "Applying Filters", this);
                        Caman(r, n.src, function() {
                            for (var n = 0; n < t.length; ++n) {
                                this[t[n].name](t[n].params);
                            }
                            this.render(function() {
                                var t = r.toDataURL(), n = new Image;
                                n.onload = function() {
                                    r = null;
                                    callback(n);
                                    u.fire("progress-complete", this);
                                };
                                n.src = t;
                            });
                        });
                    }
                }
        );