import React, {
  useRef,
  useDebugValue,
  useContext,
  createElement,
  useState,
  useEffect,
} from "react";
import pkg from "prop-types";
const { string, PropTypes } = pkg;

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

function __makeTemplateObject(cooked, raw) {
  if (Object.defineProperty) {
    Object.defineProperty(cooked, "raw", { value: raw });
  } else {
    cooked.raw = raw;
  }
  return cooked;
}

function createCommonjsModule(fn) {
  var module = { exports: {} };
  return fn(module, module.exports), module.exports;
}

/** @license React v17.0.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var b = 60103,
  c = 60106,
  d = 60107,
  e = 60108,
  f = 60114,
  g = 60109,
  h = 60110,
  k = 60112,
  l = 60113,
  m = 60120,
  n = 60115,
  p = 60116,
  q = 60121,
  r = 60122,
  u = 60117,
  v = 60129,
  w = 60131;
if ("function" === typeof Symbol && Symbol.for) {
  var x = Symbol.for;
  b = x("react.element");
  c = x("react.portal");
  d = x("react.fragment");
  e = x("react.strict_mode");
  f = x("react.profiler");
  g = x("react.provider");
  h = x("react.context");
  k = x("react.forward_ref");
  l = x("react.suspense");
  m = x("react.suspense_list");
  n = x("react.memo");
  p = x("react.lazy");
  q = x("react.block");
  r = x("react.server.block");
  u = x("react.fundamental");
  v = x("react.debug_trace_mode");
  w = x("react.legacy_hidden");
}
function y(a) {
  if ("object" === typeof a && null !== a) {
    var t = a.$$typeof;
    switch (t) {
      case b:
        switch (((a = a.type), a)) {
          case d:
          case f:
          case e:
          case l:
          case m:
            return a;
          default:
            switch (((a = a && a.$$typeof), a)) {
              case h:
              case k:
              case p:
              case n:
              case g:
                return a;
              default:
                return t;
            }
        }
      case c:
        return t;
    }
  }
}
var z = g,
  A = b,
  B = k,
  C = d,
  D = p,
  E = n,
  F = c,
  G = f,
  H = e,
  I = l;
var ContextConsumer = h;
var ContextProvider = z;
var Element = A;
var ForwardRef = B;
var Fragment = C;
var Lazy = D;
var Memo = E;
var Portal = F;
var Profiler = G;
var StrictMode = H;
var Suspense = I;
var isAsyncMode = function () {
  return !1;
};
var isConcurrentMode = function () {
  return !1;
};
var isContextConsumer = function (a) {
  return y(a) === h;
};
var isContextProvider = function (a) {
  return y(a) === g;
};
var isElement = function (a) {
  return "object" === typeof a && null !== a && a.$$typeof === b;
};
var isForwardRef = function (a) {
  return y(a) === k;
};
var isFragment = function (a) {
  return y(a) === d;
};
var isLazy = function (a) {
  return y(a) === p;
};
var isMemo = function (a) {
  return y(a) === n;
};
var isPortal = function (a) {
  return y(a) === c;
};
var isProfiler = function (a) {
  return y(a) === f;
};
var isStrictMode = function (a) {
  return y(a) === e;
};
var isSuspense = function (a) {
  return y(a) === l;
};
var isValidElementType = function (a) {
  return "string" === typeof a ||
    "function" === typeof a ||
    a === d ||
    a === f ||
    a === v ||
    a === e ||
    a === l ||
    a === m ||
    a === w ||
    ("object" === typeof a &&
      null !== a &&
      (a.$$typeof === p ||
        a.$$typeof === n ||
        a.$$typeof === g ||
        a.$$typeof === h ||
        a.$$typeof === k ||
        a.$$typeof === u ||
        a.$$typeof === q ||
        a[0] === r))
    ? !0
    : !1;
};
var typeOf = y;

var reactIs_production_min = {
  ContextConsumer: ContextConsumer,
  ContextProvider: ContextProvider,
  Element: Element,
  ForwardRef: ForwardRef,
  Fragment: Fragment,
  Lazy: Lazy,
  Memo: Memo,
  Portal: Portal,
  Profiler: Profiler,
  StrictMode: StrictMode,
  Suspense: Suspense,
  isAsyncMode: isAsyncMode,
  isConcurrentMode: isConcurrentMode,
  isContextConsumer: isContextConsumer,
  isContextProvider: isContextProvider,
  isElement: isElement,
  isForwardRef: isForwardRef,
  isFragment: isFragment,
  isLazy: isLazy,
  isMemo: isMemo,
  isPortal: isPortal,
  isProfiler: isProfiler,
  isStrictMode: isStrictMode,
  isSuspense: isSuspense,
  isValidElementType: isValidElementType,
  typeOf: typeOf,
};

/** @license React v17.0.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var reactIs_development = createCommonjsModule(function (module, exports) {
  if (process.env.NODE_ENV !== "production") {
    (function () {
      // ATTENTION
      // When adding new symbols to this file,
      // Please consider also adding to 'react-devtools-shared/src/backend/ReactSymbols'
      // The Symbol used to tag the ReactElement-like types. If there is no native Symbol
      // nor polyfill, then a plain number is used for performance.
      var REACT_ELEMENT_TYPE = 0xeac7;
      var REACT_PORTAL_TYPE = 0xeaca;
      var REACT_FRAGMENT_TYPE = 0xeacb;
      var REACT_STRICT_MODE_TYPE = 0xeacc;
      var REACT_PROFILER_TYPE = 0xead2;
      var REACT_PROVIDER_TYPE = 0xeacd;
      var REACT_CONTEXT_TYPE = 0xeace;
      var REACT_FORWARD_REF_TYPE = 0xead0;
      var REACT_SUSPENSE_TYPE = 0xead1;
      var REACT_SUSPENSE_LIST_TYPE = 0xead8;
      var REACT_MEMO_TYPE = 0xead3;
      var REACT_LAZY_TYPE = 0xead4;
      var REACT_BLOCK_TYPE = 0xead9;
      var REACT_SERVER_BLOCK_TYPE = 0xeada;
      var REACT_FUNDAMENTAL_TYPE = 0xead5;
      var REACT_SCOPE_TYPE = 0xead7;
      var REACT_OPAQUE_ID_TYPE = 0xeae0;
      var REACT_DEBUG_TRACING_MODE_TYPE = 0xeae1;
      var REACT_OFFSCREEN_TYPE = 0xeae2;
      var REACT_LEGACY_HIDDEN_TYPE = 0xeae3;

      if (typeof Symbol === "function" && Symbol.for) {
        var symbolFor = Symbol.for;
        REACT_ELEMENT_TYPE = symbolFor("react.element");
        REACT_PORTAL_TYPE = symbolFor("react.portal");
        REACT_FRAGMENT_TYPE = symbolFor("react.fragment");
        REACT_STRICT_MODE_TYPE = symbolFor("react.strict_mode");
        REACT_PROFILER_TYPE = symbolFor("react.profiler");
        REACT_PROVIDER_TYPE = symbolFor("react.provider");
        REACT_CONTEXT_TYPE = symbolFor("react.context");
        REACT_FORWARD_REF_TYPE = symbolFor("react.forward_ref");
        REACT_SUSPENSE_TYPE = symbolFor("react.suspense");
        REACT_SUSPENSE_LIST_TYPE = symbolFor("react.suspense_list");
        REACT_MEMO_TYPE = symbolFor("react.memo");
        REACT_LAZY_TYPE = symbolFor("react.lazy");
        REACT_BLOCK_TYPE = symbolFor("react.block");
        REACT_SERVER_BLOCK_TYPE = symbolFor("react.server.block");
        REACT_FUNDAMENTAL_TYPE = symbolFor("react.fundamental");
        REACT_SCOPE_TYPE = symbolFor("react.scope");
        REACT_OPAQUE_ID_TYPE = symbolFor("react.opaque.id");
        REACT_DEBUG_TRACING_MODE_TYPE = symbolFor("react.debug_trace_mode");
        REACT_OFFSCREEN_TYPE = symbolFor("react.offscreen");
        REACT_LEGACY_HIDDEN_TYPE = symbolFor("react.legacy_hidden");
      }

      // Filter certain DOM attributes (e.g. src, href) if their values are empty strings.

      var enableScopeAPI = false; // Experimental Create Event Handle API.

      function isValidElementType(type) {
        if (typeof type === "string" || typeof type === "function") {
          return true;
        } // Note: typeof might be other than 'symbol' or 'number' (e.g. if it's a polyfill).

        if (
          type === REACT_FRAGMENT_TYPE ||
          type === REACT_PROFILER_TYPE ||
          type === REACT_DEBUG_TRACING_MODE_TYPE ||
          type === REACT_STRICT_MODE_TYPE ||
          type === REACT_SUSPENSE_TYPE ||
          type === REACT_SUSPENSE_LIST_TYPE ||
          type === REACT_LEGACY_HIDDEN_TYPE ||
          enableScopeAPI
        ) {
          return true;
        }

        if (typeof type === "object" && type !== null) {
          if (
            type.$$typeof === REACT_LAZY_TYPE ||
            type.$$typeof === REACT_MEMO_TYPE ||
            type.$$typeof === REACT_PROVIDER_TYPE ||
            type.$$typeof === REACT_CONTEXT_TYPE ||
            type.$$typeof === REACT_FORWARD_REF_TYPE ||
            type.$$typeof === REACT_FUNDAMENTAL_TYPE ||
            type.$$typeof === REACT_BLOCK_TYPE ||
            type[0] === REACT_SERVER_BLOCK_TYPE
          ) {
            return true;
          }
        }

        return false;
      }

      function typeOf(object) {
        if (typeof object === "object" && object !== null) {
          var $$typeof = object.$$typeof;

          switch ($$typeof) {
            case REACT_ELEMENT_TYPE:
              var type = object.type;

              switch (type) {
                case REACT_FRAGMENT_TYPE:
                case REACT_PROFILER_TYPE:
                case REACT_STRICT_MODE_TYPE:
                case REACT_SUSPENSE_TYPE:
                case REACT_SUSPENSE_LIST_TYPE:
                  return type;

                default:
                  var $$typeofType = type && type.$$typeof;

                  switch ($$typeofType) {
                    case REACT_CONTEXT_TYPE:
                    case REACT_FORWARD_REF_TYPE:
                    case REACT_LAZY_TYPE:
                    case REACT_MEMO_TYPE:
                    case REACT_PROVIDER_TYPE:
                      return $$typeofType;

                    default:
                      return $$typeof;
                  }
              }

            case REACT_PORTAL_TYPE:
              return $$typeof;
          }
        }

        return undefined;
      }
      var ContextConsumer = REACT_CONTEXT_TYPE;
      var ContextProvider = REACT_PROVIDER_TYPE;
      var Element = REACT_ELEMENT_TYPE;
      var ForwardRef = REACT_FORWARD_REF_TYPE;
      var Fragment = REACT_FRAGMENT_TYPE;
      var Lazy = REACT_LAZY_TYPE;
      var Memo = REACT_MEMO_TYPE;
      var Portal = REACT_PORTAL_TYPE;
      var Profiler = REACT_PROFILER_TYPE;
      var StrictMode = REACT_STRICT_MODE_TYPE;
      var Suspense = REACT_SUSPENSE_TYPE;
      var hasWarnedAboutDeprecatedIsAsyncMode = false;
      var hasWarnedAboutDeprecatedIsConcurrentMode = false; // AsyncMode should be deprecated

      function isAsyncMode(object) {
        {
          if (!hasWarnedAboutDeprecatedIsAsyncMode) {
            hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

            console["warn"](
              "The ReactIs.isAsyncMode() alias has been deprecated, " +
                "and will be removed in React 18+."
            );
          }
        }

        return false;
      }
      function isConcurrentMode(object) {
        {
          if (!hasWarnedAboutDeprecatedIsConcurrentMode) {
            hasWarnedAboutDeprecatedIsConcurrentMode = true; // Using console['warn'] to evade Babel and ESLint

            console["warn"](
              "The ReactIs.isConcurrentMode() alias has been deprecated, " +
                "and will be removed in React 18+."
            );
          }
        }

        return false;
      }
      function isContextConsumer(object) {
        return typeOf(object) === REACT_CONTEXT_TYPE;
      }
      function isContextProvider(object) {
        return typeOf(object) === REACT_PROVIDER_TYPE;
      }
      function isElement(object) {
        return (
          typeof object === "object" &&
          object !== null &&
          object.$$typeof === REACT_ELEMENT_TYPE
        );
      }
      function isForwardRef(object) {
        return typeOf(object) === REACT_FORWARD_REF_TYPE;
      }
      function isFragment(object) {
        return typeOf(object) === REACT_FRAGMENT_TYPE;
      }
      function isLazy(object) {
        return typeOf(object) === REACT_LAZY_TYPE;
      }
      function isMemo(object) {
        return typeOf(object) === REACT_MEMO_TYPE;
      }
      function isPortal(object) {
        return typeOf(object) === REACT_PORTAL_TYPE;
      }
      function isProfiler(object) {
        return typeOf(object) === REACT_PROFILER_TYPE;
      }
      function isStrictMode(object) {
        return typeOf(object) === REACT_STRICT_MODE_TYPE;
      }
      function isSuspense(object) {
        return typeOf(object) === REACT_SUSPENSE_TYPE;
      }

      exports.ContextConsumer = ContextConsumer;
      exports.ContextProvider = ContextProvider;
      exports.Element = Element;
      exports.ForwardRef = ForwardRef;
      exports.Fragment = Fragment;
      exports.Lazy = Lazy;
      exports.Memo = Memo;
      exports.Portal = Portal;
      exports.Profiler = Profiler;
      exports.StrictMode = StrictMode;
      exports.Suspense = Suspense;
      exports.isAsyncMode = isAsyncMode;
      exports.isConcurrentMode = isConcurrentMode;
      exports.isContextConsumer = isContextConsumer;
      exports.isContextProvider = isContextProvider;
      exports.isElement = isElement;
      exports.isForwardRef = isForwardRef;
      exports.isFragment = isFragment;
      exports.isLazy = isLazy;
      exports.isMemo = isMemo;
      exports.isPortal = isPortal;
      exports.isProfiler = isProfiler;
      exports.isStrictMode = isStrictMode;
      exports.isSuspense = isSuspense;
      exports.isValidElementType = isValidElementType;
      exports.typeOf = typeOf;
    })();
  }
});

var reactIs = createCommonjsModule(function (module) {
  if (process.env.NODE_ENV === "production") {
    module.exports = reactIs_production_min;
  } else {
    module.exports = reactIs_development;
  }
});

function stylis_min(W) {
  function M(d, c, e, h, a) {
    for (
      var m = 0,
        b = 0,
        v = 0,
        n = 0,
        q,
        g,
        x = 0,
        K = 0,
        k,
        u = (k = q = 0),
        l = 0,
        r = 0,
        I = 0,
        t = 0,
        B = e.length,
        J = B - 1,
        y,
        f = "",
        p = "",
        F = "",
        G = "",
        C;
      l < B;

    ) {
      g = e.charCodeAt(l);
      l === J &&
        0 !== b + n + v + m &&
        (0 !== b && (g = 47 === b ? 10 : 47), (n = v = m = 0), B++, J++);

      if (0 === b + n + v + m) {
        if (l === J && (0 < r && (f = f.replace(N, "")), 0 < f.trim().length)) {
          switch (g) {
            case 32:
            case 9:
            case 59:
            case 13:
            case 10:
              break;

            default:
              f += e.charAt(l);
          }

          g = 59;
        }

        switch (g) {
          case 123:
            f = f.trim();
            q = f.charCodeAt(0);
            k = 1;

            for (t = ++l; l < B; ) {
              switch ((g = e.charCodeAt(l))) {
                case 123:
                  k++;
                  break;

                case 125:
                  k--;
                  break;

                case 47:
                  switch ((g = e.charCodeAt(l + 1))) {
                    case 42:
                    case 47:
                      a: {
                        for (u = l + 1; u < J; ++u) {
                          switch (e.charCodeAt(u)) {
                            case 47:
                              if (
                                42 === g &&
                                42 === e.charCodeAt(u - 1) &&
                                l + 2 !== u
                              ) {
                                l = u + 1;
                                break a;
                              }

                              break;

                            case 10:
                              if (47 === g) {
                                l = u + 1;
                                break a;
                              }
                          }
                        }

                        l = u;
                      }
                  }

                  break;

                case 91:
                  g++;

                case 40:
                  g++;

                case 34:
                case 39:
                  for (; l++ < J && e.charCodeAt(l) !== g; ) {}
              }

              if (0 === k) break;
              l++;
            }

            k = e.substring(t, l);
            0 === q && (q = (f = f.replace(ca, "").trim()).charCodeAt(0));

            switch (q) {
              case 64:
                0 < r && (f = f.replace(N, ""));
                g = f.charCodeAt(1);

                switch (g) {
                  case 100:
                  case 109:
                  case 115:
                  case 45:
                    r = c;
                    break;

                  default:
                    r = O;
                }

                k = M(c, r, k, g, a + 1);
                t = k.length;
                0 < A &&
                  ((r = X(O, f, I)),
                  (C = H(3, k, r, c, D, z, t, g, a, h)),
                  (f = r.join("")),
                  void 0 !== C &&
                    0 === (t = (k = C.trim()).length) &&
                    ((g = 0), (k = "")));
                if (0 < t)
                  switch (g) {
                    case 115:
                      f = f.replace(da, ea);

                    case 100:
                    case 109:
                    case 45:
                      k = f + "{" + k + "}";
                      break;

                    case 107:
                      f = f.replace(fa, "$1 $2");
                      k = f + "{" + k + "}";
                      k =
                        1 === w || (2 === w && L("@" + k, 3))
                          ? "@-webkit-" + k + "@" + k
                          : "@" + k;
                      break;

                    default:
                      (k = f + k), 112 === h && (k = ((p += k), ""));
                  }
                else k = "";
                break;

              default:
                k = M(c, X(c, f, I), k, h, a + 1);
            }

            F += k;
            k = I = r = u = q = 0;
            f = "";
            g = e.charCodeAt(++l);
            break;

          case 125:
          case 59:
            f = (0 < r ? f.replace(N, "") : f).trim();
            if (1 < (t = f.length))
              switch (
                (0 === u &&
                  ((q = f.charCodeAt(0)), 45 === q || (96 < q && 123 > q)) &&
                  (t = (f = f.replace(" ", ":")).length),
                0 < A &&
                  void 0 !== (C = H(1, f, c, d, D, z, p.length, h, a, h)) &&
                  0 === (t = (f = C.trim()).length) &&
                  (f = "\x00\x00"),
                (q = f.charCodeAt(0)),
                (g = f.charCodeAt(1)),
                q)
              ) {
                case 0:
                  break;

                case 64:
                  if (105 === g || 99 === g) {
                    G += f + e.charAt(l);
                    break;
                  }

                default:
                  58 !== f.charCodeAt(t - 1) &&
                    (p += P(f, q, g, f.charCodeAt(2)));
              }
            I = r = u = q = 0;
            f = "";
            g = e.charCodeAt(++l);
        }
      }

      switch (g) {
        case 13:
        case 10:
          47 === b
            ? (b = 0)
            : 0 === 1 + q &&
              107 !== h &&
              0 < f.length &&
              ((r = 1), (f += "\x00"));
          0 < A * Y && H(0, f, c, d, D, z, p.length, h, a, h);
          z = 1;
          D++;
          break;

        case 59:
        case 125:
          if (0 === b + n + v + m) {
            z++;
            break;
          }

        default:
          z++;
          y = e.charAt(l);

          switch (g) {
            case 9:
            case 32:
              if (0 === n + m + b)
                switch (x) {
                  case 44:
                  case 58:
                  case 9:
                  case 32:
                    y = "";
                    break;

                  default:
                    32 !== g && (y = " ");
                }
              break;

            case 0:
              y = "\\0";
              break;

            case 12:
              y = "\\f";
              break;

            case 11:
              y = "\\v";
              break;

            case 38:
              0 === n + b + m && ((r = I = 1), (y = "\f" + y));
              break;

            case 108:
              if (0 === n + b + m + E && 0 < u)
                switch (l - u) {
                  case 2:
                    112 === x && 58 === e.charCodeAt(l - 3) && (E = x);

                  case 8:
                    111 === K && (E = K);
                }
              break;

            case 58:
              0 === n + b + m && (u = l);
              break;

            case 44:
              0 === b + v + n + m && ((r = 1), (y += "\r"));
              break;

            case 34:
            case 39:
              0 === b && (n = n === g ? 0 : 0 === n ? g : n);
              break;

            case 91:
              0 === n + b + v && m++;
              break;

            case 93:
              0 === n + b + v && m--;
              break;

            case 41:
              0 === n + b + m && v--;
              break;

            case 40:
              if (0 === n + b + m) {
                if (0 === q)
                  switch (2 * x + 3 * K) {
                    case 533:
                      break;

                    default:
                      q = 1;
                  }
                v++;
              }

              break;

            case 64:
              0 === b + v + n + m + u + k && (k = 1);
              break;

            case 42:
            case 47:
              if (!(0 < n + m + v))
                switch (b) {
                  case 0:
                    switch (2 * g + 3 * e.charCodeAt(l + 1)) {
                      case 235:
                        b = 47;
                        break;

                      case 220:
                        (t = l), (b = 42);
                    }

                    break;

                  case 42:
                    47 === g &&
                      42 === x &&
                      t + 2 !== l &&
                      (33 === e.charCodeAt(t + 2) &&
                        (p += e.substring(t, l + 1)),
                      (y = ""),
                      (b = 0));
                }
          }

          0 === b && (f += y);
      }

      K = x;
      x = g;
      l++;
    }

    t = p.length;

    if (0 < t) {
      r = c;
      if (
        0 < A &&
        ((C = H(2, p, r, d, D, z, t, h, a, h)),
        void 0 !== C && 0 === (p = C).length)
      )
        return G + p + F;
      p = r.join(",") + "{" + p + "}";

      if (0 !== w * E) {
        2 !== w || L(p, 2) || (E = 0);

        switch (E) {
          case 111:
            p = p.replace(ha, ":-moz-$1") + p;
            break;

          case 112:
            p =
              p.replace(Q, "::-webkit-input-$1") +
              p.replace(Q, "::-moz-$1") +
              p.replace(Q, ":-ms-input-$1") +
              p;
        }

        E = 0;
      }
    }

    return G + p + F;
  }

  function X(d, c, e) {
    var h = c.trim().split(ia);
    c = h;
    var a = h.length,
      m = d.length;

    switch (m) {
      case 0:
      case 1:
        var b = 0;

        for (d = 0 === m ? "" : d[0] + " "; b < a; ++b) {
          c[b] = Z(d, c[b], e).trim();
        }

        break;

      default:
        var v = (b = 0);

        for (c = []; b < a; ++b) {
          for (var n = 0; n < m; ++n) {
            c[v++] = Z(d[n] + " ", h[b], e).trim();
          }
        }
    }

    return c;
  }

  function Z(d, c, e) {
    var h = c.charCodeAt(0);
    33 > h && (h = (c = c.trim()).charCodeAt(0));

    switch (h) {
      case 38:
        return c.replace(F, "$1" + d.trim());

      case 58:
        return d.trim() + c.replace(F, "$1" + d.trim());

      default:
        if (0 < 1 * e && 0 < c.indexOf("\f"))
          return c.replace(F, (58 === d.charCodeAt(0) ? "" : "$1") + d.trim());
    }

    return d + c;
  }

  function P(d, c, e, h) {
    var a = d + ";",
      m = 2 * c + 3 * e + 4 * h;

    if (944 === m) {
      d = a.indexOf(":", 9) + 1;
      var b = a.substring(d, a.length - 1).trim();
      b = a.substring(0, d).trim() + b + ";";
      return 1 === w || (2 === w && L(b, 1)) ? "-webkit-" + b + b : b;
    }

    if (0 === w || (2 === w && !L(a, 1))) return a;

    switch (m) {
      case 1015:
        return 97 === a.charCodeAt(10) ? "-webkit-" + a + a : a;

      case 951:
        return 116 === a.charCodeAt(3) ? "-webkit-" + a + a : a;

      case 963:
        return 110 === a.charCodeAt(5) ? "-webkit-" + a + a : a;

      case 1009:
        if (100 !== a.charCodeAt(4)) break;

      case 969:
      case 942:
        return "-webkit-" + a + a;

      case 978:
        return "-webkit-" + a + "-moz-" + a + a;

      case 1019:
      case 983:
        return "-webkit-" + a + "-moz-" + a + "-ms-" + a + a;

      case 883:
        if (45 === a.charCodeAt(8)) return "-webkit-" + a + a;
        if (0 < a.indexOf("image-set(", 11))
          return a.replace(ja, "$1-webkit-$2") + a;
        break;

      case 932:
        if (45 === a.charCodeAt(4))
          switch (a.charCodeAt(5)) {
            case 103:
              return (
                "-webkit-box-" +
                a.replace("-grow", "") +
                "-webkit-" +
                a +
                "-ms-" +
                a.replace("grow", "positive") +
                a
              );

            case 115:
              return (
                "-webkit-" + a + "-ms-" + a.replace("shrink", "negative") + a
              );

            case 98:
              return (
                "-webkit-" +
                a +
                "-ms-" +
                a.replace("basis", "preferred-size") +
                a
              );
          }
        return "-webkit-" + a + "-ms-" + a + a;

      case 964:
        return "-webkit-" + a + "-ms-flex-" + a + a;

      case 1023:
        if (99 !== a.charCodeAt(8)) break;
        b = a
          .substring(a.indexOf(":", 15))
          .replace("flex-", "")
          .replace("space-between", "justify");
        return (
          "-webkit-box-pack" + b + "-webkit-" + a + "-ms-flex-pack" + b + a
        );

      case 1005:
        return ka.test(a)
          ? a.replace(aa, ":-webkit-") + a.replace(aa, ":-moz-") + a
          : a;

      case 1e3:
        b = a.substring(13).trim();
        c = b.indexOf("-") + 1;

        switch (b.charCodeAt(0) + b.charCodeAt(c)) {
          case 226:
            b = a.replace(G, "tb");
            break;

          case 232:
            b = a.replace(G, "tb-rl");
            break;

          case 220:
            b = a.replace(G, "lr");
            break;

          default:
            return a;
        }

        return "-webkit-" + a + "-ms-" + b + a;

      case 1017:
        if (-1 === a.indexOf("sticky", 9)) break;

      case 975:
        c = (a = d).length - 10;
        b = (33 === a.charCodeAt(c) ? a.substring(0, c) : a)
          .substring(d.indexOf(":", 7) + 1)
          .trim();

        switch ((m = b.charCodeAt(0) + (b.charCodeAt(7) | 0))) {
          case 203:
            if (111 > b.charCodeAt(8)) break;

          case 115:
            a = a.replace(b, "-webkit-" + b) + ";" + a;
            break;

          case 207:
          case 102:
            a =
              a.replace(b, "-webkit-" + (102 < m ? "inline-" : "") + "box") +
              ";" +
              a.replace(b, "-webkit-" + b) +
              ";" +
              a.replace(b, "-ms-" + b + "box") +
              ";" +
              a;
        }

        return a + ";";

      case 938:
        if (45 === a.charCodeAt(5))
          switch (a.charCodeAt(6)) {
            case 105:
              return (
                (b = a.replace("-items", "")),
                "-webkit-" + a + "-webkit-box-" + b + "-ms-flex-" + b + a
              );

            case 115:
              return "-webkit-" + a + "-ms-flex-item-" + a.replace(ba, "") + a;

            default:
              return (
                "-webkit-" +
                a +
                "-ms-flex-line-pack" +
                a.replace("align-content", "").replace(ba, "") +
                a
              );
          }
        break;

      case 973:
      case 989:
        if (45 !== a.charCodeAt(3) || 122 === a.charCodeAt(4)) break;

      case 931:
      case 953:
        if (!0 === la.test(d))
          return 115 === (b = d.substring(d.indexOf(":") + 1)).charCodeAt(0)
            ? P(d.replace("stretch", "fill-available"), c, e, h).replace(
                ":fill-available",
                ":stretch"
              )
            : a.replace(b, "-webkit-" + b) +
                a.replace(b, "-moz-" + b.replace("fill-", "")) +
                a;
        break;

      case 962:
        if (
          ((a =
            "-webkit-" + a + (102 === a.charCodeAt(5) ? "-ms-" + a : "") + a),
          211 === e + h &&
            105 === a.charCodeAt(13) &&
            0 < a.indexOf("transform", 10))
        )
          return (
            a.substring(0, a.indexOf(";", 27) + 1).replace(ma, "$1-webkit-$2") +
            a
          );
    }

    return a;
  }

  function L(d, c) {
    var e = d.indexOf(1 === c ? ":" : "{"),
      h = d.substring(0, 3 !== c ? e : 10);
    e = d.substring(e + 1, d.length - 1);
    return R(2 !== c ? h : h.replace(na, "$1"), e, c);
  }

  function ea(d, c) {
    var e = P(c, c.charCodeAt(0), c.charCodeAt(1), c.charCodeAt(2));
    return e !== c + ";"
      ? e.replace(oa, " or ($1)").substring(4)
      : "(" + c + ")";
  }

  function H(d, c, e, h, a, m, b, v, n, q) {
    for (var g = 0, x = c, w; g < A; ++g) {
      switch ((w = S[g].call(B, d, x, e, h, a, m, b, v, n, q))) {
        case void 0:
        case !1:
        case !0:
        case null:
          break;

        default:
          x = w;
      }
    }

    if (x !== c) return x;
  }

  function T(d) {
    switch (d) {
      case void 0:
      case null:
        A = S.length = 0;
        break;

      default:
        if ("function" === typeof d) S[A++] = d;
        else if ("object" === typeof d)
          for (var c = 0, e = d.length; c < e; ++c) {
            T(d[c]);
          }
        else Y = !!d | 0;
    }

    return T;
  }

  function U(d) {
    d = d.prefix;
    void 0 !== d &&
      ((R = null),
      d ? ("function" !== typeof d ? (w = 1) : ((w = 2), (R = d))) : (w = 0));
    return U;
  }

  function B(d, c) {
    var e = d;
    33 > e.charCodeAt(0) && (e = e.trim());
    V = e;
    e = [V];

    if (0 < A) {
      var h = H(-1, c, e, e, D, z, 0, 0, 0, 0);
      void 0 !== h && "string" === typeof h && (c = h);
    }

    var a = M(O, e, c, 0, 0);
    0 < A &&
      ((h = H(-2, a, e, e, D, z, a.length, 0, 0, 0)), void 0 !== h && (a = h));
    V = "";
    E = 0;
    z = D = 1;
    return a;
  }

  var ca = /^\0+/g,
    N = /[\0\r\f]/g,
    aa = /: */g,
    ka = /zoo|gra/,
    ma = /([,: ])(transform)/g,
    ia = /,\r+?/g,
    F = /([\t\r\n ])*\f?&/g,
    fa = /@(k\w+)\s*(\S*)\s*/,
    Q = /::(place)/g,
    ha = /:(read-only)/g,
    G = /[svh]\w+-[tblr]{2}/,
    da = /\(\s*(.*)\s*\)/g,
    oa = /([\s\S]*?);/g,
    ba = /-self|flex-/g,
    na = /[^]*?(:[rp][el]a[\w-]+)[^]*/,
    la = /stretch|:\s*\w+\-(?:conte|avail)/,
    ja = /([^-])(image-set\()/,
    z = 1,
    D = 1,
    E = 0,
    w = 1,
    O = [],
    S = [],
    A = 0,
    R = null,
    Y = 0,
    V = "";
  B.use = T;
  B.set = U;
  void 0 !== W && U(W);
  return B;
}

