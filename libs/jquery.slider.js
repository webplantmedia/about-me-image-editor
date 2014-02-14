/** @preserve jQuery noUISlider */
(function(n) {
    n.fn.noUiSlider = function(t, i) {
        function f(n, t, i) {
            var u = t.data("setup"),
                    f = u.handles;
            return t = u.settings, u = u.pos, n = 0 > n ? 0 : 100 < n ? 100 : n, 2 == t.handles && (i.is(":first-child") ? (i = parseFloat(f[1][0].style[u]) - t.margin, n = n > i ? i : n) : (i = parseFloat(f[0][0].style[u]) + t.margin, n = n < i ? i : n)), t.step && (i = r.from(t.range, t.step), n = Math.round(n / i) * i), n
        }

        function e(n) {
            try {
                return [n.clientX || n.originalEvent.clientX || n.originalEvent.touches[0].clientX, n.clientY || n.originalEvent.clientY || n.originalEvent.touches[0].clientY]
            } catch (t) {
                return ["x", "y"]
            }
        }
        var u = window.navigator.msPointerEnabled ? 2 : "ontouchend" in document ? 3 : 1,
                r, o, s;
        return window.debug && console && console.log(u), r = {
            to: function(n, t) {
                return t = 0 > n[0] ? t + Math.abs(n[0]) : t - n[0], 100 * t / this._length(n)
            },
            from: function(n, t) {
                return 100 * t / this._length(n)
            },
            is: function(n, t) {
                return t * this._length(n) / 100 + n[0]
            },
            _length: function(n) {
                return n[0] > n[1] ? n[0] - n[1] : n[1] - n[0]
            }
        }, o = {
            handles: 2,
            serialization: {
                to: ["", ""],
                resolution: .01
            }
        }, methods = {
            create: function() {
                return this.each(function() {
                    var i = n.extend(o, t),
                            h = n(this).data("_isnS_", !0),
                            c = [],
                            l, y, s = "",
                            v = function(n) {
                                return !isNaN(parseFloat(n)) && isFinite(n)
                            }, a = (i.serialization.resolution = i.serialization.resolution || .01).toString().split("."),
                            p = 1 == a[0] ? 0 : a[1].length;
                    for (i.start = v(i.start) ? [i.start, 0] : i.start, n.each(i, function(n, t) {
                        v(t) ? i[n] = parseFloat(t) : "object" == typeof t && v(t[0]) && (t[0] = parseFloat(t[0]), v(t[1]) && (t[1] = parseFloat(t[1])));
                        var r = !1;
                        t = "undefined" == typeof t ? "x" : t;
                        switch (n) {
                            case "range":
                            case "start":
                                r = 2 != t.length || !v(t[0]) || !v(t[1]);
                                break;
                            case "handles":
                                r = 1 > t || 2 < t || !v(t);
                                break;
                            case "connect":
                                r = "lower" != t && "upper" != t && "boolean" != typeof t;
                                break;
                            case "orientation":
                                r = "vertical" != t && "horizontal" != t;
                                break;
                            case "margin":
                            case "step":
                                r = "undefined" != typeof t && !v(t);
                                break;
                            case "serialization":
                                r = "object" != typeof t || !v(t.resolution) || "object" == typeof t.to && t.to.length < i.handles;
                                break;
                            case "slide":
                                r = "function" != typeof t
                        }
                        r && console && console.error("Bad input for " + n + " on slider:", h)
                    }), i.margin = i.margin ? r.from(i.range, i.margin) : 0, (i.serialization.to instanceof jQuery || "string" == typeof i.serialization.to || !1 === i.serialization.to) && (i.serialization.to = [i.serialization.to]), "vertical" == i.orientation ? (s += "vertical", l = "top", y = 1) : (s += "horizontal", l = "left", y = 0), s += i.connect ? "lower" == i.connect ? " connect lower" : " connect" : "", h.addClass(s), s = 0; s < i.handles; s++) {
                        c[s] = h.append("<a><div><\/div><\/a>").children(":last");
                        a = r.to(i.range, i.start[s]);
                        c[s].css(l, a + "%");
                        100 == a && c[s].is(":first-child") && c[s].css("z-index", 2);
                        var a = (1 === u ? "mousedown" : 2 === u ? "MSPointerDown" : "touchstart") + ".noUiSliderX",
                                w = (1 === u ? "mousemove" : 2 === u ? "MSPointerMove" : "touchmove") + ".noUiSlider",
                                b = (1 === u ? "mouseup" : 2 === u ? "MSPointerUp" : "touchend") + ".noUiSlider";
                        c[s].find("div").on(a, function(t) {
                            if (n("body").bind("selectstart.noUiSlider", function() {
                                return !1
                            }), !h.hasClass("disabled")) {
                                n("body").addClass("TOUCH");
                                var u = n(this).addClass("active").parent(),
                                        v = u.add(n(document)).add("body"),
                                        k = parseFloat(u[0].style[l]),
                                        o = e(t),
                                        s = o,
                                        a = !1;
                                n(document).on(w, function(n) {
                                    var v, w;
                                    if (n.preventDefault(), n = e(n), "x" != n[0]) {
                                        n[0] -= o[0];
                                        n[1] -= o[1];
                                        var v = [s[0] != n[0], s[1] != n[1]],
                                                t = k + 100 * n[y] / (y ? h.height() : h.width()),
                                                t = f(t, h, u);
                                        v[y] && t != a && (u.css(l, t + "%").data("input").val(r.is(i.range, t).toFixed(p)), v = i.slide, w = h.data("_n", !0), "function" == typeof v && v.call(w, void 0), a = t, u.css("z-index", 2 == c.length && 100 == t && u.is(":first-child") ? 2 : 1));
                                        s = n
                                    }
                                }).on(b, function() {
                                    v.off(".noUiSlider");
                                    n("body").removeClass("TOUCH");
                                    h.find(".active").removeClass("active").end().data("_n") && h.data("_n", !1).change()
                                })
                            }
                        }).on("click", function(n) {
                            n.stopPropagation()
                        })
                    }
                    if (1 == u)
                        h.on("click", function(n) {
                            if (!h.hasClass("disabled")) {
                                var t = e(n);
                                n = 100 * (t[y] - h.offset()[l]) / (y ? h.height() : h.width());
                                t = 1 < c.length ? t[y] < (c[0].offset()[l] + c[1].offset()[l]) / 2 ? c[0] : c[1] : c[0];
                                n = f(n, h, t);
                                t.css(l, n + "%").data("input").val(r.is(i.range, n).toFixed(p));
                                n = i.slide;
                                "function" == typeof n && n.call(h, void 0);
                                h.change()
                            }
                        });
                    for (s = 0; s < c.length; s++)
                        a = r.is(i.range, parseFloat(c[s][0].style[l])).toFixed(p), "string" == typeof i.serialization.to[s] ? c[s].data("input", h.append('<input type="hidden" name="' + i.serialization.to[s] + '">').find("input:last").val(a).change(function(n) {
                            n.stopPropagation()
                        })) : !1 == i.serialization.to[s] ? c[s].data("input", {
                            val: function(n) {
                                if ("undefined" != typeof n)
                                    this.handle.data("noUiVal", n);
                                else
                                    return this.handle.data("noUiVal")
                            },
                            handle: c[s]
                        }) : c[s].data("input", i.serialization.to[s].data("handleNR", s).val(a).change(function() {
                            var t = [null, null];
                            t[n(this).data("handleNR")] = n(this).val();
                            h.val(t)
                        }));
                    n(this).data("setup", {
                        settings: i,
                        handles: c,
                        pos: l,
                        res: p
                    })
                })
            },
            val: function(t) {
                var e, i, u;
                if ("undefined" != typeof t)
                    return e = "number" == typeof t ? [t] : t, this.each(function() {
                        for (var u, t = n(this).data("setup"), i = 0; i < t.handles.length; i++)
                            null != e[i] && (u = f(r.to(t.settings.range, e[i]), n(this), t.handles[i]), t.handles[i].css(t.pos, u + "%").data("input").val(r.is(t.settings.range, u).toFixed(t.res)))
                    });
                for (t = n(this).data("setup").handles, i = [], u = 0; u < t.length; u++)
                    i.push(parseFloat(t[u].data("input").val()));
                return 1 == i.length ? i[0] : i
            },
            disabled: function() {
                return i ? n(this).addClass("disabled") : n(this).removeClass("disabled")
            }
        }, s = jQuery.fn.val, jQuery.fn.val = function() {
            return this.data("_isnS_") ? methods.val.apply(this, arguments) : s.apply(this, arguments)
        }, "disabled" == t ? methods.disabled.apply(this) : methods.create.apply(this)
    }
}(jQuery));