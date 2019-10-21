(self["webpackJsonp"] = self["webpackJsonp"] || []).push([["panel-config-customize"],{

/***/ "./src/common/entity/compute_object_id.ts":
/*!************************************************!*\
  !*** ./src/common/entity/compute_object_id.ts ***!
  \************************************************/
/*! exports provided: computeObjectId */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "computeObjectId", function() { return computeObjectId; });
/** Compute the object ID of a state. */
var computeObjectId = function (entityId) {
    return entityId.substr(entityId.indexOf(".") + 1);
};


/***/ }),

/***/ "./src/common/entity/compute_state_domain.ts":
/*!***************************************************!*\
  !*** ./src/common/entity/compute_state_domain.ts ***!
  \***************************************************/
/*! exports provided: computeStateDomain */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "computeStateDomain", function() { return computeStateDomain; });
/* harmony import */ var _compute_domain__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./compute_domain */ "./src/common/entity/compute_domain.ts");

var computeStateDomain = function (stateObj) {
    return Object(_compute_domain__WEBPACK_IMPORTED_MODULE_0__["computeDomain"])(stateObj.entity_id);
};


/***/ }),

/***/ "./src/common/entity/compute_state_name.ts":
/*!*************************************************!*\
  !*** ./src/common/entity/compute_state_name.ts ***!
  \*************************************************/
/*! exports provided: computeStateName */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "computeStateName", function() { return computeStateName; });
/* harmony import */ var _compute_object_id__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./compute_object_id */ "./src/common/entity/compute_object_id.ts");

var computeStateName = function (stateObj) {
    return stateObj.attributes.friendly_name === undefined
        ? Object(_compute_object_id__WEBPACK_IMPORTED_MODULE_0__["computeObjectId"])(stateObj.entity_id).replace(/_/g, " ")
        : stateObj.attributes.friendly_name || "";
};


/***/ }),

/***/ "./src/common/entity/states_sort_by_name.ts":
/*!**************************************************!*\
  !*** ./src/common/entity/states_sort_by_name.ts ***!
  \**************************************************/
/*! exports provided: sortStatesByName */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sortStatesByName", function() { return sortStatesByName; });
/* harmony import */ var _compute_state_name__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./compute_state_name */ "./src/common/entity/compute_state_name.ts");

var sortStatesByName = function (entityA, entityB) {
    var nameA = Object(_compute_state_name__WEBPACK_IMPORTED_MODULE_0__["computeStateName"])(entityA);
    var nameB = Object(_compute_state_name__WEBPACK_IMPORTED_MODULE_0__["computeStateName"])(entityB);
    if (nameA < nameB) {
        return -1;
    }
    if (nameA > nameB) {
        return 1;
    }
    return 0;
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

/***/ "./src/panels/config/customize/ha-config-customize.js":
/*!************************************************************!*\
  !*** ./src/panels/config/customize/ha-config-customize.js ***!
  \************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_app_layout_app_header_layout_app_header_layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/app-layout/app-header-layout/app-header-layout */ "./node_modules/@polymer/app-layout/app-header-layout/app-header-layout.js");
/* harmony import */ var _polymer_app_layout_app_header_app_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/app-layout/app-header/app-header */ "./node_modules/@polymer/app-layout/app-header/app-header.js");
/* harmony import */ var _polymer_app_layout_app_toolbar_app_toolbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/app-layout/app-toolbar/app-toolbar */ "./node_modules/@polymer/app-layout/app-toolbar/app-toolbar.js");
/* harmony import */ var _polymer_paper_icon_button_paper_icon_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/paper-icon-button/paper-icon-button */ "./node_modules/@polymer/paper-icon-button/paper-icon-button.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _resources_ha_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../resources/ha-style */ "./src/resources/ha-style.ts");
/* harmony import */ var _components_ha_paper_icon_button_arrow_prev__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/ha-paper-icon-button-arrow-prev */ "./src/components/ha-paper-icon-button-arrow-prev.ts");
/* harmony import */ var _ha_config_section__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../ha-config-section */ "./src/panels/config/ha-config-section.js");
/* harmony import */ var _ha_entity_config__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../ha-entity-config */ "./src/panels/config/ha-entity-config.js");
/* harmony import */ var _ha_form_customize__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./ha-form-customize */ "./src/panels/config/customize/ha-form-customize.js");
/* harmony import */ var _common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../common/entity/compute_state_name */ "./src/common/entity/compute_state_name.ts");
/* harmony import */ var _common_entity_compute_state_domain__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../common/entity/compute_state_domain */ "./src/common/entity/compute_state_domain.ts");
/* harmony import */ var _common_entity_states_sort_by_name__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../common/entity/states_sort_by_name */ "./src/common/entity/states_sort_by_name.ts");
/* harmony import */ var _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../mixins/localize-mixin */ "./src/mixins/localize-mixin.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      <style include=\"ha-style\"></style>\n\n      <app-header-layout has-scrolling-region=\"\">\n        <app-header slot=\"header\" fixed=\"\">\n          <app-toolbar>\n            <ha-paper-icon-button-arrow-prev\n              on-click=\"_backTapped\"\n            ></ha-paper-icon-button-arrow-prev>\n            <div main-title=\"\">\n              [[localize('ui.panel.config.customize.caption')]]\n            </div>\n          </app-toolbar>\n        </app-header>\n\n        <div class$=\"[[computeClasses(isWide)]]\">\n          <ha-config-section is-wide=\"[[isWide]]\">\n            <span slot=\"header\">\n              [[localize('ui.panel.config.customize.picker.header')]]\n            </span>\n            <span slot=\"introduction\">\n              [[localize('ui.panel.config.customize.picker.introduction')]]\n            </span>\n            <ha-entity-config\n              hass=\"[[hass]]\"\n              label=\"Entity\"\n              entities=\"[[entities]]\"\n              config=\"[[entityConfig]]\"\n            >\n            </ha-entity-config>\n          </ha-config-section>\n        </div>\n      </app-header-layout>\n    "]);

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

var HaConfigCustomize =
/*#__PURE__*/
function (_LocalizeMixin) {
  _inherits(HaConfigCustomize, _LocalizeMixin);

  function HaConfigCustomize() {
    _classCallCheck(this, HaConfigCustomize);

    return _possibleConstructorReturn(this, _getPrototypeOf(HaConfigCustomize).apply(this, arguments));
  }

  _createClass(HaConfigCustomize, [{
    key: "computeClasses",
    value: function computeClasses(isWide) {
      return isWide ? "content" : "content narrow";
    }
  }, {
    key: "_backTapped",
    value: function _backTapped() {
      history.back();
    }
  }, {
    key: "computeEntities",
    value: function computeEntities(hass) {
      return Object.keys(hass.states).map(function (key) {
        return hass.states[key];
      }).sort(_common_entity_states_sort_by_name__WEBPACK_IMPORTED_MODULE_13__["sortStatesByName"]);
    }
  }], [{
    key: "template",
    get: function get() {
      return Object(_polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_4__["html"])(_templateObject());
    }
  }, {
    key: "properties",
    get: function get() {
      return {
        hass: Object,
        isWide: Boolean,
        entities: {
          type: Array,
          computed: "computeEntities(hass)"
        },
        entityConfig: {
          type: Object,
          value: {
            component: "ha-form-customize",
            computeSelectCaption: function computeSelectCaption(stateObj) {
              return Object(_common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_11__["computeStateName"])(stateObj) + " (" + Object(_common_entity_compute_state_domain__WEBPACK_IMPORTED_MODULE_12__["computeStateDomain"])(stateObj) + ")";
            }
          }
        }
      };
    }
  }]);

  return HaConfigCustomize;
}(Object(_mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_14__["default"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_5__["PolymerElement"]));

customElements.define("ha-config-customize", HaConfigCustomize);

/***/ }),

/***/ "./src/panels/config/customize/ha-customize-attribute.js":
/*!***************************************************************!*\
  !*** ./src/panels/config/customize/ha-customize-attribute.js ***!
  \***************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_paper_icon_button_paper_icon_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/paper-icon-button/paper-icon-button */ "./node_modules/@polymer/paper-icon-button/paper-icon-button.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _util_hass_attributes_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../util/hass-attributes-util */ "./src/util/hass-attributes-util.js");
/* harmony import */ var _ha_form_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ha-form-style */ "./src/panels/config/ha-form-style.js");
/* harmony import */ var _ha_form_style__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_ha_form_style__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _types_ha_customize_array__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./types/ha-customize-array */ "./src/panels/config/customize/types/ha-customize-array.js");
/* harmony import */ var _types_ha_customize_boolean__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./types/ha-customize-boolean */ "./src/panels/config/customize/types/ha-customize-boolean.js");
/* harmony import */ var _types_ha_customize_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./types/ha-customize-icon */ "./src/panels/config/customize/types/ha-customize-icon.js");
/* harmony import */ var _types_ha_customize_key_value__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./types/ha-customize-key-value */ "./src/panels/config/customize/types/ha-customize-key-value.js");
/* harmony import */ var _types_ha_customize_string__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./types/ha-customize-string */ "./src/panels/config/customize/types/ha-customize-string.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      <style include=\"ha-form-style\">\n        :host {\n          display: block;\n          position: relative;\n          padding-right: 40px;\n        }\n\n        .button {\n          position: absolute;\n          margin-top: -20px;\n          top: 50%;\n          right: 0;\n        }\n      </style>\n      <div id=\"wrapper\" class=\"form-group\"></div>\n      <paper-icon-button\n        class=\"button\"\n        icon=\"[[getIcon(item.secondary)]]\"\n        on-click=\"tapButton\"\n      ></paper-icon-button>\n    "]);

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












var HaCustomizeAttribute =
/*#__PURE__*/
function (_PolymerElement) {
  _inherits(HaCustomizeAttribute, _PolymerElement);

  function HaCustomizeAttribute() {
    _classCallCheck(this, HaCustomizeAttribute);

    return _possibleConstructorReturn(this, _getPrototypeOf(HaCustomizeAttribute).apply(this, arguments));
  }

  _createClass(HaCustomizeAttribute, [{
    key: "tapButton",
    value: function tapButton() {
      if (this.item.secondary) {
        this.item = Object.assign({}, this.item, {
          secondary: false
        });
      } else {
        this.item = Object.assign({}, this.item, {
          closed: true
        });
      }
    }
  }, {
    key: "getIcon",
    value: function getIcon(secondary) {
      return secondary ? "hass:pencil" : "hass:close";
    }
  }, {
    key: "itemObserver",
    value: function itemObserver(item) {
      var _this = this;

      var wrapper = this.$.wrapper;
      var tag = _util_hass_attributes_util__WEBPACK_IMPORTED_MODULE_3__["default"].TYPE_TO_TAG[item.type].toUpperCase();
      var child;

      if (wrapper.lastChild && wrapper.lastChild.tagName === tag) {
        child = wrapper.lastChild;
      } else {
        if (wrapper.lastChild) {
          wrapper.removeChild(wrapper.lastChild);
        } // Creating an element with upper case works fine in Chrome, but in FF it doesn't immediately
        // become a defined Custom Element. Polymer does that in some later pass.


        this.$.child = child = document.createElement(tag.toLowerCase());
        child.className = "form-control";
        child.addEventListener("item-changed", function () {
          _this.item = Object.assign({}, child.item);
        });
      }

      child.setProperties({
        item: this.item
      });

      if (child.parentNode === null) {
        wrapper.appendChild(child);
      }
    }
  }], [{
    key: "template",
    get: function get() {
      return Object(_polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__["html"])(_templateObject());
    }
  }, {
    key: "properties",
    get: function get() {
      return {
        item: {
          type: Object,
          notify: true,
          observer: "itemObserver"
        }
      };
    }
  }]);

  return HaCustomizeAttribute;
}(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__["PolymerElement"]);

customElements.define("ha-customize-attribute", HaCustomizeAttribute);

/***/ }),

/***/ "./src/panels/config/customize/ha-form-customize-attributes.js":
/*!*********************************************************************!*\
  !*** ./src/panels/config/customize/ha-form-customize-attributes.js ***!
  \*********************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_lib_mixins_mutable_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/lib/mixins/mutable-data */ "./node_modules/@polymer/polymer/lib/mixins/mutable-data.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _ha_customize_attribute__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ha-customize-attribute */ "./src/panels/config/customize/ha-customize-attribute.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      <style>\n        [hidden] {\n          display: none;\n        }\n      </style>\n      <template is=\"dom-repeat\" items=\"{{attributes}}\" mutable-data=\"\">\n        <ha-customize-attribute item=\"{{item}}\" hidden$=\"[[item.closed]]\">\n        </ha-customize-attribute>\n      </template>\n    "]);

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






var HaFormCustomizeAttributes =
/*#__PURE__*/
function (_MutableData) {
  _inherits(HaFormCustomizeAttributes, _MutableData);

  function HaFormCustomizeAttributes() {
    _classCallCheck(this, HaFormCustomizeAttributes);

    return _possibleConstructorReturn(this, _getPrototypeOf(HaFormCustomizeAttributes).apply(this, arguments));
  }

  _createClass(HaFormCustomizeAttributes, null, [{
    key: "template",
    get: function get() {
      return Object(_polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__["html"])(_templateObject());
    }
  }, {
    key: "properties",
    get: function get() {
      return {
        attributes: {
          type: Array,
          notify: true
        }
      };
    }
  }]);

  return HaFormCustomizeAttributes;
}(Object(_polymer_polymer_lib_mixins_mutable_data__WEBPACK_IMPORTED_MODULE_0__["MutableData"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__["PolymerElement"]));

customElements.define("ha-form-customize-attributes", HaFormCustomizeAttributes);

/***/ }),

/***/ "./src/panels/config/customize/ha-form-customize.js":
/*!**********************************************************!*\
  !*** ./src/panels/config/customize/ha-form-customize.js ***!
  \**********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_paper_dropdown_menu_paper_dropdown_menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/paper-dropdown-menu/paper-dropdown-menu */ "./node_modules/@polymer/paper-dropdown-menu/paper-dropdown-menu.js");
/* harmony import */ var _polymer_paper_item_paper_item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-item/paper-item */ "./node_modules/@polymer/paper-item/paper-item.js");
/* harmony import */ var _polymer_paper_listbox_paper_listbox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-listbox/paper-listbox */ "./node_modules/@polymer/paper-listbox/paper-listbox.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _util_hass_attributes_util__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../util/hass-attributes-util */ "./src/util/hass-attributes-util.js");
/* harmony import */ var _ha_form_customize_attributes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ha-form-customize-attributes */ "./src/panels/config/customize/ha-form-customize-attributes.js");
/* harmony import */ var _common_entity_compute_state_domain__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../common/entity/compute_state_domain */ "./src/common/entity/compute_state_domain.ts");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      <style include=\"iron-flex ha-style ha-form-style\">\n        .warning {\n          color: red;\n        }\n\n        .attributes-text {\n          padding-left: 20px;\n        }\n      </style>\n      <template\n        is=\"dom-if\"\n        if=\"[[computeShowWarning(localConfig, globalConfig)]]\"\n      >\n        <div class=\"warning\">\n          It seems that your configuration.yaml doesn't properly include\n          customize.yaml<br />\n          Changes made here won't affect your configuration.\n        </div>\n      </template>\n      <template is=\"dom-if\" if=\"[[hasLocalAttributes]]\">\n        <h4 class=\"attributes-text\">\n          The following attributes are already set in customize.yaml<br />\n        </h4>\n        <ha-form-customize-attributes\n          attributes=\"{{localAttributes}}\"\n        ></ha-form-customize-attributes>\n      </template>\n      <template is=\"dom-if\" if=\"[[hasGlobalAttributes]]\">\n        <h4 class=\"attributes-text\">\n          The following attributes are customized from outside of\n          customize.yaml<br />\n          Possibly via a domain, a glob or a different include.\n        </h4>\n        <ha-form-customize-attributes\n          attributes=\"{{globalAttributes}}\"\n        ></ha-form-customize-attributes>\n      </template>\n      <template is=\"dom-if\" if=\"[[hasExistingAttributes]]\">\n        <h4 class=\"attributes-text\">\n          The following attributes of the entity are set programatically.<br />\n          You can override them if you like.\n        </h4>\n        <ha-form-customize-attributes\n          attributes=\"{{existingAttributes}}\"\n        ></ha-form-customize-attributes>\n      </template>\n      <template is=\"dom-if\" if=\"[[hasNewAttributes]]\">\n        <h4 class=\"attributes-text\">\n          The following attributes weren't set. Set them if you like.\n        </h4>\n        <ha-form-customize-attributes\n          attributes=\"{{newAttributes}}\"\n        ></ha-form-customize-attributes>\n      </template>\n      <div class=\"form-group\">\n        <paper-dropdown-menu\n          label=\"Pick an attribute to override\"\n          class=\"flex\"\n          dynamic-align=\"\"\n        >\n          <paper-listbox\n            slot=\"dropdown-content\"\n            selected=\"{{selectedNewAttribute}}\"\n          >\n            <template\n              is=\"dom-repeat\"\n              items=\"[[newAttributesOptions]]\"\n              as=\"option\"\n            >\n              <paper-item>[[option]]</paper-item>\n            </template>\n          </paper-listbox>\n        </paper-dropdown-menu>\n      </div>\n    "]);

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










