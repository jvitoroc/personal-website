"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*! jQuery v3.3.1 | (c) JS Foundation and other contributors | jquery.org/license */
!function (e, t) {
    "use strict";
    "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && "object" == _typeof(module.exports) ? module.exports = e.document ? t(e, !0) : function (e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");return t(e);
    } : t(e);
}("undefined" != typeof window ? window : undefined, function (e, t) {
    "use strict";
    var n = [],
        r = e.document,
        i = Object.getPrototypeOf,
        o = n.slice,
        a = n.concat,
        s = n.push,
        u = n.indexOf,
        l = {},
        c = l.toString,
        f = l.hasOwnProperty,
        p = f.toString,
        d = p.call(Object),
        h = {},
        g = function e(t) {
        return "function" == typeof t && "number" != typeof t.nodeType;
    },
        y = function e(t) {
        return null != t && t === t.window;
    },
        v = { type: !0, src: !0, noModule: !0 };function m(e, t, n) {
        var i,
            o = (t = t || r).createElement("script");if (o.text = e, n) for (i in v) {
            n[i] && (o[i] = n[i]);
        }t.head.appendChild(o).parentNode.removeChild(o);
    }function x(e) {
        return null == e ? e + "" : "object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) || "function" == typeof e ? l[c.call(e)] || "object" : typeof e === "undefined" ? "undefined" : _typeof(e);
    }var b = "3.3.1",
        w = function w(e, t) {
        return new w.fn.init(e, t);
    },
        T = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;w.fn = w.prototype = { jquery: "3.3.1", constructor: w, length: 0, toArray: function toArray() {
            return o.call(this);
        }, get: function get(e) {
            return null == e ? o.call(this) : e < 0 ? this[e + this.length] : this[e];
        }, pushStack: function pushStack(e) {
            var t = w.merge(this.constructor(), e);return t.prevObject = this, t;
        }, each: function each(e) {
            return w.each(this, e);
        }, map: function map(e) {
            return this.pushStack(w.map(this, function (t, n) {
                return e.call(t, n, t);
            }));
        }, slice: function slice() {
            return this.pushStack(o.apply(this, arguments));
        }, first: function first() {
            return this.eq(0);
        }, last: function last() {
            return this.eq(-1);
        }, eq: function eq(e) {
            var t = this.length,
                n = +e + (e < 0 ? t : 0);return this.pushStack(n >= 0 && n < t ? [this[n]] : []);
        }, end: function end() {
            return this.prevObject || this.constructor();
        }, push: s, sort: n.sort, splice: n.splice }, w.extend = w.fn.extend = function () {
        var e,
            t,
            n,
            r,
            i,
            o,
            a = arguments[0] || {},
            s = 1,
            u = arguments.length,
            l = !1;for ("boolean" == typeof a && (l = a, a = arguments[s] || {}, s++), "object" == (typeof a === "undefined" ? "undefined" : _typeof(a)) || g(a) || (a = {}), s === u && (a = this, s--); s < u; s++) {
            if (null != (e = arguments[s])) for (t in e) {
                n = a[t], a !== (r = e[t]) && (l && r && (w.isPlainObject(r) || (i = Array.isArray(r))) ? (i ? (i = !1, o = n && Array.isArray(n) ? n : []) : o = n && w.isPlainObject(n) ? n : {}, a[t] = w.extend(l, o, r)) : void 0 !== r && (a[t] = r));
            }
        }return a;
    }, w.extend({ expando: "jQuery" + ("3.3.1" + Math.random()).replace(/\D/g, ""), isReady: !0, error: function error(e) {
            throw new Error(e);
        }, noop: function noop() {}, isPlainObject: function isPlainObject(e) {
            var t, n;return !(!e || "[object Object]" !== c.call(e)) && (!(t = i(e)) || "function" == typeof (n = f.call(t, "constructor") && t.constructor) && p.call(n) === d);
        }, isEmptyObject: function isEmptyObject(e) {
            var t;for (t in e) {
                return !1;
            }return !0;
        }, globalEval: function globalEval(e) {
            m(e);
        }, each: function each(e, t) {
            var n,
                r = 0;if (C(e)) {
                for (n = e.length; r < n; r++) {
                    if (!1 === t.call(e[r], r, e[r])) break;
                }
            } else for (r in e) {
                if (!1 === t.call(e[r], r, e[r])) break;
            }return e;
        }, trim: function trim(e) {
            return null == e ? "" : (e + "").replace(T, "");
        }, makeArray: function makeArray(e, t) {
            var n = t || [];return null != e && (C(Object(e)) ? w.merge(n, "string" == typeof e ? [e] : e) : s.call(n, e)), n;
        }, inArray: function inArray(e, t, n) {
            return null == t ? -1 : u.call(t, e, n);
        }, merge: function merge(e, t) {
            for (var n = +t.length, r = 0, i = e.length; r < n; r++) {
                e[i++] = t[r];
            }return e.length = i, e;
        }, grep: function grep(e, t, n) {
            for (var r, i = [], o = 0, a = e.length, s = !n; o < a; o++) {
                (r = !t(e[o], o)) !== s && i.push(e[o]);
            }return i;
        }, map: function map(e, t, n) {
            var r,
                i,
                o = 0,
                s = [];if (C(e)) for (r = e.length; o < r; o++) {
                null != (i = t(e[o], o, n)) && s.push(i);
            } else for (o in e) {
                null != (i = t(e[o], o, n)) && s.push(i);
            }return a.apply([], s);
        }, guid: 1, support: h }), "function" == typeof Symbol && (w.fn[Symbol.iterator] = n[Symbol.iterator]), w.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
        l["[object " + t + "]"] = t.toLowerCase();
    });function C(e) {
        var t = !!e && "length" in e && e.length,
            n = x(e);return !g(e) && !y(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e);
    }var E = function (e) {
        var t,
            n,
            r,
            i,
            o,
            a,
            s,
            u,
            l,
            c,
            f,
            p,
            d,
            h,
            g,
            y,
            v,
            m,
            x,
            b = "sizzle" + 1 * new Date(),
            w = e.document,
            T = 0,
            C = 0,
            E = ae(),
            k = ae(),
            S = ae(),
            D = function D(e, t) {
            return e === t && (f = !0), 0;
        },
            N = {}.hasOwnProperty,
            A = [],
            j = A.pop,
            q = A.push,
            L = A.push,
            H = A.slice,
            O = function O(e, t) {
            for (var n = 0, r = e.length; n < r; n++) {
                if (e[n] === t) return n;
            }return -1;
        },
            P = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            M = "[\\x20\\t\\r\\n\\f]",
            R = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
            I = "\\[" + M + "*(" + R + ")(?:" + M + "*([*^$|!~]?=)" + M + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + R + "))|)" + M + "*\\]",
            W = ":(" + R + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + I + ")*)|.*)\\)|)",
            $ = new RegExp(M + "+", "g"),
            B = new RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$", "g"),
            F = new RegExp("^" + M + "*," + M + "*"),
            _ = new RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"),
            z = new RegExp("=" + M + "*([^\\]'\"]*?)" + M + "*\\]", "g"),
            X = new RegExp(W),
            U = new RegExp("^" + R + "$"),
            V = { ID: new RegExp("^#(" + R + ")"), CLASS: new RegExp("^\\.(" + R + ")"), TAG: new RegExp("^(" + R + "|[*])"), ATTR: new RegExp("^" + I), PSEUDO: new RegExp("^" + W), CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + M + "*(even|odd|(([+-]|)(\\d*)n|)" + M + "*(?:([+-]|)" + M + "*(\\d+)|))" + M + "*\\)|)", "i"), bool: new RegExp("^(?:" + P + ")$", "i"), needsContext: new RegExp("^" + M + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + M + "*((?:-\\d)?\\d*)" + M + "*\\)|)(?=[^-]|$)", "i") },
            G = /^(?:input|select|textarea|button)$/i,
            Y = /^h\d$/i,
            Q = /^[^{]+\{\s*\[native \w/,
            J = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            K = /[+~]/,
            Z = new RegExp("\\\\([\\da-f]{1,6}" + M + "?|(" + M + ")|.)", "ig"),
            ee = function ee(e, t, n) {
            var r = "0x" + t - 65536;return r !== r || n ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320);
        },
            te = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
            ne = function ne(e, t) {
            return t ? "\0" === e ? "\uFFFD" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e;
        },
            re = function re() {
            p();
        },
            ie = me(function (e) {
            return !0 === e.disabled && ("form" in e || "label" in e);
        }, { dir: "parentNode", next: "legend" });try {
            L.apply(A = H.call(w.childNodes), w.childNodes), A[w.childNodes.length].nodeType;
        } catch (e) {
            L = { apply: A.length ? function (e, t) {
                    q.apply(e, H.call(t));
                } : function (e, t) {
                    var n = e.length,
                        r = 0;while (e[n++] = t[r++]) {}e.length = n - 1;
                } };
        }function oe(e, t, r, i) {
            var o,
                s,
                l,
                c,
                f,
                h,
                v,
                m = t && t.ownerDocument,
                T = t ? t.nodeType : 9;if (r = r || [], "string" != typeof e || !e || 1 !== T && 9 !== T && 11 !== T) return r;if (!i && ((t ? t.ownerDocument || t : w) !== d && p(t), t = t || d, g)) {
                if (11 !== T && (f = J.exec(e))) if (o = f[1]) {
                    if (9 === T) {
                        if (!(l = t.getElementById(o))) return r;if (l.id === o) return r.push(l), r;
                    } else if (m && (l = m.getElementById(o)) && x(t, l) && l.id === o) return r.push(l), r;
                } else {
                    if (f[2]) return L.apply(r, t.getElementsByTagName(e)), r;if ((o = f[3]) && n.getElementsByClassName && t.getElementsByClassName) return L.apply(r, t.getElementsByClassName(o)), r;
                }if (n.qsa && !S[e + " "] && (!y || !y.test(e))) {
                    if (1 !== T) m = t, v = e;else if ("object" !== t.nodeName.toLowerCase()) {
                        (c = t.getAttribute("id")) ? c = c.replace(te, ne) : t.setAttribute("id", c = b), s = (h = a(e)).length;while (s--) {
                            h[s] = "#" + c + " " + ve(h[s]);
                        }v = h.join(","), m = K.test(e) && ge(t.parentNode) || t;
                    }if (v) try {
                        return L.apply(r, m.querySelectorAll(v)), r;
                    } catch (e) {} finally {
                        c === b && t.removeAttribute("id");
                    }
                }
            }return u(e.replace(B, "$1"), t, r, i);
        }function ae() {
            var e = [];function t(n, i) {
                return e.push(n + " ") > r.cacheLength && delete t[e.shift()], t[n + " "] = i;
            }return t;
        }function se(e) {
            return e[b] = !0, e;
        }function ue(e) {
            var t = d.createElement("fieldset");try {
                return !!e(t);
            } catch (e) {
                return !1;
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null;
            }
        }function le(e, t) {
            var n = e.split("|"),
                i = n.length;while (i--) {
                r.attrHandle[n[i]] = t;
            }
        }function ce(e, t) {
            var n = t && e,
                r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;if (r) return r;if (n) while (n = n.nextSibling) {
                if (n === t) return -1;
            }return e ? 1 : -1;
        }function fe(e) {
            return function (t) {
                return "input" === t.nodeName.toLowerCase() && t.type === e;
            };
        }function pe(e) {
            return function (t) {
                var n = t.nodeName.toLowerCase();return ("input" === n || "button" === n) && t.type === e;
            };
        }function de(e) {
            return function (t) {
                return "form" in t ? t.parentNode && !1 === t.disabled ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && ie(t) === e : t.disabled === e : "label" in t && t.disabled === e;
            };
        }function he(e) {
            return se(function (t) {
                return t = +t, se(function (n, r) {
                    var i,
                        o = e([], n.length, t),
                        a = o.length;while (a--) {
                        n[i = o[a]] && (n[i] = !(r[i] = n[i]));
                    }
                });
            });
        }function ge(e) {
            return e && "undefined" != typeof e.getElementsByTagName && e;
        }n = oe.support = {}, o = oe.isXML = function (e) {
            var t = e && (e.ownerDocument || e).documentElement;return !!t && "HTML" !== t.nodeName;
        }, p = oe.setDocument = function (e) {
            var t,
                i,
                a = e ? e.ownerDocument || e : w;return a !== d && 9 === a.nodeType && a.documentElement ? (d = a, h = d.documentElement, g = !o(d), w !== d && (i = d.defaultView) && i.top !== i && (i.addEventListener ? i.addEventListener("unload", re, !1) : i.attachEvent && i.attachEvent("onunload", re)), n.attributes = ue(function (e) {
                return e.className = "i", !e.getAttribute("className");
            }), n.getElementsByTagName = ue(function (e) {
                return e.appendChild(d.createComment("")), !e.getElementsByTagName("*").length;
            }), n.getElementsByClassName = Q.test(d.getElementsByClassName), n.getById = ue(function (e) {
                return h.appendChild(e).id = b, !d.getElementsByName || !d.getElementsByName(b).length;
            }), n.getById ? (r.filter.ID = function (e) {
                var t = e.replace(Z, ee);return function (e) {
                    return e.getAttribute("id") === t;
                };
            }, r.find.ID = function (e, t) {
                if ("undefined" != typeof t.getElementById && g) {
                    var n = t.getElementById(e);return n ? [n] : [];
                }
            }) : (r.filter.ID = function (e) {
                var t = e.replace(Z, ee);return function (e) {
                    var n = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");return n && n.value === t;
                };
            }, r.find.ID = function (e, t) {
                if ("undefined" != typeof t.getElementById && g) {
                    var n,
                        r,
                        i,
                        o = t.getElementById(e);if (o) {
                        if ((n = o.getAttributeNode("id")) && n.value === e) return [o];i = t.getElementsByName(e), r = 0;while (o = i[r++]) {
                            if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
                        }
                    }return [];
                }
            }), r.find.TAG = n.getElementsByTagName ? function (e, t) {
                return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : n.qsa ? t.querySelectorAll(e) : void 0;
            } : function (e, t) {
                var n,
                    r = [],
                    i = 0,
                    o = t.getElementsByTagName(e);if ("*" === e) {
                    while (n = o[i++]) {
                        1 === n.nodeType && r.push(n);
                    }return r;
                }return o;
            }, r.find.CLASS = n.getElementsByClassName && function (e, t) {
                if ("undefined" != typeof t.getElementsByClassName && g) return t.getElementsByClassName(e);
            }, v = [], y = [], (n.qsa = Q.test(d.querySelectorAll)) && (ue(function (e) {
                h.appendChild(e).innerHTML = "<a id='" + b + "'></a><select id='" + b + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && y.push("[*^$]=" + M + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || y.push("\\[" + M + "*(?:value|" + P + ")"), e.querySelectorAll("[id~=" + b + "-]").length || y.push("~="), e.querySelectorAll(":checked").length || y.push(":checked"), e.querySelectorAll("a#" + b + "+*").length || y.push(".#.+[+~]");
            }), ue(function (e) {
                e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var t = d.createElement("input");t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && y.push("name" + M + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && y.push(":enabled", ":disabled"), h.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && y.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), y.push(",.*:");
            })), (n.matchesSelector = Q.test(m = h.matches || h.webkitMatchesSelector || h.mozMatchesSelector || h.oMatchesSelector || h.msMatchesSelector)) && ue(function (e) {
                n.disconnectedMatch = m.call(e, "*"), m.call(e, "[s!='']:x"), v.push("!=", W);
            }), y = y.length && new RegExp(y.join("|")), v = v.length && new RegExp(v.join("|")), t = Q.test(h.compareDocumentPosition), x = t || Q.test(h.contains) ? function (e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e,
                    r = t && t.parentNode;return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)));
            } : function (e, t) {
                if (t) while (t = t.parentNode) {
                    if (t === e) return !0;
                }return !1;
            }, D = t ? function (e, t) {
                if (e === t) return f = !0, 0;var r = !e.compareDocumentPosition - !t.compareDocumentPosition;return r || (1 & (r = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !n.sortDetached && t.compareDocumentPosition(e) === r ? e === d || e.ownerDocument === w && x(w, e) ? -1 : t === d || t.ownerDocument === w && x(w, t) ? 1 : c ? O(c, e) - O(c, t) : 0 : 4 & r ? -1 : 1);
            } : function (e, t) {
                if (e === t) return f = !0, 0;var n,
                    r = 0,
                    i = e.parentNode,
                    o = t.parentNode,
                    a = [e],
                    s = [t];if (!i || !o) return e === d ? -1 : t === d ? 1 : i ? -1 : o ? 1 : c ? O(c, e) - O(c, t) : 0;if (i === o) return ce(e, t);n = e;while (n = n.parentNode) {
                    a.unshift(n);
                }n = t;while (n = n.parentNode) {
                    s.unshift(n);
                }while (a[r] === s[r]) {
                    r++;
                }return r ? ce(a[r], s[r]) : a[r] === w ? -1 : s[r] === w ? 1 : 0;
            }, d) : d;
        }, oe.matches = function (e, t) {
            return oe(e, null, null, t);
        }, oe.matchesSelector = function (e, t) {
            if ((e.ownerDocument || e) !== d && p(e), t = t.replace(z, "='$1']"), n.matchesSelector && g && !S[t + " "] && (!v || !v.test(t)) && (!y || !y.test(t))) try {
                var r = m.call(e, t);if (r || n.disconnectedMatch || e.document && 11 !== e.document.nodeType) return r;
            } catch (e) {}return oe(t, d, null, [e]).length > 0;
        }, oe.contains = function (e, t) {
            return (e.ownerDocument || e) !== d && p(e), x(e, t);
        }, oe.attr = function (e, t) {
            (e.ownerDocument || e) !== d && p(e);var i = r.attrHandle[t.toLowerCase()],
                o = i && N.call(r.attrHandle, t.toLowerCase()) ? i(e, t, !g) : void 0;return void 0 !== o ? o : n.attributes || !g ? e.getAttribute(t) : (o = e.getAttributeNode(t)) && o.specified ? o.value : null;
        }, oe.escape = function (e) {
            return (e + "").replace(te, ne);
        }, oe.error = function (e) {
            throw new Error("Syntax error, unrecognized expression: " + e);
        }, oe.uniqueSort = function (e) {
            var t,
                r = [],
                i = 0,
                o = 0;if (f = !n.detectDuplicates, c = !n.sortStable && e.slice(0), e.sort(D), f) {
                while (t = e[o++]) {
                    t === e[o] && (i = r.push(o));
                }while (i--) {
                    e.splice(r[i], 1);
                }
            }return c = null, e;
        }, i = oe.getText = function (e) {
            var t,
                n = "",
                r = 0,
                o = e.nodeType;if (o) {
                if (1 === o || 9 === o || 11 === o) {
                    if ("string" == typeof e.textContent) return e.textContent;for (e = e.firstChild; e; e = e.nextSibling) {
                        n += i(e);
                    }
                } else if (3 === o || 4 === o) return e.nodeValue;
            } else while (t = e[r++]) {
                n += i(t);
            }return n;
        }, (r = oe.selectors = { cacheLength: 50, createPseudo: se, match: V, attrHandle: {}, find: {}, relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } }, preFilter: { ATTR: function ATTR(e) {
                    return e[1] = e[1].replace(Z, ee), e[3] = (e[3] || e[4] || e[5] || "").replace(Z, ee), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4);
                }, CHILD: function CHILD(e) {
                    return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || oe.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && oe.error(e[0]), e;
                }, PSEUDO: function PSEUDO(e) {
                    var t,
                        n = !e[6] && e[2];return V.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && X.test(n) && (t = a(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3));
                } }, filter: { TAG: function TAG(e) {
                    var t = e.replace(Z, ee).toLowerCase();return "*" === e ? function () {
                        return !0;
                    } : function (e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t;
                    };
                }, CLASS: function CLASS(e) {
                    var t = E[e + " "];return t || (t = new RegExp("(^|" + M + ")" + e + "(" + M + "|$)")) && E(e, function (e) {
                        return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "");
                    });
                }, ATTR: function ATTR(e, t, n) {
                    return function (r) {
                        var i = oe.attr(r, e);return null == i ? "!=" === t : !t || (i += "", "=" === t ? i === n : "!=" === t ? i !== n : "^=" === t ? n && 0 === i.indexOf(n) : "*=" === t ? n && i.indexOf(n) > -1 : "$=" === t ? n && i.slice(-n.length) === n : "~=" === t ? (" " + i.replace($, " ") + " ").indexOf(n) > -1 : "|=" === t && (i === n || i.slice(0, n.length + 1) === n + "-"));
                    };
                }, CHILD: function CHILD(e, t, n, r, i) {
                    var o = "nth" !== e.slice(0, 3),
                        a = "last" !== e.slice(-4),
                        s = "of-type" === t;return 1 === r && 0 === i ? function (e) {
                        return !!e.parentNode;
                    } : function (t, n, u) {
                        var l,
                            c,
                            f,
                            p,
                            d,
                            h,
                            g = o !== a ? "nextSibling" : "previousSibling",
                            y = t.parentNode,
                            v = s && t.nodeName.toLowerCase(),
                            m = !u && !s,
                            x = !1;if (y) {
                            if (o) {
                                while (g) {
                                    p = t;while (p = p[g]) {
                                        if (s ? p.nodeName.toLowerCase() === v : 1 === p.nodeType) return !1;
                                    }h = g = "only" === e && !h && "nextSibling";
                                }return !0;
                            }if (h = [a ? y.firstChild : y.lastChild], a && m) {
                                x = (d = (l = (c = (f = (p = y)[b] || (p[b] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[e] || [])[0] === T && l[1]) && l[2], p = d && y.childNodes[d];while (p = ++d && p && p[g] || (x = d = 0) || h.pop()) {
                                    if (1 === p.nodeType && ++x && p === t) {
                                        c[e] = [T, d, x];break;
                                    }
                                }
                            } else if (m && (x = d = (l = (c = (f = (p = t)[b] || (p[b] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[e] || [])[0] === T && l[1]), !1 === x) while (p = ++d && p && p[g] || (x = d = 0) || h.pop()) {
                                if ((s ? p.nodeName.toLowerCase() === v : 1 === p.nodeType) && ++x && (m && ((c = (f = p[b] || (p[b] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[e] = [T, x]), p === t)) break;
                            }return (x -= i) === r || x % r == 0 && x / r >= 0;
                        }
                    };
                }, PSEUDO: function PSEUDO(e, t) {
                    var n,
                        i = r.pseudos[e] || r.setFilters[e.toLowerCase()] || oe.error("unsupported pseudo: " + e);return i[b] ? i(t) : i.length > 1 ? (n = [e, e, "", t], r.setFilters.hasOwnProperty(e.toLowerCase()) ? se(function (e, n) {
                        var r,
                            o = i(e, t),
                            a = o.length;while (a--) {
                            e[r = O(e, o[a])] = !(n[r] = o[a]);
                        }
                    }) : function (e) {
                        return i(e, 0, n);
                    }) : i;
                } }, pseudos: { not: se(function (e) {
                    var t = [],
                        n = [],
                        r = s(e.replace(B, "$1"));return r[b] ? se(function (e, t, n, i) {
                        var o,
                            a = r(e, null, i, []),
                            s = e.length;while (s--) {
                            (o = a[s]) && (e[s] = !(t[s] = o));
                        }
                    }) : function (e, i, o) {
                        return t[0] = e, r(t, null, o, n), t[0] = null, !n.pop();
                    };
                }), has: se(function (e) {
                    return function (t) {
                        return oe(e, t).length > 0;
                    };
                }), contains: se(function (e) {
                    return e = e.replace(Z, ee), function (t) {
                        return (t.textContent || t.innerText || i(t)).indexOf(e) > -1;
                    };
                }), lang: se(function (e) {
                    return U.test(e || "") || oe.error("unsupported lang: " + e), e = e.replace(Z, ee).toLowerCase(), function (t) {
                        var n;do {
                            if (n = g ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-");
                        } while ((t = t.parentNode) && 1 === t.nodeType);return !1;
                    };
                }), target: function target(t) {
                    var n = e.location && e.location.hash;return n && n.slice(1) === t.id;
                }, root: function root(e) {
                    return e === h;
                }, focus: function focus(e) {
                    return e === d.activeElement && (!d.hasFocus || d.hasFocus()) && !!(e.type || e.href || ~e.tabIndex);
                }, enabled: de(!1), disabled: de(!0), checked: function checked(e) {
                    var t = e.nodeName.toLowerCase();return "input" === t && !!e.checked || "option" === t && !!e.selected;
                }, selected: function selected(e) {
                    return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected;
                }, empty: function empty(e) {
                    for (e = e.firstChild; e; e = e.nextSibling) {
                        if (e.nodeType < 6) return !1;
                    }return !0;
                }, parent: function parent(e) {
                    return !r.pseudos.empty(e);
                }, header: function header(e) {
                    return Y.test(e.nodeName);
                }, input: function input(e) {
                    return G.test(e.nodeName);
                }, button: function button(e) {
                    var t = e.nodeName.toLowerCase();return "input" === t && "button" === e.type || "button" === t;
                }, text: function text(e) {
                    var t;return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase());
                }, first: he(function () {
                    return [0];
                }), last: he(function (e, t) {
                    return [t - 1];
                }), eq: he(function (e, t, n) {
                    return [n < 0 ? n + t : n];
                }), even: he(function (e, t) {
                    for (var n = 0; n < t; n += 2) {
                        e.push(n);
                    }return e;
                }), odd: he(function (e, t) {
                    for (var n = 1; n < t; n += 2) {
                        e.push(n);
                    }return e;
                }), lt: he(function (e, t, n) {
                    for (var r = n < 0 ? n + t : n; --r >= 0;) {
                        e.push(r);
                    }return e;
                }), gt: he(function (e, t, n) {
                    for (var r = n < 0 ? n + t : n; ++r < t;) {
                        e.push(r);
                    }return e;
                }) } }).pseudos.nth = r.pseudos.eq;for (t in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }) {
            r.pseudos[t] = fe(t);
        }for (t in { submit: !0, reset: !0 }) {
            r.pseudos[t] = pe(t);
        }function ye() {}ye.prototype = r.filters = r.pseudos, r.setFilters = new ye(), a = oe.tokenize = function (e, t) {
            var n,
                i,
                o,
                a,
                s,
                u,
                l,
                c = k[e + " "];if (c) return t ? 0 : c.slice(0);s = e, u = [], l = r.preFilter;while (s) {
                n && !(i = F.exec(s)) || (i && (s = s.slice(i[0].length) || s), u.push(o = [])), n = !1, (i = _.exec(s)) && (n = i.shift(), o.push({ value: n, type: i[0].replace(B, " ") }), s = s.slice(n.length));for (a in r.filter) {
                    !(i = V[a].exec(s)) || l[a] && !(i = l[a](i)) || (n = i.shift(), o.push({ value: n, type: a, matches: i }), s = s.slice(n.length));
                }if (!n) break;
            }return t ? s.length : s ? oe.error(e) : k(e, u).slice(0);
        };function ve(e) {
            for (var t = 0, n = e.length, r = ""; t < n; t++) {
                r += e[t].value;
            }return r;
        }function me(e, t, n) {
            var r = t.dir,
                i = t.next,
                o = i || r,
                a = n && "parentNode" === o,
                s = C++;return t.first ? function (t, n, i) {
                while (t = t[r]) {
                    if (1 === t.nodeType || a) return e(t, n, i);
                }return !1;
            } : function (t, n, u) {
                var l,
                    c,
                    f,
                    p = [T, s];if (u) {
                    while (t = t[r]) {
                        if ((1 === t.nodeType || a) && e(t, n, u)) return !0;
                    }
                } else while (t = t[r]) {
                    if (1 === t.nodeType || a) if (f = t[b] || (t[b] = {}), c = f[t.uniqueID] || (f[t.uniqueID] = {}), i && i === t.nodeName.toLowerCase()) t = t[r] || t;else {
                        if ((l = c[o]) && l[0] === T && l[1] === s) return p[2] = l[2];if (c[o] = p, p[2] = e(t, n, u)) return !0;
                    }
                }return !1;
            };
        }function xe(e) {
            return e.length > 1 ? function (t, n, r) {
                var i = e.length;while (i--) {
                    if (!e[i](t, n, r)) return !1;
                }return !0;
            } : e[0];
        }function be(e, t, n) {
            for (var r = 0, i = t.length; r < i; r++) {
                oe(e, t[r], n);
            }return n;
        }function we(e, t, n, r, i) {
            for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++) {
                (o = e[s]) && (n && !n(o, r, i) || (a.push(o), l && t.push(s)));
            }return a;
        }function Te(e, t, n, r, i, o) {
            return r && !r[b] && (r = Te(r)), i && !i[b] && (i = Te(i, o)), se(function (o, a, s, u) {
                var l,
                    c,
                    f,
                    p = [],
                    d = [],
                    h = a.length,
                    g = o || be(t || "*", s.nodeType ? [s] : s, []),
                    y = !e || !o && t ? g : we(g, p, e, s, u),
                    v = n ? i || (o ? e : h || r) ? [] : a : y;if (n && n(y, v, s, u), r) {
                    l = we(v, d), r(l, [], s, u), c = l.length;while (c--) {
                        (f = l[c]) && (v[d[c]] = !(y[d[c]] = f));
                    }
                }if (o) {
                    if (i || e) {
                        if (i) {
                            l = [], c = v.length;while (c--) {
                                (f = v[c]) && l.push(y[c] = f);
                            }i(null, v = [], l, u);
                        }c = v.length;while (c--) {
                            (f = v[c]) && (l = i ? O(o, f) : p[c]) > -1 && (o[l] = !(a[l] = f));
                        }
                    }
                } else v = we(v === a ? v.splice(h, v.length) : v), i ? i(null, a, v, u) : L.apply(a, v);
            });
        }function Ce(e) {
            for (var t, n, i, o = e.length, a = r.relative[e[0].type], s = a || r.relative[" "], u = a ? 1 : 0, c = me(function (e) {
                return e === t;
            }, s, !0), f = me(function (e) {
                return O(t, e) > -1;
            }, s, !0), p = [function (e, n, r) {
                var i = !a && (r || n !== l) || ((t = n).nodeType ? c(e, n, r) : f(e, n, r));return t = null, i;
            }]; u < o; u++) {
                if (n = r.relative[e[u].type]) p = [me(xe(p), n)];else {
                    if ((n = r.filter[e[u].type].apply(null, e[u].matches))[b]) {
                        for (i = ++u; i < o; i++) {
                            if (r.relative[e[i].type]) break;
                        }return Te(u > 1 && xe(p), u > 1 && ve(e.slice(0, u - 1).concat({ value: " " === e[u - 2].type ? "*" : "" })).replace(B, "$1"), n, u < i && Ce(e.slice(u, i)), i < o && Ce(e = e.slice(i)), i < o && ve(e));
                    }p.push(n);
                }
            }return xe(p);
        }function Ee(e, t) {
            var n = t.length > 0,
                i = e.length > 0,
                o = function o(_o, a, s, u, c) {
                var f,
                    h,
                    y,
                    v = 0,
                    m = "0",
                    x = _o && [],
                    b = [],
                    w = l,
                    C = _o || i && r.find.TAG("*", c),
                    E = T += null == w ? 1 : Math.random() || .1,
                    k = C.length;for (c && (l = a === d || a || c); m !== k && null != (f = C[m]); m++) {
                    if (i && f) {
                        h = 0, a || f.ownerDocument === d || (p(f), s = !g);while (y = e[h++]) {
                            if (y(f, a || d, s)) {
                                u.push(f);break;
                            }
                        }c && (T = E);
                    }n && ((f = !y && f) && v--, _o && x.push(f));
                }if (v += m, n && m !== v) {
                    h = 0;while (y = t[h++]) {
                        y(x, b, a, s);
                    }if (_o) {
                        if (v > 0) while (m--) {
                            x[m] || b[m] || (b[m] = j.call(u));
                        }b = we(b);
                    }L.apply(u, b), c && !_o && b.length > 0 && v + t.length > 1 && oe.uniqueSort(u);
                }return c && (T = E, l = w), x;
            };return n ? se(o) : o;
        }return s = oe.compile = function (e, t) {
            var n,
                r = [],
                i = [],
                o = S[e + " "];if (!o) {
                t || (t = a(e)), n = t.length;while (n--) {
                    (o = Ce(t[n]))[b] ? r.push(o) : i.push(o);
                }(o = S(e, Ee(i, r))).selector = e;
            }return o;
        }, u = oe.select = function (e, t, n, i) {
            var o,
                u,
                l,
                c,
                f,
                p = "function" == typeof e && e,
                d = !i && a(e = p.selector || e);if (n = n || [], 1 === d.length) {
                if ((u = d[0] = d[0].slice(0)).length > 2 && "ID" === (l = u[0]).type && 9 === t.nodeType && g && r.relative[u[1].type]) {
                    if (!(t = (r.find.ID(l.matches[0].replace(Z, ee), t) || [])[0])) return n;p && (t = t.parentNode), e = e.slice(u.shift().value.length);
                }o = V.needsContext.test(e) ? 0 : u.length;while (o--) {
                    if (l = u[o], r.relative[c = l.type]) break;if ((f = r.find[c]) && (i = f(l.matches[0].replace(Z, ee), K.test(u[0].type) && ge(t.parentNode) || t))) {
                        if (u.splice(o, 1), !(e = i.length && ve(u))) return L.apply(n, i), n;break;
                    }
                }
            }return (p || s(e, d))(i, t, !g, n, !t || K.test(e) && ge(t.parentNode) || t), n;
        }, n.sortStable = b.split("").sort(D).join("") === b, n.detectDuplicates = !!f, p(), n.sortDetached = ue(function (e) {
            return 1 & e.compareDocumentPosition(d.createElement("fieldset"));
        }), ue(function (e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href");
        }) || le("type|href|height|width", function (e, t, n) {
            if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
        }), n.attributes && ue(function (e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value");
        }) || le("value", function (e, t, n) {
            if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue;
        }), ue(function (e) {
            return null == e.getAttribute("disabled");
        }) || le(P, function (e, t, n) {
            var r;if (!n) return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null;
        }), oe;
    }(e);w.find = E, w.expr = E.selectors, w.expr[":"] = w.expr.pseudos, w.uniqueSort = w.unique = E.uniqueSort, w.text = E.getText, w.isXMLDoc = E.isXML, w.contains = E.contains, w.escapeSelector = E.escape;var k = function k(e, t, n) {
        var r = [],
            i = void 0 !== n;while ((e = e[t]) && 9 !== e.nodeType) {
            if (1 === e.nodeType) {
                if (i && w(e).is(n)) break;r.push(e);
            }
        }return r;
    },
        S = function S(e, t) {
        for (var n = []; e; e = e.nextSibling) {
            1 === e.nodeType && e !== t && n.push(e);
        }return n;
    },
        D = w.expr.match.needsContext;function N(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
    }var A = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function j(e, t, n) {
        return g(t) ? w.grep(e, function (e, r) {
            return !!t.call(e, r, e) !== n;
        }) : t.nodeType ? w.grep(e, function (e) {
            return e === t !== n;
        }) : "string" != typeof t ? w.grep(e, function (e) {
            return u.call(t, e) > -1 !== n;
        }) : w.filter(t, e, n);
    }w.filter = function (e, t, n) {
        var r = t[0];return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? w.find.matchesSelector(r, e) ? [r] : [] : w.find.matches(e, w.grep(t, function (e) {
            return 1 === e.nodeType;
        }));
    }, w.fn.extend({ find: function find(e) {
            var t,
                n,
                r = this.length,
                i = this;if ("string" != typeof e) return this.pushStack(w(e).filter(function () {
                for (t = 0; t < r; t++) {
                    if (w.contains(i[t], this)) return !0;
                }
            }));for (n = this.pushStack([]), t = 0; t < r; t++) {
                w.find(e, i[t], n);
            }return r > 1 ? w.uniqueSort(n) : n;
        }, filter: function filter(e) {
            return this.pushStack(j(this, e || [], !1));
        }, not: function not(e) {
            return this.pushStack(j(this, e || [], !0));
        }, is: function is(e) {
            return !!j(this, "string" == typeof e && D.test(e) ? w(e) : e || [], !1).length;
        } });var q,
        L = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(w.fn.init = function (e, t, n) {
        var i, o;if (!e) return this;if (n = n || q, "string" == typeof e) {
            if (!(i = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : L.exec(e)) || !i[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);if (i[1]) {
                if (t = t instanceof w ? t[0] : t, w.merge(this, w.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : r, !0)), A.test(i[1]) && w.isPlainObject(t)) for (i in t) {
                    g(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
                }return this;
            }return (o = r.getElementById(i[2])) && (this[0] = o, this.length = 1), this;
        }return e.nodeType ? (this[0] = e, this.length = 1, this) : g(e) ? void 0 !== n.ready ? n.ready(e) : e(w) : w.makeArray(e, this);
    }).prototype = w.fn, q = w(r);var H = /^(?:parents|prev(?:Until|All))/,
        O = { children: !0, contents: !0, next: !0, prev: !0 };w.fn.extend({ has: function has(e) {
            var t = w(e, this),
                n = t.length;return this.filter(function () {
                for (var e = 0; e < n; e++) {
                    if (w.contains(this, t[e])) return !0;
                }
            });
        }, closest: function closest(e, t) {
            var n,
                r = 0,
                i = this.length,
                o = [],
                a = "string" != typeof e && w(e);if (!D.test(e)) for (; r < i; r++) {
                for (n = this[r]; n && n !== t; n = n.parentNode) {
                    if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && w.find.matchesSelector(n, e))) {
                        o.push(n);break;
                    }
                }
            }return this.pushStack(o.length > 1 ? w.uniqueSort(o) : o);
        }, index: function index(e) {
            return e ? "string" == typeof e ? u.call(w(e), this[0]) : u.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
        }, add: function add(e, t) {
            return this.pushStack(w.uniqueSort(w.merge(this.get(), w(e, t))));
        }, addBack: function addBack(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
        } });function P(e, t) {
        while ((e = e[t]) && 1 !== e.nodeType) {}return e;
    }w.each({ parent: function parent(e) {
            var t = e.parentNode;return t && 11 !== t.nodeType ? t : null;
        }, parents: function parents(e) {
            return k(e, "parentNode");
        }, parentsUntil: function parentsUntil(e, t, n) {
            return k(e, "parentNode", n);
        }, next: function next(e) {
            return P(e, "nextSibling");
        }, prev: function prev(e) {
            return P(e, "previousSibling");
        }, nextAll: function nextAll(e) {
            return k(e, "nextSibling");
        }, prevAll: function prevAll(e) {
            return k(e, "previousSibling");
        }, nextUntil: function nextUntil(e, t, n) {
            return k(e, "nextSibling", n);
        }, prevUntil: function prevUntil(e, t, n) {
            return k(e, "previousSibling", n);
        }, siblings: function siblings(e) {
            return S((e.parentNode || {}).firstChild, e);
        }, children: function children(e) {
            return S(e.firstChild);
        }, contents: function contents(e) {
            return N(e, "iframe") ? e.contentDocument : (N(e, "template") && (e = e.content || e), w.merge([], e.childNodes));
        } }, function (e, t) {
        w.fn[e] = function (n, r) {
            var i = w.map(this, t, n);return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (i = w.filter(r, i)), this.length > 1 && (O[e] || w.uniqueSort(i), H.test(e) && i.reverse()), this.pushStack(i);
        };
    });var M = /[^\x20\t\r\n\f]+/g;function R(e) {
        var t = {};return w.each(e.match(M) || [], function (e, n) {
            t[n] = !0;
        }), t;
    }w.Callbacks = function (e) {
        e = "string" == typeof e ? R(e) : w.extend({}, e);var t,
            n,
            r,
            i,
            o = [],
            a = [],
            s = -1,
            u = function u() {
            for (i = i || e.once, r = t = !0; a.length; s = -1) {
                n = a.shift();while (++s < o.length) {
                    !1 === o[s].apply(n[0], n[1]) && e.stopOnFalse && (s = o.length, n = !1);
                }
            }e.memory || (n = !1), t = !1, i && (o = n ? [] : "");
        },
            l = { add: function add() {
                return o && (n && !t && (s = o.length - 1, a.push(n)), function t(n) {
                    w.each(n, function (n, r) {
                        g(r) ? e.unique && l.has(r) || o.push(r) : r && r.length && "string" !== x(r) && t(r);
                    });
                }(arguments), n && !t && u()), this;
            }, remove: function remove() {
                return w.each(arguments, function (e, t) {
                    var n;while ((n = w.inArray(t, o, n)) > -1) {
                        o.splice(n, 1), n <= s && s--;
                    }
                }), this;
            }, has: function has(e) {
                return e ? w.inArray(e, o) > -1 : o.length > 0;
            }, empty: function empty() {
                return o && (o = []), this;
            }, disable: function disable() {
                return i = a = [], o = n = "", this;
            }, disabled: function disabled() {
                return !o;
            }, lock: function lock() {
                return i = a = [], n || t || (o = n = ""), this;
            }, locked: function locked() {
                return !!i;
            }, fireWith: function fireWith(e, n) {
                return i || (n = [e, (n = n || []).slice ? n.slice() : n], a.push(n), t || u()), this;
            }, fire: function fire() {
                return l.fireWith(this, arguments), this;
            }, fired: function fired() {
                return !!r;
            } };return l;
    };function I(e) {
        return e;
    }function W(e) {
        throw e;
    }function $(e, t, n, r) {
        var i;try {
            e && g(i = e.promise) ? i.call(e).done(t).fail(n) : e && g(i = e.then) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r));
        } catch (e) {
            n.apply(void 0, [e]);
        }
    }w.extend({ Deferred: function Deferred(t) {
            var n = [["notify", "progress", w.Callbacks("memory"), w.Callbacks("memory"), 2], ["resolve", "done", w.Callbacks("once memory"), w.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", w.Callbacks("once memory"), w.Callbacks("once memory"), 1, "rejected"]],
                r = "pending",
                i = { state: function state() {
                    return r;
                }, always: function always() {
                    return o.done(arguments).fail(arguments), this;
                }, "catch": function _catch(e) {
                    return i.then(null, e);
                }, pipe: function pipe() {
                    var e = arguments;return w.Deferred(function (t) {
                        w.each(n, function (n, r) {
                            var i = g(e[r[4]]) && e[r[4]];o[r[1]](function () {
                                var e = i && i.apply(this, arguments);e && g(e.promise) ? e.promise().progress(t.notify).done(t.resolve).fail(t.reject) : t[r[0] + "With"](this, i ? [e] : arguments);
                            });
                        }), e = null;
                    }).promise();
                }, then: function then(t, r, i) {
                    var o = 0;function a(t, n, r, i) {
                        return function () {
                            var s = this,
                                u = arguments,
                                l = function l() {
                                var e, l;if (!(t < o)) {
                                    if ((e = r.apply(s, u)) === n.promise()) throw new TypeError("Thenable self-resolution");l = e && ("object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) || "function" == typeof e) && e.then, g(l) ? i ? l.call(e, a(o, n, I, i), a(o, n, W, i)) : (o++, l.call(e, a(o, n, I, i), a(o, n, W, i), a(o, n, I, n.notifyWith))) : (r !== I && (s = void 0, u = [e]), (i || n.resolveWith)(s, u));
                                }
                            },
                                c = i ? l : function () {
                                try {
                                    l();
                                } catch (e) {
                                    w.Deferred.exceptionHook && w.Deferred.exceptionHook(e, c.stackTrace), t + 1 >= o && (r !== W && (s = void 0, u = [e]), n.rejectWith(s, u));
                                }
                            };t ? c() : (w.Deferred.getStackHook && (c.stackTrace = w.Deferred.getStackHook()), e.setTimeout(c));
                        };
                    }return w.Deferred(function (e) {
                        n[0][3].add(a(0, e, g(i) ? i : I, e.notifyWith)), n[1][3].add(a(0, e, g(t) ? t : I)), n[2][3].add(a(0, e, g(r) ? r : W));
                    }).promise();
                }, promise: function promise(e) {
                    return null != e ? w.extend(e, i) : i;
                } },
                o = {};return w.each(n, function (e, t) {
                var a = t[2],
                    s = t[5];i[t[1]] = a.add, s && a.add(function () {
                    r = s;
                }, n[3 - e][2].disable, n[3 - e][3].disable, n[0][2].lock, n[0][3].lock), a.add(t[3].fire), o[t[0]] = function () {
                    return o[t[0] + "With"](this === o ? void 0 : this, arguments), this;
                }, o[t[0] + "With"] = a.fireWith;
            }), i.promise(o), t && t.call(o, o), o;
        }, when: function when(e) {
            var t = arguments.length,
                n = t,
                r = Array(n),
                i = o.call(arguments),
                a = w.Deferred(),
                s = function s(e) {
                return function (n) {
                    r[e] = this, i[e] = arguments.length > 1 ? o.call(arguments) : n, --t || a.resolveWith(r, i);
                };
            };if (t <= 1 && ($(e, a.done(s(n)).resolve, a.reject, !t), "pending" === a.state() || g(i[n] && i[n].then))) return a.then();while (n--) {
                $(i[n], s(n), a.reject);
            }return a.promise();
        } });var B = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;w.Deferred.exceptionHook = function (t, n) {
        e.console && e.console.warn && t && B.test(t.name) && e.console.warn("jQuery.Deferred exception: " + t.message, t.stack, n);
    }, w.readyException = function (t) {
        e.setTimeout(function () {
            throw t;
        });
    };var F = w.Deferred();w.fn.ready = function (e) {
        return F.then(e)["catch"](function (e) {
            w.readyException(e);
        }), this;
    }, w.extend({ isReady: !1, readyWait: 1, ready: function ready(e) {
            (!0 === e ? --w.readyWait : w.isReady) || (w.isReady = !0, !0 !== e && --w.readyWait > 0 || F.resolveWith(r, [w]));
        } }), w.ready.then = F.then;function _() {
        r.removeEventListener("DOMContentLoaded", _), e.removeEventListener("load", _), w.ready();
    }"complete" === r.readyState || "loading" !== r.readyState && !r.documentElement.doScroll ? e.setTimeout(w.ready) : (r.addEventListener("DOMContentLoaded", _), e.addEventListener("load", _));var z = function z(e, t, n, r, i, o, a) {
        var s = 0,
            u = e.length,
            l = null == n;if ("object" === x(n)) {
            i = !0;for (s in n) {
                z(e, t, s, n[s], !0, o, a);
            }
        } else if (void 0 !== r && (i = !0, g(r) || (a = !0), l && (a ? (t.call(e, r), t = null) : (l = t, t = function t(e, _t2, n) {
            return l.call(w(e), n);
        })), t)) for (; s < u; s++) {
            t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
        }return i ? e : l ? t.call(e) : u ? t(e[0], n) : o;
    },
        X = /^-ms-/,
        U = /-([a-z])/g;function V(e, t) {
        return t.toUpperCase();
    }function G(e) {
        return e.replace(X, "ms-").replace(U, V);
    }var Y = function Y(e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
    };function Q() {
        this.expando = w.expando + Q.uid++;
    }Q.uid = 1, Q.prototype = { cache: function cache(e) {
            var t = e[this.expando];return t || (t = {}, Y(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, { value: t, configurable: !0 }))), t;
        }, set: function set(e, t, n) {
            var r,
                i = this.cache(e);if ("string" == typeof t) i[G(t)] = n;else for (r in t) {
                i[G(r)] = t[r];
            }return i;
        }, get: function get(e, t) {
            return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][G(t)];
        }, access: function access(e, t, n) {
            return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t);
        }, remove: function remove(e, t) {
            var n,
                r = e[this.expando];if (void 0 !== r) {
                if (void 0 !== t) {
                    n = (t = Array.isArray(t) ? t.map(G) : (t = G(t)) in r ? [t] : t.match(M) || []).length;while (n--) {
                        delete r[t[n]];
                    }
                }(void 0 === t || w.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando]);
            }
        }, hasData: function hasData(e) {
            var t = e[this.expando];return void 0 !== t && !w.isEmptyObject(t);
        } };var J = new Q(),
        K = new Q(),
        Z = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        ee = /[A-Z]/g;function te(e) {
        return "true" === e || "false" !== e && ("null" === e ? null : e === +e + "" ? +e : Z.test(e) ? JSON.parse(e) : e);
    }function ne(e, t, n) {
        var r;if (void 0 === n && 1 === e.nodeType) if (r = "data-" + t.replace(ee, "-$&").toLowerCase(), "string" == typeof (n = e.getAttribute(r))) {
            try {
                n = te(n);
            } catch (e) {}K.set(e, t, n);
        } else n = void 0;return n;
    }w.extend({ hasData: function hasData(e) {
            return K.hasData(e) || J.hasData(e);
        }, data: function data(e, t, n) {
            return K.access(e, t, n);
        }, removeData: function removeData(e, t) {
            K.remove(e, t);
        }, _data: function _data(e, t, n) {
            return J.access(e, t, n);
        }, _removeData: function _removeData(e, t) {
            J.remove(e, t);
        } }), w.fn.extend({ data: function data(e, t) {
            var n,
                r,
                i,
                o = this[0],
                a = o && o.attributes;if (void 0 === e) {
                if (this.length && (i = K.get(o), 1 === o.nodeType && !J.get(o, "hasDataAttrs"))) {
                    n = a.length;while (n--) {
                        a[n] && 0 === (r = a[n].name).indexOf("data-") && (r = G(r.slice(5)), ne(o, r, i[r]));
                    }J.set(o, "hasDataAttrs", !0);
                }return i;
            }return "object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) ? this.each(function () {
                K.set(this, e);
            }) : z(this, function (t) {
                var n;if (o && void 0 === t) {
                    if (void 0 !== (n = K.get(o, e))) return n;if (void 0 !== (n = ne(o, e))) return n;
                } else this.each(function () {
                    K.set(this, e, t);
                });
            }, null, t, arguments.length > 1, null, !0);
        }, removeData: function removeData(e) {
            return this.each(function () {
                K.remove(this, e);
            });
        } }), w.extend({ queue: function queue(e, t, n) {
            var r;if (e) return t = (t || "fx") + "queue", r = J.get(e, t), n && (!r || Array.isArray(n) ? r = J.access(e, t, w.makeArray(n)) : r.push(n)), r || [];
        }, dequeue: function dequeue(e, t) {
            t = t || "fx";var n = w.queue(e, t),
                r = n.length,
                i = n.shift(),
                o = w._queueHooks(e, t),
                a = function a() {
                w.dequeue(e, t);
            };"inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, a, o)), !r && o && o.empty.fire();
        }, _queueHooks: function _queueHooks(e, t) {
            var n = t + "queueHooks";return J.get(e, n) || J.access(e, n, { empty: w.Callbacks("once memory").add(function () {
                    J.remove(e, [t + "queue", n]);
                }) });
        } }), w.fn.extend({ queue: function queue(e, t) {
            var n = 2;return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? w.queue(this[0], e) : void 0 === t ? this : this.each(function () {
                var n = w.queue(this, e, t);w._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && w.dequeue(this, e);
            });
        }, dequeue: function dequeue(e) {
            return this.each(function () {
                w.dequeue(this, e);
            });
        }, clearQueue: function clearQueue(e) {
            return this.queue(e || "fx", []);
        }, promise: function promise(e, t) {
            var n,
                r = 1,
                i = w.Deferred(),
                o = this,
                a = this.length,
                s = function s() {
                --r || i.resolveWith(o, [o]);
            };"string" != typeof e && (t = e, e = void 0), e = e || "fx";while (a--) {
                (n = J.get(o[a], e + "queueHooks")) && n.empty && (r++, n.empty.add(s));
            }return s(), i.promise(t);
        } });var re = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        ie = new RegExp("^(?:([+-])=|)(" + re + ")([a-z%]*)$", "i"),
        oe = ["Top", "Right", "Bottom", "Left"],
        ae = function ae(e, t) {
        return "none" === (e = t || e).style.display || "" === e.style.display && w.contains(e.ownerDocument, e) && "none" === w.css(e, "display");
    },
        se = function se(e, t, n, r) {
        var i,
            o,
            a = {};for (o in t) {
            a[o] = e.style[o], e.style[o] = t[o];
        }i = n.apply(e, r || []);for (o in t) {
            e.style[o] = a[o];
        }return i;
    };function ue(e, t, n, r) {
        var i,
            o,
            a = 20,
            s = r ? function () {
            return r.cur();
        } : function () {
            return w.css(e, t, "");
        },
            u = s(),
            l = n && n[3] || (w.cssNumber[t] ? "" : "px"),
            c = (w.cssNumber[t] || "px" !== l && +u) && ie.exec(w.css(e, t));if (c && c[3] !== l) {
            u /= 2, l = l || c[3], c = +u || 1;while (a--) {
                w.style(e, t, c + l), (1 - o) * (1 - (o = s() / u || .5)) <= 0 && (a = 0), c /= o;
            }c *= 2, w.style(e, t, c + l), n = n || [];
        }return n && (c = +c || +u || 0, i = n[1] ? c + (n[1] + 1) * n[2] : +n[2], r && (r.unit = l, r.start = c, r.end = i)), i;
    }var le = {};function ce(e) {
        var t,
            n = e.ownerDocument,
            r = e.nodeName,
            i = le[r];return i || (t = n.body.appendChild(n.createElement(r)), i = w.css(t, "display"), t.parentNode.removeChild(t), "none" === i && (i = "block"), le[r] = i, i);
    }function fe(e, t) {
        for (var n, r, i = [], o = 0, a = e.length; o < a; o++) {
            (r = e[o]).style && (n = r.style.display, t ? ("none" === n && (i[o] = J.get(r, "display") || null, i[o] || (r.style.display = "")), "" === r.style.display && ae(r) && (i[o] = ce(r))) : "none" !== n && (i[o] = "none", J.set(r, "display", n)));
        }for (o = 0; o < a; o++) {
            null != i[o] && (e[o].style.display = i[o]);
        }return e;
    }w.fn.extend({ show: function show() {
            return fe(this, !0);
        }, hide: function hide() {
            return fe(this);
        }, toggle: function toggle(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
                ae(this) ? w(this).show() : w(this).hide();
            });
        } });var pe = /^(?:checkbox|radio)$/i,
        de = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
        he = /^$|^module$|\/(?:java|ecma)script/i,
        ge = { option: [1, "<select multiple='multiple'>", "</select>"], thead: [1, "<table>", "</table>"], col: [2, "<table><colgroup>", "</colgroup></table>"], tr: [2, "<table><tbody>", "</tbody></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: [0, "", ""] };ge.optgroup = ge.option, ge.tbody = ge.tfoot = ge.colgroup = ge.caption = ge.thead, ge.th = ge.td;function ye(e, t) {
        var n;return n = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && N(e, t) ? w.merge([e], n) : n;
    }function ve(e, t) {
        for (var n = 0, r = e.length; n < r; n++) {
            J.set(e[n], "globalEval", !t || J.get(t[n], "globalEval"));
        }
    }var me = /<|&#?\w+;/;function xe(e, t, n, r, i) {
        for (var o, a, s, u, l, c, f = t.createDocumentFragment(), p = [], d = 0, h = e.length; d < h; d++) {
            if ((o = e[d]) || 0 === o) if ("object" === x(o)) w.merge(p, o.nodeType ? [o] : o);else if (me.test(o)) {
                a = a || f.appendChild(t.createElement("div")), s = (de.exec(o) || ["", ""])[1].toLowerCase(), u = ge[s] || ge._default, a.innerHTML = u[1] + w.htmlPrefilter(o) + u[2], c = u[0];while (c--) {
                    a = a.lastChild;
                }w.merge(p, a.childNodes), (a = f.firstChild).textContent = "";
            } else p.push(t.createTextNode(o));
        }f.textContent = "", d = 0;while (o = p[d++]) {
            if (r && w.inArray(o, r) > -1) i && i.push(o);else if (l = w.contains(o.ownerDocument, o), a = ye(f.appendChild(o), "script"), l && ve(a), n) {
                c = 0;while (o = a[c++]) {
                    he.test(o.type || "") && n.push(o);
                }
            }
        }return f;
    }!function () {
        var e = r.createDocumentFragment().appendChild(r.createElement("div")),
            t = r.createElement("input");t.setAttribute("type", "radio"), t.setAttribute("checked", "checked"), t.setAttribute("name", "t"), e.appendChild(t), h.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, e.innerHTML = "<textarea>x</textarea>", h.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue;
    }();var be = r.documentElement,
        we = /^key/,
        Te = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        Ce = /^([^.]*)(?:\.(.+)|)/;function Ee() {
        return !0;
    }function ke() {
        return !1;
    }function Se() {
        try {
            return r.activeElement;
        } catch (e) {}
    }function De(e, t, n, r, i, o) {
        var a, s;if ("object" == (typeof t === "undefined" ? "undefined" : _typeof(t))) {
            "string" != typeof n && (r = r || n, n = void 0);for (s in t) {
                De(e, s, n, r, t[s], o);
            }return e;
        }if (null == r && null == i ? (i = n, r = n = void 0) : null == i && ("string" == typeof n ? (i = r, r = void 0) : (i = r, r = n, n = void 0)), !1 === i) i = ke;else if (!i) return e;return 1 === o && (a = i, (i = function i(e) {
            return w().off(e), a.apply(this, arguments);
        }).guid = a.guid || (a.guid = w.guid++)), e.each(function () {
            w.event.add(this, t, i, r, n);
        });
    }w.event = { global: {}, add: function add(e, t, n, r, i) {
            var o,
                a,
                s,
                u,
                l,
                c,
                f,
                p,
                d,
                h,
                g,
                y = J.get(e);if (y) {
                n.handler && (n = (o = n).handler, i = o.selector), i && w.find.matchesSelector(be, i), n.guid || (n.guid = w.guid++), (u = y.events) || (u = y.events = {}), (a = y.handle) || (a = y.handle = function (t) {
                    return "undefined" != typeof w && w.event.triggered !== t.type ? w.event.dispatch.apply(e, arguments) : void 0;
                }), l = (t = (t || "").match(M) || [""]).length;while (l--) {
                    d = g = (s = Ce.exec(t[l]) || [])[1], h = (s[2] || "").split(".").sort(), d && (f = w.event.special[d] || {}, d = (i ? f.delegateType : f.bindType) || d, f = w.event.special[d] || {}, c = w.extend({ type: d, origType: g, data: r, handler: n, guid: n.guid, selector: i, needsContext: i && w.expr.match.needsContext.test(i), namespace: h.join(".") }, o), (p = u[d]) || ((p = u[d] = []).delegateCount = 0, f.setup && !1 !== f.setup.call(e, r, h, a) || e.addEventListener && e.addEventListener(d, a)), f.add && (f.add.call(e, c), c.handler.guid || (c.handler.guid = n.guid)), i ? p.splice(p.delegateCount++, 0, c) : p.push(c), w.event.global[d] = !0);
                }
            }
        }, remove: function remove(e, t, n, r, i) {
            var o,
                a,
                s,
                u,
                l,
                c,
                f,
                p,
                d,
                h,
                g,
                y = J.hasData(e) && J.get(e);if (y && (u = y.events)) {
                l = (t = (t || "").match(M) || [""]).length;while (l--) {
                    if (s = Ce.exec(t[l]) || [], d = g = s[1], h = (s[2] || "").split(".").sort(), d) {
                        f = w.event.special[d] || {}, p = u[d = (r ? f.delegateType : f.bindType) || d] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = p.length;while (o--) {
                            c = p[o], !i && g !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (p.splice(o, 1), c.selector && p.delegateCount--, f.remove && f.remove.call(e, c));
                        }a && !p.length && (f.teardown && !1 !== f.teardown.call(e, h, y.handle) || w.removeEvent(e, d, y.handle), delete u[d]);
                    } else for (d in u) {
                        w.event.remove(e, d + t[l], n, r, !0);
                    }
                }w.isEmptyObject(u) && J.remove(e, "handle events");
            }
        }, dispatch: function dispatch(e) {
            var t = w.event.fix(e),
                n,
                r,
                i,
                o,
                a,
                s,
                u = new Array(arguments.length),
                l = (J.get(this, "events") || {})[t.type] || [],
                c = w.event.special[t.type] || {};for (u[0] = t, n = 1; n < arguments.length; n++) {
                u[n] = arguments[n];
            }if (t.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, t)) {
                s = w.event.handlers.call(this, t, l), n = 0;while ((o = s[n++]) && !t.isPropagationStopped()) {
                    t.currentTarget = o.elem, r = 0;while ((a = o.handlers[r++]) && !t.isImmediatePropagationStopped()) {
                        t.rnamespace && !t.rnamespace.test(a.namespace) || (t.handleObj = a, t.data = a.data, void 0 !== (i = ((w.event.special[a.origType] || {}).handle || a.handler).apply(o.elem, u)) && !1 === (t.result = i) && (t.preventDefault(), t.stopPropagation()));
                    }
                }return c.postDispatch && c.postDispatch.call(this, t), t.result;
            }
        }, handlers: function handlers(e, t) {
            var n,
                r,
                i,
                o,
                a,
                s = [],
                u = t.delegateCount,
                l = e.target;if (u && l.nodeType && !("click" === e.type && e.button >= 1)) for (; l !== this; l = l.parentNode || this) {
                if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
                    for (o = [], a = {}, n = 0; n < u; n++) {
                        void 0 === a[i = (r = t[n]).selector + " "] && (a[i] = r.needsContext ? w(i, this).index(l) > -1 : w.find(i, this, null, [l]).length), a[i] && o.push(r);
                    }o.length && s.push({ elem: l, handlers: o });
                }
            }return l = this, u < t.length && s.push({ elem: l, handlers: t.slice(u) }), s;
        }, addProp: function addProp(e, t) {
            Object.defineProperty(w.Event.prototype, e, { enumerable: !0, configurable: !0, get: g(t) ? function () {
                    if (this.originalEvent) return t(this.originalEvent);
                } : function () {
                    if (this.originalEvent) return this.originalEvent[e];
                }, set: function set(t) {
                    Object.defineProperty(this, e, { enumerable: !0, configurable: !0, writable: !0, value: t });
                } });
        }, fix: function fix(e) {
            return e[w.expando] ? e : new w.Event(e);
        }, special: { load: { noBubble: !0 }, focus: { trigger: function trigger() {
                    if (this !== Se() && this.focus) return this.focus(), !1;
                }, delegateType: "focusin" }, blur: { trigger: function trigger() {
                    if (this === Se() && this.blur) return this.blur(), !1;
                }, delegateType: "focusout" }, click: { trigger: function trigger() {
                    if ("checkbox" === this.type && this.click && N(this, "input")) return this.click(), !1;
                }, _default: function _default(e) {
                    return N(e.target, "a");
                } }, beforeunload: { postDispatch: function postDispatch(e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result);
                } } } }, w.removeEvent = function (e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n);
    }, w.Event = function (e, t) {
        if (!(this instanceof w.Event)) return new w.Event(e, t);e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? Ee : ke, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && w.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[w.expando] = !0;
    }, w.Event.prototype = { constructor: w.Event, isDefaultPrevented: ke, isPropagationStopped: ke, isImmediatePropagationStopped: ke, isSimulated: !1, preventDefault: function preventDefault() {
            var e = this.originalEvent;this.isDefaultPrevented = Ee, e && !this.isSimulated && e.preventDefault();
        }, stopPropagation: function stopPropagation() {
            var e = this.originalEvent;this.isPropagationStopped = Ee, e && !this.isSimulated && e.stopPropagation();
        }, stopImmediatePropagation: function stopImmediatePropagation() {
            var e = this.originalEvent;this.isImmediatePropagationStopped = Ee, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation();
        } }, w.each({ altKey: !0, bubbles: !0, cancelable: !0, changedTouches: !0, ctrlKey: !0, detail: !0, eventPhase: !0, metaKey: !0, pageX: !0, pageY: !0, shiftKey: !0, view: !0, "char": !0, charCode: !0, key: !0, keyCode: !0, button: !0, buttons: !0, clientX: !0, clientY: !0, offsetX: !0, offsetY: !0, pointerId: !0, pointerType: !0, screenX: !0, screenY: !0, targetTouches: !0, toElement: !0, touches: !0, which: function which(e) {
            var t = e.button;return null == e.which && we.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && Te.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which;
        } }, w.event.addProp), w.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, function (e, t) {
        w.event.special[e] = { delegateType: t, bindType: t, handle: function handle(e) {
                var n,
                    r = this,
                    i = e.relatedTarget,
                    o = e.handleObj;return i && (i === r || w.contains(r, i)) || (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n;
            } };
    }), w.fn.extend({ on: function on(e, t, n, r) {
            return De(this, e, t, n, r);
        }, one: function one(e, t, n, r) {
            return De(this, e, t, n, r, 1);
        }, off: function off(e, t, n) {
            var r, i;if (e && e.preventDefault && e.handleObj) return r = e.handleObj, w(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;if ("object" == (typeof e === "undefined" ? "undefined" : _typeof(e))) {
                for (i in e) {
                    this.off(i, t, e[i]);
                }return this;
            }return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = ke), this.each(function () {
                w.event.remove(this, e, n, t);
            });
        } });var Ne = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
        Ae = /<script|<style|<link/i,
        je = /checked\s*(?:[^=]|=\s*.checked.)/i,
        qe = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function Le(e, t) {
        return N(e, "table") && N(11 !== t.nodeType ? t : t.firstChild, "tr") ? w(e).children("tbody")[0] || e : e;
    }function He(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e;
    }function Oe(e) {
        return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e;
    }function Pe(e, t) {
        var n, r, i, o, a, s, u, l;if (1 === t.nodeType) {
            if (J.hasData(e) && (o = J.access(e), a = J.set(t, o), l = o.events)) {
                delete a.handle, a.events = {};for (i in l) {
                    for (n = 0, r = l[i].length; n < r; n++) {
                        w.event.add(t, i, l[i][n]);
                    }
                }
            }K.hasData(e) && (s = K.access(e), u = w.extend({}, s), K.set(t, u));
        }
    }function Me(e, t) {
        var n = t.nodeName.toLowerCase();"input" === n && pe.test(e.type) ? t.checked = e.checked : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue);
    }function Re(e, t, n, r) {
        t = a.apply([], t);var i,
            o,
            s,
            u,
            l,
            c,
            f = 0,
            p = e.length,
            d = p - 1,
            y = t[0],
            v = g(y);if (v || p > 1 && "string" == typeof y && !h.checkClone && je.test(y)) return e.each(function (i) {
            var o = e.eq(i);v && (t[0] = y.call(this, i, o.html())), Re(o, t, n, r);
        });if (p && (i = xe(t, e[0].ownerDocument, !1, e, r), o = i.firstChild, 1 === i.childNodes.length && (i = o), o || r)) {
            for (u = (s = w.map(ye(i, "script"), He)).length; f < p; f++) {
                l = i, f !== d && (l = w.clone(l, !0, !0), u && w.merge(s, ye(l, "script"))), n.call(e[f], l, f);
            }if (u) for (c = s[s.length - 1].ownerDocument, w.map(s, Oe), f = 0; f < u; f++) {
                l = s[f], he.test(l.type || "") && !J.access(l, "globalEval") && w.contains(c, l) && (l.src && "module" !== (l.type || "").toLowerCase() ? w._evalUrl && w._evalUrl(l.src) : m(l.textContent.replace(qe, ""), c, l));
            }
        }return e;
    }function Ie(e, t, n) {
        for (var r, i = t ? w.filter(t, e) : e, o = 0; null != (r = i[o]); o++) {
            n || 1 !== r.nodeType || w.cleanData(ye(r)), r.parentNode && (n && w.contains(r.ownerDocument, r) && ve(ye(r, "script")), r.parentNode.removeChild(r));
        }return e;
    }w.extend({ htmlPrefilter: function htmlPrefilter(e) {
            return e.replace(Ne, "<$1></$2>");
        }, clone: function clone(e, t, n) {
            var r,
                i,
                o,
                a,
                s = e.cloneNode(!0),
                u = w.contains(e.ownerDocument, e);if (!(h.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || w.isXMLDoc(e))) for (a = ye(s), r = 0, i = (o = ye(e)).length; r < i; r++) {
                Me(o[r], a[r]);
            }if (t) if (n) for (o = o || ye(e), a = a || ye(s), r = 0, i = o.length; r < i; r++) {
                Pe(o[r], a[r]);
            } else Pe(e, s);return (a = ye(s, "script")).length > 0 && ve(a, !u && ye(e, "script")), s;
        }, cleanData: function cleanData(e) {
            for (var t, n, r, i = w.event.special, o = 0; void 0 !== (n = e[o]); o++) {
                if (Y(n)) {
                    if (t = n[J.expando]) {
                        if (t.events) for (r in t.events) {
                            i[r] ? w.event.remove(n, r) : w.removeEvent(n, r, t.handle);
                        }n[J.expando] = void 0;
                    }n[K.expando] && (n[K.expando] = void 0);
                }
            }
        } }), w.fn.extend({ detach: function detach(e) {
            return Ie(this, e, !0);
        }, remove: function remove(e) {
            return Ie(this, e);
        }, text: function text(e) {
            return z(this, function (e) {
                return void 0 === e ? w.text(this) : this.empty().each(function () {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e);
                });
            }, null, e, arguments.length);
        }, append: function append() {
            return Re(this, arguments, function (e) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Le(this, e).appendChild(e);
            });
        }, prepend: function prepend() {
            return Re(this, arguments, function (e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = Le(this, e);t.insertBefore(e, t.firstChild);
                }
            });
        }, before: function before() {
            return Re(this, arguments, function (e) {
                this.parentNode && this.parentNode.insertBefore(e, this);
            });
        }, after: function after() {
            return Re(this, arguments, function (e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
            });
        }, empty: function empty() {
            for (var e, t = 0; null != (e = this[t]); t++) {
                1 === e.nodeType && (w.cleanData(ye(e, !1)), e.textContent = "");
            }return this;
        }, clone: function clone(e, t) {
            return e = null != e && e, t = null == t ? e : t, this.map(function () {
                return w.clone(this, e, t);
            });
        }, html: function html(e) {
            return z(this, function (e) {
                var t = this[0] || {},
                    n = 0,
                    r = this.length;if (void 0 === e && 1 === t.nodeType) return t.innerHTML;if ("string" == typeof e && !Ae.test(e) && !ge[(de.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = w.htmlPrefilter(e);try {
                        for (; n < r; n++) {
                            1 === (t = this[n] || {}).nodeType && (w.cleanData(ye(t, !1)), t.innerHTML = e);
                        }t = 0;
                    } catch (e) {}
                }t && this.empty().append(e);
            }, null, e, arguments.length);
        }, replaceWith: function replaceWith() {
            var e = [];return Re(this, arguments, function (t) {
                var n = this.parentNode;w.inArray(this, e) < 0 && (w.cleanData(ye(this)), n && n.replaceChild(t, this));
            }, e);
        } }), w.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function (e, t) {
        w.fn[e] = function (e) {
            for (var n, r = [], i = w(e), o = i.length - 1, a = 0; a <= o; a++) {
                n = a === o ? this : this.clone(!0), w(i[a])[t](n), s.apply(r, n.get());
            }return this.pushStack(r);
        };
    });var We = new RegExp("^(" + re + ")(?!px)[a-z%]+$", "i"),
        $e = function $e(t) {
        var n = t.ownerDocument.defaultView;return n && n.opener || (n = e), n.getComputedStyle(t);
    },
        Be = new RegExp(oe.join("|"), "i");!function () {
        function t() {
            if (c) {
                l.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", c.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", be.appendChild(l).appendChild(c);var t = e.getComputedStyle(c);i = "1%" !== t.top, u = 12 === n(t.marginLeft), c.style.right = "60%", s = 36 === n(t.right), o = 36 === n(t.width), c.style.position = "absolute", a = 36 === c.offsetWidth || "absolute", be.removeChild(l), c = null;
            }
        }function n(e) {
            return Math.round(parseFloat(e));
        }var i,
            o,
            a,
            s,
            u,
            l = r.createElement("div"),
            c = r.createElement("div");c.style && (c.style.backgroundClip = "content-box", c.cloneNode(!0).style.backgroundClip = "", h.clearCloneStyle = "content-box" === c.style.backgroundClip, w.extend(h, { boxSizingReliable: function boxSizingReliable() {
                return t(), o;
            }, pixelBoxStyles: function pixelBoxStyles() {
                return t(), s;
            }, pixelPosition: function pixelPosition() {
                return t(), i;
            }, reliableMarginLeft: function reliableMarginLeft() {
                return t(), u;
            }, scrollboxSize: function scrollboxSize() {
                return t(), a;
            } }));
    }();function Fe(e, t, n) {
        var r,
            i,
            o,
            a,
            s = e.style;return (n = n || $e(e)) && ("" !== (a = n.getPropertyValue(t) || n[t]) || w.contains(e.ownerDocument, e) || (a = w.style(e, t)), !h.pixelBoxStyles() && We.test(a) && Be.test(t) && (r = s.width, i = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = r, s.minWidth = i, s.maxWidth = o)), void 0 !== a ? a + "" : a;
    }function _e(e, t) {
        return { get: function get() {
                if (!e()) return (this.get = t).apply(this, arguments);delete this.get;
            } };
    }var ze = /^(none|table(?!-c[ea]).+)/,
        Xe = /^--/,
        Ue = { position: "absolute", visibility: "hidden", display: "block" },
        Ve = { letterSpacing: "0", fontWeight: "400" },
        Ge = ["Webkit", "Moz", "ms"],
        Ye = r.createElement("div").style;function Qe(e) {
        if (e in Ye) return e;var t = e[0].toUpperCase() + e.slice(1),
            n = Ge.length;while (n--) {
            if ((e = Ge[n] + t) in Ye) return e;
        }
    }function Je(e) {
        var t = w.cssProps[e];return t || (t = w.cssProps[e] = Qe(e) || e), t;
    }function Ke(e, t, n) {
        var r = ie.exec(t);return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t;
    }function Ze(e, t, n, r, i, o) {
        var a = "width" === t ? 1 : 0,
            s = 0,
            u = 0;if (n === (r ? "border" : "content")) return 0;for (; a < 4; a += 2) {
            "margin" === n && (u += w.css(e, n + oe[a], !0, i)), r ? ("content" === n && (u -= w.css(e, "padding" + oe[a], !0, i)), "margin" !== n && (u -= w.css(e, "border" + oe[a] + "Width", !0, i))) : (u += w.css(e, "padding" + oe[a], !0, i), "padding" !== n ? u += w.css(e, "border" + oe[a] + "Width", !0, i) : s += w.css(e, "border" + oe[a] + "Width", !0, i));
        }return !r && o >= 0 && (u += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - u - s - .5))), u;
    }function et(e, t, n) {
        var r = $e(e),
            i = Fe(e, t, r),
            o = "border-box" === w.css(e, "boxSizing", !1, r),
            a = o;if (We.test(i)) {
            if (!n) return i;i = "auto";
        }return a = a && (h.boxSizingReliable() || i === e.style[t]), ("auto" === i || !parseFloat(i) && "inline" === w.css(e, "display", !1, r)) && (i = e["offset" + t[0].toUpperCase() + t.slice(1)], a = !0), (i = parseFloat(i) || 0) + Ze(e, t, n || (o ? "border" : "content"), a, r, i) + "px";
    }w.extend({ cssHooks: { opacity: { get: function get(e, t) {
                    if (t) {
                        var n = Fe(e, "opacity");return "" === n ? "1" : n;
                    }
                } } }, cssNumber: { animationIterationCount: !0, columnCount: !0, fillOpacity: !0, flexGrow: !0, flexShrink: !0, fontWeight: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0 }, cssProps: {}, style: function style(e, t, n, r) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var i,
                    o,
                    a,
                    s = G(t),
                    u = Xe.test(t),
                    l = e.style;if (u || (t = Je(s)), a = w.cssHooks[t] || w.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t];"string" == (o = typeof n === "undefined" ? "undefined" : _typeof(n)) && (i = ie.exec(n)) && i[1] && (n = ue(e, t, i), o = "number"), null != n && n === n && ("number" === o && (n += i && i[3] || (w.cssNumber[s] ? "" : "px")), h.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), a && "set" in a && void 0 === (n = a.set(e, n, r)) || (u ? l.setProperty(t, n) : l[t] = n));
            }
        }, css: function css(e, t, n, r) {
            var i,
                o,
                a,
                s = G(t);return Xe.test(t) || (t = Je(s)), (a = w.cssHooks[t] || w.cssHooks[s]) && "get" in a && (i = a.get(e, !0, n)), void 0 === i && (i = Fe(e, t, r)), "normal" === i && t in Ve && (i = Ve[t]), "" === n || n ? (o = parseFloat(i), !0 === n || isFinite(o) ? o || 0 : i) : i;
        } }), w.each(["height", "width"], function (e, t) {
        w.cssHooks[t] = { get: function get(e, n, r) {
                if (n) return !ze.test(w.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? et(e, t, r) : se(e, Ue, function () {
                    return et(e, t, r);
                });
            }, set: function set(e, n, r) {
                var i,
                    o = $e(e),
                    a = "border-box" === w.css(e, "boxSizing", !1, o),
                    s = r && Ze(e, t, r, a, o);return a && h.scrollboxSize() === o.position && (s -= Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(o[t]) - Ze(e, t, "border", !1, o) - .5)), s && (i = ie.exec(n)) && "px" !== (i[3] || "px") && (e.style[t] = n, n = w.css(e, t)), Ke(e, n, s);
            } };
    }), w.cssHooks.marginLeft = _e(h.reliableMarginLeft, function (e, t) {
        if (t) return (parseFloat(Fe(e, "marginLeft")) || e.getBoundingClientRect().left - se(e, { marginLeft: 0 }, function () {
            return e.getBoundingClientRect().left;
        })) + "px";
    }), w.each({ margin: "", padding: "", border: "Width" }, function (e, t) {
        w.cssHooks[e + t] = { expand: function expand(n) {
                for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n]; r < 4; r++) {
                    i[e + oe[r] + t] = o[r] || o[r - 2] || o[0];
                }return i;
            } }, "margin" !== e && (w.cssHooks[e + t].set = Ke);
    }), w.fn.extend({ css: function css(e, t) {
            return z(this, function (e, t, n) {
                var r,
                    i,
                    o = {},
                    a = 0;if (Array.isArray(t)) {
                    for (r = $e(e), i = t.length; a < i; a++) {
                        o[t[a]] = w.css(e, t[a], !1, r);
                    }return o;
                }return void 0 !== n ? w.style(e, t, n) : w.css(e, t);
            }, e, t, arguments.length > 1);
        } });function tt(e, t, n, r, i) {
        return new tt.prototype.init(e, t, n, r, i);
    }w.Tween = tt, tt.prototype = { constructor: tt, init: function init(e, t, n, r, i, o) {
            this.elem = e, this.prop = n, this.easing = i || w.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (w.cssNumber[n] ? "" : "px");
        }, cur: function cur() {
            var e = tt.propHooks[this.prop];return e && e.get ? e.get(this) : tt.propHooks._default.get(this);
        }, run: function run(e) {
            var t,
                n = tt.propHooks[this.prop];return this.options.duration ? this.pos = t = w.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : tt.propHooks._default.set(this), this;
        } }, tt.prototype.init.prototype = tt.prototype, tt.propHooks = { _default: { get: function get(e) {
                var t;return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = w.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0;
            }, set: function set(e) {
                w.fx.step[e.prop] ? w.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[w.cssProps[e.prop]] && !w.cssHooks[e.prop] ? e.elem[e.prop] = e.now : w.style(e.elem, e.prop, e.now + e.unit);
            } } }, tt.propHooks.scrollTop = tt.propHooks.scrollLeft = { set: function set(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
        } }, w.easing = { linear: function linear(e) {
            return e;
        }, swing: function swing(e) {
            return .5 - Math.cos(e * Math.PI) / 2;
        }, _default: "swing" }, w.fx = tt.prototype.init, w.fx.step = {};var nt,
        rt,
        it = /^(?:toggle|show|hide)$/,
        ot = /queueHooks$/;function at() {
        rt && (!1 === r.hidden && e.requestAnimationFrame ? e.requestAnimationFrame(at) : e.setTimeout(at, w.fx.interval), w.fx.tick());
    }function st() {
        return e.setTimeout(function () {
            nt = void 0;
        }), nt = Date.now();
    }function ut(e, t) {
        var n,
            r = 0,
            i = { height: e };for (t = t ? 1 : 0; r < 4; r += 2 - t) {
            i["margin" + (n = oe[r])] = i["padding" + n] = e;
        }return t && (i.opacity = i.width = e), i;
    }function lt(e, t, n) {
        for (var r, i = (pt.tweeners[t] || []).concat(pt.tweeners["*"]), o = 0, a = i.length; o < a; o++) {
            if (r = i[o].call(n, t, e)) return r;
        }
    }function ct(e, t, n) {
        var r,
            i,
            o,
            a,
            s,
            u,
            l,
            c,
            f = "width" in t || "height" in t,
            p = this,
            d = {},
            h = e.style,
            g = e.nodeType && ae(e),
            y = J.get(e, "fxshow");n.queue || (null == (a = w._queueHooks(e, "fx")).unqueued && (a.unqueued = 0, s = a.empty.fire, a.empty.fire = function () {
            a.unqueued || s();
        }), a.unqueued++, p.always(function () {
            p.always(function () {
                a.unqueued--, w.queue(e, "fx").length || a.empty.fire();
            });
        }));for (r in t) {
            if (i = t[r], it.test(i)) {
                if (delete t[r], o = o || "toggle" === i, i === (g ? "hide" : "show")) {
                    if ("show" !== i || !y || void 0 === y[r]) continue;g = !0;
                }d[r] = y && y[r] || w.style(e, r);
            }
        }if ((u = !w.isEmptyObject(t)) || !w.isEmptyObject(d)) {
            f && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY], null == (l = y && y.display) && (l = J.get(e, "display")), "none" === (c = w.css(e, "display")) && (l ? c = l : (fe([e], !0), l = e.style.display || l, c = w.css(e, "display"), fe([e]))), ("inline" === c || "inline-block" === c && null != l) && "none" === w.css(e, "float") && (u || (p.done(function () {
                h.display = l;
            }), null == l && (c = h.display, l = "none" === c ? "" : c)), h.display = "inline-block")), n.overflow && (h.overflow = "hidden", p.always(function () {
                h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2];
            })), u = !1;for (r in d) {
                u || (y ? "hidden" in y && (g = y.hidden) : y = J.access(e, "fxshow", { display: l }), o && (y.hidden = !g), g && fe([e], !0), p.done(function () {
                    g || fe([e]), J.remove(e, "fxshow");for (r in d) {
                        w.style(e, r, d[r]);
                    }
                })), u = lt(g ? y[r] : 0, r, p), r in y || (y[r] = u.start, g && (u.end = u.start, u.start = 0));
            }
        }
    }function ft(e, t) {
        var n, r, i, o, a;for (n in e) {
            if (r = G(n), i = t[r], o = e[n], Array.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), (a = w.cssHooks[r]) && "expand" in a) {
                o = a.expand(o), delete e[r];for (n in o) {
                    n in e || (e[n] = o[n], t[n] = i);
                }
            } else t[r] = i;
        }
    }function pt(e, t, n) {
        var r,
            i,
            o = 0,
            a = pt.prefilters.length,
            s = w.Deferred().always(function () {
            delete u.elem;
        }),
            u = function u() {
            if (i) return !1;for (var t = nt || st(), n = Math.max(0, l.startTime + l.duration - t), r = 1 - (n / l.duration || 0), o = 0, a = l.tweens.length; o < a; o++) {
                l.tweens[o].run(r);
            }return s.notifyWith(e, [l, r, n]), r < 1 && a ? n : (a || s.notifyWith(e, [l, 1, 0]), s.resolveWith(e, [l]), !1);
        },
            l = s.promise({ elem: e, props: w.extend({}, t), opts: w.extend(!0, { specialEasing: {}, easing: w.easing._default }, n), originalProperties: t, originalOptions: n, startTime: nt || st(), duration: n.duration, tweens: [], createTween: function createTween(t, n) {
                var r = w.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing);return l.tweens.push(r), r;
            }, stop: function stop(t) {
                var n = 0,
                    r = t ? l.tweens.length : 0;if (i) return this;for (i = !0; n < r; n++) {
                    l.tweens[n].run(1);
                }return t ? (s.notifyWith(e, [l, 1, 0]), s.resolveWith(e, [l, t])) : s.rejectWith(e, [l, t]), this;
            } }),
            c = l.props;for (ft(c, l.opts.specialEasing); o < a; o++) {
            if (r = pt.prefilters[o].call(l, e, c, l.opts)) return g(r.stop) && (w._queueHooks(l.elem, l.opts.queue).stop = r.stop.bind(r)), r;
        }return w.map(c, lt, l), g(l.opts.start) && l.opts.start.call(e, l), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always), w.fx.timer(w.extend(u, { elem: e, anim: l, queue: l.opts.queue })), l;
    }w.Animation = w.extend(pt, { tweeners: { "*": [function (e, t) {
                var n = this.createTween(e, t);return ue(n.elem, e, ie.exec(t), n), n;
            }] }, tweener: function tweener(e, t) {
            g(e) ? (t = e, e = ["*"]) : e = e.match(M);for (var n, r = 0, i = e.length; r < i; r++) {
                n = e[r], pt.tweeners[n] = pt.tweeners[n] || [], pt.tweeners[n].unshift(t);
            }
        }, prefilters: [ct], prefilter: function prefilter(e, t) {
            t ? pt.prefilters.unshift(e) : pt.prefilters.push(e);
        } }), w.speed = function (e, t, n) {
        var r = e && "object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) ? w.extend({}, e) : { complete: n || !n && t || g(e) && e, duration: e, easing: n && t || t && !g(t) && t };return w.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in w.fx.speeds ? r.duration = w.fx.speeds[r.duration] : r.duration = w.fx.speeds._default), null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function () {
            g(r.old) && r.old.call(this), r.queue && w.dequeue(this, r.queue);
        }, r;
    }, w.fn.extend({ fadeTo: function fadeTo(e, t, n, r) {
            return this.filter(ae).css("opacity", 0).show().end().animate({ opacity: t }, e, n, r);
        }, animate: function animate(e, t, n, r) {
            var i = w.isEmptyObject(e),
                o = w.speed(t, n, r),
                a = function a() {
                var t = pt(this, w.extend({}, e), o);(i || J.get(this, "finish")) && t.stop(!0);
            };return a.finish = a, i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a);
        }, stop: function stop(e, t, n) {
            var r = function r(e) {
                var t = e.stop;delete e.stop, t(n);
            };return "string" != typeof e && (n = t, t = e, e = void 0), t && !1 !== e && this.queue(e || "fx", []), this.each(function () {
                var t = !0,
                    i = null != e && e + "queueHooks",
                    o = w.timers,
                    a = J.get(this);if (i) a[i] && a[i].stop && r(a[i]);else for (i in a) {
                    a[i] && a[i].stop && ot.test(i) && r(a[i]);
                }for (i = o.length; i--;) {
                    o[i].elem !== this || null != e && o[i].queue !== e || (o[i].anim.stop(n), t = !1, o.splice(i, 1));
                }!t && n || w.dequeue(this, e);
            });
        }, finish: function finish(e) {
            return !1 !== e && (e = e || "fx"), this.each(function () {
                var t,
                    n = J.get(this),
                    r = n[e + "queue"],
                    i = n[e + "queueHooks"],
                    o = w.timers,
                    a = r ? r.length : 0;for (n.finish = !0, w.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = o.length; t--;) {
                    o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
                }for (t = 0; t < a; t++) {
                    r[t] && r[t].finish && r[t].finish.call(this);
                }delete n.finish;
            });
        } }), w.each(["toggle", "show", "hide"], function (e, t) {
        var n = w.fn[t];w.fn[t] = function (e, r, i) {
            return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(ut(t, !0), e, r, i);
        };
    }), w.each({ slideDown: ut("show"), slideUp: ut("hide"), slideToggle: ut("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function (e, t) {
        w.fn[e] = function (e, n, r) {
            return this.animate(t, e, n, r);
        };
    }), w.timers = [], w.fx.tick = function () {
        var e,
            t = 0,
            n = w.timers;for (nt = Date.now(); t < n.length; t++) {
            (e = n[t])() || n[t] !== e || n.splice(t--, 1);
        }n.length || w.fx.stop(), nt = void 0;
    }, w.fx.timer = function (e) {
        w.timers.push(e), w.fx.start();
    }, w.fx.interval = 13, w.fx.start = function () {
        rt || (rt = !0, at());
    }, w.fx.stop = function () {
        rt = null;
    }, w.fx.speeds = { slow: 600, fast: 200, _default: 400 }, w.fn.delay = function (t, n) {
        return t = w.fx ? w.fx.speeds[t] || t : t, n = n || "fx", this.queue(n, function (n, r) {
            var i = e.setTimeout(n, t);r.stop = function () {
                e.clearTimeout(i);
            };
        });
    }, function () {
        var e = r.createElement("input"),
            t = r.createElement("select").appendChild(r.createElement("option"));e.type = "checkbox", h.checkOn = "" !== e.value, h.optSelected = t.selected, (e = r.createElement("input")).value = "t", e.type = "radio", h.radioValue = "t" === e.value;
    }();var dt,
        ht = w.expr.attrHandle;w.fn.extend({ attr: function attr(e, t) {
            return z(this, w.attr, e, t, arguments.length > 1);
        }, removeAttr: function removeAttr(e) {
            return this.each(function () {
                w.removeAttr(this, e);
            });
        } }), w.extend({ attr: function attr(e, t, n) {
            var r,
                i,
                o = e.nodeType;if (3 !== o && 8 !== o && 2 !== o) return "undefined" == typeof e.getAttribute ? w.prop(e, t, n) : (1 === o && w.isXMLDoc(e) || (i = w.attrHooks[t.toLowerCase()] || (w.expr.match.bool.test(t) ? dt : void 0)), void 0 !== n ? null === n ? void w.removeAttr(e, t) : i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : i && "get" in i && null !== (r = i.get(e, t)) ? r : null == (r = w.find.attr(e, t)) ? void 0 : r);
        }, attrHooks: { type: { set: function set(e, t) {
                    if (!h.radioValue && "radio" === t && N(e, "input")) {
                        var n = e.value;return e.setAttribute("type", t), n && (e.value = n), t;
                    }
                } } }, removeAttr: function removeAttr(e, t) {
            var n,
                r = 0,
                i = t && t.match(M);if (i && 1 === e.nodeType) while (n = i[r++]) {
                e.removeAttribute(n);
            }
        } }), dt = { set: function set(e, t, n) {
            return !1 === t ? w.removeAttr(e, n) : e.setAttribute(n, n), n;
        } }, w.each(w.expr.match.bool.source.match(/\w+/g), function (e, t) {
        var n = ht[t] || w.find.attr;ht[t] = function (e, t, r) {
            var i,
                o,
                a = t.toLowerCase();return r || (o = ht[a], ht[a] = i, i = null != n(e, t, r) ? a : null, ht[a] = o), i;
        };
    });var gt = /^(?:input|select|textarea|button)$/i,
        yt = /^(?:a|area)$/i;w.fn.extend({ prop: function prop(e, t) {
            return z(this, w.prop, e, t, arguments.length > 1);
        }, removeProp: function removeProp(e) {
            return this.each(function () {
                delete this[w.propFix[e] || e];
            });
        } }), w.extend({ prop: function prop(e, t, n) {
            var r,
                i,
                o = e.nodeType;if (3 !== o && 8 !== o && 2 !== o) return 1 === o && w.isXMLDoc(e) || (t = w.propFix[t] || t, i = w.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t];
        }, propHooks: { tabIndex: { get: function get(e) {
                    var t = w.find.attr(e, "tabindex");return t ? parseInt(t, 10) : gt.test(e.nodeName) || yt.test(e.nodeName) && e.href ? 0 : -1;
                } } }, propFix: { "for": "htmlFor", "class": "className" } }), h.optSelected || (w.propHooks.selected = { get: function get(e) {
            var t = e.parentNode;return t && t.parentNode && t.parentNode.selectedIndex, null;
        }, set: function set(e) {
            var t = e.parentNode;t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
        } }), w.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
        w.propFix[this.toLowerCase()] = this;
    });function vt(e) {
        return (e.match(M) || []).join(" ");
    }function mt(e) {
        return e.getAttribute && e.getAttribute("class") || "";
    }function xt(e) {
        return Array.isArray(e) ? e : "string" == typeof e ? e.match(M) || [] : [];
    }w.fn.extend({ addClass: function addClass(e) {
            var t,
                n,
                r,
                i,
                o,
                a,
                s,
                u = 0;if (g(e)) return this.each(function (t) {
                w(this).addClass(e.call(this, t, mt(this)));
            });if ((t = xt(e)).length) while (n = this[u++]) {
                if (i = mt(n), r = 1 === n.nodeType && " " + vt(i) + " ") {
                    a = 0;while (o = t[a++]) {
                        r.indexOf(" " + o + " ") < 0 && (r += o + " ");
                    }i !== (s = vt(r)) && n.setAttribute("class", s);
                }
            }return this;
        }, removeClass: function removeClass(e) {
            var t,
                n,
                r,
                i,
                o,
                a,
                s,
                u = 0;if (g(e)) return this.each(function (t) {
                w(this).removeClass(e.call(this, t, mt(this)));
            });if (!arguments.length) return this.attr("class", "");if ((t = xt(e)).length) while (n = this[u++]) {
                if (i = mt(n), r = 1 === n.nodeType && " " + vt(i) + " ") {
                    a = 0;while (o = t[a++]) {
                        while (r.indexOf(" " + o + " ") > -1) {
                            r = r.replace(" " + o + " ", " ");
                        }
                    }i !== (s = vt(r)) && n.setAttribute("class", s);
                }
            }return this;
        }, toggleClass: function toggleClass(e, t) {
            var n = typeof e === "undefined" ? "undefined" : _typeof(e),
                r = "string" === n || Array.isArray(e);return "boolean" == typeof t && r ? t ? this.addClass(e) : this.removeClass(e) : g(e) ? this.each(function (n) {
                w(this).toggleClass(e.call(this, n, mt(this), t), t);
            }) : this.each(function () {
                var t, i, o, a;if (r) {
                    i = 0, o = w(this), a = xt(e);while (t = a[i++]) {
                        o.hasClass(t) ? o.removeClass(t) : o.addClass(t);
                    }
                } else void 0 !== e && "boolean" !== n || ((t = mt(this)) && J.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : J.get(this, "__className__") || ""));
            });
        }, hasClass: function hasClass(e) {
            var t,
                n,
                r = 0;t = " " + e + " ";while (n = this[r++]) {
                if (1 === n.nodeType && (" " + vt(mt(n)) + " ").indexOf(t) > -1) return !0;
            }return !1;
        } });var bt = /\r/g;w.fn.extend({ val: function val(e) {
            var t,
                n,
                r,
                i = this[0];{
                if (arguments.length) return r = g(e), this.each(function (n) {
                    var i;1 === this.nodeType && (null == (i = r ? e.call(this, n, w(this).val()) : e) ? i = "" : "number" == typeof i ? i += "" : Array.isArray(i) && (i = w.map(i, function (e) {
                        return null == e ? "" : e + "";
                    })), (t = w.valHooks[this.type] || w.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, i, "value") || (this.value = i));
                });if (i) return (t = w.valHooks[i.type] || w.valHooks[i.nodeName.toLowerCase()]) && "get" in t && void 0 !== (n = t.get(i, "value")) ? n : "string" == typeof (n = i.value) ? n.replace(bt, "") : null == n ? "" : n;
            }
        } }), w.extend({ valHooks: { option: { get: function get(e) {
                    var t = w.find.attr(e, "value");return null != t ? t : vt(w.text(e));
                } }, select: { get: function get(e) {
                    var t,
                        n,
                        r,
                        i = e.options,
                        o = e.selectedIndex,
                        a = "select-one" === e.type,
                        s = a ? null : [],
                        u = a ? o + 1 : i.length;for (r = o < 0 ? u : a ? o : 0; r < u; r++) {
                        if (((n = i[r]).selected || r === o) && !n.disabled && (!n.parentNode.disabled || !N(n.parentNode, "optgroup"))) {
                            if (t = w(n).val(), a) return t;s.push(t);
                        }
                    }return s;
                }, set: function set(e, t) {
                    var n,
                        r,
                        i = e.options,
                        o = w.makeArray(t),
                        a = i.length;while (a--) {
                        ((r = i[a]).selected = w.inArray(w.valHooks.option.get(r), o) > -1) && (n = !0);
                    }return n || (e.selectedIndex = -1), o;
                } } } }), w.each(["radio", "checkbox"], function () {
        w.valHooks[this] = { set: function set(e, t) {
                if (Array.isArray(t)) return e.checked = w.inArray(w(e).val(), t) > -1;
            } }, h.checkOn || (w.valHooks[this].get = function (e) {
            return null === e.getAttribute("value") ? "on" : e.value;
        });
    }), h.focusin = "onfocusin" in e;var wt = /^(?:focusinfocus|focusoutblur)$/,
        Tt = function Tt(e) {
        e.stopPropagation();
    };w.extend(w.event, { trigger: function trigger(t, n, i, o) {
            var a,
                s,
                u,
                l,
                c,
                p,
                d,
                h,
                v = [i || r],
                m = f.call(t, "type") ? t.type : t,
                x = f.call(t, "namespace") ? t.namespace.split(".") : [];if (s = h = u = i = i || r, 3 !== i.nodeType && 8 !== i.nodeType && !wt.test(m + w.event.triggered) && (m.indexOf(".") > -1 && (m = (x = m.split(".")).shift(), x.sort()), c = m.indexOf(":") < 0 && "on" + m, t = t[w.expando] ? t : new w.Event(m, "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) && t), t.isTrigger = o ? 2 : 3, t.namespace = x.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + x.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = i), n = null == n ? [t] : w.makeArray(n, [t]), d = w.event.special[m] || {}, o || !d.trigger || !1 !== d.trigger.apply(i, n))) {
                if (!o && !d.noBubble && !y(i)) {
                    for (l = d.delegateType || m, wt.test(l + m) || (s = s.parentNode); s; s = s.parentNode) {
                        v.push(s), u = s;
                    }u === (i.ownerDocument || r) && v.push(u.defaultView || u.parentWindow || e);
                }a = 0;while ((s = v[a++]) && !t.isPropagationStopped()) {
                    h = s, t.type = a > 1 ? l : d.bindType || m, (p = (J.get(s, "events") || {})[t.type] && J.get(s, "handle")) && p.apply(s, n), (p = c && s[c]) && p.apply && Y(s) && (t.result = p.apply(s, n), !1 === t.result && t.preventDefault());
                }return t.type = m, o || t.isDefaultPrevented() || d._default && !1 !== d._default.apply(v.pop(), n) || !Y(i) || c && g(i[m]) && !y(i) && ((u = i[c]) && (i[c] = null), w.event.triggered = m, t.isPropagationStopped() && h.addEventListener(m, Tt), i[m](), t.isPropagationStopped() && h.removeEventListener(m, Tt), w.event.triggered = void 0, u && (i[c] = u)), t.result;
            }
        }, simulate: function simulate(e, t, n) {
            var r = w.extend(new w.Event(), n, { type: e, isSimulated: !0 });w.event.trigger(r, null, t);
        } }), w.fn.extend({ trigger: function trigger(e, t) {
            return this.each(function () {
                w.event.trigger(e, t, this);
            });
        }, triggerHandler: function triggerHandler(e, t) {
            var n = this[0];if (n) return w.event.trigger(e, t, n, !0);
        } }), h.focusin || w.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
        var n = function n(e) {
            w.event.simulate(t, e.target, w.event.fix(e));
        };w.event.special[t] = { setup: function setup() {
                var r = this.ownerDocument || this,
                    i = J.access(r, t);i || r.addEventListener(e, n, !0), J.access(r, t, (i || 0) + 1);
            }, teardown: function teardown() {
                var r = this.ownerDocument || this,
                    i = J.access(r, t) - 1;i ? J.access(r, t, i) : (r.removeEventListener(e, n, !0), J.remove(r, t));
            } };
    });var Ct = e.location,
        Et = Date.now(),
        kt = /\?/;w.parseXML = function (t) {
        var n;if (!t || "string" != typeof t) return null;try {
            n = new e.DOMParser().parseFromString(t, "text/xml");
        } catch (e) {
            n = void 0;
        }return n && !n.getElementsByTagName("parsererror").length || w.error("Invalid XML: " + t), n;
    };var St = /\[\]$/,
        Dt = /\r?\n/g,
        Nt = /^(?:submit|button|image|reset|file)$/i,
        At = /^(?:input|select|textarea|keygen)/i;function jt(e, t, n, r) {
        var i;if (Array.isArray(t)) w.each(t, function (t, i) {
            n || St.test(e) ? r(e, i) : jt(e + "[" + ("object" == (typeof i === "undefined" ? "undefined" : _typeof(i)) && null != i ? t : "") + "]", i, n, r);
        });else if (n || "object" !== x(t)) r(e, t);else for (i in t) {
            jt(e + "[" + i + "]", t[i], n, r);
        }
    }w.param = function (e, t) {
        var n,
            r = [],
            i = function i(e, t) {
            var n = g(t) ? t() : t;r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n);
        };if (Array.isArray(e) || e.jquery && !w.isPlainObject(e)) w.each(e, function () {
            i(this.name, this.value);
        });else for (n in e) {
            jt(n, e[n], t, i);
        }return r.join("&");
    }, w.fn.extend({ serialize: function serialize() {
            return w.param(this.serializeArray());
        }, serializeArray: function serializeArray() {
            return this.map(function () {
                var e = w.prop(this, "elements");return e ? w.makeArray(e) : this;
            }).filter(function () {
                var e = this.type;return this.name && !w(this).is(":disabled") && At.test(this.nodeName) && !Nt.test(e) && (this.checked || !pe.test(e));
            }).map(function (e, t) {
                var n = w(this).val();return null == n ? null : Array.isArray(n) ? w.map(n, function (e) {
                    return { name: t.name, value: e.replace(Dt, "\r\n") };
                }) : { name: t.name, value: n.replace(Dt, "\r\n") };
            }).get();
        } });var qt = /%20/g,
        Lt = /#.*$/,
        Ht = /([?&])_=[^&]*/,
        Ot = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        Pt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        Mt = /^(?:GET|HEAD)$/,
        Rt = /^\/\//,
        It = {},
        Wt = {},
        $t = "*/".concat("*"),
        Bt = r.createElement("a");Bt.href = Ct.href;function Ft(e) {
        return function (t, n) {
            "string" != typeof t && (n = t, t = "*");var r,
                i = 0,
                o = t.toLowerCase().match(M) || [];if (g(n)) while (r = o[i++]) {
                "+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n);
            }
        };
    }function _t(e, t, n, r) {
        var i = {},
            o = e === Wt;function a(s) {
            var u;return i[s] = !0, w.each(e[s] || [], function (e, s) {
                var l = s(t, n, r);return "string" != typeof l || o || i[l] ? o ? !(u = l) : void 0 : (t.dataTypes.unshift(l), a(l), !1);
            }), u;
        }return a(t.dataTypes[0]) || !i["*"] && a("*");
    }function zt(e, t) {
        var n,
            r,
            i = w.ajaxSettings.flatOptions || {};for (n in t) {
            void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
        }return r && w.extend(!0, e, r), e;
    }function Xt(e, t, n) {
        var r,
            i,
            o,
            a,
            s = e.contents,
            u = e.dataTypes;while ("*" === u[0]) {
            u.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
        }if (r) for (i in s) {
            if (s[i] && s[i].test(r)) {
                u.unshift(i);break;
            }
        }if (u[0] in n) o = u[0];else {
            for (i in n) {
                if (!u[0] || e.converters[i + " " + u[0]]) {
                    o = i;break;
                }a || (a = i);
            }o = o || a;
        }if (o) return o !== u[0] && u.unshift(o), n[o];
    }function Ut(e, t, n, r) {
        var i,
            o,
            a,
            s,
            u,
            l = {},
            c = e.dataTypes.slice();if (c[1]) for (a in e.converters) {
            l[a.toLowerCase()] = e.converters[a];
        }o = c.shift();while (o) {
            if (e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = o, o = c.shift()) if ("*" === o) o = u;else if ("*" !== u && u !== o) {
                if (!(a = l[u + " " + o] || l["* " + o])) for (i in l) {
                    if ((s = i.split(" "))[1] === o && (a = l[u + " " + s[0]] || l["* " + s[0]])) {
                        !0 === a ? a = l[i] : !0 !== l[i] && (o = s[0], c.unshift(s[1]));break;
                    }
                }if (!0 !== a) if (a && e["throws"]) t = a(t);else try {
                    t = a(t);
                } catch (e) {
                    return { state: "parsererror", error: a ? e : "No conversion from " + u + " to " + o };
                }
            }
        }return { state: "success", data: t };
    }w.extend({ active: 0, lastModified: {}, etag: {}, ajaxSettings: { url: Ct.href, type: "GET", isLocal: Pt.test(Ct.protocol), global: !0, processData: !0, async: !0, contentType: "application/x-www-form-urlencoded; charset=UTF-8", accepts: { "*": $t, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" }, contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ }, responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" }, converters: { "* text": String, "text html": !0, "text json": JSON.parse, "text xml": w.parseXML }, flatOptions: { url: !0, context: !0 } }, ajaxSetup: function ajaxSetup(e, t) {
            return t ? zt(zt(e, w.ajaxSettings), t) : zt(w.ajaxSettings, e);
        }, ajaxPrefilter: Ft(It), ajaxTransport: Ft(Wt), ajax: function ajax(t, n) {
            "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) && (n = t, t = void 0), n = n || {};var i,
                o,
                a,
                s,
                u,
                l,
                c,
                f,
                p,
                d,
                h = w.ajaxSetup({}, n),
                g = h.context || h,
                y = h.context && (g.nodeType || g.jquery) ? w(g) : w.event,
                v = w.Deferred(),
                m = w.Callbacks("once memory"),
                x = h.statusCode || {},
                b = {},
                T = {},
                C = "canceled",
                E = { readyState: 0, getResponseHeader: function getResponseHeader(e) {
                    var t;if (c) {
                        if (!s) {
                            s = {};while (t = Ot.exec(a)) {
                                s[t[1].toLowerCase()] = t[2];
                            }
                        }t = s[e.toLowerCase()];
                    }return null == t ? null : t;
                }, getAllResponseHeaders: function getAllResponseHeaders() {
                    return c ? a : null;
                }, setRequestHeader: function setRequestHeader(e, t) {
                    return null == c && (e = T[e.toLowerCase()] = T[e.toLowerCase()] || e, b[e] = t), this;
                }, overrideMimeType: function overrideMimeType(e) {
                    return null == c && (h.mimeType = e), this;
                }, statusCode: function statusCode(e) {
                    var t;if (e) if (c) E.always(e[E.status]);else for (t in e) {
                        x[t] = [x[t], e[t]];
                    }return this;
                }, abort: function abort(e) {
                    var t = e || C;return i && i.abort(t), k(0, t), this;
                } };if (v.promise(E), h.url = ((t || h.url || Ct.href) + "").replace(Rt, Ct.protocol + "//"), h.type = n.method || n.type || h.method || h.type, h.dataTypes = (h.dataType || "*").toLowerCase().match(M) || [""], null == h.crossDomain) {
                l = r.createElement("a");try {
                    l.href = h.url, l.href = l.href, h.crossDomain = Bt.protocol + "//" + Bt.host != l.protocol + "//" + l.host;
                } catch (e) {
                    h.crossDomain = !0;
                }
            }if (h.data && h.processData && "string" != typeof h.data && (h.data = w.param(h.data, h.traditional)), _t(It, h, n, E), c) return E;(f = w.event && h.global) && 0 == w.active++ && w.event.trigger("ajaxStart"), h.type = h.type.toUpperCase(), h.hasContent = !Mt.test(h.type), o = h.url.replace(Lt, ""), h.hasContent ? h.data && h.processData && 0 === (h.contentType || "").indexOf("application/x-www-form-urlencoded") && (h.data = h.data.replace(qt, "+")) : (d = h.url.slice(o.length), h.data && (h.processData || "string" == typeof h.data) && (o += (kt.test(o) ? "&" : "?") + h.data, delete h.data), !1 === h.cache && (o = o.replace(Ht, "$1"), d = (kt.test(o) ? "&" : "?") + "_=" + Et++ + d), h.url = o + d), h.ifModified && (w.lastModified[o] && E.setRequestHeader("If-Modified-Since", w.lastModified[o]), w.etag[o] && E.setRequestHeader("If-None-Match", w.etag[o])), (h.data && h.hasContent && !1 !== h.contentType || n.contentType) && E.setRequestHeader("Content-Type", h.contentType), E.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + $t + "; q=0.01" : "") : h.accepts["*"]);for (p in h.headers) {
                E.setRequestHeader(p, h.headers[p]);
            }if (h.beforeSend && (!1 === h.beforeSend.call(g, E, h) || c)) return E.abort();if (C = "abort", m.add(h.complete), E.done(h.success), E.fail(h.error), i = _t(Wt, h, n, E)) {
                if (E.readyState = 1, f && y.trigger("ajaxSend", [E, h]), c) return E;h.async && h.timeout > 0 && (u = e.setTimeout(function () {
                    E.abort("timeout");
                }, h.timeout));try {
                    c = !1, i.send(b, k);
                } catch (e) {
                    if (c) throw e;k(-1, e);
                }
            } else k(-1, "No Transport");function k(t, n, r, s) {
                var l,
                    p,
                    d,
                    b,
                    T,
                    C = n;c || (c = !0, u && e.clearTimeout(u), i = void 0, a = s || "", E.readyState = t > 0 ? 4 : 0, l = t >= 200 && t < 300 || 304 === t, r && (b = Xt(h, E, r)), b = Ut(h, b, E, l), l ? (h.ifModified && ((T = E.getResponseHeader("Last-Modified")) && (w.lastModified[o] = T), (T = E.getResponseHeader("etag")) && (w.etag[o] = T)), 204 === t || "HEAD" === h.type ? C = "nocontent" : 304 === t ? C = "notmodified" : (C = b.state, p = b.data, l = !(d = b.error))) : (d = C, !t && C || (C = "error", t < 0 && (t = 0))), E.status = t, E.statusText = (n || C) + "", l ? v.resolveWith(g, [p, C, E]) : v.rejectWith(g, [E, C, d]), E.statusCode(x), x = void 0, f && y.trigger(l ? "ajaxSuccess" : "ajaxError", [E, h, l ? p : d]), m.fireWith(g, [E, C]), f && (y.trigger("ajaxComplete", [E, h]), --w.active || w.event.trigger("ajaxStop")));
            }return E;
        }, getJSON: function getJSON(e, t, n) {
            return w.get(e, t, n, "json");
        }, getScript: function getScript(e, t) {
            return w.get(e, void 0, t, "script");
        } }), w.each(["get", "post"], function (e, t) {
        w[t] = function (e, n, r, i) {
            return g(n) && (i = i || r, r = n, n = void 0), w.ajax(w.extend({ url: e, type: t, dataType: i, data: n, success: r }, w.isPlainObject(e) && e));
        };
    }), w._evalUrl = function (e) {
        return w.ajax({ url: e, type: "GET", dataType: "script", cache: !0, async: !1, global: !1, "throws": !0 });
    }, w.fn.extend({ wrapAll: function wrapAll(e) {
            var t;return this[0] && (g(e) && (e = e.call(this[0])), t = w(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
                var e = this;while (e.firstElementChild) {
                    e = e.firstElementChild;
                }return e;
            }).append(this)), this;
        }, wrapInner: function wrapInner(e) {
            return g(e) ? this.each(function (t) {
                w(this).wrapInner(e.call(this, t));
            }) : this.each(function () {
                var t = w(this),
                    n = t.contents();n.length ? n.wrapAll(e) : t.append(e);
            });
        }, wrap: function wrap(e) {
            var t = g(e);return this.each(function (n) {
                w(this).wrapAll(t ? e.call(this, n) : e);
            });
        }, unwrap: function unwrap(e) {
            return this.parent(e).not("body").each(function () {
                w(this).replaceWith(this.childNodes);
            }), this;
        } }), w.expr.pseudos.hidden = function (e) {
        return !w.expr.pseudos.visible(e);
    }, w.expr.pseudos.visible = function (e) {
        return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
    }, w.ajaxSettings.xhr = function () {
        try {
            return new e.XMLHttpRequest();
        } catch (e) {}
    };var Vt = { 0: 200, 1223: 204 },
        Gt = w.ajaxSettings.xhr();h.cors = !!Gt && "withCredentials" in Gt, h.ajax = Gt = !!Gt, w.ajaxTransport(function (t) {
        var _n, r;if (h.cors || Gt && !t.crossDomain) return { send: function send(i, o) {
                var a,
                    s = t.xhr();if (s.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields) for (a in t.xhrFields) {
                    s[a] = t.xhrFields[a];
                }t.mimeType && s.overrideMimeType && s.overrideMimeType(t.mimeType), t.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");for (a in i) {
                    s.setRequestHeader(a, i[a]);
                }_n = function n(e) {
                    return function () {
                        _n && (_n = r = s.onload = s.onerror = s.onabort = s.ontimeout = s.onreadystatechange = null, "abort" === e ? s.abort() : "error" === e ? "number" != typeof s.status ? o(0, "error") : o(s.status, s.statusText) : o(Vt[s.status] || s.status, s.statusText, "text" !== (s.responseType || "text") || "string" != typeof s.responseText ? { binary: s.response } : { text: s.responseText }, s.getAllResponseHeaders()));
                    };
                }, s.onload = _n(), r = s.onerror = s.ontimeout = _n("error"), void 0 !== s.onabort ? s.onabort = r : s.onreadystatechange = function () {
                    4 === s.readyState && e.setTimeout(function () {
                        _n && r();
                    });
                }, _n = _n("abort");try {
                    s.send(t.hasContent && t.data || null);
                } catch (e) {
                    if (_n) throw e;
                }
            }, abort: function abort() {
                _n && _n();
            } };
    }), w.ajaxPrefilter(function (e) {
        e.crossDomain && (e.contents.script = !1);
    }), w.ajaxSetup({ accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" }, contents: { script: /\b(?:java|ecma)script\b/ }, converters: { "text script": function textScript(e) {
                return w.globalEval(e), e;
            } } }), w.ajaxPrefilter("script", function (e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET");
    }), w.ajaxTransport("script", function (e) {
        if (e.crossDomain) {
            var t, _n2;return { send: function send(i, o) {
                    t = w("<script>").prop({ charset: e.scriptCharset, src: e.url }).on("load error", _n2 = function n(e) {
                        t.remove(), _n2 = null, e && o("error" === e.type ? 404 : 200, e.type);
                    }), r.head.appendChild(t[0]);
                }, abort: function abort() {
                    _n2 && _n2();
                } };
        }
    });var Yt = [],
        Qt = /(=)\?(?=&|$)|\?\?/;w.ajaxSetup({ jsonp: "callback", jsonpCallback: function jsonpCallback() {
            var e = Yt.pop() || w.expando + "_" + Et++;return this[e] = !0, e;
        } }), w.ajaxPrefilter("json jsonp", function (t, n, r) {
        var i,
            o,
            a,
            s = !1 !== t.jsonp && (Qt.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && Qt.test(t.data) && "data");if (s || "jsonp" === t.dataTypes[0]) return i = t.jsonpCallback = g(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, s ? t[s] = t[s].replace(Qt, "$1" + i) : !1 !== t.jsonp && (t.url += (kt.test(t.url) ? "&" : "?") + t.jsonp + "=" + i), t.converters["script json"] = function () {
            return a || w.error(i + " was not called"), a[0];
        }, t.dataTypes[0] = "json", o = e[i], e[i] = function () {
            a = arguments;
        }, r.always(function () {
            void 0 === o ? w(e).removeProp(i) : e[i] = o, t[i] && (t.jsonpCallback = n.jsonpCallback, Yt.push(i)), a && g(o) && o(a[0]), a = o = void 0;
        }), "script";
    }), h.createHTMLDocument = function () {
        var e = r.implementation.createHTMLDocument("").body;return e.innerHTML = "<form></form><form></form>", 2 === e.childNodes.length;
    }(), w.parseHTML = function (e, t, n) {
        if ("string" != typeof e) return [];"boolean" == typeof t && (n = t, t = !1);var i, o, a;return t || (h.createHTMLDocument ? ((i = (t = r.implementation.createHTMLDocument("")).createElement("base")).href = r.location.href, t.head.appendChild(i)) : t = r), o = A.exec(e), a = !n && [], o ? [t.createElement(o[1])] : (o = xe([e], t, a), a && a.length && w(a).remove(), w.merge([], o.childNodes));
    }, w.fn.load = function (e, t, n) {
        var r,
            i,
            o,
            a = this,
            s = e.indexOf(" ");return s > -1 && (r = vt(e.slice(s)), e = e.slice(0, s)), g(t) ? (n = t, t = void 0) : t && "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) && (i = "POST"), a.length > 0 && w.ajax({ url: e, type: i || "GET", dataType: "html", data: t }).done(function (e) {
            o = arguments, a.html(r ? w("<div>").append(w.parseHTML(e)).find(r) : e);
        }).always(n && function (e, t) {
            a.each(function () {
                n.apply(this, o || [e.responseText, t, e]);
            });
        }), this;
    }, w.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
        w.fn[t] = function (e) {
            return this.on(t, e);
        };
    }), w.expr.pseudos.animated = function (e) {
        return w.grep(w.timers, function (t) {
            return e === t.elem;
        }).length;
    }, w.offset = { setOffset: function setOffset(e, t, n) {
            var r,
                i,
                o,
                a,
                s,
                u,
                l,
                c = w.css(e, "position"),
                f = w(e),
                p = {};"static" === c && (e.style.position = "relative"), s = f.offset(), o = w.css(e, "top"), u = w.css(e, "left"), (l = ("absolute" === c || "fixed" === c) && (o + u).indexOf("auto") > -1) ? (a = (r = f.position()).top, i = r.left) : (a = parseFloat(o) || 0, i = parseFloat(u) || 0), g(t) && (t = t.call(e, n, w.extend({}, s))), null != t.top && (p.top = t.top - s.top + a), null != t.left && (p.left = t.left - s.left + i), "using" in t ? t.using.call(e, p) : f.css(p);
        } }, w.fn.extend({ offset: function offset(e) {
            if (arguments.length) return void 0 === e ? this : this.each(function (t) {
                w.offset.setOffset(this, e, t);
            });var t,
                n,
                r = this[0];if (r) return r.getClientRects().length ? (t = r.getBoundingClientRect(), n = r.ownerDocument.defaultView, { top: t.top + n.pageYOffset, left: t.left + n.pageXOffset }) : { top: 0, left: 0 };
        }, position: function position() {
            if (this[0]) {
                var e,
                    t,
                    n,
                    r = this[0],
                    i = { top: 0, left: 0 };if ("fixed" === w.css(r, "position")) t = r.getBoundingClientRect();else {
                    t = this.offset(), n = r.ownerDocument, e = r.offsetParent || n.documentElement;while (e && (e === n.body || e === n.documentElement) && "static" === w.css(e, "position")) {
                        e = e.parentNode;
                    }e && e !== r && 1 === e.nodeType && ((i = w(e).offset()).top += w.css(e, "borderTopWidth", !0), i.left += w.css(e, "borderLeftWidth", !0));
                }return { top: t.top - i.top - w.css(r, "marginTop", !0), left: t.left - i.left - w.css(r, "marginLeft", !0) };
            }
        }, offsetParent: function offsetParent() {
            return this.map(function () {
                var e = this.offsetParent;while (e && "static" === w.css(e, "position")) {
                    e = e.offsetParent;
                }return e || be;
            });
        } }), w.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function (e, t) {
        var n = "pageYOffset" === t;w.fn[e] = function (r) {
            return z(this, function (e, r, i) {
                var o;if (y(e) ? o = e : 9 === e.nodeType && (o = e.defaultView), void 0 === i) return o ? o[t] : e[r];o ? o.scrollTo(n ? o.pageXOffset : i, n ? i : o.pageYOffset) : e[r] = i;
            }, e, r, arguments.length);
        };
    }), w.each(["top", "left"], function (e, t) {
        w.cssHooks[t] = _e(h.pixelPosition, function (e, n) {
            if (n) return n = Fe(e, t), We.test(n) ? w(e).position()[t] + "px" : n;
        });
    }), w.each({ Height: "height", Width: "width" }, function (e, t) {
        w.each({ padding: "inner" + e, content: t, "": "outer" + e }, function (n, r) {
            w.fn[r] = function (i, o) {
                var a = arguments.length && (n || "boolean" != typeof i),
                    s = n || (!0 === i || !0 === o ? "margin" : "border");return z(this, function (t, n, i) {
                    var o;return y(t) ? 0 === r.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (o = t.documentElement, Math.max(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e])) : void 0 === i ? w.css(t, n, s) : w.style(t, n, i, s);
                }, t, a ? i : void 0, a);
            };
        });
    }), w.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (e, t) {
        w.fn[t] = function (e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t);
        };
    }), w.fn.extend({ hover: function hover(e, t) {
            return this.mouseenter(e).mouseleave(t || e);
        } }), w.fn.extend({ bind: function bind(e, t, n) {
            return this.on(e, null, t, n);
        }, unbind: function unbind(e, t) {
            return this.off(e, null, t);
        }, delegate: function delegate(e, t, n, r) {
            return this.on(t, e, n, r);
        }, undelegate: function undelegate(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n);
        } }), w.proxy = function (e, t) {
        var n, r, i;if ("string" == typeof t && (n = e[t], t = e, e = n), g(e)) return r = o.call(arguments, 2), i = function i() {
            return e.apply(t || this, r.concat(o.call(arguments)));
        }, i.guid = e.guid = e.guid || w.guid++, i;
    }, w.holdReady = function (e) {
        e ? w.readyWait++ : w.ready(!0);
    }, w.isArray = Array.isArray, w.parseJSON = JSON.parse, w.nodeName = N, w.isFunction = g, w.isWindow = y, w.camelCase = G, w.type = x, w.now = Date.now, w.isNumeric = function (e) {
        var t = w.type(e);return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e));
    }, "function" == typeof define && define.amd && define("jquery", [], function () {
        return w;
    });var Jt = e.jQuery,
        Kt = e.$;return w.noConflict = function (t) {
        return e.$ === w && (e.$ = Kt), t && e.jQuery === w && (e.jQuery = Jt), w;
    }, t || (e.jQuery = e.$ = w), w;
});

