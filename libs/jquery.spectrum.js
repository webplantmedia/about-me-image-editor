/** @preserve jQuery Spectrum */
(function(n, t, i) {
    function s(n, t, i) {
        for (var e = [], r, f, o, u = 0; u < n.length; u++)
            r = tinycolor(n[u]), f = r.toHsl().l < .5 ? "sp-thumb-el sp-thumb-dark" : "sp-thumb-el sp-thumb-light", f += tinycolor.equals(t, n[u]) ? " sp-thumb-active" : "", o = l ? "background-color:" + r.toRgbString() : "filter:" + r.toFilter(), e.push('<span title="' + r.toRgbString() + '" data-color="' + r.toRgbString() + '" class="' + f + '"><span class="sp-thumb-inner" style="' + o + ';" /><\/span>');
        return "<div class='sp-cf " + i + "'>" + e.join("") + "<\/div>"
    }

    function y() {
        for (var n = 0; n < r.length; n++)
            r[n] && r[n].hide()
    }

    function p(n, i) {
        var r = t.extend({}, c, n);
        return r.callbacks = {
            move: e(r.move, i),
            change: e(r.change, i),
            show: e(r.show, i),
            hide: e(r.hide, i),
            beforeShow: e(r.beforeShow, i)
        }, r
    }

    function w(f, e) {
        function ar() {
            c.toggleClass("sp-flat", ut);
            c.toggleClass("sp-input-disabled", !h.showInput);
            c.toggleClass("sp-alpha-enabled", h.showAlpha);
            c.toggleClass("sp-buttons-disabled", !h.showButtons || ut);
            c.toggleClass("sp-palette-disabled", !h.showPalette);
            c.toggleClass("sp-palette-only", h.showPaletteOnly);
            c.toggleClass("sp-initial-disabled", !h.showInitial);
            c.addClass(h.className);
            lt()
        }

        function ru() {
            function e(n) {
                return n.data && n.data.ignore ? (ct(t(this).data("color")), dt()) : (ct(t(this).data("color")), si(!0), dt(), rt()), !1
            }
            var i, r, f;
            if (u && c.find("*:not(input)").attr("unselectable", "on"), ar(), yi && w.after(ht).hide(), ut ? w.after(c).hide() : (i = h.appendTo === "parent" ? w.parent() : t(h.appendTo), i.length !== 1 && (i = t("body")), i.append(c)), st && n.localStorage) {
                try {
                    r = n.localStorage[st].split(",#");
                    r.length > 1 && (delete n.localStorage[st], t.each(r, function(n, t) {
                        bi(t)
                    }))
                } catch (s) {
                }
                try {
                    nt = n.localStorage[st].split(";")
                } catch (s) {
                }
            }
            bt.bind("click.spectrum touchstart.spectrum", function(n) {
                li || br();
                n.stopPropagation();
                t(n.target).is("input") || n.preventDefault()
            });
            (w.is(":disabled") || h.disabled === !0) && dr();
            c.click(k);
            tt.change(ki);
            tt.bind("paste", function() {
                setTimeout(ki, 1)
            });
            tt.keydown(function(n) {
                n.keyCode == 13 && ki()
            });
            cr.text(h.cancelText);
            cr.bind("click.spectrum", function(n) {
                n.stopPropagation();
                n.preventDefault();
                rt("cancel")
            });
            lr.text(h.chooseText);
            lr.bind("click.spectrum", function(n) {
                n.stopPropagation();
                n.preventDefault();
                eu() && (si(!0), rt())
            });
            o(er, function(n, t, i) {
                ot = n / hi;
                i.shiftKey && (ot = Math.round(ot * 10) / 10);
                dt()
            });
            o(ai, function(n, t) {
                pt = parseFloat(t / ti);
                dt()
            }, pr, wr);
            o(ei, function(n, t) {
                ii = parseFloat(n / yt);
                ri = parseFloat((ft - t) / ft);
                dt()
            }, pr, wr);
            oi ? (ct(oi), gt(), kt = wi || tinycolor(oi).format, bi(oi)) : gt();
            ut && di();
            f = u ? "mousedown.spectrum" : "click.spectrum touchstart.spectrum";
            sr.delegate(".sp-thumb-el", f, e);
            hr.delegate(".sp-thumb-el:nth-child(1)", f, {
                ignore: !0
            }, e)
        }

        function bi(i) {
            if (gr) {
                var r = tinycolor(i).toRgbString();
                if (t.inArray(r, nt) === -1)
                    for (nt.push(r); nt.length > tu; )
                        nt.shift();
                if (st && n.localStorage)
                    try {
                        n.localStorage[st] = nt.join(";")
                    } catch (u) {
                    }
            }
        }

        function uu() {
            var f = [],
                    r = nt,
                    u = {}, t, n, i;
            if (h.showPalette) {
                for (n = 0; n < ui.length; n++)
                    for (i = 0; i < ui[n].length; i++)
                        t = tinycolor(ui[n][i]).toRgbString(), u[t] = !0;
                for (n = 0; n < r.length; n++)
                    t = tinycolor(r[n]).toRgbString(), u.hasOwnProperty(t) || (f.push(r[n]), u[t] = !0)
            }
            return f.reverse().slice(0, h.maxSelectionSize)
        }

        function vr() {
            var n = g(),
                    i = t.map(ui, function(t, i) {
                        return s(t, n, "sp-palette-row sp-palette-row-" + i)
                    });
            nt && i.push(s(uu(), n, "sp-palette-row sp-palette-row-selection"));
            sr.html(i.join(""))
        }

        function yr() {
            if (h.showInitial) {
                var t = it,
                        n = g();
                hr.html(s([t, n], n, "sp-palette-row-initial"))
            }
        }

        function pr() {
            (ft <= 0 || yt <= 0 || ti <= 0) && lt();
            c.addClass(rr)
        }

        function wr() {
            c.removeClass(rr)
        }

        function ki() {
            var n = tinycolor(tt.val());
            n.ok ? ct(n) : tt.addClass("sp-validation-error")
        }

        function br() {
            vt ? rt() : di()
        }

        function di() {
            var i = t.Event("beforeShow.spectrum");
            if (vt) {
                lt();
                return
            }
            (w.trigger(i, [g()]), at.beforeShow(g()) === !1 || i.isDefaultPrevented()) || (y(), vt = !0, t(fi).bind("click.spectrum", rt), t(n).bind("resize.spectrum", nr), ht.addClass("sp-active"), c.removeClass("sp-hidden"), h.showPalette && vr(), lt(), gt(), it = g(), yr(), at.show(it), w.trigger("show.spectrum", [it]))
        }

        function rt(i) {
            if ((!i || i.type != "click" || i.button != 2) && vt && !ut) {
                vt = !1;
                t(fi).unbind("click.spectrum", rt);
                t(n).unbind("resize.spectrum", nr);
                ht.removeClass("sp-active");
                c.addClass("sp-hidden");
                var r = !tinycolor.equals(g(), it);
                r && (iu && i !== "cancel" ? si(!0) : fu());
                at.hide(g());
                w.trigger("hide.spectrum", [g()])
            }
        }

        function fu() {
            ct(it, !0)
        }

        function ct(n, t) {
            if (!tinycolor.equals(n, g())) {
                var r = tinycolor(n),
                        i = r.toHsv();
                pt = i.h;
                ii = i.s;
                ri = i.v;
                ot = i.a;
                gt();
                r.ok && !t && (kt = wi || r.format)
            }
        }

        function g(n) {
            return n = n || {}, tinycolor.fromRatio({
                h: pt,
                s: ii,
                v: ri,
                a: Math.round(ot * 100) / 100
            }, {
                format: n.format || kt
            })
        }

        function eu() {
            return !tt.hasClass("sp-validation-error")
        }

        function dt() {
            gt();
            at.move(g());
            w.trigger("move.spectrum", [g()])
        }

        function gt() {
            var e, n, r, f, i;
            tt.removeClass("sp-validation-error");
            kr();
            e = tinycolor.fromRatio({
                h: pt,
                s: 1,
                v: 1
            });
            ei.css("background-color", e.toHexString());
            n = kt;
            ot < 1 && (n === "hex" || n === "hex3" || n === "hex6" || n === "name") && (n = "rgb");
            var t = g({
                format: n
            }),
            o = t.toHexString(),
                    s = t.toRgbString();
            l || t.alpha === 1 ? pi.css("background-color", s) : (pi.css("background-color", "transparent"), pi.css("filter", t.toFilter()));
            h.showAlpha && (r = t.toRgb(), r.a = 0, f = tinycolor(r).toRgbString(), i = "linear-gradient(left, " + f + ", " + o + ")", u ? wt.css("filter", tinycolor(f).toFilter({
                gradientType: 1
            }, o)) : (wt.css("background", "-webkit-" + i), wt.css("background", "-moz-" + i), wt.css("background", "-ms-" + i), wt.css("background", i)));
            h.showInput && tt.val(t.toString(n));
            h.showPalette && vr();
            yr()
        }

        function kr() {
            var u = ii,
                    f = ri,
                    n = u * yt,
                    t = ft - f * ft,
                    i, r;
            n = Math.max(-et, Math.min(yt - et, n - et));
            t = Math.max(-et, Math.min(ft - et, t - et));
            ur.css({
                top: t,
                left: n
            });
            i = ot * hi;
            or.css({
                left: i - tr / 2
            });
            r = pt * ti;
            fr.css({
                top: r - ir
            })
        }

        function si(n) {
            var t = g(),
                    i;
            vi && w.val(t.toString(kt)).change();
            i = !tinycolor.equals(t, it);
            it = t;
            bi(t);
            n && i && (at.change(t), w.trigger("change.spectrum", [t]))
        }

        function lt() {
            yt = ei.width();
            ft = ei.height();
            et = ur.height();
            nu = ai.width();
            ti = ai.height();
            ir = fr.height();
            hi = er.width();
            tr = or.width();
            ut || (c.css("position", "absolute"), c.offset(b(c, bt)));
            kr()
        }

        function ou() {
            w.show();
            bt.unbind("click.spectrum touchstart.spectrum");
            c.remove();
            ht.remove();
            r[ni.id] = null
        }

        function su(n, r) {
            if (n === i)
                return t.extend({}, h);
            if (r === i)
                return h[n];
            h[n] = r;
            ar()
        }

        function hu() {
            li = !1;
            w.attr("disabled", !1);
            bt.removeClass("sp-disabled")
        }

        function dr() {
            rt();
            li = !0;
            w.attr("disabled", !0);
            bt.addClass("sp-disabled")
        }
        var h = p(e, f),
                ut = h.flat,
                gr = h.showSelectionPalette,
                st = h.localStorageKey,
                gi = h.theme,
                at = h.callbacks,
                nr = d(lt, 10),
                vt = !1,
                yt = 0,
                ft = 0,
                et = 0,
                ti = 0,
                nu = 0,
                hi = 0,
                tr = 0,
                ir = 0,
                pt = 0,
                ii = 0,
                ri = 0,
                ot = 1,
                ci = h.palette.slice(0),
                ui = t.isArray(ci[0]) ? ci : [ci],
                nt = h.selectionPalette.slice(0),
                tu = h.maxSelectionSize,
                rr = "sp-dragging",
                fi = f.ownerDocument,
                cu = fi.body,
                w = t(f),
                li = !1,
                c = t(v, fi).addClass(gi),
                ei = c.find(".sp-color"),
                ur = c.find(".sp-dragger"),
                ai = c.find(".sp-hue"),
                fr = c.find(".sp-slider"),
                wt = c.find(".sp-alpha-inner"),
                er = c.find(".sp-alpha"),
                or = c.find(".sp-alpha-handle"),
                tt = c.find(".sp-input"),
                sr = c.find(".sp-palette"),
                hr = c.find(".sp-initial"),
                cr = c.find(".sp-cancel"),
                lr = c.find(".sp-choose"),
                vi = w.is("input"),
                yi = vi && !ut,
                ht = yi ? t(a).addClass(gi).addClass(h.className) : t([]),
                bt = yi ? ht : w,
                pi = ht.find(".sp-preview-inner"),
                oi = h.color || vi && w.val(),
                it = !1,
                wi = h.preferredFormat,
                kt = wi,
                iu = !h.showButtons || h.clickoutFiresChange,
                ni;
        return ru(), ni = {
            show: di,
            hide: rt,
            toggle: br,
            reflow: lt,
            option: su,
            enable: hu,
            disable: dr,
            set: function(n) {
                ct(n);
                si()
            },
            get: g,
            destroy: ou,
            container: c
        }, ni.id = r.push(ni) - 1, ni
    }

    function b(n, i) {
        var s = 0,
                u = n.outerWidth(),
                f = n.outerHeight(),
                h = i.outerHeight(),
                e = n[0].ownerDocument,
                c = e.documentElement,
                o = c.clientWidth + t(e).scrollLeft(),
                l = c.clientHeight + t(e).scrollTop(),
                r = i.offset();
        return r.top += h, r.left -= Math.min(r.left, r.left + u > o && o > u ? Math.abs(r.left + u - o) : 0), r.top -= Math.min(r.top, r.top + f > l && l > f ? Math.abs(f + h - s) : s), r
    }

    function f() {
    }

    function k(n) {
        n.stopPropagation()
    }

    function e(n, t) {
        var i = Array.prototype.slice,
                r = i.call(arguments, 2);
        return function() {
            return n.apply(t, r.concat(i.call(arguments)))
        }
    }

    function o(i, r, f, e) {
        function l(n) {
            n.stopPropagation && n.stopPropagation();
            n.preventDefault && n.preventDefault();
            n.returnValue = !1
        }

        function p(n) {
            if (s) {
                if (u && document.documentMode < 9 && !n.button)
                    return w();
                var t = n.originalEvent.touches,
                        f = t ? t[0].pageX : n.pageX,
                        e = t ? t[0].pageY : n.pageY,
                        o = Math.max(0, Math.min(f - a.left, y)),
                        c = Math.max(0, Math.min(e - a.top, v));
                h && l(n);
                r.apply(i, [o, c, n])
            }
        }

        function b(n) {
            var r = n.which ? n.which == 3 : n.button == 2,
                    u = n.originalEvent.touches;
            r || s || f.apply(i, arguments) !== !1 && (s = !0, v = t(i).height(), y = t(i).width(), a = t(i).offset(), t(c).bind(o), t(c.body).addClass("sp-dragging"), h || p(n), l(n))
        }

        function w() {
            s && (t(c).unbind(o), t(c.body).removeClass("sp-dragging"), e.apply(i, arguments));
            s = !1
        }
        r = r || function() {
        };
        f = f || function() {
        };
        e = e || function() {
        };
        var c = i.ownerDocument || document,
                s = !1,
                a = {}, v = 0,
                y = 0,
                h = "ontouchstart" in n,
                o = {};
        o.selectstart = l;
        o.dragstart = l;
        o[h ? "touchmove" : "mousemove"] = p;
        o[h ? "touchend" : "mouseup"] = w;
        t(i).bind(h ? "touchstart" : "mousedown", b)
    }

    function d(n, t, i) {
        var r;
        return function() {
            var u = this,
                    f = arguments,
                    e = function() {
                        r = null;
                        n.apply(u, f)
                    };
            i && clearTimeout(r);
            (i || !r) && (r = setTimeout(e, t))
        }
    }
    var c = {
        beforeShow: f,
        move: f,
        change: f,
        show: f,
        hide: f,
        color: !1,
        flat: !1,
        showInput: !1,
        showButtons: !0,
        clickoutFiresChange: !1,
        showInitial: !1,
        showPalette: !1,
        showPaletteOnly: !1,
        showSelectionPalette: !0,
        localStorageKey: !1,
        appendTo: "body",
        maxSelectionSize: 7,
        cancelText: "cancel",
        chooseText: "choose",
        preferredFormat: !1,
        className: "",
        showAlpha: !1,
        theme: "sp-light",
        palette: ["fff", "000"],
        selectionPalette: [],
        disabled: !1
    }, r = [],
            u = !!/msie/i.exec(n.navigator.userAgent),
            l = function() {
                function t(n, t) {
                    return !!~("" + n).indexOf(t)
                }
                var i = document.createElement("div"),
                        n = i.style;
                return n.cssText = "background-color:rgba(0,0,0,.5)", t(n.backgroundColor, "rgba") || t(n.backgroundColor, "hsla")
            }(),
            a = "<div class='sp-replacer'><div class='sp-preview'><div class='sp-preview-inner'><\/div><\/div><div class='sp-dd'>&#9660;<\/div><\/div>",
            v = function() {
                var t = "",
                        n;
                if (u)
                    for (n = 1; n <= 6; n++)
                        t += "<div class='sp-" + n + "'><\/div>";
                return ["<div class='sp-container sp-hidden'>", "<div class='sp-palette-container'>", "<div class='sp-palette sp-thumb sp-cf'><\/div>", "<\/div>", "<div class='sp-picker-container'>", "<div class='sp-top sp-cf'>", "<div class='sp-fill'><\/div>", "<div class='sp-top-inner'>", "<div class='sp-color'>", "<div class='sp-sat'>", "<div class='sp-val'>", "<div class='sp-dragger'><\/div>", "<\/div>", "<\/div>", "<\/div>", "<div class='sp-hue'>", "<div class='sp-slider'><\/div>", t, "<\/div>", "<\/div>", "<div class='sp-alpha'><div class='sp-alpha-inner'><div class='sp-alpha-handle'><\/div><\/div><\/div>", "<\/div>", "<div class='sp-input-container sp-cf'>", "<input class='sp-input' type='text' spellcheck='false'  />", "<\/div>", "<div class='sp-initial sp-thumb sp-cf'><\/div>", "<div class='sp-button-container sp-cf'>", "<a class='sp-cancel' href='#'><\/a>", "<button class='sp-choose'><\/button>", "<\/div>", "<\/div>", "<\/div>"].join("")
            }(),
            h = "spectrum.id";
    t.fn.spectrum = function(n) {
        if (typeof n == "string") {
            var i = this,
                    u = Array.prototype.slice.call(arguments, 1);
            return this.each(function() {
                var f = r[t(this).data(h)],
                        e;
                if (f) {
                    if (e = f[n], !e)
                        throw new Error("Spectrum: no such method: '" + n + "'");
                    n == "get" ? i = f.get() : n == "container" ? i = f.container : n == "option" ? i = f.option.apply(f, u) : n == "destroy" ? (f.destroy(), t(this).removeData(h)) : e.apply(f, u)
                }
            }), i
        }
        return this.spectrum("destroy").each(function() {
            var i = w(this, n);
            t(this).data(h, i.id)
        })
    };
    t.fn.spectrum.load = !0;
    t.fn.spectrum.loadOpts = {};
    t.fn.spectrum.draggable = o;
    t.fn.spectrum.defaults = c;
    t.spectrum = {};
    t.spectrum.localization = {};
    t.spectrum.palettes = {};
    t.fn.spectrum.processNativeColorInputs = function() {
        var n = t("<input type='color' value='!' />")[0],
                i = n.type === "color" && n.value != "!";
        i || t("input[type=color]").spectrum({
            preferredFormat: "hex6"
        })
    },
            function(n) {
                function t(n, u) {
                    if (n = n ? n : "", u = u || {}, typeof n == "object" && n.hasOwnProperty("_tc_id"))
                        return n;
                    var c = nt(n),
                            f = c.r,
                            e = c.g,
                            o = c.b,
                            s = c.a,
                            a = i(100 * s) / 100,
                            v = u.format || c.format;
                    return f < 1 && (f = i(f)), e < 1 && (e = i(e)), o < 1 && (o = i(o)), {
                        ok: c.ok,
                        format: v,
                        _tc_id: g++,
                        alpha: s,
                        toHsv: function() {
                            var n = w(f, e, o);
                            return {
                                h: n.h * 360,
                                s: n.s,
                                v: n.v,
                                a: s
                            }
                        },
                        toHsvString: function() {
                            var n = w(f, e, o),
                                    t = i(n.h * 360),
                                    r = i(n.s * 100),
                                    u = i(n.v * 100);
                            return s == 1 ? "hsv(" + t + ", " + r + "%, " + u + "%)" : "hsva(" + t + ", " + r + "%, " + u + "%, " + a + ")"
                        },
                        toHsl: function() {
                            var n = p(f, e, o);
                            return {
                                h: n.h * 360,
                                s: n.s,
                                l: n.l,
                                a: s
                            }
                        },
                        toHslString: function() {
                            var n = p(f, e, o),
                                    t = i(n.h * 360),
                                    r = i(n.s * 100),
                                    u = i(n.l * 100);
                            return s == 1 ? "hsl(" + t + ", " + r + "%, " + u + "%)" : "hsla(" + t + ", " + r + "%, " + u + "%, " + a + ")"
                        },
                        toHex: function(n) {
                            return l(f, e, o, n)
                        },
                        toHexString: function(n) {
                            return "#" + l(f, e, o, n)
                        },
                        toRgb: function() {
                            return {
                                r: i(f),
                                g: i(e),
                                b: i(o),
                                a: s
                            }
                        },
                        toRgbString: function() {
                            return s == 1 ? "rgb(" + i(f) + ", " + i(e) + ", " + i(o) + ")" : "rgba(" + i(f) + ", " + i(e) + ", " + i(o) + ", " + a + ")"
                        },
                        toPercentageRgb: function() {
                            return {
                                r: i(r(f, 255) * 100) + "%",
                                g: i(r(e, 255) * 100) + "%",
                                b: i(r(o, 255) * 100) + "%",
                                a: s
                            }
                        },
                        toPercentageRgbString: function() {
                            return s == 1 ? "rgb(" + i(r(f, 255) * 100) + "%, " + i(r(e, 255) * 100) + "%, " + i(r(o, 255) * 100) + "%)" : "rgba(" + i(r(f, 255) * 100) + "%, " + i(r(e, 255) * 100) + "%, " + i(r(o, 255) * 100) + "%, " + a + ")"
                        },
                        toName: function() {
                            return b[l(f, e, o, !0)] || !1
                        },
                        toFilter: function(n) {
                            var r = l(f, e, o),
                                    c = r,
                                    a = Math.round(parseFloat(s) * 255).toString(16),
                                    v = a,
                                    y = u && u.gradientType ? "GradientType = 1, " : "",
                                    i;
                            return n && (i = t(n), c = i.toHex(), v = Math.round(parseFloat(i.alpha) * 255).toString(16)), "progid:DXImageTransform.Microsoft.gradient(" + y + "startColorstr=#" + h(a) + r + ",endColorstr=#" + h(v) + c + ")"
                        },
                        toString: function(n) {
                            n = n || this.format;
                            var t = !1;
                            return n === "rgb" && (t = this.toRgbString()), n === "prgb" && (t = this.toPercentageRgbString()), (n === "hex" || n === "hex6") && (t = this.toHexString()), n === "hex3" && (t = this.toHexString(!0)), n === "name" && (t = this.toName()), n === "hsl" && (t = this.toHslString()), n === "hsv" && (t = this.toHsvString()), t || this.toHexString()
                        }
                    }
                }

                function nt(n) {
                    var i = {
                        r: 0,
                        g: 0,
                        b: 0
                    }, t = 1,
                            r = !1,
                            u = !1;
                    return typeof n == "string" && (n = ot(n)), typeof n == "object" && (n.hasOwnProperty("r") && n.hasOwnProperty("g") && n.hasOwnProperty("b") ? (i = tt(n.r, n.g, n.b), r = !0, u = String(n.r).substr(-1) === "%" ? "prgb" : "rgb") : n.hasOwnProperty("h") && n.hasOwnProperty("s") && n.hasOwnProperty("v") ? (n.s = c(n.s), n.v = c(n.v), i = rt(n.h, n.s, n.v), r = !0, u = "hsv") : n.hasOwnProperty("h") && n.hasOwnProperty("s") && n.hasOwnProperty("l") && (n.s = c(n.s), n.l = c(n.l), i = it(n.h, n.s, n.l), r = !0, u = "hsl"), n.hasOwnProperty("a") && (t = n.a)), t = parseFloat(t), (isNaN(t) || t < 0 || t > 1) && (t = 1), {
                        ok: r,
                        format: n.format || u,
                        r: f(255, e(i.r, 0)),
                        g: f(255, e(i.g, 0)),
                        b: f(255, e(i.b, 0)),
                        a: t
                    }
                }

                function tt(n, t, i) {
                    return {
                        r: r(n, 255) * 255,
                        g: r(t, 255) * 255,
                        b: r(i, 255) * 255
                    }
                }

                function p(n, t, i) {
                    var s;
                    n = r(n, 255);
                    t = r(t, 255);
                    i = r(i, 255);
                    var u = e(n, t, i),
                            h = f(n, t, i),
                            o, c, l = (u + h) / 2;
                    if (u == h)
                        o = c = 0;
                    else {
                        s = u - h;
                        c = l > .5 ? s / (2 - u - h) : s / (u + h);
                        switch (u) {
                            case n:
                                o = (t - i) / s + (t < i ? 6 : 0);
                                break;
                            case t:
                                o = (i - n) / s + 2;
                                break;
                            case i:
                                o = (n - t) / s + 4
                        }
                        o /= 6
                    }
                    return {
                        h: o,
                        s: c,
                        l: l
                    }
                }

                function it(n, t, i) {
                    function h(n, t, i) {
                        return (i < 0 && (i += 1), i > 1 && (i -= 1), i < 1 / 6) ? n + (t - n) * 6 * i : i < 1 / 2 ? t : i < 2 / 3 ? n + (t - n) * (2 / 3 - i) * 6 : n
                    }
                    var e, o, s, u, f;
                    return n = r(n, 360), t = r(t, 100), i = r(i, 100), t === 0 ? e = o = s = i : (u = i < .5 ? i * (1 + t) : i + t - i * t, f = 2 * i - u, e = h(f, u, n + 1 / 3), o = h(f, u, n), s = h(f, u, n - 1 / 3)), {
                        r: e * 255,
                        g: o * 255,
                        b: s * 255
                    }
                }

                function w(n, t, i) {
                    n = r(n, 255);
                    t = r(t, 255);
                    i = r(i, 255);
                    var u = e(n, t, i),
                            h = f(n, t, i),
                            o, c, l = u,
                            s = u - h;
                    if (c = u === 0 ? 0 : s / u, u == h)
                        o = 0;
                    else {
                        switch (u) {
                            case n:
                                o = (t - i) / s + (t < i ? 6 : 0);
                                break;
                            case t:
                                o = (i - n) / s + 2;
                                break;
                            case i:
                                o = (n - t) / s + 4
                        }
                        o /= 6
                    }
                    return {
                        h: o,
                        s: c,
                        v: l
                    }
                }

                function rt(n, t, i) {
                    n = r(n, 360) * 6;
                    t = r(t, 100);
                    i = r(i, 100);
                    var h = o.floor(n),
                            c = n - h,
                            u = i * (1 - t),
                            f = i * (1 - c * t),
                            e = i * (1 - (1 - c) * t),
                            s = h % 6,
                            l = [i, f, u, u, e, i][s],
                            a = [e, i, i, f, u, u][s],
                            v = [u, u, e, i, i, f][s];
                    return {
                        r: l * 255,
                        g: a * 255,
                        b: v * 255
                    }
                }

                function l(n, t, r, u) {
                    var f = [h(i(n).toString(16)), h(i(t).toString(16)), h(i(r).toString(16))];
                    return u && f[0].charAt(0) == f[0].charAt(1) && f[1].charAt(0) == f[1].charAt(1) && f[2].charAt(0) == f[2].charAt(1) ? f[0].charAt(0) + f[1].charAt(0) + f[2].charAt(0) : f.join("")
                }

                function ut(n) {
                    var i = {}, t;
                    for (t in n)
                        n.hasOwnProperty(t) && (i[n[t]] = t);
                    return i
                }

                function r(n, t) {
                    ft(n) && (n = "100%");
                    var i = et(n);
                    return (n = f(t, e(0, parseFloat(n))), i && (n = parseInt(n * t, 10) / 100), o.abs(n - t) < 1e-6) ? 1 : n % t / parseFloat(t)
                }

                function v(n) {
                    return f(1, e(0, n))
                }

                function s(n) {
                    return parseInt(n, 16)
                }

                function ft(n) {
                    return typeof n == "string" && n.indexOf(".") != -1 && parseFloat(n) === 1
                }

                function et(n) {
                    return typeof n == "string" && n.indexOf("%") != -1
                }

                function h(n) {
                    return n.length == 1 ? "0" + n : "" + n
                }

                function c(n) {
                    return n <= 1 && (n = n * 100 + "%"), n
                }

                function ot(n) {
                    var i, t;
                    if (n = n.replace(k, "").replace(d, "").toLowerCase(), i = !1, a[n])
                        n = a[n], i = !0;
                    else if (n == "transparent")
                        return {
                            r: 0,
                            g: 0,
                            b: 0,
                            a: 0
                        };
                    return (t = u.rgb.exec(n)) ? {
                        r: t[1],
                        g: t[2],
                        b: t[3]
                    } : (t = u.rgba.exec(n)) ? {
                        r: t[1],
                        g: t[2],
                        b: t[3],
                        a: t[4]
                    } : (t = u.hsl.exec(n)) ? {
                        h: t[1],
                        s: t[2],
                        l: t[3]
                    } : (t = u.hsla.exec(n)) ? {
                        h: t[1],
                        s: t[2],
                        l: t[3],
                        a: t[4]
                    } : (t = u.hsv.exec(n)) ? {
                        h: t[1],
                        s: t[2],
                        v: t[3]
                    } : (t = u.hex6.exec(n)) ? {
                        r: s(t[1]),
                        g: s(t[2]),
                        b: s(t[3]),
                        format: i ? "name" : "hex"
                    } : (t = u.hex3.exec(n)) ? {
                        r: s(t[1] + "" + t[1]),
                        g: s(t[2] + "" + t[2]),
                        b: s(t[3] + "" + t[3]),
                        format: i ? "name" : "hex"
                    } : !1
                }
                var k = /^[\s,#]+/,
                        d = /\s+$/,
                        g = 0,
                        o = Math,
                        i = o.round,
                        f = o.min,
                        e = o.max,
                        y = o.random,
                        a, b, u;
                t.fromRatio = function(n, i) {
                    var u, r;
                    if (typeof n == "object") {
                        u = {};
                        for (r in n)
                            n.hasOwnProperty(r) && (u[r] = r === "a" ? n[r] : c(n[r]));
                        n = u
                    }
                    return t(n, i)
                };
                t.equals = function(n, i) {
                    return !n || !i ? !1 : t(n).toRgbString() == t(i).toRgbString()
                };
                t.random = function() {
                    return t.fromRatio({
                        r: y(),
                        g: y(),
                        b: y()
                    })
                };
                t.desaturate = function(n, i) {
                    var r = t(n).toHsl();
                    return r.s -= (i || 10) / 100, r.s = v(r.s), t(r)
                };
                t.saturate = function(n, i) {
                    var r = t(n).toHsl();
                    return r.s += (i || 10) / 100, r.s = v(r.s), t(r)
                };
                t.greyscale = function(n) {
                    return t.desaturate(n, 100)
                };
                t.lighten = function(n, i) {
                    var r = t(n).toHsl();
                    return r.l += (i || 10) / 100, r.l = v(r.l), t(r)
                };
                t.darken = function(n, i) {
                    var r = t(n).toHsl();
                    return r.l -= (i || 10) / 100, r.l = v(r.l), t(r)
                };
                t.complement = function(n) {
                    var i = t(n).toHsl();
                    return i.h = (i.h + 180) % 360, t(i)
                };
                t.triad = function(n) {
                    var i = t(n).toHsl(),
                            r = i.h;
                    return [t(n), t({
                            h: (r + 120) % 360,
                            s: i.s,
                            l: i.l
                        }), t({
                            h: (r + 240) % 360,
                            s: i.s,
                            l: i.l
                        })]
                };
                t.tetrad = function(n) {
                    var i = t(n).toHsl(),
                            r = i.h;
                    return [t(n), t({
                            h: (r + 90) % 360,
                            s: i.s,
                            l: i.l
                        }), t({
                            h: (r + 180) % 360,
                            s: i.s,
                            l: i.l
                        }), t({
                            h: (r + 270) % 360,
                            s: i.s,
                            l: i.l
                        })]
                };
                t.splitcomplement = function(n) {
                    var i = t(n).toHsl(),
                            r = i.h;
                    return [t(n), t({
                            h: (r + 72) % 360,
                            s: i.s,
                            l: i.l
                        }), t({
                            h: (r + 216) % 360,
                            s: i.s,
                            l: i.l
                        })]
                };
                t.analogous = function(n, i, r) {
                    i = i || 6;
                    r = r || 30;
                    var u = t(n).toHsl(),
                            f = 360 / r,
                            e = [t(n)];
                    for (u.h = (u.h - (f * i >> 1) + 720) % 360; --i; )
                        u.h = (u.h + f) % 360, e.push(t(u));
                    return e
                };
                t.monochromatic = function(n, i) {
                    i = i || 6;
                    for (var r = t(n).toHsv(), e = r.h, o = r.s, u = r.v, f = [], s = 1 / i; i--; )
                        f.push(t({
                            h: e,
                            s: o,
                            v: u
                        })), u = (u + s) % 1;
                    return f
                };
                t.readability = function(n, i) {
                    var r = t(n).toRgb(),
                            u = t(i).toRgb(),
                            f = (r.r * 299 + r.g * 587 + r.b * 114) / 1e3,
                            e = (u.r * 299 + u.g * 587 + u.b * 114) / 1e3,
                            o = Math.max(r.r, u.r) - Math.min(r.r, u.r) + Math.max(r.g, u.g) - Math.min(r.g, u.g) + Math.max(r.b, u.b) - Math.min(r.b, u.b);
                    return {
                        brightness: Math.abs(f - e),
                        color: o
                    }
                };
                t.readable = function(n, i) {
                    var r = t.readability(n, i);
                    return r.brightness > 125 && r.color > 500
                };
                t.mostReadable = function(n, i) {
                    for (var h = null, o = 0, u = !1, r = 0; r < i.length; r++) {
                        var f = t.readability(n, i[r]),
                                e = f.brightness > 125 && f.color > 500,
                                s = 3 * (f.brightness / 125) + f.color / 500;
                        (e && !u || e && u && s > o || !e && !u && s > o) && (u = e, o = s, h = t(i[r]))
                    }
                    return h
                };
                a = t.names = {
                    aliceblue: "f0f8ff",
                    antiquewhite: "faebd7",
                    aqua: "0ff",
                    aquamarine: "7fffd4",
                    azure: "f0ffff",
                    beige: "f5f5dc",
                    bisque: "ffe4c4",
                    black: "000",
                    blanchedalmond: "ffebcd",
                    blue: "00f",
                    blueviolet: "8a2be2",
                    brown: "a52a2a",
                    burlywood: "deb887",
                    burntsienna: "ea7e5d",
                    cadetblue: "5f9ea0",
                    chartreuse: "7fff00",
                    chocolate: "d2691e",
                    coral: "ff7f50",
                    cornflowerblue: "6495ed",
                    cornsilk: "fff8dc",
                    crimson: "dc143c",
                    cyan: "0ff",
                    darkblue: "00008b",
                    darkcyan: "008b8b",
                    darkgoldenrod: "b8860b",
                    darkgray: "a9a9a9",
                    darkgreen: "006400",
                    darkgrey: "a9a9a9",
                    darkkhaki: "bdb76b",
                    darkmagenta: "8b008b",
                    darkolivegreen: "556b2f",
                    darkorange: "ff8c00",
                    darkorchid: "9932cc",
                    darkred: "8b0000",
                    darksalmon: "e9967a",
                    darkseagreen: "8fbc8f",
                    darkslateblue: "483d8b",
                    darkslategray: "2f4f4f",
                    darkslategrey: "2f4f4f",
                    darkturquoise: "00ced1",
                    darkviolet: "9400d3",
                    deeppink: "ff1493",
                    deepskyblue: "00bfff",
                    dimgray: "696969",
                    dimgrey: "696969",
                    dodgerblue: "1e90ff",
                    firebrick: "b22222",
                    floralwhite: "fffaf0",
                    forestgreen: "228b22",
                    fuchsia: "f0f",
                    gainsboro: "dcdcdc",
                    ghostwhite: "f8f8ff",
                    gold: "ffd700",
                    goldenrod: "daa520",
                    gray: "808080",
                    green: "008000",
                    greenyellow: "adff2f",
                    grey: "808080",
                    honeydew: "f0fff0",
                    hotpink: "ff69b4",
                    indianred: "cd5c5c",
                    indigo: "4b0082",
                    ivory: "fffff0",
                    khaki: "f0e68c",
                    lavender: "e6e6fa",
                    lavenderblush: "fff0f5",
                    lawngreen: "7cfc00",
                    lemonchiffon: "fffacd",
                    lightblue: "add8e6",
                    lightcoral: "f08080",
                    lightcyan: "e0ffff",
                    lightgoldenrodyellow: "fafad2",
                    lightgray: "d3d3d3",
                    lightgreen: "90ee90",
                    lightgrey: "d3d3d3",
                    lightpink: "ffb6c1",
                    lightsalmon: "ffa07a",
                    lightseagreen: "20b2aa",
                    lightskyblue: "87cefa",
                    lightslategray: "789",
                    lightslategrey: "789",
                    lightsteelblue: "b0c4de",
                    lightyellow: "ffffe0",
                    lime: "0f0",
                    limegreen: "32cd32",
                    linen: "faf0e6",
                    magenta: "f0f",
                    maroon: "800000",
                    mediumaquamarine: "66cdaa",
                    mediumblue: "0000cd",
                    mediumorchid: "ba55d3",
                    mediumpurple: "9370db",
                    mediumseagreen: "3cb371",
                    mediumslateblue: "7b68ee",
                    mediumspringgreen: "00fa9a",
                    mediumturquoise: "48d1cc",
                    mediumvioletred: "c71585",
                    midnightblue: "191970",
                    mintcream: "f5fffa",
                    mistyrose: "ffe4e1",
                    moccasin: "ffe4b5",
                    navajowhite: "ffdead",
                    navy: "000080",
                    oldlace: "fdf5e6",
                    olive: "808000",
                    olivedrab: "6b8e23",
                    orange: "ffa500",
                    orangered: "ff4500",
                    orchid: "da70d6",
                    palegoldenrod: "eee8aa",
                    palegreen: "98fb98",
                    paleturquoise: "afeeee",
                    palevioletred: "db7093",
                    papayawhip: "ffefd5",
                    peachpuff: "ffdab9",
                    peru: "cd853f",
                    pink: "ffc0cb",
                    plum: "dda0dd",
                    powderblue: "b0e0e6",
                    purple: "800080",
                    red: "f00",
                    rosybrown: "bc8f8f",
                    royalblue: "4169e1",
                    saddlebrown: "8b4513",
                    salmon: "fa8072",
                    sandybrown: "f4a460",
                    seagreen: "2e8b57",
                    seashell: "fff5ee",
                    sienna: "a0522d",
                    silver: "c0c0c0",
                    skyblue: "87ceeb",
                    slateblue: "6a5acd",
                    slategray: "708090",
                    slategrey: "708090",
                    snow: "fffafa",
                    springgreen: "00ff7f",
                    steelblue: "4682b4",
                    tan: "d2b48c",
                    teal: "008080",
                    thistle: "d8bfd8",
                    tomato: "ff6347",
                    turquoise: "40e0d0",
                    violet: "ee82ee",
                    wheat: "f5deb3",
                    white: "fff",
                    whitesmoke: "f5f5f5",
                    yellow: "ff0",
                    yellowgreen: "9acd32"
                };
                b = t.hexNames = ut(a);
                u = function() {
                    var n = "(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)",
                            t = "[\\s|\\(]+(" + n + ")[,|\\s]+(" + n + ")[,|\\s]+(" + n + ")\\s*\\)?",
                            i = "[\\s|\\(]+(" + n + ")[,|\\s]+(" + n + ")[,|\\s]+(" + n + ")[,|\\s]+(" + n + ")\\s*\\)?";
                    return {
                        rgb: new RegExp("rgb" + t),
                        rgba: new RegExp("rgba" + i),
                        hsl: new RegExp("hsl" + t),
                        hsla: new RegExp("hsla" + i),
                        hsv: new RegExp("hsv" + t),
                        hex3: /^([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
                        hex6: /^([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
                    }
                }();
                n.tinycolor = t
            }(this);
    t(function() {
        t.fn.spectrum.load && t.fn.spectrum.processNativeColorInputs()
    })
}(window, jQuery));