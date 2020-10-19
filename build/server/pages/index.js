module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "+/Rj":
/***/ (function(module, exports) {

module.exports = require("react-id-swiper");

/***/ }),

/***/ "/3P+":
/***/ (function(module, exports) {



/***/ }),

/***/ "/WcL":
/***/ (function(module, exports) {

module.exports = require("react-icons/ai");

/***/ }),

/***/ "/jkW":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.isDynamicRoute = isDynamicRoute; // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

/***/ }),

/***/ "0Bsm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("TqRt");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router = __webpack_require__("nOHt");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (false) {}

  return WithRouterWrapper;
}

/***/ }),

/***/ "284h":
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__("cDf5");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "2Bxh":
/***/ (function(module, exports) {



/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("RNiq");


/***/ }),

/***/ "3WeD":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.searchParamsToUrlQuery = searchParamsToUrlQuery;
exports.urlQueryToSearchParams = urlQueryToSearchParams;
exports.assign = assign;

function searchParamsToUrlQuery(searchParams) {
  const query = {};
  searchParams.forEach((value, key) => {
    if (typeof query[key] === 'undefined') {
      query[key] = value;
    } else if (Array.isArray(query[key])) {
      ;
      query[key].push(value);
    } else {
      query[key] = [query[key], value];
    }
  });
  return query;
}

function urlQueryToSearchParams(urlQuery) {
  const result = new URLSearchParams();
  Object.entries(urlQuery).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach(item => result.append(key, item));
    } else {
      result.set(key, value);
    }
  });
  return result;
}

function assign(target, ...searchParamsList) {
  searchParamsList.forEach(searchParams => {
    Array.from(searchParams.keys()).forEach(key => target.delete(key));
    searchParams.forEach((value, key) => target.append(key, value));
  });
  return target;
}

/***/ }),

/***/ "3aXE":
/***/ (function(module, exports) {



/***/ }),

/***/ "45fY":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _store_actions_menuAction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("jVLp");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("kQFM");




const useSticky = () => {
  const {
    0: isSticky,
    1: setSticky
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: hideNav,
    1: setHideNav
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const element = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  const store = Object(_store__WEBPACK_IMPORTED_MODULE_2__[/* useStore */ "a"])();

  if (false) { var prevScrollpos; }

  const handleScroll = () => {
    var currentScrollPos = window.pageYOffset;

    if (element.current) {
      if (parseInt(currentScrollPos) <= 0) {
        setHideNav(false);
        setSticky(false);
        return;
      } else {
        if (currentScrollPos <= prevScrollpos) {
          setHideNav(false);
          setSticky(false);
        } else {
          setHideNav(true);
          setSticky(true);
          store.dispatch(_store_actions_menuAction__WEBPACK_IMPORTED_MODULE_1__[/* fetchMenu */ "a"]);
        }
      }

      prevScrollpos = currentScrollPos;
    }
  }; // This function handle the scroll performance issue


  function debounce(func, wait = 20, immediate = true) {
    let timeOut;
    return () => {
      let context = this,
          args = arguments;

      const later = () => {
        timeOut = null;
        if (!immediate) func.apply(context, args);
      };

      const callNow = immediate && !timeOut;
      clearTimeout(timeOut);
      timeOut = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  }

  const scrollHandler = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => {
    debounce(handleScroll());
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    window.addEventListener("scroll", scrollHandler);
    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, [debounce, handleScroll]);
  return {
    isSticky,
    element,
    hideNav
  };
};

/* harmony default export */ __webpack_exports__["a"] = (useSticky);

/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "5qM9":
/***/ (function(module, exports) {



/***/ }),

/***/ "6D7l":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.formatUrl = formatUrl;

var querystring = _interopRequireWildcard(__webpack_require__("3WeD"));

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
} // Format function modified from nodejs
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.


const slashedProtocols = /https?|ftp|gopher|file/;

function formatUrl(urlObj) {
  let {
    auth,
    hostname
  } = urlObj;
  let protocol = urlObj.protocol || '';
  let pathname = urlObj.pathname || '';
  let hash = urlObj.hash || '';
  let query = urlObj.query || '';
  let host = false;
  auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ':') + '@' : '';

  if (urlObj.host) {
    host = auth + urlObj.host;
  } else if (hostname) {
    host = auth + (~hostname.indexOf(':') ? `[${hostname}]` : hostname);

    if (urlObj.port) {
      host += ':' + urlObj.port;
    }
  }

  if (query && typeof query === 'object') {
    query = String(querystring.urlQueryToSearchParams(query));
  }

  let search = urlObj.search || query && `?${query}` || '';
  if (protocol && protocol.substr(-1) !== ':') protocol += ':';

  if (urlObj.slashes || (!protocol || slashedProtocols.test(protocol)) && host !== false) {
    host = '//' + (host || '');
    if (pathname && pathname[0] !== '/') pathname = '/' + pathname;
  } else if (!host) {
    host = '';
  }

  if (hash && hash[0] !== '#') hash = '#' + hash;
  if (search && search[0] !== '?') search = '?' + search;
  pathname = pathname.replace(/[?#]/g, encodeURIComponent);
  search = search.replace('#', '%23');
  return `${protocol}${host}${pathname}${search}${hash}`;
}

/***/ }),

/***/ "7v8O":
/***/ (function(module, exports) {

module.exports = require("react-icons/bs");

/***/ }),

/***/ "9lea":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Container_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("UtK9");
/* harmony import */ var _Container_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Container_css__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const Container = props => {
  return __jsx("div", {
    className: "mainContainer"
  }, props.children);
};

/* harmony default export */ __webpack_exports__["a"] = (Container);

/***/ }),

/***/ "BwTs":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./components/Footers/Footer.css
var Footer = __webpack_require__("Pu65");

// EXTERNAL MODULE: ./components/Footers/HeaderFooter.css
var HeaderFooter = __webpack_require__("HpLk");

// CONCATENATED MODULE: ./components/Footers/HeaderFooter.js
var __jsx = external_react_default.a.createElement;



const HeaderFooter_HeaderFooter = props => {
  return __jsx("div", {
    className: "footer_header"
  }, __jsx("h3", null, props.headerText));
};

/* harmony default export */ var Footers_HeaderFooter = (HeaderFooter_HeaderFooter);
// EXTERNAL MODULE: external "react-icons/gi"
var gi_ = __webpack_require__("kS/G");

// EXTERNAL MODULE: ./shared/components/UIElements/Lists/IconWithText.css
var IconWithText = __webpack_require__("IY6k");

// CONCATENATED MODULE: ./shared/components/UIElements/Lists/IconWithText.js
var IconWithText_jsx = external_react_default.a.createElement;



const IconWithText_IconWithText = props => {
  return IconWithText_jsx("div", {
    className: "icon_text"
  }, props.Icon && IconWithText_jsx("span", {
    id: "icon_style"
  }, props.Icon), IconWithText_jsx("span", null, props.Text));
};

/* harmony default export */ var Lists_IconWithText = (IconWithText_IconWithText);
// CONCATENATED MODULE: ./components/Footers/AboutUs.js
var AboutUs_jsx = external_react_default.a.createElement;





function AboutUs() {
  return AboutUs_jsx("div", null, AboutUs_jsx(Footers_HeaderFooter, {
    headerText: "TEN11 App"
  }), AboutUs_jsx(Lists_IconWithText, {
    Icon: AboutUs_jsx(gi_["GiSmartphone"], {
      style: {
        color: "#fff"
      }
    }),
    Text: "IOS & Android"
  }));
}

/* harmony default export */ var Footers_AboutUs = (AboutUs);
// EXTERNAL MODULE: external "react-icons/ri"
var ri_ = __webpack_require__("Ib8v");

// CONCATENATED MODULE: ./components/Footers/FollowUs.js
var FollowUs_jsx = external_react_default.a.createElement;





const FollowUs = () => {
  return FollowUs_jsx("div", null, FollowUs_jsx(Footers_HeaderFooter, {
    headerText: "Follow us"
  }), FollowUs_jsx(Lists_IconWithText, {
    Icon: FollowUs_jsx(ri_["RiFacebookCircleLine"], {
      style: {
        color: "#fff"
      }
    }),
    Text: "Facebook",
    className: "icon_text"
  }), FollowUs_jsx(Lists_IconWithText, {
    Icon: FollowUs_jsx(ri_["RiInstagramLine"], {
      style: {
        color: "#fff"
      }
    }),
    Text: "Instagram",
    className: "icon_text"
  }));
};

/* harmony default export */ var Footers_FollowUs = (FollowUs);
// CONCATENATED MODULE: ./components/Footers/CustomerService.js
var CustomerService_jsx = external_react_default.a.createElement;




