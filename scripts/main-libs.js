!function(t) {
    function e(n) {
        if (i[n])
            return i[n].exports;
        var s = i[n] = {
            i: n,
            l: false,
            exports: {}
        };
        return t[n].call(s.exports, s, s.exports, e),
        s.l = true,
        s.exports
    }
    var i = {};
    return e.m = t,
    e.c = i,
    e.d = function(t, i, getter) {
        e.o(t, i) || Object.defineProperty(t, i, {
            configurable: false,
            enumerable: true,
            get: getter
        })
    }
    ,
    e.n = function(t) {
        var getter = t && t.__esModule ? function e() {
            return t.default
        }
        : function e() {
            return t
        }
        ;
        return e.d(getter, "a", getter),
        getter
    }
    ,
    e.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }
    ,
    e.p = "/Content/BundledScripts/",
    e(e.s = 13834)
}({
    107: function(t, e) {
        var e = void 0
          , t = void 0;
        (function() {
            var t = void 0, factory;
            /*!
 * jQuery Cookie Plugin v1.4.1
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2013 Klaus Hartl
 * Released under the MIT license
 */
            factory = function(t) {
                function e(t) {
                    return l.raw ? t : encodeURIComponent(t)
                }
                function i(t) {
                    return l.raw ? t : decodeURIComponent(t)
                }
                function n(t) {
                    return e(l.json ? JSON.stringify(t) : String(t))
                }
                function s(t) {
                    0 === t.indexOf('"') && (t = t.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, "\\"));
                    try {
                        return t = decodeURIComponent(t.replace(a, " ")),
                        l.json ? JSON.parse(t) : t
                    } catch (t) {}
                }
                function o(e, i) {
                    var n = l.raw ? e : s(e);
                    return t.isFunction(i) ? i(n) : n
                }
                var a = /\+/g
                  , l = t.cookie = function(s, a, h) {
                    if (void 0 !== a && !t.isFunction(a)) {
                        if ("number" == typeof (h = t.extend({}, l.defaults, h)).expires) {
                            var u = h.expires
                              , c = h.expires = new Date;
                            c.setTime(+c + 864e5 * u)
                        }
                        return document.cookie = [e(s), "=", n(a), h.expires ? "; expires=" + h.expires.toUTCString() : "", h.path ? "; path=" + h.path : "", h.domain ? "; domain=" + h.domain : "", h.secure ? "; secure" : ""].join("")
                    }
                    for (var p = s ? void 0 : {}, f = document.cookie ? document.cookie.split("; ") : [], m = 0, g = f.length; m < g; m++) {
                        var v = f[m].split("=")
                          , b = i(v.shift())
                          , y = v.join("=");
                        if (s && s === b) {
                            p = o(y, a);
                            break
                        }
                        s || void 0 === (y = o(y)) || (p[b] = y)
                    }
                    return p
                }
                ;
                l.defaults = {},
                t.removeCookie = function(e, i) {
                    return void 0 !== t.cookie(e) && (t.cookie(e, "", t.extend({}, i, {
                        expires: -1
                    })),
                    !t.cookie(e))
                }
            }
            ,
            void ("function" == typeof define && define.amd ? define(["jquery"], factory) : (false,
            factory(jQuery)))
        }
        ).call(window)
    },
    1111: function(t, e) {},
    13834: function(t, e, i) {
        "use strict";
        i(13835),
        i(234),
        i(235),
        i(176),
        i(1111),
        i(411),
        i(603),
        i(236),
        i(154),
        i(202),
        i(604),
        i(605),
        i(107),
        i(606),
        i(607),
        i(608),
        i(609),
        i(237),
        i(238),
        i(412)
    },
    13835: function(t, e) {},
    154: function(t, e) {
        var e = void 0
          , t = void 0;
        (function() {
            var e = void 0, i, factory;
            /*!
 * jQuery JavaScript Library v1.11.1
 * http://jquery.com/
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 *
 * Copyright 2005, 2014 jQuery Foundation, Inc. and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2014-05-01T17:42Z
 */
            i = "undefined" != typeof window ? window : this,
            factory = function(t, e) {
                function i(t) {
                    var length = t.length
                      , type = ct.type(t);
                    return "function" !== type && !ct.isWindow(t) && (!(1 !== t.nodeType || !length) || "array" === type || 0 === length || "number" == typeof length && length > 0 && length - 1 in t)
                }
                function n(t, e, i) {
                    if (ct.isFunction(e))
                        return ct.grep(t, (function(t, n) {
                            return !!e.call(t, n, t) !== i
                        }
                        ));
                    if (e.nodeType)
                        return ct.grep(t, (function(t) {
                            return t === e !== i
                        }
                        ));
                    if ("string" == typeof e) {
                        if (yt.test(e))
                            return ct.filter(e, t, i);
                        e = ct.filter(e, t)
                    }
                    return ct.grep(t, (function(t) {
                        return ct.inArray(t, e) >= 0 !== i
                    }
                    ))
                }
                function s(t, e) {
                    do {
                        t = t[e]
                    } while (t && 1 !== t.nodeType);
                    return t
                }
                function o(t) {
                    var e = Tt[t] = {};
                    return ct.each(t.match(Dt) || [], (function(t, i) {
                        e[i] = true
                    }
                    )),
                    e
                }
                function a() {
                    wt.addEventListener ? (wt.removeEventListener("DOMContentLoaded", l, false),
                    t.removeEventListener("load", l, false)) : (wt.detachEvent("onreadystatechange", l),
                    t.detachEvent("onload", l))
                }
                function l() {
                    (wt.addEventListener || "load" === event.type || "complete" === wt.readyState) && (a(),
                    ct.ready())
                }
                function h(t, e, data) {
                    if (void 0 === data && 1 === t.nodeType) {
                        var i = "data-" + e.replace(Nt, "-$1").toLowerCase();
                        if ("string" == typeof (data = t.getAttribute(i))) {
                            try {
                                data = "true" === data || "false" !== data && ("null" === data ? null : +data + "" === data ? +data : Ft.test(data) ? ct.parseJSON(data) : data)
                            } catch (t) {}
                            ct.data(t, e, data)
                        } else
                            data = void 0
                    }
                    return data
                }
                function u(t) {
                    var e;
                    for (e in t)
                        if (("data" !== e || !ct.isEmptyObject(t[e])) && "toJSON" !== e)
                            return false;
                    return true
                }
                function c(t, e, data, i) {
                    if (ct.acceptData(t)) {
                        var n, s, o = ct.expando, a = t.nodeType, cache = a ? ct.cache : t, id = a ? t[o] : t[o] && o;
                        if (id && cache[id] && (i || cache[id].data) || void 0 !== data || "string" != typeof e)
                            return id || (id = a ? t[o] = Z.pop() || ct.guid++ : o),
                            cache[id] || (cache[id] = a ? {} : {
                                toJSON: ct.noop
                            }),
                            "object" != typeof e && "function" != typeof e || (i ? cache[id] = ct.extend(cache[id], e) : cache[id].data = ct.extend(cache[id].data, e)),
                            s = cache[id],
                            i || (s.data || (s.data = {}),
                            s = s.data),
                            void 0 !== data && (s[ct.camelCase(e)] = data),
                            "string" == typeof e ? null == (n = s[e]) && (n = s[ct.camelCase(e)]) : n = s,
                            n
                    }
                }
                function p(t, e, i) {
                    if (ct.acceptData(t)) {
                        var n, s, o = t.nodeType, cache = o ? ct.cache : t, id = o ? t[ct.expando] : ct.expando;
                        if (cache[id]) {
                            if (e && (n = i ? cache[id] : cache[id].data)) {
                                s = (e = ct.isArray(e) ? e.concat(ct.map(e, ct.camelCase)) : e in n || (e = ct.camelCase(e))in n ? [e] : e.split(" ")).length;
                                for (; s--; )
                                    delete n[e[s]];
                                if (i ? !u(n) : !ct.isEmptyObject(n))
                                    return
                            }
                            (i || (delete cache[id].data,
                            u(cache[id]))) && (o ? ct.cleanData([t], true) : ht.deleteExpando || cache != cache.window ? delete cache[id] : cache[id] = null)
                        }
                    }
                }
                function f() {
                    return true
                }
                function m() {
                    return false
                }
                function g() {
                    try {
                        return wt.activeElement
                    } catch (t) {}
                }
                function v(t) {
                    var list = Bt.split("|")
                      , e = t.createDocumentFragment();
                    if (e.createElement)
                        for (; list.length; )
                            e.createElement(list.pop());
                    return e
                }
                function b(t, e) {
                    var i, n, s = 0, o = typeof t.getElementsByTagName !== St ? t.getElementsByTagName(e || "*") : typeof t.querySelectorAll !== St ? t.querySelectorAll(e || "*") : void 0;
                    if (!o)
                        for (o = [],
                        i = t.childNodes || t; null != (n = i[s]); s++)
                            !e || ct.nodeName(n, e) ? o.push(n) : ct.merge(o, b(n, e));
                    return void 0 === e || e && ct.nodeName(t, e) ? ct.merge([t], o) : o
                }
                function y(t) {
                    Lt.test(t.type) && (t.defaultChecked = t.checked)
                }
                function _(t, e) {
                    return ct.nodeName(t, "table") && ct.nodeName(11 !== e.nodeType ? e : e.firstChild, "tr") ? t.getElementsByTagName("tbody")[0] || t.appendChild(t.ownerDocument.createElement("tbody")) : t
                }
                function w(t) {
                    return t.type = (null !== ct.find.attr(t, "type")) + "/" + t.type,
                    t
                }
                function x(t) {
                    var e = ee.exec(t.type);
                    return e ? t.type = e[1] : t.removeAttribute("type"),
                    t
                }
                function k(t, e) {
                    for (var i, n = 0; null != (i = t[n]); n++)
                        ct._data(i, "globalEval", !e || ct._data(e[n], "globalEval"))
                }
                function C(t, e) {
                    if (1 === e.nodeType && ct.hasData(t)) {
                        var type, i, n, s = ct._data(t), o = ct._data(e, s), events = s.events;
                        if (events)
                            for (type in delete o.handle,
                            o.events = {},
                            events)
                                for (i = 0,
                                n = events[type].length; i < n; i++)
                                    ct.event.add(e, type, events[type][i]);
                        o.data && (o.data = ct.extend({}, o.data))
                    }
                }
                function T(t, e) {
                    var i, n, data;
                    if (1 === e.nodeType) {
                        if (i = e.nodeName.toLowerCase(),
                        !ht.noCloneEvent && e[ct.expando]) {
                            for (n in (data = ct._data(e)).events)
                                ct.removeEvent(e, n, data.handle);
                            e.removeAttribute(ct.expando)
                        }
                        "script" === i && e.text !== t.text ? (w(e).text = t.text,
                        x(e)) : "object" === i ? (e.parentNode && (e.outerHTML = t.outerHTML),
                        ht.html5Clone && t.innerHTML && !ct.trim(e.innerHTML) && (e.innerHTML = t.innerHTML)) : "input" === i && Lt.test(t.type) ? (e.defaultChecked = e.checked = t.checked,
                        e.value !== t.value && (e.value = t.value)) : "option" === i ? e.defaultSelected = e.selected = t.defaultSelected : "input" !== i && "textarea" !== i || (e.defaultValue = t.defaultValue)
                    }
                }
                function A(e, i) {
                    var style, n = ct(i.createElement(e)).appendTo(i.body), display = t.getDefaultComputedStyle && (style = t.getDefaultComputedStyle(n[0])) ? style.display : ct.css(n[0], "display");
                    return n.detach(),
                    display
                }
                function S(t) {
                    var e = wt
                      , display = ae[t];
                    return display || ("none" !== (display = A(t, e)) && display || ((e = ((re = (re || ct("<iframe frameborder='0' width='0' height='0'/>")).appendTo(e.documentElement))[0].contentWindow || re[0].contentDocument).document).write(),
                    e.close(),
                    display = A(t, e),
                    re.detach()),
                    ae[t] = display),
                    display
                }
                function E(t, e) {
                    return {
                        get: function() {
                            var i = t();
                            if (null != i)
                                return i ? (delete this.get,
                                void 0) : (this.get = e).apply(this, arguments)
                        }
                    }
                }
                function I(style, t) {
                    if (t in style)
                        return t;
                    for (var e = t.charAt(0).toUpperCase() + t.slice(1), i = t, n = Ce.length; n--; )
                        if ((t = Ce[n] + e)in style)
                            return t;
                    return i
                }
                function P(t, show) {
                    for (var display, e, i, n = [], index = 0, length = t.length; index < length; index++)
                        (e = t[index]).style && (n[index] = ct._data(e, "olddisplay"),
                        display = e.style.display,
                        show ? (n[index] || "none" !== display || (e.style.display = ""),
                        "" === e.style.display && Ht(e) && (n[index] = ct._data(e, "olddisplay", S(e.nodeName)))) : (i = Ht(e),
                        (display && "none" !== display || !i) && ct._data(e, "olddisplay", i ? display : ct.css(e, "display"))));
                    for (index = 0; index < length; index++)
                        (e = t[index]).style && (show && "none" !== e.style.display && "" !== e.style.display || (e.style.display = show ? n[index] || "" : "none"));
                    return t
                }
                function F(t, e, i) {
                    var n = _e.exec(e);
                    return n ? Math.max(0, n[1] - (i || 0)) + (n[2] || "px") : e
                }
                function N(t, e, i, n, s) {
                    for (var o = i === (n ? "border" : "content") ? 4 : "width" === e ? 1 : 0, a = 0; o < 4; o += 2)
                        "margin" === i && (a += ct.css(t, i + zt[o], true, s)),
                        n ? ("content" === i && (a -= ct.css(t, "padding" + zt[o], true, s)),
                        "margin" !== i && (a -= ct.css(t, "border" + zt[o] + "Width", true, s))) : (a += ct.css(t, "padding" + zt[o], true, s),
                        "padding" !== i && (a += ct.css(t, "border" + zt[o] + "Width", true, s)));
                    return a
                }
                function M(t, e, i) {
                    var n = true
                      , s = "width" === e ? t.offsetWidth : t.offsetHeight
                      , o = pe(t)
                      , a = ht.boxSizing && "border-box" === ct.css(t, "boxSizing", false, o);
                    if (s <= 0 || null == s) {
                        if (((s = fe(t, e, o)) < 0 || null == s) && (s = t.style[e]),
                        ce.test(s))
                            return s;
                        n = a && (ht.boxSizingReliable() || s === t.style[e]),
                        s = parseFloat(s) || 0
                    }
                    return s + N(t, e, i || (a ? "border" : "content"), n, o) + "px"
                }
                function z(t, e, i, n, s) {
                    return new z.prototype.init(t,e,i,n,s)
                }
                function H() {
                    return setTimeout((function() {
                        Te = void 0
                    }
                    )),
                    Te = ct.now()
                }
                function O(type, t) {
                    var e, i = {
                        height: type
                    }, n = 0;
                    for (t = t ? 1 : 0; n < 4; n += 2 - t)
                        i["margin" + (e = zt[n])] = i["padding" + e] = type;
                    return t && (i.opacity = i.width = type),
                    i
                }
                function L(t, e, animation) {
                    for (var i, n = (Fe[e] || []).concat(Fe["*"]), index = 0, length = n.length; index < length; index++)
                        if (i = n[index].call(animation, e, t))
                            return i
                }
                function $(t, props, e) {
                    var i, n, s, o, a, l, display, h, u = this, c = {}, style = t.style, p = t.nodeType && Ht(t), f = ct._data(t, "fxshow");
                    for (i in e.queue || (null == (a = ct._queueHooks(t, "fx")).unqueued && (a.unqueued = 0,
                    l = a.empty.fire,
                    a.empty.fire = function() {
                        a.unqueued || l()
                    }
                    ),
                    a.unqueued++,
                    u.always((function() {
                        u.always((function() {
                            a.unqueued--,
                            ct.queue(t, "fx").length || a.empty.fire()
                        }
                        ))
                    }
                    ))),
                    1 === t.nodeType && ("height"in props || "width"in props) && (e.overflow = [style.overflow, style.overflowX, style.overflowY],
                    "inline" === (h = "none" === (display = ct.css(t, "display")) ? ct._data(t, "olddisplay") || S(t.nodeName) : display) && "none" === ct.css(t, "float") && (ht.inlineBlockNeedsLayout && "inline" !== S(t.nodeName) ? style.zoom = 1 : style.display = "inline-block")),
                    e.overflow && (style.overflow = "hidden",
                    ht.shrinkWrapBlocks() || u.always((function() {
                        style.overflow = e.overflow[0],
                        style.overflowX = e.overflow[1],
                        style.overflowY = e.overflow[2]
                    }
                    ))),
                    props)
                        if (n = props[i],
                        Se.exec(n)) {
                            if (delete props[i],
                            s = s || "toggle" === n,
                            n === (p ? "hide" : "show")) {
                                if ("show" !== n || !f || void 0 === f[i])
                                    continue;
                                p = true
                            }
                            c[i] = f && f[i] || ct.style(t, i)
                        } else
                            display = void 0;
                    if (ct.isEmptyObject(c))
                        "inline" === ("none" === display ? S(t.nodeName) : display) && (style.display = display);
                    else
                        for (i in f ? "hidden"in f && (p = f.hidden) : f = ct._data(t, "fxshow", {}),
                        s && (f.hidden = !p),
                        p ? ct(t).show() : u.done((function() {
                            ct(t).hide()
                        }
                        )),
                        u.done((function() {
                            var e;
                            for (e in ct._removeData(t, "fxshow"),
                            c)
                                ct.style(t, e, c[e])
                        }
                        )),
                        c)
                            o = L(p ? f[i] : 0, i, u),
                            i in f || (f[i] = o.start,
                            p && (o.end = o.start,
                            o.start = "width" === i || "height" === i ? 1 : 0))
                }
                function j(props, t) {
                    var index, e, i, n, s;
                    for (index in props)
                        if (i = t[e = ct.camelCase(index)],
                        n = props[index],
                        ct.isArray(n) && (i = n[1],
                        n = props[index] = n[0]),
                        index !== e && (props[e] = n,
                        delete props[index]),
                        (s = ct.cssHooks[e]) && "expand"in s)
                            for (index in n = s.expand(n),
                            delete props[e],
                            n)
                                index in props || (props[index] = n[index],
                                t[index] = i);
                        else
                            t[e] = i
                }
                function Animation(t, properties, e) {
                    var i, n, index = 0, length = Pe.length, s = ct.Deferred().always((function() {
                        delete o.elem
                    }
                    )), o = function() {
                        if (n)
                            return false;
                        for (var e = Te || H(), i = Math.max(0, animation.startTime + animation.duration - e), o, a = 1 - (i / animation.duration || 0), index = 0, length = animation.tweens.length; index < length; index++)
                            animation.tweens[index].run(a);
                        return s.notifyWith(t, [animation, a, i]),
                        a < 1 && length ? i : (s.resolveWith(t, [animation]),
                        false)
                    }, animation = s.promise({
                        elem: t,
                        props: ct.extend({}, properties),
                        opts: ct.extend(true, {
                            specialEasing: {}
                        }, e),
                        originalProperties: properties,
                        originalOptions: e,
                        startTime: Te || H(),
                        duration: e.duration,
                        tweens: [],
                        createTween: function(e, i) {
                            var n = ct.Tween(t, animation.opts, e, i, animation.opts.specialEasing[e] || animation.opts.easing);
                            return animation.tweens.push(n),
                            n
                        },
                        stop: function(e) {
                            var index = 0
                              , length = e ? animation.tweens.length : 0;
                            if (n)
                                return this;
                            for (n = true; index < length; index++)
                                animation.tweens[index].run(1);
                            return e ? s.resolveWith(t, [animation, e]) : s.rejectWith(t, [animation, e]),
                            this
                        }
                    }), props = animation.props;
                    for (j(props, animation.opts.specialEasing); index < length; index++)
                        if (i = Pe[index].call(animation, t, props, animation.opts))
                            return i;
                    return ct.map(props, L, animation),
                    ct.isFunction(animation.opts.start) && animation.opts.start.call(t, animation),
                    ct.fx.timer(ct.extend(o, {
                        elem: t,
                        anim: animation,
                        queue: animation.opts.queue
                    })),
                    animation.progress(animation.opts.progress).done(animation.opts.done, animation.opts.complete).fail(animation.opts.fail).always(animation.opts.always)
                }
                function W(t) {
                    return function(e, i) {
                        "string" != typeof e && (i = e,
                        e = "*");
                        var n, s = 0, o = e.toLowerCase().match(Dt) || [];
                        if (ct.isFunction(i))
                            for (; n = o[s++]; )
                                "+" === n.charAt(0) ? (n = n.slice(1) || "*",
                                (t[n] = t[n] || []).unshift(i)) : (t[n] = t[n] || []).push(i)
                    }
                }
                function B(t, e, i, n) {
                    function s(l) {
                        var h;
                        return o[l] = true,
                        ct.each(t[l] || [], (function(t, l) {
                            var u = l(e, i, n);
                            return "string" != typeof u || a || o[u] ? a ? !(h = u) : void 0 : (e.dataTypes.unshift(u),
                            s(u),
                            false)
                        }
                        )),
                        h
                    }
                    var o = {}
                      , a = t === ai;
                    return s(e.dataTypes[0]) || !o["*"] && s("*")
                }
                function U(t, e) {
                    var i, n, s = ct.ajaxSettings.flatOptions || {};
                    for (n in e)
                        void 0 !== e[n] && ((s[n] ? t : i || (i = {}))[n] = e[n]);
                    return i && ct.extend(true, t, i),
                    t
                }
                function Y(t, e, i) {
                    for (var n, s, o, type, a = t.contents, l = t.dataTypes; "*" === l[0]; )
                        l.shift(),
                        void 0 === s && (s = t.mimeType || e.getResponseHeader("Content-Type"));
                    if (s)
                        for (type in a)
                            if (a[type] && a[type].test(s)) {
                                l.unshift(type);
                                break
                            }
                    if (l[0]in i)
                        o = l[0];
                    else {
                        for (type in i) {
                            if (!l[0] || t.converters[type + " " + l[0]]) {
                                o = type;
                                break
                            }
                            n || (n = type)
                        }
                        o = o || n
                    }
                    if (o)
                        return o !== l[0] && l.unshift(o),
                        i[o]
                }
                function V(t, e, i, n) {
                    var s, o, a, l, h, u = {}, c = t.dataTypes.slice();
                    if (c[1])
                        for (a in t.converters)
                            u[a.toLowerCase()] = t.converters[a];
                    for (o = c.shift(); o; )
                        if (t.responseFields[o] && (i[t.responseFields[o]] = e),
                        !h && n && t.dataFilter && (e = t.dataFilter(e, t.dataType)),
                        h = o,
                        o = c.shift())
                            if ("*" === o)
                                o = h;
                            else if ("*" !== h && h !== o) {
                                if (!(a = u[h + " " + o] || u["* " + o]))
                                    for (s in u)
                                        if ((l = s.split(" "))[1] === o && (a = u[h + " " + l[0]] || u["* " + l[0]])) {
                                            true === a ? a = u[s] : true !== u[s] && (o = l[0],
                                            c.unshift(l[1]));
                                            break
                                        }
                                if (true !== a)
                                    if (a && t.throws)
                                        e = a(e);
                                    else
                                        try {
                                            e = a(e)
                                        } catch (t) {
                                            return {
                                                state: "parsererror",
                                                error: a ? t : "No conversion from " + h + " to " + o
                                            }
                                        }
                            }
                    return {
                        state: "success",
                        data: e
                    }
                }
                function K(t, e, i, add) {
                    var n;
                    if (ct.isArray(e))
                        ct.each(e, (function(e, n) {
                            i || ui.test(t) ? add(t, n) : K(t + "[" + ("object" == typeof n ? e : "") + "]", n, i, add)
                        }
                        ));
                    else if (i || "object" !== ct.type(e))
                        add(t, e);
                    else
                        for (n in e)
                            K(t + "[" + n + "]", e[n], i, add)
                }
                function X() {
                    try {
                        return new t.XMLHttpRequest
                    } catch (t) {}
                }
                function G() {
                    try {
                        return new t.ActiveXObject("Microsoft.XMLHTTP")
                    } catch (t) {}
                }
                function J(t) {
                    return ct.isWindow(t) ? t : 9 === t.nodeType && (t.defaultView || t.parentWindow)
                }
                var Z = []
                  , tt = Z.slice
                  , nt = Z.concat
                  , st = Z.push
                  , ot = Z.indexOf
                  , rt = {}
                  , at = rt.toString
                  , lt = rt.hasOwnProperty
                  , ht = {}
                  , ut = "1.11.1"
                  , ct = function(selector, t) {
                    return new ct.fn.init(selector,t)
                }
                  , dt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g
                  , pt = /^-ms-/
                  , ft = /-([\da-z])/gi
                  , mt = function(all, t) {
                    return t.toUpperCase()
                };
                ct.fn = ct.prototype = {
                    jquery: ut,
                    constructor: ct,
                    selector: "",
                    length: 0,
                    toArray: function() {
                        return tt.call(this)
                    },
                    get: function(t) {
                        return null != t ? t < 0 ? this[t + this.length] : this[t] : tt.call(this)
                    },
                    pushStack: function(t) {
                        var e = ct.merge(this.constructor(), t);
                        return e.prevObject = this,
                        e.context = this.context,
                        e
                    },
                    each: function(t, e) {
                        return ct.each(this, t, e)
                    },
                    map: function(t) {
                        return this.pushStack(ct.map(this, (function(e, i) {
                            return t.call(e, i, e)
                        }
                        )))
                    },
                    slice: function() {
                        return this.pushStack(tt.apply(this, arguments))
                    },
                    first: function() {
                        return this.eq(0)
                    },
                    last: function() {
                        return this.eq(-1)
                    },
                    eq: function(t) {
                        var e = this.length
                          , i = +t + (t < 0 ? e : 0);
                        return this.pushStack(i >= 0 && i < e ? [this[i]] : [])
                    },
                    end: function() {
                        return this.prevObject || this.constructor(null)
                    },
                    push: st,
                    sort: Z.sort,
                    splice: Z.splice
                },
                ct.extend = ct.fn.extend = function() {
                    var t, e, copy, i, n, clone, s = arguments[0] || {}, o = 1, length = arguments.length, a = false;
                    for ("boolean" == typeof s && (a = s,
                    s = arguments[o] || {},
                    o++),
                    "object" == typeof s || ct.isFunction(s) || (s = {}),
                    o === length && (s = this,
                    o--); o < length; o++)
                        if (null != (n = arguments[o]))
                            for (i in n)
                                t = s[i],
                                s !== (copy = n[i]) && (a && copy && (ct.isPlainObject(copy) || (e = ct.isArray(copy))) ? (e ? (e = false,
                                clone = t && ct.isArray(t) ? t : []) : clone = t && ct.isPlainObject(t) ? t : {},
                                s[i] = ct.extend(a, clone, copy)) : void 0 !== copy && (s[i] = copy));
                    return s
                }
                ,
                ct.extend({
                    expando: "jQuery" + (ut + Math.random()).replace(/\D/g, ""),
                    isReady: true,
                    error: function(t) {
                        throw new Error(t)
                    },
                    noop: function() {},
                    isFunction: function(t) {
                        return "function" === ct.type(t)
                    },
                    isArray: Array.isArray || function(t) {
                        return "array" === ct.type(t)
                    }
                    ,
                    isWindow: function(t) {
                        return null != t && t == t.window
                    },
                    isNumeric: function(t) {
                        return !ct.isArray(t) && t - parseFloat(t) >= 0
                    },
                    isEmptyObject: function(t) {
                        var e;
                        for (e in t)
                            return false;
                        return true
                    },
                    isPlainObject: function(t) {
                        var e;
                        if (!t || "object" !== ct.type(t) || t.nodeType || ct.isWindow(t))
                            return false;
                        try {
                            if (t.constructor && !lt.call(t, "constructor") && !lt.call(t.constructor.prototype, "isPrototypeOf"))
                                return false
                        } catch (t) {
                            return false
                        }
                        if (ht.ownLast)
                            for (e in t)
                                return lt.call(t, e);
                        for (e in t)
                            ;
                        return void 0 === e || lt.call(t, e)
                    },
                    type: function(t) {
                        return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? rt[at.call(t)] || "object" : typeof t
                    },
                    globalEval: function(data) {
                        data && ct.trim(data) && (t.execScript || function(data) {
                            t.eval.call(t, data)
                        }
                        )(data)
                    },
                    camelCase: function(t) {
                        return t.replace(pt, "ms-").replace(ft, mt)
                    },
                    nodeName: function(t, e) {
                        return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
                    },
                    each: function(t, e, n) {
                        var s, o = 0, length = t.length, a = i(t);
                        if (n) {
                            if (a)
                                for (; o < length && false !== (s = e.apply(t[o], n)); o++)
                                    ;
                            else
                                for (o in t)
                                    if (false === (s = e.apply(t[o], n)))
                                        break
                        } else if (a)
                            for (; o < length && false !== (s = e.call(t[o], o, t[o])); o++)
                                ;
                        else
                            for (o in t)
                                if (false === (s = e.call(t[o], o, t[o])))
                                    break;
                        return t
                    },
                    trim: function(text) {
                        return null == text ? "" : (text + "").replace(dt, "")
                    },
                    makeArray: function(t, e) {
                        var n = e || [];
                        return null != t && (i(Object(t)) ? ct.merge(n, "string" == typeof t ? [t] : t) : st.call(n, t)),
                        n
                    },
                    inArray: function(t, e, i) {
                        var n;
                        if (e) {
                            if (ot)
                                return ot.call(e, t, i);
                            for (n = e.length,
                            i = i ? i < 0 ? Math.max(0, n + i) : i : 0; i < n; i++)
                                if (i in e && e[i] === t)
                                    return i
                        }
                        return -1
                    },
                    merge: function(t, e) {
                        for (var i = +e.length, n = 0, s = t.length; n < i; )
                            t[s++] = e[n++];
                        if (i != i)
                            for (; void 0 !== e[n]; )
                                t[s++] = e[n++];
                        return t.length = s,
                        t
                    },
                    grep: function(t, e, i) {
                        for (var n, s = [], o = 0, length = t.length, a = !i; o < length; o++)
                            (n = !e(t[o], o)) !== a && s.push(t[o]);
                        return s
                    },
                    map: function(t, e, n) {
                        var s, o = 0, length = t.length, a, l = [];
                        if (i(t))
                            for (; o < length; o++)
                                null != (s = e(t[o], o, n)) && l.push(s);
                        else
                            for (o in t)
                                null != (s = e(t[o], o, n)) && l.push(s);
                        return nt.apply([], l)
                    },
                    guid: 1,
                    proxy: function(t, e) {
                        var i, n, s;
                        if ("string" == typeof e && (s = t[e],
                        e = t,
                        t = s),
                        ct.isFunction(t))
                            return i = tt.call(arguments, 2),
                            n = function() {
                                return t.apply(e || this, i.concat(tt.call(arguments)))
                            }
                            ,
                            n.guid = t.guid = t.guid || ct.guid++,
                            n
                    },
                    now: function() {
                        return +new Date
                    },
                    support: ht
                }),
                ct.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), (function(t, e) {
                    rt["[object " + e + "]"] = e.toLowerCase()
                }
                ));
                var gt = /*!
 * Sizzle CSS Selector Engine v1.10.19
 * http://sizzlejs.com/
 *
 * Copyright 2013 jQuery Foundation, Inc. and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2014-04-18
 */
                function(t) {
                    function e(selector, t, e, i) {
                        var n, s, o, a, l, h, u, p, m, g;
                        if ((t ? t.ownerDocument || t : B) !== M && N(t),
                        e = e || [],
                        !selector || "string" != typeof selector)
                            return e;
                        if (1 !== (a = (t = t || M).nodeType) && 9 !== a)
                            return [];
                        if (H && !i) {
                            if (n = Dt.exec(selector))
                                if (o = n[1]) {
                                    if (9 === a) {
                                        if (!(s = t.getElementById(o)) || !s.parentNode)
                                            return e;
                                        if (s.id === o)
                                            return e.push(s),
                                            e
                                    } else if (t.ownerDocument && (s = t.ownerDocument.getElementById(o)) && j(t, s) && s.id === o)
                                        return e.push(s),
                                        e
                                } else {
                                    if (n[2])
                                        return rt.apply(e, t.getElementsByTagName(selector)),
                                        e;
                                    if ((o = n[3]) && k.getElementsByClassName && t.getElementsByClassName)
                                        return rt.apply(e, t.getElementsByClassName(o)),
                                        e
                                }
                            if (k.qsa && (!O || !O.test(selector))) {
                                if (p = u = W,
                                m = t,
                                g = 9 === a && selector,
                                1 === a && "object" !== t.nodeName.toLowerCase()) {
                                    for (h = S(selector),
                                    (u = t.getAttribute("id")) ? p = u.replace(At, "\\$&") : t.setAttribute("id", p),
                                    p = "[id='" + p + "'] ",
                                    l = h.length; l--; )
                                        h[l] = p + f(h[l]);
                                    m = Tt.test(selector) && c(t.parentNode) || t,
                                    g = h.join(",")
                                }
                                if (g)
                                    try {
                                        return rt.apply(e, m.querySelectorAll(g)),
                                        e
                                    } catch (t) {} finally {
                                        u || t.removeAttribute("id")
                                    }
                            }
                        }
                        return select(selector.replace(mt, "$1"), t, e, i)
                    }
                    function i() {
                        function cache(e, i) {
                            return t.push(e + " ") > C.cacheLength && delete cache[t.shift()],
                            cache[e + " "] = i
                        }
                        var t = [];
                        return cache
                    }
                    function n(t) {
                        return t[W] = true,
                        t
                    }
                    function s(t) {
                        var e = M.createElement("div");
                        try {
                            return !!t(e)
                        } catch (t) {
                            return false
                        } finally {
                            e.parentNode && e.parentNode.removeChild(e),
                            e = null
                        }
                    }
                    function o(t, e) {
                        for (var i = t.split("|"), n = t.length; n--; )
                            C.attrHandle[i[n]] = e
                    }
                    function a(t, e) {
                        var i = e && t
                          , diff = i && 1 === t.nodeType && 1 === e.nodeType && (~e.sourceIndex || Z) - (~t.sourceIndex || Z);
                        if (diff)
                            return diff;
                        if (i)
                            for (; i = i.nextSibling; )
                                if (i === e)
                                    return -1;
                        return t ? 1 : -1
                    }
                    function l(type) {
                        return function(t) {
                            var e;
                            return "input" === t.nodeName.toLowerCase() && t.type === type
                        }
                    }
                    function h(type) {
                        return function(t) {
                            var e = t.nodeName.toLowerCase();
                            return ("input" === e || "button" === e) && t.type === type
                        }
                    }
                    function u(t) {
                        return n((function(e) {
                            return e = +e,
                            n((function(i, n) {
                                for (var s, o = t([], i.length, e), a = o.length; a--; )
                                    i[s = o[a]] && (i[s] = !(n[s] = i[s]))
                            }
                            ))
                        }
                        ))
                    }
                    function c(t) {
                        return t && typeof t.getElementsByTagName !== J && t
                    }
                    function p() {}
                    function f(t) {
                        for (var e = 0, i = t.length, selector = ""; e < i; e++)
                            selector += t[e].value;
                        return selector
                    }
                    function m(t, e, base) {
                        var i = e.dir
                          , n = base && "parentNode" === i
                          , s = Y++;
                        return e.first ? function(e, s, xml) {
                            for (; e = e[i]; )
                                if (1 === e.nodeType || n)
                                    return t(e, s, xml)
                        }
                        : function(e, o, xml) {
                            var a, l, h = [U, s];
                            if (xml) {
                                for (; e = e[i]; )
                                    if ((1 === e.nodeType || n) && t(e, o, xml))
                                        return true
                            } else
                                for (; e = e[i]; )
                                    if (1 === e.nodeType || n) {
                                        if ((a = (l = e[W] || (e[W] = {}))[i]) && a[0] === U && a[1] === s)
                                            return h[2] = a[2];
                                        if (l[i] = h,
                                        h[2] = t(e, o, xml))
                                            return true
                                    }
                        }
                    }
                    function g(t) {
                        return t.length > 1 ? function(e, i, xml) {
                            for (var n = t.length; n--; )
                                if (!t[n](e, i, xml))
                                    return false;
                            return true
                        }
                        : t[0]
                    }
                    function v(selector, t, i) {
                        for (var n = 0, s = t.length; n < s; n++)
                            e(selector, t[n], i);
                        return i
                    }
                    function b(t, map, filter, e, xml) {
                        for (var i, n = [], s = 0, o = t.length, a = null != map; s < o; s++)
                            (i = t[s]) && (filter && !filter(i, e, xml) || (n.push(i),
                            a && map.push(s)));
                        return n
                    }
                    function y(t, selector, e, i, s, o) {
                        return i && !i[W] && (i = y(i)),
                        s && !s[W] && (s = y(s, o)),
                        n((function(n, o, a, xml) {
                            var l, h, u, c = [], p = [], f = o.length, m = n || v(selector || "*", a.nodeType ? [a] : a, []), g = !t || !n && selector ? m : b(m, c, t, a, xml), y = e ? s || (n ? t : f || i) ? [] : o : g;
                            if (e && e(g, y, a, xml),
                            i)
                                for (l = b(y, p),
                                i(l, [], a, xml),
                                h = l.length; h--; )
                                    (u = l[h]) && (y[p[h]] = !(g[p[h]] = u));
                            if (n) {
                                if (s || t) {
                                    if (s) {
                                        for (l = [],
                                        h = y.length; h--; )
                                            (u = y[h]) && l.push(g[h] = u);
                                        s(null, y = [], l, xml)
                                    }
                                    for (h = y.length; h--; )
                                        (u = y[h]) && (l = s ? lt.call(n, u) : c[h]) > -1 && (n[l] = !(o[l] = u))
                                }
                            } else
                                y = b(y === o ? y.splice(f, y.length) : y),
                                s ? s(null, o, y, xml) : rt.apply(o, y)
                        }
                        ))
                    }
                    function _(t) {
                        for (var e, i, n, s = t.length, o = C.relative[t[0].type], a = o || C.relative[" "], l = o ? 1 : 0, h = m((function(t) {
                            return t === e
                        }
                        ), a, true), u = m((function(t) {
                            return lt.call(e, t) > -1
                        }
                        ), a, true), c = [function(t, i, xml) {
                            return !o && (xml || i !== I) || ((e = i).nodeType ? h(t, i, xml) : u(t, i, xml))
                        }
                        ]; l < s; l++)
                            if (i = C.relative[t[l].type])
                                c = [m(g(c), i)];
                            else {
                                if ((i = C.filter[t[l].type].apply(null, t[l].matches))[W]) {
                                    for (n = ++l; n < s && !C.relative[t[n].type]; n++)
                                        ;
                                    return y(l > 1 && g(c), l > 1 && f(t.slice(0, l - 1).concat({
                                        value: " " === t[l - 2].type ? "*" : ""
                                    })).replace(mt, "$1"), i, l < n && _(t.slice(l, n)), n < s && _(t = t.slice(n)), n < s && f(t))
                                }
                                c.push(i)
                            }
                        return g(c)
                    }
                    function w(t, i) {
                        var s = i.length > 0
                          , o = t.length > 0
                          , a = function(n, a, xml, l, h) {
                            var u, c, p, f = 0, m = "0", g = n && [], v = [], y = I, _ = n || o && C.find.TAG("*", h), w = U += null == y ? 1 : Math.random() || .1, x = _.length;
                            for (h && (I = a !== M && a); m !== x && null != (u = _[m]); m++) {
                                if (o && u) {
                                    for (c = 0; p = t[c++]; )
                                        if (p(u, a, xml)) {
                                            l.push(u);
                                            break
                                        }
                                    h && (U = w)
                                }
                                s && ((u = !p && u) && f--,
                                n && g.push(u))
                            }
                            if (f += m,
                            s && m !== f) {
                                for (c = 0; p = i[c++]; )
                                    p(g, v, a, xml);
                                if (n) {
                                    if (f > 0)
                                        for (; m--; )
                                            g[m] || v[m] || (v[m] = st.call(l));
                                    v = b(v)
                                }
                                rt.apply(l, v),
                                h && !n && v.length > 0 && f + i.length > 1 && e.uniqueSort(l)
                            }
                            return h && (U = w,
                            I = y),
                            g
                        };
                        return s ? n(a) : a
                    }
                    var x, k, C, T, A, S, E, select, I, P, F, N, M, z, H, O, L, $, j, W = "sizzle" + -new Date, B = t.document, U = 0, Y = 0, V = i(), K = i(), X = i(), G = function(t, e) {
                        return t === e && (F = true),
                        0
                    }, J = "undefined", Z = 1 << 31, tt = {}.hasOwnProperty, nt = [], st = nt.pop, ot = nt.push, rt = nt.push, at = nt.slice, lt = nt.indexOf || function(t) {
                        for (var e = 0, i = this.length; e < i; e++)
                            if (this[e] === t)
                                return e;
                        return -1
                    }
                    , ht = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", ut = "[\\x20\\t\\r\\n\\f]", ct = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", dt = ct.replace("w", "w#"), pt = "\\[[\\x20\\t\\r\\n\\f]*(" + ct + ")(?:" + ut + "*([*^$|!~]?=)" + ut + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + dt + "))|)" + ut + "*\\]", ft = ":(" + ct + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + pt + ")*)|.*)\\)|)", mt = new RegExp("^[\\x20\\t\\r\\n\\f]+|((?:^|[^\\\\])(?:\\\\.)*)[\\x20\\t\\r\\n\\f]+$","g"), gt = new RegExp("^[\\x20\\t\\r\\n\\f]*,[\\x20\\t\\r\\n\\f]*"), vt = new RegExp("^[\\x20\\t\\r\\n\\f]*([>+~]|[\\x20\\t\\r\\n\\f])[\\x20\\t\\r\\n\\f]*"), bt = new RegExp("=[\\x20\\t\\r\\n\\f]*([^\\]'\"]*?)[\\x20\\t\\r\\n\\f]*\\]","g"), yt = new RegExp(ft), _t = new RegExp("^" + dt + "$"), wt = {
                        ID: new RegExp("^#(" + ct + ")"),
                        CLASS: new RegExp("^\\.(" + ct + ")"),
                        TAG: new RegExp("^(" + ct.replace("w", "w*") + ")"),
                        ATTR: new RegExp("^" + pt),
                        PSEUDO: new RegExp("^" + ft),
                        CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\([\\x20\\t\\r\\n\\f]*(even|odd|(([+-]|)(\\d*)n|)[\\x20\\t\\r\\n\\f]*(?:([+-]|)[\\x20\\t\\r\\n\\f]*(\\d+)|))[\\x20\\t\\r\\n\\f]*\\)|)","i"),
                        bool: new RegExp("^(?:" + ht + ")$","i"),
                        needsContext: new RegExp("^[\\x20\\t\\r\\n\\f]*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\([\\x20\\t\\r\\n\\f]*((?:-\\d)?\\d*)[\\x20\\t\\r\\n\\f]*\\)|)(?=[^-]|$)","i")
                    }, xt = /^(?:input|select|textarea|button)$/i, kt = /^h\d$/i, Ct = /^[^{]+\{\s*\[native \w/, Dt = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, Tt = /[+~]/, At = /'|\\/g, St = new RegExp("\\\\([\\da-f]{1,6}[\\x20\\t\\r\\n\\f]?|([\\x20\\t\\r\\n\\f])|.)","ig"), Pt = function(t, e, i) {
                        var n = "0x" + e - 65536;
                        return n != n || i ? e : n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320)
                    };
                    try {
                        rt.apply(nt = at.call(B.childNodes), B.childNodes),
                        nt[B.childNodes.length].nodeType
                    } catch (t) {
                        rt = {
                            apply: nt.length ? function(t, e) {
                                ot.apply(t, at.call(e))
                            }
                            : function(t, e) {
                                for (var i = t.length, n = 0; t[i++] = e[n++]; )
                                    ;
                                t.length = i - 1
                            }
                        }
                    }
                    for (x in k = e.support = {},
                    A = e.isXML = function(t) {
                        var e = t && (t.ownerDocument || t).documentElement;
                        return !!e && "HTML" !== e.nodeName
                    }
                    ,
                    N = e.setDocument = function(t) {
                        var e, i = t ? t.ownerDocument || t : B, n = i.defaultView;
                        return i !== M && 9 === i.nodeType && i.documentElement ? (M = i,
                        z = i.documentElement,
                        H = !A(i),
                        n && n !== n.top && (n.addEventListener ? n.addEventListener("unload", (function() {
                            N()
                        }
                        ), false) : n.attachEvent && n.attachEvent("onunload", (function() {
                            N()
                        }
                        ))),
                        k.attributes = s((function(t) {
                            return t.className = "i",
                            !t.getAttribute("className")
                        }
                        )),
                        k.getElementsByTagName = s((function(t) {
                            return t.appendChild(i.createComment("")),
                            !t.getElementsByTagName("*").length
                        }
                        )),
                        k.getElementsByClassName = Ct.test(i.getElementsByClassName) && s((function(t) {
                            return t.innerHTML = "<div class='a'></div><div class='a i'></div>",
                            t.firstChild.className = "i",
                            2 === t.getElementsByClassName("i").length
                        }
                        )),
                        k.getById = s((function(t) {
                            return z.appendChild(t).id = W,
                            !i.getElementsByName || !i.getElementsByName(W).length
                        }
                        )),
                        k.getById ? (C.find.ID = function(id, t) {
                            if (typeof t.getElementById !== J && H) {
                                var e = t.getElementById(id);
                                return e && e.parentNode ? [e] : []
                            }
                        }
                        ,
                        C.filter.ID = function(id) {
                            var t = id.replace(St, Pt);
                            return function(e) {
                                return e.getAttribute("id") === t
                            }
                        }
                        ) : (delete C.find.ID,
                        C.filter.ID = function(id) {
                            var t = id.replace(St, Pt);
                            return function(e) {
                                var i = typeof e.getAttributeNode !== J && e.getAttributeNode("id");
                                return i && i.value === t
                            }
                        }
                        ),
                        C.find.TAG = k.getElementsByTagName ? function(t, e) {
                            if (typeof e.getElementsByTagName !== J)
                                return e.getElementsByTagName(t)
                        }
                        : function(t, e) {
                            var i, n = [], s = 0, o = e.getElementsByTagName(t);
                            if ("*" === t) {
                                for (; i = o[s++]; )
                                    1 === i.nodeType && n.push(i);
                                return n
                            }
                            return o
                        }
                        ,
                        C.find.CLASS = k.getElementsByClassName && function(t, e) {
                            if (typeof e.getElementsByClassName !== J && H)
                                return e.getElementsByClassName(t)
                        }
                        ,
                        L = [],
                        O = [],
                        (k.qsa = Ct.test(i.querySelectorAll)) && (s((function(t) {
                            t.innerHTML = "<select msallowclip=''><option selected=''></option></select>",
                            t.querySelectorAll("[msallowclip^='']").length && O.push("[*^$]=[\\x20\\t\\r\\n\\f]*(?:''|\"\")"),
                            t.querySelectorAll("[selected]").length || O.push("\\[[\\x20\\t\\r\\n\\f]*(?:value|" + ht + ")"),
                            t.querySelectorAll(":checked").length || O.push(":checked")
                        }
                        )),
                        s((function(t) {
                            var input = i.createElement("input");
                            input.setAttribute("type", "hidden"),
                            t.appendChild(input).setAttribute("name", "D"),
                            t.querySelectorAll("[name=d]").length && O.push("name[\\x20\\t\\r\\n\\f]*[*^$|!~]?="),
                            t.querySelectorAll(":enabled").length || O.push(":enabled", ":disabled"),
                            t.querySelectorAll("*,:x"),
                            O.push(",.*:")
                        }
                        ))),
                        (k.matchesSelector = Ct.test($ = z.matches || z.webkitMatchesSelector || z.mozMatchesSelector || z.oMatchesSelector || z.msMatchesSelector)) && s((function(t) {
                            k.disconnectedMatch = $.call(t, "div"),
                            $.call(t, "[s!='']:x"),
                            L.push("!=", ft)
                        }
                        )),
                        O.push(":(?!focus)"),
                        L.push(":(?!focus)"),
                        O = O.length && new RegExp(O.join("|")),
                        L = L.length && new RegExp(L.join("|")),
                        e = Ct.test(z.compareDocumentPosition),
                        j = e || Ct.test(z.contains) ? function(t, e) {
                            var i = 9 === t.nodeType ? t.documentElement : t
                              , n = e && e.parentNode;
                            return t === n || !!(n && 1 === n.nodeType && (i.contains ? i.contains(n) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(n)))
                        }
                        : function(t, e) {
                            if (e)
                                for (; e = e.parentNode; )
                                    if (e === t)
                                        return true;
                            return false
                        }
                        ,
                        G = e ? function(t, e) {
                            if (t === e)
                                return F = true,
                                0;
                            var compare = !t.compareDocumentPosition - !e.compareDocumentPosition;
                            return compare || (1 & (compare = (t.ownerDocument || t) === (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1) || !k.sortDetached && e.compareDocumentPosition(t) === compare ? t === i || t.ownerDocument === B && j(B, t) ? -1 : e === i || e.ownerDocument === B && j(B, e) ? 1 : P ? lt.call(P, t) - lt.call(P, e) : 0 : 4 & compare ? -1 : 1)
                        }
                        : function(t, e) {
                            if (t === e)
                                return F = true,
                                0;
                            var n, s = 0, o = t.parentNode, l = e.parentNode, h = [t], u = [e];
                            if (!o || !l)
                                return t === i ? -1 : e === i ? 1 : o ? -1 : l ? 1 : P ? lt.call(P, t) - lt.call(P, e) : 0;
                            if (o === l)
                                return a(t, e);
                            for (n = t; n = n.parentNode; )
                                h.unshift(n);
                            for (n = e; n = n.parentNode; )
                                u.unshift(n);
                            for (; h[s] === u[s]; )
                                s++;
                            return s ? a(h[s], u[s]) : h[s] === B ? -1 : u[s] === B ? 1 : 0
                        }
                        ,
                        i) : M
                    }
                    ,
                    e.matches = function(t, i) {
                        return e(t, null, null, i)
                    }
                    ,
                    e.matchesSelector = function(t, i) {
                        if ((t.ownerDocument || t) !== M && N(t),
                        i = i.replace(bt, "='$1']"),
                        k.matchesSelector && H && (!L || !L.test(i)) && (!O || !O.test(i)))
                            try {
                                var n = $.call(t, i);
                                if (n || k.disconnectedMatch || t.document && 11 !== t.document.nodeType)
                                    return n
                            } catch (t) {}
                        return e(i, M, null, [t]).length > 0
                    }
                    ,
                    e.contains = function(t, e) {
                        return (t.ownerDocument || t) !== M && N(t),
                        j(t, e)
                    }
                    ,
                    e.attr = function(t, e) {
                        (t.ownerDocument || t) !== M && N(t);
                        var i = C.attrHandle[e.toLowerCase()]
                          , n = i && tt.call(C.attrHandle, e.toLowerCase()) ? i(t, e, !H) : void 0;
                        return void 0 !== n ? n : k.attributes || !H ? t.getAttribute(e) : (n = t.getAttributeNode(e)) && n.specified ? n.value : null
                    }
                    ,
                    e.error = function(t) {
                        throw new Error("Syntax error, unrecognized expression: " + t)
                    }
                    ,
                    e.uniqueSort = function(t) {
                        var e, i = [], n = 0, s = 0;
                        if (F = !k.detectDuplicates,
                        P = !k.sortStable && t.slice(0),
                        t.sort(G),
                        F) {
                            for (; e = t[s++]; )
                                e === t[s] && (n = i.push(s));
                            for (; n--; )
                                t.splice(i[n], 1)
                        }
                        return P = null,
                        t
                    }
                    ,
                    T = e.getText = function(t) {
                        var e, i = "", n = 0, s = t.nodeType;
                        if (s) {
                            if (1 === s || 9 === s || 11 === s) {
                                if ("string" == typeof t.textContent)
                                    return t.textContent;
                                for (t = t.firstChild; t; t = t.nextSibling)
                                    i += T(t)
                            } else if (3 === s || 4 === s)
                                return t.nodeValue
                        } else
                            for (; e = t[n++]; )
                                i += T(e);
                        return i
                    }
                    ,
                    C = e.selectors = {
                        cacheLength: 50,
                        createPseudo: n,
                        match: wt,
                        attrHandle: {},
                        find: {},
                        relative: {
                            ">": {
                                dir: "parentNode",
                                first: true
                            },
                            " ": {
                                dir: "parentNode"
                            },
                            "+": {
                                dir: "previousSibling",
                                first: true
                            },
                            "~": {
                                dir: "previousSibling"
                            }
                        },
                        preFilter: {
                            ATTR: function(t) {
                                return t[1] = t[1].replace(St, Pt),
                                t[3] = (t[3] || t[4] || t[5] || "").replace(St, Pt),
                                "~=" === t[2] && (t[3] = " " + t[3] + " "),
                                t.slice(0, 4)
                            },
                            CHILD: function(t) {
                                return t[1] = t[1].toLowerCase(),
                                "nth" === t[1].slice(0, 3) ? (t[3] || e.error(t[0]),
                                t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])),
                                t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && e.error(t[0]),
                                t
                            },
                            PSEUDO: function(t) {
                                var e, i = !t[6] && t[2];
                                return wt.CHILD.test(t[0]) ? null : (t[3] ? t[2] = t[4] || t[5] || "" : i && yt.test(i) && (e = S(i, true)) && (e = i.indexOf(")", i.length - e) - i.length) && (t[0] = t[0].slice(0, e),
                                t[2] = i.slice(0, e)),
                                t.slice(0, 3))
                            }
                        },
                        filter: {
                            TAG: function(t) {
                                var e = t.replace(St, Pt).toLowerCase();
                                return "*" === t ? function() {
                                    return true
                                }
                                : function(t) {
                                    return t.nodeName && t.nodeName.toLowerCase() === e
                                }
                            },
                            CLASS: function(t) {
                                var e = V[t + " "];
                                return e || (e = new RegExp("(^|[\\x20\\t\\r\\n\\f])" + t + "(" + ut + "|$)")) && V(t, (function(t) {
                                    return e.test("string" == typeof t.className && t.className || typeof t.getAttribute !== J && t.getAttribute("class") || "")
                                }
                                ))
                            },
                            ATTR: function(t, i, n) {
                                return function(s) {
                                    var o = e.attr(s, t);
                                    return null == o ? "!=" === i : !i || (o += "",
                                    "=" === i ? o === n : "!=" === i ? o !== n : "^=" === i ? n && 0 === o.indexOf(n) : "*=" === i ? n && o.indexOf(n) > -1 : "$=" === i ? n && o.slice(-n.length) === n : "~=" === i ? (" " + o + " ").indexOf(n) > -1 : "|=" === i && (o === n || o.slice(0, n.length + 1) === n + "-"))
                                }
                            },
                            CHILD: function(type, t, e, i, n) {
                                var simple = "nth" !== type.slice(0, 3)
                                  , s = "last" !== type.slice(-4)
                                  , o = "of-type" === t;
                                return 1 === i && 0 === n ? function(t) {
                                    return !!t.parentNode
                                }
                                : function(t, e, xml) {
                                    var cache, a, l, diff, h, u, c = simple !== s ? "nextSibling" : "previousSibling", p = t.parentNode, f = o && t.nodeName.toLowerCase(), m = !xml && !o;
                                    if (p) {
                                        if (simple) {
                                            for (; c; ) {
                                                for (l = t; l = l[c]; )
                                                    if (o ? l.nodeName.toLowerCase() === f : 1 === l.nodeType)
                                                        return false;
                                                u = c = "only" === type && !u && "nextSibling"
                                            }
                                            return true
                                        }
                                        if (u = [s ? p.firstChild : p.lastChild],
                                        s && m) {
                                            for (h = (cache = (a = p[W] || (p[W] = {}))[type] || [])[0] === U && cache[1],
                                            diff = cache[0] === U && cache[2],
                                            l = h && p.childNodes[h]; l = ++h && l && l[c] || (diff = h = 0) || u.pop(); )
                                                if (1 === l.nodeType && ++diff && l === t) {
                                                    a[type] = [U, h, diff];
                                                    break
                                                }
                                        } else if (m && (cache = (t[W] || (t[W] = {}))[type]) && cache[0] === U)
                                            diff = cache[1];
                                        else
                                            for (; (l = ++h && l && l[c] || (diff = h = 0) || u.pop()) && ((o ? l.nodeName.toLowerCase() !== f : 1 !== l.nodeType) || !++diff || (m && ((l[W] || (l[W] = {}))[type] = [U, diff]),
                                            l !== t)); )
                                                ;
                                        return (diff -= n) === i || diff % i == 0 && diff / i >= 0
                                    }
                                }
                            },
                            PSEUDO: function(t, i) {
                                var s, o = C.pseudos[t] || C.setFilters[t.toLowerCase()] || e.error("unsupported pseudo: " + t);
                                return o[W] ? o(i) : o.length > 1 ? (s = [t, t, "", i],
                                C.setFilters.hasOwnProperty(t.toLowerCase()) ? n((function(t, e) {
                                    for (var n, s = o(t, i), a = s.length; a--; )
                                        t[n = lt.call(t, s[a])] = !(e[n] = s[a])
                                }
                                )) : function(t) {
                                    return o(t, 0, s)
                                }
                                ) : o
                            }
                        },
                        pseudos: {
                            not: n((function(selector) {
                                var input = []
                                  , t = []
                                  , e = E(selector.replace(mt, "$1"));
                                return e[W] ? n((function(t, i, n, xml) {
                                    for (var s, o = e(t, null, xml, []), a = t.length; a--; )
                                        (s = o[a]) && (t[a] = !(i[a] = s))
                                }
                                )) : function(i, n, xml) {
                                    return input[0] = i,
                                    e(input, null, xml, t),
                                    !t.pop()
                                }
                            }
                            )),
                            has: n((function(selector) {
                                return function(t) {
                                    return e(selector, t).length > 0
                                }
                            }
                            )),
                            contains: n((function(text) {
                                return function(t) {
                                    return (t.textContent || t.innerText || T(t)).indexOf(text) > -1
                                }
                            }
                            )),
                            lang: n((function(lang) {
                                return _t.test(lang || "") || e.error("unsupported lang: " + lang),
                                lang = lang.replace(St, Pt).toLowerCase(),
                                function(t) {
                                    var e;
                                    do {
                                        if (e = H ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang"))
                                            return (e = e.toLowerCase()) === lang || 0 === e.indexOf(lang + "-")
                                    } while ((t = t.parentNode) && 1 === t.nodeType);
                                    return false
                                }
                            }
                            )),
                            target: function(e) {
                                var hash = t.location && t.location.hash;
                                return hash && hash.slice(1) === e.id
                            },
                            root: function(t) {
                                return t === z
                            },
                            focus: function(t) {
                                return t === M.activeElement && (!M.hasFocus || M.hasFocus()) && !!(t.type || t.href || ~t.tabIndex)
                            },
                            enabled: function(t) {
                                return false === t.disabled
                            },
                            disabled: function(t) {
                                return true === t.disabled
                            },
                            checked: function(t) {
                                var e = t.nodeName.toLowerCase();
                                return "input" === e && !!t.checked || "option" === e && !!t.selected
                            },
                            selected: function(t) {
                                return t.parentNode && t.parentNode.selectedIndex,
                                true === t.selected
                            },
                            empty: function(t) {
                                for (t = t.firstChild; t; t = t.nextSibling)
                                    if (t.nodeType < 6)
                                        return false;
                                return true
                            },
                            parent: function(t) {
                                return !C.pseudos.empty(t)
                            },
                            header: function(t) {
                                return kt.test(t.nodeName)
                            },
                            input: function(t) {
                                return xt.test(t.nodeName)
                            },
                            button: function(t) {
                                var e = t.nodeName.toLowerCase();
                                return "input" === e && "button" === t.type || "button" === e
                            },
                            text: function(t) {
                                var e;
                                return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase())
                            },
                            first: u((function() {
                                return [0]
                            }
                            )),
                            last: u((function(t, length) {
                                return [length - 1]
                            }
                            )),
                            eq: u((function(t, length, e) {
                                return [e < 0 ? e + length : e]
                            }
                            )),
                            even: u((function(t, length) {
                                for (var e = 0; e < length; e += 2)
                                    t.push(e);
                                return t
                            }
                            )),
                            odd: u((function(t, length) {
                                for (var e = 1; e < length; e += 2)
                                    t.push(e);
                                return t
                            }
                            )),
                            lt: u((function(t, length, e) {
                                for (var i = e < 0 ? e + length : e; --i >= 0; )
                                    t.push(i);
                                return t
                            }
                            )),
                            gt: u((function(t, length, e) {
                                for (var i = e < 0 ? e + length : e; ++i < length; )
                                    t.push(i);
                                return t
                            }
                            ))
                        }
                    },
                    C.pseudos.nth = C.pseudos.eq,
                    {
                        radio: true,
                        checkbox: true,
                        file: true,
                        password: true,
                        image: true
                    })
                        C.pseudos[x] = l(x);
                    for (x in {
                        submit: true,
                        reset: true
                    })
                        C.pseudos[x] = h(x);
                    return p.prototype = C.filters = C.pseudos,
                    C.setFilters = new p,
                    S = e.tokenize = function(selector, t) {
                        var i, n, s, type, o, a, l, h = K[selector + " "];
                        if (h)
                            return t ? 0 : h.slice(0);
                        for (o = selector,
                        a = [],
                        l = C.preFilter; o; ) {
                            for (type in i && !(n = gt.exec(o)) || (n && (o = o.slice(n[0].length) || o),
                            a.push(s = [])),
                            i = false,
                            (n = vt.exec(o)) && (i = n.shift(),
                            s.push({
                                value: i,
                                type: n[0].replace(mt, " ")
                            }),
                            o = o.slice(i.length)),
                            C.filter)
                                !(n = wt[type].exec(o)) || l[type] && !(n = l[type](n)) || (i = n.shift(),
                                s.push({
                                    value: i,
                                    type: type,
                                    matches: n
                                }),
                                o = o.slice(i.length));
                            if (!i)
                                break
                        }
                        return t ? o.length : o ? e.error(selector) : K(selector, a).slice(0)
                    }
                    ,
                    E = e.compile = function(selector, t) {
                        var e, i = [], n = [], s = X[selector + " "];
                        if (!s) {
                            for (t || (t = S(selector)),
                            e = t.length; e--; )
                                (s = _(t[e]))[W] ? i.push(s) : n.push(s);
                            (s = X(selector, w(n, i))).selector = selector
                        }
                        return s
                    }
                    ,
                    select = e.select = function(selector, t, e, i) {
                        var n, s, o, type, a, l = "function" == typeof selector && selector, h = !i && S(selector = l.selector || selector);
                        if (e = e || [],
                        1 === h.length) {
                            if ((s = h[0] = h[0].slice(0)).length > 2 && "ID" === (o = s[0]).type && k.getById && 9 === t.nodeType && H && C.relative[s[1].type]) {
                                if (!(t = (C.find.ID(o.matches[0].replace(St, Pt), t) || [])[0]))
                                    return e;
                                l && (t = t.parentNode),
                                selector = selector.slice(s.shift().value.length)
                            }
                            for (n = wt.needsContext.test(selector) ? 0 : s.length; n-- && (o = s[n],
                            !C.relative[type = o.type]); )
                                if ((a = C.find[type]) && (i = a(o.matches[0].replace(St, Pt), Tt.test(s[0].type) && c(t.parentNode) || t))) {
                                    if (s.splice(n, 1),
                                    !(selector = i.length && f(s)))
                                        return rt.apply(e, i),
                                        e;
                                    break
                                }
                        }
                        return (l || E(selector, h))(i, t, !H, e, Tt.test(selector) && c(t.parentNode) || t),
                        e
                    }
                    ,
                    k.sortStable = W.split("").sort(G).join("") === W,
                    k.detectDuplicates = !!F,
                    N(),
                    k.sortDetached = s((function(t) {
                        return 1 & t.compareDocumentPosition(M.createElement("div"))
                    }
                    )),
                    s((function(t) {
                        return t.innerHTML = "<a href='#'></a>",
                        "#" === t.firstChild.getAttribute("href")
                    }
                    )) || o("type|href|height|width", (function(t, e, i) {
                        if (!i)
                            return t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2)
                    }
                    )),
                    k.attributes && s((function(t) {
                        return t.innerHTML = "<input/>",
                        t.firstChild.setAttribute("value", ""),
                        "" === t.firstChild.getAttribute("value")
                    }
                    )) || o("value", (function(t, e, i) {
                        if (!i && "input" === t.nodeName.toLowerCase())
                            return t.defaultValue
                    }
                    )),
                    s((function(t) {
                        return null == t.getAttribute("disabled")
                    }
                    )) || o(ht, (function(t, e, i) {
                        var n;
                        if (!i)
                            return true === t[e] ? e.toLowerCase() : (n = t.getAttributeNode(e)) && n.specified ? n.value : null
                    }
                    )),
                    e
                }(t);
                ct.find = gt,
                ct.expr = gt.selectors,
                ct.expr[":"] = ct.expr.pseudos,
                ct.unique = gt.uniqueSort,
                ct.text = gt.getText,
                ct.isXMLDoc = gt.isXML,
                ct.contains = gt.contains;
                var vt = ct.expr.match.needsContext
                  , bt = /^<(\w+)\s*\/?>(?:<\/\1>|)$/
                  , yt = /^.[^:#\[\.,]*$/;
                ct.filter = function(t, e, i) {
                    var n = e[0];
                    return i && (t = ":not(" + t + ")"),
                    1 === e.length && 1 === n.nodeType ? ct.find.matchesSelector(n, t) ? [n] : [] : ct.find.matches(t, ct.grep(e, (function(t) {
                        return 1 === t.nodeType
                    }
                    )))
                }
                ,
                ct.fn.extend({
                    find: function(selector) {
                        var t, e = [], i = this, n = i.length;
                        if ("string" != typeof selector)
                            return this.pushStack(ct(selector).filter((function() {
                                for (t = 0; t < n; t++)
                                    if (ct.contains(i[t], this))
                                        return true
                            }
                            )));
                        for (t = 0; t < n; t++)
                            ct.find(selector, i[t], e);
                        return (e = this.pushStack(n > 1 ? ct.unique(e) : e)).selector = this.selector ? this.selector + " " + selector : selector,
                        e
                    },
                    filter: function(selector) {
                        return this.pushStack(n(this, selector || [], false))
                    },
                    not: function(selector) {
                        return this.pushStack(n(this, selector || [], true))
                    },
                    is: function(selector) {
                        return !!n(this, "string" == typeof selector && vt.test(selector) ? ct(selector) : selector || [], false).length
                    }
                });
                var _t, wt = t.document, xt = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, init;
                (ct.fn.init = function(selector, t) {
                    var e, i;
                    if (!selector)
                        return this;
                    if ("string" == typeof selector) {
                        if (!(e = "<" === selector.charAt(0) && ">" === selector.charAt(selector.length - 1) && selector.length >= 3 ? [null, selector, null] : xt.exec(selector)) || !e[1] && t)
                            return !t || t.jquery ? (t || _t).find(selector) : this.constructor(t).find(selector);
                        if (e[1]) {
                            if (t = t instanceof ct ? t[0] : t,
                            ct.merge(this, ct.parseHTML(e[1], t && t.nodeType ? t.ownerDocument || t : wt, true)),
                            bt.test(e[1]) && ct.isPlainObject(t))
                                for (e in t)
                                    ct.isFunction(this[e]) ? this[e](t[e]) : this.attr(e, t[e]);
                            return this
                        }
                        if ((i = wt.getElementById(e[2])) && i.parentNode) {
                            if (i.id !== e[2])
                                return _t.find(selector);
                            this.length = 1,
                            this[0] = i
                        }
                        return this.context = wt,
                        this.selector = selector,
                        this
                    }
                    return selector.nodeType ? (this.context = this[0] = selector,
                    this.length = 1,
                    this) : ct.isFunction(selector) ? void 0 !== _t.ready ? _t.ready(selector) : selector(ct) : (void 0 !== selector.selector && (this.selector = selector.selector,
                    this.context = selector.context),
                    ct.makeArray(selector, this))
                }
                ).prototype = ct.fn,
                _t = ct(wt);
                var kt = /^(?:parents|prev(?:Until|All))/
                  , Ct = {
                    children: true,
                    contents: true,
                    next: true,
                    prev: true
                };
                ct.extend({
                    dir: function(t, e, i) {
                        for (var n = [], s = t[e]; s && 9 !== s.nodeType && (void 0 === i || 1 !== s.nodeType || !ct(s).is(i)); )
                            1 === s.nodeType && n.push(s),
                            s = s[e];
                        return n
                    },
                    sibling: function(t, e) {
                        for (var r = []; t; t = t.nextSibling)
                            1 === t.nodeType && t !== e && r.push(t);
                        return r
                    }
                }),
                ct.fn.extend({
                    has: function(t) {
                        var e, i = ct(t, this), n = i.length;
                        return this.filter((function() {
                            for (e = 0; e < n; e++)
                                if (ct.contains(this, i[e]))
                                    return true
                        }
                        ))
                    },
                    closest: function(selectors, t) {
                        for (var e, i = 0, n = this.length, s = [], o = vt.test(selectors) || "string" != typeof selectors ? ct(selectors, t || this.context) : 0; i < n; i++)
                            for (e = this[i]; e && e !== t; e = e.parentNode)
                                if (e.nodeType < 11 && (o ? o.index(e) > -1 : 1 === e.nodeType && ct.find.matchesSelector(e, selectors))) {
                                    s.push(e);
                                    break
                                }
                        return this.pushStack(s.length > 1 ? ct.unique(s) : s)
                    },
                    index: function(t) {
                        return t ? "string" == typeof t ? ct.inArray(this[0], ct(t)) : ct.inArray(t.jquery ? t[0] : t, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
                    },
                    add: function(selector, t) {
                        return this.pushStack(ct.unique(ct.merge(this.get(), ct(selector, t))))
                    },
                    addBack: function(selector) {
                        return this.add(null == selector ? this.prevObject : this.prevObject.filter(selector))
                    }
                }),
                ct.each({
                    parent: function(t) {
                        var e = t.parentNode;
                        return e && 11 !== e.nodeType ? e : null
                    },
                    parents: function(t) {
                        return ct.dir(t, "parentNode")
                    },
                    parentsUntil: function(t, e, i) {
                        return ct.dir(t, "parentNode", i)
                    },
                    next: function(t) {
                        return s(t, "nextSibling")
                    },
                    prev: function(t) {
                        return s(t, "previousSibling")
                    },
                    nextAll: function(t) {
                        return ct.dir(t, "nextSibling")
                    },
                    prevAll: function(t) {
                        return ct.dir(t, "previousSibling")
                    },
                    nextUntil: function(t, e, i) {
                        return ct.dir(t, "nextSibling", i)
                    },
                    prevUntil: function(t, e, i) {
                        return ct.dir(t, "previousSibling", i)
                    },
                    siblings: function(t) {
                        return ct.sibling((t.parentNode || {}).firstChild, t)
                    },
                    children: function(t) {
                        return ct.sibling(t.firstChild)
                    },
                    contents: function(t) {
                        return ct.nodeName(t, "iframe") ? t.contentDocument || t.contentWindow.document : ct.merge([], t.childNodes)
                    }
                }, (function(t, e) {
                    ct.fn[t] = function(i, selector) {
                        var n = ct.map(this, e, i);
                        return "Until" !== t.slice(-5) && (selector = i),
                        selector && "string" == typeof selector && (n = ct.filter(selector, n)),
                        this.length > 1 && (Ct[t] || (n = ct.unique(n)),
                        kt.test(t) && (n = n.reverse())),
                        this.pushStack(n)
                    }
                }
                ));
                var Dt = /\S+/g, Tt = {}, At;
                ct.Callbacks = function(t) {
                    t = "string" == typeof t ? Tt[t] || o(t) : ct.extend({}, t);
                    var e, i, n, s, a, l, list = [], h = !t.once && [], u = function(data) {
                        for (i = t.memory && data,
                        n = true,
                        a = l || 0,
                        l = 0,
                        s = list.length,
                        e = true; list && a < s; a++)
                            if (false === list[a].apply(data[0], data[1]) && t.stopOnFalse) {
                                i = false;
                                break
                            }
                        e = false,
                        list && (h ? h.length && u(h.shift()) : i ? list = [] : c.disable())
                    }, c = {
                        add: function() {
                            if (list) {
                                var n = list.length;
                                !function add(e) {
                                    ct.each(e, (function(e, i) {
                                        var type = ct.type(i);
                                        "function" === type ? t.unique && c.has(i) || list.push(i) : i && i.length && "string" !== type && add(i)
                                    }
                                    ))
                                }(arguments),
                                e ? s = list.length : i && (l = n,
                                u(i))
                            }
                            return this
                        },
                        remove: function() {
                            return list && ct.each(arguments, (function(t, i) {
                                for (var index; (index = ct.inArray(i, list, index)) > -1; )
                                    list.splice(index, 1),
                                    e && (index <= s && s--,
                                    index <= a && a--)
                            }
                            )),
                            this
                        },
                        has: function(t) {
                            return t ? ct.inArray(t, list) > -1 : !!(list && list.length)
                        },
                        empty: function() {
                            return list = [],
                            s = 0,
                            this
                        },
                        disable: function() {
                            return list = h = i = void 0,
                            this
                        },
                        disabled: function() {
                            return !list
                        },
                        lock: function() {
                            return h = void 0,
                            i || c.disable(),
                            this
                        },
                        locked: function() {
                            return !h
                        },
                        fireWith: function(t, i) {
                            return !list || n && !h || (i = [t, (i = i || []).slice ? i.slice() : i],
                            e ? h.push(i) : u(i)),
                            this
                        },
                        fire: function() {
                            return c.fireWith(this, arguments),
                            this
                        },
                        fired: function() {
                            return !!n
                        }
                    };
                    return c
                }
                ,
                ct.extend({
                    Deferred: function(t) {
                        var e = [["resolve", "done", ct.Callbacks("once memory"), "resolved"], ["reject", "fail", ct.Callbacks("once memory"), "rejected"], ["notify", "progress", ct.Callbacks("memory")]]
                          , state = "pending"
                          , i = {
                            state: function() {
                                return state
                            },
                            always: function() {
                                return n.done(arguments).fail(arguments),
                                this
                            },
                            then: function() {
                                var t = arguments;
                                return ct.Deferred((function(s) {
                                    ct.each(e, (function(e, o) {
                                        var a = ct.isFunction(t[e]) && t[e];
                                        n[o[1]]((function() {
                                            var t = a && a.apply(this, arguments);
                                            t && ct.isFunction(t.promise) ? t.promise().done(s.resolve).fail(s.reject).progress(s.notify) : s[o[0] + "With"](this === i ? s.promise() : this, a ? [t] : arguments)
                                        }
                                        ))
                                    }
                                    )),
                                    t = null
                                }
                                )).promise()
                            },
                            promise: function(t) {
                                return null != t ? ct.extend(t, i) : i
                            }
                        }
                          , n = {};
                        return i.pipe = i.then,
                        ct.each(e, (function(t, s) {
                            var list = s[2]
                              , o = s[3];
                            i[s[1]] = list.add,
                            o && list.add((function() {
                                state = o
                            }
                            ), e[1 ^ t][2].disable, e[2][2].lock),
                            n[s[0]] = function() {
                                return n[s[0] + "With"](this === n ? i : this, arguments),
                                this
                            }
                            ,
                            n[s[0] + "With"] = list.fireWith
                        }
                        )),
                        i.promise(n),
                        t && t.call(n, n),
                        n
                    },
                    when: function(t) {
                        var e = 0, i = tt.call(arguments), length = i.length, n = 1 !== length || t && ct.isFunction(t.promise) ? length : 0, s = 1 === n ? t : ct.Deferred(), o = function(t, e, i) {
                            return function(o) {
                                e[t] = this,
                                i[t] = arguments.length > 1 ? tt.call(arguments) : o,
                                i === a ? s.notifyWith(e, i) : --n || s.resolveWith(e, i)
                            }
                        }, a, l, h;
                        if (length > 1)
                            for (a = new Array(length),
                            l = new Array(length),
                            h = new Array(length); e < length; e++)
                                i[e] && ct.isFunction(i[e].promise) ? i[e].promise().done(o(e, h, i)).fail(s.reject).progress(o(e, l, a)) : --n;
                        return n || s.resolveWith(h, i),
                        s.promise()
                    }
                }),
                ct.fn.ready = function(t) {
                    return ct.ready.promise().done(t),
                    this
                }
                ,
                ct.extend({
                    isReady: false,
                    readyWait: 1,
                    holdReady: function(t) {
                        t ? ct.readyWait++ : ct.ready(true)
                    },
                    ready: function(t) {
                        if (!(true === t ? --ct.readyWait : ct.isReady)) {
                            if (!wt.body)
                                return setTimeout(ct.ready);
                            ct.isReady = true,
                            true !== t && --ct.readyWait > 0 || (At.resolveWith(wt, [ct]),
                            ct.fn.triggerHandler && (ct(wt).triggerHandler("ready"),
                            ct(wt).off("ready")))
                        }
                    }
                }),
                ct.ready.promise = function(e) {
                    if (!At)
                        if (At = ct.Deferred(),
                        "complete" === wt.readyState)
                            setTimeout(ct.ready);
                        else if (wt.addEventListener)
                            wt.addEventListener("DOMContentLoaded", l, false),
                            t.addEventListener("load", l, false);
                        else {
                            wt.attachEvent("onreadystatechange", l),
                            t.attachEvent("onload", l);
                            var i = false;
                            try {
                                i = null == t.frameElement && wt.documentElement
                            } catch (t) {}
                            i && i.doScroll && !function t() {
                                if (!ct.isReady) {
                                    try {
                                        i.doScroll("left")
                                    } catch (e) {
                                        return setTimeout(t, 50)
                                    }
                                    a(),
                                    ct.ready()
                                }
                            }()
                        }
                    return At.promise(e)
                }
                ;
                var St = "undefined", Pt;
                for (Pt in ct(ht))
                    break;
                ht.ownLast = "0" !== Pt,
                ht.inlineBlockNeedsLayout = false,
                ct((function() {
                    var t, e, i, container;
                    (i = wt.getElementsByTagName("body")[0]) && i.style && (e = wt.createElement("div"),
                    (container = wt.createElement("div")).style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px",
                    i.appendChild(container).appendChild(e),
                    typeof e.style.zoom !== St && (e.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1",
                    ht.inlineBlockNeedsLayout = t = 3 === e.offsetWidth,
                    t && (i.style.zoom = 1)),
                    i.removeChild(container))
                }
                )),
                function() {
                    var t = wt.createElement("div");
                    if (null == ht.deleteExpando) {
                        ht.deleteExpando = true;
                        try {
                            delete t.test
                        } catch (t) {
                            ht.deleteExpando = false
                        }
                    }
                    t = null
                }(),
                ct.acceptData = function(t) {
                    var e = ct.noData[(t.nodeName + " ").toLowerCase()]
                      , i = +t.nodeType || 1;
                    return (1 === i || 9 === i) && (!e || true !== e && t.getAttribute("classid") === e)
                }
                ;
                var Ft = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/
                  , Nt = /([A-Z])/g;
                ct.extend({
                    cache: {},
                    noData: {
                        "applet ": true,
                        "embed ": true,
                        "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
                    },
                    hasData: function(t) {
                        return !!(t = t.nodeType ? ct.cache[t[ct.expando]] : t[ct.expando]) && !u(t)
                    },
                    data: function(t, e, data) {
                        return c(t, e, data)
                    },
                    removeData: function(t, e) {
                        return p(t, e)
                    },
                    _data: function(t, e, data) {
                        return c(t, e, data, true)
                    },
                    _removeData: function(t, e) {
                        return p(t, e, true)
                    }
                }),
                ct.fn.extend({
                    data: function(t, e) {
                        var i, n, data, s = this[0], o = s && s.attributes;
                        if (void 0 === t) {
                            if (this.length && (data = ct.data(s),
                            1 === s.nodeType && !ct._data(s, "parsedAttrs"))) {
                                for (i = o.length; i--; )
                                    o[i] && 0 === (n = o[i].name).indexOf("data-") && h(s, n = ct.camelCase(n.slice(5)), data[n]);
                                ct._data(s, "parsedAttrs", true)
                            }
                            return data
                        }
                        return "object" == typeof t ? this.each((function() {
                            ct.data(this, t)
                        }
                        )) : arguments.length > 1 ? this.each((function() {
                            ct.data(this, t, e)
                        }
                        )) : s ? h(s, t, ct.data(s, t)) : void 0
                    },
                    removeData: function(t) {
                        return this.each((function() {
                            ct.removeData(this, t)
                        }
                        ))
                    }
                }),
                ct.extend({
                    queue: function(t, type, data) {
                        var e;
                        if (t)
                            return type = (type || "fx") + "queue",
                            e = ct._data(t, type),
                            data && (!e || ct.isArray(data) ? e = ct._data(t, type, ct.makeArray(data)) : e.push(data)),
                            e || []
                    },
                    dequeue: function(t, type) {
                        type = type || "fx";
                        var e = ct.queue(t, type)
                          , i = e.length
                          , n = e.shift()
                          , s = ct._queueHooks(t, type)
                          , o = function() {
                            ct.dequeue(t, type)
                        };
                        "inprogress" === n && (n = e.shift(),
                        i--),
                        n && ("fx" === type && e.unshift("inprogress"),
                        delete s.stop,
                        n.call(t, o, s)),
                        !i && s && s.empty.fire()
                    },
                    _queueHooks: function(t, type) {
                        var e = type + "queueHooks";
                        return ct._data(t, e) || ct._data(t, e, {
                            empty: ct.Callbacks("once memory").add((function() {
                                ct._removeData(t, type + "queue"),
                                ct._removeData(t, e)
                            }
                            ))
                        })
                    }
                }),
                ct.fn.extend({
                    queue: function(type, data) {
                        var setter = 2;
                        return "string" != typeof type && (data = type,
                        type = "fx",
                        setter--),
                        arguments.length < setter ? ct.queue(this[0], type) : void 0 === data ? this : this.each((function() {
                            var t = ct.queue(this, type, data);
                            ct._queueHooks(this, type),
                            "fx" === type && "inprogress" !== t[0] && ct.dequeue(this, type)
                        }
                        ))
                    },
                    dequeue: function(type) {
                        return this.each((function() {
                            ct.dequeue(this, type)
                        }
                        ))
                    },
                    clearQueue: function(type) {
                        return this.queue(type || "fx", [])
                    },
                    promise: function(type, t) {
                        var e, i = 1, n = ct.Deferred(), s = this, o = this.length, a = function() {
                            --i || n.resolveWith(s, [s])
                        };
                        for ("string" != typeof type && (t = type,
                        type = void 0),
                        type = type || "fx"; o--; )
                            (e = ct._data(s[o], type + "queueHooks")) && e.empty && (i++,
                            e.empty.add(a));
                        return a(),
                        n.promise(t)
                    }
                });
                var Mt = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source
                  , zt = ["Top", "Right", "Bottom", "Left"]
                  , Ht = function(t, el) {
                    return t = el || t,
                    "none" === ct.css(t, "display") || !ct.contains(t.ownerDocument, t)
                }
                  , Ot = ct.access = function(t, e, i, n, s, o, a) {
                    var l = 0
                      , length = t.length
                      , h = null == i;
                    if ("object" === ct.type(i))
                        for (l in s = true,
                        i)
                            ct.access(t, e, l, i[l], true, o, a);
                    else if (void 0 !== n && (s = true,
                    ct.isFunction(n) || (a = true),
                    h && (a ? (e.call(t, n),
                    e = null) : (h = e,
                    e = function(t, e, i) {
                        return h.call(ct(t), i)
                    }
                    )),
                    e))
                        for (; l < length; l++)
                            e(t[l], i, a ? n : n.call(t[l], l, e(t[l], i)));
                    return s ? t : h ? e.call(t) : length ? e(t[0], i) : o
                }
                  , Lt = /^(?:checkbox|radio)$/i;
                !function() {
                    var input = wt.createElement("input")
                      , t = wt.createElement("div")
                      , e = wt.createDocumentFragment();
                    if (t.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",
                    ht.leadingWhitespace = 3 === t.firstChild.nodeType,
                    ht.tbody = !t.getElementsByTagName("tbody").length,
                    ht.htmlSerialize = !!t.getElementsByTagName("link").length,
                    ht.html5Clone = "<:nav></:nav>" !== wt.createElement("nav").cloneNode(true).outerHTML,
                    input.type = "checkbox",
                    input.checked = true,
                    e.appendChild(input),
                    ht.appendChecked = input.checked,
                    t.innerHTML = "<textarea>x</textarea>",
                    ht.noCloneChecked = !!t.cloneNode(true).lastChild.defaultValue,
                    e.appendChild(t),
                    t.innerHTML = "<input type='radio' checked='checked' name='t'/>",
                    ht.checkClone = t.cloneNode(true).cloneNode(true).lastChild.checked,
                    ht.noCloneEvent = true,
                    t.attachEvent && (t.attachEvent("onclick", (function() {
                        ht.noCloneEvent = false
                    }
                    )),
                    t.cloneNode(true).click()),
                    null == ht.deleteExpando) {
                        ht.deleteExpando = true;
                        try {
                            delete t.test
                        } catch (t) {
                            ht.deleteExpando = false
                        }
                    }
                }(),
                function() {
                    var e, i, n = wt.createElement("div");
                    for (e in {
                        submit: true,
                        change: true,
                        focusin: true
                    })
                        i = "on" + e,
                        (ht[e + "Bubbles"] = i in t) || (n.setAttribute(i, "t"),
                        ht[e + "Bubbles"] = false === n.attributes[i].expando);
                    n = null
                }();
                var $t = /^(?:input|select|textarea)$/i
                  , Rt = /^key/
                  , jt = /^(?:mouse|pointer|contextmenu)|click/
                  , Wt = /^(?:focusinfocus|focusoutblur)$/
                  , qt = /^([^.]*)(?:\.(.+)|)$/;
                ct.event = {
                    global: {},
                    add: function(t, types, e, data, selector) {
                        var i, events, n, s, o, a, l, handlers, type, h, u, c = ct._data(t);
                        if (c) {
                            for (e.handler && (e = (s = e).handler,
                            selector = s.selector),
                            e.guid || (e.guid = ct.guid++),
                            (events = c.events) || (events = c.events = {}),
                            (a = c.handle) || (a = c.handle = function(t) {
                                return typeof ct === St || t && ct.event.triggered === t.type ? void 0 : ct.event.dispatch.apply(a.elem, arguments)
                            }
                            ,
                            a.elem = t),
                            n = (types = (types || "").match(Dt) || [""]).length; n--; )
                                type = u = (i = qt.exec(types[n]) || [])[1],
                                h = (i[2] || "").split(".").sort(),
                                type && (o = ct.event.special[type] || {},
                                type = (selector ? o.delegateType : o.bindType) || type,
                                o = ct.event.special[type] || {},
                                l = ct.extend({
                                    type: type,
                                    origType: u,
                                    data: data,
                                    handler: e,
                                    guid: e.guid,
                                    selector: selector,
                                    needsContext: selector && ct.expr.match.needsContext.test(selector),
                                    namespace: h.join(".")
                                }, s),
                                (handlers = events[type]) || ((handlers = events[type] = []).delegateCount = 0,
                                o.setup && false !== o.setup.call(t, data, h, a) || (t.addEventListener ? t.addEventListener(type, a, false) : t.attachEvent && t.attachEvent("on" + type, a))),
                                o.add && (o.add.call(t, l),
                                l.handler.guid || (l.handler.guid = e.guid)),
                                selector ? handlers.splice(handlers.delegateCount++, 0, l) : handlers.push(l),
                                ct.event.global[type] = true);
                            t = null
                        }
                    },
                    remove: function(t, types, e, selector, i) {
                        var n, s, o, a, l, events, h, handlers, type, u, c, p = ct.hasData(t) && ct._data(t);
                        if (p && (events = p.events)) {
                            for (l = (types = (types || "").match(Dt) || [""]).length; l--; )
                                if (type = c = (o = qt.exec(types[l]) || [])[1],
                                u = (o[2] || "").split(".").sort(),
                                type) {
                                    for (h = ct.event.special[type] || {},
                                    handlers = events[type = (selector ? h.delegateType : h.bindType) || type] || [],
                                    o = o[2] && new RegExp("(^|\\.)" + u.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                                    a = n = handlers.length; n--; )
                                        s = handlers[n],
                                        !i && c !== s.origType || e && e.guid !== s.guid || o && !o.test(s.namespace) || selector && selector !== s.selector && ("**" !== selector || !s.selector) || (handlers.splice(n, 1),
                                        s.selector && handlers.delegateCount--,
                                        h.remove && h.remove.call(t, s));
                                    a && !handlers.length && (h.teardown && false !== h.teardown.call(t, u, p.handle) || ct.removeEvent(t, type, p.handle),
                                    delete events[type])
                                } else
                                    for (type in events)
                                        ct.event.remove(t, type + types[l], e, selector, true);
                            ct.isEmptyObject(events) && (delete p.handle,
                            ct._removeData(t, "events"))
                        }
                    },
                    trigger: function(e, data, i, n) {
                        var s, o, a, l, h, u, c, p = [i || wt], type = lt.call(e, "type") ? e.type : e, f = lt.call(e, "namespace") ? e.namespace.split(".") : [];
                        if (a = u = i = i || wt,
                        3 !== i.nodeType && 8 !== i.nodeType && !Wt.test(type + ct.event.triggered) && (type.indexOf(".") >= 0 && (f = type.split("."),
                        type = f.shift(),
                        f.sort()),
                        o = type.indexOf(":") < 0 && "on" + type,
                        (e = e[ct.expando] ? e : new ct.Event(type,"object" == typeof e && e)).isTrigger = n ? 2 : 3,
                        e.namespace = f.join("."),
                        e.namespace_re = e.namespace ? new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)") : null,
                        e.result = void 0,
                        e.target || (e.target = i),
                        data = null == data ? [e] : ct.makeArray(data, [e]),
                        h = ct.event.special[type] || {},
                        n || !h.trigger || false !== h.trigger.apply(i, data))) {
                            if (!n && !h.noBubble && !ct.isWindow(i)) {
                                for (l = h.delegateType || type,
                                Wt.test(l + type) || (a = a.parentNode); a; a = a.parentNode)
                                    p.push(a),
                                    u = a;
                                u === (i.ownerDocument || wt) && p.push(u.defaultView || u.parentWindow || t)
                            }
                            for (c = 0; (a = p[c++]) && !e.isPropagationStopped(); )
                                e.type = c > 1 ? l : h.bindType || type,
                                (s = (ct._data(a, "events") || {})[e.type] && ct._data(a, "handle")) && s.apply(a, data),
                                (s = o && a[o]) && s.apply && ct.acceptData(a) && (e.result = s.apply(a, data),
                                false === e.result && e.preventDefault());
                            if (e.type = type,
                            !n && !e.isDefaultPrevented() && (!h._default || false === h._default.apply(p.pop(), data)) && ct.acceptData(i) && o && i[type] && !ct.isWindow(i)) {
                                (u = i[o]) && (i[o] = null),
                                ct.event.triggered = type;
                                try {
                                    i[type]()
                                } catch (t) {}
                                ct.event.triggered = void 0,
                                u && (i[o] = u)
                            }
                            return e.result
                        }
                    },
                    dispatch: function(t) {
                        t = ct.event.fix(t);
                        var e, i, n, s, o, a = [], l = tt.call(arguments), handlers = (ct._data(this, "events") || {})[t.type] || [], h = ct.event.special[t.type] || {};
                        if (l[0] = t,
                        t.delegateTarget = this,
                        !h.preDispatch || false !== h.preDispatch.call(this, t)) {
                            for (a = ct.event.handlers.call(this, t, handlers),
                            e = 0; (s = a[e++]) && !t.isPropagationStopped(); )
                                for (t.currentTarget = s.elem,
                                o = 0; (n = s.handlers[o++]) && !t.isImmediatePropagationStopped(); )
                                    t.namespace_re && !t.namespace_re.test(n.namespace) || (t.handleObj = n,
                                    t.data = n.data,
                                    void 0 !== (i = ((ct.event.special[n.origType] || {}).handle || n.handler).apply(s.elem, l)) && false === (t.result = i) && (t.preventDefault(),
                                    t.stopPropagation()));
                            return h.postDispatch && h.postDispatch.call(this, t),
                            t.result
                        }
                    },
                    handlers: function(t, handlers) {
                        var e, i, n, s, o = [], a = handlers.delegateCount, l = t.target;
                        if (a && l.nodeType && (!t.button || "click" !== t.type))
                            for (; l != this; l = l.parentNode || this)
                                if (1 === l.nodeType && (true !== l.disabled || "click" !== t.type)) {
                                    for (n = [],
                                    s = 0; s < a; s++)
                                        void 0 === n[e = (i = handlers[s]).selector + " "] && (n[e] = i.needsContext ? ct(e, this).index(l) >= 0 : ct.find(e, this, null, [l]).length),
                                        n[e] && n.push(i);
                                    n.length && o.push({
                                        elem: l,
                                        handlers: n
                                    })
                                }
                        return a < handlers.length && o.push({
                            elem: this,
                            handlers: handlers.slice(a)
                        }),
                        o
                    },
                    fix: function(t) {
                        if (t[ct.expando])
                            return t;
                        var e, i, copy, type = t.type, n = t, s = this.fixHooks[type];
                        for (s || (this.fixHooks[type] = s = jt.test(type) ? this.mouseHooks : Rt.test(type) ? this.keyHooks : {}),
                        copy = s.props ? this.props.concat(s.props) : this.props,
                        t = new ct.Event(n),
                        e = copy.length; e--; )
                            t[i = copy[e]] = n[i];
                        return t.target || (t.target = n.srcElement || wt),
                        3 === t.target.nodeType && (t.target = t.target.parentNode),
                        t.metaKey = !!t.metaKey,
                        s.filter ? s.filter(t, n) : t
                    },
                    props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
                    fixHooks: {},
                    keyHooks: {
                        props: "char charCode key keyCode".split(" "),
                        filter: function(t, e) {
                            return null == t.which && (t.which = null != e.charCode ? e.charCode : e.keyCode),
                            t
                        }
                    },
                    mouseHooks: {
                        props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
                        filter: function(t, e) {
                            var i, n, s, button = e.button, o = e.fromElement;
                            return null == t.pageX && null != e.clientX && (s = (n = t.target.ownerDocument || wt).documentElement,
                            i = n.body,
                            t.pageX = e.clientX + (s && s.scrollLeft || i && i.scrollLeft || 0) - (s && s.clientLeft || i && i.clientLeft || 0),
                            t.pageY = e.clientY + (s && s.scrollTop || i && i.scrollTop || 0) - (s && s.clientTop || i && i.clientTop || 0)),
                            !t.relatedTarget && o && (t.relatedTarget = o === t.target ? e.toElement : o),
                            t.which || void 0 === button || (t.which = 1 & button ? 1 : 2 & button ? 3 : 4 & button ? 2 : 0),
                            t
                        }
                    },
                    special: {
                        load: {
                            noBubble: true
                        },
                        focus: {
                            trigger: function() {
                                if (this !== g() && this.focus)
                                    try {
                                        return this.focus(),
                                        false
                                    } catch (t) {}
                            },
                            delegateType: "focusin"
                        },
                        blur: {
                            trigger: function() {
                                if (this === g() && this.blur)
                                    return this.blur(),
                                    false
                            },
                            delegateType: "focusout"
                        },
                        click: {
                            trigger: function() {
                                if (ct.nodeName(this, "input") && "checkbox" === this.type && this.click)
                                    return this.click(),
                                    false
                            },
                            _default: function(t) {
                                return ct.nodeName(t.target, "a")
                            }
                        },
                        beforeunload: {
                            postDispatch: function(t) {
                                void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result)
                            }
                        }
                    },
                    simulate: function(type, t, e, i) {
                        var n = ct.extend(new ct.Event, e, {
                            type: type,
                            isSimulated: true,
                            originalEvent: {}
                        });
                        i ? ct.event.trigger(n, null, t) : ct.event.dispatch.call(t, n),
                        n.isDefaultPrevented() && e.preventDefault()
                    }
                },
                ct.removeEvent = wt.removeEventListener ? function(t, type, e) {
                    t.removeEventListener && t.removeEventListener(type, e, false)
                }
                : function(t, type, e) {
                    var i = "on" + type;
                    t.detachEvent && (typeof t[i] === St && (t[i] = null),
                    t.detachEvent(i, e))
                }
                ,
                ct.Event = function(t, props) {
                    if (!(this instanceof ct.Event))
                        return new ct.Event(t,props);
                    t && t.type ? (this.originalEvent = t,
                    this.type = t.type,
                    this.isDefaultPrevented = t.defaultPrevented || void 0 === t.defaultPrevented && false === t.returnValue ? f : m) : this.type = t,
                    props && ct.extend(this, props),
                    this.timeStamp = t && t.timeStamp || ct.now(),
                    this[ct.expando] = true
                }
                ,
                ct.Event.prototype = {
                    isDefaultPrevented: m,
                    isPropagationStopped: m,
                    isImmediatePropagationStopped: m,
                    preventDefault: function() {
                        var t = this.originalEvent;
                        this.isDefaultPrevented = f,
                        t && (t.preventDefault ? t.preventDefault() : t.returnValue = false)
                    },
                    stopPropagation: function() {
                        var t = this.originalEvent;
                        this.isPropagationStopped = f,
                        t && (t.stopPropagation && t.stopPropagation(),
                        t.cancelBubble = true)
                    },
                    stopImmediatePropagation: function() {
                        var t = this.originalEvent;
                        this.isImmediatePropagationStopped = f,
                        t && t.stopImmediatePropagation && t.stopImmediatePropagation(),
                        this.stopPropagation()
                    }
                },
                ct.each({
                    mouseenter: "mouseover",
                    mouseleave: "mouseout",
                    pointerenter: "pointerover",
                    pointerleave: "pointerout"
                }, (function(t, e) {
                    ct.event.special[t] = {
                        delegateType: e,
                        bindType: e,
                        handle: function(t) {
                            var i, n = this, s = t.relatedTarget, o = t.handleObj;
                            return s && (s === n || ct.contains(n, s)) || (t.type = o.origType,
                            i = o.handler.apply(this, arguments),
                            t.type = e),
                            i
                        }
                    }
                }
                )),
                ht.submitBubbles || (ct.event.special.submit = {
                    setup: function() {
                        if (ct.nodeName(this, "form"))
                            return false;
                        ct.event.add(this, "click._submit keypress._submit", (function(t) {
                            var e = t.target
                              , form = ct.nodeName(e, "input") || ct.nodeName(e, "button") ? e.form : void 0;
                            form && !ct._data(form, "submitBubbles") && (ct.event.add(form, "submit._submit", (function(t) {
                                t._submit_bubble = true
                            }
                            )),
                            ct._data(form, "submitBubbles", true))
                        }
                        ))
                    },
                    postDispatch: function(t) {
                        t._submit_bubble && (delete t._submit_bubble,
                        this.parentNode && !t.isTrigger && ct.event.simulate("submit", this.parentNode, t, true))
                    },
                    teardown: function() {
                        if (ct.nodeName(this, "form"))
                            return false;
                        ct.event.remove(this, "._submit")
                    }
                }),
                ht.changeBubbles || (ct.event.special.change = {
                    setup: function() {
                        if ($t.test(this.nodeName))
                            return "checkbox" !== this.type && "radio" !== this.type || (ct.event.add(this, "propertychange._change", (function(t) {
                                "checked" === t.originalEvent.propertyName && (this._just_changed = true)
                            }
                            )),
                            ct.event.add(this, "click._change", (function(t) {
                                this._just_changed && !t.isTrigger && (this._just_changed = false),
                                ct.event.simulate("change", this, t, true)
                            }
                            ))),
                            false;
                        ct.event.add(this, "beforeactivate._change", (function(t) {
                            var e = t.target;
                            $t.test(e.nodeName) && !ct._data(e, "changeBubbles") && (ct.event.add(e, "change._change", (function(t) {
                                !this.parentNode || t.isSimulated || t.isTrigger || ct.event.simulate("change", this.parentNode, t, true)
                            }
                            )),
                            ct._data(e, "changeBubbles", true))
                        }
                        ))
                    },
                    handle: function(t) {
                        var e = t.target;
                        if (this !== e || t.isSimulated || t.isTrigger || "radio" !== e.type && "checkbox" !== e.type)
                            return t.handleObj.handler.apply(this, arguments)
                    },
                    teardown: function() {
                        return ct.event.remove(this, "._change"),
                        !$t.test(this.nodeName)
                    }
                }),
                ht.focusinBubbles || ct.each({
                    focus: "focusin",
                    blur: "focusout"
                }, (function(t, e) {
                    var i = function(t) {
                        ct.event.simulate(e, t.target, ct.event.fix(t), true)
                    };
                    ct.event.special[e] = {
                        setup: function() {
                            var n = this.ownerDocument || this
                              , s = ct._data(n, e);
                            s || n.addEventListener(t, i, true),
                            ct._data(n, e, (s || 0) + 1)
                        },
                        teardown: function() {
                            var n = this.ownerDocument || this
                              , s = ct._data(n, e) - 1;
                            s ? ct._data(n, e, s) : (n.removeEventListener(t, i, true),
                            ct._removeData(n, e))
                        }
                    }
                }
                )),
                ct.fn.extend({
                    on: function(types, selector, data, t, e) {
                        var type, i;
                        if ("object" == typeof types) {
                            for (type in "string" != typeof selector && (data = data || selector,
                            selector = void 0),
                            types)
                                this.on(type, selector, data, types[type], e);
                            return this
                        }
                        if (null == data && null == t ? (t = selector,
                        data = selector = void 0) : null == t && ("string" == typeof selector ? (t = data,
                        data = void 0) : (t = data,
                        data = selector,
                        selector = void 0)),
                        false === t)
                            t = m;
                        else if (!t)
                            return this;
                        return 1 === e && (i = t,
                        t = function(t) {
                            return ct().off(t),
                            i.apply(this, arguments)
                        }
                        ,
                        t.guid = i.guid || (i.guid = ct.guid++)),
                        this.each((function() {
                            ct.event.add(this, types, t, data, selector)
                        }
                        ))
                    },
                    one: function(types, selector, data, t) {
                        return this.on(types, selector, data, t, 1)
                    },
                    off: function(types, selector, t) {
                        var e, type;
                        if (types && types.preventDefault && types.handleObj)
                            return e = types.handleObj,
                            ct(types.delegateTarget).off(e.namespace ? e.origType + "." + e.namespace : e.origType, e.selector, e.handler),
                            this;
                        if ("object" == typeof types) {
                            for (type in types)
                                this.off(type, selector, types[type]);
                            return this
                        }
                        return false !== selector && "function" != typeof selector || (t = selector,
                        selector = void 0),
                        false === t && (t = m),
                        this.each((function() {
                            ct.event.remove(this, types, t, selector)
                        }
                        ))
                    },
                    trigger: function(type, data) {
                        return this.each((function() {
                            ct.event.trigger(type, data, this)
                        }
                        ))
                    },
                    triggerHandler: function(type, data) {
                        var t = this[0];
                        if (t)
                            return ct.event.trigger(type, data, t, true)
                    }
                });
                var Bt = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video", Ut = / jQuery\d+="(?:null|\d+)"/g, Yt = new RegExp("<(?:" + Bt + ")[\\s/>]","i"), Qt = /^\s+/, Vt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, Kt = /<([\w:]+)/, Xt = /<tbody/i, Gt = /<|&#?\w+;/, Jt = /<(?:script|style|link)/i, Zt = /checked\s*(?:[^=]|=\s*.checked.)/i, te = /^$|\/(?:java|ecma)script/i, ee = /^true\/(.*)/, ie = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, ne = {
                    option: [1, "<select multiple='multiple'>", "</select>"],
                    legend: [1, "<fieldset>", "</fieldset>"],
                    area: [1, "<map>", "</map>"],
                    param: [1, "<object>", "</object>"],
                    thead: [1, "<table>", "</table>"],
                    tr: [2, "<table><tbody>", "</tbody></table>"],
                    col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
                    td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                    _default: ht.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
                }, se, oe = v(wt).appendChild(wt.createElement("div"));
                ne.optgroup = ne.option,
                ne.tbody = ne.tfoot = ne.colgroup = ne.caption = ne.thead,
                ne.th = ne.td,
                ct.extend({
                    clone: function(t, e, i) {
                        var n, s, clone, o, a, l = ct.contains(t.ownerDocument, t);
                        if (ht.html5Clone || ct.isXMLDoc(t) || !Yt.test("<" + t.nodeName + ">") ? clone = t.cloneNode(true) : (oe.innerHTML = t.outerHTML,
                        oe.removeChild(clone = oe.firstChild)),
                        !(ht.noCloneEvent && ht.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || ct.isXMLDoc(t)))
                            for (n = b(clone),
                            a = b(t),
                            o = 0; null != (s = a[o]); ++o)
                                n[o] && T(s, n[o]);
                        if (e)
                            if (i)
                                for (a = a || b(t),
                                n = n || b(clone),
                                o = 0; null != (s = a[o]); o++)
                                    C(s, n[o]);
                            else
                                C(t, clone);
                        return (n = b(clone, "script")).length > 0 && k(n, !l && b(t, "script")),
                        n = a = s = null,
                        clone
                    },
                    buildFragment: function(t, e, i, selection) {
                        for (var n, s, o, a, l, h, u, c = t.length, p = v(e), f = [], m = 0; m < c; m++)
                            if ((s = t[m]) || 0 === s)
                                if ("object" === ct.type(s))
                                    ct.merge(f, s.nodeType ? [s] : s);
                                else if (Gt.test(s)) {
                                    for (a = a || p.appendChild(e.createElement("div")),
                                    l = (Kt.exec(s) || ["", ""])[1].toLowerCase(),
                                    u = ne[l] || ne._default,
                                    a.innerHTML = u[1] + s.replace(Vt, "<$1></$2>") + u[2],
                                    n = u[0]; n--; )
                                        a = a.lastChild;
                                    if (!ht.leadingWhitespace && Qt.test(s) && f.push(e.createTextNode(Qt.exec(s)[0])),
                                    !ht.tbody)
                                        for (n = (s = "table" !== l || Xt.test(s) ? "<table>" !== u[1] || Xt.test(s) ? 0 : a : a.firstChild) && s.childNodes.length; n--; )
                                            ct.nodeName(h = s.childNodes[n], "tbody") && !h.childNodes.length && s.removeChild(h);
                                    for (ct.merge(f, a.childNodes),
                                    a.textContent = ""; a.firstChild; )
                                        a.removeChild(a.firstChild);
                                    a = p.lastChild
                                } else
                                    f.push(e.createTextNode(s));
                        for (a && p.removeChild(a),
                        ht.appendChecked || ct.grep(b(f, "input"), y),
                        m = 0; s = f[m++]; )
                            if ((!selection || -1 === ct.inArray(s, selection)) && (o = ct.contains(s.ownerDocument, s),
                            a = b(p.appendChild(s), "script"),
                            o && k(a),
                            i))
                                for (n = 0; s = a[n++]; )
                                    te.test(s.type || "") && i.push(s);
                        return a = null,
                        p
                    },
                    cleanData: function(t, e) {
                        for (var i, type, id, data, n = 0, s = ct.expando, cache = ct.cache, o = ht.deleteExpando, a = ct.event.special; null != (i = t[n]); n++)
                            if ((e || ct.acceptData(i)) && (data = (id = i[s]) && cache[id])) {
                                if (data.events)
                                    for (type in data.events)
                                        a[type] ? ct.event.remove(i, type) : ct.removeEvent(i, type, data.handle);
                                cache[id] && (delete cache[id],
                                o ? delete i[s] : typeof i.removeAttribute !== St ? i.removeAttribute(s) : i[s] = null,
                                Z.push(id))
                            }
                    }
                }),
                ct.fn.extend({
                    text: function(t) {
                        return Ot(this, (function(t) {
                            return void 0 === t ? ct.text(this) : this.empty().append((this[0] && this[0].ownerDocument || wt).createTextNode(t))
                        }
                        ), null, t, arguments.length)
                    },
                    append: function() {
                        return this.domManip(arguments, (function(t) {
                            var e;
                            1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || _(this, t).appendChild(t)
                        }
                        ))
                    },
                    prepend: function() {
                        return this.domManip(arguments, (function(t) {
                            if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                                var e = _(this, t);
                                e.insertBefore(t, e.firstChild)
                            }
                        }
                        ))
                    },
                    before: function() {
                        return this.domManip(arguments, (function(t) {
                            this.parentNode && this.parentNode.insertBefore(t, this)
                        }
                        ))
                    },
                    after: function() {
                        return this.domManip(arguments, (function(t) {
                            this.parentNode && this.parentNode.insertBefore(t, this.nextSibling)
                        }
                        ))
                    },
                    remove: function(selector, t) {
                        for (var e, i = selector ? ct.filter(selector, this) : this, n = 0; null != (e = i[n]); n++)
                            t || 1 !== e.nodeType || ct.cleanData(b(e)),
                            e.parentNode && (t && ct.contains(e.ownerDocument, e) && k(b(e, "script")),
                            e.parentNode.removeChild(e));
                        return this
                    },
                    empty: function() {
                        for (var t, e = 0; null != (t = this[e]); e++) {
                            for (1 === t.nodeType && ct.cleanData(b(t, false)); t.firstChild; )
                                t.removeChild(t.firstChild);
                            t.options && ct.nodeName(t, "select") && (t.options.length = 0)
                        }
                        return this
                    },
                    clone: function(t, e) {
                        return t = null != t && t,
                        e = null == e ? t : e,
                        this.map((function() {
                            return ct.clone(this, t, e)
                        }
                        ))
                    },
                    html: function(t) {
                        return Ot(this, (function(t) {
                            var e = this[0] || {}
                              , i = 0
                              , n = this.length;
                            if (void 0 === t)
                                return 1 === e.nodeType ? e.innerHTML.replace(Ut, "") : void 0;
                            if ("string" == typeof t && !Jt.test(t) && (ht.htmlSerialize || !Yt.test(t)) && (ht.leadingWhitespace || !Qt.test(t)) && !ne[(Kt.exec(t) || ["", ""])[1].toLowerCase()]) {
                                t = t.replace(Vt, "<$1></$2>");
                                try {
                                    for (; i < n; i++)
                                        1 === (e = this[i] || {}).nodeType && (ct.cleanData(b(e, false)),
                                        e.innerHTML = t);
                                    e = 0
                                } catch (t) {}
                            }
                            e && this.empty().append(t)
                        }
                        ), null, t, arguments.length)
                    },
                    replaceWith: function() {
                        var t = arguments[0];
                        return this.domManip(arguments, (function(e) {
                            t = this.parentNode,
                            ct.cleanData(b(this)),
                            t && t.replaceChild(e, this)
                        }
                        )),
                        t && (t.length || t.nodeType) ? this : this.remove()
                    },
                    detach: function(selector) {
                        return this.remove(selector, true)
                    },
                    domManip: function(t, e) {
                        t = nt.apply([], t);
                        var i, n, s, o, a, l, h = 0, u = this.length, c = this, p = u - 1, f = t[0], m = ct.isFunction(f);
                        if (m || u > 1 && "string" == typeof f && !ht.checkClone && Zt.test(f))
                            return this.each((function(index) {
                                var i = c.eq(index);
                                m && (t[0] = f.call(this, index, i.html())),
                                i.domManip(t, e)
                            }
                            ));
                        if (u && (i = (l = ct.buildFragment(t, this[0].ownerDocument, false, this)).firstChild,
                        1 === l.childNodes.length && (l = i),
                        i)) {
                            for (s = (o = ct.map(b(l, "script"), w)).length; h < u; h++)
                                n = l,
                                h !== p && (n = ct.clone(n, true, true),
                                s && ct.merge(o, b(n, "script"))),
                                e.call(this[h], n, h);
                            if (s)
                                for (a = o[o.length - 1].ownerDocument,
                                ct.map(o, x),
                                h = 0; h < s; h++)
                                    n = o[h],
                                    te.test(n.type || "") && !ct._data(n, "globalEval") && ct.contains(a, n) && (n.src ? ct._evalUrl && ct._evalUrl(n.src) : ct.globalEval((n.text || n.textContent || n.innerHTML || "").replace(ie, "")));
                            l = i = null
                        }
                        return this
                    }
                }),
                ct.each({
                    appendTo: "append",
                    prependTo: "prepend",
                    insertBefore: "before",
                    insertAfter: "after",
                    replaceAll: "replaceWith"
                }, (function(t, e) {
                    ct.fn[t] = function(selector) {
                        for (var t, i = 0, n = [], s = ct(selector), o = s.length - 1; i <= o; i++)
                            t = i === o ? this : this.clone(true),
                            ct(s[i])[e](t),
                            st.apply(n, t.get());
                        return this.pushStack(n)
                    }
                }
                ));
                var re, ae = {}, le;
                void (ht.shrinkWrapBlocks = function() {
                    return null != le ? le : (le = false,
                    (e = wt.getElementsByTagName("body")[0]) && e.style ? (t = wt.createElement("div"),
                    (container = wt.createElement("div")).style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px",
                    e.appendChild(container).appendChild(t),
                    typeof t.style.zoom !== St && (t.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1",
                    t.appendChild(wt.createElement("div")).style.width = "5px",
                    le = 3 !== t.offsetWidth),
                    e.removeChild(container),
                    le) : void 0);
                    var t, e, container
                }
                );
                var ue = /^margin/, ce = new RegExp("^(" + Mt + ")(?!px)[a-z%]+$","i"), pe, fe, ge = /^(top|right|bottom|left)$/;
                t.getComputedStyle ? (pe = function(t) {
                    return t.ownerDocument.defaultView.getComputedStyle(t, null)
                }
                ,
                fe = function(t, e, i) {
                    var n, s, o, a, style = t.style;
                    return a = (i = i || pe(t)) ? i.getPropertyValue(e) || i[e] : void 0,
                    i && ("" !== a || ct.contains(t.ownerDocument, t) || (a = ct.style(t, e)),
                    ce.test(a) && ue.test(e) && (n = style.width,
                    s = style.minWidth,
                    o = style.maxWidth,
                    style.minWidth = style.maxWidth = style.width = a,
                    a = i.width,
                    style.width = n,
                    style.minWidth = s,
                    style.maxWidth = o)),
                    void 0 === a ? a : a + ""
                }
                ) : wt.documentElement.currentStyle && (pe = function(t) {
                    return t.currentStyle
                }
                ,
                fe = function(t, e, i) {
                    var n, s, o, a, style = t.style;
                    return null == (a = (i = i || pe(t)) ? i[e] : void 0) && style && style[e] && (a = style[e]),
                    ce.test(a) && !ge.test(e) && (n = style.left,
                    (o = (s = t.runtimeStyle) && s.left) && (s.left = t.currentStyle.left),
                    style.left = "fontSize" === e ? "1em" : a,
                    a = style.pixelLeft + "px",
                    style.left = n,
                    o && (s.left = o)),
                    void 0 === a ? a : a + "" || "auto"
                }
                ),
                function() {
                    function e() {
                        var e, i, container, n;
                        (i = wt.getElementsByTagName("body")[0]) && i.style && (e = wt.createElement("div"),
                        (container = wt.createElement("div")).style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px",
                        i.appendChild(container).appendChild(e),
                        e.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",
                        s = o = false,
                        l = true,
                        t.getComputedStyle && (s = "1%" !== (t.getComputedStyle(e, null) || {}).top,
                        o = "4px" === (t.getComputedStyle(e, null) || {
                            width: "4px"
                        }).width,
                        (n = e.appendChild(wt.createElement("div"))).style.cssText = e.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",
                        n.style.marginRight = n.style.width = "0",
                        e.style.width = "1px",
                        l = !parseFloat((t.getComputedStyle(n, null) || {}).marginRight)),
                        e.innerHTML = "<table><tr><td></td><td>t</td></tr></table>",
                        (n = e.getElementsByTagName("td"))[0].style.cssText = "margin:0;border:0;padding:0;display:none",
                        (a = 0 === n[0].offsetHeight) && (n[0].style.display = "",
                        n[1].style.display = "none",
                        a = 0 === n[0].offsetHeight),
                        i.removeChild(container))
                    }
                    var i, style, n, s, o, a, l;
                    (i = wt.createElement("div")).innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",
                    (style = (n = i.getElementsByTagName("a")[0]) && n.style) && (style.cssText = "float:left;opacity:.5",
                    ht.opacity = "0.5" === style.opacity,
                    ht.cssFloat = !!style.cssFloat,
                    i.style.backgroundClip = "content-box",
                    i.cloneNode(true).style.backgroundClip = "",
                    ht.clearCloneStyle = "content-box" === i.style.backgroundClip,
                    ht.boxSizing = "" === style.boxSizing || "" === style.MozBoxSizing || "" === style.WebkitBoxSizing,
                    ct.extend(ht, {
                        reliableHiddenOffsets: function() {
                            return null == a && e(),
                            a
                        },
                        boxSizingReliable: function() {
                            return null == o && e(),
                            o
                        },
                        pixelPosition: function() {
                            return null == s && e(),
                            s
                        },
                        reliableMarginRight: function() {
                            return null == l && e(),
                            l
                        }
                    }))
                }(),
                ct.swap = function(t, e, i, n) {
                    var s, o, a = {};
                    for (o in e)
                        a[o] = t.style[o],
                        t.style[o] = e[o];
                    for (o in s = i.apply(t, n || []),
                    e)
                        t.style[o] = a[o];
                    return s
                }
                ;
                var ve = /alpha\([^)]*\)/i
                  , be = /opacity\s*=\s*([^)]*)/
                  , ye = /^(none|table(?!-c[ea]).+)/
                  , _e = new RegExp("^(" + Mt + ")(.*)$","i")
                  , we = new RegExp("^([+-])=(" + Mt + ")","i")
                  , xe = {
                    position: "absolute",
                    visibility: "hidden",
                    display: "block"
                }
                  , ke = {
                    letterSpacing: "0",
                    fontWeight: "400"
                }
                  , Ce = ["Webkit", "O", "Moz", "ms"];
                ct.extend({
                    cssHooks: {
                        opacity: {
                            get: function(t, e) {
                                if (e) {
                                    var i = fe(t, "opacity");
                                    return "" === i ? "1" : i
                                }
                            }
                        }
                    },
                    cssNumber: {
                        columnCount: true,
                        fillOpacity: true,
                        flexGrow: true,
                        flexShrink: true,
                        fontWeight: true,
                        lineHeight: true,
                        opacity: true,
                        order: true,
                        orphans: true,
                        widows: true,
                        zIndex: true,
                        zoom: true
                    },
                    cssProps: {
                        float: ht.cssFloat ? "cssFloat" : "styleFloat"
                    },
                    style: function(t, e, i, n) {
                        if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                            var s, type, o, a = ct.camelCase(e), style = t.style;
                            if (e = ct.cssProps[a] || (ct.cssProps[a] = I(style, a)),
                            o = ct.cssHooks[e] || ct.cssHooks[a],
                            void 0 === i)
                                return o && "get"in o && void 0 !== (s = o.get(t, false, n)) ? s : style[e];
                            if ("string" == (type = typeof i) && (s = we.exec(i)) && (i = (s[1] + 1) * s[2] + parseFloat(ct.css(t, e)),
                            type = "number"),
                            !(null == i || i != i || ("number" !== type || ct.cssNumber[a] || (i += "px"),
                            ht.clearCloneStyle || "" !== i || 0 !== e.indexOf("background") || (style[e] = "inherit"),
                            o && "set"in o && void 0 === (i = o.set(t, i, n)))))
                                try {
                                    style[e] = i
                                } catch (t) {}
                        }
                    },
                    css: function(t, e, i, n) {
                        var s, o, a, l = ct.camelCase(e);
                        return e = ct.cssProps[l] || (ct.cssProps[l] = I(t.style, l)),
                        (a = ct.cssHooks[e] || ct.cssHooks[l]) && "get"in a && (o = a.get(t, true, i)),
                        void 0 === o && (o = fe(t, e, n)),
                        "normal" === o && e in ke && (o = ke[e]),
                        "" === i || i ? (s = parseFloat(o),
                        true === i || ct.isNumeric(s) ? s || 0 : o) : o
                    }
                }),
                ct.each(["height", "width"], (function(t, e) {
                    ct.cssHooks[e] = {
                        get: function(t, i, n) {
                            if (i)
                                return ye.test(ct.css(t, "display")) && 0 === t.offsetWidth ? ct.swap(t, xe, (function() {
                                    return M(t, e, n)
                                }
                                )) : M(t, e, n)
                        },
                        set: function(t, i, n) {
                            var s = n && pe(t);
                            return F(t, i, n ? N(t, e, n, ht.boxSizing && "border-box" === ct.css(t, "boxSizing", false, s), s) : 0)
                        }
                    }
                }
                )),
                ht.opacity || (ct.cssHooks.opacity = {
                    get: function(t, e) {
                        return be.test((e && t.currentStyle ? t.currentStyle.filter : t.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : e ? "1" : ""
                    },
                    set: function(t, e) {
                        var style = t.style
                          , i = t.currentStyle
                          , n = ct.isNumeric(e) ? "alpha(opacity=" + 100 * e + ")" : ""
                          , filter = i && i.filter || style.filter || "";
                        style.zoom = 1,
                        (e >= 1 || "" === e) && "" === ct.trim(filter.replace(ve, "")) && style.removeAttribute && (style.removeAttribute("filter"),
                        "" === e || i && !i.filter) || (style.filter = ve.test(filter) ? filter.replace(ve, n) : filter + " " + n)
                    }
                }),
                ct.cssHooks.marginRight = E(ht.reliableMarginRight, (function(t, e) {
                    if (e)
                        return ct.swap(t, {
                            display: "inline-block"
                        }, fe, [t, "marginRight"])
                }
                )),
                ct.each({
                    margin: "",
                    padding: "",
                    border: "Width"
                }, (function(t, e) {
                    ct.cssHooks[t + e] = {
                        expand: function(i) {
                            for (var n = 0, expanded = {}, s = "string" == typeof i ? i.split(" ") : [i]; n < 4; n++)
                                expanded[t + zt[n] + e] = s[n] || s[n - 2] || s[0];
                            return expanded
                        }
                    },
                    ue.test(t) || (ct.cssHooks[t + e].set = F)
                }
                )),
                ct.fn.extend({
                    css: function(t, e) {
                        return Ot(this, (function(t, e, i) {
                            var n, s, map = {}, o = 0;
                            if (ct.isArray(e)) {
                                for (n = pe(t),
                                s = e.length; o < s; o++)
                                    map[e[o]] = ct.css(t, e[o], false, n);
                                return map
                            }
                            return void 0 !== i ? ct.style(t, e, i) : ct.css(t, e)
                        }
                        ), t, e, arguments.length > 1)
                    },
                    show: function() {
                        return P(this, true)
                    },
                    hide: function() {
                        return P(this)
                    },
                    toggle: function(state) {
                        return "boolean" == typeof state ? state ? this.show() : this.hide() : this.each((function() {
                            Ht(this) ? ct(this).show() : ct(this).hide()
                        }
                        ))
                    }
                }),
                ct.Tween = z,
                z.prototype = {
                    constructor: z,
                    init: function(t, e, i, n, s, o) {
                        this.elem = t,
                        this.prop = i,
                        this.easing = s || "swing",
                        this.options = e,
                        this.start = this.now = this.cur(),
                        this.end = n,
                        this.unit = o || (ct.cssNumber[i] ? "" : "px")
                    },
                    cur: function() {
                        var t = z.propHooks[this.prop];
                        return t && t.get ? t.get(this) : z.propHooks._default.get(this)
                    },
                    run: function(t) {
                        var e, i = z.propHooks[this.prop];
                        return this.options.duration ? this.pos = e = ct.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : this.pos = e = t,
                        this.now = (this.end - this.start) * e + this.start,
                        this.options.step && this.options.step.call(this.elem, this.now, this),
                        i && i.set ? i.set(this) : z.propHooks._default.set(this),
                        this
                    }
                },
                z.prototype.init.prototype = z.prototype,
                z.propHooks = {
                    _default: {
                        get: function(t) {
                            var e;
                            return null == t.elem[t.prop] || t.elem.style && null != t.elem.style[t.prop] ? (e = ct.css(t.elem, t.prop, "")) && "auto" !== e ? e : 0 : t.elem[t.prop]
                        },
                        set: function(t) {
                            ct.fx.step[t.prop] ? ct.fx.step[t.prop](t) : t.elem.style && (null != t.elem.style[ct.cssProps[t.prop]] || ct.cssHooks[t.prop]) ? ct.style(t.elem, t.prop, t.now + t.unit) : t.elem[t.prop] = t.now
                        }
                    }
                },
                z.propHooks.scrollTop = z.propHooks.scrollLeft = {
                    set: function(t) {
                        t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
                    }
                },
                ct.easing = {
                    linear: function(t) {
                        return t
                    },
                    swing: function(t) {
                        return .5 - Math.cos(t * Math.PI) / 2
                    }
                },
                ct.fx = z.prototype.init,
                ct.fx.step = {};
                var Te, Ae, Se = /^(?:toggle|show|hide)$/, Ee = new RegExp("^(?:([+-])=|)(" + Mt + ")([a-z%]*)$","i"), Ie = /queueHooks$/, Pe = [$], Fe = {
                    "*": [function(t, e) {
                        var i = this.createTween(t, e)
                          , n = i.cur()
                          , s = Ee.exec(e)
                          , o = s && s[3] || (ct.cssNumber[t] ? "" : "px")
                          , a = (ct.cssNumber[t] || "px" !== o && +n) && Ee.exec(ct.css(i.elem, t))
                          , l = 1
                          , h = 20;
                        if (a && a[3] !== o) {
                            o = o || a[3],
                            s = s || [],
                            a = +n || 1;
                            do {
                                a /= l = l || ".5",
                                ct.style(i.elem, t, a + o)
                            } while (l !== (l = i.cur() / n) && 1 !== l && --h)
                        }
                        return s && (a = i.start = +a || +n || 0,
                        i.unit = o,
                        i.end = s[1] ? a + (s[1] + 1) * s[2] : +s[2]),
                        i
                    }
                    ]
                }, input, Ne, select, ze, Oe;
                ct.Animation = ct.extend(Animation, {
                    tweener: function(props, t) {
                        ct.isFunction(props) ? (t = props,
                        props = ["*"]) : props = props.split(" ");
                        for (var e, index = 0, length = props.length; index < length; index++)
                            e = props[index],
                            Fe[e] = Fe[e] || [],
                            Fe[e].unshift(t)
                    },
                    prefilter: function(t, e) {
                        e ? Pe.unshift(t) : Pe.push(t)
                    }
                }),
                ct.speed = function(t, e, i) {
                    var n = t && "object" == typeof t ? ct.extend({}, t) : {
                        complete: i || !i && e || ct.isFunction(t) && t,
                        duration: t,
                        easing: i && e || e && !ct.isFunction(e) && e
                    };
                    return n.duration = ct.fx.off ? 0 : "number" == typeof n.duration ? n.duration : n.duration in ct.fx.speeds ? ct.fx.speeds[n.duration] : ct.fx.speeds._default,
                    null != n.queue && true !== n.queue || (n.queue = "fx"),
                    n.old = n.complete,
                    n.complete = function() {
                        ct.isFunction(n.old) && n.old.call(this),
                        n.queue && ct.dequeue(this, n.queue)
                    }
                    ,
                    n
                }
                ,
                ct.fn.extend({
                    fadeTo: function(t, e, i, n) {
                        return this.filter(Ht).css("opacity", 0).show().end().animate({
                            opacity: e
                        }, t, i, n)
                    },
                    animate: function(t, e, i, n) {
                        var empty = ct.isEmptyObject(t)
                          , s = ct.speed(e, i, n)
                          , o = function() {
                            var e = Animation(this, ct.extend({}, t), s);
                            (empty || ct._data(this, "finish")) && e.stop(true)
                        };
                        return o.finish = o,
                        empty || false === s.queue ? this.each(o) : this.queue(s.queue, o)
                    },
                    stop: function(type, t, e) {
                        var i = function(t) {
                            var i = t.stop;
                            delete t.stop,
                            i(e)
                        };
                        return "string" != typeof type && (e = t,
                        t = type,
                        type = void 0),
                        t && false !== type && this.queue(type || "fx", []),
                        this.each((function() {
                            var t = true
                              , index = null != type && type + "queueHooks"
                              , n = ct.timers
                              , data = ct._data(this);
                            if (index)
                                data[index] && data[index].stop && i(data[index]);
                            else
                                for (index in data)
                                    data[index] && data[index].stop && Ie.test(index) && i(data[index]);
                            for (index = n.length; index--; )
                                n[index].elem !== this || null != type && n[index].queue !== type || (n[index].anim.stop(e),
                                t = false,
                                n.splice(index, 1));
                            !t && e || ct.dequeue(this, type)
                        }
                        ))
                    },
                    finish: function(type) {
                        return false !== type && (type = type || "fx"),
                        this.each((function() {
                            var index, data = ct._data(this), t = data[type + "queue"], e = data[type + "queueHooks"], i = ct.timers, length = t ? t.length : 0;
                            for (data.finish = true,
                            ct.queue(this, type, []),
                            e && e.stop && e.stop.call(this, true),
                            index = i.length; index--; )
                                i[index].elem === this && i[index].queue === type && (i[index].anim.stop(true),
                                i.splice(index, 1));
                            for (index = 0; index < length; index++)
                                t[index] && t[index].finish && t[index].finish.call(this);
                            delete data.finish
                        }
                        ))
                    }
                }),
                ct.each(["toggle", "show", "hide"], (function(t, e) {
                    var i = ct.fn[e];
                    ct.fn[e] = function(t, n, s) {
                        return null == t || "boolean" == typeof t ? i.apply(this, arguments) : this.animate(O(e, true), t, n, s)
                    }
                }
                )),
                ct.each({
                    slideDown: O("show"),
                    slideUp: O("hide"),
                    slideToggle: O("toggle"),
                    fadeIn: {
                        opacity: "show"
                    },
                    fadeOut: {
                        opacity: "hide"
                    },
                    fadeToggle: {
                        opacity: "toggle"
                    }
                }, (function(t, props) {
                    ct.fn[t] = function(t, e, i) {
                        return this.animate(props, t, e, i)
                    }
                }
                )),
                ct.timers = [],
                ct.fx.tick = function() {
                    var t, e = ct.timers, i = 0;
                    for (Te = ct.now(); i < e.length; i++)
                        (t = e[i])() || e[i] !== t || e.splice(i--, 1);
                    e.length || ct.fx.stop(),
                    Te = void 0
                }
                ,
                ct.fx.timer = function(t) {
                    ct.timers.push(t),
                    t() ? ct.fx.start() : ct.timers.pop()
                }
                ,
                ct.fx.interval = 13,
                ct.fx.start = function() {
                    Ae || (Ae = setInterval(ct.fx.tick, ct.fx.interval))
                }
                ,
                ct.fx.stop = function() {
                    clearInterval(Ae),
                    Ae = null
                }
                ,
                ct.fx.speeds = {
                    slow: 600,
                    fast: 200,
                    _default: 400
                },
                ct.fn.delay = function(t, type) {
                    return t = ct.fx && ct.fx.speeds[t] || t,
                    type = type || "fx",
                    this.queue(type, (function(e, i) {
                        var n = setTimeout(e, t);
                        i.stop = function() {
                            clearTimeout(n)
                        }
                    }
                    ))
                }
                ,
                (Ne = wt.createElement("div")).setAttribute("className", "t"),
                Ne.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",
                ze = Ne.getElementsByTagName("a")[0],
                Oe = (select = wt.createElement("select")).appendChild(wt.createElement("option")),
                input = Ne.getElementsByTagName("input")[0],
                ze.style.cssText = "top:1px",
                ht.getSetAttribute = "t" !== Ne.className,
                ht.style = /top/.test(ze.getAttribute("style")),
                ht.hrefNormalized = "/a" === ze.getAttribute("href"),
                ht.checkOn = !!input.value,
                ht.optSelected = Oe.selected,
                ht.enctype = !!wt.createElement("form").enctype,
                select.disabled = true,
                ht.optDisabled = !Oe.disabled,
                (input = wt.createElement("input")).setAttribute("value", ""),
                ht.input = "" === input.getAttribute("value"),
                input.value = "t",
                input.setAttribute("type", "radio"),
                ht.radioValue = "t" === input.value;
                var Le = /\r/g;
                ct.fn.extend({
                    val: function(t) {
                        var e, i, n, s = this[0];
                        return arguments.length ? (n = ct.isFunction(t),
                        this.each((function(i) {
                            var s;
                            1 === this.nodeType && (null == (s = n ? t.call(this, i, ct(this).val()) : t) ? s = "" : "number" == typeof s ? s += "" : ct.isArray(s) && (s = ct.map(s, (function(t) {
                                return null == t ? "" : t + ""
                            }
                            ))),
                            (e = ct.valHooks[this.type] || ct.valHooks[this.nodeName.toLowerCase()]) && "set"in e && void 0 !== e.set(this, s, "value") || (this.value = s))
                        }
                        ))) : s ? (e = ct.valHooks[s.type] || ct.valHooks[s.nodeName.toLowerCase()]) && "get"in e && void 0 !== (i = e.get(s, "value")) ? i : "string" == typeof (i = s.value) ? i.replace(Le, "") : null == i ? "" : i : void 0
                    }
                }),
                ct.extend({
                    valHooks: {
                        option: {
                            get: function(t) {
                                var e = ct.find.attr(t, "value");
                                return null != e ? e : ct.trim(ct.text(t))
                            }
                        },
                        select: {
                            get: function(t) {
                                for (var e, i, n = t.options, index = t.selectedIndex, s = "select-one" === t.type || index < 0, o = s ? null : [], a = s ? index + 1 : n.length, l = index < 0 ? a : s ? index : 0; l < a; l++)
                                    if (((i = n[l]).selected || l === index) && (ht.optDisabled ? !i.disabled : null === i.getAttribute("disabled")) && (!i.parentNode.disabled || !ct.nodeName(i.parentNode, "optgroup"))) {
                                        if (e = ct(i).val(),
                                        s)
                                            return e;
                                        o.push(e)
                                    }
                                return o
                            },
                            set: function(t, e) {
                                for (var i, n, s = t.options, o = ct.makeArray(e), a = s.length; a--; )
                                    if (n = s[a],
                                    ct.inArray(ct.valHooks.option.get(n), o) >= 0)
                                        try {
                                            n.selected = i = true
                                        } catch (t) {
                                            n.scrollHeight
                                        }
                                    else
                                        n.selected = false;
                                return i || (t.selectedIndex = -1),
                                s
                            }
                        }
                    }
                }),
                ct.each(["radio", "checkbox"], (function() {
                    ct.valHooks[this] = {
                        set: function(t, e) {
                            if (ct.isArray(e))
                                return t.checked = ct.inArray(ct(t).val(), e) >= 0
                        }
                    },
                    ht.checkOn || (ct.valHooks[this].get = function(t) {
                        return null === t.getAttribute("value") ? "on" : t.value
                    }
                    )
                }
                ));
                var $e, Re, je = ct.expr.attrHandle, We = /^(?:checked|selected)$/i, qe = ht.getSetAttribute, Be = ht.input;
                ct.fn.extend({
                    attr: function(t, e) {
                        return Ot(this, ct.attr, t, e, arguments.length > 1)
                    },
                    removeAttr: function(t) {
                        return this.each((function() {
                            ct.removeAttr(this, t)
                        }
                        ))
                    }
                }),
                ct.extend({
                    attr: function(t, e, i) {
                        var n, s, o = t.nodeType;
                        if (t && 3 !== o && 8 !== o && 2 !== o)
                            return typeof t.getAttribute === St ? ct.prop(t, e, i) : (1 === o && ct.isXMLDoc(t) || (e = e.toLowerCase(),
                            n = ct.attrHooks[e] || (ct.expr.match.bool.test(e) ? Re : $e)),
                            void 0 === i ? n && "get"in n && null !== (s = n.get(t, e)) ? s : null == (s = ct.find.attr(t, e)) ? void 0 : s : null !== i ? n && "set"in n && void 0 !== (s = n.set(t, i, e)) ? s : (t.setAttribute(e, i + ""),
                            i) : (ct.removeAttr(t, e),
                            void 0))
                    },
                    removeAttr: function(t, e) {
                        var i, n, s = 0, o = e && e.match(Dt);
                        if (o && 1 === t.nodeType)
                            for (; i = o[s++]; )
                                n = ct.propFix[i] || i,
                                ct.expr.match.bool.test(i) ? Be && qe || !We.test(i) ? t[n] = false : t[ct.camelCase("default-" + i)] = t[n] = false : ct.attr(t, i, ""),
                                t.removeAttribute(qe ? i : n)
                    },
                    attrHooks: {
                        type: {
                            set: function(t, e) {
                                if (!ht.radioValue && "radio" === e && ct.nodeName(t, "input")) {
                                    var i = t.value;
                                    return t.setAttribute("type", e),
                                    i && (t.value = i),
                                    e
                                }
                            }
                        }
                    }
                }),
                Re = {
                    set: function(t, e, i) {
                        return false === e ? ct.removeAttr(t, i) : Be && qe || !We.test(i) ? t.setAttribute(!qe && ct.propFix[i] || i, i) : t[ct.camelCase("default-" + i)] = t[i] = true,
                        i
                    }
                },
                ct.each(ct.expr.match.bool.source.match(/\w+/g), (function(t, e) {
                    var getter = je[e] || ct.find.attr;
                    je[e] = Be && qe || !We.test(e) ? function(t, e, i) {
                        var n, s;
                        return i || (s = je[e],
                        je[e] = n,
                        n = null != getter(t, e, i) ? e.toLowerCase() : null,
                        je[e] = s),
                        n
                    }
                    : function(t, e, i) {
                        if (!i)
                            return t[ct.camelCase("default-" + e)] ? e.toLowerCase() : null
                    }
                }
                )),
                Be && qe || (ct.attrHooks.value = {
                    set: function(t, e, i) {
                        if (!ct.nodeName(t, "input"))
                            return $e && $e.set(t, e, i);
                        t.defaultValue = e
                    }
                }),
                qe || ($e = {
                    set: function(t, e, i) {
                        var n = t.getAttributeNode(i);
                        if (n || t.setAttributeNode(n = t.ownerDocument.createAttribute(i)),
                        n.value = e += "",
                        "value" === i || e === t.getAttribute(i))
                            return e
                    }
                },
                je.id = je.name = je.coords = function(t, e, i) {
                    var n;
                    if (!i)
                        return (n = t.getAttributeNode(e)) && "" !== n.value ? n.value : null
                }
                ,
                ct.valHooks.button = {
                    get: function(t, e) {
                        var i = t.getAttributeNode(e);
                        if (i && i.specified)
                            return i.value
                    },
                    set: $e.set
                },
                ct.attrHooks.contenteditable = {
                    set: function(t, e, i) {
                        $e.set(t, "" !== e && e, i)
                    }
                },
                ct.each(["width", "height"], (function(t, e) {
                    ct.attrHooks[e] = {
                        set: function(t, i) {
                            if ("" === i)
                                return t.setAttribute(e, "auto"),
                                i
                        }
                    }
                }
                ))),
                ht.style || (ct.attrHooks.style = {
                    get: function(t) {
                        return t.style.cssText || void 0
                    },
                    set: function(t, e) {
                        return t.style.cssText = e + ""
                    }
                });
                var Ue = /^(?:input|select|textarea|button|object)$/i
                  , Ye = /^(?:a|area)$/i;
                ct.fn.extend({
                    prop: function(t, e) {
                        return Ot(this, ct.prop, t, e, arguments.length > 1)
                    },
                    removeProp: function(t) {
                        return t = ct.propFix[t] || t,
                        this.each((function() {
                            try {
                                this[t] = void 0,
                                delete this[t]
                            } catch (t) {}
                        }
                        ))
                    }
                }),
                ct.extend({
                    propFix: {
                        for: "htmlFor",
                        class: "className"
                    },
                    prop: function(t, e, i) {
                        var n, s, o, a = t.nodeType;
                        if (t && 3 !== a && 8 !== a && 2 !== a)
                            return (o = 1 !== a || !ct.isXMLDoc(t)) && (e = ct.propFix[e] || e,
                            s = ct.propHooks[e]),
                            void 0 !== i ? s && "set"in s && void 0 !== (n = s.set(t, i, e)) ? n : t[e] = i : s && "get"in s && null !== (n = s.get(t, e)) ? n : t[e]
                    },
                    propHooks: {
                        tabIndex: {
                            get: function(t) {
                                var e = ct.find.attr(t, "tabindex");
                                return e ? parseInt(e, 10) : Ue.test(t.nodeName) || Ye.test(t.nodeName) && t.href ? 0 : -1
                            }
                        }
                    }
                }),
                ht.hrefNormalized || ct.each(["href", "src"], (function(t, e) {
                    ct.propHooks[e] = {
                        get: function(t) {
                            return t.getAttribute(e, 4)
                        }
                    }
                }
                )),
                ht.optSelected || (ct.propHooks.selected = {
                    get: function(t) {
                        var e = t.parentNode;
                        return e && (e.selectedIndex,
                        e.parentNode && e.parentNode.selectedIndex),
                        null
                    }
                }),
                ct.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], (function() {
                    ct.propFix[this.toLowerCase()] = this
                }
                )),
                ht.enctype || (ct.propFix.enctype = "encoding");
                var Qe = /[\t\r\n\f]/g;
                ct.fn.extend({
                    addClass: function(t) {
                        var e, i, n, s, o, a, l = 0, h = this.length, u = "string" == typeof t && t;
                        if (ct.isFunction(t))
                            return this.each((function(e) {
                                ct(this).addClass(t.call(this, e, this.className))
                            }
                            ));
                        if (u)
                            for (e = (t || "").match(Dt) || []; l < h; l++)
                                if (n = 1 === (i = this[l]).nodeType && (i.className ? (" " + i.className + " ").replace(Qe, " ") : " ")) {
                                    for (o = 0; s = e[o++]; )
                                        n.indexOf(" " + s + " ") < 0 && (n += s + " ");
                                    a = ct.trim(n),
                                    i.className !== a && (i.className = a)
                                }
                        return this
                    },
                    removeClass: function(t) {
                        var e, i, n, s, o, a, l = 0, h = this.length, u = 0 === arguments.length || "string" == typeof t && t;
                        if (ct.isFunction(t))
                            return this.each((function(e) {
                                ct(this).removeClass(t.call(this, e, this.className))
                            }
                            ));
                        if (u)
                            for (e = (t || "").match(Dt) || []; l < h; l++)
                                if (n = 1 === (i = this[l]).nodeType && (i.className ? (" " + i.className + " ").replace(Qe, " ") : "")) {
                                    for (o = 0; s = e[o++]; )
                                        for (; n.indexOf(" " + s + " ") >= 0; )
                                            n = n.replace(" " + s + " ", " ");
                                    a = t ? ct.trim(n) : "",
                                    i.className !== a && (i.className = a)
                                }
                        return this
                    },
                    toggleClass: function(t, e) {
                        var type = typeof t;
                        return "boolean" == typeof e && "string" === type ? e ? this.addClass(t) : this.removeClass(t) : ct.isFunction(t) ? this.each((function(i) {
                            ct(this).toggleClass(t.call(this, i, this.className, e), e)
                        }
                        )) : this.each((function() {
                            if ("string" === type)
                                for (var e, i = 0, n = ct(this), s = t.match(Dt) || []; e = s[i++]; )
                                    n.hasClass(e) ? n.removeClass(e) : n.addClass(e);
                            else
                                type !== St && "boolean" !== type || (this.className && ct._data(this, "__className__", this.className),
                                this.className = this.className || false === t ? "" : ct._data(this, "__className__") || "")
                        }
                        ))
                    },
                    hasClass: function(selector) {
                        for (var t = " " + selector + " ", e = 0, i = this.length; e < i; e++)
                            if (1 === this[e].nodeType && (" " + this[e].className + " ").replace(Qe, " ").indexOf(t) >= 0)
                                return true;
                        return false
                    }
                }),
                ct.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), (function(t, e) {
                    ct.fn[e] = function(data, t) {
                        return arguments.length > 0 ? this.on(e, null, data, t) : this.trigger(e)
                    }
                }
                )),
                ct.fn.extend({
                    hover: function(t, e) {
                        return this.mouseenter(t).mouseleave(e || t)
                    },
                    bind: function(types, data, t) {
                        return this.on(types, null, data, t)
                    },
                    unbind: function(types, t) {
                        return this.off(types, null, t)
                    },
                    delegate: function(selector, types, data, t) {
                        return this.on(types, selector, data, t)
                    },
                    undelegate: function(selector, types, t) {
                        return 1 === arguments.length ? this.off(selector, "**") : this.off(types, selector || "**", t)
                    }
                });
                var Ve = ct.now()
                  , Ke = /\?/
                  , Xe = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
                ct.parseJSON = function(data) {
                    if (t.JSON && t.JSON.parse)
                        return t.JSON.parse(data + "");
                    var e, i = null, n = ct.trim(data + "");
                    return n && !ct.trim(n.replace(Xe, (function(t, n, open, close) {
                        return e && n && (i = 0),
                        0 === i ? t : (e = open || n,
                        i += !close - !open,
                        "")
                    }
                    ))) ? Function("return " + n)() : ct.error("Invalid JSON: " + data)
                }
                ,
                ct.parseXML = function(data) {
                    var xml, e;
                    if (!data || "string" != typeof data)
                        return null;
                    try {
                        t.DOMParser ? xml = (e = new DOMParser).parseFromString(data, "text/xml") : ((xml = new ActiveXObject("Microsoft.XMLDOM")).async = "false",
                        xml.loadXML(data))
                    } catch (t) {
                        xml = void 0
                    }
                    return xml && xml.documentElement && !xml.getElementsByTagName("parsererror").length || ct.error("Invalid XML: " + data),
                    xml
                }
                ;
                var Ge, Je, Ze = /#.*$/, ti = /([?&])_=[^&]*/, ei = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm, ii = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, ni = /^(?:GET|HEAD)$/, si = /^\/\//, oi = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/, ri = {}, ai = {}, li = "*/".concat("*");
                try {
                    Je = location.href
                } catch (t) {
                    (Je = wt.createElement("a")).href = "",
                    Je = Je.href
                }
                Ge = oi.exec(Je.toLowerCase()) || [],
                ct.extend({
                    active: 0,
                    lastModified: {},
                    etag: {},
                    ajaxSettings: {
                        url: Je,
                        type: "GET",
                        isLocal: ii.test(Ge[1]),
                        global: true,
                        processData: true,
                        async: true,
                        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                        accepts: {
                            "*": li,
                            text: "text/plain",
                            html: "text/html",
                            xml: "application/xml, text/xml",
                            json: "application/json, text/javascript"
                        },
                        contents: {
                            xml: /xml/,
                            html: /html/,
                            json: /json/
                        },
                        responseFields: {
                            xml: "responseXML",
                            text: "responseText",
                            json: "responseJSON"
                        },
                        converters: {
                            "* text": String,
                            "text html": true,
                            "text json": ct.parseJSON,
                            "text xml": ct.parseXML
                        },
                        flatOptions: {
                            url: true,
                            context: true
                        }
                    },
                    ajaxSetup: function(t, settings) {
                        return settings ? U(U(t, ct.ajaxSettings), settings) : U(ct.ajaxSettings, t)
                    },
                    ajaxPrefilter: W(ri),
                    ajaxTransport: W(ai),
                    ajax: function(url, t) {
                        function e(t, e, i, n) {
                            var u, b, y, _, x, k = e;
                            2 !== state && (state = 2,
                            a && clearTimeout(a),
                            h = void 0,
                            o = n || "",
                            w.readyState = t > 0 ? 4 : 0,
                            u = t >= 200 && t < 300 || 304 === t,
                            i && (_ = Y(c, w, i)),
                            _ = V(c, _, w, u),
                            u ? (c.ifModified && ((x = w.getResponseHeader("Last-Modified")) && (ct.lastModified[s] = x),
                            (x = w.getResponseHeader("etag")) && (ct.etag[s] = x)),
                            204 === t || "HEAD" === c.type ? k = "nocontent" : 304 === t ? k = "notmodified" : (k = _.state,
                            b = _.data,
                            u = !(y = _.error))) : (y = k,
                            !t && k || (k = "error",
                            t < 0 && (t = 0))),
                            w.status = t,
                            w.statusText = (e || k) + "",
                            u ? m.resolveWith(p, [b, k, w]) : m.rejectWith(p, [w, k, y]),
                            w.statusCode(v),
                            v = void 0,
                            l && f.trigger(u ? "ajaxSuccess" : "ajaxError", [w, c, u ? b : y]),
                            g.fireWith(p, [w, k]),
                            l && (f.trigger("ajaxComplete", [w, c]),
                            --ct.active || ct.event.trigger("ajaxStop")))
                        }
                        "object" == typeof url && (t = url,
                        url = void 0),
                        t = t || {};
                        var i, n, s, o, a, l, h, u, c = ct.ajaxSetup({}, t), p = c.context || c, f = c.context && (p.nodeType || p.jquery) ? ct(p) : ct.event, m = ct.Deferred(), g = ct.Callbacks("once memory"), v = c.statusCode || {}, b = {}, y = {}, state = 0, _ = "canceled", w = {
                            readyState: 0,
                            getResponseHeader: function(t) {
                                var e;
                                if (2 === state) {
                                    if (!u)
                                        for (u = {}; e = ei.exec(o); )
                                            u[e[1].toLowerCase()] = e[2];
                                    e = u[t.toLowerCase()]
                                }
                                return null == e ? null : e
                            },
                            getAllResponseHeaders: function() {
                                return 2 === state ? o : null
                            },
                            setRequestHeader: function(t, e) {
                                var i = t.toLowerCase();
                                return state || (t = y[i] = y[i] || t,
                                b[t] = e),
                                this
                            },
                            overrideMimeType: function(type) {
                                return state || (c.mimeType = type),
                                this
                            },
                            statusCode: function(map) {
                                var t;
                                if (map)
                                    if (state < 2)
                                        for (t in map)
                                            v[t] = [v[t], map[t]];
                                    else
                                        w.always(map[w.status]);
                                return this
                            },
                            abort: function(t) {
                                var i = t || _;
                                return h && h.abort(i),
                                e(0, i),
                                this
                            }
                        };
                        if (m.promise(w).complete = g.add,
                        w.success = w.done,
                        w.error = w.fail,
                        c.url = ((url || c.url || Je) + "").replace(Ze, "").replace(si, Ge[1] + "//"),
                        c.type = t.method || t.type || c.method || c.type,
                        c.dataTypes = ct.trim(c.dataType || "*").toLowerCase().match(Dt) || [""],
                        null == c.crossDomain && (i = oi.exec(c.url.toLowerCase()),
                        c.crossDomain = !!(i && (i[1] !== Ge[1] || i[2] !== Ge[2] || (i[3] || ("http:" === i[1] ? "80" : "443")) !== (Ge[3] || ("http:" === Ge[1] ? "80" : "443"))))),
                        c.data && c.processData && "string" != typeof c.data && (c.data = ct.param(c.data, c.traditional)),
                        B(ri, c, t, w),
                        2 === state)
                            return w;
                        for (n in (l = c.global) && 0 == ct.active++ && ct.event.trigger("ajaxStart"),
                        c.type = c.type.toUpperCase(),
                        c.hasContent = !ni.test(c.type),
                        s = c.url,
                        c.hasContent || (c.data && (s = c.url += (Ke.test(s) ? "&" : "?") + c.data,
                        delete c.data),
                        false === c.cache && (c.url = ti.test(s) ? s.replace(ti, "$1_=" + Ve++) : s + (Ke.test(s) ? "&" : "?") + "_=" + Ve++)),
                        c.ifModified && (ct.lastModified[s] && w.setRequestHeader("If-Modified-Since", ct.lastModified[s]),
                        ct.etag[s] && w.setRequestHeader("If-None-Match", ct.etag[s])),
                        (c.data && c.hasContent && false !== c.contentType || t.contentType) && w.setRequestHeader("Content-Type", c.contentType),
                        w.setRequestHeader("Accept", c.dataTypes[0] && c.accepts[c.dataTypes[0]] ? c.accepts[c.dataTypes[0]] + ("*" !== c.dataTypes[0] ? ", " + li + "; q=0.01" : "") : c.accepts["*"]),
                        c.headers)
                            w.setRequestHeader(n, c.headers[n]);
                        if (c.beforeSend && (false === c.beforeSend.call(p, w, c) || 2 === state))
                            return w.abort();
                        for (n in _ = "abort",
                        {
                            success: 1,
                            error: 1,
                            complete: 1
                        })
                            w[n](c[n]);
                        if (h = B(ai, c, t, w)) {
                            w.readyState = 1,
                            l && f.trigger("ajaxSend", [w, c]),
                            c.async && c.timeout > 0 && (a = setTimeout((function() {
                                w.abort("timeout")
                            }
                            ), c.timeout));
                            try {
                                state = 1,
                                h.send(b, e)
                            } catch (t) {
                                if (!(state < 2))
                                    throw t;
                                e(-1, t)
                            }
                        } else
                            e(-1, "No Transport");
                        return w
                    },
                    getJSON: function(url, data, t) {
                        return ct.get(url, data, t, "json")
                    },
                    getScript: function(url, t) {
                        return ct.get(url, void 0, t, "script")
                    }
                }),
                ct.each(["get", "post"], (function(t, e) {
                    ct[e] = function(url, data, t, type) {
                        return ct.isFunction(data) && (type = type || t,
                        t = data,
                        data = void 0),
                        ct.ajax({
                            url: url,
                            type: e,
                            dataType: type,
                            data: data,
                            success: t
                        })
                    }
                }
                )),
                ct.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], (function(t, type) {
                    ct.fn[type] = function(t) {
                        return this.on(type, t)
                    }
                }
                )),
                ct._evalUrl = function(url) {
                    return ct.ajax({
                        url: url,
                        type: "GET",
                        dataType: "script",
                        async: false,
                        global: false,
                        throws: true
                    })
                }
                ,
                ct.fn.extend({
                    wrapAll: function(html) {
                        if (ct.isFunction(html))
                            return this.each((function(t) {
                                ct(this).wrapAll(html.call(this, t))
                            }
                            ));
                        if (this[0]) {
                            var t = ct(html, this[0].ownerDocument).eq(0).clone(true);
                            this[0].parentNode && t.insertBefore(this[0]),
                            t.map((function() {
                                for (var t = this; t.firstChild && 1 === t.firstChild.nodeType; )
                                    t = t.firstChild;
                                return t
                            }
                            )).append(this)
                        }
                        return this
                    },
                    wrapInner: function(html) {
                        return ct.isFunction(html) ? this.each((function(t) {
                            ct(this).wrapInner(html.call(this, t))
                        }
                        )) : this.each((function() {
                            var t = ct(this)
                              , e = t.contents();
                            e.length ? e.wrapAll(html) : t.append(html)
                        }
                        ))
                    },
                    wrap: function(html) {
                        var t = ct.isFunction(html);
                        return this.each((function(e) {
                            ct(this).wrapAll(t ? html.call(this, e) : html)
                        }
                        ))
                    },
                    unwrap: function() {
                        return this.parent().each((function() {
                            ct.nodeName(this, "body") || ct(this).replaceWith(this.childNodes)
                        }
                        )).end()
                    }
                }),
                ct.expr.filters.hidden = function(t) {
                    return t.offsetWidth <= 0 && t.offsetHeight <= 0 || !ht.reliableHiddenOffsets() && "none" === (t.style && t.style.display || ct.css(t, "display"))
                }
                ,
                ct.expr.filters.visible = function(t) {
                    return !ct.expr.filters.hidden(t)
                }
                ;
                var hi = /%20/g
                  , ui = /\[\]$/
                  , ci = /\r?\n/g
                  , di = /^(?:submit|button|image|reset|file)$/i
                  , pi = /^(?:input|select|textarea|keygen)/i;
                ct.param = function(t, e) {
                    var i, n = [], add = function(t, e) {
                        e = ct.isFunction(e) ? e() : null == e ? "" : e,
                        n[n.length] = encodeURIComponent(t) + "=" + encodeURIComponent(e)
                    };
                    if (void 0 === e && (e = ct.ajaxSettings && ct.ajaxSettings.traditional),
                    ct.isArray(t) || t.jquery && !ct.isPlainObject(t))
                        ct.each(t, (function() {
                            add(this.name, this.value)
                        }
                        ));
                    else
                        for (i in t)
                            K(i, t[i], e, add);
                    return n.join("&").replace(hi, "+")
                }
                ,
                ct.fn.extend({
                    serialize: function() {
                        return ct.param(this.serializeArray())
                    },
                    serializeArray: function() {
                        return this.map((function() {
                            var t = ct.prop(this, "elements");
                            return t ? ct.makeArray(t) : this
                        }
                        )).filter((function() {
                            var type = this.type;
                            return this.name && !ct(this).is(":disabled") && pi.test(this.nodeName) && !di.test(type) && (this.checked || !Lt.test(type))
                        }
                        )).map((function(t, e) {
                            var i = ct(this).val();
                            return null == i ? null : ct.isArray(i) ? ct.map(i, (function(t) {
                                return {
                                    name: e.name,
                                    value: t.replace(ci, "\r\n")
                                }
                            }
                            )) : {
                                name: e.name,
                                value: i.replace(ci, "\r\n")
                            }
                        }
                        )).get()
                    }
                }),
                ct.ajaxSettings.xhr = void 0 !== t.ActiveXObject ? function() {
                    return !this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) && X() || G()
                }
                : X;
                var mi = 0
                  , gi = {}
                  , bi = ct.ajaxSettings.xhr();
                t.ActiveXObject && ct(t).on("unload", (function() {
                    for (var t in gi)
                        gi[t](void 0, true)
                }
                )),
                ht.cors = !!bi && "withCredentials"in bi,
                (bi = ht.ajax = !!bi) && ct.ajaxTransport((function(t) {
                    var e;
                    if (!t.crossDomain || ht.cors)
                        return {
                            send: function(i, n) {
                                var s, o = t.xhr(), id = ++mi;
                                if (o.open(t.type, t.url, t.async, t.username, t.password),
                                t.xhrFields)
                                    for (s in t.xhrFields)
                                        o[s] = t.xhrFields[s];
                                for (s in t.mimeType && o.overrideMimeType && o.overrideMimeType(t.mimeType),
                                t.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest"),
                                i)
                                    void 0 !== i[s] && o.setRequestHeader(s, i[s] + "");
                                o.send(t.hasContent && t.data || null),
                                e = function(i, s) {
                                    var a, l, h;
                                    if (e && (s || 4 === o.readyState))
                                        if (delete gi[id],
                                        e = void 0,
                                        o.onreadystatechange = ct.noop,
                                        s)
                                            4 !== o.readyState && o.abort();
                                        else {
                                            h = {},
                                            a = o.status,
                                            "string" == typeof o.responseText && (h.text = o.responseText);
                                            try {
                                                l = o.statusText
                                            } catch (t) {
                                                l = ""
                                            }
                                            a || !t.isLocal || t.crossDomain ? 1223 === a && (a = 204) : a = h.text ? 200 : 404
                                        }
                                    h && n(a, l, h, o.getAllResponseHeaders())
                                }
                                ,
                                t.async ? 4 === o.readyState ? setTimeout(e) : o.onreadystatechange = gi[id] = e : e()
                            },
                            abort: function() {
                                e && e(void 0, true)
                            }
                        }
                }
                )),
                ct.ajaxSetup({
                    accepts: {
                        script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
                    },
                    contents: {
                        script: /(?:java|ecma)script/
                    },
                    converters: {
                        "text script": function(text) {
                            return ct.globalEval(text),
                            text
                        }
                    }
                }),
                ct.ajaxPrefilter("script", (function(t) {
                    void 0 === t.cache && (t.cache = false),
                    t.crossDomain && (t.type = "GET",
                    t.global = false)
                }
                )),
                ct.ajaxTransport("script", (function(t) {
                    if (t.crossDomain) {
                        var e, head = wt.head || ct("head")[0] || wt.documentElement;
                        return {
                            send: function(i, n) {
                                (e = wt.createElement("script")).async = true,
                                t.scriptCharset && (e.charset = t.scriptCharset),
                                e.src = t.url,
                                e.onload = e.onreadystatechange = function(t, i) {
                                    (i || !e.readyState || /loaded|complete/.test(e.readyState)) && (e.onload = e.onreadystatechange = null,
                                    e.parentNode && e.parentNode.removeChild(e),
                                    e = null,
                                    i || n(200, "success"))
                                }
                                ,
                                head.insertBefore(e, head.firstChild)
                            },
                            abort: function() {
                                e && e.onload(void 0, true)
                            }
                        }
                    }
                }
                ));
                var yi = []
                  , _i = /(=)\?(?=&|$)|\?\?/;
                ct.ajaxSetup({
                    jsonp: "callback",
                    jsonpCallback: function() {
                        var t = yi.pop() || ct.expando + "_" + Ve++;
                        return this[t] = true,
                        t
                    }
                }),
                ct.ajaxPrefilter("json jsonp", (function(e, i, n) {
                    var s, o, a, l = false !== e.jsonp && (_i.test(e.url) ? "url" : "string" == typeof e.data && !(e.contentType || "").indexOf("application/x-www-form-urlencoded") && _i.test(e.data) && "data");
                    if (l || "jsonp" === e.dataTypes[0])
                        return s = e.jsonpCallback = ct.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback,
                        l ? e[l] = e[l].replace(_i, "$1" + s) : false !== e.jsonp && (e.url += (Ke.test(e.url) ? "&" : "?") + e.jsonp + "=" + s),
                        e.converters["script json"] = function() {
                            return a || ct.error(s + " was not called"),
                            a[0]
                        }
                        ,
                        e.dataTypes[0] = "json",
                        o = t[s],
                        t[s] = function() {
                            a = arguments
                        }
                        ,
                        n.always((function() {
                            t[s] = o,
                            e[s] && (e.jsonpCallback = i.jsonpCallback,
                            yi.push(s)),
                            a && ct.isFunction(o) && o(a[0]),
                            a = o = void 0
                        }
                        )),
                        "script"
                }
                )),
                ct.parseHTML = function(data, t, e) {
                    if (!data || "string" != typeof data)
                        return null;
                    "boolean" == typeof t && (e = t,
                    t = false),
                    t = t || wt;
                    var i = bt.exec(data)
                      , n = !e && [];
                    return i ? [t.createElement(i[1])] : (i = ct.buildFragment([data], t, n),
                    n && n.length && ct(n).remove(),
                    ct.merge([], i.childNodes))
                }
                ;
                var wi = ct.fn.load;
                ct.fn.load = function(url, t, e) {
                    if ("string" != typeof url && wi)
                        return wi.apply(this, arguments);
                    var selector, i, type, n = this, s = url.indexOf(" ");
                    return s >= 0 && (selector = ct.trim(url.slice(s, url.length)),
                    url = url.slice(0, s)),
                    ct.isFunction(t) ? (e = t,
                    t = void 0) : t && "object" == typeof t && (type = "POST"),
                    n.length > 0 && ct.ajax({
                        url: url,
                        type: type,
                        dataType: "html",
                        data: t
                    }).done((function(t) {
                        i = arguments,
                        n.html(selector ? ct("<div>").append(ct.parseHTML(t)).find(selector) : t)
                    }
                    )).complete(e && function(t, s) {
                        n.each(e, i || [t.responseText, s, t])
                    }
                    ),
                    this
                }
                ,
                ct.expr.filters.animated = function(t) {
                    return ct.grep(ct.timers, (function(e) {
                        return t === e.elem
                    }
                    )).length
                }
                ;
                var xi = t.document.documentElement;
                ct.offset = {
                    setOffset: function(t, e, i) {
                        var n, s, o, a, l, h, u, position = ct.css(t, "position"), c = ct(t), props = {};
                        "static" === position && (t.style.position = "relative"),
                        l = c.offset(),
                        o = ct.css(t, "top"),
                        h = ct.css(t, "left"),
                        (u = ("absolute" === position || "fixed" === position) && ct.inArray("auto", [o, h]) > -1) ? (a = (n = c.position()).top,
                        s = n.left) : (a = parseFloat(o) || 0,
                        s = parseFloat(h) || 0),
                        ct.isFunction(e) && (e = e.call(t, i, l)),
                        null != e.top && (props.top = e.top - l.top + a),
                        null != e.left && (props.left = e.left - l.left + s),
                        "using"in e ? e.using.call(t, props) : c.css(props)
                    }
                },
                ct.fn.extend({
                    offset: function(t) {
                        if (arguments.length)
                            return void 0 === t ? this : this.each((function(e) {
                                ct.offset.setOffset(this, t, e)
                            }
                            ));
                        var e, i, n = {
                            top: 0,
                            left: 0
                        }, s = this[0], o = s && s.ownerDocument;
                        return o ? (e = o.documentElement,
                        ct.contains(e, s) ? (typeof s.getBoundingClientRect !== St && (n = s.getBoundingClientRect()),
                        i = J(o),
                        {
                            top: n.top + (i.pageYOffset || e.scrollTop) - (e.clientTop || 0),
                            left: n.left + (i.pageXOffset || e.scrollLeft) - (e.clientLeft || 0)
                        }) : n) : void 0
                    },
                    position: function() {
                        if (this[0]) {
                            var t, e, i = {
                                top: 0,
                                left: 0
                            }, n = this[0];
                            return "fixed" === ct.css(n, "position") ? e = n.getBoundingClientRect() : (t = this.offsetParent(),
                            e = this.offset(),
                            ct.nodeName(t[0], "html") || (i = t.offset()),
                            i.top += ct.css(t[0], "borderTopWidth", true),
                            i.left += ct.css(t[0], "borderLeftWidth", true)),
                            {
                                top: e.top - i.top - ct.css(n, "marginTop", true),
                                left: e.left - i.left - ct.css(n, "marginLeft", true)
                            }
                        }
                    },
                    offsetParent: function() {
                        return this.map((function() {
                            for (var t = this.offsetParent || xi; t && !ct.nodeName(t, "html") && "static" === ct.css(t, "position"); )
                                t = t.offsetParent;
                            return t || xi
                        }
                        ))
                    }
                }),
                ct.each({
                    scrollLeft: "pageXOffset",
                    scrollTop: "pageYOffset"
                }, (function(t, e) {
                    var i = /Y/.test(e);
                    ct.fn[t] = function(n) {
                        return Ot(this, (function(t, n, s) {
                            var o = J(t);
                            if (void 0 === s)
                                return o ? e in o ? o[e] : o.document.documentElement[n] : t[n];
                            o ? o.scrollTo(i ? ct(o).scrollLeft() : s, i ? s : ct(o).scrollTop()) : t[n] = s
                        }
                        ), t, n, arguments.length, null)
                    }
                }
                )),
                ct.each(["top", "left"], (function(t, e) {
                    ct.cssHooks[e] = E(ht.pixelPosition, (function(t, i) {
                        if (i)
                            return i = fe(t, e),
                            ce.test(i) ? ct(t).position()[e] + "px" : i
                    }
                    ))
                }
                )),
                ct.each({
                    Height: "height",
                    Width: "width"
                }, (function(t, type) {
                    ct.each({
                        padding: "inner" + t,
                        content: type,
                        "": "outer" + t
                    }, (function(e, i) {
                        ct.fn[i] = function(i, n) {
                            var s = arguments.length && (e || "boolean" != typeof i)
                              , o = e || (true === i || true === n ? "margin" : "border");
                            return Ot(this, (function(e, type, i) {
                                var n;
                                return ct.isWindow(e) ? e.document.documentElement["client" + t] : 9 === e.nodeType ? (n = e.documentElement,
                                Math.max(e.body["scroll" + t], n["scroll" + t], e.body["offset" + t], n["offset" + t], n["client" + t])) : void 0 === i ? ct.css(e, type, o) : ct.style(e, type, i, o)
                            }
                            ), type, s ? i : void 0, s, null)
                        }
                    }
                    ))
                }
                )),
                ct.fn.size = function() {
                    return this.length
                }
                ,
                ct.fn.andSelf = ct.fn.addBack,
                "function" == typeof define && define.amd && define("jquery", [], (function() {
                    return ct
                }
                ));
                var ki = t.jQuery
                  , Ci = t.$;
                return ct.noConflict = function(e) {
                    return t.$ === ct && (t.$ = Ci),
                    e && t.jQuery === ct && (t.jQuery = ki),
                    ct
                }
                ,
                typeof e === St && (t.jQuery = t.$ = ct),
                ct
            }
            ,
            void ("object" == typeof t && "object" == typeof t.exports ? t.exports = i.document ? factory(i, true) : function(t) {
                if (!t.document)
                    throw new Error("jQuery requires a window with a document");
                return factory(t)
            }
            : factory(i))
        }
        ).call(window)
    },
    176: function(t, e) {},
    202: function(t, e) {
        var e = void 0
          , t = void 0;
        (function() {
            var t = void 0;
            /*!
 * Bootstrap v3.3.7 (http://getbootstrap.com)
 * Copyright 2011-2019 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */
            /*!
 * Generated using the Bootstrap Customizer (<none>)
 * Config saved to config.json and <none>
 */
            if ("undefined" == typeof jQuery)
                throw new Error("Bootstrap's JavaScript requires jQuery");
            +function(t) {
                "use strict";
                var e = t.fn.jquery.split(" ")[0].split(".");
                if (e[0] < 2 && e[1] < 9 || 1 == e[0] && 9 == e[1] && e[2] < 1)
                    throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher")
            }(jQuery),
            function(t) {
                "use strict";
                function e(e) {
                    return this.each((function() {
                        var i = t(this)
                          , data = i.data("bs.alert");
                        data || i.data("bs.alert", data = new n(this)),
                        "string" == typeof e && data[e].call(i)
                    }
                    ))
                }
                var i = '[data-dismiss="alert"]'
                  , n = function(el) {
                    t(el).on("click", i, this.close)
                };
                n.VERSION = "3.3.7",
                n.TRANSITION_DURATION = 150,
                n.prototype.close = function(e) {
                    function removeElement() {
                        s.detach().trigger("closed.bs.alert").remove()
                    }
                    var i = t(this)
                      , selector = i.attr("data-target");
                    selector || (selector = (selector = i.attr("href")) && selector.replace(/.*(?=#[^\s]*$)/, ""));
                    var s = t("#" === selector ? [] : selector);
                    e && e.preventDefault(),
                    s.length || (s = i.closest(".alert")),
                    s.trigger(e = t.Event("close.bs.alert")),
                    e.isDefaultPrevented() || (s.removeClass("in"),
                    t.support.transition && s.hasClass("fade") ? s.one("bsTransitionEnd", removeElement).emulateTransitionEnd(n.TRANSITION_DURATION) : removeElement())
                }
                ;
                var s = t.fn.alert;
                t.fn.alert = e,
                t.fn.alert.Constructor = n,
                t.fn.alert.noConflict = function() {
                    return t.fn.alert = s,
                    this
                }
                ,
                t(document).on("click.bs.alert.data-api", i, n.prototype.close)
            }(jQuery),
            function(t) {
                "use strict";
                function e(e) {
                    return this.each((function() {
                        var i = t(this)
                          , data = i.data("bs.button")
                          , n = "object" == typeof e && e;
                        data || i.data("bs.button", data = new Button(this,n)),
                        "toggle" == e ? data.toggle() : e && data.setState(e)
                    }
                    ))
                }
                var Button = function(e, i) {
                    this.$element = t(e),
                    this.options = t.extend({}, Button.DEFAULTS, i),
                    this.isLoading = false
                };
                Button.VERSION = "3.3.7",
                Button.DEFAULTS = {
                    loadingText: "loading..."
                },
                Button.prototype.setState = function(state) {
                    var d = "disabled"
                      , e = this.$element
                      , i = e.is("input") ? "val" : "html"
                      , data = e.data();
                    state += "Text",
                    null == data.resetText && e.data("resetText", e[i]()),
                    setTimeout(t.proxy((function() {
                        e[i](null == data[state] ? this.options[state] : data[state]),
                        "loadingText" == state ? (this.isLoading = true,
                        e.addClass(d).attr(d, d).prop(d, true)) : this.isLoading && (this.isLoading = false,
                        e.removeClass(d).removeAttr(d).prop(d, false))
                    }
                    ), this), 0)
                }
                ,
                Button.prototype.toggle = function() {
                    var t = true
                      , e = this.$element.closest('[data-toggle="buttons"]');
                    if (e.length) {
                        var i = this.$element.find("input");
                        "radio" == i.prop("type") ? (i.prop("checked") && (t = false),
                        e.find(".active").removeClass("active"),
                        this.$element.addClass("active")) : "checkbox" == i.prop("type") && (i.prop("checked") !== this.$element.hasClass("active") && (t = false),
                        this.$element.toggleClass("active")),
                        i.prop("checked", this.$element.hasClass("active")),
                        t && i.trigger("change")
                    } else
                        this.$element.attr("aria-pressed", !this.$element.hasClass("active")),
                        this.$element.toggleClass("active")
                }
                ;
                var i = t.fn.button;
                t.fn.button = e,
                t.fn.button.Constructor = Button,
                t.fn.button.noConflict = function() {
                    return t.fn.button = i,
                    this
                }
                ,
                t(document).on("click.bs.button.data-api", '[data-toggle^="button"]', (function(i) {
                    var n = t(i.target).closest(".btn");
                    e.call(n, "toggle"),
                    t(i.target).is('input[type="radio"], input[type="checkbox"]') || (i.preventDefault(),
                    n.is("input,button") ? n.trigger("focus") : n.find("input:visible,button:visible").first().trigger("focus"))
                }
                )).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', (function(e) {
                    t(e.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(e.type))
                }
                ))
            }(jQuery),
            function(t) {
                "use strict";
                function e(e) {
                    return this.each((function() {
                        var i = t(this)
                          , data = i.data("bs.carousel")
                          , n = t.extend({}, Carousel.DEFAULTS, i.data(), "object" == typeof e && e)
                          , s = "string" == typeof e ? e : n.slide;
                        data || i.data("bs.carousel", data = new Carousel(this,n)),
                        "number" == typeof e ? data.to(e) : s ? data[s]() : n.interval && data.pause().cycle()
                    }
                    ))
                }
                var Carousel = function(e, i) {
                    this.$element = t(e),
                    this.$indicators = this.$element.find(".carousel-indicators"),
                    this.options = i,
                    this.paused = null,
                    this.sliding = null,
                    this.interval = null,
                    this.$active = null,
                    this.$items = null,
                    this.options.keyboard && this.$element.on("keydown.bs.carousel", t.proxy(this.keydown, this)),
                    "hover" == this.options.pause && !("ontouchstart"in document.documentElement) && this.$element.on("mouseenter.bs.carousel", t.proxy(this.pause, this)).on("mouseleave.bs.carousel", t.proxy(this.cycle, this))
                };
                Carousel.VERSION = "3.3.7",
                Carousel.TRANSITION_DURATION = 600,
                Carousel.DEFAULTS = {
                    interval: 5e3,
                    pause: "hover",
                    wrap: true,
                    keyboard: true
                },
                Carousel.prototype.keydown = function(t) {
                    if (!/input|textarea/i.test(t.target.tagName)) {
                        switch (t.which) {
                        case 37:
                            this.prev();
                            break;
                        case 39:
                            this.next();
                            break;
                        default:
                            return
                        }
                        t.preventDefault()
                    }
                }
                ,
                Carousel.prototype.cycle = function(e) {
                    return e || (this.paused = false),
                    this.interval && clearInterval(this.interval),
                    this.options.interval && !this.paused && (this.interval = setInterval(t.proxy(this.next, this), this.options.interval)),
                    this
                }
                ,
                Carousel.prototype.getItemIndex = function(t) {
                    return this.$items = t.parent().children(".item"),
                    this.$items.index(t || this.$active)
                }
                ,
                Carousel.prototype.getItemForDirection = function(t, e) {
                    var i = this.getItemIndex(e), n;
                    if (("prev" == t && 0 === i || "next" == t && i == this.$items.length - 1) && !this.options.wrap)
                        return e;
                    var s, o = (i + ("prev" == t ? -1 : 1)) % this.$items.length;
                    return this.$items.eq(o)
                }
                ,
                Carousel.prototype.to = function(t) {
                    var e = this
                      , i = this.getItemIndex(this.$active = this.$element.find(".item.active"));
                    if (!(t > this.$items.length - 1 || t < 0))
                        return this.sliding ? this.$element.one("slid.bs.carousel", (function() {
                            e.to(t)
                        }
                        )) : i == t ? this.pause().cycle() : this.slide(t > i ? "next" : "prev", this.$items.eq(t))
                }
                ,
                Carousel.prototype.pause = function(e) {
                    return e || (this.paused = true),
                    this.$element.find(".next, .prev").length && t.support.transition && (this.$element.trigger(t.support.transition.end),
                    this.cycle(true)),
                    this.interval = clearInterval(this.interval),
                    this
                }
                ,
                Carousel.prototype.next = function() {
                    if (!this.sliding)
                        return this.slide("next")
                }
                ,
                Carousel.prototype.prev = function() {
                    if (!this.sliding)
                        return this.slide("prev")
                }
                ,
                Carousel.prototype.slide = function(type, e) {
                    var i = this.$element.find(".item.active")
                      , n = e || this.getItemForDirection(type, i)
                      , s = this.interval
                      , o = "next" == type ? "left" : "right"
                      , a = this;
                    if (n.hasClass("active"))
                        return this.sliding = false;
                    var l = n[0]
                      , h = t.Event("slide.bs.carousel", {
                        relatedTarget: l,
                        direction: o
                    });
                    if (this.$element.trigger(h),
                    !h.isDefaultPrevented()) {
                        if (this.sliding = true,
                        s && this.pause(),
                        this.$indicators.length) {
                            this.$indicators.find(".active").removeClass("active");
                            var u = t(this.$indicators.children()[this.getItemIndex(n)]);
                            u && u.addClass("active")
                        }
                        var c = t.Event("slid.bs.carousel", {
                            relatedTarget: l,
                            direction: o
                        });
                        return t.support.transition && this.$element.hasClass("slide") ? (n.addClass(type),
                        n[0].offsetWidth,
                        i.addClass(o),
                        n.addClass(o),
                        i.one("bsTransitionEnd", (function() {
                            n.removeClass([type, o].join(" ")).addClass("active"),
                            i.removeClass(["active", o].join(" ")),
                            a.sliding = false,
                            setTimeout((function() {
                                a.$element.trigger(c)
                            }
                            ), 0)
                        }
                        )).emulateTransitionEnd(Carousel.TRANSITION_DURATION)) : (i.removeClass("active"),
                        n.addClass("active"),
                        this.sliding = false,
                        this.$element.trigger(c)),
                        s && this.cycle(),
                        this
                    }
                }
                ;
                var i = t.fn.carousel;
                t.fn.carousel = e,
                t.fn.carousel.Constructor = Carousel,
                t.fn.carousel.noConflict = function() {
                    return t.fn.carousel = i,
                    this
                }
                ;
                var n = function(i) {
                    var n, s = t(this), o = t(s.attr("data-target") || (n = s.attr("href")) && n.replace(/.*(?=#[^\s]+$)/, ""));
                    if (o.hasClass("carousel")) {
                        var a = t.extend({}, o.data(), s.data())
                          , l = s.attr("data-slide-to");
                        l && (a.interval = false),
                        e.call(o, a),
                        l && o.data("bs.carousel").to(l),
                        i.preventDefault()
                    }
                };
                t(document).on("click.bs.carousel.data-api", "[data-slide]", n).on("click.bs.carousel.data-api", "[data-slide-to]", n),
                t(window).on("load", (function() {
                    t('[data-ride="carousel"]').each((function() {
                        var i = t(this);
                        e.call(i, i.data())
                    }
                    ))
                }
                ))
            }(jQuery),
            function(t) {
                "use strict";
                function e(e) {
                    var selector = e.attr("data-target");
                    selector || (selector = (selector = e.attr("href")) && /#[A-Za-z]/.test(selector) && selector.replace(/.*(?=#[^\s]*$)/, ""));
                    var i = selector && t(selector);
                    return i && i.length ? i : e.parent()
                }
                function i(i) {
                    i && 3 === i.which || (t(s).remove(),
                    t(o).each((function() {
                        var n = t(this)
                          , s = e(n)
                          , o = {
                            relatedTarget: this
                        };
                        s.hasClass("open") && (i && "click" == i.type && /input|textarea/i.test(i.target.tagName) && t.contains(s[0], i.target) || (s.trigger(i = t.Event("hide.bs.dropdown", o)),
                        i.isDefaultPrevented() || (n.attr("aria-expanded", "false"),
                        s.removeClass("open").trigger(t.Event("hidden.bs.dropdown", o)))))
                    }
                    )))
                }
                function n(e) {
                    return this.each((function() {
                        var i = t(this)
                          , data = i.data("bs.dropdown");
                        data || i.data("bs.dropdown", data = new Dropdown(this)),
                        "string" == typeof e && data[e].call(i)
                    }
                    ))
                }
                var s = ".dropdown-backdrop"
                  , o = '[data-toggle="dropdown"]'
                  , Dropdown = function(e) {
                    t(e).on("click.bs.dropdown", this.toggle)
                };
                Dropdown.VERSION = "3.3.7",
                Dropdown.prototype.toggle = function(n) {
                    var s = t(this);
                    if (!s.is(".disabled, :disabled")) {
                        var o = e(s)
                          , a = o.hasClass("open");
                        if (i(),
                        !a) {
                            "ontouchstart"in document.documentElement && !o.closest(".navbar-nav").length && t(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(t(this)).on("click", i);
                            var l = {
                                relatedTarget: this
                            };
                            if (o.trigger(n = t.Event("show.bs.dropdown", l)),
                            n.isDefaultPrevented())
                                return;
                            s.trigger("focus").attr("aria-expanded", "true"),
                            o.toggleClass("open").trigger(t.Event("shown.bs.dropdown", l))
                        }
                        return false
                    }
                }
                ,
                Dropdown.prototype.keydown = function(i) {
                    if (/(38|40|27|32)/.test(i.which) && !/input|textarea/i.test(i.target.tagName)) {
                        var n = t(this);
                        if (i.preventDefault(),
                        i.stopPropagation(),
                        !n.is(".disabled, :disabled")) {
                            var s = e(n)
                              , a = s.hasClass("open");
                            if (!a && 27 != i.which || a && 27 == i.which)
                                return 27 == i.which && s.find(o).trigger("focus"),
                                n.trigger("click");
                            var l = " li:not(.disabled):visible a"
                              , h = s.find(".dropdown-menu" + l);
                            if (h.length) {
                                var index = h.index(i.target);
                                38 == i.which && index > 0 && index--,
                                40 == i.which && index < h.length - 1 && index++,
                                ~index || (index = 0),
                                h.eq(index).trigger("focus")
                            }
                        }
                    }
                }
                ;
                var a = t.fn.dropdown;
                t.fn.dropdown = n,
                t.fn.dropdown.Constructor = Dropdown,
                t.fn.dropdown.noConflict = function() {
                    return t.fn.dropdown = a,
                    this
                }
                ,
                t(document).on("click.bs.dropdown.data-api", i).on("click.bs.dropdown.data-api", ".dropdown form", (function(t) {
                    t.stopPropagation()
                }
                )).on("click.bs.dropdown.data-api", o, Dropdown.prototype.toggle).on("keydown.bs.dropdown.data-api", o, Dropdown.prototype.keydown).on("keydown.bs.dropdown.data-api", ".dropdown-menu", Dropdown.prototype.keydown)
            }(jQuery),
            function(t) {
                "use strict";
                function e(e, i) {
                    return this.each((function() {
                        var n = t(this)
                          , data = n.data("bs.modal")
                          , s = t.extend({}, Modal.DEFAULTS, n.data(), "object" == typeof e && e);
                        data || n.data("bs.modal", data = new Modal(this,s)),
                        "string" == typeof e ? data[e](i) : s.show && data.show(i)
                    }
                    ))
                }
                var Modal = function(e, i) {
                    this.options = i,
                    this.$body = t(document.body),
                    this.$element = t(e),
                    this.$dialog = this.$element.find(".modal-dialog"),
                    this.$backdrop = null,
                    this.isShown = null,
                    this.originalBodyPad = null,
                    this.scrollbarWidth = 0,
                    this.ignoreBackdropClick = false,
                    this.options.remote && this.$element.find(".modal-content").load(this.options.remote, t.proxy((function() {
                        this.$element.trigger("loaded.bs.modal")
                    }
                    ), this))
                };
                Modal.VERSION = "3.3.7",
                Modal.TRANSITION_DURATION = 300,
                Modal.BACKDROP_TRANSITION_DURATION = 150,
                Modal.DEFAULTS = {
                    backdrop: true,
                    keyboard: true,
                    show: true
                },
                Modal.prototype.toggle = function(t) {
                    return this.isShown ? this.hide() : this.show(t)
                }
                ,
                Modal.prototype.show = function(e) {
                    var i = this
                      , n = t.Event("show.bs.modal", {
                        relatedTarget: e
                    });
                    this.$element.trigger(n),
                    this.isShown || n.isDefaultPrevented() || (this.isShown = true,
                    this.checkScrollbar(),
                    this.setScrollbar(),
                    this.$body.addClass("modal-open"),
                    this.escape(),
                    this.resize(),
                    this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', t.proxy(this.hide, this)),
                    this.$dialog.on("mousedown.dismiss.bs.modal", (function() {
                        i.$element.one("mouseup.dismiss.bs.modal", (function(e) {
                            t(e.target).is(i.$element) && (i.ignoreBackdropClick = true)
                        }
                        ))
                    }
                    )),
                    this.backdrop((function() {
                        var n = t.support.transition && i.$element.hasClass("fade");
                        i.$element.parent().length || i.$element.appendTo(i.$body),
                        i.$element.show().scrollTop(0),
                        i.adjustDialog(),
                        n && i.$element[0].offsetWidth,
                        i.$element.addClass("in"),
                        i.enforceFocus();
                        var s = t.Event("shown.bs.modal", {
                            relatedTarget: e
                        });
                        n ? i.$dialog.one("bsTransitionEnd", (function() {
                            i.$element.trigger("focus").trigger(s)
                        }
                        )).emulateTransitionEnd(Modal.TRANSITION_DURATION) : i.$element.trigger("focus").trigger(s)
                    }
                    )))
                }
                ,
                Modal.prototype.hide = function(e) {
                    e && e.preventDefault(),
                    e = t.Event("hide.bs.modal"),
                    this.$element.trigger(e),
                    this.isShown && !e.isDefaultPrevented() && (this.isShown = false,
                    this.escape(),
                    this.resize(),
                    t(document).off("focusin.bs.modal"),
                    this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"),
                    this.$dialog.off("mousedown.dismiss.bs.modal"),
                    t.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", t.proxy(this.hideModal, this)).emulateTransitionEnd(Modal.TRANSITION_DURATION) : this.hideModal())
                }
                ,
                Modal.prototype.enforceFocus = function() {
                    t(document).off("focusin.bs.modal").on("focusin.bs.modal", t.proxy((function(t) {
                        document === t.target || this.$element[0] === t.target || this.$element.has(t.target).length || this.$element.trigger("focus")
                    }
                    ), this))
                }
                ,
                Modal.prototype.escape = function() {
                    this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", t.proxy((function(t) {
                        27 == t.which && this.hide()
                    }
                    ), this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal")
                }
                ,
                Modal.prototype.resize = function() {
                    this.isShown ? t(window).on("resize.bs.modal", t.proxy(this.handleUpdate, this)) : t(window).off("resize.bs.modal")
                }
                ,
                Modal.prototype.hideModal = function() {
                    var t = this;
                    this.$element.hide(),
                    this.backdrop((function() {
                        t.$body.removeClass("modal-open"),
                        t.resetAdjustments(),
                        t.resetScrollbar(),
                        t.$element.trigger("hidden.bs.modal")
                    }
                    ))
                }
                ,
                Modal.prototype.removeBackdrop = function() {
                    this.$backdrop && this.$backdrop.remove(),
                    this.$backdrop = null
                }
                ,
                Modal.prototype.backdrop = function(e) {
                    var i = this
                      , n = this.$element.hasClass("fade") ? "fade" : "";
                    if (this.isShown && this.options.backdrop) {
                        var s = t.support.transition && n;
                        if (this.$backdrop = t(document.createElement("div")).addClass("modal-backdrop " + n).appendTo(this.$body),
                        this.$element.on("click.dismiss.bs.modal", t.proxy((function(t) {
                            if (this.ignoreBackdropClick)
                                return this.ignoreBackdropClick = false,
                                void 0;
                            t.target === t.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus() : this.hide())
                        }
                        ), this)),
                        s && this.$backdrop[0].offsetWidth,
                        this.$backdrop.addClass("in"),
                        !e)
                            return;
                        s ? this.$backdrop.one("bsTransitionEnd", e).emulateTransitionEnd(Modal.BACKDROP_TRANSITION_DURATION) : e()
                    } else if (!this.isShown && this.$backdrop) {
                        this.$backdrop.removeClass("in");
                        var o = function() {
                            i.removeBackdrop(),
                            e && e()
                        };
                        t.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", o).emulateTransitionEnd(Modal.BACKDROP_TRANSITION_DURATION) : o()
                    } else
                        e && e()
                }
                ,
                Modal.prototype.handleUpdate = function() {
                    this.adjustDialog()
                }
                ,
                Modal.prototype.adjustDialog = function() {
                    var t = this.$element[0].scrollHeight > document.documentElement.clientHeight;
                    this.$element.css({
                        paddingLeft: !this.bodyIsOverflowing && t ? this.scrollbarWidth : "",
                        paddingRight: this.bodyIsOverflowing && !t ? this.scrollbarWidth : ""
                    })
                }
                ,
                Modal.prototype.resetAdjustments = function() {
                    this.$element.css({
                        paddingLeft: "",
                        paddingRight: ""
                    })
                }
                ,
                Modal.prototype.checkScrollbar = function() {
                    var t = window.innerWidth;
                    if (!t) {
                        var e = document.documentElement.getBoundingClientRect();
                        t = e.right - Math.abs(e.left)
                    }
                    this.bodyIsOverflowing = document.body.clientWidth < t,
                    this.scrollbarWidth = this.measureScrollbar()
                }
                ,
                Modal.prototype.setScrollbar = function() {
                    var t = parseInt(this.$body.css("padding-right") || 0, 10);
                    this.originalBodyPad = document.body.style.paddingRight || "",
                    this.bodyIsOverflowing && this.$body.css("padding-right", t + this.scrollbarWidth)
                }
                ,
                Modal.prototype.resetScrollbar = function() {
                    this.$body.css("padding-right", this.originalBodyPad)
                }
                ,
                Modal.prototype.measureScrollbar = function() {
                    var t = document.createElement("div");
                    t.className = "modal-scrollbar-measure",
                    this.$body.append(t);
                    var e = t.offsetWidth - t.clientWidth;
                    return this.$body[0].removeChild(t),
                    e
                }
                ;
                var i = t.fn.modal;
                t.fn.modal = e,
                t.fn.modal.Constructor = Modal,
                t.fn.modal.noConflict = function() {
                    return t.fn.modal = i,
                    this
                }
                ,
                t(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', (function(i) {
                    var n = t(this)
                      , s = n.attr("href")
                      , o = t(n.attr("data-target") || s && s.replace(/.*(?=#[^\s]+$)/, ""))
                      , a = o.data("bs.modal") ? "toggle" : t.extend({
                        remote: !/#/.test(s) && s
                    }, o.data(), n.data());
                    n.is("a") && i.preventDefault(),
                    o.one("show.bs.modal", (function(t) {
                        t.isDefaultPrevented() || o.one("hidden.bs.modal", (function() {
                            n.is(":visible") && n.trigger("focus")
                        }
                        ))
                    }
                    )),
                    e.call(o, a, this)
                }
                ))
            }(jQuery),
            function(t) {
                "use strict";
                function e(e) {
                    return this.each((function() {
                        var i = t(this)
                          , data = i.data("bs.tooltip")
                          , n = "object" == typeof e && e;
                        !data && /destroy|hide/.test(e) || (data || i.data("bs.tooltip", data = new Tooltip(this,n)),
                        "string" == typeof e && data[e]())
                    }
                    ))
                }
                var Tooltip = function(t, e) {
                    this.type = null,
                    this.options = null,
                    this.enabled = null,
                    this.timeout = null,
                    this.hoverState = null,
                    this.$element = null,
                    this.inState = null,
                    this.init("tooltip", t, e)
                };
                Tooltip.VERSION = "3.3.7",
                Tooltip.TRANSITION_DURATION = 150,
                Tooltip.DEFAULTS = {
                    animation: true,
                    placement: "top",
                    selector: false,
                    template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
                    trigger: "hover focus",
                    title: "",
                    delay: 0,
                    html: false,
                    container: false,
                    viewport: {
                        selector: "body",
                        padding: 0
                    }
                },
                Tooltip.prototype.init = function(type, e, i) {
                    if (this.enabled = true,
                    this.type = type,
                    this.$element = t(e),
                    this.options = this.getOptions(i),
                    this.$viewport = this.options.viewport && t(t.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : this.options.viewport.selector || this.options.viewport),
                    this.inState = {
                        click: false,
                        hover: false,
                        focus: false
                    },
                    this.$element[0]instanceof document.constructor && !this.options.selector)
                        throw new Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!");
                    for (var n = this.options.trigger.split(" "), s = n.length; s--; ) {
                        var o = n[s];
                        if ("click" == o)
                            this.$element.on("click." + this.type, this.options.selector, t.proxy(this.toggle, this));
                        else if ("manual" != o) {
                            var a = "hover" == o ? "mouseenter" : "focusin"
                              , l = "hover" == o ? "mouseleave" : "focusout";
                            this.$element.on(a + "." + this.type, this.options.selector, t.proxy(this.enter, this)),
                            this.$element.on(l + "." + this.type, this.options.selector, t.proxy(this.leave, this))
                        }
                    }
                    this.options.selector ? this._options = t.extend({}, this.options, {
                        trigger: "manual",
                        selector: ""
                    }) : this.fixTitle()
                }
                ,
                Tooltip.prototype.getDefaults = function() {
                    return Tooltip.DEFAULTS
                }
                ,
                Tooltip.prototype.getOptions = function(e) {
                    return (e = t.extend({}, this.getDefaults(), this.$element.data(), e)).delay && "number" == typeof e.delay && (e.delay = {
                        show: e.delay,
                        hide: e.delay
                    }),
                    e
                }
                ,
                Tooltip.prototype.getDelegateOptions = function() {
                    var e = {}
                      , i = this.getDefaults();
                    return this._options && t.each(this._options, (function(t, n) {
                        i[t] != n && (e[t] = n)
                    }
                    )),
                    e
                }
                ,
                Tooltip.prototype.enter = function(e) {
                    var i = e instanceof this.constructor ? e : t(e.currentTarget).data("bs." + this.type);
                    return i || (i = new this.constructor(e.currentTarget,this.getDelegateOptions()),
                    t(e.currentTarget).data("bs." + this.type, i)),
                    e instanceof t.Event && (i.inState["focusin" == e.type ? "focus" : "hover"] = true),
                    i.tip().hasClass("in") || "in" == i.hoverState ? (i.hoverState = "in",
                    void 0) : (clearTimeout(i.timeout),
                    i.hoverState = "in",
                    i.options.delay && i.options.delay.show ? (i.timeout = setTimeout((function() {
                        "in" == i.hoverState && i.show()
                    }
                    ), i.options.delay.show),
                    void 0) : i.show())
                }
                ,
                Tooltip.prototype.isInStateTrue = function() {
                    for (var t in this.inState)
                        if (this.inState[t])
                            return true;
                    return false
                }
                ,
                Tooltip.prototype.leave = function(e) {
                    var i = e instanceof this.constructor ? e : t(e.currentTarget).data("bs." + this.type);
                    if (i || (i = new this.constructor(e.currentTarget,this.getDelegateOptions()),
                    t(e.currentTarget).data("bs." + this.type, i)),
                    e instanceof t.Event && (i.inState["focusout" == e.type ? "focus" : "hover"] = false),
                    !i.isInStateTrue()) {
                        if (clearTimeout(i.timeout),
                        i.hoverState = "out",
                        !i.options.delay || !i.options.delay.hide)
                            return i.hide();
                        i.timeout = setTimeout((function() {
                            "out" == i.hoverState && i.hide()
                        }
                        ), i.options.delay.hide)
                    }
                }
                ,
                Tooltip.prototype.show = function() {
                    var e = t.Event("show.bs." + this.type);
                    if (this.hasContent() && this.enabled) {
                        this.$element.trigger(e);
                        var i = t.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
                        if (e.isDefaultPrevented() || !i)
                            return;
                        var n = this
                          , s = this.tip()
                          , o = this.getUID(this.type);
                        this.setContent(),
                        s.attr("id", o),
                        this.$element.attr("aria-describedby", o),
                        this.options.animation && s.addClass("fade");
                        var a = "function" == typeof this.options.placement ? this.options.placement.call(this, s[0], this.$element[0]) : this.options.placement
                          , l = /\s?auto?\s?/i
                          , h = l.test(a);
                        h && (a = a.replace(l, "") || "top"),
                        s.detach().css({
                            top: 0,
                            left: 0,
                            display: "block"
                        }).addClass(a).data("bs." + this.type, this),
                        this.options.container ? s.appendTo(this.options.container) : s.insertAfter(this.$element),
                        this.$element.trigger("inserted.bs." + this.type);
                        var u = this.getPosition()
                          , c = s[0].offsetWidth
                          , p = s[0].offsetHeight;
                        if (h) {
                            var f = a
                              , m = this.getPosition(this.$viewport);
                            a = "bottom" == a && u.bottom + p > m.bottom ? "top" : "top" == a && u.top - p < m.top ? "bottom" : "right" == a && u.right + c > m.width ? "left" : "left" == a && u.left - c < m.left ? "right" : a,
                            s.removeClass(f).addClass(a)
                        }
                        var g = this.getCalculatedOffset(a, u, c, p);
                        this.applyPlacement(g, a);
                        var v = function() {
                            var t = n.hoverState;
                            n.$element.trigger("shown.bs." + n.type),
                            n.hoverState = null,
                            "out" == t && n.leave(n)
                        };
                        t.support.transition && this.$tip.hasClass("fade") ? s.one("bsTransitionEnd", v).emulateTransitionEnd(Tooltip.TRANSITION_DURATION) : v()
                    }
                }
                ,
                Tooltip.prototype.applyPlacement = function(e, i) {
                    var n = this.tip()
                      , s = n[0].offsetWidth
                      , o = n[0].offsetHeight
                      , a = parseInt(n.css("margin-top"), 10)
                      , l = parseInt(n.css("margin-left"), 10);
                    isNaN(a) && (a = 0),
                    isNaN(l) && (l = 0),
                    e.top += a,
                    e.left += l,
                    t.offset.setOffset(n[0], t.extend({
                        using: function(props) {
                            n.css({
                                top: Math.round(props.top),
                                left: Math.round(props.left)
                            })
                        }
                    }, e), 0),
                    n.addClass("in");
                    var h = n[0].offsetWidth
                      , u = n[0].offsetHeight;
                    "top" == i && u != o && (e.top = e.top + o - u);
                    var c = this.getViewportAdjustedDelta(i, e, h, u);
                    c.left ? e.left += c.left : e.top += c.top;
                    var p = /top|bottom/.test(i)
                      , f = p ? 2 * c.left - s + h : 2 * c.top - o + u
                      , m = p ? "offsetWidth" : "offsetHeight";
                    n.offset(e),
                    this.replaceArrow(f, n[0][m], p)
                }
                ,
                Tooltip.prototype.replaceArrow = function(t, e, i) {
                    this.arrow().css(i ? "left" : "top", 50 * (1 - t / e) + "%").css(i ? "top" : "left", "")
                }
                ,
                Tooltip.prototype.setContent = function() {
                    var t = this.tip()
                      , title = this.getTitle();
                    t.find(".tooltip-inner")[this.options.html ? "html" : "text"](title),
                    t.removeClass("fade in top bottom left right")
                }
                ,
                Tooltip.prototype.hide = function(e) {
                    function i() {
                        "in" != n.hoverState && s.detach(),
                        n.$element && n.$element.removeAttr("aria-describedby").trigger("hidden.bs." + n.type),
                        e && e()
                    }
                    var n = this
                      , s = t(this.$tip)
                      , o = t.Event("hide.bs." + this.type);
                    if (this.$element.trigger(o),
                    !o.isDefaultPrevented())
                        return s.removeClass("in"),
                        t.support.transition && s.hasClass("fade") ? s.one("bsTransitionEnd", i).emulateTransitionEnd(Tooltip.TRANSITION_DURATION) : i(),
                        this.hoverState = null,
                        this
                }
                ,
                Tooltip.prototype.fixTitle = function() {
                    var t = this.$element;
                    (t.attr("title") || "string" != typeof t.attr("data-original-title")) && t.attr("data-original-title", t.attr("title") || "").attr("title", "")
                }
                ,
                Tooltip.prototype.hasContent = function() {
                    return this.getTitle()
                }
                ,
                Tooltip.prototype.getPosition = function(e) {
                    var el = (e = e || this.$element)[0]
                      , i = "BODY" == el.tagName
                      , n = el.getBoundingClientRect();
                    null == n.width && (n = t.extend({}, n, {
                        width: n.right - n.left,
                        height: n.bottom - n.top
                    }));
                    var s = window.SVGElement && el instanceof window.SVGElement
                      , o = i ? {
                        top: 0,
                        left: 0
                    } : s ? null : e.offset()
                      , a = {
                        scroll: i ? document.documentElement.scrollTop || document.body.scrollTop : e.scrollTop()
                    }
                      , l = i ? {
                        width: t(window).width(),
                        height: t(window).height()
                    } : null;
                    return t.extend({}, n, a, l, o)
                }
                ,
                Tooltip.prototype.getCalculatedOffset = function(t, e, i, n) {
                    return "bottom" == t ? {
                        top: e.top + e.height,
                        left: e.left + e.width / 2 - i / 2
                    } : "top" == t ? {
                        top: e.top - n,
                        left: e.left + e.width / 2 - i / 2
                    } : "left" == t ? {
                        top: e.top + e.height / 2 - n / 2,
                        left: e.left - i
                    } : {
                        top: e.top + e.height / 2 - n / 2,
                        left: e.left + e.width
                    }
                }
                ,
                Tooltip.prototype.getViewportAdjustedDelta = function(t, e, i, n) {
                    var s = {
                        top: 0,
                        left: 0
                    };
                    if (!this.$viewport)
                        return s;
                    var o = this.options.viewport && this.options.viewport.padding || 0
                      , a = this.getPosition(this.$viewport);
                    if (/right|left/.test(t)) {
                        var l = e.top - o - a.scroll
                          , h = e.top + o - a.scroll + n;
                        l < a.top ? s.top = a.top - l : h > a.top + a.height && (s.top = a.top + a.height - h)
                    } else {
                        var u = e.left - o
                          , c = e.left + o + i;
                        u < a.left ? s.left = a.left - u : c > a.right && (s.left = a.left + a.width - c)
                    }
                    return s
                }
                ,
                Tooltip.prototype.getTitle = function() {
                    var title, t = this.$element, e = this.options;
                    return title = t.attr("data-original-title") || ("function" == typeof e.title ? e.title.call(t[0]) : e.title)
                }
                ,
                Tooltip.prototype.getUID = function(t) {
                    do {
                        t += ~~(1e6 * Math.random())
                    } while (document.getElementById(t));
                    return t
                }
                ,
                Tooltip.prototype.tip = function() {
                    if (!this.$tip && (this.$tip = t(this.options.template),
                    1 != this.$tip.length))
                        throw new Error(this.type + " `template` option must consist of exactly 1 top-level element!");
                    return this.$tip
                }
                ,
                Tooltip.prototype.arrow = function() {
                    return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
                }
                ,
                Tooltip.prototype.enable = function() {
                    this.enabled = true
                }
                ,
                Tooltip.prototype.disable = function() {
                    this.enabled = false
                }
                ,
                Tooltip.prototype.toggleEnabled = function() {
                    this.enabled = !this.enabled
                }
                ,
                Tooltip.prototype.toggle = function(e) {
                    var i = this;
                    e && ((i = t(e.currentTarget).data("bs." + this.type)) || (i = new this.constructor(e.currentTarget,this.getDelegateOptions()),
                    t(e.currentTarget).data("bs." + this.type, i))),
                    e ? (i.inState.click = !i.inState.click,
                    i.isInStateTrue() ? i.enter(i) : i.leave(i)) : i.tip().hasClass("in") ? i.leave(i) : i.enter(i)
                }
                ,
                Tooltip.prototype.destroy = function() {
                    var t = this;
                    clearTimeout(this.timeout),
                    this.hide((function() {
                        t.$element.off("." + t.type).removeData("bs." + t.type),
                        t.$tip && t.$tip.detach(),
                        t.$tip = null,
                        t.$arrow = null,
                        t.$viewport = null,
                        t.$element = null
                    }
                    ))
                }
                ;
                var i = t.fn.tooltip;
                t.fn.tooltip = e,
                t.fn.tooltip.Constructor = Tooltip,
                t.fn.tooltip.noConflict = function() {
                    return t.fn.tooltip = i,
                    this
                }
            }(jQuery),
            function(t) {
                "use strict";
                function e(e) {
                    return this.each((function() {
                        var n = t(this)
                          , data = n.data("bs.popover")
                          , s = "object" == typeof e && e;
                        !data && /destroy|hide/.test(e) || (data || n.data("bs.popover", data = new i(this,s)),
                        "string" == typeof e && data[e]())
                    }
                    ))
                }
                var i = function(t, e) {
                    this.init("popover", t, e)
                };
                if (!t.fn.tooltip)
                    throw new Error("Popover requires tooltip.js");
                i.VERSION = "3.3.7",
                i.DEFAULTS = t.extend({}, t.fn.tooltip.Constructor.DEFAULTS, {
                    placement: "right",
                    trigger: "click",
                    content: "",
                    template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
                }),
                (i.prototype = t.extend({}, t.fn.tooltip.Constructor.prototype)).constructor = i,
                i.prototype.getDefaults = function() {
                    return i.DEFAULTS
                }
                ,
                i.prototype.setContent = function() {
                    var t = this.tip()
                      , title = this.getTitle()
                      , e = this.getContent();
                    t.find(".popover-title")[this.options.html ? "html" : "text"](title),
                    t.find(".popover-content").children().detach().end()[this.options.html ? "string" == typeof e ? "html" : "append" : "text"](e),
                    t.removeClass("fade top bottom left right in"),
                    t.find(".popover-title").html() || t.find(".popover-title").hide()
                }
                ,
                i.prototype.hasContent = function() {
                    return this.getTitle() || this.getContent()
                }
                ,
                i.prototype.getContent = function() {
                    var t = this.$element
                      , e = this.options;
                    return t.attr("data-content") || ("function" == typeof e.content ? e.content.call(t[0]) : e.content)
                }
                ,
                i.prototype.arrow = function() {
                    return this.$arrow = this.$arrow || this.tip().find(".arrow")
                }
                ;
                var n = t.fn.popover;
                t.fn.popover = e,
                t.fn.popover.Constructor = i,
                t.fn.popover.noConflict = function() {
                    return t.fn.popover = n,
                    this
                }
            }(jQuery),
            function(t) {
                "use strict";
                function e(e) {
                    return this.each((function() {
                        var n = t(this)
                          , data = n.data("bs.tab");
                        data || n.data("bs.tab", data = new i(this)),
                        "string" == typeof e && data[e]()
                    }
                    ))
                }
                var i = function(e) {
                    this.element = t(e)
                };
                i.VERSION = "3.3.7",
                i.TRANSITION_DURATION = 150,
                i.prototype.show = function() {
                    var e = this.element
                      , i = e.closest("ul:not(.dropdown-menu)")
                      , selector = e.data("target");
                    if (selector || (selector = (selector = e.attr("href")) && selector.replace(/.*(?=#[^\s]*$)/, "")),
                    !e.parent("li").hasClass("active")) {
                        var n = i.find(".active:last a")
                          , s = t.Event("hide.bs.tab", {
                            relatedTarget: e[0]
                        })
                          , o = t.Event("show.bs.tab", {
                            relatedTarget: n[0]
                        });
                        if (n.trigger(s),
                        e.trigger(o),
                        !o.isDefaultPrevented() && !s.isDefaultPrevented()) {
                            var a = t(selector);
                            this.activate(e.closest("li"), i),
                            this.activate(a, a.parent(), (function() {
                                n.trigger({
                                    type: "hidden.bs.tab",
                                    relatedTarget: e[0]
                                }),
                                e.trigger({
                                    type: "shown.bs.tab",
                                    relatedTarget: n[0]
                                })
                            }
                            ))
                        }
                    }
                }
                ,
                i.prototype.activate = function(e, container, n) {
                    function s() {
                        o.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", false),
                        e.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", true),
                        a ? (e[0].offsetWidth,
                        e.addClass("in")) : e.removeClass("fade"),
                        e.parent(".dropdown-menu").length && e.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", true),
                        n && n()
                    }
                    var o = container.find("> .active")
                      , a = n && t.support.transition && (o.length && o.hasClass("fade") || !!container.find("> .fade").length);
                    o.length && a ? o.one("bsTransitionEnd", s).emulateTransitionEnd(i.TRANSITION_DURATION) : s(),
                    o.removeClass("in")
                }
                ;
                var n = t.fn.tab;
                t.fn.tab = e,
                t.fn.tab.Constructor = i,
                t.fn.tab.noConflict = function() {
                    return t.fn.tab = n,
                    this
                }
                ;
                var s = function(i) {
                    i.preventDefault(),
                    e.call(t(this), "show")
                };
                t(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', s).on("click.bs.tab.data-api", '[data-toggle="pill"]', s)
            }(jQuery),
            function(t) {
                "use strict";
                function e(e) {
                    return this.each((function() {
                        var n = t(this)
                          , data = n.data("bs.affix")
                          , s = "object" == typeof e && e;
                        data || n.data("bs.affix", data = new i(this,s)),
                        "string" == typeof e && data[e]()
                    }
                    ))
                }
                var i = function(e, n) {
                    this.options = t.extend({}, i.DEFAULTS, n),
                    this.$target = t(this.options.target).on("scroll.bs.affix.data-api", t.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", t.proxy(this.checkPositionWithEventLoop, this)),
                    this.$element = t(e),
                    this.affixed = null,
                    this.unpin = null,
                    this.pinnedOffset = null,
                    this.checkPosition()
                };
                i.VERSION = "3.3.7",
                i.RESET = "affix affix-top affix-bottom",
                i.DEFAULTS = {
                    offset: 0,
                    target: window
                },
                i.prototype.getState = function(t, e, i, n) {
                    var s = this.$target.scrollTop()
                      , position = this.$element.offset()
                      , o = this.$target.height();
                    if (null != i && "top" == this.affixed)
                        return s < i && "top";
                    if ("bottom" == this.affixed)
                        return null != i ? !(s + this.unpin <= position.top) && "bottom" : !(s + o <= t - n) && "bottom";
                    var a = null == this.affixed, l = a ? s : position.top, h;
                    return null != i && s <= i ? "top" : null != n && l + (a ? o : e) >= t - n && "bottom"
                }
                ,
                i.prototype.getPinnedOffset = function() {
                    if (this.pinnedOffset)
                        return this.pinnedOffset;
                    this.$element.removeClass(i.RESET).addClass("affix");
                    var t = this.$target.scrollTop()
                      , position = this.$element.offset();
                    return this.pinnedOffset = position.top - t
                }
                ,
                i.prototype.checkPositionWithEventLoop = function() {
                    setTimeout(t.proxy(this.checkPosition, this), 1)
                }
                ,
                i.prototype.checkPosition = function() {
                    if (this.$element.is(":visible")) {
                        var e = this.$element.height()
                          , n = this.options.offset
                          , s = n.top
                          , o = n.bottom
                          , a = Math.max(t(document).height(), t(document.body).height());
                        "object" != typeof n && (o = s = n),
                        "function" == typeof s && (s = n.top(this.$element)),
                        "function" == typeof o && (o = n.bottom(this.$element));
                        var l = this.getState(a, e, s, o);
                        if (this.affixed != l) {
                            null != this.unpin && this.$element.css("top", "");
                            var h = "affix" + (l ? "-" + l : "")
                              , u = t.Event(h + ".bs.affix");
                            if (this.$element.trigger(u),
                            u.isDefaultPrevented())
                                return;
                            this.affixed = l,
                            this.unpin = "bottom" == l ? this.getPinnedOffset() : null,
                            this.$element.removeClass(i.RESET).addClass(h).trigger(h.replace("affix", "affixed") + ".bs.affix")
                        }
                        "bottom" == l && this.$element.offset({
                            top: a - e - o
                        })
                    }
                }
                ;
                var n = t.fn.affix;
                t.fn.affix = e,
                t.fn.affix.Constructor = i,
                t.fn.affix.noConflict = function() {
                    return t.fn.affix = n,
                    this
                }
                ,
                t(window).on("load", (function() {
                    t('[data-spy="affix"]').each((function() {
                        var i = t(this)
                          , data = i.data();
                        data.offset = data.offset || {},
                        null != data.offsetBottom && (data.offset.bottom = data.offsetBottom),
                        null != data.offsetTop && (data.offset.top = data.offsetTop),
                        e.call(i, data)
                    }
                    ))
                }
                ))
            }(jQuery),
            function(t) {
                "use strict";
                function e(e) {
                    var i, n = e.attr("data-target") || (i = e.attr("href")) && i.replace(/.*(?=#[^\s]+$)/, "");
                    return t(n)
                }
                function i(e) {
                    return this.each((function() {
                        var i = t(this)
                          , data = i.data("bs.collapse")
                          , n = t.extend({}, Collapse.DEFAULTS, i.data(), "object" == typeof e && e);
                        !data && n.toggle && /show|hide/.test(e) && (n.toggle = false),
                        data || i.data("bs.collapse", data = new Collapse(this,n)),
                        "string" == typeof e && data[e]()
                    }
                    ))
                }
                var Collapse = function(e, i) {
                    this.$element = t(e),
                    this.options = t.extend({}, Collapse.DEFAULTS, i),
                    this.$trigger = t('[data-toggle="collapse"][href="#' + e.id + '"],[data-toggle="collapse"][data-target="#' + e.id + '"]'),
                    this.transitioning = null,
                    this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger),
                    this.options.toggle && this.toggle()
                };
                Collapse.VERSION = "3.3.7",
                Collapse.TRANSITION_DURATION = 350,
                Collapse.DEFAULTS = {
                    toggle: true
                },
                Collapse.prototype.dimension = function() {
                    var t;
                    return this.$element.hasClass("width") ? "width" : "height"
                }
                ,
                Collapse.prototype.show = function() {
                    if (!this.transitioning && !this.$element.hasClass("in")) {
                        var e, n = this.$parent && this.$parent.children(".panel").children(".in, .collapsing");
                        if (!(n && n.length && (e = n.data("bs.collapse")) && e.transitioning)) {
                            var s = t.Event("show.bs.collapse");
                            if (this.$element.trigger(s),
                            !s.isDefaultPrevented()) {
                                n && n.length && (i.call(n, "hide"),
                                e || n.data("bs.collapse", null));
                                var o = this.dimension();
                                this.$element.removeClass("collapse").addClass("collapsing")[o](0).attr("aria-expanded", true),
                                this.$trigger.removeClass("collapsed").attr("aria-expanded", true),
                                this.transitioning = 1;
                                var a = function() {
                                    this.$element.removeClass("collapsing").addClass("collapse in")[o](""),
                                    this.transitioning = 0,
                                    this.$element.trigger("shown.bs.collapse")
                                };
                                if (!t.support.transition)
                                    return a.call(this);
                                var l = t.camelCase(["scroll", o].join("-"));
                                this.$element.one("bsTransitionEnd", t.proxy(a, this)).emulateTransitionEnd(Collapse.TRANSITION_DURATION)[o](this.$element[0][l])
                            }
                        }
                    }
                }
                ,
                Collapse.prototype.hide = function() {
                    if (!this.transitioning && this.$element.hasClass("in")) {
                        var e = t.Event("hide.bs.collapse");
                        if (this.$element.trigger(e),
                        !e.isDefaultPrevented()) {
                            var i = this.dimension();
                            this.$element[i](this.$element[i]())[0].offsetHeight,
                            this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", false),
                            this.$trigger.addClass("collapsed").attr("aria-expanded", false),
                            this.transitioning = 1;
                            var n = function() {
                                this.transitioning = 0,
                                this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
                            };
                            if (!t.support.transition)
                                return n.call(this);
                            this.$element[i](0).one("bsTransitionEnd", t.proxy(n, this)).emulateTransitionEnd(Collapse.TRANSITION_DURATION)
                        }
                    }
                }
                ,
                Collapse.prototype.toggle = function() {
                    this[this.$element.hasClass("in") ? "hide" : "show"]()
                }
                ,
                Collapse.prototype.getParent = function() {
                    return t(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(t.proxy((function(i, n) {
                        var s = t(n);
                        this.addAriaAndCollapsedClass(e(s), s)
                    }
                    ), this)).end()
                }
                ,
                Collapse.prototype.addAriaAndCollapsedClass = function(t, e) {
                    var i = t.hasClass("in");
                    t.attr("aria-expanded", i),
                    e.toggleClass("collapsed", !i).attr("aria-expanded", i)
                }
                ;
                var n = t.fn.collapse;
                t.fn.collapse = i,
                t.fn.collapse.Constructor = Collapse,
                t.fn.collapse.noConflict = function() {
                    return t.fn.collapse = n,
                    this
                }
                ,
                t(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', (function(n) {
                    var s = t(this);
                    s.attr("data-target") || n.preventDefault();
                    var o = e(s), data, a = o.data("bs.collapse") ? "toggle" : s.data();
                    i.call(o, a)
                }
                ))
            }(jQuery),
            function(t) {
                "use strict";
                function e(i, n) {
                    this.$body = t(document.body),
                    this.$scrollElement = t(i).is(document.body) ? t(window) : t(i),
                    this.options = t.extend({}, e.DEFAULTS, n),
                    this.selector = (this.options.target || "") + " .nav li > a",
                    this.offsets = [],
                    this.targets = [],
                    this.activeTarget = null,
                    this.scrollHeight = 0,
                    this.$scrollElement.on("scroll.bs.scrollspy", t.proxy(this.process, this)),
                    this.refresh(),
                    this.process()
                }
                function i(i) {
                    return this.each((function() {
                        var n = t(this)
                          , data = n.data("bs.scrollspy")
                          , s = "object" == typeof i && i;
                        data || n.data("bs.scrollspy", data = new e(this,s)),
                        "string" == typeof i && data[i]()
                    }
                    ))
                }
                e.VERSION = "3.3.7",
                e.DEFAULTS = {
                    offset: 10
                },
                e.prototype.getScrollHeight = function() {
                    return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
                }
                ,
                e.prototype.refresh = function() {
                    var e = this
                      , i = "offset"
                      , n = 0;
                    this.offsets = [],
                    this.targets = [],
                    this.scrollHeight = this.getScrollHeight(),
                    t.isWindow(this.$scrollElement[0]) || (i = "position",
                    n = this.$scrollElement.scrollTop()),
                    this.$body.find(this.selector).map((function() {
                        var e = t(this)
                          , s = e.data("target") || e.attr("href")
                          , o = /^#./.test(s) && t(s);
                        return o && o.length && o.is(":visible") && [[o[i]().top + n, s]] || null
                    }
                    )).sort((function(t, e) {
                        return t[0] - e[0]
                    }
                    )).each((function() {
                        e.offsets.push(this[0]),
                        e.targets.push(this[1])
                    }
                    ))
                }
                ,
                e.prototype.process = function() {
                    var t = this.$scrollElement.scrollTop() + this.options.offset, e = this.getScrollHeight(), i = this.options.offset + e - this.$scrollElement.height(), n = this.offsets, s = this.targets, o = this.activeTarget, a;
                    if (this.scrollHeight != e && this.refresh(),
                    t >= i)
                        return o != (a = s[s.length - 1]) && this.activate(a);
                    if (o && t < n[0])
                        return this.activeTarget = null,
                        this.clear();
                    for (a = n.length; a--; )
                        o != s[a] && t >= n[a] && (void 0 === n[a + 1] || t < n[a + 1]) && this.activate(s[a])
                }
                ,
                e.prototype.activate = function(e) {
                    this.activeTarget = e,
                    this.clear();
                    var selector = this.selector + '[data-target="' + e + '"],' + this.selector + '[href="' + e + '"]'
                      , i = t(selector).parents("li").addClass("active");
                    i.parent(".dropdown-menu").length && (i = i.closest("li.dropdown").addClass("active")),
                    i.trigger("activate.bs.scrollspy")
                }
                ,
                e.prototype.clear = function() {
                    t(this.selector).parentsUntil(this.options.target, ".active").removeClass("active")
                }
                ;
                var n = t.fn.scrollspy;
                t.fn.scrollspy = i,
                t.fn.scrollspy.Constructor = e,
                t.fn.scrollspy.noConflict = function() {
                    return t.fn.scrollspy = n,
                    this
                }
                ,
                t(window).on("load.bs.scrollspy.data-api", (function() {
                    t('[data-spy="scroll"]').each((function() {
                        var e = t(this);
                        i.call(e, e.data())
                    }
                    ))
                }
                ))
            }(jQuery),
            function(t) {
                "use strict";
                function e() {
                    var el = document.createElement("bootstrap")
                      , t = {
                        WebkitTransition: "webkitTransitionEnd",
                        MozTransition: "transitionend",
                        OTransition: "oTransitionEnd otransitionend",
                        transition: "transitionend"
                    };
                    for (var e in t)
                        if (void 0 !== el.style[e])
                            return {
                                end: t[e]
                            };
                    return false
                }
                t.fn.emulateTransitionEnd = function(e) {
                    var i = false, n = this, s;
                    return t(this).one("bsTransitionEnd", (function() {
                        i = true
                    }
                    )),
                    setTimeout((function() {
                        i || t(n).trigger(t.support.transition.end)
                    }
                    ), e),
                    this
                }
                ,
                t((function() {
                    t.support.transition = e(),
                    t.support.transition && (t.event.special.bsTransitionEnd = {
                        bindType: t.support.transition.end,
                        delegateType: t.support.transition.end,
                        handle: function(e) {
                            if (t(e.target).is(this))
                                return e.handleObj.handler.apply(this, arguments)
                        }
                    })
                }
                ))
            }(jQuery)
        }
        ).call(window)
    },
    234: function(t, e) {},
    235: function(t, e) {},
    236: function(t, e) {},
    237: function(t, e) {
        var e = void 0
          , t = void 0;
        (function() {
            var t = void 0;
            window.PureCookie = function() {
                function t(t) {
                    for (var e = t + "=", i = document.cookie.split(";"), n = 0; n < i.length; n++) {
                        for (var s = i[n]; " " == s.charAt(0); )
                            s = s.substring(1, s.length);
                        if (0 == s.indexOf(e))
                            return s.substring(e.length, s.length)
                    }
                    var o;
                    return !!localStorage.getItem(t)
                }
                function e(t, e, i) {
                    var n = "";
                    if (i) {
                        var date = new Date;
                        date.setTime(date.getTime() + 24 * i * 60 * 60 * 1e3),
                        n = "; expires=" + date.toUTCString()
                    }
                    document.cookie = t + "=" + (e || "") + n + "; path=/"
                }
                var i = "np-cookie-consent"
                  , n = "purecookieDismiss"
                  , s = {
                    dismiss: function() {
                        localStorage.setItem(n, "1"),
                        e(n, "1", 365);
                        var el = document.getElementById(i);
                        el.style.opacity = 0,
                        el.style.display = "none",
                        "function" == typeof gtag && gtag("consent", "update", {
                            ad_user_data: "granted",
                            ad_personalization: "granted",
                            ad_storage: "granted",
                            analytics_storage: "granted"
                        })
                    },
                    initCookieConsent: function(e) {
                        if (!t(n)) {
                            var el;
                            (el = document.createElement("div")).setAttribute("id", i);
                            var text = 'By using this website, you automatically accept that we use cookies. Learn more about our <a href="https://nicepage.com/Privacy" target="_blank"> privacy and cookies policy</a>.', el;
                            el.innerHTML = '<div class="cookieDesc"><p>' + text + '</p></div><div class="cookieButton"><a onclick="PureCookie.dismiss();">Accept</a></div>',
                            document.body.append(el),
                            (el = document.getElementById(i)).style.opacity = .88,
                            el.style.display = "block"
                        }
                    }
                };
                return s
            }()
        }
        ).call(window)
    },
    238: function(t, e, i) {
        "use strict";
        function n() {
            return (0 | Math.floor(65536 * (1 + Math.random()))).toString(16).substring(1)
        }
        function s(t, e) {
            return t + "\n\nDetails:\n" + JSON.stringify(e, null, 2)
        }
        var o = ["de", "us", "it", "pl", "uk", "gb", "nl", "fr", "cz", "ch", "ca", "au", "za", "be", "at", "sk", "se", "hr", "dk", "no", "si", "fi", "ie", "ba", "lt", "nz", "rs", "ee", "jp", "hu", "pt", "sg", "es", "lv", "ro"]
          , a = ["in", "br", "ru", "id", "tr", "mx", "pk", "ph", "ua", "co", "ma", "vn", "kz", "eg", "my"];
        window.canLogToAmplitude = function t() {
            var e = window.getUtmParamsFromCookie()
              , i = !!$.cookie("FromAds");
            return ((window.isAuthenticated || window.clientUserId > 0) && window.isValidCountry() || e.gclid || i) && "function" == typeof sendAmplitudeAnalyticsData
        }
        ,
        window.setCountryCode = function t(url) {
            if (void 0 === $.cookie("UserCountryCode"))
                return window.userCountryCode ? ($.cookie("UserCountryCode", window.userCountryCode, {
                    expires: 365,
                    path: "/"
                }),
                void 0) : ($.ajax({
                    type: "HEAD",
                    url: url,
                    success: function(data, t, e) {
                        var i = e.getResponseHeader("cloudfront-viewer-country");
                        i && $.cookie("UserCountryCode", i, {
                            expires: 365,
                            path: "/"
                        })
                    },
                    error: function() {
                        var date = new Date
                          , t = 15;
                        date.setTime(date.getTime() + 9e5),
                        $.cookie("UserCountryCode", "", {
                            expires: date,
                            path: "/"
                        })
                    }
                }),
                void 0)
        }
        ,
        window.getCountryCode = function t() {
            var e;
            return (window.userCountryCode || (void 0 !== $.cookie("UserCountryCode") ? $.cookie("UserCountryCode") : "undefined") || "").toLocaleLowerCase()
        }
        ,
        window.setUserIdCookie = function t() {
            try {
                window.np_userId = localStorage.getItem("np_userId")
            } catch (t) {}
            if (window.np_userId)
                void 0 === $.cookie("np_userId") && $.cookie("np_userId", np_userId, {
                    expires: 365,
                    path: "/"
                });
            else {
                window.np_userId = (n() + n() + n() + n().substr(0, 3) + n() + n() + n() + n()).toLowerCase();
                try {
                    localStorage.setItem("np_userId", np_userId),
                    $.cookie("np_userId", np_userId, {
                        expires: 365,
                        path: "/"
                    })
                } catch (t) {}
            }
        }
        ,
        window.objectWithoutProperties = function t(e, i) {
            var n = {};
            for (var s in e)
                i.indexOf(s) >= 0 || Object.prototype.hasOwnProperty.call(e, s) && (n[s] = e[s]);
            return n
        }
        ,
        window.getUtmParams = function t(url) {
            if (!url.searchParams)
                return {};
            var e = url.searchParams.get("utm_source") || url.searchParams.get("source");
            url.searchParams.get("sscid") ? e = "ShareASale" : url.searchParams.get("fbclid") && (e = "Facebook");
            var i = url.searchParams.get("utm_campaign") || url.searchParams.get("campaign"), n = url.searchParams.get("utm_content") || url.searchParams.get("content"), s = url.searchParams.get("utm_term") || url.searchParams.get("term"), o, a;
            return {
                utmSource: e,
                utmCampaign: i,
                utmContent: n,
                utmGroup: url.searchParams.get("utm_group") || url.searchParams.get("group"),
                utmTerm: s,
                gclid: url.searchParams.get("gclid")
            }
        }
        ,
        window.getUtmParamsFromCookie = function t() {
            var e = $.cookie("AdsParameters");
            if (e) {
                var i = -1 === e.indexOf("?") ? "?" : ""
                  , url = new URL(window.location.origin + i + e);
                return window.getUtmParams(url)
            }
            return {}
        }
        ,
        window.clearPageUrl = function t(e) {
            window.currentLang && (e = e.replace("/" + window.currentLang, "")),
            window.currentUrl && (e = e.replace(window.currentUrl, window.baseUrl));
            var url = e.replace(/\?.*/, "").replace(/(.)\/$/, "$1")
              , i = url.match(/\/\d+(\/|$)/);
            return i && i.index > 0 && (url = url.substring(0, i.index)),
            url.replace(/\/editor\//gi, "/").replace(/\/frame\//gi, "/").toLowerCase()
        }
        ,
        window.getUtmPageValue = function t(e) {
            var url = "/"
              , i = e.split("/");
            return e.startsWith("/") && i.length > 1 ? url += i[1] : e
        }
        ,
        window.getBaseUrl = function t() {
            var e = "";
            return window.Settings && window.Settings.baseUrl && (e = window.Settings.baseUrl),
            e
        }
        ,
        window.sendMessageOnServer = function t(e, i, n) {
            var o = s(e, i);
            $.ajax({
                url: window.getBaseUrl() + "/Log/LogJavaScriptError",
                type: "POST",
                data: {
                    message: encodeURIComponent(o),
                    application: "Upage"
                },
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                success: function() {
                    n && n()
                },
                error: function(t, e, i) {
                    var s = "Error: " + t.status + " " + i;
                    window.console.log(s),
                    "function" == typeof n && n(s)
                }
            })
        }
        ,
        window.decorateTimeout = function t(e, i) {
            return function() {
                var t = Array.from(arguments)
                  , n = t.pop()
                  , s = false;
                e.apply(this, t.concat((function t(e, i) {
                    s || (s = true,
                    n(e, i))
                }
                ))),
                setTimeout((function t() {
                    s || (s = true,
                    n(new Error("is timed out")))
                }
                ), i)
            }
        }
        ,
        window.createGuid = function createGuid() {
            return n() + n() + "-" + n() + "-" + n() + "-" + n() + "-" + n() + n() + n()
        }
        ,
        window.isValidCountry = function t(e) {
            var i = window.userCountryCode || $.cookie("UserCountryCode");
            return !i && !e || (i = i.toLocaleLowerCase(),
            !!o.includes(i))
        }
        ,
        window.isForbiddenCountry = function t() {
            var e = window.userCountryCode || $.cookie("UserCountryCode");
            return (e = (e || "").toLocaleLowerCase()) && a.includes(e)
        }
        ,
        window.onDialogUrlClick = function t(e) {
            e.preventDefault();
            var i, url = e.target.getAttribute("data-url");
            url && (window.location.href = url)
        }
        ,
        window.showDownloadHint = function() {
            function t() {
                var t = false
                  , e = navigator.userAgent.toLowerCase();
                if (e.indexOf("safari") > -1 || e.indexOf("chrome") > -1 || e.indexOf("firefox") > -1) {
                    var i = /chrome\/(\d+)/, n = e.match(i), s;
                    if (n)
                        t = n[1] >= 116;
                    else
                        t = true
                } else if (/opr\//.test(e))
                    return function() {}
                    ;
                $(selector).remove(),
                $("body").append(template),
                $(selector).toggleClass("download-hint-top", t),
                $(selector).removeClass("hidden")
            }
            var selector = "#download-hint"
              , template = '<div id="download-hint" class="download-hint hidden"><div class="hint-background"> </div><div class="hint-container"><span class="hint-message">click to<br>run</span><span class="hint-arrow" style="height: 230px"><svg viewBox="0 0 150 250" style="width: 150px; height: 250px"><path fill="#FFFFFF" stroke-width="2" stroke="#555555" d="M110,45H40V5h70V45z M110,53H40v51h70V53z M110,185v-72H40v72H10l66,61l64-61H110z"></path></svg></span></div></div>';
            return t
        }(),
        jQuery(document).ready((function(t) {
            t(".template-menu-item").click((function() {
                window.location.href = t(this).attr("href")
            }
            )),
            t(".templates-url").click((function(e) {
                e.preventDefault();
                var i = t(this).attr("href")
                  , n = t(this).data("urls");
                if (n) {
                    var s = n.split(";"), o;
                    if (s.length > 0)
                        i = "/" + s[Math.floor(Math.random() * s.length)]
                }
                return document.location = i,
                false
            }
            )),
            t(".builder-link").click((function(e) {
                e.preventDefault();
                var i = t(this).attr("href");
                return document.location = i,
                false
            }
            )),
            t(".download-block .download-btn").click((function(e) {
                e.preventDefault();
                var i = t(this).attr("href")
                  , n = window.location.pathname.split("?")[0]
                  , s = n;
                window.currentLang && (s = s.replace("/" + window.currentLang, "")),
                window.currentUrl && (s = s.replace(window.currentUrl, window.baseUrl));
                var title = t(this).siblings(".download-title").text();
                window.canLogToAmplitude() ? sendAmplitudeAnalyticsData("Click Download Block", {
                    Title: title,
                    PageUrl: n,
                    BasePageUrl: s,
                    Lang: window.currentLang || ""
                }, null, (function() {
                    setTimeout((function() {
                        document.location = i
                    }
                    ), 100)
                }
                )) : document.location = i
            }
            )),
            t("a[data-target=#feature-modal-preview]").click((function(e) {
                if (1 === t(this).data("detail-link")) {
                    var i = t(this).attr("href");
                    if (i && "#" !== i)
                        return window.location = i,
                        void 0
                }
                e.preventDefault();
                var n = t(this).find(".feature-item")
                  , s = t(this).data("url")
                  , o = t(this).data("learn-more")
                  , a = t(this).data("examples-url")
                  , l = t("#feature-modal-preview")
                  , h = l.find(".modal-body video")
                  , u = l.find(".modal-body img")
                  , c = l.find(".modal-body .learn-more-link")
                  , p = l.find(".modal-body .examples-link")
                  , f = n.find(".feature-title").text();
                l.find("h2").text(f),
                l.find(".modal-body p").text(n.find(".feature-description").text()),
                t(this).data("type-video") ? (h.attr("src", s),
                u.hide(),
                h.show()) : (u.attr("src", s),
                h.hide(),
                u.show()),
                o ? (c.attr("href", o),
                c.show()) : c.hide(),
                a ? (p.attr("href", a),
                p.css("margin-left", o ? "20px" : "0"),
                p.show()) : p.hide(),
                l.modal("show"),
                window.canLogToAmplitude() && sendAmplitudeAnalyticsData("Feature Click", {
                    Title: f,
                    Id: t(this).data("id"),
                    Lang: t(this).data("lang")
                })
            }
            )),
            t(".custom-block .show-all-features a").click((function(e) {
                e.preventDefault(),
                t(this).css("display", "none"),
                t(this).closest(".split-layout").find(".split-item").css("display", ""),
                t(this).closest(".features-grid").find(".thumbnail-item").css("display", ""),
                t(this).closest(".features-cards").find(".layout-row").css("display", ""),
                t(this).closest(".features-cards").find(".layout-cell").css("display", "")
            }
            )),
            t(".block-styles-all").click((function(e) {
                e.preventDefault(),
                t(this).css("display", "none"),
                t(".block-styles").find("a").css("display", "")
            }
            ))
        }
        ))
    },
    411: function(t, e) {},
    412: function(t, e, i) {
        "use strict";
        jQuery(document).ready((function(t) {
            t("select.first-gray").on("change", window.placeholderSelect).each((function() {
                window.placeholderSelect.call(this)
            }
            )),
            t("body").on("click", ".modal__close", (function(e) {
                window.closeModal(t(e.currentTarget).closest(".modal"))
            }
            ))
        }
        )),
        "function" == typeof Masonry && ($(".thumbnails").masonry({
            itemSelector: ".thumbnail-item",
            gutter: 30,
            columnWidth: 260,
            transitionDuration: 0
        }).removeClass("thumbnails-loading"),
        $(".thumbnails-grid").on("click", ".expand-page-button", (function() {
            var t = $(this).data("url")
              , e = $(this).closest(".page-image")
              , i = $(e).find("img.media-image");
            return $(i).attr("src", t),
            $(i).on("load", (function() {
                $(i).closest(".thumbnail").css({
                    width: this.width,
                    height: this.height
                });
                var t = $(i).closest(".thumbnail-item")
                  , e = t.data("height") || 0;
                t.css({
                    width: this.width,
                    height: this.height + 50 + e
                }),
                $(".thumbnails").masonry("layout")
            }
            )),
            $(".page-more", e).hide(),
            false
        }
        ))),
        window.placeholderSelect = function t() {
            var e, i;
            $(this).val() === $(this).children(":first-child").val() ? $(this).addClass("first-selected") : $(this).removeClass("first-selected")
        }
        ,
        window.getCuttedFileName = function t(e, size) {
            if (void 0 === size && (size = 25),
            e.length < size)
                return e;
            var i = e.lastIndexOf(".");
            return e.substr(0, 15) + "..." + (-1 !== i ? e.substr(i + 1) : "")
        }
        ,
        window.getUrlParams = function t(e) {
            void 0 === e && (e = window.location.search),
            (e = e || "") && e.length > 0 && "?" === e[0] && (e = e.substr(1, e.length - 1));
            for (var pl = /\+/g, search = /([^&=]+)=?([^&]*)/g, i, n = function(t) {
                return decodeURIComponent(t.replace(pl, " "))
            }, s = {}; i = search.exec(e); ) {
                var o = n(i[1]);
                void 0 === s[o.toLowerCase()] && (s[o.toLowerCase()] = [o, n(i[2])])
            }
            return s
        }
        ,
        window.setUrlParam = function t(e, i) {
            var n = window.getUrlParams();
            n[e.toLowerCase()] = [e, i];
            var s = [];
            for (var o in n)
                ({}).hasOwnProperty.call(n, o) && s.push(n[o][0] + "=" + encodeURIComponent(n[o][1]));
            return "?" + s.join("&")
        }
        ,
        window.setUrlParams = function t(e) {
            var i = window.getUrlParams();
            for (var n in e)
                ({}).hasOwnProperty.call(e, n) && (i[n.toLowerCase()] = [n, e[n]]);
            var s = [];
            for (var o in i)
                ({}).hasOwnProperty.call(i, o) && s.push(i[o][0] + "=" + encodeURIComponent(i[o][1]));
            return "?" + s.join("&")
        }
        ,
        window.clearUrlParam = function t(e, i) {
            var n = window.getUrlParams(e);
            i = (i || "").toLowerCase();
            var s = [];
            for (var o in n)
                o !== i && s.push(o + "=" + encodeURIComponent(n[o][1]));
            return "?" + s.join("&")
        }
        ,
        window.buildUrl = function t(e, i) {
            var n = window.getUrlParams();
            for (var s in e)
                ({}).hasOwnProperty.call(e, s) && (n[s.toLowerCase()] = [s, e[s]]);
            var o = [];
            for (var a in n)
                i && -1 !== i.indexOf(a) || o.push(n[a][0] + "=" + encodeURIComponent(n[a][1]));
            return "?" + o.join("&")
        }
        ,
        window.closeModal = function t(modal) {
            modal.removeClass("modal--show"),
            modal.addClass("modal--hide");
            var e = function() {
                modal.removeClass("modal--hide")
            };
            modal[0].addEventListener("webkitAnimationEnd", e, false),
            modal[0].addEventListener("oAnimationEnd", e, false),
            modal[0].addEventListener("msAnimationEnd", e, false),
            modal[0].addEventListener("animationend", e, false),
            setTimeout(e, 400)
        }
        ,
        window.showModal = function(id) {
            var t = "modal-" + id;
            if (0 === $("#" + t).length && 0 !== $("#" + id).length) {
                var e = document.getElementById(id).outerHTML, i;
                navigator.userAgent.toLowerCase().indexOf("firefox") > -1 && (e = (e = e.replace("downloadmacsafari.jpg", "downloadffpopup.jpg")).replace("downloadwinpopup.jpg", "downloadffpopup.jpg")),
                e = e.replace("data-src=", "src="),
                $("body").append('<div class="flex align-center align-vert modal modal--align" id="' + t + '">    <div class="modal__container u-body">        <span class="modal__close modal__close--x" aria-hidden="true">&times;</span>        ' + e + "    </div></div>")
            }
            $("#" + t).addClass("modal--show"),
            setTimeout((function() {
                var e = $("#" + t).find('img[src*="downloadffpopup"]');
                e.clone().insertAfter(e),
                e.remove()
            }
            ), 100)
        }
    },
    603: function(t, e) {},
    604: function(t, e) {
        var e = void 0
          , t = void 0;
        (function() {
            var t = void 0, factory;
            /*! jQuery UI - v1.11.4 - 2015-03-11
* http://jqueryui.com
* Includes: core.js, widget.js, mouse.js, position.js, accordion.js, autocomplete.js, button.js, datepicker.js, dialog.js, draggable.js, droppable.js, effect.js, effect-blind.js, effect-bounce.js, effect-clip.js, effect-drop.js, effect-explode.js, effect-fade.js, effect-fold.js, effect-highlight.js, effect-puff.js, effect-pulsate.js, effect-scale.js, effect-shake.js, effect-size.js, effect-slide.js, effect-transfer.js, menu.js, progressbar.js, resizable.js, selectable.js, selectmenu.js, slider.js, sortable.js, spinner.js, tabs.js, tooltip.js
* Copyright 2015 jQuery Foundation and other contributors; Licensed MIT */
            factory = function(t) {
                function e(e, i) {
                    var map, n, s, o = e.nodeName.toLowerCase();
                    return "area" === o ? (n = (map = e.parentNode).name,
                    !(!e.href || !n || "map" !== map.nodeName.toLowerCase()) && !!(s = t("img[usemap='#" + n + "']")[0]) && visible(s)) : (/^(input|select|textarea|button|object)$/.test(o) ? !e.disabled : "a" === o && e.href || i) && visible(e)
                }
                function visible(e) {
                    return t.expr.filters.visible(e) && !t(e).parents().addBack().filter((function() {
                        return "hidden" === t.css(this, "visibility")
                    }
                    )).length
                }
                function i(t) {
                    for (var position, e; t.length && t[0] !== document; ) {
                        if (("absolute" === (position = t.css("position")) || "relative" === position || "fixed" === position) && (e = parseInt(t.css("zIndex"), 10),
                        !isNaN(e) && 0 !== e))
                            return e;
                        t = t.parent()
                    }
                    return 0
                }
                function n() {
                    this._curInst = null,
                    this._keyEvent = false,
                    this._disabledInputs = [],
                    this._datepickerShowing = false,
                    this._inDialog = false,
                    this._mainDivId = "ui-datepicker-div",
                    this._inlineClass = "ui-datepicker-inline",
                    this._appendClass = "ui-datepicker-append",
                    this._triggerClass = "ui-datepicker-trigger",
                    this._dialogClass = "ui-datepicker-dialog",
                    this._disableClass = "ui-datepicker-disabled",
                    this._unselectableClass = "ui-datepicker-unselectable",
                    this._currentClass = "ui-datepicker-current-day",
                    this._dayOverClass = "ui-datepicker-days-cell-over",
                    this.regional = [],
                    this.regional[""] = {
                        closeText: "Done",
                        prevText: "Prev",
                        nextText: "Next",
                        currentText: "Today",
                        monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                        monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                        dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                        dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                        dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
                        weekHeader: "Wk",
                        dateFormat: "mm/dd/yy",
                        firstDay: 0,
                        isRTL: false,
                        showMonthAfterYear: false,
                        yearSuffix: ""
                    },
                    this._defaults = {
                        showOn: "focus",
                        showAnim: "fadeIn",
                        showOptions: {},
                        defaultDate: null,
                        appendText: "",
                        buttonText: "...",
                        buttonImage: "",
                        buttonImageOnly: false,
                        hideIfNoPrevNext: false,
                        navigationAsDateFormat: false,
                        gotoCurrent: false,
                        changeMonth: false,
                        changeYear: false,
                        yearRange: "c-10:c+10",
                        showOtherMonths: false,
                        selectOtherMonths: false,
                        showWeek: false,
                        calculateWeek: this.iso8601Week,
                        shortYearCutoff: "+10",
                        minDate: null,
                        maxDate: null,
                        duration: "fast",
                        beforeShowDay: null,
                        beforeShow: null,
                        onSelect: null,
                        onChangeMonthYear: null,
                        onClose: null,
                        numberOfMonths: 1,
                        showCurrentAtPos: 0,
                        stepMonths: 1,
                        stepBigMonths: 12,
                        altField: "",
                        altFormat: "",
                        constrainInput: true,
                        showButtonPanel: false,
                        autoSize: false,
                        disabled: false
                    },
                    t.extend(this._defaults, this.regional[""]),
                    this.regional.en = t.extend(true, {}, this.regional[""]),
                    this.regional["en-US"] = t.extend(true, {}, this.regional.en),
                    this.dpDiv = s(t("<div id='" + this._mainDivId + "' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"))
                }
                function s(e) {
                    var selector = "button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";
                    return e.delegate(selector, "mouseout", (function() {
                        t(this).removeClass("ui-state-hover"),
                        -1 !== this.className.indexOf("ui-datepicker-prev") && t(this).removeClass("ui-datepicker-prev-hover"),
                        -1 !== this.className.indexOf("ui-datepicker-next") && t(this).removeClass("ui-datepicker-next-hover")
                    }
                    )).delegate(selector, "mouseover", o)
                }
                function o() {
                    t.datepicker._isDisabledDatepicker(C.inline ? C.dpDiv.parent()[0] : C.input[0]) || (t(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"),
                    t(this).addClass("ui-state-hover"),
                    -1 !== this.className.indexOf("ui-datepicker-prev") && t(this).addClass("ui-datepicker-prev-hover"),
                    -1 !== this.className.indexOf("ui-datepicker-next") && t(this).addClass("ui-datepicker-next-hover"))
                }
                function a(e, props) {
                    for (var i in t.extend(e, props),
                    props)
                        null == props[i] && (e[i] = props[i]);
                    return e
                }
                /*!
 * jQuery UI Spinner 1.11.4
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/spinner/
 */
                function l(t) {
                    return function() {
                        var e = this.element.val();
                        t.apply(this, arguments),
                        this._refresh(),
                        e !== this.element.val() && this._trigger("change")
                    }
                }
                var h, u, c, p;
                /*!
 * jQuery UI Core 1.11.4
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/category/ui-core/
 */
                t.ui = t.ui || {},
                t.extend(t.ui, {
                    version: "1.11.4",
                    keyCode: {
                        BACKSPACE: 8,
                        COMMA: 188,
                        DELETE: 46,
                        DOWN: 40,
                        END: 35,
                        ENTER: 13,
                        ESCAPE: 27,
                        HOME: 36,
                        LEFT: 37,
                        PAGE_DOWN: 34,
                        PAGE_UP: 33,
                        PERIOD: 190,
                        RIGHT: 39,
                        SPACE: 32,
                        TAB: 9,
                        UP: 38
                    }
                }),
                t.fn.extend({
                    scrollParent: function(e) {
                        var position = this.css("position")
                          , i = "absolute" === position
                          , n = e ? /(auto|scroll|hidden)/ : /(auto|scroll)/
                          , s = this.parents().filter((function() {
                            var e = t(this);
                            return (!i || "static" !== e.css("position")) && n.test(e.css("overflow") + e.css("overflow-y") + e.css("overflow-x"))
                        }
                        )).eq(0);
                        return "fixed" !== position && s.length ? s : t(this[0].ownerDocument || document)
                    },
                    uniqueId: (h = 0,
                    function() {
                        return this.each((function() {
                            this.id || (this.id = "ui-id-" + ++h)
                        }
                        ))
                    }
                    ),
                    removeUniqueId: function() {
                        return this.each((function() {
                            /^ui-id-\d+$/.test(this.id) && t(this).removeAttr("id")
                        }
                        ))
                    }
                }),
                t.extend(t.expr[":"], {
                    data: t.expr.createPseudo ? t.expr.createPseudo((function(e) {
                        return function(i) {
                            return !!t.data(i, e)
                        }
                    }
                    )) : function(e, i, n) {
                        return !!t.data(e, n[3])
                    }
                    ,
                    focusable: function(i) {
                        return e(i, !isNaN(t.attr(i, "tabindex")))
                    },
                    tabbable: function(i) {
                        var n = t.attr(i, "tabindex")
                          , s = isNaN(n);
                        return (s || n >= 0) && e(i, !s)
                    }
                }),
                t("<a>").outerWidth(1).jquery || t.each(["Width", "Height"], (function(e, i) {
                    function n(e, size, border, i) {
                        return t.each(s, (function() {
                            size -= parseFloat(t.css(e, "padding" + this)) || 0,
                            border && (size -= parseFloat(t.css(e, "border" + this + "Width")) || 0),
                            i && (size -= parseFloat(t.css(e, "margin" + this)) || 0)
                        }
                        )),
                        size
                    }
                    var s = "Width" === i ? ["Left", "Right"] : ["Top", "Bottom"]
                      , type = i.toLowerCase()
                      , o = {
                        innerWidth: t.fn.innerWidth,
                        innerHeight: t.fn.innerHeight,
                        outerWidth: t.fn.outerWidth,
                        outerHeight: t.fn.outerHeight
                    };
                    t.fn["inner" + i] = function(size) {
                        return void 0 === size ? o["inner" + i].call(this) : this.each((function() {
                            t(this).css(type, n(this, size) + "px")
                        }
                        ))
                    }
                    ,
                    t.fn["outer" + i] = function(size, e) {
                        return "number" != typeof size ? o["outer" + i].call(this, size) : this.each((function() {
                            t(this).css(type, n(this, size, true, e) + "px")
                        }
                        ))
                    }
                }
                )),
                t.fn.addBack || (t.fn.addBack = function(selector) {
                    return this.add(null == selector ? this.prevObject : this.prevObject.filter(selector))
                }
                ),
                t("<a>").data("a-b", "a").removeData("a-b").data("a-b") && (t.fn.removeData = (u = t.fn.removeData,
                function(e) {
                    return arguments.length ? u.call(this, t.camelCase(e)) : u.call(this)
                }
                )),
                t.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()),
                t.fn.extend({
                    focus: (p = t.fn.focus,
                    function(e, i) {
                        return "number" == typeof e ? this.each((function() {
                            var n = this;
                            setTimeout((function() {
                                t(n).focus(),
                                i && i.call(n)
                            }
                            ), e)
                        }
                        )) : p.apply(this, arguments)
                    }
                    ),
                    disableSelection: (c = "onselectstart"in document.createElement("div") ? "selectstart" : "mousedown",
                    function() {
                        return this.bind(c + ".ui-disableSelection", (function(t) {
                            t.preventDefault()
                        }
                        ))
                    }
                    ),
                    enableSelection: function() {
                        return this.unbind(".ui-disableSelection")
                    },
                    zIndex: function(e) {
                        if (void 0 !== e)
                            return this.css("zIndex", e);
                        if (this.length)
                            for (var i = t(this[0]), position, n; i.length && i[0] !== document; ) {
                                if (("absolute" === (position = i.css("position")) || "relative" === position || "fixed" === position) && (n = parseInt(i.css("zIndex"), 10),
                                !isNaN(n) && 0 !== n))
                                    return n;
                                i = i.parent()
                            }
                        return 0
                    }
                }),
                t.ui.plugin = {
                    add: function(e, i, n) {
                        var s, o = t.ui[e].prototype;
                        for (s in n)
                            o.plugins[s] = o.plugins[s] || [],
                            o.plugins[s].push([i, n[s]])
                    },
                    call: function(instance, t, e, i) {
                        var n, s = instance.plugins[t];
                        if (s && (i || instance.element[0].parentNode && 11 !== instance.element[0].parentNode.nodeType))
                            for (n = 0; n < s.length; n++)
                                instance.options[s[n][0]] && s[n][1].apply(instance.element, e)
                    }
                };
                /*!
 * jQuery UI Widget 1.11.4
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/jQuery.widget/
 */
                var f = 0
                  , m = Array.prototype.slice;
                t.cleanData = function(e) {
                    return function(i) {
                        var events, n, s;
                        for (s = 0; null != (n = i[s]); s++)
                            try {
                                (events = t._data(n, "events")) && events.remove && t(n).triggerHandler("remove")
                            } catch (t) {}
                        e(i)
                    }
                }(t.cleanData),
                t.widget = function(e, base, i) {
                    var n, s, o, a, l = {}, h = e.split(".")[0];
                    return e = e.split(".")[1],
                    n = h + "-" + e,
                    i || (i = base,
                    base = t.Widget),
                    t.expr[":"][n.toLowerCase()] = function(e) {
                        return !!t.data(e, n)
                    }
                    ,
                    t[h] = t[h] || {},
                    s = t[h][e],
                    o = t[h][e] = function(t, e) {
                        if (!this._createWidget)
                            return new o(t,e);
                        arguments.length && this._createWidget(t, e)
                    }
                    ,
                    t.extend(o, s, {
                        version: i.version,
                        _proto: t.extend({}, i),
                        _childConstructors: []
                    }),
                    (a = new base).options = t.widget.extend({}, a.options),
                    t.each(i, (function(e, i) {
                        if (!t.isFunction(i))
                            return l[e] = i,
                            void 0;
                        var n, s;
                        l[e] = (n = function() {
                            return base.prototype[e].apply(this, arguments)
                        }
                        ,
                        s = function(t) {
                            return base.prototype[e].apply(this, t)
                        }
                        ,
                        function() {
                            var t = this._super, e = this._superApply, o;
                            return this._super = n,
                            this._superApply = s,
                            o = i.apply(this, arguments),
                            this._super = t,
                            this._superApply = e,
                            o
                        }
                        )
                    }
                    )),
                    o.prototype = t.widget.extend(a, {
                        widgetEventPrefix: s && a.widgetEventPrefix || e
                    }, l, {
                        constructor: o,
                        namespace: h,
                        widgetName: e,
                        widgetFullName: n
                    }),
                    s ? (t.each(s._childConstructors, (function(e, i) {
                        var n = i.prototype;
                        t.widget(n.namespace + "." + n.widgetName, o, i._proto)
                    }
                    )),
                    delete s._childConstructors) : base._childConstructors.push(o),
                    t.widget.bridge(e, o),
                    o
                }
                ,
                t.widget.extend = function(e) {
                    for (var input = m.call(arguments, 1), i = 0, n = input.length, s, o; i < n; i++)
                        for (s in input[i])
                            o = input[i][s],
                            input[i].hasOwnProperty(s) && void 0 !== o && (t.isPlainObject(o) ? e[s] = t.isPlainObject(e[s]) ? t.widget.extend({}, e[s], o) : t.widget.extend({}, o) : e[s] = o);
                    return e
                }
                ,
                t.widget.bridge = function(e, i) {
                    var n = i.prototype.widgetFullName || e;
                    t.fn[e] = function(s) {
                        var o = "string" == typeof s
                          , a = m.call(arguments, 1)
                          , l = this;
                        return o ? this.each((function() {
                            var i, instance = t.data(this, n);
                            return "instance" === s ? (l = instance,
                            false) : instance ? t.isFunction(instance[s]) && "_" !== s.charAt(0) ? (i = instance[s].apply(instance, a)) !== instance && void 0 !== i ? (l = i && i.jquery ? l.pushStack(i.get()) : i,
                            false) : void 0 : t.error("no such method '" + s + "' for " + e + " widget instance") : t.error("cannot call methods on " + e + " prior to initialization; attempted to call method '" + s + "'")
                        }
                        )) : (a.length && (s = t.widget.extend.apply(null, [s].concat(a))),
                        this.each((function() {
                            var instance = t.data(this, n);
                            instance ? (instance.option(s || {}),
                            instance._init && instance._init()) : t.data(this, n, new i(s,this))
                        }
                        ))),
                        l
                    }
                }
                ,
                t.Widget = function() {}
                ,
                t.Widget._childConstructors = [],
                t.Widget.prototype = {
                    widgetName: "widget",
                    widgetEventPrefix: "",
                    defaultElement: "<div>",
                    options: {
                        disabled: false,
                        create: null
                    },
                    _createWidget: function(e, i) {
                        i = t(i || this.defaultElement || this)[0],
                        this.element = t(i),
                        this.uuid = f++,
                        this.eventNamespace = "." + this.widgetName + this.uuid,
                        this.bindings = t(),
                        this.hoverable = t(),
                        this.focusable = t(),
                        i !== this && (t.data(i, this.widgetFullName, this),
                        this._on(true, this.element, {
                            remove: function(t) {
                                t.target === i && this.destroy()
                            }
                        }),
                        this.document = t(i.style ? i.ownerDocument : i.document || i),
                        this.window = t(this.document[0].defaultView || this.document[0].parentWindow)),
                        this.options = t.widget.extend({}, this.options, this._getCreateOptions(), e),
                        this._create(),
                        this._trigger("create", null, this._getCreateEventData()),
                        this._init()
                    },
                    _getCreateOptions: t.noop,
                    _getCreateEventData: t.noop,
                    _create: t.noop,
                    _init: t.noop,
                    destroy: function() {
                        this._destroy(),
                        this.element.unbind(this.eventNamespace).removeData(this.widgetFullName).removeData(t.camelCase(this.widgetFullName)),
                        this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName + "-disabled ui-state-disabled"),
                        this.bindings.unbind(this.eventNamespace),
                        this.hoverable.removeClass("ui-state-hover"),
                        this.focusable.removeClass("ui-state-focus")
                    },
                    _destroy: t.noop,
                    widget: function() {
                        return this.element
                    },
                    option: function(e, i) {
                        var n = e, s, o, a;
                        if (0 === arguments.length)
                            return t.widget.extend({}, this.options);
                        if ("string" == typeof e)
                            if (n = {},
                            s = e.split("."),
                            e = s.shift(),
                            s.length) {
                                for (o = n[e] = t.widget.extend({}, this.options[e]),
                                a = 0; a < s.length - 1; a++)
                                    o[s[a]] = o[s[a]] || {},
                                    o = o[s[a]];
                                if (e = s.pop(),
                                1 === arguments.length)
                                    return void 0 === o[e] ? null : o[e];
                                o[e] = i
                            } else {
                                if (1 === arguments.length)
                                    return void 0 === this.options[e] ? null : this.options[e];
                                n[e] = i
                            }
                        return this._setOptions(n),
                        this
                    },
                    _setOptions: function(t) {
                        var e;
                        for (e in t)
                            this._setOption(e, t[e]);
                        return this
                    },
                    _setOption: function(t, e) {
                        return this.options[t] = e,
                        "disabled" === t && (this.widget().toggleClass(this.widgetFullName + "-disabled", !!e),
                        e && (this.hoverable.removeClass("ui-state-hover"),
                        this.focusable.removeClass("ui-state-focus"))),
                        this
                    },
                    enable: function() {
                        return this._setOptions({
                            disabled: false
                        })
                    },
                    disable: function() {
                        return this._setOptions({
                            disabled: true
                        })
                    },
                    _on: function(e, i, handlers) {
                        var n, instance = this;
                        "boolean" != typeof e && (handlers = i,
                        i = e,
                        e = false),
                        handlers ? (i = n = t(i),
                        this.bindings = this.bindings.add(i)) : (handlers = i,
                        i = this.element,
                        n = this.widget()),
                        t.each(handlers, (function(s, o) {
                            function a() {
                                if (e || true !== instance.options.disabled && !t(this).hasClass("ui-state-disabled"))
                                    return ("string" == typeof o ? instance[o] : o).apply(instance, arguments)
                            }
                            "string" != typeof o && (a.guid = o.guid = o.guid || a.guid || t.guid++);
                            var l = s.match(/^([\w:-]*)\s*(.*)$/)
                              , h = l[1] + instance.eventNamespace
                              , selector = l[2];
                            selector ? n.delegate(selector, h, a) : i.bind(h, a)
                        }
                        ))
                    },
                    _off: function(e, i) {
                        i = (i || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace,
                        e.unbind(i).undelegate(i),
                        this.bindings = t(this.bindings.not(e).get()),
                        this.focusable = t(this.focusable.not(e).get()),
                        this.hoverable = t(this.hoverable.not(e).get())
                    },
                    _delay: function(t, e) {
                        function i() {
                            return ("string" == typeof t ? instance[t] : t).apply(instance, arguments)
                        }
                        var instance = this;
                        return setTimeout(i, e || 0)
                    },
                    _hoverable: function(e) {
                        this.hoverable = this.hoverable.add(e),
                        this._on(e, {
                            mouseenter: function(e) {
                                t(e.currentTarget).addClass("ui-state-hover")
                            },
                            mouseleave: function(e) {
                                t(e.currentTarget).removeClass("ui-state-hover")
                            }
                        })
                    },
                    _focusable: function(e) {
                        this.focusable = this.focusable.add(e),
                        this._on(e, {
                            focusin: function(e) {
                                t(e.currentTarget).addClass("ui-state-focus")
                            },
                            focusout: function(e) {
                                t(e.currentTarget).removeClass("ui-state-focus")
                            }
                        })
                    },
                    _trigger: function(type, e, data) {
                        var i, n, s = this.options[type];
                        if (data = data || {},
                        (e = t.Event(e)).type = (type === this.widgetEventPrefix ? type : this.widgetEventPrefix + type).toLowerCase(),
                        e.target = this.element[0],
                        n = e.originalEvent)
                            for (i in n)
                                i in e || (e[i] = n[i]);
                        return this.element.trigger(e, data),
                        !(t.isFunction(s) && false === s.apply(this.element[0], [e].concat(data)) || e.isDefaultPrevented())
                    }
                },
                t.each({
                    show: "fadeIn",
                    hide: "fadeOut"
                }, (function(e, i) {
                    t.Widget.prototype["_" + e] = function(n, s, o) {
                        "string" == typeof s && (s = {
                            effect: s
                        });
                        var a, l = s ? true === s || "number" == typeof s ? i : s.effect || i : e;
                        "number" == typeof (s = s || {}) && (s = {
                            duration: s
                        }),
                        a = !t.isEmptyObject(s),
                        s.complete = o,
                        s.delay && n.delay(s.delay),
                        a && t.effects && t.effects.effect[l] ? n[e](s) : l !== e && n[l] ? n[l](s.duration, s.easing, o) : n.queue((function(i) {
                            t(this)[e](),
                            o && o.call(n[0]),
                            i()
                        }
                        ))
                    }
                }
                ));
                var widget = t.widget
                  , g = false;
                /*!
 * jQuery UI Mouse 1.11.4
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/mouse/
 */
                t(document).mouseup((function() {
                    g = false
                }
                ));
                var v = t.widget("ui.mouse", {
                    version: "1.11.4",
                    options: {
                        cancel: "input,textarea,button,select,option",
                        distance: 1,
                        delay: 0
                    },
                    _mouseInit: function() {
                        var e = this;
                        this.element.bind("mousedown." + this.widgetName, (function(t) {
                            return e._mouseDown(t)
                        }
                        )).bind("click." + this.widgetName, (function(i) {
                            if (true === t.data(i.target, e.widgetName + ".preventClickEvent"))
                                return t.removeData(i.target, e.widgetName + ".preventClickEvent"),
                                i.stopImmediatePropagation(),
                                false
                        }
                        )),
                        this.started = false
                    },
                    _mouseDestroy: function() {
                        this.element.unbind("." + this.widgetName),
                        this._mouseMoveDelegate && this.document.unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate)
                    },
                    _mouseDown: function(e) {
                        if (!g) {
                            this._mouseMoved = false,
                            this._mouseStarted && this._mouseUp(e),
                            this._mouseDownEvent = e;
                            var i = this
                              , n = 1 === e.which
                              , s = !("string" != typeof this.options.cancel || !e.target.nodeName) && t(e.target).closest(this.options.cancel).length;
                            return !(n && !s && this._mouseCapture(e)) || (this.mouseDelayMet = !this.options.delay,
                            this.mouseDelayMet || (this._mouseDelayTimer = setTimeout((function() {
                                i.mouseDelayMet = true
                            }
                            ), this.options.delay)),
                            this._mouseDistanceMet(e) && this._mouseDelayMet(e) && (this._mouseStarted = false !== this._mouseStart(e),
                            !this._mouseStarted) ? (e.preventDefault(),
                            true) : (true === t.data(e.target, this.widgetName + ".preventClickEvent") && t.removeData(e.target, this.widgetName + ".preventClickEvent"),
                            this._mouseMoveDelegate = function(t) {
                                return i._mouseMove(t)
                            }
                            ,
                            this._mouseUpDelegate = function(t) {
                                return i._mouseUp(t)
                            }
                            ,
                            this.document.bind("mousemove." + this.widgetName, this._mouseMoveDelegate).bind("mouseup." + this.widgetName, this._mouseUpDelegate),
                            e.preventDefault(),
                            g = true,
                            true))
                        }
                    },
                    _mouseMove: function(e) {
                        if (this._mouseMoved) {
                            if (t.ui.ie && (!document.documentMode || document.documentMode < 9) && !e.button)
                                return this._mouseUp(e);
                            if (!e.which)
                                return this._mouseUp(e)
                        }
                        return (e.which || e.button) && (this._mouseMoved = true),
                        this._mouseStarted ? (this._mouseDrag(e),
                        e.preventDefault()) : (this._mouseDistanceMet(e) && this._mouseDelayMet(e) && (this._mouseStarted = false !== this._mouseStart(this._mouseDownEvent, e),
                        this._mouseStarted ? this._mouseDrag(e) : this._mouseUp(e)),
                        !this._mouseStarted)
                    },
                    _mouseUp: function(e) {
                        return this.document.unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate),
                        this._mouseStarted && (this._mouseStarted = false,
                        e.target === this._mouseDownEvent.target && t.data(e.target, this.widgetName + ".preventClickEvent", true),
                        this._mouseStop(e)),
                        g = false,
                        false
                    },
                    _mouseDistanceMet: function(t) {
                        return Math.max(Math.abs(this._mouseDownEvent.pageX - t.pageX), Math.abs(this._mouseDownEvent.pageY - t.pageY)) >= this.options.distance
                    },
                    _mouseDelayMet: function() {
                        return this.mouseDelayMet
                    },
                    _mouseStart: function() {},
                    _mouseDrag: function() {},
                    _mouseStop: function() {},
                    _mouseCapture: function() {
                        return true
                    }
                });
                /*!
 * jQuery UI Position 1.11.4
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/position/
 */
                !function() {
                    function e(t, e, i) {
                        return [parseFloat(t[0]) * (m.test(t[0]) ? e / 100 : 1), parseFloat(t[1]) * (m.test(t[1]) ? i / 100 : 1)]
                    }
                    function i(e, i) {
                        return parseInt(t.css(e, i), 10) || 0
                    }
                    function n(e) {
                        var i = e[0];
                        return 9 === i.nodeType ? {
                            width: e.width(),
                            height: e.height(),
                            offset: {
                                top: 0,
                                left: 0
                            }
                        } : t.isWindow(i) ? {
                            width: e.width(),
                            height: e.height(),
                            offset: {
                                top: e.scrollTop(),
                                left: e.scrollLeft()
                            }
                        } : i.preventDefault ? {
                            width: 0,
                            height: 0,
                            offset: {
                                top: i.pageY,
                                left: i.pageX
                            }
                        } : {
                            width: e.outerWidth(),
                            height: e.outerHeight(),
                            offset: e.offset()
                        }
                    }
                    t.ui = t.ui || {};
                    var s, o, a = Math.max, l = Math.abs, h = Math.round, u = /left|center|right/, c = /top|center|bottom/, p = /[\+\-]\d+(\.[\d]+)?%?/, f = /^\w+/, m = /%$/, g = t.fn.position;
                    t.position = {
                        scrollbarWidth: function() {
                            if (void 0 !== s)
                                return s;
                            var e, i, n = t("<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"), o = n.children()[0];
                            return t("body").append(n),
                            e = o.offsetWidth,
                            n.css("overflow", "scroll"),
                            e === (i = o.offsetWidth) && (i = n[0].clientWidth),
                            n.remove(),
                            s = e - i
                        },
                        getScrollInfo: function(e) {
                            var i = e.isWindow || e.isDocument ? "" : e.element.css("overflow-x"), n = e.isWindow || e.isDocument ? "" : e.element.css("overflow-y"), s = "scroll" === i || "auto" === i && e.width < e.element[0].scrollWidth, o;
                            return {
                                width: "scroll" === n || "auto" === n && e.height < e.element[0].scrollHeight ? t.position.scrollbarWidth() : 0,
                                height: s ? t.position.scrollbarWidth() : 0
                            }
                        },
                        getWithinInfo: function(e) {
                            var i = t(e || window)
                              , n = t.isWindow(i[0])
                              , s = !!i[0] && 9 === i[0].nodeType;
                            return {
                                element: i,
                                isWindow: n,
                                isDocument: s,
                                offset: i.offset() || {
                                    left: 0,
                                    top: 0
                                },
                                scrollLeft: i.scrollLeft(),
                                scrollTop: i.scrollTop(),
                                width: n || s ? i.width() : i.outerWidth(),
                                height: n || s ? i.height() : i.outerHeight()
                            }
                        }
                    },
                    t.fn.position = function(s) {
                        if (!s || !s.of)
                            return g.apply(this, arguments);
                        s = t.extend({}, s);
                        var m, v, b, y, _, w, x = t(s.of), k = t.position.getWithinInfo(s.within), C = t.position.getScrollInfo(k), T = (s.collision || "flip").split(" "), A = {};
                        return w = n(x),
                        x[0].preventDefault && (s.at = "left top"),
                        v = w.width,
                        b = w.height,
                        y = w.offset,
                        _ = t.extend({}, y),
                        t.each(["my", "at"], (function() {
                            var t = (s[this] || "").split(" "), e, i;
                            1 === t.length && (t = u.test(t[0]) ? t.concat(["center"]) : c.test(t[0]) ? ["center"].concat(t) : ["center", "center"]),
                            t[0] = u.test(t[0]) ? t[0] : "center",
                            t[1] = c.test(t[1]) ? t[1] : "center",
                            e = p.exec(t[0]),
                            i = p.exec(t[1]),
                            A[this] = [e ? e[0] : 0, i ? i[0] : 0],
                            s[this] = [f.exec(t[0])[0], f.exec(t[1])[0]]
                        }
                        )),
                        1 === T.length && (T[1] = T[0]),
                        "right" === s.at[0] ? _.left += v : "center" === s.at[0] && (_.left += v / 2),
                        "bottom" === s.at[1] ? _.top += b : "center" === s.at[1] && (_.top += b / 2),
                        m = e(A.at, v, b),
                        _.left += m[0],
                        _.top += m[1],
                        this.each((function() {
                            var n, u, c = t(this), p = c.outerWidth(), f = c.outerHeight(), g = i(this, "marginLeft"), w = i(this, "marginTop"), S = p + g + i(this, "marginRight") + C.width, E = f + w + i(this, "marginBottom") + C.height, position = t.extend({}, _), I = e(A.my, c.outerWidth(), c.outerHeight());
                            "right" === s.my[0] ? position.left -= p : "center" === s.my[0] && (position.left -= p / 2),
                            "bottom" === s.my[1] ? position.top -= f : "center" === s.my[1] && (position.top -= f / 2),
                            position.left += I[0],
                            position.top += I[1],
                            o || (position.left = h(position.left),
                            position.top = h(position.top)),
                            n = {
                                marginLeft: g,
                                marginTop: w
                            },
                            t.each(["left", "top"], (function(e, i) {
                                t.ui.position[T[e]] && t.ui.position[T[e]][i](position, {
                                    targetWidth: v,
                                    targetHeight: b,
                                    elemWidth: p,
                                    elemHeight: f,
                                    collisionPosition: n,
                                    collisionWidth: S,
                                    collisionHeight: E,
                                    offset: [m[0] + I[0], m[1] + I[1]],
                                    my: s.my,
                                    at: s.at,
                                    within: k,
                                    elem: c
                                })
                            }
                            )),
                            s.using && (u = function(props) {
                                var t = y.left - position.left
                                  , e = t + v - p
                                  , i = y.top - position.top
                                  , n = i + b - f
                                  , o = {
                                    target: {
                                        element: x,
                                        left: y.left,
                                        top: y.top,
                                        width: v,
                                        height: b
                                    },
                                    element: {
                                        element: c,
                                        left: position.left,
                                        top: position.top,
                                        width: p,
                                        height: f
                                    },
                                    horizontal: e < 0 ? "left" : t > 0 ? "right" : "center",
                                    vertical: n < 0 ? "top" : i > 0 ? "bottom" : "middle"
                                };
                                v < p && l(t + e) < v && (o.horizontal = "center"),
                                b < f && l(i + n) < b && (o.vertical = "middle"),
                                a(l(t), l(e)) > a(l(i), l(n)) ? o.important = "horizontal" : o.important = "vertical",
                                s.using.call(this, props, o)
                            }
                            ),
                            c.offset(t.extend(position, {
                                using: u
                            }))
                        }
                        ))
                    }
                    ,
                    t.ui.position = {
                        fit: {
                            left: function(position, data) {
                                var t = data.within, e = t.isWindow ? t.scrollLeft : t.offset.left, i = t.width, n = position.left - data.collisionPosition.marginLeft, s = e - n, o = n + data.collisionWidth - i - e, l;
                                data.collisionWidth > i ? s > 0 && o <= 0 ? (l = position.left + s + data.collisionWidth - i - e,
                                position.left += s - l) : position.left = o > 0 && s <= 0 ? e : s > o ? e + i - data.collisionWidth : e : s > 0 ? position.left += s : o > 0 ? position.left -= o : position.left = a(position.left - n, position.left)
                            },
                            top: function(position, data) {
                                var t = data.within, e = t.isWindow ? t.scrollTop : t.offset.top, i = data.within.height, n = position.top - data.collisionPosition.marginTop, s = e - n, o = n + data.collisionHeight - i - e, l;
                                data.collisionHeight > i ? s > 0 && o <= 0 ? (l = position.top + s + data.collisionHeight - i - e,
                                position.top += s - l) : position.top = o > 0 && s <= 0 ? e : s > o ? e + i - data.collisionHeight : e : s > 0 ? position.top += s : o > 0 ? position.top -= o : position.top = a(position.top - n, position.top)
                            }
                        },
                        flip: {
                            left: function(position, data) {
                                var t = data.within, e = t.offset.left + t.scrollLeft, i = t.width, n = t.isWindow ? t.scrollLeft : t.offset.left, s = position.left - data.collisionPosition.marginLeft, o = s - n, a = s + data.collisionWidth - i - n, h = "left" === data.my[0] ? -data.elemWidth : "right" === data.my[0] ? data.elemWidth : 0, u = "left" === data.at[0] ? data.targetWidth : "right" === data.at[0] ? -data.targetWidth : 0, c = -2 * data.offset[0], p, f;
                                o < 0 ? ((p = position.left + h + u + c + data.collisionWidth - i - e) < 0 || p < l(o)) && (position.left += h + u + c) : a > 0 && ((f = position.left - data.collisionPosition.marginLeft + h + u + c - n) > 0 || l(f) < a) && (position.left += h + u + c)
                            },
                            top: function(position, data) {
                                var t = data.within, e = t.offset.top + t.scrollTop, i = t.height, n = t.isWindow ? t.scrollTop : t.offset.top, s = position.top - data.collisionPosition.marginTop, o = s - n, a = s + data.collisionHeight - i - n, h, u = "top" === data.my[1] ? -data.elemHeight : "bottom" === data.my[1] ? data.elemHeight : 0, c = "top" === data.at[1] ? data.targetHeight : "bottom" === data.at[1] ? -data.targetHeight : 0, p = -2 * data.offset[1], f, m;
                                o < 0 ? ((m = position.top + u + c + p + data.collisionHeight - i - e) < 0 || m < l(o)) && (position.top += u + c + p) : a > 0 && ((f = position.top - data.collisionPosition.marginTop + u + c + p - n) > 0 || l(f) < a) && (position.top += u + c + p)
                            }
                        },
                        flipfit: {
                            left: function() {
                                t.ui.position.flip.left.apply(this, arguments),
                                t.ui.position.fit.left.apply(this, arguments)
                            },
                            top: function() {
                                t.ui.position.flip.top.apply(this, arguments),
                                t.ui.position.fit.top.apply(this, arguments)
                            }
                        }
                    },
                    function() {
                        var e, i, n, s, a, l = document.getElementsByTagName("body")[0], h = document.createElement("div");
                        for (a in e = document.createElement(l ? "div" : "body"),
                        n = {
                            visibility: "hidden",
                            width: 0,
                            height: 0,
                            border: 0,
                            margin: 0,
                            background: "none"
                        },
                        l && t.extend(n, {
                            position: "absolute",
                            left: "-1000px",
                            top: "-1000px"
                        }),
                        n)
                            e.style[a] = n[a];
                        e.appendChild(h),
                        (i = l || document.documentElement).insertBefore(e, i.firstChild),
                        h.style.cssText = "position: absolute; left: 10.7432222px;",
                        s = t(h).offset().left,
                        o = s > 10 && s < 11,
                        e.innerHTML = "",
                        i.removeChild(e)
                    }()
                }();
                var position = t.ui.position
                  , accordion = t.widget("ui.accordion", {
                    version: "1.11.4",
                    options: {
                        active: 0,
                        animate: {},
                        collapsible: false,
                        event: "click",
                        header: "> li > :first-child,> :not(li):even",
                        heightStyle: "auto",
                        icons: {
                            activeHeader: "ui-icon-triangle-1-s",
                            header: "ui-icon-triangle-1-e"
                        },
                        activate: null,
                        beforeActivate: null
                    },
                    hideProps: {
                        borderTopWidth: "hide",
                        borderBottomWidth: "hide",
                        paddingTop: "hide",
                        paddingBottom: "hide",
                        height: "hide"
                    },
                    showProps: {
                        borderTopWidth: "show",
                        borderBottomWidth: "show",
                        paddingTop: "show",
                        paddingBottom: "show",
                        height: "show"
                    },
                    _create: function() {
                        var e = this.options;
                        this.prevShow = this.prevHide = t(),
                        this.element.addClass("ui-accordion ui-widget ui-helper-reset").attr("role", "tablist"),
                        e.collapsible || false !== e.active && null != e.active || (e.active = 0),
                        this._processPanels(),
                        e.active < 0 && (e.active += this.headers.length),
                        this._refresh()
                    },
                    _getCreateEventData: function() {
                        return {
                            header: this.active,
                            panel: this.active.length ? this.active.next() : t()
                        }
                    },
                    _createIcons: function() {
                        var e = this.options.icons;
                        e && (t("<span>").addClass("ui-accordion-header-icon ui-icon " + e.header).prependTo(this.headers),
                        this.active.children(".ui-accordion-header-icon").removeClass(e.header).addClass(e.activeHeader),
                        this.headers.addClass("ui-accordion-icons"))
                    },
                    _destroyIcons: function() {
                        this.headers.removeClass("ui-accordion-icons").children(".ui-accordion-header-icon").remove()
                    },
                    _destroy: function() {
                        var t;
                        this.element.removeClass("ui-accordion ui-widget ui-helper-reset").removeAttr("role"),
                        this.headers.removeClass("ui-accordion-header ui-accordion-header-active ui-state-default ui-corner-all ui-state-active ui-state-disabled ui-corner-top").removeAttr("role").removeAttr("aria-expanded").removeAttr("aria-selected").removeAttr("aria-controls").removeAttr("tabIndex").removeUniqueId(),
                        this._destroyIcons(),
                        t = this.headers.next().removeClass("ui-helper-reset ui-widget-content ui-corner-bottom ui-accordion-content ui-accordion-content-active ui-state-disabled").css("display", "").removeAttr("role").removeAttr("aria-hidden").removeAttr("aria-labelledby").removeUniqueId(),
                        "content" !== this.options.heightStyle && t.css("height", "")
                    },
                    _setOption: function(t, e) {
                        if ("active" === t)
                            return this._activate(e),
                            void 0;
                        "event" === t && (this.options.event && this._off(this.headers, this.options.event),
                        this._setupEvents(e)),
                        this._super(t, e),
                        "collapsible" !== t || e || false !== this.options.active || this._activate(0),
                        "icons" === t && (this._destroyIcons(),
                        e && this._createIcons()),
                        "disabled" === t && (this.element.toggleClass("ui-state-disabled", !!e).attr("aria-disabled", e),
                        this.headers.add(this.headers.next()).toggleClass("ui-state-disabled", !!e))
                    },
                    _keydown: function(e) {
                        if (!e.altKey && !e.ctrlKey) {
                            var i = t.ui.keyCode
                              , length = this.headers.length
                              , n = this.headers.index(e.target)
                              , s = false;
                            switch (e.keyCode) {
                            case i.RIGHT:
                            case i.DOWN:
                                s = this.headers[(n + 1) % length];
                                break;
                            case i.LEFT:
                            case i.UP:
                                s = this.headers[(n - 1 + length) % length];
                                break;
                            case i.SPACE:
                            case i.ENTER:
                                this._eventHandler(e);
                                break;
                            case i.HOME:
                                s = this.headers[0];
                                break;
                            case i.END:
                                s = this.headers[length - 1]
                            }
                            s && (t(e.target).attr("tabIndex", -1),
                            t(s).attr("tabIndex", 0),
                            s.focus(),
                            e.preventDefault())
                        }
                    },
                    _panelKeyDown: function(e) {
                        e.keyCode === t.ui.keyCode.UP && e.ctrlKey && t(e.currentTarget).prev().focus()
                    },
                    refresh: function() {
                        var e = this.options;
                        this._processPanels(),
                        false === e.active && true === e.collapsible || !this.headers.length ? (e.active = false,
                        this.active = t()) : false === e.active ? this._activate(0) : this.active.length && !t.contains(this.element[0], this.active[0]) ? this.headers.length === this.headers.find(".ui-state-disabled").length ? (e.active = false,
                        this.active = t()) : this._activate(Math.max(0, e.active - 1)) : e.active = this.headers.index(this.active),
                        this._destroyIcons(),
                        this._refresh()
                    },
                    _processPanels: function() {
                        var t = this.headers
                          , e = this.panels;
                        this.headers = this.element.find(this.options.header).addClass("ui-accordion-header ui-state-default ui-corner-all"),
                        this.panels = this.headers.next().addClass("ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom").filter(":not(.ui-accordion-content-active)").hide(),
                        e && (this._off(t.not(this.headers)),
                        this._off(e.not(this.panels)))
                    },
                    _refresh: function() {
                        var e, i = this.options, n = i.heightStyle, s = this.element.parent();
                        this.active = this._findActive(i.active).addClass("ui-accordion-header-active ui-state-active ui-corner-top").removeClass("ui-corner-all"),
                        this.active.next().addClass("ui-accordion-content-active").show(),
                        this.headers.attr("role", "tab").each((function() {
                            var header = t(this)
                              , e = header.uniqueId().attr("id")
                              , panel = header.next()
                              , i = panel.uniqueId().attr("id");
                            header.attr("aria-controls", i),
                            panel.attr("aria-labelledby", e)
                        }
                        )).next().attr("role", "tabpanel"),
                        this.headers.not(this.active).attr({
                            "aria-selected": "false",
                            "aria-expanded": "false",
                            tabIndex: -1
                        }).next().attr({
                            "aria-hidden": "true"
                        }).hide(),
                        this.active.length ? this.active.attr({
                            "aria-selected": "true",
                            "aria-expanded": "true",
                            tabIndex: 0
                        }).next().attr({
                            "aria-hidden": "false"
                        }) : this.headers.eq(0).attr("tabIndex", 0),
                        this._createIcons(),
                        this._setupEvents(i.event),
                        "fill" === n ? (e = s.height(),
                        this.element.siblings(":visible").each((function() {
                            var i = t(this)
                              , position = i.css("position");
                            "absolute" !== position && "fixed" !== position && (e -= i.outerHeight(true))
                        }
                        )),
                        this.headers.each((function() {
                            e -= t(this).outerHeight(true)
                        }
                        )),
                        this.headers.next().each((function() {
                            t(this).height(Math.max(0, e - t(this).innerHeight() + t(this).height()))
                        }
                        )).css("overflow", "auto")) : "auto" === n && (e = 0,
                        this.headers.next().each((function() {
                            e = Math.max(e, t(this).css("height", "").height())
                        }
                        )).height(e))
                    },
                    _activate: function(index) {
                        var e = this._findActive(index)[0];
                        e !== this.active[0] && (e = e || this.active[0],
                        this._eventHandler({
                            target: e,
                            currentTarget: e,
                            preventDefault: t.noop
                        }))
                    },
                    _findActive: function(selector) {
                        return "number" == typeof selector ? this.headers.eq(selector) : t()
                    },
                    _setupEvents: function(e) {
                        var events = {
                            keydown: "_keydown"
                        };
                        e && t.each(e.split(" "), (function(index, t) {
                            events[t] = "_eventHandler"
                        }
                        )),
                        this._off(this.headers.add(this.headers.next())),
                        this._on(this.headers, events),
                        this._on(this.headers.next(), {
                            keydown: "_panelKeyDown"
                        }),
                        this._hoverable(this.headers),
                        this._focusable(this.headers)
                    },
                    _eventHandler: function(e) {
                        var i = this.options
                          , n = this.active
                          , s = t(e.currentTarget)
                          , o = s[0] === n[0]
                          , a = o && i.collapsible
                          , l = a ? t() : s.next()
                          , h = n.next()
                          , u = {
                            oldHeader: n,
                            oldPanel: h,
                            newHeader: a ? t() : s,
                            newPanel: l
                        };
                        e.preventDefault(),
                        o && !i.collapsible || false === this._trigger("beforeActivate", e, u) || (i.active = !a && this.headers.index(s),
                        this.active = o ? t() : s,
                        this._toggle(u),
                        n.removeClass("ui-accordion-header-active ui-state-active"),
                        i.icons && n.children(".ui-accordion-header-icon").removeClass(i.icons.activeHeader).addClass(i.icons.header),
                        o || (s.removeClass("ui-corner-all").addClass("ui-accordion-header-active ui-state-active ui-corner-top"),
                        i.icons && s.children(".ui-accordion-header-icon").removeClass(i.icons.header).addClass(i.icons.activeHeader),
                        s.next().addClass("ui-accordion-content-active")))
                    },
                    _toggle: function(data) {
                        var e = data.newPanel
                          , i = this.prevShow.length ? this.prevShow : data.oldPanel;
                        this.prevShow.add(this.prevHide).stop(true, true),
                        this.prevShow = e,
                        this.prevHide = i,
                        this.options.animate ? this._animate(e, i, data) : (i.hide(),
                        e.show(),
                        this._toggleComplete(data)),
                        i.attr({
                            "aria-hidden": "true"
                        }),
                        i.prev().attr({
                            "aria-selected": "false",
                            "aria-expanded": "false"
                        }),
                        e.length && i.length ? i.prev().attr({
                            tabIndex: -1,
                            "aria-expanded": "false"
                        }) : e.length && this.headers.filter((function() {
                            return 0 === parseInt(t(this).attr("tabIndex"), 10)
                        }
                        )).attr("tabIndex", -1),
                        e.attr("aria-hidden", "false").prev().attr({
                            "aria-selected": "true",
                            "aria-expanded": "true",
                            tabIndex: 0
                        })
                    },
                    _animate: function(t, e, data) {
                        var i, n, s, o = this, a = 0, l = t.css("box-sizing"), h = t.length && (!e.length || t.index() < e.index()), u = this.options.animate || {}, c = h && u.down || u, p = function() {
                            o._toggleComplete(data)
                        };
                        return "number" == typeof c && (s = c),
                        "string" == typeof c && (n = c),
                        n = n || c.easing || u.easing,
                        s = s || c.duration || u.duration,
                        e.length ? t.length ? (i = t.show().outerHeight(),
                        e.animate(this.hideProps, {
                            duration: s,
                            easing: n,
                            step: function(t, e) {
                                e.now = Math.round(t)
                            }
                        }),
                        t.hide().animate(this.showProps, {
                            duration: s,
                            easing: n,
                            complete: p,
                            step: function(t, n) {
                                n.now = Math.round(t),
                                "height" !== n.prop ? "content-box" === l && (a += n.now) : "content" !== o.options.heightStyle && (n.now = Math.round(i - e.outerHeight() - a),
                                a = 0)
                            }
                        }),
                        void 0) : e.animate(this.hideProps, s, n, p) : t.animate(this.showProps, s, n, p)
                    },
                    _toggleComplete: function(data) {
                        var t = data.oldPanel;
                        t.removeClass("ui-accordion-content-active").prev().removeClass("ui-corner-top").addClass("ui-corner-all"),
                        t.length && (t.parent()[0].className = t.parent()[0].className),
                        this._trigger("activate", null, data)
                    }
                })
                  , menu = t.widget("ui.menu", {
                    version: "1.11.4",
                    defaultElement: "<ul>",
                    delay: 300,
                    options: {
                        icons: {
                            submenu: "ui-icon-carat-1-e"
                        },
                        items: "> *",
                        menus: "ul",
                        position: {
                            my: "left-1 top",
                            at: "right top"
                        },
                        role: "menu",
                        blur: null,
                        focus: null,
                        select: null
                    },
                    _create: function() {
                        this.activeMenu = this.element,
                        this.mouseHandled = false,
                        this.element.uniqueId().addClass("ui-menu ui-widget ui-widget-content").toggleClass("ui-menu-icons", !!this.element.find(".ui-icon").length).attr({
                            role: this.options.role,
                            tabIndex: 0
                        }),
                        this.options.disabled && this.element.addClass("ui-state-disabled").attr("aria-disabled", "true"),
                        this._on({
                            "mousedown .ui-menu-item": function(t) {
                                t.preventDefault()
                            },
                            "click .ui-menu-item": function(e) {
                                var i = t(e.target);
                                !this.mouseHandled && i.not(".ui-state-disabled").length && (this.select(e),
                                e.isPropagationStopped() || (this.mouseHandled = true),
                                i.has(".ui-menu").length ? this.expand(e) : !this.element.is(":focus") && t(this.document[0].activeElement).closest(".ui-menu").length && (this.element.trigger("focus", [true]),
                                this.active && 1 === this.active.parents(".ui-menu").length && clearTimeout(this.timer)))
                            },
                            "mouseenter .ui-menu-item": function(e) {
                                if (!this.previousFilter) {
                                    var i = t(e.currentTarget);
                                    i.siblings(".ui-state-active").removeClass("ui-state-active"),
                                    this.focus(e, i)
                                }
                            },
                            mouseleave: "collapseAll",
                            "mouseleave .ui-menu": "collapseAll",
                            focus: function(t, e) {
                                var i = this.active || this.element.find(this.options.items).eq(0);
                                e || this.focus(t, i)
                            },
                            blur: function(e) {
                                this._delay((function() {
                                    t.contains(this.element[0], this.document[0].activeElement) || this.collapseAll(e)
                                }
                                ))
                            },
                            keydown: "_keydown"
                        }),
                        this.refresh(),
                        this._on(this.document, {
                            click: function(t) {
                                this._closeOnDocumentClick(t) && this.collapseAll(t),
                                this.mouseHandled = false
                            }
                        })
                    },
                    _destroy: function() {
                        this.element.removeAttr("aria-activedescendant").find(".ui-menu").addBack().removeClass("ui-menu ui-widget ui-widget-content ui-menu-icons ui-front").removeAttr("role").removeAttr("tabIndex").removeAttr("aria-labelledby").removeAttr("aria-expanded").removeAttr("aria-hidden").removeAttr("aria-disabled").removeUniqueId().show(),
                        this.element.find(".ui-menu-item").removeClass("ui-menu-item").removeAttr("role").removeAttr("aria-disabled").removeUniqueId().removeClass("ui-state-hover").removeAttr("tabIndex").removeAttr("role").removeAttr("aria-haspopup").children().each((function() {
                            var e = t(this);
                            e.data("ui-menu-submenu-carat") && e.remove()
                        }
                        )),
                        this.element.find(".ui-menu-divider").removeClass("ui-menu-divider ui-widget-content")
                    },
                    _keydown: function(e) {
                        var i, n, s, o, a = true;
                        switch (e.keyCode) {
                        case t.ui.keyCode.PAGE_UP:
                            this.previousPage(e);
                            break;
                        case t.ui.keyCode.PAGE_DOWN:
                            this.nextPage(e);
                            break;
                        case t.ui.keyCode.HOME:
                            this._move("first", "first", e);
                            break;
                        case t.ui.keyCode.END:
                            this._move("last", "last", e);
                            break;
                        case t.ui.keyCode.UP:
                            this.previous(e);
                            break;
                        case t.ui.keyCode.DOWN:
                            this.next(e);
                            break;
                        case t.ui.keyCode.LEFT:
                            this.collapse(e);
                            break;
                        case t.ui.keyCode.RIGHT:
                            this.active && !this.active.is(".ui-state-disabled") && this.expand(e);
                            break;
                        case t.ui.keyCode.ENTER:
                        case t.ui.keyCode.SPACE:
                            this._activate(e);
                            break;
                        case t.ui.keyCode.ESCAPE:
                            this.collapse(e);
                            break;
                        default:
                            a = false,
                            n = this.previousFilter || "",
                            s = String.fromCharCode(e.keyCode),
                            o = false,
                            clearTimeout(this.filterTimer),
                            s === n ? o = true : s = n + s,
                            i = this._filterMenuItems(s),
                            (i = o && -1 !== i.index(this.active.next()) ? this.active.nextAll(".ui-menu-item") : i).length || (s = String.fromCharCode(e.keyCode),
                            i = this._filterMenuItems(s)),
                            i.length ? (this.focus(e, i),
                            this.previousFilter = s,
                            this.filterTimer = this._delay((function() {
                                delete this.previousFilter
                            }
                            ), 1e3)) : delete this.previousFilter
                        }
                        a && e.preventDefault()
                    },
                    _activate: function(t) {
                        this.active.is(".ui-state-disabled") || (this.active.is("[aria-haspopup='true']") ? this.expand(t) : this.select(t))
                    },
                    refresh: function() {
                        var e, items, i = this, icon = this.options.icons.submenu, n = this.element.find(this.options.menus);
                        this.element.toggleClass("ui-menu-icons", !!this.element.find(".ui-icon").length),
                        n.filter(":not(.ui-menu)").addClass("ui-menu ui-widget ui-widget-content ui-front").hide().attr({
                            role: this.options.role,
                            "aria-hidden": "true",
                            "aria-expanded": "false"
                        }).each((function() {
                            var menu = t(this)
                              , e = menu.parent()
                              , i = t("<span>").addClass("ui-menu-icon ui-icon " + icon).data("ui-menu-submenu-carat", true);
                            e.attr("aria-haspopup", "true").prepend(i),
                            menu.attr("aria-labelledby", e.attr("id"))
                        }
                        )),
                        (items = (e = n.add(this.element)).find(this.options.items)).not(".ui-menu-item").each((function() {
                            var e = t(this);
                            i._isDivider(e) && e.addClass("ui-widget-content ui-menu-divider")
                        }
                        )),
                        items.not(".ui-menu-item, .ui-menu-divider").addClass("ui-menu-item").uniqueId().attr({
                            tabIndex: -1,
                            role: this._itemRole()
                        }),
                        items.filter(".ui-state-disabled").attr("aria-disabled", "true"),
                        this.active && !t.contains(this.element[0], this.active[0]) && this.blur()
                    },
                    _itemRole: function() {
                        return {
                            menu: "menuitem",
                            listbox: "option"
                        }[this.options.role]
                    },
                    _setOption: function(t, e) {
                        "icons" === t && this.element.find(".ui-menu-icon").removeClass(this.options.icons.submenu).addClass(e.submenu),
                        "disabled" === t && this.element.toggleClass("ui-state-disabled", !!e).attr("aria-disabled", e),
                        this._super(t, e)
                    },
                    focus: function(t, e) {
                        var i, n;
                        this.blur(t, t && "focus" === t.type),
                        this._scrollIntoView(e),
                        this.active = e.first(),
                        n = this.active.addClass("ui-state-focus").removeClass("ui-state-active"),
                        this.options.role && this.element.attr("aria-activedescendant", n.attr("id")),
                        this.active.parent().closest(".ui-menu-item").addClass("ui-state-active"),
                        t && "keydown" === t.type ? this._close() : this.timer = this._delay((function() {
                            this._close()
                        }
                        ), this.delay),
                        (i = e.children(".ui-menu")).length && t && /^mouse/.test(t.type) && this._startOpening(i),
                        this.activeMenu = e.parent(),
                        this._trigger("focus", t, {
                            item: e
                        })
                    },
                    _scrollIntoView: function(e) {
                        var i, n, s, o, a, l;
                        this._hasScroll() && (i = parseFloat(t.css(this.activeMenu[0], "borderTopWidth")) || 0,
                        n = parseFloat(t.css(this.activeMenu[0], "paddingTop")) || 0,
                        s = e.offset().top - this.activeMenu.offset().top - i - n,
                        o = this.activeMenu.scrollTop(),
                        a = this.activeMenu.height(),
                        l = e.outerHeight(),
                        s < 0 ? this.activeMenu.scrollTop(o + s) : s + l > a && this.activeMenu.scrollTop(o + s - a + l))
                    },
                    blur: function(t, e) {
                        e || clearTimeout(this.timer),
                        this.active && (this.active.removeClass("ui-state-focus"),
                        this.active = null,
                        this._trigger("blur", t, {
                            item: this.active
                        }))
                    },
                    _startOpening: function(t) {
                        clearTimeout(this.timer),
                        "true" === t.attr("aria-hidden") && (this.timer = this._delay((function() {
                            this._close(),
                            this._open(t)
                        }
                        ), this.delay))
                    },
                    _open: function(e) {
                        var position = t.extend({
                            of: this.active
                        }, this.options.position);
                        clearTimeout(this.timer),
                        this.element.find(".ui-menu").not(e.parents(".ui-menu")).hide().attr("aria-hidden", "true"),
                        e.show().removeAttr("aria-hidden").attr("aria-expanded", "true").position(position)
                    },
                    collapseAll: function(e, all) {
                        clearTimeout(this.timer),
                        this.timer = this._delay((function() {
                            var i = all ? this.element : t(e && e.target).closest(this.element.find(".ui-menu"));
                            i.length || (i = this.element),
                            this._close(i),
                            this.blur(e),
                            this.activeMenu = i
                        }
                        ), this.delay)
                    },
                    _close: function(t) {
                        t || (t = this.active ? this.active.parent() : this.element),
                        t.find(".ui-menu").hide().attr("aria-hidden", "true").attr("aria-expanded", "false").end().find(".ui-state-active").not(".ui-state-focus").removeClass("ui-state-active")
                    },
                    _closeOnDocumentClick: function(e) {
                        return !t(e.target).closest(".ui-menu").length
                    },
                    _isDivider: function(t) {
                        return !/[^\-\u2014\u2013\s]/.test(t.text())
                    },
                    collapse: function(t) {
                        var e = this.active && this.active.parent().closest(".ui-menu-item", this.element);
                        e && e.length && (this._close(),
                        this.focus(t, e))
                    },
                    expand: function(t) {
                        var e = this.active && this.active.children(".ui-menu ").find(this.options.items).first();
                        e && e.length && (this._open(e.parent()),
                        this._delay((function() {
                            this.focus(t, e)
                        }
                        )))
                    },
                    next: function(t) {
                        this._move("next", "first", t)
                    },
                    previous: function(t) {
                        this._move("prev", "last", t)
                    },
                    isFirstItem: function() {
                        return this.active && !this.active.prevAll(".ui-menu-item").length
                    },
                    isLastItem: function() {
                        return this.active && !this.active.nextAll(".ui-menu-item").length
                    },
                    _move: function(t, filter, e) {
                        var i;
                        this.active && (i = "first" === t || "last" === t ? this.active["first" === t ? "prevAll" : "nextAll"](".ui-menu-item").eq(-1) : this.active[t + "All"](".ui-menu-item").eq(0)),
                        i && i.length && this.active || (i = this.activeMenu.find(this.options.items)[filter]()),
                        this.focus(e, i)
                    },
                    nextPage: function(e) {
                        var i, base, n;
                        if (!this.active)
                            return this.next(e),
                            void 0;
                        this.isLastItem() || (this._hasScroll() ? (base = this.active.offset().top,
                        n = this.element.height(),
                        this.active.nextAll(".ui-menu-item").each((function() {
                            return (i = t(this)).offset().top - base - n < 0
                        }
                        )),
                        this.focus(e, i)) : this.focus(e, this.activeMenu.find(this.options.items)[this.active ? "last" : "first"]()))
                    },
                    previousPage: function(e) {
                        var i, base, n;
                        if (!this.active)
                            return this.next(e),
                            void 0;
                        this.isFirstItem() || (this._hasScroll() ? (base = this.active.offset().top,
                        n = this.element.height(),
                        this.active.prevAll(".ui-menu-item").each((function() {
                            return (i = t(this)).offset().top - base + n > 0
                        }
                        )),
                        this.focus(e, i)) : this.focus(e, this.activeMenu.find(this.options.items).first()))
                    },
                    _hasScroll: function() {
                        return this.element.outerHeight() < this.element.prop("scrollHeight")
                    },
                    select: function(e) {
                        this.active = this.active || t(e.target).closest(".ui-menu-item");
                        var i = {
                            item: this.active
                        };
                        this.active.has(".ui-menu").length || this.collapseAll(e, true),
                        this._trigger("select", e, i)
                    },
                    _filterMenuItems: function(e) {
                        var i = e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&")
                          , n = new RegExp("^" + i,"i");
                        return this.activeMenu.find(this.options.items).filter(".ui-menu-item").filter((function() {
                            return n.test(t.trim(t(this).text()))
                        }
                        ))
                    }
                });
                /*!
 * jQuery UI Accordion 1.11.4
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/accordion/
 */
                /*!
 * jQuery UI Autocomplete 1.11.4
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/autocomplete/
 */
                t.widget("ui.autocomplete", {
                    version: "1.11.4",
                    defaultElement: "<input>",
                    options: {
                        appendTo: null,
                        autoFocus: false,
                        delay: 300,
                        minLength: 1,
                        position: {
                            my: "left top",
                            at: "left bottom",
                            collision: "none"
                        },
                        source: null,
                        change: null,
                        close: null,
                        focus: null,
                        open: null,
                        response: null,
                        search: null,
                        select: null
                    },
                    requestIndex: 0,
                    pending: 0,
                    _create: function() {
                        var e, i, n, s = this.element[0].nodeName.toLowerCase(), o = "textarea" === s, a = "input" === s;
                        this.isMultiLine = !!o || !a && this.element.prop("isContentEditable"),
                        this.valueMethod = this.element[o || a ? "val" : "text"],
                        this.isNewMenu = true,
                        this.element.addClass("ui-autocomplete-input").attr("autocomplete", "off"),
                        this._on(this.element, {
                            keydown: function(s) {
                                if (this.element.prop("readOnly"))
                                    return e = true,
                                    n = true,
                                    i = true,
                                    void 0;
                                e = false,
                                n = false,
                                i = false;
                                var o = t.ui.keyCode;
                                switch (s.keyCode) {
                                case o.PAGE_UP:
                                    e = true,
                                    this._move("previousPage", s);
                                    break;
                                case o.PAGE_DOWN:
                                    e = true,
                                    this._move("nextPage", s);
                                    break;
                                case o.UP:
                                    e = true,
                                    this._keyEvent("previous", s);
                                    break;
                                case o.DOWN:
                                    e = true,
                                    this._keyEvent("next", s);
                                    break;
                                case o.ENTER:
                                    this.menu.active && (e = true,
                                    s.preventDefault(),
                                    this.menu.select(s));
                                    break;
                                case o.TAB:
                                    this.menu.active && this.menu.select(s);
                                    break;
                                case o.ESCAPE:
                                    this.menu.element.is(":visible") && (this.isMultiLine || this._value(this.term),
                                    this.close(s),
                                    s.preventDefault());
                                    break;
                                default:
                                    i = true,
                                    this._searchTimeout(s)
                                }
                            },
                            keypress: function(n) {
                                if (e)
                                    return e = false,
                                    this.isMultiLine && !this.menu.element.is(":visible") || n.preventDefault(),
                                    void 0;
                                if (!i) {
                                    var s = t.ui.keyCode;
                                    switch (n.keyCode) {
                                    case s.PAGE_UP:
                                        this._move("previousPage", n);
                                        break;
                                    case s.PAGE_DOWN:
                                        this._move("nextPage", n);
                                        break;
                                    case s.UP:
                                        this._keyEvent("previous", n);
                                        break;
                                    case s.DOWN:
                                        this._keyEvent("next", n)
                                    }
                                }
                            },
                            input: function(t) {
                                if (n)
                                    return n = false,
                                    t.preventDefault(),
                                    void 0;
                                this._searchTimeout(t)
                            },
                            focus: function() {
                                this.selectedItem = null,
                                this.previous = this._value()
                            },
                            blur: function(t) {
                                if (this.cancelBlur)
                                    return delete this.cancelBlur,
                                    void 0;
                                clearTimeout(this.searching),
                                this.close(t),
                                this._change(t)
                            }
                        }),
                        this._initSource(),
                        this.menu = t("<ul>").addClass("ui-autocomplete ui-front").appendTo(this._appendTo()).menu({
                            role: null
                        }).hide().menu("instance"),
                        this._on(this.menu.element, {
                            mousedown: function(e) {
                                e.preventDefault(),
                                this.cancelBlur = true,
                                this._delay((function() {
                                    delete this.cancelBlur
                                }
                                ));
                                var i = this.menu.element[0];
                                t(e.target).closest(".ui-menu-item").length || this._delay((function() {
                                    var e = this;
                                    this.document.one("mousedown", (function(n) {
                                        n.target === e.element[0] || n.target === i || t.contains(i, n.target) || e.close()
                                    }
                                    ))
                                }
                                ))
                            },
                            menufocus: function(e, i) {
                                var n, s;
                                if (this.isNewMenu && (this.isNewMenu = false,
                                e.originalEvent && /^mouse/.test(e.originalEvent.type)))
                                    return this.menu.blur(),
                                    this.document.one("mousemove", (function() {
                                        t(e.target).trigger(e.originalEvent)
                                    }
                                    )),
                                    void 0;
                                s = i.item.data("ui-autocomplete-item"),
                                false !== this._trigger("focus", e, {
                                    item: s
                                }) && e.originalEvent && /^key/.test(e.originalEvent.type) && this._value(s.value),
                                (n = i.item.attr("aria-label") || s.value) && t.trim(n).length && (this.liveRegion.children().hide(),
                                t("<div>").text(n).appendTo(this.liveRegion))
                            },
                            menuselect: function(t, e) {
                                var i = e.item.data("ui-autocomplete-item")
                                  , n = this.previous;
                                this.element[0] !== this.document[0].activeElement && (this.element.focus(),
                                this.previous = n,
                                this._delay((function() {
                                    this.previous = n,
                                    this.selectedItem = i
                                }
                                ))),
                                false !== this._trigger("select", t, {
                                    item: i
                                }) && this._value(i.value),
                                this.term = this._value(),
                                this.close(t),
                                this.selectedItem = i
                            }
                        }),
                        this.liveRegion = t("<span>", {
                            role: "status",
                            "aria-live": "assertive",
                            "aria-relevant": "additions"
                        }).addClass("ui-helper-hidden-accessible").appendTo(this.document[0].body),
                        this._on(this.window, {
                            beforeunload: function() {
                                this.element.removeAttr("autocomplete")
                            }
                        })
                    },
                    _destroy: function() {
                        clearTimeout(this.searching),
                        this.element.removeClass("ui-autocomplete-input").removeAttr("autocomplete"),
                        this.menu.element.remove(),
                        this.liveRegion.remove()
                    },
                    _setOption: function(t, e) {
                        this._super(t, e),
                        "source" === t && this._initSource(),
                        "appendTo" === t && this.menu.element.appendTo(this._appendTo()),
                        "disabled" === t && e && this.xhr && this.xhr.abort()
                    },
                    _appendTo: function() {
                        var e = this.options.appendTo;
                        return e && (e = e.jquery || e.nodeType ? t(e) : this.document.find(e).eq(0)),
                        e && e[0] || (e = this.element.closest(".ui-front")),
                        e.length || (e = this.document[0].body),
                        e
                    },
                    _initSource: function() {
                        var e, url, i = this;
                        t.isArray(this.options.source) ? (e = this.options.source,
                        this.source = function(i, n) {
                            n(t.ui.autocomplete.filter(e, i.term))
                        }
                        ) : "string" == typeof this.options.source ? (url = this.options.source,
                        this.source = function(e, n) {
                            i.xhr && i.xhr.abort(),
                            i.xhr = t.ajax({
                                url: url,
                                data: e,
                                dataType: "json",
                                success: function(data) {
                                    n(data)
                                },
                                error: function() {
                                    n([])
                                }
                            })
                        }
                        ) : this.source = this.options.source
                    },
                    _searchTimeout: function(t) {
                        clearTimeout(this.searching),
                        this.searching = this._delay((function() {
                            var e = this.term === this._value()
                              , i = this.menu.element.is(":visible")
                              , n = t.altKey || t.ctrlKey || t.metaKey || t.shiftKey;
                            e && (!e || i || n) || (this.selectedItem = null,
                            this.search(null, t))
                        }
                        ), this.options.delay)
                    },
                    search: function(t, e) {
                        return t = null != t ? t : this._value(),
                        this.term = this._value(),
                        t.length < this.options.minLength ? this.close(e) : false !== this._trigger("search", e) ? this._search(t) : void 0
                    },
                    _search: function(t) {
                        this.pending++,
                        this.element.addClass("ui-autocomplete-loading"),
                        this.cancelSearch = false,
                        this.source({
                            term: t
                        }, this._response())
                    },
                    _response: function() {
                        var index = ++this.requestIndex;
                        return t.proxy((function(t) {
                            index === this.requestIndex && this.__response(t),
                            this.pending--,
                            this.pending || this.element.removeClass("ui-autocomplete-loading")
                        }
                        ), this)
                    },
                    __response: function(t) {
                        t && (t = this._normalize(t)),
                        this._trigger("response", null, {
                            content: t
                        }),
                        !this.options.disabled && t && t.length && !this.cancelSearch ? (this._suggest(t),
                        this._trigger("open")) : this._close()
                    },
                    close: function(t) {
                        this.cancelSearch = true,
                        this._close(t)
                    },
                    _close: function(t) {
                        this.menu.element.is(":visible") && (this.menu.element.hide(),
                        this.menu.blur(),
                        this.isNewMenu = true,
                        this._trigger("close", t))
                    },
                    _change: function(t) {
                        this.previous !== this._value() && this._trigger("change", t, {
                            item: this.selectedItem
                        })
                    },
                    _normalize: function(items) {
                        return items.length && items[0].label && items[0].value ? items : t.map(items, (function(e) {
                            return "string" == typeof e ? {
                                label: e,
                                value: e
                            } : t.extend({}, e, {
                                label: e.label || e.value,
                                value: e.value || e.label
                            })
                        }
                        ))
                    },
                    _suggest: function(items) {
                        var e = this.menu.element.empty();
                        this._renderMenu(e, items),
                        this.isNewMenu = true,
                        this.menu.refresh(),
                        e.show(),
                        this._resizeMenu(),
                        e.position(t.extend({
                            of: this.element
                        }, this.options.position)),
                        this.options.autoFocus && this.menu.next()
                    },
                    _resizeMenu: function() {
                        var t = this.menu.element;
                        t.outerWidth(Math.max(t.width("").outerWidth() + 1, this.element.outerWidth()))
                    },
                    _renderMenu: function(e, items) {
                        var i = this;
                        t.each(items, (function(index, t) {
                            i._renderItemData(e, t)
                        }
                        ))
                    },
                    _renderItemData: function(t, e) {
                        return this._renderItem(t, e).data("ui-autocomplete-item", e)
                    },
                    _renderItem: function(e, i) {
                        return t("<li>").text(i.label).appendTo(e)
                    },
                    _move: function(t, e) {
                        return this.menu.element.is(":visible") ? this.menu.isFirstItem() && /^previous/.test(t) || this.menu.isLastItem() && /^next/.test(t) ? (this.isMultiLine || this._value(this.term),
                        this.menu.blur(),
                        void 0) : (this.menu[t](e),
                        void 0) : (this.search(null, e),
                        void 0)
                    },
                    widget: function() {
                        return this.menu.element
                    },
                    _value: function() {
                        return this.valueMethod.apply(this.element, arguments)
                    },
                    _keyEvent: function(t, e) {
                        this.isMultiLine && !this.menu.element.is(":visible") || (this._move(t, e),
                        e.preventDefault())
                    }
                }),
                t.extend(t.ui.autocomplete, {
                    escapeRegex: function(t) {
                        return t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&")
                    },
                    filter: function(e, i) {
                        var n = new RegExp(t.ui.autocomplete.escapeRegex(i),"i");
                        return t.grep(e, (function(t) {
                            return n.test(t.label || t.value || t)
                        }
                        ))
                    }
                }),
                t.widget("ui.autocomplete", t.ui.autocomplete, {
                    options: {
                        messages: {
                            noResults: "No search results.",
                            results: function(t) {
                                return t + (t > 1 ? " results are" : " result is") + " available, use up and down arrow keys to navigate."
                            }
                        }
                    },
                    __response: function(e) {
                        var i;
                        this._superApply(arguments),
                        this.options.disabled || this.cancelSearch || (i = e && e.length ? this.options.messages.results(e.length) : this.options.messages.noResults,
                        this.liveRegion.children().hide(),
                        t("<div>").text(i).appendTo(this.liveRegion))
                    }
                });
                var b = t.ui.autocomplete, y, _ = "ui-button ui-widget ui-state-default ui-corner-all", w = "ui-button-icons-only ui-button-icon-only ui-button-text-icons ui-button-text-icon-primary ui-button-text-icon-secondary ui-button-text-only", x = function() {
                    var form = t(this);
                    setTimeout((function() {
                        form.find(":ui-button").button("refresh")
                    }
                    ), 1)
                }, k = function(e) {
                    var i = e.name
                      , form = e.form
                      , n = t([]);
                    return i && (i = i.replace(/'/g, "\\'"),
                    n = form ? t(form).find("[name='" + i + "'][type=radio]") : t("[name='" + i + "'][type=radio]", e.ownerDocument).filter((function() {
                        return !this.form
                    }
                    ))),
                    n
                };
                /*!
 * jQuery UI Button 1.11.4
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/button/
 */
                t.widget("ui.button", {
                    version: "1.11.4",
                    defaultElement: "<button>",
                    options: {
                        disabled: null,
                        text: true,
                        label: null,
                        icons: {
                            primary: null,
                            secondary: null
                        }
                    },
                    _create: function() {
                        this.element.closest("form").unbind("reset" + this.eventNamespace).bind("reset" + this.eventNamespace, x),
                        "boolean" != typeof this.options.disabled ? this.options.disabled = !!this.element.prop("disabled") : this.element.prop("disabled", this.options.disabled),
                        this._determineButtonType(),
                        this.hasTitle = !!this.buttonElement.attr("title");
                        var e = this
                          , i = this.options
                          , n = "checkbox" === this.type || "radio" === this.type
                          , s = n ? "" : "ui-state-active";
                        null === i.label && (i.label = "input" === this.type ? this.buttonElement.val() : this.buttonElement.html()),
                        this._hoverable(this.buttonElement),
                        this.buttonElement.addClass(_).attr("role", "button").bind("mouseenter" + this.eventNamespace, (function() {
                            i.disabled || this === y && t(this).addClass("ui-state-active")
                        }
                        )).bind("mouseleave" + this.eventNamespace, (function() {
                            i.disabled || t(this).removeClass(s)
                        }
                        )).bind("click" + this.eventNamespace, (function(t) {
                            i.disabled && (t.preventDefault(),
                            t.stopImmediatePropagation())
                        }
                        )),
                        this._on({
                            focus: function() {
                                this.buttonElement.addClass("ui-state-focus")
                            },
                            blur: function() {
                                this.buttonElement.removeClass("ui-state-focus")
                            }
                        }),
                        n && this.element.bind("change" + this.eventNamespace, (function() {
                            e.refresh()
                        }
                        )),
                        "checkbox" === this.type ? this.buttonElement.bind("click" + this.eventNamespace, (function() {
                            if (i.disabled)
                                return false
                        }
                        )) : "radio" === this.type ? this.buttonElement.bind("click" + this.eventNamespace, (function() {
                            if (i.disabled)
                                return false;
                            t(this).addClass("ui-state-active"),
                            e.buttonElement.attr("aria-pressed", "true");
                            var n = e.element[0];
                            k(n).not(n).map((function() {
                                return t(this).button("widget")[0]
                            }
                            )).removeClass("ui-state-active").attr("aria-pressed", "false")
                        }
                        )) : (this.buttonElement.bind("mousedown" + this.eventNamespace, (function() {
                            if (i.disabled)
                                return false;
                            t(this).addClass("ui-state-active"),
                            y = this,
                            e.document.one("mouseup", (function() {
                                y = null
                            }
                            ))
                        }
                        )).bind("mouseup" + this.eventNamespace, (function() {
                            if (i.disabled)
                                return false;
                            t(this).removeClass("ui-state-active")
                        }
                        )).bind("keydown" + this.eventNamespace, (function(e) {
                            if (i.disabled)
                                return false;
                            e.keyCode !== t.ui.keyCode.SPACE && e.keyCode !== t.ui.keyCode.ENTER || t(this).addClass("ui-state-active")
                        }
                        )).bind("keyup" + this.eventNamespace + " blur" + this.eventNamespace, (function() {
                            t(this).removeClass("ui-state-active")
                        }
                        )),
                        this.buttonElement.is("a") && this.buttonElement.keyup((function(e) {
                            e.keyCode === t.ui.keyCode.SPACE && t(this).click()
                        }
                        ))),
                        this._setOption("disabled", i.disabled),
                        this._resetButton()
                    },
                    _determineButtonType: function() {
                        var t, e, i;
                        this.element.is("[type=checkbox]") ? this.type = "checkbox" : this.element.is("[type=radio]") ? this.type = "radio" : this.element.is("input") ? this.type = "input" : this.type = "button",
                        "checkbox" === this.type || "radio" === this.type ? (t = this.element.parents().last(),
                        e = "label[for='" + this.element.attr("id") + "']",
                        this.buttonElement = t.find(e),
                        this.buttonElement.length || (t = t.length ? t.siblings() : this.element.siblings(),
                        this.buttonElement = t.filter(e),
                        this.buttonElement.length || (this.buttonElement = t.find(e))),
                        this.element.addClass("ui-helper-hidden-accessible"),
                        (i = this.element.is(":checked")) && this.buttonElement.addClass("ui-state-active"),
                        this.buttonElement.prop("aria-pressed", i)) : this.buttonElement = this.element
                    },
                    widget: function() {
                        return this.buttonElement
                    },
                    _destroy: function() {
                        this.element.removeClass("ui-helper-hidden-accessible"),
                        this.buttonElement.removeClass(_ + " ui-state-active " + w).removeAttr("role").removeAttr("aria-pressed").html(this.buttonElement.find(".ui-button-text").html()),
                        this.hasTitle || this.buttonElement.removeAttr("title")
                    },
                    _setOption: function(t, e) {
                        if (this._super(t, e),
                        "disabled" === t)
                            return this.widget().toggleClass("ui-state-disabled", !!e),
                            this.element.prop("disabled", !!e),
                            e && ("checkbox" === this.type || "radio" === this.type ? this.buttonElement.removeClass("ui-state-focus") : this.buttonElement.removeClass("ui-state-focus ui-state-active")),
                            void 0;
                        this._resetButton()
                    },
                    refresh: function() {
                        var e = this.element.is("input, button") ? this.element.is(":disabled") : this.element.hasClass("ui-button-disabled");
                        e !== this.options.disabled && this._setOption("disabled", e),
                        "radio" === this.type ? k(this.element[0]).each((function() {
                            t(this).is(":checked") ? t(this).button("widget").addClass("ui-state-active").attr("aria-pressed", "true") : t(this).button("widget").removeClass("ui-state-active").attr("aria-pressed", "false")
                        }
                        )) : "checkbox" === this.type && (this.element.is(":checked") ? this.buttonElement.addClass("ui-state-active").attr("aria-pressed", "true") : this.buttonElement.removeClass("ui-state-active").attr("aria-pressed", "false"))
                    },
                    _resetButton: function() {
                        if ("input" === this.type)
                            return this.options.label && this.element.val(this.options.label),
                            void 0;
                        var e = this.buttonElement.removeClass(w)
                          , i = t("<span></span>", this.document[0]).addClass("ui-button-text").html(this.options.label).appendTo(e.empty()).text()
                          , n = this.options.icons
                          , s = n.primary && n.secondary
                          , o = [];
                        n.primary || n.secondary ? (this.options.text && o.push("ui-button-text-icon" + (s ? "s" : n.primary ? "-primary" : "-secondary")),
                        n.primary && e.prepend("<span class='ui-button-icon-primary ui-icon " + n.primary + "'></span>"),
                        n.secondary && e.append("<span class='ui-button-icon-secondary ui-icon " + n.secondary + "'></span>"),
                        this.options.text || (o.push(s ? "ui-button-icons-only" : "ui-button-icon-only"),
                        this.hasTitle || e.attr("title", t.trim(i)))) : o.push("ui-button-text-only"),
                        e.addClass(o.join(" "))
                    }
                }),
                t.widget("ui.buttonset", {
                    version: "1.11.4",
                    options: {
                        items: "button, input[type=button], input[type=submit], input[type=reset], input[type=checkbox], input[type=radio], a, :data(ui-button)"
                    },
                    _create: function() {
                        this.element.addClass("ui-buttonset")
                    },
                    _init: function() {
                        this.refresh()
                    },
                    _setOption: function(t, e) {
                        "disabled" === t && this.buttons.button("option", t, e),
                        this._super(t, e)
                    },
                    refresh: function() {
                        var e = "rtl" === this.element.css("direction")
                          , i = this.element.find(this.options.items)
                          , n = i.filter(":ui-button");
                        i.not(":ui-button").button(),
                        n.button("refresh"),
                        this.buttons = i.map((function() {
                            return t(this).button("widget")[0]
                        }
                        )).removeClass("ui-corner-all ui-corner-left ui-corner-right").filter(":first").addClass(e ? "ui-corner-right" : "ui-corner-left").end().filter(":last").addClass(e ? "ui-corner-left" : "ui-corner-right").end().end()
                    },
                    _destroy: function() {
                        this.element.removeClass("ui-buttonset"),
                        this.buttons.map((function() {
                            return t(this).button("widget")[0]
                        }
                        )).removeClass("ui-corner-left ui-corner-right").end().button("destroy")
                    }
                });
                var button = t.ui.button, C;
                /*!
 * jQuery UI Datepicker 1.11.4
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/datepicker/
 */
                t.extend(t.ui, {
                    datepicker: {
                        version: "1.11.4"
                    }
                }),
                t.extend(n.prototype, {
                    markerClassName: "hasDatepicker",
                    maxRows: 4,
                    _widgetDatepicker: function() {
                        return this.dpDiv
                    },
                    setDefaults: function(settings) {
                        return a(this._defaults, settings || {}),
                        this
                    },
                    _attachDatepicker: function(e, settings) {
                        var i, n, s;
                        n = "div" === (i = e.nodeName.toLowerCase()) || "span" === i,
                        e.id || (this.uuid += 1,
                        e.id = "dp" + this.uuid),
                        (s = this._newInst(t(e), n)).settings = t.extend({}, settings || {}),
                        "input" === i ? this._connectDatepicker(e, s) : n && this._inlineDatepicker(e, s)
                    },
                    _newInst: function(e, i) {
                        var id;
                        return {
                            id: e[0].id.replace(/([^A-Za-z0-9_\-])/g, "\\\\$1"),
                            input: e,
                            selectedDay: 0,
                            selectedMonth: 0,
                            selectedYear: 0,
                            drawMonth: 0,
                            drawYear: 0,
                            inline: i,
                            dpDiv: i ? s(t("<div class='" + this._inlineClass + " ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>")) : this.dpDiv
                        }
                    },
                    _connectDatepicker: function(e, i) {
                        var input = t(e);
                        i.append = t([]),
                        i.trigger = t([]),
                        input.hasClass(this.markerClassName) || (this._attachments(input, i),
                        input.addClass(this.markerClassName).keydown(this._doKeyDown).keypress(this._doKeyPress).keyup(this._doKeyUp),
                        this._autoSize(i),
                        t.data(e, "datepicker", i),
                        i.settings.disabled && this._disableDatepicker(e))
                    },
                    _attachments: function(input, e) {
                        var i, n, s, o = this._get(e, "appendText"), a = this._get(e, "isRTL");
                        e.append && e.append.remove(),
                        o && (e.append = t("<span class='" + this._appendClass + "'>" + o + "</span>"),
                        input[a ? "before" : "after"](e.append)),
                        input.unbind("focus", this._showDatepicker),
                        e.trigger && e.trigger.remove(),
                        "focus" !== (i = this._get(e, "showOn")) && "both" !== i || input.focus(this._showDatepicker),
                        "button" !== i && "both" !== i || (n = this._get(e, "buttonText"),
                        s = this._get(e, "buttonImage"),
                        e.trigger = t(this._get(e, "buttonImageOnly") ? t("<img/>").addClass(this._triggerClass).attr({
                            src: s,
                            alt: n,
                            title: n
                        }) : t("<button type='button'></button>").addClass(this._triggerClass).html(s ? t("<img/>").attr({
                            src: s,
                            alt: n,
                            title: n
                        }) : n)),
                        input[a ? "before" : "after"](e.trigger),
                        e.trigger.click((function() {
                            return t.datepicker._datepickerShowing && t.datepicker._lastInput === input[0] ? t.datepicker._hideDatepicker() : t.datepicker._datepickerShowing && t.datepicker._lastInput !== input[0] ? (t.datepicker._hideDatepicker(),
                            t.datepicker._showDatepicker(input[0])) : t.datepicker._showDatepicker(input[0]),
                            false
                        }
                        )))
                    },
                    _autoSize: function(t) {
                        if (this._get(t, "autoSize") && !t.inline) {
                            var e, i, n, s, date = new Date(2009,11,20), o = this._get(t, "dateFormat");
                            o.match(/[DM]/) && (e = function(names) {
                                for (i = 0,
                                n = 0,
                                s = 0; s < names.length; s++)
                                    names[s].length > i && (i = names[s].length,
                                    n = s);
                                return n
                            }
                            ,
                            date.setMonth(e(this._get(t, o.match(/MM/) ? "monthNames" : "monthNamesShort"))),
                            date.setDate(e(this._get(t, o.match(/DD/) ? "dayNames" : "dayNamesShort")) + 20 - date.getDay())),
                            t.input.attr("size", this._formatDate(t, date).length)
                        }
                    },
                    _inlineDatepicker: function(e, i) {
                        var n = t(e);
                        n.hasClass(this.markerClassName) || (n.addClass(this.markerClassName).append(i.dpDiv),
                        t.data(e, "datepicker", i),
                        this._setDate(i, this._getDefaultDate(i), true),
                        this._updateDatepicker(i),
                        this._updateAlternate(i),
                        i.settings.disabled && this._disableDatepicker(e),
                        i.dpDiv.css("display", "block"))
                    },
                    _dialogDatepicker: function(input, date, e, settings, i) {
                        var id, n, s, o, l, h = this._dialogInst;
                        return h || (this.uuid += 1,
                        id = "dp" + this.uuid,
                        this._dialogInput = t("<input type='text' id='" + id + "' style='position: absolute; top: -100px; width: 0px;'/>"),
                        this._dialogInput.keydown(this._doKeyDown),
                        t("body").append(this._dialogInput),
                        (h = this._dialogInst = this._newInst(this._dialogInput, false)).settings = {},
                        t.data(this._dialogInput[0], "datepicker", h)),
                        a(h.settings, settings || {}),
                        date = date && date.constructor === Date ? this._formatDate(h, date) : date,
                        this._dialogInput.val(date),
                        this._pos = i ? i.length ? i : [i.pageX, i.pageY] : null,
                        this._pos || (n = document.documentElement.clientWidth,
                        s = document.documentElement.clientHeight,
                        o = document.documentElement.scrollLeft || document.body.scrollLeft,
                        l = document.documentElement.scrollTop || document.body.scrollTop,
                        this._pos = [n / 2 - 100 + o, s / 2 - 150 + l]),
                        this._dialogInput.css("left", this._pos[0] + 20 + "px").css("top", this._pos[1] + "px"),
                        h.settings.onSelect = e,
                        this._inDialog = true,
                        this.dpDiv.addClass(this._dialogClass),
                        this._showDatepicker(this._dialogInput[0]),
                        t.blockUI && t.blockUI(this.dpDiv),
                        t.data(this._dialogInput[0], "datepicker", h),
                        this
                    },
                    _destroyDatepicker: function(e) {
                        var i, n = t(e), s = t.data(e, "datepicker");
                        n.hasClass(this.markerClassName) && (i = e.nodeName.toLowerCase(),
                        t.removeData(e, "datepicker"),
                        "input" === i ? (s.append.remove(),
                        s.trigger.remove(),
                        n.removeClass(this.markerClassName).unbind("focus", this._showDatepicker).unbind("keydown", this._doKeyDown).unbind("keypress", this._doKeyPress).unbind("keyup", this._doKeyUp)) : "div" !== i && "span" !== i || n.removeClass(this.markerClassName).empty(),
                        C === s && (C = null))
                    },
                    _enableDatepicker: function(e) {
                        var i, n, s = t(e), o = t.data(e, "datepicker");
                        s.hasClass(this.markerClassName) && ("input" === (i = e.nodeName.toLowerCase()) ? (e.disabled = false,
                        o.trigger.filter("button").each((function() {
                            this.disabled = false
                        }
                        )).end().filter("img").css({
                            opacity: "1.0",
                            cursor: ""
                        })) : "div" !== i && "span" !== i || ((n = s.children("." + this._inlineClass)).children().removeClass("ui-state-disabled"),
                        n.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", false)),
                        this._disabledInputs = t.map(this._disabledInputs, (function(t) {
                            return t === e ? null : t
                        }
                        )))
                    },
                    _disableDatepicker: function(e) {
                        var i, n, s = t(e), o = t.data(e, "datepicker");
                        s.hasClass(this.markerClassName) && ("input" === (i = e.nodeName.toLowerCase()) ? (e.disabled = true,
                        o.trigger.filter("button").each((function() {
                            this.disabled = true
                        }
                        )).end().filter("img").css({
                            opacity: "0.5",
                            cursor: "default"
                        })) : "div" !== i && "span" !== i || ((n = s.children("." + this._inlineClass)).children().addClass("ui-state-disabled"),
                        n.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", true)),
                        this._disabledInputs = t.map(this._disabledInputs, (function(t) {
                            return t === e ? null : t
                        }
                        )),
                        this._disabledInputs[this._disabledInputs.length] = e)
                    },
                    _isDisabledDatepicker: function(t) {
                        if (!t)
                            return false;
                        for (var e = 0; e < this._disabledInputs.length; e++)
                            if (this._disabledInputs[e] === t)
                                return true;
                        return false
                    },
                    _getInst: function(e) {
                        try {
                            return t.data(e, "datepicker")
                        } catch (t) {
                            throw "Missing instance data for this datepicker"
                        }
                    },
                    _optionDatepicker: function(e, i, n) {
                        var settings, date, s, o, l = this._getInst(e);
                        if (2 === arguments.length && "string" == typeof i)
                            return "defaults" === i ? t.extend({}, t.datepicker._defaults) : l ? "all" === i ? t.extend({}, l.settings) : this._get(l, i) : null;
                        settings = i || {},
                        "string" == typeof i && ((settings = {})[i] = n),
                        l && (this._curInst === l && this._hideDatepicker(),
                        date = this._getDateDatepicker(e, true),
                        s = this._getMinMaxDate(l, "min"),
                        o = this._getMinMaxDate(l, "max"),
                        a(l.settings, settings),
                        null !== s && void 0 !== settings.dateFormat && void 0 === settings.minDate && (l.settings.minDate = this._formatDate(l, s)),
                        null !== o && void 0 !== settings.dateFormat && void 0 === settings.maxDate && (l.settings.maxDate = this._formatDate(l, o)),
                        "disabled"in settings && (settings.disabled ? this._disableDatepicker(e) : this._enableDatepicker(e)),
                        this._attachments(t(e), l),
                        this._autoSize(l),
                        this._setDate(l, date),
                        this._updateAlternate(l),
                        this._updateDatepicker(l))
                    },
                    _changeDatepicker: function(t, e, i) {
                        this._optionDatepicker(t, e, i)
                    },
                    _refreshDatepicker: function(t) {
                        var e = this._getInst(t);
                        e && this._updateDatepicker(e)
                    },
                    _setDateDatepicker: function(t, date) {
                        var e = this._getInst(t);
                        e && (this._setDate(e, date),
                        this._updateDatepicker(e),
                        this._updateAlternate(e))
                    },
                    _getDateDatepicker: function(t, e) {
                        var i = this._getInst(t);
                        return i && !i.inline && this._setDateFromField(i, e),
                        i ? this._getDate(i) : null
                    },
                    _doKeyDown: function(e) {
                        var i, n, s, o = t.datepicker._getInst(e.target), a = true, l = o.dpDiv.is(".ui-datepicker-rtl");
                        if (o._keyEvent = true,
                        t.datepicker._datepickerShowing)
                            switch (e.keyCode) {
                            case 9:
                                t.datepicker._hideDatepicker(),
                                a = false;
                                break;
                            case 13:
                                return (s = t("td." + t.datepicker._dayOverClass + ":not(." + t.datepicker._currentClass + ")", o.dpDiv))[0] && t.datepicker._selectDay(e.target, o.selectedMonth, o.selectedYear, s[0]),
                                (i = t.datepicker._get(o, "onSelect")) ? (n = t.datepicker._formatDate(o),
                                i.apply(o.input ? o.input[0] : null, [n, o])) : t.datepicker._hideDatepicker(),
                                false;
                            case 27:
                                t.datepicker._hideDatepicker();
                                break;
                            case 33:
                                t.datepicker._adjustDate(e.target, e.ctrlKey ? -t.datepicker._get(o, "stepBigMonths") : -t.datepicker._get(o, "stepMonths"), "M");
                                break;
                            case 34:
                                t.datepicker._adjustDate(e.target, e.ctrlKey ? +t.datepicker._get(o, "stepBigMonths") : +t.datepicker._get(o, "stepMonths"), "M");
                                break;
                            case 35:
                                (e.ctrlKey || e.metaKey) && t.datepicker._clearDate(e.target),
                                a = e.ctrlKey || e.metaKey;
                                break;
                            case 36:
                                (e.ctrlKey || e.metaKey) && t.datepicker._gotoToday(e.target),
                                a = e.ctrlKey || e.metaKey;
                                break;
                            case 37:
                                (e.ctrlKey || e.metaKey) && t.datepicker._adjustDate(e.target, l ? 1 : -1, "D"),
                                a = e.ctrlKey || e.metaKey,
                                e.originalEvent.altKey && t.datepicker._adjustDate(e.target, e.ctrlKey ? -t.datepicker._get(o, "stepBigMonths") : -t.datepicker._get(o, "stepMonths"), "M");
                                break;
                            case 38:
                                (e.ctrlKey || e.metaKey) && t.datepicker._adjustDate(e.target, -7, "D"),
                                a = e.ctrlKey || e.metaKey;
                                break;
                            case 39:
                                (e.ctrlKey || e.metaKey) && t.datepicker._adjustDate(e.target, l ? -1 : 1, "D"),
                                a = e.ctrlKey || e.metaKey,
                                e.originalEvent.altKey && t.datepicker._adjustDate(e.target, e.ctrlKey ? +t.datepicker._get(o, "stepBigMonths") : +t.datepicker._get(o, "stepMonths"), "M");
                                break;
                            case 40:
                                (e.ctrlKey || e.metaKey) && t.datepicker._adjustDate(e.target, 7, "D"),
                                a = e.ctrlKey || e.metaKey;
                                break;
                            default:
                                a = false
                            }
                        else
                            36 === e.keyCode && e.ctrlKey ? t.datepicker._showDatepicker(this) : a = false;
                        a && (e.preventDefault(),
                        e.stopPropagation())
                    },
                    _doKeyPress: function(e) {
                        var i, n, s = t.datepicker._getInst(e.target);
                        if (t.datepicker._get(s, "constrainInput"))
                            return i = t.datepicker._possibleChars(t.datepicker._get(s, "dateFormat")),
                            n = String.fromCharCode(null == e.charCode ? e.keyCode : e.charCode),
                            e.ctrlKey || e.metaKey || n < " " || !i || i.indexOf(n) > -1
                    },
                    _doKeyUp: function(e) {
                        var date, i = t.datepicker._getInst(e.target);
                        if (i.input.val() !== i.lastVal)
                            try {
                                (date = t.datepicker.parseDate(t.datepicker._get(i, "dateFormat"), i.input ? i.input.val() : null, t.datepicker._getFormatConfig(i))) && (t.datepicker._setDateFromField(i),
                                t.datepicker._updateAlternate(i),
                                t.datepicker._updateDatepicker(i))
                            } catch (t) {}
                        return true
                    },
                    _showDatepicker: function(input) {
                        var e, n, s, o, l, h, u;
                        "input" !== (input = input.target || input).nodeName.toLowerCase() && (input = t("input", input.parentNode)[0]),
                        t.datepicker._isDisabledDatepicker(input) || t.datepicker._lastInput === input || (e = t.datepicker._getInst(input),
                        t.datepicker._curInst && t.datepicker._curInst !== e && (t.datepicker._curInst.dpDiv.stop(true, true),
                        e && t.datepicker._datepickerShowing && t.datepicker._hideDatepicker(t.datepicker._curInst.input[0])),
                        false !== (s = (n = t.datepicker._get(e, "beforeShow")) ? n.apply(input, [input, e]) : {}) && (a(e.settings, s),
                        e.lastVal = null,
                        t.datepicker._lastInput = input,
                        t.datepicker._setDateFromField(e),
                        t.datepicker._inDialog && (input.value = ""),
                        t.datepicker._pos || (t.datepicker._pos = t.datepicker._findPos(input),
                        t.datepicker._pos[1] += input.offsetHeight),
                        o = false,
                        t(input).parents().each((function() {
                            return !(o |= "fixed" === t(this).css("position"))
                        }
                        )),
                        l = {
                            left: t.datepicker._pos[0],
                            top: t.datepicker._pos[1]
                        },
                        t.datepicker._pos = null,
                        e.dpDiv.empty(),
                        e.dpDiv.css({
                            position: "absolute",
                            display: "block",
                            top: "-1000px"
                        }),
                        t.datepicker._updateDatepicker(e),
                        l = t.datepicker._checkOffset(e, l, o),
                        e.dpDiv.css({
                            position: t.datepicker._inDialog && t.blockUI ? "static" : o ? "fixed" : "absolute",
                            display: "none",
                            left: l.left + "px",
                            top: l.top + "px"
                        }),
                        e.inline || (h = t.datepicker._get(e, "showAnim"),
                        u = t.datepicker._get(e, "duration"),
                        e.dpDiv.css("z-index", i(t(input)) + 1),
                        t.datepicker._datepickerShowing = true,
                        t.effects && t.effects.effect[h] ? e.dpDiv.show(h, t.datepicker._get(e, "showOptions"), u) : e.dpDiv[h || "show"](h ? u : null),
                        t.datepicker._shouldFocusInput(e) && e.input.focus(),
                        t.datepicker._curInst = e)))
                    },
                    _updateDatepicker: function(e) {
                        this.maxRows = 4,
                        C = e,
                        e.dpDiv.empty().append(this._generateHTML(e)),
                        this._attachHandlers(e);
                        var i, n = this._getNumberOfMonths(e), s = n[1], a = 17, l = e.dpDiv.find("." + this._dayOverClass + " a");
                        l.length > 0 && o.apply(l.get(0)),
                        e.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width(""),
                        s > 1 && e.dpDiv.addClass("ui-datepicker-multi-" + s).css("width", a * s + "em"),
                        e.dpDiv[(1 !== n[0] || 1 !== n[1] ? "add" : "remove") + "Class"]("ui-datepicker-multi"),
                        e.dpDiv[(this._get(e, "isRTL") ? "add" : "remove") + "Class"]("ui-datepicker-rtl"),
                        e === t.datepicker._curInst && t.datepicker._datepickerShowing && t.datepicker._shouldFocusInput(e) && e.input.focus(),
                        e.yearshtml && (i = e.yearshtml,
                        setTimeout((function() {
                            i === e.yearshtml && e.yearshtml && e.dpDiv.find("select.ui-datepicker-year:first").replaceWith(e.yearshtml),
                            i = e.yearshtml = null
                        }
                        ), 0))
                    },
                    _shouldFocusInput: function(t) {
                        return t.input && t.input.is(":visible") && !t.input.is(":disabled") && !t.input.is(":focus")
                    },
                    _checkOffset: function(e, i, n) {
                        var s = e.dpDiv.outerWidth()
                          , o = e.dpDiv.outerHeight()
                          , a = e.input ? e.input.outerWidth() : 0
                          , l = e.input ? e.input.outerHeight() : 0
                          , h = document.documentElement.clientWidth + (n ? 0 : t(document).scrollLeft())
                          , u = document.documentElement.clientHeight + (n ? 0 : t(document).scrollTop());
                        return i.left -= this._get(e, "isRTL") ? s - a : 0,
                        i.left -= n && i.left === e.input.offset().left ? t(document).scrollLeft() : 0,
                        i.top -= n && i.top === e.input.offset().top + l ? t(document).scrollTop() : 0,
                        i.left -= Math.min(i.left, i.left + s > h && h > s ? Math.abs(i.left + s - h) : 0),
                        i.top -= Math.min(i.top, i.top + o > u && u > o ? Math.abs(o + l) : 0),
                        i
                    },
                    _findPos: function(e) {
                        for (var position, i = this._getInst(e), n = this._get(i, "isRTL"); e && ("hidden" === e.type || 1 !== e.nodeType || t.expr.filters.hidden(e)); )
                            e = e[n ? "previousSibling" : "nextSibling"];
                        return [(position = t(e).offset()).left, position.top]
                    },
                    _hideDatepicker: function(input) {
                        var e, i, n, s, o = this._curInst;
                        !o || input && o !== t.data(input, "datepicker") || this._datepickerShowing && (e = this._get(o, "showAnim"),
                        i = this._get(o, "duration"),
                        n = function() {
                            t.datepicker._tidyDialog(o)
                        }
                        ,
                        t.effects && (t.effects.effect[e] || t.effects[e]) ? o.dpDiv.hide(e, t.datepicker._get(o, "showOptions"), i, n) : o.dpDiv["slideDown" === e ? "slideUp" : "fadeIn" === e ? "fadeOut" : "hide"](e ? i : null, n),
                        e || n(),
                        this._datepickerShowing = false,
                        (s = this._get(o, "onClose")) && s.apply(o.input ? o.input[0] : null, [o.input ? o.input.val() : "", o]),
                        this._lastInput = null,
                        this._inDialog && (this._dialogInput.css({
                            position: "absolute",
                            left: "0",
                            top: "-100px"
                        }),
                        t.blockUI && (t.unblockUI(),
                        t("body").append(this.dpDiv))),
                        this._inDialog = false)
                    },
                    _tidyDialog: function(t) {
                        t.dpDiv.removeClass(this._dialogClass).unbind(".ui-datepicker-calendar")
                    },
                    _checkExternalClick: function(e) {
                        if (t.datepicker._curInst) {
                            var i = t(e.target)
                              , n = t.datepicker._getInst(i[0]);
                            (i[0].id !== t.datepicker._mainDivId && 0 === i.parents("#" + t.datepicker._mainDivId).length && !i.hasClass(t.datepicker.markerClassName) && !i.closest("." + t.datepicker._triggerClass).length && t.datepicker._datepickerShowing && !(t.datepicker._inDialog && t.blockUI) || i.hasClass(t.datepicker.markerClassName) && t.datepicker._curInst !== n) && t.datepicker._hideDatepicker()
                        }
                    },
                    _adjustDate: function(id, e, i) {
                        var n = t(id)
                          , s = this._getInst(n[0]);
                        this._isDisabledDatepicker(n[0]) || (this._adjustInstDate(s, e + ("M" === i ? this._get(s, "showCurrentAtPos") : 0), i),
                        this._updateDatepicker(s))
                    },
                    _gotoToday: function(id) {
                        var date, e = t(id), i = this._getInst(e[0]);
                        this._get(i, "gotoCurrent") && i.currentDay ? (i.selectedDay = i.currentDay,
                        i.drawMonth = i.selectedMonth = i.currentMonth,
                        i.drawYear = i.selectedYear = i.currentYear) : (date = new Date,
                        i.selectedDay = date.getDate(),
                        i.drawMonth = i.selectedMonth = date.getMonth(),
                        i.drawYear = i.selectedYear = date.getFullYear()),
                        this._notifyChange(i),
                        this._adjustDate(e)
                    },
                    _selectMonthYear: function(id, select, e) {
                        var i = t(id)
                          , n = this._getInst(i[0]);
                        n["selected" + ("M" === e ? "Month" : "Year")] = n["draw" + ("M" === e ? "Month" : "Year")] = parseInt(select.options[select.selectedIndex].value, 10),
                        this._notifyChange(n),
                        this._adjustDate(i)
                    },
                    _selectDay: function(id, e, i, n) {
                        var s, o = t(id);
                        t(n).hasClass(this._unselectableClass) || this._isDisabledDatepicker(o[0]) || ((s = this._getInst(o[0])).selectedDay = s.currentDay = t("a", n).html(),
                        s.selectedMonth = s.currentMonth = e,
                        s.selectedYear = s.currentYear = i,
                        this._selectDate(id, this._formatDate(s, s.currentDay, s.currentMonth, s.currentYear)))
                    },
                    _clearDate: function(id) {
                        var e = t(id);
                        this._selectDate(e, "")
                    },
                    _selectDate: function(id, e) {
                        var i, n = t(id), s = this._getInst(n[0]);
                        e = null != e ? e : this._formatDate(s),
                        s.input && s.input.val(e),
                        this._updateAlternate(s),
                        (i = this._get(s, "onSelect")) ? i.apply(s.input ? s.input[0] : null, [e, s]) : s.input && s.input.trigger("change"),
                        s.inline ? this._updateDatepicker(s) : (this._hideDatepicker(),
                        this._lastInput = s.input[0],
                        "object" != typeof s.input[0] && s.input.focus(),
                        this._lastInput = null)
                    },
                    _updateAlternate: function(e) {
                        var i, date, n, s = this._get(e, "altField");
                        s && (i = this._get(e, "altFormat") || this._get(e, "dateFormat"),
                        date = this._getDate(e),
                        n = this.formatDate(i, date, this._getFormatConfig(e)),
                        t(s).each((function() {
                            t(this).val(n)
                        }
                        )))
                    },
                    noWeekends: function(date) {
                        var t = date.getDay();
                        return [t > 0 && t < 6, ""]
                    },
                    iso8601Week: function(date) {
                        var t, e = new Date(date.getTime());
                        return e.setDate(e.getDate() + 4 - (e.getDay() || 7)),
                        t = e.getTime(),
                        e.setMonth(0),
                        e.setDate(1),
                        Math.floor(Math.round((t - e) / 864e5) / 7) + 1
                    },
                    parseDate: function(format, e, settings) {
                        if (null == format || null == e)
                            throw "Invalid arguments";
                        if ("" === (e = "object" == typeof e ? e.toString() : e + ""))
                            return null;
                        var i, n, s, o = 0, a = (settings ? settings.shortYearCutoff : null) || this._defaults.shortYearCutoff, l = "string" != typeof a ? a : (new Date).getFullYear() % 100 + parseInt(a, 10), h = (settings ? settings.dayNamesShort : null) || this._defaults.dayNamesShort, u = (settings ? settings.dayNames : null) || this._defaults.dayNames, c = (settings ? settings.monthNamesShort : null) || this._defaults.monthNamesShort, p = (settings ? settings.monthNames : null) || this._defaults.monthNames, f = -1, m = -1, g = -1, v = -1, b = false, date, y = function(t) {
                            var e = i + 1 < format.length && format.charAt(i + 1) === t;
                            return e && i++,
                            e
                        }, _ = function(t) {
                            var i = y(t), size = "@" === t ? 14 : "!" === t ? 20 : "y" === t && i ? 4 : "o" === t ? 3 : 2, n, s = new RegExp("^\\d{" + ("y" === t ? size : 1) + "," + size + "}"), a = e.substring(o).match(s);
                            if (!a)
                                throw "Missing number at position " + o;
                            return o += a[0].length,
                            parseInt(a[0], 10)
                        }, w = function(i, n, s) {
                            var index = -1
                              , names = t.map(y(i) ? s : n, (function(t, e) {
                                return [[e, t]]
                            }
                            )).sort((function(t, e) {
                                return -(t[1].length - e[1].length)
                            }
                            ));
                            if (t.each(names, (function(t, i) {
                                var n = i[1];
                                if (e.substr(o, n.length).toLowerCase() === n.toLowerCase())
                                    return index = i[0],
                                    o += n.length,
                                    false
                            }
                            )),
                            -1 !== index)
                                return index + 1;
                            throw "Unknown name at position " + o
                        }, x = function() {
                            if (e.charAt(o) !== format.charAt(i))
                                throw "Unexpected literal at position " + o;
                            o++
                        };
                        for (i = 0; i < format.length; i++)
                            if (b)
                                "'" !== format.charAt(i) || y("'") ? x() : b = false;
                            else
                                switch (format.charAt(i)) {
                                case "d":
                                    g = _("d");
                                    break;
                                case "D":
                                    w("D", h, u);
                                    break;
                                case "o":
                                    v = _("o");
                                    break;
                                case "m":
                                    m = _("m");
                                    break;
                                case "M":
                                    m = w("M", c, p);
                                    break;
                                case "y":
                                    f = _("y");
                                    break;
                                case "@":
                                    f = (date = new Date(_("@"))).getFullYear(),
                                    m = date.getMonth() + 1,
                                    g = date.getDate();
                                    break;
                                case "!":
                                    f = (date = new Date((_("!") - this._ticksTo1970) / 1e4)).getFullYear(),
                                    m = date.getMonth() + 1,
                                    g = date.getDate();
                                    break;
                                case "'":
                                    y("'") ? x() : b = true;
                                    break;
                                default:
                                    x()
                                }
                        if (o < e.length && (s = e.substr(o),
                        !/^\s+/.test(s)))
                            throw "Extra/unparsed characters found in date: " + s;
                        if (-1 === f ? f = (new Date).getFullYear() : f < 100 && (f += (new Date).getFullYear() - (new Date).getFullYear() % 100 + (f <= l ? 0 : -100)),
                        v > -1)
                            for (m = 1,
                            g = v; !(g <= (n = this._getDaysInMonth(f, m - 1))); )
                                m++,
                                g -= n;
                        if ((date = this._daylightSavingAdjust(new Date(f,m - 1,g))).getFullYear() !== f || date.getMonth() + 1 !== m || date.getDate() !== g)
                            throw "Invalid date";
                        return date
                    },
                    ATOM: "yy-mm-dd",
                    COOKIE: "D, dd M yy",
                    ISO_8601: "yy-mm-dd",
                    RFC_822: "D, d M y",
                    RFC_850: "DD, dd-M-y",
                    RFC_1036: "D, d M y",
                    RFC_1123: "D, d M yy",
                    RFC_2822: "D, d M yy",
                    RSS: "D, d M y",
                    TICKS: "!",
                    TIMESTAMP: "@",
                    W3C: "yy-mm-dd",
                    _ticksTo1970: 24 * (718685 + Math.floor(492.5) - Math.floor(19.7) + Math.floor(4.925)) * 60 * 60 * 1e7,
                    formatDate: function(format, date, settings) {
                        if (!date)
                            return "";
                        var t, e = (settings ? settings.dayNamesShort : null) || this._defaults.dayNamesShort, i = (settings ? settings.dayNames : null) || this._defaults.dayNames, n = (settings ? settings.monthNamesShort : null) || this._defaults.monthNamesShort, s = (settings ? settings.monthNames : null) || this._defaults.monthNames, o = function(e) {
                            var i = t + 1 < format.length && format.charAt(t + 1) === e;
                            return i && t++,
                            i
                        }, a = function(t, e, i) {
                            var n = "" + e;
                            if (o(t))
                                for (; n.length < i; )
                                    n = "0" + n;
                            return n
                        }, l = function(t, e, i, n) {
                            return o(t) ? n[e] : i[e]
                        }, h = "", u = false;
                        if (date)
                            for (t = 0; t < format.length; t++)
                                if (u)
                                    "'" !== format.charAt(t) || o("'") ? h += format.charAt(t) : u = false;
                                else
                                    switch (format.charAt(t)) {
                                    case "d":
                                        h += a("d", date.getDate(), 2);
                                        break;
                                    case "D":
                                        h += l("D", date.getDay(), e, i);
                                        break;
                                    case "o":
                                        h += a("o", Math.round((new Date(date.getFullYear(),date.getMonth(),date.getDate()).getTime() - new Date(date.getFullYear(),0,0).getTime()) / 864e5), 3);
                                        break;
                                    case "m":
                                        h += a("m", date.getMonth() + 1, 2);
                                        break;
                                    case "M":
                                        h += l("M", date.getMonth(), n, s);
                                        break;
                                    case "y":
                                        h += o("y") ? date.getFullYear() : (date.getYear() % 100 < 10 ? "0" : "") + date.getYear() % 100;
                                        break;
                                    case "@":
                                        h += date.getTime();
                                        break;
                                    case "!":
                                        h += 1e4 * date.getTime() + this._ticksTo1970;
                                        break;
                                    case "'":
                                        o("'") ? h += "'" : u = true;
                                        break;
                                    default:
                                        h += format.charAt(t)
                                    }
                        return h
                    },
                    _possibleChars: function(format) {
                        var t, e = "", i = false, n = function(e) {
                            var i = t + 1 < format.length && format.charAt(t + 1) === e;
                            return i && t++,
                            i
                        };
                        for (t = 0; t < format.length; t++)
                            if (i)
                                "'" !== format.charAt(t) || n("'") ? e += format.charAt(t) : i = false;
                            else
                                switch (format.charAt(t)) {
                                case "d":
                                case "m":
                                case "y":
                                case "@":
                                    e += "0123456789";
                                    break;
                                case "D":
                                case "M":
                                    return null;
                                case "'":
                                    n("'") ? e += "'" : i = true;
                                    break;
                                default:
                                    e += format.charAt(t)
                                }
                        return e
                    },
                    _get: function(t, e) {
                        return void 0 !== t.settings[e] ? t.settings[e] : this._defaults[e]
                    },
                    _setDateFromField: function(t, e) {
                        if (t.input.val() !== t.lastVal) {
                            var i = this._get(t, "dateFormat")
                              , n = t.lastVal = t.input ? t.input.val() : null
                              , s = this._getDefaultDate(t)
                              , date = s
                              , settings = this._getFormatConfig(t);
                            try {
                                date = this.parseDate(i, n, settings) || s
                            } catch (t) {
                                n = e ? "" : n
                            }
                            t.selectedDay = date.getDate(),
                            t.drawMonth = t.selectedMonth = date.getMonth(),
                            t.drawYear = t.selectedYear = date.getFullYear(),
                            t.currentDay = n ? date.getDate() : 0,
                            t.currentMonth = n ? date.getMonth() : 0,
                            t.currentYear = n ? date.getFullYear() : 0,
                            this._adjustInstDate(t)
                        }
                    },
                    _getDefaultDate: function(t) {
                        return this._restrictMinMax(t, this._determineDate(t, this._get(t, "defaultDate"), new Date))
                    },
                    _determineDate: function(e, date, i) {
                        var n = function(t) {
                            var date = new Date;
                            return date.setDate(date.getDate() + t),
                            date
                        }
                          , s = function(i) {
                            try {
                                return t.datepicker.parseDate(t.datepicker._get(e, "dateFormat"), i, t.datepicker._getFormatConfig(e))
                            } catch (t) {}
                            for (var date = (i.toLowerCase().match(/^c/) ? t.datepicker._getDate(e) : null) || new Date, n = date.getFullYear(), s = date.getMonth(), o = date.getDate(), a = /([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g, l = a.exec(i); l; ) {
                                switch (l[2] || "d") {
                                case "d":
                                case "D":
                                    o += parseInt(l[1], 10);
                                    break;
                                case "w":
                                case "W":
                                    o += 7 * parseInt(l[1], 10);
                                    break;
                                case "m":
                                case "M":
                                    s += parseInt(l[1], 10),
                                    o = Math.min(o, t.datepicker._getDaysInMonth(n, s));
                                    break;
                                case "y":
                                case "Y":
                                    n += parseInt(l[1], 10),
                                    o = Math.min(o, t.datepicker._getDaysInMonth(n, s))
                                }
                                l = a.exec(i)
                            }
                            return new Date(n,s,o)
                        }
                          , o = null == date || "" === date ? i : "string" == typeof date ? s(date) : "number" == typeof date ? isNaN(date) ? i : n(date) : new Date(date.getTime());
                        return (o = o && "Invalid Date" === o.toString() ? i : o) && (o.setHours(0),
                        o.setMinutes(0),
                        o.setSeconds(0),
                        o.setMilliseconds(0)),
                        this._daylightSavingAdjust(o)
                    },
                    _daylightSavingAdjust: function(date) {
                        return date ? (date.setHours(date.getHours() > 12 ? date.getHours() + 2 : 0),
                        date) : null
                    },
                    _setDate: function(t, date, e) {
                        var i = !date
                          , n = t.selectedMonth
                          , s = t.selectedYear
                          , o = this._restrictMinMax(t, this._determineDate(t, date, new Date));
                        t.selectedDay = t.currentDay = o.getDate(),
                        t.drawMonth = t.selectedMonth = t.currentMonth = o.getMonth(),
                        t.drawYear = t.selectedYear = t.currentYear = o.getFullYear(),
                        n === t.selectedMonth && s === t.selectedYear || e || this._notifyChange(t),
                        this._adjustInstDate(t),
                        t.input && t.input.val(i ? "" : this._formatDate(t))
                    },
                    _getDate: function(t) {
                        var e;
                        return !t.currentYear || t.input && "" === t.input.val() ? null : this._daylightSavingAdjust(new Date(t.currentYear,t.currentMonth,t.currentDay))
                    },
                    _attachHandlers: function(e) {
                        var i = this._get(e, "stepMonths")
                          , id = "#" + e.id.replace(/\\\\/g, "\\");
                        e.dpDiv.find("[data-handler]").map((function() {
                            var e = {
                                prev: function() {
                                    t.datepicker._adjustDate(id, -i, "M")
                                },
                                next: function() {
                                    t.datepicker._adjustDate(id, +i, "M")
                                },
                                hide: function() {
                                    t.datepicker._hideDatepicker()
                                },
                                today: function() {
                                    t.datepicker._gotoToday(id)
                                },
                                selectDay: function() {
                                    return t.datepicker._selectDay(id, +this.getAttribute("data-month"), +this.getAttribute("data-year"), this),
                                    false
                                },
                                selectMonth: function() {
                                    return t.datepicker._selectMonthYear(id, this, "M"),
                                    false
                                },
                                selectYear: function() {
                                    return t.datepicker._selectMonthYear(id, this, "Y"),
                                    false
                                }
                            };
                            t(this).bind(this.getAttribute("data-event"), e[this.getAttribute("data-handler")])
                        }
                        ))
                    },
                    _generateHTML: function(t) {
                        var e, i, n, s, o, a, l, h, u, c, p, f, m, g, v, b, y, _, w, html, x, row, group, k, C, T, A, S, E, I, P, F, N, M, z, H, O, L, $, j = new Date, W = this._daylightSavingAdjust(new Date(j.getFullYear(),j.getMonth(),j.getDate())), B = this._get(t, "isRTL"), U = this._get(t, "showButtonPanel"), Y = this._get(t, "hideIfNoPrevNext"), V = this._get(t, "navigationAsDateFormat"), K = this._getNumberOfMonths(t), X = this._get(t, "showCurrentAtPos"), G = this._get(t, "stepMonths"), J = 1 !== K[0] || 1 !== K[1], Z = this._daylightSavingAdjust(t.currentDay ? new Date(t.currentYear,t.currentMonth,t.currentDay) : new Date(9999,9,9)), tt = this._getMinMaxDate(t, "min"), nt = this._getMinMaxDate(t, "max"), st = t.drawMonth - X, ot = t.drawYear;
                        if (st < 0 && (st += 12,
                        ot--),
                        nt)
                            for (e = this._daylightSavingAdjust(new Date(nt.getFullYear(),nt.getMonth() - K[0] * K[1] + 1,nt.getDate())),
                            e = tt && e < tt ? tt : e; this._daylightSavingAdjust(new Date(ot,st,1)) > e; )
                                --st < 0 && (st = 11,
                                ot--);
                        for (t.drawMonth = st,
                        t.drawYear = ot,
                        i = this._get(t, "prevText"),
                        i = V ? this.formatDate(i, this._daylightSavingAdjust(new Date(ot,st - G,1)), this._getFormatConfig(t)) : i,
                        n = this._canAdjustMonth(t, -1, ot, st) ? "<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click' title='" + i + "'><span class='ui-icon ui-icon-circle-triangle-" + (B ? "e" : "w") + "'>" + i + "</span></a>" : Y ? "" : "<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='" + i + "'><span class='ui-icon ui-icon-circle-triangle-" + (B ? "e" : "w") + "'>" + i + "</span></a>",
                        s = this._get(t, "nextText"),
                        s = V ? this.formatDate(s, this._daylightSavingAdjust(new Date(ot,st + G,1)), this._getFormatConfig(t)) : s,
                        o = this._canAdjustMonth(t, 1, ot, st) ? "<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click' title='" + s + "'><span class='ui-icon ui-icon-circle-triangle-" + (B ? "w" : "e") + "'>" + s + "</span></a>" : Y ? "" : "<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='" + s + "'><span class='ui-icon ui-icon-circle-triangle-" + (B ? "w" : "e") + "'>" + s + "</span></a>",
                        a = this._get(t, "currentText"),
                        l = this._get(t, "gotoCurrent") && t.currentDay ? Z : W,
                        a = V ? this.formatDate(a, l, this._getFormatConfig(t)) : a,
                        h = t.inline ? "" : "<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>" + this._get(t, "closeText") + "</button>",
                        u = U ? "<div class='ui-datepicker-buttonpane ui-widget-content'>" + (B ? h : "") + (this._isInRange(t, l) ? "<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'>" + a + "</button>" : "") + (B ? "" : h) + "</div>" : "",
                        c = parseInt(this._get(t, "firstDay"), 10),
                        c = isNaN(c) ? 0 : c,
                        p = this._get(t, "showWeek"),
                        f = this._get(t, "dayNames"),
                        m = this._get(t, "dayNamesMin"),
                        g = this._get(t, "monthNames"),
                        v = this._get(t, "monthNamesShort"),
                        b = this._get(t, "beforeShowDay"),
                        y = this._get(t, "showOtherMonths"),
                        _ = this._get(t, "selectOtherMonths"),
                        w = this._getDefaultDate(t),
                        html = "",
                        row = 0; row < K[0]; row++) {
                            for (group = "",
                            this.maxRows = 4,
                            k = 0; k < K[1]; k++) {
                                if (C = this._daylightSavingAdjust(new Date(ot,st,t.selectedDay)),
                                T = " ui-corner-all",
                                A = "",
                                J) {
                                    if (A += "<div class='ui-datepicker-group",
                                    K[1] > 1)
                                        switch (k) {
                                        case 0:
                                            A += " ui-datepicker-group-first",
                                            T = " ui-corner-" + (B ? "right" : "left");
                                            break;
                                        case K[1] - 1:
                                            A += " ui-datepicker-group-last",
                                            T = " ui-corner-" + (B ? "left" : "right");
                                            break;
                                        default:
                                            A += " ui-datepicker-group-middle",
                                            T = ""
                                        }
                                    A += "'>"
                                }
                                for (A += "<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix" + T + "'>" + (/all|left/.test(T) && 0 === row ? B ? o : n : "") + (/all|right/.test(T) && 0 === row ? B ? n : o : "") + this._generateMonthYearHeader(t, st, ot, tt, nt, row > 0 || k > 0, g, v) + "</div><table class='ui-datepicker-calendar'><thead><tr>",
                                S = p ? "<th class='ui-datepicker-week-col'>" + this._get(t, "weekHeader") + "</th>" : "",
                                x = 0; x < 7; x++)
                                    S += "<th scope='col'" + ((x + c + 6) % 7 >= 5 ? " class='ui-datepicker-week-end'" : "") + "><span title='" + f[E = (x + c) % 7] + "'>" + m[E] + "</span></th>";
                                for (A += S + "</tr></thead><tbody>",
                                I = this._getDaysInMonth(ot, st),
                                ot === t.selectedYear && st === t.selectedMonth && (t.selectedDay = Math.min(t.selectedDay, I)),
                                P = (this._getFirstDayOfMonth(ot, st) - c + 7) % 7,
                                F = Math.ceil((P + I) / 7),
                                N = J && this.maxRows > F ? this.maxRows : F,
                                this.maxRows = N,
                                M = this._daylightSavingAdjust(new Date(ot,st,1 - P)),
                                z = 0; z < N; z++) {
                                    for (A += "<tr>",
                                    H = p ? "<td class='ui-datepicker-week-col'>" + this._get(t, "calculateWeek")(M) + "</td>" : "",
                                    x = 0; x < 7; x++)
                                        O = b ? b.apply(t.input ? t.input[0] : null, [M]) : [true, ""],
                                        $ = (L = M.getMonth() !== st) && !_ || !O[0] || tt && M < tt || nt && M > nt,
                                        H += "<td class='" + ((x + c + 6) % 7 >= 5 ? " ui-datepicker-week-end" : "") + (L ? " ui-datepicker-other-month" : "") + (M.getTime() === C.getTime() && st === t.selectedMonth && t._keyEvent || w.getTime() === M.getTime() && w.getTime() === C.getTime() ? " " + this._dayOverClass : "") + ($ ? " " + this._unselectableClass + " ui-state-disabled" : "") + (L && !y ? "" : " " + O[1] + (M.getTime() === Z.getTime() ? " " + this._currentClass : "") + (M.getTime() === W.getTime() ? " ui-datepicker-today" : "")) + "'" + (L && !y || !O[2] ? "" : " title='" + O[2].replace(/'/g, "&#39;") + "'") + ($ ? "" : " data-handler='selectDay' data-event='click' data-month='" + M.getMonth() + "' data-year='" + M.getFullYear() + "'") + ">" + (L && !y ? "&#xa0;" : $ ? "<span class='ui-state-default'>" + M.getDate() + "</span>" : "<a class='ui-state-default" + (M.getTime() === W.getTime() ? " ui-state-highlight" : "") + (M.getTime() === Z.getTime() ? " ui-state-active" : "") + (L ? " ui-priority-secondary" : "") + "' href='#'>" + M.getDate() + "</a>") + "</td>",
                                        M.setDate(M.getDate() + 1),
                                        M = this._daylightSavingAdjust(M);
                                    A += H + "</tr>"
                                }
                                ++st > 11 && (st = 0,
                                ot++),
                                group += A += "</tbody></table>" + (J ? "</div>" + (K[0] > 0 && k === K[1] - 1 ? "<div class='ui-datepicker-row-break'></div>" : "") : "")
                            }
                            html += group
                        }
                        return html += u,
                        t._keyEvent = false,
                        html
                    },
                    _generateMonthYearHeader: function(t, e, i, n, s, o, a, l) {
                        var h, u, c, p, f, m, g, v, b = this._get(t, "changeMonth"), y = this._get(t, "changeYear"), _ = this._get(t, "showMonthAfterYear"), html = "<div class='ui-datepicker-title'>", w = "";
                        if (o || !b)
                            w += "<span class='ui-datepicker-month'>" + a[e] + "</span>";
                        else {
                            for (h = n && n.getFullYear() === i,
                            u = s && s.getFullYear() === i,
                            w += "<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>",
                            c = 0; c < 12; c++)
                                (!h || c >= n.getMonth()) && (!u || c <= s.getMonth()) && (w += "<option value='" + c + "'" + (c === e ? " selected='selected'" : "") + ">" + l[c] + "</option>");
                            w += "</select>"
                        }
                        if (_ || (html += w + (o || !(b && y) ? "&#xa0;" : "")),
                        !t.yearshtml)
                            if (t.yearshtml = "",
                            o || !y)
                                html += "<span class='ui-datepicker-year'>" + i + "</span>";
                            else {
                                for (p = this._get(t, "yearRange").split(":"),
                                f = (new Date).getFullYear(),
                                m = function(t) {
                                    var e = t.match(/c[+\-].*/) ? i + parseInt(t.substring(1), 10) : t.match(/[+\-].*/) ? f + parseInt(t, 10) : parseInt(t, 10);
                                    return isNaN(e) ? f : e
                                }
                                ,
                                g = m(p[0]),
                                v = Math.max(g, m(p[1] || "")),
                                g = n ? Math.max(g, n.getFullYear()) : g,
                                v = s ? Math.min(v, s.getFullYear()) : v,
                                t.yearshtml += "<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>"; g <= v; g++)
                                    t.yearshtml += "<option value='" + g + "'" + (g === i ? " selected='selected'" : "") + ">" + g + "</option>";
                                t.yearshtml += "</select>",
                                html += t.yearshtml,
                                t.yearshtml = null
                            }
                        return html += this._get(t, "yearSuffix"),
                        _ && (html += (o || !(b && y) ? "&#xa0;" : "") + w),
                        html += "</div>"
                    },
                    _adjustInstDate: function(t, e, i) {
                        var n = t.drawYear + ("Y" === i ? e : 0)
                          , s = t.drawMonth + ("M" === i ? e : 0)
                          , o = Math.min(t.selectedDay, this._getDaysInMonth(n, s)) + ("D" === i ? e : 0)
                          , date = this._restrictMinMax(t, this._daylightSavingAdjust(new Date(n,s,o)));
                        t.selectedDay = date.getDate(),
                        t.drawMonth = t.selectedMonth = date.getMonth(),
                        t.drawYear = t.selectedYear = date.getFullYear(),
                        "M" !== i && "Y" !== i || this._notifyChange(t)
                    },
                    _restrictMinMax: function(t, date) {
                        var e = this._getMinMaxDate(t, "min")
                          , i = this._getMinMaxDate(t, "max")
                          , n = e && date < e ? e : date;
                        return i && n > i ? i : n
                    },
                    _notifyChange: function(t) {
                        var e = this._get(t, "onChangeMonthYear");
                        e && e.apply(t.input ? t.input[0] : null, [t.selectedYear, t.selectedMonth + 1, t])
                    },
                    _getNumberOfMonths: function(t) {
                        var e = this._get(t, "numberOfMonths");
                        return null == e ? [1, 1] : "number" == typeof e ? [1, e] : e
                    },
                    _getMinMaxDate: function(t, e) {
                        return this._determineDate(t, this._get(t, e + "Date"), null)
                    },
                    _getDaysInMonth: function(t, e) {
                        return 32 - this._daylightSavingAdjust(new Date(t,e,32)).getDate()
                    },
                    _getFirstDayOfMonth: function(t, e) {
                        return new Date(t,e,1).getDay()
                    },
                    _canAdjustMonth: function(t, e, i, n) {
                        var s = this._getNumberOfMonths(t)
                          , date = this._daylightSavingAdjust(new Date(i,n + (e < 0 ? e : s[0] * s[1]),1));
                        return e < 0 && date.setDate(this._getDaysInMonth(date.getFullYear(), date.getMonth())),
                        this._isInRange(t, date)
                    },
                    _isInRange: function(t, date) {
                        var e, i, n = this._getMinMaxDate(t, "min"), s = this._getMinMaxDate(t, "max"), o = null, a = null, l = this._get(t, "yearRange");
                        return l && (e = l.split(":"),
                        i = (new Date).getFullYear(),
                        o = parseInt(e[0], 10),
                        a = parseInt(e[1], 10),
                        e[0].match(/[+\-].*/) && (o += i),
                        e[1].match(/[+\-].*/) && (a += i)),
                        (!n || date.getTime() >= n.getTime()) && (!s || date.getTime() <= s.getTime()) && (!o || date.getFullYear() >= o) && (!a || date.getFullYear() <= a)
                    },
                    _getFormatConfig: function(t) {
                        var e = this._get(t, "shortYearCutoff");
                        return {
                            shortYearCutoff: e = "string" != typeof e ? e : (new Date).getFullYear() % 100 + parseInt(e, 10),
                            dayNamesShort: this._get(t, "dayNamesShort"),
                            dayNames: this._get(t, "dayNames"),
                            monthNamesShort: this._get(t, "monthNamesShort"),
                            monthNames: this._get(t, "monthNames")
                        }
                    },
                    _formatDate: function(t, e, i, n) {
                        e || (t.currentDay = t.selectedDay,
                        t.currentMonth = t.selectedMonth,
                        t.currentYear = t.selectedYear);
                        var date = e ? "object" == typeof e ? e : this._daylightSavingAdjust(new Date(n,i,e)) : this._daylightSavingAdjust(new Date(t.currentYear,t.currentMonth,t.currentDay));
                        return this.formatDate(this._get(t, "dateFormat"), date, this._getFormatConfig(t))
                    }
                }),
                t.fn.datepicker = function(e) {
                    if (!this.length)
                        return this;
                    t.datepicker.initialized || (t(document).mousedown(t.datepicker._checkExternalClick),
                    t.datepicker.initialized = true),
                    0 === t("#" + t.datepicker._mainDivId).length && t("body").append(t.datepicker.dpDiv);
                    var i = Array.prototype.slice.call(arguments, 1);
                    return "string" != typeof e || "isDisabled" !== e && "getDate" !== e && "widget" !== e ? "option" === e && 2 === arguments.length && "string" == typeof arguments[1] ? t.datepicker["_" + e + "Datepicker"].apply(t.datepicker, [this[0]].concat(i)) : this.each((function() {
                        "string" == typeof e ? t.datepicker["_" + e + "Datepicker"].apply(t.datepicker, [this].concat(i)) : t.datepicker._attachDatepicker(this, e)
                    }
                    )) : t.datepicker["_" + e + "Datepicker"].apply(t.datepicker, [this[0]].concat(i))
                }
                ,
                t.datepicker = new n,
                t.datepicker.initialized = false,
                t.datepicker.uuid = (new Date).getTime(),
                t.datepicker.version = "1.11.4";
                var T = t.datepicker;
                /*!
 * jQuery UI Draggable 1.11.4
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/draggable/
 */
                t.widget("ui.draggable", t.ui.mouse, {
                    version: "1.11.4",
                    widgetEventPrefix: "drag",
                    options: {
                        addClasses: true,
                        appendTo: "parent",
                        axis: false,
                        connectToSortable: false,
                        containment: false,
                        cursor: "auto",
                        cursorAt: false,
                        grid: false,
                        handle: false,
                        helper: "original",
                        iframeFix: false,
                        opacity: false,
                        refreshPositions: false,
                        revert: false,
                        revertDuration: 500,
                        scope: "default",
                        scroll: true,
                        scrollSensitivity: 20,
                        scrollSpeed: 20,
                        snap: false,
                        snapMode: "both",
                        snapTolerance: 20,
                        stack: false,
                        zIndex: false,
                        drag: null,
                        start: null,
                        stop: null
                    },
                    _create: function() {
                        "original" === this.options.helper && this._setPositionRelative(),
                        this.options.addClasses && this.element.addClass("ui-draggable"),
                        this.options.disabled && this.element.addClass("ui-draggable-disabled"),
                        this._setHandleClassName(),
                        this._mouseInit()
                    },
                    _setOption: function(t, e) {
                        this._super(t, e),
                        "handle" === t && (this._removeHandleClassName(),
                        this._setHandleClassName())
                    },
                    _destroy: function() {
                        if ((this.helper || this.element).is(".ui-draggable-dragging"))
                            return this.destroyOnClear = true,
                            void 0;
                        this.element.removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled"),
                        this._removeHandleClassName(),
                        this._mouseDestroy()
                    },
                    _mouseCapture: function(e) {
                        var i = this.options;
                        return this._blurActiveElement(e),
                        !(this.helper || i.disabled || t(e.target).closest(".ui-resizable-handle").length > 0) && (this.handle = this._getHandle(e),
                        !!this.handle && (this._blockFrames(true === i.iframeFix ? "iframe" : i.iframeFix),
                        true))
                    },
                    _blockFrames: function(selector) {
                        this.iframeBlocks = this.document.find(selector).map((function() {
                            var e = t(this);
                            return t("<div>").css("position", "absolute").appendTo(e.parent()).outerWidth(e.outerWidth()).outerHeight(e.outerHeight()).offset(e.offset())[0]
                        }
                        ))
                    },
                    _unblockFrames: function() {
                        this.iframeBlocks && (this.iframeBlocks.remove(),
                        delete this.iframeBlocks)
                    },
                    _blurActiveElement: function(e) {
                        var i = this.document[0];
                        if (this.handleElement.is(e.target))
                            try {
                                i.activeElement && "body" !== i.activeElement.nodeName.toLowerCase() && t(i.activeElement).blur()
                            } catch (t) {}
                    },
                    _mouseStart: function(e) {
                        var i = this.options;
                        return this.helper = this._createHelper(e),
                        this.helper.addClass("ui-draggable-dragging"),
                        this._cacheHelperProportions(),
                        t.ui.ddmanager && (t.ui.ddmanager.current = this),
                        this._cacheMargins(),
                        this.cssPosition = this.helper.css("position"),
                        this.scrollParent = this.helper.scrollParent(true),
                        this.offsetParent = this.helper.offsetParent(),
                        this.hasFixedAncestor = this.helper.parents().filter((function() {
                            return "fixed" === t(this).css("position")
                        }
                        )).length > 0,
                        this.positionAbs = this.element.offset(),
                        this._refreshOffsets(e),
                        this.originalPosition = this.position = this._generatePosition(e, false),
                        this.originalPageX = e.pageX,
                        this.originalPageY = e.pageY,
                        i.cursorAt && this._adjustOffsetFromHelper(i.cursorAt),
                        this._setContainment(),
                        false === this._trigger("start", e) ? (this._clear(),
                        false) : (this._cacheHelperProportions(),
                        t.ui.ddmanager && !i.dropBehaviour && t.ui.ddmanager.prepareOffsets(this, e),
                        this._normalizeRightBottom(),
                        this._mouseDrag(e, true),
                        t.ui.ddmanager && t.ui.ddmanager.dragStart(this, e),
                        true)
                    },
                    _refreshOffsets: function(t) {
                        this.offset = {
                            top: this.positionAbs.top - this.margins.top,
                            left: this.positionAbs.left - this.margins.left,
                            scroll: false,
                            parent: this._getParentOffset(),
                            relative: this._getRelativeOffset()
                        },
                        this.offset.click = {
                            left: t.pageX - this.offset.left,
                            top: t.pageY - this.offset.top
                        }
                    },
                    _mouseDrag: function(e, i) {
                        if (this.hasFixedAncestor && (this.offset.parent = this._getParentOffset()),
                        this.position = this._generatePosition(e, true),
                        this.positionAbs = this._convertPositionTo("absolute"),
                        !i) {
                            var n = this._uiHash();
                            if (false === this._trigger("drag", e, n))
                                return this._mouseUp({}),
                                false;
                            this.position = n.position
                        }
                        return this.helper[0].style.left = this.position.left + "px",
                        this.helper[0].style.top = this.position.top + "px",
                        t.ui.ddmanager && t.ui.ddmanager.drag(this, e),
                        false
                    },
                    _mouseStop: function(e) {
                        var i = this
                          , n = false;
                        return t.ui.ddmanager && !this.options.dropBehaviour && (n = t.ui.ddmanager.drop(this, e)),
                        this.dropped && (n = this.dropped,
                        this.dropped = false),
                        "invalid" === this.options.revert && !n || "valid" === this.options.revert && n || true === this.options.revert || t.isFunction(this.options.revert) && this.options.revert.call(this.element, n) ? t(this.helper).animate(this.originalPosition, parseInt(this.options.revertDuration, 10), (function() {
                            false !== i._trigger("stop", e) && i._clear()
                        }
                        )) : false !== this._trigger("stop", e) && this._clear(),
                        false
                    },
                    _mouseUp: function(e) {
                        return this._unblockFrames(),
                        t.ui.ddmanager && t.ui.ddmanager.dragStop(this, e),
                        this.handleElement.is(e.target) && this.element.focus(),
                        t.ui.mouse.prototype._mouseUp.call(this, e)
                    },
                    cancel: function() {
                        return this.helper.is(".ui-draggable-dragging") ? this._mouseUp({}) : this._clear(),
                        this
                    },
                    _getHandle: function(e) {
                        return !this.options.handle || !!t(e.target).closest(this.element.find(this.options.handle)).length
                    },
                    _setHandleClassName: function() {
                        this.handleElement = this.options.handle ? this.element.find(this.options.handle) : this.element,
                        this.handleElement.addClass("ui-draggable-handle")
                    },
                    _removeHandleClassName: function() {
                        this.handleElement.removeClass("ui-draggable-handle")
                    },
                    _createHelper: function(e) {
                        var i = this.options
                          , n = t.isFunction(i.helper)
                          , helper = n ? t(i.helper.apply(this.element[0], [e])) : "clone" === i.helper ? this.element.clone().removeAttr("id") : this.element;
                        return helper.parents("body").length || helper.appendTo("parent" === i.appendTo ? this.element[0].parentNode : i.appendTo),
                        n && helper[0] === this.element[0] && this._setPositionRelative(),
                        helper[0] === this.element[0] || /(fixed|absolute)/.test(helper.css("position")) || helper.css("position", "absolute"),
                        helper
                    },
                    _setPositionRelative: function() {
                        /^(?:r|a|f)/.test(this.element.css("position")) || (this.element[0].style.position = "relative")
                    },
                    _adjustOffsetFromHelper: function(e) {
                        "string" == typeof e && (e = e.split(" ")),
                        t.isArray(e) && (e = {
                            left: +e[0],
                            top: +e[1] || 0
                        }),
                        "left"in e && (this.offset.click.left = e.left + this.margins.left),
                        "right"in e && (this.offset.click.left = this.helperProportions.width - e.right + this.margins.left),
                        "top"in e && (this.offset.click.top = e.top + this.margins.top),
                        "bottom"in e && (this.offset.click.top = this.helperProportions.height - e.bottom + this.margins.top)
                    },
                    _isRootNode: function(t) {
                        return /(html|body)/i.test(t.tagName) || t === this.document[0]
                    },
                    _getParentOffset: function() {
                        var e = this.offsetParent.offset()
                          , i = this.document[0];
                        return "absolute" === this.cssPosition && this.scrollParent[0] !== i && t.contains(this.scrollParent[0], this.offsetParent[0]) && (e.left += this.scrollParent.scrollLeft(),
                        e.top += this.scrollParent.scrollTop()),
                        this._isRootNode(this.offsetParent[0]) && (e = {
                            top: 0,
                            left: 0
                        }),
                        {
                            top: e.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
                            left: e.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
                        }
                    },
                    _getRelativeOffset: function() {
                        if ("relative" !== this.cssPosition)
                            return {
                                top: 0,
                                left: 0
                            };
                        var t = this.element.position()
                          , e = this._isRootNode(this.scrollParent[0]);
                        return {
                            top: t.top - (parseInt(this.helper.css("top"), 10) || 0) + (e ? 0 : this.scrollParent.scrollTop()),
                            left: t.left - (parseInt(this.helper.css("left"), 10) || 0) + (e ? 0 : this.scrollParent.scrollLeft())
                        }
                    },
                    _cacheMargins: function() {
                        this.margins = {
                            left: parseInt(this.element.css("marginLeft"), 10) || 0,
                            top: parseInt(this.element.css("marginTop"), 10) || 0,
                            right: parseInt(this.element.css("marginRight"), 10) || 0,
                            bottom: parseInt(this.element.css("marginBottom"), 10) || 0
                        }
                    },
                    _cacheHelperProportions: function() {
                        this.helperProportions = {
                            width: this.helper.outerWidth(),
                            height: this.helper.outerHeight()
                        }
                    },
                    _setContainment: function() {
                        var e, i, n, s = this.options, o = this.document[0];
                        return this.relativeContainer = null,
                        s.containment ? "window" === s.containment ? (this.containment = [t(window).scrollLeft() - this.offset.relative.left - this.offset.parent.left, t(window).scrollTop() - this.offset.relative.top - this.offset.parent.top, t(window).scrollLeft() + t(window).width() - this.helperProportions.width - this.margins.left, t(window).scrollTop() + (t(window).height() || o.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top],
                        void 0) : "document" === s.containment ? (this.containment = [0, 0, t(o).width() - this.helperProportions.width - this.margins.left, (t(o).height() || o.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top],
                        void 0) : s.containment.constructor === Array ? (this.containment = s.containment,
                        void 0) : ("parent" === s.containment && (s.containment = this.helper[0].parentNode),
                        (n = (i = t(s.containment))[0]) && (e = /(scroll|auto)/.test(i.css("overflow")),
                        this.containment = [(parseInt(i.css("borderLeftWidth"), 10) || 0) + (parseInt(i.css("paddingLeft"), 10) || 0), (parseInt(i.css("borderTopWidth"), 10) || 0) + (parseInt(i.css("paddingTop"), 10) || 0), (e ? Math.max(n.scrollWidth, n.offsetWidth) : n.offsetWidth) - (parseInt(i.css("borderRightWidth"), 10) || 0) - (parseInt(i.css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left - this.margins.right, (e ? Math.max(n.scrollHeight, n.offsetHeight) : n.offsetHeight) - (parseInt(i.css("borderBottomWidth"), 10) || 0) - (parseInt(i.css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top - this.margins.bottom],
                        this.relativeContainer = i),
                        void 0) : (this.containment = null,
                        void 0)
                    },
                    _convertPositionTo: function(d, t) {
                        t || (t = this.position);
                        var e = "absolute" === d ? 1 : -1
                          , i = this._isRootNode(this.scrollParent[0]);
                        return {
                            top: t.top + this.offset.relative.top * e + this.offset.parent.top * e - ("fixed" === this.cssPosition ? -this.offset.scroll.top : i ? 0 : this.offset.scroll.top) * e,
                            left: t.left + this.offset.relative.left * e + this.offset.parent.left * e - ("fixed" === this.cssPosition ? -this.offset.scroll.left : i ? 0 : this.offset.scroll.left) * e
                        }
                    },
                    _generatePosition: function(t, e) {
                        var i, n, s, o, a = this.options, l = this._isRootNode(this.scrollParent[0]), h = t.pageX, u = t.pageY;
                        return l && this.offset.scroll || (this.offset.scroll = {
                            top: this.scrollParent.scrollTop(),
                            left: this.scrollParent.scrollLeft()
                        }),
                        e && (this.containment && (this.relativeContainer ? (n = this.relativeContainer.offset(),
                        i = [this.containment[0] + n.left, this.containment[1] + n.top, this.containment[2] + n.left, this.containment[3] + n.top]) : i = this.containment,
                        t.pageX - this.offset.click.left < i[0] && (h = i[0] + this.offset.click.left),
                        t.pageY - this.offset.click.top < i[1] && (u = i[1] + this.offset.click.top),
                        t.pageX - this.offset.click.left > i[2] && (h = i[2] + this.offset.click.left),
                        t.pageY - this.offset.click.top > i[3] && (u = i[3] + this.offset.click.top)),
                        a.grid && (s = a.grid[1] ? this.originalPageY + Math.round((u - this.originalPageY) / a.grid[1]) * a.grid[1] : this.originalPageY,
                        u = i ? s - this.offset.click.top >= i[1] || s - this.offset.click.top > i[3] ? s : s - this.offset.click.top >= i[1] ? s - a.grid[1] : s + a.grid[1] : s,
                        o = a.grid[0] ? this.originalPageX + Math.round((h - this.originalPageX) / a.grid[0]) * a.grid[0] : this.originalPageX,
                        h = i ? o - this.offset.click.left >= i[0] || o - this.offset.click.left > i[2] ? o : o - this.offset.click.left >= i[0] ? o - a.grid[0] : o + a.grid[0] : o),
                        "y" === a.axis && (h = this.originalPageX),
                        "x" === a.axis && (u = this.originalPageY)),
                        {
                            top: u - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.offset.scroll.top : l ? 0 : this.offset.scroll.top),
                            left: h - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.offset.scroll.left : l ? 0 : this.offset.scroll.left)
                        }
                    },
                    _clear: function() {
                        this.helper.removeClass("ui-draggable-dragging"),
                        this.helper[0] === this.element[0] || this.cancelHelperRemoval || this.helper.remove(),
                        this.helper = null,
                        this.cancelHelperRemoval = false,
                        this.destroyOnClear && this.destroy()
                    },
                    _normalizeRightBottom: function() {
                        "y" !== this.options.axis && "auto" !== this.helper.css("right") && (this.helper.width(this.helper.width()),
                        this.helper.css("right", "auto")),
                        "x" !== this.options.axis && "auto" !== this.helper.css("bottom") && (this.helper.height(this.helper.height()),
                        this.helper.css("bottom", "auto"))
                    },
                    _trigger: function(type, e, i) {
                        return i = i || this._uiHash(),
                        t.ui.plugin.call(this, type, [e, i, this], true),
                        /^(drag|start|stop)/.test(type) && (this.positionAbs = this._convertPositionTo("absolute"),
                        i.offset = this.positionAbs),
                        t.Widget.prototype._trigger.call(this, type, e, i)
                    },
                    plugins: {},
                    _uiHash: function() {
                        return {
                            helper: this.helper,
                            position: this.position,
                            originalPosition: this.originalPosition,
                            offset: this.positionAbs
                        }
                    }
                }),
                t.ui.plugin.add("draggable", "connectToSortable", {
                    start: function(e, i, draggable) {
                        var n = t.extend({}, i, {
                            item: draggable.element
                        });
                        draggable.sortables = [],
                        t(draggable.options.connectToSortable).each((function() {
                            var sortable = t(this).sortable("instance");
                            sortable && !sortable.options.disabled && (draggable.sortables.push(sortable),
                            sortable.refreshPositions(),
                            sortable._trigger("activate", e, n))
                        }
                        ))
                    },
                    stop: function(e, i, draggable) {
                        var n = t.extend({}, i, {
                            item: draggable.element
                        });
                        draggable.cancelHelperRemoval = false,
                        t.each(draggable.sortables, (function() {
                            var sortable = this;
                            sortable.isOver ? (sortable.isOver = 0,
                            draggable.cancelHelperRemoval = true,
                            sortable.cancelHelperRemoval = false,
                            sortable._storedCSS = {
                                position: sortable.placeholder.css("position"),
                                top: sortable.placeholder.css("top"),
                                left: sortable.placeholder.css("left")
                            },
                            sortable._mouseStop(e),
                            sortable.options.helper = sortable.options._helper) : (sortable.cancelHelperRemoval = true,
                            sortable._trigger("deactivate", e, n))
                        }
                        ))
                    },
                    drag: function(e, i, draggable) {
                        t.each(draggable.sortables, (function() {
                            var n = false
                              , sortable = this;
                            sortable.positionAbs = draggable.positionAbs,
                            sortable.helperProportions = draggable.helperProportions,
                            sortable.offset.click = draggable.offset.click,
                            sortable._intersectsWith(sortable.containerCache) && (n = true,
                            t.each(draggable.sortables, (function() {
                                return this.positionAbs = draggable.positionAbs,
                                this.helperProportions = draggable.helperProportions,
                                this.offset.click = draggable.offset.click,
                                this !== sortable && this._intersectsWith(this.containerCache) && t.contains(sortable.element[0], this.element[0]) && (n = false),
                                n
                            }
                            ))),
                            n ? (sortable.isOver || (sortable.isOver = 1,
                            draggable._parent = i.helper.parent(),
                            sortable.currentItem = i.helper.appendTo(sortable.element).data("ui-sortable-item", true),
                            sortable.options._helper = sortable.options.helper,
                            sortable.options.helper = function() {
                                return i.helper[0]
                            }
                            ,
                            e.target = sortable.currentItem[0],
                            sortable._mouseCapture(e, true),
                            sortable._mouseStart(e, true, true),
                            sortable.offset.click.top = draggable.offset.click.top,
                            sortable.offset.click.left = draggable.offset.click.left,
                            sortable.offset.parent.left -= draggable.offset.parent.left - sortable.offset.parent.left,
                            sortable.offset.parent.top -= draggable.offset.parent.top - sortable.offset.parent.top,
                            draggable._trigger("toSortable", e),
                            draggable.dropped = sortable.element,
                            t.each(draggable.sortables, (function() {
                                this.refreshPositions()
                            }
                            )),
                            draggable.currentItem = draggable.element,
                            sortable.fromOutside = draggable),
                            sortable.currentItem && (sortable._mouseDrag(e),
                            i.position = sortable.position)) : sortable.isOver && (sortable.isOver = 0,
                            sortable.cancelHelperRemoval = true,
                            sortable.options._revert = sortable.options.revert,
                            sortable.options.revert = false,
                            sortable._trigger("out", e, sortable._uiHash(sortable)),
                            sortable._mouseStop(e, true),
                            sortable.options.revert = sortable.options._revert,
                            sortable.options.helper = sortable.options._helper,
                            sortable.placeholder && sortable.placeholder.remove(),
                            i.helper.appendTo(draggable._parent),
                            draggable._refreshOffsets(e),
                            i.position = draggable._generatePosition(e, true),
                            draggable._trigger("fromSortable", e),
                            draggable.dropped = false,
                            t.each(draggable.sortables, (function() {
                                this.refreshPositions()
                            }
                            )))
                        }
                        ))
                    }
                }),
                t.ui.plugin.add("draggable", "cursor", {
                    start: function(e, i, instance) {
                        var n = t("body")
                          , s = instance.options;
                        n.css("cursor") && (s._cursor = n.css("cursor")),
                        n.css("cursor", s.cursor)
                    },
                    stop: function(e, i, instance) {
                        var n = instance.options;
                        n._cursor && t("body").css("cursor", n._cursor)
                    }
                }),
                t.ui.plugin.add("draggable", "opacity", {
                    start: function(e, i, instance) {
                        var n = t(i.helper)
                          , s = instance.options;
                        n.css("opacity") && (s._opacity = n.css("opacity")),
                        n.css("opacity", s.opacity)
                    },
                    stop: function(e, i, instance) {
                        var n = instance.options;
                        n._opacity && t(i.helper).css("opacity", n._opacity)
                    }
                }),
                t.ui.plugin.add("draggable", "scroll", {
                    start: function(t, e, i) {
                        i.scrollParentNotHidden || (i.scrollParentNotHidden = i.helper.scrollParent(false)),
                        i.scrollParentNotHidden[0] !== i.document[0] && "HTML" !== i.scrollParentNotHidden[0].tagName && (i.overflowOffset = i.scrollParentNotHidden.offset())
                    },
                    drag: function(e, i, n) {
                        var s = n.options
                          , o = false
                          , a = n.scrollParentNotHidden[0]
                          , l = n.document[0];
                        a !== l && "HTML" !== a.tagName ? (s.axis && "x" === s.axis || (n.overflowOffset.top + a.offsetHeight - e.pageY < s.scrollSensitivity ? a.scrollTop = o = a.scrollTop + s.scrollSpeed : e.pageY - n.overflowOffset.top < s.scrollSensitivity && (a.scrollTop = o = a.scrollTop - s.scrollSpeed)),
                        s.axis && "y" === s.axis || (n.overflowOffset.left + a.offsetWidth - e.pageX < s.scrollSensitivity ? a.scrollLeft = o = a.scrollLeft + s.scrollSpeed : e.pageX - n.overflowOffset.left < s.scrollSensitivity && (a.scrollLeft = o = a.scrollLeft - s.scrollSpeed))) : (s.axis && "x" === s.axis || (e.pageY - t(l).scrollTop() < s.scrollSensitivity ? o = t(l).scrollTop(t(l).scrollTop() - s.scrollSpeed) : t(window).height() - (e.pageY - t(l).scrollTop()) < s.scrollSensitivity && (o = t(l).scrollTop(t(l).scrollTop() + s.scrollSpeed))),
                        s.axis && "y" === s.axis || (e.pageX - t(l).scrollLeft() < s.scrollSensitivity ? o = t(l).scrollLeft(t(l).scrollLeft() - s.scrollSpeed) : t(window).width() - (e.pageX - t(l).scrollLeft()) < s.scrollSensitivity && (o = t(l).scrollLeft(t(l).scrollLeft() + s.scrollSpeed)))),
                        false !== o && t.ui.ddmanager && !s.dropBehaviour && t.ui.ddmanager.prepareOffsets(n, e)
                    }
                }),
                t.ui.plugin.add("draggable", "snap", {
                    start: function(e, i, n) {
                        var s = n.options;
                        n.snapElements = [],
                        t(s.snap.constructor !== String ? s.snap.items || ":data(ui-draggable)" : s.snap).each((function() {
                            var e = t(this)
                              , i = e.offset();
                            this !== n.element[0] && n.snapElements.push({
                                item: this,
                                width: e.outerWidth(),
                                height: e.outerHeight(),
                                top: i.top,
                                left: i.left
                            })
                        }
                        ))
                    },
                    drag: function(e, i, n) {
                        var s, bs, o, a, l, r, h, u, c, p, f = n.options, d = f.snapTolerance, m = i.offset.left, g = m + n.helperProportions.width, v = i.offset.top, b = v + n.helperProportions.height;
                        for (c = n.snapElements.length - 1; c >= 0; c--)
                            r = (l = n.snapElements[c].left - n.margins.left) + n.snapElements[c].width,
                            u = (h = n.snapElements[c].top - n.margins.top) + n.snapElements[c].height,
                            g < l - d || m > r + d || b < h - d || v > u + d || !t.contains(n.snapElements[c].item.ownerDocument, n.snapElements[c].item) ? (n.snapElements[c].snapping && n.options.snap.release && n.options.snap.release.call(n.element, e, t.extend(n._uiHash(), {
                                snapItem: n.snapElements[c].item
                            })),
                            n.snapElements[c].snapping = false) : ("inner" !== f.snapMode && (s = Math.abs(h - b) <= d,
                            bs = Math.abs(u - v) <= d,
                            o = Math.abs(l - g) <= d,
                            a = Math.abs(r - m) <= d,
                            s && (i.position.top = n._convertPositionTo("relative", {
                                top: h - n.helperProportions.height,
                                left: 0
                            }).top),
                            bs && (i.position.top = n._convertPositionTo("relative", {
                                top: u,
                                left: 0
                            }).top),
                            o && (i.position.left = n._convertPositionTo("relative", {
                                top: 0,
                                left: l - n.helperProportions.width
                            }).left),
                            a && (i.position.left = n._convertPositionTo("relative", {
                                top: 0,
                                left: r
                            }).left)),
                            p = s || bs || o || a,
                            "outer" !== f.snapMode && (s = Math.abs(h - v) <= d,
                            bs = Math.abs(u - b) <= d,
                            o = Math.abs(l - m) <= d,
                            a = Math.abs(r - g) <= d,
                            s && (i.position.top = n._convertPositionTo("relative", {
                                top: h,
                                left: 0
                            }).top),
                            bs && (i.position.top = n._convertPositionTo("relative", {
                                top: u - n.helperProportions.height,
                                left: 0
                            }).top),
                            o && (i.position.left = n._convertPositionTo("relative", {
                                top: 0,
                                left: l
                            }).left),
                            a && (i.position.left = n._convertPositionTo("relative", {
                                top: 0,
                                left: r - n.helperProportions.width
                            }).left)),
                            !n.snapElements[c].snapping && (s || bs || o || a || p) && n.options.snap.snap && n.options.snap.snap.call(n.element, e, t.extend(n._uiHash(), {
                                snapItem: n.snapElements[c].item
                            })),
                            n.snapElements[c].snapping = s || bs || o || a || p)
                    }
                }),
                t.ui.plugin.add("draggable", "stack", {
                    start: function(e, i, instance) {
                        var n, s = instance.options, group = t.makeArray(t(s.stack)).sort((function(e, i) {
                            return (parseInt(t(e).css("zIndex"), 10) || 0) - (parseInt(t(i).css("zIndex"), 10) || 0)
                        }
                        ));
                        group.length && (n = parseInt(t(group[0]).css("zIndex"), 10) || 0,
                        t(group).each((function(e) {
                            t(this).css("zIndex", n + e)
                        }
                        )),
                        this.css("zIndex", n + group.length))
                    }
                }),
                t.ui.plugin.add("draggable", "zIndex", {
                    start: function(e, i, instance) {
                        var n = t(i.helper)
                          , s = instance.options;
                        n.css("zIndex") && (s._zIndex = n.css("zIndex")),
                        n.css("zIndex", s.zIndex)
                    },
                    stop: function(e, i, instance) {
                        var n = instance.options;
                        n._zIndex && t(i.helper).css("zIndex", n._zIndex)
                    }
                });
                var draggable = t.ui.draggable;
                /*!
 * jQuery UI Resizable 1.11.4
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/resizable/
 */
                t.widget("ui.resizable", t.ui.mouse, {
                    version: "1.11.4",
                    widgetEventPrefix: "resize",
                    options: {
                        alsoResize: false,
                        animate: false,
                        animateDuration: "slow",
                        animateEasing: "swing",
                        aspectRatio: false,
                        autoHide: false,
                        containment: false,
                        ghost: false,
                        grid: false,
                        handles: "e,s,se",
                        helper: false,
                        maxHeight: null,
                        maxWidth: null,
                        minHeight: 10,
                        minWidth: 10,
                        zIndex: 90,
                        resize: null,
                        start: null,
                        stop: null
                    },
                    _num: function(t) {
                        return parseInt(t, 10) || 0
                    },
                    _isNumber: function(t) {
                        return !isNaN(parseInt(t, 10))
                    },
                    _hasScroll: function(el, e) {
                        if ("hidden" === t(el).css("overflow"))
                            return false;
                        var i = e && "left" === e ? "scrollLeft" : "scrollTop"
                          , n = false;
                        return el[i] > 0 || (el[i] = 1,
                        n = el[i] > 0,
                        el[i] = 0,
                        n)
                    },
                    _create: function() {
                        var e, i, n, s, o, a = this, l = this.options;
                        if (this.element.addClass("ui-resizable"),
                        t.extend(this, {
                            _aspectRatio: !!l.aspectRatio,
                            aspectRatio: l.aspectRatio,
                            originalElement: this.element,
                            _proportionallyResizeElements: [],
                            _helper: l.helper || l.ghost || l.animate ? l.helper || "ui-resizable-helper" : null
                        }),
                        this.element[0].nodeName.match(/^(canvas|textarea|input|select|button|img)$/i) && (this.element.wrap(t("<div class='ui-wrapper' style='overflow: hidden;'></div>").css({
                            position: this.element.css("position"),
                            width: this.element.outerWidth(),
                            height: this.element.outerHeight(),
                            top: this.element.css("top"),
                            left: this.element.css("left")
                        })),
                        this.element = this.element.parent().data("ui-resizable", this.element.resizable("instance")),
                        this.elementIsWrapper = true,
                        this.element.css({
                            marginLeft: this.originalElement.css("marginLeft"),
                            marginTop: this.originalElement.css("marginTop"),
                            marginRight: this.originalElement.css("marginRight"),
                            marginBottom: this.originalElement.css("marginBottom")
                        }),
                        this.originalElement.css({
                            marginLeft: 0,
                            marginTop: 0,
                            marginRight: 0,
                            marginBottom: 0
                        }),
                        this.originalResizeStyle = this.originalElement.css("resize"),
                        this.originalElement.css("resize", "none"),
                        this._proportionallyResizeElements.push(this.originalElement.css({
                            position: "static",
                            zoom: 1,
                            display: "block"
                        })),
                        this.originalElement.css({
                            margin: this.originalElement.css("margin")
                        }),
                        this._proportionallyResize()),
                        this.handles = l.handles || (t(".ui-resizable-handle", this.element).length ? {
                            n: ".ui-resizable-n",
                            e: ".ui-resizable-e",
                            s: ".ui-resizable-s",
                            w: ".ui-resizable-w",
                            se: ".ui-resizable-se",
                            sw: ".ui-resizable-sw",
                            ne: ".ui-resizable-ne",
                            nw: ".ui-resizable-nw"
                        } : "e,s,se"),
                        this._handles = t(),
                        this.handles.constructor === String)
                            for ("all" === this.handles && (this.handles = "n,e,s,w,se,sw,ne,nw"),
                            e = this.handles.split(","),
                            this.handles = {},
                            i = 0; i < e.length; i++)
                                n = t.trim(e[i]),
                                (s = t("<div class='ui-resizable-handle " + (o = "ui-resizable-" + n) + "'></div>")).css({
                                    zIndex: l.zIndex
                                }),
                                "se" === n && s.addClass("ui-icon ui-icon-gripsmall-diagonal-se"),
                                this.handles[n] = ".ui-resizable-" + n,
                                this.element.append(s);
                        this._renderAxis = function(e) {
                            var i, n, s, o;
                            for (i in e = e || this.element,
                            this.handles)
                                this.handles[i].constructor === String ? this.handles[i] = this.element.children(this.handles[i]).first().show() : (this.handles[i].jquery || this.handles[i].nodeType) && (this.handles[i] = t(this.handles[i]),
                                this._on(this.handles[i], {
                                    mousedown: a._mouseDown
                                })),
                                this.elementIsWrapper && this.originalElement[0].nodeName.match(/^(textarea|input|select|button)$/i) && (n = t(this.handles[i], this.element),
                                o = /sw|ne|nw|se|n|s/.test(i) ? n.outerHeight() : n.outerWidth(),
                                s = ["padding", /ne|nw|n/.test(i) ? "Top" : /se|sw|s/.test(i) ? "Bottom" : /^e$/.test(i) ? "Right" : "Left"].join(""),
                                e.css(s, o),
                                this._proportionallyResize()),
                                this._handles = this._handles.add(this.handles[i])
                        }
                        ,
                        this._renderAxis(this.element),
                        this._handles = this._handles.add(this.element.find(".ui-resizable-handle")),
                        this._handles.disableSelection(),
                        this._handles.mouseover((function() {
                            a.resizing || (this.className && (s = this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)),
                            a.axis = s && s[1] ? s[1] : "se")
                        }
                        )),
                        l.autoHide && (this._handles.hide(),
                        t(this.element).addClass("ui-resizable-autohide").mouseenter((function() {
                            l.disabled || (t(this).removeClass("ui-resizable-autohide"),
                            a._handles.show())
                        }
                        )).mouseleave((function() {
                            l.disabled || a.resizing || (t(this).addClass("ui-resizable-autohide"),
                            a._handles.hide())
                        }
                        ))),
                        this._mouseInit()
                    },
                    _destroy: function() {
                        this._mouseDestroy();
                        var e, i = function(e) {
                            t(e).removeClass("ui-resizable ui-resizable-disabled ui-resizable-resizing").removeData("resizable").removeData("ui-resizable").unbind(".resizable").find(".ui-resizable-handle").remove()
                        };
                        return this.elementIsWrapper && (i(this.element),
                        e = this.element,
                        this.originalElement.css({
                            position: e.css("position"),
                            width: e.outerWidth(),
                            height: e.outerHeight(),
                            top: e.css("top"),
                            left: e.css("left")
                        }).insertAfter(e),
                        e.remove()),
                        this.originalElement.css("resize", this.originalResizeStyle),
                        i(this.originalElement),
                        this
                    },
                    _mouseCapture: function(e) {
                        var i, n, s = false;
                        for (i in this.handles)
                            ((n = t(this.handles[i])[0]) === e.target || t.contains(n, e.target)) && (s = true);
                        return !this.options.disabled && s
                    },
                    _mouseStart: function(e) {
                        var i, n, s, o = this.options, el = this.element;
                        return this.resizing = true,
                        this._renderProxy(),
                        i = this._num(this.helper.css("left")),
                        n = this._num(this.helper.css("top")),
                        o.containment && (i += t(o.containment).scrollLeft() || 0,
                        n += t(o.containment).scrollTop() || 0),
                        this.offset = this.helper.offset(),
                        this.position = {
                            left: i,
                            top: n
                        },
                        this.size = this._helper ? {
                            width: this.helper.width(),
                            height: this.helper.height()
                        } : {
                            width: el.width(),
                            height: el.height()
                        },
                        this.originalSize = this._helper ? {
                            width: el.outerWidth(),
                            height: el.outerHeight()
                        } : {
                            width: el.width(),
                            height: el.height()
                        },
                        this.sizeDiff = {
                            width: el.outerWidth() - el.width(),
                            height: el.outerHeight() - el.height()
                        },
                        this.originalPosition = {
                            left: i,
                            top: n
                        },
                        this.originalMousePosition = {
                            left: e.pageX,
                            top: e.pageY
                        },
                        this.aspectRatio = "number" == typeof o.aspectRatio ? o.aspectRatio : this.originalSize.width / this.originalSize.height || 1,
                        s = t(".ui-resizable-" + this.axis).css("cursor"),
                        t("body").css("cursor", "auto" === s ? this.axis + "-resize" : s),
                        el.addClass("ui-resizable-resizing"),
                        this._propagate("start", e),
                        true
                    },
                    _mouseDrag: function(e) {
                        var data, props, i = this.originalMousePosition, n = this.axis, s = e.pageX - i.left || 0, o = e.pageY - i.top || 0, a = this._change[n];
                        return this._updatePrevProperties(),
                        !!a && (data = a.apply(this, [e, s, o]),
                        this._updateVirtualBoundaries(e.shiftKey),
                        (this._aspectRatio || e.shiftKey) && (data = this._updateRatio(data, e)),
                        data = this._respectSize(data, e),
                        this._updateCache(data),
                        this._propagate("resize", e),
                        props = this._applyChanges(),
                        !this._helper && this._proportionallyResizeElements.length && this._proportionallyResize(),
                        t.isEmptyObject(props) || (this._updatePrevProperties(),
                        this._trigger("resize", e, this.ui()),
                        this._applyChanges()),
                        false)
                    },
                    _mouseStop: function(e) {
                        this.resizing = false;
                        var i, n, s, o, a, l, h, u = this.options, c = this;
                        return this._helper && (s = (n = (i = this._proportionallyResizeElements).length && /textarea/i.test(i[0].nodeName)) && this._hasScroll(i[0], "left") ? 0 : c.sizeDiff.height,
                        o = n ? 0 : c.sizeDiff.width,
                        a = {
                            width: c.helper.width() - o,
                            height: c.helper.height() - s
                        },
                        l = parseInt(c.element.css("left"), 10) + (c.position.left - c.originalPosition.left) || null,
                        h = parseInt(c.element.css("top"), 10) + (c.position.top - c.originalPosition.top) || null,
                        u.animate || this.element.css(t.extend(a, {
                            top: h,
                            left: l
                        })),
                        c.helper.height(c.size.height),
                        c.helper.width(c.size.width),
                        this._helper && !u.animate && this._proportionallyResize()),
                        t("body").css("cursor", "auto"),
                        this.element.removeClass("ui-resizable-resizing"),
                        this._propagate("stop", e),
                        this._helper && this.helper.remove(),
                        false
                    },
                    _updatePrevProperties: function() {
                        this.prevPosition = {
                            top: this.position.top,
                            left: this.position.left
                        },
                        this.prevSize = {
                            width: this.size.width,
                            height: this.size.height
                        }
                    },
                    _applyChanges: function() {
                        var props = {};
                        return this.position.top !== this.prevPosition.top && (props.top = this.position.top + "px"),
                        this.position.left !== this.prevPosition.left && (props.left = this.position.left + "px"),
                        this.size.width !== this.prevSize.width && (props.width = this.size.width + "px"),
                        this.size.height !== this.prevSize.height && (props.height = this.size.height + "px"),
                        this.helper.css(props),
                        props
                    },
                    _updateVirtualBoundaries: function(t) {
                        var e, i, n, s, o, a = this.options;
                        o = {
                            minWidth: this._isNumber(a.minWidth) ? a.minWidth : 0,
                            maxWidth: this._isNumber(a.maxWidth) ? a.maxWidth : 1 / 0,
                            minHeight: this._isNumber(a.minHeight) ? a.minHeight : 0,
                            maxHeight: this._isNumber(a.maxHeight) ? a.maxHeight : 1 / 0
                        },
                        (this._aspectRatio || t) && (e = o.minHeight * this.aspectRatio,
                        n = o.minWidth / this.aspectRatio,
                        i = o.maxHeight * this.aspectRatio,
                        s = o.maxWidth / this.aspectRatio,
                        e > o.minWidth && (o.minWidth = e),
                        n > o.minHeight && (o.minHeight = n),
                        i < o.maxWidth && (o.maxWidth = i),
                        s < o.maxHeight && (o.maxHeight = s)),
                        this._vBoundaries = o
                    },
                    _updateCache: function(data) {
                        this.offset = this.helper.offset(),
                        this._isNumber(data.left) && (this.position.left = data.left),
                        this._isNumber(data.top) && (this.position.top = data.top),
                        this._isNumber(data.height) && (this.size.height = data.height),
                        this._isNumber(data.width) && (this.size.width = data.width)
                    },
                    _updateRatio: function(data) {
                        var t = this.position
                          , e = this.size
                          , i = this.axis;
                        return this._isNumber(data.height) ? data.width = data.height * this.aspectRatio : this._isNumber(data.width) && (data.height = data.width / this.aspectRatio),
                        "sw" === i && (data.left = t.left + (e.width - data.width),
                        data.top = null),
                        "nw" === i && (data.top = t.top + (e.height - data.height),
                        data.left = t.left + (e.width - data.width)),
                        data
                    },
                    _respectSize: function(data) {
                        var t = this._vBoundaries
                          , e = this.axis
                          , i = this._isNumber(data.width) && t.maxWidth && t.maxWidth < data.width
                          , n = this._isNumber(data.height) && t.maxHeight && t.maxHeight < data.height
                          , s = this._isNumber(data.width) && t.minWidth && t.minWidth > data.width
                          , o = this._isNumber(data.height) && t.minHeight && t.minHeight > data.height
                          , a = this.originalPosition.left + this.originalSize.width
                          , l = this.position.top + this.size.height
                          , h = /sw|nw|w/.test(e)
                          , u = /nw|ne|n/.test(e);
                        return s && (data.width = t.minWidth),
                        o && (data.height = t.minHeight),
                        i && (data.width = t.maxWidth),
                        n && (data.height = t.maxHeight),
                        s && h && (data.left = a - t.minWidth),
                        i && h && (data.left = a - t.maxWidth),
                        o && u && (data.top = l - t.minHeight),
                        n && u && (data.top = l - t.maxHeight),
                        data.width || data.height || data.left || !data.top ? data.width || data.height || data.top || !data.left || (data.left = null) : data.top = null,
                        data
                    },
                    _getPaddingPlusBorderDimensions: function(t) {
                        for (var e = 0, i = [], n = [t.css("borderTopWidth"), t.css("borderRightWidth"), t.css("borderBottomWidth"), t.css("borderLeftWidth")], paddings = [t.css("paddingTop"), t.css("paddingRight"), t.css("paddingBottom"), t.css("paddingLeft")]; e < 4; e++)
                            i[e] = parseInt(n[e], 10) || 0,
                            i[e] += parseInt(paddings[e], 10) || 0;
                        return {
                            height: i[0] + i[2],
                            width: i[1] + i[3]
                        }
                    },
                    _proportionallyResize: function() {
                        if (this._proportionallyResizeElements.length)
                            for (var t, e = 0, i = this.helper || this.element; e < this._proportionallyResizeElements.length; e++)
                                t = this._proportionallyResizeElements[e],
                                this.outerDimensions || (this.outerDimensions = this._getPaddingPlusBorderDimensions(t)),
                                t.css({
                                    height: i.height() - this.outerDimensions.height || 0,
                                    width: i.width() - this.outerDimensions.width || 0
                                })
                    },
                    _renderProxy: function() {
                        var el = this.element
                          , e = this.options;
                        this.elementOffset = el.offset(),
                        this._helper ? (this.helper = this.helper || t("<div style='overflow:hidden;'></div>"),
                        this.helper.addClass(this._helper).css({
                            width: this.element.outerWidth() - 1,
                            height: this.element.outerHeight() - 1,
                            position: "absolute",
                            left: this.elementOffset.left + "px",
                            top: this.elementOffset.top + "px",
                            zIndex: ++e.zIndex
                        }),
                        this.helper.appendTo("body").disableSelection()) : this.helper = this.element
                    },
                    _change: {
                        e: function(t, e) {
                            return {
                                width: this.originalSize.width + e
                            }
                        },
                        w: function(t, e) {
                            var cs = this.originalSize, i;
                            return {
                                left: this.originalPosition.left + e,
                                width: cs.width - e
                            }
                        },
                        n: function(t, e, i) {
                            var cs = this.originalSize, n;
                            return {
                                top: this.originalPosition.top + i,
                                height: cs.height - i
                            }
                        },
                        s: function(t, e, i) {
                            return {
                                height: this.originalSize.height + i
                            }
                        },
                        se: function(e, i, n) {
                            return t.extend(this._change.s.apply(this, arguments), this._change.e.apply(this, [e, i, n]))
                        },
                        sw: function(e, i, n) {
                            return t.extend(this._change.s.apply(this, arguments), this._change.w.apply(this, [e, i, n]))
                        },
                        ne: function(e, i, n) {
                            return t.extend(this._change.n.apply(this, arguments), this._change.e.apply(this, [e, i, n]))
                        },
                        nw: function(e, i, n) {
                            return t.extend(this._change.n.apply(this, arguments), this._change.w.apply(this, [e, i, n]))
                        }
                    },
                    _propagate: function(e, i) {
                        t.ui.plugin.call(this, e, [i, this.ui()]),
                        "resize" !== e && this._trigger(e, i, this.ui())
                    },
                    plugins: {},
                    ui: function() {
                        return {
                            originalElement: this.originalElement,
                            element: this.element,
                            helper: this.helper,
                            position: this.position,
                            size: this.size,
                            originalSize: this.originalSize,
                            originalPosition: this.originalPosition
                        }
                    }
                }),
                t.ui.plugin.add("resizable", "animate", {
                    stop: function(e) {
                        var i = t(this).resizable("instance")
                          , n = i.options
                          , s = i._proportionallyResizeElements
                          , o = s.length && /textarea/i.test(s[0].nodeName)
                          , a = o && i._hasScroll(s[0], "left") ? 0 : i.sizeDiff.height
                          , l = o ? 0 : i.sizeDiff.width
                          , style = {
                            width: i.size.width - l,
                            height: i.size.height - a
                        }
                          , h = parseInt(i.element.css("left"), 10) + (i.position.left - i.originalPosition.left) || null
                          , u = parseInt(i.element.css("top"), 10) + (i.position.top - i.originalPosition.top) || null;
                        i.element.animate(t.extend(style, u && h ? {
                            top: u,
                            left: h
                        } : {}), {
                            duration: n.animateDuration,
                            easing: n.animateEasing,
                            step: function() {
                                var data = {
                                    width: parseInt(i.element.css("width"), 10),
                                    height: parseInt(i.element.css("height"), 10),
                                    top: parseInt(i.element.css("top"), 10),
                                    left: parseInt(i.element.css("left"), 10)
                                };
                                s && s.length && t(s[0]).css({
                                    width: data.width,
                                    height: data.height
                                }),
                                i._updateCache(data),
                                i._propagate("resize", e)
                            }
                        })
                    }
                }),
                t.ui.plugin.add("resizable", "containment", {
                    start: function() {
                        var e, i, n, s, o, a, l, h = t(this).resizable("instance"), u = h.options, el = h.element, c = u.containment, p = c instanceof t ? c.get(0) : /parent/.test(c) ? el.parent().get(0) : c;
                        p && (h.containerElement = t(p),
                        /document/.test(c) || c === document ? (h.containerOffset = {
                            left: 0,
                            top: 0
                        },
                        h.containerPosition = {
                            left: 0,
                            top: 0
                        },
                        h.parentData = {
                            element: t(document),
                            left: 0,
                            top: 0,
                            width: t(document).width(),
                            height: t(document).height() || document.body.parentNode.scrollHeight
                        }) : (e = t(p),
                        i = [],
                        t(["Top", "Right", "Left", "Bottom"]).each((function(t, n) {
                            i[t] = h._num(e.css("padding" + n))
                        }
                        )),
                        h.containerOffset = e.offset(),
                        h.containerPosition = e.position(),
                        h.containerSize = {
                            height: e.innerHeight() - i[3],
                            width: e.innerWidth() - i[1]
                        },
                        n = h.containerOffset,
                        s = h.containerSize.height,
                        o = h.containerSize.width,
                        a = h._hasScroll(p, "left") ? p.scrollWidth : o,
                        l = h._hasScroll(p) ? p.scrollHeight : s,
                        h.parentData = {
                            element: p,
                            left: n.left,
                            top: n.top,
                            width: a,
                            height: l
                        }))
                    },
                    resize: function(e) {
                        var i, n, s, o, a = t(this).resizable("instance"), l = a.options, h = a.containerOffset, u = a.position, c = a._aspectRatio || e.shiftKey, p = {
                            top: 0,
                            left: 0
                        }, f = a.containerElement, m = true;
                        f[0] !== document && /static/.test(f.css("position")) && (p = h),
                        u.left < (a._helper ? h.left : 0) && (a.size.width = a.size.width + (a._helper ? a.position.left - h.left : a.position.left - p.left),
                        c && (a.size.height = a.size.width / a.aspectRatio,
                        m = false),
                        a.position.left = l.helper ? h.left : 0),
                        u.top < (a._helper ? h.top : 0) && (a.size.height = a.size.height + (a._helper ? a.position.top - h.top : a.position.top),
                        c && (a.size.width = a.size.height * a.aspectRatio,
                        m = false),
                        a.position.top = a._helper ? h.top : 0),
                        s = a.containerElement.get(0) === a.element.parent().get(0),
                        o = /relative|absolute/.test(a.containerElement.css("position")),
                        s && o ? (a.offset.left = a.parentData.left + a.position.left,
                        a.offset.top = a.parentData.top + a.position.top) : (a.offset.left = a.element.offset().left,
                        a.offset.top = a.element.offset().top),
                        i = Math.abs(a.sizeDiff.width + (a._helper ? a.offset.left - p.left : a.offset.left - h.left)),
                        n = Math.abs(a.sizeDiff.height + (a._helper ? a.offset.top - p.top : a.offset.top - h.top)),
                        i + a.size.width >= a.parentData.width && (a.size.width = a.parentData.width - i,
                        c && (a.size.height = a.size.width / a.aspectRatio,
                        m = false)),
                        n + a.size.height >= a.parentData.height && (a.size.height = a.parentData.height - n,
                        c && (a.size.width = a.size.height * a.aspectRatio,
                        m = false)),
                        m || (a.position.left = a.prevPosition.left,
                        a.position.top = a.prevPosition.top,
                        a.size.width = a.prevSize.width,
                        a.size.height = a.prevSize.height)
                    },
                    stop: function() {
                        var e = t(this).resizable("instance")
                          , i = e.options
                          , n = e.containerOffset
                          , s = e.containerPosition
                          , o = e.containerElement
                          , helper = t(e.helper)
                          , a = helper.offset()
                          , l = helper.outerWidth() - e.sizeDiff.width
                          , h = helper.outerHeight() - e.sizeDiff.height;
                        e._helper && !i.animate && /relative/.test(o.css("position")) && t(this).css({
                            left: a.left - s.left - n.left,
                            width: l,
                            height: h
                        }),
                        e._helper && !i.animate && /static/.test(o.css("position")) && t(this).css({
                            left: a.left - s.left - n.left,
                            width: l,
                            height: h
                        })
                    }
                }),
                t.ui.plugin.add("resizable", "alsoResize", {
                    start: function() {
                        var e, i = t(this).resizable("instance").options;
                        t(i.alsoResize).each((function() {
                            var el = t(this);
                            el.data("ui-resizable-alsoresize", {
                                width: parseInt(el.width(), 10),
                                height: parseInt(el.height(), 10),
                                left: parseInt(el.css("left"), 10),
                                top: parseInt(el.css("top"), 10)
                            })
                        }
                        ))
                    },
                    resize: function(e, i) {
                        var n = t(this).resizable("instance")
                          , s = n.options
                          , o = n.originalSize
                          , a = n.originalPosition
                          , l = {
                            height: n.size.height - o.height || 0,
                            width: n.size.width - o.width || 0,
                            top: n.position.top - a.top || 0,
                            left: n.position.left - a.left || 0
                        };
                        t(s.alsoResize).each((function() {
                            var el = t(this)
                              , e = t(this).data("ui-resizable-alsoresize")
                              , style = {}
                              , css = el.parents(i.originalElement[0]).length ? ["width", "height"] : ["width", "height", "top", "left"];
                            t.each(css, (function(t, i) {
                                var n = (e[i] || 0) + (l[i] || 0);
                                n && n >= 0 && (style[i] = n || null)
                            }
                            )),
                            el.css(style)
                        }
                        ))
                    },
                    stop: function() {
                        t(this).removeData("resizable-alsoresize")
                    }
                }),
                t.ui.plugin.add("resizable", "ghost", {
                    start: function() {
                        var e = t(this).resizable("instance")
                          , i = e.options
                          , cs = e.size;
                        e.ghost = e.originalElement.clone(),
                        e.ghost.css({
                            opacity: .25,
                            display: "block",
                            position: "relative",
                            height: cs.height,
                            width: cs.width,
                            margin: 0,
                            left: 0,
                            top: 0
                        }).addClass("ui-resizable-ghost").addClass("string" == typeof i.ghost ? i.ghost : ""),
                        e.ghost.appendTo(e.helper)
                    },
                    resize: function() {
                        var e = t(this).resizable("instance");
                        e.ghost && e.ghost.css({
                            position: "relative",
                            height: e.size.height,
                            width: e.size.width
                        })
                    },
                    stop: function() {
                        var e = t(this).resizable("instance");
                        e.ghost && e.helper && e.helper.get(0).removeChild(e.ghost.get(0))
                    }
                }),
                t.ui.plugin.add("resizable", "grid", {
                    resize: function() {
                        var e, i = t(this).resizable("instance"), n = i.options, cs = i.size, s = i.originalSize, o = i.originalPosition, a = i.axis, grid = "number" == typeof n.grid ? [n.grid, n.grid] : n.grid, l = grid[0] || 1, h = grid[1] || 1, u = Math.round((cs.width - s.width) / l) * l, c = Math.round((cs.height - s.height) / h) * h, p = s.width + u, f = s.height + c, m = n.maxWidth && n.maxWidth < p, g = n.maxHeight && n.maxHeight < f, v = n.minWidth && n.minWidth > p, b = n.minHeight && n.minHeight > f;
                        n.grid = grid,
                        v && (p += l),
                        b && (f += h),
                        m && (p -= l),
                        g && (f -= h),
                        /^(se|s|e)$/.test(a) ? (i.size.width = p,
                        i.size.height = f) : /^(ne)$/.test(a) ? (i.size.width = p,
                        i.size.height = f,
                        i.position.top = o.top - c) : /^(sw)$/.test(a) ? (i.size.width = p,
                        i.size.height = f,
                        i.position.left = o.left - u) : ((f - h <= 0 || p - l <= 0) && (e = i._getPaddingPlusBorderDimensions(this)),
                        f - h > 0 ? (i.size.height = f,
                        i.position.top = o.top - c) : (f = h - e.height,
                        i.size.height = f,
                        i.position.top = o.top + s.height - f),
                        p - l > 0 ? (i.size.width = p,
                        i.position.left = o.left - u) : (p = l - e.width,
                        i.size.width = p,
                        i.position.left = o.left + s.width - p))
                    }
                });
                var A = t.ui.resizable
                  , dialog = t.widget("ui.dialog", {
                    version: "1.11.4",
                    options: {
                        appendTo: "body",
                        autoOpen: true,
                        buttons: [],
                        closeOnEscape: true,
                        closeText: "Close",
                        dialogClass: "",
                        draggable: true,
                        hide: null,
                        height: "auto",
                        maxHeight: null,
                        maxWidth: null,
                        minHeight: 150,
                        minWidth: 150,
                        modal: false,
                        position: {
                            my: "center",
                            at: "center",
                            of: window,
                            collision: "fit",
                            using: function(e) {
                                var i = t(this).css(e).offset().top;
                                i < 0 && t(this).css("top", e.top - i)
                            }
                        },
                        resizable: true,
                        show: null,
                        title: null,
                        width: 300,
                        beforeClose: null,
                        close: null,
                        drag: null,
                        dragStart: null,
                        dragStop: null,
                        focus: null,
                        open: null,
                        resize: null,
                        resizeStart: null,
                        resizeStop: null
                    },
                    sizeRelatedOptions: {
                        buttons: true,
                        height: true,
                        maxHeight: true,
                        maxWidth: true,
                        minHeight: true,
                        minWidth: true,
                        width: true
                    },
                    resizableRelatedOptions: {
                        maxHeight: true,
                        maxWidth: true,
                        minHeight: true,
                        minWidth: true
                    },
                    _create: function() {
                        this.originalCss = {
                            display: this.element[0].style.display,
                            width: this.element[0].style.width,
                            minHeight: this.element[0].style.minHeight,
                            maxHeight: this.element[0].style.maxHeight,
                            height: this.element[0].style.height
                        },
                        this.originalPosition = {
                            parent: this.element.parent(),
                            index: this.element.parent().children().index(this.element)
                        },
                        this.originalTitle = this.element.attr("title"),
                        this.options.title = this.options.title || this.originalTitle,
                        this._createWrapper(),
                        this.element.show().removeAttr("title").addClass("ui-dialog-content ui-widget-content").appendTo(this.uiDialog),
                        this._createTitlebar(),
                        this._createButtonPane(),
                        this.options.draggable && t.fn.draggable && this._makeDraggable(),
                        this.options.resizable && t.fn.resizable && this._makeResizable(),
                        this._isOpen = false,
                        this._trackFocus()
                    },
                    _init: function() {
                        this.options.autoOpen && this.open()
                    },
                    _appendTo: function() {
                        var e = this.options.appendTo;
                        return e && (e.jquery || e.nodeType) ? t(e) : this.document.find(e || "body").eq(0)
                    },
                    _destroy: function() {
                        var t, e = this.originalPosition;
                        this._untrackInstance(),
                        this._destroyOverlay(),
                        this.element.removeUniqueId().removeClass("ui-dialog-content ui-widget-content").css(this.originalCss).detach(),
                        this.uiDialog.stop(true, true).remove(),
                        this.originalTitle && this.element.attr("title", this.originalTitle),
                        (t = e.parent.children().eq(e.index)).length && t[0] !== this.element[0] ? t.before(this.element) : e.parent.append(this.element)
                    },
                    widget: function() {
                        return this.uiDialog
                    },
                    disable: t.noop,
                    enable: t.noop,
                    close: function(e) {
                        var i, n = this;
                        if (this._isOpen && false !== this._trigger("beforeClose", e)) {
                            if (this._isOpen = false,
                            this._focusedElement = null,
                            this._destroyOverlay(),
                            this._untrackInstance(),
                            !this.opener.filter(":focusable").focus().length)
                                try {
                                    (i = this.document[0].activeElement) && "body" !== i.nodeName.toLowerCase() && t(i).blur()
                                } catch (t) {}
                            this._hide(this.uiDialog, this.options.hide, (function() {
                                n._trigger("close", e)
                            }
                            ))
                        }
                    },
                    isOpen: function() {
                        return this._isOpen
                    },
                    moveToTop: function() {
                        this._moveToTop()
                    },
                    _moveToTop: function(e, i) {
                        var n = false
                          , s = this.uiDialog.siblings(".ui-front:visible").map((function() {
                            return +t(this).css("z-index")
                        }
                        )).get()
                          , o = Math.max.apply(null, s);
                        return o >= +this.uiDialog.css("z-index") && (this.uiDialog.css("z-index", o + 1),
                        n = true),
                        n && !i && this._trigger("focus", e),
                        n
                    },
                    open: function() {
                        var e = this;
                        if (this._isOpen)
                            return this._moveToTop() && this._focusTabbable(),
                            void 0;
                        this._isOpen = true,
                        this.opener = t(this.document[0].activeElement),
                        this._size(),
                        this._position(),
                        this._createOverlay(),
                        this._moveToTop(null, true),
                        this.overlay && this.overlay.css("z-index", this.uiDialog.css("z-index") - 1),
                        this._show(this.uiDialog, this.options.show, (function() {
                            e._focusTabbable(),
                            e._trigger("focus")
                        }
                        )),
                        this._makeFocusTarget(),
                        this._trigger("open")
                    },
                    _focusTabbable: function() {
                        var t = this._focusedElement;
                        t || (t = this.element.find("[autofocus]")),
                        t.length || (t = this.element.find(":tabbable")),
                        t.length || (t = this.uiDialogButtonPane.find(":tabbable")),
                        t.length || (t = this.uiDialogTitlebarClose.filter(":tabbable")),
                        t.length || (t = this.uiDialog),
                        t.eq(0).focus()
                    },
                    _keepFocus: function(e) {
                        function i() {
                            var e = this.document[0].activeElement, i;
                            this.uiDialog[0] === e || t.contains(this.uiDialog[0], e) || this._focusTabbable()
                        }
                        e.preventDefault(),
                        i.call(this),
                        this._delay(i)
                    },
                    _createWrapper: function() {
                        this.uiDialog = t("<div>").addClass("ui-dialog ui-widget ui-widget-content ui-corner-all ui-front " + this.options.dialogClass).hide().attr({
                            tabIndex: -1,
                            role: "dialog"
                        }).appendTo(this._appendTo()),
                        this._on(this.uiDialog, {
                            keydown: function(e) {
                                if (this.options.closeOnEscape && !e.isDefaultPrevented() && e.keyCode && e.keyCode === t.ui.keyCode.ESCAPE)
                                    return e.preventDefault(),
                                    this.close(e),
                                    void 0;
                                if (e.keyCode === t.ui.keyCode.TAB && !e.isDefaultPrevented()) {
                                    var i = this.uiDialog.find(":tabbable")
                                      , n = i.filter(":first")
                                      , s = i.filter(":last");
                                    e.target !== s[0] && e.target !== this.uiDialog[0] || e.shiftKey ? e.target !== n[0] && e.target !== this.uiDialog[0] || !e.shiftKey || (this._delay((function() {
                                        s.focus()
                                    }
                                    )),
                                    e.preventDefault()) : (this._delay((function() {
                                        n.focus()
                                    }
                                    )),
                                    e.preventDefault())
                                }
                            },
                            mousedown: function(t) {
                                this._moveToTop(t) && this._focusTabbable()
                            }
                        }),
                        this.element.find("[aria-describedby]").length || this.uiDialog.attr({
                            "aria-describedby": this.element.uniqueId().attr("id")
                        })
                    },
                    _createTitlebar: function() {
                        var e;
                        this.uiDialogTitlebar = t("<div>").addClass("ui-dialog-titlebar ui-widget-header ui-corner-all ui-helper-clearfix").prependTo(this.uiDialog),
                        this._on(this.uiDialogTitlebar, {
                            mousedown: function(e) {
                                t(e.target).closest(".ui-dialog-titlebar-close") || this.uiDialog.focus()
                            }
                        }),
                        this.uiDialogTitlebarClose = t("<button type='button'></button>").button({
                            label: this.options.closeText,
                            icons: {
                                primary: "ui-icon-closethick"
                            },
                            text: false
                        }).addClass("ui-dialog-titlebar-close").appendTo(this.uiDialogTitlebar),
                        this._on(this.uiDialogTitlebarClose, {
                            click: function(t) {
                                t.preventDefault(),
                                this.close(t)
                            }
                        }),
                        e = t("<span>").uniqueId().addClass("ui-dialog-title").prependTo(this.uiDialogTitlebar),
                        this._title(e),
                        this.uiDialog.attr({
                            "aria-labelledby": e.attr("id")
                        })
                    },
                    _title: function(title) {
                        this.options.title || title.html("&#160;"),
                        title.text(this.options.title)
                    },
                    _createButtonPane: function() {
                        this.uiDialogButtonPane = t("<div>").addClass("ui-dialog-buttonpane ui-widget-content ui-helper-clearfix"),
                        this.uiButtonSet = t("<div>").addClass("ui-dialog-buttonset").appendTo(this.uiDialogButtonPane),
                        this._createButtons()
                    },
                    _createButtons: function() {
                        var e = this
                          , buttons = this.options.buttons;
                        if (this.uiDialogButtonPane.remove(),
                        this.uiButtonSet.empty(),
                        t.isEmptyObject(buttons) || t.isArray(buttons) && !buttons.length)
                            return this.uiDialog.removeClass("ui-dialog-buttons"),
                            void 0;
                        t.each(buttons, (function(i, props) {
                            var n, s;
                            props = t.isFunction(props) ? {
                                click: props,
                                text: i
                            } : props,
                            props = t.extend({
                                type: "button"
                            }, props),
                            n = props.click,
                            props.click = function() {
                                n.apply(e.element[0], arguments)
                            }
                            ,
                            s = {
                                icons: props.icons,
                                text: props.showText
                            },
                            delete props.icons,
                            delete props.showText,
                            t("<button></button>", props).button(s).appendTo(e.uiButtonSet)
                        }
                        )),
                        this.uiDialog.addClass("ui-dialog-buttons"),
                        this.uiDialogButtonPane.appendTo(this.uiDialog)
                    },
                    _makeDraggable: function() {
                        function e(t) {
                            return {
                                position: t.position,
                                offset: t.offset
                            }
                        }
                        var i = this
                          , n = this.options;
                        this.uiDialog.draggable({
                            cancel: ".ui-dialog-content, .ui-dialog-titlebar-close",
                            handle: ".ui-dialog-titlebar",
                            containment: "document",
                            start: function(n, s) {
                                t(this).addClass("ui-dialog-dragging"),
                                i._blockFrames(),
                                i._trigger("dragStart", n, e(s))
                            },
                            drag: function(t, n) {
                                i._trigger("drag", t, e(n))
                            },
                            stop: function(s, o) {
                                var a = o.offset.left - i.document.scrollLeft()
                                  , l = o.offset.top - i.document.scrollTop();
                                n.position = {
                                    my: "left top",
                                    at: "left" + (a >= 0 ? "+" : "") + a + " top" + (l >= 0 ? "+" : "") + l,
                                    of: i.window
                                },
                                t(this).removeClass("ui-dialog-dragging"),
                                i._unblockFrames(),
                                i._trigger("dragStop", s, e(o))
                            }
                        })
                    },
                    _makeResizable: function() {
                        function e(t) {
                            return {
                                originalPosition: t.originalPosition,
                                originalSize: t.originalSize,
                                position: t.position,
                                size: t.size
                            }
                        }
                        var i = this
                          , n = this.options
                          , s = n.resizable
                          , position = this.uiDialog.css("position")
                          , o = "string" == typeof s ? s : "n,e,s,w,se,sw,ne,nw";
                        this.uiDialog.resizable({
                            cancel: ".ui-dialog-content",
                            containment: "document",
                            alsoResize: this.element,
                            maxWidth: n.maxWidth,
                            maxHeight: n.maxHeight,
                            minWidth: n.minWidth,
                            minHeight: this._minHeight(),
                            handles: o,
                            start: function(n, s) {
                                t(this).addClass("ui-dialog-resizing"),
                                i._blockFrames(),
                                i._trigger("resizeStart", n, e(s))
                            },
                            resize: function(t, n) {
                                i._trigger("resize", t, e(n))
                            },
                            stop: function(s, o) {
                                var a = i.uiDialog.offset()
                                  , l = a.left - i.document.scrollLeft()
                                  , h = a.top - i.document.scrollTop();
                                n.height = i.uiDialog.height(),
                                n.width = i.uiDialog.width(),
                                n.position = {
                                    my: "left top",
                                    at: "left" + (l >= 0 ? "+" : "") + l + " top" + (h >= 0 ? "+" : "") + h,
                                    of: i.window
                                },
                                t(this).removeClass("ui-dialog-resizing"),
                                i._unblockFrames(),
                                i._trigger("resizeStop", s, e(o))
                            }
                        }).css("position", position)
                    },
                    _trackFocus: function() {
                        this._on(this.widget(), {
                            focusin: function(e) {
                                this._makeFocusTarget(),
                                this._focusedElement = t(e.target)
                            }
                        })
                    },
                    _makeFocusTarget: function() {
                        this._untrackInstance(),
                        this._trackingInstances().unshift(this)
                    },
                    _untrackInstance: function() {
                        var e = this._trackingInstances()
                          , i = t.inArray(this, e);
                        -1 !== i && e.splice(i, 1)
                    },
                    _trackingInstances: function() {
                        var t = this.document.data("ui-dialog-instances");
                        return t || (t = [],
                        this.document.data("ui-dialog-instances", t)),
                        t
                    },
                    _minHeight: function() {
                        var t = this.options;
                        return "auto" === t.height ? t.minHeight : Math.min(t.minHeight, t.height)
                    },
                    _position: function() {
                        var t = this.uiDialog.is(":visible");
                        t || this.uiDialog.show(),
                        this.uiDialog.position(this.options.position),
                        t || this.uiDialog.hide()
                    },
                    _setOptions: function(e) {
                        var i = this
                          , n = false
                          , s = {};
                        t.each(e, (function(t, e) {
                            i._setOption(t, e),
                            t in i.sizeRelatedOptions && (n = true),
                            t in i.resizableRelatedOptions && (s[t] = e)
                        }
                        )),
                        n && (this._size(),
                        this._position()),
                        this.uiDialog.is(":data(ui-resizable)") && this.uiDialog.resizable("option", s)
                    },
                    _setOption: function(t, e) {
                        var i, n, s = this.uiDialog;
                        "dialogClass" === t && s.removeClass(this.options.dialogClass).addClass(e),
                        "disabled" !== t && (this._super(t, e),
                        "appendTo" === t && this.uiDialog.appendTo(this._appendTo()),
                        "buttons" === t && this._createButtons(),
                        "closeText" === t && this.uiDialogTitlebarClose.button({
                            label: "" + e
                        }),
                        "draggable" === t && ((i = s.is(":data(ui-draggable)")) && !e && s.draggable("destroy"),
                        !i && e && this._makeDraggable()),
                        "position" === t && this._position(),
                        "resizable" === t && ((n = s.is(":data(ui-resizable)")) && !e && s.resizable("destroy"),
                        n && "string" == typeof e && s.resizable("option", "handles", e),
                        n || false === e || this._makeResizable()),
                        "title" === t && this._title(this.uiDialogTitlebar.find(".ui-dialog-title")))
                    },
                    _size: function() {
                        var t, e, i, n = this.options;
                        this.element.show().css({
                            width: "auto",
                            minHeight: 0,
                            maxHeight: "none",
                            height: 0
                        }),
                        n.minWidth > n.width && (n.width = n.minWidth),
                        t = this.uiDialog.css({
                            height: "auto",
                            width: n.width
                        }).outerHeight(),
                        e = Math.max(0, n.minHeight - t),
                        i = "number" == typeof n.maxHeight ? Math.max(0, n.maxHeight - t) : "none",
                        "auto" === n.height ? this.element.css({
                            minHeight: e,
                            maxHeight: i,
                            height: "auto"
                        }) : this.element.height(Math.max(0, n.height - t)),
                        this.uiDialog.is(":data(ui-resizable)") && this.uiDialog.resizable("option", "minHeight", this._minHeight())
                    },
                    _blockFrames: function() {
                        this.iframeBlocks = this.document.find("iframe").map((function() {
                            var e = t(this);
                            return t("<div>").css({
                                position: "absolute",
                                width: e.outerWidth(),
                                height: e.outerHeight()
                            }).appendTo(e.parent()).offset(e.offset())[0]
                        }
                        ))
                    },
                    _unblockFrames: function() {
                        this.iframeBlocks && (this.iframeBlocks.remove(),
                        delete this.iframeBlocks)
                    },
                    _allowInteraction: function(e) {
                        return !!t(e.target).closest(".ui-dialog").length || !!t(e.target).closest(".ui-datepicker").length
                    },
                    _createOverlay: function() {
                        if (this.options.modal) {
                            var e = true;
                            this._delay((function() {
                                e = false
                            }
                            )),
                            this.document.data("ui-dialog-overlays") || this._on(this.document, {
                                focusin: function(t) {
                                    e || this._allowInteraction(t) || (t.preventDefault(),
                                    this._trackingInstances()[0]._focusTabbable())
                                }
                            }),
                            this.overlay = t("<div>").addClass("ui-widget-overlay ui-front").appendTo(this._appendTo()),
                            this._on(this.overlay, {
                                mousedown: "_keepFocus"
                            }),
                            this.document.data("ui-dialog-overlays", (this.document.data("ui-dialog-overlays") || 0) + 1)
                        }
                    },
                    _destroyOverlay: function() {
                        if (this.options.modal && this.overlay) {
                            var t = this.document.data("ui-dialog-overlays") - 1;
                            t ? this.document.data("ui-dialog-overlays", t) : this.document.unbind("focusin").removeData("ui-dialog-overlays"),
                            this.overlay.remove(),
                            this.overlay = null
                        }
                    }
                });
                /*!
 * jQuery UI Dialog 1.11.4
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/dialog/
 */
                /*!
 * jQuery UI Droppable 1.11.4
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/droppable/
 */
                t.widget("ui.droppable", {
                    version: "1.11.4",
                    widgetEventPrefix: "drop",
                    options: {
                        accept: "*",
                        activeClass: false,
                        addClasses: true,
                        greedy: false,
                        hoverClass: false,
                        scope: "default",
                        tolerance: "intersect",
                        activate: null,
                        deactivate: null,
                        drop: null,
                        out: null,
                        over: null
                    },
                    _create: function() {
                        var e, i = this.options, n = i.accept;
                        this.isover = false,
                        this.isout = true,
                        this.accept = t.isFunction(n) ? n : function(d) {
                            return d.is(n)
                        }
                        ,
                        this.proportions = function() {
                            if (!arguments.length)
                                return e || (e = {
                                    width: this.element[0].offsetWidth,
                                    height: this.element[0].offsetHeight
                                });
                            e = arguments[0]
                        }
                        ,
                        this._addToManager(i.scope),
                        i.addClasses && this.element.addClass("ui-droppable")
                    },
                    _addToManager: function(e) {
                        t.ui.ddmanager.droppables[e] = t.ui.ddmanager.droppables[e] || [],
                        t.ui.ddmanager.droppables[e].push(this)
                    },
                    _splice: function(t) {
                        for (var e = 0; e < t.length; e++)
                            t[e] === this && t.splice(e, 1)
                    },
                    _destroy: function() {
                        var e = t.ui.ddmanager.droppables[this.options.scope];
                        this._splice(e),
                        this.element.removeClass("ui-droppable ui-droppable-disabled")
                    },
                    _setOption: function(e, i) {
                        if ("accept" === e)
                            this.accept = t.isFunction(i) ? i : function(d) {
                                return d.is(i)
                            }
                            ;
                        else if ("scope" === e) {
                            var n = t.ui.ddmanager.droppables[this.options.scope];
                            this._splice(n),
                            this._addToManager(i)
                        }
                        this._super(e, i)
                    },
                    _activate: function(e) {
                        var draggable = t.ui.ddmanager.current;
                        this.options.activeClass && this.element.addClass(this.options.activeClass),
                        draggable && this._trigger("activate", e, this.ui(draggable))
                    },
                    _deactivate: function(e) {
                        var draggable = t.ui.ddmanager.current;
                        this.options.activeClass && this.element.removeClass(this.options.activeClass),
                        draggable && this._trigger("deactivate", e, this.ui(draggable))
                    },
                    _over: function(e) {
                        var draggable = t.ui.ddmanager.current;
                        draggable && (draggable.currentItem || draggable.element)[0] !== this.element[0] && this.accept.call(this.element[0], draggable.currentItem || draggable.element) && (this.options.hoverClass && this.element.addClass(this.options.hoverClass),
                        this._trigger("over", e, this.ui(draggable)))
                    },
                    _out: function(e) {
                        var draggable = t.ui.ddmanager.current;
                        draggable && (draggable.currentItem || draggable.element)[0] !== this.element[0] && this.accept.call(this.element[0], draggable.currentItem || draggable.element) && (this.options.hoverClass && this.element.removeClass(this.options.hoverClass),
                        this._trigger("out", e, this.ui(draggable)))
                    },
                    _drop: function(e, custom) {
                        var draggable = custom || t.ui.ddmanager.current
                          , i = false;
                        return !(!draggable || (draggable.currentItem || draggable.element)[0] === this.element[0]) && (this.element.find(":data(ui-droppable)").not(".ui-draggable-dragging").each((function() {
                            var n = t(this).droppable("instance");
                            if (n.options.greedy && !n.options.disabled && n.options.scope === draggable.options.scope && n.accept.call(n.element[0], draggable.currentItem || draggable.element) && t.ui.intersect(draggable, t.extend(n, {
                                offset: n.element.offset()
                            }), n.options.tolerance, e))
                                return i = true,
                                false
                        }
                        )),
                        !i && !!this.accept.call(this.element[0], draggable.currentItem || draggable.element) && (this.options.activeClass && this.element.removeClass(this.options.activeClass),
                        this.options.hoverClass && this.element.removeClass(this.options.hoverClass),
                        this._trigger("drop", e, this.ui(draggable)),
                        this.element))
                    },
                    ui: function(t) {
                        return {
                            draggable: t.currentItem || t.element,
                            helper: t.helper,
                            position: t.position,
                            offset: t.positionAbs
                        }
                    }
                }),
                t.ui.intersect = function() {
                    function t(t, e, size) {
                        return t >= e && t < e + size
                    }
                    return function(draggable, e, i, n) {
                        if (!e.offset)
                            return false;
                        var s = (draggable.positionAbs || draggable.position.absolute).left + draggable.margins.left
                          , o = (draggable.positionAbs || draggable.position.absolute).top + draggable.margins.top
                          , a = s + draggable.helperProportions.width
                          , l = o + draggable.helperProportions.height
                          , h = e.offset.left
                          , u = e.offset.top
                          , r = h + e.proportions().width
                          , c = u + e.proportions().height;
                        switch (i) {
                        case "fit":
                            return h <= s && a <= r && u <= o && l <= c;
                        case "intersect":
                            return h < s + draggable.helperProportions.width / 2 && a - draggable.helperProportions.width / 2 < r && u < o + draggable.helperProportions.height / 2 && l - draggable.helperProportions.height / 2 < c;
                        case "pointer":
                            return t(n.pageY, u, e.proportions().height) && t(n.pageX, h, e.proportions().width);
                        case "touch":
                            return (o >= u && o <= c || l >= u && l <= c || o < u && l > c) && (s >= h && s <= r || a >= h && a <= r || s < h && a > r);
                        default:
                            return false
                        }
                    }
                }(),
                t.ui.ddmanager = {
                    current: null,
                    droppables: {
                        default: []
                    },
                    prepareOffsets: function(e, i) {
                        var n, s, o = t.ui.ddmanager.droppables[e.options.scope] || [], type = i ? i.type : null, list = (e.currentItem || e.element).find(":data(ui-droppable)").addBack();
                        t: for (n = 0; n < o.length; n++)
                            if (!(o[n].options.disabled || e && !o[n].accept.call(o[n].element[0], e.currentItem || e.element))) {
                                for (s = 0; s < list.length; s++)
                                    if (list[s] === o[n].element[0]) {
                                        o[n].proportions().height = 0;
                                        continue t
                                    }
                                o[n].visible = "none" !== o[n].element.css("display"),
                                o[n].visible && ("mousedown" === type && o[n]._activate.call(o[n], i),
                                o[n].offset = o[n].element.offset(),
                                o[n].proportions({
                                    width: o[n].element[0].offsetWidth,
                                    height: o[n].element[0].offsetHeight
                                }))
                            }
                    },
                    drop: function(draggable, e) {
                        var i = false;
                        return t.each((t.ui.ddmanager.droppables[draggable.options.scope] || []).slice(), (function() {
                            this.options && (!this.options.disabled && this.visible && t.ui.intersect(draggable, this, this.options.tolerance, e) && (i = this._drop.call(this, e) || i),
                            !this.options.disabled && this.visible && this.accept.call(this.element[0], draggable.currentItem || draggable.element) && (this.isout = true,
                            this.isover = false,
                            this._deactivate.call(this, e)))
                        }
                        )),
                        i
                    },
                    dragStart: function(draggable, e) {
                        draggable.element.parentsUntil("body").bind("scroll.droppable", (function() {
                            draggable.options.refreshPositions || t.ui.ddmanager.prepareOffsets(draggable, e)
                        }
                        ))
                    },
                    drag: function(draggable, e) {
                        draggable.options.refreshPositions && t.ui.ddmanager.prepareOffsets(draggable, e),
                        t.each(t.ui.ddmanager.droppables[draggable.options.scope] || [], (function() {
                            if (!this.options.disabled && !this.greedyChild && this.visible) {
                                var i, n, s, o = t.ui.intersect(draggable, this, this.options.tolerance, e), a = !o && this.isover ? "isout" : o && !this.isover ? "isover" : null;
                                a && (this.options.greedy && (n = this.options.scope,
                                (s = this.element.parents(":data(ui-droppable)").filter((function() {
                                    return t(this).droppable("instance").options.scope === n
                                }
                                ))).length && ((i = t(s[0]).droppable("instance")).greedyChild = "isover" === a)),
                                i && "isover" === a && (i.isover = false,
                                i.isout = true,
                                i._out.call(i, e)),
                                this[a] = true,
                                this["isout" === a ? "isover" : "isout"] = false,
                                this["isover" === a ? "_over" : "_out"].call(this, e),
                                i && "isout" === a && (i.isout = false,
                                i.isover = true,
                                i._over.call(i, e)))
                            }
                        }
                        ))
                    },
                    dragStop: function(draggable, e) {
                        draggable.element.parentsUntil("body").unbind("scroll.droppable"),
                        draggable.options.refreshPositions || t.ui.ddmanager.prepareOffsets(draggable, e)
                    }
                };
                var S = t.ui.droppable, E = "ui-effects-", I = t, P;
                /*!
 * jQuery UI Effects 1.11.4
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/category/effects-core/
 */
                t.effects = {
                    effect: {}
                },
                /*!
 * jQuery Color Animations v2.1.2
 * https://github.com/jquery/jquery-color
 *
 * Copyright 2014 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * Date: Wed Jan 16 08:47:09 2013 -0600
 */
                function(t, e) {
                    function i(t, e, i) {
                        var type = propTypes[e.type] || {};
                        return null == t ? i || !e.def ? null : e.def : (t = type.floor ? ~~t : parseFloat(t),
                        isNaN(t) ? e.def : type.mod ? (t + type.mod) % type.mod : 0 > t ? 0 : type.max < t ? type.max : t)
                    }
                    function n(e) {
                        var i = color()
                          , n = i._rgba = [];
                        return e = e.toLowerCase(),
                        p(l, (function(t, s) {
                            var o, a = s.re.exec(e), l = a && s.parse(a), u = s.space || "rgba";
                            if (l)
                                return o = i[u](l),
                                i[h[u].cache] = o[h[u].cache],
                                n = i._rgba = o._rgba,
                                false
                        }
                        )),
                        n.length ? ("0,0,0,0" === n.join() && t.extend(n, colors.transparent),
                        i) : colors[e]
                    }
                    function s(t, q, e) {
                        return 6 * (e = (e + 1) % 1) < 1 ? t + (q - t) * e * 6 : 2 * e < 1 ? q : 3 * e < 2 ? t + (q - t) * (2 / 3 - e) * 6 : t
                    }
                    var o = "backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor", a = /^([\-+])=\s*(\d+\.?\d*)/, l = [{
                        re: /rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
                        parse: function(t) {
                            return [t[1], t[2], t[3], t[4]]
                        }
                    }, {
                        re: /rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
                        parse: function(t) {
                            return [2.55 * t[1], 2.55 * t[2], 2.55 * t[3], t[4]]
                        }
                    }, {
                        re: /#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,
                        parse: function(t) {
                            return [parseInt(t[1], 16), parseInt(t[2], 16), parseInt(t[3], 16)]
                        }
                    }, {
                        re: /#([a-f0-9])([a-f0-9])([a-f0-9])/,
                        parse: function(t) {
                            return [parseInt(t[1] + t[1], 16), parseInt(t[2] + t[2], 16), parseInt(t[3] + t[3], 16)]
                        }
                    }, {
                        re: /hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
                        space: "hsla",
                        parse: function(t) {
                            return [t[1], t[2] / 100, t[3] / 100, t[4]]
                        }
                    }], color = t.Color = function(color, e, i, n) {
                        return new t.Color.fn.parse(color,e,i,n)
                    }
                    , h = {
                        rgba: {
                            props: {
                                red: {
                                    idx: 0,
                                    type: "byte"
                                },
                                green: {
                                    idx: 1,
                                    type: "byte"
                                },
                                blue: {
                                    idx: 2,
                                    type: "byte"
                                }
                            }
                        },
                        hsla: {
                            props: {
                                hue: {
                                    idx: 0,
                                    type: "degrees"
                                },
                                saturation: {
                                    idx: 1,
                                    type: "percent"
                                },
                                lightness: {
                                    idx: 2,
                                    type: "percent"
                                }
                            }
                        }
                    }, propTypes = {
                        byte: {
                            floor: true,
                            max: 255
                        },
                        percent: {
                            max: 1
                        },
                        degrees: {
                            mod: 360,
                            floor: true
                        }
                    }, u = color.support = {}, c = t("<p>")[0], colors, p = t.each;
                    c.style.cssText = "background-color:rgba(1,1,1,.5)",
                    u.rgba = c.style.backgroundColor.indexOf("rgba") > -1,
                    p(h, (function(t, e) {
                        e.cache = "_" + t,
                        e.props.alpha = {
                            idx: 3,
                            type: "percent",
                            def: 1
                        }
                    }
                    )),
                    color.fn = t.extend(color.prototype, {
                        parse: function(s, o, a, l) {
                            if (s === e)
                                return this._rgba = [null, null, null, null],
                                this;
                            (s.jquery || s.nodeType) && (s = t(s).css(o),
                            o = e);
                            var u = this
                              , type = t.type(s)
                              , c = this._rgba = [];
                            return o !== e && (s = [s, o, a, l],
                            type = "array"),
                            "string" === type ? this.parse(n(s) || colors._default) : "array" === type ? (p(h.rgba.props, (function(t, e) {
                                c[e.idx] = i(s[e.idx], e)
                            }
                            )),
                            this) : "object" === type ? (p(h, s instanceof color ? function(t, e) {
                                s[e.cache] && (u[e.cache] = s[e.cache].slice())
                            }
                            : function(e, n) {
                                var cache = n.cache;
                                p(n.props, (function(t, e) {
                                    if (!u[cache] && n.to) {
                                        if ("alpha" === t || null == s[t])
                                            return;
                                        u[cache] = n.to(u._rgba)
                                    }
                                    u[cache][e.idx] = i(s[t], e, true)
                                }
                                )),
                                u[cache] && t.inArray(null, u[cache].slice(0, 3)) < 0 && (u[cache][3] = 1,
                                n.from && (u._rgba = n.from(u[cache])))
                            }
                            ),
                            this) : void 0
                        },
                        is: function(compare) {
                            var t = color(compare)
                              , e = true
                              , i = this;
                            return p(h, (function(n, s) {
                                var o, a = t[s.cache];
                                return a && (o = i[s.cache] || s.to && s.to(i._rgba) || [],
                                p(s.props, (function(t, i) {
                                    if (null != a[i.idx])
                                        return e = a[i.idx] === o[i.idx]
                                }
                                ))),
                                e
                            }
                            )),
                            e
                        },
                        _space: function() {
                            var t = []
                              , e = this;
                            return p(h, (function(i, n) {
                                e[n.cache] && t.push(i)
                            }
                            )),
                            t.pop()
                        },
                        transition: function(t, e) {
                            var n = color(t)
                              , s = n._space()
                              , o = h[s]
                              , a = 0 === this.alpha() ? color("transparent") : this
                              , l = a[o.cache] || o.to(a._rgba)
                              , u = l.slice();
                            return n = n[o.cache],
                            p(o.props, (function(t, s) {
                                var index = s.idx
                                  , o = l[index]
                                  , a = n[index]
                                  , type = propTypes[s.type] || {};
                                null !== a && (null === o ? u[index] = a : (type.mod && (a - o > type.mod / 2 ? o += type.mod : o - a > type.mod / 2 && (o -= type.mod)),
                                u[index] = i((a - o) * e + o, s)))
                            }
                            )),
                            this[s](u)
                        },
                        blend: function(e) {
                            if (1 === this._rgba[3])
                                return this;
                            var i = this._rgba.slice()
                              , n = i.pop()
                              , s = color(e)._rgba;
                            return color(t.map(i, (function(t, e) {
                                return (1 - n) * s[e] + n * t
                            }
                            )))
                        },
                        toRgbaString: function() {
                            var e = "rgba("
                              , i = t.map(this._rgba, (function(t, e) {
                                return null == t ? e > 2 ? 1 : 0 : t
                            }
                            ));
                            return 1 === i[3] && (i.pop(),
                            e = "rgb("),
                            e + i.join() + ")"
                        },
                        toHslaString: function() {
                            var e = "hsla("
                              , i = t.map(this.hsla(), (function(t, e) {
                                return null == t && (t = e > 2 ? 1 : 0),
                                e && e < 3 && (t = Math.round(100 * t) + "%"),
                                t
                            }
                            ));
                            return 1 === i[3] && (i.pop(),
                            e = "hsl("),
                            e + i.join() + ")"
                        },
                        toHexString: function(e) {
                            var i = this._rgba.slice()
                              , n = i.pop();
                            return e && i.push(~~(255 * n)),
                            "#" + t.map(i, (function(t) {
                                return 1 === (t = (t || 0).toString(16)).length ? "0" + t : t
                            }
                            )).join("")
                        },
                        toString: function() {
                            return 0 === this._rgba[3] ? "transparent" : this.toRgbaString()
                        }
                    }),
                    color.fn.parse.prototype = color.fn,
                    h.hsla.to = function(t) {
                        if (null == t[0] || null == t[1] || null == t[2])
                            return [null, null, null, t[3]];
                        var r = t[0] / 255, e = t[1] / 255, i = t[2] / 255, n = t[3], s = Math.max(r, e, i), o = Math.min(r, e, i), diff = s - o, add = s + o, a = .5 * add, l, h;
                        return l = o === s ? 0 : r === s ? 60 * (e - i) / diff + 360 : e === s ? 60 * (i - r) / diff + 120 : 60 * (r - e) / diff + 240,
                        h = 0 === diff ? 0 : a <= .5 ? diff / add : diff / (2 - add),
                        [Math.round(l) % 360, h, a, null == n ? 1 : n]
                    }
                    ,
                    h.hsla.from = function(t) {
                        if (null == t[0] || null == t[1] || null == t[2])
                            return [null, null, null, t[3]];
                        var e = t[0] / 360
                          , i = t[1]
                          , n = t[2]
                          , o = t[3]
                          , q = n <= .5 ? n * (1 + i) : n + i - n * i
                          , a = 2 * n - q;
                        return [Math.round(255 * s(a, q, e + 1 / 3)), Math.round(255 * s(a, q, e)), Math.round(255 * s(a, q, e - 1 / 3)), o]
                    }
                    ,
                    p(h, (function(n, s) {
                        var props = s.props
                          , cache = s.cache
                          , o = s.to
                          , l = s.from;
                        color.fn[n] = function(n) {
                            if (o && !this[cache] && (this[cache] = o(this._rgba)),
                            n === e)
                                return this[cache].slice();
                            var s, type = t.type(n), a = "array" === type || "object" === type ? n : arguments, h = this[cache].slice();
                            return p(props, (function(t, e) {
                                var n = a["object" === type ? t : e.idx];
                                null == n && (n = h[e.idx]),
                                h[e.idx] = i(n, e)
                            }
                            )),
                            l ? ((s = color(l(h)))[cache] = h,
                            s) : color(h)
                        }
                        ,
                        p(props, (function(e, i) {
                            color.fn[e] || (color.fn[e] = function(s) {
                                var o = t.type(s), l = "alpha" === e ? this._hsla ? "hsla" : "rgba" : n, h = this[l](), u = h[i.idx], c;
                                return "undefined" === o ? u : ("function" === o && (s = s.call(this, u),
                                o = t.type(s)),
                                null == s && i.empty ? this : ("string" === o && (c = a.exec(s)) && (s = u + parseFloat(c[2]) * ("+" === c[1] ? 1 : -1)),
                                h[i.idx] = s,
                                this[l](h)))
                            }
                            )
                        }
                        ))
                    }
                    )),
                    color.hook = function(hook) {
                        var e = hook.split(" ");
                        p(e, (function(e, hook) {
                            t.cssHooks[hook] = {
                                set: function(e, i) {
                                    var s, o, a = "";
                                    if ("transparent" !== i && ("string" !== t.type(i) || (s = n(i)))) {
                                        if (i = color(s || i),
                                        !u.rgba && 1 !== i._rgba[3]) {
                                            for (o = "backgroundColor" === hook ? e.parentNode : e; ("" === a || "transparent" === a) && o && o.style; )
                                                try {
                                                    a = t.css(o, "backgroundColor"),
                                                    o = o.parentNode
                                                } catch (t) {}
                                            i = i.blend(a && "transparent" !== a ? a : "_default")
                                        }
                                        i = i.toRgbaString()
                                    }
                                    try {
                                        e.style[hook] = i
                                    } catch (t) {}
                                }
                            },
                            t.fx.step[hook] = function(e) {
                                e.colorInit || (e.start = color(e.elem, hook),
                                e.end = color(e.end),
                                e.colorInit = true),
                                t.cssHooks[hook].set(e.elem, e.start.transition(e.end, e.pos))
                            }
                        }
                        ))
                    }
                    ,
                    color.hook(o),
                    t.cssHooks.borderColor = {
                        expand: function(t) {
                            var expanded = {};
                            return p(["Top", "Right", "Bottom", "Left"], (function(e, i) {
                                expanded["border" + i + "Color"] = t
                            }
                            )),
                            expanded
                        }
                    },
                    colors = t.Color.names = {
                        aqua: "#00ffff",
                        black: "#000000",
                        blue: "#0000ff",
                        fuchsia: "#ff00ff",
                        gray: "#808080",
                        green: "#008000",
                        lime: "#00ff00",
                        maroon: "#800000",
                        navy: "#000080",
                        olive: "#808000",
                        purple: "#800080",
                        red: "#ff0000",
                        silver: "#c0c0c0",
                        teal: "#008080",
                        white: "#ffffff",
                        yellow: "#ffff00",
                        transparent: [null, null, null, 0],
                        _default: "#ffffff"
                    }
                }(I),
                function() {
                    function e(e) {
                        var i, n, style = e.ownerDocument.defaultView ? e.ownerDocument.defaultView.getComputedStyle(e, null) : e.currentStyle, s = {};
                        if (style && style.length && style[0] && style[style[0]])
                            for (n = style.length; n--; )
                                "string" == typeof style[i = style[n]] && (s[t.camelCase(i)] = style[i]);
                        else
                            for (i in style)
                                "string" == typeof style[i] && (s[i] = style[i]);
                        return s
                    }
                    function i(e, i) {
                        var diff = {}, n, o;
                        for (n in i)
                            o = i[n],
                            e[n] !== o && (s[n] || !t.fx.step[n] && isNaN(parseFloat(o)) || (diff[n] = o));
                        return diff
                    }
                    var n = ["add", "remove", "toggle"]
                      , s = {
                        border: 1,
                        borderBottom: 1,
                        borderColor: 1,
                        borderLeft: 1,
                        borderRight: 1,
                        borderTop: 1,
                        borderWidth: 1,
                        margin: 1,
                        padding: 1
                    };
                    t.each(["borderLeftStyle", "borderRightStyle", "borderBottomStyle", "borderTopStyle"], (function(e, i) {
                        t.fx.step[i] = function(t) {
                            ("none" !== t.end && !t.setAttr || 1 === t.pos && !t.setAttr) && (I.style(t.elem, i, t.end),
                            t.setAttr = true)
                        }
                    }
                    )),
                    t.fn.addBack || (t.fn.addBack = function(selector) {
                        return this.add(null == selector ? this.prevObject : this.prevObject.filter(selector))
                    }
                    ),
                    t.effects.animateClass = function(s, o, a, l) {
                        var h = t.speed(o, a, l);
                        return this.queue((function() {
                            var o = t(this), a = o.attr("class") || "", l, u = h.children ? o.find("*").addBack() : o;
                            u = u.map((function() {
                                var el;
                                return {
                                    el: t(this),
                                    start: e(this)
                                }
                            }
                            )),
                            (l = function() {
                                t.each(n, (function(t, e) {
                                    s[e] && o[e + "Class"](s[e])
                                }
                                ))
                            }
                            )(),
                            u = u.map((function() {
                                return this.end = e(this.el[0]),
                                this.diff = i(this.start, this.end),
                                this
                            }
                            )),
                            o.attr("class", a),
                            u = u.map((function() {
                                var e = this
                                  , i = t.Deferred()
                                  , n = t.extend({}, h, {
                                    queue: false,
                                    complete: function() {
                                        i.resolve(e)
                                    }
                                });
                                return this.el.animate(this.diff, n),
                                i.promise()
                            }
                            )),
                            t.when.apply(t, u.get()).done((function() {
                                l(),
                                t.each(arguments, (function() {
                                    var el = this.el;
                                    t.each(this.diff, (function(t) {
                                        el.css(t, "")
                                    }
                                    ))
                                }
                                )),
                                h.complete.call(o[0])
                            }
                            ))
                        }
                        ))
                    }
                    ,
                    t.fn.extend({
                        addClass: function(e) {
                            return function(i, n, s, o) {
                                return n ? t.effects.animateClass.call(this, {
                                    add: i
                                }, n, s, o) : e.apply(this, arguments)
                            }
                        }(t.fn.addClass),
                        removeClass: function(e) {
                            return function(i, n, s, o) {
                                return arguments.length > 1 ? t.effects.animateClass.call(this, {
                                    remove: i
                                }, n, s, o) : e.apply(this, arguments)
                            }
                        }(t.fn.removeClass),
                        toggleClass: function(e) {
                            return function(i, n, s, o, a) {
                                return "boolean" == typeof n || void 0 === n ? s ? t.effects.animateClass.call(this, n ? {
                                    add: i
                                } : {
                                    remove: i
                                }, s, o, a) : e.apply(this, arguments) : t.effects.animateClass.call(this, {
                                    toggle: i
                                }, n, s, o)
                            }
                        }(t.fn.toggleClass),
                        switchClass: function(remove, add, e, i, n) {
                            return t.effects.animateClass.call(this, {
                                add: add,
                                remove: remove
                            }, e, i, n)
                        }
                    })
                }(),
                function() {
                    function e(e, i, n, s) {
                        return t.isPlainObject(e) && (i = e,
                        e = e.effect),
                        e = {
                            effect: e
                        },
                        null == i && (i = {}),
                        t.isFunction(i) && (s = i,
                        n = null,
                        i = {}),
                        ("number" == typeof i || t.fx.speeds[i]) && (s = n,
                        n = i,
                        i = {}),
                        t.isFunction(n) && (s = n,
                        n = null),
                        i && t.extend(e, i),
                        n = n || i.duration,
                        e.duration = t.fx.off ? 0 : "number" == typeof n ? n : n in t.fx.speeds ? t.fx.speeds[n] : t.fx.speeds._default,
                        e.complete = s || i.complete,
                        e
                    }
                    function i(e) {
                        return !(e && "number" != typeof e && !t.fx.speeds[e]) || "string" == typeof e && !t.effects.effect[e] || !!t.isFunction(e) || "object" == typeof e && !e.effect
                    }
                    t.extend(t.effects, {
                        version: "1.11.4",
                        save: function(t, e) {
                            for (var i = 0; i < e.length; i++)
                                null !== e[i] && t.data(E + e[i], t[0].style[e[i]])
                        },
                        restore: function(t, e) {
                            var i, n;
                            for (n = 0; n < e.length; n++)
                                null !== e[n] && (void 0 === (i = t.data(E + e[n])) && (i = ""),
                                t.css(e[n], i))
                        },
                        setMode: function(el, t) {
                            return "toggle" === t && (t = el.is(":hidden") ? "show" : "hide"),
                            t
                        },
                        getBaseline: function(t, e) {
                            var i, n;
                            switch (t[0]) {
                            case "top":
                                i = 0;
                                break;
                            case "middle":
                                i = .5;
                                break;
                            case "bottom":
                                i = 1;
                                break;
                            default:
                                i = t[0] / e.height
                            }
                            switch (t[1]) {
                            case "left":
                                n = 0;
                                break;
                            case "center":
                                n = .5;
                                break;
                            case "right":
                                n = 1;
                                break;
                            default:
                                n = t[1] / e.width
                            }
                            return {
                                x: n,
                                y: i
                            }
                        },
                        createWrapper: function(e) {
                            if (e.parent().is(".ui-effects-wrapper"))
                                return e.parent();
                            var props = {
                                width: e.outerWidth(true),
                                height: e.outerHeight(true),
                                float: e.css("float")
                            }
                              , i = t("<div></div>").addClass("ui-effects-wrapper").css({
                                fontSize: "100%",
                                background: "transparent",
                                border: "none",
                                margin: 0,
                                padding: 0
                            })
                              , size = {
                                width: e.width(),
                                height: e.height()
                            }
                              , n = document.activeElement;
                            try {
                                n.id
                            } catch (t) {
                                n = document.body
                            }
                            return e.wrap(i),
                            (e[0] === n || t.contains(e[0], n)) && t(n).focus(),
                            i = e.parent(),
                            "static" === e.css("position") ? (i.css({
                                position: "relative"
                            }),
                            e.css({
                                position: "relative"
                            })) : (t.extend(props, {
                                position: e.css("position"),
                                zIndex: e.css("z-index")
                            }),
                            t.each(["top", "left", "bottom", "right"], (function(t, i) {
                                props[i] = e.css(i),
                                isNaN(parseInt(props[i], 10)) && (props[i] = "auto")
                            }
                            )),
                            e.css({
                                position: "relative",
                                top: 0,
                                left: 0,
                                right: "auto",
                                bottom: "auto"
                            })),
                            e.css(size),
                            i.css(props).show()
                        },
                        removeWrapper: function(e) {
                            var i = document.activeElement;
                            return e.parent().is(".ui-effects-wrapper") && (e.parent().replaceWith(e),
                            (e[0] === i || t.contains(e[0], i)) && t(i).focus()),
                            e
                        },
                        setTransition: function(e, list, factor, i) {
                            return i = i || {},
                            t.each(list, (function(t, n) {
                                var s = e.cssUnit(n);
                                s[0] > 0 && (i[n] = s[0] * factor + s[1])
                            }
                            )),
                            i
                        }
                    }),
                    t.fn.extend({
                        effect: function() {
                            function i(e) {
                                function i() {
                                    t.isFunction(o) && o.call(s[0]),
                                    t.isFunction(e) && e()
                                }
                                var s = t(this)
                                  , o = n.complete
                                  , l = n.mode;
                                (s.is(":hidden") ? "hide" === l : "show" === l) ? (s[l](),
                                i()) : a.call(s[0], n, i)
                            }
                            var n = e.apply(this, arguments)
                              , s = n.mode
                              , o = n.queue
                              , a = t.effects.effect[n.effect];
                            return t.fx.off || !a ? s ? this[s](n.duration, n.complete) : this.each((function() {
                                n.complete && n.complete.call(this)
                            }
                            )) : false === o ? this.each(i) : this.queue(o || "fx", i)
                        },
                        show: function(t) {
                            return function(n) {
                                if (i(n))
                                    return t.apply(this, arguments);
                                var s = e.apply(this, arguments);
                                return s.mode = "show",
                                this.effect.call(this, s)
                            }
                        }(t.fn.show),
                        hide: function(t) {
                            return function(n) {
                                if (i(n))
                                    return t.apply(this, arguments);
                                var s = e.apply(this, arguments);
                                return s.mode = "hide",
                                this.effect.call(this, s)
                            }
                        }(t.fn.hide),
                        toggle: function(t) {
                            return function(n) {
                                if (i(n) || "boolean" == typeof n)
                                    return t.apply(this, arguments);
                                var s = e.apply(this, arguments);
                                return s.mode = "toggle",
                                this.effect.call(this, s)
                            }
                        }(t.fn.toggle),
                        cssUnit: function(e) {
                            var style = this.css(e)
                              , i = [];
                            return t.each(["em", "px", "%", "pt"], (function(t, e) {
                                style.indexOf(e) > 0 && (i = [parseFloat(style), e])
                            }
                            )),
                            i
                        }
                    })
                }(),
                P = {},
                t.each(["Quad", "Cubic", "Quart", "Quint", "Expo"], (function(t, e) {
                    P[e] = function(e) {
                        return Math.pow(e, t + 2)
                    }
                }
                )),
                t.extend(P, {
                    Sine: function(t) {
                        return 1 - Math.cos(t * Math.PI / 2)
                    },
                    Circ: function(t) {
                        return 1 - Math.sqrt(1 - t * t)
                    },
                    Elastic: function(t) {
                        return 0 === t || 1 === t ? t : -Math.pow(2, 8 * (t - 1)) * Math.sin((80 * (t - 1) - 7.5) * Math.PI / 15)
                    },
                    Back: function(t) {
                        return t * t * (3 * t - 2)
                    },
                    Bounce: function(t) {
                        for (var e, i = 4; t < ((e = Math.pow(2, --i)) - 1) / 11; )
                            ;
                        return 1 / Math.pow(4, 3 - i) - 7.5625 * Math.pow((3 * e - 2) / 22 - t, 2)
                    }
                }),
                t.each(P, (function(e, i) {
                    t.easing["easeIn" + e] = i,
                    t.easing["easeOut" + e] = function(t) {
                        return 1 - i(1 - t)
                    }
                    ,
                    t.easing["easeInOut" + e] = function(t) {
                        return t < .5 ? i(2 * t) / 2 : 1 - i(-2 * t + 2) / 2
                    }
                }
                ));
                var F = t.effects, N = t.effects.effect.blind = function(e, i) {
                    var el = t(this), n = /up|down|vertical/, s = /up|left|vertical|horizontal/, props = ["position", "top", "bottom", "left", "right", "height", "width"], o = t.effects.setMode(el, e.mode || "hide"), a = e.direction || "up", l = n.test(a), h = l ? "height" : "width", u = l ? "top" : "left", c = s.test(a), animation = {}, show = "show" === o, p, f, m;
                    el.parent().is(".ui-effects-wrapper") ? t.effects.save(el.parent(), props) : t.effects.save(el, props),
                    el.show(),
                    f = (p = t.effects.createWrapper(el).css({
                        overflow: "hidden"
                    }))[h](),
                    m = parseFloat(p.css(u)) || 0,
                    animation[h] = show ? f : 0,
                    c || (el.css(l ? "bottom" : "right", 0).css(l ? "top" : "left", "auto").css({
                        position: "absolute"
                    }),
                    animation[u] = show ? m : f + m),
                    show && (p.css(h, 0),
                    c || p.css(u, m + f)),
                    p.animate(animation, {
                        duration: e.duration,
                        easing: e.easing,
                        queue: false,
                        complete: function() {
                            "hide" === o && el.hide(),
                            t.effects.restore(el, props),
                            t.effects.removeWrapper(el),
                            i()
                        }
                    })
                }
                , M = t.effects.effect.bounce = function(e, i) {
                    var el = t(this), props = ["position", "top", "bottom", "left", "right", "height", "width"], n = t.effects.setMode(el, e.mode || "effect"), s = "hide" === n, show = "show" === n, o = e.direction || "up", a = e.distance, l = e.times || 5, h = 2 * l + (show || s ? 1 : 0), u = e.duration / h, c = e.easing, p = "up" === o || "down" === o ? "top" : "left", f = "up" === o || "left" === o, m, g, v, b = el.queue(), y = b.length;
                    for ((show || s) && props.push("opacity"),
                    t.effects.save(el, props),
                    el.show(),
                    t.effects.createWrapper(el),
                    a || (a = el["top" === p ? "outerHeight" : "outerWidth"]() / 3),
                    show && ((v = {
                        opacity: 1
                    })[p] = 0,
                    el.css("opacity", 0).css(p, f ? 2 * -a : 2 * a).animate(v, u, c)),
                    s && (a /= Math.pow(2, l - 1)),
                    (v = {})[p] = 0,
                    m = 0; m < l; m++)
                        (g = {})[p] = (f ? "-=" : "+=") + a,
                        el.animate(g, u, c).animate(v, u, c),
                        a = s ? 2 * a : a / 2;
                    s && ((g = {
                        opacity: 0
                    })[p] = (f ? "-=" : "+=") + a,
                    el.animate(g, u, c)),
                    el.queue((function() {
                        s && el.hide(),
                        t.effects.restore(el, props),
                        t.effects.removeWrapper(el),
                        i()
                    }
                    )),
                    y > 1 && b.splice.apply(b, [1, 0].concat(b.splice(y, h + 1))),
                    el.dequeue()
                }
                , z = t.effects.effect.clip = function(e, i) {
                    var el = t(this), props = ["position", "top", "bottom", "left", "right", "height", "width"], n, show = "show" === t.effects.setMode(el, e.mode || "hide"), s, o = "vertical" === (e.direction || "vertical"), size = o ? "height" : "width", position = o ? "top" : "left", animation = {}, a, l, h;
                    t.effects.save(el, props),
                    el.show(),
                    a = t.effects.createWrapper(el).css({
                        overflow: "hidden"
                    }),
                    h = (l = "IMG" === el[0].tagName ? a : el)[size](),
                    show && (l.css(size, 0),
                    l.css(position, h / 2)),
                    animation[size] = show ? h : 0,
                    animation[position] = show ? 0 : h / 2,
                    l.animate(animation, {
                        queue: false,
                        duration: e.duration,
                        easing: e.easing,
                        complete: function() {
                            show || el.hide(),
                            t.effects.restore(el, props),
                            t.effects.removeWrapper(el),
                            i()
                        }
                    })
                }
                , H = t.effects.effect.drop = function(e, i) {
                    var el = t(this), props = ["position", "top", "bottom", "left", "right", "opacity", "height", "width"], n = t.effects.setMode(el, e.mode || "hide"), show = "show" === n, s = e.direction || "left", o = "up" === s || "down" === s ? "top" : "left", a = "up" === s || "left" === s ? "pos" : "neg", animation = {
                        opacity: show ? 1 : 0
                    }, l;
                    t.effects.save(el, props),
                    el.show(),
                    t.effects.createWrapper(el),
                    l = e.distance || el["top" === o ? "outerHeight" : "outerWidth"](true) / 2,
                    show && el.css("opacity", 0).css(o, "pos" === a ? -l : l),
                    animation[o] = (show ? "pos" === a ? "+=" : "-=" : "pos" === a ? "-=" : "+=") + l,
                    el.animate(animation, {
                        queue: false,
                        duration: e.duration,
                        easing: e.easing,
                        complete: function() {
                            "hide" === n && el.hide(),
                            t.effects.restore(el, props),
                            t.effects.removeWrapper(el),
                            i()
                        }
                    })
                }
                , O = t.effects.effect.explode = function(e, i) {
                    function n() {
                        p.push(this),
                        p.length === o * a && s()
                    }
                    function s() {
                        el.css({
                            visibility: "visible"
                        }),
                        t(p).remove(),
                        show || el.hide(),
                        i()
                    }
                    var o = e.pieces ? Math.round(Math.sqrt(e.pieces)) : 3, a = o, el = t(this), l, show = "show" === t.effects.setMode(el, e.mode || "hide"), h = el.show().css("visibility", "hidden").offset(), u = Math.ceil(el.outerWidth() / a), c = Math.ceil(el.outerHeight() / o), p = [], f, m, g, v, b, y;
                    for (f = 0; f < o; f++)
                        for (v = h.top + f * c,
                        y = f - (o - 1) / 2,
                        m = 0; m < a; m++)
                            g = h.left + m * u,
                            b = m - (a - 1) / 2,
                            el.clone().appendTo("body").wrap("<div></div>").css({
                                position: "absolute",
                                visibility: "visible",
                                left: -m * u,
                                top: -f * c
                            }).parent().addClass("ui-effects-explode").css({
                                position: "absolute",
                                overflow: "hidden",
                                width: u,
                                height: c,
                                left: g + (show ? b * u : 0),
                                top: v + (show ? y * c : 0),
                                opacity: show ? 0 : 1
                            }).animate({
                                left: g + (show ? 0 : b * u),
                                top: v + (show ? 0 : y * c),
                                opacity: show ? 1 : 0
                            }, e.duration || 500, e.easing, n)
                }
                , L = t.effects.effect.fade = function(e, i) {
                    var el = t(this)
                      , n = t.effects.setMode(el, e.mode || "toggle");
                    el.animate({
                        opacity: n
                    }, {
                        queue: false,
                        duration: e.duration,
                        easing: e.easing,
                        complete: i
                    })
                }
                , $ = t.effects.effect.fold = function(e, i) {
                    var el = t(this), props = ["position", "top", "bottom", "left", "right", "height", "width"], n = t.effects.setMode(el, e.mode || "hide"), show = "show" === n, s = "hide" === n, size = e.size || 15, o = /([0-9]+)%/.exec(size), a = !!e.horizFirst, l = show !== a, h = l ? ["width", "height"] : ["height", "width"], u = e.duration / 2, c, p, f = {}, m = {};
                    t.effects.save(el, props),
                    el.show(),
                    c = t.effects.createWrapper(el).css({
                        overflow: "hidden"
                    }),
                    p = l ? [c.width(), c.height()] : [c.height(), c.width()],
                    o && (size = parseInt(o[1], 10) / 100 * p[s ? 0 : 1]),
                    show && c.css(a ? {
                        height: 0,
                        width: size
                    } : {
                        height: size,
                        width: 0
                    }),
                    f[h[0]] = show ? p[0] : size,
                    m[h[1]] = show ? p[1] : 0,
                    c.animate(f, u, e.easing).animate(m, u, e.easing, (function() {
                        s && el.hide(),
                        t.effects.restore(el, props),
                        t.effects.removeWrapper(el),
                        i()
                    }
                    ))
                }
                , j = t.effects.effect.highlight = function(e, i) {
                    var n = t(this)
                      , props = ["backgroundImage", "backgroundColor", "opacity"]
                      , s = t.effects.setMode(n, e.mode || "show")
                      , animation = {
                        backgroundColor: n.css("backgroundColor")
                    };
                    "hide" === s && (animation.opacity = 0),
                    t.effects.save(n, props),
                    n.show().css({
                        backgroundImage: "none",
                        backgroundColor: e.color || "#ffff99"
                    }).animate(animation, {
                        queue: false,
                        duration: e.duration,
                        easing: e.easing,
                        complete: function() {
                            "hide" === s && n.hide(),
                            t.effects.restore(n, props),
                            i()
                        }
                    })
                }
                , W = t.effects.effect.size = function(e, i) {
                    var n, s, factor, el = t(this), o = ["position", "top", "bottom", "left", "right", "width", "height", "overflow", "opacity"], a = ["position", "top", "bottom", "left", "right", "overflow", "opacity"], l = ["width", "height", "overflow"], h = ["fontSize"], u = ["borderTopWidth", "borderBottomWidth", "paddingTop", "paddingBottom"], c = ["borderLeftWidth", "borderRightWidth", "paddingLeft", "paddingRight"], p = t.effects.setMode(el, e.mode || "effect"), f = e.restore || "effect" !== p, m = e.scale || "both", g = e.origin || ["middle", "center"], position = el.css("position"), props = f ? o : a, v = {
                        height: 0,
                        width: 0,
                        outerHeight: 0,
                        outerWidth: 0
                    };
                    "show" === p && el.show(),
                    n = {
                        height: el.height(),
                        width: el.width(),
                        outerHeight: el.outerHeight(),
                        outerWidth: el.outerWidth()
                    },
                    "toggle" === e.mode && "show" === p ? (el.from = e.to || v,
                    el.to = e.from || n) : (el.from = e.from || ("show" === p ? v : n),
                    el.to = e.to || ("hide" === p ? v : n)),
                    factor = {
                        from: {
                            y: el.from.height / n.height,
                            x: el.from.width / n.width
                        },
                        to: {
                            y: el.to.height / n.height,
                            x: el.to.width / n.width
                        }
                    },
                    "box" !== m && "both" !== m || (factor.from.y !== factor.to.y && (props = props.concat(u),
                    el.from = t.effects.setTransition(el, u, factor.from.y, el.from),
                    el.to = t.effects.setTransition(el, u, factor.to.y, el.to)),
                    factor.from.x !== factor.to.x && (props = props.concat(c),
                    el.from = t.effects.setTransition(el, c, factor.from.x, el.from),
                    el.to = t.effects.setTransition(el, c, factor.to.x, el.to))),
                    "content" !== m && "both" !== m || factor.from.y !== factor.to.y && (props = props.concat(h).concat(l),
                    el.from = t.effects.setTransition(el, h, factor.from.y, el.from),
                    el.to = t.effects.setTransition(el, h, factor.to.y, el.to)),
                    t.effects.save(el, props),
                    el.show(),
                    t.effects.createWrapper(el),
                    el.css("overflow", "hidden").css(el.from),
                    g && (s = t.effects.getBaseline(g, n),
                    el.from.top = (n.outerHeight - el.outerHeight()) * s.y,
                    el.from.left = (n.outerWidth - el.outerWidth()) * s.x,
                    el.to.top = (n.outerHeight - el.to.outerHeight) * s.y,
                    el.to.left = (n.outerWidth - el.to.outerWidth) * s.x),
                    el.css(el.from),
                    "content" !== m && "both" !== m || (u = u.concat(["marginTop", "marginBottom"]).concat(h),
                    c = c.concat(["marginLeft", "marginRight"]),
                    l = o.concat(u).concat(c),
                    el.find("*[width]").each((function() {
                        var i = t(this)
                          , n = i.height()
                          , s = i.width()
                          , o = i.outerHeight()
                          , a = i.outerWidth();
                        f && t.effects.save(i, l),
                        i.from = {
                            height: n * factor.from.y,
                            width: s * factor.from.x,
                            outerHeight: o * factor.from.y,
                            outerWidth: a * factor.from.x
                        },
                        i.to = {
                            height: n * factor.to.y,
                            width: s * factor.to.x,
                            outerHeight: n * factor.to.y,
                            outerWidth: s * factor.to.x
                        },
                        factor.from.y !== factor.to.y && (i.from = t.effects.setTransition(i, u, factor.from.y, i.from),
                        i.to = t.effects.setTransition(i, u, factor.to.y, i.to)),
                        factor.from.x !== factor.to.x && (i.from = t.effects.setTransition(i, c, factor.from.x, i.from),
                        i.to = t.effects.setTransition(i, c, factor.to.x, i.to)),
                        i.css(i.from),
                        i.animate(i.to, e.duration, e.easing, (function() {
                            f && t.effects.restore(i, l)
                        }
                        ))
                    }
                    ))),
                    el.animate(el.to, {
                        queue: false,
                        duration: e.duration,
                        easing: e.easing,
                        complete: function() {
                            0 === el.to.opacity && el.css("opacity", el.from.opacity),
                            "hide" === p && el.hide(),
                            t.effects.restore(el, props),
                            f || ("static" === position ? el.css({
                                position: "relative",
                                top: el.to.top,
                                left: el.to.left
                            }) : t.each(["top", "left"], (function(t, e) {
                                el.css(e, (function(e, i) {
                                    var n = parseInt(i, 10)
                                      , s = t ? el.to.left : el.to.top;
                                    return "auto" === i ? s + "px" : n + s + "px"
                                }
                                ))
                            }
                            ))),
                            t.effects.removeWrapper(el),
                            i()
                        }
                    })
                }
                , B = t.effects.effect.scale = function(e, i) {
                    var el = t(this)
                      , n = t.extend(true, {}, e)
                      , s = t.effects.setMode(el, e.mode || "effect")
                      , o = parseInt(e.percent, 10) || (0 === parseInt(e.percent, 10) || "hide" === s ? 0 : 100)
                      , a = e.direction || "both"
                      , l = e.origin
                      , h = {
                        height: el.height(),
                        width: el.width(),
                        outerHeight: el.outerHeight(),
                        outerWidth: el.outerWidth()
                    }
                      , u = "horizontal" !== a ? o / 100 : 1
                      , c = "vertical" !== a ? o / 100 : 1;
                    n.effect = "size",
                    n.queue = false,
                    n.complete = i,
                    "effect" !== s && (n.origin = l || ["middle", "center"],
                    n.restore = true),
                    n.from = e.from || ("show" === s ? {
                        height: 0,
                        width: 0,
                        outerHeight: 0,
                        outerWidth: 0
                    } : h),
                    n.to = {
                        height: h.height * u,
                        width: h.width * c,
                        outerHeight: h.outerHeight * u,
                        outerWidth: h.outerWidth * c
                    },
                    n.fade && ("show" === s && (n.from.opacity = 0,
                    n.to.opacity = 1),
                    "hide" === s && (n.from.opacity = 1,
                    n.to.opacity = 0)),
                    el.effect(n)
                }
                , U = t.effects.effect.puff = function(e, i) {
                    var n = t(this)
                      , s = t.effects.setMode(n, e.mode || "hide")
                      , o = "hide" === s
                      , a = parseInt(e.percent, 10) || 150
                      , factor = a / 100
                      , l = {
                        height: n.height(),
                        width: n.width(),
                        outerHeight: n.outerHeight(),
                        outerWidth: n.outerWidth()
                    };
                    t.extend(e, {
                        effect: "scale",
                        queue: false,
                        fade: true,
                        mode: s,
                        complete: i,
                        percent: o ? a : 100,
                        from: o ? l : {
                            height: l.height * factor,
                            width: l.width * factor,
                            outerHeight: l.outerHeight * factor,
                            outerWidth: l.outerWidth * factor
                        }
                    }),
                    n.effect(e)
                }
                , Y = t.effects.effect.pulsate = function(e, i) {
                    var n = t(this), s = t.effects.setMode(n, e.mode || "show"), show = "show" === s, o = "hide" === s, a = show || "hide" === s, l = 2 * (e.times || 5) + (a ? 1 : 0), h = e.duration / l, u = 0, c = n.queue(), p = c.length, f;
                    for (!show && n.is(":visible") || (n.css("opacity", 0).show(),
                    u = 1),
                    f = 1; f < l; f++)
                        n.animate({
                            opacity: u
                        }, h, e.easing),
                        u = 1 - u;
                    n.animate({
                        opacity: u
                    }, h, e.easing),
                    n.queue((function() {
                        o && n.hide(),
                        i()
                    }
                    )),
                    p > 1 && c.splice.apply(c, [1, 0].concat(c.splice(p, l + 1))),
                    n.dequeue()
                }
                , V = t.effects.effect.shake = function(e, i) {
                    var el = t(this), props = ["position", "top", "bottom", "left", "right", "height", "width"], n = t.effects.setMode(el, e.mode || "effect"), s = e.direction || "left", o = e.distance || 20, a = e.times || 3, l = 2 * a + 1, h = Math.round(e.duration / l), u = "up" === s || "down" === s ? "top" : "left", c = "up" === s || "left" === s, animation = {}, p = {}, f = {}, m, g = el.queue(), v = g.length;
                    for (t.effects.save(el, props),
                    el.show(),
                    t.effects.createWrapper(el),
                    animation[u] = (c ? "-=" : "+=") + o,
                    p[u] = (c ? "+=" : "-=") + 2 * o,
                    f[u] = (c ? "-=" : "+=") + 2 * o,
                    el.animate(animation, h, e.easing),
                    m = 1; m < a; m++)
                        el.animate(p, h, e.easing).animate(f, h, e.easing);
                    el.animate(p, h, e.easing).animate(animation, h / 2, e.easing).queue((function() {
                        "hide" === n && el.hide(),
                        t.effects.restore(el, props),
                        t.effects.removeWrapper(el),
                        i()
                    }
                    )),
                    v > 1 && g.splice.apply(g, [1, 0].concat(g.splice(v, l + 1))),
                    el.dequeue()
                }
                , K = t.effects.effect.slide = function(e, i) {
                    var el = t(this), props = ["position", "top", "bottom", "left", "right", "width", "height"], n = t.effects.setMode(el, e.mode || "show"), show = "show" === n, s = e.direction || "left", o = "up" === s || "down" === s ? "top" : "left", a = "up" === s || "left" === s, l, animation = {};
                    t.effects.save(el, props),
                    el.show(),
                    l = e.distance || el["top" === o ? "outerHeight" : "outerWidth"](true),
                    t.effects.createWrapper(el).css({
                        overflow: "hidden"
                    }),
                    show && el.css(o, a ? isNaN(l) ? "-" + l : -l : l),
                    animation[o] = (show ? a ? "+=" : "-=" : a ? "-=" : "+=") + l,
                    el.animate(animation, {
                        queue: false,
                        duration: e.duration,
                        easing: e.easing,
                        complete: function() {
                            "hide" === n && el.hide(),
                            t.effects.restore(el, props),
                            t.effects.removeWrapper(el),
                            i()
                        }
                    })
                }
                , X = t.effects.effect.transfer = function(e, i) {
                    var n = t(this)
                      , s = t(e.to)
                      , o = "fixed" === s.css("position")
                      , a = t("body")
                      , l = o ? a.scrollTop() : 0
                      , h = o ? a.scrollLeft() : 0
                      , u = s.offset()
                      , animation = {
                        top: u.top - l,
                        left: u.left - h,
                        height: s.innerHeight(),
                        width: s.innerWidth()
                    }
                      , c = n.offset()
                      , p = t("<div class='ui-effects-transfer'></div>").appendTo(document.body).addClass(e.className).css({
                        top: c.top - l,
                        left: c.left - h,
                        height: n.innerHeight(),
                        width: n.innerWidth(),
                        position: o ? "fixed" : "absolute"
                    }).animate(animation, e.duration, e.easing, (function() {
                        p.remove(),
                        i()
                    }
                    ))
                }
                , G = t.widget("ui.progressbar", {
                    version: "1.11.4",
                    options: {
                        max: 100,
                        value: 0,
                        change: null,
                        complete: null
                    },
                    min: 0,
                    _create: function() {
                        this.oldValue = this.options.value = this._constrainedValue(),
                        this.element.addClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").attr({
                            role: "progressbar",
                            "aria-valuemin": this.min
                        }),
                        this.valueDiv = t("<div class='ui-progressbar-value ui-widget-header ui-corner-left'></div>").appendTo(this.element),
                        this._refreshValue()
                    },
                    _destroy: function() {
                        this.element.removeClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow"),
                        this.valueDiv.remove()
                    },
                    value: function(t) {
                        if (void 0 === t)
                            return this.options.value;
                        this.options.value = this._constrainedValue(t),
                        this._refreshValue()
                    },
                    _constrainedValue: function(t) {
                        return void 0 === t && (t = this.options.value),
                        this.indeterminate = false === t,
                        "number" != typeof t && (t = 0),
                        !this.indeterminate && Math.min(this.options.max, Math.max(this.min, t))
                    },
                    _setOptions: function(t) {
                        var e = t.value;
                        delete t.value,
                        this._super(t),
                        this.options.value = this._constrainedValue(e),
                        this._refreshValue()
                    },
                    _setOption: function(t, e) {
                        "max" === t && (e = Math.max(this.min, e)),
                        "disabled" === t && this.element.toggleClass("ui-state-disabled", !!e).attr("aria-disabled", e),
                        this._super(t, e)
                    },
                    _percentage: function() {
                        return this.indeterminate ? 100 : 100 * (this.options.value - this.min) / (this.options.max - this.min)
                    },
                    _refreshValue: function() {
                        var e = this.options.value
                          , i = this._percentage();
                        this.valueDiv.toggle(this.indeterminate || e > this.min).toggleClass("ui-corner-right", e === this.options.max).width(i.toFixed(0) + "%"),
                        this.element.toggleClass("ui-progressbar-indeterminate", this.indeterminate),
                        this.indeterminate ? (this.element.removeAttr("aria-valuenow"),
                        this.overlayDiv || (this.overlayDiv = t("<div class='ui-progressbar-overlay'></div>").appendTo(this.valueDiv))) : (this.element.attr({
                            "aria-valuemax": this.options.max,
                            "aria-valuenow": e
                        }),
                        this.overlayDiv && (this.overlayDiv.remove(),
                        this.overlayDiv = null)),
                        this.oldValue !== e && (this.oldValue = e,
                        this._trigger("change")),
                        e === this.options.max && this._trigger("complete")
                    }
                }), J = t.widget("ui.selectable", t.ui.mouse, {
                    version: "1.11.4",
                    options: {
                        appendTo: "body",
                        autoRefresh: true,
                        distance: 0,
                        filter: "*",
                        tolerance: "touch",
                        selected: null,
                        selecting: null,
                        start: null,
                        stop: null,
                        unselected: null,
                        unselecting: null
                    },
                    _create: function() {
                        var e, i = this;
                        this.element.addClass("ui-selectable"),
                        this.dragged = false,
                        this.refresh = function() {
                            (e = t(i.options.filter, i.element[0])).addClass("ui-selectee"),
                            e.each((function() {
                                var e = t(this)
                                  , i = e.offset();
                                t.data(this, "selectable-item", {
                                    element: this,
                                    $element: e,
                                    left: i.left,
                                    top: i.top,
                                    right: i.left + e.outerWidth(),
                                    bottom: i.top + e.outerHeight(),
                                    startselected: false,
                                    selected: e.hasClass("ui-selected"),
                                    selecting: e.hasClass("ui-selecting"),
                                    unselecting: e.hasClass("ui-unselecting")
                                })
                            }
                            ))
                        }
                        ,
                        this.refresh(),
                        this.selectees = e.addClass("ui-selectee"),
                        this._mouseInit(),
                        this.helper = t("<div class='ui-selectable-helper'></div>")
                    },
                    _destroy: function() {
                        this.selectees.removeClass("ui-selectee").removeData("selectable-item"),
                        this.element.removeClass("ui-selectable ui-selectable-disabled"),
                        this._mouseDestroy()
                    },
                    _mouseStart: function(e) {
                        var i = this
                          , n = this.options;
                        this.opos = [e.pageX, e.pageY],
                        this.options.disabled || (this.selectees = t(n.filter, this.element[0]),
                        this._trigger("start", e),
                        t(n.appendTo).append(this.helper),
                        this.helper.css({
                            left: e.pageX,
                            top: e.pageY,
                            width: 0,
                            height: 0
                        }),
                        n.autoRefresh && this.refresh(),
                        this.selectees.filter(".ui-selected").each((function() {
                            var n = t.data(this, "selectable-item");
                            n.startselected = true,
                            e.metaKey || e.ctrlKey || (n.$element.removeClass("ui-selected"),
                            n.selected = false,
                            n.$element.addClass("ui-unselecting"),
                            n.unselecting = true,
                            i._trigger("unselecting", e, {
                                unselecting: n.element
                            }))
                        }
                        )),
                        t(e.target).parents().addBack().each((function() {
                            var n, s = t.data(this, "selectable-item");
                            if (s)
                                return n = !e.metaKey && !e.ctrlKey || !s.$element.hasClass("ui-selected"),
                                s.$element.removeClass(n ? "ui-unselecting" : "ui-selected").addClass(n ? "ui-selecting" : "ui-unselecting"),
                                s.unselecting = !n,
                                s.selecting = n,
                                s.selected = n,
                                n ? i._trigger("selecting", e, {
                                    selecting: s.element
                                }) : i._trigger("unselecting", e, {
                                    unselecting: s.element
                                }),
                                false
                        }
                        )))
                    },
                    _mouseDrag: function(e) {
                        if (this.dragged = true,
                        !this.options.disabled) {
                            var i, n = this, s = this.options, o = this.opos[0], a = this.opos[1], l = e.pageX, h = e.pageY;
                            return o > l && (i = l,
                            l = o,
                            o = i),
                            a > h && (i = h,
                            h = a,
                            a = i),
                            this.helper.css({
                                left: o,
                                top: a,
                                width: l - o,
                                height: h - a
                            }),
                            this.selectees.each((function() {
                                var i = t.data(this, "selectable-item")
                                  , u = false;
                                i && i.element !== n.element[0] && ("touch" === s.tolerance ? u = !(i.left > l || i.right < o || i.top > h || i.bottom < a) : "fit" === s.tolerance && (u = i.left > o && i.right < l && i.top > a && i.bottom < h),
                                u ? (i.selected && (i.$element.removeClass("ui-selected"),
                                i.selected = false),
                                i.unselecting && (i.$element.removeClass("ui-unselecting"),
                                i.unselecting = false),
                                i.selecting || (i.$element.addClass("ui-selecting"),
                                i.selecting = true,
                                n._trigger("selecting", e, {
                                    selecting: i.element
                                }))) : (i.selecting && ((e.metaKey || e.ctrlKey) && i.startselected ? (i.$element.removeClass("ui-selecting"),
                                i.selecting = false,
                                i.$element.addClass("ui-selected"),
                                i.selected = true) : (i.$element.removeClass("ui-selecting"),
                                i.selecting = false,
                                i.startselected && (i.$element.addClass("ui-unselecting"),
                                i.unselecting = true),
                                n._trigger("unselecting", e, {
                                    unselecting: i.element
                                }))),
                                i.selected && (e.metaKey || e.ctrlKey || i.startselected || (i.$element.removeClass("ui-selected"),
                                i.selected = false,
                                i.$element.addClass("ui-unselecting"),
                                i.unselecting = true,
                                n._trigger("unselecting", e, {
                                    unselecting: i.element
                                })))))
                            }
                            )),
                            false
                        }
                    },
                    _mouseStop: function(e) {
                        var i = this;
                        return this.dragged = false,
                        t(".ui-unselecting", this.element[0]).each((function() {
                            var n = t.data(this, "selectable-item");
                            n.$element.removeClass("ui-unselecting"),
                            n.unselecting = false,
                            n.startselected = false,
                            i._trigger("unselected", e, {
                                unselected: n.element
                            })
                        }
                        )),
                        t(".ui-selecting", this.element[0]).each((function() {
                            var n = t.data(this, "selectable-item");
                            n.$element.removeClass("ui-selecting").addClass("ui-selected"),
                            n.selecting = false,
                            n.selected = true,
                            n.startselected = true,
                            i._trigger("selected", e, {
                                selected: n.element
                            })
                        }
                        )),
                        this._trigger("stop", e),
                        this.helper.remove(),
                        false
                    }
                }), Z = t.widget("ui.selectmenu", {
                    version: "1.11.4",
                    defaultElement: "<select>",
                    options: {
                        appendTo: null,
                        disabled: null,
                        icons: {
                            button: "ui-icon-triangle-1-s"
                        },
                        position: {
                            my: "left top",
                            at: "left bottom",
                            collision: "none"
                        },
                        width: null,
                        change: null,
                        close: null,
                        focus: null,
                        open: null,
                        select: null
                    },
                    _create: function() {
                        var t = this.element.uniqueId().attr("id");
                        this.ids = {
                            element: t,
                            button: t + "-button",
                            menu: t + "-menu"
                        },
                        this._drawButton(),
                        this._drawMenu(),
                        this.options.disabled && this.disable()
                    },
                    _drawButton: function() {
                        var e = this;
                        this.label = t("label[for='" + this.ids.element + "']").attr("for", this.ids.button),
                        this._on(this.label, {
                            click: function(t) {
                                this.button.focus(),
                                t.preventDefault()
                            }
                        }),
                        this.element.hide(),
                        this.button = t("<span>", {
                            class: "ui-selectmenu-button ui-widget ui-state-default ui-corner-all",
                            tabindex: this.options.disabled ? -1 : 0,
                            id: this.ids.button,
                            role: "combobox",
                            "aria-expanded": "false",
                            "aria-autocomplete": "list",
                            "aria-owns": this.ids.menu,
                            "aria-haspopup": "true"
                        }).insertAfter(this.element),
                        t("<span>", {
                            class: "ui-icon " + this.options.icons.button
                        }).prependTo(this.button),
                        this.buttonText = t("<span>", {
                            class: "ui-selectmenu-text"
                        }).appendTo(this.button),
                        this._setText(this.buttonText, this.element.find("option:selected").text()),
                        this._resizeButton(),
                        this._on(this.button, this._buttonEvents),
                        this.button.one("focusin", (function() {
                            e.menuItems || e._refreshMenu()
                        }
                        )),
                        this._hoverable(this.button),
                        this._focusable(this.button)
                    },
                    _drawMenu: function() {
                        var e = this;
                        this.menu = t("<ul>", {
                            "aria-hidden": "true",
                            "aria-labelledby": this.ids.button,
                            id: this.ids.menu
                        }),
                        this.menuWrap = t("<div>", {
                            class: "ui-selectmenu-menu ui-front"
                        }).append(this.menu).appendTo(this._appendTo()),
                        this.menuInstance = this.menu.menu({
                            role: "listbox",
                            select: function(t, i) {
                                t.preventDefault(),
                                e._setSelection(),
                                e._select(i.item.data("ui-selectmenu-item"), t)
                            },
                            focus: function(t, i) {
                                var n = i.item.data("ui-selectmenu-item");
                                null != e.focusIndex && n.index !== e.focusIndex && (e._trigger("focus", t, {
                                    item: n
                                }),
                                e.isOpen || e._select(n, t)),
                                e.focusIndex = n.index,
                                e.button.attr("aria-activedescendant", e.menuItems.eq(n.index).attr("id"))
                            }
                        }).menu("instance"),
                        this.menu.addClass("ui-corner-bottom").removeClass("ui-corner-all"),
                        this.menuInstance._off(this.menu, "mouseleave"),
                        this.menuInstance._closeOnDocumentClick = function() {
                            return false
                        }
                        ,
                        this.menuInstance._isDivider = function() {
                            return false
                        }
                    },
                    refresh: function() {
                        this._refreshMenu(),
                        this._setText(this.buttonText, this._getSelectedItem().text()),
                        this.options.width || this._resizeButton()
                    },
                    _refreshMenu: function() {
                        this.menu.empty();
                        var t, e = this.element.find("option");
                        e.length && (this._parseOptions(e),
                        this._renderMenu(this.menu, this.items),
                        this.menuInstance.refresh(),
                        this.menuItems = this.menu.find("li").not(".ui-selectmenu-optgroup"),
                        t = this._getSelectedItem(),
                        this.menuInstance.focus(null, t),
                        this._setAria(t.data("ui-selectmenu-item")),
                        this._setOption("disabled", this.element.prop("disabled")))
                    },
                    open: function(t) {
                        this.options.disabled || (this.menuItems ? (this.menu.find(".ui-state-focus").removeClass("ui-state-focus"),
                        this.menuInstance.focus(null, this._getSelectedItem())) : this._refreshMenu(),
                        this.isOpen = true,
                        this._toggleAttr(),
                        this._resizeMenu(),
                        this._position(),
                        this._on(this.document, this._documentClick),
                        this._trigger("open", t))
                    },
                    _position: function() {
                        this.menuWrap.position(t.extend({
                            of: this.button
                        }, this.options.position))
                    },
                    close: function(t) {
                        this.isOpen && (this.isOpen = false,
                        this._toggleAttr(),
                        this.range = null,
                        this._off(this.document),
                        this._trigger("close", t))
                    },
                    widget: function() {
                        return this.button
                    },
                    menuWidget: function() {
                        return this.menu
                    },
                    _renderMenu: function(e, items) {
                        var i = this
                          , n = "";
                        t.each(items, (function(index, s) {
                            s.optgroup !== n && (t("<li>", {
                                class: "ui-selectmenu-optgroup ui-menu-divider" + (s.element.parent("optgroup").prop("disabled") ? " ui-state-disabled" : ""),
                                text: s.optgroup
                            }).appendTo(e),
                            n = s.optgroup),
                            i._renderItemData(e, s)
                        }
                        ))
                    },
                    _renderItemData: function(t, e) {
                        return this._renderItem(t, e).data("ui-selectmenu-item", e)
                    },
                    _renderItem: function(e, i) {
                        var n = t("<li>");
                        return i.disabled && n.addClass("ui-state-disabled"),
                        this._setText(n, i.label),
                        n.appendTo(e)
                    },
                    _setText: function(t, e) {
                        e ? t.text(e) : t.html("&#160;")
                    },
                    _move: function(t, e) {
                        var i, n, filter = ".ui-menu-item";
                        this.isOpen ? i = this.menuItems.eq(this.focusIndex) : (i = this.menuItems.eq(this.element[0].selectedIndex),
                        filter += ":not(.ui-state-disabled)"),
                        (n = "first" === t || "last" === t ? i["first" === t ? "prevAll" : "nextAll"](filter).eq(-1) : i[t + "All"](filter).eq(0)).length && this.menuInstance.focus(e, n)
                    },
                    _getSelectedItem: function() {
                        return this.menuItems.eq(this.element[0].selectedIndex)
                    },
                    _toggle: function(t) {
                        this[this.isOpen ? "close" : "open"](t)
                    },
                    _setSelection: function() {
                        var selection;
                        this.range && (window.getSelection ? ((selection = window.getSelection()).removeAllRanges(),
                        selection.addRange(this.range)) : this.range.select(),
                        this.button.focus())
                    },
                    _documentClick: {
                        mousedown: function(e) {
                            this.isOpen && (t(e.target).closest(".ui-selectmenu-menu, #" + this.ids.button).length || this.close(e))
                        }
                    },
                    _buttonEvents: {
                        mousedown: function() {
                            var selection;
                            window.getSelection ? (selection = window.getSelection()).rangeCount && (this.range = selection.getRangeAt(0)) : this.range = document.selection.createRange()
                        },
                        click: function(t) {
                            this._setSelection(),
                            this._toggle(t)
                        },
                        keydown: function(e) {
                            var i = true;
                            switch (e.keyCode) {
                            case t.ui.keyCode.TAB:
                            case t.ui.keyCode.ESCAPE:
                                this.close(e),
                                i = false;
                                break;
                            case t.ui.keyCode.ENTER:
                                this.isOpen && this._selectFocusedItem(e);
                                break;
                            case t.ui.keyCode.UP:
                                e.altKey ? this._toggle(e) : this._move("prev", e);
                                break;
                            case t.ui.keyCode.DOWN:
                                e.altKey ? this._toggle(e) : this._move("next", e);
                                break;
                            case t.ui.keyCode.SPACE:
                                this.isOpen ? this._selectFocusedItem(e) : this._toggle(e);
                                break;
                            case t.ui.keyCode.LEFT:
                                this._move("prev", e);
                                break;
                            case t.ui.keyCode.RIGHT:
                                this._move("next", e);
                                break;
                            case t.ui.keyCode.HOME:
                            case t.ui.keyCode.PAGE_UP:
                                this._move("first", e);
                                break;
                            case t.ui.keyCode.END:
                            case t.ui.keyCode.PAGE_DOWN:
                                this._move("last", e);
                                break;
                            default:
                                this.menu.trigger(e),
                                i = false
                            }
                            i && e.preventDefault()
                        }
                    },
                    _selectFocusedItem: function(t) {
                        var e = this.menuItems.eq(this.focusIndex);
                        e.hasClass("ui-state-disabled") || this._select(e.data("ui-selectmenu-item"), t)
                    },
                    _select: function(t, e) {
                        var i = this.element[0].selectedIndex;
                        this.element[0].selectedIndex = t.index,
                        this._setText(this.buttonText, t.label),
                        this._setAria(t),
                        this._trigger("select", e, {
                            item: t
                        }),
                        t.index !== i && this._trigger("change", e, {
                            item: t
                        }),
                        this.close(e)
                    },
                    _setAria: function(t) {
                        var id = this.menuItems.eq(t.index).attr("id");
                        this.button.attr({
                            "aria-labelledby": id,
                            "aria-activedescendant": id
                        }),
                        this.menu.attr("aria-activedescendant", id)
                    },
                    _setOption: function(t, e) {
                        "icons" === t && this.button.find("span.ui-icon").removeClass(this.options.icons.button).addClass(e.button),
                        this._super(t, e),
                        "appendTo" === t && this.menuWrap.appendTo(this._appendTo()),
                        "disabled" === t && (this.menuInstance.option("disabled", e),
                        this.button.toggleClass("ui-state-disabled", e).attr("aria-disabled", e),
                        this.element.prop("disabled", e),
                        e ? (this.button.attr("tabindex", -1),
                        this.close()) : this.button.attr("tabindex", 0)),
                        "width" === t && this._resizeButton()
                    },
                    _appendTo: function() {
                        var e = this.options.appendTo;
                        return e && (e = e.jquery || e.nodeType ? t(e) : this.document.find(e).eq(0)),
                        e && e[0] || (e = this.element.closest(".ui-front")),
                        e.length || (e = this.document[0].body),
                        e
                    },
                    _toggleAttr: function() {
                        this.button.toggleClass("ui-corner-top", this.isOpen).toggleClass("ui-corner-all", !this.isOpen).attr("aria-expanded", this.isOpen),
                        this.menuWrap.toggleClass("ui-selectmenu-open", this.isOpen),
                        this.menu.attr("aria-hidden", !this.isOpen)
                    },
                    _resizeButton: function() {
                        var t = this.options.width;
                        t || (t = this.element.show().outerWidth(),
                        this.element.hide()),
                        this.button.outerWidth(t)
                    },
                    _resizeMenu: function() {
                        this.menu.outerWidth(Math.max(this.button.outerWidth(), this.menu.width("").outerWidth() + 1))
                    },
                    _getCreateOptions: function() {
                        return {
                            disabled: this.element.prop("disabled")
                        }
                    },
                    _parseOptions: function(e) {
                        var data = [];
                        e.each((function(index, e) {
                            var i = t(e)
                              , n = i.parent("optgroup");
                            data.push({
                                element: i,
                                index: index,
                                value: i.val(),
                                label: i.text(),
                                optgroup: n.attr("label") || "",
                                disabled: n.prop("disabled") || i.prop("disabled")
                            })
                        }
                        )),
                        this.items = data
                    },
                    _destroy: function() {
                        this.menuWrap.remove(),
                        this.button.remove(),
                        this.element.show(),
                        this.element.removeUniqueId(),
                        this.label.attr("for", this.ids.element)
                    }
                }), slider = t.widget("ui.slider", t.ui.mouse, {
                    version: "1.11.4",
                    widgetEventPrefix: "slide",
                    options: {
                        animate: false,
                        distance: 0,
                        max: 100,
                        min: 0,
                        orientation: "horizontal",
                        range: false,
                        step: 1,
                        value: 0,
                        values: null,
                        change: null,
                        slide: null,
                        start: null,
                        stop: null
                    },
                    numPages: 5,
                    _create: function() {
                        this._keySliding = false,
                        this._mouseSliding = false,
                        this._animateOff = true,
                        this._handleIndex = null,
                        this._detectOrientation(),
                        this._mouseInit(),
                        this._calculateNewMax(),
                        this.element.addClass("ui-slider ui-slider-" + this.orientation + " ui-widget ui-widget-content ui-corner-all"),
                        this._refresh(),
                        this._setOption("disabled", this.options.disabled),
                        this._animateOff = false
                    },
                    _refresh: function() {
                        this._createRange(),
                        this._createHandles(),
                        this._setupEvents(),
                        this._refreshValue()
                    },
                    _createHandles: function() {
                        var e, i, n = this.options, s = this.element.find(".ui-slider-handle").addClass("ui-state-default ui-corner-all"), o = "<span class='ui-slider-handle ui-state-default ui-corner-all' tabindex='0'></span>", a = [];
                        for (i = n.values && n.values.length || 1,
                        s.length > i && (s.slice(i).remove(),
                        s = s.slice(0, i)),
                        e = s.length; e < i; e++)
                            a.push(o);
                        this.handles = s.add(t(a.join("")).appendTo(this.element)),
                        this.handle = this.handles.eq(0),
                        this.handles.each((function(e) {
                            t(this).data("ui-slider-handle-index", e)
                        }
                        ))
                    },
                    _createRange: function() {
                        var e = this.options
                          , i = "";
                        e.range ? (true === e.range && (e.values ? e.values.length && 2 !== e.values.length ? e.values = [e.values[0], e.values[0]] : t.isArray(e.values) && (e.values = e.values.slice(0)) : e.values = [this._valueMin(), this._valueMin()]),
                        this.range && this.range.length ? this.range.removeClass("ui-slider-range-min ui-slider-range-max").css({
                            left: "",
                            bottom: ""
                        }) : (this.range = t("<div></div>").appendTo(this.element),
                        i = "ui-slider-range ui-widget-header ui-corner-all"),
                        this.range.addClass(i + ("min" === e.range || "max" === e.range ? " ui-slider-range-" + e.range : ""))) : (this.range && this.range.remove(),
                        this.range = null)
                    },
                    _setupEvents: function() {
                        this._off(this.handles),
                        this._on(this.handles, this._handleEvents),
                        this._hoverable(this.handles),
                        this._focusable(this.handles)
                    },
                    _destroy: function() {
                        this.handles.remove(),
                        this.range && this.range.remove(),
                        this.element.removeClass("ui-slider ui-slider-horizontal ui-slider-vertical ui-widget ui-widget-content ui-corner-all"),
                        this._mouseDestroy()
                    },
                    _mouseCapture: function(e) {
                        var position, i, n, s, index, o, a, l, h = this, u = this.options;
                        return !u.disabled && (this.elementSize = {
                            width: this.element.outerWidth(),
                            height: this.element.outerHeight()
                        },
                        this.elementOffset = this.element.offset(),
                        position = {
                            x: e.pageX,
                            y: e.pageY
                        },
                        i = this._normValueFromMouse(position),
                        n = this._valueMax() - this._valueMin() + 1,
                        this.handles.each((function(e) {
                            var o = Math.abs(i - h.values(e));
                            (n > o || n === o && (e === h._lastChangedValue || h.values(e) === u.min)) && (n = o,
                            s = t(this),
                            index = e)
                        }
                        )),
                        false !== (o = this._start(e, index)) && (this._mouseSliding = true,
                        this._handleIndex = index,
                        s.addClass("ui-state-active").focus(),
                        a = s.offset(),
                        l = !t(e.target).parents().addBack().is(".ui-slider-handle"),
                        this._clickOffset = l ? {
                            left: 0,
                            top: 0
                        } : {
                            left: e.pageX - a.left - s.width() / 2,
                            top: e.pageY - a.top - s.height() / 2 - (parseInt(s.css("borderTopWidth"), 10) || 0) - (parseInt(s.css("borderBottomWidth"), 10) || 0) + (parseInt(s.css("marginTop"), 10) || 0)
                        },
                        this.handles.hasClass("ui-state-hover") || this._slide(e, index, i),
                        this._animateOff = true,
                        true))
                    },
                    _mouseStart: function() {
                        return true
                    },
                    _mouseDrag: function(t) {
                        var position = {
                            x: t.pageX,
                            y: t.pageY
                        }
                          , e = this._normValueFromMouse(position);
                        return this._slide(t, this._handleIndex, e),
                        false
                    },
                    _mouseStop: function(t) {
                        return this.handles.removeClass("ui-state-active"),
                        this._mouseSliding = false,
                        this._stop(t, this._handleIndex),
                        this._change(t, this._handleIndex),
                        this._handleIndex = null,
                        this._clickOffset = null,
                        this._animateOff = false,
                        false
                    },
                    _detectOrientation: function() {
                        this.orientation = "vertical" === this.options.orientation ? "vertical" : "horizontal"
                    },
                    _normValueFromMouse: function(position) {
                        var t, e, i, n, s;
                        return "horizontal" === this.orientation ? (t = this.elementSize.width,
                        e = position.x - this.elementOffset.left - (this._clickOffset ? this._clickOffset.left : 0)) : (t = this.elementSize.height,
                        e = position.y - this.elementOffset.top - (this._clickOffset ? this._clickOffset.top : 0)),
                        (i = e / t) > 1 && (i = 1),
                        i < 0 && (i = 0),
                        "vertical" === this.orientation && (i = 1 - i),
                        n = this._valueMax() - this._valueMin(),
                        s = this._valueMin() + i * n,
                        this._trimAlignValue(s)
                    },
                    _start: function(t, index) {
                        var e = {
                            handle: this.handles[index],
                            value: this.value()
                        };
                        return this.options.values && this.options.values.length && (e.value = this.values(index),
                        e.values = this.values()),
                        this._trigger("start", t, e)
                    },
                    _slide: function(t, index, e) {
                        var i, n, s;
                        this.options.values && this.options.values.length ? (i = this.values(index ? 0 : 1),
                        2 === this.options.values.length && true === this.options.range && (0 === index && e > i || 1 === index && e < i) && (e = i),
                        e !== this.values(index) && ((n = this.values())[index] = e,
                        s = this._trigger("slide", t, {
                            handle: this.handles[index],
                            value: e,
                            values: n
                        }),
                        i = this.values(index ? 0 : 1),
                        false !== s && this.values(index, e))) : e !== this.value() && false !== (s = this._trigger("slide", t, {
                            handle: this.handles[index],
                            value: e
                        })) && this.value(e)
                    },
                    _stop: function(t, index) {
                        var e = {
                            handle: this.handles[index],
                            value: this.value()
                        };
                        this.options.values && this.options.values.length && (e.value = this.values(index),
                        e.values = this.values()),
                        this._trigger("stop", t, e)
                    },
                    _change: function(t, index) {
                        if (!this._keySliding && !this._mouseSliding) {
                            var e = {
                                handle: this.handles[index],
                                value: this.value()
                            };
                            this.options.values && this.options.values.length && (e.value = this.values(index),
                            e.values = this.values()),
                            this._lastChangedValue = index,
                            this._trigger("change", t, e)
                        }
                    },
                    value: function(t) {
                        return arguments.length ? (this.options.value = this._trimAlignValue(t),
                        this._refreshValue(),
                        this._change(null, 0),
                        void 0) : this._value()
                    },
                    values: function(index, e) {
                        var i, n, s;
                        if (arguments.length > 1)
                            return this.options.values[index] = this._trimAlignValue(e),
                            this._refreshValue(),
                            this._change(null, index),
                            void 0;
                        if (!arguments.length)
                            return this._values();
                        if (!t.isArray(arguments[0]))
                            return this.options.values && this.options.values.length ? this._values(index) : this.value();
                        for (i = this.options.values,
                        n = arguments[0],
                        s = 0; s < i.length; s += 1)
                            i[s] = this._trimAlignValue(n[s]),
                            this._change(null, s);
                        this._refreshValue()
                    },
                    _setOption: function(e, i) {
                        var n, s = 0;
                        switch ("range" === e && true === this.options.range && ("min" === i ? (this.options.value = this._values(0),
                        this.options.values = null) : "max" === i && (this.options.value = this._values(this.options.values.length - 1),
                        this.options.values = null)),
                        t.isArray(this.options.values) && (s = this.options.values.length),
                        "disabled" === e && this.element.toggleClass("ui-state-disabled", !!i),
                        this._super(e, i),
                        e) {
                        case "orientation":
                            this._detectOrientation(),
                            this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-" + this.orientation),
                            this._refreshValue(),
                            this.handles.css("horizontal" === i ? "bottom" : "left", "");
                            break;
                        case "value":
                            this._animateOff = true,
                            this._refreshValue(),
                            this._change(null, 0),
                            this._animateOff = false;
                            break;
                        case "values":
                            for (this._animateOff = true,
                            this._refreshValue(),
                            n = 0; n < s; n += 1)
                                this._change(null, n);
                            this._animateOff = false;
                            break;
                        case "step":
                        case "min":
                        case "max":
                            this._animateOff = true,
                            this._calculateNewMax(),
                            this._refreshValue(),
                            this._animateOff = false;
                            break;
                        case "range":
                            this._animateOff = true,
                            this._refresh(),
                            this._animateOff = false
                        }
                    },
                    _value: function() {
                        var t = this.options.value;
                        return t = this._trimAlignValue(t)
                    },
                    _values: function(index) {
                        var t, e, i;
                        if (arguments.length)
                            return t = this.options.values[index],
                            t = this._trimAlignValue(t);
                        if (this.options.values && this.options.values.length) {
                            for (e = this.options.values.slice(),
                            i = 0; i < e.length; i += 1)
                                e[i] = this._trimAlignValue(e[i]);
                            return e
                        }
                        return []
                    },
                    _trimAlignValue: function(t) {
                        if (t <= this._valueMin())
                            return this._valueMin();
                        if (t >= this._valueMax())
                            return this._valueMax();
                        var e = this.options.step > 0 ? this.options.step : 1
                          , i = (t - this._valueMin()) % e
                          , n = t - i;
                        return 2 * Math.abs(i) >= e && (n += i > 0 ? e : -e),
                        parseFloat(n.toFixed(5))
                    },
                    _calculateNewMax: function() {
                        var t = this.options.max, e = this._valueMin(), i = this.options.step, n;
                        t = Math.floor(+(t - e).toFixed(this._precision()) / i) * i + e,
                        this.max = parseFloat(t.toFixed(this._precision()))
                    },
                    _precision: function() {
                        var t = this._precisionOf(this.options.step);
                        return null !== this.options.min && (t = Math.max(t, this._precisionOf(this.options.min))),
                        t
                    },
                    _precisionOf: function(t) {
                        var e = t.toString()
                          , i = e.indexOf(".");
                        return -1 === i ? 0 : e.length - i - 1
                    },
                    _valueMin: function() {
                        return this.options.min
                    },
                    _valueMax: function() {
                        return this.max
                    },
                    _refreshValue: function() {
                        var e, i, n, s, o, a = this.options.range, l = this.options, h = this, u = !this._animateOff && l.animate, c = {};
                        this.options.values && this.options.values.length ? this.handles.each((function(n) {
                            i = (h.values(n) - h._valueMin()) / (h._valueMax() - h._valueMin()) * 100,
                            c["horizontal" === h.orientation ? "left" : "bottom"] = i + "%",
                            t(this).stop(1, 1)[u ? "animate" : "css"](c, l.animate),
                            true === h.options.range && ("horizontal" === h.orientation ? (0 === n && h.range.stop(1, 1)[u ? "animate" : "css"]({
                                left: i + "%"
                            }, l.animate),
                            1 === n && h.range[u ? "animate" : "css"]({
                                width: i - e + "%"
                            }, {
                                queue: false,
                                duration: l.animate
                            })) : (0 === n && h.range.stop(1, 1)[u ? "animate" : "css"]({
                                bottom: i + "%"
                            }, l.animate),
                            1 === n && h.range[u ? "animate" : "css"]({
                                height: i - e + "%"
                            }, {
                                queue: false,
                                duration: l.animate
                            }))),
                            e = i
                        }
                        )) : (n = this.value(),
                        s = this._valueMin(),
                        o = this._valueMax(),
                        i = o !== s ? (n - s) / (o - s) * 100 : 0,
                        c["horizontal" === this.orientation ? "left" : "bottom"] = i + "%",
                        this.handle.stop(1, 1)[u ? "animate" : "css"](c, l.animate),
                        "min" === a && "horizontal" === this.orientation && this.range.stop(1, 1)[u ? "animate" : "css"]({
                            width: i + "%"
                        }, l.animate),
                        "max" === a && "horizontal" === this.orientation && this.range[u ? "animate" : "css"]({
                            width: 100 - i + "%"
                        }, {
                            queue: false,
                            duration: l.animate
                        }),
                        "min" === a && "vertical" === this.orientation && this.range.stop(1, 1)[u ? "animate" : "css"]({
                            height: i + "%"
                        }, l.animate),
                        "max" === a && "vertical" === this.orientation && this.range[u ? "animate" : "css"]({
                            height: 100 - i + "%"
                        }, {
                            queue: false,
                            duration: l.animate
                        }))
                    },
                    _handleEvents: {
                        keydown: function(e) {
                            var i, n, s, o, index = t(e.target).data("ui-slider-handle-index");
                            switch (e.keyCode) {
                            case t.ui.keyCode.HOME:
                            case t.ui.keyCode.END:
                            case t.ui.keyCode.PAGE_UP:
                            case t.ui.keyCode.PAGE_DOWN:
                            case t.ui.keyCode.UP:
                            case t.ui.keyCode.RIGHT:
                            case t.ui.keyCode.DOWN:
                            case t.ui.keyCode.LEFT:
                                if (e.preventDefault(),
                                !this._keySliding && (this._keySliding = true,
                                t(e.target).addClass("ui-state-active"),
                                false === (i = this._start(e, index))))
                                    return
                            }
                            switch (o = this.options.step,
                            n = s = this.options.values && this.options.values.length ? this.values(index) : this.value(),
                            e.keyCode) {
                            case t.ui.keyCode.HOME:
                                s = this._valueMin();
                                break;
                            case t.ui.keyCode.END:
                                s = this._valueMax();
                                break;
                            case t.ui.keyCode.PAGE_UP:
                                s = this._trimAlignValue(n + (this._valueMax() - this._valueMin()) / this.numPages);
                                break;
                            case t.ui.keyCode.PAGE_DOWN:
                                s = this._trimAlignValue(n - (this._valueMax() - this._valueMin()) / this.numPages);
                                break;
                            case t.ui.keyCode.UP:
                            case t.ui.keyCode.RIGHT:
                                if (n === this._valueMax())
                                    return;
                                s = this._trimAlignValue(n + o);
                                break;
                            case t.ui.keyCode.DOWN:
                            case t.ui.keyCode.LEFT:
                                if (n === this._valueMin())
                                    return;
                                s = this._trimAlignValue(n - o)
                            }
                            this._slide(e, index, s)
                        },
                        keyup: function(e) {
                            var index = t(e.target).data("ui-slider-handle-index");
                            this._keySliding && (this._keySliding = false,
                            this._stop(e, index),
                            this._change(e, index),
                            t(e.target).removeClass("ui-state-active"))
                        }
                    }
                }), sortable = t.widget("ui.sortable", t.ui.mouse, {
                    version: "1.11.4",
                    widgetEventPrefix: "sort",
                    ready: false,
                    options: {
                        appendTo: "parent",
                        axis: false,
                        connectWith: false,
                        containment: false,
                        cursor: "auto",
                        cursorAt: false,
                        dropOnEmpty: true,
                        forcePlaceholderSize: false,
                        forceHelperSize: false,
                        grid: false,
                        handle: false,
                        helper: "original",
                        items: "> *",
                        opacity: false,
                        placeholder: false,
                        revert: false,
                        scroll: true,
                        scrollSensitivity: 20,
                        scrollSpeed: 20,
                        scope: "default",
                        tolerance: "intersect",
                        zIndex: 1e3,
                        activate: null,
                        beforeStop: null,
                        change: null,
                        deactivate: null,
                        out: null,
                        over: null,
                        receive: null,
                        remove: null,
                        sort: null,
                        start: null,
                        stop: null,
                        update: null
                    },
                    _isOverAxis: function(t, e, size) {
                        return t >= e && t < e + size
                    },
                    _isFloating: function(t) {
                        return /left|right/.test(t.css("float")) || /inline|table-cell/.test(t.css("display"))
                    },
                    _create: function() {
                        this.containerCache = {},
                        this.element.addClass("ui-sortable"),
                        this.refresh(),
                        this.offset = this.element.offset(),
                        this._mouseInit(),
                        this._setHandleClassName(),
                        this.ready = true
                    },
                    _setOption: function(t, e) {
                        this._super(t, e),
                        "handle" === t && this._setHandleClassName()
                    },
                    _setHandleClassName: function() {
                        this.element.find(".ui-sortable-handle").removeClass("ui-sortable-handle"),
                        t.each(this.items, (function() {
                            (this.instance.options.handle ? this.item.find(this.instance.options.handle) : this.item).addClass("ui-sortable-handle")
                        }
                        ))
                    },
                    _destroy: function() {
                        this.element.removeClass("ui-sortable ui-sortable-disabled").find(".ui-sortable-handle").removeClass("ui-sortable-handle"),
                        this._mouseDestroy();
                        for (var t = this.items.length - 1; t >= 0; t--)
                            this.items[t].item.removeData(this.widgetName + "-item");
                        return this
                    },
                    _mouseCapture: function(e, i) {
                        var n = null
                          , s = false
                          , o = this;
                        return !(this.reverting || this.options.disabled || "static" === this.options.type || (this._refreshItems(e),
                        t(e.target).parents().each((function() {
                            if (t.data(this, o.widgetName + "-item") === o)
                                return n = t(this),
                                false
                        }
                        )),
                        t.data(e.target, o.widgetName + "-item") === o && (n = t(e.target)),
                        !n || this.options.handle && !i && (t(this.options.handle, n).find("*").addBack().each((function() {
                            this === e.target && (s = true)
                        }
                        )),
                        !s) || (this.currentItem = n,
                        this._removeCurrentsFromItems(),
                        false)))
                    },
                    _mouseStart: function(e, i, n) {
                        var s, o, a = this.options;
                        if (this.currentContainer = this,
                        this.refreshPositions(),
                        this.helper = this._createHelper(e),
                        this._cacheHelperProportions(),
                        this._cacheMargins(),
                        this.scrollParent = this.helper.scrollParent(),
                        this.offset = this.currentItem.offset(),
                        this.offset = {
                            top: this.offset.top - this.margins.top,
                            left: this.offset.left - this.margins.left
                        },
                        t.extend(this.offset, {
                            click: {
                                left: e.pageX - this.offset.left,
                                top: e.pageY - this.offset.top
                            },
                            parent: this._getParentOffset(),
                            relative: this._getRelativeOffset()
                        }),
                        this.helper.css("position", "absolute"),
                        this.cssPosition = this.helper.css("position"),
                        this.originalPosition = this._generatePosition(e),
                        this.originalPageX = e.pageX,
                        this.originalPageY = e.pageY,
                        a.cursorAt && this._adjustOffsetFromHelper(a.cursorAt),
                        this.domPosition = {
                            prev: this.currentItem.prev()[0],
                            parent: this.currentItem.parent()[0]
                        },
                        this.helper[0] !== this.currentItem[0] && this.currentItem.hide(),
                        this._createPlaceholder(),
                        a.containment && this._setContainment(),
                        a.cursor && "auto" !== a.cursor && (o = this.document.find("body"),
                        this.storedCursor = o.css("cursor"),
                        o.css("cursor", a.cursor),
                        this.storedStylesheet = t("<style>*{ cursor: " + a.cursor + " !important; }</style>").appendTo(o)),
                        a.opacity && (this.helper.css("opacity") && (this._storedOpacity = this.helper.css("opacity")),
                        this.helper.css("opacity", a.opacity)),
                        a.zIndex && (this.helper.css("zIndex") && (this._storedZIndex = this.helper.css("zIndex")),
                        this.helper.css("zIndex", a.zIndex)),
                        this.scrollParent[0] !== this.document[0] && "HTML" !== this.scrollParent[0].tagName && (this.overflowOffset = this.scrollParent.offset()),
                        this._trigger("start", e, this._uiHash()),
                        this._preserveHelperProportions || this._cacheHelperProportions(),
                        !n)
                            for (s = this.containers.length - 1; s >= 0; s--)
                                this.containers[s]._trigger("activate", e, this._uiHash(this));
                        return t.ui.ddmanager && (t.ui.ddmanager.current = this),
                        t.ui.ddmanager && !a.dropBehaviour && t.ui.ddmanager.prepareOffsets(this, e),
                        this.dragging = true,
                        this.helper.addClass("ui-sortable-helper"),
                        this._mouseDrag(e),
                        true
                    },
                    _mouseDrag: function(e) {
                        var i, n, s, o, a = this.options, l = false;
                        for (this.position = this._generatePosition(e),
                        this.positionAbs = this._convertPositionTo("absolute"),
                        this.lastPositionAbs || (this.lastPositionAbs = this.positionAbs),
                        this.options.scroll && (this.scrollParent[0] !== this.document[0] && "HTML" !== this.scrollParent[0].tagName ? (this.overflowOffset.top + this.scrollParent[0].offsetHeight - e.pageY < a.scrollSensitivity ? this.scrollParent[0].scrollTop = l = this.scrollParent[0].scrollTop + a.scrollSpeed : e.pageY - this.overflowOffset.top < a.scrollSensitivity && (this.scrollParent[0].scrollTop = l = this.scrollParent[0].scrollTop - a.scrollSpeed),
                        this.overflowOffset.left + this.scrollParent[0].offsetWidth - e.pageX < a.scrollSensitivity ? this.scrollParent[0].scrollLeft = l = this.scrollParent[0].scrollLeft + a.scrollSpeed : e.pageX - this.overflowOffset.left < a.scrollSensitivity && (this.scrollParent[0].scrollLeft = l = this.scrollParent[0].scrollLeft - a.scrollSpeed)) : (e.pageY - this.document.scrollTop() < a.scrollSensitivity ? l = this.document.scrollTop(this.document.scrollTop() - a.scrollSpeed) : this.window.height() - (e.pageY - this.document.scrollTop()) < a.scrollSensitivity && (l = this.document.scrollTop(this.document.scrollTop() + a.scrollSpeed)),
                        e.pageX - this.document.scrollLeft() < a.scrollSensitivity ? l = this.document.scrollLeft(this.document.scrollLeft() - a.scrollSpeed) : this.window.width() - (e.pageX - this.document.scrollLeft()) < a.scrollSensitivity && (l = this.document.scrollLeft(this.document.scrollLeft() + a.scrollSpeed))),
                        false !== l && t.ui.ddmanager && !a.dropBehaviour && t.ui.ddmanager.prepareOffsets(this, e)),
                        this.positionAbs = this._convertPositionTo("absolute"),
                        this.options.axis && "y" === this.options.axis || (this.helper[0].style.left = this.position.left + "px"),
                        this.options.axis && "x" === this.options.axis || (this.helper[0].style.top = this.position.top + "px"),
                        i = this.items.length - 1; i >= 0; i--)
                            if (s = (n = this.items[i]).item[0],
                            (o = this._intersectsWithPointer(n)) && n.instance === this.currentContainer && !(s === this.currentItem[0] || this.placeholder[1 === o ? "next" : "prev"]()[0] === s || t.contains(this.placeholder[0], s) || "semi-dynamic" === this.options.type && t.contains(this.element[0], s))) {
                                if (this.direction = 1 === o ? "down" : "up",
                                "pointer" !== this.options.tolerance && !this._intersectsWithSides(n))
                                    break;
                                this._rearrange(e, n),
                                this._trigger("change", e, this._uiHash());
                                break
                            }
                        return this._contactContainers(e),
                        t.ui.ddmanager && t.ui.ddmanager.drag(this, e),
                        this._trigger("sort", e, this._uiHash()),
                        this.lastPositionAbs = this.positionAbs,
                        false
                    },
                    _mouseStop: function(e, i) {
                        if (e) {
                            if (t.ui.ddmanager && !this.options.dropBehaviour && t.ui.ddmanager.drop(this, e),
                            this.options.revert) {
                                var n = this
                                  , s = this.placeholder.offset()
                                  , o = this.options.axis
                                  , animation = {};
                                o && "x" !== o || (animation.left = s.left - this.offset.parent.left - this.margins.left + (this.offsetParent[0] === this.document[0].body ? 0 : this.offsetParent[0].scrollLeft)),
                                o && "y" !== o || (animation.top = s.top - this.offset.parent.top - this.margins.top + (this.offsetParent[0] === this.document[0].body ? 0 : this.offsetParent[0].scrollTop)),
                                this.reverting = true,
                                t(this.helper).animate(animation, parseInt(this.options.revert, 10) || 500, (function() {
                                    n._clear(e)
                                }
                                ))
                            } else
                                this._clear(e, i);
                            return false
                        }
                    },
                    cancel: function() {
                        if (this.dragging) {
                            this._mouseUp({
                                target: null
                            }),
                            "original" === this.options.helper ? this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper") : this.currentItem.show();
                            for (var e = this.containers.length - 1; e >= 0; e--)
                                this.containers[e]._trigger("deactivate", null, this._uiHash(this)),
                                this.containers[e].containerCache.over && (this.containers[e]._trigger("out", null, this._uiHash(this)),
                                this.containers[e].containerCache.over = 0)
                        }
                        return this.placeholder && (this.placeholder[0].parentNode && this.placeholder[0].parentNode.removeChild(this.placeholder[0]),
                        "original" !== this.options.helper && this.helper && this.helper[0].parentNode && this.helper.remove(),
                        t.extend(this, {
                            helper: null,
                            dragging: false,
                            reverting: false,
                            _noFinalSort: null
                        }),
                        this.domPosition.prev ? t(this.domPosition.prev).after(this.currentItem) : t(this.domPosition.parent).prepend(this.currentItem)),
                        this
                    },
                    serialize: function(e) {
                        var items = this._getItemsAsjQuery(e && e.connected)
                          , i = [];
                        return e = e || {},
                        t(items).each((function() {
                            var n = (t(e.item || this).attr(e.attribute || "id") || "").match(e.expression || /(.+)[\-=_](.+)/);
                            n && i.push((e.key || n[1] + "[]") + "=" + (e.key && e.expression ? n[1] : n[2]))
                        }
                        )),
                        !i.length && e.key && i.push(e.key + "="),
                        i.join("&")
                    },
                    toArray: function(e) {
                        var items = this._getItemsAsjQuery(e && e.connected)
                          , i = [];
                        return e = e || {},
                        items.each((function() {
                            i.push(t(e.item || this).attr(e.attribute || "id") || "")
                        }
                        )),
                        i
                    },
                    _intersectsWith: function(t) {
                        var e = this.positionAbs.left
                          , i = e + this.helperProportions.width
                          , n = this.positionAbs.top
                          , s = n + this.helperProportions.height
                          , o = t.left
                          , r = o + t.width
                          , a = t.top
                          , l = a + t.height
                          , h = this.offset.click.top
                          , u = this.offset.click.left
                          , c = "x" === this.options.axis || n + h > a && n + h < l
                          , p = "y" === this.options.axis || e + u > o && e + u < r
                          , f = c && p;
                        return "pointer" === this.options.tolerance || this.options.forcePointerForContainers || "pointer" !== this.options.tolerance && this.helperProportions[this.floating ? "width" : "height"] > t[this.floating ? "width" : "height"] ? f : o < e + this.helperProportions.width / 2 && i - this.helperProportions.width / 2 < r && a < n + this.helperProportions.height / 2 && s - this.helperProportions.height / 2 < l
                    },
                    _intersectsWithPointer: function(t) {
                        var e = "x" === this.options.axis || this._isOverAxis(this.positionAbs.top + this.offset.click.top, t.top, t.height)
                          , i = "y" === this.options.axis || this._isOverAxis(this.positionAbs.left + this.offset.click.left, t.left, t.width)
                          , n = e && i
                          , s = this._getDragVerticalDirection()
                          , o = this._getDragHorizontalDirection();
                        return !!n && (this.floating ? o && "right" === o || "down" === s ? 2 : 1 : s && ("down" === s ? 2 : 1))
                    },
                    _intersectsWithSides: function(t) {
                        var e = this._isOverAxis(this.positionAbs.top + this.offset.click.top, t.top + t.height / 2, t.height)
                          , i = this._isOverAxis(this.positionAbs.left + this.offset.click.left, t.left + t.width / 2, t.width)
                          , n = this._getDragVerticalDirection()
                          , s = this._getDragHorizontalDirection();
                        return this.floating && s ? "right" === s && i || "left" === s && !i : n && ("down" === n && e || "up" === n && !e)
                    },
                    _getDragVerticalDirection: function() {
                        var t = this.positionAbs.top - this.lastPositionAbs.top;
                        return 0 !== t && (t > 0 ? "down" : "up")
                    },
                    _getDragHorizontalDirection: function() {
                        var t = this.positionAbs.left - this.lastPositionAbs.left;
                        return 0 !== t && (t > 0 ? "right" : "left")
                    },
                    refresh: function(t) {
                        return this._refreshItems(t),
                        this._setHandleClassName(),
                        this.refreshPositions(),
                        this
                    },
                    _connectWith: function() {
                        var t = this.options;
                        return t.connectWith.constructor === String ? [t.connectWith] : t.connectWith
                    },
                    _getItemsAsjQuery: function(e) {
                        function i() {
                            items.push(this)
                        }
                        var n, s, o, a, items = [], l = [], h = this._connectWith();
                        if (h && e)
                            for (n = h.length - 1; n >= 0; n--)
                                for (s = (o = t(h[n], this.document[0])).length - 1; s >= 0; s--)
                                    (a = t.data(o[s], this.widgetFullName)) && a !== this && !a.options.disabled && l.push([t.isFunction(a.options.items) ? a.options.items.call(a.element) : t(a.options.items, a.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), a]);
                        for (l.push([t.isFunction(this.options.items) ? this.options.items.call(this.element, null, {
                            options: this.options,
                            item: this.currentItem
                        }) : t(this.options.items, this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), this]),
                        n = l.length - 1; n >= 0; n--)
                            l[n][0].each(i);
                        return t(items)
                    },
                    _removeCurrentsFromItems: function() {
                        var list = this.currentItem.find(":data(" + this.widgetName + "-item)");
                        this.items = t.grep(this.items, (function(t) {
                            for (var e = 0; e < list.length; e++)
                                if (list[e] === t.item[0])
                                    return false;
                            return true
                        }
                        ))
                    },
                    _refreshItems: function(e) {
                        this.items = [],
                        this.containers = [this];
                        var i, n, s, o, a, l, h, u, items = this.items, c = [[t.isFunction(this.options.items) ? this.options.items.call(this.element[0], e, {
                            item: this.currentItem
                        }) : t(this.options.items, this.element), this]], p = this._connectWith();
                        if (p && this.ready)
                            for (i = p.length - 1; i >= 0; i--)
                                for (n = (s = t(p[i], this.document[0])).length - 1; n >= 0; n--)
                                    (o = t.data(s[n], this.widgetFullName)) && o !== this && !o.options.disabled && (c.push([t.isFunction(o.options.items) ? o.options.items.call(o.element[0], e, {
                                        item: this.currentItem
                                    }) : t(o.options.items, o.element), o]),
                                    this.containers.push(o));
                        for (i = c.length - 1; i >= 0; i--)
                            for (a = c[i][1],
                            n = 0,
                            u = (l = c[i][0]).length; n < u; n++)
                                (h = t(l[n])).data(this.widgetName + "-item", a),
                                items.push({
                                    item: h,
                                    instance: a,
                                    width: 0,
                                    height: 0,
                                    left: 0,
                                    top: 0
                                })
                    },
                    refreshPositions: function(e) {
                        var i, n, s, o;
                        for (this.floating = !!this.items.length && ("x" === this.options.axis || this._isFloating(this.items[0].item)),
                        this.offsetParent && this.helper && (this.offset.parent = this._getParentOffset()),
                        i = this.items.length - 1; i >= 0; i--)
                            (n = this.items[i]).instance !== this.currentContainer && this.currentContainer && n.item[0] !== this.currentItem[0] || (s = this.options.toleranceElement ? t(this.options.toleranceElement, n.item) : n.item,
                            e || (n.width = s.outerWidth(),
                            n.height = s.outerHeight()),
                            o = s.offset(),
                            n.left = o.left,
                            n.top = o.top);
                        if (this.options.custom && this.options.custom.refreshContainers)
                            this.options.custom.refreshContainers.call(this);
                        else
                            for (i = this.containers.length - 1; i >= 0; i--)
                                o = this.containers[i].element.offset(),
                                this.containers[i].containerCache.left = o.left,
                                this.containers[i].containerCache.top = o.top,
                                this.containers[i].containerCache.width = this.containers[i].element.outerWidth(),
                                this.containers[i].containerCache.height = this.containers[i].element.outerHeight();
                        return this
                    },
                    _createPlaceholder: function(e) {
                        var i, n = (e = e || this).options;
                        n.placeholder && n.placeholder.constructor !== String || (i = n.placeholder,
                        n.placeholder = {
                            element: function() {
                                var n = e.currentItem[0].nodeName.toLowerCase()
                                  , s = t("<" + n + ">", e.document[0]).addClass(i || e.currentItem[0].className + " ui-sortable-placeholder").removeClass("ui-sortable-helper");
                                return "tbody" === n ? e._createTrPlaceholder(e.currentItem.find("tr").eq(0), t("<tr>", e.document[0]).appendTo(s)) : "tr" === n ? e._createTrPlaceholder(e.currentItem, s) : "img" === n && s.attr("src", e.currentItem.attr("src")),
                                i || s.css("visibility", "hidden"),
                                s
                            },
                            update: function(container, t) {
                                i && !n.forcePlaceholderSize || (t.height() || t.height(e.currentItem.innerHeight() - parseInt(e.currentItem.css("paddingTop") || 0, 10) - parseInt(e.currentItem.css("paddingBottom") || 0, 10)),
                                t.width() || t.width(e.currentItem.innerWidth() - parseInt(e.currentItem.css("paddingLeft") || 0, 10) - parseInt(e.currentItem.css("paddingRight") || 0, 10)))
                            }
                        }),
                        e.placeholder = t(n.placeholder.element.call(e.element, e.currentItem)),
                        e.currentItem.after(e.placeholder),
                        n.placeholder.update(e, e.placeholder)
                    },
                    _createTrPlaceholder: function(e, i) {
                        var n = this;
                        e.children().each((function() {
                            t("<td>&#160;</td>", n.document[0]).attr("colspan", t(this).attr("colspan") || 1).appendTo(i)
                        }
                        ))
                    },
                    _contactContainers: function(e) {
                        var i, n, s, o, a, l, h, u, c, p, f = null, m = null;
                        for (i = this.containers.length - 1; i >= 0; i--)
                            if (!t.contains(this.currentItem[0], this.containers[i].element[0]))
                                if (this._intersectsWith(this.containers[i].containerCache)) {
                                    if (f && t.contains(this.containers[i].element[0], f.element[0]))
                                        continue;
                                    f = this.containers[i],
                                    m = i
                                } else
                                    this.containers[i].containerCache.over && (this.containers[i]._trigger("out", e, this._uiHash(this)),
                                    this.containers[i].containerCache.over = 0);
                        if (f)
                            if (1 === this.containers.length)
                                this.containers[m].containerCache.over || (this.containers[m]._trigger("over", e, this._uiHash(this)),
                                this.containers[m].containerCache.over = 1);
                            else {
                                for (s = 1e4,
                                o = null,
                                a = (c = f.floating || this._isFloating(this.currentItem)) ? "left" : "top",
                                l = c ? "width" : "height",
                                p = c ? "clientX" : "clientY",
                                n = this.items.length - 1; n >= 0; n--)
                                    t.contains(this.containers[m].element[0], this.items[n].item[0]) && this.items[n].item[0] !== this.currentItem[0] && (h = this.items[n].item.offset()[a],
                                    u = false,
                                    e[p] - h > this.items[n][l] / 2 && (u = true),
                                    Math.abs(e[p] - h) < s && (s = Math.abs(e[p] - h),
                                    o = this.items[n],
                                    this.direction = u ? "up" : "down"));
                                if (!o && !this.options.dropOnEmpty)
                                    return;
                                if (this.currentContainer === this.containers[m])
                                    return this.currentContainer.containerCache.over || (this.containers[m]._trigger("over", e, this._uiHash()),
                                    this.currentContainer.containerCache.over = 1),
                                    void 0;
                                o ? this._rearrange(e, o, null, true) : this._rearrange(e, null, this.containers[m].element, true),
                                this._trigger("change", e, this._uiHash()),
                                this.containers[m]._trigger("change", e, this._uiHash(this)),
                                this.currentContainer = this.containers[m],
                                this.options.placeholder.update(this.currentContainer, this.placeholder),
                                this.containers[m]._trigger("over", e, this._uiHash(this)),
                                this.containers[m].containerCache.over = 1
                            }
                    },
                    _createHelper: function(e) {
                        var i = this.options
                          , helper = t.isFunction(i.helper) ? t(i.helper.apply(this.element[0], [e, this.currentItem])) : "clone" === i.helper ? this.currentItem.clone() : this.currentItem;
                        return helper.parents("body").length || t("parent" !== i.appendTo ? i.appendTo : this.currentItem[0].parentNode)[0].appendChild(helper[0]),
                        helper[0] === this.currentItem[0] && (this._storedCSS = {
                            width: this.currentItem[0].style.width,
                            height: this.currentItem[0].style.height,
                            position: this.currentItem.css("position"),
                            top: this.currentItem.css("top"),
                            left: this.currentItem.css("left")
                        }),
                        helper[0].style.width && !i.forceHelperSize || helper.width(this.currentItem.width()),
                        helper[0].style.height && !i.forceHelperSize || helper.height(this.currentItem.height()),
                        helper
                    },
                    _adjustOffsetFromHelper: function(e) {
                        "string" == typeof e && (e = e.split(" ")),
                        t.isArray(e) && (e = {
                            left: +e[0],
                            top: +e[1] || 0
                        }),
                        "left"in e && (this.offset.click.left = e.left + this.margins.left),
                        "right"in e && (this.offset.click.left = this.helperProportions.width - e.right + this.margins.left),
                        "top"in e && (this.offset.click.top = e.top + this.margins.top),
                        "bottom"in e && (this.offset.click.top = this.helperProportions.height - e.bottom + this.margins.top)
                    },
                    _getParentOffset: function() {
                        this.offsetParent = this.helper.offsetParent();
                        var e = this.offsetParent.offset();
                        return "absolute" === this.cssPosition && this.scrollParent[0] !== this.document[0] && t.contains(this.scrollParent[0], this.offsetParent[0]) && (e.left += this.scrollParent.scrollLeft(),
                        e.top += this.scrollParent.scrollTop()),
                        (this.offsetParent[0] === this.document[0].body || this.offsetParent[0].tagName && "html" === this.offsetParent[0].tagName.toLowerCase() && t.ui.ie) && (e = {
                            top: 0,
                            left: 0
                        }),
                        {
                            top: e.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
                            left: e.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
                        }
                    },
                    _getRelativeOffset: function() {
                        if ("relative" === this.cssPosition) {
                            var t = this.currentItem.position();
                            return {
                                top: t.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(),
                                left: t.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()
                            }
                        }
                        return {
                            top: 0,
                            left: 0
                        }
                    },
                    _cacheMargins: function() {
                        this.margins = {
                            left: parseInt(this.currentItem.css("marginLeft"), 10) || 0,
                            top: parseInt(this.currentItem.css("marginTop"), 10) || 0
                        }
                    },
                    _cacheHelperProportions: function() {
                        this.helperProportions = {
                            width: this.helper.outerWidth(),
                            height: this.helper.outerHeight()
                        }
                    },
                    _setContainment: function() {
                        var e, i, n, s = this.options;
                        "parent" === s.containment && (s.containment = this.helper[0].parentNode),
                        "document" !== s.containment && "window" !== s.containment || (this.containment = [0 - this.offset.relative.left - this.offset.parent.left, 0 - this.offset.relative.top - this.offset.parent.top, "document" === s.containment ? this.document.width() : this.window.width() - this.helperProportions.width - this.margins.left, ("document" === s.containment ? this.document.width() : this.window.height() || this.document[0].body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]),
                        /^(document|window|parent)$/.test(s.containment) || (e = t(s.containment)[0],
                        i = t(s.containment).offset(),
                        n = "hidden" !== t(e).css("overflow"),
                        this.containment = [i.left + (parseInt(t(e).css("borderLeftWidth"), 10) || 0) + (parseInt(t(e).css("paddingLeft"), 10) || 0) - this.margins.left, i.top + (parseInt(t(e).css("borderTopWidth"), 10) || 0) + (parseInt(t(e).css("paddingTop"), 10) || 0) - this.margins.top, i.left + (n ? Math.max(e.scrollWidth, e.offsetWidth) : e.offsetWidth) - (parseInt(t(e).css("borderLeftWidth"), 10) || 0) - (parseInt(t(e).css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left, i.top + (n ? Math.max(e.scrollHeight, e.offsetHeight) : e.offsetHeight) - (parseInt(t(e).css("borderTopWidth"), 10) || 0) - (parseInt(t(e).css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top])
                    },
                    _convertPositionTo: function(d, e) {
                        e || (e = this.position);
                        var i = "absolute" === d ? 1 : -1
                          , n = "absolute" !== this.cssPosition || this.scrollParent[0] !== this.document[0] && t.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent
                          , s = /(html|body)/i.test(n[0].tagName);
                        return {
                            top: e.top + this.offset.relative.top * i + this.offset.parent.top * i - ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : s ? 0 : n.scrollTop()) * i,
                            left: e.left + this.offset.relative.left * i + this.offset.parent.left * i - ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : s ? 0 : n.scrollLeft()) * i
                        }
                    },
                    _generatePosition: function(e) {
                        var i, n, s = this.options, o = e.pageX, a = e.pageY, l = "absolute" !== this.cssPosition || this.scrollParent[0] !== this.document[0] && t.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent, h = /(html|body)/i.test(l[0].tagName);
                        return "relative" !== this.cssPosition || this.scrollParent[0] !== this.document[0] && this.scrollParent[0] !== this.offsetParent[0] || (this.offset.relative = this._getRelativeOffset()),
                        this.originalPosition && (this.containment && (e.pageX - this.offset.click.left < this.containment[0] && (o = this.containment[0] + this.offset.click.left),
                        e.pageY - this.offset.click.top < this.containment[1] && (a = this.containment[1] + this.offset.click.top),
                        e.pageX - this.offset.click.left > this.containment[2] && (o = this.containment[2] + this.offset.click.left),
                        e.pageY - this.offset.click.top > this.containment[3] && (a = this.containment[3] + this.offset.click.top)),
                        s.grid && (i = this.originalPageY + Math.round((a - this.originalPageY) / s.grid[1]) * s.grid[1],
                        a = this.containment ? i - this.offset.click.top >= this.containment[1] && i - this.offset.click.top <= this.containment[3] ? i : i - this.offset.click.top >= this.containment[1] ? i - s.grid[1] : i + s.grid[1] : i,
                        n = this.originalPageX + Math.round((o - this.originalPageX) / s.grid[0]) * s.grid[0],
                        o = this.containment ? n - this.offset.click.left >= this.containment[0] && n - this.offset.click.left <= this.containment[2] ? n : n - this.offset.click.left >= this.containment[0] ? n - s.grid[0] : n + s.grid[0] : n)),
                        {
                            top: a - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : h ? 0 : l.scrollTop()),
                            left: o - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : h ? 0 : l.scrollLeft())
                        }
                    },
                    _rearrange: function(t, e, i, n) {
                        i ? i[0].appendChild(this.placeholder[0]) : e.item[0].parentNode.insertBefore(this.placeholder[0], "down" === this.direction ? e.item[0] : e.item[0].nextSibling),
                        this.counter = this.counter ? ++this.counter : 1;
                        var counter = this.counter;
                        this._delay((function() {
                            counter === this.counter && this.refreshPositions(!n)
                        }
                        ))
                    },
                    _clear: function(t, e) {
                        function i(type, instance, container) {
                            return function(t) {
                                container._trigger(type, t, instance._uiHash(instance))
                            }
                        }
                        this.reverting = false;
                        var n, s = [];
                        if (!this._noFinalSort && this.currentItem.parent().length && this.placeholder.before(this.currentItem),
                        this._noFinalSort = null,
                        this.helper[0] === this.currentItem[0]) {
                            for (n in this._storedCSS)
                                "auto" !== this._storedCSS[n] && "static" !== this._storedCSS[n] || (this._storedCSS[n] = "");
                            this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper")
                        } else
                            this.currentItem.show();
                        for (this.fromOutside && !e && s.push((function(t) {
                            this._trigger("receive", t, this._uiHash(this.fromOutside))
                        }
                        )),
                        !this.fromOutside && this.domPosition.prev === this.currentItem.prev().not(".ui-sortable-helper")[0] && this.domPosition.parent === this.currentItem.parent()[0] || e || s.push((function(t) {
                            this._trigger("update", t, this._uiHash())
                        }
                        )),
                        this !== this.currentContainer && (e || (s.push((function(t) {
                            this._trigger("remove", t, this._uiHash())
                        }
                        )),
                        s.push(function(t) {
                            return function(e) {
                                t._trigger("receive", e, this._uiHash(this))
                            }
                        }
                        .call(this, this.currentContainer)),
                        s.push(function(t) {
                            return function(e) {
                                t._trigger("update", e, this._uiHash(this))
                            }
                        }
                        .call(this, this.currentContainer)))),
                        n = this.containers.length - 1; n >= 0; n--)
                            e || s.push(i("deactivate", this, this.containers[n])),
                            this.containers[n].containerCache.over && (s.push(i("out", this, this.containers[n])),
                            this.containers[n].containerCache.over = 0);
                        if (this.storedCursor && (this.document.find("body").css("cursor", this.storedCursor),
                        this.storedStylesheet.remove()),
                        this._storedOpacity && this.helper.css("opacity", this._storedOpacity),
                        this._storedZIndex && this.helper.css("zIndex", "auto" === this._storedZIndex ? "" : this._storedZIndex),
                        this.dragging = false,
                        e || this._trigger("beforeStop", t, this._uiHash()),
                        this.placeholder[0].parentNode.removeChild(this.placeholder[0]),
                        this.cancelHelperRemoval || (this.helper[0] !== this.currentItem[0] && this.helper.remove(),
                        this.helper = null),
                        !e) {
                            for (n = 0; n < s.length; n++)
                                s[n].call(this, t);
                            this._trigger("stop", t, this._uiHash())
                        }
                        return this.fromOutside = false,
                        !this.cancelHelperRemoval
                    },
                    _trigger: function() {
                        false === t.Widget.prototype._trigger.apply(this, arguments) && this.cancel()
                    },
                    _uiHash: function(e) {
                        var i = e || this;
                        return {
                            helper: i.helper,
                            placeholder: i.placeholder || t([]),
                            position: i.position,
                            originalPosition: i.originalPosition,
                            offset: i.positionAbs,
                            item: i.currentItem,
                            sender: e ? e.element : null
                        }
                    }
                }), tt = t.widget("ui.spinner", {
                    version: "1.11.4",
                    defaultElement: "<input>",
                    widgetEventPrefix: "spin",
                    options: {
                        culture: null,
                        icons: {
                            down: "ui-icon-triangle-1-s",
                            up: "ui-icon-triangle-1-n"
                        },
                        incremental: true,
                        max: null,
                        min: null,
                        numberFormat: null,
                        page: 10,
                        step: 1,
                        change: null,
                        spin: null,
                        start: null,
                        stop: null
                    },
                    _create: function() {
                        this._setOption("max", this.options.max),
                        this._setOption("min", this.options.min),
                        this._setOption("step", this.options.step),
                        "" !== this.value() && this._value(this.element.val(), true),
                        this._draw(),
                        this._on(this._events),
                        this._refresh(),
                        this._on(this.window, {
                            beforeunload: function() {
                                this.element.removeAttr("autocomplete")
                            }
                        })
                    },
                    _getCreateOptions: function() {
                        var e = {}
                          , i = this.element;
                        return t.each(["min", "max", "step"], (function(t, n) {
                            var s = i.attr(n);
                            void 0 !== s && s.length && (e[n] = s)
                        }
                        )),
                        e
                    },
                    _events: {
                        keydown: function(t) {
                            this._start(t) && this._keydown(t) && t.preventDefault()
                        },
                        keyup: "_stop",
                        focus: function() {
                            this.previous = this.element.val()
                        },
                        blur: function(t) {
                            if (this.cancelBlur)
                                return delete this.cancelBlur,
                                void 0;
                            this._stop(),
                            this._refresh(),
                            this.previous !== this.element.val() && this._trigger("change", t)
                        },
                        mousewheel: function(t, e) {
                            if (e) {
                                if (!this.spinning && !this._start(t))
                                    return false;
                                this._spin((e > 0 ? 1 : -1) * this.options.step, t),
                                clearTimeout(this.mousewheelTimer),
                                this.mousewheelTimer = this._delay((function() {
                                    this.spinning && this._stop(t)
                                }
                                ), 100),
                                t.preventDefault()
                            }
                        },
                        "mousedown .ui-spinner-button": function(e) {
                            function i() {
                                var t;
                                this.element[0] === this.document[0].activeElement || (this.element.focus(),
                                this.previous = n,
                                this._delay((function() {
                                    this.previous = n
                                }
                                )))
                            }
                            var n;
                            n = this.element[0] === this.document[0].activeElement ? this.previous : this.element.val(),
                            e.preventDefault(),
                            i.call(this),
                            this.cancelBlur = true,
                            this._delay((function() {
                                delete this.cancelBlur,
                                i.call(this)
                            }
                            )),
                            false !== this._start(e) && this._repeat(null, t(e.currentTarget).hasClass("ui-spinner-up") ? 1 : -1, e)
                        },
                        "mouseup .ui-spinner-button": "_stop",
                        "mouseenter .ui-spinner-button": function(e) {
                            if (t(e.currentTarget).hasClass("ui-state-active"))
                                return false !== this._start(e) && (this._repeat(null, t(e.currentTarget).hasClass("ui-spinner-up") ? 1 : -1, e),
                                void 0)
                        },
                        "mouseleave .ui-spinner-button": "_stop"
                    },
                    _draw: function() {
                        var t = this.uiSpinner = this.element.addClass("ui-spinner-input").attr("autocomplete", "off").wrap(this._uiSpinnerHtml()).parent().append(this._buttonHtml());
                        this.element.attr("role", "spinbutton"),
                        this.buttons = t.find(".ui-spinner-button").attr("tabIndex", -1).button().removeClass("ui-corner-all"),
                        this.buttons.height() > Math.ceil(.5 * t.height()) && t.height() > 0 && t.height(t.height()),
                        this.options.disabled && this.disable()
                    },
                    _keydown: function(e) {
                        var i = this.options
                          , n = t.ui.keyCode;
                        switch (e.keyCode) {
                        case n.UP:
                            return this._repeat(null, 1, e),
                            true;
                        case n.DOWN:
                            return this._repeat(null, -1, e),
                            true;
                        case n.PAGE_UP:
                            return this._repeat(null, i.page, e),
                            true;
                        case n.PAGE_DOWN:
                            return this._repeat(null, -i.page, e),
                            true
                        }
                        return false
                    },
                    _uiSpinnerHtml: function() {
                        return "<span class='ui-spinner ui-widget ui-widget-content ui-corner-all'></span>"
                    },
                    _buttonHtml: function() {
                        return "<a class='ui-spinner-button ui-spinner-up ui-corner-tr'><span class='ui-icon " + this.options.icons.up + "'>&#9650;</span></a><a class='ui-spinner-button ui-spinner-down ui-corner-br'><span class='ui-icon " + this.options.icons.down + "'>&#9660;</span></a>"
                    },
                    _start: function(t) {
                        return !(!this.spinning && false === this._trigger("start", t)) && (this.counter || (this.counter = 1),
                        this.spinning = true,
                        true)
                    },
                    _repeat: function(t, e, i) {
                        t = t || 500,
                        clearTimeout(this.timer),
                        this.timer = this._delay((function() {
                            this._repeat(40, e, i)
                        }
                        ), t),
                        this._spin(e * this.options.step, i)
                    },
                    _spin: function(t, e) {
                        var i = this.value() || 0;
                        this.counter || (this.counter = 1),
                        i = this._adjustValue(i + t * this._increment(this.counter)),
                        this.spinning && false === this._trigger("spin", e, {
                            value: i
                        }) || (this._value(i),
                        this.counter++)
                    },
                    _increment: function(e) {
                        var i = this.options.incremental;
                        return i ? t.isFunction(i) ? i(e) : Math.floor(e * e * e / 5e4 - e * e / 500 + 17 * e / 200 + 1) : 1
                    },
                    _precision: function() {
                        var t = this._precisionOf(this.options.step);
                        return null !== this.options.min && (t = Math.max(t, this._precisionOf(this.options.min))),
                        t
                    },
                    _precisionOf: function(t) {
                        var e = t.toString()
                          , i = e.indexOf(".");
                        return -1 === i ? 0 : e.length - i - 1
                    },
                    _adjustValue: function(t) {
                        var base, e, i = this.options;
                        return e = t - (base = null !== i.min ? i.min : 0),
                        t = base + (e = Math.round(e / i.step) * i.step),
                        t = parseFloat(t.toFixed(this._precision())),
                        null !== i.max && t > i.max ? i.max : null !== i.min && t < i.min ? i.min : t
                    },
                    _stop: function(t) {
                        this.spinning && (clearTimeout(this.timer),
                        clearTimeout(this.mousewheelTimer),
                        this.counter = 0,
                        this.spinning = false,
                        this._trigger("stop", t))
                    },
                    _setOption: function(t, e) {
                        if ("culture" === t || "numberFormat" === t) {
                            var i = this._parse(this.element.val());
                            return this.options[t] = e,
                            this.element.val(this._format(i)),
                            void 0
                        }
                        "max" !== t && "min" !== t && "step" !== t || "string" == typeof e && (e = this._parse(e)),
                        "icons" === t && (this.buttons.first().find(".ui-icon").removeClass(this.options.icons.up).addClass(e.up),
                        this.buttons.last().find(".ui-icon").removeClass(this.options.icons.down).addClass(e.down)),
                        this._super(t, e),
                        "disabled" === t && (this.widget().toggleClass("ui-state-disabled", !!e),
                        this.element.prop("disabled", !!e),
                        this.buttons.button(e ? "disable" : "enable"))
                    },
                    _setOptions: l((function(t) {
                        this._super(t)
                    }
                    )),
                    _parse: function(t) {
                        return "string" == typeof t && "" !== t && (t = window.Globalize && this.options.numberFormat ? Globalize.parseFloat(t, 10, this.options.culture) : +t),
                        "" === t || isNaN(t) ? null : t
                    },
                    _format: function(t) {
                        return "" === t ? "" : window.Globalize && this.options.numberFormat ? Globalize.format(t, this.options.numberFormat, this.options.culture) : t
                    },
                    _refresh: function() {
                        this.element.attr({
                            "aria-valuemin": this.options.min,
                            "aria-valuemax": this.options.max,
                            "aria-valuenow": this._parse(this.element.val())
                        })
                    },
                    isValid: function() {
                        var t = this.value();
                        return null !== t && t === this._adjustValue(t)
                    },
                    _value: function(t, e) {
                        var i;
                        "" !== t && null !== (i = this._parse(t)) && (e || (i = this._adjustValue(i)),
                        t = this._format(i)),
                        this.element.val(t),
                        this._refresh()
                    },
                    _destroy: function() {
                        this.element.removeClass("ui-spinner-input").prop("disabled", false).removeAttr("autocomplete").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow"),
                        this.uiSpinner.replaceWith(this.element)
                    },
                    stepUp: l((function(t) {
                        this._stepUp(t)
                    }
                    )),
                    _stepUp: function(t) {
                        this._start() && (this._spin((t || 1) * this.options.step),
                        this._stop())
                    },
                    stepDown: l((function(t) {
                        this._stepDown(t)
                    }
                    )),
                    _stepDown: function(t) {
                        this._start() && (this._spin((t || 1) * -this.options.step),
                        this._stop())
                    },
                    pageUp: l((function(pages) {
                        this._stepUp((pages || 1) * this.options.page)
                    }
                    )),
                    pageDown: l((function(pages) {
                        this._stepDown((pages || 1) * this.options.page)
                    }
                    )),
                    value: function(t) {
                        if (!arguments.length)
                            return this._parse(this.element.val());
                        l(this._value).call(this, t)
                    },
                    widget: function() {
                        return this.uiSpinner
                    }
                }), tabs = t.widget("ui.tabs", {
                    version: "1.11.4",
                    delay: 300,
                    options: {
                        active: null,
                        collapsible: false,
                        event: "click",
                        heightStyle: "content",
                        hide: null,
                        show: null,
                        activate: null,
                        beforeActivate: null,
                        beforeLoad: null,
                        load: null
                    },
                    _isLocal: (nt = /#.*$/,
                    function(t) {
                        var e, i;
                        e = (t = t.cloneNode(false)).href.replace(nt, ""),
                        i = location.href.replace(nt, "");
                        try {
                            e = decodeURIComponent(e)
                        } catch (t) {}
                        try {
                            i = decodeURIComponent(i)
                        } catch (t) {}
                        return t.hash.length > 1 && e === i
                    }
                    ),
                    _create: function() {
                        var e = this
                          , i = this.options;
                        this.running = false,
                        this.element.addClass("ui-tabs ui-widget ui-widget-content ui-corner-all").toggleClass("ui-tabs-collapsible", i.collapsible),
                        this._processTabs(),
                        i.active = this._initialActive(),
                        t.isArray(i.disabled) && (i.disabled = t.unique(i.disabled.concat(t.map(this.tabs.filter(".ui-state-disabled"), (function(t) {
                            return e.tabs.index(t)
                        }
                        )))).sort()),
                        false !== this.options.active && this.anchors.length ? this.active = this._findActive(i.active) : this.active = t(),
                        this._refresh(),
                        this.active.length && this.load(i.active)
                    },
                    _initialActive: function() {
                        var e = this.options.active
                          , i = this.options.collapsible
                          , n = location.hash.substring(1);
                        return null === e && (n && this.tabs.each((function(i, s) {
                            if (t(s).attr("aria-controls") === n)
                                return e = i,
                                false
                        }
                        )),
                        null === e && (e = this.tabs.index(this.tabs.filter(".ui-tabs-active"))),
                        null !== e && -1 !== e || (e = !!this.tabs.length && 0)),
                        false !== e && -1 === (e = this.tabs.index(this.tabs.eq(e))) && (e = !i && 0),
                        !i && false === e && this.anchors.length && (e = 0),
                        e
                    },
                    _getCreateEventData: function() {
                        return {
                            tab: this.active,
                            panel: this.active.length ? this._getPanelForTab(this.active) : t()
                        }
                    },
                    _tabKeydown: function(e) {
                        var i = t(this.document[0].activeElement).closest("li")
                          , n = this.tabs.index(i)
                          , s = true;
                        if (!this._handlePageNav(e)) {
                            switch (e.keyCode) {
                            case t.ui.keyCode.RIGHT:
                            case t.ui.keyCode.DOWN:
                                n++;
                                break;
                            case t.ui.keyCode.UP:
                            case t.ui.keyCode.LEFT:
                                s = false,
                                n--;
                                break;
                            case t.ui.keyCode.END:
                                n = this.anchors.length - 1;
                                break;
                            case t.ui.keyCode.HOME:
                                n = 0;
                                break;
                            case t.ui.keyCode.SPACE:
                                return e.preventDefault(),
                                clearTimeout(this.activating),
                                this._activate(n),
                                void 0;
                            case t.ui.keyCode.ENTER:
                                return e.preventDefault(),
                                clearTimeout(this.activating),
                                this._activate(n !== this.options.active && n),
                                void 0;
                            default:
                                return
                            }
                            e.preventDefault(),
                            clearTimeout(this.activating),
                            n = this._focusNextTab(n, s),
                            e.ctrlKey || e.metaKey || (i.attr("aria-selected", "false"),
                            this.tabs.eq(n).attr("aria-selected", "true"),
                            this.activating = this._delay((function() {
                                this.option("active", n)
                            }
                            ), this.delay))
                        }
                    },
                    _panelKeydown: function(e) {
                        this._handlePageNav(e) || e.ctrlKey && e.keyCode === t.ui.keyCode.UP && (e.preventDefault(),
                        this.active.focus())
                    },
                    _handlePageNav: function(e) {
                        return e.altKey && e.keyCode === t.ui.keyCode.PAGE_UP ? (this._activate(this._focusNextTab(this.options.active - 1, false)),
                        true) : e.altKey && e.keyCode === t.ui.keyCode.PAGE_DOWN ? (this._activate(this._focusNextTab(this.options.active + 1, true)),
                        true) : void 0
                    },
                    _findNextTab: function(index, e) {
                        function i() {
                            return index > n && (index = 0),
                            index < 0 && (index = n),
                            index
                        }
                        for (var n = this.tabs.length - 1; -1 !== t.inArray(i(), this.options.disabled); )
                            index = e ? index + 1 : index - 1;
                        return index
                    },
                    _focusNextTab: function(index, t) {
                        return index = this._findNextTab(index, t),
                        this.tabs.eq(index).focus(),
                        index
                    },
                    _setOption: function(t, e) {
                        return "active" === t ? (this._activate(e),
                        void 0) : "disabled" === t ? (this._setupDisabled(e),
                        void 0) : (this._super(t, e),
                        "collapsible" === t && (this.element.toggleClass("ui-tabs-collapsible", e),
                        e || false !== this.options.active || this._activate(0)),
                        "event" === t && this._setupEvents(e),
                        "heightStyle" === t && this._setupHeightStyle(e),
                        void 0)
                    },
                    _sanitizeSelector: function(hash) {
                        return hash ? hash.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g, "\\$&") : ""
                    },
                    refresh: function() {
                        var e = this.options
                          , i = this.tablist.children(":has(a[href])");
                        e.disabled = t.map(i.filter(".ui-state-disabled"), (function(t) {
                            return i.index(t)
                        }
                        )),
                        this._processTabs(),
                        false !== e.active && this.anchors.length ? this.active.length && !t.contains(this.tablist[0], this.active[0]) ? this.tabs.length === e.disabled.length ? (e.active = false,
                        this.active = t()) : this._activate(this._findNextTab(Math.max(0, e.active - 1), false)) : e.active = this.tabs.index(this.active) : (e.active = false,
                        this.active = t()),
                        this._refresh()
                    },
                    _refresh: function() {
                        this._setupDisabled(this.options.disabled),
                        this._setupEvents(this.options.event),
                        this._setupHeightStyle(this.options.heightStyle),
                        this.tabs.not(this.active).attr({
                            "aria-selected": "false",
                            "aria-expanded": "false",
                            tabIndex: -1
                        }),
                        this.panels.not(this._getPanelForTab(this.active)).hide().attr({
                            "aria-hidden": "true"
                        }),
                        this.active.length ? (this.active.addClass("ui-tabs-active ui-state-active").attr({
                            "aria-selected": "true",
                            "aria-expanded": "true",
                            tabIndex: 0
                        }),
                        this._getPanelForTab(this.active).show().attr({
                            "aria-hidden": "false"
                        })) : this.tabs.eq(0).attr("tabIndex", 0)
                    },
                    _processTabs: function() {
                        var e = this
                          , i = this.tabs
                          , n = this.anchors
                          , s = this.panels;
                        this.tablist = this._getList().addClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").attr("role", "tablist").delegate("> li", "mousedown" + this.eventNamespace, (function(e) {
                            t(this).is(".ui-state-disabled") && e.preventDefault()
                        }
                        )).delegate(".ui-tabs-anchor", "focus" + this.eventNamespace, (function() {
                            t(this).closest("li").is(".ui-state-disabled") && this.blur()
                        }
                        )),
                        this.tabs = this.tablist.find("> li:has(a[href])").addClass("ui-state-default ui-corner-top").attr({
                            role: "tab",
                            tabIndex: -1
                        }),
                        this.anchors = this.tabs.map((function() {
                            return t("a", this)[0]
                        }
                        )).addClass("ui-tabs-anchor").attr({
                            role: "presentation",
                            tabIndex: -1
                        }),
                        this.panels = t(),
                        this.anchors.each((function(i, n) {
                            var selector, panel, s, o = t(n).uniqueId().attr("id"), a = t(n).closest("li"), l = a.attr("aria-controls");
                            e._isLocal(n) ? (s = (selector = n.hash).substring(1),
                            panel = e.element.find(e._sanitizeSelector(selector))) : (selector = "#" + (s = a.attr("aria-controls") || t({}).uniqueId()[0].id),
                            (panel = e.element.find(selector)).length || (panel = e._createPanel(s)).insertAfter(e.panels[i - 1] || e.tablist),
                            panel.attr("aria-live", "polite")),
                            panel.length && (e.panels = e.panels.add(panel)),
                            l && a.data("ui-tabs-aria-controls", l),
                            a.attr({
                                "aria-controls": s,
                                "aria-labelledby": o
                            }),
                            panel.attr("aria-labelledby", o)
                        }
                        )),
                        this.panels.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").attr("role", "tabpanel"),
                        i && (this._off(i.not(this.tabs)),
                        this._off(n.not(this.anchors)),
                        this._off(s.not(this.panels)))
                    },
                    _getList: function() {
                        return this.tablist || this.element.find("ol,ul").eq(0)
                    },
                    _createPanel: function(id) {
                        return t("<div>").attr("id", id).addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").data("ui-tabs-destroy", true)
                    },
                    _setupDisabled: function(e) {
                        t.isArray(e) && (e.length ? e.length === this.anchors.length && (e = true) : e = false);
                        for (var i = 0, n; n = this.tabs[i]; i++)
                            true === e || -1 !== t.inArray(i, e) ? t(n).addClass("ui-state-disabled").attr("aria-disabled", "true") : t(n).removeClass("ui-state-disabled").removeAttr("aria-disabled");
                        this.options.disabled = e
                    },
                    _setupEvents: function(e) {
                        var events = {};
                        e && t.each(e.split(" "), (function(index, t) {
                            events[t] = "_eventHandler"
                        }
                        )),
                        this._off(this.anchors.add(this.tabs).add(this.panels)),
                        this._on(true, this.anchors, {
                            click: function(t) {
                                t.preventDefault()
                            }
                        }),
                        this._on(this.anchors, events),
                        this._on(this.tabs, {
                            keydown: "_tabKeydown"
                        }),
                        this._on(this.panels, {
                            keydown: "_panelKeydown"
                        }),
                        this._focusable(this.tabs),
                        this._hoverable(this.tabs)
                    },
                    _setupHeightStyle: function(e) {
                        var i, n = this.element.parent();
                        "fill" === e ? (i = n.height(),
                        i -= this.element.outerHeight() - this.element.height(),
                        this.element.siblings(":visible").each((function() {
                            var e = t(this)
                              , position = e.css("position");
                            "absolute" !== position && "fixed" !== position && (i -= e.outerHeight(true))
                        }
                        )),
                        this.element.children().not(this.panels).each((function() {
                            i -= t(this).outerHeight(true)
                        }
                        )),
                        this.panels.each((function() {
                            t(this).height(Math.max(0, i - t(this).innerHeight() + t(this).height()))
                        }
                        )).css("overflow", "auto")) : "auto" === e && (i = 0,
                        this.panels.each((function() {
                            i = Math.max(i, t(this).height("").height())
                        }
                        )).height(i))
                    },
                    _eventHandler: function(e) {
                        var i = this.options, n = this.active, s, o = t(e.currentTarget).closest("li"), a = o[0] === n[0], l = a && i.collapsible, h = l ? t() : this._getPanelForTab(o), u = n.length ? this._getPanelForTab(n) : t(), c = {
                            oldTab: n,
                            oldPanel: u,
                            newTab: l ? t() : o,
                            newPanel: h
                        };
                        e.preventDefault(),
                        o.hasClass("ui-state-disabled") || o.hasClass("ui-tabs-loading") || this.running || a && !i.collapsible || false === this._trigger("beforeActivate", e, c) || (i.active = !l && this.tabs.index(o),
                        this.active = a ? t() : o,
                        this.xhr && this.xhr.abort(),
                        u.length || h.length || t.error("jQuery UI Tabs: Mismatching fragment identifier."),
                        h.length && this.load(this.tabs.index(o), e),
                        this._toggle(e, c))
                    },
                    _toggle: function(e, i) {
                        function n() {
                            s.running = false,
                            s._trigger("activate", e, i)
                        }
                        function show() {
                            i.newTab.closest("li").addClass("ui-tabs-active ui-state-active"),
                            o.length && s.options.show ? s._show(o, s.options.show, n) : (o.show(),
                            n())
                        }
                        var s = this
                          , o = i.newPanel
                          , a = i.oldPanel;
                        this.running = true,
                        a.length && this.options.hide ? this._hide(a, this.options.hide, (function() {
                            i.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"),
                            show()
                        }
                        )) : (i.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"),
                        a.hide(),
                        show()),
                        a.attr("aria-hidden", "true"),
                        i.oldTab.attr({
                            "aria-selected": "false",
                            "aria-expanded": "false"
                        }),
                        o.length && a.length ? i.oldTab.attr("tabIndex", -1) : o.length && this.tabs.filter((function() {
                            return 0 === t(this).attr("tabIndex")
                        }
                        )).attr("tabIndex", -1),
                        o.attr("aria-hidden", "false"),
                        i.newTab.attr({
                            "aria-selected": "true",
                            "aria-expanded": "true",
                            tabIndex: 0
                        })
                    },
                    _activate: function(index) {
                        var e, i = this._findActive(index);
                        i[0] !== this.active[0] && (i.length || (i = this.active),
                        e = i.find(".ui-tabs-anchor")[0],
                        this._eventHandler({
                            target: e,
                            currentTarget: e,
                            preventDefault: t.noop
                        }))
                    },
                    _findActive: function(index) {
                        return false === index ? t() : this.tabs.eq(index)
                    },
                    _getIndex: function(index) {
                        return "string" == typeof index && (index = this.anchors.index(this.anchors.filter("[href$='" + index + "']"))),
                        index
                    },
                    _destroy: function() {
                        this.xhr && this.xhr.abort(),
                        this.element.removeClass("ui-tabs ui-widget ui-widget-content ui-corner-all ui-tabs-collapsible"),
                        this.tablist.removeClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").removeAttr("role"),
                        this.anchors.removeClass("ui-tabs-anchor").removeAttr("role").removeAttr("tabIndex").removeUniqueId(),
                        this.tablist.unbind(this.eventNamespace),
                        this.tabs.add(this.panels).each((function() {
                            t.data(this, "ui-tabs-destroy") ? t(this).remove() : t(this).removeClass("ui-state-default ui-state-active ui-state-disabled ui-corner-top ui-corner-bottom ui-widget-content ui-tabs-active ui-tabs-panel").removeAttr("tabIndex").removeAttr("aria-live").removeAttr("aria-busy").removeAttr("aria-selected").removeAttr("aria-labelledby").removeAttr("aria-hidden").removeAttr("aria-expanded").removeAttr("role")
                        }
                        )),
                        this.tabs.each((function() {
                            var e = t(this)
                              , i = e.data("ui-tabs-aria-controls");
                            i ? e.attr("aria-controls", i).removeData("ui-tabs-aria-controls") : e.removeAttr("aria-controls")
                        }
                        )),
                        this.panels.show(),
                        "content" !== this.options.heightStyle && this.panels.css("height", "")
                    },
                    enable: function(index) {
                        var e = this.options.disabled;
                        false !== e && (void 0 === index ? e = false : (index = this._getIndex(index),
                        e = t.isArray(e) ? t.map(e, (function(t) {
                            return t !== index ? t : null
                        }
                        )) : t.map(this.tabs, (function(t, e) {
                            return e !== index ? e : null
                        }
                        ))),
                        this._setupDisabled(e))
                    },
                    disable: function(index) {
                        var e = this.options.disabled;
                        if (true !== e) {
                            if (void 0 === index)
                                e = true;
                            else {
                                if (index = this._getIndex(index),
                                -1 !== t.inArray(index, e))
                                    return;
                                e = t.isArray(e) ? t.merge([index], e).sort() : [index]
                            }
                            this._setupDisabled(e)
                        }
                    },
                    load: function(index, e) {
                        index = this._getIndex(index);
                        var i = this
                          , n = this.tabs.eq(index)
                          , s = n.find(".ui-tabs-anchor")
                          , panel = this._getPanelForTab(n)
                          , o = {
                            tab: n,
                            panel: panel
                        }
                          , a = function(t, e) {
                            "abort" === e && i.panels.stop(false, true),
                            n.removeClass("ui-tabs-loading"),
                            panel.removeAttr("aria-busy"),
                            t === i.xhr && delete i.xhr
                        };
                        this._isLocal(s[0]) || (this.xhr = t.ajax(this._ajaxSettings(s, e, o)),
                        this.xhr && "canceled" !== this.xhr.statusText && (n.addClass("ui-tabs-loading"),
                        panel.attr("aria-busy", "true"),
                        this.xhr.done((function(t, n, s) {
                            setTimeout((function() {
                                panel.html(t),
                                i._trigger("load", e, o),
                                a(s, n)
                            }
                            ), 1)
                        }
                        )).fail((function(t, e) {
                            setTimeout((function() {
                                a(t, e)
                            }
                            ), 1)
                        }
                        ))))
                    },
                    _ajaxSettings: function(e, i, n) {
                        var s = this;
                        return {
                            url: e.attr("href"),
                            beforeSend: function(e, settings) {
                                return s._trigger("beforeLoad", i, t.extend({
                                    jqXHR: e,
                                    ajaxSettings: settings
                                }, n))
                            }
                        }
                    },
                    _getPanelForTab: function(e) {
                        var id = t(e).attr("aria-controls");
                        return this.element.find(this._sanitizeSelector("#" + id))
                    }
                }), nt, tooltip = t.widget("ui.tooltip", {
                    version: "1.11.4",
                    options: {
                        content: function() {
                            var title = t(this).attr("title") || "";
                            return t("<a>").text(title).html()
                        },
                        hide: true,
                        items: "[title]:not([disabled])",
                        position: {
                            my: "left top+15",
                            at: "left bottom",
                            collision: "flipfit flip"
                        },
                        show: true,
                        tooltipClass: null,
                        track: false,
                        close: null,
                        open: null
                    },
                    _addDescribedBy: function(e, id) {
                        var i = (e.attr("aria-describedby") || "").split(/\s+/);
                        i.push(id),
                        e.data("ui-tooltip-id", id).attr("aria-describedby", t.trim(i.join(" ")))
                    },
                    _removeDescribedBy: function(e) {
                        var id = e.data("ui-tooltip-id")
                          , i = (e.attr("aria-describedby") || "").split(/\s+/)
                          , index = t.inArray(id, i);
                        -1 !== index && i.splice(index, 1),
                        e.removeData("ui-tooltip-id"),
                        (i = t.trim(i.join(" "))) ? e.attr("aria-describedby", i) : e.removeAttr("aria-describedby")
                    },
                    _create: function() {
                        this._on({
                            mouseover: "open",
                            focusin: "open"
                        }),
                        this.tooltips = {},
                        this.parents = {},
                        this.options.disabled && this._disable(),
                        this.liveRegion = t("<div>").attr({
                            role: "log",
                            "aria-live": "assertive",
                            "aria-relevant": "additions"
                        }).addClass("ui-helper-hidden-accessible").appendTo(this.document[0].body)
                    },
                    _setOption: function(e, i) {
                        var n = this;
                        if ("disabled" === e)
                            return this[i ? "_disable" : "_enable"](),
                            this.options[e] = i,
                            void 0;
                        this._super(e, i),
                        "content" === e && t.each(this.tooltips, (function(id, t) {
                            n._updateContent(t.element)
                        }
                        ))
                    },
                    _disable: function() {
                        var e = this;
                        t.each(this.tooltips, (function(id, i) {
                            var n = t.Event("blur");
                            n.target = n.currentTarget = i.element[0],
                            e.close(n, true)
                        }
                        )),
                        this.element.find(this.options.items).addBack().each((function() {
                            var e = t(this);
                            e.is("[title]") && e.data("ui-tooltip-title", e.attr("title")).removeAttr("title")
                        }
                        ))
                    },
                    _enable: function() {
                        this.element.find(this.options.items).addBack().each((function() {
                            var e = t(this);
                            e.data("ui-tooltip-title") && e.attr("title", e.data("ui-tooltip-title"))
                        }
                        ))
                    },
                    open: function(e) {
                        var i = this
                          , n = t(e ? e.target : this.element).closest(this.options.items);
                        n.length && !n.data("ui-tooltip-id") && (n.attr("title") && n.data("ui-tooltip-title", n.attr("title")),
                        n.data("ui-tooltip-open", true),
                        e && "mouseover" === e.type && n.parents().each((function() {
                            var e = t(this), n;
                            e.data("ui-tooltip-open") && ((n = t.Event("blur")).target = n.currentTarget = this,
                            i.close(n, true)),
                            e.attr("title") && (e.uniqueId(),
                            i.parents[this.id] = {
                                element: this,
                                title: e.attr("title")
                            },
                            e.attr("title", ""))
                        }
                        )),
                        this._registerCloseHandlers(e, n),
                        this._updateContent(n, e))
                    },
                    _updateContent: function(t, e) {
                        var i, n = this.options.content, s = this, o = e ? e.type : null;
                        if ("string" == typeof n)
                            return this._open(e, t, n);
                        (i = n.call(t[0], (function(i) {
                            s._delay((function() {
                                t.data("ui-tooltip-open") && (e && (e.type = o),
                                this._open(e, t, i))
                            }
                            ))
                        }
                        ))) && this._open(e, t, i)
                    },
                    _open: function(e, i, n) {
                        function position(t) {
                            l.of = t,
                            tooltip.is(":hidden") || tooltip.position(l)
                        }
                        var s, tooltip, o, a, l = t.extend({}, this.options.position);
                        if (n) {
                            if (s = this._find(i))
                                return s.tooltip.find(".ui-tooltip-content").html(n),
                                void 0;
                            i.is("[title]") && (e && "mouseover" === e.type ? i.attr("title", "") : i.removeAttr("title")),
                            s = this._tooltip(i),
                            tooltip = s.tooltip,
                            this._addDescribedBy(i, tooltip.attr("id")),
                            tooltip.find(".ui-tooltip-content").html(n),
                            this.liveRegion.children().hide(),
                            n.clone ? (a = n.clone()).removeAttr("id").find("[id]").removeAttr("id") : a = n,
                            t("<div>").html(a).appendTo(this.liveRegion),
                            this.options.track && e && /^mouse/.test(e.type) ? (this._on(this.document, {
                                mousemove: position
                            }),
                            position(e)) : tooltip.position(t.extend({
                                of: i
                            }, this.options.position)),
                            tooltip.hide(),
                            this._show(tooltip, this.options.show),
                            this.options.show && this.options.show.delay && (o = this.delayedShow = setInterval((function() {
                                tooltip.is(":visible") && (position(l.of),
                                clearInterval(o))
                            }
                            ), t.fx.interval)),
                            this._trigger("open", e, {
                                tooltip: tooltip
                            })
                        }
                    },
                    _registerCloseHandlers: function(e, i) {
                        var events = {
                            keyup: function(e) {
                                if (e.keyCode === t.ui.keyCode.ESCAPE) {
                                    var n = t.Event(e);
                                    n.currentTarget = i[0],
                                    this.close(n, true)
                                }
                            }
                        };
                        i[0] !== this.element[0] && (events.remove = function() {
                            this._removeTooltip(this._find(i).tooltip)
                        }
                        ),
                        e && "mouseover" !== e.type || (events.mouseleave = "close"),
                        e && "focusin" !== e.type || (events.focusout = "close"),
                        this._on(true, i, events)
                    },
                    close: function(e) {
                        var tooltip, i = this, n = t(e ? e.currentTarget : this.element), s = this._find(n);
                        if (!s)
                            return n.removeData("ui-tooltip-open"),
                            void 0;
                        tooltip = s.tooltip,
                        s.closing || (clearInterval(this.delayedShow),
                        n.data("ui-tooltip-title") && !n.attr("title") && n.attr("title", n.data("ui-tooltip-title")),
                        this._removeDescribedBy(n),
                        s.hiding = true,
                        tooltip.stop(true),
                        this._hide(tooltip, this.options.hide, (function() {
                            i._removeTooltip(t(this))
                        }
                        )),
                        n.removeData("ui-tooltip-open"),
                        this._off(n, "mouseleave focusout keyup"),
                        n[0] !== this.element[0] && this._off(n, "remove"),
                        this._off(this.document, "mousemove"),
                        e && "mouseleave" === e.type && t.each(this.parents, (function(id, e) {
                            t(e.element).attr("title", e.title),
                            delete i.parents[id]
                        }
                        )),
                        s.closing = true,
                        this._trigger("close", e, {
                            tooltip: tooltip
                        }),
                        s.hiding || (s.closing = false))
                    },
                    _tooltip: function(e) {
                        var tooltip = t("<div>").attr("role", "tooltip").addClass("ui-tooltip ui-widget ui-corner-all ui-widget-content " + (this.options.tooltipClass || ""))
                          , id = tooltip.uniqueId().attr("id");
                        return t("<div>").addClass("ui-tooltip-content").appendTo(tooltip),
                        tooltip.appendTo(this.document[0].body),
                        this.tooltips[id] = {
                            element: e,
                            tooltip: tooltip
                        }
                    },
                    _find: function(t) {
                        var id = t.data("ui-tooltip-id");
                        return id ? this.tooltips[id] : null
                    },
                    _removeTooltip: function(tooltip) {
                        tooltip.remove(),
                        delete this.tooltips[tooltip.attr("id")]
                    },
                    _destroy: function() {
                        var e = this;
                        t.each(this.tooltips, (function(id, i) {
                            var n = t.Event("blur")
                              , s = i.element;
                            n.target = n.currentTarget = s[0],
                            e.close(n, true),
                            t("#" + id).remove(),
                            s.data("ui-tooltip-title") && (s.attr("title") || s.attr("title", s.data("ui-tooltip-title")),
                            s.removeData("ui-tooltip-title"))
                        }
                        )),
                        this.liveRegion.remove()
                    }
                });
                /*!
 * jQuery UI Effects Blind 1.11.4
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/blind-effect/
 */
            }
            ,
            void ("function" == typeof define && define.amd ? define(["jquery"], factory) : factory(jQuery))
        }
        ).call(window)
    },
    605: function(t, e) {
        var e = void 0
          , t = void 0;
        (function() {
            var t = void 0, e, i, n;
            $.ui.intersect = function() {
                function t(t, e, size) {
                    return t >= e && t < e + size
                }
                return function(draggable, e, i, n) {
                    function s() {
                        o = f.left,
                        a = f.top,
                        l = f.right,
                        h = f.bottom,
                        u = m.left,
                        c = m.top,
                        r = m.right,
                        p = m.bottom
                    }
                    if (!e.offset)
                        return false;
                    var o = (draggable.positionAbs || draggable.position.absolute).left + draggable.margins.left
                      , a = (draggable.positionAbs || draggable.position.absolute).top + draggable.margins.top
                      , l = o + draggable.helperProportions.width
                      , h = a + draggable.helperProportions.height
                      , u = e.offset.left
                      , c = e.offset.top
                      , r = u + e.proportions().width
                      , p = c + e.proportions().height
                      , f = draggable.helper.upage("boundingClientRect")
                      , m = e.element.upage("boundingClientRect");
                    switch (i) {
                    case "square":
                        var g = draggable.helper[0]
                          , baseRect = g.getBoundingClientRect()
                          , v = IntersectionHelper.calcIntersect(baseRect, draggable.element.parents(":layout")[0].getBoundingClientRect())
                          , b = 0
                          , y = null;
                        return $.ui.ddmanager.droppables[draggable.options.scope].map((function(t) {
                            var e = t.element[0]
                              , rect = e.getBoundingClientRect()
                              , i = IntersectionHelper.calcIntersect(rect, baseRect);
                            g !== e && (v -= i,
                            b < i && (b = i,
                            y = t))
                        }
                        )),
                        b <= v && (y = null),
                        y === e;
                    case "fit":
                        return u <= o && l <= r && c <= a && h <= p;
                    case "intersect":
                        return s(),
                        u < o + f.width / 2 && l - f.width / 2 < r && c < a + f.height / 2 && h - f.height / 2 < p;
                    case "pointer":
                        var rect = e.element[0].getBoundingClientRect();
                        return t(n.clientY, rect.top, rect.height) && t(n.clientX, rect.left, rect.width);
                    case "touch":
                        return (a >= c && a <= p || h >= c && h <= p || a < c && h > p) && (o >= u && o <= r || l >= u && l <= r || o < u && l > r);
                    default:
                        return false
                    }
                }
            }(),
            $.ui.plugin.add("draggable", "stack", {
                stop: function(t, e, instance) {
                    var i = instance.options
                      , group = $.makeArray($(i.stack)).sort((function(t, e) {
                        return (parseInt($(t).css("zIndex"), 10) || 0) - (parseInt($(e).css("zIndex"), 10) || 0)
                    }
                    ));
                    group.length && ($(group).each((function() {
                        $(this).css("zIndex", "")
                    }
                    )),
                    this.css("zIndex", ""))
                }
            }),
            e = jQuery.acceptData,
            jQuery.acceptData = function(t) {
                return t.nodeType === Node.TEXT_NODE || e(t)
            }
            ,
            jQuery.expr.cacheLength = 5e5,
            function() {
                function t() {
                    function cache(i, n) {
                        return t.push(i + " ") > e && delete cache[t.shift()],
                        cache[i + " "] = n
                    }
                    var t = [];
                    return cache
                }
                var e = jQuery.expr.cacheLength
                  , i = "undefined"
                  , n = t()
                  , s = "[\\x20\\t\\r\\n\\f]"
                  , o = new RegExp("\\\\([\\da-f]{1,6}[\\x20\\t\\r\\n\\f]?|([\\x20\\t\\r\\n\\f])|.)","ig")
                  , a = function(t, e, i) {
                    var n = "0x" + e - 65536;
                    return n != n || i ? e : n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320)
                };
                $.expr.filter.CLASS = function(t) {
                    var e = n[t + " "];
                    return e || (e = new RegExp("(^|[\\x20\\t\\r\\n\\f])" + t + "(" + s + "|$)")) && n(t, (function(n) {
                        var s = n.classList;
                        return s ? s.contains(t) : e.test("string" == typeof n.className && n.className || typeof n.getAttribute !== i && n.getAttribute("class") || "")
                    }
                    ))
                }
                ,
                $.expr.filter.TAG = function(t) {
                    var e = t.replace(o, a)
                      , i = e.toUpperCase()
                      , n = e.toLowerCase();
                    return "*" === t ? function() {
                        return true
                    }
                    : function(t) {
                        return t.tagName === i || t.tagName === n
                    }
                }
            }(),
            function() {
                var t = $.extend;
                jQuery.extend = function() {
                    var e = Array.prototype.slice.call(arguments)
                      , i = -1 !== navigator.userAgent.toLowerCase().indexOf("firefox");
                    return "undefined" != typeof DOMRect && e[1]instanceof DOMRect ? e.push({
                        toJSON: null,
                        x: null,
                        y: null
                    }) : !i && "undefined" != typeof ClientRect && e[1]instanceof ClientRect && e.push({
                        toJSON: null
                    }),
                    t.apply(this, e)
                }
                ;
                var e = $.fn.modal.Constructor.prototype.enforceFocus;
                $.fn.modal.Constructor.prototype.enforceFocus = function() {
                    false !== this.options.backdrop && e.call(this)
                }
                ;
                var i = $.ui.slider.prototype.value;
                $.ui.slider.prototype.value = function(t) {
                    return this.options.editable ? arguments.length ? (this.options.value = t,
                    this._refreshValue(),
                    this._change(null, 0),
                    void 0) : this.options.value : i.apply(this, arguments)
                }
            }(),
            function() {
                var t = $.ui.sortable.prototype._clear;
                $.ui.sortable.prototype._clear = function() {
                    return this.placeholder[0].parentNode || $("<div/>").append(this.placeholder[0]),
                    t.apply(this, arguments)
                }
                ;
                var e = $.ui.sortable.prototype._rearrange;
                $.ui.sortable.prototype._rearrange = function(t, i) {
                    return i.item[0].parentNode || $("<div/>").append(i.item[0]),
                    e.apply(this, arguments)
                }
                ;
                var i = $.ui.sortable.prototype._mouseStart;
                jQuery.ui.sortable.prototype._mouseStart = function(t) {
                    return this._trigger("beforeStart", t, this._uiHash()),
                    i.apply(this, arguments)
                }
            }(),
            i = $.fn.modal.Constructor.prototype.show,
            $.fn.modal.Constructor.prototype.show = function() {
                try {
                    return $.fn.modal.currentShowStack = new Error("Shown Modal").stack,
                    i.apply(this, arguments)
                } finally {
                    $.fn.modal.currentShowStack = ""
                }
            }
            ,
            jQuery.fn.extend({
                fastFind: function(selector) {
                    var t, e = [], i = this, n = i.length;
                    if ("string" != typeof selector)
                        return this.find(selector);
                    if ("*" === selector) {
                        for (t = 0; t < n; t++) {
                            var s = i[t];
                            if (s && "function" == typeof s.getElementsByTagName)
                                for (var o = s.getElementsByTagName("*"), a = 0; a < o.length; a++)
                                    e.push(o[a])
                        }
                        return (e = this.pushStack(n > 1 ? jQuery.unique(e) : e)).selector = this.selector ? this.selector + " " + selector : selector,
                        e
                    }
                    return this.find(selector)
                }
            }),
            n = jQuery.expr.match.needsContext,
            $.fn.closest = function(selectors, t) {
                for (var e, i = 0, s = this.length, o = [], a = n.test(selectors) || "string" != typeof selectors ? jQuery(selectors, t || this.context) : 0; i < s; i++)
                    for (e = this[i]; e && e !== t && !o.includes(e); e = e.parentNode)
                        if (e.nodeType < 11 && (a ? a.index(e) > -1 : 1 === e.nodeType && jQuery.find.matchesSelector(e, selectors))) {
                            o.push(e);
                            break
                        }
                return this.pushStack(o.length > 1 ? jQuery.unique(o) : o)
            }
        }
        ).call(window)
    },
    606: function(t, e) {
        var e = void 0
          , t = void 0;
        (function() {
            var t = void 0, e;
            /*! jQuery Validation Plugin - v1.10.0 - 9/7/2012
* https://github.com/jzaefferer/jquery-validation
* Copyright (c) 2012 Jörn Zaefferer; Licensed MIT */
            (e = jQuery).extend(e.fn, {
                validate: function(t) {
                    if (!this.length)
                        return t && t.debug && window.console && console.warn("nothing selected, can't validate, returning nothing"),
                        void 0;
                    var i = e.data(this[0], "validator");
                    return i || (this.attr("novalidate", "novalidate"),
                    i = new e.validator(t,this[0]),
                    e.data(this[0], "validator", i),
                    i.settings.onsubmit && (this.validateDelegate(":submit", "click", (function(t) {
                        i.settings.submitHandler && (i.submitButton = t.target),
                        e(t.target).hasClass("cancel") && (i.cancelSubmit = !0)
                    }
                    )),
                    this.submit((function(t) {
                        function d() {
                            var d;
                            return !i.settings.submitHandler || (i.submitButton && (d = e("<input type='hidden'/>").attr("name", i.submitButton.name).val(i.submitButton.value).appendTo(i.currentForm)),
                            i.settings.submitHandler.call(i, i.currentForm, t),
                            i.submitButton && d.remove(),
                            !1)
                        }
                        return i.settings.debug && t.preventDefault(),
                        i.cancelSubmit ? (i.cancelSubmit = !1,
                        d()) : i.form() ? i.pendingRequest ? (i.formSubmitted = !0,
                        !1) : d() : (i.focusInvalid(),
                        !1)
                    }
                    ))),
                    i)
                },
                valid: function() {
                    if (e(this[0]).is("form"))
                        return this.validate().form();
                    var t = !0
                      , i = e(this[0].form).validate();
                    return this.each((function() {
                        t &= i.element(this)
                    }
                    )),
                    t
                },
                removeAttrs: function(t) {
                    var i = {}
                      , d = this;
                    return e.each(t.split(/\s/), (function(t, e) {
                        i[e] = d.attr(e),
                        d.removeAttr(e)
                    }
                    )),
                    i
                },
                rules: function(t, i) {
                    var d = this[0];
                    if (t) {
                        var n = e.data(d.form, "validator").settings
                          , s = n.rules
                          , o = e.validator.staticRules(d);
                        switch (t) {
                        case "add":
                            e.extend(o, e.validator.normalizeRule(i)),
                            s[d.name] = o,
                            i.messages && (n.messages[d.name] = e.extend(n.messages[d.name], i.messages));
                            break;
                        case "remove":
                            if (!i)
                                return delete s[d.name],
                                o;
                            var a = {};
                            return e.each(i.split(/\s/), (function(t, e) {
                                a[e] = o[e],
                                delete o[e]
                            }
                            )),
                            a
                        }
                    }
                    var l = e.validator.normalizeRules(e.extend({}, e.validator.metadataRules(d), e.validator.classRules(d), e.validator.attributeRules(d), e.validator.staticRules(d)), d);
                    if (l.required) {
                        var h = l.required;
                        delete l.required,
                        l = e.extend({
                            required: h
                        }, l)
                    }
                    return l
                }
            }),
            e.extend(e.expr[":"], {
                blank: function(t) {
                    return !e.trim("" + t.value)
                },
                filled: function(t) {
                    return !!e.trim("" + t.value)
                },
                unchecked: function(t) {
                    return !t.checked
                }
            }),
            e.validator = function(t, i) {
                this.settings = e.extend(!0, {}, e.validator.defaults, t),
                this.currentForm = i,
                this.init()
            }
            ,
            e.validator.format = function(t, i) {
                return 1 === arguments.length ? function() {
                    var i = e.makeArray(arguments);
                    return i.unshift(t),
                    e.validator.format.apply(this, i)
                }
                : (arguments.length > 2 && i.constructor !== Array && (i = e.makeArray(arguments).slice(1)),
                i.constructor !== Array && (i = [i]),
                e.each(i, (function(e, i) {
                    t = t.replace(new RegExp("\\{" + e + "\\}","g"), i)
                }
                )),
                t)
            }
            ,
            e.extend(e.validator, {
                defaults: {
                    messages: {},
                    groups: {},
                    rules: {},
                    errorClass: "error",
                    validClass: "valid",
                    errorElement: "label",
                    focusInvalid: !0,
                    errorContainer: e([]),
                    errorLabelContainer: e([]),
                    onsubmit: !0,
                    ignore: ":hidden",
                    ignoreTitle: !1,
                    onfocusin: function(t, e) {
                        this.lastActive = t,
                        this.settings.focusCleanup && !this.blockFocusCleanup && (this.settings.unhighlight && this.settings.unhighlight.call(this, t, this.settings.errorClass, this.settings.validClass),
                        this.addWrapper(this.errorsFor(t)).hide())
                    },
                    onfocusout: function(t, e) {
                        !this.checkable(t) && (t.name in this.submitted || !this.optional(t)) && this.element(t)
                    },
                    onkeyup: function(t, e) {
                        9 === e.which && "" === this.elementValue(t) || (t.name in this.submitted || t === this.lastActive) && this.element(t)
                    },
                    onclick: function(t, e) {
                        t.name in this.submitted ? this.element(t) : t.parentNode.name in this.submitted && this.element(t.parentNode)
                    },
                    highlight: function(t, i, d) {
                        "radio" === t.type ? this.findByName(t.name).addClass(i).removeClass(d) : e(t).addClass(i).removeClass(d)
                    },
                    unhighlight: function(t, i, d) {
                        "radio" === t.type ? this.findByName(t.name).removeClass(i).addClass(d) : e(t).removeClass(i).addClass(d)
                    }
                },
                setDefaults: function(t) {
                    e.extend(e.validator.defaults, t)
                },
                messages: {
                    required: "This field is required.",
                    remote: "Please fix this field.",
                    email: "Please enter a valid email address.",
                    url: "Please enter a valid URL.",
                    date: "Please enter a valid date.",
                    dateISO: "Please enter a valid date (ISO).",
                    number: "Please enter a valid number.",
                    digits: "Please enter only digits.",
                    creditcard: "Please enter a valid credit card number.",
                    equalTo: "Please enter the same value again.",
                    maxlength: e.validator.format("Please enter no more than {0} characters."),
                    minlength: e.validator.format("Please enter at least {0} characters."),
                    rangelength: e.validator.format("Please enter a value between {0} and {1} characters long."),
                    range: e.validator.format("Please enter a value between {0} and {1}."),
                    max: e.validator.format("Please enter a value less than or equal to {0}."),
                    min: e.validator.format("Please enter a value greater than or equal to {0}.")
                },
                autoCreateRanges: !1,
                prototype: {
                    init: function() {
                        function d(t) {
                            var i = e.data(this[0].form, "validator")
                              , d = "on" + t.type.replace(/^validate/, "");
                            i.settings[d] && i.settings[d].call(i, this[0], t)
                        }
                        this.labelContainer = e(this.settings.errorLabelContainer),
                        this.errorContext = this.labelContainer.length && this.labelContainer || e(this.currentForm),
                        this.containers = e(this.settings.errorContainer).add(this.settings.errorLabelContainer),
                        this.submitted = {},
                        this.valueCache = {},
                        this.pendingRequest = 0,
                        this.pending = {},
                        this.invalid = {},
                        this.reset();
                        var t = this.groups = {};
                        e.each(this.settings.groups, (function(i, d) {
                            e.each(d.split(/\s/), (function(e, d) {
                                t[d] = i
                            }
                            ))
                        }
                        ));
                        var i = this.settings.rules;
                        e.each(i, (function(t, d) {
                            i[t] = e.validator.normalizeRule(d)
                        }
                        )),
                        e(this.currentForm).validateDelegate(":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'] ,[type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'] ", "focusin focusout keyup", d).validateDelegate("[type='radio'], [type='checkbox'], select, option", "click", d),
                        this.settings.invalidHandler && e(this.currentForm).bind("invalid-form.validate", this.settings.invalidHandler)
                    },
                    form: function() {
                        return this.checkForm(),
                        e.extend(this.submitted, this.errorMap),
                        this.invalid = e.extend({}, this.errorMap),
                        this.valid() || e(this.currentForm).triggerHandler("invalid-form", [this]),
                        this.showErrors(),
                        this.valid()
                    },
                    checkForm: function() {
                        this.prepareForm();
                        for (var t = 0, e = this.currentElements = this.elements(); e[t]; t++)
                            this.check(e[t]);
                        return this.valid()
                    },
                    element: function(t) {
                        t = this.validationTargetFor(this.clean(t)),
                        this.lastElement = t,
                        this.prepareElement(t),
                        this.currentElements = e(t);
                        var i = !1 !== this.check(t);
                        return i ? delete this.invalid[t.name] : this.invalid[t.name] = !0,
                        this.numberOfInvalids() || (this.toHide = this.toHide.add(this.containers)),
                        this.showErrors(),
                        i
                    },
                    showErrors: function(t) {
                        if (t) {
                            for (var i in e.extend(this.errorMap, t),
                            this.errorList = [],
                            t)
                                this.errorList.push({
                                    message: t[i],
                                    element: this.findByName(i)[0]
                                });
                            this.successList = e.grep(this.successList, (function(e) {
                                return !(e.name in t)
                            }
                            ))
                        }
                        this.settings.showErrors ? this.settings.showErrors.call(this, this.errorMap, this.errorList) : this.defaultShowErrors()
                    },
                    resetForm: function() {
                        e.fn.resetForm && e(this.currentForm).resetForm(),
                        this.submitted = {},
                        this.lastElement = null,
                        this.prepareForm(),
                        this.hideErrors(),
                        this.elements().removeClass(this.settings.errorClass).removeData("previousValue")
                    },
                    numberOfInvalids: function() {
                        return this.objectLength(this.invalid)
                    },
                    objectLength: function(t) {
                        var e = 0;
                        for (var i in t)
                            e++;
                        return e
                    },
                    hideErrors: function() {
                        this.addWrapper(this.toHide).hide()
                    },
                    valid: function() {
                        return 0 === this.size()
                    },
                    size: function() {
                        return this.errorList.length
                    },
                    focusInvalid: function() {
                        if (this.settings.focusInvalid)
                            try {
                                e(this.findLastActive() || this.errorList.length && this.errorList[0].element || []).filter(":visible").focus().trigger("focusin")
                            } catch (t) {}
                    },
                    findLastActive: function() {
                        var t = this.lastActive;
                        return t && 1 === e.grep(this.errorList, (function(e) {
                            return e.element.name === t.name
                        }
                        )).length && t
                    },
                    elements: function() {
                        var t = this
                          , i = {};
                        return e(this.currentForm).find("input, select, textarea").not(":submit, :reset, :image, [disabled]").not(this.settings.ignore).filter((function() {
                            return !this.name && t.settings.debug && window.console && console.error("%o has no name assigned", this),
                            !(this.name in i || !t.objectLength(e(this).rules()) || (i[this.name] = !0,
                            0))
                        }
                        ))
                    },
                    clean: function(t) {
                        return e(t)[0]
                    },
                    errors: function() {
                        var t = this.settings.errorClass.replace(" ", ".");
                        return e(this.settings.errorElement + "." + t, this.errorContext)
                    },
                    reset: function() {
                        this.successList = [],
                        this.errorList = [],
                        this.errorMap = {},
                        this.toShow = e([]),
                        this.toHide = e([]),
                        this.currentElements = e([])
                    },
                    prepareForm: function() {
                        this.reset(),
                        this.toHide = this.errors().add(this.containers)
                    },
                    prepareElement: function(t) {
                        this.reset(),
                        this.toHide = this.errorsFor(t)
                    },
                    elementValue: function(t) {
                        var i = e(t).attr("type")
                          , d = e(t).val();
                        return "radio" === i || "checkbox" === i ? e('input[name="' + e(t).attr("name") + '"]:checked').val() : "string" == typeof d ? d.replace(/\r/g, "") : d
                    },
                    check: function(t) {
                        t = this.validationTargetFor(this.clean(t));
                        var i = e(t).rules(), d = !1, n = this.elementValue(t), s;
                        for (var o in i) {
                            var a = {
                                method: o,
                                parameters: i[o]
                            };
                            try {
                                if ("dependency-mismatch" === (s = e.validator.methods[o].call(this, n, t, a.parameters))) {
                                    d = !0;
                                    continue
                                }
                                if (d = !1,
                                "pending" === s)
                                    return this.toHide = this.toHide.not(this.errorsFor(t)),
                                    void 0;
                                if (!s)
                                    return this.formatAndAdd(t, a),
                                    !1
                            } catch (e) {
                                throw this.settings.debug && window.console && console.log("exception occured when checking element " + t.id + ", check the '" + a.method + "' method", e),
                                e
                            }
                        }
                        if (!d)
                            return this.objectLength(i) && this.successList.push(t),
                            !0
                    },
                    customMetaMessage: function(t, i) {
                        if (e.metadata) {
                            var d = this.settings.meta ? e(t).metadata()[this.settings.meta] : e(t).metadata();
                            return d && d.messages && d.messages[i]
                        }
                    },
                    customDataMessage: function(t, i) {
                        return e(t).data("msg-" + i.toLowerCase()) || t.attributes && e(t).attr("data-msg-" + i.toLowerCase())
                    },
                    customMessage: function(t, e) {
                        var i = this.settings.messages[t];
                        return i && (i.constructor === String ? i : i[e])
                    },
                    findDefined: function() {
                        for (var t = 0; t < arguments.length; t++)
                            if (void 0 !== arguments[t])
                                return arguments[t]
                    },
                    defaultMessage: function(t, i) {
                        return this.findDefined(this.customMessage(t.name, i), this.customDataMessage(t, i), this.customMetaMessage(t, i), !this.settings.ignoreTitle && t.title || void 0, e.validator.messages[i], "<strong>Warning: No message defined for " + t.name + "</strong>")
                    },
                    formatAndAdd: function(t, i) {
                        var d = this.defaultMessage(t, i.method)
                          , n = /\$?\{(\d+)\}/g;
                        "function" == typeof d ? d = d.call(this, i.parameters, t) : n.test(d) && (d = e.validator.format(d.replace(n, "{$1}"), i.parameters)),
                        this.errorList.push({
                            message: d,
                            element: t
                        }),
                        this.errorMap[t.name] = d,
                        this.submitted[t.name] = d
                    },
                    addWrapper: function(t) {
                        return this.settings.wrapper && (t = t.add(t.parent(this.settings.wrapper))),
                        t
                    },
                    defaultShowErrors: function() {
                        var t, e;
                        for (t = 0; this.errorList[t]; t++) {
                            var i = this.errorList[t];
                            this.settings.highlight && this.settings.highlight.call(this, i.element, this.settings.errorClass, this.settings.validClass),
                            this.showLabel(i.element, i.message)
                        }
                        if (this.errorList.length && (this.toShow = this.toShow.add(this.containers)),
                        this.settings.success)
                            for (t = 0; this.successList[t]; t++)
                                this.showLabel(this.successList[t]);
                        if (this.settings.unhighlight)
                            for (t = 0,
                            e = this.validElements(); e[t]; t++)
                                this.settings.unhighlight.call(this, e[t], this.settings.errorClass, this.settings.validClass);
                        this.toHide = this.toHide.not(this.toShow),
                        this.hideErrors(),
                        this.addWrapper(this.toShow).show()
                    },
                    validElements: function() {
                        return this.currentElements.not(this.invalidElements())
                    },
                    invalidElements: function() {
                        return e(this.errorList).map((function() {
                            return this.element
                        }
                        ))
                    },
                    showLabel: function(t, i) {
                        var d = this.errorsFor(t);
                        d.length ? (d.removeClass(this.settings.validClass).addClass(this.settings.errorClass),
                        d.attr("generated") && d.html(i)) : (d = e("<" + this.settings.errorElement + "/>").attr({
                            for: this.idOrName(t),
                            generated: !0
                        }).addClass(this.settings.errorClass).html(i || ""),
                        this.settings.wrapper && (d = d.hide().show().wrap("<" + this.settings.wrapper + "/>").parent()),
                        this.labelContainer.append(d).length || (this.settings.errorPlacement ? this.settings.errorPlacement(d, e(t)) : d.insertAfter(t))),
                        !i && this.settings.success && (d.text(""),
                        "string" == typeof this.settings.success ? d.addClass(this.settings.success) : this.settings.success(d, t)),
                        this.toShow = this.toShow.add(d)
                    },
                    errorsFor: function(t) {
                        var i = this.idOrName(t);
                        return this.errors().filter((function() {
                            return e(this).attr("for") === i
                        }
                        ))
                    },
                    idOrName: function(t) {
                        return this.groups[t.name] || (this.checkable(t) ? t.name : t.id || t.name)
                    },
                    validationTargetFor: function(t) {
                        return this.checkable(t) && (t = this.findByName(t.name).not(this.settings.ignore)[0]),
                        t
                    },
                    checkable: function(t) {
                        return /radio|checkbox/i.test(t.type)
                    },
                    findByName: function(t) {
                        return e(this.currentForm).find('[name="' + t + '"]')
                    },
                    getLength: function(t, i) {
                        switch (i.nodeName.toLowerCase()) {
                        case "select":
                            return e("option:selected", i).length;
                        case "input":
                            if (this.checkable(i))
                                return this.findByName(i.name).filter(":checked").length
                        }
                        return t.length
                    },
                    depend: function(t, e) {
                        return !this.dependTypes[typeof t] || this.dependTypes[typeof t](t, e)
                    },
                    dependTypes: {
                        boolean: function(t, e) {
                            return t
                        },
                        string: function(t, i) {
                            return !!e(t, i.form).length
                        },
                        function: function(t, e) {
                            return t(e)
                        }
                    },
                    optional: function(t) {
                        var i = this.elementValue(t);
                        return !e.validator.methods.required.call(this, i, t) && "dependency-mismatch"
                    },
                    startRequest: function(t) {
                        this.pending[t.name] || (this.pendingRequest++,
                        this.pending[t.name] = !0)
                    },
                    stopRequest: function(t, i) {
                        this.pendingRequest--,
                        this.pendingRequest < 0 && (this.pendingRequest = 0),
                        delete this.pending[t.name],
                        i && 0 === this.pendingRequest && this.formSubmitted && this.form() ? (e(this.currentForm).submit(),
                        this.formSubmitted = !1) : !i && 0 === this.pendingRequest && this.formSubmitted && (e(this.currentForm).triggerHandler("invalid-form", [this]),
                        this.formSubmitted = !1)
                    },
                    previousValue: function(t) {
                        return e.data(t, "previousValue") || e.data(t, "previousValue", {
                            old: null,
                            valid: !0,
                            message: this.defaultMessage(t, "remote")
                        })
                    }
                },
                classRuleSettings: {
                    required: {
                        required: !0
                    },
                    email: {
                        email: !0
                    },
                    url: {
                        url: !0
                    },
                    date: {
                        date: !0
                    },
                    dateISO: {
                        dateISO: !0
                    },
                    number: {
                        number: !0
                    },
                    digits: {
                        digits: !0
                    },
                    creditcard: {
                        creditcard: !0
                    }
                },
                addClassRules: function(t, i) {
                    t.constructor === String ? this.classRuleSettings[t] = i : e.extend(this.classRuleSettings, t)
                },
                classRules: function(t) {
                    var i = {}
                      , d = e(t).attr("class");
                    return d && e.each(d.split(" "), (function() {
                        this in e.validator.classRuleSettings && e.extend(i, e.validator.classRuleSettings[this])
                    }
                    )),
                    i
                },
                attributeRules: function(t) {
                    var i = {}
                      , d = e(t);
                    for (var n in e.validator.methods) {
                        var s;
                        "required" === n ? ("" === (s = d.get(0).getAttribute(n)) && (s = !0),
                        s = !!s) : s = d.attr(n),
                        s ? i[n] = s : d[0].getAttribute("type") === n && (i[n] = !0)
                    }
                    return i.maxlength && /-1|2147483647|524288/.test(i.maxlength) && delete i.maxlength,
                    i
                },
                metadataRules: function(t) {
                    if (!e.metadata)
                        return {};
                    var i = e.data(t.form, "validator").settings.meta;
                    return i ? e(t).metadata()[i] : e(t).metadata()
                },
                staticRules: function(t) {
                    var i = {}
                      , d = e.data(t.form, "validator");
                    return d.settings.rules && (i = e.validator.normalizeRule(d.settings.rules[t.name]) || {}),
                    i
                },
                normalizeRules: function(t, i) {
                    return e.each(t, (function(d, n) {
                        if (!1 === n)
                            return delete t[d],
                            void 0;
                        if (n.param || n.depends) {
                            var s = !0;
                            switch (typeof n.depends) {
                            case "string":
                                s = !!e(n.depends, i.form).length;
                                break;
                            case "function":
                                s = n.depends.call(i, i)
                            }
                            s ? t[d] = void 0 === n.param || n.param : delete t[d]
                        }
                    }
                    )),
                    e.each(t, (function(d, n) {
                        t[d] = e.isFunction(n) ? n(i) : n
                    }
                    )),
                    e.each(["minlength", "maxlength", "min", "max"], (function() {
                        t[this] && (t[this] = Number(t[this]))
                    }
                    )),
                    e.each(["rangelength", "range"], (function() {
                        t[this] && (t[this] = [Number(t[this][0]), Number(t[this][1])])
                    }
                    )),
                    e.validator.autoCreateRanges && (t.min && t.max && (t.range = [t.min, t.max],
                    delete t.min,
                    delete t.max),
                    t.minlength && t.maxlength && (t.rangelength = [t.minlength, t.maxlength],
                    delete t.minlength,
                    delete t.maxlength)),
                    t.messages && delete t.messages,
                    t
                },
                normalizeRule: function(t) {
                    if ("string" == typeof t) {
                        var i = {};
                        e.each(t.split(/\s/), (function() {
                            i[this] = !0
                        }
                        )),
                        t = i
                    }
                    return t
                },
                addMethod: function(t, i, d) {
                    e.validator.methods[t] = i,
                    e.validator.messages[t] = void 0 !== d ? d : e.validator.messages[t],
                    i.length < 3 && e.validator.addClassRules(t, e.validator.normalizeRule(t))
                },
                methods: {
                    required: function(t, i, d) {
                        if (!this.depend(d, i))
                            return "dependency-mismatch";
                        if ("select" === i.nodeName.toLowerCase()) {
                            var n = e(i).val();
                            return n && n.length > 0
                        }
                        return this.checkable(i) ? this.getLength(t, i) > 0 : e.trim(t).length > 0
                    },
                    remote: function(t, i, d) {
                        if (this.optional(i))
                            return "dependency-mismatch";
                        var n = this.previousValue(i);
                        if (this.settings.messages[i.name] || (this.settings.messages[i.name] = {}),
                        n.originalMessage = this.settings.messages[i.name].remote,
                        this.settings.messages[i.name].remote = n.message,
                        d = "string" == typeof d && {
                            url: d
                        } || d,
                        this.pending[i.name])
                            return "pending";
                        if (n.old === t)
                            return n.valid;
                        n.old = t;
                        var s = this;
                        this.startRequest(i);
                        var o = {};
                        return o[i.name] = t,
                        e.ajax(e.extend(!0, {
                            url: d,
                            mode: "abort",
                            port: "validate" + i.name,
                            dataType: "json",
                            data: o,
                            success: function(d) {
                                s.settings.messages[i.name].remote = n.originalMessage;
                                var o = !0 === d || "true" === d;
                                if (o) {
                                    var a = s.formSubmitted;
                                    s.prepareElement(i),
                                    s.formSubmitted = a,
                                    s.successList.push(i),
                                    delete s.invalid[i.name],
                                    s.showErrors()
                                } else {
                                    var l = {}
                                      , h = d || s.defaultMessage(i, "remote");
                                    l[i.name] = n.message = e.isFunction(h) ? h(t) : h,
                                    s.invalid[i.name] = !0,
                                    s.showErrors(l)
                                }
                                n.valid = o,
                                s.stopRequest(i, o)
                            }
                        }, d)),
                        "pending"
                    },
                    minlength: function(t, i, d) {
                        var n = e.isArray(t) ? t.length : this.getLength(e.trim(t), i);
                        return this.optional(i) || n >= d
                    },
                    maxlength: function(t, i, d) {
                        var n = e.isArray(t) ? t.length : this.getLength(e.trim(t), i);
                        return this.optional(i) || n <= d
                    },
                    rangelength: function(t, i, d) {
                        var n = e.isArray(t) ? t.length : this.getLength(e.trim(t), i);
                        return this.optional(i) || n >= d[0] && n <= d[1]
                    },
                    min: function(t, e, i) {
                        return this.optional(e) || t >= i
                    },
                    max: function(t, e, i) {
                        return this.optional(e) || t <= i
                    },
                    range: function(t, e, i) {
                        return this.optional(e) || t >= i[0] && t <= i[1]
                    },
                    email: function(t, e) {
                        return this.optional(e) || /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i.test(t)
                    },
                    url: function(t, e) {
                        return this.optional(e) || /^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(t)
                    },
                    date: function(t, e) {
                        return this.optional(e) || !/Invalid|NaN/.test(new Date(t))
                    },
                    dateISO: function(t, e) {
                        return this.optional(e) || /^\d{4}[\/\-]\d{1,2}[\/\-]\d{1,2}$/.test(t)
                    },
                    number: function(t, e) {
                        return this.optional(e) || /^-?(?:\d+|\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(t)
                    },
                    digits: function(t, e) {
                        return this.optional(e) || /^\d+$/.test(t)
                    },
                    creditcard: function(t, e) {
                        if (this.optional(e))
                            return "dependency-mismatch";
                        if (/[^0-9 \-]+/.test(t))
                            return !1;
                        for (var i = 0, d = 0, n = !1, s = (t = t.replace(/\D/g, "")).length - 1; s >= 0; s--) {
                            var o = t.charAt(s);
                            d = parseInt(o, 10),
                            n && (d *= 2) > 9 && (d -= 9),
                            i += d,
                            n = !n
                        }
                        return i % 10 == 0
                    },
                    equalTo: function(t, i, d) {
                        var n = e(d);
                        return this.settings.onfocusout && n.unbind(".validate-equalTo").bind("blur.validate-equalTo", (function() {
                            e(i).valid()
                        }
                        )),
                        t === n.val()
                    }
                }
            }),
            void (e.format = e.validator.format),
            function(t) {
                var e = {};
                if (t.ajaxPrefilter)
                    t.ajaxPrefilter((function(t, i, d) {
                        var n = t.port;
                        "abort" === t.mode && (e[n] && e[n].abort(),
                        e[n] = d)
                    }
                    ));
                else {
                    var i = t.ajax;
                    t.ajax = function(d) {
                        var n = ("mode"in d ? d : t.ajaxSettings).mode
                          , s = ("port"in d ? d : t.ajaxSettings).port;
                        return "abort" === n ? (e[s] && e[s].abort(),
                        e[s] = i.apply(this, arguments)) : i.apply(this, arguments)
                    }
                }
            }(jQuery),
            function(t) {
                !jQuery.event.special.focusin && !jQuery.event.special.focusout && document.addEventListener && t.each({
                    focus: "focusin",
                    blur: "focusout"
                }, (function(e, i) {
                    function d(e) {
                        return (e = t.event.fix(e)).type = i,
                        t.event.handle.call(this, e)
                    }
                    t.event.special[i] = {
                        setup: function() {
                            this.addEventListener(e, d, !0)
                        },
                        teardown: function() {
                            this.removeEventListener(e, d, !0)
                        },
                        handler: function(e) {
                            var d = arguments;
                            return d[0] = t.event.fix(e),
                            d[0].type = i,
                            t.event.handle.apply(this, d)
                        }
                    }
                }
                )),
                t.extend(t.fn, {
                    validateDelegate: function(e, i, d) {
                        return this.bind(i, (function(i) {
                            var n = t(i.target);
                            if (n.is(e))
                                return d.apply(n, arguments)
                        }
                        ))
                    }
                })
            }(jQuery)
        }
        ).call(window)
    },
    607: function(t, e) {
        var e = void 0
          , t = void 0;
        (function() {
            var t = void 0;
            !function(t) {
                function e(t, e, i) {
                    t.rules[e] = i,
                    t.message && (t.messages[e] = t.message)
                }
                function i(t) {
                    return t.replace(/^\s+|\s+$/g, "").split(/\s*,\s*/g)
                }
                function n(t) {
                    return t.replace(/([!"#$%&'()*+,./:;<=>?@\[\\\]^`{|}~])/g, "\\$1")
                }
                function s(t) {
                    return t.substr(0, t.lastIndexOf(".") + 1)
                }
                function o(t, e) {
                    return 0 === t.indexOf("*.") && (t = t.replace("*.", e)),
                    t
                }
                function a(e, i) {
                    var s = t(this).find("[data-valmsg-for='" + n(i[0].name) + "']")
                      , d = s.attr("data-valmsg-replace")
                      , o = d ? false !== t.parseJSON(d) : null;
                    s.removeClass("field-validation-valid").addClass("field-validation-error"),
                    e.data("unobtrusiveContainer", s),
                    o ? (s.empty(),
                    e.removeClass("input-validation-error").appendTo(s)) : e.hide()
                }
                function l(e, d) {
                    var i = t(this).find("[data-valmsg-summary=true]")
                      , n = i.find("ul");
                    n && n.length && d.errorList.length && (n.empty(),
                    i.addClass("validation-summary-errors").removeClass("validation-summary-valid"),
                    t.each(d.errorList, (function() {
                        t("<li />").html(this.message).appendTo(n)
                    }
                    )))
                }
                function h(d) {
                    var e = d.data("unobtrusiveContainer")
                      , i = e.attr("data-valmsg-replace")
                      , n = i ? t.parseJSON(i) : null;
                    e && (e.addClass("field-validation-valid").removeClass("field-validation-error"),
                    d.removeData("unobtrusiveContainer"),
                    n && e.empty())
                }
                function u() {
                    var e = t(this);
                    e.data("validator").resetForm(),
                    e.find(".validation-summary-errors").addClass("validation-summary-valid").removeClass("validation-summary-errors"),
                    e.find(".field-validation-error").addClass("field-validation-valid").removeClass("field-validation-error").removeData("unobtrusiveContainer").find(">*").removeData("unobtrusiveContainer")
                }
                function c(e) {
                    var i = t(e)
                      , d = i.data(f)
                      , n = t.proxy(u, e);
                    return d || (d = {
                        options: {
                            errorClass: "input-validation-error",
                            errorElement: "span",
                            errorPlacement: t.proxy(a, e),
                            invalidHandler: t.proxy(l, e),
                            messages: {},
                            rules: {},
                            success: t.proxy(h, e)
                        },
                        attachValidation: function() {
                            i.unbind("reset." + f, n).bind("reset." + f, n).validate(this.options)
                        },
                        validate: function() {
                            return i.validate(),
                            i.valid()
                        }
                    },
                    i.data(f, d)),
                    d
                }
                var d = t.validator, p, f = "unobtrusiveValidation";
                d.unobtrusive = {
                    adapters: [],
                    parseElement: function(e, i) {
                        var d = t(e), n = d.parents("form")[0], s, o, a;
                        n && ((s = c(n)).options.rules[e.name] = o = {},
                        s.options.messages[e.name] = a = {},
                        t.each(this.adapters, (function() {
                            var i = "data-val-" + this.name
                              , s = d.attr(i)
                              , l = {};
                            void 0 !== s && (i += "-",
                            t.each(this.params, (function() {
                                l[this] = d.attr(i + this)
                            }
                            )),
                            this.adapt({
                                element: e,
                                form: n,
                                message: s,
                                params: l,
                                rules: o,
                                messages: a
                            }))
                        }
                        )),
                        t.extend(o, {
                            __dummy__: true
                        }),
                        !i && s.attachValidation())
                    },
                    parse: function(e) {
                        var i = t(e).parents("form").andSelf().add(t(e).find("form")).filter("form");
                        t(e).find(":input[data-val=true]").each((function() {
                            d.unobtrusive.parseElement(this, true)
                        }
                        )),
                        i.each((function() {
                            var t = c(this);
                            t && t.attachValidation()
                        }
                        ))
                    }
                },
                (p = d.unobtrusive.adapters).add = function(t, e, i) {
                    return i || (i = e,
                    e = []),
                    this.push({
                        name: t,
                        params: e,
                        adapt: i
                    }),
                    this
                }
                ,
                p.addBool = function(t, i) {
                    return this.add(t, (function(d) {
                        e(d, i || t, true)
                    }
                    ))
                }
                ,
                p.addMinMax = function(t, i, n, s, d, o) {
                    return this.add(t, [d || "min", o || "max"], (function(t) {
                        var o = t.params.min
                          , d = t.params.max;
                        o && d ? e(t, s, [o, d]) : o ? e(t, i, o) : d && e(t, n, d)
                    }
                    ))
                }
                ,
                p.addSingleVal = function(t, i, d) {
                    return this.add(t, [i || "val"], (function(n) {
                        e(n, d || t, n.params[i])
                    }
                    ))
                }
                ,
                d.addMethod("__dummy__", (function() {
                    return true
                }
                )),
                d.addMethod("regex", (function(t, e, d) {
                    var i;
                    return !!this.optional(e) || (i = new RegExp(d).exec(t)) && 0 === i.index && i[0].length === t.length
                }
                )),
                d.addMethod("nonalphamin", (function(t, d, e) {
                    var i;
                    return e && (i = (i = t.match(/\W/g)) && i.length >= e),
                    i
                }
                )),
                p.addSingleVal("accept", "exts").addSingleVal("regex", "pattern"),
                p.addBool("creditcard").addBool("date").addBool("digits").addBool("email").addBool("number").addBool("url"),
                p.addMinMax("length", "minlength", "maxlength", "rangelength").addMinMax("range", "min", "max", "range"),
                p.add("equalto", ["other"], (function(i) {
                    var a = s(i.element.name), l, d = o(i.params.other, a), h;
                    e(i, "equalTo", t(i.form).find(":input[name='" + n(d) + "']")[0])
                }
                )),
                p.add("required", (function(t) {
                    ("INPUT" !== t.element.tagName.toUpperCase() || "CHECKBOX" !== t.element.type.toUpperCase()) && e(t, "required", true)
                }
                )),
                p.add("remote", ["url", "type", "additionalfields"], (function(a) {
                    var d = {
                        url: a.params.url,
                        type: a.params.type || "GET",
                        data: {}
                    }
                      , l = s(a.element.name);
                    t.each(i(a.params.additionalfields || a.element.name), (function(e, i) {
                        var s = o(i, l);
                        d.data[s] = function() {
                            return t(a.form).find(":input[name='" + n(s) + "']").val()
                        }
                    }
                    )),
                    e(a, "remote", d)
                }
                )),
                p.add("password", ["min", "nonalphamin", "regex"], (function(t) {
                    t.params.min && e(t, "minlength", t.params.min),
                    t.params.nonalphamin && e(t, "nonalphamin", t.params.nonalphamin),
                    t.params.regex && e(t, "regex", t.params.regex)
                }
                )),
                t((function() {
                    d.unobtrusive.parse(document)
                }
                ))
            }(jQuery)
        }
        ).call(window)
    },
    608: function(t, e) {
        var e = void 0
          , t = void 0;
        (function() {
            var t = void 0, i, n;
            /*! jstz - v1.0.4 - 2012-12-12 */
            i = this,
            n = function() {
                "use strict";
                var t = "s"
                  , e = function(t) {
                    var e = -t.getTimezoneOffset();
                    return null !== e ? e : 0
                }
                  , r = function(t, e, i) {
                    var r = new Date;
                    return void 0 !== t && r.setFullYear(t),
                    r.setDate(i),
                    r.setMonth(e),
                    r
                }
                  , i = function(t) {
                    return e(r(t, 0, 2))
                }
                  , s = function(t) {
                    return e(r(t, 5, 2))
                }
                  , o = function(t) {
                    var n, r;
                    return (t.getMonth() > 7 ? s(t.getFullYear()) : i(t.getFullYear())) - e(t) != 0
                }
                  , a = function() {
                    var e = i()
                      , n = s()
                      , r = i() - s();
                    return r < 0 ? e + ",1" : r > 0 ? n + ",1," + t : e + ",0"
                }
                  , l = function() {
                    var t = a();
                    return new n.TimeZone(n.olson.timezones[t])
                };
                return {
                    determine: l,
                    date_is_dst: o
                }
            }(),
            n.TimeZone = function(t) {
                "use strict";
                var e = null
                  , r = function() {
                    return e
                }
                  , i = function() {
                    for (var t = n.olson.ambiguity_list[e], r = t.length, i = 0, s = t[0]; i < r; i += 1)
                        if (s = t[i],
                        n.date_is_dst(n.olson.dst_start_dates[s]))
                            return e = s,
                            void 0
                }
                  , s = function() {
                    return void 0 !== n.olson.ambiguity_list[e]
                };
                return e = t,
                s() && i(),
                {
                    name: r
                }
            }
            ,
            n.olson = {},
            n.olson.timezones = {
                "-720,0": "Etc/GMT+12",
                "-660,0": "Pacific/Pago_Pago",
                "-600,1": "America/Adak",
                "-600,0": "Pacific/Honolulu",
                "-570,0": "Pacific/Marquesas",
                "-540,0": "Pacific/Gambier",
                "-540,1": "America/Anchorage",
                "-480,1": "America/Los_Angeles",
                "-480,0": "Pacific/Pitcairn",
                "-420,0": "America/Phoenix",
                "-420,1": "America/Denver",
                "-360,0": "America/Guatemala",
                "-360,1": "America/Chicago",
                "-360,1,s": "Pacific/Easter",
                "-300,0": "America/Bogota",
                "-300,1": "America/New_York",
                "-270,0": "America/Caracas",
                "-240,1": "America/Halifax",
                "-240,0": "America/Santo_Domingo",
                "-240,1,s": "America/Santiago",
                "-210,1": "America/St_Johns",
                "-180,1": "America/Godthab",
                "-180,0": "America/Argentina/Buenos_Aires",
                "-180,1,s": "America/Montevideo",
                "-120,0": "Etc/GMT+2",
                "-120,1": "Etc/GMT+2",
                "-60,1": "Atlantic/Azores",
                "-60,0": "Atlantic/Cape_Verde",
                "0,0": "Etc/UTC",
                "0,1": "Europe/London",
                "60,1": "Europe/Berlin",
                "60,0": "Africa/Lagos",
                "60,1,s": "Africa/Windhoek",
                "120,1": "Asia/Beirut",
                "120,0": "Africa/Johannesburg",
                "180,0": "Asia/Baghdad",
                "180,1": "Europe/Moscow",
                "210,1": "Asia/Tehran",
                "240,0": "Asia/Dubai",
                "240,1": "Asia/Baku",
                "270,0": "Asia/Kabul",
                "300,1": "Asia/Yekaterinburg",
                "300,0": "Asia/Karachi",
                "330,0": "Asia/Kolkata",
                "345,0": "Asia/Kathmandu",
                "360,0": "Asia/Dhaka",
                "360,1": "Asia/Omsk",
                "390,0": "Asia/Rangoon",
                "420,1": "Asia/Krasnoyarsk",
                "420,0": "Asia/Jakarta",
                "480,0": "Asia/Shanghai",
                "480,1": "Asia/Irkutsk",
                "525,0": "Australia/Eucla",
                "525,1,s": "Australia/Eucla",
                "540,1": "Asia/Yakutsk",
                "540,0": "Asia/Tokyo",
                "570,0": "Australia/Darwin",
                "570,1,s": "Australia/Adelaide",
                "600,0": "Australia/Brisbane",
                "600,1": "Asia/Vladivostok",
                "600,1,s": "Australia/Sydney",
                "630,1,s": "Australia/Lord_Howe",
                "660,1": "Asia/Kamchatka",
                "660,0": "Pacific/Noumea",
                "690,0": "Pacific/Norfolk",
                "720,1,s": "Pacific/Auckland",
                "720,0": "Pacific/Tarawa",
                "765,1,s": "Pacific/Chatham",
                "780,0": "Pacific/Tongatapu",
                "780,1,s": "Pacific/Apia",
                "840,0": "Pacific/Kiritimati"
            },
            n.olson.dst_start_dates = function() {
                "use strict";
                var t = new Date(2010,6,15,1,0,0,0);
                return {
                    "America/Denver": new Date(2011,2,13,3,0,0,0),
                    "America/Mazatlan": new Date(2011,3,3,3,0,0,0),
                    "America/Chicago": new Date(2011,2,13,3,0,0,0),
                    "America/Mexico_City": new Date(2011,3,3,3,0,0,0),
                    "America/Asuncion": new Date(2012,9,7,3,0,0,0),
                    "America/Santiago": new Date(2012,9,3,3,0,0,0),
                    "America/Campo_Grande": new Date(2012,9,21,5,0,0,0),
                    "America/Montevideo": new Date(2011,9,2,3,0,0,0),
                    "America/Sao_Paulo": new Date(2011,9,16,5,0,0,0),
                    "America/Los_Angeles": new Date(2011,2,13,8,0,0,0),
                    "America/Santa_Isabel": new Date(2011,3,5,8,0,0,0),
                    "America/Havana": new Date(2012,2,10,2,0,0,0),
                    "America/New_York": new Date(2012,2,10,7,0,0,0),
                    "Asia/Beirut": new Date(2011,2,27,1,0,0,0),
                    "Europe/Helsinki": new Date(2011,2,27,4,0,0,0),
                    "Europe/Istanbul": new Date(2011,2,28,5,0,0,0),
                    "Asia/Damascus": new Date(2011,3,1,2,0,0,0),
                    "Asia/Jerusalem": new Date(2011,3,1,6,0,0,0),
                    "Asia/Gaza": new Date(2009,2,28,0,30,0,0),
                    "Africa/Cairo": new Date(2009,3,25,0,30,0,0),
                    "Pacific/Auckland": new Date(2011,8,26,7,0,0,0),
                    "Pacific/Fiji": new Date(2010,11,29,23,0,0,0),
                    "America/Halifax": new Date(2011,2,13,6,0,0,0),
                    "America/Goose_Bay": new Date(2011,2,13,2,1,0,0),
                    "America/Miquelon": new Date(2011,2,13,5,0,0,0),
                    "America/Godthab": new Date(2011,2,27,1,0,0,0),
                    "Europe/Moscow": t,
                    "Asia/Yekaterinburg": t,
                    "Asia/Omsk": t,
                    "Asia/Krasnoyarsk": t,
                    "Asia/Irkutsk": t,
                    "Asia/Yakutsk": t,
                    "Asia/Vladivostok": t,
                    "Asia/Kamchatka": t,
                    "Europe/Minsk": t,
                    "Australia/Perth": new Date(2008,10,1,1,0,0,0)
                }
            }(),
            n.olson.ambiguity_list = {
                "America/Denver": ["America/Denver", "America/Mazatlan"],
                "America/Chicago": ["America/Chicago", "America/Mexico_City"],
                "America/Santiago": ["America/Santiago", "America/Asuncion", "America/Campo_Grande"],
                "America/Montevideo": ["America/Montevideo", "America/Sao_Paulo"],
                "Asia/Beirut": ["Asia/Beirut", "Europe/Helsinki", "Europe/Istanbul", "Asia/Damascus", "Asia/Jerusalem", "Asia/Gaza"],
                "Pacific/Auckland": ["Pacific/Auckland", "Pacific/Fiji"],
                "America/Los_Angeles": ["America/Los_Angeles", "America/Santa_Isabel"],
                "America/New_York": ["America/Havana", "America/New_York"],
                "America/Halifax": ["America/Goose_Bay", "America/Halifax"],
                "America/Godthab": ["America/Miquelon", "America/Godthab"],
                "Asia/Dubai": ["Europe/Moscow"],
                "Asia/Dhaka": ["Asia/Yekaterinburg"],
                "Asia/Jakarta": ["Asia/Omsk"],
                "Asia/Shanghai": ["Asia/Krasnoyarsk", "Australia/Perth"],
                "Asia/Tokyo": ["Asia/Irkutsk"],
                "Australia/Brisbane": ["Asia/Yakutsk"],
                "Pacific/Noumea": ["Asia/Vladivostok"],
                "Pacific/Tarawa": ["Asia/Kamchatka"],
                "Africa/Johannesburg": ["Asia/Gaza", "Africa/Cairo"],
                "Asia/Baghdad": ["Europe/Minsk"]
            },
            void (void 0 !== e ? e.jstz = n : i.jstz = n)
        }
        ).call(window)
    },
    609: function(t, e) {
        var e = void 0
          , t = void 0;
        (function() {
            var e = void 0, i, n;
            /*! URI.js v1.18.10 http://medialize.github.io/URI.js/ */
            i = this,
            n = function(t) {
                var e = t && t.SecondLevelDomains
                  , i = {
                    list: {
                        ac: " com gov mil net org ",
                        ae: " ac co gov mil name net org pro sch ",
                        af: " com edu gov net org ",
                        al: " com edu gov mil net org ",
                        ao: " co ed gv it og pb ",
                        ar: " com edu gob gov int mil net org tur ",
                        at: " ac co gv or ",
                        au: " asn com csiro edu gov id net org ",
                        ba: " co com edu gov mil net org rs unbi unmo unsa untz unze ",
                        bb: " biz co com edu gov info net org store tv ",
                        bh: " biz cc com edu gov info net org ",
                        bn: " com edu gov net org ",
                        bo: " com edu gob gov int mil net org tv ",
                        br: " adm adv agr am arq art ato b bio blog bmd cim cng cnt com coop ecn edu eng esp etc eti far flog fm fnd fot fst g12 ggf gov imb ind inf jor jus lel mat med mil mus net nom not ntr odo org ppg pro psc psi qsl rec slg srv tmp trd tur tv vet vlog wiki zlg ",
                        bs: " com edu gov net org ",
                        bz: " du et om ov rg ",
                        ca: " ab bc mb nb nf nl ns nt nu on pe qc sk yk ",
                        ck: " biz co edu gen gov info net org ",
                        cn: " ac ah bj com cq edu fj gd gov gs gx gz ha hb he hi hl hn jl js jx ln mil net nm nx org qh sc sd sh sn sx tj tw xj xz yn zj ",
                        co: " com edu gov mil net nom org ",
                        cr: " ac c co ed fi go or sa ",
                        cy: " ac biz com ekloges gov ltd name net org parliament press pro tm ",
                        do: " art com edu gob gov mil net org sld web ",
                        dz: " art asso com edu gov net org pol ",
                        ec: " com edu fin gov info med mil net org pro ",
                        eg: " com edu eun gov mil name net org sci ",
                        er: " com edu gov ind mil net org rochest w ",
                        es: " com edu gob nom org ",
                        et: " biz com edu gov info name net org ",
                        fj: " ac biz com info mil name net org pro ",
                        fk: " ac co gov net nom org ",
                        fr: " asso com f gouv nom prd presse tm ",
                        gg: " co net org ",
                        gh: " com edu gov mil org ",
                        gn: " ac com gov net org ",
                        gr: " com edu gov mil net org ",
                        gt: " com edu gob ind mil net org ",
                        gu: " com edu gov net org ",
                        hk: " com edu gov idv net org ",
                        hu: " 2000 agrar bolt casino city co erotica erotika film forum games hotel info ingatlan jogasz konyvelo lakas media news org priv reklam sex shop sport suli szex tm tozsde utazas video ",
                        id: " ac co go mil net or sch web ",
                        il: " ac co gov idf k12 muni net org ",
                        in: " ac co edu ernet firm gen gov i ind mil net nic org res ",
                        iq: " com edu gov i mil net org ",
                        ir: " ac co dnssec gov i id net org sch ",
                        it: " edu gov ",
                        je: " co net org ",
                        jo: " com edu gov mil name net org sch ",
                        jp: " ac ad co ed go gr lg ne or ",
                        ke: " ac co go info me mobi ne or sc ",
                        kh: " com edu gov mil net org per ",
                        ki: " biz com de edu gov info mob net org tel ",
                        km: " asso com coop edu gouv k medecin mil nom notaires pharmaciens presse tm veterinaire ",
                        kn: " edu gov net org ",
                        kr: " ac busan chungbuk chungnam co daegu daejeon es gangwon go gwangju gyeongbuk gyeonggi gyeongnam hs incheon jeju jeonbuk jeonnam k kg mil ms ne or pe re sc seoul ulsan ",
                        kw: " com edu gov net org ",
                        ky: " com edu gov net org ",
                        kz: " com edu gov mil net org ",
                        lb: " com edu gov net org ",
                        lk: " assn com edu gov grp hotel int ltd net ngo org sch soc web ",
                        lr: " com edu gov net org ",
                        lv: " asn com conf edu gov id mil net org ",
                        ly: " com edu gov id med net org plc sch ",
                        ma: " ac co gov m net org press ",
                        mc: " asso tm ",
                        me: " ac co edu gov its net org priv ",
                        mg: " com edu gov mil nom org prd tm ",
                        mk: " com edu gov inf name net org pro ",
                        ml: " com edu gov net org presse ",
                        mn: " edu gov org ",
                        mo: " com edu gov net org ",
                        mt: " com edu gov net org ",
                        mv: " aero biz com coop edu gov info int mil museum name net org pro ",
                        mw: " ac co com coop edu gov int museum net org ",
                        mx: " com edu gob net org ",
                        my: " com edu gov mil name net org sch ",
                        nf: " arts com firm info net other per rec store web ",
                        ng: " biz com edu gov mil mobi name net org sch ",
                        ni: " ac co com edu gob mil net nom org ",
                        np: " com edu gov mil net org ",
                        nr: " biz com edu gov info net org ",
                        om: " ac biz co com edu gov med mil museum net org pro sch ",
                        pe: " com edu gob mil net nom org sld ",
                        ph: " com edu gov i mil net ngo org ",
                        pk: " biz com edu fam gob gok gon gop gos gov net org web ",
                        pl: " art bialystok biz com edu gda gdansk gorzow gov info katowice krakow lodz lublin mil net ngo olsztyn org poznan pwr radom slupsk szczecin torun warszawa waw wroc wroclaw zgora ",
                        pr: " ac biz com edu est gov info isla name net org pro prof ",
                        ps: " com edu gov net org plo sec ",
                        pw: " belau co ed go ne or ",
                        ro: " arts com firm info nom nt org rec store tm www ",
                        rs: " ac co edu gov in org ",
                        sb: " com edu gov net org ",
                        sc: " com edu gov net org ",
                        sh: " co com edu gov net nom org ",
                        sl: " com edu gov net org ",
                        st: " co com consulado edu embaixada gov mil net org principe saotome store ",
                        sv: " com edu gob org red ",
                        sz: " ac co org ",
                        tr: " av bbs bel biz com dr edu gen gov info k12 name net org pol tel tsk tv web ",
                        tt: " aero biz cat co com coop edu gov info int jobs mil mobi museum name net org pro tel travel ",
                        tw: " club com ebiz edu game gov idv mil net org ",
                        mu: " ac co com gov net or org ",
                        mz: " ac co edu gov org ",
                        na: " co com ",
                        nz: " ac co cri geek gen govt health iwi maori mil net org parliament school ",
                        pa: " abo ac com edu gob ing med net nom org sld ",
                        pt: " com edu gov int net nome org publ ",
                        py: " com edu gov mil net org ",
                        qa: " com edu gov mil net org ",
                        re: " asso com nom ",
                        ru: " ac adygeya altai amur arkhangelsk astrakhan bashkiria belgorod bir bryansk buryatia cbg chel chelyabinsk chita chukotka chuvashia com dagestan e-burg edu gov grozny int irkutsk ivanovo izhevsk jar joshkar-ola kalmykia kaluga kamchatka karelia kazan kchr kemerovo khabarovsk khakassia khv kirov koenig komi kostroma kranoyarsk kuban kurgan kursk lipetsk magadan mari mari-el marine mil mordovia mosreg msk murmansk nalchik net nnov nov novosibirsk nsk omsk orenburg org oryol penza perm pp pskov ptz rnd ryazan sakhalin samara saratov simbirsk smolensk spb stavropol stv surgut tambov tatarstan tom tomsk tsaritsyn tsk tula tuva tver tyumen udm udmurtia ulan-ude vladikavkaz vladimir vladivostok volgograd vologda voronezh vrn vyatka yakutia yamal yekaterinburg yuzhno-sakhalinsk ",
                        rw: " ac co com edu gouv gov int mil net ",
                        sa: " com edu gov med net org pub sch ",
                        sd: " com edu gov info med net org tv ",
                        se: " a ac b bd c d e f g h i k l m n o org p parti pp press r s t tm u w x y z ",
                        sg: " com edu gov idn net org per ",
                        sn: " art com edu gouv org perso univ ",
                        sy: " com edu gov mil net news org ",
                        th: " ac co go in mi net or ",
                        tj: " ac biz co com edu go gov info int mil name net nic org test web ",
                        tn: " agrinet com defense edunet ens fin gov ind info intl mincom nat net org perso rnrt rns rnu tourism ",
                        tz: " ac co go ne or ",
                        ua: " biz cherkassy chernigov chernovtsy ck cn co com crimea cv dn dnepropetrovsk donetsk dp edu gov if in ivano-frankivsk kh kharkov kherson khmelnitskiy kiev kirovograd km kr ks kv lg lugansk lutsk lviv me mk net nikolaev od odessa org pl poltava pp rovno rv sebastopol sumy te ternopil uzhgorod vinnica vn zaporizhzhe zhitomir zp zt ",
                        ug: " ac co go ne or org sc ",
                        uk: " ac bl british-library co cym gov govt icnet jet lea ltd me mil mod national-library-scotland nel net nhs nic nls org orgn parliament plc police sch scot soc ",
                        us: " dni fed isa kids nsn ",
                        uy: " com edu gub mil net org ",
                        ve: " co com edu gob info mil net org web ",
                        vi: " co com k12 net org ",
                        vn: " ac biz com edu gov health info int name net org pro ",
                        ye: " co com gov ltd me net org plc ",
                        yu: " ac co edu gov org ",
                        za: " ac agric alt bourse city co cybernet db edu gov grondar iaccess imt inca landesign law mil net ngo nis nom olivetti org pix school tm web ",
                        zm: " ac co com edu gov net org sch ",
                        com: "ar br cn de eu gb gr hu jpn kr no qc ru sa se uk us uy za ",
                        net: "gb jp se uk ",
                        org: "ae",
                        de: "com "
                    },
                    has: function(t) {
                        var d = t.lastIndexOf(".");
                        if (0 >= d || d >= t.length - 1)
                            return !1;
                        var e = t.lastIndexOf(".", d - 1);
                        if (0 >= e || e >= d - 1)
                            return !1;
                        var n = i.list[t.slice(d + 1)];
                        return !!n && 0 <= n.indexOf(" " + t.slice(e + 1, d) + " ")
                    },
                    is: function(t) {
                        var d = t.lastIndexOf(".");
                        if (0 >= d || d >= t.length - 1 || 0 <= t.lastIndexOf(".", d - 1))
                            return !1;
                        var e = i.list[t.slice(d + 1)];
                        return !!e && 0 <= e.indexOf(" " + t.slice(0, d) + " ")
                    },
                    get: function(t) {
                        var d = t.lastIndexOf(".");
                        if (0 >= d || d >= t.length - 1)
                            return null;
                        var e = t.lastIndexOf(".", d - 1);
                        if (0 >= e || e >= d - 1)
                            return null;
                        var n = i.list[t.slice(d + 1)];
                        return !n || 0 > n.indexOf(" " + t.slice(e + 1, d) + " ") ? null : t.slice(e + 1)
                    },
                    noConflict: function() {
                        return t.SecondLevelDomains === this && (t.SecondLevelDomains = e),
                        this
                    }
                };
                return i
            }
            ,
            void ("object" == typeof t && t.exports ? t.exports = n() : "function" == typeof define && define.amd ? define(n) : i.SecondLevelDomains = n(i)),
            function(i, n) {
                "object" == typeof t && t.exports ? t.exports = n(e("./punycode"), e("./IPv6"), e("./SecondLevelDomains")) : "function" == typeof define && define.amd ? define(["./punycode", "./IPv6", "./SecondLevelDomains"], n) : i.URI = n(i.punycode, i.IPv6, i.SecondLevelDomains, i)
            }(this, (function(t, e, i, n) {
                function d(t, e) {
                    var i = 1 <= arguments.length
                      , n = 2 <= arguments.length;
                    if (!(this instanceof d))
                        return i ? n ? new d(t,e) : new d(t) : new d;
                    if (void 0 === t) {
                        if (i)
                            throw new TypeError("undefined is not a valid argument for URI");
                        t = "undefined" != typeof location ? location.href + "" : ""
                    }
                    if (null === t && i)
                        throw new TypeError("null is not a valid argument for URI");
                    return this.href(t),
                    void 0 !== e ? this.absoluteTo(e) : this
                }
                function r(t) {
                    return t.replace(/([.*+?^=!:${}()|[\]\/\\])/g, "\\$1")
                }
                function s(t) {
                    return void 0 === t ? "Undefined" : String(Object.prototype.toString.call(t)).slice(8, -1)
                }
                function o(t) {
                    return "Array" === s(t)
                }
                function a(t, e) {
                    var i = {}, d;
                    if ("RegExp" === s(e))
                        i = null;
                    else if (o(e)) {
                        var n = 0;
                        for (d = e.length; n < d; n++)
                            i[e[n]] = !0
                    } else
                        i[e] = !0;
                    for (n = 0,
                    d = t.length; n < d; n++)
                        (i && void 0 !== i[t[n]] || !i && e.test(t[n])) && (t.splice(n, 1),
                        d--,
                        n--);
                    return t
                }
                function l(t, e) {
                    var i;
                    if (o(e)) {
                        var d = 0;
                        for (i = e.length; d < i; d++)
                            if (!l(t, e[d]))
                                return !1;
                        return !0
                    }
                    var n = s(e);
                    for (d = 0,
                    i = t.length; d < i; d++)
                        if ("RegExp" === n) {
                            if ("string" == typeof t[d] && t[d].match(e))
                                return !0
                        } else if (t[d] === e)
                            return !0;
                    return !1
                }
                function h(t, e) {
                    if (!o(t) || !o(e) || t.length !== e.length)
                        return !1;
                    t.sort(),
                    e.sort();
                    for (var i = 0, d = t.length; i < d; i++)
                        if (t[i] !== e[i])
                            return !1;
                    return !0
                }
                function u(t) {
                    return t.replace(/^\/+|\/+$/g, "")
                }
                function D(t) {
                    return escape(t)
                }
                function c(t) {
                    return encodeURIComponent(t).replace(/[!'()*]/g, D).replace(/\*/g, "%2A")
                }
                function p(t) {
                    return function(e, i) {
                        return void 0 === e ? this._parts[t] || "" : (this._parts[t] = e || null,
                        this.build(!i),
                        this)
                    }
                }
                function f(t, e) {
                    return function(i, d) {
                        return void 0 === i ? this._parts[t] || "" : (null !== i && ((i += "").charAt(0) === e && (i = i.substring(1))),
                        this._parts[t] = i,
                        this.build(!d),
                        this)
                    }
                }
                var m = n && n.URI;
                d.version = "1.18.10";
                var g = d.prototype
                  , q = Object.prototype.hasOwnProperty;
                d._parts = function() {
                    return {
                        protocol: null,
                        username: null,
                        password: null,
                        hostname: null,
                        urn: null,
                        port: null,
                        path: null,
                        query: null,
                        fragment: null,
                        duplicateQueryParameters: d.duplicateQueryParameters,
                        escapeQuerySpace: d.escapeQuerySpace
                    }
                }
                ,
                d.duplicateQueryParameters = !1,
                d.escapeQuerySpace = !0,
                d.protocol_expression = /^[a-z][a-z0-9.+-]*$/i,
                d.idn_expression = /[^a-z0-9\.-]/i,
                d.punycode_expression = /(xn--)/i,
                d.ip4_expression = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,
                d.ip6_expression = /^\s*((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s*$/,
                d.find_uri_expression = /\b((?:[a-z][\w-]+:(?:\/{1,3}|[a-z0-9%])|www\d{0,3}[.]|[a-z0-9.\-]+[.][a-z]{2,4}\/)(?:[^\s()<>]+|\(([^\s()<>]+|(\([^\s()<>]+\)))*\))+(?:\(([^\s()<>]+|(\([^\s()<>]+\)))*\)|[^\s`!()\[\]{};:'".,<>?\u00ab\u00bb\u201c\u201d\u2018\u2019]))/gi,
                d.findUri = {
                    start: /\b(?:([a-z][a-z0-9.+-]*:\/\/)|www\.)/gi,
                    end: /[\s\r\n]|$/,
                    trim: /[`!()\[\]{};:'".,<>?\u00ab\u00bb\u201c\u201d\u201e\u2018\u2019]+$/,
                    parens: /(\([^\)]*\)|\[[^\]]*\]|\{[^}]*\}|<[^>]*>)/g
                },
                d.defaultPorts = {
                    http: "80",
                    https: "443",
                    ftp: "21",
                    gopher: "70",
                    ws: "80",
                    wss: "443"
                },
                d.invalid_hostname_characters = /[^a-zA-Z0-9\.-]/,
                d.domAttributes = {
                    a: "href",
                    blockquote: "cite",
                    link: "href",
                    base: "href",
                    script: "src",
                    form: "action",
                    img: "src",
                    area: "href",
                    iframe: "src",
                    embed: "src",
                    source: "src",
                    track: "src",
                    input: "src",
                    audio: "src",
                    video: "src"
                },
                d.getDomAttribute = function(t) {
                    if (t && t.nodeName) {
                        var e = t.nodeName.toLowerCase();
                        if ("input" !== e || "image" === t.type)
                            return d.domAttributes[e]
                    }
                }
                ,
                d.encode = c,
                d.decode = decodeURIComponent,
                d.iso8859 = function() {
                    d.encode = escape,
                    d.decode = unescape
                }
                ,
                d.unicode = function() {
                    d.encode = c,
                    d.decode = decodeURIComponent
                }
                ,
                d.characters = {
                    pathname: {
                        encode: {
                            expression: /%(24|26|2B|2C|3B|3D|3A|40)/gi,
                            map: {
                                "%24": "$",
                                "%26": "&",
                                "%2B": "+",
                                "%2C": ",",
                                "%3B": ";",
                                "%3D": "=",
                                "%3A": ":",
                                "%40": "@"
                            }
                        },
                        decode: {
                            expression: /[\/\?#]/g,
                            map: {
                                "/": "%2F",
                                "?": "%3F",
                                "#": "%23"
                            }
                        }
                    },
                    reserved: {
                        encode: {
                            expression: /%(21|23|24|26|27|28|29|2A|2B|2C|2F|3A|3B|3D|3F|40|5B|5D)/gi,
                            map: {
                                "%3A": ":",
                                "%2F": "/",
                                "%3F": "?",
                                "%23": "#",
                                "%5B": "[",
                                "%5D": "]",
                                "%40": "@",
                                "%21": "!",
                                "%24": "$",
                                "%26": "&",
                                "%27": "'",
                                "%28": "(",
                                "%29": ")",
                                "%2A": "*",
                                "%2B": "+",
                                "%2C": ",",
                                "%3B": ";",
                                "%3D": "="
                            }
                        }
                    },
                    urnpath: {
                        encode: {
                            expression: /%(21|24|27|28|29|2A|2B|2C|3B|3D|40)/gi,
                            map: {
                                "%21": "!",
                                "%24": "$",
                                "%27": "'",
                                "%28": "(",
                                "%29": ")",
                                "%2A": "*",
                                "%2B": "+",
                                "%2C": ",",
                                "%3B": ";",
                                "%3D": "=",
                                "%40": "@"
                            }
                        },
                        decode: {
                            expression: /[\/\?#:]/g,
                            map: {
                                "/": "%2F",
                                "?": "%3F",
                                "#": "%23",
                                ":": "%3A"
                            }
                        }
                    }
                },
                d.encodeQuery = function(t, e) {
                    var i = d.encode(t + "");
                    return void 0 === e && (e = d.escapeQuerySpace),
                    e ? i.replace(/%20/g, "+") : i
                }
                ,
                d.decodeQuery = function(t, e) {
                    t += "",
                    void 0 === e && (e = d.escapeQuerySpace);
                    try {
                        return d.decode(e ? t.replace(/\+/g, "%20") : t)
                    } catch (e) {
                        return t
                    }
                }
                ;
                var v = {
                    encode: "encode",
                    decode: "decode"
                }, b, y = function(t, e) {
                    return function(i) {
                        try {
                            return d[e](i + "").replace(d.characters[t][e].expression, (function(i) {
                                return d.characters[t][e].map[i]
                            }
                            ))
                        } catch (t) {
                            return i
                        }
                    }
                };
                for (b in v)
                    d[b + "PathSegment"] = y("pathname", v[b]),
                    d[b + "UrnPathSegment"] = y("urnpath", v[b]);
                v = function(t, e, i) {
                    return function(n) {
                        for (var s = i ? function(t) {
                            return d[e](d[i](t))
                        }
                        : d[e], o = 0, a = (n = (n + "").split(t)).length; o < a; o++)
                            n[o] = s(n[o]);
                        return n.join(t)
                    }
                }
                ,
                d.decodePath = v("/", "decodePathSegment"),
                d.decodeUrnPath = v(":", "decodeUrnPathSegment"),
                d.recodePath = v("/", "encodePathSegment", "decode"),
                d.recodeUrnPath = v(":", "encodeUrnPathSegment", "decode"),
                d.encodeReserved = y("reserved", "encode"),
                d.parse = function(t, e) {
                    e || (e = {});
                    var i = t.indexOf("#");
                    return -1 < i && (e.fragment = t.substring(i + 1) || null,
                    t = t.substring(0, i)),
                    -1 < (i = t.indexOf("?")) && (e.query = t.substring(i + 1) || null,
                    t = t.substring(0, i)),
                    "//" === t.substring(0, 2) ? (e.protocol = null,
                    t = t.substring(2),
                    t = d.parseAuthority(t, e)) : -1 < (i = t.indexOf(":")) && (e.protocol = t.substring(0, i) || null,
                    e.protocol && !e.protocol.match(d.protocol_expression) ? e.protocol = void 0 : "//" === t.substring(i + 1, i + 3) ? (t = t.substring(i + 3),
                    t = d.parseAuthority(t, e)) : (t = t.substring(i + 1),
                    e.urn = !0)),
                    e.path = t,
                    e
                }
                ,
                d.parseHost = function(t, e) {
                    var i = (t = t.replace(/\\/g, "/")).indexOf("/");
                    if (-1 === i && (i = t.length),
                    "[" === t.charAt(0)) {
                        var d = t.indexOf("]");
                        e.hostname = t.substring(1, d) || null,
                        e.port = t.substring(d + 2, i) || null,
                        "/" === e.port && (e.port = null)
                    } else {
                        var n = t.indexOf(":");
                        d = t.indexOf("/"),
                        -1 !== (n = t.indexOf(":", n + 1)) && (-1 === d || n < d) ? (e.hostname = t.substring(0, i) || null,
                        e.port = null) : (d = t.substring(0, i).split(":"),
                        e.hostname = d[0] || null,
                        e.port = d[1] || null)
                    }
                    return e.hostname && "/" !== t.substring(i).charAt(0) && (i++,
                    t = "/" + t),
                    t.substring(i) || "/"
                }
                ,
                d.parseAuthority = function(t, e) {
                    return t = d.parseUserinfo(t, e),
                    d.parseHost(t, e)
                }
                ,
                d.parseUserinfo = function(t, e) {
                    var i = t.indexOf("/")
                      , n = t.lastIndexOf("@", -1 < i ? i : t.length - 1);
                    return -1 < n && (-1 === i || n < i) ? (i = t.substring(0, n).split(":"),
                    e.username = i[0] ? d.decode(i[0]) : null,
                    i.shift(),
                    e.password = i[0] ? d.decode(i.join(":")) : null,
                    t = t.substring(n + 1)) : (e.username = null,
                    e.password = null),
                    t
                }
                ,
                d.parseQuery = function(t, e) {
                    if (!t)
                        return {};
                    if (!(t = t.replace(/&+/g, "&").replace(/^\?*&*|&+$/g, "")))
                        return {};
                    for (var i = {}, n = t.split("&"), s = n.length, o, a, l = 0; l < s; l++)
                        o = n[l].split("="),
                        a = d.decodeQuery(o.shift(), e),
                        o = o.length ? d.decodeQuery(o.join("="), e) : null,
                        q.call(i, a) ? ("string" != typeof i[a] && null !== i[a] || (i[a] = [i[a]]),
                        i[a].push(o)) : i[a] = o;
                    return i
                }
                ,
                d.build = function(t) {
                    var e = "";
                    return t.protocol && (e += t.protocol + ":"),
                    t.urn || !e && !t.hostname || (e += "//"),
                    e += d.buildAuthority(t) || "",
                    "string" == typeof t.path && ("/" !== t.path.charAt(0) && "string" == typeof t.hostname && (e += "/"),
                    e += t.path),
                    "string" == typeof t.query && t.query && (e += "?" + t.query),
                    "string" == typeof t.fragment && t.fragment && (e += "#" + t.fragment),
                    e
                }
                ,
                d.buildHost = function(t) {
                    var e = "";
                    return t.hostname ? (e = d.ip6_expression.test(t.hostname) ? e + "[" + t.hostname + "]" : e + t.hostname,
                    t.port && (e += ":" + t.port),
                    e) : ""
                }
                ,
                d.buildAuthority = function(t) {
                    return d.buildUserinfo(t) + d.buildHost(t)
                }
                ,
                d.buildUserinfo = function(t) {
                    var e = "";
                    return t.username && (e += d.encode(t.username)),
                    t.password && (e += ":" + d.encode(t.password)),
                    e && (e += "@"),
                    e
                }
                ,
                d.buildQuery = function(t, e, i) {
                    var n = "", s, a;
                    for (s in t)
                        if (q.call(t, s) && s)
                            if (o(t[s])) {
                                var l = {}
                                  , h = 0;
                                for (a = t[s].length; h < a; h++)
                                    void 0 !== t[s][h] && void 0 === l[t[s][h] + ""] && (n += "&" + d.buildQueryParameter(s, t[s][h], i),
                                    !0 !== e && (l[t[s][h] + ""] = !0))
                            } else
                                void 0 !== t[s] && (n += "&" + d.buildQueryParameter(s, t[s], i));
                    return n.substring(1)
                }
                ,
                d.buildQueryParameter = function(t, e, i) {
                    return d.encodeQuery(t, i) + (null !== e ? "=" + d.encodeQuery(e, i) : "")
                }
                ,
                d.addQuery = function(t, e, i) {
                    if ("object" == typeof e)
                        for (var n in e)
                            q.call(e, n) && d.addQuery(t, n, e[n]);
                    else {
                        if ("string" != typeof e)
                            throw new TypeError("URI.addQuery() accepts an object, string as the name parameter");
                        void 0 === t[e] ? t[e] = i : ("string" == typeof t[e] && (t[e] = [t[e]]),
                        o(i) || (i = [i]),
                        t[e] = (t[e] || []).concat(i))
                    }
                }
                ,
                d.removeQuery = function(t, e, i) {
                    var n;
                    if (o(e))
                        for (i = 0,
                        n = e.length; i < n; i++)
                            t[e[i]] = void 0;
                    else if ("RegExp" === s(e))
                        for (n in t)
                            e.test(n) && (t[n] = void 0);
                    else if ("object" == typeof e)
                        for (n in e)
                            q.call(e, n) && d.removeQuery(t, n, e[n]);
                    else {
                        if ("string" != typeof e)
                            throw new TypeError("URI.removeQuery() accepts an object, string, RegExp as the first parameter");
                        void 0 !== i ? "RegExp" === s(i) ? !o(t[e]) && i.test(t[e]) ? t[e] = void 0 : t[e] = a(t[e], i) : t[e] !== String(i) || o(i) && 1 !== i.length ? o(t[e]) && (t[e] = a(t[e], i)) : t[e] = void 0 : t[e] = void 0
                    }
                }
                ,
                d.hasQuery = function(t, e, i, n) {
                    switch (s(e)) {
                    case "String":
                        break;
                    case "RegExp":
                        for (var a in t)
                            if (q.call(t, a) && e.test(a) && (void 0 === i || d.hasQuery(t, a, i)))
                                return !0;
                        return !1;
                    case "Object":
                        for (var u in e)
                            if (q.call(e, u) && !d.hasQuery(t, u, e[u]))
                                return !1;
                        return !0;
                    default:
                        throw new TypeError("URI.hasQuery() accepts a string, regular expression or object as the name parameter")
                    }
                    switch (s(i)) {
                    case "Undefined":
                        return e in t;
                    case "Boolean":
                        return i === (t = !(o(t[e]) ? !t[e].length : !t[e]));
                    case "Function":
                        return !!i(t[e], e, t);
                    case "Array":
                        return !!o(t[e]) && (n ? l : h)(t[e], i);
                    case "RegExp":
                        return o(t[e]) ? !!n && l(t[e], i) : !(!t[e] || !t[e].match(i));
                    case "Number":
                        i = String(i);
                    case "String":
                        return o(t[e]) ? !!n && l(t[e], i) : t[e] === i;
                    default:
                        throw new TypeError("URI.hasQuery() accepts undefined, boolean, string, number, RegExp, Function as the value parameter")
                    }
                }
                ,
                d.joinPaths = function() {
                    for (var t = [], e = [], i = 0, n = 0; n < arguments.length; n++) {
                        var s = new d(arguments[n]);
                        t.push(s);
                        for (var s = s.segment(), o = 0; o < s.length; o++)
                            "string" == typeof s[o] && e.push(s[o]),
                            s[o] && i++
                    }
                    return e.length && i ? (e = new d("").segment(e),
                    "" !== t[0].path() && "/" !== t[0].path().slice(0, 1) || e.path("/" + e.path()),
                    e.normalize()) : new d("")
                }
                ,
                d.commonPath = function(t, e) {
                    var i = Math.min(t.length, e.length), d;
                    for (d = 0; d < i; d++)
                        if (t.charAt(d) !== e.charAt(d)) {
                            d--;
                            break
                        }
                    return 1 > d ? t.charAt(0) === e.charAt(0) && "/" === t.charAt(0) ? "/" : "" : ("/" === t.charAt(d) && "/" === e.charAt(d) || (d = t.substring(0, d).lastIndexOf("/")),
                    t.substring(0, d + 1))
                }
                ,
                d.withinString = function(t, e, i) {
                    i || (i = {});
                    var n = i.start || d.findUri.start
                      , s = i.end || d.findUri.end
                      , o = i.trim || d.findUri.trim
                      , a = i.parens || d.findUri.parens
                      , l = /[a-z0-9-]=["']?$/i;
                    for (n.lastIndex = 0; ; ) {
                        var h = n.exec(t);
                        if (!h)
                            break;
                        var u = h.index, c;
                        if (i.ignoreHtml)
                            if ((c = t.slice(Math.max(u - 3, 0), u)) && l.test(c))
                                continue;
                        for (var p = u + t.slice(u).search(s), c = t.slice(u, p), p = -1; ; ) {
                            var q = a.exec(c);
                            if (!q)
                                break;
                            p = Math.max(p, q.index + q[0].length)
                        }
                        (c = -1 < p ? c.slice(0, p) + c.slice(p).replace(o, "") : c.replace(o, "")).length <= h[0].length || i.ignore && i.ignore.test(c) || (void 0 === (h = e(c, u, p = u + c.length, t)) ? n.lastIndex = p : (h = String(h),
                        t = t.slice(0, u) + h + t.slice(p),
                        n.lastIndex = u + h.length))
                    }
                    return n.lastIndex = 0,
                    t
                }
                ,
                d.ensureValidHostname = function(e) {
                    if (e.match(d.invalid_hostname_characters)) {
                        if (!t)
                            throw new TypeError('Hostname "' + e + '" contains characters other than [A-Z0-9.-] and Punycode.js is not available');
                        if (t.toASCII(e).match(d.invalid_hostname_characters))
                            throw new TypeError('Hostname "' + e + '" contains characters other than [A-Z0-9.-]')
                    }
                }
                ,
                d.noConflict = function(t) {
                    return t ? (t = {
                        URI: this.noConflict()
                    },
                    n.URITemplate && "function" == typeof n.URITemplate.noConflict && (t.URITemplate = n.URITemplate.noConflict()),
                    n.IPv6 && "function" == typeof n.IPv6.noConflict && (t.IPv6 = n.IPv6.noConflict()),
                    n.SecondLevelDomains && "function" == typeof n.SecondLevelDomains.noConflict && (t.SecondLevelDomains = n.SecondLevelDomains.noConflict()),
                    t) : (n.URI === this && (n.URI = m),
                    this)
                }
                ,
                g.build = function(t) {
                    return !0 === t ? this._deferred_build = !0 : (void 0 === t || this._deferred_build) && (this._string = d.build(this._parts),
                    this._deferred_build = !1),
                    this
                }
                ,
                g.clone = function() {
                    return new d(this)
                }
                ,
                g.valueOf = g.toString = function() {
                    return this.build(!1)._string
                }
                ,
                g.protocol = p("protocol"),
                g.username = p("username"),
                g.password = p("password"),
                g.hostname = p("hostname"),
                g.port = p("port"),
                g.query = f("query", "?"),
                g.fragment = f("fragment", "#"),
                g.search = function(t, e) {
                    var i = this.query(t, e);
                    return "string" == typeof i && i.length ? "?" + i : i
                }
                ,
                g.hash = function(t, e) {
                    var i = this.fragment(t, e);
                    return "string" == typeof i && i.length ? "#" + i : i
                }
                ,
                g.pathname = function(t, e) {
                    if (void 0 === t || !0 === t) {
                        var i = this._parts.path || (this._parts.hostname ? "/" : "");
                        return t ? (this._parts.urn ? d.decodeUrnPath : d.decodePath)(i) : i
                    }
                    return this._parts.path = this._parts.urn ? t ? d.recodeUrnPath(t) : "" : t ? d.recodePath(t) : "/",
                    this.build(!e),
                    this
                }
                ,
                g.path = g.pathname,
                g.href = function(t, e) {
                    var i;
                    if (void 0 === t)
                        return this.toString();
                    this._string = "",
                    this._parts = d._parts();
                    var n = t instanceof d
                      , s = "object" == typeof t && (t.hostname || t.path || t.pathname);
                    if (t.nodeName && (t = t[s = d.getDomAttribute(t)] || "",
                    s = !1),
                    !n && s && void 0 !== t.pathname && (t = t.toString()),
                    "string" == typeof t || t instanceof String)
                        this._parts = d.parse(String(t), this._parts);
                    else {
                        if (!n && !s)
                            throw new TypeError("invalid input");
                        for (i in n = n ? t._parts : t)
                            q.call(this._parts, i) && (this._parts[i] = n[i])
                    }
                    return this.build(!e),
                    this
                }
                ,
                g.is = function(t) {
                    var e = !1
                      , n = !1
                      , s = !1
                      , o = !1
                      , a = !1
                      , l = !1
                      , h = !1
                      , u = !this._parts.urn;
                    switch (this._parts.hostname && (u = !1,
                    n = d.ip4_expression.test(this._parts.hostname),
                    s = d.ip6_expression.test(this._parts.hostname),
                    a = (o = !(e = n || s)) && i && i.has(this._parts.hostname),
                    l = o && d.idn_expression.test(this._parts.hostname),
                    h = o && d.punycode_expression.test(this._parts.hostname)),
                    t.toLowerCase()) {
                    case "relative":
                        return u;
                    case "absolute":
                        return !u;
                    case "domain":
                    case "name":
                        return o;
                    case "sld":
                        return a;
                    case "ip":
                        return e;
                    case "ip4":
                    case "ipv4":
                    case "inet4":
                        return n;
                    case "ip6":
                    case "ipv6":
                    case "inet6":
                        return s;
                    case "idn":
                        return l;
                    case "url":
                        return !this._parts.urn;
                    case "urn":
                        return !!this._parts.urn;
                    case "punycode":
                        return h
                    }
                    return null
                }
                ;
                var _ = g.protocol
                  , w = g.port
                  , x = g.hostname;
                g.protocol = function(t, e) {
                    if (void 0 !== t && t && !(t = t.replace(/:(\/\/)?$/, "")).match(d.protocol_expression))
                        throw new TypeError('Protocol "' + t + "\" contains characters other than [A-Z0-9.+-] or doesn't start with [A-Z]");
                    return _.call(this, t, e)
                }
                ,
                g.scheme = g.protocol,
                g.port = function(t, e) {
                    if (this._parts.urn)
                        return void 0 === t ? "" : this;
                    if (void 0 !== t && (0 === t && (t = null),
                    t && (":" === (t += "").charAt(0) && (t = t.substring(1)),
                    t.match(/[^0-9]/))))
                        throw new TypeError('Port "' + t + '" contains characters other than [0-9]');
                    return w.call(this, t, e)
                }
                ,
                g.hostname = function(t, e) {
                    if (this._parts.urn)
                        return void 0 === t ? "" : this;
                    if (void 0 !== t) {
                        var i = {};
                        if ("/" !== d.parseHost(t, i))
                            throw new TypeError('Hostname "' + t + '" contains characters other than [A-Z0-9.-]');
                        t = i.hostname
                    }
                    return x.call(this, t, e)
                }
                ,
                g.origin = function(t, e) {
                    if (this._parts.urn)
                        return void 0 === t ? "" : this;
                    if (void 0 === t) {
                        var i = this.protocol();
                        return this.authority() ? (i ? i + "://" : "") + this.authority() : ""
                    }
                    return i = d(t),
                    this.protocol(i.protocol()).authority(i.authority()).build(!e),
                    this
                }
                ,
                g.host = function(t, e) {
                    if (this._parts.urn)
                        return void 0 === t ? "" : this;
                    if (void 0 === t)
                        return this._parts.hostname ? d.buildHost(this._parts) : "";
                    if ("/" !== d.parseHost(t, this._parts))
                        throw new TypeError('Hostname "' + t + '" contains characters other than [A-Z0-9.-]');
                    return this.build(!e),
                    this
                }
                ,
                g.authority = function(t, e) {
                    if (this._parts.urn)
                        return void 0 === t ? "" : this;
                    if (void 0 === t)
                        return this._parts.hostname ? d.buildAuthority(this._parts) : "";
                    if ("/" !== d.parseAuthority(t, this._parts))
                        throw new TypeError('Hostname "' + t + '" contains characters other than [A-Z0-9.-]');
                    return this.build(!e),
                    this
                }
                ,
                g.userinfo = function(t, e) {
                    if (this._parts.urn)
                        return void 0 === t ? "" : this;
                    if (void 0 === t) {
                        var i = d.buildUserinfo(this._parts);
                        return i ? i.substring(0, i.length - 1) : i
                    }
                    return "@" !== t[t.length - 1] && (t += "@"),
                    d.parseUserinfo(t, this._parts),
                    this.build(!e),
                    this
                }
                ,
                g.resource = function(t, e) {
                    if (void 0 === t)
                        return this.path() + this.search() + this.hash();
                    var i = d.parse(t);
                    return this._parts.path = i.path,
                    this._parts.query = i.query,
                    this._parts.fragment = i.fragment,
                    this.build(!e),
                    this
                }
                ,
                g.subdomain = function(t, e) {
                    if (this._parts.urn)
                        return void 0 === t ? "" : this;
                    if (void 0 === t) {
                        if (!this._parts.hostname || this.is("IP"))
                            return "";
                        var i = this._parts.hostname.length - this.domain().length - 1;
                        return this._parts.hostname.substring(0, i) || ""
                    }
                    return i = this._parts.hostname.length - this.domain().length,
                    i = this._parts.hostname.substring(0, i),
                    i = new RegExp("^" + r(i)),
                    t && "." !== t.charAt(t.length - 1) && (t += "."),
                    t && d.ensureValidHostname(t),
                    this._parts.hostname = this._parts.hostname.replace(i, t),
                    this.build(!e),
                    this
                }
                ,
                g.domain = function(t, e) {
                    if (this._parts.urn)
                        return void 0 === t ? "" : this;
                    if ("boolean" == typeof t && (e = t,
                    t = void 0),
                    void 0 === t) {
                        if (!this._parts.hostname || this.is("IP"))
                            return "";
                        var i = this._parts.hostname.match(/\./g);
                        return i && 2 > i.length ? this._parts.hostname : (i = this._parts.hostname.length - this.tld(e).length - 1,
                        i = this._parts.hostname.lastIndexOf(".", i - 1) + 1,
                        this._parts.hostname.substring(i) || "")
                    }
                    if (!t)
                        throw new TypeError("cannot set domain empty");
                    return d.ensureValidHostname(t),
                    !this._parts.hostname || this.is("IP") ? this._parts.hostname = t : (i = new RegExp(r(this.domain()) + "$"),
                    this._parts.hostname = this._parts.hostname.replace(i, t)),
                    this.build(!e),
                    this
                }
                ,
                g.tld = function(t, e) {
                    if (this._parts.urn)
                        return void 0 === t ? "" : this;
                    if ("boolean" == typeof t && (e = t,
                    t = void 0),
                    void 0 === t) {
                        if (!this._parts.hostname || this.is("IP"))
                            return "";
                        var n = this._parts.hostname.lastIndexOf(".")
                          , n = this._parts.hostname.substring(n + 1);
                        return !0 !== e && i && i.list[n.toLowerCase()] && i.get(this._parts.hostname) || n
                    }
                    if (!t)
                        throw new TypeError("cannot set TLD empty");
                    if (t.match(/[^a-zA-Z0-9-]/)) {
                        if (!i || !i.is(t))
                            throw new TypeError('TLD "' + t + '" contains characters other than [A-Z0-9]');
                        n = new RegExp(r(this.tld()) + "$"),
                        this._parts.hostname = this._parts.hostname.replace(n, t)
                    } else {
                        if (!this._parts.hostname || this.is("IP"))
                            throw new ReferenceError("cannot set TLD on non-domain host");
                        n = new RegExp(r(this.tld()) + "$"),
                        this._parts.hostname = this._parts.hostname.replace(n, t)
                    }
                    return this.build(!e),
                    this
                }
                ,
                g.directory = function(t, e) {
                    if (this._parts.urn)
                        return void 0 === t ? "" : this;
                    if (void 0 === t || !0 === t) {
                        if (!this._parts.path && !this._parts.hostname)
                            return "";
                        if ("/" === this._parts.path)
                            return "/";
                        var i = this._parts.path.length - this.filename().length - 1
                          , i = this._parts.path.substring(0, i) || (this._parts.hostname ? "/" : "");
                        return t ? d.decodePath(i) : i
                    }
                    return i = this._parts.path.length - this.filename().length,
                    i = this._parts.path.substring(0, i),
                    i = new RegExp("^" + r(i)),
                    this.is("relative") || (t || (t = "/"),
                    "/" !== t.charAt(0) && (t = "/" + t)),
                    t && "/" !== t.charAt(t.length - 1) && (t += "/"),
                    t = d.recodePath(t),
                    this._parts.path = this._parts.path.replace(i, t),
                    this.build(!e),
                    this
                }
                ,
                g.filename = function(t, e) {
                    if (this._parts.urn)
                        return void 0 === t ? "" : this;
                    if ("string" != typeof t) {
                        if (!this._parts.path || "/" === this._parts.path)
                            return "";
                        var i = this._parts.path.lastIndexOf("/")
                          , i = this._parts.path.substring(i + 1);
                        return t ? d.decodePathSegment(i) : i
                    }
                    i = !1,
                    "/" === t.charAt(0) && (t = t.substring(1)),
                    t.match(/\.?\//) && (i = !0);
                    var n = new RegExp(r(this.filename()) + "$");
                    return t = d.recodePath(t),
                    this._parts.path = this._parts.path.replace(n, t),
                    i ? this.normalizePath(e) : this.build(!e),
                    this
                }
                ,
                g.suffix = function(t, e) {
                    if (this._parts.urn)
                        return void 0 === t ? "" : this;
                    if (void 0 === t || !0 === t) {
                        if (!this._parts.path || "/" === this._parts.path)
                            return "";
                        var i = this.filename()
                          , n = i.lastIndexOf(".");
                        return -1 === n ? "" : (i = i.substring(n + 1),
                        i = /^[a-z0-9%]+$/i.test(i) ? i : "",
                        t ? d.decodePathSegment(i) : i)
                    }
                    if ("." === t.charAt(0) && (t = t.substring(1)),
                    i = this.suffix())
                        n = t ? new RegExp(r(i) + "$") : new RegExp(r("." + i) + "$");
                    else {
                        if (!t)
                            return this;
                        this._parts.path += "." + d.recodePath(t)
                    }
                    return n && (t = d.recodePath(t),
                    this._parts.path = this._parts.path.replace(n, t)),
                    this.build(!e),
                    this
                }
                ,
                g.segment = function(t, e, i) {
                    var d = this._parts.urn ? ":" : "/", n, s = "/" === (n = this.path()).substring(0, 1), n = n.split(d);
                    if (void 0 !== t && "number" != typeof t && (i = e,
                    e = t,
                    t = void 0),
                    void 0 !== t && "number" != typeof t)
                        throw Error('Bad segment "' + t + '", must be 0-based integer');
                    if (s && n.shift(),
                    0 > t && (t = Math.max(n.length + t, 0)),
                    void 0 === e)
                        return void 0 === t ? n : n[t];
                    if (null === t || void 0 === n[t])
                        if (o(e)) {
                            n = [],
                            t = 0;
                            for (var a = e.length; t < a; t++)
                                (e[t].length || n.length && n[n.length - 1].length) && (n.length && !n[n.length - 1].length && n.pop(),
                                n.push(u(e[t])))
                        } else
                            (e || "string" == typeof e) && (e = u(e),
                            "" === n[n.length - 1] ? n[n.length - 1] = e : n.push(e));
                    else
                        e ? n[t] = u(e) : n.splice(t, 1);
                    return s && n.unshift(""),
                    this.path(n.join(d), i)
                }
                ,
                g.segmentCoded = function(t, e, i) {
                    var n;
                    if ("number" != typeof t && (i = e,
                    e = t,
                    t = void 0),
                    void 0 === e) {
                        if (o(t = this.segment(t, e, i))) {
                            var s = 0;
                            for (n = t.length; s < n; s++)
                                t[s] = d.decode(t[s])
                        } else
                            t = void 0 !== t ? d.decode(t) : void 0;
                        return t
                    }
                    if (o(e))
                        for (s = 0,
                        n = e.length; s < n; s++)
                            e[s] = d.encode(e[s]);
                    else
                        e = "string" == typeof e || e instanceof String ? d.encode(e) : e;
                    return this.segment(t, e, i)
                }
                ;
                var k = g.query;
                return g.query = function(t, e) {
                    if (!0 === t)
                        return d.parseQuery(this._parts.query, this._parts.escapeQuerySpace);
                    if ("function" == typeof t) {
                        var i = d.parseQuery(this._parts.query, this._parts.escapeQuerySpace)
                          , n = t.call(this, i);
                        return this._parts.query = d.buildQuery(n || i, this._parts.duplicateQueryParameters, this._parts.escapeQuerySpace),
                        this.build(!e),
                        this
                    }
                    return void 0 !== t && "string" != typeof t ? (this._parts.query = d.buildQuery(t, this._parts.duplicateQueryParameters, this._parts.escapeQuerySpace),
                    this.build(!e),
                    this) : k.call(this, t, e)
                }
                ,
                g.setQuery = function(t, e, i) {
                    var n = d.parseQuery(this._parts.query, this._parts.escapeQuerySpace);
                    if ("string" == typeof t || t instanceof String)
                        n[t] = void 0 !== e ? e : null;
                    else {
                        if ("object" != typeof t)
                            throw new TypeError("URI.addQuery() accepts an object, string as the name parameter");
                        for (var s in t)
                            q.call(t, s) && (n[s] = t[s])
                    }
                    return this._parts.query = d.buildQuery(n, this._parts.duplicateQueryParameters, this._parts.escapeQuerySpace),
                    "string" != typeof t && (i = e),
                    this.build(!i),
                    this
                }
                ,
                g.addQuery = function(t, e, i) {
                    var n = d.parseQuery(this._parts.query, this._parts.escapeQuerySpace);
                    return d.addQuery(n, t, void 0 === e ? null : e),
                    this._parts.query = d.buildQuery(n, this._parts.duplicateQueryParameters, this._parts.escapeQuerySpace),
                    "string" != typeof t && (i = e),
                    this.build(!i),
                    this
                }
                ,
                g.removeQuery = function(t, e, i) {
                    var n = d.parseQuery(this._parts.query, this._parts.escapeQuerySpace);
                    return d.removeQuery(n, t, e),
                    this._parts.query = d.buildQuery(n, this._parts.duplicateQueryParameters, this._parts.escapeQuerySpace),
                    "string" != typeof t && (i = e),
                    this.build(!i),
                    this
                }
                ,
                g.hasQuery = function(t, e, i) {
                    var n = d.parseQuery(this._parts.query, this._parts.escapeQuerySpace);
                    return d.hasQuery(n, t, e, i)
                }
                ,
                g.setSearch = g.setQuery,
                g.addSearch = g.addQuery,
                g.removeSearch = g.removeQuery,
                g.hasSearch = g.hasQuery,
                g.normalize = function() {
                    return this._parts.urn ? this.normalizeProtocol(!1).normalizePath(!1).normalizeQuery(!1).normalizeFragment(!1).build() : this.normalizeProtocol(!1).normalizeHostname(!1).normalizePort(!1).normalizePath(!1).normalizeQuery(!1).normalizeFragment(!1).build()
                }
                ,
                g.normalizeProtocol = function(t) {
                    return "string" == typeof this._parts.protocol && (this._parts.protocol = this._parts.protocol.toLowerCase(),
                    this.build(!t)),
                    this
                }
                ,
                g.normalizeHostname = function(i) {
                    return this._parts.hostname && (this.is("IDN") && t ? this._parts.hostname = t.toASCII(this._parts.hostname) : this.is("IPv6") && e && (this._parts.hostname = e.best(this._parts.hostname)),
                    this._parts.hostname = this._parts.hostname.toLowerCase(),
                    this.build(!i)),
                    this
                }
                ,
                g.normalizePort = function(t) {
                    return "string" == typeof this._parts.protocol && this._parts.port === d.defaultPorts[this._parts.protocol] && (this._parts.port = null,
                    this.build(!t)),
                    this
                }
                ,
                g.normalizePath = function(t) {
                    var e;
                    if (!(e = this._parts.path))
                        return this;
                    if (this._parts.urn)
                        return this._parts.path = d.recodeUrnPath(this._parts.path),
                        this.build(!t),
                        this;
                    if ("/" === this._parts.path)
                        return this;
                    var e, i = "";
                    if ("/" !== (e = d.recodePath(e)).charAt(0)) {
                        var n = !0;
                        e = "/" + e
                    }
                    for ("/.." !== e.slice(-3) && "/." !== e.slice(-2) || (e += "/"),
                    e = e.replace(/(\/(\.\/)+)|(\/\.$)/g, "/").replace(/\/{2,}/g, "/"),
                    n && (i = e.substring(1).match(/^(\.\.\/)+/) || "") && (i = i[0]); ; ) {
                        var s = e.search(/\/\.\.(\/|$)/);
                        if (-1 === s)
                            break;
                        if (0 !== s) {
                            var o = e.substring(0, s).lastIndexOf("/");
                            -1 === o && (o = s),
                            e = e.substring(0, o) + e.substring(s + 3)
                        } else
                            e = e.substring(3)
                    }
                    return n && this.is("relative") && (e = i + e.substring(1)),
                    this._parts.path = e,
                    this.build(!t),
                    this
                }
                ,
                g.normalizePathname = g.normalizePath,
                g.normalizeQuery = function(t) {
                    return "string" == typeof this._parts.query && (this._parts.query.length ? this.query(d.parseQuery(this._parts.query, this._parts.escapeQuerySpace)) : this._parts.query = null,
                    this.build(!t)),
                    this
                }
                ,
                g.normalizeFragment = function(t) {
                    return this._parts.fragment || (this._parts.fragment = null,
                    this.build(!t)),
                    this
                }
                ,
                g.normalizeSearch = g.normalizeQuery,
                g.normalizeHash = g.normalizeFragment,
                g.iso8859 = function() {
                    var t = d.encode
                      , e = d.decode;
                    d.encode = escape,
                    d.decode = decodeURIComponent;
                    try {
                        this.normalize()
                    } finally {
                        d.encode = t,
                        d.decode = e
                    }
                    return this
                }
                ,
                g.unicode = function() {
                    var t = d.encode
                      , e = d.decode;
                    d.encode = c,
                    d.decode = unescape;
                    try {
                        this.normalize()
                    } finally {
                        d.encode = t,
                        d.decode = e
                    }
                    return this
                }
                ,
                g.readable = function() {
                    var e = this.clone();
                    e.username("").password("").normalize();
                    var i = "";
                    if (e._parts.protocol && (i += e._parts.protocol + "://"),
                    e._parts.hostname && (e.is("punycode") && t ? (i += t.toUnicode(e._parts.hostname),
                    e._parts.port && (i += ":" + e._parts.port)) : i += e.host()),
                    e._parts.hostname && e._parts.path && "/" !== e._parts.path.charAt(0) && (i += "/"),
                    i += e.path(!0),
                    e._parts.query) {
                        for (var n = "", s = 0, o = e._parts.query.split("&"), a = o.length; s < a; s++) {
                            var l = (o[s] || "").split("=")
                              , n = n + "&" + d.decodeQuery(l[0], this._parts.escapeQuerySpace).replace(/&/g, "%26");
                            void 0 !== l[1] && (n += "=" + d.decodeQuery(l[1], this._parts.escapeQuerySpace).replace(/&/g, "%26"))
                        }
                        i += "?" + n.substring(1)
                    }
                    return i + d.decodeQuery(e.hash(), !0)
                }
                ,
                g.absoluteTo = function(t) {
                    var e = this.clone(), i = ["protocol", "username", "password", "hostname", "port"], n, s;
                    if (this._parts.urn)
                        throw Error("URNs do not have any generally defined hierarchical components");
                    if (t instanceof d || (t = new d(t)),
                    e._parts.protocol)
                        return e;
                    if (e._parts.protocol = t._parts.protocol,
                    this._parts.hostname)
                        return e;
                    for (n = 0; s = i[n]; n++)
                        e._parts[s] = t._parts[s];
                    return e._parts.path ? (".." === e._parts.path.substring(-2) && (e._parts.path += "/"),
                    "/" !== e.path().charAt(0) && (i = (i = t.directory()) ? i : 0 === t.path().indexOf("/") ? "/" : "",
                    e._parts.path = (i ? i + "/" : "") + e._parts.path,
                    e.normalizePath())) : (e._parts.path = t._parts.path,
                    e._parts.query || (e._parts.query = t._parts.query)),
                    e.build(),
                    e
                }
                ,
                g.relativeTo = function(t) {
                    var e = this.clone().normalize();
                    if (e._parts.urn)
                        throw Error("URNs do not have any generally defined hierarchical components");
                    t = new d(t).normalize();
                    var i = e._parts
                      , n = t._parts
                      , s = e.path();
                    if (t = t.path(),
                    "/" !== s.charAt(0))
                        throw Error("URI is already relative");
                    if ("/" !== t.charAt(0))
                        throw Error("Cannot calculate a URI relative to another relative URI");
                    return i.protocol === n.protocol && (i.protocol = null),
                    i.username !== n.username || i.password !== n.password || null !== i.protocol || null !== i.username || null !== i.password || i.hostname !== n.hostname || i.port !== n.port ? e.build() : (i.hostname = null,
                    i.port = null,
                    s === t ? (i.path = "",
                    e.build()) : (s = d.commonPath(s, t)) ? (n = n.path.substring(s.length).replace(/[^\/]*$/, "").replace(/.*?\//g, "../"),
                    i.path = n + i.path.substring(s.length) || "./",
                    e.build()) : e.build())
                }
                ,
                g.equals = function(t) {
                    var e = this.clone(), i = new d(t), n;
                    if (t = {},
                    e.normalize(),
                    i.normalize(),
                    e.toString() === i.toString())
                        return !0;
                    var s = e.query()
                      , a = i.query();
                    if (e.query(""),
                    i.query(""),
                    e.toString() !== i.toString() || s.length !== a.length)
                        return !1;
                    for (n in e = d.parseQuery(s, this._parts.escapeQuerySpace),
                    a = d.parseQuery(a, this._parts.escapeQuerySpace),
                    e)
                        if (q.call(e, n)) {
                            if (o(e[n])) {
                                if (!h(e[n], a[n]))
                                    return !1
                            } else if (e[n] !== a[n])
                                return !1;
                            t[n] = !0
                        }
                    for (n in a)
                        if (q.call(a, n) && !t[n])
                            return !1;
                    return !0
                }
                ,
                g.duplicateQueryParameters = function(t) {
                    return this._parts.duplicateQueryParameters = !!t,
                    this
                }
                ,
                g.escapeQuerySpace = function(t) {
                    return this._parts.escapeQuerySpace = !!t,
                    this
                }
                ,
                d
            }
            ))
        }
        ).call(window)
    }
});
