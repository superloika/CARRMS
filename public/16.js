(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[16],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Admin/Sections/List.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Admin/Sections/List.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      searchKey: "",
      tblHeaders: [{
        text: "Grade",
        value: "grade"
      }, {
        text: "Section Name",
        value: "section"
      }, {
        text: "Level",
        value: "level"
      }, // { text: "Class Adviser", value: "adviser_name" },
      {
        text: "Class Adviser",
        value: "adviser"
      }, {
        text: "Actions",
        value: "actions"
      }],
      level: ""
    };
  },
  methods: {
    deleteSection: function deleteSection(id) {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!confirm('Are you sure you want to delete the selected section?')) {
                  _context.next = 3;
                  break;
                }

                _context.next = 3;
                return axios.post("".concat(_this.AppStore.state.siteUrl, "admin/sections/deleteSection"), {
                  id: id
                }).then(function (e) {
                  _this.AppStore.toast(e.data, 3000, 'success');

                  _this.AdminSectionsStore.getSections();
                })["catch"](function (e) {
                  _this.AppStore.toast(e, 3000, 'error');
                });

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    updateAdviser: function updateAdviser(section_id, adviser_id) {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return axios.post("".concat(_this2.AppStore.state.siteUrl, "admin/sections/updateAdviser"), {
                  section_id: section_id,
                  adviser_id: adviser_id
                }).then(function (e) {
                  _this2.AppStore.toast(e.data, 3000, 'success'); // this.AdminSectionsStore.getSections();

                })["catch"](function (e) {
                  _this2.AppStore.toast(e, 3000, 'error');
                });

              case 2:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    }
  },
  computed: {
    sections: function sections() {
      var _this3 = this;

      if (this.level == '' || this.level == null) {
        return this.AdminSectionsStore.state.sections;
      } else {
        try {
          return this.AdminSectionsStore.state.sections.filter(function (e) {
            return e.level == _this3.level;
          });
        } catch (error) {
          return [];
        }
      }
    }
  },
  created: function created() {
    this.AdminSectionsStore.getSections();
    this.AdminAdvisersStore.getAdvisers();
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Admin/Sections/List.vue?vue&type=template&id=dd7cf0b4&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Admin/Sections/List.vue?vue&type=template&id=dd7cf0b4& ***!
  \*****************************************************************************************************************************************************************************************************************/
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
            [_vm._v("\n            Sections List\n        ")]
          ),
          _vm._v(" "),
          _c("v-spacer"),
          _vm._v(" "),
          _c("v-select", {
            staticClass: "ml-2",
            staticStyle: { "max-width": "300px" },
            attrs: {
              "hide-details": "",
              dense: "",
              outlined: "",
              rounded: "",
              placeholder: "Level",
              clearable: "",
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
          _c("v-text-field", {
            staticClass: "ml-2",
            staticStyle: { "max-width": "200px" },
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
          items: _vm.sections,
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
                  _c("span", [
                    _vm._v(
                      _vm._s(item.firstname) +
                        " " +
                        _vm._s(item.middlename) +
                        " " +
                        _vm._s(item.lastname)
                    )
                  ])
                ]
              }
            },
            {
              key: "item.adviser",
              fn: function(ref) {
                var item = ref.item
                return [
                  _c("v-select", {
                    attrs: {
                      dense: "",
                      clearable: "",
                      "hide-details": "",
                      outlined: "",
                      items: _vm.AdminAdvisersStore.state.advisers,
                      "item-value": "id"
                    },
                    on: {
                      input: function($event) {
                        return _vm.updateAdviser(item.id, item.adviser_id)
                      }
                    },
                    scopedSlots: _vm._u(
                      [
                        {
                          key: "selection",
                          fn: function(data) {
                            return [
                              _vm._v(
                                "\n                    " +
                                  _vm._s(data.item.firstname) +
                                  " " +
                                  _vm._s(data.item.middlename) +
                                  " " +
                                  _vm._s(data.item.lastname) +
                                  "\n                "
                              )
                            ]
                          }
                        },
                        {
                          key: "item",
                          fn: function(data) {
                            return [
                              _vm._v(
                                "\n                    " +
                                  _vm._s(data.item.firstname) +
                                  " " +
                                  _vm._s(data.item.middlename) +
                                  " " +
                                  _vm._s(data.item.lastname) +
                                  "\n                "
                              )
                            ]
                          }
                        }
                      ],
                      null,
                      true
                    ),
                    model: {
                      value: item.adviser_id,
                      callback: function($$v) {
                        _vm.$set(item, "adviser_id", $$v)
                      },
                      expression: "item.adviser_id"
                    }
                  })
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
                        title: "Edit",
                        disabled: ""
                      }
                    },
                    [_c("v-icon", [_vm._v("mdi-pencil")])],
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

/***/ "./resources/js/pages/Admin/Sections/List.vue":
/*!****************************************************!*\
  !*** ./resources/js/pages/Admin/Sections/List.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _List_vue_vue_type_template_id_dd7cf0b4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./List.vue?vue&type=template&id=dd7cf0b4& */ "./resources/js/pages/Admin/Sections/List.vue?vue&type=template&id=dd7cf0b4&");
/* harmony import */ var _List_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./List.vue?vue&type=script&lang=js& */ "./resources/js/pages/Admin/Sections/List.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _List_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _List_vue_vue_type_template_id_dd7cf0b4___WEBPACK_IMPORTED_MODULE_0__["render"],
  _List_vue_vue_type_template_id_dd7cf0b4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/Admin/Sections/List.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/Admin/Sections/List.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/pages/Admin/Sections/List.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_List_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./List.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Admin/Sections/List.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_List_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/Admin/Sections/List.vue?vue&type=template&id=dd7cf0b4&":
/*!***********************************************************************************!*\
  !*** ./resources/js/pages/Admin/Sections/List.vue?vue&type=template&id=dd7cf0b4& ***!
  \***********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_List_vue_vue_type_template_id_dd7cf0b4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./List.vue?vue&type=template&id=dd7cf0b4& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Admin/Sections/List.vue?vue&type=template&id=dd7cf0b4&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_List_vue_vue_type_template_id_dd7cf0b4___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_List_vue_vue_type_template_id_dd7cf0b4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=16.js.map