const CustomerService = () => {
  return CustomerService_jsx("div", null, CustomerService_jsx(Footers_HeaderFooter, {
    headerText: "Customer Services"
  }), CustomerService_jsx(Lists_IconWithText, {
    Text: "Help & Contact us",
    className: "icon_text"
  }), CustomerService_jsx(Lists_IconWithText, {
    Text: "Order & Shipping",
    className: "icon_text"
  }), CustomerService_jsx(Lists_IconWithText, {
    Text: "Terms & Conditions",
    className: "icon_text"
  }), CustomerService_jsx(Lists_IconWithText, {
    Text: "Privacy Policy",
    className: "icon_text"
  }));
};

/* harmony default export */ var Footers_CustomerService = (CustomerService);
// EXTERNAL MODULE: ./components/Containers/Container.js
var Container = __webpack_require__("9lea");

// CONCATENATED MODULE: ./components/Footers/Footer.js
var Footer_jsx = external_react_default.a.createElement;







const Footer_Footer = () => {
  return Footer_jsx("div", {
    className: "footer_container"
  }, Footer_jsx(Container["a" /* default */], null, Footer_jsx("div", {
    className: "footer_content"
  }, Footer_jsx(Footers_AboutUs, null), Footer_jsx(Footers_FollowUs, null), Footer_jsx(Footers_CustomerService, null))), Footer_jsx("div", {
    className: "footer_bottom"
  }, Footer_jsx("span", null, "\xA9 Copyright 2020 TEN11. All rights reserved")));
};

/* harmony default export */ var Footers_Footer = __webpack_exports__["a"] = (Footer_Footer);

/***/ }),

/***/ "C9pf":
/***/ (function(module, exports) {

module.exports = require("react-icons/fi");

/***/ }),

/***/ "DH+K":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return FETCH_MENU_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return FETCH_MENU_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return FETCH_MENU_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return SAVE_MENU; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return FETCH_LOGIN_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return FETCH_LOGIN_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FETCH_LOGIN_FAILURE; });
/* unused harmony export LOGOUT_HANDLER */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return FETCH_PRODUCTLIST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return FETCH_PRODUCTLIST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return FETCH_PRODUCTLIST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return FETCH_PAGINATION_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return FETCH_PAGINATION_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return FETCH_PAGINATION_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return GET_META_DATA; });
// menu action types
const FETCH_MENU_REQUEST = "FETCH_MENU_REQUEST";
const FETCH_MENU_SUCCESS = "FETCH_MENU_SUCCESS";
const FETCH_MENU_FAILURE = "FETCH_MENU_FAILURE";
const SAVE_MENU = "SAVE_MENU"; //account

const FETCH_LOGIN_REQUEST = "FETCH_LOGIN_REQUEST";
const FETCH_LOGIN_SUCCESS = "FETCH_LOGIN_SUCCESS";
const FETCH_LOGIN_FAILURE = "FETCH_LOGIN_FAILURE";
const LOGOUT_HANDLER = "LOGOUT_HANDLER"; //productlist

const FETCH_PRODUCTLIST_REQUEST = "FETCH_PRODUCTLIST_REQUEST";
const FETCH_PRODUCTLIST_SUCCESS = "FETCH_PRODUCTLIST_SUCCESS";
const FETCH_PRODUCTLIST_FAILURE = "FETCH_MENU_FAILURE";
const FETCH_PAGINATION_REQUEST = "FETCH_PAGINATION_REQUEST";
const FETCH_PAGINATION_SUCCESS = "FETCH_PAGINATION_SUCCESS";
const FETCH_PAGINATION_FAILURE = "FETCH_PAGINATION_FAILURE"; // get meta data

const GET_META_DATA = "GET_META_DATA";

/***/ }),

/***/ "HpLk":
/***/ (function(module, exports) {



/***/ }),

/***/ "IY6k":
/***/ (function(module, exports) {



/***/ }),

/***/ "Ib8v":
/***/ (function(module, exports) {

module.exports = require("react-icons/ri");

/***/ }),

/***/ "JMOJ":
/***/ (function(module, exports) {

module.exports = require("next-redux-wrapper");

/***/ }),

/***/ "Lhp9":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "redux"
var external_redux_ = __webpack_require__("rKB8");

// EXTERNAL MODULE: ./store/types.js
var types = __webpack_require__("DH+K");

// CONCATENATED MODULE: ./store/reducers/menuReduncer.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const initialState = {
  loading: false,
  menuData: [],
  error: ""
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case types["e" /* FETCH_MENU_REQUEST */]:
      return _objectSpread(_objectSpread({}, state), {}, {
        loading: true
      });

    case types["f" /* FETCH_MENU_SUCCESS */]:
      return _objectSpread(_objectSpread({}, state), {}, {
        menuData: action.payload,
        loading: false
      });

    case types["d" /* FETCH_MENU_FAILURE */]:
      return _objectSpread(_objectSpread({}, state), {}, {
        error: action.payload,
        loading: false
      });

    case types["n" /* SAVE_MENU */]:
      return _objectSpread(_objectSpread({}, state), {}, {
        menuData: action.payload
      });

    default:
      return state;
  }
};

