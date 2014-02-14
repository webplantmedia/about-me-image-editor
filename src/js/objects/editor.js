/**
 * @class Editor core class
 * @returns {Object}
 * @augments imageEditor.coreObject
 */
var editor = imageEditor.coreObject.extend(
        /** @lends editor.prototype */
                {
                    /**
                     * Constructor function for this class
                     * 
                     * @public
                     * @param {Object} params
                     * @constructs
                     */
                    __constructor: function(params) {
                        var self = this;

                        this.__superobject(params);
                        this.scale = 1;
                        this.stage = new Kinetic.Stage({
                            container: this.container,
                            width: this.width,
                            height: this.height,
                            scale: {
                                x: this.scale,
                                y: this.scale
                            }
                        });
                        this.layer = new Kinetic.Layer;
                        this.stage.add(this.layer);
                        this.progressbar = new imageEditor.uiProgressElement({
                            elem: ".progress"
                        });
                        this.items = [];
                        for (var z = 0; z < imageEditor.TOOLS.length; z++) {
                            $('.toolbar > ul').append('<li data-method="' + imageEditor.TOOLS[z].method + '" data-type="' + imageEditor.TOOLS[z].type + '" data-id="' + imageEditor.TOOLS[z].id + '" class="tips" title="' + imageEditor.TOOLS[z].tip + '">' +
                                    '<i class="editor-icon editor-icon-' + imageEditor.TOOLS[z].icon + '"></i>' +
                                    '</li>');
                        }
                        /*
                         $(document).on('keydown', null, 'del', function() {
                         self.deleteObject(self.getSelectedObject());
                         return false;
                         });
                         */
                        $('.upload').on('click', function() {
                            $('#upload').trigger('click');
                            return false;
                        });
                        $('.reset').on('click', function() {
                            if (confirm('Are you sure you want to reset the workspace? You will lose all the changes!')) {
                                self.clearStage();
                            }
                            return false;
                        });
                        $('.get-template').on('click', function() {
                            var el = $('textarea.out');
                            if (el.hasClass('hidden')) {
                                el.val(self.getConfig());
                                el.removeClass('hidden');
                            }
                            else {
                                el.addClass('hidden');
                            }
                        });
                        $('.download').on('click', function() {
                            self.toDataUrl(function(t) {
                                self.window.cropPhotoSave(t);
                            }), false;
                            return false;
                        });
                        this.getTemplates();
                        $('.more').on('click', function() {
                            self.getTemplates();
                        });
                        $('nav.templates').on('click', '.template', function() {
                            if (confirm('Are you sure you want to load a template? You will lose all the changes!')) {
                                var id = $(this).data('id');
                                if (typeof imageEditor.TEMPLATE[id] !== 'undefined') {
                                    self.clearStage();
                                    self.loadConfig(imageEditor.TEMPLATE[id].presets);
                                }
                            }
                            return false;
                        });
                        $('#background').on('change', function(e) {
                            e = e || window.event;
                            e.preventDefault();
                            e = e.originalEvent || e;
                            var reader = new FileReader();
                            reader.onload = function(event) {
                                self.window.cropPhoto(event.target.result);
                            };
                            reader.onerror = function() {
                                $.ClassyNotty({
                                    title: 'Error',
                                    content: 'Your image must be a PNG or JPEG image.',
                                    error: true,
                                    img: 'images/error.png'
                                });
                            };
                            reader.readAsDataURL(e.target.files[0]);
                            return false;
                        });
                        $('#upload').on('change', function(e) {
                            e = e || window.event;
                            e.preventDefault();
                            e = e.originalEvent || e;
                            var reader = new FileReader();
                            reader.onload = function(event) {
                                var image = new Image();
                                image.src = event.target.result;
                                image.onload = function() {
                                    var _s = this, scale = 1;
                                    if (_s.width > config.width) {
                                        scale = config.width / _s.width;
                                    }
                                    else if (_s.height > config.height) {
                                        scale = config.height / _s.height;
                                    }
                                    self.addObject({
                                        type: 'image',
                                        src: event.target.result,
                                        x: 10,
                                        y: 10,
                                        deg: 0,
                                        width: _s.width,
                                        height: _s.height,
                                        scale: scale
                                    });
                                };
                            };
                            reader.onerror = function() {
                                $.ClassyNotty({
                                    title: 'Error',
                                    content: 'Your image must be a PNG or JPEG image.',
                                    error: true,
                                    img: 'images/error.png'
                                });
                            };
                            reader.readAsDataURL(e.target.files[0]);
                            return false;
                        });
                        $(function() {
                            $('.tips').tipsy({
                                gravity: $.fn.tipsy.autoNS,
                                live: true
                            });
                        });
                        $(window).unload(function() {
                            //localStorage.editor = self.getConfig();
                        });
                        $('.templates, .output').css({
                            height: $('section.editor').height() - 18
                        });
                        $('textarea.out').css({
                            height: $('section.editor').height() - 66
                        });
                    },
                    /*
                     _cropTransparency: function() {
                     var ctx = this.layer.getContext();
                     var ww = this.layer.width();
                     var wh = this.layer.height();
                     imageData = ctx.getImageData(0, 0, ww, wh);
                     var size = {
                     x: -1,
                     y: -1,
                     w: 9999,
                     h: 9999
                     };
                     for (var y = 0; y < wh; y++) {
                     for (var x = 0; x < ww; x++) {
                     var pixel = (x * 4) + (y * wh * 4);
                     a = imageData.data[pixel + 3];
                     if (a > 0) {
                     if (x < size.x) {
                     size.x = x;
                     }
                     if (y < size.y) {
                     size.y = y;
                     }
                     if (x > size.w) {
                     size.w = x;
                     }
                     if (y > size.h) {
                     size.h = y;
                     }
                     }
                     }
                     }
                     var relevantData = ctx.getImageData(size.x, size.y, size.w - size.x, size.h - size.y);
                     var elem = document.createElement('canvas');
                     var newctx = elem.getContext('2d');
                     elem.width = size.w - size.x;
                     elem.height = size.h - size.y;
                     newctx.putImageData(relevantData, 0, 0);
                     console.log(newctx.toDataURL());
                     },
                     */
                    getTemplates: function() {
                        var t = '', x = 0, start = parseInt($('.more').data('start'));
                        start = (typeof start === 'undefined' ? 0 : start);
                        for (var i = start; i < imageEditor.TEMPLATE.length; i++) {
                            if (x >= 10) {
                                $('.more').removeClass('backup').html('more').data('start', x).show();
                                break;
                            }
                            t += '<div data-id="' + i + '" class="template' + (i % 2 ? ' last' : '') + '"></div>';
                            x++;
                            $('.more').addClass('backup').html('back').data('start', 0);
                        }
                        $('nav.templates .list').empty().append(t);
                    },
                    /**
                     * Empty the stage
                     * 
                     * @public
                     */
                    clearStage: function() {
                        this.items = [];
                        this.layer.destroyChildren();
                        this.layer.draw();
                        this.loadConfig(config.presets);
                        //localStorage.editor = '';
                    },
                    /**
                     * Add an object specified by its id, into the stage
                     * 
                     * @public
                     * @param {Integer} id
                     * @returns {Object}
                     */
                    addObjectById: function(id) {
                        return this.addObject(this.getItemConfig(id));
                    },
                    /**
                     * Add an object into the editor's stage
                     * 
                     * @public
                     * @param {Object} obj
                     * @returns {Object}
                     */
                    addObject: function(obj) {
                        obj.layer = this.layer;
                        obj.stageWidth = this.width / this.scale;
                        obj.stageHeight = this.height / this.scale;
                        do {
                            obj.id = Math.floor(Math.random() * 1e4);
                        }
                        while (this.getObjectById(obj.id) !== null);
                        var t = null;
                        switch (obj.type) {
                            case "clipart":
                                t = new imageEditor.uiClipart(obj);
                                break;
                            case "image":
                                t = new imageEditor.uiImage(obj);
                                break;
                            case "text":
                                t = new imageEditor.uiText(obj);
                                break;
                            case "line":
                                t = new imageEditor.uiLineShape(obj);
                                break;
                            case "circle":
                                t = new imageEditor.uiCircleShape(obj);
                                break;
                            case "rectangle":
                                t = new imageEditor.uiRectangleShape(obj);
                                break;
                            case "triangle":
                                t = new imageEditor.uiTriangleShape(obj);
                                break;
                            case "background":
                                t = new imageEditor.uiBackground(obj);
                        }
                        return this._addObject(t), t;
                    },
                    /**
                     * Return a pointer to the object specified by its id
                     * 
                     * @public
                     * @param {Integer} id
                     * @returns {Object}
                     */
                    getObjectById: function(id) {
                        for (var t = 0; t < this.items.length; ++t) {
                            if (id === this.items[t].id) {
                                return this.items[t];
                            }
                        }
                        return null;
                    },
                    _addObject: function(obj) {
                        this.items[this.items.length] = obj;
                        obj.on("select", function() {
                            this.deselectAll(obj.id);
                            this.fire("item-selected", obj);
                        }.bind(this));
                        obj.on("progress-start", function(n) {
                            this.progressbar.show(n);
                        }.bind(this));
                        obj.on("progress-complete", function() {
                            this.progressbar.hide();
                        }.bind(this));
                        obj.on("ready", function() {
                            for (var n = 0; n < this.items.length; ++n) {
                                if (!this.items[n].ready) {
                                    return false;
                                }
                            }
                            this.fire("ready", this);
                        }.bind(this));
                        obj.on("error", function(n) {
                            $.ClassyNotty({
                                title: 'Error',
                                content: n,
                                error: true,
                                img: 'images/error.png'
                            });
                        }.bind(this));
                        obj.type !== "background" && this.updateBackgroundOrder();
                        obj.draw();
                        //obj.select();
                    },
                    getItemConfig: function(obj) {
                        for (var t = 0; t < imageEditor.SHAPES.length; ++t) {
                            if (imageEditor.SHAPES[t].id == obj) {
                                return jQuery.extend(true, {
                                }, imageEditor.SHAPES[t]);
                            }
                        }
                    },
                    deleteObject: function(obj) {
                        obj.dispose();
                        this.items.remove(obj);
                        this.getBackground().select();
                    },
                    deleteObjectType: function(type) {
                        for (var t = 0; t < this.items.length; ++t) {
                            this.items[t].type == type && this.deleteObject(this.items[t]);
                        }
                    },
                    deselectAll: function(n) {
                        $.each(this.items, function(t, i) {
                            i.id !== n && i.deselect();
                        });
                        this.fire("deselect-all", this);
                        this.stage.draw();
                    },
                    getSelectedObject: function() {
                        var n = null;
                        return $.each(this.items, function(t, i) {
                            i.selected && (n = i);
                        }), n;
                    },
                    moveObjectToTop: function(obj) {
                        obj.moveToTop();
                        this.updateBackgroundOrder();
                        this.stage.draw();
                    },
                    moveObjectToBottom: function(obj) {
                        obj.moveToBottom();
                        this.updateBackgroundOrder();
                        this.stage.draw();
                    },
                    updateBackgroundOrder: function() {
                        this.getBackground().updateOrder();
                    },
                    getBackground: function() {
                        for (var n = 0; n < this.items.length; ++n) {
                            if (this.items[n].type == "background") {
                                return this.items[n];
                            }
                        }
                    },
                    toDataUrl: function(callback) {
                        this.stage.setSize(config.width, config.height);
                        this.stage.scale({
                            x: 1,
                            y: 1
                        });
                        this.stage.draw();
                        this.deselectAll();
                        this.stage.toDataURL({
                            mimeType: "image/png",
                            quality: 0.9,
                            callback: function(t) {
                                this.stage.setSize(this.width, this.height);
                                this.stage.scale({
                                    x: this.scale,
                                    y: this.scale
                                });
                                this.stage.draw();
                                this.getBackground().select();
                                callback(t);
                            }.bind(this)
                        });
                    },
                    getConfig: function() {
                        for (var t = [], n = 0; n < this.items.length; ++n) {
                            t[t.length] = this.items[n].getConfig();
                        }
                        return JSON.stringify(t);
                    },
                    loadConfig: function(config) {
                        var t, i;
                        for (config.sort(function(n, t) {
                            return n.zindex - t.zindex;
                        }), t = 0; t < config.length; ++t)
                            i = this.addObject(config[t]), i.type == "background" && i.select();
                    }
                }
        );