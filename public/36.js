(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[36],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Reports/COE.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Reports/COE.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      student: '',
      date: new Date().toDateString()
    };
  },
  computed: {},
  methods: {
    generate: function generate() {
      this.ReportsStore.generateCOE(this.student.id);
    }
  },
  created: function created() {
    this.AdminStudentsStore.getStudents();
    this.generate();
  },
  beforeDestroy: function beforeDestroy() {}
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Reports/COE.vue?vue&type=template&id=8728cce0&":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Reports/COE.vue?vue&type=template&id=8728cce0& ***!
  \*********************************************************************************************************************************************************************************************************/
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
            _vm._v("\n            Certificate of Enrollment\n        ")
          ]),
          _vm._v(" "),
          _c("v-spacer"),
          _vm._v(" "),
          _c("v-combobox", {
            attrs: {
              outlined: "",
              label: "Student",
              "hide-details": "",
              dense: "",
              items: _vm.AdminStudentsStore.state.students,
              "item-text": "lastname",
              "item-value": "id",
              "return-object": true
            },
            scopedSlots: _vm._u([
              {
                key: "selection",
                fn: function(ref) {
                  var item = ref.item
                  return [
                    _c("div", [
                      _vm._v(
                        _vm._s(item.lastname) +
                          ", " +
                          _vm._s(item.firstname) +
                          " " +
                          _vm._s(item.middlename)
                      )
                    ])
                  ]
                }
              },
              {
                key: "item",
                fn: function(ref) {
                  var item = ref.item
                  return [
                    _c("div", [
                      _vm._v(
                        "\n                    " +
                          _vm._s(item.lastname) +
                          ", " +
                          _vm._s(item.firstname) +
                          " " +
                          _vm._s(item.middlename) +
                          "\n                "
                      )
                    ])
                  ]
                }
              }
            ]),
            model: {
              value: _vm.student,
              callback: function($$v) {
                _vm.student = $$v
              },
              expression: "student"
            }
          }),
          _vm._v(" "),
          _c(
            "v-btn",
            {
              staticClass: "ml-2",
              attrs: { color: "primary", disabled: false },
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
          _c(
            "v-card",
            { staticClass: "pa-2" },
            [
              _c("div", { staticClass: "d-flex justify-center" }, [
                _c(
                  "div",
                  { staticClass: "pr-6" },
                  [
                    _c("v-img", {
                      attrs: {
                        src: "/img/ca.jfif",
                        height: "120",
                        width: "120"
                      }
                    })
                  ],
                  1
                ),
                _vm._v(" "),
                _c("div", { attrs: { align: "center" } }, [
                  _c("div", { staticClass: "text-h4" }, [
                    _vm._v("CARMEL ACADEMY")
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "text-h6" }, [
                    _vm._v("Balilihan, Bohol")
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "text-caption" }, [
                    _vm._v(
                      "MEMBER: Bohol Association of Catholic Schools (BACS),\n                            Tagbilaran City"
                    ),
                    _c("br"),
                    _vm._v(
                      "\n                            :Catholic Educational Association of the Philippines (CEAP)\n                        "
                    )
                  ])
                ])
              ]),
              _vm._v(" "),
              _c("br"),
              _vm._v(" "),
              _c("v-divider"),
              _vm._v(" "),
              _c(
                "v-container",
                [
                  _c(
                    "v-sheet",
                    {
                      staticClass: "py-4",
                      attrs: { align: "center", justify: "center" }
                    },
                    [
                      _c("div", { staticClass: "text-h5 font-weight-bold" }, [
                        _vm._v("CERTIFICATE")
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "v-container",
                    [
                      _c("v-sheet", [
                        _c("p", { staticClass: "font-weight-bold" }, [
                          _vm._v("To Whom It May Concern:")
                        ]),
                        _vm._v(" "),
                        _c("br"),
                        _vm._v(" "),
                        _c("p", [
                          _vm._v("This is to certify that "),
                          _c("strong", [
                            _vm._v(
                              _vm._s(
                                _vm.ReportsStore.state.generateCOE
                                  .student_firstname
                              ) +
                                "\n                            " +
                                _vm._s(
                                  _vm.ReportsStore.state.generateCOE
                                    .student_middlename
                                ) +
                                "\n                            " +
                                _vm._s(
                                  _vm.ReportsStore.state.generateCOE
                                    .student_lastname
                                )
                            )
                          ]),
                          _vm._v(
                            " is officially enrolled in Carmel\n                            Academy, Balilihan, Bohol as "
                          ),
                          _c("strong", [
                            _vm._v(
                              _vm._s(_vm.ReportsStore.state.generateCOE.grade)
                            )
                          ]),
                          _vm._v(" student\n                            for "),
                          _c("strong", [
                            _vm._v(
                              "S.Y. " +
                                _vm._s(_vm.ReportsStore.state.generateCOE.sy)
                            )
                          ]),
                          _vm._v(".\n                        ")
                        ]),
                        _vm._v(" "),
                        _c("p", [
                          _vm._v(
                            "This certification is issued upon the request of the above mentioned\n                            name for whatever legal purpose it may serve.\n                        "
                          )
                        ]),
                        _vm._v(" "),
                        _c("p", [
                          _vm._v("Issued this "),
                          _c("strong", [_vm._v(_vm._s(_vm.date))]),
                          _vm._v(
                            " at CARMEL ACADEMY, Del Carmen Norte,\n                            Balilihan, Bohol.\n                        "
                          )
                        ]),
                        _vm._v(" "),
                        _c("br")
                      ])
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("v-sheet", { attrs: { align: "right" } }, [
                    _c("span", [
                      _c(
                        "p",
                        {
                          staticClass: "font-weight-bold pa-0 ma-0",
                          staticStyle: { "text-decoration": "underline" }
                        },
                        [_vm._v("EMETERIO C. JAVINEZ JR., LPT, MAED")]
                      ),
                      _vm._v(" "),
                      _c("em", [_vm._v("School Principal")])
                    ])
                  ])
                ],
                1
              )
            ],
            1
          )
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

/***/ "./resources/js/pages/Reports/COE.vue":
/*!********************************************!*\
  !*** ./resources/js/pages/Reports/COE.vue ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _COE_vue_vue_type_template_id_8728cce0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./COE.vue?vue&type=template&id=8728cce0& */ "./resources/js/pages/Reports/COE.vue?vue&type=template&id=8728cce0&");
/* harmony import */ var _COE_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./COE.vue?vue&type=script&lang=js& */ "./resources/js/pages/Reports/COE.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _COE_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _COE_vue_vue_type_template_id_8728cce0___WEBPACK_IMPORTED_MODULE_0__["render"],
  _COE_vue_vue_type_template_id_8728cce0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/Reports/COE.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/Reports/COE.vue?vue&type=script&lang=js&":
/*!*********************************************************************!*\
  !*** ./resources/js/pages/Reports/COE.vue?vue&type=script&lang=js& ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_COE_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./COE.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Reports/COE.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_COE_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/Reports/COE.vue?vue&type=template&id=8728cce0&":
/*!***************************************************************************!*\
  !*** ./resources/js/pages/Reports/COE.vue?vue&type=template&id=8728cce0& ***!
  \***************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_COE_vue_vue_type_template_id_8728cce0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./COE.vue?vue&type=template&id=8728cce0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Reports/COE.vue?vue&type=template&id=8728cce0&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_COE_vue_vue_type_template_id_8728cce0___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_COE_vue_vue_type_template_id_8728cce0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=36.js.map