var HaFormCustomize =
/*#__PURE__*/
function (_PolymerElement) {
  _inherits(HaFormCustomize, _PolymerElement);

  function HaFormCustomize() {
    _classCallCheck(this, HaFormCustomize);

    return _possibleConstructorReturn(this, _getPrototypeOf(HaFormCustomize).apply(this, arguments));
  }

  _createClass(HaFormCustomize, [{
    key: "_initOpenObject",
    value: function _initOpenObject(key, value, secondary, config) {
      return Object.assign({
        attribute: key,
        value: value,
        closed: false,
        domain: Object(_common_entity_compute_state_domain__WEBPACK_IMPORTED_MODULE_7__["computeStateDomain"])(this.entity),
        secondary: secondary,
        description: key
      }, config);
    }
  }, {
    key: "loadEntity",
    value: function loadEntity(entity) {
      var _this = this;

      this.entity = entity;
      return this.hass.callApi("GET", "config/customize/config/" + entity.entity_id).then(function (data) {
        _this.localConfig = data.local;
        _this.globalConfig = data.global;
        _this.newAttributes = [];
      });
    }
  }, {
    key: "saveEntity",
    value: function saveEntity() {
      var data = {};
      var attrs = this.localAttributes.concat(this.globalAttributes, this.existingAttributes, this.newAttributes);
      attrs.forEach(function (attr) {
        if (attr.closed || attr.secondary || !attr.attribute || !attr.value) return;
        var value = attr.type === "json" ? JSON.parse(attr.value) : attr.value;
        if (!value) return;
        data[attr.attribute] = value;
      });
      var objectId = this.entity.entity_id;
      return this.hass.callApi("POST", "config/customize/config/" + objectId, data);
    }
  }, {
    key: "_computeSingleAttribute",
    value: function _computeSingleAttribute(key, value, secondary) {
      var config = _util_hass_attributes_util__WEBPACK_IMPORTED_MODULE_5__["default"].LOGIC_STATE_ATTRIBUTES[key] || {
        type: _util_hass_attributes_util__WEBPACK_IMPORTED_MODULE_5__["default"].UNKNOWN_TYPE
      };
      return this._initOpenObject(key, config.type === "json" ? JSON.stringify(value) : value, secondary, config);
    }
  }, {
    key: "_computeAttributes",
    value: function _computeAttributes(config, keys, secondary) {
      var _this2 = this;

      return keys.map(function (key) {
        return _this2._computeSingleAttribute(key, config[key], secondary);
      });
    }
  }, {
    key: "computeLocalAttributes",
    value: function computeLocalAttributes(localConfig) {
      if (!localConfig) return [];
      var localKeys = Object.keys(localConfig);

      var result = this._computeAttributes(localConfig, localKeys, false);

      return result;
    }
  }, {
    key: "computeGlobalAttributes",
    value: function computeGlobalAttributes(localConfig, globalConfig) {
      if (!localConfig || !globalConfig) return [];
      var localKeys = Object.keys(localConfig);
      var globalKeys = Object.keys(globalConfig).filter(function (key) {
        return !localKeys.includes(key);
      });
      return this._computeAttributes(globalConfig, globalKeys, true);
    }
  }, {
    key: "computeExistingAttributes",
    value: function computeExistingAttributes(localConfig, globalConfig, entity) {
      if (!localConfig || !globalConfig || !entity) return [];
      var localKeys = Object.keys(localConfig);
      var globalKeys = Object.keys(globalConfig);
      var entityKeys = Object.keys(entity.attributes).filter(function (key) {
        return !localKeys.includes(key) && !globalKeys.includes(key);
      });
      return this._computeAttributes(entity.attributes, entityKeys, true);
    }
  }, {
    key: "computeShowWarning",
    value: function computeShowWarning(localConfig, globalConfig) {
      if (!localConfig || !globalConfig) return false;
      return Object.keys(localConfig).some(function (key) {
        return JSON.stringify(globalConfig[key]) !== JSON.stringify(localConfig[key]);
      });
    }
  }, {
    key: "filterFromAttributes",
    value: function filterFromAttributes(attributes) {
      return function (key) {
        return !attributes || attributes.every(function (attr) {
          return attr.attribute !== key || attr.closed;
        });
      };
    }
  }, {
    key: "getNewAttributesOptions",
    value: function getNewAttributesOptions(localAttributes, globalAttributes, existingAttributes, newAttributes) {
      var _this3 = this;

      var knownKeys = Object.keys(_util_hass_attributes_util__WEBPACK_IMPORTED_MODULE_5__["default"].LOGIC_STATE_ATTRIBUTES).filter(function (key) {
        var conf = _util_hass_attributes_util__WEBPACK_IMPORTED_MODULE_5__["default"].LOGIC_STATE_ATTRIBUTES[key];
        return conf && (!conf.domains || !_this3.entity || conf.domains.includes(Object(_common_entity_compute_state_domain__WEBPACK_IMPORTED_MODULE_7__["computeStateDomain"])(_this3.entity)));
      }).filter(this.filterFromAttributes(localAttributes)).filter(this.filterFromAttributes(globalAttributes)).filter(this.filterFromAttributes(existingAttributes)).filter(this.filterFromAttributes(newAttributes));
      return knownKeys.sort().concat("Other");
    }
  }, {
    key: "selectedNewAttributeObserver",
    value: function selectedNewAttributeObserver(selected) {
      if (selected < 0) return;
      var option = this.newAttributesOptions[selected];

      if (selected === this.newAttributesOptions.length - 1) {
        // The "Other" option.
        var _attr = this._initOpenObject("", "", false
        /* secondary */
        , {
          type: _util_hass_attributes_util__WEBPACK_IMPORTED_MODULE_5__["default"].ADD_TYPE
        });

        this.push("newAttributes", _attr);
        this.selectedNewAttribute = -1;
        return;
      }

      var result = this.localAttributes.findIndex(function (attr) {
        return attr.attribute === option;
      });

      if (result >= 0) {
        this.set("localAttributes." + result + ".closed", false);
        this.selectedNewAttribute = -1;
        return;
      }

      result = this.globalAttributes.findIndex(function (attr) {
        return attr.attribute === option;
      });

      if (result >= 0) {
        this.set("globalAttributes." + result + ".closed", false);
        this.selectedNewAttribute = -1;
        return;
      }

      result = this.existingAttributes.findIndex(function (attr) {
        return attr.attribute === option;
      });

      if (result >= 0) {
        this.set("existingAttributes." + result + ".closed", false);
        this.selectedNewAttribute = -1;
        return;
      }

      result = this.newAttributes.findIndex(function (attr) {
        return attr.attribute === option;
      });

      if (result >= 0) {
        this.set("newAttributes." + result + ".closed", false);
        this.selectedNewAttribute = -1;
        return;
      }

      var attr = this._computeSingleAttribute(option, "", false
      /* secondary */
      );

      this.push("newAttributes", attr);
      this.selectedNewAttribute = -1;
    }
  }, {
    key: "attributesObserver",
    value: function attributesObserver() {
      this.hasLocalAttributes = this.localAttributes && this.localAttributes.some(function (attr) {
        return !attr.closed;
      });
      this.hasGlobalAttributes = this.globalAttributes && this.globalAttributes.some(function (attr) {
        return !attr.closed;
      });
      this.hasExistingAttributes = this.existingAttributes && this.existingAttributes.some(function (attr) {
        return !attr.closed;
      });
      this.hasNewAttributes = this.newAttributes && this.newAttributes.some(function (attr) {
        return !attr.closed;
      });
      this.newAttributesOptions = this.getNewAttributesOptions(this.localAttributes, this.globalAttributes, this.existingAttributes, this.newAttributes);
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
        hass: {
          type: Object
        },
        entity: Object,
        localAttributes: {
          type: Array,
          computed: "computeLocalAttributes(localConfig)"
        },
        hasLocalAttributes: Boolean,
        globalAttributes: {
          type: Array,
          computed: "computeGlobalAttributes(localConfig, globalConfig)"
        },
        hasGlobalAttributes: Boolean,
        existingAttributes: {
          type: Array,
          computed: "computeExistingAttributes(localConfig, globalConfig, entity)"
        },
        hasExistingAttributes: Boolean,
        newAttributes: {
          type: Array,
          value: []
        },
        hasNewAttributes: Boolean,
        newAttributesOptions: Array,
        selectedNewAttribute: {
          type: Number,
          value: -1,
          observer: "selectedNewAttributeObserver"
        },
        localConfig: Object,
        globalConfig: Object
      };
    }
  }, {
    key: "observers",
    get: function get() {
      return ["attributesObserver(localAttributes.*, globalAttributes.*, existingAttributes.*, newAttributes.*)"];
    }
  }]);

  return HaFormCustomize;
}(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_4__["PolymerElement"]);

customElements.define("ha-form-customize", HaFormCustomize);

/***/ }),

/***/ "./src/panels/config/customize/types/ha-customize-array.js":
/*!*****************************************************************!*\
  !*** ./src/panels/config/customize/types/ha-customize-array.js ***!
  \*****************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_paper_dropdown_menu_paper_dropdown_menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/paper-dropdown-menu/paper-dropdown-menu */ "./node_modules/@polymer/paper-dropdown-menu/paper-dropdown-menu.js");
/* harmony import */ var _polymer_paper_item_paper_item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-item/paper-item */ "./node_modules/@polymer/paper-item/paper-item.js");
/* harmony import */ var _polymer_paper_listbox_paper_listbox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-listbox/paper-listbox */ "./node_modules/@polymer/paper-listbox/paper-listbox.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _mixins_events_mixin__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../mixins/events-mixin */ "./src/mixins/events-mixin.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      <style>\n        paper-dropdown-menu {\n          margin: -9px 0;\n        }\n      </style>\n      <paper-dropdown-menu\n        label=\"[[item.description]]\"\n        disabled=\"[[item.secondary]]\"\n        selected-item-label=\"{{item.value}}\"\n        dynamic-align=\"\"\n      >\n        <paper-listbox\n          slot=\"dropdown-content\"\n          selected=\"[[computeSelected(item)]]\"\n        >\n          <template is=\"dom-repeat\" items=\"[[getOptions(item)]]\" as=\"option\">\n            <paper-item>[[option]]</paper-item>\n          </template>\n        </paper-listbox>\n      </paper-dropdown-menu>\n    "]);

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

var HaCustomizeArray =
/*#__PURE__*/
function (_EventsMixin) {
  _inherits(HaCustomizeArray, _EventsMixin);

  function HaCustomizeArray() {
    _classCallCheck(this, HaCustomizeArray);

    return _possibleConstructorReturn(this, _getPrototypeOf(HaCustomizeArray).apply(this, arguments));
  }

  _createClass(HaCustomizeArray, [{
    key: "getOptions",
    value: function getOptions(item) {
      var domain = item.domain || "*";
      var options = item.options[domain] || item.options["*"];

      if (!options) {
        this.item.type = "string";
        this.fire("item-changed");
        return [];
      }

      return options.sort();
    }
  }, {
    key: "computeSelected",
    value: function computeSelected(item) {
      var options = this.getOptions(item);
      return options.indexOf(item.value);
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
        item: {
          type: Object,
          notifies: true
        }
      };
    }
  }]);

  return HaCustomizeArray;
}(Object(_mixins_events_mixin__WEBPACK_IMPORTED_MODULE_5__["EventsMixin"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_4__["PolymerElement"]));

customElements.define("ha-customize-array", HaCustomizeArray);

/***/ }),

/***/ "./src/panels/config/customize/types/ha-customize-boolean.js":
/*!*******************************************************************!*\
  !*** ./src/panels/config/customize/types/ha-customize-boolean.js ***!
  \*******************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_paper_checkbox_paper_checkbox__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/paper-checkbox/paper-checkbox */ "./node_modules/@polymer/paper-checkbox/paper-checkbox.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      <paper-checkbox disabled=\"[[item.secondary]]\" checked=\"{{item.value}}\">\n        [[item.description]]\n      </paper-checkbox>\n    "]);

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





var HaCustomizeBoolean =
/*#__PURE__*/
function (_PolymerElement) {
  _inherits(HaCustomizeBoolean, _PolymerElement);

  function HaCustomizeBoolean() {
    _classCallCheck(this, HaCustomizeBoolean);

    return _possibleConstructorReturn(this, _getPrototypeOf(HaCustomizeBoolean).apply(this, arguments));
  }

  _createClass(HaCustomizeBoolean, null, [{
    key: "template",
    get: function get() {
      return Object(_polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__["html"])(_templateObject());
    }
  }, {
    key: "properties",
    get: function get() {
      return {
        item: {
          type: Object,
          notifies: true
        }
      };
    }
  }]);

  return HaCustomizeBoolean;
}(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__["PolymerElement"]);

customElements.define("ha-customize-boolean", HaCustomizeBoolean);

/***/ }),

/***/ "./src/panels/config/customize/types/ha-customize-icon.js":
/*!****************************************************************!*\
  !*** ./src/panels/config/customize/types/ha-customize-icon.js ***!
  \****************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_iron_icon_iron_icon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/iron-icon/iron-icon */ "./node_modules/@polymer/iron-icon/iron-icon.js");
/* harmony import */ var _polymer_paper_input_paper_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-input/paper-input */ "./node_modules/@polymer/paper-input/paper-input.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      <style>\n        :host {\n          @apply --layout-horizontal;\n        }\n        .icon-image {\n          border: 1px solid grey;\n          padding: 8px;\n          margin-right: 20px;\n          margin-top: 10px;\n        }\n      </style>\n      <iron-icon class=\"icon-image\" icon=\"[[item.value]]\"></iron-icon>\n      <paper-input\n        disabled=\"[[item.secondary]]\"\n        label=\"icon\"\n        value=\"{{item.value}}\"\n      >\n      </paper-input>\n    "]);

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






var HaCustomizeIcon =
/*#__PURE__*/
function (_PolymerElement) {
  _inherits(HaCustomizeIcon, _PolymerElement);

  function HaCustomizeIcon() {
    _classCallCheck(this, HaCustomizeIcon);

    return _possibleConstructorReturn(this, _getPrototypeOf(HaCustomizeIcon).apply(this, arguments));
  }

  _createClass(HaCustomizeIcon, null, [{
    key: "template",
    get: function get() {
      return Object(_polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_2__["html"])(_templateObject());
    }
  }, {
    key: "properties",
    get: function get() {
      return {
        item: {
          type: Object,
          notifies: true
        }
      };
    }
  }]);

  return HaCustomizeIcon;
}(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_3__["PolymerElement"]);

customElements.define("ha-customize-icon", HaCustomizeIcon);

/***/ }),

/***/ "./src/panels/config/customize/types/ha-customize-key-value.js":
/*!*********************************************************************!*\
  !*** ./src/panels/config/customize/types/ha-customize-key-value.js ***!
  \*********************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_paper_input_paper_input__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/paper-input/paper-input */ "./node_modules/@polymer/paper-input/paper-input.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      <style>\n        :host {\n          @apply --layout-horizontal;\n        }\n        paper-input {\n          @apply --layout-flex;\n        }\n        .key {\n          padding-right: 20px;\n        }\n      </style>\n      <paper-input\n        disabled=\"[[item.secondary]]\"\n        class=\"key\"\n        label=\"Attribute name\"\n        value=\"{{item.attribute}}\"\n      >\n      </paper-input>\n      <paper-input\n        disabled=\"[[item.secondary]]\"\n        label=\"Attribute value\"\n        value=\"{{item.value}}\"\n      >\n      </paper-input>\n    "]);

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





var HaCustomizeKeyValue =
/*#__PURE__*/
function (_PolymerElement) {
  _inherits(HaCustomizeKeyValue, _PolymerElement);

  function HaCustomizeKeyValue() {
    _classCallCheck(this, HaCustomizeKeyValue);

    return _possibleConstructorReturn(this, _getPrototypeOf(HaCustomizeKeyValue).apply(this, arguments));
  }

  _createClass(HaCustomizeKeyValue, null, [{
    key: "template",
    get: function get() {
      return Object(_polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__["html"])(_templateObject());
    }
  }, {
    key: "properties",
    get: function get() {
      return {
        item: {
          type: Object,
          notifies: true
        }
      };
    }
  }]);

  return HaCustomizeKeyValue;
}(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__["PolymerElement"]);

customElements.define("ha-customize-key-value", HaCustomizeKeyValue);

/***/ }),

/***/ "./src/panels/config/customize/types/ha-customize-string.js":
/*!******************************************************************!*\
  !*** ./src/panels/config/customize/types/ha-customize-string.js ***!
  \******************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_paper_input_paper_input__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/paper-input/paper-input */ "./node_modules/@polymer/paper-input/paper-input.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      <paper-input\n        disabled=\"[[item.secondary]]\"\n        label=\"[[getLabel(item)]]\"\n        value=\"{{item.value}}\"\n      >\n      </paper-input>\n    "]);

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





var HaCustomizeString =
/*#__PURE__*/
function (_PolymerElement) {
  _inherits(HaCustomizeString, _PolymerElement);

  function HaCustomizeString() {
    _classCallCheck(this, HaCustomizeString);

    return _possibleConstructorReturn(this, _getPrototypeOf(HaCustomizeString).apply(this, arguments));
  }

  _createClass(HaCustomizeString, [{
    key: "getLabel",
    value: function getLabel(item) {
      return item.description + (item.type === "json" ? " (JSON formatted)" : "");
    }
  }], [{
    key: "template",
    get: function get() {
      return Object(_polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__["html"])(_templateObject());
    }
  }, {
    key: "properties",
    get: function get() {
      return {
        item: {
          type: Object,
          notifies: true
        }
      };
    }
  }]);

  return HaCustomizeString;
}(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__["PolymerElement"]);

customElements.define("ha-customize-string", HaCustomizeString);

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

/***/ }),

/***/ "./src/panels/config/ha-entity-config.js":
/*!***********************************************!*\
  !*** ./src/panels/config/ha-entity-config.js ***!
  \***********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_mwc_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material/mwc-button */ "./node_modules/@material/mwc-button/mwc-button.js");
/* harmony import */ var _polymer_paper_dropdown_menu_paper_dropdown_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-dropdown-menu/paper-dropdown-menu */ "./node_modules/@polymer/paper-dropdown-menu/paper-dropdown-menu.js");
/* harmony import */ var _polymer_paper_item_paper_item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-item/paper-item */ "./node_modules/@polymer/paper-item/paper-item.js");
/* harmony import */ var _polymer_paper_listbox_paper_listbox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/paper-listbox/paper-listbox */ "./node_modules/@polymer/paper-listbox/paper-listbox.js");
/* harmony import */ var _polymer_paper_spinner_paper_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/paper-spinner/paper-spinner */ "./node_modules/@polymer/paper-spinner/paper-spinner.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _components_ha_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/ha-card */ "./src/components/ha-card.ts");
/* harmony import */ var _common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../common/entity/compute_state_name */ "./src/common/entity/compute_state_name.ts");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      <style include=\"iron-flex ha-style\">\n        ha-card {\n          direction: ltr;\n        }\n\n        .device-picker {\n          @apply --layout-horizontal;\n          padding-bottom: 24px;\n        }\n\n        .form-placeholder {\n          @apply --layout-vertical;\n          @apply --layout-center-center;\n          height: 96px;\n        }\n\n        [hidden]: {\n          display: none;\n        }\n\n        .card-actions {\n          @apply --layout-horizontal;\n          @apply --layout-justified;\n        }\n      </style>\n      <ha-card>\n        <div class=\"card-content\">\n          <div class=\"device-picker\">\n            <paper-dropdown-menu\n              label=\"[[label]]\"\n              class=\"flex\"\n              disabled=\"[[!entities.length]]\"\n            >\n              <paper-listbox\n                slot=\"dropdown-content\"\n                selected=\"{{selectedEntity}}\"\n              >\n                <template is=\"dom-repeat\" items=\"[[entities]]\" as=\"state\">\n                  <paper-item>[[computeSelectCaption(state)]]</paper-item>\n                </template>\n              </paper-listbox>\n            </paper-dropdown-menu>\n          </div>\n\n          <div class=\"form-container\">\n            <template is=\"dom-if\" if=\"[[computeShowPlaceholder(formState)]]\">\n              <div class=\"form-placeholder\">\n                <template is=\"dom-if\" if=\"[[computeShowNoDevices(formState)]]\">\n                  No entities found! :-(\n                </template>\n\n                <template is=\"dom-if\" if=\"[[computeShowSpinner(formState)]]\">\n                  <paper-spinner active=\"\" alt=\"[[formState]]\"></paper-spinner>\n                  [[formState]]\n                </template>\n              </div>\n            </template>\n\n            <div hidden$=\"[[!computeShowForm(formState)]]\" id=\"form\"></div>\n          </div>\n        </div>\n        <div class=\"card-actions\">\n          <mwc-button\n            on-click=\"saveEntity\"\n            disabled=\"[[computeShowPlaceholder(formState)]]\"\n            >SAVE</mwc-button\n          >\n          <template is=\"dom-if\" if=\"[[allowDelete]]\">\n            <mwc-button\n              class=\"warning\"\n              on-click=\"deleteEntity\"\n              disabled=\"[[computeShowPlaceholder(formState)]]\"\n              >DELETE</mwc-button\n            >\n          </template>\n        </div>\n      </ha-card>\n    "]);

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