var unitlessKeys = {
  animationIterationCount: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1,
};

function memoize(fn) {
  var cache = {};
  return function (arg) {
    if (cache[arg] === undefined) cache[arg] = fn(arg);
    return cache[arg];
  };
}

var reactPropsRegex = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|inert|itemProp|itemScope|itemType|itemID|itemRef|on|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/; // https://esbench.com/bench/5bfee68a4cd7e6009ef61d23

var index = memoize(
  function (prop) {
    return (
      reactPropsRegex.test(prop) ||
      (prop.charCodeAt(0) === 111 &&
        /* o */
        prop.charCodeAt(1) === 110 &&
        /* n */
        prop.charCodeAt(2) < 91)
    );
  }
  /* Z+1 */
);

/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var b$1 = "function" === typeof Symbol && Symbol.for,
  c$1 = b$1 ? Symbol.for("react.element") : 60103,
  d$1 = b$1 ? Symbol.for("react.portal") : 60106,
  e$1 = b$1 ? Symbol.for("react.fragment") : 60107,
  f$1 = b$1 ? Symbol.for("react.strict_mode") : 60108,
  g$1 = b$1 ? Symbol.for("react.profiler") : 60114,
  h$1 = b$1 ? Symbol.for("react.provider") : 60109,
  k$1 = b$1 ? Symbol.for("react.context") : 60110,
  l$1 = b$1 ? Symbol.for("react.async_mode") : 60111,
  m$1 = b$1 ? Symbol.for("react.concurrent_mode") : 60111,
  n$1 = b$1 ? Symbol.for("react.forward_ref") : 60112,
  p$1 = b$1 ? Symbol.for("react.suspense") : 60113,
  q$1 = b$1 ? Symbol.for("react.suspense_list") : 60120,
  r$1 = b$1 ? Symbol.for("react.memo") : 60115,
  t = b$1 ? Symbol.for("react.lazy") : 60116,
  v$1 = b$1 ? Symbol.for("react.block") : 60121,
  w$1 = b$1 ? Symbol.for("react.fundamental") : 60117,
  x$1 = b$1 ? Symbol.for("react.responder") : 60118,
  y$1 = b$1 ? Symbol.for("react.scope") : 60119;
