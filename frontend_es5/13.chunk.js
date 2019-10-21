(self["webpackJsonp"] = self["webpackJsonp"] || []).push([[13],{

/***/ "./node_modules/@polymer/paper-item/paper-item-body.js":
/*!*************************************************************!*\
  !*** ./node_modules/@polymer/paper-item/paper-item-body.js ***!
  \*************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-legacy.js */ "./node_modules/@polymer/polymer/polymer-legacy.js");
/* harmony import */ var _polymer_iron_flex_layout_iron_flex_layout_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/iron-flex-layout/iron-flex-layout.js */ "./node_modules/@polymer/iron-flex-layout/iron-flex-layout.js");
/* harmony import */ var _polymer_paper_styles_default_theme_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-styles/default-theme.js */ "./node_modules/@polymer/paper-styles/default-theme.js");
/* harmony import */ var _polymer_paper_styles_typography_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/paper-styles/typography.js */ "./node_modules/@polymer/paper-styles/typography.js");
/* harmony import */ var _polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/polymer/lib/legacy/polymer-fn.js */ "./node_modules/@polymer/polymer/lib/legacy/polymer-fn.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag.js */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    <style>\n      :host {\n        overflow: hidden; /* needed for text-overflow: ellipsis to work on ff */\n        @apply --layout-vertical;\n        @apply --layout-center-justified;\n        @apply --layout-flex;\n      }\n\n      :host([two-line]) {\n        min-height: var(--paper-item-body-two-line-min-height, 72px);\n      }\n\n      :host([three-line]) {\n        min-height: var(--paper-item-body-three-line-min-height, 88px);\n      }\n\n      :host > ::slotted(*) {\n        overflow: hidden;\n        text-overflow: ellipsis;\n        white-space: nowrap;\n      }\n\n      :host > ::slotted([secondary]) {\n        @apply --paper-font-body1;\n\n        color: var(--paper-item-body-secondary-color, var(--secondary-text-color));\n\n        @apply --paper-item-body-secondary;\n      }\n    </style>\n\n    <slot></slot>\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/






/*
Use `<paper-item-body>` in a `<paper-item>` or `<paper-icon-item>` to make two-
or three- line items. It is a flex item that is a vertical flexbox.

    <paper-item>
      <paper-item-body two-line>
        <div>Show your status</div>
        <div secondary>Your status is visible to everyone</div>
      </paper-item-body>
    </paper-item>

The child elements with the `secondary` attribute is given secondary text
styling.

### Styling

The following custom properties and mixins are available for styling:

Custom property | Description | Default
----------------|-------------|----------
`--paper-item-body-two-line-min-height` | Minimum height of a two-line item | `72px`
`--paper-item-body-three-line-min-height` | Minimum height of a three-line item | `88px`
`--paper-item-body-secondary-color` | Foreground color for the `secondary` area | `--secondary-text-color`
`--paper-item-body-secondary` | Mixin applied to the `secondary` area | `{}`

*/

Object(_polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_4__["Polymer"])({
  _template: Object(_polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_5__["html"])(_templateObject()),
  is: 'paper-item-body'
});

/***/ }),

/***/ "./node_modules/@polymer/paper-spinner/paper-spinner.js":
/*!**************************************************************!*\
  !*** ./node_modules/@polymer/paper-spinner/paper-spinner.js ***!
  \**************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-legacy.js */ "./node_modules/@polymer/polymer/polymer-legacy.js");
/* harmony import */ var _polymer_paper_styles_color_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-styles/color.js */ "./src/util/empty.js");
/* harmony import */ var _polymer_paper_styles_color_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_polymer_paper_styles_color_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _paper_spinner_styles_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./paper-spinner-styles.js */ "./node_modules/@polymer/paper-spinner/paper-spinner-styles.js");
/* harmony import */ var _polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/polymer/lib/legacy/polymer-fn.js */ "./node_modules/@polymer/polymer/lib/legacy/polymer-fn.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag.js */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _paper_spinner_behavior_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./paper-spinner-behavior.js */ "./node_modules/@polymer/paper-spinner/paper-spinner-behavior.js");
function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  <style include=\"paper-spinner-styles\"></style>\n\n  <div id=\"spinnerContainer\" class-name=\"[[__computeContainerClasses(active, __coolingDown)]]\" on-animationend=\"__reset\" on-webkit-animation-end=\"__reset\">\n    <div class=\"spinner-layer layer-1\">\n      <div class=\"circle-clipper left\">\n        <div class=\"circle\"></div>\n      </div>\n      <div class=\"circle-clipper right\">\n        <div class=\"circle\"></div>\n      </div>\n    </div>\n\n    <div class=\"spinner-layer layer-2\">\n      <div class=\"circle-clipper left\">\n        <div class=\"circle\"></div>\n      </div>\n      <div class=\"circle-clipper right\">\n        <div class=\"circle\"></div>\n      </div>\n    </div>\n\n    <div class=\"spinner-layer layer-3\">\n      <div class=\"circle-clipper left\">\n        <div class=\"circle\"></div>\n      </div>\n      <div class=\"circle-clipper right\">\n        <div class=\"circle\"></div>\n      </div>\n    </div>\n\n    <div class=\"spinner-layer layer-4\">\n      <div class=\"circle-clipper left\">\n        <div class=\"circle\"></div>\n      </div>\n      <div class=\"circle-clipper right\">\n        <div class=\"circle\"></div>\n      </div>\n    </div>\n  </div>\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/






var template = Object(_polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_4__["html"])(_templateObject());
template.setAttribute('strip-whitespace', '');
/**
Material design: [Progress &
activity](https://www.google.com/design/spec/components/progress-activity.html)

Element providing a multiple color material design circular spinner.

    <paper-spinner active></paper-spinner>

The default spinner cycles between four layers of colors; by default they are
blue, red, yellow and green. It can be customized to cycle between four
different colors. Use <paper-spinner-lite> for single color spinners.

### Accessibility

Alt attribute should be set to provide adequate context for accessibility. If
not provided, it defaults to 'loading'. Empty alt can be provided to mark the
element as decorative if alternative content is provided in another form (e.g. a
text block following the spinner).

    <paper-spinner alt="Loading contacts list" active></paper-spinner>

### Styling

The following custom properties and mixins are available for styling:

Custom property | Description | Default
----------------|-------------|----------
`--paper-spinner-layer-1-color` | Color of the first spinner rotation | `--google-blue-500`
`--paper-spinner-layer-2-color` | Color of the second spinner rotation | `--google-red-500`
`--paper-spinner-layer-3-color` | Color of the third spinner rotation | `--google-yellow-500`
`--paper-spinner-layer-4-color` | Color of the fourth spinner rotation | `--google-green-500`
`--paper-spinner-stroke-width` | The width of the spinner stroke | 3px

@group Paper Elements
@element paper-spinner
@hero hero.svg
@demo demo/index.html
*/

Object(_polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_3__["Polymer"])({
  _template: template,
  is: 'paper-spinner',
  behaviors: [_paper_spinner_behavior_js__WEBPACK_IMPORTED_MODULE_5__["PaperSpinnerBehavior"]]
});

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

/***/ "./src/common/datetime/format_time.ts":
/*!********************************************!*\
  !*** ./src/common/datetime/format_time.ts ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var fecha__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fecha */ "./node_modules/fecha/src/fecha.js");

// Check for support of native locale string options
function toLocaleTimeStringSupportsOptions() {
    try {
        new Date().toLocaleTimeString("i");
    }
    catch (e) {
        return e.name === "RangeError";
    }
    return false;
}
/* harmony default export */ __webpack_exports__["default"] = (toLocaleTimeStringSupportsOptions()
    ? function (dateObj, locales) {
        return dateObj.toLocaleTimeString(locales, {
            hour: "numeric",
            minute: "2-digit",
        });
    }
    : function (dateObj) { return fecha__WEBPACK_IMPORTED_MODULE_0__["default"].format(dateObj, "shortTime"); });


/***/ }),

/***/ "./src/components/buttons/ha-call-service-button.js":
/*!**********************************************************!*\
  !*** ./src/components/buttons/ha-call-service-button.js ***!
  \**********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _ha_progress_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ha-progress-button */ "./src/components/buttons/ha-progress-button.js");
/* harmony import */ var _mixins_events_mixin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../mixins/events-mixin */ "./src/mixins/events-mixin.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      <ha-progress-button\n        id=\"progress\"\n        progress=\"[[progress]]\"\n        on-click=\"buttonTapped\"\n        ><slot></slot\n      ></ha-progress-button>\n    "]);

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
 * @appliesMixin EventsMixin
 */

var HaCallServiceButton =
/*#__PURE__*/
function (_EventsMixin) {
  _inherits(HaCallServiceButton, _EventsMixin);

  function HaCallServiceButton() {
    _classCallCheck(this, HaCallServiceButton);

    return _possibleConstructorReturn(this, _getPrototypeOf(HaCallServiceButton).apply(this, arguments));
  }

  _createClass(HaCallServiceButton, [{
    key: "buttonTapped",
    value: function buttonTapped() {
      if (this.confirmation && !window.confirm(this.confirmation)) {
        return;
      }

      this.progress = true;
      var el = this;
      var eventData = {
        domain: this.domain,
        service: this.service,
        serviceData: this.serviceData
      };
      this.hass.callService(this.domain, this.service, this.serviceData).then(function () {
        el.progress = false;
        el.$.progress.actionSuccess();
        eventData.success = true;
      }, function () {
        el.progress = false;
        el.$.progress.actionError();
        eventData.success = false;
      }).then(function () {
        el.fire("hass-service-called", eventData);
      });
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
          type: Object
        },
        progress: {
          type: Boolean,
          value: false
        },
        domain: {
          type: String
        },
        service: {
          type: String
        },
        serviceData: {
          type: Object,
          value: {}
        },
        confirmation: {
          type: String
        }
      };
    }
  }]);

  return HaCallServiceButton;
}(Object(_mixins_events_mixin__WEBPACK_IMPORTED_MODULE_3__["EventsMixin"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_1__["PolymerElement"]));

customElements.define("ha-call-service-button", HaCallServiceButton);

/***/ }),

