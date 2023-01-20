(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[25],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Admin/index.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Admin/index.vue?vue&type=script&lang=js& ***!
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
/* harmony default export */ __webpack_exports__["default"] = ({
  computed: {
    nursery: function nursery() {
      try {
        return this.AdminEnrollmentStore.state.studentsEnrolled.filter(function (e) {
          return e.level == "Nursery";
        });
      } catch (error) {
        return [];
      }
    },
    kinder: function kinder() {
      try {
        return this.AdminEnrollmentStore.state.studentsEnrolled.filter(function (e) {
          return e.level == "Kinder";
        });
      } catch (error) {
        return [];
      }
    },
    elementary: function elementary() {
      try {
        return this.AdminEnrollmentStore.state.studentsEnrolled.filter(function (e) {
          return e.level == "Elementary";
        });
      } catch (error) {
        return [];
      }
    },
    jhs: function jhs() {
      try {
        return this.AdminEnrollmentStore.state.studentsEnrolled.filter(function (e) {
          return e.level == "Junior High";
        });
      } catch (error) {
        return [];
      }
    },
    shs: function shs() {
      try {
        return this.AdminEnrollmentStore.state.studentsEnrolled.filter(function (e) {
          return e.level == "Senior High";
        });
      } catch (error) {
        return [];
      }
    }
  },
  created: function created() {
    // this.AdminStudentsStore.getStudents();
    // this.AdminAdvisersStore.getTeachers();
    // this.AdminAdvisersStore.getAdvisers();
    this.AdminEnrollmentStore.getStudentsEnrolled(this.AdminSYStore.state.activeSYid, null, null);
  },
  beforeDestroy: function beforeDestroy() {
    this.AdminEnrollmentStore.state.studentsEnrolled = [];
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Admin/index.vue?vue&type=template&id=7daf2a19&":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Admin/index.vue?vue&type=template&id=7daf2a19& ***!
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
    "v-container",
    [
      _c(
        "v-row",
        [
          _c(
            "v-col",
            { attrs: { cols: "12", md: "3", lg: "2" } },
            [
              _c(
                "v-card",
                {
                  attrs: {
                    color: "success",
                    dark: "",
                    outlined: "",
                    link: "",
                    to: "enrollment/nursery"
                  }
                },
                [
                  _c("v-card-title", [
                    _vm._v("\n                    Nursery\n                ")
                  ]),
                  _vm._v(" "),
                  _c("v-card-text", [
                    _c("h1", [_vm._v(_vm._s(_vm.nursery.length))])
                  ])
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-col",
            { attrs: { cols: "12", md: "3", lg: "2" } },
            [
              _c(
                "v-card",
                {
                  attrs: {
                    color: "success",
                    dark: "",
                    outlined: "",
                    link: "",
                    to: "enrollment/kinder"
                  }
                },
                [
                  _c("v-card-title", [
                    _vm._v("\n                    Kinder\n                ")
                  ]),
                  _vm._v(" "),
                  _c("v-card-text", [
                    _c("h1", [_vm._v(_vm._s(_vm.kinder.length))])
                  ])
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-col",
            { attrs: { cols: "12", md: "3", lg: "2" } },
            [
              _c(
                "v-card",
                {
                  attrs: {
                    color: "success",
                    dark: "",
                    outlined: "",
                    link: "",
                    to: "enrollment/elementary"
                  }
                },
                [
                  _c("v-card-title", [
                    _vm._v("\n                    Elementary\n                ")
                  ]),
                  _vm._v(" "),
                  _c("v-card-text", [
                    _c("h1", [_vm._v(_vm._s(_vm.elementary.length))])
                  ])
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-col",
            { attrs: { cols: "12", md: "3", lg: "2" } },
            [
              _c(
                "v-card",
                {
                  attrs: {
                    color: "success",
                    dark: "",
                    outlined: "",
                    link: "",
                    to: "enrollment/jhs"
                  }
                },
                [
                  _c("v-card-title", [
                    _vm._v(
                      "\n                    Junior High\n                "
                    )
                  ]),
                  _vm._v(" "),
                  _c("v-card-text", [
                    _c("h1", [_vm._v(_vm._s(_vm.jhs.length))])
                  ])
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-col",
            { attrs: { cols: "12", md: "3", lg: "2" } },
            [
              _c(
                "v-card",
                {
                  attrs: {
                    color: "success",
                    dark: "",
                    outlined: "",
                    link: "",
                    to: "enrollment/shs"
                  }
                },
                [
                  _c("v-card-title", [
                    _vm._v(
                      "\n                    Senior High\n                "
                    )
                  ]),
                  _vm._v(" "),
                  _c("v-card-text", [
                    _c("h1", [_vm._v(_vm._s(_vm.shs.length))])
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

/***/ "./resources/js/pages/Admin/index.vue":
/*!********************************************!*\
  !*** ./resources/js/pages/Admin/index.vue ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_7daf2a19___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=7daf2a19& */ "./resources/js/pages/Admin/index.vue?vue&type=template&id=7daf2a19&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/js/pages/Admin/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_7daf2a19___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_7daf2a19___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/Admin/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/Admin/index.vue?vue&type=script&lang=js&":
/*!*********************************************************************!*\
  !*** ./resources/js/pages/Admin/index.vue?vue&type=script&lang=js& ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Admin/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/Admin/index.vue?vue&type=template&id=7daf2a19&":
/*!***************************************************************************!*\
  !*** ./resources/js/pages/Admin/index.vue?vue&type=template&id=7daf2a19& ***!
  \***************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_7daf2a19___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=7daf2a19& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Admin/index.vue?vue&type=template&id=7daf2a19&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_7daf2a19___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_7daf2a19___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=25.js.map