var HaEntityConfig =
/*#__PURE__*/
function (_PolymerElement) {
  _inherits(HaEntityConfig, _PolymerElement);

  function HaEntityConfig() {
    _classCallCheck(this, HaEntityConfig);

    return _possibleConstructorReturn(this, _getPrototypeOf(HaEntityConfig).apply(this, arguments));
  }

  _createClass(HaEntityConfig, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      _get(_getPrototypeOf(HaEntityConfig.prototype), "connectedCallback", this).call(this);

      this.formEl = document.createElement(this.config.component);
      this.formEl.hass = this.hass;
      this.$.form.appendChild(this.formEl);
      this.entityChanged(this.selectedEntity);
    }
  }, {
    key: "computeSelectCaption",
    value: function computeSelectCaption(stateObj) {
      return this.config.computeSelectCaption ? this.config.computeSelectCaption(stateObj) : Object(_common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_8__["computeStateName"])(stateObj);
    }
  }, {
    key: "computeShowNoDevices",
    value: function computeShowNoDevices(formState) {
      return formState === "no-devices";
    }
  }, {
    key: "computeShowSpinner",
    value: function computeShowSpinner(formState) {
      return formState === "loading" || formState === "saving";
    }
  }, {
    key: "computeShowPlaceholder",
    value: function computeShowPlaceholder(formState) {
      return formState !== "editing";
    }
  }, {
    key: "computeShowForm",
    value: function computeShowForm(formState) {
      return formState === "editing";
    }
  }, {
    key: "hassChanged",
    value: function hassChanged(hass) {
      if (this.formEl) {
        this.formEl.hass = hass;
      }
    }
  }, {
    key: "entitiesChanged",
    value: function entitiesChanged(entities, oldEntities) {
      if (entities.length === 0) {
        this.formState = "no-devices";
        return;
      }

      if (!oldEntities) {
        this.selectedEntity = 0;
        return;
      }

      var oldEntityId = oldEntities[this.selectedEntity].entity_id;
      var newIndex = entities.findIndex(function (ent) {
        return ent.entity_id === oldEntityId;
      });

      if (newIndex === -1) {
        this.selectedEntity = 0;
      } else if (newIndex !== this.selectedEntity) {
        // Entity moved index
        this.selectedEntity = newIndex;
      }
    }
  }, {
    key: "entityChanged",
    value: function entityChanged(index) {
      if (!this.entities || !this.formEl) return;
      var entity = this.entities[index];
      if (!entity) return;
      this.formState = "loading";
      var el = this;
      this.formEl.loadEntity(entity).then(function () {
        el.formState = "editing";
      });
    }
  }, {
    key: "saveEntity",
    value: function saveEntity() {
      this.formState = "saving";
      var el = this;
      this.formEl.saveEntity().then(function () {
        el.formState = "editing";
      });
    }
  }], [{
    key: "template",
    get: function get() {
      return Object(_polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_5__["html"])(_templateObject());
    }
  }, {
    key: "properties",
    get: function get() {
      return {
        hass: {
          type: Object,
          observer: "hassChanged"
        },
        label: {
          type: String,
          value: "Device"
        },
        entities: {
          type: Array,
          observer: "entitiesChanged"
        },
        allowDelete: {
          type: Boolean,
          value: false
        },
        selectedEntity: {
          type: Number,
          value: -1,
          observer: "entityChanged"
        },
        formState: {
          type: String,
          // no-devices, loading, saving, editing
          value: "no-devices"
        },
        config: {
          type: Object
        }
      };
    }
  }]);

  return HaEntityConfig;
}(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_6__["PolymerElement"]);

customElements.define("ha-entity-config", HaEntityConfig);

/***/ }),

/***/ "./src/panels/config/ha-form-style.js":
/*!********************************************!*\
  !*** ./src/panels/config/ha-form-style.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var documentContainer = document.createElement("template");
documentContainer.setAttribute("style", "display: none;");
documentContainer.innerHTML = "<dom-module id=\"ha-form-style\">\n  <template>\n    <style>\n      .form-group {\n        @apply --layout-horizontal;\n        @apply --layout-center;\n        padding: 8px 16px;\n      }\n\n      .form-group label {\n        @apply --layout-flex-2;\n      }\n\n      .form-group .form-control {\n        @apply --layout-flex;\n      }\n\n      .form-group.vertical {\n        @apply --layout-vertical;\n        @apply --layout-start;\n      }\n\n      paper-dropdown-menu.form-control {\n        margin: -9px 0;\n      }\n    </style>\n  </template>\n</dom-module>";
document.head.appendChild(documentContainer.content);

/***/ }),

