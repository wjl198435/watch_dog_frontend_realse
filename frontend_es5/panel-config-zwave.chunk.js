(self["webpackJsonp"] = self["webpackJsonp"] || []).push([["panel-config-zwave"],{

/***/ "./node_modules/@polymer/app-layout/app-header-layout/app-header-layout.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@polymer/app-layout/app-header-layout/app-header-layout.js ***!
  \*********************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-legacy.js */ "./node_modules/@polymer/polymer/polymer-legacy.js");
/* harmony import */ var _polymer_iron_flex_layout_iron_flex_layout_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/iron-flex-layout/iron-flex-layout.js */ "./node_modules/@polymer/iron-flex-layout/iron-flex-layout.js");
/* harmony import */ var _polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/lib/legacy/polymer-fn.js */ "./node_modules/@polymer/polymer/lib/legacy/polymer-fn.js");
/* harmony import */ var _polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/polymer/lib/legacy/polymer.dom.js */ "./node_modules/@polymer/polymer/lib/legacy/polymer.dom.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag.js */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _app_layout_behavior_app_layout_behavior_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../app-layout-behavior/app-layout-behavior.js */ "./node_modules/@polymer/app-layout/app-layout-behavior/app-layout-behavior.js");
function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    <style>\n      :host {\n        display: block;\n        /**\n         * Force app-header-layout to have its own stacking context so that its parent can\n         * control the stacking of it relative to other elements (e.g. app-drawer-layout).\n         * This could be done using `isolation: isolate`, but that's not well supported\n         * across browsers.\n         */\n        position: relative;\n        z-index: 0;\n      }\n\n      #wrapper ::slotted([slot=header]) {\n        @apply --layout-fixed-top;\n        z-index: 1;\n      }\n\n      #wrapper.initializing ::slotted([slot=header]) {\n        position: relative;\n      }\n\n      :host([has-scrolling-region]) {\n        height: 100%;\n      }\n\n      :host([has-scrolling-region]) #wrapper ::slotted([slot=header]) {\n        position: absolute;\n      }\n\n      :host([has-scrolling-region]) #wrapper.initializing ::slotted([slot=header]) {\n        position: relative;\n      }\n\n      :host([has-scrolling-region]) #wrapper #contentContainer {\n        @apply --layout-fit;\n        overflow-y: auto;\n        -webkit-overflow-scrolling: touch;\n      }\n\n      :host([has-scrolling-region]) #wrapper.initializing #contentContainer {\n        position: relative;\n      }\n\n      :host([fullbleed]) {\n        @apply --layout-vertical;\n        @apply --layout-fit;\n      }\n\n      :host([fullbleed]) #wrapper,\n      :host([fullbleed]) #wrapper #contentContainer {\n        @apply --layout-vertical;\n        @apply --layout-flex;\n      }\n\n      #contentContainer {\n        /* Create a stacking context here so that all children appear below the header. */\n        position: relative;\n        z-index: 0;\n      }\n\n      @media print {\n        :host([has-scrolling-region]) #wrapper #contentContainer {\n          overflow-y: visible;\n        }\n      }\n\n    </style>\n\n    <div id=\"wrapper\" class=\"initializing\">\n      <slot id=\"headerSlot\" name=\"header\"></slot>\n\n      <div id=\"contentContainer\">\n        <slot></slot>\n      </div>\n    </div>\n"], ["\n    <style>\n      :host {\n        display: block;\n        /**\n         * Force app-header-layout to have its own stacking context so that its parent can\n         * control the stacking of it relative to other elements (e.g. app-drawer-layout).\n         * This could be done using \\`isolation: isolate\\`, but that's not well supported\n         * across browsers.\n         */\n        position: relative;\n        z-index: 0;\n      }\n\n      #wrapper ::slotted([slot=header]) {\n        @apply --layout-fixed-top;\n        z-index: 1;\n      }\n\n      #wrapper.initializing ::slotted([slot=header]) {\n        position: relative;\n      }\n\n      :host([has-scrolling-region]) {\n        height: 100%;\n      }\n\n      :host([has-scrolling-region]) #wrapper ::slotted([slot=header]) {\n        position: absolute;\n      }\n\n      :host([has-scrolling-region]) #wrapper.initializing ::slotted([slot=header]) {\n        position: relative;\n      }\n\n      :host([has-scrolling-region]) #wrapper #contentContainer {\n        @apply --layout-fit;\n        overflow-y: auto;\n        -webkit-overflow-scrolling: touch;\n      }\n\n      :host([has-scrolling-region]) #wrapper.initializing #contentContainer {\n        position: relative;\n      }\n\n      :host([fullbleed]) {\n        @apply --layout-vertical;\n        @apply --layout-fit;\n      }\n\n      :host([fullbleed]) #wrapper,\n      :host([fullbleed]) #wrapper #contentContainer {\n        @apply --layout-vertical;\n        @apply --layout-flex;\n      }\n\n      #contentContainer {\n        /* Create a stacking context here so that all children appear below the header. */\n        position: relative;\n        z-index: 0;\n      }\n\n      @media print {\n        :host([has-scrolling-region]) #wrapper #contentContainer {\n          overflow-y: visible;\n        }\n      }\n\n    </style>\n\n    <div id=\"wrapper\" class=\"initializing\">\n      <slot id=\"headerSlot\" name=\"header\"></slot>\n\n      <div id=\"contentContainer\">\n        <slot></slot>\n      </div>\n    </div>\n"]);

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






/**
app-header-layout is a wrapper element that positions an app-header and other
content. This element uses the document scroll by default, but it can also
define its own scrolling region.

Using the document scroll:

```html
<app-header-layout>
  <app-header slot="header" fixed condenses effects="waterfall">
    <app-toolbar>
      <div main-title>App name</div>
    </app-toolbar>
  </app-header>
  <div>
    main content
  </div>
</app-header-layout>
```

Using an own scrolling region:

```html
<app-header-layout has-scrolling-region style="width: 300px; height: 400px;">
  <app-header slot="header" fixed condenses effects="waterfall">
    <app-toolbar>
      <div main-title>App name</div>
    </app-toolbar>
  </app-header>
  <div>
    main content
  </div>
</app-header-layout>
```

Add the `fullbleed` attribute to app-header-layout to make it fit the size of
its container:

```html
<app-header-layout fullbleed>
 ...
</app-header-layout>
```

@group App Elements
@element app-header-layout
@demo app-header-layout/demo/simple.html Simple Demo
@demo app-header-layout/demo/scrolling-region.html Scrolling Region
@demo app-header-layout/demo/music.html Music Demo
@demo app-header-layout/demo/footer.html Footer Demo
*/

Object(_polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_2__["Polymer"])({
  _template: Object(_polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_4__["html"])(_templateObject()),
  is: 'app-header-layout',
  behaviors: [_app_layout_behavior_app_layout_behavior_js__WEBPACK_IMPORTED_MODULE_5__["AppLayoutBehavior"]],
  properties: {
    /**
     * If true, the current element will have its own scrolling region.
     * Otherwise, it will use the document scroll to control the header.
     */
    hasScrollingRegion: {
      type: Boolean,
      value: false,
      reflectToAttribute: true
    }
  },
  observers: ['resetLayout(isAttached, hasScrollingRegion)'],

  /**
   * A reference to the app-header element.
   *
   * @property header
   */
  get header() {
    return Object(_polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_3__["dom"])(this.$.headerSlot).getDistributedNodes()[0];
  },

  _updateLayoutStates: function _updateLayoutStates() {
    var header = this.header;

    if (!this.isAttached || !header) {
      return;
    } // Remove the initializing class, which staticly positions the header and
    // the content until the height of the header can be read.


    this.$.wrapper.classList.remove('initializing'); // Update scroll target.

    header.scrollTarget = this.hasScrollingRegion ? this.$.contentContainer : this.ownerDocument.documentElement; // Get header height here so that style reads are batched together before
    // style writes (i.e. getBoundingClientRect() below).

    var headerHeight = header.offsetHeight; // Update the header position.

    if (!this.hasScrollingRegion) {
      requestAnimationFrame(function () {
        var rect = this.getBoundingClientRect();
        var rightOffset = document.documentElement.clientWidth - rect.right;
        header.style.left = rect.left + 'px';
        header.style.right = rightOffset + 'px';
      }.bind(this));
    } else {
      header.style.left = '';
      header.style.right = '';
    } // Update the content container position.


    var containerStyle = this.$.contentContainer.style;

    if (header.fixed && !header.condenses && this.hasScrollingRegion) {
      // If the header size does not change and we're using a scrolling region,
      // exclude the header area from the scrolling region so that the header
      // doesn't overlap the scrollbar.
      containerStyle.marginTop = headerHeight + 'px';
      containerStyle.paddingTop = '';
    } else {
      containerStyle.paddingTop = headerHeight + 'px';
      containerStyle.marginTop = '';
    }
  }
});

/***/ }),

/***/ "./src/common/config/is_pwa.ts":
/*!*************************************!*\
  !*** ./src/common/config/is_pwa.ts ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return isPwa; });
/** Return if the displaymode is in standalone mode (PWA). */
function isPwa() {
    return window.matchMedia("(display-mode: standalone)").matches;
}


/***/ }),

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

/***/ "./src/components/ha-service-description.js":
/*!**************************************************!*\
  !*** ./src/components/ha-service-description.js ***!
  \**************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      [[_getDescription(hass, domain, service)]]\n    "]);

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




var HaServiceDescription =
/*#__PURE__*/
function (_PolymerElement) {
  _inherits(HaServiceDescription, _PolymerElement);

  function HaServiceDescription() {
    _classCallCheck(this, HaServiceDescription);

    return _possibleConstructorReturn(this, _getPrototypeOf(HaServiceDescription).apply(this, arguments));
  }

  _createClass(HaServiceDescription, [{
    key: "_getDescription",
    value: function _getDescription(hass, domain, service) {
      var domainServices = hass.services[domain];
      if (!domainServices) return "";
      var serviceObject = domainServices[service];
      if (!serviceObject) return "";
      return serviceObject.description;
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
        domain: String,
        service: String
      };
    }
  }]);

  return HaServiceDescription;
}(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_1__["PolymerElement"]);

customElements.define("ha-service-description", HaServiceDescription);

/***/ }),

/***/ "./src/data/zwave.ts":
/*!***************************!*\
  !*** ./src/data/zwave.ts ***!
  \***************************/
/*! exports provided: ZWAVE_NETWORK_STATE_STOPPED, ZWAVE_NETWORK_STATE_FAILED, ZWAVE_NETWORK_STATE_STARTED, ZWAVE_NETWORK_STATE_AWAKED, ZWAVE_NETWORK_STATE_READY, fetchNetworkStatus, fetchValues, fetchNodeConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZWAVE_NETWORK_STATE_STOPPED", function() { return ZWAVE_NETWORK_STATE_STOPPED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZWAVE_NETWORK_STATE_FAILED", function() { return ZWAVE_NETWORK_STATE_FAILED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZWAVE_NETWORK_STATE_STARTED", function() { return ZWAVE_NETWORK_STATE_STARTED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZWAVE_NETWORK_STATE_AWAKED", function() { return ZWAVE_NETWORK_STATE_AWAKED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZWAVE_NETWORK_STATE_READY", function() { return ZWAVE_NETWORK_STATE_READY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchNetworkStatus", function() { return fetchNetworkStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchValues", function() { return fetchValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchNodeConfig", function() { return fetchNodeConfig; });
var ZWAVE_NETWORK_STATE_STOPPED = 0;
var ZWAVE_NETWORK_STATE_FAILED = 1;
var ZWAVE_NETWORK_STATE_STARTED = 5;
var ZWAVE_NETWORK_STATE_AWAKED = 7;
var ZWAVE_NETWORK_STATE_READY = 10;
var fetchNetworkStatus = function (hass) {
    return hass.callWS({
        type: "zwave/network_status",
    });
};
var fetchValues = function (hass, nodeId) {
    return hass.callApi("GET", "zwave/values/" + nodeId);
};
var fetchNodeConfig = function (hass, nodeId) {
    return hass.callApi("GET", "zwave/config/" + nodeId);
};


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

/***/ "./src/panels/config/zwave/ha-config-zwave.js":
/*!****************************************************!*\
  !*** ./src/panels/config/zwave/ha-config-zwave.js ***!
  \****************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_app_layout_app_header_app_header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/app-layout/app-header/app-header */ "./node_modules/@polymer/app-layout/app-header/app-header.js");
/* harmony import */ var _polymer_app_layout_app_toolbar_app_toolbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/app-layout/app-toolbar/app-toolbar */ "./node_modules/@polymer/app-layout/app-toolbar/app-toolbar.js");
/* harmony import */ var _polymer_paper_dropdown_menu_paper_dropdown_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-dropdown-menu/paper-dropdown-menu */ "./node_modules/@polymer/paper-dropdown-menu/paper-dropdown-menu.js");
/* harmony import */ var _polymer_paper_icon_button_paper_icon_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/paper-icon-button/paper-icon-button */ "./node_modules/@polymer/paper-icon-button/paper-icon-button.js");
/* harmony import */ var _polymer_paper_input_paper_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/paper-input/paper-input */ "./node_modules/@polymer/paper-input/paper-input.js");
/* harmony import */ var _polymer_paper_item_paper_item__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @polymer/paper-item/paper-item */ "./node_modules/@polymer/paper-item/paper-item.js");
/* harmony import */ var _polymer_paper_listbox_paper_listbox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @polymer/paper-listbox/paper-listbox */ "./node_modules/@polymer/paper-listbox/paper-listbox.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _components_buttons_ha_call_service_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../components/buttons/ha-call-service-button */ "./src/components/buttons/ha-call-service-button.js");
/* harmony import */ var _components_ha_menu_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../components/ha-menu-button */ "./src/components/ha-menu-button.ts");
/* harmony import */ var _components_ha_service_description__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../components/ha-service-description */ "./src/components/ha-service-description.js");
/* harmony import */ var _components_ha_paper_icon_button_arrow_prev__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../components/ha-paper-icon-button-arrow-prev */ "./src/components/ha-paper-icon-button-arrow-prev.ts");
/* harmony import */ var _layouts_ha_app_layout__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../layouts/ha-app-layout */ "./src/layouts/ha-app-layout.js");
/* harmony import */ var _resources_ha_style__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../resources/ha-style */ "./src/resources/ha-style.ts");
/* harmony import */ var _components_ha_card__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../components/ha-card */ "./src/components/ha-card.ts");
/* harmony import */ var _ha_config_section__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../ha-config-section */ "./src/panels/config/ha-config-section.js");
/* harmony import */ var _ha_form_style__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../ha-form-style */ "./src/panels/config/ha-form-style.js");
/* harmony import */ var _ha_form_style__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_ha_form_style__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _zwave_groups__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./zwave-groups */ "./src/panels/config/zwave/zwave-groups.js");
/* harmony import */ var _zwave_log__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./zwave-log */ "./src/panels/config/zwave/zwave-log.js");
/* harmony import */ var _zwave_network__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./zwave-network */ "./src/panels/config/zwave/zwave-network.ts");
/* harmony import */ var _zwave_node_config__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./zwave-node-config */ "./src/panels/config/zwave/zwave-node-config.ts");
/* harmony import */ var _zwave_usercodes__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./zwave-usercodes */ "./src/panels/config/zwave/zwave-usercodes.js");
/* harmony import */ var _zwave_values__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./zwave-values */ "./src/panels/config/zwave/zwave-values.ts");
/* harmony import */ var _zwave_node_protection__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./zwave-node-protection */ "./src/panels/config/zwave/zwave-node-protection.js");
/* harmony import */ var _common_entity_states_sort_by_name__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../../../common/entity/states_sort_by_name */ "./src/common/entity/states_sort_by_name.ts");
/* harmony import */ var _common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../../../common/entity/compute_state_name */ "./src/common/entity/compute_state_name.ts");
/* harmony import */ var _common_entity_compute_state_domain__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../../../common/entity/compute_state_domain */ "./src/common/entity/compute_state_domain.ts");
/* harmony import */ var _mixins_events_mixin__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../../../mixins/events-mixin */ "./src/mixins/events-mixin.js");
/* harmony import */ var _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../../../mixins/localize-mixin */ "./src/mixins/localize-mixin.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      <style include=\"iron-flex ha-style ha-form-style\">\n        .content {\n          margin-top: 24px;\n        }\n\n        .sectionHeader {\n          position: relative;\n          padding-right: 40px;\n        }\n\n        .node-info {\n          margin-left: 16px;\n        }\n\n        .help-text {\n          padding-left: 24px;\n          padding-right: 24px;\n        }\n\n        ha-card {\n          margin: 0 auto;\n          max-width: 600px;\n        }\n\n        .device-picker {\n          @apply --layout-horizontal;\n          @apply --layout-center-center;\n          padding-left: 24px;\n          padding-right: 24px;\n          padding-bottom: 24px;\n        }\n\n        ha-service-description {\n          display: block;\n          color: grey;\n        }\n\n        [hidden] {\n          display: none;\n        }\n\n        .toggle-help-icon {\n          position: absolute;\n          top: -6px;\n          right: 0;\n          color: var(--primary-color);\n        }\n      </style>\n      <ha-app-layout has-scrolling-region=\"\">\n        <app-header slot=\"header\" fixed=\"\">\n          <app-toolbar>\n            <ha-paper-icon-button-arrow-prev\n              on-click=\"_backTapped\"\n            ></ha-paper-icon-button-arrow-prev>\n            <div main-title=\"\">\n              [[localize('ui.panel.config.zwave.caption')]]\n            </div>\n          </app-toolbar>\n        </app-header>\n\n        <zwave-network\n          id=\"zwave-network\"\n          is-wide=\"[[isWide]]\"\n          hass=\"[[hass]]\"\n        ></zwave-network>\n\n        <!-- Node card -->\n        <ha-config-section is-wide=\"[[isWide]]\">\n          <div class=\"sectionHeader\" slot=\"header\">\n            <span>Z-Wave Node Management</span>\n            <paper-icon-button\n              class=\"toggle-help-icon\"\n              on-click=\"toggleHelp\"\n              icon=\"hass:help-circle\"\n            ></paper-icon-button>\n          </div>\n          <span slot=\"introduction\">\n            Run Z-Wave commands that affect a single node. Pick a node to see a\n            list of available commands.\n          </span>\n\n          <ha-card class=\"content\">\n            <div class=\"device-picker\">\n              <paper-dropdown-menu dynamic-align=\"\" label=\"Nodes\" class=\"flex\">\n                <paper-listbox\n                  slot=\"dropdown-content\"\n                  selected=\"{{selectedNode}}\"\n                >\n                  <template is=\"dom-repeat\" items=\"[[nodes]]\" as=\"state\">\n                    <paper-item>[[computeSelectCaption(state)]]</paper-item>\n                  </template>\n                </paper-listbox>\n              </paper-dropdown-menu>\n            </div>\n            <template is=\"dom-if\" if=\"[[!computeIsNodeSelected(selectedNode)]]\">\n              <template is=\"dom-if\" if=\"[[showHelp]]\">\n                <div style=\"color: grey; padding: 12px\">\n                  Select node to view per-node options\n                </div>\n              </template>\n            </template>\n\n            <template is=\"dom-if\" if=\"[[computeIsNodeSelected(selectedNode)]]\">\n              <div class=\"card-actions\">\n                <ha-call-service-button\n                  hass=\"[[hass]]\"\n                  domain=\"zwave\"\n                  service=\"refresh_node\"\n                  service-data=\"[[computeNodeServiceData(selectedNode)]]\"\n                >\n                  Refresh Node\n                </ha-call-service-button>\n                <ha-service-description\n                  hass=\"[[hass]]\"\n                  domain=\"zwave\"\n                  service=\"refresh_node\"\n                  hidden$=\"[[!showHelp]]\"\n                >\n                </ha-service-description>\n\n                <template is=\"dom-if\" if=\"[[nodeFailed]]\">\n                  <ha-call-service-button\n                    hass=\"[[hass]]\"\n                    domain=\"zwave\"\n                    service=\"remove_failed_node\"\n                    service-data=\"[[computeNodeServiceData(selectedNode)]]\"\n                  >\n                    Remove Failed Node\n                  </ha-call-service-button>\n                  <ha-service-description\n                    hass=\"[[hass]]\"\n                    domain=\"zwave\"\n                    service=\"remove_failed_node\"\n                    hidden$=\"[[!showHelp]]\"\n                  >\n                  </ha-service-description>\n\n                  <ha-call-service-button\n                    hass=\"[[hass]]\"\n                    domain=\"zwave\"\n                    service=\"replace_failed_node\"\n                    service-data=\"[[computeNodeServiceData(selectedNode)]]\"\n                  >\n                    Replace Failed Node\n                  </ha-call-service-button>\n                  <ha-service-description\n                    hass=\"[[hass]]\"\n                    domain=\"zwave\"\n                    service=\"replace_failed_node\"\n                    hidden$=\"[[!showHelp]]\"\n                  >\n                  </ha-service-description>\n                </template>\n\n                <ha-call-service-button\n                  hass=\"[[hass]]\"\n                  domain=\"zwave\"\n                  service=\"print_node\"\n                  service-data=\"[[computeNodeServiceData(selectedNode)]]\"\n                >\n                  Print Node\n                </ha-call-service-button>\n                <ha-service-description\n                  hass=\"[[hass]]\"\n                  domain=\"zwave\"\n                  service=\"print_node\"\n                  hidden$=\"[[!showHelp]]\"\n                >\n                </ha-service-description>\n\n                <ha-call-service-button\n                  hass=\"[[hass]]\"\n                  domain=\"zwave\"\n                  service=\"heal_node\"\n                  service-data=\"[[computeHealNodeServiceData(selectedNode)]]\"\n                >\n                  Heal Node\n                </ha-call-service-button>\n                <ha-service-description\n                  hass=\"[[hass]]\"\n                  domain=\"zwave\"\n                  service=\"heal_node\"\n                  hidden$=\"[[!showHelp]]\"\n                >\n                </ha-service-description>\n\n                <ha-call-service-button\n                  hass=\"[[hass]]\"\n                  domain=\"zwave\"\n                  service=\"test_node\"\n                  service-data=\"[[computeNodeServiceData(selectedNode)]]\"\n                >\n                  Test Node\n                </ha-call-service-button>\n                <ha-service-description\n                  hass=\"[[hass]]\"\n                  domain=\"zwave\"\n                  service=\"test_node\"\n                  hidden$=\"[[!showHelp]]\"\n                >\n                </ha-service-description>\n                <mwc-button on-click=\"_nodeMoreInfo\"\n                  >Node Information</mwc-button\n                >\n              </div>\n\n              <div class=\"device-picker\">\n                <paper-dropdown-menu\n                  label=\"Entities of this node\"\n                  dynamic-align=\"\"\n                  class=\"flex\"\n                >\n                  <paper-listbox\n                    slot=\"dropdown-content\"\n                    selected=\"{{selectedEntity}}\"\n                  >\n                    <template is=\"dom-repeat\" items=\"[[entities]]\" as=\"state\">\n                      <paper-item>[[state.entity_id]]</paper-item>\n                    </template>\n                  </paper-listbox>\n                </paper-dropdown-menu>\n              </div>\n              <template\n                is=\"dom-if\"\n                if=\"[[!computeIsEntitySelected(selectedEntity)]]\"\n              >\n                <div class=\"card-actions\">\n                  <ha-call-service-button\n                    hass=\"[[hass]]\"\n                    domain=\"zwave\"\n                    service=\"refresh_entity\"\n                    service-data=\"[[computeRefreshEntityServiceData(selectedEntity)]]\"\n                  >\n                    Refresh Entity\n                  </ha-call-service-button>\n                  <ha-service-description\n                    hass=\"[[hass]]\"\n                    domain=\"zwave\"\n                    service=\"refresh_entity\"\n                    hidden$=\"[[!showHelp]]\"\n                  >\n                  </ha-service-description>\n                  <mwc-button on-click=\"_entityMoreInfo\"\n                    >Entity Information</mwc-button\n                  >\n                </div>\n                <div class=\"form-group\">\n                  <paper-checkbox\n                    checked=\"{{entityIgnored}}\"\n                    class=\"form-control\"\n                  >\n                    Exclude this entity from \u7267\u517B\u72AC\n                  </paper-checkbox>\n                  <paper-input\n                    disabled=\"{{entityIgnored}}\"\n                    label=\"Polling intensity\"\n                    type=\"number\"\n                    min=\"0\"\n                    value=\"{{entityPollingIntensity}}\"\n                  >\n                  </paper-input>\n                </div>\n                <div class=\"card-actions\">\n                  <ha-call-service-button\n                    hass=\"[[hass]]\"\n                    domain=\"zwave\"\n                    service=\"set_poll_intensity\"\n                    service-data=\"[[computePollIntensityServiceData(entityPollingIntensity)]]\"\n                  >\n                    Save\n                  </ha-call-service-button>\n                </div>\n              </template>\n            </template>\n          </ha-card>\n\n          <template is=\"dom-if\" if=\"[[computeIsNodeSelected(selectedNode)]]\">\n            <!-- Value card -->\n            <zwave-values\n              hass=\"[[hass]]\"\n              nodes=\"[[nodes]]\"\n              selected-node=\"[[selectedNode]]\"\n              values=\"[[values]]\"\n            ></zwave-values>\n\n            <!-- Group card -->\n            <zwave-groups\n              hass=\"[[hass]]\"\n              nodes=\"[[nodes]]\"\n              selected-node=\"[[selectedNode]]\"\n              groups=\"[[groups]]\"\n            ></zwave-groups>\n\n            <!-- Config card -->\n            <zwave-node-config\n              hass=\"[[hass]]\"\n              nodes=\"[[nodes]]\"\n              selected-node=\"[[selectedNode]]\"\n              config=\"[[config]]\"\n            ></zwave-node-config>\n          </template>\n\n          <!-- Protection card -->\n          <template is=\"dom-if\" if=\"{{_protectionNode}}\">\n            <zwave-node-protection\n              hass=\"[[hass]]\"\n              nodes=\"[[nodes]]\"\n              selected-node=\"[[selectedNode]]\"\n              protection=\"[[_protection]]\"\n            ></zwave-node-protection>\n          </template>\n\n          <!-- User Codes -->\n          <template is=\"dom-if\" if=\"{{hasNodeUserCodes}}\">\n            <zwave-usercodes\n              id=\"zwave-usercodes\"\n              hass=\"[[hass]]\"\n              nodes=\"[[nodes]]\"\n              user-codes=\"[[userCodes]]\"\n              selected-node=\"[[selectedNode]]\"\n            ></zwave-usercodes>\n          </template>\n        </ha-config-section>\n\n        <!-- Ozw log -->\n        <ozw-log is-wide=\"[[isWide]]\" hass=\"[[hass]]\"></ozw-log>\n      </ha-app-layout>\n    "]);

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

var HaConfigZwave =
/*#__PURE__*/
function (_LocalizeMixin) {
  _inherits(HaConfigZwave, _LocalizeMixin);

  function HaConfigZwave() {
    _classCallCheck(this, HaConfigZwave);

    return _possibleConstructorReturn(this, _getPrototypeOf(HaConfigZwave).apply(this, arguments));
  }

  _createClass(HaConfigZwave, [{
    key: "ready",
    value: function ready() {
      var _this = this;

      _get(_getPrototypeOf(HaConfigZwave.prototype), "ready", this).call(this);

      this.addEventListener("hass-service-called", function (ev) {
        return _this.serviceCalled(ev);
      });
    }
  }, {
    key: "serviceCalled",
    value: function serviceCalled(ev) {
      if (ev.detail.success && ev.detail.service === "set_poll_intensity") {
        this._saveEntity();
      }
    }
  }, {
    key: "computeNodes",
    value: function computeNodes(hass) {
      return Object.keys(hass.states).map(function (key) {
        return hass.states[key];
      }).filter(function (ent) {
        return ent.entity_id.match("zwave[.]");
      }).sort(_common_entity_states_sort_by_name__WEBPACK_IMPORTED_MODULE_25__["sortStatesByName"]);
    }
  }, {
    key: "computeEntities",
    value: function computeEntities(selectedNode) {
      if (!this.nodes || selectedNode === -1) return -1;
      var nodeid = this.nodes[this.selectedNode].attributes.node_id;
      var hass = this.hass;
      return Object.keys(this.hass.states).map(function (key) {
        return hass.states[key];
      }).filter(function (ent) {
        if (ent.attributes.node_id === undefined) {
          return false;
        }

        return !ent.attributes.hidden && "node_id" in ent.attributes && ent.attributes.node_id === nodeid && !ent.entity_id.match("zwave[.]");
      }).sort(_common_entity_states_sort_by_name__WEBPACK_IMPORTED_MODULE_25__["sortStatesByName"]);
    }
  }, {
    key: "selectedNodeChanged",
    value: function selectedNodeChanged(selectedNode) {
      var _this2 = this;

      if (selectedNode === -1) return;
      this.selectedEntity = -1;
      this.hass.callApi("GET", "zwave/config/".concat(this.nodes[selectedNode].attributes.node_id)).then(function (configs) {
        _this2.config = _this2._objToArray(configs);
      });
      this.hass.callApi("GET", "zwave/values/".concat(this.nodes[selectedNode].attributes.node_id)).then(function (values) {
        _this2.values = _this2._objToArray(values);
      });
      this.hass.callApi("GET", "zwave/groups/".concat(this.nodes[selectedNode].attributes.node_id)).then(function (groups) {
        _this2.groups = _this2._objToArray(groups);
      });
      this.hasNodeUserCodes = false;
      this.notifyPath("hasNodeUserCodes");
      this.hass.callApi("GET", "zwave/usercodes/".concat(this.nodes[selectedNode].attributes.node_id)).then(function (usercodes) {
        _this2.userCodes = _this2._objToArray(usercodes);
        _this2.hasNodeUserCodes = _this2.userCodes.length > 0;

        _this2.notifyPath("hasNodeUserCodes");
      });
      this.hass.callApi("GET", "zwave/protection/".concat(this.nodes[selectedNode].attributes.node_id)).then(function (protections) {
        _this2._protection = _this2._objToArray(protections);

        if (_this2._protection) {
          if (_this2._protection.length === 0) {
            return;
          }

          _this2._protectionNode = true;
        }
      });
      this.nodeFailed = this.nodes[selectedNode].attributes.is_failed;
    }
  }, {
    key: "selectedEntityChanged",
    value: function selectedEntityChanged(selectedEntity) {
      var _this3 = this;

      if (selectedEntity === -1) return;
      this.hass.callApi("GET", "zwave/values/".concat(this.nodes[this.selectedNode].attributes.node_id)).then(function (values) {
        _this3.values = _this3._objToArray(values);
      });
      var valueId = this.entities[selectedEntity].attributes.value_id;
      var valueData = this.values.find(function (obj) {
        return obj.key === valueId;
      });
      var valueIndex = this.values.indexOf(valueData);
      this.hass.callApi("GET", "config/zwave/device_config/".concat(this.entities[selectedEntity].entity_id)).then(function (data) {
        _this3.setProperties({
          entityIgnored: data.ignored || false,
          entityPollingIntensity: _this3.values[valueIndex].value.poll_intensity
        });
      })["catch"](function () {
        _this3.setProperties({
          entityIgnored: false,
          entityPollingIntensity: _this3.values[valueIndex].value.poll_intensity
        });
      });
    }
  }, {
    key: "computeSelectCaption",
    value: function computeSelectCaption(stateObj) {
      return Object(_common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_26__["computeStateName"])(stateObj) + " (Node:" + stateObj.attributes.node_id + " " + stateObj.attributes.query_stage + ")";
    }
  }, {
    key: "computeSelectCaptionEnt",
    value: function computeSelectCaptionEnt(stateObj) {
      return Object(_common_entity_compute_state_domain__WEBPACK_IMPORTED_MODULE_27__["computeStateDomain"])(stateObj) + "." + Object(_common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_26__["computeStateName"])(stateObj);
    }
  }, {
    key: "computeIsNodeSelected",
    value: function computeIsNodeSelected() {
      return this.nodes && this.selectedNode !== -1;
    }
  }, {
    key: "computeIsEntitySelected",
    value: function computeIsEntitySelected(selectedEntity) {
      return selectedEntity === -1;
    }
  }, {
    key: "computeNodeServiceData",
    value: function computeNodeServiceData(selectedNode) {
      return {
        node_id: this.nodes[selectedNode].attributes.node_id
      };
    }
  }, {
    key: "computeHealNodeServiceData",
    value: function computeHealNodeServiceData(selectedNode) {
      return {
        node_id: this.nodes[selectedNode].attributes.node_id,
        return_routes: true
      };
    }
  }, {
    key: "computeRefreshEntityServiceData",
    value: function computeRefreshEntityServiceData(selectedEntity) {
      if (selectedEntity === -1) return -1;
      return {
        entity_id: this.entities[selectedEntity].entity_id
      };
    }
  }, {
    key: "computePollIntensityServiceData",
    value: function computePollIntensityServiceData(entityPollingIntensity) {
      if (!this.selectedNode === -1 || this.selectedEntity === -1) return -1;
      return {
        node_id: this.nodes[this.selectedNode].attributes.node_id,
        value_id: this.entities[this.selectedEntity].attributes.value_id,
        poll_intensity: parseInt(entityPollingIntensity)
      };
    }
  }, {
    key: "_nodeMoreInfo",
    value: function _nodeMoreInfo() {
      this.fire("hass-more-info", {
        entityId: this.nodes[this.selectedNode].entity_id
      });
    }
  }, {
    key: "_entityMoreInfo",
    value: function _entityMoreInfo() {
      this.fire("hass-more-info", {
        entityId: this.entities[this.selectedEntity].entity_id
      });
    }
  }, {
    key: "_saveEntity",
    value: function _saveEntity() {
      var data = {
        ignored: this.entityIgnored,
        polling_intensity: parseInt(this.entityPollingIntensity)
      };
      return this.hass.callApi("POST", "config/zwave/device_config/".concat(this.entities[this.selectedEntity].entity_id), data);
    }
  }, {
    key: "toggleHelp",
    value: function toggleHelp() {
      this.showHelp = !this.showHelp;
    }
  }, {
    key: "_objToArray",
    value: function _objToArray(obj) {
      var array = [];
      Object.keys(obj).forEach(function (key) {
        array.push({
          key: key,
          value: obj[key]
        });
      });
      return array;
    }
  }, {
    key: "_backTapped",
    value: function _backTapped() {
      history.back();
    }
  }], [{
    key: "template",
    get: function get() {
      return Object(_polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_7__["html"])(_templateObject());
    }
  }, {
    key: "properties",
    get: function get() {
      return {
        hass: Object,
        isWide: Boolean,
        nodes: {
          type: Array,
          computed: "computeNodes(hass)"
        },
        selectedNode: {
          type: Number,
          value: -1,
          observer: "selectedNodeChanged"
        },
        nodeFailed: {
          type: Boolean,
          value: false
        },
        config: {
          type: Array,
          value: function value() {
            return [];
          }
        },
        entities: {
          type: Array,
          computed: "computeEntities(selectedNode)"
        },
        selectedEntity: {
          type: Number,
          value: -1,
          observer: "selectedEntityChanged"
        },
        values: {
          type: Array
        },
        groups: {
          type: Array
        },
        userCodes: {
          type: Array,
          value: function value() {
            return [];
          }
        },
        hasNodeUserCodes: {
          type: Boolean,
          value: false
        },
        showHelp: {
          type: Boolean,
          value: false
        },
        entityIgnored: Boolean,
        entityPollingIntensity: {
          type: Number,
          value: 0
        },
        _protection: {
          type: Array,
          value: function value() {
            return [];
          }
        },
        _protectionNode: {
          type: Boolean,
          value: false
        }
      };
    }
  }]);

  return HaConfigZwave;
}(Object(_mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_29__["default"])(Object(_mixins_events_mixin__WEBPACK_IMPORTED_MODULE_28__["EventsMixin"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_8__["PolymerElement"])));

customElements.define("ha-config-zwave", HaConfigZwave);

/***/ }),

/***/ "./src/panels/config/zwave/zwave-groups.js":
/*!*************************************************!*\
  !*** ./src/panels/config/zwave/zwave-groups.js ***!
  \*************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_paper_dropdown_menu_paper_dropdown_menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/paper-dropdown-menu/paper-dropdown-menu */ "./node_modules/@polymer/paper-dropdown-menu/paper-dropdown-menu.js");
/* harmony import */ var _polymer_paper_item_paper_item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-item/paper-item */ "./node_modules/@polymer/paper-item/paper-item.js");
/* harmony import */ var _polymer_paper_listbox_paper_listbox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-listbox/paper-listbox */ "./node_modules/@polymer/paper-listbox/paper-listbox.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _components_buttons_ha_call_service_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/buttons/ha-call-service-button */ "./src/components/buttons/ha-call-service-button.js");
/* harmony import */ var _components_ha_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/ha-card */ "./src/components/ha-card.ts");
/* harmony import */ var _common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../common/entity/compute_state_name */ "./src/common/entity/compute_state_name.ts");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      <style include=\"iron-flex ha-style\">\n        .content {\n          margin-top: 24px;\n        }\n\n        ha-card {\n          margin: 0 auto;\n          max-width: 600px;\n        }\n\n        .device-picker {\n          @apply --layout-horizontal;\n          @apply --layout-center-center;\n          padding-left: 24px;\n          padding-right: 24px;\n          padding-bottom: 24px;\n        }\n\n        .help-text {\n          padding-left: 24px;\n          padding-right: 24px;\n          padding-bottom: 12px;\n        }\n      </style>\n      <ha-card class=\"content\" header=\"Node group associations\">\n        <!-- TODO make api for getting groups and members -->\n        <div class=\"device-picker\">\n          <paper-dropdown-menu label=\"Group\" dynamic-align=\"\" class=\"flex\">\n            <paper-listbox\n              slot=\"dropdown-content\"\n              selected=\"{{_selectedGroup}}\"\n            >\n              <template is=\"dom-repeat\" items=\"[[groups]]\" as=\"state\">\n                <paper-item>[[_computeSelectCaptionGroup(state)]]</paper-item>\n              </template>\n            </paper-listbox>\n          </paper-dropdown-menu>\n        </div>\n        <template is=\"dom-if\" if=\"[[_computeIsGroupSelected(_selectedGroup)]]\">\n          <div class=\"device-picker\">\n            <paper-dropdown-menu\n              label=\"Node to control\"\n              dynamic-align=\"\"\n              class=\"flex\"\n            >\n              <paper-listbox\n                slot=\"dropdown-content\"\n                selected=\"{{_selectedTargetNode}}\"\n              >\n                <template is=\"dom-repeat\" items=\"[[nodes]]\" as=\"state\">\n                  <paper-item>[[_computeSelectCaption(state)]]</paper-item>\n                </template>\n              </paper-listbox>\n            </paper-dropdown-menu>\n          </div>\n\n          <div class=\"help-text\">\n            <span>Other Nodes in this group:</span>\n            <template is=\"dom-repeat\" items=\"[[_otherGroupNodes]]\" as=\"state\">\n              <div>[[state]]</div>\n            </template>\n          </div>\n          <div class=\"help-text\">\n            <span>Max Associations:</span> <span>[[_maxAssociations]]</span>\n          </div>\n        </template>\n\n        <template\n          is=\"dom-if\"\n          if=\"[[_computeIsTargetNodeSelected(_selectedTargetNode)]]\"\n        >\n          <div class=\"card-actions\">\n            <template is=\"dom-if\" if=\"[[!_noAssociationsLeft]]\">\n              <ha-call-service-button\n                hass=\"[[hass]]\"\n                domain=\"zwave\"\n                service=\"change_association\"\n                service-data=\"[[_addAssocServiceData]]\"\n              >\n                Add To Group\n              </ha-call-service-button>\n            </template>\n            <template\n              is=\"dom-if\"\n              if=\"[[_computeTargetInGroup(_selectedGroup, _selectedTargetNode)]]\"\n            >\n              <ha-call-service-button\n                hass=\"[[hass]]\"\n                domain=\"zwave\"\n                service=\"change_association\"\n                service-data=\"[[_removeAssocServiceData]]\"\n              >\n                Remove From Group\n              </ha-call-service-button>\n            </template>\n            <template is=\"dom-if\" if=\"[[_isBroadcastNodeInGroup]]\">\n              <ha-call-service-button\n                hass=\"[[hass]]\"\n                domain=\"zwave\"\n                service=\"change_association\"\n                service-data=\"[[_removeBroadcastNodeServiceData]]\"\n              >\n                Remove Broadcast\n              </ha-call-service-button>\n            </template>\n          </div>\n        </template>\n      </ha-card>\n    "]);

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










var ZwaveGroups =
/*#__PURE__*/
function (_PolymerElement) {
  _inherits(ZwaveGroups, _PolymerElement);

  function ZwaveGroups() {
    _classCallCheck(this, ZwaveGroups);

    return _possibleConstructorReturn(this, _getPrototypeOf(ZwaveGroups).apply(this, arguments));
  }

  _createClass(ZwaveGroups, [{
    key: "ready",
    value: function ready() {
      var _this = this;

      _get(_getPrototypeOf(ZwaveGroups.prototype), "ready", this).call(this);

      this.addEventListener("hass-service-called", function (ev) {
        return _this.serviceCalled(ev);
      });
    }
  }, {
    key: "serviceCalled",
    value: function serviceCalled(ev) {
      var _this2 = this;

      if (ev.detail.success) {
        setTimeout(function () {
          _this2._refreshGroups(_this2.selectedNode);
        }, 5000);
      }
    }
  }, {
    key: "_computeAssociationsLeft",
    value: function _computeAssociationsLeft(selectedGroup) {
      if (selectedGroup === -1) return true;
      return this._maxAssociations === this._otherGroupNodes.length;
    }
  }, {
    key: "_computeMaxAssociations",
    value: function _computeMaxAssociations(selectedGroup) {
      if (selectedGroup === -1) return -1;
      var maxAssociations = this.groups[selectedGroup].value.max_associations;
      if (!maxAssociations) return "None";
      return maxAssociations;
    }
  }, {
    key: "_computeOtherGroupNodes",
    value: function _computeOtherGroupNodes(selectedGroup) {
      var _this3 = this;

      if (selectedGroup === -1) return -1;
      this.setProperties({
        _isBroadcastNodeInGroup: false
      });
      var associations = Object.values(this.groups[selectedGroup].value.association_instances);
      if (!associations.length) return ["None"];
      return associations.map(function (assoc) {
        if (!assoc.length || assoc.length !== 2) {
          return "Unknown Node: ".concat(assoc);
        }

        var id = assoc[0];
        var instance = assoc[1];

        var node = _this3.nodes.find(function (n) {
          return n.attributes.node_id === id;
        });

        if (id === 255) {
          _this3.setProperties({
            _isBroadcastNodeInGroup: true,
            _removeBroadcastNodeServiceData: {
              node_id: _this3.nodes[_this3.selectedNode].attributes.node_id,
              association: "remove",
              target_node_id: 255,
              group: _this3.groups[selectedGroup].key
            }
          });
        }

        if (!node) {
          return "Unknown Node (".concat(id, ": (").concat(instance, " ? ").concat(id, ".").concat(instance, " : ").concat(id, "))");
        }

        var caption = _this3._computeSelectCaption(node);

        if (instance) {
          caption += "/ Instance: ".concat(instance);
        }

        return caption;
      });
    }
  }, {
    key: "_computeTargetInGroup",
    value: function _computeTargetInGroup(selectedGroup, selectedTargetNode) {
      if (selectedGroup === -1 || selectedTargetNode === -1) return false;
      var associations = Object.values(this.groups[selectedGroup].value.associations);
      if (!associations.length) return false;
      return associations.indexOf(this.nodes[selectedTargetNode].attributes.node_id) !== -1;
    }
  }, {
    key: "_computeSelectCaption",
    value: function _computeSelectCaption(stateObj) {
      return "".concat(Object(_common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_7__["computeStateName"])(stateObj), "\n      (Node: ").concat(stateObj.attributes.node_id, "\n      ").concat(stateObj.attributes.query_stage, ")");
    }
  }, {
    key: "_computeSelectCaptionGroup",
    value: function _computeSelectCaptionGroup(stateObj) {
      return "".concat(stateObj.key, ": ").concat(stateObj.value.label);
    }
  }, {
    key: "_computeIsTargetNodeSelected",
    value: function _computeIsTargetNodeSelected(selectedTargetNode) {
      return this.nodes && selectedTargetNode !== -1;
    }
  }, {
    key: "_computeIsGroupSelected",
    value: function _computeIsGroupSelected(selectedGroup) {
      return this.nodes && this.selectedNode !== -1 && selectedGroup !== -1;
    }
  }, {
    key: "_computeAssocServiceData",
    value: function _computeAssocServiceData(selectedGroup, type) {
      if (!this.groups === -1 || selectedGroup === -1 || this.selectedNode === -1 || this._selectedTargetNode === -1) return -1;
      return {
        node_id: this.nodes[this.selectedNode].attributes.node_id,
        association: type,
        target_node_id: this.nodes[this._selectedTargetNode].attributes.node_id,
        group: this.groups[selectedGroup].key
      };
    }
  }, {
    key: "_refreshGroups",
    value: function () {
      var _refreshGroups2 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(selectedNode) {
        var groupData, groups, oldGroup;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                groupData = [];
                _context.next = 3;
                return this.hass.callApi("GET", "zwave/groups/".concat(this.nodes[selectedNode].attributes.node_id));

              case 3:
                groups = _context.sent;
                Object.keys(groups).forEach(function (key) {
                  groupData.push({
                    key: key,
                    value: groups[key]
                  });
                });
                this.setProperties({
                  groups: groupData,
                  _maxAssociations: groupData[this._selectedGroup].value.max_associations,
                  _otherGroupNodes: Object.values(groupData[this._selectedGroup].value.associations),
                  _isBroadcastNodeInGroup: false
                });
                oldGroup = this._selectedGroup;
                this.setProperties({
                  _selectedGroup: -1
                });
                this.setProperties({
                  _selectedGroup: oldGroup
                });

              case 9:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function _refreshGroups(_x) {
        return _refreshGroups2.apply(this, arguments);
      }

      return _refreshGroups;
    }()
  }, {
    key: "_selectedGroupChanged",
    value: function _selectedGroupChanged() {
      if (this._selectedGroup === -1) return;
      this.setProperties({
        _maxAssociations: this.groups[this._selectedGroup].value.max_associations,
        _otherGroupNodes: Object.values(this.groups[this._selectedGroup].value.associations)
      });
    }
  }, {
    key: "_selectedTargetNodeChanged",
    value: function _selectedTargetNodeChanged() {
      if (this._selectedGroup === -1) return;

      if (this._computeTargetInGroup(this._selectedGroup, this._selectedTargetNode)) {
        this.setProperties({
          _removeAssocServiceData: this._computeAssocServiceData(this._selectedGroup, "remove")
        });
      } else {
        this.setProperties({
          _addAssocServiceData: this._computeAssocServiceData(this._selectedGroup, "add")
        });
      }
    }
  }, {
    key: "_selectedNodeChanged",
    value: function _selectedNodeChanged() {
      if (this.selectedNode === -1) return;
      this.setProperties({
        _selectedTargetNode: -1,
        _selectedGroup: -1
      });
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
        nodes: Array,
        groups: Array,
        selectedNode: {
          type: Number,
          observer: "_selectedNodeChanged"
        },
        _selectedTargetNode: {
          type: Number,
          value: -1,
          observer: "_selectedTargetNodeChanged"
        },
        _selectedGroup: {
          type: Number,
          value: -1
        },
        _otherGroupNodes: {
          type: Array,
          value: -1,
          computed: "_computeOtherGroupNodes(_selectedGroup)"
        },
        _maxAssociations: {
          type: String,
          value: "",
          computed: "_computeMaxAssociations(_selectedGroup)"
        },
        _noAssociationsLeft: {
          type: Boolean,
          value: true,
          computed: "_computeAssociationsLeft(_selectedGroup)"
        },
        _addAssocServiceData: {
          type: String,
          value: ""
        },
        _removeAssocServiceData: {
          type: String,
          value: ""
        },
        _removeBroadcastNodeServiceData: {
          type: String,
          value: ""
        },
        _isBroadcastNodeInGroup: {
          type: Boolean,
          value: false
        }
      };
    }
  }, {
    key: "observers",
    get: function get() {
      return ["_selectedGroupChanged(groups, _selectedGroup)"];
    }
  }]);

  return ZwaveGroups;
}(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_4__["PolymerElement"]);

customElements.define("zwave-groups", ZwaveGroups);

/***/ }),

/***/ "./src/panels/config/zwave/zwave-log.js":
/*!**********************************************!*\
  !*** ./src/panels/config/zwave/zwave-log.js ***!
  \**********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_mwc_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material/mwc-button */ "./node_modules/@material/mwc-button/mwc-button.js");
/* harmony import */ var _polymer_paper_checkbox_paper_checkbox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-checkbox/paper-checkbox */ "./node_modules/@polymer/paper-checkbox/paper-checkbox.js");
/* harmony import */ var _polymer_paper_input_paper_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-input/paper-input */ "./node_modules/@polymer/paper-input/paper-input.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../mixins/localize-mixin */ "./src/mixins/localize-mixin.js");
/* harmony import */ var _mixins_events_mixin__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../mixins/events-mixin */ "./src/mixins/events-mixin.js");
/* harmony import */ var _common_config_is_pwa__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../common/config/is_pwa */ "./src/common/config/is_pwa.ts");
/* harmony import */ var _ha_config_section__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../ha-config-section */ "./src/panels/config/ha-config-section.js");
/* harmony import */ var _components_ha_card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../components/ha-card */ "./src/components/ha-card.ts");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    <style include=\"iron-flex ha-style\">\n      .content {\n        margin-top: 24px;\n      }\n\n      ha-card {\n        margin: 0 auto;\n        max-width: 600px;\n      }\n\n      .device-picker {\n        padding-left: 24px;\n        padding-right: 24px;\n        padding-bottom: 24px;\n      }\n\n    </style>\n    <ha-config-section is-wide=\"[[isWide]]\">\n      <span slot=\"header\">\n        [[localize('ui.panel.config.zwave.ozw_log.header')]]\n      </span>\n      <span slot=\"introduction\">\n        [[localize('ui.panel.config.zwave.ozw_log.introduction')]]\n      </span>\n      <ha-card class=\"content\">\n        <div class=\"device-picker\">\n          <paper-input label=\"Number of last log lines.\" type=\"number\" min=\"0\" max=\"1000\" step=\"10\" value=\"{{numLogLines}}\">\n          </paper-input>\n        </div>\n        <div class=\"card-actions\">\n          <mwc-button raised=\"true\" on-click=\"_openLogWindow\">Load</mwc-button>\n          <mwc-button raised=\"true\" on-click=\"_tailLog\" disabled=\"{{_completeLog}}\">Tail</mwc-button>\n      </ha-card>\n    </ha-config-section>\n"]);

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











var registeredDialog = false;

var OzwLog =
/*#__PURE__*/
function (_LocalizeMixin) {
  _inherits(OzwLog, _LocalizeMixin);

  function OzwLog() {
    _classCallCheck(this, OzwLog);

    return _possibleConstructorReturn(this, _getPrototypeOf(OzwLog).apply(this, arguments));
  }

  _createClass(OzwLog, [{
    key: "_tailLog",
    value: function () {
      var _tailLog2 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee() {
        var _this = this;

        var ozwWindow;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this.setProperties({
                  tail: true
                });
                _context.next = 3;
                return this._openLogWindow();

              case 3:
                ozwWindow = _context.sent;

                if (!Object(_common_config_is_pwa__WEBPACK_IMPORTED_MODULE_7__["default"])()) {
                  this.setProperties({
                    _intervalId: setInterval(function () {
                      _this._refreshLog(ozwWindow);
                    }, 1500)
                  });
                }

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function _tailLog() {
        return _tailLog2.apply(this, arguments);
      }

      return _tailLog;
    }()
  }, {
    key: "_openLogWindow",
    value: function () {
      var _openLogWindow2 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee2() {
        var info, ozwWindow;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return this.hass.callApi("GET", "zwave/ozwlog?lines=" + this.numLogLines);

              case 2:
                info = _context2.sent;
                this.setProperties({
                  _ozwLogs: info
                });

                if (!Object(_common_config_is_pwa__WEBPACK_IMPORTED_MODULE_7__["default"])()) {
                  _context2.next = 7;
                  break;
                }

                this._showOzwlogDialog();

                return _context2.abrupt("return", -1);

              case 7:
                ozwWindow = open("", "ozwLog", "toolbar");
                ozwWindow.document.body.innerHTML = "<pre>".concat(this._ozwLogs, "</pre>");
                return _context2.abrupt("return", ozwWindow);

              case 10:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function _openLogWindow() {
        return _openLogWindow2.apply(this, arguments);
      }

      return _openLogWindow;
    }()
  }, {
    key: "_refreshLog",
    value: function () {
      var _refreshLog2 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee3(ozwWindow) {
        var info;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                if (!(ozwWindow.closed === true)) {
                  _context3.next = 5;
                  break;
                }

                clearInterval(this._intervalId);
                this.setProperties({
                  _intervalId: null
                });
                _context3.next = 10;
                break;

              case 5:
                _context3.next = 7;
                return this.hass.callApi("GET", "zwave/ozwlog?lines=" + this.numLogLines);

              case 7:
                info = _context3.sent;
                this.setProperties({
                  _ozwLogs: info
                });
                ozwWindow.document.body.innerHTML = "<pre>".concat(this._ozwLogs, "</pre>");

              case 10:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function _refreshLog(_x) {
        return _refreshLog2.apply(this, arguments);
      }

      return _refreshLog;
    }()
  }, {
    key: "_isCompleteLog",
    value: function _isCompleteLog() {
      if (this.numLogLines !== "0") {
        this.setProperties({
          _completeLog: false
        });
      } else {
        this.setProperties({
          _completeLog: true
        });
      }
    }
  }, {
    key: "connectedCallback",
    value: function connectedCallback() {
      _get(_getPrototypeOf(OzwLog.prototype), "connectedCallback", this).call(this);

      if (!registeredDialog) {
        registeredDialog = true;
        this.fire("register-dialog", {
          dialogShowEvent: "show-ozwlog-dialog",
          dialogTag: "zwave-log-dialog",
          dialogImport: function dialogImport() {
            return Promise.all(/*! import() | zwave-log-dialog */[__webpack_require__.e("vendors~area-registry-detail-dialog~cloud-webhook-manage-dialog~config-entry-system-options~device-r~8bd3e4d4"), __webpack_require__.e("zwave-log-dialog")]).then(__webpack_require__.bind(null, /*! ./zwave-log-dialog */ "./src/panels/config/zwave/zwave-log-dialog.js"));
          }
        });
      }
    }
  }, {
    key: "_showOzwlogDialog",
    value: function _showOzwlogDialog() {
      var _this2 = this;

      this.fire("show-ozwlog-dialog", {
        hass: this.hass,
        _numLogLines: this.numLogLines,
        _ozwLog: this._ozwLogs,
        _tail: this.tail,
        dialogClosedCallback: function dialogClosedCallback() {
          return _this2._dialogClosed();
        }
      });
    }
  }, {
    key: "_dialogClosed",
    value: function _dialogClosed() {
      this.setProperties({
        tail: false
      });
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
        isWide: {
          type: Boolean,
          value: false
        },
        _ozwLogs: String,
        _completeLog: {
          type: Boolean,
          value: true
        },
        numLogLines: {
          type: Number,
          value: 0,
          observer: "_isCompleteLog"
        },
        _intervalId: String,
        tail: Boolean
      };
    }
  }]);

  return OzwLog;
}(Object(_mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_5__["default"])(Object(_mixins_events_mixin__WEBPACK_IMPORTED_MODULE_6__["EventsMixin"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_4__["PolymerElement"])));

customElements.define("ozw-log", OzwLog);

/***/ }),

/***/ "./src/panels/config/zwave/zwave-network.ts":
/*!**************************************************!*\
  !*** ./src/panels/config/zwave/zwave-network.ts ***!
  \**************************************************/
/*! exports provided: ZwaveNetwork */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZwaveNetwork", function() { return ZwaveNetwork; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _polymer_paper_icon_button_paper_icon_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-icon-button/paper-icon-button */ "./node_modules/@polymer/paper-icon-button/paper-icon-button.js");
/* harmony import */ var _polymer_paper_spinner_paper_spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-spinner/paper-spinner */ "./node_modules/@polymer/paper-spinner/paper-spinner.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _resources_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../resources/styles */ "./src/resources/styles.ts");
/* harmony import */ var _data_zwave__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../data/zwave */ "./src/data/zwave.ts");
/* harmony import */ var _components_buttons_ha_call_api_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/buttons/ha-call-api-button */ "./src/components/buttons/ha-call-api-button.js");
/* harmony import */ var _components_buttons_ha_call_service_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/buttons/ha-call-service-button */ "./src/components/buttons/ha-call-service-button.js");
/* harmony import */ var _components_ha_service_description__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../components/ha-service-description */ "./src/components/ha-service-description.js");
/* harmony import */ var _components_ha_card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../components/ha-card */ "./src/components/ha-card.ts");
/* harmony import */ var _components_ha_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../components/ha-icon */ "./src/components/ha-icon.ts");
/* harmony import */ var _ha_config_section__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../ha-config-section */ "./src/panels/config/ha-config-section.js");












var ZwaveNetwork = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(ZwaveNetwork, _super);
    function ZwaveNetwork() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._showHelp = false;
        _this._unsubs = [];
        return _this;
    }
    ZwaveNetwork.prototype.disconnectedCallback = function () {
        this._unsubscribe();
    };
    ZwaveNetwork.prototype.firstUpdated = function (changedProps) {
        _super.prototype.firstUpdated.call(this, changedProps);
        this._getNetworkStatus();
        this._subscribe();
    };
    ZwaveNetwork.prototype.render = function () {
        return Object(lit_element__WEBPACK_IMPORTED_MODULE_3__["html"])(templateObject_10 || (templateObject_10 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      <ha-config-section .isWide=\"", "\">\n        <div class=\"sectionHeader\" slot=\"header\">\n          <span>\n            ", "\n          </span>\n          <paper-icon-button\n            class=\"toggle-help-icon\"\n            @click=\"", "\"\n            icon=\"hass:help-circle\"\n          ></paper-icon-button>\n        </div>\n        <div slot=\"introduction\">\n          ", "\n          <p>\n            <a\n              href=\"https://www.home-assistant.io/docs/z-wave/control-panel/\"\n              target=\"_blank\"\n            >\n              ", "\n            </a>\n          </p>\n        </div>\n\n        ", "\n      </ha-config-section>\n    "], ["\n      <ha-config-section .isWide=\"", "\">\n        <div class=\"sectionHeader\" slot=\"header\">\n          <span>\n            ",
            "\n          </span>\n          <paper-icon-button\n            class=\"toggle-help-icon\"\n            @click=\"", "\"\n            icon=\"hass:help-circle\"\n          ></paper-icon-button>\n        </div>\n        <div slot=\"introduction\">\n          ",
            "\n          <p>\n            <a\n              href=\"https://www.home-assistant.io/docs/z-wave/control-panel/\"\n              target=\"_blank\"\n            >\n              ", "\n            </a>\n          </p>\n        </div>\n\n        ",
            "\n      </ha-config-section>\n    "])), this.isWide, this.hass.localize("ui.panel.config.zwave.network_management.header"), this._onHelpTap, this.hass.localize("ui.panel.config.zwave.network_management.introduction"), this.hass.localize("ui.panel.config.zwave.learn_more"), this._networkStatus
            ? Object(lit_element__WEBPACK_IMPORTED_MODULE_3__["html"])(templateObject_9 || (templateObject_9 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n              <ha-card class=\"content network-status\">\n                <div class=\"details\">\n                  ", "\n                </div>\n                <div class=\"card-actions\">\n                  ", "\n                </div>\n                ", "\n              </ha-card>\n              ", "\n            "], ["\n              <ha-card class=\"content network-status\">\n                <div class=\"details\">\n                  ",
                "\n                </div>\n                <div class=\"card-actions\">\n                  ",
                "\n                </div>\n                ",
                "\n              </ha-card>\n              ",
                "\n            "])), this._networkStatus.state === _data_zwave__WEBPACK_IMPORTED_MODULE_5__["ZWAVE_NETWORK_STATE_STOPPED"]
                ? Object(lit_element__WEBPACK_IMPORTED_MODULE_3__["html"])(templateObject_1 || (templateObject_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n                        <ha-icon icon=\"hass:close\"></ha-icon>\n                        ", "\n                      "], ["\n                        <ha-icon icon=\"hass:close\"></ha-icon>\n                        ",
                    "\n                      "])), this.hass.localize("ui.panel.config.zwave.network_status.network_stopped")) : this._networkStatus.state === _data_zwave__WEBPACK_IMPORTED_MODULE_5__["ZWAVE_NETWORK_STATE_STARTED"]
                ? Object(lit_element__WEBPACK_IMPORTED_MODULE_3__["html"])(templateObject_2 || (templateObject_2 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n                        <paper-spinner active></paper-spinner>\n                        ", "<br />\n                        <small>\n                          ", "\n                        </small>\n                      "], ["\n                        <paper-spinner active></paper-spinner>\n                        ",
                    "<br />\n                        <small>\n                          ",
                    "\n                        </small>\n                      "])), this.hass.localize("ui.panel.config.zwave.network_status.network_starting"), this.hass.localize("ui.panel.config.zwave.network_status.network_starting_note")) : this._networkStatus.state === _data_zwave__WEBPACK_IMPORTED_MODULE_5__["ZWAVE_NETWORK_STATE_AWAKED"]
                ? Object(lit_element__WEBPACK_IMPORTED_MODULE_3__["html"])(templateObject_3 || (templateObject_3 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n                        <ha-icon icon=\"hass:checkbox-marked-circle\"> </ha-icon>\n                        ", "<br />\n                        <small>\n                          ", "\n                        </small>\n                      "], ["\n                        <ha-icon icon=\"hass:checkbox-marked-circle\"> </ha-icon>\n                        ",
                    "<br />\n                        <small>\n                          ",
                    "\n                        </small>\n                      "])), this.hass.localize("ui.panel.config.zwave.network_status.network_started"), this.hass.localize("ui.panel.config.zwave.network_status.network_started_note_some_queried")) : this._networkStatus.state === _data_zwave__WEBPACK_IMPORTED_MODULE_5__["ZWAVE_NETWORK_STATE_READY"]
                ? Object(lit_element__WEBPACK_IMPORTED_MODULE_3__["html"])(templateObject_4 || (templateObject_4 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n                        ", "<br />\n                        <small>\n                          ", "\n                        </small>\n                      "], ["\n                        ",
                    "<br />\n                        <small>\n                          ",
                    "\n                        </small>\n                      "])), this.hass.localize("ui.panel.config.zwave.network_status.network_started"), this.hass.localize("ui.panel.config.zwave.network_status.network_started_note_all_queried")) : "", this._networkStatus.state >= _data_zwave__WEBPACK_IMPORTED_MODULE_5__["ZWAVE_NETWORK_STATE_AWAKED"]
                ? Object(lit_element__WEBPACK_IMPORTED_MODULE_3__["html"])(templateObject_5 || (templateObject_5 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n                        ", "\n                        ", "\n                        ", "\n                      "], ["\n                        ", "\n                        ", "\n                        ", "\n                      "])), this._generateServiceButton("stop_network"), this._generateServiceButton("heal_network"), this._generateServiceButton("test_network")) : Object(lit_element__WEBPACK_IMPORTED_MODULE_3__["html"])(templateObject_6 || (templateObject_6 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n                        ", "\n                      "], ["\n                        ", "\n                      "])), this._generateServiceButton("start_network")), this._networkStatus.state >= _data_zwave__WEBPACK_IMPORTED_MODULE_5__["ZWAVE_NETWORK_STATE_AWAKED"]
                ? Object(lit_element__WEBPACK_IMPORTED_MODULE_3__["html"])(templateObject_7 || (templateObject_7 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n                      <div class=\"card-actions\">\n                        ", "\n                        <ha-call-api-button\n                          .hass=", "\n                          path=\"zwave/saveconfig\"\n                        >\n                          ", "\n                        </ha-call-api-button>\n                      </div>\n                    "], ["\n                      <div class=\"card-actions\">\n                        ", "\n                        <ha-call-api-button\n                          .hass=", "\n                          path=\"zwave/saveconfig\"\n                        >\n                          ",
                    "\n                        </ha-call-api-button>\n                      </div>\n                    "])), this._generateServiceButton("soft_reset"), this.hass, this.hass.localize("ui.panel.config.zwave.services.save_config")) : "", this._networkStatus.state >= _data_zwave__WEBPACK_IMPORTED_MODULE_5__["ZWAVE_NETWORK_STATE_AWAKED"]
                ? Object(lit_element__WEBPACK_IMPORTED_MODULE_3__["html"])(templateObject_8 || (templateObject_8 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n                    <ha-card class=\"content\">\n                      <div class=\"card-actions\">\n                        ", "\n                        ", "\n                        ", "\n                      </div>\n                      <div class=\"card-actions\">\n                        ", "\n                      </div>\n                    </ha-card>\n                  "], ["\n                    <ha-card class=\"content\">\n                      <div class=\"card-actions\">\n                        ", "\n                        ", "\n                        ", "\n                      </div>\n                      <div class=\"card-actions\">\n                        ", "\n                      </div>\n                    </ha-card>\n                  "])), this._generateServiceButton("add_node_secure"), this._generateServiceButton("add_node"), this._generateServiceButton("remove_node"), this._generateServiceButton("cancel_command")) : "") : "");
    };
    ZwaveNetwork.prototype._getNetworkStatus = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var _a;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, Object(_data_zwave__WEBPACK_IMPORTED_MODULE_5__["fetchNetworkStatus"])(this.hass)];
                    case 1:
                        _a._networkStatus = _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ZwaveNetwork.prototype._subscribe = function () {
        var _this = this;
        this._unsubs = [
            "zwave.network_start",
            "zwave.network_stop",
            "zwave.network_ready",
            "zwave.network_complete",
            "zwave.network_complete_some_dead",
        ].map(function (e) {
            return _this.hass.connection.subscribeEvents(function (event) { return _this._handleEvent(event); }, e);
        });
    };
    ZwaveNetwork.prototype._unsubscribe = function () {
        while (this._unsubs.length) {
            this._unsubs.pop().then(function (unsub) { return unsub(); });
        }
    };
    ZwaveNetwork.prototype._handleEvent = function (event) {
        var _this = this;
        if (event.event_type === "zwave.network_start") {
            // Optimistically set the state, wait 1s and poll the backend
            // The backend will still report a state of 0 when the 'network_start'
            // event is first fired.
            if (this._networkStatus) {
                this._networkStatus = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this._networkStatus), { state: 5 });
            }
            setTimeout(function () { return _this._getNetworkStatus; }, 1000);
        }
        else {
            this._getNetworkStatus();
        }
    };
    ZwaveNetwork.prototype._onHelpTap = function () {
        this._showHelp = !this._showHelp;
    };
    ZwaveNetwork.prototype._generateServiceButton = function (service) {
        return Object(lit_element__WEBPACK_IMPORTED_MODULE_3__["html"])(templateObject_11 || (templateObject_11 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      <ha-call-service-button\n        .hass=", "\n        domain=\"zwave\"\n        service=\"", "\"\n      >\n        ", "\n      </ha-call-service-button>\n      <ha-service-description\n        .hass=", "\n        domain=\"zwave\"\n        service=\"", "\"\n        ?hidden=", "\n      >\n      </ha-service-description>\n    "], ["\n      <ha-call-service-button\n        .hass=", "\n        domain=\"zwave\"\n        service=\"", "\"\n      >\n        ", "\n      </ha-call-service-button>\n      <ha-service-description\n        .hass=", "\n        domain=\"zwave\"\n        service=\"", "\"\n        ?hidden=", "\n      >\n      </ha-service-description>\n    "])), this.hass, service, this.hass.localize("ui.panel.config.zwave.services." + service), this.hass, service, !this._showHelp);
    };
    Object.defineProperty(ZwaveNetwork, "styles", {
        get: function () {
            return [
                _resources_styles__WEBPACK_IMPORTED_MODULE_4__["haStyle"],
                Object(lit_element__WEBPACK_IMPORTED_MODULE_3__["css"])(templateObject_12 || (templateObject_12 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n        .content {\n          margin-top: 24px;\n        }\n\n        .sectionHeader {\n          position: relative;\n          padding-right: 40px;\n        }\n\n        .network-status {\n          text-align: center;\n        }\n\n        .network-status div.details {\n          font-size: 1.5rem;\n          padding: 24px;\n        }\n\n        .network-status ha-icon {\n          display: block;\n          margin: 0px auto 16px;\n          width: 48px;\n          height: 48px;\n        }\n\n        .network-status small {\n          font-size: 1rem;\n        }\n\n        ha-card {\n          margin: 0 auto;\n          max-width: 600px;\n        }\n\n        .card-actions.warning ha-call-service-button {\n          color: var(--google-red-500);\n        }\n\n        .toggle-help-icon {\n          position: absolute;\n          top: -6px;\n          right: 0;\n          color: var(--primary-color);\n        }\n\n        ha-service-description {\n          display: block;\n          color: grey;\n          padding: 0 8px 12px;\n        }\n\n        [hidden] {\n          display: none;\n        }\n      "], ["\n        .content {\n          margin-top: 24px;\n        }\n\n        .sectionHeader {\n          position: relative;\n          padding-right: 40px;\n        }\n\n        .network-status {\n          text-align: center;\n        }\n\n        .network-status div.details {\n          font-size: 1.5rem;\n          padding: 24px;\n        }\n\n        .network-status ha-icon {\n          display: block;\n          margin: 0px auto 16px;\n          width: 48px;\n          height: 48px;\n        }\n\n        .network-status small {\n          font-size: 1rem;\n        }\n\n        ha-card {\n          margin: 0 auto;\n          max-width: 600px;\n        }\n\n        .card-actions.warning ha-call-service-button {\n          color: var(--google-red-500);\n        }\n\n        .toggle-help-icon {\n          position: absolute;\n          top: -6px;\n          right: 0;\n          color: var(--primary-color);\n        }\n\n        ha-service-description {\n          display: block;\n          color: grey;\n          padding: 0 8px 12px;\n        }\n\n        [hidden] {\n          display: none;\n        }\n      "]))),
            ];
        },
        enumerable: true,
        configurable: true
    });
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_3__["property"])()
    ], ZwaveNetwork.prototype, "hass", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_3__["property"])()
    ], ZwaveNetwork.prototype, "isWide", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_3__["property"])()
    ], ZwaveNetwork.prototype, "_showHelp", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_3__["property"])()
    ], ZwaveNetwork.prototype, "_networkStatus", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_3__["property"])()
    ], ZwaveNetwork.prototype, "_unsubs", void 0);
    ZwaveNetwork = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_3__["customElement"])("zwave-network")
    ], ZwaveNetwork);
    return ZwaveNetwork;
}(lit_element__WEBPACK_IMPORTED_MODULE_3__["LitElement"]));

var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11, templateObject_12;


/***/ }),

/***/ "./src/panels/config/zwave/zwave-node-config.ts":
/*!******************************************************!*\
  !*** ./src/panels/config/zwave/zwave-node-config.ts ***!
  \******************************************************/
/*! exports provided: ZwaveNodeConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZwaveNodeConfig", function() { return ZwaveNodeConfig; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _polymer_paper_dropdown_menu_paper_dropdown_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-dropdown-menu/paper-dropdown-menu */ "./node_modules/@polymer/paper-dropdown-menu/paper-dropdown-menu.js");
/* harmony import */ var _polymer_paper_input_paper_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-input/paper-input */ "./node_modules/@polymer/paper-input/paper-input.js");
/* harmony import */ var _polymer_paper_item_paper_item__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/paper-item/paper-item */ "./node_modules/@polymer/paper-item/paper-item.js");
/* harmony import */ var _polymer_paper_listbox_paper_listbox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/paper-listbox/paper-listbox */ "./node_modules/@polymer/paper-listbox/paper-listbox.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _resources_styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../resources/styles */ "./src/resources/styles.ts");
/* harmony import */ var _components_buttons_ha_call_service_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/buttons/ha-call-service-button */ "./src/components/buttons/ha-call-service-button.js");
/* harmony import */ var _components_ha_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../components/ha-card */ "./src/components/ha-card.ts");
/* harmony import */ var _data_zwave__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../data/zwave */ "./src/data/zwave.ts");










var ZwaveNodeConfig = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(ZwaveNodeConfig, _super);
    function ZwaveNodeConfig() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.nodes = [];
        _this.config = [];
        _this.selectedNode = -1;
        _this._wakeupInput = -1;
        _this._selectedConfigParameter = -1;
        _this._selectedConfigValue = -1;
        return _this;
    }
    ZwaveNodeConfig.prototype.render = function () {
        return Object(lit_element__WEBPACK_IMPORTED_MODULE_5__["html"])(templateObject_9 || (templateObject_9 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      <div class=\"content\">\n        <ha-card\n          .header=", "\n        >\n          ", "\n          <div class=\"device-picker\">\n            <paper-dropdown-menu\n              .label=", "\n              dynamic-align\n              class=\"flex\"\n            >\n              <paper-listbox\n                slot=\"dropdown-content\"\n                .selected=", "\n                @iron-select=", "\n              >\n                ", "\n              </paper-listbox>\n            </paper-dropdown-menu>\n          </div>\n          ", "\n        </ha-card>\n      </div>\n    "], ["\n      <div class=\"content\">\n        <ha-card\n          .header=",
            "\n        >\n          ",
            "\n          <div class=\"device-picker\">\n            <paper-dropdown-menu\n              .label=",
            "\n              dynamic-align\n              class=\"flex\"\n            >\n              <paper-listbox\n                slot=\"dropdown-content\"\n                .selected=", "\n                @iron-select=", "\n              >\n                ",
            "\n              </paper-listbox>\n            </paper-dropdown-menu>\n          </div>\n          ",
            "\n        </ha-card>\n      </div>\n    "])), this.hass.localize("ui.panel.config.zwave.node_config.header"), "wake_up_interval" in this.nodes[this.selectedNode].attributes
            ? Object(lit_element__WEBPACK_IMPORTED_MODULE_5__["html"])(templateObject_1 || (templateObject_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n                <div class=\"card-actions\">\n                  <paper-input\n                    .floatLabel=\"", "\"\n                    type=\"number\"\n                    .value=", "\n                    @value-changed=", "\n                    .placeholder=", "\n                  >\n                    <div suffix>\n                      ", "\n                    </div>\n                  </paper-input>\n                  <ha-call-service-button\n                    .hass=", "\n                    domain=\"zwave\"\n                    service=\"set_wakeup\"\n                    .serviceData=", "\n                  >\n                    ", "\n                  </ha-call-service-button>\n                </div>\n              "], ["\n                <div class=\"card-actions\">\n                  <paper-input\n                    .floatLabel=\"",
                "\"\n                    type=\"number\"\n                    .value=",
                "\n                    @value-changed=", "\n                    .placeholder=",
                "\n                  >\n                    <div suffix>\n                      ",
                "\n                    </div>\n                  </paper-input>\n                  <ha-call-service-button\n                    .hass=", "\n                    domain=\"zwave\"\n                    service=\"set_wakeup\"\n                    .serviceData=",
                "\n                  >\n                    ",
                "\n                  </ha-call-service-button>\n                </div>\n              "])), this.hass.localize("ui.panel.config.zwave.common.wakeup_interval"), this._wakeupInput !== -1
                ? this._wakeupInput
                : this.hass.localize("ui.panel.config.zwave.common.unknown"), this._onWakeupIntervalChanged, this.nodes[this.selectedNode].attributes
                .wake_up_interval
                ? this.nodes[this.selectedNode].attributes
                    .wake_up_interval
                : this.hass.localize("ui.panel.config.zwave.common.unknown"), this.hass.localize("ui.panel.config.zwave.node_config.seconds"), this.hass, this._computeWakeupServiceData(this._wakeupInput), this.hass.localize("ui.panel.config.zwave.node_config.set_wakeup")) : "", this.hass.localize("ui.panel.config.zwave.node_config.config_parameter"), this._selectedConfigParameter, this._selectedConfigParameterChanged, this.config.map(function (state) { return Object(lit_element__WEBPACK_IMPORTED_MODULE_5__["html"])(templateObject_2 || (templateObject_2 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n                    <paper-item>\n                      ", ": ", "\n                    </paper-item>\n                  "], ["\n                    <paper-item>\n                      ", ": ", "\n                    </paper-item>\n                  "])), state.key, state.value.label); }), this._configItem
            ? Object(lit_element__WEBPACK_IMPORTED_MODULE_5__["html"])(templateObject_8 || (templateObject_8 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n                ", "\n                ", "\n                ", "\n                <div class=\"help-text\">\n                  <span>", "</span>\n                </div>\n                ", "\n              "], ["\n                ",
                "\n                ",
                "\n                ",
                "\n                <div class=\"help-text\">\n                  <span>", "</span>\n                </div>\n                ",
                "\n              "])), this._configItem.value.type === "List"
                ? Object(lit_element__WEBPACK_IMPORTED_MODULE_5__["html"])(templateObject_4 || (templateObject_4 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n                      <div class=\"device-picker\">\n                        <paper-dropdown-menu\n                          .label=", "\n                          dynamic-align\n                          class=\"flex\"\n                          .placeholder=", "\n                        >\n                          <paper-listbox\n                            slot=\"dropdown-content\"\n                            .selected=", "\n                            @iron-select=", "\n                          >\n                            ", "\n                          </paper-listbox>\n                        </paper-dropdown-menu>\n                      </div>\n                    "], ["\n                      <div class=\"device-picker\">\n                        <paper-dropdown-menu\n                          .label=",
                    "\n                          dynamic-align\n                          class=\"flex\"\n                          .placeholder=", "\n                        >\n                          <paper-listbox\n                            slot=\"dropdown-content\"\n                            .selected=", "\n                            @iron-select=", "\n                          >\n                            ",
                    "\n                          </paper-listbox>\n                        </paper-dropdown-menu>\n                      </div>\n                    "])), this.hass.localize("ui.panel.config.zwave.node_config.config_value"), this._configItem.value.data, this._configItem.value.data, this._configValueSelectChanged, this._configItem.value.data_items.map(function (state) { return Object(lit_element__WEBPACK_IMPORTED_MODULE_5__["html"])(templateObject_3 || (templateObject_3 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n                                <paper-item>", "</paper-item>\n                              "], ["\n                                <paper-item>", "</paper-item>\n                              "])), state); })) : "", ["Byte", "Short", "Int"].includes(this._configItem.value.type)
                ? Object(lit_element__WEBPACK_IMPORTED_MODULE_5__["html"])(templateObject_5 || (templateObject_5 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n                      <div class=\"card-actions\">\n                        <paper-input\n                          .label=", "\n                          type=\"number\"\n                          .value=", "\n                          .max=", "\n                          .min=", "\n                          @value-changed=", "\n                        >\n                        </paper-input>\n                      </div>\n                    "], ["\n                      <div class=\"card-actions\">\n                        <paper-input\n                          .label=", "\n                          type=\"number\"\n                          .value=", "\n                          .max=", "\n                          .min=", "\n                          @value-changed=", "\n                        >\n                        </paper-input>\n                      </div>\n                    "])), this._configItem.value.data_items, this._configItem.value.data, this._configItem.value.max, this._configItem.value.min, this._configValueInputChanged) : "", ["Bool", "Button"].includes(this._configItem.value.type)
                ? Object(lit_element__WEBPACK_IMPORTED_MODULE_5__["html"])(templateObject_6 || (templateObject_6 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n                      <div class=\"device-picker\">\n                        <paper-dropdown-menu\n                          .label=", "\n                          class=\"flex\"\n                          dynamic-align\n                          .placeholder=", "\n                        >\n                          <paper-listbox\n                            slot=\"dropdown-content\"\n                            .selected=", "\n                            @iron-select=", "\n                          >\n                            <paper-item>\n                              ", "\n                            </paper-item>\n                            <paper-item>\n                              ", "\n                            </paper-item>\n                          </paper-listbox>\n                        </paper-dropdown-menu>\n                      </div>\n                    "], ["\n                      <div class=\"device-picker\">\n                        <paper-dropdown-menu\n                          .label=",
                    "\n                          class=\"flex\"\n                          dynamic-align\n                          .placeholder=", "\n                        >\n                          <paper-listbox\n                            slot=\"dropdown-content\"\n                            .selected=", "\n                            @iron-select=", "\n                          >\n                            <paper-item>\n                              ",
                    "\n                            </paper-item>\n                            <paper-item>\n                              ",
                    "\n                            </paper-item>\n                          </paper-listbox>\n                        </paper-dropdown-menu>\n                      </div>\n                    "])), this.hass.localize("ui.panel.config.zwave.node_config.config_value"), this._configItem.value.data, this._configItem.value.data, this._configValueSelectChanged, this.hass.localize("ui.panel.config.zwave.node_config.true"), this.hass.localize("ui.panel.config.zwave.node_config.false")) : "", this._configItem.value.help, ["Bool", "Button", "Byte", "Short", "Int", "List"].includes(this._configItem.value.type)
                ? Object(lit_element__WEBPACK_IMPORTED_MODULE_5__["html"])(templateObject_7 || (templateObject_7 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n                      <div class=\"card-actions\">\n                        <ha-call-service-button\n                          .hass=", "\n                          domain=\"zwave\"\n                          service=\"set_config_parameter\"\n                          .serviceData=", "\n                        >\n                          ", "\n                        </ha-call-service-button>\n                      </div>\n                    "], ["\n                      <div class=\"card-actions\">\n                        <ha-call-service-button\n                          .hass=", "\n                          domain=\"zwave\"\n                          service=\"set_config_parameter\"\n                          .serviceData=", "\n                        >\n                          ",
                    "\n                        </ha-call-service-button>\n                      </div>\n                    "])), this.hass, this._computeSetConfigParameterServiceData(), this.hass.localize("ui.panel.config.zwave.node_config.set_config_parameter")) : "") : "");
    };
    Object.defineProperty(ZwaveNodeConfig, "styles", {
        get: function () {
            return [
                _resources_styles__WEBPACK_IMPORTED_MODULE_6__["haStyle"],
                Object(lit_element__WEBPACK_IMPORTED_MODULE_5__["css"])(templateObject_10 || (templateObject_10 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n        .content {\n          margin-top: 24px;\n        }\n\n        ha-card {\n          margin: 0 auto;\n          max-width: 600px;\n        }\n\n        .device-picker {\n          @apply --layout-horizontal;\n          @apply --layout-center-center;\n          display: -ms-flexbox;\n          display: -webkit-flex;\n          display: flex;\n          -ms-flex-direction: row;\n          -webkit-flex-direction: row;\n          flex-direction: row;\n          -ms-flex-align: center;\n          -webkit-align-items: center;\n          align-items: center;\n          padding-left: 24px;\n          padding-right: 24px;\n          padding-bottom: 24px;\n        }\n\n        .help-text {\n          padding-left: 24px;\n          padding-right: 24px;\n        }\n\n        .flex {\n          -ms-flex: 1 1 0.000000001px;\n          -webkit-flex: 1;\n          flex: 1;\n          -webkit-flex-basis: 0.000000001px;\n          flex-basis: 0.000000001px;\n        }\n      "], ["\n        .content {\n          margin-top: 24px;\n        }\n\n        ha-card {\n          margin: 0 auto;\n          max-width: 600px;\n        }\n\n        .device-picker {\n          @apply --layout-horizontal;\n          @apply --layout-center-center;\n          display: -ms-flexbox;\n          display: -webkit-flex;\n          display: flex;\n          -ms-flex-direction: row;\n          -webkit-flex-direction: row;\n          flex-direction: row;\n          -ms-flex-align: center;\n          -webkit-align-items: center;\n          align-items: center;\n          padding-left: 24px;\n          padding-right: 24px;\n          padding-bottom: 24px;\n        }\n\n        .help-text {\n          padding-left: 24px;\n          padding-right: 24px;\n        }\n\n        .flex {\n          -ms-flex: 1 1 0.000000001px;\n          -webkit-flex: 1;\n          flex: 1;\n          -webkit-flex-basis: 0.000000001px;\n          flex-basis: 0.000000001px;\n        }\n      "]))),
            ];
        },
        enumerable: true,
        configurable: true
    });
    ZwaveNodeConfig.prototype.firstUpdated = function (changedProps) {
        var _this = this;
        _super.prototype.firstUpdated.call(this, changedProps);
        this.addEventListener("hass-service-called", function (ev) {
            return _this.serviceCalled(ev);
        });
    };
    ZwaveNodeConfig.prototype.updated = function (changedProps) {
        _super.prototype.updated.call(this, changedProps);
        if (changedProps.has("selectedNode")) {
            this._nodesChanged();
        }
    };
    ZwaveNodeConfig.prototype.serviceCalled = function (ev) {
        var _this = this;
        if (ev.detail.success) {
            setTimeout(function () {
                _this._refreshConfig(_this.selectedNode);
            }, 5000);
        }
    };
    ZwaveNodeConfig.prototype._nodesChanged = function () {
        if (!this.nodes) {
            return;
        }
        this._configItem = undefined;
        this._wakeupInput = this.nodes[this.selectedNode].attributes.hasOwnProperty("wake_up_interval")
            ? this.nodes[this.selectedNode].attributes.wake_up_interval
            : -1;
    };
    ZwaveNodeConfig.prototype._onWakeupIntervalChanged = function (value) {
        this._wakeupInput = value.detail.value;
    };
    ZwaveNodeConfig.prototype._computeWakeupServiceData = function (wakeupInput) {
        return {
            node_id: this.nodes[this.selectedNode].attributes.node_id,
            value: wakeupInput,
        };
    };
    ZwaveNodeConfig.prototype._computeSetConfigParameterServiceData = function () {
        if (this.selectedNode === -1 || typeof this._configItem === "undefined") {
            return false;
        }
        var valueData = "";
        if (["Short", "Byte", "Int"].includes(this._configItem.value.type)) {
            valueData =
                typeof this._selectedConfigValue === "string"
                    ? parseInt(this._selectedConfigValue, 10)
                    : this._selectedConfigValue;
        }
        if (["Bool", "Button", "List"].includes(this._configItem.value.type)) {
            valueData = this._selectedConfigValue;
        }
        return {
            node_id: this.nodes[this.selectedNode].attributes.node_id,
            parameter: this._configItem.key,
            value: valueData,
        };
    };
    ZwaveNodeConfig.prototype._selectedConfigParameterChanged = function (event) {
        if (event.target.selected === -1) {
            return;
        }
        this._selectedConfigParameter = event.target.selected;
        this._configItem = this.config[event.target.selected];
    };
    ZwaveNodeConfig.prototype._configValueSelectChanged = function (event) {
        if (event.target.selected === -1) {
            return;
        }
        this._selectedConfigValue = event.target.selectedItem.textContent;
    };
    ZwaveNodeConfig.prototype._configValueInputChanged = function (value) {
        this._selectedConfigValue = value.detail.value;
    };
    ZwaveNodeConfig.prototype._refreshConfig = function (selectedNode) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var configData, config;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        configData = [];
                        return [4 /*yield*/, Object(_data_zwave__WEBPACK_IMPORTED_MODULE_9__["fetchNodeConfig"])(this.hass, this.nodes[selectedNode].attributes.node_id)];
                    case 1:
                        config = _a.sent();
                        Object.keys(config).forEach(function (key) {
                            configData.push({
                                key: parseInt(key, 10),
                                value: config[key],
                            });
                        });
                        this.config = configData;
                        this._configItem = this.config[this._selectedConfigParameter];
                        return [2 /*return*/];
                }
            });
        });
    };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_5__["property"])()
    ], ZwaveNodeConfig.prototype, "hass", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_5__["property"])()
    ], ZwaveNodeConfig.prototype, "nodes", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_5__["property"])()
    ], ZwaveNodeConfig.prototype, "config", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_5__["property"])()
    ], ZwaveNodeConfig.prototype, "selectedNode", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_5__["property"])()
    ], ZwaveNodeConfig.prototype, "_configItem", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_5__["property"])()
    ], ZwaveNodeConfig.prototype, "_wakeupInput", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_5__["property"])()
    ], ZwaveNodeConfig.prototype, "_selectedConfigParameter", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_5__["property"])()
    ], ZwaveNodeConfig.prototype, "_selectedConfigValue", void 0);
    ZwaveNodeConfig = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_5__["customElement"])("zwave-node-config")
    ], ZwaveNodeConfig);
    return ZwaveNodeConfig;
}(lit_element__WEBPACK_IMPORTED_MODULE_5__["LitElement"]));

var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10;


/***/ }),

/***/ "./src/panels/config/zwave/zwave-node-protection.js":
/*!**********************************************************!*\
  !*** ./src/panels/config/zwave/zwave-node-protection.js ***!
  \**********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_paper_dropdown_menu_paper_dropdown_menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/paper-dropdown-menu/paper-dropdown-menu */ "./node_modules/@polymer/paper-dropdown-menu/paper-dropdown-menu.js");
/* harmony import */ var _polymer_paper_input_paper_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-input/paper-input */ "./node_modules/@polymer/paper-input/paper-input.js");
/* harmony import */ var _polymer_paper_item_paper_item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-item/paper-item */ "./node_modules/@polymer/paper-item/paper-item.js");
/* harmony import */ var _polymer_paper_listbox_paper_listbox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/paper-listbox/paper-listbox */ "./node_modules/@polymer/paper-listbox/paper-listbox.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _components_buttons_ha_call_api_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/buttons/ha-call-api-button */ "./src/components/buttons/ha-call-api-button.js");
/* harmony import */ var _components_ha_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/ha-card */ "./src/components/ha-card.ts");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    <style include=\"iron-flex ha-style\">\n      .card-actions.warning ha-call-api-button {\n        color: var(--google-red-500);\n      }\n      .content {\n        margin-top: 24px;\n      }\n\n      ha-card {\n        margin: 0 auto;\n        max-width: 600px;\n      }\n\n      .device-picker {\n        @apply --layout-horizontal;\n        @apply --layout-center-center;\n        padding: 0 24px 24px 24px;\n        }\n\n    </style>\n      <div class=\"content\">\n        <ha-card header=\"Node protection\">\n          <div class=\"device-picker\">\n          <paper-dropdown-menu label=\"Protection\" dynamic-align class=\"flex\" placeholder=\"{{_loadedProtectionValue}}\">\n            <paper-listbox slot=\"dropdown-content\" selected=\"{{_selectedProtectionParameter}}\">\n              <template is=\"dom-repeat\" items=\"[[_protectionOptions]]\" as=\"state\">\n                <paper-item>[[state]]</paper-item>\n              </template>\n            </paper-listbox>\n          </paper-dropdown-menu>\n          </div>\n          <div class=\"card-actions\">\n            <ha-call-api-button\n              hass=\"[[hass]]\"\n              path=\"[[_nodePath]]\"\n              data=\"[[_protectionData]]\">\n              Set Protection\n            </ha-call-service-button>\n          </div>\n        </ha-card>\n      </div>\n"]);

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










var ZwaveNodeProtection =
/*#__PURE__*/
function (_PolymerElement) {
  _inherits(ZwaveNodeProtection, _PolymerElement);

  function ZwaveNodeProtection() {
    _classCallCheck(this, ZwaveNodeProtection);

    return _possibleConstructorReturn(this, _getPrototypeOf(ZwaveNodeProtection).apply(this, arguments));
  }

  _createClass(ZwaveNodeProtection, [{
    key: "ready",
    value: function ready() {
      var _this = this;

      _get(_getPrototypeOf(ZwaveNodeProtection.prototype), "ready", this).call(this);

      this.addEventListener("hass-api-called", function (ev) {
        return _this.apiCalled(ev);
      });
    }
  }, {
    key: "apiCalled",
    value: function apiCalled(ev) {
      var _this2 = this;

      if (ev.detail.success) {
        setTimeout(function () {
          _this2._refreshProtection(_this2.selectedNode);
        }, 5000);
      }
    }
  }, {
    key: "_nodesChanged",
    value: function _nodesChanged() {
      if (!this.nodes) return;

      if (this.protection) {
        if (this.protection.length === 0) {
          return;
        }

        this.setProperties({
          protectionNode: true,
          _protectionOptions: this.protection[0].value,
          _loadedProtectionValue: this.protection[1].value,
          _protectionValueID: this.protection[2].value
        });
      }
    }
  }, {
    key: "_refreshProtection",
    value: function () {
      var _refreshProtection2 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(selectedNode) {
        var protectionValues, protections;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                protectionValues = [];
                _context.next = 3;
                return this.hass.callApi("GET", "zwave/protection/".concat(this.nodes[selectedNode].attributes.node_id));

              case 3:
                protections = _context.sent;
                Object.keys(protections).forEach(function (key) {
                  protectionValues.push({
                    key: key,
                    value: protections[key]
                  });
                });
                this.setProperties({
                  _protection: protectionValues,
                  _selectedProtectionParameter: -1,
                  _loadedProtectionValue: this.protection[1].value
                });

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function _refreshProtection(_x) {
        return _refreshProtection2.apply(this, arguments);
      }

      return _refreshProtection;
    }()
  }, {
    key: "_computeProtectionData",
    value: function _computeProtectionData(selectedProtectionParameter) {
      if (this.selectedNode === -1 || selectedProtectionParameter === -1) return;
      this._protectionData = {
        selection: this._protectionOptions[selectedProtectionParameter],
        value_id: this._protectionValueID
      };
      this._nodePath = "zwave/protection/".concat(this.nodes[this.selectedNode].attributes.node_id);
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
        nodes: Array,
        selectedNode: {
          type: Number,
          value: -1
        },
        protectionNode: {
          type: Boolean,
          value: false
        },
        _protectionValueID: {
          type: Number,
          value: -1
        },
        _selectedProtectionParameter: {
          type: Number,
          value: -1,
          observer: "_computeProtectionData"
        },
        _protectionOptions: Array,
        _protection: {
          type: Array,
          value: function value() {
            return [];
          }
        },
        _loadedProtectionValue: {
          type: String,
          value: ""
        },
        _protectionData: {
          type: Object,
          value: {}
        },
        _nodePath: String
      };
    }
  }, {
    key: "observers",
    get: function get() {
      return ["_nodesChanged(nodes, selectedNode)"];
    }
  }]);

  return ZwaveNodeProtection;
}(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_5__["PolymerElement"]);

customElements.define("zwave-node-protection", ZwaveNodeProtection);

/***/ }),

/***/ "./src/panels/config/zwave/zwave-usercodes.js":
/*!****************************************************!*\
  !*** ./src/panels/config/zwave/zwave-usercodes.js ***!
  \****************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_paper_dropdown_menu_paper_dropdown_menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/paper-dropdown-menu/paper-dropdown-menu */ "./node_modules/@polymer/paper-dropdown-menu/paper-dropdown-menu.js");
/* harmony import */ var _polymer_paper_input_paper_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-input/paper-input */ "./node_modules/@polymer/paper-input/paper-input.js");
/* harmony import */ var _polymer_paper_item_paper_item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-item/paper-item */ "./node_modules/@polymer/paper-item/paper-item.js");
/* harmony import */ var _polymer_paper_listbox_paper_listbox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/paper-listbox/paper-listbox */ "./node_modules/@polymer/paper-listbox/paper-listbox.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _components_buttons_ha_call_service_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/buttons/ha-call-service-button */ "./src/components/buttons/ha-call-service-button.js");
/* harmony import */ var _components_ha_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/ha-card */ "./src/components/ha-card.ts");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      <style include=\"iron-flex ha-style\">\n        .content {\n          margin-top: 24px;\n        }\n\n        ha-card {\n          margin: 0 auto;\n          max-width: 600px;\n        }\n\n        .device-picker {\n          @apply --layout-horizontal;\n          @apply --layout-center-center;\n          padding-left: 24px;\n          padding-right: 24px;\n          padding-bottom: 24px;\n        }\n      </style>\n      <div class=\"content\">\n        <ha-card header=\"Node user codes\">\n          <div class=\"device-picker\">\n            <paper-dropdown-menu\n              label=\"Code slot\"\n              dynamic-align=\"\"\n              class=\"flex\"\n            >\n              <paper-listbox\n                slot=\"dropdown-content\"\n                selected=\"{{_selectedUserCode}}\"\n              >\n                <template is=\"dom-repeat\" items=\"[[userCodes]]\" as=\"state\">\n                  <paper-item\n                    >[[_computeSelectCaptionUserCodes(state)]]</paper-item\n                  >\n                </template>\n              </paper-listbox>\n            </paper-dropdown-menu>\n          </div>\n\n          <template is=\"dom-if\" if=\"[[_isUserCodeSelected(_selectedUserCode)]]\">\n            <div class=\"card-actions\">\n              <paper-input\n                label=\"User code\"\n                type=\"text\"\n                allowed-pattern=\"[0-9,a-f,x,\\\\]\"\n                maxlength=\"40\"\n                minlength=\"16\"\n                value=\"{{_selectedUserCodeValue}}\"\n              >\n              </paper-input>\n              <pre>Ascii: [[_computedCodeOutput]]</pre>\n            </div>\n            <div class=\"card-actions\">\n              <ha-call-service-button\n                hass=\"[[hass]]\"\n                domain=\"lock\"\n                service=\"set_usercode\"\n                service-data='[[_computeUserCodeServiceData(_selectedUserCodeValue, \"Add\")]]'\n              >\n                Set Usercode\n              </ha-call-service-button>\n              <ha-call-service-button\n                hass=\"[[hass]]\"\n                domain=\"lock\"\n                service=\"clear_usercode\"\n                service-data='[[_computeUserCodeServiceData(_selectedUserCode, \"Delete\")]]'\n              >\n                Delete Usercode\n              </ha-call-service-button>\n            </div>\n          </template>\n        </ha-card>\n      </div>\n    "], ["\n      <style include=\"iron-flex ha-style\">\n        .content {\n          margin-top: 24px;\n        }\n\n        ha-card {\n          margin: 0 auto;\n          max-width: 600px;\n        }\n\n        .device-picker {\n          @apply --layout-horizontal;\n          @apply --layout-center-center;\n          padding-left: 24px;\n          padding-right: 24px;\n          padding-bottom: 24px;\n        }\n      </style>\n      <div class=\"content\">\n        <ha-card header=\"Node user codes\">\n          <div class=\"device-picker\">\n            <paper-dropdown-menu\n              label=\"Code slot\"\n              dynamic-align=\"\"\n              class=\"flex\"\n            >\n              <paper-listbox\n                slot=\"dropdown-content\"\n                selected=\"{{_selectedUserCode}}\"\n              >\n                <template is=\"dom-repeat\" items=\"[[userCodes]]\" as=\"state\">\n                  <paper-item\n                    >[[_computeSelectCaptionUserCodes(state)]]</paper-item\n                  >\n                </template>\n              </paper-listbox>\n            </paper-dropdown-menu>\n          </div>\n\n          <template is=\"dom-if\" if=\"[[_isUserCodeSelected(_selectedUserCode)]]\">\n            <div class=\"card-actions\">\n              <paper-input\n                label=\"User code\"\n                type=\"text\"\n                allowed-pattern=\"[0-9,a-f,x,\\\\\\\\]\"\n                maxlength=\"40\"\n                minlength=\"16\"\n                value=\"{{_selectedUserCodeValue}}\"\n              >\n              </paper-input>\n              <pre>Ascii: [[_computedCodeOutput]]</pre>\n            </div>\n            <div class=\"card-actions\">\n              <ha-call-service-button\n                hass=\"[[hass]]\"\n                domain=\"lock\"\n                service=\"set_usercode\"\n                service-data='[[_computeUserCodeServiceData(_selectedUserCodeValue, \"Add\")]]'\n              >\n                Set Usercode\n              </ha-call-service-button>\n              <ha-call-service-button\n                hass=\"[[hass]]\"\n                domain=\"lock\"\n                service=\"clear_usercode\"\n                service-data='[[_computeUserCodeServiceData(_selectedUserCode, \"Delete\")]]'\n              >\n                Delete Usercode\n              </ha-call-service-button>\n            </div>\n          </template>\n        </ha-card>\n      </div>\n    "]);

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










var ZwaveUsercodes =
/*#__PURE__*/
function (_PolymerElement) {
  _inherits(ZwaveUsercodes, _PolymerElement);

  function ZwaveUsercodes() {
    _classCallCheck(this, ZwaveUsercodes);

    return _possibleConstructorReturn(this, _getPrototypeOf(ZwaveUsercodes).apply(this, arguments));
  }

  _createClass(ZwaveUsercodes, [{
    key: "ready",
    value: function ready() {
      var _this = this;

      _get(_getPrototypeOf(ZwaveUsercodes.prototype), "ready", this).call(this);

      this.addEventListener("hass-service-called", function (ev) {
        return _this.serviceCalled(ev);
      });
    }
  }, {
    key: "serviceCalled",
    value: function serviceCalled(ev) {
      var _this2 = this;

      if (ev.detail.success) {
        setTimeout(function () {
          _this2._refreshUserCodes(_this2.selectedNode);
        }, 5000);
      }
    }
  }, {
    key: "_isUserCodeSelected",
    value: function _isUserCodeSelected(selectedUserCode) {
      if (selectedUserCode === -1) return false;
      return true;
    }
  }, {
    key: "_computeSelectCaptionUserCodes",
    value: function _computeSelectCaptionUserCodes(stateObj) {
      return "".concat(stateObj.key, ": ").concat(stateObj.value.label);
    }
  }, {
    key: "_selectedUserCodeChanged",
    value: function _selectedUserCodeChanged(selectedUserCode) {
      if (this._selectedUserCode === -1 || selectedUserCode === -1) return;
      var value = this.userCodes[selectedUserCode].value.code;
      this.setProperties({
        _selectedUserCodeValue: this._a2hex(value),
        _computedCodeOutput: "[".concat(this._hex2a(this._a2hex(value)), "]")
      });
    }
  }, {
    key: "_computeUserCodeServiceData",
    value: function _computeUserCodeServiceData(selectedUserCodeValue, type) {
      if (this.selectedNode === -1 || !selectedUserCodeValue) return -1;
      var serviceData = null;
      var valueData = null;

      if (type === "Add") {
        valueData = this._hex2a(selectedUserCodeValue);
        this._computedCodeOutput = "[".concat(valueData, "]");
        serviceData = {
          node_id: this.nodes[this.selectedNode].attributes.node_id,
          code_slot: this._selectedUserCode,
          usercode: valueData
        };
      }

      if (type === "Delete") {
        serviceData = {
          node_id: this.nodes[this.selectedNode].attributes.node_id,
          code_slot: this._selectedUserCode
        };
      }

      return serviceData;
    }
  }, {
    key: "_refreshUserCodes",
    value: function () {
      var _refreshUserCodes2 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(selectedNode) {
        var userCodes, userCodeData;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this.setProperties({
                  _selectedUserCodeValue: ""
                });
                userCodes = [];
                _context.next = 4;
                return this.hass.callApi("GET", "zwave/usercodes/".concat(this.nodes[selectedNode].attributes.node_id));

              case 4:
                userCodeData = _context.sent;
                Object.keys(userCodeData).forEach(function (key) {
                  userCodes.push({
                    key: key,
                    value: userCodeData[key]
                  });
                });
                this.setProperties({
                  userCodes: userCodes
                });

                this._selectedUserCodeChanged(this._selectedUserCode);

              case 8:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function _refreshUserCodes(_x) {
        return _refreshUserCodes2.apply(this, arguments);
      }

      return _refreshUserCodes;
    }()
  }, {
    key: "_a2hex",
    value: function _a2hex(str) {
      var arr = [];
      var output = "";

      for (var i = 0, l = str.length; i < l; i++) {
        var hex = Number(str.charCodeAt(i)).toString(16);

        if (hex === "0") {
          output = "00";
        } else {
          output = hex;
        }

        arr.push("\\x" + output);
      }

      return arr.join("");
    }
  }, {
    key: "_hex2a",
    value: function _hex2a(hexx) {
      var hex = hexx.toString();
      var hexMod = hex.replace(/\\x/g, "");
      var str = "";

      for (var i = 0; i < hexMod.length; i += 2) {
        str += String.fromCharCode(parseInt(hexMod.substr(i, 2), 16));
      }

      return str;
    }
  }, {
    key: "_selectedNodeChanged",
    value: function _selectedNodeChanged() {
      if (this.selectedNode === -1) return;
      this.setProperties({
        _selecteduserCode: -1
      });
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
        nodes: Array,
        selectedNode: {
          type: Number,
          observer: "_selectedNodeChanged"
        },
        userCodes: Object,
        _selectedUserCode: {
          type: Number,
          value: -1,
          observer: "_selectedUserCodeChanged"
        },
        _selectedUserCodeValue: String,
        _computedCodeOutput: {
          type: String,
          value: ""
        }
      };
    }
  }]);

  return ZwaveUsercodes;
}(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_5__["PolymerElement"]);

customElements.define("zwave-usercodes", ZwaveUsercodes);

/***/ }),

/***/ "./src/panels/config/zwave/zwave-values.ts":
/*!*************************************************!*\
  !*** ./src/panels/config/zwave/zwave-values.ts ***!
  \*************************************************/
/*! exports provided: ZwaveValues */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZwaveValues", function() { return ZwaveValues; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _polymer_paper_dropdown_menu_paper_dropdown_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-dropdown-menu/paper-dropdown-menu */ "./node_modules/@polymer/paper-dropdown-menu/paper-dropdown-menu.js");
/* harmony import */ var _polymer_paper_item_paper_item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-item/paper-item */ "./node_modules/@polymer/paper-item/paper-item.js");
/* harmony import */ var _polymer_paper_listbox_paper_listbox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/paper-listbox/paper-listbox */ "./node_modules/@polymer/paper-listbox/paper-listbox.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _resources_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../resources/styles */ "./src/resources/styles.ts");
/* harmony import */ var _components_buttons_ha_call_service_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/buttons/ha-call-service-button */ "./src/components/buttons/ha-call-service-button.js");
/* harmony import */ var _components_ha_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/ha-card */ "./src/components/ha-card.ts");








var ZwaveValues = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(ZwaveValues, _super);
    function ZwaveValues() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.values = [];
        _this._selectedValue = -1;
        return _this;
    }
    ZwaveValues.prototype.render = function () {
        var _this = this;
        return Object(lit_element__WEBPACK_IMPORTED_MODULE_4__["html"])(templateObject_2 || (templateObject_2 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      <div class=\"content\">\n        <ha-card\n          .header=", "\n        >\n          <div class=\"device-picker\">\n            <paper-dropdown-menu\n              .label=", "\n              dynamic-align\n              class=\"flex\"\n            >\n              <paper-listbox\n                slot=\"dropdown-content\"\n                .selected=", "\n              >\n                ", "\n              </paper-listbox>\n            </paper-dropdown-menu>\n          </div>\n        </ha-card>\n      </div>\n    "], ["\n      <div class=\"content\">\n        <ha-card\n          .header=", "\n        >\n          <div class=\"device-picker\">\n            <paper-dropdown-menu\n              .label=", "\n              dynamic-align\n              class=\"flex\"\n            >\n              <paper-listbox\n                slot=\"dropdown-content\"\n                .selected=", "\n              >\n                ",
            "\n              </paper-listbox>\n            </paper-dropdown-menu>\n          </div>\n        </ha-card>\n      </div>\n    "])), this.hass.localize("ui.panel.config.zwave.values.header"), this.hass.localize("ui.panel.config.zwave.common.value"), this._selectedValue, this.values.map(function (item) { return Object(lit_element__WEBPACK_IMPORTED_MODULE_4__["html"])(templateObject_1 || (templateObject_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n                    <paper-item>\n                      ", "\n                    </paper-item>\n                  "], ["\n                    <paper-item>\n                      ", "\n                    </paper-item>\n                  "])), _this._computeCaption(item)); }));
    };
    Object.defineProperty(ZwaveValues, "styles", {
        get: function () {
            return [
                _resources_styles__WEBPACK_IMPORTED_MODULE_5__["haStyle"],
                Object(lit_element__WEBPACK_IMPORTED_MODULE_4__["css"])(templateObject_3 || (templateObject_3 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n        .content {\n          margin-top: 24px;\n        }\n\n        ha-card {\n          margin: 0 auto;\n          max-width: 600px;\n        }\n\n        .device-picker {\n          @apply --layout-horizontal;\n          @apply --layout-center-center;\n          display: -ms-flexbox;\n          display: -webkit-flex;\n          display: flex;\n          -ms-flex-direction: row;\n          -webkit-flex-direction: row;\n          flex-direction: row;\n          -ms-flex-align: center;\n          -webkit-align-items: center;\n          align-items: center;\n          padding-left: 24px;\n          padding-right: 24px;\n          padding-bottom: 24px;\n        }\n\n        .flex {\n          -ms-flex: 1 1 0.000000001px;\n          -webkit-flex: 1;\n          flex: 1;\n          -webkit-flex-basis: 0.000000001px;\n          flex-basis: 0.000000001px;\n        }\n\n        .help-text {\n          padding-left: 24px;\n          padding-right: 24px;\n        }\n      "], ["\n        .content {\n          margin-top: 24px;\n        }\n\n        ha-card {\n          margin: 0 auto;\n          max-width: 600px;\n        }\n\n        .device-picker {\n          @apply --layout-horizontal;\n          @apply --layout-center-center;\n          display: -ms-flexbox;\n          display: -webkit-flex;\n          display: flex;\n          -ms-flex-direction: row;\n          -webkit-flex-direction: row;\n          flex-direction: row;\n          -ms-flex-align: center;\n          -webkit-align-items: center;\n          align-items: center;\n          padding-left: 24px;\n          padding-right: 24px;\n          padding-bottom: 24px;\n        }\n\n        .flex {\n          -ms-flex: 1 1 0.000000001px;\n          -webkit-flex: 1;\n          flex: 1;\n          -webkit-flex-basis: 0.000000001px;\n          flex-basis: 0.000000001px;\n        }\n\n        .help-text {\n          padding-left: 24px;\n          padding-right: 24px;\n        }\n      "]))),
            ];
        },
        enumerable: true,
        configurable: true
    });
    ZwaveValues.prototype._computeCaption = function (item) {
        var out = "" + item.value.label;
        out += " (" + this.hass.localize("ui.panel.config.zwave.common.instance") + ":";
        out += " " + item.value.instance + ",";
        out += " " + this.hass.localize("ui.panel.config.zwave.common.index") + ":";
        out += " " + item.value.index + ")";
        return out;
    };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_4__["property"])()
    ], ZwaveValues.prototype, "hass", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_4__["property"])()
    ], ZwaveValues.prototype, "values", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_4__["property"])()
    ], ZwaveValues.prototype, "_selectedValue", void 0);
    ZwaveValues = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_4__["customElement"])("zwave-values")
    ], ZwaveValues);
    return ZwaveValues;
}(lit_element__WEBPACK_IMPORTED_MODULE_4__["LitElement"]));

var templateObject_1, templateObject_2, templateObject_3;


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFuZWwtY29uZmlnLXp3YXZlLmNodW5rLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Bwb2x5bWVyL2FwcC1sYXlvdXQvYXBwLWhlYWRlci1sYXlvdXQvYXBwLWhlYWRlci1sYXlvdXQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9jb25maWcvaXNfcHdhLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vZW50aXR5L2NvbXB1dGVfb2JqZWN0X2lkLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vZW50aXR5L2NvbXB1dGVfc3RhdGVfZG9tYWluLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vZW50aXR5L2NvbXB1dGVfc3RhdGVfbmFtZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL2VudGl0eS9zdGF0ZXNfc29ydF9ieV9uYW1lLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2J1dHRvbnMvaGEtY2FsbC1zZXJ2aWNlLWJ1dHRvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9oYS1zZXJ2aWNlLWRlc2NyaXB0aW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9kYXRhL3p3YXZlLnRzIiwid2VicGFjazovLy8uL3NyYy9wYW5lbHMvY29uZmlnL2hhLWZvcm0tc3R5bGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhbmVscy9jb25maWcvendhdmUvaGEtY29uZmlnLXp3YXZlLmpzIiwid2VicGFjazovLy8uL3NyYy9wYW5lbHMvY29uZmlnL3p3YXZlL3p3YXZlLWdyb3Vwcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL2NvbmZpZy96d2F2ZS96d2F2ZS1sb2cuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhbmVscy9jb25maWcvendhdmUvendhdmUtbmV0d29yay50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL2NvbmZpZy96d2F2ZS96d2F2ZS1ub2RlLWNvbmZpZy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL2NvbmZpZy96d2F2ZS96d2F2ZS1ub2RlLXByb3RlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhbmVscy9jb25maWcvendhdmUvendhdmUtdXNlcmNvZGVzLmpzIiwid2VicGFjazovLy8uL3NyYy9wYW5lbHMvY29uZmlnL3p3YXZlL3p3YXZlLXZhbHVlcy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbkBsaWNlbnNlXG5Db3B5cmlnaHQgKGMpIDIwMTUgVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuVGhpcyBjb2RlIG1heSBvbmx5IGJlIHVzZWQgdW5kZXIgdGhlIEJTRCBzdHlsZSBsaWNlbnNlIGZvdW5kIGF0XG5odHRwOi8vcG9seW1lci5naXRodWIuaW8vTElDRU5TRS50eHQgVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdFxuaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0IFRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZVxuZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0NPTlRSSUJVVE9SUy50eHQgQ29kZSBkaXN0cmlidXRlZCBieSBHb29nbGUgYXNcbnBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvIHN1YmplY3QgdG8gYW4gYWRkaXRpb25hbCBJUCByaWdodHMgZ3JhbnRcbmZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9QQVRFTlRTLnR4dFxuKi9cbmltcG9ydCAnQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWxlZ2FjeS5qcyc7XG5pbXBvcnQgJ0Bwb2x5bWVyL2lyb24tZmxleC1sYXlvdXQvaXJvbi1mbGV4LWxheW91dC5qcyc7XG5cbmltcG9ydCB7UG9seW1lcn0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9saWIvbGVnYWN5L3BvbHltZXItZm4uanMnO1xuaW1wb3J0IHtkb219IGZyb20gJ0Bwb2x5bWVyL3BvbHltZXIvbGliL2xlZ2FjeS9wb2x5bWVyLmRvbS5qcyc7XG5pbXBvcnQge2h0bWx9IGZyb20gJ0Bwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2h0bWwtdGFnLmpzJztcblxuaW1wb3J0IHtBcHBMYXlvdXRCZWhhdmlvcn0gZnJvbSAnLi4vYXBwLWxheW91dC1iZWhhdmlvci9hcHAtbGF5b3V0LWJlaGF2aW9yLmpzJztcblxuLyoqXG5hcHAtaGVhZGVyLWxheW91dCBpcyBhIHdyYXBwZXIgZWxlbWVudCB0aGF0IHBvc2l0aW9ucyBhbiBhcHAtaGVhZGVyIGFuZCBvdGhlclxuY29udGVudC4gVGhpcyBlbGVtZW50IHVzZXMgdGhlIGRvY3VtZW50IHNjcm9sbCBieSBkZWZhdWx0LCBidXQgaXQgY2FuIGFsc29cbmRlZmluZSBpdHMgb3duIHNjcm9sbGluZyByZWdpb24uXG5cblVzaW5nIHRoZSBkb2N1bWVudCBzY3JvbGw6XG5cbmBgYGh0bWxcbjxhcHAtaGVhZGVyLWxheW91dD5cbiAgPGFwcC1oZWFkZXIgc2xvdD1cImhlYWRlclwiIGZpeGVkIGNvbmRlbnNlcyBlZmZlY3RzPVwid2F0ZXJmYWxsXCI+XG4gICAgPGFwcC10b29sYmFyPlxuICAgICAgPGRpdiBtYWluLXRpdGxlPkFwcCBuYW1lPC9kaXY+XG4gICAgPC9hcHAtdG9vbGJhcj5cbiAgPC9hcHAtaGVhZGVyPlxuICA8ZGl2PlxuICAgIG1haW4gY29udGVudFxuICA8L2Rpdj5cbjwvYXBwLWhlYWRlci1sYXlvdXQ+XG5gYGBcblxuVXNpbmcgYW4gb3duIHNjcm9sbGluZyByZWdpb246XG5cbmBgYGh0bWxcbjxhcHAtaGVhZGVyLWxheW91dCBoYXMtc2Nyb2xsaW5nLXJlZ2lvbiBzdHlsZT1cIndpZHRoOiAzMDBweDsgaGVpZ2h0OiA0MDBweDtcIj5cbiAgPGFwcC1oZWFkZXIgc2xvdD1cImhlYWRlclwiIGZpeGVkIGNvbmRlbnNlcyBlZmZlY3RzPVwid2F0ZXJmYWxsXCI+XG4gICAgPGFwcC10b29sYmFyPlxuICAgICAgPGRpdiBtYWluLXRpdGxlPkFwcCBuYW1lPC9kaXY+XG4gICAgPC9hcHAtdG9vbGJhcj5cbiAgPC9hcHAtaGVhZGVyPlxuICA8ZGl2PlxuICAgIG1haW4gY29udGVudFxuICA8L2Rpdj5cbjwvYXBwLWhlYWRlci1sYXlvdXQ+XG5gYGBcblxuQWRkIHRoZSBgZnVsbGJsZWVkYCBhdHRyaWJ1dGUgdG8gYXBwLWhlYWRlci1sYXlvdXQgdG8gbWFrZSBpdCBmaXQgdGhlIHNpemUgb2Zcbml0cyBjb250YWluZXI6XG5cbmBgYGh0bWxcbjxhcHAtaGVhZGVyLWxheW91dCBmdWxsYmxlZWQ+XG4gLi4uXG48L2FwcC1oZWFkZXItbGF5b3V0PlxuYGBgXG5cbkBncm91cCBBcHAgRWxlbWVudHNcbkBlbGVtZW50IGFwcC1oZWFkZXItbGF5b3V0XG5AZGVtbyBhcHAtaGVhZGVyLWxheW91dC9kZW1vL3NpbXBsZS5odG1sIFNpbXBsZSBEZW1vXG5AZGVtbyBhcHAtaGVhZGVyLWxheW91dC9kZW1vL3Njcm9sbGluZy1yZWdpb24uaHRtbCBTY3JvbGxpbmcgUmVnaW9uXG5AZGVtbyBhcHAtaGVhZGVyLWxheW91dC9kZW1vL211c2ljLmh0bWwgTXVzaWMgRGVtb1xuQGRlbW8gYXBwLWhlYWRlci1sYXlvdXQvZGVtby9mb290ZXIuaHRtbCBGb290ZXIgRGVtb1xuKi9cblBvbHltZXIoe1xuICBfdGVtcGxhdGU6IGh0bWxgXG4gICAgPHN0eWxlPlxuICAgICAgOmhvc3Qge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEZvcmNlIGFwcC1oZWFkZXItbGF5b3V0IHRvIGhhdmUgaXRzIG93biBzdGFja2luZyBjb250ZXh0IHNvIHRoYXQgaXRzIHBhcmVudCBjYW5cbiAgICAgICAgICogY29udHJvbCB0aGUgc3RhY2tpbmcgb2YgaXQgcmVsYXRpdmUgdG8gb3RoZXIgZWxlbWVudHMgKGUuZy4gYXBwLWRyYXdlci1sYXlvdXQpLlxuICAgICAgICAgKiBUaGlzIGNvdWxkIGJlIGRvbmUgdXNpbmcgXFxgaXNvbGF0aW9uOiBpc29sYXRlXFxgLCBidXQgdGhhdCdzIG5vdCB3ZWxsIHN1cHBvcnRlZFxuICAgICAgICAgKiBhY3Jvc3MgYnJvd3NlcnMuXG4gICAgICAgICAqL1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIHotaW5kZXg6IDA7XG4gICAgICB9XG5cbiAgICAgICN3cmFwcGVyIDo6c2xvdHRlZChbc2xvdD1oZWFkZXJdKSB7XG4gICAgICAgIEBhcHBseSAtLWxheW91dC1maXhlZC10b3A7XG4gICAgICAgIHotaW5kZXg6IDE7XG4gICAgICB9XG5cbiAgICAgICN3cmFwcGVyLmluaXRpYWxpemluZyA6OnNsb3R0ZWQoW3Nsb3Q9aGVhZGVyXSkge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICB9XG5cbiAgICAgIDpob3N0KFtoYXMtc2Nyb2xsaW5nLXJlZ2lvbl0pIHtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgfVxuXG4gICAgICA6aG9zdChbaGFzLXNjcm9sbGluZy1yZWdpb25dKSAjd3JhcHBlciA6OnNsb3R0ZWQoW3Nsb3Q9aGVhZGVyXSkge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB9XG5cbiAgICAgIDpob3N0KFtoYXMtc2Nyb2xsaW5nLXJlZ2lvbl0pICN3cmFwcGVyLmluaXRpYWxpemluZyA6OnNsb3R0ZWQoW3Nsb3Q9aGVhZGVyXSkge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICB9XG5cbiAgICAgIDpob3N0KFtoYXMtc2Nyb2xsaW5nLXJlZ2lvbl0pICN3cmFwcGVyICNjb250ZW50Q29udGFpbmVyIHtcbiAgICAgICAgQGFwcGx5IC0tbGF5b3V0LWZpdDtcbiAgICAgICAgb3ZlcmZsb3cteTogYXV0bztcbiAgICAgICAgLXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6IHRvdWNoO1xuICAgICAgfVxuXG4gICAgICA6aG9zdChbaGFzLXNjcm9sbGluZy1yZWdpb25dKSAjd3JhcHBlci5pbml0aWFsaXppbmcgI2NvbnRlbnRDb250YWluZXIge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICB9XG5cbiAgICAgIDpob3N0KFtmdWxsYmxlZWRdKSB7XG4gICAgICAgIEBhcHBseSAtLWxheW91dC12ZXJ0aWNhbDtcbiAgICAgICAgQGFwcGx5IC0tbGF5b3V0LWZpdDtcbiAgICAgIH1cblxuICAgICAgOmhvc3QoW2Z1bGxibGVlZF0pICN3cmFwcGVyLFxuICAgICAgOmhvc3QoW2Z1bGxibGVlZF0pICN3cmFwcGVyICNjb250ZW50Q29udGFpbmVyIHtcbiAgICAgICAgQGFwcGx5IC0tbGF5b3V0LXZlcnRpY2FsO1xuICAgICAgICBAYXBwbHkgLS1sYXlvdXQtZmxleDtcbiAgICAgIH1cblxuICAgICAgI2NvbnRlbnRDb250YWluZXIge1xuICAgICAgICAvKiBDcmVhdGUgYSBzdGFja2luZyBjb250ZXh0IGhlcmUgc28gdGhhdCBhbGwgY2hpbGRyZW4gYXBwZWFyIGJlbG93IHRoZSBoZWFkZXIuICovXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgei1pbmRleDogMDtcbiAgICAgIH1cblxuICAgICAgQG1lZGlhIHByaW50IHtcbiAgICAgICAgOmhvc3QoW2hhcy1zY3JvbGxpbmctcmVnaW9uXSkgI3dyYXBwZXIgI2NvbnRlbnRDb250YWluZXIge1xuICAgICAgICAgIG92ZXJmbG93LXk6IHZpc2libGU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgIDwvc3R5bGU+XG5cbiAgICA8ZGl2IGlkPVwid3JhcHBlclwiIGNsYXNzPVwiaW5pdGlhbGl6aW5nXCI+XG4gICAgICA8c2xvdCBpZD1cImhlYWRlclNsb3RcIiBuYW1lPVwiaGVhZGVyXCI+PC9zbG90PlxuXG4gICAgICA8ZGl2IGlkPVwiY29udGVudENvbnRhaW5lclwiPlxuICAgICAgICA8c2xvdD48L3Nsb3Q+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbmAsXG5cbiAgaXM6ICdhcHAtaGVhZGVyLWxheW91dCcsXG4gIGJlaGF2aW9yczogW0FwcExheW91dEJlaGF2aW9yXSxcblxuICBwcm9wZXJ0aWVzOiB7XG4gICAgLyoqXG4gICAgICogSWYgdHJ1ZSwgdGhlIGN1cnJlbnQgZWxlbWVudCB3aWxsIGhhdmUgaXRzIG93biBzY3JvbGxpbmcgcmVnaW9uLlxuICAgICAqIE90aGVyd2lzZSwgaXQgd2lsbCB1c2UgdGhlIGRvY3VtZW50IHNjcm9sbCB0byBjb250cm9sIHRoZSBoZWFkZXIuXG4gICAgICovXG4gICAgaGFzU2Nyb2xsaW5nUmVnaW9uOiB7dHlwZTogQm9vbGVhbiwgdmFsdWU6IGZhbHNlLCByZWZsZWN0VG9BdHRyaWJ1dGU6IHRydWV9XG4gIH0sXG5cbiAgb2JzZXJ2ZXJzOiBbJ3Jlc2V0TGF5b3V0KGlzQXR0YWNoZWQsIGhhc1Njcm9sbGluZ1JlZ2lvbiknXSxcblxuICAvKipcbiAgICogQSByZWZlcmVuY2UgdG8gdGhlIGFwcC1oZWFkZXIgZWxlbWVudC5cbiAgICpcbiAgICogQHByb3BlcnR5IGhlYWRlclxuICAgKi9cbiAgZ2V0IGhlYWRlcigpIHtcbiAgICByZXR1cm4gZG9tKHRoaXMuJC5oZWFkZXJTbG90KS5nZXREaXN0cmlidXRlZE5vZGVzKClbMF07XG4gIH0sXG5cbiAgX3VwZGF0ZUxheW91dFN0YXRlczogZnVuY3Rpb24oKSB7XG4gICAgdmFyIGhlYWRlciA9IHRoaXMuaGVhZGVyO1xuICAgIGlmICghdGhpcy5pc0F0dGFjaGVkIHx8ICFoZWFkZXIpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgLy8gUmVtb3ZlIHRoZSBpbml0aWFsaXppbmcgY2xhc3MsIHdoaWNoIHN0YXRpY2x5IHBvc2l0aW9ucyB0aGUgaGVhZGVyIGFuZFxuICAgIC8vIHRoZSBjb250ZW50IHVudGlsIHRoZSBoZWlnaHQgb2YgdGhlIGhlYWRlciBjYW4gYmUgcmVhZC5cbiAgICB0aGlzLiQud3JhcHBlci5jbGFzc0xpc3QucmVtb3ZlKCdpbml0aWFsaXppbmcnKTtcbiAgICAvLyBVcGRhdGUgc2Nyb2xsIHRhcmdldC5cbiAgICBoZWFkZXIuc2Nyb2xsVGFyZ2V0ID0gdGhpcy5oYXNTY3JvbGxpbmdSZWdpb24gP1xuICAgICAgICB0aGlzLiQuY29udGVudENvbnRhaW5lciA6XG4gICAgICAgIHRoaXMub3duZXJEb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG4gICAgLy8gR2V0IGhlYWRlciBoZWlnaHQgaGVyZSBzbyB0aGF0IHN0eWxlIHJlYWRzIGFyZSBiYXRjaGVkIHRvZ2V0aGVyIGJlZm9yZVxuICAgIC8vIHN0eWxlIHdyaXRlcyAoaS5lLiBnZXRCb3VuZGluZ0NsaWVudFJlY3QoKSBiZWxvdykuXG4gICAgdmFyIGhlYWRlckhlaWdodCA9IGhlYWRlci5vZmZzZXRIZWlnaHQ7XG4gICAgLy8gVXBkYXRlIHRoZSBoZWFkZXIgcG9zaXRpb24uXG4gICAgaWYgKCF0aGlzLmhhc1Njcm9sbGluZ1JlZ2lvbikge1xuICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgcmVjdCA9IHRoaXMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgIHZhciByaWdodE9mZnNldCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aCAtIHJlY3QucmlnaHQ7XG4gICAgICAgIGhlYWRlci5zdHlsZS5sZWZ0ID0gcmVjdC5sZWZ0ICsgJ3B4JztcbiAgICAgICAgaGVhZGVyLnN0eWxlLnJpZ2h0ID0gcmlnaHRPZmZzZXQgKyAncHgnO1xuICAgICAgfS5iaW5kKHRoaXMpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaGVhZGVyLnN0eWxlLmxlZnQgPSAnJztcbiAgICAgIGhlYWRlci5zdHlsZS5yaWdodCA9ICcnO1xuICAgIH1cbiAgICAvLyBVcGRhdGUgdGhlIGNvbnRlbnQgY29udGFpbmVyIHBvc2l0aW9uLlxuICAgIHZhciBjb250YWluZXJTdHlsZSA9IHRoaXMuJC5jb250ZW50Q29udGFpbmVyLnN0eWxlO1xuICAgIGlmIChoZWFkZXIuZml4ZWQgJiYgIWhlYWRlci5jb25kZW5zZXMgJiYgdGhpcy5oYXNTY3JvbGxpbmdSZWdpb24pIHtcbiAgICAgIC8vIElmIHRoZSBoZWFkZXIgc2l6ZSBkb2VzIG5vdCBjaGFuZ2UgYW5kIHdlJ3JlIHVzaW5nIGEgc2Nyb2xsaW5nIHJlZ2lvbixcbiAgICAgIC8vIGV4Y2x1ZGUgdGhlIGhlYWRlciBhcmVhIGZyb20gdGhlIHNjcm9sbGluZyByZWdpb24gc28gdGhhdCB0aGUgaGVhZGVyXG4gICAgICAvLyBkb2Vzbid0IG92ZXJsYXAgdGhlIHNjcm9sbGJhci5cbiAgICAgIGNvbnRhaW5lclN0eWxlLm1hcmdpblRvcCA9IGhlYWRlckhlaWdodCArICdweCc7XG4gICAgICBjb250YWluZXJTdHlsZS5wYWRkaW5nVG9wID0gJyc7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnRhaW5lclN0eWxlLnBhZGRpbmdUb3AgPSBoZWFkZXJIZWlnaHQgKyAncHgnO1xuICAgICAgY29udGFpbmVyU3R5bGUubWFyZ2luVG9wID0gJyc7XG4gICAgfVxuICB9XG59KTtcbiIsIi8qKiBSZXR1cm4gaWYgdGhlIGRpc3BsYXltb2RlIGlzIGluIHN0YW5kYWxvbmUgbW9kZSAoUFdBKS4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzUHdhKCk6IGJvb2xlYW4ge1xuICByZXR1cm4gd2luZG93Lm1hdGNoTWVkaWEoXCIoZGlzcGxheS1tb2RlOiBzdGFuZGFsb25lKVwiKS5tYXRjaGVzO1xufVxuIiwiLyoqIENvbXB1dGUgdGhlIG9iamVjdCBJRCBvZiBhIHN0YXRlLiAqL1xuZXhwb3J0IGNvbnN0IGNvbXB1dGVPYmplY3RJZCA9IChlbnRpdHlJZDogc3RyaW5nKTogc3RyaW5nID0+IHtcbiAgcmV0dXJuIGVudGl0eUlkLnN1YnN0cihlbnRpdHlJZC5pbmRleE9mKFwiLlwiKSArIDEpO1xufTtcbiIsImltcG9ydCB7IEhhc3NFbnRpdHkgfSBmcm9tIFwiaG9tZS1hc3Npc3RhbnQtanMtd2Vic29ja2V0XCI7XG5pbXBvcnQgeyBjb21wdXRlRG9tYWluIH0gZnJvbSBcIi4vY29tcHV0ZV9kb21haW5cIjtcblxuZXhwb3J0IGNvbnN0IGNvbXB1dGVTdGF0ZURvbWFpbiA9IChzdGF0ZU9iajogSGFzc0VudGl0eSkgPT4ge1xuICByZXR1cm4gY29tcHV0ZURvbWFpbihzdGF0ZU9iai5lbnRpdHlfaWQpO1xufTtcbiIsImltcG9ydCB7IEhhc3NFbnRpdHkgfSBmcm9tIFwiaG9tZS1hc3Npc3RhbnQtanMtd2Vic29ja2V0XCI7XG5pbXBvcnQgeyBjb21wdXRlT2JqZWN0SWQgfSBmcm9tIFwiLi9jb21wdXRlX29iamVjdF9pZFwiO1xuXG5leHBvcnQgY29uc3QgY29tcHV0ZVN0YXRlTmFtZSA9IChzdGF0ZU9iajogSGFzc0VudGl0eSk6IHN0cmluZyA9PiB7XG4gIHJldHVybiBzdGF0ZU9iai5hdHRyaWJ1dGVzLmZyaWVuZGx5X25hbWUgPT09IHVuZGVmaW5lZFxuICAgID8gY29tcHV0ZU9iamVjdElkKHN0YXRlT2JqLmVudGl0eV9pZCkucmVwbGFjZSgvXy9nLCBcIiBcIilcbiAgICA6IHN0YXRlT2JqLmF0dHJpYnV0ZXMuZnJpZW5kbHlfbmFtZSB8fCBcIlwiO1xufTtcbiIsIi8qKlxuICogU29ydCBmdW5jdGlvbiB0byBoZWxwIHNvcnQgc3RhdGVzIGJ5IG5hbWVcbiAqXG4gKiBVc2FnZTpcbiAqICAgY29uc3Qgc3RhdGVzID0gW3N0YXRlMSwgc3RhdGUyXVxuICogICBzdGF0ZXMuc29ydChzdGF0ZXNzb3J0U3RhdGVzQnlOYW1lKTtcbiAqL1xuaW1wb3J0IHsgSGFzc0VudGl0eSB9IGZyb20gXCJob21lLWFzc2lzdGFudC1qcy13ZWJzb2NrZXRcIjtcbmltcG9ydCB7IGNvbXB1dGVTdGF0ZU5hbWUgfSBmcm9tIFwiLi9jb21wdXRlX3N0YXRlX25hbWVcIjtcblxuZXhwb3J0IGNvbnN0IHNvcnRTdGF0ZXNCeU5hbWUgPSAoZW50aXR5QTogSGFzc0VudGl0eSwgZW50aXR5QjogSGFzc0VudGl0eSkgPT4ge1xuICBjb25zdCBuYW1lQSA9IGNvbXB1dGVTdGF0ZU5hbWUoZW50aXR5QSk7XG4gIGNvbnN0IG5hbWVCID0gY29tcHV0ZVN0YXRlTmFtZShlbnRpdHlCKTtcbiAgaWYgKG5hbWVBIDwgbmFtZUIpIHtcbiAgICByZXR1cm4gLTE7XG4gIH1cbiAgaWYgKG5hbWVBID4gbmFtZUIpIHtcbiAgICByZXR1cm4gMTtcbiAgfVxuICByZXR1cm4gMDtcbn07XG4iLCJpbXBvcnQgeyBodG1sIH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2h0bWwtdGFnXCI7XG5pbXBvcnQgeyBQb2x5bWVyRWxlbWVudCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL3BvbHltZXItZWxlbWVudFwiO1xuXG5pbXBvcnQgXCIuL2hhLXByb2dyZXNzLWJ1dHRvblwiO1xuaW1wb3J0IHsgRXZlbnRzTWl4aW4gfSBmcm9tIFwiLi4vLi4vbWl4aW5zL2V2ZW50cy1taXhpblwiO1xuXG4vKlxuICogQGFwcGxpZXNNaXhpbiBFdmVudHNNaXhpblxuICovXG5jbGFzcyBIYUNhbGxTZXJ2aWNlQnV0dG9uIGV4dGVuZHMgRXZlbnRzTWl4aW4oUG9seW1lckVsZW1lbnQpIHtcbiAgc3RhdGljIGdldCB0ZW1wbGF0ZSgpIHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxoYS1wcm9ncmVzcy1idXR0b25cbiAgICAgICAgaWQ9XCJwcm9ncmVzc1wiXG4gICAgICAgIHByb2dyZXNzPVwiW1twcm9ncmVzc11dXCJcbiAgICAgICAgb24tY2xpY2s9XCJidXR0b25UYXBwZWRcIlxuICAgICAgICA+PHNsb3Q+PC9zbG90XG4gICAgICA+PC9oYS1wcm9ncmVzcy1idXR0b24+XG4gICAgYDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaGFzczoge1xuICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICB9LFxuXG4gICAgICBwcm9ncmVzczoge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICB2YWx1ZTogZmFsc2UsXG4gICAgICB9LFxuXG4gICAgICBkb21haW46IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgfSxcblxuICAgICAgc2VydmljZToge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICB9LFxuXG4gICAgICBzZXJ2aWNlRGF0YToge1xuICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICAgIHZhbHVlOiB7fSxcbiAgICAgIH0sXG5cbiAgICAgIGNvbmZpcm1hdGlvbjoge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICB9LFxuICAgIH07XG4gIH1cblxuICBidXR0b25UYXBwZWQoKSB7XG4gICAgaWYgKHRoaXMuY29uZmlybWF0aW9uICYmICF3aW5kb3cuY29uZmlybSh0aGlzLmNvbmZpcm1hdGlvbikpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5wcm9ncmVzcyA9IHRydWU7XG4gICAgdmFyIGVsID0gdGhpcztcbiAgICB2YXIgZXZlbnREYXRhID0ge1xuICAgICAgZG9tYWluOiB0aGlzLmRvbWFpbixcbiAgICAgIHNlcnZpY2U6IHRoaXMuc2VydmljZSxcbiAgICAgIHNlcnZpY2VEYXRhOiB0aGlzLnNlcnZpY2VEYXRhLFxuICAgIH07XG5cbiAgICB0aGlzLmhhc3NcbiAgICAgIC5jYWxsU2VydmljZSh0aGlzLmRvbWFpbiwgdGhpcy5zZXJ2aWNlLCB0aGlzLnNlcnZpY2VEYXRhKVxuICAgICAgLnRoZW4oXG4gICAgICAgIGZ1bmN0aW9uKCkge1xuICAgICAgICAgIGVsLnByb2dyZXNzID0gZmFsc2U7XG4gICAgICAgICAgZWwuJC5wcm9ncmVzcy5hY3Rpb25TdWNjZXNzKCk7XG4gICAgICAgICAgZXZlbnREYXRhLnN1Y2Nlc3MgPSB0cnVlO1xuICAgICAgICB9LFxuICAgICAgICBmdW5jdGlvbigpIHtcbiAgICAgICAgICBlbC5wcm9ncmVzcyA9IGZhbHNlO1xuICAgICAgICAgIGVsLiQucHJvZ3Jlc3MuYWN0aW9uRXJyb3IoKTtcbiAgICAgICAgICBldmVudERhdGEuc3VjY2VzcyA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICApXG4gICAgICAudGhlbihmdW5jdGlvbigpIHtcbiAgICAgICAgZWwuZmlyZShcImhhc3Mtc2VydmljZS1jYWxsZWRcIiwgZXZlbnREYXRhKTtcbiAgICAgIH0pO1xuICB9XG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcImhhLWNhbGwtc2VydmljZS1idXR0b25cIiwgSGFDYWxsU2VydmljZUJ1dHRvbik7XG4iLCJpbXBvcnQgeyBodG1sIH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2h0bWwtdGFnXCI7XG5pbXBvcnQgeyBQb2x5bWVyRWxlbWVudCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL3BvbHltZXItZWxlbWVudFwiO1xuXG5jbGFzcyBIYVNlcnZpY2VEZXNjcmlwdGlvbiBleHRlbmRzIFBvbHltZXJFbGVtZW50IHtcbiAgc3RhdGljIGdldCB0ZW1wbGF0ZSgpIHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIFtbX2dldERlc2NyaXB0aW9uKGhhc3MsIGRvbWFpbiwgc2VydmljZSldXVxuICAgIGA7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGhhc3M6IE9iamVjdCxcbiAgICAgIGRvbWFpbjogU3RyaW5nLFxuICAgICAgc2VydmljZTogU3RyaW5nLFxuICAgIH07XG4gIH1cblxuICBfZ2V0RGVzY3JpcHRpb24oaGFzcywgZG9tYWluLCBzZXJ2aWNlKSB7XG4gICAgdmFyIGRvbWFpblNlcnZpY2VzID0gaGFzcy5zZXJ2aWNlc1tkb21haW5dO1xuICAgIGlmICghZG9tYWluU2VydmljZXMpIHJldHVybiBcIlwiO1xuICAgIHZhciBzZXJ2aWNlT2JqZWN0ID0gZG9tYWluU2VydmljZXNbc2VydmljZV07XG4gICAgaWYgKCFzZXJ2aWNlT2JqZWN0KSByZXR1cm4gXCJcIjtcbiAgICByZXR1cm4gc2VydmljZU9iamVjdC5kZXNjcmlwdGlvbjtcbiAgfVxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJoYS1zZXJ2aWNlLWRlc2NyaXB0aW9uXCIsIEhhU2VydmljZURlc2NyaXB0aW9uKTtcbiIsImltcG9ydCB7IEhvbWVBc3Npc3RhbnQgfSBmcm9tIFwiLi4vdHlwZXNcIjtcblxuZXhwb3J0IGludGVyZmFjZSBaV2F2ZU5ldHdvcmtTdGF0dXMge1xuICBzdGF0ZTogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFpXYXZlVmFsdWUge1xuICBrZXk6IG51bWJlcjtcbiAgdmFsdWU6IHtcbiAgICBpbmRleDogbnVtYmVyO1xuICAgIGluc3RhbmNlOiBudW1iZXI7XG4gICAgbGFiZWw6IHN0cmluZztcbiAgICBwb2xsX2ludGVuc2l0eTogbnVtYmVyO1xuICB9O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFpXYXZlQ29uZmlnSXRlbSB7XG4gIGtleTogbnVtYmVyO1xuICB2YWx1ZToge1xuICAgIGRhdGE6IGFueTtcbiAgICBkYXRhX2l0ZW1zOiBhbnlbXTtcbiAgICBoZWxwOiBzdHJpbmc7XG4gICAgbGFiZWw6IHN0cmluZztcbiAgICBtYXg6IG51bWJlcjtcbiAgICBtaW46IG51bWJlcjtcbiAgICB0eXBlOiBzdHJpbmc7XG4gIH07XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgWldhdmVDb25maWdTZXJ2aWNlRGF0YSB7XG4gIG5vZGVfaWQ6IG51bWJlcjtcbiAgcGFyYW1ldGVyOiBudW1iZXI7XG4gIHZhbHVlOiBudW1iZXIgfCBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgWldhdmVOb2RlIHtcbiAgYXR0cmlidXRlczogWldhdmVBdHRyaWJ1dGVzO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFpXYXZlQXR0cmlidXRlcyB7XG4gIG5vZGVfaWQ6IG51bWJlcjtcbiAgd2FrZV91cF9pbnRlcnZhbD86IG51bWJlcjtcbn1cblxuZXhwb3J0IGNvbnN0IFpXQVZFX05FVFdPUktfU1RBVEVfU1RPUFBFRCA9IDA7XG5leHBvcnQgY29uc3QgWldBVkVfTkVUV09SS19TVEFURV9GQUlMRUQgPSAxO1xuZXhwb3J0IGNvbnN0IFpXQVZFX05FVFdPUktfU1RBVEVfU1RBUlRFRCA9IDU7XG5leHBvcnQgY29uc3QgWldBVkVfTkVUV09SS19TVEFURV9BV0FLRUQgPSA3O1xuZXhwb3J0IGNvbnN0IFpXQVZFX05FVFdPUktfU1RBVEVfUkVBRFkgPSAxMDtcblxuZXhwb3J0IGNvbnN0IGZldGNoTmV0d29ya1N0YXR1cyA9IChcbiAgaGFzczogSG9tZUFzc2lzdGFudFxuKTogUHJvbWlzZTxaV2F2ZU5ldHdvcmtTdGF0dXM+ID0+XG4gIGhhc3MuY2FsbFdTKHtcbiAgICB0eXBlOiBcInp3YXZlL25ldHdvcmtfc3RhdHVzXCIsXG4gIH0pO1xuXG5leHBvcnQgY29uc3QgZmV0Y2hWYWx1ZXMgPSAoaGFzczogSG9tZUFzc2lzdGFudCwgbm9kZUlkOiBudW1iZXIpID0+XG4gIGhhc3MuY2FsbEFwaTxaV2F2ZVZhbHVlW10+KFwiR0VUXCIsIGB6d2F2ZS92YWx1ZXMvJHtub2RlSWR9YCk7XG5cbmV4cG9ydCBjb25zdCBmZXRjaE5vZGVDb25maWcgPSAoaGFzczogSG9tZUFzc2lzdGFudCwgbm9kZUlkOiBudW1iZXIpID0+XG4gIGhhc3MuY2FsbEFwaTxaV2F2ZUNvbmZpZ0l0ZW1bXT4oXCJHRVRcIiwgYHp3YXZlL2NvbmZpZy8ke25vZGVJZH1gKTtcbiIsImNvbnN0IGRvY3VtZW50Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRlbXBsYXRlXCIpO1xuZG9jdW1lbnRDb250YWluZXIuc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJkaXNwbGF5OiBub25lO1wiKTtcblxuZG9jdW1lbnRDb250YWluZXIuaW5uZXJIVE1MID0gYDxkb20tbW9kdWxlIGlkPVwiaGEtZm9ybS1zdHlsZVwiPlxuICA8dGVtcGxhdGU+XG4gICAgPHN0eWxlPlxuICAgICAgLmZvcm0tZ3JvdXAge1xuICAgICAgICBAYXBwbHkgLS1sYXlvdXQtaG9yaXpvbnRhbDtcbiAgICAgICAgQGFwcGx5IC0tbGF5b3V0LWNlbnRlcjtcbiAgICAgICAgcGFkZGluZzogOHB4IDE2cHg7XG4gICAgICB9XG5cbiAgICAgIC5mb3JtLWdyb3VwIGxhYmVsIHtcbiAgICAgICAgQGFwcGx5IC0tbGF5b3V0LWZsZXgtMjtcbiAgICAgIH1cblxuICAgICAgLmZvcm0tZ3JvdXAgLmZvcm0tY29udHJvbCB7XG4gICAgICAgIEBhcHBseSAtLWxheW91dC1mbGV4O1xuICAgICAgfVxuXG4gICAgICAuZm9ybS1ncm91cC52ZXJ0aWNhbCB7XG4gICAgICAgIEBhcHBseSAtLWxheW91dC12ZXJ0aWNhbDtcbiAgICAgICAgQGFwcGx5IC0tbGF5b3V0LXN0YXJ0O1xuICAgICAgfVxuXG4gICAgICBwYXBlci1kcm9wZG93bi1tZW51LmZvcm0tY29udHJvbCB7XG4gICAgICAgIG1hcmdpbjogLTlweCAwO1xuICAgICAgfVxuICAgIDwvc3R5bGU+XG4gIDwvdGVtcGxhdGU+XG48L2RvbS1tb2R1bGU+YDtcblxuZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChkb2N1bWVudENvbnRhaW5lci5jb250ZW50KTtcbiIsImltcG9ydCBcIkBwb2x5bWVyL2FwcC1sYXlvdXQvYXBwLWhlYWRlci9hcHAtaGVhZGVyXCI7XG5pbXBvcnQgXCJAcG9seW1lci9hcHAtbGF5b3V0L2FwcC10b29sYmFyL2FwcC10b29sYmFyXCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1kcm9wZG93bi1tZW51L3BhcGVyLWRyb3Bkb3duLW1lbnVcIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWljb24tYnV0dG9uL3BhcGVyLWljb24tYnV0dG9uXCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1pbnB1dC9wYXBlci1pbnB1dFwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItaXRlbS9wYXBlci1pdGVtXCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1saXN0Ym94L3BhcGVyLWxpc3Rib3hcIjtcbmltcG9ydCB7IGh0bWwgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvaHRtbC10YWdcIjtcbmltcG9ydCB7IFBvbHltZXJFbGVtZW50IH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvcG9seW1lci1lbGVtZW50XCI7XG5cbmltcG9ydCBcIi4uLy4uLy4uL2NvbXBvbmVudHMvYnV0dG9ucy9oYS1jYWxsLXNlcnZpY2UtYnV0dG9uXCI7XG5pbXBvcnQgXCIuLi8uLi8uLi9jb21wb25lbnRzL2hhLW1lbnUtYnV0dG9uXCI7XG5pbXBvcnQgXCIuLi8uLi8uLi9jb21wb25lbnRzL2hhLXNlcnZpY2UtZGVzY3JpcHRpb25cIjtcbmltcG9ydCBcIi4uLy4uLy4uL2NvbXBvbmVudHMvaGEtcGFwZXItaWNvbi1idXR0b24tYXJyb3ctcHJldlwiO1xuaW1wb3J0IFwiLi4vLi4vLi4vbGF5b3V0cy9oYS1hcHAtbGF5b3V0XCI7XG5pbXBvcnQgXCIuLi8uLi8uLi9yZXNvdXJjZXMvaGEtc3R5bGVcIjtcbmltcG9ydCBcIi4uLy4uLy4uL2NvbXBvbmVudHMvaGEtY2FyZFwiO1xuXG5pbXBvcnQgXCIuLi9oYS1jb25maWctc2VjdGlvblwiO1xuaW1wb3J0IFwiLi4vaGEtZm9ybS1zdHlsZVwiO1xuaW1wb3J0IFwiLi96d2F2ZS1ncm91cHNcIjtcbmltcG9ydCBcIi4vendhdmUtbG9nXCI7XG5pbXBvcnQgXCIuL3p3YXZlLW5ldHdvcmtcIjtcbmltcG9ydCBcIi4vendhdmUtbm9kZS1jb25maWdcIjtcbmltcG9ydCBcIi4vendhdmUtdXNlcmNvZGVzXCI7XG5pbXBvcnQgXCIuL3p3YXZlLXZhbHVlc1wiO1xuaW1wb3J0IFwiLi96d2F2ZS1ub2RlLXByb3RlY3Rpb25cIjtcblxuaW1wb3J0IHsgc29ydFN0YXRlc0J5TmFtZSB9IGZyb20gXCIuLi8uLi8uLi9jb21tb24vZW50aXR5L3N0YXRlc19zb3J0X2J5X25hbWVcIjtcbmltcG9ydCB7IGNvbXB1dGVTdGF0ZU5hbWUgfSBmcm9tIFwiLi4vLi4vLi4vY29tbW9uL2VudGl0eS9jb21wdXRlX3N0YXRlX25hbWVcIjtcbmltcG9ydCB7IGNvbXB1dGVTdGF0ZURvbWFpbiB9IGZyb20gXCIuLi8uLi8uLi9jb21tb24vZW50aXR5L2NvbXB1dGVfc3RhdGVfZG9tYWluXCI7XG5pbXBvcnQgeyBFdmVudHNNaXhpbiB9IGZyb20gXCIuLi8uLi8uLi9taXhpbnMvZXZlbnRzLW1peGluXCI7XG5pbXBvcnQgTG9jYWxpemVNaXhpbiBmcm9tIFwiLi4vLi4vLi4vbWl4aW5zL2xvY2FsaXplLW1peGluXCI7XG5cbi8qXG4gKiBAYXBwbGllc01peGluIExvY2FsaXplTWl4aW5cbiAqIEBhcHBsaWVzTWl4aW4gRXZlbnRzTWl4aW5cbiAqL1xuY2xhc3MgSGFDb25maWdad2F2ZSBleHRlbmRzIExvY2FsaXplTWl4aW4oRXZlbnRzTWl4aW4oUG9seW1lckVsZW1lbnQpKSB7XG4gIHN0YXRpYyBnZXQgdGVtcGxhdGUoKSB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8c3R5bGUgaW5jbHVkZT1cImlyb24tZmxleCBoYS1zdHlsZSBoYS1mb3JtLXN0eWxlXCI+XG4gICAgICAgIC5jb250ZW50IHtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAyNHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLnNlY3Rpb25IZWFkZXIge1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiA0MHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLm5vZGUtaW5mbyB7XG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDE2cHg7XG4gICAgICAgIH1cblxuICAgICAgICAuaGVscC10ZXh0IHtcbiAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDI0cHg7XG4gICAgICAgICAgcGFkZGluZy1yaWdodDogMjRweDtcbiAgICAgICAgfVxuXG4gICAgICAgIGhhLWNhcmQge1xuICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICAgIG1heC13aWR0aDogNjAwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAuZGV2aWNlLXBpY2tlciB7XG4gICAgICAgICAgQGFwcGx5IC0tbGF5b3V0LWhvcml6b250YWw7XG4gICAgICAgICAgQGFwcGx5IC0tbGF5b3V0LWNlbnRlci1jZW50ZXI7XG4gICAgICAgICAgcGFkZGluZy1sZWZ0OiAyNHB4O1xuICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDI0cHg7XG4gICAgICAgICAgcGFkZGluZy1ib3R0b206IDI0cHg7XG4gICAgICAgIH1cblxuICAgICAgICBoYS1zZXJ2aWNlLWRlc2NyaXB0aW9uIHtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICBjb2xvcjogZ3JleTtcbiAgICAgICAgfVxuXG4gICAgICAgIFtoaWRkZW5dIHtcbiAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICB9XG5cbiAgICAgICAgLnRvZ2dsZS1oZWxwLWljb24ge1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICB0b3A6IC02cHg7XG4gICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xuICAgICAgICB9XG4gICAgICA8L3N0eWxlPlxuICAgICAgPGhhLWFwcC1sYXlvdXQgaGFzLXNjcm9sbGluZy1yZWdpb249XCJcIj5cbiAgICAgICAgPGFwcC1oZWFkZXIgc2xvdD1cImhlYWRlclwiIGZpeGVkPVwiXCI+XG4gICAgICAgICAgPGFwcC10b29sYmFyPlxuICAgICAgICAgICAgPGhhLXBhcGVyLWljb24tYnV0dG9uLWFycm93LXByZXZcbiAgICAgICAgICAgICAgb24tY2xpY2s9XCJfYmFja1RhcHBlZFwiXG4gICAgICAgICAgICA+PC9oYS1wYXBlci1pY29uLWJ1dHRvbi1hcnJvdy1wcmV2PlxuICAgICAgICAgICAgPGRpdiBtYWluLXRpdGxlPVwiXCI+XG4gICAgICAgICAgICAgIFtbbG9jYWxpemUoJ3VpLnBhbmVsLmNvbmZpZy56d2F2ZS5jYXB0aW9uJyldXVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9hcHAtdG9vbGJhcj5cbiAgICAgICAgPC9hcHAtaGVhZGVyPlxuXG4gICAgICAgIDx6d2F2ZS1uZXR3b3JrXG4gICAgICAgICAgaWQ9XCJ6d2F2ZS1uZXR3b3JrXCJcbiAgICAgICAgICBpcy13aWRlPVwiW1tpc1dpZGVdXVwiXG4gICAgICAgICAgaGFzcz1cIltbaGFzc11dXCJcbiAgICAgICAgPjwvendhdmUtbmV0d29yaz5cblxuICAgICAgICA8IS0tIE5vZGUgY2FyZCAtLT5cbiAgICAgICAgPGhhLWNvbmZpZy1zZWN0aW9uIGlzLXdpZGU9XCJbW2lzV2lkZV1dXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cInNlY3Rpb25IZWFkZXJcIiBzbG90PVwiaGVhZGVyXCI+XG4gICAgICAgICAgICA8c3Bhbj5aLVdhdmUgTm9kZSBNYW5hZ2VtZW50PC9zcGFuPlxuICAgICAgICAgICAgPHBhcGVyLWljb24tYnV0dG9uXG4gICAgICAgICAgICAgIGNsYXNzPVwidG9nZ2xlLWhlbHAtaWNvblwiXG4gICAgICAgICAgICAgIG9uLWNsaWNrPVwidG9nZ2xlSGVscFwiXG4gICAgICAgICAgICAgIGljb249XCJoYXNzOmhlbHAtY2lyY2xlXCJcbiAgICAgICAgICAgID48L3BhcGVyLWljb24tYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxzcGFuIHNsb3Q9XCJpbnRyb2R1Y3Rpb25cIj5cbiAgICAgICAgICAgIFJ1biBaLVdhdmUgY29tbWFuZHMgdGhhdCBhZmZlY3QgYSBzaW5nbGUgbm9kZS4gUGljayBhIG5vZGUgdG8gc2VlIGFcbiAgICAgICAgICAgIGxpc3Qgb2YgYXZhaWxhYmxlIGNvbW1hbmRzLlxuICAgICAgICAgIDwvc3Bhbj5cblxuICAgICAgICAgIDxoYS1jYXJkIGNsYXNzPVwiY29udGVudFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRldmljZS1waWNrZXJcIj5cbiAgICAgICAgICAgICAgPHBhcGVyLWRyb3Bkb3duLW1lbnUgZHluYW1pYy1hbGlnbj1cIlwiIGxhYmVsPVwiTm9kZXNcIiBjbGFzcz1cImZsZXhcIj5cbiAgICAgICAgICAgICAgICA8cGFwZXItbGlzdGJveFxuICAgICAgICAgICAgICAgICAgc2xvdD1cImRyb3Bkb3duLWNvbnRlbnRcIlxuICAgICAgICAgICAgICAgICAgc2VsZWN0ZWQ9XCJ7e3NlbGVjdGVkTm9kZX19XCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8dGVtcGxhdGUgaXM9XCJkb20tcmVwZWF0XCIgaXRlbXM9XCJbW25vZGVzXV1cIiBhcz1cInN0YXRlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxwYXBlci1pdGVtPltbY29tcHV0ZVNlbGVjdENhcHRpb24oc3RhdGUpXV08L3BhcGVyLWl0ZW0+XG4gICAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgICAgICAgIDwvcGFwZXItbGlzdGJveD5cbiAgICAgICAgICAgICAgPC9wYXBlci1kcm9wZG93bi1tZW51PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8dGVtcGxhdGUgaXM9XCJkb20taWZcIiBpZj1cIltbIWNvbXB1dGVJc05vZGVTZWxlY3RlZChzZWxlY3RlZE5vZGUpXV1cIj5cbiAgICAgICAgICAgICAgPHRlbXBsYXRlIGlzPVwiZG9tLWlmXCIgaWY9XCJbW3Nob3dIZWxwXV1cIj5cbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPVwiY29sb3I6IGdyZXk7IHBhZGRpbmc6IDEycHhcIj5cbiAgICAgICAgICAgICAgICAgIFNlbGVjdCBub2RlIHRvIHZpZXcgcGVyLW5vZGUgb3B0aW9uc1xuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgICAgPC90ZW1wbGF0ZT5cblxuICAgICAgICAgICAgPHRlbXBsYXRlIGlzPVwiZG9tLWlmXCIgaWY9XCJbW2NvbXB1dGVJc05vZGVTZWxlY3RlZChzZWxlY3RlZE5vZGUpXV1cIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtYWN0aW9uc1wiPlxuICAgICAgICAgICAgICAgIDxoYS1jYWxsLXNlcnZpY2UtYnV0dG9uXG4gICAgICAgICAgICAgICAgICBoYXNzPVwiW1toYXNzXV1cIlxuICAgICAgICAgICAgICAgICAgZG9tYWluPVwiendhdmVcIlxuICAgICAgICAgICAgICAgICAgc2VydmljZT1cInJlZnJlc2hfbm9kZVwiXG4gICAgICAgICAgICAgICAgICBzZXJ2aWNlLWRhdGE9XCJbW2NvbXB1dGVOb2RlU2VydmljZURhdGEoc2VsZWN0ZWROb2RlKV1dXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICBSZWZyZXNoIE5vZGVcbiAgICAgICAgICAgICAgICA8L2hhLWNhbGwtc2VydmljZS1idXR0b24+XG4gICAgICAgICAgICAgICAgPGhhLXNlcnZpY2UtZGVzY3JpcHRpb25cbiAgICAgICAgICAgICAgICAgIGhhc3M9XCJbW2hhc3NdXVwiXG4gICAgICAgICAgICAgICAgICBkb21haW49XCJ6d2F2ZVwiXG4gICAgICAgICAgICAgICAgICBzZXJ2aWNlPVwicmVmcmVzaF9ub2RlXCJcbiAgICAgICAgICAgICAgICAgIGhpZGRlbiQ9XCJbWyFzaG93SGVscF1dXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPC9oYS1zZXJ2aWNlLWRlc2NyaXB0aW9uPlxuXG4gICAgICAgICAgICAgICAgPHRlbXBsYXRlIGlzPVwiZG9tLWlmXCIgaWY9XCJbW25vZGVGYWlsZWRdXVwiPlxuICAgICAgICAgICAgICAgICAgPGhhLWNhbGwtc2VydmljZS1idXR0b25cbiAgICAgICAgICAgICAgICAgICAgaGFzcz1cIltbaGFzc11dXCJcbiAgICAgICAgICAgICAgICAgICAgZG9tYWluPVwiendhdmVcIlxuICAgICAgICAgICAgICAgICAgICBzZXJ2aWNlPVwicmVtb3ZlX2ZhaWxlZF9ub2RlXCJcbiAgICAgICAgICAgICAgICAgICAgc2VydmljZS1kYXRhPVwiW1tjb21wdXRlTm9kZVNlcnZpY2VEYXRhKHNlbGVjdGVkTm9kZSldXVwiXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIFJlbW92ZSBGYWlsZWQgTm9kZVxuICAgICAgICAgICAgICAgICAgPC9oYS1jYWxsLXNlcnZpY2UtYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgPGhhLXNlcnZpY2UtZGVzY3JpcHRpb25cbiAgICAgICAgICAgICAgICAgICAgaGFzcz1cIltbaGFzc11dXCJcbiAgICAgICAgICAgICAgICAgICAgZG9tYWluPVwiendhdmVcIlxuICAgICAgICAgICAgICAgICAgICBzZXJ2aWNlPVwicmVtb3ZlX2ZhaWxlZF9ub2RlXCJcbiAgICAgICAgICAgICAgICAgICAgaGlkZGVuJD1cIltbIXNob3dIZWxwXV1cIlxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPC9oYS1zZXJ2aWNlLWRlc2NyaXB0aW9uPlxuXG4gICAgICAgICAgICAgICAgICA8aGEtY2FsbC1zZXJ2aWNlLWJ1dHRvblxuICAgICAgICAgICAgICAgICAgICBoYXNzPVwiW1toYXNzXV1cIlxuICAgICAgICAgICAgICAgICAgICBkb21haW49XCJ6d2F2ZVwiXG4gICAgICAgICAgICAgICAgICAgIHNlcnZpY2U9XCJyZXBsYWNlX2ZhaWxlZF9ub2RlXCJcbiAgICAgICAgICAgICAgICAgICAgc2VydmljZS1kYXRhPVwiW1tjb21wdXRlTm9kZVNlcnZpY2VEYXRhKHNlbGVjdGVkTm9kZSldXVwiXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIFJlcGxhY2UgRmFpbGVkIE5vZGVcbiAgICAgICAgICAgICAgICAgIDwvaGEtY2FsbC1zZXJ2aWNlLWJ1dHRvbj5cbiAgICAgICAgICAgICAgICAgIDxoYS1zZXJ2aWNlLWRlc2NyaXB0aW9uXG4gICAgICAgICAgICAgICAgICAgIGhhc3M9XCJbW2hhc3NdXVwiXG4gICAgICAgICAgICAgICAgICAgIGRvbWFpbj1cInp3YXZlXCJcbiAgICAgICAgICAgICAgICAgICAgc2VydmljZT1cInJlcGxhY2VfZmFpbGVkX25vZGVcIlxuICAgICAgICAgICAgICAgICAgICBoaWRkZW4kPVwiW1shc2hvd0hlbHBdXVwiXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8L2hhLXNlcnZpY2UtZGVzY3JpcHRpb24+XG4gICAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cblxuICAgICAgICAgICAgICAgIDxoYS1jYWxsLXNlcnZpY2UtYnV0dG9uXG4gICAgICAgICAgICAgICAgICBoYXNzPVwiW1toYXNzXV1cIlxuICAgICAgICAgICAgICAgICAgZG9tYWluPVwiendhdmVcIlxuICAgICAgICAgICAgICAgICAgc2VydmljZT1cInByaW50X25vZGVcIlxuICAgICAgICAgICAgICAgICAgc2VydmljZS1kYXRhPVwiW1tjb21wdXRlTm9kZVNlcnZpY2VEYXRhKHNlbGVjdGVkTm9kZSldXVwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgUHJpbnQgTm9kZVxuICAgICAgICAgICAgICAgIDwvaGEtY2FsbC1zZXJ2aWNlLWJ1dHRvbj5cbiAgICAgICAgICAgICAgICA8aGEtc2VydmljZS1kZXNjcmlwdGlvblxuICAgICAgICAgICAgICAgICAgaGFzcz1cIltbaGFzc11dXCJcbiAgICAgICAgICAgICAgICAgIGRvbWFpbj1cInp3YXZlXCJcbiAgICAgICAgICAgICAgICAgIHNlcnZpY2U9XCJwcmludF9ub2RlXCJcbiAgICAgICAgICAgICAgICAgIGhpZGRlbiQ9XCJbWyFzaG93SGVscF1dXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPC9oYS1zZXJ2aWNlLWRlc2NyaXB0aW9uPlxuXG4gICAgICAgICAgICAgICAgPGhhLWNhbGwtc2VydmljZS1idXR0b25cbiAgICAgICAgICAgICAgICAgIGhhc3M9XCJbW2hhc3NdXVwiXG4gICAgICAgICAgICAgICAgICBkb21haW49XCJ6d2F2ZVwiXG4gICAgICAgICAgICAgICAgICBzZXJ2aWNlPVwiaGVhbF9ub2RlXCJcbiAgICAgICAgICAgICAgICAgIHNlcnZpY2UtZGF0YT1cIltbY29tcHV0ZUhlYWxOb2RlU2VydmljZURhdGEoc2VsZWN0ZWROb2RlKV1dXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICBIZWFsIE5vZGVcbiAgICAgICAgICAgICAgICA8L2hhLWNhbGwtc2VydmljZS1idXR0b24+XG4gICAgICAgICAgICAgICAgPGhhLXNlcnZpY2UtZGVzY3JpcHRpb25cbiAgICAgICAgICAgICAgICAgIGhhc3M9XCJbW2hhc3NdXVwiXG4gICAgICAgICAgICAgICAgICBkb21haW49XCJ6d2F2ZVwiXG4gICAgICAgICAgICAgICAgICBzZXJ2aWNlPVwiaGVhbF9ub2RlXCJcbiAgICAgICAgICAgICAgICAgIGhpZGRlbiQ9XCJbWyFzaG93SGVscF1dXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPC9oYS1zZXJ2aWNlLWRlc2NyaXB0aW9uPlxuXG4gICAgICAgICAgICAgICAgPGhhLWNhbGwtc2VydmljZS1idXR0b25cbiAgICAgICAgICAgICAgICAgIGhhc3M9XCJbW2hhc3NdXVwiXG4gICAgICAgICAgICAgICAgICBkb21haW49XCJ6d2F2ZVwiXG4gICAgICAgICAgICAgICAgICBzZXJ2aWNlPVwidGVzdF9ub2RlXCJcbiAgICAgICAgICAgICAgICAgIHNlcnZpY2UtZGF0YT1cIltbY29tcHV0ZU5vZGVTZXJ2aWNlRGF0YShzZWxlY3RlZE5vZGUpXV1cIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIFRlc3QgTm9kZVxuICAgICAgICAgICAgICAgIDwvaGEtY2FsbC1zZXJ2aWNlLWJ1dHRvbj5cbiAgICAgICAgICAgICAgICA8aGEtc2VydmljZS1kZXNjcmlwdGlvblxuICAgICAgICAgICAgICAgICAgaGFzcz1cIltbaGFzc11dXCJcbiAgICAgICAgICAgICAgICAgIGRvbWFpbj1cInp3YXZlXCJcbiAgICAgICAgICAgICAgICAgIHNlcnZpY2U9XCJ0ZXN0X25vZGVcIlxuICAgICAgICAgICAgICAgICAgaGlkZGVuJD1cIltbIXNob3dIZWxwXV1cIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8L2hhLXNlcnZpY2UtZGVzY3JpcHRpb24+XG4gICAgICAgICAgICAgICAgPG13Yy1idXR0b24gb24tY2xpY2s9XCJfbm9kZU1vcmVJbmZvXCJcbiAgICAgICAgICAgICAgICAgID5Ob2RlIEluZm9ybWF0aW9uPC9td2MtYnV0dG9uXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGV2aWNlLXBpY2tlclwiPlxuICAgICAgICAgICAgICAgIDxwYXBlci1kcm9wZG93bi1tZW51XG4gICAgICAgICAgICAgICAgICBsYWJlbD1cIkVudGl0aWVzIG9mIHRoaXMgbm9kZVwiXG4gICAgICAgICAgICAgICAgICBkeW5hbWljLWFsaWduPVwiXCJcbiAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZmxleFwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPHBhcGVyLWxpc3Rib3hcbiAgICAgICAgICAgICAgICAgICAgc2xvdD1cImRyb3Bkb3duLWNvbnRlbnRcIlxuICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZD1cInt7c2VsZWN0ZWRFbnRpdHl9fVwiXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZSBpcz1cImRvbS1yZXBlYXRcIiBpdGVtcz1cIltbZW50aXRpZXNdXVwiIGFzPVwic3RhdGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8cGFwZXItaXRlbT5bW3N0YXRlLmVudGl0eV9pZF1dPC9wYXBlci1pdGVtPlxuICAgICAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgICAgICAgICAgPC9wYXBlci1saXN0Ym94PlxuICAgICAgICAgICAgICAgIDwvcGFwZXItZHJvcGRvd24tbWVudT5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDx0ZW1wbGF0ZVxuICAgICAgICAgICAgICAgIGlzPVwiZG9tLWlmXCJcbiAgICAgICAgICAgICAgICBpZj1cIltbIWNvbXB1dGVJc0VudGl0eVNlbGVjdGVkKHNlbGVjdGVkRW50aXR5KV1dXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWFjdGlvbnNcIj5cbiAgICAgICAgICAgICAgICAgIDxoYS1jYWxsLXNlcnZpY2UtYnV0dG9uXG4gICAgICAgICAgICAgICAgICAgIGhhc3M9XCJbW2hhc3NdXVwiXG4gICAgICAgICAgICAgICAgICAgIGRvbWFpbj1cInp3YXZlXCJcbiAgICAgICAgICAgICAgICAgICAgc2VydmljZT1cInJlZnJlc2hfZW50aXR5XCJcbiAgICAgICAgICAgICAgICAgICAgc2VydmljZS1kYXRhPVwiW1tjb21wdXRlUmVmcmVzaEVudGl0eVNlcnZpY2VEYXRhKHNlbGVjdGVkRW50aXR5KV1dXCJcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgUmVmcmVzaCBFbnRpdHlcbiAgICAgICAgICAgICAgICAgIDwvaGEtY2FsbC1zZXJ2aWNlLWJ1dHRvbj5cbiAgICAgICAgICAgICAgICAgIDxoYS1zZXJ2aWNlLWRlc2NyaXB0aW9uXG4gICAgICAgICAgICAgICAgICAgIGhhc3M9XCJbW2hhc3NdXVwiXG4gICAgICAgICAgICAgICAgICAgIGRvbWFpbj1cInp3YXZlXCJcbiAgICAgICAgICAgICAgICAgICAgc2VydmljZT1cInJlZnJlc2hfZW50aXR5XCJcbiAgICAgICAgICAgICAgICAgICAgaGlkZGVuJD1cIltbIXNob3dIZWxwXV1cIlxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPC9oYS1zZXJ2aWNlLWRlc2NyaXB0aW9uPlxuICAgICAgICAgICAgICAgICAgPG13Yy1idXR0b24gb24tY2xpY2s9XCJfZW50aXR5TW9yZUluZm9cIlxuICAgICAgICAgICAgICAgICAgICA+RW50aXR5IEluZm9ybWF0aW9uPC9td2MtYnV0dG9uXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgIDxwYXBlci1jaGVja2JveFxuICAgICAgICAgICAgICAgICAgICBjaGVja2VkPVwie3tlbnRpdHlJZ25vcmVkfX1cIlxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIEV4Y2x1ZGUgdGhpcyBlbnRpdHkgZnJvbSDniaflhbvniqxcbiAgICAgICAgICAgICAgICAgIDwvcGFwZXItY2hlY2tib3g+XG4gICAgICAgICAgICAgICAgICA8cGFwZXItaW5wdXRcbiAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9XCJ7e2VudGl0eUlnbm9yZWR9fVwiXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiUG9sbGluZyBpbnRlbnNpdHlcIlxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgICAgICAgICAgbWluPVwiMFwiXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPVwie3tlbnRpdHlQb2xsaW5nSW50ZW5zaXR5fX1cIlxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPC9wYXBlci1pbnB1dD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1hY3Rpb25zXCI+XG4gICAgICAgICAgICAgICAgICA8aGEtY2FsbC1zZXJ2aWNlLWJ1dHRvblxuICAgICAgICAgICAgICAgICAgICBoYXNzPVwiW1toYXNzXV1cIlxuICAgICAgICAgICAgICAgICAgICBkb21haW49XCJ6d2F2ZVwiXG4gICAgICAgICAgICAgICAgICAgIHNlcnZpY2U9XCJzZXRfcG9sbF9pbnRlbnNpdHlcIlxuICAgICAgICAgICAgICAgICAgICBzZXJ2aWNlLWRhdGE9XCJbW2NvbXB1dGVQb2xsSW50ZW5zaXR5U2VydmljZURhdGEoZW50aXR5UG9sbGluZ0ludGVuc2l0eSldXVwiXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIFNhdmVcbiAgICAgICAgICAgICAgICAgIDwvaGEtY2FsbC1zZXJ2aWNlLWJ1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgPC9oYS1jYXJkPlxuXG4gICAgICAgICAgPHRlbXBsYXRlIGlzPVwiZG9tLWlmXCIgaWY9XCJbW2NvbXB1dGVJc05vZGVTZWxlY3RlZChzZWxlY3RlZE5vZGUpXV1cIj5cbiAgICAgICAgICAgIDwhLS0gVmFsdWUgY2FyZCAtLT5cbiAgICAgICAgICAgIDx6d2F2ZS12YWx1ZXNcbiAgICAgICAgICAgICAgaGFzcz1cIltbaGFzc11dXCJcbiAgICAgICAgICAgICAgbm9kZXM9XCJbW25vZGVzXV1cIlxuICAgICAgICAgICAgICBzZWxlY3RlZC1ub2RlPVwiW1tzZWxlY3RlZE5vZGVdXVwiXG4gICAgICAgICAgICAgIHZhbHVlcz1cIltbdmFsdWVzXV1cIlxuICAgICAgICAgICAgPjwvendhdmUtdmFsdWVzPlxuXG4gICAgICAgICAgICA8IS0tIEdyb3VwIGNhcmQgLS0+XG4gICAgICAgICAgICA8endhdmUtZ3JvdXBzXG4gICAgICAgICAgICAgIGhhc3M9XCJbW2hhc3NdXVwiXG4gICAgICAgICAgICAgIG5vZGVzPVwiW1tub2Rlc11dXCJcbiAgICAgICAgICAgICAgc2VsZWN0ZWQtbm9kZT1cIltbc2VsZWN0ZWROb2RlXV1cIlxuICAgICAgICAgICAgICBncm91cHM9XCJbW2dyb3Vwc11dXCJcbiAgICAgICAgICAgID48L3p3YXZlLWdyb3Vwcz5cblxuICAgICAgICAgICAgPCEtLSBDb25maWcgY2FyZCAtLT5cbiAgICAgICAgICAgIDx6d2F2ZS1ub2RlLWNvbmZpZ1xuICAgICAgICAgICAgICBoYXNzPVwiW1toYXNzXV1cIlxuICAgICAgICAgICAgICBub2Rlcz1cIltbbm9kZXNdXVwiXG4gICAgICAgICAgICAgIHNlbGVjdGVkLW5vZGU9XCJbW3NlbGVjdGVkTm9kZV1dXCJcbiAgICAgICAgICAgICAgY29uZmlnPVwiW1tjb25maWddXVwiXG4gICAgICAgICAgICA+PC96d2F2ZS1ub2RlLWNvbmZpZz5cbiAgICAgICAgICA8L3RlbXBsYXRlPlxuXG4gICAgICAgICAgPCEtLSBQcm90ZWN0aW9uIGNhcmQgLS0+XG4gICAgICAgICAgPHRlbXBsYXRlIGlzPVwiZG9tLWlmXCIgaWY9XCJ7e19wcm90ZWN0aW9uTm9kZX19XCI+XG4gICAgICAgICAgICA8endhdmUtbm9kZS1wcm90ZWN0aW9uXG4gICAgICAgICAgICAgIGhhc3M9XCJbW2hhc3NdXVwiXG4gICAgICAgICAgICAgIG5vZGVzPVwiW1tub2Rlc11dXCJcbiAgICAgICAgICAgICAgc2VsZWN0ZWQtbm9kZT1cIltbc2VsZWN0ZWROb2RlXV1cIlxuICAgICAgICAgICAgICBwcm90ZWN0aW9uPVwiW1tfcHJvdGVjdGlvbl1dXCJcbiAgICAgICAgICAgID48L3p3YXZlLW5vZGUtcHJvdGVjdGlvbj5cbiAgICAgICAgICA8L3RlbXBsYXRlPlxuXG4gICAgICAgICAgPCEtLSBVc2VyIENvZGVzIC0tPlxuICAgICAgICAgIDx0ZW1wbGF0ZSBpcz1cImRvbS1pZlwiIGlmPVwie3toYXNOb2RlVXNlckNvZGVzfX1cIj5cbiAgICAgICAgICAgIDx6d2F2ZS11c2VyY29kZXNcbiAgICAgICAgICAgICAgaWQ9XCJ6d2F2ZS11c2VyY29kZXNcIlxuICAgICAgICAgICAgICBoYXNzPVwiW1toYXNzXV1cIlxuICAgICAgICAgICAgICBub2Rlcz1cIltbbm9kZXNdXVwiXG4gICAgICAgICAgICAgIHVzZXItY29kZXM9XCJbW3VzZXJDb2Rlc11dXCJcbiAgICAgICAgICAgICAgc2VsZWN0ZWQtbm9kZT1cIltbc2VsZWN0ZWROb2RlXV1cIlxuICAgICAgICAgICAgPjwvendhdmUtdXNlcmNvZGVzPlxuICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgIDwvaGEtY29uZmlnLXNlY3Rpb24+XG5cbiAgICAgICAgPCEtLSBPencgbG9nIC0tPlxuICAgICAgICA8b3p3LWxvZyBpcy13aWRlPVwiW1tpc1dpZGVdXVwiIGhhc3M9XCJbW2hhc3NdXVwiPjwvb3p3LWxvZz5cbiAgICAgIDwvaGEtYXBwLWxheW91dD5cbiAgICBgO1xuICB9XG5cbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBoYXNzOiBPYmplY3QsXG5cbiAgICAgIGlzV2lkZTogQm9vbGVhbixcblxuICAgICAgbm9kZXM6IHtcbiAgICAgICAgdHlwZTogQXJyYXksXG4gICAgICAgIGNvbXB1dGVkOiBcImNvbXB1dGVOb2RlcyhoYXNzKVwiLFxuICAgICAgfSxcblxuICAgICAgc2VsZWN0ZWROb2RlOiB7XG4gICAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgICAgdmFsdWU6IC0xLFxuICAgICAgICBvYnNlcnZlcjogXCJzZWxlY3RlZE5vZGVDaGFuZ2VkXCIsXG4gICAgICB9LFxuXG4gICAgICBub2RlRmFpbGVkOiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIHZhbHVlOiBmYWxzZSxcbiAgICAgIH0sXG5cbiAgICAgIGNvbmZpZzoge1xuICAgICAgICB0eXBlOiBBcnJheSxcbiAgICAgICAgdmFsdWU6ICgpID0+IFtdLFxuICAgICAgfSxcblxuICAgICAgZW50aXRpZXM6IHtcbiAgICAgICAgdHlwZTogQXJyYXksXG4gICAgICAgIGNvbXB1dGVkOiBcImNvbXB1dGVFbnRpdGllcyhzZWxlY3RlZE5vZGUpXCIsXG4gICAgICB9LFxuXG4gICAgICBzZWxlY3RlZEVudGl0eToge1xuICAgICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICAgIHZhbHVlOiAtMSxcbiAgICAgICAgb2JzZXJ2ZXI6IFwic2VsZWN0ZWRFbnRpdHlDaGFuZ2VkXCIsXG4gICAgICB9LFxuXG4gICAgICB2YWx1ZXM6IHtcbiAgICAgICAgdHlwZTogQXJyYXksXG4gICAgICB9LFxuXG4gICAgICBncm91cHM6IHtcbiAgICAgICAgdHlwZTogQXJyYXksXG4gICAgICB9LFxuXG4gICAgICB1c2VyQ29kZXM6IHtcbiAgICAgICAgdHlwZTogQXJyYXksXG4gICAgICAgIHZhbHVlOiAoKSA9PiBbXSxcbiAgICAgIH0sXG5cbiAgICAgIGhhc05vZGVVc2VyQ29kZXM6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgdmFsdWU6IGZhbHNlLFxuICAgICAgfSxcblxuICAgICAgc2hvd0hlbHA6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgdmFsdWU6IGZhbHNlLFxuICAgICAgfSxcblxuICAgICAgZW50aXR5SWdub3JlZDogQm9vbGVhbixcblxuICAgICAgZW50aXR5UG9sbGluZ0ludGVuc2l0eToge1xuICAgICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICAgIHZhbHVlOiAwLFxuICAgICAgfSxcblxuICAgICAgX3Byb3RlY3Rpb246IHtcbiAgICAgICAgdHlwZTogQXJyYXksXG4gICAgICAgIHZhbHVlOiAoKSA9PiBbXSxcbiAgICAgIH0sXG5cbiAgICAgIF9wcm90ZWN0aW9uTm9kZToge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICB2YWx1ZTogZmFsc2UsXG4gICAgICB9LFxuICAgIH07XG4gIH1cblxuICByZWFkeSgpIHtcbiAgICBzdXBlci5yZWFkeSgpO1xuICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcihcImhhc3Mtc2VydmljZS1jYWxsZWRcIiwgKGV2KSA9PlxuICAgICAgdGhpcy5zZXJ2aWNlQ2FsbGVkKGV2KVxuICAgICk7XG4gIH1cblxuICBzZXJ2aWNlQ2FsbGVkKGV2KSB7XG4gICAgaWYgKGV2LmRldGFpbC5zdWNjZXNzICYmIGV2LmRldGFpbC5zZXJ2aWNlID09PSBcInNldF9wb2xsX2ludGVuc2l0eVwiKSB7XG4gICAgICB0aGlzLl9zYXZlRW50aXR5KCk7XG4gICAgfVxuICB9XG5cbiAgY29tcHV0ZU5vZGVzKGhhc3MpIHtcbiAgICByZXR1cm4gT2JqZWN0LmtleXMoaGFzcy5zdGF0ZXMpXG4gICAgICAubWFwKChrZXkpID0+IGhhc3Muc3RhdGVzW2tleV0pXG4gICAgICAuZmlsdGVyKChlbnQpID0+IGVudC5lbnRpdHlfaWQubWF0Y2goXCJ6d2F2ZVsuXVwiKSlcbiAgICAgIC5zb3J0KHNvcnRTdGF0ZXNCeU5hbWUpO1xuICB9XG5cbiAgY29tcHV0ZUVudGl0aWVzKHNlbGVjdGVkTm9kZSkge1xuICAgIGlmICghdGhpcy5ub2RlcyB8fCBzZWxlY3RlZE5vZGUgPT09IC0xKSByZXR1cm4gLTE7XG4gICAgY29uc3Qgbm9kZWlkID0gdGhpcy5ub2Rlc1t0aGlzLnNlbGVjdGVkTm9kZV0uYXR0cmlidXRlcy5ub2RlX2lkO1xuICAgIGNvbnN0IGhhc3MgPSB0aGlzLmhhc3M7XG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKHRoaXMuaGFzcy5zdGF0ZXMpXG4gICAgICAubWFwKChrZXkpID0+IGhhc3Muc3RhdGVzW2tleV0pXG4gICAgICAuZmlsdGVyKChlbnQpID0+IHtcbiAgICAgICAgaWYgKGVudC5hdHRyaWJ1dGVzLm5vZGVfaWQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICFlbnQuYXR0cmlidXRlcy5oaWRkZW4gJiZcbiAgICAgICAgICBcIm5vZGVfaWRcIiBpbiBlbnQuYXR0cmlidXRlcyAmJlxuICAgICAgICAgIGVudC5hdHRyaWJ1dGVzLm5vZGVfaWQgPT09IG5vZGVpZCAmJlxuICAgICAgICAgICFlbnQuZW50aXR5X2lkLm1hdGNoKFwiendhdmVbLl1cIilcbiAgICAgICAgKTtcbiAgICAgIH0pXG4gICAgICAuc29ydChzb3J0U3RhdGVzQnlOYW1lKTtcbiAgfVxuXG4gIHNlbGVjdGVkTm9kZUNoYW5nZWQoc2VsZWN0ZWROb2RlKSB7XG4gICAgaWYgKHNlbGVjdGVkTm9kZSA9PT0gLTEpIHJldHVybjtcbiAgICB0aGlzLnNlbGVjdGVkRW50aXR5ID0gLTE7XG5cbiAgICB0aGlzLmhhc3NcbiAgICAgIC5jYWxsQXBpKFxuICAgICAgICBcIkdFVFwiLFxuICAgICAgICBgendhdmUvY29uZmlnLyR7dGhpcy5ub2Rlc1tzZWxlY3RlZE5vZGVdLmF0dHJpYnV0ZXMubm9kZV9pZH1gXG4gICAgICApXG4gICAgICAudGhlbigoY29uZmlncykgPT4ge1xuICAgICAgICB0aGlzLmNvbmZpZyA9IHRoaXMuX29ialRvQXJyYXkoY29uZmlncyk7XG4gICAgICB9KTtcblxuICAgIHRoaXMuaGFzc1xuICAgICAgLmNhbGxBcGkoXG4gICAgICAgIFwiR0VUXCIsXG4gICAgICAgIGB6d2F2ZS92YWx1ZXMvJHt0aGlzLm5vZGVzW3NlbGVjdGVkTm9kZV0uYXR0cmlidXRlcy5ub2RlX2lkfWBcbiAgICAgIClcbiAgICAgIC50aGVuKCh2YWx1ZXMpID0+IHtcbiAgICAgICAgdGhpcy52YWx1ZXMgPSB0aGlzLl9vYmpUb0FycmF5KHZhbHVlcyk7XG4gICAgICB9KTtcblxuICAgIHRoaXMuaGFzc1xuICAgICAgLmNhbGxBcGkoXG4gICAgICAgIFwiR0VUXCIsXG4gICAgICAgIGB6d2F2ZS9ncm91cHMvJHt0aGlzLm5vZGVzW3NlbGVjdGVkTm9kZV0uYXR0cmlidXRlcy5ub2RlX2lkfWBcbiAgICAgIClcbiAgICAgIC50aGVuKChncm91cHMpID0+IHtcbiAgICAgICAgdGhpcy5ncm91cHMgPSB0aGlzLl9vYmpUb0FycmF5KGdyb3Vwcyk7XG4gICAgICB9KTtcblxuICAgIHRoaXMuaGFzTm9kZVVzZXJDb2RlcyA9IGZhbHNlO1xuICAgIHRoaXMubm90aWZ5UGF0aChcImhhc05vZGVVc2VyQ29kZXNcIik7XG4gICAgdGhpcy5oYXNzXG4gICAgICAuY2FsbEFwaShcbiAgICAgICAgXCJHRVRcIixcbiAgICAgICAgYHp3YXZlL3VzZXJjb2Rlcy8ke3RoaXMubm9kZXNbc2VsZWN0ZWROb2RlXS5hdHRyaWJ1dGVzLm5vZGVfaWR9YFxuICAgICAgKVxuICAgICAgLnRoZW4oKHVzZXJjb2RlcykgPT4ge1xuICAgICAgICB0aGlzLnVzZXJDb2RlcyA9IHRoaXMuX29ialRvQXJyYXkodXNlcmNvZGVzKTtcbiAgICAgICAgdGhpcy5oYXNOb2RlVXNlckNvZGVzID0gdGhpcy51c2VyQ29kZXMubGVuZ3RoID4gMDtcbiAgICAgICAgdGhpcy5ub3RpZnlQYXRoKFwiaGFzTm9kZVVzZXJDb2Rlc1wiKTtcbiAgICAgIH0pO1xuICAgIHRoaXMuaGFzc1xuICAgICAgLmNhbGxBcGkoXG4gICAgICAgIFwiR0VUXCIsXG4gICAgICAgIGB6d2F2ZS9wcm90ZWN0aW9uLyR7dGhpcy5ub2Rlc1tzZWxlY3RlZE5vZGVdLmF0dHJpYnV0ZXMubm9kZV9pZH1gXG4gICAgICApXG4gICAgICAudGhlbigocHJvdGVjdGlvbnMpID0+IHtcbiAgICAgICAgdGhpcy5fcHJvdGVjdGlvbiA9IHRoaXMuX29ialRvQXJyYXkocHJvdGVjdGlvbnMpO1xuICAgICAgICBpZiAodGhpcy5fcHJvdGVjdGlvbikge1xuICAgICAgICAgIGlmICh0aGlzLl9wcm90ZWN0aW9uLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgICB0aGlzLl9wcm90ZWN0aW9uTm9kZSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgdGhpcy5ub2RlRmFpbGVkID0gdGhpcy5ub2Rlc1tzZWxlY3RlZE5vZGVdLmF0dHJpYnV0ZXMuaXNfZmFpbGVkO1xuICB9XG5cbiAgc2VsZWN0ZWRFbnRpdHlDaGFuZ2VkKHNlbGVjdGVkRW50aXR5KSB7XG4gICAgaWYgKHNlbGVjdGVkRW50aXR5ID09PSAtMSkgcmV0dXJuO1xuICAgIHRoaXMuaGFzc1xuICAgICAgLmNhbGxBcGkoXG4gICAgICAgIFwiR0VUXCIsXG4gICAgICAgIGB6d2F2ZS92YWx1ZXMvJHt0aGlzLm5vZGVzW3RoaXMuc2VsZWN0ZWROb2RlXS5hdHRyaWJ1dGVzLm5vZGVfaWR9YFxuICAgICAgKVxuICAgICAgLnRoZW4oKHZhbHVlcykgPT4ge1xuICAgICAgICB0aGlzLnZhbHVlcyA9IHRoaXMuX29ialRvQXJyYXkodmFsdWVzKTtcbiAgICAgIH0pO1xuXG4gICAgY29uc3QgdmFsdWVJZCA9IHRoaXMuZW50aXRpZXNbc2VsZWN0ZWRFbnRpdHldLmF0dHJpYnV0ZXMudmFsdWVfaWQ7XG4gICAgY29uc3QgdmFsdWVEYXRhID0gdGhpcy52YWx1ZXMuZmluZCgob2JqKSA9PiBvYmoua2V5ID09PSB2YWx1ZUlkKTtcbiAgICBjb25zdCB2YWx1ZUluZGV4ID0gdGhpcy52YWx1ZXMuaW5kZXhPZih2YWx1ZURhdGEpO1xuICAgIHRoaXMuaGFzc1xuICAgICAgLmNhbGxBcGkoXG4gICAgICAgIFwiR0VUXCIsXG4gICAgICAgIGBjb25maWcvendhdmUvZGV2aWNlX2NvbmZpZy8ke3RoaXMuZW50aXRpZXNbc2VsZWN0ZWRFbnRpdHldLmVudGl0eV9pZH1gXG4gICAgICApXG4gICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICB0aGlzLnNldFByb3BlcnRpZXMoe1xuICAgICAgICAgIGVudGl0eUlnbm9yZWQ6IGRhdGEuaWdub3JlZCB8fCBmYWxzZSxcbiAgICAgICAgICBlbnRpdHlQb2xsaW5nSW50ZW5zaXR5OiB0aGlzLnZhbHVlc1t2YWx1ZUluZGV4XS52YWx1ZS5wb2xsX2ludGVuc2l0eSxcbiAgICAgICAgfSk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKCgpID0+IHtcbiAgICAgICAgdGhpcy5zZXRQcm9wZXJ0aWVzKHtcbiAgICAgICAgICBlbnRpdHlJZ25vcmVkOiBmYWxzZSxcbiAgICAgICAgICBlbnRpdHlQb2xsaW5nSW50ZW5zaXR5OiB0aGlzLnZhbHVlc1t2YWx1ZUluZGV4XS52YWx1ZS5wb2xsX2ludGVuc2l0eSxcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgfVxuXG4gIGNvbXB1dGVTZWxlY3RDYXB0aW9uKHN0YXRlT2JqKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIGNvbXB1dGVTdGF0ZU5hbWUoc3RhdGVPYmopICtcbiAgICAgIFwiIChOb2RlOlwiICtcbiAgICAgIHN0YXRlT2JqLmF0dHJpYnV0ZXMubm9kZV9pZCArXG4gICAgICBcIiBcIiArXG4gICAgICBzdGF0ZU9iai5hdHRyaWJ1dGVzLnF1ZXJ5X3N0YWdlICtcbiAgICAgIFwiKVwiXG4gICAgKTtcbiAgfVxuXG4gIGNvbXB1dGVTZWxlY3RDYXB0aW9uRW50KHN0YXRlT2JqKSB7XG4gICAgcmV0dXJuIGNvbXB1dGVTdGF0ZURvbWFpbihzdGF0ZU9iaikgKyBcIi5cIiArIGNvbXB1dGVTdGF0ZU5hbWUoc3RhdGVPYmopO1xuICB9XG5cbiAgY29tcHV0ZUlzTm9kZVNlbGVjdGVkKCkge1xuICAgIHJldHVybiB0aGlzLm5vZGVzICYmIHRoaXMuc2VsZWN0ZWROb2RlICE9PSAtMTtcbiAgfVxuXG4gIGNvbXB1dGVJc0VudGl0eVNlbGVjdGVkKHNlbGVjdGVkRW50aXR5KSB7XG4gICAgcmV0dXJuIHNlbGVjdGVkRW50aXR5ID09PSAtMTtcbiAgfVxuXG4gIGNvbXB1dGVOb2RlU2VydmljZURhdGEoc2VsZWN0ZWROb2RlKSB7XG4gICAgcmV0dXJuIHsgbm9kZV9pZDogdGhpcy5ub2Rlc1tzZWxlY3RlZE5vZGVdLmF0dHJpYnV0ZXMubm9kZV9pZCB9O1xuICB9XG5cbiAgY29tcHV0ZUhlYWxOb2RlU2VydmljZURhdGEoc2VsZWN0ZWROb2RlKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5vZGVfaWQ6IHRoaXMubm9kZXNbc2VsZWN0ZWROb2RlXS5hdHRyaWJ1dGVzLm5vZGVfaWQsXG4gICAgICByZXR1cm5fcm91dGVzOiB0cnVlLFxuICAgIH07XG4gIH1cblxuICBjb21wdXRlUmVmcmVzaEVudGl0eVNlcnZpY2VEYXRhKHNlbGVjdGVkRW50aXR5KSB7XG4gICAgaWYgKHNlbGVjdGVkRW50aXR5ID09PSAtMSkgcmV0dXJuIC0xO1xuICAgIHJldHVybiB7IGVudGl0eV9pZDogdGhpcy5lbnRpdGllc1tzZWxlY3RlZEVudGl0eV0uZW50aXR5X2lkIH07XG4gIH1cblxuICBjb21wdXRlUG9sbEludGVuc2l0eVNlcnZpY2VEYXRhKGVudGl0eVBvbGxpbmdJbnRlbnNpdHkpIHtcbiAgICBpZiAoIXRoaXMuc2VsZWN0ZWROb2RlID09PSAtMSB8fCB0aGlzLnNlbGVjdGVkRW50aXR5ID09PSAtMSkgcmV0dXJuIC0xO1xuICAgIHJldHVybiB7XG4gICAgICBub2RlX2lkOiB0aGlzLm5vZGVzW3RoaXMuc2VsZWN0ZWROb2RlXS5hdHRyaWJ1dGVzLm5vZGVfaWQsXG4gICAgICB2YWx1ZV9pZDogdGhpcy5lbnRpdGllc1t0aGlzLnNlbGVjdGVkRW50aXR5XS5hdHRyaWJ1dGVzLnZhbHVlX2lkLFxuICAgICAgcG9sbF9pbnRlbnNpdHk6IHBhcnNlSW50KGVudGl0eVBvbGxpbmdJbnRlbnNpdHkpLFxuICAgIH07XG4gIH1cblxuICBfbm9kZU1vcmVJbmZvKCkge1xuICAgIHRoaXMuZmlyZShcImhhc3MtbW9yZS1pbmZvXCIsIHtcbiAgICAgIGVudGl0eUlkOiB0aGlzLm5vZGVzW3RoaXMuc2VsZWN0ZWROb2RlXS5lbnRpdHlfaWQsXG4gICAgfSk7XG4gIH1cblxuICBfZW50aXR5TW9yZUluZm8oKSB7XG4gICAgdGhpcy5maXJlKFwiaGFzcy1tb3JlLWluZm9cIiwge1xuICAgICAgZW50aXR5SWQ6IHRoaXMuZW50aXRpZXNbdGhpcy5zZWxlY3RlZEVudGl0eV0uZW50aXR5X2lkLFxuICAgIH0pO1xuICB9XG5cbiAgX3NhdmVFbnRpdHkoKSB7XG4gICAgY29uc3QgZGF0YSA9IHtcbiAgICAgIGlnbm9yZWQ6IHRoaXMuZW50aXR5SWdub3JlZCxcbiAgICAgIHBvbGxpbmdfaW50ZW5zaXR5OiBwYXJzZUludCh0aGlzLmVudGl0eVBvbGxpbmdJbnRlbnNpdHkpLFxuICAgIH07XG4gICAgcmV0dXJuIHRoaXMuaGFzcy5jYWxsQXBpKFxuICAgICAgXCJQT1NUXCIsXG4gICAgICBgY29uZmlnL3p3YXZlL2RldmljZV9jb25maWcvJHtcbiAgICAgICAgdGhpcy5lbnRpdGllc1t0aGlzLnNlbGVjdGVkRW50aXR5XS5lbnRpdHlfaWRcbiAgICAgIH1gLFxuICAgICAgZGF0YVxuICAgICk7XG4gIH1cblxuICB0b2dnbGVIZWxwKCkge1xuICAgIHRoaXMuc2hvd0hlbHAgPSAhdGhpcy5zaG93SGVscDtcbiAgfVxuXG4gIF9vYmpUb0FycmF5KG9iaikge1xuICAgIGNvbnN0IGFycmF5ID0gW107XG4gICAgT2JqZWN0LmtleXMob2JqKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgIGFycmF5LnB1c2goe1xuICAgICAgICBrZXksXG4gICAgICAgIHZhbHVlOiBvYmpba2V5XSxcbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIHJldHVybiBhcnJheTtcbiAgfVxuXG4gIF9iYWNrVGFwcGVkKCkge1xuICAgIGhpc3RvcnkuYmFjaygpO1xuICB9XG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcImhhLWNvbmZpZy16d2F2ZVwiLCBIYUNvbmZpZ1p3YXZlKTtcbiIsImltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWRyb3Bkb3duLW1lbnUvcGFwZXItZHJvcGRvd24tbWVudVwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItaXRlbS9wYXBlci1pdGVtXCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1saXN0Ym94L3BhcGVyLWxpc3Rib3hcIjtcbmltcG9ydCB7IGh0bWwgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvaHRtbC10YWdcIjtcbmltcG9ydCB7IFBvbHltZXJFbGVtZW50IH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvcG9seW1lci1lbGVtZW50XCI7XG5cbmltcG9ydCBcIi4uLy4uLy4uL2NvbXBvbmVudHMvYnV0dG9ucy9oYS1jYWxsLXNlcnZpY2UtYnV0dG9uXCI7XG5pbXBvcnQgXCIuLi8uLi8uLi9jb21wb25lbnRzL2hhLWNhcmRcIjtcblxuaW1wb3J0IHsgY29tcHV0ZVN0YXRlTmFtZSB9IGZyb20gXCIuLi8uLi8uLi9jb21tb24vZW50aXR5L2NvbXB1dGVfc3RhdGVfbmFtZVwiO1xuXG5jbGFzcyBad2F2ZUdyb3VwcyBleHRlbmRzIFBvbHltZXJFbGVtZW50IHtcbiAgc3RhdGljIGdldCB0ZW1wbGF0ZSgpIHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxzdHlsZSBpbmNsdWRlPVwiaXJvbi1mbGV4IGhhLXN0eWxlXCI+XG4gICAgICAgIC5jb250ZW50IHtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAyNHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgaGEtY2FyZCB7XG4gICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgICAgbWF4LXdpZHRoOiA2MDBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5kZXZpY2UtcGlja2VyIHtcbiAgICAgICAgICBAYXBwbHkgLS1sYXlvdXQtaG9yaXpvbnRhbDtcbiAgICAgICAgICBAYXBwbHkgLS1sYXlvdXQtY2VudGVyLWNlbnRlcjtcbiAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDI0cHg7XG4gICAgICAgICAgcGFkZGluZy1yaWdodDogMjRweDtcbiAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMjRweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5oZWxwLXRleHQge1xuICAgICAgICAgIHBhZGRpbmctbGVmdDogMjRweDtcbiAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAyNHB4O1xuICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxMnB4O1xuICAgICAgICB9XG4gICAgICA8L3N0eWxlPlxuICAgICAgPGhhLWNhcmQgY2xhc3M9XCJjb250ZW50XCIgaGVhZGVyPVwiTm9kZSBncm91cCBhc3NvY2lhdGlvbnNcIj5cbiAgICAgICAgPCEtLSBUT0RPIG1ha2UgYXBpIGZvciBnZXR0aW5nIGdyb3VwcyBhbmQgbWVtYmVycyAtLT5cbiAgICAgICAgPGRpdiBjbGFzcz1cImRldmljZS1waWNrZXJcIj5cbiAgICAgICAgICA8cGFwZXItZHJvcGRvd24tbWVudSBsYWJlbD1cIkdyb3VwXCIgZHluYW1pYy1hbGlnbj1cIlwiIGNsYXNzPVwiZmxleFwiPlxuICAgICAgICAgICAgPHBhcGVyLWxpc3Rib3hcbiAgICAgICAgICAgICAgc2xvdD1cImRyb3Bkb3duLWNvbnRlbnRcIlxuICAgICAgICAgICAgICBzZWxlY3RlZD1cInt7X3NlbGVjdGVkR3JvdXB9fVwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDx0ZW1wbGF0ZSBpcz1cImRvbS1yZXBlYXRcIiBpdGVtcz1cIltbZ3JvdXBzXV1cIiBhcz1cInN0YXRlXCI+XG4gICAgICAgICAgICAgICAgPHBhcGVyLWl0ZW0+W1tfY29tcHV0ZVNlbGVjdENhcHRpb25Hcm91cChzdGF0ZSldXTwvcGFwZXItaXRlbT5cbiAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICAgIDwvcGFwZXItbGlzdGJveD5cbiAgICAgICAgICA8L3BhcGVyLWRyb3Bkb3duLW1lbnU+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8dGVtcGxhdGUgaXM9XCJkb20taWZcIiBpZj1cIltbX2NvbXB1dGVJc0dyb3VwU2VsZWN0ZWQoX3NlbGVjdGVkR3JvdXApXV1cIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGV2aWNlLXBpY2tlclwiPlxuICAgICAgICAgICAgPHBhcGVyLWRyb3Bkb3duLW1lbnVcbiAgICAgICAgICAgICAgbGFiZWw9XCJOb2RlIHRvIGNvbnRyb2xcIlxuICAgICAgICAgICAgICBkeW5hbWljLWFsaWduPVwiXCJcbiAgICAgICAgICAgICAgY2xhc3M9XCJmbGV4XCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPHBhcGVyLWxpc3Rib3hcbiAgICAgICAgICAgICAgICBzbG90PVwiZHJvcGRvd24tY29udGVudFwiXG4gICAgICAgICAgICAgICAgc2VsZWN0ZWQ9XCJ7e19zZWxlY3RlZFRhcmdldE5vZGV9fVwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8dGVtcGxhdGUgaXM9XCJkb20tcmVwZWF0XCIgaXRlbXM9XCJbW25vZGVzXV1cIiBhcz1cInN0YXRlXCI+XG4gICAgICAgICAgICAgICAgICA8cGFwZXItaXRlbT5bW19jb21wdXRlU2VsZWN0Q2FwdGlvbihzdGF0ZSldXTwvcGFwZXItaXRlbT5cbiAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgICAgICA8L3BhcGVyLWxpc3Rib3g+XG4gICAgICAgICAgICA8L3BhcGVyLWRyb3Bkb3duLW1lbnU+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiaGVscC10ZXh0XCI+XG4gICAgICAgICAgICA8c3Bhbj5PdGhlciBOb2RlcyBpbiB0aGlzIGdyb3VwOjwvc3Bhbj5cbiAgICAgICAgICAgIDx0ZW1wbGF0ZSBpcz1cImRvbS1yZXBlYXRcIiBpdGVtcz1cIltbX290aGVyR3JvdXBOb2Rlc11dXCIgYXM9XCJzdGF0ZVwiPlxuICAgICAgICAgICAgICA8ZGl2Pltbc3RhdGVdXTwvZGl2PlxuICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiaGVscC10ZXh0XCI+XG4gICAgICAgICAgICA8c3Bhbj5NYXggQXNzb2NpYXRpb25zOjwvc3Bhbj4gPHNwYW4+W1tfbWF4QXNzb2NpYXRpb25zXV08L3NwYW4+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvdGVtcGxhdGU+XG5cbiAgICAgICAgPHRlbXBsYXRlXG4gICAgICAgICAgaXM9XCJkb20taWZcIlxuICAgICAgICAgIGlmPVwiW1tfY29tcHV0ZUlzVGFyZ2V0Tm9kZVNlbGVjdGVkKF9zZWxlY3RlZFRhcmdldE5vZGUpXV1cIlxuICAgICAgICA+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtYWN0aW9uc1wiPlxuICAgICAgICAgICAgPHRlbXBsYXRlIGlzPVwiZG9tLWlmXCIgaWY9XCJbWyFfbm9Bc3NvY2lhdGlvbnNMZWZ0XV1cIj5cbiAgICAgICAgICAgICAgPGhhLWNhbGwtc2VydmljZS1idXR0b25cbiAgICAgICAgICAgICAgICBoYXNzPVwiW1toYXNzXV1cIlxuICAgICAgICAgICAgICAgIGRvbWFpbj1cInp3YXZlXCJcbiAgICAgICAgICAgICAgICBzZXJ2aWNlPVwiY2hhbmdlX2Fzc29jaWF0aW9uXCJcbiAgICAgICAgICAgICAgICBzZXJ2aWNlLWRhdGE9XCJbW19hZGRBc3NvY1NlcnZpY2VEYXRhXV1cIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgQWRkIFRvIEdyb3VwXG4gICAgICAgICAgICAgIDwvaGEtY2FsbC1zZXJ2aWNlLWJ1dHRvbj5cbiAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgICA8dGVtcGxhdGVcbiAgICAgICAgICAgICAgaXM9XCJkb20taWZcIlxuICAgICAgICAgICAgICBpZj1cIltbX2NvbXB1dGVUYXJnZXRJbkdyb3VwKF9zZWxlY3RlZEdyb3VwLCBfc2VsZWN0ZWRUYXJnZXROb2RlKV1dXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPGhhLWNhbGwtc2VydmljZS1idXR0b25cbiAgICAgICAgICAgICAgICBoYXNzPVwiW1toYXNzXV1cIlxuICAgICAgICAgICAgICAgIGRvbWFpbj1cInp3YXZlXCJcbiAgICAgICAgICAgICAgICBzZXJ2aWNlPVwiY2hhbmdlX2Fzc29jaWF0aW9uXCJcbiAgICAgICAgICAgICAgICBzZXJ2aWNlLWRhdGE9XCJbW19yZW1vdmVBc3NvY1NlcnZpY2VEYXRhXV1cIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgUmVtb3ZlIEZyb20gR3JvdXBcbiAgICAgICAgICAgICAgPC9oYS1jYWxsLXNlcnZpY2UtYnV0dG9uPlxuICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICAgIDx0ZW1wbGF0ZSBpcz1cImRvbS1pZlwiIGlmPVwiW1tfaXNCcm9hZGNhc3ROb2RlSW5Hcm91cF1dXCI+XG4gICAgICAgICAgICAgIDxoYS1jYWxsLXNlcnZpY2UtYnV0dG9uXG4gICAgICAgICAgICAgICAgaGFzcz1cIltbaGFzc11dXCJcbiAgICAgICAgICAgICAgICBkb21haW49XCJ6d2F2ZVwiXG4gICAgICAgICAgICAgICAgc2VydmljZT1cImNoYW5nZV9hc3NvY2lhdGlvblwiXG4gICAgICAgICAgICAgICAgc2VydmljZS1kYXRhPVwiW1tfcmVtb3ZlQnJvYWRjYXN0Tm9kZVNlcnZpY2VEYXRhXV1cIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgUmVtb3ZlIEJyb2FkY2FzdFxuICAgICAgICAgICAgICA8L2hhLWNhbGwtc2VydmljZS1idXR0b24+XG4gICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgPC9oYS1jYXJkPlxuICAgIGA7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGhhc3M6IE9iamVjdCxcblxuICAgICAgbm9kZXM6IEFycmF5LFxuXG4gICAgICBncm91cHM6IEFycmF5LFxuXG4gICAgICBzZWxlY3RlZE5vZGU6IHtcbiAgICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgICBvYnNlcnZlcjogXCJfc2VsZWN0ZWROb2RlQ2hhbmdlZFwiLFxuICAgICAgfSxcblxuICAgICAgX3NlbGVjdGVkVGFyZ2V0Tm9kZToge1xuICAgICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICAgIHZhbHVlOiAtMSxcbiAgICAgICAgb2JzZXJ2ZXI6IFwiX3NlbGVjdGVkVGFyZ2V0Tm9kZUNoYW5nZWRcIixcbiAgICAgIH0sXG5cbiAgICAgIF9zZWxlY3RlZEdyb3VwOiB7XG4gICAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgICAgdmFsdWU6IC0xLFxuICAgICAgfSxcblxuICAgICAgX290aGVyR3JvdXBOb2Rlczoge1xuICAgICAgICB0eXBlOiBBcnJheSxcbiAgICAgICAgdmFsdWU6IC0xLFxuICAgICAgICBjb21wdXRlZDogXCJfY29tcHV0ZU90aGVyR3JvdXBOb2Rlcyhfc2VsZWN0ZWRHcm91cClcIixcbiAgICAgIH0sXG5cbiAgICAgIF9tYXhBc3NvY2lhdGlvbnM6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICB2YWx1ZTogXCJcIixcbiAgICAgICAgY29tcHV0ZWQ6IFwiX2NvbXB1dGVNYXhBc3NvY2lhdGlvbnMoX3NlbGVjdGVkR3JvdXApXCIsXG4gICAgICB9LFxuXG4gICAgICBfbm9Bc3NvY2lhdGlvbnNMZWZ0OiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIHZhbHVlOiB0cnVlLFxuICAgICAgICBjb21wdXRlZDogXCJfY29tcHV0ZUFzc29jaWF0aW9uc0xlZnQoX3NlbGVjdGVkR3JvdXApXCIsXG4gICAgICB9LFxuXG4gICAgICBfYWRkQXNzb2NTZXJ2aWNlRGF0YToge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIHZhbHVlOiBcIlwiLFxuICAgICAgfSxcblxuICAgICAgX3JlbW92ZUFzc29jU2VydmljZURhdGE6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICB2YWx1ZTogXCJcIixcbiAgICAgIH0sXG5cbiAgICAgIF9yZW1vdmVCcm9hZGNhc3ROb2RlU2VydmljZURhdGE6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICB2YWx1ZTogXCJcIixcbiAgICAgIH0sXG5cbiAgICAgIF9pc0Jyb2FkY2FzdE5vZGVJbkdyb3VwOiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIHZhbHVlOiBmYWxzZSxcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgb2JzZXJ2ZXJzKCkge1xuICAgIHJldHVybiBbXCJfc2VsZWN0ZWRHcm91cENoYW5nZWQoZ3JvdXBzLCBfc2VsZWN0ZWRHcm91cClcIl07XG4gIH1cblxuICByZWFkeSgpIHtcbiAgICBzdXBlci5yZWFkeSgpO1xuICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcihcImhhc3Mtc2VydmljZS1jYWxsZWRcIiwgKGV2KSA9PlxuICAgICAgdGhpcy5zZXJ2aWNlQ2FsbGVkKGV2KVxuICAgICk7XG4gIH1cblxuICBzZXJ2aWNlQ2FsbGVkKGV2KSB7XG4gICAgaWYgKGV2LmRldGFpbC5zdWNjZXNzKSB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5fcmVmcmVzaEdyb3Vwcyh0aGlzLnNlbGVjdGVkTm9kZSk7XG4gICAgICB9LCA1MDAwKTtcbiAgICB9XG4gIH1cblxuICBfY29tcHV0ZUFzc29jaWF0aW9uc0xlZnQoc2VsZWN0ZWRHcm91cCkge1xuICAgIGlmIChzZWxlY3RlZEdyb3VwID09PSAtMSkgcmV0dXJuIHRydWU7XG4gICAgcmV0dXJuIHRoaXMuX21heEFzc29jaWF0aW9ucyA9PT0gdGhpcy5fb3RoZXJHcm91cE5vZGVzLmxlbmd0aDtcbiAgfVxuXG4gIF9jb21wdXRlTWF4QXNzb2NpYXRpb25zKHNlbGVjdGVkR3JvdXApIHtcbiAgICBpZiAoc2VsZWN0ZWRHcm91cCA9PT0gLTEpIHJldHVybiAtMTtcbiAgICBjb25zdCBtYXhBc3NvY2lhdGlvbnMgPSB0aGlzLmdyb3Vwc1tzZWxlY3RlZEdyb3VwXS52YWx1ZS5tYXhfYXNzb2NpYXRpb25zO1xuICAgIGlmICghbWF4QXNzb2NpYXRpb25zKSByZXR1cm4gXCJOb25lXCI7XG4gICAgcmV0dXJuIG1heEFzc29jaWF0aW9ucztcbiAgfVxuXG4gIF9jb21wdXRlT3RoZXJHcm91cE5vZGVzKHNlbGVjdGVkR3JvdXApIHtcbiAgICBpZiAoc2VsZWN0ZWRHcm91cCA9PT0gLTEpIHJldHVybiAtMTtcbiAgICB0aGlzLnNldFByb3BlcnRpZXMoeyBfaXNCcm9hZGNhc3ROb2RlSW5Hcm91cDogZmFsc2UgfSk7XG4gICAgY29uc3QgYXNzb2NpYXRpb25zID0gT2JqZWN0LnZhbHVlcyhcbiAgICAgIHRoaXMuZ3JvdXBzW3NlbGVjdGVkR3JvdXBdLnZhbHVlLmFzc29jaWF0aW9uX2luc3RhbmNlc1xuICAgICk7XG4gICAgaWYgKCFhc3NvY2lhdGlvbnMubGVuZ3RoKSByZXR1cm4gW1wiTm9uZVwiXTtcbiAgICByZXR1cm4gYXNzb2NpYXRpb25zLm1hcCgoYXNzb2MpID0+IHtcbiAgICAgIGlmICghYXNzb2MubGVuZ3RoIHx8IGFzc29jLmxlbmd0aCAhPT0gMikge1xuICAgICAgICByZXR1cm4gYFVua25vd24gTm9kZTogJHthc3NvY31gO1xuICAgICAgfVxuICAgICAgY29uc3QgaWQgPSBhc3NvY1swXTtcbiAgICAgIGNvbnN0IGluc3RhbmNlID0gYXNzb2NbMV07XG4gICAgICBjb25zdCBub2RlID0gdGhpcy5ub2Rlcy5maW5kKChuKSA9PiBuLmF0dHJpYnV0ZXMubm9kZV9pZCA9PT0gaWQpO1xuICAgICAgaWYgKGlkID09PSAyNTUpIHtcbiAgICAgICAgdGhpcy5zZXRQcm9wZXJ0aWVzKHtcbiAgICAgICAgICBfaXNCcm9hZGNhc3ROb2RlSW5Hcm91cDogdHJ1ZSxcbiAgICAgICAgICBfcmVtb3ZlQnJvYWRjYXN0Tm9kZVNlcnZpY2VEYXRhOiB7XG4gICAgICAgICAgICBub2RlX2lkOiB0aGlzLm5vZGVzW3RoaXMuc2VsZWN0ZWROb2RlXS5hdHRyaWJ1dGVzLm5vZGVfaWQsXG4gICAgICAgICAgICBhc3NvY2lhdGlvbjogXCJyZW1vdmVcIixcbiAgICAgICAgICAgIHRhcmdldF9ub2RlX2lkOiAyNTUsXG4gICAgICAgICAgICBncm91cDogdGhpcy5ncm91cHNbc2VsZWN0ZWRHcm91cF0ua2V5LFxuICAgICAgICAgIH0sXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgaWYgKCFub2RlKSB7XG4gICAgICAgIHJldHVybiBgVW5rbm93biBOb2RlICgke2lkfTogKCR7aW5zdGFuY2V9ID8gJHtpZH0uJHtpbnN0YW5jZX0gOiAke2lkfSkpYDtcbiAgICAgIH1cbiAgICAgIGxldCBjYXB0aW9uID0gdGhpcy5fY29tcHV0ZVNlbGVjdENhcHRpb24obm9kZSk7XG4gICAgICBpZiAoaW5zdGFuY2UpIHtcbiAgICAgICAgY2FwdGlvbiArPSBgLyBJbnN0YW5jZTogJHtpbnN0YW5jZX1gO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNhcHRpb247XG4gICAgfSk7XG4gIH1cblxuICBfY29tcHV0ZVRhcmdldEluR3JvdXAoc2VsZWN0ZWRHcm91cCwgc2VsZWN0ZWRUYXJnZXROb2RlKSB7XG4gICAgaWYgKHNlbGVjdGVkR3JvdXAgPT09IC0xIHx8IHNlbGVjdGVkVGFyZ2V0Tm9kZSA9PT0gLTEpIHJldHVybiBmYWxzZTtcbiAgICBjb25zdCBhc3NvY2lhdGlvbnMgPSBPYmplY3QudmFsdWVzKFxuICAgICAgdGhpcy5ncm91cHNbc2VsZWN0ZWRHcm91cF0udmFsdWUuYXNzb2NpYXRpb25zXG4gICAgKTtcbiAgICBpZiAoIWFzc29jaWF0aW9ucy5sZW5ndGgpIHJldHVybiBmYWxzZTtcbiAgICByZXR1cm4gKFxuICAgICAgYXNzb2NpYXRpb25zLmluZGV4T2YoXG4gICAgICAgIHRoaXMubm9kZXNbc2VsZWN0ZWRUYXJnZXROb2RlXS5hdHRyaWJ1dGVzLm5vZGVfaWRcbiAgICAgICkgIT09IC0xXG4gICAgKTtcbiAgfVxuXG4gIF9jb21wdXRlU2VsZWN0Q2FwdGlvbihzdGF0ZU9iaikge1xuICAgIHJldHVybiBgJHtjb21wdXRlU3RhdGVOYW1lKHN0YXRlT2JqKX1cbiAgICAgIChOb2RlOiAke3N0YXRlT2JqLmF0dHJpYnV0ZXMubm9kZV9pZH1cbiAgICAgICR7c3RhdGVPYmouYXR0cmlidXRlcy5xdWVyeV9zdGFnZX0pYDtcbiAgfVxuXG4gIF9jb21wdXRlU2VsZWN0Q2FwdGlvbkdyb3VwKHN0YXRlT2JqKSB7XG4gICAgcmV0dXJuIGAke3N0YXRlT2JqLmtleX06ICR7c3RhdGVPYmoudmFsdWUubGFiZWx9YDtcbiAgfVxuXG4gIF9jb21wdXRlSXNUYXJnZXROb2RlU2VsZWN0ZWQoc2VsZWN0ZWRUYXJnZXROb2RlKSB7XG4gICAgcmV0dXJuIHRoaXMubm9kZXMgJiYgc2VsZWN0ZWRUYXJnZXROb2RlICE9PSAtMTtcbiAgfVxuXG4gIF9jb21wdXRlSXNHcm91cFNlbGVjdGVkKHNlbGVjdGVkR3JvdXApIHtcbiAgICByZXR1cm4gdGhpcy5ub2RlcyAmJiB0aGlzLnNlbGVjdGVkTm9kZSAhPT0gLTEgJiYgc2VsZWN0ZWRHcm91cCAhPT0gLTE7XG4gIH1cblxuICBfY29tcHV0ZUFzc29jU2VydmljZURhdGEoc2VsZWN0ZWRHcm91cCwgdHlwZSkge1xuICAgIGlmIChcbiAgICAgICF0aGlzLmdyb3VwcyA9PT0gLTEgfHxcbiAgICAgIHNlbGVjdGVkR3JvdXAgPT09IC0xIHx8XG4gICAgICB0aGlzLnNlbGVjdGVkTm9kZSA9PT0gLTEgfHxcbiAgICAgIHRoaXMuX3NlbGVjdGVkVGFyZ2V0Tm9kZSA9PT0gLTFcbiAgICApXG4gICAgICByZXR1cm4gLTE7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5vZGVfaWQ6IHRoaXMubm9kZXNbdGhpcy5zZWxlY3RlZE5vZGVdLmF0dHJpYnV0ZXMubm9kZV9pZCxcbiAgICAgIGFzc29jaWF0aW9uOiB0eXBlLFxuICAgICAgdGFyZ2V0X25vZGVfaWQ6IHRoaXMubm9kZXNbdGhpcy5fc2VsZWN0ZWRUYXJnZXROb2RlXS5hdHRyaWJ1dGVzLm5vZGVfaWQsXG4gICAgICBncm91cDogdGhpcy5ncm91cHNbc2VsZWN0ZWRHcm91cF0ua2V5LFxuICAgIH07XG4gIH1cblxuICBhc3luYyBfcmVmcmVzaEdyb3VwcyhzZWxlY3RlZE5vZGUpIHtcbiAgICBjb25zdCBncm91cERhdGEgPSBbXTtcbiAgICBjb25zdCBncm91cHMgPSBhd2FpdCB0aGlzLmhhc3MuY2FsbEFwaShcbiAgICAgIFwiR0VUXCIsXG4gICAgICBgendhdmUvZ3JvdXBzLyR7dGhpcy5ub2Rlc1tzZWxlY3RlZE5vZGVdLmF0dHJpYnV0ZXMubm9kZV9pZH1gXG4gICAgKTtcbiAgICBPYmplY3Qua2V5cyhncm91cHMpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgZ3JvdXBEYXRhLnB1c2goe1xuICAgICAgICBrZXksXG4gICAgICAgIHZhbHVlOiBncm91cHNba2V5XSxcbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIHRoaXMuc2V0UHJvcGVydGllcyh7XG4gICAgICBncm91cHM6IGdyb3VwRGF0YSxcbiAgICAgIF9tYXhBc3NvY2lhdGlvbnM6IGdyb3VwRGF0YVt0aGlzLl9zZWxlY3RlZEdyb3VwXS52YWx1ZS5tYXhfYXNzb2NpYXRpb25zLFxuICAgICAgX290aGVyR3JvdXBOb2RlczogT2JqZWN0LnZhbHVlcyhcbiAgICAgICAgZ3JvdXBEYXRhW3RoaXMuX3NlbGVjdGVkR3JvdXBdLnZhbHVlLmFzc29jaWF0aW9uc1xuICAgICAgKSxcbiAgICAgIF9pc0Jyb2FkY2FzdE5vZGVJbkdyb3VwOiBmYWxzZSxcbiAgICB9KTtcbiAgICBjb25zdCBvbGRHcm91cCA9IHRoaXMuX3NlbGVjdGVkR3JvdXA7XG4gICAgdGhpcy5zZXRQcm9wZXJ0aWVzKHsgX3NlbGVjdGVkR3JvdXA6IC0xIH0pO1xuICAgIHRoaXMuc2V0UHJvcGVydGllcyh7IF9zZWxlY3RlZEdyb3VwOiBvbGRHcm91cCB9KTtcbiAgfVxuXG4gIF9zZWxlY3RlZEdyb3VwQ2hhbmdlZCgpIHtcbiAgICBpZiAodGhpcy5fc2VsZWN0ZWRHcm91cCA9PT0gLTEpIHJldHVybjtcbiAgICB0aGlzLnNldFByb3BlcnRpZXMoe1xuICAgICAgX21heEFzc29jaWF0aW9uczogdGhpcy5ncm91cHNbdGhpcy5fc2VsZWN0ZWRHcm91cF0udmFsdWUubWF4X2Fzc29jaWF0aW9ucyxcbiAgICAgIF9vdGhlckdyb3VwTm9kZXM6IE9iamVjdC52YWx1ZXMoXG4gICAgICAgIHRoaXMuZ3JvdXBzW3RoaXMuX3NlbGVjdGVkR3JvdXBdLnZhbHVlLmFzc29jaWF0aW9uc1xuICAgICAgKSxcbiAgICB9KTtcbiAgfVxuXG4gIF9zZWxlY3RlZFRhcmdldE5vZGVDaGFuZ2VkKCkge1xuICAgIGlmICh0aGlzLl9zZWxlY3RlZEdyb3VwID09PSAtMSkgcmV0dXJuO1xuICAgIGlmIChcbiAgICAgIHRoaXMuX2NvbXB1dGVUYXJnZXRJbkdyb3VwKHRoaXMuX3NlbGVjdGVkR3JvdXAsIHRoaXMuX3NlbGVjdGVkVGFyZ2V0Tm9kZSlcbiAgICApIHtcbiAgICAgIHRoaXMuc2V0UHJvcGVydGllcyh7XG4gICAgICAgIF9yZW1vdmVBc3NvY1NlcnZpY2VEYXRhOiB0aGlzLl9jb21wdXRlQXNzb2NTZXJ2aWNlRGF0YShcbiAgICAgICAgICB0aGlzLl9zZWxlY3RlZEdyb3VwLFxuICAgICAgICAgIFwicmVtb3ZlXCJcbiAgICAgICAgKSxcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNldFByb3BlcnRpZXMoe1xuICAgICAgICBfYWRkQXNzb2NTZXJ2aWNlRGF0YTogdGhpcy5fY29tcHV0ZUFzc29jU2VydmljZURhdGEoXG4gICAgICAgICAgdGhpcy5fc2VsZWN0ZWRHcm91cCxcbiAgICAgICAgICBcImFkZFwiXG4gICAgICAgICksXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBfc2VsZWN0ZWROb2RlQ2hhbmdlZCgpIHtcbiAgICBpZiAodGhpcy5zZWxlY3RlZE5vZGUgPT09IC0xKSByZXR1cm47XG4gICAgdGhpcy5zZXRQcm9wZXJ0aWVzKHsgX3NlbGVjdGVkVGFyZ2V0Tm9kZTogLTEsIF9zZWxlY3RlZEdyb3VwOiAtMSB9KTtcbiAgfVxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJ6d2F2ZS1ncm91cHNcIiwgWndhdmVHcm91cHMpO1xuIiwiaW1wb3J0IFwiQG1hdGVyaWFsL213Yy1idXR0b25cIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWNoZWNrYm94L3BhcGVyLWNoZWNrYm94XCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1pbnB1dC9wYXBlci1pbnB1dFwiO1xuaW1wb3J0IHsgaHRtbCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZ1wiO1xuaW1wb3J0IHsgUG9seW1lckVsZW1lbnQgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWVsZW1lbnRcIjtcbmltcG9ydCBMb2NhbGl6ZU1peGluIGZyb20gXCIuLi8uLi8uLi9taXhpbnMvbG9jYWxpemUtbWl4aW5cIjtcbmltcG9ydCB7IEV2ZW50c01peGluIH0gZnJvbSBcIi4uLy4uLy4uL21peGlucy9ldmVudHMtbWl4aW5cIjtcbmltcG9ydCBpc1B3YSBmcm9tIFwiLi4vLi4vLi4vY29tbW9uL2NvbmZpZy9pc19wd2FcIjtcblxuaW1wb3J0IFwiLi4vaGEtY29uZmlnLXNlY3Rpb25cIjtcbmltcG9ydCBcIi4uLy4uLy4uL2NvbXBvbmVudHMvaGEtY2FyZFwiO1xuXG5sZXQgcmVnaXN0ZXJlZERpYWxvZyA9IGZhbHNlO1xuXG5jbGFzcyBPendMb2cgZXh0ZW5kcyBMb2NhbGl6ZU1peGluKEV2ZW50c01peGluKFBvbHltZXJFbGVtZW50KSkge1xuICBzdGF0aWMgZ2V0IHRlbXBsYXRlKCkge1xuICAgIHJldHVybiBodG1sYFxuICAgIDxzdHlsZSBpbmNsdWRlPVwiaXJvbi1mbGV4IGhhLXN0eWxlXCI+XG4gICAgICAuY29udGVudCB7XG4gICAgICAgIG1hcmdpbi10b3A6IDI0cHg7XG4gICAgICB9XG5cbiAgICAgIGhhLWNhcmQge1xuICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgbWF4LXdpZHRoOiA2MDBweDtcbiAgICAgIH1cblxuICAgICAgLmRldmljZS1waWNrZXIge1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDI0cHg7XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDI0cHg7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAyNHB4O1xuICAgICAgfVxuXG4gICAgPC9zdHlsZT5cbiAgICA8aGEtY29uZmlnLXNlY3Rpb24gaXMtd2lkZT1cIltbaXNXaWRlXV1cIj5cbiAgICAgIDxzcGFuIHNsb3Q9XCJoZWFkZXJcIj5cbiAgICAgICAgW1tsb2NhbGl6ZSgndWkucGFuZWwuY29uZmlnLnp3YXZlLm96d19sb2cuaGVhZGVyJyldXVxuICAgICAgPC9zcGFuPlxuICAgICAgPHNwYW4gc2xvdD1cImludHJvZHVjdGlvblwiPlxuICAgICAgICBbW2xvY2FsaXplKCd1aS5wYW5lbC5jb25maWcuendhdmUub3p3X2xvZy5pbnRyb2R1Y3Rpb24nKV1dXG4gICAgICA8L3NwYW4+XG4gICAgICA8aGEtY2FyZCBjbGFzcz1cImNvbnRlbnRcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImRldmljZS1waWNrZXJcIj5cbiAgICAgICAgICA8cGFwZXItaW5wdXQgbGFiZWw9XCJOdW1iZXIgb2YgbGFzdCBsb2cgbGluZXMuXCIgdHlwZT1cIm51bWJlclwiIG1pbj1cIjBcIiBtYXg9XCIxMDAwXCIgc3RlcD1cIjEwXCIgdmFsdWU9XCJ7e251bUxvZ0xpbmVzfX1cIj5cbiAgICAgICAgICA8L3BhcGVyLWlucHV0PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtYWN0aW9uc1wiPlxuICAgICAgICAgIDxtd2MtYnV0dG9uIHJhaXNlZD1cInRydWVcIiBvbi1jbGljaz1cIl9vcGVuTG9nV2luZG93XCI+TG9hZDwvbXdjLWJ1dHRvbj5cbiAgICAgICAgICA8bXdjLWJ1dHRvbiByYWlzZWQ9XCJ0cnVlXCIgb24tY2xpY2s9XCJfdGFpbExvZ1wiIGRpc2FibGVkPVwie3tfY29tcGxldGVMb2d9fVwiPlRhaWw8L213Yy1idXR0b24+XG4gICAgICA8L2hhLWNhcmQ+XG4gICAgPC9oYS1jb25maWctc2VjdGlvbj5cbmA7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGhhc3M6IE9iamVjdCxcblxuICAgICAgaXNXaWRlOiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIHZhbHVlOiBmYWxzZSxcbiAgICAgIH0sXG5cbiAgICAgIF9vendMb2dzOiBTdHJpbmcsXG5cbiAgICAgIF9jb21wbGV0ZUxvZzoge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICB2YWx1ZTogdHJ1ZSxcbiAgICAgIH0sXG5cbiAgICAgIG51bUxvZ0xpbmVzOiB7XG4gICAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgICAgdmFsdWU6IDAsXG4gICAgICAgIG9ic2VydmVyOiBcIl9pc0NvbXBsZXRlTG9nXCIsXG4gICAgICB9LFxuXG4gICAgICBfaW50ZXJ2YWxJZDogU3RyaW5nLFxuXG4gICAgICB0YWlsOiBCb29sZWFuLFxuICAgIH07XG4gIH1cblxuICBhc3luYyBfdGFpbExvZygpIHtcbiAgICB0aGlzLnNldFByb3BlcnRpZXMoeyB0YWlsOiB0cnVlIH0pO1xuICAgIGNvbnN0IG96d1dpbmRvdyA9IGF3YWl0IHRoaXMuX29wZW5Mb2dXaW5kb3coKTtcbiAgICBpZiAoIWlzUHdhKCkpIHtcbiAgICAgIHRoaXMuc2V0UHJvcGVydGllcyh7XG4gICAgICAgIF9pbnRlcnZhbElkOiBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgdGhpcy5fcmVmcmVzaExvZyhvendXaW5kb3cpO1xuICAgICAgICB9LCAxNTAwKSxcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGFzeW5jIF9vcGVuTG9nV2luZG93KCkge1xuICAgIGNvbnN0IGluZm8gPSBhd2FpdCB0aGlzLmhhc3MuY2FsbEFwaShcbiAgICAgIFwiR0VUXCIsXG4gICAgICBcInp3YXZlL296d2xvZz9saW5lcz1cIiArIHRoaXMubnVtTG9nTGluZXNcbiAgICApO1xuICAgIHRoaXMuc2V0UHJvcGVydGllcyh7IF9vendMb2dzOiBpbmZvIH0pO1xuICAgIGlmIChpc1B3YSgpKSB7XG4gICAgICB0aGlzLl9zaG93T3p3bG9nRGlhbG9nKCk7XG4gICAgICByZXR1cm4gLTE7XG4gICAgfVxuICAgIGNvbnN0IG96d1dpbmRvdyA9IG9wZW4oXCJcIiwgXCJvendMb2dcIiwgXCJ0b29sYmFyXCIpO1xuICAgIG96d1dpbmRvdy5kb2N1bWVudC5ib2R5LmlubmVySFRNTCA9IGA8cHJlPiR7dGhpcy5fb3p3TG9nc308L3ByZT5gO1xuICAgIHJldHVybiBvendXaW5kb3c7XG4gIH1cblxuICBhc3luYyBfcmVmcmVzaExvZyhvendXaW5kb3cpIHtcbiAgICBpZiAob3p3V2luZG93LmNsb3NlZCA9PT0gdHJ1ZSkge1xuICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLl9pbnRlcnZhbElkKTtcbiAgICAgIHRoaXMuc2V0UHJvcGVydGllcyh7IF9pbnRlcnZhbElkOiBudWxsIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBpbmZvID0gYXdhaXQgdGhpcy5oYXNzLmNhbGxBcGkoXG4gICAgICAgIFwiR0VUXCIsXG4gICAgICAgIFwiendhdmUvb3p3bG9nP2xpbmVzPVwiICsgdGhpcy5udW1Mb2dMaW5lc1xuICAgICAgKTtcbiAgICAgIHRoaXMuc2V0UHJvcGVydGllcyh7IF9vendMb2dzOiBpbmZvIH0pO1xuICAgICAgb3p3V2luZG93LmRvY3VtZW50LmJvZHkuaW5uZXJIVE1MID0gYDxwcmU+JHt0aGlzLl9vendMb2dzfTwvcHJlPmA7XG4gICAgfVxuICB9XG5cbiAgX2lzQ29tcGxldGVMb2coKSB7XG4gICAgaWYgKHRoaXMubnVtTG9nTGluZXMgIT09IFwiMFwiKSB7XG4gICAgICB0aGlzLnNldFByb3BlcnRpZXMoeyBfY29tcGxldGVMb2c6IGZhbHNlIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNldFByb3BlcnRpZXMoeyBfY29tcGxldGVMb2c6IHRydWUgfSk7XG4gICAgfVxuICB9XG5cbiAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgc3VwZXIuY29ubmVjdGVkQ2FsbGJhY2soKTtcbiAgICBpZiAoIXJlZ2lzdGVyZWREaWFsb2cpIHtcbiAgICAgIHJlZ2lzdGVyZWREaWFsb2cgPSB0cnVlO1xuICAgICAgdGhpcy5maXJlKFwicmVnaXN0ZXItZGlhbG9nXCIsIHtcbiAgICAgICAgZGlhbG9nU2hvd0V2ZW50OiBcInNob3ctb3p3bG9nLWRpYWxvZ1wiLFxuICAgICAgICBkaWFsb2dUYWc6IFwiendhdmUtbG9nLWRpYWxvZ1wiLFxuICAgICAgICBkaWFsb2dJbXBvcnQ6ICgpID0+XG4gICAgICAgICAgaW1wb3J0KC8qIHdlYnBhY2tDaHVua05hbWU6IFwiendhdmUtbG9nLWRpYWxvZ1wiICovIFwiLi96d2F2ZS1sb2ctZGlhbG9nXCIpLFxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgX3Nob3dPendsb2dEaWFsb2coKSB7XG4gICAgdGhpcy5maXJlKFwic2hvdy1vendsb2ctZGlhbG9nXCIsIHtcbiAgICAgIGhhc3M6IHRoaXMuaGFzcyxcbiAgICAgIF9udW1Mb2dMaW5lczogdGhpcy5udW1Mb2dMaW5lcyxcbiAgICAgIF9vendMb2c6IHRoaXMuX296d0xvZ3MsXG4gICAgICBfdGFpbDogdGhpcy50YWlsLFxuICAgICAgZGlhbG9nQ2xvc2VkQ2FsbGJhY2s6ICgpID0+IHRoaXMuX2RpYWxvZ0Nsb3NlZCgpLFxuICAgIH0pO1xuICB9XG5cbiAgX2RpYWxvZ0Nsb3NlZCgpIHtcbiAgICB0aGlzLnNldFByb3BlcnRpZXMoe1xuICAgICAgdGFpbDogZmFsc2UsXG4gICAgfSk7XG4gIH1cbn1cbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcIm96dy1sb2dcIiwgT3p3TG9nKTtcbiIsImltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWljb24tYnV0dG9uL3BhcGVyLWljb24tYnV0dG9uXCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1zcGlubmVyL3BhcGVyLXNwaW5uZXJcIjtcblxuaW1wb3J0IHtcbiAgY3NzLFxuICBDU1NSZXN1bHQsXG4gIGN1c3RvbUVsZW1lbnQsXG4gIGh0bWwsXG4gIExpdEVsZW1lbnQsXG4gIHByb3BlcnR5LFxuICBUZW1wbGF0ZVJlc3VsdCxcbn0gZnJvbSBcImxpdC1lbGVtZW50XCI7XG5pbXBvcnQgeyBVbnN1YnNjcmliZUZ1bmMgfSBmcm9tIFwiaG9tZS1hc3Npc3RhbnQtanMtd2Vic29ja2V0XCI7XG5cbmltcG9ydCB7IGhhU3R5bGUgfSBmcm9tIFwiLi4vLi4vLi4vcmVzb3VyY2VzL3N0eWxlc1wiO1xuaW1wb3J0IHsgSG9tZUFzc2lzdGFudCB9IGZyb20gXCIuLi8uLi8uLi90eXBlc1wiO1xuaW1wb3J0IHtcbiAgZmV0Y2hOZXR3b3JrU3RhdHVzLFxuICBaV2F2ZU5ldHdvcmtTdGF0dXMsXG4gIFpXQVZFX05FVFdPUktfU1RBVEVfU1RPUFBFRCxcbiAgWldBVkVfTkVUV09SS19TVEFURV9TVEFSVEVELFxuICBaV0FWRV9ORVRXT1JLX1NUQVRFX0FXQUtFRCxcbiAgWldBVkVfTkVUV09SS19TVEFURV9SRUFEWSxcbn0gZnJvbSBcIi4uLy4uLy4uL2RhdGEvendhdmVcIjtcblxuaW1wb3J0IFwiLi4vLi4vLi4vY29tcG9uZW50cy9idXR0b25zL2hhLWNhbGwtYXBpLWJ1dHRvblwiO1xuaW1wb3J0IFwiLi4vLi4vLi4vY29tcG9uZW50cy9idXR0b25zL2hhLWNhbGwtc2VydmljZS1idXR0b25cIjtcbmltcG9ydCBcIi4uLy4uLy4uL2NvbXBvbmVudHMvaGEtc2VydmljZS1kZXNjcmlwdGlvblwiO1xuaW1wb3J0IFwiLi4vLi4vLi4vY29tcG9uZW50cy9oYS1jYXJkXCI7XG5pbXBvcnQgXCIuLi8uLi8uLi9jb21wb25lbnRzL2hhLWljb25cIjtcbmltcG9ydCBcIi4uL2hhLWNvbmZpZy1zZWN0aW9uXCI7XG5cbkBjdXN0b21FbGVtZW50KFwiendhdmUtbmV0d29ya1wiKVxuZXhwb3J0IGNsYXNzIFp3YXZlTmV0d29yayBleHRlbmRzIExpdEVsZW1lbnQge1xuICBAcHJvcGVydHkoKSBwdWJsaWMgaGFzcyE6IEhvbWVBc3Npc3RhbnQ7XG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyBpc1dpZGUhOiBib29sZWFuO1xuICBAcHJvcGVydHkoKSBwcml2YXRlIF9zaG93SGVscCA9IGZhbHNlO1xuICBAcHJvcGVydHkoKSBwcml2YXRlIF9uZXR3b3JrU3RhdHVzPzogWldhdmVOZXR3b3JrU3RhdHVzO1xuICBAcHJvcGVydHkoKSBwcml2YXRlIF91bnN1YnM6IEFycmF5PFByb21pc2U8VW5zdWJzY3JpYmVGdW5jPj4gPSBbXTtcblxuICBwdWJsaWMgZGlzY29ubmVjdGVkQ2FsbGJhY2soKTogdm9pZCB7XG4gICAgdGhpcy5fdW5zdWJzY3JpYmUoKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBmaXJzdFVwZGF0ZWQoY2hhbmdlZFByb3BzKTogdm9pZCB7XG4gICAgc3VwZXIuZmlyc3RVcGRhdGVkKGNoYW5nZWRQcm9wcyk7XG4gICAgdGhpcy5fZ2V0TmV0d29ya1N0YXR1cygpO1xuICAgIHRoaXMuX3N1YnNjcmliZSgpO1xuICB9XG5cbiAgcHJvdGVjdGVkIHJlbmRlcigpOiBUZW1wbGF0ZVJlc3VsdCB8IHZvaWQge1xuICAgIHJldHVybiBodG1sYFxuICAgICAgPGhhLWNvbmZpZy1zZWN0aW9uIC5pc1dpZGU9XCIke3RoaXMuaXNXaWRlfVwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwic2VjdGlvbkhlYWRlclwiIHNsb3Q9XCJoZWFkZXJcIj5cbiAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICR7dGhpcy5oYXNzIS5sb2NhbGl6ZShcbiAgICAgICAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcuendhdmUubmV0d29ya19tYW5hZ2VtZW50LmhlYWRlclwiXG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICA8cGFwZXItaWNvbi1idXR0b25cbiAgICAgICAgICAgIGNsYXNzPVwidG9nZ2xlLWhlbHAtaWNvblwiXG4gICAgICAgICAgICBAY2xpY2s9XCIke3RoaXMuX29uSGVscFRhcH1cIlxuICAgICAgICAgICAgaWNvbj1cImhhc3M6aGVscC1jaXJjbGVcIlxuICAgICAgICAgID48L3BhcGVyLWljb24tYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBzbG90PVwiaW50cm9kdWN0aW9uXCI+XG4gICAgICAgICAgJHt0aGlzLmhhc3MhLmxvY2FsaXplKFxuICAgICAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcuendhdmUubmV0d29ya19tYW5hZ2VtZW50LmludHJvZHVjdGlvblwiXG4gICAgICAgICAgKX1cbiAgICAgICAgICA8cD5cbiAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgIGhyZWY9XCJodHRwczovL3d3dy5ob21lLWFzc2lzdGFudC5pby9kb2NzL3otd2F2ZS9jb250cm9sLXBhbmVsL1wiXG4gICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICR7dGhpcy5oYXNzIS5sb2NhbGl6ZShcInVpLnBhbmVsLmNvbmZpZy56d2F2ZS5sZWFybl9tb3JlXCIpfVxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgJHt0aGlzLl9uZXR3b3JrU3RhdHVzXG4gICAgICAgICAgPyBodG1sYFxuICAgICAgICAgICAgICA8aGEtY2FyZCBjbGFzcz1cImNvbnRlbnQgbmV0d29yay1zdGF0dXNcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGV0YWlsc1wiPlxuICAgICAgICAgICAgICAgICAgJHt0aGlzLl9uZXR3b3JrU3RhdHVzLnN0YXRlID09PSBaV0FWRV9ORVRXT1JLX1NUQVRFX1NUT1BQRURcbiAgICAgICAgICAgICAgICAgICAgPyBodG1sYFxuICAgICAgICAgICAgICAgICAgICAgICAgPGhhLWljb24gaWNvbj1cImhhc3M6Y2xvc2VcIj48L2hhLWljb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAke3RoaXMuaGFzcyEubG9jYWxpemUoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLnp3YXZlLm5ldHdvcmtfc3RhdHVzLm5ldHdvcmtfc3RvcHBlZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgIGBcbiAgICAgICAgICAgICAgICAgICAgOiB0aGlzLl9uZXR3b3JrU3RhdHVzLnN0YXRlID09PSBaV0FWRV9ORVRXT1JLX1NUQVRFX1NUQVJURURcbiAgICAgICAgICAgICAgICAgICAgPyBodG1sYFxuICAgICAgICAgICAgICAgICAgICAgICAgPHBhcGVyLXNwaW5uZXIgYWN0aXZlPjwvcGFwZXItc3Bpbm5lcj5cbiAgICAgICAgICAgICAgICAgICAgICAgICR7dGhpcy5oYXNzIS5sb2NhbGl6ZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcuendhdmUubmV0d29ya19zdGF0dXMubmV0d29ya19zdGFydGluZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICApfTxiciAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNtYWxsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAke3RoaXMuaGFzcyEubG9jYWxpemUoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcuendhdmUubmV0d29ya19zdGF0dXMubmV0d29ya19zdGFydGluZ19ub3RlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc21hbGw+XG4gICAgICAgICAgICAgICAgICAgICAgYFxuICAgICAgICAgICAgICAgICAgICA6IHRoaXMuX25ldHdvcmtTdGF0dXMuc3RhdGUgPT09IFpXQVZFX05FVFdPUktfU1RBVEVfQVdBS0VEXG4gICAgICAgICAgICAgICAgICAgID8gaHRtbGBcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoYS1pY29uIGljb249XCJoYXNzOmNoZWNrYm94LW1hcmtlZC1jaXJjbGVcIj4gPC9oYS1pY29uPlxuICAgICAgICAgICAgICAgICAgICAgICAgJHt0aGlzLmhhc3MhLmxvY2FsaXplKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy56d2F2ZS5uZXR3b3JrX3N0YXR1cy5uZXR3b3JrX3N0YXJ0ZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgKX08YnIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzbWFsbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgJHt0aGlzLmhhc3MhLmxvY2FsaXplKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLnp3YXZlLm5ldHdvcmtfc3RhdHVzLm5ldHdvcmtfc3RhcnRlZF9ub3RlX3NvbWVfcXVlcmllZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NtYWxsPlxuICAgICAgICAgICAgICAgICAgICAgIGBcbiAgICAgICAgICAgICAgICAgICAgOiB0aGlzLl9uZXR3b3JrU3RhdHVzLnN0YXRlID09PSBaV0FWRV9ORVRXT1JLX1NUQVRFX1JFQURZXG4gICAgICAgICAgICAgICAgICAgID8gaHRtbGBcbiAgICAgICAgICAgICAgICAgICAgICAgICR7dGhpcy5oYXNzIS5sb2NhbGl6ZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcuendhdmUubmV0d29ya19zdGF0dXMubmV0d29ya19zdGFydGVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICl9PGJyIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c21hbGw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICR7dGhpcy5oYXNzIS5sb2NhbGl6ZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy56d2F2ZS5uZXR3b3JrX3N0YXR1cy5uZXR3b3JrX3N0YXJ0ZWRfbm90ZV9hbGxfcXVlcmllZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NtYWxsPlxuICAgICAgICAgICAgICAgICAgICAgIGBcbiAgICAgICAgICAgICAgICAgICAgOiBcIlwifVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWFjdGlvbnNcIj5cbiAgICAgICAgICAgICAgICAgICR7dGhpcy5fbmV0d29ya1N0YXR1cy5zdGF0ZSA+PSBaV0FWRV9ORVRXT1JLX1NUQVRFX0FXQUtFRFxuICAgICAgICAgICAgICAgICAgICA/IGh0bWxgXG4gICAgICAgICAgICAgICAgICAgICAgICAke3RoaXMuX2dlbmVyYXRlU2VydmljZUJ1dHRvbihcInN0b3BfbmV0d29ya1wiKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICR7dGhpcy5fZ2VuZXJhdGVTZXJ2aWNlQnV0dG9uKFwiaGVhbF9uZXR3b3JrXCIpfVxuICAgICAgICAgICAgICAgICAgICAgICAgJHt0aGlzLl9nZW5lcmF0ZVNlcnZpY2VCdXR0b24oXCJ0ZXN0X25ldHdvcmtcIil9XG4gICAgICAgICAgICAgICAgICAgICAgYFxuICAgICAgICAgICAgICAgICAgICA6IGh0bWxgXG4gICAgICAgICAgICAgICAgICAgICAgICAke3RoaXMuX2dlbmVyYXRlU2VydmljZUJ1dHRvbihcInN0YXJ0X25ldHdvcmtcIil9XG4gICAgICAgICAgICAgICAgICAgICAgYH1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAke3RoaXMuX25ldHdvcmtTdGF0dXMuc3RhdGUgPj0gWldBVkVfTkVUV09SS19TVEFURV9BV0FLRURcbiAgICAgICAgICAgICAgICAgID8gaHRtbGBcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1hY3Rpb25zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAke3RoaXMuX2dlbmVyYXRlU2VydmljZUJ1dHRvbihcInNvZnRfcmVzZXRcIil9XG4gICAgICAgICAgICAgICAgICAgICAgICA8aGEtY2FsbC1hcGktYnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC5oYXNzPSR7dGhpcy5oYXNzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBwYXRoPVwiendhdmUvc2F2ZWNvbmZpZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICR7dGhpcy5oYXNzIS5sb2NhbGl6ZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy56d2F2ZS5zZXJ2aWNlcy5zYXZlX2NvbmZpZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2hhLWNhbGwtYXBpLWJ1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgYFxuICAgICAgICAgICAgICAgICAgOiBcIlwifVxuICAgICAgICAgICAgICA8L2hhLWNhcmQ+XG4gICAgICAgICAgICAgICR7dGhpcy5fbmV0d29ya1N0YXR1cy5zdGF0ZSA+PSBaV0FWRV9ORVRXT1JLX1NUQVRFX0FXQUtFRFxuICAgICAgICAgICAgICAgID8gaHRtbGBcbiAgICAgICAgICAgICAgICAgICAgPGhhLWNhcmQgY2xhc3M9XCJjb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtYWN0aW9uc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgJHt0aGlzLl9nZW5lcmF0ZVNlcnZpY2VCdXR0b24oXCJhZGRfbm9kZV9zZWN1cmVcIil9XG4gICAgICAgICAgICAgICAgICAgICAgICAke3RoaXMuX2dlbmVyYXRlU2VydmljZUJ1dHRvbihcImFkZF9ub2RlXCIpfVxuICAgICAgICAgICAgICAgICAgICAgICAgJHt0aGlzLl9nZW5lcmF0ZVNlcnZpY2VCdXR0b24oXCJyZW1vdmVfbm9kZVwiKX1cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1hY3Rpb25zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAke3RoaXMuX2dlbmVyYXRlU2VydmljZUJ1dHRvbihcImNhbmNlbF9jb21tYW5kXCIpfVxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2hhLWNhcmQ+XG4gICAgICAgICAgICAgICAgICBgXG4gICAgICAgICAgICAgICAgOiBcIlwifVxuICAgICAgICAgICAgYFxuICAgICAgICAgIDogXCJcIn1cbiAgICAgIDwvaGEtY29uZmlnLXNlY3Rpb24+XG4gICAgYDtcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgX2dldE5ldHdvcmtTdGF0dXMoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgdGhpcy5fbmV0d29ya1N0YXR1cyA9IGF3YWl0IGZldGNoTmV0d29ya1N0YXR1cyh0aGlzLmhhc3MhKTtcbiAgfVxuXG4gIHByaXZhdGUgX3N1YnNjcmliZSgpOiB2b2lkIHtcbiAgICB0aGlzLl91bnN1YnMgPSBbXG4gICAgICBcInp3YXZlLm5ldHdvcmtfc3RhcnRcIixcbiAgICAgIFwiendhdmUubmV0d29ya19zdG9wXCIsXG4gICAgICBcInp3YXZlLm5ldHdvcmtfcmVhZHlcIixcbiAgICAgIFwiendhdmUubmV0d29ya19jb21wbGV0ZVwiLFxuICAgICAgXCJ6d2F2ZS5uZXR3b3JrX2NvbXBsZXRlX3NvbWVfZGVhZFwiLFxuICAgIF0ubWFwKChlKSA9PlxuICAgICAgdGhpcy5oYXNzIS5jb25uZWN0aW9uLnN1YnNjcmliZUV2ZW50cyhcbiAgICAgICAgKGV2ZW50KSA9PiB0aGlzLl9oYW5kbGVFdmVudChldmVudCksXG4gICAgICAgIGVcbiAgICAgIClcbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBfdW5zdWJzY3JpYmUoKTogdm9pZCB7XG4gICAgd2hpbGUgKHRoaXMuX3Vuc3Vicy5sZW5ndGgpIHtcbiAgICAgIHRoaXMuX3Vuc3Vicy5wb3AoKSEudGhlbigodW5zdWIpID0+IHVuc3ViKCkpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX2hhbmRsZUV2ZW50KGV2ZW50KSB7XG4gICAgaWYgKGV2ZW50LmV2ZW50X3R5cGUgPT09IFwiendhdmUubmV0d29ya19zdGFydFwiKSB7XG4gICAgICAvLyBPcHRpbWlzdGljYWxseSBzZXQgdGhlIHN0YXRlLCB3YWl0IDFzIGFuZCBwb2xsIHRoZSBiYWNrZW5kXG4gICAgICAvLyBUaGUgYmFja2VuZCB3aWxsIHN0aWxsIHJlcG9ydCBhIHN0YXRlIG9mIDAgd2hlbiB0aGUgJ25ldHdvcmtfc3RhcnQnXG4gICAgICAvLyBldmVudCBpcyBmaXJzdCBmaXJlZC5cbiAgICAgIGlmICh0aGlzLl9uZXR3b3JrU3RhdHVzKSB7XG4gICAgICAgIHRoaXMuX25ldHdvcmtTdGF0dXMgPSB7IC4uLnRoaXMuX25ldHdvcmtTdGF0dXMsIHN0YXRlOiA1IH07XG4gICAgICB9XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMuX2dldE5ldHdvcmtTdGF0dXMsIDEwMDApO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9nZXROZXR3b3JrU3RhdHVzKCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfb25IZWxwVGFwKCk6IHZvaWQge1xuICAgIHRoaXMuX3Nob3dIZWxwID0gIXRoaXMuX3Nob3dIZWxwO1xuICB9XG5cbiAgcHJpdmF0ZSBfZ2VuZXJhdGVTZXJ2aWNlQnV0dG9uKHNlcnZpY2U6IHN0cmluZykge1xuICAgIHJldHVybiBodG1sYFxuICAgICAgPGhhLWNhbGwtc2VydmljZS1idXR0b25cbiAgICAgICAgLmhhc3M9JHt0aGlzLmhhc3N9XG4gICAgICAgIGRvbWFpbj1cInp3YXZlXCJcbiAgICAgICAgc2VydmljZT1cIiR7c2VydmljZX1cIlxuICAgICAgPlxuICAgICAgICAke3RoaXMuaGFzcyEubG9jYWxpemUoXCJ1aS5wYW5lbC5jb25maWcuendhdmUuc2VydmljZXMuXCIgKyBzZXJ2aWNlKX1cbiAgICAgIDwvaGEtY2FsbC1zZXJ2aWNlLWJ1dHRvbj5cbiAgICAgIDxoYS1zZXJ2aWNlLWRlc2NyaXB0aW9uXG4gICAgICAgIC5oYXNzPSR7dGhpcy5oYXNzfVxuICAgICAgICBkb21haW49XCJ6d2F2ZVwiXG4gICAgICAgIHNlcnZpY2U9XCIke3NlcnZpY2V9XCJcbiAgICAgICAgP2hpZGRlbj0keyF0aGlzLl9zaG93SGVscH1cbiAgICAgID5cbiAgICAgIDwvaGEtc2VydmljZS1kZXNjcmlwdGlvbj5cbiAgICBgO1xuICB9XG5cbiAgc3RhdGljIGdldCBzdHlsZXMoKTogQ1NTUmVzdWx0W10ge1xuICAgIHJldHVybiBbXG4gICAgICBoYVN0eWxlLFxuICAgICAgY3NzYFxuICAgICAgICAuY29udGVudCB7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMjRweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5zZWN0aW9uSGVhZGVyIHtcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgcGFkZGluZy1yaWdodDogNDBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5uZXR3b3JrLXN0YXR1cyB7XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICB9XG5cbiAgICAgICAgLm5ldHdvcmstc3RhdHVzIGRpdi5kZXRhaWxzIHtcbiAgICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICAgICAgICBwYWRkaW5nOiAyNHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLm5ldHdvcmstc3RhdHVzIGhhLWljb24ge1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgIG1hcmdpbjogMHB4IGF1dG8gMTZweDtcbiAgICAgICAgICB3aWR0aDogNDhweDtcbiAgICAgICAgICBoZWlnaHQ6IDQ4cHg7XG4gICAgICAgIH1cblxuICAgICAgICAubmV0d29yay1zdGF0dXMgc21hbGwge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgICAgfVxuXG4gICAgICAgIGhhLWNhcmQge1xuICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICAgIG1heC13aWR0aDogNjAwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAuY2FyZC1hY3Rpb25zLndhcm5pbmcgaGEtY2FsbC1zZXJ2aWNlLWJ1dHRvbiB7XG4gICAgICAgICAgY29sb3I6IHZhcigtLWdvb2dsZS1yZWQtNTAwKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC50b2dnbGUtaGVscC1pY29uIHtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgdG9wOiAtNnB4O1xuICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGhhLXNlcnZpY2UtZGVzY3JpcHRpb24ge1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgIGNvbG9yOiBncmV5O1xuICAgICAgICAgIHBhZGRpbmc6IDAgOHB4IDEycHg7XG4gICAgICAgIH1cblxuICAgICAgICBbaGlkZGVuXSB7XG4gICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgfVxuICAgICAgYCxcbiAgICBdO1xuICB9XG59XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIEhUTUxFbGVtZW50VGFnTmFtZU1hcCB7XG4gICAgXCJ6d2F2ZS1uZXR3b3JrXCI6IFp3YXZlTmV0d29yaztcbiAgfVxufVxuIiwiaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItZHJvcGRvd24tbWVudS9wYXBlci1kcm9wZG93bi1tZW51XCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1pbnB1dC9wYXBlci1pbnB1dFwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItaXRlbS9wYXBlci1pdGVtXCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1saXN0Ym94L3BhcGVyLWxpc3Rib3hcIjtcblxuaW1wb3J0IHtcbiAgY3NzLFxuICBDU1NSZXN1bHQsXG4gIGN1c3RvbUVsZW1lbnQsXG4gIGh0bWwsXG4gIExpdEVsZW1lbnQsXG4gIHByb3BlcnR5LFxuICBUZW1wbGF0ZVJlc3VsdCxcbiAgUHJvcGVydHlWYWx1ZXMsXG59IGZyb20gXCJsaXQtZWxlbWVudFwiO1xuXG5pbXBvcnQgeyBoYVN0eWxlIH0gZnJvbSBcIi4uLy4uLy4uL3Jlc291cmNlcy9zdHlsZXNcIjtcbmltcG9ydCB7IEhvbWVBc3Npc3RhbnQgfSBmcm9tIFwiLi4vLi4vLi4vdHlwZXNcIjtcblxuaW1wb3J0IFwiLi4vLi4vLi4vY29tcG9uZW50cy9idXR0b25zL2hhLWNhbGwtc2VydmljZS1idXR0b25cIjtcbmltcG9ydCBcIi4uLy4uLy4uL2NvbXBvbmVudHMvaGEtY2FyZFwiO1xuaW1wb3J0IHtcbiAgWldhdmVDb25maWdJdGVtLFxuICBaV2F2ZU5vZGUsXG4gIFpXYXZlQ29uZmlnU2VydmljZURhdGEsXG4gIGZldGNoTm9kZUNvbmZpZyxcbn0gZnJvbSBcIi4uLy4uLy4uL2RhdGEvendhdmVcIjtcblxuQGN1c3RvbUVsZW1lbnQoXCJ6d2F2ZS1ub2RlLWNvbmZpZ1wiKVxuZXhwb3J0IGNsYXNzIFp3YXZlTm9kZUNvbmZpZyBleHRlbmRzIExpdEVsZW1lbnQge1xuICBAcHJvcGVydHkoKSBwdWJsaWMgaGFzcyE6IEhvbWVBc3Npc3RhbnQ7XG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyBub2RlczogWldhdmVOb2RlW10gPSBbXTtcbiAgQHByb3BlcnR5KCkgcHVibGljIGNvbmZpZzogWldhdmVDb25maWdJdGVtW10gPSBbXTtcbiAgQHByb3BlcnR5KCkgcHVibGljIHNlbGVjdGVkTm9kZTogbnVtYmVyID0gLTE7XG4gIEBwcm9wZXJ0eSgpIHByaXZhdGUgX2NvbmZpZ0l0ZW0/OiBaV2F2ZUNvbmZpZ0l0ZW07XG4gIEBwcm9wZXJ0eSgpIHByaXZhdGUgX3dha2V1cElucHV0OiBudW1iZXIgPSAtMTtcbiAgQHByb3BlcnR5KCkgcHJpdmF0ZSBfc2VsZWN0ZWRDb25maWdQYXJhbWV0ZXI6IG51bWJlciA9IC0xO1xuICBAcHJvcGVydHkoKSBwcml2YXRlIF9zZWxlY3RlZENvbmZpZ1ZhbHVlOiBudW1iZXIgfCBzdHJpbmcgPSAtMTtcblxuICBwcm90ZWN0ZWQgcmVuZGVyKCk6IFRlbXBsYXRlUmVzdWx0IHwgdm9pZCB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8ZGl2IGNsYXNzPVwiY29udGVudFwiPlxuICAgICAgICA8aGEtY2FyZFxuICAgICAgICAgIC5oZWFkZXI9JHt0aGlzLmhhc3MhLmxvY2FsaXplKFxuICAgICAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcuendhdmUubm9kZV9jb25maWcuaGVhZGVyXCJcbiAgICAgICAgICApfVxuICAgICAgICA+XG4gICAgICAgICAgJHtcIndha2VfdXBfaW50ZXJ2YWxcIiBpbiB0aGlzLm5vZGVzW3RoaXMuc2VsZWN0ZWROb2RlXS5hdHRyaWJ1dGVzXG4gICAgICAgICAgICA/IGh0bWxgXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtYWN0aW9uc1wiPlxuICAgICAgICAgICAgICAgICAgPHBhcGVyLWlucHV0XG4gICAgICAgICAgICAgICAgICAgIC5mbG9hdExhYmVsPVwiJHt0aGlzLmhhc3MhLmxvY2FsaXplKFxuICAgICAgICAgICAgICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLnp3YXZlLmNvbW1vbi53YWtldXBfaW50ZXJ2YWxcIlxuICAgICAgICAgICAgICAgICAgICApfVwiXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgICAgICAgICAudmFsdWU9JHt0aGlzLl93YWtldXBJbnB1dCAhPT0gLTFcbiAgICAgICAgICAgICAgICAgICAgICA/IHRoaXMuX3dha2V1cElucHV0XG4gICAgICAgICAgICAgICAgICAgICAgOiB0aGlzLmhhc3MhLmxvY2FsaXplKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy56d2F2ZS5jb21tb24udW5rbm93blwiXG4gICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICBAdmFsdWUtY2hhbmdlZD0ke3RoaXMuX29uV2FrZXVwSW50ZXJ2YWxDaGFuZ2VkfVxuICAgICAgICAgICAgICAgICAgICAucGxhY2Vob2xkZXI9JHt0aGlzLm5vZGVzW3RoaXMuc2VsZWN0ZWROb2RlXS5hdHRyaWJ1dGVzXG4gICAgICAgICAgICAgICAgICAgICAgLndha2VfdXBfaW50ZXJ2YWxcbiAgICAgICAgICAgICAgICAgICAgICA/IHRoaXMubm9kZXNbdGhpcy5zZWxlY3RlZE5vZGVdLmF0dHJpYnV0ZXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLndha2VfdXBfaW50ZXJ2YWxcbiAgICAgICAgICAgICAgICAgICAgICA6IHRoaXMuaGFzcyEubG9jYWxpemUoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLnp3YXZlLmNvbW1vbi51bmtub3duXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3VmZml4PlxuICAgICAgICAgICAgICAgICAgICAgICR7dGhpcy5oYXNzIS5sb2NhbGl6ZShcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLnp3YXZlLm5vZGVfY29uZmlnLnNlY29uZHNcIlxuICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9wYXBlci1pbnB1dD5cbiAgICAgICAgICAgICAgICAgIDxoYS1jYWxsLXNlcnZpY2UtYnV0dG9uXG4gICAgICAgICAgICAgICAgICAgIC5oYXNzPSR7dGhpcy5oYXNzfVxuICAgICAgICAgICAgICAgICAgICBkb21haW49XCJ6d2F2ZVwiXG4gICAgICAgICAgICAgICAgICAgIHNlcnZpY2U9XCJzZXRfd2FrZXVwXCJcbiAgICAgICAgICAgICAgICAgICAgLnNlcnZpY2VEYXRhPSR7dGhpcy5fY29tcHV0ZVdha2V1cFNlcnZpY2VEYXRhKFxuICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3dha2V1cElucHV0XG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICR7dGhpcy5oYXNzIS5sb2NhbGl6ZShcbiAgICAgICAgICAgICAgICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy56d2F2ZS5ub2RlX2NvbmZpZy5zZXRfd2FrZXVwXCJcbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgIDwvaGEtY2FsbC1zZXJ2aWNlLWJ1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgYFxuICAgICAgICAgICAgOiBcIlwifVxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJkZXZpY2UtcGlja2VyXCI+XG4gICAgICAgICAgICA8cGFwZXItZHJvcGRvd24tbWVudVxuICAgICAgICAgICAgICAubGFiZWw9JHt0aGlzLmhhc3MhLmxvY2FsaXplKFxuICAgICAgICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLnp3YXZlLm5vZGVfY29uZmlnLmNvbmZpZ19wYXJhbWV0ZXJcIlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICBkeW5hbWljLWFsaWduXG4gICAgICAgICAgICAgIGNsYXNzPVwiZmxleFwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxwYXBlci1saXN0Ym94XG4gICAgICAgICAgICAgICAgc2xvdD1cImRyb3Bkb3duLWNvbnRlbnRcIlxuICAgICAgICAgICAgICAgIC5zZWxlY3RlZD0ke3RoaXMuX3NlbGVjdGVkQ29uZmlnUGFyYW1ldGVyfVxuICAgICAgICAgICAgICAgIEBpcm9uLXNlbGVjdD0ke3RoaXMuX3NlbGVjdGVkQ29uZmlnUGFyYW1ldGVyQ2hhbmdlZH1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICR7dGhpcy5jb25maWcubWFwKFxuICAgICAgICAgICAgICAgICAgKHN0YXRlKSA9PiBodG1sYFxuICAgICAgICAgICAgICAgICAgICA8cGFwZXItaXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAke3N0YXRlLmtleX06ICR7c3RhdGUudmFsdWUubGFiZWx9XG4gICAgICAgICAgICAgICAgICAgIDwvcGFwZXItaXRlbT5cbiAgICAgICAgICAgICAgICAgIGBcbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICA8L3BhcGVyLWxpc3Rib3g+XG4gICAgICAgICAgICA8L3BhcGVyLWRyb3Bkb3duLW1lbnU+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgJHt0aGlzLl9jb25maWdJdGVtXG4gICAgICAgICAgICA/IGh0bWxgXG4gICAgICAgICAgICAgICAgJHt0aGlzLl9jb25maWdJdGVtLnZhbHVlLnR5cGUgPT09IFwiTGlzdFwiXG4gICAgICAgICAgICAgICAgICA/IGh0bWxgXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRldmljZS1waWNrZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXBlci1kcm9wZG93bi1tZW51XG4gICAgICAgICAgICAgICAgICAgICAgICAgIC5sYWJlbD0ke3RoaXMuaGFzcyEubG9jYWxpemUoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcuendhdmUubm9kZV9jb25maWcuY29uZmlnX3ZhbHVlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgZHluYW1pYy1hbGlnblxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImZsZXhcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAucGxhY2Vob2xkZXI9JHt0aGlzLl9jb25maWdJdGVtLnZhbHVlLmRhdGF9XG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXBlci1saXN0Ym94XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xvdD1cImRyb3Bkb3duLWNvbnRlbnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5zZWxlY3RlZD0ke3RoaXMuX2NvbmZpZ0l0ZW0udmFsdWUuZGF0YX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBAaXJvbi1zZWxlY3Q9JHt0aGlzLl9jb25maWdWYWx1ZVNlbGVjdENoYW5nZWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAke3RoaXMuX2NvbmZpZ0l0ZW0udmFsdWUuZGF0YV9pdGVtcy5tYXAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoc3RhdGUpID0+IGh0bWxgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXBlci1pdGVtPiR7c3RhdGV9PC9wYXBlci1pdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvcGFwZXItbGlzdGJveD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcGFwZXItZHJvcGRvd24tbWVudT5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgYFxuICAgICAgICAgICAgICAgICAgOiBcIlwifVxuICAgICAgICAgICAgICAgICR7W1wiQnl0ZVwiLCBcIlNob3J0XCIsIFwiSW50XCJdLmluY2x1ZGVzKHRoaXMuX2NvbmZpZ0l0ZW0udmFsdWUudHlwZSlcbiAgICAgICAgICAgICAgICAgID8gaHRtbGBcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1hY3Rpb25zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cGFwZXItaW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLmxhYmVsPSR7dGhpcy5fY29uZmlnSXRlbS52YWx1ZS5kYXRhX2l0ZW1zfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLnZhbHVlPSR7dGhpcy5fY29uZmlnSXRlbS52YWx1ZS5kYXRhfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAubWF4PSR7dGhpcy5fY29uZmlnSXRlbS52YWx1ZS5tYXh9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIC5taW49JHt0aGlzLl9jb25maWdJdGVtLnZhbHVlLm1pbn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgQHZhbHVlLWNoYW5nZWQ9JHt0aGlzLl9jb25maWdWYWx1ZUlucHV0Q2hhbmdlZH1cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcGFwZXItaW5wdXQ+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIGBcbiAgICAgICAgICAgICAgICAgIDogXCJcIn1cbiAgICAgICAgICAgICAgICAke1tcIkJvb2xcIiwgXCJCdXR0b25cIl0uaW5jbHVkZXModGhpcy5fY29uZmlnSXRlbS52YWx1ZS50eXBlKVxuICAgICAgICAgICAgICAgICAgPyBodG1sYFxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkZXZpY2UtcGlja2VyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cGFwZXItZHJvcGRvd24tbWVudVxuICAgICAgICAgICAgICAgICAgICAgICAgICAubGFiZWw9JHt0aGlzLmhhc3MhLmxvY2FsaXplKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLnp3YXZlLm5vZGVfY29uZmlnLmNvbmZpZ192YWx1ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZmxleFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGR5bmFtaWMtYWxpZ25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgLnBsYWNlaG9sZGVyPSR7dGhpcy5fY29uZmlnSXRlbS52YWx1ZS5kYXRhfVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cGFwZXItbGlzdGJveFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNsb3Q9XCJkcm9wZG93bi1jb250ZW50XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuc2VsZWN0ZWQ9JHt0aGlzLl9jb25maWdJdGVtLnZhbHVlLmRhdGF9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQGlyb24tc2VsZWN0PSR7dGhpcy5fY29uZmlnVmFsdWVTZWxlY3RDaGFuZ2VkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhcGVyLWl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAke3RoaXMuaGFzcyEubG9jYWxpemUoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLnp3YXZlLm5vZGVfY29uZmlnLnRydWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3BhcGVyLWl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhcGVyLWl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAke3RoaXMuaGFzcyEubG9jYWxpemUoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLnp3YXZlLm5vZGVfY29uZmlnLmZhbHNlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wYXBlci1pdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L3BhcGVyLWxpc3Rib3g+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3BhcGVyLWRyb3Bkb3duLW1lbnU+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIGBcbiAgICAgICAgICAgICAgICAgIDogXCJcIn1cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaGVscC10ZXh0XCI+XG4gICAgICAgICAgICAgICAgICA8c3Bhbj4ke3RoaXMuX2NvbmZpZ0l0ZW0udmFsdWUuaGVscH08L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgJHtbXCJCb29sXCIsIFwiQnV0dG9uXCIsIFwiQnl0ZVwiLCBcIlNob3J0XCIsIFwiSW50XCIsIFwiTGlzdFwiXS5pbmNsdWRlcyhcbiAgICAgICAgICAgICAgICAgIHRoaXMuX2NvbmZpZ0l0ZW0udmFsdWUudHlwZVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgID8gaHRtbGBcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1hY3Rpb25zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aGEtY2FsbC1zZXJ2aWNlLWJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAuaGFzcz0ke3RoaXMuaGFzc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgZG9tYWluPVwiendhdmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBzZXJ2aWNlPVwic2V0X2NvbmZpZ19wYXJhbWV0ZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAuc2VydmljZURhdGE9JHt0aGlzLl9jb21wdXRlU2V0Q29uZmlnUGFyYW1ldGVyU2VydmljZURhdGEoKX1cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgJHt0aGlzLmhhc3MhLmxvY2FsaXplKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLnp3YXZlLm5vZGVfY29uZmlnLnNldF9jb25maWdfcGFyYW1ldGVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvaGEtY2FsbC1zZXJ2aWNlLWJ1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgYFxuICAgICAgICAgICAgICAgICAgOiBcIlwifVxuICAgICAgICAgICAgICBgXG4gICAgICAgICAgICA6IFwiXCJ9XG4gICAgICAgIDwvaGEtY2FyZD5cbiAgICAgIDwvZGl2PlxuICAgIGA7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHN0eWxlcygpOiBDU1NSZXN1bHRbXSB7XG4gICAgcmV0dXJuIFtcbiAgICAgIGhhU3R5bGUsXG4gICAgICBjc3NgXG4gICAgICAgIC5jb250ZW50IHtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAyNHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgaGEtY2FyZCB7XG4gICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgICAgbWF4LXdpZHRoOiA2MDBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5kZXZpY2UtcGlja2VyIHtcbiAgICAgICAgICBAYXBwbHkgLS1sYXlvdXQtaG9yaXpvbnRhbDtcbiAgICAgICAgICBAYXBwbHkgLS1sYXlvdXQtY2VudGVyLWNlbnRlcjtcbiAgICAgICAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgICAgICAgICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAtbXMtZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICAtd2Via2l0LWZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIC13ZWJraXQtYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIHBhZGRpbmctbGVmdDogMjRweDtcbiAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAyNHB4O1xuICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAyNHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmhlbHAtdGV4dCB7XG4gICAgICAgICAgcGFkZGluZy1sZWZ0OiAyNHB4O1xuICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDI0cHg7XG4gICAgICAgIH1cblxuICAgICAgICAuZmxleCB7XG4gICAgICAgICAgLW1zLWZsZXg6IDEgMSAwLjAwMDAwMDAwMXB4O1xuICAgICAgICAgIC13ZWJraXQtZmxleDogMTtcbiAgICAgICAgICBmbGV4OiAxO1xuICAgICAgICAgIC13ZWJraXQtZmxleC1iYXNpczogMC4wMDAwMDAwMDFweDtcbiAgICAgICAgICBmbGV4LWJhc2lzOiAwLjAwMDAwMDAwMXB4O1xuICAgICAgICB9XG4gICAgICBgLFxuICAgIF07XG4gIH1cblxuICBwcm90ZWN0ZWQgZmlyc3RVcGRhdGVkKGNoYW5nZWRQcm9wczogUHJvcGVydHlWYWx1ZXMpOiB2b2lkIHtcbiAgICBzdXBlci5maXJzdFVwZGF0ZWQoY2hhbmdlZFByb3BzKTtcbiAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoXCJoYXNzLXNlcnZpY2UtY2FsbGVkXCIsIChldikgPT5cbiAgICAgIHRoaXMuc2VydmljZUNhbGxlZChldilcbiAgICApO1xuICB9XG5cbiAgcHJvdGVjdGVkIHVwZGF0ZWQoY2hhbmdlZFByb3BzOiBQcm9wZXJ0eVZhbHVlcyk6IHZvaWQge1xuICAgIHN1cGVyLnVwZGF0ZWQoY2hhbmdlZFByb3BzKTtcbiAgICBpZiAoY2hhbmdlZFByb3BzLmhhcyhcInNlbGVjdGVkTm9kZVwiKSkge1xuICAgICAgdGhpcy5fbm9kZXNDaGFuZ2VkKCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBzZXJ2aWNlQ2FsbGVkKGV2KTogdm9pZCB7XG4gICAgaWYgKGV2LmRldGFpbC5zdWNjZXNzKSB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5fcmVmcmVzaENvbmZpZyh0aGlzLnNlbGVjdGVkTm9kZSk7XG4gICAgICB9LCA1MDAwKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9ub2Rlc0NoYW5nZWQoKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLm5vZGVzKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuX2NvbmZpZ0l0ZW0gPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5fd2FrZXVwSW5wdXQgPSB0aGlzLm5vZGVzW3RoaXMuc2VsZWN0ZWROb2RlXS5hdHRyaWJ1dGVzLmhhc093blByb3BlcnR5KFxuICAgICAgXCJ3YWtlX3VwX2ludGVydmFsXCJcbiAgICApXG4gICAgICA/IHRoaXMubm9kZXNbdGhpcy5zZWxlY3RlZE5vZGVdLmF0dHJpYnV0ZXMud2FrZV91cF9pbnRlcnZhbCFcbiAgICAgIDogLTE7XG4gIH1cblxuICBwcml2YXRlIF9vbldha2V1cEludGVydmFsQ2hhbmdlZCh2YWx1ZTogQ2hhbmdlRXZlbnQpOiB2b2lkIHtcbiAgICB0aGlzLl93YWtldXBJbnB1dCA9IHZhbHVlLmRldGFpbCEudmFsdWU7XG4gIH1cblxuICBwcml2YXRlIF9jb21wdXRlV2FrZXVwU2VydmljZURhdGEod2FrZXVwSW5wdXQ6IG51bWJlcikge1xuICAgIHJldHVybiB7XG4gICAgICBub2RlX2lkOiB0aGlzLm5vZGVzW3RoaXMuc2VsZWN0ZWROb2RlXS5hdHRyaWJ1dGVzLm5vZGVfaWQsXG4gICAgICB2YWx1ZTogd2FrZXVwSW5wdXQsXG4gICAgfTtcbiAgfVxuXG4gIHByaXZhdGUgX2NvbXB1dGVTZXRDb25maWdQYXJhbWV0ZXJTZXJ2aWNlRGF0YSgpOlxuICAgIHwgWldhdmVDb25maWdTZXJ2aWNlRGF0YVxuICAgIHwgYm9vbGVhbiB7XG4gICAgaWYgKHRoaXMuc2VsZWN0ZWROb2RlID09PSAtMSB8fCB0eXBlb2YgdGhpcy5fY29uZmlnSXRlbSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBsZXQgdmFsdWVEYXRhOiBudW1iZXIgfCBzdHJpbmcgPSBcIlwiO1xuICAgIGlmIChbXCJTaG9ydFwiLCBcIkJ5dGVcIiwgXCJJbnRcIl0uaW5jbHVkZXModGhpcy5fY29uZmlnSXRlbSEudmFsdWUudHlwZSkpIHtcbiAgICAgIHZhbHVlRGF0YSA9XG4gICAgICAgIHR5cGVvZiB0aGlzLl9zZWxlY3RlZENvbmZpZ1ZhbHVlID09PSBcInN0cmluZ1wiXG4gICAgICAgICAgPyBwYXJzZUludCh0aGlzLl9zZWxlY3RlZENvbmZpZ1ZhbHVlLCAxMClcbiAgICAgICAgICA6IHRoaXMuX3NlbGVjdGVkQ29uZmlnVmFsdWU7XG4gICAgfVxuICAgIGlmIChbXCJCb29sXCIsIFwiQnV0dG9uXCIsIFwiTGlzdFwiXS5pbmNsdWRlcyh0aGlzLl9jb25maWdJdGVtIS52YWx1ZS50eXBlKSkge1xuICAgICAgdmFsdWVEYXRhID0gdGhpcy5fc2VsZWN0ZWRDb25maWdWYWx1ZTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgIG5vZGVfaWQ6IHRoaXMubm9kZXNbdGhpcy5zZWxlY3RlZE5vZGVdLmF0dHJpYnV0ZXMubm9kZV9pZCxcbiAgICAgIHBhcmFtZXRlcjogdGhpcy5fY29uZmlnSXRlbS5rZXksXG4gICAgICB2YWx1ZTogdmFsdWVEYXRhLFxuICAgIH07XG4gIH1cblxuICBwcml2YXRlIF9zZWxlY3RlZENvbmZpZ1BhcmFtZXRlckNoYW5nZWQoZXZlbnQ6IEl0ZW1TZWxlY3RlZEV2ZW50KTogdm9pZCB7XG4gICAgaWYgKGV2ZW50LnRhcmdldCEuc2VsZWN0ZWQgPT09IC0xKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuX3NlbGVjdGVkQ29uZmlnUGFyYW1ldGVyID0gZXZlbnQudGFyZ2V0IS5zZWxlY3RlZDtcbiAgICB0aGlzLl9jb25maWdJdGVtID0gdGhpcy5jb25maWdbZXZlbnQudGFyZ2V0IS5zZWxlY3RlZF07XG4gIH1cblxuICBwcml2YXRlIF9jb25maWdWYWx1ZVNlbGVjdENoYW5nZWQoZXZlbnQ6IEl0ZW1TZWxlY3RlZEV2ZW50KTogdm9pZCB7XG4gICAgaWYgKGV2ZW50LnRhcmdldCEuc2VsZWN0ZWQgPT09IC0xKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuX3NlbGVjdGVkQ29uZmlnVmFsdWUgPSBldmVudC50YXJnZXQhLnNlbGVjdGVkSXRlbS50ZXh0Q29udGVudDtcbiAgfVxuXG4gIHByaXZhdGUgX2NvbmZpZ1ZhbHVlSW5wdXRDaGFuZ2VkKHZhbHVlOiBDaGFuZ2VFdmVudCk6IHZvaWQge1xuICAgIHRoaXMuX3NlbGVjdGVkQ29uZmlnVmFsdWUgPSB2YWx1ZS5kZXRhaWwhLnZhbHVlO1xuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBfcmVmcmVzaENvbmZpZyhzZWxlY3RlZE5vZGUpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBjb25zdCBjb25maWdEYXRhOiBaV2F2ZUNvbmZpZ0l0ZW1bXSA9IFtdO1xuICAgIGNvbnN0IGNvbmZpZyA9IGF3YWl0IGZldGNoTm9kZUNvbmZpZyhcbiAgICAgIHRoaXMuaGFzcyxcbiAgICAgIHRoaXMubm9kZXNbc2VsZWN0ZWROb2RlXS5hdHRyaWJ1dGVzLm5vZGVfaWRcbiAgICApO1xuXG4gICAgT2JqZWN0LmtleXMoY29uZmlnKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgIGNvbmZpZ0RhdGEucHVzaCh7XG4gICAgICAgIGtleTogcGFyc2VJbnQoa2V5LCAxMCksXG4gICAgICAgIHZhbHVlOiBjb25maWdba2V5XSxcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgdGhpcy5jb25maWcgPSBjb25maWdEYXRhO1xuICAgIHRoaXMuX2NvbmZpZ0l0ZW0gPSB0aGlzLmNvbmZpZ1t0aGlzLl9zZWxlY3RlZENvbmZpZ1BhcmFtZXRlcl07XG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBDaGFuZ2VFdmVudCB7XG4gIGRldGFpbD86IHtcbiAgICB2YWx1ZT86IGFueTtcbiAgfTtcbiAgdGFyZ2V0PzogRXZlbnRUYXJnZXQ7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUGlja2VyVGFyZ2V0IGV4dGVuZHMgRXZlbnRUYXJnZXQge1xuICBzZWxlY3RlZDogbnVtYmVyO1xuICBzZWxlY3RlZEl0ZW0/OiBhbnk7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSXRlbVNlbGVjdGVkRXZlbnQge1xuICB0YXJnZXQ/OiBQaWNrZXJUYXJnZXQ7XG59XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIEhUTUxFbGVtZW50VGFnTmFtZU1hcCB7XG4gICAgXCJ6d2F2ZS1ub2RlLWNvbmZpZ1wiOiBad2F2ZU5vZGVDb25maWc7XG4gIH1cbn1cbiIsImltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWRyb3Bkb3duLW1lbnUvcGFwZXItZHJvcGRvd24tbWVudVwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItaW5wdXQvcGFwZXItaW5wdXRcIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWl0ZW0vcGFwZXItaXRlbVwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItbGlzdGJveC9wYXBlci1saXN0Ym94XCI7XG5pbXBvcnQgeyBodG1sIH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2h0bWwtdGFnXCI7XG5pbXBvcnQgeyBQb2x5bWVyRWxlbWVudCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL3BvbHltZXItZWxlbWVudFwiO1xuXG5pbXBvcnQgXCIuLi8uLi8uLi9jb21wb25lbnRzL2J1dHRvbnMvaGEtY2FsbC1hcGktYnV0dG9uXCI7XG5pbXBvcnQgXCIuLi8uLi8uLi9jb21wb25lbnRzL2hhLWNhcmRcIjtcblxuY2xhc3MgWndhdmVOb2RlUHJvdGVjdGlvbiBleHRlbmRzIFBvbHltZXJFbGVtZW50IHtcbiAgc3RhdGljIGdldCB0ZW1wbGF0ZSgpIHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICA8c3R5bGUgaW5jbHVkZT1cImlyb24tZmxleCBoYS1zdHlsZVwiPlxuICAgICAgLmNhcmQtYWN0aW9ucy53YXJuaW5nIGhhLWNhbGwtYXBpLWJ1dHRvbiB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1nb29nbGUtcmVkLTUwMCk7XG4gICAgICB9XG4gICAgICAuY29udGVudCB7XG4gICAgICAgIG1hcmdpbi10b3A6IDI0cHg7XG4gICAgICB9XG5cbiAgICAgIGhhLWNhcmQge1xuICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgbWF4LXdpZHRoOiA2MDBweDtcbiAgICAgIH1cblxuICAgICAgLmRldmljZS1waWNrZXIge1xuICAgICAgICBAYXBwbHkgLS1sYXlvdXQtaG9yaXpvbnRhbDtcbiAgICAgICAgQGFwcGx5IC0tbGF5b3V0LWNlbnRlci1jZW50ZXI7XG4gICAgICAgIHBhZGRpbmc6IDAgMjRweCAyNHB4IDI0cHg7XG4gICAgICAgIH1cblxuICAgIDwvc3R5bGU+XG4gICAgICA8ZGl2IGNsYXNzPVwiY29udGVudFwiPlxuICAgICAgICA8aGEtY2FyZCBoZWFkZXI9XCJOb2RlIHByb3RlY3Rpb25cIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGV2aWNlLXBpY2tlclwiPlxuICAgICAgICAgIDxwYXBlci1kcm9wZG93bi1tZW51IGxhYmVsPVwiUHJvdGVjdGlvblwiIGR5bmFtaWMtYWxpZ24gY2xhc3M9XCJmbGV4XCIgcGxhY2Vob2xkZXI9XCJ7e19sb2FkZWRQcm90ZWN0aW9uVmFsdWV9fVwiPlxuICAgICAgICAgICAgPHBhcGVyLWxpc3Rib3ggc2xvdD1cImRyb3Bkb3duLWNvbnRlbnRcIiBzZWxlY3RlZD1cInt7X3NlbGVjdGVkUHJvdGVjdGlvblBhcmFtZXRlcn19XCI+XG4gICAgICAgICAgICAgIDx0ZW1wbGF0ZSBpcz1cImRvbS1yZXBlYXRcIiBpdGVtcz1cIltbX3Byb3RlY3Rpb25PcHRpb25zXV1cIiBhcz1cInN0YXRlXCI+XG4gICAgICAgICAgICAgICAgPHBhcGVyLWl0ZW0+W1tzdGF0ZV1dPC9wYXBlci1pdGVtPlxuICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgICAgPC9wYXBlci1saXN0Ym94PlxuICAgICAgICAgIDwvcGFwZXItZHJvcGRvd24tbWVudT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1hY3Rpb25zXCI+XG4gICAgICAgICAgICA8aGEtY2FsbC1hcGktYnV0dG9uXG4gICAgICAgICAgICAgIGhhc3M9XCJbW2hhc3NdXVwiXG4gICAgICAgICAgICAgIHBhdGg9XCJbW19ub2RlUGF0aF1dXCJcbiAgICAgICAgICAgICAgZGF0YT1cIltbX3Byb3RlY3Rpb25EYXRhXV1cIj5cbiAgICAgICAgICAgICAgU2V0IFByb3RlY3Rpb25cbiAgICAgICAgICAgIDwvaGEtY2FsbC1zZXJ2aWNlLWJ1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9oYS1jYXJkPlxuICAgICAgPC9kaXY+XG5gO1xuICB9XG5cbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBoYXNzOiBPYmplY3QsXG5cbiAgICAgIG5vZGVzOiBBcnJheSxcblxuICAgICAgc2VsZWN0ZWROb2RlOiB7XG4gICAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgICAgdmFsdWU6IC0xLFxuICAgICAgfSxcblxuICAgICAgcHJvdGVjdGlvbk5vZGU6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgdmFsdWU6IGZhbHNlLFxuICAgICAgfSxcblxuICAgICAgX3Byb3RlY3Rpb25WYWx1ZUlEOiB7XG4gICAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgICAgdmFsdWU6IC0xLFxuICAgICAgfSxcblxuICAgICAgX3NlbGVjdGVkUHJvdGVjdGlvblBhcmFtZXRlcjoge1xuICAgICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICAgIHZhbHVlOiAtMSxcbiAgICAgICAgb2JzZXJ2ZXI6IFwiX2NvbXB1dGVQcm90ZWN0aW9uRGF0YVwiLFxuICAgICAgfSxcblxuICAgICAgX3Byb3RlY3Rpb25PcHRpb25zOiBBcnJheSxcblxuICAgICAgX3Byb3RlY3Rpb246IHtcbiAgICAgICAgdHlwZTogQXJyYXksXG4gICAgICAgIHZhbHVlOiAoKSA9PiBbXSxcbiAgICAgIH0sXG5cbiAgICAgIF9sb2FkZWRQcm90ZWN0aW9uVmFsdWU6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICB2YWx1ZTogXCJcIixcbiAgICAgIH0sXG5cbiAgICAgIF9wcm90ZWN0aW9uRGF0YToge1xuICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICAgIHZhbHVlOiB7fSxcbiAgICAgIH0sXG5cbiAgICAgIF9ub2RlUGF0aDogU3RyaW5nLFxuICAgIH07XG4gIH1cblxuICBzdGF0aWMgZ2V0IG9ic2VydmVycygpIHtcbiAgICByZXR1cm4gW1wiX25vZGVzQ2hhbmdlZChub2Rlcywgc2VsZWN0ZWROb2RlKVwiXTtcbiAgfVxuXG4gIHJlYWR5KCkge1xuICAgIHN1cGVyLnJlYWR5KCk7XG4gICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKFwiaGFzcy1hcGktY2FsbGVkXCIsIChldikgPT4gdGhpcy5hcGlDYWxsZWQoZXYpKTtcbiAgfVxuXG4gIGFwaUNhbGxlZChldikge1xuICAgIGlmIChldi5kZXRhaWwuc3VjY2Vzcykge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMuX3JlZnJlc2hQcm90ZWN0aW9uKHRoaXMuc2VsZWN0ZWROb2RlKTtcbiAgICAgIH0sIDUwMDApO1xuICAgIH1cbiAgfVxuXG4gIF9ub2Rlc0NoYW5nZWQoKSB7XG4gICAgaWYgKCF0aGlzLm5vZGVzKSByZXR1cm47XG4gICAgaWYgKHRoaXMucHJvdGVjdGlvbikge1xuICAgICAgaWYgKHRoaXMucHJvdGVjdGlvbi5sZW5ndGggPT09IDApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdGhpcy5zZXRQcm9wZXJ0aWVzKHtcbiAgICAgICAgcHJvdGVjdGlvbk5vZGU6IHRydWUsXG4gICAgICAgIF9wcm90ZWN0aW9uT3B0aW9uczogdGhpcy5wcm90ZWN0aW9uWzBdLnZhbHVlLFxuICAgICAgICBfbG9hZGVkUHJvdGVjdGlvblZhbHVlOiB0aGlzLnByb3RlY3Rpb25bMV0udmFsdWUsXG4gICAgICAgIF9wcm90ZWN0aW9uVmFsdWVJRDogdGhpcy5wcm90ZWN0aW9uWzJdLnZhbHVlLFxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgYXN5bmMgX3JlZnJlc2hQcm90ZWN0aW9uKHNlbGVjdGVkTm9kZSkge1xuICAgIGNvbnN0IHByb3RlY3Rpb25WYWx1ZXMgPSBbXTtcbiAgICBjb25zdCBwcm90ZWN0aW9ucyA9IGF3YWl0IHRoaXMuaGFzcy5jYWxsQXBpKFxuICAgICAgXCJHRVRcIixcbiAgICAgIGB6d2F2ZS9wcm90ZWN0aW9uLyR7dGhpcy5ub2Rlc1tzZWxlY3RlZE5vZGVdLmF0dHJpYnV0ZXMubm9kZV9pZH1gXG4gICAgKTtcbiAgICBPYmplY3Qua2V5cyhwcm90ZWN0aW9ucykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICBwcm90ZWN0aW9uVmFsdWVzLnB1c2goe1xuICAgICAgICBrZXksXG4gICAgICAgIHZhbHVlOiBwcm90ZWN0aW9uc1trZXldLFxuICAgICAgfSk7XG4gICAgfSk7XG4gICAgdGhpcy5zZXRQcm9wZXJ0aWVzKHtcbiAgICAgIF9wcm90ZWN0aW9uOiBwcm90ZWN0aW9uVmFsdWVzLFxuICAgICAgX3NlbGVjdGVkUHJvdGVjdGlvblBhcmFtZXRlcjogLTEsXG4gICAgICBfbG9hZGVkUHJvdGVjdGlvblZhbHVlOiB0aGlzLnByb3RlY3Rpb25bMV0udmFsdWUsXG4gICAgfSk7XG4gIH1cblxuICBfY29tcHV0ZVByb3RlY3Rpb25EYXRhKHNlbGVjdGVkUHJvdGVjdGlvblBhcmFtZXRlcikge1xuICAgIGlmICh0aGlzLnNlbGVjdGVkTm9kZSA9PT0gLTEgfHwgc2VsZWN0ZWRQcm90ZWN0aW9uUGFyYW1ldGVyID09PSAtMSkgcmV0dXJuO1xuICAgIHRoaXMuX3Byb3RlY3Rpb25EYXRhID0ge1xuICAgICAgc2VsZWN0aW9uOiB0aGlzLl9wcm90ZWN0aW9uT3B0aW9uc1tzZWxlY3RlZFByb3RlY3Rpb25QYXJhbWV0ZXJdLFxuICAgICAgdmFsdWVfaWQ6IHRoaXMuX3Byb3RlY3Rpb25WYWx1ZUlELFxuICAgIH07XG4gICAgdGhpcy5fbm9kZVBhdGggPSBgendhdmUvcHJvdGVjdGlvbi8ke1xuICAgICAgdGhpcy5ub2Rlc1t0aGlzLnNlbGVjdGVkTm9kZV0uYXR0cmlidXRlcy5ub2RlX2lkXG4gICAgfWA7XG4gIH1cbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwiendhdmUtbm9kZS1wcm90ZWN0aW9uXCIsIFp3YXZlTm9kZVByb3RlY3Rpb24pO1xuIiwiaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItZHJvcGRvd24tbWVudS9wYXBlci1kcm9wZG93bi1tZW51XCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1pbnB1dC9wYXBlci1pbnB1dFwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItaXRlbS9wYXBlci1pdGVtXCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1saXN0Ym94L3BhcGVyLWxpc3Rib3hcIjtcbmltcG9ydCB7IGh0bWwgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvaHRtbC10YWdcIjtcbmltcG9ydCB7IFBvbHltZXJFbGVtZW50IH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvcG9seW1lci1lbGVtZW50XCI7XG5cbmltcG9ydCBcIi4uLy4uLy4uL2NvbXBvbmVudHMvYnV0dG9ucy9oYS1jYWxsLXNlcnZpY2UtYnV0dG9uXCI7XG5pbXBvcnQgXCIuLi8uLi8uLi9jb21wb25lbnRzL2hhLWNhcmRcIjtcblxuY2xhc3MgWndhdmVVc2VyY29kZXMgZXh0ZW5kcyBQb2x5bWVyRWxlbWVudCB7XG4gIHN0YXRpYyBnZXQgdGVtcGxhdGUoKSB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8c3R5bGUgaW5jbHVkZT1cImlyb24tZmxleCBoYS1zdHlsZVwiPlxuICAgICAgICAuY29udGVudCB7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMjRweDtcbiAgICAgICAgfVxuXG4gICAgICAgIGhhLWNhcmQge1xuICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICAgIG1heC13aWR0aDogNjAwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAuZGV2aWNlLXBpY2tlciB7XG4gICAgICAgICAgQGFwcGx5IC0tbGF5b3V0LWhvcml6b250YWw7XG4gICAgICAgICAgQGFwcGx5IC0tbGF5b3V0LWNlbnRlci1jZW50ZXI7XG4gICAgICAgICAgcGFkZGluZy1sZWZ0OiAyNHB4O1xuICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDI0cHg7XG4gICAgICAgICAgcGFkZGluZy1ib3R0b206IDI0cHg7XG4gICAgICAgIH1cbiAgICAgIDwvc3R5bGU+XG4gICAgICA8ZGl2IGNsYXNzPVwiY29udGVudFwiPlxuICAgICAgICA8aGEtY2FyZCBoZWFkZXI9XCJOb2RlIHVzZXIgY29kZXNcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGV2aWNlLXBpY2tlclwiPlxuICAgICAgICAgICAgPHBhcGVyLWRyb3Bkb3duLW1lbnVcbiAgICAgICAgICAgICAgbGFiZWw9XCJDb2RlIHNsb3RcIlxuICAgICAgICAgICAgICBkeW5hbWljLWFsaWduPVwiXCJcbiAgICAgICAgICAgICAgY2xhc3M9XCJmbGV4XCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPHBhcGVyLWxpc3Rib3hcbiAgICAgICAgICAgICAgICBzbG90PVwiZHJvcGRvd24tY29udGVudFwiXG4gICAgICAgICAgICAgICAgc2VsZWN0ZWQ9XCJ7e19zZWxlY3RlZFVzZXJDb2RlfX1cIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPHRlbXBsYXRlIGlzPVwiZG9tLXJlcGVhdFwiIGl0ZW1zPVwiW1t1c2VyQ29kZXNdXVwiIGFzPVwic3RhdGVcIj5cbiAgICAgICAgICAgICAgICAgIDxwYXBlci1pdGVtXG4gICAgICAgICAgICAgICAgICAgID5bW19jb21wdXRlU2VsZWN0Q2FwdGlvblVzZXJDb2RlcyhzdGF0ZSldXTwvcGFwZXItaXRlbVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgICAgIDwvcGFwZXItbGlzdGJveD5cbiAgICAgICAgICAgIDwvcGFwZXItZHJvcGRvd24tbWVudT5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDx0ZW1wbGF0ZSBpcz1cImRvbS1pZlwiIGlmPVwiW1tfaXNVc2VyQ29kZVNlbGVjdGVkKF9zZWxlY3RlZFVzZXJDb2RlKV1dXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1hY3Rpb25zXCI+XG4gICAgICAgICAgICAgIDxwYXBlci1pbnB1dFxuICAgICAgICAgICAgICAgIGxhYmVsPVwiVXNlciBjb2RlXCJcbiAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgYWxsb3dlZC1wYXR0ZXJuPVwiWzAtOSxhLWYseCxcXFxcXFxcXF1cIlxuICAgICAgICAgICAgICAgIG1heGxlbmd0aD1cIjQwXCJcbiAgICAgICAgICAgICAgICBtaW5sZW5ndGg9XCIxNlwiXG4gICAgICAgICAgICAgICAgdmFsdWU9XCJ7e19zZWxlY3RlZFVzZXJDb2RlVmFsdWV9fVwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPC9wYXBlci1pbnB1dD5cbiAgICAgICAgICAgICAgPHByZT5Bc2NpaTogW1tfY29tcHV0ZWRDb2RlT3V0cHV0XV08L3ByZT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtYWN0aW9uc1wiPlxuICAgICAgICAgICAgICA8aGEtY2FsbC1zZXJ2aWNlLWJ1dHRvblxuICAgICAgICAgICAgICAgIGhhc3M9XCJbW2hhc3NdXVwiXG4gICAgICAgICAgICAgICAgZG9tYWluPVwibG9ja1wiXG4gICAgICAgICAgICAgICAgc2VydmljZT1cInNldF91c2VyY29kZVwiXG4gICAgICAgICAgICAgICAgc2VydmljZS1kYXRhPSdbW19jb21wdXRlVXNlckNvZGVTZXJ2aWNlRGF0YShfc2VsZWN0ZWRVc2VyQ29kZVZhbHVlLCBcIkFkZFwiKV1dJ1xuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgU2V0IFVzZXJjb2RlXG4gICAgICAgICAgICAgIDwvaGEtY2FsbC1zZXJ2aWNlLWJ1dHRvbj5cbiAgICAgICAgICAgICAgPGhhLWNhbGwtc2VydmljZS1idXR0b25cbiAgICAgICAgICAgICAgICBoYXNzPVwiW1toYXNzXV1cIlxuICAgICAgICAgICAgICAgIGRvbWFpbj1cImxvY2tcIlxuICAgICAgICAgICAgICAgIHNlcnZpY2U9XCJjbGVhcl91c2VyY29kZVwiXG4gICAgICAgICAgICAgICAgc2VydmljZS1kYXRhPSdbW19jb21wdXRlVXNlckNvZGVTZXJ2aWNlRGF0YShfc2VsZWN0ZWRVc2VyQ29kZSwgXCJEZWxldGVcIildXSdcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIERlbGV0ZSBVc2VyY29kZVxuICAgICAgICAgICAgICA8L2hhLWNhbGwtc2VydmljZS1idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICA8L2hhLWNhcmQ+XG4gICAgICA8L2Rpdj5cbiAgICBgO1xuICB9XG5cbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBoYXNzOiBPYmplY3QsXG5cbiAgICAgIG5vZGVzOiBBcnJheSxcblxuICAgICAgc2VsZWN0ZWROb2RlOiB7XG4gICAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgICAgb2JzZXJ2ZXI6IFwiX3NlbGVjdGVkTm9kZUNoYW5nZWRcIixcbiAgICAgIH0sXG5cbiAgICAgIHVzZXJDb2RlczogT2JqZWN0LFxuXG4gICAgICBfc2VsZWN0ZWRVc2VyQ29kZToge1xuICAgICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICAgIHZhbHVlOiAtMSxcbiAgICAgICAgb2JzZXJ2ZXI6IFwiX3NlbGVjdGVkVXNlckNvZGVDaGFuZ2VkXCIsXG4gICAgICB9LFxuXG4gICAgICBfc2VsZWN0ZWRVc2VyQ29kZVZhbHVlOiBTdHJpbmcsXG5cbiAgICAgIF9jb21wdXRlZENvZGVPdXRwdXQ6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICB2YWx1ZTogXCJcIixcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxuXG4gIHJlYWR5KCkge1xuICAgIHN1cGVyLnJlYWR5KCk7XG4gICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKFwiaGFzcy1zZXJ2aWNlLWNhbGxlZFwiLCAoZXYpID0+XG4gICAgICB0aGlzLnNlcnZpY2VDYWxsZWQoZXYpXG4gICAgKTtcbiAgfVxuXG4gIHNlcnZpY2VDYWxsZWQoZXYpIHtcbiAgICBpZiAoZXYuZGV0YWlsLnN1Y2Nlc3MpIHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLl9yZWZyZXNoVXNlckNvZGVzKHRoaXMuc2VsZWN0ZWROb2RlKTtcbiAgICAgIH0sIDUwMDApO1xuICAgIH1cbiAgfVxuXG4gIF9pc1VzZXJDb2RlU2VsZWN0ZWQoc2VsZWN0ZWRVc2VyQ29kZSkge1xuICAgIGlmIChzZWxlY3RlZFVzZXJDb2RlID09PSAtMSkgcmV0dXJuIGZhbHNlO1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgX2NvbXB1dGVTZWxlY3RDYXB0aW9uVXNlckNvZGVzKHN0YXRlT2JqKSB7XG4gICAgcmV0dXJuIGAke3N0YXRlT2JqLmtleX06ICR7c3RhdGVPYmoudmFsdWUubGFiZWx9YDtcbiAgfVxuXG4gIF9zZWxlY3RlZFVzZXJDb2RlQ2hhbmdlZChzZWxlY3RlZFVzZXJDb2RlKSB7XG4gICAgaWYgKHRoaXMuX3NlbGVjdGVkVXNlckNvZGUgPT09IC0xIHx8IHNlbGVjdGVkVXNlckNvZGUgPT09IC0xKSByZXR1cm47XG4gICAgY29uc3QgdmFsdWUgPSB0aGlzLnVzZXJDb2Rlc1tzZWxlY3RlZFVzZXJDb2RlXS52YWx1ZS5jb2RlO1xuICAgIHRoaXMuc2V0UHJvcGVydGllcyh7XG4gICAgICBfc2VsZWN0ZWRVc2VyQ29kZVZhbHVlOiB0aGlzLl9hMmhleCh2YWx1ZSksXG4gICAgICBfY29tcHV0ZWRDb2RlT3V0cHV0OiBgWyR7dGhpcy5faGV4MmEodGhpcy5fYTJoZXgodmFsdWUpKX1dYCxcbiAgICB9KTtcbiAgfVxuXG4gIF9jb21wdXRlVXNlckNvZGVTZXJ2aWNlRGF0YShzZWxlY3RlZFVzZXJDb2RlVmFsdWUsIHR5cGUpIHtcbiAgICBpZiAodGhpcy5zZWxlY3RlZE5vZGUgPT09IC0xIHx8ICFzZWxlY3RlZFVzZXJDb2RlVmFsdWUpIHJldHVybiAtMTtcbiAgICBsZXQgc2VydmljZURhdGEgPSBudWxsO1xuICAgIGxldCB2YWx1ZURhdGEgPSBudWxsO1xuICAgIGlmICh0eXBlID09PSBcIkFkZFwiKSB7XG4gICAgICB2YWx1ZURhdGEgPSB0aGlzLl9oZXgyYShzZWxlY3RlZFVzZXJDb2RlVmFsdWUpO1xuICAgICAgdGhpcy5fY29tcHV0ZWRDb2RlT3V0cHV0ID0gYFske3ZhbHVlRGF0YX1dYDtcbiAgICAgIHNlcnZpY2VEYXRhID0ge1xuICAgICAgICBub2RlX2lkOiB0aGlzLm5vZGVzW3RoaXMuc2VsZWN0ZWROb2RlXS5hdHRyaWJ1dGVzLm5vZGVfaWQsXG4gICAgICAgIGNvZGVfc2xvdDogdGhpcy5fc2VsZWN0ZWRVc2VyQ29kZSxcbiAgICAgICAgdXNlcmNvZGU6IHZhbHVlRGF0YSxcbiAgICAgIH07XG4gICAgfVxuICAgIGlmICh0eXBlID09PSBcIkRlbGV0ZVwiKSB7XG4gICAgICBzZXJ2aWNlRGF0YSA9IHtcbiAgICAgICAgbm9kZV9pZDogdGhpcy5ub2Rlc1t0aGlzLnNlbGVjdGVkTm9kZV0uYXR0cmlidXRlcy5ub2RlX2lkLFxuICAgICAgICBjb2RlX3Nsb3Q6IHRoaXMuX3NlbGVjdGVkVXNlckNvZGUsXG4gICAgICB9O1xuICAgIH1cbiAgICByZXR1cm4gc2VydmljZURhdGE7XG4gIH1cblxuICBhc3luYyBfcmVmcmVzaFVzZXJDb2RlcyhzZWxlY3RlZE5vZGUpIHtcbiAgICB0aGlzLnNldFByb3BlcnRpZXMoeyBfc2VsZWN0ZWRVc2VyQ29kZVZhbHVlOiBcIlwiIH0pO1xuICAgIGNvbnN0IHVzZXJDb2RlcyA9IFtdO1xuICAgIGNvbnN0IHVzZXJDb2RlRGF0YSA9IGF3YWl0IHRoaXMuaGFzcy5jYWxsQXBpKFxuICAgICAgXCJHRVRcIixcbiAgICAgIGB6d2F2ZS91c2VyY29kZXMvJHt0aGlzLm5vZGVzW3NlbGVjdGVkTm9kZV0uYXR0cmlidXRlcy5ub2RlX2lkfWBcbiAgICApO1xuICAgIE9iamVjdC5rZXlzKHVzZXJDb2RlRGF0YSkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICB1c2VyQ29kZXMucHVzaCh7XG4gICAgICAgIGtleSxcbiAgICAgICAgdmFsdWU6IHVzZXJDb2RlRGF0YVtrZXldLFxuICAgICAgfSk7XG4gICAgfSk7XG4gICAgdGhpcy5zZXRQcm9wZXJ0aWVzKHsgdXNlckNvZGVzOiB1c2VyQ29kZXMgfSk7XG4gICAgdGhpcy5fc2VsZWN0ZWRVc2VyQ29kZUNoYW5nZWQodGhpcy5fc2VsZWN0ZWRVc2VyQ29kZSk7XG4gIH1cblxuICBfYTJoZXgoc3RyKSB7XG4gICAgY29uc3QgYXJyID0gW107XG4gICAgbGV0IG91dHB1dCA9IFwiXCI7XG4gICAgZm9yIChsZXQgaSA9IDAsIGwgPSBzdHIubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBjb25zdCBoZXggPSBOdW1iZXIoc3RyLmNoYXJDb2RlQXQoaSkpLnRvU3RyaW5nKDE2KTtcbiAgICAgIGlmIChoZXggPT09IFwiMFwiKSB7XG4gICAgICAgIG91dHB1dCA9IFwiMDBcIjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG91dHB1dCA9IGhleDtcbiAgICAgIH1cbiAgICAgIGFyci5wdXNoKFwiXFxcXHhcIiArIG91dHB1dCk7XG4gICAgfVxuICAgIHJldHVybiBhcnIuam9pbihcIlwiKTtcbiAgfVxuXG4gIF9oZXgyYShoZXh4KSB7XG4gICAgY29uc3QgaGV4ID0gaGV4eC50b1N0cmluZygpO1xuICAgIGNvbnN0IGhleE1vZCA9IGhleC5yZXBsYWNlKC9cXFxceC9nLCBcIlwiKTtcbiAgICBsZXQgc3RyID0gXCJcIjtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGhleE1vZC5sZW5ndGg7IGkgKz0gMikge1xuICAgICAgc3RyICs9IFN0cmluZy5mcm9tQ2hhckNvZGUocGFyc2VJbnQoaGV4TW9kLnN1YnN0cihpLCAyKSwgMTYpKTtcbiAgICB9XG4gICAgcmV0dXJuIHN0cjtcbiAgfVxuXG4gIF9zZWxlY3RlZE5vZGVDaGFuZ2VkKCkge1xuICAgIGlmICh0aGlzLnNlbGVjdGVkTm9kZSA9PT0gLTEpIHJldHVybjtcbiAgICB0aGlzLnNldFByb3BlcnRpZXMoeyBfc2VsZWN0ZWR1c2VyQ29kZTogLTEgfSk7XG4gIH1cbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwiendhdmUtdXNlcmNvZGVzXCIsIFp3YXZlVXNlcmNvZGVzKTtcbiIsImltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWRyb3Bkb3duLW1lbnUvcGFwZXItZHJvcGRvd24tbWVudVwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItaXRlbS9wYXBlci1pdGVtXCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1saXN0Ym94L3BhcGVyLWxpc3Rib3hcIjtcblxuaW1wb3J0IHtcbiAgY3NzLFxuICBDU1NSZXN1bHQsXG4gIGN1c3RvbUVsZW1lbnQsXG4gIGh0bWwsXG4gIExpdEVsZW1lbnQsXG4gIHByb3BlcnR5LFxuICBUZW1wbGF0ZVJlc3VsdCxcbn0gZnJvbSBcImxpdC1lbGVtZW50XCI7XG5cbmltcG9ydCB7IGhhU3R5bGUgfSBmcm9tIFwiLi4vLi4vLi4vcmVzb3VyY2VzL3N0eWxlc1wiO1xuaW1wb3J0IHsgSG9tZUFzc2lzdGFudCB9IGZyb20gXCIuLi8uLi8uLi90eXBlc1wiO1xuXG5pbXBvcnQgXCIuLi8uLi8uLi9jb21wb25lbnRzL2J1dHRvbnMvaGEtY2FsbC1zZXJ2aWNlLWJ1dHRvblwiO1xuaW1wb3J0IFwiLi4vLi4vLi4vY29tcG9uZW50cy9oYS1jYXJkXCI7XG5cbmltcG9ydCB7IFpXYXZlVmFsdWUgfSBmcm9tIFwiLi4vLi4vLi4vZGF0YS96d2F2ZVwiO1xuXG5AY3VzdG9tRWxlbWVudChcInp3YXZlLXZhbHVlc1wiKVxuZXhwb3J0IGNsYXNzIFp3YXZlVmFsdWVzIGV4dGVuZHMgTGl0RWxlbWVudCB7XG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyBoYXNzITogSG9tZUFzc2lzdGFudDtcbiAgQHByb3BlcnR5KCkgcHVibGljIHZhbHVlczogWldhdmVWYWx1ZVtdID0gW107XG4gIEBwcm9wZXJ0eSgpIHByaXZhdGUgX3NlbGVjdGVkVmFsdWU6IG51bWJlciA9IC0xO1xuXG4gIHByb3RlY3RlZCByZW5kZXIoKTogVGVtcGxhdGVSZXN1bHQgfCB2b2lkIHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxkaXYgY2xhc3M9XCJjb250ZW50XCI+XG4gICAgICAgIDxoYS1jYXJkXG4gICAgICAgICAgLmhlYWRlcj0ke3RoaXMuaGFzcy5sb2NhbGl6ZShcInVpLnBhbmVsLmNvbmZpZy56d2F2ZS52YWx1ZXMuaGVhZGVyXCIpfVxuICAgICAgICA+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImRldmljZS1waWNrZXJcIj5cbiAgICAgICAgICAgIDxwYXBlci1kcm9wZG93bi1tZW51XG4gICAgICAgICAgICAgIC5sYWJlbD0ke3RoaXMuaGFzcy5sb2NhbGl6ZShcInVpLnBhbmVsLmNvbmZpZy56d2F2ZS5jb21tb24udmFsdWVcIil9XG4gICAgICAgICAgICAgIGR5bmFtaWMtYWxpZ25cbiAgICAgICAgICAgICAgY2xhc3M9XCJmbGV4XCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPHBhcGVyLWxpc3Rib3hcbiAgICAgICAgICAgICAgICBzbG90PVwiZHJvcGRvd24tY29udGVudFwiXG4gICAgICAgICAgICAgICAgLnNlbGVjdGVkPSR7dGhpcy5fc2VsZWN0ZWRWYWx1ZX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICR7dGhpcy52YWx1ZXMubWFwKFxuICAgICAgICAgICAgICAgICAgKGl0ZW0pID0+IGh0bWxgXG4gICAgICAgICAgICAgICAgICAgIDxwYXBlci1pdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICR7dGhpcy5fY29tcHV0ZUNhcHRpb24oaXRlbSl9XG4gICAgICAgICAgICAgICAgICAgIDwvcGFwZXItaXRlbT5cbiAgICAgICAgICAgICAgICAgIGBcbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICA8L3BhcGVyLWxpc3Rib3g+XG4gICAgICAgICAgICA8L3BhcGVyLWRyb3Bkb3duLW1lbnU+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvaGEtY2FyZD5cbiAgICAgIDwvZGl2PlxuICAgIGA7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHN0eWxlcygpOiBDU1NSZXN1bHRbXSB7XG4gICAgcmV0dXJuIFtcbiAgICAgIGhhU3R5bGUsXG4gICAgICBjc3NgXG4gICAgICAgIC5jb250ZW50IHtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAyNHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgaGEtY2FyZCB7XG4gICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgICAgbWF4LXdpZHRoOiA2MDBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5kZXZpY2UtcGlja2VyIHtcbiAgICAgICAgICBAYXBwbHkgLS1sYXlvdXQtaG9yaXpvbnRhbDtcbiAgICAgICAgICBAYXBwbHkgLS1sYXlvdXQtY2VudGVyLWNlbnRlcjtcbiAgICAgICAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgICAgICAgICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAtbXMtZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICAtd2Via2l0LWZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIC13ZWJraXQtYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIHBhZGRpbmctbGVmdDogMjRweDtcbiAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAyNHB4O1xuICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAyNHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmZsZXgge1xuICAgICAgICAgIC1tcy1mbGV4OiAxIDEgMC4wMDAwMDAwMDFweDtcbiAgICAgICAgICAtd2Via2l0LWZsZXg6IDE7XG4gICAgICAgICAgZmxleDogMTtcbiAgICAgICAgICAtd2Via2l0LWZsZXgtYmFzaXM6IDAuMDAwMDAwMDAxcHg7XG4gICAgICAgICAgZmxleC1iYXNpczogMC4wMDAwMDAwMDFweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5oZWxwLXRleHQge1xuICAgICAgICAgIHBhZGRpbmctbGVmdDogMjRweDtcbiAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAyNHB4O1xuICAgICAgICB9XG4gICAgICBgLFxuICAgIF07XG4gIH1cblxuICBwcml2YXRlIF9jb21wdXRlQ2FwdGlvbihpdGVtKSB7XG4gICAgbGV0IG91dCA9IGAke2l0ZW0udmFsdWUubGFiZWx9YDtcbiAgICBvdXQgKz0gYCAoJHt0aGlzLmhhc3MubG9jYWxpemUoXCJ1aS5wYW5lbC5jb25maWcuendhdmUuY29tbW9uLmluc3RhbmNlXCIpfTpgO1xuICAgIG91dCArPSBgICR7aXRlbS52YWx1ZS5pbnN0YW5jZX0sYDtcbiAgICBvdXQgKz0gYCAke3RoaXMuaGFzcy5sb2NhbGl6ZShcInVpLnBhbmVsLmNvbmZpZy56d2F2ZS5jb21tb24uaW5kZXhcIil9OmA7XG4gICAgb3V0ICs9IGAgJHtpdGVtLnZhbHVlLmluZGV4fSlgO1xuICAgIHJldHVybiBvdXQ7XG4gIH1cbn1cblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgSFRNTEVsZW1lbnRUYWdOYW1lTWFwIHtcbiAgICBcInp3YXZlLXZhbHVlc1wiOiBad2F2ZVZhbHVlcztcbiAgfVxufVxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7O0FBVUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFtREE7QUFDQTtBQStFQTtBQUNBO0FBRUE7QUFDQTs7OztBQUlBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFMQTtBQVFBO0FBQ0E7QUFDQTs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQTdJQTs7Ozs7Ozs7Ozs7O0FDdEVBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ0hBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ0ZBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDSkE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDQ0E7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwQkE7QUFDQTtBQUVBO0FBQ0E7QUFFQTs7OztBQUdBOzs7Ozs7Ozs7Ozs7O0FBMENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTs7O0FBdEVBO0FBQ0E7QUFRQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQURBO0FBSUE7QUFDQTtBQURBO0FBSUE7QUFDQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBREE7QUF2QkE7QUEyQkE7Ozs7QUF4Q0E7QUFDQTtBQXlFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkZBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FBZUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQXBCQTtBQUNBO0FBR0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBOzs7O0FBYkE7QUFDQTtBQXVCQTs7Ozs7Ozs7Ozs7O0FDaUJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUdBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUFBOzs7Ozs7Ozs7Ozs7QUM3REE7QUFDQTtBQUVBO0FBNkJBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7O0FBSUE7Ozs7Ozs7Ozs7Ozs7QUE2WkE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUdBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFFQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBTUE7QUFFQTs7O0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBTUE7QUFDQTtBQUVBO0FBTUE7QUFDQTtBQUVBO0FBTUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQU1BO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQU1BO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTs7O0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQU1BO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFNQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBRUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBOzs7QUFFQTtBQUNBO0FBUUE7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTs7O0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBOzs7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUdBOzs7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUdBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFPQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUE3bkJBO0FBQ0E7QUF5VUE7OztBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBRkE7QUFLQTtBQUNBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBREE7QUFJQTtBQUNBO0FBREE7QUFJQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBRkE7QUFLQTtBQUNBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFDQTtBQUZBO0FBS0E7QUFFQTtBQUNBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFGQTtBQUtBO0FBQ0E7QUFDQTtBQUZBO0FBeEVBO0FBNkVBOzs7O0FBM1pBO0FBQ0E7QUFnb0JBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZxQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUFzTEE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUdBOzs7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQUZBO0FBU0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBS0E7OztBQUVBO0FBQ0E7QUFHQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU1BOzs7Ozs7QUFFQTs7Ozs7O0FBQ0E7O0FBQ0E7QUFDQTs7QUFEQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFOQTtBQVFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBTUE7OztBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBR0E7QUFDQTtBQURBO0FBTUE7QUFDQTtBQUNBO0FBREE7QUFNQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTs7O0FBOVZBO0FBQ0E7QUE4R0E7OztBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFDQTtBQUZBO0FBeERBO0FBNkRBOzs7QUFFQTtBQUNBO0FBQ0E7Ozs7QUFwTEE7QUFDQTtBQWlXQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdXQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBcUVBO0FBQUE7QUFBQTs7QUFDQTtBQUNBOztBQURBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHQTtBQUNBOztBQURBO0FBSUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTs7Ozs7QUFDQTtBQUNBO0FBQUE7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQTs7Ozs7O0FBQ0E7Ozs7O0FBQ0E7QUFDQTtBQUFBO0FBQUE7Ozs7OztBQUVBO0FBQ0E7O0FBREE7QUFJQTtBQUFBO0FBQUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQUdBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBLHFXQUNBO0FBREE7QUFIQTtBQU1BO0FBQ0E7OztBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFMQTtBQU9BOzs7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUdBOzs7QUEvSUE7QUFDQTtBQW9DQTs7O0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRkE7QUFLQTtBQUVBO0FBQ0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBRUE7QUF2QkE7QUF5QkE7Ozs7QUFsRUE7QUFDQTtBQWlKQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEtBO0FBQ0E7QUFFQTtBQVdBO0FBRUE7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBRUE7O0FBbVFBO0FBalFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBTUE7QUFXQTtBQXFHQTtBQXpGQTtBQTZDQTtBQVdBO0FBZ0JBO0FBZUE7QUFuRkE7QUFJQTtBQUdBO0FBSUE7QUFJQTtBQUlBO0FBSUE7QUFJQTtBQUlBO0FBR0E7QUFJQTtBQU9BO0FBVUE7QUFTQTtBQU9BO0FBaUJBO0FBRUE7Ozs7OztBQUNBO0FBQUE7O0FBQUE7Ozs7O0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBS0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQWdCQTtBQUVBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUF3REE7QUFDQTs7O0FBQUE7QUF0UUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBTEE7QUFEQTtBQUNBO0FBd1FBO0FBQUE7QUF4UUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBV0E7QUFHQTtBQUNBO0FBQ0E7QUFRQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7QUF3VUE7QUF0VUE7QUFDQTtBQUtBO0FBNENBO0FBS0E7QUFlQTtBQW9HQTtBQWpLQTtBQUtBO0FBTUE7QUFRQTtBQUtBO0FBU0E7QUFJQTtBQTdCQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFpREE7QUEwQkE7QUFlQTtBQStCQTtBQXFCQTtBQTNGQTtBQUtBO0FBY0E7QUFPQTtBQWVBO0FBS0E7QUFhQTtBQUtBO0FBYUE7QUFVQTtBQVVBO0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQXdDQTtBQUNBOzs7QUFBQTtBQUVBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7QUFDQTtBQUNBOztBQUFBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTs7Ozs7QUFDQTtBQTlVQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFSQTtBQURBO0FBQ0E7QUFnVkE7QUFBQTtBQWhWQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQW1HQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7OztBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU1BO0FBQ0E7Ozs7OztBQUVBOzs7Ozs7QUFDQTs7QUFDQTtBQUNBOztBQURBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBR0E7OztBQTFKQTtBQUNBO0FBMkNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFGQTtBQUtBO0FBQ0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUNBO0FBRkE7QUFLQTtBQTNDQTtBQTZDQTs7O0FBRUE7QUFDQTtBQUNBOzs7O0FBakdBO0FBQ0E7QUE2SkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FBMkdBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFHQTs7O0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUFBO0FBQ0E7Ozs7OztBQUVBOzs7Ozs7QUFDQTtBQUFBO0FBQUE7QUFDQTs7QUFDQTtBQUNBOztBQURBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBOzs7QUE5TUE7QUFDQTtBQTJFQTs7O0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFGQTtBQUtBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBRUE7QUFDQTtBQUNBO0FBRkE7QUFwQkE7QUF5QkE7Ozs7QUF6R0E7QUFDQTtBQWlOQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1TkE7QUFDQTtBQUNBO0FBRUE7QUFVQTtBQUdBO0FBQ0E7QUFLQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7O0FBdUZBO0FBckZBO0FBQUE7QUFDQTtBQXFCQTtBQU9BO0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQXdDQTtBQUNBOzs7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUF4RkE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBSEE7QUFEQTtBQUNBO0FBMEZBO0FBQUE7QUExRkE7Ozs7OztBIiwic291cmNlUm9vdCI6IiJ9