function z$1(a) {
  if ("object" === typeof a && null !== a) {
    var u = a.$$typeof;
    switch (u) {
      case c$1:
        switch (((a = a.type), a)) {
          case l$1:
          case m$1:
          case e$1:
          case g$1:
          case f$1:
          case p$1:
            return a;
          default:
            switch (((a = a && a.$$typeof), a)) {
              case k$1:
              case n$1:
              case t:
              case r$1:
              case h$1:
                return a;
              default:
                return u;
            }
        }
      case d$1:
        return u;
    }
  }
}
function A$1(a) {
  return z$1(a) === m$1;
}
var AsyncMode = l$1;
var ConcurrentMode = m$1;
var ContextConsumer$1 = k$1;
var ContextProvider$1 = h$1;
var Element$1 = c$1;
var ForwardRef$1 = n$1;
var Fragment$1 = e$1;
var Lazy$1 = t;
var Memo$1 = r$1;
var Portal$1 = d$1;
var Profiler$1 = g$1;
var StrictMode$1 = f$1;
var Suspense$1 = p$1;
var isAsyncMode$1 = function (a) {
  return A$1(a) || z$1(a) === l$1;
};
var isConcurrentMode$1 = A$1;
var isContextConsumer$1 = function (a) {
  return z$1(a) === k$1;
};
var isContextProvider$1 = function (a) {
  return z$1(a) === h$1;
};
var isElement$1 = function (a) {
  return "object" === typeof a && null !== a && a.$$typeof === c$1;
};
var isForwardRef$1 = function (a) {
  return z$1(a) === n$1;
};
var isFragment$1 = function (a) {
  return z$1(a) === e$1;
};
var isLazy$1 = function (a) {
  return z$1(a) === t;
};
var isMemo$1 = function (a) {
  return z$1(a) === r$1;
};
var isPortal$1 = function (a) {
  return z$1(a) === d$1;
};
var isProfiler$1 = function (a) {
  return z$1(a) === g$1;
};
var isStrictMode$1 = function (a) {
  return z$1(a) === f$1;
};
var isSuspense$1 = function (a) {
  return z$1(a) === p$1;
};
var isValidElementType$1 = function (a) {
  return (
    "string" === typeof a ||
    "function" === typeof a ||
    a === e$1 ||
    a === m$1 ||
    a === g$1 ||
    a === f$1 ||
    a === p$1 ||
    a === q$1 ||
    ("object" === typeof a &&
      null !== a &&
      (a.$$typeof === t ||
        a.$$typeof === r$1 ||
        a.$$typeof === h$1 ||
        a.$$typeof === k$1 ||
        a.$$typeof === n$1 ||
        a.$$typeof === w$1 ||
        a.$$typeof === x$1 ||
        a.$$typeof === y$1 ||
        a.$$typeof === v$1))
  );
};
var typeOf$1 = z$1;

var reactIs_production_min$1 = {
  AsyncMode: AsyncMode,
  ConcurrentMode: ConcurrentMode,
  ContextConsumer: ContextConsumer$1,
  ContextProvider: ContextProvider$1,
  Element: Element$1,
  ForwardRef: ForwardRef$1,
  Fragment: Fragment$1,
  Lazy: Lazy$1,
  Memo: Memo$1,
  Portal: Portal$1,
  Profiler: Profiler$1,
  StrictMode: StrictMode$1,
  Suspense: Suspense$1,
  isAsyncMode: isAsyncMode$1,
  isConcurrentMode: isConcurrentMode$1,
  isContextConsumer: isContextConsumer$1,
  isContextProvider: isContextProvider$1,
  isElement: isElement$1,
  isForwardRef: isForwardRef$1,
  isFragment: isFragment$1,
  isLazy: isLazy$1,
  isMemo: isMemo$1,
  isPortal: isPortal$1,
  isProfiler: isProfiler$1,
  isStrictMode: isStrictMode$1,
  isSuspense: isSuspense$1,
  isValidElementType: isValidElementType$1,
  typeOf: typeOf$1,
};

