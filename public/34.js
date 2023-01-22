(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[34],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Reports/StudentEnrollment.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Reports/StudentEnrollment.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
  data: function data() {
    return {
      sy_id: '',
      level: ''
    };
  },
  computed: {
    keys: function keys() {
      return Object.keys(this.ReportsStore.state.studentEnrollment);
    }
  },
  methods: {
    generate: function generate() {
      // this.ReportsStore.studentEnrollment(24, 'Senior High')
      this.ReportsStore.studentEnrollment(this.sy_id, this.level);
    }
  },
  created: function created() {
    this.AdminSYStore.getSYs();
  },
  beforeDestroy: function beforeDestroy() {
    this.ReportsStore.state.studentEnrollment = [];
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Reports/StudentEnrollment.vue?vue&type=style&index=0&id=a71dbb14&scoped=true&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Reports/StudentEnrollment.vue?vue&type=style&index=0&id=a71dbb14&scoped=true&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\ntable[data-v-a71dbb14] {\n    width: 100%;\n    border-collapse: collapse;\n}\ntable tr td[data-v-a71dbb14] {\n    border: 1px solid #cccccc;\n}\ntable tr td[data-v-a71dbb14] {\n    padding: 5px;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Reports/StudentEnrollment.vue?vue&type=style&index=0&id=a71dbb14&scoped=true&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Reports/StudentEnrollment.vue?vue&type=style&index=0&id=a71dbb14&scoped=true&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./StudentEnrollment.vue?vue&type=style&index=0&id=a71dbb14&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Reports/StudentEnrollment.vue?vue&type=style&index=0&id=a71dbb14&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Reports/StudentEnrollment.vue?vue&type=template&id=a71dbb14&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Reports/StudentEnrollment.vue?vue&type=template&id=a71dbb14&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************/
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
  return _c(
    "div",
    [
      _c(
        "v-app-bar",
        [
          _c("v-toolbar-title", { staticClass: "text-overline" }, [
            _vm._v(
              "\n            " + _vm._s(_vm.$route.meta.name) + "\n            "
            )
          ]),
          _vm._v(" "),
          _c("v-spacer"),
          _vm._v(" "),
          _c("v-select", {
            staticClass: "ml-2",
            staticStyle: { "max-width": "200px" },
            attrs: {
              outlined: "",
              dense: "",
              "hide-details": "",
              rounded: "",
              filledx: "",
              label: "School Year",
              items: _vm.AdminSYStore.state.sy,
              "item-text": "sy",
              "item-value": "id"
            },
            model: {
              value: _vm.sy_id,
              callback: function($$v) {
                _vm.sy_id = $$v
              },
              expression: "sy_id"
            }
          }),
          _vm._v(" "),
          _c("v-select", {
            staticClass: "ml-2",
            staticStyle: { "max-width": "200px" },
            attrs: {
              outlined: "",
              dense: "",
              "hide-details": "",
              rounded: "",
              filledx: "",
              label: "Level",
              items: _vm.AppStore.state.levels
            },
            model: {
              value: _vm.level,
              callback: function($$v) {
                _vm.level = $$v
              },
              expression: "level"
            }
          }),
          _vm._v(" "),
          _c(
            "v-btn",
            {
              staticClass: "ml-2",
              attrs: {
                color: "primary",
                disabled: _vm.sy_id == "" || _vm.level == ""
              },
              on: { click: _vm.generate }
            },
            [_vm._v("Generate")]
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-container",
        [
          _vm.keys.length
            ? _c(
                "v-card",
                { staticClass: "pa-2" },
                [
                  _c(
                    "v-sheet",
                    {
                      staticClass: "text-align-center",
                      attrs: { align: "center", justify: "center" }
                    },
                    [
                      _c("div", { staticClass: "text-h6" }, [
                        _vm._v("List of Students")
                      ]),
                      _vm._v(" "),
                      _c("div", {}, [_vm._v(_vm._s(_vm.level))]),
                      _vm._v(" "),
                      _c("div", {}, [
                        _vm._v(_vm._s(_vm.AdminSYStore.state.activeSY))
                      ]),
                      _vm._v(" "),
                      _c("br"),
                      _vm._v(" "),
                      _c("v-divider")
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-card-text",
                    _vm._l(_vm.keys, function(k) {
                      return _c(
                        "v-row",
                        { key: k },
                        [
                          _c(
                            "v-col",
                            [
                              _c(
                                "v-row",
                                [
                                  _c(
                                    "v-col",
                                    {
                                      staticClass: "mb-0 pb-0",
                                      attrs: { md: "12" }
                                    },
                                    [
                                      _c("div", { staticClass: "text-h6" }, [
                                        _vm._v(
                                          "\n                                    " +
                                            _vm._s(k) +
                                            "\n                                "
                                        )
                                      ])
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-col",
                                    {
                                      staticStyle: {
                                        borderx: "1px dotted #cccccc"
                                      },
                                      attrs: { md: "6" }
                                    },
                                    [
                                      _c(
                                        "div",
                                        { staticClass: "font-weight-bold" },
                                        [
                                          _vm._v(
                                            "\n                                    Male\n                                "
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c("table", [
                                        _c(
                                          "tbody",
                                          _vm._l(
                                            _vm.ReportsStore.state
                                              .studentEnrollment[k]["Male"],
                                            function(s, index) {
                                              return _c("tr", { key: index }, [
                                                _c("td", [
                                                  _vm._v(_vm._s(index + 1))
                                                ]),
                                                _vm._v(" "),
                                                _c("td", [
                                                  _vm._v(
                                                    _vm._s(
                                                      s.student_firstname
                                                    ) +
                                                      " " +
                                                      _vm._s(s.student_middle) +
                                                      " " +
                                                      _vm._s(
                                                        s.student_lastname
                                                      ) +
                                                      " " +
                                                      _vm._s(s.student_extname)
                                                  )
                                                ]),
                                                _vm._v(" "),
                                                s.strand_name != null
                                                  ? _c("td", [
                                                      _vm._v(
                                                        _vm._s(s.strand_name)
                                                      )
                                                    ])
                                                  : _vm._e()
                                              ])
                                            }
                                          ),
                                          0
                                        )
                                      ])
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-col",
                                    {
                                      staticStyle: {
                                        borderx: "1px dotted #cccccc"
                                      },
                                      attrs: { md: "6" }
                                    },
                                    [
                                      _c(
                                        "div",
                                        { staticClass: "font-weight-bold" },
                                        [
                                          _vm._v(
                                            "\n                                    Female\n                                "
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c("table", [
                                        _c(
                                          "tbody",
                                          _vm._l(
                                            _vm.ReportsStore.state
                                              .studentEnrollment[k]["Female"],
                                            function(s, index) {
                                              return _c("tr", { key: index }, [
                                                _c("td", [
                                                  _vm._v(_vm._s(index + 1))
                                                ]),
                                                _vm._v(" "),
                                                _c("td", [
                                                  _vm._v(
                                                    _vm._s(
                                                      s.student_firstname
                                                    ) +
                                                      " " +
                                                      _vm._s(s.student_middle) +
                                                      " " +
                                                      _vm._s(
                                                        s.student_lastname
                                                      ) +
                                                      " " +
                                                      _vm._s(s.student_extname)
                                                  )
                                                ]),
                                                _vm._v(" "),
                                                s.strand_name != null
                                                  ? _c("td", [
                                                      _vm._v(
                                                        _vm._s(s.strand_name)
                                                      )
                                                    ])
                                                  : _vm._e()
                                              ])
                                            }
                                          ),
                                          0
                                        )
                                      ])
                                    ]
                                  )
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c("br")
                            ],
                            1
                          )
                        ],
                        1
                      )
                    }),
                    1
                  )
                ],
                1
              )
            : _vm._e()
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/pages/Reports/StudentEnrollment.vue":
/*!**********************************************************!*\
  !*** ./resources/js/pages/Reports/StudentEnrollment.vue ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _StudentEnrollment_vue_vue_type_template_id_a71dbb14_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./StudentEnrollment.vue?vue&type=template&id=a71dbb14&scoped=true& */ "./resources/js/pages/Reports/StudentEnrollment.vue?vue&type=template&id=a71dbb14&scoped=true&");
/* harmony import */ var _StudentEnrollment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./StudentEnrollment.vue?vue&type=script&lang=js& */ "./resources/js/pages/Reports/StudentEnrollment.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _StudentEnrollment_vue_vue_type_style_index_0_id_a71dbb14_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./StudentEnrollment.vue?vue&type=style&index=0&id=a71dbb14&scoped=true&lang=css& */ "./resources/js/pages/Reports/StudentEnrollment.vue?vue&type=style&index=0&id=a71dbb14&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _StudentEnrollment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _StudentEnrollment_vue_vue_type_template_id_a71dbb14_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _StudentEnrollment_vue_vue_type_template_id_a71dbb14_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "a71dbb14",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/Reports/StudentEnrollment.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/Reports/StudentEnrollment.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/pages/Reports/StudentEnrollment.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_StudentEnrollment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./StudentEnrollment.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Reports/StudentEnrollment.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_StudentEnrollment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/Reports/StudentEnrollment.vue?vue&type=style&index=0&id=a71dbb14&scoped=true&lang=css&":
/*!*******************************************************************************************************************!*\
  !*** ./resources/js/pages/Reports/StudentEnrollment.vue?vue&type=style&index=0&id=a71dbb14&scoped=true&lang=css& ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_StudentEnrollment_vue_vue_type_style_index_0_id_a71dbb14_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./StudentEnrollment.vue?vue&type=style&index=0&id=a71dbb14&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Reports/StudentEnrollment.vue?vue&type=style&index=0&id=a71dbb14&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_StudentEnrollment_vue_vue_type_style_index_0_id_a71dbb14_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_StudentEnrollment_vue_vue_type_style_index_0_id_a71dbb14_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_StudentEnrollment_vue_vue_type_style_index_0_id_a71dbb14_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_StudentEnrollment_vue_vue_type_style_index_0_id_a71dbb14_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/pages/Reports/StudentEnrollment.vue?vue&type=template&id=a71dbb14&scoped=true&":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/pages/Reports/StudentEnrollment.vue?vue&type=template&id=a71dbb14&scoped=true& ***!
  \*****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_StudentEnrollment_vue_vue_type_template_id_a71dbb14_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./StudentEnrollment.vue?vue&type=template&id=a71dbb14&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Reports/StudentEnrollment.vue?vue&type=template&id=a71dbb14&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_StudentEnrollment_vue_vue_type_template_id_a71dbb14_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_StudentEnrollment_vue_vue_type_template_id_a71dbb14_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=34.js.map