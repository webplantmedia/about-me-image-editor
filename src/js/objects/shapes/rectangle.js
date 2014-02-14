/**
 * @class Rectangle shape element class
 * @returns {Object}
 * @augments imageEditor.uiShape
 */
imageEditor.uiRectangleShape = imageEditor.uiShape.extend(
        /** @lends imageEditor.uiRectangleShape.prototype */
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
                        params.width || (params.width = 200);
                        params.height || (params.height = 160);
                        params.scale || (params.scale = 1);
                        params.deg || (params.deg = 0);
                        this.__superobject(params);
                    },
                    /**
                     * Draw this element onto the stage
                     * 
                     * @public
                     */
                    draw: function() {
                        this.rect = new Kinetic.Rect({
                            x: 0,
                            y: 0,
                            width: this.width,
                            height: this.height,
                            rotation: this.deg,
                            scale: this.scale,
                            strokeWidth: 4,
                            fill: 'black',
                            stroke: 'black'
                        });
                        this.applyProperties(function() {
                            this.group.add(this.rect);
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
                    setFillColor: function(color) {
                        if (color != "transparent") {
                            this.fillColor = color;
                            this.rect.fill(this.fillColor);
                        }
                    },
                    getFillColor: function() {
                        return this.fillColor;
                    },
                    setOpacity: function(value) {
                        this.rect.setOpacity(value);
                        this.redraw();
                    },
                    getOpacity: function() {
                        return this.rect.getOpacity();
                    },
                    getProperties: function() {
                        var n = this.getShadowConfig();
                        n = n.concat(this._getPropertyConfig("Opacity"));
                        return this.fillColor && (n = n.concat(this._getPropertyConfig("FillColor"))), n = n.concat(this._getPropertyConfig(["StrokeColor", "StrokeWidth"])), n;
                    },
                    getConfig: function() {
                        return jQuery.extend({
                            src: this.src
                        }, this.__superobject());
                    },
                    _getShadowedShape: function() {
                        return this.rect;
                    },
                    setStrokeColor: function(n) {
                        this.rect.stroke(n);
                    },
                    getStrokeColor: function() {
                        return this.rect.stroke();
                    },
                    setStrokeWidth: function(n) {
                        this.rect.strokeWidth(n);
                    },
                    getStrokeWidth: function() {
                        return this.rect.strokeWidth();
                    }
                }
        );