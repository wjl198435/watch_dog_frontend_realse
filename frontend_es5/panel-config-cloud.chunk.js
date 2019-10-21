(self["webpackJsonp"] = self["webpackJsonp"] || []).push([["panel-config-cloud"],{

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

/***/ "./src/components/ha-icon-next.ts":
/*!****************************************!*\
  !*** ./src/components/ha-icon-next.ts ***!
  \****************************************/
/*! exports provided: HaIconNext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HaIconNext", function() { return HaIconNext; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _polymer_iron_icon_iron_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/iron-icon/iron-icon */ "./node_modules/@polymer/iron-icon/iron-icon.js");
/* harmony import */ var _ha_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ha-icon */ "./src/components/ha-icon.ts");


// Not duplicate, this is for typing.
// tslint:disable-next-line

var HaIconNext = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(HaIconNext, _super);
    function HaIconNext() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HaIconNext.prototype.connectedCallback = function () {
        var _this = this;
        _super.prototype.connectedCallback.call(this);
        // wait to check for direction since otherwise direction is wrong even though top level is RTL
        setTimeout(function () {
            _this.icon =
                window.getComputedStyle(_this).direction === "ltr"
                    ? "hass:chevron-right"
                    : "hass:chevron-left";
        }, 100);
    };
    return HaIconNext;
}(_ha_icon__WEBPACK_IMPORTED_MODULE_2__["HaIcon"]));

customElements.define("ha-icon-next", HaIconNext);


/***/ }),

/***/ "./src/components/ha-icon.ts":
/*!***********************************!*\
  !*** ./src/components/ha-icon.ts ***!
  \***********************************/
/*! exports provided: HaIcon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HaIcon", function() { return HaIcon; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _polymer_iron_icon_iron_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/iron-icon/iron-icon */ "./node_modules/@polymer/iron-icon/iron-icon.js");


var ironIconClass = customElements.get("iron-icon");
var loaded = false;
var HaIcon = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(HaIcon, _super);
    function HaIcon() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HaIcon.prototype.listen = function (node, eventName, methodName) {
        _super.prototype.listen.call(this, node, eventName, methodName);
        if (!loaded && this._iconsetName === "mdi") {
            loaded = true;
            __webpack_require__.e(/*! import() | mdi-icons */ "mdi-icons").then(__webpack_require__.bind(null, /*! ../resources/mdi-icons */ "./src/resources/mdi-icons.js"));
        }
    };
    return HaIcon;
}(ironIconClass));

customElements.define("ha-icon", HaIcon);


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

/***/ "./src/data/alexa.ts":
/*!***************************!*\
  !*** ./src/data/alexa.ts ***!
  \***************************/
/*! exports provided: fetchCloudAlexaEntities, syncCloudAlexaEntities */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchCloudAlexaEntities", function() { return fetchCloudAlexaEntities; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "syncCloudAlexaEntities", function() { return syncCloudAlexaEntities; });
var fetchCloudAlexaEntities = function (hass) {
    return hass.callWS({ type: "cloud/alexa/entities" });
};
var syncCloudAlexaEntities = function (hass) {
    return hass.callWS({ type: "cloud/alexa/sync" });
};


/***/ }),

/***/ "./src/data/webhook.ts":
/*!*****************************!*\
  !*** ./src/data/webhook.ts ***!
  \*****************************/
/*! exports provided: fetchWebhooks */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchWebhooks", function() { return fetchWebhooks; });
var fetchWebhooks = function (hass) {
    return hass.callWS({
        type: "webhook/list",
    });
};


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

/***/ "./src/mixins/navigate-mixin.js":
/*!**************************************!*\
  !*** ./src/mixins/navigate-mixin.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_lib_utils_mixin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/lib/utils/mixin */ "./node_modules/@polymer/polymer/lib/utils/mixin.js");
/* harmony import */ var _common_navigate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/navigate */ "./src/common/navigate.ts");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



/*
 * @polymerMixin
 * @appliesMixin EventsMixin
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
        key: "navigate",
        value: function navigate() {
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _common_navigate__WEBPACK_IMPORTED_MODULE_1__["navigate"].apply(void 0, [this].concat(args));
        }
      }]);

      return _class;
    }(superClass)
  );
}));

/***/ }),

/***/ "./src/panels/config/cloud/account/cloud-account.js":
/*!**********************************************************!*\
  !*** ./src/panels/config/cloud/account/cloud-account.js ***!
  \**********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_mwc_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material/mwc-button */ "./node_modules/@material/mwc-button/mwc-button.js");
/* harmony import */ var _polymer_paper_item_paper_item_body__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-item/paper-item-body */ "./node_modules/@polymer/paper-item/paper-item-body.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _components_ha_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../components/ha-card */ "./src/components/ha-card.ts");
/* harmony import */ var _components_buttons_ha_call_api_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../components/buttons/ha-call-api-button */ "./src/components/buttons/ha-call-api-button.js");
/* harmony import */ var _layouts_hass_subpage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../layouts/hass-subpage */ "./src/layouts/hass-subpage.ts");
/* harmony import */ var _resources_ha_style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../resources/ha-style */ "./src/resources/ha-style.ts");
/* harmony import */ var _ha_config_section__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../ha-config-section */ "./src/panels/config/ha-config-section.js");
/* harmony import */ var _cloud_webhooks__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./cloud-webhooks */ "./src/panels/config/cloud/account/cloud-webhooks.ts");
/* harmony import */ var _cloud_alexa_pref__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./cloud-alexa-pref */ "./src/panels/config/cloud/account/cloud-alexa-pref.ts");
/* harmony import */ var _cloud_google_pref__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./cloud-google-pref */ "./src/panels/config/cloud/account/cloud-google-pref.ts");
/* harmony import */ var _cloud_remote_pref__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./cloud-remote-pref */ "./src/panels/config/cloud/account/cloud-remote-pref.ts");
/* harmony import */ var _mixins_events_mixin__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../mixins/events-mixin */ "./src/mixins/events-mixin.js");
/* harmony import */ var _data_cloud__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../data/cloud */ "./src/data/cloud.ts");
/* harmony import */ var _common_datetime_format_date_time__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../common/datetime/format_date_time */ "./src/common/datetime/format_date_time.ts");
/* harmony import */ var _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../mixins/localize-mixin */ "./src/mixins/localize-mixin.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      <style include=\"iron-flex ha-style\">\n        [slot=\"introduction\"] {\n          margin: -1em 0;\n        }\n        [slot=\"introduction\"] a {\n          color: var(--primary-color);\n        }\n        .content {\n          padding-bottom: 24px;\n          direction: ltr;\n        }\n        .account-row {\n          display: flex;\n          padding: 0 16px;\n        }\n        mwc-button {\n          align-self: center;\n        }\n        .soon {\n          font-style: italic;\n          margin-top: 24px;\n          text-align: center;\n        }\n        .nowrap {\n          white-space: nowrap;\n        }\n        .wrap {\n          white-space: normal;\n        }\n        .status {\n          text-transform: capitalize;\n          padding: 16px;\n        }\n        a {\n          color: var(--primary-color);\n        }\n      </style>\n      <hass-subpage header=\"[[localize('ui.panel.config.cloud.caption')]]\">\n        <div class=\"content\">\n          <ha-config-section is-wide=\"[[isWide]]\">\n            <span slot=\"header\"\n              >[[localize('ui.panel.config.cloud.caption')]]</span\n            >\n            <div slot=\"introduction\">\n              <p>\n                [[localize('ui.panel.config.cloud.account.thank_you_note')]]\n              </p>\n            </div>\n\n            <ha-card\n              header=\"[[localize('ui.panel.config.cloud.account.nabu_casa_account')]]\"\n            >\n              <div class=\"account-row\">\n                <paper-item-body two-line=\"\">\n                  [[cloudStatus.email]]\n                  <div secondary class=\"wrap\">\n                    [[_formatSubscription(_subscription)]]\n                  </div>\n                </paper-item-body>\n              </div>\n\n              <div class=\"account-row\">\n                <paper-item-body\n                  >[[localize('ui.panel.config.cloud.account.connection_status')]]</paper-item-body\n                >\n                <div class=\"status\">[[cloudStatus.cloud]]</div>\n              </div>\n\n              <div class=\"card-actions\">\n                <a href=\"https://account.nabucasa.com\" target=\"_blank\"\n                  ><mwc-button\n                    >[[localize('ui.panel.config.cloud.account.manage_account')]]</mwc-button\n                  ></a\n                >\n                <mwc-button style=\"float: right\" on-click=\"handleLogout\"\n                  >[[localize('ui.panel.config.cloud.account.sign_out')]]</mwc-button\n                >\n              </div>\n            </ha-card>\n          </ha-config-section>\n\n          <ha-config-section is-wide=\"[[isWide]]\">\n            <span slot=\"header\"\n              >[[localize('ui.panel.config.cloud.account.integrations')]]</span\n            >\n            <div slot=\"introduction\">\n              <p>\n                [[localize('ui.panel.config.cloud.account.integrations_introduction')]]\n              </p>\n              <p>\n                [[localize('ui.panel.config.cloud.account.integrations_introduction2')]]\n                <a href=\"https://www.nabucasa.com\" target=\"_blank\"\n                  >[[localize('ui.panel.config.cloud.account.integrations_link_all_features')]]</a\n                >.\n              </p>\n            </div>\n\n            <cloud-remote-pref\n              hass=\"[[hass]]\"\n              cloud-status=\"[[cloudStatus]]\"\n            ></cloud-remote-pref>\n\n            <cloud-alexa-pref\n              hass=\"[[hass]]\"\n              cloud-status=\"[[cloudStatus]]\"\n            ></cloud-alexa-pref>\n\n            <cloud-google-pref\n              hass=\"[[hass]]\"\n              cloud-status=\"[[cloudStatus]]\"\n            ></cloud-google-pref>\n\n            <cloud-webhooks\n              hass=\"[[hass]]\"\n              cloud-status=\"[[cloudStatus]]\"\n            ></cloud-webhooks>\n          </ha-config-section>\n        </div>\n      </hass-subpage>\n    "]);

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
 * @appliesMixin EventsMixin
 * @appliesMixin LocalizeMixin
 */

var CloudAccount =
/*#__PURE__*/
function (_EventsMixin) {
  _inherits(CloudAccount, _EventsMixin);

  function CloudAccount() {
    _classCallCheck(this, CloudAccount);

    return _possibleConstructorReturn(this, _getPrototypeOf(CloudAccount).apply(this, arguments));
  }

  _createClass(CloudAccount, [{
    key: "ready",
    value: function ready() {
      _get(_getPrototypeOf(CloudAccount.prototype), "ready", this).call(this);

      this._fetchSubscriptionInfo();
    }
  }, {
    key: "_computeRemoteConnected",
    value: function _computeRemoteConnected(connected) {
      return connected ? this.hass.localize("ui.panel.config.cloud.account.connected") : this.hass.localize("ui.panel.config.cloud.account.not_connected");
    }
  }, {
    key: "_fetchSubscriptionInfo",
    value: function () {
      var _fetchSubscriptionInfo2 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee() {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return Object(_data_cloud__WEBPACK_IMPORTED_MODULE_14__["fetchCloudSubscriptionInfo"])(this.hass);

              case 2:
                this._subscription = _context.sent;

                if (this._subscription.provider && this.cloudStatus && this.cloudStatus.cloud !== "connected") {
                  this.fire("ha-refresh-cloud-status");
                }

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function _fetchSubscriptionInfo() {
        return _fetchSubscriptionInfo2.apply(this, arguments);
      }

      return _fetchSubscriptionInfo;
    }()
  }, {
    key: "handleLogout",
    value: function handleLogout() {
      var _this = this;

      this.hass.callApi("post", "cloud/logout").then(function () {
        return _this.fire("ha-refresh-cloud-status");
      });
    }
  }, {
    key: "_formatSubscription",
    value: function _formatSubscription(subInfo) {
      if (subInfo === null) {
        return this.hass.localize("ui.panel.config.cloud.account.fetching_subscription");
      }

      var description = subInfo.human_description;

      if (subInfo.plan_renewal_date) {
        description = description.replace("{periodEnd}", Object(_common_datetime_format_date_time__WEBPACK_IMPORTED_MODULE_15__["default"])(new Date(subInfo.plan_renewal_date * 1000), this.hass.language));
      }

      return description;
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
        isWide: Boolean,
        cloudStatus: Object,
        _subscription: {
          type: Object,
          value: null
        }
      };
    }
  }]);

  return CloudAccount;
}(Object(_mixins_events_mixin__WEBPACK_IMPORTED_MODULE_13__["EventsMixin"])(Object(_mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_16__["default"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_3__["PolymerElement"])));

customElements.define("cloud-account", CloudAccount);

/***/ }),

/***/ "./src/panels/config/cloud/account/cloud-alexa-pref.ts":
/*!*************************************************************!*\
  !*** ./src/panels/config/cloud/account/cloud-alexa-pref.ts ***!
  \*************************************************************/
/*! exports provided: CloudAlexaPref */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CloudAlexaPref", function() { return CloudAlexaPref; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _material_mwc_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material/mwc-button */ "./node_modules/@material/mwc-button/mwc-button.js");
/* harmony import */ var _components_ha_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../components/ha-card */ "./src/components/ha-card.ts");
/* harmony import */ var _components_ha_switch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../components/ha-switch */ "./src/components/ha-switch.ts");
/* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../common/dom/fire_event */ "./src/common/dom/fire_event.ts");
/* harmony import */ var _data_cloud__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../data/cloud */ "./src/data/cloud.ts");
/* harmony import */ var _data_alexa__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../data/alexa */ "./src/data/alexa.ts");








var CloudAlexaPref = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(CloudAlexaPref, _super);
    function CloudAlexaPref() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._syncing = false;
        return _this;
    }
    CloudAlexaPref.prototype.render = function () {
        if (!this.cloudStatus) {
            return Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_1 || (templateObject_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])([""], [""])));
        }
        var _a = this.cloudStatus.prefs, alexa_enabled = _a.alexa_enabled, alexa_report_state = _a.alexa_report_state;
        return Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_3 || (templateObject_3 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      <ha-card\n        header=", "\n      >\n        <div class=\"switch\">\n          <ha-switch\n            .checked=", "\n            @change=", "\n          ></ha-switch>\n        </div>\n        <div class=\"card-content\">\n          ", "\n          <ul>\n            <li>\n              <a\n                href=\"https://skills-store.amazon.com/deeplink/dp/B0772J1QKB?deviceType=app\"\n                target=\"_blank\"\n              >\n                ", "\n              </a>\n            </li>\n            <li>\n              <a\n                href=\"https://www.nabucasa.com/config/amazon_alexa/\"\n                target=\"_blank\"\n              >\n                ", "\n              </a>\n            </li>\n          </ul>\n          ", "\n        </div>\n        <div class=\"card-actions\">\n          <mwc-button @click=", " .disabled=", ">\n            ", "\n          </mwc-button>\n          <div class=\"spacer\"></div>\n          <a href=\"/config/cloud/alexa\">\n            <mwc-button\n              >", "</mwc-button\n            >\n          </a>\n        </div>\n      </ha-card>\n    "], ["\n      <ha-card\n        header=",
            "\n      >\n        <div class=\"switch\">\n          <ha-switch\n            .checked=", "\n            @change=", "\n          ></ha-switch>\n        </div>\n        <div class=\"card-content\">\n          ", "\n          <ul>\n            <li>\n              <a\n                href=\"https://skills-store.amazon.com/deeplink/dp/B0772J1QKB?deviceType=app\"\n                target=\"_blank\"\n              >\n                ",
            "\n              </a>\n            </li>\n            <li>\n              <a\n                href=\"https://www.nabucasa.com/config/amazon_alexa/\"\n                target=\"_blank\"\n              >\n                ",
            "\n              </a>\n            </li>\n          </ul>\n          ",
            "\n        </div>\n        <div class=\"card-actions\">\n          <mwc-button @click=", " .disabled=", ">\n            ",
            "\n          </mwc-button>\n          <div class=\"spacer\"></div>\n          <a href=\"/config/cloud/alexa\">\n            <mwc-button\n              >",
            "</mwc-button\n            >\n          </a>\n        </div>\n      </ha-card>\n    "])), this.hass.localize("ui.panel.config.cloud.account.alexa.title"), alexa_enabled, this._enabledToggleChanged, this.hass.localize("ui.panel.config.cloud.account.alexa.info"), this.hass.localize("ui.panel.config.cloud.account.alexa.enable_ha_skill"), this.hass.localize("ui.panel.config.cloud.account.alexa.config_documentation"), alexa_enabled
            ? Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_2 || (templateObject_2 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n                <div class=\"state-reporting\">\n                  <h3>\n                    ", "\n                  </h3>\n                  <div class=\"state-reporting-switch\">\n                    <ha-switch\n                      .checked=", "\n                      @change=", "\n                    ></ha-switch>\n                  </div>\n                </div>\n                <p>\n                  ", "\n                </p>\n              "], ["\n                <div class=\"state-reporting\">\n                  <h3>\n                    ",
                "\n                  </h3>\n                  <div class=\"state-reporting-switch\">\n                    <ha-switch\n                      .checked=", "\n                      @change=", "\n                    ></ha-switch>\n                  </div>\n                </div>\n                <p>\n                  ",
                "\n                </p>\n              "])), this.hass.localize("ui.panel.config.cloud.account.alexa.enable_state_reporting"), alexa_report_state, this._reportToggleChanged, this.hass.localize("ui.panel.config.cloud.account.alexa.info_state_reporting")) : "", this._handleSync, this._syncing, this.hass.localize("ui.panel.config.cloud.account.alexa.sync_entities"), this.hass.localize("ui.panel.config.cloud.account.alexa.manage_entities"));
    };
    CloudAlexaPref.prototype._handleSync = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var err_1;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this._syncing = true;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, 4, 5]);
                        return [4 /*yield*/, Object(_data_alexa__WEBPACK_IMPORTED_MODULE_7__["syncCloudAlexaEntities"])(this.hass)];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 5];
                    case 3:
                        err_1 = _a.sent();
                        alert(this.hass.localize("ui.panel.config.cloud.account.alexa.sync_entities_error") + " " + err_1.body.message);
                        return [3 /*break*/, 5];
                    case 4:
                        this._syncing = false;
                        return [7 /*endfinally*/];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    CloudAlexaPref.prototype._enabledToggleChanged = function (ev) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var toggle, err_2;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        toggle = ev.target;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, Object(_data_cloud__WEBPACK_IMPORTED_MODULE_6__["updateCloudPref"])(this.hass, { alexa_enabled: toggle.checked })];
                    case 2:
                        _a.sent();
                        Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_5__["fireEvent"])(this, "ha-refresh-cloud-status");
                        return [3 /*break*/, 4];
                    case 3:
                        err_2 = _a.sent();
                        toggle.checked = !toggle.checked;
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    CloudAlexaPref.prototype._reportToggleChanged = function (ev) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var toggle, err_3;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        toggle = ev.target;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, Object(_data_cloud__WEBPACK_IMPORTED_MODULE_6__["updateCloudPref"])(this.hass, {
                                alexa_report_state: toggle.checked,
                            })];
                    case 2:
                        _a.sent();
                        Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_5__["fireEvent"])(this, "ha-refresh-cloud-status");
                        return [3 /*break*/, 4];
                    case 3:
                        err_3 = _a.sent();
                        alert(this.hass.localize("ui.panel.config.cloud.account.alexa.state_reporting_error", "enable_disable", this.hass.localize(toggle.checked
                            ? "ui.panel.config.cloud.account.alexa.enable"
                            : "ui.panel.config.cloud.account.alexa.disable")) + " " + err_3.message);
                        toggle.checked = !toggle.checked;
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    Object.defineProperty(CloudAlexaPref, "styles", {
        get: function () {
            return Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["css"])(templateObject_4 || (templateObject_4 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      a {\n        color: var(--primary-color);\n      }\n      .switch {\n        position: absolute;\n        right: 24px;\n        top: 32px;\n      }\n      .card-actions {\n        display: flex;\n      }\n      .card-actions a {\n        text-decoration: none;\n      }\n      .spacer {\n        flex-grow: 1;\n      }\n      .state-reporting {\n        display: flex;\n        margin-top: 1.5em;\n      }\n      .state-reporting + p {\n        margin-top: 0.5em;\n      }\n      .state-reporting h3 {\n        flex-grow: 1;\n        margin: 0;\n      }\n      .state-reporting-switch {\n        margin-top: 0.25em;\n        margin-right: 7px;\n        margin-left: 0.5em;\n      }\n    "], ["\n      a {\n        color: var(--primary-color);\n      }\n      .switch {\n        position: absolute;\n        right: 24px;\n        top: 32px;\n      }\n      .card-actions {\n        display: flex;\n      }\n      .card-actions a {\n        text-decoration: none;\n      }\n      .spacer {\n        flex-grow: 1;\n      }\n      .state-reporting {\n        display: flex;\n        margin-top: 1.5em;\n      }\n      .state-reporting + p {\n        margin-top: 0.5em;\n      }\n      .state-reporting h3 {\n        flex-grow: 1;\n        margin: 0;\n      }\n      .state-reporting-switch {\n        margin-top: 0.25em;\n        margin-right: 7px;\n        margin-left: 0.5em;\n      }\n    "])));
        },
        enumerable: true,
        configurable: true
    });
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
    ], CloudAlexaPref.prototype, "hass", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
    ], CloudAlexaPref.prototype, "cloudStatus", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
    ], CloudAlexaPref.prototype, "_syncing", void 0);
    return CloudAlexaPref;
}(lit_element__WEBPACK_IMPORTED_MODULE_1__["LitElement"]));

customElements.define("cloud-alexa-pref", CloudAlexaPref);
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;


/***/ }),

/***/ "./src/panels/config/cloud/account/cloud-google-pref.ts":
/*!**************************************************************!*\
  !*** ./src/panels/config/cloud/account/cloud-google-pref.ts ***!
  \**************************************************************/
/*! exports provided: CloudGooglePref */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CloudGooglePref", function() { return CloudGooglePref; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _material_mwc_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material/mwc-button */ "./node_modules/@material/mwc-button/mwc-button.js");
/* harmony import */ var _components_buttons_ha_call_api_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../components/buttons/ha-call-api-button */ "./src/components/buttons/ha-call-api-button.js");
/* harmony import */ var _components_ha_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../components/ha-card */ "./src/components/ha-card.ts");
/* harmony import */ var _components_ha_switch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../components/ha-switch */ "./src/components/ha-switch.ts");
/* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../common/dom/fire_event */ "./src/common/dom/fire_event.ts");
/* harmony import */ var _data_cloud__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../data/cloud */ "./src/data/cloud.ts");
/* harmony import */ var _util_toast_saved_success__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../util/toast-saved-success */ "./src/util/toast-saved-success.ts");









