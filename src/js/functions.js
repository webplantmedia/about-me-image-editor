function getImageSize(n) {
    var t = new Image;
    return t.src = n.src, {
        width: t.width,
        height: t.height
    };
}

function resizeImage(n, t, i, r) {
    var u = new Image;
    u.onload = function() {
        var e = t, n = Math.floor(u.height * t / u.width), f, o, s;
        n > i && (e = Math.floor(u.width * i / u.height), n = i);
        f = document.createElement("canvas");
        f.width = e;
        f.height = n;
        o = f.getContext("2d");
        o.drawImage(u, 0, 0, e, n);
        s = f.toDataURL("image/jpeg", .84);
        r(s);
    };
    u.src = n;
}

function rotateImage(n, t) {
    var u = t * Math.PI / 180, i = getImageSize(n),
            e = Math.ceil(Math.abs(i.width * Math.cos(u) + i.height * Math.sin(u))),
            o = Math.ceil(Math.abs(i.width * Math.sin(u) + i.height * Math.cos(u))),
            f = document.createElement("canvas"), r;
    return f.width = e, f.height = o, r = f.getContext("2d"), r.translate(e / 2, o / 2), r.rotate(t * Math.PI / 180), r.translate(i.width / -2, i.height / -2), r.drawImage(n, 0, 0), f.toDataURL();
}

function flipHorizontal(n) {
    var i = getImageSize(n), t;
    return canvas = document.createElement("canvas"), canvas.width = i.width, canvas.height = i.height, t = canvas.getContext("2d"), t.translate(i.width, 0), t.scale(-1, 1), t.drawImage(n, 0, 0), canvas.toDataURL();
}

