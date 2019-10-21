(self["webpackJsonp"] = self["webpackJsonp"] || []).push([["panel-profile"],{

/***/ "./src/common/config/is_component_loaded.ts":
/*!**************************************************!*\
  !*** ./src/common/config/is_component_loaded.ts ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return isComponentLoaded; });
/** Return if a component is loaded. */
function isComponentLoaded(hass, component) {
    return hass && hass.config.components.indexOf(component) !== -1;
}


/***/ }),

/***/ "./src/common/datetime/format_date_time.ts":
/*!*************************************************!*\
  !*** ./src/common/datetime/format_date_time.ts ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var fecha__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fecha */ "./node_modules/fecha/src/fecha.js");

// Check for support of native locale string options
function toLocaleStringSupportsOptions() {
    try {
        new Date().toLocaleString("i");
    }
    catch (e) {
        return e.name === "RangeError";
    }
    return false;
}
/* harmony default export */ __webpack_exports__["default"] = (toLocaleStringSupportsOptions()
    ? function (dateObj, locales) {
        return dateObj.toLocaleString(locales, {
            year: "numeric",
            month: "long",
            day: "numeric",
            hour: "numeric",
            minute: "2-digit",
        });
    }
    : function (dateObj) { return fecha__WEBPACK_IMPORTED_MODULE_0__["default"].format(dateObj, "haDateTime"); });


/***/ }),

/***/ "./src/components/ha-card.ts":
/*!***********************************!*\
  !*** ./src/components/ha-card.ts ***!
  \***********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");


var HaCard = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(HaCard, _super);
    function HaCard() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(HaCard, "styles", {
        get: function () {
            return Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["css"])(templateObject_1 || (templateObject_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      :host {\n        background: var(\n          --ha-card-background,\n          var(--paper-card-background-color, white)\n        );\n        border-radius: var(--ha-card-border-radius, 2px);\n        box-shadow: var(\n          --ha-card-box-shadow,\n          0 2px 2px 0 rgba(0, 0, 0, 0.14),\n          0 1px 5px 0 rgba(0, 0, 0, 0.12),\n          0 3px 1px -2px rgba(0, 0, 0, 0.2)\n        );\n        color: var(--primary-text-color);\n        display: block;\n        transition: all 0.3s ease-out;\n        position: relative;\n      }\n\n      .card-header,\n      :host ::slotted(.card-header) {\n        color: var(--ha-card-header-color, --primary-text-color);\n        font-family: var(--ha-card-header-font-family, inherit);\n        font-size: var(--ha-card-header-font-size, 24px);\n        letter-spacing: -0.012em;\n        line-height: 32px;\n        padding: 24px 16px 16px;\n        display: block;\n      }\n\n      :host ::slotted(.card-content:not(:first-child)),\n      slot:not(:first-child)::slotted(.card-content) {\n        padding-top: 0px;\n        margin-top: -8px;\n      }\n\n      :host ::slotted(.card-content) {\n        padding: 16px;\n      }\n\n      :host ::slotted(.card-actions) {\n        border-top: 1px solid #e8e8e8;\n        padding: 5px 16px;\n      }\n    "], ["\n      :host {\n        background: var(\n          --ha-card-background,\n          var(--paper-card-background-color, white)\n        );\n        border-radius: var(--ha-card-border-radius, 2px);\n        box-shadow: var(\n          --ha-card-box-shadow,\n          0 2px 2px 0 rgba(0, 0, 0, 0.14),\n          0 1px 5px 0 rgba(0, 0, 0, 0.12),\n          0 3px 1px -2px rgba(0, 0, 0, 0.2)\n        );\n        color: var(--primary-text-color);\n        display: block;\n        transition: all 0.3s ease-out;\n        position: relative;\n      }\n\n      .card-header,\n      :host ::slotted(.card-header) {\n        color: var(--ha-card-header-color, --primary-text-color);\n        font-family: var(--ha-card-header-font-family, inherit);\n        font-size: var(--ha-card-header-font-size, 24px);\n        letter-spacing: -0.012em;\n        line-height: 32px;\n        padding: 24px 16px 16px;\n        display: block;\n      }\n\n      :host ::slotted(.card-content:not(:first-child)),\n      slot:not(:first-child)::slotted(.card-content) {\n        padding-top: 0px;\n        margin-top: -8px;\n      }\n\n      :host ::slotted(.card-content) {\n        padding: 16px;\n      }\n\n      :host ::slotted(.card-actions) {\n        border-top: 1px solid #e8e8e8;\n        padding: 5px 16px;\n      }\n    "])));
        },
        enumerable: true,
        configurable: true
    });
    HaCard.prototype.render = function () {
        return Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_4 || (templateObject_4 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      ", "\n      <slot></slot>\n    "], ["\n      ",
            "\n      <slot></slot>\n    "])), this.header
            ? Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_2 || (templateObject_2 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n            <div class=\"card-header\">", "</div>\n          "], ["\n            <div class=\"card-header\">", "</div>\n          "])), this.header) : Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_3 || (templateObject_3 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])([""], [""]))));
    };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
    ], HaCard.prototype, "header", void 0);
    return HaCard;
}(lit_element__WEBPACK_IMPORTED_MODULE_1__["LitElement"]));
customElements.define("ha-card", HaCard);
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;


/***/ }),

/***/ "./src/components/ha-paper-dropdown-menu.ts":
/*!**************************************************!*\
  !*** ./src/components/ha-paper-dropdown-menu.ts ***!
  \**************************************************/
/*! exports provided: HaPaperDropdownClass */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HaPaperDropdownClass", function() { return HaPaperDropdownClass; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _polymer_paper_dropdown_menu_paper_dropdown_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-dropdown-menu/paper-dropdown-menu */ "./node_modules/@polymer/paper-dropdown-menu/paper-dropdown-menu.js");


var paperDropdownClass = customElements.get("paper-dropdown-menu");
// patches paper drop down to properly support RTL - https://github.com/PolymerElements/paper-dropdown-menu/issues/183
var HaPaperDropdownClass = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(HaPaperDropdownClass, _super);
    function HaPaperDropdownClass() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HaPaperDropdownClass.prototype.ready = function () {
        var _this = this;
        _super.prototype.ready.call(this);
        // wait to check for direction since otherwise direction is wrong even though top level is RTL
        setTimeout(function () {
            if (window.getComputedStyle(_this).direction === "rtl") {
                _this.style.textAlign = "right";
            }
        }, 100);
    };
    return HaPaperDropdownClass;
}(paperDropdownClass));

customElements.define("ha-paper-dropdown-menu", HaPaperDropdownClass);


/***/ }),

/***/ "./src/components/ha-push-notifications-toggle.js":
/*!********************************************************!*\
  !*** ./src/components/ha-push-notifications-toggle.js ***!
  \********************************************************/
/*! exports provided: pushSupported */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pushSupported", function() { return pushSupported; });
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _data_notify_html5__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data/notify_html5 */ "./src/data/notify_html5.ts");
/* harmony import */ var _mixins_events_mixin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../mixins/events-mixin */ "./src/mixins/events-mixin.js");
/* harmony import */ var _ha_switch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ha-switch */ "./src/components/ha-switch.ts");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      <ha-switch\n        disabled=\"[[_compDisabled(disabled, loading)]]\"\n        checked=\"{{pushChecked}}\"\n        on-change=\"handlePushChange\"\n      ></ha-switch>\n    "]);

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






var pushSupported = "serviceWorker" in navigator && "PushManager" in window && (document.location.protocol === "https:" || document.location.hostname === "localhost" || document.location.hostname === "127.0.0.1");
/*
 * @appliesMixin EventsMixin
 */

var HaPushNotificationsToggle =
/*#__PURE__*/
function (_EventsMixin) {
  _inherits(HaPushNotificationsToggle, _EventsMixin);

  function HaPushNotificationsToggle() {
    _classCallCheck(this, HaPushNotificationsToggle);

    return _possibleConstructorReturn(this, _getPrototypeOf(HaPushNotificationsToggle).apply(this, arguments));
  }

  _createClass(HaPushNotificationsToggle, [{
    key: "connectedCallback",
    value: function () {
      var _connectedCallback = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee() {
        var _this = this;

        var reg;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _get(_getPrototypeOf(HaPushNotificationsToggle.prototype), "connectedCallback", this).call(this);

                if (pushSupported) {
                  _context.next = 3;
                  break;
                }

                return _context.abrupt("return");

              case 3:
                _context.prev = 3;
                _context.next = 6;
                return navigator.serviceWorker.ready;

              case 6:
                reg = _context.sent;

                if (reg.pushManager) {
                  _context.next = 9;
                  break;
                }

                return _context.abrupt("return");

              case 9:
                reg.pushManager.getSubscription().then(function (subscription) {
                  _this.loading = false;
                  _this.pushChecked = !!subscription;
                });
                _context.next = 14;
                break;

              case 12:
                _context.prev = 12;
                _context.t0 = _context["catch"](3);

              case 14:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[3, 12]]);
      }));

      function connectedCallback() {
        return _connectedCallback.apply(this, arguments);
      }

      return connectedCallback;
    }()
  }, {
    key: "handlePushChange",
    value: function handlePushChange(event) {
      // Somehow this is triggered on Safari on page load causing
      // it to get into a loop and crash the page.
      if (!pushSupported) return;

      if (event.target.checked) {
        this.subscribePushNotifications();
      } else {
        this.unsubscribePushNotifications();
      }
    }
  }, {
    key: "subscribePushNotifications",
    value: function () {
      var _subscribePushNotifications = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee2() {
        var reg, sub, browserName, name, applicationServerKey, message;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return navigator.serviceWorker.ready;

              case 2:
                reg = _context2.sent;
                _context2.prev = 3;

                if (navigator.userAgent.toLowerCase().indexOf("firefox") > -1) {
                  browserName = "firefox";
                } else {
                  browserName = "chrome";
                }

                name = prompt("What should this device be called ?");

                if (!(name == null)) {
                  _context2.next = 9;
                  break;
                }

                this.pushChecked = false;
                return _context2.abrupt("return");

              case 9:
                _context2.prev = 9;
                _context2.next = 12;
                return Object(_data_notify_html5__WEBPACK_IMPORTED_MODULE_2__["getAppKey"])(this.hass);

              case 12:
                applicationServerKey = _context2.sent;
                _context2.next = 18;
                break;

              case 15:
                _context2.prev = 15;
                _context2.t0 = _context2["catch"](9);
                applicationServerKey = null;

              case 18:
                if (!applicationServerKey) {
                  _context2.next = 24;
                  break;
                }

                _context2.next = 21;
                return reg.pushManager.subscribe({
                  userVisibleOnly: true,
                  applicationServerKey: applicationServerKey
                });

              case 21:
                sub = _context2.sent;
                _context2.next = 27;
                break;

              case 24:
                _context2.next = 26;
                return reg.pushManager.subscribe({
                  userVisibleOnly: true
                });

              case 26:
                sub = _context2.sent;

              case 27:
                _context2.next = 29;
                return this.hass.callApi("POST", "notify.html5", {
                  subscription: sub,
                  browser: browserName,
                  name: name
                });

              case 29:
                _context2.next = 40;
                break;

              case 31:
                _context2.prev = 31;
                _context2.t1 = _context2["catch"](3);
                message = _context2.t1.message || "Notification registration failed.";

                if (!sub) {
                  _context2.next = 37;
                  break;
                }

                _context2.next = 37;
                return sub.unsubscribe();

              case 37:
                // eslint-disable-next-line
                console.error(_context2.t1);
                this.fire("hass-notification", {
                  message: message
                });
                this.pushChecked = false;

              case 40:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[3, 31], [9, 15]]);
      }));

      function subscribePushNotifications() {
        return _subscribePushNotifications.apply(this, arguments);
      }

      return subscribePushNotifications;
    }()
  }, {
    key: "unsubscribePushNotifications",
    value: function () {
      var _unsubscribePushNotifications = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee3() {
        var reg, sub, message;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return navigator.serviceWorker.ready;

              case 2:
                reg = _context3.sent;
                _context3.prev = 3;
                _context3.next = 6;
                return reg.pushManager.getSubscription();

              case 6:
                sub = _context3.sent;

                if (sub) {
                  _context3.next = 9;
                  break;
                }

                return _context3.abrupt("return");

              case 9:
                _context3.next = 11;
                return this.hass.callApi("DELETE", "notify.html5", {
                  subscription: sub
                });

              case 11:
                _context3.next = 13;
                return sub.unsubscribe();

              case 13:
                _context3.next = 21;
                break;

              case 15:
                _context3.prev = 15;
                _context3.t0 = _context3["catch"](3);
                message = _context3.t0.message || "Failed unsubscribing for push notifications."; // eslint-disable-next-line

                console.error("Error in unsub push", _context3.t0);
                this.fire("hass-notification", {
                  message: message
                });
                this.pushChecked = true;

              case 21:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this, [[3, 15]]);
      }));

      function unsubscribePushNotifications() {
        return _unsubscribePushNotifications.apply(this, arguments);
      }

      return unsubscribePushNotifications;
    }()
  }, {
    key: "_compDisabled",
    value: function _compDisabled(disabled, loading) {
      return disabled || loading;
    }
  }], [{
    key: "template",
    get: function get() {
      return Object(_polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_0__["html"])(_templateObject());
    }
  }, {
    key: "properties",
    get: function get() {
      return {
        hass: {
          type: Object,
          value: null
        },
        disabled: {
          type: Boolean,
          value: false
        },
        pushChecked: {
          type: Boolean,
          value: "Notification" in window && Notification.permission === "granted"
        },
        loading: {
          type: Boolean,
          value: true
        }
      };
    }
  }]);

  return HaPushNotificationsToggle;
}(Object(_mixins_events_mixin__WEBPACK_IMPORTED_MODULE_3__["EventsMixin"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_1__["PolymerElement"]));

customElements.define("ha-push-notifications-toggle", HaPushNotificationsToggle);

/***/ }),

/***/ "./src/components/ha-switch.ts":
/*!*************************************!*\
  !*** ./src/components/ha-switch.ts ***!
  \*************************************/
/*! exports provided: HaSwitch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HaSwitch", function() { return HaSwitch; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _material_mwc_switch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material/mwc-switch */ "./node_modules/@material/mwc-switch/mwc-switch.js");
/* harmony import */ var _material_mwc_switch_mwc_switch_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material/mwc-switch/mwc-switch-css */ "./node_modules/@material/mwc-switch/mwc-switch-css.js");




// tslint:disable-next-line
var MwcSwitch = customElements.get("mwc-switch");
var HaSwitch = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(HaSwitch, _super);
    function HaSwitch() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HaSwitch.prototype.firstUpdated = function () {
        _super.prototype.firstUpdated.call(this);
        this.style.setProperty("--mdc-theme-secondary", "var(--primary-color)");
        this.classList.toggle("slotted", Boolean(this._slot.assignedNodes().length));
    };
    Object.defineProperty(HaSwitch, "styles", {
        get: function () {
            return [
                _material_mwc_switch_mwc_switch_css__WEBPACK_IMPORTED_MODULE_3__["style"],
                Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["css"])(templateObject_1 || (templateObject_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n        :host {\n          display: flex;\n          flex-direction: row;\n          align-items: center;\n        }\n        .mdc-switch:not(.mdc-switch--checked) .mdc-switch__thumb {\n          background-color: var(--paper-toggle-button-unchecked-button-color);\n          border-color: var(--paper-toggle-button-unchecked-button-color);\n        }\n        .mdc-switch:not(.mdc-switch--checked) .mdc-switch__track {\n          background-color: var(--paper-toggle-button-unchecked-bar-color);\n          border-color: var(--paper-toggle-button-unchecked-bar-color);\n        }\n        :host(.slotted) .mdc-switch {\n          margin-right: 24px;\n        }\n      "], ["\n        :host {\n          display: flex;\n          flex-direction: row;\n          align-items: center;\n        }\n        .mdc-switch:not(.mdc-switch--checked) .mdc-switch__thumb {\n          background-color: var(--paper-toggle-button-unchecked-button-color);\n          border-color: var(--paper-toggle-button-unchecked-button-color);\n        }\n        .mdc-switch:not(.mdc-switch--checked) .mdc-switch__track {\n          background-color: var(--paper-toggle-button-unchecked-bar-color);\n          border-color: var(--paper-toggle-button-unchecked-bar-color);\n        }\n        :host(.slotted) .mdc-switch {\n          margin-right: 24px;\n        }\n      "]))),
            ];
        },
        enumerable: true,
        configurable: true
    });
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["query"])("slot")
    ], HaSwitch.prototype, "_slot", void 0);
    HaSwitch = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["customElement"])("ha-switch")
    ], HaSwitch);
    return HaSwitch;
}(MwcSwitch));

var templateObject_1;


/***/ }),

/***/ "./src/data/notify_html5.ts":
/*!**********************************!*\
  !*** ./src/data/notify_html5.ts ***!
  \**********************************/
/*! exports provided: getAppKey */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAppKey", function() { return getAppKey; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

function urlBase64ToUint8Array(base64String) {
    var padding = "=".repeat((4 - (base64String.length % 4)) % 4);
    var base64 = (base64String + padding).replace(/-/g, "+").replace(/_/g, "/");
    var rawData = window.atob(base64);
    var outputArray = new Uint8Array(rawData.length);
    for (var i = 0; i < rawData.length; ++i) {
        outputArray[i] = rawData.charCodeAt(i);
    }
    return outputArray;
}
var getAppKey = function (hass) { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(void 0, void 0, void 0, function () {
    var res;
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, hass.callWS({
                    type: "notify/html5/appkey",
                })];
            case 1:
                res = _a.sent();
                return [2 /*return*/, res ? urlBase64ToUint8Array(res) : null];
        }
    });
}); };


/***/ }),

/***/ "./src/mixins/events-mixin.js":
/*!************************************!*\
  !*** ./src/mixins/events-mixin.js ***!
  \************************************/
/*! exports provided: EventsMixin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventsMixin", function() { return EventsMixin; });
/* harmony import */ var _polymer_polymer_lib_utils_mixin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/lib/utils/mixin */ "./node_modules/@polymer/polymer/lib/utils/mixin.js");
/* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/dom/fire_event */ "./src/common/dom/fire_event.ts");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }


 // Polymer legacy event helpers used courtesy of the Polymer project.
//
// Copyright (c) 2017 The Polymer Authors. All rights reserved.
//
// Redistribution and use in source and binary forms, with or without
// modification, are permitted provided that the following conditions are
// met:
//
//    * Redistributions of source code must retain the above copyright
// notice, this list of conditions and the following disclaimer.
//    * Redistributions in binary form must reproduce the above
// copyright notice, this list of conditions and the following disclaimer
// in the documentation and/or other materials provided with the
// distribution.
//    * Neither the name of Google Inc. nor the names of its
// contributors may be used to endorse or promote products derived from
// this software without specific prior written permission.
//
// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
// "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
// LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
// A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
// OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
// SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
// LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
// DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
// THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
// (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
// OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.

/* @polymerMixin */

var EventsMixin = Object(_polymer_polymer_lib_utils_mixin__WEBPACK_IMPORTED_MODULE_0__["dedupingMixin"])(function (superClass) {
  return (
    /*#__PURE__*/
    function (_superClass) {
      _inherits(_class, _superClass);

      function _class() {
        _classCallCheck(this, _class);

        return _possibleConstructorReturn(this, _getPrototypeOf(_class).apply(this, arguments));
      }

      _createClass(_class, [{
        key: "fire",

        /**
        * Dispatches a custom event with an optional detail value.
        *
        * @param {string} type Name of event type.
        * @param {*=} detail Detail value containing event-specific
        *   payload.
        * @param {{ bubbles: (boolean|undefined),
                 cancelable: (boolean|undefined),
                  composed: (boolean|undefined) }=}
        *  options Object specifying options.  These may include:
        *  `bubbles` (boolean, defaults to `true`),
        *  `cancelable` (boolean, defaults to false), and
        *  `node` on which to fire the event (HTMLElement, defaults to `this`).
        * @return {Event} The new event that was fired.
        */
        value: function fire(type, detail, options) {
          options = options || {};
          return Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_1__["fireEvent"])(options.node || this, type, detail, options);
        }
      }]);

      return _class;
    }(superClass)
  );
});

/***/ }),

/***/ "./src/mixins/localize-mixin.js":
/*!**************************************!*\
  !*** ./src/mixins/localize-mixin.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_lib_utils_mixin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/lib/utils/mixin */ "./node_modules/@polymer/polymer/lib/utils/mixin.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }


/**
 * Polymer Mixin to enable a localize function powered by language/resources from hass object.
 *
 * @polymerMixin
 */

/* harmony default export */ __webpack_exports__["default"] = (Object(_polymer_polymer_lib_utils_mixin__WEBPACK_IMPORTED_MODULE_0__["dedupingMixin"])(function (superClass) {
  return (
    /*#__PURE__*/
    function (_superClass) {
      _inherits(_class, _superClass);

      function _class() {
        _classCallCheck(this, _class);

        return _possibleConstructorReturn(this, _getPrototypeOf(_class).apply(this, arguments));
      }

      _createClass(_class, [{
        key: "__computeLocalize",
        value: function __computeLocalize(localize) {
          return localize;
        }
      }], [{
        key: "properties",
        get: function get() {
          return {
            hass: Object,

            /**
             * Translates a string to the current `language`. Any parameters to the
             * string should be passed in order, as follows:
             * `localize(stringKey, param1Name, param1Value, param2Name, param2Value)`
             */
            localize: {
              type: Function,
              computed: "__computeLocalize(hass.localize)"
            }
          };
        }
      }]);

      return _class;
    }(superClass)
  );
}));

/***/ }),

/***/ "./src/panels/profile/ha-advanced-mode-card.ts":
/*!*****************************************************!*\
  !*** ./src/panels/profile/ha-advanced-mode-card.ts ***!
  \*****************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _components_ha_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/ha-card */ "./src/components/ha-card.ts");
/* harmony import */ var _data_frontend__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../data/frontend */ "./src/data/frontend.ts");




var AdvancedModeCard = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(AdvancedModeCard, _super);
    function AdvancedModeCard() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AdvancedModeCard.prototype.render = function () {
        return Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_1 || (templateObject_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      <ha-card>\n        <div class=\"card-header\">\n          <div class=\"title\">Advanced mode</div>\n          <ha-switch\n            .checked=", "\n            .disabled=", "\n            @change=", "\n          ></ha-switch>\n        </div>\n        <div class=\"card-content\">\n          \u7267\u517B\u72AC hides advanced features and options by default. You can make\n          these features accessible by checking this toggle. This is a\n          user-specific setting and does not impact other users using Home\n          Assistant.\n        </div>\n      </ha-card>\n    "], ["\n      <ha-card>\n        <div class=\"card-header\">\n          <div class=\"title\">Advanced mode</div>\n          <ha-switch\n            .checked=", "\n            .disabled=", "\n            @change=", "\n          ></ha-switch>\n        </div>\n        <div class=\"card-content\">\n          \u7267\u517B\u72AC hides advanced features and options by default. You can make\n          these features accessible by checking this toggle. This is a\n          user-specific setting and does not impact other users using Home\n          Assistant.\n        </div>\n      </ha-card>\n    "])), this.coreUserData && this.coreUserData.showAdvanced, this.coreUserData === undefined, this._advancedToggled);
    };
    AdvancedModeCard.prototype._advancedToggled = function (ev) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                Object(_data_frontend__WEBPACK_IMPORTED_MODULE_3__["getOptimisticFrontendUserDataCollection"])(this.hass.connection, "core").save({
                    showAdvanced: ev.currentTarget.checked,
                });
                return [2 /*return*/];
            });
        });
    };
    Object.defineProperty(AdvancedModeCard, "styles", {
        get: function () {
            return Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["css"])(templateObject_2 || (templateObject_2 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      .card-header {\n        display: flex;\n      }\n      .title {\n        flex: 1;\n      }\n    "], ["\n      .card-header {\n        display: flex;\n      }\n      .title {\n        flex: 1;\n      }\n    "])));
        },
        enumerable: true,
        configurable: true
    });
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
    ], AdvancedModeCard.prototype, "hass", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
    ], AdvancedModeCard.prototype, "coreUserData", void 0);
    AdvancedModeCard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["customElement"])("ha-advanced-mode-card")
    ], AdvancedModeCard);
    return AdvancedModeCard;
}(lit_element__WEBPACK_IMPORTED_MODULE_1__["LitElement"]));
var templateObject_1, templateObject_2;


/***/ }),

/***/ "./src/panels/profile/ha-change-password-card.js":
/*!*******************************************************!*\
  !*** ./src/panels/profile/ha-change-password-card.js ***!
  \*******************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_mwc_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material/mwc-button */ "./node_modules/@material/mwc-button/mwc-button.js");
/* harmony import */ var _polymer_paper_dialog_paper_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-dialog/paper-dialog */ "./node_modules/@polymer/paper-dialog/paper-dialog.js");
/* harmony import */ var _polymer_paper_spinner_paper_spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-spinner/paper-spinner */ "./node_modules/@polymer/paper-spinner/paper-spinner.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _components_ha_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/ha-card */ "./src/components/ha-card.ts");
/* harmony import */ var _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../mixins/localize-mixin */ "./src/mixins/localize-mixin.js");
/* harmony import */ var _resources_ha_style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../resources/ha-style */ "./src/resources/ha-style.ts");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      <style include=\"ha-style\">\n        .error {\n          color: red;\n        }\n        .status {\n          color: var(--primary-color);\n        }\n        .error,\n        .status {\n          position: absolute;\n          top: -4px;\n        }\n        .currentPassword {\n          margin-top: -4px;\n        }\n      </style>\n      <div>\n        <ha-card\n          header=\"[[localize('ui.panel.profile.change_password.header')]]\"\n        >\n          <div class=\"card-content\">\n            <template is=\"dom-if\" if=\"[[_errorMsg]]\">\n              <div class=\"error\">[[_errorMsg]]</div>\n            </template>\n            <template is=\"dom-if\" if=\"[[_statusMsg]]\">\n              <div class=\"status\">[[_statusMsg]]</div>\n            </template>\n            <paper-input\n              class=\"currentPassword\"\n              label=\"[[localize('ui.panel.profile.change_password.current_password')]]\"\n              type=\"password\"\n              value=\"{{_currentPassword}}\"\n              required\n              auto-validate\n              error-message=\"[[localize('ui.panel.profile.change_password.error_required')]]\"\n            ></paper-input>\n            <template is=\"dom-if\" if=\"[[_currentPassword]]\">\n              <paper-input\n                label=\"[[localize('ui.panel.profile.change_password.new_password')]]\"\n                type=\"password\"\n                value=\"{{_password1}}\"\n                required\n                auto-validate\n                error-message=\"[[localize('ui.panel.profile.change_password.error_required')]]\"\n              ></paper-input>\n              <paper-input\n                label=\"[[localize('ui.panel.profile.change_password.confirm_new_password')]]\"\n                type=\"password\"\n                value=\"{{_password2}}\"\n                required\n                auto-validate\n                error-message=\"[[localize('ui.panel.profile.change_password.error_required')]]\"\n              ></paper-input>\n            </template>\n          </div>\n          <div class=\"card-actions\">\n            <template is=\"dom-if\" if=\"[[_loading]]\">\n              <div><paper-spinner active></paper-spinner></div>\n            </template>\n            <template is=\"dom-if\" if=\"[[!_loading]]\">\n              <mwc-button on-click=\"_changePassword\"\n                >[[localize('ui.panel.profile.change_password.submit')]]</mwc-button\n              >\n            </template>\n          </div>\n        </ha-card>\n      </div>\n    "]);

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

