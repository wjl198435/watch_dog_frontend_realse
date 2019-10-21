(self["webpackJsonp"] = self["webpackJsonp"] || []).push([["more-info-dialog~panel-kiosk~panel-states"],{

/***/ "./src/cards/ha-history_graph-card.js":
/*!********************************************!*\
  !*** ./src/cards/ha-history_graph-card.js ***!
  \********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_paper_card_paper_card__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/paper-card/paper-card */ "./node_modules/@polymer/paper-card/paper-card.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _components_state_history_charts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/state-history-charts */ "./src/components/state-history-charts.js");
/* harmony import */ var _data_ha_state_history_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../data/ha-state-history-data */ "./src/data/ha-state-history-data.js");
/* harmony import */ var _common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/entity/compute_state_name */ "./src/common/entity/compute_state_name.ts");
/* harmony import */ var _mixins_events_mixin__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../mixins/events-mixin */ "./src/mixins/events-mixin.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      <style>\n        paper-card:not([dialog]) .content {\n          padding: 0 16px 16px;\n        }\n        paper-card[dialog] {\n          padding-top: 16px;\n          background-color: transparent;\n        }\n        paper-card {\n          width: 100%;\n          /* prevent new stacking context, chart tooltip needs to overflow */\n          position: static;\n        }\n        .header {\n          @apply --paper-font-headline;\n          line-height: 40px;\n          color: var(--primary-text-color);\n          padding: 20px 16px 12px;\n          @apply --paper-font-common-nowrap;\n        }\n        paper-card[dialog] .header {\n          display: none;\n        }\n      </style>\n      <ha-state-history-data\n        hass=\"[[hass]]\"\n        filter-type=\"recent-entity\"\n        entity-id=\"[[computeHistoryEntities(stateObj)]]\"\n        data=\"{{stateHistory}}\"\n        is-loading=\"{{stateHistoryLoading}}\"\n        cache-config=\"[[cacheConfig]]\"\n      ></ha-state-history-data>\n      <paper-card\n        dialog$=\"[[inDialog]]\"\n        on-click=\"cardTapped\"\n        elevation=\"[[computeElevation(inDialog)]]\"\n      >\n        <div class=\"header\">[[computeTitle(stateObj)]]</div>\n        <div class=\"content\">\n          <state-history-charts\n            hass=\"[[hass]]\"\n            history-data=\"[[stateHistory]]\"\n            is-loading-data=\"[[stateHistoryLoading]]\"\n            up-to-now\n            no-single\n          >\n          </state-history-charts>\n        </div>\n      </paper-card>\n    "]);

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

var HaHistoryGraphCard =
/*#__PURE__*/
function (_EventsMixin) {
  _inherits(HaHistoryGraphCard, _EventsMixin);

  function HaHistoryGraphCard() {
    _classCallCheck(this, HaHistoryGraphCard);

    return _possibleConstructorReturn(this, _getPrototypeOf(HaHistoryGraphCard).apply(this, arguments));
  }

  _createClass(HaHistoryGraphCard, [{
    key: "stateObjObserver",
    value: function stateObjObserver(stateObj) {
      if (!stateObj) return;

      if (this.cacheConfig.cacheKey !== stateObj.entity_id || this.cacheConfig.refresh !== (stateObj.attributes.refresh || 0) || this.cacheConfig.hoursToShow !== (stateObj.attributes.hours_to_show || 24)) {
        this.cacheConfig = {
          refresh: stateObj.attributes.refresh || 0,
          cacheKey: stateObj.entity_id,
          hoursToShow: stateObj.attributes.hours_to_show || 24
        };
      }
    }
  }, {
    key: "computeTitle",
    value: function computeTitle(stateObj) {
      return Object(_common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_5__["computeStateName"])(stateObj);
    }
  }, {
    key: "computeContentClass",
    value: function computeContentClass(inDialog) {
      return inDialog ? "" : "content";
    }
  }, {
    key: "computeHistoryEntities",
    value: function computeHistoryEntities(stateObj) {
      return stateObj.attributes.entity_id;
    }
  }, {
    key: "computeElevation",
    value: function computeElevation(inDialog) {
      return inDialog ? 0 : 1;
    }
  }, {
    key: "cardTapped",
    value: function cardTapped(ev) {
      var mq = window.matchMedia("(min-width: 610px) and (min-height: 550px)");

      if (mq.matches) {
        ev.stopPropagation();
        this.fire("hass-more-info", {
          entityId: this.stateObj.entity_id
        });
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
        hass: Object,
        stateObj: {
          type: Object,
          observer: "stateObjObserver"
        },
        inDialog: {
          type: Boolean,
          value: false
        },
        stateHistory: Object,
        stateHistoryLoading: Boolean,
        cacheConfig: {
          type: Object,
          value: {
            refresh: 0,
            cacheKey: null,
            hoursToShow: 24
          }
        }
      };
    }
  }]);

  return HaHistoryGraphCard;
}(Object(_mixins_events_mixin__WEBPACK_IMPORTED_MODULE_6__["EventsMixin"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__["PolymerElement"]));

customElements.define("ha-history_graph-card", HaHistoryGraphCard);

/***/ }),

/***/ "./src/common/dom/dynamic_content_updater.ts":
/*!***************************************************!*\
  !*** ./src/common/dom/dynamic_content_updater.ts ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return dynamicContentUpdater; });
/**
 * Update root's child element to be newElementTag replacing another existing child if any.
 * Copy attributes into the child element.
 */
function dynamicContentUpdater(root, newElementTag, attributes) {
    var rootEl = root;
    var customEl;
    if (rootEl.lastChild && rootEl.lastChild.tagName === newElementTag) {
        customEl = rootEl.lastChild;
    }
    else {
        if (rootEl.lastChild) {
            rootEl.removeChild(rootEl.lastChild);
        }
        // Creating an element with upper case works fine in Chrome, but in FF it doesn't immediately
        // become a defined Custom Element. Polymer does that in some later pass.
        customEl = document.createElement(newElementTag.toLowerCase());
    }
    if (customEl.setProperties) {
        customEl.setProperties(attributes);
    }
    else {
        // If custom element definition wasn't loaded yet - setProperties would be
        // missing, but no harm in setting attributes one-by-one then.
        Object.keys(attributes).forEach(function (key) {
            customEl[key] = attributes[key];
        });
    }
    if (customEl.parentNode === null) {
        rootEl.appendChild(customEl);
    }
}


/***/ }),

/***/ "./src/common/entity/attribute_class_names.ts":
/*!****************************************************!*\
  !*** ./src/common/entity/attribute_class_names.ts ***!
  \****************************************************/
/*! exports provided: attributeClassNames */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "attributeClassNames", function() { return attributeClassNames; });
var attributeClassNames = function (stateObj, attributes) {
    if (!stateObj) {
        return "";
    }
    return attributes
        .map(function (attribute) {
        return attribute in stateObj.attributes ? "has-" + attribute : "";
    })
        .filter(function (attr) { return attr !== ""; })
        .join(" ");
};


/***/ }),

/***/ "./src/common/entity/can_toggle_domain.ts":
/*!************************************************!*\
  !*** ./src/common/entity/can_toggle_domain.ts ***!
  \************************************************/
/*! exports provided: canToggleDomain */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "canToggleDomain", function() { return canToggleDomain; });
var canToggleDomain = function (hass, domain) {
    var services = hass.services[domain];
    if (!services) {
        return false;
    }
    if (domain === "lock") {
        return "lock" in services;
    }
    if (domain === "cover") {
        return "open_cover" in services;
    }
    return "turn_on" in services;
};


/***/ }),

/***/ "./src/common/entity/can_toggle_state.ts":
/*!***********************************************!*\
  !*** ./src/common/entity/can_toggle_state.ts ***!
  \***********************************************/
/*! exports provided: canToggleState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "canToggleState", function() { return canToggleState; });
/* harmony import */ var _can_toggle_domain__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./can_toggle_domain */ "./src/common/entity/can_toggle_domain.ts");
/* harmony import */ var _compute_state_domain__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./compute_state_domain */ "./src/common/entity/compute_state_domain.ts");
/* harmony import */ var _supports_feature__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./supports-feature */ "./src/common/entity/supports-feature.ts");



var canToggleState = function (hass, stateObj) {
    var domain = Object(_compute_state_domain__WEBPACK_IMPORTED_MODULE_1__["computeStateDomain"])(stateObj);
    if (domain === "group") {
        return stateObj.state === "on" || stateObj.state === "off";
    }
    if (domain === "climate") {
        return Object(_supports_feature__WEBPACK_IMPORTED_MODULE_2__["supportsFeature"])(stateObj, 4096);
    }
    return Object(_can_toggle_domain__WEBPACK_IMPORTED_MODULE_0__["canToggleDomain"])(hass, domain);
};


/***/ }),

/***/ "./src/common/entity/state_card_type.ts":
/*!**********************************************!*\
  !*** ./src/common/entity/state_card_type.ts ***!
  \**********************************************/
/*! exports provided: stateCardType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stateCardType", function() { return stateCardType; });
/* harmony import */ var _can_toggle_state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./can_toggle_state */ "./src/common/entity/can_toggle_state.ts");
/* harmony import */ var _compute_state_domain__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./compute_state_domain */ "./src/common/entity/compute_state_domain.ts");
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../const */ "./src/common/const.ts");



var stateCardType = function (hass, stateObj) {
    if (stateObj.state === "unavailable") {
        return "display";
    }
    var domain = Object(_compute_state_domain__WEBPACK_IMPORTED_MODULE_1__["computeStateDomain"])(stateObj);
    if (_const__WEBPACK_IMPORTED_MODULE_2__["DOMAINS_WITH_CARD"].includes(domain)) {
        return domain;
    }
    if (Object(_can_toggle_state__WEBPACK_IMPORTED_MODULE_0__["canToggleState"])(hass, stateObj) &&
        stateObj.attributes.control !== "hidden") {
        return "toggle";
    }
    return "display";
};


/***/ }),

/***/ "./src/common/entity/state_more_info_type.ts":
/*!***************************************************!*\
  !*** ./src/common/entity/state_more_info_type.ts ***!
  \***************************************************/
/*! exports provided: stateMoreInfoType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stateMoreInfoType", function() { return stateMoreInfoType; });
/* harmony import */ var _compute_state_domain__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./compute_state_domain */ "./src/common/entity/compute_state_domain.ts");
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../const */ "./src/common/const.ts");


var stateMoreInfoType = function (stateObj) {
    var domain = Object(_compute_state_domain__WEBPACK_IMPORTED_MODULE_0__["computeStateDomain"])(stateObj);
    if (_const__WEBPACK_IMPORTED_MODULE_1__["DOMAINS_WITH_MORE_INFO"].includes(domain)) {
        return domain;
    }
    if (_const__WEBPACK_IMPORTED_MODULE_1__["DOMAINS_HIDE_MORE_INFO"].includes(domain)) {
        return "hidden";
    }
    return "default";
};


/***/ }),

/***/ "./src/components/ha-vacuum-state.js":
/*!*******************************************!*\
  !*** ./src/components/ha-vacuum-state.js ***!
  \*******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_mwc_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material/mwc-button */ "./node_modules/@material/mwc-button/mwc-button.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../mixins/localize-mixin */ "./src/mixins/localize-mixin.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      <style>\n        mwc-button {\n          top: 3px;\n          height: 37px;\n          margin-right: -0.57em;\n        }\n        mwc-button[disabled] {\n          background-color: transparent;\n          color: var(--secondary-text-color);\n        }\n      </style>\n\n      <mwc-button on-click=\"_callService\" disabled=\"[[!_interceptable]]\"\n        >[[_computeLabel(stateObj.state, _interceptable)]]</mwc-button\n      >\n    "]);

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





var STATES_INTERCEPTABLE = {
  cleaning: {
    action: "return_to_base",
    service: "return_to_base"
  },
  docked: {
    action: "start_cleaning",
    service: "start"
  },
  idle: {
    action: "start_cleaning",
    service: "start"
  },
  off: {
    action: "turn_on",
    service: "turn_on"
  },
  on: {
    action: "turn_off",
    service: "turn_off"
  },
  paused: {
    action: "resume_cleaning",
    service: "start"
  }
};
/*
 * @appliesMixin LocalizeMixin
 */

var HaVacuumState =
/*#__PURE__*/
function (_LocalizeMixin) {
  _inherits(HaVacuumState, _LocalizeMixin);

  function HaVacuumState() {
    _classCallCheck(this, HaVacuumState);

    return _possibleConstructorReturn(this, _getPrototypeOf(HaVacuumState).apply(this, arguments));
  }

  _createClass(HaVacuumState, [{
    key: "_computeInterceptable",
    value: function _computeInterceptable(state, supportedFeatures) {
      return state in STATES_INTERCEPTABLE && supportedFeatures !== 0;
    }
  }, {
    key: "_computeLabel",
    value: function _computeLabel(state, interceptable) {
      return interceptable ? this.localize("ui.card.vacuum.actions.".concat(STATES_INTERCEPTABLE[state].action)) : this.localize("state.vacuum.".concat(state));
    }
  }, {
    key: "_callService",
    value: function _callService(ev) {
      ev.stopPropagation();
      var stateObj = this.stateObj;
      var service = STATES_INTERCEPTABLE[stateObj.state].service;
      this.hass.callService("vacuum", service, {
        entity_id: stateObj.entity_id
      });
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
        hass: Object,
        stateObj: Object,
        _interceptable: {
          type: Boolean,
          computed: "_computeInterceptable(stateObj.state, stateObj.attributes.supported_features)"
        }
      };
    }
  }]);

  return HaVacuumState;
}(Object(_mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_3__["default"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__["PolymerElement"]));

customElements.define("ha-vacuum-state", HaVacuumState);

/***/ }),

/***/ "./src/components/ha-water_heater-state.js":
/*!*************************************************!*\
  !*** ./src/components/ha-water_heater-state.js ***!
  \*************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../mixins/localize-mixin */ "./src/mixins/localize-mixin.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      <style>\n        :host {\n          display: flex;\n          flex-direction: column;\n          justify-content: center;\n          white-space: nowrap;\n        }\n\n        .target {\n          color: var(--primary-text-color);\n        }\n\n        .current {\n          color: var(--secondary-text-color);\n        }\n\n        .state-label {\n          font-weight: bold;\n          text-transform: capitalize;\n        }\n      </style>\n\n      <div class=\"target\">\n        <span class=\"state-label\"> [[_localizeState(stateObj.state)]] </span>\n        [[computeTarget(hass, stateObj)]]\n      </div>\n\n      <template is=\"dom-if\" if=\"[[currentStatus]]\">\n        <div class=\"current\">\n          [[localize('ui.card.water_heater.currently')]]: [[currentStatus]]\n        </div>\n      </template>\n    "]);

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

var HaWaterHeaterState =
/*#__PURE__*/
function (_LocalizeMixin) {
  _inherits(HaWaterHeaterState, _LocalizeMixin);

  function HaWaterHeaterState() {
    _classCallCheck(this, HaWaterHeaterState);

    return _possibleConstructorReturn(this, _getPrototypeOf(HaWaterHeaterState).apply(this, arguments));
  }

  _createClass(HaWaterHeaterState, [{
    key: "computeTarget",
    value: function computeTarget(hass, stateObj) {
      if (!hass || !stateObj) return null; // We're using "!= null" on purpose so that we match both null and undefined.

      if (stateObj.attributes.target_temp_low != null && stateObj.attributes.target_temp_high != null) {
        return "".concat(stateObj.attributes.target_temp_low, " - ").concat(stateObj.attributes.target_temp_high, " ").concat(hass.config.unit_system.temperature);
      }

      if (stateObj.attributes.temperature != null) {
        return "".concat(stateObj.attributes.temperature, " ").concat(hass.config.unit_system.temperature);
      }

      return "";
    }
  }, {
    key: "_localizeState",
    value: function _localizeState(state) {
      return this.localize("state.water_heater.".concat(state)) || state;
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
        hass: Object,
        stateObj: Object
      };
    }
  }]);

  return HaWaterHeaterState;
}(Object(_mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_2__["default"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_1__["PolymerElement"]));

customElements.define("ha-water_heater-state", HaWaterHeaterState);

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

/***/ "./src/state-summary/state-card-climate.js":
/*!*************************************************!*\
  !*** ./src/state-summary/state-card-climate.js ***!
  \*************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_iron_flex_layout_iron_flex_layout_classes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/iron-flex-layout/iron-flex-layout-classes */ "./node_modules/@polymer/iron-flex-layout/iron-flex-layout-classes.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _components_entity_state_info__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/entity/state-info */ "./src/components/entity/state-info.js");
/* harmony import */ var _components_ha_climate_state__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/ha-climate-state */ "./src/components/ha-climate-state.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n      <state-info\n        hass=\"[[hass]]\"\n        state-obj=\"[[stateObj]]\"\n        in-dialog=\"[[inDialog]]\"\n      ></state-info>\n    "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      <style include=\"iron-flex iron-flex-alignment\"></style>\n      <style>\n        :host {\n          @apply --paper-font-body1;\n          line-height: 1.5;\n        }\n\n        ha-climate-state {\n          margin-left: 16px;\n          text-align: right;\n        }\n      </style>\n\n      <div class=\"horizontal justified layout\">\n        ", "\n        <ha-climate-state\n          hass=\"[[hass]]\"\n          state-obj=\"[[stateObj]]\"\n        ></ha-climate-state>\n      </div>\n    "]);

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







var StateCardClimate =
/*#__PURE__*/
function (_PolymerElement) {
  _inherits(StateCardClimate, _PolymerElement);

  function StateCardClimate() {
    _classCallCheck(this, StateCardClimate);

    return _possibleConstructorReturn(this, _getPrototypeOf(StateCardClimate).apply(this, arguments));
  }

  _createClass(StateCardClimate, null, [{
    key: "template",
    get: function get() {
      return Object(_polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__["html"])(_templateObject(), this.stateInfoTemplate);
    }
  }, {
    key: "stateInfoTemplate",
    get: function get() {
      return Object(_polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__["html"])(_templateObject2());
    }
  }, {
    key: "properties",
    get: function get() {
      return {
        hass: Object,
        stateObj: Object,
        inDialog: {
          type: Boolean,
          value: false
        }
      };
    }
  }]);

  return StateCardClimate;
}(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__["PolymerElement"]);

customElements.define("state-card-climate", StateCardClimate);

/***/ }),

/***/ "./src/state-summary/state-card-configurator.js":
/*!******************************************************!*\
  !*** ./src/state-summary/state-card-configurator.js ***!
  \******************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_iron_flex_layout_iron_flex_layout_classes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/iron-flex-layout/iron-flex-layout-classes */ "./node_modules/@polymer/iron-flex-layout/iron-flex-layout-classes.js");
/* harmony import */ var _material_mwc_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material/mwc-button */ "./node_modules/@material/mwc-button/mwc-button.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _components_entity_state_info__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/entity/state-info */ "./src/components/entity/state-info.js");
/* harmony import */ var _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../mixins/localize-mixin */ "./src/mixins/localize-mixin.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n      <state-info\n        hass=\"[[hass]]\"\n        state-obj=\"[[stateObj]]\"\n        in-dialog=\"[[inDialog]]\"\n      ></state-info>\n    "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      <style include=\"iron-flex iron-flex-alignment\"></style>\n      <style>\n        mwc-button {\n          top: 3px;\n          height: 37px;\n          margin-right: -0.57em;\n        }\n      </style>\n\n      <div class=\"horizontal justified layout\">\n        ", "\n        <mwc-button hidden$=\"[[inDialog]]\"\n          >[[_localizeState(stateObj.state)]]</mwc-button\n        >\n      </div>\n\n      <!-- pre load the image so the dialog is rendered the proper size -->\n      <template is=\"dom-if\" if=\"[[stateObj.attributes.description_image]]\">\n        <img hidden=\"\" src=\"[[stateObj.attributes.description_image]]\" />\n      </template>\n    "]);

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

var StateCardConfigurator =
/*#__PURE__*/
function (_LocalizeMixin) {
  _inherits(StateCardConfigurator, _LocalizeMixin);

  function StateCardConfigurator() {
    _classCallCheck(this, StateCardConfigurator);

    return _possibleConstructorReturn(this, _getPrototypeOf(StateCardConfigurator).apply(this, arguments));
  }

  _createClass(StateCardConfigurator, [{
    key: "_localizeState",
    value: function _localizeState(state) {
      return this.localize("state.configurator.".concat(state));
    }
  }], [{
    key: "template",
    get: function get() {
      return Object(_polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_2__["html"])(_templateObject(), this.stateInfoTemplate);
    }
  }, {
    key: "stateInfoTemplate",
    get: function get() {
      return Object(_polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_2__["html"])(_templateObject2());
    }
  }, {
    key: "properties",
    get: function get() {
      return {
        hass: Object,
        stateObj: Object,
        inDialog: {
          type: Boolean,
          value: false
        }
      };
    }
  }]);

  return StateCardConfigurator;
}(Object(_mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_5__["default"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_3__["PolymerElement"]));

customElements.define("state-card-configurator", StateCardConfigurator);

/***/ }),

/***/ "./src/state-summary/state-card-content.js":
/*!*************************************************!*\
  !*** ./src/state-summary/state-card-content.js ***!
  \*************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _state_card_climate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./state-card-climate */ "./src/state-summary/state-card-climate.js");
/* harmony import */ var _state_card_configurator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./state-card-configurator */ "./src/state-summary/state-card-configurator.js");
/* harmony import */ var _state_card_cover__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./state-card-cover */ "./src/state-summary/state-card-cover.js");
/* harmony import */ var _state_card_display__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./state-card-display */ "./src/state-summary/state-card-display.js");
/* harmony import */ var _state_card_input_number__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./state-card-input_number */ "./src/state-summary/state-card-input_number.js");
/* harmony import */ var _state_card_input_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./state-card-input_select */ "./src/state-summary/state-card-input_select.ts");
/* harmony import */ var _state_card_input_text__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./state-card-input_text */ "./src/state-summary/state-card-input_text.js");
/* harmony import */ var _state_card_lock__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./state-card-lock */ "./src/state-summary/state-card-lock.js");
/* harmony import */ var _state_card_media_player__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./state-card-media_player */ "./src/state-summary/state-card-media_player.js");
/* harmony import */ var _state_card_scene__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./state-card-scene */ "./src/state-summary/state-card-scene.js");
/* harmony import */ var _state_card_script__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./state-card-script */ "./src/state-summary/state-card-script.js");
/* harmony import */ var _state_card_timer__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./state-card-timer */ "./src/state-summary/state-card-timer.js");
/* harmony import */ var _state_card_toggle__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./state-card-toggle */ "./src/state-summary/state-card-toggle.js");
/* harmony import */ var _state_card_vacuum__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./state-card-vacuum */ "./src/state-summary/state-card-vacuum.js");
/* harmony import */ var _state_card_water_heater__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./state-card-water_heater */ "./src/state-summary/state-card-water_heater.js");
/* harmony import */ var _state_card_weblink__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./state-card-weblink */ "./src/state-summary/state-card-weblink.js");
/* harmony import */ var _common_entity_state_card_type__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../common/entity/state_card_type */ "./src/common/entity/state_card_type.ts");
/* harmony import */ var _common_dom_dynamic_content_updater__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../common/dom/dynamic_content_updater */ "./src/common/dom/dynamic_content_updater.ts");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





















var StateCardContent =
/*#__PURE__*/
function (_PolymerElement) {
  _inherits(StateCardContent, _PolymerElement);

  function StateCardContent() {
    _classCallCheck(this, StateCardContent);

    return _possibleConstructorReturn(this, _getPrototypeOf(StateCardContent).apply(this, arguments));
  }

  _createClass(StateCardContent, [{
    key: "inputChanged",
    value: function inputChanged(hass, inDialog, stateObj) {
      var stateCard;
      if (!stateObj || !hass) return;

      if (stateObj.attributes && "custom_ui_state_card" in stateObj.attributes) {
        stateCard = stateObj.attributes.custom_ui_state_card;
      } else {
        stateCard = "state-card-" + Object(_common_entity_state_card_type__WEBPACK_IMPORTED_MODULE_17__["stateCardType"])(hass, stateObj);
      }

      Object(_common_dom_dynamic_content_updater__WEBPACK_IMPORTED_MODULE_18__["default"])(this, stateCard.toUpperCase(), {
        hass: hass,
        stateObj: stateObj,
        inDialog: inDialog
      });
    }
  }], [{
    key: "properties",
    get: function get() {
      return {
        hass: Object,
        stateObj: Object,
        inDialog: {
          type: Boolean,
          value: false
        }
      };
    }
  }, {
    key: "observers",
    get: function get() {
      return ["inputChanged(hass, inDialog, stateObj)"];
    }
  }]);

  return StateCardContent;
}(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_0__["PolymerElement"]);

customElements.define("state-card-content", StateCardContent);

/***/ }),

/***/ "./src/state-summary/state-card-cover.js":
/*!***********************************************!*\
  !*** ./src/state-summary/state-card-cover.js ***!
  \***********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_iron_flex_layout_iron_flex_layout_classes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/iron-flex-layout/iron-flex-layout-classes */ "./node_modules/@polymer/iron-flex-layout/iron-flex-layout-classes.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _components_entity_state_info__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/entity/state-info */ "./src/components/entity/state-info.js");
/* harmony import */ var _components_ha_cover_controls__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/ha-cover-controls */ "./src/components/ha-cover-controls.js");
/* harmony import */ var _components_ha_cover_tilt_controls__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/ha-cover-tilt-controls */ "./src/components/ha-cover-tilt-controls.js");
/* harmony import */ var _util_cover_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../util/cover-model */ "./src/util/cover-model.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n      <state-info\n        hass=\"[[hass]]\"\n        state-obj=\"[[stateObj]]\"\n        in-dialog=\"[[inDialog]]\"\n      ></state-info>\n    "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      <style include=\"iron-flex iron-flex-alignment\"></style>\n      <style>\n        :host {\n          line-height: 1.5;\n        }\n      </style>\n\n      <div class=\"horizontal justified layout\">\n        ", "\n        <div class=\"horizontal layout\">\n          <ha-cover-controls\n            hidden$=\"[[entityObj.isTiltOnly]]\"\n            hass=\"[[hass]]\"\n            state-obj=\"[[stateObj]]\"\n          ></ha-cover-controls>\n          <ha-cover-tilt-controls\n            hidden$=\"[[!entityObj.isTiltOnly]]\"\n            hass=\"[[hass]]\"\n            state-obj=\"[[stateObj]]\"\n          ></ha-cover-tilt-controls>\n        </div>\n      </div>\n    "]);

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









