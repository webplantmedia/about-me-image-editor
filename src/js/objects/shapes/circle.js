/**
 * @class Circle shape element class
 * @returns {Object}
 * @augments imageEditor.uiShape
 */
imageEditor.uiCircleShape = imageEditor.uiShape.extend(
        /** @lends imageEditor.uiCircleShape.prototype */
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
                        params.height || (params.height = 200);
                        params.deg || (params.deg = 0);
                        params.radius || (params.radius = 100);
                        params.scale || (params.scale = 1);
                        this.__superobject(params);
                    },
                    /**
                     * Draw this element onto the stage
                     * 
                     * @public
                     */
                    draw: function() {
                        this.circle = new Kinetic.Circle({
                            x: this.x,
                            y: this.y,
                            radius: this.radius,
                            rotation: this.deg,
                            scale: this.scale,
                            stroke: 'black',
                            fill: 'black',
                            strokeWidth: 4
                        });
                        this.group.add(this.circle);
                        this.applyProperties(function() {
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
                            this.circle.fill(this.fillColor);
                        }
                        else {
                            this.circle.fill('rgba(0, 0, 0, 0)');
                        }
                    },
                    getFillColor: function() {
                        return this.fillColor;
                    },
                    setOpacity: function(value) {
                        this.circle.setOpacity(value);
                        this.redraw();
                    },
                    getOpacity: function() {
                        return this.circle.getOpacity();
                    },
                    getProperties: function() {
                        var n = this.getShadowConfig();
                        n = n.concat(this._getPropertyConfig("Opacity"));
                        return this.fillColor && (n = n.concat(this._getPropertyConfig("FillColor"))), n = n.concat(this._getPropertyConfig(["StrokeColor", "StrokeWidth"])), n;
                    },
                    _getShadowedShape: function() {
                        return this.circle;
                    },
                    setStrokeColor: function(n) {
                        this.circle.stroke(n);
                    },
                    getStrokeColor: function() {
                        return this.circle.stroke();
                    },
                    setStrokeWidth: function(n) {
                        this.circle.strokeWidth(n);
                    },
                    getStrokeWidth: function() {
                        return this.circle.strokeWidth();
                    }
                }
        );