/***/ "./src/data/error_log.ts":
/*!*******************************!*\
  !*** ./src/data/error_log.ts ***!
  \*******************************/
/*! exports provided: fetchErrorLog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchErrorLog", function() { return fetchErrorLog; });
var fetchErrorLog = function (hass) {
    return hass.callApi("GET", "error_log");
};


/***/ }),

/***/ "./src/data/system_log.ts":
/*!********************************!*\
  !*** ./src/data/system_log.ts ***!
  \********************************/
/*! exports provided: fetchSystemLog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchSystemLog", function() { return fetchSystemLog; });
var fetchSystemLog = function (hass) {
    return hass.callApi("GET", "error/all");
};


/***/ }),

/***/ "./src/panels/developer-tools/logs/developer-tools-logs.ts":
/*!*****************************************************************!*\
  !*** ./src/panels/developer-tools/logs/developer-tools-logs.ts ***!
  \*****************************************************************/
/*! exports provided: HaPanelDevLogs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HaPanelDevLogs", function() { return HaPanelDevLogs; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _resources_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../resources/styles */ "./src/resources/styles.ts");
/* harmony import */ var _logs_system_log_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../logs/system-log-card */ "./src/panels/developer-tools/logs/system-log-card.ts");
/* harmony import */ var _logs_error_log_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../logs/error-log-card */ "./src/panels/developer-tools/logs/error-log-card.ts");





var HaPanelDevLogs = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(HaPanelDevLogs, _super);
    function HaPanelDevLogs() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HaPanelDevLogs.prototype.connectedCallback = function () {
        _super.prototype.connectedCallback.call(this);
        if (this.systemLog && this.systemLog.loaded) {
            this.systemLog.fetchData();
        }
    };
    HaPanelDevLogs.prototype.render = function () {
        return Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_1 || (templateObject_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      <div class=\"content\">\n        <system-log-card .hass=", "></system-log-card>\n        <error-log-card .hass=", "></error-log-card>\n      </div>\n    "], ["\n      <div class=\"content\">\n        <system-log-card .hass=", "></system-log-card>\n        <error-log-card .hass=", "></error-log-card>\n      </div>\n    "])), this.hass, this.hass);
    };
    Object.defineProperty(HaPanelDevLogs, "styles", {
        get: function () {
            return [
                _resources_styles__WEBPACK_IMPORTED_MODULE_2__["haStyle"],
                Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["css"])(templateObject_2 || (templateObject_2 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n        :host {\n          -ms-user-select: initial;\n          -webkit-user-select: initial;\n          -moz-user-select: initial;\n        }\n\n        .content {\n          direction: ltr;\n        }\n      "], ["\n        :host {\n          -ms-user-select: initial;\n          -webkit-user-select: initial;\n          -moz-user-select: initial;\n        }\n\n        .content {\n          direction: ltr;\n        }\n      "]))),
            ];
        },
        enumerable: true,
        configurable: true
    });
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
    ], HaPanelDevLogs.prototype, "hass", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["query"])("system-log-card")
    ], HaPanelDevLogs.prototype, "systemLog", void 0);
    HaPanelDevLogs = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["customElement"])("developer-tools-logs")
    ], HaPanelDevLogs);
    return HaPanelDevLogs;
}(lit_element__WEBPACK_IMPORTED_MODULE_1__["LitElement"]));

var templateObject_1, templateObject_2;


/***/ }),

/***/ "./src/panels/developer-tools/logs/error-log-card.ts":
/*!***********************************************************!*\
  !*** ./src/panels/developer-tools/logs/error-log-card.ts ***!
  \***********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _polymer_paper_icon_button_paper_icon_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-icon-button/paper-icon-button */ "./node_modules/@polymer/paper-icon-button/paper-icon-button.js");
/* harmony import */ var _material_mwc_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material/mwc-button */ "./node_modules/@material/mwc-button/mwc-button.js");
/* harmony import */ var _data_error_log__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../data/error_log */ "./src/data/error_log.ts");





var ErrorLogCard = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(ErrorLogCard, _super);
    function ErrorLogCard() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(ErrorLogCard, "properties", {
        get: function () {
            return {
                hass: {},
                _errorLog: {},
            };
        },
        enumerable: true,
        configurable: true
    });
    ErrorLogCard.prototype.render = function () {
        return Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_3 || (templateObject_3 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      <p class=\"error-log-intro\">\n        ", "\n      </p>\n      <div class=\"error-log\">", "</div>\n    "], ["\n      <p class=\"error-log-intro\">\n        ",
            "\n      </p>\n      <div class=\"error-log\">", "</div>\n    "])), this._errorLog
            ? Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_1 || (templateObject_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n              <paper-icon-button\n                icon=\"hass:refresh\"\n                @click=", "\n              ></paper-icon-button>\n            "], ["\n              <paper-icon-button\n                icon=\"hass:refresh\"\n                @click=", "\n              ></paper-icon-button>\n            "])), this._refreshErrorLog) : Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_2 || (templateObject_2 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n              <mwc-button raised @click=", ">\n                Load Full \u7267\u517B\u72AC Log\n              </mwc-button>\n            "], ["\n              <mwc-button raised @click=", ">\n                Load Full \u7267\u517B\u72AC Log\n              </mwc-button>\n            "])), this._refreshErrorLog), this._errorLog);
    };
    Object.defineProperty(ErrorLogCard, "styles", {
        get: function () {
            return Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["css"])(templateObject_4 || (templateObject_4 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      .error-log-intro {\n        text-align: center;\n        margin: 16px;\n      }\n\n      paper-icon-button {\n        float: right;\n      }\n\n      .error-log {\n        @apply --paper-font-code)\n          clear: both;\n        white-space: pre-wrap;\n        margin: 16px;\n      }\n    "], ["\n      .error-log-intro {\n        text-align: center;\n        margin: 16px;\n      }\n\n      paper-icon-button {\n        float: right;\n      }\n\n      .error-log {\n        @apply --paper-font-code)\n          clear: both;\n        white-space: pre-wrap;\n        margin: 16px;\n      }\n    "])));
        },
        enumerable: true,
        configurable: true
    });
    ErrorLogCard.prototype._refreshErrorLog = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var log;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this._errorLog = "Loading error log…";
                        return [4 /*yield*/, Object(_data_error_log__WEBPACK_IMPORTED_MODULE_4__["fetchErrorLog"])(this.hass)];
                    case 1:
                        log = _a.sent();
                        this._errorLog = log || "No errors have been reported.";
                        return [2 /*return*/];
                }
            });
        });
    };
    return ErrorLogCard;
}(lit_element__WEBPACK_IMPORTED_MODULE_1__["LitElement"]));
customElements.define("error-log-card", ErrorLogCard);
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;


/***/ }),

/***/ "./src/panels/developer-tools/logs/show-dialog-system-log-detail.ts":
/*!**************************************************************************!*\
  !*** ./src/panels/developer-tools/logs/show-dialog-system-log-detail.ts ***!
  \**************************************************************************/
/*! exports provided: showSystemLogDetailDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showSystemLogDetailDialog", function() { return showSystemLogDetailDialog; });
/* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../common/dom/fire_event */ "./src/common/dom/fire_event.ts");

var registeredDialog = false;
var dialogShowEvent = "show-dialog-system-log-detail";
var dialogTag = "dialog-system-log-detail";
var registerDialog = function (element) {
    return Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_0__["fireEvent"])(element, "register-dialog", {
        dialogShowEvent: dialogShowEvent,
        dialogTag: dialogTag,
        dialogImport: function () {
            return Promise.all(/*! import() | system-log-detail-dialog */[__webpack_require__.e("vendors~area-registry-detail-dialog~cloud-webhook-manage-dialog~config-entry-system-options~device-r~780fc7fc"), __webpack_require__.e("vendors~area-registry-detail-dialog~cloud-webhook-manage-dialog~config-entry-system-options~device-r~8bd3e4d4"), __webpack_require__.e("vendors~system-log-detail-dialog"), __webpack_require__.e("system-log-detail-dialog")]).then(__webpack_require__.bind(null, /*! ./dialog-system-log-detail */ "./src/panels/developer-tools/logs/dialog-system-log-detail.ts"));
        },
    });
};
var showSystemLogDetailDialog = function (element, systemLogDetailParams) {
    if (!registeredDialog) {
        registeredDialog = true;
        registerDialog(element);
    }
    Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_0__["fireEvent"])(element, dialogShowEvent, systemLogDetailParams);
};


/***/ }),

/***/ "./src/panels/developer-tools/logs/system-log-card.ts":
/*!************************************************************!*\
  !*** ./src/panels/developer-tools/logs/system-log-card.ts ***!
  \************************************************************/
/*! exports provided: SystemLogCard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SystemLogCard", function() { return SystemLogCard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _polymer_paper_icon_button_paper_icon_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-icon-button/paper-icon-button */ "./node_modules/@polymer/paper-icon-button/paper-icon-button.js");
/* harmony import */ var _polymer_paper_item_paper_item_body__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/paper-item/paper-item-body */ "./node_modules/@polymer/paper-item/paper-item-body.js");
/* harmony import */ var _polymer_paper_item_paper_item__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/paper-item/paper-item */ "./node_modules/@polymer/paper-item/paper-item.js");
/* harmony import */ var _polymer_paper_spinner_paper_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @polymer/paper-spinner/paper-spinner */ "./node_modules/@polymer/paper-spinner/paper-spinner.js");
/* harmony import */ var _components_ha_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/ha-card */ "./src/components/ha-card.ts");
/* harmony import */ var _components_buttons_ha_call_service_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/buttons/ha-call-service-button */ "./src/components/buttons/ha-call-service-button.js");
/* harmony import */ var _components_buttons_ha_progress_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../components/buttons/ha-progress-button */ "./src/components/buttons/ha-progress-button.js");
/* harmony import */ var _data_system_log__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../data/system_log */ "./src/data/system_log.ts");
/* harmony import */ var _common_datetime_format_date_time__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../common/datetime/format_date_time */ "./src/common/datetime/format_date_time.ts");
/* harmony import */ var _common_datetime_format_time__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../common/datetime/format_time */ "./src/common/datetime/format_time.ts");
/* harmony import */ var _show_dialog_system_log_detail__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./show-dialog-system-log-detail */ "./src/panels/developer-tools/logs/show-dialog-system-log-detail.ts");













