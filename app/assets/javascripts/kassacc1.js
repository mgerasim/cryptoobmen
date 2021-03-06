! function(t) {
    function e(i) {
        if (n[i]) return n[i].exports;
        var o = n[i] = {
            i: i,
            l: !1,
            exports: {}
        };
        return t[i].call(o.exports, o, o.exports, e), o.l = !0, o.exports
    }
    var n = {};
    e.m = t, e.c = n, e.i = function(t) {
        return t
    }, e.d = function(t, n, i) {
        e.o(t, n) || Object.defineProperty(t, n, {
            configurable: !1,
            enumerable: !0,
            get: i
        })
    }, e.n = function(t) {
        var n = t && t.__esModule ? function() {
            return t.default
        } : function() {
            return t
        };
        return e.d(n, "a", n), n
    }, e.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, e.p = "", e(e.s = 49)
}([function(t, e, n) {
    var i, o;
    /*!
     * jQuery JavaScript Library v3.3.1
     * https://jquery.com/
     *
     * Includes Sizzle.js
     * https://sizzlejs.com/
     *
     * Copyright JS Foundation and other contributors
     * Released under the MIT license
     * https://jquery.org/license
     *
     * Date: 2018-01-20T17:24Z
     */
    ! function(e, n) {
        "use strict";
        "object" == typeof t && "object" == typeof t.exports ? t.exports = e.document ? n(e, !0) : function(t) {
            if (!t.document) throw new Error("jQuery requires a window with a document");
            return n(t)
        } : n(e)
    }("undefined" != typeof window ? window : this, function(n, r) {
        "use strict";

        function a(t, e, n) {
            e = e || ut;
            var i, o = e.createElement("script");
            if (o.text = t, n)
                for (i in xt) n[i] && (o[i] = n[i]);
            e.head.appendChild(o).parentNode.removeChild(o)
        }

        function s(t) {
            return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? It[pt.call(t)] || "object" : typeof t
        }

        function l(t) {
            var e = !!t && "length" in t && t.length,
                n = s(t);
            return !bt(t) && !wt(t) && ("array" === n || 0 === e || "number" == typeof e && e > 0 && e - 1 in t)
        }

        function g(t, e) {
            return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
        }

        function u(t, e, n) {
            return bt(e) ? kt.grep(t, function(t, i) {
                return !!e.call(t, i, t) !== n
            }) : e.nodeType ? kt.grep(t, function(t) {
                return t === e !== n
            }) : "string" != typeof e ? kt.grep(t, function(t) {
                return Ct.call(e, t) > -1 !== n
            }) : kt.filter(e, t, n)
        }

        function c(t, e) {
            for (;
                (t = t[e]) && 1 !== t.nodeType;);
            return t
        }

        function d(t) {
            var e = {};
            return kt.each(t.match(Wt) || [], function(t, n) {
                e[n] = !0
            }), e
        }

        function A(t) {
            return t
        }

        function f(t) {
            throw t
        }

        function C(t, e, n, i) {
            var o;
            try {
                t && bt(o = t.promise) ? o.call(t).done(e).fail(n) : t && bt(o = t.then) ? o.call(t, e, n) : e.apply(void 0, [t].slice(i))
            } catch (t) {
                n.apply(void 0, [t])
            }
        }

        function I() {
            ut.removeEventListener("DOMContentLoaded", I), n.removeEventListener("load", I), kt.ready()
        }

        function p(t, e) {
            return e.toUpperCase()
        }

        function h(t) {
            return t.replace(Ut, "ms-").replace(_t, p)
        }

        function m() {
            this.expando = kt.expando + m.uid++
        }

        function v(t) {
            return "true" === t || "false" !== t && ("null" === t ? null : t === +t + "" ? +t : Qt.test(t) ? JSON.parse(t) : t)
        }

        function y(t, e, n) {
            var i;
            if (void 0 === n && 1 === t.nodeType)
                if (i = "data-" + e.replace(Yt, "-$&").toLowerCase(), "string" == typeof(n = t.getAttribute(i))) {
                    try {
                        n = v(n)
                    } catch (t) {}
                    Zt.set(t, e, n)
                } else n = void 0;
            return n
        }

        function b(t, e, n, i) {
            var o, r, a = 20,
                s = i ? function() {
                    return i.cur()
                } : function() {
                    return kt.css(t, e, "")
                },
                l = s(),
                g = n && n[3] || (kt.cssNumber[e] ? "" : "px"),
                u = (kt.cssNumber[e] || "px" !== g && +l) && Vt.exec(kt.css(t, e));
            if (u && u[3] !== g) {
                for (l /= 2, g = g || u[3], u = +l || 1; a--;) kt.style(t, e, u + g), (1 - r) * (1 - (r = s() / l || .5)) <= 0 && (a = 0), u /= r;
                u *= 2, kt.style(t, e, u + g), n = n || []
            }
            return n && (u = +u || +l || 0, o = n[1] ? u + (n[1] + 1) * n[2] : +n[2], i && (i.unit = g, i.start = u, i.end = o)), o
        }

        function w(t) {
            var e, n = t.ownerDocument,
                i = t.nodeName,
                o = Kt[i];
            return o || (e = n.body.appendChild(n.createElement(i)), o = kt.css(e, "display"), e.parentNode.removeChild(e), "none" === o && (o = "block"), Kt[i] = o, o)
        }

        function x(t, e) {
            for (var n, i, o = [], r = 0, a = t.length; r < a; r++) i = t[r], i.style && (n = i.style.display, e ? ("none" === n && (o[r] = qt.get(i, "display") || null, o[r] || (i.style.display = "")), "" === i.style.display && Gt(i) && (o[r] = w(i))) : "none" !== n && (o[r] = "none", qt.set(i, "display", n)));
            for (r = 0; r < a; r++) null != o[r] && (t[r].style.display = o[r]);
            return t
        }

        function k(t, e) {
            var n;
            return n = void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e || "*") : void 0 !== t.querySelectorAll ? t.querySelectorAll(e || "*") : [], void 0 === e || e && g(t, e) ? kt.merge([t], n) : n
        }

        function S(t, e) {
            for (var n = 0, i = t.length; n < i; n++) qt.set(t[n], "globalEval", !e || qt.get(e[n], "globalEval"))
        }

        function E(t, e, n, i, o) {
            for (var r, a, l, g, u, c, d = e.createDocumentFragment(), A = [], f = 0, C = t.length; f < C; f++)
                if ((r = t[f]) || 0 === r)
                    if ("object" === s(r)) kt.merge(A, r.nodeType ? [r] : r);
                    else if (ie.test(r)) {
                for (a = a || d.appendChild(e.createElement("div")), l = (te.exec(r) || ["", ""])[1].toLowerCase(), g = ne[l] || ne._default, a.innerHTML = g[1] + kt.htmlPrefilter(r) + g[2], c = g[0]; c--;) a = a.lastChild;
                kt.merge(A, a.childNodes), a = d.firstChild, a.textContent = ""
            } else A.push(e.createTextNode(r));
            for (d.textContent = "", f = 0; r = A[f++];)
                if (i && kt.inArray(r, i) > -1) o && o.push(r);
                else if (u = kt.contains(r.ownerDocument, r), a = k(d.appendChild(r), "script"), u && S(a), n)
                for (c = 0; r = a[c++];) ee.test(r.type || "") && n.push(r);
            return d
        }

        function D() {
            return !0
        }

        function T() {
            return !1
        }

        function j() {
            try {
                return ut.activeElement
            } catch (t) {}
        }

        function M(t, e, n, i, o, r) {
            var a, s;
            if ("object" == typeof e) {
                "string" != typeof n && (i = i || n, n = void 0);
                for (s in e) M(t, s, n, i, e[s], r);
                return t
            }
            if (null == i && null == o ? (o = n, i = n = void 0) : null == o && ("string" == typeof n ? (o = i, i = void 0) : (o = i, i = n, n = void 0)), !1 === o) o = T;
            else if (!o) return t;
            return 1 === r && (a = o, o = function(t) {
                return kt().off(t), a.apply(this, arguments)
            }, o.guid = a.guid || (a.guid = kt.guid++)), t.each(function() {
                kt.event.add(this, e, o, i, n)
            })
        }

        function N(t, e) {
            return g(t, "table") && g(11 !== e.nodeType ? e : e.firstChild, "tr") ? kt(t).children("tbody")[0] || t : t
        }

        function O(t) {
            return t.type = (null !== t.getAttribute("type")) + "/" + t.type, t
        }

        function R(t) {
            return "true/" === (t.type || "").slice(0, 5) ? t.type = t.type.slice(5) : t.removeAttribute("type"), t
        }

        function F(t, e) {
            var n, i, o, r, a, s, l, g;
            if (1 === e.nodeType) {
                if (qt.hasData(t) && (r = qt.access(t), a = qt.set(e, r), g = r.events)) {
                    delete a.handle, a.events = {};
                    for (o in g)
                        for (n = 0, i = g[o].length; n < i; n++) kt.event.add(e, o, g[o][n])
                }
                Zt.hasData(t) && (s = Zt.access(t), l = kt.extend({}, s), Zt.set(e, l))
            }
        }

        function W(t, e) {
            var n = e.nodeName.toLowerCase();
            "input" === n && $t.test(t.type) ? e.checked = t.checked : "input" !== n && "textarea" !== n || (e.defaultValue = t.defaultValue)
        }

        function L(t, e, n, i) {
            e = At.apply([], e);
            var o, r, s, l, g, u, c = 0,
                d = t.length,
                A = d - 1,
                f = e[0],
                C = bt(f);
            if (C || d > 1 && "string" == typeof f && !yt.checkClone && ue.test(f)) return t.each(function(o) {
                var r = t.eq(o);
                C && (e[0] = f.call(this, o, r.html())), L(r, e, n, i)
            });
            if (d && (o = E(e, t[0].ownerDocument, !1, t, i), r = o.firstChild, 1 === o.childNodes.length && (o = r), r || i)) {
                for (s = kt.map(k(o, "script"), O), l = s.length; c < d; c++) g = o, c !== A && (g = kt.clone(g, !0, !0), l && kt.merge(s, k(g, "script"))), n.call(t[c], g, c);
                if (l)
                    for (u = s[s.length - 1].ownerDocument, kt.map(s, R), c = 0; c < l; c++) g = s[c], ee.test(g.type || "") && !qt.access(g, "globalEval") && kt.contains(u, g) && (g.src && "module" !== (g.type || "").toLowerCase() ? kt._evalUrl && kt._evalUrl(g.src) : a(g.textContent.replace(ce, ""), u, g))
            }
            return t
        }

        function P(t, e, n) {
            for (var i, o = e ? kt.filter(e, t) : t, r = 0; null != (i = o[r]); r++) n || 1 !== i.nodeType || kt.cleanData(k(i)), i.parentNode && (n && kt.contains(i.ownerDocument, i) && S(k(i, "script")), i.parentNode.removeChild(i));
            return t
        }

        function B(t, e, n) {
            var i, o, r, a, s = t.style;
            return n = n || Ae(t), n && (a = n.getPropertyValue(e) || n[e], "" !== a || kt.contains(t.ownerDocument, t) || (a = kt.style(t, e)), !yt.pixelBoxStyles() && de.test(a) && fe.test(e) && (i = s.width, o = s.minWidth, r = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = i, s.minWidth = o, s.maxWidth = r)), void 0 !== a ? a + "" : a
        }

        function U(t, e) {
            return {
                get: function() {
                    return t() ? void delete this.get : (this.get = e).apply(this, arguments)
                }
            }
        }

        function _(t) {
            if (t in ve) return t;
            for (var e = t[0].toUpperCase() + t.slice(1), n = me.length; n--;)
                if ((t = me[n] + e) in ve) return t
        }

        function H(t) {
            var e = kt.cssProps[t];
            return e || (e = kt.cssProps[t] = _(t) || t), e
        }

        function q(t, e, n) {
            var i = Vt.exec(e);
            return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : e
        }

        function Z(t, e, n, i, o, r) {
            var a = "width" === e ? 1 : 0,
                s = 0,
                l = 0;
            if (n === (i ? "border" : "content")) return 0;
            for (; a < 4; a += 2) "margin" === n && (l += kt.css(t, n + zt[a], !0, o)), i ? ("content" === n && (l -= kt.css(t, "padding" + zt[a], !0, o)), "margin" !== n && (l -= kt.css(t, "border" + zt[a] + "Width", !0, o))) : (l += kt.css(t, "padding" + zt[a], !0, o), "padding" !== n ? l += kt.css(t, "border" + zt[a] + "Width", !0, o) : s += kt.css(t, "border" + zt[a] + "Width", !0, o));
            return !i && r >= 0 && (l += Math.max(0, Math.ceil(t["offset" + e[0].toUpperCase() + e.slice(1)] - r - l - s - .5))), l
        }

        function Q(t, e, n) {
            var i = Ae(t),
                o = B(t, e, i),
                r = "border-box" === kt.css(t, "boxSizing", !1, i),
                a = r;
            if (de.test(o)) {
                if (!n) return o;
                o = "auto"
            }
            return a = a && (yt.boxSizingReliable() || o === t.style[e]), ("auto" === o || !parseFloat(o) && "inline" === kt.css(t, "display", !1, i)) && (o = t["offset" + e[0].toUpperCase() + e.slice(1)], a = !0), (o = parseFloat(o) || 0) + Z(t, e, n || (r ? "border" : "content"), a, i, o) + "px"
        }

        function Y(t, e, n, i, o) {
            return new Y.prototype.init(t, e, n, i, o)
        }

        function J() {
            be && (!1 === ut.hidden && n.requestAnimationFrame ? n.requestAnimationFrame(J) : n.setTimeout(J, kt.fx.interval), kt.fx.tick())
        }

        function V() {
            return n.setTimeout(function() {
                ye = void 0
            }), ye = Date.now()
        }

        function z(t, e) {
            var n, i = 0,
                o = {
                    height: t
                };
            for (e = e ? 1 : 0; i < 4; i += 2 - e) n = zt[i], o["margin" + n] = o["padding" + n] = t;
            return e && (o.opacity = o.width = t), o
        }

        function G(t, e, n) {
            for (var i, o = ($.tweeners[e] || []).concat($.tweeners["*"]), r = 0, a = o.length; r < a; r++)
                if (i = o[r].call(n, e, t)) return i
        }

        function X(t, e, n) {
            var i, o, r, a, s, l, g, u, c = "width" in e || "height" in e,
                d = this,
                A = {},
                f = t.style,
                C = t.nodeType && Gt(t),
                I = qt.get(t, "fxshow");
            n.queue || (a = kt._queueHooks(t, "fx"), null == a.unqueued && (a.unqueued = 0, s = a.empty.fire, a.empty.fire = function() {
                a.unqueued || s()
            }), a.unqueued++, d.always(function() {
                d.always(function() {
                    a.unqueued--, kt.queue(t, "fx").length || a.empty.fire()
                })
            }));
            for (i in e)
                if (o = e[i], we.test(o)) {
                    if (delete e[i], r = r || "toggle" === o, o === (C ? "hide" : "show")) {
                        if ("show" !== o || !I || void 0 === I[i]) continue;
                        C = !0
                    }
                    A[i] = I && I[i] || kt.style(t, i)
                }
            if ((l = !kt.isEmptyObject(e)) || !kt.isEmptyObject(A)) {
                c && 1 === t.nodeType && (n.overflow = [f.overflow, f.overflowX, f.overflowY], g = I && I.display, null == g && (g = qt.get(t, "display")), u = kt.css(t, "display"), "none" === u && (g ? u = g : (x([t], !0), g = t.style.display || g, u = kt.css(t, "display"), x([t]))), ("inline" === u || "inline-block" === u && null != g) && "none" === kt.css(t, "float") && (l || (d.done(function() {
                    f.display = g
                }), null == g && (u = f.display, g = "none" === u ? "" : u)), f.display = "inline-block")), n.overflow && (f.overflow = "hidden", d.always(function() {
                    f.overflow = n.overflow[0], f.overflowX = n.overflow[1], f.overflowY = n.overflow[2]
                })), l = !1;
                for (i in A) l || (I ? "hidden" in I && (C = I.hidden) : I = qt.access(t, "fxshow", {
                    display: g
                }), r && (I.hidden = !C), C && x([t], !0), d.done(function() {
                    C || x([t]), qt.remove(t, "fxshow");
                    for (i in A) kt.style(t, i, A[i])
                })), l = G(C ? I[i] : 0, i, d), i in I || (I[i] = l.start, C && (l.end = l.start, l.start = 0))
            }
        }

        function K(t, e) {
            var n, i, o, r, a;
            for (n in t)
                if (i = h(n), o = e[i], r = t[n], Array.isArray(r) && (o = r[1], r = t[n] = r[0]), n !== i && (t[i] = r, delete t[n]), (a = kt.cssHooks[i]) && "expand" in a) {
                    r = a.expand(r), delete t[i];
                    for (n in r) n in t || (t[n] = r[n], e[n] = o)
                } else e[i] = o
        }

        function $(t, e, n) {
            var i, o, r = 0,
                a = $.prefilters.length,
                s = kt.Deferred().always(function() {
                    delete l.elem
                }),
                l = function() {
                    if (o) return !1;
                    for (var e = ye || V(), n = Math.max(0, g.startTime + g.duration - e), i = n / g.duration || 0, r = 1 - i, a = 0, l = g.tweens.length; a < l; a++) g.tweens[a].run(r);
                    return s.notifyWith(t, [g, r, n]), r < 1 && l ? n : (l || s.notifyWith(t, [g, 1, 0]), s.resolveWith(t, [g]), !1)
                },
                g = s.promise({
                    elem: t,
                    props: kt.extend({}, e),
                    opts: kt.extend(!0, {
                        specialEasing: {},
                        easing: kt.easing._default
                    }, n),
                    originalProperties: e,
                    originalOptions: n,
                    startTime: ye || V(),
                    duration: n.duration,
                    tweens: [],
                    createTween: function(e, n) {
                        var i = kt.Tween(t, g.opts, e, n, g.opts.specialEasing[e] || g.opts.easing);
                        return g.tweens.push(i), i
                    },
                    stop: function(e) {
                        var n = 0,
                            i = e ? g.tweens.length : 0;
                        if (o) return this;
                        for (o = !0; n < i; n++) g.tweens[n].run(1);
                        return e ? (s.notifyWith(t, [g, 1, 0]), s.resolveWith(t, [g, e])) : s.rejectWith(t, [g, e]), this
                    }
                }),
                u = g.props;
            for (K(u, g.opts.specialEasing); r < a; r++)
                if (i = $.prefilters[r].call(g, t, u, g.opts)) return bt(i.stop) && (kt._queueHooks(g.elem, g.opts.queue).stop = i.stop.bind(i)), i;
            return kt.map(u, G, g), bt(g.opts.start) && g.opts.start.call(t, g), g.progress(g.opts.progress).done(g.opts.done, g.opts.complete).fail(g.opts.fail).always(g.opts.always), kt.fx.timer(kt.extend(l, {
                elem: t,
                anim: g,
                queue: g.opts.queue
            })), g
        }

        function tt(t) {
            return (t.match(Wt) || []).join(" ")
        }

        function et(t) {
            return t.getAttribute && t.getAttribute("class") || ""
        }

        function nt(t) {
            return Array.isArray(t) ? t : "string" == typeof t ? t.match(Wt) || [] : []
        }

        function it(t, e, n, i) {
            var o;
            if (Array.isArray(e)) kt.each(e, function(e, o) {
                n || Fe.test(t) ? i(t, o) : it(t + "[" + ("object" == typeof o && null != o ? e : "") + "]", o, n, i)
            });
            else if (n || "object" !== s(e)) i(t, e);
            else
                for (o in e) it(t + "[" + o + "]", e[o], n, i)
        }

        function ot(t) {
            return function(e, n) {
                "string" != typeof e && (n = e, e = "*");
                var i, o = 0,
                    r = e.toLowerCase().match(Wt) || [];
                if (bt(n))
                    for (; i = r[o++];) "+" === i[0] ? (i = i.slice(1) || "*", (t[i] = t[i] || []).unshift(n)) : (t[i] = t[i] || []).push(n)
            }
        }

        function rt(t, e, n, i) {
            function o(s) {
                var l;
                return r[s] = !0, kt.each(t[s] || [], function(t, s) {
                    var g = s(e, n, i);
                    return "string" != typeof g || a || r[g] ? a ? !(l = g) : void 0 : (e.dataTypes.unshift(g), o(g), !1)
                }), l
            }
            var r = {},
                a = t === Je;
            return o(e.dataTypes[0]) || !r["*"] && o("*")
        }

        function at(t, e) {
            var n, i, o = kt.ajaxSettings.flatOptions || {};
            for (n in e) void 0 !== e[n] && ((o[n] ? t : i || (i = {}))[n] = e[n]);
            return i && kt.extend(!0, t, i), t
        }

        function st(t, e, n) {
            for (var i, o, r, a, s = t.contents, l = t.dataTypes;
                "*" === l[0];) l.shift(), void 0 === i && (i = t.mimeType || e.getResponseHeader("Content-Type"));
            if (i)
                for (o in s)
                    if (s[o] && s[o].test(i)) {
                        l.unshift(o);
                        break
                    }
            if (l[0] in n) r = l[0];
            else {
                for (o in n) {
                    if (!l[0] || t.converters[o + " " + l[0]]) {
                        r = o;
                        break
                    }
                    a || (a = o)
                }
                r = r || a
            }
            if (r) return r !== l[0] && l.unshift(r), n[r]
        }

        function lt(t, e, n, i) {
            var o, r, a, s, l, g = {},
                u = t.dataTypes.slice();
            if (u[1])
                for (a in t.converters) g[a.toLowerCase()] = t.converters[a];
            for (r = u.shift(); r;)
                if (t.responseFields[r] && (n[t.responseFields[r]] = e), !l && i && t.dataFilter && (e = t.dataFilter(e, t.dataType)), l = r, r = u.shift())
                    if ("*" === r) r = l;
                    else if ("*" !== l && l !== r) {
                if (!(a = g[l + " " + r] || g["* " + r]))
                    for (o in g)
                        if (s = o.split(" "), s[1] === r && (a = g[l + " " + s[0]] || g["* " + s[0]])) {
                            !0 === a ? a = g[o] : !0 !== g[o] && (r = s[0], u.unshift(s[1]));
                            break
                        }
                if (!0 !== a)
                    if (a && t.throws) e = a(e);
                    else try {
                        e = a(e)
                    } catch (t) {
                        return {
                            state: "parsererror",
                            error: a ? t : "No conversion from " + l + " to " + r
                        }
                    }
            }
            return {
                state: "success",
                data: e
            }
        }
        var gt = [],
            ut = n.document,
            ct = Object.getPrototypeOf,
            dt = gt.slice,
            At = gt.concat,
            ft = gt.push,
            Ct = gt.indexOf,
            It = {},
            pt = It.toString,
            ht = It.hasOwnProperty,
            mt = ht.toString,
            vt = mt.call(Object),
            yt = {},
            bt = function(t) {
                return "function" == typeof t && "number" != typeof t.nodeType
            },
            wt = function(t) {
                return null != t && t === t.window
            },
            xt = {
                type: !0,
                src: !0,
                noModule: !0
            },
            kt = function(t, e) {
                return new kt.fn.init(t, e)
            },
            St = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
        kt.fn = kt.prototype = {
            jquery: "3.3.1",
            constructor: kt,
            length: 0,
            toArray: function() {
                return dt.call(this)
            },
            get: function(t) {
                return null == t ? dt.call(this) : t < 0 ? this[t + this.length] : this[t]
            },
            pushStack: function(t) {
                var e = kt.merge(this.constructor(), t);
                return e.prevObject = this, e
            },
            each: function(t) {
                return kt.each(this, t)
            },
            map: function(t) {
                return this.pushStack(kt.map(this, function(e, n) {
                    return t.call(e, n, e)
                }))
            },
            slice: function() {
                return this.pushStack(dt.apply(this, arguments))
            },
            first: function() {
                return this.eq(0)
            },
            last: function() {
                return this.eq(-1)
            },
            eq: function(t) {
                var e = this.length,
                    n = +t + (t < 0 ? e : 0);
                return this.pushStack(n >= 0 && n < e ? [this[n]] : [])
            },
            end: function() {
                return this.prevObject || this.constructor()
            },
            push: ft,
            sort: gt.sort,
            splice: gt.splice
        }, kt.extend = kt.fn.extend = function() {
            var t, e, n, i, o, r, a = arguments[0] || {},
                s = 1,
                l = arguments.length,
                g = !1;
            for ("boolean" == typeof a && (g = a, a = arguments[s] || {}, s++), "object" == typeof a || bt(a) || (a = {}), s === l && (a = this, s--); s < l; s++)
                if (null != (t = arguments[s]))
                    for (e in t) n = a[e], i = t[e], a !== i && (g && i && (kt.isPlainObject(i) || (o = Array.isArray(i))) ? (o ? (o = !1, r = n && Array.isArray(n) ? n : []) : r = n && kt.isPlainObject(n) ? n : {}, a[e] = kt.extend(g, r, i)) : void 0 !== i && (a[e] = i));
            return a
        }, kt.extend({
            expando: "jQuery" + ("3.3.1" + Math.random()).replace(/\D/g, ""),
            isReady: !0,
            error: function(t) {
                throw new Error(t)
            },
            noop: function() {},
            isPlainObject: function(t) {
                var e, n;
                return !(!t || "[object Object]" !== pt.call(t)) && (!(e = ct(t)) || "function" == typeof(n = ht.call(e, "constructor") && e.constructor) && mt.call(n) === vt)
            },
            isEmptyObject: function(t) {
                var e;
                for (e in t) return !1;
                return !0
            },
            globalEval: function(t) {
                a(t)
            },
            each: function(t, e) {
                var n, i = 0;
                if (l(t))
                    for (n = t.length; i < n && !1 !== e.call(t[i], i, t[i]); i++);
                else
                    for (i in t)
                        if (!1 === e.call(t[i], i, t[i])) break;
                return t
            },
            trim: function(t) {
                return null == t ? "" : (t + "").replace(St, "")
            },
            makeArray: function(t, e) {
                var n = e || [];
                return null != t && (l(Object(t)) ? kt.merge(n, "string" == typeof t ? [t] : t) : ft.call(n, t)), n
            },
            inArray: function(t, e, n) {
                return null == e ? -1 : Ct.call(e, t, n)
            },
            merge: function(t, e) {
                for (var n = +e.length, i = 0, o = t.length; i < n; i++) t[o++] = e[i];
                return t.length = o, t
            },
            grep: function(t, e, n) {
                for (var i = [], o = 0, r = t.length, a = !n; o < r; o++) !e(t[o], o) !== a && i.push(t[o]);
                return i
            },
            map: function(t, e, n) {
                var i, o, r = 0,
                    a = [];
                if (l(t))
                    for (i = t.length; r < i; r++) null != (o = e(t[r], r, n)) && a.push(o);
                else
                    for (r in t) null != (o = e(t[r], r, n)) && a.push(o);
                return At.apply([], a)
            },
            guid: 1,
            support: yt
        }), "function" == typeof Symbol && (kt.fn[Symbol.iterator] = gt[Symbol.iterator]), kt.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(t, e) {
            It["[object " + e + "]"] = e.toLowerCase()
        });
        var Et =
            /*!
             * Sizzle CSS Selector Engine v2.3.3
             * https://sizzlejs.com/
             *
             * Copyright jQuery Foundation and other contributors
             * Released under the MIT license
             * http://jquery.org/license
             *
             * Date: 2016-08-08
             */
            function(t) {
                function e(t, e, n, i) {
                    var o, r, a, s, l, u, d, A = e && e.ownerDocument,
                        f = e ? e.nodeType : 9;
                    if (n = n || [], "string" != typeof t || !t || 1 !== f && 9 !== f && 11 !== f) return n;
                    if (!i && ((e ? e.ownerDocument || e : B) !== M && j(e), e = e || M, O)) {
                        if (11 !== f && (l = Ct.exec(t)))
                            if (o = l[1]) {
                                if (9 === f) {
                                    if (!(a = e.getElementById(o))) return n;
                                    if (a.id === o) return n.push(a), n
                                } else if (A && (a = A.getElementById(o)) && L(e, a) && a.id === o) return n.push(a), n
                            } else {
                                if (l[2]) return G.apply(n, e.getElementsByTagName(t)), n;
                                if ((o = l[3]) && v.getElementsByClassName && e.getElementsByClassName) return G.apply(n, e.getElementsByClassName(o)), n
                            }
                        if (v.qsa && !Z[t + " "] && (!R || !R.test(t))) {
                            if (1 !== f) A = e, d = t;
                            else if ("object" !== e.nodeName.toLowerCase()) {
                                for ((s = e.getAttribute("id")) ? s = s.replace(mt, vt) : e.setAttribute("id", s = P), u = x(t), r = u.length; r--;) u[r] = "#" + s + " " + c(u[r]);
                                d = u.join(","), A = It.test(t) && g(e.parentNode) || e
                            }
                            if (d) try {
                                return G.apply(n, A.querySelectorAll(d)), n
                            } catch (t) {} finally {
                                s === P && e.removeAttribute("id")
                            }
                        }
                    }
                    return S(t.replace(rt, "$1"), e, n, i)
                }

                function n() {
                    function t(n, i) {
                        return e.push(n + " ") > y.cacheLength && delete t[e.shift()], t[n + " "] = i
                    }
                    var e = [];
                    return t
                }

                function i(t) {
                    return t[P] = !0, t
                }

                function o(t) {
                    var e = M.createElement("fieldset");
                    try {
                        return !!t(e)
                    } catch (t) {
                        return !1
                    } finally {
                        e.parentNode && e.parentNode.removeChild(e), e = null
                    }
                }

                function r(t, e) {
                    for (var n = t.split("|"), i = n.length; i--;) y.attrHandle[n[i]] = e
                }

                function a(t, e) {
                    var n = e && t,
                        i = n && 1 === t.nodeType && 1 === e.nodeType && t.sourceIndex - e.sourceIndex;
                    if (i) return i;
                    if (n)
                        for (; n = n.nextSibling;)
                            if (n === e) return -1;
                    return t ? 1 : -1
                }

                function s(t) {
                    return function(e) {
                        return "form" in e ? e.parentNode && !1 === e.disabled ? "label" in e ? "label" in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && bt(e) === t : e.disabled === t : "label" in e && e.disabled === t
                    }
                }

                function l(t) {
                    return i(function(e) {
                        return e = +e, i(function(n, i) {
                            for (var o, r = t([], n.length, e), a = r.length; a--;) n[o = r[a]] && (n[o] = !(i[o] = n[o]))
                        })
                    })
                }

                function g(t) {
                    return t && void 0 !== t.getElementsByTagName && t
                }

                function u() {}

                function c(t) {
                    for (var e = 0, n = t.length, i = ""; e < n; e++) i += t[e].value;
                    return i
                }

                function d(t, e, n) {
                    var i = e.dir,
                        o = e.next,
                        r = o || i,
                        a = n && "parentNode" === r,
                        s = _++;
                    return e.first ? function(e, n, o) {
                        for (; e = e[i];)
                            if (1 === e.nodeType || a) return t(e, n, o);
                        return !1
                    } : function(e, n, l) {
                        var g, u, c, d = [U, s];
                        if (l) {
                            for (; e = e[i];)
                                if ((1 === e.nodeType || a) && t(e, n, l)) return !0
                        } else
                            for (; e = e[i];)
                                if (1 === e.nodeType || a)
                                    if (c = e[P] || (e[P] = {}), u = c[e.uniqueID] || (c[e.uniqueID] = {}), o && o === e.nodeName.toLowerCase()) e = e[i] || e;
                                    else {
                                        if ((g = u[r]) && g[0] === U && g[1] === s) return d[2] = g[2];
                                        if (u[r] = d, d[2] = t(e, n, l)) return !0
                                    } return !1
                    }
                }

                function A(t) {
                    return t.length > 1 ? function(e, n, i) {
                        for (var o = t.length; o--;)
                            if (!t[o](e, n, i)) return !1;
                        return !0
                    } : t[0]
                }

                function f(t, n, i) {
                    for (var o = 0, r = n.length; o < r; o++) e(t, n[o], i);
                    return i
                }

                function C(t, e, n, i, o) {
                    for (var r, a = [], s = 0, l = t.length, g = null != e; s < l; s++)(r = t[s]) && (n && !n(r, i, o) || (a.push(r), g && e.push(s)));
                    return a
                }

                function I(t, e, n, o, r, a) {
                    return o && !o[P] && (o = I(o)), r && !r[P] && (r = I(r, a)), i(function(i, a, s, l) {
                        var g, u, c, d = [],
                            A = [],
                            I = a.length,
                            p = i || f(e || "*", s.nodeType ? [s] : s, []),
                            h = !t || !i && e ? p : C(p, d, t, s, l),
                            m = n ? r || (i ? t : I || o) ? [] : a : h;
                        if (n && n(h, m, s, l), o)
                            for (g = C(m, A), o(g, [], s, l), u = g.length; u--;)(c = g[u]) && (m[A[u]] = !(h[A[u]] = c));
                        if (i) {
                            if (r || t) {
                                if (r) {
                                    for (g = [], u = m.length; u--;)(c = m[u]) && g.push(h[u] = c);
                                    r(null, m = [], g, l)
                                }
                                for (u = m.length; u--;)(c = m[u]) && (g = r ? K(i, c) : d[u]) > -1 && (i[g] = !(a[g] = c))
                            }
                        } else m = C(m === a ? m.splice(I, m.length) : m), r ? r(null, a, m, l) : G.apply(a, m)
                    })
                }

                function p(t) {
                    for (var e, n, i, o = t.length, r = y.relative[t[0].type], a = r || y.relative[" "], s = r ? 1 : 0, l = d(function(t) {
                            return t === e
                        }, a, !0), g = d(function(t) {
                            return K(e, t) > -1
                        }, a, !0), u = [function(t, n, i) {
                            var o = !r && (i || n !== E) || ((e = n).nodeType ? l(t, n, i) : g(t, n, i));
                            return e = null, o
                        }]; s < o; s++)
                        if (n = y.relative[t[s].type]) u = [d(A(u), n)];
                        else {
                            if (n = y.filter[t[s].type].apply(null, t[s].matches), n[P]) {
                                for (i = ++s; i < o && !y.relative[t[i].type]; i++);
                                return I(s > 1 && A(u), s > 1 && c(t.slice(0, s - 1).concat({
                                    value: " " === t[s - 2].type ? "*" : ""
                                })).replace(rt, "$1"), n, s < i && p(t.slice(s, i)), i < o && p(t = t.slice(i)), i < o && c(t))
                            }
                            u.push(n)
                        }
                    return A(u)
                }

                function h(t, n) {
                    var o = n.length > 0,
                        r = t.length > 0,
                        a = function(i, a, s, l, g) {
                            var u, c, d, A = 0,
                                f = "0",
                                I = i && [],
                                p = [],
                                h = E,
                                m = i || r && y.find.TAG("*", g),
                                v = U += null == h ? 1 : Math.random() || .1,
                                b = m.length;
                            for (g && (E = a === M || a || g); f !== b && null != (u = m[f]); f++) {
                                if (r && u) {
                                    for (c = 0, a || u.ownerDocument === M || (j(u), s = !O); d = t[c++];)
                                        if (d(u, a || M, s)) {
                                            l.push(u);
                                            break
                                        }
                                    g && (U = v)
                                }
                                o && ((u = !d && u) && A--, i && I.push(u))
                            }
                            if (A += f, o && f !== A) {
                                for (c = 0; d = n[c++];) d(I, p, a, s);
                                if (i) {
                                    if (A > 0)
                                        for (; f--;) I[f] || p[f] || (p[f] = V.call(l));
                                    p = C(p)
                                }
                                G.apply(l, p), g && !i && p.length > 0 && A + n.length > 1 && e.uniqueSort(l)
                            }
                            return g && (U = v, E = h), I
                        };
                    return o ? i(a) : a
                }
                var m, v, y, b, w, x, k, S, E, D, T, j, M, N, O, R, F, W, L, P = "sizzle" + 1 * new Date,
                    B = t.document,
                    U = 0,
                    _ = 0,
                    H = n(),
                    q = n(),
                    Z = n(),
                    Q = function(t, e) {
                        return t === e && (T = !0), 0
                    },
                    Y = {}.hasOwnProperty,
                    J = [],
                    V = J.pop,
                    z = J.push,
                    G = J.push,
                    X = J.slice,
                    K = function(t, e) {
                        for (var n = 0, i = t.length; n < i; n++)
                            if (t[n] === e) return n;
                        return -1
                    },
                    $ = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                    tt = "[\\x20\\t\\r\\n\\f]",
                    et = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
                    nt = "\\[" + tt + "*(" + et + ")(?:" + tt + "*([*^$|!~]?=)" + tt + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + et + "))|)" + tt + "*\\]",
                    it = ":(" + et + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + nt + ")*)|.*)\\)|)",
                    ot = new RegExp(tt + "+", "g"),
                    rt = new RegExp("^" + tt + "+|((?:^|[^\\\\])(?:\\\\.)*)" + tt + "+$", "g"),
                    at = new RegExp("^" + tt + "*," + tt + "*"),
                    st = new RegExp("^" + tt + "*([>+~]|" + tt + ")" + tt + "*"),
                    lt = new RegExp("=" + tt + "*([^\\]'\"]*?)" + tt + "*\\]", "g"),
                    gt = new RegExp(it),
                    ut = new RegExp("^" + et + "$"),
                    ct = {
                        ID: new RegExp("^#(" + et + ")"),
                        CLASS: new RegExp("^\\.(" + et + ")"),
                        TAG: new RegExp("^(" + et + "|[*])"),
                        ATTR: new RegExp("^" + nt),
                        PSEUDO: new RegExp("^" + it),
                        CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + tt + "*(even|odd|(([+-]|)(\\d*)n|)" + tt + "*(?:([+-]|)" + tt + "*(\\d+)|))" + tt + "*\\)|)", "i"),
                        bool: new RegExp("^(?:" + $ + ")$", "i"),
                        needsContext: new RegExp("^" + tt + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + tt + "*((?:-\\d)?\\d*)" + tt + "*\\)|)(?=[^-]|$)", "i")
                    },
                    dt = /^(?:input|select|textarea|button)$/i,
                    At = /^h\d$/i,
                    ft = /^[^{]+\{\s*\[native \w/,
                    Ct = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                    It = /[+~]/,
                    pt = new RegExp("\\\\([\\da-f]{1,6}" + tt + "?|(" + tt + ")|.)", "ig"),
                    ht = function(t, e, n) {
                        var i = "0x" + e - 65536;
                        return i !== i || n ? e : i < 0 ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
                    },
                    mt = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
                    vt = function(t, e) {
                        return e ? "\0" === t ? "�" : t.slice(0, -1) + "\\" + t.charCodeAt(t.length - 1).toString(16) + " " : "\\" + t
                    },
                    yt = function() {
                        j()
                    },
                    bt = d(function(t) {
                        return !0 === t.disabled && ("form" in t || "label" in t)
                    }, {
                        dir: "parentNode",
                        next: "legend"
                    });
                try {
                    G.apply(J = X.call(B.childNodes), B.childNodes), J[B.childNodes.length].nodeType
                } catch (t) {
                    G = {
                        apply: J.length ? function(t, e) {
                            z.apply(t, X.call(e))
                        } : function(t, e) {
                            for (var n = t.length, i = 0; t[n++] = e[i++];);
                            t.length = n - 1
                        }
                    }
                }
                v = e.support = {}, w = e.isXML = function(t) {
                    var e = t && (t.ownerDocument || t).documentElement;
                    return !!e && "HTML" !== e.nodeName
                }, j = e.setDocument = function(t) {
                    var e, n, i = t ? t.ownerDocument || t : B;
                    return i !== M && 9 === i.nodeType && i.documentElement ? (M = i, N = M.documentElement, O = !w(M), B !== M && (n = M.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", yt, !1) : n.attachEvent && n.attachEvent("onunload", yt)), v.attributes = o(function(t) {
                        return t.className = "i", !t.getAttribute("className")
                    }), v.getElementsByTagName = o(function(t) {
                        return t.appendChild(M.createComment("")), !t.getElementsByTagName("*").length
                    }), v.getElementsByClassName = ft.test(M.getElementsByClassName), v.getById = o(function(t) {
                        return N.appendChild(t).id = P, !M.getElementsByName || !M.getElementsByName(P).length
                    }), v.getById ? (y.filter.ID = function(t) {
                        var e = t.replace(pt, ht);
                        return function(t) {
                            return t.getAttribute("id") === e
                        }
                    }, y.find.ID = function(t, e) {
                        if (void 0 !== e.getElementById && O) {
                            var n = e.getElementById(t);
                            return n ? [n] : []
                        }
                    }) : (y.filter.ID = function(t) {
                        var e = t.replace(pt, ht);
                        return function(t) {
                            var n = void 0 !== t.getAttributeNode && t.getAttributeNode("id");
                            return n && n.value === e
                        }
                    }, y.find.ID = function(t, e) {
                        if (void 0 !== e.getElementById && O) {
                            var n, i, o, r = e.getElementById(t);
                            if (r) {
                                if ((n = r.getAttributeNode("id")) && n.value === t) return [r];
                                for (o = e.getElementsByName(t), i = 0; r = o[i++];)
                                    if ((n = r.getAttributeNode("id")) && n.value === t) return [r]
                            }
                            return []
                        }
                    }), y.find.TAG = v.getElementsByTagName ? function(t, e) {
                        return void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t) : v.qsa ? e.querySelectorAll(t) : void 0
                    } : function(t, e) {
                        var n, i = [],
                            o = 0,
                            r = e.getElementsByTagName(t);
                        if ("*" === t) {
                            for (; n = r[o++];) 1 === n.nodeType && i.push(n);
                            return i
                        }
                        return r
                    }, y.find.CLASS = v.getElementsByClassName && function(t, e) {
                        if (void 0 !== e.getElementsByClassName && O) return e.getElementsByClassName(t)
                    }, F = [], R = [], (v.qsa = ft.test(M.querySelectorAll)) && (o(function(t) {
                        N.appendChild(t).innerHTML = "<a id='" + P + "'></a><select id='" + P + "-\r\\' msallowcapture=''><option selected=''></option></select>", t.querySelectorAll("[msallowcapture^='']").length && R.push("[*^$]=" + tt + "*(?:''|\"\")"), t.querySelectorAll("[selected]").length || R.push("\\[" + tt + "*(?:value|" + $ + ")"), t.querySelectorAll("[id~=" + P + "-]").length || R.push("~="), t.querySelectorAll(":checked").length || R.push(":checked"), t.querySelectorAll("a#" + P + "+*").length || R.push(".#.+[+~]")
                    }), o(function(t) {
                        t.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                        var e = M.createElement("input");
                        e.setAttribute("type", "hidden"), t.appendChild(e).setAttribute("name", "D"), t.querySelectorAll("[name=d]").length && R.push("name" + tt + "*[*^$|!~]?="), 2 !== t.querySelectorAll(":enabled").length && R.push(":enabled", ":disabled"), N.appendChild(t).disabled = !0, 2 !== t.querySelectorAll(":disabled").length && R.push(":enabled", ":disabled"), t.querySelectorAll("*,:x"), R.push(",.*:")
                    })), (v.matchesSelector = ft.test(W = N.matches || N.webkitMatchesSelector || N.mozMatchesSelector || N.oMatchesSelector || N.msMatchesSelector)) && o(function(t) {
                        v.disconnectedMatch = W.call(t, "*"), W.call(t, "[s!='']:x"), F.push("!=", it)
                    }), R = R.length && new RegExp(R.join("|")), F = F.length && new RegExp(F.join("|")), e = ft.test(N.compareDocumentPosition), L = e || ft.test(N.contains) ? function(t, e) {
                        var n = 9 === t.nodeType ? t.documentElement : t,
                            i = e && e.parentNode;
                        return t === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(i)))
                    } : function(t, e) {
                        if (e)
                            for (; e = e.parentNode;)
                                if (e === t) return !0;
                        return !1
                    }, Q = e ? function(t, e) {
                        if (t === e) return T = !0, 0;
                        var n = !t.compareDocumentPosition - !e.compareDocumentPosition;
                        return n || (n = (t.ownerDocument || t) === (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1, 1 & n || !v.sortDetached && e.compareDocumentPosition(t) === n ? t === M || t.ownerDocument === B && L(B, t) ? -1 : e === M || e.ownerDocument === B && L(B, e) ? 1 : D ? K(D, t) - K(D, e) : 0 : 4 & n ? -1 : 1)
                    } : function(t, e) {
                        if (t === e) return T = !0, 0;
                        var n, i = 0,
                            o = t.parentNode,
                            r = e.parentNode,
                            s = [t],
                            l = [e];
                        if (!o || !r) return t === M ? -1 : e === M ? 1 : o ? -1 : r ? 1 : D ? K(D, t) - K(D, e) : 0;
                        if (o === r) return a(t, e);
                        for (n = t; n = n.parentNode;) s.unshift(n);
                        for (n = e; n = n.parentNode;) l.unshift(n);
                        for (; s[i] === l[i];) i++;
                        return i ? a(s[i], l[i]) : s[i] === B ? -1 : l[i] === B ? 1 : 0
                    }, M) : M
                }, e.matches = function(t, n) {
                    return e(t, null, null, n)
                }, e.matchesSelector = function(t, n) {
                    if ((t.ownerDocument || t) !== M && j(t), n = n.replace(lt, "='$1']"), v.matchesSelector && O && !Z[n + " "] && (!F || !F.test(n)) && (!R || !R.test(n))) try {
                        var i = W.call(t, n);
                        if (i || v.disconnectedMatch || t.document && 11 !== t.document.nodeType) return i
                    } catch (t) {}
                    return e(n, M, null, [t]).length > 0
                }, e.contains = function(t, e) {
                    return (t.ownerDocument || t) !== M && j(t), L(t, e)
                }, e.attr = function(t, e) {
                    (t.ownerDocument || t) !== M && j(t);
                    var n = y.attrHandle[e.toLowerCase()],
                        i = n && Y.call(y.attrHandle, e.toLowerCase()) ? n(t, e, !O) : void 0;
                    return void 0 !== i ? i : v.attributes || !O ? t.getAttribute(e) : (i = t.getAttributeNode(e)) && i.specified ? i.value : null
                }, e.escape = function(t) {
                    return (t + "").replace(mt, vt)
                }, e.error = function(t) {
                    throw new Error("Syntax error, unrecognized expression: " + t)
                }, e.uniqueSort = function(t) {
                    var e, n = [],
                        i = 0,
                        o = 0;
                    if (T = !v.detectDuplicates, D = !v.sortStable && t.slice(0), t.sort(Q), T) {
                        for (; e = t[o++];) e === t[o] && (i = n.push(o));
                        for (; i--;) t.splice(n[i], 1)
                    }
                    return D = null, t
                }, b = e.getText = function(t) {
                    var e, n = "",
                        i = 0,
                        o = t.nodeType;
                    if (o) {
                        if (1 === o || 9 === o || 11 === o) {
                            if ("string" == typeof t.textContent) return t.textContent;
                            for (t = t.firstChild; t; t = t.nextSibling) n += b(t)
                        } else if (3 === o || 4 === o) return t.nodeValue
                    } else
                        for (; e = t[i++];) n += b(e);
                    return n
                }, y = e.selectors = {
                    cacheLength: 50,
                    createPseudo: i,
                    match: ct,
                    attrHandle: {},
                    find: {},
                    relative: {
                        ">": {
                            dir: "parentNode",
                            first: !0
                        },
                        " ": {
                            dir: "parentNode"
                        },
                        "+": {
                            dir: "previousSibling",
                            first: !0
                        },
                        "~": {
                            dir: "previousSibling"
                        }
                    },
                    preFilter: {
                        ATTR: function(t) {
                            return t[1] = t[1].replace(pt, ht), t[3] = (t[3] || t[4] || t[5] || "").replace(pt, ht), "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4)
                        },
                        CHILD: function(t) {
                            return t[1] = t[1].toLowerCase(), "nth" === t[1].slice(0, 3) ? (t[3] || e.error(t[0]), t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && e.error(t[0]), t
                        },
                        PSEUDO: function(t) {
                            var e, n = !t[6] && t[2];
                            return ct.CHILD.test(t[0]) ? null : (t[3] ? t[2] = t[4] || t[5] || "" : n && gt.test(n) && (e = x(n, !0)) && (e = n.indexOf(")", n.length - e) - n.length) && (t[0] = t[0].slice(0, e), t[2] = n.slice(0, e)), t.slice(0, 3))
                        }
                    },
                    filter: {
                        TAG: function(t) {
                            var e = t.replace(pt, ht).toLowerCase();
                            return "*" === t ? function() {
                                return !0
                            } : function(t) {
                                return t.nodeName && t.nodeName.toLowerCase() === e
                            }
                        },
                        CLASS: function(t) {
                            var e = H[t + " "];
                            return e || (e = new RegExp("(^|" + tt + ")" + t + "(" + tt + "|$)")) && H(t, function(t) {
                                return e.test("string" == typeof t.className && t.className || void 0 !== t.getAttribute && t.getAttribute("class") || "")
                            })
                        },
                        ATTR: function(t, n, i) {
                            return function(o) {
                                var r = e.attr(o, t);
                                return null == r ? "!=" === n : !n || (r += "", "=" === n ? r === i : "!=" === n ? r !== i : "^=" === n ? i && 0 === r.indexOf(i) : "*=" === n ? i && r.indexOf(i) > -1 : "$=" === n ? i && r.slice(-i.length) === i : "~=" === n ? (" " + r.replace(ot, " ") + " ").indexOf(i) > -1 : "|=" === n && (r === i || r.slice(0, i.length + 1) === i + "-"))
                            }
                        },
                        CHILD: function(t, e, n, i, o) {
                            var r = "nth" !== t.slice(0, 3),
                                a = "last" !== t.slice(-4),
                                s = "of-type" === e;
                            return 1 === i && 0 === o ? function(t) {
                                return !!t.parentNode
                            } : function(e, n, l) {
                                var g, u, c, d, A, f, C = r !== a ? "nextSibling" : "previousSibling",
                                    I = e.parentNode,
                                    p = s && e.nodeName.toLowerCase(),
                                    h = !l && !s,
                                    m = !1;
                                if (I) {
                                    if (r) {
                                        for (; C;) {
                                            for (d = e; d = d[C];)
                                                if (s ? d.nodeName.toLowerCase() === p : 1 === d.nodeType) return !1;
                                            f = C = "only" === t && !f && "nextSibling"
                                        }
                                        return !0
                                    }
                                    if (f = [a ? I.firstChild : I.lastChild], a && h) {
                                        for (d = I, c = d[P] || (d[P] = {}), u = c[d.uniqueID] || (c[d.uniqueID] = {}), g = u[t] || [], A = g[0] === U && g[1], m = A && g[2], d = A && I.childNodes[A]; d = ++A && d && d[C] || (m = A = 0) || f.pop();)
                                            if (1 === d.nodeType && ++m && d === e) {
                                                u[t] = [U, A, m];
                                                break
                                            }
                                    } else if (h && (d = e, c = d[P] || (d[P] = {}), u = c[d.uniqueID] || (c[d.uniqueID] = {}), g = u[t] || [], A = g[0] === U && g[1], m = A), !1 === m)
                                        for (;
                                            (d = ++A && d && d[C] || (m = A = 0) || f.pop()) && ((s ? d.nodeName.toLowerCase() !== p : 1 !== d.nodeType) || !++m || (h && (c = d[P] || (d[P] = {}), u = c[d.uniqueID] || (c[d.uniqueID] = {}), u[t] = [U, m]), d !== e)););
                                    return (m -= o) === i || m % i == 0 && m / i >= 0
                                }
                            }
                        },
                        PSEUDO: function(t, n) {
                            var o, r = y.pseudos[t] || y.setFilters[t.toLowerCase()] || e.error("unsupported pseudo: " + t);
                            return r[P] ? r(n) : r.length > 1 ? (o = [t, t, "", n], y.setFilters.hasOwnProperty(t.toLowerCase()) ? i(function(t, e) {
                                for (var i, o = r(t, n), a = o.length; a--;) i = K(t, o[a]), t[i] = !(e[i] = o[a])
                            }) : function(t) {
                                return r(t, 0, o)
                            }) : r
                        }
                    },
                    pseudos: {
                        not: i(function(t) {
                            var e = [],
                                n = [],
                                o = k(t.replace(rt, "$1"));
                            return o[P] ? i(function(t, e, n, i) {
                                for (var r, a = o(t, null, i, []), s = t.length; s--;)(r = a[s]) && (t[s] = !(e[s] = r))
                            }) : function(t, i, r) {
                                return e[0] = t, o(e, null, r, n), e[0] = null, !n.pop()
                            }
                        }),
                        has: i(function(t) {
                            return function(n) {
                                return e(t, n).length > 0
                            }
                        }),
                        contains: i(function(t) {
                            return t = t.replace(pt, ht),
                                function(e) {
                                    return (e.textContent || e.innerText || b(e)).indexOf(t) > -1
                                }
                        }),
                        lang: i(function(t) {
                            return ut.test(t || "") || e.error("unsupported lang: " + t), t = t.replace(pt, ht).toLowerCase(),
                                function(e) {
                                    var n;
                                    do {
                                        if (n = O ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (n = n.toLowerCase()) === t || 0 === n.indexOf(t + "-")
                                    } while ((e = e.parentNode) && 1 === e.nodeType);
                                    return !1
                                }
                        }),
                        target: function(e) {
                            var n = t.location && t.location.hash;
                            return n && n.slice(1) === e.id
                        },
                        root: function(t) {
                            return t === N
                        },
                        focus: function(t) {
                            return t === M.activeElement && (!M.hasFocus || M.hasFocus()) && !!(t.type || t.href || ~t.tabIndex)
                        },
                        enabled: s(!1),
                        disabled: s(!0),
                        checked: function(t) {
                            var e = t.nodeName.toLowerCase();
                            return "input" === e && !!t.checked || "option" === e && !!t.selected
                        },
                        selected: function(t) {
                            return t.parentNode && t.parentNode.selectedIndex, !0 === t.selected
                        },
                        empty: function(t) {
                            for (t = t.firstChild; t; t = t.nextSibling)
                                if (t.nodeType < 6) return !1;
                            return !0
                        },
                        parent: function(t) {
                            return !y.pseudos.empty(t)
                        },
                        header: function(t) {
                            return At.test(t.nodeName)
                        },
                        input: function(t) {
                            return dt.test(t.nodeName)
                        },
                        button: function(t) {
                            var e = t.nodeName.toLowerCase();
                            return "input" === e && "button" === t.type || "button" === e
                        },
                        text: function(t) {
                            var e;
                            return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase())
                        },
                        first: l(function() {
                            return [0]
                        }),
                        last: l(function(t, e) {
                            return [e - 1]
                        }),
                        eq: l(function(t, e, n) {
                            return [n < 0 ? n + e : n]
                        }),
                        even: l(function(t, e) {
                            for (var n = 0; n < e; n += 2) t.push(n);
                            return t
                        }),
                        odd: l(function(t, e) {
                            for (var n = 1; n < e; n += 2) t.push(n);
                            return t
                        }),
                        lt: l(function(t, e, n) {
                            for (var i = n < 0 ? n + e : n; --i >= 0;) t.push(i);
                            return t
                        }),
                        gt: l(function(t, e, n) {
                            for (var i = n < 0 ? n + e : n; ++i < e;) t.push(i);
                            return t
                        })
                    }
                }, y.pseudos.nth = y.pseudos.eq;
                for (m in {
                        radio: !0,
                        checkbox: !0,
                        file: !0,
                        password: !0,
                        image: !0
                    }) y.pseudos[m] = function(t) {
                    return function(e) {
                        return "input" === e.nodeName.toLowerCase() && e.type === t
                    }
                }(m);
                for (m in {
                        submit: !0,
                        reset: !0
                    }) y.pseudos[m] = function(t) {
                    return function(e) {
                        var n = e.nodeName.toLowerCase();
                        return ("input" === n || "button" === n) && e.type === t
                    }
                }(m);
                return u.prototype = y.filters = y.pseudos, y.setFilters = new u, x = e.tokenize = function(t, n) {
                    var i, o, r, a, s, l, g, u = q[t + " "];
                    if (u) return n ? 0 : u.slice(0);
                    for (s = t, l = [], g = y.preFilter; s;) {
                        i && !(o = at.exec(s)) || (o && (s = s.slice(o[0].length) || s), l.push(r = [])), i = !1, (o = st.exec(s)) && (i = o.shift(), r.push({
                            value: i,
                            type: o[0].replace(rt, " ")
                        }), s = s.slice(i.length));
                        for (a in y.filter) !(o = ct[a].exec(s)) || g[a] && !(o = g[a](o)) || (i = o.shift(), r.push({
                            value: i,
                            type: a,
                            matches: o
                        }), s = s.slice(i.length));
                        if (!i) break
                    }
                    return n ? s.length : s ? e.error(t) : q(t, l).slice(0)
                }, k = e.compile = function(t, e) {
                    var n, i = [],
                        o = [],
                        r = Z[t + " "];
                    if (!r) {
                        for (e || (e = x(t)), n = e.length; n--;) r = p(e[n]), r[P] ? i.push(r) : o.push(r);
                        r = Z(t, h(o, i)), r.selector = t
                    }
                    return r
                }, S = e.select = function(t, e, n, i) {
                    var o, r, a, s, l, u = "function" == typeof t && t,
                        d = !i && x(t = u.selector || t);
                    if (n = n || [], 1 === d.length) {
                        if (r = d[0] = d[0].slice(0), r.length > 2 && "ID" === (a = r[0]).type && 9 === e.nodeType && O && y.relative[r[1].type]) {
                            if (!(e = (y.find.ID(a.matches[0].replace(pt, ht), e) || [])[0])) return n;
                            u && (e = e.parentNode), t = t.slice(r.shift().value.length)
                        }
                        for (o = ct.needsContext.test(t) ? 0 : r.length; o-- && (a = r[o], !y.relative[s = a.type]);)
                            if ((l = y.find[s]) && (i = l(a.matches[0].replace(pt, ht), It.test(r[0].type) && g(e.parentNode) || e))) {
                                if (r.splice(o, 1), !(t = i.length && c(r))) return G.apply(n, i), n;
                                break
                            }
                    }
                    return (u || k(t, d))(i, e, !O, n, !e || It.test(t) && g(e.parentNode) || e), n
                }, v.sortStable = P.split("").sort(Q).join("") === P, v.detectDuplicates = !!T, j(), v.sortDetached = o(function(t) {
                    return 1 & t.compareDocumentPosition(M.createElement("fieldset"))
                }), o(function(t) {
                    return t.innerHTML = "<a href='#'></a>", "#" === t.firstChild.getAttribute("href")
                }) || r("type|href|height|width", function(t, e, n) {
                    if (!n) return t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2)
                }), v.attributes && o(function(t) {
                    return t.innerHTML = "<input/>", t.firstChild.setAttribute("value", ""), "" === t.firstChild.getAttribute("value")
                }) || r("value", function(t, e, n) {
                    if (!n && "input" === t.nodeName.toLowerCase()) return t.defaultValue
                }), o(function(t) {
                    return null == t.getAttribute("disabled")
                }) || r($, function(t, e, n) {
                    var i;
                    if (!n) return !0 === t[e] ? e.toLowerCase() : (i = t.getAttributeNode(e)) && i.specified ? i.value : null
                }), e
            }(n);
        kt.find = Et, kt.expr = Et.selectors, kt.expr[":"] = kt.expr.pseudos, kt.uniqueSort = kt.unique = Et.uniqueSort, kt.text = Et.getText, kt.isXMLDoc = Et.isXML, kt.contains = Et.contains, kt.escapeSelector = Et.escape;
        var Dt = function(t, e, n) {
                for (var i = [], o = void 0 !== n;
                    (t = t[e]) && 9 !== t.nodeType;)
                    if (1 === t.nodeType) {
                        if (o && kt(t).is(n)) break;
                        i.push(t)
                    }
                return i
            },
            Tt = function(t, e) {
                for (var n = []; t; t = t.nextSibling) 1 === t.nodeType && t !== e && n.push(t);
                return n
            },
            jt = kt.expr.match.needsContext,
            Mt = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
        kt.filter = function(t, e, n) {
            var i = e[0];
            return n && (t = ":not(" + t + ")"), 1 === e.length && 1 === i.nodeType ? kt.find.matchesSelector(i, t) ? [i] : [] : kt.find.matches(t, kt.grep(e, function(t) {
                return 1 === t.nodeType
            }))
        }, kt.fn.extend({
            find: function(t) {
                var e, n, i = this.length,
                    o = this;
                if ("string" != typeof t) return this.pushStack(kt(t).filter(function() {
                    for (e = 0; e < i; e++)
                        if (kt.contains(o[e], this)) return !0
                }));
                for (n = this.pushStack([]), e = 0; e < i; e++) kt.find(t, o[e], n);
                return i > 1 ? kt.uniqueSort(n) : n
            },
            filter: function(t) {
                return this.pushStack(u(this, t || [], !1))
            },
            not: function(t) {
                return this.pushStack(u(this, t || [], !0))
            },
            is: function(t) {
                return !!u(this, "string" == typeof t && jt.test(t) ? kt(t) : t || [], !1).length
            }
        });
        var Nt, Ot = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
        (kt.fn.init = function(t, e, n) {
            var i, o;
            if (!t) return this;
            if (n = n || Nt, "string" == typeof t) {
                if (!(i = "<" === t[0] && ">" === t[t.length - 1] && t.length >= 3 ? [null, t, null] : Ot.exec(t)) || !i[1] && e) return !e || e.jquery ? (e || n).find(t) : this.constructor(e).find(t);
                if (i[1]) {
                    if (e = e instanceof kt ? e[0] : e, kt.merge(this, kt.parseHTML(i[1], e && e.nodeType ? e.ownerDocument || e : ut, !0)), Mt.test(i[1]) && kt.isPlainObject(e))
                        for (i in e) bt(this[i]) ? this[i](e[i]) : this.attr(i, e[i]);
                    return this
                }
                return o = ut.getElementById(i[2]), o && (this[0] = o, this.length = 1), this
            }
            return t.nodeType ? (this[0] = t, this.length = 1, this) : bt(t) ? void 0 !== n.ready ? n.ready(t) : t(kt) : kt.makeArray(t, this)
        }).prototype = kt.fn, Nt = kt(ut);
        var Rt = /^(?:parents|prev(?:Until|All))/,
            Ft = {
                children: !0,
                contents: !0,
                next: !0,
                prev: !0
            };
        kt.fn.extend({
            has: function(t) {
                var e = kt(t, this),
                    n = e.length;
                return this.filter(function() {
                    for (var t = 0; t < n; t++)
                        if (kt.contains(this, e[t])) return !0
                })
            },
            closest: function(t, e) {
                var n, i = 0,
                    o = this.length,
                    r = [],
                    a = "string" != typeof t && kt(t);
                if (!jt.test(t))
                    for (; i < o; i++)
                        for (n = this[i]; n && n !== e; n = n.parentNode)
                            if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && kt.find.matchesSelector(n, t))) {
                                r.push(n);
                                break
                            }
                return this.pushStack(r.length > 1 ? kt.uniqueSort(r) : r)
            },
            index: function(t) {
                return t ? "string" == typeof t ? Ct.call(kt(t), this[0]) : Ct.call(this, t.jquery ? t[0] : t) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
            },
            add: function(t, e) {
                return this.pushStack(kt.uniqueSort(kt.merge(this.get(), kt(t, e))))
            },
            addBack: function(t) {
                return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
            }
        }), kt.each({
            parent: function(t) {
                var e = t.parentNode;
                return e && 11 !== e.nodeType ? e : null
            },
            parents: function(t) {
                return Dt(t, "parentNode")
            },
            parentsUntil: function(t, e, n) {
                return Dt(t, "parentNode", n)
            },
            next: function(t) {
                return c(t, "nextSibling")
            },
            prev: function(t) {
                return c(t, "previousSibling")
            },
            nextAll: function(t) {
                return Dt(t, "nextSibling")
            },
            prevAll: function(t) {
                return Dt(t, "previousSibling")
            },
            nextUntil: function(t, e, n) {
                return Dt(t, "nextSibling", n)
            },
            prevUntil: function(t, e, n) {
                return Dt(t, "previousSibling", n)
            },
            siblings: function(t) {
                return Tt((t.parentNode || {}).firstChild, t)
            },
            children: function(t) {
                return Tt(t.firstChild)
            },
            contents: function(t) {
                return g(t, "iframe") ? t.contentDocument : (g(t, "template") && (t = t.content || t), kt.merge([], t.childNodes))
            }
        }, function(t, e) {
            kt.fn[t] = function(n, i) {
                var o = kt.map(this, e, n);
                return "Until" !== t.slice(-5) && (i = n), i && "string" == typeof i && (o = kt.filter(i, o)), this.length > 1 && (Ft[t] || kt.uniqueSort(o), Rt.test(t) && o.reverse()), this.pushStack(o)
            }
        });
        var Wt = /[^\x20\t\r\n\f]+/g;
        kt.Callbacks = function(t) {
            t = "string" == typeof t ? d(t) : kt.extend({}, t);
            var e, n, i, o, r = [],
                a = [],
                l = -1,
                g = function() {
                    for (o = o || t.once, i = e = !0; a.length; l = -1)
                        for (n = a.shift(); ++l < r.length;) !1 === r[l].apply(n[0], n[1]) && t.stopOnFalse && (l = r.length, n = !1);
                    t.memory || (n = !1), e = !1, o && (r = n ? [] : "")
                },
                u = {
                    add: function() {
                        return r && (n && !e && (l = r.length - 1, a.push(n)), function e(n) {
                            kt.each(n, function(n, i) {
                                bt(i) ? t.unique && u.has(i) || r.push(i) : i && i.length && "string" !== s(i) && e(i)
                            })
                        }(arguments), n && !e && g()), this
                    },
                    remove: function() {
                        return kt.each(arguments, function(t, e) {
                            for (var n;
                                (n = kt.inArray(e, r, n)) > -1;) r.splice(n, 1), n <= l && l--
                        }), this
                    },
                    has: function(t) {
                        return t ? kt.inArray(t, r) > -1 : r.length > 0
                    },
                    empty: function() {
                        return r && (r = []), this
                    },
                    disable: function() {
                        return o = a = [], r = n = "", this
                    },
                    disabled: function() {
                        return !r
                    },
                    lock: function() {
                        return o = a = [], n || e || (r = n = ""), this
                    },
                    locked: function() {
                        return !!o
                    },
                    fireWith: function(t, n) {
                        return o || (n = n || [], n = [t, n.slice ? n.slice() : n], a.push(n), e || g()), this
                    },
                    fire: function() {
                        return u.fireWith(this, arguments), this
                    },
                    fired: function() {
                        return !!i
                    }
                };
            return u
        }, kt.extend({
            Deferred: function(t) {
                var e = [
                        ["notify", "progress", kt.Callbacks("memory"), kt.Callbacks("memory"), 2],
                        ["resolve", "done", kt.Callbacks("once memory"), kt.Callbacks("once memory"), 0, "resolved"],
                        ["reject", "fail", kt.Callbacks("once memory"), kt.Callbacks("once memory"), 1, "rejected"]
                    ],
                    i = "pending",
                    o = {
                        state: function() {
                            return i
                        },
                        always: function() {
                            return r.done(arguments).fail(arguments), this
                        },
                        catch: function(t) {
                            return o.then(null, t)
                        },
                        pipe: function() {
                            var t = arguments;
                            return kt.Deferred(function(n) {
                                kt.each(e, function(e, i) {
                                    var o = bt(t[i[4]]) && t[i[4]];
                                    r[i[1]](function() {
                                        var t = o && o.apply(this, arguments);
                                        t && bt(t.promise) ? t.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[i[0] + "With"](this, o ? [t] : arguments)
                                    })
                                }), t = null
                            }).promise()
                        },
                        then: function(t, i, o) {
                            function r(t, e, i, o) {
                                return function() {
                                    var s = this,
                                        l = arguments,
                                        g = function() {
                                            var n, g;
                                            if (!(t < a)) {
                                                if ((n = i.apply(s, l)) === e.promise()) throw new TypeError("Thenable self-resolution");
                                                g = n && ("object" == typeof n || "function" == typeof n) && n.then, bt(g) ? o ? g.call(n, r(a, e, A, o), r(a, e, f, o)) : (a++, g.call(n, r(a, e, A, o), r(a, e, f, o), r(a, e, A, e.notifyWith))) : (i !== A && (s = void 0, l = [n]), (o || e.resolveWith)(s, l))
                                            }
                                        },
                                        u = o ? g : function() {
                                            try {
                                                g()
                                            } catch (n) {
                                                kt.Deferred.exceptionHook && kt.Deferred.exceptionHook(n, u.stackTrace), t + 1 >= a && (i !== f && (s = void 0, l = [n]), e.rejectWith(s, l))
                                            }
                                        };
                                    t ? u() : (kt.Deferred.getStackHook && (u.stackTrace = kt.Deferred.getStackHook()), n.setTimeout(u))
                                }
                            }
                            var a = 0;
                            return kt.Deferred(function(n) {
                                e[0][3].add(r(0, n, bt(o) ? o : A, n.notifyWith)), e[1][3].add(r(0, n, bt(t) ? t : A)), e[2][3].add(r(0, n, bt(i) ? i : f))
                            }).promise()
                        },
                        promise: function(t) {
                            return null != t ? kt.extend(t, o) : o
                        }
                    },
                    r = {};
                return kt.each(e, function(t, n) {
                    var a = n[2],
                        s = n[5];
                    o[n[1]] = a.add, s && a.add(function() {
                        i = s
                    }, e[3 - t][2].disable, e[3 - t][3].disable, e[0][2].lock, e[0][3].lock), a.add(n[3].fire), r[n[0]] = function() {
                        return r[n[0] + "With"](this === r ? void 0 : this, arguments), this
                    }, r[n[0] + "With"] = a.fireWith
                }), o.promise(r), t && t.call(r, r), r
            },
            when: function(t) {
                var e = arguments.length,
                    n = e,
                    i = Array(n),
                    o = dt.call(arguments),
                    r = kt.Deferred(),
                    a = function(t) {
                        return function(n) {
                            i[t] = this, o[t] = arguments.length > 1 ? dt.call(arguments) : n, --e || r.resolveWith(i, o)
                        }
                    };
                if (e <= 1 && (C(t, r.done(a(n)).resolve, r.reject, !e), "pending" === r.state() || bt(o[n] && o[n].then))) return r.then();
                for (; n--;) C(o[n], a(n), r.reject);
                return r.promise()
            }
        });
        var Lt = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
        kt.Deferred.exceptionHook = function(t, e) {
            n.console && n.console.warn && t && Lt.test(t.name) && n.console.warn("jQuery.Deferred exception: " + t.message, t.stack, e)
        }, kt.readyException = function(t) {
            n.setTimeout(function() {
                throw t
            })
        };
        var Pt = kt.Deferred();
        kt.fn.ready = function(t) {
            return Pt.then(t).catch(function(t) {
                kt.readyException(t)
            }), this
        }, kt.extend({
            isReady: !1,
            readyWait: 1,
            ready: function(t) {
                (!0 === t ? --kt.readyWait : kt.isReady) || (kt.isReady = !0, !0 !== t && --kt.readyWait > 0 || Pt.resolveWith(ut, [kt]))
            }
        }), kt.ready.then = Pt.then, "complete" === ut.readyState || "loading" !== ut.readyState && !ut.documentElement.doScroll ? n.setTimeout(kt.ready) : (ut.addEventListener("DOMContentLoaded", I), n.addEventListener("load", I));
        var Bt = function(t, e, n, i, o, r, a) {
                var l = 0,
                    g = t.length,
                    u = null == n;
                if ("object" === s(n)) {
                    o = !0;
                    for (l in n) Bt(t, e, l, n[l], !0, r, a)
                } else if (void 0 !== i && (o = !0, bt(i) || (a = !0), u && (a ? (e.call(t, i), e = null) : (u = e, e = function(t, e, n) {
                        return u.call(kt(t), n)
                    })), e))
                    for (; l < g; l++) e(t[l], n, a ? i : i.call(t[l], l, e(t[l], n)));
                return o ? t : u ? e.call(t) : g ? e(t[0], n) : r
            },
            Ut = /^-ms-/,
            _t = /-([a-z])/g,
            Ht = function(t) {
                return 1 === t.nodeType || 9 === t.nodeType || !+t.nodeType
            };
        m.uid = 1, m.prototype = {
            cache: function(t) {
                var e = t[this.expando];
                return e || (e = {}, Ht(t) && (t.nodeType ? t[this.expando] = e : Object.defineProperty(t, this.expando, {
                    value: e,
                    configurable: !0
                }))), e
            },
            set: function(t, e, n) {
                var i, o = this.cache(t);
                if ("string" == typeof e) o[h(e)] = n;
                else
                    for (i in e) o[h(i)] = e[i];
                return o
            },
            get: function(t, e) {
                return void 0 === e ? this.cache(t) : t[this.expando] && t[this.expando][h(e)]
            },
            access: function(t, e, n) {
                return void 0 === e || e && "string" == typeof e && void 0 === n ? this.get(t, e) : (this.set(t, e, n), void 0 !== n ? n : e)
            },
            remove: function(t, e) {
                var n, i = t[this.expando];
                if (void 0 !== i) {
                    if (void 0 !== e) {
                        Array.isArray(e) ? e = e.map(h) : (e = h(e), e = e in i ? [e] : e.match(Wt) || []), n = e.length;
                        for (; n--;) delete i[e[n]]
                    }(void 0 === e || kt.isEmptyObject(i)) && (t.nodeType ? t[this.expando] = void 0 : delete t[this.expando])
                }
            },
            hasData: function(t) {
                var e = t[this.expando];
                return void 0 !== e && !kt.isEmptyObject(e)
            }
        };
        var qt = new m,
            Zt = new m,
            Qt = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
            Yt = /[A-Z]/g;
        kt.extend({
            hasData: function(t) {
                return Zt.hasData(t) || qt.hasData(t)
            },
            data: function(t, e, n) {
                return Zt.access(t, e, n)
            },
            removeData: function(t, e) {
                Zt.remove(t, e)
            },
            _data: function(t, e, n) {
                return qt.access(t, e, n)
            },
            _removeData: function(t, e) {
                qt.remove(t, e)
            }
        }), kt.fn.extend({
            data: function(t, e) {
                var n, i, o, r = this[0],
                    a = r && r.attributes;
                if (void 0 === t) {
                    if (this.length && (o = Zt.get(r), 1 === r.nodeType && !qt.get(r, "hasDataAttrs"))) {
                        for (n = a.length; n--;) a[n] && (i = a[n].name, 0 === i.indexOf("data-") && (i = h(i.slice(5)), y(r, i, o[i])));
                        qt.set(r, "hasDataAttrs", !0)
                    }
                    return o
                }
                return "object" == typeof t ? this.each(function() {
                    Zt.set(this, t)
                }) : Bt(this, function(e) {
                    var n;
                    if (r && void 0 === e) {
                        if (void 0 !== (n = Zt.get(r, t))) return n;
                        if (void 0 !== (n = y(r, t))) return n
                    } else this.each(function() {
                        Zt.set(this, t, e)
                    })
                }, null, e, arguments.length > 1, null, !0)
            },
            removeData: function(t) {
                return this.each(function() {
                    Zt.remove(this, t)
                })
            }
        }), kt.extend({
            queue: function(t, e, n) {
                var i;
                if (t) return e = (e || "fx") + "queue", i = qt.get(t, e), n && (!i || Array.isArray(n) ? i = qt.access(t, e, kt.makeArray(n)) : i.push(n)), i || []
            },
            dequeue: function(t, e) {
                e = e || "fx";
                var n = kt.queue(t, e),
                    i = n.length,
                    o = n.shift(),
                    r = kt._queueHooks(t, e),
                    a = function() {
                        kt.dequeue(t, e)
                    };
                "inprogress" === o && (o = n.shift(), i--), o && ("fx" === e && n.unshift("inprogress"), delete r.stop, o.call(t, a, r)), !i && r && r.empty.fire()
            },
            _queueHooks: function(t, e) {
                var n = e + "queueHooks";
                return qt.get(t, n) || qt.access(t, n, {
                    empty: kt.Callbacks("once memory").add(function() {
                        qt.remove(t, [e + "queue", n])
                    })
                })
            }
        }), kt.fn.extend({
            queue: function(t, e) {
                var n = 2;
                return "string" != typeof t && (e = t, t = "fx", n--), arguments.length < n ? kt.queue(this[0], t) : void 0 === e ? this : this.each(function() {
                    var n = kt.queue(this, t, e);
                    kt._queueHooks(this, t), "fx" === t && "inprogress" !== n[0] && kt.dequeue(this, t)
                })
            },
            dequeue: function(t) {
                return this.each(function() {
                    kt.dequeue(this, t)
                })
            },
            clearQueue: function(t) {
                return this.queue(t || "fx", [])
            },
            promise: function(t, e) {
                var n, i = 1,
                    o = kt.Deferred(),
                    r = this,
                    a = this.length,
                    s = function() {
                        --i || o.resolveWith(r, [r])
                    };
                for ("string" != typeof t && (e = t, t = void 0), t = t || "fx"; a--;)(n = qt.get(r[a], t + "queueHooks")) && n.empty && (i++, n.empty.add(s));
                return s(), o.promise(e)
            }
        });
        var Jt = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
            Vt = new RegExp("^(?:([+-])=|)(" + Jt + ")([a-z%]*)$", "i"),
            zt = ["Top", "Right", "Bottom", "Left"],
            Gt = function(t, e) {
                return t = e || t, "none" === t.style.display || "" === t.style.display && kt.contains(t.ownerDocument, t) && "none" === kt.css(t, "display")
            },
            Xt = function(t, e, n, i) {
                var o, r, a = {};
                for (r in e) a[r] = t.style[r], t.style[r] = e[r];
                o = n.apply(t, i || []);
                for (r in e) t.style[r] = a[r];
                return o
            },
            Kt = {};
        kt.fn.extend({
            show: function() {
                return x(this, !0)
            },
            hide: function() {
                return x(this)
            },
            toggle: function(t) {
                return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each(function() {
                    Gt(this) ? kt(this).show() : kt(this).hide()
                })
            }
        });
        var $t = /^(?:checkbox|radio)$/i,
            te = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
            ee = /^$|^module$|\/(?:java|ecma)script/i,
            ne = {
                option: [1, "<select multiple='multiple'>", "</select>"],
                thead: [1, "<table>", "</table>"],
                col: [2, "<table><colgroup>", "</colgroup></table>"],
                tr: [2, "<table><tbody>", "</tbody></table>"],
                td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                _default: [0, "", ""]
            };
        ne.optgroup = ne.option, ne.tbody = ne.tfoot = ne.colgroup = ne.caption = ne.thead, ne.th = ne.td;
        var ie = /<|&#?\w+;/;
        ! function() {
            var t = ut.createDocumentFragment(),
                e = t.appendChild(ut.createElement("div")),
                n = ut.createElement("input");
            n.setAttribute("type", "radio"), n.setAttribute("checked", "checked"), n.setAttribute("name", "t"), e.appendChild(n), yt.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, e.innerHTML = "<textarea>x</textarea>", yt.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue
        }();
        var oe = ut.documentElement,
            re = /^key/,
            ae = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
            se = /^([^.]*)(?:\.(.+)|)/;
        kt.event = {
            global: {},
            add: function(t, e, n, i, o) {
                var r, a, s, l, g, u, c, d, A, f, C, I = qt.get(t);
                if (I)
                    for (n.handler && (r = n, n = r.handler, o = r.selector), o && kt.find.matchesSelector(oe, o), n.guid || (n.guid = kt.guid++), (l = I.events) || (l = I.events = {}), (a = I.handle) || (a = I.handle = function(e) {
                            return void 0 !== kt && kt.event.triggered !== e.type ? kt.event.dispatch.apply(t, arguments) : void 0
                        }), e = (e || "").match(Wt) || [""], g = e.length; g--;) s = se.exec(e[g]) || [], A = C = s[1], f = (s[2] || "").split(".").sort(), A && (c = kt.event.special[A] || {}, A = (o ? c.delegateType : c.bindType) || A, c = kt.event.special[A] || {}, u = kt.extend({
                        type: A,
                        origType: C,
                        data: i,
                        handler: n,
                        guid: n.guid,
                        selector: o,
                        needsContext: o && kt.expr.match.needsContext.test(o),
                        namespace: f.join(".")
                    }, r), (d = l[A]) || (d = l[A] = [], d.delegateCount = 0, c.setup && !1 !== c.setup.call(t, i, f, a) || t.addEventListener && t.addEventListener(A, a)), c.add && (c.add.call(t, u), u.handler.guid || (u.handler.guid = n.guid)), o ? d.splice(d.delegateCount++, 0, u) : d.push(u), kt.event.global[A] = !0)
            },
            remove: function(t, e, n, i, o) {
                var r, a, s, l, g, u, c, d, A, f, C, I = qt.hasData(t) && qt.get(t);
                if (I && (l = I.events)) {
                    for (e = (e || "").match(Wt) || [""], g = e.length; g--;)
                        if (s = se.exec(e[g]) || [], A = C = s[1], f = (s[2] || "").split(".").sort(), A) {
                            for (c = kt.event.special[A] || {}, A = (i ? c.delegateType : c.bindType) || A, d = l[A] || [], s = s[2] && new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = r = d.length; r--;) u = d[r], !o && C !== u.origType || n && n.guid !== u.guid || s && !s.test(u.namespace) || i && i !== u.selector && ("**" !== i || !u.selector) || (d.splice(r, 1), u.selector && d.delegateCount--, c.remove && c.remove.call(t, u));
                            a && !d.length && (c.teardown && !1 !== c.teardown.call(t, f, I.handle) || kt.removeEvent(t, A, I.handle), delete l[A])
                        } else
                            for (A in l) kt.event.remove(t, A + e[g], n, i, !0);
                    kt.isEmptyObject(l) && qt.remove(t, "handle events")
                }
            },
            dispatch: function(t) {
                var e, n, i, o, r, a, s = kt.event.fix(t),
                    l = new Array(arguments.length),
                    g = (qt.get(this, "events") || {})[s.type] || [],
                    u = kt.event.special[s.type] || {};
                for (l[0] = s, e = 1; e < arguments.length; e++) l[e] = arguments[e];
                if (s.delegateTarget = this, !u.preDispatch || !1 !== u.preDispatch.call(this, s)) {
                    for (a = kt.event.handlers.call(this, s, g), e = 0;
                        (o = a[e++]) && !s.isPropagationStopped();)
                        for (s.currentTarget = o.elem, n = 0;
                            (r = o.handlers[n++]) && !s.isImmediatePropagationStopped();) s.rnamespace && !s.rnamespace.test(r.namespace) || (s.handleObj = r, s.data = r.data, void 0 !== (i = ((kt.event.special[r.origType] || {}).handle || r.handler).apply(o.elem, l)) && !1 === (s.result = i) && (s.preventDefault(), s.stopPropagation()));
                    return u.postDispatch && u.postDispatch.call(this, s), s.result
                }
            },
            handlers: function(t, e) {
                var n, i, o, r, a, s = [],
                    l = e.delegateCount,
                    g = t.target;
                if (l && g.nodeType && !("click" === t.type && t.button >= 1))
                    for (; g !== this; g = g.parentNode || this)
                        if (1 === g.nodeType && ("click" !== t.type || !0 !== g.disabled)) {
                            for (r = [], a = {}, n = 0; n < l; n++) i = e[n], o = i.selector + " ", void 0 === a[o] && (a[o] = i.needsContext ? kt(o, this).index(g) > -1 : kt.find(o, this, null, [g]).length), a[o] && r.push(i);
                            r.length && s.push({
                                elem: g,
                                handlers: r
                            })
                        }
                return g = this, l < e.length && s.push({
                    elem: g,
                    handlers: e.slice(l)
                }), s
            },
            addProp: function(t, e) {
                Object.defineProperty(kt.Event.prototype, t, {
                    enumerable: !0,
                    configurable: !0,
                    get: bt(e) ? function() {
                        if (this.originalEvent) return e(this.originalEvent)
                    } : function() {
                        if (this.originalEvent) return this.originalEvent[t]
                    },
                    set: function(e) {
                        Object.defineProperty(this, t, {
                            enumerable: !0,
                            configurable: !0,
                            writable: !0,
                            value: e
                        })
                    }
                })
            },
            fix: function(t) {
                return t[kt.expando] ? t : new kt.Event(t)
            },
            special: {
                load: {
                    noBubble: !0
                },
                focus: {
                    trigger: function() {
                        if (this !== j() && this.focus) return this.focus(), !1
                    },
                    delegateType: "focusin"
                },
                blur: {
                    trigger: function() {
                        if (this === j() && this.blur) return this.blur(), !1
                    },
                    delegateType: "focusout"
                },
                click: {
                    trigger: function() {
                        if ("checkbox" === this.type && this.click && g(this, "input")) return this.click(), !1
                    },
                    _default: function(t) {
                        return g(t.target, "a")
                    }
                },
                beforeunload: {
                    postDispatch: function(t) {
                        void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result)
                    }
                }
            }
        }, kt.removeEvent = function(t, e, n) {
            t.removeEventListener && t.removeEventListener(e, n)
        }, kt.Event = function(t, e) {
            if (!(this instanceof kt.Event)) return new kt.Event(t, e);
            t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || void 0 === t.defaultPrevented && !1 === t.returnValue ? D : T, this.target = t.target && 3 === t.target.nodeType ? t.target.parentNode : t.target, this.currentTarget = t.currentTarget, this.relatedTarget = t.relatedTarget) : this.type = t, e && kt.extend(this, e), this.timeStamp = t && t.timeStamp || Date.now(), this[kt.expando] = !0
        }, kt.Event.prototype = {
            constructor: kt.Event,
            isDefaultPrevented: T,
            isPropagationStopped: T,
            isImmediatePropagationStopped: T,
            isSimulated: !1,
            preventDefault: function() {
                var t = this.originalEvent;
                this.isDefaultPrevented = D, t && !this.isSimulated && t.preventDefault()
            },
            stopPropagation: function() {
                var t = this.originalEvent;
                this.isPropagationStopped = D, t && !this.isSimulated && t.stopPropagation()
            },
            stopImmediatePropagation: function() {
                var t = this.originalEvent;
                this.isImmediatePropagationStopped = D, t && !this.isSimulated && t.stopImmediatePropagation(), this.stopPropagation()
            }
        }, kt.each({
            altKey: !0,
            bubbles: !0,
            cancelable: !0,
            changedTouches: !0,
            ctrlKey: !0,
            detail: !0,
            eventPhase: !0,
            metaKey: !0,
            pageX: !0,
            pageY: !0,
            shiftKey: !0,
            view: !0,
            char: !0,
            charCode: !0,
            key: !0,
            keyCode: !0,
            button: !0,
            buttons: !0,
            clientX: !0,
            clientY: !0,
            offsetX: !0,
            offsetY: !0,
            pointerId: !0,
            pointerType: !0,
            screenX: !0,
            screenY: !0,
            targetTouches: !0,
            toElement: !0,
            touches: !0,
            which: function(t) {
                var e = t.button;
                return null == t.which && re.test(t.type) ? null != t.charCode ? t.charCode : t.keyCode : !t.which && void 0 !== e && ae.test(t.type) ? 1 & e ? 1 : 2 & e ? 3 : 4 & e ? 2 : 0 : t.which
            }
        }, kt.event.addProp), kt.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout",
            pointerenter: "pointerover",
            pointerleave: "pointerout"
        }, function(t, e) {
            kt.event.special[t] = {
                delegateType: e,
                bindType: e,
                handle: function(t) {
                    var n, i = this,
                        o = t.relatedTarget,
                        r = t.handleObj;
                    return o && (o === i || kt.contains(i, o)) || (t.type = r.origType, n = r.handler.apply(this, arguments), t.type = e), n
                }
            }
        }), kt.fn.extend({
            on: function(t, e, n, i) {
                return M(this, t, e, n, i)
            },
            one: function(t, e, n, i) {
                return M(this, t, e, n, i, 1)
            },
            off: function(t, e, n) {
                var i, o;
                if (t && t.preventDefault && t.handleObj) return i = t.handleObj, kt(t.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
                if ("object" == typeof t) {
                    for (o in t) this.off(o, e, t[o]);
                    return this
                }
                return !1 !== e && "function" != typeof e || (n = e, e = void 0), !1 === n && (n = T), this.each(function() {
                    kt.event.remove(this, t, n, e)
                })
            }
        });
        var le = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
            ge = /<script|<style|<link/i,
            ue = /checked\s*(?:[^=]|=\s*.checked.)/i,
            ce = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
        kt.extend({
            htmlPrefilter: function(t) {
                return t.replace(le, "<$1></$2>")
            },
            clone: function(t, e, n) {
                var i, o, r, a, s = t.cloneNode(!0),
                    l = kt.contains(t.ownerDocument, t);
                if (!(yt.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || kt.isXMLDoc(t)))
                    for (a = k(s), r = k(t), i = 0, o = r.length; i < o; i++) W(r[i], a[i]);
                if (e)
                    if (n)
                        for (r = r || k(t), a = a || k(s), i = 0, o = r.length; i < o; i++) F(r[i], a[i]);
                    else F(t, s);
                return a = k(s, "script"), a.length > 0 && S(a, !l && k(t, "script")), s
            },
            cleanData: function(t) {
                for (var e, n, i, o = kt.event.special, r = 0; void 0 !== (n = t[r]); r++)
                    if (Ht(n)) {
                        if (e = n[qt.expando]) {
                            if (e.events)
                                for (i in e.events) o[i] ? kt.event.remove(n, i) : kt.removeEvent(n, i, e.handle);
                            n[qt.expando] = void 0
                        }
                        n[Zt.expando] && (n[Zt.expando] = void 0)
                    }
            }
        }), kt.fn.extend({
            detach: function(t) {
                return P(this, t, !0)
            },
            remove: function(t) {
                return P(this, t)
            },
            text: function(t) {
                return Bt(this, function(t) {
                    return void 0 === t ? kt.text(this) : this.empty().each(function() {
                        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = t)
                    })
                }, null, t, arguments.length)
            },
            append: function() {
                return L(this, arguments, function(t) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        N(this, t).appendChild(t)
                    }
                })
            },
            prepend: function() {
                return L(this, arguments, function(t) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var e = N(this, t);
                        e.insertBefore(t, e.firstChild)
                    }
                })
            },
            before: function() {
                return L(this, arguments, function(t) {
                    this.parentNode && this.parentNode.insertBefore(t, this)
                })
            },
            after: function() {
                return L(this, arguments, function(t) {
                    this.parentNode && this.parentNode.insertBefore(t, this.nextSibling)
                })
            },
            empty: function() {
                for (var t, e = 0; null != (t = this[e]); e++) 1 === t.nodeType && (kt.cleanData(k(t, !1)), t.textContent = "");
                return this
            },
            clone: function(t, e) {
                return t = null != t && t, e = null == e ? t : e, this.map(function() {
                    return kt.clone(this, t, e)
                })
            },
            html: function(t) {
                return Bt(this, function(t) {
                    var e = this[0] || {},
                        n = 0,
                        i = this.length;
                    if (void 0 === t && 1 === e.nodeType) return e.innerHTML;
                    if ("string" == typeof t && !ge.test(t) && !ne[(te.exec(t) || ["", ""])[1].toLowerCase()]) {
                        t = kt.htmlPrefilter(t);
                        try {
                            for (; n < i; n++) e = this[n] || {}, 1 === e.nodeType && (kt.cleanData(k(e, !1)), e.innerHTML = t);
                            e = 0
                        } catch (t) {}
                    }
                    e && this.empty().append(t)
                }, null, t, arguments.length)
            },
            replaceWith: function() {
                var t = [];
                return L(this, arguments, function(e) {
                    var n = this.parentNode;
                    kt.inArray(this, t) < 0 && (kt.cleanData(k(this)), n && n.replaceChild(e, this))
                }, t)
            }
        }), kt.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, function(t, e) {
            kt.fn[t] = function(t) {
                for (var n, i = [], o = kt(t), r = o.length - 1, a = 0; a <= r; a++) n = a === r ? this : this.clone(!0), kt(o[a])[e](n), ft.apply(i, n.get());
                return this.pushStack(i)
            }
        });
        var de = new RegExp("^(" + Jt + ")(?!px)[a-z%]+$", "i"),
            Ae = function(t) {
                var e = t.ownerDocument.defaultView;
                return e && e.opener || (e = n), e.getComputedStyle(t)
            },
            fe = new RegExp(zt.join("|"), "i");
        ! function() {
            function t() {
                if (g) {
                    l.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", g.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", oe.appendChild(l).appendChild(g);
                    var t = n.getComputedStyle(g);
                    i = "1%" !== t.top, s = 12 === e(t.marginLeft), g.style.right = "60%", a = 36 === e(t.right), o = 36 === e(t.width), g.style.position = "absolute", r = 36 === g.offsetWidth || "absolute", oe.removeChild(l), g = null
                }
            }

            function e(t) {
                return Math.round(parseFloat(t))
            }
            var i, o, r, a, s, l = ut.createElement("div"),
                g = ut.createElement("div");
            g.style && (g.style.backgroundClip = "content-box", g.cloneNode(!0).style.backgroundClip = "", yt.clearCloneStyle = "content-box" === g.style.backgroundClip, kt.extend(yt, {
                boxSizingReliable: function() {
                    return t(), o
                },
                pixelBoxStyles: function() {
                    return t(), a
                },
                pixelPosition: function() {
                    return t(), i
                },
                reliableMarginLeft: function() {
                    return t(), s
                },
                scrollboxSize: function() {
                    return t(), r
                }
            }))
        }();
        var Ce = /^(none|table(?!-c[ea]).+)/,
            Ie = /^--/,
            pe = {
                position: "absolute",
                visibility: "hidden",
                display: "block"
            },
            he = {
                letterSpacing: "0",
                fontWeight: "400"
            },
            me = ["Webkit", "Moz", "ms"],
            ve = ut.createElement("div").style;
        kt.extend({
            cssHooks: {
                opacity: {
                    get: function(t, e) {
                        if (e) {
                            var n = B(t, "opacity");
                            return "" === n ? "1" : n
                        }
                    }
                }
            },
            cssNumber: {
                animationIterationCount: !0,
                columnCount: !0,
                fillOpacity: !0,
                flexGrow: !0,
                flexShrink: !0,
                fontWeight: !0,
                lineHeight: !0,
                opacity: !0,
                order: !0,
                orphans: !0,
                widows: !0,
                zIndex: !0,
                zoom: !0
            },
            cssProps: {},
            style: function(t, e, n, i) {
                if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                    var o, r, a, s = h(e),
                        l = Ie.test(e),
                        g = t.style;
                    if (l || (e = H(s)), a = kt.cssHooks[e] || kt.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (o = a.get(t, !1, i)) ? o : g[e];
                    r = typeof n, "string" === r && (o = Vt.exec(n)) && o[1] && (n = b(t, e, o), r = "number"), null != n && n === n && ("number" === r && (n += o && o[3] || (kt.cssNumber[s] ? "" : "px")), yt.clearCloneStyle || "" !== n || 0 !== e.indexOf("background") || (g[e] = "inherit"), a && "set" in a && void 0 === (n = a.set(t, n, i)) || (l ? g.setProperty(e, n) : g[e] = n))
                }
            },
            css: function(t, e, n, i) {
                var o, r, a, s = h(e);
                return Ie.test(e) || (e = H(s)), a = kt.cssHooks[e] || kt.cssHooks[s], a && "get" in a && (o = a.get(t, !0, n)), void 0 === o && (o = B(t, e, i)), "normal" === o && e in he && (o = he[e]), "" === n || n ? (r = parseFloat(o), !0 === n || isFinite(r) ? r || 0 : o) : o
            }
        }), kt.each(["height", "width"], function(t, e) {
            kt.cssHooks[e] = {
                get: function(t, n, i) {
                    if (n) return !Ce.test(kt.css(t, "display")) || t.getClientRects().length && t.getBoundingClientRect().width ? Q(t, e, i) : Xt(t, pe, function() {
                        return Q(t, e, i)
                    })
                },
                set: function(t, n, i) {
                    var o, r = Ae(t),
                        a = "border-box" === kt.css(t, "boxSizing", !1, r),
                        s = i && Z(t, e, i, a, r);
                    return a && yt.scrollboxSize() === r.position && (s -= Math.ceil(t["offset" + e[0].toUpperCase() + e.slice(1)] - parseFloat(r[e]) - Z(t, e, "border", !1, r) - .5)), s && (o = Vt.exec(n)) && "px" !== (o[3] || "px") && (t.style[e] = n, n = kt.css(t, e)), q(t, n, s)
                }
            }
        }), kt.cssHooks.marginLeft = U(yt.reliableMarginLeft, function(t, e) {
            if (e) return (parseFloat(B(t, "marginLeft")) || t.getBoundingClientRect().left - Xt(t, {
                marginLeft: 0
            }, function() {
                return t.getBoundingClientRect().left
            })) + "px"
        }), kt.each({
            margin: "",
            padding: "",
            border: "Width"
        }, function(t, e) {
            kt.cssHooks[t + e] = {
                expand: function(n) {
                    for (var i = 0, o = {}, r = "string" == typeof n ? n.split(" ") : [n]; i < 4; i++) o[t + zt[i] + e] = r[i] || r[i - 2] || r[0];
                    return o
                }
            }, "margin" !== t && (kt.cssHooks[t + e].set = q)
        }), kt.fn.extend({
            css: function(t, e) {
                return Bt(this, function(t, e, n) {
                    var i, o, r = {},
                        a = 0;
                    if (Array.isArray(e)) {
                        for (i = Ae(t), o = e.length; a < o; a++) r[e[a]] = kt.css(t, e[a], !1, i);
                        return r
                    }
                    return void 0 !== n ? kt.style(t, e, n) : kt.css(t, e)
                }, t, e, arguments.length > 1)
            }
        }), kt.Tween = Y, Y.prototype = {
            constructor: Y,
            init: function(t, e, n, i, o, r) {
                this.elem = t, this.prop = n, this.easing = o || kt.easing._default, this.options = e, this.start = this.now = this.cur(), this.end = i, this.unit = r || (kt.cssNumber[n] ? "" : "px")
            },
            cur: function() {
                var t = Y.propHooks[this.prop];
                return t && t.get ? t.get(this) : Y.propHooks._default.get(this)
            },
            run: function(t) {
                var e, n = Y.propHooks[this.prop];
                return this.options.duration ? this.pos = e = kt.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : this.pos = e = t, this.now = (this.end - this.start) * e + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : Y.propHooks._default.set(this), this
            }
        }, Y.prototype.init.prototype = Y.prototype, Y.propHooks = {
            _default: {
                get: function(t) {
                    var e;
                    return 1 !== t.elem.nodeType || null != t.elem[t.prop] && null == t.elem.style[t.prop] ? t.elem[t.prop] : (e = kt.css(t.elem, t.prop, ""), e && "auto" !== e ? e : 0)
                },
                set: function(t) {
                    kt.fx.step[t.prop] ? kt.fx.step[t.prop](t) : 1 !== t.elem.nodeType || null == t.elem.style[kt.cssProps[t.prop]] && !kt.cssHooks[t.prop] ? t.elem[t.prop] = t.now : kt.style(t.elem, t.prop, t.now + t.unit)
                }
            }
        }, Y.propHooks.scrollTop = Y.propHooks.scrollLeft = {
            set: function(t) {
                t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
            }
        }, kt.easing = {
            linear: function(t) {
                return t
            },
            swing: function(t) {
                return .5 - Math.cos(t * Math.PI) / 2
            },
            _default: "swing"
        }, kt.fx = Y.prototype.init, kt.fx.step = {};
        var ye, be, we = /^(?:toggle|show|hide)$/,
            xe = /queueHooks$/;
        kt.Animation = kt.extend($, {
                tweeners: {
                    "*": [function(t, e) {
                        var n = this.createTween(t, e);
                        return b(n.elem, t, Vt.exec(e), n), n
                    }]
                },
                tweener: function(t, e) {
                    bt(t) ? (e = t, t = ["*"]) : t = t.match(Wt);
                    for (var n, i = 0, o = t.length; i < o; i++) n = t[i], $.tweeners[n] = $.tweeners[n] || [], $.tweeners[n].unshift(e)
                },
                prefilters: [X],
                prefilter: function(t, e) {
                    e ? $.prefilters.unshift(t) : $.prefilters.push(t)
                }
            }), kt.speed = function(t, e, n) {
                var i = t && "object" == typeof t ? kt.extend({}, t) : {
                    complete: n || !n && e || bt(t) && t,
                    duration: t,
                    easing: n && e || e && !bt(e) && e
                };
                return kt.fx.off ? i.duration = 0 : "number" != typeof i.duration && (i.duration in kt.fx.speeds ? i.duration = kt.fx.speeds[i.duration] : i.duration = kt.fx.speeds._default), null != i.queue && !0 !== i.queue || (i.queue = "fx"), i.old = i.complete, i.complete = function() {
                    bt(i.old) && i.old.call(this), i.queue && kt.dequeue(this, i.queue)
                }, i
            }, kt.fn.extend({
                fadeTo: function(t, e, n, i) {
                    return this.filter(Gt).css("opacity", 0).show().end().animate({
                        opacity: e
                    }, t, n, i)
                },
                animate: function(t, e, n, i) {
                    var o = kt.isEmptyObject(t),
                        r = kt.speed(e, n, i),
                        a = function() {
                            var e = $(this, kt.extend({}, t), r);
                            (o || qt.get(this, "finish")) && e.stop(!0)
                        };
                    return a.finish = a, o || !1 === r.queue ? this.each(a) : this.queue(r.queue, a)
                },
                stop: function(t, e, n) {
                    var i = function(t) {
                        var e = t.stop;
                        delete t.stop, e(n)
                    };
                    return "string" != typeof t && (n = e, e = t, t = void 0), e && !1 !== t && this.queue(t || "fx", []), this.each(function() {
                        var e = !0,
                            o = null != t && t + "queueHooks",
                            r = kt.timers,
                            a = qt.get(this);
                        if (o) a[o] && a[o].stop && i(a[o]);
                        else
                            for (o in a) a[o] && a[o].stop && xe.test(o) && i(a[o]);
                        for (o = r.length; o--;) r[o].elem !== this || null != t && r[o].queue !== t || (r[o].anim.stop(n), e = !1, r.splice(o, 1));
                        !e && n || kt.dequeue(this, t)
                    })
                },
                finish: function(t) {
                    return !1 !== t && (t = t || "fx"), this.each(function() {
                        var e, n = qt.get(this),
                            i = n[t + "queue"],
                            o = n[t + "queueHooks"],
                            r = kt.timers,
                            a = i ? i.length : 0;
                        for (n.finish = !0, kt.queue(this, t, []), o && o.stop && o.stop.call(this, !0), e = r.length; e--;) r[e].elem === this && r[e].queue === t && (r[e].anim.stop(!0), r.splice(e, 1));
                        for (e = 0; e < a; e++) i[e] && i[e].finish && i[e].finish.call(this);
                        delete n.finish
                    })
                }
            }), kt.each(["toggle", "show", "hide"], function(t, e) {
                var n = kt.fn[e];
                kt.fn[e] = function(t, i, o) {
                    return null == t || "boolean" == typeof t ? n.apply(this, arguments) : this.animate(z(e, !0), t, i, o)
                }
            }), kt.each({
                slideDown: z("show"),
                slideUp: z("hide"),
                slideToggle: z("toggle"),
                fadeIn: {
                    opacity: "show"
                },
                fadeOut: {
                    opacity: "hide"
                },
                fadeToggle: {
                    opacity: "toggle"
                }
            }, function(t, e) {
                kt.fn[t] = function(t, n, i) {
                    return this.animate(e, t, n, i)
                }
            }), kt.timers = [], kt.fx.tick = function() {
                var t, e = 0,
                    n = kt.timers;
                for (ye = Date.now(); e < n.length; e++)(t = n[e])() || n[e] !== t || n.splice(e--, 1);
                n.length || kt.fx.stop(), ye = void 0
            }, kt.fx.timer = function(t) {
                kt.timers.push(t), kt.fx.start()
            }, kt.fx.interval = 13, kt.fx.start = function() {
                be || (be = !0, J())
            }, kt.fx.stop = function() {
                be = null
            }, kt.fx.speeds = {
                slow: 600,
                fast: 200,
                _default: 400
            }, kt.fn.delay = function(t, e) {
                return t = kt.fx ? kt.fx.speeds[t] || t : t, e = e || "fx", this.queue(e, function(e, i) {
                    var o = n.setTimeout(e, t);
                    i.stop = function() {
                        n.clearTimeout(o)
                    }
                })
            },
            function() {
                var t = ut.createElement("input"),
                    e = ut.createElement("select"),
                    n = e.appendChild(ut.createElement("option"));
                t.type = "checkbox", yt.checkOn = "" !== t.value, yt.optSelected = n.selected, t = ut.createElement("input"), t.value = "t", t.type = "radio", yt.radioValue = "t" === t.value
            }();
        var ke, Se = kt.expr.attrHandle;
        kt.fn.extend({
            attr: function(t, e) {
                return Bt(this, kt.attr, t, e, arguments.length > 1)
            },
            removeAttr: function(t) {
                return this.each(function() {
                    kt.removeAttr(this, t)
                })
            }
        }), kt.extend({
            attr: function(t, e, n) {
                var i, o, r = t.nodeType;
                if (3 !== r && 8 !== r && 2 !== r) return void 0 === t.getAttribute ? kt.prop(t, e, n) : (1 === r && kt.isXMLDoc(t) || (o = kt.attrHooks[e.toLowerCase()] || (kt.expr.match.bool.test(e) ? ke : void 0)), void 0 !== n ? null === n ? void kt.removeAttr(t, e) : o && "set" in o && void 0 !== (i = o.set(t, n, e)) ? i : (t.setAttribute(e, n + ""), n) : o && "get" in o && null !== (i = o.get(t, e)) ? i : (i = kt.find.attr(t, e), null == i ? void 0 : i))
            },
            attrHooks: {
                type: {
                    set: function(t, e) {
                        if (!yt.radioValue && "radio" === e && g(t, "input")) {
                            var n = t.value;
                            return t.setAttribute("type", e), n && (t.value = n), e
                        }
                    }
                }
            },
            removeAttr: function(t, e) {
                var n, i = 0,
                    o = e && e.match(Wt);
                if (o && 1 === t.nodeType)
                    for (; n = o[i++];) t.removeAttribute(n)
            }
        }), ke = {
            set: function(t, e, n) {
                return !1 === e ? kt.removeAttr(t, n) : t.setAttribute(n, n), n
            }
        }, kt.each(kt.expr.match.bool.source.match(/\w+/g), function(t, e) {
            var n = Se[e] || kt.find.attr;
            Se[e] = function(t, e, i) {
                var o, r, a = e.toLowerCase();
                return i || (r = Se[a], Se[a] = o, o = null != n(t, e, i) ? a : null, Se[a] = r), o
            }
        });
        var Ee = /^(?:input|select|textarea|button)$/i,
            De = /^(?:a|area)$/i;
        kt.fn.extend({
            prop: function(t, e) {
                return Bt(this, kt.prop, t, e, arguments.length > 1)
            },
            removeProp: function(t) {
                return this.each(function() {
                    delete this[kt.propFix[t] || t]
                })
            }
        }), kt.extend({
            prop: function(t, e, n) {
                var i, o, r = t.nodeType;
                if (3 !== r && 8 !== r && 2 !== r) return 1 === r && kt.isXMLDoc(t) || (e = kt.propFix[e] || e, o = kt.propHooks[e]), void 0 !== n ? o && "set" in o && void 0 !== (i = o.set(t, n, e)) ? i : t[e] = n : o && "get" in o && null !== (i = o.get(t, e)) ? i : t[e]
            },
            propHooks: {
                tabIndex: {
                    get: function(t) {
                        var e = kt.find.attr(t, "tabindex");
                        return e ? parseInt(e, 10) : Ee.test(t.nodeName) || De.test(t.nodeName) && t.href ? 0 : -1
                    }
                }
            },
            propFix: {
                for: "htmlFor",
                class: "className"
            }
        }), yt.optSelected || (kt.propHooks.selected = {
            get: function(t) {
                var e = t.parentNode;
                return e && e.parentNode && e.parentNode.selectedIndex, null
            },
            set: function(t) {
                var e = t.parentNode;
                e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex)
            }
        }), kt.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
            kt.propFix[this.toLowerCase()] = this
        }), kt.fn.extend({
            addClass: function(t) {
                var e, n, i, o, r, a, s, l = 0;
                if (bt(t)) return this.each(function(e) {
                    kt(this).addClass(t.call(this, e, et(this)))
                });
                if (e = nt(t), e.length)
                    for (; n = this[l++];)
                        if (o = et(n), i = 1 === n.nodeType && " " + tt(o) + " ") {
                            for (a = 0; r = e[a++];) i.indexOf(" " + r + " ") < 0 && (i += r + " ");
                            s = tt(i), o !== s && n.setAttribute("class", s)
                        }
                return this
            },
            removeClass: function(t) {
                var e, n, i, o, r, a, s, l = 0;
                if (bt(t)) return this.each(function(e) {
                    kt(this).removeClass(t.call(this, e, et(this)))
                });
                if (!arguments.length) return this.attr("class", "");
                if (e = nt(t), e.length)
                    for (; n = this[l++];)
                        if (o = et(n), i = 1 === n.nodeType && " " + tt(o) + " ") {
                            for (a = 0; r = e[a++];)
                                for (; i.indexOf(" " + r + " ") > -1;) i = i.replace(" " + r + " ", " ");
                            s = tt(i), o !== s && n.setAttribute("class", s)
                        }
                return this
            },
            toggleClass: function(t, e) {
                var n = typeof t,
                    i = "string" === n || Array.isArray(t);
                return "boolean" == typeof e && i ? e ? this.addClass(t) : this.removeClass(t) : bt(t) ? this.each(function(n) {
                    kt(this).toggleClass(t.call(this, n, et(this), e), e)
                }) : this.each(function() {
                    var e, o, r, a;
                    if (i)
                        for (o = 0, r = kt(this), a = nt(t); e = a[o++];) r.hasClass(e) ? r.removeClass(e) : r.addClass(e);
                    else void 0 !== t && "boolean" !== n || (e = et(this), e && qt.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", e || !1 === t ? "" : qt.get(this, "__className__") || ""))
                })
            },
            hasClass: function(t) {
                var e, n, i = 0;
                for (e = " " + t + " "; n = this[i++];)
                    if (1 === n.nodeType && (" " + tt(et(n)) + " ").indexOf(e) > -1) return !0;
                return !1
            }
        });
        var Te = /\r/g;
        kt.fn.extend({
            val: function(t) {
                var e, n, i, o = this[0]; {
                    if (arguments.length) return i = bt(t), this.each(function(n) {
                        var o;
                        1 === this.nodeType && (o = i ? t.call(this, n, kt(this).val()) : t, null == o ? o = "" : "number" == typeof o ? o += "" : Array.isArray(o) && (o = kt.map(o, function(t) {
                            return null == t ? "" : t + ""
                        })), (e = kt.valHooks[this.type] || kt.valHooks[this.nodeName.toLowerCase()]) && "set" in e && void 0 !== e.set(this, o, "value") || (this.value = o))
                    });
                    if (o) return (e = kt.valHooks[o.type] || kt.valHooks[o.nodeName.toLowerCase()]) && "get" in e && void 0 !== (n = e.get(o, "value")) ? n : (n = o.value, "string" == typeof n ? n.replace(Te, "") : null == n ? "" : n)
                }
            }
        }), kt.extend({
            valHooks: {
                option: {
                    get: function(t) {
                        var e = kt.find.attr(t, "value");
                        return null != e ? e : tt(kt.text(t))
                    }
                },
                select: {
                    get: function(t) {
                        var e, n, i, o = t.options,
                            r = t.selectedIndex,
                            a = "select-one" === t.type,
                            s = a ? null : [],
                            l = a ? r + 1 : o.length;
                        for (i = r < 0 ? l : a ? r : 0; i < l; i++)
                            if (n = o[i], (n.selected || i === r) && !n.disabled && (!n.parentNode.disabled || !g(n.parentNode, "optgroup"))) {
                                if (e = kt(n).val(), a) return e;
                                s.push(e)
                            }
                        return s
                    },
                    set: function(t, e) {
                        for (var n, i, o = t.options, r = kt.makeArray(e), a = o.length; a--;) i = o[a], (i.selected = kt.inArray(kt.valHooks.option.get(i), r) > -1) && (n = !0);
                        return n || (t.selectedIndex = -1), r
                    }
                }
            }
        }), kt.each(["radio", "checkbox"], function() {
            kt.valHooks[this] = {
                set: function(t, e) {
                    if (Array.isArray(e)) return t.checked = kt.inArray(kt(t).val(), e) > -1
                }
            }, yt.checkOn || (kt.valHooks[this].get = function(t) {
                return null === t.getAttribute("value") ? "on" : t.value
            })
        }), yt.focusin = "onfocusin" in n;
        var je = /^(?:focusinfocus|focusoutblur)$/,
            Me = function(t) {
                t.stopPropagation()
            };
        kt.extend(kt.event, {
            trigger: function(t, e, i, o) {
                var r, a, s, l, g, u, c, d, A = [i || ut],
                    f = ht.call(t, "type") ? t.type : t,
                    C = ht.call(t, "namespace") ? t.namespace.split(".") : [];
                if (a = d = s = i = i || ut, 3 !== i.nodeType && 8 !== i.nodeType && !je.test(f + kt.event.triggered) && (f.indexOf(".") > -1 && (C = f.split("."), f = C.shift(), C.sort()), g = f.indexOf(":") < 0 && "on" + f, t = t[kt.expando] ? t : new kt.Event(f, "object" == typeof t && t), t.isTrigger = o ? 2 : 3, t.namespace = C.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + C.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = i), e = null == e ? [t] : kt.makeArray(e, [t]), c = kt.event.special[f] || {}, o || !c.trigger || !1 !== c.trigger.apply(i, e))) {
                    if (!o && !c.noBubble && !wt(i)) {
                        for (l = c.delegateType || f, je.test(l + f) || (a = a.parentNode); a; a = a.parentNode) A.push(a), s = a;
                        s === (i.ownerDocument || ut) && A.push(s.defaultView || s.parentWindow || n)
                    }
                    for (r = 0;
                        (a = A[r++]) && !t.isPropagationStopped();) d = a, t.type = r > 1 ? l : c.bindType || f, u = (qt.get(a, "events") || {})[t.type] && qt.get(a, "handle"), u && u.apply(a, e), (u = g && a[g]) && u.apply && Ht(a) && (t.result = u.apply(a, e), !1 === t.result && t.preventDefault());
                    return t.type = f, o || t.isDefaultPrevented() || c._default && !1 !== c._default.apply(A.pop(), e) || !Ht(i) || g && bt(i[f]) && !wt(i) && (s = i[g], s && (i[g] = null), kt.event.triggered = f, t.isPropagationStopped() && d.addEventListener(f, Me), i[f](), t.isPropagationStopped() && d.removeEventListener(f, Me), kt.event.triggered = void 0, s && (i[g] = s)), t.result
                }
            },
            simulate: function(t, e, n) {
                var i = kt.extend(new kt.Event, n, {
                    type: t,
                    isSimulated: !0
                });
                kt.event.trigger(i, null, e)
            }
        }), kt.fn.extend({
            trigger: function(t, e) {
                return this.each(function() {
                    kt.event.trigger(t, e, this)
                })
            },
            triggerHandler: function(t, e) {
                var n = this[0];
                if (n) return kt.event.trigger(t, e, n, !0)
            }
        }), yt.focusin || kt.each({
            focus: "focusin",
            blur: "focusout"
        }, function(t, e) {
            var n = function(t) {
                kt.event.simulate(e, t.target, kt.event.fix(t))
            };
            kt.event.special[e] = {
                setup: function() {
                    var i = this.ownerDocument || this,
                        o = qt.access(i, e);
                    o || i.addEventListener(t, n, !0), qt.access(i, e, (o || 0) + 1)
                },
                teardown: function() {
                    var i = this.ownerDocument || this,
                        o = qt.access(i, e) - 1;
                    o ? qt.access(i, e, o) : (i.removeEventListener(t, n, !0), qt.remove(i, e))
                }
            }
        });
        var Ne = n.location,
            Oe = Date.now(),
            Re = /\?/;
        kt.parseXML = function(t) {
            var e;
            if (!t || "string" != typeof t) return null;
            try {
                e = (new n.DOMParser).parseFromString(t, "text/xml")
            } catch (t) {
                e = void 0
            }
            return e && !e.getElementsByTagName("parsererror").length || kt.error("Invalid XML: " + t), e
        };
        var Fe = /\[\]$/,
            We = /\r?\n/g,
            Le = /^(?:submit|button|image|reset|file)$/i,
            Pe = /^(?:input|select|textarea|keygen)/i;
        kt.param = function(t, e) {
            var n, i = [],
                o = function(t, e) {
                    var n = bt(e) ? e() : e;
                    i[i.length] = encodeURIComponent(t) + "=" + encodeURIComponent(null == n ? "" : n)
                };
            if (Array.isArray(t) || t.jquery && !kt.isPlainObject(t)) kt.each(t, function() {
                o(this.name, this.value)
            });
            else
                for (n in t) it(n, t[n], e, o);
            return i.join("&")
        }, kt.fn.extend({
            serialize: function() {
                return kt.param(this.serializeArray())
            },
            serializeArray: function() {
                return this.map(function() {
                    var t = kt.prop(this, "elements");
                    return t ? kt.makeArray(t) : this
                }).filter(function() {
                    var t = this.type;
                    return this.name && !kt(this).is(":disabled") && Pe.test(this.nodeName) && !Le.test(t) && (this.checked || !$t.test(t))
                }).map(function(t, e) {
                    var n = kt(this).val();
                    return null == n ? null : Array.isArray(n) ? kt.map(n, function(t) {
                        return {
                            name: e.name,
                            value: t.replace(We, "\r\n")
                        }
                    }) : {
                        name: e.name,
                        value: n.replace(We, "\r\n")
                    }
                }).get()
            }
        });
        var Be = /%20/g,
            Ue = /#.*$/,
            _e = /([?&])_=[^&]*/,
            He = /^(.*?):[ \t]*([^\r\n]*)$/gm,
            qe = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
            Ze = /^(?:GET|HEAD)$/,
            Qe = /^\/\//,
            Ye = {},
            Je = {},
            Ve = "*/".concat("*"),
            ze = ut.createElement("a");
        ze.href = Ne.href, kt.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: Ne.href,
                type: "GET",
                isLocal: qe.test(Ne.protocol),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                    "*": Ve,
                    text: "text/plain",
                    html: "text/html",
                    xml: "application/xml, text/xml",
                    json: "application/json, text/javascript"
                },
                contents: {
                    xml: /\bxml\b/,
                    html: /\bhtml/,
                    json: /\bjson\b/
                },
                responseFields: {
                    xml: "responseXML",
                    text: "responseText",
                    json: "responseJSON"
                },
                converters: {
                    "* text": String,
                    "text html": !0,
                    "text json": JSON.parse,
                    "text xml": kt.parseXML
                },
                flatOptions: {
                    url: !0,
                    context: !0
                }
            },
            ajaxSetup: function(t, e) {
                return e ? at(at(t, kt.ajaxSettings), e) : at(kt.ajaxSettings, t)
            },
            ajaxPrefilter: ot(Ye),
            ajaxTransport: ot(Je),
            ajax: function(t, e) {
                function i(t, e, i, s) {
                    var g, d, A, v, y, b = e;
                    u || (u = !0, l && n.clearTimeout(l), o = void 0, a = s || "", w.readyState = t > 0 ? 4 : 0, g = t >= 200 && t < 300 || 304 === t, i && (v = st(f, w, i)), v = lt(f, v, w, g), g ? (f.ifModified && (y = w.getResponseHeader("Last-Modified"), y && (kt.lastModified[r] = y), (y = w.getResponseHeader("etag")) && (kt.etag[r] = y)), 204 === t || "HEAD" === f.type ? b = "nocontent" : 304 === t ? b = "notmodified" : (b = v.state, d = v.data, A = v.error, g = !A)) : (A = b, !t && b || (b = "error", t < 0 && (t = 0))), w.status = t, w.statusText = (e || b) + "", g ? p.resolveWith(C, [d, b, w]) : p.rejectWith(C, [w, b, A]), w.statusCode(m), m = void 0, c && I.trigger(g ? "ajaxSuccess" : "ajaxError", [w, f, g ? d : A]), h.fireWith(C, [w, b]), c && (I.trigger("ajaxComplete", [w, f]), --kt.active || kt.event.trigger("ajaxStop")))
                }
                "object" == typeof t && (e = t, t = void 0), e = e || {};
                var o, r, a, s, l, g, u, c, d, A, f = kt.ajaxSetup({}, e),
                    C = f.context || f,
                    I = f.context && (C.nodeType || C.jquery) ? kt(C) : kt.event,
                    p = kt.Deferred(),
                    h = kt.Callbacks("once memory"),
                    m = f.statusCode || {},
                    v = {},
                    y = {},
                    b = "canceled",
                    w = {
                        readyState: 0,
                        getResponseHeader: function(t) {
                            var e;
                            if (u) {
                                if (!s)
                                    for (s = {}; e = He.exec(a);) s[e[1].toLowerCase()] = e[2];
                                e = s[t.toLowerCase()]
                            }
                            return null == e ? null : e
                        },
                        getAllResponseHeaders: function() {
                            return u ? a : null
                        },
                        setRequestHeader: function(t, e) {
                            return null == u && (t = y[t.toLowerCase()] = y[t.toLowerCase()] || t, v[t] = e), this
                        },
                        overrideMimeType: function(t) {
                            return null == u && (f.mimeType = t), this
                        },
                        statusCode: function(t) {
                            var e;
                            if (t)
                                if (u) w.always(t[w.status]);
                                else
                                    for (e in t) m[e] = [m[e], t[e]];
                            return this
                        },
                        abort: function(t) {
                            var e = t || b;
                            return o && o.abort(e), i(0, e), this
                        }
                    };
                if (p.promise(w), f.url = ((t || f.url || Ne.href) + "").replace(Qe, Ne.protocol + "//"), f.type = e.method || e.type || f.method || f.type, f.dataTypes = (f.dataType || "*").toLowerCase().match(Wt) || [""], null == f.crossDomain) {
                    g = ut.createElement("a");
                    try {
                        g.href = f.url, g.href = g.href, f.crossDomain = ze.protocol + "//" + ze.host != g.protocol + "//" + g.host
                    } catch (t) {
                        f.crossDomain = !0
                    }
                }
                if (f.data && f.processData && "string" != typeof f.data && (f.data = kt.param(f.data, f.traditional)), rt(Ye, f, e, w), u) return w;
                c = kt.event && f.global, c && 0 == kt.active++ && kt.event.trigger("ajaxStart"), f.type = f.type.toUpperCase(), f.hasContent = !Ze.test(f.type), r = f.url.replace(Ue, ""), f.hasContent ? f.data && f.processData && 0 === (f.contentType || "").indexOf("application/x-www-form-urlencoded") && (f.data = f.data.replace(Be, "+")) : (A = f.url.slice(r.length), f.data && (f.processData || "string" == typeof f.data) && (r += (Re.test(r) ? "&" : "?") + f.data, delete f.data), !1 === f.cache && (r = r.replace(_e, "$1"), A = (Re.test(r) ? "&" : "?") + "_=" + Oe++ + A), f.url = r + A), f.ifModified && (kt.lastModified[r] && w.setRequestHeader("If-Modified-Since", kt.lastModified[r]), kt.etag[r] && w.setRequestHeader("If-None-Match", kt.etag[r])), (f.data && f.hasContent && !1 !== f.contentType || e.contentType) && w.setRequestHeader("Content-Type", f.contentType), w.setRequestHeader("Accept", f.dataTypes[0] && f.accepts[f.dataTypes[0]] ? f.accepts[f.dataTypes[0]] + ("*" !== f.dataTypes[0] ? ", " + Ve + "; q=0.01" : "") : f.accepts["*"]);
                for (d in f.headers) w.setRequestHeader(d, f.headers[d]);
                if (f.beforeSend && (!1 === f.beforeSend.call(C, w, f) || u)) return w.abort();
                if (b = "abort", h.add(f.complete), w.done(f.success), w.fail(f.error), o = rt(Je, f, e, w)) {
                    if (w.readyState = 1, c && I.trigger("ajaxSend", [w, f]), u) return w;
                    f.async && f.timeout > 0 && (l = n.setTimeout(function() {
                        w.abort("timeout")
                    }, f.timeout));
                    try {
                        u = !1, o.send(v, i)
                    } catch (t) {
                        if (u) throw t;
                        i(-1, t)
                    }
                } else i(-1, "No Transport");
                return w
            },
            getJSON: function(t, e, n) {
                return kt.get(t, e, n, "json")
            },
            getScript: function(t, e) {
                return kt.get(t, void 0, e, "script")
            }
        }), kt.each(["get", "post"], function(t, e) {
            kt[e] = function(t, n, i, o) {
                return bt(n) && (o = o || i, i = n, n = void 0), kt.ajax(kt.extend({
                    url: t,
                    type: e,
                    dataType: o,
                    data: n,
                    success: i
                }, kt.isPlainObject(t) && t))
            }
        }), kt._evalUrl = function(t) {
            return kt.ajax({
                url: t,
                type: "GET",
                dataType: "script",
                cache: !0,
                async: !1,
                global: !1,
                throws: !0
            })
        }, kt.fn.extend({
            wrapAll: function(t) {
                var e;
                return this[0] && (bt(t) && (t = t.call(this[0])), e = kt(t, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && e.insertBefore(this[0]), e.map(function() {
                    for (var t = this; t.firstElementChild;) t = t.firstElementChild;
                    return t
                }).append(this)), this
            },
            wrapInner: function(t) {
                return bt(t) ? this.each(function(e) {
                    kt(this).wrapInner(t.call(this, e))
                }) : this.each(function() {
                    var e = kt(this),
                        n = e.contents();
                    n.length ? n.wrapAll(t) : e.append(t)
                })
            },
            wrap: function(t) {
                var e = bt(t);
                return this.each(function(n) {
                    kt(this).wrapAll(e ? t.call(this, n) : t)
                })
            },
            unwrap: function(t) {
                return this.parent(t).not("body").each(function() {
                    kt(this).replaceWith(this.childNodes)
                }), this
            }
        }), kt.expr.pseudos.hidden = function(t) {
            return !kt.expr.pseudos.visible(t)
        }, kt.expr.pseudos.visible = function(t) {
            return !!(t.offsetWidth || t.offsetHeight || t.getClientRects().length)
        }, kt.ajaxSettings.xhr = function() {
            try {
                return new n.XMLHttpRequest
            } catch (t) {}
        };
        var Ge = {
                0: 200,
                1223: 204
            },
            Xe = kt.ajaxSettings.xhr();
        yt.cors = !!Xe && "withCredentials" in Xe, yt.ajax = Xe = !!Xe, kt.ajaxTransport(function(t) {
            var e, i;
            if (yt.cors || Xe && !t.crossDomain) return {
                send: function(o, r) {
                    var a, s = t.xhr();
                    if (s.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)
                        for (a in t.xhrFields) s[a] = t.xhrFields[a];
                    t.mimeType && s.overrideMimeType && s.overrideMimeType(t.mimeType), t.crossDomain || o["X-Requested-With"] || (o["X-Requested-With"] = "XMLHttpRequest");
                    for (a in o) s.setRequestHeader(a, o[a]);
                    e = function(t) {
                        return function() {
                            e && (e = i = s.onload = s.onerror = s.onabort = s.ontimeout = s.onreadystatechange = null, "abort" === t ? s.abort() : "error" === t ? "number" != typeof s.status ? r(0, "error") : r(s.status, s.statusText) : r(Ge[s.status] || s.status, s.statusText, "text" !== (s.responseType || "text") || "string" != typeof s.responseText ? {
                                binary: s.response
                            } : {
                                text: s.responseText
                            }, s.getAllResponseHeaders()))
                        }
                    }, s.onload = e(), i = s.onerror = s.ontimeout = e("error"), void 0 !== s.onabort ? s.onabort = i : s.onreadystatechange = function() {
                        4 === s.readyState && n.setTimeout(function() {
                            e && i()
                        })
                    }, e = e("abort");
                    try {
                        s.send(t.hasContent && t.data || null)
                    } catch (t) {
                        if (e) throw t
                    }
                },
                abort: function() {
                    e && e()
                }
            }
        }), kt.ajaxPrefilter(function(t) {
            t.crossDomain && (t.contents.script = !1)
        }), kt.ajaxSetup({
            accepts: {
                script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
            },
            contents: {
                script: /\b(?:java|ecma)script\b/
            },
            converters: {
                "text script": function(t) {
                    return kt.globalEval(t), t
                }
            }
        }), kt.ajaxPrefilter("script", function(t) {
            void 0 === t.cache && (t.cache = !1), t.crossDomain && (t.type = "GET")
        }), kt.ajaxTransport("script", function(t) {
            if (t.crossDomain) {
                var e, n;
                return {
                    send: function(i, o) {
                        e = kt("<script>").prop({
                            charset: t.scriptCharset,
                            src: t.url
                        }).on("load error", n = function(t) {
                            e.remove(), n = null, t && o("error" === t.type ? 404 : 200, t.type)
                        }), ut.head.appendChild(e[0])
                    },
                    abort: function() {
                        n && n()
                    }
                }
            }
        });
        var Ke = [],
            $e = /(=)\?(?=&|$)|\?\?/;
        kt.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function() {
                var t = Ke.pop() || kt.expando + "_" + Oe++;
                return this[t] = !0, t
            }
        }), kt.ajaxPrefilter("json jsonp", function(t, e, i) {
            var o, r, a, s = !1 !== t.jsonp && ($e.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && $e.test(t.data) && "data");
            if (s || "jsonp" === t.dataTypes[0]) return o = t.jsonpCallback = bt(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, s ? t[s] = t[s].replace($e, "$1" + o) : !1 !== t.jsonp && (t.url += (Re.test(t.url) ? "&" : "?") + t.jsonp + "=" + o), t.converters["script json"] = function() {
                return a || kt.error(o + " was not called"), a[0]
            }, t.dataTypes[0] = "json", r = n[o], n[o] = function() {
                a = arguments
            }, i.always(function() {
                void 0 === r ? kt(n).removeProp(o) : n[o] = r, t[o] && (t.jsonpCallback = e.jsonpCallback, Ke.push(o)), a && bt(r) && r(a[0]), a = r = void 0
            }), "script"
        }), yt.createHTMLDocument = function() {
            var t = ut.implementation.createHTMLDocument("").body;
            return t.innerHTML = "<form></form><form></form>", 2 === t.childNodes.length
        }(), kt.parseHTML = function(t, e, n) {
            if ("string" != typeof t) return [];
            "boolean" == typeof e && (n = e, e = !1);
            var i, o, r;
            return e || (yt.createHTMLDocument ? (e = ut.implementation.createHTMLDocument(""), i = e.createElement("base"), i.href = ut.location.href, e.head.appendChild(i)) : e = ut), o = Mt.exec(t), r = !n && [], o ? [e.createElement(o[1])] : (o = E([t], e, r), r && r.length && kt(r).remove(), kt.merge([], o.childNodes))
        }, kt.fn.load = function(t, e, n) {
            var i, o, r, a = this,
                s = t.indexOf(" ");
            return s > -1 && (i = tt(t.slice(s)), t = t.slice(0, s)), bt(e) ? (n = e, e = void 0) : e && "object" == typeof e && (o = "POST"), a.length > 0 && kt.ajax({
                url: t,
                type: o || "GET",
                dataType: "html",
                data: e
            }).done(function(t) {
                r = arguments, a.html(i ? kt("<div>").append(kt.parseHTML(t)).find(i) : t)
            }).always(n && function(t, e) {
                a.each(function() {
                    n.apply(this, r || [t.responseText, e, t])
                })
            }), this
        }, kt.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(t, e) {
            kt.fn[e] = function(t) {
                return this.on(e, t)
            }
        }), kt.expr.pseudos.animated = function(t) {
            return kt.grep(kt.timers, function(e) {
                return t === e.elem
            }).length
        }, kt.offset = {
            setOffset: function(t, e, n) {
                var i, o, r, a, s, l, g, u = kt.css(t, "position"),
                    c = kt(t),
                    d = {};
                "static" === u && (t.style.position = "relative"), s = c.offset(), r = kt.css(t, "top"), l = kt.css(t, "left"), g = ("absolute" === u || "fixed" === u) && (r + l).indexOf("auto") > -1, g ? (i = c.position(), a = i.top, o = i.left) : (a = parseFloat(r) || 0, o = parseFloat(l) || 0), bt(e) && (e = e.call(t, n, kt.extend({}, s))), null != e.top && (d.top = e.top - s.top + a), null != e.left && (d.left = e.left - s.left + o), "using" in e ? e.using.call(t, d) : c.css(d)
            }
        }, kt.fn.extend({
            offset: function(t) {
                if (arguments.length) return void 0 === t ? this : this.each(function(e) {
                    kt.offset.setOffset(this, t, e)
                });
                var e, n, i = this[0];
                if (i) return i.getClientRects().length ? (e = i.getBoundingClientRect(), n = i.ownerDocument.defaultView, {
                    top: e.top + n.pageYOffset,
                    left: e.left + n.pageXOffset
                }) : {
                    top: 0,
                    left: 0
                }
            },
            position: function() {
                if (this[0]) {
                    var t, e, n, i = this[0],
                        o = {
                            top: 0,
                            left: 0
                        };
                    if ("fixed" === kt.css(i, "position")) e = i.getBoundingClientRect();
                    else {
                        for (e = this.offset(), n = i.ownerDocument, t = i.offsetParent || n.documentElement; t && (t === n.body || t === n.documentElement) && "static" === kt.css(t, "position");) t = t.parentNode;
                        t && t !== i && 1 === t.nodeType && (o = kt(t).offset(), o.top += kt.css(t, "borderTopWidth", !0), o.left += kt.css(t, "borderLeftWidth", !0))
                    }
                    return {
                        top: e.top - o.top - kt.css(i, "marginTop", !0),
                        left: e.left - o.left - kt.css(i, "marginLeft", !0)
                    }
                }
            },
            offsetParent: function() {
                return this.map(function() {
                    for (var t = this.offsetParent; t && "static" === kt.css(t, "position");) t = t.offsetParent;
                    return t || oe
                })
            }
        }), kt.each({
            scrollLeft: "pageXOffset",
            scrollTop: "pageYOffset"
        }, function(t, e) {
            var n = "pageYOffset" === e;
            kt.fn[t] = function(i) {
                return Bt(this, function(t, i, o) {
                    var r;
                    if (wt(t) ? r = t : 9 === t.nodeType && (r = t.defaultView), void 0 === o) return r ? r[e] : t[i];
                    r ? r.scrollTo(n ? r.pageXOffset : o, n ? o : r.pageYOffset) : t[i] = o
                }, t, i, arguments.length)
            }
        }), kt.each(["top", "left"], function(t, e) {
            kt.cssHooks[e] = U(yt.pixelPosition, function(t, n) {
                if (n) return n = B(t, e), de.test(n) ? kt(t).position()[e] + "px" : n
            })
        }), kt.each({
            Height: "height",
            Width: "width"
        }, function(t, e) {
            kt.each({
                padding: "inner" + t,
                content: e,
                "": "outer" + t
            }, function(n, i) {
                kt.fn[i] = function(o, r) {
                    var a = arguments.length && (n || "boolean" != typeof o),
                        s = n || (!0 === o || !0 === r ? "margin" : "border");
                    return Bt(this, function(e, n, o) {
                        var r;
                        return wt(e) ? 0 === i.indexOf("outer") ? e["inner" + t] : e.document.documentElement["client" + t] : 9 === e.nodeType ? (r = e.documentElement, Math.max(e.body["scroll" + t], r["scroll" + t], e.body["offset" + t], r["offset" + t], r["client" + t])) : void 0 === o ? kt.css(e, n, s) : kt.style(e, n, o, s)
                    }, e, a ? o : void 0, a)
                }
            })
        }), kt.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(t, e) {
            kt.fn[e] = function(t, n) {
                return arguments.length > 0 ? this.on(e, null, t, n) : this.trigger(e)
            }
        }), kt.fn.extend({
            hover: function(t, e) {
                return this.mouseenter(t).mouseleave(e || t)
            }
        }), kt.fn.extend({
            bind: function(t, e, n) {
                return this.on(t, null, e, n)
            },
            unbind: function(t, e) {
                return this.off(t, null, e)
            },
            delegate: function(t, e, n, i) {
                return this.on(e, t, n, i)
            },
            undelegate: function(t, e, n) {
                return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", n)
            }
        }), kt.proxy = function(t, e) {
            var n, i, o;
            if ("string" == typeof e && (n = t[e], e = t, t = n), bt(t)) return i = dt.call(arguments, 2), o = function() {
                return t.apply(e || this, i.concat(dt.call(arguments)))
            }, o.guid = t.guid = t.guid || kt.guid++, o
        }, kt.holdReady = function(t) {
            t ? kt.readyWait++ : kt.ready(!0)
        }, kt.isArray = Array.isArray, kt.parseJSON = JSON.parse, kt.nodeName = g, kt.isFunction = bt, kt.isWindow = wt, kt.camelCase = h, kt.type = s, kt.now = Date.now, kt.isNumeric = function(t) {
            var e = kt.type(t);
            return ("number" === e || "string" === e) && !isNaN(t - parseFloat(t))
        }, i = [], void 0 !== (o = function() {
            return kt
        }.apply(e, i)) && (t.exports = o);
        var tn = n.jQuery,
            en = n.$;
        return kt.noConflict = function(t) {
            return n.$ === kt && (n.$ = en), t && n.jQuery === kt && (n.jQuery = tn), kt
        }, r || (n.jQuery = n.$ = kt), kt
    })
}, function(t, e, n) {
    "use strict";

    function i(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }

    function o(t, e) {
        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
            i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
            o = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : m,
            r = (0, u.default)("<div />", {
                class: t,
                html: o(e)
            }),
            a = null;
        return r.find(f).click(function(t) {
            t.preventDefault(), r.detach().remove(), a && clearTimeout(a), i && i()
        }), A.append(r), n > 0 && (a = setTimeout(function() {
            r.detach().remove()
        }, n)), r
    }

    function r(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        return A || l(), o(C.danger, t, e)
    }

    function a(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        return A || l(), o(C.warning, t, e, n)
    }

    function s(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        A || l();
        var n = function() {
            d.default.set("alertTBClosed", !0, {
                expires: .2
            }), e && e()
        };
        return o(C.warning, t, 0, n, v)
    }

    function l() {
        A = (0, u.default)('[data-container="alert"]');
        var t = (0, u.default)('[data-container="header"]');
        A.affix({
            offset: {
                top: t.outerHeight(!0)
            }
        })
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.danger = r, e.warning = a, e.techBreakAlert = s, e.init = l;
    var g = n(0),
        u = i(g),
        c = n(3),
        d = i(c),
        A = null,
        f = '[data-dismiss="alert"]',
        C = {
            danger: "alert_1R4",
            warning: "alert_3YY"
        },
        I = '\n<button data-dismiss="alert" class="alert_yVa">\n  <span class="alert_YTj">Закрыть</span>\n  <span class="alert_2W1"></span>\n</button>\n',
        p = function(t) {
            return "\n  " + I + '\n  <div class="alert_3fh">' + t + "</div>\n"
        },
        h = function(t, e) {
            return "\n  " + I + '\n  <div class="alert_2VV">' + t + '</div>\n  <div class="alert_3-z">' + e + "</div>\n"
        },
        m = function(t) {
            var e = t.title,
                n = t.text;
            return '\n  <div class="alert_w4q">\n    ' + (e ? h(e, n) : p(n)) + "\n  </div>\n"
        },
        v = function(t) {
            var e = t.text;
            return '\n  <div class="alert_w4q">\n    ' + I + '\n    <div class="alert_3-z">' + e + "</div>\n  </div>\n"
        }
}, function(t, e, n) {
    "use strict";

    function i(t, e) {
        t.tooltip(e).tooltip("show")
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = function(t, e) {
        t.data("bs.tooltip") ? t.tooltip("destroy", function() {
            i(t, e)
        }) : i(t, e)
    }
}, function(t, e, n) {
    var i, o;
    ! function(r) {
        var a = !1;
        if (i = r, void 0 !== (o = "function" == typeof i ? i.call(e, n, e, t) : i) && (t.exports = o), a = !0, t.exports = r(), a = !0, !a) {
            var s = window.Cookies,
                l = window.Cookies = r();
            l.noConflict = function() {
                return window.Cookies = s, l
            }
        }
    }(function() {
        function t() {
            for (var t = 0, e = {}; t < arguments.length; t++) {
                var n = arguments[t];
                for (var i in n) e[i] = n[i]
            }
            return e
        }

        function e(n) {
            function i(e, o, r) {
                var a;
                if ("undefined" != typeof document) {
                    if (arguments.length > 1) {
                        if (r = t({
                                path: "/"
                            }, i.defaults, r), "number" == typeof r.expires) {
                            var s = new Date;
                            s.setMilliseconds(s.getMilliseconds() + 864e5 * r.expires), r.expires = s
                        }
                        r.expires = r.expires ? r.expires.toUTCString() : "";
                        try {
                            a = JSON.stringify(o), /^[\{\[]/.test(a) && (o = a)
                        } catch (t) {}
                        o = n.write ? n.write(o, e) : encodeURIComponent(String(o)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent), e = encodeURIComponent(String(e)), e = e.replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent), e = e.replace(/[\(\)]/g, escape);
                        var l = "";
                        for (var g in r) r[g] && (l += "; " + g, !0 !== r[g] && (l += "=" + r[g]));
                        return document.cookie = e + "=" + o + l
                    }
                    e || (a = {});
                    for (var u = document.cookie ? document.cookie.split("; ") : [], c = /(%[0-9A-Z]{2})+/g, d = 0; d < u.length; d++) {
                        var A = u[d].split("="),
                            f = A.slice(1).join("=");
                        this.json || '"' !== f.charAt(0) || (f = f.slice(1, -1));
                        try {
                            var C = A[0].replace(c, decodeURIComponent);
                            if (f = n.read ? n.read(f, C) : n(f, C) || f.replace(c, decodeURIComponent), this.json) try {
                                f = JSON.parse(f)
                            } catch (t) {}
                            if (e === C) {
                                a = f;
                                break
                            }
                            e || (a[C] = f)
                        } catch (t) {}
                    }
                    return a
                }
            }
            return i.set = i, i.get = function(t) {
                return i.call(i, t)
            }, i.getJSON = function() {
                return i.apply({
                    json: !0
                }, [].slice.call(arguments))
            }, i.defaults = {}, i.remove = function(e, n) {
                i(e, "", t(n, {
                    expires: -1
                }))
            }, i.withConverter = e, i
        }
        return e(function() {})
    })
}, function(t, e, n) {
    "use strict";

    function i(t, e) {
        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
        if (e = encodeURIComponent(e), n = encodeURIComponent(n), t in l) {
            var i = l[t]({
                    url: e,
                    text: n
                }),
                o = window.innerWidth / 2 - u / 2 + window.screenX,
                r = window.innerHeight / 2 - c / 2 + window.screenY,
                a = "scrollbars=no, width=" + u + ", height=" + c + ", top=" + r + ", left=" + o;
            window.open(i, "", a)
        }
    }

    function o() {
        (0, s.default)('[data-toggle="share"]').each(function(t, e) {
            var n = (0, s.default)(e),
                o = n.attr("data-share-social"),
                r = n.attr("data-share-url"),
                a = n.attr("data-share-text"),
                l = n.attr("data-share-count");
            if (n.click(function() {
                    i(o, r, a)
                }), l && void 0 !== g[o]) {
                var u = g[o];
                u.total || (g[o].total = !0, u.script ? u.getCount(u.url(encodeURIComponent(r)), function(t) {
                    (0, s.default)('[data-share-social="' + o + '"] [data-view-count]').text(t)
                }) : s.default.get(u.url(encodeURIComponent(r)), function(t) {
                    (0, s.default)('[data-share-social="' + o + '"] [data-view-count]').text(u.getCount(t))
                }))
            }
        })
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t
    } : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    };
    e.default = o;
    var a = n(0),
        s = function(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }(a),
        l = {
            facebook: function(t) {
                t.text;
                return "https://www.facebook.com/sharer/sharer.php?u=" + t.url
            },
            twitter: function(t) {
                return "https://twitter.com/intent/tweet/?text=" + t.text + "&url=" + t.url
            },
            vk: function(t) {
                t.text;
                return "http://vk.com/share.php?url=" + t.url
            },
            telegram: function(t) {
                var e = t.text;
                return "https://telegram.me/share/url?url=" + t.url + "&text=" + e
            },
            ok: function(t) {
                var e = t.text;
                return "http://www.odnoklassniki.ru/dk?st.cmd=addShare&st.s=1&st._surl=" + t.url + "&st.comments=" + e
            }
        },
        g = {
            facebook: {
                url: function(t) {
                    return "https://graph.facebook.com/?id=" + t
                },
                getCount: function(t) {
                    return "object" === r(t.share) && "number" == typeof t.share.share_count ? t.share.share_count / 1 : 0
                },
                total: null
            },
            vk: {
                url: function(t) {
                    return "https://vk.com/share.php?act=count&index=1&url=" + t
                },
                getCount: function(t, e) {
                    return window.VK || (window.VK = {}), window.VK.Share = {
                        count: function(t, n) {
                            e(n)
                        }
                    }, s.default.getScript(t)
                },
                total: !1,
                script: !0
            },
            ok: {
                url: function(t) {
                    return "https://connect.ok.ru/dk?st.cmd=extLike&uid=odklcnt0&ref=" + t
                },
                getCount: function(t, e) {
                    return window.ODKL || (window.ODKL = {}), window.ODKL.updateCount = function(t, n) {
                        e(n)
                    }, s.default.getScript(t)
                },
                total: !1,
                script: !0
            }
        },
        u = 600,
        c = 480
}, function(t, e, n) {
    "use strict";

    function i(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }

    function o(t, e) {
        var n = {};
        for (var i in t) e.indexOf(i) >= 0 || Object.prototype.hasOwnProperty.call(t, i) && (n[i] = t[i]);
        return n
    }

    function r(t, e) {
        h = t, m = e
    }

    function a() {
        if (safe_numps) {
            var t = localStorage.getItem(safe_numps),
                e = {},
                n = !1;
            if (t) {
                if (e = JSON.parse(t), void 0 !== e[h] && void 0 !== e[h][m]) {
                    var i = e[h][m];
                    for (var o in i) "time" != o && (y[o].val(i[o]), y[o].blur(), n = !0)
                }
                if (!n && void 0 !== e[h]) {
                    var r = e[h],
                        a = 0;
                    for (var o in r) void 0 === r[o].time ? a = o : 0 < r[o].time && (a = o);
                    a && (y.inputAccount.val(r[a].inputAccount), y.inputAccount.blur(), y.inputFullname.val(r[a].inputFullname), y.inputFullname.blur(), y.inputUnk.val(r[a].inputUnk), y.inputUnk.blur())
                }
            }
        }
    }

    function s() {
        var t = o(y, []);
        if (!safe_numps) return !1;
        var e = localStorage.getItem(safe_numps),
            n = {};
        e && (n = JSON.parse(e)), (0, d.default)((0, I.default)(t).reduce(function(t, e) {
            return e && e.length && t.push(e[0]), t
        }, [])).focusout(function() {
            var t = !1;
            for (var e in y) {
                var i = y[e].val();
                i && (n[h] = l(n[h]), n[h][m] = l(n[h][m]), n[h][m][e] = l(n[h][m][e]), n[h][m][e] = i, n[h][m].time = (new Date).getTime(), t = !0)
            }
            t && localStorage.setItem(safe_numps, JSON.stringify(n))
        })
    }

    function l(t) {
        return void 0 === t ? {} : t
    }

    function g() {
        if (!safe_numps) return !1;
        localStorage.clear(), localStorage.getItem(safe_numps) ? (0, p.danger)({
            title: "Статус:",
            text: "Ошибка при удалении данных!"
        }) : (0, p.warning)({
            title: "Статус:",
            text: "Данные успешно удалены!"
        })
    }

    function u() {
        if (!safe_numps) return !0;
        f.default.get("cheak_visible_notice") || ((0, p.warning)({
            title: "Внимание!",
            text: 'Уведомляем Вас, что для Вашего удобства мы включили сохранение вводимых данных, это упрощает создание заявки для наших постоянных клиентов. Если вы хотите отключить эту функцию то сможете сделать это в личном кабинете в разделе "<a href="/nastroiki.html" target="_blank">Настройки</a>"'
        }), f.default.set("cheak_visible_notice", !0, {
            expires: 1e3
        }))
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.setSId = r, e.readSafeInputData = a, e.initSafeEvent = s, e.removeSafeInputData = g, e.cheakVisibleNotice = u;
    var c = n(0),
        d = i(c),
        A = n(3),
        f = i(A),
        C = n(8),
        I = i(C),
        p = n(1),
        h = null,
        m = null,
        v = {
            inputAccount: (0, d.default)('[data-exchange-form="input-account"]'),
            inputFullname: (0, d.default)('[data-exchange-form="input-fullname"]'),
            inputUnk: (0, d.default)('[data-exchange-form="input-unk"]'),
            outputAccount: (0, d.default)('[data-exchange-form="output-account"]'),
            outputFullname: (0, d.default)('[data-exchange-form="output-fullname"]'),
            outputUnk: (0, d.default)('[data-exchange-form="output-unk"]'),
            outputBank: (0, d.default)('[data-exchange-form="output-bank"]')
        },
        y = {
            inputAccount: (0, d.default)("input", v.inputAccount),
            inputFullname: (0, d.default)("input", v.inputFullname),
            inputUnk: (0, d.default)("input", v.inputUnk),
            outputAccount: (0, d.default)("input", v.outputAccount),
            outputFullname: (0, d.default)("input", v.outputFullname),
            outputUnk: (0, d.default)("input", v.outputUnk),
            outputBank: (0, d.default)("input", v.outputBank)
        }
}, function(t, e, n) {
    "use strict";

    function i(t) {
        A = t
    }

    function o(t) {
        var e = (0, s.default)("#modalVer2"),
            n = (0, s.default)("#verModalErrorContainer"),
            i = (0, s.default)("#verModalErrorList"),
            o = d || (0, s.default)("#modalWaitingVer");
        n.hide(), s.default.post("/ticketsproc/verification_ticket", {
            cart_image_name: t
        }).done(function(t) {
            var a = JSON.parse(t);
            a.error ? (n.show(), i.html("<li>" + a.text + "</li>")) : e.one("hidden.bs.modal", function() {
                o.modal(), setTimeout(function() {
                    return r(a.id, a.pass)
                }, c)
            }).modal("hide")
        }).fail(function(t) {
            e.modal("hide"), (0, l.danger)({
                title: "Ошибка!",
                text: 'Нет связи с сервером. Данные могут устареть. Пожалуйста <a href="javascript:location.reload();">обновите страницу</a>'
            })
        })
    }

    function r(t, e) {
        var n = d || (0, s.default)("#modalWaitingVer");
        return s.default.post("/ticketsproc/load_waiting_for_verification", {
            id_ticket: t,
            id_pass: e
        }).done(function(i) {
            var o = JSON.parse(i);
            if (!o.error) {
                if (1 == o.status) return void s.default.post("/ticketsproc/finished_creat_ticket").done(function(t) {
                    var e = JSON.parse(t);
                    n.one("hidden.bs.modal", function() {
                        if (e[0])(0, u.addTopContent)(e[5]), (0, u.addLink)(1, list_bank_url[A]), (0, u.addRequisites)(2, e[1].html, e[1].link), (0, u.addStep)(3, 'После оплаты нажмите кнопку "Я оплатил"'), (0, u.showInstructions)(A, e[1].ticket_hash), (0, g.startTicketTimer)();
                        else {
                            for (var t = "", n = 1; n < e.length; n++) t += e[n] + "<br>";
                            (0, l.danger)({
                                title: "Ошибка!",
                                text: t
                            })
                        }
                    }).modal("hide")
                }).fail(function(t) {
                    (0, l.danger)({
                        title: "Ошибка!",
                        text: 'Нет связи с сервером. Данные могут устареть. Пожалуйста <a href="javascript:location.reload();">обновите страницу</a>'
                    })
                });
                if (9 == o.status) {
                    var a = (0, s.default)("#modalFailVer"),
                        d = (0, s.default)("#modalFailVerReason");
                    return void n.one("hidden.bs.modal", function() {
                        d.text(o.text), a.modal()
                    }).modal("hide")
                }
                setTimeout(function() {
                    return r(t, e)
                }, c)
            }
        }).fail(function(t) {
            n.modal("hide"), (0, l.danger)({
                title: "Ошибка!",
                text: 'Нет связи с сервером. Данные могут устареть. Пожалуйста <a href="javascript:location.reload();">обновите страницу</a>'
            })
        }), !1
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.setInputSystemId = i, e.sendImageCard = o;
    var a = n(0),
        s = function(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }(a),
        l = n(1),
        g = n(11),
        u = n(12),
        c = 1e4,
        d = null,
        A = null
}, function(t, e) {
    function n(t, e) {
        for (var n = -1, i = t ? t.length : 0, o = Array(i); ++n < i;) o[n] = e(t[n], n, t);
        return o
    }

    function i(t, e, n, i) {
        for (var o = t.length, r = n + (i ? 1 : -1); i ? r-- : ++r < o;)
            if (e(t[r], r, t)) return r;
        return -1
    }

    function o(t, e, n) {
        if (e !== e) return i(t, r, n);
        for (var o = n - 1, a = t.length; ++o < a;)
            if (t[o] === e) return o;
        return -1
    }

    function r(t) {
        return t !== t
    }

    function a(t, e) {
        for (var n = -1, i = Array(t); ++n < t;) i[n] = e(n);
        return i
    }

    function s(t, e) {
        return n(e, function(e) {
            return t[e]
        })
    }

    function l(t, e) {
        var n = V(t) || A(t) ? a(t.length, String) : [],
            i = n.length,
            o = !!i;
        for (var r in t) !e && !q.call(t, r) || o && ("length" == r || u(r, i)) || n.push(r);
        return n
    }

    function g(t) {
        if (!c(t)) return Y(t);
        var e = [];
        for (var n in Object(t)) q.call(t, n) && "constructor" != n && e.push(n);
        return e
    }

    function u(t, e) {
        return !!(e = null == e ? D : e) && ("number" == typeof t || U.test(t)) && t > -1 && t % 1 == 0 && t < e
    }

    function c(t) {
        var e = t && t.constructor;
        return t === ("function" == typeof e && e.prototype || H)
    }

    function d(t, e, n, i) {
        t = f(t) ? t : S(t), n = n && !i ? w(n) : 0;
        var r = t.length;
        return n < 0 && (n = J(r + n, 0)), v(t) ? n <= r && t.indexOf(e, n) > -1 : !!r && o(t, e, n) > -1
    }

    function A(t) {
        return C(t) && q.call(t, "callee") && (!Q.call(t, "callee") || Z.call(t) == M)
    }

    function f(t) {
        return null != t && p(t.length) && !I(t)
    }

    function C(t) {
        return m(t) && f(t)
    }

    function I(t) {
        var e = h(t) ? Z.call(t) : "";
        return e == N || e == O
    }

    function p(t) {
        return "number" == typeof t && t > -1 && t % 1 == 0 && t <= D
    }

    function h(t) {
        var e = typeof t;
        return !!t && ("object" == e || "function" == e)
    }

    function m(t) {
        return !!t && "object" == typeof t
    }

    function v(t) {
        return "string" == typeof t || !V(t) && m(t) && Z.call(t) == R
    }

    function y(t) {
        return "symbol" == typeof t || m(t) && Z.call(t) == F
    }

    function b(t) {
        if (!t) return 0 === t ? t : 0;
        if ((t = x(t)) === E || t === -E) {
            return (t < 0 ? -1 : 1) * T
        }
        return t === t ? t : 0
    }

    function w(t) {
        var e = b(t),
            n = e % 1;
        return e === e ? n ? e - n : e : 0
    }

    function x(t) {
        if ("number" == typeof t) return t;
        if (y(t)) return j;
        if (h(t)) {
            var e = "function" == typeof t.valueOf ? t.valueOf() : t;
            t = h(e) ? e + "" : e
        }
        if ("string" != typeof t) return 0 === t ? t : +t;
        t = t.replace(W, "");
        var n = P.test(t);
        return n || B.test(t) ? _(t.slice(2), n ? 2 : 8) : L.test(t) ? j : +t
    }

    function k(t) {
        return f(t) ? l(t) : g(t)
    }

    function S(t) {
        return t ? s(t, k(t)) : []
    }
    var E = 1 / 0,
        D = 9007199254740991,
        T = 1.7976931348623157e308,
        j = NaN,
        M = "[object Arguments]",
        N = "[object Function]",
        O = "[object GeneratorFunction]",
        R = "[object String]",
        F = "[object Symbol]",
        W = /^\s+|\s+$/g,
        L = /^[-+]0x[0-9a-f]+$/i,
        P = /^0b[01]+$/i,
        B = /^0o[0-7]+$/i,
        U = /^(?:0|[1-9]\d*)$/,
        _ = parseInt,
        H = Object.prototype,
        q = H.hasOwnProperty,
        Z = H.toString,
        Q = H.propertyIsEnumerable,
        Y = function(t, e) {
            return function(n) {
                return t(e(n))
            }
        }(Object.keys, Object),
        J = Math.max,
        V = Array.isArray;
    t.exports = d
}, function(t, e) {
    function n(t, e) {
        for (var n = -1, i = t ? t.length : 0, o = Array(i); ++n < i;) o[n] = e(t[n], n, t);
        return o
    }

    function i(t, e) {
        for (var n = -1, i = Array(t); ++n < t;) i[n] = e(n);
        return i
    }

    function o(t, e) {
        return n(e, function(e) {
            return t[e]
        })
    }

    function r(t, e) {
        var n = D(t) || g(t) ? i(t.length, String) : [],
            o = n.length,
            r = !!o;
        for (var a in t) !e && !x.call(t, a) || r && ("length" == a || s(a, o)) || n.push(a);
        return n
    }

    function a(t) {
        if (!l(t)) return E(t);
        var e = [];
        for (var n in Object(t)) x.call(t, n) && "constructor" != n && e.push(n);
        return e
    }

    function s(t, e) {
        return !!(e = null == e ? h : e) && ("number" == typeof t || b.test(t)) && t > -1 && t % 1 == 0 && t < e
    }

    function l(t) {
        var e = t && t.constructor;
        return t === ("function" == typeof e && e.prototype || w)
    }

    function g(t) {
        return c(t) && x.call(t, "callee") && (!S.call(t, "callee") || k.call(t) == m)
    }

    function u(t) {
        return null != t && A(t.length) && !d(t)
    }

    function c(t) {
        return C(t) && u(t)
    }

    function d(t) {
        var e = f(t) ? k.call(t) : "";
        return e == v || e == y
    }

    function A(t) {
        return "number" == typeof t && t > -1 && t % 1 == 0 && t <= h
    }

    function f(t) {
        var e = typeof t;
        return !!t && ("object" == e || "function" == e)
    }

    function C(t) {
        return !!t && "object" == typeof t
    }

    function I(t) {
        return u(t) ? r(t) : a(t)
    }

    function p(t) {
        return t ? o(t, I(t)) : []
    }
    var h = 9007199254740991,
        m = "[object Arguments]",
        v = "[object Function]",
        y = "[object GeneratorFunction]",
        b = /^(?:0|[1-9]\d*)$/,
        w = Object.prototype,
        x = w.hasOwnProperty,
        k = w.toString,
        S = w.propertyIsEnumerable,
        E = function(t, e) {
            return function(n) {
                return t(e(n))
            }
        }(Object.keys, Object),
        D = Array.isArray;
    t.exports = p
}, function(t, e, n) {
    "use strict";

    function i(t, e) {
        l.css({
            marginTop: t,
            marginBottom: e
        })
    }

    function o() {
        var t = (0, a.default)(window),
            e = t.height();
        if (t.width() <= 990 || e > 1200) return i(null, null);
        var n = g.height(),
            o = u.outerHeight(!0),
            r = e - (o + n),
            s = .012 * l.width(),
            c = r - l.height();
        c > s && c <= 2 * s ? i(c, 0) : c > 2 * s && i(c / 2, c / 2)
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.resize = o, e.default = function() {
        s = s || (0, a.default)('[data-container="main"]'), l = l || (0, a.default)('[data-container="module"]'), g = g || (0, a.default)('[data-container="header"]'), u = u || (0, a.default)('[data-container="footer"]'), s.length > 0 && (i(0, 0), l = s), (0, a.default)(window).resize(o).resize()
    };
    var r = n(0),
        a = function(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }(r),
        s = null,
        l = null,
        g = null,
        u = null
}, function(t, e, n) {
    "use strict";

    function i(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }

    function o(t) {
        r(), I.default.get("alertTBClosed") || (h = (0, d.techBreakAlert)({
            text: 'Уважаемый клиент, уведомляем Вас о том, что наш сервис находится на \n        техническом перерыве. Выходим из перерыва через\n        <span class="alert_1EB"></span>\n        <strong data-techbreak="' + t + '"></strong>'
        }), a(h, t))
    }

    function r() {
        h && h.length && (h.detach().remove(), h = null)
    }

    function a(t, e) {
        var n = (0, f.default)("[data-techbreak]", t);
        n.countdown(e, function(t) {
            var e = "%M мин %S сек";
            t.offset.hours > 0 && (e = "%H час " + e), t.offset.days > 0 && (e = "%-d д " + e), t.offset.weeks > 0 && (e = "%-w нед " + e), (0, f.default)(this).html(t.strftime(e))
        }), t === p && n.on("finish.countdown", function(t) {
            c()
        })
    }

    function s() {
        p = (0, f.default)("[data-teachbreak-container]")
    }

    function l() {
        p || s(), p.show()
    }

    function g() {
        p || s(), p.hide()
    }

    function u(t) {
        l();
        var e = new Date;
        e.getTimezoneOffset();
        p && a(p, t), o(t)
    }

    function c() {
        g(), r()
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.startSleep = u, e.stopSleep = c, e.default = function() {
        isSleep && u(sleepEnd)
    };
    var d = n(1),
        A = n(0),
        f = i(A),
        C = n(3),
        I = i(C),
        p = null,
        h = null
}, function(t, e, n) {
    "use strict";

    function i(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }

    function o(t, e) {
        var n = {};
        for (var i in t) e.indexOf(i) >= 0 || Object.prototype.hasOwnProperty.call(t, i) && (n[i] = t[i]);
        return n
    }

    function r(t) {
        if (9 == T && (id_ps_qiwi = t[2]), (0, w.default)([3, 4, 5, 6, 7, 10, 12, 13, 19, 20, 25, 30, 31, 32, 33, 34, 35], parseInt(T, 10)) && t[1].no_verification) return (0, m.setInputSystemId)(T), void(0, f.default)("#modalVer1").modal();
        var e = null;
        if (1 == T ? e = "perfect_money" : 14 == T || 26 == T ? e = "payeer_money" : 8 == T ? e = "yandexmoney" : 23 == T || 27 == T ? e = "advcash_money" : 28 == T ? e = "okpay_money" : 44 != T && 45 != T || (e = "epos_money"), e) {
            var n = (0, f.default)("#modalRedirect");
            return (0, f.default)("#linkPaymentSystemRedirect").attr("href", "/ticketsproc/" + e + "/?id=" + t[1].ticket_hash).off("click.exchange").on("click.exchange", function() {
                n.one("hidden.bs.modal", function() {
                    (0, f.default)("#modalWaitingPaymentNumber").text(t[1].ticket_hash), (0, f.default)("#modalWaitingPayment").modal(), setTimeout(function() {
                        return (0, p.default)(t[1].ticket_hash)
                    }, 1e4)
                }).modal("hide")
            }), (0, h.addTopContent)(t[5]), (0, h.showRequisites)(), l(), void n.modal()
        }(0, h.addTopContent)(t[5]), 11 == T || 21 == T || 22 == T || 29 == T || 36 == T || 37 == T || 38 == T || 42 == T ? ((0, h.addRequisites)(1, t[1].html, t[1].link), (0, h.addStep)(2, '<p>После оплаты <b> обязательно</b> нажмите<br> кнопку "Я оплатил", чтобы заявка создалась:</p>')) : 2 == T ? ((0, h.addStep)(1, "<p>\n        Вставьте номер e-Voucher и код активации.\n        <br>Если нужно добавить еще один код нажмите\n        <br>«Добавить еще один чек»\n      </p>"), (0, h.addCollectionEVoucher)(2, t[1].amount_transfer)) : 15 == T ? ((0, h.addStep)(1, "<p>\n        Вставьте WEX USD код\n        <br>Если нужно добавить еще один код нажмите\n        <br>«Добавить еще код»\n      </p>"), (0, h.addCollectionBtce)(2, t[1].amount_transfer)) : 24 == T ? ((0, h.addStep)(1, "<p>\n        Вставьте WEX RUR код\n        <br>Если нужно добавить еще один код нажмите\n        <br>«Добавить еще код»\n      </p>"), (0, h.addCollectionBtceRur)(2, t[1].amount_transfer)) : 39 == T ? ((0, h.addStep)(1, "<p>\n        Вставьте EX-Code USD\n        <br>Если нужно добавить еще один код нажмите\n        <br>«Добавить еще код»\n      </p>"), (0, h.addCollectionExmo)(2, t[1].amount_transfer)) : 41 == T ? ((0, h.addStep)(1, "<p>\n        Вставьте EX-Code RUB\n        <br>Если нужно добавить еще один код нажмите\n        <br>«Добавить еще код»\n      </p>"), (0, h.addCollectionExmoRub)(2, t[1].amount_transfer)) : 9 == T && 12 == id_ps_qiwi ? ((0, h.addLink)(1, t[3]), (0, h.addStep)(2, "В графе «Тип идентификатора» выберите «Номер счета»"), (0, h.addRequisites)(3, t[1].html, t[1].link), (0, h.addStep)(4, '<p>После оплаты <b> обязательно</b> нажмите<br> кнопку "Я оплатил", чтобы заявка создалась:</p>')) : ((0, h.addLink)(1, 9 == T ? t[3] : list_bank_url[T]), (0, h.addRequisites)(2, t[1].html, t[1].link), (0, h.addStep)(3, '<p>После оплаты <b> обязательно</b> нажмите<br> кнопку "Я оплатил", чтобы заявка создалась:</p>')), (0, h.showInstructions)(T, t[1].ticket_hash), l()
    }

    function a(t, e) {
        f.default.post("/ticketsproc/add", t).done(function(t) {
            var n = [],
                i = JSON.parse(t);
            if (i[0]) "undefined" != typeof yaCounter38853395 && void 0 !== i[4] && (yaCounter38853395.reachGoal("lead1"), dataCommerce.push({
                ecommerce: {
                    add: {
                        actionField: {
                            id: i[4].ticket,
                            goal_id: "lead1",
                            revenue: i[4].comis
                        },
                        products: [{
                            id: i[4].letter_cod,
                            name: i[4].ps1 + "-to-" + i[4].ps2,
                            brand: i[4].ps2,
                            price: i[4].price,
                            quantity: 1
                        }]
                    }
                }
            })), r(i);
            else {
                var o = !0,
                    a = !1,
                    s = void 0;
                try {
                    for (var l, g = i[Symbol.iterator](); !(o = (l = g.next()).done); o = !0) {
                        var u = l.value;
                        if (u.chps) {
                            var c = null;
                            switch (u.chps) {
                                case 1:
                                    c = "inputAccount";
                                    break;
                                case 2:
                                    c = "outputAccount";
                                    break;
                                case 3:
                                    c = "name";
                                    break;
                                case 4:
                                    c = "captcha";
                                    break;
                                case 5:
                                    c = "email";
                                    break;
                                case 101:
                                    c = "inputUnk";
                                    break;
                                case 102:
                                    c = "outputUnk";
                                    break;
                                case 142:
                                    c = "outputBank";
                                    break;
                                case 301:
                                    c = "inputFullname";
                                    break;
                                case 302:
                                    c = "outputFullname";
                                    break;
                                default:
                                    c = u.chps
                            }
                            c && n.push({
                                field: c,
                                message: u.data
                            })
                        }
                    }
                } catch (t) {
                    a = !0, s = t
                } finally {
                    try {
                        !o && g.return && g.return()
                    } finally {
                        if (a) throw s
                    }
                }
            }
            e && e(n)
        }).fail(function() {
            (0, C.danger)({
                title: "Ошибка!",
                text: 'Нет связи с сервером. Данные могут устареть. Пожалуйста <a href="javascript:location.reload();">обновите страницу</a>'
            }), e && e([])
        })
    }

    function s(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "Ошибка!",
            n = null;
        console.log(t);
        var i = !0,
            o = !1,
            r = void 0;
        try {
            for (var a, s = t[Symbol.iterator](); !(i = (a = s.next()).done); i = !0) {
                var l = a.value;
                if ("globalError" == l.field) {
                    (0, C.danger)({
                        title: e,
                        text: l.message
                    });
                    break
                }
                if (!D[l.field]) break;
                D[l.field].addClass(k).tooltip({
                    title: e,
                    text: l.message,
                    theme: "danger"
                }), (0, w.default)(["input", "output"], l.field) ? D[l.field].tooltip("show") : n || (n = D[l.field])
            }
        } catch (t) {
            o = !0, r = t
        } finally {
            try {
                !i && s.return && s.return()
            } finally {
                if (o) throw r
            }
        }
        n && n.tooltip("show")
    }

    function l() {
        var t = 108e4,
            e = (0, f.default)("#ticketdonetimer");
        M && clearInterval(M), e.removeClass("ticket_done_error"), (0, f.default)("#mmodalInstructionBtn").attr("disabled", !1), e.html("Оплатите заявку в течении <span>18 минут</span>"), M = setInterval(function() {
            var n = Math.floor(t / 1e3 % 60),
                i = Math.floor(t / 1e3 / 60 % 60),
                o = "",
                r = "";
            o = n.toString() + " сек. ", r = i.toString() + " мин. ", e.find("span").html(r + o), (t -= 1e3) < 0 && ((0, f.default)("#mmodalInstructionBtn").attr("disabled", !0), e.addClass("ticket_done_error"), e.html('Время по оплате заявки истекло! Пожалуйста, <a href="javascript:" aria-label="Close" data-dismiss="modal">создайте заявку повторно</a><br> по-актуальному курсу или <br><a href="#" onclick="javascript:jivo_api.open(); return false;">обратитесь в службу поддержки</a> сервиса.'), clearInterval(M))
        }, 1e3)
    }

    function g(t, e) {
        T = t, j = e
    }

    function u(t) {
        if (S && S.length) {
            var e = 1,
                n = 0;
            S.each(function(t, e) {
                var i = (0, f.default)(e);
                i.removeClass(k), i.data("bs.tooltip") && ++n
            }).each(function(i, o) {
                var r = (0, f.default)(o);
                r.data("bs.tooltip") && r.tooltip("destroy", function() {
                    e === n && t && t(), ++e
                })
            }), 0 === n && t && t()
        }
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.startTicketTimer = l, e.setSystem = g, e.clearForm = u, e.default = function() {
        var t = (0, f.default)('[data-exchange-form="submit"]');
        D = {
            email: (0, f.default)('[data-exchange-form="email"]'),
            inputAccount: (0, f.default)('[data-exchange-form="input-account"]'),
            inputFullname: (0, f.default)('[data-exchange-form="input-fullname"]'),
            inputUnk: (0, f.default)('[data-exchange-form="input-unk"]'),
            outputAccount: (0, f.default)('[data-exchange-form="output-account"]'),
            outputFullname: (0, f.default)('[data-exchange-form="output-fullname"]'),
            outputUnk: (0, f.default)('[data-exchange-form="output-unk"]'),
            outputBank: (0, f.default)('[data-exchange-form="output-bank"]'),
            recaptcha: (0, f.default)('[data-exchange-form="captcha"]'),
            agree: (0, f.default)('[data-exchange-form="agree"]'),
            input: (0, f.default)('[data-exchange-form="input"]'),
            output: (0, f.default)('[data-exchange-form="output"]')
        }, E = {
            email: D.email.length ? (0, f.default)("input", D.email) : null,
            inputAccount: (0, f.default)("input", D.inputAccount),
            inputFullname: (0, f.default)("input", D.inputFullname),
            inputUnk: (0, f.default)("input", D.inputUnk),
            outputAccount: (0, f.default)("input", D.outputAccount),
            outputFullname: (0, f.default)("input", D.outputFullname),
            outputUnk: (0, f.default)("input", D.outputUnk),
            outputBank: (0, f.default)("input", D.outputBank),
            recaptcha: function() {
                return (0, f.default)("#g-recaptcha-response")
            },
            agree: (0, f.default)('[data-exchange-field="agree"]'),
            switch: (0, f.default)('[data-exchange-field="switch_monero"]'),
            input: (0, f.default)('[data-exchange-field="input"]'),
            output: (0, f.default)('[data-exchange-field="output"]')
        }, S = (0, f.default)((0, y.default)(D).reduce(function(t, e) {
            return e && e.length && t.push(e[0]), t
        }, []));
        var e = [];
        t.click(function() {
            e = [], E.email && ((0, d.default)(E.email.val()) || e.push({
                field: "email",
                message: "Введите правильный E-mail"
            }));
            var n = function(e) {
                t.prop("disabled", !1).removeClass(x), e.length && s(e), window.grecaptcha && void 0 !== window.recaptchaWidgetId && grecaptcha.reset(window.recaptchaWidgetId)
            };
            u(function() {
                if (t.prop("disabled", !0).addClass(x), e.length) n(e);
                else {
                    var i = function() {
                        a({
                            tickets_num_ps1: parseFloat(E.input.val()),
                            tickets_num_ps2: parseFloat(E.output.val()),
                            bank_account1: E.inputAccount.val(),
                            fio_a: E.inputFullname.val(),
                            unk_a: E.inputUnk.val(),
                            email_log: E.email && E.email.length ? E.email.val() : "",
                            bank_account2: E.outputAccount.val(),
                            fio_b: E.outputFullname.val(),
                            unk_b: E.outputUnk.val(),
                            bank_b: E.outputBank.val(),
                            exchange_rule: +E.agree.prop("checked"),
                            switch_payment_id: +E.switch.prop("checked"),
                            tickets_ps1: T,
                            tickets_ps2: j,
                            rate_v: kursa[T][j].v,
                            rate_s: kursa[T][j].s,
                            rate_t: rate_time,
                            "g-recaptcha-response": E.recaptcha().val()
                        }, n)
                    };
                    if (8 == T) {
                        var o = (0, f.default)("#modalYandexContinue");
                        f.default.post("/ticketsproc/check_yandex_wallet", {
                            wallet: E.inputAccount.val()
                        }).done(function(t) {
                            if ("success" === t.status)
                                if (!1 === t.result) {
                                    var e = (0, f.default)("#modalYandexConfirm");
                                    o.off("click.checkYandex").one("click.checkYandex", function() {
                                        e.one("hidden.bs.modal", function() {
                                            i()
                                        }).modal("hide")
                                    }), e.modal()
                                } else i();
                            else t.message && n && n([{
                                field: "inputAccount",
                                message: t.message
                            }])
                        }).fail(function() {
                            (0, C.danger)({
                                title: "Ошибка!",
                                text: "Не удалось создать запрос. Возможно у вас проблемы с интернетом."
                            }), n && n([])
                        })
                    } else i()
                }
            })
        });
        var n = E,
            i = (n.input, n.output, o(n, ["input", "output"]));
        (0, f.default)((0, y.default)(i).reduce(function(t, e) {
            return e && e.length && t.push(e[0]), t
        }, [])).focus(function() {
            var t = {
                tickets_ps1: T,
                tickets_ps2: j,
                tickets_num_ps1: parseFloat(E.input.val()),
                tickets_num_ps2: parseFloat(E.output.val())
            };
        }), (0, f.default)("#modalVer1ToVer2").click(function() {
            (0, f.default)("#modalVer1").one("hidden.bs.modal", function() {
                (0, f.default)("#modalVer2").modal()
            }).modal("hide")
        });
        var r = '[data-toggle="moreDataToggle"]';
        (0, f.default)(document).on("click", r, function() {
            (0, f.default)(r).hasClass("modal_1yMAA") ? ((0, f.default)(r).removeClass("modal_1yMAA"), (0, f.default)(".modal_1yMMX").hide(), (0, f.default)(r).text("Проверьте данные реквизитов обмена")) : ((0, f.default)(r).addClass("modal_1yMAA"), (0, f.default)(".modal_1yMMX").show(), (0, f.default)(r).text("Скрыть данные реквизитов обмена"))
        })
    };
    var c = n(56),
        d = i(c),
        A = n(0),
        f = i(A),
        C = n(1),
        I = n(53),
        p = i(I),
        h = n(12),
        m = n(6),
        v = n(8),
        y = i(v),
        b = n(7),
        w = i(b),
        x = (n(5), "loading"),
        k = "danger",
        S = null,
        E = {},
        D = {},
        T = null,
        j = null,
        M = null
}, function(t, e, n) {
    "use strict";

    function i(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }

    function o() {
        j || (j = (0, m.default)("#modalInstruction"), N = (0, m.default)("#modalInstructionSteps"), R = (0, m.default)("#modalInstructionDialog"), F = (0, m.default)("#mmodalInstructionBtn"))
    }

    function r() {
        M || (M = (0, m.default)("#modalRedirect"), O = (0, m.default)("#modalBodyRequisites"))
    }

    function a(t, e) {
        return function(n) {
            var i = (0, m.default)("#instuctionErrorContainer", R),
                o = (0, m.default)("#instuctionErrorContainer", R),
                r = (0, m.default)("#modalSuccessPayment"),
                a = (0, m.default)("#modalSuccessPaymentMessage"),
                s = [];
            if (i.hide(), (0, k.default)([2, 15, 24, 39, 41], t)) {
                var l = (0, m.default)('input[data-collection-input="number"]', N);
                if (2 == t) {
                    var g = (0, m.default)('input[data-collection-input="code"]', N);
                    l.each(function(t, e) {
                        var n = (0, m.default)(e).val(),
                            i = g.eq(t).val();
                        s.push(n + "____" + i)
                    })
                } else l.each(function(t, e) {
                    var n = (0, m.default)(e).val();
                    s.push(n)
                })
            }
            "undefined" != typeof yaCounter38853395 && yaCounter38853395.reachGoal("client1");
            var u = (0, m.default)(n.currentTarget);
            u.prop("disabled", !0).addClass(E);
            var c = function() {
                u.prop("disabled", !1).removeClass(E)
            };
            m.default.post("/ticketsproc/add_to_base", {
                i_paid_ticket: e,
                check_number_pin: s.join("||||")
            }).done(function(t) {
                c();
                var e = JSON.parse(t);
                if (e[0]) j.one("hidden.bs.modal", function() {
                    a.html(e[1]), r.modal(), "undefined" != typeof yaCounter38853395 && (yaCounter38853395.setUserID(e[3] ? e[3] : (0, m.default)('[data-exchange-form="email"]').length ? (0, m.default)((0, m.default)('[data-exchange-form="email"] input')) : null), yaCounter38853395.params(e[2]), dataCommerce.push({
                        ecommerce: {
                            purchase: {
                                actionField: {
                                    id: e[2].ticket,
                                    goal_id: "client1",
                                    revenue: e[2].comis
                                },
                                products: [{
                                    id: e[2].letter_cod,
                                    name: e[2].ps1 + "-to-" + e[2].ps2,
                                    brand: e[2].ps2,
                                    price: e[2].price,
                                    quantity: 1
                                }]
                            }
                        }
                    }))
                }).modal("hide");
                else {
                    for (var n = "", s = 1; s < e.length; s++) n += "<li>" + e[s] + "</li>";
                    i.show(), o.html(n)
                }
            }).fail(function(t) {
                c(), j.modal("hide"), (0, S.danger)({
                    title: "Ошибка!",
                    text: 'Нет связи с сервером. Данные могут устареть. Пожалуйста <a href="javascript:location.reload();">обновите страницу</a>'
                })
            })
        }
    }

    function s(t, e) {
        var n = (0, m.default)(L.step(t, e));
        return W.push(n), n
    }

    function l(t) {
        var e = (0, m.default)(L.top2(t, (t.numberIn ? L.topItem(t.typeWalletIn, t.numberIn) : "") + (t.fioIn ? L.topItem("ФИО отправителя:", t.fioIn) : "") + (t.numberOut ? L.topItem(t.typeWalletOut, t.numberOut) : "") + (t.fioOut ? L.topItem("ФИО получателя:", t.fioOut) : "")));
        return W.push(e), e
    }

    function g(t, e, n) {
        var i = s(t, L.requisites(e, n ? L.linkInstruction(n) : ""));
        (0, m.default)("[data-clipboard-target]", i).each(function() {
            new w.default(this)
        })
    }

    function u(t, e) {
        s(t, L.link(e))
    }

    function c(t, e) {
        var n = s(t, L.eVoucher(e));
        (0, y.default)(n)
    }

    function d(t, e) {
        var n = s(t, L.btce(e));
        (0, y.default)(n)
    }

    function A(t, e) {
        var n = s(t, L.btcerur(e));
        (0, y.default)(n)
    }

    function f(t, e) {
        var n = s(t, L.exmo(e));
        (0, y.default)(n)
    }

    function C(t, e) {
        var n = s(t, L.exmoRub(e));
        (0, y.default)(n)
    }

    function I(t, e) {
        o(), (0, k.default)([2, 15, 24, 39, 41], parseInt(t, 10)) ? R.attr("class", T) : R.attr("class", D), N.html(""), W.forEach(function(t) {
            N.append(t)
        }), W = [], F.off("click.exchange").on("click.exchange", a(parseInt(t, 10), e)), j.modal()
    }

    function p() {
        r(), O.html(""), W.forEach(function(t) {
            O.append(t)
        }), W = []
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.addStep = s, e.addTopContent = l, e.addRequisites = g, e.addLink = u, e.addCollectionEVoucher = c, e.addCollectionBtce = d, e.addCollectionBtceRur = A, e.addCollectionExmo = f, e.addCollectionExmoRub = C, e.showInstructions = I, e.showRequisites = p;
    var h = n(0),
        m = i(h),
        v = n(50),
        y = i(v),
        b = n(14),
        w = i(b),
        x = n(7),
        k = i(x),
        S = n(1),
        E = "loading",
        D = "modal_1s3",
        T = "modal_2WK",
        j = null,
        M = null,
        N = null,
        O = null,
        R = null,
        F = null,
        W = [],
        L = {
            step: function(t, e) {
                return '\n    <div class="modal_3dm">\n      <div class="modal_ADt">\n        <div class="modal_YiD">' + t + '</div>\n      </div>\n      <div class="modal_3ts">\n        ' + e + "\n      </div>\n    </div>\n  "
            },
            link: function(t) {
                return '\n    <p>Перейдите на сайт банка по нашей ссылке:</p>\n    <a\n      href="' + t + '" target="_blank"\n      rel="noopener noreferrer" class="buttons_1jS"\n    >\n      Перейти на сайт\n      <span class="buttons_2z8">\n          <span class="buttons_vsf"></span>\n      </span>\n    </a>\n  '
            },
            top: function(t) {
                return '\n    <div>\n      <div class="modal_1yL modal_1yMiN">\n        ' + t + "\n      </div>\n    </div>\n    </div>\n  "
            },
            top2: function(t, e) {
                return '\n    <div class="modal_1yMuN">\n      <div id="ticketdonetimer">\n        Оплатите заявку в течении <span>18 минут</span>\n      </div>\n      <div class="lk_2n- modal_1yMuX">\n        <div class="lk_2iW">\n          <div class="lk_33k">\n            <span class="' + t.classIn + '"></span>\n          </div>\n          <div class="lk_1sm">\n            <div class="lk_GUL">\n              ' + t.sumIn + " " + t.signIn + '\n            </div>\n            <div class="lk_3L2">\n              ' + t.nameIn + '\n            </div>\n          </div>\n        </div>\n        <div class="lk_zu3">\n          <span class="lk_1qf" style=""></span>\n        </div>\n        <div class="lk_2iW">\n          <div class="lk_33k">\n            <span class="' + t.classOut + '"></span>\n          </div>\n          <div class="lk_1sm">\n            <div class="lk_GUL">' + t.sumOut + " " + t.signOut + '</div>\n            <div class="lk_3L2">' + t.nameOut + '</div>\n          </div>\n        </div>\n      </div>\n      <div style="text-align: center; margin-top: 8px;">\n        <button class="lk_36u" data-toggle="moreDataToggle" style="color: #c3bbae;">Проверьте данные реквизитов обмена</button>\n      </div>\n      <div class="lk_2n- modal_1yMuX modal_1yMMX" style="">\n        <div class="modal_1yL modal_1yMiN">\n          <div class="modal_21h">\n            <div class="modal_32i">Ваши реквизиты обмена</div>\n          </div>\n          ' + e + '\n          <div style="text-align: left;">\n            <button class="lk_36u" data-dismiss="modal" aria-label="Close" style="color: #c3bbae;padding: 0px;">Изменить реквизиты</button>\n          </div>\n        </div>\n      </div>\n    </div>\n  '
            },
            topItem: function(t, e) {
                return '\n    <div class="modal_21h">\n      <div class="modal_3a_">' + t + '</div>\n      <div class="modal_32i">' + e + "</div>\n    </div>\n  "
            },
            topSum: function(t, e) {
                return '\n    <div class="modal_21h">\n      <div class="modal_3a_">Сумма получения:</div>\n      <div class="modal_32i">' + t + " <span>" + e + "</span></div>\n    </div>\n  "
            },
            requisites: function(t, e) {
                return '\n    <p>Сделать перевод по реквизитам:</p>\n    <div class="modal_1yL">\n      ' + t + "\n    </div>\n    " + e + "\n  "
            },
            linkInstruction: function(t) {
                return '\n    <p>\n      <a href="' + t + '" target="_blank" rel="noopener noreferrer">\n        Помощь: Инструкция по переводу\n      </a>\n    </p>\n  '
            },
            eVoucher: function(t) {
                return "\n    <p>\n      Перевести e-Voucher на сумму <strong>" + t + '</strong> $\n    </p>\n    <div data-form="collection" data-prototype="<div data-collection=\'row\' class=\'form_3P0\'>\n        <label class=\'form_NYE\'>\n          <div data-toggle=\'floatLabel\' class=\'form_2Gw\'>\n            <span class=\'form_3Mi\'>Введите номер чека</span>\n            <input\n              name=\'checks[__id__][number]\' class=\'form_2nL\'\n              data-collection-input=\'number\'\n            >\n          </div>\n        </label>\n        <label class=\'form_NYE\'>\n          <div data-toggle=\'floatLabel\' class=\'form_2Gw\'>\n            <span class=\'form_3Mi\'>Введите пин-код</span>\n            <input\n              name=\'checks[__id__][code]\' class=\'form_2nL\'\n              data-collection-input=\'code\'\n            >\n          </div>\n        </label>\n        <button data-collection=\'remove\' type=\'button\' class=\'form_1_p\'>\n          <span class=\'form_12u\'></span>\n        </button>\n      </div>"\n    >\n      <div class="form_3P0">\n        <label class="form_NYE">\n          <div data-toggle="floatLabel" class="form_2Gw">\n            <span class="form_3Mi">Введите номер чека</span>\n            <input\n              name="checks[0][number]" class="form_2nL"\n              data-collection-input="number"\n            >\n          </div>\n        </label>\n        <label class="form_NYE">\n          <div data-toggle="floatLabel" class="form_2Gw">\n            <span class="form_3Mi">Введите пин-код</span>\n            <input\n              name="checks[0][code]" class="form_2nL"\n              data-collection-input="code"\n            >\n          </div>\n        </label>\n      </div>\n      <div class="form_1tq">\n        <button data-collection="add" type="button" class="buttons_VLE">\n          <span class="buttons_1Y2"></span>Добавить еще один чек\n        </button>\n      </div>\n    </div>\n  '
            },
            btce: function(t) {
                return "\n    <p>\n      Перевести код WEX USD на сумму <strong>" + t + '</strong> $\n    </p>\n    <div data-form="collection" data-prototype="<div data-collection=\'row\' class=\'form_3P0\'>\n        <label class=\'form_NYE\'>\n          <div data-toggle=\'floatLabel\' class=\'form_2Gw\'>\n            <span class=\'form_3Mi\'>Введите код</span>\n            <input\n              name=\'checks[__id__][number]\' class=\'form_2nL\'\n              data-collection-input=\'number\'\n            >\n          </div>\n        </label>\n        <button data-collection=\'remove\' type=\'button\' class=\'form_1_p\'>\n          <span class=\'form_12u\'></span>\n        </button>\n      </div>"\n    >\n      <div class="form_3P0">\n        <label class="form_NYE">\n          <div data-toggle="floatLabel" class="form_2Gw">\n            <span class="form_3Mi">Введите код</span>\n            <input\n              name="checks[0][number]" class="form_2nL"\n              data-collection-input="number"\n            >\n          </div>\n        </label>\n      </div>\n      <div class="form_1tq">\n        <button data-collection="add" type="button" class="buttons_VLE">\n          <span class="buttons_1Y2"></span>Добавить еще код\n        </button>\n      </div>\n    </div>\n  '
            },
            btcerur: function(t) {
                return "\n    <p>\n      Перевести код WEX RUR на сумму <strong>" + t + '</strong> руб.\n    </p>\n    <div data-form="collection" data-prototype="<div data-collection=\'row\' class=\'form_3P0\'>\n        <label class=\'form_NYE\'>\n          <div data-toggle=\'floatLabel\' class=\'form_2Gw\'>\n            <span class=\'form_3Mi\'>Введите код</span>\n            <input\n              name=\'checks[__id__][number]\' class=\'form_2nL\'\n              data-collection-input=\'number\'\n            >\n          </div>\n        </label>\n        <button data-collection=\'remove\' type=\'button\' class=\'form_1_p\'>\n          <span class=\'form_12u\'></span>\n        </button>\n      </div>"\n    >\n      <div class="form_3P0">\n        <label class="form_NYE">\n          <div data-toggle="floatLabel" class="form_2Gw">\n            <span class="form_3Mi">Введите код</span>\n            <input\n              name="checks[0][number]" class="form_2nL"\n              data-collection-input="number"\n            >\n          </div>\n        </label>\n      </div>\n      <div class="form_1tq">\n        <button data-collection="add" type="button" class="buttons_VLE">\n          <span class="buttons_1Y2"></span>Добавить еще код\n        </button>\n      </div>\n    </div>\n  '
            },
            exmo: function(t) {
                return "\n    <p>\n      Перевести код Exmo USD на сумму <strong>" + t + '</strong> usd\n    </p>\n    <div data-form="collection" data-prototype="<div data-collection=\'row\' class=\'form_3P0\'>\n        <label class=\'form_NYE\'>\n          <div data-toggle=\'floatLabel\' class=\'form_2Gw\'>\n            <span class=\'form_3Mi\'>Введите код</span>\n            <input\n              name=\'checks[__id__][number]\' class=\'form_2nL\'\n              data-collection-input=\'number\'\n            >\n          </div>\n        </label>\n        <button data-collection=\'remove\' type=\'button\' class=\'form_1_p\'>\n          <span class=\'form_12u\'></span>\n        </button>\n      </div>"\n    >\n      <div class="form_3P0">\n        <label class="form_NYE">\n          <div data-toggle="floatLabel" class="form_2Gw">\n            <span class="form_3Mi">Введите код</span>\n            <input\n              name="checks[0][number]" class="form_2nL"\n              data-collection-input="number"\n            >\n          </div>\n        </label>\n      </div>\n      <div class="form_1tq">\n        <button data-collection="add" type="button" class="buttons_VLE">\n          <span class="buttons_1Y2"></span>Добавить еще код\n        </button>\n      </div>\n    </div>\n  '
            },
            exmoRub: function(t) {
                return "\n    <p>\n      Перевести код Exmo RUB на сумму <strong>" + t + '</strong> руб.\n    </p>\n    <div data-form="collection" data-prototype="<div data-collection=\'row\' class=\'form_3P0\'>\n        <label class=\'form_NYE\'>\n          <div data-toggle=\'floatLabel\' class=\'form_2Gw\'>\n            <span class=\'form_3Mi\'>Введите код</span>\n            <input\n              name=\'checks[__id__][number]\' class=\'form_2nL\'\n              data-collection-input=\'number\'\n            >\n          </div>\n        </label>\n        <button data-collection=\'remove\' type=\'button\' class=\'form_1_p\'>\n          <span class=\'form_12u\'></span>\n        </button>\n      </div>"\n    >\n      <div class="form_3P0">\n        <label class="form_NYE">\n          <div data-toggle="floatLabel" class="form_2Gw">\n            <span class="form_3Mi">Введите код</span>\n            <input\n              name="checks[0][number]" class="form_2nL"\n              data-collection-input="number"\n            >\n          </div>\n        </label>\n      </div>\n      <div class="form_1tq">\n        <button data-collection="add" type="button" class="buttons_VLE">\n          <span class="buttons_1Y2"></span>Добавить еще код\n        </button>\n      </div>\n    </div>\n  '
            }
        }
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = function() {
        if (null === r && (r = (0, o.default)('[data-block="main"]')), r.length && (r.height("auto"), !((0, o.default)(window).width() <= 990))) {
            var t = 0;
            return r.each(function() {
                var e = (0, o.default)(this),
                    n = e.height();
                n > t && (t = n)
            }), r.height(t), r.eq(0).outerHeight(!0)
        }
    };
    var i = n(0),
        o = function(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }(i),
        r = null
}, function(t, e, n) {
    var i, o, r;
    ! function(a, s) {
        o = [t, n(58), n(64), n(62)], i = s, void 0 !== (r = "function" == typeof i ? i.apply(e, o) : i) && (t.exports = r)
    }(0, function(t, e, n, i) {
        "use strict";

        function o(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }

        function r(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }

        function a(t, e) {
            if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !e || "object" != typeof e && "function" != typeof e ? t : e
        }

        function s(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
        }

        function l(t, e) {
            var n = "data-clipboard-" + t;
            if (e.hasAttribute(n)) return e.getAttribute(n)
        }
        var g = o(e),
            u = o(n),
            c = o(i),
            d = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            } : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            },
            A = function() {
                function t(t, e) {
                    for (var n = 0; n < e.length; n++) {
                        var i = e[n];
                        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
                    }
                }
                return function(e, n, i) {
                    return n && t(e.prototype, n), i && t(e, i), e
                }
            }(),
            f = function(t) {
                function e(t, n) {
                    r(this, e);
                    var i = a(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this));
                    return i.resolveOptions(n), i.listenClick(t), i
                }
                return s(e, t), A(e, [{
                    key: "resolveOptions",
                    value: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        this.action = "function" == typeof t.action ? t.action : this.defaultAction, this.target = "function" == typeof t.target ? t.target : this.defaultTarget, this.text = "function" == typeof t.text ? t.text : this.defaultText, this.container = "object" === d(t.container) ? t.container : document.body
                    }
                }, {
                    key: "listenClick",
                    value: function(t) {
                        var e = this;
                        this.listener = (0, c.default)(t, "click", function(t) {
                            return e.onClick(t)
                        })
                    }
                }, {
                    key: "onClick",
                    value: function(t) {
                        var e = t.delegateTarget || t.currentTarget;
                        this.clipboardAction && (this.clipboardAction = null), this.clipboardAction = new g.default({
                            action: this.action(e),
                            target: this.target(e),
                            text: this.text(e),
                            container: this.container,
                            trigger: e,
                            emitter: this
                        })
                    }
                }, {
                    key: "defaultAction",
                    value: function(t) {
                        return l("action", t)
                    }
                }, {
                    key: "defaultTarget",
                    value: function(t) {
                        var e = l("target", t);
                        if (e) return document.querySelector(e)
                    }
                }, {
                    key: "defaultText",
                    value: function(t) {
                        return l("text", t)
                    }
                }, {
                    key: "destroy",
                    value: function() {
                        this.listener.destroy(), this.clipboardAction && (this.clipboardAction.destroy(), this.clipboardAction = null)
                    }
                }], [{
                    key: "isSupported",
                    value: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ["copy", "cut"],
                            e = "string" == typeof t ? [t] : t,
                            n = !!document.queryCommandSupported;
                        return e.forEach(function(t) {
                            n = n && !!document.queryCommandSupported(t)
                        }), n
                    }
                }]), e
            }(u.default);
        t.exports = f
    })
}, function(t, e, n) {
    var i = !1;
    ! function(t) {
        "use strict";
        "function" == typeof i && i.amd ? i(["jquery", "jquery-ui/ui/widget"], t) : t(window.jQuery)
    }(function(t) {
        "use strict";

        function e(e) {
            var n = "dragover" === e;
            return function(i) {
                i.dataTransfer = i.originalEvent && i.originalEvent.dataTransfer;
                var o = i.dataTransfer;
                o && -1 !== t.inArray("Files", o.types) && !1 !== this._trigger(e, t.Event(e, {
                    delegatedEvent: i
                })) && (i.preventDefault(), n && (o.dropEffect = "copy"))
            }
        }
        t.support.fileInput = !(new RegExp("(Android (1\\.[0156]|2\\.[01]))|(Windows Phone (OS 7|8\\.0))|(XBLWP)|(ZuneWP)|(WPDesktop)|(w(eb)?OSBrowser)|(webOS)|(Kindle/(1\\.0|2\\.[05]|3\\.0))").test(window.navigator.userAgent) || t('<input type="file"/>').prop("disabled")), t.support.xhrFileUpload = !(!window.ProgressEvent || !window.FileReader), t.support.xhrFormDataFileUpload = !!window.FormData, t.support.blobSlice = window.Blob && (Blob.prototype.slice || Blob.prototype.webkitSlice || Blob.prototype.mozSlice), t.widget("blueimp.fileupload", {
            options: {
                dropZone: t(document),
                pasteZone: void 0,
                fileInput: void 0,
                replaceFileInput: !0,
                paramName: void 0,
                singleFileUploads: !0,
                limitMultiFileUploads: void 0,
                limitMultiFileUploadSize: void 0,
                limitMultiFileUploadSizeOverhead: 512,
                sequentialUploads: !1,
                limitConcurrentUploads: void 0,
                forceIframeTransport: !1,
                redirect: void 0,
                redirectParamName: void 0,
                postMessage: void 0,
                multipart: !0,
                maxChunkSize: void 0,
                uploadedBytes: void 0,
                recalculateProgress: !0,
                progressInterval: 100,
                bitrateInterval: 500,
                autoUpload: !0,
                messages: {
                    uploadedBytes: "Uploaded bytes exceed file size"
                },
                i18n: function(e, n) {
                    return e = this.messages[e] || e.toString(), n && t.each(n, function(t, n) {
                        e = e.replace("{" + t + "}", n)
                    }), e
                },
                formData: function(t) {
                    return t.serializeArray()
                },
                add: function(e, n) {
                    if (e.isDefaultPrevented()) return !1;
                    (n.autoUpload || !1 !== n.autoUpload && t(this).fileupload("option", "autoUpload")) && n.process().done(function() {
                        n.submit()
                    })
                },
                processData: !1,
                contentType: !1,
                cache: !1,
                timeout: 0
            },
            _specialOptions: ["fileInput", "dropZone", "pasteZone", "multipart", "forceIframeTransport"],
            _blobSlice: t.support.blobSlice && function() {
                return (this.slice || this.webkitSlice || this.mozSlice).apply(this, arguments)
            },
            _BitrateTimer: function() {
                this.timestamp = Date.now ? Date.now() : (new Date).getTime(), this.loaded = 0, this.bitrate = 0, this.getBitrate = function(t, e, n) {
                    var i = t - this.timestamp;
                    return (!this.bitrate || !n || i > n) && (this.bitrate = (e - this.loaded) * (1e3 / i) * 8, this.loaded = e, this.timestamp = t), this.bitrate
                }
            },
            _isXHRUpload: function(e) {
                return !e.forceIframeTransport && (!e.multipart && t.support.xhrFileUpload || t.support.xhrFormDataFileUpload)
            },
            _getFormData: function(e) {
                var n;
                return "function" === t.type(e.formData) ? e.formData(e.form) : t.isArray(e.formData) ? e.formData : "object" === t.type(e.formData) ? (n = [], t.each(e.formData, function(t, e) {
                    n.push({
                        name: t,
                        value: e
                    })
                }), n) : []
            },
            _getTotal: function(e) {
                var n = 0;
                return t.each(e, function(t, e) {
                    n += e.size || 1
                }), n
            },
            _initProgressObject: function(e) {
                var n = {
                    loaded: 0,
                    total: 0,
                    bitrate: 0
                };
                e._progress ? t.extend(e._progress, n) : e._progress = n
            },
            _initResponseObject: function(t) {
                var e;
                if (t._response)
                    for (e in t._response) t._response.hasOwnProperty(e) && delete t._response[e];
                else t._response = {}
            },
            _onProgress: function(e, n) {
                if (e.lengthComputable) {
                    var i, o = Date.now ? Date.now() : (new Date).getTime();
                    if (n._time && n.progressInterval && o - n._time < n.progressInterval && e.loaded !== e.total) return;
                    n._time = o, i = Math.floor(e.loaded / e.total * (n.chunkSize || n._progress.total)) + (n.uploadedBytes || 0), this._progress.loaded += i - n._progress.loaded, this._progress.bitrate = this._bitrateTimer.getBitrate(o, this._progress.loaded, n.bitrateInterval), n._progress.loaded = n.loaded = i, n._progress.bitrate = n.bitrate = n._bitrateTimer.getBitrate(o, i, n.bitrateInterval), this._trigger("progress", t.Event("progress", {
                        delegatedEvent: e
                    }), n), this._trigger("progressall", t.Event("progressall", {
                        delegatedEvent: e
                    }), this._progress)
                }
            },
            _initProgressListener: function(e) {
                var n = this,
                    i = e.xhr ? e.xhr() : t.ajaxSettings.xhr();
                i.upload && (t(i.upload).bind("progress", function(t) {
                    var i = t.originalEvent;
                    t.lengthComputable = i.lengthComputable, t.loaded = i.loaded, t.total = i.total, n._onProgress(t, e)
                }), e.xhr = function() {
                    return i
                })
            },
            _isInstanceOf: function(t, e) {
                return Object.prototype.toString.call(e) === "[object " + t + "]"
            },
            _initXHRData: function(e) {
                var n, i = this,
                    o = e.files[0],
                    r = e.multipart || !t.support.xhrFileUpload,
                    a = "array" === t.type(e.paramName) ? e.paramName[0] : e.paramName;
                e.headers = t.extend({}, e.headers), e.contentRange && (e.headers["Content-Range"] = e.contentRange), r && !e.blob && this._isInstanceOf("File", o) || (e.headers["Content-Disposition"] = 'attachment; filename="' + encodeURI(o.uploadName || o.name) + '"'), r ? t.support.xhrFormDataFileUpload && (e.postMessage ? (n = this._getFormData(e), e.blob ? n.push({
                    name: a,
                    value: e.blob
                }) : t.each(e.files, function(i, o) {
                    n.push({
                        name: "array" === t.type(e.paramName) && e.paramName[i] || a,
                        value: o
                    })
                })) : (i._isInstanceOf("FormData", e.formData) ? n = e.formData : (n = new FormData, t.each(this._getFormData(e), function(t, e) {
                    n.append(e.name, e.value)
                })), e.blob ? n.append(a, e.blob, o.uploadName || o.name) : t.each(e.files, function(o, r) {
                    (i._isInstanceOf("File", r) || i._isInstanceOf("Blob", r)) && n.append("array" === t.type(e.paramName) && e.paramName[o] || a, r, r.uploadName || r.name)
                })), e.data = n) : (e.contentType = o.type || "application/octet-stream", e.data = e.blob || o), e.blob = null
            },
            _initIframeSettings: function(e) {
                var n = t("<a></a>").prop("href", e.url).prop("host");
                e.dataType = "iframe " + (e.dataType || ""), e.formData = this._getFormData(e), e.redirect && n && n !== location.host && e.formData.push({
                    name: e.redirectParamName || "redirect",
                    value: e.redirect
                })
            },
            _initDataSettings: function(t) {
                this._isXHRUpload(t) ? (this._chunkedUpload(t, !0) || (t.data || this._initXHRData(t), this._initProgressListener(t)), t.postMessage && (t.dataType = "postmessage " + (t.dataType || ""))) : this._initIframeSettings(t)
            },
            _getParamName: function(e) {
                var n = t(e.fileInput),
                    i = e.paramName;
                return i ? t.isArray(i) || (i = [i]) : (i = [], n.each(function() {
                    for (var e = t(this), n = e.prop("name") || "files[]", o = (e.prop("files") || [1]).length; o;) i.push(n), o -= 1
                }), i.length || (i = [n.prop("name") || "files[]"])), i
            },
            _initFormSettings: function(e) {
                e.form && e.form.length || (e.form = t(e.fileInput.prop("form")), e.form.length || (e.form = t(this.options.fileInput.prop("form")))), e.paramName = this._getParamName(e), e.url || (e.url = e.form.prop("action") || location.href), e.type = (e.type || "string" === t.type(e.form.prop("method")) && e.form.prop("method") || "").toUpperCase(), "POST" !== e.type && "PUT" !== e.type && "PATCH" !== e.type && (e.type = "POST"), e.formAcceptCharset || (e.formAcceptCharset = e.form.attr("accept-charset"))
            },
            _getAJAXSettings: function(e) {
                var n = t.extend({}, this.options, e);
                return this._initFormSettings(n), this._initDataSettings(n), n
            },
            _getDeferredState: function(t) {
                return t.state ? t.state() : t.isResolved() ? "resolved" : t.isRejected() ? "rejected" : "pending"
            },
            _enhancePromise: function(t) {
                return t.success = t.done, t.error = t.fail, t.complete = t.always, t
            },
            _getXHRPromise: function(e, n, i) {
                var o = t.Deferred(),
                    r = o.promise();
                return n = n || this.options.context || r, !0 === e ? o.resolveWith(n, i) : !1 === e && o.rejectWith(n, i), r.abort = o.promise, this._enhancePromise(r)
            },
            _addConvenienceMethods: function(e, n) {
                var i = this,
                    o = function(e) {
                        return t.Deferred().resolveWith(i, e).promise()
                    };
                n.process = function(e, r) {
                    return (e || r) && (n._processQueue = this._processQueue = (this._processQueue || o([this])).then(function() {
                        return n.errorThrown ? t.Deferred().rejectWith(i, [n]).promise() : o(arguments)
                    }).then(e, r)), this._processQueue || o([this])
                }, n.submit = function() {
                    return "pending" !== this.state() && (n.jqXHR = this.jqXHR = !1 !== i._trigger("submit", t.Event("submit", {
                        delegatedEvent: e
                    }), this) && i._onSend(e, this)), this.jqXHR || i._getXHRPromise()
                }, n.abort = function() {
                    return this.jqXHR ? this.jqXHR.abort() : (this.errorThrown = "abort", i._trigger("fail", null, this), i._getXHRPromise(!1))
                }, n.state = function() {
                    return this.jqXHR ? i._getDeferredState(this.jqXHR) : this._processQueue ? i._getDeferredState(this._processQueue) : void 0
                }, n.processing = function() {
                    return !this.jqXHR && this._processQueue && "pending" === i._getDeferredState(this._processQueue)
                }, n.progress = function() {
                    return this._progress
                }, n.response = function() {
                    return this._response
                }
            },
            _getUploadedBytes: function(t) {
                var e = t.getResponseHeader("Range"),
                    n = e && e.split("-"),
                    i = n && n.length > 1 && parseInt(n[1], 10);
                return i && i + 1
            },
            _chunkedUpload: function(e, n) {
                e.uploadedBytes = e.uploadedBytes || 0;
                var i, o, r = this,
                    a = e.files[0],
                    s = a.size,
                    l = e.uploadedBytes,
                    g = e.maxChunkSize || s,
                    u = this._blobSlice,
                    c = t.Deferred(),
                    d = c.promise();
                return !(!(this._isXHRUpload(e) && u && (l || ("function" === t.type(g) ? g(e) : g) < s)) || e.data) && (!!n || (l >= s ? (a.error = e.i18n("uploadedBytes"), this._getXHRPromise(!1, e.context, [null, "error", a.error])) : (o = function() {
                    var n = t.extend({}, e),
                        d = n._progress.loaded;
                    n.blob = u.call(a, l, l + ("function" === t.type(g) ? g(n) : g), a.type), n.chunkSize = n.blob.size, n.contentRange = "bytes " + l + "-" + (l + n.chunkSize - 1) + "/" + s, r._initXHRData(n), r._initProgressListener(n), i = (!1 !== r._trigger("chunksend", null, n) && t.ajax(n) || r._getXHRPromise(!1, n.context)).done(function(i, a, g) {
                        l = r._getUploadedBytes(g) || l + n.chunkSize, d + n.chunkSize - n._progress.loaded && r._onProgress(t.Event("progress", {
                            lengthComputable: !0,
                            loaded: l - n.uploadedBytes,
                            total: l - n.uploadedBytes
                        }), n), e.uploadedBytes = n.uploadedBytes = l, n.result = i, n.textStatus = a, n.jqXHR = g, r._trigger("chunkdone", null, n), r._trigger("chunkalways", null, n), l < s ? o() : c.resolveWith(n.context, [i, a, g])
                    }).fail(function(t, e, i) {
                        n.jqXHR = t, n.textStatus = e, n.errorThrown = i, r._trigger("chunkfail", null, n), r._trigger("chunkalways", null, n), c.rejectWith(n.context, [t, e, i])
                    })
                }, this._enhancePromise(d), d.abort = function() {
                    return i.abort()
                }, o(), d)))
            },
            _beforeSend: function(t, e) {
                0 === this._active && (this._trigger("start"), this._bitrateTimer = new this._BitrateTimer, this._progress.loaded = this._progress.total = 0, this._progress.bitrate = 0), this._initResponseObject(e), this._initProgressObject(e), e._progress.loaded = e.loaded = e.uploadedBytes || 0, e._progress.total = e.total = this._getTotal(e.files) || 1, e._progress.bitrate = e.bitrate = 0, this._active += 1, this._progress.loaded += e.loaded, this._progress.total += e.total
            },
            _onDone: function(e, n, i, o) {
                var r = o._progress.total,
                    a = o._response;
                o._progress.loaded < r && this._onProgress(t.Event("progress", {
                    lengthComputable: !0,
                    loaded: r,
                    total: r
                }), o), a.result = o.result = e, a.textStatus = o.textStatus = n, a.jqXHR = o.jqXHR = i, this._trigger("done", null, o)
            },
            _onFail: function(t, e, n, i) {
                var o = i._response;
                i.recalculateProgress && (this._progress.loaded -= i._progress.loaded, this._progress.total -= i._progress.total), o.jqXHR = i.jqXHR = t, o.textStatus = i.textStatus = e, o.errorThrown = i.errorThrown = n, this._trigger("fail", null, i)
            },
            _onAlways: function(t, e, n, i) {
                this._trigger("always", null, i)
            },
            _onSend: function(e, n) {
                n.submit || this._addConvenienceMethods(e, n);
                var i, o, r, a, s = this,
                    l = s._getAJAXSettings(n),
                    g = function() {
                        return s._sending += 1, l._bitrateTimer = new s._BitrateTimer, i = i || ((o || !1 === s._trigger("send", t.Event("send", {
                            delegatedEvent: e
                        }), l)) && s._getXHRPromise(!1, l.context, o) || s._chunkedUpload(l) || t.ajax(l)).done(function(t, e, n) {
                            s._onDone(t, e, n, l)
                        }).fail(function(t, e, n) {
                            s._onFail(t, e, n, l)
                        }).always(function(t, e, n) {
                            if (s._onAlways(t, e, n, l), s._sending -= 1, s._active -= 1, l.limitConcurrentUploads && l.limitConcurrentUploads > s._sending)
                                for (var i = s._slots.shift(); i;) {
                                    if ("pending" === s._getDeferredState(i)) {
                                        i.resolve();
                                        break
                                    }
                                    i = s._slots.shift()
                                }
                            0 === s._active && s._trigger("stop")
                        })
                    };
                return this._beforeSend(e, l), this.options.sequentialUploads || this.options.limitConcurrentUploads && this.options.limitConcurrentUploads <= this._sending ? (this.options.limitConcurrentUploads > 1 ? (r = t.Deferred(), this._slots.push(r), a = r.then(g)) : (this._sequence = this._sequence.then(g, g), a = this._sequence), a.abort = function() {
                    return o = [void 0, "abort", "abort"], i ? i.abort() : (r && r.rejectWith(l.context, o), g())
                }, this._enhancePromise(a)) : g()
            },
            _onAdd: function(e, n) {
                var i, o, r, a, s = this,
                    l = !0,
                    g = t.extend({}, this.options, n),
                    u = n.files,
                    c = u.length,
                    d = g.limitMultiFileUploads,
                    A = g.limitMultiFileUploadSize,
                    f = g.limitMultiFileUploadSizeOverhead,
                    C = 0,
                    I = this._getParamName(g),
                    p = 0;
                if (!c) return !1;
                if (A && void 0 === u[0].size && (A = void 0), (g.singleFileUploads || d || A) && this._isXHRUpload(g))
                    if (g.singleFileUploads || A || !d)
                        if (!g.singleFileUploads && A)
                            for (r = [], i = [], a = 0; a < c; a += 1) C += u[a].size + f, (a + 1 === c || C + u[a + 1].size + f > A || d && a + 1 - p >= d) && (r.push(u.slice(p, a + 1)), o = I.slice(p, a + 1), o.length || (o = I), i.push(o), p = a + 1, C = 0);
                        else i = I;
                else
                    for (r = [], i = [], a = 0; a < c; a += d) r.push(u.slice(a, a + d)), o = I.slice(a, a + d), o.length || (o = I), i.push(o);
                else r = [u], i = [I];
                return n.originalFiles = u, t.each(r || u, function(o, a) {
                    var g = t.extend({}, n);
                    return g.files = r ? a : [a], g.paramName = i[o], s._initResponseObject(g), s._initProgressObject(g), s._addConvenienceMethods(e, g), l = s._trigger("add", t.Event("add", {
                        delegatedEvent: e
                    }), g)
                }), l
            },
            _replaceFileInput: function(e) {
                var n = e.fileInput,
                    i = n.clone(!0),
                    o = n.is(document.activeElement);
                e.fileInputClone = i, t("<form></form>").append(i)[0].reset(), n.after(i).detach(), o && i.focus(), t.cleanData(n.unbind("remove")), this.options.fileInput = this.options.fileInput.map(function(t, e) {
                    return e === n[0] ? i[0] : e
                }), n[0] === this.element[0] && (this.element = i)
            },
            _handleFileTreeEntry: function(e, n) {
                var i, o = this,
                    r = t.Deferred(),
                    a = [],
                    s = function(t) {
                        t && !t.entry && (t.entry = e), r.resolve([t])
                    },
                    l = function(t) {
                        o._handleFileTreeEntries(t, n + e.name + "/").done(function(t) {
                            r.resolve(t)
                        }).fail(s)
                    },
                    g = function() {
                        i.readEntries(function(t) {
                            t.length ? (a = a.concat(t), g()) : l(a)
                        }, s)
                    };
                return n = n || "", e.isFile ? e._file ? (e._file.relativePath = n, r.resolve(e._file)) : e.file(function(t) {
                    t.relativePath = n, r.resolve(t)
                }, s) : e.isDirectory ? (i = e.createReader(), g()) : r.resolve([]), r.promise()
            },
            _handleFileTreeEntries: function(e, n) {
                var i = this;
                return t.when.apply(t, t.map(e, function(t) {
                    return i._handleFileTreeEntry(t, n)
                })).then(function() {
                    return Array.prototype.concat.apply([], arguments)
                })
            },
            _getDroppedFiles: function(e) {
                e = e || {};
                var n = e.items;
                return n && n.length && (n[0].webkitGetAsEntry || n[0].getAsEntry) ? this._handleFileTreeEntries(t.map(n, function(t) {
                    var e;
                    return t.webkitGetAsEntry ? (e = t.webkitGetAsEntry(), e && (e._file = t.getAsFile()), e) : t.getAsEntry()
                })) : t.Deferred().resolve(t.makeArray(e.files)).promise()
            },
            _getSingleFileInputFiles: function(e) {
                e = t(e);
                var n, i, o = e.prop("webkitEntries") || e.prop("entries");
                if (o && o.length) return this._handleFileTreeEntries(o);
                if (n = t.makeArray(e.prop("files")), n.length) void 0 === n[0].name && n[0].fileName && t.each(n, function(t, e) {
                    e.name = e.fileName, e.size = e.fileSize
                });
                else {
                    if (!(i = e.prop("value"))) return t.Deferred().resolve([]).promise();
                    n = [{
                        name: i.replace(/^.*\\/, "")
                    }]
                }
                return t.Deferred().resolve(n).promise()
            },
            _getFileInputFiles: function(e) {
                return e instanceof t && 1 !== e.length ? t.when.apply(t, t.map(e, this._getSingleFileInputFiles)).then(function() {
                    return Array.prototype.concat.apply([], arguments)
                }) : this._getSingleFileInputFiles(e)
            },
            _onChange: function(e) {
                var n = this,
                    i = {
                        fileInput: t(e.target),
                        form: t(e.target.form)
                    };
                this._getFileInputFiles(i.fileInput).always(function(o) {
                    i.files = o, n.options.replaceFileInput && n._replaceFileInput(i), !1 !== n._trigger("change", t.Event("change", {
                        delegatedEvent: e
                    }), i) && n._onAdd(e, i)
                })
            },
            _onPaste: function(e) {
                var n = e.originalEvent && e.originalEvent.clipboardData && e.originalEvent.clipboardData.items,
                    i = {
                        files: []
                    };
                n && n.length && (t.each(n, function(t, e) {
                    var n = e.getAsFile && e.getAsFile();
                    n && i.files.push(n)
                }), !1 !== this._trigger("paste", t.Event("paste", {
                    delegatedEvent: e
                }), i) && this._onAdd(e, i))
            },
            _onDrop: function(e) {
                e.dataTransfer = e.originalEvent && e.originalEvent.dataTransfer;
                var n = this,
                    i = e.dataTransfer,
                    o = {};
                i && i.files && i.files.length && (e.preventDefault(), this._getDroppedFiles(i).always(function(i) {
                    o.files = i, !1 !== n._trigger("drop", t.Event("drop", {
                        delegatedEvent: e
                    }), o) && n._onAdd(e, o)
                }))
            },
            _onDragOver: e("dragover"),
            _onDragEnter: e("dragenter"),
            _onDragLeave: e("dragleave"),
            _initEventHandlers: function() {
                this._isXHRUpload(this.options) && (this._on(this.options.dropZone, {
                    dragover: this._onDragOver,
                    drop: this._onDrop,
                    dragenter: this._onDragEnter,
                    dragleave: this._onDragLeave
                }), this._on(this.options.pasteZone, {
                    paste: this._onPaste
                })), t.support.fileInput && this._on(this.options.fileInput, {
                    change: this._onChange
                })
            },
            _destroyEventHandlers: function() {
                this._off(this.options.dropZone, "dragenter dragleave dragover drop"), this._off(this.options.pasteZone, "paste"), this._off(this.options.fileInput, "change")
            },
            _destroy: function() {
                this._destroyEventHandlers()
            },
            _setOption: function(e, n) {
                var i = -1 !== t.inArray(e, this._specialOptions);
                i && this._destroyEventHandlers(), this._super(e, n), i && (this._initSpecialOptions(), this._initEventHandlers())
            },
            _initSpecialOptions: function() {
                var e = this.options;
                void 0 === e.fileInput ? e.fileInput = this.element.is('input[type="file"]') ? this.element : this.element.find('input[type="file"]') : e.fileInput instanceof t || (e.fileInput = t(e.fileInput)), e.dropZone instanceof t || (e.dropZone = t(e.dropZone)), e.pasteZone instanceof t || (e.pasteZone = t(e.pasteZone))
            },
            _getRegExp: function(t) {
                var e = t.split("/"),
                    n = e.pop();
                return e.shift(), new RegExp(e.join("/"), n)
            },
            _isRegExpOption: function(e, n) {
                return "url" !== e && "string" === t.type(n) && /^\/.*\/[igm]{0,3}$/.test(n)
            },
            _initDataAttributes: function() {
                var e = this,
                    n = this.options,
                    i = this.element.data();
                t.each(this.element[0].attributes, function(t, o) {
                    var r, a = o.name.toLowerCase();
                    /^data-/.test(a) && (a = a.slice(5).replace(/-[a-z]/g, function(t) {
                        return t.charAt(1).toUpperCase()
                    }), r = i[a], e._isRegExpOption(a, r) && (r = e._getRegExp(r)), n[a] = r)
                })
            },
            _create: function() {
                this._initDataAttributes(), this._initSpecialOptions(), this._slots = [], this._sequence = this._getXHRPromise(!0), this._sending = this._active = 0, this._initProgressObject(this), this._initEventHandlers()
            },
            active: function() {
                return this._active
            },
            progress: function() {
                return this._progress
            },
            add: function(e) {
                var n = this;
                e && !this.options.disabled && (e.fileInput && !e.files ? this._getFileInputFiles(e.fileInput).always(function(t) {
                    e.files = t, n._onAdd(null, e)
                }) : (e.files = t.makeArray(e.files), this._onAdd(null, e)))
            },
            send: function(e) {
                if (e && !this.options.disabled) {
                    if (e.fileInput && !e.files) {
                        var n, i, o = this,
                            r = t.Deferred(),
                            a = r.promise();
                        return a.abort = function() {
                            return i = !0, n ? n.abort() : (r.reject(null, "abort", "abort"), a)
                        }, this._getFileInputFiles(e.fileInput).always(function(t) {
                            if (!i) {
                                if (!t.length) return void r.reject();
                                e.files = t, n = o._onSend(null, e), n.then(function(t, e, n) {
                                    r.resolve(t, e, n)
                                }, function(t, e, n) {
                                    r.reject(t, e, n)
                                })
                            }
                        }), this._enhancePromise(a)
                    }
                    if (e.files = t.makeArray(e.files), e.files.length) return this._onSend(null, e)
                }
                return this._getXHRPromise(!1, e && e.context)
            }
        })
    })
}, function(t, e, n) {
    var i = !1;
    ! function(t) {
        "use strict";
        "function" == typeof i && i.amd ? i(["jquery"], t) : t(window.jQuery)
    }(function(t) {
        "use strict";
        var e = 0,
            n = t,
            i = "parseJSON";
        "JSON" in window && "parse" in JSON && (n = JSON, i = "parse"), t.ajaxTransport("iframe", function(n) {
            if (n.async) {
                var i, o, r, a = n.initialIframeSrc || "javascript:false;";
                return {
                    send: function(s, l) {
                        i = t('<form style="display:none;"></form>'), i.attr("accept-charset", n.formAcceptCharset), r = /\?/.test(n.url) ? "&" : "?", "DELETE" === n.type ? (n.url = n.url + r + "_method=DELETE", n.type = "POST") : "PUT" === n.type ? (n.url = n.url + r + "_method=PUT", n.type = "POST") : "PATCH" === n.type && (n.url = n.url + r + "_method=PATCH", n.type = "POST"), e += 1, o = t('<iframe src="' + a + '" name="iframe-transport-' + e + '"></iframe>').bind("load", function() {
                            var e, r = t.isArray(n.paramName) ? n.paramName : [n.paramName];
                            o.unbind("load").bind("load", function() {
                                var e;
                                try {
                                    if (e = o.contents(), !e.length || !e[0].firstChild) throw new Error
                                } catch (t) {
                                    e = void 0
                                }
                                l(200, "success", {
                                    iframe: e
                                }), t('<iframe src="' + a + '"></iframe>').appendTo(i), window.setTimeout(function() {
                                    i.remove()
                                }, 0)
                            }), i.prop("target", o.prop("name")).prop("action", n.url).prop("method", n.type), n.formData && t.each(n.formData, function(e, n) {
                                t('<input type="hidden"/>').prop("name", n.name).val(n.value).appendTo(i)
                            }), n.fileInput && n.fileInput.length && "POST" === n.type && (e = n.fileInput.clone(), n.fileInput.after(function(t) {
                                return e[t]
                            }), n.paramName && n.fileInput.each(function(e) {
                                t(this).prop("name", r[e] || n.paramName)
                            }), i.append(n.fileInput).prop("enctype", "multipart/form-data").prop("encoding", "multipart/form-data"), n.fileInput.removeAttr("form")), i.submit(), e && e.length && n.fileInput.each(function(n, i) {
                                var o = t(e[n]);
                                t(i).prop("name", o.prop("name")).attr("form", o.attr("form")), o.replaceWith(i)
                            })
                        }), i.append(o).appendTo(document.body)
                    },
                    abort: function() {
                        o && o.unbind("load").prop("src", a), i && i.remove()
                    }
                }
            }
        }), t.ajaxSetup({
            converters: {
                "iframe text": function(e) {
                    return e && t(e[0].body).text()
                },
                "iframe json": function(e) {
                    return e && n[i](t(e[0].body).text())
                },
                "iframe html": function(e) {
                    return e && t(e[0].body).html()
                },
                "iframe xml": function(e) {
                    var n = e && e[0];
                    return n && t.isXMLDoc(n) ? n : t.parseXML(n.XMLDocument && n.XMLDocument.xml || t(n.body).html())
                },
                "iframe script": function(e) {
                    return e && t.globalEval(t(e[0].body).text())
                }
            }
        })
    })
}, function(t, e) {
    var n = !1;
    /*! jQuery UI - v1.12.1 - 2018-02-10
     * http://jqueryui.com
     * Includes: widget.js
     * Copyright jQuery Foundation and other contributors; Licensed MIT */
    ! function(t) {
        "function" == typeof n && n.amd ? n(["jquery"], t) : t(jQuery)
    }(function(t) {
        t.ui = t.ui || {};
        var e = (t.ui.version = "1.12.1", 0),
            n = Array.prototype.slice;
        t.cleanData = function(e) {
            return function(n) {
                var i, o, r;
                for (r = 0; null != (o = n[r]); r++) try {
                    i = t._data(o, "events"), i && i.remove && t(o).triggerHandler("remove")
                } catch (t) {}
                e(n)
            }
        }(t.cleanData), t.widget = function(e, n, i) {
            var o, r, a, s = {},
                l = e.split(".")[0];
            e = e.split(".")[1];
            var g = l + "-" + e;
            return i || (i = n, n = t.Widget), t.isArray(i) && (i = t.extend.apply(null, [{}].concat(i))), t.expr[":"][g.toLowerCase()] = function(e) {
                return !!t.data(e, g)
            }, t[l] = t[l] || {}, o = t[l][e], r = t[l][e] = function(t, e) {
                if (!this._createWidget) return new r(t, e);
                arguments.length && this._createWidget(t, e)
            }, t.extend(r, o, {
                version: i.version,
                _proto: t.extend({}, i),
                _childConstructors: []
            }), a = new n, a.options = t.widget.extend({}, a.options), t.each(i, function(e, i) {
                if (!t.isFunction(i)) return void(s[e] = i);
                s[e] = function() {
                    function t() {
                        return n.prototype[e].apply(this, arguments)
                    }

                    function o(t) {
                        return n.prototype[e].apply(this, t)
                    }
                    return function() {
                        var e, n = this._super,
                            r = this._superApply;
                        return this._super = t, this._superApply = o, e = i.apply(this, arguments), this._super = n, this._superApply = r, e
                    }
                }()
            }), r.prototype = t.widget.extend(a, {
                widgetEventPrefix: o ? a.widgetEventPrefix || e : e
            }, s, {
                constructor: r,
                namespace: l,
                widgetName: e,
                widgetFullName: g
            }), o ? (t.each(o._childConstructors, function(e, n) {
                var i = n.prototype;
                t.widget(i.namespace + "." + i.widgetName, r, n._proto)
            }), delete o._childConstructors) : n._childConstructors.push(r), t.widget.bridge(e, r), r
        }, t.widget.extend = function(e) {
            for (var i, o, r = n.call(arguments, 1), a = 0, s = r.length; a < s; a++)
                for (i in r[a]) o = r[a][i], r[a].hasOwnProperty(i) && void 0 !== o && (t.isPlainObject(o) ? e[i] = t.isPlainObject(e[i]) ? t.widget.extend({}, e[i], o) : t.widget.extend({}, o) : e[i] = o);
            return e
        }, t.widget.bridge = function(e, i) {
            var o = i.prototype.widgetFullName || e;
            t.fn[e] = function(r) {
                var a = "string" == typeof r,
                    s = n.call(arguments, 1),
                    l = this;
                return a ? this.length || "instance" !== r ? this.each(function() {
                    var n, i = t.data(this, o);
                    return "instance" === r ? (l = i, !1) : i ? t.isFunction(i[r]) && "_" !== r.charAt(0) ? (n = i[r].apply(i, s), n !== i && void 0 !== n ? (l = n && n.jquery ? l.pushStack(n.get()) : n, !1) : void 0) : t.error("no such method '" + r + "' for " + e + " widget instance") : t.error("cannot call methods on " + e + " prior to initialization; attempted to call method '" + r + "'")
                }) : l = void 0 : (s.length && (r = t.widget.extend.apply(null, [r].concat(s))), this.each(function() {
                    var e = t.data(this, o);
                    e ? (e.option(r || {}), e._init && e._init()) : t.data(this, o, new i(r, this))
                })), l
            }
        }, t.Widget = function() {}, t.Widget._childConstructors = [], t.Widget.prototype = {
            widgetName: "widget",
            widgetEventPrefix: "",
            defaultElement: "<div>",
            options: {
                classes: {},
                disabled: !1,
                create: null
            },
            _createWidget: function(n, i) {
                i = t(i || this.defaultElement || this)[0], this.element = t(i), this.uuid = e++, this.eventNamespace = "." + this.widgetName + this.uuid, this.bindings = t(), this.hoverable = t(), this.focusable = t(), this.classesElementLookup = {}, i !== this && (t.data(i, this.widgetFullName, this), this._on(!0, this.element, {
                    remove: function(t) {
                        t.target === i && this.destroy()
                    }
                }), this.document = t(i.style ? i.ownerDocument : i.document || i), this.window = t(this.document[0].defaultView || this.document[0].parentWindow)), this.options = t.widget.extend({}, this.options, this._getCreateOptions(), n), this._create(), this.options.disabled && this._setOptionDisabled(this.options.disabled), this._trigger("create", null, this._getCreateEventData()), this._init()
            },
            _getCreateOptions: function() {
                return {}
            },
            _getCreateEventData: t.noop,
            _create: t.noop,
            _init: t.noop,
            destroy: function() {
                var e = this;
                this._destroy(), t.each(this.classesElementLookup, function(t, n) {
                    e._removeClass(n, t)
                }), this.element.off(this.eventNamespace).removeData(this.widgetFullName), this.widget().off(this.eventNamespace).removeAttr("aria-disabled"), this.bindings.off(this.eventNamespace)
            },
            _destroy: t.noop,
            widget: function() {
                return this.element
            },
            option: function(e, n) {
                var i, o, r, a = e;
                if (0 === arguments.length) return t.widget.extend({}, this.options);
                if ("string" == typeof e)
                    if (a = {}, i = e.split("."), e = i.shift(), i.length) {
                        for (o = a[e] = t.widget.extend({}, this.options[e]), r = 0; r < i.length - 1; r++) o[i[r]] = o[i[r]] || {}, o = o[i[r]];
                        if (e = i.pop(), 1 === arguments.length) return void 0 === o[e] ? null : o[e];
                        o[e] = n
                    } else {
                        if (1 === arguments.length) return void 0 === this.options[e] ? null : this.options[e];
                        a[e] = n
                    }
                return this._setOptions(a), this
            },
            _setOptions: function(t) {
                var e;
                for (e in t) this._setOption(e, t[e]);
                return this
            },
            _setOption: function(t, e) {
                return "classes" === t && this._setOptionClasses(e), this.options[t] = e, "disabled" === t && this._setOptionDisabled(e), this
            },
            _setOptionClasses: function(e) {
                var n, i, o;
                for (n in e) o = this.classesElementLookup[n], e[n] !== this.options.classes[n] && o && o.length && (i = t(o.get()), this._removeClass(o, n), i.addClass(this._classes({
                    element: i,
                    keys: n,
                    classes: e,
                    add: !0
                })))
            },
            _setOptionDisabled: function(t) {
                this._toggleClass(this.widget(), this.widgetFullName + "-disabled", null, !!t), t && (this._removeClass(this.hoverable, null, "ui-state-hover"), this._removeClass(this.focusable, null, "ui-state-focus"))
            },
            enable: function() {
                return this._setOptions({
                    disabled: !1
                })
            },
            disable: function() {
                return this._setOptions({
                    disabled: !0
                })
            },
            _classes: function(e) {
                function n(n, r) {
                    var a, s;
                    for (s = 0; s < n.length; s++) a = o.classesElementLookup[n[s]] || t(), a = t(e.add ? t.unique(a.get().concat(e.element.get())) : a.not(e.element).get()), o.classesElementLookup[n[s]] = a, i.push(n[s]), r && e.classes[n[s]] && i.push(e.classes[n[s]])
                }
                var i = [],
                    o = this;
                return e = t.extend({
                    element: this.element,
                    classes: this.options.classes || {}
                }, e), this._on(e.element, {
                    remove: "_untrackClassesElement"
                }), e.keys && n(e.keys.match(/\S+/g) || [], !0), e.extra && n(e.extra.match(/\S+/g) || []), i.join(" ")
            },
            _untrackClassesElement: function(e) {
                var n = this;
                t.each(n.classesElementLookup, function(i, o) {
                    -1 !== t.inArray(e.target, o) && (n.classesElementLookup[i] = t(o.not(e.target).get()))
                })
            },
            _removeClass: function(t, e, n) {
                return this._toggleClass(t, e, n, !1)
            },
            _addClass: function(t, e, n) {
                return this._toggleClass(t, e, n, !0)
            },
            _toggleClass: function(t, e, n, i) {
                i = "boolean" == typeof i ? i : n;
                var o = "string" == typeof t || null === t,
                    r = {
                        extra: o ? e : n,
                        keys: o ? t : e,
                        element: o ? this.element : t,
                        add: i
                    };
                return r.element.toggleClass(this._classes(r), i), this
            },
            _on: function(e, n, i) {
                var o, r = this;
                "boolean" != typeof e && (i = n, n = e, e = !1), i ? (n = o = t(n), this.bindings = this.bindings.add(n)) : (i = n, n = this.element, o = this.widget()), t.each(i, function(i, a) {
                    function s() {
                        if (e || !0 !== r.options.disabled && !t(this).hasClass("ui-state-disabled")) return ("string" == typeof a ? r[a] : a).apply(r, arguments)
                    }
                    "string" != typeof a && (s.guid = a.guid = a.guid || s.guid || t.guid++);
                    var l = i.match(/^([\w:-]*)\s*(.*)$/),
                        g = l[1] + r.eventNamespace,
                        u = l[2];
                    u ? o.on(g, u, s) : n.on(g, s)
                })
            },
            _off: function(e, n) {
                n = (n || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace, e.off(n).off(n), this.bindings = t(this.bindings.not(e).get()), this.focusable = t(this.focusable.not(e).get()), this.hoverable = t(this.hoverable.not(e).get())
            },
            _delay: function(t, e) {
                function n() {
                    return ("string" == typeof t ? i[t] : t).apply(i, arguments)
                }
                var i = this;
                return setTimeout(n, e || 0)
            },
            _hoverable: function(e) {
                this.hoverable = this.hoverable.add(e), this._on(e, {
                    mouseenter: function(e) {
                        this._addClass(t(e.currentTarget), null, "ui-state-hover")
                    },
                    mouseleave: function(e) {
                        this._removeClass(t(e.currentTarget), null, "ui-state-hover")
                    }
                })
            },
            _focusable: function(e) {
                this.focusable = this.focusable.add(e), this._on(e, {
                    focusin: function(e) {
                        this._addClass(t(e.currentTarget), null, "ui-state-focus")
                    },
                    focusout: function(e) {
                        this._removeClass(t(e.currentTarget), null, "ui-state-focus")
                    }
                })
            },
            _trigger: function(e, n, i) {
                var o, r, a = this.options[e];
                if (i = i || {}, n = t.Event(n), n.type = (e === this.widgetEventPrefix ? e : this.widgetEventPrefix + e).toLowerCase(), n.target = this.element[0], r = n.originalEvent)
                    for (o in r) o in n || (n[o] = r[o]);
                return this.element.trigger(n, i), !(t.isFunction(a) && !1 === a.apply(this.element[0], [n].concat(i)) || n.isDefaultPrevented())
            }
        }, t.each({
            show: "fadeIn",
            hide: "fadeOut"
        }, function(e, n) {
            t.Widget.prototype["_" + e] = function(i, o, r) {
                "string" == typeof o && (o = {
                    effect: o
                });
                var a, s = o ? !0 === o || "number" == typeof o ? n : o.effect || n : e;
                o = o || {}, "number" == typeof o && (o = {
                    duration: o
                }), a = !t.isEmptyObject(o), o.complete = r, o.delay && i.delay(o.delay), a && t.effects && t.effects.effect[s] ? i[e](o) : s !== e && i[s] ? i[s](o.duration, o.easing, r) : i.queue(function(n) {
                    t(this)[e](), r && r.call(i[0]), n()
                })
            }
        });
        t.widget
    })
}, function(t, e, n) {
    "use strict";
    var i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        },
        o = n(0);
    t.exports = function() {
        function t(t) {
            return this.each(function() {
                var n = o(this),
                    r = n.data("bs.affix"),
                    a = "object" == (void 0 === t ? "undefined" : i(t)) && t;
                r || n.data("bs.affix", r = new e(this, a)), "string" == typeof t && r[t]()
            })
        }
        var e = function t(e, n) {
            this.options = o.extend({}, t.DEFAULTS, n), this.$target = o(this.options.target).on("scroll.bs.affix.data-api", o.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", o.proxy(this.checkPositionWithEventLoop, this)), this.$element = o(e), this.affixed = null, this.unpin = null, this.pinnedOffset = null, this.checkPosition()
        };
        e.VERSION = "3.3.7", e.RESET = "affix affix-top affix-bottom", e.DEFAULTS = {
            offset: 0,
            target: window
        }, e.prototype.getState = function(t, e, n, i) {
            var o = this.$target.scrollTop(),
                r = this.$element.offset(),
                a = this.$target.height();
            if (null != n && "top" == this.affixed) return o < n && "top";
            if ("bottom" == this.affixed) return null != n ? !(o + this.unpin <= r.top) && "bottom" : !(o + a <= t - i) && "bottom";
            var s = null == this.affixed,
                l = s ? o : r.top,
                g = s ? a : e;
            return null != n && o <= n ? "top" : null != i && l + g >= t - i && "bottom"
        }, e.prototype.getPinnedOffset = function() {
            if (this.pinnedOffset) return this.pinnedOffset;
            this.$element.removeClass(e.RESET).addClass("affix");
            var t = this.$target.scrollTop(),
                n = this.$element.offset();
            return this.pinnedOffset = n.top - t
        }, e.prototype.checkPositionWithEventLoop = function() {
            setTimeout(o.proxy(this.checkPosition, this), 1)
        }, e.prototype.checkPosition = function() {
            if (this.$element.is(":visible")) {
                var t = this.$element.height(),
                    n = this.options.offset,
                    r = n.top,
                    a = n.bottom,
                    s = Math.max(o(document).height(), o(document.body).height());
                "object" != (void 0 === n ? "undefined" : i(n)) && (a = r = n), "function" == typeof r && (r = n.top(this.$element)), "function" == typeof a && (a = n.bottom(this.$element));
                var l = this.getState(s, t, r, a);
                if (this.affixed != l) {
                    null != this.unpin && this.$element.css("top", "");
                    var g = "affix" + (l ? "-" + l : ""),
                        u = o.Event(g + ".bs.affix");
                    if (this.$element.trigger(u), u.isDefaultPrevented()) return;
                    this.affixed = l, this.unpin = "bottom" == l ? this.getPinnedOffset() : null, this.$element.removeClass(e.RESET).addClass(g).trigger(g.replace("affix", "affixed") + ".bs.affix")
                }
                "bottom" == l && this.$element.offset({
                    top: s - t - a
                })
            }
        };
        var n = o.fn.affix;
        o.fn.affix = t, o.fn.affix.Constructor = e, o.fn.affix.noConflict = function() {
            return o.fn.affix = n, this
        }, o(window).on("load", function() {
            o('[data-spy="affix"]').each(function() {
                var e = o(this),
                    n = e.data();
                n.offset = n.offset || {}, null != n.offsetBottom && (n.offset.bottom = n.offsetBottom), null != n.offsetTop && (n.offset.top = n.offsetTop), t.call(e, n)
            })
        })
    }
}, function(t, e, n) {
    "use strict";

    function i(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }

    function o() {
        (0, a.default)("#authForm").on("submit", function(t) {
            t.preventDefault();
            var e = (0, a.default)(this),
                n = e.attr("method"),
                i = e.attr("action"),
                o = e.serialize();
            return a.default.ajax({
                type: n,
                url: i,
                data: o,
                resetForm: "true",
                success: function(t) {
                    window.location = "/application"
                },
                error: function(t) {
                    var n = t.responseJSON.fields;
                    a.default.each(n, function(t, n) {
                        (0, l.default)(e.find("input[name=" + t + "]").parents(".signin_3rE"), {
                            title: "Ошибка!",
                            text: n,
                            theme: "danger"
                        })
                    })
                }
            }), !1
        })
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = o;
    var r = n(0),
        a = i(r),
        s = n(2),
        l = i(s)
}, function(t, e, n) {
    "use strict";

    function i() {
        (0, r.default)("#autosubmit").submit()
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = i;
    var o = n(0),
        r = function(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }(o)
}, function(t, e, n) {
    "use strict";

    function i(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = function() {
        (0, r.default)('[data-toggle="clipboard"]').each(function(t, e) {
            new l.default(e).on("success", function(t) {
                (0, a.warning)({
                    title: "Скопировано!",
                    text: "Данные скопированы в буфер обмена"
                }, 1200)
            })
        })
    };
    var o = n(0),
        r = i(o),
        a = n(1),
        s = n(14),
        l = i(s)
}, function(t, e, n) {
    "use strict";
    t.exports = function(t) {
        function e(t) {
            if (t instanceof Date) return t;
            if (String(t).match(a)) return String(t).match(/^[0-9]*$/) && (t = Number(t)), String(t).match(/\-/) && (t = String(t).replace(/\-/g, "/")), new Date(t);
            throw new Error("Couldn't cast `" + t + "` to a date object.")
        }

        function n(t) {
            var e = t.toString().replace(/([.?*+^$[\]\\(){}|-])/g, "\\$1");
            return new RegExp(e)
        }

        function i(t) {
            return function(e) {
                var i = e.match(/%(-|!)?[A-Z]{1}(:[^;]+;)?/gi);
                if (i)
                    for (var r = 0, a = i.length; r < a; ++r) {
                        var s = i[r].match(/%(-|!)?([a-zA-Z]{1})(:[^;]+;)?/),
                            g = n(s[0]),
                            u = s[1] || "",
                            c = s[3] || "",
                            d = null;
                        s = s[2], l.hasOwnProperty(s) && (d = l[s], d = Number(t[d])), null !== d && ("!" === u && (d = o(c, d)), "" === u && d < 10 && (d = "0" + d.toString()), e = e.replace(g, d.toString()))
                    }
                return e = e.replace(/%%/, "%")
            }
        }

        function o(t, e) {
            var n = "s",
                i = "";
            return t && (t = t.replace(/(:|;|\s)/gi, "").split(/\,/), 1 === t.length ? n = t[0] : (i = t[0], n = t[1])), 1 === Math.abs(e) ? i : n
        }
        var r = [],
            a = [],
            s = {
                precision: 100,
                elapse: !1
            };
        a.push(/^[0-9]*$/.source), a.push(/([0-9]{1,2}\/){2}[0-9]{4}( [0-9]{1,2}(:[0-9]{2}){2})?/.source), a.push(/[0-9]{4}([\/\-][0-9]{1,2}){2}( [0-9]{1,2}(:[0-9]{2}){2})?/.source), a = new RegExp(a.join("|"));
        var l = {
                Y: "years",
                m: "months",
                n: "daysToMonth",
                w: "weeks",
                d: "daysToWeek",
                D: "totalDays",
                H: "hours",
                M: "minutes",
                S: "seconds"
            },
            g = function(e, n, i) {
                this.el = e, this.$el = t(e), this.interval = null, this.offset = {}, this.options = t.extend({}, s), this.instanceNumber = r.length, r.push(this), this.$el.data("countdown-instance", this.instanceNumber), i && ("function" == typeof i ? (this.$el.on("update.countdown", i), this.$el.on("stoped.countdown", i), this.$el.on("finish.countdown", i)) : this.options = t.extend({}, s, i)), this.setFinalDate(n), this.start()
            };
        t.extend(g.prototype, {
            start: function() {
                null !== this.interval && clearInterval(this.interval);
                var t = this;
                this.update(), this.interval = setInterval(function() {
                    t.update.call(t)
                }, this.options.precision)
            },
            stop: function() {
                clearInterval(this.interval), this.interval = null, this.dispatchEvent("stoped")
            },
            toggle: function() {
                this.interval ? this.stop() : this.start()
            },
            pause: function() {
                this.stop()
            },
            resume: function() {
                this.start()
            },
            remove: function() {
                this.stop.call(this), r[this.instanceNumber] = null, delete this.$el.data().countdownInstance
            },
            setFinalDate: function(t) {
                this.finalDate = e(t)
            },
            update: function() {
                if (0 === this.$el.closest("html").length) return void this.remove();
                var e, n = void 0 !== t._data(this.el, "events"),
                    i = new Date;
                e = this.finalDate.getTime() - i.getTime(), e = Math.ceil(e / 1e3), e = !this.options.elapse && e < 0 ? 0 : Math.abs(e), this.totalSecsLeft !== e && n && (this.totalSecsLeft = e, this.elapsed = i >= this.finalDate, this.offset = {
                    seconds: this.totalSecsLeft % 60,
                    minutes: Math.floor(this.totalSecsLeft / 60) % 60,
                    hours: Math.floor(this.totalSecsLeft / 60 / 60) % 24,
                    days: Math.floor(this.totalSecsLeft / 60 / 60 / 24) % 7,
                    daysToWeek: Math.floor(this.totalSecsLeft / 60 / 60 / 24) % 7,
                    daysToMonth: Math.floor(this.totalSecsLeft / 60 / 60 / 24 % 30.4368),
                    totalDays: Math.floor(this.totalSecsLeft / 60 / 60 / 24),
                    weeks: Math.floor(this.totalSecsLeft / 60 / 60 / 24 / 7),
                    months: Math.floor(this.totalSecsLeft / 60 / 60 / 24 / 30.4368),
                    years: Math.abs(this.finalDate.getFullYear() - i.getFullYear())
                }, this.options.elapse || 0 !== this.totalSecsLeft ? this.dispatchEvent("update") : (this.stop(), this.dispatchEvent("finish")))
            },
            dispatchEvent: function(e) {
                var n = t.Event(e + ".countdown");
                n.finalDate = this.finalDate, n.elapsed = this.elapsed, n.offset = t.extend({}, this.offset), n.strftime = i(this.offset), this.$el.trigger(n)
            }
        }), t.fn.countdown = function() {
            var e = Array.prototype.slice.call(arguments, 0);
            return this.each(function() {
                var n = t(this).data("countdown-instance");
                if (void 0 !== n) {
                    var i = r[n],
                        o = e[0];
                    g.prototype.hasOwnProperty(o) ? i[o].apply(i, e.slice(1)) : null === String(o).match(/^[$A-Z_][0-9A-Z_$]*$/i) ? (i.setFinalDate.call(i, o), i.start()) : t.error("Method %s does not exist on jQuery.countdown".replace(/\%s/gi, o))
                } else new g(this, e[0], e[1])
            })
        }
    }
}, function(t, e, n) {
    "use strict";

    function i(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }

    function o(t) {
        var e = (0, A.default)('[data-exchange-column="' + t + '"]');
        this.systems = (0, A.default)("[data-typecy]", e), this.active = null, this.filter = (0, A.default)("[data-exchange-filter]", e), this.filterActive = this.filter.eq(0), this.setSelectActive = (0, k.default)(e)
    }

    function r(t, e) {
        t.attr("class", e)
    }

    function a(t, e) {
        t.text(e)
    }

    function s(t, e) {
        t.text(N[e])
    }

    function l(t, e) {
        var n = t.attr("data-body"),
            i = e.attr("data-body"),
            o = t.attr("data-typecy"),
            r = e.attr("data-typecy"),
            a = function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                    e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                return {
                    input: {
                        value: t,
                        currency: arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "руб."
                    },
                    output: {
                        value: e,
                        currency: arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "руб."
                    }
                }
            },
            s = a();
        s = o == r || kursa[n][i].v > 1 ? a(1, kursa[n][i].v.toFixed(3), N[o], N[r]) : a(kursb[n][i].v.toFixed(3), 1, N[o], N[r]), l.elements.input.value.text(s.input.value), l.elements.output.value.text(s.output.value), l.elements.input.currency.text(s.input.currency), l.elements.output.currency.text(s.output.currency)
    }

    function g(t) {
        return 'С вашего кошелька будет списана сумма: <span class="writeOff">' + t + "</span>"
    }

    function u(t, e) {
        var n = (0, A.default)('[data-exchange-form="input"]'),
            i = void 0,
            o = "";
        if (1 == e ? (i = Number(1.005 * t).toFixed(2) + " usd", o = Number(1.0199 * t).toFixed(2) + " usd", window.writeoffText = g(i), window.writeoffTextTwo = g(o)) : 8 == e ? (i = Number(1.005 * t).toFixed(2) + " руб.", window.writeoffText = g(i)) : 14 == e || 26 == e ? (i = Number(1.0095 * t).toFixed(2) + (14 == e ? "usd" : " руб."), window.writeoffText = g(i)) : (i = "", o = "", window.writeoffText = "", window.writeoffTextTwo = ""), n.data("bs.tooltip")) {
            var r = view_caution(e, 0),
                a = (0, A.default)(".writeOff");
            n.tooltip("destroy", function() {
                n.tooltip({
                    title: "Уведомление!",
                    text: r.input.message
                }).tooltip("show")
            }), setTimeout(function() {
                i && a.eq(0).length && (0, A.default)(".writeOff").eq(0).html(i), o && a.eq(1).length && (0, A.default)(".writeOff").eq(1).html(o)
            }, 500)
        }
    }

    function c() {
        var t = new o("input");
        if (t.systems.length) {
            var e = new o("output"),
                n = (0, A.default)('[data-exchange-icon="input"]'),
                i = (0, A.default)('[data-exchange-icon="output"]'),
                g = (0, A.default)('[data-exchange-name="input"]'),
                c = (0, A.default)('[data-exchange-name="output"]'),
                d = (0, A.default)('[data-exchange-value="input"]'),
                f = (0, A.default)('[data-exchange-value="output"]'),
                v = (0, A.default)('[data-exchange-currency="input1"]'),
                b = (0, A.default)('[data-exchange-currency="output"]'),
                x = (0, A.default)('[data-exchange-field="input"]'),
                k = (0, A.default)('[data-exchange-field="output"]'),
                E = (0, A.default)('[data-exchange-form="output"]'),
                N = (0, A.default)('[data-exchange-form="input-account"]'),
                W = (0, A.default)("input", N),
                L = (0, A.default)('[data-exchange-form-label="input-account"]'),
                P = (0, A.default)('[data-exchange-form="output-account"]'),
                B = (0, A.default)("input", P),
                U = (0, A.default)('[data-exchange-form-label="output-account"]'),
                _ = (0, A.default)('[data-exchange-form="input-fullname"]'),
                H = (0, A.default)('[data-exchange-form="input-unk"]'),
                q = (0, A.default)('[data-exchange-form-label="input-unk"]'),
                Z = (0, A.default)('[data-exchange-form="output-fullname"]'),
                Q = (0, A.default)('[data-exchange-form="output-unk"]'),
                Y = (0, A.default)('[data-exchange-form-label="output-unk"]'),
                J = (0, A.default)('[data-exchange-form="output-bank"]'),
                V = (0, A.default)('[data-exchange-form="switch_monero"]'),
                z = (0, A.default)('[data-exchange-field="switch_monero"]'),
                G = !0,
                X = function(t, n, i) {
                    var o = null;
                    1 == i ? (o = "руб.", n = n.toFixed(4)) : 2 == i ? (o = "$", n = n.toFixed(4)) : (o = "btc.", n = n.toFixed(6));
                    var r = e.active.attr("data-system-name"),
                        a = "В получаемой Вами сумме уже учтена комиссия платежной\n      системы " + r + " " + t + "%\n      - " + n + " " + o;
                    (0, D.default)(E, {
                        title: "Уведомление!",
                        text: a
                    })
                };
            (0, A.default)(x).add(k).focus(function(t) {
                t.currentTarget.select()
            }), l.elements = {
                input: {
                    value: (0, A.default)('[data-course="input-value"]'),
                    currency: (0, A.default)('[data-course="input-currency"]')
                },
                output: {
                    value: (0, A.default)('[data-course="output-value"]'),
                    currency: (0, A.default)('[data-course="output-currency"]')
                }
            };
            var K = function(t) {
                    var n = t.attr("data-body"),
                        i = list_control[n];
                    return e.systems.filter(function(t, e) {
                        var n = (0, A.default)(e).attr("data-body");
                        return 1 == i[n]
                    })
                },
                $ = function(t) {
                    var n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        i = K(t);
                    e.systems.hide(), i.filter(function(t, e) {
                        var n = (0, A.default)(e).attr("data-typecy");
                        return 4 != n && 5 != n && 6 != n && 9 != n && 10 != n && 11 != n && 12 != n || (n = 3), !parseInt(O, 10) || n == O
                    }).show();
                    var o = e.active;
                    o && (0, y.default)(i.toArray(), o[0]) || (o = i.eq(0)), ut(o, n)
                },
                tt = "",
                et = function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                        e = t ? "background-color: #d9dadc; opacity: 0.4;" : "",
                        n = Q.find("input");
                    t ? (n.hide(), tt = n.val(), n.val(""), n.blur()) : (n.show(), tt && (n.val(tt), n.blur())), Q.attr("style", e), z.prop("checked", t)
                };
            V.click(function(t) {
                t.preventDefault();
                var e = !z.prop("checked");
                et(e)
            });
            var nt = null,
                it = null,
                ot = function(o) {
                    var a = t.active.attr("data-system-icon"),
                        s = e.active.attr("data-system-icon"),
                        u = t.active.attr("data-system-name"),
                        d = e.active.attr("data-system-name"),
                        f = t.active.attr("data-body"),
                        p = e.active.attr("data-body"),
                        m = list_input_type1[f],
                        v = list_input_type2[f][p],
                        y = list_input[f][m],
                        b = list_input[p][v];
                    l(t.active, e.active), r(n, a), r(i, s), g.text(u), c.text(d), t.setSelectActive(a, u, o), e.setSelectActive(s, d, o), L.attr("class", y.length > 28 ? M : j).text(y), U.attr("class", b.length > 28 ? M : j).text(b), nt != f && W.val("").blur(), it != p && B.val("").blur(), N.show(), P.show(), nt = f, it = p, (0, A.default)(_).add(H).add(Z).add(Q).add(J).add(V).hide(), 1 == m || 2 == m ? _.show() : 4 == m && N.hide(), 1 == v || 2 == v ? Z.show() : 4 == v && P.hide(), 10 == f && (q.text("УНК, 6-8 цифр"), H.show()), 30 == f && (q.text("Номер штрих-кода карты, 13 цифр"), H.show()), 10 == p && (Y.text("УНК, 6-8 цифр"), Q.show()), 30 == p && (Y.text("Номер штрих-кода карты, 13 цифр"), Q.show(), Z.hide()), 25 != p && 35 != p || J.show(), 38 != p && 36 != p || (Y.text(38 == p ? "Payment ID (от 6 до 64 символов)" : "Destination Tag (от 3 до 10 символов)"), V.find("span.form_nBB").text(38 == p ? "Без Payment ID" : "Без Destination Tag"), Q.show(), V.show()), 2 != f && 15 != f && 11 != f && 21 != f && 22 != f && 24 != f && 29 != f && 36 != f && 37 != f && 38 != f && 39 != f && 41 != f && 42 != f && 44 != f && 45 != f || N.hide(), 2 != p && 15 != p && 24 != p && 30 != p && 39 != p && 41 != p || P.hide(), (0, h.setSystem)(t.active.attr("data-body"), e.active.attr("data-body")), (0, C.default)(), (0, I.resize)(), (0, T.setSId)(t.active.attr("data-body"), e.active.attr("data-body")), (0, T.readSafeInputData)()
                },
                rt = function() {
                    var n = parseFloat(x.val()) || 0,
                        i = t.active.attr("data-body"),
                        o = e.active.attr("data-body"),
                        r = t.active.attr("data-typecy"),
                        l = e.active.attr("data-typecy"),
                        g = internal_transfer[o] || 0,
                        c = 0,
                        A = 0;
                    c = n * kursa[i][o].v, A = c, c /= 1 + g / 100, 3 == o && A - c >= 1e3 && (c = A - 1e3), A -= c, 1 == l || 8 == l ? c = Number(c).toFixed(2) : 2 == l ? c = Number(c).toFixed(4) : 3 == l || 12 == l ? c = Number(c).toFixed(8) : 4 == l ? c = Number(c).toFixed(5) : 5 != l && 6 != l && 9 != l && 10 != l && 11 != l || (c = Number(c).toFixed(6)), k.val(c), a(d, n), a(f, c), s(v, r), s(b, l), u(n, i), A > 0 && X(g, A, l)
                },
                at = function() {
                    var n = parseFloat(k.val()) || 0,
                        i = t.active.attr("data-body"),
                        o = e.active.attr("data-body"),
                        r = t.active.attr("data-typecy"),
                        l = e.active.attr("data-typecy"),
                        g = internal_transfer[o] || 0,
                        c = 0,
                        A = 0;
                    A = n, c = n + n * g / 100, 3 == o && A * g / 100 >= 1e3 && (c = A + 1e3), A = c - A, c /= kursa[i][o].v, 1 == r || 8 == r ? c = Number(c).toFixed(2) : 2 == r ? c = Number(c).toFixed(4) : 3 == r || 12 == r ? c = Number(c).toFixed(8) : 4 == r ? c = Number(c).toFixed(5) : 5 != r && 6 != r && 9 != l && 10 != l && 11 != l || (c = Number(c).toFixed(6)), x.val(c), a(d, c), a(f, n), s(v, r), s(b, l), u(c, i), A > 0 && X(g, A, l)
                },
                st = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                        n = parseFloat(x.val()) || 0,
                        i = parseFloat(k.val()) || 0,
                        o = t.active.attr("data-typecy"),
                        r = currencyMinValueIn[o];
                    if (!e && n) x.val(n);
                    else {
                        if (!e && i) return k.val(i), !1;
                        R || F || x.val(r)
                    }
                    return !0
                },
                lt = function() {
                    var t = (arguments.length > 0 && void 0 !== arguments[0] && arguments[0], parseFloat(x.val()), parseFloat(k.val()) || 0),
                        n = e.active.attr("data-typecy"),
                        i = currencyMinValueOut[n];
                    return t < i && (k.val(i), !0)
                },
                gt = function(n) {
                    var i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                        o = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                    t.setActive(n);
                    var r = st(o);
                    (0, h.clearForm)(function() {
                        r ? (i && ut(i, o), $(n, o)) : (e.setActive(i), (0, h.clearForm)(function() {
                            at(), ot(o)
                        }))
                    })
                },
                ut = function(n) {
                    var i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    e.setActive(n);
                    var o = (t.active.attr("data-typecy"), e.active.attr("data-typecy"));
                    "undefined" != typeof fgNotice && 3 == o && fgNotice && G && ((0, p.warning)({
                        title: "Внимание!",
                        text: "В связи с высокой загруженностью сети биткоин могут быть задержки с обработкой заявок!"
                    }, 0, function() {
                        return G = !0
                    }), G = !1), (0, h.clearForm)(function() {
                        !lt(i) || R || F ? rt() : at(), ot(i)
                    })
                };
            t.filter.click(function(e) {
                e.preventDefault();
                var n = (0, A.default)(e.currentTarget);
                t.setFilterActive(n);
                var i = n.attr("data-exchange-filter"),
                    o = t.systems.hide();
                i > 0 && (o = 3 == i ? o.filter('[data-typecy="3"],[data-typecy="4"],[data-typecy="5"],[data-typecy="6"],[data-typecy="9"],[data-typecy="10"],[data-typecy="11"],[data-typecy="12"]') : o.filter('[data-typecy="' + i + '"]')), o.show();
                var r = t.active;
                r && (0, y.default)(o.toArray(), r[0]) || (r = o.eq(0)), gt(r)
            }), e.filter.click(function(n) {
                n.preventDefault();
                var i = (0, A.default)(n.currentTarget);
                e.setFilterActive(i);
                var o = K(t.active);
                o.hide();
                var r = i.attr("data-exchange-filter");
                if (O = r, r > 0 && (o = 3 == r ? o.filter('[data-typecy="3"],[data-typecy="4"],[data-typecy="5"],[data-typecy="6"],[data-typecy="9"],[data-typecy="10"],[data-typecy="11"],[data-typecy="12"]') : o.filter('[data-typecy="' + r + '"]')), o.length) {
                    o.show();
                    var a = e.active;
                    a && (0, y.default)(o.toArray(), a[0]) || (a = o.eq(0)), ut(a)
                }
            }), t.systems.click(function(t) {
                t.preventDefault(), gt((0, A.default)(t.currentTarget), 0, !0)
            }), e.systems.click(function(t) {
                t.preventDefault(), ut((0, A.default)(t.currentTarget), !0)
            }), x.keyup(function() {
                (0, A.default)('[data-exchange-form="input"]').add(E).each(function(t, e) {
                    var n = (0, A.default)(e);
                    n.removeClass("danger"), n.data("bs.tooltip") && n.tooltip("destroy")
                }), F = !1, R = !0, rt()
            }), k.keyup(function() {
                (0, A.default)('[data-exchange-form="input"]').add(E).each(function(t, e) {
                    var n = (0, A.default)(e);
                    n.removeClass("danger"), n.data("bs.tooltip") && n.tooltip("destroy")
                }), F = !0, R = !1, at()
            }), (0, A.default)("input", _).keydown(function(e) {
                var n = t.active.attr("data-body"); - 1 !== A.default.inArray(e.keyCode, [46, 8, 9, 27, 13, 110, 190, 188]) || 65 == e.keyCode && !0 === e.ctrlKey || 67 == e.keyCode && !0 === e.ctrlKey || 88 == e.keyCode && !0 === e.ctrlKey || e.keyCode >= 35 && e.keyCode <= 39 || /^[a-zA-Z\s]$/i.exec(e.key) || 34 != n || e.preventDefault()
            }), (0, A.default)("input", Z).keydown(function(t) {
                var n = e.active.attr("data-body"); - 1 !== A.default.inArray(t.keyCode, [46, 8, 9, 27, 13, 110, 190, 188]) || 65 == t.keyCode && !0 === t.ctrlKey || 67 == t.keyCode && !0 === t.ctrlKey || 88 == t.keyCode && !0 === t.ctrlKey || t.keyCode >= 35 && t.keyCode <= 39 || /^[a-zA-Z\s]$/i.exec(t.key) || 34 != n || t.preventDefault()
            }), (0, m.default)(), window.initialSystem ? gt(t.systems.filter("[data-body=" + window.initialSystem.input + "]"), e.systems.filter("[data-body=" + window.initialSystem.output + "]")) : gt(t.systems.eq(0));
            var ct = (0, A.default)('[data-course="container"]'),
                dt = function n(i) {
                    var o = i.kursa_old,
                        r = t.active.attr("data-body"),
                        a = e.active.attr("data-body");
                    kursa[r][a].v != o[r][a].v && (ct.css("background-color", "#f5f3f1").animate({
                        backgroundColor: "#fff"
                    }, 5e3), l(t.active, e.active), F ? at() : rt()), setTimeout(function() {
                        (0, w.default)(n)
                    }, 15e3)
                };
            setTimeout(function() {
                (0, w.default)(dt)
            }, 15e3), (0, S.verificationModalImageUploader)(), (0, T.readSafeInputData)(), (0, T.initSafeEvent)(), (0, T.cheakVisibleNotice)(), setTimeout(function() {
                document.querySelectorAll("input.form_2nL")[3].focus()
            }, 1)
        }
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = c;
    var d = n(0),
        A = i(d),
        f = n(13),
        C = i(f),
        I = n(9),
        p = n(1),
        h = n(11),
        m = i(h),
        v = n(7),
        y = i(v),
        b = n(52),
        w = i(b),
        x = n(51),
        k = i(x),
        S = n(54),
        E = n(2),
        D = i(E),
        T = n(5),
        j = "form_3Mi",
        M = "form_33e",
        N = {
            1: "руб.",
            2: "$",
            3: "btc.",
            4: "ltc",
            5: "eth",
            6: "dsh",
            8: "тенге",
            9: "xrp",
            10: "etc",
            11: "xmr",
            12: "bch"
        },
        O = 0,
        R = !1,
        F = !1;
    o.prototype.setActive = function(t) {
        this.active && this.active.attr("class", "main_k0X"), this.active = t.attr("class", "main_2nj")
    }, o.prototype.setFilterActive = function(t) {
        this.filterActive && this.filterActive.attr("class", "main_3DC"), this.filterActive = t.attr("class", "main_jgK")
    }
}, function(t, e, n) {
    "use strict";

    function i() {
        return s.width() <= 766
    }

    function o() {
        if (i()) return void s.one("resize", function() {
            o()
        });
        var t = (0, a.default)("#faqNavigation");
        if (t.length) {
            t.affix({
                offset: {
                    top: t.offset().top
                }
            }), (0, a.default)("body").scrollspy({
                target: "#faqNavigation",
                offset: 200
            });
            var e = (0, a.default)("a", t);
            e.mouseup(function() {
                e.removeClass("active"), (0, a.default)(this).addClass("active")
            })
        }
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = o;
    var r = n(0),
        a = function(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }(r);
    n(55)();
    var s = (0, a.default)(window)
}, function(t, e, n) {
    "use strict";
    t.exports = function(t, e) {
        t("body").on("focus blur", '[data-toggle="floatLabel"] input', function(e) {
            t(this).parent('[data-toggle="floatLabel"]').toggleClass("focused", "focusin" === e.type || this.value.length > 0)
        }), t('[data-toggle="floatLabel"] input').trigger("blur")
    }
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = function() {
        var t = (0, o.default)("body");
        (0, o.default)("#headerSmallOpen").click(function() {
            t.toggleClass(r), window.scrollTo(0, 0)
        }), (0, o.default)("#modalSingin").on("show.bs.modal", function() {
            t.removeClass(r)
        }), (0, o.default)("#modalAboutService").on("show.bs.modal", function() {
            t.removeClass(r)
        })
    };
    var i = n(0),
        o = function(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }(i),
        r = "header-open"
}, function(t, e, n) {
    "use strict";

    function i() {
        var t = (0, r.default)('[data-instruction="wrapper"]');
        t.length && t.each(function() {
            var t = (0, r.default)(this),
                e = (0, r.default)('<div data-instruction="container" class="directive_eyg">\n        <div class="directive_1sF">\n          <button type="button" data-instruction="close" class="directive_PWE"></button>\n          <div class="directive_2jA">Начните выгодный обмен прямо сейчас!</div>\n          <div class="directive_1SA">\n            <a href="/" onclick="yaCounter38853395.reachGoal(\'instruction\'); return true;" class="buttons_jwc">Начать обмен сейчас\n              <span class="directive_3Lf"></span>\n            </a>\n          </div>\n          <div class="directive_2jA">Появились вопросы? Напишите\n            <a href="#" onclick="javascript:jivo_api.open(); return false;">нам в чат</a>\n          </div>\n        </div>\n      </div>');
            t.append(e), e.affix({
                offset: {
                    top: t.offset().top,
                    bottom: 78
                }
            }), t.find('[data-instruction="close"]').click(function() {
                e.hide()
            })
        })
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var o = n(0),
        r = function(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }(o);
    e.default = i
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = function() {
        var t = (0, o.default)('[data-headershare="open"]');
        t.length && t.each(function(t, e) {
            (0, o.default)(e).click(function() {
                "undefined" != typeof yaCounter38853395 && yaCounter38853395.reachGoal("social")
            })
        })
    };
    var i = n(0),
        o = function(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }(i)
}, function(t, e, n) {
    "use strict";

    function i(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = function() {
        s.default.get("firstTimeKotkurs") || (0, l.warning)({
            title: "",
            text: '<div style="text-align: left;"> <span style="width: 30px; height: 30px;display: inline-block; margin-right: 12px; margin-left: 12px;"> <img src="/images/gift1.svg" style="opacity: 0.5;"> </span> <span style="display: inline-block;"> <b>Ежедневный розыгрыш Bitcoin!</b> Главные призы: iPhone X, Apple Watch и JBL Charge 3. <br> Подробнее на <a href="http://kassa.gift" target="_blank">kassa.gift</a></span> </div>'
        }), s.default.set("firstTimeKotkurs", !0, {
            expires: 60
        });
        var t = (0, r.default)(".header_37X,.userpanel_2iA,.HW_badge_cont"),
            e = (0, r.default)(".HW_badge_cont"),
            n = (0, r.default)("body");
        t.click(function(t) {
            if (0 == (0, r.default)(".konkurs_alert").length) {
                var i = function() {
                    s[l].className = "slide", l = (l + 1) % s.length, s[l].className = "slide showing"
                };
                g = (0, r.default)('[data-container="alert"]');
                var o = (0, r.default)(".userpanel_crown");
                e.hasClass("HW_mobile") && n.css("overflow", "hidden"), g.affix({
                    offset: {
                        top: o.top
                    }
                });
                var a = (0, r.default)("<div />", {
                    class: "alert_w4q konkurs_alert_w4q",
                    html: u("priz1_sm.png", "awatch_sm.png", "iphone_sm.png")
                });
                g.append(a);
                (0, r.default)(".konkurs_alert");
                a.find(".alert_2W1").click(function(t) {
                    t.preventDefault(), a.detach().remove(), clearInterval(c), n.css("overflow", "")
                });
                var s = a.find(".slide"),
                    l = 0,
                    c = setInterval(i, 2e3)
            }
        })
    };
    var o = n(0),
        r = i(o),
        a = n(3),
        s = i(a),
        l = n(1),
        g = null,
        u = function() {
            return '\n  <div class="konkurs_alert">\n    <div class="kotkurs_alert_img">\n      <div class="slider">\n        <div class="slides slide showing">\n          <img src="data:image/png;base64,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" />\n        </div>\n        <div class="slides slide">\n          <img src="data:image/png;base64,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">\n        </div>\n        <div class="slides slide">\n          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAACXBIWXMAAC4jAAAuIwF4pT92AAABNmlDQ1BQaG90b3Nob3AgSUNDIHByb2ZpbGUAAHjarY6xSsNQFEDPi6LiUCsEcXB4kygotupgxqQtRRCs1SHJ1qShSmkSXl7VfoSjWwcXd7/AyVFwUPwC/0Bx6uAQIYODCJ7p3MPlcsGo2HWnYZRhEGvVbjrS9Xw5+8QMUwDQCbPUbrUOAOIkjvjB5ysC4HnTrjsN/sZ8mCoNTIDtbpSFICpA/0KnGsQYMIN+qkHcAaY6addAPAClXu4vQCnI/Q0oKdfzQXwAZs/1fDDmADPIfQUwdXSpAWpJOlJnvVMtq5ZlSbubBJE8HmU6GmRyPw4TlSaqo6MukP8HwGK+2G46cq1qWXvr/DOu58vc3o8QgFh6LFpBOFTn3yqMnd/n4sZ4GQ5vYXpStN0ruNmAheuirVahvAX34y/Axk/96FpPYgAAPL5pVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+Cjx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4KICAgPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICAgICAgPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIKICAgICAgICAgICAgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIgogICAgICAgICAgICB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIKICAgICAgICAgICAgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIKICAgICAgICAgICAgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIgogICAgICAgICAgICB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iCiAgICAgICAgICAgIHhtbG5zOnRpZmY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vdGlmZi8xLjAvIgogICAgICAgICAgICB4bWxuczpleGlmPSJodHRwOi8vbnMuYWRvYmUuY29tL2V4aWYvMS4wLyI+CiAgICAgICAgIDx4bXA6Q3JlYXRvclRvb2w+QWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpPC94bXA6Q3JlYXRvclRvb2w+CiAgICAgICAgIDx4bXA6Q3JlYXRlRGF0ZT4yMDE4LTAxLTI0VDEzOjA0OjExKzAzOjAwPC94bXA6Q3JlYXRlRGF0ZT4KICAgICAgICAgPHhtcDpNZXRhZGF0YURhdGU+MjAxOC0wMi0wOFQxNjoyODoyNyswMzowMDwveG1wOk1ldGFkYXRhRGF0ZT4KICAgICAgICAgPHhtcDpNb2RpZnlEYXRlPjIwMTgtMDItMDhUMTY6Mjg6MjcrMDM6MDA8L3htcDpNb2RpZnlEYXRlPgogICAgICAgICA8eG1wTU06SW5zdGFuY2VJRD54bXAuaWlkOjc2NWU4YjRiLTU1ODMtMWU0MC1hY2ZmLTIzNDRmMzMzNWY5ZDwveG1wTU06SW5zdGFuY2VJRD4KICAgICAgICAgPHhtcE1NOkRvY3VtZW50SUQ+YWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOjBjODY3MTQ2LTdlYmEtZTE0Ni04Y2Q2LTdiOWY0OTdjZGFlZTwveG1wTU06RG9jdW1lbnRJRD4KICAgICAgICAgPHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD54bXAuZGlkOmI1N2MxNWRiLWQ5YmEtOWE0NC1iYTQwLWM5Mzg4YjQ0MTRmZTwveG1wTU06T3JpZ2luYWxEb2N1bWVudElEPgogICAgICAgICA8eG1wTU06SGlzdG9yeT4KICAgICAgICAgICAgPHJkZjpTZXE+CiAgICAgICAgICAgICAgIDxyZGY6bGkgcmRmOnBhcnNlVHlwZT0iUmVzb3VyY2UiPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6YWN0aW9uPmNyZWF0ZWQ8L3N0RXZ0OmFjdGlvbj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0Omluc3RhbmNlSUQ+eG1wLmlpZDpiNTdjMTVkYi1kOWJhLTlhNDQtYmE0MC1jOTM4OGI0NDE0ZmU8L3N0RXZ0Omluc3RhbmNlSUQ+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDp3aGVuPjIwMTgtMDEtMjRUMTM6MDQ6MTErMDM6MDA8L3N0RXZ0OndoZW4+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDpzb2Z0d2FyZUFnZW50PkFkb2JlIFBob3Rvc2hvcCBDQyAoV2luZG93cyk8L3N0RXZ0OnNvZnR3YXJlQWdlbnQ+CiAgICAgICAgICAgICAgIDwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpIHJkZjpwYXJzZVR5cGU9IlJlc291cmNlIj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OmFjdGlvbj5zYXZlZDwvc3RFdnQ6YWN0aW9uPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6aW5zdGFuY2VJRD54bXAuaWlkOjA2ZmY1ZWE1LTRmMjUtYTk0Mi1iNjU1LWMwMzQxZTE3NWYxYjwvc3RFdnQ6aW5zdGFuY2VJRD4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OndoZW4+MjAxOC0wMS0yNFQxMzowNDoxMSswMzowMDwvc3RFdnQ6d2hlbj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OnNvZnR3YXJlQWdlbnQ+QWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKTwvc3RFdnQ6c29mdHdhcmVBZ2VudD4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OmNoYW5nZWQ+Lzwvc3RFdnQ6Y2hhbmdlZD4KICAgICAgICAgICAgICAgPC9yZGY6bGk+CiAgICAgICAgICAgICAgIDxyZGY6bGkgcmRmOnBhcnNlVHlwZT0iUmVzb3VyY2UiPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6YWN0aW9uPnNhdmVkPC9zdEV2dDphY3Rpb24+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDppbnN0YW5jZUlEPnhtcC5paWQ6NzY1ZThiNGItNTU4My0xZTQwLWFjZmYtMjM0NGYzMzM1ZjlkPC9zdEV2dDppbnN0YW5jZUlEPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6d2hlbj4yMDE4LTAyLTA4VDE2OjI4OjI3KzAzOjAwPC9zdEV2dDp3aGVuPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6c29mdHdhcmVBZ2VudD5BZG9iZSBQaG90b3Nob3AgQ0MgMjAxNyAoV2luZG93cyk8L3N0RXZ0OnNvZnR3YXJlQWdlbnQ+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDpjaGFuZ2VkPi88L3N0RXZ0OmNoYW5nZWQ+CiAgICAgICAgICAgICAgIDwvcmRmOmxpPgogICAgICAgICAgICA8L3JkZjpTZXE+CiAgICAgICAgIDwveG1wTU06SGlzdG9yeT4KICAgICAgICAgPHBob3Rvc2hvcDpDb2xvck1vZGU+MzwvcGhvdG9zaG9wOkNvbG9yTW9kZT4KICAgICAgICAgPHBob3Rvc2hvcDpJQ0NQcm9maWxlPkFkb2JlIFJHQiAoMTk5OCk8L3Bob3Rvc2hvcDpJQ0NQcm9maWxlPgogICAgICAgICA8cGhvdG9zaG9wOkRvY3VtZW50QW5jZXN0b3JzPgogICAgICAgICAgICA8cmRmOkJhZz4KICAgICAgICAgICAgICAgPHJkZjpsaT5hZG9iZTpkb2NpZDpwaG90b3Nob3A6NmVjYzgxNjUtNzA1YS0zNzQyLWE2MTktMWMzNGY3ZmUzNTNkPC9yZGY6bGk+CiAgICAgICAgICAgIDwvcmRmOkJhZz4KICAgICAgICAgPC9waG90b3Nob3A6RG9jdW1lbnRBbmNlc3RvcnM+CiAgICAgICAgIDxkYzpmb3JtYXQ+aW1hZ2UvcG5nPC9kYzpmb3JtYXQ+CiAgICAgICAgIDx0aWZmOk9yaWVudGF0aW9uPjE8L3RpZmY6T3JpZW50YXRpb24+CiAgICAgICAgIDx0aWZmOlhSZXNvbHV0aW9uPjMwMDAwMDAvMTAwMDA8L3RpZmY6WFJlc29sdXRpb24+CiAgICAgICAgIDx0aWZmOllSZXNvbHV0aW9uPjMwMDAwMDAvMTAwMDA8L3RpZmY6WVJlc29sdXRpb24+CiAgICAgICAgIDx0aWZmOlJlc29sdXRpb25Vbml0PjI8L3RpZmY6UmVzb2x1dGlvblVuaXQ+CiAgICAgICAgIDxleGlmOkNvbG9yU3BhY2U+NjU1MzU8L2V4aWY6Q29sb3JTcGFjZT4KICAgICAgICAgPGV4aWY6UGl4ZWxYRGltZW5zaW9uPjIwMDwvZXhpZjpQaXhlbFhEaW1lbnNpb24+CiAgICAgICAgIDxleGlmOlBpeGVsWURpbWVuc2lvbj4yMDA8L2V4aWY6UGl4ZWxZRGltZW5zaW9uPgogICAgICA8L3JkZjpEZXNjcmlwdGlvbj4KICAgPC9yZGY6UkRGPgo8L3g6eG1wbWV0YT4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAKPD94cGFja2V0IGVuZD0idyI/PvENoSkAAAAgY0hSTQAAeiUAAICDAAD5/wAAgOgAAFIIAAEVWAAAOpcAABdv11ofkAAASMJJREFUeNrsvVuQZtd13/dba5/zfV9f5o4BMBiABEAQJAiQIileoBsluyzRF4l24lhlR7aqElfZZT/EZfsheZCf9JDKi5IqV/LkWJLLD5ZsS2X6ktChLJu2E5cpixdQJEWJF4C4Debe9+87Z++Vh7X2OV8PMIPBgE4pVWejunrQ3dPd073/Z63/Wv/1X2JmTGc603njo9OPYDrTmQAynelMAJnOdCaATGc6E0CmM50JINOZzgSQ6UxnAsh0pjMBZDrTmQAynelMZwLIdKYzAWQ603nbp5l+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">\n        </div>\n      </div>\n    </div>\n    <div class="kotkurs_alert_text">\n        <div class="title">Розыгрыш Bitcoin каждый день!</div>\n        <div class="info">Новый розыгрыш подарков от Kassa.cc. Каждый<br>день разыгрываем 0.001 Bitcoin! Главные призы:<br>iPhone X, Apple Watch, JBL Charge 3</div>\n        <div class="buttons">\n          <a href="http://kassa.gift"><span class="alert_YTj">Участвовать</span></a>\n          <a href="#"><span class="alert_2W1">Нет, спасибо</span></a>\n        </div>\n    </div>\n  </div>\n'
        }
}, function(t, e, n) {
    "use strict";

    function i(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = function() {
        (0, r.default)('[data-requestToggle="row"]').each(function(t, e) {
            var n = (0, r.default)(e);
            n.find('[data-toggle="requestToggle"]').click(function() {
                n.hasClass("lk_3uq") ? n.removeClass("lk_3uq").addClass("lk_15T") : n.removeClass("lk_15T").addClass("lk_3uq")
            })
        }), window.onload = function() {
            s.default.get("sendDataFg") || ("undefined" != typeof yaCounter38853395 && "undefined" != typeof userdata && (yaCounter38853395.setUserID(userdata.email), yaCounter38853395.userParams(userdata)), s.default.set("sendDataFg", !0, {
                expires: 1
            }))
        }
    };
    var o = n(0),
        r = i(o),
        a = n(3),
        s = i(a)
}, function(t, e, n) {
    "use strict";
    t.exports = function(t) {
        t('[data-toggle="loading"]').click(function() {
            t(this).toggleClass("loading")
        })
    }
}, function(t, e, n) {
    "use strict";

    function i(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    var o = n(13),
        r = i(o),
        a = n(3);
    i(a), n(1);
    t.exports = function(t, e) {
        t('[data-container="main"]').length && t(e).resize(function() {
            (0, r.default)()
        }).resize()
    }
}, function(t, e, n) {
    "use strict";
    var i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t
    } : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    };
    t.exports = function(t) {
        function e(e, o) {
            return this.each(function() {
                var r = t(this),
                    a = r.data("bs.modal"),
                    s = t.extend({}, n.DEFAULTS, r.data(), "object" == (void 0 === e ? "undefined" : i(e)) && e);
                a || r.data("bs.modal", a = new n(this, s)), "string" == typeof e ? a[e](o) : s.show && a.show(o)
            })
        }
        var n = function(e, n) {
            this.options = n, this.$body = t(document.body), this.$element = t(e), this.$dialog = this.$element.find('[data-modal="dialog"]'), this.$backdrop = null, this.isShown = null, this.originalBodyPad = null, this.scrollbarWidth = 0, this.ignoreBackdropClick = !1, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, t.proxy(function() {
                this.$element.trigger("loaded.bs.modal")
            }, this))
        };
        n.VERSION = "3.3.6", n.TRANSITION_DURATION = 300, n.BACKDROP_TRANSITION_DURATION = 150, n.DEFAULTS = {
            backdrop: !0,
            keyboard: !0,
            show: !0
        }, n.prototype.toggle = function(t) {
            return this.isShown ? this.hide() : this.show(t)
        }, n.prototype.show = function(e) {
            var i = this,
                o = t.Event("show.bs.modal", {
                    relatedTarget: e
                });
            this.$element.trigger(o), this.isShown || o.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.setScrollbar(), this.$body.addClass("modal-open"), this.escape(), this.resize(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', t.proxy(this.hide, this)), this.$dialog.on("mousedown.dismiss.bs.modal", function() {
                i.$element.one("mouseup.dismiss.bs.modal", function(e) {
                    t(e.target).is(i.$element) && (i.ignoreBackdropClick = !0)
                })
            }), this.backdrop(function() {
                var o = t.support.transition && i.$element.hasClass("fade");
                i.$element.parent().length || i.$element.appendTo(i.$body), i.$element.show().scrollTop(0), i.adjustDialog(), o && i.$element[0].offsetWidth, i.$element.addClass("in"), i.enforceFocus();
                var r = t.Event("shown.bs.modal", {
                    relatedTarget: e
                });
                o ? i.$dialog.one("bsTransitionEnd", function() {
                    i.$element.trigger("focus").trigger(r)
                }).emulateTransitionEnd(n.TRANSITION_DURATION) : i.$element.trigger("focus").trigger(r)
            }))
        }, n.prototype.hide = function(e) {
            e && e.preventDefault(), e = t.Event("hide.bs.modal"), this.$element.trigger(e), this.isShown && !e.isDefaultPrevented() && (this.isShown = !1, this.escape(), this.resize(), t(document).off("focusin.bs.modal"), this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"), this.$dialog.off("mousedown.dismiss.bs.modal"), t.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", t.proxy(this.hideModal, this)).emulateTransitionEnd(n.TRANSITION_DURATION) : this.hideModal())
        }, n.prototype.enforceFocus = function() {
            t(document).off("focusin.bs.modal").on("focusin.bs.modal", t.proxy(function(t) {
                document === t.target || this.$element[0] === t.target || this.$element.has(t.target).length || this.$element.trigger("focus")
            }, this))
        }, n.prototype.escape = function() {
            this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", t.proxy(function(t) {
                27 == t.which && this.hide()
            }, this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal")
        }, n.prototype.resize = function() {
            this.isShown ? t(window).on("resize.bs.modal", t.proxy(this.handleUpdate, this)) : t(window).off("resize.bs.modal")
        }, n.prototype.hideModal = function() {
            var t = this;
            this.$element.hide(), this.backdrop(function() {
                t.$body.removeClass("modal-open"), t.resetAdjustments(), t.resetScrollbar(), t.$element.trigger("hidden.bs.modal")
            })
        }, n.prototype.removeBackdrop = function() {
            this.$backdrop && this.$backdrop.remove(), this.$backdrop = null
        }, n.prototype.backdrop = function(e) {
            var i = this,
                o = this.$element.hasClass("fade") ? "fade" : "";
            if (this.isShown && this.options.backdrop) {
                var r = t.support.transition && o;
                if (this.$backdrop = t(document.createElement("div")).addClass("modal-backdrop " + o).appendTo(this.$body), this.$element.on("click.dismiss.bs.modal", t.proxy(function(t) {
                        if (this.ignoreBackdropClick) return void(this.ignoreBackdropClick = !1);
                        t.target === t.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus() : this.hide())
                    }, this)), r && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !e) return;
                r ? this.$backdrop.one("bsTransitionEnd", e).emulateTransitionEnd(n.BACKDROP_TRANSITION_DURATION) : e()
            } else if (!this.isShown && this.$backdrop) {
                this.$backdrop.removeClass("in");
                var a = function() {
                    i.removeBackdrop(), e && e()
                };
                t.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", a).emulateTransitionEnd(n.BACKDROP_TRANSITION_DURATION) : a()
            } else e && e()
        }, n.prototype.handleUpdate = function() {
            this.adjustDialog()
        }, n.prototype.adjustDialog = function() {
            var t = this.$element[0].scrollHeight > document.documentElement.clientHeight;
            this.$element.css({
                paddingLeft: !this.bodyIsOverflowing && t ? this.scrollbarWidth : "",
                paddingRight: this.bodyIsOverflowing && !t ? this.scrollbarWidth : ""
            })
        }, n.prototype.resetAdjustments = function() {
            this.$element.css({
                paddingLeft: "",
                paddingRight: ""
            })
        }, n.prototype.checkScrollbar = function() {
            var t = window.innerWidth;
            if (!t) {
                var e = document.documentElement.getBoundingClientRect();
                t = e.right - Math.abs(e.left)
            }
            this.bodyIsOverflowing = document.body.clientWidth < t, this.scrollbarWidth = this.measureScrollbar()
        }, n.prototype.setScrollbar = function() {
            var t = parseInt(this.$body.css("padding-right") || 0, 10);
            this.originalBodyPad = document.body.style.paddingRight || "", this.bodyIsOverflowing && this.$body.css("padding-right", t + this.scrollbarWidth)
        }, n.prototype.resetScrollbar = function() {
            this.$body.css("padding-right", this.originalBodyPad)
        }, n.prototype.measureScrollbar = function() {
            var t = document.createElement("div");
            t.className = "modal-scrollbar-measure", this.$body.append(t);
            var e = t.offsetWidth - t.clientWidth;
            return this.$body[0].removeChild(t), e
        };
        var o = t.fn.modal;
        t.fn.modal = e, t.fn.modal.Constructor = n, t.fn.modal.noConflict = function() {
            return t.fn.modal = o, this
        }, t(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function(n) {
            var i = t(this),
                o = i.attr("href"),
                r = t(i.attr("data-target") || o && o.replace(/.*(?=#[^\s]+$)/, "")),
                a = r.data("bs.modal") ? "toggle" : t.extend({
                    remote: !/#/.test(o) && o
                }, r.data(), i.data());
            i.is("a") && n.preventDefault(), r.one("show.bs.modal", function(t) {
                t.isDefaultPrevented() || r.one("hidden.bs.modal", function() {
                    i.is(":visible") && i.trigger("focus")
                })
            }), e.call(r, a, this)
        })
    }
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = function() {
        var t = (0, o.default)("body");
        (0, o.default)('[data-toggle="news-menu"]').click(function() {
            t.toggleClass(r)
        })
    };
    var i = n(0),
        o = function(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }(i),
        r = "menu-open"
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = function() {
        (0, o.default)('[data-toggle="onlyNumber"]').keydown(function(t) {
            -1 !== o.default.inArray(t.keyCode, [46, 8, 9, 27, 13, 110, 190, 188]) || 65 == t.keyCode && !0 === t.ctrlKey || 67 == t.keyCode && !0 === t.ctrlKey || 88 == t.keyCode && !0 === t.ctrlKey || t.keyCode >= 35 && t.keyCode <= 39 || (t.shiftKey || t.keyCode < 48 || t.keyCode > 57) && (t.keyCode < 96 || t.keyCode > 105) && t.preventDefault()
        }), (0, o.default)('[data-toggle="onlyNumber"]').keyup(function(t) {
            if (188 == t.keyCode || 190 == t.keyCode) {
                var e = (0, o.default)('[data-exchange-field="input"]'),
                    n = (0, o.default)('[data-exchange-field="output"]');
                return e.val(e.val().replace(/[^0-9]/gi, ".")), void n.val(n.val().replace(/[^0-9]/gi, "."))
            }
        })
    };
    var i = n(0),
        o = function(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }(i)
}, function(t, e, n) {
    "use strict";

    function i(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }

    function o() {
        (0, a.default)("#recoveryPassword").on("submit", function(t) {
            t.preventDefault();
            var e = (0, a.default)(this),
                n = e.attr("method"),
                i = e.attr("action"),
                o = e.serialize();
            return a.default.ajax({
                type: n,
                url: i,
                data: o,
                resetForm: "true",
                success: function(t) {
                    (0, a.default)("#modalPasswordReset").modal("show")
                },
                error: function(t) {
                    var n = t.responseJSON.fields;
                    a.default.each(n, function(t, n) {
                        "recaptcha" == t ? (0, l.default)(e.find("#gRecaptcha").parents(".err_message"), {
                            title: "Ошибка!",
                            text: n,
                            theme: "danger"
                        }) : (0, l.default)(e.find("input[name=" + t + "]").parents(".err_message"), {
                            title: "Ошибка!",
                            text: n,
                            theme: "danger"
                        })
                    })
                }
            }), !1
        }), (0, a.default)("#restylePassword").on("submit", function(t) {
            t.preventDefault();
            var e = (0, a.default)(this),
                n = e.attr("method"),
                i = e.attr("action"),
                o = e.serialize();
            return a.default.ajax({
                type: n,
                url: i,
                data: o,
                resetForm: "true",
                success: function(t) {
                    window.location = "/"
                },
                error: function(t) {
                    var n = t.responseJSON.fields;
                    a.default.each(n, function(t, n) {
                        (0, l.default)(e.find("input[name=" + t + "]").parents(".err_message"), {
                            title: "Ошибка!",
                            text: n,
                            theme: "danger"
                        })
                    })
                }
            }), !1
        })
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = o;
    var r = n(0),
        a = i(r),
        s = n(2),
        l = i(s)
}, function(t, e, n) {
    "use strict";

    function i() {
        var t = (0, a.default)('[data-kassa-tabs="kassaTabs"]'),
            e = (0, a.default)('[data-tabs-anchor="block"]');
        if (!t) return !1;
        var n = "#widget" == window.location.hash || "#banners" == window.location.hash ? window.location.hash : "#banners";
        t.click(function() {
            t.removeClass("lk_menu_3eo"), (0, a.default)(this).addClass("lk_menu_3eo"), n = (0, a.default)(this).attr("href"), e.hide(), (0, a.default)('[data-tabs="' + n + '"]').show()
        }), e.hide(), (0, a.default)('[data-tabs="' + n + '"]').show(), (0, a.default)('[href="' + n + '"]').addClass("lk_menu_3eo")
    }

    function o() {
        I = g.filter(":checked").val(), p = u.filter(":checked").val(), h = c.filter(":checked").val(), m = d.val(), v = A.val(), s = '<div class="kassa-widget-container"></div>\n<script type="text/javascript" src="https://kassa.cc/widget/widget.js"><\/script>\n<script type="text/javascript">\n    createKassaWidget({\n        "ref": "' + l + '",\n        "border": "' + I + '",\n        "type": "' + p + '",\n        "kassa": "' + h + '",\n        "from": "' + m + '",\n        "to": "' + v + '"\n    });\n<\/script>', window.createKassaWidget({
            ref: l,
            border: I,
            type: p,
            kassa: h,
            from: m,
            to: v
        }), (0, a.default)(".kassaWidgetCode textarea").text(s), "horizont" != p ? f.addClass("nohorizont") : f.removeClass("nohorizont"), C.attr("href", "/show_widget?ref=" + l + "&border=" + I + "&type=" + p + "&kassa=" + h + "&from=" + m + "&to=" + v)
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = function() {
        var t = (0, a.default)('[data-promo="block"]');
        t.length && t.each(function(t, e) {
            var n = (0, a.default)(e),
                i = n.find('[data-promo="wrapper"]');
            n.hover(function() {
                if ((0, a.default)(window).width() <= 766) return !1;
                i.stop().fadeToggle(300)
            });
            var o = n.find('[data-promo="button-show"]'),
                r = n.find('[data-promo="text"]'),
                s = n.find('[data-toggle="clipboard"]'),
                l = function() {
                    o.hide(), r.show()
                };
            s.click(l), o.click(l)
        }), void 0 !== window.createKassaWidget && (o(), g.add(u).add(c).add(d).add(A).change(function(t) {
            o()
        })), i()
    };
    var r = n(0),
        a = function(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }(r),
        s = "",
        l = (0, a.default)("[data-referal-link]").data("referal-link"),
        g = (0, a.default)('[name="widget_outline"]'),
        u = (0, a.default)('[name="widget_type"]'),
        c = (0, a.default)('[name="widget_open"]'),
        d = (0, a.default)('[name="widget_from"]'),
        A = (0, a.default)('[name="widget_to"]'),
        f = (0, a.default)(".widget_horLtd"),
        C = (0, a.default)(".widgetLinkFromShow"),
        I = "",
        p = "",
        h = "",
        m = "",
        v = ""
}, function(t, e, n) {
    "use strict";

    function i(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }

    function o() {
        (0, a.default)(".sel_ref_ps").change(function(t) {
            var e = (0, a.default)(this).val(),
                n = list_input_type1[0][e],
                i = list_input[0][e][n];
            (0, a.default)("#referal_form .acc_num").css("display", "block"), 10 == e ? (0, a.default)("#referal_form .unk_num").css("display", "block") : 2 == e || 15 == e || 24 == e ? (0, a.default)("#referal_form .acc_num").css("display", "none") : (0, a.default)("#referal_form .unk_num").css("display", "none"), (0, a.default)("#referal_form .fio_usr").css("display", 1 == n || 2 == n ? "block" : "none"), (0, a.default)("#referal_form .acc_num .form_3Mi").text(i)
        }), (0, a.default)(".buttons_2FG").click(function() {
            (0, a.default)("#modalHistoryReward").modal("hide"), (0, a.default)("#modalHistoryRef").modal("hide")
        }), (0, a.default)("#referal_form").on("submit", function(t) {
            t.preventDefault();
            var e = (0, a.default)(this),
                n = e.attr("method"),
                i = e.attr("action"),
                o = e.serialize();
            return a.default.ajax({
                type: n,
                url: i,
                data: o,
                resetForm: "true",
                success: function(t) {
                    (0, a.default)("#modalCashoutRef").modal("hide"), (0, a.default)("#modalFailReferal").find(".modal_3o0").html(t.message), (0, a.default)("#modalFailReferal").modal()
                },
                error: function(t) {
                    var n = t.responseJSON.fields;
                    a.default.each(n, function(t, n) {
                        (0, l.default)(e.find("." + t), {
                            title: "Ошибка!",
                            text: n,
                            theme: "danger"
                        })
                    })
                }
            }), !1
        })
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = o;
    var r = n(0),
        a = i(r),
        s = (n(1), n(2)),
        l = i(s)
}, function(t, e, n) {
    "use strict";

    function i(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }

    function o() {
        (0, a.default)("#registration").on("submit", function(t) {
            t.preventDefault();
            var e = (0, a.default)(this),
                n = e.attr("method"),
                i = e.attr("action"),
                o = e.serialize();
            return a.default.ajax({
                type: n,
                url: i,
                data: o,
                resetForm: "true",
                success: function(t) {
                    window.location = "/application"
                },
                error: function(t) {
                    var n = t.responseJSON.fields;
                    a.default.each(n, function(t, n) {
                        (0, l.default)(e.find("input[name=" + t + "]").parents(".err_message"), {
                            title: "Ошибка!",
                            text: n,
                            theme: "danger"
                        })
                    })
                }
            }), !1
        })
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = o;
    var r = n(0),
        a = i(r),
        s = n(2),
        l = i(s)
}, function(t, e, n) {
    "use strict";

    function i(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }

    function o() {
        var t = (0, a.default)("#reserves_add");
        (0, a.default)("#modalReserve").on("show.bs.modal", function(e) {
            var n = (0, a.default)(e.relatedTarget),
                i = n.attr("data-payment");
            i && t.find('input[name="id_ps"]').val(i)
        }), (0, a.default)(".buttons_3Cx").click(function() {
            t.find('input[name="id_ps"]').val((0, a.default)(this).parents(".main_k0X").data("body"))
        }), t.on("submit", function(e) {
            e.preventDefault();
            var n = (0, a.default)(this).attr("method"),
                i = (0, a.default)(this).attr("action"),
                o = (0, a.default)(this).serialize();
            return a.default.ajax({
                type: n,
                url: i,
                data: o,
                resetForm: "true",
                success: function(t) {
                    (0, a.default)("#modalReservesSuccess").modal("show"), (0, a.default)("#modalReserve").modal("hide")
                },
                error: function(e) {
                    var n = e.responseJSON.fields;
                    a.default.each(n, function(e, n) {
                        (0, l.default)(t.find('input[name="' + e + '"]').parents("label"), {
                            title: "Ошибка!",
                            text: n,
                            theme: "danger"
                        })
                    })
                }
            }), !1
        })
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = o;
    var r = n(0),
        a = i(r),
        s = n(2),
        l = i(s)
}, function(t, e, n) {
    "use strict";

    function i(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }

    function o() {
        (0, a.default)("#settingsForm").on("submit", function(t) {
            t.preventDefault();
            var e = (0, a.default)(this),
                n = e.attr("method"),
                i = e.attr("action"),
                o = e.serialize();
            return a.default.ajax({
                type: n,
                url: i,
                data: o,
                resetForm: "true",
                success: function(t, e, n) {
                    var e = n.status;
                    204 == e ? (0, s.danger)({
                        title: "Статус:",
                        text: "Вы не ввели никаких данных"
                    }) : 200 == e ? (0, s.warning)({
                        title: "Статус:",
                        text: "Данные успешно изменены"
                    }) : (0, s.danger)({
                        title: "Ошибка!",
                        text: "Нет соединения с сервером"
                    })
                },
                error: function(t) {
                    var n = t.responseJSON.fields,
                        i = 0;
                    a.default.each(n, function(t, n) {
                        (0, g.default)(e.find("input[name=" + t + "]").parents(".form_2Ix"), {
                            title: "Ошибка!",
                            text: n,
                            theme: "danger"
                        }), 0 == i ? (0, a.default)("html, body").animate({
                            scrollTop: (0, a.default)("input[name=" + t + "]").offset().top
                        }, 500) : i++
                    })
                }
            }), !1
        }), (0, a.default)("#settingsStoreForm").on("submit", function(t) {
            t.preventDefault();
            var e = (0, a.default)(this),
                n = e.attr("method"),
                i = e.attr("action"),
                o = e.serialize();
            return a.default.ajax({
                type: n,
                url: i,
                data: o,
                resetForm: "true",
                success: function(t, e, n) {
                    var e = n.status;
                    204 == e ? (0, s.danger)({
                        title: "Статус:",
                        text: "Вы не ввели никаких данных"
                    }) : 200 == e ? (0, s.warning)({
                        title: "Статус:",
                        text: "Данные успешно изменены"
                    }) : (0, s.danger)({
                        title: "Ошибка!",
                        text: "Нет соединения с сервером"
                    })
                },
                error: function(t) {
                    var n = t.responseJSON.fields;
                    a.default.each(n, function(t, n) {
                        (0, s.danger)({
                            title: "Ошибка!",
                            text: n
                        }), (0, g.default)(e.find("input[name=" + t + "]").eq(0).parents(".form_2Ix"), {
                            title: "Ошибка!",
                            text: n,
                            theme: "danger"
                        })
                    })
                }
            }), !1
        });
        var t = (0, a.default)("#verModalProcessStoreText"),
            e = (0, a.default)("#verModalProcessStoreBar"),
            n = (0, a.default)("#verModalProcessStoreContainer");
        (0, a.default)("#inputStoreLogo").fileupload({
            dataType: "json",
            add: function(i, o) {
                n.show();
                t.text("0%"), e.css("width", "0%"), o.submit()
            },
            done: function(t, e) {
                (0, a.default)('[name="logo_name"]').val(e.result.files[0].name), (0, a.default)("#storeLogoImage").attr("src", e.result.files[0].thumbnailUrl)
            },
            progressall: function(n, i) {
                var o = parseInt(i.loaded / i.total * 100, 10);
                o += "%", t.text(o), e.css("width", o)
            }
        }), (0, a.default)("#removeInputData").on("click", function(t) {
            return (0, u.removeSafeInputData)(), !1
        })
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = o;
    var r = n(0),
        a = i(r),
        s = n(1),
        l = n(2),
        g = i(l),
        u = n(5)
}, function(t, e, n) {
    "use strict";

    function i(t, e, n) {
        e.countdown(n).on("update.countdown", function(t) {
            var n = t.strftime("%-M");
            e.html(n < 1 ? 1 : n)
        }).on("finish.countdown", function() {
            t.html(l.processingLong)
        })
    }

    function o(t, e, n) {
        e.countdown(n).on("update.countdown", function(t) {
            var n = t.strftime("%-H");
            e.html(n < 1 ? 1 : n)
        }).on("finish.countdown", function() {
            t.html(l.freezeLong)
        })
    }

    function r(t) {
        var e = [];
        t.each(function(t, n) {
            e.push((0, s.default)(n).attr("data-ticket"))
        }), s.default.get("ticketsproc/get_status/", {}).done(function(e) {
            e.forEach(function(e) {
                var n = t.filter('[data-ticket="' + e.ticket_id + '"]');
                if (n.length || (t = t.not('[data-ticket="' + e.ticket_id + '"]')), parseInt(n.attr("data-ticket-status")) != e.status) {
                    var r = t.find("[data-ticket-countdown]");
                    if (void 0 !== r.data("countdown-instance") && r.countdown("remove"), 1 == e.status) n.html(l.success(e.check_number));
                    else if (2 == e.status) n.html(l.error(e.text));
                    else if (3 == e.status)
                        if (Date.now() - 1e3 * e.operation_date < 1728e5) {
                            n.html(l.freeze(e.inputSystem));
                            var a = n.find("[data-ticket-countdown]");
                            o(n, a, 1e3 * (e.operation_date + 172800))
                        } else n.html(l.freezeLong(e.inputSystem));
                    else if (9 == e.status) n.html(l.rejected(e.text));
                    else if (Date.now() - 1e3 * e.operation_date < 12e5) {
                        n.html(l.processing);
                        var s = n.find("[data-ticket-countdown]");
                        i(n, s, 1e3 * (e.operation_date + 1200))
                    } else n.html(l.processingLong);
                    0 != e.status && 3 != e.status && (t = t.not('[data-ticket="' + e.ticket_id + '"]'))
                }
            })
        }).always(function() {
            t.length > 0 && setTimeout(function() {
                r(t)
            }, 2e4)
        })
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = function() {
        var t = (0, s.default)("[data-ticket]");
        t.length && (t.each(function(t, e) {
            var n = (0, s.default)(e),
                r = n.attr("data-ticket-status"),
                a = n.attr("data-ticket-finish");
            if (a) {
                a *= 1e3;
                var l = n.find("[data-ticket-countdown]");
                0 == r ? i(n, l, a) : 8 == r && o(n, l, a)
            }
        }), setTimeout(function() {
            r(t)
        }, 2e4))
    };
    var a = n(0),
        s = function(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }(a),
        l = {
            processing: '<div class="lk_ZVJ">\n    <div class="lk_3Ie">\n      <span class="lk_1NV"></span>\n    </div>\n    <div class="lk_1jN">Ожидает обработки</div>\n    <div class="lk_w9T">\n      Ваша заявка будет обработана в течении\n      <span data-ticket-countdown>20 минут</span>\n    </div>\n  </div>',
            processingLong: '<div class="lk_ZVJ">\n    <div class="lk_3Ie">\n      <span class="lk_1NV"></span>\n    </div>\n    <div class="lk_1jN">Ожидает обработки</div>\n    <div class="lk_w9T">\n      В ближайшее время заявка будет обработана.<br>\n      Если у вас есть вопросы\n      <a href="#" onclick="jivo_api.open(); return false;">\n        напишите в поддержку.\n      </a>\n    </div>\n  </div>',
            success: function(t) {
                return '<div class="lk_2-e">\n    <div class="lk_3Ie">\n      <span class="lk_2_-"></span>\n    </div>\n    <div class="lk_1jN">Заявка исполнена</div>\n    ' + (t ? '<div class="lk_w9T">\n      <strong>Номер чека WEX:</strong><br>\n      ' + t + "\n    </div>" : "") + "\n  </div>"
            },
            rejected: function(t) {
                return '<div class="lk_3Ij">\n    <div class="lk_3Ie">\n      <span class="lk_2yq"></span>\n    </div>\n    <div class="lk_1jN">Заявка отклонена</div>\n    <div class="lk_w9T">\n      <strong>Причина:</strong> ' + (t || "причина не указана") + "\n    </div>\n  </div>"
            },
            error: function(t) {
                return '<div class="lk_pwN">\n    <div class="lk_3Ie">\n      <span class="lk_1BJ"></span>\n    </div>\n    <div class="lk_1jN">Заявка с ошибкой</div>\n    <div class="lk_w9T">\n      <strong>Причина:</strong> ' + (t || "причина не указана") + "\n    </div>\n  </div>"
            },
            freeze: function(t) {
                return '<div class="lk_1wo">\n    <div class="lk_3Ie">\n      <span class="lk_3nN"></span>\n    </div>\n    <div class="lk_1jN">Заявка заморожена</div>\n    <div class="lk_w9T">\n      ' + (8 == t ? '\n        Это ваша первая заявка с текущего кошелька Яндекс.Деньги.\n        Она выйдет из заморозки и будет обработана через\n        <span data-ticket-countdown>48 ч</span>.\n        <a target="_blank" href="http://kassa.cc/faq#question-4">\n          Зачем замораживать первый платеж?\n        </a>\n        ' : "\n        <strong>Ваша заявка заморожена. Для уточнения причины свяжитесьс оператором.</strong>\n        ") + "\n    </div>\n  </div>"
            },
            freezeLong: function(t) {
                return '<div class="lk_1wo">\n    <div class="lk_3Ie">\n      <span class="lk_3nN"></span>\n    </div>\n    <div class="lk_1jN">Заявка заморожена</div>\n    <div class="lk_w9T">\n      ' + (8 == t ? '\n        Это ваша первая заявка с текущего кошелька Яндекс.Деньги.\n        Она выйдет из заморозки и будет обработана в ближайшее время.\n        <a target="_blank" href="http://kassa.cc/faq#question-4">\n          Зачем замораживать первый платеж?\n        </a>\n        ' : "\n        <strong>Ваша заявка заморожена. Для уточнения причины свяжитесьс оператором.</strong>\n        ") + "\n    </div>\n  </div>"
            }
        }
}, function(t, e, n) {
    "use strict";
    var i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t
    } : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    };
    t.exports = function(t) {
        function e(e, o) {
            return this.each(function() {
                var r = t(this),
                    a = r.data("bs.tooltip"),
                    s = "object" == (void 0 === e ? "undefined" : i(e)) && e;
                !a && /destroy|hide/.test(e) || (a || r.data("bs.tooltip", a = new n(this, s)), "string" == typeof e && ("destroy" == e ? a[e](o) : a[e]()))
            })
        }
        var n = function(t, e) {
            this.type = null, this.options = null, this.enabled = null, this.hoverState = null, this.$element = null, this.init("tooltip", t, e)
        };
        n.VERSION = "3.3.6-custom", n.TRANSITION_DURATION = 150, n.DEFAULTS = {
            title: null,
            text: "",
            theme: "default",
            animation: !0,
            template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><button type="button" class="tooltip-cross"></button><div class="tooltip-inner"><div class="tooltip-title"></div><div class="tooltip-text"></div></div></div>',
            control: "input",
            container: "",
            eventin: "focusin",
            eventout: "focusout",
            width: !1,
            viewport: {
                selector: "body",
                padding: 0
            }
        }, n.prototype.init = function(e, n, i) {
            this.enabled = !0, this.type = e, this.$element = t(n), this.options = this.getOptions(i), this.$viewport = this.options.viewport && t(t.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : this.options.viewport.selector || this.options.viewport), this.$control = this.options.control ? this.$element.find(this.options.control) : this.$element, this.$control.on(this.options.eventin + "." + this.type, t.proxy(this.enter, this)), this.$control.on(this.options.eventout + "." + this.type, t.proxy(this.leave, this))
        }, n.prototype.getDefaults = function() {
            return n.DEFAULTS
        }, n.prototype.getOptions = function(e) {
            return t.extend({}, this.getDefaults(), this.$element.data(), e)
        }, n.prototype.enter = function() {
            var t = this;
            return t.tip().hasClass("in") || "in" == t.hoverState ? void(t.hoverState = "in") : (t.hoverState = "in", t.show())
        }, n.prototype.leave = function() {
            var t = this;
            return t.hoverState = "out", t.hide()
        }, n.prototype.show = function() {
            var e = t.Event("show.bs." + this.type);
            if (this.enabled) {
                if (this.$element.trigger(e), e.isDefaultPrevented()) return;
                var i = this,
                    o = this.tip(),
                    r = this.getUID(this.type);
                this.setContent(), o.attr("id", r), this.$element.attr("aria-describedby", r), o.addClass("tooltip-" + this.options.theme), this.options.animation && o.addClass("fade");
                o.detach().css({
                    top: 0,
                    left: 0,
                    display: "block"
                }).addClass("bottom").data("bs." + this.type, this), this.options.container ? o.appendTo(this.options.container) : o.insertAfter(this.$element), this.$element.trigger("inserted.bs." + this.type);
                var a = this.getPosition(),
                    s = o[0].offsetWidth,
                    l = o[0].offsetHeight,
                    g = this.getCalculatedOffset("bottom", a, s, l);
                this.applyPlacement(g, "bottom");
                var u = function() {
                    var t = i.hoverState;
                    i.$element.trigger("shown.bs." + i.type), i.hoverState = null, "out" == t && i.leave(i)
                };
                t.support.transition && this.$tip.hasClass("fade") ? o.one("bsTransitionEnd", u).emulateTransitionEnd(n.TRANSITION_DURATION) : u()
            }
        }, n.prototype.applyPlacement = function(e, n) {
            var i = this.tip(),
                o = i[0].offsetWidth,
                r = i[0].offsetHeight,
                a = parseInt(i.css("margin-top"), 10),
                s = parseInt(i.css("margin-left"), 10);
            isNaN(a) && (a = 0), isNaN(s) && (s = 0), e.top += a, e.left += s, t.offset.setOffset(i[0], t.extend({
                using: function(t) {
                    i.css({
                        top: Math.round(t.top),
                        left: Math.round(t.left)
                    })
                }
            }, e), 0), i.addClass("in");
            var l = i[0].offsetWidth,
                g = i[0].offsetHeight;
            "top" == n && g != r && (e.top = e.top + r - g);
            var u = this.getViewportAdjustedDelta(n, e, l, g);
            u.left ? e.left += u.left : e.top += u.top;
            var c = 2 * u.left - o + l;
            i.offset(e), this.replaceArrow(c, i[0].offsetWidth)
        }, n.prototype.replaceArrow = function(t, e) {
            this.arrow().css("left", 50 * (1 - t / e) + "%").css("top", "")
        }, n.prototype.setContent = function() {
            var t = this.tip(),
                e = this.options.title,
                n = this.options.text,
                i = t.find(".tooltip-title");
            e ? i.text(e) : i.hide(), t.find(".tooltip-text").html(n), t.removeClass("fade in")
        }, n.prototype.hide = function(e) {
            function i() {
                "in" != o.hoverState && r.detach(), o.$element && o.$element.removeAttr("aria-describedby").trigger("hidden.bs." + o.type), e && e()
            }
            var o = this,
                r = t(this.$tip),
                a = t.Event("hide.bs." + this.type);
            if (this.$element.trigger(a), !a.isDefaultPrevented()) return r.removeClass("in"), t.support.transition && r.hasClass("fade") ? r.one("bsTransitionEnd", i).emulateTransitionEnd(n.TRANSITION_DURATION) : i(), this.hoverState = null, this
        }, n.prototype.getPosition = function(e) {
            e = e || this.$element;
            var n = e[0],
                i = "BODY" == n.tagName,
                o = n.getBoundingClientRect();
            null == o.width && (o = t.extend({}, o, {
                width: o.right - o.left,
                height: o.bottom - o.top
            }));
            var r = i ? {
                    top: 0,
                    left: 0
                } : e.offset(),
                a = {
                    scroll: i ? document.documentElement.scrollTop || document.body.scrollTop : e.scrollTop()
                },
                s = i ? {
                    width: t(window).width(),
                    height: t(window).height()
                } : null;
            return t.extend({}, o, a, s, r)
        }, n.prototype.getCalculatedOffset = function(t, e, n, i) {
            return "bottom" == t ? {
                top: e.top + e.height,
                left: e.left + e.width / 2 - n / 2
            } : {
                top: e.top - i,
                left: e.left + e.width / 2 - n / 2
            }
        }, n.prototype.getViewportAdjustedDelta = function(t, e, n, i) {
            var o = {
                top: 0,
                left: 0
            };
            if (!this.$viewport) return o;
            var r = this.options.viewport && this.options.viewport.padding || 0,
                a = this.getPosition(this.$viewport);
            if (/right|left/.test(t)) {
                var s = e.top - r - a.scroll,
                    l = e.top + r - a.scroll + i;
                s < a.top ? o.top = a.top - s : l > a.top + a.height && (o.top = a.top + a.height - l)
            } else {
                var g = e.left - r,
                    u = e.left + r + n;
                g < a.left ? o.left = a.left - g : u > a.right && (o.left = a.left + a.width - u)
            }
            return o
        }, n.prototype.getUID = function(t) {
            do {
                t += ~~(1e6 * Math.random())
            } while (document.getElementById(t));
            return t
        }, n.prototype.tip = function() {
            if (!this.$tip && (this.$tip = t(this.options.template), this.$tip.css("width", this.options.width || this.$element.outerWidth()), this.$tip.find(".tooltip-cross").click(t.proxy(this.leave, this)), 1 != this.$tip.length)) throw new Error(this.type + " `template` option must consist of exactly 1 top-level element!");
            return this.$tip
        }, n.prototype.arrow = function() {
            return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
        }, n.prototype.enable = function() {
            this.enabled = !0
        }, n.prototype.disable = function() {
            this.enabled = !1
        }, n.prototype.toggleEnabled = function() {
            this.enabled = !this.enabled
        }, n.prototype.destroy = function(t) {
            var e = this;
            clearTimeout(this.timeout), this.hide(function() {
                e.$control.off("." + e.type), e.$element.off("." + e.type).removeData("bs." + e.type), e.$tip && e.$tip.detach(), e.$tip = null, e.$arrow = null, e.$viewport = null, e.$element = null, e.$control = null, t && t()
            })
        };
        var o = t.fn.tooltip;
        t.fn.tooltip = e, t.fn.tooltip.Constructor = n, t.fn.tooltip.noConflict = function() {
            return t.fn.tooltip = o, this
        }
    }
}, function(t, e, n) {
    "use strict";
    t.exports = function(t) {
        function e() {
            var t = document.createElement("bootstrap"),
                e = {
                    WebkitTransition: "webkitTransitionEnd",
                    MozTransition: "transitionend",
                    OTransition: "oTransitionEnd otransitionend",
                    transition: "transitionend"
                };
            for (var n in e)
                if (void 0 !== t.style[n]) return {
                    end: e[n]
                };
            return !1
        }
        t.fn.emulateTransitionEnd = function(e) {
            var n = !1,
                i = this;
            t(this).one("bsTransitionEnd", function() {
                n = !0
            });
            var o = function() {
                n || t(i).trigger(t.support.transition.end)
            };
            return setTimeout(o, e), this
        }, t(function() {
            t.support.transition = e(), t.support.transition && (t.event.special.bsTransitionEnd = {
                bindType: t.support.transition.end,
                delegateType: t.support.transition.end,
                handle: function(e) {
                    if (t(e.target).is(this)) return e.handleObj.handler.apply(this, arguments)
                }
            })
        })
    }
}, function(t, e, n) {
    "use strict";

    function i(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }

    function o() {
        function t(e, n) {
            var i = u || (0, a.default)("#modalWaitingVer");
            return a.default.post("/ticketsproc/load_waiting_for_verification", {
                id_ticket: e,
                id_pass: n
            }).done(function(o) {
                var r = JSON.parse(o);
                if (!r.error) {
                    if (1 == r.status) {
                        var l = (0, a.default)("#modalVerSuccess");
                        return i.modal("hide"), void l.modal()
                    }
                    if (9 == r.status) {
                        var g = (0, a.default)("#modalFailVer"),
                            u = (0, a.default)("#modalFailVerReason");
                        return i.modal("hide"), u.text(r.text), void g.modal()
                    }
                    setTimeout(function() {
                        return t(e, n)
                    }, s)
                }
            }).fail(function(t) {
                i.modal("hide"), (0, g.danger)({
                    title: "Ошибка!",
                    text: 'Нет связи с сервером. Данные могут устареть. Пожалуйста <a href="javascript:location.reload();">обновите страницу</a>'
                })
            }), !1
        }
        var e = (0, a.default)("#inputPhoto"),
            n = (0, a.default)("#image_url"),
            i = (0, a.default)("#verModalProcessContainer"),
            o = (0, a.default)("#verModalProcessText"),
            r = (0, a.default)("#verModalProcessBar"),
            s = 1e4,
            u = null;
        e.fileupload({
            dataType: "json",
            add: function(t, e) {
                i.show();
                o.text("0%"), r.css("width", "0%"), e.submit()
            },
            done: function(t, e) {
                n.val(e.result.files[0].name)
            },
            progressall: function(t, e) {
                var n = parseInt(e.loaded / e.total * 100, 10);
                n += "%", o.text(n), r.css("width", n)
            }
        }), (0, a.default)("#fileupload_lk").fileupload({
            dataType: "json",
            done: function(t, e) {
                console.log(e.result.files[0].name), cart_image_name = e.result.files[0].name, (0, a.default)("#image_url").val(e.result.files[0].name), (0, a.default)(".load_image_done").text("Изображение загружено")
            },
            progressall: function(t, e) {
                var n = parseInt(e.loaded / e.total * 100, 10);
                (0, a.default)("#progress .bar").css("width", n + "%")
            }
        }), (0, a.default)("#veryfication_lk").on("submit", function(e) {
            e.preventDefault();
            var n = (0, a.default)(this),
                i = (0, a.default)(this).attr("method"),
                o = (0, a.default)(this).attr("action"),
                r = (0, a.default)(this).serialize();
            return a.default.ajax({
                type: i,
                url: o,
                data: r,
                resetForm: "true",
                success: function(e) {
                    var n = e.data_one,
                        i = e.data_two;
                    setTimeout(function() {
                        return t(n, i)
                    }, s), (0, a.default)("#modalWaitingVer").modal("show")
                },
                error: function(t) {
                    var e = t.responseJSON.fields;
                    a.default.each(e, function(t, e) {
                        (0, l.default)(n.find("." + t).parents(".err_message"), {
                            title: "Ошибка!",
                            text: e,
                            theme: "danger"
                        })
                    })
                }
            }), !1
        }), (0, a.default)("#veryfication_lk").on("change", '[name="select_ps"]', function(t) {
            (0, a.default)('#veryfication_lk [name="bank_account"]').attr("placeholder", list_input_small[(0, a.default)(this).val()]), 12 == (0, a.default)(this).val() || 10 == (0, a.default)(this).val() ? (0, a.default)('#veryfication_lk [for="inputNumber"]').text(" Введите номер счета: ") : (0, a.default)('#veryfication_lk [for="inputNumber"]').text(" Введите номер карты: ")
        }), (0, a.default)(document).on("click", ".deleteVerificationCart", function(t) {
            var e = (0, a.default)(this);
            return a.default.ajax({
                type: "post",
                url: "/veryficationlk/delete",
                data: "id=" + e.data("id"),
                success: function(t) {
                    (0, g.warning)({
                        title: "Статус:",
                        text: JSON.parse(t).text
                    }), e.parents(".lk_ver_3-d").remove()
                },
                error: function(t) {
                    var e = 400 != t.status ? "Нет связи с сервером!" : JSON.parse(t.responseText).text;
                    (0, g.danger)({
                        title: "Ошибка:",
                        text: e
                    })
                }
            }), !1
        })
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = o;
    var r = n(0),
        a = i(r),
        s = (n(6), n(2)),
        l = i(s),
        g = n(1);
    n(17), n(16), n(15)
}, function(t, e, n) {
    "use strict";

    function i() {
        l(a() ? "off" : "on"), c.click(function() {}), d.click(function() {
            A || l("on"), o()
        }), window.addEventListener("storage", function() {
            var t = s();
            t && A != t && r(t)
        })
    }

    function o() {
        u.default.post("/ticketsproc/delete_web_push", {
            token: A
        }).then(function() {
            window.localStorage.removeItem("wingify_push_subscriber_id"), A = "", l("on")
        })
    }

    function r(t) {
        A ? console.log("Токен уже отправлен на сервер.") : u.default.post("/ticketsproc/add_web_push", {
            token: t
        }).then(function() {
            l("off"), A = t
        })
    }

    function a() {
        if ("undefined" == typeof id_device) return !1;
        for (var t = JSON.parse(id_device), e = 0; e < t.length; e++)
            if (t[e] == A) return !0;
        return !1
    }

    function s() {
        var t = window.localStorage.getItem("wingify_push_subscriber_id");
        return void 0 !== t && t ? t : ""
    }

    function l(t) {
        "on" == t ? (c.parent().show(), d.parent().hide()) : (c.parent().hide(), d.parent().show())
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = i;
    var g = n(0),
        u = function(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }(g),
        c = (0, u.default)("#onWebPush"),
        d = (0, u.default)("#offWebPush"),
        A = s()
}, function(t, e, n) {
    var i = !1;
    (function() {
        var e, n, o, r, a, s, l, g, u, c, d, A, f, C, I, p, h, m, v, y, b, w, x, k, S, E, D, T, j, M, N, O, R, F, W, L, P, B, U, _, H, q, Z, Q, Y, J, V, z, G, X = [].slice,
            K = {}.hasOwnProperty,
            $ = function(t, e) {
                function n() {
                    this.constructor = t
                }
                for (var i in e) K.call(e, i) && (t[i] = e[i]);
                return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t
            },
            tt = [].indexOf || function(t) {
                for (var e = 0, n = this.length; e < n; e++)
                    if (e in this && this[e] === t) return e;
                return -1
            };
        for (b = {
                catchupTime: 100,
                initialRate: .03,
                minTime: 250,
                ghostTime: 100,
                maxProgressPerFrame: 20,
                easeFactor: 1.25,
                startOnPageLoad: !0,
                restartOnPushState: !0,
                restartOnRequestAfter: 500,
                target: "body",
                elements: {
                    checkInterval: 100,
                    selectors: ["body"]
                },
                eventLag: {
                    minSamples: 10,
                    sampleCount: 3,
                    lagThreshold: 3
                },
                ajax: {
                    trackMethods: ["GET"],
                    trackWebSockets: !0,
                    ignoreURLs: []
                }
            }, j = function() {
                var t;
                return null != (t = "undefined" != typeof performance && null !== performance && "function" == typeof performance.now ? performance.now() : void 0) ? t : +new Date
            }, N = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame, y = window.cancelAnimationFrame || window.mozCancelAnimationFrame, null == N && (N = function(t) {
                return setTimeout(t, 50)
            }, y = function(t) {
                return clearTimeout(t)
            }), R = function(t) {
                var e, n;
                return e = j(), (n = function() {
                    var i;
                    return i = j() - e, i >= 33 ? (e = j(), t(i, function() {
                        return N(n)
                    })) : setTimeout(n, 33 - i)
                })()
            }, O = function() {
                var t, e, n;
                return n = arguments[0], e = arguments[1], t = 3 <= arguments.length ? X.call(arguments, 2) : [], "function" == typeof n[e] ? n[e].apply(n, t) : n[e]
            }, w = function() {
                var t, e, n, i, o, r, a;
                for (e = arguments[0], i = 2 <= arguments.length ? X.call(arguments, 1) : [], r = 0, a = i.length; r < a; r++)
                    if (n = i[r])
                        for (t in n) K.call(n, t) && (o = n[t], null != e[t] && "object" == typeof e[t] && null != o && "object" == typeof o ? w(e[t], o) : e[t] = o);
                return e
            }, h = function(t) {
                var e, n, i, o, r;
                for (n = e = 0, o = 0, r = t.length; o < r; o++) i = t[o], n += Math.abs(i), e++;
                return n / e
            }, k = function(t, e) {
                var n, i, o;
                if (null == t && (t = "options"), null == e && (e = !0), o = document.querySelector("[data-pace-" + t + "]")) {
                    if (n = o.getAttribute("data-pace-" + t), !e) return n;
                    try {
                        return JSON.parse(n)
                    } catch (t) {
                        return i = t, "undefined" != typeof console && null !== console ? console.error("Error parsing inline pace options", i) : void 0
                    }
                }
            }, l = function() {
                function t() {}
                return t.prototype.on = function(t, e, n, i) {
                    var o;
                    return null == i && (i = !1), null == this.bindings && (this.bindings = {}), null == (o = this.bindings)[t] && (o[t] = []), this.bindings[t].push({
                        handler: e,
                        ctx: n,
                        once: i
                    })
                }, t.prototype.once = function(t, e, n) {
                    return this.on(t, e, n, !0)
                }, t.prototype.off = function(t, e) {
                    var n, i, o;
                    if (null != (null != (i = this.bindings) ? i[t] : void 0)) {
                        if (null == e) return delete this.bindings[t];
                        for (n = 0, o = []; n < this.bindings[t].length;) this.bindings[t][n].handler === e ? o.push(this.bindings[t].splice(n, 1)) : o.push(n++);
                        return o
                    }
                }, t.prototype.trigger = function() {
                    var t, e, n, i, o, r, a, s, l;
                    if (n = arguments[0], t = 2 <= arguments.length ? X.call(arguments, 1) : [], null != (a = this.bindings) ? a[n] : void 0) {
                        for (o = 0, l = []; o < this.bindings[n].length;) s = this.bindings[n][o], i = s.handler, e = s.ctx, r = s.once, i.apply(null != e ? e : this, t), r ? l.push(this.bindings[n].splice(o, 1)) : l.push(o++);
                        return l
                    }
                }, t
            }(), c = window.Pace || {}, window.Pace = c, w(c, l.prototype), M = c.options = w({}, b, window.paceOptions, k()), V = ["ajax", "document", "eventLag", "elements"], Z = 0, Y = V.length; Z < Y; Z++) P = V[Z], !0 === M[P] && (M[P] = b[P]);
        u = function(t) {
            function e() {
                return z = e.__super__.constructor.apply(this, arguments)
            }
            return $(e, t), e
        }(Error), n = function() {
            function t() {
                this.progress = 0
            }
            return t.prototype.getElement = function() {
                var t;
                if (null == this.el) {
                    if (!(t = document.querySelector(M.target))) throw new u;
                    this.el = document.createElement("div"), this.el.className = "pace pace-active", document.body.className = document.body.className.replace(/pace-done/g, ""), document.body.className += " pace-running", this.el.innerHTML = '<div class="pace-progress">\n  <div class="pace-progress-inner"></div>\n</div>\n<div class="pace-activity"></div>', null != t.firstChild ? t.insertBefore(this.el, t.firstChild) : t.appendChild(this.el)
                }
                return this.el
            }, t.prototype.finish = function() {
                var t;
                return t = this.getElement(), t.className = t.className.replace("pace-active", ""), t.className += " pace-inactive", document.body.className = document.body.className.replace("pace-running", ""), document.body.className += " pace-done"
            }, t.prototype.update = function(t) {
                return this.progress = t, this.render()
            }, t.prototype.destroy = function() {
                try {
                    this.getElement().parentNode.removeChild(this.getElement())
                } catch (t) {
                    u = t
                }
                return this.el = void 0
            }, t.prototype.render = function() {
                var t, e, n, i, o, r, a;
                if (null == document.querySelector(M.target)) return !1;
                for (t = this.getElement(), i = "translate3d(" + this.progress + "%, 0, 0)", a = ["webkitTransform", "msTransform", "transform"], o = 0, r = a.length; o < r; o++) e = a[o], t.children[0].style[e] = i;
                return (!this.lastRenderedProgress || this.lastRenderedProgress | 0 !== this.progress | 0) && (t.children[0].setAttribute("data-progress-text", (0 | this.progress) + "%"), this.progress >= 100 ? n = "99" : (n = this.progress < 10 ? "0" : "", n += 0 | this.progress), t.children[0].setAttribute("data-progress", "" + n)), this.lastRenderedProgress = this.progress
            }, t.prototype.done = function() {
                return this.progress >= 100
            }, t
        }(), g = function() {
            function t() {
                this.bindings = {}
            }
            return t.prototype.trigger = function(t, e) {
                var n, i, o, r, a;
                if (null != this.bindings[t]) {
                    for (r = this.bindings[t], a = [], i = 0, o = r.length; i < o; i++) n = r[i], a.push(n.call(this, e));
                    return a
                }
            }, t.prototype.on = function(t, e) {
                var n;
                return null == (n = this.bindings)[t] && (n[t] = []), this.bindings[t].push(e)
            }, t
        }(), q = window.XMLHttpRequest, H = window.XDomainRequest, _ = window.WebSocket, x = function(t, e) {
            var n, i;
            i = [];
            for (n in e.prototype) try {
                null == t[n] && "function" != typeof e[n] ? "function" == typeof Object.defineProperty ? i.push(Object.defineProperty(t, n, {
                    get: function() {
                        return e.prototype[n]
                    },
                    configurable: !0,
                    enumerable: !0
                })) : i.push(t[n] = e.prototype[n]) : i.push(void 0)
            } catch (t) {
                t
            }
            return i
        }, D = [], c.ignore = function() {
            var t, e, n;
            return e = arguments[0], t = 2 <= arguments.length ? X.call(arguments, 1) : [], D.unshift("ignore"), n = e.apply(null, t), D.shift(), n
        }, c.track = function() {
            var t, e, n;
            return e = arguments[0], t = 2 <= arguments.length ? X.call(arguments, 1) : [], D.unshift("track"), n = e.apply(null, t), D.shift(), n
        }, L = function(t) {
            var e;
            if (null == t && (t = "GET"), "track" === D[0]) return "force";
            if (!D.length && M.ajax) {
                if ("socket" === t && M.ajax.trackWebSockets) return !0;
                if (e = t.toUpperCase(), tt.call(M.ajax.trackMethods, e) >= 0) return !0
            }
            return !1
        }, d = function(t) {
            function e() {
                var t, n = this;
                e.__super__.constructor.apply(this, arguments), t = function(t) {
                    var e;
                    return e = t.open, t.open = function(i, o, r) {
                        return L(i) && n.trigger("request", {
                            type: i,
                            url: o,
                            request: t
                        }), e.apply(t, arguments)
                    }
                }, window.XMLHttpRequest = function(e) {
                    var n;
                    return n = new q(e), t(n), n
                };
                try {
                    x(window.XMLHttpRequest, q)
                } catch (t) {}
                if (null != H) {
                    window.XDomainRequest = function() {
                        var e;
                        return e = new H, t(e), e
                    };
                    try {
                        x(window.XDomainRequest, H)
                    } catch (t) {}
                }
                if (null != _ && M.ajax.trackWebSockets) {
                    window.WebSocket = function(t, e) {
                        var i;
                        return i = null != e ? new _(t, e) : new _(t), L("socket") && n.trigger("request", {
                            type: "socket",
                            url: t,
                            protocols: e,
                            request: i
                        }), i
                    };
                    try {
                        x(window.WebSocket, _)
                    } catch (t) {}
                }
            }
            return $(e, t), e
        }(g), Q = null, S = function() {
            return null == Q && (Q = new d), Q
        }, W = function(t) {
            var e, n, i, o;
            for (o = M.ajax.ignoreURLs, n = 0, i = o.length; n < i; n++)
                if ("string" == typeof(e = o[n])) {
                    if (-1 !== t.indexOf(e)) return !0
                } else if (e.test(t)) return !0;
            return !1
        }, S().on("request", function(t) {
            var n, i, o, r, a;
            if (r = t.type, o = t.request, a = t.url, !W(a)) return c.running || !1 === M.restartOnRequestAfter && "force" !== L(r) ? void 0 : (i = arguments, n = M.restartOnRequestAfter || 0, "boolean" == typeof n && (n = 0), setTimeout(function() {
                var t, n, a, s, l;
                if ("socket" === r ? o.readyState < 2 : 0 < (a = o.readyState) && a < 4) {
                    for (c.restart(), s = c.sources, l = [], t = 0, n = s.length; t < n; t++) {
                        if ((P = s[t]) instanceof e) {
                            P.watch.apply(P, i);
                            break
                        }
                        l.push(void 0)
                    }
                    return l
                }
            }, n))
        }), e = function() {
            function t() {
                var t = this;
                this.elements = [], S().on("request", function() {
                    return t.watch.apply(t, arguments)
                })
            }
            return t.prototype.watch = function(t) {
                var e, n, i, o;
                if (i = t.type, e = t.request, o = t.url, !W(o)) return n = "socket" === i ? new C(e) : new I(e), this.elements.push(n)
            }, t
        }(), I = function() {
            function t(t) {
                var e, n, i, o, r, a = this;
                if (this.progress = 0, null != window.ProgressEvent)
                    for (null, t.addEventListener("progress", function(t) {
                            return t.lengthComputable ? a.progress = 100 * t.loaded / t.total : a.progress = a.progress + (100 - a.progress) / 2
                        }, !1), r = ["load", "abort", "timeout", "error"], n = 0, i = r.length; n < i; n++) e = r[n], t.addEventListener(e, function() {
                        return a.progress = 100
                    }, !1);
                else o = t.onreadystatechange, t.onreadystatechange = function() {
                    var e;
                    return 0 === (e = t.readyState) || 4 === e ? a.progress = 100 : 3 === t.readyState && (a.progress = 50), "function" == typeof o ? o.apply(null, arguments) : void 0
                }
            }
            return t
        }(), C = function() {
            function t(t) {
                var e, n, i, o, r = this;
                for (this.progress = 0, o = ["error", "open"], n = 0, i = o.length; n < i; n++) e = o[n], t.addEventListener(e, function() {
                    return r.progress = 100
                }, !1)
            }
            return t
        }(), r = function() {
            function t(t) {
                var e, n, i, o;
                for (null == t && (t = {}), this.elements = [], null == t.selectors && (t.selectors = []), o = t.selectors, n = 0, i = o.length; n < i; n++) e = o[n], this.elements.push(new a(e))
            }
            return t
        }(), a = function() {
            function t(t) {
                this.selector = t, this.progress = 0, this.check()
            }
            return t.prototype.check = function() {
                var t = this;
                return document.querySelector(this.selector) ? this.done() : setTimeout(function() {
                    return t.check()
                }, M.elements.checkInterval)
            }, t.prototype.done = function() {
                return this.progress = 100
            }, t
        }(), o = function() {
            function t() {
                var t, e, n = this;
                this.progress = null != (e = this.states[document.readyState]) ? e : 100, t = document.onreadystatechange, document.onreadystatechange = function() {
                    return null != n.states[document.readyState] && (n.progress = n.states[document.readyState]), "function" == typeof t ? t.apply(null, arguments) : void 0
                }
            }
            return t.prototype.states = {
                loading: 0,
                interactive: 50,
                complete: 100
            }, t
        }(), s = function() {
            function t() {
                var t, e, n, i, o, r = this;
                this.progress = 0, t = 0, o = [], i = 0, n = j(), e = setInterval(function() {
                    var a;
                    return a = j() - n - 50, n = j(), o.push(a), o.length > M.eventLag.sampleCount && o.shift(), t = h(o), ++i >= M.eventLag.minSamples && t < M.eventLag.lagThreshold ? (r.progress = 100, clearInterval(e)) : r.progress = 3 / (t + 3) * 100
                }, 50)
            }
            return t
        }(), f = function() {
            function t(t) {
                this.source = t, this.last = this.sinceLastUpdate = 0, this.rate = M.initialRate, this.catchup = 0, this.progress = this.lastProgress = 0, null != this.source && (this.progress = O(this.source, "progress"))
            }
            return t.prototype.tick = function(t, e) {
                var n;
                return null == e && (e = O(this.source, "progress")), e >= 100 && (this.done = !0), e === this.last ? this.sinceLastUpdate += t : (this.sinceLastUpdate && (this.rate = (e - this.last) / this.sinceLastUpdate), this.catchup = (e - this.progress) / M.catchupTime, this.sinceLastUpdate = 0, this.last = e), e > this.progress && (this.progress += this.catchup * t), n = 1 - Math.pow(this.progress / 100, M.easeFactor), this.progress += n * this.rate * t, this.progress = Math.min(this.lastProgress + M.maxProgressPerFrame, this.progress), this.progress = Math.max(0, this.progress), this.progress = Math.min(100, this.progress), this.lastProgress = this.progress, this.progress
            }, t
        }(), B = null, F = null, m = null, U = null, p = null, v = null, c.running = !1, E = function() {
            if (M.restartOnPushState) return c.restart()
        }, null != window.history.pushState && (J = window.history.pushState, window.history.pushState = function() {
            return E(), J.apply(window.history, arguments)
        }), null != window.history.replaceState && (G = window.history.replaceState, window.history.replaceState = function() {
            return E(), G.apply(window.history, arguments)
        }), A = {
            ajax: e,
            elements: r,
            document: o,
            eventLag: s
        }, (T = function() {
            var t, e, i, o, r, a, s, l;
            for (c.sources = B = [], a = ["ajax", "elements", "document", "eventLag"], e = 0, o = a.length; e < o; e++) t = a[e], !1 !== M[t] && B.push(new A[t](M[t]));
            for (l = null != (s = M.extraSources) ? s : [], i = 0, r = l.length; i < r; i++) P = l[i], B.push(new P(M));
            return c.bar = m = new n, F = [], U = new f
        })(), c.stop = function() {
            return c.trigger("stop"), c.running = !1, m.destroy(), v = !0, null != p && ("function" == typeof y && y(p), p = null), T()
        }, c.restart = function() {
            return c.trigger("restart"), c.stop(), c.start()
        }, c.go = function() {
            var t;
            return c.running = !0, m.render(), t = j(), v = !1, p = R(function(e, n) {
                var i, o, r, a, s, l, g, u, d, A, C, I, p, h, y;
                for (100 - m.progress, o = A = 0, r = !0, l = C = 0, p = B.length; C < p; l = ++C)
                    for (P = B[l], d = null != F[l] ? F[l] : F[l] = [], s = null != (y = P.elements) ? y : [P], g = I = 0, h = s.length; I < h; g = ++I) a = s[g], u = null != d[g] ? d[g] : d[g] = new f(a), r &= u.done, u.done || (o++, A += u.tick(e));
                return i = A / o, m.update(U.tick(e, i)), m.done() || r || v ? (m.update(100), c.trigger("done"), setTimeout(function() {
                    return m.finish(), c.running = !1, c.trigger("hide")
                }, Math.max(M.ghostTime, Math.max(M.minTime - (j() - t), 0)))) : n()
            })
        }, c.start = function(t) {
            w(M, t), c.running = !0;
            try {
                m.render()
            } catch (t) {
                u = t
            }
            return document.querySelector(".pace") ? (c.trigger("start"), c.go()) : setTimeout(c.start, 50)
        }, "function" == typeof i && i.amd ? i(["pace"], function() {
            return c
        }) : t.exports = c
    }).call(this)
}, function(t, e) {
    /**!
     * @preserve Color animation 1.6.0
     * http://www.bitstorm.org/jquery/color-animation/
     * Copyright 2011, 2013 Edwin Martin <edwin@bitstorm.org>
     * Released under the MIT and GPL licenses.
     */
    ! function(t) {
        function e(e, n, i) {
            var o = "rgb" + (t.support.rgba ? "a" : "") + "(" + parseInt(e[0] + i * (n[0] - e[0]), 10) + "," + parseInt(e[1] + i * (n[1] - e[1]), 10) + "," + parseInt(e[2] + i * (n[2] - e[2]), 10);
            return t.support.rgba && (o += "," + (e && n ? parseFloat(e[3] + i * (n[3] - e[3])) : 1)), o += ")"
        }

        function n(t) {
            var e;
            return (e = /#([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})/.exec(t)) ? [parseInt(e[1], 16), parseInt(e[2], 16), parseInt(e[3], 16), 1] : (e = /#([0-9a-fA-F])([0-9a-fA-F])([0-9a-fA-F])/.exec(t)) ? [17 * parseInt(e[1], 16), 17 * parseInt(e[2], 16), 17 * parseInt(e[3], 16), 1] : (e = /rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/.exec(t)) ? [parseInt(e[1]), parseInt(e[2]), parseInt(e[3]), 1] : (e = /rgba\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9\.]*)\s*\)/.exec(t)) ? [parseInt(e[1], 10), parseInt(e[2], 10), parseInt(e[3], 10), parseFloat(e[4])] : o[t]
        }
        t.extend(!0, t, {
            support: {
                rgba: function() {
                    var e = t("script:first"),
                        n = e.css("color"),
                        i = !1;
                    if (/^rgba/.test(n)) i = !0;
                    else try {
                        i = n != e.css("color", "rgba(0, 0, 0, 0.5)").css("color"), e.css("color", n)
                    } catch (t) {}
                    return i
                }()
            }
        });
        var i = ["color", "backgroundColor", "borderBottomColor", "borderLeftColor", "borderRightColor", "borderTopColor", "outlineColor"];
        t.each(i, function(i, o) {
            t.Tween.propHooks[o] = {
                get: function(e) {
                    return t(e.elem).css(o)
                },
                set: function(i) {
                    var r = i.elem.style,
                        a = n(t(i.elem).css(o)),
                        s = n(i.end);
                    i.run = function(t) {
                        r[o] = e(a, s, t)
                    }
                }
            }
        }), t.Tween.propHooks.borderColor = {
            set: function(o) {
                var r = o.elem.style,
                    a = [],
                    s = i.slice(2, 6);
                t.each(s, function(e, i) {
                    a[i] = n(t(o.elem).css(i))
                });
                var l = n(o.end);
                o.run = function(n) {
                    t.each(s, function(t, i) {
                        r[i] = e(a[i], l, n)
                    })
                }
            }
        };
        var o = {
            aqua: [0, 255, 255, 1],
            azure: [240, 255, 255, 1],
            beige: [245, 245, 220, 1],
            black: [0, 0, 0, 1],
            blue: [0, 0, 255, 1],
            brown: [165, 42, 42, 1],
            cyan: [0, 255, 255, 1],
            darkblue: [0, 0, 139, 1],
            darkcyan: [0, 139, 139, 1],
            darkgrey: [169, 169, 169, 1],
            darkgreen: [0, 100, 0, 1],
            darkkhaki: [189, 183, 107, 1],
            darkmagenta: [139, 0, 139, 1],
            darkolivegreen: [85, 107, 47, 1],
            darkorange: [255, 140, 0, 1],
            darkorchid: [153, 50, 204, 1],
            darkred: [139, 0, 0, 1],
            darksalmon: [233, 150, 122, 1],
            darkviolet: [148, 0, 211, 1],
            fuchsia: [255, 0, 255, 1],
            gold: [255, 215, 0, 1],
            green: [0, 128, 0, 1],
            indigo: [75, 0, 130, 1],
            khaki: [240, 230, 140, 1],
            lightblue: [173, 216, 230, 1],
            lightcyan: [224, 255, 255, 1],
            lightgreen: [144, 238, 144, 1],
            lightgrey: [211, 211, 211, 1],
            lightpink: [255, 182, 193, 1],
            lightyellow: [255, 255, 224, 1],
            lime: [0, 255, 0, 1],
            magenta: [255, 0, 255, 1],
            maroon: [128, 0, 0, 1],
            navy: [0, 0, 128, 1],
            olive: [128, 128, 0, 1],
            orange: [255, 165, 0, 1],
            pink: [255, 192, 203, 1],
            purple: [128, 0, 128, 1],
            violet: [128, 0, 128, 1],
            red: [255, 0, 0, 1],
            silver: [192, 192, 192, 1],
            white: [255, 255, 255, 1],
            yellow: [255, 255, 0, 1],
            transparent: [255, 255, 255, 0]
        }
    }(jQuery)
}, function(t, e, n) {
    "use strict";
    var i = n(47);
    i.on("hide", function() {
        var t = document.getElementById("mainOver");
        t && (t.style.display = "none")
    }), i.start({
        ajax: !1,
        restartOnPushState: !1
    });
    var o = n(0);
    window.jQuery = o, n(48), n(18)();
    var r = null;
    ! function(t, e) {
        t(function() {
            n(44)(t), e.customAlert = n(1), e.customAlert.init(), n(25)(t), n(33)(t), n(43)(t), n(32)(t, e), n(9).default(), n(31)(t), n(22)(t), n(23).default(), n(35).default(), n(10).default(), n(40).default(), n(19).default(), n(39).default(), n(36).default(), n(20).default(), n(37).default(), n(45).default(), n(38).default(), n(4).default(), n(21).default(), n(41).default(), n(4).default(), n(24).default(), n(26).default(), n(34).default(), n(42).default(), n(30).default(), n(28).default(), n(27).default(), n(46).default(), n(29).default();
            var i = t("#modalFailActivation");
            i.length && i.modal();
            r && clearInterval(r), r = setInterval(function() {
                var t = document.getElementById("mainOver"),
                    e = document.getElementsByClassName("pace-active");
                clearInterval(r), t.length > 0 && (t.style.display = "none"), e.length > 0 && (e.style.display = "none")
            }, 5e3)
        })
    }(o, window)
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = function(t) {
        var e = (0, o.default)('[data-form="collection"]', t);
        if (e.length) {
            var n = e.attr("data-prototype"),
                i = (0, o.default)('[data-collection="row"]', e),
                r = i.length + 1,
                a = (0, o.default)('[data-collection="add"]', e),
                s = a.parent(),
                l = function(t) {
                    t.find('[data-collection="remove"]').click(function(e) {
                        e.preventDefault(), t.remove()
                    })
                };
            i.each(function() {
                l((0, o.default)(this))
            }), a.click(function(t) {
                t.preventDefault(), l((0, o.default)(n.replace(/__id__/g, r++)).insertBefore(s))
            })
        }
    };
    var i = n(0),
        o = function(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }(i)
}, function(t, e, n) {
    "use strict";

    function i(t) {
        l.removeClass("systems-open"), t.removeClass("wrapper-systems-open")
    }

    function o(t, e) {
        return function(n, o) {
            var r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            t.html(s(n, o)), r && i(e)
        }
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = function(t) {
        var e = (0, a.default)('[data-exchange-toggle="select"]', t).eq(0),
            n = e.next();
        return e.click(function(t) {
            l.addClass("systems-open"), n.addClass("wrapper-systems-open")
        }), (0, a.default)('[data-exchange-dismiss="select"]', n).click(function() {
            i(n)
        }), o(e, n)
    };
    var r = n(0),
        a = function(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }(r),
        s = function(t, e) {
            return '<span class="main_11I">\n  <span class="' + t + '"></span>\n</span> ' + e
        },
        l = (0, a.default)("body")
}, function(t, e, n) {
    "use strict";

    function i(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = function(t) {
        g.default.get(window.Config.COMPOSITE_STATUS_URL).done(function(e) {
            var n = kursa;
            kursa = e.list_rate_in_sum.kursa, kursb = e.list_rate_in_sum.kursb, rate_time = e.t, currencyMinValueIn = e.minSumIn, currencyMinValueOut = e.minSumOut;
            var i = [];
            (0, s.default)(e.reserves).forEach(function(t) {
                if (t.balance != reserves[t.id].balance) {
                    (0, g.default)("[data-reserve=" + t.id + "]").text(0 > t.balance ? 0 : 100 > t.balance && 0 != t.balance ? Math.round(1e4 * t.balance) / 1e4 : Math.round(t.balance)).parent().css("background-color", "#f5f3f1").animate({
                        backgroundColor: "#ffffff"
                    }, 5e3)
                }
            }), reserves = e.reserves;
            var o = 1e3 * e.site_technical_break;
            o && sleepEnd < o ? (isSleep = !0, sleepEnd = o, (0, r.startSleep)(sleepEnd)) : isSleep && !o && (isSleep = !1, sleepEnd = 0, (0, r.stopSleep)()), t && t({
                kursa_old: n,
                updatedReserve: i
            })
        }).fail(function(t) {
            (0, o.danger)({
                title: "Ошибка!",
                text: 'Нет связи с сервером. Данные могут устареть. Пожалуйста <a href="javascript:location.reload();">обновите страницу</a>'
            })
        })
    };
    var o = n(1),
        r = n(10),
        a = n(8),
        s = i(a),
        l = n(0),
        g = i(l)
}, function(t, e, n) {
    "use strict";

    function i() {
        l = (0, a.default)("#modalWaitingPayment"), g = (0, a.default)("#modalSuccessPayment"), u = (0, a.default)("#modalSuccessPaymentMessage")
    }

    function o(t) {
        l || i(), a.default.post("/ticketsproc/load_waiting_for_payment", {
            loadcheck: t
        }).done(function(e) {
            var n = JSON.parse(e);
            if (0 == n.error) return void l.one("hidden.bs.modal", function() {
                u.html(n.text), g.modal(), "undefined" != typeof yaCounter38853395 && (yaCounter38853395.reachGoal("client1"), yaCounter38853395.setUserID(n.email ? n.email : (0, a.default)('[data-exchange-form="email"]').length ? (0, a.default)((0, a.default)('[data-exchange-form="email"] input')) : null), yaCounter38853395.params(n.data), dataCommerce.push({
                    ecommerce: {
                        purchase: {
                            actionField: {
                                id: n.data.ticket,
                                goal_id: "client1",
                                revenue: n.data.comis
                            },
                            products: [{
                                id: n.data.letter_cod,
                                name: n.data.ps1 + "-to-" + n.data.ps2,
                                brand: n.data.ps2,
                                price: n.data.price,
                                quantity: 1
                            }]
                        }
                    }
                }))
            }).modal("hide");
            setTimeout(function() {
                return o(t)
            }, 1e4)
        }).fail(function(t) {
            l.modal("hide"), (0, s.danger)({
                title: "Ошибка!",
                text: 'Нет связи с сервером. Данные могут устареть. Пожалуйста <a href="javascript:location.reload();">обновите страницу</a>'
            })
        })
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = o;
    var r = n(0),
        a = function(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }(r),
        s = n(1),
        l = null,
        g = null,
        u = null
}, function(t, e, n) {
    "use strict";

    function i() {
        var t = (0, r.default)("#verModalImageUploader"),
            e = (0, r.default)("#verModalProcessContainer"),
            n = (0, r.default)("#verModalProcessText"),
            i = (0, r.default)("#verModalProcessBar");
        (0, r.default)("#modalVer2").on("show.bs.modal", function() {
            n.text("0%"), i.css("width", "0%")
        }), t.fileupload({
            dataType: "json",
            add: function(t, o) {
                e.show(), n.text("0%"), i.css("width", "0%"), o.submit()
            },
            done: function(t, e) {
                (0, a.sendImageCard)(e.result.files[0].name)
            },
            progressall: function(t, e) {
                var o = parseInt(e.loaded / e.total * 100, 10);
                o += "%", n.text(o), i.css("width", o)
            }
        })
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.verificationModalImageUploader = i;
    var o = n(0),
        r = function(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }(o),
        a = n(6);
    n(17), n(16), n(15)
}, function(t, e, n) {
    "use strict";
    var i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        },
        o = n(0);
    t.exports = function() {
        function t(e, n) {
            this.$body = o(document.body), this.$scrollElement = o(o(e).is(document.body) ? window : e), this.options = o.extend({}, t.DEFAULTS, n), this.selector = (this.options.target || "") + " > a", this.offsets = [], this.targets = [], this.activeTarget = null, this.scrollHeight = 0, this.$scrollElement.on("scroll.bs.scrollspy", o.proxy(this.process, this)), this.refresh(), this.process()
        }

        function e(e) {
            return this.each(function() {
                var n = o(this),
                    r = n.data("bs.scrollspy"),
                    a = "object" == (void 0 === e ? "undefined" : i(e)) && e;
                r || n.data("bs.scrollspy", r = new t(this, a)), "string" == typeof e && r[e]()
            })
        }
        t.VERSION = "3.3.7", t.DEFAULTS = {
            offset: 10
        }, t.prototype.getScrollHeight = function() {
            return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
        }, t.prototype.refresh = function() {
            var t = this,
                e = "offset",
                n = 0;
            this.offsets = [], this.targets = [], this.scrollHeight = this.getScrollHeight(), o.isWindow(this.$scrollElement[0]) || (e = "position", n = this.$scrollElement.scrollTop()), this.$body.find(this.selector).map(function() {
                var t = o(this),
                    i = t.data("target") || t.attr("href"),
                    r = /^#./.test(i) && o(i);
                return r && r.length && r.is(":visible") && [
                    [r[e]().top + n, i]
                ] || null
            }).sort(function(t, e) {
                return t[0] - e[0]
            }).each(function() {
                t.offsets.push(this[0]), t.targets.push(this[1])
            })
        }, t.prototype.process = function() {
            var t, e = this.$scrollElement.scrollTop() + this.options.offset,
                n = this.getScrollHeight(),
                i = (this.options.offset, this.$scrollElement.height(), this.offsets),
                o = this.targets,
                r = this.activeTarget;
            if (this.scrollHeight != n && this.refresh(), r && e < i[0]) return this.activeTarget = null, this.clear();
            for (t = i.length; t--;) r != o[t] && e >= i[t] && (void 0 === i[t + 1] || e < i[t + 1]) && this.activate(o[t])
        }, t.prototype.activate = function(t) {
            this.activeTarget = t, this.clear();
            var e = this.selector + '[data-target="' + t + '"],' + this.selector + '[href="' + t + '"]';
            o(e).addClass("active").trigger("activate.bs.scrollspy")
        }, t.prototype.clear = function() {
            o(this.selector).removeClass("active")
        };
        var n = o.fn.scrollspy;
        o.fn.scrollspy = e, o.fn.scrollspy.Constructor = t, o.fn.scrollspy.noConflict = function() {
            return o.fn.scrollspy = n, this
        }
    }
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = function(t) {
        return !!i.exec(t)
    };
    var i = /^[a-z0-9\u007F-\uffff!#$%&'*+\/=?^_`{|}~-]+(?:\.[a-z0-9\u007F-\uffff!#$%&'*+\/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z]{2,}$/i
}, function(t, e, n) {
    var i, o, r;
    /*! jQuery UI - v1.12.1 - 2018-02-10
     * http://jqueryui.com
     * Includes: widget.js
     * Copyright jQuery Foundation and other contributors; Licensed MIT */
    ! function(a) {
        o = [n(0)], i = a, void 0 !== (r = "function" == typeof i ? i.apply(e, o) : i) && (t.exports = r)
    }(function(t) {
        t.ui = t.ui || {};
        var e = (t.ui.version = "1.12.1", 0),
            n = Array.prototype.slice;
        t.cleanData = function(e) {
            return function(n) {
                var i, o, r;
                for (r = 0; null != (o = n[r]); r++) try {
                    i = t._data(o, "events"), i && i.remove && t(o).triggerHandler("remove")
                } catch (t) {}
                e(n)
            }
        }(t.cleanData), t.widget = function(e, n, i) {
            var o, r, a, s = {},
                l = e.split(".")[0];
            e = e.split(".")[1];
            var g = l + "-" + e;
            return i || (i = n, n = t.Widget), t.isArray(i) && (i = t.extend.apply(null, [{}].concat(i))), t.expr[":"][g.toLowerCase()] = function(e) {
                return !!t.data(e, g)
            }, t[l] = t[l] || {}, o = t[l][e], r = t[l][e] = function(t, e) {
                if (!this._createWidget) return new r(t, e);
                arguments.length && this._createWidget(t, e)
            }, t.extend(r, o, {
                version: i.version,
                _proto: t.extend({}, i),
                _childConstructors: []
            }), a = new n, a.options = t.widget.extend({}, a.options), t.each(i, function(e, i) {
                if (!t.isFunction(i)) return void(s[e] = i);
                s[e] = function() {
                    function t() {
                        return n.prototype[e].apply(this, arguments)
                    }

                    function o(t) {
                        return n.prototype[e].apply(this, t)
                    }
                    return function() {
                        var e, n = this._super,
                            r = this._superApply;
                        return this._super = t, this._superApply = o, e = i.apply(this, arguments), this._super = n, this._superApply = r, e
                    }
                }()
            }), r.prototype = t.widget.extend(a, {
                widgetEventPrefix: o ? a.widgetEventPrefix || e : e
            }, s, {
                constructor: r,
                namespace: l,
                widgetName: e,
                widgetFullName: g
            }), o ? (t.each(o._childConstructors, function(e, n) {
                var i = n.prototype;
                t.widget(i.namespace + "." + i.widgetName, r, n._proto)
            }), delete o._childConstructors) : n._childConstructors.push(r), t.widget.bridge(e, r), r
        }, t.widget.extend = function(e) {
            for (var i, o, r = n.call(arguments, 1), a = 0, s = r.length; a < s; a++)
                for (i in r[a]) o = r[a][i], r[a].hasOwnProperty(i) && void 0 !== o && (t.isPlainObject(o) ? e[i] = t.isPlainObject(e[i]) ? t.widget.extend({}, e[i], o) : t.widget.extend({}, o) : e[i] = o);
            return e
        }, t.widget.bridge = function(e, i) {
            var o = i.prototype.widgetFullName || e;
            t.fn[e] = function(r) {
                var a = "string" == typeof r,
                    s = n.call(arguments, 1),
                    l = this;
                return a ? this.length || "instance" !== r ? this.each(function() {
                    var n, i = t.data(this, o);
                    return "instance" === r ? (l = i, !1) : i ? t.isFunction(i[r]) && "_" !== r.charAt(0) ? (n = i[r].apply(i, s), n !== i && void 0 !== n ? (l = n && n.jquery ? l.pushStack(n.get()) : n, !1) : void 0) : t.error("no such method '" + r + "' for " + e + " widget instance") : t.error("cannot call methods on " + e + " prior to initialization; attempted to call method '" + r + "'")
                }) : l = void 0 : (s.length && (r = t.widget.extend.apply(null, [r].concat(s))), this.each(function() {
                    var e = t.data(this, o);
                    e ? (e.option(r || {}), e._init && e._init()) : t.data(this, o, new i(r, this))
                })), l
            }
        }, t.Widget = function() {}, t.Widget._childConstructors = [], t.Widget.prototype = {
            widgetName: "widget",
            widgetEventPrefix: "",
            defaultElement: "<div>",
            options: {
                classes: {},
                disabled: !1,
                create: null
            },
            _createWidget: function(n, i) {
                i = t(i || this.defaultElement || this)[0], this.element = t(i), this.uuid = e++, this.eventNamespace = "." + this.widgetName + this.uuid, this.bindings = t(), this.hoverable = t(), this.focusable = t(), this.classesElementLookup = {}, i !== this && (t.data(i, this.widgetFullName, this), this._on(!0, this.element, {
                    remove: function(t) {
                        t.target === i && this.destroy()
                    }
                }), this.document = t(i.style ? i.ownerDocument : i.document || i), this.window = t(this.document[0].defaultView || this.document[0].parentWindow)), this.options = t.widget.extend({}, this.options, this._getCreateOptions(), n), this._create(), this.options.disabled && this._setOptionDisabled(this.options.disabled), this._trigger("create", null, this._getCreateEventData()), this._init()
            },
            _getCreateOptions: function() {
                return {}
            },
            _getCreateEventData: t.noop,
            _create: t.noop,
            _init: t.noop,
            destroy: function() {
                var e = this;
                this._destroy(), t.each(this.classesElementLookup, function(t, n) {
                    e._removeClass(n, t)
                }), this.element.off(this.eventNamespace).removeData(this.widgetFullName), this.widget().off(this.eventNamespace).removeAttr("aria-disabled"), this.bindings.off(this.eventNamespace)
            },
            _destroy: t.noop,
            widget: function() {
                return this.element
            },
            option: function(e, n) {
                var i, o, r, a = e;
                if (0 === arguments.length) return t.widget.extend({}, this.options);
                if ("string" == typeof e)
                    if (a = {}, i = e.split("."), e = i.shift(), i.length) {
                        for (o = a[e] = t.widget.extend({}, this.options[e]), r = 0; r < i.length - 1; r++) o[i[r]] = o[i[r]] || {}, o = o[i[r]];
                        if (e = i.pop(), 1 === arguments.length) return void 0 === o[e] ? null : o[e];
                        o[e] = n
                    } else {
                        if (1 === arguments.length) return void 0 === this.options[e] ? null : this.options[e];
                        a[e] = n
                    }
                return this._setOptions(a), this
            },
            _setOptions: function(t) {
                var e;
                for (e in t) this._setOption(e, t[e]);
                return this
            },
            _setOption: function(t, e) {
                return "classes" === t && this._setOptionClasses(e), this.options[t] = e, "disabled" === t && this._setOptionDisabled(e), this
            },
            _setOptionClasses: function(e) {
                var n, i, o;
                for (n in e) o = this.classesElementLookup[n], e[n] !== this.options.classes[n] && o && o.length && (i = t(o.get()), this._removeClass(o, n), i.addClass(this._classes({
                    element: i,
                    keys: n,
                    classes: e,
                    add: !0
                })))
            },
            _setOptionDisabled: function(t) {
                this._toggleClass(this.widget(), this.widgetFullName + "-disabled", null, !!t), t && (this._removeClass(this.hoverable, null, "ui-state-hover"), this._removeClass(this.focusable, null, "ui-state-focus"))
            },
            enable: function() {
                return this._setOptions({
                    disabled: !1
                })
            },
            disable: function() {
                return this._setOptions({
                    disabled: !0
                })
            },
            _classes: function(e) {
                function n(n, r) {
                    var a, s;
                    for (s = 0; s < n.length; s++) a = o.classesElementLookup[n[s]] || t(), a = t(e.add ? t.unique(a.get().concat(e.element.get())) : a.not(e.element).get()), o.classesElementLookup[n[s]] = a, i.push(n[s]), r && e.classes[n[s]] && i.push(e.classes[n[s]])
                }
                var i = [],
                    o = this;
                return e = t.extend({
                    element: this.element,
                    classes: this.options.classes || {}
                }, e), this._on(e.element, {
                    remove: "_untrackClassesElement"
                }), e.keys && n(e.keys.match(/\S+/g) || [], !0), e.extra && n(e.extra.match(/\S+/g) || []), i.join(" ")
            },
            _untrackClassesElement: function(e) {
                var n = this;
                t.each(n.classesElementLookup, function(i, o) {
                    -1 !== t.inArray(e.target, o) && (n.classesElementLookup[i] = t(o.not(e.target).get()))
                })
            },
            _removeClass: function(t, e, n) {
                return this._toggleClass(t, e, n, !1)
            },
            _addClass: function(t, e, n) {
                return this._toggleClass(t, e, n, !0)
            },
            _toggleClass: function(t, e, n, i) {
                i = "boolean" == typeof i ? i : n;
                var o = "string" == typeof t || null === t,
                    r = {
                        extra: o ? e : n,
                        keys: o ? t : e,
                        element: o ? this.element : t,
                        add: i
                    };
                return r.element.toggleClass(this._classes(r), i), this
            },
            _on: function(e, n, i) {
                var o, r = this;
                "boolean" != typeof e && (i = n, n = e, e = !1), i ? (n = o = t(n), this.bindings = this.bindings.add(n)) : (i = n, n = this.element, o = this.widget()), t.each(i, function(i, a) {
                    function s() {
                        if (e || !0 !== r.options.disabled && !t(this).hasClass("ui-state-disabled")) return ("string" == typeof a ? r[a] : a).apply(r, arguments)
                    }
                    "string" != typeof a && (s.guid = a.guid = a.guid || s.guid || t.guid++);
                    var l = i.match(/^([\w:-]*)\s*(.*)$/),
                        g = l[1] + r.eventNamespace,
                        u = l[2];
                    u ? o.on(g, u, s) : n.on(g, s)
                })
            },
            _off: function(e, n) {
                n = (n || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace, e.off(n).off(n), this.bindings = t(this.bindings.not(e).get()), this.focusable = t(this.focusable.not(e).get()), this.hoverable = t(this.hoverable.not(e).get())
            },
            _delay: function(t, e) {
                function n() {
                    return ("string" == typeof t ? i[t] : t).apply(i, arguments)
                }
                var i = this;
                return setTimeout(n, e || 0)
            },
            _hoverable: function(e) {
                this.hoverable = this.hoverable.add(e), this._on(e, {
                    mouseenter: function(e) {
                        this._addClass(t(e.currentTarget), null, "ui-state-hover")
                    },
                    mouseleave: function(e) {
                        this._removeClass(t(e.currentTarget), null, "ui-state-hover")
                    }
                })
            },
            _focusable: function(e) {
                this.focusable = this.focusable.add(e), this._on(e, {
                    focusin: function(e) {
                        this._addClass(t(e.currentTarget), null, "ui-state-focus")
                    },
                    focusout: function(e) {
                        this._removeClass(t(e.currentTarget), null, "ui-state-focus")
                    }
                })
            },
            _trigger: function(e, n, i) {
                var o, r, a = this.options[e];
                if (i = i || {}, n = t.Event(n), n.type = (e === this.widgetEventPrefix ? e : this.widgetEventPrefix + e).toLowerCase(), n.target = this.element[0], r = n.originalEvent)
                    for (o in r) o in n || (n[o] = r[o]);
                return this.element.trigger(n, i), !(t.isFunction(a) && !1 === a.apply(this.element[0], [n].concat(i)) || n.isDefaultPrevented())
            }
        }, t.each({
            show: "fadeIn",
            hide: "fadeOut"
        }, function(e, n) {
            t.Widget.prototype["_" + e] = function(i, o, r) {
                "string" == typeof o && (o = {
                    effect: o
                });
                var a, s = o ? !0 === o || "number" == typeof o ? n : o.effect || n : e;
                o = o || {}, "number" == typeof o && (o = {
                    duration: o
                }), a = !t.isEmptyObject(o), o.complete = r, o.delay && i.delay(o.delay), a && t.effects && t.effects.effect[s] ? i[e](o) : s !== e && i[s] ? i[s](o.duration, o.easing, r) : i.queue(function(n) {
                    t(this)[e](), r && r.call(i[0]), n()
                })
            }
        });
        t.widget
    })
}, function(t, e, n) {
    var i, o, r;
    ! function(a, s) {
        o = [t, n(63)], i = s, void 0 !== (r = "function" == typeof i ? i.apply(e, o) : i) && (t.exports = r)
    }(0, function(t, e) {
        "use strict";

        function n(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }
        var i = function(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }(e),
            o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            } : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            },
            r = function() {
                function t(t, e) {
                    for (var n = 0; n < e.length; n++) {
                        var i = e[n];
                        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
                    }
                }
                return function(e, n, i) {
                    return n && t(e.prototype, n), i && t(e, i), e
                }
            }(),
            a = function() {
                function t(e) {
                    n(this, t), this.resolveOptions(e), this.initSelection()
                }
                return r(t, [{
                    key: "resolveOptions",
                    value: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        this.action = t.action, this.container = t.container, this.emitter = t.emitter, this.target = t.target, this.text = t.text, this.trigger = t.trigger, this.selectedText = ""
                    }
                }, {
                    key: "initSelection",
                    value: function() {
                        this.text ? this.selectFake() : this.target && this.selectTarget()
                    }
                }, {
                    key: "selectFake",
                    value: function() {
                        var t = this,
                            e = "rtl" == document.documentElement.getAttribute("dir");
                        this.removeFake(), this.fakeHandlerCallback = function() {
                            return t.removeFake()
                        }, this.fakeHandler = this.container.addEventListener("click", this.fakeHandlerCallback) || !0, this.fakeElem = document.createElement("textarea"), this.fakeElem.style.fontSize = "12pt", this.fakeElem.style.border = "0", this.fakeElem.style.padding = "0", this.fakeElem.style.margin = "0", this.fakeElem.style.position = "absolute", this.fakeElem.style[e ? "right" : "left"] = "-9999px";
                        var n = window.pageYOffset || document.documentElement.scrollTop;
                        this.fakeElem.style.top = n + "px", this.fakeElem.setAttribute("readonly", ""), this.fakeElem.value = this.text, this.container.appendChild(this.fakeElem), this.selectedText = (0, i.default)(this.fakeElem), this.copyText()
                    }
                }, {
                    key: "removeFake",
                    value: function() {
                        this.fakeHandler && (this.container.removeEventListener("click", this.fakeHandlerCallback), this.fakeHandler = null, this.fakeHandlerCallback = null), this.fakeElem && (this.container.removeChild(this.fakeElem), this.fakeElem = null)
                    }
                }, {
                    key: "selectTarget",
                    value: function() {
                        this.selectedText = (0, i.default)(this.target), this.copyText()
                    }
                }, {
                    key: "copyText",
                    value: function() {
                        var t = void 0;
                        try {
                            t = document.execCommand(this.action)
                        } catch (e) {
                            t = !1
                        }
                        this.handleResult(t)
                    }
                }, {
                    key: "handleResult",
                    value: function(t) {
                        this.emitter.emit(t ? "success" : "error", {
                            action: this.action,
                            text: this.selectedText,
                            trigger: this.trigger,
                            clearSelection: this.clearSelection.bind(this)
                        })
                    }
                }, {
                    key: "clearSelection",
                    value: function() {
                        this.trigger && this.trigger.focus(), window.getSelection().removeAllRanges()
                    }
                }, {
                    key: "destroy",
                    value: function() {
                        this.removeFake()
                    }
                }, {
                    key: "action",
                    set: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "copy";
                        if (this._action = t, "copy" !== this._action && "cut" !== this._action) throw new Error('Invalid "action" value, use either "copy" or "cut"')
                    },
                    get: function() {
                        return this._action
                    }
                }, {
                    key: "target",
                    set: function(t) {
                        if (void 0 !== t) {
                            if (!t || "object" !== (void 0 === t ? "undefined" : o(t)) || 1 !== t.nodeType) throw new Error('Invalid "target" value, use a valid Element');
                            if ("copy" === this.action && t.hasAttribute("disabled")) throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');
                            if ("cut" === this.action && (t.hasAttribute("readonly") || t.hasAttribute("disabled"))) throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');
                            this._target = t
                        }
                    },
                    get: function() {
                        return this._target
                    }
                }]), t
            }();
        t.exports = a
    })
}, function(t, e) {
    function n(t, e) {
        for (; t && t.nodeType !== i;) {
            if ("function" == typeof t.matches && t.matches(e)) return t;
            t = t.parentNode
        }
    }
    var i = 9;
    if ("undefined" != typeof Element && !Element.prototype.matches) {
        var o = Element.prototype;
        o.matches = o.matchesSelector || o.mozMatchesSelector || o.msMatchesSelector || o.oMatchesSelector || o.webkitMatchesSelector
    }
    t.exports = n
}, function(t, e, n) {
    function i(t, e, n, i, o) {
        var a = r.apply(this, arguments);
        return t.addEventListener(n, a, o), {
            destroy: function() {
                t.removeEventListener(n, a, o)
            }
        }
    }

    function o(t, e, n, o, r) {
        return "function" == typeof t.addEventListener ? i.apply(null, arguments) : "function" == typeof n ? i.bind(null, document).apply(null, arguments) : ("string" == typeof t && (t = document.querySelectorAll(t)), Array.prototype.map.call(t, function(t) {
            return i(t, e, n, o, r)
        }))
    }

    function r(t, e, n, i) {
        return function(n) {
            n.delegateTarget = a(n.target, e), n.delegateTarget && i.call(t, n)
        }
    }
    var a = n(59);
    t.exports = o
}, function(t, e) {
    e.node = function(t) {
        return void 0 !== t && t instanceof HTMLElement && 1 === t.nodeType
    }, e.nodeList = function(t) {
        var n = Object.prototype.toString.call(t);
        return void 0 !== t && ("[object NodeList]" === n || "[object HTMLCollection]" === n) && "length" in t && (0 === t.length || e.node(t[0]))
    }, e.string = function(t) {
        return "string" == typeof t || t instanceof String
    }, e.fn = function(t) {
        return "[object Function]" === Object.prototype.toString.call(t)
    }
}, function(t, e, n) {
    function i(t, e, n) {
        if (!t && !e && !n) throw new Error("Missing required arguments");
        if (!s.string(e)) throw new TypeError("Second argument must be a String");
        if (!s.fn(n)) throw new TypeError("Third argument must be a Function");
        if (s.node(t)) return o(t, e, n);
        if (s.nodeList(t)) return r(t, e, n);
        if (s.string(t)) return a(t, e, n);
        throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")
    }

    function o(t, e, n) {
        return t.addEventListener(e, n), {
            destroy: function() {
                t.removeEventListener(e, n)
            }
        }
    }

    function r(t, e, n) {
        return Array.prototype.forEach.call(t, function(t) {
            t.addEventListener(e, n)
        }), {
            destroy: function() {
                Array.prototype.forEach.call(t, function(t) {
                    t.removeEventListener(e, n)
                })
            }
        }
    }

    function a(t, e, n) {
        return l(document.body, t, e, n)
    }
    var s = n(61),
        l = n(60);
    t.exports = i
}, function(t, e) {
    function n(t) {
        var e;
        if ("SELECT" === t.nodeName) t.focus(), e = t.value;
        else if ("INPUT" === t.nodeName || "TEXTAREA" === t.nodeName) {
            var n = t.hasAttribute("readonly");
            n || t.setAttribute("readonly", ""), t.select(), t.setSelectionRange(0, t.value.length), n || t.removeAttribute("readonly"), e = t.value
        } else {
            t.hasAttribute("contenteditable") && t.focus();
            var i = window.getSelection(),
                o = document.createRange();
            o.selectNodeContents(t), i.removeAllRanges(), i.addRange(o), e = i.toString()
        }
        return e
    }
    t.exports = n
}, function(t, e) {
    function n() {}
    n.prototype = {
        on: function(t, e, n) {
            var i = this.e || (this.e = {});
            return (i[t] || (i[t] = [])).push({
                fn: e,
                ctx: n
            }), this
        },
        once: function(t, e, n) {
            function i() {
                o.off(t, i), e.apply(n, arguments)
            }
            var o = this;
            return i._ = e, this.on(t, i, n)
        },
        emit: function(t) {
            var e = [].slice.call(arguments, 1),
                n = ((this.e || (this.e = {}))[t] || []).slice(),
                i = 0,
                o = n.length;
            for (i; i < o; i++) n[i].fn.apply(n[i].ctx, e);
            return this
        },
        off: function(t, e) {
            var n = this.e || (this.e = {}),
                i = n[t],
                o = [];
            if (i && e)
                for (var r = 0, a = i.length; r < a; r++) i[r].fn !== e && i[r].fn._ !== e && o.push(i[r]);
            return o.length ? n[t] = o : delete n[t], this
        }
    }, t.exports = n
}]);