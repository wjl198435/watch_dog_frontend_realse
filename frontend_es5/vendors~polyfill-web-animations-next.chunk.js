(self["webpackJsonp"] = self["webpackJsonp"] || []).push([["vendors~polyfill-web-animations-next"],{

/***/ "./node_modules/web-animations-js/web-animations-next-lite.min.js":
/*!************************************************************************!*\
  !*** ./node_modules/web-animations-js/web-animations-next-lite.min.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Copyright 2014 Google Inc. All rights reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
//     You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//     See the License for the specific language governing permissions and
// limitations under the License.
!function (a, b) {
  var c = {},
      d = {},
      e = {};
  !function (a, b) {
    function c(a) {
      if ("number" == typeof a) return a;
      var b = {};

      for (var c in a) {
        b[c] = a[c];
      }

      return b;
    }

    function d() {
      this._delay = 0, this._endDelay = 0, this._fill = "none", this._iterationStart = 0, this._iterations = 1, this._duration = 0, this._playbackRate = 1, this._direction = "normal", this._easing = "linear", this._easingFunction = x;
    }

    function e() {
      return a.isDeprecated("Invalid timing inputs", "2016-03-02", "TypeError exceptions will be thrown instead.", !0);
    }

    function f(b, c, e) {
      var f = new d();
      return c && (f.fill = "both", f.duration = "auto"), "number" != typeof b || isNaN(b) ? void 0 !== b && Object.getOwnPropertyNames(b).forEach(function (c) {
        if ("auto" != b[c]) {
          if (("number" == typeof f[c] || "duration" == c) && ("number" != typeof b[c] || isNaN(b[c]))) return;
          if ("fill" == c && -1 == v.indexOf(b[c])) return;
          if ("direction" == c && -1 == w.indexOf(b[c])) return;
          if ("playbackRate" == c && 1 !== b[c] && a.isDeprecated("AnimationEffectTiming.playbackRate", "2014-11-28", "Use Animation.playbackRate instead.")) return;
          f[c] = b[c];
        }
      }) : f.duration = b, f;
    }

    function g(a) {
      return "number" == typeof a && (a = isNaN(a) ? {
        duration: 0
      } : {
        duration: a
      }), a;
    }

    function h(b, c) {
      return b = a.numericTimingToObject(b), f(b, c);
    }

    function i(a, b, c, d) {
      return a < 0 || a > 1 || c < 0 || c > 1 ? x : function (e) {
        function f(a, b, c) {
          return 3 * a * (1 - c) * (1 - c) * c + 3 * b * (1 - c) * c * c + c * c * c;
        }

        if (e <= 0) {
          var g = 0;
          return a > 0 ? g = b / a : !b && c > 0 && (g = d / c), g * e;
        }

        if (e >= 1) {
          var h = 0;
          return c < 1 ? h = (d - 1) / (c - 1) : 1 == c && a < 1 && (h = (b - 1) / (a - 1)), 1 + h * (e - 1);
        }

        for (var i = 0, j = 1; i < j;) {
          var k = (i + j) / 2,
              l = f(a, c, k);
          if (Math.abs(e - l) < 1e-5) return f(b, d, k);
          l < e ? i = k : j = k;
        }

        return f(b, d, k);
      };
    }

    function j(a, b) {
      return function (c) {
        if (c >= 1) return 1;
        var d = 1 / a;
        return (c += b * d) - c % d;
      };
    }

    function k(a) {
      C || (C = document.createElement("div").style), C.animationTimingFunction = "", C.animationTimingFunction = a;
      var b = C.animationTimingFunction;
      if ("" == b && e()) throw new TypeError(a + " is not a valid value for easing");
      return b;
    }

    function l(a) {
      if ("linear" == a) return x;
      var b = E.exec(a);
      if (b) return i.apply(this, b.slice(1).map(Number));
      var c = F.exec(a);
      return c ? j(Number(c[1]), {
        start: y,
        middle: z,
        end: A
      }[c[2]]) : B[a] || x;
    }

    function m(a) {
      return Math.abs(n(a) / a.playbackRate);
    }

    function n(a) {
      return 0 === a.duration || 0 === a.iterations ? 0 : a.duration * a.iterations;
    }

    function o(a, b, c) {
      if (null == b) return G;
      var d = c.delay + a + c.endDelay;
      return b < Math.min(c.delay, d) ? H : b >= Math.min(c.delay + a, d) ? I : J;
    }

    function p(a, b, c, d, e) {
      switch (d) {
        case H:
          return "backwards" == b || "both" == b ? 0 : null;

        case J:
          return c - e;

        case I:
          return "forwards" == b || "both" == b ? a : null;

        case G:
          return null;
      }
    }

    function q(a, b, c, d, e) {
      var f = e;
      return 0 === a ? b !== H && (f += c) : f += d / a, f;
    }

    function r(a, b, c, d, e, f) {
      var g = a === 1 / 0 ? b % 1 : a % 1;
      return 0 !== g || c !== I || 0 === d || 0 === e && 0 !== f || (g = 1), g;
    }

    function s(a, b, c, d) {
      return a === I && b === 1 / 0 ? 1 / 0 : 1 === c ? Math.floor(d) - 1 : Math.floor(d);
    }

    function t(a, b, c) {
      var d = a;

      if ("normal" !== a && "reverse" !== a) {
        var e = b;
        "alternate-reverse" === a && (e += 1), d = "normal", e !== 1 / 0 && e % 2 != 0 && (d = "reverse");
      }

      return "normal" === d ? c : 1 - c;
    }

    function u(a, b, c) {
      var d = o(a, b, c),
          e = p(a, c.fill, b, d, c.delay);
      if (null === e) return null;
      var f = q(c.duration, d, c.iterations, e, c.iterationStart),
          g = r(f, c.iterationStart, d, c.iterations, e, c.duration),
          h = s(d, c.iterations, g, f),
          i = t(c.direction, h, g);
      return c._easingFunction(i);
    }

    var v = "backwards|forwards|both|none".split("|"),
        w = "reverse|alternate|alternate-reverse".split("|"),
        x = function x(a) {
      return a;
    };

    d.prototype = {
      _setMember: function _setMember(b, c) {
        this["_" + b] = c, this._effect && (this._effect._timingInput[b] = c, this._effect._timing = a.normalizeTimingInput(this._effect._timingInput), this._effect.activeDuration = a.calculateActiveDuration(this._effect._timing), this._effect._animation && this._effect._animation._rebuildUnderlyingAnimation());
      },

      get playbackRate() {
        return this._playbackRate;
      },

      set delay(a) {
        this._setMember("delay", a);
      },

      get delay() {
        return this._delay;
      },

      set endDelay(a) {
        this._setMember("endDelay", a);
      },

      get endDelay() {
        return this._endDelay;
      },

      set fill(a) {
        this._setMember("fill", a);
      },

      get fill() {
        return this._fill;
      },

      set iterationStart(a) {
        if ((isNaN(a) || a < 0) && e()) throw new TypeError("iterationStart must be a non-negative number, received: " + timing.iterationStart);

        this._setMember("iterationStart", a);
      },

      get iterationStart() {
        return this._iterationStart;
      },

      set duration(a) {
        if ("auto" != a && (isNaN(a) || a < 0) && e()) throw new TypeError("duration must be non-negative or auto, received: " + a);

        this._setMember("duration", a);
      },

      get duration() {
        return this._duration;
      },

      set direction(a) {
        this._setMember("direction", a);
      },

      get direction() {
        return this._direction;
      },

      set easing(a) {
        this._easingFunction = l(k(a)), this._setMember("easing", a);
      },

      get easing() {
        return this._easing;
      },

      set iterations(a) {
        if ((isNaN(a) || a < 0) && e()) throw new TypeError("iterations must be non-negative, received: " + a);

        this._setMember("iterations", a);
      },

      get iterations() {
        return this._iterations;
      }

    };
    var y = 1,
        z = .5,
        A = 0,
        B = {
      ease: i(.25, .1, .25, 1),
      "ease-in": i(.42, 0, 1, 1),
      "ease-out": i(0, 0, .58, 1),
      "ease-in-out": i(.42, 0, .58, 1),
      "step-start": j(1, y),
      "step-middle": j(1, z),
      "step-end": j(1, A)
    },
        C = null,
        D = "\\s*(-?\\d+\\.?\\d*|-?\\.\\d+)\\s*",
        E = new RegExp("cubic-bezier\\(" + D + "," + D + "," + D + "," + D + "\\)"),
        F = /steps\(\s*(\d+)\s*,\s*(start|middle|end)\s*\)/,
        G = 0,
        H = 1,
        I = 2,
        J = 3;
    a.cloneTimingInput = c, a.makeTiming = f, a.numericTimingToObject = g, a.normalizeTimingInput = h, a.calculateActiveDuration = m, a.calculateIterationProgress = u, a.calculatePhase = o, a.normalizeEasing = k, a.parseEasingFunction = l;
  }(c), function (a, b) {
    function c(a, b) {
      return a in k ? k[a][b] || b : b;
    }

    function d(a) {
      return "display" === a || 0 === a.lastIndexOf("animation", 0) || 0 === a.lastIndexOf("transition", 0);
    }

    function e(a, b, e) {
      if (!d(a)) {
        var f = h[a];

        if (f) {
          i.style[a] = b;

          for (var g in f) {
            var j = f[g],
                k = i.style[j];
            e[j] = c(j, k);
          }
        } else e[a] = c(a, b);
      }
    }

    function f(a) {
      var b = [];

      for (var c in a) {
        if (!(c in ["easing", "offset", "composite"])) {
          var d = a[c];
          Array.isArray(d) || (d = [d]);

          for (var e, f = d.length, g = 0; g < f; g++) {
            e = {}, e.offset = "offset" in a ? a.offset : 1 == f ? 1 : g / (f - 1), "easing" in a && (e.easing = a.easing), "composite" in a && (e.composite = a.composite), e[c] = d[g], b.push(e);
          }
        }
      }

      return b.sort(function (a, b) {
        return a.offset - b.offset;
      }), b;
    }

    function g(b) {
      function c() {
        var a = d.length;
        null == d[a - 1].offset && (d[a - 1].offset = 1), a > 1 && null == d[0].offset && (d[0].offset = 0);

        for (var b = 0, c = d[0].offset, e = 1; e < a; e++) {
          var f = d[e].offset;

          if (null != f) {
            for (var g = 1; g < e - b; g++) {
              d[b + g].offset = c + (f - c) * g / (e - b);
            }

            b = e, c = f;
          }
        }
      }

      if (null == b) return [];
      window.Symbol && Symbol.iterator && Array.prototype.from && b[Symbol.iterator] && (b = Array.from(b)), Array.isArray(b) || (b = f(b));

      for (var d = b.map(function (b) {
        var c = {};

        for (var d in b) {
          var f = b[d];

          if ("offset" == d) {
            if (null != f) {
              if (f = Number(f), !isFinite(f)) throw new TypeError("Keyframe offsets must be numbers.");
              if (f < 0 || f > 1) throw new TypeError("Keyframe offsets must be between 0 and 1.");
            }
          } else if ("composite" == d) {
            if ("add" == f || "accumulate" == f) throw {
              type: DOMException.NOT_SUPPORTED_ERR,
              name: "NotSupportedError",
              message: "add compositing is not supported"
            };
            if ("replace" != f) throw new TypeError("Invalid composite mode " + f + ".");
          } else f = "easing" == d ? a.normalizeEasing(f) : "" + f;

          e(d, f, c);
        }

        return void 0 == c.offset && (c.offset = null), void 0 == c.easing && (c.easing = "linear"), c;
      }), g = !0, h = -1 / 0, i = 0; i < d.length; i++) {
        var j = d[i].offset;

        if (null != j) {
          if (j < h) throw new TypeError("Keyframes are not loosely sorted by offset. Sort or specify offsets.");
          h = j;
        } else g = !1;
      }

      return d = d.filter(function (a) {
        return a.offset >= 0 && a.offset <= 1;
      }), g || c(), d;
    }

    var h = {
      background: ["backgroundImage", "backgroundPosition", "backgroundSize", "backgroundRepeat", "backgroundAttachment", "backgroundOrigin", "backgroundClip", "backgroundColor"],
      border: ["borderTopColor", "borderTopStyle", "borderTopWidth", "borderRightColor", "borderRightStyle", "borderRightWidth", "borderBottomColor", "borderBottomStyle", "borderBottomWidth", "borderLeftColor", "borderLeftStyle", "borderLeftWidth"],
      borderBottom: ["borderBottomWidth", "borderBottomStyle", "borderBottomColor"],
      borderColor: ["borderTopColor", "borderRightColor", "borderBottomColor", "borderLeftColor"],
      borderLeft: ["borderLeftWidth", "borderLeftStyle", "borderLeftColor"],
      borderRadius: ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius"],
      borderRight: ["borderRightWidth", "borderRightStyle", "borderRightColor"],
      borderTop: ["borderTopWidth", "borderTopStyle", "borderTopColor"],
      borderWidth: ["borderTopWidth", "borderRightWidth", "borderBottomWidth", "borderLeftWidth"],
      flex: ["flexGrow", "flexShrink", "flexBasis"],
      font: ["fontFamily", "fontSize", "fontStyle", "fontVariant", "fontWeight", "lineHeight"],
      margin: ["marginTop", "marginRight", "marginBottom", "marginLeft"],
      outline: ["outlineColor", "outlineStyle", "outlineWidth"],
      padding: ["paddingTop", "paddingRight", "paddingBottom", "paddingLeft"]
    },
        i = document.createElementNS("http://www.w3.org/1999/xhtml", "div"),
        j = {
      thin: "1px",
      medium: "3px",
      thick: "5px"
    },
        k = {
      borderBottomWidth: j,
      borderLeftWidth: j,
      borderRightWidth: j,
      borderTopWidth: j,
      fontSize: {
        "xx-small": "60%",
        "x-small": "75%",
        small: "89%",
        medium: "100%",
        large: "120%",
        "x-large": "150%",
        "xx-large": "200%"
      },
      fontWeight: {
        normal: "400",
        bold: "700"
      },
      outlineWidth: j,
      textShadow: {
        none: "0px 0px 0px transparent"
      },
      boxShadow: {
        none: "0px 0px 0px 0px transparent"
      }
    };
    a.convertToArrayForm = f, a.normalizeKeyframes = g;
  }(c), function (a) {
    var b = {};
    a.isDeprecated = function (a, c, d, e) {
      var f = e ? "are" : "is",
          g = new Date(),
          h = new Date(c);
      return h.setMonth(h.getMonth() + 3), !(g < h && (a in b || console.warn("Web Animations: " + a + " " + f + " deprecated and will stop working on " + h.toDateString() + ". " + d), b[a] = !0, 1));
    }, a.deprecated = function (b, c, d, e) {
      var f = e ? "are" : "is";
      if (a.isDeprecated(b, c, d, e)) throw new Error(b + " " + f + " no longer supported. " + d);
    };
  }(c), function () {
    if (document.documentElement.animate) {
      var a = document.documentElement.animate([], 0),
          b = !0;
      if (a && (b = !1, "play|currentTime|pause|reverse|playbackRate|cancel|finish|startTime|playState".split("|").forEach(function (c) {
        void 0 === a[c] && (b = !0);
      })), !b) return;
    }

    !function (a, b, c) {
      function d(a) {
        for (var b = {}, c = 0; c < a.length; c++) {
          for (var d in a[c]) {
            if ("offset" != d && "easing" != d && "composite" != d) {
              var e = {
                offset: a[c].offset,
                easing: a[c].easing,
                value: a[c][d]
              };
              b[d] = b[d] || [], b[d].push(e);
            }
          }
        }

        for (var f in b) {
          var g = b[f];
          if (0 != g[0].offset || 1 != g[g.length - 1].offset) throw {
            type: DOMException.NOT_SUPPORTED_ERR,
            name: "NotSupportedError",
            message: "Partial keyframes are not supported"
          };
        }

        return b;
      }

      function e(c) {
        var d = [];

        for (var e in c) {
          for (var f = c[e], g = 0; g < f.length - 1; g++) {
            var h = g,
                i = g + 1,
                j = f[h].offset,
                k = f[i].offset,
                l = j,
                m = k;
            0 == g && (l = -1 / 0, 0 == k && (i = h)), g == f.length - 2 && (m = 1 / 0, 1 == j && (h = i)), d.push({
              applyFrom: l,
              applyTo: m,
              startOffset: f[h].offset,
              endOffset: f[i].offset,
              easingFunction: a.parseEasingFunction(f[h].easing),
              property: e,
              interpolation: b.propertyInterpolation(e, f[h].value, f[i].value)
            });
          }
        }

        return d.sort(function (a, b) {
          return a.startOffset - b.startOffset;
        }), d;
      }

      b.convertEffectInput = function (c) {
        var f = a.normalizeKeyframes(c),
            g = d(f),
            h = e(g);
        return function (a, c) {
          if (null != c) h.filter(function (a) {
            return c >= a.applyFrom && c < a.applyTo;
          }).forEach(function (d) {
            var e = c - d.startOffset,
                f = d.endOffset - d.startOffset,
                g = 0 == f ? 0 : d.easingFunction(e / f);
            b.apply(a, d.property, d.interpolation(g));
          });else for (var d in g) {
            "offset" != d && "easing" != d && "composite" != d && b.clear(a, d);
          }
        };
      };
    }(c, d), function (a, b, c) {
      function d(a) {
        return a.replace(/-(.)/g, function (a, b) {
          return b.toUpperCase();
        });
      }

      function e(a, b, c) {
        h[c] = h[c] || [], h[c].push([a, b]);
      }

      function f(a, b, c) {
        for (var f = 0; f < c.length; f++) {
          e(a, b, d(c[f]));
        }
      }

      function g(c, e, f) {
        var g = c;
        /-/.test(c) && !a.isDeprecated("Hyphenated property names", "2016-03-22", "Use camelCase instead.", !0) && (g = d(c)), "initial" != e && "initial" != f || ("initial" == e && (e = i[g]), "initial" == f && (f = i[g]));

        for (var j = e == f ? [] : h[g], k = 0; j && k < j.length; k++) {
          var l = j[k][0](e),
              m = j[k][0](f);

          if (void 0 !== l && void 0 !== m) {
            var n = j[k][1](l, m);

            if (n) {
              var o = b.Interpolation.apply(null, n);
              return function (a) {
                return 0 == a ? e : 1 == a ? f : o(a);
              };
            }
          }
        }

        return b.Interpolation(!1, !0, function (a) {
          return a ? f : e;
        });
      }

      var h = {};
      b.addPropertiesHandler = f;
      var i = {
        backgroundColor: "transparent",
        backgroundPosition: "0% 0%",
        borderBottomColor: "currentColor",
        borderBottomLeftRadius: "0px",
        borderBottomRightRadius: "0px",
        borderBottomWidth: "3px",
        borderLeftColor: "currentColor",
        borderLeftWidth: "3px",
        borderRightColor: "currentColor",
        borderRightWidth: "3px",
        borderSpacing: "2px",
        borderTopColor: "currentColor",
        borderTopLeftRadius: "0px",
        borderTopRightRadius: "0px",
        borderTopWidth: "3px",
        bottom: "auto",
        clip: "rect(0px, 0px, 0px, 0px)",
        color: "black",
        fontSize: "100%",
        fontWeight: "400",
        height: "auto",
        left: "auto",
        letterSpacing: "normal",
        lineHeight: "120%",
        marginBottom: "0px",
        marginLeft: "0px",
        marginRight: "0px",
        marginTop: "0px",
        maxHeight: "none",
        maxWidth: "none",
        minHeight: "0px",
        minWidth: "0px",
        opacity: "1.0",
        outlineColor: "invert",
        outlineOffset: "0px",
        outlineWidth: "3px",
        paddingBottom: "0px",
        paddingLeft: "0px",
        paddingRight: "0px",
        paddingTop: "0px",
        right: "auto",
        strokeDasharray: "none",
        strokeDashoffset: "0px",
        textIndent: "0px",
        textShadow: "0px 0px 0px transparent",
        top: "auto",
        transform: "",
        verticalAlign: "0px",
        visibility: "visible",
        width: "auto",
        wordSpacing: "normal",
        zIndex: "auto"
      };
      b.propertyInterpolation = g;
    }(c, d), function (a, b, c) {
      function d(b) {
        var c = a.calculateActiveDuration(b),
            d = function d(_d) {
          return a.calculateIterationProgress(c, _d, b);
        };

        return d._totalDuration = b.delay + c + b.endDelay, d;
      }

      b.KeyframeEffect = function (c, e, f, g) {
        var h,
            i = d(a.normalizeTimingInput(f)),
            j = b.convertEffectInput(e),
            k = function k() {
          j(c, h);
        };

        return k._update = function (a) {
          return null !== (h = i(a));
        }, k._clear = function () {
          j(c, null);
        }, k._hasSameTarget = function (a) {
          return c === a;
        }, k._target = c, k._totalDuration = i._totalDuration, k._id = g, k;
      };
    }(c, d), function (a, b) {
      a.apply = function (b, c, d) {
        b.style[a.propertyName(c)] = d;
      }, a.clear = function (b, c) {
        b.style[a.propertyName(c)] = "";
      };
    }(d), function (a) {
      window.Element.prototype.animate = function (b, c) {
        var d = "";
        return c && c.id && (d = c.id), a.timeline._play(a.KeyframeEffect(this, b, c, d));
      };
    }(d), function (a, b) {
      function c(a, b, d) {
        if ("number" == typeof a && "number" == typeof b) return a * (1 - d) + b * d;
        if ("boolean" == typeof a && "boolean" == typeof b) return d < .5 ? a : b;

        if (a.length == b.length) {
          for (var e = [], f = 0; f < a.length; f++) {
            e.push(c(a[f], b[f], d));
          }

          return e;
        }

        throw "Mismatched interpolation arguments " + a + ":" + b;
      }

      a.Interpolation = function (a, b, d) {
        return function (e) {
          return d(c(a, b, e));
        };
      };
    }(d), function (a, b, c) {
      a.sequenceNumber = 0;

      var d = function d(a, b, c) {
        this.target = a, this.currentTime = b, this.timelineTime = c, this.type = "finish", this.bubbles = !1, this.cancelable = !1, this.currentTarget = a, this.defaultPrevented = !1, this.eventPhase = Event.AT_TARGET, this.timeStamp = Date.now();
      };

      b.Animation = function (b) {
        this.id = "", b && b._id && (this.id = b._id), this._sequenceNumber = a.sequenceNumber++, this._currentTime = 0, this._startTime = null, this._paused = !1, this._playbackRate = 1, this._inTimeline = !0, this._finishedFlag = !0, this.onfinish = null, this._finishHandlers = [], this._effect = b, this._inEffect = this._effect._update(0), this._idle = !0, this._currentTimePending = !1;
      }, b.Animation.prototype = {
        _ensureAlive: function _ensureAlive() {
          this.playbackRate < 0 && 0 === this.currentTime ? this._inEffect = this._effect._update(-1) : this._inEffect = this._effect._update(this.currentTime), this._inTimeline || !this._inEffect && this._finishedFlag || (this._inTimeline = !0, b.timeline._animations.push(this));
        },
        _tickCurrentTime: function _tickCurrentTime(a, b) {
          a != this._currentTime && (this._currentTime = a, this._isFinished && !b && (this._currentTime = this._playbackRate > 0 ? this._totalDuration : 0), this._ensureAlive());
        },

        get currentTime() {
          return this._idle || this._currentTimePending ? null : this._currentTime;
        },

        set currentTime(a) {
          a = +a, isNaN(a) || (b.restart(), this._paused || null == this._startTime || (this._startTime = this._timeline.currentTime - a / this._playbackRate), this._currentTimePending = !1, this._currentTime != a && (this._idle && (this._idle = !1, this._paused = !0), this._tickCurrentTime(a, !0), b.applyDirtiedAnimation(this)));
        },

        get startTime() {
          return this._startTime;
        },

        set startTime(a) {
          a = +a, isNaN(a) || this._paused || this._idle || (this._startTime = a, this._tickCurrentTime((this._timeline.currentTime - this._startTime) * this.playbackRate), b.applyDirtiedAnimation(this));
        },

        get playbackRate() {
          return this._playbackRate;
        },

        set playbackRate(a) {
          if (a != this._playbackRate) {
            var c = this.currentTime;
            this._playbackRate = a, this._startTime = null, "paused" != this.playState && "idle" != this.playState && (this._finishedFlag = !1, this._idle = !1, this._ensureAlive(), b.applyDirtiedAnimation(this)), null != c && (this.currentTime = c);
          }
        },

        get _isFinished() {
          return !this._idle && (this._playbackRate > 0 && this._currentTime >= this._totalDuration || this._playbackRate < 0 && this._currentTime <= 0);
        },

        get _totalDuration() {
          return this._effect._totalDuration;
        },

        get playState() {
          return this._idle ? "idle" : null == this._startTime && !this._paused && 0 != this.playbackRate || this._currentTimePending ? "pending" : this._paused ? "paused" : this._isFinished ? "finished" : "running";
        },

        _rewind: function _rewind() {
          if (this._playbackRate >= 0) this._currentTime = 0;else {
            if (!(this._totalDuration < 1 / 0)) throw new DOMException("Unable to rewind negative playback rate animation with infinite duration", "InvalidStateError");
            this._currentTime = this._totalDuration;
          }
        },
        play: function play() {
          this._paused = !1, (this._isFinished || this._idle) && (this._rewind(), this._startTime = null), this._finishedFlag = !1, this._idle = !1, this._ensureAlive(), b.applyDirtiedAnimation(this);
        },
        pause: function pause() {
          this._isFinished || this._paused || this._idle ? this._idle && (this._rewind(), this._idle = !1) : this._currentTimePending = !0, this._startTime = null, this._paused = !0;
        },
        finish: function finish() {
          this._idle || (this.currentTime = this._playbackRate > 0 ? this._totalDuration : 0, this._startTime = this._totalDuration - this.currentTime, this._currentTimePending = !1, b.applyDirtiedAnimation(this));
        },
        cancel: function cancel() {
          this._inEffect && (this._inEffect = !1, this._idle = !0, this._paused = !1, this._isFinished = !0, this._finishedFlag = !0, this._currentTime = 0, this._startTime = null, this._effect._update(null), b.applyDirtiedAnimation(this));
        },
        reverse: function reverse() {
          this.playbackRate *= -1, this.play();
        },
        addEventListener: function addEventListener(a, b) {
          "function" == typeof b && "finish" == a && this._finishHandlers.push(b);
        },
        removeEventListener: function removeEventListener(a, b) {
          if ("finish" == a) {
            var c = this._finishHandlers.indexOf(b);

            c >= 0 && this._finishHandlers.splice(c, 1);
          }
        },
        _fireEvents: function _fireEvents(a) {
          if (this._isFinished) {
            if (!this._finishedFlag) {
              var b = new d(this, this._currentTime, a),
                  c = this._finishHandlers.concat(this.onfinish ? [this.onfinish] : []);

              setTimeout(function () {
                c.forEach(function (a) {
                  a.call(b.target, b);
                });
              }, 0), this._finishedFlag = !0;
            }
          } else this._finishedFlag = !1;
        },
        _tick: function _tick(a, b) {
          this._idle || this._paused || (null == this._startTime ? b && (this.startTime = a - this._currentTime / this.playbackRate) : this._isFinished || this._tickCurrentTime((a - this._startTime) * this.playbackRate)), b && (this._currentTimePending = !1, this._fireEvents(a));
        },

        get _needsTick() {
          return this.playState in {
            pending: 1,
            running: 1
          } || !this._finishedFlag;
        },

        _targetAnimations: function _targetAnimations() {
          var a = this._effect._target;
          return a._activeAnimations || (a._activeAnimations = []), a._activeAnimations;
        },
        _markTarget: function _markTarget() {
          var a = this._targetAnimations();

          -1 === a.indexOf(this) && a.push(this);
        },
        _unmarkTarget: function _unmarkTarget() {
          var a = this._targetAnimations(),
              b = a.indexOf(this);

          -1 !== b && a.splice(b, 1);
        }
      };
    }(c, d), function (a, b, c) {
      function d(a) {
        var b = j;
        j = [], a < q.currentTime && (a = q.currentTime), q._animations.sort(e), q._animations = h(a, !0, q._animations)[0], b.forEach(function (b) {
          b[1](a);
        }), g(), l = void 0;
      }

      function e(a, b) {
        return a._sequenceNumber - b._sequenceNumber;
      }

      function f() {
        this._animations = [], this.currentTime = window.performance && performance.now ? performance.now() : 0;
      }

      function g() {
        o.forEach(function (a) {
          a();
        }), o.length = 0;
      }

      function h(a, c, d) {
        p = !0, n = !1, b.timeline.currentTime = a, m = !1;
        var e = [],
            f = [],
            g = [],
            h = [];
        return d.forEach(function (b) {
          b._tick(a, c), b._inEffect ? (f.push(b._effect), b._markTarget()) : (e.push(b._effect), b._unmarkTarget()), b._needsTick && (m = !0);
          var d = b._inEffect || b._needsTick;
          b._inTimeline = d, d ? g.push(b) : h.push(b);
        }), o.push.apply(o, e), o.push.apply(o, f), m && requestAnimationFrame(function () {}), p = !1, [g, h];
      }

      var i = window.requestAnimationFrame,
          j = [],
          k = 0;
      window.requestAnimationFrame = function (a) {
        var b = k++;
        return 0 == j.length && i(d), j.push([b, a]), b;
      }, window.cancelAnimationFrame = function (a) {
        j.forEach(function (b) {
          b[0] == a && (b[1] = function () {});
        });
      }, f.prototype = {
        _play: function _play(c) {
          c._timing = a.normalizeTimingInput(c.timing);
          var d = new b.Animation(c);
          return d._idle = !1, d._timeline = this, this._animations.push(d), b.restart(), b.applyDirtiedAnimation(d), d;
        }
      };
      var l = void 0,
          m = !1,
          n = !1;
      b.restart = function () {
        return m || (m = !0, requestAnimationFrame(function () {}), n = !0), n;
      }, b.applyDirtiedAnimation = function (a) {
        if (!p) {
          a._markTarget();

          var c = a._targetAnimations();

          c.sort(e), h(b.timeline.currentTime, !1, c.slice())[1].forEach(function (a) {
            var b = q._animations.indexOf(a);

            -1 !== b && q._animations.splice(b, 1);
          }), g();
        }
      };
      var o = [],
          p = !1,
          q = new f();
      b.timeline = q;
    }(c, d), function (a) {
      function b(a, b) {
        var c = a.exec(b);
        if (c) return c = a.ignoreCase ? c[0].toLowerCase() : c[0], [c, b.substr(c.length)];
      }

      function c(a, b) {
        b = b.replace(/^\s*/, "");
        var c = a(b);
        if (c) return [c[0], c[1].replace(/^\s*/, "")];
      }

      function d(a, d, e) {
        a = c.bind(null, a);

        for (var f = [];;) {
          var g = a(e);
          if (!g) return [f, e];
          if (f.push(g[0]), e = g[1], !(g = b(d, e)) || "" == g[1]) return [f, e];
          e = g[1];
        }
      }

      function e(a, b) {
        for (var c = 0, d = 0; d < b.length && (!/\s|,/.test(b[d]) || 0 != c); d++) {
          if ("(" == b[d]) c++;else if (")" == b[d] && (c--, 0 == c && d++, c <= 0)) break;
        }

        var e = a(b.substr(0, d));
        return void 0 == e ? void 0 : [e, b.substr(d)];
      }

      function f(a, b) {
        for (var c = a, d = b; c && d;) {
          c > d ? c %= d : d %= c;
        }

        return c = a * b / (c + d);
      }

      function g(a) {
        return function (b) {
          var c = a(b);
          return c && (c[0] = void 0), c;
        };
      }

      function h(a, b) {
        return function (c) {
          return a(c) || [b, c];
        };
      }

      function i(b, c) {
        for (var d = [], e = 0; e < b.length; e++) {
          var f = a.consumeTrimmed(b[e], c);
          if (!f || "" == f[0]) return;
          void 0 !== f[0] && d.push(f[0]), c = f[1];
        }

        if ("" == c) return d;
      }

      function j(a, b, c, d, e) {
        for (var g = [], h = [], i = [], j = f(d.length, e.length), k = 0; k < j; k++) {
          var l = b(d[k % d.length], e[k % e.length]);
          if (!l) return;
          g.push(l[0]), h.push(l[1]), i.push(l[2]);
        }

        return [g, h, function (b) {
          var d = b.map(function (a, b) {
            return i[b](a);
          }).join(c);
          return a ? a(d) : d;
        }];
      }

      function k(a, b, c) {
        for (var d = [], e = [], f = [], g = 0, h = 0; h < c.length; h++) {
          if ("function" == typeof c[h]) {
            var i = c[h](a[g], b[g++]);
            d.push(i[0]), e.push(i[1]), f.push(i[2]);
          } else !function (a) {
            d.push(!1), e.push(!1), f.push(function () {
              return c[a];
            });
          }(h);
        }

        return [d, e, function (a) {
          for (var b = "", c = 0; c < a.length; c++) {
            b += f[c](a[c]);
          }

          return b;
        }];
      }

      a.consumeToken = b, a.consumeTrimmed = c, a.consumeRepeated = d, a.consumeParenthesised = e, a.ignore = g, a.optional = h, a.consumeList = i, a.mergeNestedRepeated = j.bind(null, null), a.mergeWrappedNestedRepeated = j, a.mergeList = k;
    }(d), function (a) {
      function b(b) {
        function c(b) {
          var c = a.consumeToken(/^inset/i, b);
          if (c) return d.inset = !0, c;
          var c = a.consumeLengthOrPercent(b);
          if (c) return d.lengths.push(c[0]), c;
          var c = a.consumeColor(b);
          return c ? (d.color = c[0], c) : void 0;
        }

        var d = {
          inset: !1,
          lengths: [],
          color: null
        },
            e = a.consumeRepeated(c, /^/, b);
        if (e && e[0].length) return [d, e[1]];
      }

      function c(c) {
        var d = a.consumeRepeated(b, /^,/, c);
        if (d && "" == d[1]) return d[0];
      }

      function d(b, c) {
        for (; b.lengths.length < Math.max(b.lengths.length, c.lengths.length);) {
          b.lengths.push({
            px: 0
          });
        }

        for (; c.lengths.length < Math.max(b.lengths.length, c.lengths.length);) {
          c.lengths.push({
            px: 0
          });
        }

        if (b.inset == c.inset && !!b.color == !!c.color) {
          for (var d, e = [], f = [[], 0], g = [[], 0], h = 0; h < b.lengths.length; h++) {
            var i = a.mergeDimensions(b.lengths[h], c.lengths[h], 2 == h);
            f[0].push(i[0]), g[0].push(i[1]), e.push(i[2]);
          }

          if (b.color && c.color) {
            var j = a.mergeColors(b.color, c.color);
            f[1] = j[0], g[1] = j[1], d = j[2];
          }

          return [f, g, function (a) {
            for (var c = b.inset ? "inset " : " ", f = 0; f < e.length; f++) {
              c += e[f](a[0][f]) + " ";
            }

            return d && (c += d(a[1])), c;
          }];
        }
      }

      function e(b, c, d, e) {
        function f(a) {
          return {
            inset: a,
            color: [0, 0, 0, 0],
            lengths: [{
              px: 0
            }, {
              px: 0
            }, {
              px: 0
            }, {
              px: 0
            }]
          };
        }

        for (var g = [], h = [], i = 0; i < d.length || i < e.length; i++) {
          var j = d[i] || f(e[i].inset),
              k = e[i] || f(d[i].inset);
          g.push(j), h.push(k);
        }

        return a.mergeNestedRepeated(b, c, g, h);
      }

      var f = e.bind(null, d, ", ");
      a.addPropertiesHandler(c, f, ["box-shadow", "text-shadow"]);
    }(d), function (a, b) {
      function c(a) {
        return a.toFixed(3).replace(/0+$/, "").replace(/\.$/, "");
      }

      function d(a, b, c) {
        return Math.min(b, Math.max(a, c));
      }

      function e(a) {
        if (/^\s*[-+]?(\d*\.)?\d+\s*$/.test(a)) return Number(a);
      }

      function f(a, b) {
        return [a, b, c];
      }

      function g(a, b) {
        if (0 != a) return i(0, 1 / 0)(a, b);
      }

      function h(a, b) {
        return [a, b, function (a) {
          return Math.round(d(1, 1 / 0, a));
        }];
      }

      function i(a, b) {
        return function (e, f) {
          return [e, f, function (e) {
            return c(d(a, b, e));
          }];
        };
      }

      function j(a) {
        var b = a.trim().split(/\s*[\s,]\s*/);

        if (0 !== b.length) {
          for (var c = [], d = 0; d < b.length; d++) {
            var f = e(b[d]);
            if (void 0 === f) return;
            c.push(f);
          }

          return c;
        }
      }

      function k(a, b) {
        if (a.length == b.length) return [a, b, function (a) {
          return a.map(c).join(" ");
        }];
      }

      function l(a, b) {
        return [a, b, Math.round];
      }

      a.clamp = d, a.addPropertiesHandler(j, k, ["stroke-dasharray"]), a.addPropertiesHandler(e, i(0, 1 / 0), ["border-image-width", "line-height"]), a.addPropertiesHandler(e, i(0, 1), ["opacity", "shape-image-threshold"]), a.addPropertiesHandler(e, g, ["flex-grow", "flex-shrink"]), a.addPropertiesHandler(e, h, ["orphans", "widows"]), a.addPropertiesHandler(e, l, ["z-index"]), a.parseNumber = e, a.parseNumberList = j, a.mergeNumbers = f, a.numberToString = c;
    }(d), function (a, b) {
      function c(a, b) {
        if ("visible" == a || "visible" == b) return [0, 1, function (c) {
          return c <= 0 ? a : c >= 1 ? b : "visible";
        }];
      }

      a.addPropertiesHandler(String, c, ["visibility"]);
    }(d), function (a, b) {
      function c(a) {
        a = a.trim(), f.fillStyle = "#000", f.fillStyle = a;
        var b = f.fillStyle;

        if (f.fillStyle = "#fff", f.fillStyle = a, b == f.fillStyle) {
          f.fillRect(0, 0, 1, 1);
          var c = f.getImageData(0, 0, 1, 1).data;
          f.clearRect(0, 0, 1, 1);
          var d = c[3] / 255;
          return [c[0] * d, c[1] * d, c[2] * d, d];
        }
      }

      function d(b, c) {
        return [b, c, function (b) {
          function c(a) {
            return Math.max(0, Math.min(255, a));
          }

          if (b[3]) for (var d = 0; d < 3; d++) {
            b[d] = Math.round(c(b[d] / b[3]));
          }
          return b[3] = a.numberToString(a.clamp(0, 1, b[3])), "rgba(" + b.join(",") + ")";
        }];
      }

      var e = document.createElementNS("http://www.w3.org/1999/xhtml", "canvas");
      e.width = e.height = 1;
      var f = e.getContext("2d");
      a.addPropertiesHandler(c, d, ["background-color", "border-bottom-color", "border-left-color", "border-right-color", "border-top-color", "color", "fill", "flood-color", "lighting-color", "outline-color", "stop-color", "stroke", "text-decoration-color"]), a.consumeColor = a.consumeParenthesised.bind(null, c), a.mergeColors = d;
    }(d), function (a, b) {
      function c(a) {
        function b() {
          var b = h.exec(a);
          g = b ? b[0] : void 0;
        }

        function c() {
          var a = Number(g);
          return b(), a;
        }

        function d() {
          if ("(" !== g) return c();
          b();
          var a = f();
          return ")" !== g ? NaN : (b(), a);
        }

        function e() {
          for (var a = d(); "*" === g || "/" === g;) {
            var c = g;
            b();
            var e = d();
            "*" === c ? a *= e : a /= e;
          }

          return a;
        }

        function f() {
          for (var a = e(); "+" === g || "-" === g;) {
            var c = g;
            b();
            var d = e();
            "+" === c ? a += d : a -= d;
          }

          return a;
        }

        var g,
            h = /([\+\-\w\.]+|[\(\)\*\/])/g;
        return b(), f();
      }

      function d(a, b) {
        if ("0" == (b = b.trim().toLowerCase()) && "px".search(a) >= 0) return {
          px: 0
        };

        if (/^[^(]*$|^calc/.test(b)) {
          b = b.replace(/calc\(/g, "(");
          var d = {};
          b = b.replace(a, function (a) {
            return d[a] = null, "U" + a;
          });

          for (var e = "U(" + a.source + ")", f = b.replace(/[-+]?(\d*\.)?\d+([Ee][-+]?\d+)?/g, "N").replace(new RegExp("N" + e, "g"), "D").replace(/\s[+-]\s/g, "O").replace(/\s/g, ""), g = [/N\*(D)/g, /(N|D)[*\/]N/g, /(N|D)O\1/g, /\((N|D)\)/g], h = 0; h < g.length;) {
            g[h].test(f) ? (f = f.replace(g[h], "$1"), h = 0) : h++;
          }

          if ("D" == f) {
            for (var i in d) {
              var j = c(b.replace(new RegExp("U" + i, "g"), "").replace(new RegExp(e, "g"), "*0"));
              if (!isFinite(j)) return;
              d[i] = j;
            }

            return d;
          }
        }
      }

      function e(a, b) {
        return f(a, b, !0);
      }

      function f(b, c, d) {
        var e,
            f = [];

        for (e in b) {
          f.push(e);
        }

        for (e in c) {
          f.indexOf(e) < 0 && f.push(e);
        }

        return b = f.map(function (a) {
          return b[a] || 0;
        }), c = f.map(function (a) {
          return c[a] || 0;
        }), [b, c, function (b) {
          var c = b.map(function (c, e) {
            return 1 == b.length && d && (c = Math.max(c, 0)), a.numberToString(c) + f[e];
          }).join(" + ");
          return b.length > 1 ? "calc(" + c + ")" : c;
        }];
      }

      var g = "px|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc",
          h = d.bind(null, new RegExp(g, "g")),
          i = d.bind(null, new RegExp(g + "|%", "g")),
          j = d.bind(null, /deg|rad|grad|turn/g);
      a.parseLength = h, a.parseLengthOrPercent = i, a.consumeLengthOrPercent = a.consumeParenthesised.bind(null, i), a.parseAngle = j, a.mergeDimensions = f;
      var k = a.consumeParenthesised.bind(null, h),
          l = a.consumeRepeated.bind(void 0, k, /^/),
          m = a.consumeRepeated.bind(void 0, l, /^,/);
      a.consumeSizePairList = m;

      var n = function n(a) {
        var b = m(a);
        if (b && "" == b[1]) return b[0];
      },
          o = a.mergeNestedRepeated.bind(void 0, e, " "),
          p = a.mergeNestedRepeated.bind(void 0, o, ",");

      a.mergeNonNegativeSizePair = o, a.addPropertiesHandler(n, p, ["background-size"]), a.addPropertiesHandler(i, e, ["border-bottom-width", "border-image-width", "border-left-width", "border-right-width", "border-top-width", "flex-basis", "font-size", "height", "line-height", "max-height", "max-width", "outline-width", "width"]), a.addPropertiesHandler(i, f, ["border-bottom-left-radius", "border-bottom-right-radius", "border-top-left-radius", "border-top-right-radius", "bottom", "left", "letter-spacing", "margin-bottom", "margin-left", "margin-right", "margin-top", "min-height", "min-width", "outline-offset", "padding-bottom", "padding-left", "padding-right", "padding-top", "perspective", "right", "shape-margin", "stroke-dashoffset", "text-indent", "top", "vertical-align", "word-spacing"]);
    }(d), function (a, b) {
      function c(b) {
        return a.consumeLengthOrPercent(b) || a.consumeToken(/^auto/, b);
      }

      function d(b) {
        var d = a.consumeList([a.ignore(a.consumeToken.bind(null, /^rect/)), a.ignore(a.consumeToken.bind(null, /^\(/)), a.consumeRepeated.bind(null, c, /^,/), a.ignore(a.consumeToken.bind(null, /^\)/))], b);
        if (d && 4 == d[0].length) return d[0];
      }

      function e(b, c) {
        return "auto" == b || "auto" == c ? [!0, !1, function (d) {
          var e = d ? b : c;
          if ("auto" == e) return "auto";
          var f = a.mergeDimensions(e, e);
          return f[2](f[0]);
        }] : a.mergeDimensions(b, c);
      }

      function f(a) {
        return "rect(" + a + ")";
      }

      var g = a.mergeWrappedNestedRepeated.bind(null, f, e, ", ");
      a.parseBox = d, a.mergeBoxes = g, a.addPropertiesHandler(d, g, ["clip"]);
    }(d), function (a, b) {
      function c(a) {
        return function (b) {
          var c = 0;
          return a.map(function (a) {
            return a === k ? b[c++] : a;
          });
        };
      }

      function d(a) {
        return a;
      }

      function e(b) {
        if ("none" == (b = b.toLowerCase().trim())) return [];

        for (var c, d = /\s*(\w+)\(([^)]*)\)/g, e = [], f = 0; c = d.exec(b);) {
          if (c.index != f) return;
          f = c.index + c[0].length;
          var g = c[1],
              h = n[g];
          if (!h) return;
          var i = c[2].split(","),
              j = h[0];
          if (j.length < i.length) return;

          for (var k = [], o = 0; o < j.length; o++) {
            var p,
                q = i[o],
                r = j[o];
            if (void 0 === (p = q ? {
              A: function A(b) {
                return "0" == b.trim() ? m : a.parseAngle(b);
              },
              N: a.parseNumber,
              T: a.parseLengthOrPercent,
              L: a.parseLength
            }[r.toUpperCase()](q) : {
              a: m,
              n: k[0],
              t: l
            }[r])) return;
            k.push(p);
          }

          if (e.push({
            t: g,
            d: k
          }), d.lastIndex == b.length) return e;
        }
      }

      function f(a) {
        return a.toFixed(6).replace(".000000", "");
      }

      function g(b, c) {
        if (b.decompositionPair !== c) {
          b.decompositionPair = c;
          var d = a.makeMatrixDecomposition(b);
        }

        if (c.decompositionPair !== b) {
          c.decompositionPair = b;
          var e = a.makeMatrixDecomposition(c);
        }

        return null == d[0] || null == e[0] ? [[!1], [!0], function (a) {
          return a ? c[0].d : b[0].d;
        }] : (d[0].push(0), e[0].push(1), [d, e, function (b) {
          var c = a.quat(d[0][3], e[0][3], b[5]);
          return a.composeMatrix(b[0], b[1], b[2], c, b[4]).map(f).join(",");
        }]);
      }

      function h(a) {
        return a.replace(/[xy]/, "");
      }

      function i(a) {
        return a.replace(/(x|y|z|3d)?$/, "3d");
      }

      function j(b, c) {
        var d = a.makeMatrixDecomposition && !0,
            e = !1;

        if (!b.length || !c.length) {
          b.length || (e = !0, b = c, c = []);

          for (var f = 0; f < b.length; f++) {
            var j = b[f].t,
                k = b[f].d,
                l = "scale" == j.substr(0, 5) ? 1 : 0;
            c.push({
              t: j,
              d: k.map(function (a) {
                if ("number" == typeof a) return l;
                var b = {};

                for (var c in a) {
                  b[c] = l;
                }

                return b;
              })
            });
          }
        }

        var m = function m(a, b) {
          return "perspective" == a && "perspective" == b || ("matrix" == a || "matrix3d" == a) && ("matrix" == b || "matrix3d" == b);
        },
            o = [],
            p = [],
            q = [];

        if (b.length != c.length) {
          if (!d) return;
          var r = g(b, c);
          o = [r[0]], p = [r[1]], q = [["matrix", [r[2]]]];
        } else for (var f = 0; f < b.length; f++) {
          var j,
              s = b[f].t,
              t = c[f].t,
              u = b[f].d,
              v = c[f].d,
              w = n[s],
              x = n[t];

          if (m(s, t)) {
            if (!d) return;
            var r = g([b[f]], [c[f]]);
            o.push(r[0]), p.push(r[1]), q.push(["matrix", [r[2]]]);
          } else {
            if (s == t) j = s;else if (w[2] && x[2] && h(s) == h(t)) j = h(s), u = w[2](u), v = x[2](v);else {
              if (!w[1] || !x[1] || i(s) != i(t)) {
                if (!d) return;
                var r = g(b, c);
                o = [r[0]], p = [r[1]], q = [["matrix", [r[2]]]];
                break;
              }

              j = i(s), u = w[1](u), v = x[1](v);
            }

            for (var y = [], z = [], A = [], B = 0; B < u.length; B++) {
              var C = "number" == typeof u[B] ? a.mergeNumbers : a.mergeDimensions,
                  r = C(u[B], v[B]);
              y[B] = r[0], z[B] = r[1], A.push(r[2]);
            }

            o.push(y), p.push(z), q.push([j, A]);
          }
        }

        if (e) {
          var D = o;
          o = p, p = D;
        }

        return [o, p, function (a) {
          return a.map(function (a, b) {
            var c = a.map(function (a, c) {
              return q[b][1][c](a);
            }).join(",");
            return "matrix" == q[b][0] && 16 == c.split(",").length && (q[b][0] = "matrix3d"), q[b][0] + "(" + c + ")";
          }).join(" ");
        }];
      }

      var k = null,
          l = {
        px: 0
      },
          m = {
        deg: 0
      },
          n = {
        matrix: ["NNNNNN", [k, k, 0, 0, k, k, 0, 0, 0, 0, 1, 0, k, k, 0, 1], d],
        matrix3d: ["NNNNNNNNNNNNNNNN", d],
        rotate: ["A"],
        rotatex: ["A"],
        rotatey: ["A"],
        rotatez: ["A"],
        rotate3d: ["NNNA"],
        perspective: ["L"],
        scale: ["Nn", c([k, k, 1]), d],
        scalex: ["N", c([k, 1, 1]), c([k, 1])],
        scaley: ["N", c([1, k, 1]), c([1, k])],
        scalez: ["N", c([1, 1, k])],
        scale3d: ["NNN", d],
        skew: ["Aa", null, d],
        skewx: ["A", null, c([k, m])],
        skewy: ["A", null, c([m, k])],
        translate: ["Tt", c([k, k, l]), d],
        translatex: ["T", c([k, l, l]), c([k, l])],
        translatey: ["T", c([l, k, l]), c([l, k])],
        translatez: ["L", c([l, l, k])],
        translate3d: ["TTL", d]
      };
      a.addPropertiesHandler(e, j, ["transform"]), a.transformToSvgMatrix = function (b) {
        var c = a.transformListToMatrix(e(b));
        return "matrix(" + f(c[0]) + " " + f(c[1]) + " " + f(c[4]) + " " + f(c[5]) + " " + f(c[12]) + " " + f(c[13]) + ")";
      };
    }(d), function (a, b) {
      function c(a, b) {
        b.concat([a]).forEach(function (b) {
          b in document.documentElement.style && (d[a] = b), e[b] = a;
        });
      }

      var d = {},
          e = {};
      c("transform", ["webkitTransform", "msTransform"]), c("transformOrigin", ["webkitTransformOrigin"]), c("perspective", ["webkitPerspective"]), c("perspectiveOrigin", ["webkitPerspectiveOrigin"]), a.propertyName = function (a) {
        return d[a] || a;
      }, a.unprefixedPropertyName = function (a) {
        return e[a] || a;
      };
    }(d);
  }(), function () {
    if (void 0 === document.createElement("div").animate([]).oncancel) {
      var a;
      if (window.performance && performance.now) var a = function a() {
        return performance.now();
      };else var a = function a() {
        return Date.now();
      };

      var b = function b(a, _b, c) {
        this.target = a, this.currentTime = _b, this.timelineTime = c, this.type = "cancel", this.bubbles = !1, this.cancelable = !1, this.currentTarget = a, this.defaultPrevented = !1, this.eventPhase = Event.AT_TARGET, this.timeStamp = Date.now();
      },
          c = window.Element.prototype.animate;

      window.Element.prototype.animate = function (d, e) {
        var f = c.call(this, d, e);
        f._cancelHandlers = [], f.oncancel = null;
        var g = f.cancel;

        f.cancel = function () {
          g.call(this);

          var c = new b(this, null, a()),
              d = this._cancelHandlers.concat(this.oncancel ? [this.oncancel] : []);

          setTimeout(function () {
            d.forEach(function (a) {
              a.call(c.target, c);
            });
          }, 0);
        };

        var h = f.addEventListener;

        f.addEventListener = function (a, b) {
          "function" == typeof b && "cancel" == a ? this._cancelHandlers.push(b) : h.call(this, a, b);
        };

        var i = f.removeEventListener;
        return f.removeEventListener = function (a, b) {
          if ("cancel" == a) {
            var c = this._cancelHandlers.indexOf(b);

            c >= 0 && this._cancelHandlers.splice(c, 1);
          } else i.call(this, a, b);
        }, f;
      };
    }
  }(), function (a) {
    var b = document.documentElement,
        c = null,
        d = !1;

    try {
      var e = getComputedStyle(b).getPropertyValue("opacity"),
          f = "0" == e ? "1" : "0";
      c = b.animate({
        opacity: [f, f]
      }, {
        duration: 1
      }), c.currentTime = 0, d = getComputedStyle(b).getPropertyValue("opacity") == f;
    } catch (a) {} finally {
      c && c.cancel();
    }

    if (!d) {
      var g = window.Element.prototype.animate;

      window.Element.prototype.animate = function (b, c) {
        return window.Symbol && Symbol.iterator && Array.prototype.from && b[Symbol.iterator] && (b = Array.from(b)), Array.isArray(b) || null === b || (b = a.convertToArrayForm(b)), g.call(this, b, c);
      };
    }
  }(c), function (a, b, c) {
    function d(a) {
      var c = b.timeline;
      c.currentTime = a, c._discardAnimations(), 0 == c._animations.length ? f = !1 : requestAnimationFrame(d);
    }

    var e = window.requestAnimationFrame;
    window.requestAnimationFrame = function (a) {
      return e(function (c) {
        b.timeline._updateAnimationsPromises(), a(c), b.timeline._updateAnimationsPromises();
      });
    }, b.AnimationTimeline = function () {
      this._animations = [], this.currentTime = void 0;
    }, b.AnimationTimeline.prototype = {
      getAnimations: function getAnimations() {
        return this._discardAnimations(), this._animations.slice();
      },
      _updateAnimationsPromises: function _updateAnimationsPromises() {
        b.animationsWithPromises = b.animationsWithPromises.filter(function (a) {
          return a._updatePromises();
        });
      },
      _discardAnimations: function _discardAnimations() {
        this._updateAnimationsPromises(), this._animations = this._animations.filter(function (a) {
          return "finished" != a.playState && "idle" != a.playState;
        });
      },
      _play: function _play(a) {
        var c = new b.Animation(a, this);
        return this._animations.push(c), b.restartWebAnimationsNextTick(), c._updatePromises(), c._animation.play(), c._updatePromises(), c;
      },
      play: function play(a) {
        return a && a.remove(), this._play(a);
      }
    };
    var f = !1;

    b.restartWebAnimationsNextTick = function () {
      f || (f = !0, requestAnimationFrame(d));
    };

    var g = new b.AnimationTimeline();
    b.timeline = g;

    try {
      Object.defineProperty(window.document, "timeline", {
        configurable: !0,
        get: function get() {
          return g;
        }
      });
    } catch (a) {}

    try {
      window.document.timeline = g;
    } catch (a) {}
  }(0, e), function (a, b, c) {
    b.animationsWithPromises = [], b.Animation = function (b, c) {
      if (this.id = "", b && b._id && (this.id = b._id), this.effect = b, b && (b._animation = this), !c) throw new Error("Animation with null timeline is not supported");
      this._timeline = c, this._sequenceNumber = a.sequenceNumber++, this._holdTime = 0, this._paused = !1, this._isGroup = !1, this._animation = null, this._childAnimations = [], this._callback = null, this._oldPlayState = "idle", this._rebuildUnderlyingAnimation(), this._animation.cancel(), this._updatePromises();
    }, b.Animation.prototype = {
      _updatePromises: function _updatePromises() {
        var a = this._oldPlayState,
            b = this.playState;
        return this._readyPromise && b !== a && ("idle" == b ? (this._rejectReadyPromise(), this._readyPromise = void 0) : "pending" == a ? this._resolveReadyPromise() : "pending" == b && (this._readyPromise = void 0)), this._finishedPromise && b !== a && ("idle" == b ? (this._rejectFinishedPromise(), this._finishedPromise = void 0) : "finished" == b ? this._resolveFinishedPromise() : "finished" == a && (this._finishedPromise = void 0)), this._oldPlayState = this.playState, this._readyPromise || this._finishedPromise;
      },
      _rebuildUnderlyingAnimation: function _rebuildUnderlyingAnimation() {
        this._updatePromises();

        var a,
            c,
            d,
            e,
            f = !!this._animation;
        f && (a = this.playbackRate, c = this._paused, d = this.startTime, e = this.currentTime, this._animation.cancel(), this._animation._wrapper = null, this._animation = null), (!this.effect || this.effect instanceof window.KeyframeEffect) && (this._animation = b.newUnderlyingAnimationForKeyframeEffect(this.effect), b.bindAnimationForKeyframeEffect(this)), (this.effect instanceof window.SequenceEffect || this.effect instanceof window.GroupEffect) && (this._animation = b.newUnderlyingAnimationForGroup(this.effect), b.bindAnimationForGroup(this)), this.effect && this.effect._onsample && b.bindAnimationForCustomEffect(this), f && (1 != a && (this.playbackRate = a), null !== d ? this.startTime = d : null !== e ? this.currentTime = e : null !== this._holdTime && (this.currentTime = this._holdTime), c && this.pause()), this._updatePromises();
      },
      _updateChildren: function _updateChildren() {
        if (this.effect && "idle" != this.playState) {
          var a = this.effect._timing.delay;

          this._childAnimations.forEach(function (c) {
            this._arrangeChildren(c, a), this.effect instanceof window.SequenceEffect && (a += b.groupChildDuration(c.effect));
          }.bind(this));
        }
      },
      _setExternalAnimation: function _setExternalAnimation(a) {
        if (this.effect && this._isGroup) for (var b = 0; b < this.effect.children.length; b++) {
          this.effect.children[b]._animation = a, this._childAnimations[b]._setExternalAnimation(a);
        }
      },
      _constructChildAnimations: function _constructChildAnimations() {
        if (this.effect && this._isGroup) {
          var a = this.effect._timing.delay;
          this._removeChildAnimations(), this.effect.children.forEach(function (c) {
            var d = b.timeline._play(c);

            this._childAnimations.push(d), d.playbackRate = this.playbackRate, this._paused && d.pause(), c._animation = this.effect._animation, this._arrangeChildren(d, a), this.effect instanceof window.SequenceEffect && (a += b.groupChildDuration(c));
          }.bind(this));
        }
      },
      _arrangeChildren: function _arrangeChildren(a, b) {
        null === this.startTime ? a.currentTime = this.currentTime - b / this.playbackRate : a.startTime !== this.startTime + b / this.playbackRate && (a.startTime = this.startTime + b / this.playbackRate);
      },

      get timeline() {
        return this._timeline;
      },

      get playState() {
        return this._animation ? this._animation.playState : "idle";
      },

      get finished() {
        return window.Promise ? (this._finishedPromise || (-1 == b.animationsWithPromises.indexOf(this) && b.animationsWithPromises.push(this), this._finishedPromise = new Promise(function (a, b) {
          this._resolveFinishedPromise = function () {
            a(this);
          }, this._rejectFinishedPromise = function () {
            b({
              type: DOMException.ABORT_ERR,
              name: "AbortError"
            });
          };
        }.bind(this)), "finished" == this.playState && this._resolveFinishedPromise()), this._finishedPromise) : (console.warn("Animation Promises require JavaScript Promise constructor"), null);
      },

      get ready() {
        return window.Promise ? (this._readyPromise || (-1 == b.animationsWithPromises.indexOf(this) && b.animationsWithPromises.push(this), this._readyPromise = new Promise(function (a, b) {
          this._resolveReadyPromise = function () {
            a(this);
          }, this._rejectReadyPromise = function () {
            b({
              type: DOMException.ABORT_ERR,
              name: "AbortError"
            });
          };
        }.bind(this)), "pending" !== this.playState && this._resolveReadyPromise()), this._readyPromise) : (console.warn("Animation Promises require JavaScript Promise constructor"), null);
      },

      get onfinish() {
        return this._animation.onfinish;
      },

      set onfinish(a) {
        this._animation.onfinish = "function" == typeof a ? function (b) {
          b.target = this, a.call(this, b);
        }.bind(this) : a;
      },

      get oncancel() {
        return this._animation.oncancel;
      },

      set oncancel(a) {
        this._animation.oncancel = "function" == typeof a ? function (b) {
          b.target = this, a.call(this, b);
        }.bind(this) : a;
      },

      get currentTime() {
        this._updatePromises();

        var a = this._animation.currentTime;
        return this._updatePromises(), a;
      },

      set currentTime(a) {
        this._updatePromises(), this._animation.currentTime = isFinite(a) ? a : Math.sign(a) * Number.MAX_VALUE, this._register(), this._forEachChild(function (b, c) {
          b.currentTime = a - c;
        }), this._updatePromises();
      },

      get startTime() {
        return this._animation.startTime;
      },

      set startTime(a) {
        this._updatePromises(), this._animation.startTime = isFinite(a) ? a : Math.sign(a) * Number.MAX_VALUE, this._register(), this._forEachChild(function (b, c) {
          b.startTime = a + c;
        }), this._updatePromises();
      },

      get playbackRate() {
        return this._animation.playbackRate;
      },

      set playbackRate(a) {
        this._updatePromises();

        var b = this.currentTime;
        this._animation.playbackRate = a, this._forEachChild(function (b) {
          b.playbackRate = a;
        }), null !== b && (this.currentTime = b), this._updatePromises();
      },

      play: function play() {
        this._updatePromises(), this._paused = !1, this._animation.play(), -1 == this._timeline._animations.indexOf(this) && this._timeline._animations.push(this), this._register(), b.awaitStartTime(this), this._forEachChild(function (a) {
          var b = a.currentTime;
          a.play(), a.currentTime = b;
        }), this._updatePromises();
      },
      pause: function pause() {
        this._updatePromises(), this.currentTime && (this._holdTime = this.currentTime), this._animation.pause(), this._register(), this._forEachChild(function (a) {
          a.pause();
        }), this._paused = !0, this._updatePromises();
      },
      finish: function finish() {
        this._updatePromises(), this._animation.finish(), this._register(), this._updatePromises();
      },
      cancel: function cancel() {
        this._updatePromises(), this._animation.cancel(), this._register(), this._removeChildAnimations(), this._updatePromises();
      },
      reverse: function reverse() {
        this._updatePromises();

        var a = this.currentTime;
        this._animation.reverse(), this._forEachChild(function (a) {
          a.reverse();
        }), null !== a && (this.currentTime = a), this._updatePromises();
      },
      addEventListener: function addEventListener(a, b) {
        var c = b;
        "function" == typeof b && (c = function (a) {
          a.target = this, b.call(this, a);
        }.bind(this), b._wrapper = c), this._animation.addEventListener(a, c);
      },
      removeEventListener: function removeEventListener(a, b) {
        this._animation.removeEventListener(a, b && b._wrapper || b);
      },
      _removeChildAnimations: function _removeChildAnimations() {
        for (; this._childAnimations.length;) {
          this._childAnimations.pop().cancel();
        }
      },
      _forEachChild: function _forEachChild(b) {
        var c = 0;

        if (this.effect.children && this._childAnimations.length < this.effect.children.length && this._constructChildAnimations(), this._childAnimations.forEach(function (a) {
          b.call(this, a, c), this.effect instanceof window.SequenceEffect && (c += a.effect.activeDuration);
        }.bind(this)), "pending" != this.playState) {
          var d = this.effect._timing,
              e = this.currentTime;
          null !== e && (e = a.calculateIterationProgress(a.calculateActiveDuration(d), e, d)), (null == e || isNaN(e)) && this._removeChildAnimations();
        }
      }
    }, window.Animation = b.Animation;
  }(c, e), function (a, b, c) {
    function d(b) {
      this._frames = a.normalizeKeyframes(b);
    }

    function e() {
      for (var a = !1; i.length;) {
        i.shift()._updateChildren(), a = !0;
      }

      return a;
    }

    var f = function f(a) {
      if (a._animation = void 0, a instanceof window.SequenceEffect || a instanceof window.GroupEffect) for (var b = 0; b < a.children.length; b++) {
        f(a.children[b]);
      }
    };

    b.removeMulti = function (a) {
      for (var b = [], c = 0; c < a.length; c++) {
        var d = a[c];
        d._parent ? (-1 == b.indexOf(d._parent) && b.push(d._parent), d._parent.children.splice(d._parent.children.indexOf(d), 1), d._parent = null, f(d)) : d._animation && d._animation.effect == d && (d._animation.cancel(), d._animation.effect = new KeyframeEffect(null, []), d._animation._callback && (d._animation._callback._animation = null), d._animation._rebuildUnderlyingAnimation(), f(d));
      }

      for (c = 0; c < b.length; c++) {
        b[c]._rebuild();
      }
    }, b.KeyframeEffect = function (b, c, e, f) {
      return this.target = b, this._parent = null, e = a.numericTimingToObject(e), this._timingInput = a.cloneTimingInput(e), this._timing = a.normalizeTimingInput(e), this.timing = a.makeTiming(e, !1, this), this.timing._effect = this, "function" == typeof c ? (a.deprecated("Custom KeyframeEffect", "2015-06-22", "Use KeyframeEffect.onsample instead."), this._normalizedKeyframes = c) : this._normalizedKeyframes = new d(c), this._keyframes = c, this.activeDuration = a.calculateActiveDuration(this._timing), this._id = f, this;
    }, b.KeyframeEffect.prototype = {
      getFrames: function getFrames() {
        return "function" == typeof this._normalizedKeyframes ? this._normalizedKeyframes : this._normalizedKeyframes._frames;
      },

      set onsample(a) {
        if ("function" == typeof this.getFrames()) throw new Error("Setting onsample on custom effect KeyframeEffect is not supported.");
        this._onsample = a, this._animation && this._animation._rebuildUnderlyingAnimation();
      },

      get parent() {
        return this._parent;
      },

      clone: function clone() {
        if ("function" == typeof this.getFrames()) throw new Error("Cloning custom effects is not supported.");
        var b = new KeyframeEffect(this.target, [], a.cloneTimingInput(this._timingInput), this._id);
        return b._normalizedKeyframes = this._normalizedKeyframes, b._keyframes = this._keyframes, b;
      },
      remove: function remove() {
        b.removeMulti([this]);
      }
    };
    var g = Element.prototype.animate;

    Element.prototype.animate = function (a, c) {
      var d = "";
      return c && c.id && (d = c.id), b.timeline._play(new b.KeyframeEffect(this, a, c, d));
    };

    var h = document.createElementNS("http://www.w3.org/1999/xhtml", "div");
    b.newUnderlyingAnimationForKeyframeEffect = function (a) {
      if (a) {
        var b = a.target || h,
            c = a._keyframes;
        "function" == typeof c && (c = []);
        var d = a._timingInput;
        d.id = a._id;
      } else var b = h,
          c = [],
          d = 0;

      return g.apply(b, [c, d]);
    }, b.bindAnimationForKeyframeEffect = function (a) {
      a.effect && "function" == typeof a.effect._normalizedKeyframes && b.bindAnimationForCustomEffect(a);
    };
    var i = [];

    b.awaitStartTime = function (a) {
      null === a.startTime && a._isGroup && (0 == i.length && requestAnimationFrame(e), i.push(a));
    };

    var j = window.getComputedStyle;
    Object.defineProperty(window, "getComputedStyle", {
      configurable: !0,
      enumerable: !0,
      value: function value() {
        b.timeline._updateAnimationsPromises();

        var a = j.apply(this, arguments);
        return e() && (a = j.apply(this, arguments)), b.timeline._updateAnimationsPromises(), a;
      }
    }), window.KeyframeEffect = b.KeyframeEffect, window.Element.prototype.getAnimations = function () {
      return document.timeline.getAnimations().filter(function (a) {
        return null !== a.effect && a.effect.target == this;
      }.bind(this));
    };
  }(c, e), function (a, b, c) {
    function d(a) {
      a._registered || (a._registered = !0, g.push(a), h || (h = !0, requestAnimationFrame(e)));
    }

    function e(a) {
      var b = g;
      g = [], b.sort(function (a, b) {
        return a._sequenceNumber - b._sequenceNumber;
      }), b = b.filter(function (a) {
        a();
        var b = a._animation ? a._animation.playState : "idle";
        return "running" != b && "pending" != b && (a._registered = !1), a._registered;
      }), g.push.apply(g, b), g.length ? (h = !0, requestAnimationFrame(e)) : h = !1;
    }

    var f = (document.createElementNS("http://www.w3.org/1999/xhtml", "div"), 0);

    b.bindAnimationForCustomEffect = function (b) {
      var c,
          e = b.effect.target,
          g = "function" == typeof b.effect.getFrames();
      c = g ? b.effect.getFrames() : b.effect._onsample;
      var h = b.effect.timing,
          i = null;
      h = a.normalizeTimingInput(h);

      var j = function j() {
        var d = j._animation ? j._animation.currentTime : null;
        null !== d && (d = a.calculateIterationProgress(a.calculateActiveDuration(h), d, h), isNaN(d) && (d = null)), d !== i && (g ? c(d, e, b.effect) : c(d, b.effect, b.effect._animation)), i = d;
      };

      j._animation = b, j._registered = !1, j._sequenceNumber = f++, b._callback = j, d(j);
    };

    var g = [],
        h = !1;

    b.Animation.prototype._register = function () {
      this._callback && d(this._callback);
    };
  }(c, e), function (a, b, c) {
    function d(a) {
      return a._timing.delay + a.activeDuration + a._timing.endDelay;
    }

    function e(b, c, d) {
      this._id = d, this._parent = null, this.children = b || [], this._reparent(this.children), c = a.numericTimingToObject(c), this._timingInput = a.cloneTimingInput(c), this._timing = a.normalizeTimingInput(c, !0), this.timing = a.makeTiming(c, !0, this), this.timing._effect = this, "auto" === this._timing.duration && (this._timing.duration = this.activeDuration);
    }

    window.SequenceEffect = function () {
      e.apply(this, arguments);
    }, window.GroupEffect = function () {
      e.apply(this, arguments);
    }, e.prototype = {
      _isAncestor: function _isAncestor(a) {
        for (var b = this; null !== b;) {
          if (b == a) return !0;
          b = b._parent;
        }

        return !1;
      },
      _rebuild: function _rebuild() {
        for (var a = this; a;) {
          "auto" === a.timing.duration && (a._timing.duration = a.activeDuration), a = a._parent;
        }

        this._animation && this._animation._rebuildUnderlyingAnimation();
      },
      _reparent: function _reparent(a) {
        b.removeMulti(a);

        for (var c = 0; c < a.length; c++) {
          a[c]._parent = this;
        }
      },
      _putChild: function _putChild(a, b) {
        for (var c = b ? "Cannot append an ancestor or self" : "Cannot prepend an ancestor or self", d = 0; d < a.length; d++) {
          if (this._isAncestor(a[d])) throw {
            type: DOMException.HIERARCHY_REQUEST_ERR,
            name: "HierarchyRequestError",
            message: c
          };
        }

        for (var d = 0; d < a.length; d++) {
          b ? this.children.push(a[d]) : this.children.unshift(a[d]);
        }

        this._reparent(a), this._rebuild();
      },
      append: function append() {
        this._putChild(arguments, !0);
      },
      prepend: function prepend() {
        this._putChild(arguments, !1);
      },

      get parent() {
        return this._parent;
      },

      get firstChild() {
        return this.children.length ? this.children[0] : null;
      },

      get lastChild() {
        return this.children.length ? this.children[this.children.length - 1] : null;
      },

      clone: function clone() {
        for (var b = a.cloneTimingInput(this._timingInput), c = [], d = 0; d < this.children.length; d++) {
          c.push(this.children[d].clone());
        }

        return this instanceof GroupEffect ? new GroupEffect(c, b) : new SequenceEffect(c, b);
      },
      remove: function remove() {
        b.removeMulti([this]);
      }
    }, window.SequenceEffect.prototype = Object.create(e.prototype), Object.defineProperty(window.SequenceEffect.prototype, "activeDuration", {
      get: function get() {
        var a = 0;
        return this.children.forEach(function (b) {
          a += d(b);
        }), Math.max(a, 0);
      }
    }), window.GroupEffect.prototype = Object.create(e.prototype), Object.defineProperty(window.GroupEffect.prototype, "activeDuration", {
      get: function get() {
        var a = 0;
        return this.children.forEach(function (b) {
          a = Math.max(a, d(b));
        }), a;
      }
    }), b.newUnderlyingAnimationForGroup = function (c) {
      var d,
          e = null,
          f = function f(b) {
        var c = d._wrapper;
        if (c && "pending" != c.playState && c.effect) return null == b ? void c._removeChildAnimations() : 0 == b && c.playbackRate < 0 && (e || (e = a.normalizeTimingInput(c.effect.timing)), b = a.calculateIterationProgress(a.calculateActiveDuration(e), -1, e), isNaN(b) || null == b) ? (c._forEachChild(function (a) {
          a.currentTime = -1;
        }), void c._removeChildAnimations()) : void 0;
      },
          g = new KeyframeEffect(null, [], c._timing, c._id);

      return g.onsample = f, d = b.timeline._play(g);
    }, b.bindAnimationForGroup = function (a) {
      a._animation._wrapper = a, a._isGroup = !0, b.awaitStartTime(a), a._constructChildAnimations(), a._setExternalAnimation(a);
    }, b.groupChildDuration = d;
  }(c, e), b["true"] = a;
}({}, function () {
  return this;
}());

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVuZG9yc35wb2x5ZmlsbC13ZWItYW5pbWF0aW9ucy1uZXh0LmNodW5rLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3dlYi1hbmltYXRpb25zLWpzL3dlYi1hbmltYXRpb25zLW5leHQtbGl0ZS5taW4uanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IDIwMTQgR29vZ2xlIEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbi8vXG4vLyBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuLy8geW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuLy8gICAgIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuLy9cbi8vIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuLy9cbi8vIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbi8vIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbi8vIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuLy8gICAgIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbi8vIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuXG4hZnVuY3Rpb24oYSxiKXt2YXIgYz17fSxkPXt9LGU9e307IWZ1bmN0aW9uKGEsYil7ZnVuY3Rpb24gYyhhKXtpZihcIm51bWJlclwiPT10eXBlb2YgYSlyZXR1cm4gYTt2YXIgYj17fTtmb3IodmFyIGMgaW4gYSliW2NdPWFbY107cmV0dXJuIGJ9ZnVuY3Rpb24gZCgpe3RoaXMuX2RlbGF5PTAsdGhpcy5fZW5kRGVsYXk9MCx0aGlzLl9maWxsPVwibm9uZVwiLHRoaXMuX2l0ZXJhdGlvblN0YXJ0PTAsdGhpcy5faXRlcmF0aW9ucz0xLHRoaXMuX2R1cmF0aW9uPTAsdGhpcy5fcGxheWJhY2tSYXRlPTEsdGhpcy5fZGlyZWN0aW9uPVwibm9ybWFsXCIsdGhpcy5fZWFzaW5nPVwibGluZWFyXCIsdGhpcy5fZWFzaW5nRnVuY3Rpb249eH1mdW5jdGlvbiBlKCl7cmV0dXJuIGEuaXNEZXByZWNhdGVkKFwiSW52YWxpZCB0aW1pbmcgaW5wdXRzXCIsXCIyMDE2LTAzLTAyXCIsXCJUeXBlRXJyb3IgZXhjZXB0aW9ucyB3aWxsIGJlIHRocm93biBpbnN0ZWFkLlwiLCEwKX1mdW5jdGlvbiBmKGIsYyxlKXt2YXIgZj1uZXcgZDtyZXR1cm4gYyYmKGYuZmlsbD1cImJvdGhcIixmLmR1cmF0aW9uPVwiYXV0b1wiKSxcIm51bWJlclwiIT10eXBlb2YgYnx8aXNOYU4oYik/dm9pZCAwIT09YiYmT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoYikuZm9yRWFjaChmdW5jdGlvbihjKXtpZihcImF1dG9cIiE9YltjXSl7aWYoKFwibnVtYmVyXCI9PXR5cGVvZiBmW2NdfHxcImR1cmF0aW9uXCI9PWMpJiYoXCJudW1iZXJcIiE9dHlwZW9mIGJbY118fGlzTmFOKGJbY10pKSlyZXR1cm47aWYoXCJmaWxsXCI9PWMmJi0xPT12LmluZGV4T2YoYltjXSkpcmV0dXJuO2lmKFwiZGlyZWN0aW9uXCI9PWMmJi0xPT13LmluZGV4T2YoYltjXSkpcmV0dXJuO2lmKFwicGxheWJhY2tSYXRlXCI9PWMmJjEhPT1iW2NdJiZhLmlzRGVwcmVjYXRlZChcIkFuaW1hdGlvbkVmZmVjdFRpbWluZy5wbGF5YmFja1JhdGVcIixcIjIwMTQtMTEtMjhcIixcIlVzZSBBbmltYXRpb24ucGxheWJhY2tSYXRlIGluc3RlYWQuXCIpKXJldHVybjtmW2NdPWJbY119fSk6Zi5kdXJhdGlvbj1iLGZ9ZnVuY3Rpb24gZyhhKXtyZXR1cm5cIm51bWJlclwiPT10eXBlb2YgYSYmKGE9aXNOYU4oYSk/e2R1cmF0aW9uOjB9OntkdXJhdGlvbjphfSksYX1mdW5jdGlvbiBoKGIsYyl7cmV0dXJuIGI9YS5udW1lcmljVGltaW5nVG9PYmplY3QoYiksZihiLGMpfWZ1bmN0aW9uIGkoYSxiLGMsZCl7cmV0dXJuIGE8MHx8YT4xfHxjPDB8fGM+MT94OmZ1bmN0aW9uKGUpe2Z1bmN0aW9uIGYoYSxiLGMpe3JldHVybiAzKmEqKDEtYykqKDEtYykqYyszKmIqKDEtYykqYypjK2MqYypjfWlmKGU8PTApe3ZhciBnPTA7cmV0dXJuIGE+MD9nPWIvYTohYiYmYz4wJiYoZz1kL2MpLGcqZX1pZihlPj0xKXt2YXIgaD0wO3JldHVybiBjPDE/aD0oZC0xKS8oYy0xKToxPT1jJiZhPDEmJihoPShiLTEpLyhhLTEpKSwxK2gqKGUtMSl9Zm9yKHZhciBpPTAsaj0xO2k8ajspe3ZhciBrPShpK2opLzIsbD1mKGEsYyxrKTtpZihNYXRoLmFicyhlLWwpPDFlLTUpcmV0dXJuIGYoYixkLGspO2w8ZT9pPWs6aj1rfXJldHVybiBmKGIsZCxrKX19ZnVuY3Rpb24gaihhLGIpe3JldHVybiBmdW5jdGlvbihjKXtpZihjPj0xKXJldHVybiAxO3ZhciBkPTEvYTtyZXR1cm4oYys9YipkKS1jJWR9fWZ1bmN0aW9uIGsoYSl7Q3x8KEM9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKS5zdHlsZSksQy5hbmltYXRpb25UaW1pbmdGdW5jdGlvbj1cIlwiLEMuYW5pbWF0aW9uVGltaW5nRnVuY3Rpb249YTt2YXIgYj1DLmFuaW1hdGlvblRpbWluZ0Z1bmN0aW9uO2lmKFwiXCI9PWImJmUoKSl0aHJvdyBuZXcgVHlwZUVycm9yKGErXCIgaXMgbm90IGEgdmFsaWQgdmFsdWUgZm9yIGVhc2luZ1wiKTtyZXR1cm4gYn1mdW5jdGlvbiBsKGEpe2lmKFwibGluZWFyXCI9PWEpcmV0dXJuIHg7dmFyIGI9RS5leGVjKGEpO2lmKGIpcmV0dXJuIGkuYXBwbHkodGhpcyxiLnNsaWNlKDEpLm1hcChOdW1iZXIpKTt2YXIgYz1GLmV4ZWMoYSk7cmV0dXJuIGM/aihOdW1iZXIoY1sxXSkse3N0YXJ0OnksbWlkZGxlOnosZW5kOkF9W2NbMl1dKTpCW2FdfHx4fWZ1bmN0aW9uIG0oYSl7cmV0dXJuIE1hdGguYWJzKG4oYSkvYS5wbGF5YmFja1JhdGUpfWZ1bmN0aW9uIG4oYSl7cmV0dXJuIDA9PT1hLmR1cmF0aW9ufHwwPT09YS5pdGVyYXRpb25zPzA6YS5kdXJhdGlvbiphLml0ZXJhdGlvbnN9ZnVuY3Rpb24gbyhhLGIsYyl7aWYobnVsbD09YilyZXR1cm4gRzt2YXIgZD1jLmRlbGF5K2ErYy5lbmREZWxheTtyZXR1cm4gYjxNYXRoLm1pbihjLmRlbGF5LGQpP0g6Yj49TWF0aC5taW4oYy5kZWxheSthLGQpP0k6Sn1mdW5jdGlvbiBwKGEsYixjLGQsZSl7c3dpdGNoKGQpe2Nhc2UgSDpyZXR1cm5cImJhY2t3YXJkc1wiPT1ifHxcImJvdGhcIj09Yj8wOm51bGw7Y2FzZSBKOnJldHVybiBjLWU7Y2FzZSBJOnJldHVyblwiZm9yd2FyZHNcIj09Ynx8XCJib3RoXCI9PWI/YTpudWxsO2Nhc2UgRzpyZXR1cm4gbnVsbH19ZnVuY3Rpb24gcShhLGIsYyxkLGUpe3ZhciBmPWU7cmV0dXJuIDA9PT1hP2IhPT1IJiYoZis9Yyk6Zis9ZC9hLGZ9ZnVuY3Rpb24gcihhLGIsYyxkLGUsZil7dmFyIGc9YT09PTEvMD9iJTE6YSUxO3JldHVybiAwIT09Z3x8YyE9PUl8fDA9PT1kfHwwPT09ZSYmMCE9PWZ8fChnPTEpLGd9ZnVuY3Rpb24gcyhhLGIsYyxkKXtyZXR1cm4gYT09PUkmJmI9PT0xLzA/MS8wOjE9PT1jP01hdGguZmxvb3IoZCktMTpNYXRoLmZsb29yKGQpfWZ1bmN0aW9uIHQoYSxiLGMpe3ZhciBkPWE7aWYoXCJub3JtYWxcIiE9PWEmJlwicmV2ZXJzZVwiIT09YSl7dmFyIGU9YjtcImFsdGVybmF0ZS1yZXZlcnNlXCI9PT1hJiYoZSs9MSksZD1cIm5vcm1hbFwiLGUhPT0xLzAmJmUlMiE9MCYmKGQ9XCJyZXZlcnNlXCIpfXJldHVyblwibm9ybWFsXCI9PT1kP2M6MS1jfWZ1bmN0aW9uIHUoYSxiLGMpe3ZhciBkPW8oYSxiLGMpLGU9cChhLGMuZmlsbCxiLGQsYy5kZWxheSk7aWYobnVsbD09PWUpcmV0dXJuIG51bGw7dmFyIGY9cShjLmR1cmF0aW9uLGQsYy5pdGVyYXRpb25zLGUsYy5pdGVyYXRpb25TdGFydCksZz1yKGYsYy5pdGVyYXRpb25TdGFydCxkLGMuaXRlcmF0aW9ucyxlLGMuZHVyYXRpb24pLGg9cyhkLGMuaXRlcmF0aW9ucyxnLGYpLGk9dChjLmRpcmVjdGlvbixoLGcpO3JldHVybiBjLl9lYXNpbmdGdW5jdGlvbihpKX12YXIgdj1cImJhY2t3YXJkc3xmb3J3YXJkc3xib3RofG5vbmVcIi5zcGxpdChcInxcIiksdz1cInJldmVyc2V8YWx0ZXJuYXRlfGFsdGVybmF0ZS1yZXZlcnNlXCIuc3BsaXQoXCJ8XCIpLHg9ZnVuY3Rpb24oYSl7cmV0dXJuIGF9O2QucHJvdG90eXBlPXtfc2V0TWVtYmVyOmZ1bmN0aW9uKGIsYyl7dGhpc1tcIl9cIitiXT1jLHRoaXMuX2VmZmVjdCYmKHRoaXMuX2VmZmVjdC5fdGltaW5nSW5wdXRbYl09Yyx0aGlzLl9lZmZlY3QuX3RpbWluZz1hLm5vcm1hbGl6ZVRpbWluZ0lucHV0KHRoaXMuX2VmZmVjdC5fdGltaW5nSW5wdXQpLHRoaXMuX2VmZmVjdC5hY3RpdmVEdXJhdGlvbj1hLmNhbGN1bGF0ZUFjdGl2ZUR1cmF0aW9uKHRoaXMuX2VmZmVjdC5fdGltaW5nKSx0aGlzLl9lZmZlY3QuX2FuaW1hdGlvbiYmdGhpcy5fZWZmZWN0Ll9hbmltYXRpb24uX3JlYnVpbGRVbmRlcmx5aW5nQW5pbWF0aW9uKCkpfSxnZXQgcGxheWJhY2tSYXRlKCl7cmV0dXJuIHRoaXMuX3BsYXliYWNrUmF0ZX0sc2V0IGRlbGF5KGEpe3RoaXMuX3NldE1lbWJlcihcImRlbGF5XCIsYSl9LGdldCBkZWxheSgpe3JldHVybiB0aGlzLl9kZWxheX0sc2V0IGVuZERlbGF5KGEpe3RoaXMuX3NldE1lbWJlcihcImVuZERlbGF5XCIsYSl9LGdldCBlbmREZWxheSgpe3JldHVybiB0aGlzLl9lbmREZWxheX0sc2V0IGZpbGwoYSl7dGhpcy5fc2V0TWVtYmVyKFwiZmlsbFwiLGEpfSxnZXQgZmlsbCgpe3JldHVybiB0aGlzLl9maWxsfSxzZXQgaXRlcmF0aW9uU3RhcnQoYSl7aWYoKGlzTmFOKGEpfHxhPDApJiZlKCkpdGhyb3cgbmV3IFR5cGVFcnJvcihcIml0ZXJhdGlvblN0YXJ0IG11c3QgYmUgYSBub24tbmVnYXRpdmUgbnVtYmVyLCByZWNlaXZlZDogXCIrdGltaW5nLml0ZXJhdGlvblN0YXJ0KTt0aGlzLl9zZXRNZW1iZXIoXCJpdGVyYXRpb25TdGFydFwiLGEpfSxnZXQgaXRlcmF0aW9uU3RhcnQoKXtyZXR1cm4gdGhpcy5faXRlcmF0aW9uU3RhcnR9LHNldCBkdXJhdGlvbihhKXtpZihcImF1dG9cIiE9YSYmKGlzTmFOKGEpfHxhPDApJiZlKCkpdGhyb3cgbmV3IFR5cGVFcnJvcihcImR1cmF0aW9uIG11c3QgYmUgbm9uLW5lZ2F0aXZlIG9yIGF1dG8sIHJlY2VpdmVkOiBcIithKTt0aGlzLl9zZXRNZW1iZXIoXCJkdXJhdGlvblwiLGEpfSxnZXQgZHVyYXRpb24oKXtyZXR1cm4gdGhpcy5fZHVyYXRpb259LHNldCBkaXJlY3Rpb24oYSl7dGhpcy5fc2V0TWVtYmVyKFwiZGlyZWN0aW9uXCIsYSl9LGdldCBkaXJlY3Rpb24oKXtyZXR1cm4gdGhpcy5fZGlyZWN0aW9ufSxzZXQgZWFzaW5nKGEpe3RoaXMuX2Vhc2luZ0Z1bmN0aW9uPWwoayhhKSksdGhpcy5fc2V0TWVtYmVyKFwiZWFzaW5nXCIsYSl9LGdldCBlYXNpbmcoKXtyZXR1cm4gdGhpcy5fZWFzaW5nfSxzZXQgaXRlcmF0aW9ucyhhKXtpZigoaXNOYU4oYSl8fGE8MCkmJmUoKSl0aHJvdyBuZXcgVHlwZUVycm9yKFwiaXRlcmF0aW9ucyBtdXN0IGJlIG5vbi1uZWdhdGl2ZSwgcmVjZWl2ZWQ6IFwiK2EpO3RoaXMuX3NldE1lbWJlcihcIml0ZXJhdGlvbnNcIixhKX0sZ2V0IGl0ZXJhdGlvbnMoKXtyZXR1cm4gdGhpcy5faXRlcmF0aW9uc319O3ZhciB5PTEsej0uNSxBPTAsQj17ZWFzZTppKC4yNSwuMSwuMjUsMSksXCJlYXNlLWluXCI6aSguNDIsMCwxLDEpLFwiZWFzZS1vdXRcIjppKDAsMCwuNTgsMSksXCJlYXNlLWluLW91dFwiOmkoLjQyLDAsLjU4LDEpLFwic3RlcC1zdGFydFwiOmooMSx5KSxcInN0ZXAtbWlkZGxlXCI6aigxLHopLFwic3RlcC1lbmRcIjpqKDEsQSl9LEM9bnVsbCxEPVwiXFxcXHMqKC0/XFxcXGQrXFxcXC4/XFxcXGQqfC0/XFxcXC5cXFxcZCspXFxcXHMqXCIsRT1uZXcgUmVnRXhwKFwiY3ViaWMtYmV6aWVyXFxcXChcIitEK1wiLFwiK0QrXCIsXCIrRCtcIixcIitEK1wiXFxcXClcIiksRj0vc3RlcHNcXChcXHMqKFxcZCspXFxzKixcXHMqKHN0YXJ0fG1pZGRsZXxlbmQpXFxzKlxcKS8sRz0wLEg9MSxJPTIsSj0zO2EuY2xvbmVUaW1pbmdJbnB1dD1jLGEubWFrZVRpbWluZz1mLGEubnVtZXJpY1RpbWluZ1RvT2JqZWN0PWcsYS5ub3JtYWxpemVUaW1pbmdJbnB1dD1oLGEuY2FsY3VsYXRlQWN0aXZlRHVyYXRpb249bSxhLmNhbGN1bGF0ZUl0ZXJhdGlvblByb2dyZXNzPXUsYS5jYWxjdWxhdGVQaGFzZT1vLGEubm9ybWFsaXplRWFzaW5nPWssYS5wYXJzZUVhc2luZ0Z1bmN0aW9uPWx9KGMpLGZ1bmN0aW9uKGEsYil7ZnVuY3Rpb24gYyhhLGIpe3JldHVybiBhIGluIGs/a1thXVtiXXx8YjpifWZ1bmN0aW9uIGQoYSl7cmV0dXJuXCJkaXNwbGF5XCI9PT1hfHwwPT09YS5sYXN0SW5kZXhPZihcImFuaW1hdGlvblwiLDApfHwwPT09YS5sYXN0SW5kZXhPZihcInRyYW5zaXRpb25cIiwwKX1mdW5jdGlvbiBlKGEsYixlKXtpZighZChhKSl7dmFyIGY9aFthXTtpZihmKXtpLnN0eWxlW2FdPWI7Zm9yKHZhciBnIGluIGYpe3ZhciBqPWZbZ10saz1pLnN0eWxlW2pdO2Vbal09YyhqLGspfX1lbHNlIGVbYV09YyhhLGIpfX1mdW5jdGlvbiBmKGEpe3ZhciBiPVtdO2Zvcih2YXIgYyBpbiBhKWlmKCEoYyBpbltcImVhc2luZ1wiLFwib2Zmc2V0XCIsXCJjb21wb3NpdGVcIl0pKXt2YXIgZD1hW2NdO0FycmF5LmlzQXJyYXkoZCl8fChkPVtkXSk7Zm9yKHZhciBlLGY9ZC5sZW5ndGgsZz0wO2c8ZjtnKyspZT17fSxlLm9mZnNldD1cIm9mZnNldFwiaW4gYT9hLm9mZnNldDoxPT1mPzE6Zy8oZi0xKSxcImVhc2luZ1wiaW4gYSYmKGUuZWFzaW5nPWEuZWFzaW5nKSxcImNvbXBvc2l0ZVwiaW4gYSYmKGUuY29tcG9zaXRlPWEuY29tcG9zaXRlKSxlW2NdPWRbZ10sYi5wdXNoKGUpfXJldHVybiBiLnNvcnQoZnVuY3Rpb24oYSxiKXtyZXR1cm4gYS5vZmZzZXQtYi5vZmZzZXR9KSxifWZ1bmN0aW9uIGcoYil7ZnVuY3Rpb24gYygpe3ZhciBhPWQubGVuZ3RoO251bGw9PWRbYS0xXS5vZmZzZXQmJihkW2EtMV0ub2Zmc2V0PTEpLGE+MSYmbnVsbD09ZFswXS5vZmZzZXQmJihkWzBdLm9mZnNldD0wKTtmb3IodmFyIGI9MCxjPWRbMF0ub2Zmc2V0LGU9MTtlPGE7ZSsrKXt2YXIgZj1kW2VdLm9mZnNldDtpZihudWxsIT1mKXtmb3IodmFyIGc9MTtnPGUtYjtnKyspZFtiK2ddLm9mZnNldD1jKyhmLWMpKmcvKGUtYik7Yj1lLGM9Zn19fWlmKG51bGw9PWIpcmV0dXJuW107d2luZG93LlN5bWJvbCYmU3ltYm9sLml0ZXJhdG9yJiZBcnJheS5wcm90b3R5cGUuZnJvbSYmYltTeW1ib2wuaXRlcmF0b3JdJiYoYj1BcnJheS5mcm9tKGIpKSxBcnJheS5pc0FycmF5KGIpfHwoYj1mKGIpKTtmb3IodmFyIGQ9Yi5tYXAoZnVuY3Rpb24oYil7dmFyIGM9e307Zm9yKHZhciBkIGluIGIpe3ZhciBmPWJbZF07aWYoXCJvZmZzZXRcIj09ZCl7aWYobnVsbCE9Zil7aWYoZj1OdW1iZXIoZiksIWlzRmluaXRlKGYpKXRocm93IG5ldyBUeXBlRXJyb3IoXCJLZXlmcmFtZSBvZmZzZXRzIG11c3QgYmUgbnVtYmVycy5cIik7aWYoZjwwfHxmPjEpdGhyb3cgbmV3IFR5cGVFcnJvcihcIktleWZyYW1lIG9mZnNldHMgbXVzdCBiZSBiZXR3ZWVuIDAgYW5kIDEuXCIpfX1lbHNlIGlmKFwiY29tcG9zaXRlXCI9PWQpe2lmKFwiYWRkXCI9PWZ8fFwiYWNjdW11bGF0ZVwiPT1mKXRocm93e3R5cGU6RE9NRXhjZXB0aW9uLk5PVF9TVVBQT1JURURfRVJSLG5hbWU6XCJOb3RTdXBwb3J0ZWRFcnJvclwiLG1lc3NhZ2U6XCJhZGQgY29tcG9zaXRpbmcgaXMgbm90IHN1cHBvcnRlZFwifTtpZihcInJlcGxhY2VcIiE9Zil0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBjb21wb3NpdGUgbW9kZSBcIitmK1wiLlwiKX1lbHNlIGY9XCJlYXNpbmdcIj09ZD9hLm5vcm1hbGl6ZUVhc2luZyhmKTpcIlwiK2Y7ZShkLGYsYyl9cmV0dXJuIHZvaWQgMD09Yy5vZmZzZXQmJihjLm9mZnNldD1udWxsKSx2b2lkIDA9PWMuZWFzaW5nJiYoYy5lYXNpbmc9XCJsaW5lYXJcIiksY30pLGc9ITAsaD0tMS8wLGk9MDtpPGQubGVuZ3RoO2krKyl7dmFyIGo9ZFtpXS5vZmZzZXQ7aWYobnVsbCE9ail7aWYoajxoKXRocm93IG5ldyBUeXBlRXJyb3IoXCJLZXlmcmFtZXMgYXJlIG5vdCBsb29zZWx5IHNvcnRlZCBieSBvZmZzZXQuIFNvcnQgb3Igc3BlY2lmeSBvZmZzZXRzLlwiKTtoPWp9ZWxzZSBnPSExfXJldHVybiBkPWQuZmlsdGVyKGZ1bmN0aW9uKGEpe3JldHVybiBhLm9mZnNldD49MCYmYS5vZmZzZXQ8PTF9KSxnfHxjKCksZH12YXIgaD17YmFja2dyb3VuZDpbXCJiYWNrZ3JvdW5kSW1hZ2VcIixcImJhY2tncm91bmRQb3NpdGlvblwiLFwiYmFja2dyb3VuZFNpemVcIixcImJhY2tncm91bmRSZXBlYXRcIixcImJhY2tncm91bmRBdHRhY2htZW50XCIsXCJiYWNrZ3JvdW5kT3JpZ2luXCIsXCJiYWNrZ3JvdW5kQ2xpcFwiLFwiYmFja2dyb3VuZENvbG9yXCJdLGJvcmRlcjpbXCJib3JkZXJUb3BDb2xvclwiLFwiYm9yZGVyVG9wU3R5bGVcIixcImJvcmRlclRvcFdpZHRoXCIsXCJib3JkZXJSaWdodENvbG9yXCIsXCJib3JkZXJSaWdodFN0eWxlXCIsXCJib3JkZXJSaWdodFdpZHRoXCIsXCJib3JkZXJCb3R0b21Db2xvclwiLFwiYm9yZGVyQm90dG9tU3R5bGVcIixcImJvcmRlckJvdHRvbVdpZHRoXCIsXCJib3JkZXJMZWZ0Q29sb3JcIixcImJvcmRlckxlZnRTdHlsZVwiLFwiYm9yZGVyTGVmdFdpZHRoXCJdLGJvcmRlckJvdHRvbTpbXCJib3JkZXJCb3R0b21XaWR0aFwiLFwiYm9yZGVyQm90dG9tU3R5bGVcIixcImJvcmRlckJvdHRvbUNvbG9yXCJdLGJvcmRlckNvbG9yOltcImJvcmRlclRvcENvbG9yXCIsXCJib3JkZXJSaWdodENvbG9yXCIsXCJib3JkZXJCb3R0b21Db2xvclwiLFwiYm9yZGVyTGVmdENvbG9yXCJdLGJvcmRlckxlZnQ6W1wiYm9yZGVyTGVmdFdpZHRoXCIsXCJib3JkZXJMZWZ0U3R5bGVcIixcImJvcmRlckxlZnRDb2xvclwiXSxib3JkZXJSYWRpdXM6W1wiYm9yZGVyVG9wTGVmdFJhZGl1c1wiLFwiYm9yZGVyVG9wUmlnaHRSYWRpdXNcIixcImJvcmRlckJvdHRvbVJpZ2h0UmFkaXVzXCIsXCJib3JkZXJCb3R0b21MZWZ0UmFkaXVzXCJdLGJvcmRlclJpZ2h0OltcImJvcmRlclJpZ2h0V2lkdGhcIixcImJvcmRlclJpZ2h0U3R5bGVcIixcImJvcmRlclJpZ2h0Q29sb3JcIl0sYm9yZGVyVG9wOltcImJvcmRlclRvcFdpZHRoXCIsXCJib3JkZXJUb3BTdHlsZVwiLFwiYm9yZGVyVG9wQ29sb3JcIl0sYm9yZGVyV2lkdGg6W1wiYm9yZGVyVG9wV2lkdGhcIixcImJvcmRlclJpZ2h0V2lkdGhcIixcImJvcmRlckJvdHRvbVdpZHRoXCIsXCJib3JkZXJMZWZ0V2lkdGhcIl0sZmxleDpbXCJmbGV4R3Jvd1wiLFwiZmxleFNocmlua1wiLFwiZmxleEJhc2lzXCJdLGZvbnQ6W1wiZm9udEZhbWlseVwiLFwiZm9udFNpemVcIixcImZvbnRTdHlsZVwiLFwiZm9udFZhcmlhbnRcIixcImZvbnRXZWlnaHRcIixcImxpbmVIZWlnaHRcIl0sbWFyZ2luOltcIm1hcmdpblRvcFwiLFwibWFyZ2luUmlnaHRcIixcIm1hcmdpbkJvdHRvbVwiLFwibWFyZ2luTGVmdFwiXSxvdXRsaW5lOltcIm91dGxpbmVDb2xvclwiLFwib3V0bGluZVN0eWxlXCIsXCJvdXRsaW5lV2lkdGhcIl0scGFkZGluZzpbXCJwYWRkaW5nVG9wXCIsXCJwYWRkaW5nUmlnaHRcIixcInBhZGRpbmdCb3R0b21cIixcInBhZGRpbmdMZWZ0XCJdfSxpPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhcImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGh0bWxcIixcImRpdlwiKSxqPXt0aGluOlwiMXB4XCIsbWVkaXVtOlwiM3B4XCIsdGhpY2s6XCI1cHhcIn0saz17Ym9yZGVyQm90dG9tV2lkdGg6aixib3JkZXJMZWZ0V2lkdGg6aixib3JkZXJSaWdodFdpZHRoOmosYm9yZGVyVG9wV2lkdGg6aixmb250U2l6ZTp7XCJ4eC1zbWFsbFwiOlwiNjAlXCIsXCJ4LXNtYWxsXCI6XCI3NSVcIixzbWFsbDpcIjg5JVwiLG1lZGl1bTpcIjEwMCVcIixsYXJnZTpcIjEyMCVcIixcIngtbGFyZ2VcIjpcIjE1MCVcIixcInh4LWxhcmdlXCI6XCIyMDAlXCJ9LGZvbnRXZWlnaHQ6e25vcm1hbDpcIjQwMFwiLGJvbGQ6XCI3MDBcIn0sb3V0bGluZVdpZHRoOmosdGV4dFNoYWRvdzp7bm9uZTpcIjBweCAwcHggMHB4IHRyYW5zcGFyZW50XCJ9LGJveFNoYWRvdzp7bm9uZTpcIjBweCAwcHggMHB4IDBweCB0cmFuc3BhcmVudFwifX07YS5jb252ZXJ0VG9BcnJheUZvcm09ZixhLm5vcm1hbGl6ZUtleWZyYW1lcz1nfShjKSxmdW5jdGlvbihhKXt2YXIgYj17fTthLmlzRGVwcmVjYXRlZD1mdW5jdGlvbihhLGMsZCxlKXt2YXIgZj1lP1wiYXJlXCI6XCJpc1wiLGc9bmV3IERhdGUsaD1uZXcgRGF0ZShjKTtyZXR1cm4gaC5zZXRNb250aChoLmdldE1vbnRoKCkrMyksIShnPGgmJihhIGluIGJ8fGNvbnNvbGUud2FybihcIldlYiBBbmltYXRpb25zOiBcIithK1wiIFwiK2YrXCIgZGVwcmVjYXRlZCBhbmQgd2lsbCBzdG9wIHdvcmtpbmcgb24gXCIraC50b0RhdGVTdHJpbmcoKStcIi4gXCIrZCksYlthXT0hMCwxKSl9LGEuZGVwcmVjYXRlZD1mdW5jdGlvbihiLGMsZCxlKXt2YXIgZj1lP1wiYXJlXCI6XCJpc1wiO2lmKGEuaXNEZXByZWNhdGVkKGIsYyxkLGUpKXRocm93IG5ldyBFcnJvcihiK1wiIFwiK2YrXCIgbm8gbG9uZ2VyIHN1cHBvcnRlZC4gXCIrZCl9fShjKSxmdW5jdGlvbigpe2lmKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5hbmltYXRlKXt2YXIgYT1kb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuYW5pbWF0ZShbXSwwKSxiPSEwO2lmKGEmJihiPSExLFwicGxheXxjdXJyZW50VGltZXxwYXVzZXxyZXZlcnNlfHBsYXliYWNrUmF0ZXxjYW5jZWx8ZmluaXNofHN0YXJ0VGltZXxwbGF5U3RhdGVcIi5zcGxpdChcInxcIikuZm9yRWFjaChmdW5jdGlvbihjKXt2b2lkIDA9PT1hW2NdJiYoYj0hMCl9KSksIWIpcmV0dXJufSFmdW5jdGlvbihhLGIsYyl7ZnVuY3Rpb24gZChhKXtmb3IodmFyIGI9e30sYz0wO2M8YS5sZW5ndGg7YysrKWZvcih2YXIgZCBpbiBhW2NdKWlmKFwib2Zmc2V0XCIhPWQmJlwiZWFzaW5nXCIhPWQmJlwiY29tcG9zaXRlXCIhPWQpe3ZhciBlPXtvZmZzZXQ6YVtjXS5vZmZzZXQsZWFzaW5nOmFbY10uZWFzaW5nLHZhbHVlOmFbY11bZF19O2JbZF09YltkXXx8W10sYltkXS5wdXNoKGUpfWZvcih2YXIgZiBpbiBiKXt2YXIgZz1iW2ZdO2lmKDAhPWdbMF0ub2Zmc2V0fHwxIT1nW2cubGVuZ3RoLTFdLm9mZnNldCl0aHJvd3t0eXBlOkRPTUV4Y2VwdGlvbi5OT1RfU1VQUE9SVEVEX0VSUixuYW1lOlwiTm90U3VwcG9ydGVkRXJyb3JcIixtZXNzYWdlOlwiUGFydGlhbCBrZXlmcmFtZXMgYXJlIG5vdCBzdXBwb3J0ZWRcIn19cmV0dXJuIGJ9ZnVuY3Rpb24gZShjKXt2YXIgZD1bXTtmb3IodmFyIGUgaW4gYylmb3IodmFyIGY9Y1tlXSxnPTA7ZzxmLmxlbmd0aC0xO2crKyl7dmFyIGg9ZyxpPWcrMSxqPWZbaF0ub2Zmc2V0LGs9ZltpXS5vZmZzZXQsbD1qLG09azswPT1nJiYobD0tMS8wLDA9PWsmJihpPWgpKSxnPT1mLmxlbmd0aC0yJiYobT0xLzAsMT09aiYmKGg9aSkpLGQucHVzaCh7YXBwbHlGcm9tOmwsYXBwbHlUbzptLHN0YXJ0T2Zmc2V0OmZbaF0ub2Zmc2V0LGVuZE9mZnNldDpmW2ldLm9mZnNldCxlYXNpbmdGdW5jdGlvbjphLnBhcnNlRWFzaW5nRnVuY3Rpb24oZltoXS5lYXNpbmcpLHByb3BlcnR5OmUsaW50ZXJwb2xhdGlvbjpiLnByb3BlcnR5SW50ZXJwb2xhdGlvbihlLGZbaF0udmFsdWUsZltpXS52YWx1ZSl9KX1yZXR1cm4gZC5zb3J0KGZ1bmN0aW9uKGEsYil7cmV0dXJuIGEuc3RhcnRPZmZzZXQtYi5zdGFydE9mZnNldH0pLGR9Yi5jb252ZXJ0RWZmZWN0SW5wdXQ9ZnVuY3Rpb24oYyl7dmFyIGY9YS5ub3JtYWxpemVLZXlmcmFtZXMoYyksZz1kKGYpLGg9ZShnKTtyZXR1cm4gZnVuY3Rpb24oYSxjKXtpZihudWxsIT1jKWguZmlsdGVyKGZ1bmN0aW9uKGEpe3JldHVybiBjPj1hLmFwcGx5RnJvbSYmYzxhLmFwcGx5VG99KS5mb3JFYWNoKGZ1bmN0aW9uKGQpe3ZhciBlPWMtZC5zdGFydE9mZnNldCxmPWQuZW5kT2Zmc2V0LWQuc3RhcnRPZmZzZXQsZz0wPT1mPzA6ZC5lYXNpbmdGdW5jdGlvbihlL2YpO2IuYXBwbHkoYSxkLnByb3BlcnR5LGQuaW50ZXJwb2xhdGlvbihnKSl9KTtlbHNlIGZvcih2YXIgZCBpbiBnKVwib2Zmc2V0XCIhPWQmJlwiZWFzaW5nXCIhPWQmJlwiY29tcG9zaXRlXCIhPWQmJmIuY2xlYXIoYSxkKX19fShjLGQpLGZ1bmN0aW9uKGEsYixjKXtmdW5jdGlvbiBkKGEpe3JldHVybiBhLnJlcGxhY2UoLy0oLikvZyxmdW5jdGlvbihhLGIpe3JldHVybiBiLnRvVXBwZXJDYXNlKCl9KX1mdW5jdGlvbiBlKGEsYixjKXtoW2NdPWhbY118fFtdLGhbY10ucHVzaChbYSxiXSl9ZnVuY3Rpb24gZihhLGIsYyl7Zm9yKHZhciBmPTA7ZjxjLmxlbmd0aDtmKyspe2UoYSxiLGQoY1tmXSkpfX1mdW5jdGlvbiBnKGMsZSxmKXt2YXIgZz1jOy8tLy50ZXN0KGMpJiYhYS5pc0RlcHJlY2F0ZWQoXCJIeXBoZW5hdGVkIHByb3BlcnR5IG5hbWVzXCIsXCIyMDE2LTAzLTIyXCIsXCJVc2UgY2FtZWxDYXNlIGluc3RlYWQuXCIsITApJiYoZz1kKGMpKSxcImluaXRpYWxcIiE9ZSYmXCJpbml0aWFsXCIhPWZ8fChcImluaXRpYWxcIj09ZSYmKGU9aVtnXSksXCJpbml0aWFsXCI9PWYmJihmPWlbZ10pKTtmb3IodmFyIGo9ZT09Zj9bXTpoW2ddLGs9MDtqJiZrPGoubGVuZ3RoO2srKyl7dmFyIGw9altrXVswXShlKSxtPWpba11bMF0oZik7aWYodm9pZCAwIT09bCYmdm9pZCAwIT09bSl7dmFyIG49altrXVsxXShsLG0pO2lmKG4pe3ZhciBvPWIuSW50ZXJwb2xhdGlvbi5hcHBseShudWxsLG4pO3JldHVybiBmdW5jdGlvbihhKXtyZXR1cm4gMD09YT9lOjE9PWE/ZjpvKGEpfX19fXJldHVybiBiLkludGVycG9sYXRpb24oITEsITAsZnVuY3Rpb24oYSl7cmV0dXJuIGE/ZjplfSl9dmFyIGg9e307Yi5hZGRQcm9wZXJ0aWVzSGFuZGxlcj1mO3ZhciBpPXtiYWNrZ3JvdW5kQ29sb3I6XCJ0cmFuc3BhcmVudFwiLGJhY2tncm91bmRQb3NpdGlvbjpcIjAlIDAlXCIsYm9yZGVyQm90dG9tQ29sb3I6XCJjdXJyZW50Q29sb3JcIixib3JkZXJCb3R0b21MZWZ0UmFkaXVzOlwiMHB4XCIsYm9yZGVyQm90dG9tUmlnaHRSYWRpdXM6XCIwcHhcIixib3JkZXJCb3R0b21XaWR0aDpcIjNweFwiLGJvcmRlckxlZnRDb2xvcjpcImN1cnJlbnRDb2xvclwiLGJvcmRlckxlZnRXaWR0aDpcIjNweFwiLGJvcmRlclJpZ2h0Q29sb3I6XCJjdXJyZW50Q29sb3JcIixib3JkZXJSaWdodFdpZHRoOlwiM3B4XCIsYm9yZGVyU3BhY2luZzpcIjJweFwiLGJvcmRlclRvcENvbG9yOlwiY3VycmVudENvbG9yXCIsYm9yZGVyVG9wTGVmdFJhZGl1czpcIjBweFwiLGJvcmRlclRvcFJpZ2h0UmFkaXVzOlwiMHB4XCIsYm9yZGVyVG9wV2lkdGg6XCIzcHhcIixib3R0b206XCJhdXRvXCIsY2xpcDpcInJlY3QoMHB4LCAwcHgsIDBweCwgMHB4KVwiLGNvbG9yOlwiYmxhY2tcIixmb250U2l6ZTpcIjEwMCVcIixmb250V2VpZ2h0OlwiNDAwXCIsaGVpZ2h0OlwiYXV0b1wiLGxlZnQ6XCJhdXRvXCIsbGV0dGVyU3BhY2luZzpcIm5vcm1hbFwiLGxpbmVIZWlnaHQ6XCIxMjAlXCIsbWFyZ2luQm90dG9tOlwiMHB4XCIsbWFyZ2luTGVmdDpcIjBweFwiLG1hcmdpblJpZ2h0OlwiMHB4XCIsbWFyZ2luVG9wOlwiMHB4XCIsbWF4SGVpZ2h0Olwibm9uZVwiLG1heFdpZHRoOlwibm9uZVwiLG1pbkhlaWdodDpcIjBweFwiLG1pbldpZHRoOlwiMHB4XCIsb3BhY2l0eTpcIjEuMFwiLG91dGxpbmVDb2xvcjpcImludmVydFwiLG91dGxpbmVPZmZzZXQ6XCIwcHhcIixvdXRsaW5lV2lkdGg6XCIzcHhcIixwYWRkaW5nQm90dG9tOlwiMHB4XCIscGFkZGluZ0xlZnQ6XCIwcHhcIixwYWRkaW5nUmlnaHQ6XCIwcHhcIixwYWRkaW5nVG9wOlwiMHB4XCIscmlnaHQ6XCJhdXRvXCIsc3Ryb2tlRGFzaGFycmF5Olwibm9uZVwiLHN0cm9rZURhc2hvZmZzZXQ6XCIwcHhcIix0ZXh0SW5kZW50OlwiMHB4XCIsdGV4dFNoYWRvdzpcIjBweCAwcHggMHB4IHRyYW5zcGFyZW50XCIsdG9wOlwiYXV0b1wiLHRyYW5zZm9ybTpcIlwiLHZlcnRpY2FsQWxpZ246XCIwcHhcIix2aXNpYmlsaXR5OlwidmlzaWJsZVwiLHdpZHRoOlwiYXV0b1wiLHdvcmRTcGFjaW5nOlwibm9ybWFsXCIsekluZGV4OlwiYXV0b1wifTtiLnByb3BlcnR5SW50ZXJwb2xhdGlvbj1nfShjLGQpLGZ1bmN0aW9uKGEsYixjKXtmdW5jdGlvbiBkKGIpe3ZhciBjPWEuY2FsY3VsYXRlQWN0aXZlRHVyYXRpb24oYiksZD1mdW5jdGlvbihkKXtyZXR1cm4gYS5jYWxjdWxhdGVJdGVyYXRpb25Qcm9ncmVzcyhjLGQsYil9O3JldHVybiBkLl90b3RhbER1cmF0aW9uPWIuZGVsYXkrYytiLmVuZERlbGF5LGR9Yi5LZXlmcmFtZUVmZmVjdD1mdW5jdGlvbihjLGUsZixnKXt2YXIgaCxpPWQoYS5ub3JtYWxpemVUaW1pbmdJbnB1dChmKSksaj1iLmNvbnZlcnRFZmZlY3RJbnB1dChlKSxrPWZ1bmN0aW9uKCl7aihjLGgpfTtyZXR1cm4gay5fdXBkYXRlPWZ1bmN0aW9uKGEpe3JldHVybiBudWxsIT09KGg9aShhKSl9LGsuX2NsZWFyPWZ1bmN0aW9uKCl7aihjLG51bGwpfSxrLl9oYXNTYW1lVGFyZ2V0PWZ1bmN0aW9uKGEpe3JldHVybiBjPT09YX0say5fdGFyZ2V0PWMsay5fdG90YWxEdXJhdGlvbj1pLl90b3RhbER1cmF0aW9uLGsuX2lkPWcsa319KGMsZCksZnVuY3Rpb24oYSxiKXthLmFwcGx5PWZ1bmN0aW9uKGIsYyxkKXtiLnN0eWxlW2EucHJvcGVydHlOYW1lKGMpXT1kfSxhLmNsZWFyPWZ1bmN0aW9uKGIsYyl7Yi5zdHlsZVthLnByb3BlcnR5TmFtZShjKV09XCJcIn19KGQpLGZ1bmN0aW9uKGEpe3dpbmRvdy5FbGVtZW50LnByb3RvdHlwZS5hbmltYXRlPWZ1bmN0aW9uKGIsYyl7dmFyIGQ9XCJcIjtyZXR1cm4gYyYmYy5pZCYmKGQ9Yy5pZCksYS50aW1lbGluZS5fcGxheShhLktleWZyYW1lRWZmZWN0KHRoaXMsYixjLGQpKX19KGQpLGZ1bmN0aW9uKGEsYil7ZnVuY3Rpb24gYyhhLGIsZCl7aWYoXCJudW1iZXJcIj09dHlwZW9mIGEmJlwibnVtYmVyXCI9PXR5cGVvZiBiKXJldHVybiBhKigxLWQpK2IqZDtpZihcImJvb2xlYW5cIj09dHlwZW9mIGEmJlwiYm9vbGVhblwiPT10eXBlb2YgYilyZXR1cm4gZDwuNT9hOmI7aWYoYS5sZW5ndGg9PWIubGVuZ3RoKXtmb3IodmFyIGU9W10sZj0wO2Y8YS5sZW5ndGg7ZisrKWUucHVzaChjKGFbZl0sYltmXSxkKSk7cmV0dXJuIGV9dGhyb3dcIk1pc21hdGNoZWQgaW50ZXJwb2xhdGlvbiBhcmd1bWVudHMgXCIrYStcIjpcIitifWEuSW50ZXJwb2xhdGlvbj1mdW5jdGlvbihhLGIsZCl7cmV0dXJuIGZ1bmN0aW9uKGUpe3JldHVybiBkKGMoYSxiLGUpKX19fShkKSxmdW5jdGlvbihhLGIsYyl7YS5zZXF1ZW5jZU51bWJlcj0wO3ZhciBkPWZ1bmN0aW9uKGEsYixjKXt0aGlzLnRhcmdldD1hLHRoaXMuY3VycmVudFRpbWU9Yix0aGlzLnRpbWVsaW5lVGltZT1jLHRoaXMudHlwZT1cImZpbmlzaFwiLHRoaXMuYnViYmxlcz0hMSx0aGlzLmNhbmNlbGFibGU9ITEsdGhpcy5jdXJyZW50VGFyZ2V0PWEsdGhpcy5kZWZhdWx0UHJldmVudGVkPSExLHRoaXMuZXZlbnRQaGFzZT1FdmVudC5BVF9UQVJHRVQsdGhpcy50aW1lU3RhbXA9RGF0ZS5ub3coKX07Yi5BbmltYXRpb249ZnVuY3Rpb24oYil7dGhpcy5pZD1cIlwiLGImJmIuX2lkJiYodGhpcy5pZD1iLl9pZCksdGhpcy5fc2VxdWVuY2VOdW1iZXI9YS5zZXF1ZW5jZU51bWJlcisrLHRoaXMuX2N1cnJlbnRUaW1lPTAsdGhpcy5fc3RhcnRUaW1lPW51bGwsdGhpcy5fcGF1c2VkPSExLHRoaXMuX3BsYXliYWNrUmF0ZT0xLHRoaXMuX2luVGltZWxpbmU9ITAsdGhpcy5fZmluaXNoZWRGbGFnPSEwLHRoaXMub25maW5pc2g9bnVsbCx0aGlzLl9maW5pc2hIYW5kbGVycz1bXSx0aGlzLl9lZmZlY3Q9Yix0aGlzLl9pbkVmZmVjdD10aGlzLl9lZmZlY3QuX3VwZGF0ZSgwKSx0aGlzLl9pZGxlPSEwLHRoaXMuX2N1cnJlbnRUaW1lUGVuZGluZz0hMX0sYi5BbmltYXRpb24ucHJvdG90eXBlPXtfZW5zdXJlQWxpdmU6ZnVuY3Rpb24oKXt0aGlzLnBsYXliYWNrUmF0ZTwwJiYwPT09dGhpcy5jdXJyZW50VGltZT90aGlzLl9pbkVmZmVjdD10aGlzLl9lZmZlY3QuX3VwZGF0ZSgtMSk6dGhpcy5faW5FZmZlY3Q9dGhpcy5fZWZmZWN0Ll91cGRhdGUodGhpcy5jdXJyZW50VGltZSksdGhpcy5faW5UaW1lbGluZXx8IXRoaXMuX2luRWZmZWN0JiZ0aGlzLl9maW5pc2hlZEZsYWd8fCh0aGlzLl9pblRpbWVsaW5lPSEwLGIudGltZWxpbmUuX2FuaW1hdGlvbnMucHVzaCh0aGlzKSl9LF90aWNrQ3VycmVudFRpbWU6ZnVuY3Rpb24oYSxiKXthIT10aGlzLl9jdXJyZW50VGltZSYmKHRoaXMuX2N1cnJlbnRUaW1lPWEsdGhpcy5faXNGaW5pc2hlZCYmIWImJih0aGlzLl9jdXJyZW50VGltZT10aGlzLl9wbGF5YmFja1JhdGU+MD90aGlzLl90b3RhbER1cmF0aW9uOjApLHRoaXMuX2Vuc3VyZUFsaXZlKCkpfSxnZXQgY3VycmVudFRpbWUoKXtyZXR1cm4gdGhpcy5faWRsZXx8dGhpcy5fY3VycmVudFRpbWVQZW5kaW5nP251bGw6dGhpcy5fY3VycmVudFRpbWV9LHNldCBjdXJyZW50VGltZShhKXthPSthLGlzTmFOKGEpfHwoYi5yZXN0YXJ0KCksdGhpcy5fcGF1c2VkfHxudWxsPT10aGlzLl9zdGFydFRpbWV8fCh0aGlzLl9zdGFydFRpbWU9dGhpcy5fdGltZWxpbmUuY3VycmVudFRpbWUtYS90aGlzLl9wbGF5YmFja1JhdGUpLHRoaXMuX2N1cnJlbnRUaW1lUGVuZGluZz0hMSx0aGlzLl9jdXJyZW50VGltZSE9YSYmKHRoaXMuX2lkbGUmJih0aGlzLl9pZGxlPSExLHRoaXMuX3BhdXNlZD0hMCksdGhpcy5fdGlja0N1cnJlbnRUaW1lKGEsITApLGIuYXBwbHlEaXJ0aWVkQW5pbWF0aW9uKHRoaXMpKSl9LGdldCBzdGFydFRpbWUoKXtyZXR1cm4gdGhpcy5fc3RhcnRUaW1lfSxzZXQgc3RhcnRUaW1lKGEpe2E9K2EsaXNOYU4oYSl8fHRoaXMuX3BhdXNlZHx8dGhpcy5faWRsZXx8KHRoaXMuX3N0YXJ0VGltZT1hLHRoaXMuX3RpY2tDdXJyZW50VGltZSgodGhpcy5fdGltZWxpbmUuY3VycmVudFRpbWUtdGhpcy5fc3RhcnRUaW1lKSp0aGlzLnBsYXliYWNrUmF0ZSksYi5hcHBseURpcnRpZWRBbmltYXRpb24odGhpcykpfSxnZXQgcGxheWJhY2tSYXRlKCl7cmV0dXJuIHRoaXMuX3BsYXliYWNrUmF0ZX0sc2V0IHBsYXliYWNrUmF0ZShhKXtpZihhIT10aGlzLl9wbGF5YmFja1JhdGUpe3ZhciBjPXRoaXMuY3VycmVudFRpbWU7dGhpcy5fcGxheWJhY2tSYXRlPWEsdGhpcy5fc3RhcnRUaW1lPW51bGwsXCJwYXVzZWRcIiE9dGhpcy5wbGF5U3RhdGUmJlwiaWRsZVwiIT10aGlzLnBsYXlTdGF0ZSYmKHRoaXMuX2ZpbmlzaGVkRmxhZz0hMSx0aGlzLl9pZGxlPSExLHRoaXMuX2Vuc3VyZUFsaXZlKCksYi5hcHBseURpcnRpZWRBbmltYXRpb24odGhpcykpLG51bGwhPWMmJih0aGlzLmN1cnJlbnRUaW1lPWMpfX0sZ2V0IF9pc0ZpbmlzaGVkKCl7cmV0dXJuIXRoaXMuX2lkbGUmJih0aGlzLl9wbGF5YmFja1JhdGU+MCYmdGhpcy5fY3VycmVudFRpbWU+PXRoaXMuX3RvdGFsRHVyYXRpb258fHRoaXMuX3BsYXliYWNrUmF0ZTwwJiZ0aGlzLl9jdXJyZW50VGltZTw9MCl9LGdldCBfdG90YWxEdXJhdGlvbigpe3JldHVybiB0aGlzLl9lZmZlY3QuX3RvdGFsRHVyYXRpb259LGdldCBwbGF5U3RhdGUoKXtyZXR1cm4gdGhpcy5faWRsZT9cImlkbGVcIjpudWxsPT10aGlzLl9zdGFydFRpbWUmJiF0aGlzLl9wYXVzZWQmJjAhPXRoaXMucGxheWJhY2tSYXRlfHx0aGlzLl9jdXJyZW50VGltZVBlbmRpbmc/XCJwZW5kaW5nXCI6dGhpcy5fcGF1c2VkP1wicGF1c2VkXCI6dGhpcy5faXNGaW5pc2hlZD9cImZpbmlzaGVkXCI6XCJydW5uaW5nXCJ9LF9yZXdpbmQ6ZnVuY3Rpb24oKXtpZih0aGlzLl9wbGF5YmFja1JhdGU+PTApdGhpcy5fY3VycmVudFRpbWU9MDtlbHNle2lmKCEodGhpcy5fdG90YWxEdXJhdGlvbjwxLzApKXRocm93IG5ldyBET01FeGNlcHRpb24oXCJVbmFibGUgdG8gcmV3aW5kIG5lZ2F0aXZlIHBsYXliYWNrIHJhdGUgYW5pbWF0aW9uIHdpdGggaW5maW5pdGUgZHVyYXRpb25cIixcIkludmFsaWRTdGF0ZUVycm9yXCIpO3RoaXMuX2N1cnJlbnRUaW1lPXRoaXMuX3RvdGFsRHVyYXRpb259fSxwbGF5OmZ1bmN0aW9uKCl7dGhpcy5fcGF1c2VkPSExLCh0aGlzLl9pc0ZpbmlzaGVkfHx0aGlzLl9pZGxlKSYmKHRoaXMuX3Jld2luZCgpLHRoaXMuX3N0YXJ0VGltZT1udWxsKSx0aGlzLl9maW5pc2hlZEZsYWc9ITEsdGhpcy5faWRsZT0hMSx0aGlzLl9lbnN1cmVBbGl2ZSgpLGIuYXBwbHlEaXJ0aWVkQW5pbWF0aW9uKHRoaXMpfSxwYXVzZTpmdW5jdGlvbigpe3RoaXMuX2lzRmluaXNoZWR8fHRoaXMuX3BhdXNlZHx8dGhpcy5faWRsZT90aGlzLl9pZGxlJiYodGhpcy5fcmV3aW5kKCksdGhpcy5faWRsZT0hMSk6dGhpcy5fY3VycmVudFRpbWVQZW5kaW5nPSEwLHRoaXMuX3N0YXJ0VGltZT1udWxsLHRoaXMuX3BhdXNlZD0hMH0sZmluaXNoOmZ1bmN0aW9uKCl7dGhpcy5faWRsZXx8KHRoaXMuY3VycmVudFRpbWU9dGhpcy5fcGxheWJhY2tSYXRlPjA/dGhpcy5fdG90YWxEdXJhdGlvbjowLHRoaXMuX3N0YXJ0VGltZT10aGlzLl90b3RhbER1cmF0aW9uLXRoaXMuY3VycmVudFRpbWUsdGhpcy5fY3VycmVudFRpbWVQZW5kaW5nPSExLGIuYXBwbHlEaXJ0aWVkQW5pbWF0aW9uKHRoaXMpKX0sY2FuY2VsOmZ1bmN0aW9uKCl7dGhpcy5faW5FZmZlY3QmJih0aGlzLl9pbkVmZmVjdD0hMSx0aGlzLl9pZGxlPSEwLHRoaXMuX3BhdXNlZD0hMSx0aGlzLl9pc0ZpbmlzaGVkPSEwLHRoaXMuX2ZpbmlzaGVkRmxhZz0hMCx0aGlzLl9jdXJyZW50VGltZT0wLHRoaXMuX3N0YXJ0VGltZT1udWxsLHRoaXMuX2VmZmVjdC5fdXBkYXRlKG51bGwpLGIuYXBwbHlEaXJ0aWVkQW5pbWF0aW9uKHRoaXMpKX0scmV2ZXJzZTpmdW5jdGlvbigpe3RoaXMucGxheWJhY2tSYXRlKj0tMSx0aGlzLnBsYXkoKX0sYWRkRXZlbnRMaXN0ZW5lcjpmdW5jdGlvbihhLGIpe1wiZnVuY3Rpb25cIj09dHlwZW9mIGImJlwiZmluaXNoXCI9PWEmJnRoaXMuX2ZpbmlzaEhhbmRsZXJzLnB1c2goYil9LHJlbW92ZUV2ZW50TGlzdGVuZXI6ZnVuY3Rpb24oYSxiKXtpZihcImZpbmlzaFwiPT1hKXt2YXIgYz10aGlzLl9maW5pc2hIYW5kbGVycy5pbmRleE9mKGIpO2M+PTAmJnRoaXMuX2ZpbmlzaEhhbmRsZXJzLnNwbGljZShjLDEpfX0sX2ZpcmVFdmVudHM6ZnVuY3Rpb24oYSl7aWYodGhpcy5faXNGaW5pc2hlZCl7aWYoIXRoaXMuX2ZpbmlzaGVkRmxhZyl7dmFyIGI9bmV3IGQodGhpcyx0aGlzLl9jdXJyZW50VGltZSxhKSxjPXRoaXMuX2ZpbmlzaEhhbmRsZXJzLmNvbmNhdCh0aGlzLm9uZmluaXNoP1t0aGlzLm9uZmluaXNoXTpbXSk7c2V0VGltZW91dChmdW5jdGlvbigpe2MuZm9yRWFjaChmdW5jdGlvbihhKXthLmNhbGwoYi50YXJnZXQsYil9KX0sMCksdGhpcy5fZmluaXNoZWRGbGFnPSEwfX1lbHNlIHRoaXMuX2ZpbmlzaGVkRmxhZz0hMX0sX3RpY2s6ZnVuY3Rpb24oYSxiKXt0aGlzLl9pZGxlfHx0aGlzLl9wYXVzZWR8fChudWxsPT10aGlzLl9zdGFydFRpbWU/YiYmKHRoaXMuc3RhcnRUaW1lPWEtdGhpcy5fY3VycmVudFRpbWUvdGhpcy5wbGF5YmFja1JhdGUpOnRoaXMuX2lzRmluaXNoZWR8fHRoaXMuX3RpY2tDdXJyZW50VGltZSgoYS10aGlzLl9zdGFydFRpbWUpKnRoaXMucGxheWJhY2tSYXRlKSksYiYmKHRoaXMuX2N1cnJlbnRUaW1lUGVuZGluZz0hMSx0aGlzLl9maXJlRXZlbnRzKGEpKX0sZ2V0IF9uZWVkc1RpY2soKXtyZXR1cm4gdGhpcy5wbGF5U3RhdGUgaW57cGVuZGluZzoxLHJ1bm5pbmc6MX18fCF0aGlzLl9maW5pc2hlZEZsYWd9LF90YXJnZXRBbmltYXRpb25zOmZ1bmN0aW9uKCl7dmFyIGE9dGhpcy5fZWZmZWN0Ll90YXJnZXQ7cmV0dXJuIGEuX2FjdGl2ZUFuaW1hdGlvbnN8fChhLl9hY3RpdmVBbmltYXRpb25zPVtdKSxhLl9hY3RpdmVBbmltYXRpb25zfSxfbWFya1RhcmdldDpmdW5jdGlvbigpe3ZhciBhPXRoaXMuX3RhcmdldEFuaW1hdGlvbnMoKTstMT09PWEuaW5kZXhPZih0aGlzKSYmYS5wdXNoKHRoaXMpfSxfdW5tYXJrVGFyZ2V0OmZ1bmN0aW9uKCl7dmFyIGE9dGhpcy5fdGFyZ2V0QW5pbWF0aW9ucygpLGI9YS5pbmRleE9mKHRoaXMpOy0xIT09YiYmYS5zcGxpY2UoYiwxKX19fShjLGQpLGZ1bmN0aW9uKGEsYixjKXtmdW5jdGlvbiBkKGEpe3ZhciBiPWo7aj1bXSxhPHEuY3VycmVudFRpbWUmJihhPXEuY3VycmVudFRpbWUpLHEuX2FuaW1hdGlvbnMuc29ydChlKSxxLl9hbmltYXRpb25zPWgoYSwhMCxxLl9hbmltYXRpb25zKVswXSxiLmZvckVhY2goZnVuY3Rpb24oYil7YlsxXShhKX0pLGcoKSxsPXZvaWQgMH1mdW5jdGlvbiBlKGEsYil7cmV0dXJuIGEuX3NlcXVlbmNlTnVtYmVyLWIuX3NlcXVlbmNlTnVtYmVyfWZ1bmN0aW9uIGYoKXt0aGlzLl9hbmltYXRpb25zPVtdLHRoaXMuY3VycmVudFRpbWU9d2luZG93LnBlcmZvcm1hbmNlJiZwZXJmb3JtYW5jZS5ub3c/cGVyZm9ybWFuY2Uubm93KCk6MH1mdW5jdGlvbiBnKCl7by5mb3JFYWNoKGZ1bmN0aW9uKGEpe2EoKX0pLG8ubGVuZ3RoPTB9ZnVuY3Rpb24gaChhLGMsZCl7cD0hMCxuPSExLGIudGltZWxpbmUuY3VycmVudFRpbWU9YSxtPSExO3ZhciBlPVtdLGY9W10sZz1bXSxoPVtdO3JldHVybiBkLmZvckVhY2goZnVuY3Rpb24oYil7Yi5fdGljayhhLGMpLGIuX2luRWZmZWN0PyhmLnB1c2goYi5fZWZmZWN0KSxiLl9tYXJrVGFyZ2V0KCkpOihlLnB1c2goYi5fZWZmZWN0KSxiLl91bm1hcmtUYXJnZXQoKSksYi5fbmVlZHNUaWNrJiYobT0hMCk7dmFyIGQ9Yi5faW5FZmZlY3R8fGIuX25lZWRzVGljaztiLl9pblRpbWVsaW5lPWQsZD9nLnB1c2goYik6aC5wdXNoKGIpfSksby5wdXNoLmFwcGx5KG8sZSksby5wdXNoLmFwcGx5KG8sZiksbSYmcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZ1bmN0aW9uKCl7fSkscD0hMSxbZyxoXX12YXIgaT13aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lLGo9W10saz0wO3dpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWU9ZnVuY3Rpb24oYSl7dmFyIGI9aysrO3JldHVybiAwPT1qLmxlbmd0aCYmaShkKSxqLnB1c2goW2IsYV0pLGJ9LHdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZT1mdW5jdGlvbihhKXtqLmZvckVhY2goZnVuY3Rpb24oYil7YlswXT09YSYmKGJbMV09ZnVuY3Rpb24oKXt9KX0pfSxmLnByb3RvdHlwZT17X3BsYXk6ZnVuY3Rpb24oYyl7Yy5fdGltaW5nPWEubm9ybWFsaXplVGltaW5nSW5wdXQoYy50aW1pbmcpO3ZhciBkPW5ldyBiLkFuaW1hdGlvbihjKTtyZXR1cm4gZC5faWRsZT0hMSxkLl90aW1lbGluZT10aGlzLHRoaXMuX2FuaW1hdGlvbnMucHVzaChkKSxiLnJlc3RhcnQoKSxiLmFwcGx5RGlydGllZEFuaW1hdGlvbihkKSxkfX07dmFyIGw9dm9pZCAwLG09ITEsbj0hMTtiLnJlc3RhcnQ9ZnVuY3Rpb24oKXtyZXR1cm4gbXx8KG09ITAscmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZ1bmN0aW9uKCl7fSksbj0hMCksbn0sYi5hcHBseURpcnRpZWRBbmltYXRpb249ZnVuY3Rpb24oYSl7aWYoIXApe2EuX21hcmtUYXJnZXQoKTt2YXIgYz1hLl90YXJnZXRBbmltYXRpb25zKCk7Yy5zb3J0KGUpLGgoYi50aW1lbGluZS5jdXJyZW50VGltZSwhMSxjLnNsaWNlKCkpWzFdLmZvckVhY2goZnVuY3Rpb24oYSl7dmFyIGI9cS5fYW5pbWF0aW9ucy5pbmRleE9mKGEpOy0xIT09YiYmcS5fYW5pbWF0aW9ucy5zcGxpY2UoYiwxKX0pLGcoKX19O3ZhciBvPVtdLHA9ITEscT1uZXcgZjtiLnRpbWVsaW5lPXF9KGMsZCksZnVuY3Rpb24oYSl7ZnVuY3Rpb24gYihhLGIpe3ZhciBjPWEuZXhlYyhiKTtpZihjKXJldHVybiBjPWEuaWdub3JlQ2FzZT9jWzBdLnRvTG93ZXJDYXNlKCk6Y1swXSxbYyxiLnN1YnN0cihjLmxlbmd0aCldfWZ1bmN0aW9uIGMoYSxiKXtiPWIucmVwbGFjZSgvXlxccyovLFwiXCIpO3ZhciBjPWEoYik7aWYoYylyZXR1cm5bY1swXSxjWzFdLnJlcGxhY2UoL15cXHMqLyxcIlwiKV19ZnVuY3Rpb24gZChhLGQsZSl7YT1jLmJpbmQobnVsbCxhKTtmb3IodmFyIGY9W107Oyl7dmFyIGc9YShlKTtpZighZylyZXR1cm5bZixlXTtpZihmLnB1c2goZ1swXSksZT1nWzFdLCEoZz1iKGQsZSkpfHxcIlwiPT1nWzFdKXJldHVybltmLGVdO2U9Z1sxXX19ZnVuY3Rpb24gZShhLGIpe2Zvcih2YXIgYz0wLGQ9MDtkPGIubGVuZ3RoJiYoIS9cXHN8LC8udGVzdChiW2RdKXx8MCE9Yyk7ZCsrKWlmKFwiKFwiPT1iW2RdKWMrKztlbHNlIGlmKFwiKVwiPT1iW2RdJiYoYy0tLDA9PWMmJmQrKyxjPD0wKSlicmVhazt2YXIgZT1hKGIuc3Vic3RyKDAsZCkpO3JldHVybiB2b2lkIDA9PWU/dm9pZCAwOltlLGIuc3Vic3RyKGQpXX1mdW5jdGlvbiBmKGEsYil7Zm9yKHZhciBjPWEsZD1iO2MmJmQ7KWM+ZD9jJT1kOmQlPWM7cmV0dXJuIGM9YSpiLyhjK2QpfWZ1bmN0aW9uIGcoYSl7cmV0dXJuIGZ1bmN0aW9uKGIpe3ZhciBjPWEoYik7cmV0dXJuIGMmJihjWzBdPXZvaWQgMCksY319ZnVuY3Rpb24gaChhLGIpe3JldHVybiBmdW5jdGlvbihjKXtyZXR1cm4gYShjKXx8W2IsY119fWZ1bmN0aW9uIGkoYixjKXtmb3IodmFyIGQ9W10sZT0wO2U8Yi5sZW5ndGg7ZSsrKXt2YXIgZj1hLmNvbnN1bWVUcmltbWVkKGJbZV0sYyk7aWYoIWZ8fFwiXCI9PWZbMF0pcmV0dXJuO3ZvaWQgMCE9PWZbMF0mJmQucHVzaChmWzBdKSxjPWZbMV19aWYoXCJcIj09YylyZXR1cm4gZH1mdW5jdGlvbiBqKGEsYixjLGQsZSl7Zm9yKHZhciBnPVtdLGg9W10saT1bXSxqPWYoZC5sZW5ndGgsZS5sZW5ndGgpLGs9MDtrPGo7aysrKXt2YXIgbD1iKGRbayVkLmxlbmd0aF0sZVtrJWUubGVuZ3RoXSk7aWYoIWwpcmV0dXJuO2cucHVzaChsWzBdKSxoLnB1c2gobFsxXSksaS5wdXNoKGxbMl0pfXJldHVybltnLGgsZnVuY3Rpb24oYil7dmFyIGQ9Yi5tYXAoZnVuY3Rpb24oYSxiKXtyZXR1cm4gaVtiXShhKX0pLmpvaW4oYyk7cmV0dXJuIGE/YShkKTpkfV19ZnVuY3Rpb24gayhhLGIsYyl7Zm9yKHZhciBkPVtdLGU9W10sZj1bXSxnPTAsaD0wO2g8Yy5sZW5ndGg7aCsrKWlmKFwiZnVuY3Rpb25cIj09dHlwZW9mIGNbaF0pe3ZhciBpPWNbaF0oYVtnXSxiW2crK10pO2QucHVzaChpWzBdKSxlLnB1c2goaVsxXSksZi5wdXNoKGlbMl0pfWVsc2UhZnVuY3Rpb24oYSl7ZC5wdXNoKCExKSxlLnB1c2goITEpLGYucHVzaChmdW5jdGlvbigpe3JldHVybiBjW2FdfSl9KGgpO3JldHVybltkLGUsZnVuY3Rpb24oYSl7Zm9yKHZhciBiPVwiXCIsYz0wO2M8YS5sZW5ndGg7YysrKWIrPWZbY10oYVtjXSk7cmV0dXJuIGJ9XX1hLmNvbnN1bWVUb2tlbj1iLGEuY29uc3VtZVRyaW1tZWQ9YyxhLmNvbnN1bWVSZXBlYXRlZD1kLGEuY29uc3VtZVBhcmVudGhlc2lzZWQ9ZSxhLmlnbm9yZT1nLGEub3B0aW9uYWw9aCxhLmNvbnN1bWVMaXN0PWksYS5tZXJnZU5lc3RlZFJlcGVhdGVkPWouYmluZChudWxsLG51bGwpLGEubWVyZ2VXcmFwcGVkTmVzdGVkUmVwZWF0ZWQ9aixhLm1lcmdlTGlzdD1rfShkKSxmdW5jdGlvbihhKXtmdW5jdGlvbiBiKGIpe2Z1bmN0aW9uIGMoYil7dmFyIGM9YS5jb25zdW1lVG9rZW4oL15pbnNldC9pLGIpO2lmKGMpcmV0dXJuIGQuaW5zZXQ9ITAsYzt2YXIgYz1hLmNvbnN1bWVMZW5ndGhPclBlcmNlbnQoYik7aWYoYylyZXR1cm4gZC5sZW5ndGhzLnB1c2goY1swXSksYzt2YXIgYz1hLmNvbnN1bWVDb2xvcihiKTtyZXR1cm4gYz8oZC5jb2xvcj1jWzBdLGMpOnZvaWQgMH12YXIgZD17aW5zZXQ6ITEsbGVuZ3RoczpbXSxjb2xvcjpudWxsfSxlPWEuY29uc3VtZVJlcGVhdGVkKGMsL14vLGIpO2lmKGUmJmVbMF0ubGVuZ3RoKXJldHVybltkLGVbMV1dfWZ1bmN0aW9uIGMoYyl7dmFyIGQ9YS5jb25zdW1lUmVwZWF0ZWQoYiwvXiwvLGMpO2lmKGQmJlwiXCI9PWRbMV0pcmV0dXJuIGRbMF19ZnVuY3Rpb24gZChiLGMpe2Zvcig7Yi5sZW5ndGhzLmxlbmd0aDxNYXRoLm1heChiLmxlbmd0aHMubGVuZ3RoLGMubGVuZ3Rocy5sZW5ndGgpOyliLmxlbmd0aHMucHVzaCh7cHg6MH0pO2Zvcig7Yy5sZW5ndGhzLmxlbmd0aDxNYXRoLm1heChiLmxlbmd0aHMubGVuZ3RoLGMubGVuZ3Rocy5sZW5ndGgpOyljLmxlbmd0aHMucHVzaCh7cHg6MH0pO2lmKGIuaW5zZXQ9PWMuaW5zZXQmJiEhYi5jb2xvcj09ISFjLmNvbG9yKXtmb3IodmFyIGQsZT1bXSxmPVtbXSwwXSxnPVtbXSwwXSxoPTA7aDxiLmxlbmd0aHMubGVuZ3RoO2grKyl7dmFyIGk9YS5tZXJnZURpbWVuc2lvbnMoYi5sZW5ndGhzW2hdLGMubGVuZ3Roc1toXSwyPT1oKTtmWzBdLnB1c2goaVswXSksZ1swXS5wdXNoKGlbMV0pLGUucHVzaChpWzJdKX1pZihiLmNvbG9yJiZjLmNvbG9yKXt2YXIgaj1hLm1lcmdlQ29sb3JzKGIuY29sb3IsYy5jb2xvcik7ZlsxXT1qWzBdLGdbMV09alsxXSxkPWpbMl19cmV0dXJuW2YsZyxmdW5jdGlvbihhKXtmb3IodmFyIGM9Yi5pbnNldD9cImluc2V0IFwiOlwiIFwiLGY9MDtmPGUubGVuZ3RoO2YrKyljKz1lW2ZdKGFbMF1bZl0pK1wiIFwiO3JldHVybiBkJiYoYys9ZChhWzFdKSksY31dfX1mdW5jdGlvbiBlKGIsYyxkLGUpe2Z1bmN0aW9uIGYoYSl7cmV0dXJue2luc2V0OmEsY29sb3I6WzAsMCwwLDBdLGxlbmd0aHM6W3tweDowfSx7cHg6MH0se3B4OjB9LHtweDowfV19fWZvcih2YXIgZz1bXSxoPVtdLGk9MDtpPGQubGVuZ3RofHxpPGUubGVuZ3RoO2krKyl7dmFyIGo9ZFtpXXx8ZihlW2ldLmluc2V0KSxrPWVbaV18fGYoZFtpXS5pbnNldCk7Zy5wdXNoKGopLGgucHVzaChrKX1yZXR1cm4gYS5tZXJnZU5lc3RlZFJlcGVhdGVkKGIsYyxnLGgpfXZhciBmPWUuYmluZChudWxsLGQsXCIsIFwiKTthLmFkZFByb3BlcnRpZXNIYW5kbGVyKGMsZixbXCJib3gtc2hhZG93XCIsXCJ0ZXh0LXNoYWRvd1wiXSl9KGQpLGZ1bmN0aW9uKGEsYil7ZnVuY3Rpb24gYyhhKXtyZXR1cm4gYS50b0ZpeGVkKDMpLnJlcGxhY2UoLzArJC8sXCJcIikucmVwbGFjZSgvXFwuJC8sXCJcIil9ZnVuY3Rpb24gZChhLGIsYyl7cmV0dXJuIE1hdGgubWluKGIsTWF0aC5tYXgoYSxjKSl9ZnVuY3Rpb24gZShhKXtpZigvXlxccypbLStdPyhcXGQqXFwuKT9cXGQrXFxzKiQvLnRlc3QoYSkpcmV0dXJuIE51bWJlcihhKX1mdW5jdGlvbiBmKGEsYil7cmV0dXJuW2EsYixjXX1mdW5jdGlvbiBnKGEsYil7aWYoMCE9YSlyZXR1cm4gaSgwLDEvMCkoYSxiKX1mdW5jdGlvbiBoKGEsYil7cmV0dXJuW2EsYixmdW5jdGlvbihhKXtyZXR1cm4gTWF0aC5yb3VuZChkKDEsMS8wLGEpKX1dfWZ1bmN0aW9uIGkoYSxiKXtyZXR1cm4gZnVuY3Rpb24oZSxmKXtyZXR1cm5bZSxmLGZ1bmN0aW9uKGUpe3JldHVybiBjKGQoYSxiLGUpKX1dfX1mdW5jdGlvbiBqKGEpe3ZhciBiPWEudHJpbSgpLnNwbGl0KC9cXHMqW1xccyxdXFxzKi8pO2lmKDAhPT1iLmxlbmd0aCl7Zm9yKHZhciBjPVtdLGQ9MDtkPGIubGVuZ3RoO2QrKyl7dmFyIGY9ZShiW2RdKTtpZih2b2lkIDA9PT1mKXJldHVybjtjLnB1c2goZil9cmV0dXJuIGN9fWZ1bmN0aW9uIGsoYSxiKXtpZihhLmxlbmd0aD09Yi5sZW5ndGgpcmV0dXJuW2EsYixmdW5jdGlvbihhKXtyZXR1cm4gYS5tYXAoYykuam9pbihcIiBcIil9XX1mdW5jdGlvbiBsKGEsYil7cmV0dXJuW2EsYixNYXRoLnJvdW5kXX1hLmNsYW1wPWQsYS5hZGRQcm9wZXJ0aWVzSGFuZGxlcihqLGssW1wic3Ryb2tlLWRhc2hhcnJheVwiXSksYS5hZGRQcm9wZXJ0aWVzSGFuZGxlcihlLGkoMCwxLzApLFtcImJvcmRlci1pbWFnZS13aWR0aFwiLFwibGluZS1oZWlnaHRcIl0pLGEuYWRkUHJvcGVydGllc0hhbmRsZXIoZSxpKDAsMSksW1wib3BhY2l0eVwiLFwic2hhcGUtaW1hZ2UtdGhyZXNob2xkXCJdKSxhLmFkZFByb3BlcnRpZXNIYW5kbGVyKGUsZyxbXCJmbGV4LWdyb3dcIixcImZsZXgtc2hyaW5rXCJdKSxhLmFkZFByb3BlcnRpZXNIYW5kbGVyKGUsaCxbXCJvcnBoYW5zXCIsXCJ3aWRvd3NcIl0pLGEuYWRkUHJvcGVydGllc0hhbmRsZXIoZSxsLFtcInotaW5kZXhcIl0pLGEucGFyc2VOdW1iZXI9ZSxhLnBhcnNlTnVtYmVyTGlzdD1qLGEubWVyZ2VOdW1iZXJzPWYsYS5udW1iZXJUb1N0cmluZz1jfShkKSxmdW5jdGlvbihhLGIpe2Z1bmN0aW9uIGMoYSxiKXtpZihcInZpc2libGVcIj09YXx8XCJ2aXNpYmxlXCI9PWIpcmV0dXJuWzAsMSxmdW5jdGlvbihjKXtyZXR1cm4gYzw9MD9hOmM+PTE/YjpcInZpc2libGVcIn1dfWEuYWRkUHJvcGVydGllc0hhbmRsZXIoU3RyaW5nLGMsW1widmlzaWJpbGl0eVwiXSl9KGQpLGZ1bmN0aW9uKGEsYil7ZnVuY3Rpb24gYyhhKXthPWEudHJpbSgpLGYuZmlsbFN0eWxlPVwiIzAwMFwiLGYuZmlsbFN0eWxlPWE7dmFyIGI9Zi5maWxsU3R5bGU7aWYoZi5maWxsU3R5bGU9XCIjZmZmXCIsZi5maWxsU3R5bGU9YSxiPT1mLmZpbGxTdHlsZSl7Zi5maWxsUmVjdCgwLDAsMSwxKTt2YXIgYz1mLmdldEltYWdlRGF0YSgwLDAsMSwxKS5kYXRhO2YuY2xlYXJSZWN0KDAsMCwxLDEpO3ZhciBkPWNbM10vMjU1O3JldHVybltjWzBdKmQsY1sxXSpkLGNbMl0qZCxkXX19ZnVuY3Rpb24gZChiLGMpe3JldHVybltiLGMsZnVuY3Rpb24oYil7ZnVuY3Rpb24gYyhhKXtyZXR1cm4gTWF0aC5tYXgoMCxNYXRoLm1pbigyNTUsYSkpfWlmKGJbM10pZm9yKHZhciBkPTA7ZDwzO2QrKyliW2RdPU1hdGgucm91bmQoYyhiW2RdL2JbM10pKTtyZXR1cm4gYlszXT1hLm51bWJlclRvU3RyaW5nKGEuY2xhbXAoMCwxLGJbM10pKSxcInJnYmEoXCIrYi5qb2luKFwiLFwiKStcIilcIn1dfXZhciBlPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhcImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGh0bWxcIixcImNhbnZhc1wiKTtlLndpZHRoPWUuaGVpZ2h0PTE7dmFyIGY9ZS5nZXRDb250ZXh0KFwiMmRcIik7YS5hZGRQcm9wZXJ0aWVzSGFuZGxlcihjLGQsW1wiYmFja2dyb3VuZC1jb2xvclwiLFwiYm9yZGVyLWJvdHRvbS1jb2xvclwiLFwiYm9yZGVyLWxlZnQtY29sb3JcIixcImJvcmRlci1yaWdodC1jb2xvclwiLFwiYm9yZGVyLXRvcC1jb2xvclwiLFwiY29sb3JcIixcImZpbGxcIixcImZsb29kLWNvbG9yXCIsXCJsaWdodGluZy1jb2xvclwiLFwib3V0bGluZS1jb2xvclwiLFwic3RvcC1jb2xvclwiLFwic3Ryb2tlXCIsXCJ0ZXh0LWRlY29yYXRpb24tY29sb3JcIl0pLGEuY29uc3VtZUNvbG9yPWEuY29uc3VtZVBhcmVudGhlc2lzZWQuYmluZChudWxsLGMpLGEubWVyZ2VDb2xvcnM9ZH0oZCksZnVuY3Rpb24oYSxiKXtmdW5jdGlvbiBjKGEpe2Z1bmN0aW9uIGIoKXt2YXIgYj1oLmV4ZWMoYSk7Zz1iP2JbMF06dm9pZCAwfWZ1bmN0aW9uIGMoKXt2YXIgYT1OdW1iZXIoZyk7cmV0dXJuIGIoKSxhfWZ1bmN0aW9uIGQoKXtpZihcIihcIiE9PWcpcmV0dXJuIGMoKTtiKCk7dmFyIGE9ZigpO3JldHVyblwiKVwiIT09Zz9OYU46KGIoKSxhKX1mdW5jdGlvbiBlKCl7Zm9yKHZhciBhPWQoKTtcIipcIj09PWd8fFwiL1wiPT09Zzspe3ZhciBjPWc7YigpO3ZhciBlPWQoKTtcIipcIj09PWM/YSo9ZTphLz1lfXJldHVybiBhfWZ1bmN0aW9uIGYoKXtmb3IodmFyIGE9ZSgpO1wiK1wiPT09Z3x8XCItXCI9PT1nOyl7dmFyIGM9ZztiKCk7dmFyIGQ9ZSgpO1wiK1wiPT09Yz9hKz1kOmEtPWR9cmV0dXJuIGF9dmFyIGcsaD0vKFtcXCtcXC1cXHdcXC5dK3xbXFwoXFwpXFwqXFwvXSkvZztyZXR1cm4gYigpLGYoKX1mdW5jdGlvbiBkKGEsYil7aWYoXCIwXCI9PShiPWIudHJpbSgpLnRvTG93ZXJDYXNlKCkpJiZcInB4XCIuc2VhcmNoKGEpPj0wKXJldHVybntweDowfTtpZigvXlteKF0qJHxeY2FsYy8udGVzdChiKSl7Yj1iLnJlcGxhY2UoL2NhbGNcXCgvZyxcIihcIik7dmFyIGQ9e307Yj1iLnJlcGxhY2UoYSxmdW5jdGlvbihhKXtyZXR1cm4gZFthXT1udWxsLFwiVVwiK2F9KTtmb3IodmFyIGU9XCJVKFwiK2Euc291cmNlK1wiKVwiLGY9Yi5yZXBsYWNlKC9bLStdPyhcXGQqXFwuKT9cXGQrKFtFZV1bLStdP1xcZCspPy9nLFwiTlwiKS5yZXBsYWNlKG5ldyBSZWdFeHAoXCJOXCIrZSxcImdcIiksXCJEXCIpLnJlcGxhY2UoL1xcc1srLV1cXHMvZyxcIk9cIikucmVwbGFjZSgvXFxzL2csXCJcIiksZz1bL05cXCooRCkvZywvKE58RClbKlxcL11OL2csLyhOfEQpT1xcMS9nLC9cXCgoTnxEKVxcKS9nXSxoPTA7aDxnLmxlbmd0aDspZ1toXS50ZXN0KGYpPyhmPWYucmVwbGFjZShnW2hdLFwiJDFcIiksaD0wKTpoKys7aWYoXCJEXCI9PWYpe2Zvcih2YXIgaSBpbiBkKXt2YXIgaj1jKGIucmVwbGFjZShuZXcgUmVnRXhwKFwiVVwiK2ksXCJnXCIpLFwiXCIpLnJlcGxhY2UobmV3IFJlZ0V4cChlLFwiZ1wiKSxcIiowXCIpKTtpZighaXNGaW5pdGUoaikpcmV0dXJuO2RbaV09an1yZXR1cm4gZH19fWZ1bmN0aW9uIGUoYSxiKXtyZXR1cm4gZihhLGIsITApfWZ1bmN0aW9uIGYoYixjLGQpe3ZhciBlLGY9W107Zm9yKGUgaW4gYilmLnB1c2goZSk7Zm9yKGUgaW4gYylmLmluZGV4T2YoZSk8MCYmZi5wdXNoKGUpO3JldHVybiBiPWYubWFwKGZ1bmN0aW9uKGEpe3JldHVybiBiW2FdfHwwfSksYz1mLm1hcChmdW5jdGlvbihhKXtyZXR1cm4gY1thXXx8MH0pLFtiLGMsZnVuY3Rpb24oYil7dmFyIGM9Yi5tYXAoZnVuY3Rpb24oYyxlKXtyZXR1cm4gMT09Yi5sZW5ndGgmJmQmJihjPU1hdGgubWF4KGMsMCkpLGEubnVtYmVyVG9TdHJpbmcoYykrZltlXX0pLmpvaW4oXCIgKyBcIik7cmV0dXJuIGIubGVuZ3RoPjE/XCJjYWxjKFwiK2MrXCIpXCI6Y31dfXZhciBnPVwicHh8ZW18ZXh8Y2h8cmVtfHZ3fHZofHZtaW58dm1heHxjbXxtbXxpbnxwdHxwY1wiLGg9ZC5iaW5kKG51bGwsbmV3IFJlZ0V4cChnLFwiZ1wiKSksaT1kLmJpbmQobnVsbCxuZXcgUmVnRXhwKGcrXCJ8JVwiLFwiZ1wiKSksaj1kLmJpbmQobnVsbCwvZGVnfHJhZHxncmFkfHR1cm4vZyk7YS5wYXJzZUxlbmd0aD1oLGEucGFyc2VMZW5ndGhPclBlcmNlbnQ9aSxhLmNvbnN1bWVMZW5ndGhPclBlcmNlbnQ9YS5jb25zdW1lUGFyZW50aGVzaXNlZC5iaW5kKG51bGwsaSksYS5wYXJzZUFuZ2xlPWosYS5tZXJnZURpbWVuc2lvbnM9Zjt2YXIgaz1hLmNvbnN1bWVQYXJlbnRoZXNpc2VkLmJpbmQobnVsbCxoKSxsPWEuY29uc3VtZVJlcGVhdGVkLmJpbmQodm9pZCAwLGssL14vKSxtPWEuY29uc3VtZVJlcGVhdGVkLmJpbmQodm9pZCAwLGwsL14sLyk7YS5jb25zdW1lU2l6ZVBhaXJMaXN0PW07dmFyIG49ZnVuY3Rpb24oYSl7dmFyIGI9bShhKTtpZihiJiZcIlwiPT1iWzFdKXJldHVybiBiWzBdfSxvPWEubWVyZ2VOZXN0ZWRSZXBlYXRlZC5iaW5kKHZvaWQgMCxlLFwiIFwiKSxwPWEubWVyZ2VOZXN0ZWRSZXBlYXRlZC5iaW5kKHZvaWQgMCxvLFwiLFwiKTthLm1lcmdlTm9uTmVnYXRpdmVTaXplUGFpcj1vLGEuYWRkUHJvcGVydGllc0hhbmRsZXIobixwLFtcImJhY2tncm91bmQtc2l6ZVwiXSksYS5hZGRQcm9wZXJ0aWVzSGFuZGxlcihpLGUsW1wiYm9yZGVyLWJvdHRvbS13aWR0aFwiLFwiYm9yZGVyLWltYWdlLXdpZHRoXCIsXCJib3JkZXItbGVmdC13aWR0aFwiLFwiYm9yZGVyLXJpZ2h0LXdpZHRoXCIsXCJib3JkZXItdG9wLXdpZHRoXCIsXCJmbGV4LWJhc2lzXCIsXCJmb250LXNpemVcIixcImhlaWdodFwiLFwibGluZS1oZWlnaHRcIixcIm1heC1oZWlnaHRcIixcIm1heC13aWR0aFwiLFwib3V0bGluZS13aWR0aFwiLFwid2lkdGhcIl0pLGEuYWRkUHJvcGVydGllc0hhbmRsZXIoaSxmLFtcImJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXNcIixcImJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzXCIsXCJib3JkZXItdG9wLWxlZnQtcmFkaXVzXCIsXCJib3JkZXItdG9wLXJpZ2h0LXJhZGl1c1wiLFwiYm90dG9tXCIsXCJsZWZ0XCIsXCJsZXR0ZXItc3BhY2luZ1wiLFwibWFyZ2luLWJvdHRvbVwiLFwibWFyZ2luLWxlZnRcIixcIm1hcmdpbi1yaWdodFwiLFwibWFyZ2luLXRvcFwiLFwibWluLWhlaWdodFwiLFwibWluLXdpZHRoXCIsXCJvdXRsaW5lLW9mZnNldFwiLFwicGFkZGluZy1ib3R0b21cIixcInBhZGRpbmctbGVmdFwiLFwicGFkZGluZy1yaWdodFwiLFwicGFkZGluZy10b3BcIixcInBlcnNwZWN0aXZlXCIsXCJyaWdodFwiLFwic2hhcGUtbWFyZ2luXCIsXCJzdHJva2UtZGFzaG9mZnNldFwiLFwidGV4dC1pbmRlbnRcIixcInRvcFwiLFwidmVydGljYWwtYWxpZ25cIixcIndvcmQtc3BhY2luZ1wiXSl9KGQpLGZ1bmN0aW9uKGEsYil7ZnVuY3Rpb24gYyhiKXtyZXR1cm4gYS5jb25zdW1lTGVuZ3RoT3JQZXJjZW50KGIpfHxhLmNvbnN1bWVUb2tlbigvXmF1dG8vLGIpfWZ1bmN0aW9uIGQoYil7dmFyIGQ9YS5jb25zdW1lTGlzdChbYS5pZ25vcmUoYS5jb25zdW1lVG9rZW4uYmluZChudWxsLC9ecmVjdC8pKSxhLmlnbm9yZShhLmNvbnN1bWVUb2tlbi5iaW5kKG51bGwsL15cXCgvKSksYS5jb25zdW1lUmVwZWF0ZWQuYmluZChudWxsLGMsL14sLyksYS5pZ25vcmUoYS5jb25zdW1lVG9rZW4uYmluZChudWxsLC9eXFwpLykpXSxiKTtpZihkJiY0PT1kWzBdLmxlbmd0aClyZXR1cm4gZFswXX1mdW5jdGlvbiBlKGIsYyl7cmV0dXJuXCJhdXRvXCI9PWJ8fFwiYXV0b1wiPT1jP1shMCwhMSxmdW5jdGlvbihkKXt2YXIgZT1kP2I6YztpZihcImF1dG9cIj09ZSlyZXR1cm5cImF1dG9cIjt2YXIgZj1hLm1lcmdlRGltZW5zaW9ucyhlLGUpO3JldHVybiBmWzJdKGZbMF0pfV06YS5tZXJnZURpbWVuc2lvbnMoYixjKX1mdW5jdGlvbiBmKGEpe3JldHVyblwicmVjdChcIithK1wiKVwifXZhciBnPWEubWVyZ2VXcmFwcGVkTmVzdGVkUmVwZWF0ZWQuYmluZChudWxsLGYsZSxcIiwgXCIpO2EucGFyc2VCb3g9ZCxhLm1lcmdlQm94ZXM9ZyxhLmFkZFByb3BlcnRpZXNIYW5kbGVyKGQsZyxbXCJjbGlwXCJdKX0oZCksZnVuY3Rpb24oYSxiKXtmdW5jdGlvbiBjKGEpe3JldHVybiBmdW5jdGlvbihiKXt2YXIgYz0wO3JldHVybiBhLm1hcChmdW5jdGlvbihhKXtyZXR1cm4gYT09PWs/YltjKytdOmF9KX19ZnVuY3Rpb24gZChhKXtyZXR1cm4gYX1mdW5jdGlvbiBlKGIpe2lmKFwibm9uZVwiPT0oYj1iLnRvTG93ZXJDYXNlKCkudHJpbSgpKSlyZXR1cm5bXTtmb3IodmFyIGMsZD0vXFxzKihcXHcrKVxcKChbXildKilcXCkvZyxlPVtdLGY9MDtjPWQuZXhlYyhiKTspe2lmKGMuaW5kZXghPWYpcmV0dXJuO2Y9Yy5pbmRleCtjWzBdLmxlbmd0aDt2YXIgZz1jWzFdLGg9bltnXTtpZighaClyZXR1cm47dmFyIGk9Y1syXS5zcGxpdChcIixcIiksaj1oWzBdO2lmKGoubGVuZ3RoPGkubGVuZ3RoKXJldHVybjtmb3IodmFyIGs9W10sbz0wO288ai5sZW5ndGg7bysrKXt2YXIgcCxxPWlbb10scj1qW29dO2lmKHZvaWQgMD09PShwPXE/e0E6ZnVuY3Rpb24oYil7cmV0dXJuXCIwXCI9PWIudHJpbSgpP206YS5wYXJzZUFuZ2xlKGIpfSxOOmEucGFyc2VOdW1iZXIsVDphLnBhcnNlTGVuZ3RoT3JQZXJjZW50LEw6YS5wYXJzZUxlbmd0aH1bci50b1VwcGVyQ2FzZSgpXShxKTp7YTptLG46a1swXSx0Omx9W3JdKSlyZXR1cm47ay5wdXNoKHApfWlmKGUucHVzaCh7dDpnLGQ6a30pLGQubGFzdEluZGV4PT1iLmxlbmd0aClyZXR1cm4gZX19ZnVuY3Rpb24gZihhKXtyZXR1cm4gYS50b0ZpeGVkKDYpLnJlcGxhY2UoXCIuMDAwMDAwXCIsXCJcIil9ZnVuY3Rpb24gZyhiLGMpe2lmKGIuZGVjb21wb3NpdGlvblBhaXIhPT1jKXtiLmRlY29tcG9zaXRpb25QYWlyPWM7dmFyIGQ9YS5tYWtlTWF0cml4RGVjb21wb3NpdGlvbihiKX1pZihjLmRlY29tcG9zaXRpb25QYWlyIT09Yil7Yy5kZWNvbXBvc2l0aW9uUGFpcj1iO3ZhciBlPWEubWFrZU1hdHJpeERlY29tcG9zaXRpb24oYyl9cmV0dXJuIG51bGw9PWRbMF18fG51bGw9PWVbMF0/W1shMV0sWyEwXSxmdW5jdGlvbihhKXtyZXR1cm4gYT9jWzBdLmQ6YlswXS5kfV06KGRbMF0ucHVzaCgwKSxlWzBdLnB1c2goMSksW2QsZSxmdW5jdGlvbihiKXt2YXIgYz1hLnF1YXQoZFswXVszXSxlWzBdWzNdLGJbNV0pO3JldHVybiBhLmNvbXBvc2VNYXRyaXgoYlswXSxiWzFdLGJbMl0sYyxiWzRdKS5tYXAoZikuam9pbihcIixcIil9XSl9ZnVuY3Rpb24gaChhKXtyZXR1cm4gYS5yZXBsYWNlKC9beHldLyxcIlwiKX1mdW5jdGlvbiBpKGEpe3JldHVybiBhLnJlcGxhY2UoLyh4fHl8enwzZCk/JC8sXCIzZFwiKX1mdW5jdGlvbiBqKGIsYyl7dmFyIGQ9YS5tYWtlTWF0cml4RGVjb21wb3NpdGlvbiYmITAsZT0hMTtpZighYi5sZW5ndGh8fCFjLmxlbmd0aCl7Yi5sZW5ndGh8fChlPSEwLGI9YyxjPVtdKTtmb3IodmFyIGY9MDtmPGIubGVuZ3RoO2YrKyl7dmFyIGo9YltmXS50LGs9YltmXS5kLGw9XCJzY2FsZVwiPT1qLnN1YnN0cigwLDUpPzE6MDtjLnB1c2goe3Q6aixkOmsubWFwKGZ1bmN0aW9uKGEpe2lmKFwibnVtYmVyXCI9PXR5cGVvZiBhKXJldHVybiBsO3ZhciBiPXt9O2Zvcih2YXIgYyBpbiBhKWJbY109bDtyZXR1cm4gYn0pfSl9fXZhciBtPWZ1bmN0aW9uKGEsYil7cmV0dXJuXCJwZXJzcGVjdGl2ZVwiPT1hJiZcInBlcnNwZWN0aXZlXCI9PWJ8fChcIm1hdHJpeFwiPT1hfHxcIm1hdHJpeDNkXCI9PWEpJiYoXCJtYXRyaXhcIj09Ynx8XCJtYXRyaXgzZFwiPT1iKX0sbz1bXSxwPVtdLHE9W107aWYoYi5sZW5ndGghPWMubGVuZ3RoKXtpZighZClyZXR1cm47dmFyIHI9ZyhiLGMpO289W3JbMF1dLHA9W3JbMV1dLHE9W1tcIm1hdHJpeFwiLFtyWzJdXV1dfWVsc2UgZm9yKHZhciBmPTA7ZjxiLmxlbmd0aDtmKyspe3ZhciBqLHM9YltmXS50LHQ9Y1tmXS50LHU9YltmXS5kLHY9Y1tmXS5kLHc9bltzXSx4PW5bdF07aWYobShzLHQpKXtpZighZClyZXR1cm47dmFyIHI9ZyhbYltmXV0sW2NbZl1dKTtvLnB1c2goclswXSkscC5wdXNoKHJbMV0pLHEucHVzaChbXCJtYXRyaXhcIixbclsyXV1dKX1lbHNle2lmKHM9PXQpaj1zO2Vsc2UgaWYod1syXSYmeFsyXSYmaChzKT09aCh0KSlqPWgocyksdT13WzJdKHUpLHY9eFsyXSh2KTtlbHNle2lmKCF3WzFdfHwheFsxXXx8aShzKSE9aSh0KSl7aWYoIWQpcmV0dXJuO3ZhciByPWcoYixjKTtvPVtyWzBdXSxwPVtyWzFdXSxxPVtbXCJtYXRyaXhcIixbclsyXV1dXTticmVha31qPWkocyksdT13WzFdKHUpLHY9eFsxXSh2KX1mb3IodmFyIHk9W10sej1bXSxBPVtdLEI9MDtCPHUubGVuZ3RoO0IrKyl7dmFyIEM9XCJudW1iZXJcIj09dHlwZW9mIHVbQl0/YS5tZXJnZU51bWJlcnM6YS5tZXJnZURpbWVuc2lvbnMscj1DKHVbQl0sdltCXSk7eVtCXT1yWzBdLHpbQl09clsxXSxBLnB1c2goclsyXSl9by5wdXNoKHkpLHAucHVzaCh6KSxxLnB1c2goW2osQV0pfX1pZihlKXt2YXIgRD1vO289cCxwPUR9cmV0dXJuW28scCxmdW5jdGlvbihhKXtyZXR1cm4gYS5tYXAoZnVuY3Rpb24oYSxiKXt2YXIgYz1hLm1hcChmdW5jdGlvbihhLGMpe3JldHVybiBxW2JdWzFdW2NdKGEpfSkuam9pbihcIixcIik7cmV0dXJuXCJtYXRyaXhcIj09cVtiXVswXSYmMTY9PWMuc3BsaXQoXCIsXCIpLmxlbmd0aCYmKHFbYl1bMF09XCJtYXRyaXgzZFwiKSxxW2JdWzBdK1wiKFwiK2MrXCIpXCJ9KS5qb2luKFwiIFwiKX1dfXZhciBrPW51bGwsbD17cHg6MH0sbT17ZGVnOjB9LG49e21hdHJpeDpbXCJOTk5OTk5cIixbayxrLDAsMCxrLGssMCwwLDAsMCwxLDAsayxrLDAsMV0sZF0sbWF0cml4M2Q6W1wiTk5OTk5OTk5OTk5OTk5OTlwiLGRdLHJvdGF0ZTpbXCJBXCJdLHJvdGF0ZXg6W1wiQVwiXSxyb3RhdGV5OltcIkFcIl0scm90YXRlejpbXCJBXCJdLHJvdGF0ZTNkOltcIk5OTkFcIl0scGVyc3BlY3RpdmU6W1wiTFwiXSxzY2FsZTpbXCJOblwiLGMoW2ssaywxXSksZF0sc2NhbGV4OltcIk5cIixjKFtrLDEsMV0pLGMoW2ssMV0pXSxzY2FsZXk6W1wiTlwiLGMoWzEsaywxXSksYyhbMSxrXSldLHNjYWxlejpbXCJOXCIsYyhbMSwxLGtdKV0sc2NhbGUzZDpbXCJOTk5cIixkXSxza2V3OltcIkFhXCIsbnVsbCxkXSxza2V3eDpbXCJBXCIsbnVsbCxjKFtrLG1dKV0sc2tld3k6W1wiQVwiLG51bGwsYyhbbSxrXSldLHRyYW5zbGF0ZTpbXCJUdFwiLGMoW2ssayxsXSksZF0sdHJhbnNsYXRleDpbXCJUXCIsYyhbayxsLGxdKSxjKFtrLGxdKV0sdHJhbnNsYXRleTpbXCJUXCIsYyhbbCxrLGxdKSxjKFtsLGtdKV0sdHJhbnNsYXRlejpbXCJMXCIsYyhbbCxsLGtdKV0sdHJhbnNsYXRlM2Q6W1wiVFRMXCIsZF19O2EuYWRkUHJvcGVydGllc0hhbmRsZXIoZSxqLFtcInRyYW5zZm9ybVwiXSksYS50cmFuc2Zvcm1Ub1N2Z01hdHJpeD1mdW5jdGlvbihiKXt2YXIgYz1hLnRyYW5zZm9ybUxpc3RUb01hdHJpeChlKGIpKTtyZXR1cm5cIm1hdHJpeChcIitmKGNbMF0pK1wiIFwiK2YoY1sxXSkrXCIgXCIrZihjWzRdKStcIiBcIitmKGNbNV0pK1wiIFwiK2YoY1sxMl0pK1wiIFwiK2YoY1sxM10pK1wiKVwifX0oZCksZnVuY3Rpb24oYSxiKXtmdW5jdGlvbiBjKGEsYil7Yi5jb25jYXQoW2FdKS5mb3JFYWNoKGZ1bmN0aW9uKGIpe2IgaW4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlJiYoZFthXT1iKSxlW2JdPWF9KX12YXIgZD17fSxlPXt9O2MoXCJ0cmFuc2Zvcm1cIixbXCJ3ZWJraXRUcmFuc2Zvcm1cIixcIm1zVHJhbnNmb3JtXCJdKSxjKFwidHJhbnNmb3JtT3JpZ2luXCIsW1wid2Via2l0VHJhbnNmb3JtT3JpZ2luXCJdKSxjKFwicGVyc3BlY3RpdmVcIixbXCJ3ZWJraXRQZXJzcGVjdGl2ZVwiXSksYyhcInBlcnNwZWN0aXZlT3JpZ2luXCIsW1wid2Via2l0UGVyc3BlY3RpdmVPcmlnaW5cIl0pLGEucHJvcGVydHlOYW1lPWZ1bmN0aW9uKGEpe3JldHVybiBkW2FdfHxhfSxhLnVucHJlZml4ZWRQcm9wZXJ0eU5hbWU9ZnVuY3Rpb24oYSl7cmV0dXJuIGVbYV18fGF9fShkKX0oKSxmdW5jdGlvbigpe2lmKHZvaWQgMD09PWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIikuYW5pbWF0ZShbXSkub25jYW5jZWwpe3ZhciBhO2lmKHdpbmRvdy5wZXJmb3JtYW5jZSYmcGVyZm9ybWFuY2Uubm93KXZhciBhPWZ1bmN0aW9uKCl7cmV0dXJuIHBlcmZvcm1hbmNlLm5vdygpfTtlbHNlIHZhciBhPWZ1bmN0aW9uKCl7cmV0dXJuIERhdGUubm93KCl9O3ZhciBiPWZ1bmN0aW9uKGEsYixjKXt0aGlzLnRhcmdldD1hLHRoaXMuY3VycmVudFRpbWU9Yix0aGlzLnRpbWVsaW5lVGltZT1jLHRoaXMudHlwZT1cImNhbmNlbFwiLHRoaXMuYnViYmxlcz0hMSx0aGlzLmNhbmNlbGFibGU9ITEsdGhpcy5jdXJyZW50VGFyZ2V0PWEsdGhpcy5kZWZhdWx0UHJldmVudGVkPSExLHRoaXMuZXZlbnRQaGFzZT1FdmVudC5BVF9UQVJHRVQsdGhpcy50aW1lU3RhbXA9RGF0ZS5ub3coKX0sYz13aW5kb3cuRWxlbWVudC5wcm90b3R5cGUuYW5pbWF0ZTt3aW5kb3cuRWxlbWVudC5wcm90b3R5cGUuYW5pbWF0ZT1mdW5jdGlvbihkLGUpe3ZhciBmPWMuY2FsbCh0aGlzLGQsZSk7Zi5fY2FuY2VsSGFuZGxlcnM9W10sZi5vbmNhbmNlbD1udWxsO3ZhciBnPWYuY2FuY2VsO2YuY2FuY2VsPWZ1bmN0aW9uKCl7Zy5jYWxsKHRoaXMpO3ZhciBjPW5ldyBiKHRoaXMsbnVsbCxhKCkpLGQ9dGhpcy5fY2FuY2VsSGFuZGxlcnMuY29uY2F0KHRoaXMub25jYW5jZWw/W3RoaXMub25jYW5jZWxdOltdKTtzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7ZC5mb3JFYWNoKGZ1bmN0aW9uKGEpe2EuY2FsbChjLnRhcmdldCxjKX0pfSwwKX07dmFyIGg9Zi5hZGRFdmVudExpc3RlbmVyO2YuYWRkRXZlbnRMaXN0ZW5lcj1mdW5jdGlvbihhLGIpe1wiZnVuY3Rpb25cIj09dHlwZW9mIGImJlwiY2FuY2VsXCI9PWE/dGhpcy5fY2FuY2VsSGFuZGxlcnMucHVzaChiKTpoLmNhbGwodGhpcyxhLGIpfTt2YXIgaT1mLnJlbW92ZUV2ZW50TGlzdGVuZXI7cmV0dXJuIGYucmVtb3ZlRXZlbnRMaXN0ZW5lcj1mdW5jdGlvbihhLGIpe2lmKFwiY2FuY2VsXCI9PWEpe3ZhciBjPXRoaXMuX2NhbmNlbEhhbmRsZXJzLmluZGV4T2YoYik7Yz49MCYmdGhpcy5fY2FuY2VsSGFuZGxlcnMuc3BsaWNlKGMsMSl9ZWxzZSBpLmNhbGwodGhpcyxhLGIpfSxmfX19KCksZnVuY3Rpb24oYSl7dmFyIGI9ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LGM9bnVsbCxkPSExO3RyeXt2YXIgZT1nZXRDb21wdXRlZFN0eWxlKGIpLmdldFByb3BlcnR5VmFsdWUoXCJvcGFjaXR5XCIpLGY9XCIwXCI9PWU/XCIxXCI6XCIwXCI7Yz1iLmFuaW1hdGUoe29wYWNpdHk6W2YsZl19LHtkdXJhdGlvbjoxfSksYy5jdXJyZW50VGltZT0wLGQ9Z2V0Q29tcHV0ZWRTdHlsZShiKS5nZXRQcm9wZXJ0eVZhbHVlKFwib3BhY2l0eVwiKT09Zn1jYXRjaChhKXt9ZmluYWxseXtjJiZjLmNhbmNlbCgpfWlmKCFkKXt2YXIgZz13aW5kb3cuRWxlbWVudC5wcm90b3R5cGUuYW5pbWF0ZTt3aW5kb3cuRWxlbWVudC5wcm90b3R5cGUuYW5pbWF0ZT1mdW5jdGlvbihiLGMpe3JldHVybiB3aW5kb3cuU3ltYm9sJiZTeW1ib2wuaXRlcmF0b3ImJkFycmF5LnByb3RvdHlwZS5mcm9tJiZiW1N5bWJvbC5pdGVyYXRvcl0mJihiPUFycmF5LmZyb20oYikpLEFycmF5LmlzQXJyYXkoYil8fG51bGw9PT1ifHwoYj1hLmNvbnZlcnRUb0FycmF5Rm9ybShiKSksZy5jYWxsKHRoaXMsYixjKX19fShjKSxmdW5jdGlvbihhLGIsYyl7ZnVuY3Rpb24gZChhKXt2YXIgYz1iLnRpbWVsaW5lO2MuY3VycmVudFRpbWU9YSxjLl9kaXNjYXJkQW5pbWF0aW9ucygpLDA9PWMuX2FuaW1hdGlvbnMubGVuZ3RoP2Y9ITE6cmVxdWVzdEFuaW1hdGlvbkZyYW1lKGQpfXZhciBlPXdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWU7d2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZT1mdW5jdGlvbihhKXtyZXR1cm4gZShmdW5jdGlvbihjKXtiLnRpbWVsaW5lLl91cGRhdGVBbmltYXRpb25zUHJvbWlzZXMoKSxhKGMpLGIudGltZWxpbmUuX3VwZGF0ZUFuaW1hdGlvbnNQcm9taXNlcygpfSl9LGIuQW5pbWF0aW9uVGltZWxpbmU9ZnVuY3Rpb24oKXt0aGlzLl9hbmltYXRpb25zPVtdLHRoaXMuY3VycmVudFRpbWU9dm9pZCAwfSxiLkFuaW1hdGlvblRpbWVsaW5lLnByb3RvdHlwZT17Z2V0QW5pbWF0aW9uczpmdW5jdGlvbigpe3JldHVybiB0aGlzLl9kaXNjYXJkQW5pbWF0aW9ucygpLHRoaXMuX2FuaW1hdGlvbnMuc2xpY2UoKX0sX3VwZGF0ZUFuaW1hdGlvbnNQcm9taXNlczpmdW5jdGlvbigpe2IuYW5pbWF0aW9uc1dpdGhQcm9taXNlcz1iLmFuaW1hdGlvbnNXaXRoUHJvbWlzZXMuZmlsdGVyKGZ1bmN0aW9uKGEpe3JldHVybiBhLl91cGRhdGVQcm9taXNlcygpfSl9LF9kaXNjYXJkQW5pbWF0aW9uczpmdW5jdGlvbigpe3RoaXMuX3VwZGF0ZUFuaW1hdGlvbnNQcm9taXNlcygpLHRoaXMuX2FuaW1hdGlvbnM9dGhpcy5fYW5pbWF0aW9ucy5maWx0ZXIoZnVuY3Rpb24oYSl7cmV0dXJuXCJmaW5pc2hlZFwiIT1hLnBsYXlTdGF0ZSYmXCJpZGxlXCIhPWEucGxheVN0YXRlfSl9LF9wbGF5OmZ1bmN0aW9uKGEpe3ZhciBjPW5ldyBiLkFuaW1hdGlvbihhLHRoaXMpO3JldHVybiB0aGlzLl9hbmltYXRpb25zLnB1c2goYyksYi5yZXN0YXJ0V2ViQW5pbWF0aW9uc05leHRUaWNrKCksYy5fdXBkYXRlUHJvbWlzZXMoKSxjLl9hbmltYXRpb24ucGxheSgpLGMuX3VwZGF0ZVByb21pc2VzKCksY30scGxheTpmdW5jdGlvbihhKXtyZXR1cm4gYSYmYS5yZW1vdmUoKSx0aGlzLl9wbGF5KGEpfX07dmFyIGY9ITE7Yi5yZXN0YXJ0V2ViQW5pbWF0aW9uc05leHRUaWNrPWZ1bmN0aW9uKCl7Znx8KGY9ITAscmVxdWVzdEFuaW1hdGlvbkZyYW1lKGQpKX07dmFyIGc9bmV3IGIuQW5pbWF0aW9uVGltZWxpbmU7Yi50aW1lbGluZT1nO3RyeXtPYmplY3QuZGVmaW5lUHJvcGVydHkod2luZG93LmRvY3VtZW50LFwidGltZWxpbmVcIix7Y29uZmlndXJhYmxlOiEwLGdldDpmdW5jdGlvbigpe3JldHVybiBnfX0pfWNhdGNoKGEpe310cnl7d2luZG93LmRvY3VtZW50LnRpbWVsaW5lPWd9Y2F0Y2goYSl7fX0oMCxlKSxmdW5jdGlvbihhLGIsYyl7Yi5hbmltYXRpb25zV2l0aFByb21pc2VzPVtdLGIuQW5pbWF0aW9uPWZ1bmN0aW9uKGIsYyl7aWYodGhpcy5pZD1cIlwiLGImJmIuX2lkJiYodGhpcy5pZD1iLl9pZCksdGhpcy5lZmZlY3Q9YixiJiYoYi5fYW5pbWF0aW9uPXRoaXMpLCFjKXRocm93IG5ldyBFcnJvcihcIkFuaW1hdGlvbiB3aXRoIG51bGwgdGltZWxpbmUgaXMgbm90IHN1cHBvcnRlZFwiKTt0aGlzLl90aW1lbGluZT1jLHRoaXMuX3NlcXVlbmNlTnVtYmVyPWEuc2VxdWVuY2VOdW1iZXIrKyx0aGlzLl9ob2xkVGltZT0wLHRoaXMuX3BhdXNlZD0hMSx0aGlzLl9pc0dyb3VwPSExLHRoaXMuX2FuaW1hdGlvbj1udWxsLHRoaXMuX2NoaWxkQW5pbWF0aW9ucz1bXSx0aGlzLl9jYWxsYmFjaz1udWxsLHRoaXMuX29sZFBsYXlTdGF0ZT1cImlkbGVcIix0aGlzLl9yZWJ1aWxkVW5kZXJseWluZ0FuaW1hdGlvbigpLHRoaXMuX2FuaW1hdGlvbi5jYW5jZWwoKSx0aGlzLl91cGRhdGVQcm9taXNlcygpfSxiLkFuaW1hdGlvbi5wcm90b3R5cGU9e191cGRhdGVQcm9taXNlczpmdW5jdGlvbigpe3ZhciBhPXRoaXMuX29sZFBsYXlTdGF0ZSxiPXRoaXMucGxheVN0YXRlO3JldHVybiB0aGlzLl9yZWFkeVByb21pc2UmJmIhPT1hJiYoXCJpZGxlXCI9PWI/KHRoaXMuX3JlamVjdFJlYWR5UHJvbWlzZSgpLHRoaXMuX3JlYWR5UHJvbWlzZT12b2lkIDApOlwicGVuZGluZ1wiPT1hP3RoaXMuX3Jlc29sdmVSZWFkeVByb21pc2UoKTpcInBlbmRpbmdcIj09YiYmKHRoaXMuX3JlYWR5UHJvbWlzZT12b2lkIDApKSx0aGlzLl9maW5pc2hlZFByb21pc2UmJmIhPT1hJiYoXCJpZGxlXCI9PWI/KHRoaXMuX3JlamVjdEZpbmlzaGVkUHJvbWlzZSgpLHRoaXMuX2ZpbmlzaGVkUHJvbWlzZT12b2lkIDApOlwiZmluaXNoZWRcIj09Yj90aGlzLl9yZXNvbHZlRmluaXNoZWRQcm9taXNlKCk6XCJmaW5pc2hlZFwiPT1hJiYodGhpcy5fZmluaXNoZWRQcm9taXNlPXZvaWQgMCkpLHRoaXMuX29sZFBsYXlTdGF0ZT10aGlzLnBsYXlTdGF0ZSx0aGlzLl9yZWFkeVByb21pc2V8fHRoaXMuX2ZpbmlzaGVkUHJvbWlzZX0sX3JlYnVpbGRVbmRlcmx5aW5nQW5pbWF0aW9uOmZ1bmN0aW9uKCl7dGhpcy5fdXBkYXRlUHJvbWlzZXMoKTt2YXIgYSxjLGQsZSxmPSEhdGhpcy5fYW5pbWF0aW9uO2YmJihhPXRoaXMucGxheWJhY2tSYXRlLGM9dGhpcy5fcGF1c2VkLGQ9dGhpcy5zdGFydFRpbWUsZT10aGlzLmN1cnJlbnRUaW1lLHRoaXMuX2FuaW1hdGlvbi5jYW5jZWwoKSx0aGlzLl9hbmltYXRpb24uX3dyYXBwZXI9bnVsbCx0aGlzLl9hbmltYXRpb249bnVsbCksKCF0aGlzLmVmZmVjdHx8dGhpcy5lZmZlY3QgaW5zdGFuY2VvZiB3aW5kb3cuS2V5ZnJhbWVFZmZlY3QpJiYodGhpcy5fYW5pbWF0aW9uPWIubmV3VW5kZXJseWluZ0FuaW1hdGlvbkZvcktleWZyYW1lRWZmZWN0KHRoaXMuZWZmZWN0KSxiLmJpbmRBbmltYXRpb25Gb3JLZXlmcmFtZUVmZmVjdCh0aGlzKSksKHRoaXMuZWZmZWN0IGluc3RhbmNlb2Ygd2luZG93LlNlcXVlbmNlRWZmZWN0fHx0aGlzLmVmZmVjdCBpbnN0YW5jZW9mIHdpbmRvdy5Hcm91cEVmZmVjdCkmJih0aGlzLl9hbmltYXRpb249Yi5uZXdVbmRlcmx5aW5nQW5pbWF0aW9uRm9yR3JvdXAodGhpcy5lZmZlY3QpLGIuYmluZEFuaW1hdGlvbkZvckdyb3VwKHRoaXMpKSx0aGlzLmVmZmVjdCYmdGhpcy5lZmZlY3QuX29uc2FtcGxlJiZiLmJpbmRBbmltYXRpb25Gb3JDdXN0b21FZmZlY3QodGhpcyksZiYmKDEhPWEmJih0aGlzLnBsYXliYWNrUmF0ZT1hKSxudWxsIT09ZD90aGlzLnN0YXJ0VGltZT1kOm51bGwhPT1lP3RoaXMuY3VycmVudFRpbWU9ZTpudWxsIT09dGhpcy5faG9sZFRpbWUmJih0aGlzLmN1cnJlbnRUaW1lPXRoaXMuX2hvbGRUaW1lKSxjJiZ0aGlzLnBhdXNlKCkpLHRoaXMuX3VwZGF0ZVByb21pc2VzKCl9LF91cGRhdGVDaGlsZHJlbjpmdW5jdGlvbigpe2lmKHRoaXMuZWZmZWN0JiZcImlkbGVcIiE9dGhpcy5wbGF5U3RhdGUpe3ZhciBhPXRoaXMuZWZmZWN0Ll90aW1pbmcuZGVsYXk7dGhpcy5fY2hpbGRBbmltYXRpb25zLmZvckVhY2goZnVuY3Rpb24oYyl7dGhpcy5fYXJyYW5nZUNoaWxkcmVuKGMsYSksdGhpcy5lZmZlY3QgaW5zdGFuY2VvZiB3aW5kb3cuU2VxdWVuY2VFZmZlY3QmJihhKz1iLmdyb3VwQ2hpbGREdXJhdGlvbihjLmVmZmVjdCkpfS5iaW5kKHRoaXMpKX19LF9zZXRFeHRlcm5hbEFuaW1hdGlvbjpmdW5jdGlvbihhKXtpZih0aGlzLmVmZmVjdCYmdGhpcy5faXNHcm91cClmb3IodmFyIGI9MDtiPHRoaXMuZWZmZWN0LmNoaWxkcmVuLmxlbmd0aDtiKyspdGhpcy5lZmZlY3QuY2hpbGRyZW5bYl0uX2FuaW1hdGlvbj1hLHRoaXMuX2NoaWxkQW5pbWF0aW9uc1tiXS5fc2V0RXh0ZXJuYWxBbmltYXRpb24oYSl9LF9jb25zdHJ1Y3RDaGlsZEFuaW1hdGlvbnM6ZnVuY3Rpb24oKXtpZih0aGlzLmVmZmVjdCYmdGhpcy5faXNHcm91cCl7dmFyIGE9dGhpcy5lZmZlY3QuX3RpbWluZy5kZWxheTt0aGlzLl9yZW1vdmVDaGlsZEFuaW1hdGlvbnMoKSx0aGlzLmVmZmVjdC5jaGlsZHJlbi5mb3JFYWNoKGZ1bmN0aW9uKGMpe3ZhciBkPWIudGltZWxpbmUuX3BsYXkoYyk7dGhpcy5fY2hpbGRBbmltYXRpb25zLnB1c2goZCksZC5wbGF5YmFja1JhdGU9dGhpcy5wbGF5YmFja1JhdGUsdGhpcy5fcGF1c2VkJiZkLnBhdXNlKCksYy5fYW5pbWF0aW9uPXRoaXMuZWZmZWN0Ll9hbmltYXRpb24sdGhpcy5fYXJyYW5nZUNoaWxkcmVuKGQsYSksdGhpcy5lZmZlY3QgaW5zdGFuY2VvZiB3aW5kb3cuU2VxdWVuY2VFZmZlY3QmJihhKz1iLmdyb3VwQ2hpbGREdXJhdGlvbihjKSl9LmJpbmQodGhpcykpfX0sX2FycmFuZ2VDaGlsZHJlbjpmdW5jdGlvbihhLGIpe251bGw9PT10aGlzLnN0YXJ0VGltZT9hLmN1cnJlbnRUaW1lPXRoaXMuY3VycmVudFRpbWUtYi90aGlzLnBsYXliYWNrUmF0ZTphLnN0YXJ0VGltZSE9PXRoaXMuc3RhcnRUaW1lK2IvdGhpcy5wbGF5YmFja1JhdGUmJihhLnN0YXJ0VGltZT10aGlzLnN0YXJ0VGltZStiL3RoaXMucGxheWJhY2tSYXRlKX0sZ2V0IHRpbWVsaW5lKCl7cmV0dXJuIHRoaXMuX3RpbWVsaW5lfSxnZXQgcGxheVN0YXRlKCl7cmV0dXJuIHRoaXMuX2FuaW1hdGlvbj90aGlzLl9hbmltYXRpb24ucGxheVN0YXRlOlwiaWRsZVwifSxnZXQgZmluaXNoZWQoKXtyZXR1cm4gd2luZG93LlByb21pc2U/KHRoaXMuX2ZpbmlzaGVkUHJvbWlzZXx8KC0xPT1iLmFuaW1hdGlvbnNXaXRoUHJvbWlzZXMuaW5kZXhPZih0aGlzKSYmYi5hbmltYXRpb25zV2l0aFByb21pc2VzLnB1c2godGhpcyksdGhpcy5fZmluaXNoZWRQcm9taXNlPW5ldyBQcm9taXNlKGZ1bmN0aW9uKGEsYil7dGhpcy5fcmVzb2x2ZUZpbmlzaGVkUHJvbWlzZT1mdW5jdGlvbigpe2EodGhpcyl9LHRoaXMuX3JlamVjdEZpbmlzaGVkUHJvbWlzZT1mdW5jdGlvbigpe2Ioe3R5cGU6RE9NRXhjZXB0aW9uLkFCT1JUX0VSUixuYW1lOlwiQWJvcnRFcnJvclwifSl9fS5iaW5kKHRoaXMpKSxcImZpbmlzaGVkXCI9PXRoaXMucGxheVN0YXRlJiZ0aGlzLl9yZXNvbHZlRmluaXNoZWRQcm9taXNlKCkpLHRoaXMuX2ZpbmlzaGVkUHJvbWlzZSk6KGNvbnNvbGUud2FybihcIkFuaW1hdGlvbiBQcm9taXNlcyByZXF1aXJlIEphdmFTY3JpcHQgUHJvbWlzZSBjb25zdHJ1Y3RvclwiKSxudWxsKX0sZ2V0IHJlYWR5KCl7cmV0dXJuIHdpbmRvdy5Qcm9taXNlPyh0aGlzLl9yZWFkeVByb21pc2V8fCgtMT09Yi5hbmltYXRpb25zV2l0aFByb21pc2VzLmluZGV4T2YodGhpcykmJmIuYW5pbWF0aW9uc1dpdGhQcm9taXNlcy5wdXNoKHRoaXMpLHRoaXMuX3JlYWR5UHJvbWlzZT1uZXcgUHJvbWlzZShmdW5jdGlvbihhLGIpe3RoaXMuX3Jlc29sdmVSZWFkeVByb21pc2U9ZnVuY3Rpb24oKXthKHRoaXMpfSx0aGlzLl9yZWplY3RSZWFkeVByb21pc2U9ZnVuY3Rpb24oKXtiKHt0eXBlOkRPTUV4Y2VwdGlvbi5BQk9SVF9FUlIsbmFtZTpcIkFib3J0RXJyb3JcIn0pfX0uYmluZCh0aGlzKSksXCJwZW5kaW5nXCIhPT10aGlzLnBsYXlTdGF0ZSYmdGhpcy5fcmVzb2x2ZVJlYWR5UHJvbWlzZSgpKSx0aGlzLl9yZWFkeVByb21pc2UpOihjb25zb2xlLndhcm4oXCJBbmltYXRpb24gUHJvbWlzZXMgcmVxdWlyZSBKYXZhU2NyaXB0IFByb21pc2UgY29uc3RydWN0b3JcIiksbnVsbCl9LGdldCBvbmZpbmlzaCgpe3JldHVybiB0aGlzLl9hbmltYXRpb24ub25maW5pc2h9LHNldCBvbmZpbmlzaChhKXt0aGlzLl9hbmltYXRpb24ub25maW5pc2g9XCJmdW5jdGlvblwiPT10eXBlb2YgYT9mdW5jdGlvbihiKXtiLnRhcmdldD10aGlzLGEuY2FsbCh0aGlzLGIpfS5iaW5kKHRoaXMpOmF9LGdldCBvbmNhbmNlbCgpe3JldHVybiB0aGlzLl9hbmltYXRpb24ub25jYW5jZWx9LHNldCBvbmNhbmNlbChhKXt0aGlzLl9hbmltYXRpb24ub25jYW5jZWw9XCJmdW5jdGlvblwiPT10eXBlb2YgYT9mdW5jdGlvbihiKXtiLnRhcmdldD10aGlzLGEuY2FsbCh0aGlzLGIpfS5iaW5kKHRoaXMpOmF9LGdldCBjdXJyZW50VGltZSgpe3RoaXMuX3VwZGF0ZVByb21pc2VzKCk7dmFyIGE9dGhpcy5fYW5pbWF0aW9uLmN1cnJlbnRUaW1lO3JldHVybiB0aGlzLl91cGRhdGVQcm9taXNlcygpLGF9LHNldCBjdXJyZW50VGltZShhKXt0aGlzLl91cGRhdGVQcm9taXNlcygpLHRoaXMuX2FuaW1hdGlvbi5jdXJyZW50VGltZT1pc0Zpbml0ZShhKT9hOk1hdGguc2lnbihhKSpOdW1iZXIuTUFYX1ZBTFVFLHRoaXMuX3JlZ2lzdGVyKCksdGhpcy5fZm9yRWFjaENoaWxkKGZ1bmN0aW9uKGIsYyl7Yi5jdXJyZW50VGltZT1hLWN9KSx0aGlzLl91cGRhdGVQcm9taXNlcygpfSxnZXQgc3RhcnRUaW1lKCl7cmV0dXJuIHRoaXMuX2FuaW1hdGlvbi5zdGFydFRpbWV9LHNldCBzdGFydFRpbWUoYSl7dGhpcy5fdXBkYXRlUHJvbWlzZXMoKSx0aGlzLl9hbmltYXRpb24uc3RhcnRUaW1lPWlzRmluaXRlKGEpP2E6TWF0aC5zaWduKGEpKk51bWJlci5NQVhfVkFMVUUsdGhpcy5fcmVnaXN0ZXIoKSx0aGlzLl9mb3JFYWNoQ2hpbGQoZnVuY3Rpb24oYixjKXtiLnN0YXJ0VGltZT1hK2N9KSx0aGlzLl91cGRhdGVQcm9taXNlcygpfSxnZXQgcGxheWJhY2tSYXRlKCl7cmV0dXJuIHRoaXMuX2FuaW1hdGlvbi5wbGF5YmFja1JhdGV9LHNldCBwbGF5YmFja1JhdGUoYSl7dGhpcy5fdXBkYXRlUHJvbWlzZXMoKTt2YXIgYj10aGlzLmN1cnJlbnRUaW1lO3RoaXMuX2FuaW1hdGlvbi5wbGF5YmFja1JhdGU9YSx0aGlzLl9mb3JFYWNoQ2hpbGQoZnVuY3Rpb24oYil7Yi5wbGF5YmFja1JhdGU9YX0pLG51bGwhPT1iJiYodGhpcy5jdXJyZW50VGltZT1iKSx0aGlzLl91cGRhdGVQcm9taXNlcygpfSxwbGF5OmZ1bmN0aW9uKCl7dGhpcy5fdXBkYXRlUHJvbWlzZXMoKSx0aGlzLl9wYXVzZWQ9ITEsdGhpcy5fYW5pbWF0aW9uLnBsYXkoKSwtMT09dGhpcy5fdGltZWxpbmUuX2FuaW1hdGlvbnMuaW5kZXhPZih0aGlzKSYmdGhpcy5fdGltZWxpbmUuX2FuaW1hdGlvbnMucHVzaCh0aGlzKSx0aGlzLl9yZWdpc3RlcigpLGIuYXdhaXRTdGFydFRpbWUodGhpcyksdGhpcy5fZm9yRWFjaENoaWxkKGZ1bmN0aW9uKGEpe3ZhciBiPWEuY3VycmVudFRpbWU7YS5wbGF5KCksYS5jdXJyZW50VGltZT1ifSksdGhpcy5fdXBkYXRlUHJvbWlzZXMoKX0scGF1c2U6ZnVuY3Rpb24oKXt0aGlzLl91cGRhdGVQcm9taXNlcygpLHRoaXMuY3VycmVudFRpbWUmJih0aGlzLl9ob2xkVGltZT10aGlzLmN1cnJlbnRUaW1lKSx0aGlzLl9hbmltYXRpb24ucGF1c2UoKSx0aGlzLl9yZWdpc3RlcigpLHRoaXMuX2ZvckVhY2hDaGlsZChmdW5jdGlvbihhKXthLnBhdXNlKCl9KSx0aGlzLl9wYXVzZWQ9ITAsdGhpcy5fdXBkYXRlUHJvbWlzZXMoKX0sZmluaXNoOmZ1bmN0aW9uKCl7dGhpcy5fdXBkYXRlUHJvbWlzZXMoKSx0aGlzLl9hbmltYXRpb24uZmluaXNoKCksdGhpcy5fcmVnaXN0ZXIoKSx0aGlzLl91cGRhdGVQcm9taXNlcygpfSxjYW5jZWw6ZnVuY3Rpb24oKXt0aGlzLl91cGRhdGVQcm9taXNlcygpLHRoaXMuX2FuaW1hdGlvbi5jYW5jZWwoKSx0aGlzLl9yZWdpc3RlcigpLHRoaXMuX3JlbW92ZUNoaWxkQW5pbWF0aW9ucygpLHRoaXMuX3VwZGF0ZVByb21pc2VzKCl9LHJldmVyc2U6ZnVuY3Rpb24oKXt0aGlzLl91cGRhdGVQcm9taXNlcygpO3ZhciBhPXRoaXMuY3VycmVudFRpbWU7dGhpcy5fYW5pbWF0aW9uLnJldmVyc2UoKSx0aGlzLl9mb3JFYWNoQ2hpbGQoZnVuY3Rpb24oYSl7YS5yZXZlcnNlKCl9KSxudWxsIT09YSYmKHRoaXMuY3VycmVudFRpbWU9YSksdGhpcy5fdXBkYXRlUHJvbWlzZXMoKX0sYWRkRXZlbnRMaXN0ZW5lcjpmdW5jdGlvbihhLGIpe3ZhciBjPWI7XCJmdW5jdGlvblwiPT10eXBlb2YgYiYmKGM9ZnVuY3Rpb24oYSl7YS50YXJnZXQ9dGhpcyxiLmNhbGwodGhpcyxhKX0uYmluZCh0aGlzKSxiLl93cmFwcGVyPWMpLHRoaXMuX2FuaW1hdGlvbi5hZGRFdmVudExpc3RlbmVyKGEsYyl9LHJlbW92ZUV2ZW50TGlzdGVuZXI6ZnVuY3Rpb24oYSxiKXt0aGlzLl9hbmltYXRpb24ucmVtb3ZlRXZlbnRMaXN0ZW5lcihhLGImJmIuX3dyYXBwZXJ8fGIpfSxfcmVtb3ZlQ2hpbGRBbmltYXRpb25zOmZ1bmN0aW9uKCl7Zm9yKDt0aGlzLl9jaGlsZEFuaW1hdGlvbnMubGVuZ3RoOyl0aGlzLl9jaGlsZEFuaW1hdGlvbnMucG9wKCkuY2FuY2VsKCl9LF9mb3JFYWNoQ2hpbGQ6ZnVuY3Rpb24oYil7dmFyIGM9MDtpZih0aGlzLmVmZmVjdC5jaGlsZHJlbiYmdGhpcy5fY2hpbGRBbmltYXRpb25zLmxlbmd0aDx0aGlzLmVmZmVjdC5jaGlsZHJlbi5sZW5ndGgmJnRoaXMuX2NvbnN0cnVjdENoaWxkQW5pbWF0aW9ucygpLHRoaXMuX2NoaWxkQW5pbWF0aW9ucy5mb3JFYWNoKGZ1bmN0aW9uKGEpe2IuY2FsbCh0aGlzLGEsYyksdGhpcy5lZmZlY3QgaW5zdGFuY2VvZiB3aW5kb3cuU2VxdWVuY2VFZmZlY3QmJihjKz1hLmVmZmVjdC5hY3RpdmVEdXJhdGlvbil9LmJpbmQodGhpcykpLFwicGVuZGluZ1wiIT10aGlzLnBsYXlTdGF0ZSl7dmFyIGQ9dGhpcy5lZmZlY3QuX3RpbWluZyxlPXRoaXMuY3VycmVudFRpbWU7bnVsbCE9PWUmJihlPWEuY2FsY3VsYXRlSXRlcmF0aW9uUHJvZ3Jlc3MoYS5jYWxjdWxhdGVBY3RpdmVEdXJhdGlvbihkKSxlLGQpKSwobnVsbD09ZXx8aXNOYU4oZSkpJiZ0aGlzLl9yZW1vdmVDaGlsZEFuaW1hdGlvbnMoKX19fSx3aW5kb3cuQW5pbWF0aW9uPWIuQW5pbWF0aW9ufShjLGUpLGZ1bmN0aW9uKGEsYixjKXtmdW5jdGlvbiBkKGIpe3RoaXMuX2ZyYW1lcz1hLm5vcm1hbGl6ZUtleWZyYW1lcyhiKX1mdW5jdGlvbiBlKCl7Zm9yKHZhciBhPSExO2kubGVuZ3RoOylpLnNoaWZ0KCkuX3VwZGF0ZUNoaWxkcmVuKCksYT0hMDtyZXR1cm4gYX12YXIgZj1mdW5jdGlvbihhKXtpZihhLl9hbmltYXRpb249dm9pZCAwLGEgaW5zdGFuY2VvZiB3aW5kb3cuU2VxdWVuY2VFZmZlY3R8fGEgaW5zdGFuY2VvZiB3aW5kb3cuR3JvdXBFZmZlY3QpZm9yKHZhciBiPTA7YjxhLmNoaWxkcmVuLmxlbmd0aDtiKyspZihhLmNoaWxkcmVuW2JdKX07Yi5yZW1vdmVNdWx0aT1mdW5jdGlvbihhKXtmb3IodmFyIGI9W10sYz0wO2M8YS5sZW5ndGg7YysrKXt2YXIgZD1hW2NdO2QuX3BhcmVudD8oLTE9PWIuaW5kZXhPZihkLl9wYXJlbnQpJiZiLnB1c2goZC5fcGFyZW50KSxkLl9wYXJlbnQuY2hpbGRyZW4uc3BsaWNlKGQuX3BhcmVudC5jaGlsZHJlbi5pbmRleE9mKGQpLDEpLGQuX3BhcmVudD1udWxsLGYoZCkpOmQuX2FuaW1hdGlvbiYmZC5fYW5pbWF0aW9uLmVmZmVjdD09ZCYmKGQuX2FuaW1hdGlvbi5jYW5jZWwoKSxkLl9hbmltYXRpb24uZWZmZWN0PW5ldyBLZXlmcmFtZUVmZmVjdChudWxsLFtdKSxkLl9hbmltYXRpb24uX2NhbGxiYWNrJiYoZC5fYW5pbWF0aW9uLl9jYWxsYmFjay5fYW5pbWF0aW9uPW51bGwpLGQuX2FuaW1hdGlvbi5fcmVidWlsZFVuZGVybHlpbmdBbmltYXRpb24oKSxmKGQpKX1mb3IoYz0wO2M8Yi5sZW5ndGg7YysrKWJbY10uX3JlYnVpbGQoKX0sYi5LZXlmcmFtZUVmZmVjdD1mdW5jdGlvbihiLGMsZSxmKXtyZXR1cm4gdGhpcy50YXJnZXQ9Yix0aGlzLl9wYXJlbnQ9bnVsbCxlPWEubnVtZXJpY1RpbWluZ1RvT2JqZWN0KGUpLHRoaXMuX3RpbWluZ0lucHV0PWEuY2xvbmVUaW1pbmdJbnB1dChlKSx0aGlzLl90aW1pbmc9YS5ub3JtYWxpemVUaW1pbmdJbnB1dChlKSx0aGlzLnRpbWluZz1hLm1ha2VUaW1pbmcoZSwhMSx0aGlzKSx0aGlzLnRpbWluZy5fZWZmZWN0PXRoaXMsXCJmdW5jdGlvblwiPT10eXBlb2YgYz8oYS5kZXByZWNhdGVkKFwiQ3VzdG9tIEtleWZyYW1lRWZmZWN0XCIsXCIyMDE1LTA2LTIyXCIsXCJVc2UgS2V5ZnJhbWVFZmZlY3Qub25zYW1wbGUgaW5zdGVhZC5cIiksdGhpcy5fbm9ybWFsaXplZEtleWZyYW1lcz1jKTp0aGlzLl9ub3JtYWxpemVkS2V5ZnJhbWVzPW5ldyBkKGMpLHRoaXMuX2tleWZyYW1lcz1jLHRoaXMuYWN0aXZlRHVyYXRpb249YS5jYWxjdWxhdGVBY3RpdmVEdXJhdGlvbih0aGlzLl90aW1pbmcpLHRoaXMuX2lkPWYsdGhpc30sYi5LZXlmcmFtZUVmZmVjdC5wcm90b3R5cGU9e2dldEZyYW1lczpmdW5jdGlvbigpe3JldHVyblwiZnVuY3Rpb25cIj09dHlwZW9mIHRoaXMuX25vcm1hbGl6ZWRLZXlmcmFtZXM/dGhpcy5fbm9ybWFsaXplZEtleWZyYW1lczp0aGlzLl9ub3JtYWxpemVkS2V5ZnJhbWVzLl9mcmFtZXN9LHNldCBvbnNhbXBsZShhKXtpZihcImZ1bmN0aW9uXCI9PXR5cGVvZiB0aGlzLmdldEZyYW1lcygpKXRocm93IG5ldyBFcnJvcihcIlNldHRpbmcgb25zYW1wbGUgb24gY3VzdG9tIGVmZmVjdCBLZXlmcmFtZUVmZmVjdCBpcyBub3Qgc3VwcG9ydGVkLlwiKTt0aGlzLl9vbnNhbXBsZT1hLHRoaXMuX2FuaW1hdGlvbiYmdGhpcy5fYW5pbWF0aW9uLl9yZWJ1aWxkVW5kZXJseWluZ0FuaW1hdGlvbigpfSxnZXQgcGFyZW50KCl7cmV0dXJuIHRoaXMuX3BhcmVudH0sY2xvbmU6ZnVuY3Rpb24oKXtpZihcImZ1bmN0aW9uXCI9PXR5cGVvZiB0aGlzLmdldEZyYW1lcygpKXRocm93IG5ldyBFcnJvcihcIkNsb25pbmcgY3VzdG9tIGVmZmVjdHMgaXMgbm90IHN1cHBvcnRlZC5cIik7dmFyIGI9bmV3IEtleWZyYW1lRWZmZWN0KHRoaXMudGFyZ2V0LFtdLGEuY2xvbmVUaW1pbmdJbnB1dCh0aGlzLl90aW1pbmdJbnB1dCksdGhpcy5faWQpO3JldHVybiBiLl9ub3JtYWxpemVkS2V5ZnJhbWVzPXRoaXMuX25vcm1hbGl6ZWRLZXlmcmFtZXMsYi5fa2V5ZnJhbWVzPXRoaXMuX2tleWZyYW1lcyxifSxyZW1vdmU6ZnVuY3Rpb24oKXtiLnJlbW92ZU11bHRpKFt0aGlzXSl9fTt2YXIgZz1FbGVtZW50LnByb3RvdHlwZS5hbmltYXRlO0VsZW1lbnQucHJvdG90eXBlLmFuaW1hdGU9ZnVuY3Rpb24oYSxjKXt2YXIgZD1cIlwiO3JldHVybiBjJiZjLmlkJiYoZD1jLmlkKSxiLnRpbWVsaW5lLl9wbGF5KG5ldyBiLktleWZyYW1lRWZmZWN0KHRoaXMsYSxjLGQpKX07dmFyIGg9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKFwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94aHRtbFwiLFwiZGl2XCIpO2IubmV3VW5kZXJseWluZ0FuaW1hdGlvbkZvcktleWZyYW1lRWZmZWN0PWZ1bmN0aW9uKGEpe2lmKGEpe3ZhciBiPWEudGFyZ2V0fHxoLGM9YS5fa2V5ZnJhbWVzO1wiZnVuY3Rpb25cIj09dHlwZW9mIGMmJihjPVtdKTt2YXIgZD1hLl90aW1pbmdJbnB1dDtkLmlkPWEuX2lkfWVsc2UgdmFyIGI9aCxjPVtdLGQ9MDtyZXR1cm4gZy5hcHBseShiLFtjLGRdKX0sYi5iaW5kQW5pbWF0aW9uRm9yS2V5ZnJhbWVFZmZlY3Q9ZnVuY3Rpb24oYSl7YS5lZmZlY3QmJlwiZnVuY3Rpb25cIj09dHlwZW9mIGEuZWZmZWN0Ll9ub3JtYWxpemVkS2V5ZnJhbWVzJiZiLmJpbmRBbmltYXRpb25Gb3JDdXN0b21FZmZlY3QoYSl9O3ZhciBpPVtdO2IuYXdhaXRTdGFydFRpbWU9ZnVuY3Rpb24oYSl7bnVsbD09PWEuc3RhcnRUaW1lJiZhLl9pc0dyb3VwJiYoMD09aS5sZW5ndGgmJnJlcXVlc3RBbmltYXRpb25GcmFtZShlKSxpLnB1c2goYSkpfTt2YXIgaj13aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZTtPYmplY3QuZGVmaW5lUHJvcGVydHkod2luZG93LFwiZ2V0Q29tcHV0ZWRTdHlsZVwiLHtjb25maWd1cmFibGU6ITAsZW51bWVyYWJsZTohMCx2YWx1ZTpmdW5jdGlvbigpe2IudGltZWxpbmUuX3VwZGF0ZUFuaW1hdGlvbnNQcm9taXNlcygpO3ZhciBhPWouYXBwbHkodGhpcyxhcmd1bWVudHMpO3JldHVybiBlKCkmJihhPWouYXBwbHkodGhpcyxhcmd1bWVudHMpKSxiLnRpbWVsaW5lLl91cGRhdGVBbmltYXRpb25zUHJvbWlzZXMoKSxhfX0pLHdpbmRvdy5LZXlmcmFtZUVmZmVjdD1iLktleWZyYW1lRWZmZWN0LHdpbmRvdy5FbGVtZW50LnByb3RvdHlwZS5nZXRBbmltYXRpb25zPWZ1bmN0aW9uKCl7cmV0dXJuIGRvY3VtZW50LnRpbWVsaW5lLmdldEFuaW1hdGlvbnMoKS5maWx0ZXIoZnVuY3Rpb24oYSl7cmV0dXJuIG51bGwhPT1hLmVmZmVjdCYmYS5lZmZlY3QudGFyZ2V0PT10aGlzfS5iaW5kKHRoaXMpKX19KGMsZSksZnVuY3Rpb24oYSxiLGMpe2Z1bmN0aW9uIGQoYSl7YS5fcmVnaXN0ZXJlZHx8KGEuX3JlZ2lzdGVyZWQ9ITAsZy5wdXNoKGEpLGh8fChoPSEwLHJlcXVlc3RBbmltYXRpb25GcmFtZShlKSkpfWZ1bmN0aW9uIGUoYSl7dmFyIGI9ZztnPVtdLGIuc29ydChmdW5jdGlvbihhLGIpe3JldHVybiBhLl9zZXF1ZW5jZU51bWJlci1iLl9zZXF1ZW5jZU51bWJlcn0pLGI9Yi5maWx0ZXIoZnVuY3Rpb24oYSl7YSgpO3ZhciBiPWEuX2FuaW1hdGlvbj9hLl9hbmltYXRpb24ucGxheVN0YXRlOlwiaWRsZVwiO3JldHVyblwicnVubmluZ1wiIT1iJiZcInBlbmRpbmdcIiE9YiYmKGEuX3JlZ2lzdGVyZWQ9ITEpLGEuX3JlZ2lzdGVyZWR9KSxnLnB1c2guYXBwbHkoZyxiKSxnLmxlbmd0aD8oaD0hMCxyZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZSkpOmg9ITF9dmFyIGY9KGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhcImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGh0bWxcIixcImRpdlwiKSwwKTtiLmJpbmRBbmltYXRpb25Gb3JDdXN0b21FZmZlY3Q9ZnVuY3Rpb24oYil7dmFyIGMsZT1iLmVmZmVjdC50YXJnZXQsZz1cImZ1bmN0aW9uXCI9PXR5cGVvZiBiLmVmZmVjdC5nZXRGcmFtZXMoKTtjPWc/Yi5lZmZlY3QuZ2V0RnJhbWVzKCk6Yi5lZmZlY3QuX29uc2FtcGxlO3ZhciBoPWIuZWZmZWN0LnRpbWluZyxpPW51bGw7aD1hLm5vcm1hbGl6ZVRpbWluZ0lucHV0KGgpO3ZhciBqPWZ1bmN0aW9uKCl7dmFyIGQ9ai5fYW5pbWF0aW9uP2ouX2FuaW1hdGlvbi5jdXJyZW50VGltZTpudWxsO251bGwhPT1kJiYoZD1hLmNhbGN1bGF0ZUl0ZXJhdGlvblByb2dyZXNzKGEuY2FsY3VsYXRlQWN0aXZlRHVyYXRpb24oaCksZCxoKSxpc05hTihkKSYmKGQ9bnVsbCkpLGQhPT1pJiYoZz9jKGQsZSxiLmVmZmVjdCk6YyhkLGIuZWZmZWN0LGIuZWZmZWN0Ll9hbmltYXRpb24pKSxpPWR9O2ouX2FuaW1hdGlvbj1iLGouX3JlZ2lzdGVyZWQ9ITEsai5fc2VxdWVuY2VOdW1iZXI9ZisrLGIuX2NhbGxiYWNrPWosZChqKX07dmFyIGc9W10saD0hMTtiLkFuaW1hdGlvbi5wcm90b3R5cGUuX3JlZ2lzdGVyPWZ1bmN0aW9uKCl7dGhpcy5fY2FsbGJhY2smJmQodGhpcy5fY2FsbGJhY2spfX0oYyxlKSxmdW5jdGlvbihhLGIsYyl7ZnVuY3Rpb24gZChhKXtyZXR1cm4gYS5fdGltaW5nLmRlbGF5K2EuYWN0aXZlRHVyYXRpb24rYS5fdGltaW5nLmVuZERlbGF5fWZ1bmN0aW9uIGUoYixjLGQpe3RoaXMuX2lkPWQsdGhpcy5fcGFyZW50PW51bGwsdGhpcy5jaGlsZHJlbj1ifHxbXSx0aGlzLl9yZXBhcmVudCh0aGlzLmNoaWxkcmVuKSxjPWEubnVtZXJpY1RpbWluZ1RvT2JqZWN0KGMpLHRoaXMuX3RpbWluZ0lucHV0PWEuY2xvbmVUaW1pbmdJbnB1dChjKSx0aGlzLl90aW1pbmc9YS5ub3JtYWxpemVUaW1pbmdJbnB1dChjLCEwKSx0aGlzLnRpbWluZz1hLm1ha2VUaW1pbmcoYywhMCx0aGlzKSx0aGlzLnRpbWluZy5fZWZmZWN0PXRoaXMsXCJhdXRvXCI9PT10aGlzLl90aW1pbmcuZHVyYXRpb24mJih0aGlzLl90aW1pbmcuZHVyYXRpb249dGhpcy5hY3RpdmVEdXJhdGlvbil9d2luZG93LlNlcXVlbmNlRWZmZWN0PWZ1bmN0aW9uKCl7ZS5hcHBseSh0aGlzLGFyZ3VtZW50cyl9LHdpbmRvdy5Hcm91cEVmZmVjdD1mdW5jdGlvbigpe2UuYXBwbHkodGhpcyxhcmd1bWVudHMpfSxlLnByb3RvdHlwZT17X2lzQW5jZXN0b3I6ZnVuY3Rpb24oYSl7Zm9yKHZhciBiPXRoaXM7bnVsbCE9PWI7KXtpZihiPT1hKXJldHVybiEwO2I9Yi5fcGFyZW50fXJldHVybiExfSxfcmVidWlsZDpmdW5jdGlvbigpe2Zvcih2YXIgYT10aGlzO2E7KVwiYXV0b1wiPT09YS50aW1pbmcuZHVyYXRpb24mJihhLl90aW1pbmcuZHVyYXRpb249YS5hY3RpdmVEdXJhdGlvbiksYT1hLl9wYXJlbnQ7dGhpcy5fYW5pbWF0aW9uJiZ0aGlzLl9hbmltYXRpb24uX3JlYnVpbGRVbmRlcmx5aW5nQW5pbWF0aW9uKCl9LF9yZXBhcmVudDpmdW5jdGlvbihhKXtiLnJlbW92ZU11bHRpKGEpO2Zvcih2YXIgYz0wO2M8YS5sZW5ndGg7YysrKWFbY10uX3BhcmVudD10aGlzfSxfcHV0Q2hpbGQ6ZnVuY3Rpb24oYSxiKXtmb3IodmFyIGM9Yj9cIkNhbm5vdCBhcHBlbmQgYW4gYW5jZXN0b3Igb3Igc2VsZlwiOlwiQ2Fubm90IHByZXBlbmQgYW4gYW5jZXN0b3Igb3Igc2VsZlwiLGQ9MDtkPGEubGVuZ3RoO2QrKylpZih0aGlzLl9pc0FuY2VzdG9yKGFbZF0pKXRocm93e3R5cGU6RE9NRXhjZXB0aW9uLkhJRVJBUkNIWV9SRVFVRVNUX0VSUixuYW1lOlwiSGllcmFyY2h5UmVxdWVzdEVycm9yXCIsbWVzc2FnZTpjfTtmb3IodmFyIGQ9MDtkPGEubGVuZ3RoO2QrKyliP3RoaXMuY2hpbGRyZW4ucHVzaChhW2RdKTp0aGlzLmNoaWxkcmVuLnVuc2hpZnQoYVtkXSk7dGhpcy5fcmVwYXJlbnQoYSksdGhpcy5fcmVidWlsZCgpfSxhcHBlbmQ6ZnVuY3Rpb24oKXt0aGlzLl9wdXRDaGlsZChhcmd1bWVudHMsITApfSxwcmVwZW5kOmZ1bmN0aW9uKCl7dGhpcy5fcHV0Q2hpbGQoYXJndW1lbnRzLCExKX0sZ2V0IHBhcmVudCgpe3JldHVybiB0aGlzLl9wYXJlbnR9LGdldCBmaXJzdENoaWxkKCl7cmV0dXJuIHRoaXMuY2hpbGRyZW4ubGVuZ3RoP3RoaXMuY2hpbGRyZW5bMF06bnVsbH0sZ2V0IGxhc3RDaGlsZCgpe3JldHVybiB0aGlzLmNoaWxkcmVuLmxlbmd0aD90aGlzLmNoaWxkcmVuW3RoaXMuY2hpbGRyZW4ubGVuZ3RoLTFdOm51bGx9LGNsb25lOmZ1bmN0aW9uKCl7Zm9yKHZhciBiPWEuY2xvbmVUaW1pbmdJbnB1dCh0aGlzLl90aW1pbmdJbnB1dCksYz1bXSxkPTA7ZDx0aGlzLmNoaWxkcmVuLmxlbmd0aDtkKyspYy5wdXNoKHRoaXMuY2hpbGRyZW5bZF0uY2xvbmUoKSk7cmV0dXJuIHRoaXMgaW5zdGFuY2VvZiBHcm91cEVmZmVjdD9uZXcgR3JvdXBFZmZlY3QoYyxiKTpuZXcgU2VxdWVuY2VFZmZlY3QoYyxiKX0scmVtb3ZlOmZ1bmN0aW9uKCl7Yi5yZW1vdmVNdWx0aShbdGhpc10pfX0sd2luZG93LlNlcXVlbmNlRWZmZWN0LnByb3RvdHlwZT1PYmplY3QuY3JlYXRlKGUucHJvdG90eXBlKSxPYmplY3QuZGVmaW5lUHJvcGVydHkod2luZG93LlNlcXVlbmNlRWZmZWN0LnByb3RvdHlwZSxcImFjdGl2ZUR1cmF0aW9uXCIse2dldDpmdW5jdGlvbigpe3ZhciBhPTA7cmV0dXJuIHRoaXMuY2hpbGRyZW4uZm9yRWFjaChmdW5jdGlvbihiKXthKz1kKGIpfSksTWF0aC5tYXgoYSwwKX19KSx3aW5kb3cuR3JvdXBFZmZlY3QucHJvdG90eXBlPU9iamVjdC5jcmVhdGUoZS5wcm90b3R5cGUpLE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh3aW5kb3cuR3JvdXBFZmZlY3QucHJvdG90eXBlLFwiYWN0aXZlRHVyYXRpb25cIix7Z2V0OmZ1bmN0aW9uKCl7dmFyIGE9MDtyZXR1cm4gdGhpcy5jaGlsZHJlbi5mb3JFYWNoKGZ1bmN0aW9uKGIpe2E9TWF0aC5tYXgoYSxkKGIpKX0pLGF9fSksYi5uZXdVbmRlcmx5aW5nQW5pbWF0aW9uRm9yR3JvdXA9ZnVuY3Rpb24oYyl7dmFyIGQsZT1udWxsLGY9ZnVuY3Rpb24oYil7dmFyIGM9ZC5fd3JhcHBlcjtpZihjJiZcInBlbmRpbmdcIiE9Yy5wbGF5U3RhdGUmJmMuZWZmZWN0KXJldHVybiBudWxsPT1iP3ZvaWQgYy5fcmVtb3ZlQ2hpbGRBbmltYXRpb25zKCk6MD09YiYmYy5wbGF5YmFja1JhdGU8MCYmKGV8fChlPWEubm9ybWFsaXplVGltaW5nSW5wdXQoYy5lZmZlY3QudGltaW5nKSksYj1hLmNhbGN1bGF0ZUl0ZXJhdGlvblByb2dyZXNzKGEuY2FsY3VsYXRlQWN0aXZlRHVyYXRpb24oZSksLTEsZSksaXNOYU4oYil8fG51bGw9PWIpPyhjLl9mb3JFYWNoQ2hpbGQoZnVuY3Rpb24oYSl7YS5jdXJyZW50VGltZT0tMX0pLHZvaWQgYy5fcmVtb3ZlQ2hpbGRBbmltYXRpb25zKCkpOnZvaWQgMH0sZz1uZXcgS2V5ZnJhbWVFZmZlY3QobnVsbCxbXSxjLl90aW1pbmcsYy5faWQpO3JldHVybiBnLm9uc2FtcGxlPWYsZD1iLnRpbWVsaW5lLl9wbGF5KGcpfSxiLmJpbmRBbmltYXRpb25Gb3JHcm91cD1mdW5jdGlvbihhKXthLl9hbmltYXRpb24uX3dyYXBwZXI9YSxhLl9pc0dyb3VwPSEwLGIuYXdhaXRTdGFydFRpbWUoYSksYS5fY29uc3RydWN0Q2hpbGRBbmltYXRpb25zKCksYS5fc2V0RXh0ZXJuYWxBbmltYXRpb24oYSl9LGIuZ3JvdXBDaGlsZER1cmF0aW9uPWR9KGMsZSksYi50cnVlPWF9KHt9LGZ1bmN0aW9uKCl7cmV0dXJuIHRoaXN9KCkpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9d2ViLWFuaW1hdGlvbnMtbmV4dC1saXRlLm1pbi5qcy5tYXAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7OztBIiwic291cmNlUm9vdCI6IiJ9