var formatLogTime = function (date, language) {
    var today = new Date().setHours(0, 0, 0, 0);
    var dateTime = new Date(date * 1000);
    var dateTimeDay = new Date(date * 1000).setHours(0, 0, 0, 0);
    return dateTimeDay < today
        ? Object(_common_datetime_format_date_time__WEBPACK_IMPORTED_MODULE_10__["default"])(dateTime, language)
        : Object(_common_datetime_format_time__WEBPACK_IMPORTED_MODULE_11__["default"])(dateTime, language);
};
var SystemLogCard = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(SystemLogCard, _super);
    function SystemLogCard() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.loaded = false;
        return _this;
    }
    Object.defineProperty(SystemLogCard, "properties", {
        get: function () {
            return {
                hass: {},
                _items: {},
            };
        },
        enumerable: true,
        configurable: true
    });
    SystemLogCard.prototype.fetchData = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var _a;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this._items = undefined;
                        _a = this;
                        return [4 /*yield*/, Object(_data_system_log__WEBPACK_IMPORTED_MODULE_9__["fetchSystemLog"])(this.hass)];
                    case 1:
                        _a._items = _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    SystemLogCard.prototype.render = function () {
        var _this = this;
        return Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_7 || (templateObject_7 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      <div class=\"system-log-intro\">\n        <ha-card>\n          ", "\n        </ha-card>\n      </div>\n    "], ["\n      <div class=\"system-log-intro\">\n        <ha-card>\n          ",
            "\n        </ha-card>\n      </div>\n    "])), this._items === undefined
            ? Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_1 || (templateObject_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n                <div class=\"loading-container\">\n                  <paper-spinner active></paper-spinner>\n                </div>\n              "], ["\n                <div class=\"loading-container\">\n                  <paper-spinner active></paper-spinner>\n                </div>\n              "]))) : Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_6 || (templateObject_6 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n                ", "\n\n                <div class=\"card-actions\">\n                  <ha-call-service-button\n                    .hass=", "\n                    domain=\"system_log\"\n                    service=\"clear\"\n                    >Clear</ha-call-service-button\n                  >\n                  <ha-progress-button @click=", "\n                    >Refresh</ha-progress-button\n                  >\n                </div>\n              "], ["\n                ",
            "\n\n                <div class=\"card-actions\">\n                  <ha-call-service-button\n                    .hass=", "\n                    domain=\"system_log\"\n                    service=\"clear\"\n                    >Clear</ha-call-service-button\n                  >\n                  <ha-progress-button @click=", "\n                    >Refresh</ha-progress-button\n                  >\n                </div>\n              "])), this._items.length === 0
            ? Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_2 || (templateObject_2 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n                      <div class=\"card-content\">There are no new issues!</div>\n                    "], ["\n                      <div class=\"card-content\">There are no new issues!</div>\n                    "]))) : this._items.map(function (item) { return Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_5 || (templateObject_5 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n                        <paper-item @click=", " .logItem=", ">\n                          <paper-item-body two-line>\n                            <div class=\"row\">\n                              ", "\n                            </div>\n                            <div secondary>\n                              ", "\n                              ", " (", ")\n                              ", "\n                            </div>\n                          </paper-item-body>\n                        </paper-item>\n                      "], ["\n                        <paper-item @click=", " .logItem=", ">\n                          <paper-item-body two-line>\n                            <div class=\"row\">\n                              ", "\n                            </div>\n                            <div secondary>\n                              ",
            "\n                              ", " (", ")\n                              ",
            "\n                            </div>\n                          </paper-item-body>\n                        </paper-item>\n                      "])), _this._openLog, item, item.message, formatLogTime(item.timestamp, _this.hass.language), item.source, item.level, item.count > 1
            ? Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_3 || (templateObject_3 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n                                    - message first occured at\n                                    ", "\n                                    and shows up ", " times\n                                  "], ["\n                                    - message first occured at\n                                    ",
                "\n                                    and shows up ", " times\n                                  "])), formatLogTime(item.first_occured, _this.hass.language), item.count) : Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_4 || (templateObject_4 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])([""], [""])))); }), this.hass, this.fetchData));
    };
    SystemLogCard.prototype.firstUpdated = function (changedProps) {
        var _this = this;
        _super.prototype.firstUpdated.call(this, changedProps);
        this.fetchData();
        this.loaded = true;
        this.addEventListener("hass-service-called", function (ev) {
            return _this.serviceCalled(ev);
        });
    };
    SystemLogCard.prototype.serviceCalled = function (ev) {
        // Check if this is for us
        if (ev.detail.success && ev.detail.domain === "system_log") {
            // Do the right thing depending on service
            if (ev.detail.service === "clear") {
                this._items = [];
            }
        }
    };
    SystemLogCard.prototype._openLog = function (ev) {
        var item = ev.currentTarget.logItem;
        Object(_show_dialog_system_log_detail__WEBPACK_IMPORTED_MODULE_12__["showSystemLogDetailDialog"])(this, { item: item });
    };
    Object.defineProperty(SystemLogCard, "styles", {
        get: function () {
            return Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["css"])(templateObject_8 || (templateObject_8 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      ha-card {\n        padding-top: 16px;\n      }\n\n      paper-item {\n        cursor: pointer;\n      }\n\n      .system-log-intro {\n        margin: 16px;\n      }\n\n      .loading-container {\n        height: 100px;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n      }\n    "], ["\n      ha-card {\n        padding-top: 16px;\n      }\n\n      paper-item {\n        cursor: pointer;\n      }\n\n      .system-log-intro {\n        margin: 16px;\n      }\n\n      .loading-container {\n        height: 100px;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n      }\n    "])));
        },
        enumerable: true,
        configurable: true
    });
    SystemLogCard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["customElement"])("system-log-card")
    ], SystemLogCard);
    return SystemLogCard;
}(lit_element__WEBPACK_IMPORTED_MODULE_1__["LitElement"]));

