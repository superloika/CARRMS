(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[9],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Admin/Enrollment/List.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Admin/Enrollment/List.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      searchKey: "",
      tblHeaders: [{
        text: "LRN",
        value: "student_lrn"
      }, {
        text: "First Name",
        value: "student_firstname"
      }, {
        text: "Middle Name",
        value: "student_middlename"
      }, {
        text: "Last Name",
        value: "student_lastname"
      }, {
        text: "Ext. Name",
        value: "student_extname"
      }, {
        text: "Gender",
        value: "student_gender"
      }, {
        text: "Grade",
        value: "grade"
      }, {
        text: "Section",
        value: "section"
      }, {
        text: "Adviser",
        value: "adviser_name"
      }, {
        text: "Final Remarks",
        value: "final_remarks"
      }, {
        text: "Actions",
        value: "actions"
      }],
      selectedSection: null
    };
  },
  methods: {
    onChangeGradeSection: function onChangeGradeSection() {
      try {
        this.AdminEnrollmentStore.getStudentsEnrolled(this.AdminSYStore.state.activeSYid, this.selectedSection.id, this.level);
      } catch (error) {}
    },
    refresh: function refresh() {
      this.selectedSection = '';
      this.onChangeGradeSection();
      this.searchKey = "";
    }
  },
  computed: {
    sections: function sections() {
      var _this = this;

      return this.AdminSectionsStore.state.sections.filter(function (e) {
        return e.adviser_id != null && e.level == _this.level;
      });
    },
    level: function level() {
      return this.$route.meta.level;
    }
  },
  watch: {
    level: function level() {
      this.refresh();
    }
  },
  created: function created() {
    this.refresh();
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Admin/Enrollment/List.vue?vue&type=template&id=3590a860&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Admin/Enrollment/List.vue?vue&type=template&id=3590a860& ***!
  \*******************************************************************************************************************************************************************************************************************/
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
          _c(
            "v-toolbar-title",
            { staticClass: "text-overline font-weight-bold" },
            [
              _vm._v("\n            Enrollment Data\n            "),
              _c("v-chip", { attrs: { small: "", color: "accent" } }, [
                _vm._v(
                  "\n                " +
                    _vm._s(_vm.AdminSYStore.state.activeSY) +
                    "\n            "
                )
              ])
            ],
            1
          ),
          _vm._v(" "),
          _c("v-spacer"),
          _vm._v(" "),
          _c("v-select", {
            staticStyle: { "max-width": "200px" },
            attrs: {
              outlined: "",
              label: "Grade & Section",
              items: _vm.sections,
              "item-value": "id",
              "return-object": "",
              dense: "",
              rounded: "",
              "hide-details": ""
            },
            on: { change: _vm.onChangeGradeSection },
            scopedSlots: _vm._u([
              {
                key: "item",
                fn: function(data) {
                  return [
                    _vm._v(
                      "\n                " +
                        _vm._s(data.item.grade) +
                        " - " +
                        _vm._s(data.item.section) +
                        "\n            "
                    )
                  ]
                }
              },
              {
                key: "selection",
                fn: function(data) {
                  return [
                    _vm._v(
                      "\n                " +
                        _vm._s(data.item.grade) +
                        " - " +
                        _vm._s(data.item.section) +
                        "\n            "
                    )
                  ]
                }
              }
            ]),
            model: {
              value: _vm.selectedSection,
              callback: function($$v) {
                _vm.selectedSection = $$v
              },
              expression: "selectedSection"
            }
          }),
          _vm._v(" "),
          _c("v-text-field", {
            staticClass: "ml-2",
            staticStyle: { "max-width": "250px" },
            attrs: {
              placeholder: "Search",
              clearable: "",
              "hide-details": "",
              "solo-inverted": "",
              rounded: "",
              dense: "",
              flat: ""
            },
            model: {
              value: _vm.searchKey,
              callback: function($$v) {
                _vm.searchKey = $$v
              },
              expression: "searchKey"
            }
          }),
          _vm._v(" "),
          _c(
            "v-btn",
            {
              staticClass: "ml-2",
              attrs: { icon: "", dense: "", title: "Refresh" },
              on: {
                click: function($event) {
                  return _vm.refresh()
                }
              }
            },
            [_c("v-icon", [_vm._v("mdi-refresh")])],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c("v-data-table", {
        staticClass: "elevation-1",
        attrs: {
          headers: _vm.tblHeaders,
          items: _vm.AdminEnrollmentStore.state.studentsEnrolled,
          "pagination.sync": "pagination",
          search: _vm.searchKey
        },
        scopedSlots: _vm._u(
          [
            {
              key: "item.adviser_name",
              fn: function(ref) {
                var item = ref.item
                return [
                  _vm._v(
                    "\n            " +
                      _vm._s(item.adviser_firstname) +
                      " " +
                      _vm._s(item.middlename) +
                      " " +
                      _vm._s(item.adviser_lastname) +
                      "\n        "
                  )
                ]
              }
            },
            {
              key: "item.actions",
              fn: function(ref) {
                var item = ref.item
                return [
                  _c(
                    "v-btn",
                    {
                      attrs: {
                        icon: "",
                        color: "primary",
                        title: "View Details",
                        disabled: ""
                      }
                    },
                    [_c("v-icon", [_vm._v("mdi-eye")])],
                    1
                  ),
                  _vm._v(" "),
                  _vm.AppStore.isSuperAdmin()
                    ? _c(
                        "v-btn",
                        {
                          attrs: { icon: "", color: "error", title: "Delete" },
                          on: {
                            click: function($event) {
                              return _vm.deleteSection(item.id)
                            }
                          }
                        },
                        [_c("v-icon", [_vm._v("mdi-delete")])],
                        1
                      )
                    : _vm._e()
                ]
              }
            }
          ],
          null,
          true
        )
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/pages/Admin/Enrollment/List.vue":
/*!******************************************************!*\
  !*** ./resources/js/pages/Admin/Enrollment/List.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _List_vue_vue_type_template_id_3590a860___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./List.vue?vue&type=template&id=3590a860& */ "./resources/js/pages/Admin/Enrollment/List.vue?vue&type=template&id=3590a860&");
/* harmony import */ var _List_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./List.vue?vue&type=script&lang=js& */ "./resources/js/pages/Admin/Enrollment/List.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _List_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _List_vue_vue_type_template_id_3590a860___WEBPACK_IMPORTED_MODULE_0__["render"],
  _List_vue_vue_type_template_id_3590a860___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/Admin/Enrollment/List.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/Admin/Enrollment/List.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/pages/Admin/Enrollment/List.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_List_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./List.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Admin/Enrollment/List.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_List_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/Admin/Enrollment/List.vue?vue&type=template&id=3590a860&":
/*!*************************************************************************************!*\
  !*** ./resources/js/pages/Admin/Enrollment/List.vue?vue&type=template&id=3590a860& ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_List_vue_vue_type_template_id_3590a860___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./List.vue?vue&type=template&id=3590a860& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Admin/Enrollment/List.vue?vue&type=template&id=3590a860&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_List_vue_vue_type_template_id_3590a860___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_List_vue_vue_type_template_id_3590a860___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=9.js.map