/* harmony default export */ var menuReduncer = (loginReducer);
// CONCATENATED MODULE: ./store/reducers/accountReducer.js
function accountReducer_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function accountReducer_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { accountReducer_ownKeys(Object(source), true).forEach(function (key) { accountReducer_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { accountReducer_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function accountReducer_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const accountReducer_initialState = {
  loading: false,
  userData: [],
  error: ""
};

const accountReducer = (state = accountReducer_initialState, action) => {
  switch (action.type) {
    case types["b" /* FETCH_LOGIN_REQUEST */]:
      return accountReducer_objectSpread(accountReducer_objectSpread({}, state), {}, {
        loading: true
      });

    case types["c" /* FETCH_LOGIN_SUCCESS */]:
      return accountReducer_objectSpread(accountReducer_objectSpread({}, state), {}, {
        userData: action.payload,
        loading: false
      });

    case types["a" /* FETCH_LOGIN_FAILURE */]:
      return accountReducer_objectSpread(accountReducer_objectSpread({}, state), {}, {
        error: action.payload,
        loading: false
      });

    default:
      return state;
  }
};

/* harmony default export */ var reducers_accountReducer = (accountReducer);
// CONCATENATED MODULE: ./store/reducers/productReducer.js
function productReducer_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function productReducer_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { productReducer_ownKeys(Object(source), true).forEach(function (key) { productReducer_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { productReducer_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function productReducer_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const productReducer_initialState = {
  loading: false,
  loadmore: false,
  productList: [],
  totalProduct: 0,
  error: ""
};

const productListReducer = (state = productReducer_initialState, action) => {
  switch (action.type) {
    case types["k" /* FETCH_PRODUCTLIST_REQUEST */]:
      return productReducer_objectSpread(productReducer_objectSpread({}, state), {}, {
        loading: true
      });

    case types["l" /* FETCH_PRODUCTLIST_SUCCESS */]:
      return productReducer_objectSpread(productReducer_objectSpread({}, state), {}, {
        productList: action.payload.list,
        totalProduct: action.payload.total_record,
        loading: false
      });

    case types["j" /* FETCH_PRODUCTLIST_FAILURE */]:
      return productReducer_objectSpread(productReducer_objectSpread({}, state), {}, {
        error: action.payload,
        loading: false
      });

    case types["h" /* FETCH_PAGINATION_REQUEST */]:
      return productReducer_objectSpread(productReducer_objectSpread({}, state), {}, {
        loadmore: true
      });

    case types["i" /* FETCH_PAGINATION_SUCCESS */]:
      return productReducer_objectSpread(productReducer_objectSpread({}, state), {}, {
        productList: [...state.productList, ...action.payload.list],
        loadmore: false
      });

    case types["g" /* FETCH_PAGINATION_FAILURE */]:
      return productReducer_objectSpread(productReducer_objectSpread({}, state), {}, {
        error: action.payload,
        loadmore: false
      });

    default:
      return state;
  }
};

/* harmony default export */ var productReducer = (productListReducer);
// CONCATENATED MODULE: ./store/reducers/metaDataReducer.js
function metaDataReducer_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function metaDataReducer_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { metaDataReducer_ownKeys(Object(source), true).forEach(function (key) { metaDataReducer_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { metaDataReducer_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function metaDataReducer_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const metaDataReducer_initialState = {
  metaData: []
};

const metaDataReducer = (state = metaDataReducer_initialState, action) => {
  switch (action.type) {
    case types["m" /* GET_META_DATA */]:
      return metaDataReducer_objectSpread(metaDataReducer_objectSpread({}, state), {}, {
        metaData: action.payload
      });

    default:
      return state;
  }
};

/* harmony default export */ var reducers_metaDataReducer = (metaDataReducer);
// CONCATENATED MODULE: ./store/reducers/rootReducer.js




 // COMBINED REDUCERS

const reducers = {
  menu: menuReduncer,
  account: reducers_accountReducer,
  product: productReducer,
  metadata: reducers_metaDataReducer
};
/* harmony default export */ var rootReducer = __webpack_exports__["a"] = (Object(external_redux_["combineReducers"])(reducers));

/***/ }),

/***/ "NCaj":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getMetaData; });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("DH+K");

const getMetaData = param => {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__[/* GET_META_DATA */ "m"],
    payload: param
  };
};

/***/ }),

/***/ "Osoz":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "Pu65":
/***/ (function(module, exports) {



/***/ }),

/***/ "QlwO":
/***/ (function(module, exports) {



/***/ }),

/***/ "RGB9":
/***/ (function(module, exports) {



/***/ }),

/***/ "RNiq":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "getStaticProps", function() { return /* binding */ getStaticProps; });

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__("h74D");

// EXTERNAL MODULE: external "cookies"
var external_cookies_ = __webpack_require__("Vjj2");

// EXTERNAL MODULE: external "cookie-cutter"
var external_cookie_cutter_ = __webpack_require__("tXlM");

// EXTERNAL MODULE: ./store/index.js
var store = __webpack_require__("kQFM");

// EXTERNAL MODULE: ./components/layouts/Layout.js + 1 modules
var Layout = __webpack_require__("t30L");

// EXTERNAL MODULE: ./components/NewIn/NewIn.css
var NewIn = __webpack_require__("k2Kk");

// EXTERNAL MODULE: ./components/Containers/Container.js
var Container = __webpack_require__("9lea");

// EXTERNAL MODULE: ./components/NewIn/NewInItem.module.css
var NewInItem_module = __webpack_require__("QlwO");

// CONCATENATED MODULE: ./components/NewIn/NewInItem.js
var __jsx = external_react_default.a.createElement;



const NewInItem = props => {
  //   var history = useHistory();
  const productDetailHandler = () => {// history.push("/product-details");
  };

  return __jsx("div", {
    className: "new_in_item",
    onClick: productDetailHandler
  }, __jsx("img", {
    src: `${props.imagUrl}`,
    className: "new_image"
  }), __jsx("div", {
    className: "new_item_label"
  }, __jsx("span", null, "NEW IN / Hand-picked")));
};

/* harmony default export */ var NewIn_NewInItem = (NewInItem);
// EXTERNAL MODULE: external "sal.js"
var external_sal_js_ = __webpack_require__("RRjZ");
var external_sal_js_default = /*#__PURE__*/__webpack_require__.n(external_sal_js_);

// CONCATENATED MODULE: ./components/NewIn/NewIn.js
var NewIn_jsx = external_react_default.a.createElement;





const NewIn_images = [{
  id: 1,
  imagUrl: `${"https://demo.ten11kh.com/imageTen11/"}list-720px/VC_Z2672.jpg`
}, {
  id: 2,
  imagUrl: `${"https://demo.ten11kh.com/imageTen11/"}list-720px/VC_Z2824.jpg`
}, {
  id: 3,
  imagUrl: `${"https://demo.ten11kh.com/imageTen11/"}list-720px/VC_Z3196.jpg`
}, {
  id: 4,
  imagUrl: `${"https://demo.ten11kh.com/imageTen11/"}list-720px/VC_Z3504.jpg`
}];

const NewIn_NewIn = () => {
  Object(external_react_["useEffect"])(() => {
    external_sal_js_default()();
  }, []);
  return NewIn_jsx(Container["a" /* default */], null, NewIn_jsx("div", {
    className: "new_container"
  }, NewIn_jsx("div", {
    className: "new_header"
  }, NewIn_jsx("span", {
    id: "header_bold"
  }, "NEW IN"), NewIn_jsx("span", {
    id: "header_line"
  }, "/"), NewIn_jsx("span", null, "Hand-pickek daily from TEN11")), NewIn_jsx("div", {
    className: "new_content"
  }, NewIn_images.map((item, index) => NewIn_jsx("div", {
    className: "new_item",
    key: index,
    "data-sal-duration": "1200",
    "data-sal": "fade",
    "data-sal-delay": `${200 * (index + 1)}`,
    "data-sal-easing": "ease-out-bounce"
  }, NewIn_jsx(NewIn_NewInItem, item))))));
};

/* harmony default export */ var components_NewIn_NewIn = (NewIn_NewIn);
// EXTERNAL MODULE: ./components/Collections/Collection.css
var Collection = __webpack_require__("/3P+");

// EXTERNAL MODULE: ./components/Collections/CollectionItem.css
var CollectionItem = __webpack_require__("jT7s");

// CONCATENATED MODULE: ./components/Collections/CollectionItem.js
var CollectionItem_jsx = external_react_default.a.createElement;



const CollectionItem_CollectionItem = ({
  collectionName,
  image
}) => {
  return CollectionItem_jsx("div", {
    className: "collect_content"
  }, CollectionItem_jsx("img", {
    src: image,
    className: "img_collection"
  }), CollectionItem_jsx("h2", null, collectionName));
};

/* harmony default export */ var Collections_CollectionItem = (CollectionItem_CollectionItem);
// CONCATENATED MODULE: ./components/Collections/Collection.js
var Collection_jsx = external_react_default.a.createElement;






const Collection_Collection = () => {
  Object(external_react_["useEffect"])(() => {
    external_sal_js_default()();
  }, []);
  return Collection_jsx(Container["a" /* default */], null, Collection_jsx("div", {
    className: "collection_container"
  }, Collection_jsx("div", {
    "data-sal-duration": "1200",
    "data-sal": "slide-up",
    "data-sal-delay": 200,
    "data-sal-easing": "ease-out-bounce"
  }, Collection_jsx(Collections_CollectionItem, {
    collectionName: "Men's collection",
    image: `${"https://demo.ten11kh.com/imageTen11/"}full-size-1080px/VC_Z3132.jpg`
  })), Collection_jsx("div", {
    "data-sal-duration": "1200",
    "data-sal": "slide-down",
    "data-sal-delay": 500,
    "data-sal-easing": "ease-out-bounce"
  }, Collection_jsx(Collections_CollectionItem, {
    collectionName: "Women's collection",
    image: `${"https://demo.ten11kh.com/imageTen11/"}full-size-1080px/VC_Z2977.jpg`
  }))));
};

/* harmony default export */ var Collections_Collection = (Collection_Collection);
// EXTERNAL MODULE: ./components/Introductions/ShopIntroduction.css
var ShopIntroduction = __webpack_require__("hQ1w");

// EXTERNAL MODULE: ./shared/components/UIElements/Buttons/ButtonItem.module.css
var ButtonItem_module = __webpack_require__("RGB9");

// CONCATENATED MODULE: ./shared/components/UIElements/Buttons/ButtonItem.js
var ButtonItem_jsx = external_react_default.a.createElement;



const ButtonItem = props => {
  return ButtonItem_jsx("div", {
    className: "button_container",
    onClick: props.onClick
  }, ButtonItem_jsx("button", {
    type: props.type
  }, props.label));
};

/* harmony default export */ var Buttons_ButtonItem = (ButtonItem);
// CONCATENATED MODULE: ./components/Introductions/ShopIntroduction.js
var ShopIntroduction_jsx = external_react_default.a.createElement;



 // import { useHistory } from "react-router-dom";

const ShopIntroduction_ShopIntroduction = () => {
  //   var history = useHistory();
  const shopHandlerWomen = e => {// history.push({
    //   pathname: "/product/women",
    //   state: { id: "" },
    // });
  };

  const shopHandlerMen = e => {// history.push({
    //   pathname: "/product/men",
    //   state: { id: "" },
    // });
  };

  return ShopIntroduction_jsx(Container["a" /* default */], null, ShopIntroduction_jsx("div", {
    className: "shop_container"
  }, ShopIntroduction_jsx("h2", null, "A Perfect Outfits"), ShopIntroduction_jsx("span", null, "Checks, pleats and delicate details: this season, you're spoilt fir choice. Meet the syles of the season"), ShopIntroduction_jsx("div", {
    className: "shop_button_container"
  }, ShopIntroduction_jsx(Buttons_ButtonItem, {
    className: "button_women",
    label: "SHOP WOMEN",
    onClick: shopHandlerWomen
  }), ShopIntroduction_jsx(Buttons_ButtonItem, {
    className: "button_men",
    label: "SHOP MEN",
    onClick: shopHandlerMen
  }))));
};

/* harmony default export */ var Introductions_ShopIntroduction = (ShopIntroduction_ShopIntroduction);
// EXTERNAL MODULE: ./components/BannerSlide/SwipperSlider.module.css
var SwipperSlider_module = __webpack_require__("2Bxh");
var SwipperSlider_module_default = /*#__PURE__*/__webpack_require__.n(SwipperSlider_module);

// EXTERNAL MODULE: external "react-id-swiper"
var external_react_id_swiper_ = __webpack_require__("+/Rj");
var external_react_id_swiper_default = /*#__PURE__*/__webpack_require__.n(external_react_id_swiper_);

// CONCATENATED MODULE: ./components/BannerSlide/SwipperSlider.js
var SwipperSlider_jsx = external_react_default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }




 // import 'swiper/css/swiper.css'

const getWidth = () => window.innerWidth;

const SwipperSlider = ({
  images
}) => {
  const params = {
    spaceBetween: 30,
    centeredSlides: true,
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
      waitForTransition: true
    },
    speed: 2000,
    simulateTouch: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    }
  };
  return SwipperSlider_jsx(Container["a" /* default */], null, SwipperSlider_jsx("div", {
    className: SwipperSlider_module_default.a.swipper_slider_container
  }, SwipperSlider_jsx(external_react_id_swiper_default.a, _extends({}, params, {
    rebuildOnUpdate: true
  }), images.map((image, i) => SwipperSlider_jsx("div", {
    className: SwipperSlider_module_default.a.slide_content,
    key: i
  }, SwipperSlider_jsx("img", {
    src: image.image,
    style: {
      width: 1500,
      height: "100%"
    }
  }))))));
};

/* harmony default export */ var BannerSlide_SwipperSlider = (SwipperSlider);
// EXTERNAL MODULE: ./components/Introductions/SaleIntroduction.css
var SaleIntroduction = __webpack_require__("3aXE");

// CONCATENATED MODULE: ./components/Introductions/SaleIntroduction.js
var SaleIntroduction_jsx = external_react_default.a.createElement;



const SaleIntroduction_SaleIntroduction = () => {
  return SaleIntroduction_jsx("div", {
    className: "sale__intro"
  }, SaleIntroduction_jsx("span", {
    id: "sale_text"
  }, "Sale"), SaleIntroduction_jsx("span", {
    id: "sale_line"
  }, "|"), SaleIntroduction_jsx("span", null, " Over 200 items now at 50% off"));
};

/* harmony default export */ var Introductions_SaleIntroduction = (SaleIntroduction_SaleIntroduction);
// EXTERNAL MODULE: ./shared/hooks/seviceApi.js
var seviceApi = __webpack_require__("shyT");

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");

// EXTERNAL MODULE: ./store/actions/metaDataAction.js
var metaDataAction = __webpack_require__("NCaj");

// EXTERNAL MODULE: ./store/actions/menuAction.js
var menuAction = __webpack_require__("jVLp");

// CONCATENATED MODULE: ./pages/index.js
var pages_jsx = external_react_default.a.createElement;
















const pages_images = [{
  id: 0,
  image: `${"https://demo.ten11kh.com/imageTen11/"}/slide-2500px/VC_Z2739.jpg`
}, {
  id: 1,
  image: `${"https://demo.ten11kh.com/imageTen11/"}/banner (1).jpg`
}, {
  id: 2,
  image: `${"https://demo.ten11kh.com/imageTen11/"}/banner (3).jpg`
}];

const Home = props => {
  const globalState = Object(external_react_redux_["useSelector"])(state => state.metadata.d);
  const dispatch = Object(external_react_redux_["useDispatch"])();
  console.log(props);
  const router = Object(router_["useRouter"])();
  Object(external_react_["useEffect"])(() => {
    props.getMetaData({
      meta_title: "TEN11 - Retail store in Phnom Penh & Siem Reap, Cambodia",
      meta_description: "We are a retail clothing store offering various brands of original product. Located in Phnom Penh and Siem Reap, Cambodia.",
      meta_keyword: "Clothes Shop, Factory outlet, Zando Brand,  Scottmo Brand, Men Shop, Women Shop, Kids Shop, Accessory Shop,  Phnom Penh, Siem Reap, The Heritage Walk, Angkor Wat, Siem Reap Airport, Preah Ang Chek Preah Ang Chom, The Park Community Mall, TK Avenue, Zaman University, Aeon Mall, City Mall, Olympic Stadium, Shopping Mall, Cambodia"
    });
    props.saveMenu(props.menu.menu);
  }, []);

  if (router.isFallback) {
    return pages_jsx("div", null, "Loading...");
  }

  return pages_jsx(Layout["a" /* default */], {
    menu: props.menu.menu
  }, pages_jsx("div", null, globalState), pages_jsx(Introductions_SaleIntroduction, null), pages_jsx(Introductions_ShopIntroduction, null), pages_jsx(Collections_Collection, null), pages_jsx(components_NewIn_NewIn, null));
};

const getStaticProps = async () => {
  const api = Object(seviceApi["a" /* serviceApiFormData */])();
  const res = await api.post("MenuApp/getMenu");
  const menu = res.data;
  return {
    props: {
      menu
    }
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getMetaData: param => dispatch(Object(metaDataAction["a" /* getMetaData */])(param)),
    saveMenu: param => dispatch(Object(menuAction["b" /* saveMenu */])(param))
  };
};

/* harmony default export */ var pages = __webpack_exports__["default"] = (Object(external_react_redux_["connect"])(null, mapDispatchToProps)(Home));

/***/ }),

