/**
 * @class Text element class
 * @returns {Object}
 * @augments imageEditor.uiShape
 */
imageEditor.uiText = imageEditor.uiShape.extend(
        /** @lends imageEditor.uiText.prototype */
                {
                    /**
                     * Constructor function for this class
                     * 
                     * @public
                     * @param {Object} params
                     * @constructs
                     */
                    __constructor: function(params) {
                        this.localFonts = ["Arial", "Georgia"];
                        this.cornerOffset = true;
                        this.strokeCol = '#000000';
                        params.width || (params.width = 400);
                        this.__superobject(params);
                    },
                    /**
                     * Draw this element onto the stage
                     * 
                     * @public
                     */
                    draw: function() {
                        this.txt = new Kinetic.Text({
                            width: this.width,
                            text: this.title,
                            fill: "black",
                            fontSize: 24,
                            lineHeight: 1.2,
                            fontFamily: "Arial",
                            lineJoin: "round"
                        });
                        this.group.add(this.txt);
                        this.applyProperties(function() {
                            this._updateHeight();
                            this.redraw();
                            this.ready = true;
                            this.fire("ready", this);
                        });
                    },
                    /**
                     * Redraw the element in case it gets altered
                     * 
                     * @public
                     */
                    redraw: function() {
                        this.drawStage();
                    },
                    update: function() {
                        this.__superobject();
                        /*
                         this.setSize(this.scale * this.group.getWidth(), this.scale * this.group.getHeight());
                         this.scale = 1;
                         this.group.scale({
                         x: 1,
                         y: 1
                         });
                         this.txt.setWidth(this.width);
                         this.stroke && this.stroke.width(this.width);
                         this.setHeight(this.txt.getHeight());
                         */
                        this.stroke && this.stroke.width(this.width);
                    },
                    setText: function(value) {
                        this.title = value;
                        this.txt.setText(value);
                        this.stroke && this.stroke.setText(value);
                        this._updateHeight();
                        this.redraw();
                    },
                    getText: function() {
                        return this.txt.getText();
                    },
                    setFontSize: function(size) {
                        this.txt.setFontSize(size);
                        this.stroke && this.stroke.fontSize(size);
                        this._updateHeight();
                    },
                    getFontSize: function() {
                        return this.txt.fontSize();
                    },
                    setLineHeight: function(height) {
                        this.txt.setLineHeight(height);
                        this.stroke && this.stroke.setLineHeight(height);
                        this._updateHeight();
                    },
                    getLineHeight: function() {
                        return this.txt.getLineHeight();
                    },
                    setFontFamily: function(n, t) {
                        jQuery.inArray(n, this.localFonts) !== -1 ? (this._setFontFamily(n), t(this)) : this._loadFont(n, function() {
                            this._setFontFamily(n);
                            t(this);
                        }.bind(this));
                    },
                    getFontFamily: function() {
                        return this.txt.fontFamily();
                    },
                    setTextAlign: function(align) {
                        this.txt.setAlign(align);
                        this.stroke && this.stroke.setAlign(align);
                    },
                    getTextAlign: function() {
                        return this.txt.getAlign();
                    },
                    setTextFill: function(n) {
                        this.txt.setFill(n);
                        this.stroke && this.stroke.fill(n);
                    },
                    getTextFill: function() {
                        return this.txt.getFill();
                    },
                    setStrokeColor: function(n) {
                        this._createStroke();
                        this.stroke.stroke(n);
                    },
                    getStrokeColor: function() {
                        if (this.stroke) {
                            return this.stroke.stroke();
                        }
                    },
                    setStrokeWidth: function(n) {
                        this.strokeWid = n;
                        if (n === 0) {
                            this._removeStroke();
                        }
                        else {
                            this._createStroke();
                            this.stroke.strokeWidth(n);
                        }
                    },
                    getStrokeWidth: function() {
                        if (this.stroke) {
                            return this.stroke.strokeWidth();
                        }
                    },
                    setOpacity: function(n) {
                        this.txt.opacity(n);
                        this.stroke && this.stroke.opacity(n);
                    },
                    getOpacity: function() {
                        return this.txt.getOpacity();
                    },
                    getProperties: function() {
                        var n = this.getShadowConfig();
                        n = n.concat(this._getPropertyConfig(["Opacity", "TextFill", "FontSize", "FontFamily", "LineHeight", "TextAlign"]));
                        if (this.stroke) {
                            n = n.concat(this._getPropertyConfig(["StrokeColor", "StrokeWidth"]));
                        }
                        return n;
                    },
                    getConfig: function() {
                        return jQuery.extend({
                            title: this.title
                        }, this.__superobject());
                    },
                    _updateHeight: function() {
                        this.setHeight(this.txt.getHeight());
                    },
                    _setFontFamily: function(n) {
                        this.txt.fontFamily(n);
                        this.stroke && this.stroke.fontFamily(n);
                        this._updateHeight();
                    },
                    _loadFont: function(n, t) {
                        this.fire("progress-start", "Loading Font", this);
                        this.ready = false;
                        var i = this, r = function() {
                            t();
                            i.ready = true;
                            i.fire("progress-complete", i);
                        };
                        WebFont.load({
                            google: {
                                families: [n]
                            },
                            active: function() {
                                r();
                            },
                            inactive: function() {
                                r();
                                i.fire("error", "The specified font could not be loaded", this);
                            }
                        });
                    },
                    _createStroke: function() {
                        this.stroke || (this.stroke = this.txt.clone(), this.stroke.fillEnabled(), this.stroke.opacity(this.txt.opacity()), this.group.add(this.stroke), this.stroke.moveToBottom(), this._transferShadow(this.txt, this.stroke));
                    },
                    _removeStroke: function() {
                        this.stroke && (this._transferShadow(this.stroke, this.txt), this.stroke.remove(), this.stroke = null);
                    },
                    _getShadowedShape: function() {
                        return this.stroke || this.txt;
                    },
                    _transferShadow: function(n, t) {
                        n.hasShadow() && (t.setShadowColor(n.getShadowColor()), t.setShadowBlur(n.getShadowBlur()), t.setShadowOffset(n.getShadowOffset()), t.setShadowOpacity(n.getShadowOpacity()), n.shadowEnabled(false), t.shadowEnabled(true));
                    }
                }
        );