var StateCardCover =
/*#__PURE__*/
function (_PolymerElement) {
  _inherits(StateCardCover, _PolymerElement);

  function StateCardCover() {
    _classCallCheck(this, StateCardCover);

    return _possibleConstructorReturn(this, _getPrototypeOf(StateCardCover).apply(this, arguments));
  }

  _createClass(StateCardCover, [{
    key: "computeEntityObj",
    value: function computeEntityObj(hass, stateObj) {
      var entity = new _util_cover_model__WEBPACK_IMPORTED_MODULE_6__["default"](hass, stateObj);
      return entity;
    }
  }], [{
    key: "template",
    get: function get() {
      return Object(_polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__["html"])(_templateObject(), this.stateInfoTemplate);
    }
  }, {
    key: "stateInfoTemplate",
    get: function get() {
      return Object(_polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__["html"])(_templateObject2());
    }
  }, {
    key: "properties",
    get: function get() {
      return {
        hass: Object,
        stateObj: Object,
        inDialog: {
          type: Boolean,
          value: false
        },
        entityObj: {
          type: Object,
          computed: "computeEntityObj(hass, stateObj)"
        }
      };
    }
  }]);

  return StateCardCover;
}(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__["PolymerElement"]);

customElements.define("state-card-cover", StateCardCover);

/***/ }),

/***/ "./src/state-summary/state-card-display.js":
/*!*************************************************!*\
  !*** ./src/state-summary/state-card-display.js ***!
  \*************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_iron_flex_layout_iron_flex_layout_classes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/iron-flex-layout/iron-flex-layout-classes */ "./node_modules/@polymer/iron-flex-layout/iron-flex-layout-classes.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _components_entity_state_info__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/entity/state-info */ "./src/components/entity/state-info.js");
/* harmony import */ var _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../mixins/localize-mixin */ "./src/mixins/localize-mixin.js");
/* harmony import */ var _common_entity_attribute_class_names__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/entity/attribute_class_names */ "./src/common/entity/attribute_class_names.ts");
/* harmony import */ var _common_entity_compute_state_display__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common/entity/compute_state_display */ "./src/common/entity/compute_state_display.ts");
/* harmony import */ var _common_util_compute_rtl__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../common/util/compute_rtl */ "./src/common/util/compute_rtl.ts");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n      <state-info\n        hass=\"[[hass]]\"\n        state-obj=\"[[stateObj]]\"\n        in-dialog=\"[[inDialog]]\"\n      ></state-info>\n    "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      <style>\n        :host {\n          @apply --layout-horizontal;\n          @apply --layout-justified;\n          @apply --layout-baseline;\n        }\n\n        :host([rtl]) {\n          direction: rtl;\n          text-align: right;\n        }\n\n        state-info {\n          flex: 1 1 auto;\n          min-width: 0;\n        }\n        .state {\n          @apply --paper-font-body1;\n          color: var(--primary-text-color);\n          margin-left: 16px;\n          text-align: right;\n          max-width: 40%;\n          flex: 0 0 auto;\n        }\n        :host([rtl]) .state {\n          margin-right: 16px;\n          margin-left: 0;\n          text-align: left;\n        }\n\n        .state.has-unit_of_measurement {\n          white-space: nowrap;\n        }\n      </style>\n\n      ", "\n      <div class$=\"[[computeClassNames(stateObj)]]\">\n        [[computeStateDisplay(localize, stateObj, language)]]\n      </div>\n    "]);

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

var StateCardDisplay =
/*#__PURE__*/
function (_LocalizeMixin) {
  _inherits(StateCardDisplay, _LocalizeMixin);

  function StateCardDisplay() {
    _classCallCheck(this, StateCardDisplay);

    return _possibleConstructorReturn(this, _getPrototypeOf(StateCardDisplay).apply(this, arguments));
  }

  _createClass(StateCardDisplay, [{
    key: "computeStateDisplay",
    value: function computeStateDisplay(localize, stateObj, language) {
      return Object(_common_entity_compute_state_display__WEBPACK_IMPORTED_MODULE_6__["computeStateDisplay"])(localize, stateObj, language);
    }
  }, {
    key: "computeClassNames",
    value: function computeClassNames(stateObj) {
      var classes = ["state", Object(_common_entity_attribute_class_names__WEBPACK_IMPORTED_MODULE_5__["attributeClassNames"])(stateObj, ["unit_of_measurement"])];
      return classes.join(" ");
    }
  }, {
    key: "_computeRTL",
    value: function _computeRTL(hass) {
      return Object(_common_util_compute_rtl__WEBPACK_IMPORTED_MODULE_7__["computeRTL"])(hass);
    }
  }], [{
    key: "template",
    get: function get() {
      return Object(_polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__["html"])(_templateObject(), this.stateInfoTemplate);
    }
  }, {
    key: "stateInfoTemplate",
    get: function get() {
      return Object(_polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__["html"])(_templateObject2());
    }
  }, {
    key: "properties",
    get: function get() {
      return {
        hass: Object,
        stateObj: Object,
        inDialog: {
          type: Boolean,
          value: false
        },
        rtl: {
          type: Boolean,
          reflectToAttribute: true,
          computed: "_computeRTL(hass)"
        }
      };
    }
  }]);

  return StateCardDisplay;
}(Object(_mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_4__["default"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__["PolymerElement"]));

customElements.define("state-card-display", StateCardDisplay);

/***/ }),

/***/ "./src/state-summary/state-card-input_number.js":
/*!******************************************************!*\
  !*** ./src/state-summary/state-card-input_number.js ***!
  \******************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_iron_flex_layout_iron_flex_layout_classes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/iron-flex-layout/iron-flex-layout-classes */ "./node_modules/@polymer/iron-flex-layout/iron-flex-layout-classes.js");
/* harmony import */ var _polymer_iron_resizable_behavior_iron_resizable_behavior__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/iron-resizable-behavior/iron-resizable-behavior */ "./node_modules/@polymer/iron-resizable-behavior/iron-resizable-behavior.js");
/* harmony import */ var _polymer_paper_input_paper_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-input/paper-input */ "./node_modules/@polymer/paper-input/paper-input.js");
/* harmony import */ var _polymer_polymer_lib_legacy_class__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/polymer/lib/legacy/class */ "./node_modules/@polymer/polymer/lib/legacy/class.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _components_entity_state_info__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/entity/state-info */ "./src/components/entity/state-info.js");
/* harmony import */ var _components_ha_slider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/ha-slider */ "./src/components/ha-slider.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n      <state-info\n        hass=\"[[hass]]\"\n        state-obj=\"[[stateObj]]\"\n        in-dialog=\"[[inDialog]]\"\n      ></state-info>\n    "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      <style include=\"iron-flex iron-flex-alignment\"></style>\n      <style>\n        ha-slider {\n          margin-left: auto;\n        }\n        .state {\n          @apply --paper-font-body1;\n          color: var(--primary-text-color);\n\n          text-align: right;\n          line-height: 40px;\n        }\n        .sliderstate {\n          min-width: 45px;\n        }\n        ha-slider[hidden] {\n          display: none !important;\n        }\n        paper-input {\n          text-align: right;\n          margin-left: auto;\n        }\n      </style>\n\n      <div class=\"horizontal justified layout\" id=\"input_number_card\">\n        ", "\n        <ha-slider\n          min=\"[[min]]\"\n          max=\"[[max]]\"\n          value=\"{{value}}\"\n          step=\"[[step]]\"\n          hidden=\"[[hiddenslider]]\"\n          pin=\"\"\n          on-change=\"selectedValueChanged\"\n          on-click=\"stopPropagation\"\n          id=\"slider\"\n          ignore-bar-touch=\"\"\n        >\n        </ha-slider>\n        <paper-input\n          no-label-float=\"\"\n          auto-validate=\"\"\n          pattern=\"[0-9]+([\\.][0-9]+)?\"\n          step=\"[[step]]\"\n          min=\"[[min]]\"\n          max=\"[[max]]\"\n          value=\"{{value}}\"\n          type=\"number\"\n          on-change=\"selectedValueChanged\"\n          on-click=\"stopPropagation\"\n          hidden=\"[[hiddenbox]]\"\n        >\n        </paper-input>\n        <div class=\"state\" hidden=\"[[hiddenbox]]\">\n          [[stateObj.attributes.unit_of_measurement]]\n        </div>\n        <div\n          id=\"sliderstate\"\n          class=\"state sliderstate\"\n          hidden=\"[[hiddenslider]]\"\n        >\n          [[value]] [[stateObj.attributes.unit_of_measurement]]\n        </div>\n      </div>\n    "], ["\n      <style include=\"iron-flex iron-flex-alignment\"></style>\n      <style>\n        ha-slider {\n          margin-left: auto;\n        }\n        .state {\n          @apply --paper-font-body1;\n          color: var(--primary-text-color);\n\n          text-align: right;\n          line-height: 40px;\n        }\n        .sliderstate {\n          min-width: 45px;\n        }\n        ha-slider[hidden] {\n          display: none !important;\n        }\n        paper-input {\n          text-align: right;\n          margin-left: auto;\n        }\n      </style>\n\n      <div class=\"horizontal justified layout\" id=\"input_number_card\">\n        ", "\n        <ha-slider\n          min=\"[[min]]\"\n          max=\"[[max]]\"\n          value=\"{{value}}\"\n          step=\"[[step]]\"\n          hidden=\"[[hiddenslider]]\"\n          pin=\"\"\n          on-change=\"selectedValueChanged\"\n          on-click=\"stopPropagation\"\n          id=\"slider\"\n          ignore-bar-touch=\"\"\n        >\n        </ha-slider>\n        <paper-input\n          no-label-float=\"\"\n          auto-validate=\"\"\n          pattern=\"[0-9]+([\\\\.][0-9]+)?\"\n          step=\"[[step]]\"\n          min=\"[[min]]\"\n          max=\"[[max]]\"\n          value=\"{{value}}\"\n          type=\"number\"\n          on-change=\"selectedValueChanged\"\n          on-click=\"stopPropagation\"\n          hidden=\"[[hiddenbox]]\"\n        >\n        </paper-input>\n        <div class=\"state\" hidden=\"[[hiddenbox]]\">\n          [[stateObj.attributes.unit_of_measurement]]\n        </div>\n        <div\n          id=\"sliderstate\"\n          class=\"state sliderstate\"\n          hidden=\"[[hiddenslider]]\"\n        >\n          [[value]] [[stateObj.attributes.unit_of_measurement]]\n        </div>\n      </div>\n    "]);

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










var StateCardInputNumber =
/*#__PURE__*/
function (_mixinBehaviors) {
  _inherits(StateCardInputNumber, _mixinBehaviors);

  function StateCardInputNumber() {
    _classCallCheck(this, StateCardInputNumber);

    return _possibleConstructorReturn(this, _getPrototypeOf(StateCardInputNumber).apply(this, arguments));
  }

  _createClass(StateCardInputNumber, [{
    key: "ready",
    value: function ready() {
      var _this = this;

      _get(_getPrototypeOf(StateCardInputNumber.prototype), "ready", this).call(this);

      if (typeof ResizeObserver === "function") {
        var ro = new ResizeObserver(function (entries) {
          entries.forEach(function () {
            _this.hiddenState();
          });
        });
        ro.observe(this.$.input_number_card);
      } else {
        this.addEventListener("iron-resize", this.hiddenState);
      }
    }
  }, {
    key: "hiddenState",
    value: function hiddenState() {
      if (this.mode !== "slider") return;
      var sliderwidth = this.$.slider.offsetWidth;

      if (sliderwidth < 100) {
        this.$.sliderstate.hidden = true;
      } else if (sliderwidth >= 145) {
        this.$.sliderstate.hidden = false;
      }
    }
  }, {
    key: "stateObjectChanged",
    value: function stateObjectChanged(newVal) {
      var prevMode = this.mode;
      this.setProperties({
        min: Number(newVal.attributes.min),
        max: Number(newVal.attributes.max),
        step: Number(newVal.attributes.step),
        value: Number(newVal.state),
        mode: String(newVal.attributes.mode),
        maxlength: String(newVal.attributes.max).length,
        hiddenbox: newVal.attributes.mode !== "box",
        hiddenslider: newVal.attributes.mode !== "slider"
      });

      if (this.mode === "slider" && prevMode !== "slider") {
        this.hiddenState();
      }
    }
  }, {
    key: "selectedValueChanged",
    value: function selectedValueChanged() {
      if (this.value === Number(this.stateObj.state)) {
        return;
      }

      this.hass.callService("input_number", "set_value", {
        value: this.value,
        entity_id: this.stateObj.entity_id
      });
    }
  }, {
    key: "stopPropagation",
    value: function stopPropagation(ev) {
      ev.stopPropagation();
    }
  }], [{
    key: "template",
    get: function get() {
      return Object(_polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_4__["html"])(_templateObject(), this.stateInfoTemplate);
    }
  }, {
    key: "stateInfoTemplate",
    get: function get() {
      return Object(_polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_4__["html"])(_templateObject2());
    }
  }, {
    key: "properties",
    get: function get() {
      return {
        hass: Object,
        hiddenbox: {
          type: Boolean,
          value: true
        },
        hiddenslider: {
          type: Boolean,
          value: true
        },
        inDialog: {
          type: Boolean,
          value: false
        },
        stateObj: {
          type: Object,
          observer: "stateObjectChanged"
        },
        min: {
          type: Number,
          value: 0
        },
        max: {
          type: Number,
          value: 100
        },
        maxlength: {
          type: Number,
          value: 3
        },
        step: Number,
        value: Number,
        mode: String
      };
    }
  }]);

  return StateCardInputNumber;
}(Object(_polymer_polymer_lib_legacy_class__WEBPACK_IMPORTED_MODULE_3__["mixinBehaviors"])([_polymer_iron_resizable_behavior_iron_resizable_behavior__WEBPACK_IMPORTED_MODULE_1__["IronResizableBehavior"]], _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_5__["PolymerElement"]));

customElements.define("state-card-input_number", StateCardInputNumber);

/***/ }),

/***/ "./src/state-summary/state-card-input_select.ts":
/*!******************************************************!*\
  !*** ./src/state-summary/state-card-input_select.ts ***!
  \******************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _polymer_paper_dropdown_menu_paper_dropdown_menu_light__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-dropdown-menu/paper-dropdown-menu-light */ "./node_modules/@polymer/paper-dropdown-menu/paper-dropdown-menu-light.js");
/* harmony import */ var _polymer_paper_item_paper_item__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/paper-item/paper-item */ "./node_modules/@polymer/paper-item/paper-item.js");
/* harmony import */ var _polymer_paper_listbox_paper_listbox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/paper-listbox/paper-listbox */ "./node_modules/@polymer/paper-listbox/paper-listbox.js");
/* harmony import */ var _components_entity_state_badge__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/entity/state-badge */ "./src/components/entity/state-badge.ts");
/* harmony import */ var _common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common/entity/compute_state_name */ "./src/common/entity/compute_state_name.ts");
/* harmony import */ var _data_input_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../data/input-select */ "./src/data/input-select.ts");
/* harmony import */ var _common_dom_stop_propagation__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../common/dom/stop_propagation */ "./src/common/dom/stop_propagation.ts");









var StateCardInputSelect = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(StateCardInputSelect, _super);
    function StateCardInputSelect() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    StateCardInputSelect.prototype.render = function () {
        return Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_2 || (templateObject_2 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      <state-badge .stateObj=", "></state-badge>\n      <paper-dropdown-menu-light\n        .label=", "\n        .value=\"", "\"\n        @iron-select=", "\n        @click=", "\n      >\n        <paper-listbox slot=\"dropdown-content\">\n          ", "\n        </paper-listbox>\n      </paper-dropdown-menu-light>\n    "], ["\n      <state-badge .stateObj=", "></state-badge>\n      <paper-dropdown-menu-light\n        .label=", "\n        .value=\"", "\"\n        @iron-select=", "\n        @click=", "\n      >\n        <paper-listbox slot=\"dropdown-content\">\n          ",
            "\n        </paper-listbox>\n      </paper-dropdown-menu-light>\n    "])), this.stateObj, Object(_common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_6__["computeStateName"])(this.stateObj), this.stateObj.state, this._selectedOptionChanged, _common_dom_stop_propagation__WEBPACK_IMPORTED_MODULE_8__["stopPropagation"], this.stateObj.attributes.options.map(function (option) { return Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_1 || (templateObject_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n              <paper-item>", "</paper-item>\n            "], ["\n              <paper-item>", "</paper-item>\n            "])), option); }));
    };
    StateCardInputSelect.prototype.updated = function (changedProps) {
        _super.prototype.updated.call(this, changedProps);
        // Update selected after rendering the items or else it won't work in Firefox
        this.shadowRoot.querySelector("paper-listbox").selected = this.stateObj.attributes.options.indexOf(this.stateObj.state);
    };
    StateCardInputSelect.prototype._selectedOptionChanged = function (ev) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var option;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        option = ev.detail.item.innerText.trim();
                        if (option === this.stateObj.state) {
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, Object(_data_input_select__WEBPACK_IMPORTED_MODULE_7__["setInputSelectOption"])(this.hass, this.stateObj.entity_id, option)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Object.defineProperty(StateCardInputSelect, "styles", {
        get: function () {
            return Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["css"])(templateObject_3 || (templateObject_3 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      :host {\n        display: block;\n      }\n\n      state-badge {\n        float: left;\n        margin-top: 10px;\n      }\n\n      paper-dropdown-menu-light {\n        display: block;\n        margin-left: 53px;\n      }\n\n      paper-item {\n        cursor: pointer;\n        min-width: 200px;\n      }\n    "], ["\n      :host {\n        display: block;\n      }\n\n      state-badge {\n        float: left;\n        margin-top: 10px;\n      }\n\n      paper-dropdown-menu-light {\n        display: block;\n        margin-left: 53px;\n      }\n\n      paper-item {\n        cursor: pointer;\n        min-width: 200px;\n      }\n    "])));
        },
        enumerable: true,
        configurable: true
    });
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
    ], StateCardInputSelect.prototype, "hass", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
    ], StateCardInputSelect.prototype, "stateObj", void 0);
    StateCardInputSelect = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["customElement"])("state-card-input_select")
    ], StateCardInputSelect);
    return StateCardInputSelect;
}(lit_element__WEBPACK_IMPORTED_MODULE_1__["LitElement"]));
var templateObject_1, templateObject_2, templateObject_3;


/***/ }),

/***/ "./src/state-summary/state-card-input_text.js":
/*!****************************************************!*\
  !*** ./src/state-summary/state-card-input_text.js ***!
  \****************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_iron_flex_layout_iron_flex_layout_classes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/iron-flex-layout/iron-flex-layout-classes */ "./node_modules/@polymer/iron-flex-layout/iron-flex-layout-classes.js");
/* harmony import */ var _polymer_paper_input_paper_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-input/paper-input */ "./node_modules/@polymer/paper-input/paper-input.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _components_entity_state_info__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/entity/state-info */ "./src/components/entity/state-info.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n      <state-info\n        hass=\"[[hass]]\"\n        state-obj=\"[[stateObj]]\"\n        in-dialog=\"[[inDialog]]\"\n      ></state-info>\n    "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      <style include=\"iron-flex iron-flex-alignment\"></style>\n      <style>\n        paper-input {\n          margin-left: 16px;\n        }\n      </style>\n\n      <div class=\"horizontal justified layout\">\n        ", "\n        <paper-input\n          no-label-float=\"\"\n          minlength=\"[[stateObj.attributes.min]]\"\n          maxlength=\"[[stateObj.attributes.max]]\"\n          value=\"{{value}}\"\n          auto-validate=\"[[stateObj.attributes.pattern]]\"\n          pattern=\"[[stateObj.attributes.pattern]]\"\n          type=\"[[stateObj.attributes.mode]]\"\n          on-change=\"selectedValueChanged\"\n          on-click=\"stopPropagation\"\n          placeholder=\"(empty value)\"\n        >\n        </paper-input>\n      </div>\n    "]);

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







var StateCardInputText =
/*#__PURE__*/
function (_PolymerElement) {
  _inherits(StateCardInputText, _PolymerElement);

  function StateCardInputText() {
    _classCallCheck(this, StateCardInputText);

    return _possibleConstructorReturn(this, _getPrototypeOf(StateCardInputText).apply(this, arguments));
  }

  _createClass(StateCardInputText, [{
    key: "stateObjectChanged",
    value: function stateObjectChanged(newVal) {
      this.value = newVal.state;
    }
  }, {
    key: "selectedValueChanged",
    value: function selectedValueChanged() {
      if (this.value === this.stateObj.state) {
        return;
      }

      this.hass.callService("input_text", "set_value", {
        value: this.value,
        entity_id: this.stateObj.entity_id
      });
    }
  }, {
    key: "stopPropagation",
    value: function stopPropagation(ev) {
      ev.stopPropagation();
    }
  }], [{
    key: "template",
    get: function get() {
      return Object(_polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_2__["html"])(_templateObject(), this.stateInfoTemplate);
    }
  }, {
    key: "stateInfoTemplate",
    get: function get() {
      return Object(_polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_2__["html"])(_templateObject2());
    }
  }, {
    key: "properties",
    get: function get() {
      return {
        hass: Object,
        inDialog: {
          type: Boolean,
          value: false
        },
        stateObj: {
          type: Object,
          observer: "stateObjectChanged"
        },
        pattern: String,
        value: String
      };
    }
  }]);

  return StateCardInputText;
}(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_3__["PolymerElement"]);

customElements.define("state-card-input_text", StateCardInputText);

/***/ }),

/***/ "./src/state-summary/state-card-lock.js":
/*!**********************************************!*\
  !*** ./src/state-summary/state-card-lock.js ***!
  \**********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_iron_flex_layout_iron_flex_layout_classes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/iron-flex-layout/iron-flex-layout-classes */ "./node_modules/@polymer/iron-flex-layout/iron-flex-layout-classes.js");
/* harmony import */ var _material_mwc_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material/mwc-button */ "./node_modules/@material/mwc-button/mwc-button.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _components_entity_state_info__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/entity/state-info */ "./src/components/entity/state-info.js");
/* harmony import */ var _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../mixins/localize-mixin */ "./src/mixins/localize-mixin.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n      <state-info\n        hass=\"[[hass]]\"\n        state-obj=\"[[stateObj]]\"\n        in-dialog=\"[[inDialog]]\"\n      ></state-info>\n    "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      <style include=\"iron-flex iron-flex-alignment\"></style>\n      <style>\n        mwc-button {\n          top: 3px;\n          height: 37px;\n          margin-right: -0.57em;\n        }\n      </style>\n\n      <div class=\"horizontal justified layout\">\n        ", "\n        <mwc-button\n          on-click=\"_callService\"\n          data-service=\"unlock\"\n          hidden$=\"[[!isLocked]]\"\n          >[[localize('ui.card.lock.unlock')]]</mwc-button\n        >\n        <mwc-button\n          on-click=\"_callService\"\n          data-service=\"lock\"\n          hidden$=\"[[isLocked]]\"\n          >[[localize('ui.card.lock.lock')]]</mwc-button\n        >\n      </div>\n    "]);

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

var StateCardLock =
/*#__PURE__*/
function (_LocalizeMixin) {
  _inherits(StateCardLock, _LocalizeMixin);

  function StateCardLock() {
    _classCallCheck(this, StateCardLock);

    return _possibleConstructorReturn(this, _getPrototypeOf(StateCardLock).apply(this, arguments));
  }

  _createClass(StateCardLock, [{
    key: "_stateObjChanged",
    value: function _stateObjChanged(newVal) {
      if (newVal) {
        this.isLocked = newVal.state === "locked";
      }
    }
  }, {
    key: "_callService",
    value: function _callService(ev) {
      ev.stopPropagation();
      var service = ev.target.dataset.service;
      var data = {
        entity_id: this.stateObj.entity_id
      };
      this.hass.callService("lock", service, data);
    }
  }], [{
    key: "template",
    get: function get() {
      return Object(_polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_2__["html"])(_templateObject(), this.stateInfoTemplate);
    }
  }, {
    key: "stateInfoTemplate",
    get: function get() {
      return Object(_polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_2__["html"])(_templateObject2());
    }
  }, {
    key: "properties",
    get: function get() {
      return {
        hass: Object,
        stateObj: {
          type: Object,
          observer: "_stateObjChanged"
        },
        inDialog: {
          type: Boolean,
          value: false
        },
        isLocked: Boolean
      };
    }
  }]);

  return StateCardLock;
}(Object(_mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_5__["default"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_3__["PolymerElement"]));

customElements.define("state-card-lock", StateCardLock);

/***/ }),

/***/ "./src/state-summary/state-card-media_player.js":
/*!******************************************************!*\
  !*** ./src/state-summary/state-card-media_player.js ***!
  \******************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_iron_flex_layout_iron_flex_layout_classes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/iron-flex-layout/iron-flex-layout-classes */ "./node_modules/@polymer/iron-flex-layout/iron-flex-layout-classes.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _components_entity_state_info__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/entity/state-info */ "./src/components/entity/state-info.js");
/* harmony import */ var _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../mixins/localize-mixin */ "./src/mixins/localize-mixin.js");
/* harmony import */ var _util_hass_media_player_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../util/hass-media-player-model */ "./src/util/hass-media-player-model.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n      <state-info\n        hass=\"[[hass]]\"\n        state-obj=\"[[stateObj]]\"\n        in-dialog=\"[[inDialog]]\"\n      ></state-info>\n    "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      <style include=\"iron-flex iron-flex-alignment\"></style>\n      <style>\n        :host {\n          line-height: 1.5;\n        }\n\n        .state {\n          @apply --paper-font-common-nowrap;\n          @apply --paper-font-body1;\n          margin-left: 16px;\n          text-align: right;\n        }\n\n        .main-text {\n          @apply --paper-font-common-nowrap;\n          color: var(--primary-text-color);\n          text-transform: capitalize;\n        }\n\n        .main-text[take-height] {\n          line-height: 40px;\n        }\n\n        .secondary-text {\n          @apply --paper-font-common-nowrap;\n          color: var(--secondary-text-color);\n        }\n      </style>\n\n      <div class=\"horizontal justified layout\">\n        ", "\n        <div class=\"state\">\n          <div class=\"main-text\" take-height$=\"[[!playerObj.secondaryTitle]]\">\n            [[computePrimaryText(localize, playerObj)]]\n          </div>\n          <div class=\"secondary-text\">[[playerObj.secondaryTitle]]</div>\n        </div>\n      </div>\n    "]);

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

