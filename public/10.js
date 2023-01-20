(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[10],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Admin/Enrollment/Add.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Admin/Enrollment/Add.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      selectedSection: null,
      selectedStrand: null,
      selectedToAdd: [],
      tblLeftSearch: '',
      tblRightSearch: ''
    };
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
    },
    students: function students() {
      return this.AdminEnrollmentStore.state.studentsForEnrollment;
    },
    strands: function strands() {
      return this.AdminStrandsStore.state.strands;
    },
    btnSaveStatus: function btnSaveStatus() {
      return !this.selectedToAdd.length || this.selectedSection == null || this.level == 'Senior High' && this.selectedStrand == null;
    }
  },
  watch: {
    level: function level() {
      this.selectedSection = null;
      this.selectedToAdd = [];
    }
  },
  methods: {
    saveStudentEnrollment: function saveStudentEnrollment() {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var selectedStrandId;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                console.log(_this2.selectedSection);
                console.log(_this2.selectedToAdd);
                console.log(_this2.AdminSYStore.state.activeSY);
                selectedStrandId = _this2.selectedStrand != null ? _this2.selectedStrand.id : null;
                _context.next = 6;
                return axios.post("".concat(_this2.AppStore.state.siteUrl, "admin/enrollment/saveStudentEnrollment"), {
                  head: {
                    sy_id: _this2.AdminSYStore.state.activeSYid,
                    adviser_id: _this2.selectedSection.adviser_id,
                    section_id: _this2.selectedSection.id,
                    grade: _this2.selectedSection.grade,
                    strand_id: selectedStrandId
                  },
                  line: _this2.selectedToAdd.map(function (e) {
                    return e.id;
                  })
                }).then(function (e) {
                  _this2.AppStore.toast(e.data, 2000, 'success');

                  _this2.AdminEnrollmentStore.getStudentsForEnrollment(_this2.selectedSection.grade);

                  _this2.selectedToAdd = [];
                  _this2.selectedStrand = null;

                  _this2.AdminSectionsStore.getSections();
                })["catch"](function (e) {
                  if (e.response) {
                    _this2.AppStore.toast(e.response.data, 3000, 'error');
                  }
                });

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    onChangeGradeSection: function onChangeGradeSection(section) {
      console.log(section);
      this.selectedToAdd = [];
      this.selectedStrand = null;
      this.AdminEnrollmentStore.getStudentsForEnrollment(section.grade);
    }
  },
  created: function created() {}
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Admin/Enrollment/Add.vue?vue&type=template&id=2360cfdf&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Admin/Enrollment/Add.vue?vue&type=template&id=2360cfdf& ***!
  \******************************************************************************************************************************************************************************************************************/
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
            { staticClass: "text-overline primary--text" },
            [_vm._v("\n            Add New Enrollment Data\n        ")]
          ),
          _vm._v(" "),
          _c("v-spacer"),
          _vm._v(" "),
          _c(
            "v-btn",
            {
              attrs: {
                dense: "",
                iconx: "",
                text: "",
                color: "primary",
                disabled: _vm.btnSaveStatus
              },
              on: { click: _vm.saveStudentEnrollment }
            },
            [_c("v-icon", [_vm._v("mdi-floppy")]), _vm._v(" Save\n        ")],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-container",
        { staticClass: "pt-6" },
        [
          _c(
            "v-row",
            [
              _c(
                "v-col",
                { attrs: { cols: "12", md: "9" } },
                [
                  _c(
                    "v-row",
                    [
                      _c(
                        "v-col",
                        [
                          _c("v-select", {
                            attrs: {
                              outlined: "",
                              densex: "",
                              filledx: "",
                              label: "Add to Grade & Section",
                              items: _vm.sections,
                              "item-value": "id",
                              "return-object": "",
                              hint:
                                "Only the sections with a class adviser are selectable",
                              "persistent-hint": ""
                            },
                            on: { input: _vm.onChangeGradeSection },
                            scopedSlots: _vm._u([
                              {
                                key: "item",
                                fn: function(data) {
                                  return [
                                    _vm._v(
                                      "\n                                " +
                                        _vm._s(data.item.grade) +
                                        " - " +
                                        _vm._s(data.item.section) +
                                        "\n                            "
                                    )
                                  ]
                                }
                              },
                              {
                                key: "selection",
                                fn: function(data) {
                                  return [
                                    _vm._v(
                                      "\n                                " +
                                        _vm._s(data.item.grade) +
                                        " - " +
                                        _vm._s(data.item.section) +
                                        "\n                            "
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
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _vm.level == "Senior High"
                        ? _c(
                            "v-col",
                            { attrs: { cols: "5" } },
                            [
                              _c("v-select", {
                                attrs: {
                                  outlined: "",
                                  densex: "",
                                  filledx: "",
                                  label: "Select Strand",
                                  items: _vm.strands,
                                  "item-value": "id",
                                  "return-object": ""
                                },
                                scopedSlots: _vm._u(
                                  [
                                    {
                                      key: "item",
                                      fn: function(data) {
                                        return [
                                          _vm._v(
                                            "\n                                " +
                                              _vm._s(data.item.strand_name) +
                                              "\n                            "
                                          )
                                        ]
                                      }
                                    },
                                    {
                                      key: "selection",
                                      fn: function(data) {
                                        return [
                                          _vm._v(
                                            "\n                                " +
                                              _vm._s(data.item.strand_name) +
                                              "\n                            "
                                          )
                                        ]
                                      }
                                    }
                                  ],
                                  null,
                                  false,
                                  2603874396
                                ),
                                model: {
                                  value: _vm.selectedStrand,
                                  callback: function($$v) {
                                    _vm.selectedStrand = $$v
                                  },
                                  expression: "selectedStrand"
                                }
                              })
                            ],
                            1
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      _c(
                        "v-col",
                        { attrs: { cols: "12", md: "12" } },
                        [
                          _c(
                            "v-card",
                            { key: _vm.level },
                            [
                              _c(
                                "v-toolbar",
                                { attrs: { elevation: "0" } },
                                [
                                  _c("v-text-field", {
                                    staticStyle: { "max-width": "300px" },
                                    attrs: {
                                      "hide-details": "",
                                      dense: "",
                                      flat: "",
                                      "solo-inverted": "",
                                      rounded: "",
                                      placeholder: "Search student(s) to add"
                                    },
                                    model: {
                                      value: _vm.tblLeftSearch,
                                      callback: function($$v) {
                                        _vm.tblLeftSearch = $$v
                                      },
                                      expression: "tblLeftSearch"
                                    }
                                  })
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-card-text",
                                [
                                  _c("v-data-table", {
                                    attrs: {
                                      headers: [
                                        { text: "SID", value: "id" },
                                        {
                                          text: "First Name",
                                          value: "firstname"
                                        },
                                        {
                                          text: "Middle Name",
                                          value: "middlename"
                                        },
                                        {
                                          text: "Last Name",
                                          value: "lastname"
                                        },
                                        { text: "Ext. Name", value: "extname" }
                                      ],
                                      items: _vm.students,
                                      search: _vm.tblLeftSearch,
                                      "show-select": ""
                                    },
                                    scopedSlots: _vm._u(
                                      [
                                        {
                                          key: "item.name",
                                          fn: function(ref) {
                                            var item = ref.item
                                            return [
                                              _vm._v(
                                                "\n                                        " +
                                                  _vm._s(item.firstname) +
                                                  " " +
                                                  _vm._s(item.middlename) +
                                                  " " +
                                                  _vm._s(item.lastname) +
                                                  "\n                                    "
                                              )
                                            ]
                                          }
                                        }
                                      ],
                                      null,
                                      true
                                    ),
                                    model: {
                                      value: _vm.selectedToAdd,
                                      callback: function($$v) {
                                        _vm.selectedToAdd = $$v
                                      },
                                      expression: "selectedToAdd"
                                    }
                                  })
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
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-col",
                { attrs: { cols: "12", md: "3" } },
                [
                  _c(
                    "v-card",
                    { key: _vm.level },
                    [
                      _c(
                        "v-toolbar",
                        { attrs: { elevation: "0" } },
                        [
                          _c("v-toolbar-title", [
                            _vm._v(
                              "\n                            Selected Students\n                        "
                            )
                          ]),
                          _vm._v(" "),
                          _c("v-spacer")
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-card-text",
                        [
                          _c("v-data-table", {
                            attrs: {
                              headers: [
                                { text: "Student Name", value: "name" }
                              ],
                              items: _vm.selectedToAdd,
                              "items-per-page": -1,
                              search: _vm.tblRightSearch,
                              "hide-default-footer": ""
                            },
                            scopedSlots: _vm._u(
                              [
                                {
                                  key: "item.name",
                                  fn: function(ref) {
                                    var item = ref.item
                                    return [
                                      _vm._v(
                                        "\n                                " +
                                          _vm._s(item.firstname) +
                                          " " +
                                          _vm._s(item.middlename) +
                                          " " +
                                          _vm._s(item.lastname) +
                                          "\n                            "
                                      )
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
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/pages/Admin/Enrollment/Add.vue":
/*!*****************************************************!*\
  !*** ./resources/js/pages/Admin/Enrollment/Add.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Add_vue_vue_type_template_id_2360cfdf___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Add.vue?vue&type=template&id=2360cfdf& */ "./resources/js/pages/Admin/Enrollment/Add.vue?vue&type=template&id=2360cfdf&");
/* harmony import */ var _Add_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Add.vue?vue&type=script&lang=js& */ "./resources/js/pages/Admin/Enrollment/Add.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Add_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Add_vue_vue_type_template_id_2360cfdf___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Add_vue_vue_type_template_id_2360cfdf___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/Admin/Enrollment/Add.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/Admin/Enrollment/Add.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/pages/Admin/Enrollment/Add.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Add.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Admin/Enrollment/Add.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/Admin/Enrollment/Add.vue?vue&type=template&id=2360cfdf&":
/*!************************************************************************************!*\
  !*** ./resources/js/pages/Admin/Enrollment/Add.vue?vue&type=template&id=2360cfdf& ***!
  \************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_vue_vue_type_template_id_2360cfdf___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Add.vue?vue&type=template&id=2360cfdf& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Admin/Enrollment/Add.vue?vue&type=template&id=2360cfdf&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_vue_vue_type_template_id_2360cfdf___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_vue_vue_type_template_id_2360cfdf___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=10.js.map