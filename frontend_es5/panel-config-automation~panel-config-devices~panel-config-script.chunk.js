(self["webpackJsonp"] = self["webpackJsonp"] || []).push([["panel-config-automation~panel-config-devices~panel-config-script"],{

/***/ "./src/common/string/compare.ts":
/*!**************************************!*\
  !*** ./src/common/string/compare.ts ***!
  \**************************************/
/*! exports provided: compare, caseInsensitiveCompare */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compare", function() { return compare; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "caseInsensitiveCompare", function() { return caseInsensitiveCompare; });
var compare = function (a, b) {
    if (a < b) {
        return -1;
    }
    if (a > b) {
        return 1;
    }
    return 0;
};
var caseInsensitiveCompare = function (a, b) {
    return compare(a.toLowerCase(), b.toLowerCase());
};


/***/ }),

/***/ "./src/common/util/debounce.ts":
/*!*************************************!*\
  !*** ./src/common/util/debounce.ts ***!
  \*************************************/
/*! exports provided: debounce */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "debounce", function() { return debounce; });
// From: https://davidwalsh.name/javascript-debounce-function
// Returns a function, that, as long as it continues to be invoked, will not
// be triggered. The function will be called after it stops being called for
// N milliseconds. If `immediate` is passed, trigger the function on the
// leading edge, instead of the trailing.
// tslint:disable-next-line: ban-types
var debounce = function (func, wait, immediate) {
    if (immediate === void 0) { immediate = false; }
    var timeout;
    // @ts-ignore
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        // tslint:disable:no-this-assignment
        // @ts-ignore
        var context = this;
        var later = function () {
            timeout = null;
            if (!immediate) {
                func.apply(context, args);
            }
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) {
            func.apply(context, args);
        }
    };
};


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

/***/ "./src/data/device_automation.ts":
/*!***************************************!*\
  !*** ./src/data/device_automation.ts ***!
  \***************************************/
/*! exports provided: fetchDeviceActions, fetchDeviceConditions, fetchDeviceTriggers, fetchDeviceConditionCapabilities, fetchDeviceTriggerCapabilities, deviceAutomationsEqual, localizeDeviceAutomationAction, localizeDeviceAutomationCondition, localizeDeviceAutomationTrigger */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchDeviceActions", function() { return fetchDeviceActions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchDeviceConditions", function() { return fetchDeviceConditions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchDeviceTriggers", function() { return fetchDeviceTriggers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchDeviceConditionCapabilities", function() { return fetchDeviceConditionCapabilities; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchDeviceTriggerCapabilities", function() { return fetchDeviceTriggerCapabilities; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deviceAutomationsEqual", function() { return deviceAutomationsEqual; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "localizeDeviceAutomationAction", function() { return localizeDeviceAutomationAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "localizeDeviceAutomationCondition", function() { return localizeDeviceAutomationCondition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "localizeDeviceAutomationTrigger", function() { return localizeDeviceAutomationTrigger; });
/* harmony import */ var _common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/entity/compute_state_name */ "./src/common/entity/compute_state_name.ts");

var fetchDeviceActions = function (hass, deviceId) {
    return hass.callWS({
        type: "device_automation/action/list",
        device_id: deviceId,
    });
};
var fetchDeviceConditions = function (hass, deviceId) {
    return hass.callWS({
        type: "device_automation/condition/list",
        device_id: deviceId,
    });
};
var fetchDeviceTriggers = function (hass, deviceId) {
    return hass.callWS({
        type: "device_automation/trigger/list",
        device_id: deviceId,
    });
};
var fetchDeviceConditionCapabilities = function (hass, condition) {
    return hass.callWS({
        type: "device_automation/condition/capabilities",
        condition: condition,
    });
};
var fetchDeviceTriggerCapabilities = function (hass, trigger) {
    return hass.callWS({
        type: "device_automation/trigger/capabilities",
        trigger: trigger,
    });
};
var whitelist = ["above", "below", "for"];
var deviceAutomationsEqual = function (a, b) {
    if (typeof a !== typeof b) {
        return false;
    }
    for (var property in a) {
        if (whitelist.includes(property)) {
            continue;
        }
        if (!Object.is(a[property], b[property])) {
            return false;
        }
    }
    for (var property in b) {
        if (whitelist.includes(property)) {
            continue;
        }
        if (!Object.is(a[property], b[property])) {
            return false;
        }
    }
    return true;
};
var localizeDeviceAutomationAction = function (hass, action) {
    var state = action.entity_id ? hass.states[action.entity_id] : undefined;
    return hass.localize("component." + action.domain + ".device_automation.action_type." + action.type, "entity_name", state ? Object(_common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_0__["computeStateName"])(state) : "<unknown>", "subtype", hass.localize("component." + action.domain + ".device_automation.action_subtype." + action.subtype));
};
var localizeDeviceAutomationCondition = function (hass, condition) {
    var state = condition.entity_id
        ? hass.states[condition.entity_id]
        : undefined;
    return hass.localize("component." + condition.domain + ".device_automation.condition_type." + condition.type, "entity_name", state ? Object(_common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_0__["computeStateName"])(state) : "<unknown>", "subtype", hass.localize("component." + condition.domain + ".device_automation.condition_subtype." + condition.subtype));
};
var localizeDeviceAutomationTrigger = function (hass, trigger) {
    var state = trigger.entity_id ? hass.states[trigger.entity_id] : undefined;
    return hass.localize("component." + trigger.domain + ".device_automation.trigger_type." + trigger.type, "entity_name", state ? Object(_common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_0__["computeStateName"])(state) : "<unknown>", "subtype", hass.localize("component." + trigger.domain + ".device_automation.trigger_subtype." + trigger.subtype));
};


/***/ }),

/***/ "./src/data/device_registry.ts":
/*!*************************************!*\
  !*** ./src/data/device_registry.ts ***!
  \*************************************/
/*! exports provided: updateDeviceRegistryEntry, subscribeDeviceRegistry */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateDeviceRegistryEntry", function() { return updateDeviceRegistryEntry; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subscribeDeviceRegistry", function() { return subscribeDeviceRegistry; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var home_assistant_js_websocket__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! home-assistant-js-websocket */ "./node_modules/home-assistant-js-websocket/dist/haws.es.js");
/* harmony import */ var _common_util_debounce__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/util/debounce */ "./src/common/util/debounce.ts");