/*!
 * fullPage 2.9.7
 * https://github.com/alvarotrigo/fullPage.js
 * @license MIT licensed
 *
 * Copyright (C) 2015 alvarotrigo.com - A project by Alvaro Trigo
 */
(function (global, factory) {
    'use strict';

    if (typeof define === 'function' && define.amd) {
        define(['jquery'], function ($) {
            return factory($, global, global.document, global.Math);
        });
    } else if ((typeof exports === "undefined" ? "undefined" : _typeof(exports)) === "object" && exports) {
        module.exports = factory(require('jquery'), global, global.document, global.Math);
    } else {
        factory(jQuery, global, global.document, global.Math);
    }
})(typeof window !== 'undefined' ? window : undefined, function ($, window, document, Math, undefined) {
    'use strict';

    // keeping central set of classnames and selectors

    var WRAPPER = 'fullpage-wrapper';
    var WRAPPER_SEL = '.' + WRAPPER;

    // slimscroll
    var SCROLLABLE = 'fp-scrollable';
    var SCROLLABLE_SEL = '.' + SCROLLABLE;

    // util
    var RESPONSIVE = 'fp-responsive';
    var NO_TRANSITION = 'fp-notransition';
    var DESTROYED = 'fp-destroyed';
    var ENABLED = 'fp-enabled';
    var VIEWING_PREFIX = 'fp-viewing';
    var ACTIVE = 'active';
    var ACTIVE_SEL = '.' + ACTIVE;
    var COMPLETELY = 'fp-completely';
    var COMPLETELY_SEL = '.' + COMPLETELY;

    // section
    var SECTION_DEFAULT_SEL = '.section';
    var SECTION = 'fp-section';
    var SECTION_SEL = '.' + SECTION;
    var SECTION_ACTIVE_SEL = SECTION_SEL + ACTIVE_SEL;
    var SECTION_FIRST_SEL = SECTION_SEL + ':first';
    var SECTION_LAST_SEL = SECTION_SEL + ':last';
    var TABLE_CELL = 'fp-tableCell';
    var TABLE_CELL_SEL = '.' + TABLE_CELL;
    var AUTO_HEIGHT = 'fp-auto-height';
    var AUTO_HEIGHT_SEL = '.fp-auto-height';
    var NORMAL_SCROLL = 'fp-normal-scroll';
    var NORMAL_SCROLL_SEL = '.fp-normal-scroll';

    // section nav
    var SECTION_NAV = 'fp-nav';
    var SECTION_NAV_SEL = '#' + SECTION_NAV;
    var SECTION_NAV_TOOLTIP = 'fp-tooltip';
    var SECTION_NAV_TOOLTIP_SEL = '.' + SECTION_NAV_TOOLTIP;
    var SHOW_ACTIVE_TOOLTIP = 'fp-show-active';

    // slide
    var SLIDE_DEFAULT_SEL = '.slide';
    var SLIDE = 'fp-slide';
    var SLIDE_SEL = '.' + SLIDE;
    var SLIDE_ACTIVE_SEL = SLIDE_SEL + ACTIVE_SEL;
    var SLIDES_WRAPPER = 'fp-slides';
    var SLIDES_WRAPPER_SEL = '.' + SLIDES_WRAPPER;
    var SLIDES_CONTAINER = 'fp-slidesContainer';
    var SLIDES_CONTAINER_SEL = '.' + SLIDES_CONTAINER;
    var TABLE = 'fp-table';

    // slide nav
    var SLIDES_NAV = 'fp-slidesNav';
    var SLIDES_NAV_SEL = '.' + SLIDES_NAV;
    var SLIDES_NAV_LINK_SEL = SLIDES_NAV_SEL + ' a';
    var SLIDES_ARROW = 'fp-controlArrow';
    var SLIDES_ARROW_SEL = '.' + SLIDES_ARROW;
    var SLIDES_PREV = 'fp-prev';
    var SLIDES_PREV_SEL = '.' + SLIDES_PREV;
    var SLIDES_ARROW_PREV = SLIDES_ARROW + ' ' + SLIDES_PREV;
    var SLIDES_ARROW_PREV_SEL = SLIDES_ARROW_SEL + SLIDES_PREV_SEL;
    var SLIDES_NEXT = 'fp-next';
    var SLIDES_NEXT_SEL = '.' + SLIDES_NEXT;
    var SLIDES_ARROW_NEXT = SLIDES_ARROW + ' ' + SLIDES_NEXT;
    var SLIDES_ARROW_NEXT_SEL = SLIDES_ARROW_SEL + SLIDES_NEXT_SEL;

    var $window = $(window);
    var $document = $(document);

    $.fn.fullpage = function (options) {
        //only once my friend!
        if ($('html').hasClass(ENABLED)) {
            displayWarnings();return;
        }

        // common jQuery objects
        var $htmlBody = $('html, body');
        var $body = $('body');

        var FP = $.fn.fullpage;

        // Creating some defaults, extending them with any options that were provided
        options = $.extend({
            //navigation
            menu: false,
            anchors: [],
            lockAnchors: false,
            navigation: false,
            navigationPosition: 'right',
            navigationTooltips: [],
            showActiveTooltip: false,
            slidesNavigation: false,
            slidesNavPosition: 'bottom',
            scrollBar: false,
            hybrid: false,

            //scrolling
            css3: true,
            scrollingSpeed: 700,
            autoScrolling: true,
            fitToSection: true,
            fitToSectionDelay: 1000,
            easing: 'easeInOutCubic',
            easingcss3: 'ease',
            loopBottom: false,
            loopTop: false,
            loopHorizontal: true,
            continuousVertical: false,
            continuousHorizontal: false,
            scrollHorizontally: false,
            interlockedSlides: false,
            dragAndMove: false,
            offsetSections: false,
            resetSliders: false,
            fadingEffect: false,
            normalScrollElements: null,
            scrollOverflow: false,
            scrollOverflowReset: false,
            scrollOverflowHandler: $.fn.fp_scrolloverflow ? $.fn.fp_scrolloverflow.iscrollHandler : null,
            scrollOverflowOptions: null,
            touchSensitivity: 5,
            normalScrollElementTouchThreshold: 5,
            bigSectionsDestination: null,

            //Accessibility
            keyboardScrolling: true,
            animateAnchor: true,
            recordHistory: true,

            //design
            controlArrows: true,
            controlArrowColor: '#fff',
            verticalCentered: true,
            sectionsColor: [],
            paddingTop: 0,
            paddingBottom: 0,
            fixedElements: null,
            responsive: 0, //backwards compabitility with responsiveWiddth
            responsiveWidth: 0,
            responsiveHeight: 0,
            responsiveSlides: false,
            parallax: false,
            parallaxOptions: {
                type: 'reveal',
                percentage: 62,
                property: 'translate'
            },

            //Custom selectors
            sectionSelector: SECTION_DEFAULT_SEL,
            slideSelector: SLIDE_DEFAULT_SEL,

            //events
            afterLoad: null,
            onLeave: null,
            afterRender: null,
            afterResize: null,
            afterReBuild: null,
            afterSlideLoad: null,
            onSlideLeave: null,
            afterResponsive: null,

            lazyLoading: true
        }, options);

        //flag to avoid very fast sliding for landscape sliders
        var slideMoving = false;

        var isTouchDevice = navigator.userAgent.match(/(iPhone|iPod|iPad|Android|playbook|silk|BlackBerry|BB10|Windows Phone|Tizen|Bada|webOS|IEMobile|Opera Mini)/);
        var isTouch = 'ontouchstart' in window || navigator.msMaxTouchPoints > 0 || navigator.maxTouchPoints;
        var container = $(this);
        var windowsHeight = $window.height();
        var isResizing = false;
        var isWindowFocused = true;
        var lastScrolledDestiny;
        var lastScrolledSlide;
        var canScroll = true;
        var scrollings = [];
        var controlPressed;
        var startingSection;
        var isScrollAllowed = {};
        isScrollAllowed.m = { 'up': true, 'down': true, 'left': true, 'right': true };
        isScrollAllowed.k = $.extend(true, {}, isScrollAllowed.m);
        var MSPointer = getMSPointer();
        var events = {
            touchmove: 'ontouchmove' in window ? 'touchmove' : MSPointer.move,
            touchstart: 'ontouchstart' in window ? 'touchstart' : MSPointer.down
        };
        var scrollBarHandler;

        // taken from https://github.com/udacity/ud891/blob/gh-pages/lesson2-focus/07-modals-and-keyboard-traps/solution/modal.js
        var focusableElementsString = 'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex="0"], [contenteditable]';

        //timeouts
        var resizeId;
        var afterSectionLoadsId;
        var afterSlideLoadsId;
        var scrollId;
        var scrollId2;
        var keydownId;
        var originals = $.extend(true, {}, options); //deep copy

        displayWarnings();

        //easeInOutCubic animation included in the plugin
        $.extend($.easing, { easeInOutCubic: function easeInOutCubic(x, t, b, c, d) {
                if ((t /= d / 2) < 1) return c / 2 * t * t * t + b;return c / 2 * ((t -= 2) * t * t + 2) + b;
            } });

        /**
        * Sets the autoScroll option.
        * It changes the scroll bar visibility and the history of the site as a result.
        */
        function setAutoScrolling(value, type) {
            //removing the transformation
            if (!value) {
                silentScroll(0);
            }

            setVariableState('autoScrolling', value, type);

            var element = $(SECTION_ACTIVE_SEL);

            if (options.autoScrolling && !options.scrollBar) {
                $htmlBody.css({
                    'overflow': 'hidden',
                    'height': '100%'
                });

                setRecordHistory(originals.recordHistory, 'internal');

                //for IE touch devices
                container.css({
                    '-ms-touch-action': 'none',
                    'touch-action': 'none'
                });

                if (element.length) {
                    //moving the container up
                    silentScroll(element.position().top);
                }
            } else {
                $htmlBody.css({
                    'overflow': 'visible',
                    'height': 'initial'
                });

                setRecordHistory(false, 'internal');

                //for IE touch devices
                container.css({
                    '-ms-touch-action': '',
                    'touch-action': ''
                });

                //scrolling the page to the section with no animation
                if (element.length) {
                    $htmlBody.scrollTop(element.position().top);
                }
            }
        }

        /**
        * Defines wheter to record the history for each hash change in the URL.
        */
        function setRecordHistory(value, type) {
            setVariableState('recordHistory', value, type);
        }

        /**
        * Defines the scrolling speed
        */
        function setScrollingSpeed(value, type) {
            setVariableState('scrollingSpeed', value, type);
        }

        /**
        * Sets fitToSection
        */
        function setFitToSection(value, type) {
            setVariableState('fitToSection', value, type);
        }

        /**
        * Sets lockAnchors
        */
        function setLockAnchors(value) {
            options.lockAnchors = value;
        }

        /**
        * Adds or remove the possibility of scrolling through sections by using the mouse wheel or the trackpad.
        */
        function setMouseWheelScrolling(value) {
            if (value) {
                addMouseWheelHandler();
                addMiddleWheelHandler();
            } else {
                removeMouseWheelHandler();
                removeMiddleWheelHandler();
            }
        }

        /**
        * Adds or remove the possibility of scrolling through sections by using the mouse wheel/trackpad or touch gestures.
        * Optionally a second parameter can be used to specify the direction for which the action will be applied.
        *
        * @param directions string containing the direction or directions separated by comma.
        */
        function setAllowScrolling(value, directions) {
            if (typeof directions !== 'undefined') {
                directions = directions.replace(/ /g, '').split(',');

                $.each(directions, function (index, direction) {
                    setIsScrollAllowed(value, direction, 'm');
                });
            } else {
                setIsScrollAllowed(value, 'all', 'm');

                if (value) {
                    setMouseWheelScrolling(true);
                    addTouchHandler();
                } else {
                    setMouseWheelScrolling(false);
                    removeTouchHandler();
                }
            }
        }

        /**
        * Adds or remove the possibility of scrolling through sections by using the keyboard arrow keys
        */
        function setKeyboardScrolling(value, directions) {
            if (typeof directions !== 'undefined') {
                directions = directions.replace(/ /g, '').split(',');

                $.each(directions, function (index, direction) {
                    setIsScrollAllowed(value, direction, 'k');
                });
            } else {
                setIsScrollAllowed(value, 'all', 'k');
                options.keyboardScrolling = value;
            }
        }

        /**
        * Moves the page up one section.
        */
        function moveSectionUp() {
            var prev = $(SECTION_ACTIVE_SEL).prev(SECTION_SEL);

            //looping to the bottom if there's no more sections above
            if (!prev.length && (options.loopTop || options.continuousVertical)) {
                prev = $(SECTION_SEL).last();
            }

            if (prev.length) {
                scrollPage(prev, null, true);
            }
        }

        /**
        * Moves the page down one section.
        */
        function moveSectionDown() {
            var next = $(SECTION_ACTIVE_SEL).next(SECTION_SEL);

            //looping to the top if there's no more sections below
            if (!next.length && (options.loopBottom || options.continuousVertical)) {
                next = $(SECTION_SEL).first();
            }

            if (next.length) {
                scrollPage(next, null, false);
            }
        }

        /**
        * Moves the page to the given section and slide with no animation.
        * Anchors or index positions can be used as params.
        */
        function silentMoveTo(sectionAnchor, slideAnchor) {
            setScrollingSpeed(0, 'internal');
            moveTo(sectionAnchor, slideAnchor);
            setScrollingSpeed(originals.scrollingSpeed, 'internal');
        }

        /**
        * Moves the page to the given section and slide.
        * Anchors or index positions can be used as params.
        */
        function moveTo(sectionAnchor, slideAnchor) {
            var destiny = getSectionByAnchor(sectionAnchor);

            if (typeof slideAnchor !== 'undefined') {
                scrollPageAndSlide(sectionAnchor, slideAnchor);
            } else if (destiny.length > 0) {
                scrollPage(destiny);
            }
        }

        /**
        * Slides right the slider of the active section.
        * Optional `section` param.
        */
        function moveSlideRight(section) {
            moveSlide('right', section);
        }

        /**
        * Slides left the slider of the active section.
        * Optional `section` param.
        */
        function moveSlideLeft(section) {
            moveSlide('left', section);
        }

        /**
         * When resizing is finished, we adjust the slides sizes and positions
         */
        function reBuild(resizing) {
            if (container.hasClass(DESTROYED)) {
                return;
            } //nothing to do if the plugin was destroyed

            isResizing = true;

            windowsHeight = $window.height(); //updating global var

            $(SECTION_SEL).each(function () {
                var slidesWrap = $(this).find(SLIDES_WRAPPER_SEL);
                var slides = $(this).find(SLIDE_SEL);

                //adjusting the height of the table-cell for IE and Firefox
                if (options.verticalCentered) {
                    $(this).find(TABLE_CELL_SEL).css('height', getTableHeight($(this)) + 'px');
                }

                $(this).css('height', windowsHeight + 'px');

                //adjusting the position fo the FULL WIDTH slides...
                if (slides.length > 1) {
                    landscapeScroll(slidesWrap, slidesWrap.find(SLIDE_ACTIVE_SEL));
                }
            });

            if (options.scrollOverflow) {
                scrollBarHandler.createScrollBarForAll();
            }

            var activeSection = $(SECTION_ACTIVE_SEL);
            var sectionIndex = activeSection.index(SECTION_SEL);

            //isn't it the first section?
            if (sectionIndex) {
                //adjusting the position for the current section
                silentMoveTo(sectionIndex + 1);
            }

            isResizing = false;
            $.isFunction(options.afterResize) && resizing && options.afterResize.call(container);
            $.isFunction(options.afterReBuild) && !resizing && options.afterReBuild.call(container);
        }

        /**
        * Turns fullPage.js to normal scrolling mode when the viewport `width` or `height`
        * are smaller than the set limit values.
        */
        function setResponsive(active) {
            var isResponsive = $body.hasClass(RESPONSIVE);

            if (active) {
                if (!isResponsive) {
                    setAutoScrolling(false, 'internal');
                    setFitToSection(false, 'internal');
                    $(SECTION_NAV_SEL).hide();
                    $body.addClass(RESPONSIVE);
                    $.isFunction(options.afterResponsive) && options.afterResponsive.call(container, active);
                }
            } else if (isResponsive) {
                setAutoScrolling(originals.autoScrolling, 'internal');
                setFitToSection(originals.autoScrolling, 'internal');
                $(SECTION_NAV_SEL).show();
                $body.removeClass(RESPONSIVE);
                $.isFunction(options.afterResponsive) && options.afterResponsive.call(container, active);
            }
        }

        if ($(this).length) {
            //public functions
            FP.version = '2.9.6';
            FP.setAutoScrolling = setAutoScrolling;
            FP.setRecordHistory = setRecordHistory;
            FP.setScrollingSpeed = setScrollingSpeed;
            FP.setFitToSection = setFitToSection;
            FP.setLockAnchors = setLockAnchors;
            FP.setMouseWheelScrolling = setMouseWheelScrolling;
            FP.setAllowScrolling = setAllowScrolling;
            FP.setKeyboardScrolling = setKeyboardScrolling;
            FP.moveSectionUp = moveSectionUp;
            FP.moveSectionDown = moveSectionDown;
            FP.silentMoveTo = silentMoveTo;
            FP.moveTo = moveTo;
            FP.moveSlideRight = moveSlideRight;
            FP.moveSlideLeft = moveSlideLeft;
            FP.fitToSection = fitToSection;
            FP.reBuild = reBuild;
            FP.setResponsive = setResponsive;
            FP.destroy = destroy;

            //functions we want to share across files but which are not
            //mean to be used on their own by developers
            FP.shared = {
                afterRenderActions: afterRenderActions
            };

            init();

            bindEvents();
        }

        function init() {
            //if css3 is not supported, it will use jQuery animations
            if (options.css3) {
                options.css3 = support3d();
            }

            options.scrollBar = options.scrollBar || options.hybrid;

            setOptionsFromDOM();
            prepareDom();
            setAllowScrolling(true);
            setAutoScrolling(options.autoScrolling, 'internal');
            responsive();

            //setting the class for the body element
            setBodyClass();

            if (document.readyState === 'complete') {
                scrollToAnchor();
            }
            $window.on('load', scrollToAnchor);
        }

        function bindEvents() {
            $window
            //when scrolling...
            .on('scroll', scrollHandler)

            //detecting any change on the URL to scroll to the given anchor link
            //(a way to detect back history button as we play with the hashes on the URL)
            .on('hashchange', hashChangeHandler)

            //when opening a new tab (ctrl + t), `control` won't be pressed when coming back.
            .blur(blurHandler)

            //when resizing the site, we adjust the heights of the sections, slimScroll...
            .resize(resizeHandler);

            $document
            //Sliding with arrow keys, both, vertical and horizontal
            .keydown(keydownHandler)

            //to prevent scrolling while zooming
            .keyup(keyUpHandler)

            //Scrolls to the section when clicking the navigation bullet
            .on('click touchstart', SECTION_NAV_SEL + ' a', sectionBulletHandler)

            //Scrolls the slider to the given slide destination for the given section
            .on('click touchstart', SLIDES_NAV_LINK_SEL, slideBulletHandler).on('click', SECTION_NAV_TOOLTIP_SEL, tooltipTextHandler);

            //Scrolling horizontally when clicking on the slider controls.
            $(SECTION_SEL).on('click touchstart', SLIDES_ARROW_SEL, slideArrowHandler);

            /**
            * Applying normalScroll elements.
            * Ignoring the scrolls over the specified selectors.
            */
            if (options.normalScrollElements) {
                $document.on('mouseenter touchstart', options.normalScrollElements, function () {
                    setAllowScrolling(false);
                });

                $document.on('mouseleave touchend', options.normalScrollElements, function () {
                    setAllowScrolling(true);
                });
            }
        }

        /**
        * Setting options from DOM elements if they are not provided.
        */
        function setOptionsFromDOM() {
            var sections = container.find(options.sectionSelector);

            //no anchors option? Checking for them in the DOM attributes
            if (!options.anchors.length) {
                options.anchors = sections.filter('[data-anchor]').map(function () {
                    return $(this).data('anchor').toString();
                }).get();
            }

            //no tooltips option? Checking for them in the DOM attributes
            if (!options.navigationTooltips.length) {
                options.navigationTooltips = sections.filter('[data-tooltip]').map(function () {
                    return $(this).data('tooltip').toString();
                }).get();
            }
        }

        /**
        * Works over the DOM structure to set it up for the current fullpage options.
        */
        function prepareDom() {
            container.css({
                'height': '100%',
                'position': 'relative'
            });

            //adding a class to recognize the container internally in the code
            container.addClass(WRAPPER);
            $('html').addClass(ENABLED);

            //due to https://github.com/alvarotrigo/fullPage.js/issues/1502
            windowsHeight = $window.height();

            container.removeClass(DESTROYED); //in case it was destroyed before initializing it again

            addInternalSelectors();

            //styling the sections / slides / menu
            $(SECTION_SEL).each(function (index) {
                var section = $(this);
                var slides = section.find(SLIDE_SEL);
                var numSlides = slides.length;

                //caching the original styles to add them back on destroy('all')
                section.data('fp-styles', section.attr('style'));

                styleSection(section, index);
                styleMenu(section, index);

                // if there's any slide
                if (numSlides > 0) {
                    styleSlides(section, slides, numSlides);
                } else {
                    if (options.verticalCentered) {
                        addTableClass(section);
                    }
                }
            });

            //fixed elements need to be moved out of the plugin container due to problems with CSS3.
            if (options.fixedElements && options.css3) {
                $(options.fixedElements).appendTo($body);
            }

            //vertical centered of the navigation + active bullet
            if (options.navigation) {
                addVerticalNavigation();
            }

            enableYoutubeAPI();

            if (options.scrollOverflow) {
                scrollBarHandler = options.scrollOverflowHandler.init(options);
            } else {
                afterRenderActions();
            }
        }

        /**
        * Styles the horizontal slides for a section.
        */
        function styleSlides(section, slides, numSlides) {
            var sliderWidth = numSlides * 100;
            var slideWidth = 100 / numSlides;

            slides.wrapAll('<div class="' + SLIDES_CONTAINER + '" />');
            slides.parent().wrap('<div class="' + SLIDES_WRAPPER + '" />');

            section.find(SLIDES_CONTAINER_SEL).css('width', sliderWidth + '%');

            if (numSlides > 1) {
                if (options.controlArrows) {
                    createSlideArrows(section);
                }

                if (options.slidesNavigation) {
                    addSlidesNavigation(section, numSlides);
                }
            }

            slides.each(function (index) {
                $(this).css('width', slideWidth + '%');

                if (options.verticalCentered) {
                    addTableClass($(this));
                }
            });

            var startingSlide = section.find(SLIDE_ACTIVE_SEL);

            //if the slide won't be an starting point, the default will be the first one
            //the active section isn't the first one? Is not the first slide of the first section? Then we load that section/slide by default.
            if (startingSlide.length && ($(SECTION_ACTIVE_SEL).index(SECTION_SEL) !== 0 || $(SECTION_ACTIVE_SEL).index(SECTION_SEL) === 0 && startingSlide.index() !== 0)) {
                silentLandscapeScroll(startingSlide, 'internal');
            } else {
                slides.eq(0).addClass(ACTIVE);
            }
        }

        /**
        * Styling vertical sections
        */
        function styleSection(section, index) {
            //if no active section is defined, the 1st one will be the default one
            if (!index && $(SECTION_ACTIVE_SEL).length === 0) {
                section.addClass(ACTIVE);
            }
            startingSection = $(SECTION_ACTIVE_SEL);

            section.css('height', windowsHeight + 'px');

            if (options.paddingTop) {
                section.css('padding-top', options.paddingTop);
            }

            if (options.paddingBottom) {
                section.css('padding-bottom', options.paddingBottom);
            }

            if (typeof options.sectionsColor[index] !== 'undefined') {
                section.css('background-color', options.sectionsColor[index]);
            }

            if (typeof options.anchors[index] !== 'undefined') {
                section.attr('data-anchor', options.anchors[index]);
            }
        }

        /**
        * Sets the data-anchor attributes to the menu elements and activates the current one.
        */
        function styleMenu(section, index) {
            if (typeof options.anchors[index] !== 'undefined') {
                //activating the menu / nav element on load
                if (section.hasClass(ACTIVE)) {
                    activateMenuAndNav(options.anchors[index], index);
                }
            }

            //moving the menu outside the main container if it is inside (avoid problems with fixed positions when using CSS3 tranforms)
            if (options.menu && options.css3 && $(options.menu).closest(WRAPPER_SEL).length) {
                $(options.menu).appendTo($body);
            }
        }

        /**
        * Adds internal classes to be able to provide customizable selectors
        * keeping the link with the style sheet.
        */
        function addInternalSelectors() {
            container.find(options.sectionSelector).addClass(SECTION);
            container.find(options.slideSelector).addClass(SLIDE);
        }

        /**
        * Creates the control arrows for the given section
        */
        function createSlideArrows(section) {
            section.find(SLIDES_WRAPPER_SEL).after('<div class="' + SLIDES_ARROW_PREV + '"></div><div class="' + SLIDES_ARROW_NEXT + '"></div>');

            if (options.controlArrowColor != '#fff') {
                section.find(SLIDES_ARROW_NEXT_SEL).css('border-color', 'transparent transparent transparent ' + options.controlArrowColor);
                section.find(SLIDES_ARROW_PREV_SEL).css('border-color', 'transparent ' + options.controlArrowColor + ' transparent transparent');
            }

            if (!options.loopHorizontal) {
                section.find(SLIDES_ARROW_PREV_SEL).hide();
            }
        }

        /**
        * Creates a vertical navigation bar.
        */
        function addVerticalNavigation() {
            $body.append('<div id="' + SECTION_NAV + '"><ul></ul></div>');
            var nav = $(SECTION_NAV_SEL);

            nav.addClass(function () {
                return options.showActiveTooltip ? SHOW_ACTIVE_TOOLTIP + ' ' + options.navigationPosition : options.navigationPosition;
            });

            for (var i = 0; i < $(SECTION_SEL).length; i++) {
                var link = '';
                if (options.anchors.length) {
                    link = options.anchors[i];
                }

                var li = '<li><a href="#' + link + '"><span></span></a>';

                // Only add tooltip if needed (defined by user)
                var tooltip = options.navigationTooltips[i];

                if (typeof tooltip !== 'undefined' && tooltip !== '') {
                    li += '<div class="' + SECTION_NAV_TOOLTIP + ' ' + options.navigationPosition + '">' + tooltip + '</div>';
                }

                li += '</li>';

                nav.find('ul').append(li);
            }

            //centering it vertically
            $(SECTION_NAV_SEL).css('margin-top', '-' + $(SECTION_NAV_SEL).height() / 2 + 'px');

            //activating the current active section
            $(SECTION_NAV_SEL).find('li').eq($(SECTION_ACTIVE_SEL).index(SECTION_SEL)).find('a').addClass(ACTIVE);
        }

        /*
        * Enables the Youtube videos API so we can control their flow if necessary.
        */
        function enableYoutubeAPI() {
            container.find('iframe[src*="youtube.com/embed/"]').each(function () {
                addURLParam($(this), 'enablejsapi=1');
            });
        }

        /**
        * Adds a new parameter and its value to the `src` of a given element
        */
        function addURLParam(element, newParam) {
            var originalSrc = element.attr('src');
            element.attr('src', originalSrc + getUrlParamSign(originalSrc) + newParam);
        }

        /*
        * Returns the prefix sign to use for a new parameter in an existen URL.
        *
        * @return {String}  ? | &
        */
        function getUrlParamSign(url) {
            return !/\?/.test(url) ? '?' : '&';
        }

        /**
        * Actions and callbacks to fire afterRender
        */
        function afterRenderActions() {
            var section = $(SECTION_ACTIVE_SEL);

            section.addClass(COMPLETELY);

            lazyLoad(section);
            playMedia(section);

            if (options.scrollOverflow) {
                options.scrollOverflowHandler.afterLoad();
            }

            if (isDestinyTheStartingSection()) {
                $.isFunction(options.afterLoad) && options.afterLoad.call(section, section.data('anchor'), section.index(SECTION_SEL) + 1);
            }

            $.isFunction(options.afterRender) && options.afterRender.call(container);
        }

        /**
        * Determines if the URL anchor destiny is the starting section (the one using 'active' class before initialization)
        */
        function isDestinyTheStartingSection() {
            var destinationSection = getSectionByAnchor(getAnchorsURL().section);
            return !destinationSection || destinationSection.length && destinationSection.index() === startingSection.index();
        }

        var isScrolling = false;
        var lastScroll = 0;

        //when scrolling...
        function scrollHandler() {
            var currentSection;

            if (!options.autoScrolling || options.scrollBar) {
                var currentScroll = $window.scrollTop();
                var scrollDirection = getScrollDirection(currentScroll);
                var visibleSectionIndex = 0;
                var screen_mid = currentScroll + $window.height() / 2.0;
                var isAtBottom = $body.height() - $window.height() === currentScroll;
                var sections = document.querySelectorAll(SECTION_SEL);

                //when using `auto-height` for a small last section it won't be centered in the viewport
                if (isAtBottom) {
                    visibleSectionIndex = sections.length - 1;
                }
                //is at top? when using `auto-height` for a small first section it won't be centered in the viewport
                else if (!currentScroll) {
                        visibleSectionIndex = 0;
                    }

                    //taking the section which is showing more content in the viewport
                    else {
                            for (var i = 0; i < sections.length; ++i) {
                                var section = sections[i];

                                // Pick the the last section which passes the middle line of the screen.
                                if (section.offsetTop <= screen_mid) {
                                    visibleSectionIndex = i;
                                }
                            }
                        }

                if (isCompletelyInViewPort(scrollDirection)) {
                    if (!$(SECTION_ACTIVE_SEL).hasClass(COMPLETELY)) {
                        $(SECTION_ACTIVE_SEL).addClass(COMPLETELY).siblings().removeClass(COMPLETELY);
                    }
                }

                //geting the last one, the current one on the screen
                currentSection = $(sections).eq(visibleSectionIndex);

                //setting the visible section as active when manually scrolling
                //executing only once the first time we reach the section

                if (!currentSection.hasClass(ACTIVE)) {
                    isScrolling = true;
                    var leavingSection = $(SECTION_ACTIVE_SEL);
                    var leavingSectionIndex = leavingSection.index(SECTION_SEL) + 1;
                    var yMovement = getYmovement(currentSection);
                    var anchorLink = currentSection.data('anchor');
                    var sectionIndex = currentSection.index(SECTION_SEL) + 1;
                    var activeSlide = currentSection.find(SLIDE_ACTIVE_SEL);
                    var slideIndex;
                    var slideAnchorLink;

                    if (activeSlide.length) {
                        slideAnchorLink = activeSlide.data('anchor');
                        slideIndex = activeSlide.index();
                    }

                    if (canScroll) {
                        currentSection.addClass(ACTIVE).siblings().removeClass(ACTIVE);

                        $.isFunction(options.onLeave) && options.onLeave.call(leavingSection, leavingSectionIndex, sectionIndex, yMovement);
                        $.isFunction(options.afterLoad) && options.afterLoad.call(currentSection, anchorLink, sectionIndex);

                        stopMedia(leavingSection);
                        lazyLoad(currentSection);
                        playMedia(currentSection);

                        activateMenuAndNav(anchorLink, sectionIndex - 1);

                        if (options.anchors.length) {
                            //needed to enter in hashChange event when using the menu with anchor links
                            lastScrolledDestiny = anchorLink;
                        }
                        setState(slideIndex, slideAnchorLink, anchorLink, sectionIndex);
                    }

                    //small timeout in order to avoid entering in hashChange event when scrolling is not finished yet
                    clearTimeout(scrollId);
                    scrollId = setTimeout(function () {
                        isScrolling = false;
                    }, 100);
                }

                if (options.fitToSection) {
                    //for the auto adjust of the viewport to fit a whole section
                    clearTimeout(scrollId2);

                    scrollId2 = setTimeout(function () {
                        //checking it again in case it changed during the delay
                        if (options.fitToSection &&

                        //is the destination element bigger than the viewport?
                        $(SECTION_ACTIVE_SEL).outerHeight() <= windowsHeight) {
                            fitToSection();
                        }
                    }, options.fitToSectionDelay);
                }
            }
        }

        /**
        * Fits the site to the nearest active section
        */
        function fitToSection() {
            //checking fitToSection again in case it was set to false before the timeout delay
            if (canScroll) {
                //allows to scroll to an active section and
                //if the section is already active, we prevent firing callbacks
                isResizing = true;

                scrollPage($(SECTION_ACTIVE_SEL));
                isResizing = false;
            }
        }

        /**
        * Determines whether the active section has seen in its whole or not.
        */
        function isCompletelyInViewPort(movement) {
            var top = $(SECTION_ACTIVE_SEL).position().top;
            var bottom = top + $window.height();

            if (movement == 'up') {
                return bottom >= $window.scrollTop() + $window.height();
            }
            return top <= $window.scrollTop();
        }

        /**
        * Gets the directon of the the scrolling fired by the scroll event.
        */
        function getScrollDirection(currentScroll) {
            var direction = currentScroll > lastScroll ? 'down' : 'up';

            lastScroll = currentScroll;

            //needed for auto-height sections to determine if we want to scroll to the top or bottom of the destination
            previousDestTop = currentScroll;

            return direction;
        }

        /**
        * Determines the way of scrolling up or down:
        * by 'automatically' scrolling a section or by using the default and normal scrolling.
        */
        function scrolling(type) {
            if (!isScrollAllowed.m[type]) {
                return;
            }

            var scrollSection = type === 'down' ? moveSectionDown : moveSectionUp;

            if (options.scrollOverflow) {
                var scrollable = options.scrollOverflowHandler.scrollable($(SECTION_ACTIVE_SEL));
                var check = type === 'down' ? 'bottom' : 'top';

                if (scrollable.length > 0) {
                    //is the scrollbar at the start/end of the scroll?
                    if (options.scrollOverflowHandler.isScrolled(check, scrollable)) {
                        scrollSection();
                    } else {
                        return true;
                    }
                } else {
                    // moved up/down
                    scrollSection();
                }
            } else {
                // moved up/down
                scrollSection();
            }
        }

        /*
        * Preventing bouncing in iOS #2285
        */
        function preventBouncing(event) {
            var e = event.originalEvent;
            if (options.autoScrolling && isReallyTouch(e)) {
                //preventing the easing on iOS devices
                event.preventDefault();
            }
        }

        var touchStartY = 0;
        var touchStartX = 0;
        var touchEndY = 0;
        var touchEndX = 0;

        /* Detecting touch events
          * As we are changing the top property of the page on scrolling, we can not use the traditional way to detect it.
        * This way, the touchstart and the touch moves shows an small difference between them which is the
        * used one to determine the direction.
        */
        function touchMoveHandler(event) {
            var e = event.originalEvent;
            var activeSection = $(e.target).closest(SECTION_SEL);

            // additional: if one of the normalScrollElements isn't within options.normalScrollElementTouchThreshold hops up the DOM chain
            if (isReallyTouch(e)) {

                if (options.autoScrolling) {
                    //preventing the easing on iOS devices
                    event.preventDefault();
                }

                var touchEvents = getEventsPage(e);

                touchEndY = touchEvents.y;
                touchEndX = touchEvents.x;

                //if movement in the X axys is greater than in the Y and the currect section has slides...
                if (activeSection.find(SLIDES_WRAPPER_SEL).length && Math.abs(touchStartX - touchEndX) > Math.abs(touchStartY - touchEndY)) {

                    //is the movement greater than the minimum resistance to scroll?
                    if (!slideMoving && Math.abs(touchStartX - touchEndX) > $window.outerWidth() / 100 * options.touchSensitivity) {
                        if (touchStartX > touchEndX) {
                            if (isScrollAllowed.m.right) {
                                moveSlideRight(activeSection); //next
                            }
                        } else {
                            if (isScrollAllowed.m.left) {
                                moveSlideLeft(activeSection); //prev
                            }
                        }
                    }
                }

                //vertical scrolling (only when autoScrolling is enabled)
                else if (options.autoScrolling && canScroll) {

                        //is the movement greater than the minimum resistance to scroll?
                        if (Math.abs(touchStartY - touchEndY) > $window.height() / 100 * options.touchSensitivity) {
                            if (touchStartY > touchEndY) {
                                scrolling('down');
                            } else if (touchEndY > touchStartY) {
                                scrolling('up');
                            }
                        }
                    }
            }
        }

        /**
        * As IE >= 10 fires both touch and mouse events when using a mouse in a touchscreen
        * this way we make sure that is really a touch event what IE is detecting.
        */
        function isReallyTouch(e) {
            //if is not IE   ||  IE is detecting `touch` or `pen`
            return typeof e.pointerType === 'undefined' || e.pointerType != 'mouse';
        }

        /**
        * Handler for the touch start event.
        */
        function touchStartHandler(event) {
            var e = event.originalEvent;

            //stopping the auto scroll to adjust to a section
            if (options.fitToSection) {
                $htmlBody.stop();
            }

            if (isReallyTouch(e)) {
                var touchEvents = getEventsPage(e);
                touchStartY = touchEvents.y;
                touchStartX = touchEvents.x;
            }
        }

        /**
        * Gets the average of the last `number` elements of the given array.
        */
        function getAverage(elements, number) {
            var sum = 0;

            //taking `number` elements from the end to make the average, if there are not enought, 1
            var lastElements = elements.slice(Math.max(elements.length - number, 1));

            for (var i = 0; i < lastElements.length; i++) {
                sum = sum + lastElements[i];
            }

            return Math.ceil(sum / number);
        }

        /**
         * Detecting mousewheel scrolling
         *
         * http://blogs.sitepointstatic.com/examples/tech/mouse-wheel/index.html
         * http://www.sitepoint.com/html5-javascript-mouse-wheel/
         */
        var prevTime = new Date().getTime();

        function MouseWheelHandler(e) {
            var curTime = new Date().getTime();
            var isNormalScroll = $(COMPLETELY_SEL).hasClass(NORMAL_SCROLL);

            //autoscrolling and not zooming?
            if (options.autoScrolling && !controlPressed && !isNormalScroll) {
                // cross-browser wheel delta
                e = e || window.event;
                var value = e.wheelDelta || -e.deltaY || -e.detail;
                var delta = Math.max(-1, Math.min(1, value));

                var horizontalDetection = typeof e.wheelDeltaX !== 'undefined' || typeof e.deltaX !== 'undefined';
                var isScrollingVertically = Math.abs(e.wheelDeltaX) < Math.abs(e.wheelDelta) || Math.abs(e.deltaX) < Math.abs(e.deltaY) || !horizontalDetection;

                //Limiting the array to 150 (lets not waste memory!)
                if (scrollings.length > 149) {
                    scrollings.shift();
                }

                //keeping record of the previous scrollings
                scrollings.push(Math.abs(value));

                //preventing to scroll the site on mouse wheel when scrollbar is present
                if (options.scrollBar) {
                    e.preventDefault ? e.preventDefault() : e.returnValue = false;
                }

                //time difference between the last scroll and the current one
                var timeDiff = curTime - prevTime;
                prevTime = curTime;

                //haven't they scrolled in a while?
                //(enough to be consider a different scrolling action to scroll another section)
                if (timeDiff > 200) {
                    //emptying the array, we dont care about old scrollings for our averages
                    scrollings = [];
                }

                if (canScroll) {
                    var averageEnd = getAverage(scrollings, 10);
                    var averageMiddle = getAverage(scrollings, 70);
                    var isAccelerating = averageEnd >= averageMiddle;

                    //to avoid double swipes...
                    if (isAccelerating && isScrollingVertically) {
                        //scrolling down?
                        if (delta < 0) {
                            scrolling('down');

                            //scrolling up?
                        } else {
                            scrolling('up');
                        }
                    }
                }

                return false;
            }

            if (options.fitToSection) {
                //stopping the auto scroll to adjust to a section
                $htmlBody.stop();
            }
        }

        /**
        * Slides a slider to the given direction.
        * Optional `section` param.
        */
        function moveSlide(direction, section) {
            var activeSection = typeof section === 'undefined' ? $(SECTION_ACTIVE_SEL) : section;
            var slides = activeSection.find(SLIDES_WRAPPER_SEL);
            var numSlides = slides.find(SLIDE_SEL).length;

            // more than one slide needed and nothing should be sliding
            if (!slides.length || slideMoving || numSlides < 2) {
                return;
            }

            var currentSlide = slides.find(SLIDE_ACTIVE_SEL);
            var destiny = null;

            if (direction === 'left') {
                destiny = currentSlide.prev(SLIDE_SEL);
            } else {
                destiny = currentSlide.next(SLIDE_SEL);
            }

            //isn't there a next slide in the secuence?
            if (!destiny.length) {
                //respect loopHorizontal settin
                if (!options.loopHorizontal) return;

                if (direction === 'left') {
                    destiny = currentSlide.siblings(':last');
                } else {
                    destiny = currentSlide.siblings(':first');
                }
            }

            slideMoving = true;

            landscapeScroll(slides, destiny, direction);
        }

        /**
        * Maintains the active slides in the viewport
        * (Because the `scroll` animation might get lost with some actions, such as when using continuousVertical)
        */
        function keepSlidesPosition() {
            $(SLIDE_ACTIVE_SEL).each(function () {
                silentLandscapeScroll($(this), 'internal');
            });
        }

        var previousDestTop = 0;
        /**
        * Returns the destination Y position based on the scrolling direction and
        * the height of the section.
        */
        function getDestinationPosition(element) {
            var elemPosition = element.position();

            //top of the desination will be at the top of the viewport
            var position = elemPosition.top;
            var isScrollingDown = elemPosition.top > previousDestTop;
            var sectionBottom = position - windowsHeight + element.outerHeight();
            var bigSectionsDestination = options.bigSectionsDestination;

            //is the destination element bigger than the viewport?
            if (element.outerHeight() > windowsHeight) {
                //scrolling up?
                if (!isScrollingDown && !bigSectionsDestination || bigSectionsDestination === 'bottom') {
                    position = sectionBottom;
                }
            }

            //sections equal or smaller than the viewport height && scrolling down? ||  is resizing and its in the last section
            else if (isScrollingDown || isResizing && element.is(':last-child')) {
                    //The bottom of the destination will be at the bottom of the viewport
                    position = sectionBottom;
                }

            /*
            Keeping record of the last scrolled position to determine the scrolling direction.
            No conventional methods can be used as the scroll bar might not be present
            AND the section might not be active if it is auto-height and didnt reach the middle
            of the viewport.
            */
            previousDestTop = position;
            return position;
        }

        /**
        * Scrolls the site to the given element and scrolls to the slide if a callback is given.
        */
        function scrollPage(element, callback, isMovementUp) {
            if (typeof element === 'undefined') {
                return;
            } //there's no element to scroll, leaving the function

            var dtop = getDestinationPosition(element);
            var slideAnchorLink;
            var slideIndex;

            //local variables
            var v = {
                element: element,
                callback: callback,
                isMovementUp: isMovementUp,
                dtop: dtop,
                yMovement: getYmovement(element),
                anchorLink: element.data('anchor'),
                sectionIndex: element.index(SECTION_SEL),
                activeSlide: element.find(SLIDE_ACTIVE_SEL),
                activeSection: $(SECTION_ACTIVE_SEL),
                leavingSection: $(SECTION_ACTIVE_SEL).index(SECTION_SEL) + 1,

                //caching the value of isResizing at the momment the function is called
                //because it will be checked later inside a setTimeout and the value might change
                localIsResizing: isResizing
            };

            //quiting when destination scroll is the same as the current one
            if (v.activeSection.is(element) && !isResizing || options.scrollBar && $window.scrollTop() === v.dtop && !element.hasClass(AUTO_HEIGHT)) {
                return;
            }

            if (v.activeSlide.length) {
                slideAnchorLink = v.activeSlide.data('anchor');
                slideIndex = v.activeSlide.index();
            }

            //callback (onLeave) if the site is not just resizing and readjusting the slides
            if ($.isFunction(options.onLeave) && !v.localIsResizing) {
                var direction = v.yMovement;

                //required for continousVertical
                if (typeof isMovementUp !== 'undefined') {
                    direction = isMovementUp ? 'up' : 'down';
                }

                if (options.onLeave.call(v.activeSection, v.leavingSection, v.sectionIndex + 1, direction) === false) {
                    return;
                }
            }

            // If continuousVertical && we need to wrap around
            if (options.autoScrolling && options.continuousVertical && typeof v.isMovementUp !== "undefined" && (!v.isMovementUp && v.yMovement == 'up' || // Intending to scroll down but about to go up or
            v.isMovementUp && v.yMovement == 'down')) {
                // intending to scroll up but about to go down

                v = createInfiniteSections(v);
            }

            //pausing media of the leaving section (if we are not just resizing, as destinatino will be the same one)
            if (!v.localIsResizing) {
                stopMedia(v.activeSection);
            }

            if (options.scrollOverflow) {
                options.scrollOverflowHandler.beforeLeave();
            }

            element.addClass(ACTIVE).siblings().removeClass(ACTIVE);
            lazyLoad(element);

            if (options.scrollOverflow) {
                options.scrollOverflowHandler.onLeave();
            }

            //preventing from activating the MouseWheelHandler event
            //more than once if the page is scrolling
            canScroll = false;

            setState(slideIndex, slideAnchorLink, v.anchorLink, v.sectionIndex);

            performMovement(v);

            //flag to avoid callingn `scrollPage()` twice in case of using anchor links
            lastScrolledDestiny = v.anchorLink;

            //avoid firing it twice (as it does also on scroll)
            activateMenuAndNav(v.anchorLink, v.sectionIndex);
        }

        /**
        * Performs the vertical movement (by CSS3 or by jQuery)
        */
        function performMovement(v) {
            // using CSS3 translate functionality
            if (options.css3 && options.autoScrolling && !options.scrollBar) {

                // The first section can have a negative value in iOS 10. Not quite sure why: -0.0142822265625
                // that's why we round it to 0.
                var translate3d = 'translate3d(0px, -' + Math.round(v.dtop) + 'px, 0px)';
                transformContainer(translate3d, true);

                //even when the scrollingSpeed is 0 there's a little delay, which might cause the
                //scrollingSpeed to change in case of using silentMoveTo();
                if (options.scrollingSpeed) {
                    clearTimeout(afterSectionLoadsId);
                    afterSectionLoadsId = setTimeout(function () {
                        afterSectionLoads(v);
                    }, options.scrollingSpeed);
                } else {
                    afterSectionLoads(v);
                }
            }

            // using jQuery animate
            else {
                    var scrollSettings = getScrollSettings(v);

                    $(scrollSettings.element).animate(scrollSettings.options, options.scrollingSpeed, options.easing).promise().done(function () {
                        //only one single callback in case of animating  `html, body`
                        if (options.scrollBar) {

                            /* Hack!
                            The timeout prevents setting the most dominant section in the viewport as "active" when the user
                            scrolled to a smaller section by using the mousewheel (auto scrolling) rather than draging the scroll bar.
                              When using scrollBar:true It seems like the scroll events still getting propagated even after the scrolling animation has finished.
                            */
                            setTimeout(function () {
                                afterSectionLoads(v);
                            }, 30);
                        } else {
                            afterSectionLoads(v);
                        }
                    });
                }
        }

        /**
        * Gets the scrolling settings depending on the plugin autoScrolling option
        */
        function getScrollSettings(v) {
            var scroll = {};

            if (options.autoScrolling && !options.scrollBar) {
                scroll.options = { 'top': -v.dtop };
                scroll.element = WRAPPER_SEL;
            } else {
                scroll.options = { 'scrollTop': v.dtop };
                scroll.element = 'html, body';
            }

            return scroll;
        }

        /**
        * Adds sections before or after the current one to create the infinite effect.
        */
        function createInfiniteSections(v) {
            // Scrolling down
            if (!v.isMovementUp) {
                // Move all previous sections to after the active section
                $(SECTION_ACTIVE_SEL).after(v.activeSection.prevAll(SECTION_SEL).get().reverse());
            } else {
                // Scrolling up
                // Move all next sections to before the active section
                $(SECTION_ACTIVE_SEL).before(v.activeSection.nextAll(SECTION_SEL));
            }

            // Maintain the displayed position (now that we changed the element order)
            silentScroll($(SECTION_ACTIVE_SEL).position().top);

            // Maintain the active slides visible in the viewport
            keepSlidesPosition();

            // save for later the elements that still need to be reordered
            v.wrapAroundElements = v.activeSection;

            // Recalculate animation variables
            v.dtop = v.element.position().top;
            v.yMovement = getYmovement(v.element);

            //sections will temporally have another position in the DOM
            //updating this values in case we need them
            v.leavingSection = v.activeSection.index(SECTION_SEL) + 1;
            v.sectionIndex = v.element.index(SECTION_SEL);

            return v;
        }

        /**
        * Fix section order after continuousVertical changes have been animated
        */
        function continuousVerticalFixSectionOrder(v) {
            // If continuousVertical is in effect (and autoScrolling would also be in effect then),
            // finish moving the elements around so the direct navigation will function more simply
            if (!v.wrapAroundElements || !v.wrapAroundElements.length) {
                return;
            }

            if (v.isMovementUp) {
                $(SECTION_FIRST_SEL).before(v.wrapAroundElements);
            } else {
                $(SECTION_LAST_SEL).after(v.wrapAroundElements);
            }

            silentScroll($(SECTION_ACTIVE_SEL).position().top);

            // Maintain the active slides visible in the viewport
            keepSlidesPosition();
        }

        /**
        * Actions to do once the section is loaded.
        */
        function afterSectionLoads(v) {
            continuousVerticalFixSectionOrder(v);

            //callback (afterLoad) if the site is not just resizing and readjusting the slides
            $.isFunction(options.afterLoad) && !v.localIsResizing && options.afterLoad.call(v.element, v.anchorLink, v.sectionIndex + 1);

            if (options.scrollOverflow) {
                options.scrollOverflowHandler.afterLoad();
            }

            if (!v.localIsResizing) {
                playMedia(v.element);
            }

            v.element.addClass(COMPLETELY).siblings().removeClass(COMPLETELY);

            canScroll = true;

            $.isFunction(v.callback) && v.callback.call(this);
        }

        /**
        * Sets the value for the given attribute from the `data-` attribute with the same suffix
        * ie: data-srcset ==> srcset  |  data-src ==> src
        */
        function setSrc(element, attribute) {
            element.attr(attribute, element.data(attribute)).removeAttr('data-' + attribute);
        }

        /**
        * Lazy loads image, video and audio elements.
        */
        function lazyLoad(destiny) {
            if (!options.lazyLoading) {
                return;
            }

            var panel = getSlideOrSection(destiny);
            var element;

            panel.find('img[data-src], img[data-srcset], source[data-src], source[data-srcset], video[data-src], audio[data-src], iframe[data-src]').each(function () {
                element = $(this);

                $.each(['src', 'srcset'], function (index, type) {
                    var attribute = element.attr('data-' + type);
                    if (typeof attribute !== 'undefined' && attribute) {
                        setSrc(element, type);
                    }
                });

                if (element.is('source')) {
                    var typeToPlay = element.closest('video').length ? 'video' : 'audio';
                    element.closest(typeToPlay).get(0).load();
                }
            });
        }

        /**
        * Plays video and audio elements.
        */
        function playMedia(destiny) {
            var panel = getSlideOrSection(destiny);

            //playing HTML5 media elements
            panel.find('video, audio').each(function () {
                var element = $(this).get(0);

                if (element.hasAttribute('data-autoplay') && typeof element.play === 'function') {
                    element.play();
                }
            });

            //youtube videos
            panel.find('iframe[src*="youtube.com/embed/"]').each(function () {
                var element = $(this).get(0);

                if (element.hasAttribute('data-autoplay')) {
                    playYoutube(element);
                }

                //in case the URL was not loaded yet. On page load we need time for the new URL (with the API string) to load.
                element.onload = function () {
                    if (element.hasAttribute('data-autoplay')) {
                        playYoutube(element);
                    }
                };
            });
        }

        /**
        * Plays a youtube video
        */
        function playYoutube(element) {
            element.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
        }

        /**
        * Stops video and audio elements.
        */
        function stopMedia(destiny) {
            var panel = getSlideOrSection(destiny);

            //stopping HTML5 media elements
            panel.find('video, audio').each(function () {
                var element = $(this).get(0);

                if (!element.hasAttribute('data-keepplaying') && typeof element.pause === 'function') {
                    element.pause();
                }
            });

            //youtube videos
            panel.find('iframe[src*="youtube.com/embed/"]').each(function () {
                var element = $(this).get(0);

                if (/youtube\.com\/embed\//.test($(this).attr('src')) && !element.hasAttribute('data-keepplaying')) {
                    $(this).get(0).contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
                }
            });
        }

        /**
        * Gets the active slide (or section) for the given section
        */
        function getSlideOrSection(destiny) {
            var slide = destiny.find(SLIDE_ACTIVE_SEL);
            if (slide.length) {
                destiny = $(slide);
            }

            return destiny;
        }

        /**
        * Scrolls to the anchor in the URL when loading the site
        */
        function scrollToAnchor() {
            var anchors = getAnchorsURL();
            var sectionAnchor = anchors.section;
            var slideAnchor = anchors.slide;

            if (sectionAnchor) {
                //if theres any #
                if (options.animateAnchor) {
                    scrollPageAndSlide(sectionAnchor, slideAnchor);
                } else {
                    silentMoveTo(sectionAnchor, slideAnchor);
                }
            }
        }

        /**
        * Detecting any change on the URL to scroll to the given anchor link
        * (a way to detect back history button as we play with the hashes on the URL)
        */
        function hashChangeHandler() {
            if (!isScrolling && !options.lockAnchors) {
                var anchors = getAnchorsURL();
                var sectionAnchor = anchors.section;
                var slideAnchor = anchors.slide;

                //when moving to a slide in the first section for the first time (first time to add an anchor to the URL)
                var isFirstSlideMove = typeof lastScrolledDestiny === 'undefined';
                var isFirstScrollMove = typeof lastScrolledDestiny === 'undefined' && typeof slideAnchor === 'undefined' && !slideMoving;

                if (sectionAnchor && sectionAnchor.length) {
                    /*in order to call scrollpage() only once for each destination at a time
                    It is called twice for each scroll otherwise, as in case of using anchorlinks `hashChange`
                    event is fired on every scroll too.*/
                    if (sectionAnchor && sectionAnchor !== lastScrolledDestiny && !isFirstSlideMove || isFirstScrollMove || !slideMoving && lastScrolledSlide != slideAnchor) {

                        scrollPageAndSlide(sectionAnchor, slideAnchor);
                    }
                }
            }
        }

        //gets the URL anchors (section and slide)
        function getAnchorsURL() {
            var section;
            var slide;
            var hash = window.location.hash;

            if (hash.length) {
                //getting the anchor link in the URL and deleting the `#`
                var anchorsParts = hash.replace('#', '').split('/');

                //using / for visual reasons and not as a section/slide separator #2803
                var isFunkyAnchor = hash.indexOf('#/') > -1;

                section = isFunkyAnchor ? '/' + anchorsParts[1] : decodeURIComponent(anchorsParts[0]);

                var slideAnchor = isFunkyAnchor ? anchorsParts[2] : anchorsParts[1];
                if (slideAnchor && slideAnchor.length) {
                    slide = decodeURIComponent(slideAnchor);
                }
            }

            return {
                section: section,
                slide: slide
            };
        }

        //Sliding with arrow keys, both, vertical and horizontal
        function keydownHandler(e) {
            clearTimeout(keydownId);

            var activeElement = $(':focus');
            var keyCode = e.which;

            //tab?
            if (keyCode === 9) {
                onTab(e);
            } else if (!activeElement.is('textarea') && !activeElement.is('input') && !activeElement.is('select') && activeElement.attr('contentEditable') !== "true" && activeElement.attr('contentEditable') !== '' && options.keyboardScrolling && options.autoScrolling) {

                //preventing the scroll with arrow keys & spacebar & Page Up & Down keys
                var keyControls = [40, 38, 32, 33, 34];
                if ($.inArray(keyCode, keyControls) > -1) {
                    e.preventDefault();
                }

                controlPressed = e.ctrlKey;

                keydownId = setTimeout(function () {
                    onkeydown(e);
                }, 150);
            }
        }

        function tooltipTextHandler() {
            $(this).prev().trigger('click');
        }

        //to prevent scrolling while zooming
        function keyUpHandler(e) {
            if (isWindowFocused) {
                //the keyup gets fired on new tab ctrl + t in Firefox
                controlPressed = e.ctrlKey;
            }
        }

        //binding the mousemove when the mouse's middle button is released
        function mouseDownHandler(e) {
            //middle button
            if (e.which == 2) {
                oldPageY = e.pageY;
                container.on('mousemove', mouseMoveHandler);
            }
        }

        //unbinding the mousemove when the mouse's middle button is released
        function mouseUpHandler(e) {
            //middle button
            if (e.which == 2) {
                container.off('mousemove');
            }
        }

        //Scrolling horizontally when clicking on the slider controls.
        function slideArrowHandler() {
            var section = $(this).closest(SECTION_SEL);

            if ($(this).hasClass(SLIDES_PREV)) {
                if (isScrollAllowed.m.left) {
                    moveSlideLeft(section);
                }
            } else {
                if (isScrollAllowed.m.right) {
                    moveSlideRight(section);
                }
            }
        }

        //when opening a new tab (ctrl + t), `control` won't be pressed when coming back.
        function blurHandler() {
            isWindowFocused = false;
            controlPressed = false;
        }

        //Scrolls to the section when clicking the navigation bullet
        function sectionBulletHandler(e) {
            e.preventDefault();
            var index = $(this).parent().index();
            scrollPage($(SECTION_SEL).eq(index));
        }

        //Scrolls the slider to the given slide destination for the given section
        function slideBulletHandler(e) {
            e.preventDefault();
            var slides = $(this).closest(SECTION_SEL).find(SLIDES_WRAPPER_SEL);
            var destiny = slides.find(SLIDE_SEL).eq($(this).closest('li').index());

            landscapeScroll(slides, destiny);
        }

        /**
        * Keydown event
        */
        function onkeydown(e) {
            var shiftPressed = e.shiftKey;

            //do nothing if we can not scroll or we are not using horizotnal key arrows.
            if (!canScroll && [37, 39].indexOf(e.which) < 0) {
                return;
            }

            switch (e.which) {
                //up
                case 38:
                case 33:
                    if (isScrollAllowed.k.up) {
                        moveSectionUp();
                    }
                    break;

                //down
                case 32:
                    //spacebar
                    if (shiftPressed && isScrollAllowed.k.up) {
                        moveSectionUp();
                        break;
                    }
                /* falls through */
                case 40:
                case 34:
                    if (isScrollAllowed.k.down) {
                        moveSectionDown();
                    }
                    break;

                //Home
                case 36:
                    if (isScrollAllowed.k.up) {
                        moveTo(1);
                    }
                    break;

                //End
                case 35:
                    if (isScrollAllowed.k.down) {
                        moveTo($(SECTION_SEL).length);
                    }
                    break;

                //left
                case 37:
                    if (isScrollAllowed.k.left) {
                        moveSlideLeft();
                    }
                    break;

                //right
                case 39:
                    if (isScrollAllowed.k.right) {
                        moveSlideRight();
                    }
                    break;

                default:
                    return; // exit this handler for other keys
            }
        }

        /**
        * Makes sure the tab key will only focus elements within the current section/slide
        * preventing this way from breaking the page.
        * Based on "Modals and keyboard traps"
        * from https://developers.google.com/web/fundamentals/accessibility/focus/using-tabindex
        */
        function onTab(e) {
            var isShiftPressed = e.shiftKey;
            var activeElement = $(':focus');
            var activeSection = $(SECTION_ACTIVE_SEL);
            var activeSlide = activeSection.find(SLIDE_ACTIVE_SEL);
            var focusableWrapper = activeSlide.length ? activeSlide : activeSection;
            var focusableElements = focusableWrapper.find(focusableElementsString).not('[tabindex="-1"]');

            function preventAndFocusFirst(e) {
                e.preventDefault();
                return focusableElements.first().focus();
            }

            //is there an element with focus?
            if (activeElement.length) {
                if (!activeElement.closest(SECTION_ACTIVE_SEL, SLIDE_ACTIVE_SEL).length) {
                    activeElement = preventAndFocusFirst(e);
                }
            }

            //no element if focused? Let's focus the first one of the section/slide
            else {
                    preventAndFocusFirst(e);
                }

            //when reached the first or last focusable element of the section/slide
            //we prevent the tab action to keep it in the last focusable element
            if (!isShiftPressed && activeElement.is(focusableElements.last()) || isShiftPressed && activeElement.is(focusableElements.first())) {
                e.preventDefault();
            }
        }

        /**
        * Detecting the direction of the mouse movement.
        * Used only for the middle button of the mouse.
        */
        var oldPageY = 0;
        function mouseMoveHandler(e) {
            if (canScroll) {
                // moving up
                if (e.pageY < oldPageY && isScrollAllowed.m.up) {
                    moveSectionUp();
                }

                // moving down
                else if (e.pageY > oldPageY && isScrollAllowed.m.down) {
                        moveSectionDown();
                    }
            }
            oldPageY = e.pageY;
        }

        /**
        * Scrolls horizontal sliders.
        */
        function landscapeScroll(slides, destiny, direction) {
            var section = slides.closest(SECTION_SEL);
            var v = {
                slides: slides,
                destiny: destiny,
                direction: direction,
                destinyPos: destiny.position(),
                slideIndex: destiny.index(),
                section: section,
                sectionIndex: section.index(SECTION_SEL),
                anchorLink: section.data('anchor'),
                slidesNav: section.find(SLIDES_NAV_SEL),
                slideAnchor: getAnchor(destiny),
                prevSlide: section.find(SLIDE_ACTIVE_SEL),
                prevSlideIndex: section.find(SLIDE_ACTIVE_SEL).index(),

                //caching the value of isResizing at the momment the function is called
                //because it will be checked later inside a setTimeout and the value might change
                localIsResizing: isResizing
            };
            v.xMovement = getXmovement(v.prevSlideIndex, v.slideIndex);

            //important!! Only do it when not resizing
            if (!v.localIsResizing) {
                //preventing from scrolling to the next/prev section when using scrollHorizontally
                canScroll = false;
            }

            if (options.onSlideLeave) {

                //if the site is not just resizing and readjusting the slides
                if (!v.localIsResizing && v.xMovement !== 'none') {
                    if ($.isFunction(options.onSlideLeave)) {
                        if (options.onSlideLeave.call(v.prevSlide, v.anchorLink, v.sectionIndex + 1, v.prevSlideIndex, v.direction, v.slideIndex) === false) {
                            slideMoving = false;
                            return;
                        }
                    }
                }
            }

            destiny.addClass(ACTIVE).siblings().removeClass(ACTIVE);

            if (!v.localIsResizing) {
                stopMedia(v.prevSlide);
                lazyLoad(destiny);
            }

            if (!options.loopHorizontal && options.controlArrows) {
                //hidding it for the fist slide, showing for the rest
                section.find(SLIDES_ARROW_PREV_SEL).toggle(v.slideIndex !== 0);

                //hidding it for the last slide, showing for the rest
                section.find(SLIDES_ARROW_NEXT_SEL).toggle(!destiny.is(':last-child'));
            }

            //only changing the URL if the slides are in the current section (not for resize re-adjusting)
            if (section.hasClass(ACTIVE) && !v.localIsResizing) {
                setState(v.slideIndex, v.slideAnchor, v.anchorLink, v.sectionIndex);
            }

            performHorizontalMove(slides, v, true);
        }

        function afterSlideLoads(v) {
            activeSlidesNavigation(v.slidesNav, v.slideIndex);

            //if the site is not just resizing and readjusting the slides
            if (!v.localIsResizing) {
                $.isFunction(options.afterSlideLoad) && options.afterSlideLoad.call(v.destiny, v.anchorLink, v.sectionIndex + 1, v.slideAnchor, v.slideIndex);

                //needs to be inside the condition to prevent problems with continuousVertical and scrollHorizontally
                //and to prevent double scroll right after a windows resize
                canScroll = true;

                playMedia(v.destiny);
            }

            //letting them slide again
            slideMoving = false;
        }

        /**
        * Performs the horizontal movement. (CSS3 or jQuery)
        *
        * @param fireCallback {Bool} - determines whether or not to fire the callback
        */
        function performHorizontalMove(slides, v, fireCallback) {
            var destinyPos = v.destinyPos;

            if (options.css3) {
                var translate3d = 'translate3d(-' + Math.round(destinyPos.left) + 'px, 0px, 0px)';

                addAnimation(slides.find(SLIDES_CONTAINER_SEL)).css(getTransforms(translate3d));

                afterSlideLoadsId = setTimeout(function () {
                    fireCallback && afterSlideLoads(v);
                }, options.scrollingSpeed, options.easing);
            } else {
                slides.animate({
                    scrollLeft: Math.round(destinyPos.left)
                }, options.scrollingSpeed, options.easing, function () {

                    fireCallback && afterSlideLoads(v);
                });
            }
        }

        /**
        * Sets the state for the horizontal bullet navigations.
        */
        function activeSlidesNavigation(slidesNav, slideIndex) {
            slidesNav.find(ACTIVE_SEL).removeClass(ACTIVE);
            slidesNav.find('li').eq(slideIndex).find('a').addClass(ACTIVE);
        }

        var previousHeight = windowsHeight;

        //when resizing the site, we adjust the heights of the sections, slimScroll...
        function resizeHandler() {
            //checking if it needs to get responsive
            responsive();

            // rebuild immediately on touch devices
            if (isTouchDevice) {
                var activeElement = $(document.activeElement);

                //if the keyboard is NOT visible
                if (!activeElement.is('textarea') && !activeElement.is('input') && !activeElement.is('select')) {
                    var currentHeight = $window.height();

                    //making sure the change in the viewport size is enough to force a rebuild. (20 % of the window to avoid problems when hidding scroll bars)
                    if (Math.abs(currentHeight - previousHeight) > 20 * Math.max(previousHeight, currentHeight) / 100) {
                        reBuild(true);
                        previousHeight = currentHeight;
                    }
                }
            } else {
                //in order to call the functions only when the resize is finished
                //http://stackoverflow.com/questions/4298612/jquery-how-to-call-resize-event-only-once-its-finished-resizing
                clearTimeout(resizeId);

                resizeId = setTimeout(function () {
                    reBuild(true);
                }, 350);
            }
        }

        /**
        * Checks if the site needs to get responsive and disables autoScrolling if so.
        * A class `fp-responsive` is added to the plugin's container in case the user wants to use it for his own responsive CSS.
        */
        function responsive() {
            var widthLimit = options.responsive || options.responsiveWidth; //backwards compatiblity
            var heightLimit = options.responsiveHeight;

            //only calculating what we need. Remember its called on the resize event.
            var isBreakingPointWidth = widthLimit && $window.outerWidth() < widthLimit;
            var isBreakingPointHeight = heightLimit && $window.height() < heightLimit;

            if (widthLimit && heightLimit) {
                setResponsive(isBreakingPointWidth || isBreakingPointHeight);
            } else if (widthLimit) {
                setResponsive(isBreakingPointWidth);
            } else if (heightLimit) {
                setResponsive(isBreakingPointHeight);
            }
        }

        /**
        * Adds transition animations for the given element
        */
        function addAnimation(element) {
            var transition = 'all ' + options.scrollingSpeed + 'ms ' + options.easingcss3;

            element.removeClass(NO_TRANSITION);
            return element.css({
                '-webkit-transition': transition,
                'transition': transition
            });
        }

        /**
        * Remove transition animations for the given element
        */
        function removeAnimation(element) {
            return element.addClass(NO_TRANSITION);
        }

        /**
        * Activating the vertical navigation bullets according to the given slide name.
        */
        function activateNavDots(name, sectionIndex) {
            if (options.navigation) {
                $(SECTION_NAV_SEL).find(ACTIVE_SEL).removeClass(ACTIVE);
                if (name) {
                    $(SECTION_NAV_SEL).find('a[href="#' + name + '"]').addClass(ACTIVE);
                } else {
                    $(SECTION_NAV_SEL).find('li').eq(sectionIndex).find('a').addClass(ACTIVE);
                }
            }
        }

        /**
        * Activating the website main menu elements according to the given slide name.
        */
        function activateMenuElement(name) {
            if (options.menu) {
                $(options.menu).find(ACTIVE_SEL).removeClass(ACTIVE);
                $(options.menu).find('[data-menuanchor="' + name + '"]').addClass(ACTIVE);
            }
        }

        /**
        * Sets to active the current menu and vertical nav items.
        */
        function activateMenuAndNav(anchor, index) {
            activateMenuElement(anchor);
            activateNavDots(anchor, index);
        }

        /**
        * Retuns `up` or `down` depending on the scrolling movement to reach its destination
        * from the current section.
        */
        function getYmovement(destiny) {
            var fromIndex = $(SECTION_ACTIVE_SEL).index(SECTION_SEL);
            var toIndex = destiny.index(SECTION_SEL);
            if (fromIndex == toIndex) {
                return 'none';
            }
            if (fromIndex > toIndex) {
                return 'up';
            }
            return 'down';
        }

        /**
        * Retuns `right` or `left` depending on the scrolling movement to reach its destination
        * from the current slide.
        */
        function getXmovement(fromIndex, toIndex) {
            if (fromIndex == toIndex) {
                return 'none';
            }
            if (fromIndex > toIndex) {
                return 'left';
            }
            return 'right';
        }

        function addTableClass(element) {
            //In case we are styling for the 2nd time as in with reponsiveSlides
            if (!element.hasClass(TABLE)) {
                var wrapper = $('<div class="' + TABLE_CELL + '" />').height(getTableHeight(element));
                element.addClass(TABLE).wrapInner(wrapper);
            }
        }

        function getTableHeight(element) {
            var sectionHeight = windowsHeight;

            if (options.paddingTop || options.paddingBottom) {
                var section = element;
                if (!section.hasClass(SECTION)) {
                    section = element.closest(SECTION_SEL);
                }

                var paddings = parseInt(section.css('padding-top')) + parseInt(section.css('padding-bottom'));
                sectionHeight = windowsHeight - paddings;
            }

            return sectionHeight;
        }

        /**
        * Adds a css3 transform property to the container class with or without animation depending on the animated param.
        */
        function transformContainer(translate3d, animated) {
            if (animated) {
                addAnimation(container);
            } else {
                removeAnimation(container);
            }

            container.css(getTransforms(translate3d));

            //syncronously removing the class after the animation has been applied.
            setTimeout(function () {
                container.removeClass(NO_TRANSITION);
            }, 10);
        }

        /**
        * Gets a section by its anchor / index
        */
        function getSectionByAnchor(sectionAnchor) {
            var section = container.find(SECTION_SEL + '[data-anchor="' + sectionAnchor + '"]');
            if (!section.length) {
                var sectionIndex = typeof sectionAnchor !== 'undefined' ? sectionAnchor - 1 : 0;
                section = $(SECTION_SEL).eq(sectionIndex);
            }

            return section;
        }

        /**
        * Gets a slide inside a given section by its anchor / index
        */
        function getSlideByAnchor(slideAnchor, section) {
            var slide = section.find(SLIDE_SEL + '[data-anchor="' + slideAnchor + '"]');
            if (!slide.length) {
                slideAnchor = typeof slideAnchor !== 'undefined' ? slideAnchor : 0;
                slide = section.find(SLIDE_SEL).eq(slideAnchor);
            }

            return slide;
        }

        /**
        * Scrolls to the given section and slide anchors
        */
        function scrollPageAndSlide(sectionAnchor, slideAnchor) {
            var section = getSectionByAnchor(sectionAnchor);

            //do nothing if there's no section with the given anchor name
            if (!section.length) return;

            var slide = getSlideByAnchor(slideAnchor, section);

            //we need to scroll to the section and then to the slide
            if (sectionAnchor !== lastScrolledDestiny && !section.hasClass(ACTIVE)) {
                scrollPage(section, function () {
                    scrollSlider(slide);
                });
            }
            //if we were already in the section
            else {
                    scrollSlider(slide);
                }
        }

        /**
        * Scrolls the slider to the given slide destination for the given section
        */
        function scrollSlider(slide) {
            if (slide.length) {
                landscapeScroll(slide.closest(SLIDES_WRAPPER_SEL), slide);
            }
        }

        /**
        * Creates a landscape navigation bar with dots for horizontal sliders.
        */
        function addSlidesNavigation(section, numSlides) {
            section.append('<div class="' + SLIDES_NAV + '"><ul></ul></div>');
            var nav = section.find(SLIDES_NAV_SEL);

            //top or bottom
            nav.addClass(options.slidesNavPosition);

            for (var i = 0; i < numSlides; i++) {
                nav.find('ul').append('<li><a href="#"><span></span></a></li>');
            }

            //centering it
            nav.css('margin-left', '-' + nav.width() / 2 + 'px');

            nav.find('li').first().find('a').addClass(ACTIVE);
        }

        /**
        * Sets the state of the website depending on the active section/slide.
        * It changes the URL hash when needed and updates the body class.
        */
        function setState(slideIndex, slideAnchor, anchorLink, sectionIndex) {
            var sectionHash = '';

            if (options.anchors.length && !options.lockAnchors) {

                //isn't it the first slide?
                if (slideIndex) {
                    if (typeof anchorLink !== 'undefined') {
                        sectionHash = anchorLink;
                    }

                    //slide without anchor link? We take the index instead.
                    if (typeof slideAnchor === 'undefined') {
                        slideAnchor = slideIndex;
                    }

                    lastScrolledSlide = slideAnchor;
                    setUrlHash(sectionHash + '/' + slideAnchor);

                    //first slide won't have slide anchor, just the section one
                } else if (typeof slideIndex !== 'undefined') {
                    lastScrolledSlide = slideAnchor;
                    setUrlHash(anchorLink);
                }

                //section without slides
                else {
                        setUrlHash(anchorLink);
                    }
            }

            setBodyClass();
        }

        /**
        * Sets the URL hash.
        */
        function setUrlHash(url) {
            if (options.recordHistory) {
                location.hash = url;
            } else {
                //Mobile Chrome doesn't work the normal way, so... lets use HTML5 for phones :)
                if (isTouchDevice || isTouch) {
                    window.history.replaceState(undefined, undefined, '#' + url);
                } else {
                    var baseUrl = window.location.href.split('#')[0];
                    window.location.replace(baseUrl + '#' + url);
                }
            }
        }

        /**
        * Gets the anchor for the given slide / section. Its index will be used if there's none.
        */
        function getAnchor(element) {
            var anchor = element.data('anchor');
            var index = element.index();

            //Slide without anchor link? We take the index instead.
            if (typeof anchor === 'undefined') {
                anchor = index;
            }

            return anchor;
        }

        /**
        * Sets a class for the body of the page depending on the active section / slide
        */
        function setBodyClass() {
            var section = $(SECTION_ACTIVE_SEL);
            var slide = section.find(SLIDE_ACTIVE_SEL);

            var sectionAnchor = getAnchor(section);
            var slideAnchor = getAnchor(slide);

            var text = String(sectionAnchor);

            if (slide.length) {
                text = text + '-' + slideAnchor;
            }

            //changing slash for dash to make it a valid CSS style
            text = text.replace('/', '-').replace('#', '');

            //removing previous anchor classes
            var classRe = new RegExp('\\b\\s?' + VIEWING_PREFIX + '-[^\\s]+\\b', "g");
            $body[0].className = $body[0].className.replace(classRe, '');

            //adding the current anchor
            $body.addClass(VIEWING_PREFIX + '-' + text);
        }

        /**
        * Checks for translate3d support
        * @return boolean
        * http://stackoverflow.com/questions/5661671/detecting-transform-translate3d-support
        */
        function support3d() {
            var el = document.createElement('p'),
                has3d,
                transforms = {
                'webkitTransform': '-webkit-transform',
                'OTransform': '-o-transform',
                'msTransform': '-ms-transform',
                'MozTransform': '-moz-transform',
                'transform': 'transform'
            };

            // Add it to the body to get the computed style.
            document.body.insertBefore(el, null);

            for (var t in transforms) {
                if (el.style[t] !== undefined) {
                    el.style[t] = 'translate3d(1px,1px,1px)';
                    has3d = window.getComputedStyle(el).getPropertyValue(transforms[t]);
                }
            }

            document.body.removeChild(el);

            return has3d !== undefined && has3d.length > 0 && has3d !== 'none';
        }

        /**
        * Removes the auto scrolling action fired by the mouse wheel and trackpad.
        * After this function is called, the mousewheel and trackpad movements won't scroll through sections.
        */
        function removeMouseWheelHandler() {
            if (document.addEventListener) {
                document.removeEventListener('mousewheel', MouseWheelHandler, false); //IE9, Chrome, Safari, Oper
                document.removeEventListener('wheel', MouseWheelHandler, false); //Firefox
                document.removeEventListener('MozMousePixelScroll', MouseWheelHandler, false); //old Firefox
            } else {
                document.detachEvent('onmousewheel', MouseWheelHandler); //IE 6/7/8
            }
        }

        /**
        * Adds the auto scrolling action for the mouse wheel and trackpad.
        * After this function is called, the mousewheel and trackpad movements will scroll through sections
        * https://developer.mozilla.org/en-US/docs/Web/Events/wheel
        */
        function addMouseWheelHandler() {
            var prefix = '';
            var _addEventListener;

            if (window.addEventListener) {
                _addEventListener = "addEventListener";
            } else {
                _addEventListener = "attachEvent";
                prefix = 'on';
            }

            // detect available wheel event
            var support = 'onwheel' in document.createElement('div') ? 'wheel' : // Modern browsers support "wheel"
            document.onmousewheel !== undefined ? 'mousewheel' : // Webkit and IE support at least "mousewheel"
            'DOMMouseScroll'; // let's assume that remaining browsers are older Firefox


            if (support == 'DOMMouseScroll') {
                document[_addEventListener](prefix + 'MozMousePixelScroll', MouseWheelHandler, false);
            }

            //handle MozMousePixelScroll in older Firefox
            else {
                    document[_addEventListener](prefix + support, MouseWheelHandler, false);
                }
        }

        /**
        * Binding the mousemove when the mouse's middle button is pressed
        */
        function addMiddleWheelHandler() {
            container.on('mousedown', mouseDownHandler).on('mouseup', mouseUpHandler);
        }

        /**
        * Unbinding the mousemove when the mouse's middle button is released
        */
        function removeMiddleWheelHandler() {
            container.off('mousedown', mouseDownHandler).off('mouseup', mouseUpHandler);
        }

        /**
        * Adds the possibility to auto scroll through sections on touch devices.
        */
        function addTouchHandler() {
            if (isTouchDevice || isTouch) {
                if (options.autoScrolling) {
                    $body.off(events.touchmove).on(events.touchmove, preventBouncing);
                }

                $(WRAPPER_SEL).off(events.touchstart).on(events.touchstart, touchStartHandler).off(events.touchmove).on(events.touchmove, touchMoveHandler);
            }
        }

        /**
        * Removes the auto scrolling for touch devices.
        */
        function removeTouchHandler() {
            if (isTouchDevice || isTouch) {
                if (options.autoScrolling) {
                    $body.off(events.touchmove);
                }

                $(WRAPPER_SEL).off(events.touchstart).off(events.touchmove);
            }
        }

        /*
        * Returns and object with Microsoft pointers (for IE<11 and for IE >= 11)
        * http://msdn.microsoft.com/en-us/library/ie/dn304886(v=vs.85).aspx
        */
        function getMSPointer() {
            var pointer;

            //IE >= 11 & rest of browsers
            if (window.PointerEvent) {
                pointer = { down: 'pointerdown', move: 'pointermove' };
            }

            //IE < 11
            else {
                    pointer = { down: 'MSPointerDown', move: 'MSPointerMove' };
                }

            return pointer;
        }

        /**
        * Gets the pageX and pageY properties depending on the browser.
        * https://github.com/alvarotrigo/fullPage.js/issues/194#issuecomment-34069854
        */
        function getEventsPage(e) {
            var events = [];

            events.y = typeof e.pageY !== 'undefined' && (e.pageY || e.pageX) ? e.pageY : e.touches[0].pageY;
            events.x = typeof e.pageX !== 'undefined' && (e.pageY || e.pageX) ? e.pageX : e.touches[0].pageX;

            //in touch devices with scroll bar, e.pageY is detected, but we have to deal with touch events. #1008
            if (isTouch && isReallyTouch(e) && (options.scrollBar || !options.autoScrolling)) {
                events.y = e.touches[0].pageY;
                events.x = e.touches[0].pageX;
            }

            return events;
        }

        /**
        * Slides silently (with no animation) the active slider to the given slide.
        * @param noCallback {bool} true or defined -> no callbacks
        */
        function silentLandscapeScroll(activeSlide, noCallbacks) {
            setScrollingSpeed(0, 'internal');

            if (typeof noCallbacks !== 'undefined') {
                //preventing firing callbacks afterSlideLoad etc.
                isResizing = true;
            }

            landscapeScroll(activeSlide.closest(SLIDES_WRAPPER_SEL), activeSlide);

            if (typeof noCallbacks !== 'undefined') {
                isResizing = false;
            }

            setScrollingSpeed(originals.scrollingSpeed, 'internal');
        }

        /**
        * Scrolls silently (with no animation) the page to the given Y position.
        */
        function silentScroll(top) {
            // The first section can have a negative value in iOS 10. Not quite sure why: -0.0142822265625
            // that's why we round it to 0.
            var roundedTop = Math.round(top);

            if (options.css3 && options.autoScrolling && !options.scrollBar) {
                var translate3d = 'translate3d(0px, -' + roundedTop + 'px, 0px)';
                transformContainer(translate3d, false);
            } else if (options.autoScrolling && !options.scrollBar) {
                container.css('top', -roundedTop);
            } else {
                $htmlBody.scrollTop(roundedTop);
            }
        }

        /**
        * Returns the cross-browser transform string.
        */
        function getTransforms(translate3d) {
            return {
                '-webkit-transform': translate3d,
                '-moz-transform': translate3d,
                '-ms-transform': translate3d,
                'transform': translate3d
            };
        }

        /**
        * Allowing or disallowing the mouse/swipe scroll in a given direction. (not for keyboard)
        * @type  m (mouse) or k (keyboard)
        */
        function setIsScrollAllowed(value, direction, type) {
            //up, down, left, right
            if (direction !== 'all') {
                isScrollAllowed[type][direction] = value;
            }

            //all directions?
            else {
                    $.each(Object.keys(isScrollAllowed[type]), function (index, key) {
                        isScrollAllowed[type][key] = value;
                    });
                }
        }

        /*
        * Destroys fullpage.js plugin events and optinally its html markup and styles
        */
        function destroy(all) {
            setAutoScrolling(false, 'internal');
            setAllowScrolling(false);
            setKeyboardScrolling(false);
            container.addClass(DESTROYED);

            clearTimeout(afterSlideLoadsId);
            clearTimeout(afterSectionLoadsId);
            clearTimeout(resizeId);
            clearTimeout(scrollId);
            clearTimeout(scrollId2);

            $window.off('scroll', scrollHandler).off('hashchange', hashChangeHandler).off('resize', resizeHandler);

            $document.off('keydown', keydownHandler).off('keyup', keyUpHandler).off('click touchstart', SECTION_NAV_SEL + ' a').off('mouseenter', SECTION_NAV_SEL + ' li').off('mouseleave', SECTION_NAV_SEL + ' li').off('click touchstart', SLIDES_NAV_LINK_SEL).off('mouseover', options.normalScrollElements).off('mouseout', options.normalScrollElements);

            $(SECTION_SEL).off('click touchstart', SLIDES_ARROW_SEL);

            clearTimeout(afterSlideLoadsId);
            clearTimeout(afterSectionLoadsId);

            //lets make a mess!
            if (all) {
                destroyStructure();
            }
        }

        /*
        * Removes inline styles added by fullpage.js
        */
        function destroyStructure() {
            //reseting the `top` or `translate` properties to 0
            silentScroll(0);

            //loading all the lazy load content
            container.find('img[data-src], source[data-src], audio[data-src], iframe[data-src]').each(function () {
                setSrc($(this), 'src');
            });

            container.find('img[data-srcset]').each(function () {
                setSrc($(this), 'srcset');
            });

            $(SECTION_NAV_SEL + ', ' + SLIDES_NAV_SEL + ', ' + SLIDES_ARROW_SEL).remove();

            //removing inline styles
            $(SECTION_SEL).css({
                'height': '',
                'background-color': '',
                'padding': ''
            });

            $(SLIDE_SEL).css({
                'width': ''
            });

            container.css({
                'height': '',
                'position': '',
                '-ms-touch-action': '',
                'touch-action': ''
            });

            $htmlBody.css({
                'overflow': '',
                'height': ''
            });

            // remove .fp-enabled class
            $('html').removeClass(ENABLED);

            // remove .fp-responsive class
            $body.removeClass(RESPONSIVE);

            // remove all of the .fp-viewing- classes
            $.each($body.get(0).className.split(/\s+/), function (index, className) {
                if (className.indexOf(VIEWING_PREFIX) === 0) {
                    $body.removeClass(className);
                }
            });

            //removing added classes
            $(SECTION_SEL + ', ' + SLIDE_SEL).each(function () {
                if (options.scrollOverflowHandler) {
                    options.scrollOverflowHandler.remove($(this));
                }
                $(this).removeClass(TABLE + ' ' + ACTIVE);
                $(this).attr('style', $(this).data('fp-styles'));
            });

            removeAnimation(container);

            //Unwrapping content
            container.find(TABLE_CELL_SEL + ', ' + SLIDES_CONTAINER_SEL + ', ' + SLIDES_WRAPPER_SEL).each(function () {
                //unwrap not being use in case there's no child element inside and its just text
                $(this).replaceWith(this.childNodes);
            });

            //removing the applied transition from the fullpage wrapper
            container.css({
                '-webkit-transition': 'none',
                'transition': 'none'
            });

            //scrolling the page to the top with no animation
            $htmlBody.scrollTop(0);

            //removing selectors
            var usedSelectors = [SECTION, SLIDE, SLIDES_CONTAINER];
            $.each(usedSelectors, function (index, value) {
                $('.' + value).removeClass(value);
            });
        }

        /*
        * Sets the state for a variable with multiple states (original, and temporal)
        * Some variables such as `autoScrolling` or `recordHistory` might change automatically its state when using `responsive` or `autoScrolling:false`.
        * This function is used to keep track of both states, the original and the temporal one.
        * If type is not 'internal', then we assume the user is globally changing the variable.
        */
        function setVariableState(variable, value, type) {
            options[variable] = value;
            if (type !== 'internal') {
                originals[variable] = value;
            }
        }

        /**
        * Displays warnings
        */
        function displayWarnings() {
            var extensions = ['fadingEffect', 'continuousHorizontal', 'scrollHorizontally', 'interlockedSlides', 'resetSliders', 'responsiveSlides', 'offsetSections', 'dragAndMove', 'scrollOverflowReset', 'parallax'];
            if ($('html').hasClass(ENABLED)) {
                showError('error', 'Fullpage.js can only be initialized once and you are doing it multiple times!');
                return;
            }

            // Disable mutually exclusive settings
            if (options.continuousVertical && (options.loopTop || options.loopBottom)) {
                options.continuousVertical = false;
                showError('warn', 'Option `loopTop/loopBottom` is mutually exclusive with `continuousVertical`; `continuousVertical` disabled');
            }

            if (options.scrollBar && options.scrollOverflow) {
                showError('warn', 'Option `scrollBar` is mutually exclusive with `scrollOverflow`. Sections with scrollOverflow might not work well in Firefox');
            }

            if (options.continuousVertical && (options.scrollBar || !options.autoScrolling)) {
                options.continuousVertical = false;
                showError('warn', 'Scroll bars (`scrollBar:true` or `autoScrolling:false`) are mutually exclusive with `continuousVertical`; `continuousVertical` disabled');
            }

            if (options.scrollOverflow && !options.scrollOverflowHandler) {
                options.scrollOverflow = false;
                showError('error', 'The option `scrollOverflow:true` requires the file `scrolloverflow.min.js`. Please include it before fullPage.js.');
            }

            //using extensions? Wrong file!
            $.each(extensions, function (index, extension) {
                //is the option set to true?
                if (options[extension]) {
                    showError('warn', 'fullpage.js extensions require jquery.fullpage.extensions.min.js file instead of the usual jquery.fullpage.js. Requested: ' + extension);
                }
            });

            //anchors can not have the same value as any element ID or NAME
            $.each(options.anchors, function (index, name) {

                //case insensitive selectors (http://stackoverflow.com/a/19465187/1081396)
                var nameAttr = $document.find('[name]').filter(function () {
                    return $(this).attr('name') && $(this).attr('name').toLowerCase() == name.toLowerCase();
                });

                var idAttr = $document.find('[id]').filter(function () {
                    return $(this).attr('id') && $(this).attr('id').toLowerCase() == name.toLowerCase();
                });

                if (idAttr.length || nameAttr.length) {
                    showError('error', 'data-anchor tags can not have the same value as any `id` element on the site (or `name` element for IE).');
                    idAttr.length && showError('error', '"' + name + '" is is being used by another element `id` property');
                    nameAttr.length && showError('error', '"' + name + '" is is being used by another element `name` property');
                }
            });
        }

        /**
        * Shows a message in the console of the given type.
        */
        function showError(type, text) {
            console && console[type] && console[type]('fullPage: ' + text);
        }
    }; //end of $.fn.fullpage
});