/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var reactIs_development$1 = createCommonjsModule(function (module, exports) {
  if (process.env.NODE_ENV !== "production") {
    (function () {
      // The Symbol used to tag the ReactElement-like types. If there is no native Symbol
      // nor polyfill, then a plain number is used for performance.
      var hasSymbol = typeof Symbol === "function" && Symbol.for;
      var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for("react.element") : 0xeac7;
      var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for("react.portal") : 0xeaca;
      var REACT_FRAGMENT_TYPE = hasSymbol
        ? Symbol.for("react.fragment")
        : 0xeacb;
      var REACT_STRICT_MODE_TYPE = hasSymbol
        ? Symbol.for("react.strict_mode")
        : 0xeacc;
      var REACT_PROFILER_TYPE = hasSymbol
        ? Symbol.for("react.profiler")
        : 0xead2;
      var REACT_PROVIDER_TYPE = hasSymbol
        ? Symbol.for("react.provider")
        : 0xeacd;
      var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for("react.context") : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
      // (unstable) APIs that have been removed. Can we remove the symbols?

      var REACT_ASYNC_MODE_TYPE = hasSymbol
        ? Symbol.for("react.async_mode")
        : 0xeacf;
      var REACT_CONCURRENT_MODE_TYPE = hasSymbol
        ? Symbol.for("react.concurrent_mode")
        : 0xeacf;
      var REACT_FORWARD_REF_TYPE = hasSymbol
        ? Symbol.for("react.forward_ref")
        : 0xead0;
      var REACT_SUSPENSE_TYPE = hasSymbol
        ? Symbol.for("react.suspense")
        : 0xead1;
      var REACT_SUSPENSE_LIST_TYPE = hasSymbol
        ? Symbol.for("react.suspense_list")
        : 0xead8;
      var REACT_MEMO_TYPE = hasSymbol ? Symbol.for("react.memo") : 0xead3;
      var REACT_LAZY_TYPE = hasSymbol ? Symbol.for("react.lazy") : 0xead4;
      var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for("react.block") : 0xead9;
      var REACT_FUNDAMENTAL_TYPE = hasSymbol
        ? Symbol.for("react.fundamental")
        : 0xead5;
      var REACT_RESPONDER_TYPE = hasSymbol
        ? Symbol.for("react.responder")
        : 0xead6;
      var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for("react.scope") : 0xead7;

      function isValidElementType(type) {
        return (
          typeof type === "string" ||
          typeof type === "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
          type === REACT_FRAGMENT_TYPE ||
          type === REACT_CONCURRENT_MODE_TYPE ||
          type === REACT_PROFILER_TYPE ||
          type === REACT_STRICT_MODE_TYPE ||
          type === REACT_SUSPENSE_TYPE ||
          type === REACT_SUSPENSE_LIST_TYPE ||
          (typeof type === "object" &&
            type !== null &&
            (type.$$typeof === REACT_LAZY_TYPE ||
              type.$$typeof === REACT_MEMO_TYPE ||
              type.$$typeof === REACT_PROVIDER_TYPE ||
              type.$$typeof === REACT_CONTEXT_TYPE ||
              type.$$typeof === REACT_FORWARD_REF_TYPE ||
              type.$$typeof === REACT_FUNDAMENTAL_TYPE ||
              type.$$typeof === REACT_RESPONDER_TYPE ||
              type.$$typeof === REACT_SCOPE_TYPE ||
              type.$$typeof === REACT_BLOCK_TYPE))
        );
      }

      function typeOf(object) {
        if (typeof object === "object" && object !== null) {
          var $$typeof = object.$$typeof;

          switch ($$typeof) {
            case REACT_ELEMENT_TYPE:
              var type = object.type;

              switch (type) {
                case REACT_ASYNC_MODE_TYPE:
                case REACT_CONCURRENT_MODE_TYPE:
                case REACT_FRAGMENT_TYPE:
                case REACT_PROFILER_TYPE:
                case REACT_STRICT_MODE_TYPE:
                case REACT_SUSPENSE_TYPE:
                  return type;

                default:
                  var $$typeofType = type && type.$$typeof;

                  switch ($$typeofType) {
                    case REACT_CONTEXT_TYPE:
                    case REACT_FORWARD_REF_TYPE:
                    case REACT_LAZY_TYPE:
                    case REACT_MEMO_TYPE:
                    case REACT_PROVIDER_TYPE:
                      return $$typeofType;

                    default:
                      return $$typeof;
                  }
              }

            case REACT_PORTAL_TYPE:
              return $$typeof;
          }
        }

        return undefined;
      } // AsyncMode is deprecated along with isAsyncMode

      var AsyncMode = REACT_ASYNC_MODE_TYPE;
      var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
      var ContextConsumer = REACT_CONTEXT_TYPE;
      var ContextProvider = REACT_PROVIDER_TYPE;
      var Element = REACT_ELEMENT_TYPE;
      var ForwardRef = REACT_FORWARD_REF_TYPE;
      var Fragment = REACT_FRAGMENT_TYPE;
      var Lazy = REACT_LAZY_TYPE;
      var Memo = REACT_MEMO_TYPE;
      var Portal = REACT_PORTAL_TYPE;
      var Profiler = REACT_PROFILER_TYPE;
      var StrictMode = REACT_STRICT_MODE_TYPE;
      var Suspense = REACT_SUSPENSE_TYPE;
      var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

      function isAsyncMode(object) {
        {
          if (!hasWarnedAboutDeprecatedIsAsyncMode) {
            hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

            console["warn"](
              "The ReactIs.isAsyncMode() alias has been deprecated, " +
                "and will be removed in React 17+. Update your code to use " +
                "ReactIs.isConcurrentMode() instead. It has the exact same API."
            );
          }
        }

        return (
          isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE
        );
      }
      function isConcurrentMode(object) {
        return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
      }
      function isContextConsumer(object) {
        return typeOf(object) === REACT_CONTEXT_TYPE;
      }
      function isContextProvider(object) {
        return typeOf(object) === REACT_PROVIDER_TYPE;
      }
      function isElement(object) {
        return (
          typeof object === "object" &&
          object !== null &&
          object.$$typeof === REACT_ELEMENT_TYPE
        );
      }
      function isForwardRef(object) {
        return typeOf(object) === REACT_FORWARD_REF_TYPE;
      }
      function isFragment(object) {
        return typeOf(object) === REACT_FRAGMENT_TYPE;
      }
      function isLazy(object) {
        return typeOf(object) === REACT_LAZY_TYPE;
      }
      function isMemo(object) {
        return typeOf(object) === REACT_MEMO_TYPE;
      }
      function isPortal(object) {
        return typeOf(object) === REACT_PORTAL_TYPE;
      }
      function isProfiler(object) {
        return typeOf(object) === REACT_PROFILER_TYPE;
      }
      function isStrictMode(object) {
        return typeOf(object) === REACT_STRICT_MODE_TYPE;
      }
      function isSuspense(object) {
        return typeOf(object) === REACT_SUSPENSE_TYPE;
      }

      exports.AsyncMode = AsyncMode;
      exports.ConcurrentMode = ConcurrentMode;
      exports.ContextConsumer = ContextConsumer;
      exports.ContextProvider = ContextProvider;
      exports.Element = Element;
      exports.ForwardRef = ForwardRef;
      exports.Fragment = Fragment;
      exports.Lazy = Lazy;
      exports.Memo = Memo;
      exports.Portal = Portal;
      exports.Profiler = Profiler;
      exports.StrictMode = StrictMode;
      exports.Suspense = Suspense;
      exports.isAsyncMode = isAsyncMode;
      exports.isConcurrentMode = isConcurrentMode;
      exports.isContextConsumer = isContextConsumer;
      exports.isContextProvider = isContextProvider;
      exports.isElement = isElement;
      exports.isForwardRef = isForwardRef;
      exports.isFragment = isFragment;
      exports.isLazy = isLazy;
      exports.isMemo = isMemo;
      exports.isPortal = isPortal;
      exports.isProfiler = isProfiler;
      exports.isStrictMode = isStrictMode;
      exports.isSuspense = isSuspense;
      exports.isValidElementType = isValidElementType;
      exports.typeOf = typeOf;
    })();
  }
});

var reactIs$1 = createCommonjsModule(function (module) {
  if (process.env.NODE_ENV === "production") {
    module.exports = reactIs_production_min$1;
  } else {
    module.exports = reactIs_development$1;
  }
});

/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */
var REACT_STATICS = {
  childContextTypes: true,
  contextType: true,
  contextTypes: true,
  defaultProps: true,
  displayName: true,
  getDefaultProps: true,
  getDerivedStateFromError: true,
  getDerivedStateFromProps: true,
  mixins: true,
  propTypes: true,
  type: true,
};
var KNOWN_STATICS = {
  name: true,
  length: true,
  prototype: true,
  caller: true,
  callee: true,
  arguments: true,
  arity: true,
};
var FORWARD_REF_STATICS = {
  $$typeof: true,
  render: true,
  defaultProps: true,
  displayName: true,
  propTypes: true,
};
var MEMO_STATICS = {
  $$typeof: true,
  compare: true,
  defaultProps: true,
  displayName: true,
  propTypes: true,
  type: true,
};
var TYPE_STATICS = {};
TYPE_STATICS[reactIs$1.ForwardRef] = FORWARD_REF_STATICS;
TYPE_STATICS[reactIs$1.Memo] = MEMO_STATICS;

function getStatics(component) {
  // React v16.11 and below
  if (reactIs$1.isMemo(component)) {
    return MEMO_STATICS;
  } // React v16.12 and above

  return TYPE_STATICS[component["$$typeof"]] || REACT_STATICS;
}

var defineProperty = Object.defineProperty;
var getOwnPropertyNames = Object.getOwnPropertyNames;
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var getPrototypeOf = Object.getPrototypeOf;
var objectPrototype = Object.prototype;
function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
  if (typeof sourceComponent !== "string") {
    // don't hoist over string (html) components
    if (objectPrototype) {
      var inheritedComponent = getPrototypeOf(sourceComponent);

      if (inheritedComponent && inheritedComponent !== objectPrototype) {
        hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
      }
    }

    var keys = getOwnPropertyNames(sourceComponent);

    if (getOwnPropertySymbols) {
      keys = keys.concat(getOwnPropertySymbols(sourceComponent));
    }

    var targetStatics = getStatics(targetComponent);
    var sourceStatics = getStatics(sourceComponent);

    for (var i = 0; i < keys.length; ++i) {
      var key = keys[i];

      if (
        !KNOWN_STATICS[key] &&
        !(blacklist && blacklist[key]) &&
        !(sourceStatics && sourceStatics[key]) &&
        !(targetStatics && targetStatics[key])
      ) {
        var descriptor = getOwnPropertyDescriptor(sourceComponent, key);

        try {
          // Avoid failures from read-only properties
          defineProperty(targetComponent, key, descriptor);
        } catch (e) {}
      }
    }
  }

  return targetComponent;
}

var hoistNonReactStatics_cjs = hoistNonReactStatics;

function v$2() {
  return (v$2 =
    Object.assign ||
    function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var r in n)
          Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
      }
      return e;
    }).apply(this, arguments);
}
var y$2 = function (e, t) {
    for (var n = [e[0]], r = 0, o = t.length; r < o; r += 1)
      n.push(t[r], e[r + 1]);
    return n;
  },
  g$2 = function (t) {
    return (
      null !== t &&
      "object" == typeof t &&
      "[object Object]" ===
        (t.toString ? t.toString() : Object.prototype.toString.call(t)) &&
      !reactIs.typeOf(t)
    );
  },
  S = Object.freeze([]),
  w$2 = Object.freeze({});
function E$1(e) {
  return "function" == typeof e;
}
function b$2(e) {
  return (
    ("production" !== process.env.NODE_ENV && "string" == typeof e && e) ||
    e.displayName ||
    e.name ||
    "Component"
  );
}
function N(e) {
  return e && "string" == typeof e.styledComponentId;
}
var _ =
    ("undefined" != typeof process &&
      (process.env.REACT_APP_SC_ATTR || process.env.SC_ATTR)) ||
    "data-styled",
  A$2 = "undefined" != typeof window && "HTMLElement" in window,
  I$1 = Boolean(
    "boolean" == typeof SC_DISABLE_SPEEDY
      ? SC_DISABLE_SPEEDY
      : "undefined" != typeof process &&
        void 0 !== process.env.REACT_APP_SC_DISABLE_SPEEDY &&
        "" !== process.env.REACT_APP_SC_DISABLE_SPEEDY
      ? "false" !== process.env.REACT_APP_SC_DISABLE_SPEEDY &&
        process.env.REACT_APP_SC_DISABLE_SPEEDY
      : "undefined" != typeof process &&
        void 0 !== process.env.SC_DISABLE_SPEEDY &&
        "" !== process.env.SC_DISABLE_SPEEDY
      ? "false" !== process.env.SC_DISABLE_SPEEDY &&
        process.env.SC_DISABLE_SPEEDY
      : "production" !== process.env.NODE_ENV
  ),
  O =
    "production" !== process.env.NODE_ENV
      ? {
          1: "Cannot create styled-component for component: %s.\n\n",
          2: "Can't collect styles once you've consumed a `ServerStyleSheet`'s styles! `ServerStyleSheet` is a one off instance for each server-side render cycle.\n\n- Are you trying to reuse it across renders?\n- Are you accidentally calling collectStyles twice?\n\n",
          3: "Streaming SSR is only supported in a Node.js environment; Please do not try to call this method in the browser.\n\n",
          4: "The `StyleSheetManager` expects a valid target or sheet prop!\n\n- Does this error occur on the client and is your target falsy?\n- Does this error occur on the server and is the sheet falsy?\n\n",
          5: "The clone method cannot be used on the client!\n\n- Are you running in a client-like environment on the server?\n- Are you trying to run SSR on the client?\n\n",
          6: "Trying to insert a new style tag, but the given Node is unmounted!\n\n- Are you using a custom target that isn't mounted?\n- Does your document not have a valid head element?\n- Have you accidentally removed a style tag manually?\n\n",
          7: 'ThemeProvider: Please return an object from your "theme" prop function, e.g.\n\n```js\ntheme={() => ({})}\n```\n\n',
          8: 'ThemeProvider: Please make your "theme" prop an object.\n\n',
          9: "Missing document `<head>`\n\n",
          10: "Cannot find a StyleSheet instance. Usually this happens if there are multiple copies of styled-components loaded at once. Check out this issue for how to troubleshoot and fix the common cases where this situation can happen: https://github.com/styled-components/styled-components/issues/1941#issuecomment-417862021\n\n",
          11: "_This error was replaced with a dev-time warning, it will be deleted for v4 final._ [createGlobalStyle] received children which will not be rendered. Please use the component without passing children elements.\n\n",
          12: "It seems you are interpolating a keyframe declaration (%s) into an untagged string. This was supported in styled-components v3, but is not longer supported in v4 as keyframes are now injected on-demand. Please wrap your string in the css\\`\\` helper which ensures the styles are injected correctly. See https://www.styled-components.com/docs/api#css\n\n",
          13: "%s is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.\n\n",
          14: 'ThemeProvider: "theme" prop is required.\n\n',
          15: "A stylis plugin has been supplied that is not named. We need a name for each plugin to be able to prevent styling collisions between different stylis configurations within the same app. Before you pass your plugin to `<StyleSheetManager stylisPlugins={[]}>`, please make sure each plugin is uniquely-named, e.g.\n\n```js\nObject.defineProperty(importedPlugin, 'name', { value: 'some-unique-name' });\n```\n\n",
          16: "Reached the limit of how many styled components may be created at group %s.\nYou may only create up to 1,073,741,824 components. If you're creating components dynamically,\nas for instance in your render method then you may be running into this limitation.\n\n",
          17: "CSSStyleSheet could not be found on HTMLStyleElement.\nHas styled-components' style tag been unmounted or altered by another script?\n",
        }
      : {};