/***/ "RRjZ":
/***/ (function(module, exports) {

module.exports = require("sal.js");

/***/ }),

/***/ "S3md":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/***/ }),

/***/ "T8f9":
/***/ (function(module, exports) {

module.exports = require("redux-persist/lib/storage");

/***/ }),

/***/ "TqRt":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "UtK9":
/***/ (function(module, exports) {



/***/ }),

/***/ "VNb8":
/***/ (function(module, exports) {

module.exports = require("redux-persist");

/***/ }),

/***/ "Vjj2":
/***/ (function(module, exports) {

module.exports = require("cookies");

/***/ }),

/***/ "X24+":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.removePathTrailingSlash = removePathTrailingSlash;
exports.normalizePathTrailingSlash = void 0;
/**
* Removes the trailing slash of a path if there is one. Preserves the root path `/`.
*/

function removePathTrailingSlash(path) {
  return path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;
}
/**
* Normalizes the trailing slash of a path according to the `trailingSlash` option
* in `next.config.js`.
*/


const normalizePathTrailingSlash =  true ? path => {
  if (/\.[^/]+\/?$/.test(path)) {
    return removePathTrailingSlash(path);
  } else if (path.endsWith('/')) {
    return path;
  } else {
    return path + '/';
  }
} : undefined;
exports.normalizePathTrailingSlash = normalizePathTrailingSlash;

/***/ }),

/***/ "YFqc":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cTJO")


/***/ }),

/***/ "YTqd":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteRegex = getRouteRegex; // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function parseParameter(param) {
  const optional = param.startsWith('[') && param.endsWith(']');

  if (optional) {
    param = param.slice(1, -1);
  }

  const repeat = param.startsWith('...');

  if (repeat) {
    param = param.slice(3);
  }

  return {
    key: param,
    repeat,
    optional
  };
}

function getRouteRegex(normalizedRoute) {
  const segments = (normalizedRoute.replace(/\/$/, '') || '/').slice(1).split('/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = segments.map(segment => {
    if (segment.startsWith('[') && segment.endsWith(']')) {
      const {
        key,
        optional,
        repeat
      } = parseParameter(segment.slice(1, -1));
      groups[key] = {
        pos: groupIndex++,
        repeat,
        optional
      };
      return repeat ? optional ? '(?:/(.+?))?' : '/(.+?)' : '/([^/]+?)';
    } else {
      return `/${escapeRegex(segment)}`;
    }
  }).join(''); // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (true) {
    let routeKeyCharCode = 97;
    let routeKeyCharLength = 1; // builds a minimal routeKey using only a-z and minimal number of characters

    const getSafeRouteKey = () => {
      let routeKey = '';

      for (let i = 0; i < routeKeyCharLength; i++) {
        routeKey += String.fromCharCode(routeKeyCharCode);
        routeKeyCharCode++;

        if (routeKeyCharCode > 122) {
          routeKeyCharLength++;
          routeKeyCharCode = 97;
        }
      }

      return routeKey;
    };

    const routeKeys = {};
    let namedParameterizedRoute = segments.map(segment => {
      if (segment.startsWith('[') && segment.endsWith(']')) {
        const {
          key,
          optional,
          repeat
        } = parseParameter(segment.slice(1, -1)); // replace any non-word characters since they can break
        // the named regex

        let cleanedKey = key.replace(/\W/g, '');
        let invalidKey = false; // check if the key is still invalid and fallback to using a known
        // safe key

        if (cleanedKey.length === 0 || cleanedKey.length > 30) {
          invalidKey = true;
        }

        if (!isNaN(parseInt(cleanedKey.substr(0, 1)))) {
          invalidKey = true;
        }

        if (invalidKey) {
          cleanedKey = getSafeRouteKey();
        }

        routeKeys[cleanedKey] = key;
        return repeat ? optional ? `(?:/(?<${cleanedKey}>.+?))?` : `/(?<${cleanedKey}>.+?)` : `/(?<${cleanedKey}>[^/]+?)`;
      } else {
        return `/${escapeRegex(segment)}`;
      }
    }).join('');
    return {
      re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
      groups,
      routeKeys,
      namedRegex: `^${namedParameterizedRoute}(?:/)?$`
    };
  }

  return {
    re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
    groups
  };
}

