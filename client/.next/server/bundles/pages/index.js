module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = {
	"recipe": "_3-qV7waMdf6lmjrNOhJUZn",
	"recipe__meta": "_218zz5h4phyr72V2WnFcaY",
	"imgResponsive": "LMj2MO7E8iJf63TAuYvdn"
};

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("react-apollo");

/***/ }),
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(7);


/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: external "react"
var external__react_ = __webpack_require__(0);
var external__react__default = /*#__PURE__*/__webpack_require__.n(external__react_);

// EXTERNAL MODULE: external "isomorphic-unfetch"
var external__isomorphic_unfetch_ = __webpack_require__(8);
var external__isomorphic_unfetch__default = /*#__PURE__*/__webpack_require__.n(external__isomorphic_unfetch_);

// EXTERNAL MODULE: ./pages/index.css
var pages = __webpack_require__(9);
var pages_default = /*#__PURE__*/__webpack_require__.n(pages);

// EXTERNAL MODULE: ./components/Recipes/Recipes.css
var Recipes_Recipes = __webpack_require__(1);
var Recipes_default = /*#__PURE__*/__webpack_require__.n(Recipes_Recipes);

// CONCATENATED MODULE: ./components/Recipes/RecipeListItem.js



var RecipeListItem_RecipeListItem = function RecipeListItem(_ref) {
  var item = _ref.item;
  return external__react__default.a.createElement("div", {
    className: "col-xs-12 col-sm-2"
  }, external__react__default.a.createElement("div", {
    className: Recipes_default.a.recipe
  }, external__react__default.a.createElement("img", {
    className: Recipes_default.a.imgResponsive,
    src: item.image,
    alt: item.label
  }), external__react__default.a.createElement("div", {
    className: Recipes_default.a.recipe__meta
  }, external__react__default.a.createElement("span", null, item.label))));
};

/* harmony default export */ var Recipes_RecipeListItem = (RecipeListItem_RecipeListItem);
// EXTERNAL MODULE: external "react-apollo"
var external__react_apollo_ = __webpack_require__(2);
var external__react_apollo__default = /*#__PURE__*/__webpack_require__.n(external__react_apollo_);

// EXTERNAL MODULE: external "graphql-tag"
var external__graphql_tag_ = __webpack_require__(10);
var external__graphql_tag__default = /*#__PURE__*/__webpack_require__.n(external__graphql_tag_);

// CONCATENATED MODULE: ./components/Recipes/index.js
var _templateObject = /*#__PURE__*/ _taggedTemplateLiteral(["\n  query GetRecipes($offset: Int, $limit: Int) {\n    getRecipes(offset: $offset, limit: $limit) {\n      image\n      label\n    }\n  }\n"]);



function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }





var GET_RECIPES_QUERY = external__graphql_tag__default()(_templateObject);

var components_Recipes_Recipes =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Recipes, _React$Component);

  function Recipes() {
    _classCallCheck(this, Recipes);

    return _possibleConstructorReturn(this, (Recipes.__proto__ || Object.getPrototypeOf(Recipes)).apply(this, arguments));
  }

  _createClass(Recipes, [{
    key: "render",
    value: function render() {
      return external__react__default.a.createElement("div", {
        className: "container-fluid"
      }, external__react__default.a.createElement("div", {
        className: "row"
      }, external__react__default.a.createElement(external__react_apollo_["Query"], {
        query: GET_RECIPES_QUERY,
        variables: {
          offset: 0,
          limit: 12
        },
        notifyOnNetworkStatusChange: true
      }, function (_ref) {
        var loading = _ref.loading,
            error = _ref.error,
            data = _ref.data,
            fetchMore = _ref.fetchMore;
        if (loading) return external__react__default.a.createElement("p", null, "Loading...");
        if (error) return external__react__default.a.createElement("p", null, "Error :( ", error);
        return external__react__default.a.createElement(external__react__default.a.Fragment, null, external__react__default.a.createElement("div", {
          className: "cta-wrapper"
        }, external__react__default.a.createElement("button", {
          onClick: function onClick() {
            return fetchMore({
              variables: {
                offset: data.getRecipes.length
              },
              updateQuery: function updateQuery(prev, _ref2) {
                var fetchMoreResult = _ref2.fetchMoreResult;
                if (!fetchMoreResult) return prev;
                return Object.assign({}, prev, {
                  getTweets: _toConsumableArray(prev.getRecipes).concat(_toConsumableArray(fetchMoreResult.getRecipes))
                });
              }
            });
          }
        }, "Next")), data.getRecipes.map(function (item, index) {
          return external__react__default.a.createElement(Recipes_RecipeListItem, {
            key: index,
            item: item
          });
        }));
      })));
    }
  }]);

  return Recipes;
}(external__react__default.a.Component);

/* harmony default export */ var components_Recipes = (components_Recipes_Recipes);
// EXTERNAL MODULE: external "next/link"
var link_ = __webpack_require__(11);
var link__default = /*#__PURE__*/__webpack_require__.n(link_);

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(12);
var head__default = /*#__PURE__*/__webpack_require__.n(head_);