/*!
 * Isotope PACKAGED v3.0.6
 *
 * Licensed GPLv3 for open source use
 * or Isotope Commercial License for commercial use
 *
 * https://isotope.metafizzy.co
 * Copyright 2010-2018 Metafizzy
 */

!function (t, e) {
    "function" == typeof define && define.amd ? define("jquery-bridget/jquery-bridget", ["jquery"], function (i) {
        return e(t, i);
    }) : "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports ? module.exports = e(t, require("jquery")) : t.jQueryBridget = e(t, t.jQuery);
}(window, function (t, e) {
    "use strict";
    function i(i, s, a) {
        function u(t, e, o) {
            var n,
                s = "$()." + i + '("' + e + '")';return t.each(function (t, u) {
                var h = a.data(u, i);if (!h) return void r(i + " not initialized. Cannot call methods, i.e. " + s);var d = h[e];if (!d || "_" == e.charAt(0)) return void r(s + " is not a valid method");var l = d.apply(h, o);n = void 0 === n ? l : n;
            }), void 0 !== n ? n : t;
        }function h(t, e) {
            t.each(function (t, o) {
                var n = a.data(o, i);n ? (n.option(e), n._init()) : (n = new s(o, e), a.data(o, i, n));
            });
        }a = a || e || t.jQuery, a && (s.prototype.option || (s.prototype.option = function (t) {
            a.isPlainObject(t) && (this.options = a.extend(!0, this.options, t));
        }), a.fn[i] = function (t) {
            if ("string" == typeof t) {
                var e = n.call(arguments, 1);return u(this, t, e);
            }return h(this, t), this;
        }, o(a));
    }function o(t) {
        !t || t && t.bridget || (t.bridget = i);
    }var n = Array.prototype.slice,
        s = t.console,
        r = "undefined" == typeof s ? function () {} : function (t) {
        s.error(t);
    };return o(e || t.jQuery), i;
}), function (t, e) {
    "function" == typeof define && define.amd ? define("ev-emitter/ev-emitter", e) : "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports ? module.exports = e() : t.EvEmitter = e();
}("undefined" != typeof window ? window : undefined, function () {
    function t() {}var e = t.prototype;return e.on = function (t, e) {
        if (t && e) {
            var i = this._events = this._events || {},
                o = i[t] = i[t] || [];return o.indexOf(e) == -1 && o.push(e), this;
        }
    }, e.once = function (t, e) {
        if (t && e) {
            this.on(t, e);var i = this._onceEvents = this._onceEvents || {},
                o = i[t] = i[t] || {};return o[e] = !0, this;
        }
    }, e.off = function (t, e) {
        var i = this._events && this._events[t];if (i && i.length) {
            var o = i.indexOf(e);return o != -1 && i.splice(o, 1), this;
        }
    }, e.emitEvent = function (t, e) {
        var i = this._events && this._events[t];if (i && i.length) {
            i = i.slice(0), e = e || [];for (var o = this._onceEvents && this._onceEvents[t], n = 0; n < i.length; n++) {
                var s = i[n],
                    r = o && o[s];r && (this.off(t, s), delete o[s]), s.apply(this, e);
            }return this;
        }
    }, e.allOff = function () {
        delete this._events, delete this._onceEvents;
    }, t;
}), function (t, e) {
    "function" == typeof define && define.amd ? define("get-size/get-size", e) : "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports ? module.exports = e() : t.getSize = e();
}(window, function () {
    "use strict";
    function t(t) {
        var e = parseFloat(t),
            i = t.indexOf("%") == -1 && !isNaN(e);return i && e;
    }function e() {}function i() {
        for (var t = { width: 0, height: 0, innerWidth: 0, innerHeight: 0, outerWidth: 0, outerHeight: 0 }, e = 0; e < h; e++) {
            var i = u[e];t[i] = 0;
        }return t;
    }function o(t) {
        var e = getComputedStyle(t);return e || a("Style returned " + e + ". Are you running this code in a hidden iframe on Firefox? See https://bit.ly/getsizebug1"), e;
    }function n() {
        if (!d) {
            d = !0;var e = document.createElement("div");e.style.width = "200px", e.style.padding = "1px 2px 3px 4px", e.style.borderStyle = "solid", e.style.borderWidth = "1px 2px 3px 4px", e.style.boxSizing = "border-box";var i = document.body || document.documentElement;i.appendChild(e);var n = o(e);r = 200 == Math.round(t(n.width)), s.isBoxSizeOuter = r, i.removeChild(e);
        }
    }function s(e) {
        if (n(), "string" == typeof e && (e = document.querySelector(e)), e && "object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) && e.nodeType) {
            var s = o(e);if ("none" == s.display) return i();var a = {};a.width = e.offsetWidth, a.height = e.offsetHeight;for (var d = a.isBorderBox = "border-box" == s.boxSizing, l = 0; l < h; l++) {
                var f = u[l],
                    c = s[f],
                    m = parseFloat(c);a[f] = isNaN(m) ? 0 : m;
            }var p = a.paddingLeft + a.paddingRight,
                y = a.paddingTop + a.paddingBottom,
                g = a.marginLeft + a.marginRight,
                v = a.marginTop + a.marginBottom,
                _ = a.borderLeftWidth + a.borderRightWidth,
                z = a.borderTopWidth + a.borderBottomWidth,
                I = d && r,
                x = t(s.width);x !== !1 && (a.width = x + (I ? 0 : p + _));var S = t(s.height);return S !== !1 && (a.height = S + (I ? 0 : y + z)), a.innerWidth = a.width - (p + _), a.innerHeight = a.height - (y + z), a.outerWidth = a.width + g, a.outerHeight = a.height + v, a;
        }
    }var r,
        a = "undefined" == typeof console ? e : function (t) {
        console.error(t);
    },
        u = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"],
        h = u.length,
        d = !1;return s;
}), function (t, e) {
    "use strict";
    "function" == typeof define && define.amd ? define("desandro-matches-selector/matches-selector", e) : "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports ? module.exports = e() : t.matchesSelector = e();
}(window, function () {
    "use strict";
    var t = function () {
        var t = window.Element.prototype;if (t.matches) return "matches";if (t.matchesSelector) return "matchesSelector";for (var e = ["webkit", "moz", "ms", "o"], i = 0; i < e.length; i++) {
            var o = e[i],
                n = o + "MatchesSelector";if (t[n]) return n;
        }
    }();return function (e, i) {
        return e[t](i);
    };
}), function (t, e) {
    "function" == typeof define && define.amd ? define("fizzy-ui-utils/utils", ["desandro-matches-selector/matches-selector"], function (i) {
        return e(t, i);
    }) : "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports ? module.exports = e(t, require("desandro-matches-selector")) : t.fizzyUIUtils = e(t, t.matchesSelector);
}(window, function (t, e) {
    var i = {};i.extend = function (t, e) {
        for (var i in e) {
            t[i] = e[i];
        }return t;
    }, i.modulo = function (t, e) {
        return (t % e + e) % e;
    };var o = Array.prototype.slice;i.makeArray = function (t) {
        if (Array.isArray(t)) return t;if (null === t || void 0 === t) return [];var e = "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) && "number" == typeof t.length;return e ? o.call(t) : [t];
    }, i.removeFrom = function (t, e) {
        var i = t.indexOf(e);i != -1 && t.splice(i, 1);
    }, i.getParent = function (t, i) {
        for (; t.parentNode && t != document.body;) {
            if (t = t.parentNode, e(t, i)) return t;
        }
    }, i.getQueryElement = function (t) {
        return "string" == typeof t ? document.querySelector(t) : t;
    }, i.handleEvent = function (t) {
        var e = "on" + t.type;this[e] && this[e](t);
    }, i.filterFindElements = function (t, o) {
        t = i.makeArray(t);var n = [];return t.forEach(function (t) {
            if (t instanceof HTMLElement) {
                if (!o) return void n.push(t);e(t, o) && n.push(t);for (var i = t.querySelectorAll(o), s = 0; s < i.length; s++) {
                    n.push(i[s]);
                }
            }
        }), n;
    }, i.debounceMethod = function (t, e, i) {
        i = i || 100;var o = t.prototype[e],
            n = e + "Timeout";t.prototype[e] = function () {
            var t = this[n];clearTimeout(t);var e = arguments,
                s = this;this[n] = setTimeout(function () {
                o.apply(s, e), delete s[n];
            }, i);
        };
    }, i.docReady = function (t) {
        var e = document.readyState;"complete" == e || "interactive" == e ? setTimeout(t) : document.addEventListener("DOMContentLoaded", t);
    }, i.toDashed = function (t) {
        return t.replace(/(.)([A-Z])/g, function (t, e, i) {
            return e + "-" + i;
        }).toLowerCase();
    };var n = t.console;return i.htmlInit = function (e, o) {
        i.docReady(function () {
            var s = i.toDashed(o),
                r = "data-" + s,
                a = document.querySelectorAll("[" + r + "]"),
                u = document.querySelectorAll(".js-" + s),
                h = i.makeArray(a).concat(i.makeArray(u)),
                d = r + "-options",
                l = t.jQuery;h.forEach(function (t) {
                var i,
                    s = t.getAttribute(r) || t.getAttribute(d);try {
                    i = s && JSON.parse(s);
                } catch (a) {
                    return void (n && n.error("Error parsing " + r + " on " + t.className + ": " + a));
                }var u = new e(t, i);l && l.data(t, o, u);
            });
        });
    }, i;
}), function (t, e) {
    "function" == typeof define && define.amd ? define("outlayer/item", ["ev-emitter/ev-emitter", "get-size/get-size"], e) : "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports ? module.exports = e(require("ev-emitter"), require("get-size")) : (t.Outlayer = {}, t.Outlayer.Item = e(t.EvEmitter, t.getSize));
}(window, function (t, e) {
    "use strict";
    function i(t) {
        for (var e in t) {
            return !1;
        }return e = null, !0;
    }function o(t, e) {
        t && (this.element = t, this.layout = e, this.position = { x: 0, y: 0 }, this._create());
    }function n(t) {
        return t.replace(/([A-Z])/g, function (t) {
            return "-" + t.toLowerCase();
        });
    }var s = document.documentElement.style,
        r = "string" == typeof s.transition ? "transition" : "WebkitTransition",
        a = "string" == typeof s.transform ? "transform" : "WebkitTransform",
        u = { WebkitTransition: "webkitTransitionEnd", transition: "transitionend" }[r],
        h = { transform: a, transition: r, transitionDuration: r + "Duration", transitionProperty: r + "Property", transitionDelay: r + "Delay" },
        d = o.prototype = Object.create(t.prototype);d.constructor = o, d._create = function () {
        this._transn = { ingProperties: {}, clean: {}, onEnd: {} }, this.css({ position: "absolute" });
    }, d.handleEvent = function (t) {
        var e = "on" + t.type;this[e] && this[e](t);
    }, d.getSize = function () {
        this.size = e(this.element);
    }, d.css = function (t) {
        var e = this.element.style;for (var i in t) {
            var o = h[i] || i;e[o] = t[i];
        }
    }, d.getPosition = function () {
        var t = getComputedStyle(this.element),
            e = this.layout._getOption("originLeft"),
            i = this.layout._getOption("originTop"),
            o = t[e ? "left" : "right"],
            n = t[i ? "top" : "bottom"],
            s = parseFloat(o),
            r = parseFloat(n),
            a = this.layout.size;o.indexOf("%") != -1 && (s = s / 100 * a.width), n.indexOf("%") != -1 && (r = r / 100 * a.height), s = isNaN(s) ? 0 : s, r = isNaN(r) ? 0 : r, s -= e ? a.paddingLeft : a.paddingRight, r -= i ? a.paddingTop : a.paddingBottom, this.position.x = s, this.position.y = r;
    }, d.layoutPosition = function () {
        var t = this.layout.size,
            e = {},
            i = this.layout._getOption("originLeft"),
            o = this.layout._getOption("originTop"),
            n = i ? "paddingLeft" : "paddingRight",
            s = i ? "left" : "right",
            r = i ? "right" : "left",
            a = this.position.x + t[n];e[s] = this.getXValue(a), e[r] = "";var u = o ? "paddingTop" : "paddingBottom",
            h = o ? "top" : "bottom",
            d = o ? "bottom" : "top",
            l = this.position.y + t[u];e[h] = this.getYValue(l), e[d] = "", this.css(e), this.emitEvent("layout", [this]);
    }, d.getXValue = function (t) {
        var e = this.layout._getOption("horizontal");return this.layout.options.percentPosition && !e ? t / this.layout.size.width * 100 + "%" : t + "px";
    }, d.getYValue = function (t) {
        var e = this.layout._getOption("horizontal");return this.layout.options.percentPosition && e ? t / this.layout.size.height * 100 + "%" : t + "px";
    }, d._transitionTo = function (t, e) {
        this.getPosition();var i = this.position.x,
            o = this.position.y,
            n = t == this.position.x && e == this.position.y;if (this.setPosition(t, e), n && !this.isTransitioning) return void this.layoutPosition();var s = t - i,
            r = e - o,
            a = {};a.transform = this.getTranslate(s, r), this.transition({ to: a, onTransitionEnd: { transform: this.layoutPosition }, isCleaning: !0 });
    }, d.getTranslate = function (t, e) {
        var i = this.layout._getOption("originLeft"),
            o = this.layout._getOption("originTop");return t = i ? t : -t, e = o ? e : -e, "translate3d(" + t + "px, " + e + "px, 0)";
    }, d.goTo = function (t, e) {
        this.setPosition(t, e), this.layoutPosition();
    }, d.moveTo = d._transitionTo, d.setPosition = function (t, e) {
        this.position.x = parseFloat(t), this.position.y = parseFloat(e);
    }, d._nonTransition = function (t) {
        this.css(t.to), t.isCleaning && this._removeStyles(t.to);for (var e in t.onTransitionEnd) {
            t.onTransitionEnd[e].call(this);
        }
    }, d.transition = function (t) {
        if (!parseFloat(this.layout.options.transitionDuration)) return void this._nonTransition(t);var e = this._transn;for (var i in t.onTransitionEnd) {
            e.onEnd[i] = t.onTransitionEnd[i];
        }for (i in t.to) {
            e.ingProperties[i] = !0, t.isCleaning && (e.clean[i] = !0);
        }if (t.from) {
            this.css(t.from);var o = this.element.offsetHeight;o = null;
        }this.enableTransition(t.to), this.css(t.to), this.isTransitioning = !0;
    };var l = "opacity," + n(a);d.enableTransition = function () {
        if (!this.isTransitioning) {
            var t = this.layout.options.transitionDuration;t = "number" == typeof t ? t + "ms" : t, this.css({ transitionProperty: l, transitionDuration: t, transitionDelay: this.staggerDelay || 0 }), this.element.addEventListener(u, this, !1);
        }
    }, d.onwebkitTransitionEnd = function (t) {
        this.ontransitionend(t);
    }, d.onotransitionend = function (t) {
        this.ontransitionend(t);
    };var f = { "-webkit-transform": "transform" };d.ontransitionend = function (t) {
        if (t.target === this.element) {
            var e = this._transn,
                o = f[t.propertyName] || t.propertyName;if (delete e.ingProperties[o], i(e.ingProperties) && this.disableTransition(), o in e.clean && (this.element.style[t.propertyName] = "", delete e.clean[o]), o in e.onEnd) {
                var n = e.onEnd[o];n.call(this), delete e.onEnd[o];
            }this.emitEvent("transitionEnd", [this]);
        }
    }, d.disableTransition = function () {
        this.removeTransitionStyles(), this.element.removeEventListener(u, this, !1), this.isTransitioning = !1;
    }, d._removeStyles = function (t) {
        var e = {};for (var i in t) {
            e[i] = "";
        }this.css(e);
    };var c = { transitionProperty: "", transitionDuration: "", transitionDelay: "" };return d.removeTransitionStyles = function () {
        this.css(c);
    }, d.stagger = function (t) {
        t = isNaN(t) ? 0 : t, this.staggerDelay = t + "ms";
    }, d.removeElem = function () {
        this.element.parentNode.removeChild(this.element), this.css({ display: "" }), this.emitEvent("remove", [this]);
    }, d.remove = function () {
        return r && parseFloat(this.layout.options.transitionDuration) ? (this.once("transitionEnd", function () {
            this.removeElem();
        }), void this.hide()) : void this.removeElem();
    }, d.reveal = function () {
        delete this.isHidden, this.css({ display: "" });var t = this.layout.options,
            e = {},
            i = this.getHideRevealTransitionEndProperty("visibleStyle");e[i] = this.onRevealTransitionEnd, this.transition({ from: t.hiddenStyle, to: t.visibleStyle, isCleaning: !0, onTransitionEnd: e });
    }, d.onRevealTransitionEnd = function () {
        this.isHidden || this.emitEvent("reveal");
    }, d.getHideRevealTransitionEndProperty = function (t) {
        var e = this.layout.options[t];if (e.opacity) return "opacity";for (var i in e) {
            return i;
        }
    }, d.hide = function () {
        this.isHidden = !0, this.css({ display: "" });var t = this.layout.options,
            e = {},
            i = this.getHideRevealTransitionEndProperty("hiddenStyle");e[i] = this.onHideTransitionEnd, this.transition({ from: t.visibleStyle, to: t.hiddenStyle, isCleaning: !0, onTransitionEnd: e });
    }, d.onHideTransitionEnd = function () {
        this.isHidden && (this.css({ display: "none" }), this.emitEvent("hide"));
    }, d.destroy = function () {
        this.css({ position: "", left: "", right: "", top: "", bottom: "", transition: "", transform: "" });
    }, o;
}), function (t, e) {
    "use strict";
    "function" == typeof define && define.amd ? define("outlayer/outlayer", ["ev-emitter/ev-emitter", "get-size/get-size", "fizzy-ui-utils/utils", "./item"], function (i, o, n, s) {
        return e(t, i, o, n, s);
    }) : "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports ? module.exports = e(t, require("ev-emitter"), require("get-size"), require("fizzy-ui-utils"), require("./item")) : t.Outlayer = e(t, t.EvEmitter, t.getSize, t.fizzyUIUtils, t.Outlayer.Item);
}(window, function (t, e, i, o, n) {
    "use strict";
    function s(t, e) {
        var i = o.getQueryElement(t);if (!i) return void (u && u.error("Bad element for " + this.constructor.namespace + ": " + (i || t)));this.element = i, h && (this.$element = h(this.element)), this.options = o.extend({}, this.constructor.defaults), this.option(e);var n = ++l;this.element.outlayerGUID = n, f[n] = this, this._create();var s = this._getOption("initLayout");s && this.layout();
    }function r(t) {
        function e() {
            t.apply(this, arguments);
        }return e.prototype = Object.create(t.prototype), e.prototype.constructor = e, e;
    }function a(t) {
        if ("number" == typeof t) return t;var e = t.match(/(^\d*\.?\d*)(\w*)/),
            i = e && e[1],
            o = e && e[2];if (!i.length) return 0;i = parseFloat(i);var n = m[o] || 1;return i * n;
    }var u = t.console,
        h = t.jQuery,
        d = function d() {},
        l = 0,
        f = {};s.namespace = "outlayer", s.Item = n, s.defaults = { containerStyle: { position: "relative" }, initLayout: !0, originLeft: !0, originTop: !0, resize: !0, resizeContainer: !0, transitionDuration: "0.4s", hiddenStyle: { opacity: 0, transform: "scale(0.001)" }, visibleStyle: { opacity: 1, transform: "scale(1)" } };var c = s.prototype;o.extend(c, e.prototype), c.option = function (t) {
        o.extend(this.options, t);
    }, c._getOption = function (t) {
        var e = this.constructor.compatOptions[t];return e && void 0 !== this.options[e] ? this.options[e] : this.options[t];
    }, s.compatOptions = { initLayout: "isInitLayout", horizontal: "isHorizontal", layoutInstant: "isLayoutInstant", originLeft: "isOriginLeft", originTop: "isOriginTop", resize: "isResizeBound", resizeContainer: "isResizingContainer" }, c._create = function () {
        this.reloadItems(), this.stamps = [], this.stamp(this.options.stamp), o.extend(this.element.style, this.options.containerStyle);var t = this._getOption("resize");t && this.bindResize();
    }, c.reloadItems = function () {
        this.items = this._itemize(this.element.children);
    }, c._itemize = function (t) {
        for (var e = this._filterFindItemElements(t), i = this.constructor.Item, o = [], n = 0; n < e.length; n++) {
            var s = e[n],
                r = new i(s, this);o.push(r);
        }return o;
    }, c._filterFindItemElements = function (t) {
        return o.filterFindElements(t, this.options.itemSelector);
    }, c.getItemElements = function () {
        return this.items.map(function (t) {
            return t.element;
        });
    }, c.layout = function () {
        this._resetLayout(), this._manageStamps();var t = this._getOption("layoutInstant"),
            e = void 0 !== t ? t : !this._isLayoutInited;this.layoutItems(this.items, e), this._isLayoutInited = !0;
    }, c._init = c.layout, c._resetLayout = function () {
        this.getSize();
    }, c.getSize = function () {
        this.size = i(this.element);
    }, c._getMeasurement = function (t, e) {
        var o,
            n = this.options[t];n ? ("string" == typeof n ? o = this.element.querySelector(n) : n instanceof HTMLElement && (o = n), this[t] = o ? i(o)[e] : n) : this[t] = 0;
    }, c.layoutItems = function (t, e) {
        t = this._getItemsForLayout(t), this._layoutItems(t, e), this._postLayout();
    }, c._getItemsForLayout = function (t) {
        return t.filter(function (t) {
            return !t.isIgnored;
        });
    }, c._layoutItems = function (t, e) {
        if (this._emitCompleteOnItems("layout", t), t && t.length) {
            var i = [];t.forEach(function (t) {
                var o = this._getItemLayoutPosition(t);o.item = t, o.isInstant = e || t.isLayoutInstant, i.push(o);
            }, this), this._processLayoutQueue(i);
        }
    }, c._getItemLayoutPosition = function () {
        return { x: 0, y: 0 };
    }, c._processLayoutQueue = function (t) {
        this.updateStagger(), t.forEach(function (t, e) {
            this._positionItem(t.item, t.x, t.y, t.isInstant, e);
        }, this);
    }, c.updateStagger = function () {
        var t = this.options.stagger;return null === t || void 0 === t ? void (this.stagger = 0) : (this.stagger = a(t), this.stagger);
    }, c._positionItem = function (t, e, i, o, n) {
        o ? t.goTo(e, i) : (t.stagger(n * this.stagger), t.moveTo(e, i));
    }, c._postLayout = function () {
        this.resizeContainer();
    }, c.resizeContainer = function () {
        var t = this._getOption("resizeContainer");if (t) {
            var e = this._getContainerSize();e && (this._setContainerMeasure(e.width, !0), this._setContainerMeasure(e.height, !1));
        }
    }, c._getContainerSize = d, c._setContainerMeasure = function (t, e) {
        if (void 0 !== t) {
            var i = this.size;i.isBorderBox && (t += e ? i.paddingLeft + i.paddingRight + i.borderLeftWidth + i.borderRightWidth : i.paddingBottom + i.paddingTop + i.borderTopWidth + i.borderBottomWidth), t = Math.max(t, 0), this.element.style[e ? "width" : "height"] = t + "px";
        }
    }, c._emitCompleteOnItems = function (t, e) {
        function i() {
            n.dispatchEvent(t + "Complete", null, [e]);
        }function o() {
            r++, r == s && i();
        }var n = this,
            s = e.length;if (!e || !s) return void i();var r = 0;e.forEach(function (e) {
            e.once(t, o);
        });
    }, c.dispatchEvent = function (t, e, i) {
        var o = e ? [e].concat(i) : i;if (this.emitEvent(t, o), h) if (this.$element = this.$element || h(this.element), e) {
            var n = h.Event(e);n.type = t, this.$element.trigger(n, i);
        } else this.$element.trigger(t, i);
    }, c.ignore = function (t) {
        var e = this.getItem(t);e && (e.isIgnored = !0);
    }, c.unignore = function (t) {
        var e = this.getItem(t);e && delete e.isIgnored;
    }, c.stamp = function (t) {
        t = this._find(t), t && (this.stamps = this.stamps.concat(t), t.forEach(this.ignore, this));
    }, c.unstamp = function (t) {
        t = this._find(t), t && t.forEach(function (t) {
            o.removeFrom(this.stamps, t), this.unignore(t);
        }, this);
    }, c._find = function (t) {
        if (t) return "string" == typeof t && (t = this.element.querySelectorAll(t)), t = o.makeArray(t);
    }, c._manageStamps = function () {
        this.stamps && this.stamps.length && (this._getBoundingRect(), this.stamps.forEach(this._manageStamp, this));
    }, c._getBoundingRect = function () {
        var t = this.element.getBoundingClientRect(),
            e = this.size;this._boundingRect = { left: t.left + e.paddingLeft + e.borderLeftWidth, top: t.top + e.paddingTop + e.borderTopWidth, right: t.right - (e.paddingRight + e.borderRightWidth), bottom: t.bottom - (e.paddingBottom + e.borderBottomWidth) };
    }, c._manageStamp = d, c._getElementOffset = function (t) {
        var e = t.getBoundingClientRect(),
            o = this._boundingRect,
            n = i(t),
            s = { left: e.left - o.left - n.marginLeft, top: e.top - o.top - n.marginTop, right: o.right - e.right - n.marginRight, bottom: o.bottom - e.bottom - n.marginBottom };return s;
    }, c.handleEvent = o.handleEvent, c.bindResize = function () {
        t.addEventListener("resize", this), this.isResizeBound = !0;
    }, c.unbindResize = function () {
        t.removeEventListener("resize", this), this.isResizeBound = !1;
    }, c.onresize = function () {
        this.resize();
    }, o.debounceMethod(s, "onresize", 100), c.resize = function () {
        this.isResizeBound && this.needsResizeLayout() && this.layout();
    }, c.needsResizeLayout = function () {
        var t = i(this.element),
            e = this.size && t;return e && t.innerWidth !== this.size.innerWidth;
    }, c.addItems = function (t) {
        var e = this._itemize(t);return e.length && (this.items = this.items.concat(e)), e;
    }, c.appended = function (t) {
        var e = this.addItems(t);e.length && (this.layoutItems(e, !0), this.reveal(e));
    }, c.prepended = function (t) {
        var e = this._itemize(t);if (e.length) {
            var i = this.items.slice(0);this.items = e.concat(i), this._resetLayout(), this._manageStamps(), this.layoutItems(e, !0), this.reveal(e), this.layoutItems(i);
        }
    }, c.reveal = function (t) {
        if (this._emitCompleteOnItems("reveal", t), t && t.length) {
            var e = this.updateStagger();t.forEach(function (t, i) {
                t.stagger(i * e), t.reveal();
            });
        }
    }, c.hide = function (t) {
        if (this._emitCompleteOnItems("hide", t), t && t.length) {
            var e = this.updateStagger();t.forEach(function (t, i) {
                t.stagger(i * e), t.hide();
            });
        }
    }, c.revealItemElements = function (t) {
        var e = this.getItems(t);this.reveal(e);
    }, c.hideItemElements = function (t) {
        var e = this.getItems(t);this.hide(e);
    }, c.getItem = function (t) {
        for (var e = 0; e < this.items.length; e++) {
            var i = this.items[e];if (i.element == t) return i;
        }
    }, c.getItems = function (t) {
        t = o.makeArray(t);var e = [];return t.forEach(function (t) {
            var i = this.getItem(t);i && e.push(i);
        }, this), e;
    }, c.remove = function (t) {
        var e = this.getItems(t);this._emitCompleteOnItems("remove", e), e && e.length && e.forEach(function (t) {
            t.remove(), o.removeFrom(this.items, t);
        }, this);
    }, c.destroy = function () {
        var t = this.element.style;t.height = "", t.position = "", t.width = "", this.items.forEach(function (t) {
            t.destroy();
        }), this.unbindResize();var e = this.element.outlayerGUID;delete f[e], delete this.element.outlayerGUID, h && h.removeData(this.element, this.constructor.namespace);
    }, s.data = function (t) {
        t = o.getQueryElement(t);var e = t && t.outlayerGUID;return e && f[e];
    }, s.create = function (t, e) {
        var i = r(s);return i.defaults = o.extend({}, s.defaults), o.extend(i.defaults, e), i.compatOptions = o.extend({}, s.compatOptions), i.namespace = t, i.data = s.data, i.Item = r(n), o.htmlInit(i, t), h && h.bridget && h.bridget(t, i), i;
    };var m = { ms: 1, s: 1e3 };return s.Item = n, s;
}), function (t, e) {
    "function" == typeof define && define.amd ? define("isotope-layout/js/item", ["outlayer/outlayer"], e) : "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports ? module.exports = e(require("outlayer")) : (t.Isotope = t.Isotope || {}, t.Isotope.Item = e(t.Outlayer));
}(window, function (t) {
    "use strict";
    function e() {
        t.Item.apply(this, arguments);
    }var i = e.prototype = Object.create(t.Item.prototype),
        o = i._create;i._create = function () {
        this.id = this.layout.itemGUID++, o.call(this), this.sortData = {};
    }, i.updateSortData = function () {
        if (!this.isIgnored) {
            this.sortData.id = this.id, this.sortData["original-order"] = this.id, this.sortData.random = Math.random();var t = this.layout.options.getSortData,
                e = this.layout._sorters;for (var i in t) {
                var o = e[i];this.sortData[i] = o(this.element, this);
            }
        }
    };var n = i.destroy;return i.destroy = function () {
        n.apply(this, arguments), this.css({ display: "" });
    }, e;
}), function (t, e) {
    "function" == typeof define && define.amd ? define("isotope-layout/js/layout-mode", ["get-size/get-size", "outlayer/outlayer"], e) : "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports ? module.exports = e(require("get-size"), require("outlayer")) : (t.Isotope = t.Isotope || {}, t.Isotope.LayoutMode = e(t.getSize, t.Outlayer));
}(window, function (t, e) {
    "use strict";
    function i(t) {
        this.isotope = t, t && (this.options = t.options[this.namespace], this.element = t.element, this.items = t.filteredItems, this.size = t.size);
    }var o = i.prototype,
        n = ["_resetLayout", "_getItemLayoutPosition", "_manageStamp", "_getContainerSize", "_getElementOffset", "needsResizeLayout", "_getOption"];return n.forEach(function (t) {
        o[t] = function () {
            return e.prototype[t].apply(this.isotope, arguments);
        };
    }), o.needsVerticalResizeLayout = function () {
        var e = t(this.isotope.element),
            i = this.isotope.size && e;return i && e.innerHeight != this.isotope.size.innerHeight;
    }, o._getMeasurement = function () {
        this.isotope._getMeasurement.apply(this, arguments);
    }, o.getColumnWidth = function () {
        this.getSegmentSize("column", "Width");
    }, o.getRowHeight = function () {
        this.getSegmentSize("row", "Height");
    }, o.getSegmentSize = function (t, e) {
        var i = t + e,
            o = "outer" + e;if (this._getMeasurement(i, o), !this[i]) {
            var n = this.getFirstItemSize();this[i] = n && n[o] || this.isotope.size["inner" + e];
        }
    }, o.getFirstItemSize = function () {
        var e = this.isotope.filteredItems[0];return e && e.element && t(e.element);
    }, o.layout = function () {
        this.isotope.layout.apply(this.isotope, arguments);
    }, o.getSize = function () {
        this.isotope.getSize(), this.size = this.isotope.size;
    }, i.modes = {}, i.create = function (t, e) {
        function n() {
            i.apply(this, arguments);
        }return n.prototype = Object.create(o), n.prototype.constructor = n, e && (n.options = e), n.prototype.namespace = t, i.modes[t] = n, n;
    }, i;
}), function (t, e) {
    "function" == typeof define && define.amd ? define("masonry-layout/masonry", ["outlayer/outlayer", "get-size/get-size"], e) : "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports ? module.exports = e(require("outlayer"), require("get-size")) : t.Masonry = e(t.Outlayer, t.getSize);
}(window, function (t, e) {
    var i = t.create("masonry");i.compatOptions.fitWidth = "isFitWidth";var o = i.prototype;return o._resetLayout = function () {
        this.getSize(), this._getMeasurement("columnWidth", "outerWidth"), this._getMeasurement("gutter", "outerWidth"), this.measureColumns(), this.colYs = [];for (var t = 0; t < this.cols; t++) {
            this.colYs.push(0);
        }this.maxY = 0, this.horizontalColIndex = 0;
    }, o.measureColumns = function () {
        if (this.getContainerWidth(), !this.columnWidth) {
            var t = this.items[0],
                i = t && t.element;this.columnWidth = i && e(i).outerWidth || this.containerWidth;
        }var o = this.columnWidth += this.gutter,
            n = this.containerWidth + this.gutter,
            s = n / o,
            r = o - n % o,
            a = r && r < 1 ? "round" : "floor";s = Math[a](s), this.cols = Math.max(s, 1);
    }, o.getContainerWidth = function () {
        var t = this._getOption("fitWidth"),
            i = t ? this.element.parentNode : this.element,
            o = e(i);this.containerWidth = o && o.innerWidth;
    }, o._getItemLayoutPosition = function (t) {
        t.getSize();var e = t.size.outerWidth % this.columnWidth,
            i = e && e < 1 ? "round" : "ceil",
            o = Math[i](t.size.outerWidth / this.columnWidth);o = Math.min(o, this.cols);for (var n = this.options.horizontalOrder ? "_getHorizontalColPosition" : "_getTopColPosition", s = this[n](o, t), r = { x: this.columnWidth * s.col, y: s.y }, a = s.y + t.size.outerHeight, u = o + s.col, h = s.col; h < u; h++) {
            this.colYs[h] = a;
        }return r;
    }, o._getTopColPosition = function (t) {
        var e = this._getTopColGroup(t),
            i = Math.min.apply(Math, e);return { col: e.indexOf(i), y: i };
    }, o._getTopColGroup = function (t) {
        if (t < 2) return this.colYs;for (var e = [], i = this.cols + 1 - t, o = 0; o < i; o++) {
            e[o] = this._getColGroupY(o, t);
        }return e;
    }, o._getColGroupY = function (t, e) {
        if (e < 2) return this.colYs[t];var i = this.colYs.slice(t, t + e);return Math.max.apply(Math, i);
    }, o._getHorizontalColPosition = function (t, e) {
        var i = this.horizontalColIndex % this.cols,
            o = t > 1 && i + t > this.cols;i = o ? 0 : i;var n = e.size.outerWidth && e.size.outerHeight;return this.horizontalColIndex = n ? i + t : this.horizontalColIndex, { col: i, y: this._getColGroupY(i, t) };
    }, o._manageStamp = function (t) {
        var i = e(t),
            o = this._getElementOffset(t),
            n = this._getOption("originLeft"),
            s = n ? o.left : o.right,
            r = s + i.outerWidth,
            a = Math.floor(s / this.columnWidth);a = Math.max(0, a);var u = Math.floor(r / this.columnWidth);u -= r % this.columnWidth ? 0 : 1, u = Math.min(this.cols - 1, u);for (var h = this._getOption("originTop"), d = (h ? o.top : o.bottom) + i.outerHeight, l = a; l <= u; l++) {
            this.colYs[l] = Math.max(d, this.colYs[l]);
        }
    }, o._getContainerSize = function () {
        this.maxY = Math.max.apply(Math, this.colYs);var t = { height: this.maxY };return this._getOption("fitWidth") && (t.width = this._getContainerFitWidth()), t;
    }, o._getContainerFitWidth = function () {
        for (var t = 0, e = this.cols; --e && 0 === this.colYs[e];) {
            t++;
        }return (this.cols - t) * this.columnWidth - this.gutter;
    }, o.needsResizeLayout = function () {
        var t = this.containerWidth;return this.getContainerWidth(), t != this.containerWidth;
    }, i;
}), function (t, e) {
    "function" == typeof define && define.amd ? define("isotope-layout/js/layout-modes/masonry", ["../layout-mode", "masonry-layout/masonry"], e) : "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports ? module.exports = e(require("../layout-mode"), require("masonry-layout")) : e(t.Isotope.LayoutMode, t.Masonry);
}(window, function (t, e) {
    "use strict";
    var i = t.create("masonry"),
        o = i.prototype,
        n = { _getElementOffset: !0, layout: !0, _getMeasurement: !0 };for (var s in e.prototype) {
        n[s] || (o[s] = e.prototype[s]);
    }var r = o.measureColumns;o.measureColumns = function () {
        this.items = this.isotope.filteredItems, r.call(this);
    };var a = o._getOption;return o._getOption = function (t) {
        return "fitWidth" == t ? void 0 !== this.options.isFitWidth ? this.options.isFitWidth : this.options.fitWidth : a.apply(this.isotope, arguments);
    }, i;
}), function (t, e) {
    "function" == typeof define && define.amd ? define("isotope-layout/js/layout-modes/fit-rows", ["../layout-mode"], e) : "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) ? module.exports = e(require("../layout-mode")) : e(t.Isotope.LayoutMode);
}(window, function (t) {
    "use strict";
    var e = t.create("fitRows"),
        i = e.prototype;return i._resetLayout = function () {
        this.x = 0, this.y = 0, this.maxY = 0, this._getMeasurement("gutter", "outerWidth");
    }, i._getItemLayoutPosition = function (t) {
        t.getSize();var e = t.size.outerWidth + this.gutter,
            i = this.isotope.size.innerWidth + this.gutter;0 !== this.x && e + this.x > i && (this.x = 0, this.y = this.maxY);var o = { x: this.x, y: this.y };return this.maxY = Math.max(this.maxY, this.y + t.size.outerHeight), this.x += e, o;
    }, i._getContainerSize = function () {
        return { height: this.maxY };
    }, e;
}), function (t, e) {
    "function" == typeof define && define.amd ? define("isotope-layout/js/layout-modes/vertical", ["../layout-mode"], e) : "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports ? module.exports = e(require("../layout-mode")) : e(t.Isotope.LayoutMode);
}(window, function (t) {
    "use strict";
    var e = t.create("vertical", { horizontalAlignment: 0 }),
        i = e.prototype;return i._resetLayout = function () {
        this.y = 0;
    }, i._getItemLayoutPosition = function (t) {
        t.getSize();var e = (this.isotope.size.innerWidth - t.size.outerWidth) * this.options.horizontalAlignment,
            i = this.y;return this.y += t.size.outerHeight, { x: e, y: i };
    }, i._getContainerSize = function () {
        return { height: this.y };
    }, e;
}), function (t, e) {
    "function" == typeof define && define.amd ? define(["outlayer/outlayer", "get-size/get-size", "desandro-matches-selector/matches-selector", "fizzy-ui-utils/utils", "isotope-layout/js/item", "isotope-layout/js/layout-mode", "isotope-layout/js/layout-modes/masonry", "isotope-layout/js/layout-modes/fit-rows", "isotope-layout/js/layout-modes/vertical"], function (i, o, n, s, r, a) {
        return e(t, i, o, n, s, r, a);
    }) : "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports ? module.exports = e(t, require("outlayer"), require("get-size"), require("desandro-matches-selector"), require("fizzy-ui-utils"), require("isotope-layout/js/item"), require("isotope-layout/js/layout-mode"), require("isotope-layout/js/layout-modes/masonry"), require("isotope-layout/js/layout-modes/fit-rows"), require("isotope-layout/js/layout-modes/vertical")) : t.Isotope = e(t, t.Outlayer, t.getSize, t.matchesSelector, t.fizzyUIUtils, t.Isotope.Item, t.Isotope.LayoutMode);
}(window, function (t, e, i, o, n, s, r) {
    function a(t, e) {
        return function (i, o) {
            for (var n = 0; n < t.length; n++) {
                var s = t[n],
                    r = i.sortData[s],
                    a = o.sortData[s];if (r > a || r < a) {
                    var u = void 0 !== e[s] ? e[s] : e,
                        h = u ? 1 : -1;return (r > a ? 1 : -1) * h;
                }
            }return 0;
        };
    }var u = t.jQuery,
        h = String.prototype.trim ? function (t) {
        return t.trim();
    } : function (t) {
        return t.replace(/^\s+|\s+$/g, "");
    },
        d = e.create("isotope", { layoutMode: "masonry", isJQueryFiltering: !0, sortAscending: !0 });d.Item = s, d.LayoutMode = r;var l = d.prototype;l._create = function () {
        this.itemGUID = 0, this._sorters = {}, this._getSorters(), e.prototype._create.call(this), this.modes = {}, this.filteredItems = this.items, this.sortHistory = ["original-order"];for (var t in r.modes) {
            this._initLayoutMode(t);
        }
    }, l.reloadItems = function () {
        this.itemGUID = 0, e.prototype.reloadItems.call(this);
    }, l._itemize = function () {
        for (var t = e.prototype._itemize.apply(this, arguments), i = 0; i < t.length; i++) {
            var o = t[i];o.id = this.itemGUID++;
        }return this._updateItemsSortData(t), t;
    }, l._initLayoutMode = function (t) {
        var e = r.modes[t],
            i = this.options[t] || {};this.options[t] = e.options ? n.extend(e.options, i) : i, this.modes[t] = new e(this);
    }, l.layout = function () {
        return !this._isLayoutInited && this._getOption("initLayout") ? void this.arrange() : void this._layout();
    }, l._layout = function () {
        var t = this._getIsInstant();this._resetLayout(), this._manageStamps(), this.layoutItems(this.filteredItems, t), this._isLayoutInited = !0;
    }, l.arrange = function (t) {
        this.option(t), this._getIsInstant();var e = this._filter(this.items);this.filteredItems = e.matches, this._bindArrangeComplete(), this._isInstant ? this._noTransition(this._hideReveal, [e]) : this._hideReveal(e), this._sort(), this._layout();
    }, l._init = l.arrange, l._hideReveal = function (t) {
        this.reveal(t.needReveal), this.hide(t.needHide);
    }, l._getIsInstant = function () {
        var t = this._getOption("layoutInstant"),
            e = void 0 !== t ? t : !this._isLayoutInited;return this._isInstant = e, e;
    }, l._bindArrangeComplete = function () {
        function t() {
            e && i && o && n.dispatchEvent("arrangeComplete", null, [n.filteredItems]);
        }var e,
            i,
            o,
            n = this;this.once("layoutComplete", function () {
            e = !0, t();
        }), this.once("hideComplete", function () {
            i = !0, t();
        }), this.once("revealComplete", function () {
            o = !0, t();
        });
    }, l._filter = function (t) {
        var e = this.options.filter;e = e || "*";for (var i = [], o = [], n = [], s = this._getFilterTest(e), r = 0; r < t.length; r++) {
            var a = t[r];if (!a.isIgnored) {
                var u = s(a);u && i.push(a), u && a.isHidden ? o.push(a) : u || a.isHidden || n.push(a);
            }
        }return { matches: i, needReveal: o, needHide: n };
    }, l._getFilterTest = function (t) {
        return u && this.options.isJQueryFiltering ? function (e) {
            return u(e.element).is(t);
        } : "function" == typeof t ? function (e) {
            return t(e.element);
        } : function (e) {
            return o(e.element, t);
        };
    }, l.updateSortData = function (t) {
        var e;t ? (t = n.makeArray(t), e = this.getItems(t)) : e = this.items, this._getSorters(), this._updateItemsSortData(e);
    }, l._getSorters = function () {
        var t = this.options.getSortData;for (var e in t) {
            var i = t[e];this._sorters[e] = f(i);
        }
    }, l._updateItemsSortData = function (t) {
        for (var e = t && t.length, i = 0; e && i < e; i++) {
            var o = t[i];o.updateSortData();
        }
    };var f = function () {
        function t(t) {
            if ("string" != typeof t) return t;var i = h(t).split(" "),
                o = i[0],
                n = o.match(/^\[(.+)\]$/),
                s = n && n[1],
                r = e(s, o),
                a = d.sortDataParsers[i[1]];return t = a ? function (t) {
                return t && a(r(t));
            } : function (t) {
                return t && r(t);
            };
        }function e(t, e) {
            return t ? function (e) {
                return e.getAttribute(t);
            } : function (t) {
                var i = t.querySelector(e);return i && i.textContent;
            };
        }return t;
    }();d.sortDataParsers = { parseInt: function (_parseInt) {
            function parseInt(_x) {
                return _parseInt.apply(this, arguments);
            }

            parseInt.toString = function () {
                return _parseInt.toString();
            };

            return parseInt;
        }(function (t) {
            return parseInt(t, 10);
        }), parseFloat: function (_parseFloat) {
            function parseFloat(_x2) {
                return _parseFloat.apply(this, arguments);
            }

            parseFloat.toString = function () {
                return _parseFloat.toString();
            };

            return parseFloat;
        }(function (t) {
            return parseFloat(t);
        }) }, l._sort = function () {
        if (this.options.sortBy) {
            var t = n.makeArray(this.options.sortBy);this._getIsSameSortBy(t) || (this.sortHistory = t.concat(this.sortHistory));var e = a(this.sortHistory, this.options.sortAscending);this.filteredItems.sort(e);
        }
    }, l._getIsSameSortBy = function (t) {
        for (var e = 0; e < t.length; e++) {
            if (t[e] != this.sortHistory[e]) return !1;
        }return !0;
    }, l._mode = function () {
        var t = this.options.layoutMode,
            e = this.modes[t];if (!e) throw new Error("No layout mode: " + t);return e.options = this.options[t], e;
    }, l._resetLayout = function () {
        e.prototype._resetLayout.call(this), this._mode()._resetLayout();
    }, l._getItemLayoutPosition = function (t) {
        return this._mode()._getItemLayoutPosition(t);
    }, l._manageStamp = function (t) {
        this._mode()._manageStamp(t);
    }, l._getContainerSize = function () {
        return this._mode()._getContainerSize();
    }, l.needsResizeLayout = function () {
        return this._mode().needsResizeLayout();
    }, l.appended = function (t) {
        var e = this.addItems(t);if (e.length) {
            var i = this._filterRevealAdded(e);this.filteredItems = this.filteredItems.concat(i);
        }
    }, l.prepended = function (t) {
        var e = this._itemize(t);if (e.length) {
            this._resetLayout(), this._manageStamps();var i = this._filterRevealAdded(e);this.layoutItems(this.filteredItems), this.filteredItems = i.concat(this.filteredItems), this.items = e.concat(this.items);
        }
    }, l._filterRevealAdded = function (t) {
        var e = this._filter(t);return this.hide(e.needHide), this.reveal(e.matches), this.layoutItems(e.matches, !0), e.matches;
    }, l.insert = function (t) {
        var e = this.addItems(t);if (e.length) {
            var i,
                o,
                n = e.length;for (i = 0; i < n; i++) {
                o = e[i], this.element.appendChild(o.element);
            }var s = this._filter(e).matches;for (i = 0; i < n; i++) {
                e[i].isLayoutInstant = !0;
            }for (this.arrange(), i = 0; i < n; i++) {
                delete e[i].isLayoutInstant;
            }this.reveal(s);
        }
    };var c = l.remove;return l.remove = function (t) {
        t = n.makeArray(t);var e = this.getItems(t);c.call(this, t);for (var i = e && e.length, o = 0; i && o < i; o++) {
            var s = e[o];n.removeFrom(this.filteredItems, s);
        }
    }, l.shuffle = function () {
        for (var t = 0; t < this.items.length; t++) {
            var e = this.items[t];e.sortData.random = Math.random();
        }this.options.sortBy = "random", this._sort(), this._layout();
    }, l._noTransition = function (t, e) {
        var i = this.options.transitionDuration;this.options.transitionDuration = 0;var o = t.apply(this, e);return this.options.transitionDuration = i, o;
    }, l.getFilteredItemElements = function () {
        return this.filteredItems.map(function (t) {
            return t.element;
        });
    }, d;
});
// Avoid `console` errors in browsers that lack a console.
(function () {
    var method;
    var noop = function noop() {};
    var methods = ['assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error', 'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log', 'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd', 'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'];
    var length = methods.length;
    var console = window.console = window.console || {};

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
})();