/***/ }),

/***/ "ZSx1":
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cDf5":
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "cTJO":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("284h");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__("cDcd"));

var _router = __webpack_require__("elyg");

var _router2 = __webpack_require__("nOHt");

let cachedObserver;
const listeners = new Map();
const IntersectionObserver = false ? undefined : null;
const prefetched = {};

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (cachedObserver) {
    return cachedObserver;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return cachedObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      const cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        cachedObserver.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

const listenToIntersections = (el, cb) => {
  const observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

function prefetch(router, href, as, options) {
  if (true) return;
  if (!(0, _router.isLocalURL)(href)) return; // Prefetch the JSON page if asked (only in the client)
  // We need to handle a prefetch error here since we may be
  // loading with priority which can reject but we don't
  // want to force navigation since this is only a prefetch

  router.prefetch(href, as, options).catch(err => {
    if (false) {}
  }); // Join on an invalid URI character

  prefetched[href + '%' + as] = true;
}

function isModifiedEvent(event) {
  const {
    target
  } = event.currentTarget;
  return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || // triggers resource download
  event.nativeEvent && event.nativeEvent.which === 2;
}

function linkClicked(e, router, href, as, replace, shallow, scroll) {
  const {
    nodeName
  } = e.currentTarget;

  if (nodeName === 'A' && (isModifiedEvent(e) || !(0, _router.isLocalURL)(href))) {
    // ignore click for browser’s default behavior
    return;
  }

  e.preventDefault(); //  avoid scroll for urls with anchor refs

  if (scroll == null) {
    scroll = as.indexOf('#') < 0;
  } // replace state instead of push if prop is present


  router[replace ? 'replace' : 'push'](href, as, {
    shallow
  }).then(success => {
    if (!success) return;

    if (scroll) {
      window.scrollTo(0, 0);
      document.body.focus();
    }
  });
}

function Link(props) {
  if (false) {}

  const p = props.prefetch !== false;

  const [childElm, setChildElm] = _react.default.useState();

  const router = (0, _router2.useRouter)();
  const pathname = router && router.pathname || '/';

  const {
    href,
    as
  } = _react.default.useMemo(() => {
    const resolvedHref = (0, _router.resolveHref)(pathname, props.href);
    return {
      href: resolvedHref,
      as: props.as ? (0, _router.resolveHref)(pathname, props.as) : resolvedHref
    };
  }, [pathname, props.href, props.as]);

  _react.default.useEffect(() => {
    if (p && IntersectionObserver && childElm && childElm.tagName && (0, _router.isLocalURL)(href)) {
      // Join on an invalid URI character
      const isPrefetched = prefetched[href + '%' + as];

      if (!isPrefetched) {
        return listenToIntersections(childElm, () => {
          prefetch(router, href, as);
        });
      }
    }
  }, [p, childElm, href, as, router]);

  let {
    children,
    replace,
    shallow,
    scroll
  } = props; // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

  if (typeof children === 'string') {
    children = /*#__PURE__*/_react.default.createElement("a", null, children);
  } // This will return the first child, if multiple are provided it will throw an error


  const child = _react.Children.only(children);

  const childProps = {
    ref: el => {
      if (el) setChildElm(el);

      if (child && typeof child === 'object' && child.ref) {
        if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
          child.ref.current = el;
        }
      }
    },
    onClick: e => {
      if (child.props && typeof child.props.onClick === 'function') {
        child.props.onClick(e);
      }

      if (!e.defaultPrevented) {
        linkClicked(e, router, href, as, replace, shallow, scroll);
      }
    }
  };

  if (p) {
    childProps.onMouseEnter = e => {
      if (!(0, _router.isLocalURL)(href)) return;

      if (child.props && typeof child.props.onMouseEnter === 'function') {
        child.props.onMouseEnter(e);
      }

      prefetch(router, href, as, {
        priority: true
      });
    };
  } // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
  // defined, we specify the current 'href', so that repetition is not needed by the user


  if (props.passHref || child.type === 'a' && !('href' in child.props)) {
    childProps.href = (0, _router.addBasePath)(as);
  }

  return /*#__PURE__*/_react.default.cloneElement(child, childProps);
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "dZ6Y":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = mitt;
/*
MIT License
Copyright (c) Jason Miller (https://jasonformat.com/)
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
// This file is based on https://github.com/developit/mitt/blob/v1.1.3/src/index.js
// It's been edited for the needs of this script
// See the LICENSE at the top of the file

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

/***/ }),

/***/ "elyg":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.hasBasePath = hasBasePath;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.isLocalURL = isLocalURL;
exports.resolveHref = resolveHref;
exports.markLoadingError = markLoadingError;
exports.default = void 0;

var _normalizeTrailingSlash = __webpack_require__("X24+");

var _denormalizePagePath = __webpack_require__("wkBG");

var _mitt = _interopRequireDefault(__webpack_require__("dZ6Y"));

var _utils = __webpack_require__("g/15");

var _isDynamic = __webpack_require__("/jkW");

var _parseRelativeUrl = __webpack_require__("hS4m");

var _querystring = __webpack_require__("3WeD");

var _resolveRewrites = _interopRequireDefault(__webpack_require__("S3md"));

var _routeMatcher = __webpack_require__("gguc");

var _routeRegex = __webpack_require__("YTqd");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
/* global __NEXT_DATA__ */
// tslint:disable:no-console


const basePath =  false || '';

function buildCancellationError() {
  return Object.assign(new Error('Route Cancelled'), {
    cancelled: true
  });
}

function hasBasePath(path) {
  return path === basePath || path.startsWith(basePath + '/');
}

function addBasePath(path) {
  // we only add the basepath on relative urls
  return basePath && path.startsWith('/') ? path === '/' ? (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(basePath) : basePath + path : path;
}

function delBasePath(path) {
  return path.slice(basePath.length) || '/';
}
/**
* Detects whether a given url is routable by the Next.js router (browser only).
*/


function isLocalURL(url) {
  if (url.startsWith('/')) return true;

  try {
    // absolute urls can be local if they are on the same origin
    const locationOrigin = (0, _utils.getLocationOrigin)();
    const resolved = new URL(url, locationOrigin);
    return resolved.origin === locationOrigin && hasBasePath(resolved.pathname);
  } catch (_) {
    return false;
  }
}
/**
* Resolves a given hyperlink with a certain router state (basePath not included).
* Preserves absolute urls.
*/


function resolveHref(currentPath, href) {
  // we use a dummy base url for relative urls
  const base = new URL(currentPath, 'http://n');
  const urlAsString = typeof href === 'string' ? href : (0, _utils.formatWithValidation)(href);

  try {
    const finalUrl = new URL(urlAsString, base);
    finalUrl.pathname = (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(finalUrl.pathname); // if the origin didn't change, it means we received a relative href

    return finalUrl.origin === base.origin ? finalUrl.href.slice(finalUrl.origin.length) : finalUrl.href;
  } catch (_) {
    return urlAsString;
  }
}

const PAGE_LOAD_ERROR = Symbol('PAGE_LOAD_ERROR');

function markLoadingError(err) {
  return Object.defineProperty(err, PAGE_LOAD_ERROR, {});
}

function prepareUrlAs(router, url, as) {
  // If url and as provided as an object representation,
  // we'll format them into the string version here.
  return {
    url: addBasePath(resolveHref(router.pathname, url)),
    as: as ? addBasePath(resolveHref(router.pathname, as)) : as
  };
}

const manualScrollRestoration =  false && false;

function fetchRetry(url, attempts) {
  return fetch(url, {
    // Cookies are required to be present for Next.js' SSG "Preview Mode".
    // Cookies may also be required for `getServerSideProps`.
    //
    // > `fetch` won’t send cookies, unless you set the credentials init
    // > option.
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    //
    // > For maximum browser compatibility when it comes to sending &
    // > receiving cookies, always supply the `credentials: 'same-origin'`
    // > option instead of relying on the default.
    // https://github.com/github/fetch#caveats
    credentials: 'same-origin'
  }).then(res => {
    if (!res.ok) {
      if (attempts > 1 && res.status >= 500) {
        return fetchRetry(url, attempts - 1);
      }

      throw new Error(`Failed to load static props`);
    }

    return res.json();
  });
}

function fetchNextData(dataHref, isServerRender) {
  return fetchRetry(dataHref, isServerRender ? 3 : 1).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      markLoadingError(err);
    }

    throw err;
  });
}

