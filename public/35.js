(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[35],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Reports/PermaRecord.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Reports/PermaRecord.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      level: '',
      student: ''
    };
  },
  computed: {
    pr: function pr() {
      console.log('asdasdasdsad', this.ReportsStore.state.permaRecord);
      return this.ReportsStore.state.permaRecord;
    },
    showOutput: function showOutput() {
      return this.level == '' || this.student == '' ? false : true;
    }
  },
  methods: {
    generate: function generate() {
      this.ReportsStore.permaRecord(this.student.id, this.level);
    }
  },
  created: function created() {
    this.AdminSYStore.getSYs();
    this.AdminStudentsStore.getStudents();
  },
  beforeDestroy: function beforeDestroy() {
    this.ReportsStore.state.studentEnrollment = [];
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Reports/PermaRecord.vue?vue&type=style&index=0&id=ff20488e&scoped=true&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Reports/PermaRecord.vue?vue&type=style&index=0&id=ff20488e&scoped=true&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\ntable[data-v-ff20488e] {\n    width: 100%;\n    border-collapse: collapse;\n}\ntr td[data-v-ff20488e], tr th[data-v-ff20488e] {\n    border: 1px solid #505050;\n}\ntr td[data-v-ff20488e], tr th[data-v-ff20488e] {\n    padding: 5px;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Reports/PermaRecord.vue?vue&type=style&index=0&id=ff20488e&scoped=true&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Reports/PermaRecord.vue?vue&type=style&index=0&id=ff20488e&scoped=true&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./PermaRecord.vue?vue&type=style&index=0&id=ff20488e&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Reports/PermaRecord.vue?vue&type=style&index=0&id=ff20488e&scoped=true&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Reports/PermaRecord.vue?vue&type=template&id=ff20488e&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Reports/PermaRecord.vue?vue&type=template&id=ff20488e&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************/
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
              attrs: { color: "primary", disabled: false },
              on: { click: _vm.generate }
            },
            [_vm._v("Generate")]
          )
        ],
        1
      ),
      _vm._v(" "),
      _vm.showOutput
        ? _c(
            "v-container",
            [
              _c(
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
                        _vm._v("Student Permanent Record")
                      ]),
                      _vm._v(" "),
                      _c("div", {}, [_vm._v(_vm._s(_vm.level))]),
                      _vm._v(" "),
                      _c("br")
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "v-card-text",
                    { staticClass: "black--text" },
                    [
                      _c(
                        "v-row",
                        [
                          _c(
                            "v-col",
                            {
                              staticStyle: { "background-color": "#f2f2f2" },
                              attrs: {
                                md: "12",
                                align: "center",
                                justify: "center"
                              }
                            },
                            [_c("strong", [_vm._v("Learner's Information")])]
                          ),
                          _vm._v(" "),
                          _c("v-col", { attrs: { md: "4" } }, [
                            _c("span", [_vm._v("LAST NAME: ")]),
                            _c("strong", [
                              _vm._v(_vm._s(_vm.pr.profile.lastname))
                            ])
                          ]),
                          _vm._v(" "),
                          _c("v-col", { attrs: { md: "4" } }, [
                            _c("span", [_vm._v("FIRST NAME: ")]),
                            _c("strong", [
                              _vm._v(_vm._s(_vm.pr.profile.firstname))
                            ])
                          ]),
                          _vm._v(" "),
                          _c("v-col", { attrs: { md: "4" } }, [
                            _c("span", [_vm._v("MIDDLE NAME: ")]),
                            _c("strong", [
                              _vm._v(_vm._s(_vm.pr.profile.middlename))
                            ])
                          ]),
                          _vm._v(" "),
                          _c("v-col", { attrs: { md: "3" } }, [
                            _c("span", [_vm._v("LRN: ")]),
                            _c("strong", [_vm._v(_vm._s(_vm.pr.profile.lrn))])
                          ]),
                          _vm._v(" "),
                          _c("v-col", { attrs: { md: "3" } }, [
                            _c("span", [_vm._v("Date of Birth: ")]),
                            _c("strong", [_vm._v(_vm._s(_vm.pr.profile.dob))])
                          ]),
                          _vm._v(" "),
                          _c("v-col", { attrs: { md: "3" } }, [
                            _c("span", [_vm._v("Sex: ")]),
                            _c("strong", [
                              _vm._v(_vm._s(_vm.pr.profile.gender))
                            ])
                          ]),
                          _vm._v(" "),
                          _c("v-col", { attrs: { md: "3" } }, [
                            _c("span", [_vm._v("Date of Admission: ")]),
                            _c("strong")
                          ])
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-row",
                        [
                          _c(
                            "v-col",
                            {
                              staticStyle: { "background-color": "#f2f2f2" },
                              attrs: {
                                md: "12",
                                align: "center",
                                justify: "center"
                              }
                            },
                            [_c("strong", [_vm._v("Scholastic Record")])]
                          ),
                          _vm._v(" "),
                          _vm.level != "Senior High"
                            ? _c(
                                "div",
                                _vm._l(
                                  _vm.ReportsStore.state.permaRecord
                                    .scholasticRec,
                                  function(s) {
                                    return _c(
                                      "v-row",
                                      { key: s.grade_id },
                                      [
                                        _c("v-col", { attrs: { md: "3" } }, [
                                          _c("span", [_vm._v("SCHOOL: ")]),
                                          _c("strong", [
                                            _vm._v("CARMEL ACADEMY")
                                          ])
                                        ]),
                                        _vm._v(" "),
                                        _c("v-col", { attrs: { md: "3" } }, [
                                          _c("span", [_vm._v("SCHOOL ID: ")]),
                                          _c("strong", [_vm._v("407537")])
                                        ]),
                                        _vm._v(" "),
                                        _c("v-col", { attrs: { md: "2" } }, [
                                          _c("span", [_vm._v("GRADE LEVEL: ")]),
                                          _c("strong", [
                                            _vm._v(_vm._s(s.grade))
                                          ])
                                        ]),
                                        _vm._v(" "),
                                        _c("v-col", { attrs: { md: "2" } }, [
                                          _c("span", [_vm._v("SY: ")]),
                                          _c("strong", [_vm._v(_vm._s(s.sy))])
                                        ]),
                                        _vm._v(" "),
                                        _c("v-col", { attrs: { md: "2" } }, [
                                          _c("span", [_vm._v("SECTION: ")]),
                                          _c("strong", [
                                            _vm._v(_vm._s(s.section) + " ")
                                          ])
                                        ]),
                                        _vm._v(" "),
                                        _c("v-col", { attrs: { md: "12" } }, [
                                          _c("table", [
                                            _c("thead", [
                                              _c("tr", [
                                                _c("th", [_vm._v("Subjects")]),
                                                _vm._v(" "),
                                                _c("th", [_vm._v("1st")]),
                                                _vm._v(" "),
                                                _c("th", [_vm._v("2nd")]),
                                                _vm._v(" "),
                                                _c("th", [_vm._v("3rd")]),
                                                _vm._v(" "),
                                                _c("th", [_vm._v("4th")]),
                                                _vm._v(" "),
                                                _c("th", [_vm._v("Final")]),
                                                _vm._v(" "),
                                                _c("th", [
                                                  _vm._v("Action Taken")
                                                ])
                                              ])
                                            ]),
                                            _vm._v(" "),
                                            _c(
                                              "tbody",
                                              _vm._l(s.subjects, function(
                                                subj
                                              ) {
                                                return _c(
                                                  "tr",
                                                  { key: subj.id },
                                                  [
                                                    _c("td", [
                                                      _vm._v(
                                                        _vm._s(
                                                          subj.subject_name
                                                        )
                                                      )
                                                    ]),
                                                    _vm._v(" "),
                                                    _c("td", [
                                                      _vm._v(_vm._s(subj.first))
                                                    ]),
                                                    _vm._v(" "),
                                                    _c("td", [
                                                      _vm._v(
                                                        _vm._s(subj.second)
                                                      )
                                                    ]),
                                                    _vm._v(" "),
                                                    _c("td", [
                                                      _vm._v(_vm._s(subj.third))
                                                    ]),
                                                    _vm._v(" "),
                                                    _c("td", [
                                                      _vm._v(
                                                        _vm._s(subj.fourth)
                                                      )
                                                    ]),
                                                    _vm._v(" "),
                                                    _c("td", [
                                                      _vm._v(_vm._s(subj.final))
                                                    ]),
                                                    _vm._v(" "),
                                                    _c("td", [
                                                      _vm._v(
                                                        _vm._s(subj.remarks)
                                                      )
                                                    ])
                                                  ]
                                                )
                                              }),
                                              0
                                            )
                                          ])
                                        ]),
                                        _vm._v(" "),
                                        _c("v-col", { attrs: { md: "12" } }, [
                                          _c("span", [
                                            _vm._v(
                                              "REMARKS: _________________________________________________________"
                                            )
                                          ])
                                        ]),
                                        _vm._v(" "),
                                        _c("v-col", { attrs: { md: "4" } }, [
                                          _c("span", [_vm._v("Prepared By:")])
                                        ]),
                                        _vm._v(" "),
                                        _c("v-col", { attrs: { md: "4" } }, [
                                          _c("span", [
                                            _vm._v(
                                              "Certified True and Correct:"
                                            )
                                          ])
                                        ]),
                                        _vm._v(" "),
                                        _c("v-col", { attrs: { md: "4" } }, [
                                          _c("span", [
                                            _vm._v("Date Checked (MM/DD/YYYY)")
                                          ])
                                        ]),
                                        _vm._v(" "),
                                        _c(
                                          "v-col",
                                          {
                                            attrs: {
                                              md: "4",
                                              align: "center",
                                              justify: "center"
                                            }
                                          },
                                          [
                                            _c(
                                              "strong",
                                              {
                                                staticStyle: {
                                                  "border-bottom":
                                                    "1px solid #ccc"
                                                }
                                              },
                                              [
                                                _vm._v(
                                                  "\n                                    " +
                                                    _vm._s(
                                                      s.adviser_firstname
                                                    ) +
                                                    " " +
                                                    _vm._s(
                                                      s.adviser_middlename
                                                    ) +
                                                    " " +
                                                    _vm._s(s.adviser_lastname) +
                                                    "\n                                "
                                                )
                                              ]
                                            ),
                                            _vm._v(" "),
                                            _c("br"),
                                            _c("span", [
                                              _vm._v(
                                                "Signature of Adviser over Printed Name"
                                              )
                                            ])
                                          ]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "v-col",
                                          {
                                            attrs: {
                                              md: "4",
                                              align: "center",
                                              justify: "center"
                                            }
                                          },
                                          [
                                            _c(
                                              "strong",
                                              {
                                                staticStyle: {
                                                  "border-bottom":
                                                    "1px solid #ccc"
                                                }
                                              },
                                              [
                                                _vm._v(
                                                  "\n                                    EMETERIO C. JAVINEZ JR.,LPT,MAED, Principal"
                                                )
                                              ]
                                            ),
                                            _vm._v(" "),
                                            _c("br"),
                                            _c("span", [
                                              _vm._v(
                                                "Signature of Authorized Person over Printed Name, Designation"
                                              )
                                            ])
                                          ]
                                        ),
                                        _vm._v(" "),
                                        _c("v-col", { attrs: { md: "4" } }, [
                                          _c("span", [
                                            _vm._v(
                                              "___________________________"
                                            )
                                          ])
                                        ]),
                                        _vm._v(" "),
                                        _c(
                                          "v-col",
                                          {
                                            staticClass: "py-4",
                                            attrs: { md: "12" }
                                          },
                                          [_c("v-divider")],
                                          1
                                        )
                                      ],
                                      1
                                    )
                                  }
                                ),
                                1
                              )
                            : _c(
                                "div",
                                _vm._l(
                                  _vm.ReportsStore.state.permaRecord
                                    .scholasticRec,
                                  function(s) {
                                    return _c(
                                      "v-row",
                                      { key: s.grade_id },
                                      [
                                        _c(
                                          "v-col",
                                          _vm._l([1, 2], function(sem) {
                                            return _c(
                                              "v-row",
                                              { key: sem },
                                              [
                                                _c(
                                                  "v-col",
                                                  { attrs: { md: "3" } },
                                                  [
                                                    _c("span", [
                                                      _vm._v("SCHOOL: ")
                                                    ]),
                                                    _c("strong", [
                                                      _vm._v("CARMEL ACADEMY")
                                                    ])
                                                  ]
                                                ),
                                                _vm._v(" "),
                                                _c(
                                                  "v-col",
                                                  { attrs: { md: "3" } },
                                                  [
                                                    _c("span", [
                                                      _vm._v("SCHOOL ID: ")
                                                    ]),
                                                    _c("strong", [
                                                      _vm._v("407537")
                                                    ])
                                                  ]
                                                ),
                                                _vm._v(" "),
                                                _c(
                                                  "v-col",
                                                  { attrs: { md: "3" } },
                                                  [
                                                    _c("span", [
                                                      _vm._v("GRADE LEVEL: ")
                                                    ]),
                                                    _c("strong", [
                                                      _vm._v(_vm._s(s.grade))
                                                    ])
                                                  ]
                                                ),
                                                _vm._v(" "),
                                                _c(
                                                  "v-col",
                                                  { attrs: { md: "3" } },
                                                  [
                                                    _c("span", [
                                                      _vm._v("SY: ")
                                                    ]),
                                                    _c("strong", [
                                                      _vm._v(_vm._s(s.sy))
                                                    ])
                                                  ]
                                                ),
                                                _vm._v(" "),
                                                _c(
                                                  "v-col",
                                                  { attrs: { md: "4" } },
                                                  [
                                                    _c("span", [
                                                      _vm._v("SEM: ")
                                                    ]),
                                                    _c("strong", [
                                                      _vm._v(_vm._s(sem))
                                                    ])
                                                  ]
                                                ),
                                                _vm._v(" "),
                                                _c(
                                                  "v-col",
                                                  { attrs: { md: "4" } },
                                                  [
                                                    _c("span", [
                                                      _vm._v("TRACK/STRAND: ")
                                                    ]),
                                                    _c("strong", [
                                                      _vm._v(
                                                        _vm._s(s.strand_name)
                                                      )
                                                    ])
                                                  ]
                                                ),
                                                _vm._v(" "),
                                                _c(
                                                  "v-col",
                                                  { attrs: { md: "4" } },
                                                  [
                                                    _c("span", [
                                                      _vm._v("SECTION: ")
                                                    ]),
                                                    _c("strong", [
                                                      _vm._v(
                                                        _vm._s(s.section) + " "
                                                      )
                                                    ])
                                                  ]
                                                ),
                                                _vm._v(" "),
                                                _c(
                                                  "v-col",
                                                  { attrs: { md: "12" } },
                                                  [
                                                    _c("table", [
                                                      _c("thead", [
                                                        _c("tr", [
                                                          _c("th", [
                                                            _vm._v("Type")
                                                          ]),
                                                          _vm._v(" "),
                                                          _c("th", [
                                                            _vm._v("Subjects")
                                                          ]),
                                                          _vm._v(" "),
                                                          sem == 1
                                                            ? _c("th", [
                                                                _vm._v("1st")
                                                              ])
                                                            : _vm._e(),
                                                          _vm._v(" "),
                                                          sem == 1
                                                            ? _c("th", [
                                                                _vm._v("2nd")
                                                              ])
                                                            : _vm._e(),
                                                          _vm._v(" "),
                                                          sem == 2
                                                            ? _c("th", [
                                                                _vm._v("3rd")
                                                              ])
                                                            : _vm._e(),
                                                          _vm._v(" "),
                                                          sem == 2
                                                            ? _c("th", [
                                                                _vm._v("4th")
                                                              ])
                                                            : _vm._e(),
                                                          _vm._v(" "),
                                                          _c("th", [
                                                            _vm._v("Final")
                                                          ]),
                                                          _vm._v(" "),
                                                          _c("th", [
                                                            _vm._v(
                                                              "Action Taken"
                                                            )
                                                          ])
                                                        ])
                                                      ]),
                                                      _vm._v(" "),
                                                      _c(
                                                        "tbody",
                                                        _vm._l(
                                                          s.subjects[sem],
                                                          function(subj) {
                                                            return _c(
                                                              "tr",
                                                              { key: subj.id },
                                                              [
                                                                _c("td", [
                                                                  _vm._v(
                                                                    _vm._s(
                                                                      subj.subject_type
                                                                    )
                                                                  )
                                                                ]),
                                                                _vm._v(" "),
                                                                _c("td", [
                                                                  _vm._v(
                                                                    _vm._s(
                                                                      subj.subject_name
                                                                    )
                                                                  )
                                                                ]),
                                                                _vm._v(" "),
                                                                sem == 1
                                                                  ? _c("td", [
                                                                      _vm._v(
                                                                        _vm._s(
                                                                          subj.first
                                                                        )
                                                                      )
                                                                    ])
                                                                  : _vm._e(),
                                                                _vm._v(" "),
                                                                sem == 1
                                                                  ? _c("td", [
                                                                      _vm._v(
                                                                        _vm._s(
                                                                          subj.second
                                                                        )
                                                                      )
                                                                    ])
                                                                  : _vm._e(),
                                                                _vm._v(" "),
                                                                sem == 2
                                                                  ? _c("td", [
                                                                      _vm._v(
                                                                        _vm._s(
                                                                          subj.third
                                                                        )
                                                                      )
                                                                    ])
                                                                  : _vm._e(),
                                                                _vm._v(" "),
                                                                sem == 2
                                                                  ? _c("td", [
                                                                      _vm._v(
                                                                        _vm._s(
                                                                          subj.fourth
                                                                        )
                                                                      )
                                                                    ])
                                                                  : _vm._e(),
                                                                _vm._v(" "),
                                                                _c("td", [
                                                                  _vm._v(
                                                                    _vm._s(
                                                                      subj.final
                                                                    )
                                                                  )
                                                                ]),
                                                                _vm._v(" "),
                                                                _c("td", [
                                                                  _vm._v(
                                                                    _vm._s(
                                                                      subj.remarks
                                                                    )
                                                                  )
                                                                ])
                                                              ]
                                                            )
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
                                                  { attrs: { md: "12" } },
                                                  [
                                                    _c("span", [
                                                      _vm._v(
                                                        "REMARKS: _________________________________________________________"
                                                      )
                                                    ])
                                                  ]
                                                ),
                                                _vm._v(" "),
                                                _c(
                                                  "v-col",
                                                  { attrs: { md: "4" } },
                                                  [
                                                    _c("span", [
                                                      _vm._v("Prepared By:")
                                                    ])
                                                  ]
                                                ),
                                                _vm._v(" "),
                                                _c(
                                                  "v-col",
                                                  { attrs: { md: "4" } },
                                                  [
                                                    _c("span", [
                                                      _vm._v(
                                                        "Certified True and Correct:"
                                                      )
                                                    ])
                                                  ]
                                                ),
                                                _vm._v(" "),
                                                _c(
                                                  "v-col",
                                                  { attrs: { md: "4" } },
                                                  [
                                                    _c("span", [
                                                      _vm._v(
                                                        "Date Checked (MM/DD/YYYY)"
                                                      )
                                                    ])
                                                  ]
                                                ),
                                                _vm._v(" "),
                                                _c(
                                                  "v-col",
                                                  {
                                                    attrs: {
                                                      md: "4",
                                                      align: "center",
                                                      justify: "center"
                                                    }
                                                  },
                                                  [
                                                    _c(
                                                      "strong",
                                                      {
                                                        staticStyle: {
                                                          "border-bottom":
                                                            "1px solid #ccc"
                                                        }
                                                      },
                                                      [
                                                        _vm._v(
                                                          "\n                                            " +
                                                            _vm._s(
                                                              s.adviser_firstname
                                                            ) +
                                                            " " +
                                                            _vm._s(
                                                              s.adviser_middlename
                                                            ) +
                                                            " " +
                                                            _vm._s(
                                                              s.adviser_lastname
                                                            ) +
                                                            "\n                                        "
                                                        )
                                                      ]
                                                    ),
                                                    _vm._v(" "),
                                                    _c("br"),
                                                    _c("span", [
                                                      _vm._v(
                                                        "Signature of Adviser over Printed Name"
                                                      )
                                                    ])
                                                  ]
                                                ),
                                                _vm._v(" "),
                                                _c(
                                                  "v-col",
                                                  {
                                                    attrs: {
                                                      md: "4",
                                                      align: "center",
                                                      justify: "center"
                                                    }
                                                  },
                                                  [
                                                    _c(
                                                      "strong",
                                                      {
                                                        staticStyle: {
                                                          "border-bottom":
                                                            "1px solid #ccc"
                                                        }
                                                      },
                                                      [
                                                        _vm._v(
                                                          "\n                                            EMETERIO C. JAVINEZ JR.,LPT,MAED, Principal"
                                                        )
                                                      ]
                                                    ),
                                                    _vm._v(" "),
                                                    _c("br"),
                                                    _c("span", [
                                                      _vm._v(
                                                        "Signature of Authorized Person over Printed Name, Designation"
                                                      )
                                                    ])
                                                  ]
                                                ),
                                                _vm._v(" "),
                                                _c(
                                                  "v-col",
                                                  { attrs: { md: "4" } },
                                                  [
                                                    _c("span", [
                                                      _vm._v(
                                                        "___________________________"
                                                      )
                                                    ])
                                                  ]
                                                ),
                                                _vm._v(" "),
                                                _c(
                                                  "v-col",
                                                  {
                                                    staticClass: "py-4",
                                                    attrs: { md: "12" }
                                                  },
                                                  [_c("v-divider")],
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
                                  }
                                ),
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
        : _vm._e()
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/pages/Reports/PermaRecord.vue":
/*!****************************************************!*\
  !*** ./resources/js/pages/Reports/PermaRecord.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PermaRecord_vue_vue_type_template_id_ff20488e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PermaRecord.vue?vue&type=template&id=ff20488e&scoped=true& */ "./resources/js/pages/Reports/PermaRecord.vue?vue&type=template&id=ff20488e&scoped=true&");
/* harmony import */ var _PermaRecord_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PermaRecord.vue?vue&type=script&lang=js& */ "./resources/js/pages/Reports/PermaRecord.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _PermaRecord_vue_vue_type_style_index_0_id_ff20488e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PermaRecord.vue?vue&type=style&index=0&id=ff20488e&scoped=true&lang=css& */ "./resources/js/pages/Reports/PermaRecord.vue?vue&type=style&index=0&id=ff20488e&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _PermaRecord_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PermaRecord_vue_vue_type_template_id_ff20488e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _PermaRecord_vue_vue_type_template_id_ff20488e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "ff20488e",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/Reports/PermaRecord.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/Reports/PermaRecord.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/pages/Reports/PermaRecord.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PermaRecord_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./PermaRecord.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Reports/PermaRecord.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PermaRecord_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/Reports/PermaRecord.vue?vue&type=style&index=0&id=ff20488e&scoped=true&lang=css&":
/*!*************************************************************************************************************!*\
  !*** ./resources/js/pages/Reports/PermaRecord.vue?vue&type=style&index=0&id=ff20488e&scoped=true&lang=css& ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PermaRecord_vue_vue_type_style_index_0_id_ff20488e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./PermaRecord.vue?vue&type=style&index=0&id=ff20488e&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Reports/PermaRecord.vue?vue&type=style&index=0&id=ff20488e&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PermaRecord_vue_vue_type_style_index_0_id_ff20488e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PermaRecord_vue_vue_type_style_index_0_id_ff20488e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PermaRecord_vue_vue_type_style_index_0_id_ff20488e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PermaRecord_vue_vue_type_style_index_0_id_ff20488e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/pages/Reports/PermaRecord.vue?vue&type=template&id=ff20488e&scoped=true&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/pages/Reports/PermaRecord.vue?vue&type=template&id=ff20488e&scoped=true& ***!
  \***********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PermaRecord_vue_vue_type_template_id_ff20488e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./PermaRecord.vue?vue&type=template&id=ff20488e&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Reports/PermaRecord.vue?vue&type=template&id=ff20488e&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PermaRecord_vue_vue_type_template_id_ff20488e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PermaRecord_vue_vue_type_template_id_ff20488e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=35.js.map