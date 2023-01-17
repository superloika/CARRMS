(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[28],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Admin/Subtags/Add.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Admin/Subtags/Add.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }



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
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      form: {
        grade: '',
        level: '',
        subject_id: '',
        strand_id: '',
        sem: ''
      },
      searchedSubject: ''
    };
  },
  methods: {
    saveSubtag: function saveSubtag() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var errmsg;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!(_this.form.level == 'Senior High' && (_this.form.strand_id == '' || _this.form.sem == ''))) {
                  _context.next = 6;
                  break;
                }

                errmsg = '';

                if (_this.form.strand_id == '') {
                  errmsg += "Strand is required\n";
                }

                if (_this.form.sem == '') {
                  errmsg += "Semester is required\n";
                }

                alert(errmsg);
                return _context.abrupt("return");

              case 6:
                _context.next = 8;
                return axios.post("".concat(_this.AppStore.state.siteUrl, "admin/subtags/saveSubtag"), {
                  data: _this.form
                }).then(function (e) {
                  _this.AppStore.toast(e.data, 2000, 'success'); // this.AppStore.resetForm(this.form);


                  // this.AppStore.resetForm(this.form);
                  _this.AdminSubtagsStore.getSubtags();
                })["catch"](function (e) {
                  if (e.response) {
                    console.log(e.response);

                    if (e.response.status == "409") {
                      _this.AppStore.toast(e.response.data, 3000, 'error');
                    } else {
                      _this.AppStore.toast("An error has occured", 3000, 'error');
                    }
                  }
                });

              case 8:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    }
  },
  computed: {},
  watch: {
    "form.grade": function formGrade() {
      var _this2 = this;

      console.log(this.form);
      this.form.level = this.AppStore.state.gradeLevels.find(function (e) {
        return e.grade == _this2.form.grade;
      }).level; // this.form.subject_id = '';

      this.form.strand_id = '';
      this.form.sem = '';
    },
    "form.subject_id": function formSubject_id() {
      if (_typeof(this.form.subject_id) != "object") {
        this.form.subject_id = '';
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Admin/Subtags/Add.vue?vue&type=template&id=58863132&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Admin/Subtags/Add.vue?vue&type=template&id=58863132& ***!
  \***************************************************************************************************************************************************************************************************************/
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
            [_vm._v("\n            Add Subject Tagging\n        ")]
          ),
          _vm._v(" "),
          _c("v-spacer"),
          _vm._v(" "),
          _c(
            "v-btn",
            {
              attrs: { dense: "", iconx: "", text: "", color: "primary" },
              on: {
                click: function($event) {
                  return _vm.saveSubtag()
                }
              }
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
                { attrs: { cols: "12", md: "4" } },
                [
                  _c("v-select", {
                    attrs: {
                      outlined: "",
                      densex: "",
                      filledx: "",
                      label: "Grade",
                      items: _vm.AppStore.state.gradeLevels,
                      "item-text": "grade",
                      "item-value": "grade"
                    },
                    model: {
                      value: _vm.form.grade,
                      callback: function($$v) {
                        _vm.$set(_vm.form, "grade", $$v)
                      },
                      expression: "form.grade"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-col",
                { attrs: { cols: "12", md: "8" } },
                [
                  _c("v-combobox", {
                    attrs: {
                      outlined: "",
                      densex: "",
                      filledx: "",
                      label: "Subject",
                      items: _vm.AdminSubjectsStore.state.subjects
                    },
                    scopedSlots: _vm._u([
                      {
                        key: "selection",
                        fn: function(ref) {
                          var item = ref.item
                          return [
                            _vm._v(
                              "\n                        " +
                                _vm._s(item.subject_name) +
                                "\n                    "
                            )
                          ]
                        }
                      },
                      {
                        key: "item",
                        fn: function(ref) {
                          var on = ref.on
                          var item = ref.item
                          return [
                            _c("v-list-item", _vm._g({}, on), [
                              _vm._v(
                                "\n                            " +
                                  _vm._s(item.subject_name) +
                                  "\n                        "
                              )
                            ])
                          ]
                        }
                      }
                    ]),
                    model: {
                      value: _vm.form.subject_id,
                      callback: function($$v) {
                        _vm.$set(_vm.form, "subject_id", $$v)
                      },
                      expression: "form.subject_id"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-col",
                { attrs: { cols: "12", md: "4" } },
                [
                  _vm.form.level == "Senior High"
                    ? _c("v-select", {
                        attrs: {
                          outlined: "",
                          densex: "",
                          filledx: "",
                          label: "Strand",
                          items: _vm.AdminStrandsStore.state.strands,
                          "item-text": "strand_name",
                          "item-value": "id"
                        },
                        model: {
                          value: _vm.form.strand_id,
                          callback: function($$v) {
                            _vm.$set(_vm.form, "strand_id", $$v)
                          },
                          expression: "form.strand_id"
                        }
                      })
                    : _vm._e()
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-col",
                { attrs: { cols: "12", md: "4" } },
                [
                  _vm.form.level == "Senior High"
                    ? _c("v-select", {
                        attrs: {
                          outlined: "",
                          densex: "",
                          filledx: "",
                          label: "Semester",
                          items: [1, 2]
                        },
                        model: {
                          value: _vm.form.sem,
                          callback: function($$v) {
                            _vm.$set(_vm.form, "sem", $$v)
                          },
                          expression: "form.sem"
                        }
                      })
                    : _vm._e()
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

/***/ "./resources/js/pages/Admin/Subtags/Add.vue":
/*!**************************************************!*\
  !*** ./resources/js/pages/Admin/Subtags/Add.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Add_vue_vue_type_template_id_58863132___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Add.vue?vue&type=template&id=58863132& */ "./resources/js/pages/Admin/Subtags/Add.vue?vue&type=template&id=58863132&");
/* harmony import */ var _Add_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Add.vue?vue&type=script&lang=js& */ "./resources/js/pages/Admin/Subtags/Add.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Add_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Add_vue_vue_type_template_id_58863132___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Add_vue_vue_type_template_id_58863132___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/Admin/Subtags/Add.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/Admin/Subtags/Add.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/pages/Admin/Subtags/Add.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Add.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Admin/Subtags/Add.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/Admin/Subtags/Add.vue?vue&type=template&id=58863132&":
/*!*********************************************************************************!*\
  !*** ./resources/js/pages/Admin/Subtags/Add.vue?vue&type=template&id=58863132& ***!
  \*********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_vue_vue_type_template_id_58863132___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Add.vue?vue&type=template&id=58863132& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Admin/Subtags/Add.vue?vue&type=template&id=58863132&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_vue_vue_type_template_id_58863132___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_vue_vue_type_template_id_58863132___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=28.js.map