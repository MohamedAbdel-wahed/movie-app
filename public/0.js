(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/NavBar.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/NavBar.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'NavBar',
  data: function data() {
    return {
      showSideNav: false,
      showDropdown: false,
      showPopular: false,
      showPlaying: false,
      showSearchResults: false,
      search: '',
      searchResults: null
    };
  },
  methods: {
    getSearchResults: function getSearchResults() {
      var _this = this;

      if (this.search.length >= 2) {
        this.showSearchResults = true;
        axios__WEBPACK_IMPORTED_MODULE_1___default.a.get('https://api.themoviedb.org/3/search/movie?api_key=08e97b2601cbf0fdda9895abee598073&query=' + this.search).then(function (res) {
          _this.searchResults = res.data.results.slice(0, 7);
        });
      } else {
        this.showSearchResults = false;
      }
    },
    activatePopular: function activatePopular() {
      this.showPopular = true;
      this.showPlaying = false;
      this.showDropdown = false;
      this.showDropdown = false;
    },
    activatePlaying: function activatePlaying() {
      this.showPopular = false;
      this.showPlaying = true;
      this.showDropdown = false;
      this.showDropdown = false;
    },
    addActive: function addActive(id) {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(function () {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()('#' + id).addClass(['text-red-700', 'font-bold']).siblings().removeClass(['text-red-700', 'font-bold']);
      });
    },
    dropDownActivate: function dropDownActivate(id) {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(function () {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()('#' + id).addClass(['text-blue-600', 'font-bold']).siblings().removeClass(['text-blue-600', 'font-bold']);
      });
    },
    removeActive: function removeActive(id) {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(function () {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()('#' + id).removeClass(['text-red-700', 'font-bold']);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/NavBar.vue?vue&type=style&index=0&id=5dd24bca&scoped=true&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/NavBar.vue?vue&type=style&index=0&id=5dd24bca&scoped=true&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.menu-icon[data-v-5dd24bca]:active{\n        color:rgba(224, 71, 24, 0.849);\n}\n\n\n\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/NavBar.vue?vue&type=style&index=0&id=5dd24bca&scoped=true&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/NavBar.vue?vue&type=style&index=0&id=5dd24bca&scoped=true&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./NavBar.vue?vue&type=style&index=0&id=5dd24bca&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/NavBar.vue?vue&type=style&index=0&id=5dd24bca&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/NavBar.vue?vue&type=template&id=5dd24bca&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/NavBar.vue?vue&type=template&id=5dd24bca&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c(
      "nav",
      {
        staticClass:
          "fixed top-0 z-50 border-b border-gray-800 bg-gray-900 shadow-sm w-full h-20"
      },
      [
        _c(
          "div",
          {
            staticClass:
              "container mx-auto flex items-center justify-between py-6 px-6 "
          },
          [
            _c("div", { staticClass: " items-end flex md:hidden" }, [
              _c(
                "button",
                {
                  staticClass: "focus:outline-none border-0 ",
                  on: {
                    click: function($event) {
                      _vm.showSideNav = !_vm.showSideNav
                    }
                  }
                },
                [
                  _c(
                    "i",
                    {
                      staticClass:
                        "material-icons text-gray-500 hover:text-white cursor-pointer menu-icon select-none"
                    },
                    [_vm._v("list")]
                  )
                ]
              )
            ]),
            _vm._v(" "),
            _c(
              "ul",
              { staticClass: "relative flex items-center hidden md:flex" },
              [
                _vm._m(0),
                _vm._v(" "),
                _c(
                  "li",
                  {
                    staticClass:
                      "relative z-20 lg:ml-16 hover:text-red-400 text-sm cursor-pointer"
                  },
                  [
                    _c("div", { staticClass: "flex items-center" }, [
                      _c(
                        "a",
                        {
                          attrs: { href: "/movies" },
                          on: {
                            contextmenu: function($event) {
                              $event.preventDefault()
                              _vm.showSideNav = !_vm.showSideNav
                            }
                          }
                        },
                        [_vm._v("MOVIES")]
                      ),
                      _vm._v(" "),
                      _c(
                        "i",
                        {
                          staticClass:
                            "material-icons font-extrabold ml-1 hover:text-green-600",
                          on: {
                            click: function($event) {
                              _vm.showSideNav = !_vm.showSideNav
                            }
                          }
                        },
                        [_vm._v("arrow_downward")]
                      )
                    ]),
                    _vm._v(" "),
                    _vm.showSideNav
                      ? _c("button", {
                          staticClass:
                            "hidden sm:block h-full w-full fixed top-0 bottom-0 right-0 left-0 bg-gray-800 opacity-25",
                          on: {
                            click: function($event) {
                              _vm.showSideNav = false
                            }
                          }
                        })
                      : _vm._e(),
                    _vm._v(" "),
                    _vm.showSideNav
                      ? _c(
                          "div",
                          {
                            staticClass:
                              "absolute mt-5 shadow-lg flex flex-col justify-center items-center rounded-lg h-24 w-40 bg-gray-700"
                          },
                          [
                            _c(
                              "a",
                              {
                                staticClass:
                                  "w-full text-white text-semibold hover:text-blue-600 py-1 mt-1 rounded-sm text-center",
                                attrs: { href: "#playing" },
                                on: {
                                  click: function($event) {
                                    _vm.showSideNav = false
                                  }
                                }
                              },
                              [_vm._v("Playing Movies")]
                            ),
                            _vm._v(" "),
                            _c(
                              "a",
                              {
                                staticClass:
                                  "w-full text-white text-semibold hover:text-blue-600 py-1 rounded-sm text-center",
                                attrs: { href: "#popular" },
                                on: {
                                  click: function($event) {
                                    _vm.showSideNav = false
                                  }
                                }
                              },
                              [_vm._v("Popular Movies")]
                            )
                          ]
                        )
                      : _vm._e()
                  ]
                ),
                _vm._v(" "),
                _vm._m(1),
                _vm._v(" "),
                _vm._m(2)
              ]
            ),
            _vm._v(" "),
            _vm.showSearchResults
              ? _c("button", {
                  staticClass:
                    "h-full w-full fixed top-0 bottom-0 right-0 left-0 bg-gray-800 opacity-50",
                  on: {
                    click: function($event) {
                      _vm.showSearchResults = false
                    }
                  }
                })
              : _vm._e(),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "flex items-center justify-between relative" },
              [
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.search,
                      expression: "search"
                    }
                  ],
                  staticClass:
                    "pl-10 py-2 w-48 md:w-64 text-xs rounded-full focus:outline-none focus:shadow-outline bg-gray-700",
                  attrs: { type: "text", placeholder: "Search" },
                  domProps: { value: _vm.search },
                  on: {
                    keyup: function($event) {
                      return _vm.getSearchResults()
                    },
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.search = $event.target.value
                    }
                  }
                }),
                _vm._v(" "),
                _c(
                  "i",
                  {
                    staticClass:
                      "material-icons absolute ml-2 select-none text-gray-800 cursor-pointer"
                  },
                  [_vm._v("search")]
                ),
                _vm._v(" "),
                _vm._m(3),
                _vm._v(" "),
                _vm.showSearchResults
                  ? _c(
                      "div",
                      {
                        staticClass:
                          " w-48 md:w-64 absolute flex flex-col items-start rounded-lg bg-gray-900",
                        staticStyle: { "margin-top": "9rem" }
                      },
                      _vm._l(_vm.searchResults, function(movie, index) {
                        return _c(
                          "div",
                          {
                            key: index,
                            staticClass:
                              "flex justify-start items-center py-1 px-4 w-full border-b border-gray-500 hover:text-blue-600"
                          },
                          [
                            _c("img", {
                              staticClass: "h-6 w-6 rounded-full select-none ",
                              attrs: {
                                src:
                                  "https://image.tmdb.org/t/p/w400/" +
                                  movie.poster_path
                              }
                            }),
                            _vm._v(" "),
                            _c(
                              "a",
                              {
                                staticClass: "text-xs ml-2",
                                attrs: { href: "/movie/" + movie.id }
                              },
                              [_vm._v(_vm._s(movie.title))]
                            )
                          ]
                        )
                      }),
                      0
                    )
                  : _vm._e()
              ]
            )
          ]
        )
      ]
    ),
    _vm._v(" "),
    _vm.showSideNav
      ? _c("button", {
          staticClass:
            "h-full w-full fixed top-0 bottom-0 right-0 left-0 bg-gray-800 opacity-25",
          on: {
            click: function($event) {
              _vm.showSideNav = false
            }
          }
        })
      : _vm._e(),
    _vm._v(" "),
    _vm.showSideNav
      ? _c(
          "ul",
          {
            staticClass:
              "md:hidden flex flex-col items-center w-1/2 sm:w-5/12  border-r-2 border-gray-900 h-screen shadow-sm bg-gray-900 fixed top-0 z-60",
            attrs: { id: "mobile-nav" }
          },
          [
            _vm._m(4),
            _vm._v(" "),
            _vm._m(5),
            _vm._v(" "),
            _c("hr", { staticClass: "border border-gray-700 w-full" }),
            _vm._v(" "),
            _c(
              "li",
              {
                staticClass:
                  "flex justify-center items-center mt-5 text-sm hover:bg-gray-700 rounded-sm  py-2 w-full text-center cursor-pointer",
                class: [
                  _vm.showDropdown
                    ? _vm.addActive("movies")
                    : _vm.removeActive("movies")
                ],
                attrs: { id: "movies" }
              },
              [
                _c(
                  "a",
                  {
                    staticClass: "select-none text-base",
                    attrs: { href: "/movies" }
                  },
                  [_vm._v("MOVIES")]
                ),
                _vm._v(" "),
                _c(
                  "i",
                  {
                    staticClass:
                      "material-icons select-none font-extrabold ml-2 text-gray-200 hover:text-green-600",
                    on: {
                      click: function($event) {
                        _vm.showDropdown = !_vm.showDropdown
                      }
                    }
                  },
                  [_vm._v("arrow_downward")]
                )
              ]
            ),
            _vm._v(" "),
            _vm.showDropdown
              ? _c("button", {
                  staticClass:
                    "h-full w-full fixed top-0 bottom-0 right-0 left-0 bg-gray-800 opacity-25",
                  on: {
                    click: function($event) {
                      _vm.showDropdown = false
                    }
                  }
                })
              : _vm._e(),
            _vm._v(" "),
            _vm.showDropdown
              ? _c(
                  "div",
                  {
                    staticClass:
                      "border border-gray-700 shadow-xl absolute mt-56 ml-40 sm:ml-48 h-32 w-40 bg-gray-800 rounded-md text-center flex items-center justify-center "
                  },
                  [
                    _c("div", { staticClass: "w-full" }, [
                      _c(
                        "a",
                        {
                          staticClass:
                            "px-1 py-1 rounded-sm block mt-1 text-sm hover:text-gray-300",
                          class: [
                            _vm.showDropdown && _vm.showPlaying
                              ? _vm.dropDownActivate("playing")
                              : ""
                          ],
                          attrs: { href: "#playing", id: "playing" },
                          on: {
                            click: function($event) {
                              return _vm.activatePlaying()
                            }
                          }
                        },
                        [_vm._v("Playing Movies")]
                      ),
                      _vm._v(" "),
                      _c(
                        "a",
                        {
                          staticClass:
                            "px-1 py-1 rounded-sm block mt-1 text-sm hover:text-gray-300",
                          class: [
                            _vm.showDropdown && _vm.showPopular
                              ? _vm.dropDownActivate("popular")
                              : ""
                          ],
                          attrs: { href: "#popular", id: "popular" },
                          on: {
                            click: function($event) {
                              return _vm.activatePopular()
                            }
                          }
                        },
                        [_vm._v("Popular Movies")]
                      )
                    ])
                  ]
                )
              : _vm._e(),
            _vm._v(" "),
            _c(
              "li",
              {
                staticClass:
                  " mt-2 py-2 text-sm hover:bg-gray-700 rounded-sm w-full text-center cursor-pointer",
                attrs: { id: "shows" },
                on: {
                  click: function($event) {
                    return _vm.addActive("shows")
                  }
                }
              },
              [
                _c(
                  "a",
                  {
                    staticClass: "select-none w-full mr-4",
                    attrs: { href: "#" }
                  },
                  [_vm._v("TV SHOWS")]
                )
              ]
            ),
            _vm._v(" "),
            _c(
              "li",
              {
                staticClass:
                  "mt-2 py-2 text-sm hover:bg-gray-700 rounded-sm w-full text-center cursor-pointer",
                attrs: { id: "actors" },
                on: {
                  click: function($event) {
                    return _vm.addActive("actors")
                  }
                }
              },
              [
                _c(
                  "a",
                  {
                    staticClass: "select-none w-full mr-4",
                    attrs: { href: "/actors" }
                  },
                  [_vm._v("ACTORS")]
                )
              ]
            )
          ]
        )
      : _vm._e()
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("li", { staticClass: "md:mr-8 lg:mr-0" }, [
      _c(
        "a",
        {
          staticClass: "flex text-gray-400 font-semibold text-lg",
          attrs: { href: "/popular-movies" }
        },
        [
          _c("i", { staticClass: "material-icons" }, [_vm._v("local_movies")]),
          _vm._v(" "),
          _c("span", { staticClass: "ml-1" }, [_vm._v("MovieApp")])
        ]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "li",
      { staticClass: "ml-4 lg:ml-6 hover:text-red-400 text-sm" },
      [_c("a", { attrs: { href: "/tv" } }, [_vm._v("TV SHOWS")])]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "li",
      { staticClass: "ml-4 lg:ml-6 hover:text-red-400 text-sm" },
      [_c("a", { attrs: { href: "/actors" } }, [_vm._v("ACTORS")])]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "ml-3 hidden md:block" }, [
      _c("img", {
        staticClass: "h-12 w-12 rounded-full select-none",
        attrs: { src: "/images/panda.jpeg" }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("li", { staticClass: "mt-24 md:hidden" }, [
      _c("img", {
        staticClass: "rounded-full h-20 w-20 select-none",
        attrs: { src: "/images/panda.jpeg" }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("li", { staticClass: "mt-3 pb-5  " }, [
      _c(
        "a",
        {
          staticClass:
            "flex text-gray-400 font-bold text-xl tracking-wide select-none items-center",
          attrs: { href: "#" }
        },
        [
          _c("i", { staticClass: "material-icons" }, [_vm._v("local_movies")]),
          _vm._v(" "),
          _c("span", { staticClass: "ml-1" }, [_vm._v("MovieApp")])
        ]
      )
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/NavBar.vue":
/*!********************************************!*\
  !*** ./resources/js/components/NavBar.vue ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _NavBar_vue_vue_type_template_id_5dd24bca_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NavBar.vue?vue&type=template&id=5dd24bca&scoped=true& */ "./resources/js/components/NavBar.vue?vue&type=template&id=5dd24bca&scoped=true&");
/* harmony import */ var _NavBar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NavBar.vue?vue&type=script&lang=js& */ "./resources/js/components/NavBar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _NavBar_vue_vue_type_style_index_0_id_5dd24bca_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./NavBar.vue?vue&type=style&index=0&id=5dd24bca&scoped=true&lang=css& */ "./resources/js/components/NavBar.vue?vue&type=style&index=0&id=5dd24bca&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _NavBar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _NavBar_vue_vue_type_template_id_5dd24bca_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _NavBar_vue_vue_type_template_id_5dd24bca_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "5dd24bca",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/NavBar.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/NavBar.vue?vue&type=script&lang=js&":
/*!*********************************************************************!*\
  !*** ./resources/js/components/NavBar.vue?vue&type=script&lang=js& ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NavBar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./NavBar.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/NavBar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NavBar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/NavBar.vue?vue&type=style&index=0&id=5dd24bca&scoped=true&lang=css&":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/components/NavBar.vue?vue&type=style&index=0&id=5dd24bca&scoped=true&lang=css& ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_NavBar_vue_vue_type_style_index_0_id_5dd24bca_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./NavBar.vue?vue&type=style&index=0&id=5dd24bca&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/NavBar.vue?vue&type=style&index=0&id=5dd24bca&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_NavBar_vue_vue_type_style_index_0_id_5dd24bca_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_NavBar_vue_vue_type_style_index_0_id_5dd24bca_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_NavBar_vue_vue_type_style_index_0_id_5dd24bca_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_NavBar_vue_vue_type_style_index_0_id_5dd24bca_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_NavBar_vue_vue_type_style_index_0_id_5dd24bca_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/NavBar.vue?vue&type=template&id=5dd24bca&scoped=true&":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/NavBar.vue?vue&type=template&id=5dd24bca&scoped=true& ***!
  \***************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NavBar_vue_vue_type_template_id_5dd24bca_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./NavBar.vue?vue&type=template&id=5dd24bca&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/NavBar.vue?vue&type=template&id=5dd24bca&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NavBar_vue_vue_type_template_id_5dd24bca_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NavBar_vue_vue_type_template_id_5dd24bca_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);