(self["webpackJsonp"] = self["webpackJsonp"] || []).push([[19],{

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

/***/ "./src/data/system_health.ts":
/*!***********************************!*\
  !*** ./src/data/system_health.ts ***!
  \***********************************/
/*! exports provided: fetchSystemHealthInfo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchSystemHealthInfo", function() { return fetchSystemHealthInfo; });
var fetchSystemHealthInfo = function (hass) {
    return hass.callWS({
        type: "system_health/info",
    });
};


/***/ }),

/***/ "./src/panels/developer-tools/info/developer-tools-info.ts":
/*!*****************************************************************!*\
  !*** ./src/panels/developer-tools/info/developer-tools-info.ts ***!
  \*****************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _resources_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../resources/styles */ "./src/resources/styles.ts");
/* harmony import */ var _system_health_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./system-health-card */ "./src/panels/developer-tools/info/system-health-card.ts");




var JS_TYPE = "es5";
var JS_VERSION = "20191002.0";
var OPT_IN_PANEL = "states";
var HaPanelDevInfo = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(HaPanelDevInfo, _super);
    function HaPanelDevInfo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HaPanelDevInfo.prototype.render = function () {
        var hass = this.hass;
        var customUiList = window.CUSTOM_UI_LIST || [];
        var nonDefaultLink = localStorage.defaultPage === OPT_IN_PANEL && OPT_IN_PANEL === "states"
            ? "/lovelace"
            : "/states";
        var nonDefaultLinkText = localStorage.defaultPage === OPT_IN_PANEL && OPT_IN_PANEL === "states"
            ? "Go to the Lovelace UI"
            : "Go to the states UI";
        var defaultPageText = (localStorage.defaultPage === OPT_IN_PANEL ? "Remove" : "Set") + " " + OPT_IN_PANEL + " as default page on this device";
        return Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_3 || (templateObject_3 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      <div class=\"about\">\n        <p class=\"version\">\n          <a href=\"https://www.home-assistant.io\" target=\"_blank\"\n            ><img\n              src=\"/static/icons/favicon-192x192.png\"\n              height=\"192\"\n              alt=\"\u7267\u517B\u72AC logo\"\n          /></a>\n          <br />\n          \u7267\u517B\u72AC<br />\n          ", "\n        </p>\n        <p>\n          Path to configuration.yaml: ", "\n        </p>\n        <p class=\"develop\">\n          <a\n            href=\"https://www.home-assistant.io/developers/credits/\"\n            target=\"_blank\"\n          >\n            Developed by a bunch of awesome people.\n          </a>\n        </p>\n        <p>\n          Published under the Apache 2.0 license<br />\n          Source:\n          <a\n            href=\"https://github.com/home-assistant/home-assistant\"\n            target=\"_blank\"\n            >server</a\n          >\n          &mdash;\n          <a\n            href=\"https://github.com/home-assistant/home-assistant-polymer\"\n            target=\"_blank\"\n            >frontend-ui</a\n          >\n        </p>\n        <p>\n          Built using\n          <a href=\"https://www.python.org\">Python 3</a>,\n          <a href=\"https://www.polymer-project.org\" target=\"_blank\">Polymer</a>,\n          Icons by\n          <a href=\"https://www.google.com/design/icons/\" target=\"_blank\"\n            >Google</a\n          >\n          and\n          <a href=\"https://MaterialDesignIcons.com\" target=\"_blank\"\n            >MaterialDesignIcons.com</a\n          >.\n        </p>\n        <p>\n          Frontend version: ", " - ", "\n          ", "\n        </p>\n        <p>\n          <a href=\"", "\">", "</a><br />\n          <a href=\"#\" @click=\"", "\">", "</a\n          ><br />\n        </p>\n      </div>\n      <div class=\"content\">\n        <system-health-card .hass=", "></system-health-card>\n      </div>\n    "], ["\n      <div class=\"about\">\n        <p class=\"version\">\n          <a href=\"https://www.home-assistant.io\" target=\"_blank\"\n            ><img\n              src=\"/static/icons/favicon-192x192.png\"\n              height=\"192\"\n              alt=\"\u7267\u517B\u72AC logo\"\n          /></a>\n          <br />\n          \u7267\u517B\u72AC<br />\n          ", "\n        </p>\n        <p>\n          Path to configuration.yaml: ", "\n        </p>\n        <p class=\"develop\">\n          <a\n            href=\"https://www.home-assistant.io/developers/credits/\"\n            target=\"_blank\"\n          >\n            Developed by a bunch of awesome people.\n          </a>\n        </p>\n        <p>\n          Published under the Apache 2.0 license<br />\n          Source:\n          <a\n            href=\"https://github.com/home-assistant/home-assistant\"\n            target=\"_blank\"\n            >server</a\n          >\n          &mdash;\n          <a\n            href=\"https://github.com/home-assistant/home-assistant-polymer\"\n            target=\"_blank\"\n            >frontend-ui</a\n          >\n        </p>\n        <p>\n          Built using\n          <a href=\"https://www.python.org\">Python 3</a>,\n          <a href=\"https://www.polymer-project.org\" target=\"_blank\">Polymer</a>,\n          Icons by\n          <a href=\"https://www.google.com/design/icons/\" target=\"_blank\"\n            >Google</a\n          >\n          and\n          <a href=\"https://MaterialDesignIcons.com\" target=\"_blank\"\n            >MaterialDesignIcons.com</a\n          >.\n        </p>\n        <p>\n          Frontend version: ", " - ", "\n          ",
            "\n        </p>\n        <p>\n          <a href=\"", "\">", "</a><br />\n          <a href=\"#\" @click=\"", "\">", "</a\n          ><br />\n        </p>\n      </div>\n      <div class=\"content\">\n        <system-health-card .hass=", "></system-health-card>\n      </div>\n    "])), hass.config.version, hass.config.config_dir, JS_VERSION, JS_TYPE, customUiList.length > 0
            ? Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_2 || (templateObject_2 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n                <div>\n                  Custom UIs:\n                  ", "\n                </div>\n              "], ["\n                <div>\n                  Custom UIs:\n                  ",
                "\n                </div>\n              "])), customUiList.map(function (item) { return Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_1 || (templateObject_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n                      <div>\n                        <a href=\"", "\" target=\"_blank\"> ", "</a>:\n                        ", "\n                      </div>\n                    "], ["\n                      <div>\n                        <a href=\"", "\" target=\"_blank\"> ", "</a>:\n                        ", "\n                      </div>\n                    "])), item.url, item.name, item.version); })) : "", nonDefaultLink, nonDefaultLinkText, this._toggleDefaultPage, defaultPageText, this.hass);
    };
    HaPanelDevInfo.prototype.firstUpdated = function (changedProps) {
        var _this = this;
        _super.prototype.firstUpdated.call(this, changedProps);
        // Legacy custom UI can be slow to register, give them time.
        var customUI = (window.CUSTOM_UI_LIST || []).length;
        setTimeout(function () {
            if ((window.CUSTOM_UI_LIST || []).length !== customUI.length) {
                _this.requestUpdate();
            }
        }, 1000);
    };
    HaPanelDevInfo.prototype._toggleDefaultPage = function () {
        if (localStorage.defaultPage === OPT_IN_PANEL) {
            delete localStorage.defaultPage;
        }
        else {
            localStorage.defaultPage = OPT_IN_PANEL;
        }
        this.requestUpdate();
    };
    Object.defineProperty(HaPanelDevInfo, "styles", {
        get: function () {
            return [
                _resources_styles__WEBPACK_IMPORTED_MODULE_2__["haStyle"],
                Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["css"])(templateObject_4 || (templateObject_4 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n        :host {\n          -ms-user-select: initial;\n          -webkit-user-select: initial;\n          -moz-user-select: initial;\n        }\n\n        .content {\n          direction: ltr;\n        }\n\n        .about {\n          text-align: center;\n          line-height: 2em;\n        }\n\n        .version {\n          @apply --paper-font-headline;\n        }\n\n        .develop {\n          @apply --paper-font-subhead;\n        }\n\n        .about a {\n          color: var(--dark-primary-color);\n        }\n\n        system-health-card {\n          display: block;\n          max-width: 600px;\n          margin: 0 auto;\n          padding-bottom: 16px;\n        }\n      "], ["\n        :host {\n          -ms-user-select: initial;\n          -webkit-user-select: initial;\n          -moz-user-select: initial;\n        }\n\n        .content {\n          direction: ltr;\n        }\n\n        .about {\n          text-align: center;\n          line-height: 2em;\n        }\n\n        .version {\n          @apply --paper-font-headline;\n        }\n\n        .develop {\n          @apply --paper-font-subhead;\n        }\n\n        .about a {\n          color: var(--dark-primary-color);\n        }\n\n        system-health-card {\n          display: block;\n          max-width: 600px;\n          margin: 0 auto;\n          padding-bottom: 16px;\n        }\n      "]))),
            ];
        },
        enumerable: true,
        configurable: true
    });
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
    ], HaPanelDevInfo.prototype, "hass", void 0);
    return HaPanelDevInfo;
}(lit_element__WEBPACK_IMPORTED_MODULE_1__["LitElement"]));
customElements.define("developer-tools-info", HaPanelDevInfo);
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;


