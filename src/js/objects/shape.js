/**
 * @class Shape element class
 * @returns {Object}
 * @augments imageEditor.uiElement
 */
imageEditor.uiShape = imageEditor.uiElement.extend(
        /** @lends imageEditor.uiShape.prototype */
                {
                    /**
                     * Constructor function for this class
                     * 
                     * @public
                     * @param {Object} n
                     * @constructs
                     */
                    __constructor: function(n, t) {
                        var i, r;
                        this.__superobject(n, t);
                        this.properties = this.properties || [];
                        this.width = this.width || 100;
                        this.height = this.height || 100;
                        this.scale = this.scale || 1;
                        this.deg = this.deg || 0;
                        this.x || (i = this.layer.getCanvas().getWidth(), this.x = this.cornerOffset ? this.getStageWidth() / 2 - this.width * this.scale / 2 : this.getStageWidth() / 2);
                        this.y || (r = this.layer.getCanvas().getHeight(), this.y = this.cornerOffset ? this.getStageHeight() / 2 - this.height * this.scale / 2 : this.getStageHeight() / 2);
                        this.group = new Kinetic.Group({
                            x: this.x,
                            y: this.y,
                            width: this.width,
                            height: this.height,
                            draggable: true,
                            dragOnTop: false,
                            scale: {
                                x: this.scale,
                                y: this.scale
                            },
                            rotation: this.deg
                        });
                        this.cornerOffset === undefined && this.group.offset(this.width / 2, this.height / 2);
                        this.group.on("mousedown tap dragstart", function() {
                            this.ready && this.select();
                        }.bind(this));
                        this.group.on("dragmove", function() {
                            var n = this.group.position();
                            this.setPosition(n.x, n.y);
                            this.updateAnchorPosition();
                        }.bind(this));
                        this.layer.add(this.group);
                        this.zindex || this.group.moveToTop();
                    },
                    getStageWidth: function() {
                        return this.layer.getStage().getWidth() / this.layer.getStage().scale().x;
                    },
                    getStageHeight: function() {
                        return this.layer.getStage().getHeight() / this.layer.getStage().scale().y;
                    },
                    dispose: function() {
                        this.group.remove();
                        this.anchor.remove();
                        this.drawStage();
                    },
                    moveToTop: function() {
                        this.group.moveToTop();
                        this.anchor.moveToTop();
                    },
                    moveToBottom: function() {
                        this.anchor.moveToBottom();
                        this.group.moveToBottom();
                    },
                    setPosition: function(x, y) {
                        this.x = x;
                        this.y = y;
                    },
                    /**
                     * Select this element
                     * 
                     * @public
                     */
                    select: function() {
                        this.selected = true;
                        this.boundingBox || (this.boundingBox = new Kinetic.Rect({
                            width: this.width,
                            height: this.height,
                            stroke: "#FC7488",
                            strokeWidth: 0.5,
                            dash: [2, 2]
                        }), this.group.add(this.boundingBox), this.addAnchor());
                        this.boundingBox.show();
                        this.anchor.show();
                        this.__superobject();
                    },
                    /**
                     * De-select this element
                     * 
                     * @public
                     */
                    deselect: function() {
                        this.selected = false;
                        this.boundingBox && (this.boundingBox.hide(), this.anchor.hide());
                    },
                    updateAnchorPosition: function() {
                        var n = this.group.position(), t = 0, i;
                        this.cornerOffset ? (t = this._distance({
                            x: 0,
                            y: 0
                        }, {
                            x: this.width * this.scale,
                            y: 0
                        }), this.startAngle = this._angle({
                            x: n.x,
                            y: n.y
                        }, {
                            x: n.x + this.width,
                            y: n.y
                        })) : (this.startAngle = this._angle({
                            x: n.x,
                            y: n.y
                        }, {
                            x: n.x + this.width / 2,
                            y: n.y - this.height / 2
                        }), t = this._distance({
                            x: 0,
                            y: 0
                        }, {
                            x: this.width * this.scale / 2,
                            y: this.height * this.scale / -2
                        }));
                        i = this._getPointAt(this.group.position(), t, this.group.rotation() + this.startAngle);
                        this.anchor.position(i);
                    },
                    update: function() {
                        var n = this.group.position(), i = this.anchor.position(), r = this.anchor.offset(), u = {
                            x: i.x - r.x,
                            y: i.y - r.y
                        }, e = this._angle(n, u), t, f;
                        this.deg = e - this.startAngle - this.anchor.rotation();
                        this.group.rotation(this.deg);
                        t = 0;
                        t = this.cornerOffset ? this._distance(n, {
                            x: n.x + this.width * this.scale,
                            y: n.y
                        }) : this._distance(n, {
                            x: n.x + this.width * this.scale / 2,
                            y: n.y - this.height * this.scale / 2
                        });
                        f = this._distance(n, u);
                        this.scale = this.scale * f / t;
                        this.group.scale({
                            x: this.scale,
                            y: this.scale
                        });
                        this.layer.draw();
                    },
                    _angle: function(start, end) {
                        var i = {
                            x: start.x,
                            y: start.y - Math.sqrt(Math.abs(end.x - start.x) * Math.abs(end.x - start.x) + Math.abs(end.y - start.y) * Math.abs(end.y - start.y))
                        };
                        return 360 * Math.atan2(end.y - i.y, end.x - i.x) / Math.PI;
                    },
                    _getPointAt: function(n, t, i) {
                        return i *= Math.PI / 180, {
                            x: n.x + Math.sin(Math.PI - i) * t,
                            y: n.y + Math.cos(Math.PI - i) * t
                        };
                    },
                    _distance: function(n, t) {
                        var r = t.x - n.x, i;
                        return r = r * r, i = t.y - n.y, i = i * i, Math.sqrt(r + i);
                    },
                    addAnchor: function() {
                        this.anchor = new Kinetic.Circle({
                            stroke: "#FC7488",
                            fill: "#FC7488",
                            strokeWidth: 0.5,
                            radius: 8,
                            dragOnTop: false,
                            draggable: true,
                            name: 'helper'
                        });
                        this.anchor.on("dragmove", function() {
                            this.update(this);
                        }.bind(this));
                        this.anchor.on("mouseover", function() {
                            this.anchor.stroke('#000');
                            this.drawStage();
                        }.bind(this));
                        this.anchor.on("mouseout", function() {
                            this.anchor.stroke('#FC7488');
                            this.drawStage();
                        }.bind(this));
                        this.updateAnchorPosition();
                        this.layer.add(this.anchor);
                    },
                    setSize: function(width, height) {
                        this.width = width;
                        this.height = height;
                        this.group.setSize(width, height);
                        this.cornerOffset === undefined && this.group.offset(this.width / 2, this.height / 2);
                        this.boundingBox && (this.boundingBox.setSize(width, height), this.updateAnchorPosition());
                    },
                    setHeight: function(value) {
                        this.height = value;
                        this.group.height(value);
                        this.cornerOffset === undefined && this.group.offset(this.width / 2, this.height / 2);
                        this.boundingBox && (this.boundingBox.height(value), this.updateAnchorPosition());
                    },
                    setScale: function(value) {
                        this.scale = value;
                        this.group.scale({
                            x: value,
                            y: value
                        });
                    },
                    applyFilter: function(n, t, callback) {
                        var r, u;
                        if (t.name === "none") {
                            this.filterConfig = null;
                            callback(n);
                            return;
                        }
                        this.filterConfig = t;
                        r = document.createElement("canvas");
                        r.width = n.width;
                        r.height = n.height;
                        u = this;
                        this.fire("download-start", this);
                        Caman(r, n.src, function() {
                            this[t.name]();
                            this.render(function() {
                                var t = r.toDataURL("image/jpeg", .84), n = new Image;
                                n.onload = function() {
                                    r = null;
                                    callback(n);
                                    u.fire("download-complete", this);
                                };
                                n.src = t;
                            });
                        });
                    },
                    setShadowColor: function(value) {
                        this._getShadowedShape().shadowColor(value);
                    },
                    getShadowColor: function() {
                        return this._getShadowedShape().shadowColor();
                    },
                    setShadowBlur: function(value) {
                        this._getShadowedShape().shadowBlur(value);
                    },
                    getShadowBlur: function() {
                        return this._getShadowedShape().shadowBlur();
                    },
                    setShadowOffset: function(value) {
                        this._getShadowedShape().shadowOffset({
                            x: value[0],
                            y: value[1]
                        });
                    },
                    getShadowOffset: function() {
                        return this._getShadowedShape().shadowOffset();
                    },
                    setShadowOpacity: function(value) {
                        this._getShadowedShape().shadowOpacity(value);
                    },
                    getShadowOpacity: function() {
                        return this._getShadowedShape().shadowOpacity();
                    },
                    getShadowConfig: function() {
                        console.log('2');
                        return this._getShadowedShape().hasShadow() ? this._getPropertyConfig(["ShadowColor", "ShadowOffset", "ShadowBlur", "ShadowOpacity"]) : [];
                    },
                    getConfig: function() {
                        return jQuery.extend(false, {
                            x: Math.round(this.x),
                            y: Math.round(this.y),
                            width: this.width,
                            height: this.height,
                            scale: this.scale,
                            deg: this.deg,
                            zindex: this.group.getZIndex()
                        }, this.__superobject());
                    }
                }
        );