function debounce(func, wait, immediate) {
    var timeout;
    return function () {
        var context = this,
            args = arguments;
        var later = function later() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
};

$('#fullpage').fullpage({
    scrollBar: true,
    fitToSection: false,
    autoScrolling: false,
    paddingTop: '0',
    paddingBottom: '0',
    menu: '#menu',
    sectionSelector: '.fp-section',
    bigSectionsDestination: 'top',
    anchors: ['education', 'skills', 'certificates']
});

// hack
$("body").attr("style", "overflow-x: hidden !important; height: initial; overflow-y: visible");

//

var workGrid = document.querySelector('.work-grid');

var workIsotope = new Isotope(workGrid, {
    itemSelector: '.grid-item',
    layoutMode: 'fitRows'
});

// var w = window,
//     d = document,
//     e = d.documentElement,
//     g = d.getElementsByTagName('body')[0],
//     x = w.innerWidth || e.clientWidth || g.clientWidth,
//     y = w.innerHeight|| e.clientHeight|| g.clientHeight;

// // Place any jQuery/helper plugins in here.

var rightColumn = $(".right-column");
var fixedLeftColumn = $("#fixed-left-column");
var gap = $("#gap-between-columns");
var resumeNav = $("#sections-nav");

var lastMobile = false;

function showResumeNavShadow(show) {
    if (show) {
        resumeNav.addClass("show-shadow");
    } else {
        resumeNav.removeClass("show-shadow");
    }
}

function enableResumeNav(enable) {
    if (enable) {
        dropdownIndicator.removeClass("arrow-down");
        dropdownIndicator.addClass("arrow-up");
        resumeNav.addClass("active");
        showResumeNavShadow(true);
    } else {
        dropdownIndicator.removeClass("arrow-up");
        dropdownIndicator.addClass("arrow-down");
        resumeNav.removeClass("active");
        showResumeNavShadow(false);
    }
}

function enableDrawer(enable) {
    if (enable) {
        rightColumn.addClass("slide-to-right");
        gap.addClass("slide-to-right");
        hamburger.addClass("is-active");
    } else {
        rightColumn.removeClass("slide-to-right");
        gap.removeClass("slide-to-right");
        hamburger.removeClass("is-active");
    }
}

function mouseOver() {
    if (window.innerWidth <= 800) return;
    rightColumn.addClass("slide-to-right");
    gap.addClass("slide-to-right");
    lastMobile = false;
}

function mouseOut() {
    if (window.innerWidth <= 800) return;
    rightColumn.removeClass("slide-to-right");
    gap.removeClass("slide-to-right");
    lastMobile = false;
}

function onScroll() {
    if (window.scrollY > 10 && !resumeNav.hasClass("show-shadow")) {
        showResumeNavShadow(true);
    } else if (window.scrollY < 10) {
        showResumeNavShadow(false);
    }
}

onScroll = debounce(onScroll, 100);

$(window).on("scroll", onScroll);

fixedLeftColumn.on("mouseover", mouseOver);
fixedLeftColumn.on("mouseout", mouseOut);

fixedLeftColumn.on("click", function () {
    if (lastMobile) {
        enableDrawer(false);
    }
});

//

var resumeButton = $("li[data-slide='#resume']");
var workButton = $("li[data-slide='#work']");

var resumeSlide = $("#resume-slide");
var workSlide = $("#work-slide");

function changeSlide(toBeShown, toBeHidden, buttonToBeActive, buttonToBeUnactive) {
    if (!toBeShown.hasClass("active-slide")) {
        buttonToBeActive.addClass("active");
        buttonToBeUnactive.removeClass("active");
        toBeHidden.animate({ opacity: 0 }, 250, function () {
            window.scrollTo(0, 0);
            toBeShown.addClass("active-slide");
            toBeHidden.removeClass("active-slide");
            toBeShown.animate({ opacity: 1 }, 250);
        });
    }
}

resumeButton.on("click", function () {
    if (lastMobile) enableDrawer(false);
    changeSlide(resumeSlide, workSlide, resumeButton, workButton);
});

workButton.on("click", function () {
    if (lastMobile) enableDrawer(false);
    changeSlide(workSlide, resumeSlide, workButton, resumeButton);
});

//

var hamburger = $(".hamburger");

hamburger.on("click", function () {
    lastMobile = true;
    if (!hamburger.hasClass("is-active")) {
        enableDrawer(true);
    } else {
        enableDrawer(false);
    }
});

//

var dropdownIndicator = $(".dropdown-indicator");

resumeNav.find("#menu").on("click", function () {
    if (resumeNav.hasClass("active")) enableResumeNav(false);
});

dropdownIndicator.on("click", function () {
    if (!resumeNav.hasClass("active")) {
        enableResumeNav(true);
    } else {
        enableResumeNav(false);
    }
});