var CloudGooglePref = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(CloudGooglePref, _super);
    function CloudGooglePref() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(CloudGooglePref, "properties", {
        get: function () {
            return {
                hass: {},
                cloudStatus: {},
            };
        },
        enumerable: true,
        configurable: true
    });
    CloudGooglePref.prototype.render = function () {
        if (!this.cloudStatus) {
            return Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_1 || (templateObject_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])([""], [""])));
        }
        var _a = this.cloudStatus.prefs, google_enabled = _a.google_enabled, google_report_state = _a.google_report_state, google_secure_devices_pin = _a.google_secure_devices_pin;
        return Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_3 || (templateObject_3 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      <ha-card\n        header=", "\n      >\n        <div class=\"switch\">\n          <ha-switch\n            id=\"google_enabled\"\n            .checked=\"", "\"\n            @change=\"", "\"\n          ></ha-switch>\n        </div>\n        <div class=\"card-content\">\n          ", "\n          <ul>\n            <li>\n              <a\n                href=\"https://assistant.google.com/services/a/uid/00000091fd5fb875?hl=en-US\"\n                target=\"_blank\"\n              >\n                ", "\n              </a>\n            </li>\n            <li>\n              <a\n                href=\"https://www.nabucasa.com/config/google_assistant/\"\n                target=\"_blank\"\n              >\n                ", "\n              </a>\n            </li>\n          </ul>\n          ", "\n        </div>\n        <div class=\"card-actions\">\n          <ha-call-api-button\n            .hass=\"", "\"\n            .disabled=\"", "\"\n            path=\"cloud/google_actions/sync\"\n          >\n            ", "\n          </ha-call-api-button>\n          <div class=\"spacer\"></div>\n          <a href=\"/config/cloud/google-assistant\">\n            <mwc-button\n              >", "</mwc-button\n            >\n          </a>\n        </div>\n      </ha-card>\n    "], ["\n      <ha-card\n        header=",
            "\n      >\n        <div class=\"switch\">\n          <ha-switch\n            id=\"google_enabled\"\n            .checked=\"", "\"\n            @change=\"", "\"\n          ></ha-switch>\n        </div>\n        <div class=\"card-content\">\n          ", "\n          <ul>\n            <li>\n              <a\n                href=\"https://assistant.google.com/services/a/uid/00000091fd5fb875?hl=en-US\"\n                target=\"_blank\"\n              >\n                ",
            "\n              </a>\n            </li>\n            <li>\n              <a\n                href=\"https://www.nabucasa.com/config/google_assistant/\"\n                target=\"_blank\"\n              >\n                ",
            "\n              </a>\n            </li>\n          </ul>\n          ",
            "\n        </div>\n        <div class=\"card-actions\">\n          <ha-call-api-button\n            .hass=\"", "\"\n            .disabled=\"", "\"\n            path=\"cloud/google_actions/sync\"\n          >\n            ",
            "\n          </ha-call-api-button>\n          <div class=\"spacer\"></div>\n          <a href=\"/config/cloud/google-assistant\">\n            <mwc-button\n              >",
            "</mwc-button\n            >\n          </a>\n        </div>\n      </ha-card>\n    "])), this.hass.localize("ui.panel.config.cloud.account.google.title"), google_enabled, this._enableToggleChanged, this.hass.localize("ui.panel.config.cloud.account.google.info"), this.hass.localize("ui.panel.config.cloud.account.google.enable_ha_skill"), this.hass.localize("ui.panel.config.cloud.account.google.config_documentation"), google_enabled
            ? Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_2 || (templateObject_2 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n                <div class=\"state-reporting\">\n                  <h3>\n                    ", "\n                  </h3>\n                  <div class=\"state-reporting-switch\">\n                    <ha-switch\n                      .checked=", "\n                      @change=", "\n                    ></ha-switch>\n                  </div>\n                </div>\n                <p>\n                  ", "\n                </p>\n\n                <div class=\"secure_devices\">\n                  <h3>\n                    ", "\n                  </h3>\n                  ", "\n                  <paper-input\n                    label=\"", "\"\n                    id=\"google_secure_devices_pin\"\n                    placeholder=\"", "\"\n                    .value=", "\n                    @change=\"", "\"\n                  ></paper-input>\n                </div>\n              "], ["\n                <div class=\"state-reporting\">\n                  <h3>\n                    ",
                "\n                  </h3>\n                  <div class=\"state-reporting-switch\">\n                    <ha-switch\n                      .checked=", "\n                      @change=", "\n                    ></ha-switch>\n                  </div>\n                </div>\n                <p>\n                  ",
                "\n                </p>\n\n                <div class=\"secure_devices\">\n                  <h3>\n                    ",
                "\n                  </h3>\n                  ",
                "\n                  <paper-input\n                    label=\"",
                "\"\n                    id=\"google_secure_devices_pin\"\n                    placeholder=\"",
                "\"\n                    .value=", "\n                    @change=\"", "\"\n                  ></paper-input>\n                </div>\n              "])), this.hass.localize("ui.panel.config.cloud.account.google.enable_state_reporting"), google_report_state, this._reportToggleChanged, this.hass.localize("ui.panel.config.cloud.account.google.info_state_reporting"), this.hass.localize("ui.panel.config.cloud.account.google.security_devices"), this.hass.localize("ui.panel.config.cloud.account.google.enter_pin_info"), this.hass.localize("ui.panel.config.cloud.account.google.devices_pin"), this.hass.localize("ui.panel.config.cloud.account.google.enter_pin_hint"), google_secure_devices_pin || "", this._pinChanged) : "", this.hass, !google_enabled, this.hass.localize("ui.panel.config.cloud.account.google.sync_entities"), this.hass.localize("ui.panel.config.cloud.account.google.manage_entities"));
    };
    CloudGooglePref.prototype._enableToggleChanged = function (ev) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var toggle, err_1;
            var _a;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        toggle = ev.target;
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, Object(_data_cloud__WEBPACK_IMPORTED_MODULE_7__["updateCloudPref"])(this.hass, (_a = {}, _a[toggle.id] = toggle.checked, _a))];
                    case 2:
                        _b.sent();
                        Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_6__["fireEvent"])(this, "ha-refresh-cloud-status");
                        return [3 /*break*/, 4];
                    case 3:
                        err_1 = _b.sent();
                        toggle.checked = !toggle.checked;
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    CloudGooglePref.prototype._reportToggleChanged = function (ev) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var toggle, err_2;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        toggle = ev.target;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, Object(_data_cloud__WEBPACK_IMPORTED_MODULE_7__["updateCloudPref"])(this.hass, {
                                google_report_state: toggle.checked,
                            })];
                    case 2:
                        _a.sent();
                        Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_6__["fireEvent"])(this, "ha-refresh-cloud-status");
                        return [3 /*break*/, 4];
                    case 3:
                        err_2 = _a.sent();
                        alert("Unable to " + (toggle.checked ? "enable" : "disable") + " report state. " + err_2.message);
                        toggle.checked = !toggle.checked;
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    CloudGooglePref.prototype._pinChanged = function (ev) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var input, err_3;
            var _a;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        input = ev.target;
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, Object(_data_cloud__WEBPACK_IMPORTED_MODULE_7__["updateCloudPref"])(this.hass, (_a = {},
                                _a[input.id] = input.value || null,
                                _a))];
                    case 2:
                        _b.sent();
                        Object(_util_toast_saved_success__WEBPACK_IMPORTED_MODULE_8__["showSaveSuccessToast"])(this, this.hass);
                        Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_6__["fireEvent"])(this, "ha-refresh-cloud-status");
                        return [3 /*break*/, 4];
                    case 3:
                        err_3 = _b.sent();
                        alert(this.hass.localize("ui.panel.config.cloud.account.google.enter_pin_error") + " " + err_3.message);
                        input.value = this.cloudStatus.prefs.google_secure_devices_pin;
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    Object.defineProperty(CloudGooglePref, "styles", {
        get: function () {
            return Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["css"])(templateObject_4 || (templateObject_4 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      a {\n        color: var(--primary-color);\n      }\n      .switch {\n        position: absolute;\n        right: 24px;\n        top: 32px;\n      }\n      ha-call-api-button {\n        color: var(--primary-color);\n        font-weight: 500;\n      }\n      .secure_devices {\n        padding-top: 8px;\n      }\n      paper-input {\n        width: 250px;\n      }\n      .card-actions {\n        display: flex;\n      }\n      .card-actions a {\n        text-decoration: none;\n      }\n      .spacer {\n        flex-grow: 1;\n      }\n      .state-reporting {\n        display: flex;\n        margin-top: 1.5em;\n      }\n      .state-reporting + p {\n        margin-top: 0.5em;\n      }\n      h3 {\n        margin: 0 0 8px 0;\n      }\n      .state-reporting h3 {\n        flex-grow: 1;\n        margin: 0;\n      }\n      .state-reporting-switch {\n        margin-top: 0.25em;\n        margin-right: 7px;\n        margin-left: 0.5em;\n      }\n    "], ["\n      a {\n        color: var(--primary-color);\n      }\n      .switch {\n        position: absolute;\n        right: 24px;\n        top: 32px;\n      }\n      ha-call-api-button {\n        color: var(--primary-color);\n        font-weight: 500;\n      }\n      .secure_devices {\n        padding-top: 8px;\n      }\n      paper-input {\n        width: 250px;\n      }\n      .card-actions {\n        display: flex;\n      }\n      .card-actions a {\n        text-decoration: none;\n      }\n      .spacer {\n        flex-grow: 1;\n      }\n      .state-reporting {\n        display: flex;\n        margin-top: 1.5em;\n      }\n      .state-reporting + p {\n        margin-top: 0.5em;\n      }\n      h3 {\n        margin: 0 0 8px 0;\n      }\n      .state-reporting h3 {\n        flex-grow: 1;\n        margin: 0;\n      }\n      .state-reporting-switch {\n        margin-top: 0.25em;\n        margin-right: 7px;\n        margin-left: 0.5em;\n      }\n    "])));
        },
        enumerable: true,
        configurable: true
    });
    return CloudGooglePref;
}(lit_element__WEBPACK_IMPORTED_MODULE_1__["LitElement"]));

customElements.define("cloud-google-pref", CloudGooglePref);
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;


/***/ }),

/***/ "./src/panels/config/cloud/account/cloud-remote-pref.ts":
/*!**************************************************************!*\
  !*** ./src/panels/config/cloud/account/cloud-remote-pref.ts ***!
  \**************************************************************/
/*! exports provided: CloudRemotePref */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CloudRemotePref", function() { return CloudRemotePref; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _material_mwc_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material/mwc-button */ "./node_modules/@material/mwc-button/mwc-button.js");
/* harmony import */ var _polymer_paper_item_paper_item_body__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/paper-item/paper-item-body */ "./node_modules/@polymer/paper-item/paper-item-body.js");
/* harmony import */ var _components_ha_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../components/ha-card */ "./src/components/ha-card.ts");
/* harmony import */ var _components_ha_switch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../components/ha-switch */ "./src/components/ha-switch.ts");
/* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../common/dom/fire_event */ "./src/common/dom/fire_event.ts");
/* harmony import */ var _data_cloud__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../data/cloud */ "./src/data/cloud.ts");
/* harmony import */ var _dialog_cloud_certificate_show_dialog_cloud_certificate__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../dialog-cloud-certificate/show-dialog-cloud-certificate */ "./src/panels/config/cloud/dialog-cloud-certificate/show-dialog-cloud-certificate.ts");









var CloudRemotePref = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(CloudRemotePref, _super);
    function CloudRemotePref() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(CloudRemotePref, "properties", {
        get: function () {
            return {
                hass: {},
                cloudStatus: {},
            };
        },
        enumerable: true,
        configurable: true
    });
    CloudRemotePref.prototype.render = function () {
        if (!this.cloudStatus) {
            return Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_1 || (templateObject_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])([""], [""])));
        }
        var _a = this.cloudStatus, remote_connected = _a.remote_connected, remote_domain = _a.remote_domain, remote_certificate = _a.remote_certificate;
        if (!remote_certificate) {
            return Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_2 || (templateObject_2 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n        <ha-card\n          header=", "\n        >\n          <div class=\"preparing\">\n            ", "\n          </div>\n        </ha-card>\n      "], ["\n        <ha-card\n          header=",
                "\n        >\n          <div class=\"preparing\">\n            ",
                "\n          </div>\n        </ha-card>\n      "])), this.hass.localize("ui.panel.config.cloud.account.remote.title"), this.hass.localize("ui.panel.config.cloud.account.remote.access_is_being_prepared"));
        }
        return Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_4 || (templateObject_4 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      <ha-card\n        header=", "\n      >\n        <div class=\"switch\">\n          <ha-switch\n            .checked=\"", "\"\n            @change=\"", "\"\n          ></ha-switch>\n        </div>\n        <div class=\"card-content\">\n          ", "\n          ", "\n          <a href=\"https://", "\" target=\"_blank\" class=\"break-word\">\n            https://", "</a\n          >.\n        </div>\n        <div class=\"card-actions\">\n          <a href=\"https://www.nabucasa.com/config/remote/\" target=\"_blank\">\n            <mwc-button\n              >", "</mwc-button\n            >\n          </a>\n          ", "\n        </div>\n      </ha-card>\n    "], ["\n      <ha-card\n        header=",
            "\n      >\n        <div class=\"switch\">\n          <ha-switch\n            .checked=\"", "\"\n            @change=\"", "\"\n          ></ha-switch>\n        </div>\n        <div class=\"card-content\">\n          ", "\n          ",
            "\n          <a href=\"https://", "\" target=\"_blank\" class=\"break-word\">\n            https://", "</a\n          >.\n        </div>\n        <div class=\"card-actions\">\n          <a href=\"https://www.nabucasa.com/config/remote/\" target=\"_blank\">\n            <mwc-button\n              >",
            "</mwc-button\n            >\n          </a>\n          ",
            "\n        </div>\n      </ha-card>\n    "])), this.hass.localize("ui.panel.config.cloud.account.remote.title"), remote_connected, this._toggleChanged, this.hass.localize("ui.panel.config.cloud.account.remote.info"), remote_connected
            ? this.hass.localize("ui.panel.config.cloud.account.remote.instance_is_available")
            : this.hass.localize("ui.panel.config.cloud.account.remote.instance_will_be_available"), remote_domain, remote_domain, this.hass.localize("ui.panel.config.cloud.account.remote.link_learn_how_it_works"), remote_certificate
            ? Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_3 || (templateObject_3 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n                <div class=\"spacer\"></div>\n                <mwc-button @click=", ">\n                  ", "\n                </mwc-button>\n              "], ["\n                <div class=\"spacer\"></div>\n                <mwc-button @click=", ">\n                  ",
                "\n                </mwc-button>\n              "])), this._openCertInfo, this.hass.localize("ui.panel.config.cloud.account.remote.certificate_info")) : "");
    };
    CloudRemotePref.prototype._openCertInfo = function () {
        Object(_dialog_cloud_certificate_show_dialog_cloud_certificate__WEBPACK_IMPORTED_MODULE_8__["showCloudCertificateDialog"])(this, {
            certificateInfo: this.cloudStatus.remote_certificate,
        });
    };
    CloudRemotePref.prototype._toggleChanged = function (ev) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var toggle, err_1;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        toggle = ev.target;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 6, , 7]);
                        if (!toggle.checked) return [3 /*break*/, 3];
                        return [4 /*yield*/, Object(_data_cloud__WEBPACK_IMPORTED_MODULE_7__["connectCloudRemote"])(this.hass)];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 5];
                    case 3: return [4 /*yield*/, Object(_data_cloud__WEBPACK_IMPORTED_MODULE_7__["disconnectCloudRemote"])(this.hass)];
                    case 4:
                        _a.sent();
                        _a.label = 5;
                    case 5:
                        Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_6__["fireEvent"])(this, "ha-refresh-cloud-status");
                        return [3 /*break*/, 7];
                    case 6:
                        err_1 = _a.sent();
                        alert(err_1.message);
                        toggle.checked = !toggle.checked;
                        return [3 /*break*/, 7];
                    case 7: return [2 /*return*/];
                }
            });
        });
    };
    Object.defineProperty(CloudRemotePref, "styles", {
        get: function () {
            return Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["css"])(templateObject_5 || (templateObject_5 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      .preparing {\n        padding: 0 16px 16px;\n      }\n      a {\n        color: var(--primary-color);\n      }\n      .break-word {\n        overflow-wrap: break-word;\n      }\n      .switch {\n        position: absolute;\n        right: 24px;\n        top: 32px;\n      }\n      .card-actions {\n        display: flex;\n      }\n      .card-actions a {\n        text-decoration: none;\n      }\n      .spacer {\n        flex-grow: 1;\n      }\n    "], ["\n      .preparing {\n        padding: 0 16px 16px;\n      }\n      a {\n        color: var(--primary-color);\n      }\n      .break-word {\n        overflow-wrap: break-word;\n      }\n      .switch {\n        position: absolute;\n        right: 24px;\n        top: 32px;\n      }\n      .card-actions {\n        display: flex;\n      }\n      .card-actions a {\n        text-decoration: none;\n      }\n      .spacer {\n        flex-grow: 1;\n      }\n    "])));
        },
        enumerable: true,
        configurable: true
    });
    CloudRemotePref = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["customElement"])("cloud-remote-pref")
    ], CloudRemotePref);
    return CloudRemotePref;
}(lit_element__WEBPACK_IMPORTED_MODULE_1__["LitElement"]));

var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;


/***/ }),

/***/ "./src/panels/config/cloud/account/cloud-webhooks.ts":
/*!***********************************************************!*\
  !*** ./src/panels/config/cloud/account/cloud-webhooks.ts ***!
  \***********************************************************/
/*! exports provided: CloudWebhooks */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CloudWebhooks", function() { return CloudWebhooks; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _polymer_paper_item_paper_item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-item/paper-item */ "./node_modules/@polymer/paper-item/paper-item.js");
/* harmony import */ var _polymer_paper_item_paper_item_body__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/paper-item/paper-item-body */ "./node_modules/@polymer/paper-item/paper-item-body.js");
/* harmony import */ var _polymer_paper_spinner_paper_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/paper-spinner/paper-spinner */ "./node_modules/@polymer/paper-spinner/paper-spinner.js");
/* harmony import */ var _components_ha_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../components/ha-card */ "./src/components/ha-card.ts");
/* harmony import */ var _components_ha_switch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../components/ha-switch */ "./src/components/ha-switch.ts");
/* harmony import */ var _data_webhook__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../data/webhook */ "./src/data/webhook.ts");
/* harmony import */ var _data_cloud__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../data/cloud */ "./src/data/cloud.ts");
/* harmony import */ var _dialog_manage_cloudhook_show_dialog_manage_cloudhook__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../dialog-manage-cloudhook/show-dialog-manage-cloudhook */ "./src/panels/config/cloud/dialog-manage-cloudhook/show-dialog-manage-cloudhook.ts");










var CloudWebhooks = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(CloudWebhooks, _super);
    function CloudWebhooks() {
        var _this = _super.call(this) || this;
        _this._progress = [];
        return _this;
    }
    Object.defineProperty(CloudWebhooks, "properties", {
        get: function () {
            return {
                hass: {},
                cloudStatus: {},
                _cloudHooks: {},
                _localHooks: {},
                _progress: {},
            };
        },
        enumerable: true,
        configurable: true
    });
    CloudWebhooks.prototype.connectedCallback = function () {
        _super.prototype.connectedCallback.call(this);
        this._fetchData();
    };
    CloudWebhooks.prototype.render = function () {
        return Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_1 || (templateObject_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      ", "\n      <ha-card\n        header=", "\n      >\n        <div class=\"card-content\">\n          ", "\n          ", "\n\n          <div class=\"footer\">\n            <a href=\"https://www.nabucasa.com/config/webhooks\" target=\"_blank\">\n              ", "\n            </a>\n          </div>\n        </div>\n      </ha-card>\n    "], ["\n      ", "\n      <ha-card\n        header=",
            "\n      >\n        <div class=\"card-content\">\n          ", "\n          ", "\n\n          <div class=\"footer\">\n            <a href=\"https://www.nabucasa.com/config/webhooks\" target=\"_blank\">\n              ",
            "\n            </a>\n          </div>\n        </div>\n      </ha-card>\n    "])), this.renderStyle(), this.hass.localize("ui.panel.config.cloud.account.webhooks.title"), this.hass.localize("ui.panel.config.cloud.account.webhooks.info"), this._renderBody(), this.hass.localize("ui.panel.config.cloud.account.webhooks.link_learn_more"));
    };
    CloudWebhooks.prototype.updated = function (changedProps) {
        _super.prototype.updated.call(this, changedProps);
        if (changedProps.has("cloudStatus") && this.cloudStatus) {
            this._cloudHooks = this.cloudStatus.prefs.cloudhooks || {};
        }
    };
    CloudWebhooks.prototype._renderBody = function () {
        var _this = this;
        if (!this.cloudStatus || !this._localHooks || !this._cloudHooks) {
            return Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_2 || (templateObject_2 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n        <div class=\"body-text\">\n          ", "\n        </div>\n      "], ["\n        <div class=\"body-text\">\n          ",
                "\n        </div>\n      "])), this.hass.localize("ui.panel.config.cloud.account.webhooks.loading"));
        }
        if (this._localHooks.length === 0) {
            return Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_3 || (templateObject_3 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n        <div class=\"body-text\">\n          ", "\n          <a href=\"/config/integrations\"\n            >", "</a\n          >\n          ", "\n          <a href=\"/config/automation/new\"\n            >", "</a\n          >.\n        </div>\n      "], ["\n        <div class=\"body-text\">\n          ",
                "\n          <a href=\"/config/integrations\"\n            >",
                "</a\n          >\n          ",
                "\n          <a href=\"/config/automation/new\"\n            >",
                "</a\n          >.\n        </div>\n      "])), this.hass.localize("ui.panel.config.cloud.account.webhooks.no_hooks_yet"), this.hass.localize("ui.panel.config.cloud.account.webhooks.no_hooks_yet_link_integration"), this.hass.localize("ui.panel.config.cloud.account.webhooks.no_hooks_yet2"), this.hass.localize("ui.panel.config.cloud.account.webhooks.no_hooks_yet_link_automation"));
        }
        return this._localHooks.map(function (entry) { return Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_7 || (templateObject_7 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n        <div class=\"webhook\" .entry=\"", "\">\n          <paper-item-body two-line>\n            <div>\n              ", "\n              ", "\n            </div>\n            <div secondary>", "</div>\n          </paper-item-body>\n          ", "\n        </div>\n      "], ["\n        <div class=\"webhook\" .entry=\"", "\">\n          <paper-item-body two-line>\n            <div>\n              ", "\n              ",
            "\n            </div>\n            <div secondary>", "</div>\n          </paper-item-body>\n          ",
            "\n        </div>\n      "])), entry, entry.name, entry.domain === entry.name.toLowerCase()
            ? ""
            : " (" + entry.domain + ")", entry.webhook_id, _this._progress.includes(entry.webhook_id)
            ? Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_4 || (templateObject_4 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n                <div class=\"progress\">\n                  <paper-spinner active></paper-spinner>\n                </div>\n              "], ["\n                <div class=\"progress\">\n                  <paper-spinner active></paper-spinner>\n                </div>\n              "]))) : _this._cloudHooks[entry.webhook_id]
            ? Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_5 || (templateObject_5 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n                <mwc-button @click=\"", "\">\n                  ", "\n                </mwc-button>\n              "], ["\n                <mwc-button @click=\"", "\">\n                  ",
                "\n                </mwc-button>\n              "])), _this._handleManageButton, _this.hass.localize("ui.panel.config.cloud.account.webhooks.manage")) : Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_6 || (templateObject_6 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n                <ha-switch @click=\"", "\"></ha-switch>\n              "], ["\n                <ha-switch @click=\"", "\"></ha-switch>\n              "])), _this._enableWebhook)); });
    };
    CloudWebhooks.prototype._showDialog = function (webhookId) {
        var _this = this;
        var webhook = this._localHooks.find(function (ent) { return ent.webhook_id === webhookId; });
        var cloudhook = this._cloudHooks[webhookId];
        Object(_dialog_manage_cloudhook_show_dialog_manage_cloudhook__WEBPACK_IMPORTED_MODULE_9__["showManageCloudhookDialog"])(this, {
            webhook: webhook,
            cloudhook: cloudhook,
            disableHook: function () { return _this._disableWebhook(webhookId); },
        });
    };
    CloudWebhooks.prototype._handleManageButton = function (ev) {
        var entry = ev.currentTarget.parentElement.entry;
        this._showDialog(entry.webhook_id);
    };
    CloudWebhooks.prototype._enableWebhook = function (ev) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var entry, updatedWebhook, err_1;
            var _a;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        entry = ev.currentTarget.parentElement.entry;
                        this._progress = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])(this._progress, [entry.webhook_id]);
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 3, 4, 5]);
                        return [4 /*yield*/, Object(_data_cloud__WEBPACK_IMPORTED_MODULE_8__["createCloudhook"])(this.hass, entry.webhook_id)];
                    case 2:
                        updatedWebhook = _b.sent();
                        return [3 /*break*/, 5];
                    case 3:
                        err_1 = _b.sent();
                        alert(err_1.message);
                        return [2 /*return*/];
                    case 4:
                        this._progress = this._progress.filter(function (wid) { return wid !== entry.webhook_id; });
                        return [7 /*endfinally*/];
                    case 5:
                        this._cloudHooks = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this._cloudHooks), (_a = {}, _a[entry.webhook_id] = updatedWebhook, _a));
                        // Only open dialog if we're not also enabling others, otherwise it's confusing
                        if (this._progress.length === 0) {
                            this._showDialog(entry.webhook_id);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    CloudWebhooks.prototype._disableWebhook = function (webhookId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var err_2, _a, _b, disabledHook, newHooks;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        this._progress = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])(this._progress, [webhookId]);
                        _c.label = 1;
                    case 1:
                        _c.trys.push([1, 3, 4, 5]);
                        return [4 /*yield*/, Object(_data_cloud__WEBPACK_IMPORTED_MODULE_8__["deleteCloudhook"])(this.hass, webhookId)];
                    case 2:
                        _c.sent();
                        return [3 /*break*/, 5];
                    case 3:
                        err_2 = _c.sent();
                        alert(this.hass.localize("ui.panel.config.cloud.account.webhooks.disable_hook_error_msg") + " " + err_2.message);
                        return [2 /*return*/];
                    case 4:
                        this._progress = this._progress.filter(function (wid) { return wid !== webhookId; });
                        return [7 /*endfinally*/];
                    case 5:
                        _a = this._cloudHooks, _b = webhookId, disabledHook = _a[_b], newHooks = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"])(_a, [typeof _b === "symbol" ? _b : _b + ""]);
                        this._cloudHooks = newHooks;
                        return [2 /*return*/];
                }
            });
        });
    };
    CloudWebhooks.prototype._fetchData = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var _a, _b;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _a = this;
                        if (!this.hass.config.components.includes("webhook")) return [3 /*break*/, 2];
                        return [4 /*yield*/, Object(_data_webhook__WEBPACK_IMPORTED_MODULE_7__["fetchWebhooks"])(this.hass)];
                    case 1:
                        _b = _c.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        _b = [];
                        _c.label = 3;
                    case 3:
                        _a._localHooks = _b;
                        return [2 /*return*/];
                }
            });
        });
    };
    CloudWebhooks.prototype.renderStyle = function () {
        return Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_8 || (templateObject_8 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      <style>\n        .body-text {\n          padding: 8px 0;\n        }\n        .webhook {\n          display: flex;\n          padding: 4px 0;\n        }\n        .progress {\n          margin-right: 16px;\n          display: flex;\n          flex-direction: column;\n          justify-content: center;\n        }\n        .footer {\n          padding-top: 16px;\n        }\n        .body-text a,\n        .footer a {\n          color: var(--primary-color);\n        }\n      </style>\n    "], ["\n      <style>\n        .body-text {\n          padding: 8px 0;\n        }\n        .webhook {\n          display: flex;\n          padding: 4px 0;\n        }\n        .progress {\n          margin-right: 16px;\n          display: flex;\n          flex-direction: column;\n          justify-content: center;\n        }\n        .footer {\n          padding-top: 16px;\n        }\n        .body-text a,\n        .footer a {\n          color: var(--primary-color);\n        }\n      </style>\n    "])));
    };
    return CloudWebhooks;
}(lit_element__WEBPACK_IMPORTED_MODULE_1__["LitElement"]));

customElements.define("cloud-webhooks", CloudWebhooks);
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8;


/***/ }),

/***/ "./src/panels/config/cloud/dialog-cloud-certificate/show-dialog-cloud-certificate.ts":
/*!*******************************************************************************************!*\
  !*** ./src/panels/config/cloud/dialog-cloud-certificate/show-dialog-cloud-certificate.ts ***!
  \*******************************************************************************************/
/*! exports provided: showCloudCertificateDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showCloudCertificateDialog", function() { return showCloudCertificateDialog; });
/* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../common/dom/fire_event */ "./src/common/dom/fire_event.ts");

var showCloudCertificateDialog = function (element, webhookDialogParams) {
    Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_0__["fireEvent"])(element, "show-dialog", {
        dialogTag: "dialog-cloud-certificate",
        dialogImport: function () {
            return Promise.all(/*! import() | dialog-cloud-certificate */[__webpack_require__.e("vendors~area-registry-detail-dialog~cloud-webhook-manage-dialog~config-entry-system-options~device-r~780fc7fc"), __webpack_require__.e("vendors~area-registry-detail-dialog~cloud-webhook-manage-dialog~config-entry-system-options~device-r~8bd3e4d4"), __webpack_require__.e("dialog-cloud-certificate")]).then(__webpack_require__.bind(null, /*! ./dialog-cloud-certificate */ "./src/panels/config/cloud/dialog-cloud-certificate/dialog-cloud-certificate.ts"));
        },
        dialogParams: webhookDialogParams,
    });
};