// EXTERNAL MODULE: ./components/Bar/Bar.css
var Bar = __webpack_require__(13);
var Bar_default = /*#__PURE__*/__webpack_require__.n(Bar);

// CONCATENATED MODULE: ./components/Bar/index.js



var Bar_TopBar = function TopBar(props) {
  return external__react__default.a.createElement("nav", {
    className: "navbar navbar-expand-lg navbar-dark bg-dark"
  }, external__react__default.a.createElement("a", {
    className: "navbar-brand",
    href: "#"
  }, "Recipes"), external__react__default.a.createElement("button", {
    className: "navbar-toggler",
    type: "button",
    "data-toggle": "collapse",
    "data-target": "#navbarColor02",
    "aria-controls": "navbarColor02",
    "aria-expanded": "false",
    "aria-label": "Toggle navigation"
  }, external__react__default.a.createElement("span", {
    className: "navbar-toggler-icon"
  })), external__react__default.a.createElement("div", {
    className: "collapse navbar-collapse",
    id: "navbarColor02"
  }, external__react__default.a.createElement("ul", {
    className: "navbar-nav mr-auto"
  }, external__react__default.a.createElement("li", {
    className: "nav-item active"
  }, external__react__default.a.createElement("a", {
    className: "nav-link",
    href: "#"
  }, "Home ", external__react__default.a.createElement("span", {
    className: "sr-only"
  }, "(current)"))), external__react__default.a.createElement("li", {
    className: "nav-item"
  }, external__react__default.a.createElement("a", {
    className: "nav-link",
    href: "#"
  }, "Link 1")), external__react__default.a.createElement("li", {
    className: "nav-item"
  }, external__react__default.a.createElement("a", {
    className: "nav-link",
    href: "#"
  }, "Link 2")), external__react__default.a.createElement("li", {
    className: "nav-item"
  }, external__react__default.a.createElement("a", {
    className: "nav-link",
    href: "#"
  }, "Link 3")))));
};

/* harmony default export */ var components_Bar = (Bar_TopBar);
// CONCATENATED MODULE: ./components/Layout/index.js




/* harmony default export */ var Layout = (function (_ref) {
  var children = _ref.children,
      _ref$title = _ref.title,
      title = _ref$title === void 0 ? "This is the default title" : _ref$title;
  return external__react__default.a.createElement(external__react__default.a.Fragment, null, external__react__default.a.createElement(head__default.a, null, external__react__default.a.createElement("title", null, title), external__react__default.a.createElement("meta", {
    charSet: "utf-8"
  }), external__react__default.a.createElement("meta", {
    name: "viewport",
    content: "initial-scale=1.0, width=device-width"
  })), external__react__default.a.createElement("header", null, external__react__default.a.createElement(components_Bar, null)), children, external__react__default.a.createElement("footer", null, "\xA9 Recipes 2018. All rights Reserved"));
});
// EXTERNAL MODULE: external "apollo-boost"
var external__apollo_boost_ = __webpack_require__(14);
var external__apollo_boost__default = /*#__PURE__*/__webpack_require__.n(external__apollo_boost_);

// CONCATENATED MODULE: ./pages/index.js


function pages__typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { pages__typeof = function _typeof(obj) { return typeof obj; }; } else { pages__typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return pages__typeof(obj); }

function pages__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function pages__defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function pages__createClass(Constructor, protoProps, staticProps) { if (protoProps) pages__defineProperties(Constructor.prototype, protoProps); if (staticProps) pages__defineProperties(Constructor, staticProps); return Constructor; }

function pages__possibleConstructorReturn(self, call) { if (call && (pages__typeof(call) === "object" || typeof call === "function")) { return call; } return pages__assertThisInitialized(self); }

function pages__assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function pages__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }


 //import recipesData from "../data/recipes.json";




 // Apollo client setup

var client = new external__apollo_boost__default.a({
  uri: "http://localhost:4000/graphql"
});

var pages_Index =
/*#__PURE__*/
function (_React$Component) {
  pages__inherits(Index, _React$Component);

  function Index() {
    pages__classCallCheck(this, Index);

    return pages__possibleConstructorReturn(this, (Index.__proto__ || Object.getPrototypeOf(Index)).apply(this, arguments));
  }

  pages__createClass(Index, [{
    key: "render",

    /*static async getInitialProps() {
      return {
        recipes: recipesData
      };
    }
    */
    value: function render() {
      return external__react__default.a.createElement(external__react_apollo_["ApolloProvider"], {
        client: client
      }, external__react__default.a.createElement(Layout, null, external__react__default.a.createElement(components_Recipes, null)));
    }
  }]);

  return Index;
}(external__react__default.a.Component);

/* harmony default export */ var pages_0 = __webpack_exports__["default"] = (pages_Index);

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),
/* 9 */
/***/ (function(module, exports) {



/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("graphql-tag");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = {
	"root": "_1Y_Te5XLMv77MO4bdXKxOb",
	"flex": "BPzxerLBLLOUjpet8yKQJ",
	"menuButton": "gh3B7J2JnTV3ml718kcF8"
};

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("apollo-boost");

/***/ })
/******/ ]);