class Router {
  /**
  * Map of all components loaded in `Router`
  */
  // Static Data Cache
  constructor(_pathname, _query, _as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    initialStyleSheets,
    err,
    subscription,
    isFallback
  }) {
    this.route = void 0;
    this.pathname = void 0;
    this.query = void 0;
    this.asPath = void 0;
    this.basePath = void 0;
    this.components = void 0;
    this.sdc = {};
    this.sub = void 0;
    this.clc = void 0;
    this.pageLoader = void 0;
    this._bps = void 0;
    this.events = void 0;
    this._wrapApp = void 0;
    this.isSsr = void 0;
    this.isFallback = void 0;
    this._inFlightRoute = void 0;
    this._shallow = void 0;

    this.onPopState = e => {
      const state = e.state;

      if (!state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', (0, _utils.formatWithValidation)({
          pathname: addBasePath(pathname),
          query
        }), (0, _utils.getURL)());
        return;
      }

      if (!state.__N) {
        return;
      }

      const {
        url,
        as,
        options
      } = state;
      const {
        pathname
      } = (0, _parseRelativeUrl.parseRelativeUrl)(url); // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site

      if (this.isSsr && as === this.asPath && pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(state)) {
        return;
      }

      this.change('replaceState', url, as, Object.assign({}, options, {
        shallow: options.shallow && this._shallow
      }));
    }; // represents the current component key


    this.route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(_pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (_pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        styleSheets: initialStyleSheets,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App,
      styleSheets: [
        /* /_app does not need its stylesheets managed */
      ]
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = _pathname;
    this.query = _query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    (0, _isDynamic.isDynamicRoute)(_pathname) && __NEXT_DATA__.autoExport ? _pathname : _as;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;

    if (false) {}
  }

  reload() {
    window.location.reload();
  }
  /**
  * Go back in history
  */


  back() {
    window.history.back();
  }
  /**
  * Performs a `pushState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  push(url, as = url, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('pushState', url, as, options);
  }
  /**
  * Performs a `replaceState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  replace(url, as = url, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('replaceState', url, as, options);
  }

  async change(method, url, as, options) {
    if (!isLocalURL(url)) {
      window.location.href = url;
      return false;
    }

    if (!options._h) {
      this.isSsr = false;
    } // marking route changes as a navigation start entry


    if (_utils.ST) {
      performance.mark('routeChange');
    }

    if (this._inFlightRoute) {
      this.abortComponentLoad(this._inFlightRoute);
    }

    const cleanedAs = hasBasePath(as) ? delBasePath(as) : as;
    this._inFlightRoute = as; // If the url change is only related to a hash change
    // We should not proceed. We should only change the state.
    // WARNING: `_h` is an internal option for handing Next.js client-side
    // hydration. Your app should _never_ use this property. It may change at
    // any time without notice.

    if (!options._h && this.onlyAHashChange(cleanedAs)) {
      this.asPath = cleanedAs;
      Router.events.emit('hashChangeStart', as); // TODO: do we need the resolved href when only a hash change?

      this.changeState(method, url, as, options);
      this.scrollToHash(cleanedAs);
      this.notify(this.components[this.route]);
      Router.events.emit('hashChangeComplete', as);
      return true;
    } // The build manifest needs to be loaded before auto-static dynamic pages
    // get their query parameters to allow ensuring they can be parsed properly
    // when rewritten to


    const pages = await this.pageLoader.getPageList();
    const {
      __rewrites: rewrites
    } = await this.pageLoader.promisedBuildManifest;
    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname,
      searchParams
    } = parsed;
    parsed = this._resolveHref(parsed, pages);

    if (parsed.pathname !== pathname) {
      pathname = parsed.pathname;
      url = (0, _utils.formatWithValidation)(parsed);
    }

    const query = (0, _querystring.searchParamsToUrlQuery)(searchParams); // url and as should always be prefixed with basePath by this
    // point by either next/link or router.push/replace so strip the
    // basePath from the pathname to match the pages dir 1-to-1

    pathname = pathname ? (0, _normalizeTrailingSlash.removePathTrailingSlash)(delBasePath(pathname)) : pathname; // If asked to change the current URL we should reload the current page
    // (not location.reload() but reload getInitialProps and other Next.js stuffs)
    // We also need to set the method = replaceState always
    // as this should not go into the history (That's how browsers work)
    // We should compare the new asPath to the current asPath, not the url

    if (!this.urlIsNew(cleanedAs)) {
      method = 'replaceState';
    }

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
    const {
      shallow = false
    } = options; // we need to resolve the as value using rewrites for dynamic SSG
    // pages to allow building the data URL correctly

    let resolvedAs = as;

    if (false) {}

    resolvedAs = delBasePath(resolvedAs);

    if ((0, _isDynamic.isDynamicRoute)(route)) {
      const {
        pathname: asPathname
      } = (0, _parseRelativeUrl.parseRelativeUrl)(resolvedAs);
      const routeRegex = (0, _routeRegex.getRouteRegex)(route);
      const routeMatch = (0, _routeMatcher.getRouteMatcher)(routeRegex)(asPathname);

      if (!routeMatch) {
        const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

        if (missingParams.length > 0) {
          if (false) {}

          throw new Error(`The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). ` + `Read more: https://err.sh/vercel/next.js/incompatible-href-as`);
        }
      } else {
        // Merge params into `query`, overwriting any specified in search
        Object.assign(query, routeMatch);
      }
    }

    Router.events.emit('routeChangeStart', as);

    try {
      const routeInfo = await this.getRouteInfo(route, pathname, query, as, shallow);
      let {
        error
      } = routeInfo;
      Router.events.emit('beforeHistoryChange', as);
      this.changeState(method, url, as, options);

      if (false) {}

      await this.set(route, pathname, query, cleanedAs, routeInfo).catch(e => {
        if (e.cancelled) error = error || e;else throw e;
      });

      if (error) {
        Router.events.emit('routeChangeError', error, cleanedAs);
        throw error;
      }

      if (false) {}

      Router.events.emit('routeChangeComplete', as);
      return true;
    } catch (err) {
      if (err.cancelled) {
        return false;
      }

      throw err;
    }
  }

  changeState(method, url, as, options = {}) {
    if (false) {}

    if (method !== 'pushState' || (0, _utils.getURL)() !== as) {
      this._shallow = options.shallow;
      window.history[method]({
        url,
        as,
        options,
        __N: true
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  async handleRouteInfoError(err, pathname, query, as, loadErrorFail) {
    if (err.cancelled) {
      // bubble up cancellation errors
      throw err;
    }

    if (PAGE_LOAD_ERROR in err || loadErrorFail) {
      Router.events.emit('routeChangeError', err, as); // If we can't load the page it could be one of following reasons
      //  1. Page doesn't exists
      //  2. Page does exist in a different zone
      //  3. Internal error while loading the page
      // So, doing a hard reload is the proper way to deal with this.

      window.location.href = as; // Changing the URL doesn't block executing the current code path.
      // So let's throw a cancellation error stop the routing logic.

      throw buildCancellationError();
    }

    try {
      const {
        page: Component,
        styleSheets
      } = await this.fetchComponent('/_error');
      const routeInfo = {
        Component,
        styleSheets,
        err,
        error: err
      };

      try {
        routeInfo.props = await this.getInitialProps(Component, {
          err,
          pathname,
          query
        });
      } catch (gipErr) {
        console.error('Error in error page `getInitialProps`: ', gipErr);
        routeInfo.props = {};
      }

      return routeInfo;
    } catch (routeInfoErr) {
      return this.handleRouteInfoError(routeInfoErr, pathname, query, as, true);
    }
  }

  async getRouteInfo(route, pathname, query, as, shallow = false) {
    try {
      const cachedRouteInfo = this.components[route];

      if (shallow && cachedRouteInfo && this.route === route) {
        return cachedRouteInfo;
      }

      const routeInfo = cachedRouteInfo ? cachedRouteInfo : await this.fetchComponent(route).then(res => ({
        Component: res.page,
        styleSheets: res.styleSheets,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }));
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (false) {}

      let dataHref;

      if (__N_SSG || __N_SSP) {
        dataHref = this.pageLoader.getDataHref((0, _utils.formatWithValidation)({
          pathname,
          query
        }), delBasePath(as), __N_SSG);
      }

      const props = await this._getData(() => __N_SSG ? this._getStaticData(dataHref) : __N_SSP ? this._getServerData(dataHref) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      }));
      routeInfo.props = props;
      this.components[route] = routeInfo;
      return routeInfo;
    } catch (err) {
      return this.handleRouteInfoError(err, pathname, query, as);
    }
  }

  set(route, pathname, query, as, data) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    return this.notify(data);
  }
  /**
  * Callback to execute before replacing router state
  * @param cb callback to be executed
  */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }

  _resolveHref(parsedHref, pages) {
    const {
      pathname
    } = parsedHref;
    const cleanPathname = (0, _denormalizePagePath.denormalizePagePath)(delBasePath(pathname));

    if (cleanPathname === '/404' || cleanPathname === '/_error') {
      return parsedHref;
    } // handle resolving href for dynamic routes


    if (!pages.includes(cleanPathname)) {
      // eslint-disable-next-line array-callback-return
      pages.some(page => {
        if ((0, _isDynamic.isDynamicRoute)(page) && (0, _routeRegex.getRouteRegex)(page).re.test(cleanPathname)) {
          parsedHref.pathname = addBasePath(page);
          return true;
        }
      });
    }

    return parsedHref;
  }
  /**
  * Prefetch page code, you may wait for the data during page rendering.
  * This feature only works in production!
  * @param url the href of prefetched page
  * @param asPath the as path of the prefetched page
  */


  async prefetch(url, asPath = url, options = {}) {
    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname
    } = parsed;
    const pages = await this.pageLoader.getPageList();
    parsed = this._resolveHref(parsed, pages);

    if (parsed.pathname !== pathname) {
      pathname = parsed.pathname;
      url = (0, _utils.formatWithValidation)(parsed);
    } // Prefetch is not supported in development mode because it would trigger on-demand-entries


    if (false) {}

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
    await Promise.all([this.pageLoader.prefetchData(url, asPath), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]);
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  _getStaticData(dataHref) {
    const {
      href: cacheKey
    } = new URL(dataHref, window.location.href);

    if ( true && this.sdc[cacheKey]) {
      return Promise.resolve(this.sdc[cacheKey]);
    }

    return fetchNextData(dataHref, this.isSsr).then(data => {
      this.sdc[cacheKey] = data;
      return data;
    });
  }

  _getServerData(dataHref) {
    return fetchNextData(dataHref, this.isSsr);
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return (0, _utils.loadGetInitialProps)(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as) {
    if (this.clc) {
      Router.events.emit('routeChangeError', buildCancellationError(), as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    return this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = (0, _mitt.default)();

/***/ }),

/***/ "g/15":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.execOnce = execOnce;
exports.getLocationOrigin = getLocationOrigin;
exports.getURL = getURL;
exports.getDisplayName = getDisplayName;
exports.isResSent = isResSent;
exports.loadGetInitialProps = loadGetInitialProps;
exports.formatWithValidation = formatWithValidation;
exports.ST = exports.SP = exports.urlObjectKeys = void 0;

var _formatUrl = __webpack_require__("6D7l");
/**
* Utils
*/


function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }

    return result;
  };
}

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