/***/ }),

/***/ "./src/panels/config/cloud/dialog-manage-cloudhook/show-dialog-manage-cloudhook.ts":
/*!*****************************************************************************************!*\
  !*** ./src/panels/config/cloud/dialog-manage-cloudhook/show-dialog-manage-cloudhook.ts ***!
  \*****************************************************************************************/
/*! exports provided: showManageCloudhookDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showManageCloudhookDialog", function() { return showManageCloudhookDialog; });
/* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../common/dom/fire_event */ "./src/common/dom/fire_event.ts");

var showManageCloudhookDialog = function (element, webhookDialogParams) {
    Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_0__["fireEvent"])(element, "show-dialog", {
        dialogTag: "dialog-manage-cloudhook",
        dialogImport: function () {
            return Promise.all(/*! import() | cloud-webhook-manage-dialog */[__webpack_require__.e("vendors~area-registry-detail-dialog~cloud-webhook-manage-dialog~config-entry-system-options~device-r~780fc7fc"), __webpack_require__.e("vendors~area-registry-detail-dialog~cloud-webhook-manage-dialog~config-entry-system-options~device-r~8bd3e4d4"), __webpack_require__.e("vendors~cloud-webhook-manage-dialog"), __webpack_require__.e("cloud-webhook-manage-dialog")]).then(__webpack_require__.bind(null, /*! ./dialog-manage-cloudhook */ "./src/panels/config/cloud/dialog-manage-cloudhook/dialog-manage-cloudhook.ts"));
        },
        dialogParams: webhookDialogParams,
    });
};


/***/ }),

/***/ "./src/panels/config/cloud/ha-config-cloud.ts":
/*!****************************************************!*\
  !*** ./src/panels/config/cloud/ha-config-cloud.ts ***!
  \****************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _account_cloud_account__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./account/cloud-account */ "./src/panels/config/cloud/account/cloud-account.js");
/* harmony import */ var _login_cloud_login__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login/cloud-login */ "./src/panels/config/cloud/login/cloud-login.js");
/* harmony import */ var _layouts_hass_router_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../layouts/hass-router-page */ "./src/layouts/hass-router-page.ts");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _common_navigate__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../common/navigate */ "./src/common/navigate.ts");






var LOGGED_IN_URLS = ["account", "google-assistant", "alexa"];
var NOT_LOGGED_IN_URLS = ["login", "register", "forgot-password"];
var HaConfigCloud = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(HaConfigCloud, _super);
    function HaConfigCloud() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.routerOptions = {
            defaultPage: "login",
            showLoading: true,
            initialLoad: function () { return _this._cloudStatusLoaded; },
            // Guard the different pages based on if we're logged in.
            beforeRender: function (page) {
                if (_this.cloudStatus.logged_in) {
                    if (!LOGGED_IN_URLS.includes(page)) {
                        return "account";
                    }
                }
                else {
                    if (!NOT_LOGGED_IN_URLS.includes(page)) {
                        return "login";
                    }
                }
                return undefined;
            },
            routes: {
                login: {
                    tag: "cloud-login",
                },
                register: {
                    tag: "cloud-register",
                    load: function () {
                        return __webpack_require__.e(/*! import() | cloud-register */ "cloud-register").then(__webpack_require__.bind(null, /*! ./register/cloud-register */ "./src/panels/config/cloud/register/cloud-register.js"));
                    },
                },
                "forgot-password": {
                    tag: "cloud-forgot-password",
                    load: function () {
                        return __webpack_require__.e(/*! import() | cloud-forgot-password */ "cloud-forgot-password").then(__webpack_require__.bind(null, /*! ./forgot-password/cloud-forgot-password */ "./src/panels/config/cloud/forgot-password/cloud-forgot-password.js"));
                    },
                },
                account: {
                    tag: "cloud-account",
                },
                "google-assistant": {
                    tag: "cloud-google-assistant",
                    load: function () {
                        return Promise.all(/*! import() | cloud-google-assistant */[__webpack_require__.e(4), __webpack_require__.e("cloud-alexa~cloud-google-assistant~more-info-dialog~panel-kiosk~panel-states"), __webpack_require__.e("cloud-google-assistant")]).then(__webpack_require__.bind(null, /*! ./google-assistant/cloud-google-assistant */ "./src/panels/config/cloud/google-assistant/cloud-google-assistant.ts"));
                    },
                },
                alexa: {
                    tag: "cloud-alexa",
                    load: function () {
                        return Promise.all(/*! import() | cloud-alexa */[__webpack_require__.e(4), __webpack_require__.e("cloud-alexa~cloud-google-assistant~more-info-dialog~panel-kiosk~panel-states"), __webpack_require__.e("cloud-alexa")]).then(__webpack_require__.bind(null, /*! ./alexa/cloud-alexa */ "./src/panels/config/cloud/alexa/cloud-alexa.ts"));
                    },
                },
            },
        };
        _this._flashMessage = "";
        _this._loginEmail = "";
        _this._cloudStatusLoaded = new Promise(function (resolve) {
            _this._resolveCloudStatusLoaded = resolve;
        });
        return _this;
    }
    HaConfigCloud.prototype.firstUpdated = function (changedProps) {
        var _this = this;
        _super.prototype.firstUpdated.call(this, changedProps);
        this.addEventListener("cloud-done", function (ev) {
            _this._flashMessage = ev.detail.flashMessage;
            Object(_common_navigate__WEBPACK_IMPORTED_MODULE_5__["navigate"])(_this, "/config/cloud/login");
        });
    };
    HaConfigCloud.prototype.updated = function (changedProps) {
        _super.prototype.updated.call(this, changedProps);
        if (changedProps.has("cloudStatus")) {
            var oldStatus = changedProps.get("cloudStatus");
            if (oldStatus === undefined) {
                this._resolveCloudStatusLoaded();
            }
            else if (oldStatus.logged_in !== this.cloudStatus.logged_in) {
                Object(_common_navigate__WEBPACK_IMPORTED_MODULE_5__["navigate"])(this, this.route.prefix, true);
            }
        }
    };
    HaConfigCloud.prototype.createElement = function (tag) {
        var _this = this;
        var el = _super.prototype.createElement.call(this, tag);
        el.addEventListener("email-changed", function (ev) {
            _this._loginEmail = ev.detail.value;
        });
        el.addEventListener("flash-message-changed", function (ev) {
            _this._flashMessage = ev.detail.value;
        });
        return el;
    };
    HaConfigCloud.prototype.updatePageEl = function (el) {
        // We are not going to update if the current page if we are not logged in
        // and the current page requires being logged in. Happens when we log out.
        if (this.cloudStatus &&
            !this.cloudStatus.logged_in &&
            LOGGED_IN_URLS.includes(this._currentPage)) {
            return;
        }
        if ("setProperties" in el) {
            // As long as we have Polymer pages
            el.setProperties({
                hass: this.hass,
                email: this._loginEmail,
                isWide: this.isWide,
                cloudStatus: this.cloudStatus,
                flashMessage: this._flashMessage,
            });
        }
        else {
            el.hass = this.hass;
            el.email = this._loginEmail;
            el.isWide = this.isWide;
            el.narrow = this.narrow;
            el.cloudStatus = this.cloudStatus;
            el.flashMessage = this._flashMessage;
        }
    };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_4__["property"])()
    ], HaConfigCloud.prototype, "hass", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_4__["property"])()
    ], HaConfigCloud.prototype, "isWide", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_4__["property"])()
    ], HaConfigCloud.prototype, "narrow", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_4__["property"])()
    ], HaConfigCloud.prototype, "route", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_4__["property"])()
    ], HaConfigCloud.prototype, "cloudStatus", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_4__["property"])()
    ], HaConfigCloud.prototype, "_flashMessage", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_4__["property"])()
    ], HaConfigCloud.prototype, "_loginEmail", void 0);
    HaConfigCloud = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_4__["customElement"])("ha-config-cloud")
    ], HaConfigCloud);
    return HaConfigCloud;
}(_layouts_hass_router_page__WEBPACK_IMPORTED_MODULE_3__["HassRouterPage"]));


/***/ }),

/***/ "./src/panels/config/cloud/login/cloud-login.js":
/*!******************************************************!*\
  !*** ./src/panels/config/cloud/login/cloud-login.js ***!
  \******************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_mwc_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material/mwc-button */ "./node_modules/@material/mwc-button/mwc-button.js");
/* harmony import */ var _polymer_paper_icon_button_paper_icon_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-icon-button/paper-icon-button */ "./node_modules/@polymer/paper-icon-button/paper-icon-button.js");
/* harmony import */ var _polymer_paper_input_paper_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-input/paper-input */ "./node_modules/@polymer/paper-input/paper-input.js");
/* harmony import */ var _polymer_paper_item_paper_item_body__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/paper-item/paper-item-body */ "./node_modules/@polymer/paper-item/paper-item-body.js");
/* harmony import */ var _polymer_paper_item_paper_item__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/paper-item/paper-item */ "./node_modules/@polymer/paper-item/paper-item.js");
/* harmony import */ var _polymer_paper_ripple_paper_ripple__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @polymer/paper-ripple/paper-ripple */ "./node_modules/@polymer/paper-ripple/paper-ripple.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _components_ha_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../components/ha-card */ "./src/components/ha-card.ts");
/* harmony import */ var _components_buttons_ha_progress_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../components/buttons/ha-progress-button */ "./src/components/buttons/ha-progress-button.js");
/* harmony import */ var _layouts_hass_subpage__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../layouts/hass-subpage */ "./src/layouts/hass-subpage.ts");
/* harmony import */ var _resources_ha_style__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../resources/ha-style */ "./src/resources/ha-style.ts");
/* harmony import */ var _ha_config_section__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../ha-config-section */ "./src/panels/config/ha-config-section.js");
/* harmony import */ var _mixins_events_mixin__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../mixins/events-mixin */ "./src/mixins/events-mixin.js");
/* harmony import */ var _mixins_navigate_mixin__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../mixins/navigate-mixin */ "./src/mixins/navigate-mixin.js");
/* harmony import */ var _components_ha_icon_next__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../components/ha-icon-next */ "./src/components/ha-icon-next.ts");
/* harmony import */ var _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../mixins/localize-mixin */ "./src/mixins/localize-mixin.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      <style include=\"iron-flex ha-style\">\n        .content {\n          padding-bottom: 24px;\n          direction: ltr;\n        }\n        [slot=\"introduction\"] {\n          margin: -1em 0;\n        }\n        [slot=\"introduction\"] a {\n          color: var(--primary-color);\n        }\n        paper-item {\n          cursor: pointer;\n        }\n        ha-card {\n          overflow: hidden;\n        }\n        ha-card .card-header {\n          margin-bottom: -8px;\n        }\n        h1 {\n          @apply --paper-font-headline;\n          margin: 0;\n        }\n        .error {\n          color: var(--google-red-500);\n        }\n        .card-actions {\n          display: flex;\n          justify-content: space-between;\n          align-items: center;\n        }\n        [hidden] {\n          display: none;\n        }\n        .flash-msg {\n          padding-right: 44px;\n        }\n        .flash-msg paper-icon-button {\n          position: absolute;\n          top: 8px;\n          right: 8px;\n          color: var(--secondary-text-color);\n        }\n      </style>\n      <hass-subpage header=\"[[localize('ui.panel.config.cloud.caption')]]\">\n        <div class=\"content\">\n          <ha-config-section is-wide=\"[[isWide]]\">\n            <span slot=\"header\"\n              >[[localize('ui.panel.config.cloud.caption')]]</span\n            >\n            <div slot=\"introduction\">\n              <p>\n                [[localize('ui.panel.config.cloud.login.introduction')]]\n              </p>\n              <p>\n                [[localize('ui.panel.config.cloud.login.introduction2')]]\n                <a href=\"https://www.nabucasa.com\" target=\"_blank\"\n                  >Nabu&nbsp;Casa,&nbsp;Inc</a\n                >\n                [[localize('ui.panel.config.cloud.login.introduction2a')]]\n              </p>\n              <p>\n                [[localize('ui.panel.config.cloud.login.introduction3')]]\n              </p>\n              <p>\n                <a href=\"https://www.nabucasa.com\" target=\"_blank\"\n                  >[[localize('ui.panel.config.cloud.login.learn_more_link')]]</a\n                >\n              </p>\n            </div>\n\n            <ha-card hidden$=\"[[!flashMessage]]\">\n              <div class=\"card-content flash-msg\">\n                [[flashMessage]]\n                <paper-icon-button icon=\"hass:close\" on-click=\"_dismissFlash\"\n                  >[[localize('ui.panel.config.cloud.login.dismiss')]]</paper-icon-button\n                >\n                <paper-ripple id=\"flashRipple\" noink=\"\"></paper-ripple>\n              </div>\n            </ha-card>\n\n            <ha-card\n              header=\"[[localize('ui.panel.config.cloud.login.sign_in')]]\"\n            >\n              <div class=\"card-content\">\n                <div class=\"error\" hidden$=\"[[!_error]]\">[[_error]]</div>\n                <paper-input\n                  label=\"[[localize('ui.panel.config.cloud.login.email')]]\"\n                  id=\"email\"\n                  type=\"email\"\n                  value=\"{{email}}\"\n                  on-keydown=\"_keyDown\"\n                  error-message=\"[[localize('ui.panel.config.cloud.login.email_error_msg')]]\"\n                ></paper-input>\n                <paper-input\n                  id=\"password\"\n                  label=\"[[localize('ui.panel.config.cloud.login.password')]]\"\n                  value=\"{{_password}}\"\n                  type=\"password\"\n                  on-keydown=\"_keyDown\"\n                  error-message=\"[[localize('ui.panel.config.cloud.login.password_error_msg')]]\"\n                ></paper-input>\n              </div>\n              <div class=\"card-actions\">\n                <ha-progress-button\n                  on-click=\"_handleLogin\"\n                  progress=\"[[_requestInProgress]]\"\n                  >[[localize('ui.panel.config.cloud.login.sign_in')]]</ha-progress-button\n                >\n                <button\n                  class=\"link\"\n                  hidden=\"[[_requestInProgress]]\"\n                  on-click=\"_handleForgotPassword\"\n                >\n                  [[localize('ui.panel.config.cloud.login.forgot_password')]]\n                </button>\n              </div>\n            </ha-card>\n\n            <ha-card>\n              <paper-item on-click=\"_handleRegister\">\n                <paper-item-body two-line=\"\">\n                  [[localize('ui.panel.config.cloud.login.start_trial')]]\n                  <div secondary=\"\">\n                    [[localize('ui.panel.config.cloud.login.trial_info')]]\n                  </div>\n                </paper-item-body>\n                <ha-icon-next></ha-icon-next>\n              </paper-item>\n            </ha-card>\n          </ha-config-section>\n        </div>\n      </hass-subpage>\n    "]);

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
 * @appliesMixin NavigateMixin
 * @appliesMixin EventsMixin
 * @appliesMixin LocalizeMixin
 */

var CloudLogin =
/*#__PURE__*/
function (_LocalizeMixin) {
  _inherits(CloudLogin, _LocalizeMixin);

  function CloudLogin() {
    _classCallCheck(this, CloudLogin);

    return _possibleConstructorReturn(this, _getPrototypeOf(CloudLogin).apply(this, arguments));
  }

  _createClass(CloudLogin, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      var _this = this;

      _get(_getPrototypeOf(CloudLogin.prototype), "connectedCallback", this).call(this);

      if (this.flashMessage) {
        // Wait for DOM to be drawn
        requestAnimationFrame(function () {
          return requestAnimationFrame(function () {
            return _this.$.flashRipple.simulatedRipple();
          });
        });
      }
    }
  }, {
    key: "_inputChanged",
    value: function _inputChanged() {
      this.$.email.invalid = false;
      this.$.password.invalid = false;
      this._error = false;
    }
  }, {
    key: "_keyDown",
    value: function _keyDown(ev) {
      // validate on enter
      if (ev.keyCode === 13) {
        this._handleLogin();

        ev.preventDefault();
      }
    }
  }, {
    key: "_handleLogin",
    value: function _handleLogin() {
      var _this2 = this;

      var invalid = false;

      if (!this.email || !this.email.includes("@")) {
        this.$.email.invalid = true;
        this.$.email.focus();
        invalid = true;
      }

      if (this._password.length < 8) {
        this.$.password.invalid = true;

        if (!invalid) {
          invalid = true;
          this.$.password.focus();
        }
      }

      if (invalid) return;
      this._requestInProgress = true;
      this.hass.callApi("post", "cloud/login", {
        email: this.email,
        password: this._password
      }).then(function () {
        _this2.fire("ha-refresh-cloud-status");

        _this2.setProperties({
          email: "",
          _password: ""
        });
      }, function (err) {
        // Do this before setProperties because changing it clears errors.
        _this2._password = "";
        var errCode = err && err.body && err.body.code;

        if (errCode === "PasswordChangeRequired") {
          alert("[[localize('ui.panel.config.cloud.login.alert_password_change_required')]]");

          _this2.navigate("/config/cloud/forgot-password");

          return;
        }

        var props = {
          _requestInProgress: false,
          _error: err && err.body && err.body.message ? err.body.message : "Unknown error"
        };

        if (errCode === "UserNotConfirmed") {
          props._error = "[[localize('ui.panel.config.cloud.login.alert_email_confirm_necessary')]]";
        }

        _this2.setProperties(props);

        _this2.$.email.focus();
      });
    }
  }, {
    key: "_handleRegister",
    value: function _handleRegister() {
      this.flashMessage = "";
      this.navigate("/config/cloud/register");
    }
  }, {
    key: "_handleForgotPassword",
    value: function _handleForgotPassword() {
      this.flashMessage = "";
      this.navigate("/config/cloud/forgot-password");
    }
  }, {
    key: "_dismissFlash",
    value: function _dismissFlash() {
      var _this3 = this;

      // give some time to let the ripple finish.
      setTimeout(function () {
        _this3.flashMessage = "";
      }, 200);
    }
  }], [{
    key: "template",
    get: function get() {
      return Object(_polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_6__["html"])(_templateObject());
    }
  }, {
    key: "properties",
    get: function get() {
      return {
        hass: Object,
        isWide: Boolean,
        email: {
          type: String,
          notify: true
        },
        _password: {
          type: String,
          value: ""
        },
        _requestInProgress: {
          type: Boolean,
          value: false
        },
        flashMessage: {
          type: String,
          notify: true
        },
        _error: String
      };
    }
  }, {
    key: "observers",
    get: function get() {
      return ["_inputChanged(email, _password)"];
    }
  }]);

  return CloudLogin;
}(Object(_mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_16__["default"])(Object(_mixins_navigate_mixin__WEBPACK_IMPORTED_MODULE_14__["default"])(Object(_mixins_events_mixin__WEBPACK_IMPORTED_MODULE_13__["EventsMixin"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_7__["PolymerElement"]))));

customElements.define("cloud-login", CloudLogin);

/***/ }),

/***/ "./src/util/toast-saved-success.ts":
/*!*****************************************!*\
  !*** ./src/util/toast-saved-success.ts ***!
  \*****************************************/
/*! exports provided: showSaveSuccessToast */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showSaveSuccessToast", function() { return showSaveSuccessToast; });
/* harmony import */ var _toast__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toast */ "./src/util/toast.ts");

