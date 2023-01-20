(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Admin/Enrollment/index.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Admin/Enrollment/index.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    List: function List() {
      return __webpack_require__.e(/*! import() */ 11).then(__webpack_require__.bind(null, /*! ./List.vue */ "./resources/js/pages/Admin/Enrollment/List.vue"));
    },
    Add: function Add() {
      return __webpack_require__.e(/*! import() */ 10).then(__webpack_require__.bind(null, /*! ./Add.vue */ "./resources/js/pages/Admin/Enrollment/Add.vue"));
    }
  },
  data: function data() {
    return {};
  },
  computed: {
    level: function level() {
      return this.$route.meta.level;
    }
  },
  watch: {
    level: function level() {
      this.AdminEnrollmentStore.state.studentsForEnrollment = [];
      this.AdminEnrollmentStore.state.studentsEnrolled = [];
      this.AdminEnrollmentStore.state.tabsMain = {
        'Nursery': 0,
        'Kinder': 0,
        'Elementary': 0,
        'Junior High': 0,
        'Senior High': 0
      };
    }
  },
  created: function created() {
    // this.AdminStudentsStore.getStudents();
    this.AdminSectionsStore.getSections();
    this.AdminStrandsStore.getStrands();
  },
  mounted: function mounted() {
    console.log('Enrollment component mounted: ' + this.level);
  },
  beforeDestroy: function beforeDestroy() {
    this.AdminEnrollmentStore.state.studentsForEnrollment = [];
    this.AdminEnrollmentStore.state.studentsEnrolled = [];
    this.AdminEnrollmentStore.state.tabsMain = {
      'Nursery': 0,
      'Kinder': 0,
      'Elementary': 0,
      'Junior High': 0,
      'Senior High': 0
    };
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Admin/Enrollment/index.vue?vue&type=template&id=65c02e30&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Admin/Enrollment/index.vue?vue&type=template&id=65c02e30& ***!
  \********************************************************************************************************************************************************************************************************************/
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
        { attrs: { app: "", elevation: "0" } },
        [
          _c("v-toolbar-title", [
            _vm._v(
              "\n            " + _vm._s(_vm.$route.meta.name) + "\n        "
            )
          ]),
          _vm._v(" "),
          _c("v-spacer"),
          _vm._v(" "),
          _c(
            "div",
            [
              _c(
                "v-btn",
                {
                  attrs: {
                    icon: "",
                    color: "primary",
                    title: "Enrolled Students List"
                  },
                  on: {
                    click: function($event) {
                      _vm.AdminEnrollmentStore.state.tabsMain[_vm.level] = 0
                    }
                  }
                },
                [_c("v-icon", [_vm._v("mdi-file-multiple")])],
                1
              ),
              _vm._v(" "),
              _c(
                "v-btn",
                {
                  attrs: {
                    icon: "",
                    color: "primary",
                    title: "Add Enrollment Data"
                  },
                  on: {
                    click: function($event) {
                      _vm.AdminEnrollmentStore.state.tabsMain[_vm.level] = 1
                    }
                  }
                },
                [_c("v-icon", [_vm._v("mdi-file-plus")])],
                1
              )
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-tabs-items",
        {
          model: {
            value: _vm.AdminEnrollmentStore.state.tabsMain[_vm.level],
            callback: function($$v) {
              _vm.$set(_vm.AdminEnrollmentStore.state.tabsMain, _vm.level, $$v)
            },
            expression: "AdminEnrollmentStore.state.tabsMain[level]"
          }
        },
        [
          _c("v-tab-item", [_c("List")], 1),
          _vm._v(" "),
          _c("v-tab-item", [_c("Add")], 1)
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

/***/ "./resources/js/pages/Admin/Enrollment/index.vue":
/*!*******************************************************!*\
  !*** ./resources/js/pages/Admin/Enrollment/index.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_65c02e30___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=65c02e30& */ "./resources/js/pages/Admin/Enrollment/index.vue?vue&type=template&id=65c02e30&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/js/pages/Admin/Enrollment/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_65c02e30___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_65c02e30___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/Admin/Enrollment/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/Admin/Enrollment/index.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/pages/Admin/Enrollment/index.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Admin/Enrollment/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/Admin/Enrollment/index.vue?vue&type=template&id=65c02e30&":
/*!**************************************************************************************!*\
  !*** ./resources/js/pages/Admin/Enrollment/index.vue?vue&type=template&id=65c02e30& ***!
  \**************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_65c02e30___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=65c02e30& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Admin/Enrollment/index.vue?vue&type=template&id=65c02e30&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_65c02e30___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_65c02e30___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=0.js.map