var HaChangePasswordCard =
/*#__PURE__*/
function (_LocalizeMixin) {
  _inherits(HaChangePasswordCard, _LocalizeMixin);

  function HaChangePasswordCard() {
    _classCallCheck(this, HaChangePasswordCard);

    return _possibleConstructorReturn(this, _getPrototypeOf(HaChangePasswordCard).apply(this, arguments));
  }

  _createClass(HaChangePasswordCard, [{
    key: "ready",
    value: function ready() {
      var _this = this;

      _get(_getPrototypeOf(HaChangePasswordCard.prototype), "ready", this).call(this);

      this.addEventListener("keypress", function (ev) {
        _this._statusMsg = null;

        if (ev.keyCode === 13) {
          _this._changePassword();
        }
      });
    }
  }, {
    key: "_changePassword",
    value: function () {
      var _changePassword2 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee() {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this._statusMsg = null;

                if (!(!this._currentPassword || !this._password1 || !this._password2)) {
                  _context.next = 3;
                  break;
                }

                return _context.abrupt("return");

              case 3:
                if (!(this._password1 !== this._password2)) {
                  _context.next = 6;
                  break;
                }

                this._errorMsg = "New password confirmation doesn't match";
                return _context.abrupt("return");

              case 6:
                if (!(this._currentPassword === this._password1)) {
                  _context.next = 9;
                  break;
                }

                this._errorMsg = "New password must be different than current password";
                return _context.abrupt("return");

              case 9:
                this._loading = true;
                this._errorMsg = null;
                _context.prev = 11;
                _context.next = 14;
                return this.hass.callWS({
                  type: "config/auth_provider/homeassistant/change_password",
                  current_password: this._currentPassword,
                  new_password: this._password1
                });

              case 14:
                this.setProperties({
                  _statusMsg: "Password changed successfully",
                  _currentPassword: null,
                  _password1: null,
                  _password2: null
                });
                _context.next = 20;
                break;

              case 17:
                _context.prev = 17;
                _context.t0 = _context["catch"](11);
                this._errorMsg = _context.t0.message;

              case 20:
                this._loading = false;

              case 21:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[11, 17]]);
      }));

      function _changePassword() {
        return _changePassword2.apply(this, arguments);
      }

      return _changePassword;
    }()
  }], [{
    key: "template",
    get: function get() {
      return Object(_polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_3__["html"])(_templateObject());
    }
  }, {
    key: "properties",
    get: function get() {
      return {
        hass: Object,
        _loading: {
          type: Boolean,
          value: false
        },
        // Error message when can't talk to server etc
        _statusMsg: String,
        _errorMsg: String,
        _currentPassword: String,
        _password1: String,
        _password2: String
      };
    }
  }]);

  return HaChangePasswordCard;
}(Object(_mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_6__["default"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_4__["PolymerElement"]));

customElements.define("ha-change-password-card", HaChangePasswordCard);

/***/ }),

/***/ "./src/panels/profile/ha-force-narrow-row.ts":
/*!***************************************************!*\
  !*** ./src/panels/profile/ha-force-narrow-row.ts ***!
  \***************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _ha_settings_row__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ha-settings-row */ "./src/panels/profile/ha-settings-row.js");
/* harmony import */ var _components_ha_switch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/ha-switch */ "./src/components/ha-switch.ts");
/* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common/dom/fire_event */ "./src/common/dom/fire_event.ts");





var HaForcedNarrowRow = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(HaForcedNarrowRow, _super);
    function HaForcedNarrowRow() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HaForcedNarrowRow.prototype.render = function () {
        return Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_1 || (templateObject_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      <ha-settings-row .narrow=", ">\n        <span slot=\"heading\">\n          ", "\n        </span>\n        <span slot=\"description\">\n          ", "\n        </span>\n        <ha-switch\n          .checked=", "\n          @change=", "\n        ></ha-switch>\n      </ha-settings-row>\n    "], ["\n      <ha-settings-row .narrow=", ">\n        <span slot=\"heading\">\n          ", "\n        </span>\n        <span slot=\"description\">\n          ", "\n        </span>\n        <ha-switch\n          .checked=", "\n          @change=", "\n        ></ha-switch>\n      </ha-settings-row>\n    "])), this.narrow, this.hass.localize("ui.panel.profile.force_narrow.header"), this.hass.localize("ui.panel.profile.force_narrow.description"), this.hass.dockedSidebar === "always_hidden", this._checkedChanged);
    };
    HaForcedNarrowRow.prototype._checkedChanged = function (ev) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var newValue;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                newValue = ev.target.checked;
                if (newValue === (this.hass.dockedSidebar === "always_hidden")) {
                    return [2 /*return*/];
                }
                Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_4__["fireEvent"])(this, "hass-dock-sidebar", {
                    dock: newValue ? "always_hidden" : "auto",
                });
                return [2 /*return*/];
            });
        });
    };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
    ], HaForcedNarrowRow.prototype, "hass", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
    ], HaForcedNarrowRow.prototype, "narrow", void 0);
    HaForcedNarrowRow = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["customElement"])("ha-force-narrow-row")
    ], HaForcedNarrowRow);
    return HaForcedNarrowRow;
}(lit_element__WEBPACK_IMPORTED_MODULE_1__["LitElement"]));
var templateObject_1;


/***/ }),

/***/ "./src/panels/profile/ha-long-lived-access-tokens-card.js":
/*!****************************************************************!*\
  !*** ./src/panels/profile/ha-long-lived-access-tokens-card.js ***!
  \****************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_mwc_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material/mwc-button */ "./node_modules/@material/mwc-button/mwc-button.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _mixins_events_mixin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../mixins/events-mixin */ "./src/mixins/events-mixin.js");
/* harmony import */ var _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../mixins/localize-mixin */ "./src/mixins/localize-mixin.js");
/* harmony import */ var _common_datetime_format_date_time__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../common/datetime/format_date_time */ "./src/common/datetime/format_date_time.ts");
/* harmony import */ var _components_ha_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/ha-card */ "./src/components/ha-card.ts");
/* harmony import */ var _resources_ha_style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../resources/ha-style */ "./src/resources/ha-style.ts");
/* harmony import */ var _ha_settings_row__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ha-settings-row */ "./src/panels/profile/ha-settings-row.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      <style include=\"ha-style\">\n        .card-content {\n          margin: -1em 0;\n        }\n        a {\n          color: var(--primary-color);\n        }\n        paper-icon-button {\n          color: var(--primary-text-color);\n        }\n      </style>\n      <ha-card\n        header=\"[[localize('ui.panel.profile.long_lived_access_tokens.header')]]\"\n      >\n        <div class=\"card-content\">\n          <p>\n            [[localize('ui.panel.profile.long_lived_access_tokens.description')]]\n            <a\n              href=\"https://developers.home-assistant.io/docs/en/auth_api.html#making-authenticated-requests\"\n              target=\"_blank\"\n            >\n              [[localize('ui.panel.profile.long_lived_access_tokens.learn_auth_requests')]]\n            </a>\n          </p>\n          <template is=\"dom-if\" if=\"[[!_tokens.length]]\">\n            <p>\n              [[localize('ui.panel.profile.long_lived_access_tokens.empty_state')]]\n            </p>\n          </template>\n        </div>\n        <template is=\"dom-repeat\" items=\"[[_tokens]]\">\n          <ha-settings-row two-line>\n            <span slot=\"heading\">[[item.client_name]]</span>\n            <div slot=\"description\">[[_formatCreatedAt(item.created_at)]]</div>\n            <paper-icon-button\n              icon=\"hass:delete\"\n              on-click=\"_handleDelete\"\n            ></paper-icon-button>\n          </ha-settings-row>\n        </template>\n        <div class=\"card-actions\">\n          <mwc-button on-click=\"_handleCreate\">\n            [[localize('ui.panel.profile.long_lived_access_tokens.create')]]\n          </mwc-button>\n        </div>\n      </ha-card>\n    "]);

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

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }










/*
 * @appliesMixin EventsMixin
 * @appliesMixin LocalizeMixin
 */

var HaLongLivedTokens =
/*#__PURE__*/
function (_LocalizeMixin) {
  _inherits(HaLongLivedTokens, _LocalizeMixin);

  function HaLongLivedTokens() {
    _classCallCheck(this, HaLongLivedTokens);

    return _possibleConstructorReturn(this, _getPrototypeOf(HaLongLivedTokens).apply(this, arguments));
  }

  _createClass(HaLongLivedTokens, [{
    key: "_computeTokens",
    value: function _computeTokens(refreshTokens) {
      return refreshTokens.filter(function (tkn) {
        return tkn.type === "long_lived_access_token";
      }).reverse();
    }
  }, {
    key: "_formatTitle",
    value: function _formatTitle(name) {
      return this.localize("ui.panel.profile.long_lived_access_tokens.token_title", "name", name);
    }
  }, {
    key: "_formatCreatedAt",
    value: function _formatCreatedAt(created) {
      return this.localize("ui.panel.profile.long_lived_access_tokens.created_at", "date", Object(_common_datetime_format_date_time__WEBPACK_IMPORTED_MODULE_5__["default"])(new Date(created), this.hass.language));
    }
  }, {
    key: "_handleCreate",
    value: function () {
      var _handleCreate2 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee() {
        var name, token;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                name = prompt(this.localize("ui.panel.profile.long_lived_access_tokens.prompt_name"));

                if (name) {
                  _context.next = 3;
                  break;
                }

                return _context.abrupt("return");

              case 3:
                _context.prev = 3;
                _context.next = 6;
                return this.hass.callWS({
                  type: "auth/long_lived_access_token",
                  lifespan: 3650,
                  client_name: name
                });

              case 6:
                token = _context.sent;
                prompt(this.localize("ui.panel.profile.long_lived_access_tokens.prompt_copy_token"), token);
                this.fire("hass-refresh-tokens");
                _context.next = 15;
                break;

              case 11:
                _context.prev = 11;
                _context.t0 = _context["catch"](3);
                // eslint-disable-next-line
                console.error(_context.t0);
                alert(this.localize("ui.panel.profile.long_lived_access_tokens.create_failed"));

              case 15:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[3, 11]]);
      }));

      function _handleCreate() {
        return _handleCreate2.apply(this, arguments);
      }

      return _handleCreate;
    }()
  }, {
    key: "_handleDelete",
    value: function () {
      var _handleDelete2 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee2(ev) {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (confirm(this.localize("ui.panel.profile.long_lived_access_tokens.confirm_delete", "name", ev.model.item.client_name))) {
                  _context2.next = 2;
                  break;
                }

                return _context2.abrupt("return");

              case 2:
                _context2.prev = 2;
                _context2.next = 5;
                return this.hass.callWS({
                  type: "auth/delete_refresh_token",
                  refresh_token_id: ev.model.item.id
                });

              case 5:
                this.fire("hass-refresh-tokens");
                _context2.next = 12;
                break;

              case 8:
                _context2.prev = 8;
                _context2.t0 = _context2["catch"](2);
                // eslint-disable-next-line
                console.error(_context2.t0);
                alert(this.localize("ui.panel.profile.long_lived_access_tokens.delete_failed"));

              case 12:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[2, 8]]);
      }));

      function _handleDelete(_x) {
        return _handleDelete2.apply(this, arguments);
      }

      return _handleDelete;
    }()
  }], [{
    key: "template",
    get: function get() {
      return Object(_polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__["html"])(_templateObject());
    }
  }, {
    key: "properties",
    get: function get() {
      return {
        hass: Object,
        refreshTokens: Array,
        _tokens: {
          type: Array,
          computed: "_computeTokens(refreshTokens)"
        }
      };
    }
  }]);

  return HaLongLivedTokens;
}(Object(_mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_4__["default"])(Object(_mixins_events_mixin__WEBPACK_IMPORTED_MODULE_3__["EventsMixin"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__["PolymerElement"])));

customElements.define("ha-long-lived-access-tokens-card", HaLongLivedTokens);

/***/ }),

/***/ "./src/panels/profile/ha-mfa-modules-card.js":
/*!***************************************************!*\
  !*** ./src/panels/profile/ha-mfa-modules-card.js ***!
  \***************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_mwc_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material/mwc-button */ "./node_modules/@material/mwc-button/mwc-button.js");
/* harmony import */ var _polymer_paper_item_paper_item_body__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-item/paper-item-body */ "./node_modules/@polymer/paper-item/paper-item-body.js");
/* harmony import */ var _polymer_paper_item_paper_item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-item/paper-item */ "./node_modules/@polymer/paper-item/paper-item.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _components_ha_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/ha-card */ "./src/components/ha-card.ts");
/* harmony import */ var _resources_ha_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../resources/ha-style */ "./src/resources/ha-style.ts");
/* harmony import */ var _mixins_events_mixin__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../mixins/events-mixin */ "./src/mixins/events-mixin.js");
/* harmony import */ var _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../mixins/localize-mixin */ "./src/mixins/localize-mixin.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      <style include=\"iron-flex ha-style\">\n        .error {\n          color: red;\n        }\n        .status {\n          color: var(--primary-color);\n        }\n        .error,\n        .status {\n          position: absolute;\n          top: -4px;\n        }\n        mwc-button {\n          margin-right: -0.57em;\n        }\n      </style>\n      <ha-card header=\"[[localize('ui.panel.profile.mfa.header')]]\">\n        <template is=\"dom-repeat\" items=\"[[mfaModules]]\" as=\"module\">\n          <paper-item>\n            <paper-item-body two-line=\"\">\n              <div>[[module.name]]</div>\n              <div secondary=\"\">[[module.id]]</div>\n            </paper-item-body>\n            <template is=\"dom-if\" if=\"[[module.enabled]]\">\n              <mwc-button on-click=\"_disable\"\n                >[[localize('ui.panel.profile.mfa.disable')]]</mwc-button\n              >\n            </template>\n            <template is=\"dom-if\" if=\"[[!module.enabled]]\">\n              <mwc-button on-click=\"_enable\"\n                >[[localize('ui.panel.profile.mfa.enable')]]</mwc-button\n              >\n            </template>\n          </paper-item>\n        </template>\n      </ha-card>\n    "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

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










var registeredDialog = false;
/*
 * @appliesMixin EventsMixin
 * @appliesMixin LocalizeMixin
 */

var HaMfaModulesCard =
/*#__PURE__*/
function (_EventsMixin) {
  _inherits(HaMfaModulesCard, _EventsMixin);

  function HaMfaModulesCard() {
    _classCallCheck(this, HaMfaModulesCard);

    return _possibleConstructorReturn(this, _getPrototypeOf(HaMfaModulesCard).apply(this, arguments));
  }

  _createClass(HaMfaModulesCard, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      _get(_getPrototypeOf(HaMfaModulesCard.prototype), "connectedCallback", this).call(this);

      if (!registeredDialog) {
        registeredDialog = true;
        this.fire("register-dialog", {
          dialogShowEvent: "show-mfa-module-setup-flow",
          dialogTag: "ha-mfa-module-setup-flow",
          dialogImport: function dialogImport() {
            return Promise.all(/*! import() | ha-mfa-module-setup-flow */[__webpack_require__.e(5), __webpack_require__.e("vendors~dialog-config-flow~ha-mfa-module-setup-flow~more-info-dialog~panel-config-automation~panel-c~a4d29058"), __webpack_require__.e("dialog-config-flow~ha-mfa-module-setup-flow~panel-config-automation~panel-config-script"), __webpack_require__.e("ha-mfa-module-setup-flow")]).then(__webpack_require__.bind(null, /*! ./ha-mfa-module-setup-flow */ "./src/panels/profile/ha-mfa-module-setup-flow.js"));
          }
        });
      }
    }
  }, {
    key: "_enable",
    value: function _enable(ev) {
      var _this = this;

      this.fire("show-mfa-module-setup-flow", {
        hass: this.hass,
        mfaModuleId: ev.model.module.id,
        dialogClosedCallback: function dialogClosedCallback() {
          return _this._refreshCurrentUser();
        }
      });
    }
  }, {
    key: "_disable",
    value: function _disable(ev) {
      var _this2 = this;

      if (!confirm(this.localize("ui.panel.profile.mfa.confirm_disable", "name", ev.model.module.name))) {
        return;
      }

      var mfaModuleId = ev.model.module.id;
      this.hass.callWS({
        type: "auth/depose_mfa",
        mfa_module_id: mfaModuleId
      }).then(function () {
        _this2._refreshCurrentUser();
      });
    }
  }, {
    key: "_refreshCurrentUser",
    value: function _refreshCurrentUser() {
      this.fire("hass-refresh-current-user");
    }
  }], [{
    key: "template",
    get: function get() {
      return Object(_polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_3__["html"])(_templateObject());
    }
  }, {
    key: "properties",
    get: function get() {
      return {
        hass: Object,
        _loading: {
          type: Boolean,
          value: false
        },
        // Error message when can't talk to server etc
        _statusMsg: String,
        _errorMsg: String,
        mfaModules: Array
      };
    }
  }]);

  return HaMfaModulesCard;
}(Object(_mixins_events_mixin__WEBPACK_IMPORTED_MODULE_7__["EventsMixin"])(Object(_mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_8__["default"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_4__["PolymerElement"])));

customElements.define("ha-mfa-modules-card", HaMfaModulesCard);

/***/ }),

/***/ "./src/panels/profile/ha-panel-profile.ts":
/*!************************************************!*\
  !*** ./src/panels/profile/ha-panel-profile.ts ***!
  \************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _polymer_app_layout_app_header_layout_app_header_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/app-layout/app-header-layout/app-header-layout */ "./node_modules/@polymer/app-layout/app-header-layout/app-header-layout.js");
/* harmony import */ var _polymer_app_layout_app_header_app_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/app-layout/app-header/app-header */ "./node_modules/@polymer/app-layout/app-header/app-header.js");
/* harmony import */ var _polymer_paper_item_paper_item_body__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/paper-item/paper-item-body */ "./node_modules/@polymer/paper-item/paper-item-body.js");
/* harmony import */ var _polymer_paper_item_paper_item__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/paper-item/paper-item */ "./node_modules/@polymer/paper-item/paper-item.js");
/* harmony import */ var _material_mwc_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material/mwc-button */ "./node_modules/@material/mwc-button/mwc-button.js");
/* harmony import */ var _polymer_app_layout_app_toolbar_app_toolbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @polymer/app-layout/app-toolbar/app-toolbar */ "./node_modules/@polymer/app-layout/app-toolbar/app-toolbar.js");
/* harmony import */ var _components_ha_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/ha-card */ "./src/components/ha-card.ts");
/* harmony import */ var _components_ha_menu_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/ha-menu-button */ "./src/components/ha-menu-button.ts");
/* harmony import */ var _resources_ha_style__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../resources/ha-style */ "./src/resources/ha-style.ts");
/* harmony import */ var _data_frontend__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../data/frontend */ "./src/data/frontend.ts");
/* harmony import */ var _ha_change_password_card__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./ha-change-password-card */ "./src/panels/profile/ha-change-password-card.js");
/* harmony import */ var _ha_mfa_modules_card__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./ha-mfa-modules-card */ "./src/panels/profile/ha-mfa-modules-card.js");
/* harmony import */ var _ha_advanced_mode_card__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./ha-advanced-mode-card */ "./src/panels/profile/ha-advanced-mode-card.ts");
/* harmony import */ var _ha_refresh_tokens_card__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./ha-refresh-tokens-card */ "./src/panels/profile/ha-refresh-tokens-card.js");
/* harmony import */ var _ha_long_lived_access_tokens_card__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./ha-long-lived-access-tokens-card */ "./src/panels/profile/ha-long-lived-access-tokens-card.js");
/* harmony import */ var _ha_pick_language_row__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./ha-pick-language-row */ "./src/panels/profile/ha-pick-language-row.js");
/* harmony import */ var _ha_pick_theme_row__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./ha-pick-theme-row */ "./src/panels/profile/ha-pick-theme-row.js");
/* harmony import */ var _ha_push_notifications_row__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./ha-push-notifications-row */ "./src/panels/profile/ha-push-notifications-row.js");
/* harmony import */ var _ha_force_narrow_row__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./ha-force-narrow-row */ "./src/panels/profile/ha-force-narrow-row.ts");
/* harmony import */ var _ha_set_vibrate_row__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./ha-set-vibrate-row */ "./src/panels/profile/ha-set-vibrate-row.ts");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _resources_styles__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../resources/styles */ "./src/resources/styles.ts");
/* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../common/dom/fire_event */ "./src/common/dom/fire_event.ts");
























var HaPanelProfile = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(HaPanelProfile, _super);
    function HaPanelProfile() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HaPanelProfile.prototype.connectedCallback = function () {
        var _this = this;
        _super.prototype.connectedCallback.call(this);
        this._refreshRefreshTokens();
        this._unsubCoreData = Object(_data_frontend__WEBPACK_IMPORTED_MODULE_10__["getOptimisticFrontendUserDataCollection"])(this.hass.connection, "core").subscribe(function (coreUserData) {
            _this._coreUserData = coreUserData;
        });
    };
    HaPanelProfile.prototype.disconnectedCallback = function () {
        _super.prototype.disconnectedCallback.call(this);
        if (this._unsubCoreData) {
            this._unsubCoreData();
            this._unsubCoreData = undefined;
        }
    };
    HaPanelProfile.prototype.render = function () {
        return Object(lit_element__WEBPACK_IMPORTED_MODULE_21__["html"])(templateObject_5 || (templateObject_5 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      <app-header-layout has-scrolling-region>\n        <app-header slot=\"header\" fixed>\n          <app-toolbar>\n            <ha-menu-button\n              .hass=", "\n              .narrow=", "\n            ></ha-menu-button>\n            <div main-title>", "</div>\n          </app-toolbar>\n        </app-header>\n\n        <div class=\"content\">\n          <ha-card .header=", ">\n            <div class=\"card-content\">\n              ", "\n              ", "\n            </div>\n\n            <ha-pick-language-row\n              .narrow=", "\n              .hass=", "\n            ></ha-pick-language-row>\n            <ha-pick-theme-row\n              .narrow=", "\n              .hass=", "\n            ></ha-pick-theme-row>\n            ", "\n            ", "\n            <ha-push-notifications-row\n              .narrow=", "\n              .hass=", "\n            ></ha-push-notifications-row>\n\n            <div class=\"card-actions\">\n              <mwc-button class=\"warning\" @click=", ">\n                ", "\n              </mwc-button>\n            </div>\n          </ha-card>\n\n          ", "\n\n          <ha-mfa-modules-card\n            .hass=", "\n            .mfaModules=", "\n          ></ha-mfa-modules-card>\n\n          ", "\n\n          <ha-refresh-tokens-card\n            .hass=", "\n            .refreshTokens=", "\n            @hass-refresh-tokens=", "\n          ></ha-refresh-tokens-card>\n\n          <ha-long-lived-access-tokens-card\n            .hass=", "\n            .refreshTokens=", "\n            @hass-refresh-tokens=", "\n          ></ha-long-lived-access-tokens-card>\n        </div>\n      </app-header-layout>\n    "], ["\n      <app-header-layout has-scrolling-region>\n        <app-header slot=\"header\" fixed>\n          <app-toolbar>\n            <ha-menu-button\n              .hass=", "\n              .narrow=", "\n            ></ha-menu-button>\n            <div main-title>", "</div>\n          </app-toolbar>\n        </app-header>\n\n        <div class=\"content\">\n          <ha-card .header=", ">\n            <div class=\"card-content\">\n              ",
            "\n              ",
            "\n            </div>\n\n            <ha-pick-language-row\n              .narrow=", "\n              .hass=", "\n            ></ha-pick-language-row>\n            <ha-pick-theme-row\n              .narrow=", "\n              .hass=", "\n            ></ha-pick-theme-row>\n            ",
            "\n            ",
            "\n            <ha-push-notifications-row\n              .narrow=", "\n              .hass=", "\n            ></ha-push-notifications-row>\n\n            <div class=\"card-actions\">\n              <mwc-button class=\"warning\" @click=", ">\n                ", "\n              </mwc-button>\n            </div>\n          </ha-card>\n\n          ",
            "\n\n          <ha-mfa-modules-card\n            .hass=", "\n            .mfaModules=", "\n          ></ha-mfa-modules-card>\n\n          ",
            "\n\n          <ha-refresh-tokens-card\n            .hass=", "\n            .refreshTokens=", "\n            @hass-refresh-tokens=", "\n          ></ha-refresh-tokens-card>\n\n          <ha-long-lived-access-tokens-card\n            .hass=", "\n            .refreshTokens=", "\n            @hass-refresh-tokens=", "\n          ></ha-long-lived-access-tokens-card>\n        </div>\n      </app-header-layout>\n    "])), this.hass, this.narrow, this.hass.localize("panel.profile"), this.hass.user.name, this.hass.localize("ui.panel.profile.current_user", "fullName", this.hass.user.name), this.hass.user.is_owner
            ? this.hass.localize("ui.panel.profile.is_owner")
            : "", this.narrow, this.hass, this.narrow, this.hass, this.hass.dockedSidebar !== "auto" || !this.narrow
            ? Object(lit_element__WEBPACK_IMPORTED_MODULE_21__["html"])(templateObject_1 || (templateObject_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n                  <ha-force-narrow-row\n                    .narrow=", "\n                    .hass=", "\n                  ></ha-force-narrow-row>\n                "], ["\n                  <ha-force-narrow-row\n                    .narrow=", "\n                    .hass=", "\n                  ></ha-force-narrow-row>\n                "])), this.narrow, this.hass) : "", navigator.vibrate
            ? Object(lit_element__WEBPACK_IMPORTED_MODULE_21__["html"])(templateObject_2 || (templateObject_2 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n                  <ha-set-vibrate-row\n                    .narrow=", "\n                    .hass=", "\n                  ></ha-set-vibrate-row>\n                "], ["\n                  <ha-set-vibrate-row\n                    .narrow=", "\n                    .hass=", "\n                  ></ha-set-vibrate-row>\n                "])), this.narrow, this.hass) : "", this.narrow, this.hass, this._handleLogOut, this.hass.localize("ui.panel.profile.logout"), this.hass.user.credentials.some(function (cred) { return cred.auth_provider_type === "homeassistant"; })
            ? Object(lit_element__WEBPACK_IMPORTED_MODULE_21__["html"])(templateObject_3 || (templateObject_3 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n                <ha-change-password-card\n                  .hass=", "\n                ></ha-change-password-card>\n              "], ["\n                <ha-change-password-card\n                  .hass=", "\n                ></ha-change-password-card>\n              "])), this.hass) : "", this.hass, this.hass.user.mfa_modules, this.hass.user.is_admin
            ? Object(lit_element__WEBPACK_IMPORTED_MODULE_21__["html"])(templateObject_4 || (templateObject_4 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n                <ha-advanced-mode-card\n                  .hass=", "\n                  .coreUserData=", "\n                ></ha-advanced-mode-card>\n              "], ["\n                <ha-advanced-mode-card\n                  .hass=", "\n                  .coreUserData=", "\n                ></ha-advanced-mode-card>\n              "])), this.hass, this._coreUserData) : "", this.hass, this._refreshTokens, this._refreshRefreshTokens, this.hass, this._refreshTokens, this._refreshRefreshTokens);
    };
    HaPanelProfile.prototype._refreshRefreshTokens = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var _a;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.hass.callWS({
                                type: "auth/refresh_tokens",
                            })];
                    case 1:
                        _a._refreshTokens = _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    HaPanelProfile.prototype._handleLogOut = function () {
        Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_23__["fireEvent"])(this, "hass-logout");
    };
    Object.defineProperty(HaPanelProfile, "styles", {
        get: function () {
            return [
                _resources_styles__WEBPACK_IMPORTED_MODULE_22__["haStyle"],
                Object(lit_element__WEBPACK_IMPORTED_MODULE_21__["css"])(templateObject_6 || (templateObject_6 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n        :host {\n          -ms-user-select: initial;\n          -webkit-user-select: initial;\n          -moz-user-select: initial;\n        }\n\n        .content {\n          display: block;\n          max-width: 600px;\n          margin: 0 auto;\n        }\n\n        .content > * {\n          display: block;\n          margin: 24px 0;\n        }\n\n        .promo-advanced {\n          text-align: center;\n          color: var(--secondary-text-color);\n        }\n      "], ["\n        :host {\n          -ms-user-select: initial;\n          -webkit-user-select: initial;\n          -moz-user-select: initial;\n        }\n\n        .content {\n          display: block;\n          max-width: 600px;\n          margin: 0 auto;\n        }\n\n        .content > * {\n          display: block;\n          margin: 24px 0;\n        }\n\n        .promo-advanced {\n          text-align: center;\n          color: var(--secondary-text-color);\n        }\n      "]))),
            ];
        },
        enumerable: true,
        configurable: true
    });
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_21__["property"])()
    ], HaPanelProfile.prototype, "hass", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_21__["property"])()
    ], HaPanelProfile.prototype, "narrow", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_21__["property"])()
    ], HaPanelProfile.prototype, "_refreshTokens", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_21__["property"])()
    ], HaPanelProfile.prototype, "_coreUserData", void 0);
    return HaPanelProfile;
}(lit_element__WEBPACK_IMPORTED_MODULE_21__["LitElement"]));
customElements.define("ha-panel-profile", HaPanelProfile);
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6;


