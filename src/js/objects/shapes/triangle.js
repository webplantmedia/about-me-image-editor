/**
 * @class Triangle shape element class
 * @returns {Object}
 * @augments imageEditor.uiShape
 */
imageEditor.uiTriangleShape = imageEditor.uiShape.extend(
        /** @lends imageEditor.uiLineShape.prototype */
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
                        params.scale || (params.scale = 1);
                        params.deg || (params.deg = 0);
                        params.radius || (params.radius = 100);
                        this.__superobject(params);
                    },
                    /**
                     * Draw this element onto the stage
                     * 
                     * @public
                     */
                    draw: function() {
                        this.line = new Kinetic.RegularPolygon({
                            x: this.x,
                            y: this.y,
                            sides: 3,
                            scale: this.scale,
                            rotation: this.deg,
                            stroke: 'black',
                            strokeWidth: 4,
                            fill: 'black',
                            radius: this.radius
                        });
                        this.applyProperties(function() {
                            this.group.add(this.line);
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
                        this.line.clearFilter();
                        color == "transparent" ? this.fillColor = null : (this.fillColor = color, this.line.setFilterColorFill(color), this.line.setFilter(Kinetic.Filters.ColorFill));
                    },
                    getFillColor: function() {
                        return this.fillColor;
                    },
                    setFilter: function(filter, callback) {
                        this.line.setImage(this.imgObj);
                        this.applyFilter(this.imgObj, filter, function(n) {
                            this.line.setImage(n);
                            callback(this);
                        }.bind(this));
                    },
                    getFilter: function() {
                        return this.filterConfig;
                    },
                    setOpacity: function(value) {
                        this.line.setOpacity(value);
                        this.redraw();
                    },
                    getOpacity: function() {
                        return this.line.getOpacity();
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
                        return this.line;
                    },
                    setStrokeColor: function(n) {
                        this.line.stroke(n);
                    },
                    getStrokeColor: function() {
                        return this.line.stroke();
                    },
                    setStrokeWidth: function(n) {
                        this.line.strokeWidth(n);
                    },
                    getStrokeWidth: function() {
                        return this.line.strokeWidth();
                    }
                }
        );