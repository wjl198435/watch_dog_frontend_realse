(self["webpackJsonp"] = self["webpackJsonp"] || []).push([["ha-dialog-add-user"],{

/***/ "./src/components/dialog/ha-iron-focusables-helper.js":
/*!************************************************************!*\
  !*** ./src/components/dialog/ha-iron-focusables-helper.js ***!
  \************************************************************/
/*! exports provided: HaIronFocusablesHelper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HaIronFocusablesHelper", function() { return HaIronFocusablesHelper; });
/* harmony import */ var _polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/lib/legacy/polymer.dom.js */ "./node_modules/@polymer/polymer/lib/legacy/polymer.dom.js");
/* harmony import */ var _polymer_iron_overlay_behavior_iron_focusables_helper_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/iron-overlay-behavior/iron-focusables-helper.js */ "./node_modules/@polymer/iron-overlay-behavior/iron-focusables-helper.js");
/**
@license
Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/

/*
  Fixes issue with not using shadow dom properly in iron-overlay-behavior/icon-focusables-helper.js
*/


var HaIronFocusablesHelper = {
  /**
   * Returns a sorted array of tabbable nodes, including the root node.
   * It searches the tabbable nodes in the light and shadow dom of the chidren,
   * sorting the result by tabindex.
   * @param {!Node} node
   * @return {!Array<!HTMLElement>}
   */
  getTabbableNodes: function getTabbableNodes(node) {
    var result = []; // If there is at least one element with tabindex > 0, we need to sort
    // the final array by tabindex.

    var needsSortByTabIndex = this._collectTabbableNodes(node, result);

    if (needsSortByTabIndex) {
      return _polymer_iron_overlay_behavior_iron_focusables_helper_js__WEBPACK_IMPORTED_MODULE_1__["IronFocusablesHelper"]._sortByTabIndex(result);
    }

    return result;
  },

  /**
   * Searches for nodes that are tabbable and adds them to the `result` array.
   * Returns if the `result` array needs to be sorted by tabindex.
   * @param {!Node} node The starting point for the search; added to `result`
   * if tabbable.
   * @param {!Array<!HTMLElement>} result
   * @return {boolean}
   * @private
   */
  _collectTabbableNodes: function _collectTabbableNodes(node, result) {
    // If not an element or not visible, no need to explore children.
    if (node.nodeType !== Node.ELEMENT_NODE || !_polymer_iron_overlay_behavior_iron_focusables_helper_js__WEBPACK_IMPORTED_MODULE_1__["IronFocusablesHelper"]._isVisible(node)) {
      return false;
    }

    var element =
    /** @type {!HTMLElement} */
    node;

    var tabIndex = _polymer_iron_overlay_behavior_iron_focusables_helper_js__WEBPACK_IMPORTED_MODULE_1__["IronFocusablesHelper"]._normalizedTabIndex(element);

    var needsSort = tabIndex > 0;

    if (tabIndex >= 0) {
      result.push(element);
    } // In ShadowDOM v1, tab order is affected by the order of distrubution.
    // E.g. getTabbableNodes(#root) in ShadowDOM v1 should return [#A, #B];
    // in ShadowDOM v0 tab order is not affected by the distrubution order,
    // in fact getTabbableNodes(#root) returns [#B, #A].
    //  <div id="root">
    //   <!-- shadow -->
    //     <slot name="a">
    //     <slot name="b">
    //   <!-- /shadow -->
    //   <input id="A" slot="a">
    //   <input id="B" slot="b" tabindex="1">
    //  </div>
    // TODO(valdrin) support ShadowDOM v1 when upgrading to Polymer v2.0.


    var children;

    if (element.localName === "content" || element.localName === "slot") {
      children = Object(_polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_0__["dom"])(element).getDistributedNodes();
    } else {
      // /////////////////////////
      // Use shadow root if possible, will check for distributed nodes.
      // THIS IS THE CHANGED LINE
      children = Object(_polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_0__["dom"])(element.shadowRoot || element.root || element).children; // /////////////////////////
    }

    for (var i = 0; i < children.length; i++) {
      // Ensure method is always invoked to collect tabbable children.
      needsSort = this._collectTabbableNodes(children[i], result) || needsSort;
    }

    return needsSort;
  }
};

/***/ }),

/***/ "./src/components/dialog/ha-paper-dialog.ts":
/*!**************************************************!*\
  !*** ./src/components/dialog/ha-paper-dialog.ts ***!
  \**************************************************/
/*! exports provided: HaPaperDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HaPaperDialog", function() { return HaPaperDialog; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _polymer_paper_dialog_paper_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-dialog/paper-dialog */ "./node_modules/@polymer/paper-dialog/paper-dialog.js");
/* harmony import */ var _polymer_polymer_lib_legacy_class__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/lib/legacy/class */ "./node_modules/@polymer/polymer/lib/legacy/class.js");
/* harmony import */ var _ha_iron_focusables_helper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ha-iron-focusables-helper.js */ "./src/components/dialog/ha-iron-focusables-helper.js");