function isResSent(res) {
  return res.finished || res.headersSent;
}

async function loadGetInitialProps(App, ctx) {
  if (false) { var _App$prototype; } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (false) {}

  return props;
}

const urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];
exports.urlObjectKeys = urlObjectKeys;

function formatWithValidation(url) {
  if (false) {}

  return (0, _formatUrl.formatUrl)(url);
}

const SP = typeof performance !== 'undefined';
exports.SP = SP;
const ST = SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';
exports.ST = ST;

/***/ }),

/***/ "gguc":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteMatcher = getRouteMatcher;

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

/***/ }),

/***/ "h74D":
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "hQ1w":
/***/ (function(module, exports) {



/***/ }),

/***/ "hS4m":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.parseRelativeUrl = parseRelativeUrl;

var _utils = __webpack_require__("g/15");

const DUMMY_BASE = new URL(true ? 'http://n' : undefined);
/**
* Parses path-relative urls (e.g. `/hello/world?foo=bar`). If url isn't path-relative
* (e.g. `./hello`) then at least base must be.
* Absolute urls are rejected with one exception, in the browser, absolute urls that are on
* the current origin will be parsed as relative
*/

function parseRelativeUrl(url, base) {
  const resolvedBase = base ? new URL(base, DUMMY_BASE) : DUMMY_BASE;
  const {
    pathname,
    searchParams,
    search,
    hash,
    href,
    origin,
    protocol
  } = new URL(url, resolvedBase);

  if (origin !== DUMMY_BASE.origin || protocol !== 'http:' && protocol !== 'https:') {
    throw new Error('invariant: invalid relative URL');
  }

  return {
    pathname,
    searchParams,
    search,
    hash,
    href: href.slice(DUMMY_BASE.origin.length)
  };
}

/***/ }),

/***/ "jT7s":
/***/ (function(module, exports) {



/***/ }),

/***/ "jVLp":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return fetchMenu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return saveMenu; });
/* unused harmony export fetchMenuRequest */
/* unused harmony export fetchMenuSuccess */
/* unused harmony export fetchMenuFailure */
/* harmony import */ var _shared_hooks_seviceApi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("shyT");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("DH+K");


var service = Object(_shared_hooks_seviceApi__WEBPACK_IMPORTED_MODULE_0__[/* serviceApiFormData */ "a"])();
const fetchMenu = () => {
  return dispatch => {
    dispatch(fetchMenuRequest());
    service.post("MenuApp/getMenu").then(response => {
      console.log(response);
      console.log(dispatch);
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_1__[/* FETCH_MENU_SUCCESS */ "f"],
        payload: response.data.menu
      }); // dispatch(fetchMenuSuccess(response.data.menu));
    }).catch(error => {
      dispatch(fetchMenuFailure(error.message));
    });
  };
};
const saveMenu = param => {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_1__[/* SAVE_MENU */ "n"],
    payload: param
  };
};
const fetchMenuRequest = () => {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_1__[/* FETCH_MENU_REQUEST */ "e"]
  };
};
const fetchMenuSuccess = param => {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_1__[/* FETCH_MENU_SUCCESS */ "f"],
    payload: param
  };
};
const fetchMenuFailure = error => {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_1__[/* FETCH_MENU_FAILURE */ "d"],
    payload: error
  };
};

/***/ }),

/***/ "k2Kk":
/***/ (function(module, exports) {



/***/ }),

/***/ "kQFM":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export initializeStore */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return useStore; });
/* unused harmony export wrapper */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("rKB8");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("JMOJ");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("ufKq");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("ZSx1");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _reducers_rootReducer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("Lhp9");
/* harmony import */ var redux_persist__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("VNb8");
/* harmony import */ var redux_persist__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(redux_persist__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("T8f9");
/* harmony import */ var redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_7__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









let store;
const persistConfig = {
  key: "primary",
  storage: (redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_7___default()),
  whitelist: ["metadata"]
};
const persistedReducer = Object(redux_persist__WEBPACK_IMPORTED_MODULE_6__["persistReducer"])(persistConfig, _reducers_rootReducer__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"]);

function initStore(initialState) {
  return Object(redux__WEBPACK_IMPORTED_MODULE_1__["createStore"])(persistedReducer, initialState, Object(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_3__["composeWithDevTools"])(Object(redux__WEBPACK_IMPORTED_MODULE_1__["applyMiddleware"])(redux_thunk__WEBPACK_IMPORTED_MODULE_4___default.a)));
}

const initializeStore = preloadedState => {
  var _store2;

  let _store = (_store2 = store) !== null && _store2 !== void 0 ? _store2 : initStore(preloadedState); // After navigating to a page with an initial Redux state, merge that state
  // with the current state in the store, and create a new store


  if (preloadedState && store) {
    _store = initStore(_objectSpread(_objectSpread({}, store.getState()), preloadedState)); // Reset the current store

    store = undefined;
  } // For SSG and SSR always create a new store


  if (true) return _store; // Create the store once in the client

  if (!store) store = _store;
  return _store;
};
function useStore(initialState) {
  const store = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(() => initializeStore(initialState), [initialState]);
  return store;
}
const wrapper = Object(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_2__["createWrapper"])(initializeStore);

/***/ }),

/***/ "kS/G":
/***/ (function(module, exports) {

module.exports = require("react-icons/gi");

/***/ }),

/***/ "nOHt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("284h");

