(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[30],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Adviser/Enrollment/List.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Adviser/Enrollment/List.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    ViewDialog: function ViewDialog() {
      return __webpack_require__.e(/*! import() */ 32).then(__webpack_require__.bind(null, /*! ./View.vue */ "./resources/js/pages/Adviser/Enrollment/View.vue"));
    }
  },
  data: function data() {
    return {
      searchKey: "",
      tblHeaders: [{
        text: "LRN",
        value: "lrn"
      }, {
        text: "First Name",
        value: "firstname"
      }, {
        text: "Middle Name",
        value: "middlename"
      }, {
        text: "Last Name",
        value: "lastname"
      }, {
        text: "Gender",
        value: "gender"
      }, {
        text: "Final Remarks",
        value: "final_remarks"
      }, {
        text: "Actions",
        value: "actions"
      }],
      gender: 'All'
    };
  },
  methods: {
    viewDialog: function viewDialog(enrollment_line_id) {
      this.AdviserEnrollmentStore.state.selectedELID = enrollment_line_id;
      this.AdviserEnrollmentStore.state.viewDialog = true;
    }
  },
  computed: {
    sectionStudents: function sectionStudents() {
      var _this = this;

      try {
        if (this.gender == 'All') {
          return this.AdviserEnrollmentStore.state.sectionStudents;
        } else {
          return this.AdviserEnrollmentStore.state.sectionStudents.filter(function (e) {
            return e.gender == _this.gender;
          });
        }
      } catch (error) {
        console.error(error);
        return [];
      }
    }
  },
  created: function created() {}
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Adviser/Enrollment/List.vue?vue&type=template&id=701e286a&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Adviser/Enrollment/List.vue?vue&type=template&id=701e286a& ***!
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
              _vm._v("\n            Students\n            "),
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
              label: "Gender",
              items: ["All", "Male", "Female"],
              dense: "",
              rounded: "",
              "hide-details": ""
            },
            model: {
              value: _vm.gender,
              callback: function($$v) {
                _vm.gender = $$v
              },
              expression: "gender"
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
          })
        ],
        1
      ),
      _vm._v(" "),
      _c("v-data-table", {
        staticClass: "elevation-1",
        attrs: {
          headers: _vm.tblHeaders,
          items: _vm.sectionStudents,
          "pagination.sync": "pagination",
          search: _vm.searchKey
        },
        scopedSlots: _vm._u(
          [
            {
              key: "item.actions",
              fn: function(ref) {
                var item = ref.item
                return [
                  _c(
                    "v-btn",
                    {
                      attrs: { icon: "", color: "primary", title: "View" },
                      on: {
                        click: function($event) {
                          $event.stopPropagation()
                          return _vm.viewDialog(item.id)
                        }
                      }
                    },
                    [_c("v-icon", [_vm._v("mdi-eye")])],
                    1
                  )
                ]
              }
            }
          ],
          null,
          true
        )
      }),
      _vm._v(" "),
      _c(
        "v-dialog",
        {
          attrs: { "max-width": "80%" },
          model: {
            value: _vm.AdviserEnrollmentStore.state.viewDialog,
            callback: function($$v) {
              _vm.$set(_vm.AdviserEnrollmentStore.state, "viewDialog", $$v)
            },
            expression: "AdviserEnrollmentStore.state.viewDialog"
          }
        },
        [
          _c("ViewDialog", {
            key: _vm.AdviserEnrollmentStore.state.selectedELID
          })
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

/***/ "./resources/js/pages/Adviser/Enrollment/List.vue":
/*!********************************************************!*\
  !*** ./resources/js/pages/Adviser/Enrollment/List.vue ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _List_vue_vue_type_template_id_701e286a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./List.vue?vue&type=template&id=701e286a& */ "./resources/js/pages/Adviser/Enrollment/List.vue?vue&type=template&id=701e286a&");
/* harmony import */ var _List_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./List.vue?vue&type=script&lang=js& */ "./resources/js/pages/Adviser/Enrollment/List.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _List_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _List_vue_vue_type_template_id_701e286a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _List_vue_vue_type_template_id_701e286a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/Adviser/Enrollment/List.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/Adviser/Enrollment/List.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/pages/Adviser/Enrollment/List.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_List_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./List.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Adviser/Enrollment/List.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_List_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/Adviser/Enrollment/List.vue?vue&type=template&id=701e286a&":
/*!***************************************************************************************!*\
  !*** ./resources/js/pages/Adviser/Enrollment/List.vue?vue&type=template&id=701e286a& ***!
  \***************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_List_vue_vue_type_template_id_701e286a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./List.vue?vue&type=template&id=701e286a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Adviser/Enrollment/List.vue?vue&type=template&id=701e286a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_List_vue_vue_type_template_id_701e286a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_List_vue_vue_type_template_id_701e286a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=30.js.map