var paperDialogClass = customElements.get("paper-dialog");
// behavior that will override existing iron-overlay-behavior and call the fixed implementation
var haTabFixBehaviorImpl = {
    get _focusableNodes() {
        return _ha_iron_focusables_helper_js__WEBPACK_IMPORTED_MODULE_3__["HaIronFocusablesHelper"].getTabbableNodes(this);
    },
};
// paper-dialog that uses the haTabFixBehaviorImpl behvaior
// export class HaPaperDialog extends paperDialogClass {}
// @ts-ignore
var HaPaperDialog = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(HaPaperDialog, _super);
    function HaPaperDialog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return HaPaperDialog;
}(Object(_polymer_polymer_lib_legacy_class__WEBPACK_IMPORTED_MODULE_2__["mixinBehaviors"])([haTabFixBehaviorImpl], paperDialogClass)));

customElements.define("ha-paper-dialog", HaPaperDialog);


/***/ }),

/***/ "./src/panels/config/users/ha-dialog-add-user.js":
/*!*******************************************************!*\
  !*** ./src/panels/config/users/ha-dialog-add-user.js ***!
  \*******************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_mwc_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material/mwc-button */ "./node_modules/@material/mwc-button/mwc-button.js");
/* harmony import */ var _polymer_paper_spinner_paper_spinner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-spinner/paper-spinner */ "./node_modules/@polymer/paper-spinner/paper-spinner.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _components_dialog_ha_paper_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/dialog/ha-paper-dialog */ "./src/components/dialog/ha-paper-dialog.ts");
/* harmony import */ var _resources_ha_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../resources/ha-style */ "./src/resources/ha-style.ts");
/* harmony import */ var _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../mixins/localize-mixin */ "./src/mixins/localize-mixin.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      <style include=\"ha-style-dialog\">\n        .error {\n          color: red;\n        }\n        ha-paper-dialog {\n          max-width: 500px;\n        }\n        .username {\n          margin-top: -8px;\n        }\n      </style>\n      <ha-paper-dialog\n        id=\"dialog\"\n        with-backdrop\n        opened=\"{{_opened}}\"\n        on-opened-changed=\"_openedChanged\"\n      >\n        <h2>[[localize('ui.panel.config.users.add_user.caption')]]</h2>\n        <div>\n          <template is=\"dom-if\" if=\"[[_errorMsg]]\">\n            <div class=\"error\">[[_errorMsg]]</div>\n          </template>\n          <paper-input\n            class=\"name\"\n            label=\"[[localize('ui.panel.config.users.add_user.name')]]\"\n            value=\"{{_name}}\"\n            required\n            auto-validate\n            autocapitalize=\"on\"\n            error-message=\"Required\"\n            on-blur=\"_maybePopulateUsername\"\n          ></paper-input>\n          <paper-input\n            class=\"username\"\n            label=\"[[localize('ui.panel.config.users.add_user.username')]]\"\n            value=\"{{_username}}\"\n            required\n            auto-validate\n            autocapitalize=\"none\"\n            error-message=\"Required\"\n          ></paper-input>\n          <paper-input\n            label=\"[[localize('ui.panel.config.users.add_user.password')]]\"\n            type=\"password\"\n            value=\"{{_password}}\"\n            required\n            auto-validate\n            error-message=\"Required\"\n          ></paper-input>\n        </div>\n        <div class=\"buttons\">\n          <template is=\"dom-if\" if=\"[[_loading]]\">\n            <div class=\"submit-spinner\">\n              <paper-spinner active></paper-spinner>\n            </div>\n          </template>\n          <template is=\"dom-if\" if=\"[[!_loading]]\">\n            <mwc-button on-click=\"_createUser\"\n              >[[localize('ui.panel.config.users.add_user.create')]]</mwc-button\n            >\n          </template>\n        </div>\n      </ha-paper-dialog>\n    "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }








/*
 * @appliesMixin LocalizeMixin
 */