/***/ }),

/***/ "./src/panels/profile/ha-pick-language-row.js":
/*!****************************************************!*\
  !*** ./src/panels/profile/ha-pick-language-row.js ***!
  \****************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_paper_item_paper_item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/paper-item/paper-item */ "./node_modules/@polymer/paper-item/paper-item.js");
/* harmony import */ var _polymer_paper_listbox_paper_listbox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-listbox/paper-listbox */ "./node_modules/@polymer/paper-listbox/paper-listbox.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _components_ha_paper_dropdown_menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/ha-paper-dropdown-menu */ "./src/components/ha-paper-dropdown-menu.ts");
/* harmony import */ var _mixins_events_mixin__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../mixins/events-mixin */ "./src/mixins/events-mixin.js");
/* harmony import */ var _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../mixins/localize-mixin */ "./src/mixins/localize-mixin.js");
/* harmony import */ var _ha_settings_row__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ha-settings-row */ "./src/panels/profile/ha-settings-row.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      <style>\n        a {\n          color: var(--primary-color);\n        }\n        paper-item {\n          direction: ltr;\n        }\n        paper-item[is-rtl] {\n          direction: rtl;\n        }\n      </style>\n      <ha-settings-row narrow=\"[[narrow]]\">\n        <span slot=\"heading\"\n          >[[localize('ui.panel.profile.language.header')]]</span\n        >\n        <span slot=\"description\">\n          <a\n            href=\"https://developers.home-assistant.io/docs/en/internationalization_translation.html\"\n            target=\"_blank\"\n            >[[localize('ui.panel.profile.language.link_promo')]]</a\n          >\n        </span>\n        <ha-paper-dropdown-menu\n          label=\"[[localize('ui.panel.profile.language.dropdown_label')]]\"\n          dynamic-align=\"\"\n        >\n          <paper-listbox\n            slot=\"dropdown-content\"\n            attr-for-selected=\"language-tag\"\n            selected=\"{{languageSelection}}\"\n          >\n            <template is=\"dom-repeat\" items=\"[[languages]]\">\n              <paper-item language-tag$=\"[[item.key]]\" is-rtl$=\"[[item.isRTL]]\">\n                [[item.nativeName]]\n              </paper-item>\n            </template>\n          </paper-listbox>\n        </ha-paper-dropdown-menu>\n      </ha-settings-row>\n    "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

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
 * @appliesMixin EventsMixin
 */

var HaPickLanguageRow =
/*#__PURE__*/
function (_LocalizeMixin) {
  _inherits(HaPickLanguageRow, _LocalizeMixin);

  function HaPickLanguageRow() {
    _classCallCheck(this, HaPickLanguageRow);

    return _possibleConstructorReturn(this, _getPrototypeOf(HaPickLanguageRow).apply(this, arguments));
  }

  _createClass(HaPickLanguageRow, [{
    key: "computeLanguages",
    value: function computeLanguages(hass) {
      if (!hass || !hass.translationMetadata) {
        return [];
      }

      var translations = hass.translationMetadata.translations;
      return Object.keys(translations).map(function (key) {
        return Object.assign({
          key: key
        }, translations[key]);
      });
    }
  }, {
    key: "setLanguageSelection",
    value: function setLanguageSelection(language) {
      this.languageSelection = language;
    }
  }, {
    key: "languageSelectionChanged",
    value: function languageSelectionChanged(newVal) {
      // Only fire event if language was changed. This prevents select updates when
      // responding to hass changes.
      if (newVal !== this.hass.language) {
        this.fire("hass-language-select", {
          language: newVal
        });
      }
    }
  }, {
    key: "ready",
    value: function ready() {
      _get(_getPrototypeOf(HaPickLanguageRow.prototype), "ready", this).call(this);

      if (this.hass && this.hass.language) {
        this.setLanguageSelection(this.hass.language);
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
        hass: Object,
        narrow: Boolean,
        languageSelection: {
          type: String,
          observer: "languageSelectionChanged"
        },
        languages: {
          type: Array,
          computed: "computeLanguages(hass)"
        }
      };
    }
  }, {
    key: "observers",
    get: function get() {
      return ["setLanguageSelection(language)"];
    }
  }]);

  return HaPickLanguageRow;
}(Object(_mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_mixins_events_mixin__WEBPACK_IMPORTED_MODULE_5__["EventsMixin"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_3__["PolymerElement"])));

customElements.define("ha-pick-language-row", HaPickLanguageRow);

/***/ }),

/***/ "./src/panels/profile/ha-pick-theme-row.js":
/*!*************************************************!*\
  !*** ./src/panels/profile/ha-pick-theme-row.js ***!
  \*************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_paper_item_paper_item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/paper-item/paper-item */ "./node_modules/@polymer/paper-item/paper-item.js");
/* harmony import */ var _polymer_paper_listbox_paper_listbox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-listbox/paper-listbox */ "./node_modules/@polymer/paper-listbox/paper-listbox.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _components_ha_paper_dropdown_menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/ha-paper-dropdown-menu */ "./src/components/ha-paper-dropdown-menu.ts");
/* harmony import */ var _mixins_events_mixin__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../mixins/events-mixin */ "./src/mixins/events-mixin.js");
/* harmony import */ var _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../mixins/localize-mixin */ "./src/mixins/localize-mixin.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      <style>\n        a {\n          color: var(--primary-color);\n        }\n      </style>\n      <ha-settings-row narrow=\"[[narrow]]\">\n        <span slot=\"heading\"\n          >[[localize('ui.panel.profile.themes.header')]]</span\n        >\n        <span slot=\"description\">\n          <template is=\"dom-if\" if=\"[[!_hasThemes]]\">\n            [[localize('ui.panel.profile.themes.error_no_theme')]]\n          </template>\n          <a\n            href=\"https://www.home-assistant.io/integrations/frontend/#defining-themes\"\n            target=\"_blank\"\n            >[[localize('ui.panel.profile.themes.link_promo')]]</a\n          >\n        </span>\n        <ha-paper-dropdown-menu\n          label=\"[[localize('ui.panel.profile.themes.dropdown_label')]]\"\n          dynamic-align\n          disabled=\"[[!_hasThemes]]\"\n        >\n          <paper-listbox slot=\"dropdown-content\" selected=\"{{selectedTheme}}\">\n            <template is=\"dom-repeat\" items=\"[[themes]]\" as=\"theme\">\n              <paper-item>[[theme]]</paper-item>\n            </template>\n          </paper-listbox>\n        </ha-paper-dropdown-menu>\n      </ha-settings-row>\n    "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

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
 * @appliesMixin EventsMixin
 */

var HaPickThemeRow =
/*#__PURE__*/
function (_LocalizeMixin) {
  _inherits(HaPickThemeRow, _LocalizeMixin);

  function HaPickThemeRow() {
    _classCallCheck(this, HaPickThemeRow);

    return _possibleConstructorReturn(this, _getPrototypeOf(HaPickThemeRow).apply(this, arguments));
  }

  _createClass(HaPickThemeRow, [{
    key: "_compHasThemes",
    value: function _compHasThemes(hass) {
      return hass.themes && hass.themes.themes && Object.keys(hass.themes.themes).length;
    }
  }, {
    key: "ready",
    value: function ready() {
      _get(_getPrototypeOf(HaPickThemeRow.prototype), "ready", this).call(this);

      if (this.hass.selectedTheme && this.themes.indexOf(this.hass.selectedTheme) > 0) {
        this.selectedTheme = this.themes.indexOf(this.hass.selectedTheme);
      } else if (!this.hass.selectedTheme) {
        this.selectedTheme = 1;
      }
    }
  }, {
    key: "_computeThemes",
    value: function _computeThemes(hass) {
      if (!hass) return [];
      return [].concat(Object.keys(hass.themes.themes).sort());
    }
  }, {
    key: "selectionChanged",
    value: function selectionChanged(hass, selection) {
      if (selection > 0 && selection < this.themes.length) {
        if (hass.selectedTheme !== this.themes[selection]) {
          this.fire("settheme", this.themes[selection]);
        }
      } else if (selection === 0 && hass.selectedTheme !== "") {
        this.fire("settheme", "");
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
        hass: Object,
        narrow: Boolean,
        _hasThemes: {
          type: Boolean,
          computed: "_compHasThemes(hass)"
        },
        themes: {
          type: Array,
          computed: "_computeThemes(hass)"
        },
        selectedTheme: {
          type: Number
        }
      };
    }
  }, {
    key: "observers",
    get: function get() {
      return ["selectionChanged(hass, selectedTheme)"];
    }
  }]);

  return HaPickThemeRow;
}(Object(_mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_mixins_events_mixin__WEBPACK_IMPORTED_MODULE_5__["EventsMixin"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_3__["PolymerElement"])));

customElements.define("ha-pick-theme-row", HaPickThemeRow);

/***/ }),

/***/ "./src/panels/profile/ha-push-notifications-row.js":
/*!*********************************************************!*\
  !*** ./src/panels/profile/ha-push-notifications-row.js ***!
  \*********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_iron_flex_layout_iron_flex_layout_classes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/iron-flex-layout/iron-flex-layout-classes */ "./node_modules/@polymer/iron-flex-layout/iron-flex-layout-classes.js");
/* harmony import */ var _polymer_iron_label_iron_label__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/iron-label/iron-label */ "./node_modules/@polymer/iron-label/iron-label.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _common_config_is_component_loaded__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common/config/is_component_loaded */ "./src/common/config/is_component_loaded.ts");
/* harmony import */ var _components_ha_push_notifications_toggle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/ha-push-notifications-toggle */ "./src/components/ha-push-notifications-toggle.js");
/* harmony import */ var _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../mixins/localize-mixin */ "./src/mixins/localize-mixin.js");
/* harmony import */ var _ha_settings_row__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ha-settings-row */ "./src/panels/profile/ha-settings-row.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      <style>\n        a {\n          color: var(--primary-color);\n        }\n      </style>\n      <ha-settings-row narrow=\"[[narrow]]\">\n        <span slot=\"heading\"\n          >[[localize('ui.panel.profile.push_notifications.header')]]</span\n        >\n        <span slot=\"description\">\n          [[_description(_platformLoaded, _pushSupported)]]\n          <a\n            href=\"https://www.home-assistant.io/integrations/notify.html5/\"\n            target=\"_blank\"\n            >[[localize('ui.panel.profile.push_notifications.link_promo')]]</a\n          >\n        </span>\n        <ha-push-notifications-toggle\n          hass=\"[[hass]]\"\n          disabled=\"[[_error]]\"\n        ></ha-push-notifications-toggle>\n      </ha-settings-row>\n    "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }









/*
 * @appliesMixin LocalizeMixin
 */

var HaPushNotificationsRow =
/*#__PURE__*/
function (_LocalizeMixin) {
  _inherits(HaPushNotificationsRow, _LocalizeMixin);

  function HaPushNotificationsRow() {
    _classCallCheck(this, HaPushNotificationsRow);

    return _possibleConstructorReturn(this, _getPrototypeOf(HaPushNotificationsRow).apply(this, arguments));
  }

  _createClass(HaPushNotificationsRow, [{
    key: "_compPlatformLoaded",
    value: function _compPlatformLoaded(hass) {
      return Object(_common_config_is_component_loaded__WEBPACK_IMPORTED_MODULE_4__["default"])(hass, "notify.html5");
    }
  }, {
    key: "_compError",
    value: function _compError(platformLoaded, pushSupported_) {
      return !platformLoaded || !pushSupported_;
    }
  }, {
    key: "_description",
    value: function _description(platformLoaded, pushSupported_) {
      var key;

      if (!pushSupported_) {
        key = "error_use_https";
      } else if (!platformLoaded) {
        key = "error_load_platform";
      } else {
        key = "description";
      }

      return this.localize("ui.panel.profile.push_notifications.".concat(key));
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
        hass: Object,
        narrow: Boolean,
        _platformLoaded: {
          type: Boolean,
          computed: "_compPlatformLoaded(hass)"
        },
        _pushSupported: {
          type: Boolean,
          value: _components_ha_push_notifications_toggle__WEBPACK_IMPORTED_MODULE_5__["pushSupported"]
        },
        _error: {
          type: Boolean,
          computed: "_compError(_platformLoaded, _pushSupported)"
        }
      };
    }
  }]);

  return HaPushNotificationsRow;
}(Object(_mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_6__["default"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_3__["PolymerElement"]));

customElements.define("ha-push-notifications-row", HaPushNotificationsRow);

/***/ }),

/***/ "./src/panels/profile/ha-refresh-tokens-card.js":
/*!******************************************************!*\
  !*** ./src/panels/profile/ha-refresh-tokens-card.js ***!
  \******************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_paper_icon_button_paper_icon_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/paper-icon-button/paper-icon-button */ "./node_modules/@polymer/paper-icon-button/paper-icon-button.js");
/* harmony import */ var _polymer_paper_tooltip_paper_tooltip__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-tooltip/paper-tooltip */ "./node_modules/@polymer/paper-tooltip/paper-tooltip.js");
/* harmony import */ var _components_ha_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/ha-card */ "./src/components/ha-card.ts");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _mixins_events_mixin__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../mixins/events-mixin */ "./src/mixins/events-mixin.js");
/* harmony import */ var _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../mixins/localize-mixin */ "./src/mixins/localize-mixin.js");
/* harmony import */ var _common_datetime_format_date_time__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../common/datetime/format_date_time */ "./src/common/datetime/format_date_time.ts");
/* harmony import */ var _ha_settings_row__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ha-settings-row */ "./src/panels/profile/ha-settings-row.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      <style>\n        paper-icon-button {\n          color: var(--primary-text-color);\n        }\n        paper-icon-button[disabled] {\n          color: var(--disabled-text-color);\n        }\n      </style>\n      <ha-card header=\"[[localize('ui.panel.profile.refresh_tokens.header')]]\">\n        <div class=\"card-content\">\n          [[localize('ui.panel.profile.refresh_tokens.description')]]\n        </div>\n        <template is=\"dom-repeat\" items=\"[[_computeTokens(refreshTokens)]]\">\n          <ha-settings-row three-line>\n            <span slot=\"heading\">[[_formatTitle(item.client_id)]]</span>\n            <div slot=\"description\">[[_formatCreatedAt(item.created_at)]]</div>\n            <div slot=\"description\">[[_formatLastUsed(item)]]</div>\n            <div>\n              <template is=\"dom-if\" if=\"[[item.is_current]]\">\n                <paper-tooltip position=\"left\"\n                  >[[localize('ui.panel.profile.refresh_tokens.current_token_tooltip')]]</paper-tooltip\n                >\n              </template>\n              <paper-icon-button\n                icon=\"hass:delete\"\n                on-click=\"_handleDelete\"\n                disabled=\"[[item.is_current]]\"\n              ></paper-icon-button>\n            </div>\n          </ha-settings-row>\n        </template>\n      </ha-card>\n    "]);

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

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }










/*
 * @appliesMixin EventsMixin
 * @appliesMixin LocalizeMixin
 */

var HaRefreshTokens =
/*#__PURE__*/
function (_LocalizeMixin) {
  _inherits(HaRefreshTokens, _LocalizeMixin);

  function HaRefreshTokens() {
    _classCallCheck(this, HaRefreshTokens);

    return _possibleConstructorReturn(this, _getPrototypeOf(HaRefreshTokens).apply(this, arguments));
  }

  _createClass(HaRefreshTokens, [{
    key: "_computeTokens",
    value: function _computeTokens(refreshTokens) {
      return refreshTokens.filter(function (tkn) {
        return tkn.type === "normal";
      }).reverse();
    }
  }, {
    key: "_formatTitle",
    value: function _formatTitle(clientId) {
      return this.localize("ui.panel.profile.refresh_tokens.token_title", "clientId", clientId);
    }
  }, {
    key: "_formatCreatedAt",
    value: function _formatCreatedAt(created) {
      return this.localize("ui.panel.profile.refresh_tokens.created_at", "date", Object(_common_datetime_format_date_time__WEBPACK_IMPORTED_MODULE_7__["default"])(new Date(created), this.hass.language));
    }
  }, {
    key: "_formatLastUsed",
    value: function _formatLastUsed(item) {
      return item.last_used_at ? this.localize("ui.panel.profile.refresh_tokens.last_used", "date", Object(_common_datetime_format_date_time__WEBPACK_IMPORTED_MODULE_7__["default"])(new Date(item.last_used_at), this.hass.language), "location", item.last_used_ip) : this.localize("ui.panel.profile.refresh_tokens.not_used");
    }
  }, {
    key: "_handleDelete",
    value: function () {
      var _handleDelete2 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(ev) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (confirm(this.localize("ui.panel.profile.refresh_tokens.confirm_delete", "name", ev.model.item.client_id))) {
                  _context.next = 2;
                  break;
                }

                return _context.abrupt("return");

              case 2:
                _context.prev = 2;
                _context.next = 5;
                return this.hass.callWS({
                  type: "auth/delete_refresh_token",
                  refresh_token_id: ev.model.item.id
                });

              case 5:
                this.fire("hass-refresh-tokens");
                _context.next = 12;
                break;

              case 8:
                _context.prev = 8;
                _context.t0 = _context["catch"](2);
                // eslint-disable-next-line
                console.error(_context.t0);
                alert(this.localize("ui.panel.profile.refresh_tokens.delete_failed"));

              case 12:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[2, 8]]);
      }));

      function _handleDelete(_x) {
        return _handleDelete2.apply(this, arguments);
      }

      return _handleDelete;
    }()
  }], [{
    key: "template",
    get: function get() {
      return Object(_polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_3__["html"])(_templateObject());
    }
  }, {
    key: "properties",
    get: function get() {
      return {
        hass: Object,
        refreshTokens: Array
      };
    }
  }]);

  return HaRefreshTokens;
}(Object(_mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_mixins_events_mixin__WEBPACK_IMPORTED_MODULE_5__["EventsMixin"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_4__["PolymerElement"])));

customElements.define("ha-refresh-tokens-card", HaRefreshTokens);

/***/ }),

/***/ "./src/panels/profile/ha-set-vibrate-row.ts":
/*!**************************************************!*\
  !*** ./src/panels/profile/ha-set-vibrate-row.ts ***!
  \**************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _ha_settings_row__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ha-settings-row */ "./src/panels/profile/ha-settings-row.js");
/* harmony import */ var _components_ha_switch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/ha-switch */ "./src/components/ha-switch.ts");
/* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common/dom/fire_event */ "./src/common/dom/fire_event.ts");
/* harmony import */ var _data_haptics__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../data/haptics */ "./src/data/haptics.ts");






var HaSetVibrateRow = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(HaSetVibrateRow, _super);
    function HaSetVibrateRow() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HaSetVibrateRow.prototype.render = function () {
        return Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_1 || (templateObject_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      <ha-settings-row .narrow=", ">\n        <span slot=\"heading\">\n          ", "\n        </span>\n        <span slot=\"description\">\n          ", "\n        </span>\n        <ha-switch\n          .checked=", "\n          @change=", "\n        ></ha-switch>\n      </ha-settings-row>\n    "], ["\n      <ha-settings-row .narrow=", ">\n        <span slot=\"heading\">\n          ", "\n        </span>\n        <span slot=\"description\">\n          ", "\n        </span>\n        <ha-switch\n          .checked=", "\n          @change=", "\n        ></ha-switch>\n      </ha-settings-row>\n    "])), this.narrow, this.hass.localize("ui.panel.profile.vibrate.header"), this.hass.localize("ui.panel.profile.vibrate.description"), this.hass.vibrate, this._checkedChanged);
    };
    HaSetVibrateRow.prototype._checkedChanged = function (ev) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var vibrate;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                vibrate = ev.target.checked;
                if (vibrate === this.hass.vibrate) {
                    return [2 /*return*/];
                }
                Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_4__["fireEvent"])(this, "hass-vibrate", {
                    vibrate: vibrate,
                });
                Object(_data_haptics__WEBPACK_IMPORTED_MODULE_5__["forwardHaptic"])("light");
                return [2 /*return*/];
            });
        });
    };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
    ], HaSetVibrateRow.prototype, "hass", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
    ], HaSetVibrateRow.prototype, "narrow", void 0);
    HaSetVibrateRow = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["customElement"])("ha-set-vibrate-row")
    ], HaSetVibrateRow);
    return HaSetVibrateRow;
}(lit_element__WEBPACK_IMPORTED_MODULE_1__["LitElement"]));
var templateObject_1;


/***/ }),

/***/ "./src/panels/profile/ha-settings-row.js":
/*!***********************************************!*\
  !*** ./src/panels/profile/ha-settings-row.js ***!
  \***********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      <style>\n        :host {\n          display: flex;\n          padding: 0 16px;\n          align-content: normal;\n          align-self: auto;\n          align-items: center;\n        }\n        :host([narrow]) {\n          align-items: normal;\n          flex-direction: column;\n          border-top: 1px solid var(--divider-color);\n          padding-bottom: 8px;\n        }\n        paper-item-body {\n          padding-right: 16px;\n        }\n      </style>\n      <paper-item-body two-line$=\"[[!threeLine]]\" three-line$=\"[[threeLine]]\">\n        <slot name=\"heading\"></slot>\n        <div secondary><slot name=\"description\"></slot></div>\n      </paper-item-body>\n      <slot></slot>\n    "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var HaSettingsRow =
/*#__PURE__*/
function (_PolymerElement) {
  _inherits(HaSettingsRow, _PolymerElement);

  function HaSettingsRow() {
    _classCallCheck(this, HaSettingsRow);

    return _possibleConstructorReturn(this, _getPrototypeOf(HaSettingsRow).apply(this, arguments));
  }

  _createClass(HaSettingsRow, null, [{
    key: "template",
    get: function get() {
      return Object(_polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_0__["html"])(_templateObject());
    }
  }, {
    key: "properties",
    get: function get() {
      return {
        narrow: {
          type: Boolean,
          reflectToAttribute: true
        },
        threeLine: {
          type: Boolean,
          value: false
        }
      };
    }
  }]);

  return HaSettingsRow;
}(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_1__["PolymerElement"]);