function flipVertical(n) {
    var i = getImageSize(n), t;
    return canvas = document.createElement("canvas"), canvas.width = i.width, canvas.height = i.height, t = canvas.getContext("2d"), t.translate(0, i.height), t.scale(1, -1), t.drawImage(n, 0, 0), canvas.toDataURL();
}
$.fn.serializeObject = function() {
    var n = {}, t = this.serializeArray();
    return $.each(t, function() {
        n[this.name] ? (n[this.name].push || (n[this.name] = [n[this.name]]), n[this.name].push(this.value || "")) : n[this.name] = this.value || "";
    }), n;
};
Array.prototype.remove = function() {
    for (var n, t = arguments, i = t.length, r; i && this.length; )
        for (n = t[--i];
                (r = this.indexOf(n)) !== - 1; )
            this.splice(r, 1);
    return this;
};
Function.prototype.bind = function(n) {
    var t = this;
    return function() {
        return t.apply(n, arguments);
    };
};
String.prototype.startsWith = function(n) {
    return this.indexOf(n) === 0;
};
String.prototype.format = function() {
    var n = arguments;
    return this.replace(/{(\d+)}/g, function(t, i) {
        return typeof n[i] !== "undefined" ? n[i] : t;
    });
};
(function() {
    var t = [].indexOf || function(n) {
        for (var t = 0, i = this.length; t < i; t++)
            if (t in this && this[t] === n)
                return t;
        return -1;
    }, n = [].slice;
    (function(n, t) {
        return typeof define == "function" && define.amd ? define("waypoints", ["jquery"], function(i) {
            return t(i, n);
        }) : t(n.jQuery, n);
    })(this, function(i, r) {
        var a, b, v, o, k, h, s, y, u, f, p, w, d, l, c, e;
        return a = i(r), y = t.call(r, "ontouchstart") >= 0, o = {
            horizontal: {},
            vertical: {}
        }, k = 1, s = {}, h = "waypoints-context-id", p = "resize.waypoints", w = "scroll.waypoints", d = 1, l = "waypoints-waypoint-ids", c = "waypoint", e = "waypoints", b = function() {
            function n(n) {
                var t = this;
                this.$element = n;
                this.element = n[0];
                this.didResize = false;
                this.didScroll = false;
                this.id = "context" + k++;
                this.oldScroll = {
                    x: n.scrollLeft(),
                    y: n.scrollTop()
                };
                this.waypoints = {
                    horizontal: {},
                    vertical: {}
                };
                n.data(h, this.id);
                s[this.id] = this;
                n.bind(w, function() {
                    var n;
                    if (!(t.didScroll || y))
                        return t.didScroll = true, n = function() {
                            return t.doScroll(), t.didScroll = false;
                        }, r.setTimeout(n, i[e].settings.scrollThrottle);
                });
                n.bind(p, function() {
                    var n;
                    if (!t.didResize)
                        return t.didResize = true, n = function() {
                            return i[e]("refresh"), t.didResize = false;
                        }, r.setTimeout(n, i[e].settings.resizeThrottle);
                });
            }
            return n.prototype.doScroll = function() {
                var n, t = this;
                return n = {
                    horizontal: {
                        newScroll: this.$element.scrollLeft(),
                        oldScroll: this.oldScroll.x,
                        forward: "right",
                        backward: "left"
                    },
                    vertical: {
                        newScroll: this.$element.scrollTop(),
                        oldScroll: this.oldScroll.y,
                        forward: "down",
                        backward: "up"
                    }
                }, !y || n.vertical.oldScroll && n.vertical.newScroll || i[e]("refresh"), i.each(n, function(n, r) {
                    var e, f, u;
                    return u = [], f = r.newScroll > r.oldScroll, e = f ? r.forward : r.backward, i.each(t.waypoints[n], function(n, t) {
                        var i, f;
                        return r.oldScroll < (i = t.offset) && i <= r.newScroll ? u.push(t) : r.newScroll < (f = t.offset) && f <= r.oldScroll ? u.push(t) : void 0;
                    }), u.sort(function(n, t) {
                        return n.offset - t.offset;
                    }), f || u.reverse(), i.each(u, function(n, t) {
                        if (t.options.continuous || n === u.length - 1)
                            return t.trigger([e]);
                    });
                }), this.oldScroll = {
                    x: n.horizontal.newScroll,
                    y: n.vertical.newScroll
                };
            }, n.prototype.refresh = function() {
                var r, t, n, u = this;
                return n = i.isWindow(this.element), t = this.$element.offset(), this.doScroll(), r = {
                    horizontal: {
                        contextOffset: n ? 0 : t.left,
                        contextScroll: n ? 0 : this.oldScroll.x,
                        contextDimension: this.$element.width(),
                        oldScroll: this.oldScroll.x,
                        forward: "right",
                        backward: "left",
                        offsetProp: "left"
                    },
                    vertical: {
                        contextOffset: n ? 0 : t.top,
                        contextScroll: n ? 0 : this.oldScroll.y,
                        contextDimension: n ? i[e]("viewportHeight") : this.$element.height(),
                        oldScroll: this.oldScroll.y,
                        forward: "down",
                        backward: "up",
                        offsetProp: "top"
                    }
                }, i.each(r, function(n, t) {
                    return i.each(u.waypoints[n], function(n, r) {
                        var u, e, f, o, s;
                        if (u = r.options.offset, f = r.offset, e = i.isWindow(r.element) ? 0 : r.$element.offset()[t.offsetProp], i.isFunction(u) ? u = u.apply(r.element) : typeof u == "string" && (u = parseFloat(u), r.options.offset.indexOf("%") > -1 && (u = Math.ceil(t.contextDimension * u / 100))), r.offset = e - t.contextOffset + t.contextScroll - u, (!r.options.onlyOnScroll || f == null) && r.enabled)
                            return f !== null && f < (o = t.oldScroll) && o <= r.offset ? r.trigger([t.backward]) : f !== null && f > (s = t.oldScroll) && s >= r.offset ? r.trigger([t.forward]) : f === null && t.oldScroll >= r.offset ? r.trigger([t.forward]) : void 0;
                    });
                });
            }, n.prototype.checkEmpty = function() {
                if (i.isEmptyObject(this.waypoints.horizontal) && i.isEmptyObject(this.waypoints.vertical))
                    return this.$element.unbind([p, w].join(" ")), delete s[this.id];
            }, n;
        }(), v = function() {
            function n(n, t, r) {
                var u, f;
                r = i.extend({}, i.fn[c].defaults, r);
                r.offset === "bottom-in-view" && (r.offset = function() {
                    var n;
                    return n = i[e]("viewportHeight"), i.isWindow(t.element) || (n = t.$element.height()), n - i(this).outerHeight();
                });
                this.$element = n;
                this.element = n[0];
                this.axis = r.horizontal ? "horizontal" : "vertical";
                this.callback = r.handler;
                this.context = t;
                this.enabled = r.enabled;
                this.id = "waypoints" + d++;
                this.offset = null;
                this.options = r;
                t.waypoints[this.axis][this.id] = this;
                o[this.axis][this.id] = this;
                u = (f = n.data(l)) != null ? f : [];
                u.push(this.id);
                n.data(l, u);
            }
            return n.prototype.trigger = function(n) {
                if (this.enabled)
                    return this.callback != null && this.callback.apply(this.element, n), this.options.triggerOnce ? this.destroy() : void 0;
            }, n.prototype.disable = function() {
                return this.enabled = false;
            }, n.prototype.enable = function() {
                return this.context.refresh(), this.enabled = true;
            }, n.prototype.destroy = function() {
                return delete o[this.axis][this.id], delete this.context.waypoints[this.axis][this.id], this.context.checkEmpty();
            }, n.getWaypointsByElement = function(n) {
                var r, t;
                return (t = i(n).data(l), !t) ? [] : (r = i.extend({}, o.horizontal, o.vertical), i.map(t, function(n) {
                    return r[n];
                }));
            }, n;
        }(), f = {
            init: function(n, t) {
                var r;
                return t == null && (t = {}), (r = t.handler) == null && (t.handler = n), this.each(function() {
                    var u, r, n, f;
                    return u = i(this), n = (f = t.context) != null ? f : i.fn[c].defaults.context, i.isWindow(n) || (n = u.closest(n)), n = i(n), r = s[n.data(h)], r || (r = new b(n)), new v(u, r, t);
                }), i[e]("refresh"), this;
            },
            disable: function() {
                return f._invoke(this, "disable");
            },
            enable: function() {
                return f._invoke(this, "enable");
            },
            destroy: function() {
                return f._invoke(this, "destroy");
            },
            prev: function(n, t) {
                return f._traverse.call(this, n, t, function(n, t, i) {
                    if (t > 0)
                        return n.push(i[t - 1]);
                });
            },
            next: function(n, t) {
                return f._traverse.call(this, n, t, function(n, t, i) {
                    if (t < i.length - 1)
                        return n.push(i[t + 1]);
                });
            },
            _traverse: function(n, t, f) {
                var e, o;
                return n == null && (n = "vertical"), t == null && (t = r), o = u.aggregate(t), e = [], this.each(function() {
                    var t;
                    return t = i.inArray(this, o[n]), f(e, t, o[n]);
                }), this.pushStack(e);
            },
            _invoke: function(n, t) {
                return n.each(function() {
                    var n;
                    return n = v.getWaypointsByElement(this), i.each(n, function(n, i) {
                        return i[t](), true;
                    });
                }), this;
            }
        }, i.fn[c] = function() {
            var r, t;
            return t = arguments[0], r = 2 <= arguments.length ? n.call(arguments, 1) : [], f[t] ? f[t].apply(this, r) : i.isFunction(t) ? f.init.apply(this, arguments) : i.isPlainObject(t) ? f.init.apply(this, [null, t]) : t ? i.error("The " + t + " method does not exist in jQuery Waypoints.") : i.error("jQuery Waypoints needs a callback function or handler option.");
        }, i.fn[c].defaults = {
            context: r,
            continuous: true,
            enabled: true,
            horizontal: false,
            offset: 0,
            triggerOnce: false
        }, u = {
            refresh: function() {
                return i.each(s, function(n, t) {
                    return t.refresh();
                });
            },
            viewportHeight: function() {
                var n;
                return (n = r.innerHeight) != null ? n : a.height();
            },
            aggregate: function(n) {
                var r, t, u;
                return (r = o, n && (r = (u = s[i(n).data(h)]) != null ? u.waypoints : void 0), !r) ? [] : (t = {
                    horizontal: [],
                    vertical: []
                }, i.each(t, function(n, u) {
                    return i.each(r[n], function(n, t) {
                        return u.push(t);
                    }), u.sort(function(n, t) {
                        return n.offset - t.offset;
                    }), t[n] = i.map(u, function(n) {
                        return n.element;
                    }), t[n] = i.unique(t[n]);
                }), t);
            },
            above: function(n) {
                return n == null && (n = r), u._filter(n, "vertical", function(n, t) {
                    return t.offset <= n.oldScroll.y;
                });
            },
            below: function(n) {
                return n == null && (n = r), u._filter(n, "vertical", function(n, t) {
                    return t.offset > n.oldScroll.y;
                });
            },
            left: function(n) {
                return n == null && (n = r), u._filter(n, "horizontal", function(n, t) {
                    return t.offset <= n.oldScroll.x;
                });
            },
            right: function(n) {
                return n == null && (n = r), u._filter(n, "horizontal", function(n, t) {
                    return t.offset > n.oldScroll.x;
                });
            },
            enable: function() {
                return u._invoke("enable");
            },
            disable: function() {
                return u._invoke("disable");
            },
            destroy: function() {
                return u._invoke("destroy");
            },
            extendFn: function(n, t) {
                return f[n] = t;
            },
            _invoke: function(n) {
                var t;
                return t = i.extend({}, o.vertical, o.horizontal), i.each(t, function(t, i) {
                    return i[n](), true;
                });
            },
            _filter: function(n, t, r) {
                var u, f;
                return (u = s[i(n).data(h)], !u) ? [] : (f = [], i.each(u.waypoints[t], function(n, t) {
                    if (r(u, t))
                        return f.push(t);
                }), f.sort(function(n, t) {
                    return n.offset - t.offset;
                }), i.map(f, function(n) {
                    return n.element;
                }));
            }
        }, i[e] = function() {
            var i, t;
            return t = arguments[0], i = 2 <= arguments.length ? n.call(arguments, 1) : [], u[t] ? u[t].apply(null, i) : u.aggregate.call(null, t);
        }, i[e].settings = {
            resizeThrottle: 100,
            scrollThrottle: 30
        }, a.load(function() {
            return i[e]("refresh");
        });
    });
}.call(this));