var updateDeviceRegistryEntry = function (hass, deviceId, updates) {
    return hass.callWS(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ type: "config/device_registry/update", device_id: deviceId }, updates));
};
var fetchDeviceRegistry = function (conn) {
    return conn.sendMessagePromise({
        type: "config/device_registry/list",
    });
};
var subscribeDeviceRegistryUpdates = function (conn, store) {
    return conn.subscribeEvents(Object(_common_util_debounce__WEBPACK_IMPORTED_MODULE_2__["debounce"])(function () {
        return fetchDeviceRegistry(conn).then(function (devices) {
            return store.setState(devices, true);
        });
    }, 500, true), "device_registry_updated");
};
var subscribeDeviceRegistry = function (conn, onChange) {
    return Object(home_assistant_js_websocket__WEBPACK_IMPORTED_MODULE_1__["createCollection"])("_dr", fetchDeviceRegistry, subscribeDeviceRegistryUpdates, conn, onChange);
};


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

/***/ "./src/panels/config/ha-config-section.js":
/*!************************************************!*\
  !*** ./src/panels/config/ha-config-section.js ***!
  \************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _resources_ha_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../resources/ha-style */ "./src/resources/ha-style.ts");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      <style include=\"iron-flex ha-style\">\n        .content {\n          padding: 28px 20px 0;\n          max-width: 1040px;\n          margin: 0 auto;\n        }\n\n        .header {\n          @apply --paper-font-display1;\n          opacity: var(--dark-primary-opacity);\n        }\n\n        .together {\n          margin-top: 32px;\n        }\n\n        .intro {\n          @apply --paper-font-subhead;\n          width: 100%;\n          max-width: 400px;\n          margin-right: 40px;\n          opacity: var(--dark-primary-opacity);\n        }\n\n        .panel {\n          margin-top: -24px;\n        }\n\n        .panel ::slotted(*) {\n          margin-top: 24px;\n          display: block;\n        }\n\n        .narrow.content {\n          max-width: 640px;\n        }\n        .narrow .together {\n          margin-top: 20px;\n        }\n        .narrow .header {\n          @apply --paper-font-headline;\n        }\n        .narrow .intro {\n          font-size: 14px;\n          padding-bottom: 20px;\n          margin-right: 0;\n          max-width: 500px;\n        }\n      </style>\n      <div class$=\"[[computeContentClasses(isWide)]]\">\n        <div class=\"header\"><slot name=\"header\"></slot></div>\n        <div class$=\"[[computeClasses(isWide)]]\">\n          <div class=\"intro\"><slot name=\"introduction\"></slot></div>\n          <div class=\"panel flex-auto\"><slot></slot></div>\n        </div>\n      </div>\n    "]);

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





var HaConfigSection =
/*#__PURE__*/
function (_PolymerElement) {
  _inherits(HaConfigSection, _PolymerElement);

  function HaConfigSection() {
    _classCallCheck(this, HaConfigSection);

    return _possibleConstructorReturn(this, _getPrototypeOf(HaConfigSection).apply(this, arguments));
  }

  _createClass(HaConfigSection, [{
    key: "computeContentClasses",
    value: function computeContentClasses(isWide) {
      var classes = "content ";
      return isWide ? classes : classes + "narrow";
    }
  }, {
    key: "computeClasses",
    value: function computeClasses(isWide) {
      var classes = "together layout ";
      return classes + (isWide ? "horizontal" : "vertical narrow");
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
        narrow: {
          type: Boolean
        },
        isWide: {
          type: Boolean,
          value: false
        }
      };
    }
  }]);

  return HaConfigSection;
}(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_1__["PolymerElement"]);