function R() {
  for (
    var e = arguments.length <= 0 ? void 0 : arguments[0],
      t = [],
      n = 1,
      r = arguments.length;
    n < r;
    n += 1
  )
    t.push(n < 0 || arguments.length <= n ? void 0 : arguments[n]);
  return (
    t.forEach(function (t) {
      e = e.replace(/%[a-z]/, t);
    }),
    e
  );
}
function D$1(e) {
  for (
    var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1;
    r < t;
    r++
  )
    n[r - 1] = arguments[r];
  throw "production" === process.env.NODE_ENV
    ? new Error(
        "An error occurred. See https://git.io/JUIaE#" +
          e +
          " for more information." +
          (n.length > 0 ? " Args: " + n.join(", ") : "")
      )
    : new Error(R.apply(void 0, [O[e]].concat(n)).trim());
}
var j = (function () {
    function e(e) {
      (this.groupSizes = new Uint32Array(512)),
        (this.length = 512),
        (this.tag = e);
    }
    var t = e.prototype;
    return (
      (t.indexOfGroup = function (e) {
        for (var t = 0, n = 0; n < e; n++) t += this.groupSizes[n];
        return t;
      }),
      (t.insertRules = function (e, t) {
        if (e >= this.groupSizes.length) {
          for (var n = this.groupSizes, r = n.length, o = r; e >= o; )
            (o <<= 1) < 0 && D$1(16, "" + e);
          (this.groupSizes = new Uint32Array(o)),
            this.groupSizes.set(n),
            (this.length = o);
          for (var s = r; s < o; s++) this.groupSizes[s] = 0;
        }
        for (var i = this.indexOfGroup(e + 1), a = 0, c = t.length; a < c; a++)
          this.tag.insertRule(i, t[a]) && (this.groupSizes[e]++, i++);
      }),
      (t.clearGroup = function (e) {
        if (e < this.length) {
          var t = this.groupSizes[e],
            n = this.indexOfGroup(e),
            r = n + t;
          this.groupSizes[e] = 0;
          for (var o = n; o < r; o++) this.tag.deleteRule(n);
        }
      }),
      (t.getGroup = function (e) {
        var t = "";
        if (e >= this.length || 0 === this.groupSizes[e]) return t;
        for (
          var n = this.groupSizes[e],
            r = this.indexOfGroup(e),
            o = r + n,
            s = r;
          s < o;
          s++
        )
          t += this.tag.getRule(s) + "/*!sc*/\n";
        return t;
      }),
      e
    );
  })(),
  T = new Map(),
  x$2 = new Map(),
  k$2 = 1,
  V = function (e) {
    if (T.has(e)) return T.get(e);
    for (; x$2.has(k$2); ) k$2++;
    var t = k$2++;
    return (
      "production" !== process.env.NODE_ENV &&
        ((0 | t) < 0 || t > 1 << 30) &&
        D$1(16, "" + t),
      T.set(e, t),
      x$2.set(t, e),
      t
    );
  },
  M = function (e) {
    return x$2.get(e);
  },
  B$1 = function (e, t) {
    T.set(e, t), x$2.set(t, e);
  },
  z$2 = "style[" + _ + '][data-styled-version="5.2.1"]',
  L = new RegExp("^" + _ + '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),
  G$1 = function (e, t, n) {
    for (var r, o = n.split(","), s = 0, i = o.length; s < i; s++)
      (r = o[s]) && e.registerName(t, r);
  },
  F$1 = function (e, t) {
    for (
      var n = t.innerHTML.split("/*!sc*/\n"), r = [], o = 0, s = n.length;
      o < s;
      o++
    ) {
      var i = n[o].trim();
      if (i) {
        var a = i.match(L);
        if (a) {
          var c = 0 | parseInt(a[1], 10),
            u = a[2];
          0 !== c && (B$1(u, c), G$1(e, u, a[3]), e.getTag().insertRules(c, r)),
            (r.length = 0);
        } else r.push(i);
      }
    }
  },
  Y = function () {
    return "undefined" != typeof __webpack_nonce__ ? __webpack_nonce__ : null;
  },
  q$2 = function (e) {
    var t = document.head,
      n = e || t,
      r = document.createElement("style"),
      o = (function (e) {
        for (var t = e.childNodes, n = t.length; n >= 0; n--) {
          var r = t[n];
          if (r && 1 === r.nodeType && r.hasAttribute(_)) return r;
        }
      })(n),
      s = void 0 !== o ? o.nextSibling : null;
    r.setAttribute(_, "active"), r.setAttribute("data-styled-version", "5.2.1");
    var i = Y();
    return i && r.setAttribute("nonce", i), n.insertBefore(r, s), r;
  },
  H$1 = (function () {
    function e(e) {
      var t = (this.element = q$2(e));
      t.appendChild(document.createTextNode("")),
        (this.sheet = (function (e) {
          if (e.sheet) return e.sheet;
          for (var t = document.styleSheets, n = 0, r = t.length; n < r; n++) {
            var o = t[n];
            if (o.ownerNode === e) return o;
          }
          D$1(17);
        })(t)),
        (this.length = 0);
    }
    var t = e.prototype;
    return (
      (t.insertRule = function (e, t) {
        try {
          return this.sheet.insertRule(t, e), this.length++, !0;
        } catch (e) {
          return !1;
        }
      }),
      (t.deleteRule = function (e) {
        this.sheet.deleteRule(e), this.length--;
      }),
      (t.getRule = function (e) {
        var t = this.sheet.cssRules[e];
        return void 0 !== t && "string" == typeof t.cssText ? t.cssText : "";
      }),
      e
    );
  })(),
  $ = (function () {
    function e(e) {
      var t = (this.element = q$2(e));
      (this.nodes = t.childNodes), (this.length = 0);
    }
    var t = e.prototype;
    return (
      (t.insertRule = function (e, t) {
        if (e <= this.length && e >= 0) {
          var n = document.createTextNode(t),
            r = this.nodes[e];
          return this.element.insertBefore(n, r || null), this.length++, !0;
        }
        return !1;
      }),
      (t.deleteRule = function (e) {
        this.element.removeChild(this.nodes[e]), this.length--;
      }),
      (t.getRule = function (e) {
        return e < this.length ? this.nodes[e].textContent : "";
      }),
      e
    );
  })(),
  W = (function () {
    function e(e) {
      (this.rules = []), (this.length = 0);
    }
    var t = e.prototype;
    return (
      (t.insertRule = function (e, t) {
        return (
          e <= this.length && (this.rules.splice(e, 0, t), this.length++, !0)
        );
      }),
      (t.deleteRule = function (e) {
        this.rules.splice(e, 1), this.length--;
      }),
      (t.getRule = function (e) {
        return e < this.length ? this.rules[e] : "";
      }),
      e
    );
  })(),
  U = A$2,
  J = { isServer: !A$2, useCSSOMInjection: !I$1 },
  Z = (function () {
    function e(e, t, n) {
      void 0 === e && (e = w$2),
        void 0 === t && (t = {}),
        (this.options = v$2({}, J, {}, e)),
        (this.gs = t),
        (this.names = new Map(n)),
        !this.options.isServer &&
          A$2 &&
          U &&
          ((U = !1),
          (function (e) {
            for (
              var t = document.querySelectorAll(z$2), n = 0, r = t.length;
              n < r;
              n++
            ) {
              var o = t[n];
              o &&
                "active" !== o.getAttribute(_) &&
                (F$1(e, o), o.parentNode && o.parentNode.removeChild(o));
            }
          })(this));
    }
    e.registerId = function (e) {
      return V(e);
    };
    var t = e.prototype;
    return (
      (t.reconstructWithOptions = function (t, n) {
        return (
          void 0 === n && (n = !0),
          new e(
            v$2({}, this.options, {}, t),
            this.gs,
            (n && this.names) || void 0
          )
        );
      }),
      (t.allocateGSInstance = function (e) {
        return (this.gs[e] = (this.gs[e] || 0) + 1);
      }),
      (t.getTag = function () {
        return (
          this.tag ||
          (this.tag =
            ((n = (t = this.options).isServer),
            (r = t.useCSSOMInjection),
            (o = t.target),
            (e = n ? new W(o) : r ? new H$1(o) : new $(o)),
            new j(e)))
        );
        var e, t, n, r, o;
      }),
      (t.hasNameForId = function (e, t) {
        return this.names.has(e) && this.names.get(e).has(t);
      }),
      (t.registerName = function (e, t) {
        if ((V(e), this.names.has(e))) this.names.get(e).add(t);
        else {
          var n = new Set();
          n.add(t), this.names.set(e, n);
        }
      }),
      (t.insertRules = function (e, t, n) {
        this.registerName(e, t), this.getTag().insertRules(V(e), n);
      }),
      (t.clearNames = function (e) {
        this.names.has(e) && this.names.get(e).clear();
      }),
      (t.clearRules = function (e) {
        this.getTag().clearGroup(V(e)), this.clearNames(e);
      }),
      (t.clearTag = function () {
        this.tag = void 0;
      }),
      (t.toString = function () {
        return (function (e) {
          for (var t = e.getTag(), n = t.length, r = "", o = 0; o < n; o++) {
            var s = M(o);
            if (void 0 !== s) {
              var i = e.names.get(s),
                a = t.getGroup(o);
              if (void 0 !== i && 0 !== a.length) {
                var c = _ + ".g" + o + '[id="' + s + '"]',
                  u = "";
                void 0 !== i &&
                  i.forEach(function (e) {
                    e.length > 0 && (u += e + ",");
                  }),
                  (r += "" + a + c + '{content:"' + u + '"}/*!sc*/\n');
              }
            }
          }
          return r;
        })(this);
      }),
      e
    );
  })(),
  X = /(a)(d)/gi,
  K = function (e) {
    return String.fromCharCode(e + (e > 25 ? 39 : 97));
  };
function Q(e) {
  var t,
    n = "";
  for (t = Math.abs(e); t > 52; t = (t / 52) | 0) n = K(t % 52) + n;
  return (K(t % 52) + n).replace(X, "$1-$2");
}
var ee = function (e, t) {
    for (var n = t.length; n; ) e = (33 * e) ^ t.charCodeAt(--n);
    return e;
  },
  te = function (e) {
    return ee(5381, e);
  };
function ne(e) {
  for (var t = 0; t < e.length; t += 1) {
    var n = e[t];
    if (E$1(n) && !N(n)) return !1;
  }
  return !0;
}
var re = te("5.2.1"),
  oe = (function () {
    function e(e, t, n) {
      (this.rules = e),
        (this.staticRulesId = ""),
        (this.isStatic =
          "production" === process.env.NODE_ENV &&
          (void 0 === n || n.isStatic) &&
          ne(e)),
        (this.componentId = t),
        (this.baseHash = ee(re, t)),
        (this.baseStyle = n),
        Z.registerId(t);
    }
    return (
      (e.prototype.generateAndInjectStyles = function (e, t, n) {
        var r = this.componentId,
          o = [];
        if (
          (this.baseStyle &&
            o.push(this.baseStyle.generateAndInjectStyles(e, t, n)),
          this.isStatic && !n.hash)
        )
          if (this.staticRulesId && t.hasNameForId(r, this.staticRulesId))
            o.push(this.staticRulesId);
          else {
            var s = Ne(this.rules, e, t, n).join(""),
              i = Q(ee(this.baseHash, s.length) >>> 0);
            if (!t.hasNameForId(r, i)) {
              var a = n(s, "." + i, void 0, r);
              t.insertRules(r, i, a);
            }
            o.push(i), (this.staticRulesId = i);
          }
        else {
          for (
            var c = this.rules.length,
              u = ee(this.baseHash, n.hash),
              l = "",
              d = 0;
            d < c;
            d++
          ) {
            var h = this.rules[d];
            if ("string" == typeof h)
              (l += h),
                "production" !== process.env.NODE_ENV && (u = ee(u, h + d));
            else if (h) {
              var p = Ne(h, e, t, n),
                f = Array.isArray(p) ? p.join("") : p;
              (u = ee(u, f + d)), (l += f);
            }
          }
          if (l) {
            var m = Q(u >>> 0);
            if (!t.hasNameForId(r, m)) {
              var v = n(l, "." + m, void 0, r);
              t.insertRules(r, m, v);
            }
            o.push(m);
          }
        }
        return o.join(" ");
      }),
      e
    );
  })(),
  se = /^\s*\/\/.*$/gm,
  ie = [":", "[", ".", "#"];
function ae(e) {
  var t,
    n,
    r,
    o,
    s = void 0 === e ? w$2 : e,
    i = s.options,
    a = void 0 === i ? w$2 : i,
    c = s.plugins,
    u = void 0 === c ? S : c,
    l = new stylis_min(a),
    d = [],
    p = (function (e) {
      function t(t) {
        if (t)
          try {
            e(t + "}");
          } catch (e) {}
      }
      return function (n, r, o, s, i, a, c, u, l, d) {
        switch (n) {
          case 1:
            if (0 === l && 64 === r.charCodeAt(0)) return e(r + ";"), "";
            break;
          case 2:
            if (0 === u) return r + "/*|*/";
            break;
          case 3:
            switch (u) {
              case 102:
              case 112:
                return e(o[0] + r), "";
              default:
                return r + (0 === d ? "/*|*/" : "");
            }
          case -2:
            r.split("/*|*/}").forEach(t);
        }
      };
    })(function (e) {
      d.push(e);
    }),
    f = function (e, r, s) {
      return (0 === r && ie.includes(s[n.length])) || s.match(o) ? e : "." + t;
    };
  function m(e, s, i, a) {
    void 0 === a && (a = "&");
    var c = e.replace(se, ""),
      u = s && i ? i + " " + s + " { " + c + " }" : c;
    return (
      (t = a),
      (n = s),
      (r = new RegExp("\\" + n + "\\b", "g")),
      (o = new RegExp("(\\" + n + "\\b){2,}")),
      l(i || !s ? "" : s, u)
    );
  }
  return (
    l.use(
      [].concat(u, [
        function (e, t, o) {
          2 === e &&
            o.length &&
            o[0].lastIndexOf(n) > 0 &&
            (o[0] = o[0].replace(r, f));
        },
        p,
        function (e) {
          if (-2 === e) {
            var t = d;
            return (d = []), t;
          }
        },
      ])
    ),
    (m.hash = u.length
      ? u
          .reduce(function (e, t) {
            return t.name || D$1(15), ee(e, t.name);
          }, 5381)
          .toString()
      : ""),
    m
  );
}
var ce = React.createContext(),
  ue = ce.Consumer,
  le = React.createContext(),
  de = (le.Consumer, new Z()),
  he = ae();
function pe() {
  return useContext(ce) || de;
}
function fe() {
  return useContext(le) || he;
}
var ve = (function () {
    function e(e, t) {
      var n = this;
      (this.inject = function (e, t) {
        void 0 === t && (t = he);
        var r = n.name + t.hash;
        e.hasNameForId(n.id, r) ||
          e.insertRules(n.id, r, t(n.rules, r, "@keyframes"));
      }),
        (this.toString = function () {
          return D$1(12, String(n.name));
        }),
        (this.name = e),
        (this.id = "sc-keyframes-" + e),
        (this.rules = t);
    }
    return (
      (e.prototype.getName = function (e) {
        return void 0 === e && (e = he), this.name + e.hash;
      }),
      e
    );
  })(),
  ye = /([A-Z])/,
  ge = /([A-Z])/g,
  Se = /^ms-/,
  we = function (e) {
    return "-" + e.toLowerCase();
  };
function Ee(e) {
  return ye.test(e) ? e.replace(ge, we).replace(Se, "-ms-") : e;
}
var be = function (e) {
  return null == e || !1 === e || "" === e;
};
function Ne(e, n, r, o) {
  if (Array.isArray(e)) {
    for (var s, i = [], a = 0, c = e.length; a < c; a += 1)
      "" !== (s = Ne(e[a], n, r, o)) &&
        (Array.isArray(s) ? i.push.apply(i, s) : i.push(s));
    return i;
  }
  if (be(e)) return "";
  if (N(e)) return "." + e.styledComponentId;
  if (E$1(e)) {
    if (
      "function" != typeof (l = e) ||
      (l.prototype && l.prototype.isReactComponent) ||
      !n
    )
      return e;
    var u = e(n);
    return (
      "production" !== process.env.NODE_ENV &&
        reactIs.isElement(u) &&
        console.warn(
          b$2(e) +
            " is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details."
        ),
      Ne(u, n, r, o)
    );
  }
  var l;
  return e instanceof ve
    ? r
      ? (e.inject(r, o), e.getName(o))
      : e
    : g$2(e)
    ? (function e(t, n) {
        var r,
          o,
          s = [];
        for (var i in t)
          t.hasOwnProperty(i) &&
            !be(t[i]) &&
            (g$2(t[i])
              ? s.push.apply(s, e(t[i], i))
              : E$1(t[i])
              ? s.push(Ee(i) + ":", t[i], ";")
              : s.push(
                  Ee(i) +
                    ": " +
                    ((r = i),
                    null == (o = t[i]) || "boolean" == typeof o || "" === o
                      ? ""
                      : "number" != typeof o || 0 === o || r in unitlessKeys
                      ? String(o).trim()
                      : o + "px") +
                    ";"
                ));
        return n ? [n + " {"].concat(s, ["}"]) : s;
      })(e)
    : e.toString();
}
function _e(e) {
  for (
    var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1;
    r < t;
    r++
  )
    n[r - 1] = arguments[r];
  return E$1(e) || g$2(e)
    ? Ne(y$2(S, [e].concat(n)))
    : 0 === n.length && 1 === e.length && "string" == typeof e[0]
    ? e
    : Ne(y$2(e, n));
}
var Ce = /invalid hook call/i,
  Ae = new Set(),
  Ie = function (e, t) {
    if ("production" !== process.env.NODE_ENV) {
      var n =
        "The component " +
        e +
        (t ? ' with the id of "' + t + '"' : "") +
        " has been created dynamically.\nYou may see this warning because you've called styled inside another component.\nTo resolve this only create new StyledComponents outside of any render method and function component.";
      try {
        useRef(), Ae.has(n) || (console.warn(n), Ae.add(n));
      } catch (e) {
        Ce.test(e.message) && Ae.delete(n);
      }
    }
  },
  Pe = function (e, t, n) {
    return (
      void 0 === n && (n = w$2),
      (e.theme !== n.theme && e.theme) || t || n.theme
    );
  },
  Oe = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,
  Re = /(^-|-$)/g;
function De(e) {
  return e.replace(Oe, "-").replace(Re, "");
}
var je = function (e) {
  return Q(te(e) >>> 0);
};
function Te(e) {
  return (
    "string" == typeof e &&
    ("production" === process.env.NODE_ENV ||
      e.charAt(0) === e.charAt(0).toLowerCase())
  );
}
var xe = function (e) {
    return (
      "function" == typeof e ||
      ("object" == typeof e && null !== e && !Array.isArray(e))
    );
  },
  ke = function (e) {
    return "__proto__" !== e && "constructor" !== e && "prototype" !== e;
  };
function Ve(e, t, n) {
  var r = e[n];
  xe(t) && xe(r) ? Me(r, t) : (e[n] = t);
}
function Me(e) {
  for (
    var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1;
    r < t;
    r++
  )
    n[r - 1] = arguments[r];
  for (var o = 0, s = n; o < s.length; o++) {
    var i = s[o];
    if (xe(i)) for (var a in i) ke(a) && Ve(e, i[a], a);
  }
  return e;
}
var Be = React.createContext(),
  ze = Be.Consumer;
var Ge = {};
function Fe(e, t, n) {
  var o = N(e),
    i = !Te(e),
    a = t.attrs,
    c = void 0 === a ? S : a,
    d = t.componentId,
    h =
      void 0 === d
        ? (function (e, t) {
            var n = "string" != typeof e ? "sc" : De(e);
            Ge[n] = (Ge[n] || 0) + 1;
            var r = n + "-" + je("5.2.1" + n + Ge[n]);
            return t ? t + "-" + r : r;
          })(t.displayName, t.parentComponentId)
        : d,
    p = t.displayName,
    y =
      void 0 === p
        ? (function (e) {
            return Te(e) ? "styled." + e : "Styled(" + b$2(e) + ")";
          })(e)
        : p,
    g =
      t.displayName && t.componentId
        ? De(t.displayName) + "-" + t.componentId
        : t.componentId || h,
    _ = o && e.attrs ? Array.prototype.concat(e.attrs, c).filter(Boolean) : c,
    C = t.shouldForwardProp;
  o &&
    e.shouldForwardProp &&
    (C = t.shouldForwardProp
      ? function (n, r) {
          return e.shouldForwardProp(n, r) && t.shouldForwardProp(n, r);
        }
      : e.shouldForwardProp);
  var A,
    I = new oe(n, g, o ? e.componentStyle : void 0),
    P = I.isStatic && 0 === c.length,
    O = function (e, t) {
      return (function (e, t, n, r) {
        var o = e.attrs,
          i = e.componentStyle,
          a = e.defaultProps,
          c = e.foldedComponentIds,
          d = e.shouldForwardProp,
          h = e.styledComponentId,
          p = e.target;
        "production" !== process.env.NODE_ENV && useDebugValue(h);
        var m = (function (e, t, n) {
            void 0 === e && (e = w$2);
            var r = v$2({}, t, { theme: e }),
              o = {};
            return (
              n.forEach(function (e) {
                var t,
                  n,
                  s,
                  i = e;
                for (t in (E$1(i) && (i = i(r)), i))
                  r[t] = o[t] =
                    "className" === t
                      ? ((n = o[t]), (s = i[t]), n && s ? n + " " + s : n || s)
                      : i[t];
              }),
              [r, o]
            );
          })(Pe(t, useContext(Be), a) || w$2, t, o),
          y = m[0],
          g = m[1],
          S = (function (e, t, n, r) {
            var o = pe(),
              s = fe(),
              i = t
                ? e.generateAndInjectStyles(w$2, o, s)
                : e.generateAndInjectStyles(n, o, s);
            return (
              "production" !== process.env.NODE_ENV && useDebugValue(i),
              "production" !== process.env.NODE_ENV && !t && r && r(i),
              i
            );
          })(
            i,
            r,
            y,
            "production" !== process.env.NODE_ENV
              ? e.warnTooManyClasses
              : void 0
          ),
          b = n,
          N = g.$as || t.$as || g.as || t.as || p,
          _ = Te(N),
          C = g !== t ? v$2({}, t, {}, g) : t,
          A = {};
        for (var I in C)
          "$" !== I[0] &&
            "as" !== I &&
            ("forwardedAs" === I
              ? (A.as = C[I])
              : (d ? d(I, index) : !_ || index(I)) && (A[I] = C[I]));
        return (
          t.style &&
            g.style !== t.style &&
            (A.style = v$2({}, t.style, {}, g.style)),
          (A.className = Array.prototype
            .concat(c, h, S !== h ? S : null, t.className, g.className)
            .filter(Boolean)
            .join(" ")),
          (A.ref = b),
          createElement(N, A)
        );
      })(A, e, t, P);
    };
  return (
    (O.displayName = y),
    ((A = React.forwardRef(O)).attrs = _),
    (A.componentStyle = I),
    (A.displayName = y),
    (A.shouldForwardProp = C),
    (A.foldedComponentIds = o
      ? Array.prototype.concat(e.foldedComponentIds, e.styledComponentId)
      : S),
    (A.styledComponentId = g),
    (A.target = o ? e.target : e),
    (A.withComponent = function (e) {
      var r = t.componentId,
        o = (function (e, t) {
          if (null == e) return {};
          var n,
            r,
            o = {},
            s = Object.keys(e);
          for (r = 0; r < s.length; r++)
            (n = s[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
          return o;
        })(t, ["componentId"]),
        s = r && r + "-" + (Te(e) ? e : De(b$2(e)));
      return Fe(e, v$2({}, o, { attrs: _, componentId: s }), n);
    }),
    Object.defineProperty(A, "defaultProps", {
      get: function () {
        return this._foldedDefaultProps;
      },
      set: function (t) {
        this._foldedDefaultProps = o ? Me({}, e.defaultProps, t) : t;
      },
    }),
    "production" !== process.env.NODE_ENV &&
      (Ie(y, g),
      (A.warnTooManyClasses = (function (e, t) {
        var n = {},
          r = !1;
        return function (o) {
          if (!r && ((n[o] = !0), Object.keys(n).length >= 200)) {
            var s = t ? ' with the id of "' + t + '"' : "";
            console.warn(
              "Over 200 classes were generated for component " +
                e +
                s +
                ".\nConsider using the attrs method, together with a style object for frequently changed styles.\nExample:\n  const Component = styled.div.attrs(props => ({\n    style: {\n      background: props.background,\n    },\n  }))`width: 100%;`\n\n  <Component />"
            ),
              (r = !0),
              (n = {});
          }
        };
      })(y, g))),
    (A.toString = function () {
      return "." + A.styledComponentId;
    }),
    i &&
      hoistNonReactStatics_cjs(A, e, {
        attrs: !0,
        componentStyle: !0,
        displayName: !0,
        foldedComponentIds: !0,
        shouldForwardProp: !0,
        styledComponentId: !0,
        target: !0,
        withComponent: !0,
      }),
    A
  );
}
var Ye = function (e) {
  return (function e(t, r, o) {
    if ((void 0 === o && (o = w$2), !reactIs.isValidElementType(r)))
      return D$1(1, String(r));
    var s = function () {
      return t(r, o, _e.apply(void 0, arguments));
    };
    return (
      (s.withConfig = function (n) {
        return e(t, r, v$2({}, o, {}, n));
      }),
      (s.attrs = function (n) {
        return e(
          t,
          r,
          v$2({}, o, {
            attrs: Array.prototype.concat(o.attrs, n).filter(Boolean),
          })
        );
      }),
      s
    );
  })(Fe, e);
};
[
  "a",
  "abbr",
  "address",
  "area",
  "article",
  "aside",
  "audio",
  "b",
  "base",
  "bdi",
  "bdo",
  "big",
  "blockquote",
  "body",
  "br",
  "button",
  "canvas",
  "caption",
  "cite",
  "code",
  "col",
  "colgroup",
  "data",
  "datalist",
  "dd",
  "del",
  "details",
  "dfn",
  "dialog",
  "div",
  "dl",
  "dt",
  "em",
  "embed",
  "fieldset",
  "figcaption",
  "figure",
  "footer",
  "form",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "head",
  "header",
  "hgroup",
  "hr",
  "html",
  "i",
  "iframe",
  "img",
  "input",
  "ins",
  "kbd",
  "keygen",
  "label",
  "legend",
  "li",
  "link",
  "main",
  "map",
  "mark",
  "marquee",
  "menu",
  "menuitem",
  "meta",
  "meter",
  "nav",
  "noscript",
  "object",
  "ol",
  "optgroup",
  "option",
  "output",
  "p",
  "param",
  "picture",
  "pre",
  "progress",
  "q",
  "rp",
  "rt",
  "ruby",
  "s",
  "samp",
  "script",
  "section",
  "select",
  "small",
  "source",
  "span",
  "strong",
  "style",
  "sub",
  "summary",
  "sup",
  "table",
  "tbody",
  "td",
  "textarea",
  "tfoot",
  "th",
  "thead",
  "time",
  "title",
  "tr",
  "track",
  "u",
  "ul",
  "var",
  "video",
  "wbr",
  "circle",
  "clipPath",
  "defs",
  "ellipse",
  "foreignObject",
  "g",
  "image",
  "line",
  "linearGradient",
  "marker",
  "mask",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "radialGradient",
  "rect",
  "stop",
  "svg",
  "text",
  "tspan",
].forEach(function (e) {
  Ye[e] = Ye(e);
});
"production" !== process.env.NODE_ENV &&
  "undefined" != typeof navigator &&
  "ReactNative" === navigator.product &&
  console.warn(
    "It looks like you've imported 'styled-components' on React Native.\nPerhaps you're looking to import 'styled-components/native'?\nRead more about this at https://www.styled-components.com/docs/basics#react-native"
  ),
  "production" !== process.env.NODE_ENV && process.env.NODE_ENV;

// import React from "react";
// import { ThemeProvider } from "styled-components";
var accentColor = "#BC3463";
var mainColors = {
  accentColor: accentColor,
  textPrimaryColor: "rgb(90, 87, 87)",
  textSecondaryColor: "#737373",
  headerPrimaryColor: accentColor,
};
var sizeDefinitions = {
  headerPrimarySize: "1em",
  primarySpacing: "1em",
  smallSpacing: "0.5em",
};
// const Theme = (children: Array<React.ReactNode>): JSX.Element => {
//   return <ThemeProvider theme={{ mode: "light" }}>{children}</ThemeProvider>;
// };
// export default Theme;

var HeaderCommonStyles = _e(
  templateObject_1 ||
    (templateObject_1 = __makeTemplateObject(
      [
        '\n  font-weight: 600;\n  font-family: "Yantramanav", sans-serif;\n  font-size: ',
        ";\n  color: ",
        ";\n  text-transform: capitalize;\n",
      ],
      [
        '\n  font-weight: 600;\n  font-family: "Yantramanav", sans-serif;\n  font-size: ',
        ";\n  color: ",
        ";\n  text-transform: capitalize;\n",
      ]
    )),
  sizeDefinitions.headerPrimarySize,
  mainColors.textPrimaryColor
);
var BodyCommonStyles = _e(
  templateObject_2 ||
    (templateObject_2 = __makeTemplateObject(
      [
        '\n  font-weight: 500;\n  font-family: "Khula", sans-serif;\n  list-style-type: none;\n  font-size: 0.95em;\n  color: ',
        ";\n  @media screen and (min-width: 30em) {\n    list-style-type: circle;\n  }\n",
      ],
      [
        '\n  font-weight: 500;\n  font-family: "Khula", sans-serif;\n  list-style-type: none;\n  font-size: 0.95em;\n  color: ',
        ";\n  @media screen and (min-width: 30em) {\n    list-style-type: circle;\n  }\n",
      ]
    )),
  mainColors.textSecondaryColor
);
var ResumeBody = Ye.div(
  templateObject_3 ||
    (templateObject_3 = __makeTemplateObject(
      [
        "\n  padding: 10px;\n  display: grid;\n  grid-column: 1;\n  grid-auto-rows: auto;\n  grid-gap: ",
        ";\n",
      ],
      [
        "\n  padding: 10px;\n  display: grid;\n  grid-column: 1;\n  grid-auto-rows: auto;\n  grid-gap: ",
        ";\n",
      ]
    )),
  sizeDefinitions.primarySpacing
);
var Column = Ye.div(
  templateObject_4 ||
    (templateObject_4 = __makeTemplateObject(
      ["\n  display: flex;\n  flex-direction: column;\n  flex-basis: 90vw;\n"],
      ["\n  display: flex;\n  flex-direction: column;\n  flex-basis: 90vw;\n"]
    ))
);
var PlainLeftColumn = Ye(Column)(
  templateObject_5 ||
    (templateObject_5 = __makeTemplateObject(
      ["\n  flex-basis: auto;\n"],
      ["\n  flex-basis: auto;\n"]
    ))
);
var PlainRightColumn = Ye(Column)(
  templateObject_6 ||
    (templateObject_6 = __makeTemplateObject(
      [
        "\n  flex-basis: auto;\n  grid-area: description;\n  & > ul {\n    margin: 0;\n    padding-left: 1.2em;\n    list-style-type: square;\n  }\n\n  & > .jobTitle ~ .jobTitle {\n    margin-top: 10px;\n  }\n",
      ],
      [
        "\n  flex-basis: auto;\n  grid-area: description;\n  & > ul {\n    margin: 0;\n    padding-left: 1.2em;\n    list-style-type: square;\n  }\n\n  & > .jobTitle ~ .jobTitle {\n    margin-top: 10px;\n  }\n",
      ]
    ))
);
var TwoColumnSection = Ye.div(
  templateObject_7 ||
    (templateObject_7 = __makeTemplateObject(
      ["\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n"],
      ["\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n"]
    ))
);
var LeftColumn = Ye(Column)(
  templateObject_8 ||
    (templateObject_8 = __makeTemplateObject(
      [
        "\n  margin: 0;\n  flex-basis: auto;\n  @media screen and (min-width: 30em) {\n    flex-basis: 200px;\n    flex-grow: 9999;\n    margin: 0 1em 1em 0;\n  }\n",
      ],
      [
        "\n  margin: 0;\n  flex-basis: auto;\n  @media screen and (min-width: 30em) {\n    flex-basis: 200px;\n    flex-grow: 9999;\n    margin: 0 1em 1em 0;\n  }\n",
      ]
    ))
);
var RightColumn = Ye(Column)(
  templateObject_9 ||
    (templateObject_9 = __makeTemplateObject(
      [
        "\n  flex-basis: auto;\n  @media screen and (min-width: 30em) {\n    flex-basis: 100px;\n    flex-grow: 1;\n    min-width: 300px;\n  }\n",
      ],
      [
        "\n  flex-basis: auto;\n  @media screen and (min-width: 30em) {\n    flex-basis: 100px;\n    flex-grow: 1;\n    min-width: 300px;\n  }\n",
      ]
    ))
);
var Section = Ye.div(
  templateObject_10 ||
    (templateObject_10 = __makeTemplateObject(
      [
        "\n  grid-auto-rows: min-content;\n  display: grid;\n  grid-gap: ",
        ";\n",
      ],
      [
        "\n  grid-auto-rows: min-content;\n  display: grid;\n  grid-gap: ",
        ";\n",
      ]
    )),
  sizeDefinitions.smallSpacing
);
var ExperienceProjectSectionCommonStyles = _e(
  templateObject_11 ||
    (templateObject_11 = __makeTemplateObject(
      ["\n  display: grid;\n  grid-auto-rows: auto;\n  grid-gap: ", ";\n"],
      ["\n  display: grid;\n  grid-auto-rows: auto;\n  grid-gap: ", ";\n"]
    )),
  sizeDefinitions.smallSpacing
);
var ExperienceProjectSection = Ye.div(
  templateObject_12 ||
    (templateObject_12 = __makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"])),
  ExperienceProjectSectionCommonStyles
);
var ExperienceProjectItemCommonStyles = _e(
  templateObject_13 ||
    (templateObject_13 = __makeTemplateObject(
      [
        '\n  display: flex;\n  flex-direction: column;\n  margin-top: 1em;\n  flex-basis: 90vw;\n  @media screen and (min-width: 30em) {\n    display: grid;\n    grid-template-areas: "title description";\n    grid-gap: ',
        ";\n    grid-template-columns: minmax(auto, 135px) 1fr;\n  }\n",
      ],
      [
        '\n  display: flex;\n  flex-direction: column;\n  margin-top: 1em;\n  flex-basis: 90vw;\n  @media screen and (min-width: 30em) {\n    display: grid;\n    grid-template-areas: "title description";\n    grid-gap: ',
        ";\n    grid-template-columns: minmax(auto, 135px) 1fr;\n  }\n",
      ]
    )),
  sizeDefinitions.primarySpacing
);
var ExperienceProjectItem = Ye.div(
  templateObject_14 ||
    (templateObject_14 = __makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"])),
  ExperienceProjectItemCommonStyles
);
var PlainLeftColumnName = Ye(PlainLeftColumn)(
  templateObject_15 ||
    (templateObject_15 = __makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"])),
  HeaderCommonStyles
);
var PlainLeftColumnDateRange = Ye(PlainLeftColumn)(
  templateObject_16 ||
    (templateObject_16 = __makeTemplateObject(
      ["\n  ", "\n  text-transform: uppercase;\n  font-size: 0.85em;\n"],
      ["\n  ", "\n  text-transform: uppercase;\n  font-size: 0.85em;\n"]
    )),
  BodyCommonStyles
);
var PlainRightColumnTitle = Ye(PlainRightColumn)(
  templateObject_17 ||
    (templateObject_17 = __makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"])),
  HeaderCommonStyles
);
var PlainRightColumnDescription = Ye(PlainRightColumn)(
  templateObject_18 ||
    (templateObject_18 = __makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"])),
  BodyCommonStyles
);
var templateObject_1,
  templateObject_2,
  templateObject_3,
  templateObject_4,
  templateObject_5,
  templateObject_6,
  templateObject_7,
  templateObject_8,
  templateObject_9,
  templateObject_10,
  templateObject_11,
  templateObject_12,
  templateObject_13,
  templateObject_14,
  templateObject_15,
  templateObject_16,
  templateObject_17,
  templateObject_18;

var Description = Ye.p(
  templateObject_1$1 ||
    (templateObject_1$1 = __makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"])),
  BodyCommonStyles
);
var Accent = Ye.span(
  templateObject_2$1 ||
    (templateObject_2$1 = __makeTemplateObject(
      ["\n  font-weight: 600;\n  font-style: italic;\n  color: ", ";\n"],
      ["\n  font-weight: 600;\n  font-style: italic;\n  color: ", ";\n"]
    )),
  mainColors.textPrimaryColor
);
var ContactName = Ye.span(
  templateObject_3$1 ||
    (templateObject_3$1 = __makeTemplateObject(
      [
        "\n  ",
        "\n  font-size:1em;\n  color: white;\n  @media screen and (min-width: 30em) {\n    font-size: 3em;\n  }\n",
      ],
      [
        "\n  ",
        "\n  font-size:1em;\n  color: white;\n  @media screen and (min-width: 30em) {\n    font-size: 3em;\n  }\n",
      ]
    )),
  HeaderCommonStyles
);
var ContactDetails = Ye.ul(
  templateObject_4$1 ||
    (templateObject_4$1 = __makeTemplateObject(
      [
        "\n  list-style-type: none;\n  padding: 0;\n  width: 100%;\n  text-align: center;\n  @media screen and (min-width: 30em) {\n    text-align: right;\n  }\n",
      ],
      [
        "\n  list-style-type: none;\n  padding: 0;\n  width: 100%;\n  text-align: center;\n  @media screen and (min-width: 30em) {\n    text-align: right;\n  }\n",
      ]
    ))
);
var ContactDetailsAnchorTag = Ye.a(
  templateObject_5$1 ||
    (templateObject_5$1 = __makeTemplateObject(
      ["\n  ", "\n  text-decoration: none;\n  color: white;\n"],
      ["\n  ", "\n  text-decoration: none;\n  color: white;\n"]
    )),
  BodyCommonStyles
);
var HeaderBase = Ye.header(
  templateObject_6$1 ||
    (templateObject_6$1 = __makeTemplateObject(
      [
        "\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  background-color: ",
        ";\n  @media screen and (min-width: 30em) {\n    width: auto;\n    padding: 0 20px;\n    flex-direction: row;\n    justify-content: space-between;\n  }\n",
      ],
      [
        "\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  background-color: ",
        ";\n  @media screen and (min-width: 30em) {\n    width: auto;\n    padding: 0 20px;\n    flex-direction: row;\n    justify-content: space-between;\n  }\n",
      ]
    )),
  mainColors.accentColor
);
var Header = function (props) {
  var _a = props.config,
    name = _a.name,
    site = _a.site,
    emailLabel = _a.emailLabel,
    emailLinkValue = _a.emailLinkValue,
    phone = _a.phone;
  var list = [
    { label: site, href: site },
    { label: emailLabel, href: emailLinkValue },
    { label: phone },
  ];
  var content;
  var objectNotEmpty = Object.keys(props).length > 0;
  if (objectNotEmpty) {
    var DetailsList = list.map(function (dataToRender) {
      return React.createElement(
        "li",
        { key: dataToRender.label.toString() },
        React.createElement(
          ContactDetailsAnchorTag,
          { href: dataToRender.href, target: "_blank" },
          dataToRender.label
        )
      );
    });
    content = React.createElement(
      HeaderBase,
      null,
      React.createElement(ContactName, null, name),
      React.createElement(ContactDetails, null, DetailsList)
    );
  } else {
    content = null;
  }
  return content;
};
var templateObject_1$1,
  templateObject_2$1,
  templateObject_3$1,
  templateObject_4$1,
  templateObject_5$1,
  templateObject_6$1;

var ProjectDescList = Ye.ul(
  templateObject_1$2 ||
    (templateObject_1$2 = __makeTemplateObject(
      ["\n  padding: 0;\n"],
      ["\n  padding: 0;\n"]
    ))
);
var ProjectDescListItem = Ye.li(
  templateObject_2$2 ||
    (templateObject_2$2 = __makeTemplateObject(
      ["\n  list-style-type: none;\n"],
      ["\n  list-style-type: none;\n"]
    ))
);
var ProjectsSection = function (props) {
  var config = props.config;
  if (config === null || config === undefined) {
    return null;
  }
  var projectList = config.map(function (project) {
    var title = project.title,
      dateRange = project.dateRange,
      desc = project.desc;
    var jsx = React.createElement(
      ExperienceProjectItem,
      { key: title.toString() },
      React.createElement(
        LeftColumn,
        null,
        React.createElement("span", { className: "projectName" }, title),
        React.createElement("span", { className: "dateRange" }, dateRange)
      ),
      React.createElement(
        RightColumn,
        null,
        React.createElement(
          ProjectDescList,
          null,
          React.createElement(ProjectDescListItem, null, desc)
        )
      )
    );
    return jsx;
  });
  return React.createElement(React.Fragment, null, projectList);
};
var templateObject_1$2, templateObject_2$2;

var SkillsSection = function (props) {
  var config = props.config;
  var skillsList = config.map(function (value, index) {
    var nextVal = config[index + 1];
    return nextVal ? value.concat(", ") : value;
  });
  var jsx = React.createElement(
    "span",
    { className: "description" },
    skillsList
  );
  return jsx;
};

var generateColumns = function (first, second, third) {
  return React.createElement(
    React.Fragment,
    null,
    React.createElement(
      LeftColumn,
      null,
      React.createElement(PlainLeftColumnName, null, first),
      React.createElement(PlainLeftColumnDateRange, null, second)
    ),
    React.createElement(
      RightColumn,
      null,
      React.createElement(PlainRightColumnTitle, null, third)
    )
  );
};
var generateAllColumns = function (first, second, third, fourth, modifier) {
  return React.createElement(
    React.Fragment,
    null,
    generateColumns(first, second, third),
    React.createElement(
      PlainRightColumnDescription,
      { as: modifier ? modifier : null },
      fourth
    )
  );
};

var EducationSection = function (props) {
  var config = props.config;
  var data;
  var list = config.map(function (section) {
    data = {
      name: section.name,
      date: section.dateRange,
      program: section.programOrDegree,
    };
    var name = data.name,
      date = data.date,
      program = data.program;
    return React.createElement(
      "section",
      { key: section.toString() },
      generateColumns(name, date, program)
    );
  });
  return React.createElement(React.Fragment, null, list);
};

var ExperienceSection = function (props) {
  var config = props.config;
  var list = config.map(function (job) {
    var companyName = job.companyName,
      dateRange = job.dateRange,
      jobTitle = job.jobTitle,
      jobDescription = job.jobDescription;
    var jobTasks = jobDescription.map(function (item, index) {
      var desc = React.createElement(
        "li",
        { key: index.toString() },
        item.text
      );
      return desc;
    });
    var jsx = React.createElement(
      ExperienceProjectItem,
      { key: companyName.toString() },
      generateAllColumns(companyName, dateRange, jobTitle, jobTasks, "ul")
    );
    return jsx;
  });
  return React.createElement(React.Fragment, null, list);
};

var SectionHeader = Ye.div(
  templateObject_1$3 ||
    (templateObject_1$3 = __makeTemplateObject(
      [
        "\n  ",
        "\n  border-bottom: 1px solid;\n  font-size: ",
        ";\n  text-transform: uppercase;\n  color: ",
        ";\n  margin-bottom: -5px;\n",
      ],
      [
        "\n  ",
        "\n  border-bottom: 1px solid;\n  font-size: ",
        ";\n  text-transform: uppercase;\n  color: ",
        ";\n  margin-bottom: -5px;\n",
      ]
    )),
  HeaderCommonStyles,
  sizeDefinitions.headerPrimarySize,
  mainColors.headerPrimaryColor
);
var SectionAndHeader = function (props) {
  var sectionTitle = props.sectionTitle,
    children = props.children;
  var jsx = React.createElement(
    Section,
    null,
    React.createElement(SectionHeader, null, sectionTitle),
    children
  );
  return jsx;
};
var templateObject_1$3;

var ResumeGridContainer = Ye.div(
  templateObject_1$4 ||
    (templateObject_1$4 = __makeTemplateObject(
      [
        "\n  background-color: #ffffff;\n  display: grid;\n  width: ",
        ";\n  @media print {\n    width: 100%;\n  }\n",
      ],
      [
        "\n  background-color: #ffffff;\n  display: grid;\n  width: ",
        ";\n  @media print {\n    width: 100%;\n  }\n",
      ]
    )),
  function (props) {
    return props.resumeWidth ? props.resumeWidth : "100%";
  }
);
var Block = function (props) {
  var componentType = props.componentType,
    config = props.config;
  var components = {
    experience: ExperienceSection,
    projects: ProjectsSection,
    education: EducationSection,
    skills: SkillsSection,
  };
  var Tag = components[componentType];
  var resumeDataToRender = config[componentType];
  var dataExists =
    resumeDataToRender !== null && resumeDataToRender !== undefined
      ? true
      : false;
  return Tag && dataExists
    ? React.createElement(
        SectionAndHeader,
        { sectionTitle: componentType },
        React.createElement(Tag, { config: resumeDataToRender })
      )
    : null;
};
var ResumeContent = function (props) {
  var config = props.config;
  return React.createElement(
    ResumeGridContainer,
    null,
    React.createElement(Header, { config: config.header }),
    React.createElement(
      ResumeBody,
      null,
      React.createElement(Block, {
        componentType: "experience",
        config: config,
      }),
      React.createElement(Block, { componentType: "projects", config: config }),
      React.createElement(
        TwoColumnSection,
        null,
        React.createElement(
          LeftColumn,
          null,
          React.createElement(Block, {
            componentType: "education",
            config: config,
          })
        ),
        React.createElement(
          RightColumn,
          null,
          React.createElement(Block, {
            componentType: "skills",
            config: config,
          })
        )
      )
    )
  );
};
ResumeContent.propTypes = {
  config: PropTypes.object,
};
var templateObject_1$4;

var defaultResumeDataObj = {
  header: {
    name: "First Last",
    site: "https://example.com",
    emailLinkValue: "mailto:foobar@example.com",
    emailLabel: "foobar@example.com",
    phone: "444-555-6661",
  },
  education: [
    {
      type: "college",
      name: "A school",
      dateRange: "200X - 20XX",
      programOrDegree: "Bachelor's, Computer Science",
    },
  ],
  experience: [
    {
      companyName: "Tech Co.",
      dateRange: "June 201XX - Present",
      jobTitle: "Team Lead",
      jobDescription: [
        {
          text:
            "Ex novum deserunt consetetur mea, his te dolores constituto,\n        ea vivendum percipitur efficiantur sit. Quo ei ipsum assentior. Te eos viris elitr,\n        te atqui possit quo. Reque altera graeco vis et, ad nisl suavitate laboramus nam,\n        nulla graeci quaeque an sit. Sumo ullum velit eam et.\n        Te vix tollit expetendis, te has veniam eligendi rationibus. ",
        },
        {
          text:
            "Ex novum deserunt consetetur mea, his te dolores constituto,\n        ea vivendum percipitur efficiantur sit. Quo ei ipsum assentior. Te eos viris elitr,\n        te atqui possit quo.",
        },
      ],
    },
    {
      companyName: "Software Corp",
      dateRange: "May 201XX - September 20XX",
      jobTitle: "Software Engineer",
      jobDescription: [
        {
          text:
            "Ex novum deserunt consetetur mea, his te dolores constituto,\n            ea vivendum percipitur efficiantur sit. Quo ei ipsum assentior. Te eos viris elitr,\n            te atqui possit quo. ",
        },
        {
          text:
            "Ex novum deserunt consetetur mea, his te dolores constituto,\n            ea vivendum percipitur efficiantur sit. Quo ei ipsum assentior. Te eos viris elitr,\n            te atqui possit quo. Reque altera graeco vis et, ad nisl suavitate laboramus nam,\n            nulla graeci quaeque an sit. Sumo ullum velit eam et.\n            Te vix tollit expetendis, te has veniam eligendi rationibus. ",
        },
      ],
    },
  ],
  projects: [
    {
      dateRange: "June 20XX",
      title: "Loren ipsum",
      desc:
        "Ex novum deserunt consetetur mea, his te dolores constituto,\n            ea vivendum percipitur efficiantur sit. Quo ei ipsum assentior. Te eos viris elitr,\n            te atqui possit quo. ",
    },
    {
      dateRange: "October 20XX",
      title: "Loren ipsum",
      desc:
        "Ex novum deserunt consetetur mea, his te dolores constituto,\n            ea vivendum percipitur efficiantur sit. Quo ei ipsum assentior. Te eos viris elitr,\n            te atqui possit quo. ",
    },
  ],
  skills: [
    "JavaScript",
    "TypeScript",
    "HTML",
    "CSS",
    "Go",
    "React",
    "React Native",
    "Jest",
    "Webpack",
    "SCSS",
    "NodeJS",
    "SQL",
  ],
};

/* eslint-disable @typescript-eslint/explicit-function-return-type */
var StyledResume = function (props) {
  var config = props.config;
  var _a = useState(defaultResumeDataObj),
    data = _a[0],
    setData = _a[1];
  useEffect(function () {
    setData(config ? config : defaultResumeDataObj);
  }, []);
  return (
    // <Theme>
    React.createElement(ResumeContent, { config: data })
    // </Theme>
  );
};
StyledResume.propTypes = {
  config: PropTypes.shape({
    header: PropTypes.shape({
      name: PropTypes.string.isRequired,
      site: PropTypes.string,
      emailLinkValue: PropTypes.string.isRequired,
      emailLabel: PropTypes.string.isRequired,
      phone: PropTypes.string,
    }),
    //TODO: support various education types in props
    education: PropTypes.arrayOf(
      PropTypes.shape({
        college: PropTypes.shape({
          name: PropTypes.string,
          programOrDegree: PropTypes.string,
          dateRange: PropTypes.string,
        }),
        bootcamp: PropTypes.shape({
          name: PropTypes.string,
          programOrDegree: PropTypes.string,
          dateRange: PropTypes.string,
        }),
      })
    ),
    experience: PropTypes.arrayOf(
      PropTypes.shape({
        companyName: PropTypes.string.isRequired,
        dateRange: PropTypes.string.isRequired,
        jobTitle: PropTypes.string.isRequired,
        jobDescription: PropTypes.arrayOf(
          PropTypes.shape({
            text: PropTypes.string.isRequired,
          })
        ),
      })
    ),
    projects: PropTypes.arrayOf(
      PropTypes.shape({
        dateRange: PropTypes.string,
        title: PropTypes.string,
        desc: PropTypes.string,
      })
    ),
    skills: PropTypes.arrayOf(string),
  }),
};

export default StyledResume;
//# sourceMappingURL=styledResume.es.js.map
