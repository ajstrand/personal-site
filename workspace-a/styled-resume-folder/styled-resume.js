(function (global, factory) {
  typeof exports === "object" && typeof module !== "undefined"
    ? (module.exports = factory(
        require("preact"),
        require("preact/hooks"),
        require("preact/compat")
      ))
    : typeof define === "function" && define.amd
    ? define(["preact", "preact/hooks", "preact/compat"], factory)
    : ((global =
        typeof globalThis !== "undefined" ? globalThis : global || self),
      (global.foobar = factory(global.preact, global.hooks, global.r$1)));
})(this, function (preact, hooks, r$1) {
  "use strict";

  function _interopDefaultLegacy(e) {
    return e && typeof e === "object" && "default" in e ? e : { default: e };
  }

  function _interopNamespace(e) {
    if (e && e.__esModule) return e;
    var n = Object.create(null);
    if (e) {
      Object.keys(e).forEach(function (k) {
        if (k !== "default") {
          var d = Object.getOwnPropertyDescriptor(e, k);
          Object.defineProperty(
            n,
            k,
            d.get
              ? d
              : {
                  enumerable: true,
                  get: function () {
                    return e[k];
                  },
                }
          );
        }
      });
    }
    n["default"] = e;
    return Object.freeze(n);
  }

  var r__namespace = /*#__PURE__*/ _interopNamespace(r$1);
  var r__default = /*#__PURE__*/ _interopDefaultLegacy(r$1);

  function _taggedTemplateLiteral(strings, raw) {
    if (!raw) {
      raw = strings.slice(0);
    }

    return Object.freeze(
      Object.defineProperties(strings, {
        raw: {
          value: Object.freeze(raw),
        },
      })
    );
  }

  function _slicedToArray(arr, i) {
    return (
      _arrayWithHoles(arr) ||
      _iterableToArrayLimit(arr, i) ||
      _unsupportedIterableToArray(arr, i) ||
      _nonIterableRest()
    );
  }

  function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
  }

  function _iterableToArrayLimit(arr, i) {
    var _i =
      arr == null
        ? null
        : (typeof Symbol !== "undefined" && arr[Symbol.iterator]) ||
          arr["@@iterator"];

    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;

    var _s, _e;

    try {
      for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"] != null) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return _arrayLikeToArray(o, minLen);
  }

  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;

    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

    return arr2;
  }

  function _nonIterableRest() {
    throw new TypeError(
      "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
    );
  }

  function memoize(fn) {
    var cache = {};
    return function (arg) {
      if (cache[arg] === undefined) cache[arg] = fn(arg);
      return cache[arg];
    };
  }

  var reactPropsRegex =
    /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|inert|itemProp|itemScope|itemType|itemID|itemRef|on|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/; // https://esbench.com/bench/5bfee68a4cd7e6009ef61d23

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

  const cx = function cx() {
    return Array.prototype.slice.call(arguments).filter(Boolean).join(" ");
  };

  var cx$1 = cx;

  /**
   * This file contains an runtime version of `styled` component. Responsibilities of the component are:
   * - returns ReactElement based on HTML tag used with `styled` or custom React Component
   * - injects classNames for the returned component
   * - injects CSS variables used to define dynamic styles based on props
   */

  // Workaround for rest operator
  const restOp = (obj, keysToExclude) =>
    Object.keys(obj)
      .filter((prop) => keysToExclude.indexOf(prop) === -1)
      .reduce((acc, curr) => {
        acc[curr] = obj[curr];
        return acc;
      }, {}); // rest operator workaround

  const warnIfInvalid = (value, componentName) => {};

  function styled$1(tag) {
    return (options) => {
      const render = (props, ref) => {
        const { as: component = tag, class: className } = props;
        const rest = restOp(props, ["as", "class"]);
        let filteredProps; // Check if it's an HTML tag and not a custom element

        if (typeof component === "string" && component.indexOf("-") === -1) {
          filteredProps = {}; // eslint-disable-next-line guard-for-in

          for (const key in rest) {
            if (key === "as" || index(key)) {
              // Don't pass through invalid attributes to HTML elements
              filteredProps[key] = rest[key];
            }
          }
        } else {
          filteredProps = rest;
        }

        filteredProps.ref = ref;
        filteredProps.className = cx$1(
          filteredProps.className || className,
          options.class
        );
        const { vars } = options;

        if (vars) {
          const style = {}; // eslint-disable-next-line guard-for-in

          for (const name in vars) {
            const variable = vars[name];
            const result = variable[0];
            const unit = variable[1] || "";
            const value = typeof result === "function" ? result(props) : result;
            warnIfInvalid(value, options.name);
            style[`--${name}`] = `${value}${unit}`;
          }

          const ownStyle = filteredProps.style || {};
          const keys = Object.keys(ownStyle);

          if (keys.length > 0) {
            keys.forEach((key) => {
              style[key] = ownStyle[key];
            });
          }

          filteredProps.style = style;
        }

        if (tag.__linaria && tag !== component) {
          // If the underlying tag is a styled component, forward the `as` prop
          // Otherwise the styles from the underlying component will be ignored
          filteredProps.as = component;
          return /*#__PURE__*/ r__namespace.createElement(tag, filteredProps);
        }

        return /*#__PURE__*/ r__namespace.createElement(
          component,
          filteredProps
        );
      };

      const Result = r__namespace.forwardRef
        ? /*#__PURE__*/ r__namespace.forwardRef(render) // React.forwardRef won't available on older React versions and in Preact
        : // Fallback to a innerRef prop in that case
          (props) => {
            const rest = restOp(props, ["innerRef"]);
            return render(rest, props.innerRef);
          };
      Result.displayName = options.name; // These properties will be read by the babel plugin for interpolation

      Result.__linaria = {
        className: options.class,
        extends: tag,
      };
      return Result;
    };
  }

  var styled$2 = styled$1;

  var commonjsGlobal =
    typeof globalThis !== "undefined"
      ? globalThis
      : typeof window !== "undefined"
      ? window
      : typeof global !== "undefined"
      ? global
      : typeof self !== "undefined"
      ? self
      : {};

  var propTypes = { exports: {} };

  /**
   * Copyright (c) 2013-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */

  var ReactPropTypesSecret$1 = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";

  var ReactPropTypesSecret_1 = ReactPropTypesSecret$1;

  /**
   * Copyright (c) 2013-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */

  var ReactPropTypesSecret = ReactPropTypesSecret_1;

  function emptyFunction() {}
  function emptyFunctionWithReset() {}
  emptyFunctionWithReset.resetWarningCache = emptyFunction;

  var factoryWithThrowingShims = function () {
    function shim(
      props,
      propName,
      componentName,
      location,
      propFullName,
      secret
    ) {
      if (secret === ReactPropTypesSecret) {
        // It is still safe when called from React.
        return;
      }
      var err = new Error(
        "Calling PropTypes validators directly is not supported by the `prop-types` package. " +
          "Use PropTypes.checkPropTypes() to call them. " +
          "Read more at http://fb.me/use-check-prop-types"
      );
      err.name = "Invariant Violation";
      throw err;
    }
    shim.isRequired = shim;
    function getShim() {
      return shim;
    } // Important!
    // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
    var ReactPropTypes = {
      array: shim,
      bool: shim,
      func: shim,
      number: shim,
      object: shim,
      string: shim,
      symbol: shim,

      any: shim,
      arrayOf: getShim,
      element: shim,
      elementType: shim,
      instanceOf: getShim,
      node: shim,
      objectOf: getShim,
      oneOf: getShim,
      oneOfType: getShim,
      shape: getShim,
      exact: getShim,

      checkPropTypes: emptyFunctionWithReset,
      resetWarningCache: emptyFunction,
    };

    ReactPropTypes.PropTypes = ReactPropTypes;

    return ReactPropTypes;
  };

  /**
   * Copyright (c) 2013-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */

  {
    // By explicitly using `prop-types` you are opting into new production behavior.
    // http://fb.me/prop-types-in-prod
    propTypes.exports = factoryWithThrowingShims();
  }

  var PropTypes = propTypes.exports;

  var createTheming$2 = {};

  var umd = { exports: {} };

  (function (module, exports) {
    (function (global, factory) {
      module.exports = factory();
    })(commonjsGlobal, function () {
      var isMergeableObject = function isMergeableObject(value) {
        return isNonNullObject(value) && !isSpecial(value);
      };

      function isNonNullObject(value) {
        return !!value && typeof value === "object";
      }

      function isSpecial(value) {
        var stringValue = Object.prototype.toString.call(value);

        return (
          stringValue === "[object RegExp]" ||
          stringValue === "[object Date]" ||
          isReactElement(value)
        );
      }

      // see https://github.com/facebook/react/blob/b5ac963fb791d1298e7f396236383bc955f916c1/src/isomorphic/classic/element/ReactElement.js#L21-L25
      var canUseSymbol = typeof Symbol === "function" && Symbol.for;
      var REACT_ELEMENT_TYPE = canUseSymbol
        ? Symbol.for("react.element")
        : 0xeac7;

      function isReactElement(value) {
        return value.$$typeof === REACT_ELEMENT_TYPE;
      }

      function emptyTarget(val) {
        return Array.isArray(val) ? [] : {};
      }

      function cloneUnlessOtherwiseSpecified(value, options) {
        return options.clone !== false && options.isMergeableObject(value)
          ? deepmerge(emptyTarget(value), value, options)
          : value;
      }

      function defaultArrayMerge(target, source, options) {
        return target.concat(source).map(function (element) {
          return cloneUnlessOtherwiseSpecified(element, options);
        });
      }

      function getMergeFunction(key, options) {
        if (!options.customMerge) {
          return deepmerge;
        }
        var customMerge = options.customMerge(key);
        return typeof customMerge === "function" ? customMerge : deepmerge;
      }

      function getEnumerableOwnPropertySymbols(target) {
        return Object.getOwnPropertySymbols
          ? Object.getOwnPropertySymbols(target).filter(function (symbol) {
              return target.propertyIsEnumerable(symbol);
            })
          : [];
      }

      function getKeys(target) {
        return Object.keys(target).concat(
          getEnumerableOwnPropertySymbols(target)
        );
      }

      function mergeObject(target, source, options) {
        var destination = {};
        if (options.isMergeableObject(target)) {
          getKeys(target).forEach(function (key) {
            destination[key] = cloneUnlessOtherwiseSpecified(
              target[key],
              options
            );
          });
        }
        getKeys(source).forEach(function (key) {
          if (!options.isMergeableObject(source[key]) || !target[key]) {
            destination[key] = cloneUnlessOtherwiseSpecified(
              source[key],
              options
            );
          } else {
            destination[key] = getMergeFunction(key, options)(
              target[key],
              source[key],
              options
            );
          }
        });
        return destination;
      }

      function deepmerge(target, source, options) {
        options = options || {};
        options.arrayMerge = options.arrayMerge || defaultArrayMerge;
        options.isMergeableObject =
          options.isMergeableObject || isMergeableObject;

        var sourceIsArray = Array.isArray(source);
        var targetIsArray = Array.isArray(target);
        var sourceAndTargetTypesMatch = sourceIsArray === targetIsArray;

        if (!sourceAndTargetTypesMatch) {
          return cloneUnlessOtherwiseSpecified(source, options);
        } else if (sourceIsArray) {
          return options.arrayMerge(target, source, options);
        } else {
          return mergeObject(target, source, options);
        }
      }

      deepmerge.all = function deepmergeAll(array, options) {
        if (!Array.isArray(array)) {
          throw new Error("first argument should be an array");
        }

        return array.reduce(function (prev, next) {
          return deepmerge(prev, next, options);
        }, {});
      };

      var deepmerge_1 = deepmerge;

      return deepmerge_1;
    });
  })(umd);

  var createThemeProvider$1 = {};

  createThemeProvider$1.__esModule = true;
  createThemeProvider$1.default = void 0;

  var React$2 = _interopRequireWildcard$2(r__default["default"]);

  function _interopRequireWildcard$2(obj) {
    if (obj && obj.__esModule) {
      return obj;
    } else {
      var newObj = {};
      if (obj != null) {
        for (var key in obj) {
          if (Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc =
              Object.defineProperty && Object.getOwnPropertyDescriptor
                ? Object.getOwnPropertyDescriptor(obj, key)
                : {};
            if (desc.get || desc.set) {
              Object.defineProperty(newObj, key, desc);
            } else {
              newObj[key] = obj[key];
            }
          }
        }
      }
      newObj.default = obj;
      return newObj;
    }
  }

  function _inheritsLoose$1(subClass, superClass) {
    subClass.prototype = Object.create(superClass.prototype);
    subClass.prototype.constructor = subClass;
    subClass.__proto__ = superClass;
  }

  function _defineProperty$1(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true,
      });
    } else {
      obj[key] = value;
    }
    return obj;
  }

  function createThemeProvider(defaultTheme, ThemeContext) {
    var _class, _temp;

    return (
      (_temp = _class =
        /*#__PURE__*/
        (function (_React$Component) {
          _inheritsLoose$1(ThemeProvider, _React$Component);

          function ThemeProvider() {
            return _React$Component.apply(this, arguments) || this;
          }

          var _proto = ThemeProvider.prototype;

          _proto.render = function render() {
            return React$2.createElement(
              ThemeContext.Provider,
              {
                value: this.props.theme,
              },
              this.props.children
            );
          };

          return ThemeProvider;
        })(React$2.Component)),
      _defineProperty$1(_class, "defaultProps", {
        theme: defaultTheme,
      }),
      _temp
    );
  }

  var _default$1 = createThemeProvider;
  createThemeProvider$1.default = _default$1;

  var createWithTheme$1 = {};

  var reactIs$1 = { exports: {} };

  var reactIs_production_min = {};

  /** @license React v16.13.1
   * react-is.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  var b$1 = "function" === typeof Symbol && Symbol.for,
    c = b$1 ? Symbol.for("react.element") : 60103,
    d = b$1 ? Symbol.for("react.portal") : 60106,
    e = b$1 ? Symbol.for("react.fragment") : 60107,
    f = b$1 ? Symbol.for("react.strict_mode") : 60108,
    g$1 = b$1 ? Symbol.for("react.profiler") : 60114,
    h = b$1 ? Symbol.for("react.provider") : 60109,
    k$1 = b$1 ? Symbol.for("react.context") : 60110,
    l = b$1 ? Symbol.for("react.async_mode") : 60111,
    m = b$1 ? Symbol.for("react.concurrent_mode") : 60111,
    n = b$1 ? Symbol.for("react.forward_ref") : 60112,
    p = b$1 ? Symbol.for("react.suspense") : 60113,
    q$1 = b$1 ? Symbol.for("react.suspense_list") : 60120,
    r = b$1 ? Symbol.for("react.memo") : 60115,
    t = b$1 ? Symbol.for("react.lazy") : 60116,
    v$1 = b$1 ? Symbol.for("react.block") : 60121,
    w$1 = b$1 ? Symbol.for("react.fundamental") : 60117,
    x$1 = b$1 ? Symbol.for("react.responder") : 60118,
    y$1 = b$1 ? Symbol.for("react.scope") : 60119;
  function z$1(a) {
    if ("object" === typeof a && null !== a) {
      var u = a.$$typeof;
      switch (u) {
        case c:
          switch (((a = a.type), a)) {
            case l:
            case m:
            case e:
            case g$1:
            case f:
            case p:
              return a;
            default:
              switch (((a = a && a.$$typeof), a)) {
                case k$1:
                case n:
                case t:
                case r:
                case h:
                  return a;
                default:
                  return u;
              }
          }
        case d:
          return u;
      }
    }
  }
  function A(a) {
    return z$1(a) === m;
  }
  reactIs_production_min.AsyncMode = l;
  reactIs_production_min.ConcurrentMode = m;
  reactIs_production_min.ContextConsumer = k$1;
  reactIs_production_min.ContextProvider = h;
  reactIs_production_min.Element = c;
  reactIs_production_min.ForwardRef = n;
  reactIs_production_min.Fragment = e;
  reactIs_production_min.Lazy = t;
  reactIs_production_min.Memo = r;
  reactIs_production_min.Portal = d;
  reactIs_production_min.Profiler = g$1;
  reactIs_production_min.StrictMode = f;
  reactIs_production_min.Suspense = p;
  reactIs_production_min.isAsyncMode = function (a) {
    return A(a) || z$1(a) === l;
  };
  reactIs_production_min.isConcurrentMode = A;
  reactIs_production_min.isContextConsumer = function (a) {
    return z$1(a) === k$1;
  };
  reactIs_production_min.isContextProvider = function (a) {
    return z$1(a) === h;
  };
  reactIs_production_min.isElement = function (a) {
    return "object" === typeof a && null !== a && a.$$typeof === c;
  };
  reactIs_production_min.isForwardRef = function (a) {
    return z$1(a) === n;
  };
  reactIs_production_min.isFragment = function (a) {
    return z$1(a) === e;
  };
  reactIs_production_min.isLazy = function (a) {
    return z$1(a) === t;
  };
  reactIs_production_min.isMemo = function (a) {
    return z$1(a) === r;
  };
  reactIs_production_min.isPortal = function (a) {
    return z$1(a) === d;
  };
  reactIs_production_min.isProfiler = function (a) {
    return z$1(a) === g$1;
  };
  reactIs_production_min.isStrictMode = function (a) {
    return z$1(a) === f;
  };
  reactIs_production_min.isSuspense = function (a) {
    return z$1(a) === p;
  };
  reactIs_production_min.isValidElementType = function (a) {
    return (
      "string" === typeof a ||
      "function" === typeof a ||
      a === e ||
      a === m ||
      a === g$1 ||
      a === f ||
      a === p ||
      a === q$1 ||
      ("object" === typeof a &&
        null !== a &&
        (a.$$typeof === t ||
          a.$$typeof === r ||
          a.$$typeof === h ||
          a.$$typeof === k$1 ||
          a.$$typeof === n ||
          a.$$typeof === w$1 ||
          a.$$typeof === x$1 ||
          a.$$typeof === y$1 ||
          a.$$typeof === v$1))
    );
  };
  reactIs_production_min.typeOf = z$1;

  {
    reactIs$1.exports = reactIs_production_min;
  }

  var reactIs = reactIs$1.exports;

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
  TYPE_STATICS[reactIs.ForwardRef] = FORWARD_REF_STATICS;
  TYPE_STATICS[reactIs.Memo] = MEMO_STATICS;

  function getStatics(component) {
    // React v16.11 and below
    if (reactIs.isMemo(component)) {
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

  createWithTheme$1.__esModule = true;
  createWithTheme$1.default = void 0;

  var React$1 = _interopRequireWildcard$1(r__default["default"]);

  var _deepmerge$1 = _interopRequireDefault$2(umd.exports);

  var _hoistNonReactStatics = _interopRequireDefault$2(
    hoistNonReactStatics_cjs
  );

  function _interopRequireDefault$2(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }

  function _interopRequireWildcard$1(obj) {
    if (obj && obj.__esModule) {
      return obj;
    } else {
      var newObj = {};
      if (obj != null) {
        for (var key in obj) {
          if (Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc =
              Object.defineProperty && Object.getOwnPropertyDescriptor
                ? Object.getOwnPropertyDescriptor(obj, key)
                : {};
            if (desc.get || desc.set) {
              Object.defineProperty(newObj, key, desc);
            } else {
              newObj[key] = obj[key];
            }
          }
        }
      }
      newObj.default = obj;
      return newObj;
    }
  }

  function _extends() {
    _extends =
      Object.assign ||
      function (target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i];
          for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key];
            }
          }
        }
        return target;
      };
    return _extends.apply(this, arguments);
  }

  function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for (i = 0; i < sourceKeys.length; i++) {
      key = sourceKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      target[key] = source[key];
    }
    return target;
  }

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError(
        "this hasn't been initialised - super() hasn't been called"
      );
    }
    return self;
  }

  function _inheritsLoose(subClass, superClass) {
    subClass.prototype = Object.create(superClass.prototype);
    subClass.prototype.constructor = subClass;
    subClass.__proto__ = superClass;
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true,
      });
    } else {
      obj[key] = value;
    }
    return obj;
  }

  var createWithTheme = function createWithTheme(ThemeProvider, ThemeContext) {
    return function withTheme(Comp) {
      var ThemedComponent =
        /*#__PURE__*/
        (function (_React$Component) {
          _inheritsLoose(ThemedComponent, _React$Component);

          function ThemedComponent() {
            var _this;

            for (
              var _len = arguments.length, args = new Array(_len), _key = 0;
              _key < _len;
              _key++
            ) {
              args[_key] = arguments[_key];
            }

            _this =
              _React$Component.call.apply(
                _React$Component,
                [this].concat(args)
              ) || this;

            _defineProperty(_assertThisInitialized(_this), "_previous", void 0);

            _defineProperty(
              _assertThisInitialized(_this),
              "_merge",
              function (a, b) {
                var previous = _this._previous;

                if (previous && previous.a === a && previous.b === b) {
                  return previous.result;
                }

                var result =
                  a && b && a !== b ? (0, _deepmerge$1.default)(a, b) : a || b;
                _this._previous = {
                  a: a,
                  b: b,
                  result: result,
                };
                return result;
              }
            );

            return _this;
          }

          var _proto = ThemedComponent.prototype;

          _proto.render = function render() {
            var _this2 = this;

            var _this$props = this.props,
              _reactThemeProviderForwardedRef =
                _this$props._reactThemeProviderForwardedRef,
              rest = _objectWithoutPropertiesLoose(_this$props, [
                "_reactThemeProviderForwardedRef",
              ]);

            return React$1.createElement(
              ThemeContext.Consumer,
              null,
              function (theme) {
                return React$1.createElement(
                  Comp,
                  _extends({}, rest, {
                    theme: _this2._merge(theme, rest.theme),
                    ref: _reactThemeProviderForwardedRef,
                  })
                );
              }
            );
          };

          return ThemedComponent;
        })(React$1.Component);

      var ResultComponent = React$1.forwardRef(function (props, ref) {
        return React$1.createElement(
          ThemedComponent,
          _extends({}, props, {
            _reactThemeProviderForwardedRef: ref,
          })
        );
      });
      ResultComponent.displayName =
        "withTheme(" + (Comp.displayName || Comp.name) + ")";
      (0, _hoistNonReactStatics.default)(ResultComponent, Comp);
      return ResultComponent;
    };
  };

  var _default = createWithTheme;
  createWithTheme$1.default = _default;

  createTheming$2.__esModule = true;
  createTheming$2.default = createTheming$1;

  var React = _interopRequireWildcard(r__default["default"]);

  var _deepmerge = _interopRequireDefault$1(umd.exports);

  var _createThemeProvider = _interopRequireDefault$1(createThemeProvider$1);

  var _createWithTheme = _interopRequireDefault$1(createWithTheme$1);

  function _interopRequireDefault$1(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }

  function _interopRequireWildcard(obj) {
    if (obj && obj.__esModule) {
      return obj;
    } else {
      var newObj = {};
      if (obj != null) {
        for (var key in obj) {
          if (Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc =
              Object.defineProperty && Object.getOwnPropertyDescriptor
                ? Object.getOwnPropertyDescriptor(obj, key)
                : {};
            if (desc.get || desc.set) {
              Object.defineProperty(newObj, key, desc);
            } else {
              newObj[key] = obj[key];
            }
          }
        }
      }
      newObj.default = obj;
      return newObj;
    }
  }

  function createTheming$1(defaultTheme) {
    var ThemeContext = React.createContext(defaultTheme);
    var ThemeProvider = (0, _createThemeProvider.default)(
      defaultTheme,
      ThemeContext
    );
    var withTheme = (0, _createWithTheme.default)(ThemeProvider, ThemeContext);

    var useTheme = function useTheme(overrides) {
      var theme = React.useContext(ThemeContext);
      var result = React.useMemo(
        function () {
          return theme && overrides
            ? (0, _deepmerge.default)(theme, overrides)
            : theme || overrides;
        },
        [theme, overrides]
      );
      return result;
    };

    return {
      ThemeContext: ThemeContext,
      ThemeProvider: ThemeProvider,
      withTheme: withTheme,
      useTheme: useTheme,
    };
  }

  var _createTheming$1 = _interopRequireDefault(createTheming$2);

  var createTheming = _createTheming$1.default;

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }

  var accentColor = "#BC3463";
  var myTheme = {
    mainColors: {
      accentColor: accentColor,
      textPrimaryColor: "rgb(90, 87, 87)",
      textSecondaryColor: "#737373",
      headerPrimaryColor: accentColor,
    },
    sizeDefinitions: {
      headerPrimarySize: "1em",
      primarySpacing: "1em",
      smallSpacing: "0.5em",
    },
  };

  var _createTheming = createTheming(myTheme),
    ThemeProvider = _createTheming.ThemeProvider;
  _createTheming.withTheme;
  var useTheme = _createTheming.useTheme;

  function styleInject(css, ref) {
    if (ref === void 0) ref = {};
    var insertAt = ref.insertAt;

    if (!css || typeof document === "undefined") {
      return;
    }

    var head = document.head || document.getElementsByTagName("head")[0];
    var style = document.createElement("style");
    style.type = "text/css";

    if (insertAt === "top") {
      if (head.firstChild) {
        head.insertBefore(style, head.firstChild);
      } else {
        head.appendChild(style);
      }
    } else {
      head.appendChild(style);
    }

    if (style.styleSheet) {
      style.styleSheet.cssText = css;
    } else {
      style.appendChild(document.createTextNode(css));
    }
  }

  var css_248z$2 = "";
  styleInject(css_248z$2);

  var HeaderCommonStyles = "HeaderCommonStyles_hh3f4h3";
  var ResumeBody = /*#__PURE__*/ styled$2("div")({
    name: "ResumeBody",
    class: "ResumeBody_r74epr1",
  });
  var Column = /*#__PURE__*/ styled$2("div")({
    name: "Column",
    class: "Column_c13hvuef",
  });
  var PlainLeftColumn = /*#__PURE__*/ styled$2(Column)({
    name: "PlainLeftColumn",
    class: "PlainLeftColumn_p1yy5r48",
  });
  var PlainRightColumn = /*#__PURE__*/ styled$2(Column)({
    name: "PlainRightColumn",
    class: "PlainRightColumn_p11tp439",
  });
  var TwoColumnSection = /*#__PURE__*/ styled$2("div")({
    name: "TwoColumnSection",
    class: "TwoColumnSection_t1qythun",
  });
  var LeftColumn = /*#__PURE__*/ styled$2(Column)({
    name: "LeftColumn",
    class: "LeftColumn_l1y7fh5z",
  });
  var RightColumn = /*#__PURE__*/ styled$2(Column)({
    name: "RightColumn",
    class: "RightColumn_rreko3w",
  });
  var Section = /*#__PURE__*/ styled$2("div")({
    name: "Section",
    class: "Section_s1bg9345",
  });
  var ExperienceProjectItem = /*#__PURE__*/ styled$2("div")({
    name: "ExperienceProjectItem",
    class: "ExperienceProjectItem_e5cn7zs",
  });
  var PlainLeftColumnName = /*#__PURE__*/ styled$2(PlainLeftColumn)({
    name: "PlainLeftColumnName",
    class: "PlainLeftColumnName_p1q1ox0e",
  });
  var PlainLeftColumnDateRange = /*#__PURE__*/ styled$2(PlainLeftColumn)({
    name: "PlainLeftColumnDateRange",
    class: "PlainLeftColumnDateRange_p851cv1",
  });
  var PlainRightColumnTitle = /*#__PURE__*/ styled$2(PlainRightColumn)({
    name: "PlainRightColumnTitle",
    class: "PlainRightColumnTitle_p7zf9xl",
  });
  var PlainRightColumnDescription = /*#__PURE__*/ styled$2(PlainRightColumn)({
    name: "PlainRightColumnDescription",
    class: "PlainRightColumnDescription_p1m2zbij",
  });
  var EducationDetails = /*#__PURE__*/ styled$2("div")({
    name: "EducationDetails",
    class: "EducationDetails_e1ows2uu",
  });

  var css_248z$1 = "";
  styleInject(css_248z$1);

  //   font-weight: 600;
  //   font-style: italic;
  //   color: ${mainColors.textPrimaryColor};
  // `;

  var ContactName = /*#__PURE__*/ styled$2("span")({
    name: "ContactName",
    class: "ContactName_c2h01z2",
  });
  var ContactDetails = /*#__PURE__*/ styled$2("ul")({
    name: "ContactDetails",
    class: "ContactDetails_ckd2pf6",
  });
  var ContactDetailsAnchorTag = /*#__PURE__*/ styled$2("a")({
    name: "ContactDetailsAnchorTag",
    class: "ContactDetailsAnchorTag_c6fgol",
  });
  var HeaderBase = /*#__PURE__*/ styled$2("header")({
    name: "HeaderBase",
    class: "HeaderBase_hbm4l4s",
    vars: {
      "hbm4l4s-0": [
        function (props) {
          return props.color;
        },
      ],
    },
  });

  var Header = function Header(props) {
    var _props$config = props.config,
      name = _props$config.name,
      site = _props$config.site,
      emailLabel = _props$config.emailLabel,
      emailLinkValue = _props$config.emailLinkValue,
      phone = _props$config.phone;
    var theme = props.theme;

    var _useState = hooks.useState(theme),
      _useState2 = _slicedToArray(_useState, 2),
      localTheme = _useState2[0],
      setData = _useState2[1];

    hooks.useEffect(
      function () {
        setData(theme.mainColors);
      },
      [theme]
    );
    var list = [
      {
        label: site,
        href: site,
      },
      {
        label: emailLabel,
        href: emailLinkValue,
      },
      {
        label: phone,
      },
    ];
    var content;
    var objectNotEmpty = Object.keys(props).length > 0;

    if (objectNotEmpty) {
      var DetailsList = list.map(function (dataToRender) {
        return preact.h(
          "li",
          {
            key: dataToRender.label.toString(),
          },
          preact.h(
            ContactDetailsAnchorTag,
            {
              href: dataToRender.href,
              target: "_blank",
            },
            dataToRender.label
          )
        );
      });
      content = preact.h(
        HeaderBase,
        {
          color: localTheme.headerPrimaryColor,
        },
        preact.h(ContactName, null, name),
        preact.h(ContactDetails, null, DetailsList)
      );
    } else {
      content = null;
    }

    return content;
  };

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
          if (
            l === J &&
            (0 < r && (f = f.replace(N, "")), 0 < f.trim().length)
          ) {
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
            return c.replace(
              F,
              (58 === d.charCodeAt(0) ? "" : "$1") + d.trim()
            );
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
                return (
                  "-webkit-" + a + "-ms-flex-item-" + a.replace(ba, "") + a
                );

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
              a
                .substring(0, a.indexOf(";", 27) + 1)
                .replace(ma, "$1-webkit-$2") + a
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
        ((h = H(-2, a, e, e, D, z, a.length, 0, 0, 0)),
        void 0 !== h && (a = h));
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

  function y() {
    return (y =
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
  var v = function (e, t) {
      for (var n = [e[0]], r = 0, o = t.length; r < o; r += 1)
        n.push(t[r], e[r + 1]);
      return n;
    },
    g = function (t) {
      return (
        null !== t &&
        "object" == typeof t &&
        "[object Object]" ===
          (t.toString ? t.toString() : Object.prototype.toString.call(t)) &&
        !reactIs$1.exports.typeOf(t)
      );
    },
    S = Object.freeze([]),
    w = Object.freeze({});
  function E(e) {
    return "function" == typeof e;
  }
  function b(e) {
    return e.displayName || e.name || "Component";
  }
  function _(e) {
    return e && "string" == typeof e.styledComponentId;
  }
  var N =
      ("undefined" != typeof process &&
        (process.env.REACT_APP_SC_ATTR || process.env.SC_ATTR)) ||
      "data-styled",
    C = "undefined" != typeof window && "HTMLElement" in window,
    I = Boolean(
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
        : "production" !== "production"
    );
  function D(e) {
    for (
      var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1;
      r < t;
      r++
    )
      n[r - 1] = arguments[r];
    throw new Error(
      "An error occurred. See https://git.io/JUIaE#" +
        e +
        " for more information." +
        (n.length > 0 ? " Args: " + n.join(", ") : "")
    );
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
              (o <<= 1) < 0 && D(16, "" + e);
            (this.groupSizes = new Uint32Array(o)),
              this.groupSizes.set(n),
              (this.length = o);
            for (var i = r; i < o; i++) this.groupSizes[i] = 0;
          }
          for (
            var s = this.indexOfGroup(e + 1), a = 0, c = t.length;
            a < c;
            a++
          )
            this.tag.insertRule(s, t[a]) && (this.groupSizes[e]++, s++);
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
              i = r;
            i < o;
            i++
          )
            t += this.tag.getRule(i) + "/*!sc*/\n";
          return t;
        }),
        e
      );
    })(),
    T = new Map(),
    x = new Map(),
    k = 1,
    V = function (e) {
      if (T.has(e)) return T.get(e);
      for (; x.has(k); ) k++;
      var t = k++;
      return T.set(e, t), x.set(t, e), t;
    },
    z = function (e) {
      return x.get(e);
    },
    B = function (e, t) {
      t >= k && (k = t + 1), T.set(e, t), x.set(t, e);
    },
    M = "style[" + N + '][data-styled-version="5.3.1"]',
    L = new RegExp("^" + N + '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),
    G = function (e, t, n) {
      for (var r, o = n.split(","), i = 0, s = o.length; i < s; i++)
        (r = o[i]) && e.registerName(t, r);
    },
    F = function (e, t) {
      for (
        var n = (t.innerHTML || "").split("/*!sc*/\n"),
          r = [],
          o = 0,
          i = n.length;
        o < i;
        o++
      ) {
        var s = n[o].trim();
        if (s) {
          var a = s.match(L);
          if (a) {
            var c = 0 | parseInt(a[1], 10),
              u = a[2];
            0 !== c && (B(u, c), G(e, u, a[3]), e.getTag().insertRules(c, r)),
              (r.length = 0);
          } else r.push(s);
        }
      }
    },
    Y = function () {
      return "undefined" != typeof window && void 0 !== window.__webpack_nonce__
        ? window.__webpack_nonce__
        : null;
    },
    q = function (e) {
      var t = document.head,
        n = e || t,
        r = document.createElement("style"),
        o = (function (e) {
          for (var t = e.childNodes, n = t.length; n >= 0; n--) {
            var r = t[n];
            if (r && 1 === r.nodeType && r.hasAttribute(N)) return r;
          }
        })(n),
        i = void 0 !== o ? o.nextSibling : null;
      r.setAttribute(N, "active"),
        r.setAttribute("data-styled-version", "5.3.1");
      var s = Y();
      return s && r.setAttribute("nonce", s), n.insertBefore(r, i), r;
    },
    H = (function () {
      function e(e) {
        var t = (this.element = q(e));
        t.appendChild(document.createTextNode("")),
          (this.sheet = (function (e) {
            if (e.sheet) return e.sheet;
            for (
              var t = document.styleSheets, n = 0, r = t.length;
              n < r;
              n++
            ) {
              var o = t[n];
              if (o.ownerNode === e) return o;
            }
            D(17);
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
        var t = (this.element = q(e));
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
    U = C,
    J = { isServer: !C, useCSSOMInjection: !I },
    X = (function () {
      function e(e, t, n) {
        void 0 === e && (e = w),
          void 0 === t && (t = {}),
          (this.options = y({}, J, {}, e)),
          (this.gs = t),
          (this.names = new Map(n)),
          (this.server = !!e.isServer),
          !this.server &&
            C &&
            U &&
            ((U = !1),
            (function (e) {
              for (
                var t = document.querySelectorAll(M), n = 0, r = t.length;
                n < r;
                n++
              ) {
                var o = t[n];
                o &&
                  "active" !== o.getAttribute(N) &&
                  (F(e, o), o.parentNode && o.parentNode.removeChild(o));
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
              y({}, this.options, {}, t),
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
              (e = n ? new W(o) : r ? new H(o) : new $(o)),
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
              var i = z(o);
              if (void 0 !== i) {
                var s = e.names.get(i),
                  a = t.getGroup(o);
                if (s && a && s.size) {
                  var c = N + ".g" + o + '[id="' + i + '"]',
                    u = "";
                  void 0 !== s &&
                    s.forEach(function (e) {
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
    Z = /(a)(d)/gi,
    K = function (e) {
      return String.fromCharCode(e + (e > 25 ? 39 : 97));
    };
  function Q(e) {
    var t,
      n = "";
    for (t = Math.abs(e); t > 52; t = (t / 52) | 0) n = K(t % 52) + n;
    return (K(t % 52) + n).replace(Z, "$1-$2");
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
      if (E(n) && !_(n)) return !1;
    }
    return !0;
  }
  var re = te("5.3.1"),
    oe = (function () {
      function e(e, t, n) {
        (this.rules = e),
          (this.staticRulesId = ""),
          (this.isStatic = (void 0 === n || n.isStatic) && ne(e)),
          (this.componentId = t),
          (this.baseHash = ee(re, t)),
          (this.baseStyle = n),
          X.registerId(t);
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
              var i = _e(this.rules, e, t, n).join(""),
                s = Q(ee(this.baseHash, i) >>> 0);
              if (!t.hasNameForId(r, s)) {
                var a = n(i, "." + s, void 0, r);
                t.insertRules(r, s, a);
              }
              o.push(s), (this.staticRulesId = s);
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
              if ("string" == typeof h) l += h;
              else if (h) {
                var p = _e(h, e, t, n),
                  f = Array.isArray(p) ? p.join("") : p;
                (u = ee(u, f + d)), (l += f);
              }
            }
            if (l) {
              var m = Q(u >>> 0);
              if (!t.hasNameForId(r, m)) {
                var y = n(l, "." + m, void 0, r);
                t.insertRules(r, m, y);
              }
              o.push(m);
            }
          }
          return o.join(" ");
        }),
        e
      );
    })(),
    ie = /^\s*\/\/.*$/gm,
    se = [":", "[", ".", "#"];
  function ae(e) {
    var t,
      n,
      r,
      o,
      i = void 0 === e ? w : e,
      s = i.options,
      a = void 0 === s ? w : s,
      c = i.plugins,
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
        return function (n, r, o, i, s, a, c, u, l, d) {
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
      f = function (e, r, i) {
        return (0 === r && -1 !== se.indexOf(i[n.length])) || i.match(o)
          ? e
          : "." + t;
      };
    function m(e, i, s, a) {
      void 0 === a && (a = "&");
      var c = e.replace(ie, ""),
        u = i && s ? s + " " + i + " { " + c + " }" : c;
      return (
        (t = a),
        (n = i),
        (r = new RegExp("\\" + n + "\\b", "g")),
        (o = new RegExp("(\\" + n + "\\b){2,}")),
        l(s || !i ? "" : i, u)
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
              return t.name || D(15), ee(e, t.name);
            }, 5381)
            .toString()
        : ""),
      m
    );
  }
  var ce = r__default["default"].createContext();
  ce.Consumer;
  var le = r__default["default"].createContext(),
    de = (le.Consumer, new X()),
    he = ae();
  function pe() {
    return r$1.useContext(ce) || de;
  }
  function fe() {
    return r$1.useContext(le) || he;
  }
  var ye = (function () {
      function e(e, t) {
        var n = this;
        (this.inject = function (e, t) {
          void 0 === t && (t = he);
          var r = n.name + t.hash;
          e.hasNameForId(n.id, r) ||
            e.insertRules(n.id, r, t(n.rules, r, "@keyframes"));
        }),
          (this.toString = function () {
            return D(12, String(n.name));
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
    ve = /([A-Z])/,
    ge = /([A-Z])/g,
    Se = /^ms-/,
    we = function (e) {
      return "-" + e.toLowerCase();
    };
  function Ee(e) {
    return ve.test(e) ? e.replace(ge, we).replace(Se, "-ms-") : e;
  }
  var be = function (e) {
    return null == e || !1 === e || "" === e;
  };
  function _e(e, n, r, o) {
    if (Array.isArray(e)) {
      for (var i, s = [], a = 0, c = e.length; a < c; a += 1)
        "" !== (i = _e(e[a], n, r, o)) &&
          (Array.isArray(i) ? s.push.apply(s, i) : s.push(i));
      return s;
    }
    if (be(e)) return "";
    if (_(e)) return "." + e.styledComponentId;
    if (E(e)) {
      if (
        "function" != typeof (l = e) ||
        (l.prototype && l.prototype.isReactComponent) ||
        !n
      )
        return e;
      var u = e(n);
      return _e(u, n, r, o);
    }
    var l;
    return e instanceof ye
      ? r
        ? (e.inject(r, o), e.getName(o))
        : e
      : g(e)
      ? (function e(t, n) {
          var r,
            o,
            i = [];
          for (var s in t)
            t.hasOwnProperty(s) &&
              !be(t[s]) &&
              ((Array.isArray(t[s]) && t[s].isCss) || E(t[s])
                ? i.push(Ee(s) + ":", t[s], ";")
                : g(t[s])
                ? i.push.apply(i, e(t[s], s))
                : i.push(
                    Ee(s) +
                      ": " +
                      ((r = s),
                      null == (o = t[s]) || "boolean" == typeof o || "" === o
                        ? ""
                        : "number" != typeof o || 0 === o || r in unitlessKeys
                        ? String(o).trim()
                        : o + "px") +
                      ";"
                  ));
          return n ? [n + " {"].concat(i, ["}"]) : i;
        })(e)
      : e.toString();
  }
  var Ne = function (e) {
    return Array.isArray(e) && (e.isCss = !0), e;
  };
  function Ae(e) {
    for (
      var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1;
      r < t;
      r++
    )
      n[r - 1] = arguments[r];
    return E(e) || g(e)
      ? Ne(_e(v(S, [e].concat(n))))
      : 0 === n.length && 1 === e.length && "string" == typeof e[0]
      ? e
      : Ne(_e(v(e, n)));
  }
  var Oe = function (e, t, n) {
      return (
        void 0 === n && (n = w),
        (e.theme !== n.theme && e.theme) || t || n.theme
      );
    },
    Re = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,
    De = /(^-|-$)/g;
  function je(e) {
    return e.replace(Re, "-").replace(De, "");
  }
  var Te = function (e) {
    return Q(te(e) >>> 0);
  };
  function xe(e) {
    return "string" == typeof e && "production" === "production";
  }
  var ke = function (e) {
      return (
        "function" == typeof e ||
        ("object" == typeof e && null !== e && !Array.isArray(e))
      );
    },
    Ve = function (e) {
      return "__proto__" !== e && "constructor" !== e && "prototype" !== e;
    };
  function ze(e, t, n) {
    var r = e[n];
    ke(t) && ke(r) ? Be(r, t) : (e[n] = t);
  }
  function Be(e) {
    for (
      var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1;
      r < t;
      r++
    )
      n[r - 1] = arguments[r];
    for (var o = 0, i = n; o < i.length; o++) {
      var s = i[o];
      if (ke(s)) for (var a in s) Ve(a) && ze(e, s[a], a);
    }
    return e;
  }
  var Me = r__default["default"].createContext();
  Me.Consumer;
  var Fe = {};
  function Ye(e, t, n) {
    var o = _(e),
      s = !xe(e),
      a = t.attrs,
      c = void 0 === a ? S : a,
      d = t.componentId,
      h =
        void 0 === d
          ? (function (e, t) {
              var n = "string" != typeof e ? "sc" : je(e);
              Fe[n] = (Fe[n] || 0) + 1;
              var r = n + "-" + Te("5.3.1" + n + Fe[n]);
              return t ? t + "-" + r : r;
            })(t.displayName, t.parentComponentId)
          : d,
      p = t.displayName,
      v =
        void 0 === p
          ? (function (e) {
              return xe(e) ? "styled." + e : "Styled(" + b(e) + ")";
            })(e)
          : p,
      g =
        t.displayName && t.componentId
          ? je(t.displayName) + "-" + t.componentId
          : t.componentId || h,
      N = o && e.attrs ? Array.prototype.concat(e.attrs, c).filter(Boolean) : c,
      A = t.shouldForwardProp;
    o &&
      e.shouldForwardProp &&
      (A = t.shouldForwardProp
        ? function (n, r, o) {
            return e.shouldForwardProp(n, r, o) && t.shouldForwardProp(n, r, o);
          }
        : e.shouldForwardProp);
    var C,
      I = new oe(n, g, o ? e.componentStyle : void 0),
      P = I.isStatic && 0 === c.length,
      O = function (e, t) {
        return (function (e, t, n, r) {
          var o = e.attrs,
            s = e.componentStyle,
            a = e.defaultProps,
            c = e.foldedComponentIds,
            d = e.shouldForwardProp,
            h = e.styledComponentId,
            p = e.target;
          var m = (function (e, t, n) {
              void 0 === e && (e = w);
              var r = y({}, t, { theme: e }),
                o = {};
              return (
                n.forEach(function (e) {
                  var t,
                    n,
                    i,
                    s = e;
                  for (t in (E(s) && (s = s(r)), s))
                    r[t] = o[t] =
                      "className" === t
                        ? ((n = o[t]),
                          (i = s[t]),
                          n && i ? n + " " + i : n || i)
                        : s[t];
                }),
                [r, o]
              );
            })(Oe(t, r$1.useContext(Me), a) || w, t, o),
            v = m[0],
            g = m[1],
            S = (function (e, t, n, r) {
              var o = pe(),
                i = fe(),
                s = t
                  ? e.generateAndInjectStyles(w, o, i)
                  : e.generateAndInjectStyles(n, o, i);
              return s;
            })(s, r, v),
            b = n,
            _ = g.$as || t.$as || g.as || t.as || p,
            N = xe(_),
            A = g !== t ? y({}, t, {}, g) : t,
            C = {};
          for (var I in A)
            "$" !== I[0] &&
              "as" !== I &&
              ("forwardedAs" === I
                ? (C.as = A[I])
                : (d ? d(I, index, _) : !N || index(I)) && (C[I] = A[I]));
          return (
            t.style &&
              g.style !== t.style &&
              (C.style = y({}, t.style, {}, g.style)),
            (C.className = Array.prototype
              .concat(c, h, S !== h ? S : null, t.className, g.className)
              .filter(Boolean)
              .join(" ")),
            (C.ref = b),
            r$1.createElement(_, C)
          );
        })(C, e, t, P);
      };
    return (
      (O.displayName = v),
      ((C = r__default["default"].forwardRef(O)).attrs = N),
      (C.componentStyle = I),
      (C.displayName = v),
      (C.shouldForwardProp = A),
      (C.foldedComponentIds = o
        ? Array.prototype.concat(e.foldedComponentIds, e.styledComponentId)
        : S),
      (C.styledComponentId = g),
      (C.target = o ? e.target : e),
      (C.withComponent = function (e) {
        var r = t.componentId,
          o = (function (e, t) {
            if (null == e) return {};
            var n,
              r,
              o = {},
              i = Object.keys(e);
            for (r = 0; r < i.length; r++)
              (n = i[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
            return o;
          })(t, ["componentId"]),
          i = r && r + "-" + (xe(e) ? e : je(b(e)));
        return Ye(e, y({}, o, { attrs: N, componentId: i }), n);
      }),
      Object.defineProperty(C, "defaultProps", {
        get: function () {
          return this._foldedDefaultProps;
        },
        set: function (t) {
          this._foldedDefaultProps = o ? Be({}, e.defaultProps, t) : t;
        },
      }),
      (C.toString = function () {
        return "." + C.styledComponentId;
      }),
      s &&
        hoistNonReactStatics_cjs(C, e, {
          attrs: !0,
          componentStyle: !0,
          displayName: !0,
          foldedComponentIds: !0,
          shouldForwardProp: !0,
          styledComponentId: !0,
          target: !0,
          withComponent: !0,
        }),
      C
    );
  }
  var qe = function (e) {
    return (function e(t, r, o) {
      if ((void 0 === o && (o = w), !reactIs$1.exports.isValidElementType(r)))
        return D(1, String(r));
      var i = function () {
        return t(r, o, Ae.apply(void 0, arguments));
      };
      return (
        (i.withConfig = function (n) {
          return e(t, r, y({}, o, {}, n));
        }),
        (i.attrs = function (n) {
          return e(
            t,
            r,
            y({}, o, {
              attrs: Array.prototype.concat(o.attrs, n).filter(Boolean),
            })
          );
        }),
        i
      );
    })(Ye, e);
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
    "textPath",
    "tspan",
  ].forEach(function (e) {
    qe[e] = qe(e);
  });
  var styled = qe;

  var _templateObject$1, _templateObject2;
  var ProjectDescList = styled.ul(
    _templateObject$1 ||
      (_templateObject$1 = _taggedTemplateLiteral(["\n  padding: 0;\n"]))
  );
  var ProjectDescListItem = styled.li(
    _templateObject2 ||
      (_templateObject2 = _taggedTemplateLiteral([
        "\n  list-style-type: none;\n",
      ]))
  );

  var ProjectsSection = function ProjectsSection(props) {
    var config = props.config;

    if (config === null || config === undefined) {
      return null;
    }

    var projectList = config.map(function (project) {
      var title = project.title,
        dateRange = project.dateRange,
        desc = project.desc;
      var jsx = preact.h(
        ExperienceProjectItem,
        {
          key: title.toString(),
        },
        preact.h(
          LeftColumn,
          null,
          preact.h(
            "span",
            {
              className: "projectName",
            },
            title
          ),
          preact.h(
            "span",
            {
              className: "dateRange",
            },
            dateRange
          )
        ),
        preact.h(
          RightColumn,
          null,
          preact.h(
            ProjectDescList,
            null,
            preact.h(ProjectDescListItem, null, desc)
          )
        )
      );
      return jsx;
    });
    return projectList;
  };

  /* eslint-disable no-unused-vars */

  var SkillsSection = function SkillsSection(props) {
    var config = props.config;
    var skillsList = config.map(function (value, index) {
      var nextVal = config[index + 1];
      return nextVal ? value.concat(", ") : value;
    });
    var jsx = preact.h(
      "span",
      {
        className: "description",
      },
      skillsList
    );
    return jsx;
  };

  /** @jsx h */

  var generateColumns = function generateColumns(first, second, third) {
    return preact.h(
      "div",
      {
        class: "details",
      },
      preact.h(
        LeftColumn,
        {
          class: "details",
        },
        preact.h(PlainLeftColumnName, null, first),
        preact.h(PlainLeftColumnDateRange, null, second)
      ),
      preact.h(RightColumn, null, preact.h(PlainRightColumnTitle, null, third))
    );
  };

  var generateAllColumns = function generateAllColumns(
    first,
    second,
    third,
    fourth,
    modifier
  ) {
    return preact.h(
      preact.Fragment,
      null,
      generateColumns(first, second, third),
      preact.h(
        PlainRightColumnDescription,
        {
          as: modifier ? modifier : null,
        },
        fourth
      )
    );
  };

  var EducationSection = function EducationSection(props) {
    var config = props.config;
    var data;
    var list = config.map(function (section) {
      data = {
        name: section.name,
        date: section.dateRange,
        program: section.programOrDegree,
      };
      var _data = data,
        name = _data.name,
        date = _data.date,
        program = _data.program;
      return preact.h(
        EducationDetails,
        {
          key: section.toString(),
        },
        generateColumns(name, date, program)
      );
    });
    return list;
  };

  var ExperienceSection = function ExperienceSection(props) {
    var config = props.config;
    var list = config.map(function (job) {
      var companyName = job.companyName,
        dateRange = job.dateRange,
        jobTitle = job.jobTitle,
        jobDescription = job.jobDescription;
      var jobTasks = jobDescription.map(function (item, index) {
        var desc = preact.h(
          "li",
          {
            key: index.toString(),
          },
          item.text
        );
        return desc;
      });
      var jsx = preact.h(
        ExperienceProjectItem,
        {
          key: companyName.toString(),
        },
        generateAllColumns(companyName, dateRange, jobTitle, jobTasks, "ul")
      );
      return jsx;
    });
    return list;
  };

  var _templateObject;
  var sizeDefinitions = myTheme.sizeDefinitions;
  var SectionHeader = styled.div(
    _templateObject ||
      (_templateObject = _taggedTemplateLiteral([
        "\n  ",
        "\n  border-bottom: 1px solid;\n  font-size: ",
        ";\n  text-transform: uppercase;\n  color: ",
        ";\n  margin-bottom: -5px;\n",
      ])),
    HeaderCommonStyles,
    sizeDefinitions.headerPrimarySize,
    function (props) {
      return props.color;
    }
  );

  var SectionAndHeader = function SectionAndHeader(props) {
    var sectionTitle = props.sectionTitle,
      children = props.children;
    var theme = useTheme();

    var _useState = hooks.useState(theme),
      _useState2 = _slicedToArray(_useState, 2),
      localTheme = _useState2[0],
      setData = _useState2[1];

    hooks.useEffect(
      function () {
        setData(theme.mainColors);
      },
      [theme]
    );
    var jsx = preact.h(
      Section,
      null,
      preact.h(
        SectionHeader,
        {
          color: localTheme.accentColor,
        },
        sectionTitle
      ),
      children
    );
    return jsx;
  };

  var css_248z = "";
  styleInject(css_248z);

  /** @jsx h */
  var ResumeGridContainer = /*#__PURE__*/ styled$2("div")({
    name: "ResumeGridContainer",
    class: "ResumeGridContainer_r1k6bsiw",
    vars: {
      "r1k6bsiw-0": [
        function (props) {
          return props.resumeWidth ? props.resumeWidth : "100%";
        },
      ],
    },
  });

  var Block = function Block(props) {
    var componentType = props.componentType,
      config = props.config,
      theme = props.theme;
    var components = {
      experience: ExperienceSection,
      projects: ProjectsSection,
      education: EducationSection,
      skills: SkillsSection,
    };
    var Tag = components[componentType];
    var resumeDataToRender = config[componentType];
    var dataExists = !!(
      resumeDataToRender !== null && resumeDataToRender !== undefined
    );
    return Tag && dataExists
      ? preact.h(
          SectionAndHeader,
          {
            theme: theme,
            sectionTitle: componentType,
          },
          preact.h(Tag, {
            theme: theme,
            config: resumeDataToRender,
          })
        )
      : null;
  };

  var ResumeContent = function ResumeContent(props) {
    var config = props.config;
    var theme = useTheme();
    return (
      // <Title textColor={theme.userColors.pink}>hello</Title>
      preact.h(
        ResumeGridContainer,
        null,
        preact.h(Header, {
          theme: theme,
          config: config.header,
        }),
        preact.h(
          ResumeBody,
          {
            theme: theme,
          },
          preact.h(Block, {
            theme: theme,
            componentType: "experience",
            config: config,
          }),
          preact.h(Block, {
            theme: theme,
            componentType: "projects",
            config: config,
          }),
          preact.h(
            TwoColumnSection,
            null,
            preact.h(
              LeftColumn,
              null,
              preact.h(Block, {
                theme: theme,
                componentType: "education",
                config: config,
              })
            )
          )
        )
      )
    );
  };

  ResumeContent.propTypes = {
    config: PropTypes.object,
  };

  var testResumeData = {
    header: {
      name: "Alex Strand",
      site: "https://alexstrand.dev",
      emailLinkValue: "mailto:ajstrand8@gmail.com",
      emailLabel: "ajstrand8@gmail.com",
      phone: "419-908-6212",
    },
    education: [
      {
        type: "college",
        name: "Olivet Nazarene University",
        dateRange: "September 2011 - May 2015",
        programOrDegree: "Bachelor's, Computer Science",
      },
    ],
    experience: [
      {
        companyName: "Airtank",
        dateRange: "May 2021 - August 2021",
        jobTitle: "Fullstack Software Engineer",
        jobDescription: [
          {
            text: "Built marketing websites for various clients of using both the Shopify platform \n          and Ziftrshop an e-commerce platform developed by Airtank",
          },
          {
            text: "Interfaced with project managers and other team members to resolve \n          technical questions & accessability concerns for projects being built.  ",
          },
        ],
      },
      {
        companyName: "Chase Bank",
        dateRange: "June 2020 - Present",
        jobTitle: "Frontend Software Engineer",
        jobDescription: [
          {
            text: "Building new features for customer  dashboards. Work involves making sure UI components \n          are accessible for a wide audience. ",
          },
          {
            text: "Review code for other engineers. Mentor less experienced engineers and give advice as needed.  ",
          },
        ],
      },
      {
        companyName: "OCLC",
        dateRange: "September 2018 - Present",
        jobTitle: "Software Developer",
        jobDescription: [
          {
            text: "Involved in a weekly  support rotation between members of my team. \n          We help resolve questions from our customer support teams/other teams within OCLC. \n          We also make sure project dependencies are updated and help out with other  tasks. ",
          },
          {
            text: "Converted the front end of our user login application(which serves over 20,000 different libraries) \n        from YUI to ES6/TypeScript using Google's Material Design in order to provide a login experience \n        that uses current design trends and performs well on mobile devices.  \n        Also makes use of semantic HTML and ARIA for accessibility.  ",
          },
          {
            text: "Rewrote part of our user login/authentication application with React/Material UI components. \n      React allowed us to have a quicker and faster development experience by giving us pre built components \n      from npm as well as build a more consistent style guide, using Material UI Themeing support as a base",
          },
          {
            text: "Writing new API endpoints in Java for a React/Material UI component within in a legacy YUI app. \n    Specifically working within an administrative management application for librarians/staff in an library. ",
          },
        ],
      },
      /*{
      companyName: "Root Inc.",
      dateRange: "September 2015 - September 2018",
      jobTitle: "Software Developer",
      jobDescription: [
        {
          text: `Lead the rewriting of custom grunt plugins to work with a new webpack build system for our SPA framework. 
           Utilizing webpack allowed us be consistent with the 
          rest of our team's tech stacks for various projects and be more adaptable for the future. `
        },
        {
          text: `Lead the development to rebuild our JQuery SPA framework in ES6/Webpack instead of JQuery/Grunt.  `
        },
        {
          text: `Worked with a team(also solo) to develop SPA apps in JQuery for clients. 
      Collaborated with artists and content designers to build applications that met the client's needs. `
        },
        {
          text: `Worked with  a team of developers to make updates and add features to internal Node JS applications for our development team. `
        }
      ]
    }*/
    ],
    skills: [
      "JavaScript",
      "TypeScript",
      "HTML",
      "CSS",
      "Java",
      "React",
      "React Native",
      "Material UI",
      "Jest",
      "Webpack",
      "JQuery",
      "SCSS",
      "NodeJS",
      "Spock",
      "Spring",
      "SQL",
    ],
  };

  var copyColor = function copyColor(theme, userColors) {
    var propsToFind = ["accentColor", "headerPrimaryColor"];

    var _loop = function _loop(key) {
      var newKey = userColors[key];
      var old = theme[key];
      propsToFind.forEach(function (el) {
        if (old[el] && newKey[el] !== undefined) {
          theme[key][el] = newKey[el];
        }
      });
    };

    for (var key in theme) {
      _loop(key);
    }

    return theme;
  };

  var StyledResume = function StyledResume(props) {
    var config = props.config,
      userColors = props.userColors;
    var theme = useTheme();

    var _useState = hooks.useState(theme),
      _useState2 = _slicedToArray(_useState, 2),
      localTheme = _useState2[0],
      setTheme = _useState2[1];

    var _useState3 = hooks.useState(testResumeData),
      _useState4 = _slicedToArray(_useState3, 2),
      data = _useState4[0],
      setData = _useState4[1];

    hooks.useEffect(
      function () {
        setData(config ? config : data); // let's copy all user properties into it

        var res = copyColor(theme, userColors);
        setTheme(res);
      },
      [localTheme]
    );
    return preact.h(
      ThemeProvider,
      {
        theme: localTheme,
      },
      preact.h(ResumeContent, {
        config: data,
        userColors: localTheme,
      })
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
      skills: PropTypes.arrayOf(propTypes.exports.string),
    }),
  };

  return StyledResume;
});

export default StyledResume;
//# sourceMappingURL=styled-resume.js.map
