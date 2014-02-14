/**
 * @class Clipart element class
 * @returns {Object}
 * @augments imageEditor.uiShape
 */
imageEditor.uiClipart = imageEditor.uiShape.extend(
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
                            this.imgObj = this.imgObjOrig = n[this.src];
                            this.img = new Kinetic.Image({
                                image: this.imgObj
                            });
                            this.resizeGroup();
                            this.applyProperties(function() {
                                this.group.add(this.img);
                                this.redraw();
                                this.ready = true;
                                this.fire("ready", this);
                            });
                        }.bind(this));
                    },
                    resizeGroup: function() {
                        this.width = this.img.width();
                        this.height = this.img.height();
                    },
                    /**
                     * Redraw the element in case it gets altered
                     * 
                     * @public
                     */
                    redraw: function() {
                        this.drawStage();
                    },
                    setFillColor: function(color) {
                        /*
                        if (color != "transparent") {
                            this.fillColor = color;
                            this.img.fill(this.fillColor);
                        }
                        else {
                            this.img.fill('rgba(0, 0, 0, 0)');
                        }
                        return;
                        this.img.clearFilter();
                        */
                        color == "transparent" ? this.fillColor = null : (this.fillColor = color, this.img.cache(), this.img.setFilterColorFill(color), this.img.filters([Kinetic.Filters.ColorFill]), this.img.draw());
                    },
                    getFillColor: function() {
                        return this.fillColor;
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
                    getFlipHorizontal: function() {
                        return this.flipHorizontal;
                    },
                    getProperties: function() {
                        var n = this.getShadowConfig();
                        n = n.concat(this._getPropertyConfig("Opacity"));
                        if (this.filterConfig) {
                            n = n.concat(this._getPropertyConfig("Filter"));
                        }
                        if (this.fillColor) {
                            n = n.concat(this._getPropertyConfig("FillColor"));
                        }
                        if (this.flipVertical) {
                            n = n.concat(this._getPropertyConfig("FlipVertical"));
                        }
                        if (this.flipHorizontal) {
                            n = n.concat(this._getPropertyConfig("FlipHorizontal"));
                        }
                        if (this.contrast && this.contrast != 0) {
                            n = n.concat(this._getPropertyConfig("Contrast"));
                        }
                        if (this.brightness && this.brightness != 0) {
                            n = n.concat(this._getPropertyConfig("Brightness"));
                        };
                        return n;
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
                        this._filter(this.renderedImage || this.imgObjOrig, t, function(t) {
                            this.imgObj = t;
                            this._fill();
                            callback(this);
                        }.bind(this));
                    },
                    _fill: function() {
                        this.img.setImage(this.imgObj);
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