var showSaveSuccessToast = function (el, hass) {
    return Object(_toast__WEBPACK_IMPORTED_MODULE_0__["showToast"])(el, {
        message: hass.localize("ui.common.successfully_saved"),
    });
};


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFuZWwtY29uZmlnLWNsb3VkLmNodW5rLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9kYXRldGltZS9mb3JtYXRfZGF0ZV90aW1lLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2hhLWljb24tbmV4dC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9oYS1pY29uLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2hhLXN3aXRjaC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZGF0YS9hbGV4YS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZGF0YS93ZWJob29rLnRzIiwid2VicGFjazovLy8uL3NyYy9taXhpbnMvbG9jYWxpemUtbWl4aW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21peGlucy9uYXZpZ2F0ZS1taXhpbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL2NvbmZpZy9jbG91ZC9hY2NvdW50L2Nsb3VkLWFjY291bnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhbmVscy9jb25maWcvY2xvdWQvYWNjb3VudC9jbG91ZC1hbGV4YS1wcmVmLnRzIiwid2VicGFjazovLy8uL3NyYy9wYW5lbHMvY29uZmlnL2Nsb3VkL2FjY291bnQvY2xvdWQtZ29vZ2xlLXByZWYudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhbmVscy9jb25maWcvY2xvdWQvYWNjb3VudC9jbG91ZC1yZW1vdGUtcHJlZi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL2NvbmZpZy9jbG91ZC9hY2NvdW50L2Nsb3VkLXdlYmhvb2tzLnRzIiwid2VicGFjazovLy8uL3NyYy9wYW5lbHMvY29uZmlnL2Nsb3VkL2RpYWxvZy1jbG91ZC1jZXJ0aWZpY2F0ZS9zaG93LWRpYWxvZy1jbG91ZC1jZXJ0aWZpY2F0ZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL2NvbmZpZy9jbG91ZC9kaWFsb2ctbWFuYWdlLWNsb3VkaG9vay9zaG93LWRpYWxvZy1tYW5hZ2UtY2xvdWRob29rLnRzIiwid2VicGFjazovLy8uL3NyYy9wYW5lbHMvY29uZmlnL2Nsb3VkL2hhLWNvbmZpZy1jbG91ZC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL2NvbmZpZy9jbG91ZC9sb2dpbi9jbG91ZC1sb2dpbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbC90b2FzdC1zYXZlZC1zdWNjZXNzLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBmZWNoYSBmcm9tIFwiZmVjaGFcIjtcblxuLy8gQ2hlY2sgZm9yIHN1cHBvcnQgb2YgbmF0aXZlIGxvY2FsZSBzdHJpbmcgb3B0aW9uc1xuZnVuY3Rpb24gdG9Mb2NhbGVTdHJpbmdTdXBwb3J0c09wdGlvbnMoKSB7XG4gIHRyeSB7XG4gICAgbmV3IERhdGUoKS50b0xvY2FsZVN0cmluZyhcImlcIik7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gZS5uYW1lID09PSBcIlJhbmdlRXJyb3JcIjtcbiAgfVxuICByZXR1cm4gZmFsc2U7XG59XG5cbmV4cG9ydCBkZWZhdWx0ICh0b0xvY2FsZVN0cmluZ1N1cHBvcnRzT3B0aW9ucygpXG4gID8gKGRhdGVPYmo6IERhdGUsIGxvY2FsZXM6IHN0cmluZykgPT5cbiAgICAgIGRhdGVPYmoudG9Mb2NhbGVTdHJpbmcobG9jYWxlcywge1xuICAgICAgICB5ZWFyOiBcIm51bWVyaWNcIixcbiAgICAgICAgbW9udGg6IFwibG9uZ1wiLFxuICAgICAgICBkYXk6IFwibnVtZXJpY1wiLFxuICAgICAgICBob3VyOiBcIm51bWVyaWNcIixcbiAgICAgICAgbWludXRlOiBcIjItZGlnaXRcIixcbiAgICAgIH0pXG4gIDogKGRhdGVPYmo6IERhdGUpID0+IGZlY2hhLmZvcm1hdChkYXRlT2JqLCBcImhhRGF0ZVRpbWVcIikpO1xuIiwiaW1wb3J0IFwiQHBvbHltZXIvaXJvbi1pY29uL2lyb24taWNvblwiO1xuLy8gTm90IGR1cGxpY2F0ZSwgdGhpcyBpcyBmb3IgdHlwaW5nLlxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG5pbXBvcnQgeyBIYUljb24gfSBmcm9tIFwiLi9oYS1pY29uXCI7XG5cbmV4cG9ydCBjbGFzcyBIYUljb25OZXh0IGV4dGVuZHMgSGFJY29uIHtcbiAgcHVibGljIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIHN1cGVyLmNvbm5lY3RlZENhbGxiYWNrKCk7XG5cbiAgICAvLyB3YWl0IHRvIGNoZWNrIGZvciBkaXJlY3Rpb24gc2luY2Ugb3RoZXJ3aXNlIGRpcmVjdGlvbiBpcyB3cm9uZyBldmVuIHRob3VnaCB0b3AgbGV2ZWwgaXMgUlRMXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLmljb24gPVxuICAgICAgICB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzKS5kaXJlY3Rpb24gPT09IFwibHRyXCJcbiAgICAgICAgICA/IFwiaGFzczpjaGV2cm9uLXJpZ2h0XCJcbiAgICAgICAgICA6IFwiaGFzczpjaGV2cm9uLWxlZnRcIjtcbiAgICB9LCAxMDApO1xuICB9XG59XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIEhUTUxFbGVtZW50VGFnTmFtZU1hcCB7XG4gICAgXCJoYS1pY29uLW5leHRcIjogSGFJY29uTmV4dDtcbiAgfVxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJoYS1pY29uLW5leHRcIiwgSGFJY29uTmV4dCk7XG4iLCJpbXBvcnQgeyBDb25zdHJ1Y3RvciB9IGZyb20gXCJsaXQtZWxlbWVudFwiO1xuaW1wb3J0IFwiQHBvbHltZXIvaXJvbi1pY29uL2lyb24taWNvblwiO1xuLy8gTm90IGR1cGxpY2F0ZSwgdGhpcyBpcyBmb3IgdHlwaW5nLlxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG5pbXBvcnQgeyBJcm9uSWNvbkVsZW1lbnQgfSBmcm9tIFwiQHBvbHltZXIvaXJvbi1pY29uL2lyb24taWNvblwiO1xuXG5jb25zdCBpcm9uSWNvbkNsYXNzID0gY3VzdG9tRWxlbWVudHMuZ2V0KFwiaXJvbi1pY29uXCIpIGFzIENvbnN0cnVjdG9yPFxuICBJcm9uSWNvbkVsZW1lbnRcbj47XG5cbmxldCBsb2FkZWQgPSBmYWxzZTtcblxuZXhwb3J0IGNsYXNzIEhhSWNvbiBleHRlbmRzIGlyb25JY29uQ2xhc3Mge1xuICBwcml2YXRlIF9pY29uc2V0TmFtZT86IHN0cmluZztcblxuICBwdWJsaWMgbGlzdGVuKFxuICAgIG5vZGU6IEV2ZW50VGFyZ2V0IHwgbnVsbCxcbiAgICBldmVudE5hbWU6IHN0cmluZyxcbiAgICBtZXRob2ROYW1lOiBzdHJpbmdcbiAgKTogdm9pZCB7XG4gICAgc3VwZXIubGlzdGVuKG5vZGUsIGV2ZW50TmFtZSwgbWV0aG9kTmFtZSk7XG5cbiAgICBpZiAoIWxvYWRlZCAmJiB0aGlzLl9pY29uc2V0TmFtZSA9PT0gXCJtZGlcIikge1xuICAgICAgbG9hZGVkID0gdHJ1ZTtcbiAgICAgIGltcG9ydCgvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcIm1kaS1pY29uc1wiICovIFwiLi4vcmVzb3VyY2VzL21kaS1pY29uc1wiKTtcbiAgICB9XG4gIH1cbn1cblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgSFRNTEVsZW1lbnRUYWdOYW1lTWFwIHtcbiAgICBcImhhLWljb25cIjogSGFJY29uO1xuICB9XG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcImhhLWljb25cIiwgSGFJY29uKTtcbiIsImltcG9ydCB7IENvbnN0cnVjdG9yLCBjdXN0b21FbGVtZW50LCBDU1NSZXN1bHQsIGNzcywgcXVlcnkgfSBmcm9tIFwibGl0LWVsZW1lbnRcIjtcbmltcG9ydCBcIkBtYXRlcmlhbC9td2Mtc3dpdGNoXCI7XG5pbXBvcnQgeyBzdHlsZSB9IGZyb20gXCJAbWF0ZXJpYWwvbXdjLXN3aXRjaC9td2Mtc3dpdGNoLWNzc1wiO1xuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG5pbXBvcnQgeyBTd2l0Y2ggfSBmcm9tIFwiQG1hdGVyaWFsL213Yy1zd2l0Y2hcIjtcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxuY29uc3QgTXdjU3dpdGNoID0gY3VzdG9tRWxlbWVudHMuZ2V0KFwibXdjLXN3aXRjaFwiKSBhcyBDb25zdHJ1Y3RvcjxTd2l0Y2g+O1xuXG5AY3VzdG9tRWxlbWVudChcImhhLXN3aXRjaFwiKVxuZXhwb3J0IGNsYXNzIEhhU3dpdGNoIGV4dGVuZHMgTXdjU3dpdGNoIHtcbiAgQHF1ZXJ5KFwic2xvdFwiKSBwcml2YXRlIF9zbG90ITogSFRNTFNsb3RFbGVtZW50O1xuXG4gIHByb3RlY3RlZCBmaXJzdFVwZGF0ZWQoKSB7XG4gICAgc3VwZXIuZmlyc3RVcGRhdGVkKCk7XG4gICAgdGhpcy5zdHlsZS5zZXRQcm9wZXJ0eShcIi0tbWRjLXRoZW1lLXNlY29uZGFyeVwiLCBcInZhcigtLXByaW1hcnktY29sb3IpXCIpO1xuICAgIHRoaXMuY2xhc3NMaXN0LnRvZ2dsZShcbiAgICAgIFwic2xvdHRlZFwiLFxuICAgICAgQm9vbGVhbih0aGlzLl9zbG90LmFzc2lnbmVkTm9kZXMoKS5sZW5ndGgpXG4gICAgKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBzdGF0aWMgZ2V0IHN0eWxlcygpOiBDU1NSZXN1bHRbXSB7XG4gICAgcmV0dXJuIFtcbiAgICAgIHN0eWxlLFxuICAgICAgY3NzYFxuICAgICAgICA6aG9zdCB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICAgICAgLm1kYy1zd2l0Y2g6bm90KC5tZGMtc3dpdGNoLS1jaGVja2VkKSAubWRjLXN3aXRjaF9fdGh1bWIge1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXBhcGVyLXRvZ2dsZS1idXR0b24tdW5jaGVja2VkLWJ1dHRvbi1jb2xvcik7XG4gICAgICAgICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1wYXBlci10b2dnbGUtYnV0dG9uLXVuY2hlY2tlZC1idXR0b24tY29sb3IpO1xuICAgICAgICB9XG4gICAgICAgIC5tZGMtc3dpdGNoOm5vdCgubWRjLXN3aXRjaC0tY2hlY2tlZCkgLm1kYy1zd2l0Y2hfX3RyYWNrIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wYXBlci10b2dnbGUtYnV0dG9uLXVuY2hlY2tlZC1iYXItY29sb3IpO1xuICAgICAgICAgIGJvcmRlci1jb2xvcjogdmFyKC0tcGFwZXItdG9nZ2xlLWJ1dHRvbi11bmNoZWNrZWQtYmFyLWNvbG9yKTtcbiAgICAgICAgfVxuICAgICAgICA6aG9zdCguc2xvdHRlZCkgLm1kYy1zd2l0Y2gge1xuICAgICAgICAgIG1hcmdpbi1yaWdodDogMjRweDtcbiAgICAgICAgfVxuICAgICAgYCxcbiAgICBdO1xuICB9XG59XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIEhUTUxFbGVtZW50VGFnTmFtZU1hcCB7XG4gICAgXCJoYS1zd2l0Y2hcIjogSGFTd2l0Y2g7XG4gIH1cbn1cbiIsImltcG9ydCB7IEhvbWVBc3Npc3RhbnQgfSBmcm9tIFwiLi4vdHlwZXNcIjtcblxuZXhwb3J0IGludGVyZmFjZSBBbGV4YUVudGl0eSB7XG4gIGVudGl0eV9pZDogc3RyaW5nO1xuICBkaXNwbGF5X2NhdGVnb3JpZXM6IHN0cmluZ1tdO1xuICBpbnRlcmZhY2VzOiBzdHJpbmdbXTtcbn1cblxuZXhwb3J0IGNvbnN0IGZldGNoQ2xvdWRBbGV4YUVudGl0aWVzID0gKGhhc3M6IEhvbWVBc3Npc3RhbnQpID0+XG4gIGhhc3MuY2FsbFdTPEFsZXhhRW50aXR5W10+KHsgdHlwZTogXCJjbG91ZC9hbGV4YS9lbnRpdGllc1wiIH0pO1xuXG5leHBvcnQgY29uc3Qgc3luY0Nsb3VkQWxleGFFbnRpdGllcyA9IChoYXNzOiBIb21lQXNzaXN0YW50KSA9PlxuICBoYXNzLmNhbGxXUyh7IHR5cGU6IFwiY2xvdWQvYWxleGEvc3luY1wiIH0pO1xuIiwiaW1wb3J0IHsgSG9tZUFzc2lzdGFudCB9IGZyb20gXCIuLi90eXBlc1wiO1xuXG5leHBvcnQgaW50ZXJmYWNlIFdlYmhvb2sge1xuICB3ZWJob29rX2lkOiBzdHJpbmc7XG4gIGRvbWFpbjogc3RyaW5nO1xuICBuYW1lOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjb25zdCBmZXRjaFdlYmhvb2tzID0gKGhhc3M6IEhvbWVBc3Npc3RhbnQpOiBQcm9taXNlPFdlYmhvb2tbXT4gPT5cbiAgaGFzcy5jYWxsV1Moe1xuICAgIHR5cGU6IFwid2ViaG9vay9saXN0XCIsXG4gIH0pO1xuIiwiaW1wb3J0IHsgZGVkdXBpbmdNaXhpbiB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9taXhpblwiO1xuLyoqXG4gKiBQb2x5bWVyIE1peGluIHRvIGVuYWJsZSBhIGxvY2FsaXplIGZ1bmN0aW9uIHBvd2VyZWQgYnkgbGFuZ3VhZ2UvcmVzb3VyY2VzIGZyb20gaGFzcyBvYmplY3QuXG4gKlxuICogQHBvbHltZXJNaXhpblxuICovXG5leHBvcnQgZGVmYXVsdCBkZWR1cGluZ01peGluKFxuICAoc3VwZXJDbGFzcykgPT5cbiAgICBjbGFzcyBleHRlbmRzIHN1cGVyQ2xhc3Mge1xuICAgICAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGhhc3M6IE9iamVjdCxcblxuICAgICAgICAgIC8qKlxuICAgICAgICAgICAqIFRyYW5zbGF0ZXMgYSBzdHJpbmcgdG8gdGhlIGN1cnJlbnQgYGxhbmd1YWdlYC4gQW55IHBhcmFtZXRlcnMgdG8gdGhlXG4gICAgICAgICAgICogc3RyaW5nIHNob3VsZCBiZSBwYXNzZWQgaW4gb3JkZXIsIGFzIGZvbGxvd3M6XG4gICAgICAgICAgICogYGxvY2FsaXplKHN0cmluZ0tleSwgcGFyYW0xTmFtZSwgcGFyYW0xVmFsdWUsIHBhcmFtMk5hbWUsIHBhcmFtMlZhbHVlKWBcbiAgICAgICAgICAgKi9cbiAgICAgICAgICBsb2NhbGl6ZToge1xuICAgICAgICAgICAgdHlwZTogRnVuY3Rpb24sXG4gICAgICAgICAgICBjb21wdXRlZDogXCJfX2NvbXB1dGVMb2NhbGl6ZShoYXNzLmxvY2FsaXplKVwiLFxuICAgICAgICAgIH0sXG4gICAgICAgIH07XG4gICAgICB9XG5cbiAgICAgIF9fY29tcHV0ZUxvY2FsaXplKGxvY2FsaXplKSB7XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZTtcbiAgICAgIH1cbiAgICB9XG4pO1xuIiwiaW1wb3J0IHsgZGVkdXBpbmdNaXhpbiB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9taXhpblwiO1xuaW1wb3J0IHsgbmF2aWdhdGUgfSBmcm9tIFwiLi4vY29tbW9uL25hdmlnYXRlXCI7XG5cbi8qXG4gKiBAcG9seW1lck1peGluXG4gKiBAYXBwbGllc01peGluIEV2ZW50c01peGluXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGRlZHVwaW5nTWl4aW4oXG4gIChzdXBlckNsYXNzKSA9PlxuICAgIGNsYXNzIGV4dGVuZHMgc3VwZXJDbGFzcyB7XG4gICAgICBuYXZpZ2F0ZSguLi5hcmdzKSB7XG4gICAgICAgIG5hdmlnYXRlKHRoaXMsIC4uLmFyZ3MpO1xuICAgICAgfVxuICAgIH1cbik7XG4iLCJpbXBvcnQgXCJAbWF0ZXJpYWwvbXdjLWJ1dHRvblwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItaXRlbS9wYXBlci1pdGVtLWJvZHlcIjtcbmltcG9ydCB7IGh0bWwgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvaHRtbC10YWdcIjtcbmltcG9ydCB7IFBvbHltZXJFbGVtZW50IH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvcG9seW1lci1lbGVtZW50XCI7XG5cbmltcG9ydCBcIi4uLy4uLy4uLy4uL2NvbXBvbmVudHMvaGEtY2FyZFwiO1xuaW1wb3J0IFwiLi4vLi4vLi4vLi4vY29tcG9uZW50cy9idXR0b25zL2hhLWNhbGwtYXBpLWJ1dHRvblwiO1xuaW1wb3J0IFwiLi4vLi4vLi4vLi4vbGF5b3V0cy9oYXNzLXN1YnBhZ2VcIjtcbmltcG9ydCBcIi4uLy4uLy4uLy4uL3Jlc291cmNlcy9oYS1zdHlsZVwiO1xuaW1wb3J0IFwiLi4vLi4vaGEtY29uZmlnLXNlY3Rpb25cIjtcbmltcG9ydCBcIi4vY2xvdWQtd2ViaG9va3NcIjtcbmltcG9ydCBcIi4vY2xvdWQtYWxleGEtcHJlZlwiO1xuaW1wb3J0IFwiLi9jbG91ZC1nb29nbGUtcHJlZlwiO1xuaW1wb3J0IFwiLi9jbG91ZC1yZW1vdGUtcHJlZlwiO1xuXG5pbXBvcnQgeyBFdmVudHNNaXhpbiB9IGZyb20gXCIuLi8uLi8uLi8uLi9taXhpbnMvZXZlbnRzLW1peGluXCI7XG5pbXBvcnQgeyBmZXRjaENsb3VkU3Vic2NyaXB0aW9uSW5mbyB9IGZyb20gXCIuLi8uLi8uLi8uLi9kYXRhL2Nsb3VkXCI7XG5cbmltcG9ydCBmb3JtYXREYXRlVGltZSBmcm9tIFwiLi4vLi4vLi4vLi4vY29tbW9uL2RhdGV0aW1lL2Zvcm1hdF9kYXRlX3RpbWVcIjtcbmltcG9ydCBMb2NhbGl6ZU1peGluIGZyb20gXCIuLi8uLi8uLi8uLi9taXhpbnMvbG9jYWxpemUtbWl4aW5cIjtcblxuLypcbiAqIEBhcHBsaWVzTWl4aW4gRXZlbnRzTWl4aW5cbiAqIEBhcHBsaWVzTWl4aW4gTG9jYWxpemVNaXhpblxuICovXG5jbGFzcyBDbG91ZEFjY291bnQgZXh0ZW5kcyBFdmVudHNNaXhpbihMb2NhbGl6ZU1peGluKFBvbHltZXJFbGVtZW50KSkge1xuICBzdGF0aWMgZ2V0IHRlbXBsYXRlKCkge1xuICAgIHJldHVybiBodG1sYFxuICAgICAgPHN0eWxlIGluY2x1ZGU9XCJpcm9uLWZsZXggaGEtc3R5bGVcIj5cbiAgICAgICAgW3Nsb3Q9XCJpbnRyb2R1Y3Rpb25cIl0ge1xuICAgICAgICAgIG1hcmdpbjogLTFlbSAwO1xuICAgICAgICB9XG4gICAgICAgIFtzbG90PVwiaW50cm9kdWN0aW9uXCJdIGEge1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbiAgICAgICAgfVxuICAgICAgICAuY29udGVudCB7XG4gICAgICAgICAgcGFkZGluZy1ib3R0b206IDI0cHg7XG4gICAgICAgICAgZGlyZWN0aW9uOiBsdHI7XG4gICAgICAgIH1cbiAgICAgICAgLmFjY291bnQtcm93IHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIHBhZGRpbmc6IDAgMTZweDtcbiAgICAgICAgfVxuICAgICAgICBtd2MtYnV0dG9uIHtcbiAgICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICAgICAgLnNvb24ge1xuICAgICAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgICAgICAgICBtYXJnaW4tdG9wOiAyNHB4O1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgfVxuICAgICAgICAubm93cmFwIHtcbiAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICB9XG4gICAgICAgIC53cmFwIHtcbiAgICAgICAgICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xuICAgICAgICB9XG4gICAgICAgIC5zdGF0dXMge1xuICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICAgICAgICAgIHBhZGRpbmc6IDE2cHg7XG4gICAgICAgIH1cbiAgICAgICAgYSB7XG4gICAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xuICAgICAgICB9XG4gICAgICA8L3N0eWxlPlxuICAgICAgPGhhc3Mtc3VicGFnZSBoZWFkZXI9XCJbW2xvY2FsaXplKCd1aS5wYW5lbC5jb25maWcuY2xvdWQuY2FwdGlvbicpXV1cIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRlbnRcIj5cbiAgICAgICAgICA8aGEtY29uZmlnLXNlY3Rpb24gaXMtd2lkZT1cIltbaXNXaWRlXV1cIj5cbiAgICAgICAgICAgIDxzcGFuIHNsb3Q9XCJoZWFkZXJcIlxuICAgICAgICAgICAgICA+W1tsb2NhbGl6ZSgndWkucGFuZWwuY29uZmlnLmNsb3VkLmNhcHRpb24nKV1dPC9zcGFuXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICA8ZGl2IHNsb3Q9XCJpbnRyb2R1Y3Rpb25cIj5cbiAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgW1tsb2NhbGl6ZSgndWkucGFuZWwuY29uZmlnLmNsb3VkLmFjY291bnQudGhhbmtfeW91X25vdGUnKV1dXG4gICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8aGEtY2FyZFxuICAgICAgICAgICAgICBoZWFkZXI9XCJbW2xvY2FsaXplKCd1aS5wYW5lbC5jb25maWcuY2xvdWQuYWNjb3VudC5uYWJ1X2Nhc2FfYWNjb3VudCcpXV1cIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYWNjb3VudC1yb3dcIj5cbiAgICAgICAgICAgICAgICA8cGFwZXItaXRlbS1ib2R5IHR3by1saW5lPVwiXCI+XG4gICAgICAgICAgICAgICAgICBbW2Nsb3VkU3RhdHVzLmVtYWlsXV1cbiAgICAgICAgICAgICAgICAgIDxkaXYgc2Vjb25kYXJ5IGNsYXNzPVwid3JhcFwiPlxuICAgICAgICAgICAgICAgICAgICBbW19mb3JtYXRTdWJzY3JpcHRpb24oX3N1YnNjcmlwdGlvbildXVxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9wYXBlci1pdGVtLWJvZHk+XG4gICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJhY2NvdW50LXJvd1wiPlxuICAgICAgICAgICAgICAgIDxwYXBlci1pdGVtLWJvZHlcbiAgICAgICAgICAgICAgICAgID5bW2xvY2FsaXplKCd1aS5wYW5lbC5jb25maWcuY2xvdWQuYWNjb3VudC5jb25uZWN0aW9uX3N0YXR1cycpXV08L3BhcGVyLWl0ZW0tYm9keVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3RhdHVzXCI+W1tjbG91ZFN0YXR1cy5jbG91ZF1dPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWFjdGlvbnNcIj5cbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9hY2NvdW50Lm5hYnVjYXNhLmNvbVwiIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICAgICAgICA+PG13Yy1idXR0b25cbiAgICAgICAgICAgICAgICAgICAgPltbbG9jYWxpemUoJ3VpLnBhbmVsLmNvbmZpZy5jbG91ZC5hY2NvdW50Lm1hbmFnZV9hY2NvdW50JyldXTwvbXdjLWJ1dHRvblxuICAgICAgICAgICAgICAgICAgPjwvYVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8bXdjLWJ1dHRvbiBzdHlsZT1cImZsb2F0OiByaWdodFwiIG9uLWNsaWNrPVwiaGFuZGxlTG9nb3V0XCJcbiAgICAgICAgICAgICAgICAgID5bW2xvY2FsaXplKCd1aS5wYW5lbC5jb25maWcuY2xvdWQuYWNjb3VudC5zaWduX291dCcpXV08L213Yy1idXR0b25cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9oYS1jYXJkPlxuICAgICAgICAgIDwvaGEtY29uZmlnLXNlY3Rpb24+XG5cbiAgICAgICAgICA8aGEtY29uZmlnLXNlY3Rpb24gaXMtd2lkZT1cIltbaXNXaWRlXV1cIj5cbiAgICAgICAgICAgIDxzcGFuIHNsb3Q9XCJoZWFkZXJcIlxuICAgICAgICAgICAgICA+W1tsb2NhbGl6ZSgndWkucGFuZWwuY29uZmlnLmNsb3VkLmFjY291bnQuaW50ZWdyYXRpb25zJyldXTwvc3BhblxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgPGRpdiBzbG90PVwiaW50cm9kdWN0aW9uXCI+XG4gICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgIFtbbG9jYWxpemUoJ3VpLnBhbmVsLmNvbmZpZy5jbG91ZC5hY2NvdW50LmludGVncmF0aW9uc19pbnRyb2R1Y3Rpb24nKV1dXG4gICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgW1tsb2NhbGl6ZSgndWkucGFuZWwuY29uZmlnLmNsb3VkLmFjY291bnQuaW50ZWdyYXRpb25zX2ludHJvZHVjdGlvbjInKV1dXG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vd3d3Lm5hYnVjYXNhLmNvbVwiIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICAgICAgICA+W1tsb2NhbGl6ZSgndWkucGFuZWwuY29uZmlnLmNsb3VkLmFjY291bnQuaW50ZWdyYXRpb25zX2xpbmtfYWxsX2ZlYXR1cmVzJyldXTwvYVxuICAgICAgICAgICAgICAgID4uXG4gICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8Y2xvdWQtcmVtb3RlLXByZWZcbiAgICAgICAgICAgICAgaGFzcz1cIltbaGFzc11dXCJcbiAgICAgICAgICAgICAgY2xvdWQtc3RhdHVzPVwiW1tjbG91ZFN0YXR1c11dXCJcbiAgICAgICAgICAgID48L2Nsb3VkLXJlbW90ZS1wcmVmPlxuXG4gICAgICAgICAgICA8Y2xvdWQtYWxleGEtcHJlZlxuICAgICAgICAgICAgICBoYXNzPVwiW1toYXNzXV1cIlxuICAgICAgICAgICAgICBjbG91ZC1zdGF0dXM9XCJbW2Nsb3VkU3RhdHVzXV1cIlxuICAgICAgICAgICAgPjwvY2xvdWQtYWxleGEtcHJlZj5cblxuICAgICAgICAgICAgPGNsb3VkLWdvb2dsZS1wcmVmXG4gICAgICAgICAgICAgIGhhc3M9XCJbW2hhc3NdXVwiXG4gICAgICAgICAgICAgIGNsb3VkLXN0YXR1cz1cIltbY2xvdWRTdGF0dXNdXVwiXG4gICAgICAgICAgICA+PC9jbG91ZC1nb29nbGUtcHJlZj5cblxuICAgICAgICAgICAgPGNsb3VkLXdlYmhvb2tzXG4gICAgICAgICAgICAgIGhhc3M9XCJbW2hhc3NdXVwiXG4gICAgICAgICAgICAgIGNsb3VkLXN0YXR1cz1cIltbY2xvdWRTdGF0dXNdXVwiXG4gICAgICAgICAgICA+PC9jbG91ZC13ZWJob29rcz5cbiAgICAgICAgICA8L2hhLWNvbmZpZy1zZWN0aW9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvaGFzcy1zdWJwYWdlPlxuICAgIGA7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGhhc3M6IE9iamVjdCxcbiAgICAgIGlzV2lkZTogQm9vbGVhbixcbiAgICAgIGNsb3VkU3RhdHVzOiBPYmplY3QsXG4gICAgICBfc3Vic2NyaXB0aW9uOiB7XG4gICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgICAgdmFsdWU6IG51bGwsXG4gICAgICB9LFxuICAgIH07XG4gIH1cblxuICByZWFkeSgpIHtcbiAgICBzdXBlci5yZWFkeSgpO1xuICAgIHRoaXMuX2ZldGNoU3Vic2NyaXB0aW9uSW5mbygpO1xuICB9XG5cbiAgX2NvbXB1dGVSZW1vdGVDb25uZWN0ZWQoY29ubmVjdGVkKSB7XG4gICAgcmV0dXJuIGNvbm5lY3RlZFxuICAgICAgPyB0aGlzLmhhc3MubG9jYWxpemUoXCJ1aS5wYW5lbC5jb25maWcuY2xvdWQuYWNjb3VudC5jb25uZWN0ZWRcIilcbiAgICAgIDogdGhpcy5oYXNzLmxvY2FsaXplKFwidWkucGFuZWwuY29uZmlnLmNsb3VkLmFjY291bnQubm90X2Nvbm5lY3RlZFwiKTtcbiAgfVxuXG4gIGFzeW5jIF9mZXRjaFN1YnNjcmlwdGlvbkluZm8oKSB7XG4gICAgdGhpcy5fc3Vic2NyaXB0aW9uID0gYXdhaXQgZmV0Y2hDbG91ZFN1YnNjcmlwdGlvbkluZm8odGhpcy5oYXNzKTtcbiAgICBpZiAoXG4gICAgICB0aGlzLl9zdWJzY3JpcHRpb24ucHJvdmlkZXIgJiZcbiAgICAgIHRoaXMuY2xvdWRTdGF0dXMgJiZcbiAgICAgIHRoaXMuY2xvdWRTdGF0dXMuY2xvdWQgIT09IFwiY29ubmVjdGVkXCJcbiAgICApIHtcbiAgICAgIHRoaXMuZmlyZShcImhhLXJlZnJlc2gtY2xvdWQtc3RhdHVzXCIpO1xuICAgIH1cbiAgfVxuXG4gIGhhbmRsZUxvZ291dCgpIHtcbiAgICB0aGlzLmhhc3NcbiAgICAgIC5jYWxsQXBpKFwicG9zdFwiLCBcImNsb3VkL2xvZ291dFwiKVxuICAgICAgLnRoZW4oKCkgPT4gdGhpcy5maXJlKFwiaGEtcmVmcmVzaC1jbG91ZC1zdGF0dXNcIikpO1xuICB9XG5cbiAgX2Zvcm1hdFN1YnNjcmlwdGlvbihzdWJJbmZvKSB7XG4gICAgaWYgKHN1YkluZm8gPT09IG51bGwpIHtcbiAgICAgIHJldHVybiB0aGlzLmhhc3MubG9jYWxpemUoXG4gICAgICAgIFwidWkucGFuZWwuY29uZmlnLmNsb3VkLmFjY291bnQuZmV0Y2hpbmdfc3Vic2NyaXB0aW9uXCJcbiAgICAgICk7XG4gICAgfVxuXG4gICAgbGV0IGRlc2NyaXB0aW9uID0gc3ViSW5mby5odW1hbl9kZXNjcmlwdGlvbjtcblxuICAgIGlmIChzdWJJbmZvLnBsYW5fcmVuZXdhbF9kYXRlKSB7XG4gICAgICBkZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uLnJlcGxhY2UoXG4gICAgICAgIFwie3BlcmlvZEVuZH1cIixcbiAgICAgICAgZm9ybWF0RGF0ZVRpbWUoXG4gICAgICAgICAgbmV3IERhdGUoc3ViSW5mby5wbGFuX3JlbmV3YWxfZGF0ZSAqIDEwMDApLFxuICAgICAgICAgIHRoaXMuaGFzcy5sYW5ndWFnZVxuICAgICAgICApXG4gICAgICApO1xuICAgIH1cblxuICAgIHJldHVybiBkZXNjcmlwdGlvbjtcbiAgfVxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJjbG91ZC1hY2NvdW50XCIsIENsb3VkQWNjb3VudCk7XG4iLCJpbXBvcnQge1xuICBodG1sLFxuICBMaXRFbGVtZW50LFxuICBUZW1wbGF0ZVJlc3VsdCxcbiAgQ1NTUmVzdWx0LFxuICBjc3MsXG4gIHByb3BlcnR5LFxufSBmcm9tIFwibGl0LWVsZW1lbnRcIjtcbmltcG9ydCBcIkBtYXRlcmlhbC9td2MtYnV0dG9uXCI7XG5cbmltcG9ydCBcIi4uLy4uLy4uLy4uL2NvbXBvbmVudHMvaGEtY2FyZFwiO1xuaW1wb3J0IFwiLi4vLi4vLi4vLi4vY29tcG9uZW50cy9oYS1zd2l0Y2hcIjtcblxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1kdXBsaWNhdGUtaW1wb3J0c1xuaW1wb3J0IHsgSGFTd2l0Y2ggfSBmcm9tIFwiLi4vLi4vLi4vLi4vY29tcG9uZW50cy9oYS1zd2l0Y2hcIjtcbmltcG9ydCB7IGZpcmVFdmVudCB9IGZyb20gXCIuLi8uLi8uLi8uLi9jb21tb24vZG9tL2ZpcmVfZXZlbnRcIjtcbmltcG9ydCB7IEhvbWVBc3Npc3RhbnQgfSBmcm9tIFwiLi4vLi4vLi4vLi4vdHlwZXNcIjtcbmltcG9ydCB7IENsb3VkU3RhdHVzTG9nZ2VkSW4sIHVwZGF0ZUNsb3VkUHJlZiB9IGZyb20gXCIuLi8uLi8uLi8uLi9kYXRhL2Nsb3VkXCI7XG5pbXBvcnQgeyBzeW5jQ2xvdWRBbGV4YUVudGl0aWVzIH0gZnJvbSBcIi4uLy4uLy4uLy4uL2RhdGEvYWxleGFcIjtcblxuZXhwb3J0IGNsYXNzIENsb3VkQWxleGFQcmVmIGV4dGVuZHMgTGl0RWxlbWVudCB7XG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyBoYXNzPzogSG9tZUFzc2lzdGFudDtcbiAgQHByb3BlcnR5KCkgcHVibGljIGNsb3VkU3RhdHVzPzogQ2xvdWRTdGF0dXNMb2dnZWRJbjtcbiAgQHByb3BlcnR5KCkgcHJpdmF0ZSBfc3luY2luZyA9IGZhbHNlO1xuXG4gIHByb3RlY3RlZCByZW5kZXIoKTogVGVtcGxhdGVSZXN1bHQgfCB2b2lkIHtcbiAgICBpZiAoIXRoaXMuY2xvdWRTdGF0dXMpIHtcbiAgICAgIHJldHVybiBodG1sYGA7XG4gICAgfVxuXG4gICAgY29uc3QgeyBhbGV4YV9lbmFibGVkLCBhbGV4YV9yZXBvcnRfc3RhdGUgfSA9IHRoaXMuY2xvdWRTdGF0dXMhLnByZWZzO1xuXG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8aGEtY2FyZFxuICAgICAgICBoZWFkZXI9JHt0aGlzLmhhc3MhLmxvY2FsaXplKFxuICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLmNsb3VkLmFjY291bnQuYWxleGEudGl0bGVcIlxuICAgICAgICApfVxuICAgICAgPlxuICAgICAgICA8ZGl2IGNsYXNzPVwic3dpdGNoXCI+XG4gICAgICAgICAgPGhhLXN3aXRjaFxuICAgICAgICAgICAgLmNoZWNrZWQ9JHthbGV4YV9lbmFibGVkfVxuICAgICAgICAgICAgQGNoYW5nZT0ke3RoaXMuX2VuYWJsZWRUb2dnbGVDaGFuZ2VkfVxuICAgICAgICAgID48L2hhLXN3aXRjaD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWNvbnRlbnRcIj5cbiAgICAgICAgICAke3RoaXMuaGFzcyEubG9jYWxpemUoXCJ1aS5wYW5lbC5jb25maWcuY2xvdWQuYWNjb3VudC5hbGV4YS5pbmZvXCIpfVxuICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9za2lsbHMtc3RvcmUuYW1hem9uLmNvbS9kZWVwbGluay9kcC9CMDc3MkoxUUtCP2RldmljZVR5cGU9YXBwXCJcbiAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgJHt0aGlzLmhhc3MhLmxvY2FsaXplKFxuICAgICAgICAgICAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcuY2xvdWQuYWNjb3VudC5hbGV4YS5lbmFibGVfaGFfc2tpbGxcIlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vd3d3Lm5hYnVjYXNhLmNvbS9jb25maWcvYW1hem9uX2FsZXhhL1wiXG4gICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICR7dGhpcy5oYXNzIS5sb2NhbGl6ZShcbiAgICAgICAgICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLmNsb3VkLmFjY291bnQuYWxleGEuY29uZmlnX2RvY3VtZW50YXRpb25cIlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPC91bD5cbiAgICAgICAgICAke2FsZXhhX2VuYWJsZWRcbiAgICAgICAgICAgID8gaHRtbGBcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3RhdGUtcmVwb3J0aW5nXCI+XG4gICAgICAgICAgICAgICAgICA8aDM+XG4gICAgICAgICAgICAgICAgICAgICR7dGhpcy5oYXNzIS5sb2NhbGl6ZShcbiAgICAgICAgICAgICAgICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy5jbG91ZC5hY2NvdW50LmFsZXhhLmVuYWJsZV9zdGF0ZV9yZXBvcnRpbmdcIlxuICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgPC9oMz5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzdGF0ZS1yZXBvcnRpbmctc3dpdGNoXCI+XG4gICAgICAgICAgICAgICAgICAgIDxoYS1zd2l0Y2hcbiAgICAgICAgICAgICAgICAgICAgICAuY2hlY2tlZD0ke2FsZXhhX3JlcG9ydF9zdGF0ZX1cbiAgICAgICAgICAgICAgICAgICAgICBAY2hhbmdlPSR7dGhpcy5fcmVwb3J0VG9nZ2xlQ2hhbmdlZH1cbiAgICAgICAgICAgICAgICAgICAgPjwvaGEtc3dpdGNoPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAke3RoaXMuaGFzcyEubG9jYWxpemUoXG4gICAgICAgICAgICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLmNsb3VkLmFjY291bnQuYWxleGEuaW5mb19zdGF0ZV9yZXBvcnRpbmdcIlxuICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgIGBcbiAgICAgICAgICAgIDogXCJcIn1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWFjdGlvbnNcIj5cbiAgICAgICAgICA8bXdjLWJ1dHRvbiBAY2xpY2s9JHt0aGlzLl9oYW5kbGVTeW5jfSAuZGlzYWJsZWQ9JHt0aGlzLl9zeW5jaW5nfT5cbiAgICAgICAgICAgICR7dGhpcy5oYXNzIS5sb2NhbGl6ZShcbiAgICAgICAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcuY2xvdWQuYWNjb3VudC5hbGV4YS5zeW5jX2VudGl0aWVzXCJcbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9td2MtYnV0dG9uPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJzcGFjZXJcIj48L2Rpdj5cbiAgICAgICAgICA8YSBocmVmPVwiL2NvbmZpZy9jbG91ZC9hbGV4YVwiPlxuICAgICAgICAgICAgPG13Yy1idXR0b25cbiAgICAgICAgICAgICAgPiR7dGhpcy5oYXNzIS5sb2NhbGl6ZShcbiAgICAgICAgICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy5jbG91ZC5hY2NvdW50LmFsZXhhLm1hbmFnZV9lbnRpdGllc1wiXG4gICAgICAgICAgICAgICl9PC9td2MtYnV0dG9uXG4gICAgICAgICAgICA+XG4gICAgICAgICAgPC9hPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvaGEtY2FyZD5cbiAgICBgO1xuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBfaGFuZGxlU3luYygpIHtcbiAgICB0aGlzLl9zeW5jaW5nID0gdHJ1ZTtcbiAgICB0cnkge1xuICAgICAgYXdhaXQgc3luY0Nsb3VkQWxleGFFbnRpdGllcyh0aGlzLmhhc3MhKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGFsZXJ0KFxuICAgICAgICBgJHt0aGlzLmhhc3MhLmxvY2FsaXplKFxuICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLmNsb3VkLmFjY291bnQuYWxleGEuc3luY19lbnRpdGllc19lcnJvclwiXG4gICAgICAgICl9ICR7ZXJyLmJvZHkubWVzc2FnZX1gXG4gICAgICApO1xuICAgIH0gZmluYWxseSB7XG4gICAgICB0aGlzLl9zeW5jaW5nID0gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBfZW5hYmxlZFRvZ2dsZUNoYW5nZWQoZXYpIHtcbiAgICBjb25zdCB0b2dnbGUgPSBldi50YXJnZXQgYXMgSGFTd2l0Y2g7XG4gICAgdHJ5IHtcbiAgICAgIGF3YWl0IHVwZGF0ZUNsb3VkUHJlZih0aGlzLmhhc3MhLCB7IGFsZXhhX2VuYWJsZWQ6IHRvZ2dsZS5jaGVja2VkISB9KTtcbiAgICAgIGZpcmVFdmVudCh0aGlzLCBcImhhLXJlZnJlc2gtY2xvdWQtc3RhdHVzXCIpO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgdG9nZ2xlLmNoZWNrZWQgPSAhdG9nZ2xlLmNoZWNrZWQ7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBfcmVwb3J0VG9nZ2xlQ2hhbmdlZChldikge1xuICAgIGNvbnN0IHRvZ2dsZSA9IGV2LnRhcmdldCBhcyBIYVN3aXRjaDtcbiAgICB0cnkge1xuICAgICAgYXdhaXQgdXBkYXRlQ2xvdWRQcmVmKHRoaXMuaGFzcyEsIHtcbiAgICAgICAgYWxleGFfcmVwb3J0X3N0YXRlOiB0b2dnbGUuY2hlY2tlZCEsXG4gICAgICB9KTtcbiAgICAgIGZpcmVFdmVudCh0aGlzLCBcImhhLXJlZnJlc2gtY2xvdWQtc3RhdHVzXCIpO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgYWxlcnQoXG4gICAgICAgIGAke3RoaXMuaGFzcyEubG9jYWxpemUoXG4gICAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcuY2xvdWQuYWNjb3VudC5hbGV4YS5zdGF0ZV9yZXBvcnRpbmdfZXJyb3JcIixcbiAgICAgICAgICBcImVuYWJsZV9kaXNhYmxlXCIsXG4gICAgICAgICAgdGhpcy5oYXNzIS5sb2NhbGl6ZShcbiAgICAgICAgICAgIHRvZ2dsZS5jaGVja2VkXG4gICAgICAgICAgICAgID8gXCJ1aS5wYW5lbC5jb25maWcuY2xvdWQuYWNjb3VudC5hbGV4YS5lbmFibGVcIlxuICAgICAgICAgICAgICA6IFwidWkucGFuZWwuY29uZmlnLmNsb3VkLmFjY291bnQuYWxleGEuZGlzYWJsZVwiXG4gICAgICAgICAgKVxuICAgICAgICApfSAke2Vyci5tZXNzYWdlfWBcbiAgICAgICk7XG4gICAgICB0b2dnbGUuY2hlY2tlZCA9ICF0b2dnbGUuY2hlY2tlZDtcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgZ2V0IHN0eWxlcygpOiBDU1NSZXN1bHQge1xuICAgIHJldHVybiBjc3NgXG4gICAgICBhIHtcbiAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xuICAgICAgfVxuICAgICAgLnN3aXRjaCB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgcmlnaHQ6IDI0cHg7XG4gICAgICAgIHRvcDogMzJweDtcbiAgICAgIH1cbiAgICAgIC5jYXJkLWFjdGlvbnMge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgfVxuICAgICAgLmNhcmQtYWN0aW9ucyBhIHtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgfVxuICAgICAgLnNwYWNlciB7XG4gICAgICAgIGZsZXgtZ3JvdzogMTtcbiAgICAgIH1cbiAgICAgIC5zdGF0ZS1yZXBvcnRpbmcge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBtYXJnaW4tdG9wOiAxLjVlbTtcbiAgICAgIH1cbiAgICAgIC5zdGF0ZS1yZXBvcnRpbmcgKyBwIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMC41ZW07XG4gICAgICB9XG4gICAgICAuc3RhdGUtcmVwb3J0aW5nIGgzIHtcbiAgICAgICAgZmxleC1ncm93OiAxO1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICB9XG4gICAgICAuc3RhdGUtcmVwb3J0aW5nLXN3aXRjaCB7XG4gICAgICAgIG1hcmdpbi10b3A6IDAuMjVlbTtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA3cHg7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwLjVlbTtcbiAgICAgIH1cbiAgICBgO1xuICB9XG59XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIEhUTUxFbGVtZW50VGFnTmFtZU1hcCB7XG4gICAgXCJjbG91ZC1hbGV4YS1wcmVmXCI6IENsb3VkQWxleGFQcmVmO1xuICB9XG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcImNsb3VkLWFsZXhhLXByZWZcIiwgQ2xvdWRBbGV4YVByZWYpO1xuIiwiaW1wb3J0IHtcbiAgaHRtbCxcbiAgTGl0RWxlbWVudCxcbiAgUHJvcGVydHlEZWNsYXJhdGlvbnMsXG4gIFRlbXBsYXRlUmVzdWx0LFxuICBDU1NSZXN1bHQsXG4gIGNzcyxcbn0gZnJvbSBcImxpdC1lbGVtZW50XCI7XG5pbXBvcnQgXCJAbWF0ZXJpYWwvbXdjLWJ1dHRvblwiO1xuaW1wb3J0IFwiLi4vLi4vLi4vLi4vY29tcG9uZW50cy9idXR0b25zL2hhLWNhbGwtYXBpLWJ1dHRvblwiO1xuXG5pbXBvcnQgXCIuLi8uLi8uLi8uLi9jb21wb25lbnRzL2hhLWNhcmRcIjtcbmltcG9ydCBcIi4uLy4uLy4uLy4uL2NvbXBvbmVudHMvaGEtc3dpdGNoXCI7XG5cbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxuaW1wb3J0IHsgSGFTd2l0Y2ggfSBmcm9tIFwiLi4vLi4vLi4vLi4vY29tcG9uZW50cy9oYS1zd2l0Y2hcIjtcbmltcG9ydCB7IGZpcmVFdmVudCB9IGZyb20gXCIuLi8uLi8uLi8uLi9jb21tb24vZG9tL2ZpcmVfZXZlbnRcIjtcbmltcG9ydCB7IEhvbWVBc3Npc3RhbnQgfSBmcm9tIFwiLi4vLi4vLi4vLi4vdHlwZXNcIjtcbmltcG9ydCB7IENsb3VkU3RhdHVzTG9nZ2VkSW4sIHVwZGF0ZUNsb3VkUHJlZiB9IGZyb20gXCIuLi8uLi8uLi8uLi9kYXRhL2Nsb3VkXCI7XG5pbXBvcnQgeyBQYXBlcklucHV0RWxlbWVudCB9IGZyb20gXCJAcG9seW1lci9wYXBlci1pbnB1dC9wYXBlci1pbnB1dFwiO1xuaW1wb3J0IHsgc2hvd1NhdmVTdWNjZXNzVG9hc3QgfSBmcm9tIFwiLi4vLi4vLi4vLi4vdXRpbC90b2FzdC1zYXZlZC1zdWNjZXNzXCI7XG5cbmV4cG9ydCBjbGFzcyBDbG91ZEdvb2dsZVByZWYgZXh0ZW5kcyBMaXRFbGVtZW50IHtcbiAgcHVibGljIGhhc3M/OiBIb21lQXNzaXN0YW50O1xuICBwdWJsaWMgY2xvdWRTdGF0dXM/OiBDbG91ZFN0YXR1c0xvZ2dlZEluO1xuXG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpOiBQcm9wZXJ0eURlY2xhcmF0aW9ucyB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGhhc3M6IHt9LFxuICAgICAgY2xvdWRTdGF0dXM6IHt9LFxuICAgIH07XG4gIH1cblxuICBwcm90ZWN0ZWQgcmVuZGVyKCk6IFRlbXBsYXRlUmVzdWx0IHwgdm9pZCB7XG4gICAgaWYgKCF0aGlzLmNsb3VkU3RhdHVzKSB7XG4gICAgICByZXR1cm4gaHRtbGBgO1xuICAgIH1cblxuICAgIGNvbnN0IHtcbiAgICAgIGdvb2dsZV9lbmFibGVkLFxuICAgICAgZ29vZ2xlX3JlcG9ydF9zdGF0ZSxcbiAgICAgIGdvb2dsZV9zZWN1cmVfZGV2aWNlc19waW4sXG4gICAgfSA9IHRoaXMuY2xvdWRTdGF0dXMucHJlZnM7XG5cbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxoYS1jYXJkXG4gICAgICAgIGhlYWRlcj0ke3RoaXMuaGFzcyEubG9jYWxpemUoXG4gICAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcuY2xvdWQuYWNjb3VudC5nb29nbGUudGl0bGVcIlxuICAgICAgICApfVxuICAgICAgPlxuICAgICAgICA8ZGl2IGNsYXNzPVwic3dpdGNoXCI+XG4gICAgICAgICAgPGhhLXN3aXRjaFxuICAgICAgICAgICAgaWQ9XCJnb29nbGVfZW5hYmxlZFwiXG4gICAgICAgICAgICAuY2hlY2tlZD1cIiR7Z29vZ2xlX2VuYWJsZWR9XCJcbiAgICAgICAgICAgIEBjaGFuZ2U9XCIke3RoaXMuX2VuYWJsZVRvZ2dsZUNoYW5nZWR9XCJcbiAgICAgICAgICA+PC9oYS1zd2l0Y2g+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1jb250ZW50XCI+XG4gICAgICAgICAgJHt0aGlzLmhhc3MhLmxvY2FsaXplKFwidWkucGFuZWwuY29uZmlnLmNsb3VkLmFjY291bnQuZ29vZ2xlLmluZm9cIil9XG4gICAgICAgICAgPHVsPlxuICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgIGhyZWY9XCJodHRwczovL2Fzc2lzdGFudC5nb29nbGUuY29tL3NlcnZpY2VzL2EvdWlkLzAwMDAwMDkxZmQ1ZmI4NzU/aGw9ZW4tVVNcIlxuICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAke3RoaXMuaGFzcyEubG9jYWxpemUoXG4gICAgICAgICAgICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy5jbG91ZC5hY2NvdW50Lmdvb2dsZS5lbmFibGVfaGFfc2tpbGxcIlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vd3d3Lm5hYnVjYXNhLmNvbS9jb25maWcvZ29vZ2xlX2Fzc2lzdGFudC9cIlxuICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAke3RoaXMuaGFzcyEubG9jYWxpemUoXG4gICAgICAgICAgICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy5jbG91ZC5hY2NvdW50Lmdvb2dsZS5jb25maWdfZG9jdW1lbnRhdGlvblwiXG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICA8L3VsPlxuICAgICAgICAgICR7Z29vZ2xlX2VuYWJsZWRcbiAgICAgICAgICAgID8gaHRtbGBcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3RhdGUtcmVwb3J0aW5nXCI+XG4gICAgICAgICAgICAgICAgICA8aDM+XG4gICAgICAgICAgICAgICAgICAgICR7dGhpcy5oYXNzIS5sb2NhbGl6ZShcbiAgICAgICAgICAgICAgICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy5jbG91ZC5hY2NvdW50Lmdvb2dsZS5lbmFibGVfc3RhdGVfcmVwb3J0aW5nXCJcbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgIDwvaDM+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3RhdGUtcmVwb3J0aW5nLXN3aXRjaFwiPlxuICAgICAgICAgICAgICAgICAgICA8aGEtc3dpdGNoXG4gICAgICAgICAgICAgICAgICAgICAgLmNoZWNrZWQ9JHtnb29nbGVfcmVwb3J0X3N0YXRlfVxuICAgICAgICAgICAgICAgICAgICAgIEBjaGFuZ2U9JHt0aGlzLl9yZXBvcnRUb2dnbGVDaGFuZ2VkfVxuICAgICAgICAgICAgICAgICAgICA+PC9oYS1zd2l0Y2g+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICR7dGhpcy5oYXNzIS5sb2NhbGl6ZShcbiAgICAgICAgICAgICAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcuY2xvdWQuYWNjb3VudC5nb29nbGUuaW5mb19zdGF0ZV9yZXBvcnRpbmdcIlxuICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA8L3A+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2VjdXJlX2RldmljZXNcIj5cbiAgICAgICAgICAgICAgICAgIDxoMz5cbiAgICAgICAgICAgICAgICAgICAgJHt0aGlzLmhhc3MhLmxvY2FsaXplKFxuICAgICAgICAgICAgICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLmNsb3VkLmFjY291bnQuZ29vZ2xlLnNlY3VyaXR5X2RldmljZXNcIlxuICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgPC9oMz5cbiAgICAgICAgICAgICAgICAgICR7dGhpcy5oYXNzIS5sb2NhbGl6ZShcbiAgICAgICAgICAgICAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcuY2xvdWQuYWNjb3VudC5nb29nbGUuZW50ZXJfcGluX2luZm9cIlxuICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgIDxwYXBlci1pbnB1dFxuICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIiR7dGhpcy5oYXNzIS5sb2NhbGl6ZShcbiAgICAgICAgICAgICAgICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy5jbG91ZC5hY2NvdW50Lmdvb2dsZS5kZXZpY2VzX3BpblwiXG4gICAgICAgICAgICAgICAgICAgICl9XCJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJnb29nbGVfc2VjdXJlX2RldmljZXNfcGluXCJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCIke3RoaXMuaGFzcyEubG9jYWxpemUoXG4gICAgICAgICAgICAgICAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcuY2xvdWQuYWNjb3VudC5nb29nbGUuZW50ZXJfcGluX2hpbnRcIlxuICAgICAgICAgICAgICAgICAgICApfVwiXG4gICAgICAgICAgICAgICAgICAgIC52YWx1ZT0ke2dvb2dsZV9zZWN1cmVfZGV2aWNlc19waW4gfHwgXCJcIn1cbiAgICAgICAgICAgICAgICAgICAgQGNoYW5nZT1cIiR7dGhpcy5fcGluQ2hhbmdlZH1cIlxuICAgICAgICAgICAgICAgICAgPjwvcGFwZXItaW5wdXQ+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIGBcbiAgICAgICAgICAgIDogXCJcIn1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWFjdGlvbnNcIj5cbiAgICAgICAgICA8aGEtY2FsbC1hcGktYnV0dG9uXG4gICAgICAgICAgICAuaGFzcz1cIiR7dGhpcy5oYXNzfVwiXG4gICAgICAgICAgICAuZGlzYWJsZWQ9XCIkeyFnb29nbGVfZW5hYmxlZH1cIlxuICAgICAgICAgICAgcGF0aD1cImNsb3VkL2dvb2dsZV9hY3Rpb25zL3N5bmNcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgICR7dGhpcy5oYXNzIS5sb2NhbGl6ZShcbiAgICAgICAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcuY2xvdWQuYWNjb3VudC5nb29nbGUuc3luY19lbnRpdGllc1wiXG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvaGEtY2FsbC1hcGktYnV0dG9uPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJzcGFjZXJcIj48L2Rpdj5cbiAgICAgICAgICA8YSBocmVmPVwiL2NvbmZpZy9jbG91ZC9nb29nbGUtYXNzaXN0YW50XCI+XG4gICAgICAgICAgICA8bXdjLWJ1dHRvblxuICAgICAgICAgICAgICA+JHt0aGlzLmhhc3MhLmxvY2FsaXplKFxuICAgICAgICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLmNsb3VkLmFjY291bnQuZ29vZ2xlLm1hbmFnZV9lbnRpdGllc1wiXG4gICAgICAgICAgICAgICl9PC9td2MtYnV0dG9uXG4gICAgICAgICAgICA+XG4gICAgICAgICAgPC9hPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvaGEtY2FyZD5cbiAgICBgO1xuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBfZW5hYmxlVG9nZ2xlQ2hhbmdlZChldikge1xuICAgIGNvbnN0IHRvZ2dsZSA9IGV2LnRhcmdldCBhcyBIYVN3aXRjaDtcbiAgICB0cnkge1xuICAgICAgYXdhaXQgdXBkYXRlQ2xvdWRQcmVmKHRoaXMuaGFzcyEsIHsgW3RvZ2dsZS5pZF06IHRvZ2dsZS5jaGVja2VkISB9KTtcbiAgICAgIGZpcmVFdmVudCh0aGlzLCBcImhhLXJlZnJlc2gtY2xvdWQtc3RhdHVzXCIpO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgdG9nZ2xlLmNoZWNrZWQgPSAhdG9nZ2xlLmNoZWNrZWQ7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBfcmVwb3J0VG9nZ2xlQ2hhbmdlZChldikge1xuICAgIGNvbnN0IHRvZ2dsZSA9IGV2LnRhcmdldCBhcyBIYVN3aXRjaDtcbiAgICB0cnkge1xuICAgICAgYXdhaXQgdXBkYXRlQ2xvdWRQcmVmKHRoaXMuaGFzcyEsIHtcbiAgICAgICAgZ29vZ2xlX3JlcG9ydF9zdGF0ZTogdG9nZ2xlLmNoZWNrZWQhLFxuICAgICAgfSk7XG4gICAgICBmaXJlRXZlbnQodGhpcywgXCJoYS1yZWZyZXNoLWNsb3VkLXN0YXR1c1wiKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGFsZXJ0KFxuICAgICAgICBgVW5hYmxlIHRvICR7dG9nZ2xlLmNoZWNrZWQgPyBcImVuYWJsZVwiIDogXCJkaXNhYmxlXCJ9IHJlcG9ydCBzdGF0ZS4gJHtcbiAgICAgICAgICBlcnIubWVzc2FnZVxuICAgICAgICB9YFxuICAgICAgKTtcbiAgICAgIHRvZ2dsZS5jaGVja2VkID0gIXRvZ2dsZS5jaGVja2VkO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgX3BpbkNoYW5nZWQoZXYpIHtcbiAgICBjb25zdCBpbnB1dCA9IGV2LnRhcmdldCBhcyBQYXBlcklucHV0RWxlbWVudDtcbiAgICB0cnkge1xuICAgICAgYXdhaXQgdXBkYXRlQ2xvdWRQcmVmKHRoaXMuaGFzcyEsIHtcbiAgICAgICAgW2lucHV0LmlkXTogaW5wdXQudmFsdWUgfHwgbnVsbCxcbiAgICAgIH0pO1xuICAgICAgc2hvd1NhdmVTdWNjZXNzVG9hc3QodGhpcywgdGhpcy5oYXNzISk7XG4gICAgICBmaXJlRXZlbnQodGhpcywgXCJoYS1yZWZyZXNoLWNsb3VkLXN0YXR1c1wiKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGFsZXJ0KFxuICAgICAgICBgJHt0aGlzLmhhc3MhLmxvY2FsaXplKFxuICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLmNsb3VkLmFjY291bnQuZ29vZ2xlLmVudGVyX3Bpbl9lcnJvclwiXG4gICAgICAgICl9ICR7ZXJyLm1lc3NhZ2V9YFxuICAgICAgKTtcbiAgICAgIGlucHV0LnZhbHVlID0gdGhpcy5jbG91ZFN0YXR1cyEucHJlZnMuZ29vZ2xlX3NlY3VyZV9kZXZpY2VzX3BpbjtcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgZ2V0IHN0eWxlcygpOiBDU1NSZXN1bHQge1xuICAgIHJldHVybiBjc3NgXG4gICAgICBhIHtcbiAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xuICAgICAgfVxuICAgICAgLnN3aXRjaCB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgcmlnaHQ6IDI0cHg7XG4gICAgICAgIHRvcDogMzJweDtcbiAgICAgIH1cbiAgICAgIGhhLWNhbGwtYXBpLWJ1dHRvbiB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgIH1cbiAgICAgIC5zZWN1cmVfZGV2aWNlcyB7XG4gICAgICAgIHBhZGRpbmctdG9wOiA4cHg7XG4gICAgICB9XG4gICAgICBwYXBlci1pbnB1dCB7XG4gICAgICAgIHdpZHRoOiAyNTBweDtcbiAgICAgIH1cbiAgICAgIC5jYXJkLWFjdGlvbnMge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgfVxuICAgICAgLmNhcmQtYWN0aW9ucyBhIHtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgfVxuICAgICAgLnNwYWNlciB7XG4gICAgICAgIGZsZXgtZ3JvdzogMTtcbiAgICAgIH1cbiAgICAgIC5zdGF0ZS1yZXBvcnRpbmcge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBtYXJnaW4tdG9wOiAxLjVlbTtcbiAgICAgIH1cbiAgICAgIC5zdGF0ZS1yZXBvcnRpbmcgKyBwIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMC41ZW07XG4gICAgICB9XG4gICAgICBoMyB7XG4gICAgICAgIG1hcmdpbjogMCAwIDhweCAwO1xuICAgICAgfVxuICAgICAgLnN0YXRlLXJlcG9ydGluZyBoMyB7XG4gICAgICAgIGZsZXgtZ3JvdzogMTtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgfVxuICAgICAgLnN0YXRlLXJlcG9ydGluZy1zd2l0Y2gge1xuICAgICAgICBtYXJnaW4tdG9wOiAwLjI1ZW07XG4gICAgICAgIG1hcmdpbi1yaWdodDogN3B4O1xuICAgICAgICBtYXJnaW4tbGVmdDogMC41ZW07XG4gICAgICB9XG4gICAgYDtcbiAgfVxufVxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBIVE1MRWxlbWVudFRhZ05hbWVNYXAge1xuICAgIFwiY2xvdWQtZ29vZ2xlLXByZWZcIjogQ2xvdWRHb29nbGVQcmVmO1xuICB9XG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcImNsb3VkLWdvb2dsZS1wcmVmXCIsIENsb3VkR29vZ2xlUHJlZik7XG4iLCJpbXBvcnQge1xuICBodG1sLFxuICBMaXRFbGVtZW50LFxuICBQcm9wZXJ0eURlY2xhcmF0aW9ucyxcbiAgVGVtcGxhdGVSZXN1bHQsXG4gIGN1c3RvbUVsZW1lbnQsXG4gIENTU1Jlc3VsdCxcbiAgY3NzLFxufSBmcm9tIFwibGl0LWVsZW1lbnRcIjtcbmltcG9ydCBcIkBtYXRlcmlhbC9td2MtYnV0dG9uXCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1pdGVtL3BhcGVyLWl0ZW0tYm9keVwiO1xuXG5pbXBvcnQgXCIuLi8uLi8uLi8uLi9jb21wb25lbnRzL2hhLWNhcmRcIjtcbmltcG9ydCBcIi4uLy4uLy4uLy4uL2NvbXBvbmVudHMvaGEtc3dpdGNoXCI7XG5cbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxuaW1wb3J0IHsgSGFTd2l0Y2ggfSBmcm9tIFwiLi4vLi4vLi4vLi4vY29tcG9uZW50cy9oYS1zd2l0Y2hcIjtcbmltcG9ydCB7IGZpcmVFdmVudCB9IGZyb20gXCIuLi8uLi8uLi8uLi9jb21tb24vZG9tL2ZpcmVfZXZlbnRcIjtcbmltcG9ydCB7IEhvbWVBc3Npc3RhbnQgfSBmcm9tIFwiLi4vLi4vLi4vLi4vdHlwZXNcIjtcbmltcG9ydCB7XG4gIGNvbm5lY3RDbG91ZFJlbW90ZSxcbiAgZGlzY29ubmVjdENsb3VkUmVtb3RlLFxuICBDbG91ZFN0YXR1c0xvZ2dlZEluLFxufSBmcm9tIFwiLi4vLi4vLi4vLi4vZGF0YS9jbG91ZFwiO1xuaW1wb3J0IHsgc2hvd0Nsb3VkQ2VydGlmaWNhdGVEaWFsb2cgfSBmcm9tIFwiLi4vZGlhbG9nLWNsb3VkLWNlcnRpZmljYXRlL3Nob3ctZGlhbG9nLWNsb3VkLWNlcnRpZmljYXRlXCI7XG5cbkBjdXN0b21FbGVtZW50KFwiY2xvdWQtcmVtb3RlLXByZWZcIilcbmV4cG9ydCBjbGFzcyBDbG91ZFJlbW90ZVByZWYgZXh0ZW5kcyBMaXRFbGVtZW50IHtcbiAgcHVibGljIGhhc3M/OiBIb21lQXNzaXN0YW50O1xuICBwdWJsaWMgY2xvdWRTdGF0dXM/OiBDbG91ZFN0YXR1c0xvZ2dlZEluO1xuXG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpOiBQcm9wZXJ0eURlY2xhcmF0aW9ucyB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGhhc3M6IHt9LFxuICAgICAgY2xvdWRTdGF0dXM6IHt9LFxuICAgIH07XG4gIH1cblxuICBwcm90ZWN0ZWQgcmVuZGVyKCk6IFRlbXBsYXRlUmVzdWx0IHwgdm9pZCB7XG4gICAgaWYgKCF0aGlzLmNsb3VkU3RhdHVzKSB7XG4gICAgICByZXR1cm4gaHRtbGBgO1xuICAgIH1cblxuICAgIGNvbnN0IHtcbiAgICAgIHJlbW90ZV9jb25uZWN0ZWQsXG4gICAgICByZW1vdGVfZG9tYWluLFxuICAgICAgcmVtb3RlX2NlcnRpZmljYXRlLFxuICAgIH0gPSB0aGlzLmNsb3VkU3RhdHVzO1xuXG4gICAgaWYgKCFyZW1vdGVfY2VydGlmaWNhdGUpIHtcbiAgICAgIHJldHVybiBodG1sYFxuICAgICAgICA8aGEtY2FyZFxuICAgICAgICAgIGhlYWRlcj0ke3RoaXMuaGFzcyEubG9jYWxpemUoXG4gICAgICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy5jbG91ZC5hY2NvdW50LnJlbW90ZS50aXRsZVwiXG4gICAgICAgICAgKX1cbiAgICAgICAgPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJwcmVwYXJpbmdcIj5cbiAgICAgICAgICAgICR7dGhpcy5oYXNzIS5sb2NhbGl6ZShcbiAgICAgICAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcuY2xvdWQuYWNjb3VudC5yZW1vdGUuYWNjZXNzX2lzX2JlaW5nX3ByZXBhcmVkXCJcbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvaGEtY2FyZD5cbiAgICAgIGA7XG4gICAgfVxuXG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8aGEtY2FyZFxuICAgICAgICBoZWFkZXI9JHt0aGlzLmhhc3MhLmxvY2FsaXplKFxuICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLmNsb3VkLmFjY291bnQucmVtb3RlLnRpdGxlXCJcbiAgICAgICAgKX1cbiAgICAgID5cbiAgICAgICAgPGRpdiBjbGFzcz1cInN3aXRjaFwiPlxuICAgICAgICAgIDxoYS1zd2l0Y2hcbiAgICAgICAgICAgIC5jaGVja2VkPVwiJHtyZW1vdGVfY29ubmVjdGVkfVwiXG4gICAgICAgICAgICBAY2hhbmdlPVwiJHt0aGlzLl90b2dnbGVDaGFuZ2VkfVwiXG4gICAgICAgICAgPjwvaGEtc3dpdGNoPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtY29udGVudFwiPlxuICAgICAgICAgICR7dGhpcy5oYXNzIS5sb2NhbGl6ZShcInVpLnBhbmVsLmNvbmZpZy5jbG91ZC5hY2NvdW50LnJlbW90ZS5pbmZvXCIpfVxuICAgICAgICAgICR7cmVtb3RlX2Nvbm5lY3RlZFxuICAgICAgICAgICAgPyB0aGlzLmhhc3MhLmxvY2FsaXplKFxuICAgICAgICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLmNsb3VkLmFjY291bnQucmVtb3RlLmluc3RhbmNlX2lzX2F2YWlsYWJsZVwiXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIDogdGhpcy5oYXNzIS5sb2NhbGl6ZShcbiAgICAgICAgICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy5jbG91ZC5hY2NvdW50LnJlbW90ZS5pbnN0YW5jZV93aWxsX2JlX2F2YWlsYWJsZVwiXG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vJHtyZW1vdGVfZG9tYWlufVwiIHRhcmdldD1cIl9ibGFua1wiIGNsYXNzPVwiYnJlYWstd29yZFwiPlxuICAgICAgICAgICAgaHR0cHM6Ly8ke3JlbW90ZV9kb21haW59PC9hXG4gICAgICAgICAgPi5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWFjdGlvbnNcIj5cbiAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly93d3cubmFidWNhc2EuY29tL2NvbmZpZy9yZW1vdGUvXCIgdGFyZ2V0PVwiX2JsYW5rXCI+XG4gICAgICAgICAgICA8bXdjLWJ1dHRvblxuICAgICAgICAgICAgICA+JHt0aGlzLmhhc3MhLmxvY2FsaXplKFxuICAgICAgICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLmNsb3VkLmFjY291bnQucmVtb3RlLmxpbmtfbGVhcm5faG93X2l0X3dvcmtzXCJcbiAgICAgICAgICAgICAgKX08L213Yy1idXR0b25cbiAgICAgICAgICAgID5cbiAgICAgICAgICA8L2E+XG4gICAgICAgICAgJHtyZW1vdGVfY2VydGlmaWNhdGVcbiAgICAgICAgICAgID8gaHRtbGBcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3BhY2VyXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgPG13Yy1idXR0b24gQGNsaWNrPSR7dGhpcy5fb3BlbkNlcnRJbmZvfT5cbiAgICAgICAgICAgICAgICAgICR7dGhpcy5oYXNzIS5sb2NhbGl6ZShcbiAgICAgICAgICAgICAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcuY2xvdWQuYWNjb3VudC5yZW1vdGUuY2VydGlmaWNhdGVfaW5mb1wiXG4gICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIDwvbXdjLWJ1dHRvbj5cbiAgICAgICAgICAgICAgYFxuICAgICAgICAgICAgOiBcIlwifVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvaGEtY2FyZD5cbiAgICBgO1xuICB9XG5cbiAgcHJpdmF0ZSBfb3BlbkNlcnRJbmZvKCkge1xuICAgIHNob3dDbG91ZENlcnRpZmljYXRlRGlhbG9nKHRoaXMsIHtcbiAgICAgIGNlcnRpZmljYXRlSW5mbzogdGhpcy5jbG91ZFN0YXR1cyEucmVtb3RlX2NlcnRpZmljYXRlISxcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgX3RvZ2dsZUNoYW5nZWQoZXYpIHtcbiAgICBjb25zdCB0b2dnbGUgPSBldi50YXJnZXQgYXMgSGFTd2l0Y2g7XG5cbiAgICB0cnkge1xuICAgICAgaWYgKHRvZ2dsZS5jaGVja2VkKSB7XG4gICAgICAgIGF3YWl0IGNvbm5lY3RDbG91ZFJlbW90ZSh0aGlzLmhhc3MhKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGF3YWl0IGRpc2Nvbm5lY3RDbG91ZFJlbW90ZSh0aGlzLmhhc3MhKTtcbiAgICAgIH1cbiAgICAgIGZpcmVFdmVudCh0aGlzLCBcImhhLXJlZnJlc2gtY2xvdWQtc3RhdHVzXCIpO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgYWxlcnQoZXJyLm1lc3NhZ2UpO1xuICAgICAgdG9nZ2xlLmNoZWNrZWQgPSAhdG9nZ2xlLmNoZWNrZWQ7XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIGdldCBzdHlsZXMoKTogQ1NTUmVzdWx0IHtcbiAgICByZXR1cm4gY3NzYFxuICAgICAgLnByZXBhcmluZyB7XG4gICAgICAgIHBhZGRpbmc6IDAgMTZweCAxNnB4O1xuICAgICAgfVxuICAgICAgYSB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbiAgICAgIH1cbiAgICAgIC5icmVhay13b3JkIHtcbiAgICAgICAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcbiAgICAgIH1cbiAgICAgIC5zd2l0Y2gge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHJpZ2h0OiAyNHB4O1xuICAgICAgICB0b3A6IDMycHg7XG4gICAgICB9XG4gICAgICAuY2FyZC1hY3Rpb25zIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIH1cbiAgICAgIC5jYXJkLWFjdGlvbnMgYSB7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgIH1cbiAgICAgIC5zcGFjZXIge1xuICAgICAgICBmbGV4LWdyb3c6IDE7XG4gICAgICB9XG4gICAgYDtcbiAgfVxufVxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBIVE1MRWxlbWVudFRhZ05hbWVNYXAge1xuICAgIFwiY2xvdWQtcmVtb3RlLXByZWZcIjogQ2xvdWRSZW1vdGVQcmVmO1xuICB9XG59XG4iLCJpbXBvcnQge1xuICBodG1sLFxuICBMaXRFbGVtZW50LFxuICBQcm9wZXJ0eURlY2xhcmF0aW9ucyxcbiAgUHJvcGVydHlWYWx1ZXMsXG59IGZyb20gXCJsaXQtZWxlbWVudFwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItaXRlbS9wYXBlci1pdGVtXCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1pdGVtL3BhcGVyLWl0ZW0tYm9keVwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItc3Bpbm5lci9wYXBlci1zcGlubmVyXCI7XG5cbmltcG9ydCBcIi4uLy4uLy4uLy4uL2NvbXBvbmVudHMvaGEtY2FyZFwiO1xuaW1wb3J0IFwiLi4vLi4vLi4vLi4vY29tcG9uZW50cy9oYS1zd2l0Y2hcIjtcblxuaW1wb3J0IHsgSG9tZUFzc2lzdGFudCwgV2ViaG9va0Vycm9yIH0gZnJvbSBcIi4uLy4uLy4uLy4uL3R5cGVzXCI7XG5pbXBvcnQgeyBXZWJob29rLCBmZXRjaFdlYmhvb2tzIH0gZnJvbSBcIi4uLy4uLy4uLy4uL2RhdGEvd2ViaG9va1wiO1xuaW1wb3J0IHtcbiAgY3JlYXRlQ2xvdWRob29rLFxuICBkZWxldGVDbG91ZGhvb2ssXG4gIENsb3VkV2ViaG9vayxcbiAgQ2xvdWRTdGF0dXNMb2dnZWRJbixcbn0gZnJvbSBcIi4uLy4uLy4uLy4uL2RhdGEvY2xvdWRcIjtcbmltcG9ydCB7IHNob3dNYW5hZ2VDbG91ZGhvb2tEaWFsb2cgfSBmcm9tIFwiLi4vZGlhbG9nLW1hbmFnZS1jbG91ZGhvb2svc2hvdy1kaWFsb2ctbWFuYWdlLWNsb3VkaG9va1wiO1xuXG5leHBvcnQgY2xhc3MgQ2xvdWRXZWJob29rcyBleHRlbmRzIExpdEVsZW1lbnQge1xuICBwdWJsaWMgaGFzcz86IEhvbWVBc3Npc3RhbnQ7XG4gIHB1YmxpYyBjbG91ZFN0YXR1cz86IENsb3VkU3RhdHVzTG9nZ2VkSW47XG4gIHByaXZhdGUgX2Nsb3VkSG9va3M/OiB7IFt3ZWJob29rSWQ6IHN0cmluZ106IENsb3VkV2ViaG9vayB9O1xuICBwcml2YXRlIF9sb2NhbEhvb2tzPzogV2ViaG9va1tdO1xuICBwcml2YXRlIF9wcm9ncmVzczogc3RyaW5nW107XG5cbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCk6IFByb3BlcnR5RGVjbGFyYXRpb25zIHtcbiAgICByZXR1cm4ge1xuICAgICAgaGFzczoge30sXG4gICAgICBjbG91ZFN0YXR1czoge30sXG4gICAgICBfY2xvdWRIb29rczoge30sXG4gICAgICBfbG9jYWxIb29rczoge30sXG4gICAgICBfcHJvZ3Jlc3M6IHt9LFxuICAgIH07XG4gIH1cblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuX3Byb2dyZXNzID0gW107XG4gIH1cblxuICBwdWJsaWMgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgc3VwZXIuY29ubmVjdGVkQ2FsbGJhY2soKTtcbiAgICB0aGlzLl9mZXRjaERhdGEoKTtcbiAgfVxuXG4gIHByb3RlY3RlZCByZW5kZXIoKSB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICAke3RoaXMucmVuZGVyU3R5bGUoKX1cbiAgICAgIDxoYS1jYXJkXG4gICAgICAgIGhlYWRlcj0ke3RoaXMuaGFzcyEubG9jYWxpemUoXG4gICAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcuY2xvdWQuYWNjb3VudC53ZWJob29rcy50aXRsZVwiXG4gICAgICAgICl9XG4gICAgICA+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWNvbnRlbnRcIj5cbiAgICAgICAgICAke3RoaXMuaGFzcyEubG9jYWxpemUoXCJ1aS5wYW5lbC5jb25maWcuY2xvdWQuYWNjb3VudC53ZWJob29rcy5pbmZvXCIpfVxuICAgICAgICAgICR7dGhpcy5fcmVuZGVyQm9keSgpfVxuXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImZvb3RlclwiPlxuICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vd3d3Lm5hYnVjYXNhLmNvbS9jb25maWcvd2ViaG9va3NcIiB0YXJnZXQ9XCJfYmxhbmtcIj5cbiAgICAgICAgICAgICAgJHt0aGlzLmhhc3MhLmxvY2FsaXplKFxuICAgICAgICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLmNsb3VkLmFjY291bnQud2ViaG9va3MubGlua19sZWFybl9tb3JlXCJcbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2hhLWNhcmQ+XG4gICAgYDtcbiAgfVxuXG4gIHByb3RlY3RlZCB1cGRhdGVkKGNoYW5nZWRQcm9wczogUHJvcGVydHlWYWx1ZXMpIHtcbiAgICBzdXBlci51cGRhdGVkKGNoYW5nZWRQcm9wcyk7XG4gICAgaWYgKGNoYW5nZWRQcm9wcy5oYXMoXCJjbG91ZFN0YXR1c1wiKSAmJiB0aGlzLmNsb3VkU3RhdHVzKSB7XG4gICAgICB0aGlzLl9jbG91ZEhvb2tzID0gdGhpcy5jbG91ZFN0YXR1cy5wcmVmcy5jbG91ZGhvb2tzIHx8IHt9O1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX3JlbmRlckJvZHkoKSB7XG4gICAgaWYgKCF0aGlzLmNsb3VkU3RhdHVzIHx8ICF0aGlzLl9sb2NhbEhvb2tzIHx8ICF0aGlzLl9jbG91ZEhvb2tzKSB7XG4gICAgICByZXR1cm4gaHRtbGBcbiAgICAgICAgPGRpdiBjbGFzcz1cImJvZHktdGV4dFwiPlxuICAgICAgICAgICR7dGhpcy5oYXNzIS5sb2NhbGl6ZShcbiAgICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLmNsb3VkLmFjY291bnQud2ViaG9va3MubG9hZGluZ1wiXG4gICAgICAgICAgKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICBgO1xuICAgIH1cblxuICAgIGlmICh0aGlzLl9sb2NhbEhvb2tzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIGh0bWxgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJib2R5LXRleHRcIj5cbiAgICAgICAgICAke3RoaXMuaGFzcyEubG9jYWxpemUoXG4gICAgICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy5jbG91ZC5hY2NvdW50LndlYmhvb2tzLm5vX2hvb2tzX3lldFwiXG4gICAgICAgICAgKX1cbiAgICAgICAgICA8YSBocmVmPVwiL2NvbmZpZy9pbnRlZ3JhdGlvbnNcIlxuICAgICAgICAgICAgPiR7dGhpcy5oYXNzIS5sb2NhbGl6ZShcbiAgICAgICAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcuY2xvdWQuYWNjb3VudC53ZWJob29rcy5ub19ob29rc195ZXRfbGlua19pbnRlZ3JhdGlvblwiXG4gICAgICAgICAgICApfTwvYVxuICAgICAgICAgID5cbiAgICAgICAgICAke3RoaXMuaGFzcyEubG9jYWxpemUoXG4gICAgICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy5jbG91ZC5hY2NvdW50LndlYmhvb2tzLm5vX2hvb2tzX3lldDJcIlxuICAgICAgICAgICl9XG4gICAgICAgICAgPGEgaHJlZj1cIi9jb25maWcvYXV0b21hdGlvbi9uZXdcIlxuICAgICAgICAgICAgPiR7dGhpcy5oYXNzIS5sb2NhbGl6ZShcbiAgICAgICAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcuY2xvdWQuYWNjb3VudC53ZWJob29rcy5ub19ob29rc195ZXRfbGlua19hdXRvbWF0aW9uXCJcbiAgICAgICAgICAgICl9PC9hXG4gICAgICAgICAgPi5cbiAgICAgICAgPC9kaXY+XG4gICAgICBgO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLl9sb2NhbEhvb2tzLm1hcChcbiAgICAgIChlbnRyeSkgPT4gaHRtbGBcbiAgICAgICAgPGRpdiBjbGFzcz1cIndlYmhvb2tcIiAuZW50cnk9XCIke2VudHJ5fVwiPlxuICAgICAgICAgIDxwYXBlci1pdGVtLWJvZHkgdHdvLWxpbmU+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAke2VudHJ5Lm5hbWV9XG4gICAgICAgICAgICAgICR7ZW50cnkuZG9tYWluID09PSBlbnRyeS5uYW1lLnRvTG93ZXJDYXNlKClcbiAgICAgICAgICAgICAgICA/IFwiXCJcbiAgICAgICAgICAgICAgICA6IGAgKCR7ZW50cnkuZG9tYWlufSlgfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IHNlY29uZGFyeT4ke2VudHJ5LndlYmhvb2tfaWR9PC9kaXY+XG4gICAgICAgICAgPC9wYXBlci1pdGVtLWJvZHk+XG4gICAgICAgICAgJHt0aGlzLl9wcm9ncmVzcy5pbmNsdWRlcyhlbnRyeS53ZWJob29rX2lkKVxuICAgICAgICAgICAgPyBodG1sYFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwcm9ncmVzc1wiPlxuICAgICAgICAgICAgICAgICAgPHBhcGVyLXNwaW5uZXIgYWN0aXZlPjwvcGFwZXItc3Bpbm5lcj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgYFxuICAgICAgICAgICAgOiB0aGlzLl9jbG91ZEhvb2tzIVtlbnRyeS53ZWJob29rX2lkXVxuICAgICAgICAgICAgPyBodG1sYFxuICAgICAgICAgICAgICAgIDxtd2MtYnV0dG9uIEBjbGljaz1cIiR7dGhpcy5faGFuZGxlTWFuYWdlQnV0dG9ufVwiPlxuICAgICAgICAgICAgICAgICAgJHt0aGlzLmhhc3MhLmxvY2FsaXplKFxuICAgICAgICAgICAgICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy5jbG91ZC5hY2NvdW50LndlYmhvb2tzLm1hbmFnZVwiXG4gICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIDwvbXdjLWJ1dHRvbj5cbiAgICAgICAgICAgICAgYFxuICAgICAgICAgICAgOiBodG1sYFxuICAgICAgICAgICAgICAgIDxoYS1zd2l0Y2ggQGNsaWNrPVwiJHt0aGlzLl9lbmFibGVXZWJob29rfVwiPjwvaGEtc3dpdGNoPlxuICAgICAgICAgICAgICBgfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIGBcbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBfc2hvd0RpYWxvZyh3ZWJob29rSWQ6IHN0cmluZykge1xuICAgIGNvbnN0IHdlYmhvb2sgPSB0aGlzLl9sb2NhbEhvb2tzIS5maW5kKFxuICAgICAgKGVudCkgPT4gZW50LndlYmhvb2tfaWQgPT09IHdlYmhvb2tJZFxuICAgICkhO1xuICAgIGNvbnN0IGNsb3VkaG9vayA9IHRoaXMuX2Nsb3VkSG9va3MhW3dlYmhvb2tJZF07XG4gICAgc2hvd01hbmFnZUNsb3VkaG9va0RpYWxvZyh0aGlzLCB7XG4gICAgICB3ZWJob29rLFxuICAgICAgY2xvdWRob29rLFxuICAgICAgZGlzYWJsZUhvb2s6ICgpID0+IHRoaXMuX2Rpc2FibGVXZWJob29rKHdlYmhvb2tJZCksXG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIF9oYW5kbGVNYW5hZ2VCdXR0b24oZXY6IE1vdXNlRXZlbnQpIHtcbiAgICBjb25zdCBlbnRyeSA9IChldi5jdXJyZW50VGFyZ2V0IGFzIGFueSkucGFyZW50RWxlbWVudC5lbnRyeSBhcyBXZWJob29rO1xuICAgIHRoaXMuX3Nob3dEaWFsb2coZW50cnkud2ViaG9va19pZCk7XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIF9lbmFibGVXZWJob29rKGV2OiBNb3VzZUV2ZW50KSB7XG4gICAgY29uc3QgZW50cnkgPSAoZXYuY3VycmVudFRhcmdldCBhcyBhbnkpLnBhcmVudEVsZW1lbnQuZW50cnk7XG4gICAgdGhpcy5fcHJvZ3Jlc3MgPSBbLi4udGhpcy5fcHJvZ3Jlc3MsIGVudHJ5LndlYmhvb2tfaWRdO1xuICAgIGxldCB1cGRhdGVkV2ViaG9vaztcblxuICAgIHRyeSB7XG4gICAgICB1cGRhdGVkV2ViaG9vayA9IGF3YWl0IGNyZWF0ZUNsb3VkaG9vayh0aGlzLmhhc3MhLCBlbnRyeS53ZWJob29rX2lkKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGFsZXJ0KChlcnIgYXMgV2ViaG9va0Vycm9yKS5tZXNzYWdlKTtcbiAgICAgIHJldHVybjtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgdGhpcy5fcHJvZ3Jlc3MgPSB0aGlzLl9wcm9ncmVzcy5maWx0ZXIoKHdpZCkgPT4gd2lkICE9PSBlbnRyeS53ZWJob29rX2lkKTtcbiAgICB9XG5cbiAgICB0aGlzLl9jbG91ZEhvb2tzID0ge1xuICAgICAgLi4udGhpcy5fY2xvdWRIb29rcyxcbiAgICAgIFtlbnRyeS53ZWJob29rX2lkXTogdXBkYXRlZFdlYmhvb2ssXG4gICAgfTtcblxuICAgIC8vIE9ubHkgb3BlbiBkaWFsb2cgaWYgd2UncmUgbm90IGFsc28gZW5hYmxpbmcgb3RoZXJzLCBvdGhlcndpc2UgaXQncyBjb25mdXNpbmdcbiAgICBpZiAodGhpcy5fcHJvZ3Jlc3MubGVuZ3RoID09PSAwKSB7XG4gICAgICB0aGlzLl9zaG93RGlhbG9nKGVudHJ5LndlYmhvb2tfaWQpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgX2Rpc2FibGVXZWJob29rKHdlYmhvb2tJZDogc3RyaW5nKSB7XG4gICAgdGhpcy5fcHJvZ3Jlc3MgPSBbLi4udGhpcy5fcHJvZ3Jlc3MsIHdlYmhvb2tJZF07XG4gICAgdHJ5IHtcbiAgICAgIGF3YWl0IGRlbGV0ZUNsb3VkaG9vayh0aGlzLmhhc3MhLCB3ZWJob29rSWQhKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGFsZXJ0KFxuICAgICAgICBgJHt0aGlzLmhhc3MhLmxvY2FsaXplKFxuICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLmNsb3VkLmFjY291bnQud2ViaG9va3MuZGlzYWJsZV9ob29rX2Vycm9yX21zZ1wiXG4gICAgICAgICl9ICR7KGVyciBhcyBXZWJob29rRXJyb3IpLm1lc3NhZ2V9YFxuICAgICAgKTtcbiAgICAgIHJldHVybjtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgdGhpcy5fcHJvZ3Jlc3MgPSB0aGlzLl9wcm9ncmVzcy5maWx0ZXIoKHdpZCkgPT4gd2lkICE9PSB3ZWJob29rSWQpO1xuICAgIH1cblxuICAgIC8vIFJlbW92ZSBjbG91ZCByZWxhdGVkIHBhcnRzIGZyb20gZW50cnkuXG4gICAgY29uc3QgeyBbd2ViaG9va0lkXTogZGlzYWJsZWRIb29rLCAuLi5uZXdIb29rcyB9ID0gdGhpcy5fY2xvdWRIb29rcyE7XG4gICAgdGhpcy5fY2xvdWRIb29rcyA9IG5ld0hvb2tzO1xuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBfZmV0Y2hEYXRhKCkge1xuICAgIHRoaXMuX2xvY2FsSG9va3MgPSB0aGlzLmhhc3MhLmNvbmZpZy5jb21wb25lbnRzLmluY2x1ZGVzKFwid2ViaG9va1wiKVxuICAgICAgPyBhd2FpdCBmZXRjaFdlYmhvb2tzKHRoaXMuaGFzcyEpXG4gICAgICA6IFtdO1xuICB9XG5cbiAgcHJpdmF0ZSByZW5kZXJTdHlsZSgpIHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxzdHlsZT5cbiAgICAgICAgLmJvZHktdGV4dCB7XG4gICAgICAgICAgcGFkZGluZzogOHB4IDA7XG4gICAgICAgIH1cbiAgICAgICAgLndlYmhvb2sge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgcGFkZGluZzogNHB4IDA7XG4gICAgICAgIH1cbiAgICAgICAgLnByb2dyZXNzIHtcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDE2cHg7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICB9XG4gICAgICAgIC5mb290ZXIge1xuICAgICAgICAgIHBhZGRpbmctdG9wOiAxNnB4O1xuICAgICAgICB9XG4gICAgICAgIC5ib2R5LXRleHQgYSxcbiAgICAgICAgLmZvb3RlciBhIHtcbiAgICAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XG4gICAgICAgIH1cbiAgICAgIDwvc3R5bGU+XG4gICAgYDtcbiAgfVxufVxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBIVE1MRWxlbWVudFRhZ05hbWVNYXAge1xuICAgIFwiY2xvdWQtd2ViaG9va3NcIjogQ2xvdWRXZWJob29rcztcbiAgfVxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJjbG91ZC13ZWJob29rc1wiLCBDbG91ZFdlYmhvb2tzKTtcbiIsImltcG9ydCB7IGZpcmVFdmVudCB9IGZyb20gXCIuLi8uLi8uLi8uLi9jb21tb24vZG9tL2ZpcmVfZXZlbnRcIjtcbmltcG9ydCB7IENlcnRpZmljYXRlSW5mb3JtYXRpb24gfSBmcm9tIFwiLi4vLi4vLi4vLi4vZGF0YS9jbG91ZFwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIENsb3VkQ2VydGlmaWNhdGVQYXJhbXMge1xuICBjZXJ0aWZpY2F0ZUluZm86IENlcnRpZmljYXRlSW5mb3JtYXRpb247XG59XG5cbmV4cG9ydCBjb25zdCBzaG93Q2xvdWRDZXJ0aWZpY2F0ZURpYWxvZyA9IChcbiAgZWxlbWVudDogSFRNTEVsZW1lbnQsXG4gIHdlYmhvb2tEaWFsb2dQYXJhbXM6IENsb3VkQ2VydGlmaWNhdGVQYXJhbXNcbik6IHZvaWQgPT4ge1xuICBmaXJlRXZlbnQoZWxlbWVudCwgXCJzaG93LWRpYWxvZ1wiLCB7XG4gICAgZGlhbG9nVGFnOiBcImRpYWxvZy1jbG91ZC1jZXJ0aWZpY2F0ZVwiLFxuICAgIGRpYWxvZ0ltcG9ydDogKCkgPT5cbiAgICAgIGltcG9ydCgvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcImRpYWxvZy1jbG91ZC1jZXJ0aWZpY2F0ZVwiICovIFwiLi9kaWFsb2ctY2xvdWQtY2VydGlmaWNhdGVcIiksXG4gICAgZGlhbG9nUGFyYW1zOiB3ZWJob29rRGlhbG9nUGFyYW1zLFxuICB9KTtcbn07XG4iLCJpbXBvcnQgeyBmaXJlRXZlbnQgfSBmcm9tIFwiLi4vLi4vLi4vLi4vY29tbW9uL2RvbS9maXJlX2V2ZW50XCI7XG5pbXBvcnQgeyBXZWJob29rIH0gZnJvbSBcIi4uLy4uLy4uLy4uL2RhdGEvd2ViaG9va1wiO1xuaW1wb3J0IHsgQ2xvdWRXZWJob29rIH0gZnJvbSBcIi4uLy4uLy4uLy4uL2RhdGEvY2xvdWRcIjtcblxuZXhwb3J0IGludGVyZmFjZSBXZWJob29rRGlhbG9nUGFyYW1zIHtcbiAgd2ViaG9vazogV2ViaG9vaztcbiAgY2xvdWRob29rOiBDbG91ZFdlYmhvb2s7XG4gIGRpc2FibGVIb29rOiAoKSA9PiB2b2lkO1xufVxuXG5leHBvcnQgY29uc3Qgc2hvd01hbmFnZUNsb3VkaG9va0RpYWxvZyA9IChcbiAgZWxlbWVudDogSFRNTEVsZW1lbnQsXG4gIHdlYmhvb2tEaWFsb2dQYXJhbXM6IFdlYmhvb2tEaWFsb2dQYXJhbXNcbik6IHZvaWQgPT4ge1xuICBmaXJlRXZlbnQoZWxlbWVudCwgXCJzaG93LWRpYWxvZ1wiLCB7XG4gICAgZGlhbG9nVGFnOiBcImRpYWxvZy1tYW5hZ2UtY2xvdWRob29rXCIsXG4gICAgZGlhbG9nSW1wb3J0OiAoKSA9PlxuICAgICAgaW1wb3J0KC8qIHdlYnBhY2tDaHVua05hbWU6IFwiY2xvdWQtd2ViaG9vay1tYW5hZ2UtZGlhbG9nXCIgKi8gXCIuL2RpYWxvZy1tYW5hZ2UtY2xvdWRob29rXCIpLFxuICAgIGRpYWxvZ1BhcmFtczogd2ViaG9va0RpYWxvZ1BhcmFtcyxcbiAgfSk7XG59O1xuIiwiaW1wb3J0IFwiLi9hY2NvdW50L2Nsb3VkLWFjY291bnRcIjtcbmltcG9ydCBcIi4vbG9naW4vY2xvdWQtbG9naW5cIjtcbmltcG9ydCB7XG4gIEhhc3NSb3V0ZXJQYWdlLFxuICBSb3V0ZXJPcHRpb25zLFxufSBmcm9tIFwiLi4vLi4vLi4vbGF5b3V0cy9oYXNzLXJvdXRlci1wYWdlXCI7XG5pbXBvcnQgeyBwcm9wZXJ0eSwgY3VzdG9tRWxlbWVudCB9IGZyb20gXCJsaXQtZWxlbWVudFwiO1xuaW1wb3J0IHsgSG9tZUFzc2lzdGFudCwgUm91dGUgfSBmcm9tIFwiLi4vLi4vLi4vdHlwZXNcIjtcbmltcG9ydCB7IG5hdmlnYXRlIH0gZnJvbSBcIi4uLy4uLy4uL2NvbW1vbi9uYXZpZ2F0ZVwiO1xuaW1wb3J0IHsgQ2xvdWRTdGF0dXMgfSBmcm9tIFwiLi4vLi4vLi4vZGF0YS9jbG91ZFwiO1xuaW1wb3J0IHsgUG9seW1lckNoYW5nZWRFdmVudCB9IGZyb20gXCIuLi8uLi8uLi9wb2x5bWVyLXR5cGVzXCI7XG5pbXBvcnQgeyBQb2x5bWVyRWxlbWVudCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyXCI7XG5cbmNvbnN0IExPR0dFRF9JTl9VUkxTID0gW1wiYWNjb3VudFwiLCBcImdvb2dsZS1hc3Npc3RhbnRcIiwgXCJhbGV4YVwiXTtcbmNvbnN0IE5PVF9MT0dHRURfSU5fVVJMUyA9IFtcImxvZ2luXCIsIFwicmVnaXN0ZXJcIiwgXCJmb3Jnb3QtcGFzc3dvcmRcIl07XG5cbkBjdXN0b21FbGVtZW50KFwiaGEtY29uZmlnLWNsb3VkXCIpXG5jbGFzcyBIYUNvbmZpZ0Nsb3VkIGV4dGVuZHMgSGFzc1JvdXRlclBhZ2Uge1xuICBAcHJvcGVydHkoKSBwdWJsaWMgaGFzcyE6IEhvbWVBc3Npc3RhbnQ7XG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyBpc1dpZGUhOiBib29sZWFuO1xuICBAcHJvcGVydHkoKSBwdWJsaWMgbmFycm93ITogYm9vbGVhbjtcbiAgQHByb3BlcnR5KCkgcHVibGljIHJvdXRlITogUm91dGU7XG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyBjbG91ZFN0YXR1cyE6IENsb3VkU3RhdHVzO1xuXG4gIHByb3RlY3RlZCByb3V0ZXJPcHRpb25zOiBSb3V0ZXJPcHRpb25zID0ge1xuICAgIGRlZmF1bHRQYWdlOiBcImxvZ2luXCIsXG4gICAgc2hvd0xvYWRpbmc6IHRydWUsXG4gICAgaW5pdGlhbExvYWQ6ICgpID0+IHRoaXMuX2Nsb3VkU3RhdHVzTG9hZGVkLFxuICAgIC8vIEd1YXJkIHRoZSBkaWZmZXJlbnQgcGFnZXMgYmFzZWQgb24gaWYgd2UncmUgbG9nZ2VkIGluLlxuICAgIGJlZm9yZVJlbmRlcjogKHBhZ2U6IHN0cmluZykgPT4ge1xuICAgICAgaWYgKHRoaXMuY2xvdWRTdGF0dXMubG9nZ2VkX2luKSB7XG4gICAgICAgIGlmICghTE9HR0VEX0lOX1VSTFMuaW5jbHVkZXMocGFnZSkpIHtcbiAgICAgICAgICByZXR1cm4gXCJhY2NvdW50XCI7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmICghTk9UX0xPR0dFRF9JTl9VUkxTLmluY2x1ZGVzKHBhZ2UpKSB7XG4gICAgICAgICAgcmV0dXJuIFwibG9naW5cIjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9LFxuICAgIHJvdXRlczoge1xuICAgICAgbG9naW46IHtcbiAgICAgICAgdGFnOiBcImNsb3VkLWxvZ2luXCIsXG4gICAgICB9LFxuICAgICAgcmVnaXN0ZXI6IHtcbiAgICAgICAgdGFnOiBcImNsb3VkLXJlZ2lzdGVyXCIsXG4gICAgICAgIGxvYWQ6ICgpID0+XG4gICAgICAgICAgaW1wb3J0KC8qIHdlYnBhY2tDaHVua05hbWU6IFwiY2xvdWQtcmVnaXN0ZXJcIiAqLyBcIi4vcmVnaXN0ZXIvY2xvdWQtcmVnaXN0ZXJcIiksXG4gICAgICB9LFxuICAgICAgXCJmb3Jnb3QtcGFzc3dvcmRcIjoge1xuICAgICAgICB0YWc6IFwiY2xvdWQtZm9yZ290LXBhc3N3b3JkXCIsXG4gICAgICAgIGxvYWQ6ICgpID0+XG4gICAgICAgICAgaW1wb3J0KC8qIHdlYnBhY2tDaHVua05hbWU6IFwiY2xvdWQtZm9yZ290LXBhc3N3b3JkXCIgKi8gXCIuL2ZvcmdvdC1wYXNzd29yZC9jbG91ZC1mb3Jnb3QtcGFzc3dvcmRcIiksXG4gICAgICB9LFxuICAgICAgYWNjb3VudDoge1xuICAgICAgICB0YWc6IFwiY2xvdWQtYWNjb3VudFwiLFxuICAgICAgfSxcbiAgICAgIFwiZ29vZ2xlLWFzc2lzdGFudFwiOiB7XG4gICAgICAgIHRhZzogXCJjbG91ZC1nb29nbGUtYXNzaXN0YW50XCIsXG4gICAgICAgIGxvYWQ6ICgpID0+XG4gICAgICAgICAgaW1wb3J0KC8qIHdlYnBhY2tDaHVua05hbWU6IFwiY2xvdWQtZ29vZ2xlLWFzc2lzdGFudFwiICovIFwiLi9nb29nbGUtYXNzaXN0YW50L2Nsb3VkLWdvb2dsZS1hc3Npc3RhbnRcIiksXG4gICAgICB9LFxuICAgICAgYWxleGE6IHtcbiAgICAgICAgdGFnOiBcImNsb3VkLWFsZXhhXCIsXG4gICAgICAgIGxvYWQ6ICgpID0+XG4gICAgICAgICAgaW1wb3J0KC8qIHdlYnBhY2tDaHVua05hbWU6IFwiY2xvdWQtYWxleGFcIiAqLyBcIi4vYWxleGEvY2xvdWQtYWxleGFcIiksXG4gICAgICB9LFxuICAgIH0sXG4gIH07XG5cbiAgQHByb3BlcnR5KCkgcHJpdmF0ZSBfZmxhc2hNZXNzYWdlID0gXCJcIjtcbiAgQHByb3BlcnR5KCkgcHJpdmF0ZSBfbG9naW5FbWFpbCA9IFwiXCI7XG4gIHByaXZhdGUgX3Jlc29sdmVDbG91ZFN0YXR1c0xvYWRlZCE6ICgpID0+IHZvaWQ7XG4gIHByaXZhdGUgX2Nsb3VkU3RhdHVzTG9hZGVkID0gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICB0aGlzLl9yZXNvbHZlQ2xvdWRTdGF0dXNMb2FkZWQgPSByZXNvbHZlO1xuICB9KTtcblxuICBwcm90ZWN0ZWQgZmlyc3RVcGRhdGVkKGNoYW5nZWRQcm9wcykge1xuICAgIHN1cGVyLmZpcnN0VXBkYXRlZChjaGFuZ2VkUHJvcHMpO1xuICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcihcImNsb3VkLWRvbmVcIiwgKGV2KSA9PiB7XG4gICAgICB0aGlzLl9mbGFzaE1lc3NhZ2UgPSAoZXYgYXMgYW55KS5kZXRhaWwuZmxhc2hNZXNzYWdlO1xuICAgICAgbmF2aWdhdGUodGhpcywgXCIvY29uZmlnL2Nsb3VkL2xvZ2luXCIpO1xuICAgIH0pO1xuICB9XG5cbiAgcHJvdGVjdGVkIHVwZGF0ZWQoY2hhbmdlZFByb3BzKSB7XG4gICAgc3VwZXIudXBkYXRlZChjaGFuZ2VkUHJvcHMpO1xuXG4gICAgaWYgKGNoYW5nZWRQcm9wcy5oYXMoXCJjbG91ZFN0YXR1c1wiKSkge1xuICAgICAgY29uc3Qgb2xkU3RhdHVzID0gY2hhbmdlZFByb3BzLmdldChcImNsb3VkU3RhdHVzXCIpIGFzXG4gICAgICAgIHwgQ2xvdWRTdGF0dXNcbiAgICAgICAgfCB1bmRlZmluZWQ7XG4gICAgICBpZiAob2xkU3RhdHVzID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdGhpcy5fcmVzb2x2ZUNsb3VkU3RhdHVzTG9hZGVkKCk7XG4gICAgICB9IGVsc2UgaWYgKG9sZFN0YXR1cy5sb2dnZWRfaW4gIT09IHRoaXMuY2xvdWRTdGF0dXMubG9nZ2VkX2luKSB7XG4gICAgICAgIG5hdmlnYXRlKHRoaXMsIHRoaXMucm91dGUucHJlZml4LCB0cnVlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwcm90ZWN0ZWQgY3JlYXRlRWxlbWVudCh0YWc6IHN0cmluZykge1xuICAgIGNvbnN0IGVsID0gc3VwZXIuY3JlYXRlRWxlbWVudCh0YWcpO1xuICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoXCJlbWFpbC1jaGFuZ2VkXCIsIChldikgPT4ge1xuICAgICAgdGhpcy5fbG9naW5FbWFpbCA9IChldiBhcyBQb2x5bWVyQ2hhbmdlZEV2ZW50PHN0cmluZz4pLmRldGFpbC52YWx1ZTtcbiAgICB9KTtcbiAgICBlbC5hZGRFdmVudExpc3RlbmVyKFwiZmxhc2gtbWVzc2FnZS1jaGFuZ2VkXCIsIChldikgPT4ge1xuICAgICAgdGhpcy5fZmxhc2hNZXNzYWdlID0gKGV2IGFzIFBvbHltZXJDaGFuZ2VkRXZlbnQ8c3RyaW5nPikuZGV0YWlsLnZhbHVlO1xuICAgIH0pO1xuICAgIHJldHVybiBlbDtcbiAgfVxuXG4gIHByb3RlY3RlZCB1cGRhdGVQYWdlRWwoZWwpIHtcbiAgICAvLyBXZSBhcmUgbm90IGdvaW5nIHRvIHVwZGF0ZSBpZiB0aGUgY3VycmVudCBwYWdlIGlmIHdlIGFyZSBub3QgbG9nZ2VkIGluXG4gICAgLy8gYW5kIHRoZSBjdXJyZW50IHBhZ2UgcmVxdWlyZXMgYmVpbmcgbG9nZ2VkIGluLiBIYXBwZW5zIHdoZW4gd2UgbG9nIG91dC5cbiAgICBpZiAoXG4gICAgICB0aGlzLmNsb3VkU3RhdHVzICYmXG4gICAgICAhdGhpcy5jbG91ZFN0YXR1cy5sb2dnZWRfaW4gJiZcbiAgICAgIExPR0dFRF9JTl9VUkxTLmluY2x1ZGVzKHRoaXMuX2N1cnJlbnRQYWdlKVxuICAgICkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChcInNldFByb3BlcnRpZXNcIiBpbiBlbCkge1xuICAgICAgLy8gQXMgbG9uZyBhcyB3ZSBoYXZlIFBvbHltZXIgcGFnZXNcbiAgICAgIChlbCBhcyBQb2x5bWVyRWxlbWVudCkuc2V0UHJvcGVydGllcyh7XG4gICAgICAgIGhhc3M6IHRoaXMuaGFzcyxcbiAgICAgICAgZW1haWw6IHRoaXMuX2xvZ2luRW1haWwsXG4gICAgICAgIGlzV2lkZTogdGhpcy5pc1dpZGUsXG4gICAgICAgIGNsb3VkU3RhdHVzOiB0aGlzLmNsb3VkU3RhdHVzLFxuICAgICAgICBmbGFzaE1lc3NhZ2U6IHRoaXMuX2ZsYXNoTWVzc2FnZSxcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBlbC5oYXNzID0gdGhpcy5oYXNzO1xuICAgICAgZWwuZW1haWwgPSB0aGlzLl9sb2dpbkVtYWlsO1xuICAgICAgZWwuaXNXaWRlID0gdGhpcy5pc1dpZGU7XG4gICAgICBlbC5uYXJyb3cgPSB0aGlzLm5hcnJvdztcbiAgICAgIGVsLmNsb3VkU3RhdHVzID0gdGhpcy5jbG91ZFN0YXR1cztcbiAgICAgIGVsLmZsYXNoTWVzc2FnZSA9IHRoaXMuX2ZsYXNoTWVzc2FnZTtcbiAgICB9XG4gIH1cbn1cblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgSFRNTEVsZW1lbnRUYWdOYW1lTWFwIHtcbiAgICBcImhhLWNvbmZpZy1jbG91ZFwiOiBIYUNvbmZpZ0Nsb3VkO1xuICB9XG59XG4iLCJpbXBvcnQgXCJAbWF0ZXJpYWwvbXdjLWJ1dHRvblwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItaWNvbi1idXR0b24vcGFwZXItaWNvbi1idXR0b25cIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWlucHV0L3BhcGVyLWlucHV0XCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1pdGVtL3BhcGVyLWl0ZW0tYm9keVwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItaXRlbS9wYXBlci1pdGVtXCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1yaXBwbGUvcGFwZXItcmlwcGxlXCI7XG5pbXBvcnQgeyBodG1sIH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2h0bWwtdGFnXCI7XG5pbXBvcnQgeyBQb2x5bWVyRWxlbWVudCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL3BvbHltZXItZWxlbWVudFwiO1xuXG5pbXBvcnQgXCIuLi8uLi8uLi8uLi9jb21wb25lbnRzL2hhLWNhcmRcIjtcbmltcG9ydCBcIi4uLy4uLy4uLy4uL2NvbXBvbmVudHMvYnV0dG9ucy9oYS1wcm9ncmVzcy1idXR0b25cIjtcbmltcG9ydCBcIi4uLy4uLy4uLy4uL2xheW91dHMvaGFzcy1zdWJwYWdlXCI7XG5pbXBvcnQgXCIuLi8uLi8uLi8uLi9yZXNvdXJjZXMvaGEtc3R5bGVcIjtcblxuaW1wb3J0IFwiLi4vLi4vaGEtY29uZmlnLXNlY3Rpb25cIjtcbmltcG9ydCB7IEV2ZW50c01peGluIH0gZnJvbSBcIi4uLy4uLy4uLy4uL21peGlucy9ldmVudHMtbWl4aW5cIjtcbmltcG9ydCBOYXZpZ2F0ZU1peGluIGZyb20gXCIuLi8uLi8uLi8uLi9taXhpbnMvbmF2aWdhdGUtbWl4aW5cIjtcbmltcG9ydCBcIi4uLy4uLy4uLy4uL2NvbXBvbmVudHMvaGEtaWNvbi1uZXh0XCI7XG5pbXBvcnQgTG9jYWxpemVNaXhpbiBmcm9tIFwiLi4vLi4vLi4vLi4vbWl4aW5zL2xvY2FsaXplLW1peGluXCI7XG4vKlxuICogQGFwcGxpZXNNaXhpbiBOYXZpZ2F0ZU1peGluXG4gKiBAYXBwbGllc01peGluIEV2ZW50c01peGluXG4gKiBAYXBwbGllc01peGluIExvY2FsaXplTWl4aW5cbiAqL1xuY2xhc3MgQ2xvdWRMb2dpbiBleHRlbmRzIExvY2FsaXplTWl4aW4oXG4gIE5hdmlnYXRlTWl4aW4oRXZlbnRzTWl4aW4oUG9seW1lckVsZW1lbnQpKVxuKSB7XG4gIHN0YXRpYyBnZXQgdGVtcGxhdGUoKSB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8c3R5bGUgaW5jbHVkZT1cImlyb24tZmxleCBoYS1zdHlsZVwiPlxuICAgICAgICAuY29udGVudCB7XG4gICAgICAgICAgcGFkZGluZy1ib3R0b206IDI0cHg7XG4gICAgICAgICAgZGlyZWN0aW9uOiBsdHI7XG4gICAgICAgIH1cbiAgICAgICAgW3Nsb3Q9XCJpbnRyb2R1Y3Rpb25cIl0ge1xuICAgICAgICAgIG1hcmdpbjogLTFlbSAwO1xuICAgICAgICB9XG4gICAgICAgIFtzbG90PVwiaW50cm9kdWN0aW9uXCJdIGEge1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbiAgICAgICAgfVxuICAgICAgICBwYXBlci1pdGVtIHtcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIH1cbiAgICAgICAgaGEtY2FyZCB7XG4gICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgfVxuICAgICAgICBoYS1jYXJkIC5jYXJkLWhlYWRlciB7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogLThweDtcbiAgICAgICAgfVxuICAgICAgICBoMSB7XG4gICAgICAgICAgQGFwcGx5IC0tcGFwZXItZm9udC1oZWFkbGluZTtcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIH1cbiAgICAgICAgLmVycm9yIHtcbiAgICAgICAgICBjb2xvcjogdmFyKC0tZ29vZ2xlLXJlZC01MDApO1xuICAgICAgICB9XG4gICAgICAgIC5jYXJkLWFjdGlvbnMge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICAgICAgW2hpZGRlbl0ge1xuICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgIH1cbiAgICAgICAgLmZsYXNoLW1zZyB7XG4gICAgICAgICAgcGFkZGluZy1yaWdodDogNDRweDtcbiAgICAgICAgfVxuICAgICAgICAuZmxhc2gtbXNnIHBhcGVyLWljb24tYnV0dG9uIHtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgdG9wOiA4cHg7XG4gICAgICAgICAgcmlnaHQ6IDhweDtcbiAgICAgICAgICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5LXRleHQtY29sb3IpO1xuICAgICAgICB9XG4gICAgICA8L3N0eWxlPlxuICAgICAgPGhhc3Mtc3VicGFnZSBoZWFkZXI9XCJbW2xvY2FsaXplKCd1aS5wYW5lbC5jb25maWcuY2xvdWQuY2FwdGlvbicpXV1cIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRlbnRcIj5cbiAgICAgICAgICA8aGEtY29uZmlnLXNlY3Rpb24gaXMtd2lkZT1cIltbaXNXaWRlXV1cIj5cbiAgICAgICAgICAgIDxzcGFuIHNsb3Q9XCJoZWFkZXJcIlxuICAgICAgICAgICAgICA+W1tsb2NhbGl6ZSgndWkucGFuZWwuY29uZmlnLmNsb3VkLmNhcHRpb24nKV1dPC9zcGFuXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICA8ZGl2IHNsb3Q9XCJpbnRyb2R1Y3Rpb25cIj5cbiAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgW1tsb2NhbGl6ZSgndWkucGFuZWwuY29uZmlnLmNsb3VkLmxvZ2luLmludHJvZHVjdGlvbicpXV1cbiAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICBbW2xvY2FsaXplKCd1aS5wYW5lbC5jb25maWcuY2xvdWQubG9naW4uaW50cm9kdWN0aW9uMicpXV1cbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly93d3cubmFidWNhc2EuY29tXCIgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgICAgICAgID5OYWJ1Jm5ic3A7Q2FzYSwmbmJzcDtJbmM8L2FcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgW1tsb2NhbGl6ZSgndWkucGFuZWwuY29uZmlnLmNsb3VkLmxvZ2luLmludHJvZHVjdGlvbjJhJyldXVxuICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgIFtbbG9jYWxpemUoJ3VpLnBhbmVsLmNvbmZpZy5jbG91ZC5sb2dpbi5pbnRyb2R1Y3Rpb24zJyldXVxuICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3d3dy5uYWJ1Y2FzYS5jb21cIiB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgICAgICAgPltbbG9jYWxpemUoJ3VpLnBhbmVsLmNvbmZpZy5jbG91ZC5sb2dpbi5sZWFybl9tb3JlX2xpbmsnKV1dPC9hXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGhhLWNhcmQgaGlkZGVuJD1cIltbIWZsYXNoTWVzc2FnZV1dXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWNvbnRlbnQgZmxhc2gtbXNnXCI+XG4gICAgICAgICAgICAgICAgW1tmbGFzaE1lc3NhZ2VdXVxuICAgICAgICAgICAgICAgIDxwYXBlci1pY29uLWJ1dHRvbiBpY29uPVwiaGFzczpjbG9zZVwiIG9uLWNsaWNrPVwiX2Rpc21pc3NGbGFzaFwiXG4gICAgICAgICAgICAgICAgICA+W1tsb2NhbGl6ZSgndWkucGFuZWwuY29uZmlnLmNsb3VkLmxvZ2luLmRpc21pc3MnKV1dPC9wYXBlci1pY29uLWJ1dHRvblxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8cGFwZXItcmlwcGxlIGlkPVwiZmxhc2hSaXBwbGVcIiBub2luaz1cIlwiPjwvcGFwZXItcmlwcGxlPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvaGEtY2FyZD5cblxuICAgICAgICAgICAgPGhhLWNhcmRcbiAgICAgICAgICAgICAgaGVhZGVyPVwiW1tsb2NhbGl6ZSgndWkucGFuZWwuY29uZmlnLmNsb3VkLmxvZ2luLnNpZ25faW4nKV1dXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtY29udGVudFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJlcnJvclwiIGhpZGRlbiQ9XCJbWyFfZXJyb3JdXVwiPltbX2Vycm9yXV08L2Rpdj5cbiAgICAgICAgICAgICAgICA8cGFwZXItaW5wdXRcbiAgICAgICAgICAgICAgICAgIGxhYmVsPVwiW1tsb2NhbGl6ZSgndWkucGFuZWwuY29uZmlnLmNsb3VkLmxvZ2luLmVtYWlsJyldXVwiXG4gICAgICAgICAgICAgICAgICBpZD1cImVtYWlsXCJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXG4gICAgICAgICAgICAgICAgICB2YWx1ZT1cInt7ZW1haWx9fVwiXG4gICAgICAgICAgICAgICAgICBvbi1rZXlkb3duPVwiX2tleURvd25cIlxuICAgICAgICAgICAgICAgICAgZXJyb3ItbWVzc2FnZT1cIltbbG9jYWxpemUoJ3VpLnBhbmVsLmNvbmZpZy5jbG91ZC5sb2dpbi5lbWFpbF9lcnJvcl9tc2cnKV1dXCJcbiAgICAgICAgICAgICAgICA+PC9wYXBlci1pbnB1dD5cbiAgICAgICAgICAgICAgICA8cGFwZXItaW5wdXRcbiAgICAgICAgICAgICAgICAgIGlkPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgbGFiZWw9XCJbW2xvY2FsaXplKCd1aS5wYW5lbC5jb25maWcuY2xvdWQubG9naW4ucGFzc3dvcmQnKV1dXCJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPVwie3tfcGFzc3dvcmR9fVwiXG4gICAgICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgb24ta2V5ZG93bj1cIl9rZXlEb3duXCJcbiAgICAgICAgICAgICAgICAgIGVycm9yLW1lc3NhZ2U9XCJbW2xvY2FsaXplKCd1aS5wYW5lbC5jb25maWcuY2xvdWQubG9naW4ucGFzc3dvcmRfZXJyb3JfbXNnJyldXVwiXG4gICAgICAgICAgICAgICAgPjwvcGFwZXItaW5wdXQ+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1hY3Rpb25zXCI+XG4gICAgICAgICAgICAgICAgPGhhLXByb2dyZXNzLWJ1dHRvblxuICAgICAgICAgICAgICAgICAgb24tY2xpY2s9XCJfaGFuZGxlTG9naW5cIlxuICAgICAgICAgICAgICAgICAgcHJvZ3Jlc3M9XCJbW19yZXF1ZXN0SW5Qcm9ncmVzc11dXCJcbiAgICAgICAgICAgICAgICAgID5bW2xvY2FsaXplKCd1aS5wYW5lbC5jb25maWcuY2xvdWQubG9naW4uc2lnbl9pbicpXV08L2hhLXByb2dyZXNzLWJ1dHRvblxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICBjbGFzcz1cImxpbmtcIlxuICAgICAgICAgICAgICAgICAgaGlkZGVuPVwiW1tfcmVxdWVzdEluUHJvZ3Jlc3NdXVwiXG4gICAgICAgICAgICAgICAgICBvbi1jbGljaz1cIl9oYW5kbGVGb3Jnb3RQYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgW1tsb2NhbGl6ZSgndWkucGFuZWwuY29uZmlnLmNsb3VkLmxvZ2luLmZvcmdvdF9wYXNzd29yZCcpXV1cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2hhLWNhcmQ+XG5cbiAgICAgICAgICAgIDxoYS1jYXJkPlxuICAgICAgICAgICAgICA8cGFwZXItaXRlbSBvbi1jbGljaz1cIl9oYW5kbGVSZWdpc3RlclwiPlxuICAgICAgICAgICAgICAgIDxwYXBlci1pdGVtLWJvZHkgdHdvLWxpbmU9XCJcIj5cbiAgICAgICAgICAgICAgICAgIFtbbG9jYWxpemUoJ3VpLnBhbmVsLmNvbmZpZy5jbG91ZC5sb2dpbi5zdGFydF90cmlhbCcpXV1cbiAgICAgICAgICAgICAgICAgIDxkaXYgc2Vjb25kYXJ5PVwiXCI+XG4gICAgICAgICAgICAgICAgICAgIFtbbG9jYWxpemUoJ3VpLnBhbmVsLmNvbmZpZy5jbG91ZC5sb2dpbi50cmlhbF9pbmZvJyldXVxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9wYXBlci1pdGVtLWJvZHk+XG4gICAgICAgICAgICAgICAgPGhhLWljb24tbmV4dD48L2hhLWljb24tbmV4dD5cbiAgICAgICAgICAgICAgPC9wYXBlci1pdGVtPlxuICAgICAgICAgICAgPC9oYS1jYXJkPlxuICAgICAgICAgIDwvaGEtY29uZmlnLXNlY3Rpb24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9oYXNzLXN1YnBhZ2U+XG4gICAgYDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaGFzczogT2JqZWN0LFxuICAgICAgaXNXaWRlOiBCb29sZWFuLFxuICAgICAgZW1haWw6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICBub3RpZnk6IHRydWUsXG4gICAgICB9LFxuICAgICAgX3Bhc3N3b3JkOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgdmFsdWU6IFwiXCIsXG4gICAgICB9LFxuICAgICAgX3JlcXVlc3RJblByb2dyZXNzOiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIHZhbHVlOiBmYWxzZSxcbiAgICAgIH0sXG4gICAgICBmbGFzaE1lc3NhZ2U6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICBub3RpZnk6IHRydWUsXG4gICAgICB9LFxuICAgICAgX2Vycm9yOiBTdHJpbmcsXG4gICAgfTtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgb2JzZXJ2ZXJzKCkge1xuICAgIHJldHVybiBbXCJfaW5wdXRDaGFuZ2VkKGVtYWlsLCBfcGFzc3dvcmQpXCJdO1xuICB9XG5cbiAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgc3VwZXIuY29ubmVjdGVkQ2FsbGJhY2soKTtcbiAgICBpZiAodGhpcy5mbGFzaE1lc3NhZ2UpIHtcbiAgICAgIC8vIFdhaXQgZm9yIERPTSB0byBiZSBkcmF3blxuICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+XG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB0aGlzLiQuZmxhc2hSaXBwbGUuc2ltdWxhdGVkUmlwcGxlKCkpXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIF9pbnB1dENoYW5nZWQoKSB7XG4gICAgdGhpcy4kLmVtYWlsLmludmFsaWQgPSBmYWxzZTtcbiAgICB0aGlzLiQucGFzc3dvcmQuaW52YWxpZCA9IGZhbHNlO1xuICAgIHRoaXMuX2Vycm9yID0gZmFsc2U7XG4gIH1cblxuICBfa2V5RG93bihldikge1xuICAgIC8vIHZhbGlkYXRlIG9uIGVudGVyXG4gICAgaWYgKGV2LmtleUNvZGUgPT09IDEzKSB7XG4gICAgICB0aGlzLl9oYW5kbGVMb2dpbigpO1xuICAgICAgZXYucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG4gIH1cblxuICBfaGFuZGxlTG9naW4oKSB7XG4gICAgbGV0IGludmFsaWQgPSBmYWxzZTtcblxuICAgIGlmICghdGhpcy5lbWFpbCB8fCAhdGhpcy5lbWFpbC5pbmNsdWRlcyhcIkBcIikpIHtcbiAgICAgIHRoaXMuJC5lbWFpbC5pbnZhbGlkID0gdHJ1ZTtcbiAgICAgIHRoaXMuJC5lbWFpbC5mb2N1cygpO1xuICAgICAgaW52YWxpZCA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX3Bhc3N3b3JkLmxlbmd0aCA8IDgpIHtcbiAgICAgIHRoaXMuJC5wYXNzd29yZC5pbnZhbGlkID0gdHJ1ZTtcblxuICAgICAgaWYgKCFpbnZhbGlkKSB7XG4gICAgICAgIGludmFsaWQgPSB0cnVlO1xuICAgICAgICB0aGlzLiQucGFzc3dvcmQuZm9jdXMoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoaW52YWxpZCkgcmV0dXJuO1xuXG4gICAgdGhpcy5fcmVxdWVzdEluUHJvZ3Jlc3MgPSB0cnVlO1xuXG4gICAgdGhpcy5oYXNzXG4gICAgICAuY2FsbEFwaShcInBvc3RcIiwgXCJjbG91ZC9sb2dpblwiLCB7XG4gICAgICAgIGVtYWlsOiB0aGlzLmVtYWlsLFxuICAgICAgICBwYXNzd29yZDogdGhpcy5fcGFzc3dvcmQsXG4gICAgICB9KVxuICAgICAgLnRoZW4oXG4gICAgICAgICgpID0+IHtcbiAgICAgICAgICB0aGlzLmZpcmUoXCJoYS1yZWZyZXNoLWNsb3VkLXN0YXR1c1wiKTtcbiAgICAgICAgICB0aGlzLnNldFByb3BlcnRpZXMoe1xuICAgICAgICAgICAgZW1haWw6IFwiXCIsXG4gICAgICAgICAgICBfcGFzc3dvcmQ6IFwiXCIsXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIChlcnIpID0+IHtcbiAgICAgICAgICAvLyBEbyB0aGlzIGJlZm9yZSBzZXRQcm9wZXJ0aWVzIGJlY2F1c2UgY2hhbmdpbmcgaXQgY2xlYXJzIGVycm9ycy5cbiAgICAgICAgICB0aGlzLl9wYXNzd29yZCA9IFwiXCI7XG5cbiAgICAgICAgICBjb25zdCBlcnJDb2RlID0gZXJyICYmIGVyci5ib2R5ICYmIGVyci5ib2R5LmNvZGU7XG4gICAgICAgICAgaWYgKGVyckNvZGUgPT09IFwiUGFzc3dvcmRDaGFuZ2VSZXF1aXJlZFwiKSB7XG4gICAgICAgICAgICBhbGVydChcbiAgICAgICAgICAgICAgXCJbW2xvY2FsaXplKCd1aS5wYW5lbC5jb25maWcuY2xvdWQubG9naW4uYWxlcnRfcGFzc3dvcmRfY2hhbmdlX3JlcXVpcmVkJyldXVwiXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgdGhpcy5uYXZpZ2F0ZShcIi9jb25maWcvY2xvdWQvZm9yZ290LXBhc3N3b3JkXCIpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnN0IHByb3BzID0ge1xuICAgICAgICAgICAgX3JlcXVlc3RJblByb2dyZXNzOiBmYWxzZSxcbiAgICAgICAgICAgIF9lcnJvcjpcbiAgICAgICAgICAgICAgZXJyICYmIGVyci5ib2R5ICYmIGVyci5ib2R5Lm1lc3NhZ2VcbiAgICAgICAgICAgICAgICA/IGVyci5ib2R5Lm1lc3NhZ2VcbiAgICAgICAgICAgICAgICA6IFwiVW5rbm93biBlcnJvclwiLFxuICAgICAgICAgIH07XG5cbiAgICAgICAgICBpZiAoZXJyQ29kZSA9PT0gXCJVc2VyTm90Q29uZmlybWVkXCIpIHtcbiAgICAgICAgICAgIHByb3BzLl9lcnJvciA9XG4gICAgICAgICAgICAgIFwiW1tsb2NhbGl6ZSgndWkucGFuZWwuY29uZmlnLmNsb3VkLmxvZ2luLmFsZXJ0X2VtYWlsX2NvbmZpcm1fbmVjZXNzYXJ5JyldXVwiO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHRoaXMuc2V0UHJvcGVydGllcyhwcm9wcyk7XG4gICAgICAgICAgdGhpcy4kLmVtYWlsLmZvY3VzKCk7XG4gICAgICAgIH1cbiAgICAgICk7XG4gIH1cblxuICBfaGFuZGxlUmVnaXN0ZXIoKSB7XG4gICAgdGhpcy5mbGFzaE1lc3NhZ2UgPSBcIlwiO1xuICAgIHRoaXMubmF2aWdhdGUoXCIvY29uZmlnL2Nsb3VkL3JlZ2lzdGVyXCIpO1xuICB9XG5cbiAgX2hhbmRsZUZvcmdvdFBhc3N3b3JkKCkge1xuICAgIHRoaXMuZmxhc2hNZXNzYWdlID0gXCJcIjtcbiAgICB0aGlzLm5hdmlnYXRlKFwiL2NvbmZpZy9jbG91ZC9mb3Jnb3QtcGFzc3dvcmRcIik7XG4gIH1cblxuICBfZGlzbWlzc0ZsYXNoKCkge1xuICAgIC8vIGdpdmUgc29tZSB0aW1lIHRvIGxldCB0aGUgcmlwcGxlIGZpbmlzaC5cbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuZmxhc2hNZXNzYWdlID0gXCJcIjtcbiAgICB9LCAyMDApO1xuICB9XG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcImNsb3VkLWxvZ2luXCIsIENsb3VkTG9naW4pO1xuIiwiaW1wb3J0IHsgc2hvd1RvYXN0IH0gZnJvbSBcIi4vdG9hc3RcIjtcbmltcG9ydCB7IEhvbWVBc3Npc3RhbnQgfSBmcm9tIFwiLi4vdHlwZXNcIjtcblxuZXhwb3J0IGNvbnN0IHNob3dTYXZlU3VjY2Vzc1RvYXN0ID0gKGVsOiBIVE1MRWxlbWVudCwgaGFzczogSG9tZUFzc2lzdGFudCkgPT5cbiAgc2hvd1RvYXN0KGVsLCB7XG4gICAgbWVzc2FnZTogaGFzcyEubG9jYWxpemUoXCJ1aS5jb21tb24uc3VjY2Vzc2Z1bGx5X3NhdmVkXCIpLFxuICB9KTtcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFPQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JCQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFBQTs7QUFZQTtBQVhBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBOztBQVFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4QkE7QUFLQTtBQUlBO0FBRUE7QUFBQTtBQUFBOztBQWVBO0FBWkE7QUFLQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBOztBQVFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25DQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBR0E7QUFBQTtBQUFBOztBQW1DQTtBQWhDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQWtCQTtBQUNBOzs7QUFBQTtBQWpDQTtBQUFBO0FBQUE7QUFEQTtBQURBO0FBQ0E7QUFtQ0E7QUFBQTtBQW5DQTs7Ozs7Ozs7Ozs7Ozs7QUNEQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQUE7Ozs7Ozs7Ozs7Ozs7QUNKQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVEE7QUFDQTs7Ozs7O0FBS0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBbUJBO0FBQ0E7QUFwQkE7QUFBQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FBS0E7QUFDQTtBQUNBO0FBRkE7QUFSQTtBQWFBO0FBaEJBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUEE7QUFDQTtBQUVBOzs7OztBQUlBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUpBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNSQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7Ozs7O0FBSUE7Ozs7Ozs7Ozs7Ozs7QUF5SUE7QUFDQTtBQUNBO0FBQUE7QUFDQTs7O0FBRUE7QUFDQTtBQUdBOzs7Ozs7Ozs7Ozs7QUFHQTtBQUNBOztBQURBO0FBQ0E7QUFBQTtBQUtBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUVBO0FBQUE7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7OztBQXhMQTtBQUNBO0FBeUhBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFKQTtBQVNBOzs7O0FBdklBO0FBQ0E7QUEyTEE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDck5BO0FBUUE7QUFFQTtBQUNBO0FBSUE7QUFFQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFHQTs7QUE0S0E7QUExS0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBSUE7QUFrQkE7QUFVQTtBQXlCQTtBQU1BO0FBT0E7QUFqQ0E7QUFLQTtBQVlBO0FBc0JBO0FBRUE7Ozs7OztBQUNBOzs7O0FBRUE7O0FBQUE7Ozs7QUFFQTs7O0FBTUE7Ozs7OztBQUVBO0FBRUE7Ozs7OztBQUNBOzs7O0FBRUE7O0FBQUE7QUFDQTs7OztBQUVBOzs7Ozs7QUFFQTtBQUVBOzs7Ozs7QUFDQTs7OztBQUVBO0FBQ0E7QUFDQTs7QUFGQTtBQUdBOzs7O0FBRUE7QUFNQTtBQUNBO0FBSUE7Ozs7OztBQUVBO0FBRUE7QUFBQTtBQUNBO0FBbUNBOzs7QUFBQTtBQTdLQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUE0S0E7QUFBQTtBQS9LQTtBQXVMQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzTUE7QUFRQTtBQUNBO0FBRUE7QUFDQTtBQUlBO0FBRUE7QUFFQTtBQUVBO0FBQUE7QUFBQTs7QUE4TkE7QUExTkE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQU1BO0FBSUE7QUFtQkE7QUFVQTtBQStDQTtBQVVBO0FBT0E7QUEzREE7QUFLQTtBQVlBO0FBT0E7QUFJQTtBQUlBO0FBSUE7QUE2QkE7QUFFQTs7Ozs7OztBQUNBOzs7O0FBRUE7O0FBQUE7QUFDQTs7OztBQUVBOzs7Ozs7QUFFQTtBQUVBOzs7Ozs7QUFDQTs7OztBQUVBO0FBQ0E7QUFDQTs7QUFGQTtBQUdBOzs7O0FBRUE7QUFLQTs7Ozs7O0FBRUE7QUFFQTs7Ozs7OztBQUNBOzs7O0FBRUE7QUFDQTtBQUNBOztBQUZBO0FBR0E7QUFDQTs7OztBQUVBO0FBS0E7Ozs7OztBQUVBO0FBRUE7QUFBQTtBQUNBO0FBZ0RBOzs7QUFBQTtBQUNBO0FBQUE7O0FBUUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNVBBO0FBU0E7QUFDQTtBQUVBO0FBQ0E7QUFJQTtBQUVBO0FBS0E7QUFHQTtBQUFBO0FBQUE7O0FBdUlBO0FBbklBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFNQTtBQUNBO0FBSUE7QUFLQTtBQUlBO0FBRUE7QUFJQTtBQWdCQTtBQVVBO0FBWUE7QUEzQkE7QUFHQTtBQWdCQTtBQUtBO0FBT0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7OztBQUNBOzs7O0FBR0E7QUFDQTs7QUFBQTs7QUFFQTs7QUFBQTs7O0FBRUE7Ozs7QUFFQTtBQUNBOzs7Ozs7QUFFQTtBQUVBO0FBQUE7QUFDQTtBQXlCQTs7O0FBQUE7QUF0SUE7QUFEQTtBQUNBO0FBdUlBO0FBQUE7QUF2SUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzNCQTtBQU1BO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFHQTtBQUNBO0FBTUE7QUFFQTtBQUFBO0FBaUJBO0FBQUE7QUFFQTs7QUFDQTtBQWJBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFBQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUtBO0FBVUE7QUFNQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQUNBO0FBSUE7QUFHQTtBQUVBO0FBQ0E7QUFJQTtBQUlBO0FBSUE7QUFJQTtBQUlBO0FBRUE7QUFRQTtBQW9CQTtBQXJCQTtBQUNBO0FBS0E7QUFNQTtBQUlBO0FBU0E7QUFFQTtBQUFBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7QUFDQTtBQUNBOzs7O0FBSUE7O0FBQUE7Ozs7QUFFQTtBQUNBOztBQUVBOzs7QUFHQTtBQUtBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQUNBO0FBRUE7Ozs7OztBQUNBOzs7O0FBRUE7O0FBQUE7Ozs7QUFFQTtBQUtBOztBQUVBOzs7QUFJQTtBQUNBOzs7OztBQUNBO0FBRUE7Ozs7OztBQUNBO0FBQUE7QUFDQTs7QUFBQTs7O0FBQ0E7OztBQUZBOzs7OztBQUdBO0FBRUE7QUFDQTtBQXdCQTtBQUNBO0FBQUE7O0FBUUE7Ozs7Ozs7Ozs7Ozs7O0FDM1BBO0FBQUE7QUFBQTtBQUFBO0FBT0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDakJBO0FBQUE7QUFBQTtBQUFBO0FBVUE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwQkE7QUFDQTtBQUNBO0FBSUE7QUFFQTtBQUtBO0FBQ0E7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7O0FBaUVBO0FBL0RBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBMUhBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQWlEQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUF2REE7QUFEQTtBQUNBO0FBNEhBO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN0lBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FBS0E7Ozs7Ozs7Ozs7Ozs7QUEwS0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQURBO0FBR0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTs7O0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFGQTtBQU1BO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFDQTtBQU9BO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFFQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFqUkE7QUFDQTtBQXdJQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBbkJBO0FBcUJBOzs7QUFFQTtBQUNBO0FBQ0E7Ozs7QUF4S0E7QUFDQTtBQXNSQTs7Ozs7Ozs7Ozs7O0FDL1NBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==