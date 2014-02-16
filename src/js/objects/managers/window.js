/**
 * @class UI Window class
 * @returns {Object}
 * @augments imageEditor.coreObject
 */
imageEditor.uiWindowElement = imageEditor.coreObject.extend(
        /** @lends imageEditor.uiWindowElement.prototype */
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
                        var self = this;
                        $(document).on("click", ".editor-win .editor-cancel", function() {
                            self.close();
                        });
                        $(document).on("click", ".editor-win .thumbnail", function() {
                            self.close();
                            var n = self.editor.addObjectById($(this).attr("data-id"));
                            return n.select(), false;
                        });
                        $(document).on("click", ".editor-win-nav a", function() {
                            var n = $(this).parents(".editor-win");
                            return n.find(".editor-win-content").removeClass("active").filter($(this).attr("href")).addClass("active"), n.find(".editor-win-nav li").removeClass("active"), $(this).parents("li").addClass("active"), self._lazyLoad(), false;
                        });
                        this.editor.window = this;
                    },
                    /**
                     * Internal function for lazyloading the images in this window
                     * 
                     * @private
                     */
                    _lazyLoad: function() {
                        $("img.lazy").lazyload({
                            container: $(".editor-win-contents")
                        });
                    },
                    /**
                     * Create the window UI template
                     * 
                     * @private
                     * @param {String} element
                     * @param {String} header
                     * @returns {Object}
                     */
                    _create: function(element, header) {
                        var i = $('<div class="editor-win ' + element + '"></div>').appendTo(".editor");
                        return i.append('<div class="editor-win-head"><h2>' + header + '</h2><a class="editor-cancel"><span>Close</span></a></div>'), i.append('<div class="editor-win-body"><ul class="editor-win-nav border-box clearfix"></ul><div class="editor-win-contents border-box"></div><div class="editor-win-footer"></div></div>'), i;
                    },
                    /**
                     * Internal function for showing the window UI
                     * 
                     * @private
                     * @param {Object} element
                     */
                    _show: function(element) {
                        element.css("z-index", 99).addClass("editor-win-active").fadeIn();
                        element.find(".editor-win-contents").outerHeight($(".editor").innerHeight() - element.find(".editor-win-head").outerHeight() - element.find(".editor-win-nav").outerHeight() - element.find(".editor-win-footer").outerHeight() - 1);
                    },
                    /**
                     * Close this UI element
                     * 
                     * @public
                     */
                    close: function() {
                        $(".editor-win").removeClass("editor-win-active").fadeOut();
                        $(".toolbar li").removeClass("active");
                    },
                    /**
                     * Open the window for cropping an image
                     * 
                     * @public
                     * @param {Object} n
                     */
                    cropPhoto: function(n) {
                        var e = "editor-win-crop", f = $("." + e), i = this, r, t, u, o;
                        this.jcrop = {};
                        r = function(n) {
                            var u, r;
                            i.jcrop.api && i.jcrop.api.destroy();
                            u = f.find(".editor-win-contents");
                            u.html("");
                            r = $('<img alt="" />').appendTo(u).get(0);
                            r.onload = function() {
                                var h = u.width(), s = u.height(), n = getImageSize(t()), f = h / n.width, e, o;
                                f * n.height > s && (f = s / n.height);
                                i.jcrop.scale = f;
                                e = Math.floor(f * n.width);
                                o = Math.floor(f * n.height);
                                r.style.width = e + "px";
                                r.style.height = o + "px";
                                $(r).Jcrop({
                                    setSelect: [0, 0, e, o],
                                    onSelect: function(n) {
                                        i.jcrop.crop = n;
                                    }
                                }, function() {
                                    i.jcrop.api = this;
                                });
                            };
                            r.src = n;
                        };
                        t = function() {
                            return $("." + e + " img").get(0);
                        };
                        f.length == 0 && (f = this._create(e, "Crop your image"), u = f.find(".editor-win-nav"), u.addClass("editor-win-toolbar"), $('<span>right 90</span>').appendTo(u).click(function() {
                            r(rotateImage(t(), 90));
                        }), $('<span>left 90</span>').appendTo(u).click(function() {
                            r(rotateImage(t(), -90));
                        }), $('<span>rotate 180</span>').appendTo(u).click(function() {
                            r(rotateImage(t(), 180));
                        }), $('<span>Flip Vertical</span>').appendTo(u).click(function() {
                            r(flipVertical(t()));
                        }), $('<span>Flip Horizontal</span>').appendTo(u).click(function() {
                            r(flipHorizontal(t()));
                        }), o = f.find(".editor-win-footer").addClass("visible"), $('<button class="button">Apply</button>').appendTo(o).click(function() {
                            var n = document.createElement("canvas"), f;
                            n.width = config.width;
                            n.height = config.height;
                            var r = i.jcrop.scale, u = i.jcrop.crop, e = n.getContext("2d");
                            //e.drawImage(t(), Math.floor(u.x / r), Math.floor(u.y / r), Math.floor(u.w / r), Math.floor(u.h / r), 0, 0, config.width, config.height);
                            e.drawImage(t(), Math.floor(u.x / r), Math.floor(u.y / r), Math.floor(u.w / r), Math.floor(u.h / r));
                            f = n.toDataURL("image/jpeg", 1.0);
                            this.editor.getSelectedObject().setPhoto(f);
                            this.close();
                        }.bind(this)));
                        this._show(f);
                        r(n);
                    },
                    /**
                     * Open the window for cropping an image
                     * 
                     * @public
                     * @param {Object} n
                     */
                    cropPhotoSave: function(n) {
                        var e = "editor-win-crop", f = $("." + e), i = this, r, t, u, o;
                        this.jcrop = {};
                        r = function(n) {
                            var u, r;
                            i.jcrop.api && i.jcrop.api.destroy();
                            u = f.find(".editor-win-contents");
                            u.html("");
                            r = $('<img alt="" />').appendTo(u).get(0);
                            r.onload = function() {
                                var h = u.width(), s = u.height(), n = getImageSize(t()), f = h / n.width, e, o;
                                f * n.height > s && (f = s / n.height);
                                i.jcrop.scale = f;
                                e = Math.floor(f * n.width);
                                o = Math.floor(f * n.height);
                                r.style.width = e + "px";
                                r.style.height = o + "px";
                                $(r).Jcrop({
                                    setSelect: [0, 0, e, o],
                                    onSelect: function(n) {
                                        i.jcrop.crop = n;
                                    }
                                }, function() {
                                    i.jcrop.api = this;
                                });
                            };
                            r.src = n;
                        };
                        t = function() {
                            return $("." + e + " img").get(0);
                        };
                        f.length == 0 && (f = this._create(e, "Crop your image"), u = f.find(".editor-win-nav"), u.addClass("editor-win-toolbar"), o = f.find(".editor-win-footer").addClass("visible"), $('<button class="button">Download</button>').appendTo(o).click(function() {
                            var n = document.createElement("canvas"), f;
                            n.width = config.width;
                            n.height = config.height;
                            var r = i.jcrop.scale, u = i.jcrop.crop, e = n.getContext("2d");
                            e.drawImage(t(), Math.floor(u.x / r), Math.floor(u.y / r), Math.floor(u.w / r), Math.floor(u.h / r), 0, 0, config.width, config.height);
                            f = n.toDataURL("image/png", 1.0);
                            $.ajax({
                                type: "POST",
                                url: config.apiExportURL,
                                data: {
                                    imgData: f
                                },
                                cache: false,
                                success: function(result) {
                                    $('.export-iframe').remove();
                                    $('body').append('<iframe class="export-iframe" src=""></iframe>');
                                    $('.export-iframe').attr('src', config.apiExportURL + '?get=' + result);
                                }
                            });
                            this.close();
                        }.bind(this)));
                        this._show(f);
                        r(n);
                    },
                    /**
                     * Internal function for building up the window's DOM
                     * 
                     * @private
                     * @param {String} n
                     * @param {String} t
                     */
                    _build: function(n, t) {
                        var self = this, y = "editor-win-" + n, r = $("." + y), c, f, h, i, a, e, v;
                        if (r.length == 0) {
                            if (r = this._create(y, t), c = r.find(".editor-win-nav"), f = r.find(".editor-win-contents"), n == "save") {
                                $(".card-save-form").appendTo(f).show();
                            }
                            else {
                                var o = $('<ul class="clearfix"></ul>').appendTo(f),
                                        s = $('<div class="load-more button">More</div>').appendTo(f),
                                        u = $('<h2>Cliparts</h2>'),
                                        l = $('<div class="toolbar-sub"></div>').appendTo(c);
                                r.find(".editor-win-head h2").replaceWith(u).wrap('<div class="editor-win-search border-box"></div>');
                                var _t = '';
                                for (var _i = 0; _i < imageEditor.CLIPART_CATEGORIES.length; _i++) {
                                    _t += '<span' + ((imageEditor.CLIPART_CATEGORIES[_i] === 'all') ? ' class="active"' : '') + '>' + imageEditor.CLIPART_CATEGORIES[_i] + '</span>';
                                }
                                l.append(_t);
                                h = null;
                                c.addClass("editor-win-toolbar");
                                i = null;
                                a = function(t) {
                                    var u, r;
                                    for (i = [], u = new RegExp(t, "i"), r = 0; r < self.shapes.length; ++r)
                                        self.shapes[r].type == n && (self.shapes[r].tags.search(u) != -1 || self.shapes[r].title != null && self.shapes[r].title.search(u) != -1) && (i[i.length] = self.shapes[r]);
                                };
                                a("");
                                e = function() {
                                    var u = o.find("li").length, t = u + 30, r, n, f;
                                    for (t > i.length && (t = i.length), r = u; r < t; ++r)
                                        n = i[r], f = n.src != null ? '<img src="' + config.assetsThumbURL.format(n.src) + '" alt="" />' : n.title, o.append('<li class="thumbnail" data-id="' + n.id + '"><span class="helper"></span>' + f + "</li>");
                                    t >= i.length ? s.hide() : s.show();
                                    $.waypoints("refresh");
                                };
                                s.waypoint(function() {
                                    h = $(this);
                                    h.waypoint("disable");
                                    e();
                                    h.waypoint("enable");
                                }, {
                                    offset: "bottom-in-view",
                                    context: f
                                });
                                e();
                                s.on("click", function() {
                                    e();
                                });
                                v = function() {
                                    if (u.val() === 'all') {
                                        a("");
                                    }
                                    else {
                                        a(u.val());
                                    }
                                    o.html("");
                                    o.scrollTop();
                                    e();
                                };
                                u.on("input", function() {
                                    v();
                                });
                                l.find("span").click(function() {
                                    $('.toolbar-sub span').removeClass('active');
                                    $(this).addClass('active');
                                    u.val($(this).text());
                                    v();
                                });
                            }
                        }
                        this._show(r);
                        this._lazyLoad();
                    }
                }
        );