var HaDialogAddUser =
/*#__PURE__*/
function (_LocalizeMixin) {
  _inherits(HaDialogAddUser, _LocalizeMixin);

  function HaDialogAddUser() {
    _classCallCheck(this, HaDialogAddUser);

    return _possibleConstructorReturn(this, _getPrototypeOf(HaDialogAddUser).apply(this, arguments));
  }

  _createClass(HaDialogAddUser, [{
    key: "ready",
    value: function ready() {
      var _this = this;

      _get(_getPrototypeOf(HaDialogAddUser.prototype), "ready", this).call(this);

      this.addEventListener("keypress", function (ev) {
        if (ev.keyCode === 13) {
          _this._createUser(ev);
        }
      });
    }
  }, {
    key: "showDialog",
    value: function showDialog(_ref) {
      var _this2 = this;

      var hass = _ref.hass,
          dialogClosedCallback = _ref.dialogClosedCallback;
      this.hass = hass;
      this._dialogClosedCallback = dialogClosedCallback;
      this._loading = false;
      this._opened = true;
      setTimeout(function () {
        return _this2.shadowRoot.querySelector("paper-input").focus();
      }, 0);
    }
  }, {
    key: "_maybePopulateUsername",
    value: function _maybePopulateUsername() {
      if (this._username) return;

      var parts = this._name.split(" ");

      if (parts.length) {
        this._username = parts[0].toLowerCase();
      }
    }
  }, {
    key: "_createUser",
    value: function () {
      var _createUser2 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(ev) {
        var userId, userResponse;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                ev.preventDefault();

                if (!(!this._name || !this._username || !this._password)) {
                  _context.next = 3;
                  break;
                }

                return _context.abrupt("return");

              case 3:
                this._loading = true;
                this._errorMsg = null;
                _context.prev = 5;
                _context.next = 8;
                return this.hass.callWS({
                  type: "config/auth/create",
                  name: this._name
                });

              case 8:
                userResponse = _context.sent;
                userId = userResponse.user.id;
                _context.next = 17;
                break;

              case 12:
                _context.prev = 12;
                _context.t0 = _context["catch"](5);
                this._loading = false;
                this._errorMsg = _context.t0.code;
                return _context.abrupt("return");

              case 17:
                _context.prev = 17;
                _context.next = 20;
                return this.hass.callWS({
                  type: "config/auth_provider/homeassistant/create",
                  user_id: userId,
                  username: this._username,
                  password: this._password
                });

              case 20:
                _context.next = 29;
                break;

              case 22:
                _context.prev = 22;
                _context.t1 = _context["catch"](17);
                this._loading = false;
                this._errorMsg = _context.t1.code;
                _context.next = 28;
                return this.hass.callWS({
                  type: "config/auth/delete",
                  user_id: userId
                });

              case 28:
                return _context.abrupt("return");

              case 29:
                this._dialogDone(userId);

              case 30:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[5, 12], [17, 22]]);
      }));

      function _createUser(_x) {
        return _createUser2.apply(this, arguments);
      }

      return _createUser;
    }()
  }, {
    key: "_dialogDone",
    value: function _dialogDone(userId) {
      this._dialogClosedCallback({
        userId: userId
      });

      this.setProperties({
        _errorMsg: null,
        _username: "",
        _password: "",
        _dialogClosedCallback: null,
        _opened: false
      });
    }
  }, {
    key: "_equals",
    value: function _equals(a, b) {
      return a === b;
    }
  }, {
    key: "_openedChanged",
    value: function _openedChanged(ev) {
      // Closed dialog by clicking on the overlay
      // Check against dialogClosedCallback to make sure we didn't change
      // programmatically
      if (this._dialogClosedCallback && !ev.detail.value) {
        this._dialogDone();
      }
    }
  }], [{
    key: "template",
    get: function get() {
      return Object(_polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_2__["html"])(_templateObject());
    }
  }, {
    key: "properties",
    get: function get() {
      return {
        _hass: Object,
        _dialogClosedCallback: Function,
        _loading: {
          type: Boolean,
          value: false
        },
        // Error message when can't talk to server etc
        _errorMsg: String,
        _opened: {
          type: Boolean,
          value: false
        },
        _name: String,
        _username: String,
        _password: String
      };
    }
  }]);

  return HaDialogAddUser;
}(Object(_mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_6__["default"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_3__["PolymerElement"]));

customElements.define("ha-dialog-add-user", HaDialogAddUser);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGEtZGlhbG9nLWFkZC11c2VyLmNodW5rLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvZGlhbG9nL2hhLWlyb24tZm9jdXNhYmxlcy1oZWxwZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvZGlhbG9nL2hhLXBhcGVyLWRpYWxvZy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL2NvbmZpZy91c2Vycy9oYS1kaWFsb2ctYWRkLXVzZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG5AbGljZW5zZVxuQ29weXJpZ2h0IChjKSAyMDE2IFRoZSBQb2x5bWVyIFByb2plY3QgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cblRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdFxuaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0xJQ0VOU0UudHh0IFRoZSBjb21wbGV0ZSBzZXQgb2YgYXV0aG9ycyBtYXkgYmUgZm91bmQgYXRcbmh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9BVVRIT1JTLnR4dCBUaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmVcbmZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0IENvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzXG5wYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzbyBzdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50XG5mb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vUEFURU5UUy50eHRcbiovXG4vKlxuICBGaXhlcyBpc3N1ZSB3aXRoIG5vdCB1c2luZyBzaGFkb3cgZG9tIHByb3Blcmx5IGluIGlyb24tb3ZlcmxheS1iZWhhdmlvci9pY29uLWZvY3VzYWJsZXMtaGVscGVyLmpzXG4qL1xuaW1wb3J0IHsgZG9tIH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvbGliL2xlZ2FjeS9wb2x5bWVyLmRvbS5qc1wiO1xuXG5pbXBvcnQgeyBJcm9uRm9jdXNhYmxlc0hlbHBlciB9IGZyb20gXCJAcG9seW1lci9pcm9uLW92ZXJsYXktYmVoYXZpb3IvaXJvbi1mb2N1c2FibGVzLWhlbHBlci5qc1wiO1xuXG5leHBvcnQgY29uc3QgSGFJcm9uRm9jdXNhYmxlc0hlbHBlciA9IHtcbiAgLyoqXG4gICAqIFJldHVybnMgYSBzb3J0ZWQgYXJyYXkgb2YgdGFiYmFibGUgbm9kZXMsIGluY2x1ZGluZyB0aGUgcm9vdCBub2RlLlxuICAgKiBJdCBzZWFyY2hlcyB0aGUgdGFiYmFibGUgbm9kZXMgaW4gdGhlIGxpZ2h0IGFuZCBzaGFkb3cgZG9tIG9mIHRoZSBjaGlkcmVuLFxuICAgKiBzb3J0aW5nIHRoZSByZXN1bHQgYnkgdGFiaW5kZXguXG4gICAqIEBwYXJhbSB7IU5vZGV9IG5vZGVcbiAgICogQHJldHVybiB7IUFycmF5PCFIVE1MRWxlbWVudD59XG4gICAqL1xuICBnZXRUYWJiYWJsZU5vZGVzOiBmdW5jdGlvbihub2RlKSB7XG4gICAgdmFyIHJlc3VsdCA9IFtdO1xuICAgIC8vIElmIHRoZXJlIGlzIGF0IGxlYXN0IG9uZSBlbGVtZW50IHdpdGggdGFiaW5kZXggPiAwLCB3ZSBuZWVkIHRvIHNvcnRcbiAgICAvLyB0aGUgZmluYWwgYXJyYXkgYnkgdGFiaW5kZXguXG4gICAgdmFyIG5lZWRzU29ydEJ5VGFiSW5kZXggPSB0aGlzLl9jb2xsZWN0VGFiYmFibGVOb2Rlcyhub2RlLCByZXN1bHQpO1xuICAgIGlmIChuZWVkc1NvcnRCeVRhYkluZGV4KSB7XG4gICAgICByZXR1cm4gSXJvbkZvY3VzYWJsZXNIZWxwZXIuX3NvcnRCeVRhYkluZGV4KHJlc3VsdCk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH0sXG5cbiAgLyoqXG4gICAqIFNlYXJjaGVzIGZvciBub2RlcyB0aGF0IGFyZSB0YWJiYWJsZSBhbmQgYWRkcyB0aGVtIHRvIHRoZSBgcmVzdWx0YCBhcnJheS5cbiAgICogUmV0dXJucyBpZiB0aGUgYHJlc3VsdGAgYXJyYXkgbmVlZHMgdG8gYmUgc29ydGVkIGJ5IHRhYmluZGV4LlxuICAgKiBAcGFyYW0geyFOb2RlfSBub2RlIFRoZSBzdGFydGluZyBwb2ludCBmb3IgdGhlIHNlYXJjaDsgYWRkZWQgdG8gYHJlc3VsdGBcbiAgICogaWYgdGFiYmFibGUuXG4gICAqIEBwYXJhbSB7IUFycmF5PCFIVE1MRWxlbWVudD59IHJlc3VsdFxuICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX2NvbGxlY3RUYWJiYWJsZU5vZGVzOiBmdW5jdGlvbihub2RlLCByZXN1bHQpIHtcbiAgICAvLyBJZiBub3QgYW4gZWxlbWVudCBvciBub3QgdmlzaWJsZSwgbm8gbmVlZCB0byBleHBsb3JlIGNoaWxkcmVuLlxuICAgIGlmIChcbiAgICAgIG5vZGUubm9kZVR5cGUgIT09IE5vZGUuRUxFTUVOVF9OT0RFIHx8XG4gICAgICAhSXJvbkZvY3VzYWJsZXNIZWxwZXIuX2lzVmlzaWJsZShub2RlKVxuICAgICkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICB2YXIgZWxlbWVudCA9IC8qKiBAdHlwZSB7IUhUTUxFbGVtZW50fSAqLyAobm9kZSk7XG4gICAgdmFyIHRhYkluZGV4ID0gSXJvbkZvY3VzYWJsZXNIZWxwZXIuX25vcm1hbGl6ZWRUYWJJbmRleChlbGVtZW50KTtcbiAgICB2YXIgbmVlZHNTb3J0ID0gdGFiSW5kZXggPiAwO1xuICAgIGlmICh0YWJJbmRleCA+PSAwKSB7XG4gICAgICByZXN1bHQucHVzaChlbGVtZW50KTtcbiAgICB9XG5cbiAgICAvLyBJbiBTaGFkb3dET00gdjEsIHRhYiBvcmRlciBpcyBhZmZlY3RlZCBieSB0aGUgb3JkZXIgb2YgZGlzdHJ1YnV0aW9uLlxuICAgIC8vIEUuZy4gZ2V0VGFiYmFibGVOb2Rlcygjcm9vdCkgaW4gU2hhZG93RE9NIHYxIHNob3VsZCByZXR1cm4gWyNBLCAjQl07XG4gICAgLy8gaW4gU2hhZG93RE9NIHYwIHRhYiBvcmRlciBpcyBub3QgYWZmZWN0ZWQgYnkgdGhlIGRpc3RydWJ1dGlvbiBvcmRlcixcbiAgICAvLyBpbiBmYWN0IGdldFRhYmJhYmxlTm9kZXMoI3Jvb3QpIHJldHVybnMgWyNCLCAjQV0uXG4gICAgLy8gIDxkaXYgaWQ9XCJyb290XCI+XG4gICAgLy8gICA8IS0tIHNoYWRvdyAtLT5cbiAgICAvLyAgICAgPHNsb3QgbmFtZT1cImFcIj5cbiAgICAvLyAgICAgPHNsb3QgbmFtZT1cImJcIj5cbiAgICAvLyAgIDwhLS0gL3NoYWRvdyAtLT5cbiAgICAvLyAgIDxpbnB1dCBpZD1cIkFcIiBzbG90PVwiYVwiPlxuICAgIC8vICAgPGlucHV0IGlkPVwiQlwiIHNsb3Q9XCJiXCIgdGFiaW5kZXg9XCIxXCI+XG4gICAgLy8gIDwvZGl2PlxuICAgIC8vIFRPRE8odmFsZHJpbikgc3VwcG9ydCBTaGFkb3dET00gdjEgd2hlbiB1cGdyYWRpbmcgdG8gUG9seW1lciB2Mi4wLlxuICAgIHZhciBjaGlsZHJlbjtcbiAgICBpZiAoZWxlbWVudC5sb2NhbE5hbWUgPT09IFwiY29udGVudFwiIHx8IGVsZW1lbnQubG9jYWxOYW1lID09PSBcInNsb3RcIikge1xuICAgICAgY2hpbGRyZW4gPSBkb20oZWxlbWVudCkuZ2V0RGlzdHJpYnV0ZWROb2RlcygpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gICAgICAvLyBVc2Ugc2hhZG93IHJvb3QgaWYgcG9zc2libGUsIHdpbGwgY2hlY2sgZm9yIGRpc3RyaWJ1dGVkIG5vZGVzLlxuICAgICAgLy8gVEhJUyBJUyBUSEUgQ0hBTkdFRCBMSU5FXG4gICAgICBjaGlsZHJlbiA9IGRvbShlbGVtZW50LnNoYWRvd1Jvb3QgfHwgZWxlbWVudC5yb290IHx8IGVsZW1lbnQpLmNoaWxkcmVuO1xuICAgICAgLy8gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAgIH1cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAvLyBFbnN1cmUgbWV0aG9kIGlzIGFsd2F5cyBpbnZva2VkIHRvIGNvbGxlY3QgdGFiYmFibGUgY2hpbGRyZW4uXG4gICAgICBuZWVkc1NvcnQgPSB0aGlzLl9jb2xsZWN0VGFiYmFibGVOb2RlcyhjaGlsZHJlbltpXSwgcmVzdWx0KSB8fCBuZWVkc1NvcnQ7XG4gICAgfVxuICAgIHJldHVybiBuZWVkc1NvcnQ7XG4gIH0sXG59O1xuIiwiaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItZGlhbG9nL3BhcGVyLWRpYWxvZ1wiO1xuaW1wb3J0IHsgbWl4aW5CZWhhdmlvcnMgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9saWIvbGVnYWN5L2NsYXNzXCI7XG5pbXBvcnQgeyBIYUlyb25Gb2N1c2FibGVzSGVscGVyIH0gZnJvbSBcIi4vaGEtaXJvbi1mb2N1c2FibGVzLWhlbHBlci5qc1wiO1xuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG5pbXBvcnQgeyBQYXBlckRpYWxvZ0VsZW1lbnQgfSBmcm9tIFwiQHBvbHltZXIvcGFwZXItZGlhbG9nL3BhcGVyLWRpYWxvZ1wiO1xuXG5jb25zdCBwYXBlckRpYWxvZ0NsYXNzID0gY3VzdG9tRWxlbWVudHMuZ2V0KFwicGFwZXItZGlhbG9nXCIpO1xuXG4vLyBiZWhhdmlvciB0aGF0IHdpbGwgb3ZlcnJpZGUgZXhpc3RpbmcgaXJvbi1vdmVybGF5LWJlaGF2aW9yIGFuZCBjYWxsIHRoZSBmaXhlZCBpbXBsZW1lbnRhdGlvblxuY29uc3QgaGFUYWJGaXhCZWhhdmlvckltcGwgPSB7XG4gIGdldCBfZm9jdXNhYmxlTm9kZXMoKSB7XG4gICAgcmV0dXJuIEhhSXJvbkZvY3VzYWJsZXNIZWxwZXIuZ2V0VGFiYmFibGVOb2Rlcyh0aGlzKTtcbiAgfSxcbn07XG5cbi8vIHBhcGVyLWRpYWxvZyB0aGF0IHVzZXMgdGhlIGhhVGFiRml4QmVoYXZpb3JJbXBsIGJlaHZhaW9yXG4vLyBleHBvcnQgY2xhc3MgSGFQYXBlckRpYWxvZyBleHRlbmRzIHBhcGVyRGlhbG9nQ2xhc3Mge31cbi8vIEB0cy1pZ25vcmVcbmV4cG9ydCBjbGFzcyBIYVBhcGVyRGlhbG9nXG4gIGV4dGVuZHMgbWl4aW5CZWhhdmlvcnMoW2hhVGFiRml4QmVoYXZpb3JJbXBsXSwgcGFwZXJEaWFsb2dDbGFzcylcbiAgaW1wbGVtZW50cyBQYXBlckRpYWxvZ0VsZW1lbnQge31cblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgSFRNTEVsZW1lbnRUYWdOYW1lTWFwIHtcbiAgICBcImhhLXBhcGVyLWRpYWxvZ1wiOiBIYVBhcGVyRGlhbG9nO1xuICB9XG59XG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJoYS1wYXBlci1kaWFsb2dcIiwgSGFQYXBlckRpYWxvZyk7XG4iLCJpbXBvcnQgXCJAbWF0ZXJpYWwvbXdjLWJ1dHRvblwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItc3Bpbm5lci9wYXBlci1zcGlubmVyXCI7XG5pbXBvcnQgeyBodG1sIH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2h0bWwtdGFnXCI7XG5pbXBvcnQgeyBQb2x5bWVyRWxlbWVudCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL3BvbHltZXItZWxlbWVudFwiO1xuXG5pbXBvcnQgXCIuLi8uLi8uLi9jb21wb25lbnRzL2RpYWxvZy9oYS1wYXBlci1kaWFsb2dcIjtcbmltcG9ydCBcIi4uLy4uLy4uL3Jlc291cmNlcy9oYS1zdHlsZVwiO1xuXG5pbXBvcnQgTG9jYWxpemVNaXhpbiBmcm9tIFwiLi4vLi4vLi4vbWl4aW5zL2xvY2FsaXplLW1peGluXCI7XG5cbi8qXG4gKiBAYXBwbGllc01peGluIExvY2FsaXplTWl4aW5cbiAqL1xuY2xhc3MgSGFEaWFsb2dBZGRVc2VyIGV4dGVuZHMgTG9jYWxpemVNaXhpbihQb2x5bWVyRWxlbWVudCkge1xuICBzdGF0aWMgZ2V0IHRlbXBsYXRlKCkge1xuICAgIHJldHVybiBodG1sYFxuICAgICAgPHN0eWxlIGluY2x1ZGU9XCJoYS1zdHlsZS1kaWFsb2dcIj5cbiAgICAgICAgLmVycm9yIHtcbiAgICAgICAgICBjb2xvcjogcmVkO1xuICAgICAgICB9XG4gICAgICAgIGhhLXBhcGVyLWRpYWxvZyB7XG4gICAgICAgICAgbWF4LXdpZHRoOiA1MDBweDtcbiAgICAgICAgfVxuICAgICAgICAudXNlcm5hbWUge1xuICAgICAgICAgIG1hcmdpbi10b3A6IC04cHg7XG4gICAgICAgIH1cbiAgICAgIDwvc3R5bGU+XG4gICAgICA8aGEtcGFwZXItZGlhbG9nXG4gICAgICAgIGlkPVwiZGlhbG9nXCJcbiAgICAgICAgd2l0aC1iYWNrZHJvcFxuICAgICAgICBvcGVuZWQ9XCJ7e19vcGVuZWR9fVwiXG4gICAgICAgIG9uLW9wZW5lZC1jaGFuZ2VkPVwiX29wZW5lZENoYW5nZWRcIlxuICAgICAgPlxuICAgICAgICA8aDI+W1tsb2NhbGl6ZSgndWkucGFuZWwuY29uZmlnLnVzZXJzLmFkZF91c2VyLmNhcHRpb24nKV1dPC9oMj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8dGVtcGxhdGUgaXM9XCJkb20taWZcIiBpZj1cIltbX2Vycm9yTXNnXV1cIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJlcnJvclwiPltbX2Vycm9yTXNnXV08L2Rpdj5cbiAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgIDxwYXBlci1pbnB1dFxuICAgICAgICAgICAgY2xhc3M9XCJuYW1lXCJcbiAgICAgICAgICAgIGxhYmVsPVwiW1tsb2NhbGl6ZSgndWkucGFuZWwuY29uZmlnLnVzZXJzLmFkZF91c2VyLm5hbWUnKV1dXCJcbiAgICAgICAgICAgIHZhbHVlPVwie3tfbmFtZX19XCJcbiAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICBhdXRvLXZhbGlkYXRlXG4gICAgICAgICAgICBhdXRvY2FwaXRhbGl6ZT1cIm9uXCJcbiAgICAgICAgICAgIGVycm9yLW1lc3NhZ2U9XCJSZXF1aXJlZFwiXG4gICAgICAgICAgICBvbi1ibHVyPVwiX21heWJlUG9wdWxhdGVVc2VybmFtZVwiXG4gICAgICAgICAgPjwvcGFwZXItaW5wdXQ+XG4gICAgICAgICAgPHBhcGVyLWlucHV0XG4gICAgICAgICAgICBjbGFzcz1cInVzZXJuYW1lXCJcbiAgICAgICAgICAgIGxhYmVsPVwiW1tsb2NhbGl6ZSgndWkucGFuZWwuY29uZmlnLnVzZXJzLmFkZF91c2VyLnVzZXJuYW1lJyldXVwiXG4gICAgICAgICAgICB2YWx1ZT1cInt7X3VzZXJuYW1lfX1cIlxuICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgIGF1dG8tdmFsaWRhdGVcbiAgICAgICAgICAgIGF1dG9jYXBpdGFsaXplPVwibm9uZVwiXG4gICAgICAgICAgICBlcnJvci1tZXNzYWdlPVwiUmVxdWlyZWRcIlxuICAgICAgICAgID48L3BhcGVyLWlucHV0PlxuICAgICAgICAgIDxwYXBlci1pbnB1dFxuICAgICAgICAgICAgbGFiZWw9XCJbW2xvY2FsaXplKCd1aS5wYW5lbC5jb25maWcudXNlcnMuYWRkX3VzZXIucGFzc3dvcmQnKV1dXCJcbiAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICB2YWx1ZT1cInt7X3Bhc3N3b3JkfX1cIlxuICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgIGF1dG8tdmFsaWRhdGVcbiAgICAgICAgICAgIGVycm9yLW1lc3NhZ2U9XCJSZXF1aXJlZFwiXG4gICAgICAgICAgPjwvcGFwZXItaW5wdXQ+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiYnV0dG9uc1wiPlxuICAgICAgICAgIDx0ZW1wbGF0ZSBpcz1cImRvbS1pZlwiIGlmPVwiW1tfbG9hZGluZ11dXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3VibWl0LXNwaW5uZXJcIj5cbiAgICAgICAgICAgICAgPHBhcGVyLXNwaW5uZXIgYWN0aXZlPjwvcGFwZXItc3Bpbm5lcj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgPHRlbXBsYXRlIGlzPVwiZG9tLWlmXCIgaWY9XCJbWyFfbG9hZGluZ11dXCI+XG4gICAgICAgICAgICA8bXdjLWJ1dHRvbiBvbi1jbGljaz1cIl9jcmVhdGVVc2VyXCJcbiAgICAgICAgICAgICAgPltbbG9jYWxpemUoJ3VpLnBhbmVsLmNvbmZpZy51c2Vycy5hZGRfdXNlci5jcmVhdGUnKV1dPC9td2MtYnV0dG9uXG4gICAgICAgICAgICA+XG4gICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2hhLXBhcGVyLWRpYWxvZz5cbiAgICBgO1xuICB9XG5cbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBfaGFzczogT2JqZWN0LFxuICAgICAgX2RpYWxvZ0Nsb3NlZENhbGxiYWNrOiBGdW5jdGlvbixcblxuICAgICAgX2xvYWRpbmc6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgdmFsdWU6IGZhbHNlLFxuICAgICAgfSxcblxuICAgICAgLy8gRXJyb3IgbWVzc2FnZSB3aGVuIGNhbid0IHRhbGsgdG8gc2VydmVyIGV0Y1xuICAgICAgX2Vycm9yTXNnOiBTdHJpbmcsXG5cbiAgICAgIF9vcGVuZWQ6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgdmFsdWU6IGZhbHNlLFxuICAgICAgfSxcblxuICAgICAgX25hbWU6IFN0cmluZyxcbiAgICAgIF91c2VybmFtZTogU3RyaW5nLFxuICAgICAgX3Bhc3N3b3JkOiBTdHJpbmcsXG4gICAgfTtcbiAgfVxuXG4gIHJlYWR5KCkge1xuICAgIHN1cGVyLnJlYWR5KCk7XG4gICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKFwia2V5cHJlc3NcIiwgKGV2KSA9PiB7XG4gICAgICBpZiAoZXYua2V5Q29kZSA9PT0gMTMpIHtcbiAgICAgICAgdGhpcy5fY3JlYXRlVXNlcihldik7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBzaG93RGlhbG9nKHsgaGFzcywgZGlhbG9nQ2xvc2VkQ2FsbGJhY2sgfSkge1xuICAgIHRoaXMuaGFzcyA9IGhhc3M7XG4gICAgdGhpcy5fZGlhbG9nQ2xvc2VkQ2FsbGJhY2sgPSBkaWFsb2dDbG9zZWRDYWxsYmFjaztcbiAgICB0aGlzLl9sb2FkaW5nID0gZmFsc2U7XG4gICAgdGhpcy5fb3BlbmVkID0gdHJ1ZTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMuc2hhZG93Um9vdC5xdWVyeVNlbGVjdG9yKFwicGFwZXItaW5wdXRcIikuZm9jdXMoKSwgMCk7XG4gIH1cblxuICBfbWF5YmVQb3B1bGF0ZVVzZXJuYW1lKCkge1xuICAgIGlmICh0aGlzLl91c2VybmFtZSkgcmV0dXJuO1xuXG4gICAgY29uc3QgcGFydHMgPSB0aGlzLl9uYW1lLnNwbGl0KFwiIFwiKTtcblxuICAgIGlmIChwYXJ0cy5sZW5ndGgpIHtcbiAgICAgIHRoaXMuX3VzZXJuYW1lID0gcGFydHNbMF0udG9Mb3dlckNhc2UoKTtcbiAgICB9XG4gIH1cblxuICBhc3luYyBfY3JlYXRlVXNlcihldikge1xuICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XG4gICAgaWYgKCF0aGlzLl9uYW1lIHx8ICF0aGlzLl91c2VybmFtZSB8fCAhdGhpcy5fcGFzc3dvcmQpIHJldHVybjtcblxuICAgIHRoaXMuX2xvYWRpbmcgPSB0cnVlO1xuICAgIHRoaXMuX2Vycm9yTXNnID0gbnVsbDtcblxuICAgIGxldCB1c2VySWQ7XG5cbiAgICB0cnkge1xuICAgICAgY29uc3QgdXNlclJlc3BvbnNlID0gYXdhaXQgdGhpcy5oYXNzLmNhbGxXUyh7XG4gICAgICAgIHR5cGU6IFwiY29uZmlnL2F1dGgvY3JlYXRlXCIsXG4gICAgICAgIG5hbWU6IHRoaXMuX25hbWUsXG4gICAgICB9KTtcbiAgICAgIHVzZXJJZCA9IHVzZXJSZXNwb25zZS51c2VyLmlkO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgdGhpcy5fbG9hZGluZyA9IGZhbHNlO1xuICAgICAgdGhpcy5fZXJyb3JNc2cgPSBlcnIuY29kZTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgYXdhaXQgdGhpcy5oYXNzLmNhbGxXUyh7XG4gICAgICAgIHR5cGU6IFwiY29uZmlnL2F1dGhfcHJvdmlkZXIvaG9tZWFzc2lzdGFudC9jcmVhdGVcIixcbiAgICAgICAgdXNlcl9pZDogdXNlcklkLFxuICAgICAgICB1c2VybmFtZTogdGhpcy5fdXNlcm5hbWUsXG4gICAgICAgIHBhc3N3b3JkOiB0aGlzLl9wYXNzd29yZCxcbiAgICAgIH0pO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgdGhpcy5fbG9hZGluZyA9IGZhbHNlO1xuICAgICAgdGhpcy5fZXJyb3JNc2cgPSBlcnIuY29kZTtcbiAgICAgIGF3YWl0IHRoaXMuaGFzcy5jYWxsV1Moe1xuICAgICAgICB0eXBlOiBcImNvbmZpZy9hdXRoL2RlbGV0ZVwiLFxuICAgICAgICB1c2VyX2lkOiB1c2VySWQsXG4gICAgICB9KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLl9kaWFsb2dEb25lKHVzZXJJZCk7XG4gIH1cblxuICBfZGlhbG9nRG9uZSh1c2VySWQpIHtcbiAgICB0aGlzLl9kaWFsb2dDbG9zZWRDYWxsYmFjayh7IHVzZXJJZCB9KTtcblxuICAgIHRoaXMuc2V0UHJvcGVydGllcyh7XG4gICAgICBfZXJyb3JNc2c6IG51bGwsXG4gICAgICBfdXNlcm5hbWU6IFwiXCIsXG4gICAgICBfcGFzc3dvcmQ6IFwiXCIsXG4gICAgICBfZGlhbG9nQ2xvc2VkQ2FsbGJhY2s6IG51bGwsXG4gICAgICBfb3BlbmVkOiBmYWxzZSxcbiAgICB9KTtcbiAgfVxuXG4gIF9lcXVhbHMoYSwgYikge1xuICAgIHJldHVybiBhID09PSBiO1xuICB9XG5cbiAgX29wZW5lZENoYW5nZWQoZXYpIHtcbiAgICAvLyBDbG9zZWQgZGlhbG9nIGJ5IGNsaWNraW5nIG9uIHRoZSBvdmVybGF5XG4gICAgLy8gQ2hlY2sgYWdhaW5zdCBkaWFsb2dDbG9zZWRDYWxsYmFjayB0byBtYWtlIHN1cmUgd2UgZGlkbid0IGNoYW5nZVxuICAgIC8vIHByb2dyYW1tYXRpY2FsbHlcbiAgICBpZiAodGhpcy5fZGlhbG9nQ2xvc2VkQ2FsbGJhY2sgJiYgIWV2LmRldGFpbC52YWx1ZSkge1xuICAgICAgdGhpcy5fZGlhbG9nRG9uZSgpO1xuICAgIH1cbiAgfVxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJoYS1kaWFsb2ctYWRkLXVzZXJcIiwgSGFEaWFsb2dBZGRVc2VyKTtcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7O0FBVUE7OztBQUdBO0FBRUE7QUFFQTtBQUNBOzs7Ozs7O0FBT0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7O0FBU0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUF2RUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqQkE7QUFDQTtBQUNBO0FBSUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7O0FBRUE7QUFBQTtBQUFBOztBQU9BOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzNCQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUVBOzs7O0FBR0E7Ozs7Ozs7Ozs7Ozs7QUE2RkE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FBRUE7Ozs7OztBQUNBO0FBQ0E7QUFBQTs7Ozs7Ozs7QUFFQTtBQUNBOzs7QUFLQTtBQUNBO0FBQ0E7QUFGQTtBQUNBOztBQURBO0FBSUE7Ozs7Ozs7QUFFQTtBQUNBOzs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFDQTs7Ozs7Ozs7QUFNQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBQ0E7Ozs7O0FBTUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFPQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUF2TEE7QUFDQTtBQWlFQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFDQTtBQW5CQTtBQXFCQTs7OztBQTNGQTtBQUNBO0FBMExBOzs7O0EiLCJzb3VyY2VSb290IjoiIn0=