var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8;


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTMuY2h1bmsuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHBvbHltZXIvcGFwZXItaXRlbS9wYXBlci1pdGVtLWJvZHkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Bwb2x5bWVyL3BhcGVyLXNwaW5uZXIvcGFwZXItc3Bpbm5lci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL2RhdGV0aW1lL2Zvcm1hdF9kYXRlX3RpbWUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9kYXRldGltZS9mb3JtYXRfdGltZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9idXR0b25zL2hhLWNhbGwtc2VydmljZS1idXR0b24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RhdGEvZXJyb3JfbG9nLnRzIiwid2VicGFjazovLy8uL3NyYy9kYXRhL3N5c3RlbV9sb2cudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhbmVscy9kZXZlbG9wZXItdG9vbHMvbG9ncy9kZXZlbG9wZXItdG9vbHMtbG9ncy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL2RldmVsb3Blci10b29scy9sb2dzL2Vycm9yLWxvZy1jYXJkLnRzIiwid2VicGFjazovLy8uL3NyYy9wYW5lbHMvZGV2ZWxvcGVyLXRvb2xzL2xvZ3Mvc2hvdy1kaWFsb2ctc3lzdGVtLWxvZy1kZXRhaWwudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhbmVscy9kZXZlbG9wZXItdG9vbHMvbG9ncy9zeXN0ZW0tbG9nLWNhcmQudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG5AbGljZW5zZVxuQ29weXJpZ2h0IChjKSAyMDE1IFRoZSBQb2x5bWVyIFByb2plY3QgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cblRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdFxuaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0xJQ0VOU0UudHh0IFRoZSBjb21wbGV0ZSBzZXQgb2YgYXV0aG9ycyBtYXkgYmUgZm91bmQgYXRcbmh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9BVVRIT1JTLnR4dCBUaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmVcbmZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0IENvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzXG5wYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzbyBzdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50XG5mb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vUEFURU5UUy50eHRcbiovXG5pbXBvcnQgJ0Bwb2x5bWVyL3BvbHltZXIvcG9seW1lci1sZWdhY3kuanMnO1xuXG5pbXBvcnQgJ0Bwb2x5bWVyL2lyb24tZmxleC1sYXlvdXQvaXJvbi1mbGV4LWxheW91dC5qcyc7XG5pbXBvcnQgJ0Bwb2x5bWVyL3BhcGVyLXN0eWxlcy9kZWZhdWx0LXRoZW1lLmpzJztcbmltcG9ydCAnQHBvbHltZXIvcGFwZXItc3R5bGVzL3R5cG9ncmFwaHkuanMnO1xuaW1wb3J0IHtQb2x5bWVyfSBmcm9tICdAcG9seW1lci9wb2x5bWVyL2xpYi9sZWdhY3kvcG9seW1lci1mbi5qcyc7XG5pbXBvcnQge2h0bWx9IGZyb20gJ0Bwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2h0bWwtdGFnLmpzJztcblxuLypcblVzZSBgPHBhcGVyLWl0ZW0tYm9keT5gIGluIGEgYDxwYXBlci1pdGVtPmAgb3IgYDxwYXBlci1pY29uLWl0ZW0+YCB0byBtYWtlIHR3by1cbm9yIHRocmVlLSBsaW5lIGl0ZW1zLiBJdCBpcyBhIGZsZXggaXRlbSB0aGF0IGlzIGEgdmVydGljYWwgZmxleGJveC5cblxuICAgIDxwYXBlci1pdGVtPlxuICAgICAgPHBhcGVyLWl0ZW0tYm9keSB0d28tbGluZT5cbiAgICAgICAgPGRpdj5TaG93IHlvdXIgc3RhdHVzPC9kaXY+XG4gICAgICAgIDxkaXYgc2Vjb25kYXJ5PllvdXIgc3RhdHVzIGlzIHZpc2libGUgdG8gZXZlcnlvbmU8L2Rpdj5cbiAgICAgIDwvcGFwZXItaXRlbS1ib2R5PlxuICAgIDwvcGFwZXItaXRlbT5cblxuVGhlIGNoaWxkIGVsZW1lbnRzIHdpdGggdGhlIGBzZWNvbmRhcnlgIGF0dHJpYnV0ZSBpcyBnaXZlbiBzZWNvbmRhcnkgdGV4dFxuc3R5bGluZy5cblxuIyMjIFN0eWxpbmdcblxuVGhlIGZvbGxvd2luZyBjdXN0b20gcHJvcGVydGllcyBhbmQgbWl4aW5zIGFyZSBhdmFpbGFibGUgZm9yIHN0eWxpbmc6XG5cbkN1c3RvbSBwcm9wZXJ0eSB8IERlc2NyaXB0aW9uIHwgRGVmYXVsdFxuLS0tLS0tLS0tLS0tLS0tLXwtLS0tLS0tLS0tLS0tfC0tLS0tLS0tLS1cbmAtLXBhcGVyLWl0ZW0tYm9keS10d28tbGluZS1taW4taGVpZ2h0YCB8IE1pbmltdW0gaGVpZ2h0IG9mIGEgdHdvLWxpbmUgaXRlbSB8IGA3MnB4YFxuYC0tcGFwZXItaXRlbS1ib2R5LXRocmVlLWxpbmUtbWluLWhlaWdodGAgfCBNaW5pbXVtIGhlaWdodCBvZiBhIHRocmVlLWxpbmUgaXRlbSB8IGA4OHB4YFxuYC0tcGFwZXItaXRlbS1ib2R5LXNlY29uZGFyeS1jb2xvcmAgfCBGb3JlZ3JvdW5kIGNvbG9yIGZvciB0aGUgYHNlY29uZGFyeWAgYXJlYSB8IGAtLXNlY29uZGFyeS10ZXh0LWNvbG9yYFxuYC0tcGFwZXItaXRlbS1ib2R5LXNlY29uZGFyeWAgfCBNaXhpbiBhcHBsaWVkIHRvIHRoZSBgc2Vjb25kYXJ5YCBhcmVhIHwgYHt9YFxuXG4qL1xuUG9seW1lcih7XG4gIF90ZW1wbGF0ZTogaHRtbGBcbiAgICA8c3R5bGU+XG4gICAgICA6aG9zdCB7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47IC8qIG5lZWRlZCBmb3IgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXMgdG8gd29yayBvbiBmZiAqL1xuICAgICAgICBAYXBwbHkgLS1sYXlvdXQtdmVydGljYWw7XG4gICAgICAgIEBhcHBseSAtLWxheW91dC1jZW50ZXItanVzdGlmaWVkO1xuICAgICAgICBAYXBwbHkgLS1sYXlvdXQtZmxleDtcbiAgICAgIH1cblxuICAgICAgOmhvc3QoW3R3by1saW5lXSkge1xuICAgICAgICBtaW4taGVpZ2h0OiB2YXIoLS1wYXBlci1pdGVtLWJvZHktdHdvLWxpbmUtbWluLWhlaWdodCwgNzJweCk7XG4gICAgICB9XG5cbiAgICAgIDpob3N0KFt0aHJlZS1saW5lXSkge1xuICAgICAgICBtaW4taGVpZ2h0OiB2YXIoLS1wYXBlci1pdGVtLWJvZHktdGhyZWUtbGluZS1taW4taGVpZ2h0LCA4OHB4KTtcbiAgICAgIH1cblxuICAgICAgOmhvc3QgPiA6OnNsb3R0ZWQoKikge1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgIH1cblxuICAgICAgOmhvc3QgPiA6OnNsb3R0ZWQoW3NlY29uZGFyeV0pIHtcbiAgICAgICAgQGFwcGx5IC0tcGFwZXItZm9udC1ib2R5MTtcblxuICAgICAgICBjb2xvcjogdmFyKC0tcGFwZXItaXRlbS1ib2R5LXNlY29uZGFyeS1jb2xvciwgdmFyKC0tc2Vjb25kYXJ5LXRleHQtY29sb3IpKTtcblxuICAgICAgICBAYXBwbHkgLS1wYXBlci1pdGVtLWJvZHktc2Vjb25kYXJ5O1xuICAgICAgfVxuICAgIDwvc3R5bGU+XG5cbiAgICA8c2xvdD48L3Nsb3Q+XG5gLFxuXG4gIGlzOiAncGFwZXItaXRlbS1ib2R5J1xufSk7XG4iLCIvKipcbkBsaWNlbnNlXG5Db3B5cmlnaHQgKGMpIDIwMTUgVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuVGhpcyBjb2RlIG1heSBvbmx5IGJlIHVzZWQgdW5kZXIgdGhlIEJTRCBzdHlsZSBsaWNlbnNlIGZvdW5kIGF0XG5odHRwOi8vcG9seW1lci5naXRodWIuaW8vTElDRU5TRS50eHQgVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdFxuaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0IFRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZVxuZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0NPTlRSSUJVVE9SUy50eHQgQ29kZSBkaXN0cmlidXRlZCBieSBHb29nbGUgYXNcbnBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvIHN1YmplY3QgdG8gYW4gYWRkaXRpb25hbCBJUCByaWdodHMgZ3JhbnRcbmZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9QQVRFTlRTLnR4dFxuKi9cbmltcG9ydCAnQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWxlZ2FjeS5qcyc7XG5pbXBvcnQgJ0Bwb2x5bWVyL3BhcGVyLXN0eWxlcy9jb2xvci5qcyc7XG5pbXBvcnQgJy4vcGFwZXItc3Bpbm5lci1zdHlsZXMuanMnO1xuXG5pbXBvcnQge1BvbHltZXJ9IGZyb20gJ0Bwb2x5bWVyL3BvbHltZXIvbGliL2xlZ2FjeS9wb2x5bWVyLWZuLmpzJztcbmltcG9ydCB7aHRtbH0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvaHRtbC10YWcuanMnO1xuXG5pbXBvcnQge1BhcGVyU3Bpbm5lckJlaGF2aW9yfSBmcm9tICcuL3BhcGVyLXNwaW5uZXItYmVoYXZpb3IuanMnO1xuXG5jb25zdCB0ZW1wbGF0ZSA9IGh0bWxgXG4gIDxzdHlsZSBpbmNsdWRlPVwicGFwZXItc3Bpbm5lci1zdHlsZXNcIj48L3N0eWxlPlxuXG4gIDxkaXYgaWQ9XCJzcGlubmVyQ29udGFpbmVyXCIgY2xhc3MtbmFtZT1cIltbX19jb21wdXRlQ29udGFpbmVyQ2xhc3NlcyhhY3RpdmUsIF9fY29vbGluZ0Rvd24pXV1cIiBvbi1hbmltYXRpb25lbmQ9XCJfX3Jlc2V0XCIgb24td2Via2l0LWFuaW1hdGlvbi1lbmQ9XCJfX3Jlc2V0XCI+XG4gICAgPGRpdiBjbGFzcz1cInNwaW5uZXItbGF5ZXIgbGF5ZXItMVwiPlxuICAgICAgPGRpdiBjbGFzcz1cImNpcmNsZS1jbGlwcGVyIGxlZnRcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNpcmNsZVwiPjwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiY2lyY2xlLWNsaXBwZXIgcmlnaHRcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNpcmNsZVwiPjwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG5cbiAgICA8ZGl2IGNsYXNzPVwic3Bpbm5lci1sYXllciBsYXllci0yXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiY2lyY2xlLWNsaXBwZXIgbGVmdFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2lyY2xlXCI+PC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjaXJjbGUtY2xpcHBlciByaWdodFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2lyY2xlXCI+PC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cblxuICAgIDxkaXYgY2xhc3M9XCJzcGlubmVyLWxheWVyIGxheWVyLTNcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjaXJjbGUtY2xpcHBlciBsZWZ0XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjaXJjbGVcIj48L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImNpcmNsZS1jbGlwcGVyIHJpZ2h0XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjaXJjbGVcIj48L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuXG4gICAgPGRpdiBjbGFzcz1cInNwaW5uZXItbGF5ZXIgbGF5ZXItNFwiPlxuICAgICAgPGRpdiBjbGFzcz1cImNpcmNsZS1jbGlwcGVyIGxlZnRcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNpcmNsZVwiPjwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiY2lyY2xlLWNsaXBwZXIgcmlnaHRcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNpcmNsZVwiPjwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuYDtcbnRlbXBsYXRlLnNldEF0dHJpYnV0ZSgnc3RyaXAtd2hpdGVzcGFjZScsICcnKTtcblxuLyoqXG5NYXRlcmlhbCBkZXNpZ246IFtQcm9ncmVzcyAmXG5hY3Rpdml0eV0oaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS9kZXNpZ24vc3BlYy9jb21wb25lbnRzL3Byb2dyZXNzLWFjdGl2aXR5Lmh0bWwpXG5cbkVsZW1lbnQgcHJvdmlkaW5nIGEgbXVsdGlwbGUgY29sb3IgbWF0ZXJpYWwgZGVzaWduIGNpcmN1bGFyIHNwaW5uZXIuXG5cbiAgICA8cGFwZXItc3Bpbm5lciBhY3RpdmU+PC9wYXBlci1zcGlubmVyPlxuXG5UaGUgZGVmYXVsdCBzcGlubmVyIGN5Y2xlcyBiZXR3ZWVuIGZvdXIgbGF5ZXJzIG9mIGNvbG9yczsgYnkgZGVmYXVsdCB0aGV5IGFyZVxuYmx1ZSwgcmVkLCB5ZWxsb3cgYW5kIGdyZWVuLiBJdCBjYW4gYmUgY3VzdG9taXplZCB0byBjeWNsZSBiZXR3ZWVuIGZvdXJcbmRpZmZlcmVudCBjb2xvcnMuIFVzZSA8cGFwZXItc3Bpbm5lci1saXRlPiBmb3Igc2luZ2xlIGNvbG9yIHNwaW5uZXJzLlxuXG4jIyMgQWNjZXNzaWJpbGl0eVxuXG5BbHQgYXR0cmlidXRlIHNob3VsZCBiZSBzZXQgdG8gcHJvdmlkZSBhZGVxdWF0ZSBjb250ZXh0IGZvciBhY2Nlc3NpYmlsaXR5LiBJZlxubm90IHByb3ZpZGVkLCBpdCBkZWZhdWx0cyB0byAnbG9hZGluZycuIEVtcHR5IGFsdCBjYW4gYmUgcHJvdmlkZWQgdG8gbWFyayB0aGVcbmVsZW1lbnQgYXMgZGVjb3JhdGl2ZSBpZiBhbHRlcm5hdGl2ZSBjb250ZW50IGlzIHByb3ZpZGVkIGluIGFub3RoZXIgZm9ybSAoZS5nLiBhXG50ZXh0IGJsb2NrIGZvbGxvd2luZyB0aGUgc3Bpbm5lcikuXG5cbiAgICA8cGFwZXItc3Bpbm5lciBhbHQ9XCJMb2FkaW5nIGNvbnRhY3RzIGxpc3RcIiBhY3RpdmU+PC9wYXBlci1zcGlubmVyPlxuXG4jIyMgU3R5bGluZ1xuXG5UaGUgZm9sbG93aW5nIGN1c3RvbSBwcm9wZXJ0aWVzIGFuZCBtaXhpbnMgYXJlIGF2YWlsYWJsZSBmb3Igc3R5bGluZzpcblxuQ3VzdG9tIHByb3BlcnR5IHwgRGVzY3JpcHRpb24gfCBEZWZhdWx0XG4tLS0tLS0tLS0tLS0tLS0tfC0tLS0tLS0tLS0tLS18LS0tLS0tLS0tLVxuYC0tcGFwZXItc3Bpbm5lci1sYXllci0xLWNvbG9yYCB8IENvbG9yIG9mIHRoZSBmaXJzdCBzcGlubmVyIHJvdGF0aW9uIHwgYC0tZ29vZ2xlLWJsdWUtNTAwYFxuYC0tcGFwZXItc3Bpbm5lci1sYXllci0yLWNvbG9yYCB8IENvbG9yIG9mIHRoZSBzZWNvbmQgc3Bpbm5lciByb3RhdGlvbiB8IGAtLWdvb2dsZS1yZWQtNTAwYFxuYC0tcGFwZXItc3Bpbm5lci1sYXllci0zLWNvbG9yYCB8IENvbG9yIG9mIHRoZSB0aGlyZCBzcGlubmVyIHJvdGF0aW9uIHwgYC0tZ29vZ2xlLXllbGxvdy01MDBgXG5gLS1wYXBlci1zcGlubmVyLWxheWVyLTQtY29sb3JgIHwgQ29sb3Igb2YgdGhlIGZvdXJ0aCBzcGlubmVyIHJvdGF0aW9uIHwgYC0tZ29vZ2xlLWdyZWVuLTUwMGBcbmAtLXBhcGVyLXNwaW5uZXItc3Ryb2tlLXdpZHRoYCB8IFRoZSB3aWR0aCBvZiB0aGUgc3Bpbm5lciBzdHJva2UgfCAzcHhcblxuQGdyb3VwIFBhcGVyIEVsZW1lbnRzXG5AZWxlbWVudCBwYXBlci1zcGlubmVyXG5AaGVybyBoZXJvLnN2Z1xuQGRlbW8gZGVtby9pbmRleC5odG1sXG4qL1xuUG9seW1lcih7XG4gIF90ZW1wbGF0ZTogdGVtcGxhdGUsXG5cbiAgaXM6ICdwYXBlci1zcGlubmVyJyxcblxuICBiZWhhdmlvcnM6IFtQYXBlclNwaW5uZXJCZWhhdmlvcl1cbn0pO1xuIiwiaW1wb3J0IGZlY2hhIGZyb20gXCJmZWNoYVwiO1xuXG4vLyBDaGVjayBmb3Igc3VwcG9ydCBvZiBuYXRpdmUgbG9jYWxlIHN0cmluZyBvcHRpb25zXG5mdW5jdGlvbiB0b0xvY2FsZVN0cmluZ1N1cHBvcnRzT3B0aW9ucygpIHtcbiAgdHJ5IHtcbiAgICBuZXcgRGF0ZSgpLnRvTG9jYWxlU3RyaW5nKFwiaVwiKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiBlLm5hbWUgPT09IFwiUmFuZ2VFcnJvclwiO1xuICB9XG4gIHJldHVybiBmYWxzZTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgKHRvTG9jYWxlU3RyaW5nU3VwcG9ydHNPcHRpb25zKClcbiAgPyAoZGF0ZU9iajogRGF0ZSwgbG9jYWxlczogc3RyaW5nKSA9PlxuICAgICAgZGF0ZU9iai50b0xvY2FsZVN0cmluZyhsb2NhbGVzLCB7XG4gICAgICAgIHllYXI6IFwibnVtZXJpY1wiLFxuICAgICAgICBtb250aDogXCJsb25nXCIsXG4gICAgICAgIGRheTogXCJudW1lcmljXCIsXG4gICAgICAgIGhvdXI6IFwibnVtZXJpY1wiLFxuICAgICAgICBtaW51dGU6IFwiMi1kaWdpdFwiLFxuICAgICAgfSlcbiAgOiAoZGF0ZU9iajogRGF0ZSkgPT4gZmVjaGEuZm9ybWF0KGRhdGVPYmosIFwiaGFEYXRlVGltZVwiKSk7XG4iLCJpbXBvcnQgZmVjaGEgZnJvbSBcImZlY2hhXCI7XG5cbi8vIENoZWNrIGZvciBzdXBwb3J0IG9mIG5hdGl2ZSBsb2NhbGUgc3RyaW5nIG9wdGlvbnNcbmZ1bmN0aW9uIHRvTG9jYWxlVGltZVN0cmluZ1N1cHBvcnRzT3B0aW9ucygpIHtcbiAgdHJ5IHtcbiAgICBuZXcgRGF0ZSgpLnRvTG9jYWxlVGltZVN0cmluZyhcImlcIik7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gZS5uYW1lID09PSBcIlJhbmdlRXJyb3JcIjtcbiAgfVxuICByZXR1cm4gZmFsc2U7XG59XG5cbmV4cG9ydCBkZWZhdWx0ICh0b0xvY2FsZVRpbWVTdHJpbmdTdXBwb3J0c09wdGlvbnMoKVxuICA/IChkYXRlT2JqOiBEYXRlLCBsb2NhbGVzOiBzdHJpbmcpID0+XG4gICAgICBkYXRlT2JqLnRvTG9jYWxlVGltZVN0cmluZyhsb2NhbGVzLCB7XG4gICAgICAgIGhvdXI6IFwibnVtZXJpY1wiLFxuICAgICAgICBtaW51dGU6IFwiMi1kaWdpdFwiLFxuICAgICAgfSlcbiAgOiAoZGF0ZU9iajogRGF0ZSkgPT4gZmVjaGEuZm9ybWF0KGRhdGVPYmosIFwic2hvcnRUaW1lXCIpKTtcbiIsImltcG9ydCB7IGh0bWwgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvaHRtbC10YWdcIjtcbmltcG9ydCB7IFBvbHltZXJFbGVtZW50IH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvcG9seW1lci1lbGVtZW50XCI7XG5cbmltcG9ydCBcIi4vaGEtcHJvZ3Jlc3MtYnV0dG9uXCI7XG5pbXBvcnQgeyBFdmVudHNNaXhpbiB9IGZyb20gXCIuLi8uLi9taXhpbnMvZXZlbnRzLW1peGluXCI7XG5cbi8qXG4gKiBAYXBwbGllc01peGluIEV2ZW50c01peGluXG4gKi9cbmNsYXNzIEhhQ2FsbFNlcnZpY2VCdXR0b24gZXh0ZW5kcyBFdmVudHNNaXhpbihQb2x5bWVyRWxlbWVudCkge1xuICBzdGF0aWMgZ2V0IHRlbXBsYXRlKCkge1xuICAgIHJldHVybiBodG1sYFxuICAgICAgPGhhLXByb2dyZXNzLWJ1dHRvblxuICAgICAgICBpZD1cInByb2dyZXNzXCJcbiAgICAgICAgcHJvZ3Jlc3M9XCJbW3Byb2dyZXNzXV1cIlxuICAgICAgICBvbi1jbGljaz1cImJ1dHRvblRhcHBlZFwiXG4gICAgICAgID48c2xvdD48L3Nsb3RcbiAgICAgID48L2hhLXByb2dyZXNzLWJ1dHRvbj5cbiAgICBgO1xuICB9XG5cbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBoYXNzOiB7XG4gICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgIH0sXG5cbiAgICAgIHByb2dyZXNzOiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIHZhbHVlOiBmYWxzZSxcbiAgICAgIH0sXG5cbiAgICAgIGRvbWFpbjoge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICB9LFxuXG4gICAgICBzZXJ2aWNlOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIH0sXG5cbiAgICAgIHNlcnZpY2VEYXRhOiB7XG4gICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgICAgdmFsdWU6IHt9LFxuICAgICAgfSxcblxuICAgICAgY29uZmlybWF0aW9uOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxuXG4gIGJ1dHRvblRhcHBlZCgpIHtcbiAgICBpZiAodGhpcy5jb25maXJtYXRpb24gJiYgIXdpbmRvdy5jb25maXJtKHRoaXMuY29uZmlybWF0aW9uKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLnByb2dyZXNzID0gdHJ1ZTtcbiAgICB2YXIgZWwgPSB0aGlzO1xuICAgIHZhciBldmVudERhdGEgPSB7XG4gICAgICBkb21haW46IHRoaXMuZG9tYWluLFxuICAgICAgc2VydmljZTogdGhpcy5zZXJ2aWNlLFxuICAgICAgc2VydmljZURhdGE6IHRoaXMuc2VydmljZURhdGEsXG4gICAgfTtcblxuICAgIHRoaXMuaGFzc1xuICAgICAgLmNhbGxTZXJ2aWNlKHRoaXMuZG9tYWluLCB0aGlzLnNlcnZpY2UsIHRoaXMuc2VydmljZURhdGEpXG4gICAgICAudGhlbihcbiAgICAgICAgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgZWwucHJvZ3Jlc3MgPSBmYWxzZTtcbiAgICAgICAgICBlbC4kLnByb2dyZXNzLmFjdGlvblN1Y2Nlc3MoKTtcbiAgICAgICAgICBldmVudERhdGEuc3VjY2VzcyA9IHRydWU7XG4gICAgICAgIH0sXG4gICAgICAgIGZ1bmN0aW9uKCkge1xuICAgICAgICAgIGVsLnByb2dyZXNzID0gZmFsc2U7XG4gICAgICAgICAgZWwuJC5wcm9ncmVzcy5hY3Rpb25FcnJvcigpO1xuICAgICAgICAgIGV2ZW50RGF0YS5zdWNjZXNzID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIClcbiAgICAgIC50aGVuKGZ1bmN0aW9uKCkge1xuICAgICAgICBlbC5maXJlKFwiaGFzcy1zZXJ2aWNlLWNhbGxlZFwiLCBldmVudERhdGEpO1xuICAgICAgfSk7XG4gIH1cbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwiaGEtY2FsbC1zZXJ2aWNlLWJ1dHRvblwiLCBIYUNhbGxTZXJ2aWNlQnV0dG9uKTtcbiIsImltcG9ydCB7IEhvbWVBc3Npc3RhbnQgfSBmcm9tIFwiLi4vdHlwZXNcIjtcblxuZXhwb3J0IGNvbnN0IGZldGNoRXJyb3JMb2cgPSAoaGFzczogSG9tZUFzc2lzdGFudCkgPT5cbiAgaGFzcy5jYWxsQXBpPHN0cmluZz4oXCJHRVRcIiwgXCJlcnJvcl9sb2dcIik7XG4iLCJpbXBvcnQgeyBIb21lQXNzaXN0YW50IH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTG9nZ2VkRXJyb3Ige1xuICBtZXNzYWdlOiBzdHJpbmc7XG4gIGxldmVsOiBzdHJpbmc7XG4gIHNvdXJjZTogc3RyaW5nO1xuICAvLyB1bml4IHRpbWVzdGFtcCBpbiBzZWNvbmRzXG4gIHRpbWVzdGFtcDogbnVtYmVyO1xuICBleGNlcHRpb246IHN0cmluZztcbiAgY291bnQ6IG51bWJlcjtcbiAgLy8gdW5peCB0aW1lc3RhbXAgaW4gc2Vjb25kc1xuICBmaXJzdF9vY2N1cmVkOiBudW1iZXI7XG59XG5cbmV4cG9ydCBjb25zdCBmZXRjaFN5c3RlbUxvZyA9IChoYXNzOiBIb21lQXNzaXN0YW50KSA9PlxuICBoYXNzLmNhbGxBcGk8TG9nZ2VkRXJyb3JbXT4oXCJHRVRcIiwgXCJlcnJvci9hbGxcIik7XG4iLCJpbXBvcnQge1xuICBMaXRFbGVtZW50LFxuICBodG1sLFxuICBDU1NSZXN1bHQsXG4gIGNzcyxcbiAgVGVtcGxhdGVSZXN1bHQsXG4gIHByb3BlcnR5LFxuICBxdWVyeSxcbiAgY3VzdG9tRWxlbWVudCxcbn0gZnJvbSBcImxpdC1lbGVtZW50XCI7XG5cbmltcG9ydCB7IEhvbWVBc3Npc3RhbnQgfSBmcm9tIFwiLi4vLi4vLi4vdHlwZXNcIjtcbmltcG9ydCB7IGhhU3R5bGUgfSBmcm9tIFwiLi4vLi4vLi4vcmVzb3VyY2VzL3N0eWxlc1wiO1xuXG5pbXBvcnQgXCIuLi9sb2dzL3N5c3RlbS1sb2ctY2FyZFwiO1xuaW1wb3J0IFwiLi4vbG9ncy9lcnJvci1sb2ctY2FyZFwiO1xuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG5pbXBvcnQgeyBTeXN0ZW1Mb2dDYXJkIH0gZnJvbSBcIi4uL2xvZ3Mvc3lzdGVtLWxvZy1jYXJkXCI7XG5cbkBjdXN0b21FbGVtZW50KFwiZGV2ZWxvcGVyLXRvb2xzLWxvZ3NcIilcbmV4cG9ydCBjbGFzcyBIYVBhbmVsRGV2TG9ncyBleHRlbmRzIExpdEVsZW1lbnQge1xuICBAcHJvcGVydHkoKSBwdWJsaWMgaGFzcyE6IEhvbWVBc3Npc3RhbnQ7XG5cbiAgQHF1ZXJ5KFwic3lzdGVtLWxvZy1jYXJkXCIpIHByaXZhdGUgc3lzdGVtTG9nPzogU3lzdGVtTG9nQ2FyZDtcblxuICBwdWJsaWMgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgc3VwZXIuY29ubmVjdGVkQ2FsbGJhY2soKTtcbiAgICBpZiAodGhpcy5zeXN0ZW1Mb2cgJiYgdGhpcy5zeXN0ZW1Mb2cubG9hZGVkKSB7XG4gICAgICB0aGlzLnN5c3RlbUxvZy5mZXRjaERhdGEoKTtcbiAgICB9XG4gIH1cblxuICBwcm90ZWN0ZWQgcmVuZGVyKCk6IFRlbXBsYXRlUmVzdWx0IHwgdm9pZCB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8ZGl2IGNsYXNzPVwiY29udGVudFwiPlxuICAgICAgICA8c3lzdGVtLWxvZy1jYXJkIC5oYXNzPSR7dGhpcy5oYXNzfT48L3N5c3RlbS1sb2ctY2FyZD5cbiAgICAgICAgPGVycm9yLWxvZy1jYXJkIC5oYXNzPSR7dGhpcy5oYXNzfT48L2Vycm9yLWxvZy1jYXJkPlxuICAgICAgPC9kaXY+XG4gICAgYDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgc3R5bGVzKCk6IENTU1Jlc3VsdFtdIHtcbiAgICByZXR1cm4gW1xuICAgICAgaGFTdHlsZSxcbiAgICAgIGNzc2BcbiAgICAgICAgOmhvc3Qge1xuICAgICAgICAgIC1tcy11c2VyLXNlbGVjdDogaW5pdGlhbDtcbiAgICAgICAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBpbml0aWFsO1xuICAgICAgICAgIC1tb3otdXNlci1zZWxlY3Q6IGluaXRpYWw7XG4gICAgICAgIH1cblxuICAgICAgICAuY29udGVudCB7XG4gICAgICAgICAgZGlyZWN0aW9uOiBsdHI7XG4gICAgICAgIH1cbiAgICAgIGAsXG4gICAgXTtcbiAgfVxufVxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBIVE1MRWxlbWVudFRhZ05hbWVNYXAge1xuICAgIFwiZGV2ZWxvcGVyLXRvb2xzLWxvZ3NcIjogSGFQYW5lbERldkxvZ3M7XG4gIH1cbn1cbiIsImltcG9ydCB7XG4gIExpdEVsZW1lbnQsXG4gIGh0bWwsXG4gIENTU1Jlc3VsdCxcbiAgY3NzLFxuICBQcm9wZXJ0eURlY2xhcmF0aW9ucyxcbiAgVGVtcGxhdGVSZXN1bHQsXG59IGZyb20gXCJsaXQtZWxlbWVudFwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItaWNvbi1idXR0b24vcGFwZXItaWNvbi1idXR0b25cIjtcbmltcG9ydCBcIkBtYXRlcmlhbC9td2MtYnV0dG9uXCI7XG5cbmltcG9ydCB7IEhvbWVBc3Npc3RhbnQgfSBmcm9tIFwiLi4vLi4vLi4vdHlwZXNcIjtcbmltcG9ydCB7IGZldGNoRXJyb3JMb2cgfSBmcm9tIFwiLi4vLi4vLi4vZGF0YS9lcnJvcl9sb2dcIjtcblxuY2xhc3MgRXJyb3JMb2dDYXJkIGV4dGVuZHMgTGl0RWxlbWVudCB7XG4gIHB1YmxpYyBoYXNzPzogSG9tZUFzc2lzdGFudDtcbiAgcHJpdmF0ZSBfZXJyb3JMb2c/OiBzdHJpbmc7XG5cbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCk6IFByb3BlcnR5RGVjbGFyYXRpb25zIHtcbiAgICByZXR1cm4ge1xuICAgICAgaGFzczoge30sXG4gICAgICBfZXJyb3JMb2c6IHt9LFxuICAgIH07XG4gIH1cblxuICBwcm90ZWN0ZWQgcmVuZGVyKCk6IFRlbXBsYXRlUmVzdWx0IHwgdm9pZCB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8cCBjbGFzcz1cImVycm9yLWxvZy1pbnRyb1wiPlxuICAgICAgICAke3RoaXMuX2Vycm9yTG9nXG4gICAgICAgICAgPyBodG1sYFxuICAgICAgICAgICAgICA8cGFwZXItaWNvbi1idXR0b25cbiAgICAgICAgICAgICAgICBpY29uPVwiaGFzczpyZWZyZXNoXCJcbiAgICAgICAgICAgICAgICBAY2xpY2s9JHt0aGlzLl9yZWZyZXNoRXJyb3JMb2d9XG4gICAgICAgICAgICAgID48L3BhcGVyLWljb24tYnV0dG9uPlxuICAgICAgICAgICAgYFxuICAgICAgICAgIDogaHRtbGBcbiAgICAgICAgICAgICAgPG13Yy1idXR0b24gcmFpc2VkIEBjbGljaz0ke3RoaXMuX3JlZnJlc2hFcnJvckxvZ30+XG4gICAgICAgICAgICAgICAgTG9hZCBGdWxsIOeJp+WFu+eKrCBMb2dcbiAgICAgICAgICAgICAgPC9td2MtYnV0dG9uPlxuICAgICAgICAgICAgYH1cbiAgICAgIDwvcD5cbiAgICAgIDxkaXYgY2xhc3M9XCJlcnJvci1sb2dcIj4ke3RoaXMuX2Vycm9yTG9nfTwvZGl2PlxuICAgIGA7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHN0eWxlcygpOiBDU1NSZXN1bHQge1xuICAgIHJldHVybiBjc3NgXG4gICAgICAuZXJyb3ItbG9nLWludHJvIHtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBtYXJnaW46IDE2cHg7XG4gICAgICB9XG5cbiAgICAgIHBhcGVyLWljb24tYnV0dG9uIHtcbiAgICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgfVxuXG4gICAgICAuZXJyb3ItbG9nIHtcbiAgICAgICAgQGFwcGx5IC0tcGFwZXItZm9udC1jb2RlKVxuICAgICAgICAgIGNsZWFyOiBib3RoO1xuICAgICAgICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XG4gICAgICAgIG1hcmdpbjogMTZweDtcbiAgICAgIH1cbiAgICBgO1xuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBfcmVmcmVzaEVycm9yTG9nKCk6IFByb21pc2U8dm9pZD4ge1xuICAgIHRoaXMuX2Vycm9yTG9nID0gXCJMb2FkaW5nIGVycm9yIGxvZ+KAplwiO1xuICAgIGNvbnN0IGxvZyA9IGF3YWl0IGZldGNoRXJyb3JMb2codGhpcy5oYXNzISk7XG4gICAgdGhpcy5fZXJyb3JMb2cgPSBsb2cgfHwgXCJObyBlcnJvcnMgaGF2ZSBiZWVuIHJlcG9ydGVkLlwiO1xuICB9XG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcImVycm9yLWxvZy1jYXJkXCIsIEVycm9yTG9nQ2FyZCk7XG4iLCJpbXBvcnQgeyBmaXJlRXZlbnQgfSBmcm9tIFwiLi4vLi4vLi4vY29tbW9uL2RvbS9maXJlX2V2ZW50XCI7XG5pbXBvcnQgeyBMb2dnZWRFcnJvciB9IGZyb20gXCIuLi8uLi8uLi9kYXRhL3N5c3RlbV9sb2dcIjtcblxuZGVjbGFyZSBnbG9iYWwge1xuICAvLyBmb3IgZmlyZSBldmVudFxuICBpbnRlcmZhY2UgSEFTU0RvbUV2ZW50cyB7XG4gICAgXCJzaG93LWRpYWxvZy1zeXN0ZW0tbG9nLWRldGFpbFwiOiBTeXN0ZW1Mb2dEZXRhaWxEaWFsb2dQYXJhbXM7XG4gIH1cbn1cblxubGV0IHJlZ2lzdGVyZWREaWFsb2cgPSBmYWxzZTtcbmNvbnN0IGRpYWxvZ1Nob3dFdmVudCA9IFwic2hvdy1kaWFsb2ctc3lzdGVtLWxvZy1kZXRhaWxcIjtcbmNvbnN0IGRpYWxvZ1RhZyA9IFwiZGlhbG9nLXN5c3RlbS1sb2ctZGV0YWlsXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgU3lzdGVtTG9nRGV0YWlsRGlhbG9nUGFyYW1zIHtcbiAgaXRlbTogTG9nZ2VkRXJyb3I7XG59XG5cbmNvbnN0IHJlZ2lzdGVyRGlhbG9nID0gKGVsZW1lbnQ6IEhUTUxFbGVtZW50KSA9PlxuICBmaXJlRXZlbnQoZWxlbWVudCwgXCJyZWdpc3Rlci1kaWFsb2dcIiwge1xuICAgIGRpYWxvZ1Nob3dFdmVudCxcbiAgICBkaWFsb2dUYWcsXG4gICAgZGlhbG9nSW1wb3J0OiAoKSA9PlxuICAgICAgaW1wb3J0KC8qIHdlYnBhY2tDaHVua05hbWU6IFwic3lzdGVtLWxvZy1kZXRhaWwtZGlhbG9nXCIgKi8gXCIuL2RpYWxvZy1zeXN0ZW0tbG9nLWRldGFpbFwiKSxcbiAgfSk7XG5cbmV4cG9ydCBjb25zdCBzaG93U3lzdGVtTG9nRGV0YWlsRGlhbG9nID0gKFxuICBlbGVtZW50OiBIVE1MRWxlbWVudCxcbiAgc3lzdGVtTG9nRGV0YWlsUGFyYW1zOiBTeXN0ZW1Mb2dEZXRhaWxEaWFsb2dQYXJhbXNcbik6IHZvaWQgPT4ge1xuICBpZiAoIXJlZ2lzdGVyZWREaWFsb2cpIHtcbiAgICByZWdpc3RlcmVkRGlhbG9nID0gdHJ1ZTtcbiAgICByZWdpc3RlckRpYWxvZyhlbGVtZW50KTtcbiAgfVxuICBmaXJlRXZlbnQoZWxlbWVudCwgZGlhbG9nU2hvd0V2ZW50LCBzeXN0ZW1Mb2dEZXRhaWxQYXJhbXMpO1xufTtcbiIsImltcG9ydCB7XG4gIExpdEVsZW1lbnQsXG4gIGh0bWwsXG4gIENTU1Jlc3VsdCxcbiAgY3NzLFxuICBQcm9wZXJ0eURlY2xhcmF0aW9ucyxcbiAgVGVtcGxhdGVSZXN1bHQsXG4gIGN1c3RvbUVsZW1lbnQsXG59IGZyb20gXCJsaXQtZWxlbWVudFwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItaWNvbi1idXR0b24vcGFwZXItaWNvbi1idXR0b25cIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWl0ZW0vcGFwZXItaXRlbS1ib2R5XCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1pdGVtL3BhcGVyLWl0ZW1cIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLXNwaW5uZXIvcGFwZXItc3Bpbm5lclwiO1xuaW1wb3J0IFwiLi4vLi4vLi4vY29tcG9uZW50cy9oYS1jYXJkXCI7XG5pbXBvcnQgXCIuLi8uLi8uLi9jb21wb25lbnRzL2J1dHRvbnMvaGEtY2FsbC1zZXJ2aWNlLWJ1dHRvblwiO1xuaW1wb3J0IFwiLi4vLi4vLi4vY29tcG9uZW50cy9idXR0b25zL2hhLXByb2dyZXNzLWJ1dHRvblwiO1xuaW1wb3J0IHsgSG9tZUFzc2lzdGFudCB9IGZyb20gXCIuLi8uLi8uLi90eXBlc1wiO1xuaW1wb3J0IHsgTG9nZ2VkRXJyb3IsIGZldGNoU3lzdGVtTG9nIH0gZnJvbSBcIi4uLy4uLy4uL2RhdGEvc3lzdGVtX2xvZ1wiO1xuaW1wb3J0IGZvcm1hdERhdGVUaW1lIGZyb20gXCIuLi8uLi8uLi9jb21tb24vZGF0ZXRpbWUvZm9ybWF0X2RhdGVfdGltZVwiO1xuaW1wb3J0IGZvcm1hdFRpbWUgZnJvbSBcIi4uLy4uLy4uL2NvbW1vbi9kYXRldGltZS9mb3JtYXRfdGltZVwiO1xuaW1wb3J0IHsgc2hvd1N5c3RlbUxvZ0RldGFpbERpYWxvZyB9IGZyb20gXCIuL3Nob3ctZGlhbG9nLXN5c3RlbS1sb2ctZGV0YWlsXCI7XG5cbmNvbnN0IGZvcm1hdExvZ1RpbWUgPSAoZGF0ZSwgbGFuZ3VhZ2U6IHN0cmluZykgPT4ge1xuICBjb25zdCB0b2RheSA9IG5ldyBEYXRlKCkuc2V0SG91cnMoMCwgMCwgMCwgMCk7XG4gIGNvbnN0IGRhdGVUaW1lID0gbmV3IERhdGUoZGF0ZSAqIDEwMDApO1xuICBjb25zdCBkYXRlVGltZURheSA9IG5ldyBEYXRlKGRhdGUgKiAxMDAwKS5zZXRIb3VycygwLCAwLCAwLCAwKTtcblxuICByZXR1cm4gZGF0ZVRpbWVEYXkgPCB0b2RheVxuICAgID8gZm9ybWF0RGF0ZVRpbWUoZGF0ZVRpbWUsIGxhbmd1YWdlKVxuICAgIDogZm9ybWF0VGltZShkYXRlVGltZSwgbGFuZ3VhZ2UpO1xufTtcblxuQGN1c3RvbUVsZW1lbnQoXCJzeXN0ZW0tbG9nLWNhcmRcIilcbmV4cG9ydCBjbGFzcyBTeXN0ZW1Mb2dDYXJkIGV4dGVuZHMgTGl0RWxlbWVudCB7XG4gIHB1YmxpYyBoYXNzPzogSG9tZUFzc2lzdGFudDtcbiAgcHVibGljIGxvYWRlZCA9IGZhbHNlO1xuICBwcml2YXRlIF9pdGVtcz86IExvZ2dlZEVycm9yW107XG5cbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCk6IFByb3BlcnR5RGVjbGFyYXRpb25zIHtcbiAgICByZXR1cm4ge1xuICAgICAgaGFzczoge30sXG4gICAgICBfaXRlbXM6IHt9LFxuICAgIH07XG4gIH1cblxuICBwdWJsaWMgYXN5bmMgZmV0Y2hEYXRhKCk6IFByb21pc2U8dm9pZD4ge1xuICAgIHRoaXMuX2l0ZW1zID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuX2l0ZW1zID0gYXdhaXQgZmV0Y2hTeXN0ZW1Mb2codGhpcy5oYXNzISk7XG4gIH1cblxuICBwcm90ZWN0ZWQgcmVuZGVyKCk6IFRlbXBsYXRlUmVzdWx0IHwgdm9pZCB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8ZGl2IGNsYXNzPVwic3lzdGVtLWxvZy1pbnRyb1wiPlxuICAgICAgICA8aGEtY2FyZD5cbiAgICAgICAgICAke3RoaXMuX2l0ZW1zID09PSB1bmRlZmluZWRcbiAgICAgICAgICAgID8gaHRtbGBcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibG9hZGluZy1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgIDxwYXBlci1zcGlubmVyIGFjdGl2ZT48L3BhcGVyLXNwaW5uZXI+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIGBcbiAgICAgICAgICAgIDogaHRtbGBcbiAgICAgICAgICAgICAgICAke3RoaXMuX2l0ZW1zLmxlbmd0aCA9PT0gMFxuICAgICAgICAgICAgICAgICAgPyBodG1sYFxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWNvbnRlbnRcIj5UaGVyZSBhcmUgbm8gbmV3IGlzc3VlcyE8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgYFxuICAgICAgICAgICAgICAgICAgOiB0aGlzLl9pdGVtcy5tYXAoXG4gICAgICAgICAgICAgICAgICAgICAgKGl0ZW0pID0+IGh0bWxgXG4gICAgICAgICAgICAgICAgICAgICAgICA8cGFwZXItaXRlbSBAY2xpY2s9JHt0aGlzLl9vcGVuTG9nfSAubG9nSXRlbT0ke2l0ZW19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cGFwZXItaXRlbS1ib2R5IHR3by1saW5lPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7aXRlbS5tZXNzYWdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc2Vjb25kYXJ5PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHtmb3JtYXRMb2dUaW1lKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLnRpbWVzdGFtcCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5oYXNzIS5sYW5ndWFnZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7aXRlbS5zb3VyY2V9ICgke2l0ZW0ubGV2ZWx9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHtpdGVtLmNvdW50ID4gMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IGh0bWxgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAtIG1lc3NhZ2UgZmlyc3Qgb2NjdXJlZCBhdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHtmb3JtYXRMb2dUaW1lKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLmZpcnN0X29jY3VyZWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaGFzcyEubGFuZ3VhZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbmQgc2hvd3MgdXAgJHtpdGVtLmNvdW50fSB0aW1lc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBodG1sYGB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvcGFwZXItaXRlbS1ib2R5PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wYXBlci1pdGVtPlxuICAgICAgICAgICAgICAgICAgICAgIGBcbiAgICAgICAgICAgICAgICAgICAgKX1cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWFjdGlvbnNcIj5cbiAgICAgICAgICAgICAgICAgIDxoYS1jYWxsLXNlcnZpY2UtYnV0dG9uXG4gICAgICAgICAgICAgICAgICAgIC5oYXNzPSR7dGhpcy5oYXNzfVxuICAgICAgICAgICAgICAgICAgICBkb21haW49XCJzeXN0ZW1fbG9nXCJcbiAgICAgICAgICAgICAgICAgICAgc2VydmljZT1cImNsZWFyXCJcbiAgICAgICAgICAgICAgICAgICAgPkNsZWFyPC9oYS1jYWxsLXNlcnZpY2UtYnV0dG9uXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8aGEtcHJvZ3Jlc3MtYnV0dG9uIEBjbGljaz0ke3RoaXMuZmV0Y2hEYXRhfVxuICAgICAgICAgICAgICAgICAgICA+UmVmcmVzaDwvaGEtcHJvZ3Jlc3MtYnV0dG9uXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIGB9XG4gICAgICAgIDwvaGEtY2FyZD5cbiAgICAgIDwvZGl2PlxuICAgIGA7XG4gIH1cblxuICBwcm90ZWN0ZWQgZmlyc3RVcGRhdGVkKGNoYW5nZWRQcm9wcyk6IHZvaWQge1xuICAgIHN1cGVyLmZpcnN0VXBkYXRlZChjaGFuZ2VkUHJvcHMpO1xuICAgIHRoaXMuZmV0Y2hEYXRhKCk7XG4gICAgdGhpcy5sb2FkZWQgPSB0cnVlO1xuICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcihcImhhc3Mtc2VydmljZS1jYWxsZWRcIiwgKGV2KSA9PlxuICAgICAgdGhpcy5zZXJ2aWNlQ2FsbGVkKGV2KVxuICAgICk7XG4gIH1cblxuICBwcm90ZWN0ZWQgc2VydmljZUNhbGxlZChldik6IHZvaWQge1xuICAgIC8vIENoZWNrIGlmIHRoaXMgaXMgZm9yIHVzXG4gICAgaWYgKGV2LmRldGFpbC5zdWNjZXNzICYmIGV2LmRldGFpbC5kb21haW4gPT09IFwic3lzdGVtX2xvZ1wiKSB7XG4gICAgICAvLyBEbyB0aGUgcmlnaHQgdGhpbmcgZGVwZW5kaW5nIG9uIHNlcnZpY2VcbiAgICAgIGlmIChldi5kZXRhaWwuc2VydmljZSA9PT0gXCJjbGVhclwiKSB7XG4gICAgICAgIHRoaXMuX2l0ZW1zID0gW107XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfb3BlbkxvZyhldjogRXZlbnQpOiB2b2lkIHtcbiAgICBjb25zdCBpdGVtID0gKGV2LmN1cnJlbnRUYXJnZXQgYXMgYW55KS5sb2dJdGVtO1xuICAgIHNob3dTeXN0ZW1Mb2dEZXRhaWxEaWFsb2codGhpcywgeyBpdGVtIH0pO1xuICB9XG5cbiAgc3RhdGljIGdldCBzdHlsZXMoKTogQ1NTUmVzdWx0IHtcbiAgICByZXR1cm4gY3NzYFxuICAgICAgaGEtY2FyZCB7XG4gICAgICAgIHBhZGRpbmctdG9wOiAxNnB4O1xuICAgICAgfVxuXG4gICAgICBwYXBlci1pdGVtIHtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgfVxuXG4gICAgICAuc3lzdGVtLWxvZy1pbnRybyB7XG4gICAgICAgIG1hcmdpbjogMTZweDtcbiAgICAgIH1cblxuICAgICAgLmxvYWRpbmctY29udGFpbmVyIHtcbiAgICAgICAgaGVpZ2h0OiAxMDBweDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICB9XG4gICAgYDtcbiAgfVxufVxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBIVE1MRWxlbWVudFRhZ05hbWVNYXAge1xuICAgIFwic3lzdGVtLWxvZy1jYXJkXCI6IFN5c3RlbUxvZ0NhcmQ7XG4gIH1cbn1cbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7OztBQVVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUEwQkE7QUFDQTtBQW1DQTtBQXBDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1Q0E7Ozs7Ozs7Ozs7QUFVQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQXlDQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFzQ0E7QUFDQTtBQUVBO0FBRUE7QUFMQTs7Ozs7Ozs7Ozs7O0FDcEdBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFPQTs7Ozs7Ozs7Ozs7OztBQ3JCQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBSUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xCQTtBQUNBO0FBRUE7QUFDQTtBQUVBOzs7O0FBR0E7Ozs7Ozs7Ozs7Ozs7QUEwQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBOzs7QUF0RUE7QUFDQTtBQVFBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBSUE7QUFDQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBREE7QUFJQTtBQUNBO0FBREE7QUFJQTtBQUNBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFEQTtBQXZCQTtBQTJCQTs7OztBQXhDQTtBQUNBO0FBeUVBOzs7Ozs7Ozs7Ozs7QUNqRkE7QUFBQTtBQUFBO0FBQ0E7QUFBQTs7Ozs7Ozs7Ozs7OztBQ1dBO0FBQUE7QUFBQTtBQUNBO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2ZBO0FBWUE7QUFFQTtBQUNBO0FBS0E7QUFBQTtBQUFBOztBQXFDQTtBQWhDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBTUE7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBV0E7QUFDQTs7O0FBQUE7QUFuQ0E7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBSEE7QUFEQTtBQUNBO0FBcUNBO0FBQUE7QUFyQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BCQTtBQVFBO0FBQ0E7QUFHQTtBQUVBO0FBQUE7QUFBQTs7QUF3REE7QUFwREE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUFBO0FBRUE7QUFDQTtBQWFBO0FBVkE7QUFjQTtBQUVBO0FBQUE7QUFDQTtBQWlCQTs7O0FBQUE7QUFFQTs7Ozs7O0FBQ0E7QUFDQTs7QUFBQTtBQUNBOzs7OztBQUNBO0FBQ0E7QUFBQTtBQUVBOzs7Ozs7Ozs7Ozs7OztBQ3hFQTtBQUFBO0FBQUE7QUFBQTtBQVVBO0FBQ0E7QUFDQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFMQTtBQU9BO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25DQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFFQTs7QUEwSEE7QUF2SEE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUFBO0FBRUE7Ozs7OztBQUNBO0FBQ0E7QUFBQTs7QUFBQTs7Ozs7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQXNEQTtBQWxEQTtBQXFDQTtBQTlCQTtBQWNBO0FBV0E7QUFSQTtBQUtBO0FBeUJBO0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFvQkE7OztBQUFBO0FBM0hBO0FBREE7QUFDQTtBQTRIQTtBQUFBO0FBNUhBOzs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==