var StateCardMediaPlayer =
/*#__PURE__*/
function (_LocalizeMixin) {
  _inherits(StateCardMediaPlayer, _LocalizeMixin);

  function StateCardMediaPlayer() {
    _classCallCheck(this, StateCardMediaPlayer);

    return _possibleConstructorReturn(this, _getPrototypeOf(StateCardMediaPlayer).apply(this, arguments));
  }

  _createClass(StateCardMediaPlayer, [{
    key: "computePlayerObj",
    value: function computePlayerObj(hass, stateObj) {
      return new _util_hass_media_player_model__WEBPACK_IMPORTED_MODULE_5__["default"](hass, stateObj);
    }
  }, {
    key: "computePrimaryText",
    value: function computePrimaryText(localize, playerObj) {
      return playerObj.primaryTitle || localize("state.media_player.".concat(playerObj.stateObj.state)) || localize("state.default.".concat(playerObj.stateObj.state)) || playerObj.stateObj.state;
    }
  }], [{
    key: "template",
    get: function get() {
      return Object(_polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__["html"])(_templateObject(), this.stateInfoTemplate);
    }
  }, {
    key: "stateInfoTemplate",
    get: function get() {
      return Object(_polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__["html"])(_templateObject2());
    }
  }, {
    key: "properties",
    get: function get() {
      return {
        hass: Object,
        stateObj: Object,
        inDialog: {
          type: Boolean,
          value: false
        },
        playerObj: {
          type: Object,
          computed: "computePlayerObj(hass, stateObj)"
        }
      };
    }
  }]);

  return StateCardMediaPlayer;
}(Object(_mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_4__["default"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__["PolymerElement"]));

customElements.define("state-card-media_player", StateCardMediaPlayer);

/***/ }),

/***/ "./src/state-summary/state-card-scene.js":
/*!***********************************************!*\
  !*** ./src/state-summary/state-card-scene.js ***!
  \***********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_iron_flex_layout_iron_flex_layout_classes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/iron-flex-layout/iron-flex-layout-classes */ "./node_modules/@polymer/iron-flex-layout/iron-flex-layout-classes.js");
/* harmony import */ var _material_mwc_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material/mwc-button */ "./node_modules/@material/mwc-button/mwc-button.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _components_entity_state_info__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/entity/state-info */ "./src/components/entity/state-info.js");
/* harmony import */ var _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../mixins/localize-mixin */ "./src/mixins/localize-mixin.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n      <state-info\n        hass=\"[[hass]]\"\n        state-obj=\"[[stateObj]]\"\n        in-dialog=\"[[inDialog]]\"\n      ></state-info>\n    "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      <style include=\"iron-flex iron-flex-alignment\"></style>\n      <style>\n        mwc-button {\n          top: 3px;\n          height: 37px;\n          margin-right: -0.57em;\n        }\n      </style>\n\n      <div class=\"horizontal justified layout\">\n        ", "\n        <mwc-button on-click=\"activateScene\"\n          >[[localize('ui.card.scene.activate')]]</mwc-button\n        >\n      </div>\n    "]);

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

var StateCardScene =
/*#__PURE__*/
function (_LocalizeMixin) {
  _inherits(StateCardScene, _LocalizeMixin);

  function StateCardScene() {
    _classCallCheck(this, StateCardScene);

    return _possibleConstructorReturn(this, _getPrototypeOf(StateCardScene).apply(this, arguments));
  }

  _createClass(StateCardScene, [{
    key: "activateScene",
    value: function activateScene(ev) {
      ev.stopPropagation();
      this.hass.callService("scene", "turn_on", {
        entity_id: this.stateObj.entity_id
      });
    }
  }], [{
    key: "template",
    get: function get() {
      return Object(_polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_2__["html"])(_templateObject(), this.stateInfoTemplate);
    }
  }, {
    key: "stateInfoTemplate",
    get: function get() {
      return Object(_polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_2__["html"])(_templateObject2());
    }
  }, {
    key: "properties",
    get: function get() {
      return {
        hass: Object,
        stateObj: Object,
        inDialog: {
          type: Boolean,
          value: false
        }
      };
    }
  }]);

  return StateCardScene;
}(Object(_mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_5__["default"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_3__["PolymerElement"]));

customElements.define("state-card-scene", StateCardScene);

/***/ }),

/***/ "./src/state-summary/state-card-script.js":
/*!************************************************!*\
  !*** ./src/state-summary/state-card-script.js ***!
  \************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_iron_flex_layout_iron_flex_layout_classes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/iron-flex-layout/iron-flex-layout-classes */ "./node_modules/@polymer/iron-flex-layout/iron-flex-layout-classes.js");
/* harmony import */ var _material_mwc_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material/mwc-button */ "./node_modules/@material/mwc-button/mwc-button.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _components_entity_ha_entity_toggle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/entity/ha-entity-toggle */ "./src/components/entity/ha-entity-toggle.ts");
/* harmony import */ var _components_entity_state_info__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/entity/state-info */ "./src/components/entity/state-info.js");
/* harmony import */ var _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../mixins/localize-mixin */ "./src/mixins/localize-mixin.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n      <state-info\n        hass=\"[[hass]]\"\n        state-obj=\"[[stateObj]]\"\n        in-dialog=\"[[inDialog]]\"\n      ></state-info>\n    "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      <style include=\"iron-flex iron-flex-alignment\"></style>\n      <style>\n        mwc-button {\n          top: 3px;\n          height: 37px;\n          margin-right: -0.57em;\n        }\n\n        ha-entity-toggle {\n          margin-left: 16px;\n        }\n      </style>\n\n      <div class=\"horizontal justified layout\">\n        ", "\n        <template is=\"dom-if\" if=\"[[stateObj.attributes.can_cancel]]\">\n          <ha-entity-toggle\n            state-obj=\"[[stateObj]]\"\n            hass=\"[[hass]]\"\n          ></ha-entity-toggle>\n        </template>\n        <template is=\"dom-if\" if=\"[[!stateObj.attributes.can_cancel]]\">\n          <mwc-button on-click=\"fireScript\"\n            >[[localize('ui.card.script.execute')]]</mwc-button\n          >\n        </template>\n      </div>\n    "]);

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

var StateCardScript =
/*#__PURE__*/
function (_LocalizeMixin) {
  _inherits(StateCardScript, _LocalizeMixin);

  function StateCardScript() {
    _classCallCheck(this, StateCardScript);

    return _possibleConstructorReturn(this, _getPrototypeOf(StateCardScript).apply(this, arguments));
  }

  _createClass(StateCardScript, [{
    key: "fireScript",
    value: function fireScript(ev) {
      ev.stopPropagation();
      this.hass.callService("script", "turn_on", {
        entity_id: this.stateObj.entity_id
      });
    }
  }], [{
    key: "template",
    get: function get() {
      return Object(_polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_2__["html"])(_templateObject(), this.stateInfoTemplate);
    }
  }, {
    key: "stateInfoTemplate",
    get: function get() {
      return Object(_polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_2__["html"])(_templateObject2());
    }
  }, {
    key: "properties",
    get: function get() {
      return {
        hass: Object,
        stateObj: Object,
        inDialog: {
          type: Boolean,
          value: false
        }
      };
    }
  }]);

  return StateCardScript;
}(Object(_mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_6__["default"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_3__["PolymerElement"]));

customElements.define("state-card-script", StateCardScript);

/***/ }),

/***/ "./src/state-summary/state-card-timer.js":
/*!***********************************************!*\
  !*** ./src/state-summary/state-card-timer.js ***!
  \***********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_iron_flex_layout_iron_flex_layout_classes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/iron-flex-layout/iron-flex-layout-classes */ "./node_modules/@polymer/iron-flex-layout/iron-flex-layout-classes.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _components_entity_state_info__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/entity/state-info */ "./src/components/entity/state-info.js");
/* harmony import */ var _common_entity_timer_time_remaining__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/entity/timer_time_remaining */ "./src/common/entity/timer_time_remaining.ts");
/* harmony import */ var _common_datetime_seconds_to_duration__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/datetime/seconds_to_duration */ "./src/common/datetime/seconds_to_duration.ts");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n      <state-info\n        hass=\"[[hass]]\"\n        state-obj=\"[[stateObj]]\"\n        in-dialog=\"[[inDialog]]\"\n      ></state-info>\n    "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      <style include=\"iron-flex iron-flex-alignment\"></style>\n      <style>\n        .state {\n          @apply --paper-font-body1;\n          color: var(--primary-text-color);\n\n          margin-left: 16px;\n          text-align: right;\n          line-height: 40px;\n        }\n      </style>\n\n      <div class=\"horizontal justified layout\">\n        ", "\n        <div class=\"state\">[[_secondsToDuration(timeRemaining)]]</div>\n      </div>\n    "]);

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








var StateCardTimer =
/*#__PURE__*/
function (_PolymerElement) {
  _inherits(StateCardTimer, _PolymerElement);

  function StateCardTimer() {
    _classCallCheck(this, StateCardTimer);

    return _possibleConstructorReturn(this, _getPrototypeOf(StateCardTimer).apply(this, arguments));
  }

  _createClass(StateCardTimer, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      _get(_getPrototypeOf(StateCardTimer.prototype), "connectedCallback", this).call(this);

      this.startInterval(this.stateObj);
    }
  }, {
    key: "disconnectedCallback",
    value: function disconnectedCallback() {
      _get(_getPrototypeOf(StateCardTimer.prototype), "disconnectedCallback", this).call(this);

      this.clearInterval();
    }
  }, {
    key: "stateObjChanged",
    value: function stateObjChanged(stateObj) {
      this.startInterval(stateObj);
    }
  }, {
    key: "clearInterval",
    value: function (_clearInterval) {
      function clearInterval() {
        return _clearInterval.apply(this, arguments);
      }

      clearInterval.toString = function () {
        return _clearInterval.toString();
      };

      return clearInterval;
    }(function () {
      if (this._updateRemaining) {
        clearInterval(this._updateRemaining);
        this._updateRemaining = null;
      }
    })
  }, {
    key: "startInterval",
    value: function startInterval(stateObj) {
      var _this = this;

      this.clearInterval();
      this.calculateRemaining(stateObj);

      if (stateObj.state === "active") {
        this._updateRemaining = setInterval(function () {
          return _this.calculateRemaining(_this.stateObj);
        }, 1000);
      }
    }
  }, {
    key: "calculateRemaining",
    value: function calculateRemaining(stateObj) {
      this.timeRemaining = Object(_common_entity_timer_time_remaining__WEBPACK_IMPORTED_MODULE_4__["timerTimeRemaining"])(stateObj);
    }
  }, {
    key: "_secondsToDuration",
    value: function _secondsToDuration(time) {
      return Object(_common_datetime_seconds_to_duration__WEBPACK_IMPORTED_MODULE_5__["default"])(time);
    }
  }], [{
    key: "template",
    get: function get() {
      return Object(_polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__["html"])(_templateObject(), this.stateInfoTemplate);
    }
  }, {
    key: "stateInfoTemplate",
    get: function get() {
      return Object(_polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__["html"])(_templateObject2());
    }
  }, {
    key: "properties",
    get: function get() {
      return {
        hass: Object,
        stateObj: {
          type: Object,
          observer: "stateObjChanged"
        },
        timeRemaining: Number,
        inDialog: {
          type: Boolean,
          value: false
        }
      };
    }
  }]);

  return StateCardTimer;
}(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__["PolymerElement"]);

customElements.define("state-card-timer", StateCardTimer);

/***/ }),

/***/ "./src/state-summary/state-card-toggle.js":
/*!************************************************!*\
  !*** ./src/state-summary/state-card-toggle.js ***!
  \************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_iron_flex_layout_iron_flex_layout_classes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/iron-flex-layout/iron-flex-layout-classes */ "./node_modules/@polymer/iron-flex-layout/iron-flex-layout-classes.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _components_entity_ha_entity_toggle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/entity/ha-entity-toggle */ "./src/components/entity/ha-entity-toggle.ts");
/* harmony import */ var _components_entity_state_info__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/entity/state-info */ "./src/components/entity/state-info.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n      <state-info\n        hass=\"[[hass]]\"\n        state-obj=\"[[stateObj]]\"\n        in-dialog=\"[[inDialog]]\"\n      ></state-info>\n    "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      <style include=\"iron-flex iron-flex-alignment\"></style>\n      <style>\n        ha-entity-toggle {\n          margin: -4px -16px -4px 0;\n          padding: 4px 16px;\n        }\n      </style>\n\n      <div class=\"horizontal justified layout\">\n        ", "\n        <ha-entity-toggle\n          state-obj=\"[[stateObj]]\"\n          hass=\"[[hass]]\"\n        ></ha-entity-toggle>\n      </div>\n    "]);

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







var StateCardToggle =
/*#__PURE__*/
function (_PolymerElement) {
  _inherits(StateCardToggle, _PolymerElement);

  function StateCardToggle() {
    _classCallCheck(this, StateCardToggle);

    return _possibleConstructorReturn(this, _getPrototypeOf(StateCardToggle).apply(this, arguments));
  }

  _createClass(StateCardToggle, null, [{
    key: "template",
    get: function get() {
      return Object(_polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__["html"])(_templateObject(), this.stateInfoTemplate);
    }
  }, {
    key: "stateInfoTemplate",
    get: function get() {
      return Object(_polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__["html"])(_templateObject2());
    }
  }, {
    key: "properties",
    get: function get() {
      return {
        hass: Object,
        stateObj: Object,
        inDialog: {
          type: Boolean,
          value: false
        }
      };
    }
  }]);

  return StateCardToggle;
}(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__["PolymerElement"]);

customElements.define("state-card-toggle", StateCardToggle);

/***/ }),

/***/ "./src/state-summary/state-card-vacuum.js":
/*!************************************************!*\
  !*** ./src/state-summary/state-card-vacuum.js ***!
  \************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_iron_flex_layout_iron_flex_layout_classes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/iron-flex-layout/iron-flex-layout-classes */ "./node_modules/@polymer/iron-flex-layout/iron-flex-layout-classes.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _components_entity_state_info__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/entity/state-info */ "./src/components/entity/state-info.js");
/* harmony import */ var _components_ha_vacuum_state__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/ha-vacuum-state */ "./src/components/ha-vacuum-state.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n      <state-info\n        hass=\"[[hass]]\"\n        state-obj=\"[[stateObj]]\"\n        in-dialog=\"[[inDialog]]\"\n      ></state-info>\n    "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      <style include=\"iron-flex iron-flex-alignment\"></style>\n\n      <div class=\"horizontal justified layout\">\n        ", "\n        <ha-vacuum-state\n          hass=\"[[hass]]\"\n          state-obj=\"[[stateObj]]\"\n        ></ha-vacuum-state>\n      </div>\n    "]);

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







var StateCardVacuum =
/*#__PURE__*/
function (_PolymerElement) {
  _inherits(StateCardVacuum, _PolymerElement);

  function StateCardVacuum() {
    _classCallCheck(this, StateCardVacuum);

    return _possibleConstructorReturn(this, _getPrototypeOf(StateCardVacuum).apply(this, arguments));
  }

  _createClass(StateCardVacuum, null, [{
    key: "template",
    get: function get() {
      return Object(_polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__["html"])(_templateObject(), this.stateInfoTemplate);
    }
  }, {
    key: "stateInfoTemplate",
    get: function get() {
      return Object(_polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__["html"])(_templateObject2());
    }
  }, {
    key: "properties",
    get: function get() {
      return {
        hass: Object,
        stateObj: Object,
        inDialog: {
          type: Boolean,
          value: false
        }
      };
    }
  }]);

  return StateCardVacuum;
}(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__["PolymerElement"]);

customElements.define("state-card-vacuum", StateCardVacuum);

/***/ }),

/***/ "./src/state-summary/state-card-water_heater.js":
/*!******************************************************!*\
  !*** ./src/state-summary/state-card-water_heater.js ***!
  \******************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_iron_flex_layout_iron_flex_layout_classes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/iron-flex-layout/iron-flex-layout-classes */ "./node_modules/@polymer/iron-flex-layout/iron-flex-layout-classes.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _components_entity_state_info__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/entity/state-info */ "./src/components/entity/state-info.js");
/* harmony import */ var _components_ha_water_heater_state__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/ha-water_heater-state */ "./src/components/ha-water_heater-state.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n      <state-info\n        hass=\"[[hass]]\"\n        state-obj=\"[[stateObj]]\"\n        in-dialog=\"[[inDialog]]\"\n      ></state-info>\n    "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      <style include=\"iron-flex iron-flex-alignment\"></style>\n      <style>\n        :host {\n          @apply --paper-font-body1;\n          line-height: 1.5;\n        }\n\n        ha-water_heater-state {\n          margin-left: 16px;\n          text-align: right;\n        }\n      </style>\n\n      <div class=\"horizontal justified layout\">\n        ", "\n        <ha-water_heater-state\n          hass=\"[[hass]]\"\n          state-obj=\"[[stateObj]]\"\n        ></ha-water_heater-state>\n      </div>\n    "]);

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







var StateCardWaterHeater =
/*#__PURE__*/
function (_PolymerElement) {
  _inherits(StateCardWaterHeater, _PolymerElement);

  function StateCardWaterHeater() {
    _classCallCheck(this, StateCardWaterHeater);

    return _possibleConstructorReturn(this, _getPrototypeOf(StateCardWaterHeater).apply(this, arguments));
  }

  _createClass(StateCardWaterHeater, null, [{
    key: "template",
    get: function get() {
      return Object(_polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__["html"])(_templateObject(), this.stateInfoTemplate);
    }
  }, {
    key: "stateInfoTemplate",
    get: function get() {
      return Object(_polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__["html"])(_templateObject2());
    }
  }, {
    key: "properties",
    get: function get() {
      return {
        hass: Object,
        stateObj: Object,
        inDialog: {
          type: Boolean,
          value: false
        }
      };
    }
  }]);

  return StateCardWaterHeater;
}(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__["PolymerElement"]);

customElements.define("state-card-water_heater", StateCardWaterHeater);

/***/ }),

/***/ "./src/state-summary/state-card-weblink.js":
/*!*************************************************!*\
  !*** ./src/state-summary/state-card-weblink.js ***!
  \*************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _components_entity_state_badge__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/entity/state-badge */ "./src/components/entity/state-badge.ts");
/* harmony import */ var _common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/entity/compute_state_name */ "./src/common/entity/compute_state_name.ts");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n      <state-badge state-obj=\"[[stateObj]]\"></state-badge>\n    "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      <style>\n        :host {\n          display: block;\n        }\n        .name {\n          @apply --paper-font-common-nowrap;\n          @apply --paper-font-body1;\n          color: var(--primary-color);\n\n          text-transform: capitalize;\n          line-height: 40px;\n          margin-left: 16px;\n        }\n      </style>\n\n      ", "\n      <a href$=\"[[stateObj.state]]\" target=\"_blank\" class=\"name\" id=\"link\"\n        >[[_computeStateName(stateObj)]]</a\n      >\n    "]);

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






var StateCardWeblink =
/*#__PURE__*/
function (_PolymerElement) {
  _inherits(StateCardWeblink, _PolymerElement);

  function StateCardWeblink() {
    _classCallCheck(this, StateCardWeblink);

    return _possibleConstructorReturn(this, _getPrototypeOf(StateCardWeblink).apply(this, arguments));
  }

  _createClass(StateCardWeblink, [{
    key: "ready",
    value: function ready() {
      var _this = this;

      _get(_getPrototypeOf(StateCardWeblink.prototype), "ready", this).call(this);

      this.addEventListener("click", function (ev) {
        return _this.onTap(ev);
      });
    }
  }, {
    key: "_computeStateName",
    value: function _computeStateName(stateObj) {
      return Object(_common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_3__["computeStateName"])(stateObj);
    }
  }, {
    key: "onTap",
    value: function onTap(ev) {
      ev.stopPropagation();
      ev.preventDefault();
      window.open(this.stateObj.state, "_blank");
    }
  }], [{
    key: "template",
    get: function get() {
      return Object(_polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_0__["html"])(_templateObject(), this.stateBadgeTemplate);
    }
  }, {
    key: "stateBadgeTemplate",
    get: function get() {
      return Object(_polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_0__["html"])(_templateObject2());
    }
  }, {
    key: "properties",
    get: function get() {
      return {
        stateObj: Object,
        inDialog: {
          type: Boolean,
          value: false
        }
      };
    }
  }]);

  return StateCardWeblink;
}(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_1__["PolymerElement"]);

