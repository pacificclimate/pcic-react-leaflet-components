import __ext_0 from "leaflet";
import __ext_1 from "react";
import { PureComponent, useEffect, useState } from "react";
import { GeoJSON, MapContainer, SVGOverlay, TileLayer, useMap, useMapEvents } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { jsx, jsxs } from "react/jsx-runtime";
import { createRoot } from "react-dom/client";
import { useLeafletContext } from "@react-leaflet/core";
//#region \0rolldown/runtime.js
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __esmMin = (fn, res, err) => () => {
	if (err) throw err[0];
	try {
		return fn && (res = fn(fn = 0)), res;
	} catch (e) {
		throw err = [e], e;
	}
};
var __commonJSMin = (cb, mod) => () => (mod || (cb((mod = { exports: {} }).exports, mod), cb = null), mod.exports);
var __exportAll = (all, no_symbols) => {
	let target = {};
	for (var name in all) __defProp(target, name, {
		get: all[name],
		enumerable: true
	});
	if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
	return target;
};
var __copyProps = (to, from, except, desc) => {
	if (from && typeof from === "object" || typeof from === "function") for (var keys = __getOwnPropNames(from), i = 0, n = keys.length, key; i < n; i++) {
		key = keys[i];
		if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
			get: ((k) => from[k]).bind(null, key),
			enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
		});
	}
	return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule || !__hasOwnProp.call(mod, "default") ? __defProp(target, "default", {
	value: mod,
	enumerable: true
}) : target, mod));
var __toCommonJS = (mod) => __hasOwnProp.call(mod, "module.exports") ? mod["module.exports"] : __copyProps(__defProp({}, "__esModule", { value: true }), mod);
//#endregion
//#region node_modules/prop-types/node_modules/react-is/cjs/react-is.production.min.js
/** @license React v16.13.1
* react-is.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var require_react_is_production_min = /* @__PURE__ */ __commonJSMin(((exports) => {
	var b = "function" === typeof Symbol && Symbol.for;
	var c = b ? Symbol.for("react.element") : 60103;
	var d = b ? Symbol.for("react.portal") : 60106;
	var e = b ? Symbol.for("react.fragment") : 60107;
	var f = b ? Symbol.for("react.strict_mode") : 60108;
	var g = b ? Symbol.for("react.profiler") : 60114;
	var h = b ? Symbol.for("react.provider") : 60109;
	var k = b ? Symbol.for("react.context") : 60110;
	var l = b ? Symbol.for("react.async_mode") : 60111;
	var m = b ? Symbol.for("react.concurrent_mode") : 60111;
	var n = b ? Symbol.for("react.forward_ref") : 60112;
	var p = b ? Symbol.for("react.suspense") : 60113;
	var q = b ? Symbol.for("react.suspense_list") : 60120;
	var r = b ? Symbol.for("react.memo") : 60115;
	var t = b ? Symbol.for("react.lazy") : 60116;
	var v = b ? Symbol.for("react.block") : 60121;
	var w = b ? Symbol.for("react.fundamental") : 60117;
	var x = b ? Symbol.for("react.responder") : 60118;
	var y = b ? Symbol.for("react.scope") : 60119;
	function z(a) {
		if ("object" === typeof a && null !== a) {
			var u = a.$$typeof;
			switch (u) {
				case c: switch (a = a.type, a) {
					case l:
					case m:
					case e:
					case g:
					case f:
					case p: return a;
					default: switch (a = a && a.$$typeof, a) {
						case k:
						case n:
						case t:
						case r:
						case h: return a;
						default: return u;
					}
				}
				case d: return u;
			}
		}
	}
	function A(a) {
		return z(a) === m;
	}
	exports.AsyncMode = l;
	exports.ConcurrentMode = m;
	exports.ContextConsumer = k;
	exports.ContextProvider = h;
	exports.Element = c;
	exports.ForwardRef = n;
	exports.Fragment = e;
	exports.Lazy = t;
	exports.Memo = r;
	exports.Portal = d;
	exports.Profiler = g;
	exports.StrictMode = f;
	exports.Suspense = p;
	exports.isAsyncMode = function(a) {
		return A(a) || z(a) === l;
	};
	exports.isConcurrentMode = A;
	exports.isContextConsumer = function(a) {
		return z(a) === k;
	};
	exports.isContextProvider = function(a) {
		return z(a) === h;
	};
	exports.isElement = function(a) {
		return "object" === typeof a && null !== a && a.$$typeof === c;
	};
	exports.isForwardRef = function(a) {
		return z(a) === n;
	};
	exports.isFragment = function(a) {
		return z(a) === e;
	};
	exports.isLazy = function(a) {
		return z(a) === t;
	};
	exports.isMemo = function(a) {
		return z(a) === r;
	};
	exports.isPortal = function(a) {
		return z(a) === d;
	};
	exports.isProfiler = function(a) {
		return z(a) === g;
	};
	exports.isStrictMode = function(a) {
		return z(a) === f;
	};
	exports.isSuspense = function(a) {
		return z(a) === p;
	};
	exports.isValidElementType = function(a) {
		return "string" === typeof a || "function" === typeof a || a === e || a === m || a === g || a === f || a === p || a === q || "object" === typeof a && null !== a && (a.$$typeof === t || a.$$typeof === r || a.$$typeof === h || a.$$typeof === k || a.$$typeof === n || a.$$typeof === w || a.$$typeof === x || a.$$typeof === y || a.$$typeof === v);
	};
	exports.typeOf = z;
}));
//#endregion
//#region node_modules/prop-types/node_modules/react-is/cjs/react-is.development.js
/** @license React v16.13.1
* react-is.development.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var require_react_is_development = /* @__PURE__ */ __commonJSMin(((exports) => {
	if (process.env.NODE_ENV !== "production") (function() {
		"use strict";
		var hasSymbol = typeof Symbol === "function" && Symbol.for;
		var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for("react.element") : 60103;
		var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for("react.portal") : 60106;
		var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for("react.fragment") : 60107;
		var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for("react.strict_mode") : 60108;
		var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for("react.profiler") : 60114;
		var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for("react.provider") : 60109;
		var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for("react.context") : 60110;
		var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for("react.async_mode") : 60111;
		var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for("react.concurrent_mode") : 60111;
		var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for("react.forward_ref") : 60112;
		var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for("react.suspense") : 60113;
		var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for("react.suspense_list") : 60120;
		var REACT_MEMO_TYPE = hasSymbol ? Symbol.for("react.memo") : 60115;
		var REACT_LAZY_TYPE = hasSymbol ? Symbol.for("react.lazy") : 60116;
		var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for("react.block") : 60121;
		var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for("react.fundamental") : 60117;
		var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for("react.responder") : 60118;
		var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for("react.scope") : 60119;
		function isValidElementType(type) {
			return typeof type === "string" || typeof type === "function" || type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === "object" && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
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
							case REACT_SUSPENSE_TYPE: return type;
							default:
								var $$typeofType = type && type.$$typeof;
								switch ($$typeofType) {
									case REACT_CONTEXT_TYPE:
									case REACT_FORWARD_REF_TYPE:
									case REACT_LAZY_TYPE:
									case REACT_MEMO_TYPE:
									case REACT_PROVIDER_TYPE: return $$typeofType;
									default: return $$typeof;
								}
						}
					case REACT_PORTAL_TYPE: return $$typeof;
				}
			}
		}
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
		var hasWarnedAboutDeprecatedIsAsyncMode = false;
		function isAsyncMode(object) {
			if (!hasWarnedAboutDeprecatedIsAsyncMode) {
				hasWarnedAboutDeprecatedIsAsyncMode = true;
				console["warn"]("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.");
			}
			return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
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
			return typeof object === "object" && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
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
}));
//#endregion
//#region node_modules/prop-types/node_modules/react-is/index.js
var require_react_is = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	if (process.env.NODE_ENV === "production") module.exports = require_react_is_production_min();
	else module.exports = require_react_is_development();
}));
//#endregion
//#region node_modules/object-assign/index.js
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var require_object_assign = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var getOwnPropertySymbols = Object.getOwnPropertySymbols;
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	var propIsEnumerable = Object.prototype.propertyIsEnumerable;
	function toObject(val) {
		if (val === null || val === void 0) throw new TypeError("Object.assign cannot be called with null or undefined");
		return Object(val);
	}
	function shouldUseNative() {
		try {
			if (!Object.assign) return false;
			var test1 = /* @__PURE__ */ new String("abc");
			test1[5] = "de";
			if (Object.getOwnPropertyNames(test1)[0] === "5") return false;
			var test2 = {};
			for (var i = 0; i < 10; i++) test2["_" + String.fromCharCode(i)] = i;
			if (Object.getOwnPropertyNames(test2).map(function(n) {
				return test2[n];
			}).join("") !== "0123456789") return false;
			var test3 = {};
			"abcdefghijklmnopqrst".split("").forEach(function(letter) {
				test3[letter] = letter;
			});
			if (Object.keys(Object.assign({}, test3)).join("") !== "abcdefghijklmnopqrst") return false;
			return true;
		} catch (err) {
			return false;
		}
	}
	module.exports = shouldUseNative() ? Object.assign : function(target, source) {
		var from;
		var to = toObject(target);
		var symbols;
		for (var s = 1; s < arguments.length; s++) {
			from = Object(arguments[s]);
			for (var key in from) if (hasOwnProperty.call(from, key)) to[key] = from[key];
			if (getOwnPropertySymbols) {
				symbols = getOwnPropertySymbols(from);
				for (var i = 0; i < symbols.length; i++) if (propIsEnumerable.call(from, symbols[i])) to[symbols[i]] = from[symbols[i]];
			}
		}
		return to;
	};
}));
//#endregion
//#region node_modules/prop-types/lib/ReactPropTypesSecret.js
/**
* Copyright (c) 2013-present, Facebook, Inc.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var require_ReactPropTypesSecret = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
}));
//#endregion
//#region node_modules/prop-types/lib/has.js
var require_has = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = Function.call.bind(Object.prototype.hasOwnProperty);
}));
//#endregion
//#region node_modules/prop-types/checkPropTypes.js
/**
* Copyright (c) 2013-present, Facebook, Inc.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var require_checkPropTypes = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var printWarning = function() {};
	if (process.env.NODE_ENV !== "production") {
		var ReactPropTypesSecret = require_ReactPropTypesSecret();
		var loggedTypeFailures = {};
		var has = require_has();
		printWarning = function(text) {
			var message = "Warning: " + text;
			if (typeof console !== "undefined") console.error(message);
			try {
				throw new Error(message);
			} catch (x) {}
		};
	}
	/**
	* Assert that the values match with the type specs.
	* Error messages are memorized and will only be shown once.
	*
	* @param {object} typeSpecs Map of name to a ReactPropType
	* @param {object} values Runtime values that need to be type-checked
	* @param {string} location e.g. "prop", "context", "child context"
	* @param {string} componentName Name of the component for error messages.
	* @param {?Function} getStack Returns the component stack.
	* @private
	*/
	function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
		if (process.env.NODE_ENV !== "production") {
			for (var typeSpecName in typeSpecs) if (has(typeSpecs, typeSpecName)) {
				var error;
				try {
					if (typeof typeSpecs[typeSpecName] !== "function") {
						var err = Error((componentName || "React class") + ": " + location + " type `" + typeSpecName + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof typeSpecs[typeSpecName] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
						err.name = "Invariant Violation";
						throw err;
					}
					error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
				} catch (ex) {
					error = ex;
				}
				if (error && !(error instanceof Error)) printWarning((componentName || "React class") + ": type specification of " + location + " `" + typeSpecName + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof error + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).");
				if (error instanceof Error && !(error.message in loggedTypeFailures)) {
					loggedTypeFailures[error.message] = true;
					var stack = getStack ? getStack() : "";
					printWarning("Failed " + location + " type: " + error.message + (stack != null ? stack : ""));
				}
			}
		}
	}
	/**
	* Resets warning cache when testing.
	*
	* @private
	*/
	checkPropTypes.resetWarningCache = function() {
		if (process.env.NODE_ENV !== "production") loggedTypeFailures = {};
	};
	module.exports = checkPropTypes;
}));
//#endregion
//#region node_modules/prop-types/factoryWithTypeCheckers.js
/**
* Copyright (c) 2013-present, Facebook, Inc.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var require_factoryWithTypeCheckers = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var ReactIs = require_react_is();
	var assign = require_object_assign();
	var ReactPropTypesSecret = require_ReactPropTypesSecret();
	var has = require_has();
	var checkPropTypes = require_checkPropTypes();
	var printWarning = function() {};
	if (process.env.NODE_ENV !== "production") printWarning = function(text) {
		var message = "Warning: " + text;
		if (typeof console !== "undefined") console.error(message);
		try {
			throw new Error(message);
		} catch (x) {}
	};
	function emptyFunctionThatReturnsNull() {
		return null;
	}
	module.exports = function(isValidElement, throwOnDirectAccess) {
		var ITERATOR_SYMBOL = typeof Symbol === "function" && Symbol.iterator;
		var FAUX_ITERATOR_SYMBOL = "@@iterator";
		/**
		* Returns the iterator method function contained on the iterable object.
		*
		* Be sure to invoke the function with the iterable as context:
		*
		*     var iteratorFn = getIteratorFn(myIterable);
		*     if (iteratorFn) {
		*       var iterator = iteratorFn.call(myIterable);
		*       ...
		*     }
		*
		* @param {?object} maybeIterable
		* @return {?function}
		*/
		function getIteratorFn(maybeIterable) {
			var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
			if (typeof iteratorFn === "function") return iteratorFn;
		}
		/**
		* Collection of methods that allow declaration and validation of props that are
		* supplied to React components. Example usage:
		*
		*   var Props = require('ReactPropTypes');
		*   var MyArticle = React.createClass({
		*     propTypes: {
		*       // An optional string prop named "description".
		*       description: Props.string,
		*
		*       // A required enum prop named "category".
		*       category: Props.oneOf(['News','Photos']).isRequired,
		*
		*       // A prop named "dialog" that requires an instance of Dialog.
		*       dialog: Props.instanceOf(Dialog).isRequired
		*     },
		*     render: function() { ... }
		*   });
		*
		* A more formal specification of how these methods are used:
		*
		*   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
		*   decl := ReactPropTypes.{type}(.isRequired)?
		*
		* Each and every declaration produces a function with the same signature. This
		* allows the creation of custom validation functions. For example:
		*
		*  var MyLink = React.createClass({
		*    propTypes: {
		*      // An optional string or URI prop named "href".
		*      href: function(props, propName, componentName) {
		*        var propValue = props[propName];
		*        if (propValue != null && typeof propValue !== 'string' &&
		*            !(propValue instanceof URI)) {
		*          return new Error(
		*            'Expected a string or an URI for ' + propName + ' in ' +
		*            componentName
		*          );
		*        }
		*      }
		*    },
		*    render: function() {...}
		*  });
		*
		* @internal
		*/
		var ANONYMOUS = "<<anonymous>>";
		var ReactPropTypes = {
			array: createPrimitiveTypeChecker("array"),
			bigint: createPrimitiveTypeChecker("bigint"),
			bool: createPrimitiveTypeChecker("boolean"),
			func: createPrimitiveTypeChecker("function"),
			number: createPrimitiveTypeChecker("number"),
			object: createPrimitiveTypeChecker("object"),
			string: createPrimitiveTypeChecker("string"),
			symbol: createPrimitiveTypeChecker("symbol"),
			any: createAnyTypeChecker(),
			arrayOf: createArrayOfTypeChecker,
			element: createElementTypeChecker(),
			elementType: createElementTypeTypeChecker(),
			instanceOf: createInstanceTypeChecker,
			node: createNodeChecker(),
			objectOf: createObjectOfTypeChecker,
			oneOf: createEnumTypeChecker,
			oneOfType: createUnionTypeChecker,
			shape: createShapeTypeChecker,
			exact: createStrictShapeTypeChecker
		};
		/**
		* inlined Object.is polyfill to avoid requiring consumers ship their own
		* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
		*/
		function is(x, y) {
			if (x === y) return x !== 0 || 1 / x === 1 / y;
			else return x !== x && y !== y;
		}
		/**
		* We use an Error-like object for backward compatibility as people may call
		* PropTypes directly and inspect their output. However, we don't use real
		* Errors anymore. We don't inspect their stack anyway, and creating them
		* is prohibitively expensive if they are created too often, such as what
		* happens in oneOfType() for any type before the one that matched.
		*/
		function PropTypeError(message, data) {
			this.message = message;
			this.data = data && typeof data === "object" ? data : {};
			this.stack = "";
		}
		PropTypeError.prototype = Error.prototype;
		function createChainableTypeChecker(validate) {
			if (process.env.NODE_ENV !== "production") {
				var manualPropTypeCallCache = {};
				var manualPropTypeWarningCount = 0;
			}
			function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
				componentName = componentName || ANONYMOUS;
				propFullName = propFullName || propName;
				if (secret !== ReactPropTypesSecret) {
					if (throwOnDirectAccess) {
						var err = /* @__PURE__ */ new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");
						err.name = "Invariant Violation";
						throw err;
					} else if (process.env.NODE_ENV !== "production" && typeof console !== "undefined") {
						var cacheKey = componentName + ":" + propName;
						if (!manualPropTypeCallCache[cacheKey] && manualPropTypeWarningCount < 3) {
							printWarning("You are manually calling a React.PropTypes validation function for the `" + propFullName + "` prop on `" + componentName + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details.");
							manualPropTypeCallCache[cacheKey] = true;
							manualPropTypeWarningCount++;
						}
					}
				}
				if (props[propName] == null) {
					if (isRequired) {
						if (props[propName] === null) return new PropTypeError("The " + location + " `" + propFullName + "` is marked as required " + ("in `" + componentName + "`, but its value is `null`."));
						return new PropTypeError("The " + location + " `" + propFullName + "` is marked as required in " + ("`" + componentName + "`, but its value is `undefined`."));
					}
					return null;
				} else return validate(props, propName, componentName, location, propFullName);
			}
			var chainedCheckType = checkType.bind(null, false);
			chainedCheckType.isRequired = checkType.bind(null, true);
			return chainedCheckType;
		}
		function createPrimitiveTypeChecker(expectedType) {
			function validate(props, propName, componentName, location, propFullName, secret) {
				var propValue = props[propName];
				if (getPropType(propValue) !== expectedType) {
					var preciseType = getPreciseType(propValue);
					return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + preciseType + "` supplied to `" + componentName + "`, expected ") + ("`" + expectedType + "`."), { expectedType });
				}
				return null;
			}
			return createChainableTypeChecker(validate);
		}
		function createAnyTypeChecker() {
			return createChainableTypeChecker(emptyFunctionThatReturnsNull);
		}
		function createArrayOfTypeChecker(typeChecker) {
			function validate(props, propName, componentName, location, propFullName) {
				if (typeof typeChecker !== "function") return new PropTypeError("Property `" + propFullName + "` of component `" + componentName + "` has invalid PropType notation inside arrayOf.");
				var propValue = props[propName];
				if (!Array.isArray(propValue)) {
					var propType = getPropType(propValue);
					return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected an array."));
				}
				for (var i = 0; i < propValue.length; i++) {
					var error = typeChecker(propValue, i, componentName, location, propFullName + "[" + i + "]", ReactPropTypesSecret);
					if (error instanceof Error) return error;
				}
				return null;
			}
			return createChainableTypeChecker(validate);
		}
		function createElementTypeChecker() {
			function validate(props, propName, componentName, location, propFullName) {
				var propValue = props[propName];
				if (!isValidElement(propValue)) {
					var propType = getPropType(propValue);
					return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected a single ReactElement."));
				}
				return null;
			}
			return createChainableTypeChecker(validate);
		}
		function createElementTypeTypeChecker() {
			function validate(props, propName, componentName, location, propFullName) {
				var propValue = props[propName];
				if (!ReactIs.isValidElementType(propValue)) {
					var propType = getPropType(propValue);
					return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected a single ReactElement type."));
				}
				return null;
			}
			return createChainableTypeChecker(validate);
		}
		function createInstanceTypeChecker(expectedClass) {
			function validate(props, propName, componentName, location, propFullName) {
				if (!(props[propName] instanceof expectedClass)) {
					var expectedClassName = expectedClass.name || ANONYMOUS;
					var actualClassName = getClassName(props[propName]);
					return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + actualClassName + "` supplied to `" + componentName + "`, expected ") + ("instance of `" + expectedClassName + "`."));
				}
				return null;
			}
			return createChainableTypeChecker(validate);
		}
		function createEnumTypeChecker(expectedValues) {
			if (!Array.isArray(expectedValues)) {
				if (process.env.NODE_ENV !== "production") {
					if (arguments.length > 1) printWarning("Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).");
					else printWarning("Invalid argument supplied to oneOf, expected an array.");
				}
				return emptyFunctionThatReturnsNull;
			}
			function validate(props, propName, componentName, location, propFullName) {
				var propValue = props[propName];
				for (var i = 0; i < expectedValues.length; i++) if (is(propValue, expectedValues[i])) return null;
				var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
					if (getPreciseType(value) === "symbol") return String(value);
					return value;
				});
				return new PropTypeError("Invalid " + location + " `" + propFullName + "` of value `" + String(propValue) + "` " + ("supplied to `" + componentName + "`, expected one of " + valuesString + "."));
			}
			return createChainableTypeChecker(validate);
		}
		function createObjectOfTypeChecker(typeChecker) {
			function validate(props, propName, componentName, location, propFullName) {
				if (typeof typeChecker !== "function") return new PropTypeError("Property `" + propFullName + "` of component `" + componentName + "` has invalid PropType notation inside objectOf.");
				var propValue = props[propName];
				var propType = getPropType(propValue);
				if (propType !== "object") return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected an object."));
				for (var key in propValue) if (has(propValue, key)) {
					var error = typeChecker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret);
					if (error instanceof Error) return error;
				}
				return null;
			}
			return createChainableTypeChecker(validate);
		}
		function createUnionTypeChecker(arrayOfTypeCheckers) {
			if (!Array.isArray(arrayOfTypeCheckers)) {
				process.env.NODE_ENV !== "production" && printWarning("Invalid argument supplied to oneOfType, expected an instance of array.");
				return emptyFunctionThatReturnsNull;
			}
			for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
				var checker = arrayOfTypeCheckers[i];
				if (typeof checker !== "function") {
					printWarning("Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + getPostfixForTypeWarning(checker) + " at index " + i + ".");
					return emptyFunctionThatReturnsNull;
				}
			}
			function validate(props, propName, componentName, location, propFullName) {
				var expectedTypes = [];
				for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
					var checker = arrayOfTypeCheckers[i];
					var checkerResult = checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret);
					if (checkerResult == null) return null;
					if (checkerResult.data && has(checkerResult.data, "expectedType")) expectedTypes.push(checkerResult.data.expectedType);
				}
				var expectedTypesMessage = expectedTypes.length > 0 ? ", expected one of type [" + expectedTypes.join(", ") + "]" : "";
				return new PropTypeError("Invalid " + location + " `" + propFullName + "` supplied to " + ("`" + componentName + "`" + expectedTypesMessage + "."));
			}
			return createChainableTypeChecker(validate);
		}
		function createNodeChecker() {
			function validate(props, propName, componentName, location, propFullName) {
				if (!isNode(props[propName])) return new PropTypeError("Invalid " + location + " `" + propFullName + "` supplied to " + ("`" + componentName + "`, expected a ReactNode."));
				return null;
			}
			return createChainableTypeChecker(validate);
		}
		function invalidValidatorError(componentName, location, propFullName, key, type) {
			return new PropTypeError((componentName || "React class") + ": " + location + " type `" + propFullName + "." + key + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + type + "`.");
		}
		function createShapeTypeChecker(shapeTypes) {
			function validate(props, propName, componentName, location, propFullName) {
				var propValue = props[propName];
				var propType = getPropType(propValue);
				if (propType !== "object") return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type `" + propType + "` " + ("supplied to `" + componentName + "`, expected `object`."));
				for (var key in shapeTypes) {
					var checker = shapeTypes[key];
					if (typeof checker !== "function") return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
					var error = checker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret);
					if (error) return error;
				}
				return null;
			}
			return createChainableTypeChecker(validate);
		}
		function createStrictShapeTypeChecker(shapeTypes) {
			function validate(props, propName, componentName, location, propFullName) {
				var propValue = props[propName];
				var propType = getPropType(propValue);
				if (propType !== "object") return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type `" + propType + "` " + ("supplied to `" + componentName + "`, expected `object`."));
				for (var key in assign({}, props[propName], shapeTypes)) {
					var checker = shapeTypes[key];
					if (has(shapeTypes, key) && typeof checker !== "function") return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
					if (!checker) return new PropTypeError("Invalid " + location + " `" + propFullName + "` key `" + key + "` supplied to `" + componentName + "`.\nBad object: " + JSON.stringify(props[propName], null, "  ") + "\nValid keys: " + JSON.stringify(Object.keys(shapeTypes), null, "  "));
					var error = checker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret);
					if (error) return error;
				}
				return null;
			}
			return createChainableTypeChecker(validate);
		}
		function isNode(propValue) {
			switch (typeof propValue) {
				case "number":
				case "string":
				case "undefined": return true;
				case "boolean": return !propValue;
				case "object":
					if (Array.isArray(propValue)) return propValue.every(isNode);
					if (propValue === null || isValidElement(propValue)) return true;
					var iteratorFn = getIteratorFn(propValue);
					if (iteratorFn) {
						var iterator = iteratorFn.call(propValue);
						var step;
						if (iteratorFn !== propValue.entries) {
							while (!(step = iterator.next()).done) if (!isNode(step.value)) return false;
						} else while (!(step = iterator.next()).done) {
							var entry = step.value;
							if (entry) {
								if (!isNode(entry[1])) return false;
							}
						}
					} else return false;
					return true;
				default: return false;
			}
		}
		function isSymbol(propType, propValue) {
			if (propType === "symbol") return true;
			if (!propValue) return false;
			if (propValue["@@toStringTag"] === "Symbol") return true;
			if (typeof Symbol === "function" && propValue instanceof Symbol) return true;
			return false;
		}
		function getPropType(propValue) {
			var propType = typeof propValue;
			if (Array.isArray(propValue)) return "array";
			if (propValue instanceof RegExp) return "object";
			if (isSymbol(propType, propValue)) return "symbol";
			return propType;
		}
		function getPreciseType(propValue) {
			if (typeof propValue === "undefined" || propValue === null) return "" + propValue;
			var propType = getPropType(propValue);
			if (propType === "object") {
				if (propValue instanceof Date) return "date";
				else if (propValue instanceof RegExp) return "regexp";
			}
			return propType;
		}
		function getPostfixForTypeWarning(value) {
			var type = getPreciseType(value);
			switch (type) {
				case "array":
				case "object": return "an " + type;
				case "boolean":
				case "date":
				case "regexp": return "a " + type;
				default: return type;
			}
		}
		function getClassName(propValue) {
			if (!propValue.constructor || !propValue.constructor.name) return ANONYMOUS;
			return propValue.constructor.name;
		}
		ReactPropTypes.checkPropTypes = checkPropTypes;
		ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
		ReactPropTypes.PropTypes = ReactPropTypes;
		return ReactPropTypes;
	};
}));
//#endregion
//#region node_modules/prop-types/factoryWithThrowingShims.js
/**
* Copyright (c) 2013-present, Facebook, Inc.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var require_factoryWithThrowingShims = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var ReactPropTypesSecret = require_ReactPropTypesSecret();
	function emptyFunction() {}
	function emptyFunctionWithReset() {}
	emptyFunctionWithReset.resetWarningCache = emptyFunction;
	module.exports = function() {
		function shim(props, propName, componentName, location, propFullName, secret) {
			if (secret === ReactPropTypesSecret) return;
			var err = /* @__PURE__ */ new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
			err.name = "Invariant Violation";
			throw err;
		}
		shim.isRequired = shim;
		function getShim() {
			return shim;
		}
		var ReactPropTypes = {
			array: shim,
			bigint: shim,
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
			resetWarningCache: emptyFunction
		};
		ReactPropTypes.PropTypes = ReactPropTypes;
		return ReactPropTypes;
	};
}));
//#endregion
//#region node_modules/prop-types/index.js
var require_prop_types = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	/**
	* Copyright (c) 2013-present, Facebook, Inc.
	*
	* This source code is licensed under the MIT license found in the
	* LICENSE file in the root directory of this source tree.
	*/
	if (process.env.NODE_ENV !== "production") {
		var ReactIs = require_react_is();
		module.exports = require_factoryWithTypeCheckers()(ReactIs.isElement, true);
	} else module.exports = require_factoryWithThrowingShims()();
}));
//#endregion
//#region node_modules/proj4/lib/global.js
function global_default(defs) {
	defs("EPSG:4326", "+title=WGS 84 (long/lat) +proj=longlat +ellps=WGS84 +datum=WGS84 +units=degrees");
	defs("EPSG:4269", "+title=NAD83 (long/lat) +proj=longlat +a=6378137.0 +b=6356752.31414036 +ellps=GRS80 +datum=NAD83 +units=degrees");
	defs("EPSG:3857", "+title=WGS 84 / Pseudo-Mercator +proj=merc +a=6378137 +b=6378137 +lat_ts=0.0 +lon_0=0.0 +x_0=0.0 +y_0=0 +k=1.0 +units=m +nadgrids=@null +no_defs");
	defs.WGS84 = defs["EPSG:4326"];
	defs["EPSG:3785"] = defs["EPSG:3857"];
	defs.GOOGLE = defs["EPSG:3857"];
	defs["EPSG:900913"] = defs["EPSG:3857"];
	defs["EPSG:102113"] = defs["EPSG:3857"];
}
var init_global = __esmMin((() => {}));
//#endregion
//#region node_modules/proj4/lib/constants/values.js
var SRS_WGS84_SEMIMAJOR, SRS_WGS84_SEMIMINOR, SRS_WGS84_ESQUARED, SEC_TO_RAD, HALF_PI, SIXTH, RA4, RA6, EPSLN, D2R$1, R2D, FORTPI, TWO_PI, SPI;
var init_values = __esmMin((() => {
	SRS_WGS84_SEMIMAJOR = 6378137;
	SRS_WGS84_SEMIMINOR = 6356752.314;
	SRS_WGS84_ESQUARED = .0066943799901413165;
	SEC_TO_RAD = 484813681109536e-20;
	HALF_PI = Math.PI / 2;
	SIXTH = .16666666666666666;
	RA4 = .04722222222222222;
	RA6 = .022156084656084655;
	EPSLN = 1e-10;
	D2R$1 = .017453292519943295;
	R2D = 57.29577951308232;
	FORTPI = Math.PI / 4;
	TWO_PI = Math.PI * 2;
	SPI = 3.14159265359;
}));
//#endregion
//#region node_modules/proj4/lib/constants/PrimeMeridian.js
var exports$3;
var init_PrimeMeridian = __esmMin((() => {
	exports$3 = {};
	exports$3.greenwich = 0;
	exports$3.lisbon = -9.131906111111;
	exports$3.paris = 2.337229166667;
	exports$3.bogota = -74.080916666667;
	exports$3.madrid = -3.687938888889;
	exports$3.rome = 12.452333333333;
	exports$3.bern = 7.439583333333;
	exports$3.jakarta = 106.807719444444;
	exports$3.ferro = -17.666666666667;
	exports$3.brussels = 4.367975;
	exports$3.stockholm = 18.058277777778;
	exports$3.athens = 23.7163375;
	exports$3.oslo = 10.722916666667;
}));
//#endregion
//#region node_modules/proj4/lib/constants/units.js
var units_default;
var init_units = __esmMin((() => {
	units_default = {
		ft: { to_meter: .3048 },
		"us-ft": { to_meter: 1200 / 3937 }
	};
}));
//#endregion
//#region node_modules/proj4/lib/match.js
function match(obj, key) {
	if (obj[key]) return obj[key];
	var keys = Object.keys(obj);
	var lkey = key.toLowerCase().replace(ignoredChar, "");
	var i = -1;
	var testkey, processedKey;
	while (++i < keys.length) {
		testkey = keys[i];
		processedKey = testkey.toLowerCase().replace(ignoredChar, "");
		if (processedKey === lkey) return obj[testkey];
	}
}
var ignoredChar;
var init_match = __esmMin((() => {
	ignoredChar = /[\s_\-\/\(\)]/g;
}));
//#endregion
//#region node_modules/proj4/lib/projString.js
function projString_default(defData) {
	var self = {};
	var paramObj = defData.split("+").map(function(v) {
		return v.trim();
	}).filter(function(a) {
		return a;
	}).reduce(function(p, a) {
		var split = a.split("=");
		split.push(true);
		p[split[0].toLowerCase()] = split[1];
		return p;
	}, {});
	var paramName, paramVal, paramOutname;
	var params = {
		proj: "projName",
		datum: "datumCode",
		rf: function(v) {
			self.rf = parseFloat(v);
		},
		lat_0: function(v) {
			self.lat0 = v * D2R$1;
		},
		lat_1: function(v) {
			self.lat1 = v * D2R$1;
		},
		lat_2: function(v) {
			self.lat2 = v * D2R$1;
		},
		lat_ts: function(v) {
			self.lat_ts = v * D2R$1;
		},
		lon_0: function(v) {
			self.long0 = v * D2R$1;
		},
		lon_1: function(v) {
			self.long1 = v * D2R$1;
		},
		lon_2: function(v) {
			self.long2 = v * D2R$1;
		},
		alpha: function(v) {
			self.alpha = parseFloat(v) * D2R$1;
		},
		gamma: function(v) {
			self.rectified_grid_angle = parseFloat(v);
		},
		lonc: function(v) {
			self.longc = v * D2R$1;
		},
		x_0: function(v) {
			self.x0 = parseFloat(v);
		},
		y_0: function(v) {
			self.y0 = parseFloat(v);
		},
		k_0: function(v) {
			self.k0 = parseFloat(v);
		},
		k: function(v) {
			self.k0 = parseFloat(v);
		},
		a: function(v) {
			self.a = parseFloat(v);
		},
		b: function(v) {
			self.b = parseFloat(v);
		},
		r_a: function() {
			self.R_A = true;
		},
		zone: function(v) {
			self.zone = parseInt(v, 10);
		},
		south: function() {
			self.utmSouth = true;
		},
		towgs84: function(v) {
			self.datum_params = v.split(",").map(function(a) {
				return parseFloat(a);
			});
		},
		to_meter: function(v) {
			self.to_meter = parseFloat(v);
		},
		units: function(v) {
			self.units = v;
			var unit = match(units_default, v);
			if (unit) self.to_meter = unit.to_meter;
		},
		from_greenwich: function(v) {
			self.from_greenwich = v * D2R$1;
		},
		pm: function(v) {
			var pm = match(exports$3, v);
			self.from_greenwich = (pm ? pm : parseFloat(v)) * D2R$1;
		},
		nadgrids: function(v) {
			if (v === "@null") self.datumCode = "none";
			else self.nadgrids = v;
		},
		axis: function(v) {
			var legalAxis = "ewnsud";
			if (v.length === 3 && legalAxis.indexOf(v.substr(0, 1)) !== -1 && legalAxis.indexOf(v.substr(1, 1)) !== -1 && legalAxis.indexOf(v.substr(2, 1)) !== -1) self.axis = v;
		},
		approx: function() {
			self.approx = true;
		}
	};
	for (paramName in paramObj) {
		paramVal = paramObj[paramName];
		if (paramName in params) {
			paramOutname = params[paramName];
			if (typeof paramOutname === "function") paramOutname(paramVal);
			else self[paramOutname] = paramVal;
		} else self[paramName] = paramVal;
	}
	if (typeof self.datumCode === "string" && self.datumCode !== "WGS84") self.datumCode = self.datumCode.toLowerCase();
	return self;
}
var init_projString = __esmMin((() => {
	init_values();
	init_PrimeMeridian();
	init_units();
	init_match();
}));
//#endregion
//#region node_modules/wkt-parser/PROJJSONBuilder.js
var PROJJSONBuilderBase;
var init_PROJJSONBuilder = __esmMin((() => {
	PROJJSONBuilderBase = class {
		static getId(node) {
			const idNode = node.find((child) => Array.isArray(child) && child[0] === "ID");
			if (idNode && idNode.length >= 3) return {
				authority: idNode[1],
				code: parseInt(idNode[2], 10)
			};
			return null;
		}
		static convertUnit(node, type = "unit") {
			if (!node || node.length < 3) return {
				type,
				name: "unknown",
				conversion_factor: null
			};
			const name = node[1];
			const conversionFactor = parseFloat(node[2]) || null;
			const idNode = node.find((child) => Array.isArray(child) && child[0] === "ID");
			return {
				type,
				name,
				conversion_factor: conversionFactor,
				id: idNode ? {
					authority: idNode[1],
					code: parseInt(idNode[2], 10)
				} : null
			};
		}
		static convertAxis(node) {
			const name = node[1] || "Unknown";
			let direction;
			const abbreviationMatch = name.match(/^\((.)\)$/);
			if (abbreviationMatch) {
				const abbreviation = abbreviationMatch[1].toUpperCase();
				if (abbreviation === "E") direction = "east";
				else if (abbreviation === "N") direction = "north";
				else if (abbreviation === "U") direction = "up";
				else if (node[2]) direction = node[2];
				else throw new Error(`Unknown axis abbreviation: ${abbreviation}`);
			} else direction = node[2] || "unknown";
			const orderNode = node.find((child) => Array.isArray(child) && child[0] === "ORDER");
			const order = orderNode ? parseInt(orderNode[1], 10) : null;
			const unitNode = node.find((child) => Array.isArray(child) && (child[0] === "LENGTHUNIT" || child[0] === "ANGLEUNIT" || child[0] === "SCALEUNIT"));
			const unit = this.convertUnit(unitNode);
			return {
				name,
				direction,
				unit,
				order
			};
		}
		static extractAxes(node) {
			return node.filter((child) => Array.isArray(child) && child[0] === "AXIS").map((axis) => this.convertAxis(axis)).sort((a, b) => (a.order || 0) - (b.order || 0));
		}
		static convert(node, result = {}) {
			switch (node[0]) {
				case "PROJCRS":
					result.type = "ProjectedCRS";
					result.name = node[1];
					result.base_crs = node.find((child) => Array.isArray(child) && child[0] === "BASEGEOGCRS") ? this.convert(node.find((child) => Array.isArray(child) && child[0] === "BASEGEOGCRS")) : null;
					result.conversion = node.find((child) => Array.isArray(child) && child[0] === "CONVERSION") ? this.convert(node.find((child) => Array.isArray(child) && child[0] === "CONVERSION")) : null;
					const csNode = node.find((child) => Array.isArray(child) && child[0] === "CS");
					if (csNode) result.coordinate_system = {
						subtype: csNode[1],
						axis: this.extractAxes(node)
					};
					const lengthUnitNode = node.find((child) => Array.isArray(child) && child[0] === "LENGTHUNIT");
					if (lengthUnitNode) {
						const unit = this.convertUnit(lengthUnitNode);
						result.coordinate_system.unit = unit;
					}
					result.id = this.getId(node);
					break;
				case "BASEGEOGCRS":
				case "GEOGCRS":
				case "GEODCRS":
					result.type = node[0] === "GEODCRS" ? "GeodeticCRS" : "GeographicCRS";
					result.name = node[1];
					const datumOrEnsembleNode = node.find((child) => Array.isArray(child) && (child[0] === "DATUM" || child[0] === "ENSEMBLE"));
					if (datumOrEnsembleNode) {
						const datumOrEnsemble = this.convert(datumOrEnsembleNode);
						if (datumOrEnsembleNode[0] === "ENSEMBLE") result.datum_ensemble = datumOrEnsemble;
						else result.datum = datumOrEnsemble;
						const primem = node.find((child) => Array.isArray(child) && child[0] === "PRIMEM");
						if (primem && primem[1] !== "Greenwich") datumOrEnsemble.prime_meridian = {
							name: primem[1],
							longitude: parseFloat(primem[2])
						};
					}
					const geogCsNode = node.find((child) => Array.isArray(child) && child[0] === "CS");
					result.coordinate_system = {
						subtype: geogCsNode ? geogCsNode[1] : "ellipsoidal",
						axis: this.extractAxes(node)
					};
					result.id = this.getId(node);
					break;
				case "DATUM":
					result.type = "GeodeticReferenceFrame";
					result.name = node[1];
					result.ellipsoid = node.find((child) => Array.isArray(child) && child[0] === "ELLIPSOID") ? this.convert(node.find((child) => Array.isArray(child) && child[0] === "ELLIPSOID")) : null;
					break;
				case "ENSEMBLE":
					result.type = "DatumEnsemble";
					result.name = node[1];
					result.members = node.filter((child) => Array.isArray(child) && child[0] === "MEMBER").map((member) => ({
						type: "DatumEnsembleMember",
						name: member[1],
						id: this.getId(member)
					}));
					const accuracyNode = node.find((child) => Array.isArray(child) && child[0] === "ENSEMBLEACCURACY");
					if (accuracyNode) result.accuracy = parseFloat(accuracyNode[1]);
					const ellipsoidNode = node.find((child) => Array.isArray(child) && child[0] === "ELLIPSOID");
					if (ellipsoidNode) result.ellipsoid = this.convert(ellipsoidNode);
					result.id = this.getId(node);
					break;
				case "ELLIPSOID":
					result.type = "Ellipsoid";
					result.name = node[1];
					result.semi_major_axis = parseFloat(node[2]);
					result.inverse_flattening = parseFloat(node[3]);
					node.find((child) => Array.isArray(child) && child[0] === "LENGTHUNIT") && this.convert(node.find((child) => Array.isArray(child) && child[0] === "LENGTHUNIT"), result);
					break;
				case "CONVERSION":
					result.type = "Conversion";
					result.name = node[1];
					result.method = node.find((child) => Array.isArray(child) && child[0] === "METHOD") ? this.convert(node.find((child) => Array.isArray(child) && child[0] === "METHOD")) : null;
					result.parameters = node.filter((child) => Array.isArray(child) && child[0] === "PARAMETER").map((param) => this.convert(param));
					break;
				case "METHOD":
					result.type = "Method";
					result.name = node[1];
					result.id = this.getId(node);
					break;
				case "PARAMETER":
					result.type = "Parameter";
					result.name = node[1];
					result.value = parseFloat(node[2]);
					result.unit = this.convertUnit(node.find((child) => Array.isArray(child) && (child[0] === "LENGTHUNIT" || child[0] === "ANGLEUNIT" || child[0] === "SCALEUNIT")));
					result.id = this.getId(node);
					break;
				case "BOUNDCRS":
					result.type = "BoundCRS";
					const sourceCrsNode = node.find((child) => Array.isArray(child) && child[0] === "SOURCECRS");
					if (sourceCrsNode) {
						const sourceCrsContent = sourceCrsNode.find((child) => Array.isArray(child));
						result.source_crs = sourceCrsContent ? this.convert(sourceCrsContent) : null;
					}
					const targetCrsNode = node.find((child) => Array.isArray(child) && child[0] === "TARGETCRS");
					if (targetCrsNode) {
						const targetCrsContent = targetCrsNode.find((child) => Array.isArray(child));
						result.target_crs = targetCrsContent ? this.convert(targetCrsContent) : null;
					}
					const transformationNode = node.find((child) => Array.isArray(child) && child[0] === "ABRIDGEDTRANSFORMATION");
					if (transformationNode) result.transformation = this.convert(transformationNode);
					else result.transformation = null;
					break;
				case "ABRIDGEDTRANSFORMATION":
					result.type = "Transformation";
					result.name = node[1];
					result.method = node.find((child) => Array.isArray(child) && child[0] === "METHOD") ? this.convert(node.find((child) => Array.isArray(child) && child[0] === "METHOD")) : null;
					result.parameters = node.filter((child) => Array.isArray(child) && (child[0] === "PARAMETER" || child[0] === "PARAMETERFILE")).map((param) => {
						if (param[0] === "PARAMETER") return this.convert(param);
						else if (param[0] === "PARAMETERFILE") return {
							name: param[1],
							value: param[2],
							id: {
								"authority": "EPSG",
								"code": 8656
							}
						};
					});
					if (result.parameters.length === 7) {
						const scaleDifference = result.parameters[6];
						if (scaleDifference.name === "Scale difference") scaleDifference.value = Math.round((scaleDifference.value - 1) * 0xe8d4a51000) / 1e6;
					}
					result.id = this.getId(node);
					break;
				case "AXIS":
					if (!result.coordinate_system) result.coordinate_system = {
						type: "unspecified",
						axis: []
					};
					result.coordinate_system.axis.push(this.convertAxis(node));
					break;
				case "LENGTHUNIT":
					const unit = this.convertUnit(node, "LinearUnit");
					if (result.coordinate_system && result.coordinate_system.axis) result.coordinate_system.axis.forEach((axis) => {
						if (!axis.unit) axis.unit = unit;
					});
					if (unit.conversion_factor && unit.conversion_factor !== 1) {
						if (result.semi_major_axis) result.semi_major_axis = {
							value: result.semi_major_axis,
							unit
						};
					}
					break;
				default: result.keyword = node[0];
			}
			return result;
		}
	};
}));
//#endregion
//#region node_modules/wkt-parser/buildPROJJSON.js
/**
* Builds a PROJJSON object from a WKT array structure.
* @param {Array} root The root WKT array node.
* @returns {Object} The PROJJSON object.
*/
function buildPROJJSON(root) {
	return PROJJSONBuilderBase.convert(root);
}
var init_buildPROJJSON = __esmMin((() => {
	init_PROJJSONBuilder();
}));
//#endregion
//#region node_modules/wkt-parser/detectWKTVersion.js
/**
* Detects whether the WKT string is WKT1 or WKT2.
* @param {string} wkt The WKT string.
* @returns {string} The detected version ("WKT1" or "WKT2").
*/
function detectWKTVersion(wkt) {
	const normalizedWKT = wkt.toUpperCase();
	if (normalizedWKT.includes("PROJCRS") || normalizedWKT.includes("GEOGCRS") || normalizedWKT.includes("BOUNDCRS") || normalizedWKT.includes("VERTCRS") || normalizedWKT.includes("LENGTHUNIT") || normalizedWKT.includes("ANGLEUNIT") || normalizedWKT.includes("SCALEUNIT")) return "WKT2";
	if (normalizedWKT.includes("PROJCS") || normalizedWKT.includes("GEOGCS") || normalizedWKT.includes("LOCAL_CS") || normalizedWKT.includes("VERT_CS") || normalizedWKT.includes("UNIT")) return "WKT1";
	return "WKT1";
}
var init_detectWKTVersion = __esmMin((() => {}));
//#endregion
//#region node_modules/wkt-parser/parser.js
function Parser(text) {
	if (typeof text !== "string") throw new Error("not a string");
	this.text = text.trim();
	this.level = 0;
	this.place = 0;
	this.root = null;
	this.stack = [];
	this.currentObject = null;
	this.state = NEUTRAL;
}
function parseString(txt) {
	return new Parser(txt).output();
}
var parser_default, NEUTRAL, KEYWORD, NUMBER, QUOTED, AFTERQUOTE, ENDED, whitespace, latin, keyword, endThings, digets;
var init_parser = __esmMin((() => {
	parser_default = parseString;
	NEUTRAL = 1;
	KEYWORD = 2;
	NUMBER = 3;
	QUOTED = 4;
	AFTERQUOTE = 5;
	ENDED = -1;
	whitespace = /\s/;
	latin = /[A-Za-z]/;
	keyword = /[A-Za-z84_]/;
	endThings = /[,\]]/;
	digets = /[\d\.E\-\+]/;
	Parser.prototype.readCharicter = function() {
		var char = this.text[this.place++];
		if (this.state !== QUOTED) while (whitespace.test(char)) {
			if (this.place >= this.text.length) return;
			char = this.text[this.place++];
		}
		switch (this.state) {
			case NEUTRAL: return this.neutral(char);
			case KEYWORD: return this.keyword(char);
			case QUOTED: return this.quoted(char);
			case AFTERQUOTE: return this.afterquote(char);
			case NUMBER: return this.number(char);
			case ENDED: return;
		}
	};
	Parser.prototype.afterquote = function(char) {
		if (char === "\"") {
			this.word += "\"";
			this.state = QUOTED;
			return;
		}
		if (endThings.test(char)) {
			this.word = this.word.trim();
			this.afterItem(char);
			return;
		}
		throw new Error("havn't handled \"" + char + "\" in afterquote yet, index " + this.place);
	};
	Parser.prototype.afterItem = function(char) {
		if (char === ",") {
			if (this.word !== null) this.currentObject.push(this.word);
			this.word = null;
			this.state = NEUTRAL;
			return;
		}
		if (char === "]") {
			this.level--;
			if (this.word !== null) {
				this.currentObject.push(this.word);
				this.word = null;
			}
			this.state = NEUTRAL;
			this.currentObject = this.stack.pop();
			if (!this.currentObject) this.state = ENDED;
			return;
		}
	};
	Parser.prototype.number = function(char) {
		if (digets.test(char)) {
			this.word += char;
			return;
		}
		if (endThings.test(char)) {
			this.word = parseFloat(this.word);
			this.afterItem(char);
			return;
		}
		throw new Error("havn't handled \"" + char + "\" in number yet, index " + this.place);
	};
	Parser.prototype.quoted = function(char) {
		if (char === "\"") {
			this.state = AFTERQUOTE;
			return;
		}
		this.word += char;
	};
	Parser.prototype.keyword = function(char) {
		if (keyword.test(char)) {
			this.word += char;
			return;
		}
		if (char === "[") {
			var newObjects = [];
			newObjects.push(this.word);
			this.level++;
			if (this.root === null) this.root = newObjects;
			else this.currentObject.push(newObjects);
			this.stack.push(this.currentObject);
			this.currentObject = newObjects;
			this.state = NEUTRAL;
			return;
		}
		if (endThings.test(char)) {
			this.afterItem(char);
			return;
		}
		throw new Error("havn't handled \"" + char + "\" in keyword yet, index " + this.place);
	};
	Parser.prototype.neutral = function(char) {
		if (latin.test(char)) {
			this.word = char;
			this.state = KEYWORD;
			return;
		}
		if (char === "\"") {
			this.word = "";
			this.state = QUOTED;
			return;
		}
		if (digets.test(char)) {
			this.word = char;
			this.state = NUMBER;
			return;
		}
		if (endThings.test(char)) {
			this.afterItem(char);
			return;
		}
		throw new Error("havn't handled \"" + char + "\" in neutral yet, index " + this.place);
	};
	Parser.prototype.output = function() {
		while (this.place < this.text.length) this.readCharicter();
		if (this.state === ENDED) return this.root;
		throw new Error("unable to parse string \"" + this.text + "\". State is " + this.state);
	};
}));
//#endregion
//#region node_modules/wkt-parser/process.js
function mapit(obj, key, value) {
	if (Array.isArray(key)) {
		value.unshift(key);
		key = null;
	}
	var thing = key ? {} : obj;
	var out = value.reduce(function(newObj, item) {
		sExpr(item, newObj);
		return newObj;
	}, thing);
	if (key) obj[key] = out;
}
function sExpr(v, obj) {
	if (!Array.isArray(v)) {
		obj[v] = true;
		return;
	}
	var key = v.shift();
	if (key === "PARAMETER") key = v.shift();
	if (v.length === 1) {
		if (Array.isArray(v[0])) {
			obj[key] = {};
			sExpr(v[0], obj[key]);
			return;
		}
		obj[key] = v[0];
		return;
	}
	if (!v.length) {
		obj[key] = true;
		return;
	}
	if (key === "TOWGS84") {
		obj[key] = v;
		return;
	}
	if (key === "AXIS") {
		if (!(key in obj)) obj[key] = [];
		obj[key].push(v);
		return;
	}
	if (!Array.isArray(key)) obj[key] = {};
	var i;
	switch (key) {
		case "UNIT":
		case "PRIMEM":
		case "VERT_DATUM":
			obj[key] = {
				name: v[0].toLowerCase(),
				convert: v[1]
			};
			if (v.length === 3) sExpr(v[2], obj[key]);
			return;
		case "SPHEROID":
		case "ELLIPSOID":
			obj[key] = {
				name: v[0],
				a: v[1],
				rf: v[2]
			};
			if (v.length === 4) sExpr(v[3], obj[key]);
			return;
		case "EDATUM":
		case "ENGINEERINGDATUM":
		case "LOCAL_DATUM":
		case "DATUM":
		case "VERT_CS":
		case "VERTCRS":
		case "VERTICALCRS":
			v[0] = ["name", v[0]];
			mapit(obj, key, v);
			return;
		case "COMPD_CS":
		case "COMPOUNDCRS":
		case "FITTED_CS":
		case "PROJECTEDCRS":
		case "PROJCRS":
		case "GEOGCS":
		case "GEOCCS":
		case "PROJCS":
		case "LOCAL_CS":
		case "GEODCRS":
		case "GEODETICCRS":
		case "GEODETICDATUM":
		case "ENGCRS":
		case "ENGINEERINGCRS":
			v[0] = ["name", v[0]];
			mapit(obj, key, v);
			obj[key].type = key;
			return;
		default:
			i = -1;
			while (++i < v.length) if (!Array.isArray(v[i])) return sExpr(v, obj[key]);
			return mapit(obj, key, v);
	}
}
var init_process = __esmMin((() => {}));
//#endregion
//#region node_modules/wkt-parser/util.js
function d2r(input) {
	return input * D2R;
}
function applyProjectionDefaults(wkt) {
	const normalizedProjName = (wkt.projName || "").toLowerCase().replace(/_/g, " ");
	if (wkt.long0 === void 0 && wkt.longc !== void 0) wkt.long0 = wkt.longc;
	if (!wkt.lat_ts && wkt.lat1 && (normalizedProjName === "stereographic south pole" || normalizedProjName === "polar stereographic (variant b)")) {
		wkt.lat0 = d2r(wkt.lat1 > 0 ? 90 : -90);
		wkt.lat_ts = wkt.lat1;
		delete wkt.lat1;
	} else if (!wkt.lat_ts && wkt.lat0 && (normalizedProjName === "polar stereographic" || normalizedProjName === "polar stereographic (variant a)")) {
		wkt.lat_ts = wkt.lat0;
		wkt.lat0 = d2r(wkt.lat0 > 0 ? 90 : -90);
		delete wkt.lat1;
	}
}
var D2R;
var init_util = __esmMin((() => {
	D2R = .017453292519943295;
}));
//#endregion
//#region node_modules/wkt-parser/transformPROJJSON.js
function processUnit(unit) {
	let result = {
		units: null,
		to_meter: void 0
	};
	if (typeof unit === "string") {
		result.units = unit.toLowerCase();
		if (result.units === "metre") result.units = "meter";
		if (result.units === "meter") result.to_meter = 1;
	} else if (unit && unit.name) {
		result.units = unit.name.toLowerCase();
		if (result.units === "metre") result.units = "meter";
		result.to_meter = unit.conversion_factor;
	}
	return result;
}
function toValue(valueOrObject) {
	if (typeof valueOrObject === "object") return valueOrObject.value * valueOrObject.unit.conversion_factor;
	return valueOrObject;
}
function calculateEllipsoid(value, result) {
	if (value.ellipsoid.radius) {
		result.a = value.ellipsoid.radius;
		result.rf = 0;
	} else {
		result.a = toValue(value.ellipsoid.semi_major_axis);
		if (value.ellipsoid.inverse_flattening !== void 0) result.rf = value.ellipsoid.inverse_flattening;
		else if (value.ellipsoid.semi_major_axis !== void 0 && value.ellipsoid.semi_minor_axis !== void 0) result.rf = result.a / (result.a - toValue(value.ellipsoid.semi_minor_axis));
	}
}
function transformPROJJSON(projjson, result = {}) {
	if (!projjson || typeof projjson !== "object") return projjson;
	if (projjson.type === "BoundCRS") {
		transformPROJJSON(projjson.source_crs, result);
		if (projjson.transformation) {
			if (projjson.transformation.method && projjson.transformation.method.name === "NTv2") result.nadgrids = projjson.transformation.parameters[0].value;
			else result.datum_params = projjson.transformation.parameters.map((param) => param.value);
		}
		return result;
	}
	Object.keys(projjson).forEach((key) => {
		const value = projjson[key];
		if (value === null) return;
		switch (key) {
			case "name":
				if (result.srsCode) break;
				result.name = value;
				result.srsCode = value;
				break;
			case "type":
				if (value === "GeographicCRS") result.projName = "longlat";
				else if (value === "GeodeticCRS") {
					if (projjson.coordinate_system && projjson.coordinate_system.subtype === "Cartesian") result.projName = "geocent";
					else result.projName = "longlat";
				} else if (value === "ProjectedCRS" && projjson.conversion && projjson.conversion.method) result.projName = projjson.conversion.method.name;
				break;
			case "datum":
			case "datum_ensemble":
				if (value.ellipsoid) {
					result.ellps = value.ellipsoid.name;
					calculateEllipsoid(value, result);
				}
				if (value.prime_meridian) result.from_greenwich = value.prime_meridian.longitude * Math.PI / 180;
				break;
			case "ellipsoid":
				result.ellps = value.name;
				calculateEllipsoid(value, result);
				break;
			case "prime_meridian":
				result.long0 = (value.longitude || 0) * Math.PI / 180;
				break;
			case "coordinate_system":
				if (value.axis) {
					const directionMap = {
						"east": "e",
						"north": "n",
						"west": "w",
						"south": "s",
						"up": "u",
						"down": "d",
						"geocentricx": "e",
						"geocentricy": "n",
						"geocentricz": "u"
					};
					const mapped = value.axis.map((axis) => directionMap[axis.direction.toLowerCase()]);
					if (mapped.every(Boolean)) {
						result.axis = mapped.join("");
						if (result.axis.length === 2) result.axis += "u";
					}
					if (value.unit) {
						const { units, to_meter } = processUnit(value.unit);
						result.units = units;
						result.to_meter = to_meter;
					} else if (value.axis[0] && value.axis[0].unit) {
						const { units, to_meter } = processUnit(value.axis[0].unit);
						result.units = units;
						result.to_meter = to_meter;
					}
				}
				break;
			case "id":
				if (value.authority && value.code) result.title = value.authority + ":" + value.code;
				break;
			case "conversion":
				if (value.method && value.method.name) result.projName = value.method.name;
				if (value.parameters) value.parameters.forEach((param) => {
					const paramName = param.name.toLowerCase().replace(/\s+/g, "_");
					const paramValue = param.value;
					if (param.unit && param.unit.conversion_factor) result[paramName] = paramValue * param.unit.conversion_factor;
					else if (param.unit === "degree") result[paramName] = paramValue * Math.PI / 180;
					else result[paramName] = paramValue;
				});
				break;
			case "unit":
				if (value.name) {
					result.units = value.name.toLowerCase();
					if (result.units === "metre") result.units = "meter";
				}
				if (value.conversion_factor) result.to_meter = value.conversion_factor;
				break;
			case "base_crs":
				transformPROJJSON(value, result);
				result.datumCode = value.id ? value.id.authority + "_" + value.id.code : value.name;
		}
	});
	if (result.latitude_of_false_origin !== void 0) result.lat0 = result.latitude_of_false_origin;
	if (result.longitude_of_false_origin !== void 0) result.long0 = result.longitude_of_false_origin;
	if (result.latitude_of_standard_parallel !== void 0) {
		result.lat0 = result.latitude_of_standard_parallel;
		result.lat1 = result.latitude_of_standard_parallel;
	}
	if (result.latitude_of_1st_standard_parallel !== void 0) result.lat1 = result.latitude_of_1st_standard_parallel;
	if (result.latitude_of_2nd_standard_parallel !== void 0) result.lat2 = result.latitude_of_2nd_standard_parallel;
	if (result.latitude_of_projection_centre !== void 0) result.lat0 = result.latitude_of_projection_centre;
	if (result.longitude_of_projection_centre !== void 0) result.longc = result.longitude_of_projection_centre;
	if (result.easting_at_false_origin !== void 0) result.x0 = result.easting_at_false_origin;
	if (result.northing_at_false_origin !== void 0) result.y0 = result.northing_at_false_origin;
	if (result.latitude_of_natural_origin !== void 0) result.lat0 = result.latitude_of_natural_origin;
	if (result.longitude_of_natural_origin !== void 0) result.long0 = result.longitude_of_natural_origin;
	if (result.longitude_of_origin !== void 0) result.long0 = result.longitude_of_origin;
	if (result.false_easting !== void 0) result.x0 = result.false_easting;
	if (result.easting_at_projection_centre) result.x0 = result.easting_at_projection_centre;
	if (result.false_northing !== void 0) result.y0 = result.false_northing;
	if (result.northing_at_projection_centre) result.y0 = result.northing_at_projection_centre;
	if (result.standard_parallel_1 !== void 0) result.lat1 = result.standard_parallel_1;
	if (result.standard_parallel_2 !== void 0) result.lat2 = result.standard_parallel_2;
	if (result.scale_factor_at_natural_origin !== void 0) result.k0 = result.scale_factor_at_natural_origin;
	if (result.scale_factor_at_projection_centre !== void 0) result.k0 = result.scale_factor_at_projection_centre;
	if (result.scale_factor_on_pseudo_standard_parallel !== void 0) result.k0 = result.scale_factor_on_pseudo_standard_parallel;
	if (result.azimuth !== void 0) result.alpha = result.azimuth;
	if (result.azimuth_at_projection_centre !== void 0) result.alpha = result.azimuth_at_projection_centre;
	if (result.angle_from_rectified_to_skew_grid) result.rectified_grid_angle = result.angle_from_rectified_to_skew_grid;
	applyProjectionDefaults(result);
	return result;
}
var init_transformPROJJSON = __esmMin((() => {
	init_util();
}));
//#endregion
//#region node_modules/wkt-parser/index.js
function rename(obj, params) {
	var outName = params[0];
	var inName = params[1];
	if (!(outName in obj) && inName in obj) {
		obj[outName] = obj[inName];
		if (params.length === 3) obj[outName] = params[2](obj[outName]);
	}
}
function cleanWKT(wkt) {
	var keys = Object.keys(wkt);
	for (var i = 0, ii = keys.length; i < ii; ++i) {
		var key = keys[i];
		if (knownTypes.indexOf(key) !== -1) setPropertiesFromWkt(wkt[key]);
		if (typeof wkt[key] === "object") cleanWKT(wkt[key]);
	}
}
function setPropertiesFromWkt(wkt) {
	if (wkt.AUTHORITY) {
		var authority = Object.keys(wkt.AUTHORITY)[0];
		if (authority && authority in wkt.AUTHORITY) wkt.title = authority + ":" + wkt.AUTHORITY[authority];
	}
	if (wkt.type === "GEOGCS") wkt.projName = "longlat";
	else if (wkt.type === "LOCAL_CS") {
		wkt.projName = "identity";
		wkt.local = true;
	} else if (typeof wkt.PROJECTION === "object") wkt.projName = Object.keys(wkt.PROJECTION)[0];
	else wkt.projName = wkt.PROJECTION;
	if (wkt.AXIS) {
		var axisOrder = "";
		for (var i = 0, ii = wkt.AXIS.length; i < ii; ++i) {
			var axis = [wkt.AXIS[i][0].toLowerCase(), wkt.AXIS[i][1].toLowerCase()];
			if (axis[0].indexOf("north") !== -1 || (axis[0] === "y" || axis[0] === "lat") && axis[1] === "north") axisOrder += "n";
			else if (axis[0].indexOf("south") !== -1 || (axis[0] === "y" || axis[0] === "lat") && axis[1] === "south") axisOrder += "s";
			else if (axis[0].indexOf("east") !== -1 || (axis[0] === "x" || axis[0] === "lon") && axis[1] === "east") axisOrder += "e";
			else if (axis[0].indexOf("west") !== -1 || (axis[0] === "x" || axis[0] === "lon") && axis[1] === "west") axisOrder += "w";
		}
		if (axisOrder.length === 2) axisOrder += "u";
		if (axisOrder.length === 3) wkt.axis = axisOrder;
	}
	if (wkt.UNIT) {
		wkt.units = wkt.UNIT.name.toLowerCase();
		if (wkt.units === "metre") wkt.units = "meter";
		if (wkt.UNIT.convert) {
			if (wkt.type === "GEOGCS") {
				if (wkt.DATUM && wkt.DATUM.SPHEROID) wkt.to_meter = wkt.UNIT.convert * wkt.DATUM.SPHEROID.a;
			} else wkt.to_meter = wkt.UNIT.convert;
		}
	}
	var geogcs = wkt.GEOGCS;
	if (wkt.type === "GEOGCS") geogcs = wkt;
	if (geogcs) {
		if (geogcs.PRIMEM && geogcs.PRIMEM.convert) wkt.from_greenwich = d2r(geogcs.PRIMEM.convert);
		if (geogcs.DATUM) wkt.datumCode = geogcs.DATUM.name.toLowerCase();
		else wkt.datumCode = geogcs.name.toLowerCase();
		if (wkt.datumCode.slice(0, 2) === "d_") wkt.datumCode = wkt.datumCode.slice(2);
		if (wkt.datumCode === "new_zealand_1949") wkt.datumCode = "nzgd49";
		if (wkt.datumCode === "wgs_1984" || wkt.datumCode === "world_geodetic_system_1984") {
			if (wkt.PROJECTION === "Mercator_Auxiliary_Sphere") wkt.sphere = true;
			wkt.datumCode = "wgs84";
		}
		if (wkt.datumCode === "belge_1972") wkt.datumCode = "rnb72";
		if (geogcs.DATUM && geogcs.DATUM.SPHEROID) {
			wkt.ellps = geogcs.DATUM.SPHEROID.name.replace("_19", "").replace(/[Cc]larke\_18/, "clrk");
			if (wkt.ellps.toLowerCase().slice(0, 13) === "international") wkt.ellps = "intl";
			wkt.a = geogcs.DATUM.SPHEROID.a;
			wkt.rf = parseFloat(geogcs.DATUM.SPHEROID.rf);
		}
		if (geogcs.DATUM && geogcs.DATUM.TOWGS84) wkt.datum_params = geogcs.DATUM.TOWGS84;
		if (~wkt.datumCode.indexOf("osgb_1936")) wkt.datumCode = "osgb36";
		if (~wkt.datumCode.indexOf("osni_1952")) wkt.datumCode = "osni52";
		if (~wkt.datumCode.indexOf("tm65") || ~wkt.datumCode.indexOf("geodetic_datum_of_1965")) wkt.datumCode = "ire65";
		if (wkt.datumCode === "ch1903+") wkt.datumCode = "ch1903";
		if (~wkt.datumCode.indexOf("israel")) wkt.datumCode = "isr93";
	}
	if (wkt.b && !isFinite(wkt.b)) wkt.b = wkt.a;
	if (wkt.rectified_grid_angle) wkt.rectified_grid_angle = d2r(wkt.rectified_grid_angle);
	function toMeter(input) {
		return input * (wkt.to_meter || 1);
	}
	var renamer = function(a) {
		return rename(wkt, a);
	};
	[
		["standard_parallel_1", "Standard_Parallel_1"],
		["standard_parallel_1", "Latitude of 1st standard parallel"],
		["standard_parallel_2", "Standard_Parallel_2"],
		["standard_parallel_2", "Latitude of 2nd standard parallel"],
		["false_easting", "False_Easting"],
		["false_easting", "False easting"],
		["false-easting", "Easting at false origin"],
		["false_northing", "False_Northing"],
		["false_northing", "False northing"],
		["false_northing", "Northing at false origin"],
		["central_meridian", "Central_Meridian"],
		["central_meridian", "Longitude of natural origin"],
		["central_meridian", "Longitude of false origin"],
		["latitude_of_origin", "Latitude_Of_Origin"],
		["latitude_of_origin", "Central_Parallel"],
		["latitude_of_origin", "Latitude of natural origin"],
		["latitude_of_origin", "Latitude of false origin"],
		["scale_factor", "Scale_Factor"],
		["k0", "scale_factor"],
		["latitude_of_center", "Latitude_Of_Center"],
		["latitude_of_center", "Latitude_of_center"],
		[
			"lat0",
			"latitude_of_center",
			d2r
		],
		["longitude_of_center", "Longitude_Of_Center"],
		["longitude_of_center", "Longitude_of_center"],
		[
			"longc",
			"longitude_of_center",
			d2r
		],
		[
			"x0",
			"false_easting",
			toMeter
		],
		[
			"y0",
			"false_northing",
			toMeter
		],
		[
			"long0",
			"central_meridian",
			d2r
		],
		[
			"lat0",
			"latitude_of_origin",
			d2r
		],
		[
			"lat0",
			"standard_parallel_1",
			d2r
		],
		[
			"lat1",
			"standard_parallel_1",
			d2r
		],
		[
			"lat2",
			"standard_parallel_2",
			d2r
		],
		["azimuth", "Azimuth"],
		[
			"alpha",
			"azimuth",
			d2r
		],
		["srsCode", "name"]
	].forEach(renamer);
	applyProjectionDefaults(wkt);
}
function wkt_parser_default(wkt) {
	if (typeof wkt === "object") return transformPROJJSON(wkt);
	const version = detectWKTVersion(wkt);
	var lisp = parser_default(wkt);
	if (version === "WKT2") return transformPROJJSON(buildPROJJSON(lisp));
	var type = lisp[0];
	var obj = {};
	sExpr(lisp, obj);
	cleanWKT(obj);
	return obj[type];
}
var knownTypes;
var init_wkt_parser = __esmMin((() => {
	init_buildPROJJSON();
	init_detectWKTVersion();
	init_parser();
	init_process();
	init_transformPROJJSON();
	init_util();
	knownTypes = [
		"PROJECTEDCRS",
		"PROJCRS",
		"GEOGCS",
		"GEOCCS",
		"PROJCS",
		"LOCAL_CS",
		"GEODCRS",
		"GEODETICCRS",
		"GEODETICDATUM",
		"ENGCRS",
		"ENGINEERINGCRS"
	];
}));
//#endregion
//#region node_modules/proj4/lib/defs.js
function defs(name) {
	var that = this;
	if (arguments.length === 2) {
		var def = arguments[1];
		if (typeof def === "string") {
			if (def.charAt(0) === "+") defs[name] = projString_default(arguments[1]);
			else defs[name] = wkt_parser_default(arguments[1]);
		} else defs[name] = def;
	} else if (arguments.length === 1) {
		if (Array.isArray(name)) return name.map(function(v) {
			if (Array.isArray(v)) defs.apply(that, v);
			else defs(v);
		});
		else if (typeof name === "string") {
			if (name in defs) return defs[name];
		} else if ("EPSG" in name) defs["EPSG:" + name.EPSG] = name;
		else if ("ESRI" in name) defs["ESRI:" + name.ESRI] = name;
		else if ("IAU2000" in name) defs["IAU2000:" + name.IAU2000] = name;
		else console.log(name);
		return;
	}
}
var init_defs = __esmMin((() => {
	init_global();
	init_projString();
	init_wkt_parser();
	global_default(defs);
}));
//#endregion
//#region node_modules/proj4/lib/parseCode.js
function testObj(code) {
	return typeof code === "string";
}
function testDef(code) {
	return code in defs;
}
function testWKT(code) {
	return codeWords.some(function(word) {
		return code.indexOf(word) > -1;
	});
}
function checkMercator(item) {
	var auth = match(item, "authority");
	if (!auth) return;
	var code = match(auth, "epsg");
	return code && codes.indexOf(code) > -1;
}
function checkProjStr(item) {
	var ext = match(item, "extension");
	if (!ext) return;
	return match(ext, "proj4");
}
function testProj(code) {
	return code[0] === "+";
}
function parse(code) {
	if (testObj(code)) {
		if (testDef(code)) return defs[code];
		if (testWKT(code)) {
			var out = wkt_parser_default(code);
			if (checkMercator(out)) return defs["EPSG:3857"];
			var maybeProjStr = checkProjStr(out);
			if (maybeProjStr) return projString_default(maybeProjStr);
			return out;
		}
		if (testProj(code)) return projString_default(code);
	} else return code;
}
var codeWords, codes;
var init_parseCode = __esmMin((() => {
	init_defs();
	init_wkt_parser();
	init_projString();
	init_match();
	codeWords = [
		"PROJECTEDCRS",
		"PROJCRS",
		"GEOGCS",
		"GEOCCS",
		"PROJCS",
		"LOCAL_CS",
		"GEODCRS",
		"GEODETICCRS",
		"GEODETICDATUM",
		"ENGCRS",
		"ENGINEERINGCRS"
	];
	codes = [
		"3857",
		"900913",
		"3785",
		"102113"
	];
}));
//#endregion
//#region node_modules/proj4/lib/extend.js
function extend_default(destination, source) {
	destination = destination || {};
	var value, property;
	if (!source) return destination;
	for (property in source) {
		value = source[property];
		if (value !== void 0) destination[property] = value;
	}
	return destination;
}
var init_extend = __esmMin((() => {}));
//#endregion
//#region node_modules/proj4/lib/common/msfnz.js
function msfnz_default(eccent, sinphi, cosphi) {
	var con = eccent * sinphi;
	return cosphi / Math.sqrt(1 - con * con);
}
var init_msfnz = __esmMin((() => {}));
//#endregion
//#region node_modules/proj4/lib/common/sign.js
function sign_default(x) {
	return x < 0 ? -1 : 1;
}
var init_sign = __esmMin((() => {}));
//#endregion
//#region node_modules/proj4/lib/common/adjust_lon.js
function adjust_lon_default(x) {
	return Math.abs(x) <= 3.14159265359 ? x : x - sign_default(x) * TWO_PI;
}
var init_adjust_lon = __esmMin((() => {
	init_values();
	init_sign();
}));
//#endregion
//#region node_modules/proj4/lib/common/tsfnz.js
function tsfnz_default(eccent, phi, sinphi) {
	var con = eccent * sinphi;
	var com = .5 * eccent;
	con = Math.pow((1 - con) / (1 + con), com);
	return Math.tan(.5 * (HALF_PI - phi)) / con;
}
var init_tsfnz = __esmMin((() => {
	init_values();
}));
//#endregion
//#region node_modules/proj4/lib/common/phi2z.js
function phi2z_default(eccent, ts) {
	var eccnth = .5 * eccent;
	var con, dphi;
	var phi = HALF_PI - 2 * Math.atan(ts);
	for (var i = 0; i <= 15; i++) {
		con = eccent * Math.sin(phi);
		dphi = HALF_PI - 2 * Math.atan(ts * Math.pow((1 - con) / (1 + con), eccnth)) - phi;
		phi += dphi;
		if (Math.abs(dphi) <= 1e-10) return phi;
	}
	return -9999;
}
var init_phi2z = __esmMin((() => {
	init_values();
}));
//#endregion
//#region node_modules/proj4/lib/projections/merc.js
function init$31() {
	var con = this.b / this.a;
	this.es = 1 - con * con;
	if (!("x0" in this)) this.x0 = 0;
	if (!("y0" in this)) this.y0 = 0;
	this.e = Math.sqrt(this.es);
	if (this.lat_ts) {
		if (this.sphere) this.k0 = Math.cos(this.lat_ts);
		else this.k0 = msfnz_default(this.e, Math.sin(this.lat_ts), Math.cos(this.lat_ts));
	} else if (!this.k0) {
		if (this.k) this.k0 = this.k;
		else this.k0 = 1;
	}
}
function forward$30(p) {
	var lon = p.x;
	var lat = p.y;
	if (lat * 57.29577951308232 > 90 && lat * 57.29577951308232 < -90 && lon * 57.29577951308232 > 180 && lon * 57.29577951308232 < -180) return null;
	var x, y;
	if (Math.abs(Math.abs(lat) - HALF_PI) <= 1e-10) return null;
	else {
		if (this.sphere) {
			x = this.x0 + this.a * this.k0 * adjust_lon_default(lon - this.long0);
			y = this.y0 + this.a * this.k0 * Math.log(Math.tan(FORTPI + .5 * lat));
		} else {
			var sinphi = Math.sin(lat);
			var ts = tsfnz_default(this.e, lat, sinphi);
			x = this.x0 + this.a * this.k0 * adjust_lon_default(lon - this.long0);
			y = this.y0 - this.a * this.k0 * Math.log(ts);
		}
		p.x = x;
		p.y = y;
		return p;
	}
}
function inverse$30(p) {
	var x = p.x - this.x0;
	var y = p.y - this.y0;
	var lon, lat;
	if (this.sphere) lat = HALF_PI - 2 * Math.atan(Math.exp(-y / (this.a * this.k0)));
	else {
		var ts = Math.exp(-y / (this.a * this.k0));
		lat = phi2z_default(this.e, ts);
		if (lat === -9999) return null;
	}
	lon = adjust_lon_default(this.long0 + x / (this.a * this.k0));
	p.x = lon;
	p.y = lat;
	return p;
}
var names$32, merc_default;
var init_merc = __esmMin((() => {
	init_msfnz();
	init_adjust_lon();
	init_tsfnz();
	init_phi2z();
	init_values();
	names$32 = [
		"Mercator",
		"Popular Visualisation Pseudo Mercator",
		"Mercator_1SP",
		"Mercator_Auxiliary_Sphere",
		"merc"
	];
	merc_default = {
		init: init$31,
		forward: forward$30,
		inverse: inverse$30,
		names: names$32
	};
}));
//#endregion
//#region node_modules/proj4/lib/projections/longlat.js
function init$30() {}
function identity(pt) {
	return pt;
}
var names$31, longlat_default;
var init_longlat = __esmMin((() => {
	names$31 = ["longlat", "identity"];
	longlat_default = {
		init: init$30,
		forward: identity,
		inverse: identity,
		names: names$31
	};
}));
//#endregion
//#region node_modules/proj4/lib/projections.js
function add(proj, i) {
	var len = projStore.length;
	if (!proj.names) {
		console.log(i);
		return true;
	}
	projStore[len] = proj;
	proj.names.forEach(function(n) {
		names$30[n.toLowerCase()] = len;
	});
	return this;
}
function get(name) {
	if (!name) return false;
	var n = name.toLowerCase();
	if (typeof names$30[n] !== "undefined" && projStore[names$30[n]]) return projStore[names$30[n]];
}
function start() {
	projs.forEach(add);
}
var projs, names$30, projStore, projections_default;
var init_projections = __esmMin((() => {
	init_merc();
	init_longlat();
	projs = [merc_default, longlat_default];
	names$30 = {};
	projStore = [];
	projections_default = {
		start,
		add,
		get
	};
}));
//#endregion
//#region node_modules/proj4/lib/constants/Ellipsoid.js
var exports$2, WGS84;
var init_Ellipsoid = __esmMin((() => {
	exports$2 = {};
	exports$2.MERIT = {
		a: 6378137,
		rf: 298.257,
		ellipseName: "MERIT 1983"
	};
	exports$2.SGS85 = {
		a: 6378136,
		rf: 298.257,
		ellipseName: "Soviet Geodetic System 85"
	};
	exports$2.GRS80 = {
		a: 6378137,
		rf: 298.257222101,
		ellipseName: "GRS 1980(IUGG, 1980)"
	};
	exports$2.IAU76 = {
		a: 6378140,
		rf: 298.257,
		ellipseName: "IAU 1976"
	};
	exports$2.airy = {
		a: 6377563.396,
		b: 6356256.91,
		ellipseName: "Airy 1830"
	};
	exports$2.APL4 = {
		a: 6378137,
		rf: 298.25,
		ellipseName: "Appl. Physics. 1965"
	};
	exports$2.NWL9D = {
		a: 6378145,
		rf: 298.25,
		ellipseName: "Naval Weapons Lab., 1965"
	};
	exports$2.mod_airy = {
		a: 6377340.189,
		b: 6356034.446,
		ellipseName: "Modified Airy"
	};
	exports$2.andrae = {
		a: 6377104.43,
		rf: 300,
		ellipseName: "Andrae 1876 (Den., Iclnd.)"
	};
	exports$2.aust_SA = {
		a: 6378160,
		rf: 298.25,
		ellipseName: "Australian Natl & S. Amer. 1969"
	};
	exports$2.GRS67 = {
		a: 6378160,
		rf: 298.247167427,
		ellipseName: "GRS 67(IUGG 1967)"
	};
	exports$2.bessel = {
		a: 6377397.155,
		rf: 299.1528128,
		ellipseName: "Bessel 1841"
	};
	exports$2.bess_nam = {
		a: 6377483.865,
		rf: 299.1528128,
		ellipseName: "Bessel 1841 (Namibia)"
	};
	exports$2.clrk66 = {
		a: 6378206.4,
		b: 6356583.8,
		ellipseName: "Clarke 1866"
	};
	exports$2.clrk80 = {
		a: 6378249.145,
		rf: 293.4663,
		ellipseName: "Clarke 1880 mod."
	};
	exports$2.clrk58 = {
		a: 6378293.645208759,
		rf: 294.2606763692654,
		ellipseName: "Clarke 1858"
	};
	exports$2.CPM = {
		a: 6375738.7,
		rf: 334.29,
		ellipseName: "Comm. des Poids et Mesures 1799"
	};
	exports$2.delmbr = {
		a: 6376428,
		rf: 311.5,
		ellipseName: "Delambre 1810 (Belgium)"
	};
	exports$2.engelis = {
		a: 6378136.05,
		rf: 298.2566,
		ellipseName: "Engelis 1985"
	};
	exports$2.evrst30 = {
		a: 6377276.345,
		rf: 300.8017,
		ellipseName: "Everest 1830"
	};
	exports$2.evrst48 = {
		a: 6377304.063,
		rf: 300.8017,
		ellipseName: "Everest 1948"
	};
	exports$2.evrst56 = {
		a: 6377301.243,
		rf: 300.8017,
		ellipseName: "Everest 1956"
	};
	exports$2.evrst69 = {
		a: 6377295.664,
		rf: 300.8017,
		ellipseName: "Everest 1969"
	};
	exports$2.evrstSS = {
		a: 6377298.556,
		rf: 300.8017,
		ellipseName: "Everest (Sabah & Sarawak)"
	};
	exports$2.fschr60 = {
		a: 6378166,
		rf: 298.3,
		ellipseName: "Fischer (Mercury Datum) 1960"
	};
	exports$2.fschr60m = {
		a: 6378155,
		rf: 298.3,
		ellipseName: "Fischer 1960"
	};
	exports$2.fschr68 = {
		a: 6378150,
		rf: 298.3,
		ellipseName: "Fischer 1968"
	};
	exports$2.helmert = {
		a: 6378200,
		rf: 298.3,
		ellipseName: "Helmert 1906"
	};
	exports$2.hough = {
		a: 6378270,
		rf: 297,
		ellipseName: "Hough"
	};
	exports$2.intl = {
		a: 6378388,
		rf: 297,
		ellipseName: "International 1909 (Hayford)"
	};
	exports$2.kaula = {
		a: 6378163,
		rf: 298.24,
		ellipseName: "Kaula 1961"
	};
	exports$2.lerch = {
		a: 6378139,
		rf: 298.257,
		ellipseName: "Lerch 1979"
	};
	exports$2.mprts = {
		a: 6397300,
		rf: 191,
		ellipseName: "Maupertius 1738"
	};
	exports$2.new_intl = {
		a: 6378157.5,
		b: 6356772.2,
		ellipseName: "New International 1967"
	};
	exports$2.plessis = {
		a: 6376523,
		rf: 6355863,
		ellipseName: "Plessis 1817 (France)"
	};
	exports$2.krass = {
		a: 6378245,
		rf: 298.3,
		ellipseName: "Krassovsky, 1942"
	};
	exports$2.SEasia = {
		a: 6378155,
		b: 6356773.3205,
		ellipseName: "Southeast Asia"
	};
	exports$2.walbeck = {
		a: 6376896,
		b: 6355834.8467,
		ellipseName: "Walbeck"
	};
	exports$2.WGS60 = {
		a: 6378165,
		rf: 298.3,
		ellipseName: "WGS 60"
	};
	exports$2.WGS66 = {
		a: 6378145,
		rf: 298.25,
		ellipseName: "WGS 66"
	};
	exports$2.WGS7 = {
		a: 6378135,
		rf: 298.26,
		ellipseName: "WGS 72"
	};
	WGS84 = exports$2.WGS84 = {
		a: 6378137,
		rf: 298.257223563,
		ellipseName: "WGS 84"
	};
	exports$2.sphere = {
		a: 6370997,
		b: 6370997,
		ellipseName: "Normal Sphere (r=6370997)"
	};
}));
//#endregion
//#region node_modules/proj4/lib/deriveConstants.js
function eccentricity(a, b, rf, R_A) {
	var a2 = a * a;
	var b2 = b * b;
	var es = (a2 - b2) / a2;
	var e = 0;
	if (R_A) {
		a *= 1 - es * (SIXTH + es * (RA4 + es * RA6));
		a2 = a * a;
		es = 0;
	} else e = Math.sqrt(es);
	var ep2 = (a2 - b2) / b2;
	return {
		es,
		e,
		ep2
	};
}
function sphere(a, b, rf, ellps, sphere) {
	if (!a) {
		var ellipse = match(exports$2, ellps);
		if (!ellipse) ellipse = WGS84;
		a = ellipse.a;
		b = ellipse.b;
		rf = ellipse.rf;
	}
	if (rf && !b) b = (1 - 1 / rf) * a;
	if (rf === 0 || Math.abs(a - b) < 1e-10) {
		sphere = true;
		b = a;
	}
	return {
		a,
		b,
		rf,
		sphere
	};
}
var init_deriveConstants = __esmMin((() => {
	init_values();
	init_Ellipsoid();
	init_match();
}));
//#endregion
//#region node_modules/proj4/lib/constants/Datum.js
var exports$1;
var init_Datum = __esmMin((() => {
	exports$1 = {};
	exports$1.wgs84 = {
		towgs84: "0,0,0",
		ellipse: "WGS84",
		datumName: "WGS84"
	};
	exports$1.ch1903 = {
		towgs84: "674.374,15.056,405.346",
		ellipse: "bessel",
		datumName: "swiss"
	};
	exports$1.ggrs87 = {
		towgs84: "-199.87,74.79,246.62",
		ellipse: "GRS80",
		datumName: "Greek_Geodetic_Reference_System_1987"
	};
	exports$1.nad83 = {
		towgs84: "0,0,0",
		ellipse: "GRS80",
		datumName: "North_American_Datum_1983"
	};
	exports$1.nad27 = {
		nadgrids: "@conus,@alaska,@ntv2_0.gsb,@ntv1_can.dat",
		ellipse: "clrk66",
		datumName: "North_American_Datum_1927"
	};
	exports$1.potsdam = {
		towgs84: "598.1,73.7,418.2,0.202,0.045,-2.455,6.7",
		ellipse: "bessel",
		datumName: "Potsdam Rauenberg 1950 DHDN"
	};
	exports$1.carthage = {
		towgs84: "-263.0,6.0,431.0",
		ellipse: "clark80",
		datumName: "Carthage 1934 Tunisia"
	};
	exports$1.hermannskogel = {
		towgs84: "577.326,90.129,463.919,5.137,1.474,5.297,2.4232",
		ellipse: "bessel",
		datumName: "Hermannskogel"
	};
	exports$1.osni52 = {
		towgs84: "482.530,-130.596,564.557,-1.042,-0.214,-0.631,8.15",
		ellipse: "airy",
		datumName: "Irish National"
	};
	exports$1.ire65 = {
		towgs84: "482.530,-130.596,564.557,-1.042,-0.214,-0.631,8.15",
		ellipse: "mod_airy",
		datumName: "Ireland 1965"
	};
	exports$1.rassadiran = {
		towgs84: "-133.63,-157.5,-158.62",
		ellipse: "intl",
		datumName: "Rassadiran"
	};
	exports$1.nzgd49 = {
		towgs84: "59.47,-5.04,187.44,0.47,-0.1,1.024,-4.5993",
		ellipse: "intl",
		datumName: "New Zealand Geodetic Datum 1949"
	};
	exports$1.osgb36 = {
		towgs84: "446.448,-125.157,542.060,0.1502,0.2470,0.8421,-20.4894",
		ellipse: "airy",
		datumName: "Airy 1830"
	};
	exports$1.s_jtsk = {
		towgs84: "589,76,480",
		ellipse: "bessel",
		datumName: "S-JTSK (Ferro)"
	};
	exports$1.beduaram = {
		towgs84: "-106,-87,188",
		ellipse: "clrk80",
		datumName: "Beduaram"
	};
	exports$1.gunung_segara = {
		towgs84: "-403,684,41",
		ellipse: "bessel",
		datumName: "Gunung Segara Jakarta"
	};
	exports$1.rnb72 = {
		towgs84: "106.869,-52.2978,103.724,-0.33657,0.456955,-1.84218,1",
		ellipse: "intl",
		datumName: "Reseau National Belge 1972"
	};
}));
//#endregion
//#region node_modules/proj4/lib/datum.js
function datum(datumCode, datum_params, a, b, es, ep2, nadgrids) {
	var out = {};
	if (datumCode === void 0 || datumCode === "none") out.datum_type = 5;
	else out.datum_type = 4;
	if (datum_params) {
		out.datum_params = datum_params.map(parseFloat);
		if (out.datum_params[0] !== 0 || out.datum_params[1] !== 0 || out.datum_params[2] !== 0) out.datum_type = 1;
		if (out.datum_params.length > 3) {
			if (out.datum_params[3] !== 0 || out.datum_params[4] !== 0 || out.datum_params[5] !== 0 || out.datum_params[6] !== 0) {
				out.datum_type = 2;
				out.datum_params[3] *= SEC_TO_RAD;
				out.datum_params[4] *= SEC_TO_RAD;
				out.datum_params[5] *= SEC_TO_RAD;
				out.datum_params[6] = out.datum_params[6] / 1e6 + 1;
			}
		}
	}
	if (nadgrids) {
		out.datum_type = 3;
		out.grids = nadgrids;
	}
	out.a = a;
	out.b = b;
	out.es = es;
	out.ep2 = ep2;
	return out;
}
var init_datum = __esmMin((() => {
	init_values();
}));
//#endregion
//#region node_modules/proj4/lib/nadgrid.js
/**
* Load a binary NTv2 file (.gsb) to a key that can be used in a proj string like +nadgrids=<key>. Pass the NTv2 file
* as an ArrayBuffer.
*/
function nadgrid(key, data) {
	var view = new DataView(data);
	var isLittleEndian = detectLittleEndian(view);
	var header = readHeader(view, isLittleEndian);
	if (header.nSubgrids > 1) console.log("Only single NTv2 subgrids are currently supported, subsequent sub grids are ignored");
	var nadgrid = {
		header,
		subgrids: readSubgrids(view, header, isLittleEndian)
	};
	loadedNadgrids[key] = nadgrid;
	return nadgrid;
}
/**
* Given a proj4 value for nadgrids, return an array of loaded grids
*/
function getNadgrids(nadgrids) {
	if (nadgrids === void 0) return null;
	return nadgrids.split(",").map(parseNadgridString);
}
function parseNadgridString(value) {
	if (value.length === 0) return null;
	var optional = value[0] === "@";
	if (optional) value = value.slice(1);
	if (value === "null") return {
		name: "null",
		mandatory: !optional,
		grid: null,
		isNull: true
	};
	return {
		name: value,
		mandatory: !optional,
		grid: loadedNadgrids[value] || null,
		isNull: false
	};
}
function secondsToRadians(seconds) {
	return seconds / 3600 * Math.PI / 180;
}
function detectLittleEndian(view) {
	var nFields = view.getInt32(8, false);
	if (nFields === 11) return false;
	nFields = view.getInt32(8, true);
	if (nFields !== 11) console.warn("Failed to detect nadgrid endian-ness, defaulting to little-endian");
	return true;
}
function readHeader(view, isLittleEndian) {
	return {
		nFields: view.getInt32(8, isLittleEndian),
		nSubgridFields: view.getInt32(24, isLittleEndian),
		nSubgrids: view.getInt32(40, isLittleEndian),
		shiftType: decodeString(view, 56, 64).trim(),
		fromSemiMajorAxis: view.getFloat64(120, isLittleEndian),
		fromSemiMinorAxis: view.getFloat64(136, isLittleEndian),
		toSemiMajorAxis: view.getFloat64(152, isLittleEndian),
		toSemiMinorAxis: view.getFloat64(168, isLittleEndian)
	};
}
function decodeString(view, start, end) {
	return String.fromCharCode.apply(null, new Uint8Array(view.buffer.slice(start, end)));
}
function readSubgrids(view, header, isLittleEndian) {
	var gridOffset = 176;
	var grids = [];
	for (var i = 0; i < header.nSubgrids; i++) {
		var subHeader = readGridHeader(view, gridOffset, isLittleEndian);
		var nodes = readGridNodes(view, gridOffset, subHeader, isLittleEndian);
		var lngColumnCount = Math.round(1 + (subHeader.upperLongitude - subHeader.lowerLongitude) / subHeader.longitudeInterval);
		var latColumnCount = Math.round(1 + (subHeader.upperLatitude - subHeader.lowerLatitude) / subHeader.latitudeInterval);
		grids.push({
			ll: [secondsToRadians(subHeader.lowerLongitude), secondsToRadians(subHeader.lowerLatitude)],
			del: [secondsToRadians(subHeader.longitudeInterval), secondsToRadians(subHeader.latitudeInterval)],
			lim: [lngColumnCount, latColumnCount],
			count: subHeader.gridNodeCount,
			cvs: mapNodes(nodes)
		});
	}
	return grids;
}
function mapNodes(nodes) {
	return nodes.map(function(r) {
		return [secondsToRadians(r.longitudeShift), secondsToRadians(r.latitudeShift)];
	});
}
function readGridHeader(view, offset, isLittleEndian) {
	return {
		name: decodeString(view, offset + 8, offset + 16).trim(),
		parent: decodeString(view, offset + 24, offset + 24 + 8).trim(),
		lowerLatitude: view.getFloat64(offset + 72, isLittleEndian),
		upperLatitude: view.getFloat64(offset + 88, isLittleEndian),
		lowerLongitude: view.getFloat64(offset + 104, isLittleEndian),
		upperLongitude: view.getFloat64(offset + 120, isLittleEndian),
		latitudeInterval: view.getFloat64(offset + 136, isLittleEndian),
		longitudeInterval: view.getFloat64(offset + 152, isLittleEndian),
		gridNodeCount: view.getInt32(offset + 168, isLittleEndian)
	};
}
function readGridNodes(view, offset, gridHeader, isLittleEndian) {
	var nodesOffset = offset + 176;
	var gridRecordLength = 16;
	var gridShiftRecords = [];
	for (var i = 0; i < gridHeader.gridNodeCount; i++) {
		var record = {
			latitudeShift: view.getFloat32(nodesOffset + i * gridRecordLength, isLittleEndian),
			longitudeShift: view.getFloat32(nodesOffset + i * gridRecordLength + 4, isLittleEndian),
			latitudeAccuracy: view.getFloat32(nodesOffset + i * gridRecordLength + 8, isLittleEndian),
			longitudeAccuracy: view.getFloat32(nodesOffset + i * gridRecordLength + 12, isLittleEndian)
		};
		gridShiftRecords.push(record);
	}
	return gridShiftRecords;
}
var loadedNadgrids;
var init_nadgrid = __esmMin((() => {
	loadedNadgrids = {};
}));
//#endregion
//#region node_modules/proj4/lib/Proj.js
function Projection(srsCode, callback) {
	if (!(this instanceof Projection)) return new Projection(srsCode);
	callback = callback || function(error) {
		if (error) throw error;
	};
	var json = parse(srsCode);
	if (typeof json !== "object") {
		callback(srsCode);
		return;
	}
	var ourProj = Projection.projections.get(json.projName);
	if (!ourProj) {
		callback(srsCode);
		return;
	}
	if (json.datumCode && json.datumCode !== "none") {
		var datumDef = match(exports$1, json.datumCode);
		if (datumDef) {
			json.datum_params = json.datum_params || (datumDef.towgs84 ? datumDef.towgs84.split(",") : null);
			json.ellps = datumDef.ellipse;
			json.datumName = datumDef.datumName ? datumDef.datumName : json.datumCode;
		}
	}
	json.k0 = json.k0 || 1;
	json.axis = json.axis || "enu";
	json.ellps = json.ellps || "wgs84";
	json.lat1 = json.lat1 || json.lat0;
	var sphere_ = sphere(json.a, json.b, json.rf, json.ellps, json.sphere);
	var ecc = eccentricity(sphere_.a, sphere_.b, sphere_.rf, json.R_A);
	var nadgrids = getNadgrids(json.nadgrids);
	var datumObj = json.datum || datum(json.datumCode, json.datum_params, sphere_.a, sphere_.b, ecc.es, ecc.ep2, nadgrids);
	extend_default(this, json);
	extend_default(this, ourProj);
	this.a = sphere_.a;
	this.b = sphere_.b;
	this.rf = sphere_.rf;
	this.sphere = sphere_.sphere;
	this.es = ecc.es;
	this.e = ecc.e;
	this.ep2 = ecc.ep2;
	this.datum = datumObj;
	this.init();
	callback(null, this);
}
var init_Proj = __esmMin((() => {
	init_parseCode();
	init_extend();
	init_projections();
	init_deriveConstants();
	init_Datum();
	init_datum();
	init_match();
	init_nadgrid();
	Projection.projections = projections_default;
	Projection.projections.start();
}));
//#endregion
//#region node_modules/proj4/lib/datumUtils.js
function compareDatums(source, dest) {
	if (source.datum_type !== dest.datum_type) return false;
	else if (source.a !== dest.a || Math.abs(source.es - dest.es) > 5e-11) return false;
	else if (source.datum_type === 1) return source.datum_params[0] === dest.datum_params[0] && source.datum_params[1] === dest.datum_params[1] && source.datum_params[2] === dest.datum_params[2];
	else if (source.datum_type === 2) return source.datum_params[0] === dest.datum_params[0] && source.datum_params[1] === dest.datum_params[1] && source.datum_params[2] === dest.datum_params[2] && source.datum_params[3] === dest.datum_params[3] && source.datum_params[4] === dest.datum_params[4] && source.datum_params[5] === dest.datum_params[5] && source.datum_params[6] === dest.datum_params[6];
	else return true;
}
function geodeticToGeocentric(p, es, a) {
	var Longitude = p.x;
	var Latitude = p.y;
	var Height = p.z ? p.z : 0;
	var Rn;
	var Sin_Lat;
	var Sin2_Lat;
	var Cos_Lat;
	if (Latitude < -HALF_PI && Latitude > -1.001 * HALF_PI) Latitude = -HALF_PI;
	else if (Latitude > HALF_PI && Latitude < 1.001 * HALF_PI) Latitude = HALF_PI;
	else if (Latitude < -HALF_PI) return {
		x: -Infinity,
		y: -Infinity,
		z: p.z
	};
	else if (Latitude > HALF_PI) return {
		x: Infinity,
		y: Infinity,
		z: p.z
	};
	if (Longitude > Math.PI) Longitude -= 2 * Math.PI;
	Sin_Lat = Math.sin(Latitude);
	Cos_Lat = Math.cos(Latitude);
	Sin2_Lat = Sin_Lat * Sin_Lat;
	Rn = a / Math.sqrt(1 - es * Sin2_Lat);
	return {
		x: (Rn + Height) * Cos_Lat * Math.cos(Longitude),
		y: (Rn + Height) * Cos_Lat * Math.sin(Longitude),
		z: (Rn * (1 - es) + Height) * Sin_Lat
	};
}
function geocentricToGeodetic(p, es, a, b) {
	var genau = 1e-12;
	var genau2 = genau * genau;
	var maxiter = 30;
	var P;
	var RR;
	var CT;
	var ST;
	var RX;
	var RK;
	var RN;
	var CPHI0;
	var SPHI0;
	var CPHI;
	var SPHI;
	var SDPHI;
	var iter;
	var X = p.x;
	var Y = p.y;
	var Z = p.z ? p.z : 0;
	var Longitude;
	var Latitude;
	var Height;
	P = Math.sqrt(X * X + Y * Y);
	RR = Math.sqrt(X * X + Y * Y + Z * Z);
	if (P / a < genau) {
		Longitude = 0;
		if (RR / a < genau) {
			Latitude = HALF_PI;
			Height = -b;
			return {
				x: p.x,
				y: p.y,
				z: p.z
			};
		}
	} else Longitude = Math.atan2(Y, X);
	CT = Z / RR;
	ST = P / RR;
	RX = 1 / Math.sqrt(1 - es * (2 - es) * ST * ST);
	CPHI0 = ST * (1 - es) * RX;
	SPHI0 = CT * RX;
	iter = 0;
	do {
		iter++;
		RN = a / Math.sqrt(1 - es * SPHI0 * SPHI0);
		Height = P * CPHI0 + Z * SPHI0 - RN * (1 - es * SPHI0 * SPHI0);
		RK = es * RN / (RN + Height);
		RX = 1 / Math.sqrt(1 - RK * (2 - RK) * ST * ST);
		CPHI = ST * (1 - RK) * RX;
		SPHI = CT * RX;
		SDPHI = SPHI * CPHI0 - CPHI * SPHI0;
		CPHI0 = CPHI;
		SPHI0 = SPHI;
	} while (SDPHI * SDPHI > genau2 && iter < maxiter);
	Latitude = Math.atan(SPHI / Math.abs(CPHI));
	return {
		x: Longitude,
		y: Latitude,
		z: Height
	};
}
/** point object, nothing fancy, just allows values to be
passed back and forth by reference rather than by value.
Other point classes may be used as long as they have
x and y properties, which will get modified in the transform method.
*/
function geocentricToWgs84(p, datum_type, datum_params) {
	if (datum_type === 1) return {
		x: p.x + datum_params[0],
		y: p.y + datum_params[1],
		z: p.z + datum_params[2]
	};
	else if (datum_type === 2) {
		var Dx_BF = datum_params[0];
		var Dy_BF = datum_params[1];
		var Dz_BF = datum_params[2];
		var Rx_BF = datum_params[3];
		var Ry_BF = datum_params[4];
		var Rz_BF = datum_params[5];
		var M_BF = datum_params[6];
		return {
			x: M_BF * (p.x - Rz_BF * p.y + Ry_BF * p.z) + Dx_BF,
			y: M_BF * (Rz_BF * p.x + p.y - Rx_BF * p.z) + Dy_BF,
			z: M_BF * (-Ry_BF * p.x + Rx_BF * p.y + p.z) + Dz_BF
		};
	}
}
function geocentricFromWgs84(p, datum_type, datum_params) {
	if (datum_type === 1) return {
		x: p.x - datum_params[0],
		y: p.y - datum_params[1],
		z: p.z - datum_params[2]
	};
	else if (datum_type === 2) {
		var Dx_BF = datum_params[0];
		var Dy_BF = datum_params[1];
		var Dz_BF = datum_params[2];
		var Rx_BF = datum_params[3];
		var Ry_BF = datum_params[4];
		var Rz_BF = datum_params[5];
		var M_BF = datum_params[6];
		var x_tmp = (p.x - Dx_BF) / M_BF;
		var y_tmp = (p.y - Dy_BF) / M_BF;
		var z_tmp = (p.z - Dz_BF) / M_BF;
		return {
			x: x_tmp + Rz_BF * y_tmp - Ry_BF * z_tmp,
			y: -Rz_BF * x_tmp + y_tmp + Rx_BF * z_tmp,
			z: Ry_BF * x_tmp - Rx_BF * y_tmp + z_tmp
		};
	}
}
var init_datumUtils = __esmMin((() => {
	init_values();
}));
//#endregion
//#region node_modules/proj4/lib/datum_transform.js
function checkParams(type) {
	return type === 1 || type === 2;
}
function datum_transform_default(source, dest, point) {
	if (compareDatums(source, dest)) return point;
	if (source.datum_type === 5 || dest.datum_type === 5) return point;
	var source_a = source.a;
	var source_es = source.es;
	if (source.datum_type === 3) {
		if (applyGridShift(source, false, point) !== 0) return;
		source_a = SRS_WGS84_SEMIMAJOR;
		source_es = SRS_WGS84_ESQUARED;
	}
	var dest_a = dest.a;
	var dest_b = dest.b;
	var dest_es = dest.es;
	if (dest.datum_type === 3) {
		dest_a = SRS_WGS84_SEMIMAJOR;
		dest_b = SRS_WGS84_SEMIMINOR;
		dest_es = SRS_WGS84_ESQUARED;
	}
	if (source_es === dest_es && source_a === dest_a && !checkParams(source.datum_type) && !checkParams(dest.datum_type)) return point;
	point = geodeticToGeocentric(point, source_es, source_a);
	if (checkParams(source.datum_type)) point = geocentricToWgs84(point, source.datum_type, source.datum_params);
	if (checkParams(dest.datum_type)) point = geocentricFromWgs84(point, dest.datum_type, dest.datum_params);
	point = geocentricToGeodetic(point, dest_es, dest_a, dest_b);
	if (dest.datum_type === 3) {
		if (applyGridShift(dest, true, point) !== 0) return;
	}
	return point;
}
function applyGridShift(source, inverse, point) {
	if (source.grids === null || source.grids.length === 0) {
		console.log("Grid shift grids not found");
		return -1;
	}
	var input = {
		x: -point.x,
		y: point.y
	};
	var output = {
		x: NaN,
		y: NaN
	};
	var attemptedGrids = [];
	for (var i = 0; i < source.grids.length; i++) {
		var grid = source.grids[i];
		attemptedGrids.push(grid.name);
		if (grid.isNull) {
			output = input;
			break;
		}
		grid.mandatory;
		if (grid.grid === null) {
			if (grid.mandatory) {
				console.log("Unable to find mandatory grid '" + grid.name + "'");
				return -1;
			}
			continue;
		}
		var subgrid = grid.grid.subgrids[0];
		var epsilon = (Math.abs(subgrid.del[1]) + Math.abs(subgrid.del[0])) / 1e4;
		var minX = subgrid.ll[0] - epsilon;
		var minY = subgrid.ll[1] - epsilon;
		var maxX = subgrid.ll[0] + (subgrid.lim[0] - 1) * subgrid.del[0] + epsilon;
		var maxY = subgrid.ll[1] + (subgrid.lim[1] - 1) * subgrid.del[1] + epsilon;
		if (minY > input.y || minX > input.x || maxY < input.y || maxX < input.x) continue;
		output = applySubgridShift(input, inverse, subgrid);
		if (!isNaN(output.x)) break;
	}
	if (isNaN(output.x)) {
		console.log("Failed to find a grid shift table for location '" + -input.x * R2D + " " + input.y * R2D + " tried: '" + attemptedGrids + "'");
		return -1;
	}
	point.x = -output.x;
	point.y = output.y;
	return 0;
}
function applySubgridShift(pin, inverse, ct) {
	var val = {
		x: NaN,
		y: NaN
	};
	if (isNaN(pin.x)) return val;
	var tb = {
		x: pin.x,
		y: pin.y
	};
	tb.x -= ct.ll[0];
	tb.y -= ct.ll[1];
	tb.x = adjust_lon_default(tb.x - Math.PI) + Math.PI;
	var t = nadInterpolate(tb, ct);
	if (inverse) {
		if (isNaN(t.x)) return val;
		t.x = tb.x - t.x;
		t.y = tb.y - t.y;
		var i = 9, tol = 1e-12;
		var dif, del;
		do {
			del = nadInterpolate(t, ct);
			if (isNaN(del.x)) {
				console.log("Inverse grid shift iteration failed, presumably at grid edge.  Using first approximation.");
				break;
			}
			dif = {
				x: tb.x - (del.x + t.x),
				y: tb.y - (del.y + t.y)
			};
			t.x += dif.x;
			t.y += dif.y;
		} while (i-- && Math.abs(dif.x) > tol && Math.abs(dif.y) > tol);
		if (i < 0) {
			console.log("Inverse grid shift iterator failed to converge.");
			return val;
		}
		val.x = adjust_lon_default(t.x + ct.ll[0]);
		val.y = t.y + ct.ll[1];
	} else if (!isNaN(t.x)) {
		val.x = pin.x + t.x;
		val.y = pin.y + t.y;
	}
	return val;
}
function nadInterpolate(pin, ct) {
	var t = {
		x: pin.x / ct.del[0],
		y: pin.y / ct.del[1]
	};
	var indx = {
		x: Math.floor(t.x),
		y: Math.floor(t.y)
	};
	var frct = {
		x: t.x - 1 * indx.x,
		y: t.y - 1 * indx.y
	};
	var val = {
		x: NaN,
		y: NaN
	};
	var inx;
	if (indx.x < 0 || indx.x >= ct.lim[0]) return val;
	if (indx.y < 0 || indx.y >= ct.lim[1]) return val;
	inx = indx.y * ct.lim[0] + indx.x;
	var f00 = {
		x: ct.cvs[inx][0],
		y: ct.cvs[inx][1]
	};
	inx++;
	var f10 = {
		x: ct.cvs[inx][0],
		y: ct.cvs[inx][1]
	};
	inx += ct.lim[0];
	var f11 = {
		x: ct.cvs[inx][0],
		y: ct.cvs[inx][1]
	};
	inx--;
	var f01 = {
		x: ct.cvs[inx][0],
		y: ct.cvs[inx][1]
	};
	var m11 = frct.x * frct.y, m10 = frct.x * (1 - frct.y), m00 = (1 - frct.x) * (1 - frct.y), m01 = (1 - frct.x) * frct.y;
	val.x = m00 * f00.x + m10 * f10.x + m01 * f01.x + m11 * f11.x;
	val.y = m00 * f00.y + m10 * f10.y + m01 * f01.y + m11 * f11.y;
	return val;
}
var init_datum_transform = __esmMin((() => {
	init_values();
	init_datumUtils();
	init_adjust_lon();
}));
//#endregion
//#region node_modules/proj4/lib/adjust_axis.js
function adjust_axis_default(crs, denorm, point) {
	var xin = point.x, yin = point.y, zin = point.z || 0;
	var v, t, i;
	var out = {};
	for (i = 0; i < 3; i++) {
		if (denorm && i === 2 && point.z === void 0) continue;
		if (i === 0) {
			v = xin;
			if ("ew".indexOf(crs.axis[i]) !== -1) t = "x";
			else t = "y";
		} else if (i === 1) {
			v = yin;
			if ("ns".indexOf(crs.axis[i]) !== -1) t = "y";
			else t = "x";
		} else {
			v = zin;
			t = "z";
		}
		switch (crs.axis[i]) {
			case "e":
				out[t] = v;
				break;
			case "w":
				out[t] = -v;
				break;
			case "n":
				out[t] = v;
				break;
			case "s":
				out[t] = -v;
				break;
			case "u":
				if (point[t] !== void 0) out.z = v;
				break;
			case "d":
				if (point[t] !== void 0) out.z = -v;
				break;
			default: return null;
		}
	}
	return out;
}
var init_adjust_axis = __esmMin((() => {}));
//#endregion
//#region node_modules/proj4/lib/common/toPoint.js
function toPoint_default(array) {
	var out = {
		x: array[0],
		y: array[1]
	};
	if (array.length > 2) out.z = array[2];
	if (array.length > 3) out.m = array[3];
	return out;
}
var init_toPoint = __esmMin((() => {}));
//#endregion
//#region node_modules/proj4/lib/checkSanity.js
function checkSanity_default(point) {
	checkCoord(point.x);
	checkCoord(point.y);
}
function checkCoord(num) {
	if (typeof Number.isFinite === "function") {
		if (Number.isFinite(num)) return;
		throw new TypeError("coordinates must be finite numbers");
	}
	if (typeof num !== "number" || num !== num || !isFinite(num)) throw new TypeError("coordinates must be finite numbers");
}
var init_checkSanity = __esmMin((() => {}));
//#endregion
//#region node_modules/proj4/lib/transform.js
function checkNotWGS(source, dest) {
	return (source.datum.datum_type === 1 || source.datum.datum_type === 2) && dest.datumCode !== "WGS84" || (dest.datum.datum_type === 1 || dest.datum.datum_type === 2) && source.datumCode !== "WGS84";
}
function transform(source, dest, point, enforceAxis) {
	var wgs84;
	if (Array.isArray(point)) point = toPoint_default(point);
	checkSanity_default(point);
	if (source.datum && dest.datum && checkNotWGS(source, dest)) {
		wgs84 = new Projection("WGS84");
		point = transform(source, wgs84, point, enforceAxis);
		source = wgs84;
	}
	if (enforceAxis && source.axis !== "enu") point = adjust_axis_default(source, false, point);
	if (source.projName === "longlat") point = {
		x: point.x * D2R$1,
		y: point.y * D2R$1,
		z: point.z || 0
	};
	else {
		if (source.to_meter) point = {
			x: point.x * source.to_meter,
			y: point.y * source.to_meter,
			z: point.z || 0
		};
		point = source.inverse(point);
		if (!point) return;
	}
	if (source.from_greenwich) point.x += source.from_greenwich;
	point = datum_transform_default(source.datum, dest.datum, point);
	if (!point) return;
	if (dest.from_greenwich) point = {
		x: point.x - dest.from_greenwich,
		y: point.y,
		z: point.z || 0
	};
	if (dest.projName === "longlat") point = {
		x: point.x * R2D,
		y: point.y * R2D,
		z: point.z || 0
	};
	else {
		point = dest.forward(point);
		if (dest.to_meter) point = {
			x: point.x / dest.to_meter,
			y: point.y / dest.to_meter,
			z: point.z || 0
		};
	}
	if (enforceAxis && dest.axis !== "enu") return adjust_axis_default(dest, true, point);
	return point;
}
var init_transform = __esmMin((() => {
	init_values();
	init_datum_transform();
	init_adjust_axis();
	init_Proj();
	init_toPoint();
	init_checkSanity();
}));
//#endregion
//#region node_modules/proj4/lib/core.js
function transformer(from, to, coords, enforceAxis) {
	var transformedArray, out, keys;
	if (Array.isArray(coords)) {
		transformedArray = transform(from, to, coords, enforceAxis) || {
			x: NaN,
			y: NaN
		};
		if (coords.length > 2) {
			if (typeof from.name !== "undefined" && from.name === "geocent" || typeof to.name !== "undefined" && to.name === "geocent") {
				if (typeof transformedArray.z === "number") return [
					transformedArray.x,
					transformedArray.y,
					transformedArray.z
				].concat(coords.splice(3));
				else return [
					transformedArray.x,
					transformedArray.y,
					coords[2]
				].concat(coords.splice(3));
			} else return [transformedArray.x, transformedArray.y].concat(coords.splice(2));
		} else return [transformedArray.x, transformedArray.y];
	} else {
		out = transform(from, to, coords, enforceAxis);
		keys = Object.keys(coords);
		if (keys.length === 2) return out;
		keys.forEach(function(key) {
			if (typeof from.name !== "undefined" && from.name === "geocent" || typeof to.name !== "undefined" && to.name === "geocent") {
				if (key === "x" || key === "y" || key === "z") return;
			} else if (key === "x" || key === "y") return;
			out[key] = coords[key];
		});
		return out;
	}
}
function checkProj(item) {
	if (item instanceof Projection) return item;
	if (item.oProj) return item.oProj;
	return Projection(item);
}
function proj4(fromProj, toProj, coord) {
	fromProj = checkProj(fromProj);
	var single = false;
	var obj;
	if (typeof toProj === "undefined") {
		toProj = fromProj;
		fromProj = wgs84;
		single = true;
	} else if (typeof toProj.x !== "undefined" || Array.isArray(toProj)) {
		coord = toProj;
		toProj = fromProj;
		fromProj = wgs84;
		single = true;
	}
	toProj = checkProj(toProj);
	if (coord) return transformer(fromProj, toProj, coord);
	else {
		obj = {
			forward: function(coords, enforceAxis) {
				return transformer(fromProj, toProj, coords, enforceAxis);
			},
			inverse: function(coords, enforceAxis) {
				return transformer(toProj, fromProj, coords, enforceAxis);
			}
		};
		if (single) obj.oProj = toProj;
		return obj;
	}
}
var wgs84;
var init_core = __esmMin((() => {
	init_Proj();
	init_transform();
	wgs84 = Projection("WGS84");
}));
//#endregion
//#region node_modules/mgrs/mgrs.js
/**
* Conversion of lat/lon to MGRS.
*
* @param {object} ll Object literal with lat and lon properties on a
*     WGS84 ellipsoid.
* @param {int} accuracy Accuracy in digits (5 for 1 m, 4 for 10 m, 3 for
*      100 m, 2 for 1000 m or 1 for 10000 m). Optional, default is 5.
* @return {string} the MGRS string for the given location and accuracy.
*/
function forward$29(ll, accuracy) {
	accuracy = accuracy || 5;
	return encode(LLtoUTM({
		lat: ll[1],
		lon: ll[0]
	}), accuracy);
}
/**
* Conversion of MGRS to lat/lon.
*
* @param {string} mgrs MGRS string.
* @return {array} An array with left (longitude), bottom (latitude), right
*     (longitude) and top (latitude) values in WGS84, representing the
*     bounding box for the provided MGRS reference.
*/
function inverse$29(mgrs) {
	var bbox = UTMtoLL(decode(mgrs.toUpperCase()));
	if (bbox.lat && bbox.lon) return [
		bbox.lon,
		bbox.lat,
		bbox.lon,
		bbox.lat
	];
	return [
		bbox.left,
		bbox.bottom,
		bbox.right,
		bbox.top
	];
}
function toPoint(mgrs) {
	var bbox = UTMtoLL(decode(mgrs.toUpperCase()));
	if (bbox.lat && bbox.lon) return [bbox.lon, bbox.lat];
	return [(bbox.left + bbox.right) / 2, (bbox.top + bbox.bottom) / 2];
}
/**
* Conversion from degrees to radians.
*
* @private
* @param {number} deg the angle in degrees.
* @return {number} the angle in radians.
*/
function degToRad(deg) {
	return deg * (Math.PI / 180);
}
/**
* Conversion from radians to degrees.
*
* @private
* @param {number} rad the angle in radians.
* @return {number} the angle in degrees.
*/
function radToDeg(rad) {
	return 180 * (rad / Math.PI);
}
/**
* Converts a set of Longitude and Latitude co-ordinates to UTM
* using the WGS84 ellipsoid.
*
* @private
* @param {object} ll Object literal with lat and lon properties
*     representing the WGS84 coordinate to be converted.
* @return {object} Object literal containing the UTM value with easting,
*     northing, zoneNumber and zoneLetter properties, and an optional
*     accuracy property in digits. Returns null if the conversion failed.
*/
function LLtoUTM(ll) {
	var Lat = ll.lat;
	var Long = ll.lon;
	var a = 6378137;
	var eccSquared = .00669438;
	var k0 = .9996;
	var LongOrigin;
	var eccPrimeSquared;
	var N, T, C, A, M;
	var LatRad = degToRad(Lat);
	var LongRad = degToRad(Long);
	var LongOriginRad;
	var ZoneNumber = Math.floor((Long + 180) / 6) + 1;
	if (Long === 180) ZoneNumber = 60;
	if (Lat >= 56 && Lat < 64 && Long >= 3 && Long < 12) ZoneNumber = 32;
	if (Lat >= 72 && Lat < 84) {
		if (Long >= 0 && Long < 9) ZoneNumber = 31;
		else if (Long >= 9 && Long < 21) ZoneNumber = 33;
		else if (Long >= 21 && Long < 33) ZoneNumber = 35;
		else if (Long >= 33 && Long < 42) ZoneNumber = 37;
	}
	LongOrigin = (ZoneNumber - 1) * 6 - 180 + 3;
	LongOriginRad = degToRad(LongOrigin);
	eccPrimeSquared = eccSquared / (1 - eccSquared);
	N = a / Math.sqrt(1 - eccSquared * Math.sin(LatRad) * Math.sin(LatRad));
	T = Math.tan(LatRad) * Math.tan(LatRad);
	C = eccPrimeSquared * Math.cos(LatRad) * Math.cos(LatRad);
	A = Math.cos(LatRad) * (LongRad - LongOriginRad);
	M = a * ((1 - eccSquared / 4 - 3 * eccSquared * eccSquared / 64 - 5 * eccSquared * eccSquared * eccSquared / 256) * LatRad - (3 * eccSquared / 8 + 3 * eccSquared * eccSquared / 32 + 45 * eccSquared * eccSquared * eccSquared / 1024) * Math.sin(2 * LatRad) + (15 * eccSquared * eccSquared / 256 + 45 * eccSquared * eccSquared * eccSquared / 1024) * Math.sin(4 * LatRad) - 35 * eccSquared * eccSquared * eccSquared / 3072 * Math.sin(6 * LatRad));
	var UTMEasting = k0 * N * (A + (1 - T + C) * A * A * A / 6 + (5 - 18 * T + T * T + 72 * C - 58 * eccPrimeSquared) * A * A * A * A * A / 120) + 5e5;
	var UTMNorthing = k0 * (M + N * Math.tan(LatRad) * (A * A / 2 + (5 - T + 9 * C + 4 * C * C) * A * A * A * A / 24 + (61 - 58 * T + T * T + 600 * C - 330 * eccPrimeSquared) * A * A * A * A * A * A / 720));
	if (Lat < 0) UTMNorthing += 1e7;
	return {
		northing: Math.round(UTMNorthing),
		easting: Math.round(UTMEasting),
		zoneNumber: ZoneNumber,
		zoneLetter: getLetterDesignator(Lat)
	};
}
/**
* Converts UTM coords to lat/long, using the WGS84 ellipsoid. This is a convenience
* class where the Zone can be specified as a single string eg."60N" which
* is then broken down into the ZoneNumber and ZoneLetter.
*
* @private
* @param {object} utm An object literal with northing, easting, zoneNumber
*     and zoneLetter properties. If an optional accuracy property is
*     provided (in meters), a bounding box will be returned instead of
*     latitude and longitude.
* @return {object} An object literal containing either lat and lon values
*     (if no accuracy was provided), or top, right, bottom and left values
*     for the bounding box calculated according to the provided accuracy.
*     Returns null if the conversion failed.
*/
function UTMtoLL(utm) {
	var UTMNorthing = utm.northing;
	var UTMEasting = utm.easting;
	var zoneLetter = utm.zoneLetter;
	var zoneNumber = utm.zoneNumber;
	if (zoneNumber < 0 || zoneNumber > 60) return null;
	var k0 = .9996;
	var a = 6378137;
	var eccSquared = .00669438;
	var eccPrimeSquared;
	var e1 = (1 - Math.sqrt(1 - eccSquared)) / (1 + Math.sqrt(1 - eccSquared));
	var N1, T1, C1, R1, D, M;
	var LongOrigin;
	var mu, phi1Rad;
	var x = UTMEasting - 5e5;
	var y = UTMNorthing;
	if (zoneLetter < "N") y -= 1e7;
	LongOrigin = (zoneNumber - 1) * 6 - 180 + 3;
	eccPrimeSquared = eccSquared / (1 - eccSquared);
	M = y / k0;
	mu = M / (a * (1 - eccSquared / 4 - 3 * eccSquared * eccSquared / 64 - 5 * eccSquared * eccSquared * eccSquared / 256));
	phi1Rad = mu + (3 * e1 / 2 - 27 * e1 * e1 * e1 / 32) * Math.sin(2 * mu) + (21 * e1 * e1 / 16 - 55 * e1 * e1 * e1 * e1 / 32) * Math.sin(4 * mu) + 151 * e1 * e1 * e1 / 96 * Math.sin(6 * mu);
	N1 = a / Math.sqrt(1 - eccSquared * Math.sin(phi1Rad) * Math.sin(phi1Rad));
	T1 = Math.tan(phi1Rad) * Math.tan(phi1Rad);
	C1 = eccPrimeSquared * Math.cos(phi1Rad) * Math.cos(phi1Rad);
	R1 = a * (1 - eccSquared) / Math.pow(1 - eccSquared * Math.sin(phi1Rad) * Math.sin(phi1Rad), 1.5);
	D = x / (N1 * k0);
	var lat = phi1Rad - N1 * Math.tan(phi1Rad) / R1 * (D * D / 2 - (5 + 3 * T1 + 10 * C1 - 4 * C1 * C1 - 9 * eccPrimeSquared) * D * D * D * D / 24 + (61 + 90 * T1 + 298 * C1 + 45 * T1 * T1 - 252 * eccPrimeSquared - 3 * C1 * C1) * D * D * D * D * D * D / 720);
	lat = radToDeg(lat);
	var lon = (D - (1 + 2 * T1 + C1) * D * D * D / 6 + (5 - 2 * C1 + 28 * T1 - 3 * C1 * C1 + 8 * eccPrimeSquared + 24 * T1 * T1) * D * D * D * D * D / 120) / Math.cos(phi1Rad);
	lon = LongOrigin + radToDeg(lon);
	var result;
	if (utm.accuracy) {
		var topRight = UTMtoLL({
			northing: utm.northing + utm.accuracy,
			easting: utm.easting + utm.accuracy,
			zoneLetter: utm.zoneLetter,
			zoneNumber: utm.zoneNumber
		});
		result = {
			top: topRight.lat,
			right: topRight.lon,
			bottom: lat,
			left: lon
		};
	} else result = {
		lat,
		lon
	};
	return result;
}
/**
* Calculates the MGRS letter designator for the given latitude.
*
* @private
* @param {number} lat The latitude in WGS84 to get the letter designator
*     for.
* @return {char} The letter designator.
*/
function getLetterDesignator(lat) {
	var LetterDesignator = "Z";
	if (84 >= lat && lat >= 72) LetterDesignator = "X";
	else if (72 > lat && lat >= 64) LetterDesignator = "W";
	else if (64 > lat && lat >= 56) LetterDesignator = "V";
	else if (56 > lat && lat >= 48) LetterDesignator = "U";
	else if (48 > lat && lat >= 40) LetterDesignator = "T";
	else if (40 > lat && lat >= 32) LetterDesignator = "S";
	else if (32 > lat && lat >= 24) LetterDesignator = "R";
	else if (24 > lat && lat >= 16) LetterDesignator = "Q";
	else if (16 > lat && lat >= 8) LetterDesignator = "P";
	else if (8 > lat && lat >= 0) LetterDesignator = "N";
	else if (0 > lat && lat >= -8) LetterDesignator = "M";
	else if (-8 > lat && lat >= -16) LetterDesignator = "L";
	else if (-16 > lat && lat >= -24) LetterDesignator = "K";
	else if (-24 > lat && lat >= -32) LetterDesignator = "J";
	else if (-32 > lat && lat >= -40) LetterDesignator = "H";
	else if (-40 > lat && lat >= -48) LetterDesignator = "G";
	else if (-48 > lat && lat >= -56) LetterDesignator = "F";
	else if (-56 > lat && lat >= -64) LetterDesignator = "E";
	else if (-64 > lat && lat >= -72) LetterDesignator = "D";
	else if (-72 > lat && lat >= -80) LetterDesignator = "C";
	return LetterDesignator;
}
/**
* Encodes a UTM location as MGRS string.
*
* @private
* @param {object} utm An object literal with easting, northing,
*     zoneLetter, zoneNumber
* @param {number} accuracy Accuracy in digits (1-5).
* @return {string} MGRS string for the given UTM location.
*/
function encode(utm, accuracy) {
	var seasting = "00000" + utm.easting, snorthing = "00000" + utm.northing;
	return utm.zoneNumber + utm.zoneLetter + get100kID(utm.easting, utm.northing, utm.zoneNumber) + seasting.substr(seasting.length - 5, accuracy) + snorthing.substr(snorthing.length - 5, accuracy);
}
/**
* Get the two letter 100k designator for a given UTM easting,
* northing and zone number value.
*
* @private
* @param {number} easting
* @param {number} northing
* @param {number} zoneNumber
* @return the two letter 100k designator for the given UTM location.
*/
function get100kID(easting, northing, zoneNumber) {
	var setParm = get100kSetForZone(zoneNumber);
	return getLetter100kID(Math.floor(easting / 1e5), Math.floor(northing / 1e5) % 20, setParm);
}
/**
* Given a UTM zone number, figure out the MGRS 100K set it is in.
*
* @private
* @param {number} i An UTM zone number.
* @return {number} the 100k set the UTM zone is in.
*/
function get100kSetForZone(i) {
	var setParm = i % NUM_100K_SETS;
	if (setParm === 0) setParm = NUM_100K_SETS;
	return setParm;
}
/**
* Get the two-letter MGRS 100k designator given information
* translated from the UTM northing, easting and zone number.
*
* @private
* @param {number} column the column index as it relates to the MGRS
*        100k set spreadsheet, created from the UTM easting.
*        Values are 1-8.
* @param {number} row the row index as it relates to the MGRS 100k set
*        spreadsheet, created from the UTM northing value. Values
*        are from 0-19.
* @param {number} parm the set block, as it relates to the MGRS 100k set
*        spreadsheet, created from the UTM zone. Values are from
*        1-60.
* @return two letter MGRS 100k code.
*/
function getLetter100kID(column, row, parm) {
	var index = parm - 1;
	var colOrigin = SET_ORIGIN_COLUMN_LETTERS.charCodeAt(index);
	var rowOrigin = SET_ORIGIN_ROW_LETTERS.charCodeAt(index);
	var colInt = colOrigin + column - 1;
	var rowInt = rowOrigin + row;
	var rollover = false;
	if (colInt > Z) {
		colInt = colInt - Z + A - 1;
		rollover = true;
	}
	if (colInt === I || colOrigin < I && colInt > I || (colInt > I || colOrigin < I) && rollover) colInt++;
	if (colInt === O || colOrigin < O && colInt > O || (colInt > O || colOrigin < O) && rollover) {
		colInt++;
		if (colInt === I) colInt++;
	}
	if (colInt > Z) colInt = colInt - Z + A - 1;
	if (rowInt > V) {
		rowInt = rowInt - V + A - 1;
		rollover = true;
	} else rollover = false;
	if (rowInt === I || rowOrigin < I && rowInt > I || (rowInt > I || rowOrigin < I) && rollover) rowInt++;
	if (rowInt === O || rowOrigin < O && rowInt > O || (rowInt > O || rowOrigin < O) && rollover) {
		rowInt++;
		if (rowInt === I) rowInt++;
	}
	if (rowInt > V) rowInt = rowInt - V + A - 1;
	return String.fromCharCode(colInt) + String.fromCharCode(rowInt);
}
/**
* Decode the UTM parameters from a MGRS string.
*
* @private
* @param {string} mgrsString an UPPERCASE coordinate string is expected.
* @return {object} An object literal with easting, northing, zoneLetter,
*     zoneNumber and accuracy (in meters) properties.
*/
function decode(mgrsString) {
	if (mgrsString && mgrsString.length === 0) throw "MGRSPoint coverting from nothing";
	var length = mgrsString.length;
	var hunK = null;
	var sb = "";
	var testChar;
	var i = 0;
	while (!/[A-Z]/.test(testChar = mgrsString.charAt(i))) {
		if (i >= 2) throw "MGRSPoint bad conversion from: " + mgrsString;
		sb += testChar;
		i++;
	}
	var zoneNumber = parseInt(sb, 10);
	if (i === 0 || i + 3 > length) throw "MGRSPoint bad conversion from: " + mgrsString;
	var zoneLetter = mgrsString.charAt(i++);
	if (zoneLetter <= "A" || zoneLetter === "B" || zoneLetter === "Y" || zoneLetter >= "Z" || zoneLetter === "I" || zoneLetter === "O") throw "MGRSPoint zone letter " + zoneLetter + " not handled: " + mgrsString;
	hunK = mgrsString.substring(i, i += 2);
	var set = get100kSetForZone(zoneNumber);
	var east100k = getEastingFromChar(hunK.charAt(0), set);
	var north100k = getNorthingFromChar(hunK.charAt(1), set);
	while (north100k < getMinNorthing(zoneLetter)) north100k += 2e6;
	var remainder = length - i;
	if (remainder % 2 !== 0) throw "MGRSPoint has to have an even number \nof digits after the zone letter and two 100km letters - front \nhalf for easting meters, second half for \nnorthing meters" + mgrsString;
	var sep = remainder / 2;
	var sepEasting = 0;
	var sepNorthing = 0;
	var accuracyBonus, sepEastingString, sepNorthingString, easting, northing;
	if (sep > 0) {
		accuracyBonus = 1e5 / Math.pow(10, sep);
		sepEastingString = mgrsString.substring(i, i + sep);
		sepEasting = parseFloat(sepEastingString) * accuracyBonus;
		sepNorthingString = mgrsString.substring(i + sep);
		sepNorthing = parseFloat(sepNorthingString) * accuracyBonus;
	}
	easting = sepEasting + east100k;
	northing = sepNorthing + north100k;
	return {
		easting,
		northing,
		zoneLetter,
		zoneNumber,
		accuracy: accuracyBonus
	};
}
/**
* Given the first letter from a two-letter MGRS 100k zone, and given the
* MGRS table set for the zone number, figure out the easting value that
* should be added to the other, secondary easting value.
*
* @private
* @param {char} e The first letter from a two-letter MGRS 100´k zone.
* @param {number} set The MGRS table set for the zone number.
* @return {number} The easting value for the given letter and set.
*/
function getEastingFromChar(e, set) {
	var curCol = SET_ORIGIN_COLUMN_LETTERS.charCodeAt(set - 1);
	var eastingValue = 1e5;
	var rewindMarker = false;
	while (curCol !== e.charCodeAt(0)) {
		curCol++;
		if (curCol === I) curCol++;
		if (curCol === O) curCol++;
		if (curCol > Z) {
			if (rewindMarker) throw "Bad character: " + e;
			curCol = A;
			rewindMarker = true;
		}
		eastingValue += 1e5;
	}
	return eastingValue;
}
/**
* Given the second letter from a two-letter MGRS 100k zone, and given the
* MGRS table set for the zone number, figure out the northing value that
* should be added to the other, secondary northing value. You have to
* remember that Northings are determined from the equator, and the vertical
* cycle of letters mean a 2000000 additional northing meters. This happens
* approx. every 18 degrees of latitude. This method does *NOT* count any
* additional northings. You have to figure out how many 2000000 meters need
* to be added for the zone letter of the MGRS coordinate.
*
* @private
* @param {char} n Second letter of the MGRS 100k zone
* @param {number} set The MGRS table set number, which is dependent on the
*     UTM zone number.
* @return {number} The northing value for the given letter and set.
*/
function getNorthingFromChar(n, set) {
	if (n > "V") throw "MGRSPoint given invalid Northing " + n;
	var curRow = SET_ORIGIN_ROW_LETTERS.charCodeAt(set - 1);
	var northingValue = 0;
	var rewindMarker = false;
	while (curRow !== n.charCodeAt(0)) {
		curRow++;
		if (curRow === I) curRow++;
		if (curRow === O) curRow++;
		if (curRow > V) {
			if (rewindMarker) throw "Bad character: " + n;
			curRow = A;
			rewindMarker = true;
		}
		northingValue += 1e5;
	}
	return northingValue;
}
/**
* The function getMinNorthing returns the minimum northing value of a MGRS
* zone.
*
* Ported from Geotrans' c Lattitude_Band_Value structure table.
*
* @private
* @param {char} zoneLetter The MGRS zone to get the min northing for.
* @return {number}
*/
function getMinNorthing(zoneLetter) {
	var northing;
	switch (zoneLetter) {
		case "C":
			northing = 11e5;
			break;
		case "D":
			northing = 2e6;
			break;
		case "E":
			northing = 28e5;
			break;
		case "F":
			northing = 37e5;
			break;
		case "G":
			northing = 46e5;
			break;
		case "H":
			northing = 55e5;
			break;
		case "J":
			northing = 64e5;
			break;
		case "K":
			northing = 73e5;
			break;
		case "L":
			northing = 82e5;
			break;
		case "M":
			northing = 91e5;
			break;
		case "N":
			northing = 0;
			break;
		case "P":
			northing = 8e5;
			break;
		case "Q":
			northing = 17e5;
			break;
		case "R":
			northing = 26e5;
			break;
		case "S":
			northing = 35e5;
			break;
		case "T":
			northing = 44e5;
			break;
		case "U":
			northing = 53e5;
			break;
		case "V":
			northing = 62e5;
			break;
		case "W":
			northing = 7e6;
			break;
		case "X":
			northing = 79e5;
			break;
		default: northing = -1;
	}
	if (northing >= 0) return northing;
	else throw "Invalid zone letter: " + zoneLetter;
}
var NUM_100K_SETS, SET_ORIGIN_COLUMN_LETTERS, SET_ORIGIN_ROW_LETTERS, A, I, O, V, Z, mgrs_default;
var init_mgrs = __esmMin((() => {
	NUM_100K_SETS = 6;
	SET_ORIGIN_COLUMN_LETTERS = "AJSAJS";
	SET_ORIGIN_ROW_LETTERS = "AFAFAF";
	A = 65;
	I = 73;
	O = 79;
	V = 86;
	Z = 90;
	mgrs_default = {
		forward: forward$29,
		inverse: inverse$29,
		toPoint
	};
}));
//#endregion
//#region node_modules/proj4/lib/Point.js
function Point(x, y, z) {
	if (!(this instanceof Point)) return new Point(x, y, z);
	if (Array.isArray(x)) {
		this.x = x[0];
		this.y = x[1];
		this.z = x[2] || 0;
	} else if (typeof x === "object") {
		this.x = x.x;
		this.y = x.y;
		this.z = x.z || 0;
	} else if (typeof x === "string" && typeof y === "undefined") {
		var coords = x.split(",");
		this.x = parseFloat(coords[0], 10);
		this.y = parseFloat(coords[1], 10);
		this.z = parseFloat(coords[2], 10) || 0;
	} else {
		this.x = x;
		this.y = y;
		this.z = z || 0;
	}
	console.warn("proj4.Point will be removed in version 3, use proj4.toPoint");
}
var init_Point = __esmMin((() => {
	init_mgrs();
	Point.fromMGRS = function(mgrsStr) {
		return new Point(toPoint(mgrsStr));
	};
	Point.prototype.toMGRS = function(accuracy) {
		return forward$29([this.x, this.y], accuracy);
	};
}));
//#endregion
//#region node_modules/proj4/lib/common/pj_enfn.js
function pj_enfn_default(es) {
	var en = [];
	en[0] = C00 - es * (C02 + es * (C04 + es * (C06 + es * C08)));
	en[1] = es * (C22 - es * (C04 + es * (C06 + es * C08)));
	var t = es * es;
	en[2] = t * (C44 - es * (C46 + es * C48));
	t *= es;
	en[3] = t * (C66 - es * C68);
	en[4] = t * es * C88;
	return en;
}
var C00, C02, C04, C06, C08, C22, C44, C46, C48, C66, C68, C88;
var init_pj_enfn = __esmMin((() => {
	C00 = 1;
	C02 = .25;
	C04 = .046875;
	C06 = .01953125;
	C08 = .01068115234375;
	C22 = .75;
	C44 = .46875;
	C46 = .013020833333333334;
	C48 = .007120768229166667;
	C66 = .3645833333333333;
	C68 = .005696614583333333;
	C88 = .3076171875;
}));
//#endregion
//#region node_modules/proj4/lib/common/pj_mlfn.js
function pj_mlfn_default(phi, sphi, cphi, en) {
	cphi *= sphi;
	sphi *= sphi;
	return en[0] * phi - cphi * (en[1] + sphi * (en[2] + sphi * (en[3] + sphi * en[4])));
}
var init_pj_mlfn = __esmMin((() => {}));
//#endregion
//#region node_modules/proj4/lib/common/pj_inv_mlfn.js
function pj_inv_mlfn_default(arg, es, en) {
	var k = 1 / (1 - es);
	var phi = arg;
	for (var i = MAX_ITER$3; i; --i) {
		var s = Math.sin(phi);
		var t = 1 - es * s * s;
		t = (pj_mlfn_default(phi, s, Math.cos(phi), en) - arg) * (t * Math.sqrt(t)) * k;
		phi -= t;
		if (Math.abs(t) < 1e-10) return phi;
	}
	return phi;
}
var MAX_ITER$3;
var init_pj_inv_mlfn = __esmMin((() => {
	init_pj_mlfn();
	init_values();
	MAX_ITER$3 = 20;
}));
//#endregion
//#region node_modules/proj4/lib/projections/tmerc.js
function init$29() {
	this.x0 = this.x0 !== void 0 ? this.x0 : 0;
	this.y0 = this.y0 !== void 0 ? this.y0 : 0;
	this.long0 = this.long0 !== void 0 ? this.long0 : 0;
	this.lat0 = this.lat0 !== void 0 ? this.lat0 : 0;
	if (this.es) {
		this.en = pj_enfn_default(this.es);
		this.ml0 = pj_mlfn_default(this.lat0, Math.sin(this.lat0), Math.cos(this.lat0), this.en);
	}
}
/**
Transverse Mercator Forward  - long/lat to x/y
long/lat in radians
*/
function forward$28(p) {
	var lon = p.x;
	var lat = p.y;
	var delta_lon = adjust_lon_default(lon - this.long0);
	var con;
	var x, y;
	var sin_phi = Math.sin(lat);
	var cos_phi = Math.cos(lat);
	if (!this.es) {
		var b = cos_phi * Math.sin(delta_lon);
		if (Math.abs(Math.abs(b) - 1) < 1e-10) return 93;
		else {
			x = .5 * this.a * this.k0 * Math.log((1 + b) / (1 - b)) + this.x0;
			y = cos_phi * Math.cos(delta_lon) / Math.sqrt(1 - Math.pow(b, 2));
			b = Math.abs(y);
			if (b >= 1) {
				if (b - 1 > 1e-10) return 93;
				else y = 0;
			} else y = Math.acos(y);
			if (lat < 0) y = -y;
			y = this.a * this.k0 * (y - this.lat0) + this.y0;
		}
	} else {
		var al = cos_phi * delta_lon;
		var als = Math.pow(al, 2);
		var c = this.ep2 * Math.pow(cos_phi, 2);
		var cs = Math.pow(c, 2);
		var t = Math.pow(Math.abs(cos_phi) > 1e-10 ? Math.tan(lat) : 0, 2);
		var ts = Math.pow(t, 2);
		con = 1 - this.es * Math.pow(sin_phi, 2);
		al = al / Math.sqrt(con);
		var ml = pj_mlfn_default(lat, sin_phi, cos_phi, this.en);
		x = this.a * (this.k0 * al * (1 + als / 6 * (1 - t + c + als / 20 * (5 - 18 * t + ts + 14 * c - 58 * t * c + als / 42 * (61 + 179 * ts - ts * t - 479 * t))))) + this.x0;
		y = this.a * (this.k0 * (ml - this.ml0 + sin_phi * delta_lon * al / 2 * (1 + als / 12 * (5 - t + 9 * c + 4 * cs + als / 30 * (61 + ts - 58 * t + 270 * c - 330 * t * c + als / 56 * (1385 + 543 * ts - ts * t - 3111 * t)))))) + this.y0;
	}
	p.x = x;
	p.y = y;
	return p;
}
/**
Transverse Mercator Inverse  -  x/y to long/lat
*/
function inverse$28(p) {
	var con, phi;
	var lat, lon;
	var x = (p.x - this.x0) * (1 / this.a);
	var y = (p.y - this.y0) * (1 / this.a);
	if (!this.es) {
		var f = Math.exp(x / this.k0);
		var g = .5 * (f - 1 / f);
		var temp = this.lat0 + y / this.k0;
		var h = Math.cos(temp);
		con = Math.sqrt((1 - Math.pow(h, 2)) / (1 + Math.pow(g, 2)));
		lat = Math.asin(con);
		if (y < 0) lat = -lat;
		if (g === 0 && h === 0) lon = 0;
		else lon = adjust_lon_default(Math.atan2(g, h) + this.long0);
	} else {
		con = this.ml0 + y / this.k0;
		phi = pj_inv_mlfn_default(con, this.es, this.en);
		if (Math.abs(phi) < HALF_PI) {
			var sin_phi = Math.sin(phi);
			var cos_phi = Math.cos(phi);
			var tan_phi = Math.abs(cos_phi) > 1e-10 ? Math.tan(phi) : 0;
			var c = this.ep2 * Math.pow(cos_phi, 2);
			var cs = Math.pow(c, 2);
			var t = Math.pow(tan_phi, 2);
			var ts = Math.pow(t, 2);
			con = 1 - this.es * Math.pow(sin_phi, 2);
			var d = x * Math.sqrt(con) / this.k0;
			var ds = Math.pow(d, 2);
			con = con * tan_phi;
			lat = phi - con * ds / (1 - this.es) * .5 * (1 - ds / 12 * (5 + 3 * t - 9 * c * t + c - 4 * cs - ds / 30 * (61 + 90 * t - 252 * c * t + 45 * ts + 46 * c - ds / 56 * (1385 + 3633 * t + 4095 * ts + 1574 * ts * t))));
			lon = adjust_lon_default(this.long0 + d * (1 - ds / 6 * (1 + 2 * t + c - ds / 20 * (5 + 28 * t + 24 * ts + 8 * c * t + 6 * c - ds / 42 * (61 + 662 * t + 1320 * ts + 720 * ts * t)))) / cos_phi);
		} else {
			lat = HALF_PI * sign_default(y);
			lon = 0;
		}
	}
	p.x = lon;
	p.y = lat;
	return p;
}
var names$29, tmerc_default;
var init_tmerc = __esmMin((() => {
	init_pj_enfn();
	init_pj_mlfn();
	init_pj_inv_mlfn();
	init_adjust_lon();
	init_values();
	init_sign();
	names$29 = ["Fast_Transverse_Mercator", "Fast Transverse Mercator"];
	tmerc_default = {
		init: init$29,
		forward: forward$28,
		inverse: inverse$28,
		names: names$29
	};
}));
//#endregion
//#region node_modules/proj4/lib/common/sinh.js
function sinh_default(x) {
	var r = Math.exp(x);
	r = (r - 1 / r) / 2;
	return r;
}
var init_sinh = __esmMin((() => {}));
//#endregion
//#region node_modules/proj4/lib/common/hypot.js
function hypot_default(x, y) {
	x = Math.abs(x);
	y = Math.abs(y);
	var a = Math.max(x, y);
	var b = Math.min(x, y) / (a ? a : 1);
	return a * Math.sqrt(1 + Math.pow(b, 2));
}
var init_hypot = __esmMin((() => {}));
//#endregion
//#region node_modules/proj4/lib/common/log1py.js
function log1py_default(x) {
	var y = 1 + x;
	var z = y - 1;
	return z === 0 ? x : x * Math.log(y) / z;
}
var init_log1py = __esmMin((() => {}));
//#endregion
//#region node_modules/proj4/lib/common/asinhy.js
function asinhy_default(x) {
	var y = Math.abs(x);
	y = log1py_default(y * (1 + y / (hypot_default(1, y) + 1)));
	return x < 0 ? -y : y;
}
var init_asinhy = __esmMin((() => {
	init_hypot();
	init_log1py();
}));
//#endregion
//#region node_modules/proj4/lib/common/gatg.js
function gatg_default(pp, B) {
	var cos_2B = 2 * Math.cos(2 * B);
	var i = pp.length - 1;
	var h1 = pp[i];
	var h2 = 0;
	var h;
	while (--i >= 0) {
		h = -h2 + cos_2B * h1 + pp[i];
		h2 = h1;
		h1 = h;
	}
	return B + h * Math.sin(2 * B);
}
var init_gatg = __esmMin((() => {}));
//#endregion
//#region node_modules/proj4/lib/common/clens.js
function clens_default(pp, arg_r) {
	var r = 2 * Math.cos(arg_r);
	var i = pp.length - 1;
	var hr1 = pp[i];
	var hr2 = 0;
	var hr;
	while (--i >= 0) {
		hr = -hr2 + r * hr1 + pp[i];
		hr2 = hr1;
		hr1 = hr;
	}
	return Math.sin(arg_r) * hr;
}
var init_clens = __esmMin((() => {}));
//#endregion
//#region node_modules/proj4/lib/common/cosh.js
function cosh_default(x) {
	var r = Math.exp(x);
	r = (r + 1 / r) / 2;
	return r;
}
var init_cosh = __esmMin((() => {}));
//#endregion
//#region node_modules/proj4/lib/common/clens_cmplx.js
function clens_cmplx_default(pp, arg_r, arg_i) {
	var sin_arg_r = Math.sin(arg_r);
	var cos_arg_r = Math.cos(arg_r);
	var sinh_arg_i = sinh_default(arg_i);
	var cosh_arg_i = cosh_default(arg_i);
	var r = 2 * cos_arg_r * cosh_arg_i;
	var i = -2 * sin_arg_r * sinh_arg_i;
	var j = pp.length - 1;
	var hr = pp[j];
	var hi1 = 0;
	var hr1 = 0;
	var hi = 0;
	var hr2;
	var hi2;
	while (--j >= 0) {
		hr2 = hr1;
		hi2 = hi1;
		hr1 = hr;
		hi1 = hi;
		hr = -hr2 + r * hr1 - i * hi1 + pp[j];
		hi = -hi2 + i * hr1 + r * hi1;
	}
	r = sin_arg_r * cosh_arg_i;
	i = cos_arg_r * sinh_arg_i;
	return [r * hr - i * hi, r * hi + i * hr];
}
var init_clens_cmplx = __esmMin((() => {
	init_sinh();
	init_cosh();
}));
//#endregion
//#region node_modules/proj4/lib/projections/etmerc.js
function init$28() {
	if (!this.approx && (isNaN(this.es) || this.es <= 0)) throw new Error("Incorrect elliptical usage. Try using the +approx option in the proj string, or PROJECTION[\"Fast_Transverse_Mercator\"] in the WKT.");
	if (this.approx) {
		tmerc_default.init.apply(this);
		this.forward = tmerc_default.forward;
		this.inverse = tmerc_default.inverse;
	}
	this.x0 = this.x0 !== void 0 ? this.x0 : 0;
	this.y0 = this.y0 !== void 0 ? this.y0 : 0;
	this.long0 = this.long0 !== void 0 ? this.long0 : 0;
	this.lat0 = this.lat0 !== void 0 ? this.lat0 : 0;
	this.cgb = [];
	this.cbg = [];
	this.utg = [];
	this.gtu = [];
	var f = this.es / (1 + Math.sqrt(1 - this.es));
	var n = f / (2 - f);
	var np = n;
	this.cgb[0] = n * (2 + n * (-2 / 3 + n * (-2 + n * (116 / 45 + n * (26 / 45 + n * (-2854 / 675))))));
	this.cbg[0] = n * (-2 + n * (2 / 3 + n * (4 / 3 + n * (-82 / 45 + n * (32 / 45 + n * (4642 / 4725))))));
	np = np * n;
	this.cgb[1] = np * (7 / 3 + n * (-8 / 5 + n * (-227 / 45 + n * (2704 / 315 + n * (2323 / 945)))));
	this.cbg[1] = np * (5 / 3 + n * (-16 / 15 + n * (-13 / 9 + n * (904 / 315 + n * (-1522 / 945)))));
	np = np * n;
	this.cgb[2] = np * (56 / 15 + n * (-136 / 35 + n * (-1262 / 105 + n * (73814 / 2835))));
	this.cbg[2] = np * (-26 / 15 + n * (34 / 21 + n * (8 / 5 + n * (-12686 / 2835))));
	np = np * n;
	this.cgb[3] = np * (4279 / 630 + n * (-332 / 35 + n * (-399572 / 14175)));
	this.cbg[3] = np * (1237 / 630 + n * (-12 / 5 + n * (-24832 / 14175)));
	np = np * n;
	this.cgb[4] = np * (4174 / 315 + n * (-144838 / 6237));
	this.cbg[4] = np * (-734 / 315 + n * (109598 / 31185));
	np = np * n;
	this.cgb[5] = np * (601676 / 22275);
	this.cbg[5] = np * (444337 / 155925);
	np = Math.pow(n, 2);
	this.Qn = this.k0 / (1 + n) * (1 + np * (1 / 4 + np * (1 / 64 + np / 256)));
	this.utg[0] = n * (-.5 + n * (2 / 3 + n * (-37 / 96 + n * (1 / 360 + n * (81 / 512 + n * (-96199 / 604800))))));
	this.gtu[0] = n * (.5 + n * (-2 / 3 + n * (5 / 16 + n * (41 / 180 + n * (-127 / 288 + n * (7891 / 37800))))));
	this.utg[1] = np * (-1 / 48 + n * (-1 / 15 + n * (437 / 1440 + n * (-46 / 105 + n * (1118711 / 3870720)))));
	this.gtu[1] = np * (13 / 48 + n * (-3 / 5 + n * (557 / 1440 + n * (281 / 630 + n * (-1983433 / 1935360)))));
	np = np * n;
	this.utg[2] = np * (-17 / 480 + n * (37 / 840 + n * (209 / 4480 + n * (-5569 / 90720))));
	this.gtu[2] = np * (61 / 240 + n * (-103 / 140 + n * (15061 / 26880 + n * (167603 / 181440))));
	np = np * n;
	this.utg[3] = np * (-4397 / 161280 + n * (11 / 504 + n * (830251 / 7257600)));
	this.gtu[3] = np * (49561 / 161280 + n * (-179 / 168 + n * (6601661 / 7257600)));
	np = np * n;
	this.utg[4] = np * (-4583 / 161280 + n * (108847 / 3991680));
	this.gtu[4] = np * (34729 / 80640 + n * (-3418889 / 1995840));
	np = np * n;
	this.utg[5] = np * (-20648693 / 638668800);
	this.gtu[5] = np * (212378941 / 319334400);
	var Z = gatg_default(this.cbg, this.lat0);
	this.Zb = -this.Qn * (Z + clens_default(this.gtu, 2 * Z));
}
function forward$27(p) {
	var Ce = adjust_lon_default(p.x - this.long0);
	var Cn = p.y;
	Cn = gatg_default(this.cbg, Cn);
	var sin_Cn = Math.sin(Cn);
	var cos_Cn = Math.cos(Cn);
	var sin_Ce = Math.sin(Ce);
	var cos_Ce = Math.cos(Ce);
	Cn = Math.atan2(sin_Cn, cos_Ce * cos_Cn);
	Ce = Math.atan2(sin_Ce * cos_Cn, hypot_default(sin_Cn, cos_Cn * cos_Ce));
	Ce = asinhy_default(Math.tan(Ce));
	var tmp = clens_cmplx_default(this.gtu, 2 * Cn, 2 * Ce);
	Cn = Cn + tmp[0];
	Ce = Ce + tmp[1];
	var x;
	var y;
	if (Math.abs(Ce) <= 2.623395162778) {
		x = this.a * (this.Qn * Ce) + this.x0;
		y = this.a * (this.Qn * Cn + this.Zb) + this.y0;
	} else {
		x = Infinity;
		y = Infinity;
	}
	p.x = x;
	p.y = y;
	return p;
}
function inverse$27(p) {
	var Ce = (p.x - this.x0) * (1 / this.a);
	var Cn = (p.y - this.y0) * (1 / this.a);
	Cn = (Cn - this.Zb) / this.Qn;
	Ce = Ce / this.Qn;
	var lon;
	var lat;
	if (Math.abs(Ce) <= 2.623395162778) {
		var tmp = clens_cmplx_default(this.utg, 2 * Cn, 2 * Ce);
		Cn = Cn + tmp[0];
		Ce = Ce + tmp[1];
		Ce = Math.atan(sinh_default(Ce));
		var sin_Cn = Math.sin(Cn);
		var cos_Cn = Math.cos(Cn);
		var sin_Ce = Math.sin(Ce);
		var cos_Ce = Math.cos(Ce);
		Cn = Math.atan2(sin_Cn * cos_Ce, hypot_default(sin_Ce, cos_Ce * cos_Cn));
		Ce = Math.atan2(sin_Ce, cos_Ce * cos_Cn);
		lon = adjust_lon_default(Ce + this.long0);
		lat = gatg_default(this.cgb, Cn);
	} else {
		lon = Infinity;
		lat = Infinity;
	}
	p.x = lon;
	p.y = lat;
	return p;
}
var names$28, etmerc_default;
var init_etmerc = __esmMin((() => {
	init_tmerc();
	init_sinh();
	init_hypot();
	init_asinhy();
	init_gatg();
	init_clens();
	init_clens_cmplx();
	init_adjust_lon();
	names$28 = [
		"Extended_Transverse_Mercator",
		"Extended Transverse Mercator",
		"etmerc",
		"Transverse_Mercator",
		"Transverse Mercator",
		"tmerc"
	];
	etmerc_default = {
		init: init$28,
		forward: forward$27,
		inverse: inverse$27,
		names: names$28
	};
}));
//#endregion
//#region node_modules/proj4/lib/common/adjust_zone.js
function adjust_zone_default(zone, lon) {
	if (zone === void 0) {
		zone = Math.floor((adjust_lon_default(lon) + Math.PI) * 30 / Math.PI) + 1;
		if (zone < 0) return 0;
		else if (zone > 60) return 60;
	}
	return zone;
}
var init_adjust_zone = __esmMin((() => {
	init_adjust_lon();
}));
//#endregion
//#region node_modules/proj4/lib/projections/utm.js
function init$27() {
	var zone = adjust_zone_default(this.zone, this.long0);
	if (zone === void 0) throw new Error("unknown utm zone");
	this.lat0 = 0;
	this.long0 = (6 * Math.abs(zone) - 183) * D2R$1;
	this.x0 = 5e5;
	this.y0 = this.utmSouth ? 1e7 : 0;
	this.k0 = .9996;
	etmerc_default.init.apply(this);
	this.forward = etmerc_default.forward;
	this.inverse = etmerc_default.inverse;
}
var dependsOn, names$27, utm_default;
var init_utm = __esmMin((() => {
	init_adjust_zone();
	init_etmerc();
	init_values();
	dependsOn = "etmerc";
	names$27 = ["Universal Transverse Mercator System", "utm"];
	utm_default = {
		init: init$27,
		names: names$27,
		dependsOn
	};
}));
//#endregion
//#region node_modules/proj4/lib/common/srat.js
function srat_default(esinp, exp) {
	return Math.pow((1 - esinp) / (1 + esinp), exp);
}
var init_srat = __esmMin((() => {}));
//#endregion
//#region node_modules/proj4/lib/projections/gauss.js
function init$26() {
	var sphi = Math.sin(this.lat0);
	var cphi = Math.cos(this.lat0);
	cphi *= cphi;
	this.rc = Math.sqrt(1 - this.es) / (1 - this.es * sphi * sphi);
	this.C = Math.sqrt(1 + this.es * cphi * cphi / (1 - this.es));
	this.phic0 = Math.asin(sphi / this.C);
	this.ratexp = .5 * this.C * this.e;
	this.K = Math.tan(.5 * this.phic0 + FORTPI) / (Math.pow(Math.tan(.5 * this.lat0 + FORTPI), this.C) * srat_default(this.e * sphi, this.ratexp));
}
function forward$26(p) {
	var lon = p.x;
	var lat = p.y;
	p.y = 2 * Math.atan(this.K * Math.pow(Math.tan(.5 * lat + FORTPI), this.C) * srat_default(this.e * Math.sin(lat), this.ratexp)) - HALF_PI;
	p.x = this.C * lon;
	return p;
}
function inverse$26(p) {
	var DEL_TOL = 1e-14;
	var lon = p.x / this.C;
	var lat = p.y;
	var num = Math.pow(Math.tan(.5 * lat + FORTPI) / this.K, 1 / this.C);
	for (var i = MAX_ITER$2; i > 0; --i) {
		lat = 2 * Math.atan(num * srat_default(this.e * Math.sin(p.y), -.5 * this.e)) - HALF_PI;
		if (Math.abs(lat - p.y) < DEL_TOL) break;
		p.y = lat;
	}
	if (!i) return null;
	p.x = lon;
	p.y = lat;
	return p;
}
var MAX_ITER$2, names$26, gauss_default;
var init_gauss = __esmMin((() => {
	init_srat();
	init_values();
	MAX_ITER$2 = 20;
	names$26 = ["gauss"];
	gauss_default = {
		init: init$26,
		forward: forward$26,
		inverse: inverse$26,
		names: names$26
	};
}));
//#endregion
//#region node_modules/proj4/lib/projections/sterea.js
function init$25() {
	gauss_default.init.apply(this);
	if (!this.rc) return;
	this.sinc0 = Math.sin(this.phic0);
	this.cosc0 = Math.cos(this.phic0);
	this.R2 = 2 * this.rc;
	if (!this.title) this.title = "Oblique Stereographic Alternative";
}
function forward$25(p) {
	var sinc, cosc, cosl, k;
	p.x = adjust_lon_default(p.x - this.long0);
	gauss_default.forward.apply(this, [p]);
	sinc = Math.sin(p.y);
	cosc = Math.cos(p.y);
	cosl = Math.cos(p.x);
	k = this.k0 * this.R2 / (1 + this.sinc0 * sinc + this.cosc0 * cosc * cosl);
	p.x = k * cosc * Math.sin(p.x);
	p.y = k * (this.cosc0 * sinc - this.sinc0 * cosc * cosl);
	p.x = this.a * p.x + this.x0;
	p.y = this.a * p.y + this.y0;
	return p;
}
function inverse$25(p) {
	var sinc, cosc, lon, lat, rho;
	p.x = (p.x - this.x0) / this.a;
	p.y = (p.y - this.y0) / this.a;
	p.x /= this.k0;
	p.y /= this.k0;
	if (rho = Math.sqrt(p.x * p.x + p.y * p.y)) {
		var c = 2 * Math.atan2(rho, this.R2);
		sinc = Math.sin(c);
		cosc = Math.cos(c);
		lat = Math.asin(cosc * this.sinc0 + p.y * sinc * this.cosc0 / rho);
		lon = Math.atan2(p.x * sinc, rho * this.cosc0 * cosc - p.y * this.sinc0 * sinc);
	} else {
		lat = this.phic0;
		lon = 0;
	}
	p.x = lon;
	p.y = lat;
	gauss_default.inverse.apply(this, [p]);
	p.x = adjust_lon_default(p.x + this.long0);
	return p;
}
var names$25, sterea_default;
var init_sterea = __esmMin((() => {
	init_gauss();
	init_adjust_lon();
	names$25 = [
		"Stereographic_North_Pole",
		"Oblique_Stereographic",
		"Polar_Stereographic",
		"sterea",
		"Oblique Stereographic Alternative",
		"Double_Stereographic"
	];
	sterea_default = {
		init: init$25,
		forward: forward$25,
		inverse: inverse$25,
		names: names$25
	};
}));
//#endregion
//#region node_modules/proj4/lib/projections/stere.js
function ssfn_(phit, sinphi, eccen) {
	sinphi *= eccen;
	return Math.tan(.5 * (HALF_PI + phit)) * Math.pow((1 - sinphi) / (1 + sinphi), .5 * eccen);
}
function init$24() {
	this.coslat0 = Math.cos(this.lat0);
	this.sinlat0 = Math.sin(this.lat0);
	if (this.sphere) {
		if (this.k0 === 1 && !isNaN(this.lat_ts) && Math.abs(this.coslat0) <= 1e-10) this.k0 = .5 * (1 + sign_default(this.lat0) * Math.sin(this.lat_ts));
	} else {
		if (Math.abs(this.coslat0) <= 1e-10) {
			if (this.lat0 > 0) this.con = 1;
			else this.con = -1;
		}
		this.cons = Math.sqrt(Math.pow(1 + this.e, 1 + this.e) * Math.pow(1 - this.e, 1 - this.e));
		if (this.k0 === 1 && !isNaN(this.lat_ts) && Math.abs(this.coslat0) <= 1e-10) this.k0 = .5 * this.cons * msfnz_default(this.e, Math.sin(this.lat_ts), Math.cos(this.lat_ts)) / tsfnz_default(this.e, this.con * this.lat_ts, this.con * Math.sin(this.lat_ts));
		this.ms1 = msfnz_default(this.e, this.sinlat0, this.coslat0);
		this.X0 = 2 * Math.atan(this.ssfn_(this.lat0, this.sinlat0, this.e)) - HALF_PI;
		this.cosX0 = Math.cos(this.X0);
		this.sinX0 = Math.sin(this.X0);
	}
}
function forward$24(p) {
	var lon = p.x;
	var lat = p.y;
	var sinlat = Math.sin(lat);
	var coslat = Math.cos(lat);
	var A, X, sinX, cosX, ts, rh;
	var dlon = adjust_lon_default(lon - this.long0);
	if (Math.abs(Math.abs(lon - this.long0) - Math.PI) <= 1e-10 && Math.abs(lat + this.lat0) <= 1e-10) {
		p.x = NaN;
		p.y = NaN;
		return p;
	}
	if (this.sphere) {
		A = 2 * this.k0 / (1 + this.sinlat0 * sinlat + this.coslat0 * coslat * Math.cos(dlon));
		p.x = this.a * A * coslat * Math.sin(dlon) + this.x0;
		p.y = this.a * A * (this.coslat0 * sinlat - this.sinlat0 * coslat * Math.cos(dlon)) + this.y0;
		return p;
	} else {
		X = 2 * Math.atan(this.ssfn_(lat, sinlat, this.e)) - HALF_PI;
		cosX = Math.cos(X);
		sinX = Math.sin(X);
		if (Math.abs(this.coslat0) <= 1e-10) {
			ts = tsfnz_default(this.e, lat * this.con, this.con * sinlat);
			rh = 2 * this.a * this.k0 * ts / this.cons;
			p.x = this.x0 + rh * Math.sin(lon - this.long0);
			p.y = this.y0 - this.con * rh * Math.cos(lon - this.long0);
			return p;
		} else if (Math.abs(this.sinlat0) < 1e-10) {
			A = 2 * this.a * this.k0 / (1 + cosX * Math.cos(dlon));
			p.y = A * sinX;
		} else {
			A = 2 * this.a * this.k0 * this.ms1 / (this.cosX0 * (1 + this.sinX0 * sinX + this.cosX0 * cosX * Math.cos(dlon)));
			p.y = A * (this.cosX0 * sinX - this.sinX0 * cosX * Math.cos(dlon)) + this.y0;
		}
		p.x = A * cosX * Math.sin(dlon) + this.x0;
	}
	return p;
}
function inverse$24(p) {
	p.x -= this.x0;
	p.y -= this.y0;
	var lon, lat, ts, ce, Chi;
	var rh = Math.sqrt(p.x * p.x + p.y * p.y);
	if (this.sphere) {
		var c = 2 * Math.atan(rh / (2 * this.a * this.k0));
		lon = this.long0;
		lat = this.lat0;
		if (rh <= 1e-10) {
			p.x = lon;
			p.y = lat;
			return p;
		}
		lat = Math.asin(Math.cos(c) * this.sinlat0 + p.y * Math.sin(c) * this.coslat0 / rh);
		if (Math.abs(this.coslat0) < 1e-10) {
			if (this.lat0 > 0) lon = adjust_lon_default(this.long0 + Math.atan2(p.x, -1 * p.y));
			else lon = adjust_lon_default(this.long0 + Math.atan2(p.x, p.y));
		} else lon = adjust_lon_default(this.long0 + Math.atan2(p.x * Math.sin(c), rh * this.coslat0 * Math.cos(c) - p.y * this.sinlat0 * Math.sin(c)));
		p.x = lon;
		p.y = lat;
		return p;
	} else if (Math.abs(this.coslat0) <= 1e-10) {
		if (rh <= 1e-10) {
			lat = this.lat0;
			lon = this.long0;
			p.x = lon;
			p.y = lat;
			return p;
		}
		p.x *= this.con;
		p.y *= this.con;
		ts = rh * this.cons / (2 * this.a * this.k0);
		lat = this.con * phi2z_default(this.e, ts);
		lon = this.con * adjust_lon_default(this.con * this.long0 + Math.atan2(p.x, -1 * p.y));
	} else {
		ce = 2 * Math.atan(rh * this.cosX0 / (2 * this.a * this.k0 * this.ms1));
		lon = this.long0;
		if (rh <= 1e-10) Chi = this.X0;
		else {
			Chi = Math.asin(Math.cos(ce) * this.sinX0 + p.y * Math.sin(ce) * this.cosX0 / rh);
			lon = adjust_lon_default(this.long0 + Math.atan2(p.x * Math.sin(ce), rh * this.cosX0 * Math.cos(ce) - p.y * this.sinX0 * Math.sin(ce)));
		}
		lat = -1 * phi2z_default(this.e, Math.tan(.5 * (HALF_PI + Chi)));
	}
	p.x = lon;
	p.y = lat;
	return p;
}
var names$24, stere_default;
var init_stere = __esmMin((() => {
	init_values();
	init_sign();
	init_msfnz();
	init_tsfnz();
	init_phi2z();
	init_adjust_lon();
	names$24 = [
		"stere",
		"Stereographic_South_Pole",
		"Polar Stereographic (variant B)"
	];
	stere_default = {
		init: init$24,
		forward: forward$24,
		inverse: inverse$24,
		names: names$24,
		ssfn_
	};
}));
//#endregion
//#region node_modules/proj4/lib/projections/somerc.js
function init$23() {
	var phy0 = this.lat0;
	this.lambda0 = this.long0;
	var sinPhy0 = Math.sin(phy0);
	var semiMajorAxis = this.a;
	var flattening = 1 / this.rf;
	var e2 = 2 * flattening - Math.pow(flattening, 2);
	var e = this.e = Math.sqrt(e2);
	this.R = this.k0 * semiMajorAxis * Math.sqrt(1 - e2) / (1 - e2 * Math.pow(sinPhy0, 2));
	this.alpha = Math.sqrt(1 + e2 / (1 - e2) * Math.pow(Math.cos(phy0), 4));
	this.b0 = Math.asin(sinPhy0 / this.alpha);
	var k1 = Math.log(Math.tan(Math.PI / 4 + this.b0 / 2));
	var k2 = Math.log(Math.tan(Math.PI / 4 + phy0 / 2));
	var k3 = Math.log((1 + e * sinPhy0) / (1 - e * sinPhy0));
	this.K = k1 - this.alpha * k2 + this.alpha * e / 2 * k3;
}
function forward$23(p) {
	var Sa1 = Math.log(Math.tan(Math.PI / 4 - p.y / 2));
	var Sa2 = this.e / 2 * Math.log((1 + this.e * Math.sin(p.y)) / (1 - this.e * Math.sin(p.y)));
	var S = -this.alpha * (Sa1 + Sa2) + this.K;
	var b = 2 * (Math.atan(Math.exp(S)) - Math.PI / 4);
	var I = this.alpha * (p.x - this.lambda0);
	var rotI = Math.atan(Math.sin(I) / (Math.sin(this.b0) * Math.tan(b) + Math.cos(this.b0) * Math.cos(I)));
	var rotB = Math.asin(Math.cos(this.b0) * Math.sin(b) - Math.sin(this.b0) * Math.cos(b) * Math.cos(I));
	p.y = this.R / 2 * Math.log((1 + Math.sin(rotB)) / (1 - Math.sin(rotB))) + this.y0;
	p.x = this.R * rotI + this.x0;
	return p;
}
function inverse$23(p) {
	var Y = p.x - this.x0;
	var X = p.y - this.y0;
	var rotI = Y / this.R;
	var rotB = 2 * (Math.atan(Math.exp(X / this.R)) - Math.PI / 4);
	var b = Math.asin(Math.cos(this.b0) * Math.sin(rotB) + Math.sin(this.b0) * Math.cos(rotB) * Math.cos(rotI));
	var I = Math.atan(Math.sin(rotI) / (Math.cos(this.b0) * Math.cos(rotI) - Math.sin(this.b0) * Math.tan(rotB)));
	var lambda = this.lambda0 + I / this.alpha;
	var S = 0;
	var phy = b;
	var prevPhy = -1e3;
	var iteration = 0;
	while (Math.abs(phy - prevPhy) > 1e-7) {
		if (++iteration > 20) return;
		S = 1 / this.alpha * (Math.log(Math.tan(Math.PI / 4 + b / 2)) - this.K) + this.e * Math.log(Math.tan(Math.PI / 4 + Math.asin(this.e * Math.sin(phy)) / 2));
		prevPhy = phy;
		phy = 2 * Math.atan(Math.exp(S)) - Math.PI / 2;
	}
	p.x = lambda;
	p.y = phy;
	return p;
}
var names$23, somerc_default;
var init_somerc = __esmMin((() => {
	names$23 = ["somerc"];
	somerc_default = {
		init: init$23,
		forward: forward$23,
		inverse: inverse$23,
		names: names$23
	};
}));
//#endregion
//#region node_modules/proj4/lib/projections/omerc.js
function isTypeA(P) {
	var typeAProjections = ["Hotine_Oblique_Mercator", "Hotine_Oblique_Mercator_Azimuth_Natural_Origin"];
	var projectionName = typeof P.PROJECTION === "object" ? Object.keys(P.PROJECTION)[0] : P.PROJECTION;
	return "no_uoff" in P || "no_off" in P || typeAProjections.indexOf(projectionName) !== -1;
}
function init$22() {
	var con, com, cosph0, D, F, H, L, sinph0, p, J, gamma = 0, gamma0, lamc = 0, lam1 = 0, lam2 = 0, phi1 = 0, phi2 = 0, alpha_c = 0;
	this.no_off = isTypeA(this);
	this.no_rot = "no_rot" in this;
	var alp = false;
	if ("alpha" in this) alp = true;
	var gam = false;
	if ("rectified_grid_angle" in this) gam = true;
	if (alp) alpha_c = this.alpha;
	if (gam) gamma = this.rectified_grid_angle * D2R$1;
	if (alp || gam) lamc = this.longc;
	else {
		lam1 = this.long1;
		phi1 = this.lat1;
		lam2 = this.long2;
		phi2 = this.lat2;
		if (Math.abs(phi1 - phi2) <= TOL || (con = Math.abs(phi1)) <= TOL || Math.abs(con - HALF_PI) <= TOL || Math.abs(Math.abs(this.lat0) - HALF_PI) <= TOL || Math.abs(Math.abs(phi2) - HALF_PI) <= TOL) throw new Error();
	}
	var one_es = 1 - this.es;
	com = Math.sqrt(one_es);
	if (Math.abs(this.lat0) > 1e-10) {
		sinph0 = Math.sin(this.lat0);
		cosph0 = Math.cos(this.lat0);
		con = 1 - this.es * sinph0 * sinph0;
		this.B = cosph0 * cosph0;
		this.B = Math.sqrt(1 + this.es * this.B * this.B / one_es);
		this.A = this.B * this.k0 * com / con;
		D = this.B * com / (cosph0 * Math.sqrt(con));
		F = D * D - 1;
		if (F <= 0) F = 0;
		else {
			F = Math.sqrt(F);
			if (this.lat0 < 0) F = -F;
		}
		this.E = F += D;
		this.E *= Math.pow(tsfnz_default(this.e, this.lat0, sinph0), this.B);
	} else {
		this.B = 1 / com;
		this.A = this.k0;
		this.E = D = F = 1;
	}
	if (alp || gam) {
		if (alp) {
			gamma0 = Math.asin(Math.sin(alpha_c) / D);
			if (!gam) gamma = alpha_c;
		} else {
			gamma0 = gamma;
			alpha_c = Math.asin(D * Math.sin(gamma0));
		}
		this.lam0 = lamc - Math.asin(.5 * (F - 1 / F) * Math.tan(gamma0)) / this.B;
	} else {
		H = Math.pow(tsfnz_default(this.e, phi1, Math.sin(phi1)), this.B);
		L = Math.pow(tsfnz_default(this.e, phi2, Math.sin(phi2)), this.B);
		F = this.E / H;
		p = (L - H) / (L + H);
		J = this.E * this.E;
		J = (J - L * H) / (J + L * H);
		con = lam1 - lam2;
		if (con < -Math.pi) lam2 -= TWO_PI;
		else if (con > Math.pi) lam2 += TWO_PI;
		this.lam0 = adjust_lon_default(.5 * (lam1 + lam2) - Math.atan(J * Math.tan(.5 * this.B * (lam1 - lam2)) / p) / this.B);
		gamma0 = Math.atan(2 * Math.sin(this.B * adjust_lon_default(lam1 - this.lam0)) / (F - 1 / F));
		gamma = alpha_c = Math.asin(D * Math.sin(gamma0));
	}
	this.singam = Math.sin(gamma0);
	this.cosgam = Math.cos(gamma0);
	this.sinrot = Math.sin(gamma);
	this.cosrot = Math.cos(gamma);
	this.rB = 1 / this.B;
	this.ArB = this.A * this.rB;
	this.BrA = 1 / this.ArB;
	this.A * this.B;
	if (this.no_off) this.u_0 = 0;
	else {
		this.u_0 = Math.abs(this.ArB * Math.atan(Math.sqrt(D * D - 1) / Math.cos(alpha_c)));
		if (this.lat0 < 0) this.u_0 = -this.u_0;
	}
	F = .5 * gamma0;
	this.v_pole_n = this.ArB * Math.log(Math.tan(FORTPI - F));
	this.v_pole_s = this.ArB * Math.log(Math.tan(FORTPI + F));
}
function forward$22(p) {
	var coords = {};
	var S, T, U, V, W, temp, u, v;
	p.x = p.x - this.lam0;
	if (Math.abs(Math.abs(p.y) - HALF_PI) > 1e-10) {
		W = this.E / Math.pow(tsfnz_default(this.e, p.y, Math.sin(p.y)), this.B);
		temp = 1 / W;
		S = .5 * (W - temp);
		T = .5 * (W + temp);
		V = Math.sin(this.B * p.x);
		U = (S * this.singam - V * this.cosgam) / T;
		if (Math.abs(Math.abs(U) - 1) < 1e-10) throw new Error();
		v = .5 * this.ArB * Math.log((1 - U) / (1 + U));
		temp = Math.cos(this.B * p.x);
		if (Math.abs(temp) < TOL) u = this.A * p.x;
		else u = this.ArB * Math.atan2(S * this.cosgam + V * this.singam, temp);
	} else {
		v = p.y > 0 ? this.v_pole_n : this.v_pole_s;
		u = this.ArB * p.y;
	}
	if (this.no_rot) {
		coords.x = u;
		coords.y = v;
	} else {
		u -= this.u_0;
		coords.x = v * this.cosrot + u * this.sinrot;
		coords.y = u * this.cosrot - v * this.sinrot;
	}
	coords.x = this.a * coords.x + this.x0;
	coords.y = this.a * coords.y + this.y0;
	return coords;
}
function inverse$22(p) {
	var u, v, Qp, Sp, Tp, Vp, Up;
	var coords = {};
	p.x = (p.x - this.x0) * (1 / this.a);
	p.y = (p.y - this.y0) * (1 / this.a);
	if (this.no_rot) {
		v = p.y;
		u = p.x;
	} else {
		v = p.x * this.cosrot - p.y * this.sinrot;
		u = p.y * this.cosrot + p.x * this.sinrot + this.u_0;
	}
	Qp = Math.exp(-this.BrA * v);
	Sp = .5 * (Qp - 1 / Qp);
	Tp = .5 * (Qp + 1 / Qp);
	Vp = Math.sin(this.BrA * u);
	Up = (Vp * this.cosgam + Sp * this.singam) / Tp;
	if (Math.abs(Math.abs(Up) - 1) < 1e-10) {
		coords.x = 0;
		coords.y = Up < 0 ? -HALF_PI : HALF_PI;
	} else {
		coords.y = this.E / Math.sqrt((1 + Up) / (1 - Up));
		coords.y = phi2z_default(this.e, Math.pow(coords.y, 1 / this.B));
		if (coords.y === Infinity) throw new Error();
		coords.x = -this.rB * Math.atan2(Sp * this.cosgam - Vp * this.singam, Math.cos(this.BrA * u));
	}
	coords.x += this.lam0;
	return coords;
}
var TOL, names$22, omerc_default;
var init_omerc = __esmMin((() => {
	init_tsfnz();
	init_adjust_lon();
	init_phi2z();
	init_values();
	TOL = 1e-7;
	names$22 = [
		"Hotine_Oblique_Mercator",
		"Hotine Oblique Mercator",
		"Hotine_Oblique_Mercator_Azimuth_Natural_Origin",
		"Hotine_Oblique_Mercator_Two_Point_Natural_Origin",
		"Hotine_Oblique_Mercator_Azimuth_Center",
		"Oblique_Mercator",
		"omerc"
	];
	omerc_default = {
		init: init$22,
		forward: forward$22,
		inverse: inverse$22,
		names: names$22
	};
}));
//#endregion
//#region node_modules/proj4/lib/projections/lcc.js
function init$21() {
	if (!this.lat2) this.lat2 = this.lat1;
	if (!this.k0) this.k0 = 1;
	this.x0 = this.x0 || 0;
	this.y0 = this.y0 || 0;
	if (Math.abs(this.lat1 + this.lat2) < 1e-10) return;
	var temp = this.b / this.a;
	this.e = Math.sqrt(1 - temp * temp);
	var sin1 = Math.sin(this.lat1);
	var cos1 = Math.cos(this.lat1);
	var ms1 = msfnz_default(this.e, sin1, cos1);
	var ts1 = tsfnz_default(this.e, this.lat1, sin1);
	var sin2 = Math.sin(this.lat2);
	var cos2 = Math.cos(this.lat2);
	var ms2 = msfnz_default(this.e, sin2, cos2);
	var ts2 = tsfnz_default(this.e, this.lat2, sin2);
	var ts0 = tsfnz_default(this.e, this.lat0, Math.sin(this.lat0));
	if (Math.abs(this.lat1 - this.lat2) > 1e-10) this.ns = Math.log(ms1 / ms2) / Math.log(ts1 / ts2);
	else this.ns = sin1;
	if (isNaN(this.ns)) this.ns = sin1;
	this.f0 = ms1 / (this.ns * Math.pow(ts1, this.ns));
	this.rh = this.a * this.f0 * Math.pow(ts0, this.ns);
	if (!this.title) this.title = "Lambert Conformal Conic";
}
function forward$21(p) {
	var lon = p.x;
	var lat = p.y;
	if (Math.abs(2 * Math.abs(lat) - Math.PI) <= 1e-10) lat = sign_default(lat) * (HALF_PI - 2 * EPSLN);
	var con = Math.abs(Math.abs(lat) - HALF_PI);
	var ts, rh1;
	if (con > 1e-10) {
		ts = tsfnz_default(this.e, lat, Math.sin(lat));
		rh1 = this.a * this.f0 * Math.pow(ts, this.ns);
	} else {
		con = lat * this.ns;
		if (con <= 0) return null;
		rh1 = 0;
	}
	var theta = this.ns * adjust_lon_default(lon - this.long0);
	p.x = this.k0 * (rh1 * Math.sin(theta)) + this.x0;
	p.y = this.k0 * (this.rh - rh1 * Math.cos(theta)) + this.y0;
	return p;
}
function inverse$21(p) {
	var rh1, con, ts;
	var lat, lon;
	var x = (p.x - this.x0) / this.k0;
	var y = this.rh - (p.y - this.y0) / this.k0;
	if (this.ns > 0) {
		rh1 = Math.sqrt(x * x + y * y);
		con = 1;
	} else {
		rh1 = -Math.sqrt(x * x + y * y);
		con = -1;
	}
	var theta = 0;
	if (rh1 !== 0) theta = Math.atan2(con * x, con * y);
	if (rh1 !== 0 || this.ns > 0) {
		con = 1 / this.ns;
		ts = Math.pow(rh1 / (this.a * this.f0), con);
		lat = phi2z_default(this.e, ts);
		if (lat === -9999) return null;
	} else lat = -HALF_PI;
	lon = adjust_lon_default(theta / this.ns + this.long0);
	p.x = lon;
	p.y = lat;
	return p;
}
var names$21, lcc_default;
var init_lcc = __esmMin((() => {
	init_msfnz();
	init_tsfnz();
	init_sign();
	init_adjust_lon();
	init_phi2z();
	init_values();
	names$21 = [
		"Lambert Tangential Conformal Conic Projection",
		"Lambert_Conformal_Conic",
		"Lambert_Conformal_Conic_1SP",
		"Lambert_Conformal_Conic_2SP",
		"lcc",
		"Lambert Conic Conformal (1SP)",
		"Lambert Conic Conformal (2SP)"
	];
	lcc_default = {
		init: init$21,
		forward: forward$21,
		inverse: inverse$21,
		names: names$21
	};
}));
//#endregion
//#region node_modules/proj4/lib/projections/krovak.js
function init$20() {
	this.a = 6377397.155;
	this.es = .006674372230614;
	this.e = Math.sqrt(this.es);
	if (!this.lat0) this.lat0 = .863937979737193;
	if (!this.long0) this.long0 = .4334234309119251;
	if (!this.k0) this.k0 = .9999;
	this.s45 = .785398163397448;
	this.s90 = 2 * this.s45;
	this.fi0 = this.lat0;
	this.e2 = this.es;
	this.e = Math.sqrt(this.e2);
	this.alfa = Math.sqrt(1 + this.e2 * Math.pow(Math.cos(this.fi0), 4) / (1 - this.e2));
	this.uq = 1.04216856380474;
	this.u0 = Math.asin(Math.sin(this.fi0) / this.alfa);
	this.g = Math.pow((1 + this.e * Math.sin(this.fi0)) / (1 - this.e * Math.sin(this.fi0)), this.alfa * this.e / 2);
	this.k = Math.tan(this.u0 / 2 + this.s45) / Math.pow(Math.tan(this.fi0 / 2 + this.s45), this.alfa) * this.g;
	this.k1 = this.k0;
	this.n0 = this.a * Math.sqrt(1 - this.e2) / (1 - this.e2 * Math.pow(Math.sin(this.fi0), 2));
	this.s0 = 1.37008346281555;
	this.n = Math.sin(this.s0);
	this.ro0 = this.k1 * this.n0 / Math.tan(this.s0);
	this.ad = this.s90 - this.uq;
}
function forward$20(p) {
	var gfi, u, deltav, s, d, eps, ro;
	var lon = p.x;
	var lat = p.y;
	var delta_lon = adjust_lon_default(lon - this.long0);
	gfi = Math.pow((1 + this.e * Math.sin(lat)) / (1 - this.e * Math.sin(lat)), this.alfa * this.e / 2);
	u = 2 * (Math.atan(this.k * Math.pow(Math.tan(lat / 2 + this.s45), this.alfa) / gfi) - this.s45);
	deltav = -delta_lon * this.alfa;
	s = Math.asin(Math.cos(this.ad) * Math.sin(u) + Math.sin(this.ad) * Math.cos(u) * Math.cos(deltav));
	d = Math.asin(Math.cos(u) * Math.sin(deltav) / Math.cos(s));
	eps = this.n * d;
	ro = this.ro0 * Math.pow(Math.tan(this.s0 / 2 + this.s45), this.n) / Math.pow(Math.tan(s / 2 + this.s45), this.n);
	p.y = ro * Math.cos(eps) / 1;
	p.x = ro * Math.sin(eps) / 1;
	if (!this.czech) {
		p.y *= -1;
		p.x *= -1;
	}
	return p;
}
function inverse$20(p) {
	var u, deltav, s, d, eps, ro, fi1;
	var ok;
	var tmp = p.x;
	p.x = p.y;
	p.y = tmp;
	if (!this.czech) {
		p.y *= -1;
		p.x *= -1;
	}
	ro = Math.sqrt(p.x * p.x + p.y * p.y);
	eps = Math.atan2(p.y, p.x);
	d = eps / Math.sin(this.s0);
	s = 2 * (Math.atan(Math.pow(this.ro0 / ro, 1 / this.n) * Math.tan(this.s0 / 2 + this.s45)) - this.s45);
	u = Math.asin(Math.cos(this.ad) * Math.sin(s) - Math.sin(this.ad) * Math.cos(s) * Math.cos(d));
	deltav = Math.asin(Math.cos(s) * Math.sin(d) / Math.cos(u));
	p.x = this.long0 - deltav / this.alfa;
	fi1 = u;
	ok = 0;
	var iter = 0;
	do {
		p.y = 2 * (Math.atan(Math.pow(this.k, -1 / this.alfa) * Math.pow(Math.tan(u / 2 + this.s45), 1 / this.alfa) * Math.pow((1 + this.e * Math.sin(fi1)) / (1 - this.e * Math.sin(fi1)), this.e / 2)) - this.s45);
		if (Math.abs(fi1 - p.y) < 1e-10) ok = 1;
		fi1 = p.y;
		iter += 1;
	} while (ok === 0 && iter < 15);
	if (iter >= 15) return null;
	return p;
}
var names$20, krovak_default;
var init_krovak = __esmMin((() => {
	init_adjust_lon();
	names$20 = ["Krovak", "krovak"];
	krovak_default = {
		init: init$20,
		forward: forward$20,
		inverse: inverse$20,
		names: names$20
	};
}));
//#endregion
//#region node_modules/proj4/lib/common/mlfn.js
function mlfn_default(e0, e1, e2, e3, phi) {
	return e0 * phi - e1 * Math.sin(2 * phi) + e2 * Math.sin(4 * phi) - e3 * Math.sin(6 * phi);
}
var init_mlfn = __esmMin((() => {}));
//#endregion
//#region node_modules/proj4/lib/common/e0fn.js
function e0fn_default(x) {
	return 1 - .25 * x * (1 + x / 16 * (3 + 1.25 * x));
}
var init_e0fn = __esmMin((() => {}));
//#endregion
//#region node_modules/proj4/lib/common/e1fn.js
function e1fn_default(x) {
	return .375 * x * (1 + .25 * x * (1 + .46875 * x));
}
var init_e1fn = __esmMin((() => {}));
//#endregion
//#region node_modules/proj4/lib/common/e2fn.js
function e2fn_default(x) {
	return .05859375 * x * x * (1 + .75 * x);
}
var init_e2fn = __esmMin((() => {}));
//#endregion
//#region node_modules/proj4/lib/common/e3fn.js
function e3fn_default(x) {
	return x * x * x * (35 / 3072);
}
var init_e3fn = __esmMin((() => {}));
//#endregion
//#region node_modules/proj4/lib/common/gN.js
function gN_default(a, e, sinphi) {
	var temp = e * sinphi;
	return a / Math.sqrt(1 - temp * temp);
}
var init_gN = __esmMin((() => {}));
//#endregion
//#region node_modules/proj4/lib/common/adjust_lat.js
function adjust_lat_default(x) {
	return Math.abs(x) < HALF_PI ? x : x - sign_default(x) * Math.PI;
}
var init_adjust_lat = __esmMin((() => {
	init_values();
	init_sign();
}));
//#endregion
//#region node_modules/proj4/lib/common/imlfn.js
function imlfn_default(ml, e0, e1, e2, e3) {
	var phi;
	var dphi;
	phi = ml / e0;
	for (var i = 0; i < 15; i++) {
		dphi = (ml - (e0 * phi - e1 * Math.sin(2 * phi) + e2 * Math.sin(4 * phi) - e3 * Math.sin(6 * phi))) / (e0 - 2 * e1 * Math.cos(2 * phi) + 4 * e2 * Math.cos(4 * phi) - 6 * e3 * Math.cos(6 * phi));
		phi += dphi;
		if (Math.abs(dphi) <= 1e-10) return phi;
	}
	return NaN;
}
var init_imlfn = __esmMin((() => {}));
//#endregion
//#region node_modules/proj4/lib/projections/cass.js
function init$19() {
	if (!this.sphere) {
		this.e0 = e0fn_default(this.es);
		this.e1 = e1fn_default(this.es);
		this.e2 = e2fn_default(this.es);
		this.e3 = e3fn_default(this.es);
		this.ml0 = this.a * mlfn_default(this.e0, this.e1, this.e2, this.e3, this.lat0);
	}
}
function forward$19(p) {
	var x, y;
	var lam = p.x;
	var phi = p.y;
	lam = adjust_lon_default(lam - this.long0);
	if (this.sphere) {
		x = this.a * Math.asin(Math.cos(phi) * Math.sin(lam));
		y = this.a * (Math.atan2(Math.tan(phi), Math.cos(lam)) - this.lat0);
	} else {
		var sinphi = Math.sin(phi);
		var cosphi = Math.cos(phi);
		var nl = gN_default(this.a, this.e, sinphi);
		var tl = Math.tan(phi) * Math.tan(phi);
		var al = lam * Math.cos(phi);
		var asq = al * al;
		var cl = this.es * cosphi * cosphi / (1 - this.es);
		var ml = this.a * mlfn_default(this.e0, this.e1, this.e2, this.e3, phi);
		x = nl * al * (1 - asq * tl * (1 / 6 - (8 - tl + 8 * cl) * asq / 120));
		y = ml - this.ml0 + nl * sinphi / cosphi * asq * (.5 + (5 - tl + 6 * cl) * asq / 24);
	}
	p.x = x + this.x0;
	p.y = y + this.y0;
	return p;
}
function inverse$19(p) {
	p.x -= this.x0;
	p.y -= this.y0;
	var x = p.x / this.a;
	var y = p.y / this.a;
	var phi, lam;
	if (this.sphere) {
		var dd = y + this.lat0;
		phi = Math.asin(Math.sin(dd) * Math.cos(x));
		lam = Math.atan2(Math.tan(x), Math.cos(dd));
	} else {
		var phi1 = imlfn_default(this.ml0 / this.a + y, this.e0, this.e1, this.e2, this.e3);
		if (Math.abs(Math.abs(phi1) - HALF_PI) <= 1e-10) {
			p.x = this.long0;
			p.y = HALF_PI;
			if (y < 0) p.y *= -1;
			return p;
		}
		var nl1 = gN_default(this.a, this.e, Math.sin(phi1));
		var rl1 = nl1 * nl1 * nl1 / this.a / this.a * (1 - this.es);
		var tl1 = Math.pow(Math.tan(phi1), 2);
		var dl = x * this.a / nl1;
		var dsq = dl * dl;
		phi = phi1 - nl1 * Math.tan(phi1) / rl1 * dl * dl * (.5 - (1 + 3 * tl1) * dl * dl / 24);
		lam = dl * (1 - dsq * (tl1 / 3 + (1 + 3 * tl1) * tl1 * dsq / 15)) / Math.cos(phi1);
	}
	p.x = adjust_lon_default(lam + this.long0);
	p.y = adjust_lat_default(phi);
	return p;
}
var names$19, cass_default;
var init_cass = __esmMin((() => {
	init_mlfn();
	init_e0fn();
	init_e1fn();
	init_e2fn();
	init_e3fn();
	init_gN();
	init_adjust_lon();
	init_adjust_lat();
	init_imlfn();
	init_values();
	names$19 = [
		"Cassini",
		"Cassini_Soldner",
		"cass"
	];
	cass_default = {
		init: init$19,
		forward: forward$19,
		inverse: inverse$19,
		names: names$19
	};
}));
//#endregion
//#region node_modules/proj4/lib/common/qsfnz.js
function qsfnz_default(eccent, sinphi) {
	var con;
	if (eccent > 1e-7) {
		con = eccent * sinphi;
		return (1 - eccent * eccent) * (sinphi / (1 - con * con) - .5 / eccent * Math.log((1 - con) / (1 + con)));
	} else return 2 * sinphi;
}
var init_qsfnz = __esmMin((() => {}));
//#endregion
//#region node_modules/proj4/lib/projections/laea.js
function init$18() {
	var t = Math.abs(this.lat0);
	if (Math.abs(t - HALF_PI) < 1e-10) this.mode = this.lat0 < 0 ? this.S_POLE : this.N_POLE;
	else if (Math.abs(t) < 1e-10) this.mode = this.EQUIT;
	else this.mode = this.OBLIQ;
	if (this.es > 0) {
		var sinphi;
		this.qp = qsfnz_default(this.e, 1);
		this.mmf = .5 / (1 - this.es);
		this.apa = authset(this.es);
		switch (this.mode) {
			case this.N_POLE:
				this.dd = 1;
				break;
			case this.S_POLE:
				this.dd = 1;
				break;
			case this.EQUIT:
				this.rq = Math.sqrt(.5 * this.qp);
				this.dd = 1 / this.rq;
				this.xmf = 1;
				this.ymf = .5 * this.qp;
				break;
			case this.OBLIQ:
				this.rq = Math.sqrt(.5 * this.qp);
				sinphi = Math.sin(this.lat0);
				this.sinb1 = qsfnz_default(this.e, sinphi) / this.qp;
				this.cosb1 = Math.sqrt(1 - this.sinb1 * this.sinb1);
				this.dd = Math.cos(this.lat0) / (Math.sqrt(1 - this.es * sinphi * sinphi) * this.rq * this.cosb1);
				this.ymf = (this.xmf = this.rq) / this.dd;
				this.xmf *= this.dd;
		}
	} else if (this.mode === this.OBLIQ) {
		this.sinph0 = Math.sin(this.lat0);
		this.cosph0 = Math.cos(this.lat0);
	}
}
function forward$18(p) {
	var x, y, coslam, sinlam, sinphi, q, sinb, cosb, b, cosphi;
	var lam = p.x;
	var phi = p.y;
	lam = adjust_lon_default(lam - this.long0);
	if (this.sphere) {
		sinphi = Math.sin(phi);
		cosphi = Math.cos(phi);
		coslam = Math.cos(lam);
		if (this.mode === this.OBLIQ || this.mode === this.EQUIT) {
			y = this.mode === this.EQUIT ? 1 + cosphi * coslam : 1 + this.sinph0 * sinphi + this.cosph0 * cosphi * coslam;
			if (y <= 1e-10) return null;
			y = Math.sqrt(2 / y);
			x = y * cosphi * Math.sin(lam);
			y *= this.mode === this.EQUIT ? sinphi : this.cosph0 * sinphi - this.sinph0 * cosphi * coslam;
		} else if (this.mode === this.N_POLE || this.mode === this.S_POLE) {
			if (this.mode === this.N_POLE) coslam = -coslam;
			if (Math.abs(phi + this.lat0) < 1e-10) return null;
			y = FORTPI - phi * .5;
			y = 2 * (this.mode === this.S_POLE ? Math.cos(y) : Math.sin(y));
			x = y * Math.sin(lam);
			y *= coslam;
		}
	} else {
		sinb = 0;
		cosb = 0;
		b = 0;
		coslam = Math.cos(lam);
		sinlam = Math.sin(lam);
		sinphi = Math.sin(phi);
		q = qsfnz_default(this.e, sinphi);
		if (this.mode === this.OBLIQ || this.mode === this.EQUIT) {
			sinb = q / this.qp;
			cosb = Math.sqrt(1 - sinb * sinb);
		}
		switch (this.mode) {
			case this.OBLIQ:
				b = 1 + this.sinb1 * sinb + this.cosb1 * cosb * coslam;
				break;
			case this.EQUIT:
				b = 1 + cosb * coslam;
				break;
			case this.N_POLE:
				b = HALF_PI + phi;
				q = this.qp - q;
				break;
			case this.S_POLE:
				b = phi - HALF_PI;
				q = this.qp + q;
		}
		if (Math.abs(b) < 1e-10) return null;
		switch (this.mode) {
			case this.OBLIQ:
			case this.EQUIT:
				b = Math.sqrt(2 / b);
				if (this.mode === this.OBLIQ) y = this.ymf * b * (this.cosb1 * sinb - this.sinb1 * cosb * coslam);
				else y = (b = Math.sqrt(2 / (1 + cosb * coslam))) * sinb * this.ymf;
				x = this.xmf * b * cosb * sinlam;
				break;
			case this.N_POLE:
			case this.S_POLE: if (q >= 0) {
				x = (b = Math.sqrt(q)) * sinlam;
				y = coslam * (this.mode === this.S_POLE ? b : -b);
			} else x = y = 0;
		}
	}
	p.x = this.a * x + this.x0;
	p.y = this.a * y + this.y0;
	return p;
}
function inverse$18(p) {
	p.x -= this.x0;
	p.y -= this.y0;
	var x = p.x / this.a;
	var y = p.y / this.a;
	var lam, phi, cCe, sCe, q, rho, ab;
	if (this.sphere) {
		var cosz = 0, rh, sinz = 0;
		rh = Math.sqrt(x * x + y * y);
		phi = rh * .5;
		if (phi > 1) return null;
		phi = 2 * Math.asin(phi);
		if (this.mode === this.OBLIQ || this.mode === this.EQUIT) {
			sinz = Math.sin(phi);
			cosz = Math.cos(phi);
		}
		switch (this.mode) {
			case this.EQUIT:
				phi = Math.abs(rh) <= 1e-10 ? 0 : Math.asin(y * sinz / rh);
				x *= sinz;
				y = cosz * rh;
				break;
			case this.OBLIQ:
				phi = Math.abs(rh) <= 1e-10 ? this.lat0 : Math.asin(cosz * this.sinph0 + y * sinz * this.cosph0 / rh);
				x *= sinz * this.cosph0;
				y = (cosz - Math.sin(phi) * this.sinph0) * rh;
				break;
			case this.N_POLE:
				y = -y;
				phi = HALF_PI - phi;
				break;
			case this.S_POLE: phi -= HALF_PI;
		}
		lam = y === 0 && (this.mode === this.EQUIT || this.mode === this.OBLIQ) ? 0 : Math.atan2(x, y);
	} else {
		ab = 0;
		if (this.mode === this.OBLIQ || this.mode === this.EQUIT) {
			x /= this.dd;
			y *= this.dd;
			rho = Math.sqrt(x * x + y * y);
			if (rho < 1e-10) {
				p.x = this.long0;
				p.y = this.lat0;
				return p;
			}
			sCe = 2 * Math.asin(.5 * rho / this.rq);
			cCe = Math.cos(sCe);
			x *= sCe = Math.sin(sCe);
			if (this.mode === this.OBLIQ) {
				ab = cCe * this.sinb1 + y * sCe * this.cosb1 / rho;
				q = this.qp * ab;
				y = rho * this.cosb1 * cCe - y * this.sinb1 * sCe;
			} else {
				ab = y * sCe / rho;
				q = this.qp * ab;
				y = rho * cCe;
			}
		} else if (this.mode === this.N_POLE || this.mode === this.S_POLE) {
			if (this.mode === this.N_POLE) y = -y;
			q = x * x + y * y;
			if (!q) {
				p.x = this.long0;
				p.y = this.lat0;
				return p;
			}
			ab = 1 - q / this.qp;
			if (this.mode === this.S_POLE) ab = -ab;
		}
		lam = Math.atan2(x, y);
		phi = authlat(Math.asin(ab), this.apa);
	}
	p.x = adjust_lon_default(this.long0 + lam);
	p.y = phi;
	return p;
}
function authset(es) {
	var t;
	var APA = [];
	APA[0] = es * P00;
	t = es * es;
	APA[0] += t * P01;
	APA[1] = t * P10;
	t *= es;
	APA[0] += t * P02;
	APA[1] += t * P11;
	APA[2] = t * P20;
	return APA;
}
function authlat(beta, APA) {
	var t = beta + beta;
	return beta + APA[0] * Math.sin(t) + APA[1] * Math.sin(t + t) + APA[2] * Math.sin(t + t + t);
}
var P00, P01, P02, P10, P11, P20, names$18, laea_default;
var init_laea = __esmMin((() => {
	init_values();
	init_qsfnz();
	init_adjust_lon();
	P00 = .3333333333333333;
	P01 = .17222222222222222;
	P02 = .10257936507936508;
	P10 = .06388888888888888;
	P11 = .0664021164021164;
	P20 = .016415012942191543;
	names$18 = [
		"Lambert Azimuthal Equal Area",
		"Lambert_Azimuthal_Equal_Area",
		"laea"
	];
	laea_default = {
		init: init$18,
		forward: forward$18,
		inverse: inverse$18,
		names: names$18,
		S_POLE: 1,
		N_POLE: 2,
		EQUIT: 3,
		OBLIQ: 4
	};
}));
//#endregion
//#region node_modules/proj4/lib/common/asinz.js
function asinz_default(x) {
	if (Math.abs(x) > 1) x = x > 1 ? 1 : -1;
	return Math.asin(x);
}
var init_asinz = __esmMin((() => {}));
//#endregion
//#region node_modules/proj4/lib/projections/aea.js
function init$17() {
	if (Math.abs(this.lat1 + this.lat2) < 1e-10) return;
	this.temp = this.b / this.a;
	this.es = 1 - Math.pow(this.temp, 2);
	this.e3 = Math.sqrt(this.es);
	this.sin_po = Math.sin(this.lat1);
	this.cos_po = Math.cos(this.lat1);
	this.t1 = this.sin_po;
	this.con = this.sin_po;
	this.ms1 = msfnz_default(this.e3, this.sin_po, this.cos_po);
	this.qs1 = qsfnz_default(this.e3, this.sin_po, this.cos_po);
	this.sin_po = Math.sin(this.lat2);
	this.cos_po = Math.cos(this.lat2);
	this.t2 = this.sin_po;
	this.ms2 = msfnz_default(this.e3, this.sin_po, this.cos_po);
	this.qs2 = qsfnz_default(this.e3, this.sin_po, this.cos_po);
	this.sin_po = Math.sin(this.lat0);
	this.cos_po = Math.cos(this.lat0);
	this.t3 = this.sin_po;
	this.qs0 = qsfnz_default(this.e3, this.sin_po, this.cos_po);
	if (Math.abs(this.lat1 - this.lat2) > 1e-10) this.ns0 = (this.ms1 * this.ms1 - this.ms2 * this.ms2) / (this.qs2 - this.qs1);
	else this.ns0 = this.con;
	this.c = this.ms1 * this.ms1 + this.ns0 * this.qs1;
	this.rh = this.a * Math.sqrt(this.c - this.ns0 * this.qs0) / this.ns0;
}
function forward$17(p) {
	var lon = p.x;
	var lat = p.y;
	this.sin_phi = Math.sin(lat);
	this.cos_phi = Math.cos(lat);
	var qs = qsfnz_default(this.e3, this.sin_phi, this.cos_phi);
	var rh1 = this.a * Math.sqrt(this.c - this.ns0 * qs) / this.ns0;
	var theta = this.ns0 * adjust_lon_default(lon - this.long0);
	var x = rh1 * Math.sin(theta) + this.x0;
	var y = this.rh - rh1 * Math.cos(theta) + this.y0;
	p.x = x;
	p.y = y;
	return p;
}
function inverse$17(p) {
	var rh1, qs, con, theta, lon, lat;
	p.x -= this.x0;
	p.y = this.rh - p.y + this.y0;
	if (this.ns0 >= 0) {
		rh1 = Math.sqrt(p.x * p.x + p.y * p.y);
		con = 1;
	} else {
		rh1 = -Math.sqrt(p.x * p.x + p.y * p.y);
		con = -1;
	}
	theta = 0;
	if (rh1 !== 0) theta = Math.atan2(con * p.x, con * p.y);
	con = rh1 * this.ns0 / this.a;
	if (this.sphere) lat = Math.asin((this.c - con * con) / (2 * this.ns0));
	else {
		qs = (this.c - con * con) / this.ns0;
		lat = this.phi1z(this.e3, qs);
	}
	lon = adjust_lon_default(theta / this.ns0 + this.long0);
	p.x = lon;
	p.y = lat;
	return p;
}
function phi1z(eccent, qs) {
	var sinphi, cosphi, con, com, dphi;
	var phi = asinz_default(.5 * qs);
	if (eccent < 1e-10) return phi;
	var eccnts = eccent * eccent;
	for (var i = 1; i <= 25; i++) {
		sinphi = Math.sin(phi);
		cosphi = Math.cos(phi);
		con = eccent * sinphi;
		com = 1 - con * con;
		dphi = .5 * com * com / cosphi * (qs / (1 - eccnts) - sinphi / com + .5 / eccent * Math.log((1 - con) / (1 + con)));
		phi = phi + dphi;
		if (Math.abs(dphi) <= 1e-7) return phi;
	}
	return null;
}
var names$17, aea_default;
var init_aea = __esmMin((() => {
	init_msfnz();
	init_qsfnz();
	init_adjust_lon();
	init_asinz();
	init_values();
	names$17 = [
		"Albers_Conic_Equal_Area",
		"Albers",
		"aea"
	];
	aea_default = {
		init: init$17,
		forward: forward$17,
		inverse: inverse$17,
		names: names$17,
		phi1z
	};
}));
//#endregion
//#region node_modules/proj4/lib/projections/gnom.js
function init$16() {
	this.sin_p14 = Math.sin(this.lat0);
	this.cos_p14 = Math.cos(this.lat0);
	this.infinity_dist = 1e3 * this.a;
	this.rc = 1;
}
function forward$16(p) {
	var sinphi, cosphi;
	var dlon;
	var coslon;
	var ksp;
	var g;
	var x, y;
	var lon = p.x;
	var lat = p.y;
	dlon = adjust_lon_default(lon - this.long0);
	sinphi = Math.sin(lat);
	cosphi = Math.cos(lat);
	coslon = Math.cos(dlon);
	g = this.sin_p14 * sinphi + this.cos_p14 * cosphi * coslon;
	ksp = 1;
	if (g > 0 || Math.abs(g) <= 1e-10) {
		x = this.x0 + this.a * ksp * cosphi * Math.sin(dlon) / g;
		y = this.y0 + this.a * ksp * (this.cos_p14 * sinphi - this.sin_p14 * cosphi * coslon) / g;
	} else {
		x = this.x0 + this.infinity_dist * cosphi * Math.sin(dlon);
		y = this.y0 + this.infinity_dist * (this.cos_p14 * sinphi - this.sin_p14 * cosphi * coslon);
	}
	p.x = x;
	p.y = y;
	return p;
}
function inverse$16(p) {
	var rh;
	var sinc, cosc;
	var c;
	var lon, lat;
	p.x = (p.x - this.x0) / this.a;
	p.y = (p.y - this.y0) / this.a;
	p.x /= this.k0;
	p.y /= this.k0;
	if (rh = Math.sqrt(p.x * p.x + p.y * p.y)) {
		c = Math.atan2(rh, this.rc);
		sinc = Math.sin(c);
		cosc = Math.cos(c);
		lat = asinz_default(cosc * this.sin_p14 + p.y * sinc * this.cos_p14 / rh);
		lon = Math.atan2(p.x * sinc, rh * this.cos_p14 * cosc - p.y * this.sin_p14 * sinc);
		lon = adjust_lon_default(this.long0 + lon);
	} else {
		lat = this.phic0;
		lon = 0;
	}
	p.x = lon;
	p.y = lat;
	return p;
}
var names$16, gnom_default;
var init_gnom = __esmMin((() => {
	init_adjust_lon();
	init_asinz();
	init_values();
	names$16 = ["gnom"];
	gnom_default = {
		init: init$16,
		forward: forward$16,
		inverse: inverse$16,
		names: names$16
	};
}));
//#endregion
//#region node_modules/proj4/lib/common/iqsfnz.js
function iqsfnz_default(eccent, q) {
	var temp = 1 - (1 - eccent * eccent) / (2 * eccent) * Math.log((1 - eccent) / (1 + eccent));
	if (Math.abs(Math.abs(q) - temp) < 1e-6) {
		if (q < 0) return -1 * HALF_PI;
		else return HALF_PI;
	}
	var phi = Math.asin(.5 * q);
	var dphi;
	var sin_phi;
	var cos_phi;
	var con;
	for (var i = 0; i < 30; i++) {
		sin_phi = Math.sin(phi);
		cos_phi = Math.cos(phi);
		con = eccent * sin_phi;
		dphi = Math.pow(1 - con * con, 2) / (2 * cos_phi) * (q / (1 - eccent * eccent) - sin_phi / (1 - con * con) + .5 / eccent * Math.log((1 - con) / (1 + con)));
		phi += dphi;
		if (Math.abs(dphi) <= 1e-10) return phi;
	}
	return NaN;
}
var init_iqsfnz = __esmMin((() => {
	init_values();
}));
//#endregion
//#region node_modules/proj4/lib/projections/cea.js
function init$15() {
	if (!this.sphere) this.k0 = msfnz_default(this.e, Math.sin(this.lat_ts), Math.cos(this.lat_ts));
}
function forward$15(p) {
	var lon = p.x;
	var lat = p.y;
	var x, y;
	var dlon = adjust_lon_default(lon - this.long0);
	if (this.sphere) {
		x = this.x0 + this.a * dlon * Math.cos(this.lat_ts);
		y = this.y0 + this.a * Math.sin(lat) / Math.cos(this.lat_ts);
	} else {
		var qs = qsfnz_default(this.e, Math.sin(lat));
		x = this.x0 + this.a * this.k0 * dlon;
		y = this.y0 + this.a * qs * .5 / this.k0;
	}
	p.x = x;
	p.y = y;
	return p;
}
function inverse$15(p) {
	p.x -= this.x0;
	p.y -= this.y0;
	var lon, lat;
	if (this.sphere) {
		lon = adjust_lon_default(this.long0 + p.x / this.a / Math.cos(this.lat_ts));
		lat = Math.asin(p.y / this.a * Math.cos(this.lat_ts));
	} else {
		lat = iqsfnz_default(this.e, 2 * p.y * this.k0 / this.a);
		lon = adjust_lon_default(this.long0 + p.x / (this.a * this.k0));
	}
	p.x = lon;
	p.y = lat;
	return p;
}
var names$15, cea_default;
var init_cea = __esmMin((() => {
	init_adjust_lon();
	init_qsfnz();
	init_msfnz();
	init_iqsfnz();
	names$15 = ["cea"];
	cea_default = {
		init: init$15,
		forward: forward$15,
		inverse: inverse$15,
		names: names$15
	};
}));
//#endregion
//#region node_modules/proj4/lib/projections/eqc.js
function init$14() {
	this.x0 = this.x0 || 0;
	this.y0 = this.y0 || 0;
	this.lat0 = this.lat0 || 0;
	this.long0 = this.long0 || 0;
	this.lat_ts = this.lat_ts || 0;
	this.title = this.title || "Equidistant Cylindrical (Plate Carre)";
	this.rc = Math.cos(this.lat_ts);
}
function forward$14(p) {
	var lon = p.x;
	var lat = p.y;
	var dlon = adjust_lon_default(lon - this.long0);
	var dlat = adjust_lat_default(lat - this.lat0);
	p.x = this.x0 + this.a * dlon * this.rc;
	p.y = this.y0 + this.a * dlat;
	return p;
}
function inverse$14(p) {
	var x = p.x;
	var y = p.y;
	p.x = adjust_lon_default(this.long0 + (x - this.x0) / (this.a * this.rc));
	p.y = adjust_lat_default(this.lat0 + (y - this.y0) / this.a);
	return p;
}
var names$14, eqc_default;
var init_eqc = __esmMin((() => {
	init_adjust_lon();
	init_adjust_lat();
	names$14 = [
		"Equirectangular",
		"Equidistant_Cylindrical",
		"eqc"
	];
	eqc_default = {
		init: init$14,
		forward: forward$14,
		inverse: inverse$14,
		names: names$14
	};
}));
//#endregion
//#region node_modules/proj4/lib/projections/poly.js
function init$13() {
	this.temp = this.b / this.a;
	this.es = 1 - Math.pow(this.temp, 2);
	this.e = Math.sqrt(this.es);
	this.e0 = e0fn_default(this.es);
	this.e1 = e1fn_default(this.es);
	this.e2 = e2fn_default(this.es);
	this.e3 = e3fn_default(this.es);
	this.ml0 = this.a * mlfn_default(this.e0, this.e1, this.e2, this.e3, this.lat0);
}
function forward$13(p) {
	var lon = p.x;
	var lat = p.y;
	var x, y, el;
	var dlon = adjust_lon_default(lon - this.long0);
	el = dlon * Math.sin(lat);
	if (this.sphere) {
		if (Math.abs(lat) <= 1e-10) {
			x = this.a * dlon;
			y = -1 * this.a * this.lat0;
		} else {
			x = this.a * Math.sin(el) / Math.tan(lat);
			y = this.a * (adjust_lat_default(lat - this.lat0) + (1 - Math.cos(el)) / Math.tan(lat));
		}
	} else if (Math.abs(lat) <= 1e-10) {
		x = this.a * dlon;
		y = -1 * this.ml0;
	} else {
		var nl = gN_default(this.a, this.e, Math.sin(lat)) / Math.tan(lat);
		x = nl * Math.sin(el);
		y = this.a * mlfn_default(this.e0, this.e1, this.e2, this.e3, lat) - this.ml0 + nl * (1 - Math.cos(el));
	}
	p.x = x + this.x0;
	p.y = y + this.y0;
	return p;
}
function inverse$13(p) {
	var lon, lat, x, y, i;
	var al, bl;
	var phi, dphi;
	x = p.x - this.x0;
	y = p.y - this.y0;
	if (this.sphere) {
		if (Math.abs(y + this.a * this.lat0) <= 1e-10) {
			lon = adjust_lon_default(x / this.a + this.long0);
			lat = 0;
		} else {
			al = this.lat0 + y / this.a;
			bl = x * x / this.a / this.a + al * al;
			phi = al;
			var tanphi;
			for (i = MAX_ITER$1; i; --i) {
				tanphi = Math.tan(phi);
				dphi = -1 * (al * (phi * tanphi + 1) - phi - .5 * (phi * phi + bl) * tanphi) / ((phi - al) / tanphi - 1);
				phi += dphi;
				if (Math.abs(dphi) <= 1e-10) {
					lat = phi;
					break;
				}
			}
			lon = adjust_lon_default(this.long0 + Math.asin(x * Math.tan(phi) / this.a) / Math.sin(lat));
		}
	} else if (Math.abs(y + this.ml0) <= 1e-10) {
		lat = 0;
		lon = adjust_lon_default(this.long0 + x / this.a);
	} else {
		al = (this.ml0 + y) / this.a;
		bl = x * x / this.a / this.a + al * al;
		phi = al;
		var cl, mln, mlnp, ma;
		var con;
		for (i = MAX_ITER$1; i; --i) {
			con = this.e * Math.sin(phi);
			cl = Math.sqrt(1 - con * con) * Math.tan(phi);
			mln = this.a * mlfn_default(this.e0, this.e1, this.e2, this.e3, phi);
			mlnp = this.e0 - 2 * this.e1 * Math.cos(2 * phi) + 4 * this.e2 * Math.cos(4 * phi) - 6 * this.e3 * Math.cos(6 * phi);
			ma = mln / this.a;
			dphi = (al * (cl * ma + 1) - ma - .5 * cl * (ma * ma + bl)) / (this.es * Math.sin(2 * phi) * (ma * ma + bl - 2 * al * ma) / (4 * cl) + (al - ma) * (cl * mlnp - 2 / Math.sin(2 * phi)) - mlnp);
			phi -= dphi;
			if (Math.abs(dphi) <= 1e-10) {
				lat = phi;
				break;
			}
		}
		cl = Math.sqrt(1 - this.es * Math.pow(Math.sin(lat), 2)) * Math.tan(lat);
		lon = adjust_lon_default(this.long0 + Math.asin(x * cl / this.a) / Math.sin(lat));
	}
	p.x = lon;
	p.y = lat;
	return p;
}
var MAX_ITER$1, names$13, poly_default;
var init_poly = __esmMin((() => {
	init_e0fn();
	init_e1fn();
	init_e2fn();
	init_e3fn();
	init_adjust_lon();
	init_adjust_lat();
	init_mlfn();
	init_values();
	init_gN();
	MAX_ITER$1 = 20;
	names$13 = ["Polyconic", "poly"];
	poly_default = {
		init: init$13,
		forward: forward$13,
		inverse: inverse$13,
		names: names$13
	};
}));
//#endregion
//#region node_modules/proj4/lib/projections/nzmg.js
function init$12() {
	this.A = [];
	this.A[1] = .6399175073;
	this.A[2] = -.1358797613;
	this.A[3] = .063294409;
	this.A[4] = -.02526853;
	this.A[5] = .0117879;
	this.A[6] = -.0055161;
	this.A[7] = .0026906;
	this.A[8] = -.001333;
	this.A[9] = 67e-5;
	this.A[10] = -34e-5;
	this.B_re = [];
	this.B_im = [];
	this.B_re[1] = .7557853228;
	this.B_im[1] = 0;
	this.B_re[2] = .249204646;
	this.B_im[2] = .003371507;
	this.B_re[3] = -.001541739;
	this.B_im[3] = .04105856;
	this.B_re[4] = -.10162907;
	this.B_im[4] = .01727609;
	this.B_re[5] = -.26623489;
	this.B_im[5] = -.36249218;
	this.B_re[6] = -.6870983;
	this.B_im[6] = -1.1651967;
	this.C_re = [];
	this.C_im = [];
	this.C_re[1] = 1.3231270439;
	this.C_im[1] = 0;
	this.C_re[2] = -.577245789;
	this.C_im[2] = -.007809598;
	this.C_re[3] = .508307513;
	this.C_im[3] = -.112208952;
	this.C_re[4] = -.15094762;
	this.C_im[4] = .18200602;
	this.C_re[5] = 1.01418179;
	this.C_im[5] = 1.64497696;
	this.C_re[6] = 1.9660549;
	this.C_im[6] = 2.5127645;
	this.D = [];
	this.D[1] = 1.5627014243;
	this.D[2] = .5185406398;
	this.D[3] = -.03333098;
	this.D[4] = -.1052906;
	this.D[5] = -.0368594;
	this.D[6] = .007317;
	this.D[7] = .0122;
	this.D[8] = .00394;
	this.D[9] = -.0013;
}
/**
New Zealand Map Grid Forward  - long/lat to x/y
long/lat in radians
*/
function forward$12(p) {
	var n;
	var lon = p.x;
	var delta_lat = p.y - this.lat0;
	var delta_lon = lon - this.long0;
	var d_phi = delta_lat / SEC_TO_RAD * 1e-5;
	var d_lambda = delta_lon;
	var d_phi_n = 1;
	var d_psi = 0;
	for (n = 1; n <= 10; n++) {
		d_phi_n = d_phi_n * d_phi;
		d_psi = d_psi + this.A[n] * d_phi_n;
	}
	var th_re = d_psi;
	var th_im = d_lambda;
	var th_n_re = 1;
	var th_n_im = 0;
	var th_n_re1;
	var th_n_im1;
	var z_re = 0;
	var z_im = 0;
	for (n = 1; n <= 6; n++) {
		th_n_re1 = th_n_re * th_re - th_n_im * th_im;
		th_n_im1 = th_n_im * th_re + th_n_re * th_im;
		th_n_re = th_n_re1;
		th_n_im = th_n_im1;
		z_re = z_re + this.B_re[n] * th_n_re - this.B_im[n] * th_n_im;
		z_im = z_im + this.B_im[n] * th_n_re + this.B_re[n] * th_n_im;
	}
	p.x = z_im * this.a + this.x0;
	p.y = z_re * this.a + this.y0;
	return p;
}
/**
New Zealand Map Grid Inverse  -  x/y to long/lat
*/
function inverse$12(p) {
	var n;
	var x = p.x;
	var y = p.y;
	var delta_x = x - this.x0;
	var z_re = (y - this.y0) / this.a;
	var z_im = delta_x / this.a;
	var z_n_re = 1;
	var z_n_im = 0;
	var z_n_re1;
	var z_n_im1;
	var th_re = 0;
	var th_im = 0;
	for (n = 1; n <= 6; n++) {
		z_n_re1 = z_n_re * z_re - z_n_im * z_im;
		z_n_im1 = z_n_im * z_re + z_n_re * z_im;
		z_n_re = z_n_re1;
		z_n_im = z_n_im1;
		th_re = th_re + this.C_re[n] * z_n_re - this.C_im[n] * z_n_im;
		th_im = th_im + this.C_im[n] * z_n_re + this.C_re[n] * z_n_im;
	}
	for (var i = 0; i < this.iterations; i++) {
		var th_n_re = th_re;
		var th_n_im = th_im;
		var th_n_re1;
		var th_n_im1;
		var num_re = z_re;
		var num_im = z_im;
		for (n = 2; n <= 6; n++) {
			th_n_re1 = th_n_re * th_re - th_n_im * th_im;
			th_n_im1 = th_n_im * th_re + th_n_re * th_im;
			th_n_re = th_n_re1;
			th_n_im = th_n_im1;
			num_re = num_re + (n - 1) * (this.B_re[n] * th_n_re - this.B_im[n] * th_n_im);
			num_im = num_im + (n - 1) * (this.B_im[n] * th_n_re + this.B_re[n] * th_n_im);
		}
		th_n_re = 1;
		th_n_im = 0;
		var den_re = this.B_re[1];
		var den_im = this.B_im[1];
		for (n = 2; n <= 6; n++) {
			th_n_re1 = th_n_re * th_re - th_n_im * th_im;
			th_n_im1 = th_n_im * th_re + th_n_re * th_im;
			th_n_re = th_n_re1;
			th_n_im = th_n_im1;
			den_re = den_re + n * (this.B_re[n] * th_n_re - this.B_im[n] * th_n_im);
			den_im = den_im + n * (this.B_im[n] * th_n_re + this.B_re[n] * th_n_im);
		}
		var den2 = den_re * den_re + den_im * den_im;
		th_re = (num_re * den_re + num_im * den_im) / den2;
		th_im = (num_im * den_re - num_re * den_im) / den2;
	}
	var d_psi = th_re;
	var d_lambda = th_im;
	var d_psi_n = 1;
	var d_phi = 0;
	for (n = 1; n <= 9; n++) {
		d_psi_n = d_psi_n * d_psi;
		d_phi = d_phi + this.D[n] * d_psi_n;
	}
	var lat = this.lat0 + d_phi * SEC_TO_RAD * 1e5;
	p.x = this.long0 + d_lambda;
	p.y = lat;
	return p;
}
var names$12, nzmg_default;
var init_nzmg = __esmMin((() => {
	init_values();
	names$12 = ["New_Zealand_Map_Grid", "nzmg"];
	nzmg_default = {
		init: init$12,
		forward: forward$12,
		inverse: inverse$12,
		names: names$12
	};
}));
//#endregion
//#region node_modules/proj4/lib/projections/mill.js
function init$11() {}
function forward$11(p) {
	var lon = p.x;
	var lat = p.y;
	var dlon = adjust_lon_default(lon - this.long0);
	var x = this.x0 + this.a * dlon;
	var y = this.y0 + this.a * Math.log(Math.tan(Math.PI / 4 + lat / 2.5)) * 1.25;
	p.x = x;
	p.y = y;
	return p;
}
function inverse$11(p) {
	p.x -= this.x0;
	p.y -= this.y0;
	var lon = adjust_lon_default(this.long0 + p.x / this.a);
	var lat = 2.5 * (Math.atan(Math.exp(.8 * p.y / this.a)) - Math.PI / 4);
	p.x = lon;
	p.y = lat;
	return p;
}
var names$11, mill_default;
var init_mill = __esmMin((() => {
	init_adjust_lon();
	names$11 = ["Miller_Cylindrical", "mill"];
	mill_default = {
		init: init$11,
		forward: forward$11,
		inverse: inverse$11,
		names: names$11
	};
}));
//#endregion
//#region node_modules/proj4/lib/projections/sinu.js
function init$10() {
	if (!this.sphere) this.en = pj_enfn_default(this.es);
	else {
		this.n = 1;
		this.m = 0;
		this.es = 0;
		this.C_y = Math.sqrt((this.m + 1) / this.n);
		this.C_x = this.C_y / (this.m + 1);
	}
}
function forward$10(p) {
	var x, y;
	var lon = p.x;
	var lat = p.y;
	lon = adjust_lon_default(lon - this.long0);
	if (this.sphere) {
		if (!this.m) lat = this.n !== 1 ? Math.asin(this.n * Math.sin(lat)) : lat;
		else {
			var k = this.n * Math.sin(lat);
			for (var i = MAX_ITER; i; --i) {
				var V = (this.m * lat + Math.sin(lat) - k) / (this.m + Math.cos(lat));
				lat -= V;
				if (Math.abs(V) < 1e-10) break;
			}
		}
		x = this.a * this.C_x * lon * (this.m + Math.cos(lat));
		y = this.a * this.C_y * lat;
	} else {
		var s = Math.sin(lat);
		var c = Math.cos(lat);
		y = this.a * pj_mlfn_default(lat, s, c, this.en);
		x = this.a * lon * c / Math.sqrt(1 - this.es * s * s);
	}
	p.x = x;
	p.y = y;
	return p;
}
function inverse$10(p) {
	var lat, temp, lon, s;
	p.x -= this.x0;
	lon = p.x / this.a;
	p.y -= this.y0;
	lat = p.y / this.a;
	if (this.sphere) {
		lat /= this.C_y;
		lon = lon / (this.C_x * (this.m + Math.cos(lat)));
		if (this.m) lat = asinz_default((this.m * lat + Math.sin(lat)) / this.n);
		else if (this.n !== 1) lat = asinz_default(Math.sin(lat) / this.n);
		lon = adjust_lon_default(lon + this.long0);
		lat = adjust_lat_default(lat);
	} else {
		lat = pj_inv_mlfn_default(p.y / this.a, this.es, this.en);
		s = Math.abs(lat);
		if (s < HALF_PI) {
			s = Math.sin(lat);
			temp = this.long0 + p.x * Math.sqrt(1 - this.es * s * s) / (this.a * Math.cos(lat));
			lon = adjust_lon_default(temp);
		} else if (s - 1e-10 < HALF_PI) lon = this.long0;
	}
	p.x = lon;
	p.y = lat;
	return p;
}
var MAX_ITER, names$10, sinu_default;
var init_sinu = __esmMin((() => {
	init_adjust_lon();
	init_adjust_lat();
	init_pj_enfn();
	init_pj_mlfn();
	init_pj_inv_mlfn();
	init_values();
	init_asinz();
	MAX_ITER = 20;
	names$10 = ["Sinusoidal", "sinu"];
	sinu_default = {
		init: init$10,
		forward: forward$10,
		inverse: inverse$10,
		names: names$10
	};
}));
//#endregion
//#region node_modules/proj4/lib/projections/moll.js
function init$9() {}
function forward$9(p) {
	var lon = p.x;
	var lat = p.y;
	var delta_lon = adjust_lon_default(lon - this.long0);
	var theta = lat;
	var con = Math.PI * Math.sin(lat);
	while (true) {
		var delta_theta = -(theta + Math.sin(theta) - con) / (1 + Math.cos(theta));
		theta += delta_theta;
		if (Math.abs(delta_theta) < 1e-10) break;
	}
	theta /= 2;
	if (Math.PI / 2 - Math.abs(lat) < 1e-10) delta_lon = 0;
	var x = .900316316158 * this.a * delta_lon * Math.cos(theta) + this.x0;
	var y = 1.4142135623731 * this.a * Math.sin(theta) + this.y0;
	p.x = x;
	p.y = y;
	return p;
}
function inverse$9(p) {
	var theta;
	var arg;
	p.x -= this.x0;
	p.y -= this.y0;
	arg = p.y / (1.4142135623731 * this.a);
	if (Math.abs(arg) > .999999999999) arg = .999999999999;
	theta = Math.asin(arg);
	var lon = adjust_lon_default(this.long0 + p.x / (.900316316158 * this.a * Math.cos(theta)));
	if (lon < -Math.PI) lon = -Math.PI;
	if (lon > Math.PI) lon = Math.PI;
	arg = (2 * theta + Math.sin(2 * theta)) / Math.PI;
	if (Math.abs(arg) > 1) arg = 1;
	var lat = Math.asin(arg);
	p.x = lon;
	p.y = lat;
	return p;
}
var names$9, moll_default;
var init_moll = __esmMin((() => {
	init_adjust_lon();
	init_values();
	names$9 = ["Mollweide", "moll"];
	moll_default = {
		init: init$9,
		forward: forward$9,
		inverse: inverse$9,
		names: names$9
	};
}));
//#endregion
//#region node_modules/proj4/lib/projections/eqdc.js
function init$8() {
	if (Math.abs(this.lat1 + this.lat2) < 1e-10) return;
	this.lat2 = this.lat2 || this.lat1;
	this.temp = this.b / this.a;
	this.es = 1 - Math.pow(this.temp, 2);
	this.e = Math.sqrt(this.es);
	this.e0 = e0fn_default(this.es);
	this.e1 = e1fn_default(this.es);
	this.e2 = e2fn_default(this.es);
	this.e3 = e3fn_default(this.es);
	this.sinphi = Math.sin(this.lat1);
	this.cosphi = Math.cos(this.lat1);
	this.ms1 = msfnz_default(this.e, this.sinphi, this.cosphi);
	this.ml1 = mlfn_default(this.e0, this.e1, this.e2, this.e3, this.lat1);
	if (Math.abs(this.lat1 - this.lat2) < 1e-10) this.ns = this.sinphi;
	else {
		this.sinphi = Math.sin(this.lat2);
		this.cosphi = Math.cos(this.lat2);
		this.ms2 = msfnz_default(this.e, this.sinphi, this.cosphi);
		this.ml2 = mlfn_default(this.e0, this.e1, this.e2, this.e3, this.lat2);
		this.ns = (this.ms1 - this.ms2) / (this.ml2 - this.ml1);
	}
	this.g = this.ml1 + this.ms1 / this.ns;
	this.ml0 = mlfn_default(this.e0, this.e1, this.e2, this.e3, this.lat0);
	this.rh = this.a * (this.g - this.ml0);
}
function forward$8(p) {
	var lon = p.x;
	var lat = p.y;
	var rh1;
	if (this.sphere) rh1 = this.a * (this.g - lat);
	else {
		var ml = mlfn_default(this.e0, this.e1, this.e2, this.e3, lat);
		rh1 = this.a * (this.g - ml);
	}
	var theta = this.ns * adjust_lon_default(lon - this.long0);
	var x = this.x0 + rh1 * Math.sin(theta);
	var y = this.y0 + this.rh - rh1 * Math.cos(theta);
	p.x = x;
	p.y = y;
	return p;
}
function inverse$8(p) {
	p.x -= this.x0;
	p.y = this.rh - p.y + this.y0;
	var con, rh1, lat, lon;
	if (this.ns >= 0) {
		rh1 = Math.sqrt(p.x * p.x + p.y * p.y);
		con = 1;
	} else {
		rh1 = -Math.sqrt(p.x * p.x + p.y * p.y);
		con = -1;
	}
	var theta = 0;
	if (rh1 !== 0) theta = Math.atan2(con * p.x, con * p.y);
	if (this.sphere) {
		lon = adjust_lon_default(this.long0 + theta / this.ns);
		lat = adjust_lat_default(this.g - rh1 / this.a);
		p.x = lon;
		p.y = lat;
		return p;
	} else {
		lat = imlfn_default(this.g - rh1 / this.a, this.e0, this.e1, this.e2, this.e3);
		lon = adjust_lon_default(this.long0 + theta / this.ns);
		p.x = lon;
		p.y = lat;
		return p;
	}
}
var names$8, eqdc_default;
var init_eqdc = __esmMin((() => {
	init_e0fn();
	init_e1fn();
	init_e2fn();
	init_e3fn();
	init_msfnz();
	init_mlfn();
	init_adjust_lon();
	init_adjust_lat();
	init_imlfn();
	init_values();
	names$8 = ["Equidistant_Conic", "eqdc"];
	eqdc_default = {
		init: init$8,
		forward: forward$8,
		inverse: inverse$8,
		names: names$8
	};
}));
//#endregion
//#region node_modules/proj4/lib/projections/vandg.js
function init$7() {
	this.R = this.a;
}
function forward$7(p) {
	var lon = p.x;
	var lat = p.y;
	var dlon = adjust_lon_default(lon - this.long0);
	var x, y;
	if (Math.abs(lat) <= 1e-10) {
		x = this.x0 + this.R * dlon;
		y = this.y0;
	}
	var theta = asinz_default(2 * Math.abs(lat / Math.PI));
	if (Math.abs(dlon) <= 1e-10 || Math.abs(Math.abs(lat) - HALF_PI) <= 1e-10) {
		x = this.x0;
		if (lat >= 0) y = this.y0 + Math.PI * this.R * Math.tan(.5 * theta);
		else y = this.y0 + Math.PI * this.R * -Math.tan(.5 * theta);
	}
	var al = .5 * Math.abs(Math.PI / dlon - dlon / Math.PI);
	var asq = al * al;
	var sinth = Math.sin(theta);
	var costh = Math.cos(theta);
	var g = costh / (sinth + costh - 1);
	var gsq = g * g;
	var m = g * (2 / sinth - 1);
	var msq = m * m;
	var con = Math.PI * this.R * (al * (g - msq) + Math.sqrt(asq * (g - msq) * (g - msq) - (msq + asq) * (gsq - msq))) / (msq + asq);
	if (dlon < 0) con = -con;
	x = this.x0 + con;
	var q = asq + g;
	con = Math.PI * this.R * (m * q - al * Math.sqrt((msq + asq) * (asq + 1) - q * q)) / (msq + asq);
	if (lat >= 0) y = this.y0 + con;
	else y = this.y0 - con;
	p.x = x;
	p.y = y;
	return p;
}
function inverse$7(p) {
	var lon, lat;
	var xx, yy, xys, c1, c2, c3;
	var a1;
	var m1;
	var con;
	var th1;
	var d;
	p.x -= this.x0;
	p.y -= this.y0;
	con = Math.PI * this.R;
	xx = p.x / con;
	yy = p.y / con;
	xys = xx * xx + yy * yy;
	c1 = -Math.abs(yy) * (1 + xys);
	c2 = c1 - 2 * yy * yy + xx * xx;
	c3 = -2 * c1 + 1 + 2 * yy * yy + xys * xys;
	d = yy * yy / c3 + (2 * c2 * c2 * c2 / c3 / c3 / c3 - 9 * c1 * c2 / c3 / c3) / 27;
	a1 = (c1 - c2 * c2 / 3 / c3) / c3;
	m1 = 2 * Math.sqrt(-a1 / 3);
	con = 3 * d / a1 / m1;
	if (Math.abs(con) > 1) {
		if (con >= 0) con = 1;
		else con = -1;
	}
	th1 = Math.acos(con) / 3;
	if (p.y >= 0) lat = (-m1 * Math.cos(th1 + Math.PI / 3) - c2 / 3 / c3) * Math.PI;
	else lat = -(-m1 * Math.cos(th1 + Math.PI / 3) - c2 / 3 / c3) * Math.PI;
	if (Math.abs(xx) < 1e-10) lon = this.long0;
	else lon = adjust_lon_default(this.long0 + Math.PI * (xys - 1 + Math.sqrt(1 + 2 * (xx * xx - yy * yy) + xys * xys)) / 2 / xx);
	p.x = lon;
	p.y = lat;
	return p;
}
var names$7, vandg_default;
var init_vandg = __esmMin((() => {
	init_adjust_lon();
	init_values();
	init_asinz();
	names$7 = [
		"Van_der_Grinten_I",
		"VanDerGrinten",
		"vandg"
	];
	vandg_default = {
		init: init$7,
		forward: forward$7,
		inverse: inverse$7,
		names: names$7
	};
}));
//#endregion
//#region node_modules/proj4/lib/projections/aeqd.js
function init$6() {
	this.sin_p12 = Math.sin(this.lat0);
	this.cos_p12 = Math.cos(this.lat0);
}
function forward$6(p) {
	var lon = p.x;
	var lat = p.y;
	var sinphi = Math.sin(p.y);
	var cosphi = Math.cos(p.y);
	var dlon = adjust_lon_default(lon - this.long0);
	var e0, e1, e2, e3, Mlp, Ml, tanphi, Nl1, Nl, psi, Az, G, H, GH, Hs, c, kp, cos_c, s, s2, s3, s4, s5;
	if (this.sphere) {
		if (Math.abs(this.sin_p12 - 1) <= 1e-10) {
			p.x = this.x0 + this.a * (HALF_PI - lat) * Math.sin(dlon);
			p.y = this.y0 - this.a * (HALF_PI - lat) * Math.cos(dlon);
			return p;
		} else if (Math.abs(this.sin_p12 + 1) <= 1e-10) {
			p.x = this.x0 + this.a * (HALF_PI + lat) * Math.sin(dlon);
			p.y = this.y0 + this.a * (HALF_PI + lat) * Math.cos(dlon);
			return p;
		} else {
			cos_c = this.sin_p12 * sinphi + this.cos_p12 * cosphi * Math.cos(dlon);
			c = Math.acos(cos_c);
			kp = c ? c / Math.sin(c) : 1;
			p.x = this.x0 + this.a * kp * cosphi * Math.sin(dlon);
			p.y = this.y0 + this.a * kp * (this.cos_p12 * sinphi - this.sin_p12 * cosphi * Math.cos(dlon));
			return p;
		}
	} else {
		e0 = e0fn_default(this.es);
		e1 = e1fn_default(this.es);
		e2 = e2fn_default(this.es);
		e3 = e3fn_default(this.es);
		if (Math.abs(this.sin_p12 - 1) <= 1e-10) {
			Mlp = this.a * mlfn_default(e0, e1, e2, e3, HALF_PI);
			Ml = this.a * mlfn_default(e0, e1, e2, e3, lat);
			p.x = this.x0 + (Mlp - Ml) * Math.sin(dlon);
			p.y = this.y0 - (Mlp - Ml) * Math.cos(dlon);
			return p;
		} else if (Math.abs(this.sin_p12 + 1) <= 1e-10) {
			Mlp = this.a * mlfn_default(e0, e1, e2, e3, HALF_PI);
			Ml = this.a * mlfn_default(e0, e1, e2, e3, lat);
			p.x = this.x0 + (Mlp + Ml) * Math.sin(dlon);
			p.y = this.y0 + (Mlp + Ml) * Math.cos(dlon);
			return p;
		} else {
			tanphi = sinphi / cosphi;
			Nl1 = gN_default(this.a, this.e, this.sin_p12);
			Nl = gN_default(this.a, this.e, sinphi);
			psi = Math.atan((1 - this.es) * tanphi + this.es * Nl1 * this.sin_p12 / (Nl * cosphi));
			Az = Math.atan2(Math.sin(dlon), this.cos_p12 * Math.tan(psi) - this.sin_p12 * Math.cos(dlon));
			if (Az === 0) s = Math.asin(this.cos_p12 * Math.sin(psi) - this.sin_p12 * Math.cos(psi));
			else if (Math.abs(Math.abs(Az) - Math.PI) <= 1e-10) s = -Math.asin(this.cos_p12 * Math.sin(psi) - this.sin_p12 * Math.cos(psi));
			else s = Math.asin(Math.sin(dlon) * Math.cos(psi) / Math.sin(Az));
			G = this.e * this.sin_p12 / Math.sqrt(1 - this.es);
			H = this.e * this.cos_p12 * Math.cos(Az) / Math.sqrt(1 - this.es);
			GH = G * H;
			Hs = H * H;
			s2 = s * s;
			s3 = s2 * s;
			s4 = s3 * s;
			s5 = s4 * s;
			c = Nl1 * s * (1 - s2 * Hs * (1 - Hs) / 6 + s3 / 8 * GH * (1 - 2 * Hs) + s4 / 120 * (Hs * (4 - 7 * Hs) - 3 * G * G * (1 - 7 * Hs)) - s5 / 48 * GH);
			p.x = this.x0 + c * Math.sin(Az);
			p.y = this.y0 + c * Math.cos(Az);
			return p;
		}
	}
}
function inverse$6(p) {
	p.x -= this.x0;
	p.y -= this.y0;
	var rh, z, sinz, cosz, lon, lat, con, e0, e1, e2, e3, Mlp, M, N1, psi, Az, cosAz, tmp, A, B, D, Ee, F, sinpsi;
	if (this.sphere) {
		rh = Math.sqrt(p.x * p.x + p.y * p.y);
		if (rh > 2 * HALF_PI * this.a) return;
		z = rh / this.a;
		sinz = Math.sin(z);
		cosz = Math.cos(z);
		lon = this.long0;
		if (Math.abs(rh) <= 1e-10) lat = this.lat0;
		else {
			lat = asinz_default(cosz * this.sin_p12 + p.y * sinz * this.cos_p12 / rh);
			con = Math.abs(this.lat0) - HALF_PI;
			if (Math.abs(con) <= 1e-10) {
				if (this.lat0 >= 0) lon = adjust_lon_default(this.long0 + Math.atan2(p.x, -p.y));
				else lon = adjust_lon_default(this.long0 - Math.atan2(-p.x, p.y));
			} else lon = adjust_lon_default(this.long0 + Math.atan2(p.x * sinz, rh * this.cos_p12 * cosz - p.y * this.sin_p12 * sinz));
		}
		p.x = lon;
		p.y = lat;
		return p;
	} else {
		e0 = e0fn_default(this.es);
		e1 = e1fn_default(this.es);
		e2 = e2fn_default(this.es);
		e3 = e3fn_default(this.es);
		if (Math.abs(this.sin_p12 - 1) <= 1e-10) {
			Mlp = this.a * mlfn_default(e0, e1, e2, e3, HALF_PI);
			rh = Math.sqrt(p.x * p.x + p.y * p.y);
			M = Mlp - rh;
			lat = imlfn_default(M / this.a, e0, e1, e2, e3);
			lon = adjust_lon_default(this.long0 + Math.atan2(p.x, -1 * p.y));
			p.x = lon;
			p.y = lat;
			return p;
		} else if (Math.abs(this.sin_p12 + 1) <= 1e-10) {
			Mlp = this.a * mlfn_default(e0, e1, e2, e3, HALF_PI);
			rh = Math.sqrt(p.x * p.x + p.y * p.y);
			M = rh - Mlp;
			lat = imlfn_default(M / this.a, e0, e1, e2, e3);
			lon = adjust_lon_default(this.long0 + Math.atan2(p.x, p.y));
			p.x = lon;
			p.y = lat;
			return p;
		} else {
			rh = Math.sqrt(p.x * p.x + p.y * p.y);
			Az = Math.atan2(p.x, p.y);
			N1 = gN_default(this.a, this.e, this.sin_p12);
			cosAz = Math.cos(Az);
			tmp = this.e * this.cos_p12 * cosAz;
			A = -tmp * tmp / (1 - this.es);
			B = 3 * this.es * (1 - A) * this.sin_p12 * this.cos_p12 * cosAz / (1 - this.es);
			D = rh / N1;
			Ee = D - A * (1 + A) * Math.pow(D, 3) / 6 - B * (1 + 3 * A) * Math.pow(D, 4) / 24;
			F = 1 - A * Ee * Ee / 2 - D * Ee * Ee * Ee / 6;
			psi = Math.asin(this.sin_p12 * Math.cos(Ee) + this.cos_p12 * Math.sin(Ee) * cosAz);
			lon = adjust_lon_default(this.long0 + Math.asin(Math.sin(Az) * Math.sin(Ee) / Math.cos(psi)));
			sinpsi = Math.sin(psi);
			lat = Math.atan2((sinpsi - this.es * F * this.sin_p12) * Math.tan(psi), sinpsi * (1 - this.es));
			p.x = lon;
			p.y = lat;
			return p;
		}
	}
}
var names$6, aeqd_default;
var init_aeqd = __esmMin((() => {
	init_adjust_lon();
	init_values();
	init_mlfn();
	init_e0fn();
	init_e1fn();
	init_e2fn();
	init_e3fn();
	init_gN();
	init_asinz();
	init_imlfn();
	names$6 = ["Azimuthal_Equidistant", "aeqd"];
	aeqd_default = {
		init: init$6,
		forward: forward$6,
		inverse: inverse$6,
		names: names$6
	};
}));
//#endregion
//#region node_modules/proj4/lib/projections/ortho.js
function init$5() {
	this.sin_p14 = Math.sin(this.lat0);
	this.cos_p14 = Math.cos(this.lat0);
}
function forward$5(p) {
	var sinphi, cosphi;
	var dlon;
	var coslon;
	var ksp;
	var g, x, y;
	var lon = p.x;
	var lat = p.y;
	dlon = adjust_lon_default(lon - this.long0);
	sinphi = Math.sin(lat);
	cosphi = Math.cos(lat);
	coslon = Math.cos(dlon);
	g = this.sin_p14 * sinphi + this.cos_p14 * cosphi * coslon;
	ksp = 1;
	if (g > 0 || Math.abs(g) <= 1e-10) {
		x = this.a * ksp * cosphi * Math.sin(dlon);
		y = this.y0 + this.a * ksp * (this.cos_p14 * sinphi - this.sin_p14 * cosphi * coslon);
	}
	p.x = x;
	p.y = y;
	return p;
}
function inverse$5(p) {
	var rh;
	var z;
	var sinz, cosz;
	var con;
	var lon, lat;
	p.x -= this.x0;
	p.y -= this.y0;
	rh = Math.sqrt(p.x * p.x + p.y * p.y);
	z = asinz_default(rh / this.a);
	sinz = Math.sin(z);
	cosz = Math.cos(z);
	lon = this.long0;
	if (Math.abs(rh) <= 1e-10) {
		lat = this.lat0;
		p.x = lon;
		p.y = lat;
		return p;
	}
	lat = asinz_default(cosz * this.sin_p14 + p.y * sinz * this.cos_p14 / rh);
	con = Math.abs(this.lat0) - HALF_PI;
	if (Math.abs(con) <= 1e-10) {
		if (this.lat0 >= 0) lon = adjust_lon_default(this.long0 + Math.atan2(p.x, -p.y));
		else lon = adjust_lon_default(this.long0 - Math.atan2(-p.x, p.y));
		p.x = lon;
		p.y = lat;
		return p;
	}
	lon = adjust_lon_default(this.long0 + Math.atan2(p.x * sinz, rh * this.cos_p14 * cosz - p.y * this.sin_p14 * sinz));
	p.x = lon;
	p.y = lat;
	return p;
}
var names$5, ortho_default;
var init_ortho = __esmMin((() => {
	init_adjust_lon();
	init_asinz();
	init_values();
	names$5 = ["ortho"];
	ortho_default = {
		init: init$5,
		forward: forward$5,
		inverse: inverse$5,
		names: names$5
	};
}));
//#endregion
//#region node_modules/proj4/lib/projections/qsc.js
function init$4() {
	this.x0 = this.x0 || 0;
	this.y0 = this.y0 || 0;
	this.lat0 = this.lat0 || 0;
	this.long0 = this.long0 || 0;
	this.lat_ts = this.lat_ts || 0;
	this.title = this.title || "Quadrilateralized Spherical Cube";
	if (this.lat0 >= HALF_PI - FORTPI / 2) this.face = FACE_ENUM.TOP;
	else if (this.lat0 <= -(HALF_PI - FORTPI / 2)) this.face = FACE_ENUM.BOTTOM;
	else if (Math.abs(this.long0) <= FORTPI) this.face = FACE_ENUM.FRONT;
	else if (Math.abs(this.long0) <= HALF_PI + FORTPI) this.face = this.long0 > 0 ? FACE_ENUM.RIGHT : FACE_ENUM.LEFT;
	else this.face = FACE_ENUM.BACK;
	if (this.es !== 0) {
		this.one_minus_f = 1 - (this.a - this.b) / this.a;
		this.one_minus_f_squared = this.one_minus_f * this.one_minus_f;
	}
}
function forward$4(p) {
	var xy = {
		x: 0,
		y: 0
	};
	var lat, lon;
	var theta, phi;
	var t, mu;
	var area = { value: 0 };
	p.x -= this.long0;
	if (this.es !== 0) lat = Math.atan(this.one_minus_f_squared * Math.tan(p.y));
	else lat = p.y;
	lon = p.x;
	if (this.face === FACE_ENUM.TOP) {
		phi = HALF_PI - lat;
		if (lon >= FORTPI && lon <= HALF_PI + FORTPI) {
			area.value = AREA_ENUM.AREA_0;
			theta = lon - HALF_PI;
		} else if (lon > HALF_PI + FORTPI || lon <= -(HALF_PI + FORTPI)) {
			area.value = AREA_ENUM.AREA_1;
			theta = lon > 0 ? lon - SPI : lon + SPI;
		} else if (lon > -(HALF_PI + FORTPI) && lon <= -FORTPI) {
			area.value = AREA_ENUM.AREA_2;
			theta = lon + HALF_PI;
		} else {
			area.value = AREA_ENUM.AREA_3;
			theta = lon;
		}
	} else if (this.face === FACE_ENUM.BOTTOM) {
		phi = HALF_PI + lat;
		if (lon >= FORTPI && lon <= HALF_PI + FORTPI) {
			area.value = AREA_ENUM.AREA_0;
			theta = -lon + HALF_PI;
		} else if (lon < FORTPI && lon >= -FORTPI) {
			area.value = AREA_ENUM.AREA_1;
			theta = -lon;
		} else if (lon < -FORTPI && lon >= -(HALF_PI + FORTPI)) {
			area.value = AREA_ENUM.AREA_2;
			theta = -lon - HALF_PI;
		} else {
			area.value = AREA_ENUM.AREA_3;
			theta = lon > 0 ? -lon + SPI : -lon - SPI;
		}
	} else {
		var q, r, s;
		var sinlat, coslat;
		var sinlon, coslon;
		if (this.face === FACE_ENUM.RIGHT) lon = qsc_shift_lon_origin(lon, +HALF_PI);
		else if (this.face === FACE_ENUM.BACK) lon = qsc_shift_lon_origin(lon, +SPI);
		else if (this.face === FACE_ENUM.LEFT) lon = qsc_shift_lon_origin(lon, -HALF_PI);
		sinlat = Math.sin(lat);
		coslat = Math.cos(lat);
		sinlon = Math.sin(lon);
		coslon = Math.cos(lon);
		q = coslat * coslon;
		r = coslat * sinlon;
		s = sinlat;
		if (this.face === FACE_ENUM.FRONT) {
			phi = Math.acos(q);
			theta = qsc_fwd_equat_face_theta(phi, s, r, area);
		} else if (this.face === FACE_ENUM.RIGHT) {
			phi = Math.acos(r);
			theta = qsc_fwd_equat_face_theta(phi, s, -q, area);
		} else if (this.face === FACE_ENUM.BACK) {
			phi = Math.acos(-q);
			theta = qsc_fwd_equat_face_theta(phi, s, -r, area);
		} else if (this.face === FACE_ENUM.LEFT) {
			phi = Math.acos(-r);
			theta = qsc_fwd_equat_face_theta(phi, s, q, area);
		} else {
			phi = theta = 0;
			area.value = AREA_ENUM.AREA_0;
		}
	}
	mu = Math.atan(12 / SPI * (theta + Math.acos(Math.sin(theta) * Math.cos(FORTPI)) - HALF_PI));
	t = Math.sqrt((1 - Math.cos(phi)) / (Math.cos(mu) * Math.cos(mu)) / (1 - Math.cos(Math.atan(1 / Math.cos(theta)))));
	if (area.value === AREA_ENUM.AREA_1) mu += HALF_PI;
	else if (area.value === AREA_ENUM.AREA_2) mu += SPI;
	else if (area.value === AREA_ENUM.AREA_3) mu += 1.5 * SPI;
	xy.x = t * Math.cos(mu);
	xy.y = t * Math.sin(mu);
	xy.x = xy.x * this.a + this.x0;
	xy.y = xy.y * this.a + this.y0;
	p.x = xy.x;
	p.y = xy.y;
	return p;
}
function inverse$4(p) {
	var lp = {
		lam: 0,
		phi: 0
	};
	var mu, nu, cosmu, tannu;
	var tantheta, theta, cosphi, phi;
	var t;
	var area = { value: 0 };
	p.x = (p.x - this.x0) / this.a;
	p.y = (p.y - this.y0) / this.a;
	nu = Math.atan(Math.sqrt(p.x * p.x + p.y * p.y));
	mu = Math.atan2(p.y, p.x);
	if (p.x >= 0 && p.x >= Math.abs(p.y)) area.value = AREA_ENUM.AREA_0;
	else if (p.y >= 0 && p.y >= Math.abs(p.x)) {
		area.value = AREA_ENUM.AREA_1;
		mu -= HALF_PI;
	} else if (p.x < 0 && -p.x >= Math.abs(p.y)) {
		area.value = AREA_ENUM.AREA_2;
		mu = mu < 0 ? mu + SPI : mu - SPI;
	} else {
		area.value = AREA_ENUM.AREA_3;
		mu += HALF_PI;
	}
	t = SPI / 12 * Math.tan(mu);
	tantheta = Math.sin(t) / (Math.cos(t) - 1 / Math.sqrt(2));
	theta = Math.atan(tantheta);
	cosmu = Math.cos(mu);
	tannu = Math.tan(nu);
	cosphi = 1 - cosmu * cosmu * tannu * tannu * (1 - Math.cos(Math.atan(1 / Math.cos(theta))));
	if (cosphi < -1) cosphi = -1;
	else if (cosphi > 1) cosphi = 1;
	if (this.face === FACE_ENUM.TOP) {
		phi = Math.acos(cosphi);
		lp.phi = HALF_PI - phi;
		if (area.value === AREA_ENUM.AREA_0) lp.lam = theta + HALF_PI;
		else if (area.value === AREA_ENUM.AREA_1) lp.lam = theta < 0 ? theta + SPI : theta - SPI;
		else if (area.value === AREA_ENUM.AREA_2) lp.lam = theta - HALF_PI;
		else lp.lam = theta;
	} else if (this.face === FACE_ENUM.BOTTOM) {
		phi = Math.acos(cosphi);
		lp.phi = phi - HALF_PI;
		if (area.value === AREA_ENUM.AREA_0) lp.lam = -theta + HALF_PI;
		else if (area.value === AREA_ENUM.AREA_1) lp.lam = -theta;
		else if (area.value === AREA_ENUM.AREA_2) lp.lam = -theta - HALF_PI;
		else lp.lam = theta < 0 ? -theta - SPI : -theta + SPI;
	} else {
		var q = cosphi, r, s;
		t = q * q;
		if (t >= 1) s = 0;
		else s = Math.sqrt(1 - t) * Math.sin(theta);
		t += s * s;
		if (t >= 1) r = 0;
		else r = Math.sqrt(1 - t);
		if (area.value === AREA_ENUM.AREA_1) {
			t = r;
			r = -s;
			s = t;
		} else if (area.value === AREA_ENUM.AREA_2) {
			r = -r;
			s = -s;
		} else if (area.value === AREA_ENUM.AREA_3) {
			t = r;
			r = s;
			s = -t;
		}
		if (this.face === FACE_ENUM.RIGHT) {
			t = q;
			q = -r;
			r = t;
		} else if (this.face === FACE_ENUM.BACK) {
			q = -q;
			r = -r;
		} else if (this.face === FACE_ENUM.LEFT) {
			t = q;
			q = r;
			r = -t;
		}
		lp.phi = Math.acos(-s) - HALF_PI;
		lp.lam = Math.atan2(r, q);
		if (this.face === FACE_ENUM.RIGHT) lp.lam = qsc_shift_lon_origin(lp.lam, -HALF_PI);
		else if (this.face === FACE_ENUM.BACK) lp.lam = qsc_shift_lon_origin(lp.lam, -SPI);
		else if (this.face === FACE_ENUM.LEFT) lp.lam = qsc_shift_lon_origin(lp.lam, +HALF_PI);
	}
	if (this.es !== 0) {
		var invert_sign;
		var tanphi, xa;
		invert_sign = lp.phi < 0 ? 1 : 0;
		tanphi = Math.tan(lp.phi);
		xa = this.b / Math.sqrt(tanphi * tanphi + this.one_minus_f_squared);
		lp.phi = Math.atan(Math.sqrt(this.a * this.a - xa * xa) / (this.one_minus_f * xa));
		if (invert_sign) lp.phi = -lp.phi;
	}
	lp.lam += this.long0;
	p.x = lp.lam;
	p.y = lp.phi;
	return p;
}
function qsc_fwd_equat_face_theta(phi, y, x, area) {
	var theta;
	if (phi < 1e-10) {
		area.value = AREA_ENUM.AREA_0;
		theta = 0;
	} else {
		theta = Math.atan2(y, x);
		if (Math.abs(theta) <= FORTPI) area.value = AREA_ENUM.AREA_0;
		else if (theta > FORTPI && theta <= HALF_PI + FORTPI) {
			area.value = AREA_ENUM.AREA_1;
			theta -= HALF_PI;
		} else if (theta > HALF_PI + FORTPI || theta <= -(HALF_PI + FORTPI)) {
			area.value = AREA_ENUM.AREA_2;
			theta = theta >= 0 ? theta - SPI : theta + SPI;
		} else {
			area.value = AREA_ENUM.AREA_3;
			theta += HALF_PI;
		}
	}
	return theta;
}
function qsc_shift_lon_origin(lon, offset) {
	var slon = lon + offset;
	if (slon < -3.14159265359) slon += TWO_PI;
	else if (slon > 3.14159265359) slon -= TWO_PI;
	return slon;
}
var FACE_ENUM, AREA_ENUM, names$4, qsc_default;
var init_qsc = __esmMin((() => {
	init_values();
	FACE_ENUM = {
		FRONT: 1,
		RIGHT: 2,
		BACK: 3,
		LEFT: 4,
		TOP: 5,
		BOTTOM: 6
	};
	AREA_ENUM = {
		AREA_0: 1,
		AREA_1: 2,
		AREA_2: 3,
		AREA_3: 4
	};
	names$4 = [
		"Quadrilateralized Spherical Cube",
		"Quadrilateralized_Spherical_Cube",
		"qsc"
	];
	qsc_default = {
		init: init$4,
		forward: forward$4,
		inverse: inverse$4,
		names: names$4
	};
}));
//#endregion
//#region node_modules/proj4/lib/projections/robin.js
function newton_rapshon(f_df, start, max_err, iters) {
	var x = start;
	for (; iters; --iters) {
		var upd = f_df(x);
		x -= upd;
		if (Math.abs(upd) < max_err) break;
	}
	return x;
}
function init$3() {
	this.x0 = this.x0 || 0;
	this.y0 = this.y0 || 0;
	this.long0 = this.long0 || 0;
	this.es = 0;
	this.title = this.title || "Robinson";
}
function forward$3(ll) {
	var lon = adjust_lon_default(ll.x - this.long0);
	var dphi = Math.abs(ll.y);
	var i = Math.floor(dphi * C1);
	if (i < 0) i = 0;
	else if (i >= NODES) i = NODES - 1;
	dphi = R2D * (dphi - RC1 * i);
	var xy = {
		x: poly3_val(COEFS_X[i], dphi) * lon,
		y: poly3_val(COEFS_Y[i], dphi)
	};
	if (ll.y < 0) xy.y = -xy.y;
	xy.x = xy.x * this.a * FXC + this.x0;
	xy.y = xy.y * this.a * FYC + this.y0;
	return xy;
}
function inverse$3(xy) {
	var ll = {
		x: (xy.x - this.x0) / (this.a * FXC),
		y: Math.abs(xy.y - this.y0) / (this.a * FYC)
	};
	if (ll.y >= 1) {
		ll.x /= COEFS_X[NODES][0];
		ll.y = xy.y < 0 ? -HALF_PI : HALF_PI;
	} else {
		var i = Math.floor(ll.y * NODES);
		if (i < 0) i = 0;
		else if (i >= NODES) i = NODES - 1;
		for (;;) if (COEFS_Y[i][0] > ll.y) --i;
		else if (COEFS_Y[i + 1][0] <= ll.y) ++i;
		else break;
		var coefs = COEFS_Y[i];
		var t = 5 * (ll.y - coefs[0]) / (COEFS_Y[i + 1][0] - coefs[0]);
		t = newton_rapshon(function(x) {
			return (poly3_val(coefs, x) - ll.y) / poly3_der(coefs, x);
		}, t, EPSLN, 100);
		ll.x /= poly3_val(COEFS_X[i], t);
		ll.y = (5 * i + t) * D2R$1;
		if (xy.y < 0) ll.y = -ll.y;
	}
	ll.x = adjust_lon_default(ll.x + this.long0);
	return ll;
}
var COEFS_X, COEFS_Y, FXC, FYC, C1, RC1, NODES, poly3_val, poly3_der, names$3, robin_default;
var init_robin = __esmMin((() => {
	init_values();
	init_adjust_lon();
	COEFS_X = [
		[
			1,
			22199e-21,
			-715515e-10,
			31103e-10
		],
		[
			.9986,
			-482243e-9,
			-24897e-9,
			-13309e-10
		],
		[
			.9954,
			-83103e-8,
			-448605e-10,
			-9.86701e-7
		],
		[
			.99,
			-.00135364,
			-59661e-9,
			36777e-10
		],
		[
			.9822,
			-.00167442,
			-449547e-11,
			-572411e-11
		],
		[
			.973,
			-.00214868,
			-903571e-10,
			1.8736e-8
		],
		[
			.96,
			-.00305085,
			-900761e-10,
			164917e-11
		],
		[
			.9427,
			-.00382792,
			-653386e-10,
			-26154e-10
		],
		[
			.9216,
			-.00467746,
			-10457e-8,
			481243e-11
		],
		[
			.8962,
			-.00536223,
			-323831e-10,
			-543432e-11
		],
		[
			.8679,
			-.00609363,
			-113898e-9,
			332484e-11
		],
		[
			.835,
			-.00698325,
			-640253e-10,
			9.34959e-7
		],
		[
			.7986,
			-.00755338,
			-500009e-10,
			9.35324e-7
		],
		[
			.7597,
			-.00798324,
			-35971e-9,
			-227626e-11
		],
		[
			.7186,
			-.00851367,
			-701149e-10,
			-86303e-10
		],
		[
			.6732,
			-.00986209,
			-199569e-9,
			191974e-10
		],
		[
			.6213,
			-.010418,
			883923e-10,
			624051e-11
		],
		[
			.5722,
			-.00906601,
			182e-6,
			624051e-11
		],
		[
			.5322,
			-.00677797,
			275608e-9,
			624051e-11
		]
	];
	COEFS_Y = [
		[
			-520417e-23,
			.0124,
			121431e-23,
			-845284e-16
		],
		[
			.062,
			.0124,
			-1.26793e-9,
			422642e-15
		],
		[
			.124,
			.0124,
			5.07171e-9,
			-1.60604e-9
		],
		[
			.186,
			.0123999,
			-1.90189e-8,
			6.00152e-9
		],
		[
			.248,
			.0124002,
			7.10039e-8,
			-2.24e-8
		],
		[
			.31,
			.0123992,
			-2.64997e-7,
			8.35986e-8
		],
		[
			.372,
			.0124029,
			9.88983e-7,
			-3.11994e-7
		],
		[
			.434,
			.0123893,
			-369093e-11,
			-4.35621e-7
		],
		[
			.4958,
			.0123198,
			-102252e-10,
			-3.45523e-7
		],
		[
			.5571,
			.0121916,
			-154081e-10,
			-5.82288e-7
		],
		[
			.6176,
			.0119938,
			-241424e-10,
			-5.25327e-7
		],
		[
			.6769,
			.011713,
			-320223e-10,
			-5.16405e-7
		],
		[
			.7346,
			.0113541,
			-397684e-10,
			-6.09052e-7
		],
		[
			.7903,
			.0109107,
			-489042e-10,
			-104739e-11
		],
		[
			.8435,
			.0103431,
			-64615e-9,
			-1.40374e-9
		],
		[
			.8936,
			.00969686,
			-64636e-9,
			-8547e-9
		],
		[
			.9394,
			.00840947,
			-192841e-9,
			-42106e-10
		],
		[
			.9761,
			.00616527,
			-256e-6,
			-42106e-10
		],
		[
			1,
			.00328947,
			-319159e-9,
			-42106e-10
		]
	];
	FXC = .8487;
	FYC = 1.3523;
	C1 = R2D / 5;
	RC1 = 1 / C1;
	NODES = 18;
	poly3_val = function(coefs, x) {
		return coefs[0] + x * (coefs[1] + x * (coefs[2] + x * coefs[3]));
	};
	poly3_der = function(coefs, x) {
		return coefs[1] + x * (2 * coefs[2] + x * 3 * coefs[3]);
	};
	names$3 = ["Robinson", "robin"];
	robin_default = {
		init: init$3,
		forward: forward$3,
		inverse: inverse$3,
		names: names$3
	};
}));
//#endregion
//#region node_modules/proj4/lib/projections/geocent.js
function init$2() {
	this.name = "geocent";
}
function forward$2(p) {
	return geodeticToGeocentric(p, this.es, this.a);
}
function inverse$2(p) {
	return geocentricToGeodetic(p, this.es, this.a, this.b);
}
var names$2, geocent_default;
var init_geocent = __esmMin((() => {
	init_datumUtils();
	names$2 = [
		"Geocentric",
		"geocentric",
		"geocent",
		"Geocent"
	];
	geocent_default = {
		init: init$2,
		forward: forward$2,
		inverse: inverse$2,
		names: names$2
	};
}));
//#endregion
//#region node_modules/proj4/lib/projections/tpers.js
function init$1() {
	Object.keys(params).forEach(function(p) {
		if (typeof this[p] === "undefined") this[p] = params[p].def;
		else if (params[p].num && isNaN(this[p])) throw new Error("Invalid parameter value, must be numeric " + p + " = " + this[p]);
		else if (params[p].num) this[p] = parseFloat(this[p]);
		if (params[p].degrees) this[p] = this[p] * D2R$1;
	}.bind(this));
	if (Math.abs(Math.abs(this.lat0) - HALF_PI) < 1e-10) this.mode = this.lat0 < 0 ? mode.S_POLE : mode.N_POLE;
	else if (Math.abs(this.lat0) < 1e-10) this.mode = mode.EQUIT;
	else {
		this.mode = mode.OBLIQ;
		this.sinph0 = Math.sin(this.lat0);
		this.cosph0 = Math.cos(this.lat0);
	}
	this.pn1 = this.h / this.a;
	if (this.pn1 <= 0 || this.pn1 > 1e10) throw new Error("Invalid height");
	this.p = 1 + this.pn1;
	this.rp = 1 / this.p;
	this.h1 = 1 / this.pn1;
	this.pfact = (this.p + 1) * this.h1;
	this.es = 0;
	var omega = this.tilt;
	var gamma = this.azi;
	this.cg = Math.cos(gamma);
	this.sg = Math.sin(gamma);
	this.cw = Math.cos(omega);
	this.sw = Math.sin(omega);
}
function forward$1(p) {
	p.x -= this.long0;
	var sinphi = Math.sin(p.y);
	var cosphi = Math.cos(p.y);
	var coslam = Math.cos(p.x);
	var x, y;
	switch (this.mode) {
		case mode.OBLIQ:
			y = this.sinph0 * sinphi + this.cosph0 * cosphi * coslam;
			break;
		case mode.EQUIT:
			y = cosphi * coslam;
			break;
		case mode.S_POLE:
			y = -sinphi;
			break;
		case mode.N_POLE: y = sinphi;
	}
	y = this.pn1 / (this.p - y);
	x = y * cosphi * Math.sin(p.x);
	switch (this.mode) {
		case mode.OBLIQ:
			y *= this.cosph0 * sinphi - this.sinph0 * cosphi * coslam;
			break;
		case mode.EQUIT:
			y *= sinphi;
			break;
		case mode.N_POLE:
			y *= -(cosphi * coslam);
			break;
		case mode.S_POLE: y *= cosphi * coslam;
	}
	var yt = y * this.cg + x * this.sg, ba = 1 / (yt * this.sw * this.h1 + this.cw);
	x = (x * this.cg - y * this.sg) * this.cw * ba;
	y = yt * ba;
	p.x = x * this.a;
	p.y = y * this.a;
	return p;
}
function inverse$1(p) {
	p.x /= this.a;
	p.y /= this.a;
	var r = {
		x: p.x,
		y: p.y
	};
	var bm, bq, yt = 1 / (this.pn1 - p.y * this.sw);
	bm = this.pn1 * p.x * yt;
	bq = this.pn1 * p.y * this.cw * yt;
	p.x = bm * this.cg + bq * this.sg;
	p.y = bq * this.cg - bm * this.sg;
	var rh = hypot_default(p.x, p.y);
	if (Math.abs(rh) < 1e-10) {
		r.x = 0;
		r.y = p.y;
	} else {
		var cosz, sinz = 1 - rh * rh * this.pfact;
		sinz = (this.p - Math.sqrt(sinz)) / (this.pn1 / rh + rh / this.pn1);
		cosz = Math.sqrt(1 - sinz * sinz);
		switch (this.mode) {
			case mode.OBLIQ:
				r.y = Math.asin(cosz * this.sinph0 + p.y * sinz * this.cosph0 / rh);
				p.y = (cosz - this.sinph0 * Math.sin(r.y)) * rh;
				p.x *= sinz * this.cosph0;
				break;
			case mode.EQUIT:
				r.y = Math.asin(p.y * sinz / rh);
				p.y = cosz * rh;
				p.x *= sinz;
				break;
			case mode.N_POLE:
				r.y = Math.asin(cosz);
				p.y = -p.y;
				break;
			case mode.S_POLE: r.y = -Math.asin(cosz);
		}
		r.x = Math.atan2(p.x, p.y);
	}
	p.x = r.x + this.long0;
	p.y = r.y;
	return p;
}
var mode, params, names$1, tpers_default;
var init_tpers = __esmMin((() => {
	init_values();
	init_hypot();
	mode = {
		N_POLE: 0,
		S_POLE: 1,
		EQUIT: 2,
		OBLIQ: 3
	};
	params = {
		h: {
			def: 1e5,
			num: true
		},
		azi: {
			def: 0,
			num: true,
			degrees: true
		},
		tilt: {
			def: 0,
			num: true,
			degrees: true
		},
		long0: {
			def: 0,
			num: true
		},
		lat0: {
			def: 0,
			num: true
		}
	};
	names$1 = ["Tilted_Perspective", "tpers"];
	tpers_default = {
		init: init$1,
		forward: forward$1,
		inverse: inverse$1,
		names: names$1
	};
}));
//#endregion
//#region node_modules/proj4/lib/projections/geos.js
function init() {
	this.flip_axis = this.sweep === "x" ? 1 : 0;
	this.h = Number(this.h);
	this.radius_g_1 = this.h / this.a;
	if (this.radius_g_1 <= 0 || this.radius_g_1 > 1e10) throw new Error();
	this.radius_g = 1 + this.radius_g_1;
	this.C = this.radius_g * this.radius_g - 1;
	if (this.es !== 0) {
		var one_es = 1 - this.es;
		var rone_es = 1 / one_es;
		this.radius_p = Math.sqrt(one_es);
		this.radius_p2 = one_es;
		this.radius_p_inv2 = rone_es;
		this.shape = "ellipse";
	} else {
		this.radius_p = 1;
		this.radius_p2 = 1;
		this.radius_p_inv2 = 1;
		this.shape = "sphere";
	}
	if (!this.title) this.title = "Geostationary Satellite View";
}
function forward(p) {
	var lon = p.x;
	var lat = p.y;
	var tmp, v_x, v_y, v_z;
	lon = lon - this.long0;
	if (this.shape === "ellipse") {
		lat = Math.atan(this.radius_p2 * Math.tan(lat));
		var r = this.radius_p / hypot_default(this.radius_p * Math.cos(lat), Math.sin(lat));
		v_x = r * Math.cos(lon) * Math.cos(lat);
		v_y = r * Math.sin(lon) * Math.cos(lat);
		v_z = r * Math.sin(lat);
		if ((this.radius_g - v_x) * v_x - v_y * v_y - v_z * v_z * this.radius_p_inv2 < 0) {
			p.x = NaN;
			p.y = NaN;
			return p;
		}
		tmp = this.radius_g - v_x;
		if (this.flip_axis) {
			p.x = this.radius_g_1 * Math.atan(v_y / hypot_default(v_z, tmp));
			p.y = this.radius_g_1 * Math.atan(v_z / tmp);
		} else {
			p.x = this.radius_g_1 * Math.atan(v_y / tmp);
			p.y = this.radius_g_1 * Math.atan(v_z / hypot_default(v_y, tmp));
		}
	} else if (this.shape === "sphere") {
		tmp = Math.cos(lat);
		v_x = Math.cos(lon) * tmp;
		v_y = Math.sin(lon) * tmp;
		v_z = Math.sin(lat);
		tmp = this.radius_g - v_x;
		if (this.flip_axis) {
			p.x = this.radius_g_1 * Math.atan(v_y / hypot_default(v_z, tmp));
			p.y = this.radius_g_1 * Math.atan(v_z / tmp);
		} else {
			p.x = this.radius_g_1 * Math.atan(v_y / tmp);
			p.y = this.radius_g_1 * Math.atan(v_z / hypot_default(v_y, tmp));
		}
	}
	p.x = p.x * this.a;
	p.y = p.y * this.a;
	return p;
}
function inverse(p) {
	var v_x = -1;
	var v_y = 0;
	var v_z = 0;
	var a, b, det, k;
	p.x = p.x / this.a;
	p.y = p.y / this.a;
	if (this.shape === "ellipse") {
		if (this.flip_axis) {
			v_z = Math.tan(p.y / this.radius_g_1);
			v_y = Math.tan(p.x / this.radius_g_1) * hypot_default(1, v_z);
		} else {
			v_y = Math.tan(p.x / this.radius_g_1);
			v_z = Math.tan(p.y / this.radius_g_1) * hypot_default(1, v_y);
		}
		var v_zp = v_z / this.radius_p;
		a = v_y * v_y + v_zp * v_zp + v_x * v_x;
		b = 2 * this.radius_g * v_x;
		det = b * b - 4 * a * this.C;
		if (det < 0) {
			p.x = NaN;
			p.y = NaN;
			return p;
		}
		k = (-b - Math.sqrt(det)) / (2 * a);
		v_x = this.radius_g + k * v_x;
		v_y *= k;
		v_z *= k;
		p.x = Math.atan2(v_y, v_x);
		p.y = Math.atan(v_z * Math.cos(p.x) / v_x);
		p.y = Math.atan(this.radius_p_inv2 * Math.tan(p.y));
	} else if (this.shape === "sphere") {
		if (this.flip_axis) {
			v_z = Math.tan(p.y / this.radius_g_1);
			v_y = Math.tan(p.x / this.radius_g_1) * Math.sqrt(1 + v_z * v_z);
		} else {
			v_y = Math.tan(p.x / this.radius_g_1);
			v_z = Math.tan(p.y / this.radius_g_1) * Math.sqrt(1 + v_y * v_y);
		}
		a = v_y * v_y + v_z * v_z + v_x * v_x;
		b = 2 * this.radius_g * v_x;
		det = b * b - 4 * a * this.C;
		if (det < 0) {
			p.x = NaN;
			p.y = NaN;
			return p;
		}
		k = (-b - Math.sqrt(det)) / (2 * a);
		v_x = this.radius_g + k * v_x;
		v_y *= k;
		v_z *= k;
		p.x = Math.atan2(v_y, v_x);
		p.y = Math.atan(v_z * Math.cos(p.x) / v_x);
	}
	p.x = p.x + this.long0;
	return p;
}
var names, geos_default;
var init_geos = __esmMin((() => {
	init_hypot();
	names = [
		"Geostationary Satellite View",
		"Geostationary_Satellite",
		"geos"
	];
	geos_default = {
		init,
		forward,
		inverse,
		names
	};
}));
//#endregion
//#region node_modules/proj4/projs.js
function projs_default(proj4) {
	proj4.Proj.projections.add(tmerc_default);
	proj4.Proj.projections.add(etmerc_default);
	proj4.Proj.projections.add(utm_default);
	proj4.Proj.projections.add(sterea_default);
	proj4.Proj.projections.add(stere_default);
	proj4.Proj.projections.add(somerc_default);
	proj4.Proj.projections.add(omerc_default);
	proj4.Proj.projections.add(lcc_default);
	proj4.Proj.projections.add(krovak_default);
	proj4.Proj.projections.add(cass_default);
	proj4.Proj.projections.add(laea_default);
	proj4.Proj.projections.add(aea_default);
	proj4.Proj.projections.add(gnom_default);
	proj4.Proj.projections.add(cea_default);
	proj4.Proj.projections.add(eqc_default);
	proj4.Proj.projections.add(poly_default);
	proj4.Proj.projections.add(nzmg_default);
	proj4.Proj.projections.add(mill_default);
	proj4.Proj.projections.add(sinu_default);
	proj4.Proj.projections.add(moll_default);
	proj4.Proj.projections.add(eqdc_default);
	proj4.Proj.projections.add(vandg_default);
	proj4.Proj.projections.add(aeqd_default);
	proj4.Proj.projections.add(ortho_default);
	proj4.Proj.projections.add(qsc_default);
	proj4.Proj.projections.add(robin_default);
	proj4.Proj.projections.add(geocent_default);
	proj4.Proj.projections.add(tpers_default);
	proj4.Proj.projections.add(geos_default);
}
var init_projs = __esmMin((() => {
	init_tmerc();
	init_etmerc();
	init_utm();
	init_sterea();
	init_stere();
	init_somerc();
	init_omerc();
	init_lcc();
	init_krovak();
	init_cass();
	init_laea();
	init_aea();
	init_gnom();
	init_cea();
	init_eqc();
	init_poly();
	init_nzmg();
	init_mill();
	init_sinu();
	init_moll();
	init_eqdc();
	init_vandg();
	init_aeqd();
	init_ortho();
	init_qsc();
	init_robin();
	init_geocent();
	init_tpers();
	init_geos();
}));
//#endregion
//#region node_modules/proj4/lib/index.js
var lib_exports = /* @__PURE__ */ __exportAll({ default: () => lib_default });
var lib_default;
var init_lib = __esmMin((() => {
	init_core();
	init_Proj();
	init_Point();
	init_toPoint();
	init_defs();
	init_nadgrid();
	init_transform();
	init_mgrs();
	init_projs();
	proj4.defaultDatum = "WGS84";
	proj4.Proj = Projection;
	proj4.WGS84 = new proj4.Proj("WGS84");
	proj4.Point = Point;
	proj4.toPoint = toPoint_default;
	proj4.defs = defs;
	proj4.nadgrid = nadgrid;
	proj4.transform = transform;
	proj4.mgrs = mgrs_default;
	proj4.version = "__VERSION__";
	projs_default(proj4);
	lib_default = proj4;
}));
//#endregion
//#region node_modules/proj4leaflet/src/proj4leaflet.js
var require_proj4leaflet = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	(function(factory) {
		var L, proj4;
		if (typeof define === "function" && define.amd) define(["leaflet", "proj4"], factory);
		else if (typeof module === "object" && typeof module.exports === "object") {
			L = __ext_0;
			proj4 = (init_lib(), __toCommonJS(lib_exports));
			module.exports = factory(L, proj4);
		} else {
			if (typeof window.L === "undefined" || typeof window.proj4 === "undefined") throw "Leaflet and proj4 must be loaded first";
			factory(window.L, window.proj4);
		}
	})(function(L, proj4) {
		if (proj4.__esModule && proj4.default) proj4 = proj4.default;
		L.Proj = {};
		L.Proj._isProj4Obj = function(a) {
			return typeof a.inverse !== "undefined" && typeof a.forward !== "undefined";
		};
		L.Proj.Projection = L.Class.extend({
			initialize: function(code, def, bounds) {
				var isP4 = L.Proj._isProj4Obj(code);
				this._proj = isP4 ? code : this._projFromCodeDef(code, def);
				this.bounds = isP4 ? def : bounds;
			},
			project: function(latlng) {
				var point = this._proj.forward([latlng.lng, latlng.lat]);
				return new L.Point(point[0], point[1]);
			},
			unproject: function(point, unbounded) {
				var point2 = this._proj.inverse([point.x, point.y]);
				return new L.LatLng(point2[1], point2[0], unbounded);
			},
			_projFromCodeDef: function(code, def) {
				if (def) proj4.defs(code, def);
				else if (proj4.defs[code] === void 0) {
					var urn = code.split(":");
					if (urn.length > 3) code = urn[urn.length - 3] + ":" + urn[urn.length - 1];
					if (proj4.defs[code] === void 0) throw "No projection definition for code " + code;
				}
				return proj4(code);
			}
		});
		L.Proj.CRS = L.Class.extend({
			includes: L.CRS,
			options: { transformation: new L.Transformation(1, 0, -1, 0) },
			initialize: function(a, b, c) {
				var code, proj, def, options;
				if (L.Proj._isProj4Obj(a)) {
					proj = a;
					code = proj.srsCode;
					options = b || {};
					this.projection = new L.Proj.Projection(proj, options.bounds);
				} else {
					code = a;
					def = b;
					options = c || {};
					this.projection = new L.Proj.Projection(code, def, options.bounds);
				}
				L.Util.setOptions(this, options);
				this.code = code;
				this.transformation = this.options.transformation;
				if (this.options.origin) this.transformation = new L.Transformation(1, -this.options.origin[0], -1, this.options.origin[1]);
				if (this.options.scales) this._scales = this.options.scales;
				else if (this.options.resolutions) {
					this._scales = [];
					for (var i = this.options.resolutions.length - 1; i >= 0; i--) if (this.options.resolutions[i]) this._scales[i] = 1 / this.options.resolutions[i];
				}
				this.infinite = !this.options.bounds;
			},
			scale: function(zoom) {
				var iZoom = Math.floor(zoom), baseScale, nextScale, scaleDiff, zDiff;
				if (zoom === iZoom) return this._scales[zoom];
				else {
					baseScale = this._scales[iZoom];
					nextScale = this._scales[iZoom + 1];
					scaleDiff = nextScale - baseScale;
					zDiff = zoom - iZoom;
					return baseScale + scaleDiff * zDiff;
				}
			},
			zoom: function(scale) {
				var downScale = this._closestElement(this._scales, scale), downZoom = this._scales.indexOf(downScale), nextScale, nextZoom, scaleDiff;
				if (scale === downScale) return downZoom;
				if (downScale === void 0) return -Infinity;
				nextZoom = downZoom + 1;
				nextScale = this._scales[nextZoom];
				if (nextScale === void 0) return Infinity;
				scaleDiff = nextScale - downScale;
				return (scale - downScale) / scaleDiff + downZoom;
			},
			distance: L.CRS.Earth.distance,
			R: L.CRS.Earth.R,
			_closestElement: function(array, element) {
				var low;
				for (var i = array.length; i--;) if (array[i] <= element && (low === void 0 || low < array[i])) low = array[i];
				return low;
			}
		});
		L.Proj.GeoJSON = L.GeoJSON.extend({
			initialize: function(geojson, options) {
				this._callLevel = 0;
				L.GeoJSON.prototype.initialize.call(this, geojson, options);
			},
			addData: function(geojson) {
				var crs;
				if (geojson) {
					if (geojson.crs && geojson.crs.type === "name") crs = new L.Proj.CRS(geojson.crs.properties.name);
					else if (geojson.crs && geojson.crs.type) crs = new L.Proj.CRS(geojson.crs.type + ":" + geojson.crs.properties.code);
					if (crs !== void 0) this.options.coordsToLatLng = function(coords) {
						var point = L.point(coords[0], coords[1]);
						return crs.projection.unproject(point);
					};
				}
				this._callLevel++;
				try {
					L.GeoJSON.prototype.addData.call(this, geojson);
				} finally {
					this._callLevel--;
					if (this._callLevel === 0) delete this.options.coordsToLatLng;
				}
			}
		});
		L.Proj.geoJson = function(geojson, options) {
			return new L.Proj.GeoJSON(geojson, options);
		};
		L.Proj.ImageOverlay = L.ImageOverlay.extend({
			initialize: function(url, bounds, options) {
				L.ImageOverlay.prototype.initialize.call(this, url, null, options);
				this._projectedBounds = bounds;
			},
			_animateZoom: function(event) {
				var scale = this._map.getZoomScale(event.zoom);
				var northWest = L.point(this._projectedBounds.min.x, this._projectedBounds.max.y);
				var offset = this._projectedToNewLayerPoint(northWest, event.zoom, event.center);
				L.DomUtil.setTransform(this._image, offset, scale);
			},
			_reset: function() {
				var zoom = this._map.getZoom();
				var pixelOrigin = this._map.getPixelOrigin();
				var bounds = L.bounds(this._transform(this._projectedBounds.min, zoom)._subtract(pixelOrigin), this._transform(this._projectedBounds.max, zoom)._subtract(pixelOrigin));
				var size = bounds.getSize();
				L.DomUtil.setPosition(this._image, bounds.min);
				this._image.style.width = size.x + "px";
				this._image.style.height = size.y + "px";
			},
			_projectedToNewLayerPoint: function(point, zoom, center) {
				var viewHalf = this._map.getSize()._divideBy(2);
				var topLeft = this._map.project(center, zoom)._subtract(viewHalf)._round().add(this._map._getMapPanePos());
				return this._transform(point, zoom)._subtract(topLeft);
			},
			_transform: function(point, zoom) {
				var crs = this._map.options.crs;
				var transformation = crs.transformation;
				var scale = crs.scale(zoom);
				return transformation.transform(point, scale);
			}
		});
		L.Proj.imageOverlay = function(url, bounds, options) {
			return new L.Proj.ImageOverlay(url, bounds, options);
		};
		return L.Proj;
	});
}));
//#endregion
//#region node_modules/lodash/lodash.min.js
var require_lodash_min = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	/**
	* @license
	* Lodash <https://lodash.com/>
	* Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
	* Released under MIT license <https://lodash.com/license>
	* Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	* Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	*/
	(function() {
		function n(n, t, r) {
			switch (r.length) {
				case 0: return n.call(t);
				case 1: return n.call(t, r[0]);
				case 2: return n.call(t, r[0], r[1]);
				case 3: return n.call(t, r[0], r[1], r[2]);
			}
			return n.apply(t, r);
		}
		function t(n, t, r, e) {
			for (var u = -1, i = null == n ? 0 : n.length; ++u < i;) {
				var o = n[u];
				t(e, o, r(o), n);
			}
			return e;
		}
		function r(n, t) {
			for (var r = -1, e = null == n ? 0 : n.length; ++r < e && t(n[r], r, n) !== !1;);
			return n;
		}
		function e(n, t) {
			for (var r = null == n ? 0 : n.length; r-- && t(n[r], r, n) !== !1;);
			return n;
		}
		function u(n, t) {
			for (var r = -1, e = null == n ? 0 : n.length; ++r < e;) if (!t(n[r], r, n)) return !1;
			return !0;
		}
		function i(n, t) {
			for (var r = -1, e = null == n ? 0 : n.length, u = 0, i = []; ++r < e;) {
				var o = n[r];
				t(o, r, n) && (i[u++] = o);
			}
			return i;
		}
		function o(n, t) {
			return !!(null == n ? 0 : n.length) && y(n, t, 0) > -1;
		}
		function f(n, t, r) {
			for (var e = -1, u = null == n ? 0 : n.length; ++e < u;) if (r(t, n[e])) return !0;
			return !1;
		}
		function c(n, t) {
			for (var r = -1, e = null == n ? 0 : n.length, u = Array(e); ++r < e;) u[r] = t(n[r], r, n);
			return u;
		}
		function a(n, t) {
			for (var r = -1, e = t.length, u = n.length; ++r < e;) n[u + r] = t[r];
			return n;
		}
		function l(n, t, r, e) {
			var u = -1, i = null == n ? 0 : n.length;
			for (e && i && (r = n[++u]); ++u < i;) r = t(r, n[u], u, n);
			return r;
		}
		function s(n, t, r, e) {
			var u = null == n ? 0 : n.length;
			for (e && u && (r = n[--u]); u--;) r = t(r, n[u], u, n);
			return r;
		}
		function h(n, t) {
			for (var r = -1, e = null == n ? 0 : n.length; ++r < e;) if (t(n[r], r, n)) return !0;
			return !1;
		}
		function p(n) {
			return n.split("");
		}
		function _(n) {
			return n.match($t) || [];
		}
		function v(n, t, r) {
			var e;
			return r(n, function(n, r, u) {
				if (t(n, r, u)) return e = r, !1;
			}), e;
		}
		function g(n, t, r, e) {
			for (var u = n.length, i = r + (e ? 1 : -1); e ? i-- : ++i < u;) if (t(n[i], i, n)) return i;
			return -1;
		}
		function y(n, t, r) {
			return t === t ? Z(n, t, r) : g(n, b, r);
		}
		function d(n, t, r, e) {
			for (var u = r - 1, i = n.length; ++u < i;) if (e(n[u], t)) return u;
			return -1;
		}
		function b(n) {
			return n !== n;
		}
		function w(n, t) {
			var r = null == n ? 0 : n.length;
			return r ? k(n, t) / r : Cn;
		}
		function m(n) {
			return function(t) {
				return null == t ? X : t[n];
			};
		}
		function x(n) {
			return function(t) {
				return null == n ? X : n[t];
			};
		}
		function j(n, t, r, e, u) {
			return u(n, function(n, u, i) {
				r = e ? (e = !1, n) : t(r, n, u, i);
			}), r;
		}
		function A(n, t) {
			var r = n.length;
			for (n.sort(t); r--;) n[r] = n[r].value;
			return n;
		}
		function k(n, t) {
			for (var r, e = -1, u = n.length; ++e < u;) {
				var i = t(n[e]);
				i !== X && (r = r === X ? i : r + i);
			}
			return r;
		}
		function O(n, t) {
			for (var r = -1, e = Array(n); ++r < n;) e[r] = t(r);
			return e;
		}
		function I(n, t) {
			return c(t, function(t) {
				return [t, n[t]];
			});
		}
		function R(n) {
			return n ? n.slice(0, H(n) + 1).replace(Lt, "") : n;
		}
		function z(n) {
			return function(t) {
				return n(t);
			};
		}
		function E(n, t) {
			return c(t, function(t) {
				return n[t];
			});
		}
		function S(n, t) {
			return n.has(t);
		}
		function W(n, t) {
			for (var r = -1, e = n.length; ++r < e && y(t, n[r], 0) > -1;);
			return r;
		}
		function L(n, t) {
			for (var r = n.length; r-- && y(t, n[r], 0) > -1;);
			return r;
		}
		function C(n, t) {
			for (var r = n.length, e = 0; r--;) n[r] === t && ++e;
			return e;
		}
		function U(n) {
			return "\\" + Yr[n];
		}
		function B(n, t) {
			return null == n ? X : n[t];
		}
		function T(n) {
			return Nr.test(n);
		}
		function $(n) {
			return Pr.test(n);
		}
		function D(n) {
			for (var t, r = []; !(t = n.next()).done;) r.push(t.value);
			return r;
		}
		function M(n) {
			var t = -1, r = Array(n.size);
			return n.forEach(function(n, e) {
				r[++t] = [e, n];
			}), r;
		}
		function F(n, t) {
			return function(r) {
				return n(t(r));
			};
		}
		function N(n, t) {
			for (var r = -1, e = n.length, u = 0, i = []; ++r < e;) {
				var o = n[r];
				o !== t && o !== cn || (n[r] = cn, i[u++] = r);
			}
			return i;
		}
		function P(n) {
			var t = -1, r = Array(n.size);
			return n.forEach(function(n) {
				r[++t] = n;
			}), r;
		}
		function q(n) {
			var t = -1, r = Array(n.size);
			return n.forEach(function(n) {
				r[++t] = [n, n];
			}), r;
		}
		function Z(n, t, r) {
			for (var e = r - 1, u = n.length; ++e < u;) if (n[e] === t) return e;
			return -1;
		}
		function K(n, t, r) {
			for (var e = r + 1; e--;) if (n[e] === t) return e;
			return e;
		}
		function V(n) {
			return T(n) ? J(n) : _e(n);
		}
		function G(n) {
			return T(n) ? Y(n) : p(n);
		}
		function H(n) {
			for (var t = n.length; t-- && Ct.test(n.charAt(t)););
			return t;
		}
		function J(n) {
			for (var t = Mr.lastIndex = 0; Mr.test(n);) ++t;
			return t;
		}
		function Y(n) {
			return n.match(Mr) || [];
		}
		function Q(n) {
			return n.match(Fr) || [];
		}
		var X, nn = "4.17.21", tn = 200, rn = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.", en = "Expected a function", un = "Invalid `variable` option passed into `_.template`", on = "__lodash_hash_undefined__", fn = 500, cn = "__lodash_placeholder__", an = 1, ln = 2, sn = 4, hn = 1, pn = 2, _n = 1, vn = 2, gn = 4, yn = 8, dn = 16, bn = 32, wn = 64, mn = 128, xn = 256, jn = 512, An = 30, kn = "...", On = 800, In = 16, Rn = 1, zn = 2, En = 3, Sn = 1 / 0, Wn = 9007199254740991, Ln = 17976931348623157e292, Cn = NaN, Un = 4294967295, Bn = Un - 1, Tn = Un >>> 1, $n = [
			["ary", mn],
			["bind", _n],
			["bindKey", vn],
			["curry", yn],
			["curryRight", dn],
			["flip", jn],
			["partial", bn],
			["partialRight", wn],
			["rearg", xn]
		], Dn = "[object Arguments]", Mn = "[object Array]", Fn = "[object AsyncFunction]", Nn = "[object Boolean]", Pn = "[object Date]", qn = "[object DOMException]", Zn = "[object Error]", Kn = "[object Function]", Vn = "[object GeneratorFunction]", Gn = "[object Map]", Hn = "[object Number]", Jn = "[object Null]", Yn = "[object Object]", Qn = "[object Promise]", Xn = "[object Proxy]", nt = "[object RegExp]", tt = "[object Set]", rt = "[object String]", et = "[object Symbol]", ut = "[object Undefined]", it = "[object WeakMap]", ot = "[object WeakSet]", ft = "[object ArrayBuffer]", ct = "[object DataView]", at = "[object Float32Array]", lt = "[object Float64Array]", st = "[object Int8Array]", ht = "[object Int16Array]", pt = "[object Int32Array]", _t = "[object Uint8Array]", vt = "[object Uint8ClampedArray]", gt = "[object Uint16Array]", yt = "[object Uint32Array]", dt = /\b__p \+= '';/g, bt = /\b(__p \+=) '' \+/g, wt = /(__e\(.*?\)|\b__t\)) \+\n'';/g, mt = /&(?:amp|lt|gt|quot|#39);/g, xt = /[&<>"']/g, jt = RegExp(mt.source), At = RegExp(xt.source), kt = /<%-([\s\S]+?)%>/g, Ot = /<%([\s\S]+?)%>/g, It = /<%=([\s\S]+?)%>/g, Rt = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, zt = /^\w*$/, Et = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, St = /[\\^$.*+?()[\]{}|]/g, Wt = RegExp(St.source), Lt = /^\s+/, Ct = /\s/, Ut = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, Bt = /\{\n\/\* \[wrapped with (.+)\] \*/, Tt = /,? & /, $t = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g, Dt = /[()=,{}\[\]\/\s]/, Mt = /\\(\\)?/g, Ft = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g, Nt = /\w*$/, Pt = /^[-+]0x[0-9a-f]+$/i, qt = /^0b[01]+$/i, Zt = /^\[object .+?Constructor\]$/, Kt = /^0o[0-7]+$/i, Vt = /^(?:0|[1-9]\d*)$/, Gt = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, Ht = /($^)/, Jt = /['\n\r\u2028\u2029\\]/g, Yt = "\\ud800-\\udfff", tr = "\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff", rr = "\\u2700-\\u27bf", er = "a-z\\xdf-\\xf6\\xf8-\\xff", ur = "\\xac\\xb1\\xd7\\xf7", ir = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", or = "\\u2000-\\u206f", fr = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", cr = "A-Z\\xc0-\\xd6\\xd8-\\xde", ar = "\\ufe0e\\ufe0f", lr = ur + ir + or + fr, sr = "['’]", hr = "[" + Yt + "]", pr = "[" + lr + "]", _r = "[" + tr + "]", vr = "\\d+", gr = "[" + rr + "]", yr = "[" + er + "]", dr = "[^" + Yt + lr + vr + rr + er + cr + "]", br = "\\ud83c[\\udffb-\\udfff]", wr = "(?:" + _r + "|" + br + ")", mr = "[^" + Yt + "]", xr = "(?:\\ud83c[\\udde6-\\uddff]){2}", jr = "[\\ud800-\\udbff][\\udc00-\\udfff]", Ar = "[" + cr + "]", kr = "\\u200d", Or = "(?:" + yr + "|" + dr + ")", Ir = "(?:" + Ar + "|" + dr + ")", Rr = "(?:" + sr + "(?:d|ll|m|re|s|t|ve))?", zr = "(?:" + sr + "(?:D|LL|M|RE|S|T|VE))?", Er = wr + "?", Sr = "[" + ar + "]?", Wr = "(?:" + kr + "(?:" + [
			mr,
			xr,
			jr
		].join("|") + ")" + Sr + Er + ")*", Lr = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", Cr = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", Ur = Sr + Er + Wr, Br = "(?:" + [
			gr,
			xr,
			jr
		].join("|") + ")" + Ur, Tr = "(?:" + [
			mr + _r + "?",
			_r,
			xr,
			jr,
			hr
		].join("|") + ")", $r = RegExp(sr, "g"), Dr = RegExp(_r, "g"), Mr = RegExp(br + "(?=" + br + ")|" + Tr + Ur, "g"), Fr = RegExp([
			Ar + "?" + yr + "+" + Rr + "(?=" + [
				pr,
				Ar,
				"$"
			].join("|") + ")",
			Ir + "+" + zr + "(?=" + [
				pr,
				Ar + Or,
				"$"
			].join("|") + ")",
			Ar + "?" + Or + "+" + Rr,
			Ar + "+" + zr,
			Cr,
			Lr,
			vr,
			Br
		].join("|"), "g"), Nr = RegExp("[" + kr + Yt + tr + ar + "]"), Pr = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/, qr = [
			"Array",
			"Buffer",
			"DataView",
			"Date",
			"Error",
			"Float32Array",
			"Float64Array",
			"Function",
			"Int8Array",
			"Int16Array",
			"Int32Array",
			"Map",
			"Math",
			"Object",
			"Promise",
			"RegExp",
			"Set",
			"String",
			"Symbol",
			"TypeError",
			"Uint8Array",
			"Uint8ClampedArray",
			"Uint16Array",
			"Uint32Array",
			"WeakMap",
			"_",
			"clearTimeout",
			"isFinite",
			"parseInt",
			"setTimeout"
		], Zr = -1, Kr = {};
		Kr[at] = Kr[lt] = Kr[st] = Kr[ht] = Kr[pt] = Kr[_t] = Kr[vt] = Kr[gt] = Kr[yt] = !0, Kr[Dn] = Kr[Mn] = Kr[ft] = Kr[Nn] = Kr[ct] = Kr[Pn] = Kr[Zn] = Kr[Kn] = Kr[Gn] = Kr[Hn] = Kr[Yn] = Kr[nt] = Kr[tt] = Kr[rt] = Kr[it] = !1;
		var Vr = {};
		Vr[Dn] = Vr[Mn] = Vr[ft] = Vr[ct] = Vr[Nn] = Vr[Pn] = Vr[at] = Vr[lt] = Vr[st] = Vr[ht] = Vr[pt] = Vr[Gn] = Vr[Hn] = Vr[Yn] = Vr[nt] = Vr[tt] = Vr[rt] = Vr[et] = Vr[_t] = Vr[vt] = Vr[gt] = Vr[yt] = !0, Vr[Zn] = Vr[Kn] = Vr[it] = !1;
		var Gr = {
			"À": "A",
			"Á": "A",
			"Â": "A",
			"Ã": "A",
			"Ä": "A",
			"Å": "A",
			"à": "a",
			"á": "a",
			"â": "a",
			"ã": "a",
			"ä": "a",
			"å": "a",
			"Ç": "C",
			"ç": "c",
			"Ð": "D",
			"ð": "d",
			"È": "E",
			"É": "E",
			"Ê": "E",
			"Ë": "E",
			"è": "e",
			"é": "e",
			"ê": "e",
			"ë": "e",
			"Ì": "I",
			"Í": "I",
			"Î": "I",
			"Ï": "I",
			"ì": "i",
			"í": "i",
			"î": "i",
			"ï": "i",
			"Ñ": "N",
			"ñ": "n",
			"Ò": "O",
			"Ó": "O",
			"Ô": "O",
			"Õ": "O",
			"Ö": "O",
			"Ø": "O",
			"ò": "o",
			"ó": "o",
			"ô": "o",
			"õ": "o",
			"ö": "o",
			"ø": "o",
			"Ù": "U",
			"Ú": "U",
			"Û": "U",
			"Ü": "U",
			"ù": "u",
			"ú": "u",
			"û": "u",
			"ü": "u",
			"Ý": "Y",
			"ý": "y",
			"ÿ": "y",
			"Æ": "Ae",
			"æ": "ae",
			"Þ": "Th",
			"þ": "th",
			"ß": "ss",
			"Ā": "A",
			"Ă": "A",
			"Ą": "A",
			"ā": "a",
			"ă": "a",
			"ą": "a",
			"Ć": "C",
			"Ĉ": "C",
			"Ċ": "C",
			"Č": "C",
			"ć": "c",
			"ĉ": "c",
			"ċ": "c",
			"č": "c",
			"Ď": "D",
			"Đ": "D",
			"ď": "d",
			"đ": "d",
			"Ē": "E",
			"Ĕ": "E",
			"Ė": "E",
			"Ę": "E",
			"Ě": "E",
			"ē": "e",
			"ĕ": "e",
			"ė": "e",
			"ę": "e",
			"ě": "e",
			"Ĝ": "G",
			"Ğ": "G",
			"Ġ": "G",
			"Ģ": "G",
			"ĝ": "g",
			"ğ": "g",
			"ġ": "g",
			"ģ": "g",
			"Ĥ": "H",
			"Ħ": "H",
			"ĥ": "h",
			"ħ": "h",
			"Ĩ": "I",
			"Ī": "I",
			"Ĭ": "I",
			"Į": "I",
			"İ": "I",
			"ĩ": "i",
			"ī": "i",
			"ĭ": "i",
			"į": "i",
			"ı": "i",
			"Ĵ": "J",
			"ĵ": "j",
			"Ķ": "K",
			"ķ": "k",
			"ĸ": "k",
			"Ĺ": "L",
			"Ļ": "L",
			"Ľ": "L",
			"Ŀ": "L",
			"Ł": "L",
			"ĺ": "l",
			"ļ": "l",
			"ľ": "l",
			"ŀ": "l",
			"ł": "l",
			"Ń": "N",
			"Ņ": "N",
			"Ň": "N",
			"Ŋ": "N",
			"ń": "n",
			"ņ": "n",
			"ň": "n",
			"ŋ": "n",
			"Ō": "O",
			"Ŏ": "O",
			"Ő": "O",
			"ō": "o",
			"ŏ": "o",
			"ő": "o",
			"Ŕ": "R",
			"Ŗ": "R",
			"Ř": "R",
			"ŕ": "r",
			"ŗ": "r",
			"ř": "r",
			"Ś": "S",
			"Ŝ": "S",
			"Ş": "S",
			"Š": "S",
			"ś": "s",
			"ŝ": "s",
			"ş": "s",
			"š": "s",
			"Ţ": "T",
			"Ť": "T",
			"Ŧ": "T",
			"ţ": "t",
			"ť": "t",
			"ŧ": "t",
			"Ũ": "U",
			"Ū": "U",
			"Ŭ": "U",
			"Ů": "U",
			"Ű": "U",
			"Ų": "U",
			"ũ": "u",
			"ū": "u",
			"ŭ": "u",
			"ů": "u",
			"ű": "u",
			"ų": "u",
			"Ŵ": "W",
			"ŵ": "w",
			"Ŷ": "Y",
			"ŷ": "y",
			"Ÿ": "Y",
			"Ź": "Z",
			"Ż": "Z",
			"Ž": "Z",
			"ź": "z",
			"ż": "z",
			"ž": "z",
			"Ĳ": "IJ",
			"ĳ": "ij",
			"Œ": "Oe",
			"œ": "oe",
			"ŉ": "'n",
			"ſ": "s"
		}, Hr = {
			"&": "&amp;",
			"<": "&lt;",
			">": "&gt;",
			"\"": "&quot;",
			"'": "&#39;"
		}, Jr = {
			"&amp;": "&",
			"&lt;": "<",
			"&gt;": ">",
			"&quot;": "\"",
			"&#39;": "'"
		}, Yr = {
			"\\": "\\",
			"'": "'",
			"\n": "n",
			"\r": "r",
			"\u2028": "u2028",
			"\u2029": "u2029"
		}, Qr = parseFloat, Xr = parseInt, ne = "object" == typeof global && global && global.Object === Object && global, te = "object" == typeof self && self && self.Object === Object && self, re = ne || te || Function("return this")(), ee = "object" == typeof exports && exports && !exports.nodeType && exports, ue = ee && "object" == typeof module && module && !module.nodeType && module, ie = ue && ue.exports === ee, oe = ie && ne.process, fe = function() {
			try {
				var n = ue && ue.require && ue.require("util").types;
				return n ? n : oe && oe.binding && oe.binding("util");
			} catch (n) {}
		}(), ce = fe && fe.isArrayBuffer, ae = fe && fe.isDate, le = fe && fe.isMap, se = fe && fe.isRegExp, he = fe && fe.isSet, pe = fe && fe.isTypedArray, _e = m("length"), ve = x(Gr), ge = x(Hr), ye = x(Jr), be = function p(x) {
			function Z(n) {
				if (cc(n) && !bh(n) && !(n instanceof Ct)) {
					if (n instanceof Y) return n;
					if (bl.call(n, "__wrapped__")) return eo(n);
				}
				return new Y(n);
			}
			function J() {}
			function Y(n, t) {
				this.__wrapped__ = n, this.__actions__ = [], this.__chain__ = !!t, this.__index__ = 0, this.__values__ = X;
			}
			function Ct(n) {
				this.__wrapped__ = n, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = Un, this.__views__ = [];
			}
			function $t() {
				var n = new Ct(this.__wrapped__);
				return n.__actions__ = Tu(this.__actions__), n.__dir__ = this.__dir__, n.__filtered__ = this.__filtered__, n.__iteratees__ = Tu(this.__iteratees__), n.__takeCount__ = this.__takeCount__, n.__views__ = Tu(this.__views__), n;
			}
			function Yt() {
				if (this.__filtered__) {
					var n = new Ct(this);
					n.__dir__ = -1, n.__filtered__ = !0;
				} else n = this.clone(), n.__dir__ *= -1;
				return n;
			}
			function Qt() {
				var n = this.__wrapped__.value(), t = this.__dir__, r = bh(n), e = t < 0, u = r ? n.length : 0, i = Oi(0, u, this.__views__), o = i.start, f = i.end, c = f - o, a = e ? f : o - 1, l = this.__iteratees__, s = l.length, h = 0, p = Hl(c, this.__takeCount__);
				if (!r || !e && u == c && p == c) return wu(n, this.__actions__);
				var _ = [];
				n: for (; c-- && h < p;) {
					a += t;
					for (var v = -1, g = n[a]; ++v < s;) {
						var y = l[v], d = y.iteratee, b = y.type, w = d(g);
						if (b == zn) g = w;
						else if (!w) {
							if (b == Rn) continue n;
							break n;
						}
					}
					_[h++] = g;
				}
				return _;
			}
			function Xt(n) {
				var t = -1, r = null == n ? 0 : n.length;
				for (this.clear(); ++t < r;) {
					var e = n[t];
					this.set(e[0], e[1]);
				}
			}
			function nr() {
				this.__data__ = is ? is(null) : {}, this.size = 0;
			}
			function tr(n) {
				var t = this.has(n) && delete this.__data__[n];
				return this.size -= t ? 1 : 0, t;
			}
			function rr(n) {
				var t = this.__data__;
				if (is) {
					var r = t[n];
					return r === on ? X : r;
				}
				return bl.call(t, n) ? t[n] : X;
			}
			function er(n) {
				var t = this.__data__;
				return is ? t[n] !== X : bl.call(t, n);
			}
			function ur(n, t) {
				var r = this.__data__;
				return this.size += this.has(n) ? 0 : 1, r[n] = is && t === X ? on : t, this;
			}
			function ir(n) {
				var t = -1, r = null == n ? 0 : n.length;
				for (this.clear(); ++t < r;) {
					var e = n[t];
					this.set(e[0], e[1]);
				}
			}
			function or() {
				this.__data__ = [], this.size = 0;
			}
			function fr(n) {
				var t = this.__data__, r = Wr(t, n);
				return !(r < 0) && (r == t.length - 1 ? t.pop() : Ll.call(t, r, 1), --this.size, !0);
			}
			function cr(n) {
				var t = this.__data__, r = Wr(t, n);
				return r < 0 ? X : t[r][1];
			}
			function ar(n) {
				return Wr(this.__data__, n) > -1;
			}
			function lr(n, t) {
				var r = this.__data__, e = Wr(r, n);
				return e < 0 ? (++this.size, r.push([n, t])) : r[e][1] = t, this;
			}
			function sr(n) {
				var t = -1, r = null == n ? 0 : n.length;
				for (this.clear(); ++t < r;) {
					var e = n[t];
					this.set(e[0], e[1]);
				}
			}
			function hr() {
				this.size = 0, this.__data__ = {
					hash: new Xt(),
					map: new (ts || ir)(),
					string: new Xt()
				};
			}
			function pr(n) {
				var t = xi(this, n).delete(n);
				return this.size -= t ? 1 : 0, t;
			}
			function _r(n) {
				return xi(this, n).get(n);
			}
			function vr(n) {
				return xi(this, n).has(n);
			}
			function gr(n, t) {
				var r = xi(this, n), e = r.size;
				return r.set(n, t), this.size += r.size == e ? 0 : 1, this;
			}
			function yr(n) {
				var t = -1, r = null == n ? 0 : n.length;
				for (this.__data__ = new sr(); ++t < r;) this.add(n[t]);
			}
			function dr(n) {
				return this.__data__.set(n, on), this;
			}
			function br(n) {
				return this.__data__.has(n);
			}
			function wr(n) {
				this.size = (this.__data__ = new ir(n)).size;
			}
			function mr() {
				this.__data__ = new ir(), this.size = 0;
			}
			function xr(n) {
				var t = this.__data__, r = t.delete(n);
				return this.size = t.size, r;
			}
			function jr(n) {
				return this.__data__.get(n);
			}
			function Ar(n) {
				return this.__data__.has(n);
			}
			function kr(n, t) {
				var r = this.__data__;
				if (r instanceof ir) {
					var e = r.__data__;
					if (!ts || e.length < 199) return e.push([n, t]), this.size = ++r.size, this;
					r = this.__data__ = new sr(e);
				}
				return r.set(n, t), this.size = r.size, this;
			}
			function Or(n, t) {
				var r = bh(n), e = !r && dh(n), u = !r && !e && mh(n), i = !r && !e && !u && Oh(n), o = r || e || u || i, f = o ? O(n.length, hl) : [], c = f.length;
				for (var a in n) !t && !bl.call(n, a) || o && ("length" == a || u && ("offset" == a || "parent" == a) || i && ("buffer" == a || "byteLength" == a || "byteOffset" == a) || Ci(a, c)) || f.push(a);
				return f;
			}
			function Ir(n) {
				var t = n.length;
				return t ? n[tu(0, t - 1)] : X;
			}
			function Rr(n, t) {
				return Xi(Tu(n), Mr(t, 0, n.length));
			}
			function zr(n) {
				return Xi(Tu(n));
			}
			function Er(n, t, r) {
				(r === X || Gf(n[t], r)) && (r !== X || t in n) || Br(n, t, r);
			}
			function Sr(n, t, r) {
				var e = n[t];
				bl.call(n, t) && Gf(e, r) && (r !== X || t in n) || Br(n, t, r);
			}
			function Wr(n, t) {
				for (var r = n.length; r--;) if (Gf(n[r][0], t)) return r;
				return -1;
			}
			function Lr(n, t, r, e) {
				return ys(n, function(n, u, i) {
					t(e, n, r(n), i);
				}), e;
			}
			function Cr(n, t) {
				return n && $u(t, Pc(t), n);
			}
			function Ur(n, t) {
				return n && $u(t, qc(t), n);
			}
			function Br(n, t, r) {
				"__proto__" == t && Tl ? Tl(n, t, {
					configurable: !0,
					enumerable: !0,
					value: r,
					writable: !0
				}) : n[t] = r;
			}
			function Tr(n, t) {
				for (var r = -1, e = t.length, u = il(e), i = null == n; ++r < e;) u[r] = i ? X : Mc(n, t[r]);
				return u;
			}
			function Mr(n, t, r) {
				return n === n && (r !== X && (n = n <= r ? n : r), t !== X && (n = n >= t ? n : t)), n;
			}
			function Fr(n, t, e, u, i, o) {
				var f, c = t & an, a = t & ln, l = t & sn;
				if (e && (f = i ? e(n, u, i, o) : e(n)), f !== X) return f;
				if (!fc(n)) return n;
				var s = bh(n);
				if (s) {
					if (f = zi(n), !c) return Tu(n, f);
				} else {
					var h = zs(n), p = h == Kn || h == Vn;
					if (mh(n)) return Iu(n, c);
					if (h == Yn || h == Dn || p && !i) {
						if (f = a || p ? {} : Ei(n), !c) return a ? Mu(n, Ur(f, n)) : Du(n, Cr(f, n));
					} else {
						if (!Vr[h]) return i ? n : {};
						f = Si(n, h, c);
					}
				}
				o || (o = new wr());
				var _ = o.get(n);
				if (_) return _;
				o.set(n, f), kh(n) ? n.forEach(function(r) {
					f.add(Fr(r, t, e, r, n, o));
				}) : jh(n) && n.forEach(function(r, u) {
					f.set(u, Fr(r, t, e, u, n, o));
				});
				var g = s ? X : (l ? a ? di : yi : a ? qc : Pc)(n);
				return r(g || n, function(r, u) {
					g && (u = r, r = n[u]), Sr(f, u, Fr(r, t, e, u, n, o));
				}), f;
			}
			function Nr(n) {
				var t = Pc(n);
				return function(r) {
					return Pr(r, n, t);
				};
			}
			function Pr(n, t, r) {
				var e = r.length;
				if (null == n) return !e;
				for (n = ll(n); e--;) {
					var u = r[e], i = t[u], o = n[u];
					if (o === X && !(u in n) || !i(o)) return !1;
				}
				return !0;
			}
			function Gr(n, t, r) {
				if ("function" != typeof n) throw new pl(en);
				return Ws(function() {
					n.apply(X, r);
				}, t);
			}
			function Hr(n, t, r, e) {
				var u = -1, i = o, a = !0, l = n.length, s = [], h = t.length;
				if (!l) return s;
				r && (t = c(t, z(r))), e ? (i = f, a = !1) : t.length >= tn && (i = S, a = !1, t = new yr(t));
				n: for (; ++u < l;) {
					var p = n[u], _ = null == r ? p : r(p);
					if (p = e || 0 !== p ? p : 0, a && _ === _) {
						for (var v = h; v--;) if (t[v] === _) continue n;
						s.push(p);
					} else i(t, _, e) || s.push(p);
				}
				return s;
			}
			function Jr(n, t) {
				var r = !0;
				return ys(n, function(n, e, u) {
					return r = !!t(n, e, u);
				}), r;
			}
			function Yr(n, t, r) {
				for (var e = -1, u = n.length; ++e < u;) {
					var i = n[e], o = t(i);
					if (null != o && (f === X ? o === o && !bc(o) : r(o, f))) var f = o, c = i;
				}
				return c;
			}
			function ne(n, t, r, e) {
				var u = n.length;
				for (r = kc(r), r < 0 && (r = -r > u ? 0 : u + r), e = e === X || e > u ? u : kc(e), e < 0 && (e += u), e = r > e ? 0 : Oc(e); r < e;) n[r++] = t;
				return n;
			}
			function te(n, t) {
				var r = [];
				return ys(n, function(n, e, u) {
					t(n, e, u) && r.push(n);
				}), r;
			}
			function ee(n, t, r, e, u) {
				var i = -1, o = n.length;
				for (r || (r = Li), u || (u = []); ++i < o;) {
					var f = n[i];
					t > 0 && r(f) ? t > 1 ? ee(f, t - 1, r, e, u) : a(u, f) : e || (u[u.length] = f);
				}
				return u;
			}
			function ue(n, t) {
				return n && bs(n, t, Pc);
			}
			function oe(n, t) {
				return n && ws(n, t, Pc);
			}
			function fe(n, t) {
				return i(t, function(t) {
					return uc(n[t]);
				});
			}
			function _e(n, t) {
				t = ku(t, n);
				for (var r = 0, e = t.length; null != n && r < e;) n = n[no(t[r++])];
				return r && r == e ? n : X;
			}
			function de(n, t, r) {
				var e = t(n);
				return bh(n) ? e : a(e, r(n));
			}
			function we(n) {
				return null == n ? n === X ? ut : Jn : Bl && Bl in ll(n) ? ki(n) : Ki(n);
			}
			function me(n, t) {
				return n > t;
			}
			function xe(n, t) {
				return null != n && bl.call(n, t);
			}
			function je(n, t) {
				return null != n && t in ll(n);
			}
			function Ae(n, t, r) {
				return n >= Hl(t, r) && n < Gl(t, r);
			}
			function ke(n, t, r) {
				for (var e = r ? f : o, u = n[0].length, i = n.length, a = i, l = il(i), s = 1 / 0, h = []; a--;) {
					var p = n[a];
					a && t && (p = c(p, z(t))), s = Hl(p.length, s), l[a] = !r && (t || u >= 120 && p.length >= 120) ? new yr(a && p) : X;
				}
				p = n[0];
				var _ = -1, v = l[0];
				n: for (; ++_ < u && h.length < s;) {
					var g = p[_], y = t ? t(g) : g;
					if (g = r || 0 !== g ? g : 0, !(v ? S(v, y) : e(h, y, r))) {
						for (a = i; --a;) {
							var d = l[a];
							if (!(d ? S(d, y) : e(n[a], y, r))) continue n;
						}
						v && v.push(y), h.push(g);
					}
				}
				return h;
			}
			function Oe(n, t, r, e) {
				return ue(n, function(n, u, i) {
					t(e, r(n), u, i);
				}), e;
			}
			function Ie(t, r, e) {
				r = ku(r, t), t = Gi(t, r);
				var u = null == t ? t : t[no(jo(r))];
				return null == u ? X : n(u, t, e);
			}
			function Re(n) {
				return cc(n) && we(n) == Dn;
			}
			function ze(n) {
				return cc(n) && we(n) == ft;
			}
			function Ee(n) {
				return cc(n) && we(n) == Pn;
			}
			function Se(n, t, r, e, u) {
				return n === t || (null == n || null == t || !cc(n) && !cc(t) ? n !== n && t !== t : We(n, t, r, e, Se, u));
			}
			function We(n, t, r, e, u, i) {
				var o = bh(n), f = bh(t), c = o ? Mn : zs(n), a = f ? Mn : zs(t);
				c = c == Dn ? Yn : c, a = a == Dn ? Yn : a;
				var l = c == Yn, s = a == Yn, h = c == a;
				if (h && mh(n)) {
					if (!mh(t)) return !1;
					o = !0, l = !1;
				}
				if (h && !l) return i || (i = new wr()), o || Oh(n) ? pi(n, t, r, e, u, i) : _i(n, t, c, r, e, u, i);
				if (!(r & hn)) {
					var p = l && bl.call(n, "__wrapped__"), _ = s && bl.call(t, "__wrapped__");
					if (p || _) {
						var v = p ? n.value() : n, g = _ ? t.value() : t;
						return i || (i = new wr()), u(v, g, r, e, i);
					}
				}
				return !!h && (i || (i = new wr()), vi(n, t, r, e, u, i));
			}
			function Le(n) {
				return cc(n) && zs(n) == Gn;
			}
			function Ce(n, t, r, e) {
				var u = r.length, i = u, o = !e;
				if (null == n) return !i;
				for (n = ll(n); u--;) {
					var f = r[u];
					if (o && f[2] ? f[1] !== n[f[0]] : !(f[0] in n)) return !1;
				}
				for (; ++u < i;) {
					f = r[u];
					var c = f[0], a = n[c], l = f[1];
					if (o && f[2]) {
						if (a === X && !(c in n)) return !1;
					} else {
						var s = new wr();
						if (e) var h = e(a, l, c, n, t, s);
						if (!(h === X ? Se(l, a, 3, e, s) : h)) return !1;
					}
				}
				return !0;
			}
			function Ue(n) {
				return !(!fc(n) || Di(n)) && (uc(n) ? kl : Zt).test(to(n));
			}
			function Be(n) {
				return cc(n) && we(n) == nt;
			}
			function Te(n) {
				return cc(n) && zs(n) == tt;
			}
			function $e(n) {
				return cc(n) && oc(n.length) && !!Kr[we(n)];
			}
			function De(n) {
				return "function" == typeof n ? n : null == n ? La : "object" == typeof n ? bh(n) ? Ze(n[0], n[1]) : qe(n) : Fa(n);
			}
			function Me(n) {
				if (!Mi(n)) return Vl(n);
				var t = [];
				for (var r in ll(n)) bl.call(n, r) && "constructor" != r && t.push(r);
				return t;
			}
			function Fe(n) {
				if (!fc(n)) return Zi(n);
				var t = Mi(n), r = [];
				for (var e in n) ("constructor" != e || !t && bl.call(n, e)) && r.push(e);
				return r;
			}
			function Ne(n, t) {
				return n < t;
			}
			function Pe(n, t) {
				var r = -1, e = Hf(n) ? il(n.length) : [];
				return ys(n, function(n, u, i) {
					e[++r] = t(n, u, i);
				}), e;
			}
			function qe(n) {
				var t = ji(n);
				return 1 == t.length && t[0][2] ? Ni(t[0][0], t[0][1]) : function(r) {
					return r === n || Ce(r, n, t);
				};
			}
			function Ze(n, t) {
				return Bi(n) && Fi(t) ? Ni(no(n), t) : function(r) {
					var e = Mc(r, n);
					return e === X && e === t ? Nc(r, n) : Se(t, e, 3);
				};
			}
			function Ke(n, t, r, e, u) {
				n !== t && bs(t, function(i, o) {
					if (u || (u = new wr()), fc(i)) Ve(n, t, o, r, Ke, e, u);
					else {
						var f = e ? e(Ji(n, o), i, o + "", n, t, u) : X;
						f === X && (f = i), Er(n, o, f);
					}
				}, qc);
			}
			function Ve(n, t, r, e, u, i, o) {
				var f = Ji(n, r), c = Ji(t, r), a = o.get(c);
				if (a) return Er(n, r, a), X;
				var l = i ? i(f, c, r + "", n, t, o) : X, s = l === X;
				if (s) {
					var h = bh(c), p = !h && mh(c), _ = !h && !p && Oh(c);
					l = c, h || p || _ ? bh(f) ? l = f : Jf(f) ? l = Tu(f) : p ? (s = !1, l = Iu(c, !0)) : _ ? (s = !1, l = Wu(c, !0)) : l = [] : gc(c) || dh(c) ? (l = f, dh(f) ? l = Rc(f) : fc(f) && !uc(f) || (l = Ei(c))) : s = !1;
				}
				s && (o.set(c, l), u(l, c, e, i, o), o.delete(c)), Er(n, r, l);
			}
			function Ge(n, t) {
				var r = n.length;
				if (r) return t += t < 0 ? r : 0, Ci(t, r) ? n[t] : X;
			}
			function He(n, t, r) {
				t = t.length ? c(t, function(n) {
					return bh(n) ? function(t) {
						return _e(t, 1 === n.length ? n[0] : n);
					} : n;
				}) : [La];
				var e = -1;
				return t = c(t, z(mi())), A(Pe(n, function(n, r, u) {
					return {
						criteria: c(t, function(t) {
							return t(n);
						}),
						index: ++e,
						value: n
					};
				}), function(n, t) {
					return Cu(n, t, r);
				});
			}
			function Je(n, t) {
				return Ye(n, t, function(t, r) {
					return Nc(n, r);
				});
			}
			function Ye(n, t, r) {
				for (var e = -1, u = t.length, i = {}; ++e < u;) {
					var o = t[e], f = _e(n, o);
					r(f, o) && fu(i, ku(o, n), f);
				}
				return i;
			}
			function Qe(n) {
				return function(t) {
					return _e(t, n);
				};
			}
			function Xe(n, t, r, e) {
				var u = e ? d : y, i = -1, o = t.length, f = n;
				for (n === t && (t = Tu(t)), r && (f = c(n, z(r))); ++i < o;) for (var a = 0, l = t[i], s = r ? r(l) : l; (a = u(f, s, a, e)) > -1;) f !== n && Ll.call(f, a, 1), Ll.call(n, a, 1);
				return n;
			}
			function nu(n, t) {
				for (var r = n ? t.length : 0, e = r - 1; r--;) {
					var u = t[r];
					if (r == e || u !== i) {
						var i = u;
						Ci(u) ? Ll.call(n, u, 1) : yu(n, u);
					}
				}
				return n;
			}
			function tu(n, t) {
				return n + Nl(Ql() * (t - n + 1));
			}
			function ru(n, t, r, e) {
				for (var u = -1, i = Gl(Fl((t - n) / (r || 1)), 0), o = il(i); i--;) o[e ? i : ++u] = n, n += r;
				return o;
			}
			function eu(n, t) {
				var r = "";
				if (!n || t < 1 || t > Wn) return r;
				do
					t % 2 && (r += n), t = Nl(t / 2), t && (n += n);
				while (t);
				return r;
			}
			function uu(n, t) {
				return Ls(Vi(n, t, La), n + "");
			}
			function iu(n) {
				return Ir(ra(n));
			}
			function ou(n, t) {
				var r = ra(n);
				return Xi(r, Mr(t, 0, r.length));
			}
			function fu(n, t, r, e) {
				if (!fc(n)) return n;
				t = ku(t, n);
				for (var u = -1, i = t.length, o = i - 1, f = n; null != f && ++u < i;) {
					var c = no(t[u]), a = r;
					if ("__proto__" === c || "constructor" === c || "prototype" === c) return n;
					if (u != o) {
						var l = f[c];
						a = e ? e(l, c, f) : X, a === X && (a = fc(l) ? l : Ci(t[u + 1]) ? [] : {});
					}
					Sr(f, c, a), f = f[c];
				}
				return n;
			}
			function cu(n) {
				return Xi(ra(n));
			}
			function au(n, t, r) {
				var e = -1, u = n.length;
				t < 0 && (t = -t > u ? 0 : u + t), r = r > u ? u : r, r < 0 && (r += u), u = t > r ? 0 : r - t >>> 0, t >>>= 0;
				for (var i = il(u); ++e < u;) i[e] = n[e + t];
				return i;
			}
			function lu(n, t) {
				var r;
				return ys(n, function(n, e, u) {
					return r = t(n, e, u), !r;
				}), !!r;
			}
			function su(n, t, r) {
				var e = 0, u = null == n ? e : n.length;
				if ("number" == typeof t && t === t && u <= Tn) {
					for (; e < u;) {
						var i = e + u >>> 1, o = n[i];
						null !== o && !bc(o) && (r ? o <= t : o < t) ? e = i + 1 : u = i;
					}
					return u;
				}
				return hu(n, t, La, r);
			}
			function hu(n, t, r, e) {
				var u = 0, i = null == n ? 0 : n.length;
				if (0 === i) return 0;
				t = r(t);
				for (var o = t !== t, f = null === t, c = bc(t), a = t === X; u < i;) {
					var l = Nl((u + i) / 2), s = r(n[l]), h = s !== X, p = null === s, _ = s === s, v = bc(s);
					if (o) var g = e || _;
					else g = a ? _ && (e || h) : f ? _ && h && (e || !p) : c ? _ && h && !p && (e || !v) : !p && !v && (e ? s <= t : s < t);
					g ? u = l + 1 : i = l;
				}
				return Hl(i, Bn);
			}
			function pu(n, t) {
				for (var r = -1, e = n.length, u = 0, i = []; ++r < e;) {
					var o = n[r], f = t ? t(o) : o;
					if (!r || !Gf(f, c)) {
						var c = f;
						i[u++] = 0 === o ? 0 : o;
					}
				}
				return i;
			}
			function _u(n) {
				return "number" == typeof n ? n : bc(n) ? Cn : +n;
			}
			function vu(n) {
				if ("string" == typeof n) return n;
				if (bh(n)) return c(n, vu) + "";
				if (bc(n)) return vs ? vs.call(n) : "";
				var t = n + "";
				return "0" == t && 1 / n == -Infinity ? "-0" : t;
			}
			function gu(n, t, r) {
				var e = -1, u = o, i = n.length, c = !0, a = [], l = a;
				if (r) c = !1, u = f;
				else if (i >= tn) {
					var s = t ? null : ks(n);
					if (s) return P(s);
					c = !1, u = S, l = new yr();
				} else l = t ? [] : a;
				n: for (; ++e < i;) {
					var h = n[e], p = t ? t(h) : h;
					if (h = r || 0 !== h ? h : 0, c && p === p) {
						for (var _ = l.length; _--;) if (l[_] === p) continue n;
						t && l.push(p), a.push(h);
					} else u(l, p, r) || (l !== a && l.push(p), a.push(h));
				}
				return a;
			}
			function yu(n, t) {
				return t = ku(t, n), n = Gi(n, t), null == n || delete n[no(jo(t))];
			}
			function du(n, t, r, e) {
				return fu(n, t, r(_e(n, t)), e);
			}
			function bu(n, t, r, e) {
				for (var u = n.length, i = e ? u : -1; (e ? i-- : ++i < u) && t(n[i], i, n););
				return r ? au(n, e ? 0 : i, e ? i + 1 : u) : au(n, e ? i + 1 : 0, e ? u : i);
			}
			function wu(n, t) {
				var r = n;
				return r instanceof Ct && (r = r.value()), l(t, function(n, t) {
					return t.func.apply(t.thisArg, a([n], t.args));
				}, r);
			}
			function mu(n, t, r) {
				var e = n.length;
				if (e < 2) return e ? gu(n[0]) : [];
				for (var u = -1, i = il(e); ++u < e;) for (var o = n[u], f = -1; ++f < e;) f != u && (i[u] = Hr(i[u] || o, n[f], t, r));
				return gu(ee(i, 1), t, r);
			}
			function xu(n, t, r) {
				for (var e = -1, u = n.length, i = t.length, o = {}; ++e < u;) r(o, n[e], e < i ? t[e] : X);
				return o;
			}
			function ju(n) {
				return Jf(n) ? n : [];
			}
			function Au(n) {
				return "function" == typeof n ? n : La;
			}
			function ku(n, t) {
				return bh(n) ? n : Bi(n, t) ? [n] : Cs(Ec(n));
			}
			function Ou(n, t, r) {
				var e = n.length;
				return r = r === X ? e : r, !t && r >= e ? n : au(n, t, r);
			}
			function Iu(n, t) {
				if (t) return n.slice();
				var r = n.length, e = zl ? zl(r) : new n.constructor(r);
				return n.copy(e), e;
			}
			function Ru(n) {
				var t = new n.constructor(n.byteLength);
				return new Rl(t).set(new Rl(n)), t;
			}
			function zu(n, t) {
				return new n.constructor(t ? Ru(n.buffer) : n.buffer, n.byteOffset, n.byteLength);
			}
			function Eu(n) {
				var t = new n.constructor(n.source, Nt.exec(n));
				return t.lastIndex = n.lastIndex, t;
			}
			function Su(n) {
				return _s ? ll(_s.call(n)) : {};
			}
			function Wu(n, t) {
				return new n.constructor(t ? Ru(n.buffer) : n.buffer, n.byteOffset, n.length);
			}
			function Lu(n, t) {
				if (n !== t) {
					var r = n !== X, e = null === n, u = n === n, i = bc(n), o = t !== X, f = null === t, c = t === t, a = bc(t);
					if (!f && !a && !i && n > t || i && o && c && !f && !a || e && o && c || !r && c || !u) return 1;
					if (!e && !i && !a && n < t || a && r && u && !e && !i || f && r && u || !o && u || !c) return -1;
				}
				return 0;
			}
			function Cu(n, t, r) {
				for (var e = -1, u = n.criteria, i = t.criteria, o = u.length, f = r.length; ++e < o;) {
					var c = Lu(u[e], i[e]);
					if (c) {
						if (e >= f) return c;
						return c * ("desc" == r[e] ? -1 : 1);
					}
				}
				return n.index - t.index;
			}
			function Uu(n, t, r, e) {
				for (var u = -1, i = n.length, o = r.length, f = -1, c = t.length, a = Gl(i - o, 0), l = il(c + a), s = !e; ++f < c;) l[f] = t[f];
				for (; ++u < o;) (s || u < i) && (l[r[u]] = n[u]);
				for (; a--;) l[f++] = n[u++];
				return l;
			}
			function Bu(n, t, r, e) {
				for (var u = -1, i = n.length, o = -1, f = r.length, c = -1, a = t.length, l = Gl(i - f, 0), s = il(l + a), h = !e; ++u < l;) s[u] = n[u];
				for (var p = u; ++c < a;) s[p + c] = t[c];
				for (; ++o < f;) (h || u < i) && (s[p + r[o]] = n[u++]);
				return s;
			}
			function Tu(n, t) {
				var r = -1, e = n.length;
				for (t || (t = il(e)); ++r < e;) t[r] = n[r];
				return t;
			}
			function $u(n, t, r, e) {
				var u = !r;
				r || (r = {});
				for (var i = -1, o = t.length; ++i < o;) {
					var f = t[i], c = e ? e(r[f], n[f], f, r, n) : X;
					c === X && (c = n[f]), u ? Br(r, f, c) : Sr(r, f, c);
				}
				return r;
			}
			function Du(n, t) {
				return $u(n, Is(n), t);
			}
			function Mu(n, t) {
				return $u(n, Rs(n), t);
			}
			function Fu(n, r) {
				return function(e, u) {
					var i = bh(e) ? t : Lr, o = r ? r() : {};
					return i(e, n, mi(u, 2), o);
				};
			}
			function Nu(n) {
				return uu(function(t, r) {
					var e = -1, u = r.length, i = u > 1 ? r[u - 1] : X, o = u > 2 ? r[2] : X;
					for (i = n.length > 3 && "function" == typeof i ? (u--, i) : X, o && Ui(r[0], r[1], o) && (i = u < 3 ? X : i, u = 1), t = ll(t); ++e < u;) {
						var f = r[e];
						f && n(t, f, e, i);
					}
					return t;
				});
			}
			function Pu(n, t) {
				return function(r, e) {
					if (null == r) return r;
					if (!Hf(r)) return n(r, e);
					for (var u = r.length, i = t ? u : -1, o = ll(r); (t ? i-- : ++i < u) && e(o[i], i, o) !== !1;);
					return r;
				};
			}
			function qu(n) {
				return function(t, r, e) {
					for (var u = -1, i = ll(t), o = e(t), f = o.length; f--;) {
						var c = o[n ? f : ++u];
						if (r(i[c], c, i) === !1) break;
					}
					return t;
				};
			}
			function Zu(n, t, r) {
				function e() {
					return (this && this !== re && this instanceof e ? i : n).apply(u ? r : this, arguments);
				}
				var u = t & _n, i = Gu(n);
				return e;
			}
			function Ku(n) {
				return function(t) {
					t = Ec(t);
					var r = T(t) ? G(t) : X, e = r ? r[0] : t.charAt(0), u = r ? Ou(r, 1).join("") : t.slice(1);
					return e[n]() + u;
				};
			}
			function Vu(n) {
				return function(t) {
					return l(Ra(ca(t).replace($r, "")), n, "");
				};
			}
			function Gu(n) {
				return function() {
					var t = arguments;
					switch (t.length) {
						case 0: return new n();
						case 1: return new n(t[0]);
						case 2: return new n(t[0], t[1]);
						case 3: return new n(t[0], t[1], t[2]);
						case 4: return new n(t[0], t[1], t[2], t[3]);
						case 5: return new n(t[0], t[1], t[2], t[3], t[4]);
						case 6: return new n(t[0], t[1], t[2], t[3], t[4], t[5]);
						case 7: return new n(t[0], t[1], t[2], t[3], t[4], t[5], t[6]);
					}
					var r = gs(n.prototype), e = n.apply(r, t);
					return fc(e) ? e : r;
				};
			}
			function Hu(t, r, e) {
				function u() {
					for (var o = arguments.length, f = il(o), c = o, a = wi(u); c--;) f[c] = arguments[c];
					var l = o < 3 && f[0] !== a && f[o - 1] !== a ? [] : N(f, a);
					return o -= l.length, o < e ? oi(t, r, Qu, u.placeholder, X, f, l, X, X, e - o) : n(this && this !== re && this instanceof u ? i : t, this, f);
				}
				var i = Gu(t);
				return u;
			}
			function Ju(n) {
				return function(t, r, e) {
					var u = ll(t);
					if (!Hf(t)) {
						var i = mi(r, 3);
						t = Pc(t), r = function(n) {
							return i(u[n], n, u);
						};
					}
					var o = n(t, r, e);
					return o > -1 ? u[i ? t[o] : o] : X;
				};
			}
			function Yu(n) {
				return gi(function(t) {
					var r = t.length, e = r, u = Y.prototype.thru;
					for (n && t.reverse(); e--;) {
						var i = t[e];
						if ("function" != typeof i) throw new pl(en);
						if (u && !o && "wrapper" == bi(i)) var o = new Y([], !0);
					}
					for (e = o ? e : r; ++e < r;) {
						i = t[e];
						var f = bi(i), c = "wrapper" == f ? Os(i) : X;
						o = c && $i(c[0]) && c[1] == (mn | yn | bn | xn) && !c[4].length && 1 == c[9] ? o[bi(c[0])].apply(o, c[3]) : 1 == i.length && $i(i) ? o[f]() : o.thru(i);
					}
					return function() {
						var n = arguments, e = n[0];
						if (o && 1 == n.length && bh(e)) return o.plant(e).value();
						for (var u = 0, i = r ? t[u].apply(this, n) : e; ++u < r;) i = t[u].call(this, i);
						return i;
					};
				});
			}
			function Qu(n, t, r, e, u, i, o, f, c, a) {
				function l() {
					for (var y = arguments.length, d = il(y), b = y; b--;) d[b] = arguments[b];
					if (_) var w = wi(l), m = C(d, w);
					if (e && (d = Uu(d, e, u, _)), i && (d = Bu(d, i, o, _)), y -= m, _ && y < a) return oi(n, t, Qu, l.placeholder, r, d, N(d, w), f, c, a - y);
					var x = h ? r : this, j = p ? x[n] : n;
					return y = d.length, f ? d = Hi(d, f) : v && y > 1 && d.reverse(), s && c < y && (d.length = c), this && this !== re && this instanceof l && (j = g || Gu(j)), j.apply(x, d);
				}
				var s = t & mn, h = t & _n, p = t & vn, _ = t & (yn | dn), v = t & jn, g = p ? X : Gu(n);
				return l;
			}
			function Xu(n, t) {
				return function(r, e) {
					return Oe(r, n, t(e), {});
				};
			}
			function ni(n, t) {
				return function(r, e) {
					var u;
					if (r === X && e === X) return t;
					if (r !== X && (u = r), e !== X) {
						if (u === X) return e;
						"string" == typeof r || "string" == typeof e ? (r = vu(r), e = vu(e)) : (r = _u(r), e = _u(e)), u = n(r, e);
					}
					return u;
				};
			}
			function ti(t) {
				return gi(function(r) {
					return r = c(r, z(mi())), uu(function(e) {
						var u = this;
						return t(r, function(t) {
							return n(t, u, e);
						});
					});
				});
			}
			function ri(n, t) {
				t = t === X ? " " : vu(t);
				var r = t.length;
				if (r < 2) return r ? eu(t, n) : t;
				var e = eu(t, Fl(n / V(t)));
				return T(t) ? Ou(G(e), 0, n).join("") : e.slice(0, n);
			}
			function ei(t, r, e, u) {
				function i() {
					for (var r = -1, c = arguments.length, a = -1, l = u.length, s = il(l + c), h = this && this !== re && this instanceof i ? f : t; ++a < l;) s[a] = u[a];
					for (; c--;) s[a++] = arguments[++r];
					return n(h, o ? e : this, s);
				}
				var o = r & _n, f = Gu(t);
				return i;
			}
			function ui(n) {
				return function(t, r, e) {
					return e && "number" != typeof e && Ui(t, r, e) && (r = e = X), t = Ac(t), r === X ? (r = t, t = 0) : r = Ac(r), e = e === X ? t < r ? 1 : -1 : Ac(e), ru(t, r, e, n);
				};
			}
			function ii(n) {
				return function(t, r) {
					return "string" == typeof t && "string" == typeof r || (t = Ic(t), r = Ic(r)), n(t, r);
				};
			}
			function oi(n, t, r, e, u, i, o, f, c, a) {
				var l = t & yn, s = l ? o : X, h = l ? X : o, p = l ? i : X, _ = l ? X : i;
				t |= l ? bn : wn, t &= ~(l ? wn : bn), t & gn || (t &= ~(_n | vn));
				var v = [
					n,
					t,
					u,
					p,
					s,
					_,
					h,
					f,
					c,
					a
				], g = r.apply(X, v);
				return $i(n) && Ss(g, v), g.placeholder = e, Yi(g, n, t);
			}
			function fi(n) {
				var t = al[n];
				return function(n, r) {
					if (n = Ic(n), r = null == r ? 0 : Hl(kc(r), 292), r && Zl(n)) {
						var e = (Ec(n) + "e").split("e");
						return e = (Ec(t(e[0] + "e" + (+e[1] + r))) + "e").split("e"), +(e[0] + "e" + (+e[1] - r));
					}
					return t(n);
				};
			}
			function ci(n) {
				return function(t) {
					var r = zs(t);
					return r == Gn ? M(t) : r == tt ? q(t) : I(t, n(t));
				};
			}
			function ai(n, t, r, e, u, i, o, f) {
				var c = t & vn;
				if (!c && "function" != typeof n) throw new pl(en);
				var a = e ? e.length : 0;
				if (a || (t &= ~(bn | wn), e = u = X), o = o === X ? o : Gl(kc(o), 0), f = f === X ? f : kc(f), a -= u ? u.length : 0, t & wn) {
					var l = e, s = u;
					e = u = X;
				}
				var h = c ? X : Os(n), p = [
					n,
					t,
					r,
					e,
					u,
					l,
					s,
					i,
					o,
					f
				];
				if (h && qi(p, h), n = p[0], t = p[1], r = p[2], e = p[3], u = p[4], f = p[9] = p[9] === X ? c ? 0 : n.length : Gl(p[9] - a, 0), !f && t & (yn | dn) && (t &= ~(yn | dn)), t && t != _n) _ = t == yn || t == dn ? Hu(n, t, f) : t != bn && t != (_n | bn) || u.length ? Qu.apply(X, p) : ei(n, t, r, e);
				else var _ = Zu(n, t, r);
				return Yi((h ? ms : Ss)(_, p), n, t);
			}
			function li(n, t, r, e) {
				return n === X || Gf(n, gl[r]) && !bl.call(e, r) ? t : n;
			}
			function si(n, t, r, e, u, i) {
				return fc(n) && fc(t) && (i.set(t, n), Ke(n, t, X, si, i), i.delete(t)), n;
			}
			function hi(n) {
				return gc(n) ? X : n;
			}
			function pi(n, t, r, e, u, i) {
				var o = r & hn, f = n.length, c = t.length;
				if (f != c && !(o && c > f)) return !1;
				var a = i.get(n), l = i.get(t);
				if (a && l) return a == t && l == n;
				var s = -1, p = !0, _ = r & pn ? new yr() : X;
				for (i.set(n, t), i.set(t, n); ++s < f;) {
					var v = n[s], g = t[s];
					if (e) var y = o ? e(g, v, s, t, n, i) : e(v, g, s, n, t, i);
					if (y !== X) {
						if (y) continue;
						p = !1;
						break;
					}
					if (_) {
						if (!h(t, function(n, t) {
							if (!S(_, t) && (v === n || u(v, n, r, e, i))) return _.push(t);
						})) {
							p = !1;
							break;
						}
					} else if (v !== g && !u(v, g, r, e, i)) {
						p = !1;
						break;
					}
				}
				return i.delete(n), i.delete(t), p;
			}
			function _i(n, t, r, e, u, i, o) {
				switch (r) {
					case ct:
						if (n.byteLength != t.byteLength || n.byteOffset != t.byteOffset) return !1;
						n = n.buffer, t = t.buffer;
					case ft: return !(n.byteLength != t.byteLength || !i(new Rl(n), new Rl(t)));
					case Nn:
					case Pn:
					case Hn: return Gf(+n, +t);
					case Zn: return n.name == t.name && n.message == t.message;
					case nt:
					case rt: return n == t + "";
					case Gn: var f = M;
					case tt:
						var c = e & hn;
						if (f || (f = P), n.size != t.size && !c) return !1;
						var a = o.get(n);
						if (a) return a == t;
						e |= pn, o.set(n, t);
						var l = pi(f(n), f(t), e, u, i, o);
						return o.delete(n), l;
					case et: if (_s) return _s.call(n) == _s.call(t);
				}
				return !1;
			}
			function vi(n, t, r, e, u, i) {
				var o = r & hn, f = yi(n), c = f.length;
				if (c != yi(t).length && !o) return !1;
				for (var a = c; a--;) {
					var l = f[a];
					if (!(o ? l in t : bl.call(t, l))) return !1;
				}
				var s = i.get(n), h = i.get(t);
				if (s && h) return s == t && h == n;
				var p = !0;
				i.set(n, t), i.set(t, n);
				for (var _ = o; ++a < c;) {
					l = f[a];
					var v = n[l], g = t[l];
					if (e) var y = o ? e(g, v, l, t, n, i) : e(v, g, l, n, t, i);
					if (!(y === X ? v === g || u(v, g, r, e, i) : y)) {
						p = !1;
						break;
					}
					_ || (_ = "constructor" == l);
				}
				if (p && !_) {
					var d = n.constructor, b = t.constructor;
					d != b && "constructor" in n && "constructor" in t && !("function" == typeof d && d instanceof d && "function" == typeof b && b instanceof b) && (p = !1);
				}
				return i.delete(n), i.delete(t), p;
			}
			function gi(n) {
				return Ls(Vi(n, X, _o), n + "");
			}
			function yi(n) {
				return de(n, Pc, Is);
			}
			function di(n) {
				return de(n, qc, Rs);
			}
			function bi(n) {
				for (var t = n.name + "", r = fs[t], e = bl.call(fs, t) ? r.length : 0; e--;) {
					var u = r[e], i = u.func;
					if (null == i || i == n) return u.name;
				}
				return t;
			}
			function wi(n) {
				return (bl.call(Z, "placeholder") ? Z : n).placeholder;
			}
			function mi() {
				var n = Z.iteratee || Ca;
				return n = n === Ca ? De : n, arguments.length ? n(arguments[0], arguments[1]) : n;
			}
			function xi(n, t) {
				var r = n.__data__;
				return Ti(t) ? r["string" == typeof t ? "string" : "hash"] : r.map;
			}
			function ji(n) {
				for (var t = Pc(n), r = t.length; r--;) {
					var e = t[r], u = n[e];
					t[r] = [
						e,
						u,
						Fi(u)
					];
				}
				return t;
			}
			function Ai(n, t) {
				var r = B(n, t);
				return Ue(r) ? r : X;
			}
			function ki(n) {
				var t = bl.call(n, Bl), r = n[Bl];
				try {
					n[Bl] = X;
					var e = !0;
				} catch (n) {}
				var u = xl.call(n);
				return e && (t ? n[Bl] = r : delete n[Bl]), u;
			}
			function Oi(n, t, r) {
				for (var e = -1, u = r.length; ++e < u;) {
					var i = r[e], o = i.size;
					switch (i.type) {
						case "drop":
							n += o;
							break;
						case "dropRight":
							t -= o;
							break;
						case "take":
							t = Hl(t, n + o);
							break;
						case "takeRight": n = Gl(n, t - o);
					}
				}
				return {
					start: n,
					end: t
				};
			}
			function Ii(n) {
				var t = n.match(Bt);
				return t ? t[1].split(Tt) : [];
			}
			function Ri(n, t, r) {
				t = ku(t, n);
				for (var e = -1, u = t.length, i = !1; ++e < u;) {
					var o = no(t[e]);
					if (!(i = null != n && r(n, o))) break;
					n = n[o];
				}
				return i || ++e != u ? i : (u = null == n ? 0 : n.length, !!u && oc(u) && Ci(o, u) && (bh(n) || dh(n)));
			}
			function zi(n) {
				var t = n.length, r = new n.constructor(t);
				return t && "string" == typeof n[0] && bl.call(n, "index") && (r.index = n.index, r.input = n.input), r;
			}
			function Ei(n) {
				return "function" != typeof n.constructor || Mi(n) ? {} : gs(El(n));
			}
			function Si(n, t, r) {
				var e = n.constructor;
				switch (t) {
					case ft: return Ru(n);
					case Nn:
					case Pn: return new e(+n);
					case ct: return zu(n, r);
					case at:
					case lt:
					case st:
					case ht:
					case pt:
					case _t:
					case vt:
					case gt:
					case yt: return Wu(n, r);
					case Gn: return new e();
					case Hn:
					case rt: return new e(n);
					case nt: return Eu(n);
					case tt: return new e();
					case et: return Su(n);
				}
			}
			function Wi(n, t) {
				var r = t.length;
				if (!r) return n;
				var e = r - 1;
				return t[e] = (r > 1 ? "& " : "") + t[e], t = t.join(r > 2 ? ", " : " "), n.replace(Ut, "{\n/* [wrapped with " + t + "] */\n");
			}
			function Li(n) {
				return bh(n) || dh(n) || !!(Cl && n && n[Cl]);
			}
			function Ci(n, t) {
				var r = typeof n;
				return t = null == t ? Wn : t, !!t && ("number" == r || "symbol" != r && Vt.test(n)) && n > -1 && n % 1 == 0 && n < t;
			}
			function Ui(n, t, r) {
				if (!fc(r)) return !1;
				var e = typeof t;
				return !!("number" == e ? Hf(r) && Ci(t, r.length) : "string" == e && t in r) && Gf(r[t], n);
			}
			function Bi(n, t) {
				if (bh(n)) return !1;
				var r = typeof n;
				return !("number" != r && "symbol" != r && "boolean" != r && null != n && !bc(n)) || zt.test(n) || !Rt.test(n) || null != t && n in ll(t);
			}
			function Ti(n) {
				var t = typeof n;
				return "string" == t || "number" == t || "symbol" == t || "boolean" == t ? "__proto__" !== n : null === n;
			}
			function $i(n) {
				var t = bi(n), r = Z[t];
				if ("function" != typeof r || !(t in Ct.prototype)) return !1;
				if (n === r) return !0;
				var e = Os(r);
				return !!e && n === e[0];
			}
			function Di(n) {
				return !!ml && ml in n;
			}
			function Mi(n) {
				var t = n && n.constructor;
				return n === ("function" == typeof t && t.prototype || gl);
			}
			function Fi(n) {
				return n === n && !fc(n);
			}
			function Ni(n, t) {
				return function(r) {
					return null != r && r[n] === t && (t !== X || n in ll(r));
				};
			}
			function Pi(n) {
				var t = Cf(n, function(n) {
					return r.size === fn && r.clear(), n;
				}), r = t.cache;
				return t;
			}
			function qi(n, t) {
				var r = n[1], e = t[1], u = r | e, i = u < (_n | vn | mn), o = e == mn && r == yn || e == mn && r == xn && n[7].length <= t[8] || e == (mn | xn) && t[7].length <= t[8] && r == yn;
				if (!i && !o) return n;
				e & _n && (n[2] = t[2], u |= r & _n ? 0 : gn);
				var f = t[3];
				if (f) {
					var c = n[3];
					n[3] = c ? Uu(c, f, t[4]) : f, n[4] = c ? N(n[3], cn) : t[4];
				}
				return f = t[5], f && (c = n[5], n[5] = c ? Bu(c, f, t[6]) : f, n[6] = c ? N(n[5], cn) : t[6]), f = t[7], f && (n[7] = f), e & mn && (n[8] = null == n[8] ? t[8] : Hl(n[8], t[8])), null == n[9] && (n[9] = t[9]), n[0] = t[0], n[1] = u, n;
			}
			function Zi(n) {
				var t = [];
				if (null != n) for (var r in ll(n)) t.push(r);
				return t;
			}
			function Ki(n) {
				return xl.call(n);
			}
			function Vi(t, r, e) {
				return r = Gl(r === X ? t.length - 1 : r, 0), function() {
					for (var u = arguments, i = -1, o = Gl(u.length - r, 0), f = il(o); ++i < o;) f[i] = u[r + i];
					i = -1;
					for (var c = il(r + 1); ++i < r;) c[i] = u[i];
					return c[r] = e(f), n(t, this, c);
				};
			}
			function Gi(n, t) {
				return t.length < 2 ? n : _e(n, au(t, 0, -1));
			}
			function Hi(n, t) {
				for (var r = n.length, e = Hl(t.length, r), u = Tu(n); e--;) {
					var i = t[e];
					n[e] = Ci(i, r) ? u[i] : X;
				}
				return n;
			}
			function Ji(n, t) {
				if (("constructor" !== t || "function" != typeof n[t]) && "__proto__" != t) return n[t];
			}
			function Yi(n, t, r) {
				var e = t + "";
				return Ls(n, Wi(e, ro(Ii(e), r)));
			}
			function Qi(n) {
				var t = 0, r = 0;
				return function() {
					var e = Jl(), u = In - (e - r);
					if (r = e, u > 0) {
						if (++t >= On) return arguments[0];
					} else t = 0;
					return n.apply(X, arguments);
				};
			}
			function Xi(n, t) {
				var r = -1, e = n.length, u = e - 1;
				for (t = t === X ? e : t; ++r < t;) {
					var i = tu(r, u), o = n[i];
					n[i] = n[r], n[r] = o;
				}
				return n.length = t, n;
			}
			function no(n) {
				if ("string" == typeof n || bc(n)) return n;
				var t = n + "";
				return "0" == t && 1 / n == -Infinity ? "-0" : t;
			}
			function to(n) {
				if (null != n) {
					try {
						return dl.call(n);
					} catch (n) {}
					try {
						return n + "";
					} catch (n) {}
				}
				return "";
			}
			function ro(n, t) {
				return r($n, function(r) {
					var e = "_." + r[0];
					t & r[1] && !o(n, e) && n.push(e);
				}), n.sort();
			}
			function eo(n) {
				if (n instanceof Ct) return n.clone();
				var t = new Y(n.__wrapped__, n.__chain__);
				return t.__actions__ = Tu(n.__actions__), t.__index__ = n.__index__, t.__values__ = n.__values__, t;
			}
			function uo(n, t, r) {
				t = (r ? Ui(n, t, r) : t === X) ? 1 : Gl(kc(t), 0);
				var e = null == n ? 0 : n.length;
				if (!e || t < 1) return [];
				for (var u = 0, i = 0, o = il(Fl(e / t)); u < e;) o[i++] = au(n, u, u += t);
				return o;
			}
			function io(n) {
				for (var t = -1, r = null == n ? 0 : n.length, e = 0, u = []; ++t < r;) {
					var i = n[t];
					i && (u[e++] = i);
				}
				return u;
			}
			function oo() {
				var n = arguments.length;
				if (!n) return [];
				for (var t = il(n - 1), r = arguments[0], e = n; e--;) t[e - 1] = arguments[e];
				return a(bh(r) ? Tu(r) : [r], ee(t, 1));
			}
			function fo(n, t, r) {
				var e = null == n ? 0 : n.length;
				return e ? (t = r || t === X ? 1 : kc(t), au(n, t < 0 ? 0 : t, e)) : [];
			}
			function co(n, t, r) {
				var e = null == n ? 0 : n.length;
				return e ? (t = r || t === X ? 1 : kc(t), t = e - t, au(n, 0, t < 0 ? 0 : t)) : [];
			}
			function ao(n, t) {
				return n && n.length ? bu(n, mi(t, 3), !0, !0) : [];
			}
			function lo(n, t) {
				return n && n.length ? bu(n, mi(t, 3), !0) : [];
			}
			function so(n, t, r, e) {
				var u = null == n ? 0 : n.length;
				return u ? (r && "number" != typeof r && Ui(n, t, r) && (r = 0, e = u), ne(n, t, r, e)) : [];
			}
			function ho(n, t, r) {
				var e = null == n ? 0 : n.length;
				if (!e) return -1;
				var u = null == r ? 0 : kc(r);
				return u < 0 && (u = Gl(e + u, 0)), g(n, mi(t, 3), u);
			}
			function po(n, t, r) {
				var e = null == n ? 0 : n.length;
				if (!e) return -1;
				var u = e - 1;
				return r !== X && (u = kc(r), u = r < 0 ? Gl(e + u, 0) : Hl(u, e - 1)), g(n, mi(t, 3), u, !0);
			}
			function _o(n) {
				return (null == n ? 0 : n.length) ? ee(n, 1) : [];
			}
			function vo(n) {
				return (null == n ? 0 : n.length) ? ee(n, Sn) : [];
			}
			function go(n, t) {
				return (null == n ? 0 : n.length) ? (t = t === X ? 1 : kc(t), ee(n, t)) : [];
			}
			function yo(n) {
				for (var t = -1, r = null == n ? 0 : n.length, e = {}; ++t < r;) {
					var u = n[t];
					e[u[0]] = u[1];
				}
				return e;
			}
			function bo(n) {
				return n && n.length ? n[0] : X;
			}
			function wo(n, t, r) {
				var e = null == n ? 0 : n.length;
				if (!e) return -1;
				var u = null == r ? 0 : kc(r);
				return u < 0 && (u = Gl(e + u, 0)), y(n, t, u);
			}
			function mo(n) {
				return (null == n ? 0 : n.length) ? au(n, 0, -1) : [];
			}
			function xo(n, t) {
				return null == n ? "" : Kl.call(n, t);
			}
			function jo(n) {
				var t = null == n ? 0 : n.length;
				return t ? n[t - 1] : X;
			}
			function Ao(n, t, r) {
				var e = null == n ? 0 : n.length;
				if (!e) return -1;
				var u = e;
				return r !== X && (u = kc(r), u = u < 0 ? Gl(e + u, 0) : Hl(u, e - 1)), t === t ? K(n, t, u) : g(n, b, u, !0);
			}
			function ko(n, t) {
				return n && n.length ? Ge(n, kc(t)) : X;
			}
			function Oo(n, t) {
				return n && n.length && t && t.length ? Xe(n, t) : n;
			}
			function Io(n, t, r) {
				return n && n.length && t && t.length ? Xe(n, t, mi(r, 2)) : n;
			}
			function Ro(n, t, r) {
				return n && n.length && t && t.length ? Xe(n, t, X, r) : n;
			}
			function zo(n, t) {
				var r = [];
				if (!n || !n.length) return r;
				var e = -1, u = [], i = n.length;
				for (t = mi(t, 3); ++e < i;) {
					var o = n[e];
					t(o, e, n) && (r.push(o), u.push(e));
				}
				return nu(n, u), r;
			}
			function Eo(n) {
				return null == n ? n : Xl.call(n);
			}
			function So(n, t, r) {
				var e = null == n ? 0 : n.length;
				return e ? (r && "number" != typeof r && Ui(n, t, r) ? (t = 0, r = e) : (t = null == t ? 0 : kc(t), r = r === X ? e : kc(r)), au(n, t, r)) : [];
			}
			function Wo(n, t) {
				return su(n, t);
			}
			function Lo(n, t, r) {
				return hu(n, t, mi(r, 2));
			}
			function Co(n, t) {
				var r = null == n ? 0 : n.length;
				if (r) {
					var e = su(n, t);
					if (e < r && Gf(n[e], t)) return e;
				}
				return -1;
			}
			function Uo(n, t) {
				return su(n, t, !0);
			}
			function Bo(n, t, r) {
				return hu(n, t, mi(r, 2), !0);
			}
			function To(n, t) {
				if (null == n ? 0 : n.length) {
					var r = su(n, t, !0) - 1;
					if (Gf(n[r], t)) return r;
				}
				return -1;
			}
			function $o(n) {
				return n && n.length ? pu(n) : [];
			}
			function Do(n, t) {
				return n && n.length ? pu(n, mi(t, 2)) : [];
			}
			function Mo(n) {
				var t = null == n ? 0 : n.length;
				return t ? au(n, 1, t) : [];
			}
			function Fo(n, t, r) {
				return n && n.length ? (t = r || t === X ? 1 : kc(t), au(n, 0, t < 0 ? 0 : t)) : [];
			}
			function No(n, t, r) {
				var e = null == n ? 0 : n.length;
				return e ? (t = r || t === X ? 1 : kc(t), t = e - t, au(n, t < 0 ? 0 : t, e)) : [];
			}
			function Po(n, t) {
				return n && n.length ? bu(n, mi(t, 3), !1, !0) : [];
			}
			function qo(n, t) {
				return n && n.length ? bu(n, mi(t, 3)) : [];
			}
			function Zo(n) {
				return n && n.length ? gu(n) : [];
			}
			function Ko(n, t) {
				return n && n.length ? gu(n, mi(t, 2)) : [];
			}
			function Vo(n, t) {
				return t = "function" == typeof t ? t : X, n && n.length ? gu(n, X, t) : [];
			}
			function Go(n) {
				if (!n || !n.length) return [];
				var t = 0;
				return n = i(n, function(n) {
					if (Jf(n)) return t = Gl(n.length, t), !0;
				}), O(t, function(t) {
					return c(n, m(t));
				});
			}
			function Ho(t, r) {
				if (!t || !t.length) return [];
				var e = Go(t);
				return null == r ? e : c(e, function(t) {
					return n(r, X, t);
				});
			}
			function Jo(n, t) {
				return xu(n || [], t || [], Sr);
			}
			function Yo(n, t) {
				return xu(n || [], t || [], fu);
			}
			function Qo(n) {
				var t = Z(n);
				return t.__chain__ = !0, t;
			}
			function Xo(n, t) {
				return t(n), n;
			}
			function nf(n, t) {
				return t(n);
			}
			function tf() {
				return Qo(this);
			}
			function rf() {
				return new Y(this.value(), this.__chain__);
			}
			function ef() {
				this.__values__ === X && (this.__values__ = jc(this.value()));
				var n = this.__index__ >= this.__values__.length;
				return {
					done: n,
					value: n ? X : this.__values__[this.__index__++]
				};
			}
			function uf() {
				return this;
			}
			function of(n) {
				for (var t, r = this; r instanceof J;) {
					var e = eo(r);
					e.__index__ = 0, e.__values__ = X, t ? u.__wrapped__ = e : t = e;
					var u = e;
					r = r.__wrapped__;
				}
				return u.__wrapped__ = n, t;
			}
			function ff() {
				var n = this.__wrapped__;
				if (n instanceof Ct) {
					var t = n;
					return this.__actions__.length && (t = new Ct(this)), t = t.reverse(), t.__actions__.push({
						func: nf,
						args: [Eo],
						thisArg: X
					}), new Y(t, this.__chain__);
				}
				return this.thru(Eo);
			}
			function cf() {
				return wu(this.__wrapped__, this.__actions__);
			}
			function af(n, t, r) {
				var e = bh(n) ? u : Jr;
				return r && Ui(n, t, r) && (t = X), e(n, mi(t, 3));
			}
			function lf(n, t) {
				return (bh(n) ? i : te)(n, mi(t, 3));
			}
			function sf(n, t) {
				return ee(yf(n, t), 1);
			}
			function hf(n, t) {
				return ee(yf(n, t), Sn);
			}
			function pf(n, t, r) {
				return r = r === X ? 1 : kc(r), ee(yf(n, t), r);
			}
			function _f(n, t) {
				return (bh(n) ? r : ys)(n, mi(t, 3));
			}
			function vf(n, t) {
				return (bh(n) ? e : ds)(n, mi(t, 3));
			}
			function gf(n, t, r, e) {
				n = Hf(n) ? n : ra(n), r = r && !e ? kc(r) : 0;
				var u = n.length;
				return r < 0 && (r = Gl(u + r, 0)), dc(n) ? r <= u && n.indexOf(t, r) > -1 : !!u && y(n, t, r) > -1;
			}
			function yf(n, t) {
				return (bh(n) ? c : Pe)(n, mi(t, 3));
			}
			function df(n, t, r, e) {
				return null == n ? [] : (bh(t) || (t = null == t ? [] : [t]), r = e ? X : r, bh(r) || (r = null == r ? [] : [r]), He(n, t, r));
			}
			function bf(n, t, r) {
				var e = bh(n) ? l : j, u = arguments.length < 3;
				return e(n, mi(t, 4), r, u, ys);
			}
			function wf(n, t, r) {
				var e = bh(n) ? s : j, u = arguments.length < 3;
				return e(n, mi(t, 4), r, u, ds);
			}
			function mf(n, t) {
				return (bh(n) ? i : te)(n, Uf(mi(t, 3)));
			}
			function xf(n) {
				return (bh(n) ? Ir : iu)(n);
			}
			function jf(n, t, r) {
				return t = (r ? Ui(n, t, r) : t === X) ? 1 : kc(t), (bh(n) ? Rr : ou)(n, t);
			}
			function Af(n) {
				return (bh(n) ? zr : cu)(n);
			}
			function kf(n) {
				if (null == n) return 0;
				if (Hf(n)) return dc(n) ? V(n) : n.length;
				var t = zs(n);
				return t == Gn || t == tt ? n.size : Me(n).length;
			}
			function Of(n, t, r) {
				var e = bh(n) ? h : lu;
				return r && Ui(n, t, r) && (t = X), e(n, mi(t, 3));
			}
			function If(n, t) {
				if ("function" != typeof t) throw new pl(en);
				return n = kc(n), function() {
					if (--n < 1) return t.apply(this, arguments);
				};
			}
			function Rf(n, t, r) {
				return t = r ? X : t, t = n && null == t ? n.length : t, ai(n, mn, X, X, X, X, t);
			}
			function zf(n, t) {
				var r;
				if ("function" != typeof t) throw new pl(en);
				return n = kc(n), function() {
					return --n > 0 && (r = t.apply(this, arguments)), n <= 1 && (t = X), r;
				};
			}
			function Ef(n, t, r) {
				t = r ? X : t;
				var e = ai(n, yn, X, X, X, X, X, t);
				return e.placeholder = Ef.placeholder, e;
			}
			function Sf(n, t, r) {
				t = r ? X : t;
				var e = ai(n, dn, X, X, X, X, X, t);
				return e.placeholder = Sf.placeholder, e;
			}
			function Wf(n, t, r) {
				function e(t) {
					var r = h, e = p;
					return h = p = X, d = t, v = n.apply(e, r);
				}
				function u(n) {
					return d = n, g = Ws(f, t), b ? e(n) : v;
				}
				function i(n) {
					var r = n - y, e = n - d, u = t - r;
					return w ? Hl(u, _ - e) : u;
				}
				function o(n) {
					var r = n - y, e = n - d;
					return y === X || r >= t || r < 0 || w && e >= _;
				}
				function f() {
					var n = fh();
					return o(n) ? c(n) : (g = Ws(f, i(n)), X);
				}
				function c(n) {
					return g = X, m && h ? e(n) : (h = p = X, v);
				}
				function a() {
					g !== X && As(g), d = 0, h = y = p = g = X;
				}
				function l() {
					return g === X ? v : c(fh());
				}
				function s() {
					var n = fh(), r = o(n);
					if (h = arguments, p = this, y = n, r) {
						if (g === X) return u(y);
						if (w) return As(g), g = Ws(f, t), e(y);
					}
					return g === X && (g = Ws(f, t)), v;
				}
				var h, p, _, v, g, y, d = 0, b = !1, w = !1, m = !0;
				if ("function" != typeof n) throw new pl(en);
				return t = Ic(t) || 0, fc(r) && (b = !!r.leading, w = "maxWait" in r, _ = w ? Gl(Ic(r.maxWait) || 0, t) : _, m = "trailing" in r ? !!r.trailing : m), s.cancel = a, s.flush = l, s;
			}
			function Lf(n) {
				return ai(n, jn);
			}
			function Cf(n, t) {
				if ("function" != typeof n || null != t && "function" != typeof t) throw new pl(en);
				var r = function() {
					var e = arguments, u = t ? t.apply(this, e) : e[0], i = r.cache;
					if (i.has(u)) return i.get(u);
					var o = n.apply(this, e);
					return r.cache = i.set(u, o) || i, o;
				};
				return r.cache = new (Cf.Cache || sr)(), r;
			}
			function Uf(n) {
				if ("function" != typeof n) throw new pl(en);
				return function() {
					var t = arguments;
					switch (t.length) {
						case 0: return !n.call(this);
						case 1: return !n.call(this, t[0]);
						case 2: return !n.call(this, t[0], t[1]);
						case 3: return !n.call(this, t[0], t[1], t[2]);
					}
					return !n.apply(this, t);
				};
			}
			function Bf(n) {
				return zf(2, n);
			}
			function Tf(n, t) {
				if ("function" != typeof n) throw new pl(en);
				return t = t === X ? t : kc(t), uu(n, t);
			}
			function $f(t, r) {
				if ("function" != typeof t) throw new pl(en);
				return r = null == r ? 0 : Gl(kc(r), 0), uu(function(e) {
					var u = e[r], i = Ou(e, 0, r);
					return u && a(i, u), n(t, this, i);
				});
			}
			function Df(n, t, r) {
				var e = !0, u = !0;
				if ("function" != typeof n) throw new pl(en);
				return fc(r) && (e = "leading" in r ? !!r.leading : e, u = "trailing" in r ? !!r.trailing : u), Wf(n, t, {
					leading: e,
					maxWait: t,
					trailing: u
				});
			}
			function Mf(n) {
				return Rf(n, 1);
			}
			function Ff(n, t) {
				return ph(Au(t), n);
			}
			function Nf() {
				if (!arguments.length) return [];
				var n = arguments[0];
				return bh(n) ? n : [n];
			}
			function Pf(n) {
				return Fr(n, sn);
			}
			function qf(n, t) {
				return t = "function" == typeof t ? t : X, Fr(n, sn, t);
			}
			function Zf(n) {
				return Fr(n, 5);
			}
			function Kf(n, t) {
				return t = "function" == typeof t ? t : X, Fr(n, 5, t);
			}
			function Vf(n, t) {
				return null == t || Pr(n, t, Pc(t));
			}
			function Gf(n, t) {
				return n === t || n !== n && t !== t;
			}
			function Hf(n) {
				return null != n && oc(n.length) && !uc(n);
			}
			function Jf(n) {
				return cc(n) && Hf(n);
			}
			function Yf(n) {
				return n === !0 || n === !1 || cc(n) && we(n) == Nn;
			}
			function Qf(n) {
				return cc(n) && 1 === n.nodeType && !gc(n);
			}
			function Xf(n) {
				if (null == n) return !0;
				if (Hf(n) && (bh(n) || "string" == typeof n || "function" == typeof n.splice || mh(n) || Oh(n) || dh(n))) return !n.length;
				var t = zs(n);
				if (t == Gn || t == tt) return !n.size;
				if (Mi(n)) return !Me(n).length;
				for (var r in n) if (bl.call(n, r)) return !1;
				return !0;
			}
			function nc(n, t) {
				return Se(n, t);
			}
			function tc(n, t, r) {
				r = "function" == typeof r ? r : X;
				var e = r ? r(n, t) : X;
				return e === X ? Se(n, t, X, r) : !!e;
			}
			function rc(n) {
				if (!cc(n)) return !1;
				var t = we(n);
				return t == Zn || t == qn || "string" == typeof n.message && "string" == typeof n.name && !gc(n);
			}
			function ec(n) {
				return "number" == typeof n && Zl(n);
			}
			function uc(n) {
				if (!fc(n)) return !1;
				var t = we(n);
				return t == Kn || t == Vn || t == Fn || t == Xn;
			}
			function ic(n) {
				return "number" == typeof n && n == kc(n);
			}
			function oc(n) {
				return "number" == typeof n && n > -1 && n % 1 == 0 && n <= Wn;
			}
			function fc(n) {
				var t = typeof n;
				return null != n && ("object" == t || "function" == t);
			}
			function cc(n) {
				return null != n && "object" == typeof n;
			}
			function ac(n, t) {
				return n === t || Ce(n, t, ji(t));
			}
			function lc(n, t, r) {
				return r = "function" == typeof r ? r : X, Ce(n, t, ji(t), r);
			}
			function sc(n) {
				return vc(n) && n != +n;
			}
			function hc(n) {
				if (Es(n)) throw new fl(rn);
				return Ue(n);
			}
			function pc(n) {
				return null === n;
			}
			function _c(n) {
				return null == n;
			}
			function vc(n) {
				return "number" == typeof n || cc(n) && we(n) == Hn;
			}
			function gc(n) {
				if (!cc(n) || we(n) != Yn) return !1;
				var t = El(n);
				if (null === t) return !0;
				var r = bl.call(t, "constructor") && t.constructor;
				return "function" == typeof r && r instanceof r && dl.call(r) == jl;
			}
			function yc(n) {
				return ic(n) && n >= -Wn && n <= Wn;
			}
			function dc(n) {
				return "string" == typeof n || !bh(n) && cc(n) && we(n) == rt;
			}
			function bc(n) {
				return "symbol" == typeof n || cc(n) && we(n) == et;
			}
			function wc(n) {
				return n === X;
			}
			function mc(n) {
				return cc(n) && zs(n) == it;
			}
			function xc(n) {
				return cc(n) && we(n) == ot;
			}
			function jc(n) {
				if (!n) return [];
				if (Hf(n)) return dc(n) ? G(n) : Tu(n);
				if (Ul && n[Ul]) return D(n[Ul]());
				var t = zs(n);
				return (t == Gn ? M : t == tt ? P : ra)(n);
			}
			function Ac(n) {
				if (!n) return 0 === n ? n : 0;
				if (n = Ic(n), n === Sn || n === -Infinity) return (n < 0 ? -1 : 1) * Ln;
				return n === n ? n : 0;
			}
			function kc(n) {
				var t = Ac(n), r = t % 1;
				return t === t ? r ? t - r : t : 0;
			}
			function Oc(n) {
				return n ? Mr(kc(n), 0, Un) : 0;
			}
			function Ic(n) {
				if ("number" == typeof n) return n;
				if (bc(n)) return Cn;
				if (fc(n)) {
					var t = "function" == typeof n.valueOf ? n.valueOf() : n;
					n = fc(t) ? t + "" : t;
				}
				if ("string" != typeof n) return 0 === n ? n : +n;
				n = R(n);
				var r = qt.test(n);
				return r || Kt.test(n) ? Xr(n.slice(2), r ? 2 : 8) : Pt.test(n) ? Cn : +n;
			}
			function Rc(n) {
				return $u(n, qc(n));
			}
			function zc(n) {
				return n ? Mr(kc(n), -Wn, Wn) : 0 === n ? n : 0;
			}
			function Ec(n) {
				return null == n ? "" : vu(n);
			}
			function Sc(n, t) {
				var r = gs(n);
				return null == t ? r : Cr(r, t);
			}
			function Wc(n, t) {
				return v(n, mi(t, 3), ue);
			}
			function Lc(n, t) {
				return v(n, mi(t, 3), oe);
			}
			function Cc(n, t) {
				return null == n ? n : bs(n, mi(t, 3), qc);
			}
			function Uc(n, t) {
				return null == n ? n : ws(n, mi(t, 3), qc);
			}
			function Bc(n, t) {
				return n && ue(n, mi(t, 3));
			}
			function Tc(n, t) {
				return n && oe(n, mi(t, 3));
			}
			function $c(n) {
				return null == n ? [] : fe(n, Pc(n));
			}
			function Dc(n) {
				return null == n ? [] : fe(n, qc(n));
			}
			function Mc(n, t, r) {
				var e = null == n ? X : _e(n, t);
				return e === X ? r : e;
			}
			function Fc(n, t) {
				return null != n && Ri(n, t, xe);
			}
			function Nc(n, t) {
				return null != n && Ri(n, t, je);
			}
			function Pc(n) {
				return Hf(n) ? Or(n) : Me(n);
			}
			function qc(n) {
				return Hf(n) ? Or(n, !0) : Fe(n);
			}
			function Zc(n, t) {
				var r = {};
				return t = mi(t, 3), ue(n, function(n, e, u) {
					Br(r, t(n, e, u), n);
				}), r;
			}
			function Kc(n, t) {
				var r = {};
				return t = mi(t, 3), ue(n, function(n, e, u) {
					Br(r, e, t(n, e, u));
				}), r;
			}
			function Vc(n, t) {
				return Gc(n, Uf(mi(t)));
			}
			function Gc(n, t) {
				if (null == n) return {};
				var r = c(di(n), function(n) {
					return [n];
				});
				return t = mi(t), Ye(n, r, function(n, r) {
					return t(n, r[0]);
				});
			}
			function Hc(n, t, r) {
				t = ku(t, n);
				var e = -1, u = t.length;
				for (u || (u = 1, n = X); ++e < u;) {
					var i = null == n ? X : n[no(t[e])];
					i === X && (e = u, i = r), n = uc(i) ? i.call(n) : i;
				}
				return n;
			}
			function Jc(n, t, r) {
				return null == n ? n : fu(n, t, r);
			}
			function Yc(n, t, r, e) {
				return e = "function" == typeof e ? e : X, null == n ? n : fu(n, t, r, e);
			}
			function Qc(n, t, e) {
				var u = bh(n), i = u || mh(n) || Oh(n);
				if (t = mi(t, 4), null == e) {
					var o = n && n.constructor;
					e = i ? u ? new o() : [] : fc(n) && uc(o) ? gs(El(n)) : {};
				}
				return (i ? r : ue)(n, function(n, r, u) {
					return t(e, n, r, u);
				}), e;
			}
			function Xc(n, t) {
				return null == n || yu(n, t);
			}
			function na(n, t, r) {
				return null == n ? n : du(n, t, Au(r));
			}
			function ta(n, t, r, e) {
				return e = "function" == typeof e ? e : X, null == n ? n : du(n, t, Au(r), e);
			}
			function ra(n) {
				return null == n ? [] : E(n, Pc(n));
			}
			function ea(n) {
				return null == n ? [] : E(n, qc(n));
			}
			function ua(n, t, r) {
				return r === X && (r = t, t = X), r !== X && (r = Ic(r), r = r === r ? r : 0), t !== X && (t = Ic(t), t = t === t ? t : 0), Mr(Ic(n), t, r);
			}
			function ia(n, t, r) {
				return t = Ac(t), r === X ? (r = t, t = 0) : r = Ac(r), n = Ic(n), Ae(n, t, r);
			}
			function oa(n, t, r) {
				if (r && "boolean" != typeof r && Ui(n, t, r) && (t = r = X), r === X && ("boolean" == typeof t ? (r = t, t = X) : "boolean" == typeof n && (r = n, n = X)), n === X && t === X ? (n = 0, t = 1) : (n = Ac(n), t === X ? (t = n, n = 0) : t = Ac(t)), n > t) {
					var e = n;
					n = t, t = e;
				}
				if (r || n % 1 || t % 1) {
					var u = Ql();
					return Hl(n + u * (t - n + Qr("1e-" + ((u + "").length - 1))), t);
				}
				return tu(n, t);
			}
			function fa(n) {
				return Qh(Ec(n).toLowerCase());
			}
			function ca(n) {
				return n = Ec(n), n && n.replace(Gt, ve).replace(Dr, "");
			}
			function aa(n, t, r) {
				n = Ec(n), t = vu(t);
				var e = n.length;
				r = r === X ? e : Mr(kc(r), 0, e);
				var u = r;
				return r -= t.length, r >= 0 && n.slice(r, u) == t;
			}
			function la(n) {
				return n = Ec(n), n && At.test(n) ? n.replace(xt, ge) : n;
			}
			function sa(n) {
				return n = Ec(n), n && Wt.test(n) ? n.replace(St, "\\$&") : n;
			}
			function ha(n, t, r) {
				n = Ec(n), t = kc(t);
				var e = t ? V(n) : 0;
				if (!t || e >= t) return n;
				var u = (t - e) / 2;
				return ri(Nl(u), r) + n + ri(Fl(u), r);
			}
			function pa(n, t, r) {
				n = Ec(n), t = kc(t);
				var e = t ? V(n) : 0;
				return t && e < t ? n + ri(t - e, r) : n;
			}
			function _a(n, t, r) {
				n = Ec(n), t = kc(t);
				var e = t ? V(n) : 0;
				return t && e < t ? ri(t - e, r) + n : n;
			}
			function va(n, t, r) {
				return r || null == t ? t = 0 : t && (t = +t), Yl(Ec(n).replace(Lt, ""), t || 0);
			}
			function ga(n, t, r) {
				return t = (r ? Ui(n, t, r) : t === X) ? 1 : kc(t), eu(Ec(n), t);
			}
			function ya() {
				var n = arguments, t = Ec(n[0]);
				return n.length < 3 ? t : t.replace(n[1], n[2]);
			}
			function da(n, t, r) {
				return r && "number" != typeof r && Ui(n, t, r) && (t = r = X), (r = r === X ? Un : r >>> 0) ? (n = Ec(n), n && ("string" == typeof t || null != t && !Ah(t)) && (t = vu(t), !t && T(n)) ? Ou(G(n), 0, r) : n.split(t, r)) : [];
			}
			function ba(n, t, r) {
				return n = Ec(n), r = null == r ? 0 : Mr(kc(r), 0, n.length), t = vu(t), n.slice(r, r + t.length) == t;
			}
			function wa(n, t, r) {
				var e = Z.templateSettings;
				r && Ui(n, t, r) && (t = X), n = Ec(n), t = Sh({}, t, e, li);
				var u, i, o = Sh({}, t.imports, e.imports, li), f = Pc(o), c = E(o, f), a = 0, l = t.interpolate || Ht, s = "__p += '", h = sl((t.escape || Ht).source + "|" + l.source + "|" + (l === It ? Ft : Ht).source + "|" + (t.evaluate || Ht).source + "|$", "g"), p = "//# sourceURL=" + (bl.call(t, "sourceURL") ? (t.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++Zr + "]") + "\n";
				n.replace(h, function(t, r, e, o, f, c) {
					return e || (e = o), s += n.slice(a, c).replace(Jt, U), r && (u = !0, s += "' +\n__e(" + r + ") +\n'"), f && (i = !0, s += "';\n" + f + ";\n__p += '"), e && (s += "' +\n((__t = (" + e + ")) == null ? '' : __t) +\n'"), a = c + t.length, t;
				}), s += "';\n";
				var _ = bl.call(t, "variable") && t.variable;
				if (_) {
					if (Dt.test(_)) throw new fl(un);
				} else s = "with (obj) {\n" + s + "\n}\n";
				s = (i ? s.replace(dt, "") : s).replace(bt, "$1").replace(wt, "$1;"), s = "function(" + (_ || "obj") + ") {\n" + (_ ? "" : "obj || (obj = {});\n") + "var __t, __p = ''" + (u ? ", __e = _.escape" : "") + (i ? ", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n" : ";\n") + s + "return __p\n}";
				var v = Xh(function() {
					return cl(f, p + "return " + s).apply(X, c);
				});
				if (v.source = s, rc(v)) throw v;
				return v;
			}
			function ma(n) {
				return Ec(n).toLowerCase();
			}
			function xa(n) {
				return Ec(n).toUpperCase();
			}
			function ja(n, t, r) {
				if (n = Ec(n), n && (r || t === X)) return R(n);
				if (!n || !(t = vu(t))) return n;
				var e = G(n), u = G(t);
				return Ou(e, W(e, u), L(e, u) + 1).join("");
			}
			function Aa(n, t, r) {
				if (n = Ec(n), n && (r || t === X)) return n.slice(0, H(n) + 1);
				if (!n || !(t = vu(t))) return n;
				var e = G(n);
				return Ou(e, 0, L(e, G(t)) + 1).join("");
			}
			function ka(n, t, r) {
				if (n = Ec(n), n && (r || t === X)) return n.replace(Lt, "");
				if (!n || !(t = vu(t))) return n;
				var e = G(n);
				return Ou(e, W(e, G(t))).join("");
			}
			function Oa(n, t) {
				var r = An, e = kn;
				if (fc(t)) {
					var u = "separator" in t ? t.separator : u;
					r = "length" in t ? kc(t.length) : r, e = "omission" in t ? vu(t.omission) : e;
				}
				n = Ec(n);
				var i = n.length;
				if (T(n)) {
					var o = G(n);
					i = o.length;
				}
				if (r >= i) return n;
				var f = r - V(e);
				if (f < 1) return e;
				var c = o ? Ou(o, 0, f).join("") : n.slice(0, f);
				if (u === X) return c + e;
				if (o && (f += c.length - f), Ah(u)) {
					if (n.slice(f).search(u)) {
						var a, l = c;
						for (u.global || (u = sl(u.source, Ec(Nt.exec(u)) + "g")), u.lastIndex = 0; a = u.exec(l);) var s = a.index;
						c = c.slice(0, s === X ? f : s);
					}
				} else if (n.indexOf(vu(u), f) != f) {
					var h = c.lastIndexOf(u);
					h > -1 && (c = c.slice(0, h));
				}
				return c + e;
			}
			function Ia(n) {
				return n = Ec(n), n && jt.test(n) ? n.replace(mt, ye) : n;
			}
			function Ra(n, t, r) {
				return n = Ec(n), t = r ? X : t, t === X ? $(n) ? Q(n) : _(n) : n.match(t) || [];
			}
			function za(t) {
				var r = null == t ? 0 : t.length, e = mi();
				return t = r ? c(t, function(n) {
					if ("function" != typeof n[1]) throw new pl(en);
					return [e(n[0]), n[1]];
				}) : [], uu(function(e) {
					for (var u = -1; ++u < r;) {
						var i = t[u];
						if (n(i[0], this, e)) return n(i[1], this, e);
					}
				});
			}
			function Ea(n) {
				return Nr(Fr(n, an));
			}
			function Sa(n) {
				return function() {
					return n;
				};
			}
			function Wa(n, t) {
				return null == n || n !== n ? t : n;
			}
			function La(n) {
				return n;
			}
			function Ca(n) {
				return De("function" == typeof n ? n : Fr(n, an));
			}
			function Ua(n) {
				return qe(Fr(n, an));
			}
			function Ba(n, t) {
				return Ze(n, Fr(t, an));
			}
			function Ta(n, t, e) {
				var u = Pc(t), i = fe(t, u);
				null != e || fc(t) && (i.length || !u.length) || (e = t, t = n, n = this, i = fe(t, Pc(t)));
				var o = !(fc(e) && "chain" in e && !e.chain), f = uc(n);
				return r(i, function(r) {
					var e = t[r];
					n[r] = e, f && (n.prototype[r] = function() {
						var t = this.__chain__;
						if (o || t) {
							var r = n(this.__wrapped__);
							return (r.__actions__ = Tu(this.__actions__)).push({
								func: e,
								args: arguments,
								thisArg: n
							}), r.__chain__ = t, r;
						}
						return e.apply(n, a([this.value()], arguments));
					});
				}), n;
			}
			function $a() {
				return re._ === this && (re._ = Al), this;
			}
			function Da() {}
			function Ma(n) {
				return n = kc(n), uu(function(t) {
					return Ge(t, n);
				});
			}
			function Fa(n) {
				return Bi(n) ? m(no(n)) : Qe(n);
			}
			function Na(n) {
				return function(t) {
					return null == n ? X : _e(n, t);
				};
			}
			function Pa() {
				return [];
			}
			function qa() {
				return !1;
			}
			function Za() {
				return {};
			}
			function Ka() {
				return "";
			}
			function Va() {
				return !0;
			}
			function Ga(n, t) {
				if (n = kc(n), n < 1 || n > Wn) return [];
				var r = Un, e = Hl(n, Un);
				t = mi(t), n -= Un;
				for (var u = O(e, t); ++r < n;) t(r);
				return u;
			}
			function Ha(n) {
				return bh(n) ? c(n, no) : bc(n) ? [n] : Tu(Cs(Ec(n)));
			}
			function Ja(n) {
				var t = ++wl;
				return Ec(n) + t;
			}
			function Ya(n) {
				return n && n.length ? Yr(n, La, me) : X;
			}
			function Qa(n, t) {
				return n && n.length ? Yr(n, mi(t, 2), me) : X;
			}
			function Xa(n) {
				return w(n, La);
			}
			function nl(n, t) {
				return w(n, mi(t, 2));
			}
			function tl(n) {
				return n && n.length ? Yr(n, La, Ne) : X;
			}
			function rl(n, t) {
				return n && n.length ? Yr(n, mi(t, 2), Ne) : X;
			}
			function el(n) {
				return n && n.length ? k(n, La) : 0;
			}
			function ul(n, t) {
				return n && n.length ? k(n, mi(t, 2)) : 0;
			}
			x = null == x ? re : be.defaults(re.Object(), x, be.pick(re, qr));
			var il = x.Array, ol = x.Date, fl = x.Error, cl = x.Function, al = x.Math, ll = x.Object, sl = x.RegExp, hl = x.String, pl = x.TypeError, _l = il.prototype, vl = cl.prototype, gl = ll.prototype, yl = x["__core-js_shared__"], dl = vl.toString, bl = gl.hasOwnProperty, wl = 0, ml = function() {
				var n = /[^.]+$/.exec(yl && yl.keys && yl.keys.IE_PROTO || "");
				return n ? "Symbol(src)_1." + n : "";
			}(), xl = gl.toString, jl = dl.call(ll), Al = re._, kl = sl("^" + dl.call(bl).replace(St, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"), Ol = ie ? x.Buffer : X, Il = x.Symbol, Rl = x.Uint8Array, zl = Ol ? Ol.allocUnsafe : X, El = F(ll.getPrototypeOf, ll), Sl = ll.create, Wl = gl.propertyIsEnumerable, Ll = _l.splice, Cl = Il ? Il.isConcatSpreadable : X, Ul = Il ? Il.iterator : X, Bl = Il ? Il.toStringTag : X, Tl = function() {
				try {
					var n = Ai(ll, "defineProperty");
					return n({}, "", {}), n;
				} catch (n) {}
			}(), $l = x.clearTimeout !== re.clearTimeout && x.clearTimeout, Dl = ol && ol.now !== re.Date.now && ol.now, Ml = x.setTimeout !== re.setTimeout && x.setTimeout, Fl = al.ceil, Nl = al.floor, Pl = ll.getOwnPropertySymbols, ql = Ol ? Ol.isBuffer : X, Zl = x.isFinite, Kl = _l.join, Vl = F(ll.keys, ll), Gl = al.max, Hl = al.min, Jl = ol.now, Yl = x.parseInt, Ql = al.random, Xl = _l.reverse, ns = Ai(x, "DataView"), ts = Ai(x, "Map"), rs = Ai(x, "Promise"), es = Ai(x, "Set"), us = Ai(x, "WeakMap"), is = Ai(ll, "create"), os = us && new us(), fs = {}, cs = to(ns), as = to(ts), ls = to(rs), ss = to(es), hs = to(us), ps = Il ? Il.prototype : X, _s = ps ? ps.valueOf : X, vs = ps ? ps.toString : X, gs = function() {
				function n() {}
				return function(t) {
					if (!fc(t)) return {};
					if (Sl) return Sl(t);
					n.prototype = t;
					var r = new n();
					return n.prototype = X, r;
				};
			}();
			Z.templateSettings = {
				escape: kt,
				evaluate: Ot,
				interpolate: It,
				variable: "",
				imports: { _: Z }
			}, Z.prototype = J.prototype, Z.prototype.constructor = Z, Y.prototype = gs(J.prototype), Y.prototype.constructor = Y, Ct.prototype = gs(J.prototype), Ct.prototype.constructor = Ct, Xt.prototype.clear = nr, Xt.prototype.delete = tr, Xt.prototype.get = rr, Xt.prototype.has = er, Xt.prototype.set = ur, ir.prototype.clear = or, ir.prototype.delete = fr, ir.prototype.get = cr, ir.prototype.has = ar, ir.prototype.set = lr, sr.prototype.clear = hr, sr.prototype.delete = pr, sr.prototype.get = _r, sr.prototype.has = vr, sr.prototype.set = gr, yr.prototype.add = yr.prototype.push = dr, yr.prototype.has = br, wr.prototype.clear = mr, wr.prototype.delete = xr, wr.prototype.get = jr, wr.prototype.has = Ar, wr.prototype.set = kr;
			var ys = Pu(ue), ds = Pu(oe, !0), bs = qu(), ws = qu(!0), ms = os ? function(n, t) {
				return os.set(n, t), n;
			} : La, xs = Tl ? function(n, t) {
				return Tl(n, "toString", {
					configurable: !0,
					enumerable: !1,
					value: Sa(t),
					writable: !0
				});
			} : La, js = uu, As = $l || function(n) {
				return re.clearTimeout(n);
			}, ks = es && 1 / P(new es([, -0]))[1] == Sn ? function(n) {
				return new es(n);
			} : Da, Os = os ? function(n) {
				return os.get(n);
			} : Da, Is = Pl ? function(n) {
				return null == n ? [] : (n = ll(n), i(Pl(n), function(t) {
					return Wl.call(n, t);
				}));
			} : Pa, Rs = Pl ? function(n) {
				for (var t = []; n;) a(t, Is(n)), n = El(n);
				return t;
			} : Pa, zs = we;
			(ns && zs(new ns(/* @__PURE__ */ new ArrayBuffer(1))) != ct || ts && zs(new ts()) != Gn || rs && zs(rs.resolve()) != Qn || es && zs(new es()) != tt || us && zs(new us()) != it) && (zs = function(n) {
				var t = we(n), r = t == Yn ? n.constructor : X, e = r ? to(r) : "";
				if (e) switch (e) {
					case cs: return ct;
					case as: return Gn;
					case ls: return Qn;
					case ss: return tt;
					case hs: return it;
				}
				return t;
			});
			var Es = yl ? uc : qa, Ss = Qi(ms), Ws = Ml || function(n, t) {
				return re.setTimeout(n, t);
			}, Ls = Qi(xs), Cs = Pi(function(n) {
				var t = [];
				return 46 === n.charCodeAt(0) && t.push(""), n.replace(Et, function(n, r, e, u) {
					t.push(e ? u.replace(Mt, "$1") : r || n);
				}), t;
			}), Us = uu(function(n, t) {
				return Jf(n) ? Hr(n, ee(t, 1, Jf, !0)) : [];
			}), Bs = uu(function(n, t) {
				var r = jo(t);
				return Jf(r) && (r = X), Jf(n) ? Hr(n, ee(t, 1, Jf, !0), mi(r, 2)) : [];
			}), Ts = uu(function(n, t) {
				var r = jo(t);
				return Jf(r) && (r = X), Jf(n) ? Hr(n, ee(t, 1, Jf, !0), X, r) : [];
			}), $s = uu(function(n) {
				var t = c(n, ju);
				return t.length && t[0] === n[0] ? ke(t) : [];
			}), Ds = uu(function(n) {
				var t = jo(n), r = c(n, ju);
				return t === jo(r) ? t = X : r.pop(), r.length && r[0] === n[0] ? ke(r, mi(t, 2)) : [];
			}), Ms = uu(function(n) {
				var t = jo(n), r = c(n, ju);
				return t = "function" == typeof t ? t : X, t && r.pop(), r.length && r[0] === n[0] ? ke(r, X, t) : [];
			}), Fs = uu(Oo), Ns = gi(function(n, t) {
				var r = null == n ? 0 : n.length, e = Tr(n, t);
				return nu(n, c(t, function(n) {
					return Ci(n, r) ? +n : n;
				}).sort(Lu)), e;
			}), Ps = uu(function(n) {
				return gu(ee(n, 1, Jf, !0));
			}), qs = uu(function(n) {
				var t = jo(n);
				return Jf(t) && (t = X), gu(ee(n, 1, Jf, !0), mi(t, 2));
			}), Zs = uu(function(n) {
				var t = jo(n);
				return t = "function" == typeof t ? t : X, gu(ee(n, 1, Jf, !0), X, t);
			}), Ks = uu(function(n, t) {
				return Jf(n) ? Hr(n, t) : [];
			}), Vs = uu(function(n) {
				return mu(i(n, Jf));
			}), Gs = uu(function(n) {
				var t = jo(n);
				return Jf(t) && (t = X), mu(i(n, Jf), mi(t, 2));
			}), Hs = uu(function(n) {
				var t = jo(n);
				return t = "function" == typeof t ? t : X, mu(i(n, Jf), X, t);
			}), Js = uu(Go), Ys = uu(function(n) {
				var t = n.length, r = t > 1 ? n[t - 1] : X;
				return r = "function" == typeof r ? (n.pop(), r) : X, Ho(n, r);
			}), Qs = gi(function(n) {
				var t = n.length, r = t ? n[0] : 0, e = this.__wrapped__, u = function(t) {
					return Tr(t, n);
				};
				return !(t > 1 || this.__actions__.length) && e instanceof Ct && Ci(r) ? (e = e.slice(r, +r + (t ? 1 : 0)), e.__actions__.push({
					func: nf,
					args: [u],
					thisArg: X
				}), new Y(e, this.__chain__).thru(function(n) {
					return t && !n.length && n.push(X), n;
				})) : this.thru(u);
			}), Xs = Fu(function(n, t, r) {
				bl.call(n, r) ? ++n[r] : Br(n, r, 1);
			}), nh = Ju(ho), th = Ju(po), rh = Fu(function(n, t, r) {
				bl.call(n, r) ? n[r].push(t) : Br(n, r, [t]);
			}), eh = uu(function(t, r, e) {
				var u = -1, i = "function" == typeof r, o = Hf(t) ? il(t.length) : [];
				return ys(t, function(t) {
					o[++u] = i ? n(r, t, e) : Ie(t, r, e);
				}), o;
			}), uh = Fu(function(n, t, r) {
				Br(n, r, t);
			}), ih = Fu(function(n, t, r) {
				n[r ? 0 : 1].push(t);
			}, function() {
				return [[], []];
			}), oh = uu(function(n, t) {
				if (null == n) return [];
				var r = t.length;
				return r > 1 && Ui(n, t[0], t[1]) ? t = [] : r > 2 && Ui(t[0], t[1], t[2]) && (t = [t[0]]), He(n, ee(t, 1), []);
			}), fh = Dl || function() {
				return re.Date.now();
			}, ch = uu(function(n, t, r) {
				var e = _n;
				if (r.length) {
					var u = N(r, wi(ch));
					e |= bn;
				}
				return ai(n, e, t, r, u);
			}), ah = uu(function(n, t, r) {
				var e = _n | vn;
				if (r.length) {
					var u = N(r, wi(ah));
					e |= bn;
				}
				return ai(t, e, n, r, u);
			}), lh = uu(function(n, t) {
				return Gr(n, 1, t);
			}), sh = uu(function(n, t, r) {
				return Gr(n, Ic(t) || 0, r);
			});
			Cf.Cache = sr;
			var hh = js(function(t, r) {
				r = 1 == r.length && bh(r[0]) ? c(r[0], z(mi())) : c(ee(r, 1), z(mi()));
				var e = r.length;
				return uu(function(u) {
					for (var i = -1, o = Hl(u.length, e); ++i < o;) u[i] = r[i].call(this, u[i]);
					return n(t, this, u);
				});
			}), ph = uu(function(n, t) {
				return ai(n, bn, X, t, N(t, wi(ph)));
			}), _h = uu(function(n, t) {
				return ai(n, wn, X, t, N(t, wi(_h)));
			}), vh = gi(function(n, t) {
				return ai(n, xn, X, X, X, t);
			}), gh = ii(me), yh = ii(function(n, t) {
				return n >= t;
			}), dh = Re(function() {
				return arguments;
			}()) ? Re : function(n) {
				return cc(n) && bl.call(n, "callee") && !Wl.call(n, "callee");
			}, bh = il.isArray, wh = ce ? z(ce) : ze, mh = ql || qa, xh = ae ? z(ae) : Ee, jh = le ? z(le) : Le, Ah = se ? z(se) : Be, kh = he ? z(he) : Te, Oh = pe ? z(pe) : $e, Ih = ii(Ne), Rh = ii(function(n, t) {
				return n <= t;
			}), zh = Nu(function(n, t) {
				if (Mi(t) || Hf(t)) return $u(t, Pc(t), n), X;
				for (var r in t) bl.call(t, r) && Sr(n, r, t[r]);
			}), Eh = Nu(function(n, t) {
				$u(t, qc(t), n);
			}), Sh = Nu(function(n, t, r, e) {
				$u(t, qc(t), n, e);
			}), Wh = Nu(function(n, t, r, e) {
				$u(t, Pc(t), n, e);
			}), Lh = gi(Tr), Ch = uu(function(n, t) {
				n = ll(n);
				var r = -1, e = t.length, u = e > 2 ? t[2] : X;
				for (u && Ui(t[0], t[1], u) && (e = 1); ++r < e;) for (var i = t[r], o = qc(i), f = -1, c = o.length; ++f < c;) {
					var a = o[f], l = n[a];
					(l === X || Gf(l, gl[a]) && !bl.call(n, a)) && (n[a] = i[a]);
				}
				return n;
			}), Uh = uu(function(t) {
				return t.push(X, si), n(Mh, X, t);
			}), Bh = Xu(function(n, t, r) {
				null != t && "function" != typeof t.toString && (t = xl.call(t)), n[t] = r;
			}, Sa(La)), Th = Xu(function(n, t, r) {
				null != t && "function" != typeof t.toString && (t = xl.call(t)), bl.call(n, t) ? n[t].push(r) : n[t] = [r];
			}, mi), $h = uu(Ie), Dh = Nu(function(n, t, r) {
				Ke(n, t, r);
			}), Mh = Nu(function(n, t, r, e) {
				Ke(n, t, r, e);
			}), Fh = gi(function(n, t) {
				var r = {};
				if (null == n) return r;
				var e = !1;
				t = c(t, function(t) {
					return t = ku(t, n), e || (e = t.length > 1), t;
				}), $u(n, di(n), r), e && (r = Fr(r, 7, hi));
				for (var u = t.length; u--;) yu(r, t[u]);
				return r;
			}), Nh = gi(function(n, t) {
				return null == n ? {} : Je(n, t);
			}), Ph = ci(Pc), qh = ci(qc), Zh = Vu(function(n, t, r) {
				return t = t.toLowerCase(), n + (r ? fa(t) : t);
			}), Kh = Vu(function(n, t, r) {
				return n + (r ? "-" : "") + t.toLowerCase();
			}), Vh = Vu(function(n, t, r) {
				return n + (r ? " " : "") + t.toLowerCase();
			}), Gh = Ku("toLowerCase"), Hh = Vu(function(n, t, r) {
				return n + (r ? "_" : "") + t.toLowerCase();
			}), Jh = Vu(function(n, t, r) {
				return n + (r ? " " : "") + Qh(t);
			}), Yh = Vu(function(n, t, r) {
				return n + (r ? " " : "") + t.toUpperCase();
			}), Qh = Ku("toUpperCase"), Xh = uu(function(t, r) {
				try {
					return n(t, X, r);
				} catch (n) {
					return rc(n) ? n : new fl(n);
				}
			}), np = gi(function(n, t) {
				return r(t, function(t) {
					t = no(t), Br(n, t, ch(n[t], n));
				}), n;
			}), tp = Yu(), rp = Yu(!0), ep = uu(function(n, t) {
				return function(r) {
					return Ie(r, n, t);
				};
			}), up = uu(function(n, t) {
				return function(r) {
					return Ie(n, r, t);
				};
			}), ip = ti(c), op = ti(u), fp = ti(h), cp = ui(), ap = ui(!0), lp = ni(function(n, t) {
				return n + t;
			}, 0), sp = fi("ceil"), hp = ni(function(n, t) {
				return n / t;
			}, 1), pp = fi("floor"), _p = ni(function(n, t) {
				return n * t;
			}, 1), vp = fi("round"), gp = ni(function(n, t) {
				return n - t;
			}, 0);
			return Z.after = If, Z.ary = Rf, Z.assign = zh, Z.assignIn = Eh, Z.assignInWith = Sh, Z.assignWith = Wh, Z.at = Lh, Z.before = zf, Z.bind = ch, Z.bindAll = np, Z.bindKey = ah, Z.castArray = Nf, Z.chain = Qo, Z.chunk = uo, Z.compact = io, Z.concat = oo, Z.cond = za, Z.conforms = Ea, Z.constant = Sa, Z.countBy = Xs, Z.create = Sc, Z.curry = Ef, Z.curryRight = Sf, Z.debounce = Wf, Z.defaults = Ch, Z.defaultsDeep = Uh, Z.defer = lh, Z.delay = sh, Z.difference = Us, Z.differenceBy = Bs, Z.differenceWith = Ts, Z.drop = fo, Z.dropRight = co, Z.dropRightWhile = ao, Z.dropWhile = lo, Z.fill = so, Z.filter = lf, Z.flatMap = sf, Z.flatMapDeep = hf, Z.flatMapDepth = pf, Z.flatten = _o, Z.flattenDeep = vo, Z.flattenDepth = go, Z.flip = Lf, Z.flow = tp, Z.flowRight = rp, Z.fromPairs = yo, Z.functions = $c, Z.functionsIn = Dc, Z.groupBy = rh, Z.initial = mo, Z.intersection = $s, Z.intersectionBy = Ds, Z.intersectionWith = Ms, Z.invert = Bh, Z.invertBy = Th, Z.invokeMap = eh, Z.iteratee = Ca, Z.keyBy = uh, Z.keys = Pc, Z.keysIn = qc, Z.map = yf, Z.mapKeys = Zc, Z.mapValues = Kc, Z.matches = Ua, Z.matchesProperty = Ba, Z.memoize = Cf, Z.merge = Dh, Z.mergeWith = Mh, Z.method = ep, Z.methodOf = up, Z.mixin = Ta, Z.negate = Uf, Z.nthArg = Ma, Z.omit = Fh, Z.omitBy = Vc, Z.once = Bf, Z.orderBy = df, Z.over = ip, Z.overArgs = hh, Z.overEvery = op, Z.overSome = fp, Z.partial = ph, Z.partialRight = _h, Z.partition = ih, Z.pick = Nh, Z.pickBy = Gc, Z.property = Fa, Z.propertyOf = Na, Z.pull = Fs, Z.pullAll = Oo, Z.pullAllBy = Io, Z.pullAllWith = Ro, Z.pullAt = Ns, Z.range = cp, Z.rangeRight = ap, Z.rearg = vh, Z.reject = mf, Z.remove = zo, Z.rest = Tf, Z.reverse = Eo, Z.sampleSize = jf, Z.set = Jc, Z.setWith = Yc, Z.shuffle = Af, Z.slice = So, Z.sortBy = oh, Z.sortedUniq = $o, Z.sortedUniqBy = Do, Z.split = da, Z.spread = $f, Z.tail = Mo, Z.take = Fo, Z.takeRight = No, Z.takeRightWhile = Po, Z.takeWhile = qo, Z.tap = Xo, Z.throttle = Df, Z.thru = nf, Z.toArray = jc, Z.toPairs = Ph, Z.toPairsIn = qh, Z.toPath = Ha, Z.toPlainObject = Rc, Z.transform = Qc, Z.unary = Mf, Z.union = Ps, Z.unionBy = qs, Z.unionWith = Zs, Z.uniq = Zo, Z.uniqBy = Ko, Z.uniqWith = Vo, Z.unset = Xc, Z.unzip = Go, Z.unzipWith = Ho, Z.update = na, Z.updateWith = ta, Z.values = ra, Z.valuesIn = ea, Z.without = Ks, Z.words = Ra, Z.wrap = Ff, Z.xor = Vs, Z.xorBy = Gs, Z.xorWith = Hs, Z.zip = Js, Z.zipObject = Jo, Z.zipObjectDeep = Yo, Z.zipWith = Ys, Z.entries = Ph, Z.entriesIn = qh, Z.extend = Eh, Z.extendWith = Sh, Ta(Z, Z), Z.add = lp, Z.attempt = Xh, Z.camelCase = Zh, Z.capitalize = fa, Z.ceil = sp, Z.clamp = ua, Z.clone = Pf, Z.cloneDeep = Zf, Z.cloneDeepWith = Kf, Z.cloneWith = qf, Z.conformsTo = Vf, Z.deburr = ca, Z.defaultTo = Wa, Z.divide = hp, Z.endsWith = aa, Z.eq = Gf, Z.escape = la, Z.escapeRegExp = sa, Z.every = af, Z.find = nh, Z.findIndex = ho, Z.findKey = Wc, Z.findLast = th, Z.findLastIndex = po, Z.findLastKey = Lc, Z.floor = pp, Z.forEach = _f, Z.forEachRight = vf, Z.forIn = Cc, Z.forInRight = Uc, Z.forOwn = Bc, Z.forOwnRight = Tc, Z.get = Mc, Z.gt = gh, Z.gte = yh, Z.has = Fc, Z.hasIn = Nc, Z.head = bo, Z.identity = La, Z.includes = gf, Z.indexOf = wo, Z.inRange = ia, Z.invoke = $h, Z.isArguments = dh, Z.isArray = bh, Z.isArrayBuffer = wh, Z.isArrayLike = Hf, Z.isArrayLikeObject = Jf, Z.isBoolean = Yf, Z.isBuffer = mh, Z.isDate = xh, Z.isElement = Qf, Z.isEmpty = Xf, Z.isEqual = nc, Z.isEqualWith = tc, Z.isError = rc, Z.isFinite = ec, Z.isFunction = uc, Z.isInteger = ic, Z.isLength = oc, Z.isMap = jh, Z.isMatch = ac, Z.isMatchWith = lc, Z.isNaN = sc, Z.isNative = hc, Z.isNil = _c, Z.isNull = pc, Z.isNumber = vc, Z.isObject = fc, Z.isObjectLike = cc, Z.isPlainObject = gc, Z.isRegExp = Ah, Z.isSafeInteger = yc, Z.isSet = kh, Z.isString = dc, Z.isSymbol = bc, Z.isTypedArray = Oh, Z.isUndefined = wc, Z.isWeakMap = mc, Z.isWeakSet = xc, Z.join = xo, Z.kebabCase = Kh, Z.last = jo, Z.lastIndexOf = Ao, Z.lowerCase = Vh, Z.lowerFirst = Gh, Z.lt = Ih, Z.lte = Rh, Z.max = Ya, Z.maxBy = Qa, Z.mean = Xa, Z.meanBy = nl, Z.min = tl, Z.minBy = rl, Z.stubArray = Pa, Z.stubFalse = qa, Z.stubObject = Za, Z.stubString = Ka, Z.stubTrue = Va, Z.multiply = _p, Z.nth = ko, Z.noConflict = $a, Z.noop = Da, Z.now = fh, Z.pad = ha, Z.padEnd = pa, Z.padStart = _a, Z.parseInt = va, Z.random = oa, Z.reduce = bf, Z.reduceRight = wf, Z.repeat = ga, Z.replace = ya, Z.result = Hc, Z.round = vp, Z.runInContext = p, Z.sample = xf, Z.size = kf, Z.snakeCase = Hh, Z.some = Of, Z.sortedIndex = Wo, Z.sortedIndexBy = Lo, Z.sortedIndexOf = Co, Z.sortedLastIndex = Uo, Z.sortedLastIndexBy = Bo, Z.sortedLastIndexOf = To, Z.startCase = Jh, Z.startsWith = ba, Z.subtract = gp, Z.sum = el, Z.sumBy = ul, Z.template = wa, Z.times = Ga, Z.toFinite = Ac, Z.toInteger = kc, Z.toLength = Oc, Z.toLower = ma, Z.toNumber = Ic, Z.toSafeInteger = zc, Z.toString = Ec, Z.toUpper = xa, Z.trim = ja, Z.trimEnd = Aa, Z.trimStart = ka, Z.truncate = Oa, Z.unescape = Ia, Z.uniqueId = Ja, Z.upperCase = Yh, Z.upperFirst = Qh, Z.each = _f, Z.eachRight = vf, Z.first = bo, Ta(Z, function() {
				var n = {};
				return ue(Z, function(t, r) {
					bl.call(Z.prototype, r) || (n[r] = t);
				}), n;
			}(), { chain: !1 }), Z.VERSION = nn, r([
				"bind",
				"bindKey",
				"curry",
				"curryRight",
				"partial",
				"partialRight"
			], function(n) {
				Z[n].placeholder = Z;
			}), r(["drop", "take"], function(n, t) {
				Ct.prototype[n] = function(r) {
					r = r === X ? 1 : Gl(kc(r), 0);
					var e = this.__filtered__ && !t ? new Ct(this) : this.clone();
					return e.__filtered__ ? e.__takeCount__ = Hl(r, e.__takeCount__) : e.__views__.push({
						size: Hl(r, Un),
						type: n + (e.__dir__ < 0 ? "Right" : "")
					}), e;
				}, Ct.prototype[n + "Right"] = function(t) {
					return this.reverse()[n](t).reverse();
				};
			}), r([
				"filter",
				"map",
				"takeWhile"
			], function(n, t) {
				var r = t + 1, e = r == Rn || r == En;
				Ct.prototype[n] = function(n) {
					var t = this.clone();
					return t.__iteratees__.push({
						iteratee: mi(n, 3),
						type: r
					}), t.__filtered__ = t.__filtered__ || e, t;
				};
			}), r(["head", "last"], function(n, t) {
				var r = "take" + (t ? "Right" : "");
				Ct.prototype[n] = function() {
					return this[r](1).value()[0];
				};
			}), r(["initial", "tail"], function(n, t) {
				var r = "drop" + (t ? "" : "Right");
				Ct.prototype[n] = function() {
					return this.__filtered__ ? new Ct(this) : this[r](1);
				};
			}), Ct.prototype.compact = function() {
				return this.filter(La);
			}, Ct.prototype.find = function(n) {
				return this.filter(n).head();
			}, Ct.prototype.findLast = function(n) {
				return this.reverse().find(n);
			}, Ct.prototype.invokeMap = uu(function(n, t) {
				return "function" == typeof n ? new Ct(this) : this.map(function(r) {
					return Ie(r, n, t);
				});
			}), Ct.prototype.reject = function(n) {
				return this.filter(Uf(mi(n)));
			}, Ct.prototype.slice = function(n, t) {
				n = kc(n);
				var r = this;
				return r.__filtered__ && (n > 0 || t < 0) ? new Ct(r) : (n < 0 ? r = r.takeRight(-n) : n && (r = r.drop(n)), t !== X && (t = kc(t), r = t < 0 ? r.dropRight(-t) : r.take(t - n)), r);
			}, Ct.prototype.takeRightWhile = function(n) {
				return this.reverse().takeWhile(n).reverse();
			}, Ct.prototype.toArray = function() {
				return this.take(Un);
			}, ue(Ct.prototype, function(n, t) {
				var r = /^(?:filter|find|map|reject)|While$/.test(t), e = /^(?:head|last)$/.test(t), u = Z[e ? "take" + ("last" == t ? "Right" : "") : t], i = e || /^find/.test(t);
				u && (Z.prototype[t] = function() {
					var t = this.__wrapped__, o = e ? [1] : arguments, f = t instanceof Ct, c = o[0], l = f || bh(t), s = function(n) {
						var t = u.apply(Z, a([n], o));
						return e && h ? t[0] : t;
					};
					l && r && "function" == typeof c && 1 != c.length && (f = l = !1);
					var h = this.__chain__, p = !!this.__actions__.length, _ = i && !h, v = f && !p;
					if (!i && l) {
						t = v ? t : new Ct(this);
						var g = n.apply(t, o);
						return g.__actions__.push({
							func: nf,
							args: [s],
							thisArg: X
						}), new Y(g, h);
					}
					return _ && v ? n.apply(this, o) : (g = this.thru(s), _ ? e ? g.value()[0] : g.value() : g);
				});
			}), r([
				"pop",
				"push",
				"shift",
				"sort",
				"splice",
				"unshift"
			], function(n) {
				var t = _l[n], r = /^(?:push|sort|unshift)$/.test(n) ? "tap" : "thru", e = /^(?:pop|shift)$/.test(n);
				Z.prototype[n] = function() {
					var n = arguments;
					if (e && !this.__chain__) {
						var u = this.value();
						return t.apply(bh(u) ? u : [], n);
					}
					return this[r](function(r) {
						return t.apply(bh(r) ? r : [], n);
					});
				};
			}), ue(Ct.prototype, function(n, t) {
				var r = Z[t];
				if (r) {
					var e = r.name + "";
					bl.call(fs, e) || (fs[e] = []), fs[e].push({
						name: t,
						func: r
					});
				}
			}), fs[Qu(X, vn).name] = [{
				name: "wrapper",
				func: X
			}], Ct.prototype.clone = $t, Ct.prototype.reverse = Yt, Ct.prototype.value = Qt, Z.prototype.at = Qs, Z.prototype.chain = tf, Z.prototype.commit = rf, Z.prototype.next = ef, Z.prototype.plant = of, Z.prototype.reverse = ff, Z.prototype.toJSON = Z.prototype.valueOf = Z.prototype.value = cf, Z.prototype.first = Z.prototype.head, Ul && (Z.prototype[Ul] = uf), Z;
		}();
		"function" == typeof define && "object" == typeof define.amd && define.amd ? (re._ = be, define(function() {
			return be;
		})) : ue ? ((ue.exports = be)._ = be, ee._ = be) : re._ = be;
	}).call(exports);
}));
//#endregion
//#region node_modules/lodash/fp/_mapping.js
var require__mapping = /* @__PURE__ */ __commonJSMin(((exports) => {
	/** Used to map aliases to their real names. */
	exports.aliasToReal = {
		"each": "forEach",
		"eachRight": "forEachRight",
		"entries": "toPairs",
		"entriesIn": "toPairsIn",
		"extend": "assignIn",
		"extendAll": "assignInAll",
		"extendAllWith": "assignInAllWith",
		"extendWith": "assignInWith",
		"first": "head",
		"conforms": "conformsTo",
		"matches": "isMatch",
		"property": "get",
		"__": "placeholder",
		"F": "stubFalse",
		"T": "stubTrue",
		"all": "every",
		"allPass": "overEvery",
		"always": "constant",
		"any": "some",
		"anyPass": "overSome",
		"apply": "spread",
		"assoc": "set",
		"assocPath": "set",
		"complement": "negate",
		"compose": "flowRight",
		"contains": "includes",
		"dissoc": "unset",
		"dissocPath": "unset",
		"dropLast": "dropRight",
		"dropLastWhile": "dropRightWhile",
		"equals": "isEqual",
		"identical": "eq",
		"indexBy": "keyBy",
		"init": "initial",
		"invertObj": "invert",
		"juxt": "over",
		"omitAll": "omit",
		"nAry": "ary",
		"path": "get",
		"pathEq": "matchesProperty",
		"pathOr": "getOr",
		"paths": "at",
		"pickAll": "pick",
		"pipe": "flow",
		"pluck": "map",
		"prop": "get",
		"propEq": "matchesProperty",
		"propOr": "getOr",
		"props": "at",
		"symmetricDifference": "xor",
		"symmetricDifferenceBy": "xorBy",
		"symmetricDifferenceWith": "xorWith",
		"takeLast": "takeRight",
		"takeLastWhile": "takeRightWhile",
		"unapply": "rest",
		"unnest": "flatten",
		"useWith": "overArgs",
		"where": "conformsTo",
		"whereEq": "isMatch",
		"zipObj": "zipObject"
	};
	/** Used to map ary to method names. */
	exports.aryMethod = {
		"1": [
			"assignAll",
			"assignInAll",
			"attempt",
			"castArray",
			"ceil",
			"create",
			"curry",
			"curryRight",
			"defaultsAll",
			"defaultsDeepAll",
			"floor",
			"flow",
			"flowRight",
			"fromPairs",
			"invert",
			"iteratee",
			"memoize",
			"method",
			"mergeAll",
			"methodOf",
			"mixin",
			"nthArg",
			"over",
			"overEvery",
			"overSome",
			"rest",
			"reverse",
			"round",
			"runInContext",
			"spread",
			"template",
			"trim",
			"trimEnd",
			"trimStart",
			"uniqueId",
			"words",
			"zipAll"
		],
		"2": [
			"add",
			"after",
			"ary",
			"assign",
			"assignAllWith",
			"assignIn",
			"assignInAllWith",
			"at",
			"before",
			"bind",
			"bindAll",
			"bindKey",
			"chunk",
			"cloneDeepWith",
			"cloneWith",
			"concat",
			"conformsTo",
			"countBy",
			"curryN",
			"curryRightN",
			"debounce",
			"defaults",
			"defaultsDeep",
			"defaultTo",
			"delay",
			"difference",
			"divide",
			"drop",
			"dropRight",
			"dropRightWhile",
			"dropWhile",
			"endsWith",
			"eq",
			"every",
			"filter",
			"find",
			"findIndex",
			"findKey",
			"findLast",
			"findLastIndex",
			"findLastKey",
			"flatMap",
			"flatMapDeep",
			"flattenDepth",
			"forEach",
			"forEachRight",
			"forIn",
			"forInRight",
			"forOwn",
			"forOwnRight",
			"get",
			"groupBy",
			"gt",
			"gte",
			"has",
			"hasIn",
			"includes",
			"indexOf",
			"intersection",
			"invertBy",
			"invoke",
			"invokeMap",
			"isEqual",
			"isMatch",
			"join",
			"keyBy",
			"lastIndexOf",
			"lt",
			"lte",
			"map",
			"mapKeys",
			"mapValues",
			"matchesProperty",
			"maxBy",
			"meanBy",
			"merge",
			"mergeAllWith",
			"minBy",
			"multiply",
			"nth",
			"omit",
			"omitBy",
			"overArgs",
			"pad",
			"padEnd",
			"padStart",
			"parseInt",
			"partial",
			"partialRight",
			"partition",
			"pick",
			"pickBy",
			"propertyOf",
			"pull",
			"pullAll",
			"pullAt",
			"random",
			"range",
			"rangeRight",
			"rearg",
			"reject",
			"remove",
			"repeat",
			"restFrom",
			"result",
			"sampleSize",
			"some",
			"sortBy",
			"sortedIndex",
			"sortedIndexOf",
			"sortedLastIndex",
			"sortedLastIndexOf",
			"sortedUniqBy",
			"split",
			"spreadFrom",
			"startsWith",
			"subtract",
			"sumBy",
			"take",
			"takeRight",
			"takeRightWhile",
			"takeWhile",
			"tap",
			"throttle",
			"thru",
			"times",
			"trimChars",
			"trimCharsEnd",
			"trimCharsStart",
			"truncate",
			"union",
			"uniqBy",
			"uniqWith",
			"unset",
			"unzipWith",
			"without",
			"wrap",
			"xor",
			"zip",
			"zipObject",
			"zipObjectDeep"
		],
		"3": [
			"assignInWith",
			"assignWith",
			"clamp",
			"differenceBy",
			"differenceWith",
			"findFrom",
			"findIndexFrom",
			"findLastFrom",
			"findLastIndexFrom",
			"getOr",
			"includesFrom",
			"indexOfFrom",
			"inRange",
			"intersectionBy",
			"intersectionWith",
			"invokeArgs",
			"invokeArgsMap",
			"isEqualWith",
			"isMatchWith",
			"flatMapDepth",
			"lastIndexOfFrom",
			"mergeWith",
			"orderBy",
			"padChars",
			"padCharsEnd",
			"padCharsStart",
			"pullAllBy",
			"pullAllWith",
			"rangeStep",
			"rangeStepRight",
			"reduce",
			"reduceRight",
			"replace",
			"set",
			"slice",
			"sortedIndexBy",
			"sortedLastIndexBy",
			"transform",
			"unionBy",
			"unionWith",
			"update",
			"xorBy",
			"xorWith",
			"zipWith"
		],
		"4": [
			"fill",
			"setWith",
			"updateWith"
		]
	};
	/** Used to map ary to rearg configs. */
	exports.aryRearg = {
		"2": [1, 0],
		"3": [
			2,
			0,
			1
		],
		"4": [
			3,
			2,
			0,
			1
		]
	};
	/** Used to map method names to their iteratee ary. */
	exports.iterateeAry = {
		"dropRightWhile": 1,
		"dropWhile": 1,
		"every": 1,
		"filter": 1,
		"find": 1,
		"findFrom": 1,
		"findIndex": 1,
		"findIndexFrom": 1,
		"findKey": 1,
		"findLast": 1,
		"findLastFrom": 1,
		"findLastIndex": 1,
		"findLastIndexFrom": 1,
		"findLastKey": 1,
		"flatMap": 1,
		"flatMapDeep": 1,
		"flatMapDepth": 1,
		"forEach": 1,
		"forEachRight": 1,
		"forIn": 1,
		"forInRight": 1,
		"forOwn": 1,
		"forOwnRight": 1,
		"map": 1,
		"mapKeys": 1,
		"mapValues": 1,
		"partition": 1,
		"reduce": 2,
		"reduceRight": 2,
		"reject": 1,
		"remove": 1,
		"some": 1,
		"takeRightWhile": 1,
		"takeWhile": 1,
		"times": 1,
		"transform": 2
	};
	/** Used to map method names to iteratee rearg configs. */
	exports.iterateeRearg = {
		"mapKeys": [1],
		"reduceRight": [1, 0]
	};
	/** Used to map method names to rearg configs. */
	exports.methodRearg = {
		"assignInAllWith": [1, 0],
		"assignInWith": [
			1,
			2,
			0
		],
		"assignAllWith": [1, 0],
		"assignWith": [
			1,
			2,
			0
		],
		"differenceBy": [
			1,
			2,
			0
		],
		"differenceWith": [
			1,
			2,
			0
		],
		"getOr": [
			2,
			1,
			0
		],
		"intersectionBy": [
			1,
			2,
			0
		],
		"intersectionWith": [
			1,
			2,
			0
		],
		"isEqualWith": [
			1,
			2,
			0
		],
		"isMatchWith": [
			2,
			1,
			0
		],
		"mergeAllWith": [1, 0],
		"mergeWith": [
			1,
			2,
			0
		],
		"padChars": [
			2,
			1,
			0
		],
		"padCharsEnd": [
			2,
			1,
			0
		],
		"padCharsStart": [
			2,
			1,
			0
		],
		"pullAllBy": [
			2,
			1,
			0
		],
		"pullAllWith": [
			2,
			1,
			0
		],
		"rangeStep": [
			1,
			2,
			0
		],
		"rangeStepRight": [
			1,
			2,
			0
		],
		"setWith": [
			3,
			1,
			2,
			0
		],
		"sortedIndexBy": [
			2,
			1,
			0
		],
		"sortedLastIndexBy": [
			2,
			1,
			0
		],
		"unionBy": [
			1,
			2,
			0
		],
		"unionWith": [
			1,
			2,
			0
		],
		"updateWith": [
			3,
			1,
			2,
			0
		],
		"xorBy": [
			1,
			2,
			0
		],
		"xorWith": [
			1,
			2,
			0
		],
		"zipWith": [
			1,
			2,
			0
		]
	};
	/** Used to map method names to spread configs. */
	exports.methodSpread = {
		"assignAll": { "start": 0 },
		"assignAllWith": { "start": 0 },
		"assignInAll": { "start": 0 },
		"assignInAllWith": { "start": 0 },
		"defaultsAll": { "start": 0 },
		"defaultsDeepAll": { "start": 0 },
		"invokeArgs": { "start": 2 },
		"invokeArgsMap": { "start": 2 },
		"mergeAll": { "start": 0 },
		"mergeAllWith": { "start": 0 },
		"partial": { "start": 1 },
		"partialRight": { "start": 1 },
		"without": { "start": 1 },
		"zipAll": { "start": 0 }
	};
	/** Used to identify methods which mutate arrays or objects. */
	exports.mutate = {
		"array": {
			"fill": true,
			"pull": true,
			"pullAll": true,
			"pullAllBy": true,
			"pullAllWith": true,
			"pullAt": true,
			"remove": true,
			"reverse": true
		},
		"object": {
			"assign": true,
			"assignAll": true,
			"assignAllWith": true,
			"assignIn": true,
			"assignInAll": true,
			"assignInAllWith": true,
			"assignInWith": true,
			"assignWith": true,
			"defaults": true,
			"defaultsAll": true,
			"defaultsDeep": true,
			"defaultsDeepAll": true,
			"merge": true,
			"mergeAll": true,
			"mergeAllWith": true,
			"mergeWith": true
		},
		"set": {
			"set": true,
			"setWith": true,
			"unset": true,
			"update": true,
			"updateWith": true
		}
	};
	/** Used to map real names to their aliases. */
	exports.realToAlias = function() {
		var hasOwnProperty = Object.prototype.hasOwnProperty, object = exports.aliasToReal, result = {};
		for (var key in object) {
			var value = object[key];
			if (hasOwnProperty.call(result, value)) result[value].push(key);
			else result[value] = [key];
		}
		return result;
	}();
	/** Used to map method names to other names. */
	exports.remap = {
		"assignAll": "assign",
		"assignAllWith": "assignWith",
		"assignInAll": "assignIn",
		"assignInAllWith": "assignInWith",
		"curryN": "curry",
		"curryRightN": "curryRight",
		"defaultsAll": "defaults",
		"defaultsDeepAll": "defaultsDeep",
		"findFrom": "find",
		"findIndexFrom": "findIndex",
		"findLastFrom": "findLast",
		"findLastIndexFrom": "findLastIndex",
		"getOr": "get",
		"includesFrom": "includes",
		"indexOfFrom": "indexOf",
		"invokeArgs": "invoke",
		"invokeArgsMap": "invokeMap",
		"lastIndexOfFrom": "lastIndexOf",
		"mergeAll": "merge",
		"mergeAllWith": "mergeWith",
		"padChars": "pad",
		"padCharsEnd": "padEnd",
		"padCharsStart": "padStart",
		"propertyOf": "get",
		"rangeStep": "range",
		"rangeStepRight": "rangeRight",
		"restFrom": "rest",
		"spreadFrom": "spread",
		"trimChars": "trim",
		"trimCharsEnd": "trimEnd",
		"trimCharsStart": "trimStart",
		"zipAll": "zip"
	};
	/** Used to track methods that skip fixing their arity. */
	exports.skipFixed = {
		"castArray": true,
		"flow": true,
		"flowRight": true,
		"iteratee": true,
		"mixin": true,
		"rearg": true,
		"runInContext": true
	};
	/** Used to track methods that skip rearranging arguments. */
	exports.skipRearg = {
		"add": true,
		"assign": true,
		"assignIn": true,
		"bind": true,
		"bindKey": true,
		"concat": true,
		"difference": true,
		"divide": true,
		"eq": true,
		"gt": true,
		"gte": true,
		"isEqual": true,
		"lt": true,
		"lte": true,
		"matchesProperty": true,
		"merge": true,
		"multiply": true,
		"overArgs": true,
		"partial": true,
		"partialRight": true,
		"propertyOf": true,
		"random": true,
		"range": true,
		"rangeRight": true,
		"subtract": true,
		"zip": true,
		"zipObject": true,
		"zipObjectDeep": true
	};
}));
//#endregion
//#region node_modules/lodash/fp/placeholder.js
var require_placeholder = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	/**
	* The default argument placeholder value for methods.
	*
	* @type {Object}
	*/
	module.exports = {};
}));
//#endregion
//#region node_modules/lodash/fp/_baseConvert.js
var require__baseConvert = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var mapping = require__mapping();
	var fallbackHolder = require_placeholder();
	/** Built-in value reference. */
	var push = Array.prototype.push;
	/**
	* Creates a function, with an arity of `n`, that invokes `func` with the
	* arguments it receives.
	*
	* @private
	* @param {Function} func The function to wrap.
	* @param {number} n The arity of the new function.
	* @returns {Function} Returns the new function.
	*/
	function baseArity(func, n) {
		return n == 2 ? function(a, b) {
			return func.apply(void 0, arguments);
		} : function(a) {
			return func.apply(void 0, arguments);
		};
	}
	/**
	* Creates a function that invokes `func`, with up to `n` arguments, ignoring
	* any additional arguments.
	*
	* @private
	* @param {Function} func The function to cap arguments for.
	* @param {number} n The arity cap.
	* @returns {Function} Returns the new function.
	*/
	function baseAry(func, n) {
		return n == 2 ? function(a, b) {
			return func(a, b);
		} : function(a) {
			return func(a);
		};
	}
	/**
	* Creates a clone of `array`.
	*
	* @private
	* @param {Array} array The array to clone.
	* @returns {Array} Returns the cloned array.
	*/
	function cloneArray(array) {
		var length = array ? array.length : 0, result = Array(length);
		while (length--) result[length] = array[length];
		return result;
	}
	/**
	* Creates a function that clones a given object using the assignment `func`.
	*
	* @private
	* @param {Function} func The assignment function.
	* @returns {Function} Returns the new cloner function.
	*/
	function createCloner(func) {
		return function(object) {
			return func({}, object);
		};
	}
	/**
	* A specialized version of `_.spread` which flattens the spread array into
	* the arguments of the invoked `func`.
	*
	* @private
	* @param {Function} func The function to spread arguments over.
	* @param {number} start The start position of the spread.
	* @returns {Function} Returns the new function.
	*/
	function flatSpread(func, start) {
		return function() {
			var length = arguments.length, lastIndex = length - 1, args = Array(length);
			while (length--) args[length] = arguments[length];
			var array = args[start], otherArgs = args.slice(0, start);
			if (array) push.apply(otherArgs, array);
			if (start != lastIndex) push.apply(otherArgs, args.slice(start + 1));
			return func.apply(this, otherArgs);
		};
	}
	/**
	* Creates a function that wraps `func` and uses `cloner` to clone the first
	* argument it receives.
	*
	* @private
	* @param {Function} func The function to wrap.
	* @param {Function} cloner The function to clone arguments.
	* @returns {Function} Returns the new immutable function.
	*/
	function wrapImmutable(func, cloner) {
		return function() {
			var length = arguments.length;
			if (!length) return;
			var args = Array(length);
			while (length--) args[length] = arguments[length];
			var result = args[0] = cloner.apply(void 0, args);
			func.apply(void 0, args);
			return result;
		};
	}
	/**
	* The base implementation of `convert` which accepts a `util` object of methods
	* required to perform conversions.
	*
	* @param {Object} util The util object.
	* @param {string} name The name of the function to convert.
	* @param {Function} func The function to convert.
	* @param {Object} [options] The options object.
	* @param {boolean} [options.cap=true] Specify capping iteratee arguments.
	* @param {boolean} [options.curry=true] Specify currying.
	* @param {boolean} [options.fixed=true] Specify fixed arity.
	* @param {boolean} [options.immutable=true] Specify immutable operations.
	* @param {boolean} [options.rearg=true] Specify rearranging arguments.
	* @returns {Function|Object} Returns the converted function or object.
	*/
	function baseConvert(util, name, func, options) {
		var isLib = typeof name == "function", isObj = name === Object(name);
		if (isObj) {
			options = func;
			func = name;
			name = void 0;
		}
		if (func == null) throw new TypeError();
		options || (options = {});
		var config = {
			"cap": "cap" in options ? options.cap : true,
			"curry": "curry" in options ? options.curry : true,
			"fixed": "fixed" in options ? options.fixed : true,
			"immutable": "immutable" in options ? options.immutable : true,
			"rearg": "rearg" in options ? options.rearg : true
		};
		var defaultHolder = isLib ? func : fallbackHolder, forceCurry = "curry" in options && options.curry, forceFixed = "fixed" in options && options.fixed, forceRearg = "rearg" in options && options.rearg, pristine = isLib ? func.runInContext() : void 0;
		var helpers = isLib ? func : {
			"ary": util.ary,
			"assign": util.assign,
			"clone": util.clone,
			"curry": util.curry,
			"forEach": util.forEach,
			"isArray": util.isArray,
			"isError": util.isError,
			"isFunction": util.isFunction,
			"isWeakMap": util.isWeakMap,
			"iteratee": util.iteratee,
			"keys": util.keys,
			"rearg": util.rearg,
			"toInteger": util.toInteger,
			"toPath": util.toPath
		};
		var ary = helpers.ary, assign = helpers.assign, clone = helpers.clone, curry = helpers.curry, each = helpers.forEach, isArray = helpers.isArray, isError = helpers.isError, isFunction = helpers.isFunction, isWeakMap = helpers.isWeakMap, keys = helpers.keys, rearg = helpers.rearg, toInteger = helpers.toInteger, toPath = helpers.toPath;
		var aryMethodKeys = keys(mapping.aryMethod);
		var wrappers = {
			"castArray": function(castArray) {
				return function() {
					var value = arguments[0];
					return isArray(value) ? castArray(cloneArray(value)) : castArray.apply(void 0, arguments);
				};
			},
			"iteratee": function(iteratee) {
				return function() {
					var func = arguments[0], arity = arguments[1], result = iteratee(func, arity), length = result.length;
					if (config.cap && typeof arity == "number") {
						arity = arity > 2 ? arity - 2 : 1;
						return length && length <= arity ? result : baseAry(result, arity);
					}
					return result;
				};
			},
			"mixin": function(mixin) {
				return function(source) {
					var func = this;
					if (!isFunction(func)) return mixin(func, Object(source));
					var pairs = [];
					each(keys(source), function(key) {
						if (isFunction(source[key])) pairs.push([key, func.prototype[key]]);
					});
					mixin(func, Object(source));
					each(pairs, function(pair) {
						var value = pair[1];
						if (isFunction(value)) func.prototype[pair[0]] = value;
						else delete func.prototype[pair[0]];
					});
					return func;
				};
			},
			"nthArg": function(nthArg) {
				return function(n) {
					var arity = n < 0 ? 1 : toInteger(n) + 1;
					return curry(nthArg(n), arity);
				};
			},
			"rearg": function(rearg) {
				return function(func, indexes) {
					var arity = indexes ? indexes.length : 0;
					return curry(rearg(func, indexes), arity);
				};
			},
			"runInContext": function(runInContext) {
				return function(context) {
					return baseConvert(util, runInContext(context), options);
				};
			}
		};
		/**
		* Casts `func` to a function with an arity capped iteratee if needed.
		*
		* @private
		* @param {string} name The name of the function to inspect.
		* @param {Function} func The function to inspect.
		* @returns {Function} Returns the cast function.
		*/
		function castCap(name, func) {
			if (config.cap) {
				var indexes = mapping.iterateeRearg[name];
				if (indexes) return iterateeRearg(func, indexes);
				var n = !isLib && mapping.iterateeAry[name];
				if (n) return iterateeAry(func, n);
			}
			return func;
		}
		/**
		* Casts `func` to a curried function if needed.
		*
		* @private
		* @param {string} name The name of the function to inspect.
		* @param {Function} func The function to inspect.
		* @param {number} n The arity of `func`.
		* @returns {Function} Returns the cast function.
		*/
		function castCurry(name, func, n) {
			return forceCurry || config.curry && n > 1 ? curry(func, n) : func;
		}
		/**
		* Casts `func` to a fixed arity function if needed.
		*
		* @private
		* @param {string} name The name of the function to inspect.
		* @param {Function} func The function to inspect.
		* @param {number} n The arity cap.
		* @returns {Function} Returns the cast function.
		*/
		function castFixed(name, func, n) {
			if (config.fixed && (forceFixed || !mapping.skipFixed[name])) {
				var data = mapping.methodSpread[name], start = data && data.start;
				return start === void 0 ? ary(func, n) : flatSpread(func, start);
			}
			return func;
		}
		/**
		* Casts `func` to an rearged function if needed.
		*
		* @private
		* @param {string} name The name of the function to inspect.
		* @param {Function} func The function to inspect.
		* @param {number} n The arity of `func`.
		* @returns {Function} Returns the cast function.
		*/
		function castRearg(name, func, n) {
			return config.rearg && n > 1 && (forceRearg || !mapping.skipRearg[name]) ? rearg(func, mapping.methodRearg[name] || mapping.aryRearg[n]) : func;
		}
		/**
		* Creates a clone of `object` by `path`.
		*
		* @private
		* @param {Object} object The object to clone.
		* @param {Array|string} path The path to clone by.
		* @returns {Object} Returns the cloned object.
		*/
		function cloneByPath(object, path) {
			path = toPath(path);
			var index = -1, length = path.length, lastIndex = length - 1, result = clone(Object(object)), nested = result;
			while (nested != null && ++index < length) {
				var key = path[index], value = nested[key];
				if (value != null && !(isFunction(value) || isError(value) || isWeakMap(value))) nested[key] = clone(index == lastIndex ? value : Object(value));
				nested = nested[key];
			}
			return result;
		}
		/**
		* Converts `lodash` to an immutable auto-curried iteratee-first data-last
		* version with conversion `options` applied.
		*
		* @param {Object} [options] The options object. See `baseConvert` for more details.
		* @returns {Function} Returns the converted `lodash`.
		*/
		function convertLib(options) {
			return _.runInContext.convert(options)(void 0);
		}
		/**
		* Create a converter function for `func` of `name`.
		*
		* @param {string} name The name of the function to convert.
		* @param {Function} func The function to convert.
		* @returns {Function} Returns the new converter function.
		*/
		function createConverter(name, func) {
			var realName = mapping.aliasToReal[name] || name, methodName = mapping.remap[realName] || realName, oldOptions = options;
			return function(options) {
				return baseConvert(isLib ? pristine : helpers, realName, isLib ? pristine[methodName] : func, assign(assign({}, oldOptions), options));
			};
		}
		/**
		* Creates a function that wraps `func` to invoke its iteratee, with up to `n`
		* arguments, ignoring any additional arguments.
		*
		* @private
		* @param {Function} func The function to cap iteratee arguments for.
		* @param {number} n The arity cap.
		* @returns {Function} Returns the new function.
		*/
		function iterateeAry(func, n) {
			return overArg(func, function(func) {
				return typeof func == "function" ? baseAry(func, n) : func;
			});
		}
		/**
		* Creates a function that wraps `func` to invoke its iteratee with arguments
		* arranged according to the specified `indexes` where the argument value at
		* the first index is provided as the first argument, the argument value at
		* the second index is provided as the second argument, and so on.
		*
		* @private
		* @param {Function} func The function to rearrange iteratee arguments for.
		* @param {number[]} indexes The arranged argument indexes.
		* @returns {Function} Returns the new function.
		*/
		function iterateeRearg(func, indexes) {
			return overArg(func, function(func) {
				var n = indexes.length;
				return baseArity(rearg(baseAry(func, n), indexes), n);
			});
		}
		/**
		* Creates a function that invokes `func` with its first argument transformed.
		*
		* @private
		* @param {Function} func The function to wrap.
		* @param {Function} transform The argument transform.
		* @returns {Function} Returns the new function.
		*/
		function overArg(func, transform) {
			return function() {
				var length = arguments.length;
				if (!length) return func();
				var args = Array(length);
				while (length--) args[length] = arguments[length];
				var index = config.rearg ? 0 : length - 1;
				args[index] = transform(args[index]);
				return func.apply(void 0, args);
			};
		}
		/**
		* Creates a function that wraps `func` and applys the conversions
		* rules by `name`.
		*
		* @private
		* @param {string} name The name of the function to wrap.
		* @param {Function} func The function to wrap.
		* @returns {Function} Returns the converted function.
		*/
		function wrap(name, func, placeholder) {
			var result, realName = mapping.aliasToReal[name] || name, wrapped = func, wrapper = wrappers[realName];
			if (wrapper) wrapped = wrapper(func);
			else if (config.immutable) {
				if (mapping.mutate.array[realName]) wrapped = wrapImmutable(func, cloneArray);
				else if (mapping.mutate.object[realName]) wrapped = wrapImmutable(func, createCloner(func));
				else if (mapping.mutate.set[realName]) wrapped = wrapImmutable(func, cloneByPath);
			}
			each(aryMethodKeys, function(aryKey) {
				each(mapping.aryMethod[aryKey], function(otherName) {
					if (realName == otherName) {
						var data = mapping.methodSpread[realName];
						result = data && data.afterRearg ? castFixed(realName, castRearg(realName, wrapped, aryKey), aryKey) : castRearg(realName, castFixed(realName, wrapped, aryKey), aryKey);
						result = castCap(realName, result);
						result = castCurry(realName, result, aryKey);
						return false;
					}
				});
				return !result;
			});
			result || (result = wrapped);
			if (result == func) result = forceCurry ? curry(result, 1) : function() {
				return func.apply(this, arguments);
			};
			result.convert = createConverter(realName, func);
			result.placeholder = func.placeholder = placeholder;
			return result;
		}
		if (!isObj) return wrap(name, func, defaultHolder);
		var _ = func;
		var pairs = [];
		each(aryMethodKeys, function(aryKey) {
			each(mapping.aryMethod[aryKey], function(key) {
				var func = _[mapping.remap[key] || key];
				if (func) pairs.push([key, wrap(key, func, _)]);
			});
		});
		each(keys(_), function(key) {
			var func = _[key];
			if (typeof func == "function") {
				var length = pairs.length;
				while (length--) if (pairs[length][0] == key) return;
				func.convert = createConverter(key, func);
				pairs.push([key, func]);
			}
		});
		each(pairs, function(pair) {
			_[pair[0]] = pair[1];
		});
		_.convert = convertLib;
		_.placeholder = _;
		each(keys(_), function(key) {
			each(mapping.realToAlias[key] || [], function(alias) {
				_[alias] = _[key];
			});
		});
		return _;
	}
	module.exports = baseConvert;
}));
//#endregion
//#region node_modules/lodash/fp.js
var require_fp = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var _ = require_lodash_min().runInContext();
	module.exports = require__baseConvert()(_, _);
}));
//#endregion
//#region src/utils/crs.js
var import_prop_types = /* @__PURE__ */ __toESM(require_prop_types());
init_lib();
require_proj4leaflet();
var import_fp = require_fp();
var pixelWidth = 28e-5;
function resolutions({ metersPerUnit, scaleDenominator, tileMatrixMinX, tileMatrixMaxX, tileWidth, tileMatrixMinY, tileMatrixMaxY, tileHeight, numResolutions }) {
	let maxResolution;
	if (!(0, import_fp.isUndefined)(scaleDenominator)) maxResolution = scaleDenominator * pixelWidth;
	else maxResolution = (!(0, import_fp.isUndefined)(tileMatrixMinX) ? (tileMatrixMaxX - tileMatrixMinX) / tileWidth : (tileMatrixMaxY - tileMatrixMinY) / tileHeight) * metersPerUnit;
	return (0, import_fp.map)((i) => maxResolution / Math.pow(2, i))((0, import_fp.range)(0, numResolutions));
}
function projCRSOptions(tileMatrixParams) {
	const { tileMatrixMinX, tileMatrixMinY, tileMatrixMaxX, tileMatrixMaxY } = tileMatrixParams;
	return {
		bounds: L.bounds(L.point(tileMatrixMinX, tileMatrixMinY), L.point(tileMatrixMaxX, tileMatrixMaxY)),
		origin: [tileMatrixMinX, tileMatrixMaxY],
		resolutions: resolutions(tileMatrixParams)
	};
}
//#endregion
//#region \0@oxc-project+runtime@0.149.0/helpers/esm/objectWithoutPropertiesLoose.js
function _objectWithoutPropertiesLoose(r, e) {
	if (null == r) return {};
	var t = {};
	for (var n in r) if ({}.hasOwnProperty.call(r, n)) {
		if (e.includes(n)) continue;
		t[n] = r[n];
	}
	return t;
}
//#endregion
//#region \0@oxc-project+runtime@0.149.0/helpers/esm/objectWithoutProperties.js
function _objectWithoutProperties(e, t) {
	if (null == e) return {};
	var o, r, i = _objectWithoutPropertiesLoose(e, t);
	if (Object.getOwnPropertySymbols) {
		var s = Object.getOwnPropertySymbols(e);
		for (r = 0; r < s.length; r++) o = s[r], t.includes(o) || {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
	}
	return i;
}
//#endregion
//#region \0@oxc-project+runtime@0.149.0/helpers/esm/typeof.js
function _typeof(o) {
	"@babel/helpers - typeof";
	return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o) {
		return typeof o;
	} : function(o) {
		return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
	}, _typeof(o);
}
//#endregion
//#region \0@oxc-project+runtime@0.149.0/helpers/esm/toPrimitive.js
function toPrimitive(t, r) {
	if ("object" != _typeof(t) || !t) return t;
	var e = t[Symbol.toPrimitive];
	if (void 0 !== e) {
		var i = e.call(t, r || "default");
		if ("object" != _typeof(i)) return i;
		throw new TypeError("@@toPrimitive must return a primitive value.");
	}
	return ("string" === r ? String : Number)(t);
}
//#endregion
//#region \0@oxc-project+runtime@0.149.0/helpers/esm/toPropertyKey.js
function toPropertyKey(t) {
	var i = toPrimitive(t, "string");
	return "symbol" == _typeof(i) ? i : i + "";
}
//#endregion
//#region \0@oxc-project+runtime@0.149.0/helpers/esm/defineProperty.js
function _defineProperty(e, r, t) {
	return (r = toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
		value: t,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[r] = t, e;
}
//#endregion
//#region \0@oxc-project+runtime@0.149.0/helpers/esm/objectSpread2.js
function ownKeys(e, r) {
	var t = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var o = Object.getOwnPropertySymbols(e);
		r && (o = o.filter(function(r) {
			return Object.getOwnPropertyDescriptor(e, r).enumerable;
		})), t.push.apply(t, o);
	}
	return t;
}
function _objectSpread2(e) {
	for (var r = 1; r < arguments.length; r++) {
		var t = null != arguments[r] ? arguments[r] : {};
		r % 2 ? ownKeys(Object(t), !0).forEach(function(r) {
			_defineProperty(e, r, t[r]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function(r) {
			Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
		});
	}
	return e;
}
//#endregion
//#region src/components/GenericBaseMap.jsx
var _excluded$5 = [
	"tileset",
	"center",
	"zoom",
	"children"
];
function GenericBaseMap(_ref) {
	let { tileset: { url, projection, tileMatrix, attribution }, center, zoom, children } = _ref, rest = _objectWithoutProperties(_ref, _excluded$5);
	const crs = new L.Proj.CRS(projection.code, projection.proj4def, _objectSpread2(_objectSpread2({}, projCRSOptions(tileMatrix)), projection.options));
	return /* @__PURE__ */ jsxs(MapContainer, _objectSpread2(_objectSpread2({
		crs,
		minZoom: 0,
		maxZoom: tileMatrix.numResolutions,
		center,
		zoom
	}, rest), {}, { children: [/* @__PURE__ */ jsx(TileLayer, {
		attribution,
		url,
		noWrap: true,
		maxZoom: tileMatrix.numResolutions
	}), children] }));
}
GenericBaseMap.propTypes = { tileset: import_prop_types.default.shape({
	url: import_prop_types.default.string.isRequired,
	projection: import_prop_types.default.shape({
		code: import_prop_types.default.string.isRequired,
		proj4def: import_prop_types.default.string.isRequired,
		options: import_prop_types.default.object
	}).isRequired,
	tileMatrix: import_prop_types.default.object.isRequired,
	attribution: import_prop_types.default.string
}).isRequired };
//#endregion
//#region src/components/BCBaseMap.jsx
init_lib();
var _excluded$4 = ["children", "baseMapTilesUrl"];
var BCBaseMap = class BCBaseMap extends PureComponent {
	render() {
		const _this$props = this.props, { children, baseMapTilesUrl } = _this$props, rest = _objectWithoutProperties(_this$props, _excluded$4);
		const tileset = _objectSpread2(_objectSpread2({}, BCBaseMap.tileset), {}, { url: baseMapTilesUrl });
		return /* @__PURE__ */ jsx(GenericBaseMap, _objectSpread2(_objectSpread2({ tileset }, rest), {}, { children }));
	}
};
_defineProperty(BCBaseMap, "propTypes", { baseMapTilesUrl: import_prop_types.default.string.isRequired });
_defineProperty(BCBaseMap, "tileset", {
	projection: {
		code: "EPSG:3005",
		proj4def: "+proj=aea +lat_1=50 +lat_2=58.5 +lat_0=45 +lon_0=-126 +x_0=1000000 +y_0=0 +ellps=GRS80 +datum=NAD83 +units=m +no_defs"
	},
	tileMatrix: {
		metersPerUnit: 1,
		tileMatrixMinX: -20037508,
		tileMatrixMaxX: 20037508,
		tileWidth: 256,
		tileMatrixMinY: -20037508,
		tileMatrixMaxY: 20037508,
		numResolutions: 14
	},
	attribution: "&copy; <a href=\"http://osm.org/copyright\">OpenStreetMap</a> contributors"
});
_defineProperty(BCBaseMap, "initialViewport", {
	center: {
		lat: 55,
		lng: -125
	},
	zoom: 6
});
//#endregion
//#region src/components/YNWTBaseMap.jsx
init_lib();
var _excluded$3 = ["children", "baseMapTilesUrl"];
var YNWTBaseMap = class YNWTBaseMap extends PureComponent {
	render() {
		const _this$props = this.props, { children, baseMapTilesUrl } = _this$props, rest = _objectWithoutProperties(_this$props, _excluded$3);
		const tileset = _objectSpread2(_objectSpread2({}, YNWTBaseMap.tileset), {}, { url: baseMapTilesUrl });
		return /* @__PURE__ */ jsx(GenericBaseMap, _objectSpread2(_objectSpread2({ tileset }, rest), {}, { children }));
	}
};
_defineProperty(YNWTBaseMap, "propTypes", { baseMapTilesUrl: import_prop_types.default.string.isRequired });
_defineProperty(YNWTBaseMap, "tileset", {
	projection: {
		code: "EPSG:3578",
		proj4def: "+proj=aea +lat_1=61.66666666666666 +lat_2=68 +lat_0=59 +lon_0=-132.5 +x_0=500000 +y_0=500000 +ellps=GRS80 +datum=NAD83 +units=m +no_defs"
	},
	tileMatrix: {
		metersPerUnit: 1,
		tileMatrixMinX: -20037508,
		tileMatrixMaxX: 20037508,
		tileWidth: 256,
		tileMatrixMinY: -20037508,
		tileMatrixMaxY: 20037508,
		numResolutions: 14
	},
	attribution: "&copy; <a href=\"http://osm.org/copyright\">OpenStreetMap</a> contributors"
});
_defineProperty(YNWTBaseMap, "initialViewport", {
	center: {
		lat: 65,
		lng: -121
	},
	zoom: 6
});
//#endregion
//#region src/components/EEZLayer.jsx
var _excluded$2 = [
	"url",
	"style",
	"attribution",
	"onError"
];
var defaultEEZGeoJSONUrl = "https://beehive.pacificclimate.org/tiles/eez/eez_boundaries_canada_v12.geojson";
var defaultEEZAttribution = "&copy; <a href=\"https://www.marineregions.org/\">Flanders Marine Institute</a> (2023), <a href=\"https://doi.org/10.14284/632\">World EEZ v12</a> (CC BY 4.0)";
var defaultStyle = {
	color: "rgba(134, 161, 177, 0.4)",
	weight: 3,
	lineJoin: "round",
	lineCap: "round",
	fill: false
};
function EEZLayer(_ref) {
	let { url, style, attribution, onError } = _ref, geoJSONProps = _objectWithoutProperties(_ref, _excluded$2);
	const [data, setData] = useState(null);
	useEffect(() => {
		const controller = new AbortController();
		setData(null);
		fetch(url, { signal: controller.signal }).then((response) => {
			if (!response.ok) throw new Error(`Failed to fetch EEZ GeoJSON: ${response.status} ${response.statusText}`);
			return response.json();
		}).then((geoJSON) => setData(geoJSON)).catch((error) => {
			if (error.name !== "AbortError" && onError) onError(error);
		});
		return () => controller.abort();
	}, [url, onError]);
	return data ? /* @__PURE__ */ jsx(GeoJSON, _objectSpread2({
		data,
		style: style || defaultStyle,
		attribution,
		interactive: false
	}, geoJSONProps)) : null;
}
EEZLayer.propTypes = {
	url: import_prop_types.default.string,
	style: import_prop_types.default.oneOfType([import_prop_types.default.object, import_prop_types.default.func]),
	attribution: import_prop_types.default.string,
	onError: import_prop_types.default.func
};
EEZLayer.defaultProps = {
	url: defaultEEZGeoJSONUrl,
	style: null,
	attribution: defaultEEZAttribution,
	onError: null
};
//#endregion
//#region src/components/SetView.js
var printView = (view) => JSON.stringify({
	lat: view.center.lat,
	lng: view.center.lng,
	zoom: view.zoom
});
var SetView = ({ view, debug = false }) => {
	const map = useMap();
	const currCenter = map.getCenter();
	const currZoom = map.getZoom();
	const tag = `SetView ${map._container.id}:`;
	if (debug) console.log(tag, `from:`, printView({
		center: currCenter,
		zoom: currZoom
	}), `to:`, printView(view));
	useEffect(() => {
		if (currCenter.lat !== view.center.lat || currCenter.lng !== view.center.lng || currZoom !== view.zoom) {
			if (debug) console.log(tag, `!setting`);
			map.setView(view.center, view.zoom, { animate: false });
		}
	});
	return null;
};
//#endregion
//#region src/leaflet-extensions/Control.Static.js
L.Control.Static = L.Control.extend({
	onAdd: (map) => {
		return L.DomUtil.create("div", "leaflet-control-static leaflet-control");
	},
	onRemove: (map) => {}
});
L.control.static = (opts) => new L.Control.Static(opts);
//#endregion
//#region src/components/StaticControl.jsx
var _excluded$1 = ["children"];
function StaticControl(_ref) {
	let { children } = _ref, rest = _objectWithoutProperties(_ref, _excluded$1);
	const context = useLeafletContext();
	useEffect(() => {
		const control = L.control.static(rest);
		control.addTo(context.map);
		createRoot(control.getContainer()).render(children);
		return () => {
			control.remove();
		};
	});
	return null;
}
//#endregion
//#region node_modules/svg-loaders-react/dist/index.js
var require_dist = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = function(e) {
		var t = {};
		function a(r) {
			if (t[r]) return t[r].exports;
			var n = t[r] = {
				i: r,
				l: !1,
				exports: {}
			};
			return e[r].call(n.exports, n, n.exports, a), n.l = !0, n.exports;
		}
		return a.m = e, a.c = t, a.d = function(e, t, r) {
			a.o(e, t) || Object.defineProperty(e, t, {
				enumerable: !0,
				get: r
			});
		}, a.r = function(e) {
			"undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 });
		}, a.t = function(e, t) {
			if (1 & t && (e = a(e)), 8 & t) return e;
			if (4 & t && "object" == typeof e && e && e.__esModule) return e;
			var r = Object.create(null);
			if (a.r(r), Object.defineProperty(r, "default", {
				enumerable: !0,
				value: e
			}), 2 & t && "string" != typeof e) for (var n in e) a.d(r, n, function(t) {
				return e[t];
			}.bind(null, n));
			return r;
		}, a.n = function(e) {
			var t = e && e.__esModule ? function() {
				return e.default;
			} : function() {
				return e;
			};
			return a.d(t, "a", t), t;
		}, a.o = function(e, t) {
			return Object.prototype.hasOwnProperty.call(e, t);
		}, a.p = "", a(a.s = 4);
	}([
		function(e, t) {
			e.exports = __ext_1;
		},
		function(e, t, a) {
			e.exports = a(2)();
		},
		function(e, t, a) {
			"use strict";
			var r = a(3);
			function n() {}
			e.exports = function() {
				function e(e, t, a, n, i, c) {
					if (c !== r) {
						var l = /* @__PURE__ */ new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
						throw l.name = "Invariant Violation", l;
					}
				}
				function t() {
					return e;
				}
				e.isRequired = e;
				var a = {
					array: e,
					bool: e,
					func: e,
					number: e,
					object: e,
					string: e,
					symbol: e,
					any: e,
					arrayOf: t,
					element: e,
					instanceOf: t,
					node: e,
					objectOf: t,
					oneOf: t,
					oneOfType: t,
					shape: t,
					exact: t
				};
				return a.checkPropTypes = n, a.PropTypes = a, a;
			};
		},
		function(e, t, a) {
			"use strict";
			e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
		},
		function(e, t, a) {
			"use strict";
			a.r(t);
			var r = a(0), n = a.n(r), i = a(1), c = a.n(i);
			function l() {
				return (l = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var a = arguments[t];
						for (var r in a) Object.prototype.hasOwnProperty.call(a, r) && (e[r] = a[r]);
					}
					return e;
				}).apply(this, arguments);
			}
			function o(e, t) {
				if (null == e) return {};
				var a, r, n = function(e, t) {
					if (null == e) return {};
					var a, r, n = {}, i = Object.keys(e);
					for (r = 0; r < i.length; r++) a = i[r], t.indexOf(a) >= 0 || (n[a] = e[a]);
					return n;
				}(e, t);
				if (Object.getOwnPropertySymbols) {
					var i = Object.getOwnPropertySymbols(e);
					for (r = 0; r < i.length; r++) a = i[r], t.indexOf(a) >= 0 || Object.prototype.propertyIsEnumerable.call(e, a) && (n[a] = e[a]);
				}
				return n;
			}
			var s = function(e) {
				var t = e.className, a = o(e, ["className"]);
				return n.a.createElement("svg", l({
					width: 55,
					height: 80,
					fill: "#FFF",
					viewBox: "0 0 55 80",
					className: "svg-loaders-svg".concat(t ? " ".concat(t) : "")
				}, a), n.a.createElement("g", { transform: "matrix(1 0 0 -1 0 80)" }, n.a.createElement("rect", {
					width: 10,
					height: 20,
					rx: 3
				}, n.a.createElement("animate", {
					attributeName: "height",
					begin: "0s",
					dur: "4.3s",
					values: "20;45;57;80;64;32;66;45;64;23;66;13;64;56;34;34;2;23;76;79;20",
					calcMode: "linear",
					repeatCount: "indefinite"
				})), n.a.createElement("rect", {
					x: 15,
					width: 10,
					height: 80,
					rx: 3
				}, n.a.createElement("animate", {
					attributeName: "height",
					begin: "0s",
					dur: "2s",
					values: "80;55;33;5;75;23;73;33;12;14;60;80",
					calcMode: "linear",
					repeatCount: "indefinite"
				})), n.a.createElement("rect", {
					x: 30,
					width: 10,
					height: 50,
					rx: 3
				}, n.a.createElement("animate", {
					attributeName: "height",
					begin: "0s",
					dur: "1.4s",
					values: "50;34;78;23;56;23;34;76;80;54;21;50",
					calcMode: "linear",
					repeatCount: "indefinite"
				})), n.a.createElement("rect", {
					x: 45,
					width: 10,
					height: 30,
					rx: 3
				}, n.a.createElement("animate", {
					attributeName: "height",
					begin: "0s",
					dur: "2s",
					values: "30;45;13;80;56;72;45;76;34;23;67;30",
					calcMode: "linear",
					repeatCount: "indefinite"
				}))));
			};
			function u() {
				return (u = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var a = arguments[t];
						for (var r in a) Object.prototype.hasOwnProperty.call(a, r) && (e[r] = a[r]);
					}
					return e;
				}).apply(this, arguments);
			}
			function f(e, t) {
				if (null == e) return {};
				var a, r, n = function(e, t) {
					if (null == e) return {};
					var a, r, n = {}, i = Object.keys(e);
					for (r = 0; r < i.length; r++) a = i[r], t.indexOf(a) >= 0 || (n[a] = e[a]);
					return n;
				}(e, t);
				if (Object.getOwnPropertySymbols) {
					var i = Object.getOwnPropertySymbols(e);
					for (r = 0; r < i.length; r++) a = i[r], t.indexOf(a) >= 0 || Object.prototype.propertyIsEnumerable.call(e, a) && (n[a] = e[a]);
				}
				return n;
			}
			s.propTypes = { className: c.a.string }, s.defaultProps = { className: void 0 };
			var m = function(e) {
				var t = e.className, a = f(e, ["className"]);
				return n.a.createElement("svg", u({
					width: 57,
					height: 57,
					stroke: "#fff",
					viewBox: "0 0 57 57",
					className: "svg-loaders-svg".concat(t ? " ".concat(t) : "")
				}, a), n.a.createElement("g", {
					transform: "translate(1 1)",
					strokeWidth: 2,
					fill: "none",
					fillRule: "evenodd"
				}, n.a.createElement("circle", {
					cx: 5,
					cy: 50,
					r: 5
				}, n.a.createElement("animate", {
					attributeName: "cy",
					begin: "0s",
					dur: "2.2s",
					values: "50;5;50;50",
					calcMode: "linear",
					repeatCount: "indefinite"
				}), n.a.createElement("animate", {
					attributeName: "cx",
					begin: "0s",
					dur: "2.2s",
					values: "5;27;49;5",
					calcMode: "linear",
					repeatCount: "indefinite"
				})), n.a.createElement("circle", {
					cx: 27,
					cy: 5,
					r: 5
				}, n.a.createElement("animate", {
					attributeName: "cy",
					begin: "0s",
					dur: "2.2s",
					from: 5,
					to: 5,
					values: "5;50;50;5",
					calcMode: "linear",
					repeatCount: "indefinite"
				}), n.a.createElement("animate", {
					attributeName: "cx",
					begin: "0s",
					dur: "2.2s",
					from: 27,
					to: 27,
					values: "27;49;5;27",
					calcMode: "linear",
					repeatCount: "indefinite"
				})), n.a.createElement("circle", {
					cx: 49,
					cy: 50,
					r: 5
				}, n.a.createElement("animate", {
					attributeName: "cy",
					begin: "0s",
					dur: "2.2s",
					values: "50;50;5;50",
					calcMode: "linear",
					repeatCount: "indefinite"
				}), n.a.createElement("animate", {
					attributeName: "cx",
					from: 49,
					to: 49,
					begin: "0s",
					dur: "2.2s",
					values: "49;5;27;49",
					calcMode: "linear",
					repeatCount: "indefinite"
				}))));
			};
			function p() {
				return (p = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var a = arguments[t];
						for (var r in a) Object.prototype.hasOwnProperty.call(a, r) && (e[r] = a[r]);
					}
					return e;
				}).apply(this, arguments);
			}
			function d(e, t) {
				if (null == e) return {};
				var a, r, n = function(e, t) {
					if (null == e) return {};
					var a, r, n = {}, i = Object.keys(e);
					for (r = 0; r < i.length; r++) a = i[r], t.indexOf(a) >= 0 || (n[a] = e[a]);
					return n;
				}(e, t);
				if (Object.getOwnPropertySymbols) {
					var i = Object.getOwnPropertySymbols(e);
					for (r = 0; r < i.length; r++) a = i[r], t.indexOf(a) >= 0 || Object.prototype.propertyIsEnumerable.call(e, a) && (n[a] = e[a]);
				}
				return n;
			}
			m.propTypes = { className: c.a.string }, m.defaultProps = { className: void 0 };
			var y = function(e) {
				var t = e.className, a = d(e, ["className"]);
				return n.a.createElement("svg", p({
					width: 135,
					height: 140,
					fill: "#fff",
					viewBox: "0 0 135 140",
					className: "svg-loaders-svg".concat(t ? " ".concat(t) : "")
				}, a), n.a.createElement("rect", {
					y: 10,
					width: 15,
					height: 120,
					rx: 6
				}, n.a.createElement("animate", {
					attributeName: "height",
					begin: "0.5s",
					dur: "1s",
					values: "120;110;100;90;80;70;60;50;40;140;120",
					calcMode: "linear",
					repeatCount: "indefinite"
				}), n.a.createElement("animate", {
					attributeName: "y",
					begin: "0.5s",
					dur: "1s",
					values: "10;15;20;25;30;35;40;45;50;0;10",
					calcMode: "linear",
					repeatCount: "indefinite"
				})), n.a.createElement("rect", {
					x: 30,
					y: 10,
					width: 15,
					height: 120,
					rx: 6
				}, n.a.createElement("animate", {
					attributeName: "height",
					begin: "0.25s",
					dur: "1s",
					values: "120;110;100;90;80;70;60;50;40;140;120",
					calcMode: "linear",
					repeatCount: "indefinite"
				}), n.a.createElement("animate", {
					attributeName: "y",
					begin: "0.25s",
					dur: "1s",
					values: "10;15;20;25;30;35;40;45;50;0;10",
					calcMode: "linear",
					repeatCount: "indefinite"
				})), n.a.createElement("rect", {
					x: 60,
					width: 15,
					height: 140,
					rx: 6
				}, n.a.createElement("animate", {
					attributeName: "height",
					begin: "0s",
					dur: "1s",
					values: "120;110;100;90;80;70;60;50;40;140;120",
					calcMode: "linear",
					repeatCount: "indefinite"
				}), n.a.createElement("animate", {
					attributeName: "y",
					begin: "0s",
					dur: "1s",
					values: "10;15;20;25;30;35;40;45;50;0;10",
					calcMode: "linear",
					repeatCount: "indefinite"
				})), n.a.createElement("rect", {
					x: 90,
					y: 10,
					width: 15,
					height: 120,
					rx: 6
				}, n.a.createElement("animate", {
					attributeName: "height",
					begin: "0.25s",
					dur: "1s",
					values: "120;110;100;90;80;70;60;50;40;140;120",
					calcMode: "linear",
					repeatCount: "indefinite"
				}), n.a.createElement("animate", {
					attributeName: "y",
					begin: "0.25s",
					dur: "1s",
					values: "10;15;20;25;30;35;40;45;50;0;10",
					calcMode: "linear",
					repeatCount: "indefinite"
				})), n.a.createElement("rect", {
					x: 120,
					y: 10,
					width: 15,
					height: 120,
					rx: 6
				}, n.a.createElement("animate", {
					attributeName: "height",
					begin: "0.5s",
					dur: "1s",
					values: "120;110;100;90;80;70;60;50;40;140;120",
					calcMode: "linear",
					repeatCount: "indefinite"
				}), n.a.createElement("animate", {
					attributeName: "y",
					begin: "0.5s",
					dur: "1s",
					values: "10;15;20;25;30;35;40;45;50;0;10",
					calcMode: "linear",
					repeatCount: "indefinite"
				})));
			};
			function b() {
				return (b = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var a = arguments[t];
						for (var r in a) Object.prototype.hasOwnProperty.call(a, r) && (e[r] = a[r]);
					}
					return e;
				}).apply(this, arguments);
			}
			function v(e, t) {
				if (null == e) return {};
				var a, r, n = function(e, t) {
					if (null == e) return {};
					var a, r, n = {}, i = Object.keys(e);
					for (r = 0; r < i.length; r++) a = i[r], t.indexOf(a) >= 0 || (n[a] = e[a]);
					return n;
				}(e, t);
				if (Object.getOwnPropertySymbols) {
					var i = Object.getOwnPropertySymbols(e);
					for (r = 0; r < i.length; r++) a = i[r], t.indexOf(a) >= 0 || Object.prototype.propertyIsEnumerable.call(e, a) && (n[a] = e[a]);
				}
				return n;
			}
			y.propTypes = { className: c.a.string }, y.defaultProps = { className: void 0 };
			var g = function(e) {
				var t = e.className, a = v(e, ["className"]);
				return n.a.createElement("svg", b({
					width: 135,
					height: 135,
					fill: "#fff",
					viewBox: "0 0 135 135",
					className: "svg-loaders-svg".concat(t ? " ".concat(t) : "")
				}, a), n.a.createElement("path", { d: "M67.447 58c5.523 0 10-4.477 10-10s-4.477-10-10-10-10 4.477-10 10 4.477 10 10 10zm9.448 9.447c0 5.523 4.477 10 10 10 5.522 0 10-4.477 10-10s-4.478-10-10-10c-5.523 0-10 4.477-10 10zm-9.448 9.448c-5.523 0-10 4.477-10 10 0 5.522 4.477 10 10 10s10-4.478 10-10c0-5.523-4.477-10-10-10zM58 67.447c0-5.523-4.477-10-10-10s-10 4.477-10 10 4.477 10 10 10 10-4.477 10-10z" }, n.a.createElement("animateTransform", {
					attributeName: "transform",
					type: "rotate",
					from: "0 67 67",
					to: "-360 67 67",
					dur: "2.5s",
					repeatCount: "indefinite"
				})), n.a.createElement("path", { d: "M28.19 40.31c6.627 0 12-5.374 12-12 0-6.628-5.373-12-12-12-6.628 0-12 5.372-12 12 0 6.626 5.372 12 12 12zm30.72-19.825c4.686 4.687 12.284 4.687 16.97 0 4.686-4.686 4.686-12.284 0-16.97-4.686-4.687-12.284-4.687-16.97 0-4.687 4.686-4.687 12.284 0 16.97zm35.74 7.705c0 6.627 5.37 12 12 12 6.626 0 12-5.373 12-12 0-6.628-5.374-12-12-12-6.63 0-12 5.372-12 12zm19.822 30.72c-4.686 4.686-4.686 12.284 0 16.97 4.687 4.686 12.285 4.686 16.97 0 4.687-4.686 4.687-12.284 0-16.97-4.685-4.687-12.283-4.687-16.97 0zm-7.704 35.74c-6.627 0-12 5.37-12 12 0 6.626 5.373 12 12 12s12-5.374 12-12c0-6.63-5.373-12-12-12zm-30.72 19.822c-4.686-4.686-12.284-4.686-16.97 0-4.686 4.687-4.686 12.285 0 16.97 4.686 4.687 12.284 4.687 16.97 0 4.687-4.685 4.687-12.283 0-16.97zm-35.74-7.704c0-6.627-5.372-12-12-12-6.626 0-12 5.373-12 12s5.374 12 12 12c6.628 0 12-5.373 12-12zm-19.823-30.72c4.687-4.686 4.687-12.284 0-16.97-4.686-4.686-12.284-4.686-16.97 0-4.687 4.686-4.687 12.284 0 16.97 4.686 4.687 12.284 4.687 16.97 0z" }, n.a.createElement("animateTransform", {
					attributeName: "transform",
					type: "rotate",
					from: "0 67 67",
					to: "360 67 67",
					dur: "8s",
					repeatCount: "indefinite"
				})));
			};
			function h() {
				return (h = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var a = arguments[t];
						for (var r in a) Object.prototype.hasOwnProperty.call(a, r) && (e[r] = a[r]);
					}
					return e;
				}).apply(this, arguments);
			}
			function O(e, t) {
				if (null == e) return {};
				var a, r, n = function(e, t) {
					if (null == e) return {};
					var a, r, n = {}, i = Object.keys(e);
					for (r = 0; r < i.length; r++) a = i[r], t.indexOf(a) >= 0 || (n[a] = e[a]);
					return n;
				}(e, t);
				if (Object.getOwnPropertySymbols) {
					var i = Object.getOwnPropertySymbols(e);
					for (r = 0; r < i.length; r++) a = i[r], t.indexOf(a) >= 0 || Object.prototype.propertyIsEnumerable.call(e, a) && (n[a] = e[a]);
				}
				return n;
			}
			g.propTypes = { className: c.a.string }, g.defaultProps = { className: void 0 };
			var E = function(e) {
				var t = e.className, a = O(e, ["className"]);
				return n.a.createElement("svg", h({
					width: 105,
					height: 105,
					fill: "#fff",
					viewBox: "0 0 105 105",
					className: "svg-loaders-svg".concat(t ? " ".concat(t) : "")
				}, a), n.a.createElement("circle", {
					cx: 12.5,
					cy: 12.5,
					r: 12.5
				}, n.a.createElement("animate", {
					attributeName: "fill-opacity",
					begin: "0s",
					dur: "1s",
					values: "1;.2;1",
					calcMode: "linear",
					repeatCount: "indefinite"
				})), n.a.createElement("circle", {
					cx: 12.5,
					cy: 52.5,
					r: 12.5,
					fillOpacity: .5
				}, n.a.createElement("animate", {
					attributeName: "fill-opacity",
					begin: "100ms",
					dur: "1s",
					values: "1;.2;1",
					calcMode: "linear",
					repeatCount: "indefinite"
				})), n.a.createElement("circle", {
					cx: 52.5,
					cy: 12.5,
					r: 12.5
				}, n.a.createElement("animate", {
					attributeName: "fill-opacity",
					begin: "300ms",
					dur: "1s",
					values: "1;.2;1",
					calcMode: "linear",
					repeatCount: "indefinite"
				})), n.a.createElement("circle", {
					cx: 52.5,
					cy: 52.5,
					r: 12.5
				}, n.a.createElement("animate", {
					attributeName: "fill-opacity",
					begin: "600ms",
					dur: "1s",
					values: "1;.2;1",
					calcMode: "linear",
					repeatCount: "indefinite"
				})), n.a.createElement("circle", {
					cx: 92.5,
					cy: 12.5,
					r: 12.5
				}, n.a.createElement("animate", {
					attributeName: "fill-opacity",
					begin: "800ms",
					dur: "1s",
					values: "1;.2;1",
					calcMode: "linear",
					repeatCount: "indefinite"
				})), n.a.createElement("circle", {
					cx: 92.5,
					cy: 52.5,
					r: 12.5
				}, n.a.createElement("animate", {
					attributeName: "fill-opacity",
					begin: "400ms",
					dur: "1s",
					values: "1;.2;1",
					calcMode: "linear",
					repeatCount: "indefinite"
				})), n.a.createElement("circle", {
					cx: 12.5,
					cy: 92.5,
					r: 12.5
				}, n.a.createElement("animate", {
					attributeName: "fill-opacity",
					begin: "700ms",
					dur: "1s",
					values: "1;.2;1",
					calcMode: "linear",
					repeatCount: "indefinite"
				})), n.a.createElement("circle", {
					cx: 52.5,
					cy: 92.5,
					r: 12.5
				}, n.a.createElement("animate", {
					attributeName: "fill-opacity",
					begin: "500ms",
					dur: "1s",
					values: "1;.2;1",
					calcMode: "linear",
					repeatCount: "indefinite"
				})), n.a.createElement("circle", {
					cx: 92.5,
					cy: 92.5,
					r: 12.5
				}, n.a.createElement("animate", {
					attributeName: "fill-opacity",
					begin: "200ms",
					dur: "1s",
					values: "1;.2;1",
					calcMode: "linear",
					repeatCount: "indefinite"
				})));
			};
			function N() {
				return (N = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var a = arguments[t];
						for (var r in a) Object.prototype.hasOwnProperty.call(a, r) && (e[r] = a[r]);
					}
					return e;
				}).apply(this, arguments);
			}
			function x(e, t) {
				if (null == e) return {};
				var a, r, n = function(e, t) {
					if (null == e) return {};
					var a, r, n = {}, i = Object.keys(e);
					for (r = 0; r < i.length; r++) a = i[r], t.indexOf(a) >= 0 || (n[a] = e[a]);
					return n;
				}(e, t);
				if (Object.getOwnPropertySymbols) {
					var i = Object.getOwnPropertySymbols(e);
					for (r = 0; r < i.length; r++) a = i[r], t.indexOf(a) >= 0 || Object.prototype.propertyIsEnumerable.call(e, a) && (n[a] = e[a]);
				}
				return n;
			}
			E.propTypes = { className: c.a.string }, E.defaultProps = { className: void 0 };
			var j = function(e) {
				var t = e.className, a = x(e, ["className"]);
				return n.a.createElement("svg", N({
					width: 140,
					height: 64,
					fill: "#fff",
					viewBox: "0 0 140 64",
					className: "svg-loaders-svg".concat(t ? " ".concat(t) : "")
				}, a), n.a.createElement("path", {
					d: "M30.262 57.02L7.195 40.723c-5.84-3.976-7.56-12.06-3.842-18.063 3.715-6 11.467-7.65 17.306-3.68l4.52 3.76 2.6-5.274c3.717-6.002 11.47-7.65 17.305-3.68 5.84 3.97 7.56 12.054 3.842 18.062L34.49 56.118c-.897 1.512-2.793 1.915-4.228.9z",
					fillOpacity: .5
				}, n.a.createElement("animate", {
					attributeName: "fill-opacity",
					begin: "0s",
					dur: "1.4s",
					values: "0.5;1;0.5",
					calcMode: "linear",
					repeatCount: "indefinite"
				})), n.a.createElement("path", {
					d: "M105.512 56.12l-14.44-24.272c-3.716-6.008-1.996-14.093 3.843-18.062 5.835-3.97 13.588-2.322 17.306 3.68l2.6 5.274 4.52-3.76c5.84-3.97 13.592-2.32 17.307 3.68 3.718 6.003 1.998 14.088-3.842 18.064L109.74 57.02c-1.434 1.014-3.33.61-4.228-.9z",
					fillOpacity: .5
				}, n.a.createElement("animate", {
					attributeName: "fill-opacity",
					begin: "0.7s",
					dur: "1.4s",
					values: "0.5;1;0.5",
					calcMode: "linear",
					repeatCount: "indefinite"
				})), n.a.createElement("path", { d: "M67.408 57.834l-23.01-24.98c-5.864-6.15-5.864-16.108 0-22.248 5.86-6.14 15.37-6.14 21.234 0L70 16.168l4.368-5.562c5.863-6.14 15.375-6.14 21.235 0 5.863 6.14 5.863 16.098 0 22.247l-23.007 24.98c-1.43 1.556-3.757 1.556-5.188 0z" }));
			};
			function w() {
				return (w = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var a = arguments[t];
						for (var r in a) Object.prototype.hasOwnProperty.call(a, r) && (e[r] = a[r]);
					}
					return e;
				}).apply(this, arguments);
			}
			function C(e, t) {
				if (null == e) return {};
				var a, r, n = function(e, t) {
					if (null == e) return {};
					var a, r, n = {}, i = Object.keys(e);
					for (r = 0; r < i.length; r++) a = i[r], t.indexOf(a) >= 0 || (n[a] = e[a]);
					return n;
				}(e, t);
				if (Object.getOwnPropertySymbols) {
					var i = Object.getOwnPropertySymbols(e);
					for (r = 0; r < i.length; r++) a = i[r], t.indexOf(a) >= 0 || Object.prototype.propertyIsEnumerable.call(e, a) && (n[a] = e[a]);
				}
				return n;
			}
			j.propTypes = { className: c.a.string }, j.defaultProps = { className: void 0 };
			var M = function(e) {
				var t = e.className, a = C(e, ["className"]);
				return n.a.createElement("svg", w({
					width: 38,
					height: 38,
					stroke: "#fff",
					viewBox: "0 0 38 38",
					className: "svg-loaders-svg".concat(t ? " ".concat(t) : "")
				}, a), n.a.createElement("g", {
					transform: "translate(1 1)",
					strokeWidth: 2,
					fill: "none",
					fillRule: "evenodd"
				}, n.a.createElement("circle", {
					strokeOpacity: .5,
					cx: 18,
					cy: 18,
					r: 18
				}), n.a.createElement("path", { d: "M36 18c0-9.94-8.06-18-18-18" }, n.a.createElement("animateTransform", {
					attributeName: "transform",
					type: "rotate",
					from: "0 18 18",
					to: "360 18 18",
					dur: "1s",
					repeatCount: "indefinite"
				}))));
			};
			function P() {
				return (P = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var a = arguments[t];
						for (var r in a) Object.prototype.hasOwnProperty.call(a, r) && (e[r] = a[r]);
					}
					return e;
				}).apply(this, arguments);
			}
			function k(e, t) {
				if (null == e) return {};
				var a, r, n = function(e, t) {
					if (null == e) return {};
					var a, r, n = {}, i = Object.keys(e);
					for (r = 0; r < i.length; r++) a = i[r], t.indexOf(a) >= 0 || (n[a] = e[a]);
					return n;
				}(e, t);
				if (Object.getOwnPropertySymbols) {
					var i = Object.getOwnPropertySymbols(e);
					for (r = 0; r < i.length; r++) a = i[r], t.indexOf(a) >= 0 || Object.prototype.propertyIsEnumerable.call(e, a) && (n[a] = e[a]);
				}
				return n;
			}
			M.propTypes = { className: c.a.string }, M.defaultProps = { className: void 0 };
			var S = function(e) {
				var t = e.className, a = k(e, ["className"]);
				return n.a.createElement("svg", P({
					width: 44,
					height: 44,
					stroke: "#fff",
					viewBox: "0 0 44 44",
					className: "svg-loaders-svg".concat(t ? " ".concat(t) : "")
				}, a), n.a.createElement("g", {
					fill: "none",
					fillRule: "evenodd",
					strokeWidth: 2
				}, n.a.createElement("circle", {
					cx: 22,
					cy: 22,
					r: 1
				}, n.a.createElement("animate", {
					attributeName: "r",
					begin: "0s",
					dur: "1.8s",
					values: "1; 20",
					calcMode: "spline",
					keyTimes: "0; 1",
					keySplines: "0.165, 0.84, 0.44, 1",
					repeatCount: "indefinite"
				}), n.a.createElement("animate", {
					attributeName: "stroke-opacity",
					begin: "0s",
					dur: "1.8s",
					values: "1; 0",
					calcMode: "spline",
					keyTimes: "0; 1",
					keySplines: "0.3, 0.61, 0.355, 1",
					repeatCount: "indefinite"
				})), n.a.createElement("circle", {
					cx: 22,
					cy: 22,
					r: 1
				}, n.a.createElement("animate", {
					attributeName: "r",
					begin: "-0.9s",
					dur: "1.8s",
					values: "1; 20",
					calcMode: "spline",
					keyTimes: "0; 1",
					keySplines: "0.165, 0.84, 0.44, 1",
					repeatCount: "indefinite"
				}), n.a.createElement("animate", {
					attributeName: "stroke-opacity",
					begin: "-0.9s",
					dur: "1.8s",
					values: "1; 0",
					calcMode: "spline",
					keyTimes: "0; 1",
					keySplines: "0.3, 0.61, 0.355, 1",
					repeatCount: "indefinite"
				}))));
			};
			function T() {
				return (T = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var a = arguments[t];
						for (var r in a) Object.prototype.hasOwnProperty.call(a, r) && (e[r] = a[r]);
					}
					return e;
				}).apply(this, arguments);
			}
			function _(e, t) {
				if (null == e) return {};
				var a, r, n = function(e, t) {
					if (null == e) return {};
					var a, r, n = {}, i = Object.keys(e);
					for (r = 0; r < i.length; r++) a = i[r], t.indexOf(a) >= 0 || (n[a] = e[a]);
					return n;
				}(e, t);
				if (Object.getOwnPropertySymbols) {
					var i = Object.getOwnPropertySymbols(e);
					for (r = 0; r < i.length; r++) a = i[r], t.indexOf(a) >= 0 || Object.prototype.propertyIsEnumerable.call(e, a) && (n[a] = e[a]);
				}
				return n;
			}
			S.propTypes = { className: c.a.string }, S.defaultProps = { className: void 0 };
			var I = function(e) {
				var t = e.className, a = _(e, ["className"]);
				return n.a.createElement("svg", T({
					width: 45,
					height: 45,
					stroke: "#fff",
					viewBox: "0 0 45 45",
					className: "svg-loaders-svg".concat(t ? " ".concat(t) : "")
				}, a), n.a.createElement("g", {
					fill: "none",
					fillRule: "evenodd",
					transform: "translate(1 1)",
					strokeWidth: 2
				}, n.a.createElement("circle", {
					cx: 22,
					cy: 22,
					r: 6,
					strokeOpacity: 0
				}, n.a.createElement("animate", {
					attributeName: "r",
					begin: "1.5s",
					dur: "3s",
					values: "6;22",
					calcMode: "linear",
					repeatCount: "indefinite"
				}), n.a.createElement("animate", {
					attributeName: "stroke-opacity",
					begin: "1.5s",
					dur: "3s",
					values: "1;0",
					calcMode: "linear",
					repeatCount: "indefinite"
				}), n.a.createElement("animate", {
					attributeName: "stroke-width",
					begin: "1.5s",
					dur: "3s",
					values: "2;0",
					calcMode: "linear",
					repeatCount: "indefinite"
				})), n.a.createElement("circle", {
					cx: 22,
					cy: 22,
					r: 6,
					strokeOpacity: 0
				}, n.a.createElement("animate", {
					attributeName: "r",
					begin: "3s",
					dur: "3s",
					values: "6;22",
					calcMode: "linear",
					repeatCount: "indefinite"
				}), n.a.createElement("animate", {
					attributeName: "stroke-opacity",
					begin: "3s",
					dur: "3s",
					values: "1;0",
					calcMode: "linear",
					repeatCount: "indefinite"
				}), n.a.createElement("animate", {
					attributeName: "stroke-width",
					begin: "3s",
					dur: "3s",
					values: "2;0",
					calcMode: "linear",
					repeatCount: "indefinite"
				})), n.a.createElement("circle", {
					cx: 22,
					cy: 22,
					r: 8
				}, n.a.createElement("animate", {
					attributeName: "r",
					begin: "0s",
					dur: "1.5s",
					values: "6;1;2;3;4;5;6",
					calcMode: "linear",
					repeatCount: "indefinite"
				}))));
			};
			function z() {
				return (z = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var a = arguments[t];
						for (var r in a) Object.prototype.hasOwnProperty.call(a, r) && (e[r] = a[r]);
					}
					return e;
				}).apply(this, arguments);
			}
			function B(e, t) {
				if (null == e) return {};
				var a, r, n = function(e, t) {
					if (null == e) return {};
					var a, r, n = {}, i = Object.keys(e);
					for (r = 0; r < i.length; r++) a = i[r], t.indexOf(a) >= 0 || (n[a] = e[a]);
					return n;
				}(e, t);
				if (Object.getOwnPropertySymbols) {
					var i = Object.getOwnPropertySymbols(e);
					for (r = 0; r < i.length; r++) a = i[r], t.indexOf(a) >= 0 || Object.prototype.propertyIsEnumerable.call(e, a) && (n[a] = e[a]);
				}
				return n;
			}
			I.propTypes = { className: c.a.string }, I.defaultProps = { className: void 0 };
			var R = function(e) {
				var t = e.className, a = B(e, ["className"]);
				return n.a.createElement("svg", z({
					width: 58,
					height: 58,
					viewBox: "0 0 58 58",
					className: "svg-loaders-svg".concat(t ? " ".concat(t) : "")
				}, a), n.a.createElement("g", {
					transform: "translate(2 1)",
					stroke: "#FFF",
					strokeWidth: 1.5,
					fill: "#fff",
					fillRule: "evenodd"
				}, n.a.createElement("circle", {
					cx: 42.601,
					cy: 11.462,
					r: 5
				}, n.a.createElement("animate", {
					attributeName: "fill-opacity",
					begin: "0s",
					dur: "1.3s",
					values: "1;0;0;0;0;0;0;0",
					calcMode: "linear",
					repeatCount: "indefinite"
				})), n.a.createElement("circle", {
					cx: 49.063,
					cy: 27.063,
					r: 5,
					fillOpacity: 0
				}, n.a.createElement("animate", {
					attributeName: "fill-opacity",
					begin: "0s",
					dur: "1.3s",
					values: "0;1;0;0;0;0;0;0",
					calcMode: "linear",
					repeatCount: "indefinite"
				})), n.a.createElement("circle", {
					cx: 42.601,
					cy: 42.663,
					r: 5,
					fillOpacity: 0
				}, n.a.createElement("animate", {
					attributeName: "fill-opacity",
					begin: "0s",
					dur: "1.3s",
					values: "0;0;1;0;0;0;0;0",
					calcMode: "linear",
					repeatCount: "indefinite"
				})), n.a.createElement("circle", {
					cx: 27,
					cy: 49.125,
					r: 5,
					fillOpacity: 0
				}, n.a.createElement("animate", {
					attributeName: "fill-opacity",
					begin: "0s",
					dur: "1.3s",
					values: "0;0;0;1;0;0;0;0",
					calcMode: "linear",
					repeatCount: "indefinite"
				})), n.a.createElement("circle", {
					cx: 11.399,
					cy: 42.663,
					r: 5,
					fillOpacity: 0
				}, n.a.createElement("animate", {
					attributeName: "fill-opacity",
					begin: "0s",
					dur: "1.3s",
					values: "0;0;0;0;1;0;0;0",
					calcMode: "linear",
					repeatCount: "indefinite"
				})), n.a.createElement("circle", {
					cx: 4.938,
					cy: 27.063,
					r: 5,
					fillOpacity: 0
				}, n.a.createElement("animate", {
					attributeName: "fill-opacity",
					begin: "0s",
					dur: "1.3s",
					values: "0;0;0;0;0;1;0;0",
					calcMode: "linear",
					repeatCount: "indefinite"
				})), n.a.createElement("circle", {
					cx: 11.399,
					cy: 11.462,
					r: 5,
					fillOpacity: 0
				}, n.a.createElement("animate", {
					attributeName: "fill-opacity",
					begin: "0s",
					dur: "1.3s",
					values: "0;0;0;0;0;0;1;0",
					calcMode: "linear",
					repeatCount: "indefinite"
				})), n.a.createElement("circle", {
					cx: 27,
					cy: 5,
					r: 5,
					fillOpacity: 0
				}, n.a.createElement("animate", {
					attributeName: "fill-opacity",
					begin: "0s",
					dur: "1.3s",
					values: "0;0;0;0;0;0;0;1",
					calcMode: "linear",
					repeatCount: "indefinite"
				}))));
			};
			function F() {
				return (F = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var a = arguments[t];
						for (var r in a) Object.prototype.hasOwnProperty.call(a, r) && (e[r] = a[r]);
					}
					return e;
				}).apply(this, arguments);
			}
			function W(e, t) {
				if (null == e) return {};
				var a, r, n = function(e, t) {
					if (null == e) return {};
					var a, r, n = {}, i = Object.keys(e);
					for (r = 0; r < i.length; r++) a = i[r], t.indexOf(a) >= 0 || (n[a] = e[a]);
					return n;
				}(e, t);
				if (Object.getOwnPropertySymbols) {
					var i = Object.getOwnPropertySymbols(e);
					for (r = 0; r < i.length; r++) a = i[r], t.indexOf(a) >= 0 || Object.prototype.propertyIsEnumerable.call(e, a) && (n[a] = e[a]);
				}
				return n;
			}
			R.propTypes = { className: c.a.string }, R.defaultProps = { className: void 0 };
			var L = function(e) {
				var t = e.className, a = W(e, ["className"]);
				return n.a.createElement("svg", F({
					width: 38,
					height: 38,
					viewBox: "0 0 38 38",
					className: "svg-loaders-svg".concat(t ? " ".concat(t) : "")
				}, a), n.a.createElement("defs", null, n.a.createElement("linearGradient", {
					x1: "8.042%",
					y1: "0%",
					x2: "65.682%",
					y2: "23.865%",
					id: "prefix__a"
				}, n.a.createElement("stop", {
					stopColor: "#fff",
					stopOpacity: 0,
					offset: "0%"
				}), n.a.createElement("stop", {
					stopColor: "#fff",
					stopOpacity: .631,
					offset: "63.146%"
				}), n.a.createElement("stop", {
					stopColor: "#fff",
					offset: "100%"
				}))), n.a.createElement("g", {
					transform: "translate(1 1)",
					fill: "none",
					fillRule: "evenodd"
				}, n.a.createElement("path", {
					d: "M36 18c0-9.94-8.06-18-18-18",
					stroke: "url(#prefix__a)",
					strokeWidth: 2
				}, n.a.createElement("animateTransform", {
					attributeName: "transform",
					type: "rotate",
					from: "0 18 18",
					to: "360 18 18",
					dur: "0.9s",
					repeatCount: "indefinite"
				})), n.a.createElement("circle", {
					fill: "#fff",
					cx: 36,
					cy: 18,
					r: 1
				}, n.a.createElement("animateTransform", {
					attributeName: "transform",
					type: "rotate",
					from: "0 18 18",
					to: "360 18 18",
					dur: "0.9s",
					repeatCount: "indefinite"
				}))));
			};
			function D() {
				return (D = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var a = arguments[t];
						for (var r in a) Object.prototype.hasOwnProperty.call(a, r) && (e[r] = a[r]);
					}
					return e;
				}).apply(this, arguments);
			}
			function q(e, t) {
				if (null == e) return {};
				var a, r, n = function(e, t) {
					if (null == e) return {};
					var a, r, n = {}, i = Object.keys(e);
					for (r = 0; r < i.length; r++) a = i[r], t.indexOf(a) >= 0 || (n[a] = e[a]);
					return n;
				}(e, t);
				if (Object.getOwnPropertySymbols) {
					var i = Object.getOwnPropertySymbols(e);
					for (r = 0; r < i.length; r++) a = i[r], t.indexOf(a) >= 0 || Object.prototype.propertyIsEnumerable.call(e, a) && (n[a] = e[a]);
				}
				return n;
			}
			L.propTypes = { className: c.a.string }, L.defaultProps = { className: void 0 };
			var A = function(e) {
				var t = e.className, a = q(e, ["className"]);
				return n.a.createElement("svg", D({
					width: 120,
					height: 30,
					fill: "#fff",
					viewBox: "0 0 120 30",
					className: "svg-loaders-svg".concat(t ? " ".concat(t) : "")
				}, a), n.a.createElement("circle", {
					cx: 15,
					cy: 15,
					r: 15
				}, n.a.createElement("animate", {
					attributeName: "r",
					from: 15,
					to: 15,
					begin: "0s",
					dur: "0.8s",
					values: "15;9;15",
					calcMode: "linear",
					repeatCount: "indefinite"
				}), n.a.createElement("animate", {
					attributeName: "fill-opacity",
					from: 1,
					to: 1,
					begin: "0s",
					dur: "0.8s",
					values: "1;.5;1",
					calcMode: "linear",
					repeatCount: "indefinite"
				})), n.a.createElement("circle", {
					cx: 60,
					cy: 15,
					r: 9,
					fillOpacity: .3
				}, n.a.createElement("animate", {
					attributeName: "r",
					from: 9,
					to: 9,
					begin: "0s",
					dur: "0.8s",
					values: "9;15;9",
					calcMode: "linear",
					repeatCount: "indefinite"
				}), n.a.createElement("animate", {
					attributeName: "fill-opacity",
					from: .5,
					to: .5,
					begin: "0s",
					dur: "0.8s",
					values: ".5;1;.5",
					calcMode: "linear",
					repeatCount: "indefinite"
				})), n.a.createElement("circle", {
					cx: 105,
					cy: 15,
					r: 15
				}, n.a.createElement("animate", {
					attributeName: "r",
					from: 15,
					to: 15,
					begin: "0s",
					dur: "0.8s",
					values: "15;9;15",
					calcMode: "linear",
					repeatCount: "indefinite"
				}), n.a.createElement("animate", {
					attributeName: "fill-opacity",
					from: 1,
					to: 1,
					begin: "0s",
					dur: "0.8s",
					values: "1;.5;1",
					calcMode: "linear",
					repeatCount: "indefinite"
				})));
			};
			A.propTypes = { className: c.a.string }, A.defaultProps = { className: void 0 }, a.d(t, "Audio", function() {
				return s;
			}), a.d(t, "BallTriangle", function() {
				return m;
			}), a.d(t, "Bars", function() {
				return y;
			}), a.d(t, "Circles", function() {
				return g;
			}), a.d(t, "Grid", function() {
				return E;
			}), a.d(t, "Hearts", function() {
				return j;
			}), a.d(t, "Oval", function() {
				return M;
			}), a.d(t, "Puff", function() {
				return S;
			}), a.d(t, "Rings", function() {
				return I;
			}), a.d(t, "SpinningCircles", function() {
				return R;
			}), a.d(t, "TailSpin", function() {
				return L;
			}), a.d(t, "ThreeDots", function() {
				return A;
			});
		}
	]);
}));
//#endregion
//#region node_modules/lodash/identity.js
var require_identity = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	/**
	* This method returns the first argument it receives.
	*
	* @static
	* @since 0.1.0
	* @memberOf _
	* @category Util
	* @param {*} value Any value.
	* @returns {*} Returns `value`.
	* @example
	*
	* var object = { 'a': 1 };
	*
	* console.log(_.identity(object) === object);
	* // => true
	*/
	function identity(value) {
		return value;
	}
	module.exports = identity;
}));
//#endregion
//#region node_modules/lodash/_freeGlobal.js
var require__freeGlobal = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = typeof global == "object" && global && global.Object === Object && global;
}));
//#endregion
//#region node_modules/lodash/_root.js
var require__root = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var freeGlobal = require__freeGlobal();
	/** Detect free variable `self`. */
	var freeSelf = typeof self == "object" && self && self.Object === Object && self;
	module.exports = freeGlobal || freeSelf || Function("return this")();
}));
//#endregion
//#region node_modules/lodash/_Symbol.js
var require__Symbol = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = require__root().Symbol;
}));
//#endregion
//#region node_modules/lodash/_getRawTag.js
var require__getRawTag = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var Symbol = require__Symbol();
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	/**
	* Used to resolve the
	* [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	* of values.
	*/
	var nativeObjectToString = objectProto.toString;
	/** Built-in value references. */
	var symToStringTag = Symbol ? Symbol.toStringTag : void 0;
	/**
	* A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
	*
	* @private
	* @param {*} value The value to query.
	* @returns {string} Returns the raw `toStringTag`.
	*/
	function getRawTag(value) {
		var isOwn = hasOwnProperty.call(value, symToStringTag), tag = value[symToStringTag];
		try {
			value[symToStringTag] = void 0;
			var unmasked = true;
		} catch (e) {}
		var result = nativeObjectToString.call(value);
		if (unmasked) {
			if (isOwn) value[symToStringTag] = tag;
			else delete value[symToStringTag];
		}
		return result;
	}
	module.exports = getRawTag;
}));
//#endregion
//#region node_modules/lodash/_objectToString.js
var require__objectToString = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	/**
	* Used to resolve the
	* [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	* of values.
	*/
	var nativeObjectToString = Object.prototype.toString;
	/**
	* Converts `value` to a string using `Object.prototype.toString`.
	*
	* @private
	* @param {*} value The value to convert.
	* @returns {string} Returns the converted string.
	*/
	function objectToString(value) {
		return nativeObjectToString.call(value);
	}
	module.exports = objectToString;
}));
//#endregion
//#region node_modules/lodash/_baseGetTag.js
var require__baseGetTag = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var Symbol = require__Symbol();
	var getRawTag = require__getRawTag();
	var objectToString = require__objectToString();
	/** `Object#toString` result references. */
	var nullTag = "[object Null]";
	var undefinedTag = "[object Undefined]";
	/** Built-in value references. */
	var symToStringTag = Symbol ? Symbol.toStringTag : void 0;
	/**
	* The base implementation of `getTag` without fallbacks for buggy environments.
	*
	* @private
	* @param {*} value The value to query.
	* @returns {string} Returns the `toStringTag`.
	*/
	function baseGetTag(value) {
		if (value == null) return value === void 0 ? undefinedTag : nullTag;
		return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
	}
	module.exports = baseGetTag;
}));
//#endregion
//#region node_modules/lodash/isObject.js
var require_isObject = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	/**
	* Checks if `value` is the
	* [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
	* of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	*
	* @static
	* @memberOf _
	* @since 0.1.0
	* @category Lang
	* @param {*} value The value to check.
	* @returns {boolean} Returns `true` if `value` is an object, else `false`.
	* @example
	*
	* _.isObject({});
	* // => true
	*
	* _.isObject([1, 2, 3]);
	* // => true
	*
	* _.isObject(_.noop);
	* // => true
	*
	* _.isObject(null);
	* // => false
	*/
	function isObject(value) {
		var type = typeof value;
		return value != null && (type == "object" || type == "function");
	}
	module.exports = isObject;
}));
//#endregion
//#region node_modules/lodash/isFunction.js
var require_isFunction = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var baseGetTag = require__baseGetTag();
	var isObject = require_isObject();
	/** `Object#toString` result references. */
	var asyncTag = "[object AsyncFunction]";
	var funcTag = "[object Function]";
	var genTag = "[object GeneratorFunction]";
	var proxyTag = "[object Proxy]";
	/**
	* Checks if `value` is classified as a `Function` object.
	*
	* @static
	* @memberOf _
	* @since 0.1.0
	* @category Lang
	* @param {*} value The value to check.
	* @returns {boolean} Returns `true` if `value` is a function, else `false`.
	* @example
	*
	* _.isFunction(_);
	* // => true
	*
	* _.isFunction(/abc/);
	* // => false
	*/
	function isFunction(value) {
		if (!isObject(value)) return false;
		var tag = baseGetTag(value);
		return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
	}
	module.exports = isFunction;
}));
//#endregion
//#region node_modules/lodash/_coreJsData.js
var require__coreJsData = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = require__root()["__core-js_shared__"];
}));
//#endregion
//#region node_modules/lodash/_isMasked.js
var require__isMasked = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var coreJsData = require__coreJsData();
	/** Used to detect methods masquerading as native. */
	var maskSrcKey = function() {
		var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || "");
		return uid ? "Symbol(src)_1." + uid : "";
	}();
	/**
	* Checks if `func` has its source masked.
	*
	* @private
	* @param {Function} func The function to check.
	* @returns {boolean} Returns `true` if `func` is masked, else `false`.
	*/
	function isMasked(func) {
		return !!maskSrcKey && maskSrcKey in func;
	}
	module.exports = isMasked;
}));
//#endregion
//#region node_modules/lodash/_toSource.js
var require__toSource = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	/** Used to resolve the decompiled source of functions. */
	var funcToString = Function.prototype.toString;
	/**
	* Converts `func` to its source code.
	*
	* @private
	* @param {Function} func The function to convert.
	* @returns {string} Returns the source code.
	*/
	function toSource(func) {
		if (func != null) {
			try {
				return funcToString.call(func);
			} catch (e) {}
			try {
				return func + "";
			} catch (e) {}
		}
		return "";
	}
	module.exports = toSource;
}));
//#endregion
//#region node_modules/lodash/_baseIsNative.js
var require__baseIsNative = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var isFunction = require_isFunction();
	var isMasked = require__isMasked();
	var isObject = require_isObject();
	var toSource = require__toSource();
	/**
	* Used to match `RegExp`
	* [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
	*/
	var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
	/** Used to detect host constructors (Safari). */
	var reIsHostCtor = /^\[object .+?Constructor\]$/;
	/** Used for built-in method references. */
	var funcProto = Function.prototype;
	var objectProto = Object.prototype;
	/** Used to resolve the decompiled source of functions. */
	var funcToString = funcProto.toString;
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	/** Used to detect if a method is native. */
	var reIsNative = RegExp("^" + funcToString.call(hasOwnProperty).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
	/**
	* The base implementation of `_.isNative` without bad shim checks.
	*
	* @private
	* @param {*} value The value to check.
	* @returns {boolean} Returns `true` if `value` is a native function,
	*  else `false`.
	*/
	function baseIsNative(value) {
		if (!isObject(value) || isMasked(value)) return false;
		return (isFunction(value) ? reIsNative : reIsHostCtor).test(toSource(value));
	}
	module.exports = baseIsNative;
}));
//#endregion
//#region node_modules/lodash/_getValue.js
var require__getValue = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	/**
	* Gets the value at `key` of `object`.
	*
	* @private
	* @param {Object} [object] The object to query.
	* @param {string} key The key of the property to get.
	* @returns {*} Returns the property value.
	*/
	function getValue(object, key) {
		return object == null ? void 0 : object[key];
	}
	module.exports = getValue;
}));
//#endregion
//#region node_modules/lodash/_getNative.js
var require__getNative = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var baseIsNative = require__baseIsNative();
	var getValue = require__getValue();
	/**
	* Gets the native function at `key` of `object`.
	*
	* @private
	* @param {Object} object The object to query.
	* @param {string} key The key of the method to get.
	* @returns {*} Returns the function if it's native, else `undefined`.
	*/
	function getNative(object, key) {
		var value = getValue(object, key);
		return baseIsNative(value) ? value : void 0;
	}
	module.exports = getNative;
}));
//#endregion
//#region node_modules/lodash/_WeakMap.js
var require__WeakMap = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = require__getNative()(require__root(), "WeakMap");
}));
//#endregion
//#region node_modules/lodash/_metaMap.js
var require__metaMap = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var WeakMap = require__WeakMap();
	module.exports = WeakMap && new WeakMap();
}));
//#endregion
//#region node_modules/lodash/_baseSetData.js
var require__baseSetData = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var identity = require_identity();
	var metaMap = require__metaMap();
	module.exports = !metaMap ? identity : function(func, data) {
		metaMap.set(func, data);
		return func;
	};
}));
//#endregion
//#region node_modules/lodash/_baseCreate.js
var require__baseCreate = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var isObject = require_isObject();
	/** Built-in value references. */
	var objectCreate = Object.create;
	module.exports = function() {
		function object() {}
		return function(proto) {
			if (!isObject(proto)) return {};
			if (objectCreate) return objectCreate(proto);
			object.prototype = proto;
			var result = new object();
			object.prototype = void 0;
			return result;
		};
	}();
}));
//#endregion
//#region node_modules/lodash/_createCtor.js
var require__createCtor = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var baseCreate = require__baseCreate();
	var isObject = require_isObject();
	/**
	* Creates a function that produces an instance of `Ctor` regardless of
	* whether it was invoked as part of a `new` expression or by `call` or `apply`.
	*
	* @private
	* @param {Function} Ctor The constructor to wrap.
	* @returns {Function} Returns the new wrapped function.
	*/
	function createCtor(Ctor) {
		return function() {
			var args = arguments;
			switch (args.length) {
				case 0: return new Ctor();
				case 1: return new Ctor(args[0]);
				case 2: return new Ctor(args[0], args[1]);
				case 3: return new Ctor(args[0], args[1], args[2]);
				case 4: return new Ctor(args[0], args[1], args[2], args[3]);
				case 5: return new Ctor(args[0], args[1], args[2], args[3], args[4]);
				case 6: return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5]);
				case 7: return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5], args[6]);
			}
			var thisBinding = baseCreate(Ctor.prototype), result = Ctor.apply(thisBinding, args);
			return isObject(result) ? result : thisBinding;
		};
	}
	module.exports = createCtor;
}));
//#endregion
//#region node_modules/lodash/_createBind.js
var require__createBind = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var createCtor = require__createCtor();
	var root = require__root();
	/** Used to compose bitmasks for function metadata. */
	var WRAP_BIND_FLAG = 1;
	/**
	* Creates a function that wraps `func` to invoke it with the optional `this`
	* binding of `thisArg`.
	*
	* @private
	* @param {Function} func The function to wrap.
	* @param {number} bitmask The bitmask flags. See `createWrap` for more details.
	* @param {*} [thisArg] The `this` binding of `func`.
	* @returns {Function} Returns the new wrapped function.
	*/
	function createBind(func, bitmask, thisArg) {
		var isBind = bitmask & WRAP_BIND_FLAG, Ctor = createCtor(func);
		function wrapper() {
			return (this && this !== root && this instanceof wrapper ? Ctor : func).apply(isBind ? thisArg : this, arguments);
		}
		return wrapper;
	}
	module.exports = createBind;
}));
//#endregion
//#region node_modules/lodash/_apply.js
var require__apply = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	/**
	* A faster alternative to `Function#apply`, this function invokes `func`
	* with the `this` binding of `thisArg` and the arguments of `args`.
	*
	* @private
	* @param {Function} func The function to invoke.
	* @param {*} thisArg The `this` binding of `func`.
	* @param {Array} args The arguments to invoke `func` with.
	* @returns {*} Returns the result of `func`.
	*/
	function apply(func, thisArg, args) {
		switch (args.length) {
			case 0: return func.call(thisArg);
			case 1: return func.call(thisArg, args[0]);
			case 2: return func.call(thisArg, args[0], args[1]);
			case 3: return func.call(thisArg, args[0], args[1], args[2]);
		}
		return func.apply(thisArg, args);
	}
	module.exports = apply;
}));
//#endregion
//#region node_modules/lodash/_composeArgs.js
var require__composeArgs = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var nativeMax = Math.max;
	/**
	* Creates an array that is the composition of partially applied arguments,
	* placeholders, and provided arguments into a single array of arguments.
	*
	* @private
	* @param {Array} args The provided arguments.
	* @param {Array} partials The arguments to prepend to those provided.
	* @param {Array} holders The `partials` placeholder indexes.
	* @params {boolean} [isCurried] Specify composing for a curried function.
	* @returns {Array} Returns the new array of composed arguments.
	*/
	function composeArgs(args, partials, holders, isCurried) {
		var argsIndex = -1, argsLength = args.length, holdersLength = holders.length, leftIndex = -1, leftLength = partials.length, rangeLength = nativeMax(argsLength - holdersLength, 0), result = Array(leftLength + rangeLength), isUncurried = !isCurried;
		while (++leftIndex < leftLength) result[leftIndex] = partials[leftIndex];
		while (++argsIndex < holdersLength) if (isUncurried || argsIndex < argsLength) result[holders[argsIndex]] = args[argsIndex];
		while (rangeLength--) result[leftIndex++] = args[argsIndex++];
		return result;
	}
	module.exports = composeArgs;
}));
//#endregion
//#region node_modules/lodash/_composeArgsRight.js
var require__composeArgsRight = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var nativeMax = Math.max;
	/**
	* This function is like `composeArgs` except that the arguments composition
	* is tailored for `_.partialRight`.
	*
	* @private
	* @param {Array} args The provided arguments.
	* @param {Array} partials The arguments to append to those provided.
	* @param {Array} holders The `partials` placeholder indexes.
	* @params {boolean} [isCurried] Specify composing for a curried function.
	* @returns {Array} Returns the new array of composed arguments.
	*/
	function composeArgsRight(args, partials, holders, isCurried) {
		var argsIndex = -1, argsLength = args.length, holdersIndex = -1, holdersLength = holders.length, rightIndex = -1, rightLength = partials.length, rangeLength = nativeMax(argsLength - holdersLength, 0), result = Array(rangeLength + rightLength), isUncurried = !isCurried;
		while (++argsIndex < rangeLength) result[argsIndex] = args[argsIndex];
		var offset = argsIndex;
		while (++rightIndex < rightLength) result[offset + rightIndex] = partials[rightIndex];
		while (++holdersIndex < holdersLength) if (isUncurried || argsIndex < argsLength) result[offset + holders[holdersIndex]] = args[argsIndex++];
		return result;
	}
	module.exports = composeArgsRight;
}));
//#endregion
//#region node_modules/lodash/_countHolders.js
var require__countHolders = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	/**
	* Gets the number of `placeholder` occurrences in `array`.
	*
	* @private
	* @param {Array} array The array to inspect.
	* @param {*} placeholder The placeholder to search for.
	* @returns {number} Returns the placeholder count.
	*/
	function countHolders(array, placeholder) {
		var length = array.length, result = 0;
		while (length--) if (array[length] === placeholder) ++result;
		return result;
	}
	module.exports = countHolders;
}));
//#endregion
//#region node_modules/lodash/_baseLodash.js
var require__baseLodash = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	/**
	* The function whose prototype chain sequence wrappers inherit from.
	*
	* @private
	*/
	function baseLodash() {}
	module.exports = baseLodash;
}));
//#endregion
//#region node_modules/lodash/_LazyWrapper.js
var require__LazyWrapper = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var baseCreate = require__baseCreate();
	var baseLodash = require__baseLodash();
	/** Used as references for the maximum length and index of an array. */
	var MAX_ARRAY_LENGTH = 4294967295;
	/**
	* Creates a lazy wrapper object which wraps `value` to enable lazy evaluation.
	*
	* @private
	* @constructor
	* @param {*} value The value to wrap.
	*/
	function LazyWrapper(value) {
		this.__wrapped__ = value;
		this.__actions__ = [];
		this.__dir__ = 1;
		this.__filtered__ = false;
		this.__iteratees__ = [];
		this.__takeCount__ = MAX_ARRAY_LENGTH;
		this.__views__ = [];
	}
	LazyWrapper.prototype = baseCreate(baseLodash.prototype);
	LazyWrapper.prototype.constructor = LazyWrapper;
	module.exports = LazyWrapper;
}));
//#endregion
//#region node_modules/lodash/noop.js
var require_noop = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	/**
	* This method returns `undefined`.
	*
	* @static
	* @memberOf _
	* @since 2.3.0
	* @category Util
	* @example
	*
	* _.times(2, _.noop);
	* // => [undefined, undefined]
	*/
	function noop() {}
	module.exports = noop;
}));
//#endregion
//#region node_modules/lodash/_getData.js
var require__getData = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var metaMap = require__metaMap();
	var noop = require_noop();
	module.exports = !metaMap ? noop : function(func) {
		return metaMap.get(func);
	};
}));
//#endregion
//#region node_modules/lodash/_realNames.js
var require__realNames = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = {};
}));
//#endregion
//#region node_modules/lodash/_getFuncName.js
var require__getFuncName = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var realNames = require__realNames();
	/** Used to check objects for own properties. */
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	/**
	* Gets the name of `func`.
	*
	* @private
	* @param {Function} func The function to query.
	* @returns {string} Returns the function name.
	*/
	function getFuncName(func) {
		var result = func.name + "", array = realNames[result], length = hasOwnProperty.call(realNames, result) ? array.length : 0;
		while (length--) {
			var data = array[length], otherFunc = data.func;
			if (otherFunc == null || otherFunc == func) return data.name;
		}
		return result;
	}
	module.exports = getFuncName;
}));
//#endregion
//#region node_modules/lodash/_LodashWrapper.js
var require__LodashWrapper = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var baseCreate = require__baseCreate();
	var baseLodash = require__baseLodash();
	/**
	* The base constructor for creating `lodash` wrapper objects.
	*
	* @private
	* @param {*} value The value to wrap.
	* @param {boolean} [chainAll] Enable explicit method chain sequences.
	*/
	function LodashWrapper(value, chainAll) {
		this.__wrapped__ = value;
		this.__actions__ = [];
		this.__chain__ = !!chainAll;
		this.__index__ = 0;
		this.__values__ = void 0;
	}
	LodashWrapper.prototype = baseCreate(baseLodash.prototype);
	LodashWrapper.prototype.constructor = LodashWrapper;
	module.exports = LodashWrapper;
}));
//#endregion
//#region node_modules/lodash/isArray.js
var require_isArray = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = Array.isArray;
}));
//#endregion
//#region node_modules/lodash/isObjectLike.js
var require_isObjectLike = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	/**
	* Checks if `value` is object-like. A value is object-like if it's not `null`
	* and has a `typeof` result of "object".
	*
	* @static
	* @memberOf _
	* @since 4.0.0
	* @category Lang
	* @param {*} value The value to check.
	* @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	* @example
	*
	* _.isObjectLike({});
	* // => true
	*
	* _.isObjectLike([1, 2, 3]);
	* // => true
	*
	* _.isObjectLike(_.noop);
	* // => false
	*
	* _.isObjectLike(null);
	* // => false
	*/
	function isObjectLike(value) {
		return value != null && typeof value == "object";
	}
	module.exports = isObjectLike;
}));
//#endregion
//#region node_modules/lodash/_copyArray.js
var require__copyArray = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	/**
	* Copies the values of `source` to `array`.
	*
	* @private
	* @param {Array} source The array to copy values from.
	* @param {Array} [array=[]] The array to copy values to.
	* @returns {Array} Returns `array`.
	*/
	function copyArray(source, array) {
		var index = -1, length = source.length;
		array || (array = Array(length));
		while (++index < length) array[index] = source[index];
		return array;
	}
	module.exports = copyArray;
}));
//#endregion
//#region node_modules/lodash/_wrapperClone.js
var require__wrapperClone = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var LazyWrapper = require__LazyWrapper();
	var LodashWrapper = require__LodashWrapper();
	var copyArray = require__copyArray();
	/**
	* Creates a clone of `wrapper`.
	*
	* @private
	* @param {Object} wrapper The wrapper to clone.
	* @returns {Object} Returns the cloned wrapper.
	*/
	function wrapperClone(wrapper) {
		if (wrapper instanceof LazyWrapper) return wrapper.clone();
		var result = new LodashWrapper(wrapper.__wrapped__, wrapper.__chain__);
		result.__actions__ = copyArray(wrapper.__actions__);
		result.__index__ = wrapper.__index__;
		result.__values__ = wrapper.__values__;
		return result;
	}
	module.exports = wrapperClone;
}));
//#endregion
//#region node_modules/lodash/wrapperLodash.js
var require_wrapperLodash = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var LazyWrapper = require__LazyWrapper();
	var LodashWrapper = require__LodashWrapper();
	var baseLodash = require__baseLodash();
	var isArray = require_isArray();
	var isObjectLike = require_isObjectLike();
	var wrapperClone = require__wrapperClone();
	/** Used to check objects for own properties. */
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	/**
	* Creates a `lodash` object which wraps `value` to enable implicit method
	* chain sequences. Methods that operate on and return arrays, collections,
	* and functions can be chained together. Methods that retrieve a single value
	* or may return a primitive value will automatically end the chain sequence
	* and return the unwrapped value. Otherwise, the value must be unwrapped
	* with `_#value`.
	*
	* Explicit chain sequences, which must be unwrapped with `_#value`, may be
	* enabled using `_.chain`.
	*
	* The execution of chained methods is lazy, that is, it's deferred until
	* `_#value` is implicitly or explicitly called.
	*
	* Lazy evaluation allows several methods to support shortcut fusion.
	* Shortcut fusion is an optimization to merge iteratee calls; this avoids
	* the creation of intermediate arrays and can greatly reduce the number of
	* iteratee executions. Sections of a chain sequence qualify for shortcut
	* fusion if the section is applied to an array and iteratees accept only
	* one argument. The heuristic for whether a section qualifies for shortcut
	* fusion is subject to change.
	*
	* Chaining is supported in custom builds as long as the `_#value` method is
	* directly or indirectly included in the build.
	*
	* In addition to lodash methods, wrappers have `Array` and `String` methods.
	*
	* The wrapper `Array` methods are:
	* `concat`, `join`, `pop`, `push`, `shift`, `sort`, `splice`, and `unshift`
	*
	* The wrapper `String` methods are:
	* `replace` and `split`
	*
	* The wrapper methods that support shortcut fusion are:
	* `at`, `compact`, `drop`, `dropRight`, `dropWhile`, `filter`, `find`,
	* `findLast`, `head`, `initial`, `last`, `map`, `reject`, `reverse`, `slice`,
	* `tail`, `take`, `takeRight`, `takeRightWhile`, `takeWhile`, and `toArray`
	*
	* The chainable wrapper methods are:
	* `after`, `ary`, `assign`, `assignIn`, `assignInWith`, `assignWith`, `at`,
	* `before`, `bind`, `bindAll`, `bindKey`, `castArray`, `chain`, `chunk`,
	* `commit`, `compact`, `concat`, `conforms`, `constant`, `countBy`, `create`,
	* `curry`, `debounce`, `defaults`, `defaultsDeep`, `defer`, `delay`,
	* `difference`, `differenceBy`, `differenceWith`, `drop`, `dropRight`,
	* `dropRightWhile`, `dropWhile`, `extend`, `extendWith`, `fill`, `filter`,
	* `flatMap`, `flatMapDeep`, `flatMapDepth`, `flatten`, `flattenDeep`,
	* `flattenDepth`, `flip`, `flow`, `flowRight`, `fromPairs`, `functions`,
	* `functionsIn`, `groupBy`, `initial`, `intersection`, `intersectionBy`,
	* `intersectionWith`, `invert`, `invertBy`, `invokeMap`, `iteratee`, `keyBy`,
	* `keys`, `keysIn`, `map`, `mapKeys`, `mapValues`, `matches`, `matchesProperty`,
	* `memoize`, `merge`, `mergeWith`, `method`, `methodOf`, `mixin`, `negate`,
	* `nthArg`, `omit`, `omitBy`, `once`, `orderBy`, `over`, `overArgs`,
	* `overEvery`, `overSome`, `partial`, `partialRight`, `partition`, `pick`,
	* `pickBy`, `plant`, `property`, `propertyOf`, `pull`, `pullAll`, `pullAllBy`,
	* `pullAllWith`, `pullAt`, `push`, `range`, `rangeRight`, `rearg`, `reject`,
	* `remove`, `rest`, `reverse`, `sampleSize`, `set`, `setWith`, `shuffle`,
	* `slice`, `sort`, `sortBy`, `splice`, `spread`, `tail`, `take`, `takeRight`,
	* `takeRightWhile`, `takeWhile`, `tap`, `throttle`, `thru`, `toArray`,
	* `toPairs`, `toPairsIn`, `toPath`, `toPlainObject`, `transform`, `unary`,
	* `union`, `unionBy`, `unionWith`, `uniq`, `uniqBy`, `uniqWith`, `unset`,
	* `unshift`, `unzip`, `unzipWith`, `update`, `updateWith`, `values`,
	* `valuesIn`, `without`, `wrap`, `xor`, `xorBy`, `xorWith`, `zip`,
	* `zipObject`, `zipObjectDeep`, and `zipWith`
	*
	* The wrapper methods that are **not** chainable by default are:
	* `add`, `attempt`, `camelCase`, `capitalize`, `ceil`, `clamp`, `clone`,
	* `cloneDeep`, `cloneDeepWith`, `cloneWith`, `conformsTo`, `deburr`,
	* `defaultTo`, `divide`, `each`, `eachRight`, `endsWith`, `eq`, `escape`,
	* `escapeRegExp`, `every`, `find`, `findIndex`, `findKey`, `findLast`,
	* `findLastIndex`, `findLastKey`, `first`, `floor`, `forEach`, `forEachRight`,
	* `forIn`, `forInRight`, `forOwn`, `forOwnRight`, `get`, `gt`, `gte`, `has`,
	* `hasIn`, `head`, `identity`, `includes`, `indexOf`, `inRange`, `invoke`,
	* `isArguments`, `isArray`, `isArrayBuffer`, `isArrayLike`, `isArrayLikeObject`,
	* `isBoolean`, `isBuffer`, `isDate`, `isElement`, `isEmpty`, `isEqual`,
	* `isEqualWith`, `isError`, `isFinite`, `isFunction`, `isInteger`, `isLength`,
	* `isMap`, `isMatch`, `isMatchWith`, `isNaN`, `isNative`, `isNil`, `isNull`,
	* `isNumber`, `isObject`, `isObjectLike`, `isPlainObject`, `isRegExp`,
	* `isSafeInteger`, `isSet`, `isString`, `isUndefined`, `isTypedArray`,
	* `isWeakMap`, `isWeakSet`, `join`, `kebabCase`, `last`, `lastIndexOf`,
	* `lowerCase`, `lowerFirst`, `lt`, `lte`, `max`, `maxBy`, `mean`, `meanBy`,
	* `min`, `minBy`, `multiply`, `noConflict`, `noop`, `now`, `nth`, `pad`,
	* `padEnd`, `padStart`, `parseInt`, `pop`, `random`, `reduce`, `reduceRight`,
	* `repeat`, `result`, `round`, `runInContext`, `sample`, `shift`, `size`,
	* `snakeCase`, `some`, `sortedIndex`, `sortedIndexBy`, `sortedLastIndex`,
	* `sortedLastIndexBy`, `startCase`, `startsWith`, `stubArray`, `stubFalse`,
	* `stubObject`, `stubString`, `stubTrue`, `subtract`, `sum`, `sumBy`,
	* `template`, `times`, `toFinite`, `toInteger`, `toJSON`, `toLength`,
	* `toLower`, `toNumber`, `toSafeInteger`, `toString`, `toUpper`, `trim`,
	* `trimEnd`, `trimStart`, `truncate`, `unescape`, `uniqueId`, `upperCase`,
	* `upperFirst`, `value`, and `words`
	*
	* @name _
	* @constructor
	* @category Seq
	* @param {*} value The value to wrap in a `lodash` instance.
	* @returns {Object} Returns the new `lodash` wrapper instance.
	* @example
	*
	* function square(n) {
	*   return n * n;
	* }
	*
	* var wrapped = _([1, 2, 3]);
	*
	* // Returns an unwrapped value.
	* wrapped.reduce(_.add);
	* // => 6
	*
	* // Returns a wrapped value.
	* var squares = wrapped.map(square);
	*
	* _.isArray(squares);
	* // => false
	*
	* _.isArray(squares.value());
	* // => true
	*/
	function lodash(value) {
		if (isObjectLike(value) && !isArray(value) && !(value instanceof LazyWrapper)) {
			if (value instanceof LodashWrapper) return value;
			if (hasOwnProperty.call(value, "__wrapped__")) return wrapperClone(value);
		}
		return new LodashWrapper(value);
	}
	lodash.prototype = baseLodash.prototype;
	lodash.prototype.constructor = lodash;
	module.exports = lodash;
}));
//#endregion
//#region node_modules/lodash/_isLaziable.js
var require__isLaziable = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var LazyWrapper = require__LazyWrapper();
	var getData = require__getData();
	var getFuncName = require__getFuncName();
	var lodash = require_wrapperLodash();
	/**
	* Checks if `func` has a lazy counterpart.
	*
	* @private
	* @param {Function} func The function to check.
	* @returns {boolean} Returns `true` if `func` has a lazy counterpart,
	*  else `false`.
	*/
	function isLaziable(func) {
		var funcName = getFuncName(func), other = lodash[funcName];
		if (typeof other != "function" || !(funcName in LazyWrapper.prototype)) return false;
		if (func === other) return true;
		var data = getData(other);
		return !!data && func === data[0];
	}
	module.exports = isLaziable;
}));
//#endregion
//#region node_modules/lodash/_shortOut.js
var require__shortOut = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	/** Used to detect hot functions by number of calls within a span of milliseconds. */
	var HOT_COUNT = 800;
	var HOT_SPAN = 16;
	var nativeNow = Date.now;
	/**
	* Creates a function that'll short out and invoke `identity` instead
	* of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
	* milliseconds.
	*
	* @private
	* @param {Function} func The function to restrict.
	* @returns {Function} Returns the new shortable function.
	*/
	function shortOut(func) {
		var count = 0, lastCalled = 0;
		return function() {
			var stamp = nativeNow(), remaining = HOT_SPAN - (stamp - lastCalled);
			lastCalled = stamp;
			if (remaining > 0) {
				if (++count >= HOT_COUNT) return arguments[0];
			} else count = 0;
			return func.apply(void 0, arguments);
		};
	}
	module.exports = shortOut;
}));
//#endregion
//#region node_modules/lodash/_setData.js
var require__setData = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var baseSetData = require__baseSetData();
	module.exports = require__shortOut()(baseSetData);
}));
//#endregion
//#region node_modules/lodash/_getWrapDetails.js
var require__getWrapDetails = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	/** Used to match wrap detail comments. */
	var reWrapDetails = /\{\n\/\* \[wrapped with (.+)\] \*/;
	var reSplitDetails = /,? & /;
	/**
	* Extracts wrapper details from the `source` body comment.
	*
	* @private
	* @param {string} source The source to inspect.
	* @returns {Array} Returns the wrapper details.
	*/
	function getWrapDetails(source) {
		var match = source.match(reWrapDetails);
		return match ? match[1].split(reSplitDetails) : [];
	}
	module.exports = getWrapDetails;
}));
//#endregion
//#region node_modules/lodash/_insertWrapDetails.js
var require__insertWrapDetails = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	/** Used to match wrap detail comments. */
	var reWrapComment = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/;
	/**
	* Inserts wrapper `details` in a comment at the top of the `source` body.
	*
	* @private
	* @param {string} source The source to modify.
	* @returns {Array} details The details to insert.
	* @returns {string} Returns the modified source.
	*/
	function insertWrapDetails(source, details) {
		var length = details.length;
		if (!length) return source;
		var lastIndex = length - 1;
		details[lastIndex] = (length > 1 ? "& " : "") + details[lastIndex];
		details = details.join(length > 2 ? ", " : " ");
		return source.replace(reWrapComment, "{\n/* [wrapped with " + details + "] */\n");
	}
	module.exports = insertWrapDetails;
}));
//#endregion
//#region node_modules/lodash/constant.js
var require_constant = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	/**
	* Creates a function that returns `value`.
	*
	* @static
	* @memberOf _
	* @since 2.4.0
	* @category Util
	* @param {*} value The value to return from the new function.
	* @returns {Function} Returns the new constant function.
	* @example
	*
	* var objects = _.times(2, _.constant({ 'a': 1 }));
	*
	* console.log(objects);
	* // => [{ 'a': 1 }, { 'a': 1 }]
	*
	* console.log(objects[0] === objects[1]);
	* // => true
	*/
	function constant(value) {
		return function() {
			return value;
		};
	}
	module.exports = constant;
}));
//#endregion
//#region node_modules/lodash/_defineProperty.js
var require__defineProperty = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var getNative = require__getNative();
	module.exports = function() {
		try {
			var func = getNative(Object, "defineProperty");
			func({}, "", {});
			return func;
		} catch (e) {}
	}();
}));
//#endregion
//#region node_modules/lodash/_baseSetToString.js
var require__baseSetToString = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var constant = require_constant();
	var defineProperty = require__defineProperty();
	var identity = require_identity();
	module.exports = !defineProperty ? identity : function(func, string) {
		return defineProperty(func, "toString", {
			"configurable": true,
			"enumerable": false,
			"value": constant(string),
			"writable": true
		});
	};
}));
//#endregion
//#region node_modules/lodash/_setToString.js
var require__setToString = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var baseSetToString = require__baseSetToString();
	module.exports = require__shortOut()(baseSetToString);
}));
//#endregion
//#region node_modules/lodash/_arrayEach.js
var require__arrayEach = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	/**
	* A specialized version of `_.forEach` for arrays without support for
	* iteratee shorthands.
	*
	* @private
	* @param {Array} [array] The array to iterate over.
	* @param {Function} iteratee The function invoked per iteration.
	* @returns {Array} Returns `array`.
	*/
	function arrayEach(array, iteratee) {
		var index = -1, length = array == null ? 0 : array.length;
		while (++index < length) if (iteratee(array[index], index, array) === false) break;
		return array;
	}
	module.exports = arrayEach;
}));
//#endregion
//#region node_modules/lodash/_baseFindIndex.js
var require__baseFindIndex = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	/**
	* The base implementation of `_.findIndex` and `_.findLastIndex` without
	* support for iteratee shorthands.
	*
	* @private
	* @param {Array} array The array to inspect.
	* @param {Function} predicate The function invoked per iteration.
	* @param {number} fromIndex The index to search from.
	* @param {boolean} [fromRight] Specify iterating from right to left.
	* @returns {number} Returns the index of the matched value, else `-1`.
	*/
	function baseFindIndex(array, predicate, fromIndex, fromRight) {
		var length = array.length, index = fromIndex + (fromRight ? 1 : -1);
		while (fromRight ? index-- : ++index < length) if (predicate(array[index], index, array)) return index;
		return -1;
	}
	module.exports = baseFindIndex;
}));
//#endregion
//#region node_modules/lodash/_baseIsNaN.js
var require__baseIsNaN = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	/**
	* The base implementation of `_.isNaN` without support for number objects.
	*
	* @private
	* @param {*} value The value to check.
	* @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
	*/
	function baseIsNaN(value) {
		return value !== value;
	}
	module.exports = baseIsNaN;
}));
//#endregion
//#region node_modules/lodash/_strictIndexOf.js
var require__strictIndexOf = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	/**
	* A specialized version of `_.indexOf` which performs strict equality
	* comparisons of values, i.e. `===`.
	*
	* @private
	* @param {Array} array The array to inspect.
	* @param {*} value The value to search for.
	* @param {number} fromIndex The index to search from.
	* @returns {number} Returns the index of the matched value, else `-1`.
	*/
	function strictIndexOf(array, value, fromIndex) {
		var index = fromIndex - 1, length = array.length;
		while (++index < length) if (array[index] === value) return index;
		return -1;
	}
	module.exports = strictIndexOf;
}));
//#endregion
//#region node_modules/lodash/_baseIndexOf.js
var require__baseIndexOf = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var baseFindIndex = require__baseFindIndex();
	var baseIsNaN = require__baseIsNaN();
	var strictIndexOf = require__strictIndexOf();
	/**
	* The base implementation of `_.indexOf` without `fromIndex` bounds checks.
	*
	* @private
	* @param {Array} array The array to inspect.
	* @param {*} value The value to search for.
	* @param {number} fromIndex The index to search from.
	* @returns {number} Returns the index of the matched value, else `-1`.
	*/
	function baseIndexOf(array, value, fromIndex) {
		return value === value ? strictIndexOf(array, value, fromIndex) : baseFindIndex(array, baseIsNaN, fromIndex);
	}
	module.exports = baseIndexOf;
}));
//#endregion
//#region node_modules/lodash/_arrayIncludes.js
var require__arrayIncludes = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var baseIndexOf = require__baseIndexOf();
	/**
	* A specialized version of `_.includes` for arrays without support for
	* specifying an index to search from.
	*
	* @private
	* @param {Array} [array] The array to inspect.
	* @param {*} target The value to search for.
	* @returns {boolean} Returns `true` if `target` is found, else `false`.
	*/
	function arrayIncludes(array, value) {
		return !!(array == null ? 0 : array.length) && baseIndexOf(array, value, 0) > -1;
	}
	module.exports = arrayIncludes;
}));
//#endregion
//#region node_modules/lodash/_updateWrapDetails.js
var require__updateWrapDetails = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var arrayEach = require__arrayEach();
	var arrayIncludes = require__arrayIncludes();
	/** Used to associate wrap methods with their bit flags. */
	var wrapFlags = [
		["ary", 128],
		["bind", 1],
		["bindKey", 2],
		["curry", 8],
		["curryRight", 16],
		["flip", 512],
		["partial", 32],
		["partialRight", 64],
		["rearg", 256]
	];
	/**
	* Updates wrapper `details` based on `bitmask` flags.
	*
	* @private
	* @returns {Array} details The details to modify.
	* @param {number} bitmask The bitmask flags. See `createWrap` for more details.
	* @returns {Array} Returns `details`.
	*/
	function updateWrapDetails(details, bitmask) {
		arrayEach(wrapFlags, function(pair) {
			var value = "_." + pair[0];
			if (bitmask & pair[1] && !arrayIncludes(details, value)) details.push(value);
		});
		return details.sort();
	}
	module.exports = updateWrapDetails;
}));
//#endregion
//#region node_modules/lodash/_setWrapToString.js
var require__setWrapToString = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var getWrapDetails = require__getWrapDetails();
	var insertWrapDetails = require__insertWrapDetails();
	var setToString = require__setToString();
	var updateWrapDetails = require__updateWrapDetails();
	/**
	* Sets the `toString` method of `wrapper` to mimic the source of `reference`
	* with wrapper details in a comment at the top of the source body.
	*
	* @private
	* @param {Function} wrapper The function to modify.
	* @param {Function} reference The reference function.
	* @param {number} bitmask The bitmask flags. See `createWrap` for more details.
	* @returns {Function} Returns `wrapper`.
	*/
	function setWrapToString(wrapper, reference, bitmask) {
		var source = reference + "";
		return setToString(wrapper, insertWrapDetails(source, updateWrapDetails(getWrapDetails(source), bitmask)));
	}
	module.exports = setWrapToString;
}));
//#endregion
//#region node_modules/lodash/_createRecurry.js
var require__createRecurry = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var isLaziable = require__isLaziable();
	var setData = require__setData();
	var setWrapToString = require__setWrapToString();
	/** Used to compose bitmasks for function metadata. */
	var WRAP_BIND_FLAG = 1;
	var WRAP_BIND_KEY_FLAG = 2;
	var WRAP_CURRY_BOUND_FLAG = 4;
	var WRAP_CURRY_FLAG = 8;
	var WRAP_PARTIAL_FLAG = 32;
	var WRAP_PARTIAL_RIGHT_FLAG = 64;
	/**
	* Creates a function that wraps `func` to continue currying.
	*
	* @private
	* @param {Function} func The function to wrap.
	* @param {number} bitmask The bitmask flags. See `createWrap` for more details.
	* @param {Function} wrapFunc The function to create the `func` wrapper.
	* @param {*} placeholder The placeholder value.
	* @param {*} [thisArg] The `this` binding of `func`.
	* @param {Array} [partials] The arguments to prepend to those provided to
	*  the new function.
	* @param {Array} [holders] The `partials` placeholder indexes.
	* @param {Array} [argPos] The argument positions of the new function.
	* @param {number} [ary] The arity cap of `func`.
	* @param {number} [arity] The arity of `func`.
	* @returns {Function} Returns the new wrapped function.
	*/
	function createRecurry(func, bitmask, wrapFunc, placeholder, thisArg, partials, holders, argPos, ary, arity) {
		var isCurry = bitmask & WRAP_CURRY_FLAG, newHolders = isCurry ? holders : void 0, newHoldersRight = isCurry ? void 0 : holders, newPartials = isCurry ? partials : void 0, newPartialsRight = isCurry ? void 0 : partials;
		bitmask |= isCurry ? WRAP_PARTIAL_FLAG : WRAP_PARTIAL_RIGHT_FLAG;
		bitmask &= ~(isCurry ? WRAP_PARTIAL_RIGHT_FLAG : WRAP_PARTIAL_FLAG);
		if (!(bitmask & WRAP_CURRY_BOUND_FLAG)) bitmask &= ~(WRAP_BIND_FLAG | WRAP_BIND_KEY_FLAG);
		var newData = [
			func,
			bitmask,
			thisArg,
			newPartials,
			newHolders,
			newPartialsRight,
			newHoldersRight,
			argPos,
			ary,
			arity
		];
		var result = wrapFunc.apply(void 0, newData);
		if (isLaziable(func)) setData(result, newData);
		result.placeholder = placeholder;
		return setWrapToString(result, func, bitmask);
	}
	module.exports = createRecurry;
}));
//#endregion
//#region node_modules/lodash/_getHolder.js
var require__getHolder = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	/**
	* Gets the argument placeholder value for `func`.
	*
	* @private
	* @param {Function} func The function to inspect.
	* @returns {*} Returns the placeholder value.
	*/
	function getHolder(func) {
		return func.placeholder;
	}
	module.exports = getHolder;
}));
//#endregion
//#region node_modules/lodash/_isIndex.js
var require__isIndex = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	/** Used as references for various `Number` constants. */
	var MAX_SAFE_INTEGER = 9007199254740991;
	/** Used to detect unsigned integer values. */
	var reIsUint = /^(?:0|[1-9]\d*)$/;
	/**
	* Checks if `value` is a valid array-like index.
	*
	* @private
	* @param {*} value The value to check.
	* @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
	* @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
	*/
	function isIndex(value, length) {
		var type = typeof value;
		length = length == null ? MAX_SAFE_INTEGER : length;
		return !!length && (type == "number" || type != "symbol" && reIsUint.test(value)) && value > -1 && value % 1 == 0 && value < length;
	}
	module.exports = isIndex;
}));
//#endregion
//#region node_modules/lodash/_reorder.js
var require__reorder = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var copyArray = require__copyArray();
	var isIndex = require__isIndex();
	var nativeMin = Math.min;
	/**
	* Reorder `array` according to the specified indexes where the element at
	* the first index is assigned as the first element, the element at
	* the second index is assigned as the second element, and so on.
	*
	* @private
	* @param {Array} array The array to reorder.
	* @param {Array} indexes The arranged array indexes.
	* @returns {Array} Returns `array`.
	*/
	function reorder(array, indexes) {
		var arrLength = array.length, length = nativeMin(indexes.length, arrLength), oldArray = copyArray(array);
		while (length--) {
			var index = indexes[length];
			array[length] = isIndex(index, arrLength) ? oldArray[index] : void 0;
		}
		return array;
	}
	module.exports = reorder;
}));
//#endregion
//#region node_modules/lodash/_replaceHolders.js
var require__replaceHolders = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	/** Used as the internal argument placeholder. */
	var PLACEHOLDER = "__lodash_placeholder__";
	/**
	* Replaces all `placeholder` elements in `array` with an internal placeholder
	* and returns an array of their indexes.
	*
	* @private
	* @param {Array} array The array to modify.
	* @param {*} placeholder The placeholder to replace.
	* @returns {Array} Returns the new array of placeholder indexes.
	*/
	function replaceHolders(array, placeholder) {
		var index = -1, length = array.length, resIndex = 0, result = [];
		while (++index < length) {
			var value = array[index];
			if (value === placeholder || value === PLACEHOLDER) {
				array[index] = PLACEHOLDER;
				result[resIndex++] = index;
			}
		}
		return result;
	}
	module.exports = replaceHolders;
}));
//#endregion
//#region node_modules/lodash/_createHybrid.js
var require__createHybrid = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var composeArgs = require__composeArgs();
	var composeArgsRight = require__composeArgsRight();
	var countHolders = require__countHolders();
	var createCtor = require__createCtor();
	var createRecurry = require__createRecurry();
	var getHolder = require__getHolder();
	var reorder = require__reorder();
	var replaceHolders = require__replaceHolders();
	var root = require__root();
	/** Used to compose bitmasks for function metadata. */
	var WRAP_BIND_FLAG = 1;
	var WRAP_BIND_KEY_FLAG = 2;
	var WRAP_CURRY_FLAG = 8;
	var WRAP_CURRY_RIGHT_FLAG = 16;
	var WRAP_ARY_FLAG = 128;
	var WRAP_FLIP_FLAG = 512;
	/**
	* Creates a function that wraps `func` to invoke it with optional `this`
	* binding of `thisArg`, partial application, and currying.
	*
	* @private
	* @param {Function|string} func The function or method name to wrap.
	* @param {number} bitmask The bitmask flags. See `createWrap` for more details.
	* @param {*} [thisArg] The `this` binding of `func`.
	* @param {Array} [partials] The arguments to prepend to those provided to
	*  the new function.
	* @param {Array} [holders] The `partials` placeholder indexes.
	* @param {Array} [partialsRight] The arguments to append to those provided
	*  to the new function.
	* @param {Array} [holdersRight] The `partialsRight` placeholder indexes.
	* @param {Array} [argPos] The argument positions of the new function.
	* @param {number} [ary] The arity cap of `func`.
	* @param {number} [arity] The arity of `func`.
	* @returns {Function} Returns the new wrapped function.
	*/
	function createHybrid(func, bitmask, thisArg, partials, holders, partialsRight, holdersRight, argPos, ary, arity) {
		var isAry = bitmask & WRAP_ARY_FLAG, isBind = bitmask & WRAP_BIND_FLAG, isBindKey = bitmask & WRAP_BIND_KEY_FLAG, isCurried = bitmask & (WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG), isFlip = bitmask & WRAP_FLIP_FLAG, Ctor = isBindKey ? void 0 : createCtor(func);
		function wrapper() {
			var length = arguments.length, args = Array(length), index = length;
			while (index--) args[index] = arguments[index];
			if (isCurried) var placeholder = getHolder(wrapper), holdersCount = countHolders(args, placeholder);
			if (partials) args = composeArgs(args, partials, holders, isCurried);
			if (partialsRight) args = composeArgsRight(args, partialsRight, holdersRight, isCurried);
			length -= holdersCount;
			if (isCurried && length < arity) {
				var newHolders = replaceHolders(args, placeholder);
				return createRecurry(func, bitmask, createHybrid, wrapper.placeholder, thisArg, args, newHolders, argPos, ary, arity - length);
			}
			var thisBinding = isBind ? thisArg : this, fn = isBindKey ? thisBinding[func] : func;
			length = args.length;
			if (argPos) args = reorder(args, argPos);
			else if (isFlip && length > 1) args.reverse();
			if (isAry && ary < length) args.length = ary;
			if (this && this !== root && this instanceof wrapper) fn = Ctor || createCtor(fn);
			return fn.apply(thisBinding, args);
		}
		return wrapper;
	}
	module.exports = createHybrid;
}));
//#endregion
//#region node_modules/lodash/_createCurry.js
var require__createCurry = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var apply = require__apply();
	var createCtor = require__createCtor();
	var createHybrid = require__createHybrid();
	var createRecurry = require__createRecurry();
	var getHolder = require__getHolder();
	var replaceHolders = require__replaceHolders();
	var root = require__root();
	/**
	* Creates a function that wraps `func` to enable currying.
	*
	* @private
	* @param {Function} func The function to wrap.
	* @param {number} bitmask The bitmask flags. See `createWrap` for more details.
	* @param {number} arity The arity of `func`.
	* @returns {Function} Returns the new wrapped function.
	*/
	function createCurry(func, bitmask, arity) {
		var Ctor = createCtor(func);
		function wrapper() {
			var length = arguments.length, args = Array(length), index = length, placeholder = getHolder(wrapper);
			while (index--) args[index] = arguments[index];
			var holders = length < 3 && args[0] !== placeholder && args[length - 1] !== placeholder ? [] : replaceHolders(args, placeholder);
			length -= holders.length;
			if (length < arity) return createRecurry(func, bitmask, createHybrid, wrapper.placeholder, void 0, args, holders, void 0, void 0, arity - length);
			return apply(this && this !== root && this instanceof wrapper ? Ctor : func, this, args);
		}
		return wrapper;
	}
	module.exports = createCurry;
}));
//#endregion
//#region node_modules/lodash/_createPartial.js
var require__createPartial = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var apply = require__apply();
	var createCtor = require__createCtor();
	var root = require__root();
	/** Used to compose bitmasks for function metadata. */
	var WRAP_BIND_FLAG = 1;
	/**
	* Creates a function that wraps `func` to invoke it with the `this` binding
	* of `thisArg` and `partials` prepended to the arguments it receives.
	*
	* @private
	* @param {Function} func The function to wrap.
	* @param {number} bitmask The bitmask flags. See `createWrap` for more details.
	* @param {*} thisArg The `this` binding of `func`.
	* @param {Array} partials The arguments to prepend to those provided to
	*  the new function.
	* @returns {Function} Returns the new wrapped function.
	*/
	function createPartial(func, bitmask, thisArg, partials) {
		var isBind = bitmask & WRAP_BIND_FLAG, Ctor = createCtor(func);
		function wrapper() {
			var argsIndex = -1, argsLength = arguments.length, leftIndex = -1, leftLength = partials.length, args = Array(leftLength + argsLength), fn = this && this !== root && this instanceof wrapper ? Ctor : func;
			while (++leftIndex < leftLength) args[leftIndex] = partials[leftIndex];
			while (argsLength--) args[leftIndex++] = arguments[++argsIndex];
			return apply(fn, isBind ? thisArg : this, args);
		}
		return wrapper;
	}
	module.exports = createPartial;
}));
//#endregion
//#region node_modules/lodash/_mergeData.js
var require__mergeData = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var composeArgs = require__composeArgs();
	var composeArgsRight = require__composeArgsRight();
	var replaceHolders = require__replaceHolders();
	/** Used as the internal argument placeholder. */
	var PLACEHOLDER = "__lodash_placeholder__";
	/** Used to compose bitmasks for function metadata. */
	var WRAP_BIND_FLAG = 1;
	var WRAP_BIND_KEY_FLAG = 2;
	var WRAP_CURRY_BOUND_FLAG = 4;
	var WRAP_CURRY_FLAG = 8;
	var WRAP_ARY_FLAG = 128;
	var WRAP_REARG_FLAG = 256;
	var nativeMin = Math.min;
	/**
	* Merges the function metadata of `source` into `data`.
	*
	* Merging metadata reduces the number of wrappers used to invoke a function.
	* This is possible because methods like `_.bind`, `_.curry`, and `_.partial`
	* may be applied regardless of execution order. Methods like `_.ary` and
	* `_.rearg` modify function arguments, making the order in which they are
	* executed important, preventing the merging of metadata. However, we make
	* an exception for a safe combined case where curried functions have `_.ary`
	* and or `_.rearg` applied.
	*
	* @private
	* @param {Array} data The destination metadata.
	* @param {Array} source The source metadata.
	* @returns {Array} Returns `data`.
	*/
	function mergeData(data, source) {
		var bitmask = data[1], srcBitmask = source[1], newBitmask = bitmask | srcBitmask, isCommon = newBitmask < (WRAP_BIND_FLAG | WRAP_BIND_KEY_FLAG | WRAP_ARY_FLAG);
		var isCombo = srcBitmask == WRAP_ARY_FLAG && bitmask == WRAP_CURRY_FLAG || srcBitmask == WRAP_ARY_FLAG && bitmask == WRAP_REARG_FLAG && data[7].length <= source[8] || srcBitmask == (WRAP_ARY_FLAG | WRAP_REARG_FLAG) && source[7].length <= source[8] && bitmask == WRAP_CURRY_FLAG;
		if (!(isCommon || isCombo)) return data;
		if (srcBitmask & WRAP_BIND_FLAG) {
			data[2] = source[2];
			newBitmask |= bitmask & WRAP_BIND_FLAG ? 0 : WRAP_CURRY_BOUND_FLAG;
		}
		var value = source[3];
		if (value) {
			var partials = data[3];
			data[3] = partials ? composeArgs(partials, value, source[4]) : value;
			data[4] = partials ? replaceHolders(data[3], PLACEHOLDER) : source[4];
		}
		value = source[5];
		if (value) {
			partials = data[5];
			data[5] = partials ? composeArgsRight(partials, value, source[6]) : value;
			data[6] = partials ? replaceHolders(data[5], PLACEHOLDER) : source[6];
		}
		value = source[7];
		if (value) data[7] = value;
		if (srcBitmask & WRAP_ARY_FLAG) data[8] = data[8] == null ? source[8] : nativeMin(data[8], source[8]);
		if (data[9] == null) data[9] = source[9];
		data[0] = source[0];
		data[1] = newBitmask;
		return data;
	}
	module.exports = mergeData;
}));
//#endregion
//#region node_modules/lodash/_trimmedEndIndex.js
var require__trimmedEndIndex = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	/** Used to match a single whitespace character. */
	var reWhitespace = /\s/;
	/**
	* Used by `_.trim` and `_.trimEnd` to get the index of the last non-whitespace
	* character of `string`.
	*
	* @private
	* @param {string} string The string to inspect.
	* @returns {number} Returns the index of the last non-whitespace character.
	*/
	function trimmedEndIndex(string) {
		var index = string.length;
		while (index-- && reWhitespace.test(string.charAt(index)));
		return index;
	}
	module.exports = trimmedEndIndex;
}));
//#endregion
//#region node_modules/lodash/_baseTrim.js
var require__baseTrim = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var trimmedEndIndex = require__trimmedEndIndex();
	/** Used to match leading whitespace. */
	var reTrimStart = /^\s+/;
	/**
	* The base implementation of `_.trim`.
	*
	* @private
	* @param {string} string The string to trim.
	* @returns {string} Returns the trimmed string.
	*/
	function baseTrim(string) {
		return string ? string.slice(0, trimmedEndIndex(string) + 1).replace(reTrimStart, "") : string;
	}
	module.exports = baseTrim;
}));
//#endregion
//#region node_modules/lodash/isSymbol.js
var require_isSymbol = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var baseGetTag = require__baseGetTag();
	var isObjectLike = require_isObjectLike();
	/** `Object#toString` result references. */
	var symbolTag = "[object Symbol]";
	/**
	* Checks if `value` is classified as a `Symbol` primitive or object.
	*
	* @static
	* @memberOf _
	* @since 4.0.0
	* @category Lang
	* @param {*} value The value to check.
	* @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
	* @example
	*
	* _.isSymbol(Symbol.iterator);
	* // => true
	*
	* _.isSymbol('abc');
	* // => false
	*/
	function isSymbol(value) {
		return typeof value == "symbol" || isObjectLike(value) && baseGetTag(value) == symbolTag;
	}
	module.exports = isSymbol;
}));
//#endregion
//#region node_modules/lodash/toNumber.js
var require_toNumber = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var baseTrim = require__baseTrim();
	var isObject = require_isObject();
	var isSymbol = require_isSymbol();
	/** Used as references for various `Number` constants. */
	var NAN = NaN;
	/** Used to detect bad signed hexadecimal string values. */
	var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
	/** Used to detect binary string values. */
	var reIsBinary = /^0b[01]+$/i;
	/** Used to detect octal string values. */
	var reIsOctal = /^0o[0-7]+$/i;
	/** Built-in method references without a dependency on `root`. */
	var freeParseInt = parseInt;
	/**
	* Converts `value` to a number.
	*
	* @static
	* @memberOf _
	* @since 4.0.0
	* @category Lang
	* @param {*} value The value to process.
	* @returns {number} Returns the number.
	* @example
	*
	* _.toNumber(3.2);
	* // => 3.2
	*
	* _.toNumber(Number.MIN_VALUE);
	* // => 5e-324
	*
	* _.toNumber(Infinity);
	* // => Infinity
	*
	* _.toNumber('3.2');
	* // => 3.2
	*/
	function toNumber(value) {
		if (typeof value == "number") return value;
		if (isSymbol(value)) return NAN;
		if (isObject(value)) {
			var other = typeof value.valueOf == "function" ? value.valueOf() : value;
			value = isObject(other) ? other + "" : other;
		}
		if (typeof value != "string") return value === 0 ? value : +value;
		value = baseTrim(value);
		var isBinary = reIsBinary.test(value);
		return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
	}
	module.exports = toNumber;
}));
//#endregion
//#region node_modules/lodash/toFinite.js
var require_toFinite = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var toNumber = require_toNumber();
	/** Used as references for various `Number` constants. */
	var INFINITY = 1 / 0;
	var MAX_INTEGER = 17976931348623157e292;
	/**
	* Converts `value` to a finite number.
	*
	* @static
	* @memberOf _
	* @since 4.12.0
	* @category Lang
	* @param {*} value The value to convert.
	* @returns {number} Returns the converted number.
	* @example
	*
	* _.toFinite(3.2);
	* // => 3.2
	*
	* _.toFinite(Number.MIN_VALUE);
	* // => 5e-324
	*
	* _.toFinite(Infinity);
	* // => 1.7976931348623157e+308
	*
	* _.toFinite('3.2');
	* // => 3.2
	*/
	function toFinite(value) {
		if (!value) return value === 0 ? value : 0;
		value = toNumber(value);
		if (value === INFINITY || value === -INFINITY) return (value < 0 ? -1 : 1) * MAX_INTEGER;
		return value === value ? value : 0;
	}
	module.exports = toFinite;
}));
//#endregion
//#region node_modules/lodash/toInteger.js
var require_toInteger = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var toFinite = require_toFinite();
	/**
	* Converts `value` to an integer.
	*
	* **Note:** This method is loosely based on
	* [`ToInteger`](http://www.ecma-international.org/ecma-262/7.0/#sec-tointeger).
	*
	* @static
	* @memberOf _
	* @since 4.0.0
	* @category Lang
	* @param {*} value The value to convert.
	* @returns {number} Returns the converted integer.
	* @example
	*
	* _.toInteger(3.2);
	* // => 3
	*
	* _.toInteger(Number.MIN_VALUE);
	* // => 0
	*
	* _.toInteger(Infinity);
	* // => 1.7976931348623157e+308
	*
	* _.toInteger('3.2');
	* // => 3
	*/
	function toInteger(value) {
		var result = toFinite(value), remainder = result % 1;
		return result === result ? remainder ? result - remainder : result : 0;
	}
	module.exports = toInteger;
}));
//#endregion
//#region node_modules/lodash/_createWrap.js
var require__createWrap = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var baseSetData = require__baseSetData();
	var createBind = require__createBind();
	var createCurry = require__createCurry();
	var createHybrid = require__createHybrid();
	var createPartial = require__createPartial();
	var getData = require__getData();
	var mergeData = require__mergeData();
	var setData = require__setData();
	var setWrapToString = require__setWrapToString();
	var toInteger = require_toInteger();
	/** Error message constants. */
	var FUNC_ERROR_TEXT = "Expected a function";
	/** Used to compose bitmasks for function metadata. */
	var WRAP_BIND_FLAG = 1;
	var WRAP_BIND_KEY_FLAG = 2;
	var WRAP_CURRY_FLAG = 8;
	var WRAP_CURRY_RIGHT_FLAG = 16;
	var WRAP_PARTIAL_FLAG = 32;
	var WRAP_PARTIAL_RIGHT_FLAG = 64;
	var nativeMax = Math.max;
	/**
	* Creates a function that either curries or invokes `func` with optional
	* `this` binding and partially applied arguments.
	*
	* @private
	* @param {Function|string} func The function or method name to wrap.
	* @param {number} bitmask The bitmask flags.
	*    1 - `_.bind`
	*    2 - `_.bindKey`
	*    4 - `_.curry` or `_.curryRight` of a bound function
	*    8 - `_.curry`
	*   16 - `_.curryRight`
	*   32 - `_.partial`
	*   64 - `_.partialRight`
	*  128 - `_.rearg`
	*  256 - `_.ary`
	*  512 - `_.flip`
	* @param {*} [thisArg] The `this` binding of `func`.
	* @param {Array} [partials] The arguments to be partially applied.
	* @param {Array} [holders] The `partials` placeholder indexes.
	* @param {Array} [argPos] The argument positions of the new function.
	* @param {number} [ary] The arity cap of `func`.
	* @param {number} [arity] The arity of `func`.
	* @returns {Function} Returns the new wrapped function.
	*/
	function createWrap(func, bitmask, thisArg, partials, holders, argPos, ary, arity) {
		var isBindKey = bitmask & WRAP_BIND_KEY_FLAG;
		if (!isBindKey && typeof func != "function") throw new TypeError(FUNC_ERROR_TEXT);
		var length = partials ? partials.length : 0;
		if (!length) {
			bitmask &= ~(WRAP_PARTIAL_FLAG | WRAP_PARTIAL_RIGHT_FLAG);
			partials = holders = void 0;
		}
		ary = ary === void 0 ? ary : nativeMax(toInteger(ary), 0);
		arity = arity === void 0 ? arity : toInteger(arity);
		length -= holders ? holders.length : 0;
		if (bitmask & WRAP_PARTIAL_RIGHT_FLAG) {
			var partialsRight = partials, holdersRight = holders;
			partials = holders = void 0;
		}
		var data = isBindKey ? void 0 : getData(func);
		var newData = [
			func,
			bitmask,
			thisArg,
			partials,
			holders,
			partialsRight,
			holdersRight,
			argPos,
			ary,
			arity
		];
		if (data) mergeData(newData, data);
		func = newData[0];
		bitmask = newData[1];
		thisArg = newData[2];
		partials = newData[3];
		holders = newData[4];
		arity = newData[9] = newData[9] === void 0 ? isBindKey ? 0 : func.length : nativeMax(newData[9] - length, 0);
		if (!arity && bitmask & (WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG)) bitmask &= ~(WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG);
		if (!bitmask || bitmask == WRAP_BIND_FLAG) var result = createBind(func, bitmask, thisArg);
		else if (bitmask == WRAP_CURRY_FLAG || bitmask == WRAP_CURRY_RIGHT_FLAG) result = createCurry(func, bitmask, arity);
		else if ((bitmask == WRAP_PARTIAL_FLAG || bitmask == (WRAP_BIND_FLAG | WRAP_PARTIAL_FLAG)) && !holders.length) result = createPartial(func, bitmask, thisArg, partials);
		else result = createHybrid.apply(void 0, newData);
		return setWrapToString((data ? baseSetData : setData)(result, newData), func, bitmask);
	}
	module.exports = createWrap;
}));
//#endregion
//#region node_modules/lodash/ary.js
var require_ary = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var createWrap = require__createWrap();
	/** Used to compose bitmasks for function metadata. */
	var WRAP_ARY_FLAG = 128;
	/**
	* Creates a function that invokes `func`, with up to `n` arguments,
	* ignoring any additional arguments.
	*
	* @static
	* @memberOf _
	* @since 3.0.0
	* @category Function
	* @param {Function} func The function to cap arguments for.
	* @param {number} [n=func.length] The arity cap.
	* @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
	* @returns {Function} Returns the new capped function.
	* @example
	*
	* _.map(['6', '8', '10'], _.ary(parseInt, 1));
	* // => [6, 8, 10]
	*/
	function ary(func, n, guard) {
		n = guard ? void 0 : n;
		n = func && n == null ? func.length : n;
		return createWrap(func, WRAP_ARY_FLAG, void 0, void 0, void 0, void 0, n);
	}
	module.exports = ary;
}));
//#endregion
//#region node_modules/lodash/_baseAssignValue.js
var require__baseAssignValue = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var defineProperty = require__defineProperty();
	/**
	* The base implementation of `assignValue` and `assignMergeValue` without
	* value checks.
	*
	* @private
	* @param {Object} object The object to modify.
	* @param {string} key The key of the property to assign.
	* @param {*} value The value to assign.
	*/
	function baseAssignValue(object, key, value) {
		if (key == "__proto__" && defineProperty) defineProperty(object, key, {
			"configurable": true,
			"enumerable": true,
			"value": value,
			"writable": true
		});
		else object[key] = value;
	}
	module.exports = baseAssignValue;
}));
//#endregion
//#region node_modules/lodash/eq.js
var require_eq = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	/**
	* Performs a
	* [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
	* comparison between two values to determine if they are equivalent.
	*
	* @static
	* @memberOf _
	* @since 4.0.0
	* @category Lang
	* @param {*} value The value to compare.
	* @param {*} other The other value to compare.
	* @returns {boolean} Returns `true` if the values are equivalent, else `false`.
	* @example
	*
	* var object = { 'a': 1 };
	* var other = { 'a': 1 };
	*
	* _.eq(object, object);
	* // => true
	*
	* _.eq(object, other);
	* // => false
	*
	* _.eq('a', 'a');
	* // => true
	*
	* _.eq('a', Object('a'));
	* // => false
	*
	* _.eq(NaN, NaN);
	* // => true
	*/
	function eq(value, other) {
		return value === other || value !== value && other !== other;
	}
	module.exports = eq;
}));
//#endregion
//#region node_modules/lodash/_assignValue.js
var require__assignValue = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var baseAssignValue = require__baseAssignValue();
	var eq = require_eq();
	/** Used to check objects for own properties. */
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	/**
	* Assigns `value` to `key` of `object` if the existing value is not equivalent
	* using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
	* for equality comparisons.
	*
	* @private
	* @param {Object} object The object to modify.
	* @param {string} key The key of the property to assign.
	* @param {*} value The value to assign.
	*/
	function assignValue(object, key, value) {
		var objValue = object[key];
		if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) || value === void 0 && !(key in object)) baseAssignValue(object, key, value);
	}
	module.exports = assignValue;
}));
//#endregion
//#region node_modules/lodash/_copyObject.js
var require__copyObject = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var assignValue = require__assignValue();
	var baseAssignValue = require__baseAssignValue();
	/**
	* Copies properties of `source` to `object`.
	*
	* @private
	* @param {Object} source The object to copy properties from.
	* @param {Array} props The property identifiers to copy.
	* @param {Object} [object={}] The object to copy properties to.
	* @param {Function} [customizer] The function to customize copied values.
	* @returns {Object} Returns `object`.
	*/
	function copyObject(source, props, object, customizer) {
		var isNew = !object;
		object || (object = {});
		var index = -1, length = props.length;
		while (++index < length) {
			var key = props[index];
			var newValue = customizer ? customizer(object[key], source[key], key, object, source) : void 0;
			if (newValue === void 0) newValue = source[key];
			if (isNew) baseAssignValue(object, key, newValue);
			else assignValue(object, key, newValue);
		}
		return object;
	}
	module.exports = copyObject;
}));
//#endregion
//#region node_modules/lodash/_baseTimes.js
var require__baseTimes = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	/**
	* The base implementation of `_.times` without support for iteratee shorthands
	* or max array length checks.
	*
	* @private
	* @param {number} n The number of times to invoke `iteratee`.
	* @param {Function} iteratee The function invoked per iteration.
	* @returns {Array} Returns the array of results.
	*/
	function baseTimes(n, iteratee) {
		var index = -1, result = Array(n);
		while (++index < n) result[index] = iteratee(index);
		return result;
	}
	module.exports = baseTimes;
}));
//#endregion
//#region node_modules/lodash/_baseIsArguments.js
var require__baseIsArguments = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var baseGetTag = require__baseGetTag();
	var isObjectLike = require_isObjectLike();
	/** `Object#toString` result references. */
	var argsTag = "[object Arguments]";
	/**
	* The base implementation of `_.isArguments`.
	*
	* @private
	* @param {*} value The value to check.
	* @returns {boolean} Returns `true` if `value` is an `arguments` object,
	*/
	function baseIsArguments(value) {
		return isObjectLike(value) && baseGetTag(value) == argsTag;
	}
	module.exports = baseIsArguments;
}));
//#endregion
//#region node_modules/lodash/isArguments.js
var require_isArguments = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var baseIsArguments = require__baseIsArguments();
	var isObjectLike = require_isObjectLike();
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	/** Built-in value references. */
	var propertyIsEnumerable = objectProto.propertyIsEnumerable;
	module.exports = baseIsArguments(function() {
		return arguments;
	}()) ? baseIsArguments : function(value) {
		return isObjectLike(value) && hasOwnProperty.call(value, "callee") && !propertyIsEnumerable.call(value, "callee");
	};
}));
//#endregion
//#region node_modules/lodash/stubFalse.js
var require_stubFalse = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	/**
	* This method returns `false`.
	*
	* @static
	* @memberOf _
	* @since 4.13.0
	* @category Util
	* @returns {boolean} Returns `false`.
	* @example
	*
	* _.times(2, _.stubFalse);
	* // => [false, false]
	*/
	function stubFalse() {
		return false;
	}
	module.exports = stubFalse;
}));
//#endregion
//#region node_modules/lodash/isBuffer.js
var require_isBuffer = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var root = require__root();
	var stubFalse = require_stubFalse();
	/** Detect free variable `exports`. */
	var freeExports = typeof exports == "object" && exports && !exports.nodeType && exports;
	/** Detect free variable `module`. */
	var freeModule = freeExports && typeof module == "object" && module && !module.nodeType && module;
	/** Built-in value references. */
	var Buffer = freeModule && freeModule.exports === freeExports ? root.Buffer : void 0;
	module.exports = (Buffer ? Buffer.isBuffer : void 0) || stubFalse;
}));
//#endregion
//#region node_modules/lodash/isLength.js
var require_isLength = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	/** Used as references for various `Number` constants. */
	var MAX_SAFE_INTEGER = 9007199254740991;
	/**
	* Checks if `value` is a valid array-like length.
	*
	* **Note:** This method is loosely based on
	* [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
	*
	* @static
	* @memberOf _
	* @since 4.0.0
	* @category Lang
	* @param {*} value The value to check.
	* @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
	* @example
	*
	* _.isLength(3);
	* // => true
	*
	* _.isLength(Number.MIN_VALUE);
	* // => false
	*
	* _.isLength(Infinity);
	* // => false
	*
	* _.isLength('3');
	* // => false
	*/
	function isLength(value) {
		return typeof value == "number" && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
	}
	module.exports = isLength;
}));
//#endregion
//#region node_modules/lodash/_baseIsTypedArray.js
var require__baseIsTypedArray = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var baseGetTag = require__baseGetTag();
	var isLength = require_isLength();
	var isObjectLike = require_isObjectLike();
	/** `Object#toString` result references. */
	var argsTag = "[object Arguments]";
	var arrayTag = "[object Array]";
	var boolTag = "[object Boolean]";
	var dateTag = "[object Date]";
	var errorTag = "[object Error]";
	var funcTag = "[object Function]";
	var mapTag = "[object Map]";
	var numberTag = "[object Number]";
	var objectTag = "[object Object]";
	var regexpTag = "[object RegExp]";
	var setTag = "[object Set]";
	var stringTag = "[object String]";
	var weakMapTag = "[object WeakMap]";
	var arrayBufferTag = "[object ArrayBuffer]";
	var dataViewTag = "[object DataView]";
	var float32Tag = "[object Float32Array]";
	var float64Tag = "[object Float64Array]";
	var int8Tag = "[object Int8Array]";
	var int16Tag = "[object Int16Array]";
	var int32Tag = "[object Int32Array]";
	var uint8Tag = "[object Uint8Array]";
	var uint8ClampedTag = "[object Uint8ClampedArray]";
	var uint16Tag = "[object Uint16Array]";
	var uint32Tag = "[object Uint32Array]";
	/** Used to identify `toStringTag` values of typed arrays. */
	var typedArrayTags = {};
	typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
	typedArrayTags[argsTag] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag] = typedArrayTags[mapTag] = typedArrayTags[numberTag] = typedArrayTags[objectTag] = typedArrayTags[regexpTag] = typedArrayTags[setTag] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;
	/**
	* The base implementation of `_.isTypedArray` without Node.js optimizations.
	*
	* @private
	* @param {*} value The value to check.
	* @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
	*/
	function baseIsTypedArray(value) {
		return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
	}
	module.exports = baseIsTypedArray;
}));
//#endregion
//#region node_modules/lodash/_baseUnary.js
var require__baseUnary = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	/**
	* The base implementation of `_.unary` without support for storing metadata.
	*
	* @private
	* @param {Function} func The function to cap arguments for.
	* @returns {Function} Returns the new capped function.
	*/
	function baseUnary(func) {
		return function(value) {
			return func(value);
		};
	}
	module.exports = baseUnary;
}));
//#endregion
//#region node_modules/lodash/_nodeUtil.js
var require__nodeUtil = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var freeGlobal = require__freeGlobal();
	/** Detect free variable `exports`. */
	var freeExports = typeof exports == "object" && exports && !exports.nodeType && exports;
	/** Detect free variable `module`. */
	var freeModule = freeExports && typeof module == "object" && module && !module.nodeType && module;
	/** Detect free variable `process` from Node.js. */
	var freeProcess = freeModule && freeModule.exports === freeExports && freeGlobal.process;
	module.exports = function() {
		try {
			var types = freeModule && freeModule.require && freeModule.require("util").types;
			if (types) return types;
			return freeProcess && freeProcess.binding && freeProcess.binding("util");
		} catch (e) {}
	}();
}));
//#endregion
//#region node_modules/lodash/isTypedArray.js
var require_isTypedArray = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var baseIsTypedArray = require__baseIsTypedArray();
	var baseUnary = require__baseUnary();
	var nodeUtil = require__nodeUtil();
	var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;
	module.exports = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;
}));
//#endregion
//#region node_modules/lodash/_arrayLikeKeys.js
var require__arrayLikeKeys = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var baseTimes = require__baseTimes();
	var isArguments = require_isArguments();
	var isArray = require_isArray();
	var isBuffer = require_isBuffer();
	var isIndex = require__isIndex();
	var isTypedArray = require_isTypedArray();
	/** Used to check objects for own properties. */
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	/**
	* Creates an array of the enumerable property names of the array-like `value`.
	*
	* @private
	* @param {*} value The value to query.
	* @param {boolean} inherited Specify returning inherited property names.
	* @returns {Array} Returns the array of property names.
	*/
	function arrayLikeKeys(value, inherited) {
		var isArr = isArray(value), isArg = !isArr && isArguments(value), isBuff = !isArr && !isArg && isBuffer(value), isType = !isArr && !isArg && !isBuff && isTypedArray(value), skipIndexes = isArr || isArg || isBuff || isType, result = skipIndexes ? baseTimes(value.length, String) : [], length = result.length;
		for (var key in value) if ((inherited || hasOwnProperty.call(value, key)) && !(skipIndexes && (key == "length" || isBuff && (key == "offset" || key == "parent") || isType && (key == "buffer" || key == "byteLength" || key == "byteOffset") || isIndex(key, length)))) result.push(key);
		return result;
	}
	module.exports = arrayLikeKeys;
}));
//#endregion
//#region node_modules/lodash/_isPrototype.js
var require__isPrototype = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	/**
	* Checks if `value` is likely a prototype object.
	*
	* @private
	* @param {*} value The value to check.
	* @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
	*/
	function isPrototype(value) {
		var Ctor = value && value.constructor;
		return value === (typeof Ctor == "function" && Ctor.prototype || objectProto);
	}
	module.exports = isPrototype;
}));
//#endregion
//#region node_modules/lodash/_overArg.js
var require__overArg = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	/**
	* Creates a unary function that invokes `func` with its argument transformed.
	*
	* @private
	* @param {Function} func The function to wrap.
	* @param {Function} transform The argument transform.
	* @returns {Function} Returns the new function.
	*/
	function overArg(func, transform) {
		return function(arg) {
			return func(transform(arg));
		};
	}
	module.exports = overArg;
}));
//#endregion
//#region node_modules/lodash/_nativeKeys.js
var require__nativeKeys = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = require__overArg()(Object.keys, Object);
}));
//#endregion
//#region node_modules/lodash/_baseKeys.js
var require__baseKeys = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var isPrototype = require__isPrototype();
	var nativeKeys = require__nativeKeys();
	/** Used to check objects for own properties. */
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	/**
	* The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
	*
	* @private
	* @param {Object} object The object to query.
	* @returns {Array} Returns the array of property names.
	*/
	function baseKeys(object) {
		if (!isPrototype(object)) return nativeKeys(object);
		var result = [];
		for (var key in Object(object)) if (hasOwnProperty.call(object, key) && key != "constructor") result.push(key);
		return result;
	}
	module.exports = baseKeys;
}));
//#endregion
//#region node_modules/lodash/isArrayLike.js
var require_isArrayLike = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var isFunction = require_isFunction();
	var isLength = require_isLength();
	/**
	* Checks if `value` is array-like. A value is considered array-like if it's
	* not a function and has a `value.length` that's an integer greater than or
	* equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
	*
	* @static
	* @memberOf _
	* @since 4.0.0
	* @category Lang
	* @param {*} value The value to check.
	* @returns {boolean} Returns `true` if `value` is array-like, else `false`.
	* @example
	*
	* _.isArrayLike([1, 2, 3]);
	* // => true
	*
	* _.isArrayLike(document.body.children);
	* // => true
	*
	* _.isArrayLike('abc');
	* // => true
	*
	* _.isArrayLike(_.noop);
	* // => false
	*/
	function isArrayLike(value) {
		return value != null && isLength(value.length) && !isFunction(value);
	}
	module.exports = isArrayLike;
}));
//#endregion
//#region node_modules/lodash/keys.js
var require_keys$1 = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var arrayLikeKeys = require__arrayLikeKeys();
	var baseKeys = require__baseKeys();
	var isArrayLike = require_isArrayLike();
	/**
	* Creates an array of the own enumerable property names of `object`.
	*
	* **Note:** Non-object values are coerced to objects. See the
	* [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
	* for more details.
	*
	* @static
	* @since 0.1.0
	* @memberOf _
	* @category Object
	* @param {Object} object The object to query.
	* @returns {Array} Returns the array of property names.
	* @example
	*
	* function Foo() {
	*   this.a = 1;
	*   this.b = 2;
	* }
	*
	* Foo.prototype.c = 3;
	*
	* _.keys(new Foo);
	* // => ['a', 'b'] (iteration order is not guaranteed)
	*
	* _.keys('hi');
	* // => ['0', '1']
	*/
	function keys(object) {
		return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
	}
	module.exports = keys;
}));
//#endregion
//#region node_modules/lodash/_baseAssign.js
var require__baseAssign = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var copyObject = require__copyObject();
	var keys = require_keys$1();
	/**
	* The base implementation of `_.assign` without support for multiple sources
	* or `customizer` functions.
	*
	* @private
	* @param {Object} object The destination object.
	* @param {Object} source The source object.
	* @returns {Object} Returns `object`.
	*/
	function baseAssign(object, source) {
		return object && copyObject(source, keys(source), object);
	}
	module.exports = baseAssign;
}));
//#endregion
//#region node_modules/lodash/_listCacheClear.js
var require__listCacheClear = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	/**
	* Removes all key-value entries from the list cache.
	*
	* @private
	* @name clear
	* @memberOf ListCache
	*/
	function listCacheClear() {
		this.__data__ = [];
		this.size = 0;
	}
	module.exports = listCacheClear;
}));
//#endregion
//#region node_modules/lodash/_assocIndexOf.js
var require__assocIndexOf = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var eq = require_eq();
	/**
	* Gets the index at which the `key` is found in `array` of key-value pairs.
	*
	* @private
	* @param {Array} array The array to inspect.
	* @param {*} key The key to search for.
	* @returns {number} Returns the index of the matched value, else `-1`.
	*/
	function assocIndexOf(array, key) {
		var length = array.length;
		while (length--) if (eq(array[length][0], key)) return length;
		return -1;
	}
	module.exports = assocIndexOf;
}));
//#endregion
//#region node_modules/lodash/_listCacheDelete.js
var require__listCacheDelete = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var assocIndexOf = require__assocIndexOf();
	/** Built-in value references. */
	var splice = Array.prototype.splice;
	/**
	* Removes `key` and its value from the list cache.
	*
	* @private
	* @name delete
	* @memberOf ListCache
	* @param {string} key The key of the value to remove.
	* @returns {boolean} Returns `true` if the entry was removed, else `false`.
	*/
	function listCacheDelete(key) {
		var data = this.__data__, index = assocIndexOf(data, key);
		if (index < 0) return false;
		if (index == data.length - 1) data.pop();
		else splice.call(data, index, 1);
		--this.size;
		return true;
	}
	module.exports = listCacheDelete;
}));
//#endregion
//#region node_modules/lodash/_listCacheGet.js
var require__listCacheGet = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var assocIndexOf = require__assocIndexOf();
	/**
	* Gets the list cache value for `key`.
	*
	* @private
	* @name get
	* @memberOf ListCache
	* @param {string} key The key of the value to get.
	* @returns {*} Returns the entry value.
	*/
	function listCacheGet(key) {
		var data = this.__data__, index = assocIndexOf(data, key);
		return index < 0 ? void 0 : data[index][1];
	}
	module.exports = listCacheGet;
}));
//#endregion
//#region node_modules/lodash/_listCacheHas.js
var require__listCacheHas = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var assocIndexOf = require__assocIndexOf();
	/**
	* Checks if a list cache value for `key` exists.
	*
	* @private
	* @name has
	* @memberOf ListCache
	* @param {string} key The key of the entry to check.
	* @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	*/
	function listCacheHas(key) {
		return assocIndexOf(this.__data__, key) > -1;
	}
	module.exports = listCacheHas;
}));
//#endregion
//#region node_modules/lodash/_listCacheSet.js
var require__listCacheSet = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var assocIndexOf = require__assocIndexOf();
	/**
	* Sets the list cache `key` to `value`.
	*
	* @private
	* @name set
	* @memberOf ListCache
	* @param {string} key The key of the value to set.
	* @param {*} value The value to set.
	* @returns {Object} Returns the list cache instance.
	*/
	function listCacheSet(key, value) {
		var data = this.__data__, index = assocIndexOf(data, key);
		if (index < 0) {
			++this.size;
			data.push([key, value]);
		} else data[index][1] = value;
		return this;
	}
	module.exports = listCacheSet;
}));
//#endregion
//#region node_modules/lodash/_ListCache.js
var require__ListCache = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var listCacheClear = require__listCacheClear();
	var listCacheDelete = require__listCacheDelete();
	var listCacheGet = require__listCacheGet();
	var listCacheHas = require__listCacheHas();
	var listCacheSet = require__listCacheSet();
	/**
	* Creates an list cache object.
	*
	* @private
	* @constructor
	* @param {Array} [entries] The key-value pairs to cache.
	*/
	function ListCache(entries) {
		var index = -1, length = entries == null ? 0 : entries.length;
		this.clear();
		while (++index < length) {
			var entry = entries[index];
			this.set(entry[0], entry[1]);
		}
	}
	ListCache.prototype.clear = listCacheClear;
	ListCache.prototype["delete"] = listCacheDelete;
	ListCache.prototype.get = listCacheGet;
	ListCache.prototype.has = listCacheHas;
	ListCache.prototype.set = listCacheSet;
	module.exports = ListCache;
}));
//#endregion
//#region node_modules/lodash/_stackClear.js
var require__stackClear = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var ListCache = require__ListCache();
	/**
	* Removes all key-value entries from the stack.
	*
	* @private
	* @name clear
	* @memberOf Stack
	*/
	function stackClear() {
		this.__data__ = new ListCache();
		this.size = 0;
	}
	module.exports = stackClear;
}));
//#endregion
//#region node_modules/lodash/_stackDelete.js
var require__stackDelete = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	/**
	* Removes `key` and its value from the stack.
	*
	* @private
	* @name delete
	* @memberOf Stack
	* @param {string} key The key of the value to remove.
	* @returns {boolean} Returns `true` if the entry was removed, else `false`.
	*/
	function stackDelete(key) {
		var data = this.__data__, result = data["delete"](key);
		this.size = data.size;
		return result;
	}
	module.exports = stackDelete;
}));
//#endregion
//#region node_modules/lodash/_stackGet.js
var require__stackGet = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	/**
	* Gets the stack value for `key`.
	*
	* @private
	* @name get
	* @memberOf Stack
	* @param {string} key The key of the value to get.
	* @returns {*} Returns the entry value.
	*/
	function stackGet(key) {
		return this.__data__.get(key);
	}
	module.exports = stackGet;
}));
//#endregion
//#region node_modules/lodash/_stackHas.js
var require__stackHas = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	/**
	* Checks if a stack value for `key` exists.
	*
	* @private
	* @name has
	* @memberOf Stack
	* @param {string} key The key of the entry to check.
	* @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	*/
	function stackHas(key) {
		return this.__data__.has(key);
	}
	module.exports = stackHas;
}));
//#endregion
//#region node_modules/lodash/_Map.js
var require__Map = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = require__getNative()(require__root(), "Map");
}));
//#endregion
//#region node_modules/lodash/_nativeCreate.js
var require__nativeCreate = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = require__getNative()(Object, "create");
}));
//#endregion
//#region node_modules/lodash/_hashClear.js
var require__hashClear = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var nativeCreate = require__nativeCreate();
	/**
	* Removes all key-value entries from the hash.
	*
	* @private
	* @name clear
	* @memberOf Hash
	*/
	function hashClear() {
		this.__data__ = nativeCreate ? nativeCreate(null) : {};
		this.size = 0;
	}
	module.exports = hashClear;
}));
//#endregion
//#region node_modules/lodash/_hashDelete.js
var require__hashDelete = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	/**
	* Removes `key` and its value from the hash.
	*
	* @private
	* @name delete
	* @memberOf Hash
	* @param {Object} hash The hash to modify.
	* @param {string} key The key of the value to remove.
	* @returns {boolean} Returns `true` if the entry was removed, else `false`.
	*/
	function hashDelete(key) {
		var result = this.has(key) && delete this.__data__[key];
		this.size -= result ? 1 : 0;
		return result;
	}
	module.exports = hashDelete;
}));
//#endregion
//#region node_modules/lodash/_hashGet.js
var require__hashGet = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var nativeCreate = require__nativeCreate();
	/** Used to stand-in for `undefined` hash values. */
	var HASH_UNDEFINED = "__lodash_hash_undefined__";
	/** Used to check objects for own properties. */
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	/**
	* Gets the hash value for `key`.
	*
	* @private
	* @name get
	* @memberOf Hash
	* @param {string} key The key of the value to get.
	* @returns {*} Returns the entry value.
	*/
	function hashGet(key) {
		var data = this.__data__;
		if (nativeCreate) {
			var result = data[key];
			return result === HASH_UNDEFINED ? void 0 : result;
		}
		return hasOwnProperty.call(data, key) ? data[key] : void 0;
	}
	module.exports = hashGet;
}));
//#endregion
//#region node_modules/lodash/_hashHas.js
var require__hashHas = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var nativeCreate = require__nativeCreate();
	/** Used to check objects for own properties. */
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	/**
	* Checks if a hash value for `key` exists.
	*
	* @private
	* @name has
	* @memberOf Hash
	* @param {string} key The key of the entry to check.
	* @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	*/
	function hashHas(key) {
		var data = this.__data__;
		return nativeCreate ? data[key] !== void 0 : hasOwnProperty.call(data, key);
	}
	module.exports = hashHas;
}));
//#endregion
//#region node_modules/lodash/_hashSet.js
var require__hashSet = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var nativeCreate = require__nativeCreate();
	/** Used to stand-in for `undefined` hash values. */
	var HASH_UNDEFINED = "__lodash_hash_undefined__";
	/**
	* Sets the hash `key` to `value`.
	*
	* @private
	* @name set
	* @memberOf Hash
	* @param {string} key The key of the value to set.
	* @param {*} value The value to set.
	* @returns {Object} Returns the hash instance.
	*/
	function hashSet(key, value) {
		var data = this.__data__;
		this.size += this.has(key) ? 0 : 1;
		data[key] = nativeCreate && value === void 0 ? HASH_UNDEFINED : value;
		return this;
	}
	module.exports = hashSet;
}));
//#endregion
//#region node_modules/lodash/_Hash.js
var require__Hash = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var hashClear = require__hashClear();
	var hashDelete = require__hashDelete();
	var hashGet = require__hashGet();
	var hashHas = require__hashHas();
	var hashSet = require__hashSet();
	/**
	* Creates a hash object.
	*
	* @private
	* @constructor
	* @param {Array} [entries] The key-value pairs to cache.
	*/
	function Hash(entries) {
		var index = -1, length = entries == null ? 0 : entries.length;
		this.clear();
		while (++index < length) {
			var entry = entries[index];
			this.set(entry[0], entry[1]);
		}
	}
	Hash.prototype.clear = hashClear;
	Hash.prototype["delete"] = hashDelete;
	Hash.prototype.get = hashGet;
	Hash.prototype.has = hashHas;
	Hash.prototype.set = hashSet;
	module.exports = Hash;
}));
//#endregion
//#region node_modules/lodash/_mapCacheClear.js
var require__mapCacheClear = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var Hash = require__Hash();
	var ListCache = require__ListCache();
	var Map = require__Map();
	/**
	* Removes all key-value entries from the map.
	*
	* @private
	* @name clear
	* @memberOf MapCache
	*/
	function mapCacheClear() {
		this.size = 0;
		this.__data__ = {
			"hash": new Hash(),
			"map": new (Map || ListCache)(),
			"string": new Hash()
		};
	}
	module.exports = mapCacheClear;
}));
//#endregion
//#region node_modules/lodash/_isKeyable.js
var require__isKeyable = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	/**
	* Checks if `value` is suitable for use as unique object key.
	*
	* @private
	* @param {*} value The value to check.
	* @returns {boolean} Returns `true` if `value` is suitable, else `false`.
	*/
	function isKeyable(value) {
		var type = typeof value;
		return type == "string" || type == "number" || type == "symbol" || type == "boolean" ? value !== "__proto__" : value === null;
	}
	module.exports = isKeyable;
}));
//#endregion
//#region node_modules/lodash/_getMapData.js
var require__getMapData = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var isKeyable = require__isKeyable();
	/**
	* Gets the data for `map`.
	*
	* @private
	* @param {Object} map The map to query.
	* @param {string} key The reference key.
	* @returns {*} Returns the map data.
	*/
	function getMapData(map, key) {
		var data = map.__data__;
		return isKeyable(key) ? data[typeof key == "string" ? "string" : "hash"] : data.map;
	}
	module.exports = getMapData;
}));
//#endregion
//#region node_modules/lodash/_mapCacheDelete.js
var require__mapCacheDelete = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var getMapData = require__getMapData();
	/**
	* Removes `key` and its value from the map.
	*
	* @private
	* @name delete
	* @memberOf MapCache
	* @param {string} key The key of the value to remove.
	* @returns {boolean} Returns `true` if the entry was removed, else `false`.
	*/
	function mapCacheDelete(key) {
		var result = getMapData(this, key)["delete"](key);
		this.size -= result ? 1 : 0;
		return result;
	}
	module.exports = mapCacheDelete;
}));
//#endregion
//#region node_modules/lodash/_mapCacheGet.js
var require__mapCacheGet = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var getMapData = require__getMapData();
	/**
	* Gets the map value for `key`.
	*
	* @private
	* @name get
	* @memberOf MapCache
	* @param {string} key The key of the value to get.
	* @returns {*} Returns the entry value.
	*/
	function mapCacheGet(key) {
		return getMapData(this, key).get(key);
	}
	module.exports = mapCacheGet;
}));
//#endregion
//#region node_modules/lodash/_mapCacheHas.js
var require__mapCacheHas = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var getMapData = require__getMapData();
	/**
	* Checks if a map value for `key` exists.
	*
	* @private
	* @name has
	* @memberOf MapCache
	* @param {string} key The key of the entry to check.
	* @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	*/
	function mapCacheHas(key) {
		return getMapData(this, key).has(key);
	}
	module.exports = mapCacheHas;
}));
//#endregion
//#region node_modules/lodash/_mapCacheSet.js
var require__mapCacheSet = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var getMapData = require__getMapData();
	/**
	* Sets the map `key` to `value`.
	*
	* @private
	* @name set
	* @memberOf MapCache
	* @param {string} key The key of the value to set.
	* @param {*} value The value to set.
	* @returns {Object} Returns the map cache instance.
	*/
	function mapCacheSet(key, value) {
		var data = getMapData(this, key), size = data.size;
		data.set(key, value);
		this.size += data.size == size ? 0 : 1;
		return this;
	}
	module.exports = mapCacheSet;
}));
//#endregion
//#region node_modules/lodash/_MapCache.js
var require__MapCache = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var mapCacheClear = require__mapCacheClear();
	var mapCacheDelete = require__mapCacheDelete();
	var mapCacheGet = require__mapCacheGet();
	var mapCacheHas = require__mapCacheHas();
	var mapCacheSet = require__mapCacheSet();
	/**
	* Creates a map cache object to store key-value pairs.
	*
	* @private
	* @constructor
	* @param {Array} [entries] The key-value pairs to cache.
	*/
	function MapCache(entries) {
		var index = -1, length = entries == null ? 0 : entries.length;
		this.clear();
		while (++index < length) {
			var entry = entries[index];
			this.set(entry[0], entry[1]);
		}
	}
	MapCache.prototype.clear = mapCacheClear;
	MapCache.prototype["delete"] = mapCacheDelete;
	MapCache.prototype.get = mapCacheGet;
	MapCache.prototype.has = mapCacheHas;
	MapCache.prototype.set = mapCacheSet;
	module.exports = MapCache;
}));
//#endregion
//#region node_modules/lodash/_stackSet.js
var require__stackSet = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var ListCache = require__ListCache();
	var Map = require__Map();
	var MapCache = require__MapCache();
	/** Used as the size to enable large array optimizations. */
	var LARGE_ARRAY_SIZE = 200;
	/**
	* Sets the stack `key` to `value`.
	*
	* @private
	* @name set
	* @memberOf Stack
	* @param {string} key The key of the value to set.
	* @param {*} value The value to set.
	* @returns {Object} Returns the stack cache instance.
	*/
	function stackSet(key, value) {
		var data = this.__data__;
		if (data instanceof ListCache) {
			var pairs = data.__data__;
			if (!Map || pairs.length < LARGE_ARRAY_SIZE - 1) {
				pairs.push([key, value]);
				this.size = ++data.size;
				return this;
			}
			data = this.__data__ = new MapCache(pairs);
		}
		data.set(key, value);
		this.size = data.size;
		return this;
	}
	module.exports = stackSet;
}));
//#endregion
//#region node_modules/lodash/_Stack.js
var require__Stack = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var ListCache = require__ListCache();
	var stackClear = require__stackClear();
	var stackDelete = require__stackDelete();
	var stackGet = require__stackGet();
	var stackHas = require__stackHas();
	var stackSet = require__stackSet();
	/**
	* Creates a stack cache object to store key-value pairs.
	*
	* @private
	* @constructor
	* @param {Array} [entries] The key-value pairs to cache.
	*/
	function Stack(entries) {
		var data = this.__data__ = new ListCache(entries);
		this.size = data.size;
	}
	Stack.prototype.clear = stackClear;
	Stack.prototype["delete"] = stackDelete;
	Stack.prototype.get = stackGet;
	Stack.prototype.has = stackHas;
	Stack.prototype.set = stackSet;
	module.exports = Stack;
}));
//#endregion
//#region node_modules/lodash/_nativeKeysIn.js
var require__nativeKeysIn = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	/**
	* This function is like
	* [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
	* except that it includes inherited enumerable properties.
	*
	* @private
	* @param {Object} object The object to query.
	* @returns {Array} Returns the array of property names.
	*/
	function nativeKeysIn(object) {
		var result = [];
		if (object != null) for (var key in Object(object)) result.push(key);
		return result;
	}
	module.exports = nativeKeysIn;
}));
//#endregion
//#region node_modules/lodash/_baseKeysIn.js
var require__baseKeysIn = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var isObject = require_isObject();
	var isPrototype = require__isPrototype();
	var nativeKeysIn = require__nativeKeysIn();
	/** Used to check objects for own properties. */
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	/**
	* The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
	*
	* @private
	* @param {Object} object The object to query.
	* @returns {Array} Returns the array of property names.
	*/
	function baseKeysIn(object) {
		if (!isObject(object)) return nativeKeysIn(object);
		var isProto = isPrototype(object), result = [];
		for (var key in object) if (!(key == "constructor" && (isProto || !hasOwnProperty.call(object, key)))) result.push(key);
		return result;
	}
	module.exports = baseKeysIn;
}));
//#endregion
//#region node_modules/lodash/keysIn.js
var require_keysIn = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var arrayLikeKeys = require__arrayLikeKeys();
	var baseKeysIn = require__baseKeysIn();
	var isArrayLike = require_isArrayLike();
	/**
	* Creates an array of the own and inherited enumerable property names of `object`.
	*
	* **Note:** Non-object values are coerced to objects.
	*
	* @static
	* @memberOf _
	* @since 3.0.0
	* @category Object
	* @param {Object} object The object to query.
	* @returns {Array} Returns the array of property names.
	* @example
	*
	* function Foo() {
	*   this.a = 1;
	*   this.b = 2;
	* }
	*
	* Foo.prototype.c = 3;
	*
	* _.keysIn(new Foo);
	* // => ['a', 'b', 'c'] (iteration order is not guaranteed)
	*/
	function keysIn(object) {
		return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
	}
	module.exports = keysIn;
}));
//#endregion
//#region node_modules/lodash/_baseAssignIn.js
var require__baseAssignIn = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var copyObject = require__copyObject();
	var keysIn = require_keysIn();
	/**
	* The base implementation of `_.assignIn` without support for multiple sources
	* or `customizer` functions.
	*
	* @private
	* @param {Object} object The destination object.
	* @param {Object} source The source object.
	* @returns {Object} Returns `object`.
	*/
	function baseAssignIn(object, source) {
		return object && copyObject(source, keysIn(source), object);
	}
	module.exports = baseAssignIn;
}));
//#endregion
//#region node_modules/lodash/_cloneBuffer.js
var require__cloneBuffer = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var root = require__root();
	/** Detect free variable `exports`. */
	var freeExports = typeof exports == "object" && exports && !exports.nodeType && exports;
	/** Detect free variable `module`. */
	var freeModule = freeExports && typeof module == "object" && module && !module.nodeType && module;
	/** Built-in value references. */
	var Buffer = freeModule && freeModule.exports === freeExports ? root.Buffer : void 0;
	var allocUnsafe = Buffer ? Buffer.allocUnsafe : void 0;
	/**
	* Creates a clone of  `buffer`.
	*
	* @private
	* @param {Buffer} buffer The buffer to clone.
	* @param {boolean} [isDeep] Specify a deep clone.
	* @returns {Buffer} Returns the cloned buffer.
	*/
	function cloneBuffer(buffer, isDeep) {
		if (isDeep) return buffer.slice();
		var length = buffer.length, result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);
		buffer.copy(result);
		return result;
	}
	module.exports = cloneBuffer;
}));
//#endregion
//#region node_modules/lodash/_arrayFilter.js
var require__arrayFilter = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	/**
	* A specialized version of `_.filter` for arrays without support for
	* iteratee shorthands.
	*
	* @private
	* @param {Array} [array] The array to iterate over.
	* @param {Function} predicate The function invoked per iteration.
	* @returns {Array} Returns the new filtered array.
	*/
	function arrayFilter(array, predicate) {
		var index = -1, length = array == null ? 0 : array.length, resIndex = 0, result = [];
		while (++index < length) {
			var value = array[index];
			if (predicate(value, index, array)) result[resIndex++] = value;
		}
		return result;
	}
	module.exports = arrayFilter;
}));
//#endregion
//#region node_modules/lodash/stubArray.js
var require_stubArray = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	/**
	* This method returns a new empty array.
	*
	* @static
	* @memberOf _
	* @since 4.13.0
	* @category Util
	* @returns {Array} Returns the new empty array.
	* @example
	*
	* var arrays = _.times(2, _.stubArray);
	*
	* console.log(arrays);
	* // => [[], []]
	*
	* console.log(arrays[0] === arrays[1]);
	* // => false
	*/
	function stubArray() {
		return [];
	}
	module.exports = stubArray;
}));
//#endregion
//#region node_modules/lodash/_getSymbols.js
var require__getSymbols = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var arrayFilter = require__arrayFilter();
	var stubArray = require_stubArray();
	/** Built-in value references. */
	var propertyIsEnumerable = Object.prototype.propertyIsEnumerable;
	var nativeGetSymbols = Object.getOwnPropertySymbols;
	module.exports = !nativeGetSymbols ? stubArray : function(object) {
		if (object == null) return [];
		object = Object(object);
		return arrayFilter(nativeGetSymbols(object), function(symbol) {
			return propertyIsEnumerable.call(object, symbol);
		});
	};
}));
//#endregion
//#region node_modules/lodash/_copySymbols.js
var require__copySymbols = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var copyObject = require__copyObject();
	var getSymbols = require__getSymbols();
	/**
	* Copies own symbols of `source` to `object`.
	*
	* @private
	* @param {Object} source The object to copy symbols from.
	* @param {Object} [object={}] The object to copy symbols to.
	* @returns {Object} Returns `object`.
	*/
	function copySymbols(source, object) {
		return copyObject(source, getSymbols(source), object);
	}
	module.exports = copySymbols;
}));
//#endregion
//#region node_modules/lodash/_arrayPush.js
var require__arrayPush = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	/**
	* Appends the elements of `values` to `array`.
	*
	* @private
	* @param {Array} array The array to modify.
	* @param {Array} values The values to append.
	* @returns {Array} Returns `array`.
	*/
	function arrayPush(array, values) {
		var index = -1, length = values.length, offset = array.length;
		while (++index < length) array[offset + index] = values[index];
		return array;
	}
	module.exports = arrayPush;
}));
//#endregion
//#region node_modules/lodash/_getPrototype.js
var require__getPrototype = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = require__overArg()(Object.getPrototypeOf, Object);
}));
//#endregion
//#region node_modules/lodash/_getSymbolsIn.js
var require__getSymbolsIn = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var arrayPush = require__arrayPush();
	var getPrototype = require__getPrototype();
	var getSymbols = require__getSymbols();
	var stubArray = require_stubArray();
	module.exports = !Object.getOwnPropertySymbols ? stubArray : function(object) {
		var result = [];
		while (object) {
			arrayPush(result, getSymbols(object));
			object = getPrototype(object);
		}
		return result;
	};
}));
//#endregion
//#region node_modules/lodash/_copySymbolsIn.js
var require__copySymbolsIn = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var copyObject = require__copyObject();
	var getSymbolsIn = require__getSymbolsIn();
	/**
	* Copies own and inherited symbols of `source` to `object`.
	*
	* @private
	* @param {Object} source The object to copy symbols from.
	* @param {Object} [object={}] The object to copy symbols to.
	* @returns {Object} Returns `object`.
	*/
	function copySymbolsIn(source, object) {
		return copyObject(source, getSymbolsIn(source), object);
	}
	module.exports = copySymbolsIn;
}));
//#endregion
//#region node_modules/lodash/_baseGetAllKeys.js
var require__baseGetAllKeys = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var arrayPush = require__arrayPush();
	var isArray = require_isArray();
	/**
	* The base implementation of `getAllKeys` and `getAllKeysIn` which uses
	* `keysFunc` and `symbolsFunc` to get the enumerable property names and
	* symbols of `object`.
	*
	* @private
	* @param {Object} object The object to query.
	* @param {Function} keysFunc The function to get the keys of `object`.
	* @param {Function} symbolsFunc The function to get the symbols of `object`.
	* @returns {Array} Returns the array of property names and symbols.
	*/
	function baseGetAllKeys(object, keysFunc, symbolsFunc) {
		var result = keysFunc(object);
		return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
	}
	module.exports = baseGetAllKeys;
}));
//#endregion
//#region node_modules/lodash/_getAllKeys.js
var require__getAllKeys = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var baseGetAllKeys = require__baseGetAllKeys();
	var getSymbols = require__getSymbols();
	var keys = require_keys$1();
	/**
	* Creates an array of own enumerable property names and symbols of `object`.
	*
	* @private
	* @param {Object} object The object to query.
	* @returns {Array} Returns the array of property names and symbols.
	*/
	function getAllKeys(object) {
		return baseGetAllKeys(object, keys, getSymbols);
	}
	module.exports = getAllKeys;
}));
//#endregion
//#region node_modules/lodash/_getAllKeysIn.js
var require__getAllKeysIn = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var baseGetAllKeys = require__baseGetAllKeys();
	var getSymbolsIn = require__getSymbolsIn();
	var keysIn = require_keysIn();
	/**
	* Creates an array of own and inherited enumerable property names and
	* symbols of `object`.
	*
	* @private
	* @param {Object} object The object to query.
	* @returns {Array} Returns the array of property names and symbols.
	*/
	function getAllKeysIn(object) {
		return baseGetAllKeys(object, keysIn, getSymbolsIn);
	}
	module.exports = getAllKeysIn;
}));
//#endregion
//#region node_modules/lodash/_DataView.js
var require__DataView = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = require__getNative()(require__root(), "DataView");
}));
//#endregion
//#region node_modules/lodash/_Promise.js
var require__Promise = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = require__getNative()(require__root(), "Promise");
}));
//#endregion
//#region node_modules/lodash/_Set.js
var require__Set = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = require__getNative()(require__root(), "Set");
}));
//#endregion
//#region node_modules/lodash/_getTag.js
var require__getTag = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var DataView = require__DataView();
	var Map = require__Map();
	var Promise = require__Promise();
	var Set = require__Set();
	var WeakMap = require__WeakMap();
	var baseGetTag = require__baseGetTag();
	var toSource = require__toSource();
	/** `Object#toString` result references. */
	var mapTag = "[object Map]";
	var objectTag = "[object Object]";
	var promiseTag = "[object Promise]";
	var setTag = "[object Set]";
	var weakMapTag = "[object WeakMap]";
	var dataViewTag = "[object DataView]";
	/** Used to detect maps, sets, and weakmaps. */
	var dataViewCtorString = toSource(DataView);
	var mapCtorString = toSource(Map);
	var promiseCtorString = toSource(Promise);
	var setCtorString = toSource(Set);
	var weakMapCtorString = toSource(WeakMap);
	/**
	* Gets the `toStringTag` of `value`.
	*
	* @private
	* @param {*} value The value to query.
	* @returns {string} Returns the `toStringTag`.
	*/
	var getTag = baseGetTag;
	if (DataView && getTag(new DataView(/* @__PURE__ */ new ArrayBuffer(1))) != dataViewTag || Map && getTag(new Map()) != mapTag || Promise && getTag(Promise.resolve()) != promiseTag || Set && getTag(new Set()) != setTag || WeakMap && getTag(new WeakMap()) != weakMapTag) getTag = function(value) {
		var result = baseGetTag(value), Ctor = result == objectTag ? value.constructor : void 0, ctorString = Ctor ? toSource(Ctor) : "";
		if (ctorString) switch (ctorString) {
			case dataViewCtorString: return dataViewTag;
			case mapCtorString: return mapTag;
			case promiseCtorString: return promiseTag;
			case setCtorString: return setTag;
			case weakMapCtorString: return weakMapTag;
		}
		return result;
	};
	module.exports = getTag;
}));
//#endregion
//#region node_modules/lodash/_initCloneArray.js
var require__initCloneArray = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	/** Used to check objects for own properties. */
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	/**
	* Initializes an array clone.
	*
	* @private
	* @param {Array} array The array to clone.
	* @returns {Array} Returns the initialized clone.
	*/
	function initCloneArray(array) {
		var length = array.length, result = new array.constructor(length);
		if (length && typeof array[0] == "string" && hasOwnProperty.call(array, "index")) {
			result.index = array.index;
			result.input = array.input;
		}
		return result;
	}
	module.exports = initCloneArray;
}));
//#endregion
//#region node_modules/lodash/_Uint8Array.js
var require__Uint8Array = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = require__root().Uint8Array;
}));
//#endregion
//#region node_modules/lodash/_cloneArrayBuffer.js
var require__cloneArrayBuffer = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var Uint8Array = require__Uint8Array();
	/**
	* Creates a clone of `arrayBuffer`.
	*
	* @private
	* @param {ArrayBuffer} arrayBuffer The array buffer to clone.
	* @returns {ArrayBuffer} Returns the cloned array buffer.
	*/
	function cloneArrayBuffer(arrayBuffer) {
		var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
		new Uint8Array(result).set(new Uint8Array(arrayBuffer));
		return result;
	}
	module.exports = cloneArrayBuffer;
}));
//#endregion
//#region node_modules/lodash/_cloneDataView.js
var require__cloneDataView = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var cloneArrayBuffer = require__cloneArrayBuffer();
	/**
	* Creates a clone of `dataView`.
	*
	* @private
	* @param {Object} dataView The data view to clone.
	* @param {boolean} [isDeep] Specify a deep clone.
	* @returns {Object} Returns the cloned data view.
	*/
	function cloneDataView(dataView, isDeep) {
		var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
		return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
	}
	module.exports = cloneDataView;
}));
//#endregion
//#region node_modules/lodash/_cloneRegExp.js
var require__cloneRegExp = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	/** Used to match `RegExp` flags from their coerced string values. */
	var reFlags = /\w*$/;
	/**
	* Creates a clone of `regexp`.
	*
	* @private
	* @param {Object} regexp The regexp to clone.
	* @returns {Object} Returns the cloned regexp.
	*/
	function cloneRegExp(regexp) {
		var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
		result.lastIndex = regexp.lastIndex;
		return result;
	}
	module.exports = cloneRegExp;
}));
//#endregion
//#region node_modules/lodash/_cloneSymbol.js
var require__cloneSymbol = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var Symbol = require__Symbol();
	/** Used to convert symbols to primitives and strings. */
	var symbolProto = Symbol ? Symbol.prototype : void 0;
	var symbolValueOf = symbolProto ? symbolProto.valueOf : void 0;
	/**
	* Creates a clone of the `symbol` object.
	*
	* @private
	* @param {Object} symbol The symbol object to clone.
	* @returns {Object} Returns the cloned symbol object.
	*/
	function cloneSymbol(symbol) {
		return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
	}
	module.exports = cloneSymbol;
}));
//#endregion
//#region node_modules/lodash/_cloneTypedArray.js
var require__cloneTypedArray = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var cloneArrayBuffer = require__cloneArrayBuffer();
	/**
	* Creates a clone of `typedArray`.
	*
	* @private
	* @param {Object} typedArray The typed array to clone.
	* @param {boolean} [isDeep] Specify a deep clone.
	* @returns {Object} Returns the cloned typed array.
	*/
	function cloneTypedArray(typedArray, isDeep) {
		var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
		return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
	}
	module.exports = cloneTypedArray;
}));
//#endregion
//#region node_modules/lodash/_initCloneByTag.js
var require__initCloneByTag = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var cloneArrayBuffer = require__cloneArrayBuffer();
	var cloneDataView = require__cloneDataView();
	var cloneRegExp = require__cloneRegExp();
	var cloneSymbol = require__cloneSymbol();
	var cloneTypedArray = require__cloneTypedArray();
	/** `Object#toString` result references. */
	var boolTag = "[object Boolean]";
	var dateTag = "[object Date]";
	var mapTag = "[object Map]";
	var numberTag = "[object Number]";
	var regexpTag = "[object RegExp]";
	var setTag = "[object Set]";
	var stringTag = "[object String]";
	var symbolTag = "[object Symbol]";
	var arrayBufferTag = "[object ArrayBuffer]";
	var dataViewTag = "[object DataView]";
	var float32Tag = "[object Float32Array]";
	var float64Tag = "[object Float64Array]";
	var int8Tag = "[object Int8Array]";
	var int16Tag = "[object Int16Array]";
	var int32Tag = "[object Int32Array]";
	var uint8Tag = "[object Uint8Array]";
	var uint8ClampedTag = "[object Uint8ClampedArray]";
	var uint16Tag = "[object Uint16Array]";
	var uint32Tag = "[object Uint32Array]";
	/**
	* Initializes an object clone based on its `toStringTag`.
	*
	* **Note:** This function only supports cloning values with tags of
	* `Boolean`, `Date`, `Error`, `Map`, `Number`, `RegExp`, `Set`, or `String`.
	*
	* @private
	* @param {Object} object The object to clone.
	* @param {string} tag The `toStringTag` of the object to clone.
	* @param {boolean} [isDeep] Specify a deep clone.
	* @returns {Object} Returns the initialized clone.
	*/
	function initCloneByTag(object, tag, isDeep) {
		var Ctor = object.constructor;
		switch (tag) {
			case arrayBufferTag: return cloneArrayBuffer(object);
			case boolTag:
			case dateTag: return new Ctor(+object);
			case dataViewTag: return cloneDataView(object, isDeep);
			case float32Tag:
			case float64Tag:
			case int8Tag:
			case int16Tag:
			case int32Tag:
			case uint8Tag:
			case uint8ClampedTag:
			case uint16Tag:
			case uint32Tag: return cloneTypedArray(object, isDeep);
			case mapTag: return new Ctor();
			case numberTag:
			case stringTag: return new Ctor(object);
			case regexpTag: return cloneRegExp(object);
			case setTag: return new Ctor();
			case symbolTag: return cloneSymbol(object);
		}
	}
	module.exports = initCloneByTag;
}));
//#endregion
//#region node_modules/lodash/_initCloneObject.js
var require__initCloneObject = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var baseCreate = require__baseCreate();
	var getPrototype = require__getPrototype();
	var isPrototype = require__isPrototype();
	/**
	* Initializes an object clone.
	*
	* @private
	* @param {Object} object The object to clone.
	* @returns {Object} Returns the initialized clone.
	*/
	function initCloneObject(object) {
		return typeof object.constructor == "function" && !isPrototype(object) ? baseCreate(getPrototype(object)) : {};
	}
	module.exports = initCloneObject;
}));
//#endregion
//#region node_modules/lodash/_baseIsMap.js
var require__baseIsMap = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var getTag = require__getTag();
	var isObjectLike = require_isObjectLike();
	/** `Object#toString` result references. */
	var mapTag = "[object Map]";
	/**
	* The base implementation of `_.isMap` without Node.js optimizations.
	*
	* @private
	* @param {*} value The value to check.
	* @returns {boolean} Returns `true` if `value` is a map, else `false`.
	*/
	function baseIsMap(value) {
		return isObjectLike(value) && getTag(value) == mapTag;
	}
	module.exports = baseIsMap;
}));
//#endregion
//#region node_modules/lodash/isMap.js
var require_isMap = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var baseIsMap = require__baseIsMap();
	var baseUnary = require__baseUnary();
	var nodeUtil = require__nodeUtil();
	var nodeIsMap = nodeUtil && nodeUtil.isMap;
	module.exports = nodeIsMap ? baseUnary(nodeIsMap) : baseIsMap;
}));
//#endregion
//#region node_modules/lodash/_baseIsSet.js
var require__baseIsSet = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var getTag = require__getTag();
	var isObjectLike = require_isObjectLike();
	/** `Object#toString` result references. */
	var setTag = "[object Set]";
	/**
	* The base implementation of `_.isSet` without Node.js optimizations.
	*
	* @private
	* @param {*} value The value to check.
	* @returns {boolean} Returns `true` if `value` is a set, else `false`.
	*/
	function baseIsSet(value) {
		return isObjectLike(value) && getTag(value) == setTag;
	}
	module.exports = baseIsSet;
}));
//#endregion
//#region node_modules/lodash/isSet.js
var require_isSet = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var baseIsSet = require__baseIsSet();
	var baseUnary = require__baseUnary();
	var nodeUtil = require__nodeUtil();
	var nodeIsSet = nodeUtil && nodeUtil.isSet;
	module.exports = nodeIsSet ? baseUnary(nodeIsSet) : baseIsSet;
}));
//#endregion
//#region node_modules/lodash/_baseClone.js
var require__baseClone = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var Stack = require__Stack();
	var arrayEach = require__arrayEach();
	var assignValue = require__assignValue();
	var baseAssign = require__baseAssign();
	var baseAssignIn = require__baseAssignIn();
	var cloneBuffer = require__cloneBuffer();
	var copyArray = require__copyArray();
	var copySymbols = require__copySymbols();
	var copySymbolsIn = require__copySymbolsIn();
	var getAllKeys = require__getAllKeys();
	var getAllKeysIn = require__getAllKeysIn();
	var getTag = require__getTag();
	var initCloneArray = require__initCloneArray();
	var initCloneByTag = require__initCloneByTag();
	var initCloneObject = require__initCloneObject();
	var isArray = require_isArray();
	var isBuffer = require_isBuffer();
	var isMap = require_isMap();
	var isObject = require_isObject();
	var isSet = require_isSet();
	var keys = require_keys$1();
	var keysIn = require_keysIn();
	/** Used to compose bitmasks for cloning. */
	var CLONE_DEEP_FLAG = 1;
	var CLONE_FLAT_FLAG = 2;
	var CLONE_SYMBOLS_FLAG = 4;
	/** `Object#toString` result references. */
	var argsTag = "[object Arguments]";
	var arrayTag = "[object Array]";
	var boolTag = "[object Boolean]";
	var dateTag = "[object Date]";
	var errorTag = "[object Error]";
	var funcTag = "[object Function]";
	var genTag = "[object GeneratorFunction]";
	var mapTag = "[object Map]";
	var numberTag = "[object Number]";
	var objectTag = "[object Object]";
	var regexpTag = "[object RegExp]";
	var setTag = "[object Set]";
	var stringTag = "[object String]";
	var symbolTag = "[object Symbol]";
	var weakMapTag = "[object WeakMap]";
	var arrayBufferTag = "[object ArrayBuffer]";
	var dataViewTag = "[object DataView]";
	var float32Tag = "[object Float32Array]";
	var float64Tag = "[object Float64Array]";
	var int8Tag = "[object Int8Array]";
	var int16Tag = "[object Int16Array]";
	var int32Tag = "[object Int32Array]";
	var uint8Tag = "[object Uint8Array]";
	var uint8ClampedTag = "[object Uint8ClampedArray]";
	var uint16Tag = "[object Uint16Array]";
	var uint32Tag = "[object Uint32Array]";
	/** Used to identify `toStringTag` values supported by `_.clone`. */
	var cloneableTags = {};
	cloneableTags[argsTag] = cloneableTags[arrayTag] = cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] = cloneableTags[boolTag] = cloneableTags[dateTag] = cloneableTags[float32Tag] = cloneableTags[float64Tag] = cloneableTags[int8Tag] = cloneableTags[int16Tag] = cloneableTags[int32Tag] = cloneableTags[mapTag] = cloneableTags[numberTag] = cloneableTags[objectTag] = cloneableTags[regexpTag] = cloneableTags[setTag] = cloneableTags[stringTag] = cloneableTags[symbolTag] = cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] = cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
	cloneableTags[errorTag] = cloneableTags[funcTag] = cloneableTags[weakMapTag] = false;
	/**
	* The base implementation of `_.clone` and `_.cloneDeep` which tracks
	* traversed objects.
	*
	* @private
	* @param {*} value The value to clone.
	* @param {boolean} bitmask The bitmask flags.
	*  1 - Deep clone
	*  2 - Flatten inherited properties
	*  4 - Clone symbols
	* @param {Function} [customizer] The function to customize cloning.
	* @param {string} [key] The key of `value`.
	* @param {Object} [object] The parent object of `value`.
	* @param {Object} [stack] Tracks traversed objects and their clone counterparts.
	* @returns {*} Returns the cloned value.
	*/
	function baseClone(value, bitmask, customizer, key, object, stack) {
		var result, isDeep = bitmask & CLONE_DEEP_FLAG, isFlat = bitmask & CLONE_FLAT_FLAG, isFull = bitmask & CLONE_SYMBOLS_FLAG;
		if (customizer) result = object ? customizer(value, key, object, stack) : customizer(value);
		if (result !== void 0) return result;
		if (!isObject(value)) return value;
		var isArr = isArray(value);
		if (isArr) {
			result = initCloneArray(value);
			if (!isDeep) return copyArray(value, result);
		} else {
			var tag = getTag(value), isFunc = tag == funcTag || tag == genTag;
			if (isBuffer(value)) return cloneBuffer(value, isDeep);
			if (tag == objectTag || tag == argsTag || isFunc && !object) {
				result = isFlat || isFunc ? {} : initCloneObject(value);
				if (!isDeep) return isFlat ? copySymbolsIn(value, baseAssignIn(result, value)) : copySymbols(value, baseAssign(result, value));
			} else {
				if (!cloneableTags[tag]) return object ? value : {};
				result = initCloneByTag(value, tag, isDeep);
			}
		}
		stack || (stack = new Stack());
		var stacked = stack.get(value);
		if (stacked) return stacked;
		stack.set(value, result);
		if (isSet(value)) value.forEach(function(subValue) {
			result.add(baseClone(subValue, bitmask, customizer, subValue, value, stack));
		});
		else if (isMap(value)) value.forEach(function(subValue, key) {
			result.set(key, baseClone(subValue, bitmask, customizer, key, value, stack));
		});
		var props = isArr ? void 0 : (isFull ? isFlat ? getAllKeysIn : getAllKeys : isFlat ? keysIn : keys)(value);
		arrayEach(props || value, function(subValue, key) {
			if (props) {
				key = subValue;
				subValue = value[key];
			}
			assignValue(result, key, baseClone(subValue, bitmask, customizer, key, value, stack));
		});
		return result;
	}
	module.exports = baseClone;
}));
//#endregion
//#region node_modules/lodash/clone.js
var require_clone = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var baseClone = require__baseClone();
	/** Used to compose bitmasks for cloning. */
	var CLONE_SYMBOLS_FLAG = 4;
	/**
	* Creates a shallow clone of `value`.
	*
	* **Note:** This method is loosely based on the
	* [structured clone algorithm](https://mdn.io/Structured_clone_algorithm)
	* and supports cloning arrays, array buffers, booleans, date objects, maps,
	* numbers, `Object` objects, regexes, sets, strings, symbols, and typed
	* arrays. The own enumerable properties of `arguments` objects are cloned
	* as plain objects. An empty object is returned for uncloneable values such
	* as error objects, functions, DOM nodes, and WeakMaps.
	*
	* @static
	* @memberOf _
	* @since 0.1.0
	* @category Lang
	* @param {*} value The value to clone.
	* @returns {*} Returns the cloned value.
	* @see _.cloneDeep
	* @example
	*
	* var objects = [{ 'a': 1 }, { 'b': 2 }];
	*
	* var shallow = _.clone(objects);
	* console.log(shallow[0] === objects[0]);
	* // => true
	*/
	function clone(value) {
		return baseClone(value, CLONE_SYMBOLS_FLAG);
	}
	module.exports = clone;
}));
//#endregion
//#region node_modules/lodash/curry.js
var require_curry = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var createWrap = require__createWrap();
	/** Used to compose bitmasks for function metadata. */
	var WRAP_CURRY_FLAG = 8;
	/**
	* Creates a function that accepts arguments of `func` and either invokes
	* `func` returning its result, if at least `arity` number of arguments have
	* been provided, or returns a function that accepts the remaining `func`
	* arguments, and so on. The arity of `func` may be specified if `func.length`
	* is not sufficient.
	*
	* The `_.curry.placeholder` value, which defaults to `_` in monolithic builds,
	* may be used as a placeholder for provided arguments.
	*
	* **Note:** This method doesn't set the "length" property of curried functions.
	*
	* @static
	* @memberOf _
	* @since 2.0.0
	* @category Function
	* @param {Function} func The function to curry.
	* @param {number} [arity=func.length] The arity of `func`.
	* @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
	* @returns {Function} Returns the new curried function.
	* @example
	*
	* var abc = function(a, b, c) {
	*   return [a, b, c];
	* };
	*
	* var curried = _.curry(abc);
	*
	* curried(1)(2)(3);
	* // => [1, 2, 3]
	*
	* curried(1, 2)(3);
	* // => [1, 2, 3]
	*
	* curried(1, 2, 3);
	* // => [1, 2, 3]
	*
	* // Curried with placeholders.
	* curried(1)(_, 3)(2);
	* // => [1, 2, 3]
	*/
	function curry(func, arity, guard) {
		arity = guard ? void 0 : arity;
		var result = createWrap(func, WRAP_CURRY_FLAG, void 0, void 0, void 0, void 0, void 0, arity);
		result.placeholder = curry.placeholder;
		return result;
	}
	curry.placeholder = {};
	module.exports = curry;
}));
//#endregion
//#region node_modules/lodash/isPlainObject.js
var require_isPlainObject = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var baseGetTag = require__baseGetTag();
	var getPrototype = require__getPrototype();
	var isObjectLike = require_isObjectLike();
	/** `Object#toString` result references. */
	var objectTag = "[object Object]";
	/** Used for built-in method references. */
	var funcProto = Function.prototype;
	var objectProto = Object.prototype;
	/** Used to resolve the decompiled source of functions. */
	var funcToString = funcProto.toString;
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	/** Used to infer the `Object` constructor. */
	var objectCtorString = funcToString.call(Object);
	/**
	* Checks if `value` is a plain object, that is, an object created by the
	* `Object` constructor or one with a `[[Prototype]]` of `null`.
	*
	* @static
	* @memberOf _
	* @since 0.8.0
	* @category Lang
	* @param {*} value The value to check.
	* @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
	* @example
	*
	* function Foo() {
	*   this.a = 1;
	* }
	*
	* _.isPlainObject(new Foo);
	* // => false
	*
	* _.isPlainObject([1, 2, 3]);
	* // => false
	*
	* _.isPlainObject({ 'x': 0, 'y': 0 });
	* // => true
	*
	* _.isPlainObject(Object.create(null));
	* // => true
	*/
	function isPlainObject(value) {
		if (!isObjectLike(value) || baseGetTag(value) != objectTag) return false;
		var proto = getPrototype(value);
		if (proto === null) return true;
		var Ctor = hasOwnProperty.call(proto, "constructor") && proto.constructor;
		return typeof Ctor == "function" && Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString;
	}
	module.exports = isPlainObject;
}));
//#endregion
//#region node_modules/lodash/isError.js
var require_isError = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var baseGetTag = require__baseGetTag();
	var isObjectLike = require_isObjectLike();
	var isPlainObject = require_isPlainObject();
	/** `Object#toString` result references. */
	var domExcTag = "[object DOMException]";
	var errorTag = "[object Error]";
	/**
	* Checks if `value` is an `Error`, `EvalError`, `RangeError`, `ReferenceError`,
	* `SyntaxError`, `TypeError`, or `URIError` object.
	*
	* @static
	* @memberOf _
	* @since 3.0.0
	* @category Lang
	* @param {*} value The value to check.
	* @returns {boolean} Returns `true` if `value` is an error object, else `false`.
	* @example
	*
	* _.isError(new Error);
	* // => true
	*
	* _.isError(Error);
	* // => false
	*/
	function isError(value) {
		if (!isObjectLike(value)) return false;
		var tag = baseGetTag(value);
		return tag == errorTag || tag == domExcTag || typeof value.message == "string" && typeof value.name == "string" && !isPlainObject(value);
	}
	module.exports = isError;
}));
//#endregion
//#region node_modules/lodash/isWeakMap.js
var require_isWeakMap = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var getTag = require__getTag();
	var isObjectLike = require_isObjectLike();
	/** `Object#toString` result references. */
	var weakMapTag = "[object WeakMap]";
	/**
	* Checks if `value` is classified as a `WeakMap` object.
	*
	* @static
	* @memberOf _
	* @since 4.3.0
	* @category Lang
	* @param {*} value The value to check.
	* @returns {boolean} Returns `true` if `value` is a weak map, else `false`.
	* @example
	*
	* _.isWeakMap(new WeakMap);
	* // => true
	*
	* _.isWeakMap(new Map);
	* // => false
	*/
	function isWeakMap(value) {
		return isObjectLike(value) && getTag(value) == weakMapTag;
	}
	module.exports = isWeakMap;
}));
//#endregion
//#region node_modules/lodash/_setCacheAdd.js
var require__setCacheAdd = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	/** Used to stand-in for `undefined` hash values. */
	var HASH_UNDEFINED = "__lodash_hash_undefined__";
	/**
	* Adds `value` to the array cache.
	*
	* @private
	* @name add
	* @memberOf SetCache
	* @alias push
	* @param {*} value The value to cache.
	* @returns {Object} Returns the cache instance.
	*/
	function setCacheAdd(value) {
		this.__data__.set(value, HASH_UNDEFINED);
		return this;
	}
	module.exports = setCacheAdd;
}));
//#endregion
//#region node_modules/lodash/_setCacheHas.js
var require__setCacheHas = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	/**
	* Checks if `value` is in the array cache.
	*
	* @private
	* @name has
	* @memberOf SetCache
	* @param {*} value The value to search for.
	* @returns {number} Returns `true` if `value` is found, else `false`.
	*/
	function setCacheHas(value) {
		return this.__data__.has(value);
	}
	module.exports = setCacheHas;
}));
//#endregion
//#region node_modules/lodash/_SetCache.js
var require__SetCache = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var MapCache = require__MapCache();
	var setCacheAdd = require__setCacheAdd();
	var setCacheHas = require__setCacheHas();
	/**
	*
	* Creates an array cache object to store unique values.
	*
	* @private
	* @constructor
	* @param {Array} [values] The values to cache.
	*/
	function SetCache(values) {
		var index = -1, length = values == null ? 0 : values.length;
		this.__data__ = new MapCache();
		while (++index < length) this.add(values[index]);
	}
	SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
	SetCache.prototype.has = setCacheHas;
	module.exports = SetCache;
}));
//#endregion
//#region node_modules/lodash/_arraySome.js
var require__arraySome = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	/**
	* A specialized version of `_.some` for arrays without support for iteratee
	* shorthands.
	*
	* @private
	* @param {Array} [array] The array to iterate over.
	* @param {Function} predicate The function invoked per iteration.
	* @returns {boolean} Returns `true` if any element passes the predicate check,
	*  else `false`.
	*/
	function arraySome(array, predicate) {
		var index = -1, length = array == null ? 0 : array.length;
		while (++index < length) if (predicate(array[index], index, array)) return true;
		return false;
	}
	module.exports = arraySome;
}));
//#endregion
//#region node_modules/lodash/_cacheHas.js
var require__cacheHas = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	/**
	* Checks if a `cache` value for `key` exists.
	*
	* @private
	* @param {Object} cache The cache to query.
	* @param {string} key The key of the entry to check.
	* @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	*/
	function cacheHas(cache, key) {
		return cache.has(key);
	}
	module.exports = cacheHas;
}));
//#endregion
//#region node_modules/lodash/_equalArrays.js
var require__equalArrays = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var SetCache = require__SetCache();
	var arraySome = require__arraySome();
	var cacheHas = require__cacheHas();
	/** Used to compose bitmasks for value comparisons. */
	var COMPARE_PARTIAL_FLAG = 1;
	var COMPARE_UNORDERED_FLAG = 2;
	/**
	* A specialized version of `baseIsEqualDeep` for arrays with support for
	* partial deep comparisons.
	*
	* @private
	* @param {Array} array The array to compare.
	* @param {Array} other The other array to compare.
	* @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
	* @param {Function} customizer The function to customize comparisons.
	* @param {Function} equalFunc The function to determine equivalents of values.
	* @param {Object} stack Tracks traversed `array` and `other` objects.
	* @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
	*/
	function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
		var isPartial = bitmask & COMPARE_PARTIAL_FLAG, arrLength = array.length, othLength = other.length;
		if (arrLength != othLength && !(isPartial && othLength > arrLength)) return false;
		var arrStacked = stack.get(array);
		var othStacked = stack.get(other);
		if (arrStacked && othStacked) return arrStacked == other && othStacked == array;
		var index = -1, result = true, seen = bitmask & COMPARE_UNORDERED_FLAG ? new SetCache() : void 0;
		stack.set(array, other);
		stack.set(other, array);
		while (++index < arrLength) {
			var arrValue = array[index], othValue = other[index];
			if (customizer) var compared = isPartial ? customizer(othValue, arrValue, index, other, array, stack) : customizer(arrValue, othValue, index, array, other, stack);
			if (compared !== void 0) {
				if (compared) continue;
				result = false;
				break;
			}
			if (seen) {
				if (!arraySome(other, function(othValue, othIndex) {
					if (!cacheHas(seen, othIndex) && (arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) return seen.push(othIndex);
				})) {
					result = false;
					break;
				}
			} else if (!(arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
				result = false;
				break;
			}
		}
		stack["delete"](array);
		stack["delete"](other);
		return result;
	}
	module.exports = equalArrays;
}));
//#endregion
//#region node_modules/lodash/_mapToArray.js
var require__mapToArray = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	/**
	* Converts `map` to its key-value pairs.
	*
	* @private
	* @param {Object} map The map to convert.
	* @returns {Array} Returns the key-value pairs.
	*/
	function mapToArray(map) {
		var index = -1, result = Array(map.size);
		map.forEach(function(value, key) {
			result[++index] = [key, value];
		});
		return result;
	}
	module.exports = mapToArray;
}));
//#endregion
//#region node_modules/lodash/_setToArray.js
var require__setToArray = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	/**
	* Converts `set` to an array of its values.
	*
	* @private
	* @param {Object} set The set to convert.
	* @returns {Array} Returns the values.
	*/
	function setToArray(set) {
		var index = -1, result = Array(set.size);
		set.forEach(function(value) {
			result[++index] = value;
		});
		return result;
	}
	module.exports = setToArray;
}));
//#endregion
//#region node_modules/lodash/_equalByTag.js
var require__equalByTag = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var Symbol = require__Symbol();
	var Uint8Array = require__Uint8Array();
	var eq = require_eq();
	var equalArrays = require__equalArrays();
	var mapToArray = require__mapToArray();
	var setToArray = require__setToArray();
	/** Used to compose bitmasks for value comparisons. */
	var COMPARE_PARTIAL_FLAG = 1;
	var COMPARE_UNORDERED_FLAG = 2;
	/** `Object#toString` result references. */
	var boolTag = "[object Boolean]";
	var dateTag = "[object Date]";
	var errorTag = "[object Error]";
	var mapTag = "[object Map]";
	var numberTag = "[object Number]";
	var regexpTag = "[object RegExp]";
	var setTag = "[object Set]";
	var stringTag = "[object String]";
	var symbolTag = "[object Symbol]";
	var arrayBufferTag = "[object ArrayBuffer]";
	var dataViewTag = "[object DataView]";
	/** Used to convert symbols to primitives and strings. */
	var symbolProto = Symbol ? Symbol.prototype : void 0;
	var symbolValueOf = symbolProto ? symbolProto.valueOf : void 0;
	/**
	* A specialized version of `baseIsEqualDeep` for comparing objects of
	* the same `toStringTag`.
	*
	* **Note:** This function only supports comparing values with tags of
	* `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
	*
	* @private
	* @param {Object} object The object to compare.
	* @param {Object} other The other object to compare.
	* @param {string} tag The `toStringTag` of the objects to compare.
	* @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
	* @param {Function} customizer The function to customize comparisons.
	* @param {Function} equalFunc The function to determine equivalents of values.
	* @param {Object} stack Tracks traversed `object` and `other` objects.
	* @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	*/
	function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
		switch (tag) {
			case dataViewTag:
				if (object.byteLength != other.byteLength || object.byteOffset != other.byteOffset) return false;
				object = object.buffer;
				other = other.buffer;
			case arrayBufferTag:
				if (object.byteLength != other.byteLength || !equalFunc(new Uint8Array(object), new Uint8Array(other))) return false;
				return true;
			case boolTag:
			case dateTag:
			case numberTag: return eq(+object, +other);
			case errorTag: return object.name == other.name && object.message == other.message;
			case regexpTag:
			case stringTag: return object == other + "";
			case mapTag: var convert = mapToArray;
			case setTag:
				var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
				convert || (convert = setToArray);
				if (object.size != other.size && !isPartial) return false;
				var stacked = stack.get(object);
				if (stacked) return stacked == other;
				bitmask |= COMPARE_UNORDERED_FLAG;
				stack.set(object, other);
				var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
				stack["delete"](object);
				return result;
			case symbolTag: if (symbolValueOf) return symbolValueOf.call(object) == symbolValueOf.call(other);
		}
		return false;
	}
	module.exports = equalByTag;
}));
//#endregion
//#region node_modules/lodash/_equalObjects.js
var require__equalObjects = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var getAllKeys = require__getAllKeys();
	/** Used to compose bitmasks for value comparisons. */
	var COMPARE_PARTIAL_FLAG = 1;
	/** Used to check objects for own properties. */
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	/**
	* A specialized version of `baseIsEqualDeep` for objects with support for
	* partial deep comparisons.
	*
	* @private
	* @param {Object} object The object to compare.
	* @param {Object} other The other object to compare.
	* @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
	* @param {Function} customizer The function to customize comparisons.
	* @param {Function} equalFunc The function to determine equivalents of values.
	* @param {Object} stack Tracks traversed `object` and `other` objects.
	* @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	*/
	function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
		var isPartial = bitmask & COMPARE_PARTIAL_FLAG, objProps = getAllKeys(object), objLength = objProps.length;
		if (objLength != getAllKeys(other).length && !isPartial) return false;
		var index = objLength;
		while (index--) {
			var key = objProps[index];
			if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) return false;
		}
		var objStacked = stack.get(object);
		var othStacked = stack.get(other);
		if (objStacked && othStacked) return objStacked == other && othStacked == object;
		var result = true;
		stack.set(object, other);
		stack.set(other, object);
		var skipCtor = isPartial;
		while (++index < objLength) {
			key = objProps[index];
			var objValue = object[key], othValue = other[key];
			if (customizer) var compared = isPartial ? customizer(othValue, objValue, key, other, object, stack) : customizer(objValue, othValue, key, object, other, stack);
			if (!(compared === void 0 ? objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack) : compared)) {
				result = false;
				break;
			}
			skipCtor || (skipCtor = key == "constructor");
		}
		if (result && !skipCtor) {
			var objCtor = object.constructor, othCtor = other.constructor;
			if (objCtor != othCtor && "constructor" in object && "constructor" in other && !(typeof objCtor == "function" && objCtor instanceof objCtor && typeof othCtor == "function" && othCtor instanceof othCtor)) result = false;
		}
		stack["delete"](object);
		stack["delete"](other);
		return result;
	}
	module.exports = equalObjects;
}));
//#endregion
//#region node_modules/lodash/_baseIsEqualDeep.js
var require__baseIsEqualDeep = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var Stack = require__Stack();
	var equalArrays = require__equalArrays();
	var equalByTag = require__equalByTag();
	var equalObjects = require__equalObjects();
	var getTag = require__getTag();
	var isArray = require_isArray();
	var isBuffer = require_isBuffer();
	var isTypedArray = require_isTypedArray();
	/** Used to compose bitmasks for value comparisons. */
	var COMPARE_PARTIAL_FLAG = 1;
	/** `Object#toString` result references. */
	var argsTag = "[object Arguments]";
	var arrayTag = "[object Array]";
	var objectTag = "[object Object]";
	/** Used to check objects for own properties. */
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	/**
	* A specialized version of `baseIsEqual` for arrays and objects which performs
	* deep comparisons and tracks traversed objects enabling objects with circular
	* references to be compared.
	*
	* @private
	* @param {Object} object The object to compare.
	* @param {Object} other The other object to compare.
	* @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
	* @param {Function} customizer The function to customize comparisons.
	* @param {Function} equalFunc The function to determine equivalents of values.
	* @param {Object} [stack] Tracks traversed `object` and `other` objects.
	* @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	*/
	function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
		var objIsArr = isArray(object), othIsArr = isArray(other), objTag = objIsArr ? arrayTag : getTag(object), othTag = othIsArr ? arrayTag : getTag(other);
		objTag = objTag == argsTag ? objectTag : objTag;
		othTag = othTag == argsTag ? objectTag : othTag;
		var objIsObj = objTag == objectTag, othIsObj = othTag == objectTag, isSameTag = objTag == othTag;
		if (isSameTag && isBuffer(object)) {
			if (!isBuffer(other)) return false;
			objIsArr = true;
			objIsObj = false;
		}
		if (isSameTag && !objIsObj) {
			stack || (stack = new Stack());
			return objIsArr || isTypedArray(object) ? equalArrays(object, other, bitmask, customizer, equalFunc, stack) : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
		}
		if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
			var objIsWrapped = objIsObj && hasOwnProperty.call(object, "__wrapped__"), othIsWrapped = othIsObj && hasOwnProperty.call(other, "__wrapped__");
			if (objIsWrapped || othIsWrapped) {
				var objUnwrapped = objIsWrapped ? object.value() : object, othUnwrapped = othIsWrapped ? other.value() : other;
				stack || (stack = new Stack());
				return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
			}
		}
		if (!isSameTag) return false;
		stack || (stack = new Stack());
		return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
	}
	module.exports = baseIsEqualDeep;
}));
//#endregion
//#region node_modules/lodash/_baseIsEqual.js
var require__baseIsEqual = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var baseIsEqualDeep = require__baseIsEqualDeep();
	var isObjectLike = require_isObjectLike();
	/**
	* The base implementation of `_.isEqual` which supports partial comparisons
	* and tracks traversed objects.
	*
	* @private
	* @param {*} value The value to compare.
	* @param {*} other The other value to compare.
	* @param {boolean} bitmask The bitmask flags.
	*  1 - Unordered comparison
	*  2 - Partial comparison
	* @param {Function} [customizer] The function to customize comparisons.
	* @param {Object} [stack] Tracks traversed `value` and `other` objects.
	* @returns {boolean} Returns `true` if the values are equivalent, else `false`.
	*/
	function baseIsEqual(value, other, bitmask, customizer, stack) {
		if (value === other) return true;
		if (value == null || other == null || !isObjectLike(value) && !isObjectLike(other)) return value !== value && other !== other;
		return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
	}
	module.exports = baseIsEqual;
}));
//#endregion
//#region node_modules/lodash/_baseIsMatch.js
var require__baseIsMatch = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var Stack = require__Stack();
	var baseIsEqual = require__baseIsEqual();
	/** Used to compose bitmasks for value comparisons. */
	var COMPARE_PARTIAL_FLAG = 1;
	var COMPARE_UNORDERED_FLAG = 2;
	/**
	* The base implementation of `_.isMatch` without support for iteratee shorthands.
	*
	* @private
	* @param {Object} object The object to inspect.
	* @param {Object} source The object of property values to match.
	* @param {Array} matchData The property names, values, and compare flags to match.
	* @param {Function} [customizer] The function to customize comparisons.
	* @returns {boolean} Returns `true` if `object` is a match, else `false`.
	*/
	function baseIsMatch(object, source, matchData, customizer) {
		var index = matchData.length, length = index, noCustomizer = !customizer;
		if (object == null) return !length;
		object = Object(object);
		while (index--) {
			var data = matchData[index];
			if (noCustomizer && data[2] ? data[1] !== object[data[0]] : !(data[0] in object)) return false;
		}
		while (++index < length) {
			data = matchData[index];
			var key = data[0], objValue = object[key], srcValue = data[1];
			if (noCustomizer && data[2]) {
				if (objValue === void 0 && !(key in object)) return false;
			} else {
				var stack = new Stack();
				if (customizer) var result = customizer(objValue, srcValue, key, object, source, stack);
				if (!(result === void 0 ? baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG, customizer, stack) : result)) return false;
			}
		}
		return true;
	}
	module.exports = baseIsMatch;
}));
//#endregion
//#region node_modules/lodash/_isStrictComparable.js
var require__isStrictComparable = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var isObject = require_isObject();
	/**
	* Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
	*
	* @private
	* @param {*} value The value to check.
	* @returns {boolean} Returns `true` if `value` if suitable for strict
	*  equality comparisons, else `false`.
	*/
	function isStrictComparable(value) {
		return value === value && !isObject(value);
	}
	module.exports = isStrictComparable;
}));
//#endregion
//#region node_modules/lodash/_getMatchData.js
var require__getMatchData = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var isStrictComparable = require__isStrictComparable();
	var keys = require_keys$1();
	/**
	* Gets the property names, values, and compare flags of `object`.
	*
	* @private
	* @param {Object} object The object to query.
	* @returns {Array} Returns the match data of `object`.
	*/
	function getMatchData(object) {
		var result = keys(object), length = result.length;
		while (length--) {
			var key = result[length], value = object[key];
			result[length] = [
				key,
				value,
				isStrictComparable(value)
			];
		}
		return result;
	}
	module.exports = getMatchData;
}));
//#endregion
//#region node_modules/lodash/_matchesStrictComparable.js
var require__matchesStrictComparable = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	/**
	* A specialized version of `matchesProperty` for source values suitable
	* for strict equality comparisons, i.e. `===`.
	*
	* @private
	* @param {string} key The key of the property to get.
	* @param {*} srcValue The value to match.
	* @returns {Function} Returns the new spec function.
	*/
	function matchesStrictComparable(key, srcValue) {
		return function(object) {
			if (object == null) return false;
			return object[key] === srcValue && (srcValue !== void 0 || key in Object(object));
		};
	}
	module.exports = matchesStrictComparable;
}));
//#endregion
//#region node_modules/lodash/_baseMatches.js
var require__baseMatches = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var baseIsMatch = require__baseIsMatch();
	var getMatchData = require__getMatchData();
	var matchesStrictComparable = require__matchesStrictComparable();
	/**
	* The base implementation of `_.matches` which doesn't clone `source`.
	*
	* @private
	* @param {Object} source The object of property values to match.
	* @returns {Function} Returns the new spec function.
	*/
	function baseMatches(source) {
		var matchData = getMatchData(source);
		if (matchData.length == 1 && matchData[0][2]) return matchesStrictComparable(matchData[0][0], matchData[0][1]);
		return function(object) {
			return object === source || baseIsMatch(object, source, matchData);
		};
	}
	module.exports = baseMatches;
}));
//#endregion
//#region node_modules/lodash/_isKey.js
var require__isKey = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var isArray = require_isArray();
	var isSymbol = require_isSymbol();
	/** Used to match property names within property paths. */
	var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/;
	var reIsPlainProp = /^\w*$/;
	/**
	* Checks if `value` is a property name and not a property path.
	*
	* @private
	* @param {*} value The value to check.
	* @param {Object} [object] The object to query keys on.
	* @returns {boolean} Returns `true` if `value` is a property name, else `false`.
	*/
	function isKey(value, object) {
		if (isArray(value)) return false;
		var type = typeof value;
		if (type == "number" || type == "symbol" || type == "boolean" || value == null || isSymbol(value)) return true;
		return reIsPlainProp.test(value) || !reIsDeepProp.test(value) || object != null && value in Object(object);
	}
	module.exports = isKey;
}));
//#endregion
//#region node_modules/lodash/memoize.js
var require_memoize = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var MapCache = require__MapCache();
	/** Error message constants. */
	var FUNC_ERROR_TEXT = "Expected a function";
	/**
	* Creates a function that memoizes the result of `func`. If `resolver` is
	* provided, it determines the cache key for storing the result based on the
	* arguments provided to the memoized function. By default, the first argument
	* provided to the memoized function is used as the map cache key. The `func`
	* is invoked with the `this` binding of the memoized function.
	*
	* **Note:** The cache is exposed as the `cache` property on the memoized
	* function. Its creation may be customized by replacing the `_.memoize.Cache`
	* constructor with one whose instances implement the
	* [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
	* method interface of `clear`, `delete`, `get`, `has`, and `set`.
	*
	* @static
	* @memberOf _
	* @since 0.1.0
	* @category Function
	* @param {Function} func The function to have its output memoized.
	* @param {Function} [resolver] The function to resolve the cache key.
	* @returns {Function} Returns the new memoized function.
	* @example
	*
	* var object = { 'a': 1, 'b': 2 };
	* var other = { 'c': 3, 'd': 4 };
	*
	* var values = _.memoize(_.values);
	* values(object);
	* // => [1, 2]
	*
	* values(other);
	* // => [3, 4]
	*
	* object.a = 2;
	* values(object);
	* // => [1, 2]
	*
	* // Modify the result cache.
	* values.cache.set(object, ['a', 'b']);
	* values(object);
	* // => ['a', 'b']
	*
	* // Replace `_.memoize.Cache`.
	* _.memoize.Cache = WeakMap;
	*/
	function memoize(func, resolver) {
		if (typeof func != "function" || resolver != null && typeof resolver != "function") throw new TypeError(FUNC_ERROR_TEXT);
		var memoized = function() {
			var args = arguments, key = resolver ? resolver.apply(this, args) : args[0], cache = memoized.cache;
			if (cache.has(key)) return cache.get(key);
			var result = func.apply(this, args);
			memoized.cache = cache.set(key, result) || cache;
			return result;
		};
		memoized.cache = new (memoize.Cache || MapCache)();
		return memoized;
	}
	memoize.Cache = MapCache;
	module.exports = memoize;
}));
//#endregion
//#region node_modules/lodash/_memoizeCapped.js
var require__memoizeCapped = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var memoize = require_memoize();
	/** Used as the maximum memoize cache size. */
	var MAX_MEMOIZE_SIZE = 500;
	/**
	* A specialized version of `_.memoize` which clears the memoized function's
	* cache when it exceeds `MAX_MEMOIZE_SIZE`.
	*
	* @private
	* @param {Function} func The function to have its output memoized.
	* @returns {Function} Returns the new memoized function.
	*/
	function memoizeCapped(func) {
		var result = memoize(func, function(key) {
			if (cache.size === MAX_MEMOIZE_SIZE) cache.clear();
			return key;
		});
		var cache = result.cache;
		return result;
	}
	module.exports = memoizeCapped;
}));
//#endregion
//#region node_modules/lodash/_stringToPath.js
var require__stringToPath = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var memoizeCapped = require__memoizeCapped();
	/** Used to match property names within property paths. */
	var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
	/** Used to match backslashes in property paths. */
	var reEscapeChar = /\\(\\)?/g;
	module.exports = memoizeCapped(function(string) {
		var result = [];
		if (string.charCodeAt(0) === 46) result.push("");
		string.replace(rePropName, function(match, number, quote, subString) {
			result.push(quote ? subString.replace(reEscapeChar, "$1") : number || match);
		});
		return result;
	});
}));
//#endregion
//#region node_modules/lodash/_arrayMap.js
var require__arrayMap = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	/**
	* A specialized version of `_.map` for arrays without support for iteratee
	* shorthands.
	*
	* @private
	* @param {Array} [array] The array to iterate over.
	* @param {Function} iteratee The function invoked per iteration.
	* @returns {Array} Returns the new mapped array.
	*/
	function arrayMap(array, iteratee) {
		var index = -1, length = array == null ? 0 : array.length, result = Array(length);
		while (++index < length) result[index] = iteratee(array[index], index, array);
		return result;
	}
	module.exports = arrayMap;
}));
//#endregion
//#region node_modules/lodash/_baseToString.js
var require__baseToString = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var Symbol = require__Symbol();
	var arrayMap = require__arrayMap();
	var isArray = require_isArray();
	var isSymbol = require_isSymbol();
	/** Used as references for various `Number` constants. */
	var INFINITY = 1 / 0;
	/** Used to convert symbols to primitives and strings. */
	var symbolProto = Symbol ? Symbol.prototype : void 0;
	var symbolToString = symbolProto ? symbolProto.toString : void 0;
	/**
	* The base implementation of `_.toString` which doesn't convert nullish
	* values to empty strings.
	*
	* @private
	* @param {*} value The value to process.
	* @returns {string} Returns the string.
	*/
	function baseToString(value) {
		if (typeof value == "string") return value;
		if (isArray(value)) return arrayMap(value, baseToString) + "";
		if (isSymbol(value)) return symbolToString ? symbolToString.call(value) : "";
		var result = value + "";
		return result == "0" && 1 / value == -INFINITY ? "-0" : result;
	}
	module.exports = baseToString;
}));
//#endregion
//#region node_modules/lodash/toString.js
var require_toString = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var baseToString = require__baseToString();
	/**
	* Converts `value` to a string. An empty string is returned for `null`
	* and `undefined` values. The sign of `-0` is preserved.
	*
	* @static
	* @memberOf _
	* @since 4.0.0
	* @category Lang
	* @param {*} value The value to convert.
	* @returns {string} Returns the converted string.
	* @example
	*
	* _.toString(null);
	* // => ''
	*
	* _.toString(-0);
	* // => '-0'
	*
	* _.toString([1, 2, 3]);
	* // => '1,2,3'
	*/
	function toString(value) {
		return value == null ? "" : baseToString(value);
	}
	module.exports = toString;
}));
//#endregion
//#region node_modules/lodash/_castPath.js
var require__castPath = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var isArray = require_isArray();
	var isKey = require__isKey();
	var stringToPath = require__stringToPath();
	var toString = require_toString();
	/**
	* Casts `value` to a path array if it's not one.
	*
	* @private
	* @param {*} value The value to inspect.
	* @param {Object} [object] The object to query keys on.
	* @returns {Array} Returns the cast property path array.
	*/
	function castPath(value, object) {
		if (isArray(value)) return value;
		return isKey(value, object) ? [value] : stringToPath(toString(value));
	}
	module.exports = castPath;
}));
//#endregion
//#region node_modules/lodash/_toKey.js
var require__toKey = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var isSymbol = require_isSymbol();
	/** Used as references for various `Number` constants. */
	var INFINITY = 1 / 0;
	/**
	* Converts `value` to a string key if it's not a string or symbol.
	*
	* @private
	* @param {*} value The value to inspect.
	* @returns {string|symbol} Returns the key.
	*/
	function toKey(value) {
		if (typeof value == "string" || isSymbol(value)) return value;
		var result = value + "";
		return result == "0" && 1 / value == -INFINITY ? "-0" : result;
	}
	module.exports = toKey;
}));
//#endregion
//#region node_modules/lodash/_baseGet.js
var require__baseGet = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var castPath = require__castPath();
	var toKey = require__toKey();
	/**
	* The base implementation of `_.get` without support for default values.
	*
	* @private
	* @param {Object} object The object to query.
	* @param {Array|string} path The path of the property to get.
	* @returns {*} Returns the resolved value.
	*/
	function baseGet(object, path) {
		path = castPath(path, object);
		var index = 0, length = path.length;
		while (object != null && index < length) object = object[toKey(path[index++])];
		return index && index == length ? object : void 0;
	}
	module.exports = baseGet;
}));
//#endregion
//#region node_modules/lodash/get.js
var require_get = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var baseGet = require__baseGet();
	/**
	* Gets the value at `path` of `object`. If the resolved value is
	* `undefined`, the `defaultValue` is returned in its place.
	*
	* @static
	* @memberOf _
	* @since 3.7.0
	* @category Object
	* @param {Object} object The object to query.
	* @param {Array|string} path The path of the property to get.
	* @param {*} [defaultValue] The value returned for `undefined` resolved values.
	* @returns {*} Returns the resolved value.
	* @example
	*
	* var object = { 'a': [{ 'b': { 'c': 3 } }] };
	*
	* _.get(object, 'a[0].b.c');
	* // => 3
	*
	* _.get(object, ['a', '0', 'b', 'c']);
	* // => 3
	*
	* _.get(object, 'a.b.c', 'default');
	* // => 'default'
	*/
	function get(object, path, defaultValue) {
		var result = object == null ? void 0 : baseGet(object, path);
		return result === void 0 ? defaultValue : result;
	}
	module.exports = get;
}));
//#endregion
//#region node_modules/lodash/_baseHasIn.js
var require__baseHasIn = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	/**
	* The base implementation of `_.hasIn` without support for deep paths.
	*
	* @private
	* @param {Object} [object] The object to query.
	* @param {Array|string} key The key to check.
	* @returns {boolean} Returns `true` if `key` exists, else `false`.
	*/
	function baseHasIn(object, key) {
		return object != null && key in Object(object);
	}
	module.exports = baseHasIn;
}));
//#endregion
//#region node_modules/lodash/_hasPath.js
var require__hasPath = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var castPath = require__castPath();
	var isArguments = require_isArguments();
	var isArray = require_isArray();
	var isIndex = require__isIndex();
	var isLength = require_isLength();
	var toKey = require__toKey();
	/**
	* Checks if `path` exists on `object`.
	*
	* @private
	* @param {Object} object The object to query.
	* @param {Array|string} path The path to check.
	* @param {Function} hasFunc The function to check properties.
	* @returns {boolean} Returns `true` if `path` exists, else `false`.
	*/
	function hasPath(object, path, hasFunc) {
		path = castPath(path, object);
		var index = -1, length = path.length, result = false;
		while (++index < length) {
			var key = toKey(path[index]);
			if (!(result = object != null && hasFunc(object, key))) break;
			object = object[key];
		}
		if (result || ++index != length) return result;
		length = object == null ? 0 : object.length;
		return !!length && isLength(length) && isIndex(key, length) && (isArray(object) || isArguments(object));
	}
	module.exports = hasPath;
}));
//#endregion
//#region node_modules/lodash/hasIn.js
var require_hasIn = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var baseHasIn = require__baseHasIn();
	var hasPath = require__hasPath();
	/**
	* Checks if `path` is a direct or inherited property of `object`.
	*
	* @static
	* @memberOf _
	* @since 4.0.0
	* @category Object
	* @param {Object} object The object to query.
	* @param {Array|string} path The path to check.
	* @returns {boolean} Returns `true` if `path` exists, else `false`.
	* @example
	*
	* var object = _.create({ 'a': _.create({ 'b': 2 }) });
	*
	* _.hasIn(object, 'a');
	* // => true
	*
	* _.hasIn(object, 'a.b');
	* // => true
	*
	* _.hasIn(object, ['a', 'b']);
	* // => true
	*
	* _.hasIn(object, 'b');
	* // => false
	*/
	function hasIn(object, path) {
		return object != null && hasPath(object, path, baseHasIn);
	}
	module.exports = hasIn;
}));
//#endregion
//#region node_modules/lodash/_baseMatchesProperty.js
var require__baseMatchesProperty = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var baseIsEqual = require__baseIsEqual();
	var get = require_get();
	var hasIn = require_hasIn();
	var isKey = require__isKey();
	var isStrictComparable = require__isStrictComparable();
	var matchesStrictComparable = require__matchesStrictComparable();
	var toKey = require__toKey();
	/** Used to compose bitmasks for value comparisons. */
	var COMPARE_PARTIAL_FLAG = 1;
	var COMPARE_UNORDERED_FLAG = 2;
	/**
	* The base implementation of `_.matchesProperty` which doesn't clone `srcValue`.
	*
	* @private
	* @param {string} path The path of the property to get.
	* @param {*} srcValue The value to match.
	* @returns {Function} Returns the new spec function.
	*/
	function baseMatchesProperty(path, srcValue) {
		if (isKey(path) && isStrictComparable(srcValue)) return matchesStrictComparable(toKey(path), srcValue);
		return function(object) {
			var objValue = get(object, path);
			return objValue === void 0 && objValue === srcValue ? hasIn(object, path) : baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG);
		};
	}
	module.exports = baseMatchesProperty;
}));
//#endregion
//#region node_modules/lodash/_baseProperty.js
var require__baseProperty = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	/**
	* The base implementation of `_.property` without support for deep paths.
	*
	* @private
	* @param {string} key The key of the property to get.
	* @returns {Function} Returns the new accessor function.
	*/
	function baseProperty(key) {
		return function(object) {
			return object == null ? void 0 : object[key];
		};
	}
	module.exports = baseProperty;
}));
//#endregion
//#region node_modules/lodash/_basePropertyDeep.js
var require__basePropertyDeep = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var baseGet = require__baseGet();
	/**
	* A specialized version of `baseProperty` which supports deep paths.
	*
	* @private
	* @param {Array|string} path The path of the property to get.
	* @returns {Function} Returns the new accessor function.
	*/
	function basePropertyDeep(path) {
		return function(object) {
			return baseGet(object, path);
		};
	}
	module.exports = basePropertyDeep;
}));
//#endregion
//#region node_modules/lodash/property.js
var require_property = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var baseProperty = require__baseProperty();
	var basePropertyDeep = require__basePropertyDeep();
	var isKey = require__isKey();
	var toKey = require__toKey();
	/**
	* Creates a function that returns the value at `path` of a given object.
	*
	* @static
	* @memberOf _
	* @since 2.4.0
	* @category Util
	* @param {Array|string} path The path of the property to get.
	* @returns {Function} Returns the new accessor function.
	* @example
	*
	* var objects = [
	*   { 'a': { 'b': 2 } },
	*   { 'a': { 'b': 1 } }
	* ];
	*
	* _.map(objects, _.property('a.b'));
	* // => [2, 1]
	*
	* _.map(_.sortBy(objects, _.property(['a', 'b'])), 'a.b');
	* // => [1, 2]
	*/
	function property(path) {
		return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
	}
	module.exports = property;
}));
//#endregion
//#region node_modules/lodash/_baseIteratee.js
var require__baseIteratee = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var baseMatches = require__baseMatches();
	var baseMatchesProperty = require__baseMatchesProperty();
	var identity = require_identity();
	var isArray = require_isArray();
	var property = require_property();
	/**
	* The base implementation of `_.iteratee`.
	*
	* @private
	* @param {*} [value=_.identity] The value to convert to an iteratee.
	* @returns {Function} Returns the iteratee.
	*/
	function baseIteratee(value) {
		if (typeof value == "function") return value;
		if (value == null) return identity;
		if (typeof value == "object") return isArray(value) ? baseMatchesProperty(value[0], value[1]) : baseMatches(value);
		return property(value);
	}
	module.exports = baseIteratee;
}));
//#endregion
//#region node_modules/lodash/iteratee.js
var require_iteratee = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var baseClone = require__baseClone();
	var baseIteratee = require__baseIteratee();
	/** Used to compose bitmasks for cloning. */
	var CLONE_DEEP_FLAG = 1;
	/**
	* Creates a function that invokes `func` with the arguments of the created
	* function. If `func` is a property name, the created function returns the
	* property value for a given element. If `func` is an array or object, the
	* created function returns `true` for elements that contain the equivalent
	* source properties, otherwise it returns `false`.
	*
	* @static
	* @since 4.0.0
	* @memberOf _
	* @category Util
	* @param {*} [func=_.identity] The value to convert to a callback.
	* @returns {Function} Returns the callback.
	* @example
	*
	* var users = [
	*   { 'user': 'barney', 'age': 36, 'active': true },
	*   { 'user': 'fred',   'age': 40, 'active': false }
	* ];
	*
	* // The `_.matches` iteratee shorthand.
	* _.filter(users, _.iteratee({ 'user': 'barney', 'active': true }));
	* // => [{ 'user': 'barney', 'age': 36, 'active': true }]
	*
	* // The `_.matchesProperty` iteratee shorthand.
	* _.filter(users, _.iteratee(['user', 'fred']));
	* // => [{ 'user': 'fred', 'age': 40 }]
	*
	* // The `_.property` iteratee shorthand.
	* _.map(users, _.iteratee('user'));
	* // => ['barney', 'fred']
	*
	* // Create custom iteratee shorthands.
	* _.iteratee = _.wrap(_.iteratee, function(iteratee, func) {
	*   return !_.isRegExp(func) ? iteratee(func) : function(string) {
	*     return func.test(string);
	*   };
	* });
	*
	* _.filter(['abc', 'def'], /ef/);
	* // => ['def']
	*/
	function iteratee(func) {
		return baseIteratee(typeof func == "function" ? func : baseClone(func, CLONE_DEEP_FLAG));
	}
	module.exports = iteratee;
}));
//#endregion
//#region node_modules/lodash/_isFlattenable.js
var require__isFlattenable = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var Symbol = require__Symbol();
	var isArguments = require_isArguments();
	var isArray = require_isArray();
	/** Built-in value references. */
	var spreadableSymbol = Symbol ? Symbol.isConcatSpreadable : void 0;
	/**
	* Checks if `value` is a flattenable `arguments` object or array.
	*
	* @private
	* @param {*} value The value to check.
	* @returns {boolean} Returns `true` if `value` is flattenable, else `false`.
	*/
	function isFlattenable(value) {
		return isArray(value) || isArguments(value) || !!(spreadableSymbol && value && value[spreadableSymbol]);
	}
	module.exports = isFlattenable;
}));
//#endregion
//#region node_modules/lodash/_baseFlatten.js
var require__baseFlatten = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var arrayPush = require__arrayPush();
	var isFlattenable = require__isFlattenable();
	/**
	* The base implementation of `_.flatten` with support for restricting flattening.
	*
	* @private
	* @param {Array} array The array to flatten.
	* @param {number} depth The maximum recursion depth.
	* @param {boolean} [predicate=isFlattenable] The function invoked per iteration.
	* @param {boolean} [isStrict] Restrict to values that pass `predicate` checks.
	* @param {Array} [result=[]] The initial result value.
	* @returns {Array} Returns the new flattened array.
	*/
	function baseFlatten(array, depth, predicate, isStrict, result) {
		var index = -1, length = array.length;
		predicate || (predicate = isFlattenable);
		result || (result = []);
		while (++index < length) {
			var value = array[index];
			if (depth > 0 && predicate(value)) {
				if (depth > 1) baseFlatten(value, depth - 1, predicate, isStrict, result);
				else arrayPush(result, value);
			} else if (!isStrict) result[result.length] = value;
		}
		return result;
	}
	module.exports = baseFlatten;
}));
//#endregion
//#region node_modules/lodash/flatten.js
var require_flatten = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var baseFlatten = require__baseFlatten();
	/**
	* Flattens `array` a single level deep.
	*
	* @static
	* @memberOf _
	* @since 0.1.0
	* @category Array
	* @param {Array} array The array to flatten.
	* @returns {Array} Returns the new flattened array.
	* @example
	*
	* _.flatten([1, [2, [3, [4]], 5]]);
	* // => [1, 2, [3, [4]], 5]
	*/
	function flatten(array) {
		return (array == null ? 0 : array.length) ? baseFlatten(array, 1) : [];
	}
	module.exports = flatten;
}));
//#endregion
//#region node_modules/lodash/_overRest.js
var require__overRest = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var apply = require__apply();
	var nativeMax = Math.max;
	/**
	* A specialized version of `baseRest` which transforms the rest array.
	*
	* @private
	* @param {Function} func The function to apply a rest parameter to.
	* @param {number} [start=func.length-1] The start position of the rest parameter.
	* @param {Function} transform The rest array transform.
	* @returns {Function} Returns the new function.
	*/
	function overRest(func, start, transform) {
		start = nativeMax(start === void 0 ? func.length - 1 : start, 0);
		return function() {
			var args = arguments, index = -1, length = nativeMax(args.length - start, 0), array = Array(length);
			while (++index < length) array[index] = args[start + index];
			index = -1;
			var otherArgs = Array(start + 1);
			while (++index < start) otherArgs[index] = args[index];
			otherArgs[start] = transform(array);
			return apply(func, this, otherArgs);
		};
	}
	module.exports = overRest;
}));
//#endregion
//#region node_modules/lodash/_flatRest.js
var require__flatRest = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var flatten = require_flatten();
	var overRest = require__overRest();
	var setToString = require__setToString();
	/**
	* A specialized version of `baseRest` which flattens the rest array.
	*
	* @private
	* @param {Function} func The function to apply a rest parameter to.
	* @returns {Function} Returns the new function.
	*/
	function flatRest(func) {
		return setToString(overRest(func, void 0, flatten), func + "");
	}
	module.exports = flatRest;
}));
//#endregion
//#region node_modules/lodash/rearg.js
var require_rearg = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var createWrap = require__createWrap();
	var flatRest = require__flatRest();
	/** Used to compose bitmasks for function metadata. */
	var WRAP_REARG_FLAG = 256;
	module.exports = flatRest(function(func, indexes) {
		return createWrap(func, WRAP_REARG_FLAG, void 0, void 0, void 0, indexes);
	});
}));
//#endregion
//#region node_modules/lodash/toPath.js
var require_toPath = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var arrayMap = require__arrayMap();
	var copyArray = require__copyArray();
	var isArray = require_isArray();
	var isSymbol = require_isSymbol();
	var stringToPath = require__stringToPath();
	var toKey = require__toKey();
	var toString = require_toString();
	/**
	* Converts `value` to a property path array.
	*
	* @static
	* @memberOf _
	* @since 4.0.0
	* @category Util
	* @param {*} value The value to convert.
	* @returns {Array} Returns the new property path array.
	* @example
	*
	* _.toPath('a.b.c');
	* // => ['a', 'b', 'c']
	*
	* _.toPath('a[0].b.c');
	* // => ['a', '0', 'b', 'c']
	*/
	function toPath(value) {
		if (isArray(value)) return arrayMap(value, toKey);
		return isSymbol(value) ? [value] : copyArray(stringToPath(toString(value)));
	}
	module.exports = toPath;
}));
//#endregion
//#region node_modules/lodash/fp/_util.js
var require__util = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = {
		"ary": require_ary(),
		"assign": require__baseAssign(),
		"clone": require_clone(),
		"curry": require_curry(),
		"forEach": require__arrayEach(),
		"isArray": require_isArray(),
		"isError": require_isError(),
		"isFunction": require_isFunction(),
		"isWeakMap": require_isWeakMap(),
		"iteratee": require_iteratee(),
		"keys": require__baseKeys(),
		"rearg": require_rearg(),
		"toInteger": require_toInteger(),
		"toPath": require_toPath()
	};
}));
//#endregion
//#region node_modules/lodash/fp/convert.js
var require_convert = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var baseConvert = require__baseConvert();
	var util = require__util();
	/**
	* Converts `func` of `name` to an immutable auto-curried iteratee-first data-last
	* version with conversion `options` applied. If `name` is an object its methods
	* will be converted.
	*
	* @param {string} name The name of the function to wrap.
	* @param {Function} [func] The function to wrap.
	* @param {Object} [options] The options object. See `baseConvert` for more details.
	* @returns {Function|Object} Returns the converted function or object.
	*/
	function convert(name, func, options) {
		return baseConvert(util, name, func, options);
	}
	module.exports = convert;
}));
//#endregion
//#region node_modules/lodash/fp/_falseOptions.js
var require__falseOptions = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = {
		"cap": false,
		"curry": false,
		"fixed": false,
		"immutable": false,
		"rearg": false
	};
}));
//#endregion
//#region node_modules/lodash/fp/keys.js
var require_keys = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var func = require_convert()("keys", require_keys$1(), require__falseOptions());
	func.placeholder = require_placeholder();
	module.exports = func;
}));
//#endregion
//#region src/components/MapSpinner.jsx
var import_dist = /* @__PURE__ */ __toESM(require_dist());
var import_keys = /* @__PURE__ */ __toESM(require_keys());
var _excluded = [
	"spinner",
	"x",
	"y",
	"stroke"
];
function MapSpinner(_ref) {
	let { spinner = "Bars", x = "40%", y = "40%", stroke = "#98ff98" } = _ref, rest = _objectWithoutProperties(_ref, _excluded);
	const [bounds, setBounds] = useState(useMap().getBounds());
	const onEvent = (map) => setBounds(map.getBounds());
	const map = useMapEvents({
		zoomend: () => onEvent(map),
		moveend: () => onEvent(map)
	});
	const Spinner = import_dist[spinner];
	return /* @__PURE__ */ jsx(SVGOverlay, {
		bounds,
		children: /* @__PURE__ */ jsx(Spinner, _objectSpread2({
			x,
			y,
			stroke
		}, rest))
	});
}
MapSpinner.propTypes = {
	spinner: import_prop_types.default.oneOf((0, import_keys.default)(import_dist)).isRequired,
	x: import_prop_types.default.string,
	y: import_prop_types.default.string,
	stroke: import_prop_types.default.string
};
//#endregion
//#region node_modules/lodash/_createFlow.js
var require__createFlow = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var LodashWrapper = require__LodashWrapper();
	var flatRest = require__flatRest();
	var getData = require__getData();
	var getFuncName = require__getFuncName();
	var isArray = require_isArray();
	var isLaziable = require__isLaziable();
	/** Error message constants. */
	var FUNC_ERROR_TEXT = "Expected a function";
	/** Used to compose bitmasks for function metadata. */
	var WRAP_CURRY_FLAG = 8;
	var WRAP_PARTIAL_FLAG = 32;
	var WRAP_ARY_FLAG = 128;
	var WRAP_REARG_FLAG = 256;
	/**
	* Creates a `_.flow` or `_.flowRight` function.
	*
	* @private
	* @param {boolean} [fromRight] Specify iterating from right to left.
	* @returns {Function} Returns the new flow function.
	*/
	function createFlow(fromRight) {
		return flatRest(function(funcs) {
			var length = funcs.length, index = length, prereq = LodashWrapper.prototype.thru;
			if (fromRight) funcs.reverse();
			while (index--) {
				var func = funcs[index];
				if (typeof func != "function") throw new TypeError(FUNC_ERROR_TEXT);
				if (prereq && !wrapper && getFuncName(func) == "wrapper") var wrapper = new LodashWrapper([], true);
			}
			index = wrapper ? index : length;
			while (++index < length) {
				func = funcs[index];
				var funcName = getFuncName(func), data = funcName == "wrapper" ? getData(func) : void 0;
				if (data && isLaziable(data[0]) && data[1] == (WRAP_ARY_FLAG | WRAP_CURRY_FLAG | WRAP_PARTIAL_FLAG | WRAP_REARG_FLAG) && !data[4].length && data[9] == 1) wrapper = wrapper[getFuncName(data[0])].apply(wrapper, data[3]);
				else wrapper = func.length == 1 && isLaziable(func) ? wrapper[funcName]() : wrapper.thru(func);
			}
			return function() {
				var args = arguments, value = args[0];
				if (wrapper && args.length == 1 && isArray(value)) return wrapper.plant(value).value();
				var index = 0, result = length ? funcs[index].apply(this, args) : value;
				while (++index < length) result = funcs[index].call(this, result);
				return result;
			};
		});
	}
	module.exports = createFlow;
}));
//#endregion
//#region node_modules/lodash/flow.js
var require_flow$1 = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = require__createFlow()();
}));
//#endregion
//#region node_modules/lodash/fp/flow.js
var require_flow = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var func = require_convert()("flow", require_flow$1());
	func.placeholder = require_placeholder();
	module.exports = func;
}));
//#endregion
//#region node_modules/lodash/_createBaseFor.js
var require__createBaseFor = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	/**
	* Creates a base function for methods like `_.forIn` and `_.forOwn`.
	*
	* @private
	* @param {boolean} [fromRight] Specify iterating from right to left.
	* @returns {Function} Returns the new base function.
	*/
	function createBaseFor(fromRight) {
		return function(object, iteratee, keysFunc) {
			var index = -1, iterable = Object(object), props = keysFunc(object), length = props.length;
			while (length--) {
				var key = props[fromRight ? length : ++index];
				if (iteratee(iterable[key], key, iterable) === false) break;
			}
			return object;
		};
	}
	module.exports = createBaseFor;
}));
//#endregion
//#region node_modules/lodash/_baseFor.js
var require__baseFor = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = require__createBaseFor()();
}));
//#endregion
//#region node_modules/lodash/_baseForOwn.js
var require__baseForOwn = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var baseFor = require__baseFor();
	var keys = require_keys$1();
	/**
	* The base implementation of `_.forOwn` without support for iteratee shorthands.
	*
	* @private
	* @param {Object} object The object to iterate over.
	* @param {Function} iteratee The function invoked per iteration.
	* @returns {Object} Returns `object`.
	*/
	function baseForOwn(object, iteratee) {
		return object && baseFor(object, iteratee, keys);
	}
	module.exports = baseForOwn;
}));
//#endregion
//#region node_modules/lodash/_createBaseEach.js
var require__createBaseEach = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var isArrayLike = require_isArrayLike();
	/**
	* Creates a `baseEach` or `baseEachRight` function.
	*
	* @private
	* @param {Function} eachFunc The function to iterate over a collection.
	* @param {boolean} [fromRight] Specify iterating from right to left.
	* @returns {Function} Returns the new base function.
	*/
	function createBaseEach(eachFunc, fromRight) {
		return function(collection, iteratee) {
			if (collection == null) return collection;
			if (!isArrayLike(collection)) return eachFunc(collection, iteratee);
			var length = collection.length, index = fromRight ? length : -1, iterable = Object(collection);
			while (fromRight ? index-- : ++index < length) if (iteratee(iterable[index], index, iterable) === false) break;
			return collection;
		};
	}
	module.exports = createBaseEach;
}));
//#endregion
//#region node_modules/lodash/_baseEach.js
var require__baseEach = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var baseForOwn = require__baseForOwn();
	module.exports = require__createBaseEach()(baseForOwn);
}));
//#endregion
//#region node_modules/lodash/_baseMap.js
var require__baseMap = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var baseEach = require__baseEach();
	var isArrayLike = require_isArrayLike();
	/**
	* The base implementation of `_.map` without support for iteratee shorthands.
	*
	* @private
	* @param {Array|Object} collection The collection to iterate over.
	* @param {Function} iteratee The function invoked per iteration.
	* @returns {Array} Returns the new mapped array.
	*/
	function baseMap(collection, iteratee) {
		var index = -1, result = isArrayLike(collection) ? Array(collection.length) : [];
		baseEach(collection, function(value, key, collection) {
			result[++index] = iteratee(value, key, collection);
		});
		return result;
	}
	module.exports = baseMap;
}));
//#endregion
//#region node_modules/lodash/map.js
var require_map$1 = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var arrayMap = require__arrayMap();
	var baseIteratee = require__baseIteratee();
	var baseMap = require__baseMap();
	var isArray = require_isArray();
	/**
	* Creates an array of values by running each element in `collection` thru
	* `iteratee`. The iteratee is invoked with three arguments:
	* (value, index|key, collection).
	*
	* Many lodash methods are guarded to work as iteratees for methods like
	* `_.every`, `_.filter`, `_.map`, `_.mapValues`, `_.reject`, and `_.some`.
	*
	* The guarded methods are:
	* `ary`, `chunk`, `curry`, `curryRight`, `drop`, `dropRight`, `every`,
	* `fill`, `invert`, `parseInt`, `random`, `range`, `rangeRight`, `repeat`,
	* `sampleSize`, `slice`, `some`, `sortBy`, `split`, `take`, `takeRight`,
	* `template`, `trim`, `trimEnd`, `trimStart`, and `words`
	*
	* @static
	* @memberOf _
	* @since 0.1.0
	* @category Collection
	* @param {Array|Object} collection The collection to iterate over.
	* @param {Function} [iteratee=_.identity] The function invoked per iteration.
	* @returns {Array} Returns the new mapped array.
	* @example
	*
	* function square(n) {
	*   return n * n;
	* }
	*
	* _.map([4, 8], square);
	* // => [16, 64]
	*
	* _.map({ 'a': 4, 'b': 8 }, square);
	* // => [16, 64] (iteration order is not guaranteed)
	*
	* var users = [
	*   { 'user': 'barney' },
	*   { 'user': 'fred' }
	* ];
	*
	* // The `_.property` iteratee shorthand.
	* _.map(users, 'user');
	* // => ['barney', 'fred']
	*/
	function map(collection, iteratee) {
		return (isArray(collection) ? arrayMap : baseMap)(collection, baseIteratee(iteratee, 3));
	}
	module.exports = map;
}));
//#endregion
//#region node_modules/lodash/fp/map.js
var require_map = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var func = require_convert()("map", require_map$1());
	func.placeholder = require_placeholder();
	module.exports = func;
}));
//#endregion
//#region node_modules/lodash/fromPairs.js
var require_fromPairs$1 = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	/**
	* The inverse of `_.toPairs`; this method returns an object composed
	* from key-value `pairs`.
	*
	* @static
	* @memberOf _
	* @since 4.0.0
	* @category Array
	* @param {Array} pairs The key-value pairs.
	* @returns {Object} Returns the new object.
	* @example
	*
	* _.fromPairs([['a', 1], ['b', 2]]);
	* // => { 'a': 1, 'b': 2 }
	*/
	function fromPairs(pairs) {
		var index = -1, length = pairs == null ? 0 : pairs.length, result = {};
		while (++index < length) {
			var pair = pairs[index];
			result[pair[0]] = pair[1];
		}
		return result;
	}
	module.exports = fromPairs;
}));
//#endregion
//#region node_modules/lodash/fp/fromPairs.js
var require_fromPairs = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var func = require_convert()("fromPairs", require_fromPairs$1());
	func.placeholder = require_placeholder();
	module.exports = func;
}));
//#endregion
//#region src/hocs/callbackOnMapEvents.js
var import_flow = /* @__PURE__ */ __toESM(require_flow());
var import_map = /* @__PURE__ */ __toESM(require_map());
var import_fromPairs = /* @__PURE__ */ __toESM(require_fromPairs());
var callbackOnMapEvents = (eventNames, callback) => {
	return () => {
		const leafletMap = useMapEvents((0, import_flow.default)((0, import_map.default)((name) => [name, () => {
			callback(leafletMap);
		}]), import_fromPairs.default)(eventNames));
		return null;
	};
};
//#endregion
export { BCBaseMap, EEZLayer, GenericBaseMap, MapSpinner, SetView, StaticControl, YNWTBaseMap, callbackOnMapEvents, defaultEEZAttribution, defaultEEZGeoJSONUrl, projCRSOptions, resolutions };
