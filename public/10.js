(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[10],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Admin/Teachers/TeacherAdd.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Admin/Teachers/TeacherAdd.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      form: {
        firstname: '',
        middlename: '',
        lastname: '',
        gender: '',
        address: ''
      }
    };
  },
  watch: {},
  methods: {
    saveTeacher: function saveTeacher() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return axios.post("".concat(_this.AppStore.state.siteUrl, "admin/teachers/saveTeacher"), {
                  data: _this.form
                }).then(function (e) {
                  _this.AppStore.toast(e.data, 3000, 'success');

                  _this.resetForm(_this.form);

                  _this.AdminTeachersStore.getTeachers();
                })["catch"](function (e) {
                  if (e.response) {
                    _this.AppStore.toast(e.response.data, 3000, 'error');
                  }
                });

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    resetForm: function resetForm(obj) {
      var setAll = function setAll(obj, val) {
        return Object.keys(obj).forEach(function (k) {
          return obj[k] = val;
        });
      };

      setAll(obj, "");
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Admin/Teachers/TeacherAdd.vue?vue&type=template&id=cdca0238&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Admin/Teachers/TeacherAdd.vue?vue&type=template&id=cdca0238& ***!
  \***********************************************************************************************************************************************************************************************************************/
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
        { attrs: { dense: "" } },
        [
          _c(
            "v-toolbar-title",
            { staticClass: "text-overline primary--text" },
            [_vm._v("\n            Add Teacher\n        ")]
          ),
          _vm._v(" "),
          _c("v-spacer"),
          _vm._v(" "),
          _c(
            "v-btn",
            {
              attrs: { dense: "", icon: "", color: "primary" },
              on: {
                click: function($event) {
                  return _vm.saveTeacher()
                }
              }
            },
            [_c("v-icon", [_vm._v("mdi-floppy")])],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-container",
        [
          _c("v-text-field", {
            attrs: { label: "First Name", outlined: "", dense: "", filled: "" },
            model: {
              value: _vm.form.firstname,
              callback: function($$v) {
                _vm.$set(_vm.form, "firstname", $$v)
              },
              expression: "form.firstname"
            }
          }),
          _vm._v(" "),
          _c("v-text-field", {
            attrs: {
              label: "Middle Name",
              outlined: "",
              dense: "",
              filled: ""
            },
            model: {
              value: _vm.form.middlename,
              callback: function($$v) {
                _vm.$set(_vm.form, "middlename", $$v)
              },
              expression: "form.middlename"
            }
          }),
          _vm._v(" "),
          _c("v-text-field", {
            attrs: { label: "Last Name", outlined: "", dense: "", filled: "" },
            model: {
              value: _vm.form.lastname,
              callback: function($$v) {
                _vm.$set(_vm.form, "lastname", $$v)
              },
              expression: "form.lastname"
            }
          }),
          _vm._v(" "),
          _c(
            "v-radio-group",
            {
              attrs: { row: "" },
              scopedSlots: _vm._u([
                {
                  key: "label",
                  fn: function() {
                    return [_c("div", [_vm._v("Gender")])]
                  },
                  proxy: true
                }
              ]),
              model: {
                value: _vm.form.gender,
                callback: function($$v) {
                  _vm.$set(_vm.form, "gender", $$v)
                },
                expression: "form.gender"
              }
            },
            [
              _vm._v(" "),
              _c("v-radio", { attrs: { label: "Male", value: "Male" } }),
              _vm._v(" "),
              _c("v-radio", { attrs: { label: "Female", value: "Female" } })
            ],
            1
          ),
          _vm._v(" "),
          _c("v-text-field", {
            attrs: { label: "Address", outlined: "", dense: "", filled: "" },
            model: {
              value: _vm.form.address,
              callback: function($$v) {
                _vm.$set(_vm.form, "address", $$v)
              },
              expression: "form.address"
            }
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

/***/ "./resources/js/pages/Admin/Teachers/TeacherAdd.vue":
/*!**********************************************************!*\
  !*** ./resources/js/pages/Admin/Teachers/TeacherAdd.vue ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TeacherAdd_vue_vue_type_template_id_cdca0238___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TeacherAdd.vue?vue&type=template&id=cdca0238& */ "./resources/js/pages/Admin/Teachers/TeacherAdd.vue?vue&type=template&id=cdca0238&");
/* harmony import */ var _TeacherAdd_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TeacherAdd.vue?vue&type=script&lang=js& */ "./resources/js/pages/Admin/Teachers/TeacherAdd.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _TeacherAdd_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TeacherAdd_vue_vue_type_template_id_cdca0238___WEBPACK_IMPORTED_MODULE_0__["render"],
  _TeacherAdd_vue_vue_type_template_id_cdca0238___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/Admin/Teachers/TeacherAdd.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/Admin/Teachers/TeacherAdd.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/pages/Admin/Teachers/TeacherAdd.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TeacherAdd_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./TeacherAdd.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Admin/Teachers/TeacherAdd.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TeacherAdd_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/Admin/Teachers/TeacherAdd.vue?vue&type=template&id=cdca0238&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/pages/Admin/Teachers/TeacherAdd.vue?vue&type=template&id=cdca0238& ***!
  \*****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TeacherAdd_vue_vue_type_template_id_cdca0238___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./TeacherAdd.vue?vue&type=template&id=cdca0238& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Admin/Teachers/TeacherAdd.vue?vue&type=template&id=cdca0238&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TeacherAdd_vue_vue_type_template_id_cdca0238___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TeacherAdd_vue_vue_type_template_id_cdca0238___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=10.js.map