customElements.define("ha-settings-row", HaSettingsRow);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFuZWwtcHJvZmlsZS5jaHVuay5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9jb21tb24vY29uZmlnL2lzX2NvbXBvbmVudF9sb2FkZWQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9kYXRldGltZS9mb3JtYXRfZGF0ZV90aW1lLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2hhLWNhcmQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaGEtcGFwZXItZHJvcGRvd24tbWVudS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9oYS1wdXNoLW5vdGlmaWNhdGlvbnMtdG9nZ2xlLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2hhLXN3aXRjaC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZGF0YS9ub3RpZnlfaHRtbDUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21peGlucy9ldmVudHMtbWl4aW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21peGlucy9sb2NhbGl6ZS1taXhpbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL3Byb2ZpbGUvaGEtYWR2YW5jZWQtbW9kZS1jYXJkLnRzIiwid2VicGFjazovLy8uL3NyYy9wYW5lbHMvcHJvZmlsZS9oYS1jaGFuZ2UtcGFzc3dvcmQtY2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL3Byb2ZpbGUvaGEtZm9yY2UtbmFycm93LXJvdy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL3Byb2ZpbGUvaGEtbG9uZy1saXZlZC1hY2Nlc3MtdG9rZW5zLWNhcmQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhbmVscy9wcm9maWxlL2hhLW1mYS1tb2R1bGVzLWNhcmQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhbmVscy9wcm9maWxlL2hhLXBhbmVsLXByb2ZpbGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhbmVscy9wcm9maWxlL2hhLXBpY2stbGFuZ3VhZ2Utcm93LmpzIiwid2VicGFjazovLy8uL3NyYy9wYW5lbHMvcHJvZmlsZS9oYS1waWNrLXRoZW1lLXJvdy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL3Byb2ZpbGUvaGEtcHVzaC1ub3RpZmljYXRpb25zLXJvdy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL3Byb2ZpbGUvaGEtcmVmcmVzaC10b2tlbnMtY2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL3Byb2ZpbGUvaGEtc2V0LXZpYnJhdGUtcm93LnRzIiwid2VicGFjazovLy8uL3NyYy9wYW5lbHMvcHJvZmlsZS9oYS1zZXR0aW5ncy1yb3cuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSG9tZUFzc2lzdGFudCB9IGZyb20gXCIuLi8uLi90eXBlc1wiO1xuXG4vKiogUmV0dXJuIGlmIGEgY29tcG9uZW50IGlzIGxvYWRlZC4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzQ29tcG9uZW50TG9hZGVkKFxuICBoYXNzOiBIb21lQXNzaXN0YW50LFxuICBjb21wb25lbnQ6IHN0cmluZ1xuKTogYm9vbGVhbiB7XG4gIHJldHVybiBoYXNzICYmIGhhc3MuY29uZmlnLmNvbXBvbmVudHMuaW5kZXhPZihjb21wb25lbnQpICE9PSAtMTtcbn1cbiIsImltcG9ydCBmZWNoYSBmcm9tIFwiZmVjaGFcIjtcblxuLy8gQ2hlY2sgZm9yIHN1cHBvcnQgb2YgbmF0aXZlIGxvY2FsZSBzdHJpbmcgb3B0aW9uc1xuZnVuY3Rpb24gdG9Mb2NhbGVTdHJpbmdTdXBwb3J0c09wdGlvbnMoKSB7XG4gIHRyeSB7XG4gICAgbmV3IERhdGUoKS50b0xvY2FsZVN0cmluZyhcImlcIik7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gZS5uYW1lID09PSBcIlJhbmdlRXJyb3JcIjtcbiAgfVxuICByZXR1cm4gZmFsc2U7XG59XG5cbmV4cG9ydCBkZWZhdWx0ICh0b0xvY2FsZVN0cmluZ1N1cHBvcnRzT3B0aW9ucygpXG4gID8gKGRhdGVPYmo6IERhdGUsIGxvY2FsZXM6IHN0cmluZykgPT5cbiAgICAgIGRhdGVPYmoudG9Mb2NhbGVTdHJpbmcobG9jYWxlcywge1xuICAgICAgICB5ZWFyOiBcIm51bWVyaWNcIixcbiAgICAgICAgbW9udGg6IFwibG9uZ1wiLFxuICAgICAgICBkYXk6IFwibnVtZXJpY1wiLFxuICAgICAgICBob3VyOiBcIm51bWVyaWNcIixcbiAgICAgICAgbWludXRlOiBcIjItZGlnaXRcIixcbiAgICAgIH0pXG4gIDogKGRhdGVPYmo6IERhdGUpID0+IGZlY2hhLmZvcm1hdChkYXRlT2JqLCBcImhhRGF0ZVRpbWVcIikpO1xuIiwiaW1wb3J0IHtcbiAgY3NzLFxuICBDU1NSZXN1bHQsXG4gIGh0bWwsXG4gIExpdEVsZW1lbnQsXG4gIHByb3BlcnR5LFxuICBUZW1wbGF0ZVJlc3VsdCxcbn0gZnJvbSBcImxpdC1lbGVtZW50XCI7XG5cbmNsYXNzIEhhQ2FyZCBleHRlbmRzIExpdEVsZW1lbnQge1xuICBAcHJvcGVydHkoKSBwdWJsaWMgaGVhZGVyPzogc3RyaW5nO1xuXG4gIHN0YXRpYyBnZXQgc3R5bGVzKCk6IENTU1Jlc3VsdCB7XG4gICAgcmV0dXJuIGNzc2BcbiAgICAgIDpob3N0IHtcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKFxuICAgICAgICAgIC0taGEtY2FyZC1iYWNrZ3JvdW5kLFxuICAgICAgICAgIHZhcigtLXBhcGVyLWNhcmQtYmFja2dyb3VuZC1jb2xvciwgd2hpdGUpXG4gICAgICAgICk7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWhhLWNhcmQtYm9yZGVyLXJhZGl1cywgMnB4KTtcbiAgICAgICAgYm94LXNoYWRvdzogdmFyKFxuICAgICAgICAgIC0taGEtY2FyZC1ib3gtc2hhZG93LFxuICAgICAgICAgIDAgMnB4IDJweCAwIHJnYmEoMCwgMCwgMCwgMC4xNCksXG4gICAgICAgICAgMCAxcHggNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjEyKSxcbiAgICAgICAgICAwIDNweCAxcHggLTJweCByZ2JhKDAsIDAsIDAsIDAuMilcbiAgICAgICAgKTtcbiAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnktdGV4dC1jb2xvcik7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLW91dDtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgfVxuXG4gICAgICAuY2FyZC1oZWFkZXIsXG4gICAgICA6aG9zdCA6OnNsb3R0ZWQoLmNhcmQtaGVhZGVyKSB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1oYS1jYXJkLWhlYWRlci1jb2xvciwgLS1wcmltYXJ5LXRleHQtY29sb3IpO1xuICAgICAgICBmb250LWZhbWlseTogdmFyKC0taGEtY2FyZC1oZWFkZXItZm9udC1mYW1pbHksIGluaGVyaXQpO1xuICAgICAgICBmb250LXNpemU6IHZhcigtLWhhLWNhcmQtaGVhZGVyLWZvbnQtc2l6ZSwgMjRweCk7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAtMC4wMTJlbTtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDMycHg7XG4gICAgICAgIHBhZGRpbmc6IDI0cHggMTZweCAxNnB4O1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIH1cblxuICAgICAgOmhvc3QgOjpzbG90dGVkKC5jYXJkLWNvbnRlbnQ6bm90KDpmaXJzdC1jaGlsZCkpLFxuICAgICAgc2xvdDpub3QoOmZpcnN0LWNoaWxkKTo6c2xvdHRlZCguY2FyZC1jb250ZW50KSB7XG4gICAgICAgIHBhZGRpbmctdG9wOiAwcHg7XG4gICAgICAgIG1hcmdpbi10b3A6IC04cHg7XG4gICAgICB9XG5cbiAgICAgIDpob3N0IDo6c2xvdHRlZCguY2FyZC1jb250ZW50KSB7XG4gICAgICAgIHBhZGRpbmc6IDE2cHg7XG4gICAgICB9XG5cbiAgICAgIDpob3N0IDo6c2xvdHRlZCguY2FyZC1hY3Rpb25zKSB7XG4gICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZThlOGU4O1xuICAgICAgICBwYWRkaW5nOiA1cHggMTZweDtcbiAgICAgIH1cbiAgICBgO1xuICB9XG5cbiAgcHJvdGVjdGVkIHJlbmRlcigpOiBUZW1wbGF0ZVJlc3VsdCB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICAke3RoaXMuaGVhZGVyXG4gICAgICAgID8gaHRtbGBcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWhlYWRlclwiPiR7dGhpcy5oZWFkZXJ9PC9kaXY+XG4gICAgICAgICAgYFxuICAgICAgICA6IGh0bWxgYH1cbiAgICAgIDxzbG90Pjwvc2xvdD5cbiAgICBgO1xuICB9XG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcImhhLWNhcmRcIiwgSGFDYXJkKTtcbiIsImltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWRyb3Bkb3duLW1lbnUvcGFwZXItZHJvcGRvd24tbWVudVwiO1xuaW1wb3J0IHsgQ29uc3RydWN0b3IgfSBmcm9tIFwibGl0LWVsZW1lbnRcIjtcbmltcG9ydCB7IFBvbHltZXJFbGVtZW50IH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXJcIjtcblxuY29uc3QgcGFwZXJEcm9wZG93bkNsYXNzID0gY3VzdG9tRWxlbWVudHMuZ2V0KFxuICBcInBhcGVyLWRyb3Bkb3duLW1lbnVcIlxuKSBhcyBDb25zdHJ1Y3RvcjxQb2x5bWVyRWxlbWVudD47XG5cbi8vIHBhdGNoZXMgcGFwZXIgZHJvcCBkb3duIHRvIHByb3Blcmx5IHN1cHBvcnQgUlRMIC0gaHR0cHM6Ly9naXRodWIuY29tL1BvbHltZXJFbGVtZW50cy9wYXBlci1kcm9wZG93bi1tZW51L2lzc3Vlcy8xODNcbmV4cG9ydCBjbGFzcyBIYVBhcGVyRHJvcGRvd25DbGFzcyBleHRlbmRzIHBhcGVyRHJvcGRvd25DbGFzcyB7XG4gIHB1YmxpYyByZWFkeSgpIHtcbiAgICBzdXBlci5yZWFkeSgpO1xuICAgIC8vIHdhaXQgdG8gY2hlY2sgZm9yIGRpcmVjdGlvbiBzaW5jZSBvdGhlcndpc2UgZGlyZWN0aW9uIGlzIHdyb25nIGV2ZW4gdGhvdWdoIHRvcCBsZXZlbCBpcyBSVExcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGlmICh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzKS5kaXJlY3Rpb24gPT09IFwicnRsXCIpIHtcbiAgICAgICAgdGhpcy5zdHlsZS50ZXh0QWxpZ24gPSBcInJpZ2h0XCI7XG4gICAgICB9XG4gICAgfSwgMTAwKTtcbiAgfVxufVxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBIVE1MRWxlbWVudFRhZ05hbWVNYXAge1xuICAgIFwiaGEtcGFwZXItZHJvcGRvd24tbWVudVwiOiBIYVBhcGVyRHJvcGRvd25DbGFzcztcbiAgfVxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJoYS1wYXBlci1kcm9wZG93bi1tZW51XCIsIEhhUGFwZXJEcm9wZG93bkNsYXNzKTtcbiIsImltcG9ydCB7IGh0bWwgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvaHRtbC10YWdcIjtcbmltcG9ydCB7IFBvbHltZXJFbGVtZW50IH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvcG9seW1lci1lbGVtZW50XCI7XG5cbmltcG9ydCB7IGdldEFwcEtleSB9IGZyb20gXCIuLi9kYXRhL25vdGlmeV9odG1sNVwiO1xuaW1wb3J0IHsgRXZlbnRzTWl4aW4gfSBmcm9tIFwiLi4vbWl4aW5zL2V2ZW50cy1taXhpblwiO1xuXG5pbXBvcnQgXCIuL2hhLXN3aXRjaFwiO1xuXG5leHBvcnQgY29uc3QgcHVzaFN1cHBvcnRlZCA9XG4gIFwic2VydmljZVdvcmtlclwiIGluIG5hdmlnYXRvciAmJlxuICBcIlB1c2hNYW5hZ2VyXCIgaW4gd2luZG93ICYmXG4gIChkb2N1bWVudC5sb2NhdGlvbi5wcm90b2NvbCA9PT0gXCJodHRwczpcIiB8fFxuICAgIGRvY3VtZW50LmxvY2F0aW9uLmhvc3RuYW1lID09PSBcImxvY2FsaG9zdFwiIHx8XG4gICAgZG9jdW1lbnQubG9jYXRpb24uaG9zdG5hbWUgPT09IFwiMTI3LjAuMC4xXCIpO1xuXG4vKlxuICogQGFwcGxpZXNNaXhpbiBFdmVudHNNaXhpblxuICovXG5jbGFzcyBIYVB1c2hOb3RpZmljYXRpb25zVG9nZ2xlIGV4dGVuZHMgRXZlbnRzTWl4aW4oUG9seW1lckVsZW1lbnQpIHtcbiAgc3RhdGljIGdldCB0ZW1wbGF0ZSgpIHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxoYS1zd2l0Y2hcbiAgICAgICAgZGlzYWJsZWQ9XCJbW19jb21wRGlzYWJsZWQoZGlzYWJsZWQsIGxvYWRpbmcpXV1cIlxuICAgICAgICBjaGVja2VkPVwie3twdXNoQ2hlY2tlZH19XCJcbiAgICAgICAgb24tY2hhbmdlPVwiaGFuZGxlUHVzaENoYW5nZVwiXG4gICAgICA+PC9oYS1zd2l0Y2g+XG4gICAgYDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaGFzczogeyB0eXBlOiBPYmplY3QsIHZhbHVlOiBudWxsIH0sXG4gICAgICBkaXNhYmxlZDoge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICB2YWx1ZTogZmFsc2UsXG4gICAgICB9LFxuICAgICAgcHVzaENoZWNrZWQ6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgdmFsdWU6XG4gICAgICAgICAgXCJOb3RpZmljYXRpb25cIiBpbiB3aW5kb3cgJiYgTm90aWZpY2F0aW9uLnBlcm1pc3Npb24gPT09IFwiZ3JhbnRlZFwiLFxuICAgICAgfSxcbiAgICAgIGxvYWRpbmc6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgdmFsdWU6IHRydWUsXG4gICAgICB9LFxuICAgIH07XG4gIH1cblxuICBhc3luYyBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICBzdXBlci5jb25uZWN0ZWRDYWxsYmFjaygpO1xuXG4gICAgaWYgKCFwdXNoU3VwcG9ydGVkKSByZXR1cm47XG5cbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVnID0gYXdhaXQgbmF2aWdhdG9yLnNlcnZpY2VXb3JrZXIucmVhZHk7XG4gICAgICBpZiAoIXJlZy5wdXNoTWFuYWdlcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICByZWcucHVzaE1hbmFnZXIuZ2V0U3Vic2NyaXB0aW9uKCkudGhlbigoc3Vic2NyaXB0aW9uKSA9PiB7XG4gICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLnB1c2hDaGVja2VkID0gISFzdWJzY3JpcHRpb247XG4gICAgICB9KTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIC8vIFdlIGRvbid0IHNldCBsb2FkaW5nIHRvIGBmYWxzZWAgc28gd2UgcmVtYWluIGRpc2FibGVkXG4gICAgfVxuICB9XG5cbiAgaGFuZGxlUHVzaENoYW5nZShldmVudCkge1xuICAgIC8vIFNvbWVob3cgdGhpcyBpcyB0cmlnZ2VyZWQgb24gU2FmYXJpIG9uIHBhZ2UgbG9hZCBjYXVzaW5nXG4gICAgLy8gaXQgdG8gZ2V0IGludG8gYSBsb29wIGFuZCBjcmFzaCB0aGUgcGFnZS5cbiAgICBpZiAoIXB1c2hTdXBwb3J0ZWQpIHJldHVybjtcblxuICAgIGlmIChldmVudC50YXJnZXQuY2hlY2tlZCkge1xuICAgICAgdGhpcy5zdWJzY3JpYmVQdXNoTm90aWZpY2F0aW9ucygpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnVuc3Vic2NyaWJlUHVzaE5vdGlmaWNhdGlvbnMoKTtcbiAgICB9XG4gIH1cblxuICBhc3luYyBzdWJzY3JpYmVQdXNoTm90aWZpY2F0aW9ucygpIHtcbiAgICBjb25zdCByZWcgPSBhd2FpdCBuYXZpZ2F0b3Iuc2VydmljZVdvcmtlci5yZWFkeTtcbiAgICBsZXQgc3ViO1xuXG4gICAgdHJ5IHtcbiAgICAgIGxldCBicm93c2VyTmFtZTtcbiAgICAgIGlmIChuYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCkuaW5kZXhPZihcImZpcmVmb3hcIikgPiAtMSkge1xuICAgICAgICBicm93c2VyTmFtZSA9IFwiZmlyZWZveFwiO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYnJvd3Nlck5hbWUgPSBcImNocm9tZVwiO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBuYW1lID0gcHJvbXB0KFwiV2hhdCBzaG91bGQgdGhpcyBkZXZpY2UgYmUgY2FsbGVkID9cIik7XG4gICAgICBpZiAobmFtZSA9PSBudWxsKSB7XG4gICAgICAgIHRoaXMucHVzaENoZWNrZWQgPSBmYWxzZTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBsZXQgYXBwbGljYXRpb25TZXJ2ZXJLZXk7XG4gICAgICB0cnkge1xuICAgICAgICBhcHBsaWNhdGlvblNlcnZlcktleSA9IGF3YWl0IGdldEFwcEtleSh0aGlzLmhhc3MpO1xuICAgICAgfSBjYXRjaCAoZXgpIHtcbiAgICAgICAgYXBwbGljYXRpb25TZXJ2ZXJLZXkgPSBudWxsO1xuICAgICAgfVxuXG4gICAgICBpZiAoYXBwbGljYXRpb25TZXJ2ZXJLZXkpIHtcbiAgICAgICAgc3ViID0gYXdhaXQgcmVnLnB1c2hNYW5hZ2VyLnN1YnNjcmliZSh7XG4gICAgICAgICAgdXNlclZpc2libGVPbmx5OiB0cnVlLFxuICAgICAgICAgIGFwcGxpY2F0aW9uU2VydmVyS2V5LFxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHN1YiA9IGF3YWl0IHJlZy5wdXNoTWFuYWdlci5zdWJzY3JpYmUoeyB1c2VyVmlzaWJsZU9ubHk6IHRydWUgfSk7XG4gICAgICB9XG5cbiAgICAgIGF3YWl0IHRoaXMuaGFzcy5jYWxsQXBpKFwiUE9TVFwiLCBcIm5vdGlmeS5odG1sNVwiLCB7XG4gICAgICAgIHN1YnNjcmlwdGlvbjogc3ViLFxuICAgICAgICBicm93c2VyOiBicm93c2VyTmFtZSxcbiAgICAgICAgbmFtZSxcbiAgICAgIH0pO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgY29uc3QgbWVzc2FnZSA9IGVyci5tZXNzYWdlIHx8IFwiTm90aWZpY2F0aW9uIHJlZ2lzdHJhdGlvbiBmYWlsZWQuXCI7XG4gICAgICBpZiAoc3ViKSB7XG4gICAgICAgIGF3YWl0IHN1Yi51bnN1YnNjcmliZSgpO1xuICAgICAgfVxuXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcblxuICAgICAgdGhpcy5maXJlKFwiaGFzcy1ub3RpZmljYXRpb25cIiwgeyBtZXNzYWdlIH0pO1xuICAgICAgdGhpcy5wdXNoQ2hlY2tlZCA9IGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIGFzeW5jIHVuc3Vic2NyaWJlUHVzaE5vdGlmaWNhdGlvbnMoKSB7XG4gICAgY29uc3QgcmVnID0gYXdhaXQgbmF2aWdhdG9yLnNlcnZpY2VXb3JrZXIucmVhZHk7XG5cbiAgICB0cnkge1xuICAgICAgY29uc3Qgc3ViID0gYXdhaXQgcmVnLnB1c2hNYW5hZ2VyLmdldFN1YnNjcmlwdGlvbigpO1xuXG4gICAgICBpZiAoIXN1YikgcmV0dXJuO1xuXG4gICAgICBhd2FpdCB0aGlzLmhhc3MuY2FsbEFwaShcIkRFTEVURVwiLCBcIm5vdGlmeS5odG1sNVwiLCB7IHN1YnNjcmlwdGlvbjogc3ViIH0pO1xuICAgICAgYXdhaXQgc3ViLnVuc3Vic2NyaWJlKCk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBjb25zdCBtZXNzYWdlID1cbiAgICAgICAgZXJyLm1lc3NhZ2UgfHwgXCJGYWlsZWQgdW5zdWJzY3JpYmluZyBmb3IgcHVzaCBub3RpZmljYXRpb25zLlwiO1xuXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBpbiB1bnN1YiBwdXNoXCIsIGVycik7XG5cbiAgICAgIHRoaXMuZmlyZShcImhhc3Mtbm90aWZpY2F0aW9uXCIsIHsgbWVzc2FnZSB9KTtcbiAgICAgIHRoaXMucHVzaENoZWNrZWQgPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIF9jb21wRGlzYWJsZWQoZGlzYWJsZWQsIGxvYWRpbmcpIHtcbiAgICByZXR1cm4gZGlzYWJsZWQgfHwgbG9hZGluZztcbiAgfVxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXG4gIFwiaGEtcHVzaC1ub3RpZmljYXRpb25zLXRvZ2dsZVwiLFxuICBIYVB1c2hOb3RpZmljYXRpb25zVG9nZ2xlXG4pO1xuIiwiaW1wb3J0IHsgQ29uc3RydWN0b3IsIGN1c3RvbUVsZW1lbnQsIENTU1Jlc3VsdCwgY3NzLCBxdWVyeSB9IGZyb20gXCJsaXQtZWxlbWVudFwiO1xuaW1wb3J0IFwiQG1hdGVyaWFsL213Yy1zd2l0Y2hcIjtcbmltcG9ydCB7IHN0eWxlIH0gZnJvbSBcIkBtYXRlcmlhbC9td2Mtc3dpdGNoL213Yy1zd2l0Y2gtY3NzXCI7XG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcbmltcG9ydCB7IFN3aXRjaCB9IGZyb20gXCJAbWF0ZXJpYWwvbXdjLXN3aXRjaFwiO1xuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG5jb25zdCBNd2NTd2l0Y2ggPSBjdXN0b21FbGVtZW50cy5nZXQoXCJtd2Mtc3dpdGNoXCIpIGFzIENvbnN0cnVjdG9yPFN3aXRjaD47XG5cbkBjdXN0b21FbGVtZW50KFwiaGEtc3dpdGNoXCIpXG5leHBvcnQgY2xhc3MgSGFTd2l0Y2ggZXh0ZW5kcyBNd2NTd2l0Y2gge1xuICBAcXVlcnkoXCJzbG90XCIpIHByaXZhdGUgX3Nsb3QhOiBIVE1MU2xvdEVsZW1lbnQ7XG5cbiAgcHJvdGVjdGVkIGZpcnN0VXBkYXRlZCgpIHtcbiAgICBzdXBlci5maXJzdFVwZGF0ZWQoKTtcbiAgICB0aGlzLnN0eWxlLnNldFByb3BlcnR5KFwiLS1tZGMtdGhlbWUtc2Vjb25kYXJ5XCIsIFwidmFyKC0tcHJpbWFyeS1jb2xvcilcIik7XG4gICAgdGhpcy5jbGFzc0xpc3QudG9nZ2xlKFxuICAgICAgXCJzbG90dGVkXCIsXG4gICAgICBCb29sZWFuKHRoaXMuX3Nsb3QuYXNzaWduZWROb2RlcygpLmxlbmd0aClcbiAgICApO1xuICB9XG5cbiAgcHJvdGVjdGVkIHN0YXRpYyBnZXQgc3R5bGVzKCk6IENTU1Jlc3VsdFtdIHtcbiAgICByZXR1cm4gW1xuICAgICAgc3R5bGUsXG4gICAgICBjc3NgXG4gICAgICAgIDpob3N0IHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgfVxuICAgICAgICAubWRjLXN3aXRjaDpub3QoLm1kYy1zd2l0Y2gtLWNoZWNrZWQpIC5tZGMtc3dpdGNoX190aHVtYiB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcGFwZXItdG9nZ2xlLWJ1dHRvbi11bmNoZWNrZWQtYnV0dG9uLWNvbG9yKTtcbiAgICAgICAgICBib3JkZXItY29sb3I6IHZhcigtLXBhcGVyLXRvZ2dsZS1idXR0b24tdW5jaGVja2VkLWJ1dHRvbi1jb2xvcik7XG4gICAgICAgIH1cbiAgICAgICAgLm1kYy1zd2l0Y2g6bm90KC5tZGMtc3dpdGNoLS1jaGVja2VkKSAubWRjLXN3aXRjaF9fdHJhY2sge1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXBhcGVyLXRvZ2dsZS1idXR0b24tdW5jaGVja2VkLWJhci1jb2xvcik7XG4gICAgICAgICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1wYXBlci10b2dnbGUtYnV0dG9uLXVuY2hlY2tlZC1iYXItY29sb3IpO1xuICAgICAgICB9XG4gICAgICAgIDpob3N0KC5zbG90dGVkKSAubWRjLXN3aXRjaCB7XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAyNHB4O1xuICAgICAgICB9XG4gICAgICBgLFxuICAgIF07XG4gIH1cbn1cblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgSFRNTEVsZW1lbnRUYWdOYW1lTWFwIHtcbiAgICBcImhhLXN3aXRjaFwiOiBIYVN3aXRjaDtcbiAgfVxufVxuIiwiaW1wb3J0IHsgSG9tZUFzc2lzdGFudCB9IGZyb20gXCIuLi90eXBlc1wiO1xuXG5mdW5jdGlvbiB1cmxCYXNlNjRUb1VpbnQ4QXJyYXkoYmFzZTY0U3RyaW5nKSB7XG4gIGNvbnN0IHBhZGRpbmcgPSBcIj1cIi5yZXBlYXQoKDQgLSAoYmFzZTY0U3RyaW5nLmxlbmd0aCAlIDQpKSAlIDQpO1xuICBjb25zdCBiYXNlNjQgPSAoYmFzZTY0U3RyaW5nICsgcGFkZGluZykucmVwbGFjZSgvLS9nLCBcIitcIikucmVwbGFjZSgvXy9nLCBcIi9cIik7XG5cbiAgY29uc3QgcmF3RGF0YSA9IHdpbmRvdy5hdG9iKGJhc2U2NCk7XG4gIGNvbnN0IG91dHB1dEFycmF5ID0gbmV3IFVpbnQ4QXJyYXkocmF3RGF0YS5sZW5ndGgpO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcmF3RGF0YS5sZW5ndGg7ICsraSkge1xuICAgIG91dHB1dEFycmF5W2ldID0gcmF3RGF0YS5jaGFyQ29kZUF0KGkpO1xuICB9XG4gIHJldHVybiBvdXRwdXRBcnJheTtcbn1cblxuZXhwb3J0IGNvbnN0IGdldEFwcEtleSA9IGFzeW5jIChoYXNzOiBIb21lQXNzaXN0YW50KSA9PiB7XG4gIGNvbnN0IHJlcyA9IGF3YWl0IGhhc3MuY2FsbFdTPHN0cmluZz4oe1xuICAgIHR5cGU6IFwibm90aWZ5L2h0bWw1L2FwcGtleVwiLFxuICB9KTtcbiAgcmV0dXJuIHJlcyA/IHVybEJhc2U2NFRvVWludDhBcnJheShyZXMpIDogbnVsbDtcbn07XG4iLCJpbXBvcnQgeyBkZWR1cGluZ01peGluIH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL21peGluXCI7XG5cbmltcG9ydCB7IGZpcmVFdmVudCB9IGZyb20gXCIuLi9jb21tb24vZG9tL2ZpcmVfZXZlbnRcIjtcblxuLy8gUG9seW1lciBsZWdhY3kgZXZlbnQgaGVscGVycyB1c2VkIGNvdXJ0ZXN5IG9mIHRoZSBQb2x5bWVyIHByb2plY3QuXG4vL1xuLy8gQ29weXJpZ2h0IChjKSAyMDE3IFRoZSBQb2x5bWVyIEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4vL1xuLy8gUmVkaXN0cmlidXRpb24gYW5kIHVzZSBpbiBzb3VyY2UgYW5kIGJpbmFyeSBmb3Jtcywgd2l0aCBvciB3aXRob3V0XG4vLyBtb2RpZmljYXRpb24sIGFyZSBwZXJtaXR0ZWQgcHJvdmlkZWQgdGhhdCB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnMgYXJlXG4vLyBtZXQ6XG4vL1xuLy8gICAgKiBSZWRpc3RyaWJ1dGlvbnMgb2Ygc291cmNlIGNvZGUgbXVzdCByZXRhaW4gdGhlIGFib3ZlIGNvcHlyaWdodFxuLy8gbm90aWNlLCB0aGlzIGxpc3Qgb2YgY29uZGl0aW9ucyBhbmQgdGhlIGZvbGxvd2luZyBkaXNjbGFpbWVyLlxuLy8gICAgKiBSZWRpc3RyaWJ1dGlvbnMgaW4gYmluYXJ5IGZvcm0gbXVzdCByZXByb2R1Y2UgdGhlIGFib3ZlXG4vLyBjb3B5cmlnaHQgbm90aWNlLCB0aGlzIGxpc3Qgb2YgY29uZGl0aW9ucyBhbmQgdGhlIGZvbGxvd2luZyBkaXNjbGFpbWVyXG4vLyBpbiB0aGUgZG9jdW1lbnRhdGlvbiBhbmQvb3Igb3RoZXIgbWF0ZXJpYWxzIHByb3ZpZGVkIHdpdGggdGhlXG4vLyBkaXN0cmlidXRpb24uXG4vLyAgICAqIE5laXRoZXIgdGhlIG5hbWUgb2YgR29vZ2xlIEluYy4gbm9yIHRoZSBuYW1lcyBvZiBpdHNcbi8vIGNvbnRyaWJ1dG9ycyBtYXkgYmUgdXNlZCB0byBlbmRvcnNlIG9yIHByb21vdGUgcHJvZHVjdHMgZGVyaXZlZCBmcm9tXG4vLyB0aGlzIHNvZnR3YXJlIHdpdGhvdXQgc3BlY2lmaWMgcHJpb3Igd3JpdHRlbiBwZXJtaXNzaW9uLlxuLy9cbi8vIFRISVMgU09GVFdBUkUgSVMgUFJPVklERUQgQlkgVEhFIENPUFlSSUdIVCBIT0xERVJTIEFORCBDT05UUklCVVRPUlNcbi8vIFwiQVMgSVNcIiBBTkQgQU5ZIEVYUFJFU1MgT1IgSU1QTElFRCBXQVJSQU5USUVTLCBJTkNMVURJTkcsIEJVVCBOT1Rcbi8vIExJTUlURUQgVE8sIFRIRSBJTVBMSUVEIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZIEFORCBGSVRORVNTIEZPUlxuLy8gQSBQQVJUSUNVTEFSIFBVUlBPU0UgQVJFIERJU0NMQUlNRUQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBDT1BZUklHSFRcbi8vIE9XTkVSIE9SIENPTlRSSUJVVE9SUyBCRSBMSUFCTEUgRk9SIEFOWSBESVJFQ1QsIElORElSRUNULCBJTkNJREVOVEFMLFxuLy8gU1BFQ0lBTCwgRVhFTVBMQVJZLCBPUiBDT05TRVFVRU5USUFMIERBTUFHRVMgKElOQ0xVRElORywgQlVUIE5PVFxuLy8gTElNSVRFRCBUTywgUFJPQ1VSRU1FTlQgT0YgU1VCU1RJVFVURSBHT09EUyBPUiBTRVJWSUNFUzsgTE9TUyBPRiBVU0UsXG4vLyBEQVRBLCBPUiBQUk9GSVRTOyBPUiBCVVNJTkVTUyBJTlRFUlJVUFRJT04pIEhPV0VWRVIgQ0FVU0VEIEFORCBPTiBBTllcbi8vIFRIRU9SWSBPRiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQ09OVFJBQ1QsIFNUUklDVCBMSUFCSUxJVFksIE9SIFRPUlRcbi8vIChJTkNMVURJTkcgTkVHTElHRU5DRSBPUiBPVEhFUldJU0UpIEFSSVNJTkcgSU4gQU5ZIFdBWSBPVVQgT0YgVEhFIFVTRVxuLy8gT0YgVEhJUyBTT0ZUV0FSRSwgRVZFTiBJRiBBRFZJU0VEIE9GIFRIRSBQT1NTSUJJTElUWSBPRiBTVUNIIERBTUFHRS5cblxuLyogQHBvbHltZXJNaXhpbiAqL1xuZXhwb3J0IGNvbnN0IEV2ZW50c01peGluID0gZGVkdXBpbmdNaXhpbihcbiAgKHN1cGVyQ2xhc3MpID0+XG4gICAgY2xhc3MgZXh0ZW5kcyBzdXBlckNsYXNzIHtcbiAgICAgIC8qKlxuICAgKiBEaXNwYXRjaGVzIGEgY3VzdG9tIGV2ZW50IHdpdGggYW4gb3B0aW9uYWwgZGV0YWlsIHZhbHVlLlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gdHlwZSBOYW1lIG9mIGV2ZW50IHR5cGUuXG4gICAqIEBwYXJhbSB7Kj19IGRldGFpbCBEZXRhaWwgdmFsdWUgY29udGFpbmluZyBldmVudC1zcGVjaWZpY1xuICAgKiAgIHBheWxvYWQuXG4gICAqIEBwYXJhbSB7eyBidWJibGVzOiAoYm9vbGVhbnx1bmRlZmluZWQpLFxuICAgICAgICAgICAgICAgY2FuY2VsYWJsZTogKGJvb2xlYW58dW5kZWZpbmVkKSxcbiAgICAgICAgICAgICAgICBjb21wb3NlZDogKGJvb2xlYW58dW5kZWZpbmVkKSB9PX1cbiAgICAqICBvcHRpb25zIE9iamVjdCBzcGVjaWZ5aW5nIG9wdGlvbnMuICBUaGVzZSBtYXkgaW5jbHVkZTpcbiAgICAqICBgYnViYmxlc2AgKGJvb2xlYW4sIGRlZmF1bHRzIHRvIGB0cnVlYCksXG4gICAgKiAgYGNhbmNlbGFibGVgIChib29sZWFuLCBkZWZhdWx0cyB0byBmYWxzZSksIGFuZFxuICAgICogIGBub2RlYCBvbiB3aGljaCB0byBmaXJlIHRoZSBldmVudCAoSFRNTEVsZW1lbnQsIGRlZmF1bHRzIHRvIGB0aGlzYCkuXG4gICAgKiBAcmV0dXJuIHtFdmVudH0gVGhlIG5ldyBldmVudCB0aGF0IHdhcyBmaXJlZC5cbiAgICAqL1xuICAgICAgZmlyZSh0eXBlLCBkZXRhaWwsIG9wdGlvbnMpIHtcbiAgICAgICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gICAgICAgIHJldHVybiBmaXJlRXZlbnQob3B0aW9ucy5ub2RlIHx8IHRoaXMsIHR5cGUsIGRldGFpbCwgb3B0aW9ucyk7XG4gICAgICB9XG4gICAgfVxuKTtcbiIsImltcG9ydCB7IGRlZHVwaW5nTWl4aW4gfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvbWl4aW5cIjtcbi8qKlxuICogUG9seW1lciBNaXhpbiB0byBlbmFibGUgYSBsb2NhbGl6ZSBmdW5jdGlvbiBwb3dlcmVkIGJ5IGxhbmd1YWdlL3Jlc291cmNlcyBmcm9tIGhhc3Mgb2JqZWN0LlxuICpcbiAqIEBwb2x5bWVyTWl4aW5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZGVkdXBpbmdNaXhpbihcbiAgKHN1cGVyQ2xhc3MpID0+XG4gICAgY2xhc3MgZXh0ZW5kcyBzdXBlckNsYXNzIHtcbiAgICAgIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBoYXNzOiBPYmplY3QsXG5cbiAgICAgICAgICAvKipcbiAgICAgICAgICAgKiBUcmFuc2xhdGVzIGEgc3RyaW5nIHRvIHRoZSBjdXJyZW50IGBsYW5ndWFnZWAuIEFueSBwYXJhbWV0ZXJzIHRvIHRoZVxuICAgICAgICAgICAqIHN0cmluZyBzaG91bGQgYmUgcGFzc2VkIGluIG9yZGVyLCBhcyBmb2xsb3dzOlxuICAgICAgICAgICAqIGBsb2NhbGl6ZShzdHJpbmdLZXksIHBhcmFtMU5hbWUsIHBhcmFtMVZhbHVlLCBwYXJhbTJOYW1lLCBwYXJhbTJWYWx1ZSlgXG4gICAgICAgICAgICovXG4gICAgICAgICAgbG9jYWxpemU6IHtcbiAgICAgICAgICAgIHR5cGU6IEZ1bmN0aW9uLFxuICAgICAgICAgICAgY29tcHV0ZWQ6IFwiX19jb21wdXRlTG9jYWxpemUoaGFzcy5sb2NhbGl6ZSlcIixcbiAgICAgICAgICB9LFxuICAgICAgICB9O1xuICAgICAgfVxuXG4gICAgICBfX2NvbXB1dGVMb2NhbGl6ZShsb2NhbGl6ZSkge1xuICAgICAgICByZXR1cm4gbG9jYWxpemU7XG4gICAgICB9XG4gICAgfVxuKTtcbiIsImltcG9ydCB7XG4gIExpdEVsZW1lbnQsXG4gIHByb3BlcnR5LFxuICBUZW1wbGF0ZVJlc3VsdCxcbiAgaHRtbCxcbiAgY3VzdG9tRWxlbWVudCxcbiAgQ1NTUmVzdWx0LFxuICBjc3MsXG59IGZyb20gXCJsaXQtZWxlbWVudFwiO1xuaW1wb3J0IFwiLi4vLi4vY29tcG9uZW50cy9oYS1jYXJkXCI7XG5pbXBvcnQgeyBIb21lQXNzaXN0YW50IH0gZnJvbSBcIi4uLy4uL3R5cGVzXCI7XG5pbXBvcnQge1xuICBDb3JlRnJvbnRlbmRVc2VyRGF0YSxcbiAgZ2V0T3B0aW1pc3RpY0Zyb250ZW5kVXNlckRhdGFDb2xsZWN0aW9uLFxufSBmcm9tIFwiLi4vLi4vZGF0YS9mcm9udGVuZFwiO1xuXG5AY3VzdG9tRWxlbWVudChcImhhLWFkdmFuY2VkLW1vZGUtY2FyZFwiKVxuY2xhc3MgQWR2YW5jZWRNb2RlQ2FyZCBleHRlbmRzIExpdEVsZW1lbnQge1xuICBAcHJvcGVydHkoKSBwdWJsaWMgaGFzcyE6IEhvbWVBc3Npc3RhbnQ7XG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyBjb3JlVXNlckRhdGE/OiBDb3JlRnJvbnRlbmRVc2VyRGF0YTtcblxuICBwcm90ZWN0ZWQgcmVuZGVyKCk6IFRlbXBsYXRlUmVzdWx0IHwgdm9pZCB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8aGEtY2FyZD5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtaGVhZGVyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cInRpdGxlXCI+QWR2YW5jZWQgbW9kZTwvZGl2PlxuICAgICAgICAgIDxoYS1zd2l0Y2hcbiAgICAgICAgICAgIC5jaGVja2VkPSR7dGhpcy5jb3JlVXNlckRhdGEgJiYgdGhpcy5jb3JlVXNlckRhdGEuc2hvd0FkdmFuY2VkfVxuICAgICAgICAgICAgLmRpc2FibGVkPSR7dGhpcy5jb3JlVXNlckRhdGEgPT09IHVuZGVmaW5lZH1cbiAgICAgICAgICAgIEBjaGFuZ2U9JHt0aGlzLl9hZHZhbmNlZFRvZ2dsZWR9XG4gICAgICAgICAgPjwvaGEtc3dpdGNoPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtY29udGVudFwiPlxuICAgICAgICAgIOeJp+WFu+eKrCBoaWRlcyBhZHZhbmNlZCBmZWF0dXJlcyBhbmQgb3B0aW9ucyBieSBkZWZhdWx0LiBZb3UgY2FuIG1ha2VcbiAgICAgICAgICB0aGVzZSBmZWF0dXJlcyBhY2Nlc3NpYmxlIGJ5IGNoZWNraW5nIHRoaXMgdG9nZ2xlLiBUaGlzIGlzIGFcbiAgICAgICAgICB1c2VyLXNwZWNpZmljIHNldHRpbmcgYW5kIGRvZXMgbm90IGltcGFjdCBvdGhlciB1c2VycyB1c2luZyBIb21lXG4gICAgICAgICAgQXNzaXN0YW50LlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvaGEtY2FyZD5cbiAgICBgO1xuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBfYWR2YW5jZWRUb2dnbGVkKGV2KSB7XG4gICAgZ2V0T3B0aW1pc3RpY0Zyb250ZW5kVXNlckRhdGFDb2xsZWN0aW9uKHRoaXMuaGFzcy5jb25uZWN0aW9uLCBcImNvcmVcIikuc2F2ZSh7XG4gICAgICBzaG93QWR2YW5jZWQ6IGV2LmN1cnJlbnRUYXJnZXQuY2hlY2tlZCxcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgc3R5bGVzKCk6IENTU1Jlc3VsdCB7XG4gICAgcmV0dXJuIGNzc2BcbiAgICAgIC5jYXJkLWhlYWRlciB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICB9XG4gICAgICAudGl0bGUge1xuICAgICAgICBmbGV4OiAxO1xuICAgICAgfVxuICAgIGA7XG4gIH1cbn1cblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgSFRNTEVsZW1lbnRUYWdOYW1lTWFwIHtcbiAgICBcImhhLWFkdmFuY2VkLW1vZGUtY2FyZFwiOiBBZHZhbmNlZE1vZGVDYXJkO1xuICB9XG59XG4iLCJpbXBvcnQgXCJAbWF0ZXJpYWwvbXdjLWJ1dHRvblwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItZGlhbG9nL3BhcGVyLWRpYWxvZ1wiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItc3Bpbm5lci9wYXBlci1zcGlubmVyXCI7XG5pbXBvcnQgeyBodG1sIH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2h0bWwtdGFnXCI7XG5pbXBvcnQgeyBQb2x5bWVyRWxlbWVudCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL3BvbHltZXItZWxlbWVudFwiO1xuaW1wb3J0IFwiLi4vLi4vY29tcG9uZW50cy9oYS1jYXJkXCI7XG5cbmltcG9ydCBMb2NhbGl6ZU1peGluIGZyb20gXCIuLi8uLi9taXhpbnMvbG9jYWxpemUtbWl4aW5cIjtcblxuaW1wb3J0IFwiLi4vLi4vcmVzb3VyY2VzL2hhLXN0eWxlXCI7XG5cbi8qXG4gKiBAYXBwbGllc01peGluIExvY2FsaXplTWl4aW5cbiAqL1xuY2xhc3MgSGFDaGFuZ2VQYXNzd29yZENhcmQgZXh0ZW5kcyBMb2NhbGl6ZU1peGluKFBvbHltZXJFbGVtZW50KSB7XG4gIHN0YXRpYyBnZXQgdGVtcGxhdGUoKSB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8c3R5bGUgaW5jbHVkZT1cImhhLXN0eWxlXCI+XG4gICAgICAgIC5lcnJvciB7XG4gICAgICAgICAgY29sb3I6IHJlZDtcbiAgICAgICAgfVxuICAgICAgICAuc3RhdHVzIHtcbiAgICAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XG4gICAgICAgIH1cbiAgICAgICAgLmVycm9yLFxuICAgICAgICAuc3RhdHVzIHtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgdG9wOiAtNHB4O1xuICAgICAgICB9XG4gICAgICAgIC5jdXJyZW50UGFzc3dvcmQge1xuICAgICAgICAgIG1hcmdpbi10b3A6IC00cHg7XG4gICAgICAgIH1cbiAgICAgIDwvc3R5bGU+XG4gICAgICA8ZGl2PlxuICAgICAgICA8aGEtY2FyZFxuICAgICAgICAgIGhlYWRlcj1cIltbbG9jYWxpemUoJ3VpLnBhbmVsLnByb2ZpbGUuY2hhbmdlX3Bhc3N3b3JkLmhlYWRlcicpXV1cIlxuICAgICAgICA+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtY29udGVudFwiPlxuICAgICAgICAgICAgPHRlbXBsYXRlIGlzPVwiZG9tLWlmXCIgaWY9XCJbW19lcnJvck1zZ11dXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJlcnJvclwiPltbX2Vycm9yTXNnXV08L2Rpdj5cbiAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgICA8dGVtcGxhdGUgaXM9XCJkb20taWZcIiBpZj1cIltbX3N0YXR1c01zZ11dXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzdGF0dXNcIj5bW19zdGF0dXNNc2ddXTwvZGl2PlxuICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICAgIDxwYXBlci1pbnB1dFxuICAgICAgICAgICAgICBjbGFzcz1cImN1cnJlbnRQYXNzd29yZFwiXG4gICAgICAgICAgICAgIGxhYmVsPVwiW1tsb2NhbGl6ZSgndWkucGFuZWwucHJvZmlsZS5jaGFuZ2VfcGFzc3dvcmQuY3VycmVudF9wYXNzd29yZCcpXV1cIlxuICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICB2YWx1ZT1cInt7X2N1cnJlbnRQYXNzd29yZH19XCJcbiAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgYXV0by12YWxpZGF0ZVxuICAgICAgICAgICAgICBlcnJvci1tZXNzYWdlPVwiW1tsb2NhbGl6ZSgndWkucGFuZWwucHJvZmlsZS5jaGFuZ2VfcGFzc3dvcmQuZXJyb3JfcmVxdWlyZWQnKV1dXCJcbiAgICAgICAgICAgID48L3BhcGVyLWlucHV0PlxuICAgICAgICAgICAgPHRlbXBsYXRlIGlzPVwiZG9tLWlmXCIgaWY9XCJbW19jdXJyZW50UGFzc3dvcmRdXVwiPlxuICAgICAgICAgICAgICA8cGFwZXItaW5wdXRcbiAgICAgICAgICAgICAgICBsYWJlbD1cIltbbG9jYWxpemUoJ3VpLnBhbmVsLnByb2ZpbGUuY2hhbmdlX3Bhc3N3b3JkLm5ld19wYXNzd29yZCcpXV1cIlxuICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgdmFsdWU9XCJ7e19wYXNzd29yZDF9fVwiXG4gICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICBhdXRvLXZhbGlkYXRlXG4gICAgICAgICAgICAgICAgZXJyb3ItbWVzc2FnZT1cIltbbG9jYWxpemUoJ3VpLnBhbmVsLnByb2ZpbGUuY2hhbmdlX3Bhc3N3b3JkLmVycm9yX3JlcXVpcmVkJyldXVwiXG4gICAgICAgICAgICAgID48L3BhcGVyLWlucHV0PlxuICAgICAgICAgICAgICA8cGFwZXItaW5wdXRcbiAgICAgICAgICAgICAgICBsYWJlbD1cIltbbG9jYWxpemUoJ3VpLnBhbmVsLnByb2ZpbGUuY2hhbmdlX3Bhc3N3b3JkLmNvbmZpcm1fbmV3X3Bhc3N3b3JkJyldXVwiXG4gICAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICB2YWx1ZT1cInt7X3Bhc3N3b3JkMn19XCJcbiAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICAgIGF1dG8tdmFsaWRhdGVcbiAgICAgICAgICAgICAgICBlcnJvci1tZXNzYWdlPVwiW1tsb2NhbGl6ZSgndWkucGFuZWwucHJvZmlsZS5jaGFuZ2VfcGFzc3dvcmQuZXJyb3JfcmVxdWlyZWQnKV1dXCJcbiAgICAgICAgICAgICAgPjwvcGFwZXItaW5wdXQ+XG4gICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWFjdGlvbnNcIj5cbiAgICAgICAgICAgIDx0ZW1wbGF0ZSBpcz1cImRvbS1pZlwiIGlmPVwiW1tfbG9hZGluZ11dXCI+XG4gICAgICAgICAgICAgIDxkaXY+PHBhcGVyLXNwaW5uZXIgYWN0aXZlPjwvcGFwZXItc3Bpbm5lcj48L2Rpdj5cbiAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgICA8dGVtcGxhdGUgaXM9XCJkb20taWZcIiBpZj1cIltbIV9sb2FkaW5nXV1cIj5cbiAgICAgICAgICAgICAgPG13Yy1idXR0b24gb24tY2xpY2s9XCJfY2hhbmdlUGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgID5bW2xvY2FsaXplKCd1aS5wYW5lbC5wcm9maWxlLmNoYW5nZV9wYXNzd29yZC5zdWJtaXQnKV1dPC9td2MtYnV0dG9uXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvaGEtY2FyZD5cbiAgICAgIDwvZGl2PlxuICAgIGA7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGhhc3M6IE9iamVjdCxcblxuICAgICAgX2xvYWRpbmc6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgdmFsdWU6IGZhbHNlLFxuICAgICAgfSxcblxuICAgICAgLy8gRXJyb3IgbWVzc2FnZSB3aGVuIGNhbid0IHRhbGsgdG8gc2VydmVyIGV0Y1xuICAgICAgX3N0YXR1c01zZzogU3RyaW5nLFxuICAgICAgX2Vycm9yTXNnOiBTdHJpbmcsXG5cbiAgICAgIF9jdXJyZW50UGFzc3dvcmQ6IFN0cmluZyxcbiAgICAgIF9wYXNzd29yZDE6IFN0cmluZyxcbiAgICAgIF9wYXNzd29yZDI6IFN0cmluZyxcbiAgICB9O1xuICB9XG5cbiAgcmVhZHkoKSB7XG4gICAgc3VwZXIucmVhZHkoKTtcbiAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlwcmVzc1wiLCAoZXYpID0+IHtcbiAgICAgIHRoaXMuX3N0YXR1c01zZyA9IG51bGw7XG4gICAgICBpZiAoZXYua2V5Q29kZSA9PT0gMTMpIHtcbiAgICAgICAgdGhpcy5fY2hhbmdlUGFzc3dvcmQoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGFzeW5jIF9jaGFuZ2VQYXNzd29yZCgpIHtcbiAgICB0aGlzLl9zdGF0dXNNc2cgPSBudWxsO1xuICAgIGlmICghdGhpcy5fY3VycmVudFBhc3N3b3JkIHx8ICF0aGlzLl9wYXNzd29yZDEgfHwgIXRoaXMuX3Bhc3N3b3JkMikgcmV0dXJuO1xuXG4gICAgaWYgKHRoaXMuX3Bhc3N3b3JkMSAhPT0gdGhpcy5fcGFzc3dvcmQyKSB7XG4gICAgICB0aGlzLl9lcnJvck1zZyA9IFwiTmV3IHBhc3N3b3JkIGNvbmZpcm1hdGlvbiBkb2Vzbid0IG1hdGNoXCI7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2N1cnJlbnRQYXNzd29yZCA9PT0gdGhpcy5fcGFzc3dvcmQxKSB7XG4gICAgICB0aGlzLl9lcnJvck1zZyA9IFwiTmV3IHBhc3N3b3JkIG11c3QgYmUgZGlmZmVyZW50IHRoYW4gY3VycmVudCBwYXNzd29yZFwiO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuX2xvYWRpbmcgPSB0cnVlO1xuICAgIHRoaXMuX2Vycm9yTXNnID0gbnVsbDtcblxuICAgIHRyeSB7XG4gICAgICBhd2FpdCB0aGlzLmhhc3MuY2FsbFdTKHtcbiAgICAgICAgdHlwZTogXCJjb25maWcvYXV0aF9wcm92aWRlci9ob21lYXNzaXN0YW50L2NoYW5nZV9wYXNzd29yZFwiLFxuICAgICAgICBjdXJyZW50X3Bhc3N3b3JkOiB0aGlzLl9jdXJyZW50UGFzc3dvcmQsXG4gICAgICAgIG5ld19wYXNzd29yZDogdGhpcy5fcGFzc3dvcmQxLFxuICAgICAgfSk7XG5cbiAgICAgIHRoaXMuc2V0UHJvcGVydGllcyh7XG4gICAgICAgIF9zdGF0dXNNc2c6IFwiUGFzc3dvcmQgY2hhbmdlZCBzdWNjZXNzZnVsbHlcIixcbiAgICAgICAgX2N1cnJlbnRQYXNzd29yZDogbnVsbCxcbiAgICAgICAgX3Bhc3N3b3JkMTogbnVsbCxcbiAgICAgICAgX3Bhc3N3b3JkMjogbnVsbCxcbiAgICAgIH0pO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgdGhpcy5fZXJyb3JNc2cgPSBlcnIubWVzc2FnZTtcbiAgICB9XG5cbiAgICB0aGlzLl9sb2FkaW5nID0gZmFsc2U7XG4gIH1cbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwiaGEtY2hhbmdlLXBhc3N3b3JkLWNhcmRcIiwgSGFDaGFuZ2VQYXNzd29yZENhcmQpO1xuIiwiaW1wb3J0IHtcbiAgTGl0RWxlbWVudCxcbiAgVGVtcGxhdGVSZXN1bHQsXG4gIGh0bWwsXG4gIHByb3BlcnR5LFxuICBjdXN0b21FbGVtZW50LFxufSBmcm9tIFwibGl0LWVsZW1lbnRcIjtcblxuaW1wb3J0IFwiLi9oYS1zZXR0aW5ncy1yb3dcIjtcbmltcG9ydCBcIi4uLy4uL2NvbXBvbmVudHMvaGEtc3dpdGNoXCI7XG5cbmltcG9ydCB7IEhvbWVBc3Npc3RhbnQgfSBmcm9tIFwiLi4vLi4vdHlwZXNcIjtcbmltcG9ydCB7IGZpcmVFdmVudCB9IGZyb20gXCIuLi8uLi9jb21tb24vZG9tL2ZpcmVfZXZlbnRcIjtcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tZHVwbGljYXRlLWltcG9ydHNcbmltcG9ydCB7IEhhU3dpdGNoIH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvaGEtc3dpdGNoXCI7XG5cbkBjdXN0b21FbGVtZW50KFwiaGEtZm9yY2UtbmFycm93LXJvd1wiKVxuY2xhc3MgSGFGb3JjZWROYXJyb3dSb3cgZXh0ZW5kcyBMaXRFbGVtZW50IHtcbiAgQHByb3BlcnR5KCkgcHVibGljIGhhc3MhOiBIb21lQXNzaXN0YW50O1xuICBAcHJvcGVydHkoKSBwdWJsaWMgbmFycm93ITogYm9vbGVhbjtcblxuICBwcm90ZWN0ZWQgcmVuZGVyKCk6IFRlbXBsYXRlUmVzdWx0IHwgdm9pZCB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8aGEtc2V0dGluZ3Mtcm93IC5uYXJyb3c9JHt0aGlzLm5hcnJvd30+XG4gICAgICAgIDxzcGFuIHNsb3Q9XCJoZWFkaW5nXCI+XG4gICAgICAgICAgJHt0aGlzLmhhc3MubG9jYWxpemUoXCJ1aS5wYW5lbC5wcm9maWxlLmZvcmNlX25hcnJvdy5oZWFkZXJcIil9XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPHNwYW4gc2xvdD1cImRlc2NyaXB0aW9uXCI+XG4gICAgICAgICAgJHt0aGlzLmhhc3MubG9jYWxpemUoXCJ1aS5wYW5lbC5wcm9maWxlLmZvcmNlX25hcnJvdy5kZXNjcmlwdGlvblwiKX1cbiAgICAgICAgPC9zcGFuPlxuICAgICAgICA8aGEtc3dpdGNoXG4gICAgICAgICAgLmNoZWNrZWQ9JHt0aGlzLmhhc3MuZG9ja2VkU2lkZWJhciA9PT0gXCJhbHdheXNfaGlkZGVuXCJ9XG4gICAgICAgICAgQGNoYW5nZT0ke3RoaXMuX2NoZWNrZWRDaGFuZ2VkfVxuICAgICAgICA+PC9oYS1zd2l0Y2g+XG4gICAgICA8L2hhLXNldHRpbmdzLXJvdz5cbiAgICBgO1xuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBfY2hlY2tlZENoYW5nZWQoZXY6IEV2ZW50KSB7XG4gICAgY29uc3QgbmV3VmFsdWUgPSAoZXYudGFyZ2V0IGFzIEhhU3dpdGNoKS5jaGVja2VkO1xuICAgIGlmIChuZXdWYWx1ZSA9PT0gKHRoaXMuaGFzcy5kb2NrZWRTaWRlYmFyID09PSBcImFsd2F5c19oaWRkZW5cIikpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZmlyZUV2ZW50KHRoaXMsIFwiaGFzcy1kb2NrLXNpZGViYXJcIiwge1xuICAgICAgZG9jazogbmV3VmFsdWUgPyBcImFsd2F5c19oaWRkZW5cIiA6IFwiYXV0b1wiLFxuICAgIH0pO1xuICB9XG59XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIEhUTUxFbGVtZW50VGFnTmFtZU1hcCB7XG4gICAgXCJoYS1mb3JjZS1uYXJyb3ctcm93XCI6IEhhRm9yY2VkTmFycm93Um93O1xuICB9XG59XG4iLCJpbXBvcnQgXCJAbWF0ZXJpYWwvbXdjLWJ1dHRvblwiO1xuXG5pbXBvcnQgeyBodG1sIH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2h0bWwtdGFnXCI7XG5pbXBvcnQgeyBQb2x5bWVyRWxlbWVudCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL3BvbHltZXItZWxlbWVudFwiO1xuaW1wb3J0IHsgRXZlbnRzTWl4aW4gfSBmcm9tIFwiLi4vLi4vbWl4aW5zL2V2ZW50cy1taXhpblwiO1xuaW1wb3J0IExvY2FsaXplTWl4aW4gZnJvbSBcIi4uLy4uL21peGlucy9sb2NhbGl6ZS1taXhpblwiO1xuaW1wb3J0IGZvcm1hdERhdGVUaW1lIGZyb20gXCIuLi8uLi9jb21tb24vZGF0ZXRpbWUvZm9ybWF0X2RhdGVfdGltZVwiO1xuaW1wb3J0IFwiLi4vLi4vY29tcG9uZW50cy9oYS1jYXJkXCI7XG5cbmltcG9ydCBcIi4uLy4uL3Jlc291cmNlcy9oYS1zdHlsZVwiO1xuXG5pbXBvcnQgXCIuL2hhLXNldHRpbmdzLXJvd1wiO1xuXG4vKlxuICogQGFwcGxpZXNNaXhpbiBFdmVudHNNaXhpblxuICogQGFwcGxpZXNNaXhpbiBMb2NhbGl6ZU1peGluXG4gKi9cbmNsYXNzIEhhTG9uZ0xpdmVkVG9rZW5zIGV4dGVuZHMgTG9jYWxpemVNaXhpbihFdmVudHNNaXhpbihQb2x5bWVyRWxlbWVudCkpIHtcbiAgc3RhdGljIGdldCB0ZW1wbGF0ZSgpIHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxzdHlsZSBpbmNsdWRlPVwiaGEtc3R5bGVcIj5cbiAgICAgICAgLmNhcmQtY29udGVudCB7XG4gICAgICAgICAgbWFyZ2luOiAtMWVtIDA7XG4gICAgICAgIH1cbiAgICAgICAgYSB7XG4gICAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xuICAgICAgICB9XG4gICAgICAgIHBhcGVyLWljb24tYnV0dG9uIHtcbiAgICAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS10ZXh0LWNvbG9yKTtcbiAgICAgICAgfVxuICAgICAgPC9zdHlsZT5cbiAgICAgIDxoYS1jYXJkXG4gICAgICAgIGhlYWRlcj1cIltbbG9jYWxpemUoJ3VpLnBhbmVsLnByb2ZpbGUubG9uZ19saXZlZF9hY2Nlc3NfdG9rZW5zLmhlYWRlcicpXV1cIlxuICAgICAgPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1jb250ZW50XCI+XG4gICAgICAgICAgPHA+XG4gICAgICAgICAgICBbW2xvY2FsaXplKCd1aS5wYW5lbC5wcm9maWxlLmxvbmdfbGl2ZWRfYWNjZXNzX3Rva2Vucy5kZXNjcmlwdGlvbicpXV1cbiAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgIGhyZWY9XCJodHRwczovL2RldmVsb3BlcnMuaG9tZS1hc3Npc3RhbnQuaW8vZG9jcy9lbi9hdXRoX2FwaS5odG1sI21ha2luZy1hdXRoZW50aWNhdGVkLXJlcXVlc3RzXCJcbiAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgW1tsb2NhbGl6ZSgndWkucGFuZWwucHJvZmlsZS5sb25nX2xpdmVkX2FjY2Vzc190b2tlbnMubGVhcm5fYXV0aF9yZXF1ZXN0cycpXV1cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8L3A+XG4gICAgICAgICAgPHRlbXBsYXRlIGlzPVwiZG9tLWlmXCIgaWY9XCJbWyFfdG9rZW5zLmxlbmd0aF1dXCI+XG4gICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgW1tsb2NhbGl6ZSgndWkucGFuZWwucHJvZmlsZS5sb25nX2xpdmVkX2FjY2Vzc190b2tlbnMuZW1wdHlfc3RhdGUnKV1dXG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDx0ZW1wbGF0ZSBpcz1cImRvbS1yZXBlYXRcIiBpdGVtcz1cIltbX3Rva2Vuc11dXCI+XG4gICAgICAgICAgPGhhLXNldHRpbmdzLXJvdyB0d28tbGluZT5cbiAgICAgICAgICAgIDxzcGFuIHNsb3Q9XCJoZWFkaW5nXCI+W1tpdGVtLmNsaWVudF9uYW1lXV08L3NwYW4+XG4gICAgICAgICAgICA8ZGl2IHNsb3Q9XCJkZXNjcmlwdGlvblwiPltbX2Zvcm1hdENyZWF0ZWRBdChpdGVtLmNyZWF0ZWRfYXQpXV08L2Rpdj5cbiAgICAgICAgICAgIDxwYXBlci1pY29uLWJ1dHRvblxuICAgICAgICAgICAgICBpY29uPVwiaGFzczpkZWxldGVcIlxuICAgICAgICAgICAgICBvbi1jbGljaz1cIl9oYW5kbGVEZWxldGVcIlxuICAgICAgICAgICAgPjwvcGFwZXItaWNvbi1idXR0b24+XG4gICAgICAgICAgPC9oYS1zZXR0aW5ncy1yb3c+XG4gICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWFjdGlvbnNcIj5cbiAgICAgICAgICA8bXdjLWJ1dHRvbiBvbi1jbGljaz1cIl9oYW5kbGVDcmVhdGVcIj5cbiAgICAgICAgICAgIFtbbG9jYWxpemUoJ3VpLnBhbmVsLnByb2ZpbGUubG9uZ19saXZlZF9hY2Nlc3NfdG9rZW5zLmNyZWF0ZScpXV1cbiAgICAgICAgICA8L213Yy1idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9oYS1jYXJkPlxuICAgIGA7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGhhc3M6IE9iamVjdCxcbiAgICAgIHJlZnJlc2hUb2tlbnM6IEFycmF5LFxuICAgICAgX3Rva2Vuczoge1xuICAgICAgICB0eXBlOiBBcnJheSxcbiAgICAgICAgY29tcHV0ZWQ6IFwiX2NvbXB1dGVUb2tlbnMocmVmcmVzaFRva2VucylcIixcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxuXG4gIF9jb21wdXRlVG9rZW5zKHJlZnJlc2hUb2tlbnMpIHtcbiAgICByZXR1cm4gcmVmcmVzaFRva2Vuc1xuICAgICAgLmZpbHRlcigodGtuKSA9PiB0a24udHlwZSA9PT0gXCJsb25nX2xpdmVkX2FjY2Vzc190b2tlblwiKVxuICAgICAgLnJldmVyc2UoKTtcbiAgfVxuXG4gIF9mb3JtYXRUaXRsZShuYW1lKSB7XG4gICAgcmV0dXJuIHRoaXMubG9jYWxpemUoXG4gICAgICBcInVpLnBhbmVsLnByb2ZpbGUubG9uZ19saXZlZF9hY2Nlc3NfdG9rZW5zLnRva2VuX3RpdGxlXCIsXG4gICAgICBcIm5hbWVcIixcbiAgICAgIG5hbWVcbiAgICApO1xuICB9XG5cbiAgX2Zvcm1hdENyZWF0ZWRBdChjcmVhdGVkKSB7XG4gICAgcmV0dXJuIHRoaXMubG9jYWxpemUoXG4gICAgICBcInVpLnBhbmVsLnByb2ZpbGUubG9uZ19saXZlZF9hY2Nlc3NfdG9rZW5zLmNyZWF0ZWRfYXRcIixcbiAgICAgIFwiZGF0ZVwiLFxuICAgICAgZm9ybWF0RGF0ZVRpbWUobmV3IERhdGUoY3JlYXRlZCksIHRoaXMuaGFzcy5sYW5ndWFnZSlcbiAgICApO1xuICB9XG5cbiAgYXN5bmMgX2hhbmRsZUNyZWF0ZSgpIHtcbiAgICBjb25zdCBuYW1lID0gcHJvbXB0KFxuICAgICAgdGhpcy5sb2NhbGl6ZShcInVpLnBhbmVsLnByb2ZpbGUubG9uZ19saXZlZF9hY2Nlc3NfdG9rZW5zLnByb21wdF9uYW1lXCIpXG4gICAgKTtcbiAgICBpZiAoIW5hbWUpIHJldHVybjtcbiAgICB0cnkge1xuICAgICAgY29uc3QgdG9rZW4gPSBhd2FpdCB0aGlzLmhhc3MuY2FsbFdTKHtcbiAgICAgICAgdHlwZTogXCJhdXRoL2xvbmdfbGl2ZWRfYWNjZXNzX3Rva2VuXCIsXG4gICAgICAgIGxpZmVzcGFuOiAzNjUwLFxuICAgICAgICBjbGllbnRfbmFtZTogbmFtZSxcbiAgICAgIH0pO1xuICAgICAgcHJvbXB0KFxuICAgICAgICB0aGlzLmxvY2FsaXplKFxuICAgICAgICAgIFwidWkucGFuZWwucHJvZmlsZS5sb25nX2xpdmVkX2FjY2Vzc190b2tlbnMucHJvbXB0X2NvcHlfdG9rZW5cIlxuICAgICAgICApLFxuICAgICAgICB0b2tlblxuICAgICAgKTtcbiAgICAgIHRoaXMuZmlyZShcImhhc3MtcmVmcmVzaC10b2tlbnNcIik7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICAgIGFsZXJ0KFxuICAgICAgICB0aGlzLmxvY2FsaXplKFwidWkucGFuZWwucHJvZmlsZS5sb25nX2xpdmVkX2FjY2Vzc190b2tlbnMuY3JlYXRlX2ZhaWxlZFwiKVxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBhc3luYyBfaGFuZGxlRGVsZXRlKGV2KSB7XG4gICAgaWYgKFxuICAgICAgIWNvbmZpcm0oXG4gICAgICAgIHRoaXMubG9jYWxpemUoXG4gICAgICAgICAgXCJ1aS5wYW5lbC5wcm9maWxlLmxvbmdfbGl2ZWRfYWNjZXNzX3Rva2Vucy5jb25maXJtX2RlbGV0ZVwiLFxuICAgICAgICAgIFwibmFtZVwiLFxuICAgICAgICAgIGV2Lm1vZGVsLml0ZW0uY2xpZW50X25hbWVcbiAgICAgICAgKVxuICAgICAgKVxuICAgICkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgYXdhaXQgdGhpcy5oYXNzLmNhbGxXUyh7XG4gICAgICAgIHR5cGU6IFwiYXV0aC9kZWxldGVfcmVmcmVzaF90b2tlblwiLFxuICAgICAgICByZWZyZXNoX3Rva2VuX2lkOiBldi5tb2RlbC5pdGVtLmlkLFxuICAgICAgfSk7XG4gICAgICB0aGlzLmZpcmUoXCJoYXNzLXJlZnJlc2gtdG9rZW5zXCIpO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXG4gICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgICBhbGVydChcbiAgICAgICAgdGhpcy5sb2NhbGl6ZShcInVpLnBhbmVsLnByb2ZpbGUubG9uZ19saXZlZF9hY2Nlc3NfdG9rZW5zLmRlbGV0ZV9mYWlsZWRcIilcbiAgICAgICk7XG4gICAgfVxuICB9XG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcImhhLWxvbmctbGl2ZWQtYWNjZXNzLXRva2Vucy1jYXJkXCIsIEhhTG9uZ0xpdmVkVG9rZW5zKTtcbiIsImltcG9ydCBcIkBtYXRlcmlhbC9td2MtYnV0dG9uXCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1pdGVtL3BhcGVyLWl0ZW0tYm9keVwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItaXRlbS9wYXBlci1pdGVtXCI7XG5pbXBvcnQgeyBodG1sIH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2h0bWwtdGFnXCI7XG5pbXBvcnQgeyBQb2x5bWVyRWxlbWVudCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL3BvbHltZXItZWxlbWVudFwiO1xuaW1wb3J0IFwiLi4vLi4vY29tcG9uZW50cy9oYS1jYXJkXCI7XG5cbmltcG9ydCBcIi4uLy4uL3Jlc291cmNlcy9oYS1zdHlsZVwiO1xuXG5pbXBvcnQgeyBFdmVudHNNaXhpbiB9IGZyb20gXCIuLi8uLi9taXhpbnMvZXZlbnRzLW1peGluXCI7XG5pbXBvcnQgTG9jYWxpemVNaXhpbiBmcm9tIFwiLi4vLi4vbWl4aW5zL2xvY2FsaXplLW1peGluXCI7XG5cbmxldCByZWdpc3RlcmVkRGlhbG9nID0gZmFsc2U7XG5cbi8qXG4gKiBAYXBwbGllc01peGluIEV2ZW50c01peGluXG4gKiBAYXBwbGllc01peGluIExvY2FsaXplTWl4aW5cbiAqL1xuY2xhc3MgSGFNZmFNb2R1bGVzQ2FyZCBleHRlbmRzIEV2ZW50c01peGluKExvY2FsaXplTWl4aW4oUG9seW1lckVsZW1lbnQpKSB7XG4gIHN0YXRpYyBnZXQgdGVtcGxhdGUoKSB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8c3R5bGUgaW5jbHVkZT1cImlyb24tZmxleCBoYS1zdHlsZVwiPlxuICAgICAgICAuZXJyb3Ige1xuICAgICAgICAgIGNvbG9yOiByZWQ7XG4gICAgICAgIH1cbiAgICAgICAgLnN0YXR1cyB7XG4gICAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xuICAgICAgICB9XG4gICAgICAgIC5lcnJvcixcbiAgICAgICAgLnN0YXR1cyB7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIHRvcDogLTRweDtcbiAgICAgICAgfVxuICAgICAgICBtd2MtYnV0dG9uIHtcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IC0wLjU3ZW07XG4gICAgICAgIH1cbiAgICAgIDwvc3R5bGU+XG4gICAgICA8aGEtY2FyZCBoZWFkZXI9XCJbW2xvY2FsaXplKCd1aS5wYW5lbC5wcm9maWxlLm1mYS5oZWFkZXInKV1dXCI+XG4gICAgICAgIDx0ZW1wbGF0ZSBpcz1cImRvbS1yZXBlYXRcIiBpdGVtcz1cIltbbWZhTW9kdWxlc11dXCIgYXM9XCJtb2R1bGVcIj5cbiAgICAgICAgICA8cGFwZXItaXRlbT5cbiAgICAgICAgICAgIDxwYXBlci1pdGVtLWJvZHkgdHdvLWxpbmU9XCJcIj5cbiAgICAgICAgICAgICAgPGRpdj5bW21vZHVsZS5uYW1lXV08L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBzZWNvbmRhcnk9XCJcIj5bW21vZHVsZS5pZF1dPC9kaXY+XG4gICAgICAgICAgICA8L3BhcGVyLWl0ZW0tYm9keT5cbiAgICAgICAgICAgIDx0ZW1wbGF0ZSBpcz1cImRvbS1pZlwiIGlmPVwiW1ttb2R1bGUuZW5hYmxlZF1dXCI+XG4gICAgICAgICAgICAgIDxtd2MtYnV0dG9uIG9uLWNsaWNrPVwiX2Rpc2FibGVcIlxuICAgICAgICAgICAgICAgID5bW2xvY2FsaXplKCd1aS5wYW5lbC5wcm9maWxlLm1mYS5kaXNhYmxlJyldXTwvbXdjLWJ1dHRvblxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgICAgPHRlbXBsYXRlIGlzPVwiZG9tLWlmXCIgaWY9XCJbWyFtb2R1bGUuZW5hYmxlZF1dXCI+XG4gICAgICAgICAgICAgIDxtd2MtYnV0dG9uIG9uLWNsaWNrPVwiX2VuYWJsZVwiXG4gICAgICAgICAgICAgICAgPltbbG9jYWxpemUoJ3VpLnBhbmVsLnByb2ZpbGUubWZhLmVuYWJsZScpXV08L213Yy1idXR0b25cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICA8L3BhcGVyLWl0ZW0+XG4gICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICA8L2hhLWNhcmQ+XG4gICAgYDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaGFzczogT2JqZWN0LFxuXG4gICAgICBfbG9hZGluZzoge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICB2YWx1ZTogZmFsc2UsXG4gICAgICB9LFxuXG4gICAgICAvLyBFcnJvciBtZXNzYWdlIHdoZW4gY2FuJ3QgdGFsayB0byBzZXJ2ZXIgZXRjXG4gICAgICBfc3RhdHVzTXNnOiBTdHJpbmcsXG4gICAgICBfZXJyb3JNc2c6IFN0cmluZyxcblxuICAgICAgbWZhTW9kdWxlczogQXJyYXksXG4gICAgfTtcbiAgfVxuXG4gIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIHN1cGVyLmNvbm5lY3RlZENhbGxiYWNrKCk7XG5cbiAgICBpZiAoIXJlZ2lzdGVyZWREaWFsb2cpIHtcbiAgICAgIHJlZ2lzdGVyZWREaWFsb2cgPSB0cnVlO1xuICAgICAgdGhpcy5maXJlKFwicmVnaXN0ZXItZGlhbG9nXCIsIHtcbiAgICAgICAgZGlhbG9nU2hvd0V2ZW50OiBcInNob3ctbWZhLW1vZHVsZS1zZXR1cC1mbG93XCIsXG4gICAgICAgIGRpYWxvZ1RhZzogXCJoYS1tZmEtbW9kdWxlLXNldHVwLWZsb3dcIixcbiAgICAgICAgZGlhbG9nSW1wb3J0OiAoKSA9PlxuICAgICAgICAgIGltcG9ydCgvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcImhhLW1mYS1tb2R1bGUtc2V0dXAtZmxvd1wiICovIFwiLi9oYS1tZmEtbW9kdWxlLXNldHVwLWZsb3dcIiksXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBfZW5hYmxlKGV2KSB7XG4gICAgdGhpcy5maXJlKFwic2hvdy1tZmEtbW9kdWxlLXNldHVwLWZsb3dcIiwge1xuICAgICAgaGFzczogdGhpcy5oYXNzLFxuICAgICAgbWZhTW9kdWxlSWQ6IGV2Lm1vZGVsLm1vZHVsZS5pZCxcbiAgICAgIGRpYWxvZ0Nsb3NlZENhbGxiYWNrOiAoKSA9PiB0aGlzLl9yZWZyZXNoQ3VycmVudFVzZXIoKSxcbiAgICB9KTtcbiAgfVxuXG4gIF9kaXNhYmxlKGV2KSB7XG4gICAgaWYgKFxuICAgICAgIWNvbmZpcm0oXG4gICAgICAgIHRoaXMubG9jYWxpemUoXG4gICAgICAgICAgXCJ1aS5wYW5lbC5wcm9maWxlLm1mYS5jb25maXJtX2Rpc2FibGVcIixcbiAgICAgICAgICBcIm5hbWVcIixcbiAgICAgICAgICBldi5tb2RlbC5tb2R1bGUubmFtZVxuICAgICAgICApXG4gICAgICApXG4gICAgKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgbWZhTW9kdWxlSWQgPSBldi5tb2RlbC5tb2R1bGUuaWQ7XG5cbiAgICB0aGlzLmhhc3NcbiAgICAgIC5jYWxsV1Moe1xuICAgICAgICB0eXBlOiBcImF1dGgvZGVwb3NlX21mYVwiLFxuICAgICAgICBtZmFfbW9kdWxlX2lkOiBtZmFNb2R1bGVJZCxcbiAgICAgIH0pXG4gICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgIHRoaXMuX3JlZnJlc2hDdXJyZW50VXNlcigpO1xuICAgICAgfSk7XG4gIH1cblxuICBfcmVmcmVzaEN1cnJlbnRVc2VyKCkge1xuICAgIHRoaXMuZmlyZShcImhhc3MtcmVmcmVzaC1jdXJyZW50LXVzZXJcIik7XG4gIH1cbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwiaGEtbWZhLW1vZHVsZXMtY2FyZFwiLCBIYU1mYU1vZHVsZXNDYXJkKTtcbiIsImltcG9ydCBcIkBwb2x5bWVyL2FwcC1sYXlvdXQvYXBwLWhlYWRlci1sYXlvdXQvYXBwLWhlYWRlci1sYXlvdXRcIjtcbmltcG9ydCBcIkBwb2x5bWVyL2FwcC1sYXlvdXQvYXBwLWhlYWRlci9hcHAtaGVhZGVyXCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1pdGVtL3BhcGVyLWl0ZW0tYm9keVwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItaXRlbS9wYXBlci1pdGVtXCI7XG5pbXBvcnQgXCJAbWF0ZXJpYWwvbXdjLWJ1dHRvblwiO1xuaW1wb3J0IFwiQHBvbHltZXIvYXBwLWxheW91dC9hcHAtdG9vbGJhci9hcHAtdG9vbGJhclwiO1xuXG5pbXBvcnQgXCIuLi8uLi9jb21wb25lbnRzL2hhLWNhcmRcIjtcbmltcG9ydCBcIi4uLy4uL2NvbXBvbmVudHMvaGEtbWVudS1idXR0b25cIjtcbmltcG9ydCBcIi4uLy4uL3Jlc291cmNlcy9oYS1zdHlsZVwiO1xuXG5pbXBvcnQge1xuICBnZXRPcHRpbWlzdGljRnJvbnRlbmRVc2VyRGF0YUNvbGxlY3Rpb24sXG4gIENvcmVGcm9udGVuZFVzZXJEYXRhLFxufSBmcm9tIFwiLi4vLi4vZGF0YS9mcm9udGVuZFwiO1xuXG5pbXBvcnQgXCIuL2hhLWNoYW5nZS1wYXNzd29yZC1jYXJkXCI7XG5pbXBvcnQgXCIuL2hhLW1mYS1tb2R1bGVzLWNhcmRcIjtcbmltcG9ydCBcIi4vaGEtYWR2YW5jZWQtbW9kZS1jYXJkXCI7XG5pbXBvcnQgXCIuL2hhLXJlZnJlc2gtdG9rZW5zLWNhcmRcIjtcbmltcG9ydCBcIi4vaGEtbG9uZy1saXZlZC1hY2Nlc3MtdG9rZW5zLWNhcmRcIjtcblxuaW1wb3J0IFwiLi9oYS1waWNrLWxhbmd1YWdlLXJvd1wiO1xuaW1wb3J0IFwiLi9oYS1waWNrLXRoZW1lLXJvd1wiO1xuaW1wb3J0IFwiLi9oYS1wdXNoLW5vdGlmaWNhdGlvbnMtcm93XCI7XG5pbXBvcnQgXCIuL2hhLWZvcmNlLW5hcnJvdy1yb3dcIjtcbmltcG9ydCBcIi4vaGEtc2V0LXZpYnJhdGUtcm93XCI7XG5pbXBvcnQge1xuICBMaXRFbGVtZW50LFxuICBUZW1wbGF0ZVJlc3VsdCxcbiAgaHRtbCxcbiAgQ1NTUmVzdWx0QXJyYXksXG4gIGNzcyxcbiAgcHJvcGVydHksXG59IGZyb20gXCJsaXQtZWxlbWVudFwiO1xuaW1wb3J0IHsgaGFTdHlsZSB9IGZyb20gXCIuLi8uLi9yZXNvdXJjZXMvc3R5bGVzXCI7XG5pbXBvcnQgeyBIb21lQXNzaXN0YW50IH0gZnJvbSBcIi4uLy4uL3R5cGVzXCI7XG5pbXBvcnQgeyBmaXJlRXZlbnQgfSBmcm9tIFwiLi4vLi4vY29tbW9uL2RvbS9maXJlX2V2ZW50XCI7XG5pbXBvcnQgeyBVbnN1YnNjcmliZUZ1bmMgfSBmcm9tIFwiaG9tZS1hc3Npc3RhbnQtanMtd2Vic29ja2V0XCI7XG5cbmNsYXNzIEhhUGFuZWxQcm9maWxlIGV4dGVuZHMgTGl0RWxlbWVudCB7XG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyBoYXNzITogSG9tZUFzc2lzdGFudDtcbiAgQHByb3BlcnR5KCkgcHVibGljIG5hcnJvdyE6IGJvb2xlYW47XG4gIEBwcm9wZXJ0eSgpIHByaXZhdGUgX3JlZnJlc2hUb2tlbnM/OiB1bmtub3duW107XG4gIEBwcm9wZXJ0eSgpIHByaXZhdGUgX2NvcmVVc2VyRGF0YT86IENvcmVGcm9udGVuZFVzZXJEYXRhIHwgbnVsbDtcbiAgcHJpdmF0ZSBfdW5zdWJDb3JlRGF0YT86IFVuc3Vic2NyaWJlRnVuYztcblxuICBwdWJsaWMgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgc3VwZXIuY29ubmVjdGVkQ2FsbGJhY2soKTtcbiAgICB0aGlzLl9yZWZyZXNoUmVmcmVzaFRva2VucygpO1xuICAgIHRoaXMuX3Vuc3ViQ29yZURhdGEgPSBnZXRPcHRpbWlzdGljRnJvbnRlbmRVc2VyRGF0YUNvbGxlY3Rpb24oXG4gICAgICB0aGlzLmhhc3MuY29ubmVjdGlvbixcbiAgICAgIFwiY29yZVwiXG4gICAgKS5zdWJzY3JpYmUoKGNvcmVVc2VyRGF0YSkgPT4ge1xuICAgICAgdGhpcy5fY29yZVVzZXJEYXRhID0gY29yZVVzZXJEYXRhO1xuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIGRpc2Nvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIHN1cGVyLmRpc2Nvbm5lY3RlZENhbGxiYWNrKCk7XG4gICAgaWYgKHRoaXMuX3Vuc3ViQ29yZURhdGEpIHtcbiAgICAgIHRoaXMuX3Vuc3ViQ29yZURhdGEoKTtcbiAgICAgIHRoaXMuX3Vuc3ViQ29yZURhdGEgPSB1bmRlZmluZWQ7XG4gICAgfVxuICB9XG5cbiAgcHJvdGVjdGVkIHJlbmRlcigpOiBUZW1wbGF0ZVJlc3VsdCB8IHZvaWQge1xuICAgIHJldHVybiBodG1sYFxuICAgICAgPGFwcC1oZWFkZXItbGF5b3V0IGhhcy1zY3JvbGxpbmctcmVnaW9uPlxuICAgICAgICA8YXBwLWhlYWRlciBzbG90PVwiaGVhZGVyXCIgZml4ZWQ+XG4gICAgICAgICAgPGFwcC10b29sYmFyPlxuICAgICAgICAgICAgPGhhLW1lbnUtYnV0dG9uXG4gICAgICAgICAgICAgIC5oYXNzPSR7dGhpcy5oYXNzfVxuICAgICAgICAgICAgICAubmFycm93PSR7dGhpcy5uYXJyb3d9XG4gICAgICAgICAgICA+PC9oYS1tZW51LWJ1dHRvbj5cbiAgICAgICAgICAgIDxkaXYgbWFpbi10aXRsZT4ke3RoaXMuaGFzcy5sb2NhbGl6ZShcInBhbmVsLnByb2ZpbGVcIil9PC9kaXY+XG4gICAgICAgICAgPC9hcHAtdG9vbGJhcj5cbiAgICAgICAgPC9hcHAtaGVhZGVyPlxuXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb250ZW50XCI+XG4gICAgICAgICAgPGhhLWNhcmQgLmhlYWRlcj0ke3RoaXMuaGFzcy51c2VyIS5uYW1lfT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgJHt0aGlzLmhhc3MubG9jYWxpemUoXG4gICAgICAgICAgICAgICAgXCJ1aS5wYW5lbC5wcm9maWxlLmN1cnJlbnRfdXNlclwiLFxuICAgICAgICAgICAgICAgIFwiZnVsbE5hbWVcIixcbiAgICAgICAgICAgICAgICB0aGlzLmhhc3MudXNlciEubmFtZVxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAke3RoaXMuaGFzcy51c2VyIS5pc19vd25lclxuICAgICAgICAgICAgICAgID8gdGhpcy5oYXNzLmxvY2FsaXplKFwidWkucGFuZWwucHJvZmlsZS5pc19vd25lclwiKVxuICAgICAgICAgICAgICAgIDogXCJcIn1cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8aGEtcGljay1sYW5ndWFnZS1yb3dcbiAgICAgICAgICAgICAgLm5hcnJvdz0ke3RoaXMubmFycm93fVxuICAgICAgICAgICAgICAuaGFzcz0ke3RoaXMuaGFzc31cbiAgICAgICAgICAgID48L2hhLXBpY2stbGFuZ3VhZ2Utcm93PlxuICAgICAgICAgICAgPGhhLXBpY2stdGhlbWUtcm93XG4gICAgICAgICAgICAgIC5uYXJyb3c9JHt0aGlzLm5hcnJvd31cbiAgICAgICAgICAgICAgLmhhc3M9JHt0aGlzLmhhc3N9XG4gICAgICAgICAgICA+PC9oYS1waWNrLXRoZW1lLXJvdz5cbiAgICAgICAgICAgICR7dGhpcy5oYXNzLmRvY2tlZFNpZGViYXIgIT09IFwiYXV0b1wiIHx8ICF0aGlzLm5hcnJvd1xuICAgICAgICAgICAgICA/IGh0bWxgXG4gICAgICAgICAgICAgICAgICA8aGEtZm9yY2UtbmFycm93LXJvd1xuICAgICAgICAgICAgICAgICAgICAubmFycm93PSR7dGhpcy5uYXJyb3d9XG4gICAgICAgICAgICAgICAgICAgIC5oYXNzPSR7dGhpcy5oYXNzfVxuICAgICAgICAgICAgICAgICAgPjwvaGEtZm9yY2UtbmFycm93LXJvdz5cbiAgICAgICAgICAgICAgICBgXG4gICAgICAgICAgICAgIDogXCJcIn1cbiAgICAgICAgICAgICR7bmF2aWdhdG9yLnZpYnJhdGVcbiAgICAgICAgICAgICAgPyBodG1sYFxuICAgICAgICAgICAgICAgICAgPGhhLXNldC12aWJyYXRlLXJvd1xuICAgICAgICAgICAgICAgICAgICAubmFycm93PSR7dGhpcy5uYXJyb3d9XG4gICAgICAgICAgICAgICAgICAgIC5oYXNzPSR7dGhpcy5oYXNzfVxuICAgICAgICAgICAgICAgICAgPjwvaGEtc2V0LXZpYnJhdGUtcm93PlxuICAgICAgICAgICAgICAgIGBcbiAgICAgICAgICAgICAgOiBcIlwifVxuICAgICAgICAgICAgPGhhLXB1c2gtbm90aWZpY2F0aW9ucy1yb3dcbiAgICAgICAgICAgICAgLm5hcnJvdz0ke3RoaXMubmFycm93fVxuICAgICAgICAgICAgICAuaGFzcz0ke3RoaXMuaGFzc31cbiAgICAgICAgICAgID48L2hhLXB1c2gtbm90aWZpY2F0aW9ucy1yb3c+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWFjdGlvbnNcIj5cbiAgICAgICAgICAgICAgPG13Yy1idXR0b24gY2xhc3M9XCJ3YXJuaW5nXCIgQGNsaWNrPSR7dGhpcy5faGFuZGxlTG9nT3V0fT5cbiAgICAgICAgICAgICAgICAke3RoaXMuaGFzcy5sb2NhbGl6ZShcInVpLnBhbmVsLnByb2ZpbGUubG9nb3V0XCIpfVxuICAgICAgICAgICAgICA8L213Yy1idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2hhLWNhcmQ+XG5cbiAgICAgICAgICAke3RoaXMuaGFzcy51c2VyIS5jcmVkZW50aWFscy5zb21lKFxuICAgICAgICAgICAgKGNyZWQpID0+IGNyZWQuYXV0aF9wcm92aWRlcl90eXBlID09PSBcImhvbWVhc3Npc3RhbnRcIlxuICAgICAgICAgIClcbiAgICAgICAgICAgID8gaHRtbGBcbiAgICAgICAgICAgICAgICA8aGEtY2hhbmdlLXBhc3N3b3JkLWNhcmRcbiAgICAgICAgICAgICAgICAgIC5oYXNzPSR7dGhpcy5oYXNzfVxuICAgICAgICAgICAgICAgID48L2hhLWNoYW5nZS1wYXNzd29yZC1jYXJkPlxuICAgICAgICAgICAgICBgXG4gICAgICAgICAgICA6IFwiXCJ9XG5cbiAgICAgICAgICA8aGEtbWZhLW1vZHVsZXMtY2FyZFxuICAgICAgICAgICAgLmhhc3M9JHt0aGlzLmhhc3N9XG4gICAgICAgICAgICAubWZhTW9kdWxlcz0ke3RoaXMuaGFzcy51c2VyIS5tZmFfbW9kdWxlc31cbiAgICAgICAgICA+PC9oYS1tZmEtbW9kdWxlcy1jYXJkPlxuXG4gICAgICAgICAgJHt0aGlzLmhhc3MudXNlciEuaXNfYWRtaW5cbiAgICAgICAgICAgID8gaHRtbGBcbiAgICAgICAgICAgICAgICA8aGEtYWR2YW5jZWQtbW9kZS1jYXJkXG4gICAgICAgICAgICAgICAgICAuaGFzcz0ke3RoaXMuaGFzc31cbiAgICAgICAgICAgICAgICAgIC5jb3JlVXNlckRhdGE9JHt0aGlzLl9jb3JlVXNlckRhdGF9XG4gICAgICAgICAgICAgICAgPjwvaGEtYWR2YW5jZWQtbW9kZS1jYXJkPlxuICAgICAgICAgICAgICBgXG4gICAgICAgICAgICA6IFwiXCJ9XG5cbiAgICAgICAgICA8aGEtcmVmcmVzaC10b2tlbnMtY2FyZFxuICAgICAgICAgICAgLmhhc3M9JHt0aGlzLmhhc3N9XG4gICAgICAgICAgICAucmVmcmVzaFRva2Vucz0ke3RoaXMuX3JlZnJlc2hUb2tlbnN9XG4gICAgICAgICAgICBAaGFzcy1yZWZyZXNoLXRva2Vucz0ke3RoaXMuX3JlZnJlc2hSZWZyZXNoVG9rZW5zfVxuICAgICAgICAgID48L2hhLXJlZnJlc2gtdG9rZW5zLWNhcmQ+XG5cbiAgICAgICAgICA8aGEtbG9uZy1saXZlZC1hY2Nlc3MtdG9rZW5zLWNhcmRcbiAgICAgICAgICAgIC5oYXNzPSR7dGhpcy5oYXNzfVxuICAgICAgICAgICAgLnJlZnJlc2hUb2tlbnM9JHt0aGlzLl9yZWZyZXNoVG9rZW5zfVxuICAgICAgICAgICAgQGhhc3MtcmVmcmVzaC10b2tlbnM9JHt0aGlzLl9yZWZyZXNoUmVmcmVzaFRva2Vuc31cbiAgICAgICAgICA+PC9oYS1sb25nLWxpdmVkLWFjY2Vzcy10b2tlbnMtY2FyZD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2FwcC1oZWFkZXItbGF5b3V0PlxuICAgIGA7XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIF9yZWZyZXNoUmVmcmVzaFRva2VucygpIHtcbiAgICB0aGlzLl9yZWZyZXNoVG9rZW5zID0gYXdhaXQgdGhpcy5oYXNzLmNhbGxXUyh7XG4gICAgICB0eXBlOiBcImF1dGgvcmVmcmVzaF90b2tlbnNcIixcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgX2hhbmRsZUxvZ091dCgpIHtcbiAgICBmaXJlRXZlbnQodGhpcywgXCJoYXNzLWxvZ291dFwiKTtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgc3R5bGVzKCk6IENTU1Jlc3VsdEFycmF5IHtcbiAgICByZXR1cm4gW1xuICAgICAgaGFTdHlsZSxcbiAgICAgIGNzc2BcbiAgICAgICAgOmhvc3Qge1xuICAgICAgICAgIC1tcy11c2VyLXNlbGVjdDogaW5pdGlhbDtcbiAgICAgICAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBpbml0aWFsO1xuICAgICAgICAgIC1tb3otdXNlci1zZWxlY3Q6IGluaXRpYWw7XG4gICAgICAgIH1cblxuICAgICAgICAuY29udGVudCB7XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgbWF4LXdpZHRoOiA2MDBweDtcbiAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgfVxuXG4gICAgICAgIC5jb250ZW50ID4gKiB7XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgbWFyZ2luOiAyNHB4IDA7XG4gICAgICAgIH1cblxuICAgICAgICAucHJvbW8tYWR2YW5jZWQge1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5LXRleHQtY29sb3IpO1xuICAgICAgICB9XG4gICAgICBgLFxuICAgIF07XG4gIH1cbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwiaGEtcGFuZWwtcHJvZmlsZVwiLCBIYVBhbmVsUHJvZmlsZSk7XG4iLCJpbXBvcnQgXCJAcG9seW1lci9wYXBlci1pdGVtL3BhcGVyLWl0ZW1cIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWxpc3Rib3gvcGFwZXItbGlzdGJveFwiO1xuaW1wb3J0IHsgaHRtbCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZ1wiO1xuaW1wb3J0IHsgUG9seW1lckVsZW1lbnQgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWVsZW1lbnRcIjtcblxuaW1wb3J0IFwiLi4vLi4vY29tcG9uZW50cy9oYS1wYXBlci1kcm9wZG93bi1tZW51XCI7XG5cbmltcG9ydCB7IEV2ZW50c01peGluIH0gZnJvbSBcIi4uLy4uL21peGlucy9ldmVudHMtbWl4aW5cIjtcbmltcG9ydCBMb2NhbGl6ZU1peGluIGZyb20gXCIuLi8uLi9taXhpbnMvbG9jYWxpemUtbWl4aW5cIjtcblxuaW1wb3J0IFwiLi9oYS1zZXR0aW5ncy1yb3dcIjtcblxuLypcbiAqIEBhcHBsaWVzTWl4aW4gTG9jYWxpemVNaXhpblxuICogQGFwcGxpZXNNaXhpbiBFdmVudHNNaXhpblxuICovXG5jbGFzcyBIYVBpY2tMYW5ndWFnZVJvdyBleHRlbmRzIExvY2FsaXplTWl4aW4oRXZlbnRzTWl4aW4oUG9seW1lckVsZW1lbnQpKSB7XG4gIHN0YXRpYyBnZXQgdGVtcGxhdGUoKSB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8c3R5bGU+XG4gICAgICAgIGEge1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbiAgICAgICAgfVxuICAgICAgICBwYXBlci1pdGVtIHtcbiAgICAgICAgICBkaXJlY3Rpb246IGx0cjtcbiAgICAgICAgfVxuICAgICAgICBwYXBlci1pdGVtW2lzLXJ0bF0ge1xuICAgICAgICAgIGRpcmVjdGlvbjogcnRsO1xuICAgICAgICB9XG4gICAgICA8L3N0eWxlPlxuICAgICAgPGhhLXNldHRpbmdzLXJvdyBuYXJyb3c9XCJbW25hcnJvd11dXCI+XG4gICAgICAgIDxzcGFuIHNsb3Q9XCJoZWFkaW5nXCJcbiAgICAgICAgICA+W1tsb2NhbGl6ZSgndWkucGFuZWwucHJvZmlsZS5sYW5ndWFnZS5oZWFkZXInKV1dPC9zcGFuXG4gICAgICAgID5cbiAgICAgICAgPHNwYW4gc2xvdD1cImRlc2NyaXB0aW9uXCI+XG4gICAgICAgICAgPGFcbiAgICAgICAgICAgIGhyZWY9XCJodHRwczovL2RldmVsb3BlcnMuaG9tZS1hc3Npc3RhbnQuaW8vZG9jcy9lbi9pbnRlcm5hdGlvbmFsaXphdGlvbl90cmFuc2xhdGlvbi5odG1sXCJcbiAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICA+W1tsb2NhbGl6ZSgndWkucGFuZWwucHJvZmlsZS5sYW5ndWFnZS5saW5rX3Byb21vJyldXTwvYVxuICAgICAgICAgID5cbiAgICAgICAgPC9zcGFuPlxuICAgICAgICA8aGEtcGFwZXItZHJvcGRvd24tbWVudVxuICAgICAgICAgIGxhYmVsPVwiW1tsb2NhbGl6ZSgndWkucGFuZWwucHJvZmlsZS5sYW5ndWFnZS5kcm9wZG93bl9sYWJlbCcpXV1cIlxuICAgICAgICAgIGR5bmFtaWMtYWxpZ249XCJcIlxuICAgICAgICA+XG4gICAgICAgICAgPHBhcGVyLWxpc3Rib3hcbiAgICAgICAgICAgIHNsb3Q9XCJkcm9wZG93bi1jb250ZW50XCJcbiAgICAgICAgICAgIGF0dHItZm9yLXNlbGVjdGVkPVwibGFuZ3VhZ2UtdGFnXCJcbiAgICAgICAgICAgIHNlbGVjdGVkPVwie3tsYW5ndWFnZVNlbGVjdGlvbn19XCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8dGVtcGxhdGUgaXM9XCJkb20tcmVwZWF0XCIgaXRlbXM9XCJbW2xhbmd1YWdlc11dXCI+XG4gICAgICAgICAgICAgIDxwYXBlci1pdGVtIGxhbmd1YWdlLXRhZyQ9XCJbW2l0ZW0ua2V5XV1cIiBpcy1ydGwkPVwiW1tpdGVtLmlzUlRMXV1cIj5cbiAgICAgICAgICAgICAgICBbW2l0ZW0ubmF0aXZlTmFtZV1dXG4gICAgICAgICAgICAgIDwvcGFwZXItaXRlbT5cbiAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgPC9wYXBlci1saXN0Ym94PlxuICAgICAgICA8L2hhLXBhcGVyLWRyb3Bkb3duLW1lbnU+XG4gICAgICA8L2hhLXNldHRpbmdzLXJvdz5cbiAgICBgO1xuICB9XG5cbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBoYXNzOiBPYmplY3QsXG4gICAgICBuYXJyb3c6IEJvb2xlYW4sXG4gICAgICBsYW5ndWFnZVNlbGVjdGlvbjoge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIG9ic2VydmVyOiBcImxhbmd1YWdlU2VsZWN0aW9uQ2hhbmdlZFwiLFxuICAgICAgfSxcbiAgICAgIGxhbmd1YWdlczoge1xuICAgICAgICB0eXBlOiBBcnJheSxcbiAgICAgICAgY29tcHV0ZWQ6IFwiY29tcHV0ZUxhbmd1YWdlcyhoYXNzKVwiLFxuICAgICAgfSxcbiAgICB9O1xuICB9XG5cbiAgc3RhdGljIGdldCBvYnNlcnZlcnMoKSB7XG4gICAgcmV0dXJuIFtcInNldExhbmd1YWdlU2VsZWN0aW9uKGxhbmd1YWdlKVwiXTtcbiAgfVxuXG4gIGNvbXB1dGVMYW5ndWFnZXMoaGFzcykge1xuICAgIGlmICghaGFzcyB8fCAhaGFzcy50cmFuc2xhdGlvbk1ldGFkYXRhKSB7XG4gICAgICByZXR1cm4gW107XG4gICAgfVxuICAgIGNvbnN0IHRyYW5zbGF0aW9ucyA9IGhhc3MudHJhbnNsYXRpb25NZXRhZGF0YS50cmFuc2xhdGlvbnM7XG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKHRyYW5zbGF0aW9ucykubWFwKChrZXkpID0+ICh7XG4gICAgICBrZXksXG4gICAgICAuLi50cmFuc2xhdGlvbnNba2V5XSxcbiAgICB9KSk7XG4gIH1cblxuICBzZXRMYW5ndWFnZVNlbGVjdGlvbihsYW5ndWFnZSkge1xuICAgIHRoaXMubGFuZ3VhZ2VTZWxlY3Rpb24gPSBsYW5ndWFnZTtcbiAgfVxuXG4gIGxhbmd1YWdlU2VsZWN0aW9uQ2hhbmdlZChuZXdWYWwpIHtcbiAgICAvLyBPbmx5IGZpcmUgZXZlbnQgaWYgbGFuZ3VhZ2Ugd2FzIGNoYW5nZWQuIFRoaXMgcHJldmVudHMgc2VsZWN0IHVwZGF0ZXMgd2hlblxuICAgIC8vIHJlc3BvbmRpbmcgdG8gaGFzcyBjaGFuZ2VzLlxuICAgIGlmIChuZXdWYWwgIT09IHRoaXMuaGFzcy5sYW5ndWFnZSkge1xuICAgICAgdGhpcy5maXJlKFwiaGFzcy1sYW5ndWFnZS1zZWxlY3RcIiwgeyBsYW5ndWFnZTogbmV3VmFsIH0pO1xuICAgIH1cbiAgfVxuXG4gIHJlYWR5KCkge1xuICAgIHN1cGVyLnJlYWR5KCk7XG4gICAgaWYgKHRoaXMuaGFzcyAmJiB0aGlzLmhhc3MubGFuZ3VhZ2UpIHtcbiAgICAgIHRoaXMuc2V0TGFuZ3VhZ2VTZWxlY3Rpb24odGhpcy5oYXNzLmxhbmd1YWdlKTtcbiAgICB9XG4gIH1cbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwiaGEtcGljay1sYW5ndWFnZS1yb3dcIiwgSGFQaWNrTGFuZ3VhZ2VSb3cpO1xuIiwiaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItaXRlbS9wYXBlci1pdGVtXCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1saXN0Ym94L3BhcGVyLWxpc3Rib3hcIjtcbmltcG9ydCB7IGh0bWwgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvaHRtbC10YWdcIjtcbmltcG9ydCB7IFBvbHltZXJFbGVtZW50IH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvcG9seW1lci1lbGVtZW50XCI7XG5cbmltcG9ydCBcIi4uLy4uL2NvbXBvbmVudHMvaGEtcGFwZXItZHJvcGRvd24tbWVudVwiO1xuXG5pbXBvcnQgeyBFdmVudHNNaXhpbiB9IGZyb20gXCIuLi8uLi9taXhpbnMvZXZlbnRzLW1peGluXCI7XG5pbXBvcnQgTG9jYWxpemVNaXhpbiBmcm9tIFwiLi4vLi4vbWl4aW5zL2xvY2FsaXplLW1peGluXCI7XG5cbi8qXG4gKiBAYXBwbGllc01peGluIExvY2FsaXplTWl4aW5cbiAqIEBhcHBsaWVzTWl4aW4gRXZlbnRzTWl4aW5cbiAqL1xuY2xhc3MgSGFQaWNrVGhlbWVSb3cgZXh0ZW5kcyBMb2NhbGl6ZU1peGluKEV2ZW50c01peGluKFBvbHltZXJFbGVtZW50KSkge1xuICBzdGF0aWMgZ2V0IHRlbXBsYXRlKCkge1xuICAgIHJldHVybiBodG1sYFxuICAgICAgPHN0eWxlPlxuICAgICAgICBhIHtcbiAgICAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XG4gICAgICAgIH1cbiAgICAgIDwvc3R5bGU+XG4gICAgICA8aGEtc2V0dGluZ3Mtcm93IG5hcnJvdz1cIltbbmFycm93XV1cIj5cbiAgICAgICAgPHNwYW4gc2xvdD1cImhlYWRpbmdcIlxuICAgICAgICAgID5bW2xvY2FsaXplKCd1aS5wYW5lbC5wcm9maWxlLnRoZW1lcy5oZWFkZXInKV1dPC9zcGFuXG4gICAgICAgID5cbiAgICAgICAgPHNwYW4gc2xvdD1cImRlc2NyaXB0aW9uXCI+XG4gICAgICAgICAgPHRlbXBsYXRlIGlzPVwiZG9tLWlmXCIgaWY9XCJbWyFfaGFzVGhlbWVzXV1cIj5cbiAgICAgICAgICAgIFtbbG9jYWxpemUoJ3VpLnBhbmVsLnByb2ZpbGUudGhlbWVzLmVycm9yX25vX3RoZW1lJyldXVxuICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgPGFcbiAgICAgICAgICAgIGhyZWY9XCJodHRwczovL3d3dy5ob21lLWFzc2lzdGFudC5pby9pbnRlZ3JhdGlvbnMvZnJvbnRlbmQvI2RlZmluaW5nLXRoZW1lc1wiXG4gICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgPltbbG9jYWxpemUoJ3VpLnBhbmVsLnByb2ZpbGUudGhlbWVzLmxpbmtfcHJvbW8nKV1dPC9hXG4gICAgICAgICAgPlxuICAgICAgICA8L3NwYW4+XG4gICAgICAgIDxoYS1wYXBlci1kcm9wZG93bi1tZW51XG4gICAgICAgICAgbGFiZWw9XCJbW2xvY2FsaXplKCd1aS5wYW5lbC5wcm9maWxlLnRoZW1lcy5kcm9wZG93bl9sYWJlbCcpXV1cIlxuICAgICAgICAgIGR5bmFtaWMtYWxpZ25cbiAgICAgICAgICBkaXNhYmxlZD1cIltbIV9oYXNUaGVtZXNdXVwiXG4gICAgICAgID5cbiAgICAgICAgICA8cGFwZXItbGlzdGJveCBzbG90PVwiZHJvcGRvd24tY29udGVudFwiIHNlbGVjdGVkPVwie3tzZWxlY3RlZFRoZW1lfX1cIj5cbiAgICAgICAgICAgIDx0ZW1wbGF0ZSBpcz1cImRvbS1yZXBlYXRcIiBpdGVtcz1cIltbdGhlbWVzXV1cIiBhcz1cInRoZW1lXCI+XG4gICAgICAgICAgICAgIDxwYXBlci1pdGVtPltbdGhlbWVdXTwvcGFwZXItaXRlbT5cbiAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgPC9wYXBlci1saXN0Ym94PlxuICAgICAgICA8L2hhLXBhcGVyLWRyb3Bkb3duLW1lbnU+XG4gICAgICA8L2hhLXNldHRpbmdzLXJvdz5cbiAgICBgO1xuICB9XG5cbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBoYXNzOiBPYmplY3QsXG4gICAgICBuYXJyb3c6IEJvb2xlYW4sXG4gICAgICBfaGFzVGhlbWVzOiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIGNvbXB1dGVkOiBcIl9jb21wSGFzVGhlbWVzKGhhc3MpXCIsXG4gICAgICB9LFxuICAgICAgdGhlbWVzOiB7XG4gICAgICAgIHR5cGU6IEFycmF5LFxuICAgICAgICBjb21wdXRlZDogXCJfY29tcHV0ZVRoZW1lcyhoYXNzKVwiLFxuICAgICAgfSxcbiAgICAgIHNlbGVjdGVkVGhlbWU6IHtcbiAgICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgfSxcbiAgICB9O1xuICB9XG5cbiAgc3RhdGljIGdldCBvYnNlcnZlcnMoKSB7XG4gICAgcmV0dXJuIFtcInNlbGVjdGlvbkNoYW5nZWQoaGFzcywgc2VsZWN0ZWRUaGVtZSlcIl07XG4gIH1cblxuICBfY29tcEhhc1RoZW1lcyhoYXNzKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIGhhc3MudGhlbWVzICYmXG4gICAgICBoYXNzLnRoZW1lcy50aGVtZXMgJiZcbiAgICAgIE9iamVjdC5rZXlzKGhhc3MudGhlbWVzLnRoZW1lcykubGVuZ3RoXG4gICAgKTtcbiAgfVxuXG4gIHJlYWR5KCkge1xuICAgIHN1cGVyLnJlYWR5KCk7XG4gICAgaWYgKFxuICAgICAgdGhpcy5oYXNzLnNlbGVjdGVkVGhlbWUgJiZcbiAgICAgIHRoaXMudGhlbWVzLmluZGV4T2YodGhpcy5oYXNzLnNlbGVjdGVkVGhlbWUpID4gMFxuICAgICkge1xuICAgICAgdGhpcy5zZWxlY3RlZFRoZW1lID0gdGhpcy50aGVtZXMuaW5kZXhPZih0aGlzLmhhc3Muc2VsZWN0ZWRUaGVtZSk7XG4gICAgfSBlbHNlIGlmICghdGhpcy5oYXNzLnNlbGVjdGVkVGhlbWUpIHtcbiAgICAgIHRoaXMuc2VsZWN0ZWRUaGVtZSA9IDE7XG4gICAgfVxuICB9XG5cbiAgX2NvbXB1dGVUaGVtZXMoaGFzcykge1xuICAgIGlmICghaGFzcykgcmV0dXJuIFtdO1xuICAgIHJldHVybiBbXS5jb25jYXQoXG4gICAgICBPYmplY3Qua2V5cyhoYXNzLnRoZW1lcy50aGVtZXMpLnNvcnQoKVxuICAgICk7XG4gIH1cblxuICBzZWxlY3Rpb25DaGFuZ2VkKGhhc3MsIHNlbGVjdGlvbikge1xuICAgIGlmIChzZWxlY3Rpb24gPiAwICYmIHNlbGVjdGlvbiA8IHRoaXMudGhlbWVzLmxlbmd0aCkge1xuICAgICAgaWYgKGhhc3Muc2VsZWN0ZWRUaGVtZSAhPT0gdGhpcy50aGVtZXNbc2VsZWN0aW9uXSkge1xuICAgICAgICB0aGlzLmZpcmUoXCJzZXR0aGVtZVwiLCB0aGlzLnRoZW1lc1tzZWxlY3Rpb25dKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHNlbGVjdGlvbiA9PT0gMCAmJiBoYXNzLnNlbGVjdGVkVGhlbWUgIT09IFwiXCIpIHtcbiAgICAgIHRoaXMuZmlyZShcInNldHRoZW1lXCIsIFwiXCIpO1xuICAgIH1cbiAgfVxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJoYS1waWNrLXRoZW1lLXJvd1wiLCBIYVBpY2tUaGVtZVJvdyk7XG4iLCJpbXBvcnQgXCJAcG9seW1lci9pcm9uLWZsZXgtbGF5b3V0L2lyb24tZmxleC1sYXlvdXQtY2xhc3Nlc1wiO1xuaW1wb3J0IFwiQHBvbHltZXIvaXJvbi1sYWJlbC9pcm9uLWxhYmVsXCI7XG5pbXBvcnQgeyBodG1sIH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2h0bWwtdGFnXCI7XG5pbXBvcnQgeyBQb2x5bWVyRWxlbWVudCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL3BvbHltZXItZWxlbWVudFwiO1xuXG5pbXBvcnQgaXNDb21wb25lbnRMb2FkZWQgZnJvbSBcIi4uLy4uL2NvbW1vbi9jb25maWcvaXNfY29tcG9uZW50X2xvYWRlZFwiO1xuaW1wb3J0IHsgcHVzaFN1cHBvcnRlZCB9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2hhLXB1c2gtbm90aWZpY2F0aW9ucy10b2dnbGVcIjtcblxuaW1wb3J0IExvY2FsaXplTWl4aW4gZnJvbSBcIi4uLy4uL21peGlucy9sb2NhbGl6ZS1taXhpblwiO1xuXG5pbXBvcnQgXCIuL2hhLXNldHRpbmdzLXJvd1wiO1xuXG4vKlxuICogQGFwcGxpZXNNaXhpbiBMb2NhbGl6ZU1peGluXG4gKi9cbmNsYXNzIEhhUHVzaE5vdGlmaWNhdGlvbnNSb3cgZXh0ZW5kcyBMb2NhbGl6ZU1peGluKFBvbHltZXJFbGVtZW50KSB7XG4gIHN0YXRpYyBnZXQgdGVtcGxhdGUoKSB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8c3R5bGU+XG4gICAgICAgIGEge1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbiAgICAgICAgfVxuICAgICAgPC9zdHlsZT5cbiAgICAgIDxoYS1zZXR0aW5ncy1yb3cgbmFycm93PVwiW1tuYXJyb3ddXVwiPlxuICAgICAgICA8c3BhbiBzbG90PVwiaGVhZGluZ1wiXG4gICAgICAgICAgPltbbG9jYWxpemUoJ3VpLnBhbmVsLnByb2ZpbGUucHVzaF9ub3RpZmljYXRpb25zLmhlYWRlcicpXV08L3NwYW5cbiAgICAgICAgPlxuICAgICAgICA8c3BhbiBzbG90PVwiZGVzY3JpcHRpb25cIj5cbiAgICAgICAgICBbW19kZXNjcmlwdGlvbihfcGxhdGZvcm1Mb2FkZWQsIF9wdXNoU3VwcG9ydGVkKV1dXG4gICAgICAgICAgPGFcbiAgICAgICAgICAgIGhyZWY9XCJodHRwczovL3d3dy5ob21lLWFzc2lzdGFudC5pby9pbnRlZ3JhdGlvbnMvbm90aWZ5Lmh0bWw1L1wiXG4gICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgPltbbG9jYWxpemUoJ3VpLnBhbmVsLnByb2ZpbGUucHVzaF9ub3RpZmljYXRpb25zLmxpbmtfcHJvbW8nKV1dPC9hXG4gICAgICAgICAgPlxuICAgICAgICA8L3NwYW4+XG4gICAgICAgIDxoYS1wdXNoLW5vdGlmaWNhdGlvbnMtdG9nZ2xlXG4gICAgICAgICAgaGFzcz1cIltbaGFzc11dXCJcbiAgICAgICAgICBkaXNhYmxlZD1cIltbX2Vycm9yXV1cIlxuICAgICAgICA+PC9oYS1wdXNoLW5vdGlmaWNhdGlvbnMtdG9nZ2xlPlxuICAgICAgPC9oYS1zZXR0aW5ncy1yb3c+XG4gICAgYDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaGFzczogT2JqZWN0LFxuICAgICAgbmFycm93OiBCb29sZWFuLFxuICAgICAgX3BsYXRmb3JtTG9hZGVkOiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIGNvbXB1dGVkOiBcIl9jb21wUGxhdGZvcm1Mb2FkZWQoaGFzcylcIixcbiAgICAgIH0sXG4gICAgICBfcHVzaFN1cHBvcnRlZDoge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICB2YWx1ZTogcHVzaFN1cHBvcnRlZCxcbiAgICAgIH0sXG4gICAgICBfZXJyb3I6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgY29tcHV0ZWQ6IFwiX2NvbXBFcnJvcihfcGxhdGZvcm1Mb2FkZWQsIF9wdXNoU3VwcG9ydGVkKVwiLFxuICAgICAgfSxcbiAgICB9O1xuICB9XG5cbiAgX2NvbXBQbGF0Zm9ybUxvYWRlZChoYXNzKSB7XG4gICAgcmV0dXJuIGlzQ29tcG9uZW50TG9hZGVkKGhhc3MsIFwibm90aWZ5Lmh0bWw1XCIpO1xuICB9XG5cbiAgX2NvbXBFcnJvcihwbGF0Zm9ybUxvYWRlZCwgcHVzaFN1cHBvcnRlZF8pIHtcbiAgICByZXR1cm4gIXBsYXRmb3JtTG9hZGVkIHx8ICFwdXNoU3VwcG9ydGVkXztcbiAgfVxuXG4gIF9kZXNjcmlwdGlvbihwbGF0Zm9ybUxvYWRlZCwgcHVzaFN1cHBvcnRlZF8pIHtcbiAgICBsZXQga2V5O1xuICAgIGlmICghcHVzaFN1cHBvcnRlZF8pIHtcbiAgICAgIGtleSA9IFwiZXJyb3JfdXNlX2h0dHBzXCI7XG4gICAgfSBlbHNlIGlmICghcGxhdGZvcm1Mb2FkZWQpIHtcbiAgICAgIGtleSA9IFwiZXJyb3JfbG9hZF9wbGF0Zm9ybVwiO1xuICAgIH0gZWxzZSB7XG4gICAgICBrZXkgPSBcImRlc2NyaXB0aW9uXCI7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLmxvY2FsaXplKGB1aS5wYW5lbC5wcm9maWxlLnB1c2hfbm90aWZpY2F0aW9ucy4ke2tleX1gKTtcbiAgfVxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJoYS1wdXNoLW5vdGlmaWNhdGlvbnMtcm93XCIsIEhhUHVzaE5vdGlmaWNhdGlvbnNSb3cpO1xuIiwiaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItaWNvbi1idXR0b24vcGFwZXItaWNvbi1idXR0b25cIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLXRvb2x0aXAvcGFwZXItdG9vbHRpcFwiO1xuXG5pbXBvcnQgXCIuLi8uLi9jb21wb25lbnRzL2hhLWNhcmRcIjtcblxuaW1wb3J0IHsgaHRtbCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZ1wiO1xuaW1wb3J0IHsgUG9seW1lckVsZW1lbnQgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWVsZW1lbnRcIjtcbmltcG9ydCB7IEV2ZW50c01peGluIH0gZnJvbSBcIi4uLy4uL21peGlucy9ldmVudHMtbWl4aW5cIjtcbmltcG9ydCBMb2NhbGl6ZU1peGluIGZyb20gXCIuLi8uLi9taXhpbnMvbG9jYWxpemUtbWl4aW5cIjtcbmltcG9ydCBmb3JtYXREYXRlVGltZSBmcm9tIFwiLi4vLi4vY29tbW9uL2RhdGV0aW1lL2Zvcm1hdF9kYXRlX3RpbWVcIjtcblxuaW1wb3J0IFwiLi9oYS1zZXR0aW5ncy1yb3dcIjtcblxuLypcbiAqIEBhcHBsaWVzTWl4aW4gRXZlbnRzTWl4aW5cbiAqIEBhcHBsaWVzTWl4aW4gTG9jYWxpemVNaXhpblxuICovXG5jbGFzcyBIYVJlZnJlc2hUb2tlbnMgZXh0ZW5kcyBMb2NhbGl6ZU1peGluKEV2ZW50c01peGluKFBvbHltZXJFbGVtZW50KSkge1xuICBzdGF0aWMgZ2V0IHRlbXBsYXRlKCkge1xuICAgIHJldHVybiBodG1sYFxuICAgICAgPHN0eWxlPlxuICAgICAgICBwYXBlci1pY29uLWJ1dHRvbiB7XG4gICAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnktdGV4dC1jb2xvcik7XG4gICAgICAgIH1cbiAgICAgICAgcGFwZXItaWNvbi1idXR0b25bZGlzYWJsZWRdIHtcbiAgICAgICAgICBjb2xvcjogdmFyKC0tZGlzYWJsZWQtdGV4dC1jb2xvcik7XG4gICAgICAgIH1cbiAgICAgIDwvc3R5bGU+XG4gICAgICA8aGEtY2FyZCBoZWFkZXI9XCJbW2xvY2FsaXplKCd1aS5wYW5lbC5wcm9maWxlLnJlZnJlc2hfdG9rZW5zLmhlYWRlcicpXV1cIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtY29udGVudFwiPlxuICAgICAgICAgIFtbbG9jYWxpemUoJ3VpLnBhbmVsLnByb2ZpbGUucmVmcmVzaF90b2tlbnMuZGVzY3JpcHRpb24nKV1dXG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8dGVtcGxhdGUgaXM9XCJkb20tcmVwZWF0XCIgaXRlbXM9XCJbW19jb21wdXRlVG9rZW5zKHJlZnJlc2hUb2tlbnMpXV1cIj5cbiAgICAgICAgICA8aGEtc2V0dGluZ3Mtcm93IHRocmVlLWxpbmU+XG4gICAgICAgICAgICA8c3BhbiBzbG90PVwiaGVhZGluZ1wiPltbX2Zvcm1hdFRpdGxlKGl0ZW0uY2xpZW50X2lkKV1dPC9zcGFuPlxuICAgICAgICAgICAgPGRpdiBzbG90PVwiZGVzY3JpcHRpb25cIj5bW19mb3JtYXRDcmVhdGVkQXQoaXRlbS5jcmVhdGVkX2F0KV1dPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IHNsb3Q9XCJkZXNjcmlwdGlvblwiPltbX2Zvcm1hdExhc3RVc2VkKGl0ZW0pXV08L2Rpdj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDx0ZW1wbGF0ZSBpcz1cImRvbS1pZlwiIGlmPVwiW1tpdGVtLmlzX2N1cnJlbnRdXVwiPlxuICAgICAgICAgICAgICAgIDxwYXBlci10b29sdGlwIHBvc2l0aW9uPVwibGVmdFwiXG4gICAgICAgICAgICAgICAgICA+W1tsb2NhbGl6ZSgndWkucGFuZWwucHJvZmlsZS5yZWZyZXNoX3Rva2Vucy5jdXJyZW50X3Rva2VuX3Rvb2x0aXAnKV1dPC9wYXBlci10b29sdGlwXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgICAgICA8cGFwZXItaWNvbi1idXR0b25cbiAgICAgICAgICAgICAgICBpY29uPVwiaGFzczpkZWxldGVcIlxuICAgICAgICAgICAgICAgIG9uLWNsaWNrPVwiX2hhbmRsZURlbGV0ZVwiXG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ9XCJbW2l0ZW0uaXNfY3VycmVudF1dXCJcbiAgICAgICAgICAgICAgPjwvcGFwZXItaWNvbi1idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2hhLXNldHRpbmdzLXJvdz5cbiAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgIDwvaGEtY2FyZD5cbiAgICBgO1xuICB9XG5cbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBoYXNzOiBPYmplY3QsXG4gICAgICByZWZyZXNoVG9rZW5zOiBBcnJheSxcbiAgICB9O1xuICB9XG5cbiAgX2NvbXB1dGVUb2tlbnMocmVmcmVzaFRva2Vucykge1xuICAgIHJldHVybiByZWZyZXNoVG9rZW5zLmZpbHRlcigodGtuKSA9PiB0a24udHlwZSA9PT0gXCJub3JtYWxcIikucmV2ZXJzZSgpO1xuICB9XG5cbiAgX2Zvcm1hdFRpdGxlKGNsaWVudElkKSB7XG4gICAgcmV0dXJuIHRoaXMubG9jYWxpemUoXG4gICAgICBcInVpLnBhbmVsLnByb2ZpbGUucmVmcmVzaF90b2tlbnMudG9rZW5fdGl0bGVcIixcbiAgICAgIFwiY2xpZW50SWRcIixcbiAgICAgIGNsaWVudElkXG4gICAgKTtcbiAgfVxuXG4gIF9mb3JtYXRDcmVhdGVkQXQoY3JlYXRlZCkge1xuICAgIHJldHVybiB0aGlzLmxvY2FsaXplKFxuICAgICAgXCJ1aS5wYW5lbC5wcm9maWxlLnJlZnJlc2hfdG9rZW5zLmNyZWF0ZWRfYXRcIixcbiAgICAgIFwiZGF0ZVwiLFxuICAgICAgZm9ybWF0RGF0ZVRpbWUobmV3IERhdGUoY3JlYXRlZCksIHRoaXMuaGFzcy5sYW5ndWFnZSlcbiAgICApO1xuICB9XG5cbiAgX2Zvcm1hdExhc3RVc2VkKGl0ZW0pIHtcbiAgICByZXR1cm4gaXRlbS5sYXN0X3VzZWRfYXRcbiAgICAgID8gdGhpcy5sb2NhbGl6ZShcbiAgICAgICAgICBcInVpLnBhbmVsLnByb2ZpbGUucmVmcmVzaF90b2tlbnMubGFzdF91c2VkXCIsXG4gICAgICAgICAgXCJkYXRlXCIsXG4gICAgICAgICAgZm9ybWF0RGF0ZVRpbWUobmV3IERhdGUoaXRlbS5sYXN0X3VzZWRfYXQpLCB0aGlzLmhhc3MubGFuZ3VhZ2UpLFxuICAgICAgICAgIFwibG9jYXRpb25cIixcbiAgICAgICAgICBpdGVtLmxhc3RfdXNlZF9pcFxuICAgICAgICApXG4gICAgICA6IHRoaXMubG9jYWxpemUoXCJ1aS5wYW5lbC5wcm9maWxlLnJlZnJlc2hfdG9rZW5zLm5vdF91c2VkXCIpO1xuICB9XG5cbiAgYXN5bmMgX2hhbmRsZURlbGV0ZShldikge1xuICAgIGlmIChcbiAgICAgICFjb25maXJtKFxuICAgICAgICB0aGlzLmxvY2FsaXplKFxuICAgICAgICAgIFwidWkucGFuZWwucHJvZmlsZS5yZWZyZXNoX3Rva2Vucy5jb25maXJtX2RlbGV0ZVwiLFxuICAgICAgICAgIFwibmFtZVwiLFxuICAgICAgICAgIGV2Lm1vZGVsLml0ZW0uY2xpZW50X2lkXG4gICAgICAgIClcbiAgICAgIClcbiAgICApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgIGF3YWl0IHRoaXMuaGFzcy5jYWxsV1Moe1xuICAgICAgICB0eXBlOiBcImF1dGgvZGVsZXRlX3JlZnJlc2hfdG9rZW5cIixcbiAgICAgICAgcmVmcmVzaF90b2tlbl9pZDogZXYubW9kZWwuaXRlbS5pZCxcbiAgICAgIH0pO1xuICAgICAgdGhpcy5maXJlKFwiaGFzcy1yZWZyZXNoLXRva2Vuc1wiKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxuICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgICAgYWxlcnQodGhpcy5sb2NhbGl6ZShcInVpLnBhbmVsLnByb2ZpbGUucmVmcmVzaF90b2tlbnMuZGVsZXRlX2ZhaWxlZFwiKSk7XG4gICAgfVxuICB9XG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcImhhLXJlZnJlc2gtdG9rZW5zLWNhcmRcIiwgSGFSZWZyZXNoVG9rZW5zKTtcbiIsImltcG9ydCB7XG4gIExpdEVsZW1lbnQsXG4gIFRlbXBsYXRlUmVzdWx0LFxuICBodG1sLFxuICBwcm9wZXJ0eSxcbiAgY3VzdG9tRWxlbWVudCxcbn0gZnJvbSBcImxpdC1lbGVtZW50XCI7XG5cbmltcG9ydCBcIi4vaGEtc2V0dGluZ3Mtcm93XCI7XG5pbXBvcnQgXCIuLi8uLi9jb21wb25lbnRzL2hhLXN3aXRjaFwiO1xuXG5pbXBvcnQgeyBIb21lQXNzaXN0YW50IH0gZnJvbSBcIi4uLy4uL3R5cGVzXCI7XG5pbXBvcnQgeyBmaXJlRXZlbnQgfSBmcm9tIFwiLi4vLi4vY29tbW9uL2RvbS9maXJlX2V2ZW50XCI7XG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLWR1cGxpY2F0ZS1pbXBvcnRzXG5pbXBvcnQgeyBIYVN3aXRjaCB9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2hhLXN3aXRjaFwiO1xuaW1wb3J0IHsgZm9yd2FyZEhhcHRpYyB9IGZyb20gXCIuLi8uLi9kYXRhL2hhcHRpY3NcIjtcblxuQGN1c3RvbUVsZW1lbnQoXCJoYS1zZXQtdmlicmF0ZS1yb3dcIilcbmNsYXNzIEhhU2V0VmlicmF0ZVJvdyBleHRlbmRzIExpdEVsZW1lbnQge1xuICBAcHJvcGVydHkoKSBwdWJsaWMgaGFzcyE6IEhvbWVBc3Npc3RhbnQ7XG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyBuYXJyb3chOiBib29sZWFuO1xuXG4gIHByb3RlY3RlZCByZW5kZXIoKTogVGVtcGxhdGVSZXN1bHQgfCB2b2lkIHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxoYS1zZXR0aW5ncy1yb3cgLm5hcnJvdz0ke3RoaXMubmFycm93fT5cbiAgICAgICAgPHNwYW4gc2xvdD1cImhlYWRpbmdcIj5cbiAgICAgICAgICAke3RoaXMuaGFzcy5sb2NhbGl6ZShcInVpLnBhbmVsLnByb2ZpbGUudmlicmF0ZS5oZWFkZXJcIil9XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPHNwYW4gc2xvdD1cImRlc2NyaXB0aW9uXCI+XG4gICAgICAgICAgJHt0aGlzLmhhc3MubG9jYWxpemUoXCJ1aS5wYW5lbC5wcm9maWxlLnZpYnJhdGUuZGVzY3JpcHRpb25cIil9XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPGhhLXN3aXRjaFxuICAgICAgICAgIC5jaGVja2VkPSR7dGhpcy5oYXNzLnZpYnJhdGV9XG4gICAgICAgICAgQGNoYW5nZT0ke3RoaXMuX2NoZWNrZWRDaGFuZ2VkfVxuICAgICAgICA+PC9oYS1zd2l0Y2g+XG4gICAgICA8L2hhLXNldHRpbmdzLXJvdz5cbiAgICBgO1xuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBfY2hlY2tlZENoYW5nZWQoZXY6IEV2ZW50KSB7XG4gICAgY29uc3QgdmlicmF0ZSA9IChldi50YXJnZXQgYXMgSGFTd2l0Y2gpLmNoZWNrZWQ7XG4gICAgaWYgKHZpYnJhdGUgPT09IHRoaXMuaGFzcy52aWJyYXRlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGZpcmVFdmVudCh0aGlzLCBcImhhc3MtdmlicmF0ZVwiLCB7XG4gICAgICB2aWJyYXRlLFxuICAgIH0pO1xuICAgIGZvcndhcmRIYXB0aWMoXCJsaWdodFwiKTtcbiAgfVxufVxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBIVE1MRWxlbWVudFRhZ05hbWVNYXAge1xuICAgIFwiaGEtc2V0LXZpYnJhdGUtcm93XCI6IEhhU2V0VmlicmF0ZVJvdztcbiAgfVxufVxuIiwiaW1wb3J0IHsgaHRtbCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZ1wiO1xuaW1wb3J0IHsgUG9seW1lckVsZW1lbnQgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWVsZW1lbnRcIjtcblxuY2xhc3MgSGFTZXR0aW5nc1JvdyBleHRlbmRzIFBvbHltZXJFbGVtZW50IHtcbiAgc3RhdGljIGdldCB0ZW1wbGF0ZSgpIHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxzdHlsZT5cbiAgICAgICAgOmhvc3Qge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgcGFkZGluZzogMCAxNnB4O1xuICAgICAgICAgIGFsaWduLWNvbnRlbnQ6IG5vcm1hbDtcbiAgICAgICAgICBhbGlnbi1zZWxmOiBhdXRvO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICAgICAgOmhvc3QoW25hcnJvd10pIHtcbiAgICAgICAgICBhbGlnbi1pdGVtczogbm9ybWFsO1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHZhcigtLWRpdmlkZXItY29sb3IpO1xuICAgICAgICAgIHBhZGRpbmctYm90dG9tOiA4cHg7XG4gICAgICAgIH1cbiAgICAgICAgcGFwZXItaXRlbS1ib2R5IHtcbiAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxNnB4O1xuICAgICAgICB9XG4gICAgICA8L3N0eWxlPlxuICAgICAgPHBhcGVyLWl0ZW0tYm9keSB0d28tbGluZSQ9XCJbWyF0aHJlZUxpbmVdXVwiIHRocmVlLWxpbmUkPVwiW1t0aHJlZUxpbmVdXVwiPlxuICAgICAgICA8c2xvdCBuYW1lPVwiaGVhZGluZ1wiPjwvc2xvdD5cbiAgICAgICAgPGRpdiBzZWNvbmRhcnk+PHNsb3QgbmFtZT1cImRlc2NyaXB0aW9uXCI+PC9zbG90PjwvZGl2PlxuICAgICAgPC9wYXBlci1pdGVtLWJvZHk+XG4gICAgICA8c2xvdD48L3Nsb3Q+XG4gICAgYDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgbmFycm93OiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIHJlZmxlY3RUb0F0dHJpYnV0ZTogdHJ1ZSxcbiAgICAgIH0sXG4gICAgICB0aHJlZUxpbmU6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgdmFsdWU6IGZhbHNlLFxuICAgICAgfSxcbiAgICB9O1xuICB9XG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcImhhLXNldHRpbmdzLXJvd1wiLCBIYVNldHRpbmdzUm93KTtcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUVBO0FBQUE7QUFBQTtBQUNBO0FBSUE7QUFDQTs7Ozs7Ozs7Ozs7OztBQ1JBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFPQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyQkE7QUFTQTtBQUFBO0FBQUE7O0FBNkRBO0FBMURBO0FBQUE7QUFDQTtBQTZDQTs7O0FBQUE7QUFFQTtBQUNBO0FBS0E7QUFIQTtBQU1BO0FBM0RBO0FBQUE7QUFBQTtBQTREQTtBQUFBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4RUE7QUFJQTtBQUlBO0FBQ0E7QUFBQTtBQUFBOztBQVVBO0FBVEE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBOztBQVFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM0JBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQU9BOzs7O0FBR0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQStCQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUFHQTtBQUNBOztBQURBO0FBQ0E7QUFBQTs7Ozs7Ozs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQUdBO0FBQ0E7O0FBREE7OztBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTs7Ozs7QUFDQTs7Ozs7O0FBTUE7QUFDQTs7QUFEQTs7Ozs7OztBQUVBO0FBQ0E7O0FBRUE7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBQ0E7O0FBREE7Ozs7OztBQUtBO0FBQUE7QUFBQTtBQUNBOztBQURBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFDQTs7Ozs7Ozs7QUFLQTtBQUNBO0FBQUE7Ozs7OztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUlBO0FBQ0E7O0FBREE7OztBQUdBO0FBQ0E7O0FBREE7QUFDQTtBQUNBOzs7Ozs7Ozs7QUFFQTtBQUFBO0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7Ozs7QUFDQTtBQUNBO0FBR0E7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQUdBO0FBQ0E7QUFDQTs7O0FBeklBO0FBQ0E7QUFPQTs7O0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFDQTtBQUZBO0FBWEE7QUFnQkE7Ozs7QUE1QkE7QUFDQTtBQTRJQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQy9KQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBR0E7QUFBQTtBQUFBOztBQW1DQTtBQWhDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQWtCQTtBQUNBOzs7QUFBQTtBQWpDQTtBQUFBO0FBQUE7QUFEQTtBQURBO0FBQ0E7QUFtQ0E7QUFBQTtBQW5DQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUEE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7OztBQUNBO0FBQ0E7QUFDQTs7QUFGQTtBQUdBOzs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwQkE7QUFFQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQUZBO0FBa0JBO0FBQ0E7QUFDQTtBQXBCQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcENBO0FBQ0E7Ozs7OztBQUtBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQW1CQTtBQUNBO0FBcEJBO0FBQUE7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQUtBO0FBQ0E7QUFDQTtBQUZBO0FBUkE7QUFhQTtBQWhCQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1BBO0FBU0E7QUFFQTtBQU1BO0FBQUE7QUFBQTs7QUF5Q0E7QUFyQ0E7QUFDQTtBQWtCQTtBQUVBOzs7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQVFBOzs7QUFBQTtBQXZDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFGQTtBQURBO0FBQ0E7QUF5Q0E7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7Ozs7QUFHQTs7Ozs7Ozs7Ozs7OztBQTRGQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUFHQTtBQUNBO0FBQUE7Ozs7Ozs7O0FBRUE7Ozs7O0FBQ0E7Ozs7QUFJQTs7Ozs7QUFDQTs7OztBQUlBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFDQTs7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7Ozs7Ozs7QUFPQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBeElBO0FBQ0E7QUFxRUE7OztBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBZEE7QUFnQkE7Ozs7QUExRkE7QUFDQTtBQTJJQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFKQTtBQVFBO0FBQ0E7QUFHQTtBQUtBO0FBQUE7QUFBQTs7QUE4QkE7QUExQkE7QUFDQTtBQWNBO0FBRUE7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUNBO0FBNUJBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUZBO0FBREE7QUFDQTtBQThCQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL0NBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUVBOzs7OztBQUlBOzs7Ozs7Ozs7Ozs7O0FBK0RBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7OztBQUVBO0FBQ0E7QUFLQTs7O0FBRUE7QUFDQTtBQUtBOzs7Ozs7Ozs7Ozs7QUFHQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBQ0E7O0FBREE7QUFLQTtBQU1BOzs7Ozs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS0E7Ozs7O0FBRUE7Ozs7Ozs7Ozs7QUFXQTtBQUNBO0FBQ0E7QUFGQTtBQUNBOztBQUdBOzs7Ozs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBcklBO0FBQ0E7QUFnREE7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFIQTtBQVFBOzs7O0FBN0RBO0FBQ0E7QUEySUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBRUE7Ozs7O0FBSUE7Ozs7Ozs7Ozs7Ozs7QUEyREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUEsNGdCQUNBO0FBREE7QUFIQTtBQU1BO0FBQ0E7OztBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUhBO0FBS0E7OztBQUVBO0FBQUE7QUFDQTtBQUFBO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUEzR0E7QUFDQTtBQXNDQTs7O0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBQ0E7QUFFQTtBQVpBO0FBY0E7Ozs7QUF6REE7QUFDQTtBQThHQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUUE7QUFFQTtBQUdBO0FBQUE7QUFBQTs7QUFzS0E7QUEvSkE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQW1CQTtBQUdBO0FBa0JBO0FBUUE7QUFxQkE7QUFjQTtBQTlEQTtBQUNBO0FBWUE7QUFRQTtBQXNCQTtBQWFBO0FBc0JBO0FBRUE7Ozs7OztBQUNBO0FBQUE7QUFDQTtBQUNBOztBQUZBOzs7OztBQUdBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQXVCQTtBQUNBOzs7QUFBQTtBQXBLQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFrS0E7QUFBQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoTkE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUVBOzs7OztBQUlBOzs7Ozs7Ozs7Ozs7O0FBZ0VBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFJQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7QUEzRkE7QUFDQTtBQXlDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUZBO0FBUEE7QUFZQTs7O0FBRUE7QUFDQTtBQUNBOzs7O0FBOURBO0FBQ0E7QUE4RkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQy9HQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUVBOzs7OztBQUlBOzs7Ozs7Ozs7Ozs7O0FBMkRBO0FBQ0E7QUFLQTs7O0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFHQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUE3RkE7QUFDQTtBQWlDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQURBO0FBWEE7QUFlQTs7O0FBRUE7QUFDQTtBQUNBOzs7O0FBekRBO0FBQ0E7QUFnR0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQy9HQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7Ozs7QUFHQTs7Ozs7Ozs7Ozs7OztBQStDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7OztBQWhFQTtBQUNBO0FBd0JBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFGQTtBQVhBO0FBZ0JBOzs7O0FBN0NBO0FBQ0E7QUFtRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkZBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBOzs7OztBQUlBOzs7Ozs7Ozs7Ozs7O0FBNkNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7OztBQUVBO0FBQ0E7QUFLQTs7O0FBRUE7QUFDQTtBQUtBOzs7QUFFQTtBQUNBO0FBU0E7Ozs7OztBQUVBOzs7OztBQUVBOzs7Ozs7Ozs7O0FBV0E7QUFDQTtBQUNBO0FBRkE7QUFDQTs7QUFHQTs7Ozs7OztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQWxHQTtBQUNBO0FBa0NBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7Ozs7QUEzQ0E7QUFDQTtBQXNHQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4SEE7QUFRQTtBQUNBO0FBR0E7QUFHQTtBQUdBO0FBQUE7QUFBQTs7QUErQkE7QUEzQkE7QUFDQTtBQWNBO0FBRUE7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBQ0E7QUE3QkE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBRkE7QUFEQTtBQUNBO0FBK0JBO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakRBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQXlCQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBRkE7QUFMQTtBQVVBOzs7O0FBeENBO0FBQ0E7QUEwQ0E7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==