var _interopRequireDefault = __webpack_require__("TqRt");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router2 = _interopRequireWildcard(__webpack_require__("elyg"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__("Osoz");

var _withRouter = _interopRequireDefault(__webpack_require__("0Bsm"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = (...args) => {
    const router = getRouter();
    return router[field](...args);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, (...args) => {
      const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`;
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...args);
        } catch (err) {
          console.error(`Error when running the Router event: ${eventField}`);
          console.error(`${err.message}\n${err.stack}`);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


const createRouter = (...args) => {
  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = (...args) => {
      return _router[field](...args);
    };
  });
  return instance;
}

/***/ }),

/***/ "rKB8":
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "shyT":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export serviceApi */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return serviceApiFormData; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("zr5I");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

const serviceApi = () => {
  const defaultOptions = {
    baseURL: "https://ten11kh.com:10010/demo/api/",
    method: "get",
    timeout: 1000 * 50,
    headers: {
      "Content-Type": "application/json"
    }
  };
  let instance = axios__WEBPACK_IMPORTED_MODULE_0___default.a.create(defaultOptions);
  instance.interceptors.request.use(function (config) {
    const token = JSON.parse(localStorage.getItem("token"));
    config.headers.Authorization = token ? `Bearer ${token.token}` : "";
    return config;
  });
  return instance;
};
const serviceApiFormData = () => {
  const defaultOptions = {
    baseURL: "https://ten11kh.com:10010/demo/api/",
    method: "get",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    }
  };
  let instance = axios__WEBPACK_IMPORTED_MODULE_0___default.a.create(defaultOptions);
  return instance;
};

/***/ }),

/***/ "t30L":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__("h74D");

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__("xnum");
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// EXTERNAL MODULE: ./components/Headers/HeaderSide.css
var HeaderSide = __webpack_require__("5qM9");

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// EXTERNAL MODULE: external "cookie-cutter"
var external_cookie_cutter_ = __webpack_require__("tXlM");
var external_cookie_cutter_default = /*#__PURE__*/__webpack_require__.n(external_cookie_cutter_);

// EXTERNAL MODULE: external "react-icons/bs"
var bs_ = __webpack_require__("7v8O");

// EXTERNAL MODULE: external "react-icons/fi"
var fi_ = __webpack_require__("C9pf");

// EXTERNAL MODULE: external "react-icons/ai"
var ai_ = __webpack_require__("/WcL");

// EXTERNAL MODULE: ./components/Containers/Container.js
var Container = __webpack_require__("9lea");

// EXTERNAL MODULE: ./store/actions/metaDataAction.js
var metaDataAction = __webpack_require__("NCaj");

// CONCATENATED MODULE: ./components/Headers/HeaderSide.js
var __jsx = external_react_default.a.createElement;











const HeaderSide_HeaderSide = props => {
  const productListHanlder = menu => {
    external_cookie_cutter_default.a.set("category_seo", menu.category_seo_url);
    props.getMetaData({
      meta_title: menu.meta_title,
      meta_description: menu.meta_description,
      meta_keyword: menu.meta_keyword
    });
  };

  return __jsx(external_react_default.a.Fragment, null, __jsx("div", {
    className: "header-wrapper"
  }, __jsx("div", {
    className: "header-content"
  }, __jsx("div", {
    className: props.hideNav ? "hide-on-scoll" : "hide-on-scoll show-on-scoll"
  }, __jsx(Container["a" /* default */], null, __jsx("div", {
    className: "utili-header"
  }, __jsx("div", {
    className: "row-container"
  }, __jsx("div", {
    className: "row-header"
  }, __jsx("div", {
    className: "col-md-6"
  }, __jsx("div", {
    className: "col-left"
  }, __jsx(fi_["FiPhone"], {
    style: {
      marginRight: 4
    }
  }), __jsx("span", null, "+855 81 999 716"), __jsx("span", {
    className: "line-style"
  }, "|"), __jsx(ai_["AiOutlineMail"], {
    style: {
      marginRight: 4
    }
  }), __jsx("span", null, "sale@ten11kh.com"))), __jsx("div", {
    className: "col-md-6"
  }, __jsx("div", {
    className: "col-right"
  }, __jsx(link_default.a, {
    href: "/account"
  }, __jsx("a", null, __jsx("span", {
    className: "i-user-xs icon-user"
  }, "Log in"))), __jsx("div", {
    className: "cart_bag"
  }, __jsx(bs_["BsBag"], {
    size: 20,
    style: {
      marginRight: 3
    }
  }), __jsx("span", {
    className: "cart_num"
  }, "2"))))))), __jsx("div", {
    className: "ulity-logo",
    ref: props.element
  }, __jsx(link_default.a, {
    href: "/"
  }, __jsx("a", null, __jsx("img", {
    src: `${"https://demo.ten11kh.com/imageTen11/"}logo/logo512.png`,
    className: "logo-style"
  })))), __jsx("div", {
    className: "header-container menu-container"
  }, __jsx("div", {
    className: props.isSticky ? "navbar-menu navbar-sticky" : "navbar-menu"
  }, __jsx("nav", {
    id: "navigation",
    role: "navigation"
  }, __jsx("div", {
    className: "menu-content"
  }, __jsx("ul", {
    className: "menu-category level-1"
  }, props.allMenu.map((menu, index) => __jsx("li", {
    key: index
  }, __jsx(link_default.a, {
    href: {
      pathname: "product/[...slug]",
      query: {
        page: "1"
      }
    },
    as: `product/${menu.category_seo_url}`
  }, __jsx("a", {
    onClick: () => productListHanlder(menu)
  }, __jsx("span", null, menu.name))), __jsx("div", {
    className: "level-2"
  }, __jsx(Container["a" /* default */], null, __jsx("div", {
    className: "sub-menu-container"
  }, menu.childs.map((menu1, index) => __jsx("div", {
    className: "col-md-4",
    key: index
  }, __jsx("div", {
    className: "sub-menu-header"
  }, __jsx("span", null, menu1.name)), __jsx("div", null, __jsx("ul", {
    className: "sub-header-content"
  }, menu1.childs.map((menu2, index) => __jsx("li", {
    key: index
  }, __jsx(link_default.a, {
    href: {
      pathname: "/product/[...mainCategory]/[...slug]",
      query: {
        id: `${menu2.category_id}`,
        page: "1"
      }
    },
    as: `/product/${menu2.name}/?id=${menu2.category_id}&&page=1`
  }, __jsx("a", {
    onClick: () => productListHanlder(menu2)
  }, __jsx("span", {
    id: `${menu2.name === "Sale" ? "color-sale" : ""}`
  }, menu2.name))))))))))))))))))))))));
};

const mapStateToProps = state => {
  return {
    allMenu: state.menu.menuData
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getMetaData: param => dispatch(Object(metaDataAction["a" /* getMetaData */])(param))
  };
};

/* harmony default export */ var Headers_HeaderSide = (Object(external_react_redux_["connect"])(mapStateToProps, mapDispatchToProps)(HeaderSide_HeaderSide));
// EXTERNAL MODULE: ./components/Footers/Footer.js + 5 modules
var Footer = __webpack_require__("BwTs");

// EXTERNAL MODULE: ./shared/hooks/useSticky.js
var useSticky = __webpack_require__("45fY");

// CONCATENATED MODULE: ./components/layouts/Layout.js
var Layout_jsx = external_react_default.a.createElement;







const Layout = props => {
  const {
    isSticky,
    element,
    hideNav
  } = Object(useSticky["a" /* default */])();
  return Layout_jsx(external_react_default.a.Fragment, null, Layout_jsx(head_default.a, null, Layout_jsx("title", null, props.metaData.length === 0 ? "" : props.metaData.meta_title), Layout_jsx("meta", {
    name: "viewport",
    content: "initial-scale=1.0, width=device-width"
  }), Layout_jsx("meta", {
    name: "description",
    content: props.metaData.length === 0 ? "" : props.metaData.meta_description
  }), Layout_jsx("meta", {
    name: "keywords",
    content: props.metaData.length === 0 ? "" : props.metaData.meta_keyword
  }), Layout_jsx("meta", {
    property: "og:title",
    content: props.metaData.length === 0 ? "" : props.metaData.meta_description
  }), Layout_jsx("meta", {
    property: "og:locale",
    content: "en_EU"
  }), Layout_jsx("meta", {
    property: "og:url",
    content: `${"https://ten11kh.com:10010/demo/api/"}`
  }), Layout_jsx("meta", {
    property: "og:type",
    content: "website"
  }), Layout_jsx("meta", {
    property: "og:description",
    content: ""
  }), Layout_jsx("link", {
    href: "https://fonts.googleapis.com/css?family=Montserrat:400,700",
    rel: "stylesheet"
  }), props.cannonical && Layout_jsx("link", {
    rel: "cannonical",
    href: `${"https://ten11kh.com:10010/demo/api/"}${props.cannonical}`
  }), Layout_jsx("link", {
    rel: "icon",
    type: "image/ico",
    href: "/static/favicon.ico"
  })), Layout_jsx(Headers_HeaderSide, {
    isSticky: isSticky,
    element: element,
    hideNav: hideNav,
    allMenu: props.menu
  }), props.children, Layout_jsx(Footer["a" /* default */], null));
};

const Layout_mapStateToProps = state => {
  return {
    metaData: state.metadata.metaData
  };
};

/* harmony default export */ var layouts_Layout = __webpack_exports__["a"] = (Object(external_react_redux_["connect"])(Layout_mapStateToProps)(Layout));

/***/ }),

/***/ "tXlM":
/***/ (function(module, exports) {

module.exports = require("cookie-cutter");

/***/ }),

/***/ "ufKq":
/***/ (function(module, exports) {

module.exports = require("redux-devtools-extension");

/***/ }),

/***/ "wkBG":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
exports.__esModule=true;exports.normalizePathSep=normalizePathSep;exports.denormalizePagePath=denormalizePagePath;function normalizePathSep(path){return path.replace(/\\/g,'/');}function denormalizePagePath(page){page=normalizePathSep(page);if(page.startsWith('/index/')){page=page.slice(6);}else if(page==='/index'){page='/';}return page;}
//# sourceMappingURL=denormalize-page-path.js.map

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "zr5I":
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ })

/******/ });