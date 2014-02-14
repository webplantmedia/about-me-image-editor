/**
 * @class Background element class
 * @returns {Object}
 * @augments imageEditor.uiElement
 */
imageEditor.uiBackground = imageEditor.uiElement.extend(
        /** @lends imageEditor.uiBackground.prototype */
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
                    },
                    /**
                     * Draw this element onto the stage
                     * 
                     * @public
                     */
                    draw: function() {
                        this.renderGroup = new Kinetic.Group({
                            x: 0,
                            y: 0,
                            width: this.stageWidth,
                            height: this.stageHeight
                        });
                        this.bg = new Kinetic.Image({
                            width: this.stageWidth,
                            height: this.stageHeight
                        });
                        this.layer.add(this.renderGroup);
                        this.renderGroup.add(this.bg);
                        this.loadImages([this.src], function(n) {
                            this.photoImage = this.photoImageOrig = n[this.src];
                            this.renderGroup.on("mousedown tap", function() {
                                this.select();
                            }.bind(this));
                            this.updateOrder();
                            this.applyProperties(function() {
                                this._fill();
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
                    /**
                     * Select this element
                     * 
                     * @public
                     */
                    select: function() {
                        this.selected = true;
                        this.__superobject();
                    },
                    /**
                     * Remove this element
                     * 
                     * @public
                     */
                    dispose: function() {
                        this.bg.remove();
                        this.drawStage();
                    },
                    /**
                     * Get the photo of this background
                     * 
                     * @public
                     * @returns {Object}
                     */
                    getPhoto: function() {
                        return this.src;
                    },
                    /**
                     * Set the photo of this background
                     * 
                     * @public
                     * @param {String} img
                     */
                    setPhoto: function(img) {
                        this.loadImages([img], function(t) {
                            this.src = img;
                            this.photoImage = this.photoImageOrig = t[img];
                            this.setFilter(this.filter, function() {
                                this.redraw();
                            }.bind(this));
                        }.bind(this));
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
                        return this.filter;
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
                    setFrame: function(img, callback) {
                        if (img == null) {
                            this.frame && (this.frame.remove(), this.frame = null, this.frameFillColor && (this.frameFillColor = null), this.redraw());
                            callback(this);
                            return;
                        }
                        this.loadImages([img], function(i) {
                            this.frameSrc = img;
                            this.frame || (this.frame = new Kinetic.Image({
                                width: this.stageWidth,
                                height: this.stageHeight
                            }), this.renderGroup.add(this.frame), this.updateOrder());
                            this.frame.setImage(i[img]);
                            //this.frame.hitFunc(function() {
                                this.frameFillColor && this.setFrameFillColor(this.frameFillColor);
                            //}.bind(this));
                            //this.layer.drawHit();
                            callback(this);
                        }.bind(this));
                    },
                    getFrame: function() {
                        return this.frame != null ? this.frameSrc : null;
                    },
                    setFrameFillColor: function(color) {
                        if (this.frame) {
                            if (color == "transparent") {
                                this.frameFillColor = null;
                            }
                            else {
                                this.frameFillColor = color;
                                this.frame.cache();
                                this.frame.setFilterColorFill(color);
                                this.frame.filters([Kinetic.Filters.ColorFill]);
                                this.layer.draw();
                            }
                        }
                    },
                    getFrameFillColor: function() {
                        return this.frameFillColor;
                    },
                    updateOrder: function() {
                        this.renderGroup.moveToBottom();
                        //this.frame && this.frame.moveToTop();
                    },
                    getProperties: function() {
                        var n = [];
                        return this.filter && (n = n.concat(this._getPropertyConfig("Filter"))), this.frame && (n = n.concat(this._getPropertyConfig("Frame"))), this.frameFillColor && (n = n.concat(this._getPropertyConfig("FrameFillColor"))), this.contrast && this.contrast != 0 && (n = n.concat(this._getPropertyConfig("Contrast"))), this.brightness && this.brightness != 0 && (n = n.concat(this._getPropertyConfig("Brightness"))), n;
                    },
                    getConfig: function() {
                        return jQuery.extend({
                            src: this.src,
                            zindex: 0
                        }, this.__superobject());
                    },
                    _fill: function() {
                        this.bg.setImage(this.photoImage);
                    },
                    /**
                     * Apply filter on this background
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