customElements.define("ha-config-section", HaConfigSection);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFuZWwtY29uZmlnLWF1dG9tYXRpb25+cGFuZWwtY29uZmlnLWRldmljZXN+cGFuZWwtY29uZmlnLXNjcmlwdC5jaHVuay5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9jb21tb24vc3RyaW5nL2NvbXBhcmUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi91dGlsL2RlYm91bmNlLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2hhLWNhcmQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RhdGEvZGV2aWNlX2F1dG9tYXRpb24udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RhdGEvZGV2aWNlX3JlZ2lzdHJ5LnRzIiwid2VicGFjazovLy8uL3NyYy9taXhpbnMvZXZlbnRzLW1peGluLmpzIiwid2VicGFjazovLy8uL3NyYy9wYW5lbHMvY29uZmlnL2hhLWNvbmZpZy1zZWN0aW9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBjb21wYXJlID0gKGE6IHN0cmluZywgYjogc3RyaW5nKSA9PiB7XG4gIGlmIChhIDwgYikge1xuICAgIHJldHVybiAtMTtcbiAgfVxuICBpZiAoYSA+IGIpIHtcbiAgICByZXR1cm4gMTtcbiAgfVxuXG4gIHJldHVybiAwO1xufTtcblxuZXhwb3J0IGNvbnN0IGNhc2VJbnNlbnNpdGl2ZUNvbXBhcmUgPSAoYTogc3RyaW5nLCBiOiBzdHJpbmcpID0+XG4gIGNvbXBhcmUoYS50b0xvd2VyQ2FzZSgpLCBiLnRvTG93ZXJDYXNlKCkpO1xuIiwiLy8gRnJvbTogaHR0cHM6Ly9kYXZpZHdhbHNoLm5hbWUvamF2YXNjcmlwdC1kZWJvdW5jZS1mdW5jdGlvblxuXG4vLyBSZXR1cm5zIGEgZnVuY3Rpb24sIHRoYXQsIGFzIGxvbmcgYXMgaXQgY29udGludWVzIHRvIGJlIGludm9rZWQsIHdpbGwgbm90XG4vLyBiZSB0cmlnZ2VyZWQuIFRoZSBmdW5jdGlvbiB3aWxsIGJlIGNhbGxlZCBhZnRlciBpdCBzdG9wcyBiZWluZyBjYWxsZWQgZm9yXG4vLyBOIG1pbGxpc2Vjb25kcy4gSWYgYGltbWVkaWF0ZWAgaXMgcGFzc2VkLCB0cmlnZ2VyIHRoZSBmdW5jdGlvbiBvbiB0aGVcbi8vIGxlYWRpbmcgZWRnZSwgaW5zdGVhZCBvZiB0aGUgdHJhaWxpbmcuXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IGJhbi10eXBlc1xuZXhwb3J0IGNvbnN0IGRlYm91bmNlID0gPFQgZXh0ZW5kcyBGdW5jdGlvbj4oXG4gIGZ1bmM6IFQsXG4gIHdhaXQsXG4gIGltbWVkaWF0ZSA9IGZhbHNlXG4pOiBUID0+IHtcbiAgbGV0IHRpbWVvdXQ7XG4gIC8vIEB0cy1pZ25vcmVcbiAgcmV0dXJuIGZ1bmN0aW9uKC4uLmFyZ3MpIHtcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZTpuby10aGlzLWFzc2lnbm1lbnRcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgY29uc3QgY29udGV4dCA9IHRoaXM7XG4gICAgY29uc3QgbGF0ZXIgPSAoKSA9PiB7XG4gICAgICB0aW1lb3V0ID0gbnVsbDtcbiAgICAgIGlmICghaW1tZWRpYXRlKSB7XG4gICAgICAgIGZ1bmMuYXBwbHkoY29udGV4dCwgYXJncyk7XG4gICAgICB9XG4gICAgfTtcbiAgICBjb25zdCBjYWxsTm93ID0gaW1tZWRpYXRlICYmICF0aW1lb3V0O1xuICAgIGNsZWFyVGltZW91dCh0aW1lb3V0KTtcbiAgICB0aW1lb3V0ID0gc2V0VGltZW91dChsYXRlciwgd2FpdCk7XG4gICAgaWYgKGNhbGxOb3cpIHtcbiAgICAgIGZ1bmMuYXBwbHkoY29udGV4dCwgYXJncyk7XG4gICAgfVxuICB9O1xufTtcbiIsImltcG9ydCB7XG4gIGNzcyxcbiAgQ1NTUmVzdWx0LFxuICBodG1sLFxuICBMaXRFbGVtZW50LFxuICBwcm9wZXJ0eSxcbiAgVGVtcGxhdGVSZXN1bHQsXG59IGZyb20gXCJsaXQtZWxlbWVudFwiO1xuXG5jbGFzcyBIYUNhcmQgZXh0ZW5kcyBMaXRFbGVtZW50IHtcbiAgQHByb3BlcnR5KCkgcHVibGljIGhlYWRlcj86IHN0cmluZztcblxuICBzdGF0aWMgZ2V0IHN0eWxlcygpOiBDU1NSZXN1bHQge1xuICAgIHJldHVybiBjc3NgXG4gICAgICA6aG9zdCB7XG4gICAgICAgIGJhY2tncm91bmQ6IHZhcihcbiAgICAgICAgICAtLWhhLWNhcmQtYmFja2dyb3VuZCxcbiAgICAgICAgICB2YXIoLS1wYXBlci1jYXJkLWJhY2tncm91bmQtY29sb3IsIHdoaXRlKVxuICAgICAgICApO1xuICAgICAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1oYS1jYXJkLWJvcmRlci1yYWRpdXMsIDJweCk7XG4gICAgICAgIGJveC1zaGFkb3c6IHZhcihcbiAgICAgICAgICAtLWhhLWNhcmQtYm94LXNoYWRvdyxcbiAgICAgICAgICAwIDJweCAycHggMCByZ2JhKDAsIDAsIDAsIDAuMTQpLFxuICAgICAgICAgIDAgMXB4IDVweCAwIHJnYmEoMCwgMCwgMCwgMC4xMiksXG4gICAgICAgICAgMCAzcHggMXB4IC0ycHggcmdiYSgwLCAwLCAwLCAwLjIpXG4gICAgICAgICk7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LXRleHQtY29sb3IpO1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1vdXQ7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIH1cblxuICAgICAgLmNhcmQtaGVhZGVyLFxuICAgICAgOmhvc3QgOjpzbG90dGVkKC5jYXJkLWhlYWRlcikge1xuICAgICAgICBjb2xvcjogdmFyKC0taGEtY2FyZC1oZWFkZXItY29sb3IsIC0tcHJpbWFyeS10ZXh0LWNvbG9yKTtcbiAgICAgICAgZm9udC1mYW1pbHk6IHZhcigtLWhhLWNhcmQtaGVhZGVyLWZvbnQtZmFtaWx5LCBpbmhlcml0KTtcbiAgICAgICAgZm9udC1zaXplOiB2YXIoLS1oYS1jYXJkLWhlYWRlci1mb250LXNpemUsIDI0cHgpO1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogLTAuMDEyZW07XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAzMnB4O1xuICAgICAgICBwYWRkaW5nOiAyNHB4IDE2cHggMTZweDtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICB9XG5cbiAgICAgIDpob3N0IDo6c2xvdHRlZCguY2FyZC1jb250ZW50Om5vdCg6Zmlyc3QtY2hpbGQpKSxcbiAgICAgIHNsb3Q6bm90KDpmaXJzdC1jaGlsZCk6OnNsb3R0ZWQoLmNhcmQtY29udGVudCkge1xuICAgICAgICBwYWRkaW5nLXRvcDogMHB4O1xuICAgICAgICBtYXJnaW4tdG9wOiAtOHB4O1xuICAgICAgfVxuXG4gICAgICA6aG9zdCA6OnNsb3R0ZWQoLmNhcmQtY29udGVudCkge1xuICAgICAgICBwYWRkaW5nOiAxNnB4O1xuICAgICAgfVxuXG4gICAgICA6aG9zdCA6OnNsb3R0ZWQoLmNhcmQtYWN0aW9ucykge1xuICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2U4ZThlODtcbiAgICAgICAgcGFkZGluZzogNXB4IDE2cHg7XG4gICAgICB9XG4gICAgYDtcbiAgfVxuXG4gIHByb3RlY3RlZCByZW5kZXIoKTogVGVtcGxhdGVSZXN1bHQge1xuICAgIHJldHVybiBodG1sYFxuICAgICAgJHt0aGlzLmhlYWRlclxuICAgICAgICA/IGh0bWxgXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1oZWFkZXJcIj4ke3RoaXMuaGVhZGVyfTwvZGl2PlxuICAgICAgICAgIGBcbiAgICAgICAgOiBodG1sYGB9XG4gICAgICA8c2xvdD48L3Nsb3Q+XG4gICAgYDtcbiAgfVxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJoYS1jYXJkXCIsIEhhQ2FyZCk7XG4iLCJpbXBvcnQgeyBIb21lQXNzaXN0YW50IH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5pbXBvcnQgeyBjb21wdXRlU3RhdGVOYW1lIH0gZnJvbSBcIi4uL2NvbW1vbi9lbnRpdHkvY29tcHV0ZV9zdGF0ZV9uYW1lXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRGV2aWNlQXV0b21hdGlvbiB7XG4gIGRldmljZV9pZDogc3RyaW5nO1xuICBkb21haW46IHN0cmluZztcbiAgZW50aXR5X2lkOiBzdHJpbmc7XG4gIHR5cGU/OiBzdHJpbmc7XG4gIHN1YnR5cGU/OiBzdHJpbmc7XG4gIGV2ZW50Pzogc3RyaW5nO1xufVxuXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLWVtcHR5LWludGVyZmFjZVxuZXhwb3J0IGludGVyZmFjZSBEZXZpY2VBY3Rpb24gZXh0ZW5kcyBEZXZpY2VBdXRvbWF0aW9uIHt9XG5cbmV4cG9ydCBpbnRlcmZhY2UgRGV2aWNlQ29uZGl0aW9uIGV4dGVuZHMgRGV2aWNlQXV0b21hdGlvbiB7XG4gIGNvbmRpdGlvbjogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIERldmljZVRyaWdnZXIgZXh0ZW5kcyBEZXZpY2VBdXRvbWF0aW9uIHtcbiAgcGxhdGZvcm06IHN0cmluZztcbn1cblxuZXhwb3J0IGNvbnN0IGZldGNoRGV2aWNlQWN0aW9ucyA9IChoYXNzOiBIb21lQXNzaXN0YW50LCBkZXZpY2VJZDogc3RyaW5nKSA9PlxuICBoYXNzLmNhbGxXUzxEZXZpY2VBY3Rpb25bXT4oe1xuICAgIHR5cGU6IFwiZGV2aWNlX2F1dG9tYXRpb24vYWN0aW9uL2xpc3RcIixcbiAgICBkZXZpY2VfaWQ6IGRldmljZUlkLFxuICB9KTtcblxuZXhwb3J0IGNvbnN0IGZldGNoRGV2aWNlQ29uZGl0aW9ucyA9IChoYXNzOiBIb21lQXNzaXN0YW50LCBkZXZpY2VJZDogc3RyaW5nKSA9PlxuICBoYXNzLmNhbGxXUzxEZXZpY2VDb25kaXRpb25bXT4oe1xuICAgIHR5cGU6IFwiZGV2aWNlX2F1dG9tYXRpb24vY29uZGl0aW9uL2xpc3RcIixcbiAgICBkZXZpY2VfaWQ6IGRldmljZUlkLFxuICB9KTtcblxuZXhwb3J0IGNvbnN0IGZldGNoRGV2aWNlVHJpZ2dlcnMgPSAoaGFzczogSG9tZUFzc2lzdGFudCwgZGV2aWNlSWQ6IHN0cmluZykgPT5cbiAgaGFzcy5jYWxsV1M8RGV2aWNlVHJpZ2dlcltdPih7XG4gICAgdHlwZTogXCJkZXZpY2VfYXV0b21hdGlvbi90cmlnZ2VyL2xpc3RcIixcbiAgICBkZXZpY2VfaWQ6IGRldmljZUlkLFxuICB9KTtcblxuZXhwb3J0IGNvbnN0IGZldGNoRGV2aWNlQ29uZGl0aW9uQ2FwYWJpbGl0aWVzID0gKFxuICBoYXNzOiBIb21lQXNzaXN0YW50LFxuICBjb25kaXRpb246IERldmljZUNvbmRpdGlvblxuKSA9PlxuICBoYXNzLmNhbGxXUzxEZXZpY2VDb25kaXRpb25bXT4oe1xuICAgIHR5cGU6IFwiZGV2aWNlX2F1dG9tYXRpb24vY29uZGl0aW9uL2NhcGFiaWxpdGllc1wiLFxuICAgIGNvbmRpdGlvbixcbiAgfSk7XG5cbmV4cG9ydCBjb25zdCBmZXRjaERldmljZVRyaWdnZXJDYXBhYmlsaXRpZXMgPSAoXG4gIGhhc3M6IEhvbWVBc3Npc3RhbnQsXG4gIHRyaWdnZXI6IERldmljZVRyaWdnZXJcbikgPT5cbiAgaGFzcy5jYWxsV1M8RGV2aWNlVHJpZ2dlcltdPih7XG4gICAgdHlwZTogXCJkZXZpY2VfYXV0b21hdGlvbi90cmlnZ2VyL2NhcGFiaWxpdGllc1wiLFxuICAgIHRyaWdnZXIsXG4gIH0pO1xuXG5jb25zdCB3aGl0ZWxpc3QgPSBbXCJhYm92ZVwiLCBcImJlbG93XCIsIFwiZm9yXCJdO1xuXG5leHBvcnQgY29uc3QgZGV2aWNlQXV0b21hdGlvbnNFcXVhbCA9IChcbiAgYTogRGV2aWNlQXV0b21hdGlvbixcbiAgYjogRGV2aWNlQXV0b21hdGlvblxuKSA9PiB7XG4gIGlmICh0eXBlb2YgYSAhPT0gdHlwZW9mIGIpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBmb3IgKGNvbnN0IHByb3BlcnR5IGluIGEpIHtcbiAgICBpZiAod2hpdGVsaXN0LmluY2x1ZGVzKHByb3BlcnR5KSkge1xuICAgICAgY29udGludWU7XG4gICAgfVxuICAgIGlmICghT2JqZWN0LmlzKGFbcHJvcGVydHldLCBiW3Byb3BlcnR5XSkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbiAgZm9yIChjb25zdCBwcm9wZXJ0eSBpbiBiKSB7XG4gICAgaWYgKHdoaXRlbGlzdC5pbmNsdWRlcyhwcm9wZXJ0eSkpIHtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cbiAgICBpZiAoIU9iamVjdC5pcyhhW3Byb3BlcnR5XSwgYltwcm9wZXJ0eV0pKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59O1xuXG5leHBvcnQgY29uc3QgbG9jYWxpemVEZXZpY2VBdXRvbWF0aW9uQWN0aW9uID0gKFxuICBoYXNzOiBIb21lQXNzaXN0YW50LFxuICBhY3Rpb246IERldmljZUFjdGlvblxuKSA9PiB7XG4gIGNvbnN0IHN0YXRlID0gYWN0aW9uLmVudGl0eV9pZCA/IGhhc3Muc3RhdGVzW2FjdGlvbi5lbnRpdHlfaWRdIDogdW5kZWZpbmVkO1xuICByZXR1cm4gaGFzcy5sb2NhbGl6ZShcbiAgICBgY29tcG9uZW50LiR7YWN0aW9uLmRvbWFpbn0uZGV2aWNlX2F1dG9tYXRpb24uYWN0aW9uX3R5cGUuJHthY3Rpb24udHlwZX1gLFxuICAgIFwiZW50aXR5X25hbWVcIixcbiAgICBzdGF0ZSA/IGNvbXB1dGVTdGF0ZU5hbWUoc3RhdGUpIDogXCI8dW5rbm93bj5cIixcbiAgICBcInN1YnR5cGVcIixcbiAgICBoYXNzLmxvY2FsaXplKFxuICAgICAgYGNvbXBvbmVudC4ke2FjdGlvbi5kb21haW59LmRldmljZV9hdXRvbWF0aW9uLmFjdGlvbl9zdWJ0eXBlLiR7XG4gICAgICAgIGFjdGlvbi5zdWJ0eXBlXG4gICAgICB9YFxuICAgIClcbiAgKTtcbn07XG5cbmV4cG9ydCBjb25zdCBsb2NhbGl6ZURldmljZUF1dG9tYXRpb25Db25kaXRpb24gPSAoXG4gIGhhc3M6IEhvbWVBc3Npc3RhbnQsXG4gIGNvbmRpdGlvbjogRGV2aWNlQ29uZGl0aW9uXG4pID0+IHtcbiAgY29uc3Qgc3RhdGUgPSBjb25kaXRpb24uZW50aXR5X2lkXG4gICAgPyBoYXNzLnN0YXRlc1tjb25kaXRpb24uZW50aXR5X2lkXVxuICAgIDogdW5kZWZpbmVkO1xuICByZXR1cm4gaGFzcy5sb2NhbGl6ZShcbiAgICBgY29tcG9uZW50LiR7Y29uZGl0aW9uLmRvbWFpbn0uZGV2aWNlX2F1dG9tYXRpb24uY29uZGl0aW9uX3R5cGUuJHtcbiAgICAgIGNvbmRpdGlvbi50eXBlXG4gICAgfWAsXG4gICAgXCJlbnRpdHlfbmFtZVwiLFxuICAgIHN0YXRlID8gY29tcHV0ZVN0YXRlTmFtZShzdGF0ZSkgOiBcIjx1bmtub3duPlwiLFxuICAgIFwic3VidHlwZVwiLFxuICAgIGhhc3MubG9jYWxpemUoXG4gICAgICBgY29tcG9uZW50LiR7Y29uZGl0aW9uLmRvbWFpbn0uZGV2aWNlX2F1dG9tYXRpb24uY29uZGl0aW9uX3N1YnR5cGUuJHtcbiAgICAgICAgY29uZGl0aW9uLnN1YnR5cGVcbiAgICAgIH1gXG4gICAgKVxuICApO1xufTtcblxuZXhwb3J0IGNvbnN0IGxvY2FsaXplRGV2aWNlQXV0b21hdGlvblRyaWdnZXIgPSAoXG4gIGhhc3M6IEhvbWVBc3Npc3RhbnQsXG4gIHRyaWdnZXI6IERldmljZVRyaWdnZXJcbikgPT4ge1xuICBjb25zdCBzdGF0ZSA9IHRyaWdnZXIuZW50aXR5X2lkID8gaGFzcy5zdGF0ZXNbdHJpZ2dlci5lbnRpdHlfaWRdIDogdW5kZWZpbmVkO1xuICByZXR1cm4gaGFzcy5sb2NhbGl6ZShcbiAgICBgY29tcG9uZW50LiR7dHJpZ2dlci5kb21haW59LmRldmljZV9hdXRvbWF0aW9uLnRyaWdnZXJfdHlwZS4ke1xuICAgICAgdHJpZ2dlci50eXBlXG4gICAgfWAsXG4gICAgXCJlbnRpdHlfbmFtZVwiLFxuICAgIHN0YXRlID8gY29tcHV0ZVN0YXRlTmFtZShzdGF0ZSkgOiBcIjx1bmtub3duPlwiLFxuICAgIFwic3VidHlwZVwiLFxuICAgIGhhc3MubG9jYWxpemUoXG4gICAgICBgY29tcG9uZW50LiR7dHJpZ2dlci5kb21haW59LmRldmljZV9hdXRvbWF0aW9uLnRyaWdnZXJfc3VidHlwZS4ke1xuICAgICAgICB0cmlnZ2VyLnN1YnR5cGVcbiAgICAgIH1gXG4gICAgKVxuICApO1xufTtcbiIsImltcG9ydCB7IEhvbWVBc3Npc3RhbnQgfSBmcm9tIFwiLi4vdHlwZXNcIjtcbmltcG9ydCB7IGNyZWF0ZUNvbGxlY3Rpb24sIENvbm5lY3Rpb24gfSBmcm9tIFwiaG9tZS1hc3Npc3RhbnQtanMtd2Vic29ja2V0XCI7XG5pbXBvcnQgeyBkZWJvdW5jZSB9IGZyb20gXCIuLi9jb21tb24vdXRpbC9kZWJvdW5jZVwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIERldmljZVJlZ2lzdHJ5RW50cnkge1xuICBpZDogc3RyaW5nO1xuICBjb25maWdfZW50cmllczogc3RyaW5nW107XG4gIGNvbm5lY3Rpb25zOiBBcnJheTxbc3RyaW5nLCBzdHJpbmddPjtcbiAgbWFudWZhY3R1cmVyOiBzdHJpbmc7XG4gIG1vZGVsPzogc3RyaW5nO1xuICBuYW1lPzogc3RyaW5nO1xuICBzd192ZXJzaW9uPzogc3RyaW5nO1xuICB2aWFfZGV2aWNlX2lkPzogc3RyaW5nO1xuICBhcmVhX2lkPzogc3RyaW5nO1xuICBuYW1lX2J5X3VzZXI/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRGV2aWNlUmVnaXN0cnlFbnRyeU11dGFibGVQYXJhbXMge1xuICBhcmVhX2lkPzogc3RyaW5nIHwgbnVsbDtcbiAgbmFtZV9ieV91c2VyPzogc3RyaW5nIHwgbnVsbDtcbn1cblxuZXhwb3J0IGNvbnN0IHVwZGF0ZURldmljZVJlZ2lzdHJ5RW50cnkgPSAoXG4gIGhhc3M6IEhvbWVBc3Npc3RhbnQsXG4gIGRldmljZUlkOiBzdHJpbmcsXG4gIHVwZGF0ZXM6IFBhcnRpYWw8RGV2aWNlUmVnaXN0cnlFbnRyeU11dGFibGVQYXJhbXM+XG4pID0+XG4gIGhhc3MuY2FsbFdTPERldmljZVJlZ2lzdHJ5RW50cnk+KHtcbiAgICB0eXBlOiBcImNvbmZpZy9kZXZpY2VfcmVnaXN0cnkvdXBkYXRlXCIsXG4gICAgZGV2aWNlX2lkOiBkZXZpY2VJZCxcbiAgICAuLi51cGRhdGVzLFxuICB9KTtcblxuY29uc3QgZmV0Y2hEZXZpY2VSZWdpc3RyeSA9IChjb25uKSA9PlxuICBjb25uLnNlbmRNZXNzYWdlUHJvbWlzZSh7XG4gICAgdHlwZTogXCJjb25maWcvZGV2aWNlX3JlZ2lzdHJ5L2xpc3RcIixcbiAgfSk7XG5cbmNvbnN0IHN1YnNjcmliZURldmljZVJlZ2lzdHJ5VXBkYXRlcyA9IChjb25uLCBzdG9yZSkgPT5cbiAgY29ubi5zdWJzY3JpYmVFdmVudHMoXG4gICAgZGVib3VuY2UoXG4gICAgICAoKSA9PlxuICAgICAgICBmZXRjaERldmljZVJlZ2lzdHJ5KGNvbm4pLnRoZW4oKGRldmljZXMpID0+XG4gICAgICAgICAgc3RvcmUuc2V0U3RhdGUoZGV2aWNlcywgdHJ1ZSlcbiAgICAgICAgKSxcbiAgICAgIDUwMCxcbiAgICAgIHRydWVcbiAgICApLFxuICAgIFwiZGV2aWNlX3JlZ2lzdHJ5X3VwZGF0ZWRcIlxuICApO1xuXG5leHBvcnQgY29uc3Qgc3Vic2NyaWJlRGV2aWNlUmVnaXN0cnkgPSAoXG4gIGNvbm46IENvbm5lY3Rpb24sXG4gIG9uQ2hhbmdlOiAoZGV2aWNlczogRGV2aWNlUmVnaXN0cnlFbnRyeVtdKSA9PiB2b2lkXG4pID0+XG4gIGNyZWF0ZUNvbGxlY3Rpb248RGV2aWNlUmVnaXN0cnlFbnRyeVtdPihcbiAgICBcIl9kclwiLFxuICAgIGZldGNoRGV2aWNlUmVnaXN0cnksXG4gICAgc3Vic2NyaWJlRGV2aWNlUmVnaXN0cnlVcGRhdGVzLFxuICAgIGNvbm4sXG4gICAgb25DaGFuZ2VcbiAgKTtcbiIsImltcG9ydCB7IGRlZHVwaW5nTWl4aW4gfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvbWl4aW5cIjtcblxuaW1wb3J0IHsgZmlyZUV2ZW50IH0gZnJvbSBcIi4uL2NvbW1vbi9kb20vZmlyZV9ldmVudFwiO1xuXG4vLyBQb2x5bWVyIGxlZ2FjeSBldmVudCBoZWxwZXJzIHVzZWQgY291cnRlc3kgb2YgdGhlIFBvbHltZXIgcHJvamVjdC5cbi8vXG4vLyBDb3B5cmlnaHQgKGMpIDIwMTcgVGhlIFBvbHltZXIgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbi8vXG4vLyBSZWRpc3RyaWJ1dGlvbiBhbmQgdXNlIGluIHNvdXJjZSBhbmQgYmluYXJ5IGZvcm1zLCB3aXRoIG9yIHdpdGhvdXRcbi8vIG1vZGlmaWNhdGlvbiwgYXJlIHBlcm1pdHRlZCBwcm92aWRlZCB0aGF0IHRoZSBmb2xsb3dpbmcgY29uZGl0aW9ucyBhcmVcbi8vIG1ldDpcbi8vXG4vLyAgICAqIFJlZGlzdHJpYnV0aW9ucyBvZiBzb3VyY2UgY29kZSBtdXN0IHJldGFpbiB0aGUgYWJvdmUgY29weXJpZ2h0XG4vLyBub3RpY2UsIHRoaXMgbGlzdCBvZiBjb25kaXRpb25zIGFuZCB0aGUgZm9sbG93aW5nIGRpc2NsYWltZXIuXG4vLyAgICAqIFJlZGlzdHJpYnV0aW9ucyBpbiBiaW5hcnkgZm9ybSBtdXN0IHJlcHJvZHVjZSB0aGUgYWJvdmVcbi8vIGNvcHlyaWdodCBub3RpY2UsIHRoaXMgbGlzdCBvZiBjb25kaXRpb25zIGFuZCB0aGUgZm9sbG93aW5nIGRpc2NsYWltZXJcbi8vIGluIHRoZSBkb2N1bWVudGF0aW9uIGFuZC9vciBvdGhlciBtYXRlcmlhbHMgcHJvdmlkZWQgd2l0aCB0aGVcbi8vIGRpc3RyaWJ1dGlvbi5cbi8vICAgICogTmVpdGhlciB0aGUgbmFtZSBvZiBHb29nbGUgSW5jLiBub3IgdGhlIG5hbWVzIG9mIGl0c1xuLy8gY29udHJpYnV0b3JzIG1heSBiZSB1c2VkIHRvIGVuZG9yc2Ugb3IgcHJvbW90ZSBwcm9kdWN0cyBkZXJpdmVkIGZyb21cbi8vIHRoaXMgc29mdHdhcmUgd2l0aG91dCBzcGVjaWZpYyBwcmlvciB3cml0dGVuIHBlcm1pc3Npb24uXG4vL1xuLy8gVEhJUyBTT0ZUV0FSRSBJUyBQUk9WSURFRCBCWSBUSEUgQ09QWVJJR0hUIEhPTERFUlMgQU5EIENPTlRSSUJVVE9SU1xuLy8gXCJBUyBJU1wiIEFORCBBTlkgRVhQUkVTUyBPUiBJTVBMSUVEIFdBUlJBTlRJRVMsIElOQ0xVRElORywgQlVUIE5PVFxuLy8gTElNSVRFRCBUTywgVEhFIElNUExJRUQgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFkgQU5EIEZJVE5FU1MgRk9SXG4vLyBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBUkUgRElTQ0xBSU1FRC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIENPUFlSSUdIVFxuLy8gT1dORVIgT1IgQ09OVFJJQlVUT1JTIEJFIExJQUJMRSBGT1IgQU5ZIERJUkVDVCwgSU5ESVJFQ1QsIElOQ0lERU5UQUwsXG4vLyBTUEVDSUFMLCBFWEVNUExBUlksIE9SIENPTlNFUVVFTlRJQUwgREFNQUdFUyAoSU5DTFVESU5HLCBCVVQgTk9UXG4vLyBMSU1JVEVEIFRPLCBQUk9DVVJFTUVOVCBPRiBTVUJTVElUVVRFIEdPT0RTIE9SIFNFUlZJQ0VTOyBMT1NTIE9GIFVTRSxcbi8vIERBVEEsIE9SIFBST0ZJVFM7IE9SIEJVU0lORVNTIElOVEVSUlVQVElPTikgSE9XRVZFUiBDQVVTRUQgQU5EIE9OIEFOWVxuLy8gVEhFT1JZIE9GIExJQUJJTElUWSwgV0hFVEhFUiBJTiBDT05UUkFDVCwgU1RSSUNUIExJQUJJTElUWSwgT1IgVE9SVFxuLy8gKElOQ0xVRElORyBORUdMSUdFTkNFIE9SIE9USEVSV0lTRSkgQVJJU0lORyBJTiBBTlkgV0FZIE9VVCBPRiBUSEUgVVNFXG4vLyBPRiBUSElTIFNPRlRXQVJFLCBFVkVOIElGIEFEVklTRUQgT0YgVEhFIFBPU1NJQklMSVRZIE9GIFNVQ0ggREFNQUdFLlxuXG4vKiBAcG9seW1lck1peGluICovXG5leHBvcnQgY29uc3QgRXZlbnRzTWl4aW4gPSBkZWR1cGluZ01peGluKFxuICAoc3VwZXJDbGFzcykgPT5cbiAgICBjbGFzcyBleHRlbmRzIHN1cGVyQ2xhc3Mge1xuICAgICAgLyoqXG4gICAqIERpc3BhdGNoZXMgYSBjdXN0b20gZXZlbnQgd2l0aCBhbiBvcHRpb25hbCBkZXRhaWwgdmFsdWUuXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB0eXBlIE5hbWUgb2YgZXZlbnQgdHlwZS5cbiAgICogQHBhcmFtIHsqPX0gZGV0YWlsIERldGFpbCB2YWx1ZSBjb250YWluaW5nIGV2ZW50LXNwZWNpZmljXG4gICAqICAgcGF5bG9hZC5cbiAgICogQHBhcmFtIHt7IGJ1YmJsZXM6IChib29sZWFufHVuZGVmaW5lZCksXG4gICAgICAgICAgICAgICBjYW5jZWxhYmxlOiAoYm9vbGVhbnx1bmRlZmluZWQpLFxuICAgICAgICAgICAgICAgIGNvbXBvc2VkOiAoYm9vbGVhbnx1bmRlZmluZWQpIH09fVxuICAgICogIG9wdGlvbnMgT2JqZWN0IHNwZWNpZnlpbmcgb3B0aW9ucy4gIFRoZXNlIG1heSBpbmNsdWRlOlxuICAgICogIGBidWJibGVzYCAoYm9vbGVhbiwgZGVmYXVsdHMgdG8gYHRydWVgKSxcbiAgICAqICBgY2FuY2VsYWJsZWAgKGJvb2xlYW4sIGRlZmF1bHRzIHRvIGZhbHNlKSwgYW5kXG4gICAgKiAgYG5vZGVgIG9uIHdoaWNoIHRvIGZpcmUgdGhlIGV2ZW50IChIVE1MRWxlbWVudCwgZGVmYXVsdHMgdG8gYHRoaXNgKS5cbiAgICAqIEByZXR1cm4ge0V2ZW50fSBUaGUgbmV3IGV2ZW50IHRoYXQgd2FzIGZpcmVkLlxuICAgICovXG4gICAgICBmaXJlKHR5cGUsIGRldGFpbCwgb3B0aW9ucykge1xuICAgICAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgICAgICAgcmV0dXJuIGZpcmVFdmVudChvcHRpb25zLm5vZGUgfHwgdGhpcywgdHlwZSwgZGV0YWlsLCBvcHRpb25zKTtcbiAgICAgIH1cbiAgICB9XG4pO1xuIiwiaW1wb3J0IHsgaHRtbCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZ1wiO1xuaW1wb3J0IHsgUG9seW1lckVsZW1lbnQgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWVsZW1lbnRcIjtcblxuaW1wb3J0IFwiLi4vLi4vcmVzb3VyY2VzL2hhLXN0eWxlXCI7XG5cbmNsYXNzIEhhQ29uZmlnU2VjdGlvbiBleHRlbmRzIFBvbHltZXJFbGVtZW50IHtcbiAgc3RhdGljIGdldCB0ZW1wbGF0ZSgpIHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxzdHlsZSBpbmNsdWRlPVwiaXJvbi1mbGV4IGhhLXN0eWxlXCI+XG4gICAgICAgIC5jb250ZW50IHtcbiAgICAgICAgICBwYWRkaW5nOiAyOHB4IDIwcHggMDtcbiAgICAgICAgICBtYXgtd2lkdGg6IDEwNDBweDtcbiAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgfVxuXG4gICAgICAgIC5oZWFkZXIge1xuICAgICAgICAgIEBhcHBseSAtLXBhcGVyLWZvbnQtZGlzcGxheTE7XG4gICAgICAgICAgb3BhY2l0eTogdmFyKC0tZGFyay1wcmltYXJ5LW9wYWNpdHkpO1xuICAgICAgICB9XG5cbiAgICAgICAgLnRvZ2V0aGVyIHtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAzMnB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmludHJvIHtcbiAgICAgICAgICBAYXBwbHkgLS1wYXBlci1mb250LXN1YmhlYWQ7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgbWF4LXdpZHRoOiA0MDBweDtcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDQwcHg7XG4gICAgICAgICAgb3BhY2l0eTogdmFyKC0tZGFyay1wcmltYXJ5LW9wYWNpdHkpO1xuICAgICAgICB9XG5cbiAgICAgICAgLnBhbmVsIHtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAtMjRweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5wYW5lbCA6OnNsb3R0ZWQoKikge1xuICAgICAgICAgIG1hcmdpbi10b3A6IDI0cHg7XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIH1cblxuICAgICAgICAubmFycm93LmNvbnRlbnQge1xuICAgICAgICAgIG1heC13aWR0aDogNjQwcHg7XG4gICAgICAgIH1cbiAgICAgICAgLm5hcnJvdyAudG9nZXRoZXIge1xuICAgICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgICAgIH1cbiAgICAgICAgLm5hcnJvdyAuaGVhZGVyIHtcbiAgICAgICAgICBAYXBwbHkgLS1wYXBlci1mb250LWhlYWRsaW5lO1xuICAgICAgICB9XG4gICAgICAgIC5uYXJyb3cgLmludHJvIHtcbiAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgcGFkZGluZy1ib3R0b206IDIwcHg7XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xuICAgICAgICAgIG1heC13aWR0aDogNTAwcHg7XG4gICAgICAgIH1cbiAgICAgIDwvc3R5bGU+XG4gICAgICA8ZGl2IGNsYXNzJD1cIltbY29tcHV0ZUNvbnRlbnRDbGFzc2VzKGlzV2lkZSldXVwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiaGVhZGVyXCI+PHNsb3QgbmFtZT1cImhlYWRlclwiPjwvc2xvdD48L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcyQ9XCJbW2NvbXB1dGVDbGFzc2VzKGlzV2lkZSldXVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbnRyb1wiPjxzbG90IG5hbWU9XCJpbnRyb2R1Y3Rpb25cIj48L3Nsb3Q+PC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cInBhbmVsIGZsZXgtYXV0b1wiPjxzbG90Pjwvc2xvdD48L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICBgO1xuICB9XG5cbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBoYXNzOiB7XG4gICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgIH0sXG5cbiAgICAgIG5hcnJvdzoge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgfSxcblxuICAgICAgaXNXaWRlOiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIHZhbHVlOiBmYWxzZSxcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxuXG4gIGNvbXB1dGVDb250ZW50Q2xhc3Nlcyhpc1dpZGUpIHtcbiAgICB2YXIgY2xhc3NlcyA9IFwiY29udGVudCBcIjtcblxuICAgIHJldHVybiBpc1dpZGUgPyBjbGFzc2VzIDogY2xhc3NlcyArIFwibmFycm93XCI7XG4gIH1cblxuICBjb21wdXRlQ2xhc3Nlcyhpc1dpZGUpIHtcbiAgICB2YXIgY2xhc3NlcyA9IFwidG9nZXRoZXIgbGF5b3V0IFwiO1xuXG4gICAgcmV0dXJuIGNsYXNzZXMgKyAoaXNXaWRlID8gXCJob3Jpem9udGFsXCIgOiBcInZlcnRpY2FsIG5hcnJvd1wiKTtcbiAgfVxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJoYS1jb25maWctc2VjdGlvblwiLCBIYUNvbmZpZ1NlY3Rpb24pO1xuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUFBOzs7Ozs7Ozs7Ozs7O0FDWkE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvQkE7QUFTQTtBQUFBO0FBQUE7O0FBNkRBO0FBMURBO0FBQUE7QUFDQTtBQTZDQTs7O0FBQUE7QUFFQTtBQUNBO0FBS0E7QUFIQTtBQU1BO0FBM0RBO0FBQUE7QUFBQTtBQTREQTtBQUFBO0FBRUE7Ozs7Ozs7Ozs7Ozs7O0FDdkVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQXNCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUVBO0FBSUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFJQTtBQUNBO0FBV0E7QUFFQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBYUE7QUFFQTtBQUlBO0FBQ0E7QUFhQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsSkE7QUFDQTtBQW9CQTtBQUtBO0FBQUE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUdBO0FBQ0E7QUFBQTtBQURBO0FBSEE7QUFZQTtBQUlBO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkRBO0FBRUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUFGQTtBQWtCQTtBQUNBO0FBQ0E7QUFwQkE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcENBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUErRUE7QUFDQTtBQUVBO0FBQ0E7OztBQUVBO0FBQ0E7QUFFQTtBQUNBOzs7QUF4RkE7QUFDQTtBQTBEQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7QUFDQTtBQUZBO0FBVEE7QUFjQTs7OztBQTdFQTtBQUNBO0FBMkZBOzs7O0EiLCJzb3VyY2VSb290IjoiIn0=