(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[32],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Adviser/Enrollment/View.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Adviser/Enrollment/View.vue?vue&type=script&lang=js& ***!
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      numberRule: function numberRule(v) {
        if (!v.trim()) return true;
        if (!isNaN(parseFloat(v)) && v >= 0 && v <= 100) return true;
        return 'Number has to be between 0 and 100';
      }
    };
  },
  computed: {
    subjects: function subjects() {
      return this.AdviserEnrollmentStore.state.selectedStudentSubjects;
    },
    subjects_sem1: function subjects_sem1() {
      if (this.AdviserEnrollmentStore.state.sectionDetails.level == 'Senior High') {
        return this.subjects.filter(function (e) {
          return e.sem == 1;
        });
      }

      return [];
    },
    subjects_sem2: function subjects_sem2() {
      if (this.AdviserEnrollmentStore.state.sectionDetails.level == 'Senior High') {
        return this.subjects.filter(function (e) {
          return e.sem == 2;
        });
      }

      return [];
    }
  },
  methods: {
    updateGrades: function updateGrades() {
      var _this = this;

      axios.post("".concat(this.AppStore.state.siteUrl, "adviser/sections/updateGrades"), {
        subjects: this.subjects,
        level: this.AdviserEnrollmentStore.state.sectionDetails.level,
        adviser_name: this.AdviserEnrollmentStore.state.sectionDetails.adviser_firstname + ' ' + this.AdviserEnrollmentStore.state.sectionDetails.adviser_lastname,
        sy_id: this.AdminSYStore.state.activeSYid
      }).then(function (e) {
        _this.AdviserEnrollmentStore.getSubjects(_this.AdviserEnrollmentStore.state.selectedELID);

        _this.AppStore.toast(e.data, 2000, 'success');
      });
    }
  },
  created: function created() {
    this.AdviserEnrollmentStore.getSubjects(this.AdviserEnrollmentStore.state.selectedELID);
  },
  mounted: function mounted() {
    console.log('ViewDialog mounted');
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Adviser/Enrollment/View.vue?vue&type=template&id=81f9cb5c&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Adviser/Enrollment/View.vue?vue&type=template&id=81f9cb5c& ***!
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
    "v-card",
    [
      _c(
        "v-app-bar",
        { attrs: { elevation: "0" } },
        [
          _c("v-toolbar-title", [_vm._v("Subjects and Grades")]),
          _vm._v(" "),
          _c("v-spacer"),
          _vm._v(" "),
          _c(
            "v-btn",
            { attrs: { color: "primary" }, on: { click: _vm.updateGrades } },
            [_vm._v("Update")]
          )
        ],
        1
      ),
      _vm._v(" "),
      _c("v-card-title"),
      _vm._v(" "),
      _c("v-card-text", [
        _vm.AdviserEnrollmentStore.state.sectionDetails.level != "Senior High"
          ? _c(
              "div",
              _vm._l(_vm.subjects, function(subject) {
                return _c(
                  "v-row",
                  { key: subject.id },
                  [
                    _c("v-col", [
                      _c(
                        "div",
                        { staticClass: "primary--text font-weight-bold pt-2" },
                        [_vm._v(_vm._s(subject.subject_name))]
                      )
                    ]),
                    _vm._v(" "),
                    _c(
                      "v-col",
                      [
                        _c("v-text-field", {
                          attrs: {
                            outlined: "",
                            dense: "",
                            "hide-details": "",
                            label: "1st",
                            type: "number",
                            min: "0",
                            max: "100",
                            rules: [_vm.numberRule]
                          },
                          model: {
                            value: subject.first,
                            callback: function($$v) {
                              _vm.$set(subject, "first", $$v)
                            },
                            expression: "subject.first"
                          }
                        })
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "v-col",
                      [
                        _c("v-text-field", {
                          attrs: {
                            outlined: "",
                            dense: "",
                            "hide-details": "",
                            label: "2nd",
                            type: "number",
                            min: "0",
                            max: "100",
                            rules: [_vm.numberRule]
                          },
                          model: {
                            value: subject.second,
                            callback: function($$v) {
                              _vm.$set(subject, "second", $$v)
                            },
                            expression: "subject.second"
                          }
                        })
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "v-col",
                      [
                        _c("v-text-field", {
                          attrs: {
                            outlined: "",
                            dense: "",
                            "hide-details": "",
                            label: "3rd",
                            type: "number",
                            min: "0",
                            max: "100",
                            rules: [_vm.numberRule]
                          },
                          model: {
                            value: subject.third,
                            callback: function($$v) {
                              _vm.$set(subject, "third", $$v)
                            },
                            expression: "subject.third"
                          }
                        })
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "v-col",
                      [
                        _c("v-text-field", {
                          attrs: {
                            outlined: "",
                            dense: "",
                            "hide-details": "",
                            label: "4th",
                            type: "number",
                            min: "0",
                            max: "100",
                            rules: [_vm.numberRule]
                          },
                          model: {
                            value: subject.fourth,
                            callback: function($$v) {
                              _vm.$set(subject, "fourth", $$v)
                            },
                            expression: "subject.fourth"
                          }
                        })
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "v-col",
                      [
                        _c("v-text-field", {
                          attrs: {
                            outlined: "",
                            dense: "",
                            "hide-details": "",
                            label: "Final",
                            readonly: ""
                          },
                          model: {
                            value: subject.final,
                            callback: function($$v) {
                              _vm.$set(subject, "final", $$v)
                            },
                            expression: "subject.final"
                          }
                        })
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "v-col",
                      [
                        _c("v-text-field", {
                          attrs: {
                            outlined: "",
                            dense: "",
                            "hide-details": "",
                            label: "Remarks",
                            readonly: ""
                          },
                          model: {
                            value: subject.remarks,
                            callback: function($$v) {
                              _vm.$set(subject, "remarks", $$v)
                            },
                            expression: "subject.remarks"
                          }
                        })
                      ],
                      1
                    )
                  ],
                  1
                )
              }),
              1
            )
          : _c(
              "div",
              [
                _c("div", { staticClass: "font-weight-bold text-h6 pb-2" }, [
                  _vm._v("First Semester")
                ]),
                _vm._v(" "),
                _vm._l(_vm.subjects_sem1, function(subject) {
                  return _c(
                    "v-row",
                    { key: subject.id },
                    [
                      _c("v-col", [
                        _c(
                          "div",
                          {
                            staticClass: "primary--text font-weight-bold pt-2"
                          },
                          [_vm._v(_vm._s(subject.subject_name))]
                        )
                      ]),
                      _vm._v(" "),
                      _c(
                        "v-col",
                        [
                          _c("v-text-field", {
                            attrs: {
                              outlined: "",
                              dense: "",
                              "hide-details": "",
                              label: "1st",
                              type: "number",
                              min: "0",
                              max: "100",
                              rules: [_vm.numberRule]
                            },
                            model: {
                              value: subject.first,
                              callback: function($$v) {
                                _vm.$set(subject, "first", $$v)
                              },
                              expression: "subject.first"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-col",
                        [
                          _c("v-text-field", {
                            attrs: {
                              outlined: "",
                              dense: "",
                              "hide-details": "",
                              label: "2nd",
                              type: "number",
                              min: "0",
                              max: "100",
                              rules: [_vm.numberRule]
                            },
                            model: {
                              value: subject.second,
                              callback: function($$v) {
                                _vm.$set(subject, "second", $$v)
                              },
                              expression: "subject.second"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-col",
                        [
                          _c("v-text-field", {
                            attrs: {
                              outlined: "",
                              dense: "",
                              "hide-details": "",
                              label: "Final",
                              readonly: ""
                            },
                            model: {
                              value: subject.final,
                              callback: function($$v) {
                                _vm.$set(subject, "final", $$v)
                              },
                              expression: "subject.final"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-col",
                        [
                          _c("v-text-field", {
                            attrs: {
                              outlined: "",
                              dense: "",
                              "hide-details": "",
                              label: "Remarks",
                              readonly: ""
                            },
                            model: {
                              value: subject.remarks,
                              callback: function($$v) {
                                _vm.$set(subject, "remarks", $$v)
                              },
                              expression: "subject.remarks"
                            }
                          })
                        ],
                        1
                      )
                    ],
                    1
                  )
                }),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "mt-12 mb-12" },
                  [_c("v-separator")],
                  1
                ),
                _vm._v(" "),
                _c("div", { staticClass: "font-weight-bold text-h6 pb-2" }, [
                  _vm._v("Second Semester")
                ]),
                _vm._v(" "),
                _vm._l(_vm.subjects_sem2, function(subject) {
                  return _c(
                    "v-row",
                    { key: subject.id },
                    [
                      _c("v-col", [
                        _c(
                          "div",
                          {
                            staticClass: "primary--text font-weight-bold pt-2"
                          },
                          [_vm._v(_vm._s(subject.subject_name))]
                        )
                      ]),
                      _vm._v(" "),
                      _c(
                        "v-col",
                        [
                          _c("v-text-field", {
                            attrs: {
                              outlined: "",
                              dense: "",
                              "hide-details": "",
                              label: "3rd",
                              type: "number",
                              min: "0",
                              max: "100",
                              rules: [_vm.numberRule]
                            },
                            model: {
                              value: subject.third,
                              callback: function($$v) {
                                _vm.$set(subject, "third", $$v)
                              },
                              expression: "subject.third"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-col",
                        [
                          _c("v-text-field", {
                            attrs: {
                              outlined: "",
                              dense: "",
                              "hide-details": "",
                              label: "4th",
                              type: "number",
                              min: "0",
                              max: "100",
                              rules: [_vm.numberRule]
                            },
                            model: {
                              value: subject.fourth,
                              callback: function($$v) {
                                _vm.$set(subject, "fourth", $$v)
                              },
                              expression: "subject.fourth"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-col",
                        [
                          _c("v-text-field", {
                            attrs: {
                              outlined: "",
                              dense: "",
                              "hide-details": "",
                              label: "Final",
                              readonly: ""
                            },
                            model: {
                              value: subject.final,
                              callback: function($$v) {
                                _vm.$set(subject, "final", $$v)
                              },
                              expression: "subject.final"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-col",
                        [
                          _c("v-text-field", {
                            attrs: {
                              outlined: "",
                              dense: "",
                              "hide-details": "",
                              label: "Remarks",
                              readonly: ""
                            },
                            model: {
                              value: subject.remarks,
                              callback: function($$v) {
                                _vm.$set(subject, "remarks", $$v)
                              },
                              expression: "subject.remarks"
                            }
                          })
                        ],
                        1
                      )
                    ],
                    1
                  )
                })
              ],
              2
            )
      ])
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/pages/Adviser/Enrollment/View.vue":
/*!********************************************************!*\
  !*** ./resources/js/pages/Adviser/Enrollment/View.vue ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _View_vue_vue_type_template_id_81f9cb5c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./View.vue?vue&type=template&id=81f9cb5c& */ "./resources/js/pages/Adviser/Enrollment/View.vue?vue&type=template&id=81f9cb5c&");
/* harmony import */ var _View_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./View.vue?vue&type=script&lang=js& */ "./resources/js/pages/Adviser/Enrollment/View.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _View_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _View_vue_vue_type_template_id_81f9cb5c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _View_vue_vue_type_template_id_81f9cb5c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/Adviser/Enrollment/View.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/Adviser/Enrollment/View.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/pages/Adviser/Enrollment/View.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_View_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./View.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Adviser/Enrollment/View.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_View_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/Adviser/Enrollment/View.vue?vue&type=template&id=81f9cb5c&":
/*!***************************************************************************************!*\
  !*** ./resources/js/pages/Adviser/Enrollment/View.vue?vue&type=template&id=81f9cb5c& ***!
  \***************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_View_vue_vue_type_template_id_81f9cb5c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./View.vue?vue&type=template&id=81f9cb5c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Adviser/Enrollment/View.vue?vue&type=template&id=81f9cb5c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_View_vue_vue_type_template_id_81f9cb5c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_View_vue_vue_type_template_id_81f9cb5c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=32.js.map