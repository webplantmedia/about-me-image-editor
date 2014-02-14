/**
 * @class UI Panel class
 * @returns {Object}
 * @augments imageEditor.coreObject
 */
imageEditor.uiPanelElement = imageEditor.coreObject.extend(
        /** @lends imageEditor.uiPanelElement.prototype */
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
                        $(document).on("click", ".editor-prop-pan .cancel", function() {
                            self.close();
                        });
                        $(document).on("click", ".editor-pan-nav a", function(n) {
                            n.preventDefault();
                            var i = $(this).parents(".editor-pan"), r = i.find(".editor-pan-content").removeClass("active").filter($(this).attr("href")).addClass("active");
                            i.find(".editor-pan-nav li").removeClass("active");
                            $(this).parents("li").addClass("active");
                            self._refreshScroller(r);
                        });
                    },
                    /**
                     * Show this UI element
                     * 
                     * @public
                     * @param {Object} obj
                     * @param {String} type
                     */
                    show: function(obj, type) {
                        var i = $(".editor-prop-pan-" + type), r, u, f;
                        if (i.length === 0)
                            for (r = 0; r < this.settings.length; ++r)
                                if (this.settings[r].type == type) {
                                    i = this._panel(imageEditor.SETTINGS[r]);
                                    break;
                                }
                        u = i.find(".editor-pan-content").removeClass("active");
                        u.each(function() {
                            var t = $(this), i = obj.getProperty(t.data("type"));
                            t.hasClass("user-photo-selector") ? t.find("input").val("") : t.hasClass("color") ? t.find("input").spectrum("set", i || "#000") : t.hasClass("range") ? t.find(".range-slider").val(i || 0) : t.hasClass("double-range") ? (t.find(".range-slider-one").val(i[0] || 0), t.find(".range-slider-two").val(i[1] || 0)) : (t.find("li").removeClass("selected"), i && t.find("li").each(function(n, t) {
                                JSON.stringify($(t).data("val")) === JSON.stringify(i) && $(t).addClass("selected");
                            }));
                        });
                        i.find(".editor-pan-nav li").removeClass("active").first().addClass("active");
                        f = u.first().addClass("active");
                        i.hide().fadeIn("fast");
                        this._refreshScroller(f);
                    },
                    /**
                     * Close this UI element
                     * 
                     * @public
                     */
                    close: function() {
                        return $(".editor-pan").fadeOut("fast"), $(".toolbar li").removeClass("active"), false;
                    },
                    /**
                     * Draw a property panel
                     * 
                     * @public
                     * @param {Object} property
                     */
                    _panel: function(property) {
                        var u = $('<div class="editor-pan editor-prop-pan editor-prop-pan-' + property.type + '"></div>').appendTo(".panels"), e = $('<div class="editor-pan-body"></div>').appendTo(u), r = [], t, f, i;
                        if (property.items)
                            for (t = 0; t < property.items.length; ++t)
                                f = "editor_pan_content_" + property.items[t].type + "_" + t, r[r.length] = {
                                    id: f,
                                    title: property.items[t].title
                                }, this._content(f, property.items[t], e);
                        else {
                            this._content("editor_pan_content_" + property.type, property, e);
                        }
                        return i = $('<div class="editor-pan-nav border-box"></div>').appendTo(u), r.length > 1 && (i = $("<ul></ul>").appendTo(i), $.each(r, function(n, t) {
                            $('<li class="border-box"><a href="#' + t.id + '">' + t.title + "</a></li>").appendTo(i);
                        })), u;
                    },
                    _content: function(n, t, i) {
                        var r = $('<div class="editor-pan-content editor-pan-content-{0}" id="{1}"></div>'.format(t.type.toLowerCase(), n)).data("type", t.type).appendTo(i);
                        if (t.data instanceof Array) {
                            this._list(t, r);
                        }
                        else if (t.data instanceof Object) {
                            r.addClass(t.data.type);
                            switch (t.data.type) {
                                case "color":
                                    if (i.hasClass('mini')) {
                                        i.removeClass('mini');
                                    }
                                    i.addClass('maxi');
                                    this._colorSelect(t.type, t.data, r);
                                    break;
                                case "range":
                                    if (!i.hasClass('maxi')) {
                                        i.addClass('mini');
                                    }
                                    this._rangeSelect(t.type, t.data, r, false);
                                    break;
                                case "double-range":
                                    i.addClass('maxi');
                                    this._rangeSelect(t.type, t.data, r, true);
                                    break;
                                case "background":
                                    i.addClass('maxi');
                                    this._upload(t.type, t.data, r);
                                    break;
                            }
                        }
                        r.hide();
                    },
                    _list: function(n, t) {
                        var z;
                        if (n.type === 'FontFamily') {
                            z = '<li class="property-item border-box"><div class="thumb thumb-{1}-{2}"><img src="images/fonts/{2}.png" /></div><div class="label border-box"><span>{0}</span></div></li>';
                        }
                        else if (n.type === 'Filter') {
                            z = '<li class="property-item border-box"><div class="thumb thumb-{1}-{2}"><img src="images/effects/{2}.png" /></div><div class="label border-box"><span>{0}</span></div></li>';
                        }
                        else {
                            z = '<li class="property-item border-box"><div class="thumb thumb-{1}-{2}">&nbsp;</div><div class="label border-box"><span>{0}</span></div></li>';
                        }
                        for (var u = $("<ul></ul>").appendTo(t), i, f, e, r = 0; r < n.data.length; ++r) {
                            i = n.data[r];
                            if (typeof i.value === 'undefined') {
                                i.value = i.title;
                            }
                            f = $(z.format(i.title, n.type.toLowerCase(), i.title.toLowerCase().replace(/ /g, "-"))).data("val", i.value).appendTo(u), n.thumb && f.addClass("property-item-image").find(".thumb").html("").append('<img class="lazy" data-original="' + environment.assetsThumbURL.format(i.value) + '" src="images/loading.gif" alt="' + i.title + '" />');
                        }
                        this._carousel(u, t, i.length);
                        e = this;
                        u.find("li").on("tap", function() {
                            if (t.data("scroller").moved)
                                return false;
                            $(this).parents(".editor-prop-pan").find(".editor-pan-content-" + n.type.toLowerCase() + " li").removeClass("selected");
                            $(this).addClass("selected");
                            e.applyProperty(n.type, $(this).data("val"));
                        });
                    },
                    /**
                     * Internal function for lazyloading the images in this panel
                     * 
                     * @private
                     */
                    _loadThumbs: function() {
                        $("img.lazy").lazyload();
                    },
                    _refreshScroller: function(element) {
                        var t = element.data("scroller");
                        t && (t.refresh(), this._loadThumbs());
                    },
                    _colorSelect: function(n, t, i) {
                        var f = imageEditor.COLORS, r = $("<ul><\/ul>").appendTo(i), e, s, o, u;
                        for (t.transparent && r.append('<li class="property-item color-item color-transparent border-box" data-val="transparent"><div class="thumb">&nbsp;</div><div class="label border-box"><span>Transparent</span></div></li>'), e = $('<li class="property-item color-item color-item-selector border-box"></li>').appendTo(r), s = $('<input type="text" />').appendTo(e), $('<div class="label border-box"><span>Select Color</span></div>').appendTo(e), o = this, s.spectrum({
                        color: "#000",
                                showButtons: false,
                                move: function(t) {
                                    o.applyProperty(n, t.toHexString());
                                }.bind(this)
                        }), u = 0; u < f.length; ++u)
                            r.append('<li class="property-item color-item border-box" data-val="{0}"><div class="thumb" style="background-color:{0}">&nbsp;</div><div class="label border-box"><span>{0}</span></div></li>'.format(f[u]));
                        this._carousel(r, i, f.length);
                        i.find(".color-item").on("tap", function() {
                            if (i.data("scroller").moved) {
                                return false;
                            }
                            o.applyProperty(n, $(this).attr("data-val"));
                        });
                    },
                    _carousel: function(element, container) {
                        var i = new IScroll(container.get(0), {
                            scrollX: true,
                            scrollY: false,
                            tap: true,
                            mouseWheel: true,
                            mouseWheelSpeed: 40,
                            scrollbars: "custom",
                            interactiveScrollbars: true
                        }),
                        r = 0;
                        element.find("li").each(function() {
                            r += $(this).outerWidth();
                        });
                        element.width(r + 30);
                        container.data("scroller", i);
                        i.on("scrollEnd", function() {
                            this._loadThumbs();
                        }.bind(this));
                    },
                    _rangeSelect: function(n, t, i, r) {
                        var u = $('<div class="editor-pan-slider"></div>').appendTo(i), f, o, e;
                        f = $('<div class="noUiSlider range-slider range-slider-one"></div>').appendTo(u);
                        o = null;
                        t.serialize && (o = $('<input type="text" readonly="readonly" />').appendTo(u));
                        e = null;
                        r && (u.addClass("editor-pan-slider-double"), e = $('<div class="noUiSlider range-slider range-slider-two"></div>').appendTo(u));
                        i.find(".range-slider").noUiSlider({
                            range: [t.min, t.max],
                            step: t.step,
                            start: t.start,
                            handles: 1,
                            slide: function() {
                                this.applyProperty(n, r ? [f.val(), e.val()] : f.val());
                            }.bind(this),
                            serialization: {
                                to: t.serialize ? o : false,
                                resolution: t.step
                            }
                        });
                    },
                    _upload: function(n, t, i) {
                        var f = this, u = $('<input type="file" size="30" class="hidden" id="photo_custom_input" />').appendTo(i),
                                e = function(n) {
                                    for (var t, r, i = 0; t = n[i]; i++)
                                        t.type.match("image.*") && (r = new FileReader, r.onload = function() {
                                            return function(n) {
                                                u.replaceWith(u = u.clone(true));
                                                f.close();
                                                f.window.cropPhoto(n.target.result);
                                            };
                                        }(t), r.readAsDataURL(t));
                                };
                        u.appendTo(i).on("change", function(n) {
                            e(n.target.files);
                        });
                        $('#photo_custom_input').trigger('click');
                    },
                    applyProperty: function(type, obj) {
                        if (type === 'shape') {
                            this.editor.addObject({
                                type: obj.name,
                                x: 100,
                                y: 100
                            });
                        }
                        else {
                            var i = this.editor.getSelectedObject();
                            i.setProperty(type, obj, function() {
                                i.redraw();
                            });
                        }
                    },
                    editText: function(obj) {
                        var t = $(".editor-pan-edit-text"), i, r, self = this;
                        t.length === 0 && (t = $('<div class="editor-pan editor-prop-pan editor-pan-edit-text"></div>').appendTo(".panels").hide(), i = $('<div class="editor-pan-body"></div>').appendTo(t), r = $('<div class="editor-pan-content border-box active"><textarea rows="4" cols="50"></textarea><button class="save-text button">Insert</button></div>').appendTo(i));
                        if (obj.type === 'text') {
                            $('.editor-pan-edit-text .save-text').off().hide();
                            $('.editor-pan-edit-text textarea').off().val(obj.title).on("input paste", function() {
                                obj.setText($(this).val());
                            });
                        }
                        else {
                            $('.editor-pan-edit-text textarea').off().val('');
                            $('.editor-pan-edit-text .save-text').off().show().on("click", function() {
                                var val = $('.editor-pan-edit-text textarea').val();
                                if (val !== '') {
                                    self.editor.addObject({
                                        type: "text",
                                        title: val,
                                        x: 50,
                                        y: 50,
                                        width: 200,
                                        scale: 1
                                    });
                                    self.close();
                                    $('.editor-pan').remove();
                                }
                                else {
                                    $.ClassyNotty({
                                        title: 'Error',
                                        content: 'Please enter some text.',
                                        error: true,
                                        img: 'images/error.png'
                                    });
                                }
                            });
                        }
                        t.show();
                    }
                }
        );