/***/ "./src/util/hass-attributes-util.js":
/*!******************************************!*\
  !*** ./src/util/hass-attributes-util.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var hassAttributeUtil = {};
hassAttributeUtil.DOMAIN_DEVICE_CLASS = {
  binary_sensor: ["battery", "cold", "connectivity", "door", "garage_door", "gas", "heat", "light", "lock", "moisture", "motion", "moving", "occupancy", "opening", "plug", "power", "presence", "problem", "safety", "smoke", "sound", "vibration", "window"],
  cover: ["awning", "blind", "curtain", "damper", "door", "garage", "shade", "shutter", "window"],
  sensor: ["battery", "humidity", "illuminance", "temperature", "pressure", "power", "signal_strength"],
  "switch": ["switch", "outlet"]
};
hassAttributeUtil.UNKNOWN_TYPE = "json";
hassAttributeUtil.ADD_TYPE = "key-value";
hassAttributeUtil.TYPE_TO_TAG = {
  string: "ha-customize-string",
  json: "ha-customize-string",
  icon: "ha-customize-icon",
  "boolean": "ha-customize-boolean",
  array: "ha-customize-array",
  "key-value": "ha-customize-key-value"
}; // Attributes here serve dual purpose:
// 1) Any key of this object won't be shown in more-info window.
// 2) Any key which has value other than undefined will appear in customization
//    config according to its value.

hassAttributeUtil.LOGIC_STATE_ATTRIBUTES = hassAttributeUtil.LOGIC_STATE_ATTRIBUTES || {
  entity_picture: undefined,
  friendly_name: {
    type: "string",
    description: "Name"
  },
  icon: {
    type: "icon"
  },
  emulated_hue: {
    type: "boolean",
    domains: ["emulated_hue"]
  },
  emulated_hue_name: {
    type: "string",
    domains: ["emulated_hue"]
  },
  haaska_hidden: undefined,
  haaska_name: undefined,
  homebridge_hidden: {
    type: "boolean"
  },
  homebridge_name: {
    type: "string"
  },
  supported_features: undefined,
  attribution: undefined,
  custom_ui_more_info: {
    type: "string"
  },
  custom_ui_state_card: {
    type: "string"
  },
  device_class: {
    type: "array",
    options: hassAttributeUtil.DOMAIN_DEVICE_CLASS,
    description: "Device class",
    domains: ["binary_sensor", "cover", "sensor", "switch"]
  },
  hidden: {
    type: "boolean",
    description: "Hide from UI"
  },
  assumed_state: {
    type: "boolean",
    domains: ["switch", "light", "cover", "climate", "fan", "group", "water_heater"]
  },
  initial_state: {
    type: "string",
    domains: ["automation"]
  },
  unit_of_measurement: {
    type: "string"
  }
};
/* harmony default export */ __webpack_exports__["default"] = (hassAttributeUtil);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFuZWwtY29uZmlnLWN1c3RvbWl6ZS5jaHVuay5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9jb21tb24vZW50aXR5L2NvbXB1dGVfb2JqZWN0X2lkLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vZW50aXR5L2NvbXB1dGVfc3RhdGVfZG9tYWluLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vZW50aXR5L2NvbXB1dGVfc3RhdGVfbmFtZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL2VudGl0eS9zdGF0ZXNfc29ydF9ieV9uYW1lLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2hhLWNhcmQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21peGlucy9ldmVudHMtbWl4aW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21peGlucy9sb2NhbGl6ZS1taXhpbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL2NvbmZpZy9jdXN0b21pemUvaGEtY29uZmlnLWN1c3RvbWl6ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL2NvbmZpZy9jdXN0b21pemUvaGEtY3VzdG9taXplLWF0dHJpYnV0ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL2NvbmZpZy9jdXN0b21pemUvaGEtZm9ybS1jdXN0b21pemUtYXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL2NvbmZpZy9jdXN0b21pemUvaGEtZm9ybS1jdXN0b21pemUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhbmVscy9jb25maWcvY3VzdG9taXplL3R5cGVzL2hhLWN1c3RvbWl6ZS1hcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL2NvbmZpZy9jdXN0b21pemUvdHlwZXMvaGEtY3VzdG9taXplLWJvb2xlYW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhbmVscy9jb25maWcvY3VzdG9taXplL3R5cGVzL2hhLWN1c3RvbWl6ZS1pY29uLmpzIiwid2VicGFjazovLy8uL3NyYy9wYW5lbHMvY29uZmlnL2N1c3RvbWl6ZS90eXBlcy9oYS1jdXN0b21pemUta2V5LXZhbHVlLmpzIiwid2VicGFjazovLy8uL3NyYy9wYW5lbHMvY29uZmlnL2N1c3RvbWl6ZS90eXBlcy9oYS1jdXN0b21pemUtc3RyaW5nLmpzIiwid2VicGFjazovLy8uL3NyYy9wYW5lbHMvY29uZmlnL2hhLWNvbmZpZy1zZWN0aW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9wYW5lbHMvY29uZmlnL2hhLWVudGl0eS1jb25maWcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhbmVscy9jb25maWcvaGEtZm9ybS1zdHlsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbC9oYXNzLWF0dHJpYnV0ZXMtdXRpbC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiogQ29tcHV0ZSB0aGUgb2JqZWN0IElEIG9mIGEgc3RhdGUuICovXG5leHBvcnQgY29uc3QgY29tcHV0ZU9iamVjdElkID0gKGVudGl0eUlkOiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuICByZXR1cm4gZW50aXR5SWQuc3Vic3RyKGVudGl0eUlkLmluZGV4T2YoXCIuXCIpICsgMSk7XG59O1xuIiwiaW1wb3J0IHsgSGFzc0VudGl0eSB9IGZyb20gXCJob21lLWFzc2lzdGFudC1qcy13ZWJzb2NrZXRcIjtcbmltcG9ydCB7IGNvbXB1dGVEb21haW4gfSBmcm9tIFwiLi9jb21wdXRlX2RvbWFpblwiO1xuXG5leHBvcnQgY29uc3QgY29tcHV0ZVN0YXRlRG9tYWluID0gKHN0YXRlT2JqOiBIYXNzRW50aXR5KSA9PiB7XG4gIHJldHVybiBjb21wdXRlRG9tYWluKHN0YXRlT2JqLmVudGl0eV9pZCk7XG59O1xuIiwiaW1wb3J0IHsgSGFzc0VudGl0eSB9IGZyb20gXCJob21lLWFzc2lzdGFudC1qcy13ZWJzb2NrZXRcIjtcbmltcG9ydCB7IGNvbXB1dGVPYmplY3RJZCB9IGZyb20gXCIuL2NvbXB1dGVfb2JqZWN0X2lkXCI7XG5cbmV4cG9ydCBjb25zdCBjb21wdXRlU3RhdGVOYW1lID0gKHN0YXRlT2JqOiBIYXNzRW50aXR5KTogc3RyaW5nID0+IHtcbiAgcmV0dXJuIHN0YXRlT2JqLmF0dHJpYnV0ZXMuZnJpZW5kbHlfbmFtZSA9PT0gdW5kZWZpbmVkXG4gICAgPyBjb21wdXRlT2JqZWN0SWQoc3RhdGVPYmouZW50aXR5X2lkKS5yZXBsYWNlKC9fL2csIFwiIFwiKVxuICAgIDogc3RhdGVPYmouYXR0cmlidXRlcy5mcmllbmRseV9uYW1lIHx8IFwiXCI7XG59O1xuIiwiLyoqXG4gKiBTb3J0IGZ1bmN0aW9uIHRvIGhlbHAgc29ydCBzdGF0ZXMgYnkgbmFtZVxuICpcbiAqIFVzYWdlOlxuICogICBjb25zdCBzdGF0ZXMgPSBbc3RhdGUxLCBzdGF0ZTJdXG4gKiAgIHN0YXRlcy5zb3J0KHN0YXRlc3NvcnRTdGF0ZXNCeU5hbWUpO1xuICovXG5pbXBvcnQgeyBIYXNzRW50aXR5IH0gZnJvbSBcImhvbWUtYXNzaXN0YW50LWpzLXdlYnNvY2tldFwiO1xuaW1wb3J0IHsgY29tcHV0ZVN0YXRlTmFtZSB9IGZyb20gXCIuL2NvbXB1dGVfc3RhdGVfbmFtZVwiO1xuXG5leHBvcnQgY29uc3Qgc29ydFN0YXRlc0J5TmFtZSA9IChlbnRpdHlBOiBIYXNzRW50aXR5LCBlbnRpdHlCOiBIYXNzRW50aXR5KSA9PiB7XG4gIGNvbnN0IG5hbWVBID0gY29tcHV0ZVN0YXRlTmFtZShlbnRpdHlBKTtcbiAgY29uc3QgbmFtZUIgPSBjb21wdXRlU3RhdGVOYW1lKGVudGl0eUIpO1xuICBpZiAobmFtZUEgPCBuYW1lQikge1xuICAgIHJldHVybiAtMTtcbiAgfVxuICBpZiAobmFtZUEgPiBuYW1lQikge1xuICAgIHJldHVybiAxO1xuICB9XG4gIHJldHVybiAwO1xufTtcbiIsImltcG9ydCB7XG4gIGNzcyxcbiAgQ1NTUmVzdWx0LFxuICBodG1sLFxuICBMaXRFbGVtZW50LFxuICBwcm9wZXJ0eSxcbiAgVGVtcGxhdGVSZXN1bHQsXG59IGZyb20gXCJsaXQtZWxlbWVudFwiO1xuXG5jbGFzcyBIYUNhcmQgZXh0ZW5kcyBMaXRFbGVtZW50IHtcbiAgQHByb3BlcnR5KCkgcHVibGljIGhlYWRlcj86IHN0cmluZztcblxuICBzdGF0aWMgZ2V0IHN0eWxlcygpOiBDU1NSZXN1bHQge1xuICAgIHJldHVybiBjc3NgXG4gICAgICA6aG9zdCB7XG4gICAgICAgIGJhY2tncm91bmQ6IHZhcihcbiAgICAgICAgICAtLWhhLWNhcmQtYmFja2dyb3VuZCxcbiAgICAgICAgICB2YXIoLS1wYXBlci1jYXJkLWJhY2tncm91bmQtY29sb3IsIHdoaXRlKVxuICAgICAgICApO1xuICAgICAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1oYS1jYXJkLWJvcmRlci1yYWRpdXMsIDJweCk7XG4gICAgICAgIGJveC1zaGFkb3c6IHZhcihcbiAgICAgICAgICAtLWhhLWNhcmQtYm94LXNoYWRvdyxcbiAgICAgICAgICAwIDJweCAycHggMCByZ2JhKDAsIDAsIDAsIDAuMTQpLFxuICAgICAgICAgIDAgMXB4IDVweCAwIHJnYmEoMCwgMCwgMCwgMC4xMiksXG4gICAgICAgICAgMCAzcHggMXB4IC0ycHggcmdiYSgwLCAwLCAwLCAwLjIpXG4gICAgICAgICk7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LXRleHQtY29sb3IpO1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1vdXQ7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIH1cblxuICAgICAgLmNhcmQtaGVhZGVyLFxuICAgICAgOmhvc3QgOjpzbG90dGVkKC5jYXJkLWhlYWRlcikge1xuICAgICAgICBjb2xvcjogdmFyKC0taGEtY2FyZC1oZWFkZXItY29sb3IsIC0tcHJpbWFyeS10ZXh0LWNvbG9yKTtcbiAgICAgICAgZm9udC1mYW1pbHk6IHZhcigtLWhhLWNhcmQtaGVhZGVyLWZvbnQtZmFtaWx5LCBpbmhlcml0KTtcbiAgICAgICAgZm9udC1zaXplOiB2YXIoLS1oYS1jYXJkLWhlYWRlci1mb250LXNpemUsIDI0cHgpO1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogLTAuMDEyZW07XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAzMnB4O1xuICAgICAgICBwYWRkaW5nOiAyNHB4IDE2cHggMTZweDtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICB9XG5cbiAgICAgIDpob3N0IDo6c2xvdHRlZCguY2FyZC1jb250ZW50Om5vdCg6Zmlyc3QtY2hpbGQpKSxcbiAgICAgIHNsb3Q6bm90KDpmaXJzdC1jaGlsZCk6OnNsb3R0ZWQoLmNhcmQtY29udGVudCkge1xuICAgICAgICBwYWRkaW5nLXRvcDogMHB4O1xuICAgICAgICBtYXJnaW4tdG9wOiAtOHB4O1xuICAgICAgfVxuXG4gICAgICA6aG9zdCA6OnNsb3R0ZWQoLmNhcmQtY29udGVudCkge1xuICAgICAgICBwYWRkaW5nOiAxNnB4O1xuICAgICAgfVxuXG4gICAgICA6aG9zdCA6OnNsb3R0ZWQoLmNhcmQtYWN0aW9ucykge1xuICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2U4ZThlODtcbiAgICAgICAgcGFkZGluZzogNXB4IDE2cHg7XG4gICAgICB9XG4gICAgYDtcbiAgfVxuXG4gIHByb3RlY3RlZCByZW5kZXIoKTogVGVtcGxhdGVSZXN1bHQge1xuICAgIHJldHVybiBodG1sYFxuICAgICAgJHt0aGlzLmhlYWRlclxuICAgICAgICA/IGh0bWxgXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1oZWFkZXJcIj4ke3RoaXMuaGVhZGVyfTwvZGl2PlxuICAgICAgICAgIGBcbiAgICAgICAgOiBodG1sYGB9XG4gICAgICA8c2xvdD48L3Nsb3Q+XG4gICAgYDtcbiAgfVxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJoYS1jYXJkXCIsIEhhQ2FyZCk7XG4iLCJpbXBvcnQgeyBkZWR1cGluZ01peGluIH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL21peGluXCI7XG5cbmltcG9ydCB7IGZpcmVFdmVudCB9IGZyb20gXCIuLi9jb21tb24vZG9tL2ZpcmVfZXZlbnRcIjtcblxuLy8gUG9seW1lciBsZWdhY3kgZXZlbnQgaGVscGVycyB1c2VkIGNvdXJ0ZXN5IG9mIHRoZSBQb2x5bWVyIHByb2plY3QuXG4vL1xuLy8gQ29weXJpZ2h0IChjKSAyMDE3IFRoZSBQb2x5bWVyIEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4vL1xuLy8gUmVkaXN0cmlidXRpb24gYW5kIHVzZSBpbiBzb3VyY2UgYW5kIGJpbmFyeSBmb3Jtcywgd2l0aCBvciB3aXRob3V0XG4vLyBtb2RpZmljYXRpb24sIGFyZSBwZXJtaXR0ZWQgcHJvdmlkZWQgdGhhdCB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnMgYXJlXG4vLyBtZXQ6XG4vL1xuLy8gICAgKiBSZWRpc3RyaWJ1dGlvbnMgb2Ygc291cmNlIGNvZGUgbXVzdCByZXRhaW4gdGhlIGFib3ZlIGNvcHlyaWdodFxuLy8gbm90aWNlLCB0aGlzIGxpc3Qgb2YgY29uZGl0aW9ucyBhbmQgdGhlIGZvbGxvd2luZyBkaXNjbGFpbWVyLlxuLy8gICAgKiBSZWRpc3RyaWJ1dGlvbnMgaW4gYmluYXJ5IGZvcm0gbXVzdCByZXByb2R1Y2UgdGhlIGFib3ZlXG4vLyBjb3B5cmlnaHQgbm90aWNlLCB0aGlzIGxpc3Qgb2YgY29uZGl0aW9ucyBhbmQgdGhlIGZvbGxvd2luZyBkaXNjbGFpbWVyXG4vLyBpbiB0aGUgZG9jdW1lbnRhdGlvbiBhbmQvb3Igb3RoZXIgbWF0ZXJpYWxzIHByb3ZpZGVkIHdpdGggdGhlXG4vLyBkaXN0cmlidXRpb24uXG4vLyAgICAqIE5laXRoZXIgdGhlIG5hbWUgb2YgR29vZ2xlIEluYy4gbm9yIHRoZSBuYW1lcyBvZiBpdHNcbi8vIGNvbnRyaWJ1dG9ycyBtYXkgYmUgdXNlZCB0byBlbmRvcnNlIG9yIHByb21vdGUgcHJvZHVjdHMgZGVyaXZlZCBmcm9tXG4vLyB0aGlzIHNvZnR3YXJlIHdpdGhvdXQgc3BlY2lmaWMgcHJpb3Igd3JpdHRlbiBwZXJtaXNzaW9uLlxuLy9cbi8vIFRISVMgU09GVFdBUkUgSVMgUFJPVklERUQgQlkgVEhFIENPUFlSSUdIVCBIT0xERVJTIEFORCBDT05UUklCVVRPUlNcbi8vIFwiQVMgSVNcIiBBTkQgQU5ZIEVYUFJFU1MgT1IgSU1QTElFRCBXQVJSQU5USUVTLCBJTkNMVURJTkcsIEJVVCBOT1Rcbi8vIExJTUlURUQgVE8sIFRIRSBJTVBMSUVEIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZIEFORCBGSVRORVNTIEZPUlxuLy8gQSBQQVJUSUNVTEFSIFBVUlBPU0UgQVJFIERJU0NMQUlNRUQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBDT1BZUklHSFRcbi8vIE9XTkVSIE9SIENPTlRSSUJVVE9SUyBCRSBMSUFCTEUgRk9SIEFOWSBESVJFQ1QsIElORElSRUNULCBJTkNJREVOVEFMLFxuLy8gU1BFQ0lBTCwgRVhFTVBMQVJZLCBPUiBDT05TRVFVRU5USUFMIERBTUFHRVMgKElOQ0xVRElORywgQlVUIE5PVFxuLy8gTElNSVRFRCBUTywgUFJPQ1VSRU1FTlQgT0YgU1VCU1RJVFVURSBHT09EUyBPUiBTRVJWSUNFUzsgTE9TUyBPRiBVU0UsXG4vLyBEQVRBLCBPUiBQUk9GSVRTOyBPUiBCVVNJTkVTUyBJTlRFUlJVUFRJT04pIEhPV0VWRVIgQ0FVU0VEIEFORCBPTiBBTllcbi8vIFRIRU9SWSBPRiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQ09OVFJBQ1QsIFNUUklDVCBMSUFCSUxJVFksIE9SIFRPUlRcbi8vIChJTkNMVURJTkcgTkVHTElHRU5DRSBPUiBPVEhFUldJU0UpIEFSSVNJTkcgSU4gQU5ZIFdBWSBPVVQgT0YgVEhFIFVTRVxuLy8gT0YgVEhJUyBTT0ZUV0FSRSwgRVZFTiBJRiBBRFZJU0VEIE9GIFRIRSBQT1NTSUJJTElUWSBPRiBTVUNIIERBTUFHRS5cblxuLyogQHBvbHltZXJNaXhpbiAqL1xuZXhwb3J0IGNvbnN0IEV2ZW50c01peGluID0gZGVkdXBpbmdNaXhpbihcbiAgKHN1cGVyQ2xhc3MpID0+XG4gICAgY2xhc3MgZXh0ZW5kcyBzdXBlckNsYXNzIHtcbiAgICAgIC8qKlxuICAgKiBEaXNwYXRjaGVzIGEgY3VzdG9tIGV2ZW50IHdpdGggYW4gb3B0aW9uYWwgZGV0YWlsIHZhbHVlLlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gdHlwZSBOYW1lIG9mIGV2ZW50IHR5cGUuXG4gICAqIEBwYXJhbSB7Kj19IGRldGFpbCBEZXRhaWwgdmFsdWUgY29udGFpbmluZyBldmVudC1zcGVjaWZpY1xuICAgKiAgIHBheWxvYWQuXG4gICAqIEBwYXJhbSB7eyBidWJibGVzOiAoYm9vbGVhbnx1bmRlZmluZWQpLFxuICAgICAgICAgICAgICAgY2FuY2VsYWJsZTogKGJvb2xlYW58dW5kZWZpbmVkKSxcbiAgICAgICAgICAgICAgICBjb21wb3NlZDogKGJvb2xlYW58dW5kZWZpbmVkKSB9PX1cbiAgICAqICBvcHRpb25zIE9iamVjdCBzcGVjaWZ5aW5nIG9wdGlvbnMuICBUaGVzZSBtYXkgaW5jbHVkZTpcbiAgICAqICBgYnViYmxlc2AgKGJvb2xlYW4sIGRlZmF1bHRzIHRvIGB0cnVlYCksXG4gICAgKiAgYGNhbmNlbGFibGVgIChib29sZWFuLCBkZWZhdWx0cyB0byBmYWxzZSksIGFuZFxuICAgICogIGBub2RlYCBvbiB3aGljaCB0byBmaXJlIHRoZSBldmVudCAoSFRNTEVsZW1lbnQsIGRlZmF1bHRzIHRvIGB0aGlzYCkuXG4gICAgKiBAcmV0dXJuIHtFdmVudH0gVGhlIG5ldyBldmVudCB0aGF0IHdhcyBmaXJlZC5cbiAgICAqL1xuICAgICAgZmlyZSh0eXBlLCBkZXRhaWwsIG9wdGlvbnMpIHtcbiAgICAgICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gICAgICAgIHJldHVybiBmaXJlRXZlbnQob3B0aW9ucy5ub2RlIHx8IHRoaXMsIHR5cGUsIGRldGFpbCwgb3B0aW9ucyk7XG4gICAgICB9XG4gICAgfVxuKTtcbiIsImltcG9ydCB7IGRlZHVwaW5nTWl4aW4gfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvbWl4aW5cIjtcbi8qKlxuICogUG9seW1lciBNaXhpbiB0byBlbmFibGUgYSBsb2NhbGl6ZSBmdW5jdGlvbiBwb3dlcmVkIGJ5IGxhbmd1YWdlL3Jlc291cmNlcyBmcm9tIGhhc3Mgb2JqZWN0LlxuICpcbiAqIEBwb2x5bWVyTWl4aW5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZGVkdXBpbmdNaXhpbihcbiAgKHN1cGVyQ2xhc3MpID0+XG4gICAgY2xhc3MgZXh0ZW5kcyBzdXBlckNsYXNzIHtcbiAgICAgIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBoYXNzOiBPYmplY3QsXG5cbiAgICAgICAgICAvKipcbiAgICAgICAgICAgKiBUcmFuc2xhdGVzIGEgc3RyaW5nIHRvIHRoZSBjdXJyZW50IGBsYW5ndWFnZWAuIEFueSBwYXJhbWV0ZXJzIHRvIHRoZVxuICAgICAgICAgICAqIHN0cmluZyBzaG91bGQgYmUgcGFzc2VkIGluIG9yZGVyLCBhcyBmb2xsb3dzOlxuICAgICAgICAgICAqIGBsb2NhbGl6ZShzdHJpbmdLZXksIHBhcmFtMU5hbWUsIHBhcmFtMVZhbHVlLCBwYXJhbTJOYW1lLCBwYXJhbTJWYWx1ZSlgXG4gICAgICAgICAgICovXG4gICAgICAgICAgbG9jYWxpemU6IHtcbiAgICAgICAgICAgIHR5cGU6IEZ1bmN0aW9uLFxuICAgICAgICAgICAgY29tcHV0ZWQ6IFwiX19jb21wdXRlTG9jYWxpemUoaGFzcy5sb2NhbGl6ZSlcIixcbiAgICAgICAgICB9LFxuICAgICAgICB9O1xuICAgICAgfVxuXG4gICAgICBfX2NvbXB1dGVMb2NhbGl6ZShsb2NhbGl6ZSkge1xuICAgICAgICByZXR1cm4gbG9jYWxpemU7XG4gICAgICB9XG4gICAgfVxuKTtcbiIsImltcG9ydCBcIkBwb2x5bWVyL2FwcC1sYXlvdXQvYXBwLWhlYWRlci1sYXlvdXQvYXBwLWhlYWRlci1sYXlvdXRcIjtcbmltcG9ydCBcIkBwb2x5bWVyL2FwcC1sYXlvdXQvYXBwLWhlYWRlci9hcHAtaGVhZGVyXCI7XG5pbXBvcnQgXCJAcG9seW1lci9hcHAtbGF5b3V0L2FwcC10b29sYmFyL2FwcC10b29sYmFyXCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1pY29uLWJ1dHRvbi9wYXBlci1pY29uLWJ1dHRvblwiO1xuaW1wb3J0IHsgaHRtbCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZ1wiO1xuaW1wb3J0IHsgUG9seW1lckVsZW1lbnQgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWVsZW1lbnRcIjtcblxuaW1wb3J0IFwiLi4vLi4vLi4vcmVzb3VyY2VzL2hhLXN0eWxlXCI7XG5pbXBvcnQgXCIuLi8uLi8uLi9jb21wb25lbnRzL2hhLXBhcGVyLWljb24tYnV0dG9uLWFycm93LXByZXZcIjtcblxuaW1wb3J0IFwiLi4vaGEtY29uZmlnLXNlY3Rpb25cIjtcbmltcG9ydCBcIi4uL2hhLWVudGl0eS1jb25maWdcIjtcbmltcG9ydCBcIi4vaGEtZm9ybS1jdXN0b21pemVcIjtcblxuaW1wb3J0IHsgY29tcHV0ZVN0YXRlTmFtZSB9IGZyb20gXCIuLi8uLi8uLi9jb21tb24vZW50aXR5L2NvbXB1dGVfc3RhdGVfbmFtZVwiO1xuaW1wb3J0IHsgY29tcHV0ZVN0YXRlRG9tYWluIH0gZnJvbSBcIi4uLy4uLy4uL2NvbW1vbi9lbnRpdHkvY29tcHV0ZV9zdGF0ZV9kb21haW5cIjtcbmltcG9ydCB7IHNvcnRTdGF0ZXNCeU5hbWUgfSBmcm9tIFwiLi4vLi4vLi4vY29tbW9uL2VudGl0eS9zdGF0ZXNfc29ydF9ieV9uYW1lXCI7XG5pbXBvcnQgTG9jYWxpemVNaXhpbiBmcm9tIFwiLi4vLi4vLi4vbWl4aW5zL2xvY2FsaXplLW1peGluXCI7XG5cbi8qXG4gKiBAYXBwbGllc01peGluIExvY2FsaXplTWl4aW5cbiAqL1xuY2xhc3MgSGFDb25maWdDdXN0b21pemUgZXh0ZW5kcyBMb2NhbGl6ZU1peGluKFBvbHltZXJFbGVtZW50KSB7XG4gIHN0YXRpYyBnZXQgdGVtcGxhdGUoKSB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8c3R5bGUgaW5jbHVkZT1cImhhLXN0eWxlXCI+PC9zdHlsZT5cblxuICAgICAgPGFwcC1oZWFkZXItbGF5b3V0IGhhcy1zY3JvbGxpbmctcmVnaW9uPVwiXCI+XG4gICAgICAgIDxhcHAtaGVhZGVyIHNsb3Q9XCJoZWFkZXJcIiBmaXhlZD1cIlwiPlxuICAgICAgICAgIDxhcHAtdG9vbGJhcj5cbiAgICAgICAgICAgIDxoYS1wYXBlci1pY29uLWJ1dHRvbi1hcnJvdy1wcmV2XG4gICAgICAgICAgICAgIG9uLWNsaWNrPVwiX2JhY2tUYXBwZWRcIlxuICAgICAgICAgICAgPjwvaGEtcGFwZXItaWNvbi1idXR0b24tYXJyb3ctcHJldj5cbiAgICAgICAgICAgIDxkaXYgbWFpbi10aXRsZT1cIlwiPlxuICAgICAgICAgICAgICBbW2xvY2FsaXplKCd1aS5wYW5lbC5jb25maWcuY3VzdG9taXplLmNhcHRpb24nKV1dXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2FwcC10b29sYmFyPlxuICAgICAgICA8L2FwcC1oZWFkZXI+XG5cbiAgICAgICAgPGRpdiBjbGFzcyQ9XCJbW2NvbXB1dGVDbGFzc2VzKGlzV2lkZSldXVwiPlxuICAgICAgICAgIDxoYS1jb25maWctc2VjdGlvbiBpcy13aWRlPVwiW1tpc1dpZGVdXVwiPlxuICAgICAgICAgICAgPHNwYW4gc2xvdD1cImhlYWRlclwiPlxuICAgICAgICAgICAgICBbW2xvY2FsaXplKCd1aS5wYW5lbC5jb25maWcuY3VzdG9taXplLnBpY2tlci5oZWFkZXInKV1dXG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8c3BhbiBzbG90PVwiaW50cm9kdWN0aW9uXCI+XG4gICAgICAgICAgICAgIFtbbG9jYWxpemUoJ3VpLnBhbmVsLmNvbmZpZy5jdXN0b21pemUucGlja2VyLmludHJvZHVjdGlvbicpXV1cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDxoYS1lbnRpdHktY29uZmlnXG4gICAgICAgICAgICAgIGhhc3M9XCJbW2hhc3NdXVwiXG4gICAgICAgICAgICAgIGxhYmVsPVwiRW50aXR5XCJcbiAgICAgICAgICAgICAgZW50aXRpZXM9XCJbW2VudGl0aWVzXV1cIlxuICAgICAgICAgICAgICBjb25maWc9XCJbW2VudGl0eUNvbmZpZ11dXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgIDwvaGEtZW50aXR5LWNvbmZpZz5cbiAgICAgICAgICA8L2hhLWNvbmZpZy1zZWN0aW9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvYXBwLWhlYWRlci1sYXlvdXQ+XG4gICAgYDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaGFzczogT2JqZWN0LFxuICAgICAgaXNXaWRlOiBCb29sZWFuLFxuXG4gICAgICBlbnRpdGllczoge1xuICAgICAgICB0eXBlOiBBcnJheSxcbiAgICAgICAgY29tcHV0ZWQ6IFwiY29tcHV0ZUVudGl0aWVzKGhhc3MpXCIsXG4gICAgICB9LFxuXG4gICAgICBlbnRpdHlDb25maWc6IHtcbiAgICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgICB2YWx1ZToge1xuICAgICAgICAgIGNvbXBvbmVudDogXCJoYS1mb3JtLWN1c3RvbWl6ZVwiLFxuICAgICAgICAgIGNvbXB1dGVTZWxlY3RDYXB0aW9uOiAoc3RhdGVPYmopID0+XG4gICAgICAgICAgICBjb21wdXRlU3RhdGVOYW1lKHN0YXRlT2JqKSArXG4gICAgICAgICAgICBcIiAoXCIgK1xuICAgICAgICAgICAgY29tcHV0ZVN0YXRlRG9tYWluKHN0YXRlT2JqKSArXG4gICAgICAgICAgICBcIilcIixcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxuXG4gIGNvbXB1dGVDbGFzc2VzKGlzV2lkZSkge1xuICAgIHJldHVybiBpc1dpZGUgPyBcImNvbnRlbnRcIiA6IFwiY29udGVudCBuYXJyb3dcIjtcbiAgfVxuXG4gIF9iYWNrVGFwcGVkKCkge1xuICAgIGhpc3RvcnkuYmFjaygpO1xuICB9XG5cbiAgY29tcHV0ZUVudGl0aWVzKGhhc3MpIHtcbiAgICByZXR1cm4gT2JqZWN0LmtleXMoaGFzcy5zdGF0ZXMpXG4gICAgICAubWFwKChrZXkpID0+IGhhc3Muc3RhdGVzW2tleV0pXG4gICAgICAuc29ydChzb3J0U3RhdGVzQnlOYW1lKTtcbiAgfVxufVxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwiaGEtY29uZmlnLWN1c3RvbWl6ZVwiLCBIYUNvbmZpZ0N1c3RvbWl6ZSk7XG4iLCJpbXBvcnQgXCJAcG9seW1lci9wYXBlci1pY29uLWJ1dHRvbi9wYXBlci1pY29uLWJ1dHRvblwiO1xuaW1wb3J0IHsgaHRtbCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZ1wiO1xuaW1wb3J0IHsgUG9seW1lckVsZW1lbnQgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWVsZW1lbnRcIjtcblxuaW1wb3J0IGhhc3NBdHRyaWJ1dGVVdGlsIGZyb20gXCIuLi8uLi8uLi91dGlsL2hhc3MtYXR0cmlidXRlcy11dGlsXCI7XG5pbXBvcnQgXCIuLi9oYS1mb3JtLXN0eWxlXCI7XG5pbXBvcnQgXCIuL3R5cGVzL2hhLWN1c3RvbWl6ZS1hcnJheVwiO1xuaW1wb3J0IFwiLi90eXBlcy9oYS1jdXN0b21pemUtYm9vbGVhblwiO1xuaW1wb3J0IFwiLi90eXBlcy9oYS1jdXN0b21pemUtaWNvblwiO1xuaW1wb3J0IFwiLi90eXBlcy9oYS1jdXN0b21pemUta2V5LXZhbHVlXCI7XG5pbXBvcnQgXCIuL3R5cGVzL2hhLWN1c3RvbWl6ZS1zdHJpbmdcIjtcblxuY2xhc3MgSGFDdXN0b21pemVBdHRyaWJ1dGUgZXh0ZW5kcyBQb2x5bWVyRWxlbWVudCB7XG4gIHN0YXRpYyBnZXQgdGVtcGxhdGUoKSB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8c3R5bGUgaW5jbHVkZT1cImhhLWZvcm0tc3R5bGVcIj5cbiAgICAgICAgOmhvc3Qge1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiA0MHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmJ1dHRvbiB7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIG1hcmdpbi10b3A6IC0yMHB4O1xuICAgICAgICAgIHRvcDogNTAlO1xuICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICB9XG4gICAgICA8L3N0eWxlPlxuICAgICAgPGRpdiBpZD1cIndyYXBwZXJcIiBjbGFzcz1cImZvcm0tZ3JvdXBcIj48L2Rpdj5cbiAgICAgIDxwYXBlci1pY29uLWJ1dHRvblxuICAgICAgICBjbGFzcz1cImJ1dHRvblwiXG4gICAgICAgIGljb249XCJbW2dldEljb24oaXRlbS5zZWNvbmRhcnkpXV1cIlxuICAgICAgICBvbi1jbGljaz1cInRhcEJ1dHRvblwiXG4gICAgICA+PC9wYXBlci1pY29uLWJ1dHRvbj5cbiAgICBgO1xuICB9XG5cbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBpdGVtOiB7XG4gICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgICAgbm90aWZ5OiB0cnVlLFxuICAgICAgICBvYnNlcnZlcjogXCJpdGVtT2JzZXJ2ZXJcIixcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxuXG4gIHRhcEJ1dHRvbigpIHtcbiAgICBpZiAodGhpcy5pdGVtLnNlY29uZGFyeSkge1xuICAgICAgdGhpcy5pdGVtID0geyAuLi50aGlzLml0ZW0sIHNlY29uZGFyeTogZmFsc2UgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5pdGVtID0geyAuLi50aGlzLml0ZW0sIGNsb3NlZDogdHJ1ZSB9O1xuICAgIH1cbiAgfVxuXG4gIGdldEljb24oc2Vjb25kYXJ5KSB7XG4gICAgcmV0dXJuIHNlY29uZGFyeSA/IFwiaGFzczpwZW5jaWxcIiA6IFwiaGFzczpjbG9zZVwiO1xuICB9XG5cbiAgaXRlbU9ic2VydmVyKGl0ZW0pIHtcbiAgICBjb25zdCB3cmFwcGVyID0gdGhpcy4kLndyYXBwZXI7XG4gICAgY29uc3QgdGFnID0gaGFzc0F0dHJpYnV0ZVV0aWwuVFlQRV9UT19UQUdbaXRlbS50eXBlXS50b1VwcGVyQ2FzZSgpO1xuICAgIGxldCBjaGlsZDtcbiAgICBpZiAod3JhcHBlci5sYXN0Q2hpbGQgJiYgd3JhcHBlci5sYXN0Q2hpbGQudGFnTmFtZSA9PT0gdGFnKSB7XG4gICAgICBjaGlsZCA9IHdyYXBwZXIubGFzdENoaWxkO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAod3JhcHBlci5sYXN0Q2hpbGQpIHtcbiAgICAgICAgd3JhcHBlci5yZW1vdmVDaGlsZCh3cmFwcGVyLmxhc3RDaGlsZCk7XG4gICAgICB9XG4gICAgICAvLyBDcmVhdGluZyBhbiBlbGVtZW50IHdpdGggdXBwZXIgY2FzZSB3b3JrcyBmaW5lIGluIENocm9tZSwgYnV0IGluIEZGIGl0IGRvZXNuJ3QgaW1tZWRpYXRlbHlcbiAgICAgIC8vIGJlY29tZSBhIGRlZmluZWQgQ3VzdG9tIEVsZW1lbnQuIFBvbHltZXIgZG9lcyB0aGF0IGluIHNvbWUgbGF0ZXIgcGFzcy5cbiAgICAgIHRoaXMuJC5jaGlsZCA9IGNoaWxkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWcudG9Mb3dlckNhc2UoKSk7XG4gICAgICBjaGlsZC5jbGFzc05hbWUgPSBcImZvcm0tY29udHJvbFwiO1xuICAgICAgY2hpbGQuYWRkRXZlbnRMaXN0ZW5lcihcIml0ZW0tY2hhbmdlZFwiLCAoKSA9PiB7XG4gICAgICAgIHRoaXMuaXRlbSA9IHsgLi4uY2hpbGQuaXRlbSB9O1xuICAgICAgfSk7XG4gICAgfVxuICAgIGNoaWxkLnNldFByb3BlcnRpZXMoeyBpdGVtOiB0aGlzLml0ZW0gfSk7XG4gICAgaWYgKGNoaWxkLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICAgIHdyYXBwZXIuYXBwZW5kQ2hpbGQoY2hpbGQpO1xuICAgIH1cbiAgfVxufVxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwiaGEtY3VzdG9taXplLWF0dHJpYnV0ZVwiLCBIYUN1c3RvbWl6ZUF0dHJpYnV0ZSk7XG4iLCJpbXBvcnQgeyBNdXRhYmxlRGF0YSB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL2xpYi9taXhpbnMvbXV0YWJsZS1kYXRhXCI7XG5pbXBvcnQgeyBodG1sIH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2h0bWwtdGFnXCI7XG5pbXBvcnQgeyBQb2x5bWVyRWxlbWVudCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL3BvbHltZXItZWxlbWVudFwiO1xuXG5pbXBvcnQgXCIuL2hhLWN1c3RvbWl6ZS1hdHRyaWJ1dGVcIjtcblxuY2xhc3MgSGFGb3JtQ3VzdG9taXplQXR0cmlidXRlcyBleHRlbmRzIE11dGFibGVEYXRhKFBvbHltZXJFbGVtZW50KSB7XG4gIHN0YXRpYyBnZXQgdGVtcGxhdGUoKSB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8c3R5bGU+XG4gICAgICAgIFtoaWRkZW5dIHtcbiAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICB9XG4gICAgICA8L3N0eWxlPlxuICAgICAgPHRlbXBsYXRlIGlzPVwiZG9tLXJlcGVhdFwiIGl0ZW1zPVwie3thdHRyaWJ1dGVzfX1cIiBtdXRhYmxlLWRhdGE9XCJcIj5cbiAgICAgICAgPGhhLWN1c3RvbWl6ZS1hdHRyaWJ1dGUgaXRlbT1cInt7aXRlbX19XCIgaGlkZGVuJD1cIltbaXRlbS5jbG9zZWRdXVwiPlxuICAgICAgICA8L2hhLWN1c3RvbWl6ZS1hdHRyaWJ1dGU+XG4gICAgICA8L3RlbXBsYXRlPlxuICAgIGA7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGF0dHJpYnV0ZXM6IHtcbiAgICAgICAgdHlwZTogQXJyYXksXG4gICAgICAgIG5vdGlmeTogdHJ1ZSxcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxufVxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFxuICBcImhhLWZvcm0tY3VzdG9taXplLWF0dHJpYnV0ZXNcIixcbiAgSGFGb3JtQ3VzdG9taXplQXR0cmlidXRlc1xuKTtcbiIsImltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWRyb3Bkb3duLW1lbnUvcGFwZXItZHJvcGRvd24tbWVudVwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItaXRlbS9wYXBlci1pdGVtXCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1saXN0Ym94L3BhcGVyLWxpc3Rib3hcIjtcbmltcG9ydCB7IGh0bWwgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvaHRtbC10YWdcIjtcbmltcG9ydCB7IFBvbHltZXJFbGVtZW50IH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvcG9seW1lci1lbGVtZW50XCI7XG5cbmltcG9ydCBoYXNzQXR0cmlidXRlVXRpbCBmcm9tIFwiLi4vLi4vLi4vdXRpbC9oYXNzLWF0dHJpYnV0ZXMtdXRpbFwiO1xuaW1wb3J0IFwiLi9oYS1mb3JtLWN1c3RvbWl6ZS1hdHRyaWJ1dGVzXCI7XG5cbmltcG9ydCB7IGNvbXB1dGVTdGF0ZURvbWFpbiB9IGZyb20gXCIuLi8uLi8uLi9jb21tb24vZW50aXR5L2NvbXB1dGVfc3RhdGVfZG9tYWluXCI7XG5cbmNsYXNzIEhhRm9ybUN1c3RvbWl6ZSBleHRlbmRzIFBvbHltZXJFbGVtZW50IHtcbiAgc3RhdGljIGdldCB0ZW1wbGF0ZSgpIHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxzdHlsZSBpbmNsdWRlPVwiaXJvbi1mbGV4IGhhLXN0eWxlIGhhLWZvcm0tc3R5bGVcIj5cbiAgICAgICAgLndhcm5pbmcge1xuICAgICAgICAgIGNvbG9yOiByZWQ7XG4gICAgICAgIH1cblxuICAgICAgICAuYXR0cmlidXRlcy10ZXh0IHtcbiAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gICAgICAgIH1cbiAgICAgIDwvc3R5bGU+XG4gICAgICA8dGVtcGxhdGVcbiAgICAgICAgaXM9XCJkb20taWZcIlxuICAgICAgICBpZj1cIltbY29tcHV0ZVNob3dXYXJuaW5nKGxvY2FsQ29uZmlnLCBnbG9iYWxDb25maWcpXV1cIlxuICAgICAgPlxuICAgICAgICA8ZGl2IGNsYXNzPVwid2FybmluZ1wiPlxuICAgICAgICAgIEl0IHNlZW1zIHRoYXQgeW91ciBjb25maWd1cmF0aW9uLnlhbWwgZG9lc24ndCBwcm9wZXJseSBpbmNsdWRlXG4gICAgICAgICAgY3VzdG9taXplLnlhbWw8YnIgLz5cbiAgICAgICAgICBDaGFuZ2VzIG1hZGUgaGVyZSB3b24ndCBhZmZlY3QgeW91ciBjb25maWd1cmF0aW9uLlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvdGVtcGxhdGU+XG4gICAgICA8dGVtcGxhdGUgaXM9XCJkb20taWZcIiBpZj1cIltbaGFzTG9jYWxBdHRyaWJ1dGVzXV1cIj5cbiAgICAgICAgPGg0IGNsYXNzPVwiYXR0cmlidXRlcy10ZXh0XCI+XG4gICAgICAgICAgVGhlIGZvbGxvd2luZyBhdHRyaWJ1dGVzIGFyZSBhbHJlYWR5IHNldCBpbiBjdXN0b21pemUueWFtbDxiciAvPlxuICAgICAgICA8L2g0PlxuICAgICAgICA8aGEtZm9ybS1jdXN0b21pemUtYXR0cmlidXRlc1xuICAgICAgICAgIGF0dHJpYnV0ZXM9XCJ7e2xvY2FsQXR0cmlidXRlc319XCJcbiAgICAgICAgPjwvaGEtZm9ybS1jdXN0b21pemUtYXR0cmlidXRlcz5cbiAgICAgIDwvdGVtcGxhdGU+XG4gICAgICA8dGVtcGxhdGUgaXM9XCJkb20taWZcIiBpZj1cIltbaGFzR2xvYmFsQXR0cmlidXRlc11dXCI+XG4gICAgICAgIDxoNCBjbGFzcz1cImF0dHJpYnV0ZXMtdGV4dFwiPlxuICAgICAgICAgIFRoZSBmb2xsb3dpbmcgYXR0cmlidXRlcyBhcmUgY3VzdG9taXplZCBmcm9tIG91dHNpZGUgb2ZcbiAgICAgICAgICBjdXN0b21pemUueWFtbDxiciAvPlxuICAgICAgICAgIFBvc3NpYmx5IHZpYSBhIGRvbWFpbiwgYSBnbG9iIG9yIGEgZGlmZmVyZW50IGluY2x1ZGUuXG4gICAgICAgIDwvaDQ+XG4gICAgICAgIDxoYS1mb3JtLWN1c3RvbWl6ZS1hdHRyaWJ1dGVzXG4gICAgICAgICAgYXR0cmlidXRlcz1cInt7Z2xvYmFsQXR0cmlidXRlc319XCJcbiAgICAgICAgPjwvaGEtZm9ybS1jdXN0b21pemUtYXR0cmlidXRlcz5cbiAgICAgIDwvdGVtcGxhdGU+XG4gICAgICA8dGVtcGxhdGUgaXM9XCJkb20taWZcIiBpZj1cIltbaGFzRXhpc3RpbmdBdHRyaWJ1dGVzXV1cIj5cbiAgICAgICAgPGg0IGNsYXNzPVwiYXR0cmlidXRlcy10ZXh0XCI+XG4gICAgICAgICAgVGhlIGZvbGxvd2luZyBhdHRyaWJ1dGVzIG9mIHRoZSBlbnRpdHkgYXJlIHNldCBwcm9ncmFtYXRpY2FsbHkuPGJyIC8+XG4gICAgICAgICAgWW91IGNhbiBvdmVycmlkZSB0aGVtIGlmIHlvdSBsaWtlLlxuICAgICAgICA8L2g0PlxuICAgICAgICA8aGEtZm9ybS1jdXN0b21pemUtYXR0cmlidXRlc1xuICAgICAgICAgIGF0dHJpYnV0ZXM9XCJ7e2V4aXN0aW5nQXR0cmlidXRlc319XCJcbiAgICAgICAgPjwvaGEtZm9ybS1jdXN0b21pemUtYXR0cmlidXRlcz5cbiAgICAgIDwvdGVtcGxhdGU+XG4gICAgICA8dGVtcGxhdGUgaXM9XCJkb20taWZcIiBpZj1cIltbaGFzTmV3QXR0cmlidXRlc11dXCI+XG4gICAgICAgIDxoNCBjbGFzcz1cImF0dHJpYnV0ZXMtdGV4dFwiPlxuICAgICAgICAgIFRoZSBmb2xsb3dpbmcgYXR0cmlidXRlcyB3ZXJlbid0IHNldC4gU2V0IHRoZW0gaWYgeW91IGxpa2UuXG4gICAgICAgIDwvaDQ+XG4gICAgICAgIDxoYS1mb3JtLWN1c3RvbWl6ZS1hdHRyaWJ1dGVzXG4gICAgICAgICAgYXR0cmlidXRlcz1cInt7bmV3QXR0cmlidXRlc319XCJcbiAgICAgICAgPjwvaGEtZm9ybS1jdXN0b21pemUtYXR0cmlidXRlcz5cbiAgICAgIDwvdGVtcGxhdGU+XG4gICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICA8cGFwZXItZHJvcGRvd24tbWVudVxuICAgICAgICAgIGxhYmVsPVwiUGljayBhbiBhdHRyaWJ1dGUgdG8gb3ZlcnJpZGVcIlxuICAgICAgICAgIGNsYXNzPVwiZmxleFwiXG4gICAgICAgICAgZHluYW1pYy1hbGlnbj1cIlwiXG4gICAgICAgID5cbiAgICAgICAgICA8cGFwZXItbGlzdGJveFxuICAgICAgICAgICAgc2xvdD1cImRyb3Bkb3duLWNvbnRlbnRcIlxuICAgICAgICAgICAgc2VsZWN0ZWQ9XCJ7e3NlbGVjdGVkTmV3QXR0cmlidXRlfX1cIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDx0ZW1wbGF0ZVxuICAgICAgICAgICAgICBpcz1cImRvbS1yZXBlYXRcIlxuICAgICAgICAgICAgICBpdGVtcz1cIltbbmV3QXR0cmlidXRlc09wdGlvbnNdXVwiXG4gICAgICAgICAgICAgIGFzPVwib3B0aW9uXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPHBhcGVyLWl0ZW0+W1tvcHRpb25dXTwvcGFwZXItaXRlbT5cbiAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgPC9wYXBlci1saXN0Ym94PlxuICAgICAgICA8L3BhcGVyLWRyb3Bkb3duLW1lbnU+XG4gICAgICA8L2Rpdj5cbiAgICBgO1xuICB9XG5cbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBoYXNzOiB7XG4gICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgIH0sXG5cbiAgICAgIGVudGl0eTogT2JqZWN0LFxuXG4gICAgICBsb2NhbEF0dHJpYnV0ZXM6IHtcbiAgICAgICAgdHlwZTogQXJyYXksXG4gICAgICAgIGNvbXB1dGVkOiBcImNvbXB1dGVMb2NhbEF0dHJpYnV0ZXMobG9jYWxDb25maWcpXCIsXG4gICAgICB9LFxuICAgICAgaGFzTG9jYWxBdHRyaWJ1dGVzOiBCb29sZWFuLFxuXG4gICAgICBnbG9iYWxBdHRyaWJ1dGVzOiB7XG4gICAgICAgIHR5cGU6IEFycmF5LFxuICAgICAgICBjb21wdXRlZDogXCJjb21wdXRlR2xvYmFsQXR0cmlidXRlcyhsb2NhbENvbmZpZywgZ2xvYmFsQ29uZmlnKVwiLFxuICAgICAgfSxcbiAgICAgIGhhc0dsb2JhbEF0dHJpYnV0ZXM6IEJvb2xlYW4sXG5cbiAgICAgIGV4aXN0aW5nQXR0cmlidXRlczoge1xuICAgICAgICB0eXBlOiBBcnJheSxcbiAgICAgICAgY29tcHV0ZWQ6XG4gICAgICAgICAgXCJjb21wdXRlRXhpc3RpbmdBdHRyaWJ1dGVzKGxvY2FsQ29uZmlnLCBnbG9iYWxDb25maWcsIGVudGl0eSlcIixcbiAgICAgIH0sXG4gICAgICBoYXNFeGlzdGluZ0F0dHJpYnV0ZXM6IEJvb2xlYW4sXG5cbiAgICAgIG5ld0F0dHJpYnV0ZXM6IHtcbiAgICAgICAgdHlwZTogQXJyYXksXG4gICAgICAgIHZhbHVlOiBbXSxcbiAgICAgIH0sXG4gICAgICBoYXNOZXdBdHRyaWJ1dGVzOiBCb29sZWFuLFxuXG4gICAgICBuZXdBdHRyaWJ1dGVzT3B0aW9uczogQXJyYXksXG4gICAgICBzZWxlY3RlZE5ld0F0dHJpYnV0ZToge1xuICAgICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICAgIHZhbHVlOiAtMSxcbiAgICAgICAgb2JzZXJ2ZXI6IFwic2VsZWN0ZWROZXdBdHRyaWJ1dGVPYnNlcnZlclwiLFxuICAgICAgfSxcblxuICAgICAgbG9jYWxDb25maWc6IE9iamVjdCxcbiAgICAgIGdsb2JhbENvbmZpZzogT2JqZWN0LFxuICAgIH07XG4gIH1cblxuICBzdGF0aWMgZ2V0IG9ic2VydmVycygpIHtcbiAgICByZXR1cm4gW1xuICAgICAgXCJhdHRyaWJ1dGVzT2JzZXJ2ZXIobG9jYWxBdHRyaWJ1dGVzLiosIGdsb2JhbEF0dHJpYnV0ZXMuKiwgZXhpc3RpbmdBdHRyaWJ1dGVzLiosIG5ld0F0dHJpYnV0ZXMuKilcIixcbiAgICBdO1xuICB9XG5cbiAgX2luaXRPcGVuT2JqZWN0KGtleSwgdmFsdWUsIHNlY29uZGFyeSwgY29uZmlnKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGF0dHJpYnV0ZToga2V5LFxuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgY2xvc2VkOiBmYWxzZSxcbiAgICAgIGRvbWFpbjogY29tcHV0ZVN0YXRlRG9tYWluKHRoaXMuZW50aXR5KSxcbiAgICAgIHNlY29uZGFyeTogc2Vjb25kYXJ5LFxuICAgICAgZGVzY3JpcHRpb246IGtleSxcbiAgICAgIC4uLmNvbmZpZyxcbiAgICB9O1xuICB9XG5cbiAgbG9hZEVudGl0eShlbnRpdHkpIHtcbiAgICB0aGlzLmVudGl0eSA9IGVudGl0eTtcbiAgICByZXR1cm4gdGhpcy5oYXNzXG4gICAgICAuY2FsbEFwaShcIkdFVFwiLCBcImNvbmZpZy9jdXN0b21pemUvY29uZmlnL1wiICsgZW50aXR5LmVudGl0eV9pZClcbiAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgIHRoaXMubG9jYWxDb25maWcgPSBkYXRhLmxvY2FsO1xuICAgICAgICB0aGlzLmdsb2JhbENvbmZpZyA9IGRhdGEuZ2xvYmFsO1xuICAgICAgICB0aGlzLm5ld0F0dHJpYnV0ZXMgPSBbXTtcbiAgICAgIH0pO1xuICB9XG5cbiAgc2F2ZUVudGl0eSgpIHtcbiAgICBjb25zdCBkYXRhID0ge307XG4gICAgY29uc3QgYXR0cnMgPSB0aGlzLmxvY2FsQXR0cmlidXRlcy5jb25jYXQoXG4gICAgICB0aGlzLmdsb2JhbEF0dHJpYnV0ZXMsXG4gICAgICB0aGlzLmV4aXN0aW5nQXR0cmlidXRlcyxcbiAgICAgIHRoaXMubmV3QXR0cmlidXRlc1xuICAgICk7XG4gICAgYXR0cnMuZm9yRWFjaCgoYXR0cikgPT4ge1xuICAgICAgaWYgKGF0dHIuY2xvc2VkIHx8IGF0dHIuc2Vjb25kYXJ5IHx8ICFhdHRyLmF0dHJpYnV0ZSB8fCAhYXR0ci52YWx1ZSlcbiAgICAgICAgcmV0dXJuO1xuICAgICAgY29uc3QgdmFsdWUgPSBhdHRyLnR5cGUgPT09IFwianNvblwiID8gSlNPTi5wYXJzZShhdHRyLnZhbHVlKSA6IGF0dHIudmFsdWU7XG4gICAgICBpZiAoIXZhbHVlKSByZXR1cm47XG4gICAgICBkYXRhW2F0dHIuYXR0cmlidXRlXSA9IHZhbHVlO1xuICAgIH0pO1xuXG4gICAgY29uc3Qgb2JqZWN0SWQgPSB0aGlzLmVudGl0eS5lbnRpdHlfaWQ7XG4gICAgcmV0dXJuIHRoaXMuaGFzcy5jYWxsQXBpKFxuICAgICAgXCJQT1NUXCIsXG4gICAgICBcImNvbmZpZy9jdXN0b21pemUvY29uZmlnL1wiICsgb2JqZWN0SWQsXG4gICAgICBkYXRhXG4gICAgKTtcbiAgfVxuXG4gIF9jb21wdXRlU2luZ2xlQXR0cmlidXRlKGtleSwgdmFsdWUsIHNlY29uZGFyeSkge1xuICAgIGNvbnN0IGNvbmZpZyA9IGhhc3NBdHRyaWJ1dGVVdGlsLkxPR0lDX1NUQVRFX0FUVFJJQlVURVNba2V5XSB8fCB7XG4gICAgICB0eXBlOiBoYXNzQXR0cmlidXRlVXRpbC5VTktOT1dOX1RZUEUsXG4gICAgfTtcbiAgICByZXR1cm4gdGhpcy5faW5pdE9wZW5PYmplY3QoXG4gICAgICBrZXksXG4gICAgICBjb25maWcudHlwZSA9PT0gXCJqc29uXCIgPyBKU09OLnN0cmluZ2lmeSh2YWx1ZSkgOiB2YWx1ZSxcbiAgICAgIHNlY29uZGFyeSxcbiAgICAgIGNvbmZpZ1xuICAgICk7XG4gIH1cblxuICBfY29tcHV0ZUF0dHJpYnV0ZXMoY29uZmlnLCBrZXlzLCBzZWNvbmRhcnkpIHtcbiAgICByZXR1cm4ga2V5cy5tYXAoKGtleSkgPT5cbiAgICAgIHRoaXMuX2NvbXB1dGVTaW5nbGVBdHRyaWJ1dGUoa2V5LCBjb25maWdba2V5XSwgc2Vjb25kYXJ5KVxuICAgICk7XG4gIH1cblxuICBjb21wdXRlTG9jYWxBdHRyaWJ1dGVzKGxvY2FsQ29uZmlnKSB7XG4gICAgaWYgKCFsb2NhbENvbmZpZykgcmV0dXJuIFtdO1xuICAgIGNvbnN0IGxvY2FsS2V5cyA9IE9iamVjdC5rZXlzKGxvY2FsQ29uZmlnKTtcbiAgICBjb25zdCByZXN1bHQgPSB0aGlzLl9jb21wdXRlQXR0cmlidXRlcyhsb2NhbENvbmZpZywgbG9jYWxLZXlzLCBmYWxzZSk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIGNvbXB1dGVHbG9iYWxBdHRyaWJ1dGVzKGxvY2FsQ29uZmlnLCBnbG9iYWxDb25maWcpIHtcbiAgICBpZiAoIWxvY2FsQ29uZmlnIHx8ICFnbG9iYWxDb25maWcpIHJldHVybiBbXTtcbiAgICBjb25zdCBsb2NhbEtleXMgPSBPYmplY3Qua2V5cyhsb2NhbENvbmZpZyk7XG4gICAgY29uc3QgZ2xvYmFsS2V5cyA9IE9iamVjdC5rZXlzKGdsb2JhbENvbmZpZykuZmlsdGVyKFxuICAgICAgKGtleSkgPT4gIWxvY2FsS2V5cy5pbmNsdWRlcyhrZXkpXG4gICAgKTtcbiAgICByZXR1cm4gdGhpcy5fY29tcHV0ZUF0dHJpYnV0ZXMoZ2xvYmFsQ29uZmlnLCBnbG9iYWxLZXlzLCB0cnVlKTtcbiAgfVxuXG4gIGNvbXB1dGVFeGlzdGluZ0F0dHJpYnV0ZXMobG9jYWxDb25maWcsIGdsb2JhbENvbmZpZywgZW50aXR5KSB7XG4gICAgaWYgKCFsb2NhbENvbmZpZyB8fCAhZ2xvYmFsQ29uZmlnIHx8ICFlbnRpdHkpIHJldHVybiBbXTtcbiAgICBjb25zdCBsb2NhbEtleXMgPSBPYmplY3Qua2V5cyhsb2NhbENvbmZpZyk7XG4gICAgY29uc3QgZ2xvYmFsS2V5cyA9IE9iamVjdC5rZXlzKGdsb2JhbENvbmZpZyk7XG4gICAgY29uc3QgZW50aXR5S2V5cyA9IE9iamVjdC5rZXlzKGVudGl0eS5hdHRyaWJ1dGVzKS5maWx0ZXIoXG4gICAgICAoa2V5KSA9PiAhbG9jYWxLZXlzLmluY2x1ZGVzKGtleSkgJiYgIWdsb2JhbEtleXMuaW5jbHVkZXMoa2V5KVxuICAgICk7XG4gICAgcmV0dXJuIHRoaXMuX2NvbXB1dGVBdHRyaWJ1dGVzKGVudGl0eS5hdHRyaWJ1dGVzLCBlbnRpdHlLZXlzLCB0cnVlKTtcbiAgfVxuXG4gIGNvbXB1dGVTaG93V2FybmluZyhsb2NhbENvbmZpZywgZ2xvYmFsQ29uZmlnKSB7XG4gICAgaWYgKCFsb2NhbENvbmZpZyB8fCAhZ2xvYmFsQ29uZmlnKSByZXR1cm4gZmFsc2U7XG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKGxvY2FsQ29uZmlnKS5zb21lKFxuICAgICAgKGtleSkgPT5cbiAgICAgICAgSlNPTi5zdHJpbmdpZnkoZ2xvYmFsQ29uZmlnW2tleV0pICE9PSBKU09OLnN0cmluZ2lmeShsb2NhbENvbmZpZ1trZXldKVxuICAgICk7XG4gIH1cblxuICBmaWx0ZXJGcm9tQXR0cmlidXRlcyhhdHRyaWJ1dGVzKSB7XG4gICAgcmV0dXJuIChrZXkpID0+XG4gICAgICAhYXR0cmlidXRlcyB8fFxuICAgICAgYXR0cmlidXRlcy5ldmVyeSgoYXR0cikgPT4gYXR0ci5hdHRyaWJ1dGUgIT09IGtleSB8fCBhdHRyLmNsb3NlZCk7XG4gIH1cblxuICBnZXROZXdBdHRyaWJ1dGVzT3B0aW9ucyhcbiAgICBsb2NhbEF0dHJpYnV0ZXMsXG4gICAgZ2xvYmFsQXR0cmlidXRlcyxcbiAgICBleGlzdGluZ0F0dHJpYnV0ZXMsXG4gICAgbmV3QXR0cmlidXRlc1xuICApIHtcbiAgICBjb25zdCBrbm93bktleXMgPSBPYmplY3Qua2V5cyhoYXNzQXR0cmlidXRlVXRpbC5MT0dJQ19TVEFURV9BVFRSSUJVVEVTKVxuICAgICAgLmZpbHRlcigoa2V5KSA9PiB7XG4gICAgICAgIGNvbnN0IGNvbmYgPSBoYXNzQXR0cmlidXRlVXRpbC5MT0dJQ19TVEFURV9BVFRSSUJVVEVTW2tleV07XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgY29uZiAmJlxuICAgICAgICAgICghY29uZi5kb21haW5zIHx8XG4gICAgICAgICAgICAhdGhpcy5lbnRpdHkgfHxcbiAgICAgICAgICAgIGNvbmYuZG9tYWlucy5pbmNsdWRlcyhjb21wdXRlU3RhdGVEb21haW4odGhpcy5lbnRpdHkpKSlcbiAgICAgICAgKTtcbiAgICAgIH0pXG4gICAgICAuZmlsdGVyKHRoaXMuZmlsdGVyRnJvbUF0dHJpYnV0ZXMobG9jYWxBdHRyaWJ1dGVzKSlcbiAgICAgIC5maWx0ZXIodGhpcy5maWx0ZXJGcm9tQXR0cmlidXRlcyhnbG9iYWxBdHRyaWJ1dGVzKSlcbiAgICAgIC5maWx0ZXIodGhpcy5maWx0ZXJGcm9tQXR0cmlidXRlcyhleGlzdGluZ0F0dHJpYnV0ZXMpKVxuICAgICAgLmZpbHRlcih0aGlzLmZpbHRlckZyb21BdHRyaWJ1dGVzKG5ld0F0dHJpYnV0ZXMpKTtcbiAgICByZXR1cm4ga25vd25LZXlzLnNvcnQoKS5jb25jYXQoXCJPdGhlclwiKTtcbiAgfVxuXG4gIHNlbGVjdGVkTmV3QXR0cmlidXRlT2JzZXJ2ZXIoc2VsZWN0ZWQpIHtcbiAgICBpZiAoc2VsZWN0ZWQgPCAwKSByZXR1cm47XG4gICAgY29uc3Qgb3B0aW9uID0gdGhpcy5uZXdBdHRyaWJ1dGVzT3B0aW9uc1tzZWxlY3RlZF07XG4gICAgaWYgKHNlbGVjdGVkID09PSB0aGlzLm5ld0F0dHJpYnV0ZXNPcHRpb25zLmxlbmd0aCAtIDEpIHtcbiAgICAgIC8vIFRoZSBcIk90aGVyXCIgb3B0aW9uLlxuICAgICAgY29uc3QgYXR0ciA9IHRoaXMuX2luaXRPcGVuT2JqZWN0KFwiXCIsIFwiXCIsIGZhbHNlIC8qIHNlY29uZGFyeSAqLywge1xuICAgICAgICB0eXBlOiBoYXNzQXR0cmlidXRlVXRpbC5BRERfVFlQRSxcbiAgICAgIH0pO1xuICAgICAgdGhpcy5wdXNoKFwibmV3QXR0cmlidXRlc1wiLCBhdHRyKTtcbiAgICAgIHRoaXMuc2VsZWN0ZWROZXdBdHRyaWJ1dGUgPSAtMTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgbGV0IHJlc3VsdCA9IHRoaXMubG9jYWxBdHRyaWJ1dGVzLmZpbmRJbmRleChcbiAgICAgIChhdHRyKSA9PiBhdHRyLmF0dHJpYnV0ZSA9PT0gb3B0aW9uXG4gICAgKTtcbiAgICBpZiAocmVzdWx0ID49IDApIHtcbiAgICAgIHRoaXMuc2V0KFwibG9jYWxBdHRyaWJ1dGVzLlwiICsgcmVzdWx0ICsgXCIuY2xvc2VkXCIsIGZhbHNlKTtcbiAgICAgIHRoaXMuc2VsZWN0ZWROZXdBdHRyaWJ1dGUgPSAtMTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgcmVzdWx0ID0gdGhpcy5nbG9iYWxBdHRyaWJ1dGVzLmZpbmRJbmRleChcbiAgICAgIChhdHRyKSA9PiBhdHRyLmF0dHJpYnV0ZSA9PT0gb3B0aW9uXG4gICAgKTtcbiAgICBpZiAocmVzdWx0ID49IDApIHtcbiAgICAgIHRoaXMuc2V0KFwiZ2xvYmFsQXR0cmlidXRlcy5cIiArIHJlc3VsdCArIFwiLmNsb3NlZFwiLCBmYWxzZSk7XG4gICAgICB0aGlzLnNlbGVjdGVkTmV3QXR0cmlidXRlID0gLTE7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHJlc3VsdCA9IHRoaXMuZXhpc3RpbmdBdHRyaWJ1dGVzLmZpbmRJbmRleChcbiAgICAgIChhdHRyKSA9PiBhdHRyLmF0dHJpYnV0ZSA9PT0gb3B0aW9uXG4gICAgKTtcbiAgICBpZiAocmVzdWx0ID49IDApIHtcbiAgICAgIHRoaXMuc2V0KFwiZXhpc3RpbmdBdHRyaWJ1dGVzLlwiICsgcmVzdWx0ICsgXCIuY2xvc2VkXCIsIGZhbHNlKTtcbiAgICAgIHRoaXMuc2VsZWN0ZWROZXdBdHRyaWJ1dGUgPSAtMTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgcmVzdWx0ID0gdGhpcy5uZXdBdHRyaWJ1dGVzLmZpbmRJbmRleCgoYXR0cikgPT4gYXR0ci5hdHRyaWJ1dGUgPT09IG9wdGlvbik7XG4gICAgaWYgKHJlc3VsdCA+PSAwKSB7XG4gICAgICB0aGlzLnNldChcIm5ld0F0dHJpYnV0ZXMuXCIgKyByZXN1bHQgKyBcIi5jbG9zZWRcIiwgZmFsc2UpO1xuICAgICAgdGhpcy5zZWxlY3RlZE5ld0F0dHJpYnV0ZSA9IC0xO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBhdHRyID0gdGhpcy5fY29tcHV0ZVNpbmdsZUF0dHJpYnV0ZShcbiAgICAgIG9wdGlvbixcbiAgICAgIFwiXCIsXG4gICAgICBmYWxzZSAvKiBzZWNvbmRhcnkgKi9cbiAgICApO1xuICAgIHRoaXMucHVzaChcIm5ld0F0dHJpYnV0ZXNcIiwgYXR0cik7XG4gICAgdGhpcy5zZWxlY3RlZE5ld0F0dHJpYnV0ZSA9IC0xO1xuICB9XG5cbiAgYXR0cmlidXRlc09ic2VydmVyKCkge1xuICAgIHRoaXMuaGFzTG9jYWxBdHRyaWJ1dGVzID1cbiAgICAgIHRoaXMubG9jYWxBdHRyaWJ1dGVzICYmIHRoaXMubG9jYWxBdHRyaWJ1dGVzLnNvbWUoKGF0dHIpID0+ICFhdHRyLmNsb3NlZCk7XG4gICAgdGhpcy5oYXNHbG9iYWxBdHRyaWJ1dGVzID1cbiAgICAgIHRoaXMuZ2xvYmFsQXR0cmlidXRlcyAmJlxuICAgICAgdGhpcy5nbG9iYWxBdHRyaWJ1dGVzLnNvbWUoKGF0dHIpID0+ICFhdHRyLmNsb3NlZCk7XG4gICAgdGhpcy5oYXNFeGlzdGluZ0F0dHJpYnV0ZXMgPVxuICAgICAgdGhpcy5leGlzdGluZ0F0dHJpYnV0ZXMgJiZcbiAgICAgIHRoaXMuZXhpc3RpbmdBdHRyaWJ1dGVzLnNvbWUoKGF0dHIpID0+ICFhdHRyLmNsb3NlZCk7XG4gICAgdGhpcy5oYXNOZXdBdHRyaWJ1dGVzID1cbiAgICAgIHRoaXMubmV3QXR0cmlidXRlcyAmJiB0aGlzLm5ld0F0dHJpYnV0ZXMuc29tZSgoYXR0cikgPT4gIWF0dHIuY2xvc2VkKTtcbiAgICB0aGlzLm5ld0F0dHJpYnV0ZXNPcHRpb25zID0gdGhpcy5nZXROZXdBdHRyaWJ1dGVzT3B0aW9ucyhcbiAgICAgIHRoaXMubG9jYWxBdHRyaWJ1dGVzLFxuICAgICAgdGhpcy5nbG9iYWxBdHRyaWJ1dGVzLFxuICAgICAgdGhpcy5leGlzdGluZ0F0dHJpYnV0ZXMsXG4gICAgICB0aGlzLm5ld0F0dHJpYnV0ZXNcbiAgICApO1xuICB9XG59XG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJoYS1mb3JtLWN1c3RvbWl6ZVwiLCBIYUZvcm1DdXN0b21pemUpO1xuIiwiaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItZHJvcGRvd24tbWVudS9wYXBlci1kcm9wZG93bi1tZW51XCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1pdGVtL3BhcGVyLWl0ZW1cIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWxpc3Rib3gvcGFwZXItbGlzdGJveFwiO1xuaW1wb3J0IHsgaHRtbCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZ1wiO1xuaW1wb3J0IHsgUG9seW1lckVsZW1lbnQgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWVsZW1lbnRcIjtcblxuaW1wb3J0IHsgRXZlbnRzTWl4aW4gfSBmcm9tIFwiLi4vLi4vLi4vLi4vbWl4aW5zL2V2ZW50cy1taXhpblwiO1xuXG4vKlxuICogQGFwcGxpZXNNaXhpbiBFdmVudHNNaXhpblxuICovXG5jbGFzcyBIYUN1c3RvbWl6ZUFycmF5IGV4dGVuZHMgRXZlbnRzTWl4aW4oUG9seW1lckVsZW1lbnQpIHtcbiAgc3RhdGljIGdldCB0ZW1wbGF0ZSgpIHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxzdHlsZT5cbiAgICAgICAgcGFwZXItZHJvcGRvd24tbWVudSB7XG4gICAgICAgICAgbWFyZ2luOiAtOXB4IDA7XG4gICAgICAgIH1cbiAgICAgIDwvc3R5bGU+XG4gICAgICA8cGFwZXItZHJvcGRvd24tbWVudVxuICAgICAgICBsYWJlbD1cIltbaXRlbS5kZXNjcmlwdGlvbl1dXCJcbiAgICAgICAgZGlzYWJsZWQ9XCJbW2l0ZW0uc2Vjb25kYXJ5XV1cIlxuICAgICAgICBzZWxlY3RlZC1pdGVtLWxhYmVsPVwie3tpdGVtLnZhbHVlfX1cIlxuICAgICAgICBkeW5hbWljLWFsaWduPVwiXCJcbiAgICAgID5cbiAgICAgICAgPHBhcGVyLWxpc3Rib3hcbiAgICAgICAgICBzbG90PVwiZHJvcGRvd24tY29udGVudFwiXG4gICAgICAgICAgc2VsZWN0ZWQ9XCJbW2NvbXB1dGVTZWxlY3RlZChpdGVtKV1dXCJcbiAgICAgICAgPlxuICAgICAgICAgIDx0ZW1wbGF0ZSBpcz1cImRvbS1yZXBlYXRcIiBpdGVtcz1cIltbZ2V0T3B0aW9ucyhpdGVtKV1dXCIgYXM9XCJvcHRpb25cIj5cbiAgICAgICAgICAgIDxwYXBlci1pdGVtPltbb3B0aW9uXV08L3BhcGVyLWl0ZW0+XG4gICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgPC9wYXBlci1saXN0Ym94PlxuICAgICAgPC9wYXBlci1kcm9wZG93bi1tZW51PlxuICAgIGA7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGl0ZW06IHtcbiAgICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgICBub3RpZmllczogdHJ1ZSxcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxuXG4gIGdldE9wdGlvbnMoaXRlbSkge1xuICAgIGNvbnN0IGRvbWFpbiA9IGl0ZW0uZG9tYWluIHx8IFwiKlwiO1xuICAgIGNvbnN0IG9wdGlvbnMgPSBpdGVtLm9wdGlvbnNbZG9tYWluXSB8fCBpdGVtLm9wdGlvbnNbXCIqXCJdO1xuICAgIGlmICghb3B0aW9ucykge1xuICAgICAgdGhpcy5pdGVtLnR5cGUgPSBcInN0cmluZ1wiO1xuICAgICAgdGhpcy5maXJlKFwiaXRlbS1jaGFuZ2VkXCIpO1xuICAgICAgcmV0dXJuIFtdO1xuICAgIH1cbiAgICByZXR1cm4gb3B0aW9ucy5zb3J0KCk7XG4gIH1cblxuICBjb21wdXRlU2VsZWN0ZWQoaXRlbSkge1xuICAgIGNvbnN0IG9wdGlvbnMgPSB0aGlzLmdldE9wdGlvbnMoaXRlbSk7XG4gICAgcmV0dXJuIG9wdGlvbnMuaW5kZXhPZihpdGVtLnZhbHVlKTtcbiAgfVxufVxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwiaGEtY3VzdG9taXplLWFycmF5XCIsIEhhQ3VzdG9taXplQXJyYXkpO1xuIiwiaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItY2hlY2tib3gvcGFwZXItY2hlY2tib3hcIjtcbmltcG9ydCB7IGh0bWwgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvaHRtbC10YWdcIjtcbmltcG9ydCB7IFBvbHltZXJFbGVtZW50IH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvcG9seW1lci1lbGVtZW50XCI7XG5cbmNsYXNzIEhhQ3VzdG9taXplQm9vbGVhbiBleHRlbmRzIFBvbHltZXJFbGVtZW50IHtcbiAgc3RhdGljIGdldCB0ZW1wbGF0ZSgpIHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxwYXBlci1jaGVja2JveCBkaXNhYmxlZD1cIltbaXRlbS5zZWNvbmRhcnldXVwiIGNoZWNrZWQ9XCJ7e2l0ZW0udmFsdWV9fVwiPlxuICAgICAgICBbW2l0ZW0uZGVzY3JpcHRpb25dXVxuICAgICAgPC9wYXBlci1jaGVja2JveD5cbiAgICBgO1xuICB9XG5cbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBpdGVtOiB7XG4gICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgICAgbm90aWZpZXM6IHRydWUsXG4gICAgICB9LFxuICAgIH07XG4gIH1cbn1cbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcImhhLWN1c3RvbWl6ZS1ib29sZWFuXCIsIEhhQ3VzdG9taXplQm9vbGVhbik7XG4iLCJpbXBvcnQgXCJAcG9seW1lci9pcm9uLWljb24vaXJvbi1pY29uXCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1pbnB1dC9wYXBlci1pbnB1dFwiO1xuaW1wb3J0IHsgaHRtbCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZ1wiO1xuaW1wb3J0IHsgUG9seW1lckVsZW1lbnQgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWVsZW1lbnRcIjtcblxuY2xhc3MgSGFDdXN0b21pemVJY29uIGV4dGVuZHMgUG9seW1lckVsZW1lbnQge1xuICBzdGF0aWMgZ2V0IHRlbXBsYXRlKCkge1xuICAgIHJldHVybiBodG1sYFxuICAgICAgPHN0eWxlPlxuICAgICAgICA6aG9zdCB7XG4gICAgICAgICAgQGFwcGx5IC0tbGF5b3V0LWhvcml6b250YWw7XG4gICAgICAgIH1cbiAgICAgICAgLmljb24taW1hZ2Uge1xuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyZXk7XG4gICAgICAgICAgcGFkZGluZzogOHB4O1xuICAgICAgICAgIG1hcmdpbi1yaWdodDogMjBweDtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgICB9XG4gICAgICA8L3N0eWxlPlxuICAgICAgPGlyb24taWNvbiBjbGFzcz1cImljb24taW1hZ2VcIiBpY29uPVwiW1tpdGVtLnZhbHVlXV1cIj48L2lyb24taWNvbj5cbiAgICAgIDxwYXBlci1pbnB1dFxuICAgICAgICBkaXNhYmxlZD1cIltbaXRlbS5zZWNvbmRhcnldXVwiXG4gICAgICAgIGxhYmVsPVwiaWNvblwiXG4gICAgICAgIHZhbHVlPVwie3tpdGVtLnZhbHVlfX1cIlxuICAgICAgPlxuICAgICAgPC9wYXBlci1pbnB1dD5cbiAgICBgO1xuICB9XG5cbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBpdGVtOiB7XG4gICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgICAgbm90aWZpZXM6IHRydWUsXG4gICAgICB9LFxuICAgIH07XG4gIH1cbn1cbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcImhhLWN1c3RvbWl6ZS1pY29uXCIsIEhhQ3VzdG9taXplSWNvbik7XG4iLCJpbXBvcnQgXCJAcG9seW1lci9wYXBlci1pbnB1dC9wYXBlci1pbnB1dFwiO1xuaW1wb3J0IHsgaHRtbCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZ1wiO1xuaW1wb3J0IHsgUG9seW1lckVsZW1lbnQgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWVsZW1lbnRcIjtcblxuY2xhc3MgSGFDdXN0b21pemVLZXlWYWx1ZSBleHRlbmRzIFBvbHltZXJFbGVtZW50IHtcbiAgc3RhdGljIGdldCB0ZW1wbGF0ZSgpIHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxzdHlsZT5cbiAgICAgICAgOmhvc3Qge1xuICAgICAgICAgIEBhcHBseSAtLWxheW91dC1ob3Jpem9udGFsO1xuICAgICAgICB9XG4gICAgICAgIHBhcGVyLWlucHV0IHtcbiAgICAgICAgICBAYXBwbHkgLS1sYXlvdXQtZmxleDtcbiAgICAgICAgfVxuICAgICAgICAua2V5IHtcbiAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xuICAgICAgICB9XG4gICAgICA8L3N0eWxlPlxuICAgICAgPHBhcGVyLWlucHV0XG4gICAgICAgIGRpc2FibGVkPVwiW1tpdGVtLnNlY29uZGFyeV1dXCJcbiAgICAgICAgY2xhc3M9XCJrZXlcIlxuICAgICAgICBsYWJlbD1cIkF0dHJpYnV0ZSBuYW1lXCJcbiAgICAgICAgdmFsdWU9XCJ7e2l0ZW0uYXR0cmlidXRlfX1cIlxuICAgICAgPlxuICAgICAgPC9wYXBlci1pbnB1dD5cbiAgICAgIDxwYXBlci1pbnB1dFxuICAgICAgICBkaXNhYmxlZD1cIltbaXRlbS5zZWNvbmRhcnldXVwiXG4gICAgICAgIGxhYmVsPVwiQXR0cmlidXRlIHZhbHVlXCJcbiAgICAgICAgdmFsdWU9XCJ7e2l0ZW0udmFsdWV9fVwiXG4gICAgICA+XG4gICAgICA8L3BhcGVyLWlucHV0PlxuICAgIGA7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGl0ZW06IHtcbiAgICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgICBub3RpZmllczogdHJ1ZSxcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxufVxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwiaGEtY3VzdG9taXplLWtleS12YWx1ZVwiLCBIYUN1c3RvbWl6ZUtleVZhbHVlKTtcbiIsImltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWlucHV0L3BhcGVyLWlucHV0XCI7XG5pbXBvcnQgeyBodG1sIH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2h0bWwtdGFnXCI7XG5pbXBvcnQgeyBQb2x5bWVyRWxlbWVudCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL3BvbHltZXItZWxlbWVudFwiO1xuXG5jbGFzcyBIYUN1c3RvbWl6ZVN0cmluZyBleHRlbmRzIFBvbHltZXJFbGVtZW50IHtcbiAgc3RhdGljIGdldCB0ZW1wbGF0ZSgpIHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxwYXBlci1pbnB1dFxuICAgICAgICBkaXNhYmxlZD1cIltbaXRlbS5zZWNvbmRhcnldXVwiXG4gICAgICAgIGxhYmVsPVwiW1tnZXRMYWJlbChpdGVtKV1dXCJcbiAgICAgICAgdmFsdWU9XCJ7e2l0ZW0udmFsdWV9fVwiXG4gICAgICA+XG4gICAgICA8L3BhcGVyLWlucHV0PlxuICAgIGA7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGl0ZW06IHtcbiAgICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgICBub3RpZmllczogdHJ1ZSxcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxuXG4gIGdldExhYmVsKGl0ZW0pIHtcbiAgICByZXR1cm4gaXRlbS5kZXNjcmlwdGlvbiArIChpdGVtLnR5cGUgPT09IFwianNvblwiID8gXCIgKEpTT04gZm9ybWF0dGVkKVwiIDogXCJcIik7XG4gIH1cbn1cbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcImhhLWN1c3RvbWl6ZS1zdHJpbmdcIiwgSGFDdXN0b21pemVTdHJpbmcpO1xuIiwiaW1wb3J0IHsgaHRtbCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZ1wiO1xuaW1wb3J0IHsgUG9seW1lckVsZW1lbnQgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWVsZW1lbnRcIjtcblxuaW1wb3J0IFwiLi4vLi4vcmVzb3VyY2VzL2hhLXN0eWxlXCI7XG5cbmNsYXNzIEhhQ29uZmlnU2VjdGlvbiBleHRlbmRzIFBvbHltZXJFbGVtZW50IHtcbiAgc3RhdGljIGdldCB0ZW1wbGF0ZSgpIHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxzdHlsZSBpbmNsdWRlPVwiaXJvbi1mbGV4IGhhLXN0eWxlXCI+XG4gICAgICAgIC5jb250ZW50IHtcbiAgICAgICAgICBwYWRkaW5nOiAyOHB4IDIwcHggMDtcbiAgICAgICAgICBtYXgtd2lkdGg6IDEwNDBweDtcbiAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgfVxuXG4gICAgICAgIC5oZWFkZXIge1xuICAgICAgICAgIEBhcHBseSAtLXBhcGVyLWZvbnQtZGlzcGxheTE7XG4gICAgICAgICAgb3BhY2l0eTogdmFyKC0tZGFyay1wcmltYXJ5LW9wYWNpdHkpO1xuICAgICAgICB9XG5cbiAgICAgICAgLnRvZ2V0aGVyIHtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAzMnB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmludHJvIHtcbiAgICAgICAgICBAYXBwbHkgLS1wYXBlci1mb250LXN1YmhlYWQ7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgbWF4LXdpZHRoOiA0MDBweDtcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDQwcHg7XG4gICAgICAgICAgb3BhY2l0eTogdmFyKC0tZGFyay1wcmltYXJ5LW9wYWNpdHkpO1xuICAgICAgICB9XG5cbiAgICAgICAgLnBhbmVsIHtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAtMjRweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5wYW5lbCA6OnNsb3R0ZWQoKikge1xuICAgICAgICAgIG1hcmdpbi10b3A6IDI0cHg7XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIH1cblxuICAgICAgICAubmFycm93LmNvbnRlbnQge1xuICAgICAgICAgIG1heC13aWR0aDogNjQwcHg7XG4gICAgICAgIH1cbiAgICAgICAgLm5hcnJvdyAudG9nZXRoZXIge1xuICAgICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgICAgIH1cbiAgICAgICAgLm5hcnJvdyAuaGVhZGVyIHtcbiAgICAgICAgICBAYXBwbHkgLS1wYXBlci1mb250LWhlYWRsaW5lO1xuICAgICAgICB9XG4gICAgICAgIC5uYXJyb3cgLmludHJvIHtcbiAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgcGFkZGluZy1ib3R0b206IDIwcHg7XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xuICAgICAgICAgIG1heC13aWR0aDogNTAwcHg7XG4gICAgICAgIH1cbiAgICAgIDwvc3R5bGU+XG4gICAgICA8ZGl2IGNsYXNzJD1cIltbY29tcHV0ZUNvbnRlbnRDbGFzc2VzKGlzV2lkZSldXVwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiaGVhZGVyXCI+PHNsb3QgbmFtZT1cImhlYWRlclwiPjwvc2xvdD48L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcyQ9XCJbW2NvbXB1dGVDbGFzc2VzKGlzV2lkZSldXVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbnRyb1wiPjxzbG90IG5hbWU9XCJpbnRyb2R1Y3Rpb25cIj48L3Nsb3Q+PC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cInBhbmVsIGZsZXgtYXV0b1wiPjxzbG90Pjwvc2xvdD48L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICBgO1xuICB9XG5cbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBoYXNzOiB7XG4gICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgIH0sXG5cbiAgICAgIG5hcnJvdzoge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgfSxcblxuICAgICAgaXNXaWRlOiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIHZhbHVlOiBmYWxzZSxcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxuXG4gIGNvbXB1dGVDb250ZW50Q2xhc3Nlcyhpc1dpZGUpIHtcbiAgICB2YXIgY2xhc3NlcyA9IFwiY29udGVudCBcIjtcblxuICAgIHJldHVybiBpc1dpZGUgPyBjbGFzc2VzIDogY2xhc3NlcyArIFwibmFycm93XCI7XG4gIH1cblxuICBjb21wdXRlQ2xhc3Nlcyhpc1dpZGUpIHtcbiAgICB2YXIgY2xhc3NlcyA9IFwidG9nZXRoZXIgbGF5b3V0IFwiO1xuXG4gICAgcmV0dXJuIGNsYXNzZXMgKyAoaXNXaWRlID8gXCJob3Jpem9udGFsXCIgOiBcInZlcnRpY2FsIG5hcnJvd1wiKTtcbiAgfVxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJoYS1jb25maWctc2VjdGlvblwiLCBIYUNvbmZpZ1NlY3Rpb24pO1xuIiwiaW1wb3J0IFwiQG1hdGVyaWFsL213Yy1idXR0b25cIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWRyb3Bkb3duLW1lbnUvcGFwZXItZHJvcGRvd24tbWVudVwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItaXRlbS9wYXBlci1pdGVtXCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1saXN0Ym94L3BhcGVyLWxpc3Rib3hcIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLXNwaW5uZXIvcGFwZXItc3Bpbm5lclwiO1xuaW1wb3J0IHsgaHRtbCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZ1wiO1xuaW1wb3J0IHsgUG9seW1lckVsZW1lbnQgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWVsZW1lbnRcIjtcbmltcG9ydCBcIi4uLy4uL2NvbXBvbmVudHMvaGEtY2FyZFwiO1xuXG5pbXBvcnQgeyBjb21wdXRlU3RhdGVOYW1lIH0gZnJvbSBcIi4uLy4uL2NvbW1vbi9lbnRpdHkvY29tcHV0ZV9zdGF0ZV9uYW1lXCI7XG5cbmNsYXNzIEhhRW50aXR5Q29uZmlnIGV4dGVuZHMgUG9seW1lckVsZW1lbnQge1xuICBzdGF0aWMgZ2V0IHRlbXBsYXRlKCkge1xuICAgIHJldHVybiBodG1sYFxuICAgICAgPHN0eWxlIGluY2x1ZGU9XCJpcm9uLWZsZXggaGEtc3R5bGVcIj5cbiAgICAgICAgaGEtY2FyZCB7XG4gICAgICAgICAgZGlyZWN0aW9uOiBsdHI7XG4gICAgICAgIH1cblxuICAgICAgICAuZGV2aWNlLXBpY2tlciB7XG4gICAgICAgICAgQGFwcGx5IC0tbGF5b3V0LWhvcml6b250YWw7XG4gICAgICAgICAgcGFkZGluZy1ib3R0b206IDI0cHg7XG4gICAgICAgIH1cblxuICAgICAgICAuZm9ybS1wbGFjZWhvbGRlciB7XG4gICAgICAgICAgQGFwcGx5IC0tbGF5b3V0LXZlcnRpY2FsO1xuICAgICAgICAgIEBhcHBseSAtLWxheW91dC1jZW50ZXItY2VudGVyO1xuICAgICAgICAgIGhlaWdodDogOTZweDtcbiAgICAgICAgfVxuXG4gICAgICAgIFtoaWRkZW5dOiB7XG4gICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5jYXJkLWFjdGlvbnMge1xuICAgICAgICAgIEBhcHBseSAtLWxheW91dC1ob3Jpem9udGFsO1xuICAgICAgICAgIEBhcHBseSAtLWxheW91dC1qdXN0aWZpZWQ7XG4gICAgICAgIH1cbiAgICAgIDwvc3R5bGU+XG4gICAgICA8aGEtY2FyZD5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtY29udGVudFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJkZXZpY2UtcGlja2VyXCI+XG4gICAgICAgICAgICA8cGFwZXItZHJvcGRvd24tbWVudVxuICAgICAgICAgICAgICBsYWJlbD1cIltbbGFiZWxdXVwiXG4gICAgICAgICAgICAgIGNsYXNzPVwiZmxleFwiXG4gICAgICAgICAgICAgIGRpc2FibGVkPVwiW1shZW50aXRpZXMubGVuZ3RoXV1cIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8cGFwZXItbGlzdGJveFxuICAgICAgICAgICAgICAgIHNsb3Q9XCJkcm9wZG93bi1jb250ZW50XCJcbiAgICAgICAgICAgICAgICBzZWxlY3RlZD1cInt7c2VsZWN0ZWRFbnRpdHl9fVwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8dGVtcGxhdGUgaXM9XCJkb20tcmVwZWF0XCIgaXRlbXM9XCJbW2VudGl0aWVzXV1cIiBhcz1cInN0YXRlXCI+XG4gICAgICAgICAgICAgICAgICA8cGFwZXItaXRlbT5bW2NvbXB1dGVTZWxlY3RDYXB0aW9uKHN0YXRlKV1dPC9wYXBlci1pdGVtPlxuICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgICAgIDwvcGFwZXItbGlzdGJveD5cbiAgICAgICAgICAgIDwvcGFwZXItZHJvcGRvd24tbWVudT5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgPHRlbXBsYXRlIGlzPVwiZG9tLWlmXCIgaWY9XCJbW2NvbXB1dGVTaG93UGxhY2Vob2xkZXIoZm9ybVN0YXRlKV1dXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLXBsYWNlaG9sZGVyXCI+XG4gICAgICAgICAgICAgICAgPHRlbXBsYXRlIGlzPVwiZG9tLWlmXCIgaWY9XCJbW2NvbXB1dGVTaG93Tm9EZXZpY2VzKGZvcm1TdGF0ZSldXVwiPlxuICAgICAgICAgICAgICAgICAgTm8gZW50aXRpZXMgZm91bmQhIDotKFxuICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XG5cbiAgICAgICAgICAgICAgICA8dGVtcGxhdGUgaXM9XCJkb20taWZcIiBpZj1cIltbY29tcHV0ZVNob3dTcGlubmVyKGZvcm1TdGF0ZSldXVwiPlxuICAgICAgICAgICAgICAgICAgPHBhcGVyLXNwaW5uZXIgYWN0aXZlPVwiXCIgYWx0PVwiW1tmb3JtU3RhdGVdXVwiPjwvcGFwZXItc3Bpbm5lcj5cbiAgICAgICAgICAgICAgICAgIFtbZm9ybVN0YXRlXV1cbiAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvdGVtcGxhdGU+XG5cbiAgICAgICAgICAgIDxkaXYgaGlkZGVuJD1cIltbIWNvbXB1dGVTaG93Rm9ybShmb3JtU3RhdGUpXV1cIiBpZD1cImZvcm1cIj48L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWFjdGlvbnNcIj5cbiAgICAgICAgICA8bXdjLWJ1dHRvblxuICAgICAgICAgICAgb24tY2xpY2s9XCJzYXZlRW50aXR5XCJcbiAgICAgICAgICAgIGRpc2FibGVkPVwiW1tjb21wdXRlU2hvd1BsYWNlaG9sZGVyKGZvcm1TdGF0ZSldXVwiXG4gICAgICAgICAgICA+U0FWRTwvbXdjLWJ1dHRvblxuICAgICAgICAgID5cbiAgICAgICAgICA8dGVtcGxhdGUgaXM9XCJkb20taWZcIiBpZj1cIltbYWxsb3dEZWxldGVdXVwiPlxuICAgICAgICAgICAgPG13Yy1idXR0b25cbiAgICAgICAgICAgICAgY2xhc3M9XCJ3YXJuaW5nXCJcbiAgICAgICAgICAgICAgb24tY2xpY2s9XCJkZWxldGVFbnRpdHlcIlxuICAgICAgICAgICAgICBkaXNhYmxlZD1cIltbY29tcHV0ZVNob3dQbGFjZWhvbGRlcihmb3JtU3RhdGUpXV1cIlxuICAgICAgICAgICAgICA+REVMRVRFPC9td2MtYnV0dG9uXG4gICAgICAgICAgICA+XG4gICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2hhLWNhcmQ+XG4gICAgYDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaGFzczoge1xuICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICAgIG9ic2VydmVyOiBcImhhc3NDaGFuZ2VkXCIsXG4gICAgICB9LFxuXG4gICAgICBsYWJlbDoge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIHZhbHVlOiBcIkRldmljZVwiLFxuICAgICAgfSxcblxuICAgICAgZW50aXRpZXM6IHtcbiAgICAgICAgdHlwZTogQXJyYXksXG4gICAgICAgIG9ic2VydmVyOiBcImVudGl0aWVzQ2hhbmdlZFwiLFxuICAgICAgfSxcblxuICAgICAgYWxsb3dEZWxldGU6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgdmFsdWU6IGZhbHNlLFxuICAgICAgfSxcblxuICAgICAgc2VsZWN0ZWRFbnRpdHk6IHtcbiAgICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgICB2YWx1ZTogLTEsXG4gICAgICAgIG9ic2VydmVyOiBcImVudGl0eUNoYW5nZWRcIixcbiAgICAgIH0sXG5cbiAgICAgIGZvcm1TdGF0ZToge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIC8vIG5vLWRldmljZXMsIGxvYWRpbmcsIHNhdmluZywgZWRpdGluZ1xuICAgICAgICB2YWx1ZTogXCJuby1kZXZpY2VzXCIsXG4gICAgICB9LFxuXG4gICAgICBjb25maWc6IHtcbiAgICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgfSxcbiAgICB9O1xuICB9XG5cbiAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgc3VwZXIuY29ubmVjdGVkQ2FsbGJhY2soKTtcbiAgICB0aGlzLmZvcm1FbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGhpcy5jb25maWcuY29tcG9uZW50KTtcbiAgICB0aGlzLmZvcm1FbC5oYXNzID0gdGhpcy5oYXNzO1xuICAgIHRoaXMuJC5mb3JtLmFwcGVuZENoaWxkKHRoaXMuZm9ybUVsKTtcbiAgICB0aGlzLmVudGl0eUNoYW5nZWQodGhpcy5zZWxlY3RlZEVudGl0eSk7XG4gIH1cblxuICBjb21wdXRlU2VsZWN0Q2FwdGlvbihzdGF0ZU9iaikge1xuICAgIHJldHVybiB0aGlzLmNvbmZpZy5jb21wdXRlU2VsZWN0Q2FwdGlvblxuICAgICAgPyB0aGlzLmNvbmZpZy5jb21wdXRlU2VsZWN0Q2FwdGlvbihzdGF0ZU9iailcbiAgICAgIDogY29tcHV0ZVN0YXRlTmFtZShzdGF0ZU9iaik7XG4gIH1cblxuICBjb21wdXRlU2hvd05vRGV2aWNlcyhmb3JtU3RhdGUpIHtcbiAgICByZXR1cm4gZm9ybVN0YXRlID09PSBcIm5vLWRldmljZXNcIjtcbiAgfVxuXG4gIGNvbXB1dGVTaG93U3Bpbm5lcihmb3JtU3RhdGUpIHtcbiAgICByZXR1cm4gZm9ybVN0YXRlID09PSBcImxvYWRpbmdcIiB8fCBmb3JtU3RhdGUgPT09IFwic2F2aW5nXCI7XG4gIH1cblxuICBjb21wdXRlU2hvd1BsYWNlaG9sZGVyKGZvcm1TdGF0ZSkge1xuICAgIHJldHVybiBmb3JtU3RhdGUgIT09IFwiZWRpdGluZ1wiO1xuICB9XG5cbiAgY29tcHV0ZVNob3dGb3JtKGZvcm1TdGF0ZSkge1xuICAgIHJldHVybiBmb3JtU3RhdGUgPT09IFwiZWRpdGluZ1wiO1xuICB9XG5cbiAgaGFzc0NoYW5nZWQoaGFzcykge1xuICAgIGlmICh0aGlzLmZvcm1FbCkge1xuICAgICAgdGhpcy5mb3JtRWwuaGFzcyA9IGhhc3M7XG4gICAgfVxuICB9XG5cbiAgZW50aXRpZXNDaGFuZ2VkKGVudGl0aWVzLCBvbGRFbnRpdGllcykge1xuICAgIGlmIChlbnRpdGllcy5sZW5ndGggPT09IDApIHtcbiAgICAgIHRoaXMuZm9ybVN0YXRlID0gXCJuby1kZXZpY2VzXCI7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICghb2xkRW50aXRpZXMpIHtcbiAgICAgIHRoaXMuc2VsZWN0ZWRFbnRpdHkgPSAwO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBvbGRFbnRpdHlJZCA9IG9sZEVudGl0aWVzW3RoaXMuc2VsZWN0ZWRFbnRpdHldLmVudGl0eV9pZDtcblxuICAgIHZhciBuZXdJbmRleCA9IGVudGl0aWVzLmZpbmRJbmRleChmdW5jdGlvbihlbnQpIHtcbiAgICAgIHJldHVybiBlbnQuZW50aXR5X2lkID09PSBvbGRFbnRpdHlJZDtcbiAgICB9KTtcblxuICAgIGlmIChuZXdJbmRleCA9PT0gLTEpIHtcbiAgICAgIHRoaXMuc2VsZWN0ZWRFbnRpdHkgPSAwO1xuICAgIH0gZWxzZSBpZiAobmV3SW5kZXggIT09IHRoaXMuc2VsZWN0ZWRFbnRpdHkpIHtcbiAgICAgIC8vIEVudGl0eSBtb3ZlZCBpbmRleFxuICAgICAgdGhpcy5zZWxlY3RlZEVudGl0eSA9IG5ld0luZGV4O1xuICAgIH1cbiAgfVxuXG4gIGVudGl0eUNoYW5nZWQoaW5kZXgpIHtcbiAgICBpZiAoIXRoaXMuZW50aXRpZXMgfHwgIXRoaXMuZm9ybUVsKSByZXR1cm47XG4gICAgdmFyIGVudGl0eSA9IHRoaXMuZW50aXRpZXNbaW5kZXhdO1xuICAgIGlmICghZW50aXR5KSByZXR1cm47XG5cbiAgICB0aGlzLmZvcm1TdGF0ZSA9IFwibG9hZGluZ1wiO1xuICAgIHZhciBlbCA9IHRoaXM7XG4gICAgdGhpcy5mb3JtRWwubG9hZEVudGl0eShlbnRpdHkpLnRoZW4oZnVuY3Rpb24oKSB7XG4gICAgICBlbC5mb3JtU3RhdGUgPSBcImVkaXRpbmdcIjtcbiAgICB9KTtcbiAgfVxuXG4gIHNhdmVFbnRpdHkoKSB7XG4gICAgdGhpcy5mb3JtU3RhdGUgPSBcInNhdmluZ1wiO1xuICAgIHZhciBlbCA9IHRoaXM7XG4gICAgdGhpcy5mb3JtRWwuc2F2ZUVudGl0eSgpLnRoZW4oZnVuY3Rpb24oKSB7XG4gICAgICBlbC5mb3JtU3RhdGUgPSBcImVkaXRpbmdcIjtcbiAgICB9KTtcbiAgfVxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJoYS1lbnRpdHktY29uZmlnXCIsIEhhRW50aXR5Q29uZmlnKTtcbiIsImNvbnN0IGRvY3VtZW50Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRlbXBsYXRlXCIpO1xuZG9jdW1lbnRDb250YWluZXIuc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJkaXNwbGF5OiBub25lO1wiKTtcblxuZG9jdW1lbnRDb250YWluZXIuaW5uZXJIVE1MID0gYDxkb20tbW9kdWxlIGlkPVwiaGEtZm9ybS1zdHlsZVwiPlxuICA8dGVtcGxhdGU+XG4gICAgPHN0eWxlPlxuICAgICAgLmZvcm0tZ3JvdXAge1xuICAgICAgICBAYXBwbHkgLS1sYXlvdXQtaG9yaXpvbnRhbDtcbiAgICAgICAgQGFwcGx5IC0tbGF5b3V0LWNlbnRlcjtcbiAgICAgICAgcGFkZGluZzogOHB4IDE2cHg7XG4gICAgICB9XG5cbiAgICAgIC5mb3JtLWdyb3VwIGxhYmVsIHtcbiAgICAgICAgQGFwcGx5IC0tbGF5b3V0LWZsZXgtMjtcbiAgICAgIH1cblxuICAgICAgLmZvcm0tZ3JvdXAgLmZvcm0tY29udHJvbCB7XG4gICAgICAgIEBhcHBseSAtLWxheW91dC1mbGV4O1xuICAgICAgfVxuXG4gICAgICAuZm9ybS1ncm91cC52ZXJ0aWNhbCB7XG4gICAgICAgIEBhcHBseSAtLWxheW91dC12ZXJ0aWNhbDtcbiAgICAgICAgQGFwcGx5IC0tbGF5b3V0LXN0YXJ0O1xuICAgICAgfVxuXG4gICAgICBwYXBlci1kcm9wZG93bi1tZW51LmZvcm0tY29udHJvbCB7XG4gICAgICAgIG1hcmdpbjogLTlweCAwO1xuICAgICAgfVxuICAgIDwvc3R5bGU+XG4gIDwvdGVtcGxhdGU+XG48L2RvbS1tb2R1bGU+YDtcblxuZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChkb2N1bWVudENvbnRhaW5lci5jb250ZW50KTtcbiIsImNvbnN0IGhhc3NBdHRyaWJ1dGVVdGlsID0ge307XG5cbmhhc3NBdHRyaWJ1dGVVdGlsLkRPTUFJTl9ERVZJQ0VfQ0xBU1MgPSB7XG4gIGJpbmFyeV9zZW5zb3I6IFtcbiAgICBcImJhdHRlcnlcIixcbiAgICBcImNvbGRcIixcbiAgICBcImNvbm5lY3Rpdml0eVwiLFxuICAgIFwiZG9vclwiLFxuICAgIFwiZ2FyYWdlX2Rvb3JcIixcbiAgICBcImdhc1wiLFxuICAgIFwiaGVhdFwiLFxuICAgIFwibGlnaHRcIixcbiAgICBcImxvY2tcIixcbiAgICBcIm1vaXN0dXJlXCIsXG4gICAgXCJtb3Rpb25cIixcbiAgICBcIm1vdmluZ1wiLFxuICAgIFwib2NjdXBhbmN5XCIsXG4gICAgXCJvcGVuaW5nXCIsXG4gICAgXCJwbHVnXCIsXG4gICAgXCJwb3dlclwiLFxuICAgIFwicHJlc2VuY2VcIixcbiAgICBcInByb2JsZW1cIixcbiAgICBcInNhZmV0eVwiLFxuICAgIFwic21va2VcIixcbiAgICBcInNvdW5kXCIsXG4gICAgXCJ2aWJyYXRpb25cIixcbiAgICBcIndpbmRvd1wiLFxuICBdLFxuICBjb3ZlcjogW1xuICAgIFwiYXduaW5nXCIsXG4gICAgXCJibGluZFwiLFxuICAgIFwiY3VydGFpblwiLFxuICAgIFwiZGFtcGVyXCIsXG4gICAgXCJkb29yXCIsXG4gICAgXCJnYXJhZ2VcIixcbiAgICBcInNoYWRlXCIsXG4gICAgXCJzaHV0dGVyXCIsXG4gICAgXCJ3aW5kb3dcIixcbiAgXSxcbiAgc2Vuc29yOiBbXG4gICAgXCJiYXR0ZXJ5XCIsXG4gICAgXCJodW1pZGl0eVwiLFxuICAgIFwiaWxsdW1pbmFuY2VcIixcbiAgICBcInRlbXBlcmF0dXJlXCIsXG4gICAgXCJwcmVzc3VyZVwiLFxuICAgIFwicG93ZXJcIixcbiAgICBcInNpZ25hbF9zdHJlbmd0aFwiLFxuICBdLFxuICBzd2l0Y2g6IFtcInN3aXRjaFwiLCBcIm91dGxldFwiXSxcbn07XG5cbmhhc3NBdHRyaWJ1dGVVdGlsLlVOS05PV05fVFlQRSA9IFwianNvblwiO1xuaGFzc0F0dHJpYnV0ZVV0aWwuQUREX1RZUEUgPSBcImtleS12YWx1ZVwiO1xuXG5oYXNzQXR0cmlidXRlVXRpbC5UWVBFX1RPX1RBRyA9IHtcbiAgc3RyaW5nOiBcImhhLWN1c3RvbWl6ZS1zdHJpbmdcIixcbiAganNvbjogXCJoYS1jdXN0b21pemUtc3RyaW5nXCIsXG4gIGljb246IFwiaGEtY3VzdG9taXplLWljb25cIixcbiAgYm9vbGVhbjogXCJoYS1jdXN0b21pemUtYm9vbGVhblwiLFxuICBhcnJheTogXCJoYS1jdXN0b21pemUtYXJyYXlcIixcbiAgXCJrZXktdmFsdWVcIjogXCJoYS1jdXN0b21pemUta2V5LXZhbHVlXCIsXG59O1xuXG4vLyBBdHRyaWJ1dGVzIGhlcmUgc2VydmUgZHVhbCBwdXJwb3NlOlxuLy8gMSkgQW55IGtleSBvZiB0aGlzIG9iamVjdCB3b24ndCBiZSBzaG93biBpbiBtb3JlLWluZm8gd2luZG93LlxuLy8gMikgQW55IGtleSB3aGljaCBoYXMgdmFsdWUgb3RoZXIgdGhhbiB1bmRlZmluZWQgd2lsbCBhcHBlYXIgaW4gY3VzdG9taXphdGlvblxuLy8gICAgY29uZmlnIGFjY29yZGluZyB0byBpdHMgdmFsdWUuXG5oYXNzQXR0cmlidXRlVXRpbC5MT0dJQ19TVEFURV9BVFRSSUJVVEVTID0gaGFzc0F0dHJpYnV0ZVV0aWwuTE9HSUNfU1RBVEVfQVRUUklCVVRFUyB8fCB7XG4gIGVudGl0eV9waWN0dXJlOiB1bmRlZmluZWQsXG4gIGZyaWVuZGx5X25hbWU6IHsgdHlwZTogXCJzdHJpbmdcIiwgZGVzY3JpcHRpb246IFwiTmFtZVwiIH0sXG4gIGljb246IHsgdHlwZTogXCJpY29uXCIgfSxcbiAgZW11bGF0ZWRfaHVlOiB7XG4gICAgdHlwZTogXCJib29sZWFuXCIsXG4gICAgZG9tYWluczogW1wiZW11bGF0ZWRfaHVlXCJdLFxuICB9LFxuICBlbXVsYXRlZF9odWVfbmFtZToge1xuICAgIHR5cGU6IFwic3RyaW5nXCIsXG4gICAgZG9tYWluczogW1wiZW11bGF0ZWRfaHVlXCJdLFxuICB9LFxuICBoYWFza2FfaGlkZGVuOiB1bmRlZmluZWQsXG4gIGhhYXNrYV9uYW1lOiB1bmRlZmluZWQsXG4gIGhvbWVicmlkZ2VfaGlkZGVuOiB7IHR5cGU6IFwiYm9vbGVhblwiIH0sXG4gIGhvbWVicmlkZ2VfbmFtZTogeyB0eXBlOiBcInN0cmluZ1wiIH0sXG4gIHN1cHBvcnRlZF9mZWF0dXJlczogdW5kZWZpbmVkLFxuICBhdHRyaWJ1dGlvbjogdW5kZWZpbmVkLFxuICBjdXN0b21fdWlfbW9yZV9pbmZvOiB7IHR5cGU6IFwic3RyaW5nXCIgfSxcbiAgY3VzdG9tX3VpX3N0YXRlX2NhcmQ6IHsgdHlwZTogXCJzdHJpbmdcIiB9LFxuICBkZXZpY2VfY2xhc3M6IHtcbiAgICB0eXBlOiBcImFycmF5XCIsXG4gICAgb3B0aW9uczogaGFzc0F0dHJpYnV0ZVV0aWwuRE9NQUlOX0RFVklDRV9DTEFTUyxcbiAgICBkZXNjcmlwdGlvbjogXCJEZXZpY2UgY2xhc3NcIixcbiAgICBkb21haW5zOiBbXCJiaW5hcnlfc2Vuc29yXCIsIFwiY292ZXJcIiwgXCJzZW5zb3JcIiwgXCJzd2l0Y2hcIl0sXG4gIH0sXG4gIGhpZGRlbjogeyB0eXBlOiBcImJvb2xlYW5cIiwgZGVzY3JpcHRpb246IFwiSGlkZSBmcm9tIFVJXCIgfSxcbiAgYXNzdW1lZF9zdGF0ZToge1xuICAgIHR5cGU6IFwiYm9vbGVhblwiLFxuICAgIGRvbWFpbnM6IFtcbiAgICAgIFwic3dpdGNoXCIsXG4gICAgICBcImxpZ2h0XCIsXG4gICAgICBcImNvdmVyXCIsXG4gICAgICBcImNsaW1hdGVcIixcbiAgICAgIFwiZmFuXCIsXG4gICAgICBcImdyb3VwXCIsXG4gICAgICBcIndhdGVyX2hlYXRlclwiLFxuICAgIF0sXG4gIH0sXG4gIGluaXRpYWxfc3RhdGU6IHtcbiAgICB0eXBlOiBcInN0cmluZ1wiLFxuICAgIGRvbWFpbnM6IFtcImF1dG9tYXRpb25cIl0sXG4gIH0sXG4gIHVuaXRfb2ZfbWVhc3VyZW1lbnQ6IHsgdHlwZTogXCJzdHJpbmdcIiB9LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgaGFzc0F0dHJpYnV0ZVV0aWw7XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNGQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ0pBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ0NBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwQkE7QUFTQTtBQUFBO0FBQUE7O0FBNkRBO0FBMURBO0FBQUE7QUFDQTtBQTZDQTs7O0FBQUE7QUFFQTtBQUNBO0FBS0E7QUFIQTtBQU1BO0FBM0RBO0FBQUE7QUFBQTtBQTREQTtBQUFBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hFQTtBQUVBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FBRkE7QUFrQkE7QUFDQTtBQUNBO0FBcEJBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwQ0E7QUFDQTs7Ozs7O0FBS0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBbUJBO0FBQ0E7QUFwQkE7QUFBQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FBS0E7QUFDQTtBQUNBO0FBRkE7QUFSQTtBQWFBO0FBaEJBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7O0FBR0E7Ozs7Ozs7Ozs7Ozs7QUE4REE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7OztBQXpFQTtBQUNBO0FBa0NBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFGQTtBQUZBO0FBVEE7QUFxQkE7Ozs7QUE1REE7QUFDQTtBQTJFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEdBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQW9DQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7QUFyRUE7QUFDQTtBQXNCQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFEQTtBQU9BOzs7O0FBbENBO0FBQ0E7QUF1RUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcEZBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFXQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBREE7QUFNQTs7OztBQXRCQTtBQUNBO0FBdUJBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUFtSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBU0E7OztBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBS0E7OztBQUVBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFNQTs7O0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBR0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUdBOzs7QUFFQTtBQUNBO0FBQUE7QUFFQTtBQUFBO0FBRkE7QUFHQTs7O0FBR0E7QUFJQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBTUE7QUFLQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUdBO0FBSEE7QUFDQTtBQUlBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQU1BOzs7QUFyVUE7QUFDQTtBQTRFQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUlBO0FBRUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUVBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFFQTtBQUNBO0FBQ0E7QUFGQTtBQUtBO0FBRUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUF4Q0E7QUEwQ0E7OztBQUVBO0FBQ0E7QUFHQTs7OztBQWpJQTtBQUNBO0FBdVVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDblZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBOzs7O0FBR0E7Ozs7Ozs7Ozs7Ozs7QUFtQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBaERBO0FBQ0E7QUFzQkE7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQURBO0FBTUE7Ozs7QUFqQ0E7QUFDQTtBQWtEQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzlEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUtBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFEQTtBQU1BOzs7O0FBaEJBO0FBQ0E7QUFpQkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFvQkE7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQURBO0FBTUE7Ozs7QUEvQkE7QUFDQTtBQWdDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3RDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQTBCQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBREE7QUFNQTs7OztBQXJDQTtBQUNBO0FBc0NBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUFxQkE7QUFDQTtBQUNBOzs7QUF0QkE7QUFDQTtBQVFBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFEQTtBQU1BOzs7O0FBbkJBO0FBQ0E7QUF3QkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3QkE7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQStFQTtBQUNBO0FBRUE7QUFDQTs7O0FBRUE7QUFDQTtBQUVBO0FBQ0E7OztBQXhGQTtBQUNBO0FBMERBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBSUE7QUFDQTtBQURBO0FBSUE7QUFDQTtBQUNBO0FBRkE7QUFUQTtBQWNBOzs7O0FBN0VBO0FBQ0E7QUEyRkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUEySEE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUdBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBeE1BO0FBQ0E7QUErRUE7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQURBO0FBakNBO0FBcUNBOzs7O0FBekhBO0FBQ0E7QUEyTUE7Ozs7Ozs7Ozs7O0FDdk5BO0FBQ0E7QUFFQTtBQTZCQTs7Ozs7Ozs7Ozs7O0FDaENBO0FBQUE7QUFFQTtBQUNBO0FBeUJBO0FBV0E7QUFTQTtBQTlDQTtBQWlEQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBTUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQVlBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFBQTtBQUFBO0FBM0NBO0FBOENBOzs7O0EiLCJzb3VyY2VSb290IjoiIn0=