customElements.define("state-card-weblink", StateCardWeblink);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9yZS1pbmZvLWRpYWxvZ35wYW5lbC1raW9za35wYW5lbC1zdGF0ZXMuY2h1bmsuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY2FyZHMvaGEtaGlzdG9yeV9ncmFwaC1jYXJkLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vZG9tL2R5bmFtaWNfY29udGVudF91cGRhdGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vZW50aXR5L2F0dHJpYnV0ZV9jbGFzc19uYW1lcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL2VudGl0eS9jYW5fdG9nZ2xlX2RvbWFpbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL2VudGl0eS9jYW5fdG9nZ2xlX3N0YXRlLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vZW50aXR5L3N0YXRlX2NhcmRfdHlwZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL2VudGl0eS9zdGF0ZV9tb3JlX2luZm9fdHlwZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9oYS12YWN1dW0tc3RhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaGEtd2F0ZXJfaGVhdGVyLXN0YXRlLmpzIiwid2VicGFjazovLy8uL3NyYy9taXhpbnMvZXZlbnRzLW1peGluLmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0ZS1zdW1tYXJ5L3N0YXRlLWNhcmQtY2xpbWF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGUtc3VtbWFyeS9zdGF0ZS1jYXJkLWNvbmZpZ3VyYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGUtc3VtbWFyeS9zdGF0ZS1jYXJkLWNvbnRlbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRlLXN1bW1hcnkvc3RhdGUtY2FyZC1jb3Zlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGUtc3VtbWFyeS9zdGF0ZS1jYXJkLWRpc3BsYXkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRlLXN1bW1hcnkvc3RhdGUtY2FyZC1pbnB1dF9udW1iZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRlLXN1bW1hcnkvc3RhdGUtY2FyZC1pbnB1dF9zZWxlY3QudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRlLXN1bW1hcnkvc3RhdGUtY2FyZC1pbnB1dF90ZXh0LmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0ZS1zdW1tYXJ5L3N0YXRlLWNhcmQtbG9jay5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGUtc3VtbWFyeS9zdGF0ZS1jYXJkLW1lZGlhX3BsYXllci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGUtc3VtbWFyeS9zdGF0ZS1jYXJkLXNjZW5lLmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0ZS1zdW1tYXJ5L3N0YXRlLWNhcmQtc2NyaXB0LmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0ZS1zdW1tYXJ5L3N0YXRlLWNhcmQtdGltZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRlLXN1bW1hcnkvc3RhdGUtY2FyZC10b2dnbGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRlLXN1bW1hcnkvc3RhdGUtY2FyZC12YWN1dW0uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRlLXN1bW1hcnkvc3RhdGUtY2FyZC13YXRlcl9oZWF0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRlLXN1bW1hcnkvc3RhdGUtY2FyZC13ZWJsaW5rLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWNhcmQvcGFwZXItY2FyZFwiO1xuaW1wb3J0IHsgaHRtbCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZ1wiO1xuaW1wb3J0IHsgUG9seW1lckVsZW1lbnQgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWVsZW1lbnRcIjtcblxuaW1wb3J0IFwiLi4vY29tcG9uZW50cy9zdGF0ZS1oaXN0b3J5LWNoYXJ0c1wiO1xuaW1wb3J0IFwiLi4vZGF0YS9oYS1zdGF0ZS1oaXN0b3J5LWRhdGFcIjtcblxuaW1wb3J0IHsgY29tcHV0ZVN0YXRlTmFtZSB9IGZyb20gXCIuLi9jb21tb24vZW50aXR5L2NvbXB1dGVfc3RhdGVfbmFtZVwiO1xuaW1wb3J0IHsgRXZlbnRzTWl4aW4gfSBmcm9tIFwiLi4vbWl4aW5zL2V2ZW50cy1taXhpblwiO1xuXG4vKlxuICogQGFwcGxpZXNNaXhpbiBFdmVudHNNaXhpblxuICovXG5jbGFzcyBIYUhpc3RvcnlHcmFwaENhcmQgZXh0ZW5kcyBFdmVudHNNaXhpbihQb2x5bWVyRWxlbWVudCkge1xuICBzdGF0aWMgZ2V0IHRlbXBsYXRlKCkge1xuICAgIHJldHVybiBodG1sYFxuICAgICAgPHN0eWxlPlxuICAgICAgICBwYXBlci1jYXJkOm5vdChbZGlhbG9nXSkgLmNvbnRlbnQge1xuICAgICAgICAgIHBhZGRpbmc6IDAgMTZweCAxNnB4O1xuICAgICAgICB9XG4gICAgICAgIHBhcGVyLWNhcmRbZGlhbG9nXSB7XG4gICAgICAgICAgcGFkZGluZy10b3A6IDE2cHg7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgcGFwZXItY2FyZCB7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgLyogcHJldmVudCBuZXcgc3RhY2tpbmcgY29udGV4dCwgY2hhcnQgdG9vbHRpcCBuZWVkcyB0byBvdmVyZmxvdyAqL1xuICAgICAgICAgIHBvc2l0aW9uOiBzdGF0aWM7XG4gICAgICAgIH1cbiAgICAgICAgLmhlYWRlciB7XG4gICAgICAgICAgQGFwcGx5IC0tcGFwZXItZm9udC1oZWFkbGluZTtcbiAgICAgICAgICBsaW5lLWhlaWdodDogNDBweDtcbiAgICAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS10ZXh0LWNvbG9yKTtcbiAgICAgICAgICBwYWRkaW5nOiAyMHB4IDE2cHggMTJweDtcbiAgICAgICAgICBAYXBwbHkgLS1wYXBlci1mb250LWNvbW1vbi1ub3dyYXA7XG4gICAgICAgIH1cbiAgICAgICAgcGFwZXItY2FyZFtkaWFsb2ddIC5oZWFkZXIge1xuICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgIH1cbiAgICAgIDwvc3R5bGU+XG4gICAgICA8aGEtc3RhdGUtaGlzdG9yeS1kYXRhXG4gICAgICAgIGhhc3M9XCJbW2hhc3NdXVwiXG4gICAgICAgIGZpbHRlci10eXBlPVwicmVjZW50LWVudGl0eVwiXG4gICAgICAgIGVudGl0eS1pZD1cIltbY29tcHV0ZUhpc3RvcnlFbnRpdGllcyhzdGF0ZU9iaildXVwiXG4gICAgICAgIGRhdGE9XCJ7e3N0YXRlSGlzdG9yeX19XCJcbiAgICAgICAgaXMtbG9hZGluZz1cInt7c3RhdGVIaXN0b3J5TG9hZGluZ319XCJcbiAgICAgICAgY2FjaGUtY29uZmlnPVwiW1tjYWNoZUNvbmZpZ11dXCJcbiAgICAgID48L2hhLXN0YXRlLWhpc3RvcnktZGF0YT5cbiAgICAgIDxwYXBlci1jYXJkXG4gICAgICAgIGRpYWxvZyQ9XCJbW2luRGlhbG9nXV1cIlxuICAgICAgICBvbi1jbGljaz1cImNhcmRUYXBwZWRcIlxuICAgICAgICBlbGV2YXRpb249XCJbW2NvbXB1dGVFbGV2YXRpb24oaW5EaWFsb2cpXV1cIlxuICAgICAgPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiaGVhZGVyXCI+W1tjb21wdXRlVGl0bGUoc3RhdGVPYmopXV08L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRlbnRcIj5cbiAgICAgICAgICA8c3RhdGUtaGlzdG9yeS1jaGFydHNcbiAgICAgICAgICAgIGhhc3M9XCJbW2hhc3NdXVwiXG4gICAgICAgICAgICBoaXN0b3J5LWRhdGE9XCJbW3N0YXRlSGlzdG9yeV1dXCJcbiAgICAgICAgICAgIGlzLWxvYWRpbmctZGF0YT1cIltbc3RhdGVIaXN0b3J5TG9hZGluZ11dXCJcbiAgICAgICAgICAgIHVwLXRvLW5vd1xuICAgICAgICAgICAgbm8tc2luZ2xlXG4gICAgICAgICAgPlxuICAgICAgICAgIDwvc3RhdGUtaGlzdG9yeS1jaGFydHM+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9wYXBlci1jYXJkPlxuICAgIGA7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGhhc3M6IE9iamVjdCxcbiAgICAgIHN0YXRlT2JqOiB7XG4gICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgICAgb2JzZXJ2ZXI6IFwic3RhdGVPYmpPYnNlcnZlclwiLFxuICAgICAgfSxcbiAgICAgIGluRGlhbG9nOiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIHZhbHVlOiBmYWxzZSxcbiAgICAgIH0sXG4gICAgICBzdGF0ZUhpc3Rvcnk6IE9iamVjdCxcbiAgICAgIHN0YXRlSGlzdG9yeUxvYWRpbmc6IEJvb2xlYW4sXG4gICAgICBjYWNoZUNvbmZpZzoge1xuICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICAgIHZhbHVlOiB7XG4gICAgICAgICAgcmVmcmVzaDogMCxcbiAgICAgICAgICBjYWNoZUtleTogbnVsbCxcbiAgICAgICAgICBob3Vyc1RvU2hvdzogMjQsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH07XG4gIH1cblxuICBzdGF0ZU9iak9ic2VydmVyKHN0YXRlT2JqKSB7XG4gICAgaWYgKCFzdGF0ZU9iaikgcmV0dXJuO1xuICAgIGlmIChcbiAgICAgIHRoaXMuY2FjaGVDb25maWcuY2FjaGVLZXkgIT09IHN0YXRlT2JqLmVudGl0eV9pZCB8fFxuICAgICAgdGhpcy5jYWNoZUNvbmZpZy5yZWZyZXNoICE9PSAoc3RhdGVPYmouYXR0cmlidXRlcy5yZWZyZXNoIHx8IDApIHx8XG4gICAgICB0aGlzLmNhY2hlQ29uZmlnLmhvdXJzVG9TaG93ICE9PSAoc3RhdGVPYmouYXR0cmlidXRlcy5ob3Vyc190b19zaG93IHx8IDI0KVxuICAgICkge1xuICAgICAgdGhpcy5jYWNoZUNvbmZpZyA9IHtcbiAgICAgICAgcmVmcmVzaDogc3RhdGVPYmouYXR0cmlidXRlcy5yZWZyZXNoIHx8IDAsXG4gICAgICAgIGNhY2hlS2V5OiBzdGF0ZU9iai5lbnRpdHlfaWQsXG4gICAgICAgIGhvdXJzVG9TaG93OiBzdGF0ZU9iai5hdHRyaWJ1dGVzLmhvdXJzX3RvX3Nob3cgfHwgMjQsXG4gICAgICB9O1xuICAgIH1cbiAgfVxuXG4gIGNvbXB1dGVUaXRsZShzdGF0ZU9iaikge1xuICAgIHJldHVybiBjb21wdXRlU3RhdGVOYW1lKHN0YXRlT2JqKTtcbiAgfVxuXG4gIGNvbXB1dGVDb250ZW50Q2xhc3MoaW5EaWFsb2cpIHtcbiAgICByZXR1cm4gaW5EaWFsb2cgPyBcIlwiIDogXCJjb250ZW50XCI7XG4gIH1cblxuICBjb21wdXRlSGlzdG9yeUVudGl0aWVzKHN0YXRlT2JqKSB7XG4gICAgcmV0dXJuIHN0YXRlT2JqLmF0dHJpYnV0ZXMuZW50aXR5X2lkO1xuICB9XG5cbiAgY29tcHV0ZUVsZXZhdGlvbihpbkRpYWxvZykge1xuICAgIHJldHVybiBpbkRpYWxvZyA/IDAgOiAxO1xuICB9XG5cbiAgY2FyZFRhcHBlZChldikge1xuICAgIGNvbnN0IG1xID0gd2luZG93Lm1hdGNoTWVkaWEoXCIobWluLXdpZHRoOiA2MTBweCkgYW5kIChtaW4taGVpZ2h0OiA1NTBweClcIik7XG4gICAgaWYgKG1xLm1hdGNoZXMpIHtcbiAgICAgIGV2LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgdGhpcy5maXJlKFwiaGFzcy1tb3JlLWluZm9cIiwgeyBlbnRpdHlJZDogdGhpcy5zdGF0ZU9iai5lbnRpdHlfaWQgfSk7XG4gICAgfVxuICB9XG59XG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJoYS1oaXN0b3J5X2dyYXBoLWNhcmRcIiwgSGFIaXN0b3J5R3JhcGhDYXJkKTtcbiIsIi8qKlxuICogVXBkYXRlIHJvb3QncyBjaGlsZCBlbGVtZW50IHRvIGJlIG5ld0VsZW1lbnRUYWcgcmVwbGFjaW5nIGFub3RoZXIgZXhpc3RpbmcgY2hpbGQgaWYgYW55LlxuICogQ29weSBhdHRyaWJ1dGVzIGludG8gdGhlIGNoaWxkIGVsZW1lbnQuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGR5bmFtaWNDb250ZW50VXBkYXRlcihyb290LCBuZXdFbGVtZW50VGFnLCBhdHRyaWJ1dGVzKSB7XG4gIGNvbnN0IHJvb3RFbCA9IHJvb3Q7XG4gIGxldCBjdXN0b21FbDtcblxuICBpZiAocm9vdEVsLmxhc3RDaGlsZCAmJiByb290RWwubGFzdENoaWxkLnRhZ05hbWUgPT09IG5ld0VsZW1lbnRUYWcpIHtcbiAgICBjdXN0b21FbCA9IHJvb3RFbC5sYXN0Q2hpbGQ7XG4gIH0gZWxzZSB7XG4gICAgaWYgKHJvb3RFbC5sYXN0Q2hpbGQpIHtcbiAgICAgIHJvb3RFbC5yZW1vdmVDaGlsZChyb290RWwubGFzdENoaWxkKTtcbiAgICB9XG4gICAgLy8gQ3JlYXRpbmcgYW4gZWxlbWVudCB3aXRoIHVwcGVyIGNhc2Ugd29ya3MgZmluZSBpbiBDaHJvbWUsIGJ1dCBpbiBGRiBpdCBkb2Vzbid0IGltbWVkaWF0ZWx5XG4gICAgLy8gYmVjb21lIGEgZGVmaW5lZCBDdXN0b20gRWxlbWVudC4gUG9seW1lciBkb2VzIHRoYXQgaW4gc29tZSBsYXRlciBwYXNzLlxuICAgIGN1c3RvbUVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChuZXdFbGVtZW50VGFnLnRvTG93ZXJDYXNlKCkpO1xuICB9XG5cbiAgaWYgKGN1c3RvbUVsLnNldFByb3BlcnRpZXMpIHtcbiAgICBjdXN0b21FbC5zZXRQcm9wZXJ0aWVzKGF0dHJpYnV0ZXMpO1xuICB9IGVsc2Uge1xuICAgIC8vIElmIGN1c3RvbSBlbGVtZW50IGRlZmluaXRpb24gd2Fzbid0IGxvYWRlZCB5ZXQgLSBzZXRQcm9wZXJ0aWVzIHdvdWxkIGJlXG4gICAgLy8gbWlzc2luZywgYnV0IG5vIGhhcm0gaW4gc2V0dGluZyBhdHRyaWJ1dGVzIG9uZS1ieS1vbmUgdGhlbi5cbiAgICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgIGN1c3RvbUVsW2tleV0gPSBhdHRyaWJ1dGVzW2tleV07XG4gICAgfSk7XG4gIH1cblxuICBpZiAoY3VzdG9tRWwucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJvb3RFbC5hcHBlbmRDaGlsZChjdXN0b21FbCk7XG4gIH1cbn1cbiIsImltcG9ydCB7IEhhc3NFbnRpdHkgfSBmcm9tIFwiaG9tZS1hc3Npc3RhbnQtanMtd2Vic29ja2V0XCI7XG5cbmV4cG9ydCBjb25zdCBhdHRyaWJ1dGVDbGFzc05hbWVzID0gKFxuICBzdGF0ZU9iajogSGFzc0VudGl0eSxcbiAgYXR0cmlidXRlczogc3RyaW5nW11cbik6IHN0cmluZyA9PiB7XG4gIGlmICghc3RhdGVPYmopIHtcbiAgICByZXR1cm4gXCJcIjtcbiAgfVxuICByZXR1cm4gYXR0cmlidXRlc1xuICAgIC5tYXAoKGF0dHJpYnV0ZSkgPT5cbiAgICAgIGF0dHJpYnV0ZSBpbiBzdGF0ZU9iai5hdHRyaWJ1dGVzID8gXCJoYXMtXCIgKyBhdHRyaWJ1dGUgOiBcIlwiXG4gICAgKVxuICAgIC5maWx0ZXIoKGF0dHIpID0+IGF0dHIgIT09IFwiXCIpXG4gICAgLmpvaW4oXCIgXCIpO1xufTtcbiIsImltcG9ydCB7IEhvbWVBc3Npc3RhbnQgfSBmcm9tIFwiLi4vLi4vdHlwZXNcIjtcblxuZXhwb3J0IGNvbnN0IGNhblRvZ2dsZURvbWFpbiA9IChoYXNzOiBIb21lQXNzaXN0YW50LCBkb21haW46IHN0cmluZykgPT4ge1xuICBjb25zdCBzZXJ2aWNlcyA9IGhhc3Muc2VydmljZXNbZG9tYWluXTtcbiAgaWYgKCFzZXJ2aWNlcykge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGlmIChkb21haW4gPT09IFwibG9ja1wiKSB7XG4gICAgcmV0dXJuIFwibG9ja1wiIGluIHNlcnZpY2VzO1xuICB9XG4gIGlmIChkb21haW4gPT09IFwiY292ZXJcIikge1xuICAgIHJldHVybiBcIm9wZW5fY292ZXJcIiBpbiBzZXJ2aWNlcztcbiAgfVxuICByZXR1cm4gXCJ0dXJuX29uXCIgaW4gc2VydmljZXM7XG59O1xuIiwiaW1wb3J0IHsgSGFzc0VudGl0eSB9IGZyb20gXCJob21lLWFzc2lzdGFudC1qcy13ZWJzb2NrZXRcIjtcbmltcG9ydCB7IGNhblRvZ2dsZURvbWFpbiB9IGZyb20gXCIuL2Nhbl90b2dnbGVfZG9tYWluXCI7XG5pbXBvcnQgeyBjb21wdXRlU3RhdGVEb21haW4gfSBmcm9tIFwiLi9jb21wdXRlX3N0YXRlX2RvbWFpblwiO1xuaW1wb3J0IHsgSG9tZUFzc2lzdGFudCB9IGZyb20gXCIuLi8uLi90eXBlc1wiO1xuaW1wb3J0IHsgc3VwcG9ydHNGZWF0dXJlIH0gZnJvbSBcIi4vc3VwcG9ydHMtZmVhdHVyZVwiO1xuXG5leHBvcnQgY29uc3QgY2FuVG9nZ2xlU3RhdGUgPSAoaGFzczogSG9tZUFzc2lzdGFudCwgc3RhdGVPYmo6IEhhc3NFbnRpdHkpID0+IHtcbiAgY29uc3QgZG9tYWluID0gY29tcHV0ZVN0YXRlRG9tYWluKHN0YXRlT2JqKTtcbiAgaWYgKGRvbWFpbiA9PT0gXCJncm91cFwiKSB7XG4gICAgcmV0dXJuIHN0YXRlT2JqLnN0YXRlID09PSBcIm9uXCIgfHwgc3RhdGVPYmouc3RhdGUgPT09IFwib2ZmXCI7XG4gIH1cbiAgaWYgKGRvbWFpbiA9PT0gXCJjbGltYXRlXCIpIHtcbiAgICByZXR1cm4gc3VwcG9ydHNGZWF0dXJlKHN0YXRlT2JqLCA0MDk2KTtcbiAgfVxuXG4gIHJldHVybiBjYW5Ub2dnbGVEb21haW4oaGFzcywgZG9tYWluKTtcbn07XG4iLCJpbXBvcnQgeyBIYXNzRW50aXR5IH0gZnJvbSBcImhvbWUtYXNzaXN0YW50LWpzLXdlYnNvY2tldFwiO1xuaW1wb3J0IHsgY2FuVG9nZ2xlU3RhdGUgfSBmcm9tIFwiLi9jYW5fdG9nZ2xlX3N0YXRlXCI7XG5pbXBvcnQgeyBjb21wdXRlU3RhdGVEb21haW4gfSBmcm9tIFwiLi9jb21wdXRlX3N0YXRlX2RvbWFpblwiO1xuaW1wb3J0IHsgRE9NQUlOU19XSVRIX0NBUkQgfSBmcm9tIFwiLi4vY29uc3RcIjtcbmltcG9ydCB7IEhvbWVBc3Npc3RhbnQgfSBmcm9tIFwiLi4vLi4vdHlwZXNcIjtcblxuZXhwb3J0IGNvbnN0IHN0YXRlQ2FyZFR5cGUgPSAoaGFzczogSG9tZUFzc2lzdGFudCwgc3RhdGVPYmo6IEhhc3NFbnRpdHkpID0+IHtcbiAgaWYgKHN0YXRlT2JqLnN0YXRlID09PSBcInVuYXZhaWxhYmxlXCIpIHtcbiAgICByZXR1cm4gXCJkaXNwbGF5XCI7XG4gIH1cblxuICBjb25zdCBkb21haW4gPSBjb21wdXRlU3RhdGVEb21haW4oc3RhdGVPYmopO1xuXG4gIGlmIChET01BSU5TX1dJVEhfQ0FSRC5pbmNsdWRlcyhkb21haW4pKSB7XG4gICAgcmV0dXJuIGRvbWFpbjtcbiAgfVxuICBpZiAoXG4gICAgY2FuVG9nZ2xlU3RhdGUoaGFzcywgc3RhdGVPYmopICYmXG4gICAgc3RhdGVPYmouYXR0cmlidXRlcy5jb250cm9sICE9PSBcImhpZGRlblwiXG4gICkge1xuICAgIHJldHVybiBcInRvZ2dsZVwiO1xuICB9XG4gIHJldHVybiBcImRpc3BsYXlcIjtcbn07XG4iLCJpbXBvcnQgeyBIYXNzRW50aXR5IH0gZnJvbSBcImhvbWUtYXNzaXN0YW50LWpzLXdlYnNvY2tldFwiO1xuaW1wb3J0IHsgY29tcHV0ZVN0YXRlRG9tYWluIH0gZnJvbSBcIi4vY29tcHV0ZV9zdGF0ZV9kb21haW5cIjtcbmltcG9ydCB7IERPTUFJTlNfSElERV9NT1JFX0lORk8sIERPTUFJTlNfV0lUSF9NT1JFX0lORk8gfSBmcm9tIFwiLi4vY29uc3RcIjtcblxuZXhwb3J0IGNvbnN0IHN0YXRlTW9yZUluZm9UeXBlID0gKHN0YXRlT2JqOiBIYXNzRW50aXR5KSA9PiB7XG4gIGNvbnN0IGRvbWFpbiA9IGNvbXB1dGVTdGF0ZURvbWFpbihzdGF0ZU9iaik7XG5cbiAgaWYgKERPTUFJTlNfV0lUSF9NT1JFX0lORk8uaW5jbHVkZXMoZG9tYWluKSkge1xuICAgIHJldHVybiBkb21haW47XG4gIH1cbiAgaWYgKERPTUFJTlNfSElERV9NT1JFX0lORk8uaW5jbHVkZXMoZG9tYWluKSkge1xuICAgIHJldHVybiBcImhpZGRlblwiO1xuICB9XG4gIHJldHVybiBcImRlZmF1bHRcIjtcbn07XG4iLCJpbXBvcnQgXCJAbWF0ZXJpYWwvbXdjLWJ1dHRvblwiO1xuaW1wb3J0IHsgaHRtbCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZ1wiO1xuaW1wb3J0IHsgUG9seW1lckVsZW1lbnQgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWVsZW1lbnRcIjtcblxuaW1wb3J0IExvY2FsaXplTWl4aW4gZnJvbSBcIi4uL21peGlucy9sb2NhbGl6ZS1taXhpblwiO1xuXG5jb25zdCBTVEFURVNfSU5URVJDRVBUQUJMRSA9IHtcbiAgY2xlYW5pbmc6IHtcbiAgICBhY3Rpb246IFwicmV0dXJuX3RvX2Jhc2VcIixcbiAgICBzZXJ2aWNlOiBcInJldHVybl90b19iYXNlXCIsXG4gIH0sXG4gIGRvY2tlZDoge1xuICAgIGFjdGlvbjogXCJzdGFydF9jbGVhbmluZ1wiLFxuICAgIHNlcnZpY2U6IFwic3RhcnRcIixcbiAgfSxcbiAgaWRsZToge1xuICAgIGFjdGlvbjogXCJzdGFydF9jbGVhbmluZ1wiLFxuICAgIHNlcnZpY2U6IFwic3RhcnRcIixcbiAgfSxcbiAgb2ZmOiB7XG4gICAgYWN0aW9uOiBcInR1cm5fb25cIixcbiAgICBzZXJ2aWNlOiBcInR1cm5fb25cIixcbiAgfSxcbiAgb246IHtcbiAgICBhY3Rpb246IFwidHVybl9vZmZcIixcbiAgICBzZXJ2aWNlOiBcInR1cm5fb2ZmXCIsXG4gIH0sXG4gIHBhdXNlZDoge1xuICAgIGFjdGlvbjogXCJyZXN1bWVfY2xlYW5pbmdcIixcbiAgICBzZXJ2aWNlOiBcInN0YXJ0XCIsXG4gIH0sXG59O1xuXG4vKlxuICogQGFwcGxpZXNNaXhpbiBMb2NhbGl6ZU1peGluXG4gKi9cbmNsYXNzIEhhVmFjdXVtU3RhdGUgZXh0ZW5kcyBMb2NhbGl6ZU1peGluKFBvbHltZXJFbGVtZW50KSB7XG4gIHN0YXRpYyBnZXQgdGVtcGxhdGUoKSB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8c3R5bGU+XG4gICAgICAgIG13Yy1idXR0b24ge1xuICAgICAgICAgIHRvcDogM3B4O1xuICAgICAgICAgIGhlaWdodDogMzdweDtcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IC0wLjU3ZW07XG4gICAgICAgIH1cbiAgICAgICAgbXdjLWJ1dHRvbltkaXNhYmxlZF0ge1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktdGV4dC1jb2xvcik7XG4gICAgICAgIH1cbiAgICAgIDwvc3R5bGU+XG5cbiAgICAgIDxtd2MtYnV0dG9uIG9uLWNsaWNrPVwiX2NhbGxTZXJ2aWNlXCIgZGlzYWJsZWQ9XCJbWyFfaW50ZXJjZXB0YWJsZV1dXCJcbiAgICAgICAgPltbX2NvbXB1dGVMYWJlbChzdGF0ZU9iai5zdGF0ZSwgX2ludGVyY2VwdGFibGUpXV08L213Yy1idXR0b25cbiAgICAgID5cbiAgICBgO1xuICB9XG5cbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBoYXNzOiBPYmplY3QsXG4gICAgICBzdGF0ZU9iajogT2JqZWN0LFxuICAgICAgX2ludGVyY2VwdGFibGU6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgY29tcHV0ZWQ6XG4gICAgICAgICAgXCJfY29tcHV0ZUludGVyY2VwdGFibGUoc3RhdGVPYmouc3RhdGUsIHN0YXRlT2JqLmF0dHJpYnV0ZXMuc3VwcG9ydGVkX2ZlYXR1cmVzKVwiLFxuICAgICAgfSxcbiAgICB9O1xuICB9XG5cbiAgX2NvbXB1dGVJbnRlcmNlcHRhYmxlKHN0YXRlLCBzdXBwb3J0ZWRGZWF0dXJlcykge1xuICAgIHJldHVybiBzdGF0ZSBpbiBTVEFURVNfSU5URVJDRVBUQUJMRSAmJiBzdXBwb3J0ZWRGZWF0dXJlcyAhPT0gMDtcbiAgfVxuXG4gIF9jb21wdXRlTGFiZWwoc3RhdGUsIGludGVyY2VwdGFibGUpIHtcbiAgICByZXR1cm4gaW50ZXJjZXB0YWJsZVxuICAgICAgPyB0aGlzLmxvY2FsaXplKFxuICAgICAgICAgIGB1aS5jYXJkLnZhY3V1bS5hY3Rpb25zLiR7U1RBVEVTX0lOVEVSQ0VQVEFCTEVbc3RhdGVdLmFjdGlvbn1gXG4gICAgICAgIClcbiAgICAgIDogdGhpcy5sb2NhbGl6ZShgc3RhdGUudmFjdXVtLiR7c3RhdGV9YCk7XG4gIH1cblxuICBfY2FsbFNlcnZpY2UoZXYpIHtcbiAgICBldi5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBjb25zdCBzdGF0ZU9iaiA9IHRoaXMuc3RhdGVPYmo7XG4gICAgY29uc3Qgc2VydmljZSA9IFNUQVRFU19JTlRFUkNFUFRBQkxFW3N0YXRlT2JqLnN0YXRlXS5zZXJ2aWNlO1xuICAgIHRoaXMuaGFzcy5jYWxsU2VydmljZShcInZhY3V1bVwiLCBzZXJ2aWNlLCB7IGVudGl0eV9pZDogc3RhdGVPYmouZW50aXR5X2lkIH0pO1xuICB9XG59XG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJoYS12YWN1dW0tc3RhdGVcIiwgSGFWYWN1dW1TdGF0ZSk7XG4iLCJpbXBvcnQgeyBodG1sIH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2h0bWwtdGFnXCI7XG5pbXBvcnQgeyBQb2x5bWVyRWxlbWVudCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL3BvbHltZXItZWxlbWVudFwiO1xuXG5pbXBvcnQgTG9jYWxpemVNaXhpbiBmcm9tIFwiLi4vbWl4aW5zL2xvY2FsaXplLW1peGluXCI7XG5cbi8qXG4gKiBAYXBwbGllc01peGluIExvY2FsaXplTWl4aW5cbiAqL1xuY2xhc3MgSGFXYXRlckhlYXRlclN0YXRlIGV4dGVuZHMgTG9jYWxpemVNaXhpbihQb2x5bWVyRWxlbWVudCkge1xuICBzdGF0aWMgZ2V0IHRlbXBsYXRlKCkge1xuICAgIHJldHVybiBodG1sYFxuICAgICAgPHN0eWxlPlxuICAgICAgICA6aG9zdCB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgIH1cblxuICAgICAgICAudGFyZ2V0IHtcbiAgICAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS10ZXh0LWNvbG9yKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5jdXJyZW50IHtcbiAgICAgICAgICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5LXRleHQtY29sb3IpO1xuICAgICAgICB9XG5cbiAgICAgICAgLnN0YXRlLWxhYmVsIHtcbiAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgICAgICAgfVxuICAgICAgPC9zdHlsZT5cblxuICAgICAgPGRpdiBjbGFzcz1cInRhcmdldFwiPlxuICAgICAgICA8c3BhbiBjbGFzcz1cInN0YXRlLWxhYmVsXCI+IFtbX2xvY2FsaXplU3RhdGUoc3RhdGVPYmouc3RhdGUpXV0gPC9zcGFuPlxuICAgICAgICBbW2NvbXB1dGVUYXJnZXQoaGFzcywgc3RhdGVPYmopXV1cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8dGVtcGxhdGUgaXM9XCJkb20taWZcIiBpZj1cIltbY3VycmVudFN0YXR1c11dXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjdXJyZW50XCI+XG4gICAgICAgICAgW1tsb2NhbGl6ZSgndWkuY2FyZC53YXRlcl9oZWF0ZXIuY3VycmVudGx5JyldXTogW1tjdXJyZW50U3RhdHVzXV1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L3RlbXBsYXRlPlxuICAgIGA7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGhhc3M6IE9iamVjdCxcbiAgICAgIHN0YXRlT2JqOiBPYmplY3QsXG4gICAgfTtcbiAgfVxuXG4gIGNvbXB1dGVUYXJnZXQoaGFzcywgc3RhdGVPYmopIHtcbiAgICBpZiAoIWhhc3MgfHwgIXN0YXRlT2JqKSByZXR1cm4gbnVsbDtcbiAgICAvLyBXZSdyZSB1c2luZyBcIiE9IG51bGxcIiBvbiBwdXJwb3NlIHNvIHRoYXQgd2UgbWF0Y2ggYm90aCBudWxsIGFuZCB1bmRlZmluZWQuXG4gICAgaWYgKFxuICAgICAgc3RhdGVPYmouYXR0cmlidXRlcy50YXJnZXRfdGVtcF9sb3cgIT0gbnVsbCAmJlxuICAgICAgc3RhdGVPYmouYXR0cmlidXRlcy50YXJnZXRfdGVtcF9oaWdoICE9IG51bGxcbiAgICApIHtcbiAgICAgIHJldHVybiBgJHtzdGF0ZU9iai5hdHRyaWJ1dGVzLnRhcmdldF90ZW1wX2xvd30gLSAke1xuICAgICAgICBzdGF0ZU9iai5hdHRyaWJ1dGVzLnRhcmdldF90ZW1wX2hpZ2hcbiAgICAgIH0gJHtoYXNzLmNvbmZpZy51bml0X3N5c3RlbS50ZW1wZXJhdHVyZX1gO1xuICAgIH1cbiAgICBpZiAoc3RhdGVPYmouYXR0cmlidXRlcy50ZW1wZXJhdHVyZSAhPSBudWxsKSB7XG4gICAgICByZXR1cm4gYCR7c3RhdGVPYmouYXR0cmlidXRlcy50ZW1wZXJhdHVyZX0gJHtcbiAgICAgICAgaGFzcy5jb25maWcudW5pdF9zeXN0ZW0udGVtcGVyYXR1cmVcbiAgICAgIH1gO1xuICAgIH1cblxuICAgIHJldHVybiBcIlwiO1xuICB9XG5cbiAgX2xvY2FsaXplU3RhdGUoc3RhdGUpIHtcbiAgICByZXR1cm4gdGhpcy5sb2NhbGl6ZShgc3RhdGUud2F0ZXJfaGVhdGVyLiR7c3RhdGV9YCkgfHwgc3RhdGU7XG4gIH1cbn1cbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcImhhLXdhdGVyX2hlYXRlci1zdGF0ZVwiLCBIYVdhdGVySGVhdGVyU3RhdGUpO1xuIiwiaW1wb3J0IHsgZGVkdXBpbmdNaXhpbiB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9taXhpblwiO1xuXG5pbXBvcnQgeyBmaXJlRXZlbnQgfSBmcm9tIFwiLi4vY29tbW9uL2RvbS9maXJlX2V2ZW50XCI7XG5cbi8vIFBvbHltZXIgbGVnYWN5IGV2ZW50IGhlbHBlcnMgdXNlZCBjb3VydGVzeSBvZiB0aGUgUG9seW1lciBwcm9qZWN0LlxuLy9cbi8vIENvcHlyaWdodCAoYykgMjAxNyBUaGUgUG9seW1lciBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuLy9cbi8vIFJlZGlzdHJpYnV0aW9uIGFuZCB1c2UgaW4gc291cmNlIGFuZCBiaW5hcnkgZm9ybXMsIHdpdGggb3Igd2l0aG91dFxuLy8gbW9kaWZpY2F0aW9uLCBhcmUgcGVybWl0dGVkIHByb3ZpZGVkIHRoYXQgdGhlIGZvbGxvd2luZyBjb25kaXRpb25zIGFyZVxuLy8gbWV0OlxuLy9cbi8vICAgICogUmVkaXN0cmlidXRpb25zIG9mIHNvdXJjZSBjb2RlIG11c3QgcmV0YWluIHRoZSBhYm92ZSBjb3B5cmlnaHRcbi8vIG5vdGljZSwgdGhpcyBsaXN0IG9mIGNvbmRpdGlvbnMgYW5kIHRoZSBmb2xsb3dpbmcgZGlzY2xhaW1lci5cbi8vICAgICogUmVkaXN0cmlidXRpb25zIGluIGJpbmFyeSBmb3JtIG11c3QgcmVwcm9kdWNlIHRoZSBhYm92ZVxuLy8gY29weXJpZ2h0IG5vdGljZSwgdGhpcyBsaXN0IG9mIGNvbmRpdGlvbnMgYW5kIHRoZSBmb2xsb3dpbmcgZGlzY2xhaW1lclxuLy8gaW4gdGhlIGRvY3VtZW50YXRpb24gYW5kL29yIG90aGVyIG1hdGVyaWFscyBwcm92aWRlZCB3aXRoIHRoZVxuLy8gZGlzdHJpYnV0aW9uLlxuLy8gICAgKiBOZWl0aGVyIHRoZSBuYW1lIG9mIEdvb2dsZSBJbmMuIG5vciB0aGUgbmFtZXMgb2YgaXRzXG4vLyBjb250cmlidXRvcnMgbWF5IGJlIHVzZWQgdG8gZW5kb3JzZSBvciBwcm9tb3RlIHByb2R1Y3RzIGRlcml2ZWQgZnJvbVxuLy8gdGhpcyBzb2Z0d2FyZSB3aXRob3V0IHNwZWNpZmljIHByaW9yIHdyaXR0ZW4gcGVybWlzc2lvbi5cbi8vXG4vLyBUSElTIFNPRlRXQVJFIElTIFBST1ZJREVEIEJZIFRIRSBDT1BZUklHSFQgSE9MREVSUyBBTkQgQ09OVFJJQlVUT1JTXG4vLyBcIkFTIElTXCIgQU5EIEFOWSBFWFBSRVNTIE9SIElNUExJRUQgV0FSUkFOVElFUywgSU5DTFVESU5HLCBCVVQgTk9UXG4vLyBMSU1JVEVEIFRPLCBUSEUgSU1QTElFRCBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSBBTkQgRklUTkVTUyBGT1Jcbi8vIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFSRSBESVNDTEFJTUVELiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQ09QWVJJR0hUXG4vLyBPV05FUiBPUiBDT05UUklCVVRPUlMgQkUgTElBQkxFIEZPUiBBTlkgRElSRUNULCBJTkRJUkVDVCwgSU5DSURFTlRBTCxcbi8vIFNQRUNJQUwsIEVYRU1QTEFSWSwgT1IgQ09OU0VRVUVOVElBTCBEQU1BR0VTIChJTkNMVURJTkcsIEJVVCBOT1Rcbi8vIExJTUlURUQgVE8sIFBST0NVUkVNRU5UIE9GIFNVQlNUSVRVVEUgR09PRFMgT1IgU0VSVklDRVM7IExPU1MgT0YgVVNFLFxuLy8gREFUQSwgT1IgUFJPRklUUzsgT1IgQlVTSU5FU1MgSU5URVJSVVBUSU9OKSBIT1dFVkVSIENBVVNFRCBBTkQgT04gQU5ZXG4vLyBUSEVPUlkgT0YgTElBQklMSVRZLCBXSEVUSEVSIElOIENPTlRSQUNULCBTVFJJQ1QgTElBQklMSVRZLCBPUiBUT1JUXG4vLyAoSU5DTFVESU5HIE5FR0xJR0VOQ0UgT1IgT1RIRVJXSVNFKSBBUklTSU5HIElOIEFOWSBXQVkgT1VUIE9GIFRIRSBVU0Vcbi8vIE9GIFRISVMgU09GVFdBUkUsIEVWRU4gSUYgQURWSVNFRCBPRiBUSEUgUE9TU0lCSUxJVFkgT0YgU1VDSCBEQU1BR0UuXG5cbi8qIEBwb2x5bWVyTWl4aW4gKi9cbmV4cG9ydCBjb25zdCBFdmVudHNNaXhpbiA9IGRlZHVwaW5nTWl4aW4oXG4gIChzdXBlckNsYXNzKSA9PlxuICAgIGNsYXNzIGV4dGVuZHMgc3VwZXJDbGFzcyB7XG4gICAgICAvKipcbiAgICogRGlzcGF0Y2hlcyBhIGN1c3RvbSBldmVudCB3aXRoIGFuIG9wdGlvbmFsIGRldGFpbCB2YWx1ZS5cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IHR5cGUgTmFtZSBvZiBldmVudCB0eXBlLlxuICAgKiBAcGFyYW0geyo9fSBkZXRhaWwgRGV0YWlsIHZhbHVlIGNvbnRhaW5pbmcgZXZlbnQtc3BlY2lmaWNcbiAgICogICBwYXlsb2FkLlxuICAgKiBAcGFyYW0ge3sgYnViYmxlczogKGJvb2xlYW58dW5kZWZpbmVkKSxcbiAgICAgICAgICAgICAgIGNhbmNlbGFibGU6IChib29sZWFufHVuZGVmaW5lZCksXG4gICAgICAgICAgICAgICAgY29tcG9zZWQ6IChib29sZWFufHVuZGVmaW5lZCkgfT19XG4gICAgKiAgb3B0aW9ucyBPYmplY3Qgc3BlY2lmeWluZyBvcHRpb25zLiAgVGhlc2UgbWF5IGluY2x1ZGU6XG4gICAgKiAgYGJ1YmJsZXNgIChib29sZWFuLCBkZWZhdWx0cyB0byBgdHJ1ZWApLFxuICAgICogIGBjYW5jZWxhYmxlYCAoYm9vbGVhbiwgZGVmYXVsdHMgdG8gZmFsc2UpLCBhbmRcbiAgICAqICBgbm9kZWAgb24gd2hpY2ggdG8gZmlyZSB0aGUgZXZlbnQgKEhUTUxFbGVtZW50LCBkZWZhdWx0cyB0byBgdGhpc2ApLlxuICAgICogQHJldHVybiB7RXZlbnR9IFRoZSBuZXcgZXZlbnQgdGhhdCB3YXMgZmlyZWQuXG4gICAgKi9cbiAgICAgIGZpcmUodHlwZSwgZGV0YWlsLCBvcHRpb25zKSB7XG4gICAgICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICAgICAgICByZXR1cm4gZmlyZUV2ZW50KG9wdGlvbnMubm9kZSB8fCB0aGlzLCB0eXBlLCBkZXRhaWwsIG9wdGlvbnMpO1xuICAgICAgfVxuICAgIH1cbik7XG4iLCJpbXBvcnQgXCJAcG9seW1lci9pcm9uLWZsZXgtbGF5b3V0L2lyb24tZmxleC1sYXlvdXQtY2xhc3Nlc1wiO1xuaW1wb3J0IHsgaHRtbCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZ1wiO1xuaW1wb3J0IHsgUG9seW1lckVsZW1lbnQgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWVsZW1lbnRcIjtcblxuaW1wb3J0IFwiLi4vY29tcG9uZW50cy9lbnRpdHkvc3RhdGUtaW5mb1wiO1xuaW1wb3J0IFwiLi4vY29tcG9uZW50cy9oYS1jbGltYXRlLXN0YXRlXCI7XG5cbmNsYXNzIFN0YXRlQ2FyZENsaW1hdGUgZXh0ZW5kcyBQb2x5bWVyRWxlbWVudCB7XG4gIHN0YXRpYyBnZXQgdGVtcGxhdGUoKSB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8c3R5bGUgaW5jbHVkZT1cImlyb24tZmxleCBpcm9uLWZsZXgtYWxpZ25tZW50XCI+PC9zdHlsZT5cbiAgICAgIDxzdHlsZT5cbiAgICAgICAgOmhvc3Qge1xuICAgICAgICAgIEBhcHBseSAtLXBhcGVyLWZvbnQtYm9keTE7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgICAgICAgfVxuXG4gICAgICAgIGhhLWNsaW1hdGUtc3RhdGUge1xuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxNnB4O1xuICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgICB9XG4gICAgICA8L3N0eWxlPlxuXG4gICAgICA8ZGl2IGNsYXNzPVwiaG9yaXpvbnRhbCBqdXN0aWZpZWQgbGF5b3V0XCI+XG4gICAgICAgICR7dGhpcy5zdGF0ZUluZm9UZW1wbGF0ZX1cbiAgICAgICAgPGhhLWNsaW1hdGUtc3RhdGVcbiAgICAgICAgICBoYXNzPVwiW1toYXNzXV1cIlxuICAgICAgICAgIHN0YXRlLW9iaj1cIltbc3RhdGVPYmpdXVwiXG4gICAgICAgID48L2hhLWNsaW1hdGUtc3RhdGU+XG4gICAgICA8L2Rpdj5cbiAgICBgO1xuICB9XG5cbiAgc3RhdGljIGdldCBzdGF0ZUluZm9UZW1wbGF0ZSgpIHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxzdGF0ZS1pbmZvXG4gICAgICAgIGhhc3M9XCJbW2hhc3NdXVwiXG4gICAgICAgIHN0YXRlLW9iaj1cIltbc3RhdGVPYmpdXVwiXG4gICAgICAgIGluLWRpYWxvZz1cIltbaW5EaWFsb2ddXVwiXG4gICAgICA+PC9zdGF0ZS1pbmZvPlxuICAgIGA7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGhhc3M6IE9iamVjdCxcbiAgICAgIHN0YXRlT2JqOiBPYmplY3QsXG4gICAgICBpbkRpYWxvZzoge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICB2YWx1ZTogZmFsc2UsXG4gICAgICB9LFxuICAgIH07XG4gIH1cbn1cbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcInN0YXRlLWNhcmQtY2xpbWF0ZVwiLCBTdGF0ZUNhcmRDbGltYXRlKTtcbiIsImltcG9ydCBcIkBwb2x5bWVyL2lyb24tZmxleC1sYXlvdXQvaXJvbi1mbGV4LWxheW91dC1jbGFzc2VzXCI7XG5pbXBvcnQgXCJAbWF0ZXJpYWwvbXdjLWJ1dHRvblwiO1xuaW1wb3J0IHsgaHRtbCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZ1wiO1xuaW1wb3J0IHsgUG9seW1lckVsZW1lbnQgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWVsZW1lbnRcIjtcblxuaW1wb3J0IFwiLi4vY29tcG9uZW50cy9lbnRpdHkvc3RhdGUtaW5mb1wiO1xuXG5pbXBvcnQgTG9jYWxpemVNaXhpbiBmcm9tIFwiLi4vbWl4aW5zL2xvY2FsaXplLW1peGluXCI7XG5cbi8qXG4gKiBAYXBwbGllc01peGluIExvY2FsaXplTWl4aW5cbiAqL1xuY2xhc3MgU3RhdGVDYXJkQ29uZmlndXJhdG9yIGV4dGVuZHMgTG9jYWxpemVNaXhpbihQb2x5bWVyRWxlbWVudCkge1xuICBzdGF0aWMgZ2V0IHRlbXBsYXRlKCkge1xuICAgIHJldHVybiBodG1sYFxuICAgICAgPHN0eWxlIGluY2x1ZGU9XCJpcm9uLWZsZXggaXJvbi1mbGV4LWFsaWdubWVudFwiPjwvc3R5bGU+XG4gICAgICA8c3R5bGU+XG4gICAgICAgIG13Yy1idXR0b24ge1xuICAgICAgICAgIHRvcDogM3B4O1xuICAgICAgICAgIGhlaWdodDogMzdweDtcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IC0wLjU3ZW07XG4gICAgICAgIH1cbiAgICAgIDwvc3R5bGU+XG5cbiAgICAgIDxkaXYgY2xhc3M9XCJob3Jpem9udGFsIGp1c3RpZmllZCBsYXlvdXRcIj5cbiAgICAgICAgJHt0aGlzLnN0YXRlSW5mb1RlbXBsYXRlfVxuICAgICAgICA8bXdjLWJ1dHRvbiBoaWRkZW4kPVwiW1tpbkRpYWxvZ11dXCJcbiAgICAgICAgICA+W1tfbG9jYWxpemVTdGF0ZShzdGF0ZU9iai5zdGF0ZSldXTwvbXdjLWJ1dHRvblxuICAgICAgICA+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPCEtLSBwcmUgbG9hZCB0aGUgaW1hZ2Ugc28gdGhlIGRpYWxvZyBpcyByZW5kZXJlZCB0aGUgcHJvcGVyIHNpemUgLS0+XG4gICAgICA8dGVtcGxhdGUgaXM9XCJkb20taWZcIiBpZj1cIltbc3RhdGVPYmouYXR0cmlidXRlcy5kZXNjcmlwdGlvbl9pbWFnZV1dXCI+XG4gICAgICAgIDxpbWcgaGlkZGVuPVwiXCIgc3JjPVwiW1tzdGF0ZU9iai5hdHRyaWJ1dGVzLmRlc2NyaXB0aW9uX2ltYWdlXV1cIiAvPlxuICAgICAgPC90ZW1wbGF0ZT5cbiAgICBgO1xuICB9XG5cbiAgc3RhdGljIGdldCBzdGF0ZUluZm9UZW1wbGF0ZSgpIHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxzdGF0ZS1pbmZvXG4gICAgICAgIGhhc3M9XCJbW2hhc3NdXVwiXG4gICAgICAgIHN0YXRlLW9iaj1cIltbc3RhdGVPYmpdXVwiXG4gICAgICAgIGluLWRpYWxvZz1cIltbaW5EaWFsb2ddXVwiXG4gICAgICA+PC9zdGF0ZS1pbmZvPlxuICAgIGA7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGhhc3M6IE9iamVjdCxcbiAgICAgIHN0YXRlT2JqOiBPYmplY3QsXG4gICAgICBpbkRpYWxvZzoge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICB2YWx1ZTogZmFsc2UsXG4gICAgICB9LFxuICAgIH07XG4gIH1cblxuICBfbG9jYWxpemVTdGF0ZShzdGF0ZSkge1xuICAgIHJldHVybiB0aGlzLmxvY2FsaXplKGBzdGF0ZS5jb25maWd1cmF0b3IuJHtzdGF0ZX1gKTtcbiAgfVxufVxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwic3RhdGUtY2FyZC1jb25maWd1cmF0b3JcIiwgU3RhdGVDYXJkQ29uZmlndXJhdG9yKTtcbiIsImltcG9ydCB7IFBvbHltZXJFbGVtZW50IH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvcG9seW1lci1lbGVtZW50XCI7XG5cbmltcG9ydCBcIi4vc3RhdGUtY2FyZC1jbGltYXRlXCI7XG5pbXBvcnQgXCIuL3N0YXRlLWNhcmQtY29uZmlndXJhdG9yXCI7XG5pbXBvcnQgXCIuL3N0YXRlLWNhcmQtY292ZXJcIjtcbmltcG9ydCBcIi4vc3RhdGUtY2FyZC1kaXNwbGF5XCI7XG5pbXBvcnQgXCIuL3N0YXRlLWNhcmQtaW5wdXRfbnVtYmVyXCI7XG5pbXBvcnQgXCIuL3N0YXRlLWNhcmQtaW5wdXRfc2VsZWN0XCI7XG5pbXBvcnQgXCIuL3N0YXRlLWNhcmQtaW5wdXRfdGV4dFwiO1xuaW1wb3J0IFwiLi9zdGF0ZS1jYXJkLWxvY2tcIjtcbmltcG9ydCBcIi4vc3RhdGUtY2FyZC1tZWRpYV9wbGF5ZXJcIjtcbmltcG9ydCBcIi4vc3RhdGUtY2FyZC1zY2VuZVwiO1xuaW1wb3J0IFwiLi9zdGF0ZS1jYXJkLXNjcmlwdFwiO1xuaW1wb3J0IFwiLi9zdGF0ZS1jYXJkLXRpbWVyXCI7XG5pbXBvcnQgXCIuL3N0YXRlLWNhcmQtdG9nZ2xlXCI7XG5pbXBvcnQgXCIuL3N0YXRlLWNhcmQtdmFjdXVtXCI7XG5pbXBvcnQgXCIuL3N0YXRlLWNhcmQtd2F0ZXJfaGVhdGVyXCI7XG5pbXBvcnQgXCIuL3N0YXRlLWNhcmQtd2VibGlua1wiO1xuXG5pbXBvcnQgeyBzdGF0ZUNhcmRUeXBlIH0gZnJvbSBcIi4uL2NvbW1vbi9lbnRpdHkvc3RhdGVfY2FyZF90eXBlXCI7XG5pbXBvcnQgZHluYW1pY0NvbnRlbnRVcGRhdGVyIGZyb20gXCIuLi9jb21tb24vZG9tL2R5bmFtaWNfY29udGVudF91cGRhdGVyXCI7XG5cbmNsYXNzIFN0YXRlQ2FyZENvbnRlbnQgZXh0ZW5kcyBQb2x5bWVyRWxlbWVudCB7XG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaGFzczogT2JqZWN0LFxuICAgICAgc3RhdGVPYmo6IE9iamVjdCxcbiAgICAgIGluRGlhbG9nOiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIHZhbHVlOiBmYWxzZSxcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgb2JzZXJ2ZXJzKCkge1xuICAgIHJldHVybiBbXCJpbnB1dENoYW5nZWQoaGFzcywgaW5EaWFsb2csIHN0YXRlT2JqKVwiXTtcbiAgfVxuXG4gIGlucHV0Q2hhbmdlZChoYXNzLCBpbkRpYWxvZywgc3RhdGVPYmopIHtcbiAgICBsZXQgc3RhdGVDYXJkO1xuICAgIGlmICghc3RhdGVPYmogfHwgIWhhc3MpIHJldHVybjtcbiAgICBpZiAoc3RhdGVPYmouYXR0cmlidXRlcyAmJiBcImN1c3RvbV91aV9zdGF0ZV9jYXJkXCIgaW4gc3RhdGVPYmouYXR0cmlidXRlcykge1xuICAgICAgc3RhdGVDYXJkID0gc3RhdGVPYmouYXR0cmlidXRlcy5jdXN0b21fdWlfc3RhdGVfY2FyZDtcbiAgICB9IGVsc2Uge1xuICAgICAgc3RhdGVDYXJkID0gXCJzdGF0ZS1jYXJkLVwiICsgc3RhdGVDYXJkVHlwZShoYXNzLCBzdGF0ZU9iaik7XG4gICAgfVxuICAgIGR5bmFtaWNDb250ZW50VXBkYXRlcih0aGlzLCBzdGF0ZUNhcmQudG9VcHBlckNhc2UoKSwge1xuICAgICAgaGFzczogaGFzcyxcbiAgICAgIHN0YXRlT2JqOiBzdGF0ZU9iaixcbiAgICAgIGluRGlhbG9nOiBpbkRpYWxvZyxcbiAgICB9KTtcbiAgfVxufVxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwic3RhdGUtY2FyZC1jb250ZW50XCIsIFN0YXRlQ2FyZENvbnRlbnQpO1xuIiwiaW1wb3J0IFwiQHBvbHltZXIvaXJvbi1mbGV4LWxheW91dC9pcm9uLWZsZXgtbGF5b3V0LWNsYXNzZXNcIjtcbmltcG9ydCB7IGh0bWwgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvaHRtbC10YWdcIjtcbmltcG9ydCB7IFBvbHltZXJFbGVtZW50IH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvcG9seW1lci1lbGVtZW50XCI7XG5cbmltcG9ydCBcIi4uL2NvbXBvbmVudHMvZW50aXR5L3N0YXRlLWluZm9cIjtcbmltcG9ydCBcIi4uL2NvbXBvbmVudHMvaGEtY292ZXItY29udHJvbHNcIjtcbmltcG9ydCBcIi4uL2NvbXBvbmVudHMvaGEtY292ZXItdGlsdC1jb250cm9sc1wiO1xuaW1wb3J0IENvdmVyRW50aXR5IGZyb20gXCIuLi91dGlsL2NvdmVyLW1vZGVsXCI7XG5cbmNsYXNzIFN0YXRlQ2FyZENvdmVyIGV4dGVuZHMgUG9seW1lckVsZW1lbnQge1xuICBzdGF0aWMgZ2V0IHRlbXBsYXRlKCkge1xuICAgIHJldHVybiBodG1sYFxuICAgICAgPHN0eWxlIGluY2x1ZGU9XCJpcm9uLWZsZXggaXJvbi1mbGV4LWFsaWdubWVudFwiPjwvc3R5bGU+XG4gICAgICA8c3R5bGU+XG4gICAgICAgIDpob3N0IHtcbiAgICAgICAgICBsaW5lLWhlaWdodDogMS41O1xuICAgICAgICB9XG4gICAgICA8L3N0eWxlPlxuXG4gICAgICA8ZGl2IGNsYXNzPVwiaG9yaXpvbnRhbCBqdXN0aWZpZWQgbGF5b3V0XCI+XG4gICAgICAgICR7dGhpcy5zdGF0ZUluZm9UZW1wbGF0ZX1cbiAgICAgICAgPGRpdiBjbGFzcz1cImhvcml6b250YWwgbGF5b3V0XCI+XG4gICAgICAgICAgPGhhLWNvdmVyLWNvbnRyb2xzXG4gICAgICAgICAgICBoaWRkZW4kPVwiW1tlbnRpdHlPYmouaXNUaWx0T25seV1dXCJcbiAgICAgICAgICAgIGhhc3M9XCJbW2hhc3NdXVwiXG4gICAgICAgICAgICBzdGF0ZS1vYmo9XCJbW3N0YXRlT2JqXV1cIlxuICAgICAgICAgID48L2hhLWNvdmVyLWNvbnRyb2xzPlxuICAgICAgICAgIDxoYS1jb3Zlci10aWx0LWNvbnRyb2xzXG4gICAgICAgICAgICBoaWRkZW4kPVwiW1shZW50aXR5T2JqLmlzVGlsdE9ubHldXVwiXG4gICAgICAgICAgICBoYXNzPVwiW1toYXNzXV1cIlxuICAgICAgICAgICAgc3RhdGUtb2JqPVwiW1tzdGF0ZU9ial1dXCJcbiAgICAgICAgICA+PC9oYS1jb3Zlci10aWx0LWNvbnRyb2xzPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIGA7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHN0YXRlSW5mb1RlbXBsYXRlKCkge1xuICAgIHJldHVybiBodG1sYFxuICAgICAgPHN0YXRlLWluZm9cbiAgICAgICAgaGFzcz1cIltbaGFzc11dXCJcbiAgICAgICAgc3RhdGUtb2JqPVwiW1tzdGF0ZU9ial1dXCJcbiAgICAgICAgaW4tZGlhbG9nPVwiW1tpbkRpYWxvZ11dXCJcbiAgICAgID48L3N0YXRlLWluZm8+XG4gICAgYDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaGFzczogT2JqZWN0LFxuICAgICAgc3RhdGVPYmo6IE9iamVjdCxcbiAgICAgIGluRGlhbG9nOiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIHZhbHVlOiBmYWxzZSxcbiAgICAgIH0sXG4gICAgICBlbnRpdHlPYmo6IHtcbiAgICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgICBjb21wdXRlZDogXCJjb21wdXRlRW50aXR5T2JqKGhhc3MsIHN0YXRlT2JqKVwiLFxuICAgICAgfSxcbiAgICB9O1xuICB9XG5cbiAgY29tcHV0ZUVudGl0eU9iaihoYXNzLCBzdGF0ZU9iaikge1xuICAgIHZhciBlbnRpdHkgPSBuZXcgQ292ZXJFbnRpdHkoaGFzcywgc3RhdGVPYmopO1xuICAgIHJldHVybiBlbnRpdHk7XG4gIH1cbn1cbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcInN0YXRlLWNhcmQtY292ZXJcIiwgU3RhdGVDYXJkQ292ZXIpO1xuIiwiaW1wb3J0IFwiQHBvbHltZXIvaXJvbi1mbGV4LWxheW91dC9pcm9uLWZsZXgtbGF5b3V0LWNsYXNzZXNcIjtcbmltcG9ydCB7IGh0bWwgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvaHRtbC10YWdcIjtcbmltcG9ydCB7IFBvbHltZXJFbGVtZW50IH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvcG9seW1lci1lbGVtZW50XCI7XG5cbmltcG9ydCBcIi4uL2NvbXBvbmVudHMvZW50aXR5L3N0YXRlLWluZm9cIjtcblxuaW1wb3J0IExvY2FsaXplTWl4aW4gZnJvbSBcIi4uL21peGlucy9sb2NhbGl6ZS1taXhpblwiO1xuXG5pbXBvcnQgeyBhdHRyaWJ1dGVDbGFzc05hbWVzIH0gZnJvbSBcIi4uL2NvbW1vbi9lbnRpdHkvYXR0cmlidXRlX2NsYXNzX25hbWVzXCI7XG5pbXBvcnQgeyBjb21wdXRlU3RhdGVEaXNwbGF5IH0gZnJvbSBcIi4uL2NvbW1vbi9lbnRpdHkvY29tcHV0ZV9zdGF0ZV9kaXNwbGF5XCI7XG5pbXBvcnQgeyBjb21wdXRlUlRMIH0gZnJvbSBcIi4uL2NvbW1vbi91dGlsL2NvbXB1dGVfcnRsXCI7XG5cbi8qXG4gKiBAYXBwbGllc01peGluIExvY2FsaXplTWl4aW5cbiAqL1xuY2xhc3MgU3RhdGVDYXJkRGlzcGxheSBleHRlbmRzIExvY2FsaXplTWl4aW4oUG9seW1lckVsZW1lbnQpIHtcbiAgc3RhdGljIGdldCB0ZW1wbGF0ZSgpIHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxzdHlsZT5cbiAgICAgICAgOmhvc3Qge1xuICAgICAgICAgIEBhcHBseSAtLWxheW91dC1ob3Jpem9udGFsO1xuICAgICAgICAgIEBhcHBseSAtLWxheW91dC1qdXN0aWZpZWQ7XG4gICAgICAgICAgQGFwcGx5IC0tbGF5b3V0LWJhc2VsaW5lO1xuICAgICAgICB9XG5cbiAgICAgICAgOmhvc3QoW3J0bF0pIHtcbiAgICAgICAgICBkaXJlY3Rpb246IHJ0bDtcbiAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgICAgfVxuXG4gICAgICAgIHN0YXRlLWluZm8ge1xuICAgICAgICAgIGZsZXg6IDEgMSBhdXRvO1xuICAgICAgICAgIG1pbi13aWR0aDogMDtcbiAgICAgICAgfVxuICAgICAgICAuc3RhdGUge1xuICAgICAgICAgIEBhcHBseSAtLXBhcGVyLWZvbnQtYm9keTE7XG4gICAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnktdGV4dC1jb2xvcik7XG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDE2cHg7XG4gICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICAgICAgbWF4LXdpZHRoOiA0MCU7XG4gICAgICAgICAgZmxleDogMCAwIGF1dG87XG4gICAgICAgIH1cbiAgICAgICAgOmhvc3QoW3J0bF0pIC5zdGF0ZSB7XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xuICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgIH1cblxuICAgICAgICAuc3RhdGUuaGFzLXVuaXRfb2ZfbWVhc3VyZW1lbnQge1xuICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgIH1cbiAgICAgIDwvc3R5bGU+XG5cbiAgICAgICR7dGhpcy5zdGF0ZUluZm9UZW1wbGF0ZX1cbiAgICAgIDxkaXYgY2xhc3MkPVwiW1tjb21wdXRlQ2xhc3NOYW1lcyhzdGF0ZU9iaildXVwiPlxuICAgICAgICBbW2NvbXB1dGVTdGF0ZURpc3BsYXkobG9jYWxpemUsIHN0YXRlT2JqLCBsYW5ndWFnZSldXVxuICAgICAgPC9kaXY+XG4gICAgYDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgc3RhdGVJbmZvVGVtcGxhdGUoKSB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8c3RhdGUtaW5mb1xuICAgICAgICBoYXNzPVwiW1toYXNzXV1cIlxuICAgICAgICBzdGF0ZS1vYmo9XCJbW3N0YXRlT2JqXV1cIlxuICAgICAgICBpbi1kaWFsb2c9XCJbW2luRGlhbG9nXV1cIlxuICAgICAgPjwvc3RhdGUtaW5mbz5cbiAgICBgO1xuICB9XG5cbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBoYXNzOiBPYmplY3QsXG4gICAgICBzdGF0ZU9iajogT2JqZWN0LFxuICAgICAgaW5EaWFsb2c6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgdmFsdWU6IGZhbHNlLFxuICAgICAgfSxcbiAgICAgIHJ0bDoge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICByZWZsZWN0VG9BdHRyaWJ1dGU6IHRydWUsXG4gICAgICAgIGNvbXB1dGVkOiBcIl9jb21wdXRlUlRMKGhhc3MpXCIsXG4gICAgICB9LFxuICAgIH07XG4gIH1cblxuICBjb21wdXRlU3RhdGVEaXNwbGF5KGxvY2FsaXplLCBzdGF0ZU9iaiwgbGFuZ3VhZ2UpIHtcbiAgICByZXR1cm4gY29tcHV0ZVN0YXRlRGlzcGxheShsb2NhbGl6ZSwgc3RhdGVPYmosIGxhbmd1YWdlKTtcbiAgfVxuXG4gIGNvbXB1dGVDbGFzc05hbWVzKHN0YXRlT2JqKSB7XG4gICAgY29uc3QgY2xhc3NlcyA9IFtcbiAgICAgIFwic3RhdGVcIixcbiAgICAgIGF0dHJpYnV0ZUNsYXNzTmFtZXMoc3RhdGVPYmosIFtcInVuaXRfb2ZfbWVhc3VyZW1lbnRcIl0pLFxuICAgIF07XG4gICAgcmV0dXJuIGNsYXNzZXMuam9pbihcIiBcIik7XG4gIH1cblxuICBfY29tcHV0ZVJUTChoYXNzKSB7XG4gICAgcmV0dXJuIGNvbXB1dGVSVEwoaGFzcyk7XG4gIH1cbn1cbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcInN0YXRlLWNhcmQtZGlzcGxheVwiLCBTdGF0ZUNhcmREaXNwbGF5KTtcbiIsImltcG9ydCBcIkBwb2x5bWVyL2lyb24tZmxleC1sYXlvdXQvaXJvbi1mbGV4LWxheW91dC1jbGFzc2VzXCI7XG5pbXBvcnQgeyBJcm9uUmVzaXphYmxlQmVoYXZpb3IgfSBmcm9tIFwiQHBvbHltZXIvaXJvbi1yZXNpemFibGUtYmVoYXZpb3IvaXJvbi1yZXNpemFibGUtYmVoYXZpb3JcIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWlucHV0L3BhcGVyLWlucHV0XCI7XG5pbXBvcnQgeyBtaXhpbkJlaGF2aW9ycyB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL2xpYi9sZWdhY3kvY2xhc3NcIjtcbmltcG9ydCB7IGh0bWwgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvaHRtbC10YWdcIjtcbmltcG9ydCB7IFBvbHltZXJFbGVtZW50IH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvcG9seW1lci1lbGVtZW50XCI7XG5cbmltcG9ydCBcIi4uL2NvbXBvbmVudHMvZW50aXR5L3N0YXRlLWluZm9cIjtcbmltcG9ydCBcIi4uL2NvbXBvbmVudHMvaGEtc2xpZGVyXCI7XG5cbmNsYXNzIFN0YXRlQ2FyZElucHV0TnVtYmVyIGV4dGVuZHMgbWl4aW5CZWhhdmlvcnMoXG4gIFtJcm9uUmVzaXphYmxlQmVoYXZpb3JdLFxuICBQb2x5bWVyRWxlbWVudFxuKSB7XG4gIHN0YXRpYyBnZXQgdGVtcGxhdGUoKSB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8c3R5bGUgaW5jbHVkZT1cImlyb24tZmxleCBpcm9uLWZsZXgtYWxpZ25tZW50XCI+PC9zdHlsZT5cbiAgICAgIDxzdHlsZT5cbiAgICAgICAgaGEtc2xpZGVyIHtcbiAgICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICAgICAgfVxuICAgICAgICAuc3RhdGUge1xuICAgICAgICAgIEBhcHBseSAtLXBhcGVyLWZvbnQtYm9keTE7XG4gICAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnktdGV4dC1jb2xvcik7XG5cbiAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgICAgICBsaW5lLWhlaWdodDogNDBweDtcbiAgICAgICAgfVxuICAgICAgICAuc2xpZGVyc3RhdGUge1xuICAgICAgICAgIG1pbi13aWR0aDogNDVweDtcbiAgICAgICAgfVxuICAgICAgICBoYS1zbGlkZXJbaGlkZGVuXSB7XG4gICAgICAgICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xuICAgICAgICB9XG4gICAgICAgIHBhcGVyLWlucHV0IHtcbiAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICAgICAgfVxuICAgICAgPC9zdHlsZT5cblxuICAgICAgPGRpdiBjbGFzcz1cImhvcml6b250YWwganVzdGlmaWVkIGxheW91dFwiIGlkPVwiaW5wdXRfbnVtYmVyX2NhcmRcIj5cbiAgICAgICAgJHt0aGlzLnN0YXRlSW5mb1RlbXBsYXRlfVxuICAgICAgICA8aGEtc2xpZGVyXG4gICAgICAgICAgbWluPVwiW1ttaW5dXVwiXG4gICAgICAgICAgbWF4PVwiW1ttYXhdXVwiXG4gICAgICAgICAgdmFsdWU9XCJ7e3ZhbHVlfX1cIlxuICAgICAgICAgIHN0ZXA9XCJbW3N0ZXBdXVwiXG4gICAgICAgICAgaGlkZGVuPVwiW1toaWRkZW5zbGlkZXJdXVwiXG4gICAgICAgICAgcGluPVwiXCJcbiAgICAgICAgICBvbi1jaGFuZ2U9XCJzZWxlY3RlZFZhbHVlQ2hhbmdlZFwiXG4gICAgICAgICAgb24tY2xpY2s9XCJzdG9wUHJvcGFnYXRpb25cIlxuICAgICAgICAgIGlkPVwic2xpZGVyXCJcbiAgICAgICAgICBpZ25vcmUtYmFyLXRvdWNoPVwiXCJcbiAgICAgICAgPlxuICAgICAgICA8L2hhLXNsaWRlcj5cbiAgICAgICAgPHBhcGVyLWlucHV0XG4gICAgICAgICAgbm8tbGFiZWwtZmxvYXQ9XCJcIlxuICAgICAgICAgIGF1dG8tdmFsaWRhdGU9XCJcIlxuICAgICAgICAgIHBhdHRlcm49XCJbMC05XSsoW1xcXFwuXVswLTldKyk/XCJcbiAgICAgICAgICBzdGVwPVwiW1tzdGVwXV1cIlxuICAgICAgICAgIG1pbj1cIltbbWluXV1cIlxuICAgICAgICAgIG1heD1cIltbbWF4XV1cIlxuICAgICAgICAgIHZhbHVlPVwie3t2YWx1ZX19XCJcbiAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICBvbi1jaGFuZ2U9XCJzZWxlY3RlZFZhbHVlQ2hhbmdlZFwiXG4gICAgICAgICAgb24tY2xpY2s9XCJzdG9wUHJvcGFnYXRpb25cIlxuICAgICAgICAgIGhpZGRlbj1cIltbaGlkZGVuYm94XV1cIlxuICAgICAgICA+XG4gICAgICAgIDwvcGFwZXItaW5wdXQ+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJzdGF0ZVwiIGhpZGRlbj1cIltbaGlkZGVuYm94XV1cIj5cbiAgICAgICAgICBbW3N0YXRlT2JqLmF0dHJpYnV0ZXMudW5pdF9vZl9tZWFzdXJlbWVudF1dXG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgaWQ9XCJzbGlkZXJzdGF0ZVwiXG4gICAgICAgICAgY2xhc3M9XCJzdGF0ZSBzbGlkZXJzdGF0ZVwiXG4gICAgICAgICAgaGlkZGVuPVwiW1toaWRkZW5zbGlkZXJdXVwiXG4gICAgICAgID5cbiAgICAgICAgICBbW3ZhbHVlXV0gW1tzdGF0ZU9iai5hdHRyaWJ1dGVzLnVuaXRfb2ZfbWVhc3VyZW1lbnRdXVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIGA7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHN0YXRlSW5mb1RlbXBsYXRlKCkge1xuICAgIHJldHVybiBodG1sYFxuICAgICAgPHN0YXRlLWluZm9cbiAgICAgICAgaGFzcz1cIltbaGFzc11dXCJcbiAgICAgICAgc3RhdGUtb2JqPVwiW1tzdGF0ZU9ial1dXCJcbiAgICAgICAgaW4tZGlhbG9nPVwiW1tpbkRpYWxvZ11dXCJcbiAgICAgID48L3N0YXRlLWluZm8+XG4gICAgYDtcbiAgfVxuXG4gIHJlYWR5KCkge1xuICAgIHN1cGVyLnJlYWR5KCk7XG4gICAgaWYgKHR5cGVvZiBSZXNpemVPYnNlcnZlciA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICBjb25zdCBybyA9IG5ldyBSZXNpemVPYnNlcnZlcigoZW50cmllcykgPT4ge1xuICAgICAgICBlbnRyaWVzLmZvckVhY2goKCkgPT4ge1xuICAgICAgICAgIHRoaXMuaGlkZGVuU3RhdGUoKTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICAgIHJvLm9ic2VydmUodGhpcy4kLmlucHV0X251bWJlcl9jYXJkKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKFwiaXJvbi1yZXNpemVcIiwgdGhpcy5oaWRkZW5TdGF0ZSk7XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBoYXNzOiBPYmplY3QsXG4gICAgICBoaWRkZW5ib3g6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgdmFsdWU6IHRydWUsXG4gICAgICB9LFxuICAgICAgaGlkZGVuc2xpZGVyOiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIHZhbHVlOiB0cnVlLFxuICAgICAgfSxcbiAgICAgIGluRGlhbG9nOiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIHZhbHVlOiBmYWxzZSxcbiAgICAgIH0sXG4gICAgICBzdGF0ZU9iajoge1xuICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICAgIG9ic2VydmVyOiBcInN0YXRlT2JqZWN0Q2hhbmdlZFwiLFxuICAgICAgfSxcbiAgICAgIG1pbjoge1xuICAgICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICAgIHZhbHVlOiAwLFxuICAgICAgfSxcbiAgICAgIG1heDoge1xuICAgICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICAgIHZhbHVlOiAxMDAsXG4gICAgICB9LFxuICAgICAgbWF4bGVuZ3RoOiB7XG4gICAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgICAgdmFsdWU6IDMsXG4gICAgICB9LFxuICAgICAgc3RlcDogTnVtYmVyLFxuICAgICAgdmFsdWU6IE51bWJlcixcbiAgICAgIG1vZGU6IFN0cmluZyxcbiAgICB9O1xuICB9XG5cbiAgaGlkZGVuU3RhdGUoKSB7XG4gICAgaWYgKHRoaXMubW9kZSAhPT0gXCJzbGlkZXJcIikgcmV0dXJuO1xuICAgIGNvbnN0IHNsaWRlcndpZHRoID0gdGhpcy4kLnNsaWRlci5vZmZzZXRXaWR0aDtcbiAgICBpZiAoc2xpZGVyd2lkdGggPCAxMDApIHtcbiAgICAgIHRoaXMuJC5zbGlkZXJzdGF0ZS5oaWRkZW4gPSB0cnVlO1xuICAgIH0gZWxzZSBpZiAoc2xpZGVyd2lkdGggPj0gMTQ1KSB7XG4gICAgICB0aGlzLiQuc2xpZGVyc3RhdGUuaGlkZGVuID0gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgc3RhdGVPYmplY3RDaGFuZ2VkKG5ld1ZhbCkge1xuICAgIGNvbnN0IHByZXZNb2RlID0gdGhpcy5tb2RlO1xuICAgIHRoaXMuc2V0UHJvcGVydGllcyh7XG4gICAgICBtaW46IE51bWJlcihuZXdWYWwuYXR0cmlidXRlcy5taW4pLFxuICAgICAgbWF4OiBOdW1iZXIobmV3VmFsLmF0dHJpYnV0ZXMubWF4KSxcbiAgICAgIHN0ZXA6IE51bWJlcihuZXdWYWwuYXR0cmlidXRlcy5zdGVwKSxcbiAgICAgIHZhbHVlOiBOdW1iZXIobmV3VmFsLnN0YXRlKSxcbiAgICAgIG1vZGU6IFN0cmluZyhuZXdWYWwuYXR0cmlidXRlcy5tb2RlKSxcbiAgICAgIG1heGxlbmd0aDogU3RyaW5nKG5ld1ZhbC5hdHRyaWJ1dGVzLm1heCkubGVuZ3RoLFxuICAgICAgaGlkZGVuYm94OiBuZXdWYWwuYXR0cmlidXRlcy5tb2RlICE9PSBcImJveFwiLFxuICAgICAgaGlkZGVuc2xpZGVyOiBuZXdWYWwuYXR0cmlidXRlcy5tb2RlICE9PSBcInNsaWRlclwiLFxuICAgIH0pO1xuICAgIGlmICh0aGlzLm1vZGUgPT09IFwic2xpZGVyXCIgJiYgcHJldk1vZGUgIT09IFwic2xpZGVyXCIpIHtcbiAgICAgIHRoaXMuaGlkZGVuU3RhdGUoKTtcbiAgICB9XG4gIH1cblxuICBzZWxlY3RlZFZhbHVlQ2hhbmdlZCgpIHtcbiAgICBpZiAodGhpcy52YWx1ZSA9PT0gTnVtYmVyKHRoaXMuc3RhdGVPYmouc3RhdGUpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuaGFzcy5jYWxsU2VydmljZShcImlucHV0X251bWJlclwiLCBcInNldF92YWx1ZVwiLCB7XG4gICAgICB2YWx1ZTogdGhpcy52YWx1ZSxcbiAgICAgIGVudGl0eV9pZDogdGhpcy5zdGF0ZU9iai5lbnRpdHlfaWQsXG4gICAgfSk7XG4gIH1cblxuICBzdG9wUHJvcGFnYXRpb24oZXYpIHtcbiAgICBldi5zdG9wUHJvcGFnYXRpb24oKTtcbiAgfVxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJzdGF0ZS1jYXJkLWlucHV0X251bWJlclwiLCBTdGF0ZUNhcmRJbnB1dE51bWJlcik7XG4iLCJpbXBvcnQge1xuICBMaXRFbGVtZW50LFxuICBjdXN0b21FbGVtZW50LFxuICBUZW1wbGF0ZVJlc3VsdCxcbiAgaHRtbCxcbiAgQ1NTUmVzdWx0LFxuICBjc3MsXG4gIHByb3BlcnR5LFxuICBQcm9wZXJ0eVZhbHVlcyxcbn0gZnJvbSBcImxpdC1lbGVtZW50XCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1kcm9wZG93bi1tZW51L3BhcGVyLWRyb3Bkb3duLW1lbnUtbGlnaHRcIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWl0ZW0vcGFwZXItaXRlbVwiO1xuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1kdXBsaWNhdGUtaW1wb3J0c1xuaW1wb3J0IHsgUGFwZXJJdGVtRWxlbWVudCB9IGZyb20gXCJAcG9seW1lci9wYXBlci1pdGVtL3BhcGVyLWl0ZW1cIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWxpc3Rib3gvcGFwZXItbGlzdGJveFwiO1xuXG5pbXBvcnQgXCIuLi9jb21wb25lbnRzL2VudGl0eS9zdGF0ZS1iYWRnZVwiO1xuXG5pbXBvcnQgeyBjb21wdXRlU3RhdGVOYW1lIH0gZnJvbSBcIi4uL2NvbW1vbi9lbnRpdHkvY29tcHV0ZV9zdGF0ZV9uYW1lXCI7XG5pbXBvcnQgeyBIb21lQXNzaXN0YW50LCBJbnB1dFNlbGVjdEVudGl0eSB9IGZyb20gXCIuLi90eXBlc1wiO1xuaW1wb3J0IHsgc2V0SW5wdXRTZWxlY3RPcHRpb24gfSBmcm9tIFwiLi4vZGF0YS9pbnB1dC1zZWxlY3RcIjtcbmltcG9ydCB7IFBvbHltZXJJcm9uU2VsZWN0RXZlbnQgfSBmcm9tIFwiLi4vcG9seW1lci10eXBlc1wiO1xuaW1wb3J0IHsgc3RvcFByb3BhZ2F0aW9uIH0gZnJvbSBcIi4uL2NvbW1vbi9kb20vc3RvcF9wcm9wYWdhdGlvblwiO1xuXG5AY3VzdG9tRWxlbWVudChcInN0YXRlLWNhcmQtaW5wdXRfc2VsZWN0XCIpXG5jbGFzcyBTdGF0ZUNhcmRJbnB1dFNlbGVjdCBleHRlbmRzIExpdEVsZW1lbnQge1xuICBAcHJvcGVydHkoKSBwdWJsaWMgaGFzcyE6IEhvbWVBc3Npc3RhbnQ7XG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyBzdGF0ZU9iaiE6IElucHV0U2VsZWN0RW50aXR5O1xuXG4gIHByb3RlY3RlZCByZW5kZXIoKTogVGVtcGxhdGVSZXN1bHQgfCB2b2lkIHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxzdGF0ZS1iYWRnZSAuc3RhdGVPYmo9JHt0aGlzLnN0YXRlT2JqfT48L3N0YXRlLWJhZGdlPlxuICAgICAgPHBhcGVyLWRyb3Bkb3duLW1lbnUtbGlnaHRcbiAgICAgICAgLmxhYmVsPSR7Y29tcHV0ZVN0YXRlTmFtZSh0aGlzLnN0YXRlT2JqKX1cbiAgICAgICAgLnZhbHVlPVwiJHt0aGlzLnN0YXRlT2JqLnN0YXRlfVwiXG4gICAgICAgIEBpcm9uLXNlbGVjdD0ke3RoaXMuX3NlbGVjdGVkT3B0aW9uQ2hhbmdlZH1cbiAgICAgICAgQGNsaWNrPSR7c3RvcFByb3BhZ2F0aW9ufVxuICAgICAgPlxuICAgICAgICA8cGFwZXItbGlzdGJveCBzbG90PVwiZHJvcGRvd24tY29udGVudFwiPlxuICAgICAgICAgICR7dGhpcy5zdGF0ZU9iai5hdHRyaWJ1dGVzLm9wdGlvbnMubWFwKFxuICAgICAgICAgICAgKG9wdGlvbikgPT4gaHRtbGBcbiAgICAgICAgICAgICAgPHBhcGVyLWl0ZW0+JHtvcHRpb259PC9wYXBlci1pdGVtPlxuICAgICAgICAgICAgYFxuICAgICAgICAgICl9XG4gICAgICAgIDwvcGFwZXItbGlzdGJveD5cbiAgICAgIDwvcGFwZXItZHJvcGRvd24tbWVudS1saWdodD5cbiAgICBgO1xuICB9XG5cbiAgcHJvdGVjdGVkIHVwZGF0ZWQoY2hhbmdlZFByb3BzOiBQcm9wZXJ0eVZhbHVlcykge1xuICAgIHN1cGVyLnVwZGF0ZWQoY2hhbmdlZFByb3BzKTtcbiAgICAvLyBVcGRhdGUgc2VsZWN0ZWQgYWZ0ZXIgcmVuZGVyaW5nIHRoZSBpdGVtcyBvciBlbHNlIGl0IHdvbid0IHdvcmsgaW4gRmlyZWZveFxuICAgIHRoaXMuc2hhZG93Um9vdCEucXVlcnlTZWxlY3RvcihcbiAgICAgIFwicGFwZXItbGlzdGJveFwiXG4gICAgKSEuc2VsZWN0ZWQgPSB0aGlzLnN0YXRlT2JqLmF0dHJpYnV0ZXMub3B0aW9ucy5pbmRleE9mKHRoaXMuc3RhdGVPYmouc3RhdGUpO1xuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBfc2VsZWN0ZWRPcHRpb25DaGFuZ2VkKFxuICAgIGV2OiBQb2x5bWVySXJvblNlbGVjdEV2ZW50PFBhcGVySXRlbUVsZW1lbnQ+XG4gICkge1xuICAgIGNvbnN0IG9wdGlvbiA9IGV2LmRldGFpbC5pdGVtLmlubmVyVGV4dC50cmltKCk7XG4gICAgaWYgKG9wdGlvbiA9PT0gdGhpcy5zdGF0ZU9iai5zdGF0ZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBhd2FpdCBzZXRJbnB1dFNlbGVjdE9wdGlvbih0aGlzLmhhc3MsIHRoaXMuc3RhdGVPYmouZW50aXR5X2lkLCBvcHRpb24pO1xuICB9XG5cbiAgc3RhdGljIGdldCBzdHlsZXMoKTogQ1NTUmVzdWx0IHtcbiAgICByZXR1cm4gY3NzYFxuICAgICAgOmhvc3Qge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIH1cblxuICAgICAgc3RhdGUtYmFkZ2Uge1xuICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgIH1cblxuICAgICAgcGFwZXItZHJvcGRvd24tbWVudS1saWdodCB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBtYXJnaW4tbGVmdDogNTNweDtcbiAgICAgIH1cblxuICAgICAgcGFwZXItaXRlbSB7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgbWluLXdpZHRoOiAyMDBweDtcbiAgICAgIH1cbiAgICBgO1xuICB9XG59XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIEhUTUxFbGVtZW50VGFnTmFtZU1hcCB7XG4gICAgXCJzdGF0ZS1jYXJkLWlucHV0X3NlbGVjdFwiOiBTdGF0ZUNhcmRJbnB1dFNlbGVjdDtcbiAgfVxufVxuIiwiaW1wb3J0IFwiQHBvbHltZXIvaXJvbi1mbGV4LWxheW91dC9pcm9uLWZsZXgtbGF5b3V0LWNsYXNzZXNcIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWlucHV0L3BhcGVyLWlucHV0XCI7XG5pbXBvcnQgeyBodG1sIH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2h0bWwtdGFnXCI7XG5pbXBvcnQgeyBQb2x5bWVyRWxlbWVudCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL3BvbHltZXItZWxlbWVudFwiO1xuXG5pbXBvcnQgXCIuLi9jb21wb25lbnRzL2VudGl0eS9zdGF0ZS1pbmZvXCI7XG5cbmNsYXNzIFN0YXRlQ2FyZElucHV0VGV4dCBleHRlbmRzIFBvbHltZXJFbGVtZW50IHtcbiAgc3RhdGljIGdldCB0ZW1wbGF0ZSgpIHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxzdHlsZSBpbmNsdWRlPVwiaXJvbi1mbGV4IGlyb24tZmxleC1hbGlnbm1lbnRcIj48L3N0eWxlPlxuICAgICAgPHN0eWxlPlxuICAgICAgICBwYXBlci1pbnB1dCB7XG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDE2cHg7XG4gICAgICAgIH1cbiAgICAgIDwvc3R5bGU+XG5cbiAgICAgIDxkaXYgY2xhc3M9XCJob3Jpem9udGFsIGp1c3RpZmllZCBsYXlvdXRcIj5cbiAgICAgICAgJHt0aGlzLnN0YXRlSW5mb1RlbXBsYXRlfVxuICAgICAgICA8cGFwZXItaW5wdXRcbiAgICAgICAgICBuby1sYWJlbC1mbG9hdD1cIlwiXG4gICAgICAgICAgbWlubGVuZ3RoPVwiW1tzdGF0ZU9iai5hdHRyaWJ1dGVzLm1pbl1dXCJcbiAgICAgICAgICBtYXhsZW5ndGg9XCJbW3N0YXRlT2JqLmF0dHJpYnV0ZXMubWF4XV1cIlxuICAgICAgICAgIHZhbHVlPVwie3t2YWx1ZX19XCJcbiAgICAgICAgICBhdXRvLXZhbGlkYXRlPVwiW1tzdGF0ZU9iai5hdHRyaWJ1dGVzLnBhdHRlcm5dXVwiXG4gICAgICAgICAgcGF0dGVybj1cIltbc3RhdGVPYmouYXR0cmlidXRlcy5wYXR0ZXJuXV1cIlxuICAgICAgICAgIHR5cGU9XCJbW3N0YXRlT2JqLmF0dHJpYnV0ZXMubW9kZV1dXCJcbiAgICAgICAgICBvbi1jaGFuZ2U9XCJzZWxlY3RlZFZhbHVlQ2hhbmdlZFwiXG4gICAgICAgICAgb24tY2xpY2s9XCJzdG9wUHJvcGFnYXRpb25cIlxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiKGVtcHR5IHZhbHVlKVwiXG4gICAgICAgID5cbiAgICAgICAgPC9wYXBlci1pbnB1dD5cbiAgICAgIDwvZGl2PlxuICAgIGA7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHN0YXRlSW5mb1RlbXBsYXRlKCkge1xuICAgIHJldHVybiBodG1sYFxuICAgICAgPHN0YXRlLWluZm9cbiAgICAgICAgaGFzcz1cIltbaGFzc11dXCJcbiAgICAgICAgc3RhdGUtb2JqPVwiW1tzdGF0ZU9ial1dXCJcbiAgICAgICAgaW4tZGlhbG9nPVwiW1tpbkRpYWxvZ11dXCJcbiAgICAgID48L3N0YXRlLWluZm8+XG4gICAgYDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaGFzczogT2JqZWN0LFxuXG4gICAgICBpbkRpYWxvZzoge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICB2YWx1ZTogZmFsc2UsXG4gICAgICB9LFxuXG4gICAgICBzdGF0ZU9iajoge1xuICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICAgIG9ic2VydmVyOiBcInN0YXRlT2JqZWN0Q2hhbmdlZFwiLFxuICAgICAgfSxcblxuICAgICAgcGF0dGVybjogU3RyaW5nLFxuICAgICAgdmFsdWU6IFN0cmluZyxcbiAgICB9O1xuICB9XG5cbiAgc3RhdGVPYmplY3RDaGFuZ2VkKG5ld1ZhbCkge1xuICAgIHRoaXMudmFsdWUgPSBuZXdWYWwuc3RhdGU7XG4gIH1cblxuICBzZWxlY3RlZFZhbHVlQ2hhbmdlZCgpIHtcbiAgICBpZiAodGhpcy52YWx1ZSA9PT0gdGhpcy5zdGF0ZU9iai5zdGF0ZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLmhhc3MuY2FsbFNlcnZpY2UoXCJpbnB1dF90ZXh0XCIsIFwic2V0X3ZhbHVlXCIsIHtcbiAgICAgIHZhbHVlOiB0aGlzLnZhbHVlLFxuICAgICAgZW50aXR5X2lkOiB0aGlzLnN0YXRlT2JqLmVudGl0eV9pZCxcbiAgICB9KTtcbiAgfVxuXG4gIHN0b3BQcm9wYWdhdGlvbihldikge1xuICAgIGV2LnN0b3BQcm9wYWdhdGlvbigpO1xuICB9XG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcInN0YXRlLWNhcmQtaW5wdXRfdGV4dFwiLCBTdGF0ZUNhcmRJbnB1dFRleHQpO1xuIiwiaW1wb3J0IFwiQHBvbHltZXIvaXJvbi1mbGV4LWxheW91dC9pcm9uLWZsZXgtbGF5b3V0LWNsYXNzZXNcIjtcbmltcG9ydCBcIkBtYXRlcmlhbC9td2MtYnV0dG9uXCI7XG5pbXBvcnQgeyBodG1sIH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2h0bWwtdGFnXCI7XG5pbXBvcnQgeyBQb2x5bWVyRWxlbWVudCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL3BvbHltZXItZWxlbWVudFwiO1xuXG5pbXBvcnQgXCIuLi9jb21wb25lbnRzL2VudGl0eS9zdGF0ZS1pbmZvXCI7XG5cbmltcG9ydCBMb2NhbGl6ZU1peGluIGZyb20gXCIuLi9taXhpbnMvbG9jYWxpemUtbWl4aW5cIjtcblxuLypcbiAqIEBhcHBsaWVzTWl4aW4gTG9jYWxpemVNaXhpblxuICovXG5jbGFzcyBTdGF0ZUNhcmRMb2NrIGV4dGVuZHMgTG9jYWxpemVNaXhpbihQb2x5bWVyRWxlbWVudCkge1xuICBzdGF0aWMgZ2V0IHRlbXBsYXRlKCkge1xuICAgIHJldHVybiBodG1sYFxuICAgICAgPHN0eWxlIGluY2x1ZGU9XCJpcm9uLWZsZXggaXJvbi1mbGV4LWFsaWdubWVudFwiPjwvc3R5bGU+XG4gICAgICA8c3R5bGU+XG4gICAgICAgIG13Yy1idXR0b24ge1xuICAgICAgICAgIHRvcDogM3B4O1xuICAgICAgICAgIGhlaWdodDogMzdweDtcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IC0wLjU3ZW07XG4gICAgICAgIH1cbiAgICAgIDwvc3R5bGU+XG5cbiAgICAgIDxkaXYgY2xhc3M9XCJob3Jpem9udGFsIGp1c3RpZmllZCBsYXlvdXRcIj5cbiAgICAgICAgJHt0aGlzLnN0YXRlSW5mb1RlbXBsYXRlfVxuICAgICAgICA8bXdjLWJ1dHRvblxuICAgICAgICAgIG9uLWNsaWNrPVwiX2NhbGxTZXJ2aWNlXCJcbiAgICAgICAgICBkYXRhLXNlcnZpY2U9XCJ1bmxvY2tcIlxuICAgICAgICAgIGhpZGRlbiQ9XCJbWyFpc0xvY2tlZF1dXCJcbiAgICAgICAgICA+W1tsb2NhbGl6ZSgndWkuY2FyZC5sb2NrLnVubG9jaycpXV08L213Yy1idXR0b25cbiAgICAgICAgPlxuICAgICAgICA8bXdjLWJ1dHRvblxuICAgICAgICAgIG9uLWNsaWNrPVwiX2NhbGxTZXJ2aWNlXCJcbiAgICAgICAgICBkYXRhLXNlcnZpY2U9XCJsb2NrXCJcbiAgICAgICAgICBoaWRkZW4kPVwiW1tpc0xvY2tlZF1dXCJcbiAgICAgICAgICA+W1tsb2NhbGl6ZSgndWkuY2FyZC5sb2NrLmxvY2snKV1dPC9td2MtYnV0dG9uXG4gICAgICAgID5cbiAgICAgIDwvZGl2PlxuICAgIGA7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHN0YXRlSW5mb1RlbXBsYXRlKCkge1xuICAgIHJldHVybiBodG1sYFxuICAgICAgPHN0YXRlLWluZm9cbiAgICAgICAgaGFzcz1cIltbaGFzc11dXCJcbiAgICAgICAgc3RhdGUtb2JqPVwiW1tzdGF0ZU9ial1dXCJcbiAgICAgICAgaW4tZGlhbG9nPVwiW1tpbkRpYWxvZ11dXCJcbiAgICAgID48L3N0YXRlLWluZm8+XG4gICAgYDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaGFzczogT2JqZWN0LFxuICAgICAgc3RhdGVPYmo6IHtcbiAgICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgICBvYnNlcnZlcjogXCJfc3RhdGVPYmpDaGFuZ2VkXCIsXG4gICAgICB9LFxuICAgICAgaW5EaWFsb2c6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgdmFsdWU6IGZhbHNlLFxuICAgICAgfSxcbiAgICAgIGlzTG9ja2VkOiBCb29sZWFuLFxuICAgIH07XG4gIH1cblxuICBfc3RhdGVPYmpDaGFuZ2VkKG5ld1ZhbCkge1xuICAgIGlmIChuZXdWYWwpIHtcbiAgICAgIHRoaXMuaXNMb2NrZWQgPSBuZXdWYWwuc3RhdGUgPT09IFwibG9ja2VkXCI7XG4gICAgfVxuICB9XG5cbiAgX2NhbGxTZXJ2aWNlKGV2KSB7XG4gICAgZXYuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgY29uc3Qgc2VydmljZSA9IGV2LnRhcmdldC5kYXRhc2V0LnNlcnZpY2U7XG4gICAgY29uc3QgZGF0YSA9IHtcbiAgICAgIGVudGl0eV9pZDogdGhpcy5zdGF0ZU9iai5lbnRpdHlfaWQsXG4gICAgfTtcbiAgICB0aGlzLmhhc3MuY2FsbFNlcnZpY2UoXCJsb2NrXCIsIHNlcnZpY2UsIGRhdGEpO1xuICB9XG59XG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJzdGF0ZS1jYXJkLWxvY2tcIiwgU3RhdGVDYXJkTG9jayk7XG4iLCJpbXBvcnQgXCJAcG9seW1lci9pcm9uLWZsZXgtbGF5b3V0L2lyb24tZmxleC1sYXlvdXQtY2xhc3Nlc1wiO1xuaW1wb3J0IHsgaHRtbCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZ1wiO1xuaW1wb3J0IHsgUG9seW1lckVsZW1lbnQgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWVsZW1lbnRcIjtcblxuaW1wb3J0IFwiLi4vY29tcG9uZW50cy9lbnRpdHkvc3RhdGUtaW5mb1wiO1xuaW1wb3J0IExvY2FsaXplTWl4aW4gZnJvbSBcIi4uL21peGlucy9sb2NhbGl6ZS1taXhpblwiO1xuaW1wb3J0IEhhc3NNZWRpYVBsYXllckVudGl0eSBmcm9tIFwiLi4vdXRpbC9oYXNzLW1lZGlhLXBsYXllci1tb2RlbFwiO1xuXG4vKlxuICogQGFwcGxpZXNNaXhpbiBMb2NhbGl6ZU1peGluXG4gKi9cbmNsYXNzIFN0YXRlQ2FyZE1lZGlhUGxheWVyIGV4dGVuZHMgTG9jYWxpemVNaXhpbihQb2x5bWVyRWxlbWVudCkge1xuICBzdGF0aWMgZ2V0IHRlbXBsYXRlKCkge1xuICAgIHJldHVybiBodG1sYFxuICAgICAgPHN0eWxlIGluY2x1ZGU9XCJpcm9uLWZsZXggaXJvbi1mbGV4LWFsaWdubWVudFwiPjwvc3R5bGU+XG4gICAgICA8c3R5bGU+XG4gICAgICAgIDpob3N0IHtcbiAgICAgICAgICBsaW5lLWhlaWdodDogMS41O1xuICAgICAgICB9XG5cbiAgICAgICAgLnN0YXRlIHtcbiAgICAgICAgICBAYXBwbHkgLS1wYXBlci1mb250LWNvbW1vbi1ub3dyYXA7XG4gICAgICAgICAgQGFwcGx5IC0tcGFwZXItZm9udC1ib2R5MTtcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMTZweDtcbiAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5tYWluLXRleHQge1xuICAgICAgICAgIEBhcHBseSAtLXBhcGVyLWZvbnQtY29tbW9uLW5vd3JhcDtcbiAgICAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS10ZXh0LWNvbG9yKTtcbiAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5tYWluLXRleHRbdGFrZS1oZWlnaHRdIHtcbiAgICAgICAgICBsaW5lLWhlaWdodDogNDBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5zZWNvbmRhcnktdGV4dCB7XG4gICAgICAgICAgQGFwcGx5IC0tcGFwZXItZm9udC1jb21tb24tbm93cmFwO1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktdGV4dC1jb2xvcik7XG4gICAgICAgIH1cbiAgICAgIDwvc3R5bGU+XG5cbiAgICAgIDxkaXYgY2xhc3M9XCJob3Jpem9udGFsIGp1c3RpZmllZCBsYXlvdXRcIj5cbiAgICAgICAgJHt0aGlzLnN0YXRlSW5mb1RlbXBsYXRlfVxuICAgICAgICA8ZGl2IGNsYXNzPVwic3RhdGVcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwibWFpbi10ZXh0XCIgdGFrZS1oZWlnaHQkPVwiW1shcGxheWVyT2JqLnNlY29uZGFyeVRpdGxlXV1cIj5cbiAgICAgICAgICAgIFtbY29tcHV0ZVByaW1hcnlUZXh0KGxvY2FsaXplLCBwbGF5ZXJPYmopXV1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwic2Vjb25kYXJ5LXRleHRcIj5bW3BsYXllck9iai5zZWNvbmRhcnlUaXRsZV1dPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgYDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgc3RhdGVJbmZvVGVtcGxhdGUoKSB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8c3RhdGUtaW5mb1xuICAgICAgICBoYXNzPVwiW1toYXNzXV1cIlxuICAgICAgICBzdGF0ZS1vYmo9XCJbW3N0YXRlT2JqXV1cIlxuICAgICAgICBpbi1kaWFsb2c9XCJbW2luRGlhbG9nXV1cIlxuICAgICAgPjwvc3RhdGUtaW5mbz5cbiAgICBgO1xuICB9XG5cbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBoYXNzOiBPYmplY3QsXG4gICAgICBzdGF0ZU9iajogT2JqZWN0LFxuICAgICAgaW5EaWFsb2c6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgdmFsdWU6IGZhbHNlLFxuICAgICAgfSxcbiAgICAgIHBsYXllck9iajoge1xuICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICAgIGNvbXB1dGVkOiBcImNvbXB1dGVQbGF5ZXJPYmooaGFzcywgc3RhdGVPYmopXCIsXG4gICAgICB9LFxuICAgIH07XG4gIH1cblxuICBjb21wdXRlUGxheWVyT2JqKGhhc3MsIHN0YXRlT2JqKSB7XG4gICAgcmV0dXJuIG5ldyBIYXNzTWVkaWFQbGF5ZXJFbnRpdHkoaGFzcywgc3RhdGVPYmopO1xuICB9XG5cbiAgY29tcHV0ZVByaW1hcnlUZXh0KGxvY2FsaXplLCBwbGF5ZXJPYmopIHtcbiAgICByZXR1cm4gKFxuICAgICAgcGxheWVyT2JqLnByaW1hcnlUaXRsZSB8fFxuICAgICAgbG9jYWxpemUoYHN0YXRlLm1lZGlhX3BsYXllci4ke3BsYXllck9iai5zdGF0ZU9iai5zdGF0ZX1gKSB8fFxuICAgICAgbG9jYWxpemUoYHN0YXRlLmRlZmF1bHQuJHtwbGF5ZXJPYmouc3RhdGVPYmouc3RhdGV9YCkgfHxcbiAgICAgIHBsYXllck9iai5zdGF0ZU9iai5zdGF0ZVxuICAgICk7XG4gIH1cbn1cbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcInN0YXRlLWNhcmQtbWVkaWFfcGxheWVyXCIsIFN0YXRlQ2FyZE1lZGlhUGxheWVyKTtcbiIsImltcG9ydCBcIkBwb2x5bWVyL2lyb24tZmxleC1sYXlvdXQvaXJvbi1mbGV4LWxheW91dC1jbGFzc2VzXCI7XG5pbXBvcnQgXCJAbWF0ZXJpYWwvbXdjLWJ1dHRvblwiO1xuaW1wb3J0IHsgaHRtbCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZ1wiO1xuaW1wb3J0IHsgUG9seW1lckVsZW1lbnQgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWVsZW1lbnRcIjtcblxuaW1wb3J0IFwiLi4vY29tcG9uZW50cy9lbnRpdHkvc3RhdGUtaW5mb1wiO1xuaW1wb3J0IExvY2FsaXplTWl4aW4gZnJvbSBcIi4uL21peGlucy9sb2NhbGl6ZS1taXhpblwiO1xuXG4vKlxuICogQGFwcGxpZXNNaXhpbiBMb2NhbGl6ZU1peGluXG4gKi9cbmNsYXNzIFN0YXRlQ2FyZFNjZW5lIGV4dGVuZHMgTG9jYWxpemVNaXhpbihQb2x5bWVyRWxlbWVudCkge1xuICBzdGF0aWMgZ2V0IHRlbXBsYXRlKCkge1xuICAgIHJldHVybiBodG1sYFxuICAgICAgPHN0eWxlIGluY2x1ZGU9XCJpcm9uLWZsZXggaXJvbi1mbGV4LWFsaWdubWVudFwiPjwvc3R5bGU+XG4gICAgICA8c3R5bGU+XG4gICAgICAgIG13Yy1idXR0b24ge1xuICAgICAgICAgIHRvcDogM3B4O1xuICAgICAgICAgIGhlaWdodDogMzdweDtcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IC0wLjU3ZW07XG4gICAgICAgIH1cbiAgICAgIDwvc3R5bGU+XG5cbiAgICAgIDxkaXYgY2xhc3M9XCJob3Jpem9udGFsIGp1c3RpZmllZCBsYXlvdXRcIj5cbiAgICAgICAgJHt0aGlzLnN0YXRlSW5mb1RlbXBsYXRlfVxuICAgICAgICA8bXdjLWJ1dHRvbiBvbi1jbGljaz1cImFjdGl2YXRlU2NlbmVcIlxuICAgICAgICAgID5bW2xvY2FsaXplKCd1aS5jYXJkLnNjZW5lLmFjdGl2YXRlJyldXTwvbXdjLWJ1dHRvblxuICAgICAgICA+XG4gICAgICA8L2Rpdj5cbiAgICBgO1xuICB9XG5cbiAgc3RhdGljIGdldCBzdGF0ZUluZm9UZW1wbGF0ZSgpIHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxzdGF0ZS1pbmZvXG4gICAgICAgIGhhc3M9XCJbW2hhc3NdXVwiXG4gICAgICAgIHN0YXRlLW9iaj1cIltbc3RhdGVPYmpdXVwiXG4gICAgICAgIGluLWRpYWxvZz1cIltbaW5EaWFsb2ddXVwiXG4gICAgICA+PC9zdGF0ZS1pbmZvPlxuICAgIGA7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGhhc3M6IE9iamVjdCxcbiAgICAgIHN0YXRlT2JqOiBPYmplY3QsXG4gICAgICBpbkRpYWxvZzoge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICB2YWx1ZTogZmFsc2UsXG4gICAgICB9LFxuICAgIH07XG4gIH1cblxuICBhY3RpdmF0ZVNjZW5lKGV2KSB7XG4gICAgZXYuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgdGhpcy5oYXNzLmNhbGxTZXJ2aWNlKFwic2NlbmVcIiwgXCJ0dXJuX29uXCIsIHtcbiAgICAgIGVudGl0eV9pZDogdGhpcy5zdGF0ZU9iai5lbnRpdHlfaWQsXG4gICAgfSk7XG4gIH1cbn1cbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcInN0YXRlLWNhcmQtc2NlbmVcIiwgU3RhdGVDYXJkU2NlbmUpO1xuIiwiaW1wb3J0IFwiQHBvbHltZXIvaXJvbi1mbGV4LWxheW91dC9pcm9uLWZsZXgtbGF5b3V0LWNsYXNzZXNcIjtcbmltcG9ydCBcIkBtYXRlcmlhbC9td2MtYnV0dG9uXCI7XG5pbXBvcnQgeyBodG1sIH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2h0bWwtdGFnXCI7XG5pbXBvcnQgeyBQb2x5bWVyRWxlbWVudCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL3BvbHltZXItZWxlbWVudFwiO1xuXG5pbXBvcnQgXCIuLi9jb21wb25lbnRzL2VudGl0eS9oYS1lbnRpdHktdG9nZ2xlXCI7XG5pbXBvcnQgXCIuLi9jb21wb25lbnRzL2VudGl0eS9zdGF0ZS1pbmZvXCI7XG5cbmltcG9ydCBMb2NhbGl6ZU1peGluIGZyb20gXCIuLi9taXhpbnMvbG9jYWxpemUtbWl4aW5cIjtcblxuLypcbiAqIEBhcHBsaWVzTWl4aW4gTG9jYWxpemVNaXhpblxuICovXG5jbGFzcyBTdGF0ZUNhcmRTY3JpcHQgZXh0ZW5kcyBMb2NhbGl6ZU1peGluKFBvbHltZXJFbGVtZW50KSB7XG4gIHN0YXRpYyBnZXQgdGVtcGxhdGUoKSB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8c3R5bGUgaW5jbHVkZT1cImlyb24tZmxleCBpcm9uLWZsZXgtYWxpZ25tZW50XCI+PC9zdHlsZT5cbiAgICAgIDxzdHlsZT5cbiAgICAgICAgbXdjLWJ1dHRvbiB7XG4gICAgICAgICAgdG9wOiAzcHg7XG4gICAgICAgICAgaGVpZ2h0OiAzN3B4O1xuICAgICAgICAgIG1hcmdpbi1yaWdodDogLTAuNTdlbTtcbiAgICAgICAgfVxuXG4gICAgICAgIGhhLWVudGl0eS10b2dnbGUge1xuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxNnB4O1xuICAgICAgICB9XG4gICAgICA8L3N0eWxlPlxuXG4gICAgICA8ZGl2IGNsYXNzPVwiaG9yaXpvbnRhbCBqdXN0aWZpZWQgbGF5b3V0XCI+XG4gICAgICAgICR7dGhpcy5zdGF0ZUluZm9UZW1wbGF0ZX1cbiAgICAgICAgPHRlbXBsYXRlIGlzPVwiZG9tLWlmXCIgaWY9XCJbW3N0YXRlT2JqLmF0dHJpYnV0ZXMuY2FuX2NhbmNlbF1dXCI+XG4gICAgICAgICAgPGhhLWVudGl0eS10b2dnbGVcbiAgICAgICAgICAgIHN0YXRlLW9iaj1cIltbc3RhdGVPYmpdXVwiXG4gICAgICAgICAgICBoYXNzPVwiW1toYXNzXV1cIlxuICAgICAgICAgID48L2hhLWVudGl0eS10b2dnbGU+XG4gICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgIDx0ZW1wbGF0ZSBpcz1cImRvbS1pZlwiIGlmPVwiW1shc3RhdGVPYmouYXR0cmlidXRlcy5jYW5fY2FuY2VsXV1cIj5cbiAgICAgICAgICA8bXdjLWJ1dHRvbiBvbi1jbGljaz1cImZpcmVTY3JpcHRcIlxuICAgICAgICAgICAgPltbbG9jYWxpemUoJ3VpLmNhcmQuc2NyaXB0LmV4ZWN1dGUnKV1dPC9td2MtYnV0dG9uXG4gICAgICAgICAgPlxuICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgPC9kaXY+XG4gICAgYDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgc3RhdGVJbmZvVGVtcGxhdGUoKSB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8c3RhdGUtaW5mb1xuICAgICAgICBoYXNzPVwiW1toYXNzXV1cIlxuICAgICAgICBzdGF0ZS1vYmo9XCJbW3N0YXRlT2JqXV1cIlxuICAgICAgICBpbi1kaWFsb2c9XCJbW2luRGlhbG9nXV1cIlxuICAgICAgPjwvc3RhdGUtaW5mbz5cbiAgICBgO1xuICB9XG5cbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBoYXNzOiBPYmplY3QsXG4gICAgICBzdGF0ZU9iajogT2JqZWN0LFxuICAgICAgaW5EaWFsb2c6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgdmFsdWU6IGZhbHNlLFxuICAgICAgfSxcbiAgICB9O1xuICB9XG5cbiAgZmlyZVNjcmlwdChldikge1xuICAgIGV2LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIHRoaXMuaGFzcy5jYWxsU2VydmljZShcInNjcmlwdFwiLCBcInR1cm5fb25cIiwge1xuICAgICAgZW50aXR5X2lkOiB0aGlzLnN0YXRlT2JqLmVudGl0eV9pZCxcbiAgICB9KTtcbiAgfVxufVxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwic3RhdGUtY2FyZC1zY3JpcHRcIiwgU3RhdGVDYXJkU2NyaXB0KTtcbiIsImltcG9ydCBcIkBwb2x5bWVyL2lyb24tZmxleC1sYXlvdXQvaXJvbi1mbGV4LWxheW91dC1jbGFzc2VzXCI7XG5pbXBvcnQgeyBodG1sIH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2h0bWwtdGFnXCI7XG5pbXBvcnQgeyBQb2x5bWVyRWxlbWVudCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL3BvbHltZXItZWxlbWVudFwiO1xuXG5pbXBvcnQgXCIuLi9jb21wb25lbnRzL2VudGl0eS9zdGF0ZS1pbmZvXCI7XG5cbmltcG9ydCB7IHRpbWVyVGltZVJlbWFpbmluZyB9IGZyb20gXCIuLi9jb21tb24vZW50aXR5L3RpbWVyX3RpbWVfcmVtYWluaW5nXCI7XG5pbXBvcnQgc2Vjb25kc1RvRHVyYXRpb24gZnJvbSBcIi4uL2NvbW1vbi9kYXRldGltZS9zZWNvbmRzX3RvX2R1cmF0aW9uXCI7XG5cbmNsYXNzIFN0YXRlQ2FyZFRpbWVyIGV4dGVuZHMgUG9seW1lckVsZW1lbnQge1xuICBzdGF0aWMgZ2V0IHRlbXBsYXRlKCkge1xuICAgIHJldHVybiBodG1sYFxuICAgICAgPHN0eWxlIGluY2x1ZGU9XCJpcm9uLWZsZXggaXJvbi1mbGV4LWFsaWdubWVudFwiPjwvc3R5bGU+XG4gICAgICA8c3R5bGU+XG4gICAgICAgIC5zdGF0ZSB7XG4gICAgICAgICAgQGFwcGx5IC0tcGFwZXItZm9udC1ib2R5MTtcbiAgICAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS10ZXh0LWNvbG9yKTtcblxuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxNnB4O1xuICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xuICAgICAgICB9XG4gICAgICA8L3N0eWxlPlxuXG4gICAgICA8ZGl2IGNsYXNzPVwiaG9yaXpvbnRhbCBqdXN0aWZpZWQgbGF5b3V0XCI+XG4gICAgICAgICR7dGhpcy5zdGF0ZUluZm9UZW1wbGF0ZX1cbiAgICAgICAgPGRpdiBjbGFzcz1cInN0YXRlXCI+W1tfc2Vjb25kc1RvRHVyYXRpb24odGltZVJlbWFpbmluZyldXTwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgYDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgc3RhdGVJbmZvVGVtcGxhdGUoKSB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8c3RhdGUtaW5mb1xuICAgICAgICBoYXNzPVwiW1toYXNzXV1cIlxuICAgICAgICBzdGF0ZS1vYmo9XCJbW3N0YXRlT2JqXV1cIlxuICAgICAgICBpbi1kaWFsb2c9XCJbW2luRGlhbG9nXV1cIlxuICAgICAgPjwvc3RhdGUtaW5mbz5cbiAgICBgO1xuICB9XG5cbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBoYXNzOiBPYmplY3QsXG4gICAgICBzdGF0ZU9iajoge1xuICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICAgIG9ic2VydmVyOiBcInN0YXRlT2JqQ2hhbmdlZFwiLFxuICAgICAgfSxcbiAgICAgIHRpbWVSZW1haW5pbmc6IE51bWJlcixcbiAgICAgIGluRGlhbG9nOiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIHZhbHVlOiBmYWxzZSxcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxuXG4gIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIHN1cGVyLmNvbm5lY3RlZENhbGxiYWNrKCk7XG4gICAgdGhpcy5zdGFydEludGVydmFsKHRoaXMuc3RhdGVPYmopO1xuICB9XG5cbiAgZGlzY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgc3VwZXIuZGlzY29ubmVjdGVkQ2FsbGJhY2soKTtcbiAgICB0aGlzLmNsZWFySW50ZXJ2YWwoKTtcbiAgfVxuXG4gIHN0YXRlT2JqQ2hhbmdlZChzdGF0ZU9iaikge1xuICAgIHRoaXMuc3RhcnRJbnRlcnZhbChzdGF0ZU9iaik7XG4gIH1cblxuICBjbGVhckludGVydmFsKCkge1xuICAgIGlmICh0aGlzLl91cGRhdGVSZW1haW5pbmcpIHtcbiAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5fdXBkYXRlUmVtYWluaW5nKTtcbiAgICAgIHRoaXMuX3VwZGF0ZVJlbWFpbmluZyA9IG51bGw7XG4gICAgfVxuICB9XG5cbiAgc3RhcnRJbnRlcnZhbChzdGF0ZU9iaikge1xuICAgIHRoaXMuY2xlYXJJbnRlcnZhbCgpO1xuICAgIHRoaXMuY2FsY3VsYXRlUmVtYWluaW5nKHN0YXRlT2JqKTtcblxuICAgIGlmIChzdGF0ZU9iai5zdGF0ZSA9PT0gXCJhY3RpdmVcIikge1xuICAgICAgdGhpcy5fdXBkYXRlUmVtYWluaW5nID0gc2V0SW50ZXJ2YWwoXG4gICAgICAgICgpID0+IHRoaXMuY2FsY3VsYXRlUmVtYWluaW5nKHRoaXMuc3RhdGVPYmopLFxuICAgICAgICAxMDAwXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIGNhbGN1bGF0ZVJlbWFpbmluZyhzdGF0ZU9iaikge1xuICAgIHRoaXMudGltZVJlbWFpbmluZyA9IHRpbWVyVGltZVJlbWFpbmluZyhzdGF0ZU9iaik7XG4gIH1cblxuICBfc2Vjb25kc1RvRHVyYXRpb24odGltZSkge1xuICAgIHJldHVybiBzZWNvbmRzVG9EdXJhdGlvbih0aW1lKTtcbiAgfVxufVxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwic3RhdGUtY2FyZC10aW1lclwiLCBTdGF0ZUNhcmRUaW1lcik7XG4iLCJpbXBvcnQgXCJAcG9seW1lci9pcm9uLWZsZXgtbGF5b3V0L2lyb24tZmxleC1sYXlvdXQtY2xhc3Nlc1wiO1xuaW1wb3J0IHsgaHRtbCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZ1wiO1xuaW1wb3J0IHsgUG9seW1lckVsZW1lbnQgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWVsZW1lbnRcIjtcblxuaW1wb3J0IFwiLi4vY29tcG9uZW50cy9lbnRpdHkvaGEtZW50aXR5LXRvZ2dsZVwiO1xuaW1wb3J0IFwiLi4vY29tcG9uZW50cy9lbnRpdHkvc3RhdGUtaW5mb1wiO1xuXG5jbGFzcyBTdGF0ZUNhcmRUb2dnbGUgZXh0ZW5kcyBQb2x5bWVyRWxlbWVudCB7XG4gIHN0YXRpYyBnZXQgdGVtcGxhdGUoKSB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8c3R5bGUgaW5jbHVkZT1cImlyb24tZmxleCBpcm9uLWZsZXgtYWxpZ25tZW50XCI+PC9zdHlsZT5cbiAgICAgIDxzdHlsZT5cbiAgICAgICAgaGEtZW50aXR5LXRvZ2dsZSB7XG4gICAgICAgICAgbWFyZ2luOiAtNHB4IC0xNnB4IC00cHggMDtcbiAgICAgICAgICBwYWRkaW5nOiA0cHggMTZweDtcbiAgICAgICAgfVxuICAgICAgPC9zdHlsZT5cblxuICAgICAgPGRpdiBjbGFzcz1cImhvcml6b250YWwganVzdGlmaWVkIGxheW91dFwiPlxuICAgICAgICAke3RoaXMuc3RhdGVJbmZvVGVtcGxhdGV9XG4gICAgICAgIDxoYS1lbnRpdHktdG9nZ2xlXG4gICAgICAgICAgc3RhdGUtb2JqPVwiW1tzdGF0ZU9ial1dXCJcbiAgICAgICAgICBoYXNzPVwiW1toYXNzXV1cIlxuICAgICAgICA+PC9oYS1lbnRpdHktdG9nZ2xlPlxuICAgICAgPC9kaXY+XG4gICAgYDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgc3RhdGVJbmZvVGVtcGxhdGUoKSB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8c3RhdGUtaW5mb1xuICAgICAgICBoYXNzPVwiW1toYXNzXV1cIlxuICAgICAgICBzdGF0ZS1vYmo9XCJbW3N0YXRlT2JqXV1cIlxuICAgICAgICBpbi1kaWFsb2c9XCJbW2luRGlhbG9nXV1cIlxuICAgICAgPjwvc3RhdGUtaW5mbz5cbiAgICBgO1xuICB9XG5cbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBoYXNzOiBPYmplY3QsXG4gICAgICBzdGF0ZU9iajogT2JqZWN0LFxuICAgICAgaW5EaWFsb2c6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgdmFsdWU6IGZhbHNlLFxuICAgICAgfSxcbiAgICB9O1xuICB9XG59XG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJzdGF0ZS1jYXJkLXRvZ2dsZVwiLCBTdGF0ZUNhcmRUb2dnbGUpO1xuIiwiaW1wb3J0IFwiQHBvbHltZXIvaXJvbi1mbGV4LWxheW91dC9pcm9uLWZsZXgtbGF5b3V0LWNsYXNzZXNcIjtcbmltcG9ydCB7IGh0bWwgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvaHRtbC10YWdcIjtcbmltcG9ydCB7IFBvbHltZXJFbGVtZW50IH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvcG9seW1lci1lbGVtZW50XCI7XG5cbmltcG9ydCBcIi4uL2NvbXBvbmVudHMvZW50aXR5L3N0YXRlLWluZm9cIjtcbmltcG9ydCBcIi4uL2NvbXBvbmVudHMvaGEtdmFjdXVtLXN0YXRlXCI7XG5cbmNsYXNzIFN0YXRlQ2FyZFZhY3V1bSBleHRlbmRzIFBvbHltZXJFbGVtZW50IHtcbiAgc3RhdGljIGdldCB0ZW1wbGF0ZSgpIHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxzdHlsZSBpbmNsdWRlPVwiaXJvbi1mbGV4IGlyb24tZmxleC1hbGlnbm1lbnRcIj48L3N0eWxlPlxuXG4gICAgICA8ZGl2IGNsYXNzPVwiaG9yaXpvbnRhbCBqdXN0aWZpZWQgbGF5b3V0XCI+XG4gICAgICAgICR7dGhpcy5zdGF0ZUluZm9UZW1wbGF0ZX1cbiAgICAgICAgPGhhLXZhY3V1bS1zdGF0ZVxuICAgICAgICAgIGhhc3M9XCJbW2hhc3NdXVwiXG4gICAgICAgICAgc3RhdGUtb2JqPVwiW1tzdGF0ZU9ial1dXCJcbiAgICAgICAgPjwvaGEtdmFjdXVtLXN0YXRlPlxuICAgICAgPC9kaXY+XG4gICAgYDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgc3RhdGVJbmZvVGVtcGxhdGUoKSB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8c3RhdGUtaW5mb1xuICAgICAgICBoYXNzPVwiW1toYXNzXV1cIlxuICAgICAgICBzdGF0ZS1vYmo9XCJbW3N0YXRlT2JqXV1cIlxuICAgICAgICBpbi1kaWFsb2c9XCJbW2luRGlhbG9nXV1cIlxuICAgICAgPjwvc3RhdGUtaW5mbz5cbiAgICBgO1xuICB9XG5cbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBoYXNzOiBPYmplY3QsXG4gICAgICBzdGF0ZU9iajogT2JqZWN0LFxuICAgICAgaW5EaWFsb2c6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgdmFsdWU6IGZhbHNlLFxuICAgICAgfSxcbiAgICB9O1xuICB9XG59XG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJzdGF0ZS1jYXJkLXZhY3V1bVwiLCBTdGF0ZUNhcmRWYWN1dW0pO1xuIiwiaW1wb3J0IFwiQHBvbHltZXIvaXJvbi1mbGV4LWxheW91dC9pcm9uLWZsZXgtbGF5b3V0LWNsYXNzZXNcIjtcbmltcG9ydCB7IGh0bWwgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvaHRtbC10YWdcIjtcbmltcG9ydCB7IFBvbHltZXJFbGVtZW50IH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvcG9seW1lci1lbGVtZW50XCI7XG5cbmltcG9ydCBcIi4uL2NvbXBvbmVudHMvZW50aXR5L3N0YXRlLWluZm9cIjtcbmltcG9ydCBcIi4uL2NvbXBvbmVudHMvaGEtd2F0ZXJfaGVhdGVyLXN0YXRlXCI7XG5cbmNsYXNzIFN0YXRlQ2FyZFdhdGVySGVhdGVyIGV4dGVuZHMgUG9seW1lckVsZW1lbnQge1xuICBzdGF0aWMgZ2V0IHRlbXBsYXRlKCkge1xuICAgIHJldHVybiBodG1sYFxuICAgICAgPHN0eWxlIGluY2x1ZGU9XCJpcm9uLWZsZXggaXJvbi1mbGV4LWFsaWdubWVudFwiPjwvc3R5bGU+XG4gICAgICA8c3R5bGU+XG4gICAgICAgIDpob3N0IHtcbiAgICAgICAgICBAYXBwbHkgLS1wYXBlci1mb250LWJvZHkxO1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG4gICAgICAgIH1cblxuICAgICAgICBoYS13YXRlcl9oZWF0ZXItc3RhdGUge1xuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxNnB4O1xuICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgICB9XG4gICAgICA8L3N0eWxlPlxuXG4gICAgICA8ZGl2IGNsYXNzPVwiaG9yaXpvbnRhbCBqdXN0aWZpZWQgbGF5b3V0XCI+XG4gICAgICAgICR7dGhpcy5zdGF0ZUluZm9UZW1wbGF0ZX1cbiAgICAgICAgPGhhLXdhdGVyX2hlYXRlci1zdGF0ZVxuICAgICAgICAgIGhhc3M9XCJbW2hhc3NdXVwiXG4gICAgICAgICAgc3RhdGUtb2JqPVwiW1tzdGF0ZU9ial1dXCJcbiAgICAgICAgPjwvaGEtd2F0ZXJfaGVhdGVyLXN0YXRlPlxuICAgICAgPC9kaXY+XG4gICAgYDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgc3RhdGVJbmZvVGVtcGxhdGUoKSB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8c3RhdGUtaW5mb1xuICAgICAgICBoYXNzPVwiW1toYXNzXV1cIlxuICAgICAgICBzdGF0ZS1vYmo9XCJbW3N0YXRlT2JqXV1cIlxuICAgICAgICBpbi1kaWFsb2c9XCJbW2luRGlhbG9nXV1cIlxuICAgICAgPjwvc3RhdGUtaW5mbz5cbiAgICBgO1xuICB9XG5cbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBoYXNzOiBPYmplY3QsXG4gICAgICBzdGF0ZU9iajogT2JqZWN0LFxuICAgICAgaW5EaWFsb2c6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgdmFsdWU6IGZhbHNlLFxuICAgICAgfSxcbiAgICB9O1xuICB9XG59XG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJzdGF0ZS1jYXJkLXdhdGVyX2hlYXRlclwiLCBTdGF0ZUNhcmRXYXRlckhlYXRlcik7XG4iLCJpbXBvcnQgeyBodG1sIH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2h0bWwtdGFnXCI7XG5pbXBvcnQgeyBQb2x5bWVyRWxlbWVudCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL3BvbHltZXItZWxlbWVudFwiO1xuXG5pbXBvcnQgXCIuLi9jb21wb25lbnRzL2VudGl0eS9zdGF0ZS1iYWRnZVwiO1xuXG5pbXBvcnQgeyBjb21wdXRlU3RhdGVOYW1lIH0gZnJvbSBcIi4uL2NvbW1vbi9lbnRpdHkvY29tcHV0ZV9zdGF0ZV9uYW1lXCI7XG5cbmNsYXNzIFN0YXRlQ2FyZFdlYmxpbmsgZXh0ZW5kcyBQb2x5bWVyRWxlbWVudCB7XG4gIHN0YXRpYyBnZXQgdGVtcGxhdGUoKSB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8c3R5bGU+XG4gICAgICAgIDpob3N0IHtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgfVxuICAgICAgICAubmFtZSB7XG4gICAgICAgICAgQGFwcGx5IC0tcGFwZXItZm9udC1jb21tb24tbm93cmFwO1xuICAgICAgICAgIEBhcHBseSAtLXBhcGVyLWZvbnQtYm9keTE7XG4gICAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xuXG4gICAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDQwcHg7XG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDE2cHg7XG4gICAgICAgIH1cbiAgICAgIDwvc3R5bGU+XG5cbiAgICAgICR7dGhpcy5zdGF0ZUJhZGdlVGVtcGxhdGV9XG4gICAgICA8YSBocmVmJD1cIltbc3RhdGVPYmouc3RhdGVdXVwiIHRhcmdldD1cIl9ibGFua1wiIGNsYXNzPVwibmFtZVwiIGlkPVwibGlua1wiXG4gICAgICAgID5bW19jb21wdXRlU3RhdGVOYW1lKHN0YXRlT2JqKV1dPC9hXG4gICAgICA+XG4gICAgYDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgc3RhdGVCYWRnZVRlbXBsYXRlKCkge1xuICAgIHJldHVybiBodG1sYFxuICAgICAgPHN0YXRlLWJhZGdlIHN0YXRlLW9iaj1cIltbc3RhdGVPYmpdXVwiPjwvc3RhdGUtYmFkZ2U+XG4gICAgYDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgc3RhdGVPYmo6IE9iamVjdCxcbiAgICAgIGluRGlhbG9nOiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIHZhbHVlOiBmYWxzZSxcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxuXG4gIHJlYWR5KCkge1xuICAgIHN1cGVyLnJlYWR5KCk7XG4gICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2KSA9PiB0aGlzLm9uVGFwKGV2KSk7XG4gIH1cblxuICBfY29tcHV0ZVN0YXRlTmFtZShzdGF0ZU9iaikge1xuICAgIHJldHVybiBjb21wdXRlU3RhdGVOYW1lKHN0YXRlT2JqKTtcbiAgfVxuXG4gIG9uVGFwKGV2KSB7XG4gICAgZXYuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgZXYucHJldmVudERlZmF1bHQoKTtcbiAgICB3aW5kb3cub3Blbih0aGlzLnN0YXRlT2JqLnN0YXRlLCBcIl9ibGFua1wiKTtcbiAgfVxufVxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwic3RhdGUtY2FyZC13ZWJsaW5rXCIsIFN0YXRlQ2FyZFdlYmxpbmspO1xuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBOzs7O0FBR0E7Ozs7Ozs7Ozs7Ozs7QUErRUE7QUFDQTtBQUNBO0FBQUE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTs7O0FBbkhBO0FBQ0E7QUFtREE7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFGQTtBQVpBO0FBcUJBOzs7O0FBN0VBO0FBQ0E7QUFxSEE7Ozs7Ozs7Ozs7OztBQ25JQTtBQUFBO0FBQUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUM5QkE7QUFBQTtBQUFBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNiQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNkQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNmQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ3RCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZEE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFGQTtBQXJCQTtBQTJCQTs7OztBQUdBOzs7Ozs7Ozs7Ozs7O0FBaUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUtBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBOzs7QUFqREE7QUFDQTtBQWlCQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUhBO0FBU0E7Ozs7QUEvQkE7QUFDQTtBQW1EQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hGQTtBQUNBO0FBRUE7QUFFQTs7OztBQUdBOzs7Ozs7Ozs7Ozs7O0FBNkNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFHQTtBQUNBO0FBQUE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQWxFQTtBQUNBO0FBa0NBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7Ozs7QUEzQ0E7QUFDQTtBQW9FQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdFQTtBQUVBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FBRkE7QUFrQkE7QUFDQTtBQUNBO0FBcEJBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFzQkE7OztBQUVBO0FBQ0E7QUFPQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUhBO0FBUUE7Ozs7QUE3Q0E7QUFDQTtBQThDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0REE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7Ozs7QUFHQTs7Ozs7Ozs7Ozs7OztBQStDQTtBQUNBO0FBQ0E7OztBQWhEQTtBQUNBO0FBc0JBOzs7QUFFQTtBQUNBO0FBT0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFIQTtBQVFBOzs7O0FBN0NBO0FBQ0E7QUFrREE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL0RBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQWdCQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTs7O0FBNUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFIQTtBQVFBOzs7QUFFQTtBQUNBO0FBQ0E7Ozs7QUFkQTtBQUNBO0FBOEJBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyREE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FBcURBO0FBQ0E7QUFDQTtBQUNBOzs7QUF2REE7QUFDQTtBQXdCQTs7O0FBRUE7QUFDQTtBQU9BOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBRkE7QUFQQTtBQVlBOzs7O0FBbkRBO0FBQ0E7QUF5REE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBOzs7O0FBR0E7Ozs7Ozs7Ozs7Ozs7QUF1RUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBSUE7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFwRkE7QUFDQTtBQXlDQTs7O0FBRUE7QUFDQTtBQU9BOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQVBBO0FBYUE7Ozs7QUFyRUE7QUFDQTtBQXNGQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0R0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUFtRkE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQXVDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVJBO0FBQ0E7QUFTQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7OztBQUVBO0FBQ0E7QUFDQTs7O0FBektBO0FBQ0E7QUFrRUE7OztBQUVBO0FBQ0E7QUFPQTs7O0FBZ0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBaENBO0FBa0NBOzs7O0FBcElBO0FBQ0E7QUErS0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMUxBO0FBVUE7QUFDQTtBQUdBO0FBRUE7QUFFQTtBQUVBO0FBRUE7QUFHQTtBQUFBO0FBQUE7O0FBZ0VBO0FBNURBO0FBQ0E7QUFhQTtBQUlBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUVBOzs7Ozs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUFBOzs7OztBQUNBO0FBRUE7QUFBQTtBQUNBO0FBb0JBOzs7QUFBQTtBQTlEQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFGQTtBQURBO0FBQ0E7QUFnRUE7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekZBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FBMERBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7OztBQUVBO0FBQ0E7QUFDQTs7O0FBekVBO0FBQ0E7QUF5QkE7OztBQUVBO0FBQ0E7QUFPQTs7O0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFkQTtBQWdCQTs7OztBQXhEQTtBQUNBO0FBNEVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BGQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFFQTs7OztBQUdBOzs7Ozs7Ozs7Ozs7O0FBdURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7OztBQW5FQTtBQUNBO0FBMEJBOzs7QUFFQTtBQUNBO0FBT0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQVZBO0FBWUE7Ozs7QUFyREE7QUFDQTtBQXFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7Ozs7QUFHQTs7Ozs7Ozs7Ozs7OztBQXFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFNQTs7O0FBL0VBO0FBQ0E7QUF3Q0E7OztBQUVBO0FBQ0E7QUFPQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUZBO0FBUEE7QUFZQTs7OztBQW5FQTtBQUNBO0FBaUZBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdGQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTs7OztBQUdBOzs7Ozs7Ozs7Ozs7O0FBMENBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTs7O0FBOUNBO0FBQ0E7QUFpQkE7OztBQUVBO0FBQ0E7QUFPQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUhBO0FBUUE7Ozs7QUF4Q0E7QUFDQTtBQWdEQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNURBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBRUE7Ozs7QUFHQTs7Ozs7Ozs7Ozs7OztBQXNEQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7OztBQTFEQTtBQUNBO0FBNkJBOzs7QUFFQTtBQUNBO0FBT0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFIQTtBQVFBOzs7O0FBcERBO0FBQ0E7QUE0REE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FBK0NBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFHQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBckZBO0FBQ0E7QUFrQkE7OztBQUVBO0FBQ0E7QUFPQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBUEE7QUFZQTs7OztBQTdDQTtBQUNBO0FBdUZBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakdBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQWlCQTs7O0FBRUE7QUFDQTtBQU9BOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSEE7QUFRQTs7OztBQXhDQTtBQUNBO0FBeUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakRBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQVdBOzs7QUFFQTtBQUNBO0FBT0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFIQTtBQVFBOzs7O0FBbENBO0FBQ0E7QUFtQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBc0JBOzs7QUFFQTtBQUNBO0FBT0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFIQTtBQVFBOzs7O0FBN0NBO0FBQ0E7QUE4Q0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0REE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FBeUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFyREE7QUFDQTtBQXFCQTs7O0FBRUE7QUFDQTtBQUdBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUZBO0FBT0E7Ozs7QUF2Q0E7QUFDQTtBQXVEQTs7OztBIiwic291cmNlUm9vdCI6IiJ9