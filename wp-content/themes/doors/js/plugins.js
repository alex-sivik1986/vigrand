/*
 * Foundation Responsive Library
 * http://foundation.zurb.com
 * Copyright 2013, ZURB
 * Free to use under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 */
/*jslint unparam: true, browser: true, indent: 2 */
// Accommodate running jQuery or Zepto in noConflict() mode by
// using an anonymous function to redefine the $ shorthand name.
// See http://docs.jquery.com/Using_jQuery_with_Other_Libraries
// and http://zeptojs.com/
! function(a, b, c, d) {
    "use strict";

    function e(a) {
        return ("string" == typeof a || a instanceof String) && (a = a.replace(/^['\\/"]+|(;\s?})+|['\\/"]+$/g, "")), a
    }
    var f = function(b) {
        for (var c = b.length, d = a("head"); c--;) 0 === d.has("." + b[c]).length && d.append('<meta class="' + b[c] + '" />')
    };
    f(["foundation-mq-small", "foundation-mq-small-only", "foundation-mq-medium", "foundation-mq-medium-only", "foundation-mq-large", "foundation-mq-large-only", "foundation-mq-xlarge", "foundation-mq-xlarge-only", "foundation-mq-xxlarge", "foundation-data-attribute-namespace"]), a(function() {
        "undefined" != typeof FastClick && "undefined" != typeof c.body && FastClick.attach(c.body)
    });
    var g = function(b, d) {
            if ("string" == typeof b) {
                if (d) {
                    var e;
                    if (d.jquery) {
                        if (e = d[0], !e) return d
                    } else e = d;
                    return a(e.querySelectorAll(b))
                }
                return a(c.querySelectorAll(b))
            }
            return a(b, d)
        },
        h = function(a) {
            var b = [];
            return a || b.push("data"), this.namespace.length > 0 && b.push(this.namespace), b.push(this.name), b.join("-")
        },
        i = function(a) {
            for (var b = a.split("-"), c = b.length, d = []; c--;) 0 !== c ? d.push(b[c]) : this.namespace.length > 0 ? d.push(this.namespace, b[c]) : d.push(b[c]);
            return d.reverse().join("-")
        },
        j = function(b, c) {
            var d = this,
                e = function() {
                    var e = g(this),
                        f = !e.data(d.attr_name(!0) + "-init");
                    e.data(d.attr_name(!0) + "-init", a.extend({}, d.settings, c || b, d.data_options(e))), f && d.events(this)
                };
            return g(this.scope).is("[" + this.attr_name() + "]") ? e.call(this.scope) : g("[" + this.attr_name() + "]", this.scope).each(e), "string" == typeof b ? this[b].call(this, c) : void 0
        },
        k = function(a, b) {
            function c() {
                b(a[0])
            }

            function d() {
                if (this.one("load", c), /MSIE (\d+\.\d+);/.test(navigator.userAgent)) {
                    var a = this.attr("src"),
                        b = a.match(/\?/) ? "&" : "?";
                    b += "random=" + (new Date).getTime(), this.attr("src", a + b)
                }
            }
            return a.attr("src") ? void(a[0].complete || 4 === a[0].readyState ? c() : d.call(a)) : void c()
        };
    b.matchMedia = b.matchMedia || function(a) {
            var b, c = a.documentElement,
                d = c.firstElementChild || c.firstChild,
                e = a.createElement("body"),
                f = a.createElement("div");
            return f.id = "mq-test-1", f.style.cssText = "position:absolute;top:-100em", e.style.background = "none", e.appendChild(f),
                function(a) {
                    return f.innerHTML = '&shy;<style media="' + a + '"> #mq-test-1 { width: 42px; }</style>', c.insertBefore(e, d), b = 42 === f.offsetWidth, c.removeChild(e), {
                        matches: b,
                        media: a
                    }
                }
        }(c),
        function(a) {
            function c() {
                d && (g(c), i && a.fx.tick())
            }
            for (var d, e = 0, f = ["webkit", "moz"], g = b.requestAnimationFrame, h = b.cancelAnimationFrame, i = "undefined" != typeof a.fx; e < f.length && !g; e++) g = b[f[e] + "RequestAnimationFrame"], h = h || b[f[e] + "CancelAnimationFrame"] || b[f[e] + "CancelRequestAnimationFrame"];
            g ? (b.requestAnimationFrame = g, b.cancelAnimationFrame = h, i && (a.fx.timer = function(b) {
                b() && a.timers.push(b) && !d && (d = !0, c())
            }, a.fx.stop = function() {
                d = !1
            })) : (b.requestAnimationFrame = function(a) {
                var c = (new Date).getTime(),
                    d = Math.max(0, 16 - (c - e)),
                    f = b.setTimeout(function() {
                        a(c + d)
                    }, d);
                return e = c + d, f
            }, b.cancelAnimationFrame = function(a) {
                clearTimeout(a)
            })
        }(a), b.Foundation = {
            name: "Foundation",
            version: "5.5.1",
            media_queries: {
                small: g(".foundation-mq-small").css("font-family").replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g, ""),
                "small-only": g(".foundation-mq-small-only").css("font-family").replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g, ""),
                medium: g(".foundation-mq-medium").css("font-family").replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g, ""),
                "medium-only": g(".foundation-mq-medium-only").css("font-family").replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g, ""),
                large: g(".foundation-mq-large").css("font-family").replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g, ""),
                "large-only": g(".foundation-mq-large-only").css("font-family").replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g, ""),
                xlarge: g(".foundation-mq-xlarge").css("font-family").replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g, ""),
                "xlarge-only": g(".foundation-mq-xlarge-only").css("font-family").replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g, ""),
                xxlarge: g(".foundation-mq-xxlarge").css("font-family").replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g, "")
            },
            stylesheet: a("<style></style>").appendTo("head")[0].sheet,
            global: {
                namespace: d
            },
            init: function(a, c, d, e, f) {
                var h = [a, d, e, f],
                    i = [];
                if (this.rtl = /rtl/i.test(g("html").attr("dir")), this.scope = a || this.scope, this.set_namespace(), c && "string" == typeof c && !/reflow/i.test(c)) this.libs.hasOwnProperty(c) && i.push(this.init_lib(c, h));
                else
                    for (var j in this.libs) i.push(this.init_lib(j, c));
                return g(b).load(function() {
                    g(b).trigger("resize.fndtn.clearing").trigger("resize.fndtn.dropdown").trigger("resize.fndtn.equalizer").trigger("resize.fndtn.interchange").trigger("resize.fndtn.joyride").trigger("resize.fndtn.magellan").trigger("resize.fndtn.topbar").trigger("resize.fndtn.slider")
                }), a
            },
            init_lib: function(b, c) {
                return this.libs.hasOwnProperty(b) ? (this.patch(this.libs[b]), c && c.hasOwnProperty(b) ? ("undefined" != typeof this.libs[b].settings ? a.extend(!0, this.libs[b].settings, c[b]) : "undefined" != typeof this.libs[b].defaults && a.extend(!0, this.libs[b].defaults, c[b]), this.libs[b].init.apply(this.libs[b], [this.scope, c[b]])) : (c = c instanceof Array ? c : new Array(c), this.libs[b].init.apply(this.libs[b], c))) : function() {}
            },
            patch: function(a) {
                a.scope = this.scope, a.namespace = this.global.namespace, a.rtl = this.rtl, a.data_options = this.utils.data_options, a.attr_name = h, a.add_namespace = i, a.bindings = j, a.S = this.utils.S
            },
            inherit: function(a, b) {
                for (var c = b.split(" "), d = c.length; d--;) this.utils.hasOwnProperty(c[d]) && (a[c[d]] = this.utils[c[d]])
            },
            set_namespace: function() {
                var b = this.global.namespace === d ? a(".foundation-data-attribute-namespace").css("font-family") : this.global.namespace;
                this.global.namespace = b === d || /false/i.test(b) ? "" : b
            },
            libs: {},
            utils: {
                S: g,
                throttle: function(a, b) {
                    var c = null;
                    return function() {
                        var d = this,
                            e = arguments;
                        null == c && (c = setTimeout(function() {
                            a.apply(d, e), c = null
                        }, b))
                    }
                },
                debounce: function(a, b, c) {
                    var d, e;
                    return function() {
                        var f = this,
                            g = arguments,
                            h = function() {
                                d = null, c || (e = a.apply(f, g))
                            },
                            i = c && !d;
                        return clearTimeout(d), d = setTimeout(h, b), i && (e = a.apply(f, g)), e
                    }
                },
                data_options: function(b, c) {
                    function d(a) {
                        return !isNaN(a - 0) && null !== a && "" !== a && a !== !1 && a !== !0
                    }

                    function e(b) {
                        return "string" == typeof b ? a.trim(b) : b
                    }
                    c = c || "options";
                    var f, g, h, i = {},
                        j = function(a) {
                            var b = Foundation.global.namespace;
                            return a.data(b.length > 0 ? b + "-" + c : c)
                        },
                        k = j(b);
                    if ("object" == typeof k) return k;
                    for (h = (k || ":").split(";"), f = h.length; f--;) g = h[f].split(":"), g = [g[0], g.slice(1).join(":")], /true/i.test(g[1]) && (g[1] = !0), /false/i.test(g[1]) && (g[1] = !1), d(g[1]) && (g[1] = -1 === g[1].indexOf(".") ? parseInt(g[1], 10) : parseFloat(g[1])), 2 === g.length && g[0].length > 0 && (i[e(g[0])] = e(g[1]));
                    return i
                },
                register_media: function(b, c) {
                    Foundation.media_queries[b] === d && (a("head").append('<meta class="' + c + '"/>'), Foundation.media_queries[b] = e(a("." + c).css("font-family")))
                },
                add_custom_rule: function(a, b) {
                    if (b === d && Foundation.stylesheet) Foundation.stylesheet.insertRule(a, Foundation.stylesheet.cssRules.length);
                    else {
                        var c = Foundation.media_queries[b];
                        c !== d && Foundation.stylesheet.insertRule("@media " + Foundation.media_queries[b] + "{ " + a + " }")
                    }
                },
                image_loaded: function(a, b) {
                    var c = this,
                        d = a.length;
                    0 === d && b(a), a.each(function() {
                        k(c.S(this), function() {
                            d -= 1, 0 === d && b(a)
                        })
                    })
                },
                random_str: function() {
                    return this.fidx || (this.fidx = 0), this.prefix = this.prefix || [this.name || "F", (+new Date).toString(36)].join("-"), this.prefix + (this.fidx++).toString(36)
                },
                match: function(a) {
                    return b.matchMedia(a).matches
                },
                is_small_up: function() {
                    return this.match(Foundation.media_queries.small)
                },
                is_medium_up: function() {
                    return this.match(Foundation.media_queries.medium)
                },
                is_large_up: function() {
                    return this.match(Foundation.media_queries.large)
                },
                is_xlarge_up: function() {
                    return this.match(Foundation.media_queries.xlarge)
                },
                is_xxlarge_up: function() {
                    return this.match(Foundation.media_queries.xxlarge)
                },
                is_small_only: function() {
                    return !(this.is_medium_up() || this.is_large_up() || this.is_xlarge_up() || this.is_xxlarge_up())
                },
                is_medium_only: function() {
                    return this.is_medium_up() && !this.is_large_up() && !this.is_xlarge_up() && !this.is_xxlarge_up()
                },
                is_large_only: function() {
                    return this.is_medium_up() && this.is_large_up() && !this.is_xlarge_up() && !this.is_xxlarge_up()
                },
                is_xlarge_only: function() {
                    return this.is_medium_up() && this.is_large_up() && this.is_xlarge_up() && !this.is_xxlarge_up()
                },
                is_xxlarge_only: function() {
                    return this.is_medium_up() && this.is_large_up() && this.is_xlarge_up() && this.is_xxlarge_up()
                }
            }
        }, a.fn.foundation = function() {
            var a = Array.prototype.slice.call(arguments, 0);
            return this.each(function() {
                return Foundation.init.apply(Foundation, [this].concat(a)), this
            })
        }
}(jQuery, window, window.document),
function(a, b, c) {
    "use strict";
    Foundation.libs.abide = {
        name: "abide",
        version: "5.5.1",
        settings: {
            live_validate: !0,
            validate_on_blur: !0,
            focus_on_invalid: !0,
            error_labels: !0,
            error_class: "error",
            timeout: 1e3,
            patterns: {
                alpha: /^[a-zA-Z]+$/,
                alpha_numeric: /^[a-zA-Z0-9]+$/,
                integer: /^[-+]?\d+$/,
                number: /^[-+]?\d*(?:[\.\,]\d+)?$/,
                card: /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/,
                cvv: /^([0-9]){3,4}$/,
                email: /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/,
                url: /^(https?|ftp|file|ssh):\/\/(((([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-zA-Z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-zA-Z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-zA-Z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-zA-Z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-zA-Z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-zA-Z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/,
                domain: /^([a-zA-Z0-9]([a-zA-Z0-9\-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,8}$/,
                datetime: /^([0-2][0-9]{3})\-([0-1][0-9])\-([0-3][0-9])T([0-5][0-9])\:([0-5][0-9])\:([0-5][0-9])(Z|([\-\+]([0-1][0-9])\:00))$/,
                date: /(?:19|20)[0-9]{2}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-9])|(?:(?!02)(?:0[1-9]|1[0-2])-(?:30))|(?:(?:0[13578]|1[02])-31))$/,
                time: /^(0[0-9]|1[0-9]|2[0-3])(:[0-5][0-9]){2}$/,
                dateISO: /^\d{4}[\/\-]\d{1,2}[\/\-]\d{1,2}$/,
                month_day_year: /^(0[1-9]|1[012])[- \/.](0[1-9]|[12][0-9]|3[01])[- \/.]\d{4}$/,
                day_month_year: /^(0[1-9]|[12][0-9]|3[01])[- \/.](0[1-9]|1[012])[- \/.]\d{4}$/,
                color: /^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/
            },
            validators: {
                equalTo: function(a) {
                    var b = c.getElementById(a.getAttribute(this.add_namespace("data-equalto"))).value,
                        d = a.value,
                        e = b === d;
                    return e
                }
            }
        },
        timer: null,
        init: function(a, b, c) {
            this.bindings(b, c)
        },
        events: function(b) {
            var c = this,
                d = c.S(b).attr("novalidate", "novalidate"),
                e = d.data(this.attr_name(!0) + "-init") || {};
            this.invalid_attr = this.add_namespace("data-invalid"), d.off(".abide").on("submit.fndtn.abide validate.fndtn.abide", function(a) {
                var b = /ajax/i.test(c.S(this).attr(c.attr_name()));
                return c.validate(c.S(this).find("input, textarea, select").get(), a, b)
            }).on("reset", function() {
                return c.reset(a(this))
            }).find("input, textarea, select").off(".abide").on("blur.fndtn.abide change.fndtn.abide", function(a) {
                e.validate_on_blur === !0 && c.validate([this], a)
            }).on("keydown.fndtn.abide", function(a) {
                e.live_validate === !0 && 9 != a.which && (clearTimeout(c.timer), c.timer = setTimeout(function() {
                    c.validate([this], a)
                }.bind(this), e.timeout))
            })
        },
        reset: function(b) {
            b.removeAttr(this.invalid_attr), a(this.invalid_attr, b).removeAttr(this.invalid_attr), a("." + this.settings.error_class, b).not("small").removeClass(this.settings.error_class)
        },
        validate: function(a, b, c) {
            for (var d = this.parse_patterns(a), e = d.length, f = this.S(a[0]).closest("form"), g = /submit/.test(b.type), h = 0; e > h; h++)
                if (!d[h] && (g || c)) return this.settings.focus_on_invalid && a[h].focus(), f.trigger("invalid").trigger("invalid.fndtn.abide"), this.S(a[h]).closest("form").attr(this.invalid_attr, ""), !1;
            return (g || c) && f.trigger("valid").trigger("valid.fndtn.abide"), f.removeAttr(this.invalid_attr), c ? !1 : !0
        },
        parse_patterns: function(a) {
            for (var b = a.length, c = []; b--;) c.push(this.pattern(a[b]));
            return this.check_validation_and_apply_styles(c)
        },
        pattern: function(a) {
            var b = a.getAttribute("type"),
                c = "string" == typeof a.getAttribute("required"),
                d = a.getAttribute("pattern") || "";
            return this.settings.patterns.hasOwnProperty(d) && d.length > 0 ? [a, this.settings.patterns[d], c] : d.length > 0 ? [a, new RegExp(d), c] : this.settings.patterns.hasOwnProperty(b) ? [a, this.settings.patterns[b], c] : (d = /.*/, [a, d, c])
        },
        check_validation_and_apply_styles: function(b) {
            var c = b.length,
                d = [],
                e = this.S(b[0][0]).closest("[data-" + this.attr_name(!0) + "]");
            for (e.data(this.attr_name(!0) + "-init") || {}; c--;) {
                var f, g, h = b[c][0],
                    i = b[c][2],
                    j = h.value.trim(),
                    k = this.S(h).parent(),
                    l = h.getAttribute(this.add_namespace("data-abide-validator")),
                    m = "radio" === h.type,
                    n = "checkbox" === h.type,
                    o = this.S('label[for="' + h.getAttribute("id") + '"]'),
                    p = i ? h.value.length > 0 : !0,
                    q = [];
                if (h.getAttribute(this.add_namespace("data-equalto")) && (l = "equalTo"), f = k.is("label") ? k.parent() : k, l && (g = this.settings.validators[l].apply(this, [h, i, f]), q.push(g)), m && i) q.push(this.valid_radio(h, i));
                else if (n && i) q.push(this.valid_checkbox(h, i));
                else if (q.push(b[c][1].test(j) && p || !i && h.value.length < 1 || a(h).attr("disabled") ? !0 : !1), q = [q.every(function(a) {
                        return a
                    })], q[0]) this.S(h).removeAttr(this.invalid_attr), h.setAttribute("aria-invalid", "false"), h.removeAttribute("aria-describedby"), f.removeClass(this.settings.error_class), o.length > 0 && this.settings.error_labels && o.removeClass(this.settings.error_class).removeAttr("role"), a(h).triggerHandler("valid");
                else {
                    this.S(h).attr(this.invalid_attr, ""), h.setAttribute("aria-invalid", "true");
                    var r = f.find("small." + this.settings.error_class, "span." + this.settings.error_class),
                        s = r.length > 0 ? r[0].id : "";
                    s.length > 0 && h.setAttribute("aria-describedby", s), f.addClass(this.settings.error_class), o.length > 0 && this.settings.error_labels && o.addClass(this.settings.error_class).attr("role", "alert"), a(h).triggerHandler("invalid")
                }
                d.push(q[0])
            }
            return d = [d.every(function(a) {
                return a
            })]
        },
        valid_checkbox: function(a, b) {
            var a = this.S(a),
                c = a.is(":checked") || !b || a.get(0).getAttribute("disabled");
            return c ? a.removeAttr(this.invalid_attr).parent().removeClass(this.settings.error_class) : a.attr(this.invalid_attr, "").parent().addClass(this.settings.error_class), c
        },
        valid_radio: function(a) {
            for (var b = a.getAttribute("name"), c = this.S(a).closest("[data-" + this.attr_name(!0) + "]").find("[name='" + b + "']"), d = c.length, e = !1, f = !1, g = 0; d > g; g++) c[g].getAttribute("disabled") ? (f = !0, e = !0) : c[g].checked ? e = !0 : f && (e = !1);
            for (var g = 0; d > g; g++) e ? this.S(c[g]).removeAttr(this.invalid_attr).parent().removeClass(this.settings.error_class) : this.S(c[g]).attr(this.invalid_attr, "").parent().addClass(this.settings.error_class);
            return e
        },
        valid_equal: function(a, b, d) {
            var e = c.getElementById(a.getAttribute(this.add_namespace("data-equalto"))).value,
                f = a.value,
                g = e === f;
            return g ? (this.S(a).removeAttr(this.invalid_attr), d.removeClass(this.settings.error_class), label.length > 0 && settings.error_labels && label.removeClass(this.settings.error_class)) : (this.S(a).attr(this.invalid_attr, ""), d.addClass(this.settings.error_class), label.length > 0 && settings.error_labels && label.addClass(this.settings.error_class)), g
        },
        valid_oneof: function(a, b, c, d) {
            var a = this.S(a),
                e = this.S("[" + this.add_namespace("data-oneof") + "]"),
                f = e.filter(":checked").length > 0;
            if (f ? a.removeAttr(this.invalid_attr).parent().removeClass(this.settings.error_class) : a.attr(this.invalid_attr, "").parent().addClass(this.settings.error_class), !d) {
                var g = this;
                e.each(function() {
                    g.valid_oneof.call(g, this, null, null, !0)
                })
            }
            return f
        }
    }
}(jQuery, window, window.document),
function(a) {
    "use strict";
    Foundation.libs.accordion = {
        name: "accordion",
        version: "5.5.1",
        settings: {
            content_class: "content",
            active_class: "active",
            multi_expand: !1,
            toggleable: !0,
            callback: function() {}
        },
        init: function(a, b, c) {
            this.bindings(b, c)
        },
        events: function() {
            var b = this,
                c = this.S;
            c(this.scope).off(".fndtn.accordion").on("click.fndtn.accordion", "[" + this.attr_name() + "] > .accordion-navigation > a", function(d) {
                var e = c(this).closest("[" + b.attr_name() + "]"),
                    f = b.attr_name() + "=" + e.attr(b.attr_name()),
                    g = e.data(b.attr_name(!0) + "-init") || b.settings,
                    h = c("#" + this.href.split("#")[1]),
                    i = a("> .accordion-navigation", e),
                    j = i.children("." + g.content_class),
                    k = j.filter("." + g.active_class);
                return d.preventDefault(), e.attr(b.attr_name()) && (j = j.add("[" + f + "] dd > ." + g.content_class), i = i.add("[" + f + "] .accordion-navigation")), g.toggleable && h.is(k) ? (h.parent(".accordion-navigation").toggleClass(g.active_class, !1), h.toggleClass(g.active_class, !1), g.callback(h), h.triggerHandler("toggled", [e]), void e.triggerHandler("toggled", [h])) : (g.multi_expand || (j.removeClass(g.active_class), i.removeClass(g.active_class)), h.addClass(g.active_class).parent().addClass(g.active_class), g.callback(h), h.triggerHandler("toggled", [e]), void e.triggerHandler("toggled", [h]))
            })
        },
        off: function() {},
        reflow: function() {}
    }
}(jQuery, window, window.document),
function(a) {
    "use strict";
    Foundation.libs.alert = {
        name: "alert",
        version: "5.5.1",
        settings: {
            callback: function() {}
        },
        init: function(a, b, c) {
            this.bindings(b, c)
        },
        events: function() {
            var b = this,
                c = this.S;
            a(this.scope).off(".alert").on("click.fndtn.alert", "[" + this.attr_name() + "] .close", function(a) {
                var d = c(this).closest("[" + b.attr_name() + "]"),
                    e = d.data(b.attr_name(!0) + "-init") || b.settings;
                a.preventDefault(), Modernizr.csstransitions ? (d.addClass("alert-close"), d.on("transitionend webkitTransitionEnd oTransitionEnd", function() {
                    c(this).trigger("close").trigger("close.fndtn.alert").remove(), e.callback()
                })) : d.fadeOut(300, function() {
                    c(this).trigger("close").trigger("close.fndtn.alert").remove(), e.callback()
                })
            })
        },
        reflow: function() {}
    }
}(jQuery, window, window.document),
function(a, b, c, d) {
    "use strict";
    Foundation.libs.clearing = {
        name: "clearing",
        version: "5.5.1",
        settings: {
            templates: {
                viewing: '<a href="#" class="clearing-close">&times;</a><div class="visible-img" style="display: none"><div class="clearing-touch-label"></div><img src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs%3D" alt="" /><p class="clearing-caption"></p><a href="#" class="clearing-main-prev"><span></span></a><a href="#" class="clearing-main-next"><span></span></a></div>'
            },
            close_selectors: ".clearing-close, div.clearing-blackout",
            open_selectors: "",
            skip_selector: "",
            touch_label: "",
            init: !1,
            locked: !1
        },
        init: function(a, b, c) {
            var d = this;
            Foundation.inherit(this, "throttle image_loaded"), this.bindings(b, c), d.S(this.scope).is("[" + this.attr_name() + "]") ? this.assemble(d.S("li", this.scope)) : d.S("[" + this.attr_name() + "]", this.scope).each(function() {
                d.assemble(d.S("li", this))
            })
        },
        events: function(d) {
            var e = this,
                f = e.S,
                g = a(".scroll-container");
            g.length > 0 && (this.scope = g), f(this.scope).off(".clearing").on("click.fndtn.clearing", "ul[" + this.attr_name() + "] li " + this.settings.open_selectors, function(a, b, c) {
                var b = b || f(this),
                    c = c || b,
                    d = b.next("li"),
                    g = b.closest("[" + e.attr_name() + "]").data(e.attr_name(!0) + "-init"),
                    h = f(a.target);
                a.preventDefault(), g || (e.init(), g = b.closest("[" + e.attr_name() + "]").data(e.attr_name(!0) + "-init")), c.hasClass("visible") && b[0] === c[0] && d.length > 0 && e.is_open(b) && (c = d, h = f("img", c)), e.open(h, b, c), e.update_paddles(c)
            }).on("click.fndtn.clearing", ".clearing-main-next", function(a) {
                e.nav(a, "next")
            }).on("click.fndtn.clearing", ".clearing-main-prev", function(a) {
                e.nav(a, "prev")
            }).on("click.fndtn.clearing", this.settings.close_selectors, function(a) {
                Foundation.libs.clearing.close(a, this)
            }), a(c).on("keydown.fndtn.clearing", function(a) {
                e.keydown(a)
            }), f(b).off(".clearing").on("resize.fndtn.clearing", function() {
                e.resize()
            }), this.swipe_events(d)
        },
        swipe_events: function() {
            var a = this,
                b = a.S;
            b(this.scope).on("touchstart.fndtn.clearing", ".visible-img", function(a) {
                a.touches || (a = a.originalEvent);
                var c = {
                    start_page_x: a.touches[0].pageX,
                    start_page_y: a.touches[0].pageY,
                    start_time: (new Date).getTime(),
                    delta_x: 0,
                    is_scrolling: d
                };
                b(this).data("swipe-transition", c), a.stopPropagation()
            }).on("touchmove.fndtn.clearing", ".visible-img", function(c) {
                if (c.touches || (c = c.originalEvent), !(c.touches.length > 1 || c.scale && 1 !== c.scale)) {
                    var d = b(this).data("swipe-transition");
                    if ("undefined" == typeof d && (d = {}), d.delta_x = c.touches[0].pageX - d.start_page_x, Foundation.rtl && (d.delta_x = -d.delta_x), "undefined" == typeof d.is_scrolling && (d.is_scrolling = !!(d.is_scrolling || Math.abs(d.delta_x) < Math.abs(c.touches[0].pageY - d.start_page_y))), !d.is_scrolling && !d.active) {
                        c.preventDefault();
                        var e = d.delta_x < 0 ? "next" : "prev";
                        d.active = !0, a.nav(c, e)
                    }
                }
            }).on("touchend.fndtn.clearing", ".visible-img", function(a) {
                b(this).data("swipe-transition", {}), a.stopPropagation()
            })
        },
        assemble: function(b) {
            var c = b.parent();
            if (!c.parent().hasClass("carousel")) {
                c.after('<div id="foundationClearingHolder"></div>');
                var d = c.detach(),
                    e = "";
                if (null != d[0]) {
                    e = d[0].outerHTML;
                    var f = this.S("#foundationClearingHolder"),
                        g = c.data(this.attr_name(!0) + "-init"),
                        h = {
                            grid: '<div class="carousel">' + e + "</div>",
                            viewing: g.templates.viewing
                        },
                        i = '<div class="clearing-assembled"><div>' + h.viewing + h.grid + "</div></div>",
                        j = this.settings.touch_label;
                    Modernizr.touch && (i = a(i).find(".clearing-touch-label").html(j).end()), f.after(i).remove()
                }
            }
        },
        open: function(b, d, e) {
            function f() {
                setTimeout(function() {
                    this.image_loaded(m, function() {
                        1 !== m.outerWidth() || o ? g.call(this, m) : f.call(this)
                    }.bind(this))
                }.bind(this), 100)
            }

            function g(b) {
                var c = a(b);
                c.css("visibility", "visible"), i.css("overflow", "hidden"), j.addClass("clearing-blackout"), k.addClass("clearing-container"), l.show(), this.fix_height(e).caption(h.S(".clearing-caption", l), h.S("img", e)).center_and_label(b, n).shift(d, e, function() {
                    e.closest("li").siblings().removeClass("visible"), e.closest("li").addClass("visible")
                }), l.trigger("opened.fndtn.clearing")
            }
            var h = this,
                i = a(c.body),
                j = e.closest(".clearing-assembled"),
                k = h.S("div", j).first(),
                l = h.S(".visible-img", k),
                m = h.S("img", l).not(b),
                n = h.S(".clearing-touch-label", k),
                o = !1;
            a("body").on("touchmove", function(a) {
                a.preventDefault()
            }), m.error(function() {
                o = !0
            }), this.locked() || (l.trigger("open.fndtn.clearing"), m.attr("src", this.load(b)).css("visibility", "hidden"), f.call(this))
        },
        close: function(b, d) {
            b.preventDefault();
            var e, f, g = function(a) {
                    return /blackout/.test(a.selector) ? a : a.closest(".clearing-blackout")
                }(a(d)),
                h = a(c.body);
            return d === b.target && g && (h.css("overflow", ""), e = a("div", g).first(), f = a(".visible-img", e), f.trigger("close.fndtn.clearing"), this.settings.prev_index = 0, a("ul[" + this.attr_name() + "]", g).attr("style", "").closest(".clearing-blackout").removeClass("clearing-blackout"), e.removeClass("clearing-container"), f.hide(), f.trigger("closed.fndtn.clearing")), a("body").off("touchmove"), !1
        },
        is_open: function(a) {
            return a.parent().prop("style").length > 0
        },
        keydown: function(b) {
            var c = a(".clearing-blackout ul[" + this.attr_name() + "]"),
                d = this.rtl ? 37 : 39,
                e = this.rtl ? 39 : 37,
                f = 27;
            b.which === d && this.go(c, "next"), b.which === e && this.go(c, "prev"), b.which === f && this.S("a.clearing-close").trigger("click").trigger("click.fndtn.clearing")
        },
        nav: function(b, c) {
            var d = a("ul[" + this.attr_name() + "]", ".clearing-blackout");
            b.preventDefault(), this.go(d, c)
        },
        resize: function() {
            var b = a("img", ".clearing-blackout .visible-img"),
                c = a(".clearing-touch-label", ".clearing-blackout");
            b.length && (this.center_and_label(b, c), b.trigger("resized.fndtn.clearing"))
        },
        fix_height: function(a) {
            var b = a.parent().children(),
                c = this;
            return b.each(function() {
                var a = c.S(this),
                    b = a.find("img");
                a.height() > b.outerHeight() && a.addClass("fix-height")
            }).closest("ul").width(100 * b.length + "%"), this
        },
        update_paddles: function(a) {
            a = a.closest("li");
            var b = a.closest(".carousel").siblings(".visible-img");
            a.next().length > 0 ? this.S(".clearing-main-next", b).removeClass("disabled") : this.S(".clearing-main-next", b).addClass("disabled"), a.prev().length > 0 ? this.S(".clearing-main-prev", b).removeClass("disabled") : this.S(".clearing-main-prev", b).addClass("disabled")
        },
        center_and_label: function(a, b) {
            return b.css(!this.rtl && b.length > 0 ? {
                marginLeft: -(b.outerWidth() / 2),
                marginTop: -(a.outerHeight() / 2) - b.outerHeight() - 10
            } : {
                marginRight: -(b.outerWidth() / 2),
                marginTop: -(a.outerHeight() / 2) - b.outerHeight() - 10,
                left: "auto",
                right: "50%"
            }), this
        },
        load: function(a) {
            var b;
            return b = "A" === a[0].nodeName ? a.attr("href") : a.closest("a").attr("href"), this.preload(a), b ? b : a.attr("src")
        },
        preload: function(a) {
            this.img(a.closest("li").next()).img(a.closest("li").prev())
        },
        img: function(a) {
            if (a.length) {
                var b = new Image,
                    c = this.S("a", a);
                b.src = c.length ? c.attr("href") : this.S("img", a).attr("src")
            }
            return this
        },
        caption: function(a, b) {
            var c = b.attr("data-caption");
            return c ? a.html(c).show() : a.text("").hide(), this
        },
        go: function(a, b) {
            var c = this.S(".visible", a),
                d = c[b]();
            this.settings.skip_selector && 0 != d.find(this.settings.skip_selector).length && (d = d[b]()), d.length && this.S("img", d).trigger("click", [c, d]).trigger("click.fndtn.clearing", [c, d]).trigger("change.fndtn.clearing")
        },
        shift: function(a, b, c) {
            var d, e = b.parent(),
                f = this.settings.prev_index || b.index(),
                g = this.direction(e, a, b),
                h = this.rtl ? "right" : "left",
                i = parseInt(e.css("left"), 10),
                j = b.outerWidth(),
                k = {};
            b.index() === f || /skip/.test(g) ? /skip/.test(g) && (d = b.index() - this.settings.up_count, this.lock(), d > 0 ? (k[h] = -(d * j), e.animate(k, 300, this.unlock())) : (k[h] = 0, e.animate(k, 300, this.unlock()))) : /left/.test(g) ? (this.lock(), k[h] = i + j, e.animate(k, 300, this.unlock())) : /right/.test(g) && (this.lock(), k[h] = i - j, e.animate(k, 300, this.unlock())), c()
        },
        direction: function(a, b, c) {
            var d, e = this.S("li", a),
                f = e.outerWidth() + e.outerWidth() / 4,
                g = Math.floor(this.S(".clearing-container").outerWidth() / f) - 1,
                h = e.index(c);
            return this.settings.up_count = g, d = this.adjacent(this.settings.prev_index, h) ? h > g && h > this.settings.prev_index ? "right" : h > g - 1 && h <= this.settings.prev_index ? "left" : !1 : "skip", this.settings.prev_index = h, d
        },
        adjacent: function(a, b) {
            for (var c = b + 1; c >= b - 1; c--)
                if (c === a) return !0;
            return !1
        },
        lock: function() {
            this.settings.locked = !0
        },
        unlock: function() {
            this.settings.locked = !1
        },
        locked: function() {
            return this.settings.locked
        },
        off: function() {
            this.S(this.scope).off(".fndtn.clearing"), this.S(b).off(".fndtn.clearing")
        },
        reflow: function() {
            this.init()
        }
    }
}(jQuery, window, window.document),
function(a, b, c) {
    "use strict";
    Foundation.libs.dropdown = {
        name: "dropdown",
        version: "5.5.1",
        settings: {
            active_class: "open",
            disabled_class: "disabled",
            mega_class: "mega",
            align: "bottom",
            is_hover: !1,
            hover_timeout: 150,
            opened: function() {},
            closed: function() {}
        },
        init: function(b, c, d) {
            Foundation.inherit(this, "throttle"), a.extend(!0, this.settings, c, d), this.bindings(c, d)
        },
        events: function() {
            var d = this,
                e = d.S;
            e(this.scope).off(".dropdown").on("click.fndtn.dropdown", "[" + this.attr_name() + "]", function(b) {
                var c = e(this).data(d.attr_name(!0) + "-init") || d.settings;
                (!c.is_hover || Modernizr.touch) && (b.preventDefault(), e(this).parent("[data-reveal-id]") && b.stopPropagation(), d.toggle(a(this)))
            }).on("mouseenter.fndtn.dropdown", "[" + this.attr_name() + "], [" + this.attr_name() + "-content]", function(a) {
                var b, c, f = e(this);
                clearTimeout(d.timeout), f.data(d.data_attr()) ? (b = e("#" + f.data(d.data_attr())), c = f) : (b = f, c = e("[" + d.attr_name() + '="' + b.attr("id") + '"]'));
                var g = c.data(d.attr_name(!0) + "-init") || d.settings;
                e(a.currentTarget).data(d.data_attr()) && g.is_hover && d.closeall.call(d), g.is_hover && d.open.apply(d, [b, c])
            }).on("mouseleave.fndtn.dropdown", "[" + this.attr_name() + "], [" + this.attr_name() + "-content]", function() {
                var a, b = e(this);
                if (b.data(d.data_attr())) a = b.data(d.data_attr(!0) + "-init") || d.settings;
                else var c = e("[" + d.attr_name() + '="' + e(this).attr("id") + '"]'),
                    a = c.data(d.attr_name(!0) + "-init") || d.settings;
                d.timeout = setTimeout(function() {
                    b.data(d.data_attr()) ? a.is_hover && d.close.call(d, e("#" + b.data(d.data_attr()))) : a.is_hover && d.close.call(d, b)
                }.bind(this), a.hover_timeout)
            }).on("click.fndtn.dropdown", function(b) {
                var f = e(b.target).closest("[" + d.attr_name() + "-content]"),
                    g = f.find("a");
                return g.length > 0 && "false" !== f.attr("aria-autoclose") && d.close.call(d, e("[" + d.attr_name() + "-content]")), b.target !== c && !a.contains(c.documentElement, b.target) || e(b.target).closest("[" + d.attr_name() + "]").length > 0 ? void 0 : !e(b.target).data("revealId") && f.length > 0 && (e(b.target).is("[" + d.attr_name() + "-content]") || a.contains(f.first()[0], b.target)) ? void b.stopPropagation() : void d.close.call(d, e("[" + d.attr_name() + "-content]"))
            }).on("opened.fndtn.dropdown", "[" + d.attr_name() + "-content]", function() {
                d.settings.opened.call(this)
            }).on("closed.fndtn.dropdown", "[" + d.attr_name() + "-content]", function() {
                d.settings.closed.call(this)
            }), e(b).off(".dropdown").on("resize.fndtn.dropdown", d.throttle(function() {
                d.resize.call(d)
            }, 50)), this.resize()
        },
        close: function(b) {
            var c = this;
            b.each(function() {
                var d = a("[" + c.attr_name() + "=" + b[0].id + "]") || a("aria-controls=" + b[0].id + "]");
                d.attr("aria-expanded", "false"), c.S(this).hasClass(c.settings.active_class) && (c.S(this).css(Foundation.rtl ? "right" : "left", "-99999px").attr("aria-hidden", "true").removeClass(c.settings.active_class).prev("[" + c.attr_name() + "]").removeClass(c.settings.active_class).removeData("target"), c.S(this).trigger("closed").trigger("closed.fndtn.dropdown", [b]))
            }), b.removeClass("f-open-" + this.attr_name(!0))
        },
        closeall: function() {
            var b = this;
            a.each(b.S(".f-open-" + this.attr_name(!0)), function() {
                b.close.call(b, b.S(this))
            })
        },
        open: function(a, b) {
            this.css(a.addClass(this.settings.active_class), b), a.prev("[" + this.attr_name() + "]").addClass(this.settings.active_class), a.data("target", b.get(0)).trigger("opened").trigger("opened.fndtn.dropdown", [a, b]), a.attr("aria-hidden", "false"), b.attr("aria-expanded", "true"), a.focus(), a.addClass("f-open-" + this.attr_name(!0))
        },
        data_attr: function() {
            return this.namespace.length > 0 ? this.namespace + "-" + this.name : this.name
        },
        toggle: function(a) {
            if (!a.hasClass(this.settings.disabled_class)) {
                var b = this.S("#" + a.data(this.data_attr()));
                0 !== b.length && (this.close.call(this, this.S("[" + this.attr_name() + "-content]").not(b)), b.hasClass(this.settings.active_class) ? (this.close.call(this, b), b.data("target") !== a.get(0) && this.open.call(this, b, a)) : this.open.call(this, b, a))
            }
        },
        resize: function() {
            var b = this.S("[" + this.attr_name() + "-content].open"),
                c = a(b.data("target"));
            b.length && c.length && this.css(b, c)
        },
        css: function(a, b) {
            var c = Math.max((b.width() - a.width()) / 2, 8),
                d = b.data(this.attr_name(!0) + "-init") || this.settings;
            if (this.clear_idx(), this.small()) {
                var e = this.dirs.bottom.call(a, b, d);
                a.attr("style", "").removeClass("drop-left drop-right drop-top").css({
                    position: "absolute",
                    width: "95%",
                    "max-width": "none",
                    top: e.top
                }), a.css(Foundation.rtl ? "right" : "left", c)
            } else this.style(a, b, d);
            return a
        },
        style: function(b, c, d) {
            var e = a.extend({
                position: "absolute"
            }, this.dirs[d.align].call(b, c, d));
            b.attr("style", "").css(e)
        },
        dirs: {
            _base: function(a) {
                var d = this.offsetParent(),
                    e = d.offset(),
                    f = a.offset();
                f.top -= e.top, f.left -= e.left, f.missRight = !1, f.missTop = !1, f.missLeft = !1, f.leftRightFlag = !1;
                var g;
                g = c.getElementsByClassName("row")[0] ? c.getElementsByClassName("row")[0].clientWidth : b.outerWidth;
                var h = (b.outerWidth - g) / 2,
                    i = g;
                return this.hasClass("mega") || (a.offset().top <= this.outerHeight() && (f.missTop = !0, i = b.outerWidth - h, f.leftRightFlag = !0), a.offset().left + this.outerWidth() > a.offset().left + h && a.offset().left - h > this.outerWidth() && (f.missRight = !0, f.missLeft = !1), a.offset().left - this.outerWidth() <= 0 && (f.missLeft = !0, f.missRight = !1)), f
            },
            top: function(a, b) {
                var c = Foundation.libs.dropdown,
                    d = c.dirs._base.call(this, a);
                return this.addClass("drop-top"), 1 == d.missTop && (d.top = d.top + a.outerHeight() + this.outerHeight(), this.removeClass("drop-top")), 1 == d.missRight && (d.left = d.left - this.outerWidth() + a.outerWidth()), (a.outerWidth() < this.outerWidth() || c.small() || this.hasClass(b.mega_menu)) && c.adjust_pip(this, a, b, d), Foundation.rtl ? {
                    left: d.left - this.outerWidth() + a.outerWidth(),
                    top: d.top - this.outerHeight()
                } : {
                    left: d.left,
                    top: d.top - this.outerHeight()
                }
            },
            bottom: function(a, b) {
                var c = Foundation.libs.dropdown,
                    d = c.dirs._base.call(this, a);
                return 1 == d.missRight && (d.left = d.left - this.outerWidth() + a.outerWidth()), (a.outerWidth() < this.outerWidth() || c.small() || this.hasClass(b.mega_menu)) && c.adjust_pip(this, a, b, d), c.rtl ? {
                    left: d.left - this.outerWidth() + a.outerWidth(),
                    top: d.top + a.outerHeight()
                } : {
                    left: d.left,
                    top: d.top + a.outerHeight()
                }
            },
            left: function(a) {
                var b = Foundation.libs.dropdown.dirs._base.call(this, a);
                return this.addClass("drop-left"), 1 == b.missLeft && (b.left = b.left + this.outerWidth(), b.top = b.top + a.outerHeight(), this.removeClass("drop-left")), {
                    left: b.left - this.outerWidth(),
                    top: b.top
                }
            },
            right: function(a, b) {
                var c = Foundation.libs.dropdown.dirs._base.call(this, a);
                this.addClass("drop-right"), 1 == c.missRight ? (c.left = c.left - this.outerWidth(), c.top = c.top + a.outerHeight(), this.removeClass("drop-right")) : c.triggeredRight = !0;
                var d = Foundation.libs.dropdown;
                return (a.outerWidth() < this.outerWidth() || d.small() || this.hasClass(b.mega_menu)) && d.adjust_pip(this, a, b, c), {
                    left: c.left + a.outerWidth(),
                    top: c.top
                }
            }
        },
        adjust_pip: function(a, b, c, d) {
            var e = Foundation.stylesheet,
                f = 8;
            a.hasClass(c.mega_class) ? f = d.left + b.outerWidth() / 2 - 8 : this.small() && (f += d.left - 8), this.rule_idx = e.cssRules.length;
            var g = ".f-dropdown.open:before",
                h = ".f-dropdown.open:after",
                i = "left: " + f + "px;",
                j = "left: " + (f - 1) + "px;";
            1 == d.missRight && (f = a.outerWidth() - 23, g = ".f-dropdown.open:before", h = ".f-dropdown.open:after", i = "left: " + f + "px;", j = "left: " + (f - 1) + "px;"), 1 == d.triggeredRight && (g = ".f-dropdown.open:before", h = ".f-dropdown.open:after", i = "left:-12px;", j = "left:-14px;"), e.insertRule ? (e.insertRule([g, "{", i, "}"].join(" "), this.rule_idx), e.insertRule([h, "{", j, "}"].join(" "), this.rule_idx + 1)) : (e.addRule(g, i, this.rule_idx), e.addRule(h, j, this.rule_idx + 1))
        },
        clear_idx: function() {
            var a = Foundation.stylesheet;
            "undefined" != typeof this.rule_idx && (a.deleteRule(this.rule_idx), a.deleteRule(this.rule_idx), delete this.rule_idx)
        },
        small: function() {
            return matchMedia(Foundation.media_queries.small).matches && !matchMedia(Foundation.media_queries.medium).matches
        },
        off: function() {
            this.S(this.scope).off(".fndtn.dropdown"), this.S("html, body").off(".fndtn.dropdown"), this.S(b).off(".fndtn.dropdown"), this.S("[data-dropdown-content]").off(".fndtn.dropdown")
        },
        reflow: function() {}
    }
}(jQuery, window, window.document),
function(a, b) {
    "use strict";
    Foundation.libs.equalizer = {
        name: "equalizer",
        version: "5.5.1",
        settings: {
            use_tallest: !0,
            before_height_change: a.noop,
            after_height_change: a.noop,
            equalize_on_stack: !1
        },
        init: function(a, b, c) {
            Foundation.inherit(this, "image_loaded"), this.bindings(b, c), this.reflow()
        },
        events: function() {
            this.S(b).off(".equalizer").on("resize.fndtn.equalizer", function() {
                this.reflow()
            }.bind(this))
        },
        equalize: function(b) {
            var c = !1,
                d = b.find("[" + this.attr_name() + "-watch]:visible"),
                e = b.data(this.attr_name(!0) + "-init");
            if (0 !== d.length) {
                var f = d.first().offset().top;
                if (e.before_height_change(), b.trigger("before-height-change").trigger("before-height-change.fndth.equalizer"), d.height("inherit"), d.each(function() {
                        var b = a(this);
                        b.offset().top !== f && (c = !0)
                    }), e.equalize_on_stack !== !1 || !c) {
                    var g = d.map(function() {
                        return a(this).outerHeight(!1)
                    }).get();
                    if (e.use_tallest) {
                        var h = Math.max.apply(null, g);
                        d.css("height", h)
                    } else {
                        var i = Math.min.apply(null, g);
                        d.css("height", i)
                    }
                    e.after_height_change(), b.trigger("after-height-change").trigger("after-height-change.fndtn.equalizer")
                }
            }
        },
        reflow: function() {
            var b = this;
            this.S("[" + this.attr_name() + "]", this.scope).each(function() {
                var c = a(this);
                b.image_loaded(b.S("img", this), function() {
                    b.equalize(c)
                })
            })
        }
    }
}(jQuery, window, window.document),
function(a, b) {
    "use strict";
    Foundation.libs.interchange = {
        name: "interchange",
        version: "5.5.1",
        cache: {},
        images_loaded: !1,
        nodes_loaded: !1,
        settings: {
            load_attr: "interchange",
            named_queries: {
                "default": "only screen",
                small: Foundation.media_queries.small,
                "small-only": Foundation.media_queries["small-only"],
                medium: Foundation.media_queries.medium,
                "medium-only": Foundation.media_queries["medium-only"],
                large: Foundation.media_queries.large,
                "large-only": Foundation.media_queries["large-only"],
                xlarge: Foundation.media_queries.xlarge,
                "xlarge-only": Foundation.media_queries["xlarge-only"],
                xxlarge: Foundation.media_queries.xxlarge,
                landscape: "only screen and (orientation: landscape)",
                portrait: "only screen and (orientation: portrait)",
                retina: "only screen and (-webkit-min-device-pixel-ratio: 2),only screen and (min--moz-device-pixel-ratio: 2),only screen and (-o-min-device-pixel-ratio: 2/1),only screen and (min-device-pixel-ratio: 2),only screen and (min-resolution: 192dpi),only screen and (min-resolution: 2dppx)"
            },
            directives: {
                replace: function(b, c, d) {
                    if (/IMG/.test(b[0].nodeName)) {
                        var e = b[0].src;
                        if (new RegExp(c, "i").test(e)) return;
                        return b[0].src = c, d(b[0].src)
                    }
                    var f = b.data(this.data_attr + "-last-path"),
                        g = this;
                    if (f != c) return /\.(gif|jpg|jpeg|tiff|png)([?#].*)?/i.test(c) ? (a(b).css("background-image", "url(" + c + ")"), b.data("interchange-last-path", c), d(c)) : a.get(c, function(a) {
                        b.html(a), b.data(g.data_attr + "-last-path", c), d()
                    })
                }
            }
        },
        init: function(b, c, d) {
            Foundation.inherit(this, "throttle random_str"), this.data_attr = this.set_data_attr(), a.extend(!0, this.settings, c, d), this.bindings(c, d), this.load("images"), this.load("nodes")
        },
        get_media_hash: function() {
            var a = "";
            for (var b in this.settings.named_queries) a += matchMedia(this.settings.named_queries[b]).matches.toString();
            return a
        },
        events: function() {
            var c, d = this;
            return a(b).off(".interchange").on("resize.fndtn.interchange", d.throttle(function() {
                var a = d.get_media_hash();
                a !== c && d.resize(), c = a
            }, 50)), this
        },
        resize: function() {
            var b = this.cache;
            if (!this.images_loaded || !this.nodes_loaded) return void setTimeout(a.proxy(this.resize, this), 50);
            for (var c in b)
                if (b.hasOwnProperty(c)) {
                    var d = this.results(c, b[c]);
                    d && this.settings.directives[d.scenario[1]].call(this, d.el, d.scenario[0], function(a) {
                        if (arguments[0] instanceof Array) var b = arguments[0];
                        else var b = Array.prototype.slice.call(arguments, 0);
                        return function() {
                            a.el.trigger(a.scenario[1], b)
                        }
                    }(d))
                }
        },
        results: function(a, b) {
            var c = b.length;
            if (c > 0)
                for (var d = this.S("[" + this.add_namespace("data-uuid") + '="' + a + '"]'); c--;) {
                    var e, f = b[c][2];
                    if (e = matchMedia(this.settings.named_queries.hasOwnProperty(f) ? this.settings.named_queries[f] : f), e.matches) return {
                        el: d,
                        scenario: b[c]
                    }
                }
            return !1
        },
        load: function(a, b) {
            return ("undefined" == typeof this["cached_" + a] || b) && this["update_" + a](), this["cached_" + a]
        },
        update_images: function() {
            var a = this.S("img[" + this.data_attr + "]"),
                b = a.length,
                c = b,
                d = 0,
                e = this.data_attr;
            for (this.cache = {}, this.cached_images = [], this.images_loaded = 0 === b; c--;) {
                if (d++, a[c]) {
                    var f = a[c].getAttribute(e) || "";
                    f.length > 0 && this.cached_images.push(a[c])
                }
                d === b && (this.images_loaded = !0, this.enhance("images"))
            }
            return this
        },
        update_nodes: function() {
            var a = this.S("[" + this.data_attr + "]").not("img"),
                b = a.length,
                c = b,
                d = 0,
                e = this.data_attr;
            for (this.cached_nodes = [], this.nodes_loaded = 0 === b; c--;) {
                d++;
                var f = a[c].getAttribute(e) || "";
                f.length > 0 && this.cached_nodes.push(a[c]), d === b && (this.nodes_loaded = !0, this.enhance("nodes"))
            }
            return this
        },
        enhance: function(c) {
            for (var d = this["cached_" + c].length; d--;) this.object(a(this["cached_" + c][d]));
            return a(b).trigger("resize").trigger("resize.fndtn.interchange")
        },
        convert_directive: function(a) {
            var b = this.trim(a);
            return b.length > 0 ? b : "replace"
        },
        parse_scenario: function(a) {
            var b = a[0].match(/(.+),\s*(\w+)\s*$/),
                c = a[1];
            if (b) var d = b[1],
                e = b[2];
            else var f = a[0].split(/,\s*$/),
                d = f[0],
                e = "";
            return [this.trim(d), this.convert_directive(e), this.trim(c)]
        },
        object: function(a) {
            var b = this.parse_data_attr(a),
                c = [],
                d = b.length;
            if (d > 0)
                for (; d--;) {
                    var e = b[d].split(/\(([^\)]*?)(\))$/);
                    if (e.length > 1) {
                        var f = this.parse_scenario(e);
                        c.push(f)
                    }
                }
            return this.store(a, c)
        },
        store: function(a, b) {
            var c = this.random_str(),
                d = a.data(this.add_namespace("uuid", !0));
            return this.cache[d] ? this.cache[d] : (a.attr(this.add_namespace("data-uuid"), c), this.cache[c] = b)
        },
        trim: function(b) {
            return "string" == typeof b ? a.trim(b) : b
        },
        set_data_attr: function(a) {
            return a ? this.namespace.length > 0 ? this.namespace + "-" + this.settings.load_attr : this.settings.load_attr : this.namespace.length > 0 ? "data-" + this.namespace + "-" + this.settings.load_attr : "data-" + this.settings.load_attr
        },
        parse_data_attr: function(a) {
            for (var b = a.attr(this.attr_name()).split(/\[(.*?)\]/), c = b.length, d = []; c--;) b[c].replace(/[\W\d]+/, "").length > 4 && d.push(b[c]);
            return d
        },
        reflow: function() {
            this.load("images", !0), this.load("nodes", !0)
        }
    }
}(jQuery, window, window.document),
function(a, b, c, d) {
    "use strict";
    Foundation.libs.joyride = {
        name: "joyride",
        version: "5.5.1",
        defaults: {
            expose: !1,
            modal: !0,
            keyboard: !0,
            tip_location: "bottom",
            nub_position: "auto",
            scroll_speed: 1500,
            scroll_animation: "linear",
            timer: 0,
            start_timer_on_click: !0,
            start_offset: 0,
            next_button: !0,
            prev_button: !0,
            tip_animation: "fade",
            pause_after: [],
            exposed: [],
            tip_animation_fade_speed: 300,
            cookie_monster: !1,
            cookie_name: "joyride",
            cookie_domain: !1,
            cookie_expires: 365,
            tip_container: "body",
            abort_on_close: !0,
            tip_location_patterns: {
                top: ["bottom"],
                bottom: [],
                left: ["right", "top", "bottom"],
                right: ["left", "top", "bottom"]
            },
            post_ride_callback: function() {},
            post_step_callback: function() {},
            pre_step_callback: function() {},
            pre_ride_callback: function() {},
            post_expose_callback: function() {},
            template: {
                link: '<a href="#close" class="joyride-close-tip">&times;</a>',
                timer: '<div class="joyride-timer-indicator-wrap"><span class="joyride-timer-indicator"></span></div>',
                tip: '<div class="joyride-tip-guide"><span class="joyride-nub"></span></div>',
                wrapper: '<div class="joyride-content-wrapper"></div>',
                button: '<a href="#" class="small button joyride-next-tip"></a>',
                prev_button: '<a href="#" class="small button joyride-prev-tip"></a>',
                modal: '<div class="joyride-modal-bg"></div>',
                expose: '<div class="joyride-expose-wrapper"></div>',
                expose_cover: '<div class="joyride-expose-cover"></div>'
            },
            expose_add_class: ""
        },
        init: function(b, c, d) {
            Foundation.inherit(this, "throttle random_str"), this.settings = this.settings || a.extend({}, this.defaults, d || c), this.bindings(c, d)
        },
        go_next: function() {
            this.settings.$li.next().length < 1 ? this.end() : this.settings.timer > 0 ? (clearTimeout(this.settings.automate), this.hide(), this.show(), this.startTimer()) : (this.hide(), this.show())
        },
        go_prev: function() {
            this.settings.$li.prev().length < 1 || (this.settings.timer > 0 ? (clearTimeout(this.settings.automate), this.hide(), this.show(null, !0), this.startTimer()) : (this.hide(), this.show(null, !0)))
        },
        events: function() {
            var c = this;
            a(this.scope).off(".joyride").on("click.fndtn.joyride", ".joyride-next-tip, .joyride-modal-bg", function(a) {
                a.preventDefault(), this.go_next()
            }.bind(this)).on("click.fndtn.joyride", ".joyride-prev-tip", function(a) {
                a.preventDefault(), this.go_prev()
            }.bind(this)).on("click.fndtn.joyride", ".joyride-close-tip", function(a) {
                a.preventDefault(), this.end(this.settings.abort_on_close)
            }.bind(this)).on("keyup.fndtn.joyride", function(a) {
                if (this.settings.keyboard && this.settings.riding) switch (a.which) {
                    case 39:
                        a.preventDefault(), this.go_next();
                        break;
                    case 37:
                        a.preventDefault(), this.go_prev();
                        break;
                    case 27:
                        a.preventDefault(), this.end(this.settings.abort_on_close)
                }
            }.bind(this)), a(b).off(".joyride").on("resize.fndtn.joyride", c.throttle(function() {
                if (a("[" + c.attr_name() + "]").length > 0 && c.settings.$next_tip && c.settings.riding) {
                    if (c.settings.exposed.length > 0) {
                        var b = a(c.settings.exposed);
                        b.each(function() {
                            var b = a(this);
                            c.un_expose(b), c.expose(b)
                        })
                    }
                    c.is_phone() ? c.pos_phone() : c.pos_default(!1)
                }
            }, 100))
        },
        start: function() {
            var b = this,
                c = a("[" + this.attr_name() + "]", this.scope),
                d = ["timer", "scrollSpeed", "startOffset", "tipAnimationFadeSpeed", "cookieExpires"],
                e = d.length;
            !c.length > 0 || (this.settings.init || this.events(), this.settings = c.data(this.attr_name(!0) + "-init"), this.settings.$content_el = c, this.settings.$body = a(this.settings.tip_container), this.settings.body_offset = a(this.settings.tip_container).position(), this.settings.$tip_content = this.settings.$content_el.find("> li"), this.settings.paused = !1, this.settings.attempts = 0, this.settings.riding = !0, "function" != typeof a.cookie && (this.settings.cookie_monster = !1), (!this.settings.cookie_monster || this.settings.cookie_monster && !a.cookie(this.settings.cookie_name)) && (this.settings.$tip_content.each(function(c) {
                var f = a(this);
                this.settings = a.extend({}, b.defaults, b.data_options(f));
                for (var g = e; g--;) b.settings[d[g]] = parseInt(b.settings[d[g]], 10);
                b.create({
                    $li: f,
                    index: c
                })
            }), !this.settings.start_timer_on_click && this.settings.timer > 0 ? (this.show("init"), this.startTimer()) : this.show("init")))
        },
        resume: function() {
            this.set_li(), this.show()
        },
        tip_template: function(b) {
            var c, d;
            return b.tip_class = b.tip_class || "", c = a(this.settings.template.tip).addClass(b.tip_class), d = a.trim(a(b.li).html()) + this.prev_button_text(b.prev_button_text, b.index) + this.button_text(b.button_text) + this.settings.template.link + this.timer_instance(b.index), c.append(a(this.settings.template.wrapper)), c.first().attr(this.add_namespace("data-index"), b.index), a(".joyride-content-wrapper", c).append(d), c[0]
        },
        timer_instance: function(b) {
            var c;
            return c = 0 === b && this.settings.start_timer_on_click && this.settings.timer > 0 || 0 === this.settings.timer ? "" : a(this.settings.template.timer)[0].outerHTML
        },
        button_text: function(b) {
            return this.settings.tip_settings.next_button ? (b = a.trim(b) || "Next", b = a(this.settings.template.button).append(b)[0].outerHTML) : b = "", b
        },
        prev_button_text: function(b, c) {
            return this.settings.tip_settings.prev_button ? (b = a.trim(b) || "Previous", b = 0 == c ? a(this.settings.template.prev_button).append(b).addClass("disabled")[0].outerHTML : a(this.settings.template.prev_button).append(b)[0].outerHTML) : b = "", b
        },
        create: function(b) {
            this.settings.tip_settings = a.extend({}, this.settings, this.data_options(b.$li));
            var c = b.$li.attr(this.add_namespace("data-button")) || b.$li.attr(this.add_namespace("data-text")),
                d = b.$li.attr(this.add_namespace("data-button-prev")) || b.$li.attr(this.add_namespace("data-prev-text")),
                e = b.$li.attr("class"),
                f = a(this.tip_template({
                    tip_class: e,
                    index: b.index,
                    button_text: c,
                    prev_button_text: d,
                    li: b.$li
                }));
            a(this.settings.tip_container).append(f)
        },
        show: function(b, c) {
            var e = null;
            if (this.settings.$li === d || -1 === a.inArray(this.settings.$li.index(), this.settings.pause_after))
                if (this.settings.paused ? this.settings.paused = !1 : this.set_li(b, c), this.settings.attempts = 0, this.settings.$li.length && this.settings.$target.length > 0) {
                    if (b && (this.settings.pre_ride_callback(this.settings.$li.index(), this.settings.$next_tip), this.settings.modal && this.show_modal()), this.settings.pre_step_callback(this.settings.$li.index(), this.settings.$next_tip), this.settings.modal && this.settings.expose && this.expose(), this.settings.tip_settings = a.extend({}, this.settings, this.data_options(this.settings.$li)), this.settings.timer = parseInt(this.settings.timer, 10), this.settings.tip_settings.tip_location_pattern = this.settings.tip_location_patterns[this.settings.tip_settings.tip_location], !/body/i.test(this.settings.$target.selector)) {
                        var f = a(".joyride-modal-bg");
                        /pop/i.test(this.settings.tipAnimation) ? f.hide() : f.fadeOut(this.settings.tipAnimationFadeSpeed), this.scroll_to()
                    }
                    this.is_phone() ? this.pos_phone(!0) : this.pos_default(!0), e = this.settings.$next_tip.find(".joyride-timer-indicator"), /pop/i.test(this.settings.tip_animation) ? (e.width(0), this.settings.timer > 0 ? (this.settings.$next_tip.show(), setTimeout(function() {
                        e.animate({
                            width: e.parent().width()
                        }, this.settings.timer, "linear")
                    }.bind(this), this.settings.tip_animation_fade_speed)) : this.settings.$next_tip.show()) : /fade/i.test(this.settings.tip_animation) && (e.width(0), this.settings.timer > 0 ? (this.settings.$next_tip.fadeIn(this.settings.tip_animation_fade_speed).show(), setTimeout(function() {
                        e.animate({
                            width: e.parent().width()
                        }, this.settings.timer, "linear")
                    }.bind(this), this.settings.tip_animation_fade_speed)) : this.settings.$next_tip.fadeIn(this.settings.tip_animation_fade_speed)), this.settings.$current_tip = this.settings.$next_tip
                } else this.settings.$li && this.settings.$target.length < 1 ? this.show(b, c) : this.end();
            else this.settings.paused = !0
        },
        is_phone: function() {
            return matchMedia(Foundation.media_queries.small).matches && !matchMedia(Foundation.media_queries.medium).matches
        },
        hide: function() {
            this.settings.modal && this.settings.expose && this.un_expose(), this.settings.modal || a(".joyride-modal-bg").hide(), this.settings.$current_tip.css("visibility", "hidden"), setTimeout(a.proxy(function() {
                this.hide(), this.css("visibility", "visible")
            }, this.settings.$current_tip), 0), this.settings.post_step_callback(this.settings.$li.index(), this.settings.$current_tip)
        },
        set_li: function(a, b) {
            a ? (this.settings.$li = this.settings.$tip_content.eq(this.settings.start_offset), this.set_next_tip(), this.settings.$current_tip = this.settings.$next_tip) : (this.settings.$li = b ? this.settings.$li.prev() : this.settings.$li.next(), this.set_next_tip()), this.set_target()
        },
        set_next_tip: function() {
            this.settings.$next_tip = a(".joyride-tip-guide").eq(this.settings.$li.index()), this.settings.$next_tip.data("closed", "")
        },
        set_target: function() {
            var b = this.settings.$li.attr(this.add_namespace("data-class")),
                d = this.settings.$li.attr(this.add_namespace("data-id")),
                e = function() {
                    return d ? a(c.getElementById(d)) : b ? a("." + b).first() : a("body")
                };
            this.settings.$target = e()
        },
        scroll_to: function() {
            var c, d;
            c = a(b).height() / 2, d = Math.ceil(this.settings.$target.offset().top - c + this.settings.$next_tip.outerHeight()), 0 != d && a("html, body").stop().animate({
                scrollTop: d
            }, this.settings.scroll_speed, "swing")
        },
        paused: function() {
            return -1 === a.inArray(this.settings.$li.index() + 1, this.settings.pause_after)
        },
        restart: function() {
            this.hide(), this.settings.$li = d, this.show("init")
        },
        pos_default: function(a) {
            var b = this.settings.$next_tip.find(".joyride-nub"),
                c = Math.ceil(b.outerWidth() / 2),
                d = Math.ceil(b.outerHeight() / 2),
                e = a || !1;
            if (e && (this.settings.$next_tip.css("visibility", "hidden"), this.settings.$next_tip.show()), /body/i.test(this.settings.$target.selector)) this.settings.$li.length && this.pos_modal(b);
            else {
                var f = this.settings.tip_settings.tipAdjustmentY ? parseInt(this.settings.tip_settings.tipAdjustmentY) : 0,
                    g = this.settings.tip_settings.tipAdjustmentX ? parseInt(this.settings.tip_settings.tipAdjustmentX) : 0;
                this.bottom() ? (this.settings.$next_tip.css(this.rtl ? {
                    top: this.settings.$target.offset().top + d + this.settings.$target.outerHeight() + f,
                    left: this.settings.$target.offset().left + this.settings.$target.outerWidth() - this.settings.$next_tip.outerWidth() + g
                } : {
                    top: this.settings.$target.offset().top + d + this.settings.$target.outerHeight() + f,
                    left: this.settings.$target.offset().left + g
                }), this.nub_position(b, this.settings.tip_settings.nub_position, "top")) : this.top() ? (this.settings.$next_tip.css(this.rtl ? {
                    top: this.settings.$target.offset().top - this.settings.$next_tip.outerHeight() - d + f,
                    left: this.settings.$target.offset().left + this.settings.$target.outerWidth() - this.settings.$next_tip.outerWidth()
                } : {
                    top: this.settings.$target.offset().top - this.settings.$next_tip.outerHeight() - d + f,
                    left: this.settings.$target.offset().left + g
                }), this.nub_position(b, this.settings.tip_settings.nub_position, "bottom")) : this.right() ? (this.settings.$next_tip.css({
                    top: this.settings.$target.offset().top + f,
                    left: this.settings.$target.outerWidth() + this.settings.$target.offset().left + c + g
                }), this.nub_position(b, this.settings.tip_settings.nub_position, "left")) : this.left() && (this.settings.$next_tip.css({
                    top: this.settings.$target.offset().top + f,
                    left: this.settings.$target.offset().left - this.settings.$next_tip.outerWidth() - c + g
                }), this.nub_position(b, this.settings.tip_settings.nub_position, "right")), !this.visible(this.corners(this.settings.$next_tip)) && this.settings.attempts < this.settings.tip_settings.tip_location_pattern.length && (b.removeClass("bottom").removeClass("top").removeClass("right").removeClass("left"), this.settings.tip_settings.tip_location = this.settings.tip_settings.tip_location_pattern[this.settings.attempts], this.settings.attempts++, this.pos_default())
            }
            e && (this.settings.$next_tip.hide(), this.settings.$next_tip.css("visibility", "visible"))
        },
        pos_phone: function(b) {
            var c = this.settings.$next_tip.outerHeight(),
                d = (this.settings.$next_tip.offset(), this.settings.$target.outerHeight()),
                e = a(".joyride-nub", this.settings.$next_tip),
                f = Math.ceil(e.outerHeight() / 2),
                g = b || !1;
            e.removeClass("bottom").removeClass("top").removeClass("right").removeClass("left"), g && (this.settings.$next_tip.css("visibility", "hidden"), this.settings.$next_tip.show()), /body/i.test(this.settings.$target.selector) ? this.settings.$li.length && this.pos_modal(e) : this.top() ? (this.settings.$next_tip.offset({
                top: this.settings.$target.offset().top - c - f
            }), e.addClass("bottom")) : (this.settings.$next_tip.offset({
                top: this.settings.$target.offset().top + d + f
            }), e.addClass("top")), g && (this.settings.$next_tip.hide(), this.settings.$next_tip.css("visibility", "visible"))
        },
        pos_modal: function(a) {
            this.center(), a.hide(), this.show_modal()
        },
        show_modal: function() {
            if (!this.settings.$next_tip.data("closed")) {
                var b = a(".joyride-modal-bg");
                if (b.length < 1) {
                    var b = a(this.settings.template.modal);
                    b.appendTo("body")
                }
                /pop/i.test(this.settings.tip_animation) ? b.show() : b.fadeIn(this.settings.tip_animation_fade_speed)
            }
        },
        expose: function() {
            var c, d, e, f, g, h = "expose-" + this.random_str(6);
            if (arguments.length > 0 && arguments[0] instanceof a) e = arguments[0];
            else {
                if (!this.settings.$target || /body/i.test(this.settings.$target.selector)) return !1;
                e = this.settings.$target
            }
            return e.length < 1 ? (b.console && console.error("element not valid", e), !1) : (c = a(this.settings.template.expose), this.settings.$body.append(c), c.css({
                top: e.offset().top,
                left: e.offset().left,
                width: e.outerWidth(!0),
                height: e.outerHeight(!0)
            }), d = a(this.settings.template.expose_cover), f = {
                zIndex: e.css("z-index"),
                position: e.css("position")
            }, g = null == e.attr("class") ? "" : e.attr("class"), e.css("z-index", parseInt(c.css("z-index")) + 1), "static" == f.position && e.css("position", "relative"), e.data("expose-css", f), e.data("orig-class", g), e.attr("class", g + " " + this.settings.expose_add_class), d.css({
                top: e.offset().top,
                left: e.offset().left,
                width: e.outerWidth(!0),
                height: e.outerHeight(!0)
            }), this.settings.modal && this.show_modal(), this.settings.$body.append(d), c.addClass(h), d.addClass(h), e.data("expose", h), this.settings.post_expose_callback(this.settings.$li.index(), this.settings.$next_tip, e), void this.add_exposed(e))
        },
        un_expose: function() {
            var c, d, e, f, g, h = !1;
            if (arguments.length > 0 && arguments[0] instanceof a) d = arguments[0];
            else {
                if (!this.settings.$target || /body/i.test(this.settings.$target.selector)) return !1;
                d = this.settings.$target
            }
            return d.length < 1 ? (b.console && console.error("element not valid", d), !1) : (c = d.data("expose"), e = a("." + c), arguments.length > 1 && (h = arguments[1]), h === !0 ? a(".joyride-expose-wrapper,.joyride-expose-cover").remove() : e.remove(), f = d.data("expose-css"), "auto" == f.zIndex ? d.css("z-index", "") : d.css("z-index", f.zIndex), f.position != d.css("position") && ("static" == f.position ? d.css("position", "") : d.css("position", f.position)), g = d.data("orig-class"), d.attr("class", g), d.removeData("orig-classes"), d.removeData("expose"), d.removeData("expose-z-index"), void this.remove_exposed(d))
        },
        add_exposed: function(b) {
            this.settings.exposed = this.settings.exposed || [], b instanceof a || "object" == typeof b ? this.settings.exposed.push(b[0]) : "string" == typeof b && this.settings.exposed.push(b)
        },
        remove_exposed: function(b) {
            var c, d;
            for (b instanceof a ? c = b[0] : "string" == typeof b && (c = b), this.settings.exposed = this.settings.exposed || [], d = this.settings.exposed.length; d--;)
                if (this.settings.exposed[d] == c) return void this.settings.exposed.splice(d, 1)
        },
        center: function() {
            var c = a(b);
            return this.settings.$next_tip.css({
                top: (c.height() - this.settings.$next_tip.outerHeight()) / 2 + c.scrollTop(),
                left: (c.width() - this.settings.$next_tip.outerWidth()) / 2 + c.scrollLeft()
            }), !0
        },
        bottom: function() {
            return /bottom/i.test(this.settings.tip_settings.tip_location)
        },
        top: function() {
            return /top/i.test(this.settings.tip_settings.tip_location)
        },
        right: function() {
            return /right/i.test(this.settings.tip_settings.tip_location)
        },
        left: function() {
            return /left/i.test(this.settings.tip_settings.tip_location)
        },
        corners: function(c) {
            var d = a(b),
                e = d.height() / 2,
                f = Math.ceil(this.settings.$target.offset().top - e + this.settings.$next_tip.outerHeight()),
                g = d.width() + d.scrollLeft(),
                h = d.height() + f,
                i = d.height() + d.scrollTop(),
                j = d.scrollTop();
            return j > f && (j = 0 > f ? 0 : f), h > i && (i = h), [c.offset().top < j, g < c.offset().left + c.outerWidth(), i < c.offset().top + c.outerHeight(), d.scrollLeft() > c.offset().left]
        },
        visible: function(a) {
            for (var b = a.length; b--;)
                if (a[b]) return !1;
            return !0
        },
        nub_position: function(a, b, c) {
            a.addClass("auto" === b ? c : b)
        },
        startTimer: function() {
            this.settings.$li.length ? this.settings.automate = setTimeout(function() {
                this.hide(), this.show(), this.startTimer()
            }.bind(this), this.settings.timer) : clearTimeout(this.settings.automate)
        },
        end: function(b) {
            this.settings.cookie_monster && a.cookie(this.settings.cookie_name, "ridden", {
                expires: this.settings.cookie_expires,
                domain: this.settings.cookie_domain
            }), this.settings.timer > 0 && clearTimeout(this.settings.automate), this.settings.modal && this.settings.expose && this.un_expose(), a(this.scope).off("keyup.joyride"), this.settings.$next_tip.data("closed", !0), this.settings.riding = !1, a(".joyride-modal-bg").hide(), this.settings.$current_tip.hide(), ("undefined" == typeof b || b === !1) && (this.settings.post_step_callback(this.settings.$li.index(), this.settings.$current_tip), this.settings.post_ride_callback(this.settings.$li.index(), this.settings.$current_tip)), a(".joyride-tip-guide").remove()
        },
        off: function() {
            a(this.scope).off(".joyride"), a(b).off(".joyride"), a(".joyride-close-tip, .joyride-next-tip, .joyride-modal-bg").off(".joyride"), a(".joyride-tip-guide, .joyride-modal-bg").remove(), clearTimeout(this.settings.automate), this.settings = {}
        },
        reflow: function() {}
    }
}(jQuery, window, window.document),
function(a, b) {
    "use strict";
    Foundation.libs["magellan-expedition"] = {
        name: "magellan-expedition",
        version: "5.5.1",
        settings: {
            active_class: "active",
            threshold: 0,
            destination_threshold: 20,
            throttle_delay: 30,
            fixed_top: 0,
            offset_by_height: !0,
            duration: 700,
            easing: "swing"
        },
        init: function(a, b, c) {
            Foundation.inherit(this, "throttle"), this.bindings(b, c)
        },
        events: function() {
            var c = this,
                d = c.S,
                e = c.settings;
            c.set_expedition_position(), d(c.scope).off(".magellan").on("click.fndtn.magellan", "[" + c.add_namespace("data-magellan-arrival") + '] a[href^="#"]', function(b) {
                b.preventDefault();
                var d = a(this).closest("[" + c.attr_name() + "]"),
                    e = d.data("magellan-expedition-init"),
                    f = this.hash.split("#").join(""),
                    g = a('a[name="' + f + '"]');
                0 === g.length && (g = a("#" + f));
                var h = g.offset().top - e.destination_threshold + 1;
                e.offset_by_height && (h -= d.outerHeight()), a("html, body").stop().animate({
                    scrollTop: h
                }, e.duration, e.easing, function() {
                    history.pushState ? history.pushState(null, null, "#" + f) : location.hash = "#" + f
                })
            }).on("scroll.fndtn.magellan", c.throttle(this.check_for_arrivals.bind(this), e.throttle_delay)), a(b).on("resize.fndtn.magellan", c.throttle(this.set_expedition_position.bind(this), e.throttle_delay))
        },
        check_for_arrivals: function() {
            var a = this;
            a.update_arrivals(), a.update_expedition_positions()
        },
        set_expedition_position: function() {
            var b = this;
            a("[" + this.attr_name() + "=fixed]", b.scope).each(function() {
                var c, d, e = a(this),
                    f = e.data("magellan-expedition-init"),
                    g = e.attr("styles");
                e.attr("style", ""), c = e.offset().top + f.threshold, d = parseInt(e.data("magellan-fixed-top")), isNaN(d) || (b.settings.fixed_top = d), e.data(b.data_attr("magellan-top-offset"), c), e.attr("style", g)
            })
        },
        update_expedition_positions: function() {
            var c = this,
                d = a(b).scrollTop();
            a("[" + this.attr_name() + "=fixed]", c.scope).each(function() {
                var b = a(this),
                    e = b.data("magellan-expedition-init"),
                    f = b.attr("style"),
                    g = b.data("magellan-top-offset");
                if (d + c.settings.fixed_top >= g) {
                    var h = b.prev("[" + c.add_namespace("data-magellan-expedition-clone") + "]");
                    0 === h.length && (h = b.clone(), h.removeAttr(c.attr_name()), h.attr(c.add_namespace("data-magellan-expedition-clone"), ""), b.before(h)), b.css({
                        position: "fixed",
                        top: e.fixed_top
                    }).addClass("fixed")
                } else b.prev("[" + c.add_namespace("data-magellan-expedition-clone") + "]").remove(), b.attr("style", f).css("position", "").css("top", "").removeClass("fixed")
            })
        },
        update_arrivals: function() {
            var c = this,
                d = a(b).scrollTop();
            a("[" + this.attr_name() + "]", c.scope).each(function() {
                var b = a(this),
                    e = b.data(c.attr_name(!0) + "-init"),
                    f = c.offsets(b, d),
                    g = b.find("[" + c.add_namespace("data-magellan-arrival") + "]"),
                    h = !1;
                f.each(function(a, d) {
                    if (d.viewport_offset >= d.top_offset) {
                        var f = b.find("[" + c.add_namespace("data-magellan-arrival") + "]");
                        return f.not(d.arrival).removeClass(e.active_class), d.arrival.addClass(e.active_class), h = !0, !0
                    }
                }), h || g.removeClass(e.active_class)
            })
        },
        offsets: function(b, c) {
            var d = this,
                e = b.data(d.attr_name(!0) + "-init"),
                f = c;
            return b.find("[" + d.add_namespace("data-magellan-arrival") + "]").map(function() {
                var c = a(this).data(d.data_attr("magellan-arrival")),
                    g = a("[" + d.add_namespace("data-magellan-destination") + "=" + c + "]");
                if (g.length > 0) {
                    var h = g.offset().top - e.destination_threshold;
                    return e.offset_by_height && (h -= b.outerHeight()), h = Math.floor(h), {
                        destination: g,
                        arrival: a(this),
                        top_offset: h,
                        viewport_offset: f
                    }
                }
            }).sort(function(a, b) {
                return a.top_offset < b.top_offset ? -1 : a.top_offset > b.top_offset ? 1 : 0
            })
        },
        data_attr: function(a) {
            return this.namespace.length > 0 ? this.namespace + "-" + a : a
        },
        off: function() {
            this.S(this.scope).off(".magellan"), this.S(b).off(".magellan")
        },
        reflow: function() {
            var b = this;
            a("[" + b.add_namespace("data-magellan-expedition-clone") + "]", b.scope).remove()
        }
    }
}(jQuery, window, window.document),
function(a) {
    "use strict";
    Foundation.libs.offcanvas = {
        name: "offcanvas",
        version: "5.5.1",
        settings: {
            open_method: "move",
            close_on_click: !1
        },
        init: function(a, b, c) {
            this.bindings(b, c)
        },
        events: function() {
            var b = this,
                c = b.S,
                d = "",
                e = "",
                f = "";
            "move" === this.settings.open_method ? (d = "move-", e = "right", f = "left") : "overlap_single" === this.settings.open_method ? (d = "offcanvas-overlap-", e = "right", f = "left") : "overlap" === this.settings.open_method && (d = "offcanvas-overlap"), c(this.scope).off(".offcanvas").on("click.fndtn.offcanvas", ".left-off-canvas-toggle", function(f) {
                b.click_toggle_class(f, d + e), "overlap" !== b.settings.open_method && c(".left-submenu").removeClass(d + e), a(".left-off-canvas-toggle").attr("aria-expanded", "true")
            }).on("click.fndtn.offcanvas", ".left-off-canvas-menu a", function(f) {
                var g = b.get_settings(f),
                    h = c(this).parent();
                !g.close_on_click || h.hasClass("has-submenu") || h.hasClass("back") ? c(this).parent().hasClass("has-submenu") ? (f.preventDefault(), c(this).siblings(".left-submenu").toggleClass(d + e)) : h.hasClass("back") && (f.preventDefault(), h.parent().removeClass(d + e)) : (b.hide.call(b, d + e, b.get_wrapper(f)), h.parent().removeClass(d + e)), a(".left-off-canvas-toggle").attr("aria-expanded", "true")
            }).on("click.fndtn.offcanvas", ".right-off-canvas-toggle", function(e) {
                b.click_toggle_class(e, d + f), "overlap" !== b.settings.open_method && c(".right-submenu").removeClass(d + f), a(".right-off-canvas-toggle").attr("aria-expanded", "true")
            }).on("click.fndtn.offcanvas", ".right-off-canvas-menu a", function(e) {
                var g = b.get_settings(e),
                    h = c(this).parent();
                !g.close_on_click || h.hasClass("has-submenu") || h.hasClass("back") ? c(this).parent().hasClass("has-submenu") ? (e.preventDefault(), c(this).siblings(".right-submenu").toggleClass(d + f)) : h.hasClass("back") && (e.preventDefault(), h.parent().removeClass(d + f)) : (b.hide.call(b, d + f, b.get_wrapper(e)), h.parent().removeClass(d + f)), a(".right-off-canvas-toggle").attr("aria-expanded", "true")
            }).on("click.fndtn.offcanvas", ".exit-off-canvas", function(g) {
                b.click_remove_class(g, d + f), c(".right-submenu").removeClass(d + f), e && (b.click_remove_class(g, d + e), c(".left-submenu").removeClass(d + f)), a(".right-off-canvas-toggle").attr("aria-expanded", "true")
            }).on("click.fndtn.offcanvas", ".exit-off-canvas", function(c) {
                b.click_remove_class(c, d + f), a(".left-off-canvas-toggle").attr("aria-expanded", "false"), e && (b.click_remove_class(c, d + e), a(".right-off-canvas-toggle").attr("aria-expanded", "false"))
            })
        },
        toggle: function(a, b) {
            b = b || this.get_wrapper(), b.is("." + a) ? this.hide(a, b) : this.show(a, b)
        },
        show: function(a, b) {
            b = b || this.get_wrapper(), b.trigger("open").trigger("open.fndtn.offcanvas"), b.addClass(a)
        },
        hide: function(a, b) {
            b = b || this.get_wrapper(), b.trigger("close").trigger("close.fndtn.offcanvas"), b.removeClass(a)
        },
        click_toggle_class: function(a, b) {
            a.preventDefault();
            var c = this.get_wrapper(a);
            this.toggle(b, c)
        },
        click_remove_class: function(a, b) {
            a.preventDefault();
            var c = this.get_wrapper(a);
            this.hide(b, c)
        },
        get_settings: function(a) {
            var b = this.S(a.target).closest("[" + this.attr_name() + "]");
            return b.data(this.attr_name(!0) + "-init") || this.settings
        },
        get_wrapper: function(a) {
            var b = this.S(a ? a.target : this.scope).closest(".off-canvas-wrap");
            return 0 === b.length && (b = this.S(".off-canvas-wrap")), b
        },
        reflow: function() {}
    }
}(jQuery, window, window.document),
function(a, b, c, d) {
    "use strict";
    var e = function() {},
        f = function(e, f) {
            if (e.hasClass(f.slides_container_class)) return this;
            var j, k, l, m, n, o, p = this,
                q = e,
                r = 0,
                s = !1;
            p.slides = function() {
                return q.children(f.slide_selector)
            }, p.slides().first().addClass(f.active_slide_class), p.update_slide_number = function(b) {
                f.slide_number && (k.find("span:first").text(parseInt(b) + 1), k.find("span:last").text(p.slides().length)), f.bullets && (l.children().removeClass(f.bullets_active_class), a(l.children().get(b)).addClass(f.bullets_active_class))
            }, p.update_active_link = function(b) {
                var c = a('[data-orbit-link="' + p.slides().eq(b).attr("data-orbit-slide") + '"]');
                c.siblings().removeClass(f.bullets_active_class), c.addClass(f.bullets_active_class)
            }, p.build_markup = function() {
                q.wrap('<div class="' + f.container_class + '"></div>'), j = q.parent(), q.addClass(f.slides_container_class), f.stack_on_small && j.addClass(f.stack_on_small_class), f.navigation_arrows && (j.append(a('<a href="#"><span></span></a>').addClass(f.prev_class)), j.append(a('<a href="#"><span></span></a>').addClass(f.next_class))), f.timer && (m = a("<div>").addClass(f.timer_container_class), m.append("<span>"), m.append(a("<div>").addClass(f.timer_progress_class)), m.addClass(f.timer_paused_class), j.append(m)), f.slide_number && (k = a("<div>").addClass(f.slide_number_class), k.append("<span></span> " + f.slide_number_text + " <span></span>"), j.append(k)), f.bullets && (l = a("<ol>").addClass(f.bullets_container_class), j.append(l), l.wrap('<div class="orbit-bullets-container"></div>'), p.slides().each(function(b) {
                    var c = a("<li>").attr("data-orbit-slide", b).on("click", p.link_bullet);
                    l.append(c)
                }))
            }, p._goto = function(b, c) {
                if (b === r) return !1;
                "object" == typeof o && o.restart();
                var d = p.slides(),
                    e = "next";
                if (s = !0, r > b && (e = "prev"), b >= d.length) {
                    if (!f.circular) return !1;
                    b = 0
                } else if (0 > b) {
                    if (!f.circular) return !1;
                    b = d.length - 1
                }
                var g = a(d.get(r)),
                    h = a(d.get(b));
                g.css("zIndex", 2), g.removeClass(f.active_slide_class), h.css("zIndex", 4).addClass(f.active_slide_class), q.trigger("before-slide-change.fndtn.orbit"), f.before_slide_change(), p.update_active_link(b);
                var i = function() {
                    var a = function() {
                        r = b, s = !1, c === !0 && (o = p.create_timer(), o.start()), p.update_slide_number(r), q.trigger("after-slide-change.fndtn.orbit", [{
                            slide_number: r,
                            total_slides: d.length
                        }]), f.after_slide_change(r, d.length)
                    };
                    q.outerHeight() != h.outerHeight() && f.variable_height ? q.animate({
                        height: h.outerHeight()
                    }, 250, "linear", a) : a()
                };
                if (1 === d.length) return i(), !1;
                var j = function() {
                    "next" === e && n.next(g, h, i), "prev" === e && n.prev(g, h, i)
                };
                h.outerHeight() > q.outerHeight() && f.variable_height ? q.animate({
                    height: h.outerHeight()
                }, 250, "linear", j) : j()
            }, p.next = function(a) {
                a.stopImmediatePropagation(), a.preventDefault(), p._goto(r + 1)
            }, p.prev = function(a) {
                a.stopImmediatePropagation(), a.preventDefault(), p._goto(r - 1)
            }, p.link_custom = function(b) {
                b.preventDefault();
                var c = a(this).attr("data-orbit-link");
                if ("string" == typeof c && "" != (c = a.trim(c))) {
                    var d = j.find("[data-orbit-slide=" + c + "]"); - 1 != d.index() && p._goto(d.index())
                }
            }, p.link_bullet = function() {
                var b = a(this).attr("data-orbit-slide");
                if ("string" == typeof b && "" != (b = a.trim(b)))
                    if (isNaN(parseInt(b))) {
                        var c = j.find("[data-orbit-slide=" + b + "]"); - 1 != c.index() && p._goto(c.index() + 1)
                    } else p._goto(parseInt(b))
            }, p.timer_callback = function() {
                p._goto(r + 1, !0)
            }, p.compute_dimensions = function() {
                var b = a(p.slides().get(r)),
                    c = b.outerHeight();
                f.variable_height || p.slides().each(function() {
                    a(this).outerHeight() > c && (c = a(this).outerHeight())
                }), q.height(c)
            }, p.create_timer = function() {
                var a = new g(j.find("." + f.timer_container_class), f, p.timer_callback);
                return a
            }, p.stop_timer = function() {
                "object" == typeof o && o.stop()
            }, p.toggle_timer = function() {
                var a = j.find("." + f.timer_container_class);
                a.hasClass(f.timer_paused_class) ? ("undefined" == typeof o && (o = p.create_timer()), o.start()) : "object" == typeof o && o.stop()
            }, p.init = function() {
                p.build_markup(), f.timer && (o = p.create_timer(), Foundation.utils.image_loaded(this.slides().children("img"), o.start)), n = new i(f, q), "slide" === f.animation && (n = new h(f, q)), j.on("click", "." + f.next_class, p.next), j.on("click", "." + f.prev_class, p.prev), f.next_on_click && j.on("click", "." + f.slides_container_class + " [data-orbit-slide]", p.link_bullet), j.on("click", p.toggle_timer), f.swipe && j.on("touchstart.fndtn.orbit", function(a) {
                    a.touches || (a = a.originalEvent);
                    var b = {
                        start_page_x: a.touches[0].pageX,
                        start_page_y: a.touches[0].pageY,
                        start_time: (new Date).getTime(),
                        delta_x: 0,
                        is_scrolling: d
                    };
                    j.data("swipe-transition", b), a.stopPropagation()
                }).on("touchmove.fndtn.orbit", function(a) {
                    if (a.touches || (a = a.originalEvent), !(a.touches.length > 1 || a.scale && 1 !== a.scale)) {
                        var b = j.data("swipe-transition");
                        if ("undefined" == typeof b && (b = {}), b.delta_x = a.touches[0].pageX - b.start_page_x, "undefined" == typeof b.is_scrolling && (b.is_scrolling = !!(b.is_scrolling || Math.abs(b.delta_x) < Math.abs(a.touches[0].pageY - b.start_page_y))), !b.is_scrolling && !b.active) {
                            a.preventDefault();
                            var c = b.delta_x < 0 ? r + 1 : r - 1;
                            b.active = !0, p._goto(c)
                        }
                    }
                }).on("touchend.fndtn.orbit", function(a) {
                    j.data("swipe-transition", {}), a.stopPropagation()
                }), j.on("mouseenter.fndtn.orbit", function() {
                    f.timer && f.pause_on_hover && p.stop_timer()
                }).on("mouseleave.fndtn.orbit", function() {
                    f.timer && f.resume_on_mouseout && o.start()
                }), a(c).on("click", "[data-orbit-link]", p.link_custom), a(b).on("load resize", p.compute_dimensions), Foundation.utils.image_loaded(this.slides().children("img"), p.compute_dimensions), Foundation.utils.image_loaded(this.slides().children("img"), function() {
                    j.prev("." + f.preloader_class).css("display", "none"), p.update_slide_number(0), p.update_active_link(0), q.trigger("ready.fndtn.orbit")
                })
            }, p.init()
        },
        g = function(a, b, c) {
            var d, e, f = this,
                g = b.timer_speed,
                h = a.find("." + b.timer_progress_class),
                i = -1;
            this.update_progress = function(a) {
                var b = h.clone();
                b.attr("style", ""), b.css("width", a + "%"), h.replaceWith(b), h = b
            }, this.restart = function() {
                clearTimeout(e), a.addClass(b.timer_paused_class), i = -1, f.update_progress(0)
            }, this.start = function() {
                return a.hasClass(b.timer_paused_class) ? (i = -1 === i ? g : i, a.removeClass(b.timer_paused_class), d = (new Date).getTime(), h.animate({
                    width: "100%"
                }, i, "linear"), e = setTimeout(function() {
                    f.restart(), c()
                }, i), void a.trigger("timer-started.fndtn.orbit")) : !0
            }, this.stop = function() {
                if (a.hasClass(b.timer_paused_class)) return !0;
                clearTimeout(e), a.addClass(b.timer_paused_class);
                var c = (new Date).getTime();
                i -= c - d;
                var h = 100 - i / g * 100;
                f.update_progress(h), a.trigger("timer-stopped.fndtn.orbit")
            }
        },
        h = function(b) {
            var c = b.animation_speed,
                d = 1 === a("html[dir=rtl]").length,
                e = d ? "marginRight" : "marginLeft",
                f = {};
            f[e] = "0%", this.next = function(a, b, d) {
                a.animate({
                    marginLeft: "-100%"
                }, c), b.animate(f, c, function() {
                    a.css(e, "100%"), d()
                })
            }, this.prev = function(a, b, d) {
                a.animate({
                    marginLeft: "100%"
                }, c), b.css(e, "-100%"), b.animate(f, c, function() {
                    a.css(e, "100%"), d()
                })
            }
        },
        i = function(b) {
            {
                var c = b.animation_speed;
                1 === a("html[dir=rtl]").length
            }
            this.next = function(a, b, d) {
                b.css({
                    margin: "0%",
                    opacity: "0.01"
                }), b.animate({
                    opacity: "1"
                }, c, "linear", function() {
                    a.css("margin", "100%"), d()
                })
            }, this.prev = function(a, b, d) {
                b.css({
                    margin: "0%",
                    opacity: "0.01"
                }), b.animate({
                    opacity: "1"
                }, c, "linear", function() {
                    a.css("margin", "100%"), d()
                })
            }
        };
    Foundation.libs = Foundation.libs || {}, Foundation.libs.orbit = {
        name: "orbit",
        version: "5.5.1",
        settings: {
            animation: "slide",
            timer_speed: 1e4,
            pause_on_hover: !0,
            resume_on_mouseout: !1,
            next_on_click: !0,
            animation_speed: 500,
            stack_on_small: !1,
            navigation_arrows: !0,
            slide_number: !0,
            slide_number_text: "of",
            container_class: "orbit-container",
            stack_on_small_class: "orbit-stack-on-small",
            next_class: "orbit-next",
            prev_class: "orbit-prev",
            timer_container_class: "orbit-timer",
            timer_paused_class: "paused",
            timer_progress_class: "orbit-progress",
            slides_container_class: "orbit-slides-container",
            preloader_class: "preloader",
            slide_selector: "*",
            bullets_container_class: "orbit-bullets",
            bullets_active_class: "active",
            slide_number_class: "orbit-slide-number",
            caption_class: "orbit-caption",
            active_slide_class: "active",
            orbit_transition_class: "orbit-transitioning",
            bullets: !0,
            circular: !0,
            timer: !0,
            variable_height: !1,
            swipe: !0,
            before_slide_change: e,
            after_slide_change: e
        },
        init: function(a, b, c) {
            this.bindings(b, c)
        },
        events: function(a) {
            var b = new f(this.S(a), this.S(a).data("orbit-init"));
            this.S(a).data(this.name + "-instance", b)
        },
        reflow: function() {
            var a = this;
            if (a.S(a.scope).is("[data-orbit]")) {
                var b = a.S(a.scope),
                    c = b.data(a.name + "-instance");
                c.compute_dimensions()
            } else a.S("[data-orbit]", a.scope).each(function(b, c) {
                var d = a.S(c),
                    e = (a.data_options(d), d.data(a.name + "-instance"));
                e.compute_dimensions()
            })
        }
    }
}(jQuery, window, window.document),
function(a, b, c, d) {
    "use strict";

    function e(a) {
        var b = /fade/i.test(a),
            c = /pop/i.test(a);
        return {
            animate: b || c,
            pop: c,
            fade: b
        }
    }
    Foundation.libs.reveal = {
        name: "reveal",
        version: "5.5.1",
        locked: !1,
        settings: {
            animation: "fadeAndPop",
            animation_speed: 250,
            close_on_background_click: !0,
            close_on_esc: !0,
            dismiss_modal_class: "close-reveal-modal",
            multiple_opened: !1,
            bg_class: "reveal-modal-bg",
            root_element: "body",
            open: function() {},
            opened: function() {},
            close: function() {},
            closed: function() {},
            bg: a(".reveal-modal-bg"),
            css: {
                open: {
                    opacity: 0,
                    visibility: "visible",
                    display: "block"
                },
                close: {
                    opacity: 1,
                    visibility: "hidden",
                    display: "none"
                }
            }
        },
        init: function(b, c, d) {
            a.extend(!0, this.settings, c, d), this.bindings(c, d)
        },
        events: function() {
            var a = this,
                b = a.S;
            return b(this.scope).off(".reveal").on("click.fndtn.reveal", "[" + this.add_namespace("data-reveal-id") + "]:not([disabled])", function(c) {
                if (c.preventDefault(), !a.locked) {
                    var d = b(this),
                        e = d.data(a.data_attr("reveal-ajax"));
                    if (a.locked = !0, "undefined" == typeof e) a.open.call(a, d);
                    else {
                        var f = e === !0 ? d.attr("href") : e;
                        a.open.call(a, d, {
                            url: f
                        })
                    }
                }
            }), b(c).on("click.fndtn.reveal", this.close_targets(), function(c) {
                if (c.preventDefault(), !a.locked) {
                    var d = b("[" + a.attr_name() + "].open").data(a.attr_name(!0) + "-init") || a.settings,
                        e = b(c.target)[0] === b("." + d.bg_class)[0];
                    if (e) {
                        if (!d.close_on_background_click) return;
                        c.stopPropagation()
                    }
                    a.locked = !0, a.close.call(a, e ? b("[" + a.attr_name() + "].open") : b(this).closest("[" + a.attr_name() + "]"))
                }
            }), b("[" + a.attr_name() + "]", this.scope).length > 0 ? b(this.scope).on("open.fndtn.reveal", this.settings.open).on("opened.fndtn.reveal", this.settings.opened).on("opened.fndtn.reveal", this.open_video).on("close.fndtn.reveal", this.settings.close).on("closed.fndtn.reveal", this.settings.closed).on("closed.fndtn.reveal", this.close_video) : b(this.scope).on("open.fndtn.reveal", "[" + a.attr_name() + "]", this.settings.open).on("opened.fndtn.reveal", "[" + a.attr_name() + "]", this.settings.opened).on("opened.fndtn.reveal", "[" + a.attr_name() + "]", this.open_video).on("close.fndtn.reveal", "[" + a.attr_name() + "]", this.settings.close).on("closed.fndtn.reveal", "[" + a.attr_name() + "]", this.settings.closed).on("closed.fndtn.reveal", "[" + a.attr_name() + "]", this.close_video), !0
        },
        key_up_on: function() {
            var a = this;
            return a.S("body").off("keyup.fndtn.reveal").on("keyup.fndtn.reveal", function(b) {
                var c = a.S("[" + a.attr_name() + "].open"),
                    d = c.data(a.attr_name(!0) + "-init") || a.settings;
                d && 27 === b.which && d.close_on_esc && !a.locked && a.close.call(a, c)
            }), !0
        },
        key_up_off: function() {
            return this.S("body").off("keyup.fndtn.reveal"), !0
        },
        open: function(c, d) {
            var e, f = this;
            c ? "undefined" != typeof c.selector ? e = f.S("#" + c.data(f.data_attr("reveal-id"))).first() : (e = f.S(this.scope), d = c) : e = f.S(this.scope);
            var g = e.data(f.attr_name(!0) + "-init");
            if (g = g || this.settings, e.hasClass("open") && c.attr("data-reveal-id") == e.attr("id")) return f.close(e);
            if (!e.hasClass("open")) {
                var h = f.S("[" + f.attr_name() + "].open");
                if ("undefined" == typeof e.data("css-top") && e.data("css-top", parseInt(e.css("top"), 10)).data("offset", this.cache_offset(e)), this.key_up_on(e), e.on("open.fndtn.reveal").trigger("open.fndtn.reveal"), h.length < 1 && this.toggle_bg(e, !0), "string" == typeof d && (d = {
                        url: d
                    }), "undefined" != typeof d && d.url) {
                    var i = "undefined" != typeof d.success ? d.success : null;
                    a.extend(d, {
                        success: function(b, c, d) {
                            if (a.isFunction(i)) {
                                var j = i(b, c, d);
                                "string" == typeof j && (b = j)
                            }
                            e.html(b), f.S(e).foundation("section", "reflow"), f.S(e).children().foundation(), h.length > 0 && (g.multiple_opened ? this.to_back(h) : this.hide(h, g.css.close)), f.show(e, g.css.open)
                        }
                    }), a.ajax(d)
                } else h.length > 0 && (g.multiple_opened ? this.to_back(h) : this.hide(h, g.css.close)), this.show(e, g.css.open)
            }
            f.S(b).trigger("resize")
        },
        close: function(b) {
            var b = b && b.length ? b : this.S(this.scope),
                c = this.S("[" + this.attr_name() + "].open"),
                d = b.data(this.attr_name(!0) + "-init") || this.settings;
            c.length > 0 && (this.locked = !0, this.key_up_off(b), b.trigger("close").trigger("close.fndtn.reveal"), (d.multiple_opened && 1 === c.length || !d.multiple_opened || b.length > 1) && (this.toggle_bg(b, !1), this.to_front(b)), d.multiple_opened ? (this.hide(b, d.css.close, d), this.to_front(a(a.makeArray(c).reverse()[1]))) : this.hide(c, d.css.close, d))
        },
        close_targets: function() {
            var a = "." + this.settings.dismiss_modal_class;
            return this.settings.close_on_background_click ? a + ", ." + this.settings.bg_class : a
        },
        toggle_bg: function(b, c) {
            0 === this.S("." + this.settings.bg_class).length && (this.settings.bg = a("<div />", {
                "class": this.settings.bg_class
            }).appendTo("body").hide());
            var e = this.settings.bg.filter(":visible").length > 0;
            c != e && ((c == d ? e : !c) ? this.hide(this.settings.bg) : this.show(this.settings.bg))
        },
        show: function(c, d) {
            if (d) {
                var f = c.data(this.attr_name(!0) + "-init") || this.settings,
                    g = f.root_element;
                if (0 === c.parent(g).length) {
                    var h = c.wrap('<div style="display: none;" />').parent();
                    c.on("closed.fndtn.reveal.wrapped", function() {
                        c.detach().appendTo(h), c.unwrap().unbind("closed.fndtn.reveal.wrapped")
                    }), c.detach().appendTo(g)
                }
                var i = e(f.animation);
                if (i.animate || (this.locked = !1), i.pop) {
                    d.top = a(b).scrollTop() - c.data("offset") + "px";
                    var j = {
                        top: a(b).scrollTop() + c.data("css-top") + "px",
                        opacity: 1
                    };
                    return setTimeout(function() {
                        return c.css(d).animate(j, f.animation_speed, "linear", function() {
                            this.locked = !1, c.trigger("opened").trigger("opened.fndtn.reveal")
                        }.bind(this)).addClass("open")
                    }.bind(this), f.animation_speed / 2)
                }
                if (i.fade) {
                    d.top = a(b).scrollTop() + c.data("css-top") + "px";
                    var j = {
                        opacity: 1
                    };
                    return setTimeout(function() {
                        return c.css(d).animate(j, f.animation_speed, "linear", function() {
                            this.locked = !1, c.trigger("opened").trigger("opened.fndtn.reveal")
                        }.bind(this)).addClass("open")
                    }.bind(this), f.animation_speed / 2)
                }
                return c.css(d).show().css({
                    opacity: 1
                }).addClass("open").trigger("opened").trigger("opened.fndtn.reveal")
            }
            var f = this.settings;
            return e(f.animation).fade ? c.fadeIn(f.animation_speed / 2) : (this.locked = !1, c.show())
        },
        to_back: function(a) {
            a.addClass("toback")
        },
        to_front: function(a) {
            a.removeClass("toback")
        },
        hide: function(c, d) {
            if (d) {
                var f = c.data(this.attr_name(!0) + "-init");
                f = f || this.settings;
                var g = e(f.animation);
                if (g.animate || (this.locked = !1), g.pop) {
                    var h = {
                        top: -a(b).scrollTop() - c.data("offset") + "px",
                        opacity: 0
                    };
                    return setTimeout(function() {
                        return c.animate(h, f.animation_speed, "linear", function() {
                            this.locked = !1, c.css(d).trigger("closed").trigger("closed.fndtn.reveal")
                        }.bind(this)).removeClass("open")
                    }.bind(this), f.animation_speed / 2)
                }
                if (g.fade) {
                    var h = {
                        opacity: 0
                    };
                    return setTimeout(function() {
                        return c.animate(h, f.animation_speed, "linear", function() {
                            this.locked = !1, c.css(d).trigger("closed").trigger("closed.fndtn.reveal")
                        }.bind(this)).removeClass("open")
                    }.bind(this), f.animation_speed / 2)
                }
                return c.hide().css(d).removeClass("open").trigger("closed").trigger("closed.fndtn.reveal")
            }
            var f = this.settings;
            return e(f.animation).fade ? c.fadeOut(f.animation_speed / 2) : c.hide()
        },
        close_video: function(b) {
            var c = a(".flex-video", b.target),
                d = a("iframe", c);
            d.length > 0 && (d.attr("data-src", d[0].src), d.attr("src", d.attr("src")), c.hide())
        },
        open_video: function(b) {
            var c = a(".flex-video", b.target),
                e = c.find("iframe");
            if (e.length > 0) {
                var f = e.attr("data-src");
                if ("string" == typeof f) e[0].src = e.attr("data-src");
                else {
                    var g = e[0].src;
                    e[0].src = d, e[0].src = g
                }
                c.show()
            }
        },
        data_attr: function(a) {
            return this.namespace.length > 0 ? this.namespace + "-" + a : a
        },
        cache_offset: function(a) {
            var b = a.show().height() + parseInt(a.css("top"), 10);
            return a.hide(), b
        },
        off: function() {
            a(this.scope).off(".fndtn.reveal")
        },
        reflow: function() {}
    }
}(jQuery, window, window.document),
function(a, b) {
    "use strict";
    Foundation.libs.slider = {
        name: "slider",
        version: "5.5.1",
        settings: {
            start: 0,
            end: 100,
            step: 1,
            precision: null,
            initial: null,
            display_selector: "",
            vertical: !1,
            trigger_input_change: !1,
            on_change: function() {}
        },
        cache: {},
        init: function(a, b, c) {
            Foundation.inherit(this, "throttle"), this.bindings(b, c), this.reflow()
        },
        events: function() {
            var c = this;
            a(this.scope).off(".slider").on("mousedown.fndtn.slider touchstart.fndtn.slider pointerdown.fndtn.slider", "[" + c.attr_name() + "]:not(.disabled, [disabled]) .range-slider-handle", function(b) {
                c.cache.active || (b.preventDefault(), c.set_active_slider(a(b.target)))
            }).on("mousemove.fndtn.slider touchmove.fndtn.slider pointermove.fndtn.slider", function(d) {
                if (c.cache.active)
                    if (d.preventDefault(), a.data(c.cache.active[0], "settings").vertical) {
                        var e = 0;
                        d.pageY || (e = b.scrollY), c.calculate_position(c.cache.active, c.get_cursor_position(d, "y") + e)
                    } else c.calculate_position(c.cache.active, c.get_cursor_position(d, "x"))
            }).on("mouseup.fndtn.slider touchend.fndtn.slider pointerup.fndtn.slider", function() {
                c.remove_active_slider()
            }).on("change.fndtn.slider", function() {
                c.settings.on_change()
            }), c.S(b).on("resize.fndtn.slider", c.throttle(function() {
                c.reflow()
            }, 300))
        },
        get_cursor_position: function(a, b) {
            var c, d = "page" + b.toUpperCase(),
                e = "client" + b.toUpperCase();
            return "undefined" != typeof a[d] ? c = a[d] : "undefined" != typeof a.originalEvent[e] ? c = a.originalEvent[e] : a.originalEvent.touches && a.originalEvent.touches[0] && "undefined" != typeof a.originalEvent.touches[0][e] ? c = a.originalEvent.touches[0][e] : a.currentPoint && "undefined" != typeof a.currentPoint[b] && (c = a.currentPoint[b]), c
        },
        set_active_slider: function(a) {
            this.cache.active = a
        },
        remove_active_slider: function() {
            this.cache.active = null
        },
        calculate_position: function(b, c) {
            var d = this,
                e = a.data(b[0], "settings"),
                f = (a.data(b[0], "handle_l"), a.data(b[0], "handle_o"), a.data(b[0], "bar_l")),
                g = a.data(b[0], "bar_o");
            requestAnimationFrame(function() {
                var a;
                a = Foundation.rtl && !e.vertical ? d.limit_to((g + f - c) / f, 0, 1) : d.limit_to((c - g) / f, 0, 1), a = e.vertical ? 1 - a : a;
                var h = d.normalized_value(a, e.start, e.end, e.step, e.precision);
                d.set_ui(b, h)
            })
        },
        set_ui: function(b, c) {
            var d = a.data(b[0], "settings"),
                e = a.data(b[0], "handle_l"),
                f = a.data(b[0], "bar_l"),
                g = this.normalized_percentage(c, d.start, d.end),
                h = g * (f - e) - 1,
                i = 100 * g,
                j = b.parent(),
                k = b.parent().children("input[type=hidden]");
            Foundation.rtl && !d.vertical && (h = -h), h = d.vertical ? -h + f - e + 1 : h, this.set_translate(b, h, d.vertical), d.vertical ? b.siblings(".range-slider-active-segment").css("height", i + "%") : b.siblings(".range-slider-active-segment").css("width", i + "%"), j.attr(this.attr_name(), c).trigger("change").trigger("change.fndtn.slider"), k.val(c), d.trigger_input_change && k.trigger("change"), b[0].hasAttribute("aria-valuemin") || b.attr({
                "aria-valuemin": d.start,
                "aria-valuemax": d.end
            }), b.attr("aria-valuenow", c), "" != d.display_selector && a(d.display_selector).each(function() {
                this.hasOwnProperty("value") ? a(this).val(c) : a(this).text(c)
            })
        },
        normalized_percentage: function(a, b, c) {
            return Math.min(1, (a - b) / (c - b))
        },
        normalized_value: function(a, b, c, d, e) {
            var f = c - b,
                g = a * f,
                h = (g - g % d) / d,
                i = g % d,
                j = i >= .5 * d ? d : 0;
            return (h * d + j + b).toFixed(e)
        },
        set_translate: function(b, c, d) {
            d ? a(b).css("-webkit-transform", "translateY(" + c + "px)").css("-moz-transform", "translateY(" + c + "px)").css("-ms-transform", "translateY(" + c + "px)").css("-o-transform", "translateY(" + c + "px)").css("transform", "translateY(" + c + "px)") : a(b).css("-webkit-transform", "translateX(" + c + "px)").css("-moz-transform", "translateX(" + c + "px)").css("-ms-transform", "translateX(" + c + "px)").css("-o-transform", "translateX(" + c + "px)").css("transform", "translateX(" + c + "px)")
        },
        limit_to: function(a, b, c) {
            return Math.min(Math.max(a, b), c)
        },
        initialize_settings: function(b) {
            var c, d = a.extend({}, this.settings, this.data_options(a(b).parent()));
            null === d.precision && (c = ("" + d.step).match(/\.([\d]*)/), d.precision = c && c[1] ? c[1].length : 0), d.vertical ? (a.data(b, "bar_o", a(b).parent().offset().top), a.data(b, "bar_l", a(b).parent().outerHeight()), a.data(b, "handle_o", a(b).offset().top), a.data(b, "handle_l", a(b).outerHeight())) : (a.data(b, "bar_o", a(b).parent().offset().left), a.data(b, "bar_l", a(b).parent().outerWidth()), a.data(b, "handle_o", a(b).offset().left), a.data(b, "handle_l", a(b).outerWidth())), a.data(b, "bar", a(b).parent()), a.data(b, "settings", d)
        },
        set_initial_position: function(b) {
            var c = a.data(b.children(".range-slider-handle")[0], "settings"),
                d = "number" != typeof c.initial || isNaN(c.initial) ? Math.floor(.5 * (c.end - c.start) / c.step) * c.step + c.start : c.initial,
                e = b.children(".range-slider-handle");
            this.set_ui(e, d)
        },
        set_value: function(b) {
            var c = this;
            a("[" + c.attr_name() + "]", this.scope).each(function() {
                a(this).attr(c.attr_name(), b)
            }), a(this.scope).attr(c.attr_name()) && a(this.scope).attr(c.attr_name(), b), c.reflow()
        },
        reflow: function() {
            var b = this;
            b.S("[" + this.attr_name() + "]").each(function() {
                var c = a(this).children(".range-slider-handle")[0],
                    d = a(this).attr(b.attr_name());
                b.initialize_settings(c), d ? b.set_ui(a(c), parseFloat(d)) : b.set_initial_position(a(this))
            })
        }
    }
}(jQuery, window, window.document),
function(a, b, c, d) {
    "use strict";
    Foundation.libs.tab = {
        name: "tab",
        version: "5.5.1",
        settings: {
            active_class: "active",
            callback: function() {},
            deep_linking: !1,
            scroll_to_content: !0,
            is_hover: !1
        },
        default_tab_hashes: [],
        init: function(a, c, d) {
            var e = this,
                f = this.S;
            this.bindings(c, d), e.entry_location = b.location.href, this.handle_location_hash_change(), f("[" + this.attr_name() + "] > .active > a", this.scope).each(function() {
                e.default_tab_hashes.push(this.hash)
            })
        },
        events: function() {
            var a = this,
                c = this.S,
                d = function(b) {
                    var d = c(this).closest("[" + a.attr_name() + "]").data(a.attr_name(!0) + "-init");
                    (!d.is_hover || Modernizr.touch) && (b.preventDefault(), b.stopPropagation(), a.toggle_active_tab(c(this).parent()))
                };
            c(this.scope).off(".tab").on("focus.fndtn.tab", "[" + this.attr_name() + "] > * > a", d).on("click.fndtn.tab", "[" + this.attr_name() + "] > * > a", d).on("mouseenter.fndtn.tab", "[" + this.attr_name() + "] > * > a", function() {
                var b = c(this).closest("[" + a.attr_name() + "]").data(a.attr_name(!0) + "-init");
                b.is_hover && a.toggle_active_tab(c(this).parent())
            }), c(b).on("hashchange.fndtn.tab", function(b) {
                b.preventDefault(), a.handle_location_hash_change()
            })
        },
        handle_location_hash_change: function() {
            var b = this,
                c = this.S;
            c("[" + this.attr_name() + "]", this.scope).each(function() {
                var e = c(this).data(b.attr_name(!0) + "-init");
                if (e.deep_linking) {
                    var f;
                    if (f = e.scroll_to_content ? b.scope.location.hash : b.scope.location.hash.replace("fndtn-", ""), "" != f) {
                        var g = c(f);
                        if (g.hasClass("content") && g.parent().hasClass("tabs-content")) b.toggle_active_tab(a("[" + b.attr_name() + "] > * > a[href=" + f + "]").parent());
                        else {
                            var h = g.closest(".content").attr("id");
                            h != d && b.toggle_active_tab(a("[" + b.attr_name() + "] > * > a[href=#" + h + "]").parent(), f)
                        }
                    } else
                        for (var i = 0; i < b.default_tab_hashes.length; i++) b.toggle_active_tab(a("[" + b.attr_name() + "] > * > a[href=" + b.default_tab_hashes[i] + "]").parent())
                }
            })
        },
        toggle_active_tab: function(e, f) {
            var g = this,
                h = g.S,
                i = e.closest("[" + this.attr_name() + "]"),
                j = e.find("a"),
                k = e.children("a").first(),
                l = "#" + k.attr("href").split("#")[1],
                m = h(l),
                n = e.siblings(),
                o = i.data(this.attr_name(!0) + "-init"),
                p = function(b) {
                    var d, e = a(this),
                        f = a(this).parents("li").prev().children('[role="tab"]'),
                        g = a(this).parents("li").next().children('[role="tab"]');
                    switch (b.keyCode) {
                        case 37:
                            d = f;
                            break;
                        case 39:
                            d = g;
                            break;
                        default:
                            d = !1
                    }
                    d.length && (e.attr({
                        tabindex: "-1",
                        "aria-selected": null
                    }), d.attr({
                        tabindex: "0",
                        "aria-selected": !0
                    }).focus()), a('[role="tabpanel"]').attr("aria-hidden", "true"), a("#" + a(c.activeElement).attr("href").substring(1)).attr("aria-hidden", null)
                },
                q = function(a) {
                    var c = b.location.href === g.entry_location,
                        d = o.scroll_to_content ? g.default_tab_hashes[0] : c ? b.location.hash : "fndtn-" + g.default_tab_hashes[0].replace("#", "");
                    c && a === d || (b.location.hash = a)
                };
            h(this).data(this.data_attr("tab-content")) && (l = "#" + h(this).data(this.data_attr("tab-content")).split("#")[1], m = h(l)), o.deep_linking && (o.scroll_to_content ? (q(f || l), f == d || f == l ? e.parent()[0].scrollIntoView() : h(l)[0].scrollIntoView()) : q(f != d ? "fndtn-" + f.replace("#", "") : "fndtn-" + l.replace("#", ""))), e.addClass(o.active_class).triggerHandler("opened"), j.attr({
                "aria-selected": "true",
                tabindex: 0
            }), n.removeClass(o.active_class), n.find("a").attr({
                "aria-selected": "false",
                tabindex: -1
            }), m.siblings().removeClass(o.active_class).attr({
                "aria-hidden": "true",
                tabindex: -1
            }), m.addClass(o.active_class).attr("aria-hidden", "false").removeAttr("tabindex"), o.callback(e), m.triggerHandler("toggled", [e]), i.triggerHandler("toggled", [m]), j.off("keydown").on("keydown", p)
        },
        data_attr: function(a) {
            return this.namespace.length > 0 ? this.namespace + "-" + a : a
        },
        off: function() {},
        reflow: function() {}
    }
}(jQuery, window, window.document),
function(a, b) {
    "use strict";
    Foundation.libs.tooltip = {
        name: "tooltip",
        version: "5.5.1",
        settings: {
            additional_inheritable_classes: [],
            tooltip_class: ".tooltip",
            append_to: "body",
            touch_close_text: "Tap To Close",
            disable_for_touch: !1,
            hover_delay: 200,
            show_on: "all",
            tip_template: function(a, b) {
                return '<span data-selector="' + a + '" id="' + a + '" class="' + Foundation.libs.tooltip.settings.tooltip_class.substring(1) + '" role="tooltip">' + b + '<span class="nub"></span></span>'
            }
        },
        cache: {},
        init: function(a, b, c) {
            Foundation.inherit(this, "random_str"), this.bindings(b, c)
        },
        should_show: function(b) {
            var c = a.extend({}, this.settings, this.data_options(b));
            return "all" === c.show_on ? !0 : this.small() && "small" === c.show_on ? !0 : this.medium() && "medium" === c.show_on ? !0 : this.large() && "large" === c.show_on ? !0 : !1
        },
        medium: function() {
            return matchMedia(Foundation.media_queries.medium).matches
        },
        large: function() {
            return matchMedia(Foundation.media_queries.large).matches
        },
        events: function(b) {
            var c = this,
                d = c.S;
            c.create(this.S(b)), a(this.scope).off(".tooltip").on("mouseenter.fndtn.tooltip mouseleave.fndtn.tooltip touchstart.fndtn.tooltip MSPointerDown.fndtn.tooltip", "[" + this.attr_name() + "]", function(b) {
                var e = d(this),
                    f = a.extend({}, c.settings, c.data_options(e)),
                    g = !1;
                if (Modernizr.touch && /touchstart|MSPointerDown/i.test(b.type) && d(b.target).is("a")) return !1;
                if (/mouse/i.test(b.type) && c.ie_touch(b)) return !1;
                if (e.hasClass("open")) Modernizr.touch && /touchstart|MSPointerDown/i.test(b.type) && b.preventDefault(), c.hide(e);
                else {
                    if (f.disable_for_touch && Modernizr.touch && /touchstart|MSPointerDown/i.test(b.type)) return;
                    !f.disable_for_touch && Modernizr.touch && /touchstart|MSPointerDown/i.test(b.type) && (b.preventDefault(), d(f.tooltip_class + ".open").hide(), g = !0), /enter|over/i.test(b.type) ? this.timer = setTimeout(function() {
                        c.showTip(e)
                    }.bind(this), c.settings.hover_delay) : "mouseout" === b.type || "mouseleave" === b.type ? (clearTimeout(this.timer), c.hide(e)) : c.showTip(e)
                }
            }).on("mouseleave.fndtn.tooltip touchstart.fndtn.tooltip MSPointerDown.fndtn.tooltip", "[" + this.attr_name() + "].open", function(b) {
                return /mouse/i.test(b.type) && c.ie_touch(b) ? !1 : void(("touch" != a(this).data("tooltip-open-event-type") || "mouseleave" != b.type) && ("mouse" == a(this).data("tooltip-open-event-type") && /MSPointerDown|touchstart/i.test(b.type) ? c.convert_to_touch(a(this)) : c.hide(a(this))))
            }).on("DOMNodeRemoved DOMAttrModified", "[" + this.attr_name() + "]:not(a)", function() {
                c.hide(d(this))
            })
        },
        ie_touch: function() {
            return !1
        },
        showTip: function(a) {
            var b = this.getTip(a);
            return this.should_show(a, b) ? this.show(a) : void 0
        },
        getTip: function(b) {
            var c = this.selector(b),
                d = a.extend({}, this.settings, this.data_options(b)),
                e = null;
            return c && (e = this.S('span[data-selector="' + c + '"]' + d.tooltip_class)), "object" == typeof e ? e : !1
        },
        selector: function(a) {
            var b = a.attr("id"),
                c = a.attr(this.attr_name()) || a.attr("data-selector");
            return (b && b.length < 1 || !b) && "string" != typeof c && (c = this.random_str(6), a.attr("data-selector", c).attr("aria-describedby", c)), b && b.length > 0 ? b : c
        },
        create: function(c) {
            var d = this,
                e = a.extend({}, this.settings, this.data_options(c)),
                f = this.settings.tip_template;
            "string" == typeof e.tip_template && b.hasOwnProperty(e.tip_template) && (f = b[e.tip_template]);
            var g = a(f(this.selector(c), a("<div></div>").html(c.attr("title")).html())),
                h = this.inheritable_classes(c);
            g.addClass(h).appendTo(e.append_to), Modernizr.touch && (g.append('<span class="tap-to-close">' + e.touch_close_text + "</span>"), g.on("touchstart.fndtn.tooltip MSPointerDown.fndtn.tooltip", function() {
                d.hide(c)
            })), c.removeAttr("title").attr("title", "")
        },
        reposition: function(b, c, d) {
            var e, f, g, h, i;
            if (c.css("visibility", "hidden").show(), e = b.data("width"), f = c.children(".nub"), g = f.outerHeight(), h = f.outerHeight(), c.css(this.small() ? {
                    width: "100%"
                } : {
                    width: e ? e : "auto"
                }), i = function(a, b, c, d, e) {
                    return a.css({
                        top: b ? b : "auto",
                        bottom: d ? d : "auto",
                        left: e ? e : "auto",
                        right: c ? c : "auto"
                    }).end()
                }, i(c, b.offset().top + b.outerHeight() + 10, "auto", "auto", b.offset().left), this.small()) i(c, b.offset().top + b.outerHeight() + 10, "auto", "auto", 12.5, a(this.scope).width()), c.addClass("tip-override"), i(f, -g, "auto", "auto", b.offset().left);
            else {
                var j = b.offset().left;
                Foundation.rtl && (f.addClass("rtl"), j = b.offset().left + b.outerWidth() - c.outerWidth()), i(c, b.offset().top + b.outerHeight() + 10, "auto", "auto", j), c.removeClass("tip-override"), d && d.indexOf("tip-top") > -1 ? (Foundation.rtl && f.addClass("rtl"), i(c, b.offset().top - c.outerHeight(), "auto", "auto", j).removeClass("tip-override")) : d && d.indexOf("tip-left") > -1 ? (i(c, b.offset().top + b.outerHeight() / 2 - c.outerHeight() / 2, "auto", "auto", b.offset().left - c.outerWidth() - g).removeClass("tip-override"), f.removeClass("rtl")) : d && d.indexOf("tip-right") > -1 && (i(c, b.offset().top + b.outerHeight() / 2 - c.outerHeight() / 2, "auto", "auto", b.offset().left + b.outerWidth() + g).removeClass("tip-override"), f.removeClass("rtl"))
            }
            c.css("visibility", "visible").hide()
        },
        small: function() {
            return matchMedia(Foundation.media_queries.small).matches && !matchMedia(Foundation.media_queries.medium).matches
        },
        inheritable_classes: function(b) {
            var c = a.extend({}, this.settings, this.data_options(b)),
                d = ["tip-top", "tip-left", "tip-bottom", "tip-right", "radius", "round"].concat(c.additional_inheritable_classes),
                e = b.attr("class"),
                f = e ? a.map(e.split(" "), function(b) {
                    return -1 !== a.inArray(b, d) ? b : void 0
                }).join(" ") : "";
            return a.trim(f)
        },
        convert_to_touch: function(b) {
            var c = this,
                d = c.getTip(b),
                e = a.extend({}, c.settings, c.data_options(b));
            0 === d.find(".tap-to-close").length && (d.append('<span class="tap-to-close">' + e.touch_close_text + "</span>"), d.on("click.fndtn.tooltip.tapclose touchstart.fndtn.tooltip.tapclose MSPointerDown.fndtn.tooltip.tapclose", function() {
                c.hide(b)
            })), b.data("tooltip-open-event-type", "touch")
        },
        show: function(a) {
            var b = this.getTip(a);
            "touch" == a.data("tooltip-open-event-type") && this.convert_to_touch(a), this.reposition(a, b, a.attr("class")), a.addClass("open"), b.fadeIn(150)
        },
        hide: function(a) {
            var b = this.getTip(a);
            b.fadeOut(150, function() {
                b.find(".tap-to-close").remove(), b.off("click.fndtn.tooltip.tapclose MSPointerDown.fndtn.tapclose"), a.removeClass("open")
            })
        },
        off: function() {
            var b = this;
            this.S(this.scope).off(".fndtn.tooltip"), this.S(this.settings.tooltip_class).each(function(c) {
                a("[" + b.attr_name() + "]").eq(c).attr("title", a(this).text())
            }).remove()
        },
        reflow: function() {}
    }
}(jQuery, window, window.document),
function(a, b, c) {
    "use strict";
    Foundation.libs.topbar = {
        name: "topbar",
        version: "5.5.1",
        settings: {
            index: 0,
            sticky_class: "sticky",
            custom_back_text: !0,
            back_text: "Назад",
            mobile_show_parent_link: !0,
            is_hover: !0,
            scrolltop: !0,
            sticky_on: "all"
        },
        init: function(b, c, d) {
            Foundation.inherit(this, "add_custom_rule register_media throttle");
            var e = this;
            e.register_media("topbar", "foundation-mq-topbar"), this.bindings(c, d), e.S("[" + this.attr_name() + "]", this.scope).each(function() {
                {
                    var b = a(this),
                        c = b.data(e.attr_name(!0) + "-init");
                    e.S("section, .top-bar-section", this)
                }
                b.data("index", 0);
                var d = b.parent();
                d.hasClass("fixed") || e.is_sticky(b, d, c) ? (e.settings.sticky_class = c.sticky_class, e.settings.sticky_topbar = b, b.data("height", d.outerHeight()), b.data("stickyoffset", d.offset().top)) : b.data("height", b.outerHeight()), c.assembled || e.assemble(b), c.is_hover ? e.S(".has-dropdown", b).addClass("not-click") : e.S(".has-dropdown", b).removeClass("not-click"), e.add_custom_rule(".f-topbar-fixed { padding-top: " + b.data("height") + "px }"), d.hasClass("fixed") && e.S("body").addClass("f-topbar-fixed")
            })
        },
        is_sticky: function(a, b, c) {
            var d = b.hasClass(c.sticky_class),
                e = matchMedia(Foundation.media_queries.small).matches,
                f = matchMedia(Foundation.media_queries.medium).matches,
                g = matchMedia(Foundation.media_queries.large).matches;
            return d && "all" === c.sticky_on ? !0 : d && this.small() && -1 !== c.sticky_on.indexOf("small") && e && !f && !g ? !0 : d && this.medium() && -1 !== c.sticky_on.indexOf("medium") && e && f && !g ? !0 : d && this.large() && -1 !== c.sticky_on.indexOf("large") && e && f && g ? !0 : d && navigator.userAgent.match(/(iPad|iPhone|iPod)/g) ? !0 : !1
        },
        toggle: function(c) {
            var d, e = this;
            d = c ? e.S(c).closest("[" + this.attr_name() + "]") : e.S("[" + this.attr_name() + "]");
            var f = d.data(this.attr_name(!0) + "-init"),
                g = e.S("section, .top-bar-section", d);
            e.breakpoint() && (e.rtl ? (g.css({
                right: "0%"
            }), a(">.name", g).css({
                right: "100%"
            })) : (g.css({
                left: "0%"
            }), a(">.name", g).css({
                left: "100%"
            })), e.S("li.moved", g).removeClass("moved"), d.data("index", 0), d.toggleClass("expanded").css("height", "")), f.scrolltop ? d.hasClass("expanded") ? d.parent().hasClass("fixed") && (f.scrolltop ? (d.parent().removeClass("fixed"), d.addClass("fixed"), e.S("body").removeClass("f-topbar-fixed"), b.scrollTo(0, 0)) : d.parent().removeClass("expanded")) : d.hasClass("fixed") && (d.parent().addClass("fixed"), d.removeClass("fixed"), e.S("body").addClass("f-topbar-fixed")) : (e.is_sticky(d, d.parent(), f) && d.parent().addClass("fixed"), d.parent().hasClass("fixed") && (d.hasClass("expanded") ? (d.addClass("fixed"), d.parent().addClass("expanded"), e.S("body").addClass("f-topbar-fixed")) : (d.removeClass("fixed"), d.parent().removeClass("expanded"), e.update_sticky_positioning())))
        },
        timer: null,
        events: function() {
            var c = this,
                d = this.S;
            d(this.scope).off(".topbar").on("click.fndtn.topbar", "[" + this.attr_name() + "] .toggle-topbar", function(a) {
                a.preventDefault(), c.toggle(this)
            }).on("click.fndtn.topbar", '.top-bar .top-bar-section li a[href^="#"],[' + this.attr_name() + '] .top-bar-section li a[href^="#"]', function() {
                var b = a(this).closest("li");
                !c.breakpoint() || b.hasClass("back") || b.hasClass("has-dropdown") || c.toggle()
            }).on("click.fndtn.topbar", "[" + this.attr_name() + "] li.has-dropdown", function(b) {
                var e = d(this),
                    f = d(b.target),
                    g = e.closest("[" + c.attr_name() + "]"),
                    h = g.data(c.attr_name(!0) + "-init");
                return f.data("revealId") ? void c.toggle() : void(c.breakpoint() || (!h.is_hover || Modernizr.touch) && (b.stopImmediatePropagation(), e.hasClass("hover") ? (e.removeClass("hover").find("li").removeClass("hover"), e.parents("li.hover").removeClass("hover")) : (e.addClass("hover"), a(e).siblings().removeClass("hover"), "A" === f[0].nodeName && f.parent().hasClass("has-dropdown") && b.preventDefault())))
            }).on("click.fndtn.topbar", "[" + this.attr_name() + "] .has-dropdown>a", function(a) {
                if (c.breakpoint()) {
                    a.preventDefault();
					//alert(jQuery("#menu-menu").outerWidth(false));
						if (jQuery("#menu-menu").outerWidth(false) >= 722) {
							 var  mac = 0;
						} else {
							 var  mac = 1;
						}
						//console.log(jQuery("#menu-menu").outerWidth(false));
                    var b = d(this),
					
                        e = b.closest("[" + c.attr_name() + "]"),
                        f = e.find("section, .top-bar-section"),
                        g = (b.next(".dropdown").outerHeight(), b.closest("li"));
                    e.data("index", e.data("index") + 1), g.addClass("moved"), c.rtl ? (f.css({
                        right: -(100 * e.data("index")) + "%"
                    }), f.find(">.name").css({
                        right: 100 * e.data("index") + "%"
                    })) : (f.css({
                        left: -(100 * e.data("index") * mac) + "%"
                    }), f.find(">.name").css({
                        left: 100 * e.data("index") + "%"
                    })), e.css("height", b.siblings("ul").outerHeight(!0) + e.data("height"))
                }
            }), d(b).off(".topbar").on("resize.fndtn.topbar", c.throttle(function() {
                c.resize.call(c)
            }, 50)).trigger("resize").trigger("resize.fndtn.topbar").load(function() {
                d(this).trigger("resize.fndtn.topbar")
            }), d("body").off(".topbar").on("click.fndtn.topbar", function(a) {
                var b = d(a.target).closest("li").closest("li.hover");
                b.length > 0 || d("[" + c.attr_name() + "] li.hover").removeClass("hover")
            }), d(this.scope).on("click.fndtn.topbar", "[" + this.attr_name() + "] .has-dropdown .back", function(a) {
                a.preventDefault();
				if (jQuery("#menu-menu").outerWidth(false) >= 722) {
							 var  mac = 0;
						} else {
							 var  mac = 1;
						}
						jQuery("li#menu-item-wpml-ls-23-ru").on('click',function() {
  var  mac = 1;
}); 
                var b = d(this),
                    e = b.closest("[" + c.attr_name() + "]"),
                    f = e.find("section, .top-bar-section"),
                    g = (e.data(c.attr_name(!0) + "-init"), b.closest("li.moved")),
                    h = g.parent();
                e.data("index", e.data("index") - 1), c.rtl ? (f.css({
                    right: -(100 * e.data("index")) + "%"
                }), f.find(">.name").css({
                    right: 100 * e.data("index") + "%"
                })) : (f.css({
                    left: -(100 * e.data("index") * mac) + "%"
                }), f.find(">.name").css({
                    left: 100 * e.data("index") + "%"
                })), 0 === e.data("index") ? e.css("height", "") : e.css("height", h.outerHeight(!0) + e.data("height")), setTimeout(function() {
                    g.removeClass("moved")
                }, 300)
            }), d(this.scope).find(".dropdown a").focus(function() {
                a(this).parents(".has-dropdown").addClass("hover")
            }).blur(function() {
                a(this).parents(".has-dropdown").removeClass("hover")
            })
        },
        resize: function() {
            var a = this;
            a.S("[" + this.attr_name() + "]").each(function() {
                var b, d = a.S(this),
                    e = d.data(a.attr_name(!0) + "-init"),
                    f = d.parent("." + a.settings.sticky_class);
                if (!a.breakpoint()) {
                    var g = d.hasClass("expanded");
                    d.css("height", "").removeClass("expanded").find("li").removeClass("hover"), g && a.toggle(d)
                }
                a.is_sticky(d, f, e) && (f.hasClass("fixed") ? (f.removeClass("fixed"), b = f.offset().top, a.S(c.body).hasClass("f-topbar-fixed") && (b -= d.data("height")), d.data("stickyoffset", b), f.addClass("fixed")) : (b = f.offset().top, d.data("stickyoffset", b)))
            })
        },
        breakpoint: function() {
            return !matchMedia(Foundation.media_queries.topbar).matches
        },
        small: function() {
            return matchMedia(Foundation.media_queries.small).matches
        },
        medium: function() {
            return matchMedia(Foundation.media_queries.medium).matches
        },
        large: function() {
            return matchMedia(Foundation.media_queries.large).matches
        },
        assemble: function(b) {
            var c = this,
                d = b.data(this.attr_name(!0) + "-init"),
                e = c.S("section, .top-bar-section", b);
            e.detach(), c.S(".has-dropdown>a", e).each(function() {
                var b, e = c.S(this),
                    f = e.siblings(".dropdown"),
                    g = e.attr("href");
                f.find(".title.back").length || (b = a(1 == d.mobile_show_parent_link && g ? '<li class="title back js-generated"><p><a href="javascript:void(0)"></a></p></li><li class="parent-link hide-for-large-up"><a class="parent-link js-generated" href="' + g + '">' + e.html() + "</a></li>" : '<li class="title back js-generated"><p><a href="javascript:void(0)"></a></p>'), a("p>a", b).html(1 == d.custom_back_text ? d.back_text : "&laquo; " + e.html()), f.prepend(b))
            }), e.appendTo(b), this.sticky(), this.assembled(b)
        },
        assembled: function(b) {
            b.data(this.attr_name(!0), a.extend({}, b.data(this.attr_name(!0)), {
                assembled: !0
            }))
        },
        height: function(b) {
            var c = 0,
                d = this;
            return a("> li", b).each(function() {
                c += d.S(this).outerHeight(!0)
            }), c
        },
        sticky: function() {
            var a = this;
            this.S(b).on("scroll", function() {
                a.update_sticky_positioning()
            })
        },
        update_sticky_positioning: function() {
            var a = "." + this.settings.sticky_class,
                c = this.S(b),
                d = this;
            if (d.settings.sticky_topbar && d.is_sticky(this.settings.sticky_topbar, this.settings.sticky_topbar.parent(), this.settings)) {
                var e = this.settings.sticky_topbar.data("stickyoffset");
                d.S(a).hasClass("expanded") || (c.scrollTop() > e ? d.S(a).hasClass("fixed") || (d.S(a).addClass("fixed"), d.S("body").addClass("f-topbar-fixed")) : c.scrollTop() <= e && d.S(a).hasClass("fixed") && (d.S(a).removeClass("fixed"), d.S("body").removeClass("f-topbar-fixed")))
            }
        },
        off: function() {
            this.S(this.scope).off(".fndtn.topbar"), this.S(b).off(".fndtn.topbar")
        },
        reflow: function() {}
    }
}(jQuery, window, window.document);

/*
 * jQuery appear plugin
 *
 * Copyright (c) 2012 Andrey Sidorov
 * licensed under MIT license.
 *
 * https://github.com/morr/jquery.appear/
 *
 * Version: 0.3.3
 */
(function(e) {
    function u() {
        r = false;
        for (var n = 0; n < t.length; n++) {
            var i = e(t[n]).filter(function() {
                return e(this).is(":appeared")
            });
            i.trigger("appear", [i]);
            if (o) {
                var s = o.not(i);
                s.trigger("disappear", [s])
            }
            o = i
        }
    }
    var t = [];
    var n = false;
    var r = false;
    var i = {
        interval: 250,
        force_process: false
    };
    var s = e(window);
    var o;
    e.expr[":"]["appeared"] = function(t) {
        var n = e(t);
        if (!n.is(":visible")) {
            return false
        }
        var r = s.scrollLeft();
        var i = s.scrollTop();
        var o = n.offset();
        var u = o.left;
        var a = o.top;
        if (a + n.height() >= i && a + (n.data("appear-bottom-offset") || 0) <= i + s.height() && u + n.width() >= r && u - (n.data("appear-left-offset") || 0) <= r + s.width()) {
            return true
        } else {
            return false
        }
    };
    e.fn.extend({
        appear: function(s) {
            var o = e.extend({}, i, s || {});
            var a = this.selector || this;
            if (!n) {
                var f = function() {
                    if (r) {
                        return
                    }
                    r = true;
                    setTimeout(u, o.interval)
                };
                e(window).scroll(f).resize(f);
                n = true
            }
            if (o.force_process) {
                setTimeout(u, o.interval)
            }
            t.push(a);
            return e(a)
        }
    });
    e.extend({
        force_appear: function() {
            if (n) {
                u();
                return true
            }
            return false
        }
    })
})(jQuery)

/*
 * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
 *
 * Uses the built in easing capabilities added In jQuery 1.1
 * to offer multiple easing options
 *
 * TERMS OF USE - jQuery Easing
 * 
 * Open source under the BSD License. 
 * 
 * Copyright © 2008 George McGinley Smith
 * All rights reserved.
 */
jQuery.easing.jswing = jQuery.easing.swing;
jQuery.extend(jQuery.easing, {
    def: "easeOutQuad",
    swing: function(x, t, b, c, d) {
        return jQuery.easing[jQuery.easing.def](x, t, b, c, d)
    },
    easeInQuad: function(x, t, b, c, d) {
        return c * (t /= d) * t + b
    },
    easeOutQuad: function(x, t, b, c, d) {
        return -c * (t /= d) * (t - 2) + b
    },
    easeInOutQuad: function(x, t, b, c, d) {
        if ((t /= d / 2) < 1) {
            return c / 2 * t * t + b
        }
        return -c / 2 * ((--t) * (t - 2) - 1) + b
    },
    easeInCubic: function(x, t, b, c, d) {
        return c * (t /= d) * t * t + b
    },
    easeOutCubic: function(x, t, b, c, d) {
        return c * ((t = t / d - 1) * t * t + 1) + b
    },
    easeInOutCubic: function(x, t, b, c, d) {
        if ((t /= d / 2) < 1) {
            return c / 2 * t * t * t + b
        }
        return c / 2 * ((t -= 2) * t * t + 2) + b
    },
    easeInQuart: function(x, t, b, c, d) {
        return c * (t /= d) * t * t * t + b
    },
    easeOutQuart: function(x, t, b, c, d) {
        return -c * ((t = t / d - 1) * t * t * t - 1) + b
    },
    easeInOutQuart: function(x, t, b, c, d) {
        if ((t /= d / 2) < 1) {
            return c / 2 * t * t * t * t + b
        }
        return -c / 2 * ((t -= 2) * t * t * t - 2) + b
    },
    easeInQuint: function(x, t, b, c, d) {
        return c * (t /= d) * t * t * t * t + b
    },
    easeOutQuint: function(x, t, b, c, d) {
        return c * ((t = t / d - 1) * t * t * t * t + 1) + b
    },
    easeInOutQuint: function(x, t, b, c, d) {
        if ((t /= d / 2) < 1) {
            return c / 2 * t * t * t * t * t + b
        }
        return c / 2 * ((t -= 2) * t * t * t * t + 2) + b
    },
    easeInSine: function(x, t, b, c, d) {
        return -c * Math.cos(t / d * (Math.PI / 2)) + c + b
    },
    easeOutSine: function(x, t, b, c, d) {
        return c * Math.sin(t / d * (Math.PI / 2)) + b
    },
    easeInOutSine: function(x, t, b, c, d) {
        return -c / 2 * (Math.cos(Math.PI * t / d) - 1) + b
    },
    easeInExpo: function(x, t, b, c, d) {
        return (t == 0) ? b : c * Math.pow(2, 10 * (t / d - 1)) + b
    },
    easeOutExpo: function(x, t, b, c, d) {
        return (t == d) ? b + c : c * (-Math.pow(2, -10 * t / d) + 1) + b
    },
    easeInOutExpo: function(x, t, b, c, d) {
        if (t == 0) {
            return b
        }
        if (t == d) {
            return b + c
        }
        if ((t /= d / 2) < 1) {
            return c / 2 * Math.pow(2, 10 * (t - 1)) + b
        }
        return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b
    },
    easeInCirc: function(x, t, b, c, d) {
        return -c * (Math.sqrt(1 - (t /= d) * t) - 1) + b
    },
    easeOutCirc: function(x, t, b, c, d) {
        return c * Math.sqrt(1 - (t = t / d - 1) * t) + b
    },
    easeInOutCirc: function(x, t, b, c, d) {
        if ((t /= d / 2) < 1) {
            return -c / 2 * (Math.sqrt(1 - t * t) - 1) + b
        }
        return c / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + b
    },
    easeInElastic: function(x, t, b, c, d) {
        var s = 1.70158;
        var p = 0;
        var a = c;
        if (t == 0) {
            return b
        }
        if ((t /= d) == 1) {
            return b + c
        }
        if (!p) {
            p = d * 0.3
        }
        if (a < Math.abs(c)) {
            a = c;
            var s = p / 4
        } else {
            var s = p / (2 * Math.PI) * Math.asin(c / a)
        }
        return -(a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b
    },
    easeOutElastic: function(x, t, b, c, d) {
        var s = 1.70158;
        var p = 0;
        var a = c;
        if (t == 0) {
            return b
        }
        if ((t /= d) == 1) {
            return b + c
        }
        if (!p) {
            p = d * 0.3
        }
        if (a < Math.abs(c)) {
            a = c;
            var s = p / 4
        } else {
            var s = p / (2 * Math.PI) * Math.asin(c / a)
        }
        return a * Math.pow(2, -10 * t) * Math.sin((t * d - s) * (2 * Math.PI) / p) + c + b
    },
    easeInOutElastic: function(x, t, b, c, d) {
        var s = 1.70158;
        var p = 0;
        var a = c;
        if (t == 0) {
            return b
        }
        if ((t /= d / 2) == 2) {
            return b + c
        }
        if (!p) {
            p = d * (0.3 * 1.5)
        }
        if (a < Math.abs(c)) {
            a = c;
            var s = p / 4
        } else {
            var s = p / (2 * Math.PI) * Math.asin(c / a)
        }
        if (t < 1) {
            return -0.5 * (a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b
        }
        return a * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p) * 0.5 + c + b
    },
    easeInBack: function(x, t, b, c, d, s) {
        if (s == undefined) {
            s = 1.70158
        }
        return c * (t /= d) * t * ((s + 1) * t - s) + b
    },
    easeOutBack: function(x, t, b, c, d, s) {
        if (s == undefined) {
            s = 1.70158
        }
        return c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b
    },
    easeInOutBack: function(x, t, b, c, d, s) {
        if (s == undefined) {
            s = 1.70158
        }
        if ((t /= d / 2) < 1) {
            return c / 2 * (t * t * (((s *= (1.525)) + 1) * t - s)) + b
        }
        return c / 2 * ((t -= 2) * t * (((s *= (1.525)) + 1) * t + s) + 2) + b
    },
    easeInBounce: function(x, t, b, c, d) {
        return c - jQuery.easing.easeOutBounce(x, d - t, 0, c, d) + b
    },
    easeOutBounce: function(x, t, b, c, d) {
        if ((t /= d) < (1 / 2.75)) {
            return c * (7.5625 * t * t) + b
        } else {
            if (t < (2 / 2.75)) {
                return c * (7.5625 * (t -= (1.5 / 2.75)) * t + 0.75) + b
            } else {
                if (t < (2.5 / 2.75)) {
                    return c * (7.5625 * (t -= (2.25 / 2.75)) * t + 0.9375) + b
                } else {
                    return c * (7.5625 * (t -= (2.625 / 2.75)) * t + 0.984375) + b
                }
            }
        }
    },
    easeInOutBounce: function(x, t, b, c, d) {
        if (t < d / 2) {
            return jQuery.easing.easeInBounce(x, t * 2, 0, c, d) * 0.5 + b
        }
        return jQuery.easing.easeOutBounce(x, t * 2 - d, 0, c, d) * 0.5 + c * 0.5 + b
    }
});

/*!
 * MediaElement.js
 * HTML5 <video> and <audio> shim and player
 * http://mediaelementjs.com/
 *
 * Creates a JavaScript object that mimics HTML5 MediaElement API
 * for browsers that don't understand HTML5 or can't play the provided codec
 * Can play MP4 (H.264), Ogg, WebM, FLV, WMV, WMA, ACC, and MP3
 *
 * Copyright 2010-2013, John Dyer (http://j.hn)
 * License: MIT
 *
 */
var mejs = mejs || {};
mejs.version = "2.13.0";
mejs.meIndex = 0;
mejs.plugins = {
    silverlight: [{
        version: [3, 0],
        types: ["video/mp4", "video/m4v", "video/mov", "video/wmv", "audio/wma", "audio/m4a", "audio/mp3", "audio/wav", "audio/mpeg"]
    }],
    flash: [{
        version: [9, 0, 124],
        types: ["video/mp4", "video/m4v", "video/mov", "video/flv", "video/rtmp", "video/x-flv", "audio/flv", "audio/x-flv", "audio/mp3", "audio/m4a", "audio/mpeg", "video/youtube", "video/x-youtube"]
    }],
    youtube: [{
        version: null,
        types: ["video/youtube", "video/x-youtube", "audio/youtube", "audio/x-youtube"]
    }],
    vimeo: [{
        version: null,
        types: ["video/vimeo",
            "video/x-vimeo"
        ]
    }]
};
mejs.Utility = {
    encodeUrl: function(a) {
        return encodeURIComponent(a)
    },
    escapeHTML: function(a) {
        return a.toString().split("&").join("&amp;").split("<").join("&lt;").split('"').join("&quot;")
    },
    absolutizeUrl: function(a) {
        var b = document.createElement("div");
        b.innerHTML = '<a href="' + this.escapeHTML(a) + '">x</a>';
        return b.firstChild.href
    },
    getScriptPath: function(a) {
        for (var b = 0, c, d = "", e = "", f, g, h = document.getElementsByTagName("script"), l = h.length, j = a.length; b < l; b++) {
            f = h[b].src;
            c = f.lastIndexOf("/");
            if (c > -1) {
                g = f.substring(c +
                    1);
                f = f.substring(0, c + 1)
            } else {
                g = f;
                f = ""
            }
            for (c = 0; c < j; c++) {
                e = a[c];
                e = g.indexOf(e);
                if (e > -1) {
                    d = f;
                    break
                }
            }
            if (d !== "") break
        }
        return d
    },
    secondsToTimeCode: function(a, b, c, d) {
        if (typeof c == "undefined") c = false;
        else if (typeof d == "undefined") d = 25;
        var e = Math.floor(a / 3600) % 24,
            f = Math.floor(a / 60) % 60,
            g = Math.floor(a % 60);
        a = Math.floor((a % 1 * d).toFixed(3));
        return (b || e > 0 ? (e < 10 ? "0" + e : e) + ":" : "") + (f < 10 ? "0" + f : f) + ":" + (g < 10 ? "0" + g : g) + (c ? ":" + (a < 10 ? "0" + a : a) : "")
    },
    timeCodeToSeconds: function(a, b, c, d) {
        if (typeof c == "undefined") c = false;
        else if (typeof d ==
            "undefined") d = 25;
        a = a.split(":");
        b = parseInt(a[0], 10);
        var e = parseInt(a[1], 10),
            f = parseInt(a[2], 10),
            g = 0,
            h = 0;
        if (c) g = parseInt(a[3]) / d;
        return h = b * 3600 + e * 60 + f + g
    },
    convertSMPTEtoSeconds: function(a) {
        if (typeof a != "string") return false;
        a = a.replace(",", ".");
        var b = 0,
            c = a.indexOf(".") != -1 ? a.split(".")[1].length : 0,
            d = 1;
        a = a.split(":").reverse();
        for (var e = 0; e < a.length; e++) {
            d = 1;
            if (e > 0) d = Math.pow(60, e);
            b += Number(a[e]) * d
        }
        return Number(b.toFixed(c))
    },
    removeSwf: function(a) {
        var b = document.getElementById(a);
        if (b && /object|embed/i.test(b.nodeName))
            if (mejs.MediaFeatures.isIE) {
                b.style.display =
                    "none";
                (function() {
                    b.readyState == 4 ? mejs.Utility.removeObjectInIE(a) : setTimeout(arguments.callee, 10)
                })()
            } else b.parentNode.removeChild(b)
    },
    removeObjectInIE: function(a) {
        if (a = document.getElementById(a)) {
            for (var b in a)
                if (typeof a[b] == "function") a[b] = null;
            a.parentNode.removeChild(a)
        }
    }
};
mejs.PluginDetector = {
    hasPluginVersion: function(a, b) {
        var c = this.plugins[a];
        b[1] = b[1] || 0;
        b[2] = b[2] || 0;
        return c[0] > b[0] || c[0] == b[0] && c[1] > b[1] || c[0] == b[0] && c[1] == b[1] && c[2] >= b[2] ? true : false
    },
    nav: window.navigator,
    ua: window.navigator.userAgent.toLowerCase(),
    plugins: [],
    addPlugin: function(a, b, c, d, e) {
        this.plugins[a] = this.detectPlugin(b, c, d, e)
    },
    detectPlugin: function(a, b, c, d) {
        var e = [0, 0, 0],
            f;
        if (typeof this.nav.plugins != "undefined" && typeof this.nav.plugins[a] == "object") {
            if ((c = this.nav.plugins[a].description) &&
                !(typeof this.nav.mimeTypes != "undefined" && this.nav.mimeTypes[b] && !this.nav.mimeTypes[b].enabledPlugin)) {
                e = c.replace(a, "").replace(/^\s+/, "").replace(/\sr/gi, ".").split(".");
                for (a = 0; a < e.length; a++) e[a] = parseInt(e[a].match(/\d+/), 10)
            }
        } else if (typeof window.ActiveXObject != "undefined") try {
            if (f = new ActiveXObject(c)) e = d(f)
        } catch (g) {}
        return e
    }
};
mejs.PluginDetector.addPlugin("flash", "Shockwave Flash", "application/x-shockwave-flash", "ShockwaveFlash.ShockwaveFlash", function(a) {
    var b = [];
    if (a = a.GetVariable("$version")) {
        a = a.split(" ")[1].split(",");
        b = [parseInt(a[0], 10), parseInt(a[1], 10), parseInt(a[2], 10)]
    }
    return b
});
mejs.PluginDetector.addPlugin("silverlight", "Silverlight Plug-In", "application/x-silverlight-2", "AgControl.AgControl", function(a) {
    var b = [0, 0, 0, 0],
        c = function(d, e, f, g) {
            for (; d.isVersionSupported(e[0] + "." + e[1] + "." + e[2] + "." + e[3]);) e[f] += g;
            e[f] -= g
        };
    c(a, b, 0, 1);
    c(a, b, 1, 1);
    c(a, b, 2, 1E4);
    c(a, b, 2, 1E3);
    c(a, b, 2, 100);
    c(a, b, 2, 10);
    c(a, b, 2, 1);
    c(a, b, 3, 1);
    return b
});
mejs.MediaFeatures = {
    init: function() {
        var a = this,
            b = document,
            c = mejs.PluginDetector.nav,
            d = mejs.PluginDetector.ua.toLowerCase(),
            e, f = ["source", "track", "audio", "video"];
        a.isiPad = d.match(/ipad/i) !== null;
        a.isiPhone = d.match(/iphone/i) !== null;
        a.isiOS = a.isiPhone || a.isiPad;
        a.isAndroid = d.match(/android/i) !== null;
        a.isBustedAndroid = d.match(/android 2\.[12]/) !== null;
        a.isBustedNativeHTTPS = location.protocol === "https:" && (d.match(/android [12]\./) !== null || d.match(/macintosh.* version.* safari/) !== null);
        a.isIE = c.appName.toLowerCase().indexOf("microsoft") !=
            -1;
        a.isChrome = d.match(/chrome/gi) !== null;
        a.isFirefox = d.match(/firefox/gi) !== null;
        a.isWebkit = d.match(/webkit/gi) !== null;
        a.isGecko = d.match(/gecko/gi) !== null && !a.isWebkit;
        a.isOpera = d.match(/opera/gi) !== null;
        a.hasTouch = "ontouchstart" in window && window.ontouchstart != null;
        a.svg = !!document.createElementNS && !!document.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGRect;
        for (c = 0; c < f.length; c++) e = document.createElement(f[c]);
        a.supportsMediaTag = typeof e.canPlayType !== "undefined" || a.isBustedAndroid;
        try {
            e.canPlayType("video/mp4")
        } catch (g) {
            a.supportsMediaTag = false
        }
        a.hasSemiNativeFullScreen = typeof e.webkitEnterFullscreen !== "undefined";
        a.hasWebkitNativeFullScreen = typeof e.webkitRequestFullScreen !== "undefined";
        a.hasMozNativeFullScreen = typeof e.mozRequestFullScreen !== "undefined";
        a.hasTrueNativeFullScreen = a.hasWebkitNativeFullScreen || a.hasMozNativeFullScreen;
        a.nativeFullScreenEnabled = a.hasTrueNativeFullScreen;
        if (a.hasMozNativeFullScreen) a.nativeFullScreenEnabled = e.mozFullScreenEnabled;
        if (this.isChrome) a.hasSemiNativeFullScreen =
            false;
        if (a.hasTrueNativeFullScreen) {
            a.fullScreenEventName = a.hasWebkitNativeFullScreen ? "webkitfullscreenchange" : "mozfullscreenchange";
            a.isFullScreen = function() {
                if (e.mozRequestFullScreen) return b.mozFullScreen;
                else if (e.webkitRequestFullScreen) return b.webkitIsFullScreen
            };
            a.requestFullScreen = function(h) {
                if (a.hasWebkitNativeFullScreen) h.webkitRequestFullScreen();
                else a.hasMozNativeFullScreen && h.mozRequestFullScreen()
            };
            a.cancelFullScreen = function() {
                if (a.hasWebkitNativeFullScreen) document.webkitCancelFullScreen();
                else a.hasMozNativeFullScreen && document.mozCancelFullScreen()
            }
        }
        if (a.hasSemiNativeFullScreen && d.match(/mac os x 10_5/i)) {
            a.hasNativeFullScreen = false;
            a.hasSemiNativeFullScreen = false
        }
    }
};
mejs.MediaFeatures.init();
mejs.HtmlMediaElement = {
    pluginType: "native",
    isFullScreen: false,
    setCurrentTime: function(a) {
        this.currentTime = a
    },
    setMuted: function(a) {
        this.muted = a
    },
    setVolume: function(a) {
        this.volume = a
    },
    stop: function() {
        this.pause()
    },
    setSrc: function(a) {
        for (var b = this.getElementsByTagName("source"); b.length > 0;) this.removeChild(b[0]);
        if (typeof a == "string") this.src = a;
        else {
            var c;
            for (b = 0; b < a.length; b++) {
                c = a[b];
                if (this.canPlayType(c.type)) {
                    this.src = c.src;
                    break
                }
            }
        }
    },
    setVideoSize: function(a, b) {
        this.width = a;
        this.height = b
    }
};
mejs.PluginMediaElement = function(a, b, c) {
    this.id = a;
    this.pluginType = b;
    this.src = c;
    this.events = {};
    this.attributes = {}
};
mejs.PluginMediaElement.prototype = {
    pluginElement: null,
    pluginType: "",
    isFullScreen: false,
    playbackRate: -1,
    defaultPlaybackRate: -1,
    seekable: [],
    played: [],
    paused: true,
    ended: false,
    seeking: false,
    duration: 0,
    error: null,
    tagName: "",
    muted: false,
    volume: 1,
    currentTime: 0,
    play: function() {
        if (this.pluginApi != null) {
            this.pluginType == "youtube" ? this.pluginApi.playVideo() : this.pluginApi.playMedia();
            this.paused = false
        }
    },
    load: function() {
        if (this.pluginApi != null) {
            this.pluginType != "youtube" && this.pluginApi.loadMedia();
            this.paused =
                false
        }
    },
    pause: function() {
        if (this.pluginApi != null) {
            this.pluginType == "youtube" ? this.pluginApi.pauseVideo() : this.pluginApi.pauseMedia();
            this.paused = true
        }
    },
    stop: function() {
        if (this.pluginApi != null) {
            this.pluginType == "youtube" ? this.pluginApi.stopVideo() : this.pluginApi.stopMedia();
            this.paused = true
        }
    },
    canPlayType: function(a) {
        var b, c, d, e = mejs.plugins[this.pluginType];
        for (b = 0; b < e.length; b++) {
            d = e[b];
            if (mejs.PluginDetector.hasPluginVersion(this.pluginType, d.version))
                for (c = 0; c < d.types.length; c++)
                    if (a == d.types[c]) return "probably"
        }
        return ""
    },
    positionFullscreenButton: function(a, b, c) {
        this.pluginApi != null && this.pluginApi.positionFullscreenButton && this.pluginApi.positionFullscreenButton(Math.floor(a), Math.floor(b), c)
    },
    hideFullscreenButton: function() {
        this.pluginApi != null && this.pluginApi.hideFullscreenButton && this.pluginApi.hideFullscreenButton()
    },
    setSrc: function(a) {
        if (typeof a == "string") {
            this.pluginApi.setSrc(mejs.Utility.absolutizeUrl(a));
            this.src = mejs.Utility.absolutizeUrl(a)
        } else {
            var b, c;
            for (b = 0; b < a.length; b++) {
                c = a[b];
                if (this.canPlayType(c.type)) {
                    this.pluginApi.setSrc(mejs.Utility.absolutizeUrl(c.src));
                    this.src = mejs.Utility.absolutizeUrl(a);
                    break
                }
            }
        }
    },
    setCurrentTime: function(a) {
        if (this.pluginApi != null) {
            this.pluginType == "youtube" ? this.pluginApi.seekTo(a) : this.pluginApi.setCurrentTime(a);
            this.currentTime = a
        }
    },
    setVolume: function(a) {
        if (this.pluginApi != null) {
            this.pluginType == "youtube" ? this.pluginApi.setVolume(a * 100) : this.pluginApi.setVolume(a);
            this.volume = a
        }
    },
    setMuted: function(a) {
        if (this.pluginApi != null) {
            if (this.pluginType == "youtube") {
                a ? this.pluginApi.mute() : this.pluginApi.unMute();
                this.muted = a;
                this.dispatchEvent("volumechange")
            } else this.pluginApi.setMuted(a);
            this.muted = a
        }
    },
    setVideoSize: function(a, b) {
        if (this.pluginElement.style) {
            this.pluginElement.style.width = a + "px";
            this.pluginElement.style.height = b + "px"
        }
        this.pluginApi != null && this.pluginApi.setVideoSize && this.pluginApi.setVideoSize(a, b)
    },
    setFullscreen: function(a) {
        this.pluginApi != null && this.pluginApi.setFullscreen && this.pluginApi.setFullscreen(a)
    },
    enterFullScreen: function() {
        this.pluginApi != null && this.pluginApi.setFullscreen && this.setFullscreen(true)
    },
    exitFullScreen: function() {
        this.pluginApi != null && this.pluginApi.setFullscreen &&
            this.setFullscreen(false)
    },
    addEventListener: function(a, b) {
        this.events[a] = this.events[a] || [];
        this.events[a].push(b)
    },
    removeEventListener: function(a, b) {
        if (!a) {
            this.events = {};
            return true
        }
        var c = this.events[a];
        if (!c) return true;
        if (!b) {
            this.events[a] = [];
            return true
        }
        for (i = 0; i < c.length; i++)
            if (c[i] === b) {
                this.events[a].splice(i, 1);
                return true
            }
        return false
    },
    dispatchEvent: function(a) {
        var b, c, d = this.events[a];
        if (d) {
            c = Array.prototype.slice.call(arguments, 1);
            for (b = 0; b < d.length; b++) d[b].apply(null, c)
        }
    },
    hasAttribute: function(a) {
        return a in
            this.attributes
    },
    removeAttribute: function(a) {
        delete this.attributes[a]
    },
    getAttribute: function(a) {
        if (this.hasAttribute(a)) return this.attributes[a];
        return ""
    },
    setAttribute: function(a, b) {
        this.attributes[a] = b
    },
    remove: function() {
        mejs.Utility.removeSwf(this.pluginElement.id);
        mejs.MediaPluginBridge.unregisterPluginElement(this.pluginElement.id)
    }
};
mejs.MediaPluginBridge = {
    pluginMediaElements: {},
    htmlMediaElements: {},
    registerPluginElement: function(a, b, c) {
        this.pluginMediaElements[a] = b;
        this.htmlMediaElements[a] = c
    },
    unregisterPluginElement: function(a) {
        delete this.pluginMediaElements[a];
        delete this.htmlMediaElements[a]
    },
    initPlugin: function(a) {
        var b = this.pluginMediaElements[a],
            c = this.htmlMediaElements[a];
        if (b) {
            switch (b.pluginType) {
                case "flash":
                    b.pluginElement = b.pluginApi = document.getElementById(a);
                    break;
                case "silverlight":
                    b.pluginElement = document.getElementById(b.id);
                    b.pluginApi = b.pluginElement.Content.MediaElementJS
            }
            b.pluginApi != null && b.success && b.success(b, c)
        }
    },
    fireEvent: function(a, b, c) {
        var d, e;
        if (a = this.pluginMediaElements[a]) {
            b = {
                type: b,
                target: a
            };
            for (d in c) {
                a[d] = c[d];
                b[d] = c[d]
            }
            e = c.bufferedTime || 0;
            b.target.buffered = b.buffered = {
                start: function() {
                    return 0
                },
                end: function() {
                    return e
                },
                length: 1
            };
            a.dispatchEvent(b.type, b)
        }
    }
};
mejs.MediaElementDefaults = {
    mode: "auto",
    plugins: ["flash", "silverlight", "youtube", "vimeo"],
    enablePluginDebug: false,
    httpsBasicAuthSite: false,
    type: "",
    pluginPath: mejs.Utility.getScriptPath(["mediaelement.js", "mediaelement.min.js", "mediaelement-and-player.js", "mediaelement-and-player.min.js"]),
    flashName: "flashmediaelement.swf",
    flashStreamer: "",
    enablePluginSmoothing: false,
    enablePseudoStreaming: false,
    pseudoStreamingStartQueryParam: "start",
    silverlightName: "silverlightmediaelement.xap",
    defaultVideoWidth: 480,
    defaultVideoHeight: 270,
    pluginWidth: -1,
    pluginHeight: -1,
    pluginVars: [],
    timerRate: 250,
    startVolume: 0.8,
    success: function() {},
    error: function() {}
};
mejs.MediaElement = function(a, b) {
    return mejs.HtmlMediaElementShim.create(a, b)
};
mejs.HtmlMediaElementShim = {
    create: function(a, b) {
        var c = mejs.MediaElementDefaults,
            d = typeof a == "string" ? document.getElementById(a) : a,
            e = d.tagName.toLowerCase(),
            f = e === "audio" || e === "video",
            g = f ? d.getAttribute("src") : d.getAttribute("href");
        e = d.getAttribute("poster");
        var h = d.getAttribute("autoplay"),
            l = d.getAttribute("preload"),
            j = d.getAttribute("controls"),
            k;
        for (k in b) c[k] = b[k];
        g = typeof g == "undefined" || g === null || g == "" ? null : g;
        e = typeof e == "undefined" || e === null ? "" : e;
        l = typeof l == "undefined" || l === null || l === "false" ?
            "none" : l;
        h = !(typeof h == "undefined" || h === null || h === "false");
        j = !(typeof j == "undefined" || j === null || j === "false");
        k = this.determinePlayback(d, c, mejs.MediaFeatures.supportsMediaTag, f, g);
        k.url = k.url !== null ? mejs.Utility.absolutizeUrl(k.url) : "";
        if (k.method == "native") {
            if (mejs.MediaFeatures.isBustedAndroid) {
                d.src = k.url;
                d.addEventListener("click", function() {
                    d.play()
                }, false)
            }
            return this.updateNative(k, c, h, l)
        } else if (k.method !== "") return this.createPlugin(k, c, e, h, l, j);
        else {
            this.createErrorMessage(k, c, e);
            return this
        }
    },
    determinePlayback: function(a, b, c, d, e) {
        var f = [],
            g, h, l, j = {
                method: "",
                url: "",
                htmlMediaElement: a,
                isVideo: a.tagName.toLowerCase() != "audio"
            },
            k;
        if (typeof b.type != "undefined" && b.type !== "")
            if (typeof b.type == "string") f.push({
                type: b.type,
                url: e
            });
            else
                for (g = 0; g < b.type.length; g++) f.push({
                    type: b.type[g],
                    url: e
                });
        else if (e !== null) {
            l = this.formatType(e, a.getAttribute("type"));
            f.push({
                type: l,
                url: e
            })
        } else
            for (g = 0; g < a.childNodes.length; g++) {
                h = a.childNodes[g];
                if (h.nodeType == 1 && h.tagName.toLowerCase() == "source") {
                    e = h.getAttribute("src");
                    l = this.formatType(e, h.getAttribute("type"));
                    h = h.getAttribute("media");
                    if (!h || !window.matchMedia || window.matchMedia && window.matchMedia(h).matches) f.push({
                        type: l,
                        url: e
                    })
                }
            }
        if (!d && f.length > 0 && f[0].url !== null && this.getTypeFromFile(f[0].url).indexOf("audio") > -1) j.isVideo = false;
        if (mejs.MediaFeatures.isBustedAndroid) a.canPlayType = function(m) {
            return m.match(/video\/(mp4|m4v)/gi) !== null ? "maybe" : ""
        };
        if (c && (b.mode === "auto" || b.mode === "auto_plugin" || b.mode === "native") && !(mejs.MediaFeatures.isBustedNativeHTTPS &&
                b.httpsBasicAuthSite === true)) {
            if (!d) {
                g = document.createElement(j.isVideo ? "video" : "audio");
                a.parentNode.insertBefore(g, a);
                a.style.display = "none";
                j.htmlMediaElement = a = g
            }
            for (g = 0; g < f.length; g++)
                if (a.canPlayType(f[g].type).replace(/no/, "") !== "" || a.canPlayType(f[g].type.replace(/mp3/, "mpeg")).replace(/no/, "") !== "") {
                    j.method = "native";
                    j.url = f[g].url;
                    break
                }
            if (j.method === "native") {
                if (j.url !== null) a.src = j.url;
                if (b.mode !== "auto_plugin") return j
            }
        }
        if (b.mode === "auto" || b.mode === "auto_plugin" || b.mode === "shim")
            for (g =
                0; g < f.length; g++) {
                l = f[g].type;
                for (a = 0; a < b.plugins.length; a++) {
                    e = b.plugins[a];
                    h = mejs.plugins[e];
                    for (c = 0; c < h.length; c++) {
                        k = h[c];
                        if (k.version == null || mejs.PluginDetector.hasPluginVersion(e, k.version))
                            for (d = 0; d < k.types.length; d++)
                                if (l == k.types[d]) {
                                    j.method = e;
                                    j.url = f[g].url;
                                    return j
                                }
                    }
                }
            }
        if (b.mode === "auto_plugin" && j.method === "native") return j;
        if (j.method === "" && f.length > 0) j.url = f[0].url;
        return j
    },
    formatType: function(a, b) {
        return a && !b ? this.getTypeFromFile(a) : b && ~b.indexOf(";") ? b.substr(0, b.indexOf(";")) : b
    },
    getTypeFromFile: function(a) {
        a = a.split("?")[0];
        a = a.substring(a.lastIndexOf(".") + 1).toLowerCase();
        return (/(mp4|m4v|ogg|ogv|webm|webmv|flv|wmv|mpeg|mov)/gi.test(a) ? "video" : "audio") + "/" + this.getTypeFromExtension(a)
    },
    getTypeFromExtension: function(a) {
        switch (a) {
            case "mp4":
            case "m4v":
                return "mp4";
            case "webm":
            case "webma":
            case "webmv":
                return "webm";
            case "ogg":
            case "oga":
            case "ogv":
                return "ogg";
            default:
                return a
        }
    },
    createErrorMessage: function(a, b, c) {
        var d = a.htmlMediaElement,
            e = document.createElement("div");
        e.className =
            "me-cannotplay";
        try {
            e.style.width = d.width + "px";
            e.style.height = d.height + "px"
        } catch (f) {}
        e.innerHTML = b.customError ? b.customError : c !== "" ? '<a href="' + a.url + '"><img src="' + c + '" width="100%" height="100%" /></a>' : '<a href="' + a.url + '"><span>' + mejs.i18n.t("Download File") + "</span></a>";
        d.parentNode.insertBefore(e, d);
        d.style.display = "none";
        b.error(d)
    },
    createPlugin: function(a, b, c, d, e, f) {
        c = a.htmlMediaElement;
        var g = 1,
            h = 1,
            l = "me_" + a.method + "_" + mejs.meIndex++,
            j = new mejs.PluginMediaElement(l, a.method, a.url),
            k = document.createElement("div"),
            m;
        j.tagName = c.tagName;
        for (m = 0; m < c.attributes.length; m++) {
            var n = c.attributes[m];
            n.specified == true && j.setAttribute(n.name, n.value)
        }
        for (m = c.parentNode; m !== null && m.tagName.toLowerCase() != "body";) {
            if (m.parentNode.tagName.toLowerCase() == "p") {
                m.parentNode.parentNode.insertBefore(m, m.parentNode);
                break
            }
            m = m.parentNode
        }
        if (a.isVideo) {
            g = b.pluginWidth > 0 ? b.pluginWidth : b.videoWidth > 0 ? b.videoWidth : c.getAttribute("width") !== null ? c.getAttribute("width") : b.defaultVideoWidth;
            h = b.pluginHeight > 0 ? b.pluginHeight : b.videoHeight >
                0 ? b.videoHeight : c.getAttribute("height") !== null ? c.getAttribute("height") : b.defaultVideoHeight;
            g = mejs.Utility.encodeUrl(g);
            h = mejs.Utility.encodeUrl(h)
        } else if (b.enablePluginDebug) {
            g = 320;
            h = 240
        }
        j.success = b.success;
        mejs.MediaPluginBridge.registerPluginElement(l, j, c);
        k.className = "me-plugin";
        k.id = l + "_container";
        a.isVideo ? c.parentNode.insertBefore(k, c) : document.body.insertBefore(k, document.body.childNodes[0]);
        d = ["id=" + l, "isvideo=" + (a.isVideo ? "true" : "false"), "autoplay=" + (d ? "true" : "false"), "preload=" + e, "width=" +
            g, "startvolume=" + b.startVolume, "timerrate=" + b.timerRate, "flashstreamer=" + b.flashStreamer, "height=" + h, "pseudostreamstart=" + b.pseudoStreamingStartQueryParam
        ];
        if (a.url !== null) a.method == "flash" ? d.push("file=" + mejs.Utility.encodeUrl(a.url)) : d.push("file=" + a.url);
        b.enablePluginDebug && d.push("debug=true");
        b.enablePluginSmoothing && d.push("smoothing=true");
        b.enablePseudoStreaming && d.push("pseudostreaming=true");
        f && d.push("controls=true");
        if (b.pluginVars) d = d.concat(b.pluginVars);
        switch (a.method) {
            case "silverlight":
                k.innerHTML =
                    '<object data="data:application/x-silverlight-2," type="application/x-silverlight-2" id="' + l + '" name="' + l + '" width="' + g + '" height="' + h + '" class="mejs-shim"><param name="initParams" value="' + d.join(",") + '" /><param name="windowless" value="true" /><param name="background" value="black" /><param name="minRuntimeVersion" value="3.0.0.0" /><param name="autoUpgrade" value="true" /><param name="source" value="' + b.pluginPath + b.silverlightName + '" /></object>';
                break;
            case "flash":
                if (mejs.MediaFeatures.isIE) {
                    a =
                        document.createElement("div");
                    k.appendChild(a);
                    a.outerHTML = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="//download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab" id="' + l + '" width="' + g + '" height="' + h + '" class="mejs-shim"><param name="movie" value="' + b.pluginPath + b.flashName + "?x=" + new Date + '" /><param name="flashvars" value="' + d.join("&amp;") + '" /><param name="quality" value="high" /><param name="bgcolor" value="#000000" /><param name="wmode" value="transparent" /><param name="allowScriptAccess" value="always" /><param name="allowFullScreen" value="true" /></object>'
                } else k.innerHTML =
                    '<embed id="' + l + '" name="' + l + '" play="true" loop="false" quality="high" bgcolor="#000000" wmode="transparent" allowScriptAccess="always" allowFullScreen="true" type="application/x-shockwave-flash" pluginspage="//www.macromedia.com/go/getflashplayer" src="' + b.pluginPath + b.flashName + '" flashvars="' + d.join("&") + '" width="' + g + '" height="' + h + '" class="mejs-shim"></embed>';
                break;
            case "youtube":
                b = a.url.substr(a.url.lastIndexOf("=") + 1);
                youtubeSettings = {
                    container: k,
                    containerId: k.id,
                    pluginMediaElement: j,
                    pluginId: l,
                    videoId: b,
                    height: h,
                    width: g
                };
                mejs.PluginDetector.hasPluginVersion("flash", [10, 0, 0]) ? mejs.YouTubeApi.createFlash(youtubeSettings) : mejs.YouTubeApi.enqueueIframe(youtubeSettings);
                break;
            case "vimeo":
                j.vimeoid = a.url.substr(a.url.lastIndexOf("/") + 1);
                k.innerHTML = '<iframe src="http://player.vimeo.com/video/' + j.vimeoid + '?portrait=0&byline=0&title=0" width="' + g + '" height="' + h + '" frameborder="0" class="mejs-shim"></iframe>'
        }
        c.style.display = "none";
        c.removeAttribute("autoplay");
        return j
    },
    updateNative: function(a,
        b) {
        var c = a.htmlMediaElement,
            d;
        for (d in mejs.HtmlMediaElement) c[d] = mejs.HtmlMediaElement[d];
        b.success(c, c);
        return c
    }
};
mejs.YouTubeApi = {
    isIframeStarted: false,
    isIframeLoaded: false,
    loadIframeApi: function() {
        if (!this.isIframeStarted) {
            var a = document.createElement("script");
            a.src = "//www.youtube.com/player_api";
            var b = document.getElementsByTagName("script")[0];
            b.parentNode.insertBefore(a, b);
            this.isIframeStarted = true
        }
    },
    iframeQueue: [],
    enqueueIframe: function(a) {
        if (this.isLoaded) this.createIframe(a);
        else {
            this.loadIframeApi();
            this.iframeQueue.push(a)
        }
    },
    createIframe: function(a) {
        var b = a.pluginMediaElement,
            c = new YT.Player(a.containerId, {
                height: a.height,
                width: a.width,
                videoId: a.videoId,
                playerVars: {
                    controls: 0
                },
                events: {
                    onReady: function() {
                        a.pluginMediaElement.pluginApi = c;
                        mejs.MediaPluginBridge.initPlugin(a.pluginId);
                        setInterval(function() {
                            mejs.YouTubeApi.createEvent(c, b, "timeupdate")
                        }, 250)
                    },
                    onStateChange: function(d) {
                        mejs.YouTubeApi.handleStateChange(d.data, c, b)
                    }
                }
            })
    },
    createEvent: function(a, b, c) {
        c = {
            type: c,
            target: b
        };
        if (a && a.getDuration) {
            b.currentTime = c.currentTime = a.getCurrentTime();
            b.duration = c.duration = a.getDuration();
            c.paused = b.paused;
            c.ended = b.ended;
            c.muted = a.isMuted();
            c.volume = a.getVolume() / 100;
            c.bytesTotal = a.getVideoBytesTotal();
            c.bufferedBytes = a.getVideoBytesLoaded();
            var d = c.bufferedBytes / c.bytesTotal * c.duration;
            c.target.buffered = c.buffered = {
                start: function() {
                    return 0
                },
                end: function() {
                    return d
                },
                length: 1
            }
        }
        b.dispatchEvent(c.type, c)
    },
    iFrameReady: function() {
        for (this.isIframeLoaded = this.isLoaded = true; this.iframeQueue.length > 0;) this.createIframe(this.iframeQueue.pop())
    },
    flashPlayers: {},
    createFlash: function(a) {
        this.flashPlayers[a.pluginId] =
            a;
        var b, c = "//www.youtube.com/apiplayer?enablejsapi=1&amp;playerapiid=" + a.pluginId + "&amp;version=3&amp;autoplay=0&amp;controls=0&amp;modestbranding=1&loop=0";
        if (mejs.MediaFeatures.isIE) {
            b = document.createElement("div");
            a.container.appendChild(b);
            b.outerHTML = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="//download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab" id="' + a.pluginId + '" width="' + a.width + '" height="' + a.height + '" class="mejs-shim"><param name="movie" value="' +
                c + '" /><param name="wmode" value="transparent" /><param name="allowScriptAccess" value="always" /><param name="allowFullScreen" value="true" /></object>'
        } else a.container.innerHTML = '<object type="application/x-shockwave-flash" id="' + a.pluginId + '" data="' + c + '" width="' + a.width + '" height="' + a.height + '" style="visibility: visible; " class="mejs-shim"><param name="allowScriptAccess" value="always"><param name="wmode" value="transparent"></object>'
    },
    flashReady: function(a) {
        var b = this.flashPlayers[a],
            c =
            document.getElementById(a),
            d = b.pluginMediaElement;
        d.pluginApi = d.pluginElement = c;
        mejs.MediaPluginBridge.initPlugin(a);
        c.cueVideoById(b.videoId);
        a = b.containerId + "_callback";
        window[a] = function(e) {
            mejs.YouTubeApi.handleStateChange(e, c, d)
        };
        c.addEventListener("onStateChange", a);
        setInterval(function() {
            mejs.YouTubeApi.createEvent(c, d, "timeupdate")
        }, 250)
    },
    handleStateChange: function(a, b, c) {
        switch (a) {
            case -1:
                c.paused = true;
                c.ended = true;
                mejs.YouTubeApi.createEvent(b, c, "loadedmetadata");
                break;
            case 0:
                c.paused = false;
                c.ended = true;
                mejs.YouTubeApi.createEvent(b, c, "ended");
                break;
            case 1:
                c.paused = false;
                c.ended = false;
                mejs.YouTubeApi.createEvent(b, c, "play");
                mejs.YouTubeApi.createEvent(b, c, "playing");
                break;
            case 2:
                c.paused = true;
                c.ended = false;
                mejs.YouTubeApi.createEvent(b, c, "pause");
                break;
            case 3:
                mejs.YouTubeApi.createEvent(b, c, "progress")
        }
    }
};

function onYouTubePlayerAPIReady() {
    mejs.YouTubeApi.iFrameReady()
}

function onYouTubePlayerReady(a) {
    mejs.YouTubeApi.flashReady(a)
}
window.mejs = mejs;
window.MediaElement = mejs.MediaElement;
(function(a, b) {
    var c = {
        locale: {
            language: "",
            strings: {}
        },
        methods: {}
    };
    c.locale.getLanguage = function() {
        return c.locale.language || navigator.language
    };
    if (typeof mejsL10n != "undefined") c.locale.language = mejsL10n.language;
    c.locale.INIT_LANGUAGE = c.locale.getLanguage();
    c.methods.checkPlain = function(d) {
        var e, f, g = {
            "&": "&amp;",
            '"': "&quot;",
            "<": "&lt;",
            ">": "&gt;"
        };
        d = String(d);
        for (e in g)
            if (g.hasOwnProperty(e)) {
                f = RegExp(e, "g");
                d = d.replace(f, g[e])
            }
        return d
    };
    c.methods.formatString = function(d, e) {
        for (var f in e) {
            switch (f.charAt(0)) {
                case "@":
                    e[f] =
                        c.methods.checkPlain(e[f]);
                    break;
                case "!":
                    break;
                default:
                    e[f] = '<em class="placeholder">' + c.methods.checkPlain(e[f]) + "</em>"
            }
            d = d.replace(f, e[f])
        }
        return d
    };
    c.methods.t = function(d, e, f) {
        if (c.locale.strings && c.locale.strings[f.context] && c.locale.strings[f.context][d]) d = c.locale.strings[f.context][d];
        if (e) d = c.methods.formatString(d, e);
        return d
    };
    c.t = function(d, e, f) {
        if (typeof d === "string" && d.length > 0) {
            var g = c.locale.getLanguage();
            f = f || {
                context: g
            };
            return c.methods.t(d, e, f)
        } else throw {
            name: "InvalidArgumentException",
            message: "First argument is either not a string or empty."
        };
    };
    b.i18n = c
})(document, mejs);
(function(a) {
    if (typeof mejsL10n != "undefined") a[mejsL10n.language] = mejsL10n.strings
})(mejs.i18n.locale.strings);
(function(a) {
    a.de = {
        Fullscreen: "Vollbild",
        "Go Fullscreen": "Vollbild an",
        "Turn off Fullscreen": "Vollbild aus",
        Close: "Schlie\u00dfen"
    }
})(mejs.i18n.locale.strings);
(function(a) {
    a.zh = {
        Fullscreen: "\u5168\u87a2\u5e55",
        "Go Fullscreen": "\u5168\u5c4f\u6a21\u5f0f",
        "Turn off Fullscreen": "\u9000\u51fa\u5168\u5c4f\u6a21\u5f0f",
        Close: "\u95dc\u9589"
    }
})(mejs.i18n.locale.strings);

/*!
 * MediaElementPlayer
 * http://mediaelementjs.com/
 *
 * Creates a controller bar for HTML5 <video> add <audio> tags
 * using jQuery and MediaElement.js (HTML5 Flash/Silverlight wrapper)
 *
 * Copyright 2010-2013, John Dyer (http://j.hn/)
 * License: MIT
 *
 */
if (typeof jQuery != "undefined") mejs.$ = jQuery;
else if (typeof ender != "undefined") mejs.$ = ender;
(function(f) {
    mejs.MepDefaults = {
        poster: "",
        showPosterWhenEnded: false,
        defaultVideoWidth: 480,
        defaultVideoHeight: 270,
        videoWidth: -1,
        videoHeight: -1,
        defaultAudioWidth: 400,
        defaultAudioHeight: 30,
        defaultSeekBackwardInterval: function(a) {
            return a.duration * 0.05
        },
        defaultSeekForwardInterval: function(a) {
            return a.duration * 0.05
        },
        audioWidth: -1,
        audioHeight: -1,
        startVolume: 0.8,
        loop: false,
        autoRewind: true,
        enableAutosize: true,
        alwaysShowHours: false,
        showTimecodeFrameCount: false,
        framesPerSecond: 25,
        autosizeProgress: true,
        alwaysShowControls: false,
        hideVideoControlsOnLoad: false,
        clickToPlayPause: true,
        iPadUseNativeControls: false,
        iPhoneUseNativeControls: false,
        AndroidUseNativeControls: false,
        features: ["playpause", "current", "progress", "duration", "tracks", "volume", "fullscreen"],
        isVideo: true,
        enableKeyboard: true,
        pauseOtherPlayers: true,
        keyActions: [{
            keys: [32, 179],
            action: function(a, b) {
                b.paused || b.ended ? b.play() : b.pause()
            }
        }, {
            keys: [38],
            action: function(a, b) {
                b.setVolume(Math.min(b.volume + 0.1, 1))
            }
        }, {
            keys: [40],
            action: function(a, b) {
                b.setVolume(Math.max(b.volume -
                    0.1, 0))
            }
        }, {
            keys: [37, 227],
            action: function(a, b) {
                if (!isNaN(b.duration) && b.duration > 0) {
                    if (a.isVideo) {
                        a.showControls();
                        a.startControlsTimer()
                    }
                    var c = Math.max(b.currentTime - a.options.defaultSeekBackwardInterval(b), 0);
                    b.setCurrentTime(c)
                }
            }
        }, {
            keys: [39, 228],
            action: function(a, b) {
                if (!isNaN(b.duration) && b.duration > 0) {
                    if (a.isVideo) {
                        a.showControls();
                        a.startControlsTimer()
                    }
                    var c = Math.min(b.currentTime + a.options.defaultSeekForwardInterval(b), b.duration);
                    b.setCurrentTime(c)
                }
            }
        }, {
            keys: [70],
            action: function(a) {
                if (typeof a.enterFullScreen !=
                    "undefined") a.isFullScreen ? a.exitFullScreen() : a.enterFullScreen()
            }
        }]
    };
    mejs.mepIndex = 0;
    mejs.players = {};
    mejs.MediaElementPlayer = function(a, b) {
        if (!(this instanceof mejs.MediaElementPlayer)) return new mejs.MediaElementPlayer(a, b);
        this.$media = this.$node = f(a);
        this.node = this.media = this.$media[0];
        if (typeof this.node.player != "undefined") return this.node.player;
        else this.node.player = this;
        if (typeof b == "undefined") b = this.$node.data("mejsoptions");
        this.options = f.extend({}, mejs.MepDefaults, b);
        this.id = "mep_" + mejs.mepIndex++;
        mejs.players[this.id] = this;
        this.init();
        return this
    };
    mejs.MediaElementPlayer.prototype = {
        hasFocus: false,
        controlsAreVisible: true,
        init: function() {
            var a = this,
                b = mejs.MediaFeatures,
                c = f.extend(true, {}, a.options, {
                    success: function(d, g) {
                        a.meReady(d, g)
                    },
                    error: function(d) {
                        a.handleError(d)
                    }
                }),
                e = a.media.tagName.toLowerCase();
            a.isDynamic = e !== "audio" && e !== "video";
            a.isVideo = a.isDynamic ? a.options.isVideo : e !== "audio" && a.options.isVideo;
            if (b.isiPad && a.options.iPadUseNativeControls || b.isiPhone && a.options.iPhoneUseNativeControls) {
                a.$media.attr("controls",
                    "controls");
                if (b.isiPad && a.media.getAttribute("autoplay") !== null) {
                    a.media.load();
                    a.media.play()
                }
            } else if (!(b.isAndroid && a.options.AndroidUseNativeControls)) {
                a.$media.removeAttr("controls");
                a.container = f('<div id="' + a.id + '" class="mejs-container ' + (mejs.MediaFeatures.svg ? "svg" : "no-svg") + '"><div class="mejs-inner"><div class="mejs-mediaelement"></div><div class="mejs-layers"></div><div class="mejs-controls"></div><div class="mejs-clear"></div></div></div>').addClass(a.$media[0].className).insertBefore(a.$media);
                a.container.addClass((b.isAndroid ? "mejs-android " : "") + (b.isiOS ? "mejs-ios " : "") + (b.isiPad ? "mejs-ipad " : "") + (b.isiPhone ? "mejs-iphone " : "") + (a.isVideo ? "mejs-video " : "mejs-audio "));
                if (b.isiOS) {
                    b = a.$media.clone();
                    a.container.find(".mejs-mediaelement").append(b);
                    a.$media.remove();
                    a.$node = a.$media = b;
                    a.node = a.media = b[0]
                } else a.container.find(".mejs-mediaelement").append(a.$media);
                a.controls = a.container.find(".mejs-controls");
                a.layers = a.container.find(".mejs-layers");
                b = a.isVideo ? "video" : "audio";
                e = b.substring(0,
                    1).toUpperCase() + b.substring(1);
                a.width = a.options[b + "Width"] > 0 || a.options[b + "Width"].toString().indexOf("%") > -1 ? a.options[b + "Width"] : a.media.style.width !== "" && a.media.style.width !== null ? a.media.style.width : a.media.getAttribute("width") !== null ? a.$media.attr("width") : a.options["default" + e + "Width"];
                a.height = a.options[b + "Height"] > 0 || a.options[b + "Height"].toString().indexOf("%") > -1 ? a.options[b + "Height"] : a.media.style.height !== "" && a.media.style.height !== null ? a.media.style.height : a.$media[0].getAttribute("height") !==
                    null ? a.$media.attr("height") : a.options["default" + e + "Height"];
                a.setPlayerSize(a.width, a.height);
                c.pluginWidth = a.width;
                c.pluginHeight = a.height
            }
            mejs.MediaElement(a.$media[0], c);
            typeof a.container != "undefined" && a.controlsAreVisible && a.container.trigger("controlsshown")
        },
        showControls: function(a) {
            var b = this;
            a = typeof a == "undefined" || a;
            if (!b.controlsAreVisible) {
                if (a) {
                    b.controls.css("visibility", "visible").stop(true, true).fadeIn(200, function() {
                        b.controlsAreVisible = true;
                        b.container.trigger("controlsshown")
                    });
                    b.container.find(".mejs-control").css("visibility", "visible").stop(true, true).fadeIn(200, function() {
                        b.controlsAreVisible = true
                    })
                } else {
                    b.controls.css("visibility", "visible").css("display", "block");
                    b.container.find(".mejs-control").css("visibility", "visible").css("display", "block");
                    b.controlsAreVisible = true;
                    b.container.trigger("controlsshown")
                }
                b.setControlsSize()
            }
        },
        hideControls: function(a) {
            var b = this;
            a = typeof a == "undefined" || a;
            if (!(!b.controlsAreVisible || b.options.alwaysShowControls))
                if (a) {
                    b.controls.stop(true,
                        true).fadeOut(200, function() {
                        f(this).css("visibility", "hidden").css("display", "block");
                        b.controlsAreVisible = false;
                        b.container.trigger("controlshidden")
                    });
                    b.container.find(".mejs-control").stop(true, true).fadeOut(200, function() {
                        f(this).css("visibility", "hidden").css("display", "block")
                    })
                } else {
                    b.controls.css("visibility", "hidden").css("display", "block");
                    b.container.find(".mejs-control").css("visibility", "hidden").css("display", "block");
                    b.controlsAreVisible = false;
                    b.container.trigger("controlshidden")
                }
        },
        controlsTimer: null,
        startControlsTimer: function(a) {
            var b = this;
            a = typeof a != "undefined" ? a : 1500;
            b.killControlsTimer("start");
            b.controlsTimer = setTimeout(function() {
                b.hideControls();
                b.killControlsTimer("hide")
            }, a)
        },
        killControlsTimer: function() {
            if (this.controlsTimer !== null) {
                clearTimeout(this.controlsTimer);
                delete this.controlsTimer;
                this.controlsTimer = null
            }
        },
        controlsEnabled: true,
        disableControls: function() {
            this.killControlsTimer();
            this.hideControls(false);
            this.controlsEnabled = false
        },
        enableControls: function() {
            this.showControls(false);
            this.controlsEnabled = true
        },
        meReady: function(a, b) {
            var c = this,
                e = mejs.MediaFeatures,
                d = b.getAttribute("autoplay");
            d = !(typeof d == "undefined" || d === null || d === "false");
            var g;
            if (!c.created) {
                c.created = true;
                c.media = a;
                c.domNode = b;
                if (!(e.isAndroid && c.options.AndroidUseNativeControls) && !(e.isiPad && c.options.iPadUseNativeControls) && !(e.isiPhone && c.options.iPhoneUseNativeControls)) {
                    c.buildposter(c, c.controls, c.layers, c.media);
                    c.buildkeyboard(c, c.controls, c.layers, c.media);
                    c.buildoverlays(c, c.controls, c.layers, c.media);
                    c.findTracks();
                    for (g in c.options.features) {
                        e = c.options.features[g];
                        if (c["build" + e]) try {
                            c["build" + e](c, c.controls, c.layers, c.media)
                        } catch (k) {}
                    }
                    c.container.trigger("controlsready");
                    c.setPlayerSize(c.width, c.height);
                    c.setControlsSize();
                    if (c.isVideo) {
                        if (mejs.MediaFeatures.hasTouch) c.$media.bind("touchstart", function() {
                            if (c.controlsAreVisible) c.hideControls(false);
                            else c.controlsEnabled && c.showControls(false)
                        });
                        else {
                            mejs.MediaElementPlayer.prototype.clickToPlayPauseCallback = function() {
                                if (c.options.clickToPlayPause) c.media.paused ?
                                    c.media.play() : c.media.pause()
                            };
                            c.media.addEventListener("click", c.clickToPlayPauseCallback, false);
                            c.container.bind("mouseenter mouseover", function() {
                                if (c.controlsEnabled)
                                    if (!c.options.alwaysShowControls) {
                                        c.killControlsTimer("enter");
                                        c.showControls();
                                        c.startControlsTimer(2500)
                                    }
                            }).bind("mousemove", function() {
                                if (c.controlsEnabled) {
                                    c.controlsAreVisible || c.showControls();
                                    c.options.alwaysShowControls || c.startControlsTimer(2500)
                                }
                            }).bind("mouseleave", function() {
                                c.controlsEnabled && !c.media.paused && !c.options.alwaysShowControls &&
                                    c.startControlsTimer(1E3)
                            })
                        }
                        c.options.hideVideoControlsOnLoad && c.hideControls(false);
                        d && !c.options.alwaysShowControls && c.hideControls();
                        c.options.enableAutosize && c.media.addEventListener("loadedmetadata", function(j) {
                            if (c.options.videoHeight <= 0 && c.domNode.getAttribute("height") === null && !isNaN(j.target.videoHeight)) {
                                c.setPlayerSize(j.target.videoWidth, j.target.videoHeight);
                                c.setControlsSize();
                                c.media.setVideoSize(j.target.videoWidth, j.target.videoHeight)
                            }
                        }, false)
                    }
                    a.addEventListener("play", function() {
                        for (var j in mejs.players) {
                            var m =
                                mejs.players[j];
                            m.id != c.id && c.options.pauseOtherPlayers && !m.paused && !m.ended && m.pause();
                            m.hasFocus = false
                        }
                        c.hasFocus = true
                    }, false);
                    c.media.addEventListener("ended", function() {
                        if (c.options.autoRewind) try {
                            c.media.setCurrentTime(0)
                        } catch (j) {}
                        c.media.pause();
                        c.setProgressRail && c.setProgressRail();
                        c.setCurrentRail && c.setCurrentRail();
                        if (c.options.loop) c.media.play();
                        else !c.options.alwaysShowControls && c.controlsEnabled && c.showControls()
                    }, false);
                    c.media.addEventListener("loadedmetadata", function() {
                        c.updateDuration &&
                            c.updateDuration();
                        c.updateCurrent && c.updateCurrent();
                        if (!c.isFullScreen) {
                            c.setPlayerSize(c.width, c.height);
                            c.setControlsSize()
                        }
                    }, false);
                    setTimeout(function() {
                        c.setPlayerSize(c.width, c.height);
                        c.setControlsSize()
                    }, 50);
                    c.globalBind("resize", function() {
                        c.isFullScreen || mejs.MediaFeatures.hasTrueNativeFullScreen && document.webkitIsFullScreen || c.setPlayerSize(c.width, c.height);
                        c.setControlsSize()
                    });
                    c.media.pluginType == "youtube" && c.container.find(".mejs-overlay-play").hide()
                }
                if (d && a.pluginType == "native") {
                    a.load();
                    a.play()
                }
                if (c.options.success) typeof c.options.success == "string" ? window[c.options.success](c.media, c.domNode, c) : c.options.success(c.media, c.domNode, c)
            }
        },
        handleError: function(a) {
            this.controls.hide();
            this.options.error && this.options.error(a)
        },
        setPlayerSize: function(a, b) {
            if (typeof a != "undefined") this.width = a;
            if (typeof b != "undefined") this.height = b;
            if (this.height.toString().indexOf("%") > 0 || this.$node.css("max-width") === "100%" || parseInt(this.$node.css("max-width").replace(/px/, ""), 10) / this.$node.offsetParent().width() ===
                1 || this.$node[0].currentStyle && this.$node[0].currentStyle.maxWidth === "100%") {
                var c = this.isVideo ? this.media.videoWidth && this.media.videoWidth > 0 ? this.media.videoWidth : this.options.defaultVideoWidth : this.options.defaultAudioWidth,
                    e = this.isVideo ? this.media.videoHeight && this.media.videoHeight > 0 ? this.media.videoHeight : this.options.defaultVideoHeight : this.options.defaultAudioHeight,
                    d = this.container.parent().closest(":visible").width();
                c = this.isVideo || !this.options.autosizeProgress ? parseInt(d * e / c, 10) : e;
                if (this.container.parent()[0].tagName.toLowerCase() ===
                    "body") {
                    d = f(window).width();
                    c = f(window).height()
                }
                if (c != 0 && d != 0) {
                    this.container.width(d).height(c);
                    this.$media.add(this.container.find(".mejs-shim")).width("100%").height("100%");
                    this.isVideo && this.media.setVideoSize && this.media.setVideoSize(d, c);
                    this.layers.children(".mejs-layer").width("100%").height("100%")
                }
            } else {
                this.container.width(this.width).height(this.height);
                this.layers.children(".mejs-layer").width(this.width).height(this.height)
            }
            d = this.layers.find(".mejs-overlay-play");
            c = d.find(".mejs-overlay-button");
            d.height(this.container.height() - this.controls.height());
            c.css("margin-top", "-" + (c.height() / 2 - this.controls.height() / 2).toString() + "px")
        },
        setControlsSize: function() {
            var a = 0,
                b = 0,
                c = this.controls.find(".mejs-time-rail"),
                e = this.controls.find(".mejs-time-total");
            this.controls.find(".mejs-time-current");
            this.controls.find(".mejs-time-loaded");
            var d = c.siblings();
            if (this.options && !this.options.autosizeProgress) b = parseInt(c.css("width"));
            if (b === 0 || !b) {
                d.each(function() {
                    var g = f(this);
                    if (g.css("position") !=
                        "absolute" && g.is(":visible")) a += f(this).outerWidth(true)
                });
                b = this.controls.width() - a - (c.outerWidth(true) - c.width()) - 1
            }
            c.width(b);
            e.width(b - (e.outerWidth(true) - e.width()));
            this.setProgressRail && this.setProgressRail();
            this.setCurrentRail && this.setCurrentRail()
        },
        buildposter: function(a, b, c, e) {
            var d = f('<div class="mejs-poster mejs-layer"></div>').appendTo(c);
            b = a.$media.attr("poster");
            if (a.options.poster !== "") b = a.options.poster;
            b !== "" && b != null ? this.setPoster(b) : d.hide();
            e.addEventListener("play", function() {
                    d.hide()
                },
                false);
            a.options.showPosterWhenEnded && a.options.autoRewind && e.addEventListener("ended", function() {
                d.show()
            }, false)
        },
        setPoster: function(a) {
            var b = this.container.find(".mejs-poster"),
                c = b.find("img");
            if (c.length == 0) c = f('<img width="100%" height="100%" />').appendTo(b);
            c.attr("src", a);
            b.css({
                "background-image": "url(" + a + ")"
            })
        },
        buildoverlays: function(a, b, c, e) {
            var d = this;
            if (a.isVideo) {
                var g = f('<div class="mejs-overlay mejs-layer"><div class="mejs-overlay-loading"><span></span></div></div>').hide().appendTo(c),
                    k = f('<div class="mejs-overlay mejs-layer"><div class="mejs-overlay-error"></div></div>').hide().appendTo(c),
                    j = f('<div class="mejs-overlay mejs-layer mejs-overlay-play"><div class="mejs-overlay-button"></div></div>').appendTo(c).click(function() {
                        if (d.options.clickToPlayPause) e.paused ? e.play() : e.pause()
                    });
                e.addEventListener("play", function() {
                    j.hide();
                    g.hide();
                    b.find(".mejs-time-buffering").hide();
                    k.hide()
                }, false);
                e.addEventListener("playing", function() {
                    j.hide();
                    g.hide();
                    b.find(".mejs-time-buffering").hide();
                    k.hide()
                }, false);
                e.addEventListener("seeking", function() {
                    g.show();
                    b.find(".mejs-time-buffering").show()
                }, false);
                e.addEventListener("seeked", function() {
                    g.hide();
                    b.find(".mejs-time-buffering").hide()
                }, false);
                e.addEventListener("pause", function() {
                    mejs.MediaFeatures.isiPhone || j.show()
                }, false);
                e.addEventListener("waiting", function() {
                    g.show();
                    b.find(".mejs-time-buffering").show()
                }, false);
                e.addEventListener("loadeddata", function() {
                    g.show();
                    b.find(".mejs-time-buffering").show()
                }, false);
                e.addEventListener("canplay",
                    function() {
                        g.hide();
                        b.find(".mejs-time-buffering").hide()
                    }, false);
                e.addEventListener("error", function() {
                    g.hide();
                    b.find(".mejs-time-buffering").hide();
                    k.show();
                    k.find("mejs-overlay-error").html("Error loading this resource")
                }, false)
            }
        },
        buildkeyboard: function(a, b, c, e) {
            this.globalBind("keydown", function(d) {
                if (a.hasFocus && a.options.enableKeyboard)
                    for (var g = 0, k = a.options.keyActions.length; g < k; g++)
                        for (var j = a.options.keyActions[g], m = 0, q = j.keys.length; m < q; m++)
                            if (d.keyCode == j.keys[m]) {
                                d.preventDefault();
                                j.action(a, e, d.keyCode);
                                return false
                            }
                return true
            });
            this.globalBind("click", function(d) {
                if (f(d.target).closest(".mejs-container").length == 0) a.hasFocus = false
            })
        },
        findTracks: function() {
            var a = this,
                b = a.$media.find("track");
            a.tracks = [];
            b.each(function(c, e) {
                e = f(e);
                a.tracks.push({
                    srclang: e.attr("srclang") ? e.attr("srclang").toLowerCase() : "",
                    src: e.attr("src"),
                    kind: e.attr("kind"),
                    label: e.attr("label") || "",
                    entries: [],
                    isLoaded: false
                })
            })
        },
        changeSkin: function(a) {
            this.container[0].className = "mejs-container " + a;
            this.setPlayerSize(this.width,
                this.height);
            this.setControlsSize()
        },
        play: function() {
            this.media.play()
        },
        pause: function() {
            try {
                this.media.pause()
            } catch (a) {}
        },
        load: function() {
            this.media.load()
        },
        setMuted: function(a) {
            this.media.setMuted(a)
        },
        setCurrentTime: function(a) {
            this.media.setCurrentTime(a)
        },
        getCurrentTime: function() {
            return this.media.currentTime
        },
        setVolume: function(a) {
            this.media.setVolume(a)
        },
        getVolume: function() {
            return this.media.volume
        },
        setSrc: function(a) {
            this.media.setSrc(a)
        },
        remove: function() {
            var a, b;
            for (a in this.options.features) {
                b =
                    this.options.features[a];
                if (this["clean" + b]) try {
                    this["clean" + b](this)
                } catch (c) {}
            }
            if (this.isDynamic) this.$node.insertBefore(this.container);
            else {
                this.$media.prop("controls", true);
                this.$node.clone().show().insertBefore(this.container);
                this.$node.remove()
            }
            this.media.pluginType !== "native" && this.media.remove();
            delete mejs.players[this.id];
            this.container.remove();
            this.globalUnbind();
            delete this.node.player
        }
    };
    (function() {
        function a(c, e) {
            var d = {
                d: [],
                w: []
            };
            f.each((c || "").split(" "), function(g, k) {
                var j = k + "." +
                    e;
                if (j.indexOf(".") === 0) {
                    d.d.push(j);
                    d.w.push(j)
                } else d[b.test(k) ? "w" : "d"].push(j)
            });
            d.d = d.d.join(" ");
            d.w = d.w.join(" ");
            return d
        }
        var b = /^((after|before)print|(before)?unload|hashchange|message|o(ff|n)line|page(hide|show)|popstate|resize|storage)\b/;
        mejs.MediaElementPlayer.prototype.globalBind = function(c, e, d) {
            c = a(c, this.id);
            c.d && f(document).bind(c.d, e, d);
            c.w && f(window).bind(c.w, e, d)
        };
        mejs.MediaElementPlayer.prototype.globalUnbind = function(c, e) {
            c = a(c, this.id);
            c.d && f(document).unbind(c.d, e);
            c.w && f(window).unbind(c.w,
                e)
        }
    })();
    if (typeof jQuery != "undefined") jQuery.fn.mediaelementplayer = function(a) {
        a === false ? this.each(function() {
            var b = jQuery(this).data("mediaelementplayer");
            b && b.remove();
            jQuery(this).removeData("mediaelementplayer")
        }) : this.each(function() {
            jQuery(this).data("mediaelementplayer", new mejs.MediaElementPlayer(this, a))
        });
        return this
    };
    f(document).ready(function() {
        f(".mejs-player").mediaelementplayer()
    });
    window.MediaElementPlayer = mejs.MediaElementPlayer
})(mejs.$);
(function(f) {
    f.extend(mejs.MepDefaults, {
        playpauseText: mejs.i18n.t("Play/Pause")
    });
    f.extend(MediaElementPlayer.prototype, {
        buildplaypause: function(a, b, c, e) {
            var d = f('<div class="mejs-button mejs-playpause-button mejs-play" ><button type="button" aria-controls="' + this.id + '" title="' + this.options.playpauseText + '" aria-label="' + this.options.playpauseText + '"></button></div>').appendTo(b).click(function(g) {
                g.preventDefault();
                e.paused ? e.play() : e.pause();
                return false
            });
            e.addEventListener("play", function() {
                    d.removeClass("mejs-play").addClass("mejs-pause")
                },
                false);
            e.addEventListener("playing", function() {
                d.removeClass("mejs-play").addClass("mejs-pause")
            }, false);
            e.addEventListener("pause", function() {
                d.removeClass("mejs-pause").addClass("mejs-play")
            }, false);
            e.addEventListener("paused", function() {
                d.removeClass("mejs-pause").addClass("mejs-play")
            }, false)
        }
    })
})(mejs.$);
(function(f) {
    f.extend(mejs.MepDefaults, {
        stopText: "Stop"
    });
    f.extend(MediaElementPlayer.prototype, {
        buildstop: function(a, b, c, e) {
            f('<div class="mejs-button mejs-stop-button mejs-stop"><button type="button" aria-controls="' + this.id + '" title="' + this.options.stopText + '" aria-label="' + this.options.stopText + '"></button></div>').appendTo(b).click(function() {
                e.paused || e.pause();
                if (e.currentTime > 0) {
                    e.setCurrentTime(0);
                    e.pause();
                    b.find(".mejs-time-current").width("0px");
                    b.find(".mejs-time-handle").css("left",
                        "0px");
                    b.find(".mejs-time-float-current").html(mejs.Utility.secondsToTimeCode(0));
                    b.find(".mejs-currenttime").html(mejs.Utility.secondsToTimeCode(0));
                    c.find(".mejs-poster").show()
                }
            })
        }
    })
})(mejs.$);
(function(f) {
    f.extend(MediaElementPlayer.prototype, {
        buildprogress: function(a, b, c, e) {
            f('<div class="mejs-time-rail"><span class="mejs-time-total"><span class="mejs-time-buffering"></span><span class="mejs-time-loaded"></span><span class="mejs-time-current"></span><span class="mejs-time-handle"></span><span class="mejs-time-float"><span class="mejs-time-float-current">00:00</span><span class="mejs-time-float-corner"></span></span></span></div>').appendTo(b);
            b.find(".mejs-time-buffering").hide();
            var d =
                this,
                g = b.find(".mejs-time-total");
            c = b.find(".mejs-time-loaded");
            var k = b.find(".mejs-time-current"),
                j = b.find(".mejs-time-handle"),
                m = b.find(".mejs-time-float"),
                q = b.find(".mejs-time-float-current"),
                p = function(h) {
                    h = h.pageX;
                    var l = g.offset(),
                        r = g.outerWidth(true),
                        n = 0,
                        o = n = 0;
                    if (e.duration) {
                        if (h < l.left) h = l.left;
                        else if (h > r + l.left) h = r + l.left;
                        o = h - l.left;
                        n = o / r;
                        n = n <= 0.02 ? 0 : n * e.duration;
                        t && n !== e.currentTime && e.setCurrentTime(n);
                        if (!mejs.MediaFeatures.hasTouch) {
                            m.css("left", o);
                            q.html(mejs.Utility.secondsToTimeCode(n));
                            m.show()
                        }
                    }
                },
                t = false;
            g.bind("mousedown", function(h) {
                if (h.which === 1) {
                    t = true;
                    p(h);
                    d.globalBind("mousemove.dur", function(l) {
                        p(l)
                    });
                    d.globalBind("mouseup.dur", function() {
                        t = false;
                        m.hide();
                        d.globalUnbind(".dur")
                    });
                    return false
                }
            }).bind("mouseenter", function() {
                d.globalBind("mousemove.dur", function(h) {
                    p(h)
                });
                mejs.MediaFeatures.hasTouch || m.show()
            }).bind("mouseleave", function() {
                if (!t) {
                    d.globalUnbind(".dur");
                    m.hide()
                }
            });
            e.addEventListener("progress", function(h) {
                a.setProgressRail(h);
                a.setCurrentRail(h)
            }, false);
            e.addEventListener("timeupdate", function(h) {
                a.setProgressRail(h);
                a.setCurrentRail(h)
            }, false);
            d.loaded = c;
            d.total = g;
            d.current = k;
            d.handle = j
        },
        setProgressRail: function(a) {
            var b = a != undefined ? a.target : this.media,
                c = null;
            if (b && b.buffered && b.buffered.length > 0 && b.buffered.end && b.duration) c = b.buffered.end(0) / b.duration;
            else if (b && b.bytesTotal != undefined && b.bytesTotal > 0 && b.bufferedBytes != undefined) c = b.bufferedBytes / b.bytesTotal;
            else if (a && a.lengthComputable && a.total != 0) c = a.loaded / a.total;
            if (c !== null) {
                c = Math.min(1,
                    Math.max(0, c));
                this.loaded && this.total && this.loaded.width(this.total.width() * c)
            }
        },
        setCurrentRail: function() {
            if (this.media.currentTime != undefined && this.media.duration)
                if (this.total && this.handle) {
                    var a = Math.round(this.total.width() * this.media.currentTime / this.media.duration),
                        b = a - Math.round(this.handle.outerWidth(true) / 2);
                    this.current.width(a);
                    this.handle.css("left", b)
                }
        }
    })
})(mejs.$);
(function(f) {
    f.extend(mejs.MepDefaults, {
        duration: -1,
        timeAndDurationSeparator: "<span> | </span>"
    });
    f.extend(MediaElementPlayer.prototype, {
        buildcurrent: function(a, b, c, e) {
            f('<div class="mejs-time"><span class="mejs-currenttime">' + (a.options.alwaysShowHours ? "00:" : "") + (a.options.showTimecodeFrameCount ? "00:00:00" : "00:00") + "</span></div>").appendTo(b);
            this.currenttime = this.controls.find(".mejs-currenttime");
            e.addEventListener("timeupdate", function() {
                a.updateCurrent()
            }, false)
        },
        buildduration: function(a, b,
            c, e) {
            if (b.children().last().find(".mejs-currenttime").length > 0) f(this.options.timeAndDurationSeparator + '<span class="mejs-duration">' + (this.options.duration > 0 ? mejs.Utility.secondsToTimeCode(this.options.duration, this.options.alwaysShowHours || this.media.duration > 3600, this.options.showTimecodeFrameCount, this.options.framesPerSecond || 25) : (a.options.alwaysShowHours ? "00:" : "") + (a.options.showTimecodeFrameCount ? "00:00:00" : "00:00")) + "</span>").appendTo(b.find(".mejs-time"));
            else {
                b.find(".mejs-currenttime").parent().addClass("mejs-currenttime-container");
                f('<div class="mejs-time mejs-duration-container"><span class="mejs-duration">' + (this.options.duration > 0 ? mejs.Utility.secondsToTimeCode(this.options.duration, this.options.alwaysShowHours || this.media.duration > 3600, this.options.showTimecodeFrameCount, this.options.framesPerSecond || 25) : (a.options.alwaysShowHours ? "00:" : "") + (a.options.showTimecodeFrameCount ? "00:00:00" : "00:00")) + "</span></div>").appendTo(b)
            }
            this.durationD = this.controls.find(".mejs-duration");
            e.addEventListener("timeupdate", function() {
                    a.updateDuration()
                },
                false)
        },
        updateCurrent: function() {
            if (this.currenttime) this.currenttime.html(mejs.Utility.secondsToTimeCode(this.media.currentTime, this.options.alwaysShowHours || this.media.duration > 3600, this.options.showTimecodeFrameCount, this.options.framesPerSecond || 25))
        },
        updateDuration: function() {
            this.container.toggleClass("mejs-long-video", this.media.duration > 3600);
            if (this.durationD && (this.options.duration > 0 || this.media.duration)) this.durationD.html(mejs.Utility.secondsToTimeCode(this.options.duration > 0 ? this.options.duration :
                this.media.duration, this.options.alwaysShowHours, this.options.showTimecodeFrameCount, this.options.framesPerSecond || 25))
        }
    })
})(mejs.$);
(function(f) {
    f.extend(mejs.MepDefaults, {
        muteText: mejs.i18n.t("Mute Toggle"),
        hideVolumeOnTouchDevices: true,
        audioVolume: "horizontal",
        videoVolume: "vertical"
    });
    f.extend(MediaElementPlayer.prototype, {
        buildvolume: function(a, b, c, e) {
            if (!(mejs.MediaFeatures.hasTouch && this.options.hideVolumeOnTouchDevices)) {
                var d = this,
                    g = d.isVideo ? d.options.videoVolume : d.options.audioVolume,
                    k = g == "horizontal" ? f('<div class="mejs-button mejs-volume-button mejs-mute"><button type="button" aria-controls="' + d.id + '" title="' + d.options.muteText +
                        '" aria-label="' + d.options.muteText + '"></button></div><div class="mejs-horizontal-volume-slider"><div class="mejs-horizontal-volume-total"></div><div class="mejs-horizontal-volume-current"></div><div class="mejs-horizontal-volume-handle"></div></div>').appendTo(b) : f('<div class="mejs-button mejs-volume-button mejs-mute"><button type="button" aria-controls="' + d.id + '" title="' + d.options.muteText + '" aria-label="' + d.options.muteText + '"></button><div class="mejs-volume-slider"><div class="mejs-volume-total"></div><div class="mejs-volume-current"></div><div class="mejs-volume-handle"></div></div></div>').appendTo(b),
                    j = d.container.find(".mejs-volume-slider, .mejs-horizontal-volume-slider"),
                    m = d.container.find(".mejs-volume-total, .mejs-horizontal-volume-total"),
                    q = d.container.find(".mejs-volume-current, .mejs-horizontal-volume-current"),
                    p = d.container.find(".mejs-volume-handle, .mejs-horizontal-volume-handle"),
                    t = function(n, o) {
                        if (!j.is(":visible") && typeof o == "undefined") {
                            j.show();
                            t(n, true);
                            j.hide()
                        } else {
                            n = Math.max(0, n);
                            n = Math.min(n, 1);
                            n == 0 ? k.removeClass("mejs-mute").addClass("mejs-unmute") : k.removeClass("mejs-unmute").addClass("mejs-mute");
                            if (g == "vertical") {
                                var s = m.height(),
                                    u = m.position(),
                                    v = s - s * n;
                                p.css("top", Math.round(u.top + v - p.height() / 2));
                                q.height(s - v);
                                q.css("top", u.top + v)
                            } else {
                                s = m.width();
                                u = m.position();
                                s = s * n;
                                p.css("left", Math.round(u.left + s - p.width() / 2));
                                q.width(Math.round(s))
                            }
                        }
                    },
                    h = function(n) {
                        var o = null,
                            s = m.offset();
                        if (g == "vertical") {
                            o = m.height();
                            parseInt(m.css("top").replace(/px/, ""), 10);
                            o = (o - (n.pageY - s.top)) / o;
                            if (s.top == 0 || s.left == 0) return
                        } else {
                            o = m.width();
                            o = (n.pageX - s.left) / o
                        }
                        o = Math.max(0, o);
                        o = Math.min(o, 1);
                        t(o);
                        o == 0 ? e.setMuted(true) :
                            e.setMuted(false);
                        e.setVolume(o)
                    },
                    l = false,
                    r = false;
                k.hover(function() {
                    j.show();
                    r = true
                }, function() {
                    r = false;
                    !l && g == "vertical" && j.hide()
                });
                j.bind("mouseover", function() {
                    r = true
                }).bind("mousedown", function(n) {
                    h(n);
                    d.globalBind("mousemove.vol", function(o) {
                        h(o)
                    });
                    d.globalBind("mouseup.vol", function() {
                        l = false;
                        d.globalUnbind(".vol");
                        !r && g == "vertical" && j.hide()
                    });
                    l = true;
                    return false
                });
                k.find("button").click(function() {
                    e.setMuted(!e.muted)
                });
                e.addEventListener("volumechange", function() {
                    if (!l)
                        if (e.muted) {
                            t(0);
                            k.removeClass("mejs-mute").addClass("mejs-unmute")
                        } else {
                            t(e.volume);
                            k.removeClass("mejs-unmute").addClass("mejs-mute")
                        }
                }, false);
                if (d.container.is(":visible")) {
                    t(a.options.startVolume);
                    a.options.startVolume === 0 && e.setMuted(true);
                    e.pluginType === "native" && e.setVolume(a.options.startVolume)
                }
            }
        }
    })
})(mejs.$);
(function(f) {
    f.extend(mejs.MepDefaults, {
        usePluginFullScreen: true,
        newWindowCallback: function() {
            return ""
        },
        fullscreenText: mejs.i18n.t("Fullscreen")
    });
    f.extend(MediaElementPlayer.prototype, {
        isFullScreen: false,
        isNativeFullScreen: false,
        isInIframe: false,
        buildfullscreen: function(a, b, c, e) {
            if (a.isVideo) {
                a.isInIframe = window.location != window.parent.location;
                if (mejs.MediaFeatures.hasTrueNativeFullScreen) {
                    c = function() {
                        if (a.isFullScreen)
                            if (mejs.MediaFeatures.isFullScreen()) {
                                a.isNativeFullScreen = true;
                                a.setControlsSize()
                            } else {
                                a.isNativeFullScreen =
                                    false;
                                a.exitFullScreen()
                            }
                    };
                    mejs.MediaFeatures.hasMozNativeFullScreen ? a.globalBind(mejs.MediaFeatures.fullScreenEventName, c) : a.container.bind(mejs.MediaFeatures.fullScreenEventName, c)
                }
                var d = this,
                    g = f('<div class="mejs-button mejs-fullscreen-button"><button type="button" aria-controls="' + d.id + '" title="' + d.options.fullscreenText + '" aria-label="' + d.options.fullscreenText + '"></button></div>').appendTo(b);
                if (d.media.pluginType === "native" || !d.options.usePluginFullScreen && !mejs.MediaFeatures.isFirefox) g.click(function() {
                    mejs.MediaFeatures.hasTrueNativeFullScreen &&
                        mejs.MediaFeatures.isFullScreen() || a.isFullScreen ? a.exitFullScreen() : a.enterFullScreen()
                });
                else {
                    var k = null;
                    if (function() {
                            var h = document.createElement("x"),
                                l = document.documentElement,
                                r = window.getComputedStyle;
                            if (!("pointerEvents" in h.style)) return false;
                            h.style.pointerEvents = "auto";
                            h.style.pointerEvents = "x";
                            l.appendChild(h);
                            r = r && r(h, "").pointerEvents === "auto";
                            l.removeChild(h);
                            return !!r
                        }() && !mejs.MediaFeatures.isOpera) {
                        var j = false,
                            m = function() {
                                if (j) {
                                    for (var h in q) q[h].hide();
                                    g.css("pointer-events",
                                        "");
                                    d.controls.css("pointer-events", "");
                                    d.media.removeEventListener("click", d.clickToPlayPauseCallback);
                                    j = false
                                }
                            },
                            q = {};
                        b = ["top", "left", "right", "bottom"];
                        var p, t = function() {
                            var h = g.offset().left - d.container.offset().left,
                                l = g.offset().top - d.container.offset().top,
                                r = g.outerWidth(true),
                                n = g.outerHeight(true),
                                o = d.container.width(),
                                s = d.container.height();
                            for (p in q) q[p].css({
                                position: "absolute",
                                top: 0,
                                left: 0
                            });
                            q.top.width(o).height(l);
                            q.left.width(h).height(n).css({
                                top: l
                            });
                            q.right.width(o - h - r).height(n).css({
                                top: l,
                                left: h + r
                            });
                            q.bottom.width(o).height(s - n - l).css({
                                top: l + n
                            })
                        };
                        d.globalBind("resize", function() {
                            t()
                        });
                        p = 0;
                        for (c = b.length; p < c; p++) q[b[p]] = f('<div class="mejs-fullscreen-hover" />').appendTo(d.container).mouseover(m).hide();
                        g.on("mouseover", function() {
                            if (!d.isFullScreen) {
                                var h = g.offset(),
                                    l = a.container.offset();
                                e.positionFullscreenButton(h.left - l.left, h.top - l.top, false);
                                g.css("pointer-events", "none");
                                d.controls.css("pointer-events", "none");
                                d.media.addEventListener("click", d.clickToPlayPauseCallback);
                                for (p in q) q[p].show();
                                t();
                                j = true
                            }
                        });
                        e.addEventListener("fullscreenchange", function() {
                            d.isFullScreen = !d.isFullScreen;
                            d.isFullScreen ? d.media.removeEventListener("click", d.clickToPlayPauseCallback) : d.media.addEventListener("click", d.clickToPlayPauseCallback);
                            m()
                        });
                        d.globalBind("mousemove", function(h) {
                            if (j) {
                                var l = g.offset();
                                if (h.pageY < l.top || h.pageY > l.top + g.outerHeight(true) || h.pageX < l.left || h.pageX > l.left + g.outerWidth(true)) {
                                    g.css("pointer-events", "");
                                    d.controls.css("pointer-events", "");
                                    j = false
                                }
                            }
                        })
                    } else g.on("mouseover",
                        function() {
                            if (k !== null) {
                                clearTimeout(k);
                                delete k
                            }
                            var h = g.offset(),
                                l = a.container.offset();
                            e.positionFullscreenButton(h.left - l.left, h.top - l.top, true)
                        }).on("mouseout", function() {
                        if (k !== null) {
                            clearTimeout(k);
                            delete k
                        }
                        k = setTimeout(function() {
                            e.hideFullscreenButton()
                        }, 1500)
                    })
                }
                a.fullscreenBtn = g;
                d.globalBind("keydown", function(h) {
                    if ((mejs.MediaFeatures.hasTrueNativeFullScreen && mejs.MediaFeatures.isFullScreen() || d.isFullScreen) && h.keyCode == 27) a.exitFullScreen()
                })
            }
        },
        cleanfullscreen: function(a) {
            a.exitFullScreen()
        },
        containerSizeTimeout: null,
        enterFullScreen: function() {
            var a = this;
            if (!(a.media.pluginType !== "native" && (mejs.MediaFeatures.isFirefox || a.options.usePluginFullScreen))) {
                f(document.documentElement).addClass("mejs-fullscreen");
                normalHeight = a.container.height();
                normalWidth = a.container.width();
                if (a.media.pluginType === "native")
                    if (mejs.MediaFeatures.hasTrueNativeFullScreen) {
                        mejs.MediaFeatures.requestFullScreen(a.container[0]);
                        a.isInIframe && setTimeout(function c() {
                            if (a.isNativeFullScreen) f(window).width() !==
                                screen.width ? a.exitFullScreen() : setTimeout(c, 500)
                        }, 500)
                    } else if (mejs.MediaFeatures.hasSemiNativeFullScreen) {
                    a.media.webkitEnterFullscreen();
                    return
                }
                if (a.isInIframe) {
                    var b = a.options.newWindowCallback(this);
                    if (b !== "")
                        if (mejs.MediaFeatures.hasTrueNativeFullScreen) setTimeout(function() {
                            if (!a.isNativeFullScreen) {
                                a.pause();
                                window.open(b, a.id, "top=0,left=0,width=" + screen.availWidth + ",height=" + screen.availHeight + ",resizable=yes,scrollbars=no,status=no,toolbar=no")
                            }
                        }, 250);
                        else {
                            a.pause();
                            window.open(b, a.id,
                                "top=0,left=0,width=" + screen.availWidth + ",height=" + screen.availHeight + ",resizable=yes,scrollbars=no,status=no,toolbar=no");
                            return
                        }
                }
                a.container.addClass("mejs-container-fullscreen").width("100%").height("100%");
                a.containerSizeTimeout = setTimeout(function() {
                    a.container.css({
                        width: "100%",
                        height: "100%"
                    });
                    a.setControlsSize()
                }, 500);
                if (a.media.pluginType === "native") a.$media.width("100%").height("100%");
                else {
                    a.container.find(".mejs-shim").width("100%").height("100%");
                    a.media.setVideoSize(f(window).width(),
                        f(window).height())
                }
                a.layers.children("div").width("100%").height("100%");
                a.fullscreenBtn && a.fullscreenBtn.removeClass("mejs-fullscreen").addClass("mejs-unfullscreen");
                a.setControlsSize();
                a.isFullScreen = true
            }
        },
        exitFullScreen: function() {
            clearTimeout(this.containerSizeTimeout);
            if (this.media.pluginType !== "native" && mejs.MediaFeatures.isFirefox) this.media.setFullscreen(false);
            else {
                if (mejs.MediaFeatures.hasTrueNativeFullScreen && (mejs.MediaFeatures.isFullScreen() || this.isFullScreen)) mejs.MediaFeatures.cancelFullScreen();
                f(document.documentElement).removeClass("mejs-fullscreen");
                this.container.removeClass("mejs-container-fullscreen").width(normalWidth).height(normalHeight);
                if (this.media.pluginType === "native") this.$media.width(normalWidth).height(normalHeight);
                else {
                    this.container.find(".mejs-shim").width(normalWidth).height(normalHeight);
                    this.media.setVideoSize(normalWidth, normalHeight)
                }
                this.layers.children("div").width(normalWidth).height(normalHeight);
                this.fullscreenBtn.removeClass("mejs-unfullscreen").addClass("mejs-fullscreen");
                this.setControlsSize();
                this.isFullScreen = false
            }
        }
    })
})(mejs.$);
(function(f) {
    f.extend(mejs.MepDefaults, {
        startLanguage: "",
        tracksText: mejs.i18n.t("Captions/Subtitles"),
        hideCaptionsButtonWhenEmpty: true,
        toggleCaptionsButtonWhenOnlyOne: false,
        slidesSelector: ""
    });
    f.extend(MediaElementPlayer.prototype, {
        hasChapters: false,
        buildtracks: function(a, b, c, e) {
            if (a.tracks.length != 0) {
                var d;
                if (this.domNode.textTracks)
                    for (d = this.domNode.textTracks.length - 1; d >= 0; d--) this.domNode.textTracks[d].mode = "hidden";
                a.chapters = f('<div class="mejs-chapters mejs-layer"></div>').prependTo(c).hide();
                a.captions =
                    f('<div class="mejs-captions-layer mejs-layer"><div class="mejs-captions-position mejs-captions-position-hover"><span class="mejs-captions-text"></span></div></div>').prependTo(c).hide();
                a.captionsText = a.captions.find(".mejs-captions-text");
                a.captionsButton = f('<div class="mejs-button mejs-captions-button"><button type="button" aria-controls="' + this.id + '" title="' + this.options.tracksText + '" aria-label="' + this.options.tracksText + '"></button><div class="mejs-captions-selector"><ul><li><input type="radio" name="' +
                    a.id + '_captions" id="' + a.id + '_captions_none" value="none" checked="checked" /><label for="' + a.id + '_captions_none">' + mejs.i18n.t("None") + "</label></li></ul></div></div>").appendTo(b);
                for (d = b = 0; d < a.tracks.length; d++) a.tracks[d].kind == "subtitles" && b++;
                this.options.toggleCaptionsButtonWhenOnlyOne && b == 1 ? a.captionsButton.on("click", function() {
                    a.setTrack(a.selectedTrack == null ? a.tracks[0].srclang : "none")
                }) : a.captionsButton.hover(function() {
                        f(this).find(".mejs-captions-selector").css("visibility", "visible")
                    },
                    function() {
                        f(this).find(".mejs-captions-selector").css("visibility", "hidden")
                    }).on("click", "input[type=radio]", function() {
                    lang = this.value;
                    a.setTrack(lang)
                });
                a.options.alwaysShowControls ? a.container.find(".mejs-captions-position").addClass("mejs-captions-position-hover") : a.container.bind("controlsshown", function() {
                    a.container.find(".mejs-captions-position").addClass("mejs-captions-position-hover")
                }).bind("controlshidden", function() {
                    e.paused || a.container.find(".mejs-captions-position").removeClass("mejs-captions-position-hover")
                });
                a.trackToLoad = -1;
                a.selectedTrack = null;
                a.isLoadingTrack = false;
                for (d = 0; d < a.tracks.length; d++) a.tracks[d].kind == "subtitles" && a.addTrackButton(a.tracks[d].srclang, a.tracks[d].label);
                a.loadNextTrack();
                e.addEventListener("timeupdate", function() {
                    a.displayCaptions()
                }, false);
                if (a.options.slidesSelector != "") {
                    a.slidesContainer = f(a.options.slidesSelector);
                    e.addEventListener("timeupdate", function() {
                        a.displaySlides()
                    }, false)
                }
                e.addEventListener("loadedmetadata", function() {
                    a.displayChapters()
                }, false);
                a.container.hover(function() {
                    if (a.hasChapters) {
                        a.chapters.css("visibility",
                            "visible");
                        a.chapters.fadeIn(200).height(a.chapters.find(".mejs-chapter").outerHeight())
                    }
                }, function() {
                    a.hasChapters && !e.paused && a.chapters.fadeOut(200, function() {
                        f(this).css("visibility", "hidden");
                        f(this).css("display", "block")
                    })
                });
                a.node.getAttribute("autoplay") !== null && a.chapters.css("visibility", "hidden")
            }
        },
        setTrack: function(a) {
            var b;
            if (a == "none") {
                this.selectedTrack = null;
                this.captionsButton.removeClass("mejs-captions-enabled")
            } else
                for (b = 0; b < this.tracks.length; b++)
                    if (this.tracks[b].srclang == a) {
                        this.selectedTrack ==
                            null && this.captionsButton.addClass("mejs-captions-enabled");
                        this.selectedTrack = this.tracks[b];
                        this.captions.attr("lang", this.selectedTrack.srclang);
                        this.displayCaptions();
                        break
                    }
        },
        loadNextTrack: function() {
            this.trackToLoad++;
            if (this.trackToLoad < this.tracks.length) {
                this.isLoadingTrack = true;
                this.loadTrack(this.trackToLoad)
            } else {
                this.isLoadingTrack = false;
                this.checkForTracks()
            }
        },
        loadTrack: function(a) {
            var b = this,
                c = b.tracks[a];
            f.ajax({
                url: c.src,
                dataType: "text",
                success: function(e) {
                    c.entries = typeof e == "string" &&
                        /<tt\s+xml/ig.exec(e) ? mejs.TrackFormatParser.dfxp.parse(e) : mejs.TrackFormatParser.webvvt.parse(e);
                    c.isLoaded = true;
                    b.enableTrackButton(c.srclang, c.label);
                    b.loadNextTrack();
                    c.kind == "chapters" && b.media.addEventListener("play", function() {
                        b.media.duration > 0 && b.displayChapters(c)
                    }, false);
                    c.kind == "slides" && b.setupSlides(c)
                },
                error: function() {
                    b.loadNextTrack()
                }
            })
        },
        enableTrackButton: function(a, b) {
            if (b === "") b = mejs.language.codes[a] || a;
            this.captionsButton.find("input[value=" + a + "]").prop("disabled", false).siblings("label").html(b);
            this.options.startLanguage == a && f("#" + this.id + "_captions_" + a).click();
            this.adjustLanguageBox()
        },
        addTrackButton: function(a, b) {
            if (b === "") b = mejs.language.codes[a] || a;
            this.captionsButton.find("ul").append(f('<li><input type="radio" name="' + this.id + '_captions" id="' + this.id + "_captions_" + a + '" value="' + a + '" disabled="disabled" /><label for="' + this.id + "_captions_" + a + '">' + b + " (loading)</label></li>"));
            this.adjustLanguageBox();
            this.container.find(".mejs-captions-translations option[value=" + a + "]").remove()
        },
        adjustLanguageBox: function() {
            this.captionsButton.find(".mejs-captions-selector").height(this.captionsButton.find(".mejs-captions-selector ul").outerHeight(true) + this.captionsButton.find(".mejs-captions-translations").outerHeight(true))
        },
        checkForTracks: function() {
            var a = false;
            if (this.options.hideCaptionsButtonWhenEmpty) {
                for (i = 0; i < this.tracks.length; i++)
                    if (this.tracks[i].kind == "subtitles") {
                        a = true;
                        break
                    }
                if (!a) {
                    this.captionsButton.hide();
                    this.setControlsSize()
                }
            }
        },
        displayCaptions: function() {
            if (typeof this.tracks !=
                "undefined") {
                var a, b = this.selectedTrack;
                if (b != null && b.isLoaded)
                    for (a = 0; a < b.entries.times.length; a++)
                        if (this.media.currentTime >= b.entries.times[a].start && this.media.currentTime <= b.entries.times[a].stop) {
                            this.captionsText.html(b.entries.text[a]);
                            this.captions.show().height(0);
                            return
                        }
                this.captions.hide()
            }
        },
        setupSlides: function(a) {
            this.slides = a;
            this.slides.entries.imgs = [this.slides.entries.text.length];
            this.showSlide(0)
        },
        showSlide: function(a) {
            if (!(typeof this.tracks == "undefined" || typeof this.slidesContainer ==
                    "undefined")) {
                var b = this,
                    c = b.slides.entries.text[a],
                    e = b.slides.entries.imgs[a];
                if (typeof e == "undefined" || typeof e.fadeIn == "undefined") b.slides.entries.imgs[a] = e = f('<img src="' + c + '">').on("load", function() {
                    e.appendTo(b.slidesContainer).hide().fadeIn().siblings(":visible").fadeOut()
                });
                else !e.is(":visible") && !e.is(":animated") && e.fadeIn().siblings(":visible").fadeOut()
            }
        },
        displaySlides: function() {
            if (typeof this.slides != "undefined") {
                var a = this.slides,
                    b;
                for (b = 0; b < a.entries.times.length; b++)
                    if (this.media.currentTime >=
                        a.entries.times[b].start && this.media.currentTime <= a.entries.times[b].stop) {
                        this.showSlide(b);
                        break
                    }
            }
        },
        displayChapters: function() {
            var a;
            for (a = 0; a < this.tracks.length; a++)
                if (this.tracks[a].kind == "chapters" && this.tracks[a].isLoaded) {
                    this.drawChapters(this.tracks[a]);
                    this.hasChapters = true;
                    break
                }
        },
        drawChapters: function(a) {
            var b = this,
                c, e, d = e = 0;
            b.chapters.empty();
            for (c = 0; c < a.entries.times.length; c++) {
                e = a.entries.times[c].stop - a.entries.times[c].start;
                e = Math.floor(e / b.media.duration * 100);
                if (e + d > 100 || c == a.entries.times.length -
                    1 && e + d < 100) e = 100 - d;
                b.chapters.append(f('<div class="mejs-chapter" rel="' + a.entries.times[c].start + '" style="left: ' + d.toString() + "%;width: " + e.toString() + '%;"><div class="mejs-chapter-block' + (c == a.entries.times.length - 1 ? " mejs-chapter-block-last" : "") + '"><span class="ch-title">' + a.entries.text[c] + '</span><span class="ch-time">' + mejs.Utility.secondsToTimeCode(a.entries.times[c].start) + "&ndash;" + mejs.Utility.secondsToTimeCode(a.entries.times[c].stop) + "</span></div></div>"));
                d += e
            }
            b.chapters.find("div.mejs-chapter").click(function() {
                b.media.setCurrentTime(parseFloat(f(this).attr("rel")));
                b.media.paused && b.media.play()
            });
            b.chapters.show()
        }
    });
    mejs.language = {
        codes: {
            af: "Afrikaans",
            sq: "Albanian",
            ar: "Arabic",
            be: "Belarusian",
            bg: "Bulgarian",
            ca: "Catalan",
            zh: "Chinese",
            "zh-cn": "Chinese Simplified",
            "zh-tw": "Chinese Traditional",
            hr: "Croatian",
            cs: "Czech",
            da: "Danish",
            nl: "Dutch",
            en: "English",
            et: "Estonian",
            tl: "Filipino",
            fi: "Finnish",
            fr: "French",
            gl: "Galician",
            de: "German",
            el: "Greek",
            ht: "Haitian Creole",
            iw: "Hebrew",
            hi: "Hindi",
            hu: "Hungarian",
            is: "Icelandic",
            id: "Indonesian",
            ga: "Irish",
            it: "Italian",
            ja: "Japanese",
            ko: "Korean",
            lv: "Latvian",
            lt: "Lithuanian",
            mk: "Macedonian",
            ms: "Malay",
            mt: "Maltese",
            no: "Norwegian",
            fa: "Persian",
            pl: "Polish",
            pt: "Portuguese",
            ro: "Romanian",
            ru: "Russian",
            sr: "Serbian",
            sk: "Slovak",
            sl: "Slovenian",
            es: "Spanish",
            sw: "Swahili",
            sv: "Swedish",
            tl: "Tagalog",
            th: "Thai",
            tr: "Turkish",
            uk: "Ukrainian",
            vi: "Vietnamese",
            cy: "Welsh",
            yi: "Yiddish"
        }
    };
    mejs.TrackFormatParser = {
        webvvt: {
            pattern_identifier: /^([a-zA-z]+-)?[0-9]+$/,
            pattern_timecode: /^([0-9]{2}:[0-9]{2}:[0-9]{2}([,.][0-9]{1,3})?) --\> ([0-9]{2}:[0-9]{2}:[0-9]{2}([,.][0-9]{3})?)(.*)$/,
            parse: function(a) {
                var b = 0;
                a = mejs.TrackFormatParser.split2(a, /\r?\n/);
                for (var c = {
                        text: [],
                        times: []
                    }, e, d; b < a.length; b++)
                    if (this.pattern_identifier.exec(a[b])) {
                        b++;
                        if ((e = this.pattern_timecode.exec(a[b])) && b < a.length) {
                            b++;
                            d = a[b];
                            for (b++; a[b] !== "" && b < a.length;) {
                                d = d + "\n" + a[b];
                                b++
                            }
                            d = f.trim(d).replace(/(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig, "<a href='$1' target='_blank'>$1</a>");
                            c.text.push(d);
                            c.times.push({
                                start: mejs.Utility.convertSMPTEtoSeconds(e[1]) == 0 ? 0.2 : mejs.Utility.convertSMPTEtoSeconds(e[1]),
                                stop: mejs.Utility.convertSMPTEtoSeconds(e[3]),
                                settings: e[5]
                            })
                        }
                    }
                return c
            }
        },
        dfxp: {
            parse: function(a) {
                a = f(a).filter("tt");
                var b = 0;
                b = a.children("div").eq(0);
                var c = b.find("p");
                b = a.find("#" + b.attr("style"));
                var e, d;
                a = {
                    text: [],
                    times: []
                };
                if (b.length) {
                    d = b.removeAttr("id").get(0).attributes;
                    if (d.length) {
                        e = {};
                        for (b = 0; b < d.length; b++) e[d[b].name.split(":")[1]] = d[b].value
                    }
                }
                for (b = 0; b < c.length; b++) {
                    var g;
                    d = {
                        start: null,
                        stop: null,
                        style: null
                    };
                    if (c.eq(b).attr("begin")) d.start = mejs.Utility.convertSMPTEtoSeconds(c.eq(b).attr("begin"));
                    if (!d.start && c.eq(b - 1).attr("end")) d.start = mejs.Utility.convertSMPTEtoSeconds(c.eq(b - 1).attr("end"));
                    if (c.eq(b).attr("end")) d.stop = mejs.Utility.convertSMPTEtoSeconds(c.eq(b).attr("end"));
                    if (!d.stop && c.eq(b + 1).attr("begin")) d.stop = mejs.Utility.convertSMPTEtoSeconds(c.eq(b + 1).attr("begin"));
                    if (e) {
                        g = "";
                        for (var k in e) g += k + ":" + e[k] + ";"
                    }
                    if (g) d.style = g;
                    if (d.start == 0) d.start = 0.2;
                    a.times.push(d);
                    d = f.trim(c.eq(b).html()).replace(/(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig,
                        "<a href='$1' target='_blank'>$1</a>");
                    a.text.push(d);
                    if (a.times.start == 0) a.times.start = 2
                }
                return a
            }
        },
        split2: function(a, b) {
            return a.split(b)
        }
    };
    if ("x\n\ny".split(/\n/gi).length != 3) mejs.TrackFormatParser.split2 = function(a, b) {
        var c = [],
            e = "",
            d;
        for (d = 0; d < a.length; d++) {
            e += a.substring(d, d + 1);
            if (b.test(e)) {
                c.push(e.replace(b, ""));
                e = ""
            }
        }
        c.push(e);
        return c
    }
})(mejs.$);
(function(f) {
    f.extend(mejs.MepDefaults, {
        contextMenuItems: [{
            render: function(a) {
                if (typeof a.enterFullScreen == "undefined") return null;
                return a.isFullScreen ? mejs.i18n.t("Turn off Fullscreen") : mejs.i18n.t("Go Fullscreen")
            },
            click: function(a) {
                a.isFullScreen ? a.exitFullScreen() : a.enterFullScreen()
            }
        }, {
            render: function(a) {
                return a.media.muted ? mejs.i18n.t("Unmute") : mejs.i18n.t("Mute")
            },
            click: function(a) {
                a.media.muted ? a.setMuted(false) : a.setMuted(true)
            }
        }, {
            isSeparator: true
        }, {
            render: function() {
                return mejs.i18n.t("Download Video")
            },
            click: function(a) {
                window.location.href = a.media.currentSrc
            }
        }]
    });
    f.extend(MediaElementPlayer.prototype, {
        buildcontextmenu: function(a) {
            a.contextMenu = f('<div class="mejs-contextmenu"></div>').appendTo(f("body")).hide();
            a.container.bind("contextmenu", function(b) {
                if (a.isContextMenuEnabled) {
                    b.preventDefault();
                    a.renderContextMenu(b.clientX - 1, b.clientY - 1);
                    return false
                }
            });
            a.container.bind("click", function() {
                a.contextMenu.hide()
            });
            a.contextMenu.bind("mouseleave", function() {
                a.startContextMenuTimer()
            })
        },
        cleancontextmenu: function(a) {
            a.contextMenu.remove()
        },
        isContextMenuEnabled: true,
        enableContextMenu: function() {
            this.isContextMenuEnabled = true
        },
        disableContextMenu: function() {
            this.isContextMenuEnabled = false
        },
        contextMenuTimeout: null,
        startContextMenuTimer: function() {
            var a = this;
            a.killContextMenuTimer();
            a.contextMenuTimer = setTimeout(function() {
                a.hideContextMenu();
                a.killContextMenuTimer()
            }, 750)
        },
        killContextMenuTimer: function() {
            var a = this.contextMenuTimer;
            if (a != null) {
                clearTimeout(a);
                delete a
            }
        },
        hideContextMenu: function() {
            this.contextMenu.hide()
        },
        renderContextMenu: function(a,
            b) {
            for (var c = this, e = "", d = c.options.contextMenuItems, g = 0, k = d.length; g < k; g++)
                if (d[g].isSeparator) e += '<div class="mejs-contextmenu-separator"></div>';
                else {
                    var j = d[g].render(c);
                    if (j != null) e += '<div class="mejs-contextmenu-item" data-itemindex="' + g + '" id="element-' + Math.random() * 1E6 + '">' + j + "</div>"
                }
            c.contextMenu.empty().append(f(e)).css({
                top: b,
                left: a
            }).show();
            c.contextMenu.find(".mejs-contextmenu-item").each(function() {
                var m = f(this),
                    q = parseInt(m.data("itemindex"), 10),
                    p = c.options.contextMenuItems[q];
                typeof p.show !=
                    "undefined" && p.show(m, c);
                m.click(function() {
                    typeof p.click != "undefined" && p.click(c);
                    c.contextMenu.hide()
                })
            });
            setTimeout(function() {
                c.killControlsTimer("rev3")
            }, 100)
        }
    })
})(mejs.$);
(function(f) {
    f.extend(mejs.MepDefaults, {
        postrollCloseText: mejs.i18n.t("Close")
    });
    f.extend(MediaElementPlayer.prototype, {
        buildpostroll: function(a, b, c) {
            var e = this.container.find('link[rel="postroll"]').attr("href");
            if (typeof e !== "undefined") {
                a.postroll = f('<div class="mejs-postroll-layer mejs-layer"><a class="mejs-postroll-close" onclick="$(this).parent().hide();return false;">' + this.options.postrollCloseText + '</a><div class="mejs-postroll-layer-content"></div></div>').prependTo(c).hide();
                this.media.addEventListener("ended",
                    function() {
                        f.ajax({
                            dataType: "html",
                            url: e,
                            success: function(d) {
                                c.find(".mejs-postroll-layer-content").html(d)
                            }
                        });
                        a.postroll.show()
                    }, false)
            }
        }
    })
})(mejs.$);

/*! modernizr 3.2.0 (Custom Build) | MIT *
 * http://modernizr.com/download/?-csstransitions-matchmedia-mediaqueries-domprefixes-prefixed-prefixes-setclasses-shiv-testallprops-testprop-teststyles !*/
! function(e, t, n) {
    function r(e, t) {
        return typeof e === t
    }

    function o() {
        var e, t, n, o, a, i, s;
        for (var l in C)
            if (C.hasOwnProperty(l)) {
                if (e = [], t = C[l], t.name && (e.push(t.name.toLowerCase()), t.options && t.options.aliases && t.options.aliases.length))
                    for (n = 0; n < t.options.aliases.length; n++) e.push(t.options.aliases[n].toLowerCase());
                for (o = r(t.fn, "function") ? t.fn() : t.fn, a = 0; a < e.length; a++) i = e[a], s = i.split("."), 1 === s.length ? Modernizr[s[0]] = o : (!Modernizr[s[0]] || Modernizr[s[0]] instanceof Boolean || (Modernizr[s[0]] = new Boolean(Modernizr[s[0]])), Modernizr[s[0]][s[1]] = o), y.push((o ? "" : "no-") + s.join("-"))
            }
    }

    function a(e) {
        var t = b.className,
            n = Modernizr._config.classPrefix || "";
        if (x && (t = t.baseVal), Modernizr._config.enableJSClass) {
            var r = new RegExp("(^|\\s)" + n + "no-js(\\s|$)");
            t = t.replace(r, "$1" + n + "js$2")
        }
        Modernizr._config.enableClasses && (t += " " + n + e.join(" " + n), x ? b.className.baseVal = t : b.className = t)
    }

    function i(e) {
        return e.replace(/([a-z])-([a-z])/g, function(e, t, n) {
            return t + n.toUpperCase()
        }).replace(/^-/, "")
    }

    function s(e, t) {
        return !!~("" + e).indexOf(t)
    }

    function l() {
        return "function" != typeof t.createElement ? t.createElement(arguments[0]) : x ? t.createElementNS.call(t, "http://www.w3.org/2000/svg", arguments[0]) : t.createElement.apply(t, arguments)
    }

    function u() {
        var e = t.body;
        return e || (e = l(x ? "svg" : "body"), e.fake = !0), e
    }

    function c(e, n, r, o) {
        var a, i, s, c, f = "modernizr",
            d = l("div"),
            p = u();
        if (parseInt(r, 10))
            for (; r--;) s = l("div"), s.id = o ? o[r] : f + (r + 1), d.appendChild(s);
        return a = l("style"), a.type = "text/css", a.id = "s" + f, (p.fake ? p : d).appendChild(a), p.appendChild(d), a.styleSheet ? a.styleSheet.cssText = e : a.appendChild(t.createTextNode(e)), d.id = f, p.fake && (p.style.background = "", p.style.overflow = "hidden", c = b.style.overflow, b.style.overflow = "hidden", b.appendChild(p)), i = n(d, e), p.fake ? (p.parentNode.removeChild(p), b.style.overflow = c, b.offsetHeight) : d.parentNode.removeChild(d), !!i
    }

    function f(e, t) {
        return function() {
            return e.apply(t, arguments)
        }
    }

    function d(e, t, n) {
        var o;
        for (var a in e)
            if (e[a] in t) return n === !1 ? e[a] : (o = t[e[a]], r(o, "function") ? f(o, n || t) : o);
        return !1
    }

    function p(e) {
        return e.replace(/([A-Z])/g, function(e, t) {
            return "-" + t.toLowerCase()
        }).replace(/^ms-/, "-ms-")
    }

    function m(t, r) {
        var o = t.length;
        if ("CSS" in e && "supports" in e.CSS) {
            for (; o--;)
                if (e.CSS.supports(p(t[o]), r)) return !0;
            return !1
        }
        if ("CSSSupportsRule" in e) {
            for (var a = []; o--;) a.push("(" + p(t[o]) + ":" + r + ")");
            return a = a.join(" or "), c("@supports (" + a + ") { #modernizr { position: absolute; } }", function(e) {
                return "absolute" == getComputedStyle(e, null).position
            })
        }
        return n
    }

    function h(e, t, o, a) {
        function u() {
            f && (delete k.style, delete k.modElem)
        }
        if (a = r(a, "undefined") ? !1 : a, !r(o, "undefined")) {
            var c = m(e, o);
            if (!r(c, "undefined")) return c
        }
        for (var f, d, p, h, v, g = ["modernizr", "tspan"]; !k.style;) f = !0, k.modElem = l(g.shift()), k.style = k.modElem.style;
        for (p = e.length, d = 0; p > d; d++)
            if (h = e[d], v = k.style[h], s(h, "-") && (h = i(h)), k.style[h] !== n) {
                if (a || r(o, "undefined")) return u(), "pfx" == t ? h : !0;
                try {
                    k.style[h] = o
                } catch (y) {}
                if (k.style[h] != v) return u(), "pfx" == t ? h : !0
            }
        return u(), !1
    }

    function v(e, t, n, o, a) {
        var i = e.charAt(0).toUpperCase() + e.slice(1),
            s = (e + " " + N.join(i + " ") + i).split(" ");
        return r(t, "string") || r(t, "undefined") ? h(s, t, o, a) : (s = (e + " " + w.join(i + " ") + i).split(" "), d(s, t, n))
    }

    function g(e, t, r) {
        return v(e, n, n, t, r)
    }
    var y = [],
        C = [],
        S = {
            _version: "3.2.0",
            _config: {
                classPrefix: "",
                enableClasses: !0,
                enableJSClass: !0,
                usePrefixes: !0
            },
            _q: [],
            on: function(e, t) {
                var n = this;
                setTimeout(function() {
                    t(n[e])
                }, 0)
            },
            addTest: function(e, t, n) {
                C.push({
                    name: e,
                    fn: t,
                    options: n
                })
            },
            addAsyncTest: function(e) {
                C.push({
                    name: null,
                    fn: e
                })
            }
        },
        Modernizr = function() {};
    Modernizr.prototype = S, Modernizr = new Modernizr;
    var E = S._config.usePrefixes ? " -webkit- -moz- -o- -ms- ".split(" ") : [];
    S._prefixes = E;
    var b = t.documentElement,
        x = "svg" === b.nodeName.toLowerCase();
    x || ! function(e, t) {
        function n(e, t) {
            var n = e.createElement("p"),
                r = e.getElementsByTagName("head")[0] || e.documentElement;
            return n.innerHTML = "x<style>" + t + "</style>", r.insertBefore(n.lastChild, r.firstChild)
        }

        function r() {
            var e = C.elements;
            return "string" == typeof e ? e.split(" ") : e
        }

        function o(e, t) {
            var n = C.elements;
            "string" != typeof n && (n = n.join(" ")), "string" != typeof e && (e = e.join(" ")), C.elements = n + " " + e, u(t)
        }

        function a(e) {
            var t = y[e[v]];
            return t || (t = {}, g++, e[v] = g, y[g] = t), t
        }

        function i(e, n, r) {
            if (n || (n = t), f) return n.createElement(e);
            r || (r = a(n));
            var o;
            return o = r.cache[e] ? r.cache[e].cloneNode() : h.test(e) ? (r.cache[e] = r.createElem(e)).cloneNode() : r.createElem(e), !o.canHaveChildren || m.test(e) || o.tagUrn ? o : r.frag.appendChild(o)
        }

        function s(e, n) {
            if (e || (e = t), f) return e.createDocumentFragment();
            n = n || a(e);
            for (var o = n.frag.cloneNode(), i = 0, s = r(), l = s.length; l > i; i++) o.createElement(s[i]);
            return o
        }

        function l(e, t) {
            t.cache || (t.cache = {}, t.createElem = e.createElement, t.createFrag = e.createDocumentFragment, t.frag = t.createFrag()), e.createElement = function(n) {
                return C.shivMethods ? i(n, e, t) : t.createElem(n)
            }, e.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + r().join().replace(/[\w\-:]+/g, function(e) {
                return t.createElem(e), t.frag.createElement(e), 'c("' + e + '")'
            }) + ");return n}")(C, t.frag)
        }

        function u(e) {
            e || (e = t);
            var r = a(e);
            return !C.shivCSS || c || r.hasCSS || (r.hasCSS = !!n(e, "article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")), f || l(e, r), e
        }
        var c, f, d = "3.7.3",
            p = e.html5 || {},
            m = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
            h = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
            v = "_html5shiv",
            g = 0,
            y = {};
        ! function() {
            try {
                var e = t.createElement("a");
                e.innerHTML = "<xyz></xyz>", c = "hidden" in e, f = 1 == e.childNodes.length || function() {
                    t.createElement("a");
                    var e = t.createDocumentFragment();
                    return "undefined" == typeof e.cloneNode || "undefined" == typeof e.createDocumentFragment || "undefined" == typeof e.createElement
                }()
            } catch (n) {
                c = !0, f = !0
            }
        }();
        var C = {
            elements: p.elements || "abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output picture progress section summary template time video",
            version: d,
            shivCSS: p.shivCSS !== !1,
            supportsUnknownElements: f,
            shivMethods: p.shivMethods !== !1,
            type: "default",
            shivDocument: u,
            createElement: i,
            createDocumentFragment: s,
            addElements: o
        };
        e.html5 = C, u(t), "object" == typeof module && module.exports && (module.exports = C)
    }("undefined" != typeof e ? e : this, t);
    var _ = "Moz O ms Webkit",
        w = S._config.usePrefixes ? _.toLowerCase().split(" ") : [];
    S._domPrefixes = w;
    var N = S._config.usePrefixes ? _.split(" ") : [];
    S._cssomPrefixes = N;
    var z = function(t) {
        var r, o = E.length,
            a = e.CSSRule;
        if ("undefined" == typeof a) return n;
        if (!t) return !1;
        if (t = t.replace(/^@/, ""), r = t.replace(/-/g, "_").toUpperCase() + "_RULE", r in a) return "@" + t;
        for (var i = 0; o > i; i++) {
            var s = E[i],
                l = s.toUpperCase() + "_" + r;
            if (l in a) return "@-" + s.toLowerCase() + "-" + t
        }
        return !1
    };
    S.atRule = z;
    var T = (S.testStyles = c, function() {
        var t = e.matchMedia || e.msMatchMedia;
        return t ? function(e) {
            var n = t(e);
            return n && n.matches || !1
        } : function(t) {
            var n = !1;
            return c("@media " + t + " { #modernizr { position: absolute; } }", function(t) {
                n = "absolute" == (e.getComputedStyle ? e.getComputedStyle(t, null) : t.currentStyle).position
            }), n
        }
    }());
    S.mq = T, Modernizr.addTest("mediaqueries", T("only all"));
    var j = {
        elem: l("modernizr")
    };
    Modernizr._q.push(function() {
        delete j.elem
    });
    var k = {
        style: j.elem.style
    };
    Modernizr._q.unshift(function() {
        delete k.style
    });
    S.testProp = function(e, t, r) {
        return h([e], n, t, r)
    };
    S.testAllProps = v;
    var M = S.prefixed = function(e, t, n) {
        return 0 === e.indexOf("@") ? z(e) : (-1 != e.indexOf("-") && (e = i(e)), t ? v(e, t, n) : v(e, "pfx"))
    };
    Modernizr.addTest("matchmedia", !!M("matchMedia", e)), S.testAllProps = g, Modernizr.addTest("csstransitions", g("transition", "all", !0)), o(), a(y), delete S.addTest, delete S.addAsyncTest;
    for (var P = 0; P < Modernizr._q.length; P++) Modernizr._q[P]();
    e.Modernizr = Modernizr
}(window, document);

/* Owl carousel.min
 */
! function(a, b, c, d) {
    function e(b, c) {
        this.settings = null, this.options = a.extend({}, e.Defaults, c), this.$element = a(b), this.drag = a.extend({}, m), this.state = a.extend({}, n), this.e = a.extend({}, o), this._plugins = {}, this._supress = {}, this._current = null, this._speed = null, this._coordinates = [], this._breakpoint = null, this._width = null, this._items = [], this._clones = [], this._mergers = [], this._invalidated = {}, this._pipe = [], a.each(e.Plugins, a.proxy(function(a, b) {
            this._plugins[a[0].toLowerCase() + a.slice(1)] = new b(this)
        }, this)), a.each(e.Pipe, a.proxy(function(b, c) {
            this._pipe.push({
                filter: c.filter,
                run: a.proxy(c.run, this)
            })
        }, this)), this.setup(), this.initialize()
    }

    function f(a) {
        if (a.touches !== d) return {
            x: a.touches[0].pageX,
            y: a.touches[0].pageY
        };
        if (a.touches === d) {
            if (a.pageX !== d) return {
                x: a.pageX,
                y: a.pageY
            };
            if (a.pageX === d) return {
                x: a.clientX,
                y: a.clientY
            }
        }
    }

    function g(a) {
        var b, d, e = c.createElement("div"),
            f = a;
        for (b in f)
            if (d = f[b], "undefined" != typeof e.style[d]) return e = null, [d, b];
        return [!1]
    }

    function h() {
        return g(["transition", "WebkitTransition", "MozTransition", "OTransition"])[1]
    }

    function i() {
        return g(["transform", "WebkitTransform", "MozTransform", "OTransform", "msTransform"])[0]
    }

    function j() {
        return g(["perspective", "webkitPerspective", "MozPerspective", "OPerspective", "MsPerspective"])[0]
    }

    function k() {
        return "ontouchstart" in b || !!navigator.msMaxTouchPoints
    }

    function l() {
        return b.navigator.msPointerEnabled
    }
    var m, n, o;
    m = {
        start: 0,
        startX: 0,
        startY: 0,
        current: 0,
        currentX: 0,
        currentY: 0,
        offsetX: 0,
        offsetY: 0,
        distance: null,
        startTime: 0,
        endTime: 0,
        updatedX: 0,
        targetEl: null
    }, n = {
        isTouch: !1,
        isScrolling: !1,
        isSwiping: !1,
        direction: !1,
        inMotion: !1
    }, o = {
        _onDragStart: null,
        _onDragMove: null,
        _onDragEnd: null,
        _transitionEnd: null,
        _resizer: null,
        _responsiveCall: null,
        _goToLoop: null,
        _checkVisibile: null
    }, e.Defaults = {
        items: 3,
        loop: !1,
        center: !1,
        mouseDrag: !0,
        touchDrag: !0,
        pullDrag: !0,
        freeDrag: !1,
        margin: 0,
        stagePadding: 0,
        merge: !1,
        mergeFit: !0,
        autoWidth: !1,
        startPosition: 0,
        rtl: !1,
        smartSpeed: 250,
        fluidSpeed: !1,
        dragEndSpeed: !1,
        responsive: {},
        responsiveRefreshRate: 200,
        responsiveBaseElement: b,
        responsiveClass: !1,
        fallbackEasing: "swing",
        info: !1,
        nestedItemSelector: !1,
        itemElement: "div",
        stageElement: "div",
        themeClass: "owl-theme",
        baseClass: "owl-carousel",
        itemClass: "owl-item",
        centerClass: "center",
        activeClass: "active"
    }, e.Width = {
        Default: "default",
        Inner: "inner",
        Outer: "outer"
    }, e.Plugins = {}, e.Pipe = [{
        filter: ["width", "items", "settings"],
        run: function(a) {
            a.current = this._items && this._items[this.relative(this._current)]
        }
    }, {
        filter: ["items", "settings"],
        run: function() {
            var a = this._clones,
                b = this.$stage.children(".cloned");
            (b.length !== a.length || !this.settings.loop && a.length > 0) && (this.$stage.children(".cloned").remove(), this._clones = [])
        }
    }, {
        filter: ["items", "settings"],
        run: function() {
            var a, b, c = this._clones,
                d = this._items,
                e = this.settings.loop ? c.length - Math.max(2 * this.settings.items, 4) : 0;
            for (a = 0, b = Math.abs(e / 2); b > a; a++) e > 0 ? (this.$stage.children().eq(d.length + c.length - 1).remove(), c.pop(), this.$stage.children().eq(0).remove(), c.pop()) : (c.push(c.length / 2), this.$stage.append(d[c[c.length - 1]].clone().addClass("cloned")), c.push(d.length - 1 - (c.length - 1) / 2), this.$stage.prepend(d[c[c.length - 1]].clone().addClass("cloned")))
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function() {
            var a, b, c, d = this.settings.rtl ? 1 : -1,
                e = (this.width() / this.settings.items).toFixed(3),
                f = 0;
            for (this._coordinates = [], b = 0, c = this._clones.length + this._items.length; c > b; b++) a = this._mergers[this.relative(b)], a = this.settings.mergeFit && Math.min(a, this.settings.items) || a, f += (this.settings.autoWidth ? this._items[this.relative(b)].width() + this.settings.margin : e * a) * d, this._coordinates.push(f)
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function() {
            var b, c, d = (this.width() / this.settings.items).toFixed(3),
                e = {
                    width: Math.abs(this._coordinates[this._coordinates.length - 1]) + 2 * this.settings.stagePadding,
                    "padding-left": this.settings.stagePadding || "",
                    "padding-right": this.settings.stagePadding || ""
                };
            if (this.$stage.css(e), e = {
                    width: this.settings.autoWidth ? "auto" : d - this.settings.margin
                }, e[this.settings.rtl ? "margin-left" : "margin-right"] = this.settings.margin, !this.settings.autoWidth && a.grep(this._mergers, function(a) {
                    return a > 1
                }).length > 0)
                for (b = 0, c = this._coordinates.length; c > b; b++) e.width = Math.abs(this._coordinates[b]) - Math.abs(this._coordinates[b - 1] || 0) - this.settings.margin, this.$stage.children().eq(b).css(e);
            else this.$stage.children().css(e)
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function(a) {
            a.current && this.reset(this.$stage.children().index(a.current))
        }
    }, {
        filter: ["position"],
        run: function() {
            this.animate(this.coordinates(this._current))
        }
    }, {
        filter: ["width", "position", "items", "settings"],
        run: function() {
            var a, b, c, d, e = this.settings.rtl ? 1 : -1,
                f = 2 * this.settings.stagePadding,
                g = this.coordinates(this.current()) + f,
                h = g + this.width() * e,
                i = [];
            for (c = 0, d = this._coordinates.length; d > c; c++) a = this._coordinates[c - 1] || 0, b = Math.abs(this._coordinates[c]) + f * e, (this.op(a, "<=", g) && this.op(a, ">", h) || this.op(b, "<", g) && this.op(b, ">", h)) && i.push(c);
            this.$stage.children("." + this.settings.activeClass).removeClass(this.settings.activeClass), this.$stage.children(":eq(" + i.join("), :eq(") + ")").addClass(this.settings.activeClass), this.settings.center && (this.$stage.children("." + this.settings.centerClass).removeClass(this.settings.centerClass), this.$stage.children().eq(this.current()).addClass(this.settings.centerClass))
        }
    }], e.prototype.initialize = function() {
        if (this.trigger("initialize"), this.$element.addClass(this.settings.baseClass).addClass(this.settings.themeClass).toggleClass("owl-rtl", this.settings.rtl), this.browserSupport(), this.settings.autoWidth && this.state.imagesLoaded !== !0) {
            var b, c, e;
            if (b = this.$element.find("img"), c = this.settings.nestedItemSelector ? "." + this.settings.nestedItemSelector : d, e = this.$element.children(c).width(), b.length && 0 >= e) return this.preloadAutoWidthImages(b), !1
        }
        this.$element.addClass("owl-loading"), this.$stage = a("<" + this.settings.stageElement + ' class="owl-stage"/>').wrap('<div class="owl-stage-outer">'), this.$element.append(this.$stage.parent()), this.replace(this.$element.children().not(this.$stage.parent())), this._width = this.$element.width(), this.refresh(), this.$element.removeClass("owl-loading").addClass("owl-loaded"), this.eventsCall(), this.internalEvents(), this.addTriggerableEvents(), this.trigger("initialized")
    }, e.prototype.setup = function() {
        var b = this.viewport(),
            c = this.options.responsive,
            d = -1,
            e = null;
        c ? (a.each(c, function(a) {
            b >= a && a > d && (d = Number(a))
        }), e = a.extend({}, this.options, c[d]), delete e.responsive, e.responsiveClass && this.$element.attr("class", function(a, b) {
            return b.replace(/\b owl-responsive-\S+/g, "")
        }).addClass("owl-responsive-" + d)) : e = a.extend({}, this.options), (null === this.settings || this._breakpoint !== d) && (this.trigger("change", {
            property: {
                name: "settings",
                value: e
            }
        }), this._breakpoint = d, this.settings = e, this.invalidate("settings"), this.trigger("changed", {
            property: {
                name: "settings",
                value: this.settings
            }
        }))
    }, e.prototype.optionsLogic = function() {
        this.$element.toggleClass("owl-center", this.settings.center), this.settings.loop && this._items.length < this.settings.items && (this.settings.loop = !1), this.settings.autoWidth && (this.settings.stagePadding = !1, this.settings.merge = !1)
    }, e.prototype.prepare = function(b) {
        var c = this.trigger("prepare", {
            content: b
        });
        return c.data || (c.data = a("<" + this.settings.itemElement + "/>").addClass(this.settings.itemClass).append(b)), this.trigger("prepared", {
            content: c.data
        }), c.data
    }, e.prototype.update = function() {
        for (var b = 0, c = this._pipe.length, d = a.proxy(function(a) {
                return this[a]
            }, this._invalidated), e = {}; c > b;)(this._invalidated.all || a.grep(this._pipe[b].filter, d).length > 0) && this._pipe[b].run(e), b++;
        this._invalidated = {}
    }, e.prototype.width = function(a) {
        switch (a = a || e.Width.Default) {
            case e.Width.Inner:
            case e.Width.Outer:
                return this._width;
            default:
                return this._width - 2 * this.settings.stagePadding + this.settings.margin
        }
    }, e.prototype.refresh = function() {
        if (0 === this._items.length) return !1;
        (new Date).getTime();
        this.trigger("refresh"), this.setup(), this.optionsLogic(), this.$stage.addClass("owl-refresh"), this.update(), this.$stage.removeClass("owl-refresh"), this.state.orientation = b.orientation, this.watchVisibility(), this.trigger("refreshed")
    }, e.prototype.eventsCall = function() {
        this.e._onDragStart = a.proxy(function(a) {
            this.onDragStart(a)
        }, this), this.e._onDragMove = a.proxy(function(a) {
            this.onDragMove(a)
        }, this), this.e._onDragEnd = a.proxy(function(a) {
            this.onDragEnd(a)
        }, this), this.e._onResize = a.proxy(function(a) {
            this.onResize(a)
        }, this), this.e._transitionEnd = a.proxy(function(a) {
            this.transitionEnd(a)
        }, this), this.e._preventClick = a.proxy(function(a) {
            this.preventClick(a)
        }, this)
    }, e.prototype.onThrottledResize = function() {
        b.clearTimeout(this.resizeTimer), this.resizeTimer = b.setTimeout(this.e._onResize, this.settings.responsiveRefreshRate)
    }, e.prototype.onResize = function() {
        return this._items.length ? this._width === this.$element.width() ? !1 : this.trigger("resize").isDefaultPrevented() ? !1 : (this._width = this.$element.width(), this.invalidate("width"), this.refresh(), void this.trigger("resized")) : !1
    }, e.prototype.eventsRouter = function(a) {
        var b = a.type;
        "mousedown" === b || "touchstart" === b ? this.onDragStart(a) : "mousemove" === b || "touchmove" === b ? this.onDragMove(a) : "mouseup" === b || "touchend" === b ? this.onDragEnd(a) : "touchcancel" === b && this.onDragEnd(a)
    }, e.prototype.internalEvents = function() {
        var c = (k(), l());
        this.settings.mouseDrag ? (this.$stage.on("mousedown", a.proxy(function(a) {
            this.eventsRouter(a)
        }, this)), this.$stage.on("dragstart", function() {
            return !1
        }), this.$stage.get(0).onselectstart = function() {
            return !1
        }) : this.$element.addClass("owl-text-select-on"), this.settings.touchDrag && !c && this.$stage.on("touchstart touchcancel", a.proxy(function(a) {
            this.eventsRouter(a)
        }, this)), this.transitionEndVendor && this.on(this.$stage.get(0), this.transitionEndVendor, this.e._transitionEnd, !1), this.settings.responsive !== !1 && this.on(b, "resize", a.proxy(this.onThrottledResize, this))
    }, e.prototype.onDragStart = function(d) {
        var e, g, h, i;
        if (e = d.originalEvent || d || b.event, 3 === e.which || this.state.isTouch) return !1;
        if ("mousedown" === e.type && this.$stage.addClass("owl-grab"), this.trigger("drag"), this.drag.startTime = (new Date).getTime(), this.speed(0), this.state.isTouch = !0, this.state.isScrolling = !1, this.state.isSwiping = !1, this.drag.distance = 0, g = f(e).x, h = f(e).y, this.drag.offsetX = this.$stage.position().left, this.drag.offsetY = this.$stage.position().top, this.settings.rtl && (this.drag.offsetX = this.$stage.position().left + this.$stage.width() - this.width() + this.settings.margin), this.state.inMotion && this.support3d) i = this.getTransformProperty(), this.drag.offsetX = i, this.animate(i), this.state.inMotion = !0;
        else if (this.state.inMotion && !this.support3d) return this.state.inMotion = !1, !1;
        this.drag.startX = g - this.drag.offsetX, this.drag.startY = h - this.drag.offsetY, this.drag.start = g - this.drag.startX, this.drag.targetEl = e.target || e.srcElement, this.drag.updatedX = this.drag.start, ("IMG" === this.drag.targetEl.tagName || "A" === this.drag.targetEl.tagName) && (this.drag.targetEl.draggable = !1), a(c).on("mousemove.owl.dragEvents mouseup.owl.dragEvents touchmove.owl.dragEvents touchend.owl.dragEvents", a.proxy(function(a) {
            this.eventsRouter(a)
        }, this))
    }, e.prototype.onDragMove = function(a) {
        var c, e, g, h, i, j;
        this.state.isTouch && (this.state.isScrolling || (c = a.originalEvent || a || b.event, e = f(c).x, g = f(c).y, this.drag.currentX = e - this.drag.startX, this.drag.currentY = g - this.drag.startY, this.drag.distance = this.drag.currentX - this.drag.offsetX, this.drag.distance < 0 ? this.state.direction = this.settings.rtl ? "right" : "left" : this.drag.distance > 0 && (this.state.direction = this.settings.rtl ? "left" : "right"), this.settings.loop ? this.op(this.drag.currentX, ">", this.coordinates(this.minimum())) && "right" === this.state.direction ? this.drag.currentX -= (this.settings.center && this.coordinates(0)) - this.coordinates(this._items.length) : this.op(this.drag.currentX, "<", this.coordinates(this.maximum())) && "left" === this.state.direction && (this.drag.currentX += (this.settings.center && this.coordinates(0)) - this.coordinates(this._items.length)) : (h = this.coordinates(this.settings.rtl ? this.maximum() : this.minimum()), i = this.coordinates(this.settings.rtl ? this.minimum() : this.maximum()), j = this.settings.pullDrag ? this.drag.distance / 5 : 0, this.drag.currentX = Math.max(Math.min(this.drag.currentX, h + j), i + j)), (this.drag.distance > 8 || this.drag.distance < -8) && (c.preventDefault !== d ? c.preventDefault() : c.returnValue = !1, this.state.isSwiping = !0), this.drag.updatedX = this.drag.currentX, (this.drag.currentY > 16 || this.drag.currentY < -16) && this.state.isSwiping === !1 && (this.state.isScrolling = !0, this.drag.updatedX = this.drag.start), this.animate(this.drag.updatedX)))
    }, e.prototype.onDragEnd = function(b) {
        var d, e, f;
        if (this.state.isTouch) {
            if ("mouseup" === b.type && this.$stage.removeClass("owl-grab"), this.trigger("dragged"), this.drag.targetEl.removeAttribute("draggable"), this.state.isTouch = !1, this.state.isScrolling = !1, this.state.isSwiping = !1, 0 === this.drag.distance && this.state.inMotion !== !0) return this.state.inMotion = !1, !1;
            this.drag.endTime = (new Date).getTime(), d = this.drag.endTime - this.drag.startTime, e = Math.abs(this.drag.distance), (e > 3 || d > 300) && this.removeClick(this.drag.targetEl), f = this.closest(this.drag.updatedX), this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed), this.current(f), this.invalidate("position"), this.update(), this.settings.pullDrag || this.drag.updatedX !== this.coordinates(f) || this.transitionEnd(), this.drag.distance = 0, a(c).off(".owl.dragEvents")
        }
    }, e.prototype.removeClick = function(c) {
        this.drag.targetEl = c, a(c).on("click.preventClick", this.e._preventClick), b.setTimeout(function() {
            a(c).off("click.preventClick")
        }, 300)
    }, e.prototype.preventClick = function(b) {
        b.preventDefault ? b.preventDefault() : b.returnValue = !1, b.stopPropagation && b.stopPropagation(), a(b.target).off("click.preventClick")
    }, e.prototype.getTransformProperty = function() {
        var a, c;
        return a = b.getComputedStyle(this.$stage.get(0), null).getPropertyValue(this.vendorName + "transform"), a = a.replace(/matrix(3d)?\(|\)/g, "").split(","), c = 16 === a.length, c !== !0 ? a[4] : a[12]
    }, e.prototype.closest = function(b) {
        var c = -1,
            d = 30,
            e = this.width(),
            f = this.coordinates();
        return this.settings.freeDrag || a.each(f, a.proxy(function(a, g) {
            return b > g - d && g + d > b ? c = a : this.op(b, "<", g) && this.op(b, ">", f[a + 1] || g - e) && (c = "left" === this.state.direction ? a + 1 : a), -1 === c
        }, this)), this.settings.loop || (this.op(b, ">", f[this.minimum()]) ? c = b = this.minimum() : this.op(b, "<", f[this.maximum()]) && (c = b = this.maximum())), c
    }, e.prototype.animate = function(b) {
        this.trigger("translate"), this.state.inMotion = this.speed() > 0, this.support3d ? this.$stage.css({
            transform: "translate3d(" + b + "px,0px, 0px)",
            transition: this.speed() / 1e3 + "s"
        }) : this.state.isTouch ? this.$stage.css({
            left: b + "px"
        }) : this.$stage.animate({
            left: b
        }, this.speed() / 1e3, this.settings.fallbackEasing, a.proxy(function() {
            this.state.inMotion && this.transitionEnd()
        }, this))
    }, e.prototype.current = function(a) {
        if (a === d) return this._current;
        if (0 === this._items.length) return d;
        if (a = this.normalize(a), this._current !== a) {
            var b = this.trigger("change", {
                property: {
                    name: "position",
                    value: a
                }
            });
            b.data !== d && (a = this.normalize(b.data)), this._current = a, this.invalidate("position"), this.trigger("changed", {
                property: {
                    name: "position",
                    value: this._current
                }
            })
        }
        return this._current
    }, e.prototype.invalidate = function(a) {
        this._invalidated[a] = !0
    }, e.prototype.reset = function(a) {
        a = this.normalize(a), a !== d && (this._speed = 0, this._current = a, this.suppress(["translate", "translated"]), this.animate(this.coordinates(a)), this.release(["translate", "translated"]))
    }, e.prototype.normalize = function(b, c) {
        var e = c ? this._items.length : this._items.length + this._clones.length;
        return !a.isNumeric(b) || 1 > e ? d : b = this._clones.length ? (b % e + e) % e : Math.max(this.minimum(c), Math.min(this.maximum(c), b))
    }, e.prototype.relative = function(a) {
        return a = this.normalize(a), a -= this._clones.length / 2, this.normalize(a, !0)
    }, e.prototype.maximum = function(a) {
        var b, c, d, e = 0,
            f = this.settings;
        if (a) return this._items.length - 1;
        if (!f.loop && f.center) b = this._items.length - 1;
        else if (f.loop || f.center)
            if (f.loop || f.center) b = this._items.length + f.items;
            else {
                if (!f.autoWidth && !f.merge) throw "Can not detect maximum absolute position.";
                for (revert = f.rtl ? 1 : -1, c = this.$stage.width() - this.$element.width();
                    (d = this.coordinates(e)) && !(d * revert >= c);) b = ++e
            } else b = this._items.length - f.items;
        return b
    }, e.prototype.minimum = function(a) {
        return a ? 0 : this._clones.length / 2
    }, e.prototype.items = function(a) {
        return a === d ? this._items.slice() : (a = this.normalize(a, !0), this._items[a])
    }, e.prototype.mergers = function(a) {
        return a === d ? this._mergers.slice() : (a = this.normalize(a, !0), this._mergers[a])
    }, e.prototype.clones = function(b) {
        var c = this._clones.length / 2,
            e = c + this._items.length,
            f = function(a) {
                return a % 2 === 0 ? e + a / 2 : c - (a + 1) / 2
            };
        return b === d ? a.map(this._clones, function(a, b) {
            return f(b)
        }) : a.map(this._clones, function(a, c) {
            return a === b ? f(c) : null
        })
    }, e.prototype.speed = function(a) {
        return a !== d && (this._speed = a), this._speed
    }, e.prototype.coordinates = function(b) {
        var c = null;
        return b === d ? a.map(this._coordinates, a.proxy(function(a, b) {
            return this.coordinates(b)
        }, this)) : (this.settings.center ? (c = this._coordinates[b], c += (this.width() - c + (this._coordinates[b - 1] || 0)) / 2 * (this.settings.rtl ? -1 : 1)) : c = this._coordinates[b - 1] || 0, c)
    }, e.prototype.duration = function(a, b, c) {
        return Math.min(Math.max(Math.abs(b - a), 1), 6) * Math.abs(c || this.settings.smartSpeed)
    }, e.prototype.to = function(c, d) {
        if (this.settings.loop) {
            var e = c - this.relative(this.current()),
                f = this.current(),
                g = this.current(),
                h = this.current() + e,
                i = 0 > g - h ? !0 : !1,
                j = this._clones.length + this._items.length;
            h < this.settings.items && i === !1 ? (f = g + this._items.length, this.reset(f)) : h >= j - this.settings.items && i === !0 && (f = g - this._items.length, this.reset(f)), b.clearTimeout(this.e._goToLoop), this.e._goToLoop = b.setTimeout(a.proxy(function() {
                this.speed(this.duration(this.current(), f + e, d)), this.current(f + e), this.update()
            }, this), 30)
        } else this.speed(this.duration(this.current(), c, d)), this.current(c), this.update()
    }, e.prototype.next = function(a) {
        a = a || !1, this.to(this.relative(this.current()) + 1, a)
    }, e.prototype.prev = function(a) {
        a = a || !1, this.to(this.relative(this.current()) - 1, a)
    }, e.prototype.transitionEnd = function(a) {
        return a !== d && (a.stopPropagation(), (a.target || a.srcElement || a.originalTarget) !== this.$stage.get(0)) ? !1 : (this.state.inMotion = !1, void this.trigger("translated"))
    }, e.prototype.viewport = function() {
        var d;
        if (this.options.responsiveBaseElement !== b) d = a(this.options.responsiveBaseElement).width();
        else if (b.innerWidth) d = b.innerWidth;
        else {
            if (!c.documentElement || !c.documentElement.clientWidth) throw "Can not detect viewport width.";
            d = c.documentElement.clientWidth
        }
        return d
    }, e.prototype.replace = function(b) {
        this.$stage.empty(), this._items = [], b && (b = b instanceof jQuery ? b : a(b)), this.settings.nestedItemSelector && (b = b.find("." + this.settings.nestedItemSelector)), b.filter(function() {
            return 1 === this.nodeType
        }).each(a.proxy(function(a, b) {
            b = this.prepare(b), this.$stage.append(b), this._items.push(b), this._mergers.push(1 * b.find("[data-merge]").andSelf("[data-merge]").attr("data-merge") || 1)
        }, this)), this.reset(a.isNumeric(this.settings.startPosition) ? this.settings.startPosition : 0), this.invalidate("items")
    }, e.prototype.add = function(a, b) {
        b = b === d ? this._items.length : this.normalize(b, !0), this.trigger("add", {
            content: a,
            position: b
        }), 0 === this._items.length || b === this._items.length ? (this.$stage.append(a), this._items.push(a), this._mergers.push(1 * a.find("[data-merge]").andSelf("[data-merge]").attr("data-merge") || 1)) : (this._items[b].before(a), this._items.splice(b, 0, a), this._mergers.splice(b, 0, 1 * a.find("[data-merge]").andSelf("[data-merge]").attr("data-merge") || 1)), this.invalidate("items"), this.trigger("added", {
            content: a,
            position: b
        })
    }, e.prototype.remove = function(a) {
        a = this.normalize(a, !0), a !== d && (this.trigger("remove", {
            content: this._items[a],
            position: a
        }), this._items[a].remove(), this._items.splice(a, 1), this._mergers.splice(a, 1), this.invalidate("items"), this.trigger("removed", {
            content: null,
            position: a
        }))
    }, e.prototype.addTriggerableEvents = function() {
        var b = a.proxy(function(b, c) {
            return a.proxy(function(a) {
                a.relatedTarget !== this && (this.suppress([c]), b.apply(this, [].slice.call(arguments, 1)), this.release([c]))
            }, this)
        }, this);
        a.each({
            next: this.next,
            prev: this.prev,
            to: this.to,
            destroy: this.destroy,
            refresh: this.refresh,
            replace: this.replace,
            add: this.add,
            remove: this.remove
        }, a.proxy(function(a, c) {
            this.$element.on(a + ".owl.carousel", b(c, a + ".owl.carousel"))
        }, this))
    }, e.prototype.watchVisibility = function() {
        function c(a) {
            return a.offsetWidth > 0 && a.offsetHeight > 0
        }

        function d() {
            c(this.$element.get(0)) && (this.$element.removeClass("owl-hidden"), this.refresh(), b.clearInterval(this.e._checkVisibile))
        }
        c(this.$element.get(0)) || (this.$element.addClass("owl-hidden"), b.clearInterval(this.e._checkVisibile), this.e._checkVisibile = b.setInterval(a.proxy(d, this), 500))
    }, e.prototype.preloadAutoWidthImages = function(b) {
        var c, d, e, f;
        c = 0, d = this, b.each(function(g, h) {
            e = a(h), f = new Image, f.onload = function() {
                c++, e.attr("src", f.src), e.css("opacity", 1), c >= b.length && (d.state.imagesLoaded = !0, d.initialize())
            }, f.src = e.attr("src") || e.attr("data-src") || e.attr("data-src-retina")
        })
    }, e.prototype.destroy = function() {
        this.$element.hasClass(this.settings.themeClass) && this.$element.removeClass(this.settings.themeClass), this.settings.responsive !== !1 && a(b).off("resize.owl.carousel"), this.transitionEndVendor && this.off(this.$stage.get(0), this.transitionEndVendor, this.e._transitionEnd);
        for (var d in this._plugins) this._plugins[d].destroy();
        (this.settings.mouseDrag || this.settings.touchDrag) && (this.$stage.off("mousedown touchstart touchcancel"), a(c).off(".owl.dragEvents"), this.$stage.get(0).onselectstart = function() {}, this.$stage.off("dragstart", function() {
            return !1
        })), this.$element.off(".owl"), this.$stage.children(".cloned").remove(), this.e = null, this.$element.removeData("owlCarousel"), this.$stage.children().contents().unwrap(), this.$stage.children().unwrap(), this.$stage.unwrap()
    }, e.prototype.op = function(a, b, c) {
        var d = this.settings.rtl;
        switch (b) {
            case "<":
                return d ? a > c : c > a;
            case ">":
                return d ? c > a : a > c;
            case ">=":
                return d ? c >= a : a >= c;
            case "<=":
                return d ? a >= c : c >= a
        }
    }, e.prototype.on = function(a, b, c, d) {
        a.addEventListener ? a.addEventListener(b, c, d) : a.attachEvent && a.attachEvent("on" + b, c)
    }, e.prototype.off = function(a, b, c, d) {
        a.removeEventListener ? a.removeEventListener(b, c, d) : a.detachEvent && a.detachEvent("on" + b, c)
    }, e.prototype.trigger = function(b, c, d) {
        var e = {
                item: {
                    count: this._items.length,
                    index: this.current()
                }
            },
            f = a.camelCase(a.grep(["on", b, d], function(a) {
                return a
            }).join("-").toLowerCase()),
            g = a.Event([b, "owl", d || "carousel"].join(".").toLowerCase(), a.extend({
                relatedTarget: this
            }, e, c));
        return this._supress[b] || (a.each(this._plugins, function(a, b) {
            b.onTrigger && b.onTrigger(g)
        }), this.$element.trigger(g), this.settings && "function" == typeof this.settings[f] && this.settings[f].apply(this, g)), g
    }, e.prototype.suppress = function(b) {
        a.each(b, a.proxy(function(a, b) {
            this._supress[b] = !0
        }, this))
    }, e.prototype.release = function(b) {
        a.each(b, a.proxy(function(a, b) {
            delete this._supress[b]
        }, this))
    }, e.prototype.browserSupport = function() {
        if (this.support3d = j(), this.support3d) {
            this.transformVendor = i();
            var a = ["transitionend", "webkitTransitionEnd", "transitionend", "oTransitionEnd"];
            this.transitionEndVendor = a[h()], this.vendorName = this.transformVendor.replace(/Transform/i, ""), this.vendorName = "" !== this.vendorName ? "-" + this.vendorName.toLowerCase() + "-" : ""
        }
        this.state.orientation = b.orientation
    }, a.fn.owlCarousel = function(b) {
        return this.each(function() {
            a(this).data("owlCarousel") || a(this).data("owlCarousel", new e(this, b))
        })
    }, a.fn.owlCarousel.Constructor = e
}(window.Zepto || window.jQuery, window, document),
function(a, b) {
    var c = function(b) {
        this._core = b, this._loaded = [], this._handlers = {
            "initialized.owl.carousel change.owl.carousel": a.proxy(function(b) {
                if (b.namespace && this._core.settings && this._core.settings.lazyLoad && (b.property && "position" == b.property.name || "initialized" == b.type))
                    for (var c = this._core.settings, d = c.center && Math.ceil(c.items / 2) || c.items, e = c.center && -1 * d || 0, f = (b.property && b.property.value || this._core.current()) + e, g = this._core.clones().length, h = a.proxy(function(a, b) {
                            this.load(b)
                        }, this); e++ < d;) this.load(g / 2 + this._core.relative(f)), g && a.each(this._core.clones(this._core.relative(f++)), h)
            }, this)
        }, this._core.options = a.extend({}, c.Defaults, this._core.options), this._core.$element.on(this._handlers)
    };
    c.Defaults = {
        lazyLoad: !1
    }, c.prototype.load = function(c) {
        var d = this._core.$stage.children().eq(c),
            e = d && d.find(".owl-lazy");
        !e || a.inArray(d.get(0), this._loaded) > -1 || (e.each(a.proxy(function(c, d) {
            var e, f = a(d),
                g = b.devicePixelRatio > 1 && f.attr("data-src-retina") || f.attr("data-src");
            this._core.trigger("load", {
                element: f,
                url: g
            }, "lazy"), f.is("img") ? f.one("load.owl.lazy", a.proxy(function() {
                f.css("opacity", 1), this._core.trigger("loaded", {
                    element: f,
                    url: g
                }, "lazy")
            }, this)).attr("src", g) : (e = new Image, e.onload = a.proxy(function() {
                f.css({
                    "background-image": "url(" + g + ")",
                    opacity: "1"
                }), this._core.trigger("loaded", {
                    element: f,
                    url: g
                }, "lazy")
            }, this), e.src = g)
        }, this)), this._loaded.push(d.get(0)))
    }, c.prototype.destroy = function() {
        var a, b;
        for (a in this.handlers) this._core.$element.off(a, this.handlers[a]);
        for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null)
    }, a.fn.owlCarousel.Constructor.Plugins.Lazy = c
}(window.Zepto || window.jQuery, window, document),
function(a) {
    var b = function(c) {
        this._core = c, this._handlers = {
            "initialized.owl.carousel": a.proxy(function() {
                this._core.settings.autoHeight && this.update()
            }, this),
            "changed.owl.carousel": a.proxy(function(a) {
                this._core.settings.autoHeight && "position" == a.property.name && this.update()
            }, this),
            "loaded.owl.lazy": a.proxy(function(a) {
                this._core.settings.autoHeight && a.element.closest("." + this._core.settings.itemClass) === this._core.$stage.children().eq(this._core.current()) && this.update()
            }, this)
        }, this._core.options = a.extend({}, b.Defaults, this._core.options), this._core.$element.on(this._handlers)
    };
    b.Defaults = {
        autoHeight: !1,
        autoHeightClass: "owl-height"
    }, b.prototype.update = function() {
        this._core.$stage.parent().height(this._core.$stage.children().eq(this._core.current()).height()).addClass(this._core.settings.autoHeightClass)
    }, b.prototype.destroy = function() {
        var a, b;
        for (a in this._handlers) this._core.$element.off(a, this._handlers[a]);
        for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null)
    }, a.fn.owlCarousel.Constructor.Plugins.AutoHeight = b
}(window.Zepto || window.jQuery, window, document),
function(a, b, c) {
    var d = function(b) {
        this._core = b, this._videos = {}, this._playing = null, this._fullscreen = !1, this._handlers = {
            "resize.owl.carousel": a.proxy(function(a) {
                this._core.settings.video && !this.isInFullScreen() && a.preventDefault()
            }, this),
            "refresh.owl.carousel changed.owl.carousel": a.proxy(function() {
                this._playing && this.stop()
            }, this),
            "prepared.owl.carousel": a.proxy(function(b) {
                var c = a(b.content).find(".owl-video");
                c.length && (c.css("display", "none"), this.fetch(c, a(b.content)))
            }, this)
        }, this._core.options = a.extend({}, d.Defaults, this._core.options), this._core.$element.on(this._handlers), this._core.$element.on("click.owl.video", ".owl-video-play-icon", a.proxy(function(a) {
            this.play(a)
        }, this))
    };
    d.Defaults = {
        video: !1,
        videoHeight: !1,
        videoWidth: !1
    }, d.prototype.fetch = function(a, b) {
        var c = a.attr("data-vimeo-id") ? "vimeo" : "youtube",
            d = a.attr("data-vimeo-id") || a.attr("data-youtube-id"),
            e = a.attr("data-width") || this._core.settings.videoWidth,
            f = a.attr("data-height") || this._core.settings.videoHeight,
            g = a.attr("href");
        if (!g) throw new Error("Missing video URL.");
        if (d = g.match(/(http:|https:|)\/\/(player.|www.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com))\/(video\/|embed\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/), d[3].indexOf("youtu") > -1) c = "youtube";
        else {
            if (!(d[3].indexOf("vimeo") > -1)) throw new Error("Video URL not supported.");
            c = "vimeo"
        }
        d = d[6], this._videos[g] = {
            type: c,
            id: d,
            width: e,
            height: f
        }, b.attr("data-video", g), this.thumbnail(a, this._videos[g])
    }, d.prototype.thumbnail = function(b, c) {
        var d, e, f, g = c.width && c.height ? 'style="width:' + c.width + "px;height:" + c.height + 'px;"' : "",
            h = b.find("img"),
            i = "src",
            j = "",
            k = this._core.settings,
            l = function(a) {
                e = '<div class="owl-video-play-icon"></div>', d = k.lazyLoad ? '<div class="owl-video-tn ' + j + '" ' + i + '="' + a + '"></div>' : '<div class="owl-video-tn" style="opacity:1;background-image:url(' + a + ')"></div>', b.after(d), b.after(e)
            };
        return b.wrap('<div class="owl-video-wrapper"' + g + "></div>"), this._core.settings.lazyLoad && (i = "data-src", j = "owl-lazy"), h.length ? (l(h.attr(i)), h.remove(), !1) : void("youtube" === c.type ? (f = "http://img.youtube.com/vi/" + c.id + "/hqdefault.jpg", l(f)) : "vimeo" === c.type && a.ajax({
            type: "GET",
            url: "http://vimeo.com/api/v2/video/" + c.id + ".json",
            jsonp: "callback",
            dataType: "jsonp",
            success: function(a) {
                f = a[0].thumbnail_large, l(f)
            }
        }))
    }, d.prototype.stop = function() {
        this._core.trigger("stop", null, "video"), this._playing.find(".owl-video-frame").remove(), this._playing.removeClass("owl-video-playing"), this._playing = null
    }, d.prototype.play = function(b) {
        this._core.trigger("play", null, "video"), this._playing && this.stop();
        var c, d, e = a(b.target || b.srcElement),
            f = e.closest("." + this._core.settings.itemClass),
            g = this._videos[f.attr("data-video")],
            h = g.width || "100%",
            i = g.height || this._core.$stage.height();
        "youtube" === g.type ? c = '<iframe width="' + h + '" height="' + i + '" src="http://www.youtube.com/embed/' + g.id + "?autoplay=1&v=" + g.id + '" frameborder="0" allowfullscreen></iframe>' : "vimeo" === g.type && (c = '<iframe src="http://player.vimeo.com/video/' + g.id + '?autoplay=1" width="' + h + '" height="' + i + '" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>'), f.addClass("owl-video-playing"), this._playing = f, d = a('<div style="height:' + i + "px; width:" + h + 'px" class="owl-video-frame">' + c + "</div>"), e.after(d)
    }, d.prototype.isInFullScreen = function() {
        var d = c.fullscreenElement || c.mozFullScreenElement || c.webkitFullscreenElement;
        return d && a(d).parent().hasClass("owl-video-frame") && (this._core.speed(0), this._fullscreen = !0), d && this._fullscreen && this._playing ? !1 : this._fullscreen ? (this._fullscreen = !1, !1) : this._playing && this._core.state.orientation !== b.orientation ? (this._core.state.orientation = b.orientation, !1) : !0
    }, d.prototype.destroy = function() {
        var a, b;
        this._core.$element.off("click.owl.video");
        for (a in this._handlers) this._core.$element.off(a, this._handlers[a]);
        for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null)
    }, a.fn.owlCarousel.Constructor.Plugins.Video = d
}(window.Zepto || window.jQuery, window, document),
function(a, b, c, d) {
    var e = function(b) {
        this.core = b, this.core.options = a.extend({}, e.Defaults, this.core.options), this.swapping = !0, this.previous = d, this.next = d, this.handlers = {
            "change.owl.carousel": a.proxy(function(a) {
                "position" == a.property.name && (this.previous = this.core.current(), this.next = a.property.value)
            }, this),
            "drag.owl.carousel dragged.owl.carousel translated.owl.carousel": a.proxy(function(a) {
                this.swapping = "translated" == a.type
            }, this),
            "translate.owl.carousel": a.proxy(function() {
                this.swapping && (this.core.options.animateOut || this.core.options.animateIn) && this.swap()
            }, this)
        }, this.core.$element.on(this.handlers)
    };
    e.Defaults = {
        animateOut: !1,
        animateIn: !1
    }, e.prototype.swap = function() {
        if (1 === this.core.settings.items && this.core.support3d) {
            this.core.speed(0);
            var b, c = a.proxy(this.clear, this),
                d = this.core.$stage.children().eq(this.previous),
                e = this.core.$stage.children().eq(this.next),
                f = this.core.settings.animateIn,
                g = this.core.settings.animateOut;
            this.core.current() !== this.previous && (g && (b = this.core.coordinates(this.previous) - this.core.coordinates(this.next), d.css({
                left: b + "px"
            }).addClass("animated owl-animated-out").addClass(g).one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", c)), f && e.addClass("animated owl-animated-in").addClass(f).one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", c))
        }
    }, e.prototype.clear = function(b) {
        a(b.target).css({
            left: ""
        }).removeClass("animated owl-animated-out owl-animated-in").removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut), this.core.transitionEnd()
    }, e.prototype.destroy = function() {
        var a, b;
        for (a in this.handlers) this.core.$element.off(a, this.handlers[a]);
        for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null)
    }, a.fn.owlCarousel.Constructor.Plugins.Animate = e
}(window.Zepto || window.jQuery, window, document),
function(a, b, c) {
    var d = function(b) {
        this.core = b, this.core.options = a.extend({}, d.Defaults, this.core.options), this.handlers = {
            "translated.owl.carousel refreshed.owl.carousel": a.proxy(function() {
                this.autoplay()
            }, this),
            "play.owl.autoplay": a.proxy(function(a, b, c) {
                this.play(b, c)
            }, this),
            "stop.owl.autoplay": a.proxy(function() {
                this.stop()
            }, this),
            "mouseover.owl.autoplay": a.proxy(function() {
                this.core.settings.autoplayHoverPause && this.pause()
            }, this),
            "mouseleave.owl.autoplay": a.proxy(function() {
                this.core.settings.autoplayHoverPause && this.autoplay()
            }, this)
        }, this.core.$element.on(this.handlers)
    };
    d.Defaults = {
        autoplay: !1,
        autoplayTimeout: 5e3,
        autoplayHoverPause: !1,
        autoplaySpeed: !1
    }, d.prototype.autoplay = function() {
        this.core.settings.autoplay && !this.core.state.videoPlay ? (b.clearInterval(this.interval), this.interval = b.setInterval(a.proxy(function() {
            this.play()
        }, this), this.core.settings.autoplayTimeout)) : b.clearInterval(this.interval)
    }, d.prototype.play = function() {
        return c.hidden === !0 || this.core.state.isTouch || this.core.state.isScrolling || this.core.state.isSwiping || this.core.state.inMotion ? void 0 : this.core.settings.autoplay === !1 ? void b.clearInterval(this.interval) : void this.core.next(this.core.settings.autoplaySpeed)
    }, d.prototype.stop = function() {
        b.clearInterval(this.interval)
    }, d.prototype.pause = function() {
        b.clearInterval(this.interval)
    }, d.prototype.destroy = function() {
        var a, c;
        b.clearInterval(this.interval);
        for (a in this.handlers) this.core.$element.off(a, this.handlers[a]);
        for (c in Object.getOwnPropertyNames(this)) "function" != typeof this[c] && (this[c] = null)
    }, a.fn.owlCarousel.Constructor.Plugins.autoplay = d
}(window.Zepto || window.jQuery, window, document),
function(a) {
    "use strict";
    var b = function(c) {
        this._core = c, this._initialized = !1, this._pages = [], this._controls = {}, this._templates = [], this.$element = this._core.$element, this._overrides = {
            next: this._core.next,
            prev: this._core.prev,
            to: this._core.to
        }, this._handlers = {
            "prepared.owl.carousel": a.proxy(function(b) {
                this._core.settings.dotsData && this._templates.push(a(b.content).find("[data-dot]").andSelf("[data-dot]").attr("data-dot"))
            }, this),
            "add.owl.carousel": a.proxy(function(b) {
                this._core.settings.dotsData && this._templates.splice(b.position, 0, a(b.content).find("[data-dot]").andSelf("[data-dot]").attr("data-dot"))
            }, this),
            "remove.owl.carousel prepared.owl.carousel": a.proxy(function(a) {
                this._core.settings.dotsData && this._templates.splice(a.position, 1)
            }, this),
            "change.owl.carousel": a.proxy(function(a) {
                if ("position" == a.property.name && !this._core.state.revert && !this._core.settings.loop && this._core.settings.navRewind) {
                    var b = this._core.current(),
                        c = this._core.maximum(),
                        d = this._core.minimum();
                    a.data = a.property.value > c ? b >= c ? d : c : a.property.value < d ? c : a.property.value
                }
            }, this),
            "changed.owl.carousel": a.proxy(function(a) {
                "position" == a.property.name && this.draw()
            }, this),
            "refreshed.owl.carousel": a.proxy(function() {
                this._initialized || (this.initialize(), this._initialized = !0), this._core.trigger("refresh", null, "navigation"), this.update(), this.draw(), this._core.trigger("refreshed", null, "navigation")
            }, this)
        }, this._core.options = a.extend({}, b.Defaults, this._core.options), this.$element.on(this._handlers)
    };
    b.Defaults = {
        nav: !1,
        navRewind: !0,
        navText: ["prev", "next"],
        navSpeed: !1,
        navElement: "div",
        navContainer: !1,
        navContainerClass: "owl-nav",
        navClass: ["owl-prev", "owl-next"],
        slideBy: 1,
        dotClass: "owl-dot",
        dotsClass: "owl-dots",
        dots: !0,
        dotsEach: !1,
        dotData: !1,
        dotsSpeed: !1,
        dotsContainer: !1,
        controlsClass: "owl-controls"
    }, b.prototype.initialize = function() {
        var b, c, d = this._core.settings;
        d.dotsData || (this._templates = [a("<div>").addClass(d.dotClass).append(a("<span>")).prop("outerHTML")]), d.navContainer && d.dotsContainer || (this._controls.$container = a("<div>").addClass(d.controlsClass).appendTo(this.$element)), this._controls.$indicators = d.dotsContainer ? a(d.dotsContainer) : a("<div>").hide().addClass(d.dotsClass).appendTo(this._controls.$container), this._controls.$indicators.on("click", "div", a.proxy(function(b) {
            var c = a(b.target).parent().is(this._controls.$indicators) ? a(b.target).index() : a(b.target).parent().index();
            b.preventDefault(), this.to(c, d.dotsSpeed)
        }, this)), b = d.navContainer ? a(d.navContainer) : a("<div>").addClass(d.navContainerClass).prependTo(this._controls.$container), this._controls.$next = a("<" + d.navElement + ">"), this._controls.$previous = this._controls.$next.clone(), this._controls.$previous.addClass(d.navClass[0]).html(d.navText[0]).hide().prependTo(b).on("click", a.proxy(function() {
            this.prev(d.navSpeed)
        }, this)), this._controls.$next.addClass(d.navClass[1]).html(d.navText[1]).hide().appendTo(b).on("click", a.proxy(function() {
            this.next(d.navSpeed)
        }, this));
        for (c in this._overrides) this._core[c] = a.proxy(this[c], this)
    }, b.prototype.destroy = function() {
        var a, b, c, d;
        for (a in this._handlers) this.$element.off(a, this._handlers[a]);
        for (b in this._controls) this._controls[b].remove();
        for (d in this.overides) this._core[d] = this._overrides[d];
        for (c in Object.getOwnPropertyNames(this)) "function" != typeof this[c] && (this[c] = null)
    }, b.prototype.update = function() {
        var a, b, c, d = this._core.settings,
            e = this._core.clones().length / 2,
            f = e + this._core.items().length,
            g = d.center || d.autoWidth || d.dotData ? 1 : d.dotsEach || d.items;
        if ("page" !== d.slideBy && (d.slideBy = Math.min(d.slideBy, d.items)), d.dots || "page" == d.slideBy)
            for (this._pages = [], a = e, b = 0, c = 0; f > a; a++)(b >= g || 0 === b) && (this._pages.push({
                start: a - e,
                end: a - e + g - 1
            }), b = 0, ++c), b += this._core.mergers(this._core.relative(a))
    }, b.prototype.draw = function() {
        var b, c, d = "",
            e = this._core.settings,
            f = (this._core.$stage.children(), this._core.relative(this._core.current()));
        if (!e.nav || e.loop || e.navRewind || (this._controls.$previous.toggleClass("disabled", 0 >= f), this._controls.$next.toggleClass("disabled", f >= this._core.maximum())), this._controls.$previous.toggle(e.nav), this._controls.$next.toggle(e.nav), e.dots) {
            if (b = this._pages.length - this._controls.$indicators.children().length, e.dotData && 0 !== b) {
                for (c = 0; c < this._controls.$indicators.children().length; c++) d += this._templates[this._core.relative(c)];
                this._controls.$indicators.html(d)
            } else b > 0 ? (d = new Array(b + 1).join(this._templates[0]), this._controls.$indicators.append(d)) : 0 > b && this._controls.$indicators.children().slice(b).remove();
            this._controls.$indicators.find(".active").removeClass("active"), this._controls.$indicators.children().eq(a.inArray(this.current(), this._pages)).addClass("active")
        }
        this._controls.$indicators.toggle(e.dots)
    }, b.prototype.onTrigger = function(b) {
        var c = this._core.settings;
        b.page = {
            index: a.inArray(this.current(), this._pages),
            count: this._pages.length,
            size: c && (c.center || c.autoWidth || c.dotData ? 1 : c.dotsEach || c.items)
        }
    }, b.prototype.current = function() {
        var b = this._core.relative(this._core.current());
        return a.grep(this._pages, function(a) {
            return a.start <= b && a.end >= b
        }).pop()
    }, b.prototype.getPosition = function(b) {
        var c, d, e = this._core.settings;
        return "page" == e.slideBy ? (c = a.inArray(this.current(), this._pages), d = this._pages.length, b ? ++c : --c, c = this._pages[(c % d + d) % d].start) : (c = this._core.relative(this._core.current()), d = this._core.items().length, b ? c += e.slideBy : c -= e.slideBy), c
    }, b.prototype.next = function(b) {
        a.proxy(this._overrides.to, this._core)(this.getPosition(!0), b)
    }, b.prototype.prev = function(b) {
        a.proxy(this._overrides.to, this._core)(this.getPosition(!1), b)
    }, b.prototype.to = function(b, c, d) {
        var e;
        d ? a.proxy(this._overrides.to, this._core)(b, c) : (e = this._pages.length, a.proxy(this._overrides.to, this._core)(this._pages[(b % e + e) % e].start, c))
    }, a.fn.owlCarousel.Constructor.Plugins.Navigation = b
}(window.Zepto || window.jQuery, window, document),
function(a, b) {
    "use strict";
    var c = function(d) {
        this._core = d, this._hashes = {}, this.$element = this._core.$element, this._handlers = {
            "initialized.owl.carousel": a.proxy(function() {
                "URLHash" == this._core.settings.startPosition && a(b).trigger("hashchange.owl.navigation")
            }, this),
            "prepared.owl.carousel": a.proxy(function(b) {
                var c = a(b.content).find("[data-hash]").andSelf("[data-hash]").attr("data-hash");
                this._hashes[c] = b.content
            }, this)
        }, this._core.options = a.extend({}, c.Defaults, this._core.options), this.$element.on(this._handlers), a(b).on("hashchange.owl.navigation", a.proxy(function() {
            var a = b.location.hash.substring(1),
                c = this._core.$stage.children(),
                d = this._hashes[a] && c.index(this._hashes[a]) || 0;
            return a ? void this._core.to(d, !1, !0) : !1
        }, this))
    };
    c.Defaults = {
        URLhashListener: !1
    }, c.prototype.destroy = function() {
        var c, d;
        a(b).off("hashchange.owl.navigation");
        for (c in this._handlers) this._core.$element.off(c, this._handlers[c]);
        for (d in Object.getOwnPropertyNames(this)) "function" != typeof this[d] && (this[d] = null)
    }, a.fn.owlCarousel.Constructor.Plugins.Hash = c
}(window.Zepto || window.jQuery, window, document);

/*! owl.carousel2.thumbs - v0.1.5 | (c) 2015 @gijsroge | MIT license | https://github.com/gijsroge/OwlCarousel2-Thumbs */
! function(a, b, c, d) {
    "use strict";
    var e = function(b) {
        this.owl = b, this._thumbcontent = [], this._identifier = 0, this.owl_currentitem = this.owl.options.startPosition, this.$element = this.owl.$element, this._handlers = {
            "prepared.owl.carousel": a.proxy(function(b) {
                if (!b.namespace || !this.owl.options.thumbs || this.owl.options.thumbImage || this.owl.options.thumbsPrerendered || this.owl.options.thumbImage) {
                    if (b.namespace && this.owl.options.thumbs && this.owl.options.thumbImage) {
                        var c = a(b.content).find("img");
                        this._thumbcontent.push(c)
                    }
                } else a(b.content).find("[data-thumb]").attr("data-thumb") !== d && this._thumbcontent.push(a(b.content).find("[data-thumb]").attr("data-thumb"))
            }, this),
            "initialized.owl.carousel": a.proxy(function(a) {
                a.namespace && this.owl.options.thumbs && (this.render(), this.listen(), this._identifier = this.owl.$element.data("slider-id"), this.setActive())
            }, this),
            "changed.owl.carousel": a.proxy(function(a) {
                a.namespace && "position" === a.property.name && this.owl.options.thumbs && (this._identifier = this.owl.$element.data("slider-id"), this.setActive())
            }, this)
        }, this.owl.options = a.extend(e.Defaults, this.owl.options), this.owl.$element.on(this._handlers)
    };
    e.Defaults = {
        thumbs: !0,
        thumbImage: !1,
        thumbContainerClass: "owl-thumbs",
        thumbItemClass: "owl-thumb-item",
        moveThumbsInside: !1
    }, e.prototype.listen = function() {
        var b = this.owl.options;
        b.thumbsPrerendered && (this._thumbcontent._thumbcontainer = a("." + b.thumbContainerClass)), a(this._thumbcontent._thumbcontainer).on("click", this._thumbcontent._thumbcontainer.children(), a.proxy(function(c) {
            this._identifier = a(c.target).closest("." + b.thumbContainerClass).data("slider-id");
            var d = a(c.target).parent().is(this._thumbcontent._thumbcontainer) ? a(c.target).index() : a(c.target).parent().index();
            b.thumbsPrerendered ? a("[data-slider-id=" + this._identifier + "]").trigger("to.owl.carousel", [d, b.dotsSpeed, !0]) : this.owl.to(d, b.dotsSpeed), c.preventDefault()
        }, this))
    }, e.prototype.render = function() {
        var b = this.owl.options;
        b.thumbsPrerendered ? (this._thumbcontent._thumbcontainer = a("." + b.thumbContainerClass), b.moveThumbsInside && this._thumbcontent._thumbcontainer.appendTo(this.$element)) : this._thumbcontent._thumbcontainer = a("<div>").addClass(b.thumbContainerClass).appendTo(this.$element);
        var c;
        if (b.thumbImage)
            for (c = 0; c < this._thumbcontent.length; ++c) this._thumbcontent._thumbcontainer.append("<button class=" + b.thumbItemClass + '><img src="' + this._thumbcontent[c].attr("src") + '" alt="' + this._thumbcontent[c].attr("alt") + '" /></button>');
        else
            for (c = 0; c < this._thumbcontent.length; ++c) this._thumbcontent._thumbcontainer.append("<button class=" + b.thumbItemClass + ">" + this._thumbcontent[c] + "</button>")
    }, e.prototype.setActive = function() {
        this.owl_currentitem = this.owl._current - this.owl._clones.length / 2, this.owl_currentitem === this.owl._items.length && (this.owl_currentitem = 0);
        var b = this.owl.options,
            c = b.thumbsPrerendered ? a("." + b.thumbContainerClass + '[data-slider-id="' + this._identifier + '"]') : this._thumbcontent._thumbcontainer;
        c.children().filter(".active").removeClass("active"), c.children().eq(this.owl_currentitem).addClass("active")
    }, e.prototype.destroy = function() {
        var a, b;
        for (a in this._handlers) this.owl.$element.off(a, this._handlers[a]);
        for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null)
    }, a.fn.owlCarousel.Constructor.Plugins.Thumbs = e
}(window.Zepto || window.jQuery, window, document);

/*!
 * Packery PACKAGED v1.3.2
 * bin-packing layout library
 * http://packery.metafizzy.co
 *
 * Commercial use requires one-time purchase of a commercial license
 * http://packery.metafizzy.co/license.html
 *
 * Non-commercial use is licensed under the GPL v3 License
 *
 * Copyright 2015 Metafizzy
 */

(function(t) {
    function e() {}

    function i(t) {
        function i(e) {
            e.prototype.option || (e.prototype.option = function(e) {
                t.isPlainObject(e) && (this.options = t.extend(!0, this.options, e))
            })
        }

        function o(e, i) {
            t.fn[e] = function(o) {
                if ("string" == typeof o) {
                    for (var s = n.call(arguments, 1), a = 0, h = this.length; h > a; a++) {
                        var p = this[a],
                            u = t.data(p, e);
                        if (u)
                            if (t.isFunction(u[o]) && "_" !== o.charAt(0)) {
                                var c = u[o].apply(u, s);
                                if (void 0 !== c) return c
                            } else r("no such method '" + o + "' for " + e + " instance");
                        else r("cannot call methods on " + e + " prior to initialization; " + "attempted to call '" + o + "'")
                    }
                    return this
                }
                return this.each(function() {
                    var n = t.data(this, e);
                    n ? (n.option(o), n._init()) : (n = new i(this, o), t.data(this, e, n))
                })
            }
        }
        if (t) {
            var r = "undefined" == typeof console ? e : function(t) {
                console.error(t)
            };
            return t.bridget = function(t, e) {
                i(e), o(t, e)
            }, t.bridget
        }
    }
    var n = Array.prototype.slice;
    "function" == typeof define && define.amd ? define("jquery-bridget/jquery.bridget", ["jquery"], i) : "object" == typeof exports ? i(require("jquery")) : i(t.jQuery)
})(window),
function(t) {
    function e(t) {
        return RegExp("(^|\\s+)" + t + "(\\s+|$)")
    }

    function i(t, e) {
        var i = n(t, e) ? r : o;
        i(t, e)
    }
    var n, o, r;
    "classList" in document.documentElement ? (n = function(t, e) {
        return t.classList.contains(e)
    }, o = function(t, e) {
        t.classList.add(e)
    }, r = function(t, e) {
        t.classList.remove(e)
    }) : (n = function(t, i) {
        return e(i).test(t.className)
    }, o = function(t, e) {
        n(t, e) || (t.className = t.className + " " + e)
    }, r = function(t, i) {
        t.className = t.className.replace(e(i), " ")
    });
    var s = {
        hasClass: n,
        addClass: o,
        removeClass: r,
        toggleClass: i,
        has: n,
        add: o,
        remove: r,
        toggle: i
    };
    "function" == typeof define && define.amd ? define("classie/classie", s) : "object" == typeof exports ? module.exports = s : t.classie = s
}(window),
function(t) {
    function e(t) {
        if (t) {
            if ("string" == typeof n[t]) return t;
            t = t.charAt(0).toUpperCase() + t.slice(1);
            for (var e, o = 0, r = i.length; r > o; o++)
                if (e = i[o] + t, "string" == typeof n[e]) return e
        }
    }
    var i = "Webkit Moz ms Ms O".split(" "),
        n = document.documentElement.style;
    "function" == typeof define && define.amd ? define("get-style-property/get-style-property", [], function() {
        return e
    }) : "object" == typeof exports ? module.exports = e : t.getStyleProperty = e
}(window),
function(t) {
    function e(t) {
        var e = parseFloat(t),
            i = -1 === t.indexOf("%") && !isNaN(e);
        return i && e
    }

    function i() {}

    function n() {
        for (var t = {
                width: 0,
                height: 0,
                innerWidth: 0,
                innerHeight: 0,
                outerWidth: 0,
                outerHeight: 0
            }, e = 0, i = s.length; i > e; e++) {
            var n = s[e];
            t[n] = 0
        }
        return t
    }

    function o(i) {
        function o() {
            if (!d) {
                d = !0;
                var n = t.getComputedStyle;
                if (p = function() {
                        var t = n ? function(t) {
                            return n(t, null)
                        } : function(t) {
                            return t.currentStyle
                        };
                        return function(e) {
                            var i = t(e);
                            return i || r("Style returned " + i + ". Are you running this code in a hidden iframe on Firefox? " + "See http://bit.ly/getsizebug1"), i
                        }
                    }(), u = i("boxSizing")) {
                    var o = document.createElement("div");
                    o.style.width = "200px", o.style.padding = "1px 2px 3px 4px", o.style.borderStyle = "solid", o.style.borderWidth = "1px 2px 3px 4px", o.style[u] = "border-box";
                    var s = document.body || document.documentElement;
                    s.appendChild(o);
                    var a = p(o);
                    c = 200 === e(a.width), s.removeChild(o)
                }
            }
        }

        function a(t) {
            if (o(), "string" == typeof t && (t = document.querySelector(t)), t && "object" == typeof t && t.nodeType) {
                var i = p(t);
                if ("none" === i.display) return n();
                var r = {};
                r.width = t.offsetWidth, r.height = t.offsetHeight;
                for (var a = r.isBorderBox = !(!u || !i[u] || "border-box" !== i[u]), d = 0, f = s.length; f > d; d++) {
                    var l = s[d],
                        y = i[l];
                    y = h(t, y);
                    var m = parseFloat(y);
                    r[l] = isNaN(m) ? 0 : m
                }
                var g = r.paddingLeft + r.paddingRight,
                    v = r.paddingTop + r.paddingBottom,
                    x = r.marginLeft + r.marginRight,
                    b = r.marginTop + r.marginBottom,
                    w = r.borderLeftWidth + r.borderRightWidth,
                    _ = r.borderTopWidth + r.borderBottomWidth,
                    E = a && c,
                    L = e(i.width);
                L !== !1 && (r.width = L + (E ? 0 : g + w));
                var R = e(i.height);
                return R !== !1 && (r.height = R + (E ? 0 : v + _)), r.innerWidth = r.width - (g + w), r.innerHeight = r.height - (v + _), r.outerWidth = r.width + x, r.outerHeight = r.height + b, r
            }
        }

        function h(e, i) {
            if (t.getComputedStyle || -1 === i.indexOf("%")) return i;
            var n = e.style,
                o = n.left,
                r = e.runtimeStyle,
                s = r && r.left;
            return s && (r.left = e.currentStyle.left), n.left = i, i = n.pixelLeft, n.left = o, s && (r.left = s), i
        }
        var p, u, c, d = !1;
        return a
    }
    var r = "undefined" == typeof console ? i : function(t) {
            console.error(t)
        },
        s = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"];
    "function" == typeof define && define.amd ? define("get-size/get-size", ["get-style-property/get-style-property"], o) : "object" == typeof exports ? module.exports = o(require("desandro-get-style-property")) : t.getSize = o(t.getStyleProperty)
}(window),
function(t) {
    function e(e) {
        var i = t.event;
        return i.target = i.target || i.srcElement || e, i
    }
    var i = document.documentElement,
        n = function() {};
    i.addEventListener ? n = function(t, e, i) {
        t.addEventListener(e, i, !1)
    } : i.attachEvent && (n = function(t, i, n) {
        t[i + n] = n.handleEvent ? function() {
            var i = e(t);
            n.handleEvent.call(n, i)
        } : function() {
            var i = e(t);
            n.call(t, i)
        }, t.attachEvent("on" + i, t[i + n])
    });
    var o = function() {};
    i.removeEventListener ? o = function(t, e, i) {
        t.removeEventListener(e, i, !1)
    } : i.detachEvent && (o = function(t, e, i) {
        t.detachEvent("on" + e, t[e + i]);
        try {
            delete t[e + i]
        } catch (n) {
            t[e + i] = void 0
        }
    });
    var r = {
        bind: n,
        unbind: o
    };
    "function" == typeof define && define.amd ? define("eventie/eventie", r) : "object" == typeof exports ? module.exports = r : t.eventie = r
}(window),
function(t) {
    function e(t) {
        "function" == typeof t && (e.isReady ? t() : s.push(t))
    }

    function i(t) {
        var i = "readystatechange" === t.type && "complete" !== r.readyState;
        e.isReady || i || n()
    }

    function n() {
        e.isReady = !0;
        for (var t = 0, i = s.length; i > t; t++) {
            var n = s[t];
            n()
        }
    }

    function o(o) {
        return "complete" === r.readyState ? n() : (o.bind(r, "DOMContentLoaded", i), o.bind(r, "readystatechange", i), o.bind(t, "load", i)), e
    }
    var r = t.document,
        s = [];
    e.isReady = !1, "function" == typeof define && define.amd ? define("doc-ready/doc-ready", ["eventie/eventie"], o) : "object" == typeof exports ? module.exports = o(require("eventie")) : t.docReady = o(t.eventie)
}(window),
function() {
    function t() {}

    function e(t, e) {
        for (var i = t.length; i--;)
            if (t[i].listener === e) return i;
        return -1
    }

    function i(t) {
        return function() {
            return this[t].apply(this, arguments)
        }
    }
    var n = t.prototype,
        o = this,
        r = o.EventEmitter;
    n.getListeners = function(t) {
        var e, i, n = this._getEvents();
        if (t instanceof RegExp) {
            e = {};
            for (i in n) n.hasOwnProperty(i) && t.test(i) && (e[i] = n[i])
        } else e = n[t] || (n[t] = []);
        return e
    }, n.flattenListeners = function(t) {
        var e, i = [];
        for (e = 0; t.length > e; e += 1) i.push(t[e].listener);
        return i
    }, n.getListenersAsObject = function(t) {
        var e, i = this.getListeners(t);
        return i instanceof Array && (e = {}, e[t] = i), e || i
    }, n.addListener = function(t, i) {
        var n, o = this.getListenersAsObject(t),
            r = "object" == typeof i;
        for (n in o) o.hasOwnProperty(n) && -1 === e(o[n], i) && o[n].push(r ? i : {
            listener: i,
            once: !1
        });
        return this
    }, n.on = i("addListener"), n.addOnceListener = function(t, e) {
        return this.addListener(t, {
            listener: e,
            once: !0
        })
    }, n.once = i("addOnceListener"), n.defineEvent = function(t) {
        return this.getListeners(t), this
    }, n.defineEvents = function(t) {
        for (var e = 0; t.length > e; e += 1) this.defineEvent(t[e]);
        return this
    }, n.removeListener = function(t, i) {
        var n, o, r = this.getListenersAsObject(t);
        for (o in r) r.hasOwnProperty(o) && (n = e(r[o], i), -1 !== n && r[o].splice(n, 1));
        return this
    }, n.off = i("removeListener"), n.addListeners = function(t, e) {
        return this.manipulateListeners(!1, t, e)
    }, n.removeListeners = function(t, e) {
        return this.manipulateListeners(!0, t, e)
    }, n.manipulateListeners = function(t, e, i) {
        var n, o, r = t ? this.removeListener : this.addListener,
            s = t ? this.removeListeners : this.addListeners;
        if ("object" != typeof e || e instanceof RegExp)
            for (n = i.length; n--;) r.call(this, e, i[n]);
        else
            for (n in e) e.hasOwnProperty(n) && (o = e[n]) && ("function" == typeof o ? r.call(this, n, o) : s.call(this, n, o));
        return this
    }, n.removeEvent = function(t) {
        var e, i = typeof t,
            n = this._getEvents();
        if ("string" === i) delete n[t];
        else if (t instanceof RegExp)
            for (e in n) n.hasOwnProperty(e) && t.test(e) && delete n[e];
        else delete this._events;
        return this
    }, n.removeAllListeners = i("removeEvent"), n.emitEvent = function(t, e) {
        var i, n, o, r, s = this.getListenersAsObject(t);
        for (o in s)
            if (s.hasOwnProperty(o))
                for (n = s[o].length; n--;) i = s[o][n], i.once === !0 && this.removeListener(t, i.listener), r = i.listener.apply(this, e || []), r === this._getOnceReturnValue() && this.removeListener(t, i.listener);
        return this
    }, n.trigger = i("emitEvent"), n.emit = function(t) {
        var e = Array.prototype.slice.call(arguments, 1);
        return this.emitEvent(t, e)
    }, n.setOnceReturnValue = function(t) {
        return this._onceReturnValue = t, this
    }, n._getOnceReturnValue = function() {
        return this.hasOwnProperty("_onceReturnValue") ? this._onceReturnValue : !0
    }, n._getEvents = function() {
        return this._events || (this._events = {})
    }, t.noConflict = function() {
        return o.EventEmitter = r, t
    }, "function" == typeof define && define.amd ? define("eventEmitter/EventEmitter", [], function() {
        return t
    }) : "object" == typeof module && module.exports ? module.exports = t : o.EventEmitter = t
}.call(this),
    function(t) {
        function e(t, e) {
            return t[s](e)
        }

        function i(t) {
            if (!t.parentNode) {
                var e = document.createDocumentFragment();
                e.appendChild(t)
            }
        }

        function n(t, e) {
            i(t);
            for (var n = t.parentNode.querySelectorAll(e), o = 0, r = n.length; r > o; o++)
                if (n[o] === t) return !0;
            return !1
        }

        function o(t, n) {
            return i(t), e(t, n)
        }
        var r, s = function() {
            if (t.matchesSelector) return "matchesSelector";
            for (var e = ["webkit", "moz", "ms", "o"], i = 0, n = e.length; n > i; i++) {
                var o = e[i],
                    r = o + "MatchesSelector";
                if (t[r]) return r
            }
        }();
        if (s) {
            var a = document.createElement("div"),
                h = e(a, "div");
            r = h ? e : o
        } else r = n;
        "function" == typeof define && define.amd ? define("matches-selector/matches-selector", [], function() {
            return r
        }) : "object" == typeof exports ? module.exports = r : window.matchesSelector = r
    }(Element.prototype),
    function(t) {
        function e(t, e) {
            for (var i in e) t[i] = e[i];
            return t
        }

        function i(t) {
            for (var e in t) return !1;
            return e = null, !0
        }

        function n(t) {
            return t.replace(/([A-Z])/g, function(t) {
                return "-" + t.toLowerCase()
            })
        }

        function o(t, o, r) {
            function a(t, e) {
                t && (this.element = t, this.layout = e, this.position = {
                    x: 0,
                    y: 0
                }, this._create())
            }
            var h = r("transition"),
                p = r("transform"),
                u = h && p,
                c = !!r("perspective"),
                d = {
                    WebkitTransition: "webkitTransitionEnd",
                    MozTransition: "transitionend",
                    OTransition: "otransitionend",
                    transition: "transitionend"
                }[h],
                f = ["transform", "transition", "transitionDuration", "transitionProperty"],
                l = function() {
                    for (var t = {}, e = 0, i = f.length; i > e; e++) {
                        var n = f[e],
                            o = r(n);
                        o && o !== n && (t[n] = o)
                    }
                    return t
                }();
            e(a.prototype, t.prototype), a.prototype._create = function() {
                this._transn = {
                    ingProperties: {},
                    clean: {},
                    onEnd: {}
                }, this.css({
                    position: "absolute"
                })
            }, a.prototype.handleEvent = function(t) {
                var e = "on" + t.type;
                this[e] && this[e](t)
            }, a.prototype.getSize = function() {
                this.size = o(this.element)
            }, a.prototype.css = function(t) {
                var e = this.element.style;
                for (var i in t) {
                    var n = l[i] || i;
                    e[n] = t[i]
                }
            }, a.prototype.getPosition = function() {
                var t = s(this.element),
                    e = this.layout.options,
                    i = e.isOriginLeft,
                    n = e.isOriginTop,
                    o = parseInt(t[i ? "left" : "right"], 10),
                    r = parseInt(t[n ? "top" : "bottom"], 10);
                o = isNaN(o) ? 0 : o, r = isNaN(r) ? 0 : r;
                var a = this.layout.size;
                o -= i ? a.paddingLeft : a.paddingRight, r -= n ? a.paddingTop : a.paddingBottom, this.position.x = o, this.position.y = r
            }, a.prototype.layoutPosition = function() {
                var t = this.layout.size,
                    e = this.layout.options,
                    i = {};
                e.isOriginLeft ? (i.left = this.position.x + t.paddingLeft + "px", i.right = "") : (i.right = this.position.x + t.paddingRight + "px", i.left = ""), e.isOriginTop ? (i.top = this.position.y + t.paddingTop + "px", i.bottom = "") : (i.bottom = this.position.y + t.paddingBottom + "px", i.top = ""), this.css(i), this.emitEvent("layout", [this])
            };
            var y = c ? function(t, e) {
                return "translate3d(" + t + "px, " + e + "px, 0)"
            } : function(t, e) {
                return "translate(" + t + "px, " + e + "px)"
            };
            a.prototype._transitionTo = function(t, e) {
                this.getPosition();
                var i = this.position.x,
                    n = this.position.y,
                    o = parseInt(t, 10),
                    r = parseInt(e, 10),
                    s = o === this.position.x && r === this.position.y;
                if (this.setPosition(t, e), s && !this.isTransitioning) return this.layoutPosition(), void 0;
                var a = t - i,
                    h = e - n,
                    p = {},
                    u = this.layout.options;
                a = u.isOriginLeft ? a : -a, h = u.isOriginTop ? h : -h, p.transform = y(a, h), this.transition({
                    to: p,
                    onTransitionEnd: {
                        transform: this.layoutPosition
                    },
                    isCleaning: !0
                })
            }, a.prototype.goTo = function(t, e) {
                this.setPosition(t, e), this.layoutPosition()
            }, a.prototype.moveTo = u ? a.prototype._transitionTo : a.prototype.goTo, a.prototype.setPosition = function(t, e) {
                this.position.x = parseInt(t, 10), this.position.y = parseInt(e, 10)
            }, a.prototype._nonTransition = function(t) {
                this.css(t.to), t.isCleaning && this._removeStyles(t.to);
                for (var e in t.onTransitionEnd) t.onTransitionEnd[e].call(this)
            }, a.prototype._transition = function(t) {
                if (!parseFloat(this.layout.options.transitionDuration)) return this._nonTransition(t), void 0;
                var e = this._transn;
                for (var i in t.onTransitionEnd) e.onEnd[i] = t.onTransitionEnd[i];
                for (i in t.to) e.ingProperties[i] = !0, t.isCleaning && (e.clean[i] = !0);
                if (t.from) {
                    this.css(t.from);
                    var n = this.element.offsetHeight;
                    n = null
                }
                this.enableTransition(t.to), this.css(t.to), this.isTransitioning = !0
            };
            var m = p && n(p) + ",opacity";
            a.prototype.enableTransition = function() {
                this.isTransitioning || (this.css({
                    transitionProperty: m,
                    transitionDuration: this.layout.options.transitionDuration
                }), this.element.addEventListener(d, this, !1))
            }, a.prototype.transition = a.prototype[h ? "_transition" : "_nonTransition"], a.prototype.onwebkitTransitionEnd = function(t) {
                this.ontransitionend(t)
            }, a.prototype.onotransitionend = function(t) {
                this.ontransitionend(t)
            };
            var g = {
                "-webkit-transform": "transform",
                "-moz-transform": "transform",
                "-o-transform": "transform"
            };
            a.prototype.ontransitionend = function(t) {
                if (t.target === this.element) {
                    var e = this._transn,
                        n = g[t.propertyName] || t.propertyName;
                    if (delete e.ingProperties[n], i(e.ingProperties) && this.disableTransition(), n in e.clean && (this.element.style[t.propertyName] = "", delete e.clean[n]), n in e.onEnd) {
                        var o = e.onEnd[n];
                        o.call(this), delete e.onEnd[n]
                    }
                    this.emitEvent("transitionEnd", [this])
                }
            }, a.prototype.disableTransition = function() {
                this.removeTransitionStyles(), this.element.removeEventListener(d, this, !1), this.isTransitioning = !1
            }, a.prototype._removeStyles = function(t) {
                var e = {};
                for (var i in t) e[i] = "";
                this.css(e)
            };
            var v = {
                transitionProperty: "",
                transitionDuration: ""
            };
            return a.prototype.removeTransitionStyles = function() {
                this.css(v)
            }, a.prototype.removeElem = function() {
                this.element.parentNode.removeChild(this.element), this.emitEvent("remove", [this])
            }, a.prototype.remove = function() {
                if (!h || !parseFloat(this.layout.options.transitionDuration)) return this.removeElem(), void 0;
                var t = this;
                this.on("transitionEnd", function() {
                    return t.removeElem(), !0
                }), this.hide()
            }, a.prototype.reveal = function() {
                delete this.isHidden, this.css({
                    display: ""
                });
                var t = this.layout.options;
                this.transition({
                    from: t.hiddenStyle,
                    to: t.visibleStyle,
                    isCleaning: !0
                })
            }, a.prototype.hide = function() {
                this.isHidden = !0, this.css({
                    display: ""
                });
                var t = this.layout.options;
                this.transition({
                    from: t.visibleStyle,
                    to: t.hiddenStyle,
                    isCleaning: !0,
                    onTransitionEnd: {
                        opacity: function() {
                            this.isHidden && this.css({
                                display: "none"
                            })
                        }
                    }
                })
            }, a.prototype.destroy = function() {
                this.css({
                    position: "",
                    left: "",
                    right: "",
                    top: "",
                    bottom: "",
                    transition: "",
                    transform: ""
                })
            }, a
        }
        var r = t.getComputedStyle,
            s = r ? function(t) {
                return r(t, null)
            } : function(t) {
                return t.currentStyle
            };
        "function" == typeof define && define.amd ? define("outlayer/item", ["eventEmitter/EventEmitter", "get-size/get-size", "get-style-property/get-style-property"], o) : "object" == typeof exports ? module.exports = o(require("wolfy87-eventemitter"), require("get-size"), require("desandro-get-style-property")) : (t.Outlayer = {}, t.Outlayer.Item = o(t.EventEmitter, t.getSize, t.getStyleProperty))
    }(window),
    function(t) {
        function e(t, e) {
            for (var i in e) t[i] = e[i];
            return t
        }

        function i(t) {
            return "[object Array]" === c.call(t)
        }

        function n(t) {
            var e = [];
            if (i(t)) e = t;
            else if (t && "number" == typeof t.length)
                for (var n = 0, o = t.length; o > n; n++) e.push(t[n]);
            else e.push(t);
            return e
        }

        function o(t, e) {
            var i = f(e, t); - 1 !== i && e.splice(i, 1)
        }

        function r(t) {
            return t.replace(/(.)([A-Z])/g, function(t, e, i) {
                return e + "-" + i
            }).toLowerCase()
        }

        function s(i, s, c, f, l, y) {
            function m(t, i) {
                if ("string" == typeof t && (t = a.querySelector(t)), !t || !d(t)) return h && h.error("Bad " + this.constructor.namespace + " element: " + t), void 0;
                this.element = t, this.options = e({}, this.constructor.defaults), this.option(i);
                var n = ++g;
                this.element.outlayerGUID = n, v[n] = this, this._create(), this.options.isInitLayout && this.layout()
            }
            var g = 0,
                v = {};
            return m.namespace = "outlayer", m.Item = y, m.defaults = {
                containerStyle: {
                    position: "relative"
                },
                isInitLayout: !0,
                isOriginLeft: !0,
                isOriginTop: !0,
                isResizeBound: !0,
                isResizingContainer: !0,
                transitionDuration: "0.4s",
                hiddenStyle: {
                    opacity: 0,
                    transform: "scale(0.001)"
                },
                visibleStyle: {
                    opacity: 1,
                    transform: "scale(1)"
                }
            }, e(m.prototype, c.prototype), m.prototype.option = function(t) {
                e(this.options, t)
            }, m.prototype._create = function() {
                this.reloadItems(), this.stamps = [], this.stamp(this.options.stamp), e(this.element.style, this.options.containerStyle), this.options.isResizeBound && this.bindResize()
            }, m.prototype.reloadItems = function() {
                this.items = this._itemize(this.element.children)
            }, m.prototype._itemize = function(t) {
                for (var e = this._filterFindItemElements(t), i = this.constructor.Item, n = [], o = 0, r = e.length; r > o; o++) {
                    var s = e[o],
                        a = new i(s, this);
                    n.push(a)
                }
                return n
            }, m.prototype._filterFindItemElements = function(t) {
                t = n(t);
                for (var e = this.options.itemSelector, i = [], o = 0, r = t.length; r > o; o++) {
                    var s = t[o];
                    if (d(s))
                        if (e) {
                            l(s, e) && i.push(s);
                            for (var a = s.querySelectorAll(e), h = 0, p = a.length; p > h; h++) i.push(a[h])
                        } else i.push(s)
                }
                return i
            }, m.prototype.getItemElements = function() {
                for (var t = [], e = 0, i = this.items.length; i > e; e++) t.push(this.items[e].element);
                return t
            }, m.prototype.layout = function() {
                this._resetLayout(), this._manageStamps();
                var t = void 0 !== this.options.isLayoutInstant ? this.options.isLayoutInstant : !this._isLayoutInited;
                this.layoutItems(this.items, t), this._isLayoutInited = !0
            }, m.prototype._init = m.prototype.layout, m.prototype._resetLayout = function() {
                this.getSize()
            }, m.prototype.getSize = function() {
                this.size = f(this.element)
            }, m.prototype._getMeasurement = function(t, e) {
                var i, n = this.options[t];
                n ? ("string" == typeof n ? i = this.element.querySelector(n) : d(n) && (i = n), this[t] = i ? f(i)[e] : n) : this[t] = 0
            }, m.prototype.layoutItems = function(t, e) {
                t = this._getItemsForLayout(t), this._layoutItems(t, e), this._postLayout()
            }, m.prototype._getItemsForLayout = function(t) {
                for (var e = [], i = 0, n = t.length; n > i; i++) {
                    var o = t[i];
                    o.isIgnored || e.push(o)
                }
                return e
            }, m.prototype._layoutItems = function(t, e) {
                function i() {
                    n.emitEvent("layoutComplete", [n, t])
                }
                var n = this;
                if (!t || !t.length) return i(), void 0;
                this._itemsOn(t, "layout", i);
                for (var o = [], r = 0, s = t.length; s > r; r++) {
                    var a = t[r],
                        h = this._getItemLayoutPosition(a);
                    h.item = a, h.isInstant = e || a.isLayoutInstant, o.push(h)
                }
                this._processLayoutQueue(o)
            }, m.prototype._getItemLayoutPosition = function() {
                return {
                    x: 0,
                    y: 0
                }
            }, m.prototype._processLayoutQueue = function(t) {
                for (var e = 0, i = t.length; i > e; e++) {
                    var n = t[e];
                    this._positionItem(n.item, n.x, n.y, n.isInstant)
                }
            }, m.prototype._positionItem = function(t, e, i, n) {
                n ? t.goTo(e, i) : t.moveTo(e, i)
            }, m.prototype._postLayout = function() {
                this.resizeContainer()
            }, m.prototype.resizeContainer = function() {
                if (this.options.isResizingContainer) {
                    var t = this._getContainerSize();
                    t && (this._setContainerMeasure(t.width, !0), this._setContainerMeasure(t.height, !1))
                }
            }, m.prototype._getContainerSize = u, m.prototype._setContainerMeasure = function(t, e) {
                if (void 0 !== t) {
                    var i = this.size;
                    i.isBorderBox && (t += e ? i.paddingLeft + i.paddingRight + i.borderLeftWidth + i.borderRightWidth : i.paddingBottom + i.paddingTop + i.borderTopWidth + i.borderBottomWidth), t = Math.max(t, 0), this.element.style[e ? "width" : "height"] = t + "px"
                }
            }, m.prototype._itemsOn = function(t, e, i) {
                function n() {
                    return o++, o === r && i.call(s), !0
                }
                for (var o = 0, r = t.length, s = this, a = 0, h = t.length; h > a; a++) {
                    var p = t[a];
                    p.on(e, n)
                }
            }, m.prototype.ignore = function(t) {
                var e = this.getItem(t);
                e && (e.isIgnored = !0)
            }, m.prototype.unignore = function(t) {
                var e = this.getItem(t);
                e && delete e.isIgnored
            }, m.prototype.stamp = function(t) {
                if (t = this._find(t)) {
                    this.stamps = this.stamps.concat(t);
                    for (var e = 0, i = t.length; i > e; e++) {
                        var n = t[e];
                        this.ignore(n)
                    }
                }
            }, m.prototype.unstamp = function(t) {
                if (t = this._find(t))
                    for (var e = 0, i = t.length; i > e; e++) {
                        var n = t[e];
                        o(n, this.stamps), this.unignore(n)
                    }
            }, m.prototype._find = function(t) {
                return t ? ("string" == typeof t && (t = this.element.querySelectorAll(t)), t = n(t)) : void 0
            }, m.prototype._manageStamps = function() {
                if (this.stamps && this.stamps.length) {
                    this._getBoundingRect();
                    for (var t = 0, e = this.stamps.length; e > t; t++) {
                        var i = this.stamps[t];
                        this._manageStamp(i)
                    }
                }
            }, m.prototype._getBoundingRect = function() {
                var t = this.element.getBoundingClientRect(),
                    e = this.size;
                this._boundingRect = {
                    left: t.left + e.paddingLeft + e.borderLeftWidth,
                    top: t.top + e.paddingTop + e.borderTopWidth,
                    right: t.right - (e.paddingRight + e.borderRightWidth),
                    bottom: t.bottom - (e.paddingBottom + e.borderBottomWidth)
                }
            }, m.prototype._manageStamp = u, m.prototype._getElementOffset = function(t) {
                var e = t.getBoundingClientRect(),
                    i = this._boundingRect,
                    n = f(t),
                    o = {
                        left: e.left - i.left - n.marginLeft,
                        top: e.top - i.top - n.marginTop,
                        right: i.right - e.right - n.marginRight,
                        bottom: i.bottom - e.bottom - n.marginBottom
                    };
                return o
            }, m.prototype.handleEvent = function(t) {
                var e = "on" + t.type;
                this[e] && this[e](t)
            }, m.prototype.bindResize = function() {
                this.isResizeBound || (i.bind(t, "resize", this), this.isResizeBound = !0)
            }, m.prototype.unbindResize = function() {
                this.isResizeBound && i.unbind(t, "resize", this), this.isResizeBound = !1
            }, m.prototype.onresize = function() {
                function t() {
                    e.resize(), delete e.resizeTimeout
                }
                this.resizeTimeout && clearTimeout(this.resizeTimeout);
                var e = this;
                this.resizeTimeout = setTimeout(t, 100)
            }, m.prototype.resize = function() {
                this.isResizeBound && this.needsResizeLayout() && this.layout()
            }, m.prototype.needsResizeLayout = function() {
                var t = f(this.element),
                    e = this.size && t;
                return e && t.innerWidth !== this.size.innerWidth
            }, m.prototype.addItems = function(t) {
                var e = this._itemize(t);
                return e.length && (this.items = this.items.concat(e)), e
            }, m.prototype.appended = function(t) {
                var e = this.addItems(t);
                e.length && (this.layoutItems(e, !0), this.reveal(e))
            }, m.prototype.prepended = function(t) {
                var e = this._itemize(t);
                if (e.length) {
                    var i = this.items.slice(0);
                    this.items = e.concat(i), this._resetLayout(), this._manageStamps(), this.layoutItems(e, !0), this.reveal(e), this.layoutItems(i)
                }
            }, m.prototype.reveal = function(t) {
                var e = t && t.length;
                if (e)
                    for (var i = 0; e > i; i++) {
                        var n = t[i];
                        n.reveal()
                    }
            }, m.prototype.hide = function(t) {
                var e = t && t.length;
                if (e)
                    for (var i = 0; e > i; i++) {
                        var n = t[i];
                        n.hide()
                    }
            }, m.prototype.getItem = function(t) {
                for (var e = 0, i = this.items.length; i > e; e++) {
                    var n = this.items[e];
                    if (n.element === t) return n
                }
            }, m.prototype.getItems = function(t) {
                if (t && t.length) {
                    for (var e = [], i = 0, n = t.length; n > i; i++) {
                        var o = t[i],
                            r = this.getItem(o);
                        r && e.push(r)
                    }
                    return e
                }
            }, m.prototype.remove = function(t) {
                t = n(t);
                var e = this.getItems(t);
                if (e && e.length) {
                    this._itemsOn(e, "remove", function() {
                        this.emitEvent("removeComplete", [this, e])
                    });
                    for (var i = 0, r = e.length; r > i; i++) {
                        var s = e[i];
                        s.remove(), o(s, this.items)
                    }
                }
            }, m.prototype.destroy = function() {
                var t = this.element.style;
                t.height = "", t.position = "", t.width = "";
                for (var e = 0, i = this.items.length; i > e; e++) {
                    var n = this.items[e];
                    n.destroy()
                }
                this.unbindResize();
                var o = this.element.outlayerGUID;
                delete v[o], delete this.element.outlayerGUID, p && p.removeData(this.element, this.constructor.namespace)
            }, m.data = function(t) {
                var e = t && t.outlayerGUID;
                return e && v[e]
            }, m.create = function(t, i) {
                function n() {
                    m.apply(this, arguments)
                }
                return Object.create ? n.prototype = Object.create(m.prototype) : e(n.prototype, m.prototype), n.prototype.constructor = n, n.defaults = e({}, m.defaults), e(n.defaults, i), n.prototype.settings = {}, n.namespace = t, n.data = m.data, n.Item = function() {
                    y.apply(this, arguments)
                }, n.Item.prototype = new y, s(function() {
                    for (var e = r(t), i = a.querySelectorAll(".js-" + e), o = "data-" + e + "-options", s = 0, u = i.length; u > s; s++) {
                        var c, d = i[s],
                            f = d.getAttribute(o);
                        try {
                            c = f && JSON.parse(f)
                        } catch (l) {
                            h && h.error("Error parsing " + o + " on " + d.nodeName.toLowerCase() + (d.id ? "#" + d.id : "") + ": " + l);
                            continue
                        }
                        var y = new n(d, c);
                        p && p.data(d, t, y)
                    }
                }), p && p.bridget && p.bridget(t, n), n
            }, m.Item = y, m
        }
        var a = t.document,
            h = t.console,
            p = t.jQuery,
            u = function() {},
            c = Object.prototype.toString,
            d = "function" == typeof HTMLElement || "object" == typeof HTMLElement ? function(t) {
                return t instanceof HTMLElement
            } : function(t) {
                return t && "object" == typeof t && 1 === t.nodeType && "string" == typeof t.nodeName
            },
            f = Array.prototype.indexOf ? function(t, e) {
                return t.indexOf(e)
            } : function(t, e) {
                for (var i = 0, n = t.length; n > i; i++)
                    if (t[i] === e) return i;
                return -1
            };
        "function" == typeof define && define.amd ? define("outlayer/outlayer", ["eventie/eventie", "doc-ready/doc-ready", "eventEmitter/EventEmitter", "get-size/get-size", "matches-selector/matches-selector", "./item"], s) : "object" == typeof exports ? module.exports = s(require("eventie"), require("doc-ready"), require("wolfy87-eventemitter"), require("get-size"), require("desandro-matches-selector"), require("./item")) : t.Outlayer = s(t.eventie, t.docReady, t.EventEmitter, t.getSize, t.matchesSelector, t.Outlayer.Item)
    }(window),
    function(t) {
        function e() {
            function t(e) {
                for (var i in t.defaults) this[i] = t.defaults[i];
                for (i in e) this[i] = e[i]
            }
            return i.Rect = t, t.defaults = {
                x: 0,
                y: 0,
                width: 0,
                height: 0
            }, t.prototype.contains = function(t) {
                var e = t.width || 0,
                    i = t.height || 0;
                return this.x <= t.x && this.y <= t.y && this.x + this.width >= t.x + e && this.y + this.height >= t.y + i
            }, t.prototype.overlaps = function(t) {
                var e = this.x + this.width,
                    i = this.y + this.height,
                    n = t.x + t.width,
                    o = t.y + t.height;
                return n > this.x && e > t.x && o > this.y && i > t.y
            }, t.prototype.getMaximalFreeRects = function(e) {
                if (!this.overlaps(e)) return !1;
                var i, n = [],
                    o = this.x + this.width,
                    r = this.y + this.height,
                    s = e.x + e.width,
                    a = e.y + e.height;
                return this.y < e.y && (i = new t({
                    x: this.x,
                    y: this.y,
                    width: this.width,
                    height: e.y - this.y
                }), n.push(i)), o > s && (i = new t({
                    x: s,
                    y: this.y,
                    width: o - s,
                    height: this.height
                }), n.push(i)), r > a && (i = new t({
                    x: this.x,
                    y: a,
                    width: this.width,
                    height: r - a
                }), n.push(i)), this.x < e.x && (i = new t({
                    x: this.x,
                    y: this.y,
                    width: e.x - this.x,
                    height: this.height
                }), n.push(i)), n
            }, t.prototype.canFit = function(t) {
                return this.width >= t.width && this.height >= t.height
            }, t
        }
        var i = t.Packery = function() {};
        "function" == typeof define && define.amd ? define("packery/js/rect", e) : "object" == typeof exports ? module.exports = e() : (t.Packery = t.Packery || {}, t.Packery.Rect = e())
    }(window),
    function(t) {
        function e(t) {
            function e(t, e, i) {
                this.width = t || 0, this.height = e || 0, this.sortDirection = i || "downwardLeftToRight", this.reset()
            }
            e.prototype.reset = function() {
                this.spaces = [], this.newSpaces = [];
                var e = new t({
                    x: 0,
                    y: 0,
                    width: this.width,
                    height: this.height
                });
                this.spaces.push(e), this.sorter = i[this.sortDirection] || i.downwardLeftToRight
            }, e.prototype.pack = function(t) {
                for (var e = 0, i = this.spaces.length; i > e; e++) {
                    var n = this.spaces[e];
                    if (n.canFit(t)) {
                        this.placeInSpace(t, n);
                        break
                    }
                }
            }, e.prototype.placeInSpace = function(t, e) {
                t.x = e.x, t.y = e.y, this.placed(t)
            }, e.prototype.placed = function(t) {
                for (var e = [], i = 0, n = this.spaces.length; n > i; i++) {
                    var o = this.spaces[i],
                        r = o.getMaximalFreeRects(t);
                    r ? e.push.apply(e, r) : e.push(o)
                }
                this.spaces = e, this.mergeSortSpaces()
            }, e.prototype.mergeSortSpaces = function() {
                e.mergeRects(this.spaces), this.spaces.sort(this.sorter)
            }, e.prototype.addSpace = function(t) {
                this.spaces.push(t), this.mergeSortSpaces()
            }, e.mergeRects = function(t) {
                for (var e = 0, i = t.length; i > e; e++) {
                    var n = t[e];
                    if (n) {
                        var o = t.slice(0);
                        o.splice(e, 1);
                        for (var r = 0, s = 0, a = o.length; a > s; s++) {
                            var h = o[s],
                                p = e > s ? 0 : 1;
                            n.contains(h) && (t.splice(s + p - r, 1), r++)
                        }
                    }
                }
                return t
            };
            var i = {
                downwardLeftToRight: function(t, e) {
                    return t.y - e.y || t.x - e.x
                },
                rightwardTopToBottom: function(t, e) {
                    return t.x - e.x || t.y - e.y
                }
            };
            return e
        }
        if ("function" == typeof define && define.amd) define("packery/js/packer", ["./rect"], e);
        else if ("object" == typeof exports) module.exports = e(require("./rect"));
        else {
            var i = t.Packery = t.Packery || {};
            i.Packer = e(i.Rect)
        }
    }(window),
    function(t) {
        function e(t, e, i) {
            var n = t("transform"),
                o = function() {
                    e.Item.apply(this, arguments)
                };
            o.prototype = new e.Item;
            var r = o.prototype._create;
            return o.prototype._create = function() {
                r.call(this), this.rect = new i, this.placeRect = new i
            }, o.prototype.dragStart = function() {
                this.getPosition(), this.removeTransitionStyles(), this.isTransitioning && n && (this.element.style[n] = "none"), this.getSize(), this.isPlacing = !0, this.needsPositioning = !1, this.positionPlaceRect(this.position.x, this.position.y), this.isTransitioning = !1, this.didDrag = !1
            }, o.prototype.dragMove = function(t, e) {
                this.didDrag = !0;
                var i = this.layout.size;
                t -= i.paddingLeft, e -= i.paddingTop, this.positionPlaceRect(t, e)
            }, o.prototype.dragStop = function() {
                this.getPosition();
                var t = this.position.x !== this.placeRect.x,
                    e = this.position.y !== this.placeRect.y;
                this.needsPositioning = t || e, this.didDrag = !1
            }, o.prototype.positionPlaceRect = function(t, e, i) {
                this.placeRect.x = this.getPlaceRectCoord(t, !0), this.placeRect.y = this.getPlaceRectCoord(e, !1, i)
            }, o.prototype.getPlaceRectCoord = function(t, e, i) {
                var n = e ? "Width" : "Height",
                    o = this.size["outer" + n],
                    r = this.layout[e ? "columnWidth" : "rowHeight"],
                    s = this.layout.size["inner" + n];
                e || (s = Math.max(s, this.layout.maxY), this.layout.rowHeight || (s -= this.layout.gutter));
                var a;
                if (r) {
                    r += this.layout.gutter, s += e ? this.layout.gutter : 0, t = Math.round(t / r);
                    var h;
                    h = this.layout.options.isHorizontal ? e ? "ceil" : "floor" : e ? "floor" : "ceil";
                    var p = Math[h](s / r);
                    p -= Math.ceil(o / r), a = p
                } else a = s - o;
                return t = i ? t : Math.min(t, a), t *= r || 1, Math.max(0, t)
            }, o.prototype.copyPlaceRectPosition = function() {
                this.rect.x = this.placeRect.x, this.rect.y = this.placeRect.y
            }, o.prototype.removeElem = function() {
                this.element.parentNode.removeChild(this.element), this.layout.packer.addSpace(this.rect), this.emitEvent("remove", [this])
            }, o
        }
        "function" == typeof define && define.amd ? define("packery/js/item", ["get-style-property/get-style-property", "outlayer/outlayer", "./rect"], e) : "object" == typeof exports ? module.exports = e(require("desandro-get-style-property"), require("outlayer"), require("./rect")) : t.Packery.Item = e(t.getStyleProperty, t.Outlayer, t.Packery.Rect)
    }(window),
    function(t) {
        function e(t, e, i, n, o, r) {
            function s(t, e) {
                return t.position.y - e.position.y || t.position.x - e.position.x
            }

            function a(t, e) {
                return t.position.x - e.position.x || t.position.y - e.position.y
            }
            n.prototype.canFit = function(t) {
                return this.width >= t.width - 1 && this.height >= t.height - 1
            };
            var h = i.create("packery");
            return h.Item = r, h.prototype._create = function() {
                i.prototype._create.call(this), this.packer = new o, this.stamp(this.options.stamped);
                var t = this;
                this.handleDraggabilly = {
                    dragStart: function(e) {
                        t.itemDragStart(e.element)
                    },
                    dragMove: function(e) {
                        t.itemDragMove(e.element, e.position.x, e.position.y)
                    },
                    dragEnd: function(e) {
                        t.itemDragEnd(e.element)
                    }
                }, this.handleUIDraggable = {
                    start: function(e) {
                        t.itemDragStart(e.currentTarget)
                    },
                    drag: function(e, i) {
                        t.itemDragMove(e.currentTarget, i.position.left, i.position.top)
                    },
                    stop: function(e) {
                        t.itemDragEnd(e.currentTarget)
                    }
                }
            }, h.prototype._resetLayout = function() {
                this.getSize(), this._getMeasurements();
                var t = this.packer;
                this.options.isHorizontal ? (t.width = Number.POSITIVE_INFINITY, t.height = this.size.innerHeight + this.gutter, t.sortDirection = "rightwardTopToBottom") : (t.width = this.size.innerWidth + this.gutter, t.height = Number.POSITIVE_INFINITY, t.sortDirection = "downwardLeftToRight"), t.reset(), this.maxY = 0, this.maxX = 0
            }, h.prototype._getMeasurements = function() {
                this._getMeasurement("columnWidth", "width"), this._getMeasurement("rowHeight", "height"), this._getMeasurement("gutter", "width")
            }, h.prototype._getItemLayoutPosition = function(t) {
                return this._packItem(t), t.rect
            }, h.prototype._packItem = function(t) {
                this._setRectSize(t.element, t.rect), this.packer.pack(t.rect), this._setMaxXY(t.rect)
            }, h.prototype._setMaxXY = function(t) {
                this.maxX = Math.max(t.x + t.width, this.maxX), this.maxY = Math.max(t.y + t.height, this.maxY)
            }, h.prototype._setRectSize = function(t, i) {
                var n = e(t),
                    o = n.outerWidth,
                    r = n.outerHeight;
                (o || r) && (o = this._applyGridGutter(o, this.columnWidth), r = this._applyGridGutter(r, this.rowHeight)), i.width = Math.min(o, this.packer.width), i.height = Math.min(r, this.packer.height)
            }, h.prototype._applyGridGutter = function(t, e) {
                if (!e) return t + this.gutter;
                e += this.gutter;
                var i = t % e,
                    n = i && 1 > i ? "round" : "ceil";
                return t = Math[n](t / e) * e
            }, h.prototype._getContainerSize = function() {
                return this.options.isHorizontal ? {
                    width: this.maxX - this.gutter
                } : {
                    height: this.maxY - this.gutter
                }
            }, h.prototype._manageStamp = function(t) {
                var e, i = this.getItem(t);
                if (i && i.isPlacing) e = i.placeRect;
                else {
                    var o = this._getElementOffset(t);
                    e = new n({
                        x: this.options.isOriginLeft ? o.left : o.right,
                        y: this.options.isOriginTop ? o.top : o.bottom
                    })
                }
                this._setRectSize(t, e), this.packer.placed(e), this._setMaxXY(e)
            }, h.prototype.sortItemsByPosition = function() {
                var t = this.options.isHorizontal ? a : s;
                this.items.sort(t)
            }, h.prototype.fit = function(t, e, i) {
                var n = this.getItem(t);
                n && (this._getMeasurements(), this.stamp(n.element), n.getSize(), n.isPlacing = !0, e = void 0 === e ? n.rect.x : e, i = void 0 === i ? n.rect.y : i, n.positionPlaceRect(e, i, !0), this._bindFitEvents(n), n.moveTo(n.placeRect.x, n.placeRect.y), this.layout(), this.unstamp(n.element), this.sortItemsByPosition(), n.isPlacing = !1, n.copyPlaceRectPosition())
            }, h.prototype._bindFitEvents = function(t) {
                function e() {
                    n++, 2 === n && i.emitEvent("fitComplete", [i, t])
                }
                var i = this,
                    n = 0;
                t.on("layout", function() {
                    return e(), !0
                }), this.on("layoutComplete", function() {
                    return e(), !0
                })
            }, h.prototype.resize = function() {
                var t = e(this.element),
                    i = this.size && t,
                    n = this.options.isHorizontal ? "innerHeight" : "innerWidth";
                i && t[n] === this.size[n] || this.layout()
            }, h.prototype.itemDragStart = function(t) {
                this.stamp(t);
                var e = this.getItem(t);
                e && e.dragStart()
            }, h.prototype.itemDragMove = function(t, e, i) {
                function n() {
                    r.layout(), delete r.dragTimeout
                }
                var o = this.getItem(t);
                o && o.dragMove(e, i);
                var r = this;
                this.clearDragTimeout(), this.dragTimeout = setTimeout(n, 40)
            }, h.prototype.clearDragTimeout = function() {
                this.dragTimeout && clearTimeout(this.dragTimeout)
            }, h.prototype.itemDragEnd = function(e) {
                var i, n = this.getItem(e);
                if (n && (i = n.didDrag, n.dragStop()), !n || !i && !n.needsPositioning) return this.unstamp(e), void 0;
                t.add(n.element, "is-positioning-post-drag");
                var o = this._getDragEndLayoutComplete(e, n);
                n.needsPositioning ? (n.on("layout", o), n.moveTo(n.placeRect.x, n.placeRect.y)) : n && n.copyPlaceRectPosition(), this.clearDragTimeout(), this.on("layoutComplete", o), this.layout()
            }, h.prototype._getDragEndLayoutComplete = function(e, i) {
                var n = i && i.needsPositioning,
                    o = 0,
                    r = n ? 2 : 1,
                    s = this;
                return function() {
                    return o++, o !== r ? !0 : (i && (t.remove(i.element, "is-positioning-post-drag"), i.isPlacing = !1, i.copyPlaceRectPosition()), s.unstamp(e), s.sortItemsByPosition(), n && s.emitEvent("dragItemPositioned", [s, i]), !0)
                }
            }, h.prototype.bindDraggabillyEvents = function(t) {
                t.on("dragStart", this.handleDraggabilly.dragStart), t.on("dragMove", this.handleDraggabilly.dragMove), t.on("dragEnd", this.handleDraggabilly.dragEnd)
            }, h.prototype.bindUIDraggableEvents = function(t) {
                t.on("dragstart", this.handleUIDraggable.start).on("drag", this.handleUIDraggable.drag).on("dragstop", this.handleUIDraggable.stop)
            }, h.Rect = n, h.Packer = o, h
        }
        "function" == typeof define && define.amd ? define(["classie/classie", "get-size/get-size", "outlayer/outlayer", "packery/js/rect", "packery/js/packer", "packery/js/item"], e) : "object" == typeof exports ? module.exports = e(require("desandro-classie"), require("get-size"), require("outlayer"), require("./rect"), require("./packer"), require("./item")) : t.Packery = e(t.classie, t.getSize, t.Outlayer, t.Packery.Rect, t.Packery.Packer, t.Packery.Item)
    }(window);

/*!
 * jquery.counterup.js 1.0
 *
 * Copyright 2013, Benjamin Intal http://gambit.ph @bfintal
 * Released under the GPL v2 License
 *
 * Date: Nov 26, 2013
 */
(function(e) {
    "use strict";
    e.fn.counterUp = function(t) {
        var n = e.extend({
            time: 400,
            delay: 10
        }, t);
        return this.each(function() {
            var t = e(this),
                r = n,
                i = function() {
                    var e = [],
                        n = r.time / r.delay,
                        i = t.text(),
                        s = /[0-9]+,[0-9]+/.test(i);
                    i = i.replace(/,/g, "");
                    var o = /^[0-9]+$/.test(i),
                        u = /^[0-9]+\.[0-9]+$/.test(i),
                        a = u ? (i.split(".")[1] || []).length : 0;
                    for (var f = n; f >= 1; f--) {
                        var l = parseInt(i / n * f);
                        u && (l = parseFloat(i / n * f).toFixed(a));
                        if (s)
                            while (/(\d+)(\d{3})/.test(l.toString())) l = l.toString().replace(/(\d+)(\d{3})/, "$1,$2");
                        e.unshift(l)
                    }
                    t.data("counterup-nums", e);
                    t.text("0");
                    var c = function() {
                        t.text(t.data("counterup-nums").shift());
                        if (t.data("counterup-nums").length) setTimeout(t.data("counterup-func"), r.delay);
                        else {
                            delete t.data("counterup-nums");
                            t.data("counterup-nums", null);
                            t.data("counterup-func", null)
                        }
                    };
                    t.data("counterup-func", c);
                    setTimeout(t.data("counterup-func"), r.delay)
                };
            t.waypoint(i, {
                offset: "100%",
                triggerOnce: !0
            })
        })
    }
})(jQuery);

/**!
 * easyPieChart
 * Lightweight plugin to render simple, animated and retina optimized pie charts
 *
 * @license 
 * @author Robert Fleischmann <rendro87@gmail.com> (http://robert-fleischmann.de)
 * @version 2.1.5
 **/

(function(root, factory) {
    if (typeof exports === 'object') {
        module.exports = factory(require('jquery'));
    } else if (typeof define === 'function' && define.amd) {
        define(['jquery'], factory);
    } else {
        factory(root.jQuery);
    }
}(this, function($) {

    /**
     * Renderer to render the chart on a canvas object
     * @param {DOMElement} el      DOM element to host the canvas (root of the plugin)
     * @param {object}     options options object of the plugin
     */
    var CanvasRenderer = function(el, options) {
        var cachedBackground;
        var canvas = document.createElement('canvas');

        el.appendChild(canvas);

        if (typeof(G_vmlCanvasManager) !== 'undefined') {
            G_vmlCanvasManager.initElement(canvas);
        }

        var ctx = canvas.getContext('2d');

        canvas.width = canvas.height = options.size;

        // canvas on retina devices
        var scaleBy = 1;
        if (window.devicePixelRatio > 1) {
            scaleBy = window.devicePixelRatio;
            canvas.style.width = canvas.style.height = [options.size, '%'].join('');
            canvas.width = canvas.height = options.size * scaleBy;
            ctx.scale(scaleBy, scaleBy);
        }

        // move 0,0 coordinates to the center
        ctx.translate(options.size / 2, options.size / 2);

        // rotate canvas -90deg
        ctx.rotate((-1 / 2 + options.rotate / 180) * Math.PI);

        var radius = (options.size - options.lineWidth) / 2;
        if (options.scaleColor && options.scaleLength) {
            radius -= options.scaleLength + 2; // 2 is the distance between scale and bar
        }

        // IE polyfill for Date
        Date.now = Date.now || function() {
            return +(new Date());
        };

        /**
         * Draw a circle around the center of the canvas
         * @param {strong} color     Valid CSS color string
         * @param {number} lineWidth Width of the line in px
         * @param {number} percent   Percentage to draw (float between -1 and 1)
         */
        var drawCircle = function(color, lineWidth, percent) {
            percent = Math.min(Math.max(-1, percent || 0), 1);
            var isNegative = percent <= 0 ? true : false;

            ctx.beginPath();
            ctx.arc(0, 0, radius, 0, Math.PI * 2 * percent, isNegative);

            ctx.strokeStyle = color;
            ctx.lineWidth = lineWidth;

            ctx.stroke();
        };

        /**
         * Draw the scale of the chart
         */
        var drawScale = function() {
            var offset;
            var length;

            ctx.lineWidth = 1;
            ctx.fillStyle = options.scaleColor;

            ctx.save();
            for (var i = 24; i > 0; --i) {
                if (i % 6 === 0) {
                    length = options.scaleLength;
                    offset = 0;
                } else {
                    length = options.scaleLength * 0.6;
                    offset = options.scaleLength - length;
                }
                ctx.fillRect(-options.size / 2 + offset, 0, length, 1);
                ctx.rotate(Math.PI / 12);
            }
            ctx.restore();
        };

        /**
         * Request animation frame wrapper with polyfill
         * @return {function} Request animation frame method or timeout fallback
         */
        var reqAnimationFrame = (function() {
            return window.requestAnimationFrame ||
                window.webkitRequestAnimationFrame ||
                window.mozRequestAnimationFrame ||
                function(callback) {
                    window.setTimeout(callback, 1000 / 60);
                };
        }());

        /**
         * Draw the background of the plugin including the scale and the track
         */
        var drawBackground = function() {
            if (options.scaleColor) drawScale();
            if (options.trackColor) drawCircle(options.trackColor, options.lineWidth, 1);
        };

        /**
         * Canvas accessor
         */
        this.getCanvas = function() {
            return canvas;
        };

        /**
         * Canvas 2D context 'ctx' accessor
         */
        this.getCtx = function() {
            return ctx;
        };

        /**
         * Clear the complete canvas
         */
        this.clear = function() {
            ctx.clearRect(options.size / -2, options.size / -2, options.size, options.size);
        };

        /**
         * Draw the complete chart
         * @param {number} percent Percent shown by the chart between -100 and 100
         */
        this.draw = function(percent) {
            // do we need to render a background
            if (!!options.scaleColor || !!options.trackColor) {
                // getImageData and putImageData are supported
                if (ctx.getImageData && ctx.putImageData) {
                    if (!cachedBackground) {
                        drawBackground();
                        cachedBackground = ctx.getImageData(0, 0, options.size * scaleBy, options.size * scaleBy);
                    } else {
                        ctx.putImageData(cachedBackground, 0, 0);
                    }
                } else {
                    this.clear();
                    drawBackground();
                }
            } else {
                this.clear();
            }

            ctx.lineCap = options.lineCap;

            // if barcolor is a function execute it and pass the percent as a value
            var color;
            if (typeof(options.barColor) === 'function') {
                color = options.barColor(percent);
            } else {
                color = options.barColor;
            }

            // draw bar
            drawCircle(color, options.lineWidth, percent / 100);
        }.bind(this);

        /**
         * Animate from some percent to some other percentage
         * @param {number} from Starting percentage
         * @param {number} to   Final percentage
         */
        this.animate = function(from, to) {
            var startTime = Date.now();
            options.onStart(from, to);
            var animation = function() {
                var process = Math.min(Date.now() - startTime, options.animate.duration);
                var currentValue = options.easing(this, process, from, to - from, options.animate.duration);
                this.draw(currentValue);
                options.onStep(from, to, currentValue);
                if (process >= options.animate.duration) {
                    options.onStop(from, to);
                } else {
                    reqAnimationFrame(animation);
                }
            }.bind(this);

            reqAnimationFrame(animation);
        }.bind(this);
    };

    var EasyPieChart = function(el, opts) {
        var defaultOptions = {
            barColor: '#ef1e25',
            trackColor: '#f9f9f9',
            scaleColor: '#dfe0e0',
            scaleLength: 5,
            lineCap: 'round',
            lineWidth: 3,
            size: 110,
            rotate: 0,
            animate: {
                duration: 1000,
                enabled: true
            },
            easing: function(x, t, b, c, d) { // more can be found here: http://gsgd.co.uk/sandbox/jquery/easing/
                t = t / (d / 2);
                if (t < 1) {
                    return c / 2 * t * t + b;
                }
                return -c / 2 * ((--t) * (t - 2) - 1) + b;
            },
            onStart: function(from, to) {
                return;
            },
            onStep: function(from, to, currentValue) {
                return;
            },
            onStop: function(from, to) {
                return;
            }
        };

        // detect present renderer
        if (typeof(CanvasRenderer) !== 'undefined') {
            defaultOptions.renderer = CanvasRenderer;
        } else if (typeof(SVGRenderer) !== 'undefined') {
            defaultOptions.renderer = SVGRenderer;
        } else {
            throw new Error('Please load either the SVG- or the CanvasRenderer');
        }

        var options = {};
        var currentValue = 0;

        /**
         * Initialize the plugin by creating the options object and initialize rendering
         */
        var init = function() {
            this.el = el;
            this.options = options;

            // merge user options into default options
            for (var i in defaultOptions) {
                if (defaultOptions.hasOwnProperty(i)) {
                    options[i] = opts && typeof(opts[i]) !== 'undefined' ? opts[i] : defaultOptions[i];
                    if (typeof(options[i]) === 'function') {
                        options[i] = options[i].bind(this);
                    }
                }
            }

            // check for jQuery easing
            if (typeof(options.easing) === 'string' && typeof(jQuery) !== 'undefined' && jQuery.isFunction(jQuery.easing[options.easing])) {
                options.easing = jQuery.easing[options.easing];
            } else {
                options.easing = defaultOptions.easing;
            }

            // process earlier animate option to avoid bc breaks
            if (typeof(options.animate) === 'number') {
                options.animate = {
                    duration: options.animate,
                    enabled: true
                };
            }

            if (typeof(options.animate) === 'boolean' && !options.animate) {
                options.animate = {
                    duration: 1000,
                    enabled: options.animate
                };
            }

            // create renderer
            this.renderer = new options.renderer(el, options);

            // initial draw
            this.renderer.draw(currentValue);

            // initial update
            if (el.dataset && el.dataset.percent) {
                this.update(parseFloat(el.dataset.percent));
            } else if (el.getAttribute && el.getAttribute('data-percent')) {
                this.update(parseFloat(el.getAttribute('data-percent')));
            }
        }.bind(this);

        /**
         * Update the value of the chart
         * @param  {number} newValue Number between 0 and 100
         * @return {object}          Instance of the plugin for method chaining
         */
        this.update = function(newValue) {
            newValue = parseFloat(newValue);
            if (options.animate.enabled) {
                this.renderer.animate(currentValue, newValue);
            } else {
                this.renderer.draw(newValue);
            }
            currentValue = newValue;
            return this;
        }.bind(this);

        /**
         * Disable animation
         * @return {object} Instance of the plugin for method chaining
         */
        this.disableAnimation = function() {
            options.animate.enabled = false;
            return this;
        };

        /**
         * Enable animation
         * @return {object} Instance of the plugin for method chaining
         */
        this.enableAnimation = function() {
            options.animate.enabled = true;
            return this;
        };

        init();
    };

    $.fn.easyPieChart = function(options) {
        return this.each(function() {
            var instanceOptions;

            if (!$.data(this, 'easyPieChart')) {
                instanceOptions = $.extend({}, options, $(this).data());
                $.data(this, 'easyPieChart', new EasyPieChart(this, instanceOptions));
            }
        });
    };

}));

// Generated by CoffeeScript 1.6.2
/*!
jQuery Waypoints - v2.0.5
Copyright (c) 2011-2014 Caleb Troughton
Licensed under the MIT license.
https://github.com/imakewebthings/jquery-waypoints/blob/master/licenses.txt
*/
(function() {
    var t = [].indexOf || function(t) {
            for (var e = 0, n = this.length; e < n; e++) {
                if (e in this && this[e] === t) return e
            }
            return -1
        },
        e = [].slice;
    (function(t, e) {
        if (typeof define === "function" && define.amd) {
            return define("waypoints", ["jquery"], function(n) {
                return e(n, t)
            })
        } else {
            return e(t.jQuery, t)
        }
    })(window, function(n, r) {
        var i, o, l, s, f, u, c, a, h, d, p, y, v, w, g, m;
        i = n(r);
        a = t.call(r, "ontouchstart") >= 0;
        s = {
            horizontal: {},
            vertical: {}
        };
        f = 1;
        c = {};
        u = "waypoints-context-id";
        p = "resize.waypoints";
        y = "scroll.waypoints";
        v = 1;
        w = "waypoints-waypoint-ids";
        g = "waypoint";
        m = "waypoints";
        o = function() {
            function t(t) {
                var e = this;
                this.$element = t;
                this.element = t[0];
                this.didResize = false;
                this.didScroll = false;
                this.id = "context" + f++;
                this.oldScroll = {
                    x: t.scrollLeft(),
                    y: t.scrollTop()
                };
                this.waypoints = {
                    horizontal: {},
                    vertical: {}
                };
                this.element[u] = this.id;
                c[this.id] = this;
                t.bind(y, function() {
                    var t;
                    if (!(e.didScroll || a)) {
                        e.didScroll = true;
                        t = function() {
                            e.doScroll();
                            return e.didScroll = false
                        };
                        return r.setTimeout(t, n[m].settings.scrollThrottle)
                    }
                });
                t.bind(p, function() {
                    var t;
                    if (!e.didResize) {
                        e.didResize = true;
                        t = function() {
                            n[m]("refresh");
                            return e.didResize = false
                        };
                        return r.setTimeout(t, n[m].settings.resizeThrottle)
                    }
                })
            }
            t.prototype.doScroll = function() {
                var t, e = this;
                t = {
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
                };
                if (a && (!t.vertical.oldScroll || !t.vertical.newScroll)) {
                    n[m]("refresh")
                }
                n.each(t, function(t, r) {
                    var i, o, l;
                    l = [];
                    o = r.newScroll > r.oldScroll;
                    i = o ? r.forward : r.backward;
                    n.each(e.waypoints[t], function(t, e) {
                        var n, i;
                        if (r.oldScroll < (n = e.offset) && n <= r.newScroll) {
                            return l.push(e)
                        } else if (r.newScroll < (i = e.offset) && i <= r.oldScroll) {
                            return l.push(e)
                        }
                    });
                    l.sort(function(t, e) {
                        return t.offset - e.offset
                    });
                    if (!o) {
                        l.reverse()
                    }
                    return n.each(l, function(t, e) {
                        if (e.options.continuous || t === l.length - 1) {
                            return e.trigger([i])
                        }
                    })
                });
                return this.oldScroll = {
                    x: t.horizontal.newScroll,
                    y: t.vertical.newScroll
                }
            };
            t.prototype.refresh = function() {
                var t, e, r, i = this;
                r = n.isWindow(this.element);
                e = this.$element.offset();
                this.doScroll();
                t = {
                    horizontal: {
                        contextOffset: r ? 0 : e.left,
                        contextScroll: r ? 0 : this.oldScroll.x,
                        contextDimension: this.$element.width(),
                        oldScroll: this.oldScroll.x,
                        forward: "right",
                        backward: "left",
                        offsetProp: "left"
                    },
                    vertical: {
                        contextOffset: r ? 0 : e.top,
                        contextScroll: r ? 0 : this.oldScroll.y,
                        contextDimension: r ? n[m]("viewportHeight") : this.$element.height(),
                        oldScroll: this.oldScroll.y,
                        forward: "down",
                        backward: "up",
                        offsetProp: "top"
                    }
                };
                return n.each(t, function(t, e) {
                    return n.each(i.waypoints[t], function(t, r) {
                        var i, o, l, s, f;
                        i = r.options.offset;
                        l = r.offset;
                        o = n.isWindow(r.element) ? 0 : r.$element.offset()[e.offsetProp];
                        if (n.isFunction(i)) {
                            i = i.apply(r.element)
                        } else if (typeof i === "string") {
                            i = parseFloat(i);
                            if (r.options.offset.indexOf("%") > -1) {
                                i = Math.ceil(e.contextDimension * i / 100)
                            }
                        }
                        r.offset = o - e.contextOffset + e.contextScroll - i;
                        if (r.options.onlyOnScroll && l != null || !r.enabled) {
                            return
                        }
                        if (l !== null && l < (s = e.oldScroll) && s <= r.offset) {
                            return r.trigger([e.backward])
                        } else if (l !== null && l > (f = e.oldScroll) && f >= r.offset) {
                            return r.trigger([e.forward])
                        } else if (l === null && e.oldScroll >= r.offset) {
                            return r.trigger([e.forward])
                        }
                    })
                })
            };
            t.prototype.checkEmpty = function() {
                if (n.isEmptyObject(this.waypoints.horizontal) && n.isEmptyObject(this.waypoints.vertical)) {
                    this.$element.unbind([p, y].join(" "));
                    return delete c[this.id]
                }
            };
            return t
        }();
        l = function() {
            function t(t, e, r) {
                var i, o;
                if (r.offset === "bottom-in-view") {
                    r.offset = function() {
                        var t;
                        t = n[m]("viewportHeight");
                        if (!n.isWindow(e.element)) {
                            t = e.$element.height()
                        }
                        return t - n(this).outerHeight()
                    }
                }
                this.$element = t;
                this.element = t[0];
                this.axis = r.horizontal ? "horizontal" : "vertical";
                this.callback = r.handler;
                this.context = e;
                this.enabled = r.enabled;
                this.id = "waypoints" + v++;
                this.offset = null;
                this.options = r;
                e.waypoints[this.axis][this.id] = this;
                s[this.axis][this.id] = this;
                i = (o = this.element[w]) != null ? o : [];
                i.push(this.id);
                this.element[w] = i
            }
            t.prototype.trigger = function(t) {
                if (!this.enabled) {
                    return
                }
                if (this.callback != null) {
                    this.callback.apply(this.element, t)
                }
                if (this.options.triggerOnce) {
                    return this.destroy()
                }
            };
            t.prototype.disable = function() {
                return this.enabled = false
            };
            t.prototype.enable = function() {
                this.context.refresh();
                return this.enabled = true
            };
            t.prototype.destroy = function() {
                delete s[this.axis][this.id];
                delete this.context.waypoints[this.axis][this.id];
                return this.context.checkEmpty()
            };
            t.getWaypointsByElement = function(t) {
                var e, r;
                r = t[w];
                if (!r) {
                    return []
                }
                e = n.extend({}, s.horizontal, s.vertical);
                return n.map(r, function(t) {
                    return e[t]
                })
            };
            return t
        }();
        d = {
            init: function(t, e) {
                var r;
                e = n.extend({}, n.fn[g].defaults, e);
                if ((r = e.handler) == null) {
                    e.handler = t
                }
                this.each(function() {
                    var t, r, i, s;
                    t = n(this);
                    i = (s = e.context) != null ? s : n.fn[g].defaults.context;
                    if (!n.isWindow(i)) {
                        i = t.closest(i)
                    }
                    i = n(i);
                    r = c[i[0][u]];
                    if (!r) {
                        r = new o(i)
                    }
                    return new l(t, r, e)
                });
                n[m]("refresh");
                return this
            },
            disable: function() {
                return d._invoke.call(this, "disable")
            },
            enable: function() {
                return d._invoke.call(this, "enable")
            },
            destroy: function() {
                return d._invoke.call(this, "destroy")
            },
            prev: function(t, e) {
                return d._traverse.call(this, t, e, function(t, e, n) {
                    if (e > 0) {
                        return t.push(n[e - 1])
                    }
                })
            },
            next: function(t, e) {
                return d._traverse.call(this, t, e, function(t, e, n) {
                    if (e < n.length - 1) {
                        return t.push(n[e + 1])
                    }
                })
            },
            _traverse: function(t, e, i) {
                var o, l;
                if (t == null) {
                    t = "vertical"
                }
                if (e == null) {
                    e = r
                }
                l = h.aggregate(e);
                o = [];
                this.each(function() {
                    var e;
                    e = n.inArray(this, l[t]);
                    return i(o, e, l[t])
                });
                return this.pushStack(o)
            },
            _invoke: function(t) {
                this.each(function() {
                    var e;
                    e = l.getWaypointsByElement(this);
                    return n.each(e, function(e, n) {
                        n[t]();
                        return true
                    })
                });
                return this
            }
        };
        n.fn[g] = function() {
            var t, r;
            r = arguments[0], t = 2 <= arguments.length ? e.call(arguments, 1) : [];
            if (d[r]) {
                return d[r].apply(this, t)
            } else if (n.isFunction(r)) {
                return d.init.apply(this, arguments)
            } else if (n.isPlainObject(r)) {
                return d.init.apply(this, [null, r])
            } else if (!r) {
                return n.error("jQuery Waypoints needs a callback function or handler option.")
            } else {
                return n.error("The " + r + " method does not exist in jQuery Waypoints.")
            }
        };
        n.fn[g].defaults = {
            context: r,
            continuous: true,
            enabled: true,
            horizontal: false,
            offset: 0,
            triggerOnce: false
        };
        h = {
            refresh: function() {
                return n.each(c, function(t, e) {
                    return e.refresh()
                })
            },
            viewportHeight: function() {
                var t;
                return (t = r.innerHeight) != null ? t : i.height()
            },
            aggregate: function(t) {
                var e, r, i;
                e = s;
                if (t) {
                    e = (i = c[n(t)[0][u]]) != null ? i.waypoints : void 0
                }
                if (!e) {
                    return []
                }
                r = {
                    horizontal: [],
                    vertical: []
                };
                n.each(r, function(t, i) {
                    n.each(e[t], function(t, e) {
                        return i.push(e)
                    });
                    i.sort(function(t, e) {
                        return t.offset - e.offset
                    });
                    r[t] = n.map(i, function(t) {
                        return t.element
                    });
                    return r[t] = n.unique(r[t])
                });
                return r
            },
            above: function(t) {
                if (t == null) {
                    t = r
                }
                return h._filter(t, "vertical", function(t, e) {
                    return e.offset <= t.oldScroll.y
                })
            },
            below: function(t) {
                if (t == null) {
                    t = r
                }
                return h._filter(t, "vertical", function(t, e) {
                    return e.offset > t.oldScroll.y
                })
            },
            left: function(t) {
                if (t == null) {
                    t = r
                }
                return h._filter(t, "horizontal", function(t, e) {
                    return e.offset <= t.oldScroll.x
                })
            },
            right: function(t) {
                if (t == null) {
                    t = r
                }
                return h._filter(t, "horizontal", function(t, e) {
                    return e.offset > t.oldScroll.x
                })
            },
            enable: function() {
                return h._invoke("enable")
            },
            disable: function() {
                return h._invoke("disable")
            },
            destroy: function() {
                return h._invoke("destroy")
            },
            extendFn: function(t, e) {
                return d[t] = e
            },
            _invoke: function(t) {
                var e;
                e = n.extend({}, s.vertical, s.horizontal);
                return n.each(e, function(e, n) {
                    n[t]();
                    return true
                })
            },
            _filter: function(t, e, r) {
                var i, o;
                i = c[n(t)[0][u]];
                if (!i) {
                    return []
                }
                o = [];
                n.each(i.waypoints[e], function(t, e) {
                    if (r(i, e)) {
                        return o.push(e)
                    }
                });
                o.sort(function(t, e) {
                    return t.offset - e.offset
                });
                return n.map(o, function(t) {
                    return t.element
                })
            }
        };
        n[m] = function() {
            var t, n;
            n = arguments[0], t = 2 <= arguments.length ? e.call(arguments, 1) : [];
            if (h[n]) {
                return h[n].apply(null, t)
            } else {
                return h.aggregate.call(null, n)
            }
        };
        n[m].settings = {
            resizeThrottle: 100,
            scrollThrottle: 30
        };
        return i.on("load.waypoints", function() {
            return n[m]("refresh")
        })
    })
}).call(this);