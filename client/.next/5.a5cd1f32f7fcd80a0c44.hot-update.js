webpackHotUpdate(5,{

/***/ "./components/Recipes/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__RecipeListItem__ = __webpack_require__("./components/Recipes/RecipeListItem.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Recipes_css__ = __webpack_require__("./components/Recipes/Recipes.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Recipes_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__Recipes_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_apollo__ = __webpack_require__("./node_modules/react-apollo/react-apollo.browser.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_apollo___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_apollo__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_graphql_tag__ = __webpack_require__("./node_modules/graphql-tag/src/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_graphql_tag___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_graphql_tag__);
var _jsxFileName = "/Users/sajjadhaider/Desktop/test/SSR/recipes/client/components/Recipes/index.js";

var _templateObject = /*#__PURE__*/ _taggedTemplateLiteral(["\n  query GetRecipes($offset: Int, $limit: Int) {\n    getRecipes(offset: $offset, limit: $limit) {\n      image\n      label\n    }\n  }\n"]);



function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }





var GET_RECIPES_QUERY = __WEBPACK_IMPORTED_MODULE_4_graphql_tag___default()(_templateObject);

var Recipes =
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
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "container-fluid",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_react_apollo__["Query"], {
        query: GET_RECIPES_QUERY,
        variables: {
          offset: 0,
          limit: 12
        },
        notifyOnNetworkStatusChange: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        }
      }, function (_ref) {
        var loading = _ref.loading,
            error = _ref.error,
            data = _ref.data,
            fetchMore = _ref.fetchMore;
        if (loading) return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 30
          }
        }, "Loading...");
        if (error) return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 31
          }
        }, "Error :( ", error);
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Fragment, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 34
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
          className: "cta-wrapper",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 35
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("button", {
          onClick: function onClick() {
            return fetchMore({
              variables: {
                offset: data.getRecipes.length,
                limit: data.getRecipes.length + 12
              }
            });
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 36
          }
        }, "Next")), data.getRecipes.map(function (item, index) {
          return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__RecipeListItem__["a" /* default */], {
            key: index,
            item: item,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 50
            }
          });
        }));
      })));
    }
  }]);

  return Recipes;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (Recipes);

/***/ })

})
//# sourceMappingURL=5.a5cd1f32f7fcd80a0c44.hot-update.js.map