/***/ }),

/***/ "./src/panels/developer-tools/info/system-health-card.ts":
/*!***************************************************************!*\
  !*** ./src/panels/developer-tools/info/system-health-card.ts ***!
  \***************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _polymer_paper_spinner_paper_spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-spinner/paper-spinner */ "./node_modules/@polymer/paper-spinner/paper-spinner.js");
/* harmony import */ var _components_ha_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/ha-card */ "./src/components/ha-card.ts");
/* harmony import */ var _data_system_health__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../data/system_health */ "./src/data/system_health.ts");





var sortKeys = function (a, b) {
    if (a === "homeassistant") {
        return -1;
    }
    if (b === "homeassistant") {
        return 1;
    }
    if (a < b) {
        return -1;
    }
    if (b < a) {
        return 1;
    }
    return 0;
};
var SystemHealthCard = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(SystemHealthCard, _super);
    function SystemHealthCard() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(SystemHealthCard, "properties", {
        get: function () {
            return {
                hass: {},
                _info: {},
            };
        },
        enumerable: true,
        configurable: true
    });
    SystemHealthCard.prototype.render = function () {
        if (!this.hass) {
            return;
        }
        var sections = [];
        if (!this._info) {
            sections.push(Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_1 || (templateObject_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n          <div class=\"loading-container\">\n            <paper-spinner active></paper-spinner>\n          </div>\n        "], ["\n          <div class=\"loading-container\">\n            <paper-spinner active></paper-spinner>\n          </div>\n        "]))));
        }
        else {
            var domains = Object.keys(this._info).sort(sortKeys);
            for (var _i = 0, domains_1 = domains; _i < domains_1.length; _i++) {
                var domain = domains_1[_i];
                var keys = [];
                for (var _a = 0, _b = Object.keys(this._info[domain]).sort(); _a < _b.length; _a++) {
                    var key = _b[_a];
                    keys.push(Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_2 || (templateObject_2 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n            <tr>\n              <td>", "</td>\n              <td>", "</td>\n            </tr>\n          "], ["\n            <tr>\n              <td>", "</td>\n              <td>", "</td>\n            </tr>\n          "])), key, this._info[domain][key]));
                }
                if (domain !== "homeassistant") {
                    sections.push(Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_3 || (templateObject_3 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n              <h3>", "</h3>\n            "], ["\n              <h3>", "</h3>\n            "])), this.hass.localize("domain." + domain) || domain));
                }
                sections.push(Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_4 || (templateObject_4 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n          <table>\n            ", "\n          </table>\n        "], ["\n          <table>\n            ", "\n          </table>\n        "])), keys));
            }
        }
        return Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_5 || (templateObject_5 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      <ha-card header=\"System Health\">\n        <div class=\"card-content\">", "</div>\n      </ha-card>\n    "], ["\n      <ha-card header=\"System Health\">\n        <div class=\"card-content\">", "</div>\n      </ha-card>\n    "])), sections);
    };
    SystemHealthCard.prototype.firstUpdated = function (changedProps) {
        _super.prototype.firstUpdated.call(this, changedProps);
        this._fetchInfo();
    };
    SystemHealthCard.prototype._fetchInfo = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var _a, err_1;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        if (!this.hass.config.components.includes("system_health")) {
                            throw new Error();
                        }
                        _a = this;
                        return [4 /*yield*/, Object(_data_system_health__WEBPACK_IMPORTED_MODULE_4__["fetchSystemHealthInfo"])(this.hass)];
                    case 1:
                        _a._info = _b.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        err_1 = _b.sent();
                        this._info = {
                            system_health: {
                                error: "System Health component is not loaded. Add 'system_health:' to configuration.yaml",
                            },
                        };
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    Object.defineProperty(SystemHealthCard, "styles", {
        get: function () {
            return Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["css"])(templateObject_6 || (templateObject_6 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      table {\n        width: 100%;\n      }\n\n      td:first-child {\n        width: 33%;\n      }\n\n      .loading-container {\n        display: flex;\n        align-items: center;\n        justify-content: center;\n      }\n    "], ["\n      table {\n        width: 100%;\n      }\n\n      td:first-child {\n        width: 33%;\n      }\n\n      .loading-container {\n        display: flex;\n        align-items: center;\n        justify-content: center;\n      }\n    "])));
        },
        enumerable: true,
        configurable: true
    });
    return SystemHealthCard;
}(lit_element__WEBPACK_IMPORTED_MODULE_1__["LitElement"]));
customElements.define("system-health-card", SystemHealthCard);
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6;


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTkuY2h1bmsuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHBvbHltZXIvcGFwZXItc3Bpbm5lci9wYXBlci1zcGlubmVyLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2hhLWNhcmQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RhdGEvc3lzdGVtX2hlYWx0aC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL2RldmVsb3Blci10b29scy9pbmZvL2RldmVsb3Blci10b29scy1pbmZvLnRzIiwid2VicGFjazovLy8uL3NyYy9wYW5lbHMvZGV2ZWxvcGVyLXRvb2xzL2luZm8vc3lzdGVtLWhlYWx0aC1jYXJkLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuQGxpY2Vuc2VcbkNvcHlyaWdodCAoYykgMjAxNSBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG5UaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXRcbmh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dCBUaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kIGF0XG5odHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHQgVGhlIGNvbXBsZXRlIHNldCBvZiBjb250cmlidXRvcnMgbWF5IGJlXG5mb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dCBDb2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhc1xucGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc28gc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudFxuZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4qL1xuaW1wb3J0ICdAcG9seW1lci9wb2x5bWVyL3BvbHltZXItbGVnYWN5LmpzJztcbmltcG9ydCAnQHBvbHltZXIvcGFwZXItc3R5bGVzL2NvbG9yLmpzJztcbmltcG9ydCAnLi9wYXBlci1zcGlubmVyLXN0eWxlcy5qcyc7XG5cbmltcG9ydCB7UG9seW1lcn0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9saWIvbGVnYWN5L3BvbHltZXItZm4uanMnO1xuaW1wb3J0IHtodG1sfSBmcm9tICdAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZy5qcyc7XG5cbmltcG9ydCB7UGFwZXJTcGlubmVyQmVoYXZpb3J9IGZyb20gJy4vcGFwZXItc3Bpbm5lci1iZWhhdmlvci5qcyc7XG5cbmNvbnN0IHRlbXBsYXRlID0gaHRtbGBcbiAgPHN0eWxlIGluY2x1ZGU9XCJwYXBlci1zcGlubmVyLXN0eWxlc1wiPjwvc3R5bGU+XG5cbiAgPGRpdiBpZD1cInNwaW5uZXJDb250YWluZXJcIiBjbGFzcy1uYW1lPVwiW1tfX2NvbXB1dGVDb250YWluZXJDbGFzc2VzKGFjdGl2ZSwgX19jb29saW5nRG93bildXVwiIG9uLWFuaW1hdGlvbmVuZD1cIl9fcmVzZXRcIiBvbi13ZWJraXQtYW5pbWF0aW9uLWVuZD1cIl9fcmVzZXRcIj5cbiAgICA8ZGl2IGNsYXNzPVwic3Bpbm5lci1sYXllciBsYXllci0xXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiY2lyY2xlLWNsaXBwZXIgbGVmdFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2lyY2xlXCI+PC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjaXJjbGUtY2xpcHBlciByaWdodFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2lyY2xlXCI+PC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cblxuICAgIDxkaXYgY2xhc3M9XCJzcGlubmVyLWxheWVyIGxheWVyLTJcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjaXJjbGUtY2xpcHBlciBsZWZ0XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjaXJjbGVcIj48L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImNpcmNsZS1jbGlwcGVyIHJpZ2h0XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjaXJjbGVcIj48L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuXG4gICAgPGRpdiBjbGFzcz1cInNwaW5uZXItbGF5ZXIgbGF5ZXItM1wiPlxuICAgICAgPGRpdiBjbGFzcz1cImNpcmNsZS1jbGlwcGVyIGxlZnRcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNpcmNsZVwiPjwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiY2lyY2xlLWNsaXBwZXIgcmlnaHRcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNpcmNsZVwiPjwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG5cbiAgICA8ZGl2IGNsYXNzPVwic3Bpbm5lci1sYXllciBsYXllci00XCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiY2lyY2xlLWNsaXBwZXIgbGVmdFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2lyY2xlXCI+PC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjaXJjbGUtY2xpcHBlciByaWdodFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2lyY2xlXCI+PC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG5gO1xudGVtcGxhdGUuc2V0QXR0cmlidXRlKCdzdHJpcC13aGl0ZXNwYWNlJywgJycpO1xuXG4vKipcbk1hdGVyaWFsIGRlc2lnbjogW1Byb2dyZXNzICZcbmFjdGl2aXR5XShodHRwczovL3d3dy5nb29nbGUuY29tL2Rlc2lnbi9zcGVjL2NvbXBvbmVudHMvcHJvZ3Jlc3MtYWN0aXZpdHkuaHRtbClcblxuRWxlbWVudCBwcm92aWRpbmcgYSBtdWx0aXBsZSBjb2xvciBtYXRlcmlhbCBkZXNpZ24gY2lyY3VsYXIgc3Bpbm5lci5cblxuICAgIDxwYXBlci1zcGlubmVyIGFjdGl2ZT48L3BhcGVyLXNwaW5uZXI+XG5cblRoZSBkZWZhdWx0IHNwaW5uZXIgY3ljbGVzIGJldHdlZW4gZm91ciBsYXllcnMgb2YgY29sb3JzOyBieSBkZWZhdWx0IHRoZXkgYXJlXG5ibHVlLCByZWQsIHllbGxvdyBhbmQgZ3JlZW4uIEl0IGNhbiBiZSBjdXN0b21pemVkIHRvIGN5Y2xlIGJldHdlZW4gZm91clxuZGlmZmVyZW50IGNvbG9ycy4gVXNlIDxwYXBlci1zcGlubmVyLWxpdGU+IGZvciBzaW5nbGUgY29sb3Igc3Bpbm5lcnMuXG5cbiMjIyBBY2Nlc3NpYmlsaXR5XG5cbkFsdCBhdHRyaWJ1dGUgc2hvdWxkIGJlIHNldCB0byBwcm92aWRlIGFkZXF1YXRlIGNvbnRleHQgZm9yIGFjY2Vzc2liaWxpdHkuIElmXG5ub3QgcHJvdmlkZWQsIGl0IGRlZmF1bHRzIHRvICdsb2FkaW5nJy4gRW1wdHkgYWx0IGNhbiBiZSBwcm92aWRlZCB0byBtYXJrIHRoZVxuZWxlbWVudCBhcyBkZWNvcmF0aXZlIGlmIGFsdGVybmF0aXZlIGNvbnRlbnQgaXMgcHJvdmlkZWQgaW4gYW5vdGhlciBmb3JtIChlLmcuIGFcbnRleHQgYmxvY2sgZm9sbG93aW5nIHRoZSBzcGlubmVyKS5cblxuICAgIDxwYXBlci1zcGlubmVyIGFsdD1cIkxvYWRpbmcgY29udGFjdHMgbGlzdFwiIGFjdGl2ZT48L3BhcGVyLXNwaW5uZXI+XG5cbiMjIyBTdHlsaW5nXG5cblRoZSBmb2xsb3dpbmcgY3VzdG9tIHByb3BlcnRpZXMgYW5kIG1peGlucyBhcmUgYXZhaWxhYmxlIGZvciBzdHlsaW5nOlxuXG5DdXN0b20gcHJvcGVydHkgfCBEZXNjcmlwdGlvbiB8IERlZmF1bHRcbi0tLS0tLS0tLS0tLS0tLS18LS0tLS0tLS0tLS0tLXwtLS0tLS0tLS0tXG5gLS1wYXBlci1zcGlubmVyLWxheWVyLTEtY29sb3JgIHwgQ29sb3Igb2YgdGhlIGZpcnN0IHNwaW5uZXIgcm90YXRpb24gfCBgLS1nb29nbGUtYmx1ZS01MDBgXG5gLS1wYXBlci1zcGlubmVyLWxheWVyLTItY29sb3JgIHwgQ29sb3Igb2YgdGhlIHNlY29uZCBzcGlubmVyIHJvdGF0aW9uIHwgYC0tZ29vZ2xlLXJlZC01MDBgXG5gLS1wYXBlci1zcGlubmVyLWxheWVyLTMtY29sb3JgIHwgQ29sb3Igb2YgdGhlIHRoaXJkIHNwaW5uZXIgcm90YXRpb24gfCBgLS1nb29nbGUteWVsbG93LTUwMGBcbmAtLXBhcGVyLXNwaW5uZXItbGF5ZXItNC1jb2xvcmAgfCBDb2xvciBvZiB0aGUgZm91cnRoIHNwaW5uZXIgcm90YXRpb24gfCBgLS1nb29nbGUtZ3JlZW4tNTAwYFxuYC0tcGFwZXItc3Bpbm5lci1zdHJva2Utd2lkdGhgIHwgVGhlIHdpZHRoIG9mIHRoZSBzcGlubmVyIHN0cm9rZSB8IDNweFxuXG5AZ3JvdXAgUGFwZXIgRWxlbWVudHNcbkBlbGVtZW50IHBhcGVyLXNwaW5uZXJcbkBoZXJvIGhlcm8uc3ZnXG5AZGVtbyBkZW1vL2luZGV4Lmh0bWxcbiovXG5Qb2x5bWVyKHtcbiAgX3RlbXBsYXRlOiB0ZW1wbGF0ZSxcblxuICBpczogJ3BhcGVyLXNwaW5uZXInLFxuXG4gIGJlaGF2aW9yczogW1BhcGVyU3Bpbm5lckJlaGF2aW9yXVxufSk7XG4iLCJpbXBvcnQge1xuICBjc3MsXG4gIENTU1Jlc3VsdCxcbiAgaHRtbCxcbiAgTGl0RWxlbWVudCxcbiAgcHJvcGVydHksXG4gIFRlbXBsYXRlUmVzdWx0LFxufSBmcm9tIFwibGl0LWVsZW1lbnRcIjtcblxuY2xhc3MgSGFDYXJkIGV4dGVuZHMgTGl0RWxlbWVudCB7XG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyBoZWFkZXI/OiBzdHJpbmc7XG5cbiAgc3RhdGljIGdldCBzdHlsZXMoKTogQ1NTUmVzdWx0IHtcbiAgICByZXR1cm4gY3NzYFxuICAgICAgOmhvc3Qge1xuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoXG4gICAgICAgICAgLS1oYS1jYXJkLWJhY2tncm91bmQsXG4gICAgICAgICAgdmFyKC0tcGFwZXItY2FyZC1iYWNrZ3JvdW5kLWNvbG9yLCB3aGl0ZSlcbiAgICAgICAgKTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogdmFyKC0taGEtY2FyZC1ib3JkZXItcmFkaXVzLCAycHgpO1xuICAgICAgICBib3gtc2hhZG93OiB2YXIoXG4gICAgICAgICAgLS1oYS1jYXJkLWJveC1zaGFkb3csXG4gICAgICAgICAgMCAycHggMnB4IDAgcmdiYSgwLCAwLCAwLCAwLjE0KSxcbiAgICAgICAgICAwIDFweCA1cHggMCByZ2JhKDAsIDAsIDAsIDAuMTIpLFxuICAgICAgICAgIDAgM3B4IDFweCAtMnB4IHJnYmEoMCwgMCwgMCwgMC4yKVxuICAgICAgICApO1xuICAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS10ZXh0LWNvbG9yKTtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2Utb3V0O1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICB9XG5cbiAgICAgIC5jYXJkLWhlYWRlcixcbiAgICAgIDpob3N0IDo6c2xvdHRlZCguY2FyZC1oZWFkZXIpIHtcbiAgICAgICAgY29sb3I6IHZhcigtLWhhLWNhcmQtaGVhZGVyLWNvbG9yLCAtLXByaW1hcnktdGV4dC1jb2xvcik7XG4gICAgICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1oYS1jYXJkLWhlYWRlci1mb250LWZhbWlseSwgaW5oZXJpdCk7XG4gICAgICAgIGZvbnQtc2l6ZTogdmFyKC0taGEtY2FyZC1oZWFkZXItZm9udC1zaXplLCAyNHB4KTtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjAxMmVtO1xuICAgICAgICBsaW5lLWhlaWdodDogMzJweDtcbiAgICAgICAgcGFkZGluZzogMjRweCAxNnB4IDE2cHg7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgfVxuXG4gICAgICA6aG9zdCA6OnNsb3R0ZWQoLmNhcmQtY29udGVudDpub3QoOmZpcnN0LWNoaWxkKSksXG4gICAgICBzbG90Om5vdCg6Zmlyc3QtY2hpbGQpOjpzbG90dGVkKC5jYXJkLWNvbnRlbnQpIHtcbiAgICAgICAgcGFkZGluZy10b3A6IDBweDtcbiAgICAgICAgbWFyZ2luLXRvcDogLThweDtcbiAgICAgIH1cblxuICAgICAgOmhvc3QgOjpzbG90dGVkKC5jYXJkLWNvbnRlbnQpIHtcbiAgICAgICAgcGFkZGluZzogMTZweDtcbiAgICAgIH1cblxuICAgICAgOmhvc3QgOjpzbG90dGVkKC5jYXJkLWFjdGlvbnMpIHtcbiAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlOGU4ZTg7XG4gICAgICAgIHBhZGRpbmc6IDVweCAxNnB4O1xuICAgICAgfVxuICAgIGA7XG4gIH1cblxuICBwcm90ZWN0ZWQgcmVuZGVyKCk6IFRlbXBsYXRlUmVzdWx0IHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICAgICR7dGhpcy5oZWFkZXJcbiAgICAgICAgPyBodG1sYFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtaGVhZGVyXCI+JHt0aGlzLmhlYWRlcn08L2Rpdj5cbiAgICAgICAgICBgXG4gICAgICAgIDogaHRtbGBgfVxuICAgICAgPHNsb3Q+PC9zbG90PlxuICAgIGA7XG4gIH1cbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwiaGEtY2FyZFwiLCBIYUNhcmQpO1xuIiwiaW1wb3J0IHsgSG9tZUFzc2lzdGFudCB9IGZyb20gXCIuLi90eXBlc1wiO1xuXG5leHBvcnQgaW50ZXJmYWNlIEhvbWVBc3Npc3RhbnRTeXN0ZW1IZWFsdGhJbmZvIHtcbiAgdmVyc2lvbjogc3RyaW5nO1xuICBkZXY6IGJvb2xlYW47XG4gIGhhc3NpbzogYm9vbGVhbjtcbiAgdmlydHVhbGVudjogc3RyaW5nO1xuICBweXRob25fdmVyc2lvbjogc3RyaW5nO1xuICBkb2NrZXI6IGJvb2xlYW47XG4gIGFyY2g6IHN0cmluZztcbiAgdGltZXpvbmU6IHN0cmluZztcbiAgb3NfbmFtZTogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFN5c3RlbUhlYWx0aEluZm8ge1xuICBbZG9tYWluOiBzdHJpbmddOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB8IG51bWJlciB8IGJvb2xlYW4gfTtcbn1cblxuZXhwb3J0IGNvbnN0IGZldGNoU3lzdGVtSGVhbHRoSW5mbyA9IChcbiAgaGFzczogSG9tZUFzc2lzdGFudFxuKTogUHJvbWlzZTxTeXN0ZW1IZWFsdGhJbmZvPiA9PlxuICBoYXNzLmNhbGxXUyh7XG4gICAgdHlwZTogXCJzeXN0ZW1faGVhbHRoL2luZm9cIixcbiAgfSk7XG4iLCJpbXBvcnQge1xuICBMaXRFbGVtZW50LFxuICBodG1sLFxuICBDU1NSZXN1bHQsXG4gIGNzcyxcbiAgVGVtcGxhdGVSZXN1bHQsXG4gIHByb3BlcnR5LFxufSBmcm9tIFwibGl0LWVsZW1lbnRcIjtcblxuaW1wb3J0IHsgSG9tZUFzc2lzdGFudCB9IGZyb20gXCIuLi8uLi8uLi90eXBlc1wiO1xuaW1wb3J0IHsgaGFTdHlsZSB9IGZyb20gXCIuLi8uLi8uLi9yZXNvdXJjZXMvc3R5bGVzXCI7XG5cbmltcG9ydCBcIi4vc3lzdGVtLWhlYWx0aC1jYXJkXCI7XG5cbmNvbnN0IEpTX1RZUEUgPSBfX0JVSUxEX187XG5jb25zdCBKU19WRVJTSU9OID0gX19WRVJTSU9OX187XG5jb25zdCBPUFRfSU5fUEFORUwgPSBcInN0YXRlc1wiO1xuXG5jbGFzcyBIYVBhbmVsRGV2SW5mbyBleHRlbmRzIExpdEVsZW1lbnQge1xuICBAcHJvcGVydHkoKSBwdWJsaWMgaGFzcyE6IEhvbWVBc3Npc3RhbnQ7XG5cbiAgcHJvdGVjdGVkIHJlbmRlcigpOiBUZW1wbGF0ZVJlc3VsdCB8IHZvaWQge1xuICAgIGNvbnN0IGhhc3MgPSB0aGlzLmhhc3M7XG4gICAgY29uc3QgY3VzdG9tVWlMaXN0OiBBcnJheTx7IG5hbWU6IHN0cmluZzsgdXJsOiBzdHJpbmc7IHZlcnNpb246IHN0cmluZyB9PiA9XG4gICAgICAod2luZG93IGFzIGFueSkuQ1VTVE9NX1VJX0xJU1QgfHwgW107XG5cbiAgICBjb25zdCBub25EZWZhdWx0TGluayA9XG4gICAgICBsb2NhbFN0b3JhZ2UuZGVmYXVsdFBhZ2UgPT09IE9QVF9JTl9QQU5FTCAmJiBPUFRfSU5fUEFORUwgPT09IFwic3RhdGVzXCJcbiAgICAgICAgPyBcIi9sb3ZlbGFjZVwiXG4gICAgICAgIDogXCIvc3RhdGVzXCI7XG5cbiAgICBjb25zdCBub25EZWZhdWx0TGlua1RleHQgPVxuICAgICAgbG9jYWxTdG9yYWdlLmRlZmF1bHRQYWdlID09PSBPUFRfSU5fUEFORUwgJiYgT1BUX0lOX1BBTkVMID09PSBcInN0YXRlc1wiXG4gICAgICAgID8gXCJHbyB0byB0aGUgTG92ZWxhY2UgVUlcIlxuICAgICAgICA6IFwiR28gdG8gdGhlIHN0YXRlcyBVSVwiO1xuXG4gICAgY29uc3QgZGVmYXVsdFBhZ2VUZXh0ID0gYCR7XG4gICAgICBsb2NhbFN0b3JhZ2UuZGVmYXVsdFBhZ2UgPT09IE9QVF9JTl9QQU5FTCA/IFwiUmVtb3ZlXCIgOiBcIlNldFwiXG4gICAgfSAke09QVF9JTl9QQU5FTH0gYXMgZGVmYXVsdCBwYWdlIG9uIHRoaXMgZGV2aWNlYDtcblxuICAgIHJldHVybiBodG1sYFxuICAgICAgPGRpdiBjbGFzcz1cImFib3V0XCI+XG4gICAgICAgIDxwIGNsYXNzPVwidmVyc2lvblwiPlxuICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3d3dy5ob21lLWFzc2lzdGFudC5pb1wiIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICA+PGltZ1xuICAgICAgICAgICAgICBzcmM9XCIvc3RhdGljL2ljb25zL2Zhdmljb24tMTkyeDE5Mi5wbmdcIlxuICAgICAgICAgICAgICBoZWlnaHQ9XCIxOTJcIlxuICAgICAgICAgICAgICBhbHQ9XCLniaflhbvniqwgbG9nb1wiXG4gICAgICAgICAgLz48L2E+XG4gICAgICAgICAgPGJyIC8+XG4gICAgICAgICAg54mn5YW754qsPGJyIC8+XG4gICAgICAgICAgJHtoYXNzLmNvbmZpZy52ZXJzaW9ufVxuICAgICAgICA8L3A+XG4gICAgICAgIDxwPlxuICAgICAgICAgIFBhdGggdG8gY29uZmlndXJhdGlvbi55YW1sOiAke2hhc3MuY29uZmlnLmNvbmZpZ19kaXJ9XG4gICAgICAgIDwvcD5cbiAgICAgICAgPHAgY2xhc3M9XCJkZXZlbG9wXCI+XG4gICAgICAgICAgPGFcbiAgICAgICAgICAgIGhyZWY9XCJodHRwczovL3d3dy5ob21lLWFzc2lzdGFudC5pby9kZXZlbG9wZXJzL2NyZWRpdHMvXCJcbiAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgRGV2ZWxvcGVkIGJ5IGEgYnVuY2ggb2YgYXdlc29tZSBwZW9wbGUuXG4gICAgICAgICAgPC9hPlxuICAgICAgICA8L3A+XG4gICAgICAgIDxwPlxuICAgICAgICAgIFB1Ymxpc2hlZCB1bmRlciB0aGUgQXBhY2hlIDIuMCBsaWNlbnNlPGJyIC8+XG4gICAgICAgICAgU291cmNlOlxuICAgICAgICAgIDxhXG4gICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL2hvbWUtYXNzaXN0YW50L2hvbWUtYXNzaXN0YW50XCJcbiAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICA+c2VydmVyPC9hXG4gICAgICAgICAgPlxuICAgICAgICAgICZtZGFzaDtcbiAgICAgICAgICA8YVxuICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9ob21lLWFzc2lzdGFudC9ob21lLWFzc2lzdGFudC1wb2x5bWVyXCJcbiAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICA+ZnJvbnRlbmQtdWk8L2FcbiAgICAgICAgICA+XG4gICAgICAgIDwvcD5cbiAgICAgICAgPHA+XG4gICAgICAgICAgQnVpbHQgdXNpbmdcbiAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly93d3cucHl0aG9uLm9yZ1wiPlB5dGhvbiAzPC9hPixcbiAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly93d3cucG9seW1lci1wcm9qZWN0Lm9yZ1wiIHRhcmdldD1cIl9ibGFua1wiPlBvbHltZXI8L2E+LFxuICAgICAgICAgIEljb25zIGJ5XG4gICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vd3d3Lmdvb2dsZS5jb20vZGVzaWduL2ljb25zL1wiIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICA+R29vZ2xlPC9hXG4gICAgICAgICAgPlxuICAgICAgICAgIGFuZFxuICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL01hdGVyaWFsRGVzaWduSWNvbnMuY29tXCIgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgID5NYXRlcmlhbERlc2lnbkljb25zLmNvbTwvYVxuICAgICAgICAgID4uXG4gICAgICAgIDwvcD5cbiAgICAgICAgPHA+XG4gICAgICAgICAgRnJvbnRlbmQgdmVyc2lvbjogJHtKU19WRVJTSU9OfSAtICR7SlNfVFlQRX1cbiAgICAgICAgICAke2N1c3RvbVVpTGlzdC5sZW5ndGggPiAwXG4gICAgICAgICAgICA/IGh0bWxgXG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgIEN1c3RvbSBVSXM6XG4gICAgICAgICAgICAgICAgICAke2N1c3RvbVVpTGlzdC5tYXAoXG4gICAgICAgICAgICAgICAgICAgIChpdGVtKSA9PiBodG1sYFxuICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiJHtpdGVtLnVybH1cIiB0YXJnZXQ9XCJfYmxhbmtcIj4gJHtpdGVtLm5hbWV9PC9hPjpcbiAgICAgICAgICAgICAgICAgICAgICAgICR7aXRlbS52ZXJzaW9ufVxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICBgXG4gICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICBgXG4gICAgICAgICAgICA6IFwiXCJ9XG4gICAgICAgIDwvcD5cbiAgICAgICAgPHA+XG4gICAgICAgICAgPGEgaHJlZj1cIiR7bm9uRGVmYXVsdExpbmt9XCI+JHtub25EZWZhdWx0TGlua1RleHR9PC9hPjxiciAvPlxuICAgICAgICAgIDxhIGhyZWY9XCIjXCIgQGNsaWNrPVwiJHt0aGlzLl90b2dnbGVEZWZhdWx0UGFnZX1cIj4ke2RlZmF1bHRQYWdlVGV4dH08L2FcbiAgICAgICAgICA+PGJyIC8+XG4gICAgICAgIDwvcD5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImNvbnRlbnRcIj5cbiAgICAgICAgPHN5c3RlbS1oZWFsdGgtY2FyZCAuaGFzcz0ke3RoaXMuaGFzc30+PC9zeXN0ZW0taGVhbHRoLWNhcmQ+XG4gICAgICA8L2Rpdj5cbiAgICBgO1xuICB9XG5cbiAgcHJvdGVjdGVkIGZpcnN0VXBkYXRlZChjaGFuZ2VkUHJvcHMpOiB2b2lkIHtcbiAgICBzdXBlci5maXJzdFVwZGF0ZWQoY2hhbmdlZFByb3BzKTtcblxuICAgIC8vIExlZ2FjeSBjdXN0b20gVUkgY2FuIGJlIHNsb3cgdG8gcmVnaXN0ZXIsIGdpdmUgdGhlbSB0aW1lLlxuICAgIGNvbnN0IGN1c3RvbVVJID0gKCh3aW5kb3cgYXMgYW55KS5DVVNUT01fVUlfTElTVCB8fCBbXSkubGVuZ3RoO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgaWYgKCgod2luZG93IGFzIGFueSkuQ1VTVE9NX1VJX0xJU1QgfHwgW10pLmxlbmd0aCAhPT0gY3VzdG9tVUkubGVuZ3RoKSB7XG4gICAgICAgIHRoaXMucmVxdWVzdFVwZGF0ZSgpO1xuICAgICAgfVxuICAgIH0sIDEwMDApO1xuICB9XG5cbiAgcHJvdGVjdGVkIF90b2dnbGVEZWZhdWx0UGFnZSgpOiB2b2lkIHtcbiAgICBpZiAobG9jYWxTdG9yYWdlLmRlZmF1bHRQYWdlID09PSBPUFRfSU5fUEFORUwpIHtcbiAgICAgIGRlbGV0ZSBsb2NhbFN0b3JhZ2UuZGVmYXVsdFBhZ2U7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxvY2FsU3RvcmFnZS5kZWZhdWx0UGFnZSA9IE9QVF9JTl9QQU5FTDtcbiAgICB9XG4gICAgdGhpcy5yZXF1ZXN0VXBkYXRlKCk7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHN0eWxlcygpOiBDU1NSZXN1bHRbXSB7XG4gICAgcmV0dXJuIFtcbiAgICAgIGhhU3R5bGUsXG4gICAgICBjc3NgXG4gICAgICAgIDpob3N0IHtcbiAgICAgICAgICAtbXMtdXNlci1zZWxlY3Q6IGluaXRpYWw7XG4gICAgICAgICAgLXdlYmtpdC11c2VyLXNlbGVjdDogaW5pdGlhbDtcbiAgICAgICAgICAtbW96LXVzZXItc2VsZWN0OiBpbml0aWFsO1xuICAgICAgICB9XG5cbiAgICAgICAgLmNvbnRlbnQge1xuICAgICAgICAgIGRpcmVjdGlvbjogbHRyO1xuICAgICAgICB9XG5cbiAgICAgICAgLmFib3V0IHtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDJlbTtcbiAgICAgICAgfVxuXG4gICAgICAgIC52ZXJzaW9uIHtcbiAgICAgICAgICBAYXBwbHkgLS1wYXBlci1mb250LWhlYWRsaW5lO1xuICAgICAgICB9XG5cbiAgICAgICAgLmRldmVsb3Age1xuICAgICAgICAgIEBhcHBseSAtLXBhcGVyLWZvbnQtc3ViaGVhZDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5hYm91dCBhIHtcbiAgICAgICAgICBjb2xvcjogdmFyKC0tZGFyay1wcmltYXJ5LWNvbG9yKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHN5c3RlbS1oZWFsdGgtY2FyZCB7XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgbWF4LXdpZHRoOiA2MDBweDtcbiAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTZweDtcbiAgICAgICAgfVxuICAgICAgYCxcbiAgICBdO1xuICB9XG59XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIEhUTUxFbGVtZW50VGFnTmFtZU1hcCB7XG4gICAgXCJkZXZlbG9wZXItdG9vbHMtaW5mb1wiOiBIYVBhbmVsRGV2SW5mbztcbiAgfVxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJkZXZlbG9wZXItdG9vbHMtaW5mb1wiLCBIYVBhbmVsRGV2SW5mbyk7XG4iLCJpbXBvcnQge1xuICBMaXRFbGVtZW50LFxuICBodG1sLFxuICBDU1NSZXN1bHQsXG4gIGNzcyxcbiAgUHJvcGVydHlEZWNsYXJhdGlvbnMsXG4gIFRlbXBsYXRlUmVzdWx0LFxufSBmcm9tIFwibGl0LWVsZW1lbnRcIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLXNwaW5uZXIvcGFwZXItc3Bpbm5lclwiO1xuaW1wb3J0IFwiLi4vLi4vLi4vY29tcG9uZW50cy9oYS1jYXJkXCI7XG5cbmltcG9ydCB7IEhvbWVBc3Npc3RhbnQgfSBmcm9tIFwiLi4vLi4vLi4vdHlwZXNcIjtcbmltcG9ydCB7XG4gIFN5c3RlbUhlYWx0aEluZm8sXG4gIGZldGNoU3lzdGVtSGVhbHRoSW5mbyxcbn0gZnJvbSBcIi4uLy4uLy4uL2RhdGEvc3lzdGVtX2hlYWx0aFwiO1xuXG5jb25zdCBzb3J0S2V5cyA9IChhOiBzdHJpbmcsIGI6IHN0cmluZykgPT4ge1xuICBpZiAoYSA9PT0gXCJob21lYXNzaXN0YW50XCIpIHtcbiAgICByZXR1cm4gLTE7XG4gIH1cbiAgaWYgKGIgPT09IFwiaG9tZWFzc2lzdGFudFwiKSB7XG4gICAgcmV0dXJuIDE7XG4gIH1cbiAgaWYgKGEgPCBiKSB7XG4gICAgcmV0dXJuIC0xO1xuICB9XG4gIGlmIChiIDwgYSkge1xuICAgIHJldHVybiAxO1xuICB9XG4gIHJldHVybiAwO1xufTtcblxuY2xhc3MgU3lzdGVtSGVhbHRoQ2FyZCBleHRlbmRzIExpdEVsZW1lbnQge1xuICBwdWJsaWMgaGFzcz86IEhvbWVBc3Npc3RhbnQ7XG4gIHByaXZhdGUgX2luZm8/OiBTeXN0ZW1IZWFsdGhJbmZvO1xuXG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpOiBQcm9wZXJ0eURlY2xhcmF0aW9ucyB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGhhc3M6IHt9LFxuICAgICAgX2luZm86IHt9LFxuICAgIH07XG4gIH1cblxuICBwcm90ZWN0ZWQgcmVuZGVyKCk6IFRlbXBsYXRlUmVzdWx0IHwgdm9pZCB7XG4gICAgaWYgKCF0aGlzLmhhc3MpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3Qgc2VjdGlvbnM6IFRlbXBsYXRlUmVzdWx0W10gPSBbXTtcblxuICAgIGlmICghdGhpcy5faW5mbykge1xuICAgICAgc2VjdGlvbnMucHVzaChcbiAgICAgICAgaHRtbGBcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwibG9hZGluZy1jb250YWluZXJcIj5cbiAgICAgICAgICAgIDxwYXBlci1zcGlubmVyIGFjdGl2ZT48L3BhcGVyLXNwaW5uZXI+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIGBcbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGRvbWFpbnMgPSBPYmplY3Qua2V5cyh0aGlzLl9pbmZvKS5zb3J0KHNvcnRLZXlzKTtcbiAgICAgIGZvciAoY29uc3QgZG9tYWluIG9mIGRvbWFpbnMpIHtcbiAgICAgICAgY29uc3Qga2V5czogVGVtcGxhdGVSZXN1bHRbXSA9IFtdO1xuXG4gICAgICAgIGZvciAoY29uc3Qga2V5IG9mIE9iamVjdC5rZXlzKHRoaXMuX2luZm9bZG9tYWluXSkuc29ydCgpKSB7XG4gICAgICAgICAga2V5cy5wdXNoKGh0bWxgXG4gICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgIDx0ZD4ke2tleX08L3RkPlxuICAgICAgICAgICAgICA8dGQ+JHt0aGlzLl9pbmZvW2RvbWFpbl1ba2V5XX08L3RkPlxuICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICBgKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZG9tYWluICE9PSBcImhvbWVhc3Npc3RhbnRcIikge1xuICAgICAgICAgIHNlY3Rpb25zLnB1c2goXG4gICAgICAgICAgICBodG1sYFxuICAgICAgICAgICAgICA8aDM+JHt0aGlzLmhhc3MubG9jYWxpemUoYGRvbWFpbi4ke2RvbWFpbn1gKSB8fCBkb21haW59PC9oMz5cbiAgICAgICAgICAgIGBcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIHNlY3Rpb25zLnB1c2goaHRtbGBcbiAgICAgICAgICA8dGFibGU+XG4gICAgICAgICAgICAke2tleXN9XG4gICAgICAgICAgPC90YWJsZT5cbiAgICAgICAgYCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8aGEtY2FyZCBoZWFkZXI9XCJTeXN0ZW0gSGVhbHRoXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWNvbnRlbnRcIj4ke3NlY3Rpb25zfTwvZGl2PlxuICAgICAgPC9oYS1jYXJkPlxuICAgIGA7XG4gIH1cblxuICBwcm90ZWN0ZWQgZmlyc3RVcGRhdGVkKGNoYW5nZWRQcm9wcykge1xuICAgIHN1cGVyLmZpcnN0VXBkYXRlZChjaGFuZ2VkUHJvcHMpO1xuICAgIHRoaXMuX2ZldGNoSW5mbygpO1xuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBfZmV0Y2hJbmZvKCkge1xuICAgIHRyeSB7XG4gICAgICBpZiAoIXRoaXMuaGFzcyEuY29uZmlnLmNvbXBvbmVudHMuaW5jbHVkZXMoXCJzeXN0ZW1faGVhbHRoXCIpKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcigpO1xuICAgICAgfVxuICAgICAgdGhpcy5faW5mbyA9IGF3YWl0IGZldGNoU3lzdGVtSGVhbHRoSW5mbyh0aGlzLmhhc3MhKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHRoaXMuX2luZm8gPSB7XG4gICAgICAgIHN5c3RlbV9oZWFsdGg6IHtcbiAgICAgICAgICBlcnJvcjpcbiAgICAgICAgICAgIFwiU3lzdGVtIEhlYWx0aCBjb21wb25lbnQgaXMgbm90IGxvYWRlZC4gQWRkICdzeXN0ZW1faGVhbHRoOicgdG8gY29uZmlndXJhdGlvbi55YW1sXCIsXG4gICAgICAgIH0sXG4gICAgICB9O1xuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBnZXQgc3R5bGVzKCk6IENTU1Jlc3VsdCB7XG4gICAgcmV0dXJuIGNzc2BcbiAgICAgIHRhYmxlIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICB9XG5cbiAgICAgIHRkOmZpcnN0LWNoaWxkIHtcbiAgICAgICAgd2lkdGg6IDMzJTtcbiAgICAgIH1cblxuICAgICAgLmxvYWRpbmctY29udGFpbmVyIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICB9XG4gICAgYDtcbiAgfVxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJzeXN0ZW0taGVhbHRoLWNhcmRcIiwgU3lzdGVtSGVhbHRoQ2FyZCk7XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7O0FBVUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUF5Q0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBc0NBO0FBQ0E7QUFFQTtBQUVBO0FBTEE7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwR0E7QUFTQTtBQUFBO0FBQUE7O0FBNkRBO0FBMURBO0FBQUE7QUFDQTtBQTZDQTs7O0FBQUE7QUFFQTtBQUNBO0FBS0E7QUFIQTtBQU1BO0FBM0RBO0FBQUE7QUFBQTtBQTREQTtBQUFBO0FBRUE7Ozs7Ozs7Ozs7Ozs7O0FDdERBO0FBQUE7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUZBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckJBO0FBVUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFBQTs7QUFxS0E7QUFsS0E7QUFDQTtBQUNBO0FBR0E7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFJQTtBQW9FQTtBQWJBO0FBVUE7QUFlQTtBQUVBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBbUNBO0FBQ0E7OztBQUFBO0FBbktBO0FBQUE7QUFBQTtBQW9LQTtBQUFBO0FBUUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQy9MQTtBQVFBO0FBQ0E7QUFHQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFBQTs7QUFrR0E7QUE5RkE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFPQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFNQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBS0E7QUFDQTtBQUVBO0FBS0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTs7QUFBQTs7OztBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7Ozs7OztBQUVBO0FBRUE7QUFBQTtBQUNBO0FBZUE7OztBQUFBO0FBQ0E7QUFBQTtBQUVBOzs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==