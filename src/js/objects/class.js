/**
 * Generic class
 */
(function() {
    var n = false, t = /xyz/.test(function() {
        xyz;
    }) ? /\b__superobject\b/ : /.*/;
    this.Class = function() {
    };
    Class.extend = function(i) {
        function u() {
            !n && this.__constructor && this.__constructor.apply(this, arguments);
        }
        var e = this.prototype, f, r;
        n = true;
        f = new this;
        n = false;
        for (r in i)
            f[r] = typeof i[r] === "function" && typeof e[r] === "function" && t.test(i[r]) ? function(n, t) {
                return function() {
                    var r = this.__superobject, i;
                    return this.__superobject = e[n], i = t.apply(this, arguments), this.__superobject = r, i;
                };
            }(r, i[r]) : i[r];
        return u.prototype = f, u.prototype.constructor = u, u.extend = arguments.callee, u;
    };
}());