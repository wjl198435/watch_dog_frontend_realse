(self["webpackJsonp"] = self["webpackJsonp"] || []).push([["dialog-zha-device-info~zha-add-devices-page~zha-configuration-page"],{

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

/***/ "./src/data/area_registry.ts":
/*!***********************************!*\
  !*** ./src/data/area_registry.ts ***!
  \***********************************/
/*! exports provided: createAreaRegistryEntry, updateAreaRegistryEntry, deleteAreaRegistryEntry, subscribeAreaRegistry */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createAreaRegistryEntry", function() { return createAreaRegistryEntry; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateAreaRegistryEntry", function() { return updateAreaRegistryEntry; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteAreaRegistryEntry", function() { return deleteAreaRegistryEntry; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subscribeAreaRegistry", function() { return subscribeAreaRegistry; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var home_assistant_js_websocket__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! home-assistant-js-websocket */ "./node_modules/home-assistant-js-websocket/dist/haws.es.js");
/* harmony import */ var _common_string_compare__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/string/compare */ "./src/common/string/compare.ts");
/* harmony import */ var _common_util_debounce__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/util/debounce */ "./src/common/util/debounce.ts");




var createAreaRegistryEntry = function (hass, values) {
    return hass.callWS(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ type: "config/area_registry/create" }, values));
};
var updateAreaRegistryEntry = function (hass, areaId, updates) {
    return hass.callWS(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ type: "config/area_registry/update", area_id: areaId }, updates));
};
var deleteAreaRegistryEntry = function (hass, areaId) {
    return hass.callWS({
        type: "config/area_registry/delete",
        area_id: areaId,
    });
};
var fetchAreaRegistry = function (conn) {
    return conn
        .sendMessagePromise({
        type: "config/area_registry/list",
    })
        .then(function (areas) { return areas.sort(function (ent1, ent2) { return Object(_common_string_compare__WEBPACK_IMPORTED_MODULE_2__["compare"])(ent1.name, ent2.name); }); });
};
var subscribeAreaRegistryUpdates = function (conn, store) {
    return conn.subscribeEvents(Object(_common_util_debounce__WEBPACK_IMPORTED_MODULE_3__["debounce"])(function () {
        return fetchAreaRegistry(conn).then(function (areas) { return store.setState(areas, true); });
    }, 500, true), "area_registry_updated");
};
var subscribeAreaRegistry = function (conn, onChange) {
    return Object(home_assistant_js_websocket__WEBPACK_IMPORTED_MODULE_1__["createCollection"])("_areaRegistry", fetchAreaRegistry, subscribeAreaRegistryUpdates, conn, onChange);
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

/***/ "./src/data/zha.ts":
/*!*************************!*\
  !*** ./src/data/zha.ts ***!
  \*************************/
/*! exports provided: reconfigureNode, fetchAttributesForCluster, fetchDevices, fetchZHADevice, fetchBindableDevices, bindDevices, unbindDevices, readAttributeValue, fetchCommandsForCluster, fetchClustersForZhaNode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reconfigureNode", function() { return reconfigureNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchAttributesForCluster", function() { return fetchAttributesForCluster; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchDevices", function() { return fetchDevices; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchZHADevice", function() { return fetchZHADevice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchBindableDevices", function() { return fetchBindableDevices; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bindDevices", function() { return bindDevices; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unbindDevices", function() { return unbindDevices; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "readAttributeValue", function() { return readAttributeValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchCommandsForCluster", function() { return fetchCommandsForCluster; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchClustersForZhaNode", function() { return fetchClustersForZhaNode; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var reconfigureNode = function (hass, ieeeAddress) {
    return hass.callWS({
        type: "zha/devices/reconfigure",
        ieee: ieeeAddress,
    });
};
var fetchAttributesForCluster = function (hass, ieeeAddress, endpointId, clusterId, clusterType) {
    return hass.callWS({
        type: "zha/devices/clusters/attributes",
        ieee: ieeeAddress,
        endpoint_id: endpointId,
        cluster_id: clusterId,
        cluster_type: clusterType,
    });
};
var fetchDevices = function (hass) {
    return hass.callWS({
        type: "zha/devices",
    });
};
var fetchZHADevice = function (hass, ieeeAddress) {
    return hass.callWS({
        type: "zha/device",
        ieee: ieeeAddress,
    });
};
var fetchBindableDevices = function (hass, ieeeAddress) {
    return hass.callWS({
        type: "zha/devices/bindable",
        ieee: ieeeAddress,
    });
};
var bindDevices = function (hass, sourceIEEE, targetIEEE) {
    return hass.callWS({
        type: "zha/devices/bind",
        source_ieee: sourceIEEE,
        target_ieee: targetIEEE,
    });
};
var unbindDevices = function (hass, sourceIEEE, targetIEEE) {
    return hass.callWS({
        type: "zha/devices/unbind",
        source_ieee: sourceIEEE,
        target_ieee: targetIEEE,
    });
};
var readAttributeValue = function (hass, data) {
    return hass.callWS(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, data), { type: "zha/devices/clusters/attributes/value" }));
};
var fetchCommandsForCluster = function (hass, ieeeAddress, endpointId, clusterId, clusterType) {
    return hass.callWS({
        type: "zha/devices/clusters/commands",
        ieee: ieeeAddress,
        endpoint_id: endpointId,
        cluster_id: clusterId,
        cluster_type: clusterType,
    });
};
var fetchClustersForZhaNode = function (hass, ieeeAddress) {
    return hass.callWS({
        type: "zha/devices/clusters",
        ieee: ieeeAddress,
    });
};


/***/ }),

/***/ "./src/panels/config/zha/functions.ts":
/*!********************************************!*\
  !*** ./src/panels/config/zha/functions.ts ***!
  \********************************************/
/*! exports provided: formatAsPaddedHex, sortZHADevices */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatAsPaddedHex", function() { return formatAsPaddedHex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sortZHADevices", function() { return sortZHADevices; });
var formatAsPaddedHex = function (value) {
    var hex = value;
    if (typeof value === "string") {
        hex = parseInt(value, 16);
    }
    return "0x" + hex.toString(16).padStart(4, "0");
};
var sortZHADevices = function (a, b) {
    var nameA = a.user_given_name ? a.user_given_name : a.name;
    var nameb = b.user_given_name ? b.user_given_name : b.name;
    return nameA.localeCompare(nameb);
};


/***/ }),

/***/ "./src/panels/config/zha/zha-device-card.ts":
/*!**************************************************!*\
  !*** ./src/panels/config/zha/zha-device-card.ts ***!
  \**************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _components_buttons_ha_call_service_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../components/buttons/ha-call-service-button */ "./src/components/buttons/ha-call-service-button.js");
/* harmony import */ var _components_ha_service_description__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/ha-service-description */ "./src/components/ha-service-description.js");
/* harmony import */ var _components_entity_state_badge__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/entity/state-badge */ "./src/components/entity/state-badge.ts");
/* harmony import */ var _components_ha_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/ha-card */ "./src/components/ha-card.ts");
/* harmony import */ var _material_mwc_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material/mwc-button */ "./node_modules/@material/mwc-button/mwc-button.js");
/* harmony import */ var _polymer_paper_dropdown_menu_paper_dropdown_menu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @polymer/paper-dropdown-menu/paper-dropdown-menu */ "./node_modules/@polymer/paper-dropdown-menu/paper-dropdown-menu.js");
/* harmony import */ var _polymer_paper_input_paper_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @polymer/paper-input/paper-input */ "./node_modules/@polymer/paper-input/paper-input.js");
/* harmony import */ var _polymer_paper_item_paper_icon_item__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @polymer/paper-item/paper-icon-item */ "./node_modules/@polymer/paper-item/paper-icon-item.js");
/* harmony import */ var _polymer_paper_item_paper_item__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @polymer/paper-item/paper-item */ "./node_modules/@polymer/paper-item/paper-item.js");
/* harmony import */ var _polymer_paper_item_paper_item_body__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @polymer/paper-item/paper-item-body */ "./node_modules/@polymer/paper-item/paper-item-body.js");
/* harmony import */ var _polymer_paper_listbox_paper_listbox__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @polymer/paper-listbox/paper-listbox */ "./node_modules/@polymer/paper-listbox/paper-listbox.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../common/dom/fire_event */ "./src/common/dom/fire_event.ts");
/* harmony import */ var _data_area_registry__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../data/area_registry */ "./src/data/area_registry.ts");
/* harmony import */ var _data_device_registry__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../data/device_registry */ "./src/data/device_registry.ts");
/* harmony import */ var _data_zha__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../data/zha */ "./src/data/zha.ts");
/* harmony import */ var _resources_styles__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../resources/styles */ "./src/resources/styles.ts");
/* harmony import */ var _common_navigate__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../common/navigate */ "./src/common/navigate.ts");
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./functions */ "./src/panels/config/zha/functions.ts");
/* harmony import */ var _common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../common/entity/compute_state_name */ "./src/common/entity/compute_state_name.ts");





















var ZHADeviceCard = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(ZHADeviceCard, _super);
    function ZHADeviceCard() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.showHelp = false;
        _this._areas = [];
        _this._selectedAreaIndex = -1;
        return _this;
    }
    ZHADeviceCard.prototype.disconnectedCallback = function () {
        _super.prototype.disconnectedCallback.call(this);
        if (this._unsubAreas) {
            this._unsubAreas();
        }
        if (this._unsubEntities) {
            this._unsubEntities();
        }
    };
    ZHADeviceCard.prototype.connectedCallback = function () {
        var _this = this;
        _super.prototype.connectedCallback.call(this);
        this._unsubAreas = Object(_data_area_registry__WEBPACK_IMPORTED_MODULE_14__["subscribeAreaRegistry"])(this.hass.connection, function (areas) {
            _this._areas = areas;
        });
        this.hass.connection
            .subscribeEvents(function (event) {
            if (_this.device) {
                _this.device.entities.forEach(function (deviceEntity) {
                    if (event.data.old_entity_id === deviceEntity.entity_id) {
                        deviceEntity.entity_id = event.data.entity_id;
                    }
                });
            }
        }, "entity_registry_updated")
            .then(function (unsub) { return (_this._unsubEntities = unsub); });
    };
    ZHADeviceCard.prototype.firstUpdated = function (changedProperties) {
        var _this = this;
        _super.prototype.firstUpdated.call(this, changedProperties);
        this.addEventListener("hass-service-called", function (ev) {
            return _this.serviceCalled(ev);
        });
        this._serviceData = {
            ieee_address: this.device.ieee,
        };
    };
    ZHADeviceCard.prototype.updated = function (changedProperties) {
        var _this = this;
        if (changedProperties.has("device")) {
            if (!this._areas || !this.device || !this.device.area_id) {
                this._selectedAreaIndex = 0;
            }
            else {
                this._selectedAreaIndex =
                    this._areas.findIndex(function (area) { return area.area_id === _this.device.area_id; }) + 1;
            }
            this._userGivenName = this.device.user_given_name;
        }
        _super.prototype.update.call(this, changedProperties);
    };
    ZHADeviceCard.prototype.serviceCalled = function (ev) {
        // Check if this is for us
        if (ev.detail.success && ev.detail.service === "remove") {
            Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_13__["fireEvent"])(this, "zha-device-removed", {
                device: this.device,
            });
        }
    };
    ZHADeviceCard.prototype.render = function () {
        var _this = this;
        return Object(lit_element__WEBPACK_IMPORTED_MODULE_12__["html"])(templateObject_11 || (templateObject_11 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      <ha-card header=\"", "\">\n        ", "\n        <div class=\"card-content\">\n          <dl>\n            <dt>IEEE:</dt>\n            <dd class=\"zha-info\">", "</dd>\n            <dt>Nwk:</dt>\n            <dd class=\"zha-info\">", "</dd>\n            <dt>LQI:</dt>\n            <dd class=\"zha-info\">", "</dd>\n            <dt>RSSI:</dt>\n            <dd class=\"zha-info\">", "</dd>\n            <dt>", ":</dt>\n            <dd class=\"zha-info\">", "</dd>\n            <dt>", ":</dt>\n            <dd class=\"zha-info\">", "</dd>\n            ", "\n          </dl>\n        </div>\n\n        <div class=\"device-entities\">\n          ", "\n        </div>\n        <div class=\"editable\">\n          <paper-input\n            type=\"string\"\n            @change=\"", "\"\n            .value=\"", "\"\n            placeholder=\"", "\"\n          ></paper-input>\n        </div>\n        <div class=\"node-picker\">\n          <paper-dropdown-menu\n            label=\"", "\"\n            class=\"flex\"\n          >\n            <paper-listbox\n              slot=\"dropdown-content\"\n              .selected=\"", "\"\n              @iron-select=\"", "\"\n            >\n              <paper-item>\n                ", "\n              </paper-item>\n\n              ", "\n            </paper-listbox>\n          </paper-dropdown-menu>\n        </div>\n        ", "\n        </div>\n      </ha-card>\n    "], ["\n      <ha-card header=\"", "\">\n        ",
            "\n        <div class=\"card-content\">\n          <dl>\n            <dt>IEEE:</dt>\n            <dd class=\"zha-info\">", "</dd>\n            <dt>Nwk:</dt>\n            <dd class=\"zha-info\">", "</dd>\n            <dt>LQI:</dt>\n            <dd class=\"zha-info\">",
            "</dd>\n            <dt>RSSI:</dt>\n            <dd class=\"zha-info\">",
            "</dd>\n            <dt>",
            ":</dt>\n            <dd class=\"zha-info\">",
            "</dd>\n            <dt>",
            ":</dt>\n            <dd class=\"zha-info\">",
            "</dd>\n            ",
            "\n          </dl>\n        </div>\n\n        <div class=\"device-entities\">\n          ",
            "\n        </div>\n        <div class=\"editable\">\n          <paper-input\n            type=\"string\"\n            @change=\"", "\"\n            .value=\"", "\"\n            placeholder=\"",
            "\"\n          ></paper-input>\n        </div>\n        <div class=\"node-picker\">\n          <paper-dropdown-menu\n            label=\"",
            "\"\n            class=\"flex\"\n          >\n            <paper-listbox\n              slot=\"dropdown-content\"\n              .selected=\"", "\"\n              @iron-select=\"", "\"\n            >\n              <paper-item>\n                ", "\n              </paper-item>\n\n              ",
            "\n            </paper-listbox>\n          </paper-dropdown-menu>\n        </div>\n        ",
            "\n        </div>\n      </ha-card>\n    "])), this.isJoinPage ? this.device.name : "", this.isJoinPage
            ? Object(lit_element__WEBPACK_IMPORTED_MODULE_12__["html"])(templateObject_1 || (templateObject_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n                <div class=\"info\">\n                  <div class=\"model\">", "</div>\n                  <div class=\"manuf\">\n                    ", "\n                  </div>\n                </div>\n              "], ["\n                <div class=\"info\">\n                  <div class=\"model\">", "</div>\n                  <div class=\"manuf\">\n                    ",
                "\n                  </div>\n                </div>\n              "])), this.device.model, this.hass.localize("ui.dialogs.zha_device_info.manuf", "manufacturer", this.device.manufacturer)) : "", this.device.ieee, Object(_functions__WEBPACK_IMPORTED_MODULE_19__["formatAsPaddedHex"])(this.device.nwk), this.device.lqi ||
            this.hass.localize("ui.dialogs.zha_device_info.unknown"), this.device.rssi ||
            this.hass.localize("ui.dialogs.zha_device_info.unknown"), this.hass.localize("ui.dialogs.zha_device_info.last_seen"), this.device.last_seen ||
            this.hass.localize("ui.dialogs.zha_device_info.unknown"), this.hass.localize("ui.dialogs.zha_device_info.power_source"), this.device.power_source ||
            this.hass.localize("ui.dialogs.zha_device_info.unknown"), this.device.quirk_applied
            ? Object(lit_element__WEBPACK_IMPORTED_MODULE_12__["html"])(templateObject_2 || (templateObject_2 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n                    <dt>\n                      ", ":\n                    </dt>\n                    <dd class=\"zha-info\">", "</dd>\n                  "], ["\n                    <dt>\n                      ",
                ":\n                    </dt>\n                    <dd class=\"zha-info\">", "</dd>\n                  "])), this.hass.localize("ui.dialogs.zha_device_info.quirk"), this.device.quirk_class) : "", this.device.entities.map(function (entity) { return Object(lit_element__WEBPACK_IMPORTED_MODULE_12__["html"])(templateObject_4 || (templateObject_4 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n              <paper-icon-item\n                @click=\"", "\"\n                .entity=\"", "\"\n              >\n                <state-badge\n                  .stateObj=\"", "\"\n                  slot=\"item-icon\"\n                ></state-badge>\n                ", "\n              </paper-icon-item>\n            "], ["\n              <paper-icon-item\n                @click=\"", "\"\n                .entity=\"", "\"\n              >\n                <state-badge\n                  .stateObj=\"", "\"\n                  slot=\"item-icon\"\n                ></state-badge>\n                ",
            "\n              </paper-icon-item>\n            "])), _this._openMoreInfo, entity, _this.hass.states[entity.entity_id], !_this.isJoinPage
            ? Object(lit_element__WEBPACK_IMPORTED_MODULE_12__["html"])(templateObject_3 || (templateObject_3 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n                      <paper-item-body>\n                        <div class=\"name\">\n                          ", "\n                        </div>\n                        <div class=\"secondary entity-id\">\n                          ", "\n                        </div>\n                      </paper-item-body>\n                    "], ["\n                      <paper-item-body>\n                        <div class=\"name\">\n                          ", "\n                        </div>\n                        <div class=\"secondary entity-id\">\n                          ", "\n                        </div>\n                      </paper-item-body>\n                    "])), _this._computeEntityName(entity), entity.entity_id) : ""); }), this._saveCustomName, this._userGivenName, this.hass.localize("ui.dialogs.zha_device_info.zha_device_card.device_name_placeholder"), this.hass.localize("ui.dialogs.zha_device_info.zha_device_card.area_picker_label"), this._selectedAreaIndex, this._selectedAreaChanged, this.hass.localize("ui.dialogs.zha_device_info.no_area"), this._areas.map(function (entry) { return Object(lit_element__WEBPACK_IMPORTED_MODULE_12__["html"])(templateObject_5 || (templateObject_5 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n                  <paper-item area=\"", "\">", "</paper-item>\n                "], ["\n                  <paper-item area=\"", "\">", "</paper-item>\n                "])), entry, entry.name); }), this.showActions
            ? Object(lit_element__WEBPACK_IMPORTED_MODULE_12__["html"])(templateObject_10 || (templateObject_10 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n                <div class=\"card-actions\">\n                  <mwc-button @click=\"", "\">\n                    ", "\n                  </mwc-button>\n                  ", "\n\n                  <ha-call-service-button\n                    .hass=\"", "\"\n                    domain=\"zha\"\n                    service=\"remove\"\n                    .serviceData=\"", "\"\n                  >\n                    ", "\n                  </ha-call-service-button>\n                  ", "\n                  ", "\n                </div>\n              "], ["\n                <div class=\"card-actions\">\n                  <mwc-button @click=\"", "\">\n                    ",
                "\n                  </mwc-button>\n                  ",
                "\n\n                  <ha-call-service-button\n                    .hass=\"", "\"\n                    domain=\"zha\"\n                    service=\"remove\"\n                    .serviceData=\"", "\"\n                  >\n                    ",
                "\n                  </ha-call-service-button>\n                  ",
                "\n                  ",
                "\n                </div>\n              "])), this._onReconfigureNodeClick, this.hass.localize("ui.dialogs.zha_device_info.buttons.reconfigure"), this.showHelp
                ? Object(lit_element__WEBPACK_IMPORTED_MODULE_12__["html"])(templateObject_6 || (templateObject_6 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n                        <div class=\"help-text\">\n                          ", "\n                        </div>\n                      "], ["\n                        <div class=\"help-text\">\n                          ",
                    "\n                        </div>\n                      "])), this.hass.localize("ui.dialogs.zha_device_info.services.reconfigure")) : "", this.hass, this._serviceData, this.hass.localize("ui.dialogs.zha_device_info.buttons.remove"), this.showHelp
                ? Object(lit_element__WEBPACK_IMPORTED_MODULE_12__["html"])(templateObject_7 || (templateObject_7 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n                        <div class=\"help-text\">\n                          ", "\n                        </div>\n                      "], ["\n                        <div class=\"help-text\">\n                          ",
                    "\n                        </div>\n                      "])), this.hass.localize("ui.dialogs.zha_device_info.services.remove")) : "", this.device.power_source === "Mains"
                ? Object(lit_element__WEBPACK_IMPORTED_MODULE_12__["html"])(templateObject_9 || (templateObject_9 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n                        <mwc-button @click=", ">\n                          ", "\n                        </mwc-button>\n                        ", "\n                      "], ["\n                        <mwc-button @click=", ">\n                          ",
                    "\n                        </mwc-button>\n                        ",
                    "\n                      "])), this._onAddDevicesClick, this.hass.localize("ui.panel.config.zha.common.add_devices"), this.showHelp
                    ? Object(lit_element__WEBPACK_IMPORTED_MODULE_12__["html"])(templateObject_8 || (templateObject_8 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n                              <ha-service-description\n                                .hass=\"", "\"\n                                domain=\"zha\"\n                                service=\"permit\"\n                                class=\"help-text2\"\n                              />\n                            "], ["\n                              <ha-service-description\n                                .hass=\"", "\"\n                                domain=\"zha\"\n                                service=\"permit\"\n                                class=\"help-text2\"\n                              />\n                            "])), this.hass) : "") : "") : "");
    };
    ZHADeviceCard.prototype._onReconfigureNodeClick = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.hass) return [3 /*break*/, 2];
                        return [4 /*yield*/, Object(_data_zha__WEBPACK_IMPORTED_MODULE_16__["reconfigureNode"])(this.hass, this.device.ieee)];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    ZHADeviceCard.prototype._computeEntityName = function (entity) {
        if (this.hass.states[entity.entity_id]) {
            return Object(_common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_20__["computeStateName"])(this.hass.states[entity.entity_id]);
        }
        return entity.name;
    };
    ZHADeviceCard.prototype._saveCustomName = function (event) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var values;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.hass) return [3 /*break*/, 2];
                        values = {
                            name_by_user: event.target.value,
                            area_id: this.device.area_id ? this.device.area_id : undefined,
                        };
                        return [4 /*yield*/, Object(_data_device_registry__WEBPACK_IMPORTED_MODULE_15__["updateDeviceRegistryEntry"])(this.hass, this.device.device_reg_id, values)];
                    case 1:
                        _a.sent();
                        this.device.user_given_name = event.target.value;
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    ZHADeviceCard.prototype._openMoreInfo = function (ev) {
        Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_13__["fireEvent"])(this, "hass-more-info", {
            entityId: ev.currentTarget.entity.entity_id,
        });
    };
    ZHADeviceCard.prototype._selectedAreaChanged = function (event) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var area, newAreaId;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.device || !this._areas) {
                            return [2 /*return*/];
                        }
                        this._selectedAreaIndex = event.target.selected;
                        area = this._areas[this._selectedAreaIndex - 1];
                        if ((!area && !this.device.area_id) ||
                            (area && area.area_id === this.device.area_id)) {
                            return [2 /*return*/];
                        }
                        newAreaId = area ? area.area_id : undefined;
                        return [4 /*yield*/, Object(_data_device_registry__WEBPACK_IMPORTED_MODULE_15__["updateDeviceRegistryEntry"])(this.hass, this.device.device_reg_id, {
                                area_id: newAreaId,
                                name_by_user: this.device.user_given_name,
                            })];
                    case 1:
                        _a.sent();
                        this.device.area_id = newAreaId;
                        return [2 /*return*/];
                }
            });
        });
    };
    ZHADeviceCard.prototype._onAddDevicesClick = function () {
        Object(_common_navigate__WEBPACK_IMPORTED_MODULE_18__["navigate"])(this, "add/" + this.device.ieee);
    };
    Object.defineProperty(ZHADeviceCard, "styles", {
        get: function () {
            return [
                _resources_styles__WEBPACK_IMPORTED_MODULE_17__["haStyle"],
                Object(lit_element__WEBPACK_IMPORTED_MODULE_12__["css"])(templateObject_12 || (templateObject_12 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n        :host(:not([narrow])) .device-entities {\n          max-height: 225px;\n          overflow: auto;\n          display: flex;\n          flex-wrap: wrap;\n          padding: 4px;\n          justify-content: left;\n        }\n        ha-card {\n          flex: 1 0 100%;\n          padding-bottom: 10px;\n          min-width: 425px;\n        }\n        .device {\n          width: 30%;\n        }\n        .device .name {\n          font-weight: bold;\n        }\n        .device .manuf {\n          color: var(--secondary-text-color);\n          margin-bottom: 20px;\n        }\n        .extra-info {\n          margin-top: 8px;\n        }\n        .manuf,\n        .zha-info,\n        .entity-id {\n          color: var(--secondary-text-color);\n        }\n        .info {\n          margin-left: 16px;\n        }\n        dl {\n          display: grid;\n          grid-template-columns: 125px 1fr;\n        }\n        dl dt {\n          padding-left: 12px;\n          float: left;\n          text-align: left;\n        }\n        dl dd {\n          max-width: 200px;\n        }\n        paper-icon-item {\n          cursor: pointer;\n          padding-top: 4px;\n          padding-bottom: 4px;\n        }\n        .editable {\n          padding-left: 28px;\n          padding-right: 28px;\n          padding-bottom: 10px;\n        }\n        .help-text {\n          color: grey;\n          padding: 16px;\n        }\n        .flex {\n          -ms-flex: 1 1 0.000000001px;\n          -webkit-flex: 1;\n          flex: 1;\n          -webkit-flex-basis: 0.000000001px;\n          flex-basis: 0.000000001px;\n        }\n        .node-picker {\n          display: -ms-flexbox;\n          display: -webkit-flex;\n          display: flex;\n          -ms-flex-direction: row;\n          -webkit-flex-direction: row;\n          flex-direction: row;\n          -ms-flex-align: center;\n          -webkit-align-items: center;\n          align-items: center;\n          padding-left: 28px;\n          padding-right: 28px;\n          padding-bottom: 10px;\n        }\n      "], ["\n        :host(:not([narrow])) .device-entities {\n          max-height: 225px;\n          overflow: auto;\n          display: flex;\n          flex-wrap: wrap;\n          padding: 4px;\n          justify-content: left;\n        }\n        ha-card {\n          flex: 1 0 100%;\n          padding-bottom: 10px;\n          min-width: 425px;\n        }\n        .device {\n          width: 30%;\n        }\n        .device .name {\n          font-weight: bold;\n        }\n        .device .manuf {\n          color: var(--secondary-text-color);\n          margin-bottom: 20px;\n        }\n        .extra-info {\n          margin-top: 8px;\n        }\n        .manuf,\n        .zha-info,\n        .entity-id {\n          color: var(--secondary-text-color);\n        }\n        .info {\n          margin-left: 16px;\n        }\n        dl {\n          display: grid;\n          grid-template-columns: 125px 1fr;\n        }\n        dl dt {\n          padding-left: 12px;\n          float: left;\n          text-align: left;\n        }\n        dl dd {\n          max-width: 200px;\n        }\n        paper-icon-item {\n          cursor: pointer;\n          padding-top: 4px;\n          padding-bottom: 4px;\n        }\n        .editable {\n          padding-left: 28px;\n          padding-right: 28px;\n          padding-bottom: 10px;\n        }\n        .help-text {\n          color: grey;\n          padding: 16px;\n        }\n        .flex {\n          -ms-flex: 1 1 0.000000001px;\n          -webkit-flex: 1;\n          flex: 1;\n          -webkit-flex-basis: 0.000000001px;\n          flex-basis: 0.000000001px;\n        }\n        .node-picker {\n          display: -ms-flexbox;\n          display: -webkit-flex;\n          display: flex;\n          -ms-flex-direction: row;\n          -webkit-flex-direction: row;\n          flex-direction: row;\n          -ms-flex-align: center;\n          -webkit-align-items: center;\n          align-items: center;\n          padding-left: 28px;\n          padding-right: 28px;\n          padding-bottom: 10px;\n        }\n      "]))),
            ];
        },
        enumerable: true,
        configurable: true
    });
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_12__["property"])()
    ], ZHADeviceCard.prototype, "hass", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_12__["property"])()
    ], ZHADeviceCard.prototype, "device", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_12__["property"])({ type: Boolean })
    ], ZHADeviceCard.prototype, "narrow", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_12__["property"])({ type: Boolean })
    ], ZHADeviceCard.prototype, "showHelp", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_12__["property"])({ type: Boolean })
    ], ZHADeviceCard.prototype, "showActions", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_12__["property"])({ type: Boolean })
    ], ZHADeviceCard.prototype, "isJoinPage", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_12__["property"])()
    ], ZHADeviceCard.prototype, "_serviceData", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_12__["property"])()
    ], ZHADeviceCard.prototype, "_areas", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_12__["property"])()
    ], ZHADeviceCard.prototype, "_selectedAreaIndex", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_12__["property"])()
    ], ZHADeviceCard.prototype, "_userGivenName", void 0);
    ZHADeviceCard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_12__["customElement"])("zha-device-card")
    ], ZHADeviceCard);
    return ZHADeviceCard;
}(lit_element__WEBPACK_IMPORTED_MODULE_12__["LitElement"]));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11, templateObject_12;


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhbG9nLXpoYS1kZXZpY2UtaW5mb356aGEtYWRkLWRldmljZXMtcGFnZX56aGEtY29uZmlndXJhdGlvbi1wYWdlLmNodW5rLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9zdHJpbmcvY29tcGFyZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL3V0aWwvZGVib3VuY2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvYnV0dG9ucy9oYS1jYWxsLXNlcnZpY2UtYnV0dG9uLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2hhLWljb24udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaGEtc2VydmljZS1kZXNjcmlwdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZGF0YS9hcmVhX3JlZ2lzdHJ5LnRzIiwid2VicGFjazovLy8uL3NyYy9kYXRhL2RldmljZV9yZWdpc3RyeS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZGF0YS96aGEudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhbmVscy9jb25maWcvemhhL2Z1bmN0aW9ucy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL2NvbmZpZy96aGEvemhhLWRldmljZS1jYXJkLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBjb21wYXJlID0gKGE6IHN0cmluZywgYjogc3RyaW5nKSA9PiB7XG4gIGlmIChhIDwgYikge1xuICAgIHJldHVybiAtMTtcbiAgfVxuICBpZiAoYSA+IGIpIHtcbiAgICByZXR1cm4gMTtcbiAgfVxuXG4gIHJldHVybiAwO1xufTtcblxuZXhwb3J0IGNvbnN0IGNhc2VJbnNlbnNpdGl2ZUNvbXBhcmUgPSAoYTogc3RyaW5nLCBiOiBzdHJpbmcpID0+XG4gIGNvbXBhcmUoYS50b0xvd2VyQ2FzZSgpLCBiLnRvTG93ZXJDYXNlKCkpO1xuIiwiLy8gRnJvbTogaHR0cHM6Ly9kYXZpZHdhbHNoLm5hbWUvamF2YXNjcmlwdC1kZWJvdW5jZS1mdW5jdGlvblxuXG4vLyBSZXR1cm5zIGEgZnVuY3Rpb24sIHRoYXQsIGFzIGxvbmcgYXMgaXQgY29udGludWVzIHRvIGJlIGludm9rZWQsIHdpbGwgbm90XG4vLyBiZSB0cmlnZ2VyZWQuIFRoZSBmdW5jdGlvbiB3aWxsIGJlIGNhbGxlZCBhZnRlciBpdCBzdG9wcyBiZWluZyBjYWxsZWQgZm9yXG4vLyBOIG1pbGxpc2Vjb25kcy4gSWYgYGltbWVkaWF0ZWAgaXMgcGFzc2VkLCB0cmlnZ2VyIHRoZSBmdW5jdGlvbiBvbiB0aGVcbi8vIGxlYWRpbmcgZWRnZSwgaW5zdGVhZCBvZiB0aGUgdHJhaWxpbmcuXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IGJhbi10eXBlc1xuZXhwb3J0IGNvbnN0IGRlYm91bmNlID0gPFQgZXh0ZW5kcyBGdW5jdGlvbj4oXG4gIGZ1bmM6IFQsXG4gIHdhaXQsXG4gIGltbWVkaWF0ZSA9IGZhbHNlXG4pOiBUID0+IHtcbiAgbGV0IHRpbWVvdXQ7XG4gIC8vIEB0cy1pZ25vcmVcbiAgcmV0dXJuIGZ1bmN0aW9uKC4uLmFyZ3MpIHtcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZTpuby10aGlzLWFzc2lnbm1lbnRcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgY29uc3QgY29udGV4dCA9IHRoaXM7XG4gICAgY29uc3QgbGF0ZXIgPSAoKSA9PiB7XG4gICAgICB0aW1lb3V0ID0gbnVsbDtcbiAgICAgIGlmICghaW1tZWRpYXRlKSB7XG4gICAgICAgIGZ1bmMuYXBwbHkoY29udGV4dCwgYXJncyk7XG4gICAgICB9XG4gICAgfTtcbiAgICBjb25zdCBjYWxsTm93ID0gaW1tZWRpYXRlICYmICF0aW1lb3V0O1xuICAgIGNsZWFyVGltZW91dCh0aW1lb3V0KTtcbiAgICB0aW1lb3V0ID0gc2V0VGltZW91dChsYXRlciwgd2FpdCk7XG4gICAgaWYgKGNhbGxOb3cpIHtcbiAgICAgIGZ1bmMuYXBwbHkoY29udGV4dCwgYXJncyk7XG4gICAgfVxuICB9O1xufTtcbiIsImltcG9ydCB7IGh0bWwgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvaHRtbC10YWdcIjtcbmltcG9ydCB7IFBvbHltZXJFbGVtZW50IH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvcG9seW1lci1lbGVtZW50XCI7XG5cbmltcG9ydCBcIi4vaGEtcHJvZ3Jlc3MtYnV0dG9uXCI7XG5pbXBvcnQgeyBFdmVudHNNaXhpbiB9IGZyb20gXCIuLi8uLi9taXhpbnMvZXZlbnRzLW1peGluXCI7XG5cbi8qXG4gKiBAYXBwbGllc01peGluIEV2ZW50c01peGluXG4gKi9cbmNsYXNzIEhhQ2FsbFNlcnZpY2VCdXR0b24gZXh0ZW5kcyBFdmVudHNNaXhpbihQb2x5bWVyRWxlbWVudCkge1xuICBzdGF0aWMgZ2V0IHRlbXBsYXRlKCkge1xuICAgIHJldHVybiBodG1sYFxuICAgICAgPGhhLXByb2dyZXNzLWJ1dHRvblxuICAgICAgICBpZD1cInByb2dyZXNzXCJcbiAgICAgICAgcHJvZ3Jlc3M9XCJbW3Byb2dyZXNzXV1cIlxuICAgICAgICBvbi1jbGljaz1cImJ1dHRvblRhcHBlZFwiXG4gICAgICAgID48c2xvdD48L3Nsb3RcbiAgICAgID48L2hhLXByb2dyZXNzLWJ1dHRvbj5cbiAgICBgO1xuICB9XG5cbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBoYXNzOiB7XG4gICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgIH0sXG5cbiAgICAgIHByb2dyZXNzOiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIHZhbHVlOiBmYWxzZSxcbiAgICAgIH0sXG5cbiAgICAgIGRvbWFpbjoge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICB9LFxuXG4gICAgICBzZXJ2aWNlOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIH0sXG5cbiAgICAgIHNlcnZpY2VEYXRhOiB7XG4gICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgICAgdmFsdWU6IHt9LFxuICAgICAgfSxcblxuICAgICAgY29uZmlybWF0aW9uOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxuXG4gIGJ1dHRvblRhcHBlZCgpIHtcbiAgICBpZiAodGhpcy5jb25maXJtYXRpb24gJiYgIXdpbmRvdy5jb25maXJtKHRoaXMuY29uZmlybWF0aW9uKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLnByb2dyZXNzID0gdHJ1ZTtcbiAgICB2YXIgZWwgPSB0aGlzO1xuICAgIHZhciBldmVudERhdGEgPSB7XG4gICAgICBkb21haW46IHRoaXMuZG9tYWluLFxuICAgICAgc2VydmljZTogdGhpcy5zZXJ2aWNlLFxuICAgICAgc2VydmljZURhdGE6IHRoaXMuc2VydmljZURhdGEsXG4gICAgfTtcblxuICAgIHRoaXMuaGFzc1xuICAgICAgLmNhbGxTZXJ2aWNlKHRoaXMuZG9tYWluLCB0aGlzLnNlcnZpY2UsIHRoaXMuc2VydmljZURhdGEpXG4gICAgICAudGhlbihcbiAgICAgICAgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgZWwucHJvZ3Jlc3MgPSBmYWxzZTtcbiAgICAgICAgICBlbC4kLnByb2dyZXNzLmFjdGlvblN1Y2Nlc3MoKTtcbiAgICAgICAgICBldmVudERhdGEuc3VjY2VzcyA9IHRydWU7XG4gICAgICAgIH0sXG4gICAgICAgIGZ1bmN0aW9uKCkge1xuICAgICAgICAgIGVsLnByb2dyZXNzID0gZmFsc2U7XG4gICAgICAgICAgZWwuJC5wcm9ncmVzcy5hY3Rpb25FcnJvcigpO1xuICAgICAgICAgIGV2ZW50RGF0YS5zdWNjZXNzID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIClcbiAgICAgIC50aGVuKGZ1bmN0aW9uKCkge1xuICAgICAgICBlbC5maXJlKFwiaGFzcy1zZXJ2aWNlLWNhbGxlZFwiLCBldmVudERhdGEpO1xuICAgICAgfSk7XG4gIH1cbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwiaGEtY2FsbC1zZXJ2aWNlLWJ1dHRvblwiLCBIYUNhbGxTZXJ2aWNlQnV0dG9uKTtcbiIsImltcG9ydCB7IENvbnN0cnVjdG9yIH0gZnJvbSBcImxpdC1lbGVtZW50XCI7XG5pbXBvcnQgXCJAcG9seW1lci9pcm9uLWljb24vaXJvbi1pY29uXCI7XG4vLyBOb3QgZHVwbGljYXRlLCB0aGlzIGlzIGZvciB0eXBpbmcuXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcbmltcG9ydCB7IElyb25JY29uRWxlbWVudCB9IGZyb20gXCJAcG9seW1lci9pcm9uLWljb24vaXJvbi1pY29uXCI7XG5cbmNvbnN0IGlyb25JY29uQ2xhc3MgPSBjdXN0b21FbGVtZW50cy5nZXQoXCJpcm9uLWljb25cIikgYXMgQ29uc3RydWN0b3I8XG4gIElyb25JY29uRWxlbWVudFxuPjtcblxubGV0IGxvYWRlZCA9IGZhbHNlO1xuXG5leHBvcnQgY2xhc3MgSGFJY29uIGV4dGVuZHMgaXJvbkljb25DbGFzcyB7XG4gIHByaXZhdGUgX2ljb25zZXROYW1lPzogc3RyaW5nO1xuXG4gIHB1YmxpYyBsaXN0ZW4oXG4gICAgbm9kZTogRXZlbnRUYXJnZXQgfCBudWxsLFxuICAgIGV2ZW50TmFtZTogc3RyaW5nLFxuICAgIG1ldGhvZE5hbWU6IHN0cmluZ1xuICApOiB2b2lkIHtcbiAgICBzdXBlci5saXN0ZW4obm9kZSwgZXZlbnROYW1lLCBtZXRob2ROYW1lKTtcblxuICAgIGlmICghbG9hZGVkICYmIHRoaXMuX2ljb25zZXROYW1lID09PSBcIm1kaVwiKSB7XG4gICAgICBsb2FkZWQgPSB0cnVlO1xuICAgICAgaW1wb3J0KC8qIHdlYnBhY2tDaHVua05hbWU6IFwibWRpLWljb25zXCIgKi8gXCIuLi9yZXNvdXJjZXMvbWRpLWljb25zXCIpO1xuICAgIH1cbiAgfVxufVxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBIVE1MRWxlbWVudFRhZ05hbWVNYXAge1xuICAgIFwiaGEtaWNvblwiOiBIYUljb247XG4gIH1cbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwiaGEtaWNvblwiLCBIYUljb24pO1xuIiwiaW1wb3J0IHsgaHRtbCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZ1wiO1xuaW1wb3J0IHsgUG9seW1lckVsZW1lbnQgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWVsZW1lbnRcIjtcblxuY2xhc3MgSGFTZXJ2aWNlRGVzY3JpcHRpb24gZXh0ZW5kcyBQb2x5bWVyRWxlbWVudCB7XG4gIHN0YXRpYyBnZXQgdGVtcGxhdGUoKSB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICBbW19nZXREZXNjcmlwdGlvbihoYXNzLCBkb21haW4sIHNlcnZpY2UpXV1cbiAgICBgO1xuICB9XG5cbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBoYXNzOiBPYmplY3QsXG4gICAgICBkb21haW46IFN0cmluZyxcbiAgICAgIHNlcnZpY2U6IFN0cmluZyxcbiAgICB9O1xuICB9XG5cbiAgX2dldERlc2NyaXB0aW9uKGhhc3MsIGRvbWFpbiwgc2VydmljZSkge1xuICAgIHZhciBkb21haW5TZXJ2aWNlcyA9IGhhc3Muc2VydmljZXNbZG9tYWluXTtcbiAgICBpZiAoIWRvbWFpblNlcnZpY2VzKSByZXR1cm4gXCJcIjtcbiAgICB2YXIgc2VydmljZU9iamVjdCA9IGRvbWFpblNlcnZpY2VzW3NlcnZpY2VdO1xuICAgIGlmICghc2VydmljZU9iamVjdCkgcmV0dXJuIFwiXCI7XG4gICAgcmV0dXJuIHNlcnZpY2VPYmplY3QuZGVzY3JpcHRpb247XG4gIH1cbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwiaGEtc2VydmljZS1kZXNjcmlwdGlvblwiLCBIYVNlcnZpY2VEZXNjcmlwdGlvbik7XG4iLCJpbXBvcnQgeyBjcmVhdGVDb2xsZWN0aW9uLCBDb25uZWN0aW9uIH0gZnJvbSBcImhvbWUtYXNzaXN0YW50LWpzLXdlYnNvY2tldFwiO1xuaW1wb3J0IHsgSG9tZUFzc2lzdGFudCB9IGZyb20gXCIuLi90eXBlc1wiO1xuaW1wb3J0IHsgY29tcGFyZSB9IGZyb20gXCIuLi9jb21tb24vc3RyaW5nL2NvbXBhcmVcIjtcbmltcG9ydCB7IGRlYm91bmNlIH0gZnJvbSBcIi4uL2NvbW1vbi91dGlsL2RlYm91bmNlXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQXJlYVJlZ2lzdHJ5RW50cnkge1xuICBhcmVhX2lkOiBzdHJpbmc7XG4gIG5hbWU6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBBcmVhUmVnaXN0cnlFbnRyeU11dGFibGVQYXJhbXMge1xuICBuYW1lOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVBcmVhUmVnaXN0cnlFbnRyeSA9IChcbiAgaGFzczogSG9tZUFzc2lzdGFudCxcbiAgdmFsdWVzOiBBcmVhUmVnaXN0cnlFbnRyeU11dGFibGVQYXJhbXNcbikgPT5cbiAgaGFzcy5jYWxsV1M8QXJlYVJlZ2lzdHJ5RW50cnk+KHtcbiAgICB0eXBlOiBcImNvbmZpZy9hcmVhX3JlZ2lzdHJ5L2NyZWF0ZVwiLFxuICAgIC4uLnZhbHVlcyxcbiAgfSk7XG5cbmV4cG9ydCBjb25zdCB1cGRhdGVBcmVhUmVnaXN0cnlFbnRyeSA9IChcbiAgaGFzczogSG9tZUFzc2lzdGFudCxcbiAgYXJlYUlkOiBzdHJpbmcsXG4gIHVwZGF0ZXM6IFBhcnRpYWw8QXJlYVJlZ2lzdHJ5RW50cnlNdXRhYmxlUGFyYW1zPlxuKSA9PlxuICBoYXNzLmNhbGxXUzxBcmVhUmVnaXN0cnlFbnRyeT4oe1xuICAgIHR5cGU6IFwiY29uZmlnL2FyZWFfcmVnaXN0cnkvdXBkYXRlXCIsXG4gICAgYXJlYV9pZDogYXJlYUlkLFxuICAgIC4uLnVwZGF0ZXMsXG4gIH0pO1xuXG5leHBvcnQgY29uc3QgZGVsZXRlQXJlYVJlZ2lzdHJ5RW50cnkgPSAoaGFzczogSG9tZUFzc2lzdGFudCwgYXJlYUlkOiBzdHJpbmcpID0+XG4gIGhhc3MuY2FsbFdTKHtcbiAgICB0eXBlOiBcImNvbmZpZy9hcmVhX3JlZ2lzdHJ5L2RlbGV0ZVwiLFxuICAgIGFyZWFfaWQ6IGFyZWFJZCxcbiAgfSk7XG5cbmNvbnN0IGZldGNoQXJlYVJlZ2lzdHJ5ID0gKGNvbm4pID0+XG4gIGNvbm5cbiAgICAuc2VuZE1lc3NhZ2VQcm9taXNlKHtcbiAgICAgIHR5cGU6IFwiY29uZmlnL2FyZWFfcmVnaXN0cnkvbGlzdFwiLFxuICAgIH0pXG4gICAgLnRoZW4oKGFyZWFzKSA9PiBhcmVhcy5zb3J0KChlbnQxLCBlbnQyKSA9PiBjb21wYXJlKGVudDEubmFtZSwgZW50Mi5uYW1lKSkpO1xuXG5jb25zdCBzdWJzY3JpYmVBcmVhUmVnaXN0cnlVcGRhdGVzID0gKGNvbm4sIHN0b3JlKSA9PlxuICBjb25uLnN1YnNjcmliZUV2ZW50cyhcbiAgICBkZWJvdW5jZShcbiAgICAgICgpID0+XG4gICAgICAgIGZldGNoQXJlYVJlZ2lzdHJ5KGNvbm4pLnRoZW4oKGFyZWFzKSA9PiBzdG9yZS5zZXRTdGF0ZShhcmVhcywgdHJ1ZSkpLFxuICAgICAgNTAwLFxuICAgICAgdHJ1ZVxuICAgICksXG4gICAgXCJhcmVhX3JlZ2lzdHJ5X3VwZGF0ZWRcIlxuICApO1xuXG5leHBvcnQgY29uc3Qgc3Vic2NyaWJlQXJlYVJlZ2lzdHJ5ID0gKFxuICBjb25uOiBDb25uZWN0aW9uLFxuICBvbkNoYW5nZTogKGFyZWFzOiBBcmVhUmVnaXN0cnlFbnRyeVtdKSA9PiB2b2lkXG4pID0+XG4gIGNyZWF0ZUNvbGxlY3Rpb248QXJlYVJlZ2lzdHJ5RW50cnlbXT4oXG4gICAgXCJfYXJlYVJlZ2lzdHJ5XCIsXG4gICAgZmV0Y2hBcmVhUmVnaXN0cnksXG4gICAgc3Vic2NyaWJlQXJlYVJlZ2lzdHJ5VXBkYXRlcyxcbiAgICBjb25uLFxuICAgIG9uQ2hhbmdlXG4gICk7XG4iLCJpbXBvcnQgeyBIb21lQXNzaXN0YW50IH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5pbXBvcnQgeyBjcmVhdGVDb2xsZWN0aW9uLCBDb25uZWN0aW9uIH0gZnJvbSBcImhvbWUtYXNzaXN0YW50LWpzLXdlYnNvY2tldFwiO1xuaW1wb3J0IHsgZGVib3VuY2UgfSBmcm9tIFwiLi4vY29tbW9uL3V0aWwvZGVib3VuY2VcIjtcblxuZXhwb3J0IGludGVyZmFjZSBEZXZpY2VSZWdpc3RyeUVudHJ5IHtcbiAgaWQ6IHN0cmluZztcbiAgY29uZmlnX2VudHJpZXM6IHN0cmluZ1tdO1xuICBjb25uZWN0aW9uczogQXJyYXk8W3N0cmluZywgc3RyaW5nXT47XG4gIG1hbnVmYWN0dXJlcjogc3RyaW5nO1xuICBtb2RlbD86IHN0cmluZztcbiAgbmFtZT86IHN0cmluZztcbiAgc3dfdmVyc2lvbj86IHN0cmluZztcbiAgdmlhX2RldmljZV9pZD86IHN0cmluZztcbiAgYXJlYV9pZD86IHN0cmluZztcbiAgbmFtZV9ieV91c2VyPzogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIERldmljZVJlZ2lzdHJ5RW50cnlNdXRhYmxlUGFyYW1zIHtcbiAgYXJlYV9pZD86IHN0cmluZyB8IG51bGw7XG4gIG5hbWVfYnlfdXNlcj86IHN0cmluZyB8IG51bGw7XG59XG5cbmV4cG9ydCBjb25zdCB1cGRhdGVEZXZpY2VSZWdpc3RyeUVudHJ5ID0gKFxuICBoYXNzOiBIb21lQXNzaXN0YW50LFxuICBkZXZpY2VJZDogc3RyaW5nLFxuICB1cGRhdGVzOiBQYXJ0aWFsPERldmljZVJlZ2lzdHJ5RW50cnlNdXRhYmxlUGFyYW1zPlxuKSA9PlxuICBoYXNzLmNhbGxXUzxEZXZpY2VSZWdpc3RyeUVudHJ5Pih7XG4gICAgdHlwZTogXCJjb25maWcvZGV2aWNlX3JlZ2lzdHJ5L3VwZGF0ZVwiLFxuICAgIGRldmljZV9pZDogZGV2aWNlSWQsXG4gICAgLi4udXBkYXRlcyxcbiAgfSk7XG5cbmNvbnN0IGZldGNoRGV2aWNlUmVnaXN0cnkgPSAoY29ubikgPT5cbiAgY29ubi5zZW5kTWVzc2FnZVByb21pc2Uoe1xuICAgIHR5cGU6IFwiY29uZmlnL2RldmljZV9yZWdpc3RyeS9saXN0XCIsXG4gIH0pO1xuXG5jb25zdCBzdWJzY3JpYmVEZXZpY2VSZWdpc3RyeVVwZGF0ZXMgPSAoY29ubiwgc3RvcmUpID0+XG4gIGNvbm4uc3Vic2NyaWJlRXZlbnRzKFxuICAgIGRlYm91bmNlKFxuICAgICAgKCkgPT5cbiAgICAgICAgZmV0Y2hEZXZpY2VSZWdpc3RyeShjb25uKS50aGVuKChkZXZpY2VzKSA9PlxuICAgICAgICAgIHN0b3JlLnNldFN0YXRlKGRldmljZXMsIHRydWUpXG4gICAgICAgICksXG4gICAgICA1MDAsXG4gICAgICB0cnVlXG4gICAgKSxcbiAgICBcImRldmljZV9yZWdpc3RyeV91cGRhdGVkXCJcbiAgKTtcblxuZXhwb3J0IGNvbnN0IHN1YnNjcmliZURldmljZVJlZ2lzdHJ5ID0gKFxuICBjb25uOiBDb25uZWN0aW9uLFxuICBvbkNoYW5nZTogKGRldmljZXM6IERldmljZVJlZ2lzdHJ5RW50cnlbXSkgPT4gdm9pZFxuKSA9PlxuICBjcmVhdGVDb2xsZWN0aW9uPERldmljZVJlZ2lzdHJ5RW50cnlbXT4oXG4gICAgXCJfZHJcIixcbiAgICBmZXRjaERldmljZVJlZ2lzdHJ5LFxuICAgIHN1YnNjcmliZURldmljZVJlZ2lzdHJ5VXBkYXRlcyxcbiAgICBjb25uLFxuICAgIG9uQ2hhbmdlXG4gICk7XG4iLCJpbXBvcnQgeyBIYXNzRW50aXR5IH0gZnJvbSBcImhvbWUtYXNzaXN0YW50LWpzLXdlYnNvY2tldFwiO1xuaW1wb3J0IHsgSG9tZUFzc2lzdGFudCB9IGZyb20gXCIuLi90eXBlc1wiO1xuXG5leHBvcnQgaW50ZXJmYWNlIFpIQUVudGl0eVJlZmVyZW5jZSBleHRlbmRzIEhhc3NFbnRpdHkge1xuICBuYW1lOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgWkhBRGV2aWNlIHtcbiAgbmFtZTogc3RyaW5nO1xuICBpZWVlOiBzdHJpbmc7XG4gIG53azogc3RyaW5nO1xuICBscWk6IHN0cmluZztcbiAgcnNzaTogc3RyaW5nO1xuICBsYXN0X3NlZW46IHN0cmluZztcbiAgbWFudWZhY3R1cmVyOiBzdHJpbmc7XG4gIG1vZGVsOiBzdHJpbmc7XG4gIHF1aXJrX2FwcGxpZWQ6IGJvb2xlYW47XG4gIHF1aXJrX2NsYXNzOiBzdHJpbmc7XG4gIGVudGl0aWVzOiBaSEFFbnRpdHlSZWZlcmVuY2VbXTtcbiAgbWFudWZhY3R1cmVyX2NvZGU6IG51bWJlcjtcbiAgZGV2aWNlX3JlZ19pZDogc3RyaW5nO1xuICB1c2VyX2dpdmVuX25hbWU/OiBzdHJpbmc7XG4gIHBvd2VyX3NvdXJjZT86IHN0cmluZztcbiAgYXJlYV9pZD86IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBBdHRyaWJ1dGUge1xuICBuYW1lOiBzdHJpbmc7XG4gIGlkOiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ2x1c3RlciB7XG4gIG5hbWU6IHN0cmluZztcbiAgaWQ6IG51bWJlcjtcbiAgZW5kcG9pbnRfaWQ6IG51bWJlcjtcbiAgdHlwZTogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIENvbW1hbmQge1xuICBuYW1lOiBzdHJpbmc7XG4gIGlkOiBudW1iZXI7XG4gIHR5cGU6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBSZWFkQXR0cmlidXRlU2VydmljZURhdGEge1xuICBpZWVlOiBzdHJpbmc7XG4gIGVuZHBvaW50X2lkOiBudW1iZXI7XG4gIGNsdXN0ZXJfaWQ6IG51bWJlcjtcbiAgY2x1c3Rlcl90eXBlOiBzdHJpbmc7XG4gIGF0dHJpYnV0ZTogbnVtYmVyO1xuICBtYW51ZmFjdHVyZXI/OiBudW1iZXI7XG59XG5cbmV4cG9ydCBjb25zdCByZWNvbmZpZ3VyZU5vZGUgPSAoXG4gIGhhc3M6IEhvbWVBc3Npc3RhbnQsXG4gIGllZWVBZGRyZXNzOiBzdHJpbmdcbik6IFByb21pc2U8dm9pZD4gPT5cbiAgaGFzcy5jYWxsV1Moe1xuICAgIHR5cGU6IFwiemhhL2RldmljZXMvcmVjb25maWd1cmVcIixcbiAgICBpZWVlOiBpZWVlQWRkcmVzcyxcbiAgfSk7XG5cbmV4cG9ydCBjb25zdCBmZXRjaEF0dHJpYnV0ZXNGb3JDbHVzdGVyID0gKFxuICBoYXNzOiBIb21lQXNzaXN0YW50LFxuICBpZWVlQWRkcmVzczogc3RyaW5nLFxuICBlbmRwb2ludElkOiBudW1iZXIsXG4gIGNsdXN0ZXJJZDogbnVtYmVyLFxuICBjbHVzdGVyVHlwZTogc3RyaW5nXG4pOiBQcm9taXNlPEF0dHJpYnV0ZVtdPiA9PlxuICBoYXNzLmNhbGxXUyh7XG4gICAgdHlwZTogXCJ6aGEvZGV2aWNlcy9jbHVzdGVycy9hdHRyaWJ1dGVzXCIsXG4gICAgaWVlZTogaWVlZUFkZHJlc3MsXG4gICAgZW5kcG9pbnRfaWQ6IGVuZHBvaW50SWQsXG4gICAgY2x1c3Rlcl9pZDogY2x1c3RlcklkLFxuICAgIGNsdXN0ZXJfdHlwZTogY2x1c3RlclR5cGUsXG4gIH0pO1xuXG5leHBvcnQgY29uc3QgZmV0Y2hEZXZpY2VzID0gKGhhc3M6IEhvbWVBc3Npc3RhbnQpOiBQcm9taXNlPFpIQURldmljZVtdPiA9PlxuICBoYXNzLmNhbGxXUyh7XG4gICAgdHlwZTogXCJ6aGEvZGV2aWNlc1wiLFxuICB9KTtcblxuZXhwb3J0IGNvbnN0IGZldGNoWkhBRGV2aWNlID0gKFxuICBoYXNzOiBIb21lQXNzaXN0YW50LFxuICBpZWVlQWRkcmVzczogc3RyaW5nXG4pOiBQcm9taXNlPFpIQURldmljZT4gPT5cbiAgaGFzcy5jYWxsV1Moe1xuICAgIHR5cGU6IFwiemhhL2RldmljZVwiLFxuICAgIGllZWU6IGllZWVBZGRyZXNzLFxuICB9KTtcblxuZXhwb3J0IGNvbnN0IGZldGNoQmluZGFibGVEZXZpY2VzID0gKFxuICBoYXNzOiBIb21lQXNzaXN0YW50LFxuICBpZWVlQWRkcmVzczogc3RyaW5nXG4pOiBQcm9taXNlPFpIQURldmljZVtdPiA9PlxuICBoYXNzLmNhbGxXUyh7XG4gICAgdHlwZTogXCJ6aGEvZGV2aWNlcy9iaW5kYWJsZVwiLFxuICAgIGllZWU6IGllZWVBZGRyZXNzLFxuICB9KTtcblxuZXhwb3J0IGNvbnN0IGJpbmREZXZpY2VzID0gKFxuICBoYXNzOiBIb21lQXNzaXN0YW50LFxuICBzb3VyY2VJRUVFOiBzdHJpbmcsXG4gIHRhcmdldElFRUU6IHN0cmluZ1xuKTogUHJvbWlzZTx2b2lkPiA9PlxuICBoYXNzLmNhbGxXUyh7XG4gICAgdHlwZTogXCJ6aGEvZGV2aWNlcy9iaW5kXCIsXG4gICAgc291cmNlX2llZWU6IHNvdXJjZUlFRUUsXG4gICAgdGFyZ2V0X2llZWU6IHRhcmdldElFRUUsXG4gIH0pO1xuXG5leHBvcnQgY29uc3QgdW5iaW5kRGV2aWNlcyA9IChcbiAgaGFzczogSG9tZUFzc2lzdGFudCxcbiAgc291cmNlSUVFRTogc3RyaW5nLFxuICB0YXJnZXRJRUVFOiBzdHJpbmdcbik6IFByb21pc2U8dm9pZD4gPT5cbiAgaGFzcy5jYWxsV1Moe1xuICAgIHR5cGU6IFwiemhhL2RldmljZXMvdW5iaW5kXCIsXG4gICAgc291cmNlX2llZWU6IHNvdXJjZUlFRUUsXG4gICAgdGFyZ2V0X2llZWU6IHRhcmdldElFRUUsXG4gIH0pO1xuXG5leHBvcnQgY29uc3QgcmVhZEF0dHJpYnV0ZVZhbHVlID0gKFxuICBoYXNzOiBIb21lQXNzaXN0YW50LFxuICBkYXRhOiBSZWFkQXR0cmlidXRlU2VydmljZURhdGFcbik6IFByb21pc2U8c3RyaW5nPiA9PiB7XG4gIHJldHVybiBoYXNzLmNhbGxXUyh7XG4gICAgLi4uZGF0YSxcbiAgICB0eXBlOiBcInpoYS9kZXZpY2VzL2NsdXN0ZXJzL2F0dHJpYnV0ZXMvdmFsdWVcIixcbiAgfSk7XG59O1xuXG5leHBvcnQgY29uc3QgZmV0Y2hDb21tYW5kc0ZvckNsdXN0ZXIgPSAoXG4gIGhhc3M6IEhvbWVBc3Npc3RhbnQsXG4gIGllZWVBZGRyZXNzOiBzdHJpbmcsXG4gIGVuZHBvaW50SWQ6IG51bWJlcixcbiAgY2x1c3RlcklkOiBudW1iZXIsXG4gIGNsdXN0ZXJUeXBlOiBzdHJpbmdcbik6IFByb21pc2U8Q29tbWFuZFtdPiA9PlxuICBoYXNzLmNhbGxXUyh7XG4gICAgdHlwZTogXCJ6aGEvZGV2aWNlcy9jbHVzdGVycy9jb21tYW5kc1wiLFxuICAgIGllZWU6IGllZWVBZGRyZXNzLFxuICAgIGVuZHBvaW50X2lkOiBlbmRwb2ludElkLFxuICAgIGNsdXN0ZXJfaWQ6IGNsdXN0ZXJJZCxcbiAgICBjbHVzdGVyX3R5cGU6IGNsdXN0ZXJUeXBlLFxuICB9KTtcblxuZXhwb3J0IGNvbnN0IGZldGNoQ2x1c3RlcnNGb3JaaGFOb2RlID0gKFxuICBoYXNzOiBIb21lQXNzaXN0YW50LFxuICBpZWVlQWRkcmVzczogc3RyaW5nXG4pOiBQcm9taXNlPENsdXN0ZXJbXT4gPT5cbiAgaGFzcy5jYWxsV1Moe1xuICAgIHR5cGU6IFwiemhhL2RldmljZXMvY2x1c3RlcnNcIixcbiAgICBpZWVlOiBpZWVlQWRkcmVzcyxcbiAgfSk7XG4iLCJpbXBvcnQgeyBaSEFEZXZpY2UgfSBmcm9tIFwiLi4vLi4vLi4vZGF0YS96aGFcIjtcblxuZXhwb3J0IGNvbnN0IGZvcm1hdEFzUGFkZGVkSGV4ID0gKHZhbHVlOiBzdHJpbmcgfCBudW1iZXIpOiBzdHJpbmcgPT4ge1xuICBsZXQgaGV4ID0gdmFsdWU7XG4gIGlmICh0eXBlb2YgdmFsdWUgPT09IFwic3RyaW5nXCIpIHtcbiAgICBoZXggPSBwYXJzZUludCh2YWx1ZSwgMTYpO1xuICB9XG4gIHJldHVybiBcIjB4XCIgKyBoZXgudG9TdHJpbmcoMTYpLnBhZFN0YXJ0KDQsIFwiMFwiKTtcbn07XG5cbmV4cG9ydCBjb25zdCBzb3J0WkhBRGV2aWNlcyA9IChhOiBaSEFEZXZpY2UsIGI6IFpIQURldmljZSk6IG51bWJlciA9PiB7XG4gIGNvbnN0IG5hbWVBID0gYS51c2VyX2dpdmVuX25hbWUgPyBhLnVzZXJfZ2l2ZW5fbmFtZSA6IGEubmFtZTtcbiAgY29uc3QgbmFtZWIgPSBiLnVzZXJfZ2l2ZW5fbmFtZSA/IGIudXNlcl9naXZlbl9uYW1lIDogYi5uYW1lO1xuICByZXR1cm4gbmFtZUEubG9jYWxlQ29tcGFyZShuYW1lYik7XG59O1xuIiwiaW1wb3J0IFwiLi4vLi4vLi4vY29tcG9uZW50cy9idXR0b25zL2hhLWNhbGwtc2VydmljZS1idXR0b25cIjtcbmltcG9ydCBcIi4uLy4uLy4uL2NvbXBvbmVudHMvaGEtc2VydmljZS1kZXNjcmlwdGlvblwiO1xuaW1wb3J0IFwiLi4vLi4vLi4vY29tcG9uZW50cy9lbnRpdHkvc3RhdGUtYmFkZ2VcIjtcbmltcG9ydCBcIi4uLy4uLy4uL2NvbXBvbmVudHMvaGEtY2FyZFwiO1xuaW1wb3J0IFwiQG1hdGVyaWFsL213Yy1idXR0b25cIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWRyb3Bkb3duLW1lbnUvcGFwZXItZHJvcGRvd24tbWVudVwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItaW5wdXQvcGFwZXItaW5wdXRcIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWl0ZW0vcGFwZXItaWNvbi1pdGVtXCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1pdGVtL3BhcGVyLWl0ZW1cIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWl0ZW0vcGFwZXItaXRlbS1ib2R5XCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1saXN0Ym94L3BhcGVyLWxpc3Rib3hcIjtcblxuaW1wb3J0IHtcbiAgY3NzLFxuICBDU1NSZXN1bHQsXG4gIGN1c3RvbUVsZW1lbnQsXG4gIGh0bWwsXG4gIExpdEVsZW1lbnQsXG4gIHByb3BlcnR5LFxuICBQcm9wZXJ0eVZhbHVlcyxcbiAgVGVtcGxhdGVSZXN1bHQsXG59IGZyb20gXCJsaXQtZWxlbWVudFwiO1xuXG5pbXBvcnQgeyBmaXJlRXZlbnQgfSBmcm9tIFwiLi4vLi4vLi4vY29tbW9uL2RvbS9maXJlX2V2ZW50XCI7XG5pbXBvcnQge1xuICBBcmVhUmVnaXN0cnlFbnRyeSxcbiAgc3Vic2NyaWJlQXJlYVJlZ2lzdHJ5LFxufSBmcm9tIFwiLi4vLi4vLi4vZGF0YS9hcmVhX3JlZ2lzdHJ5XCI7XG5pbXBvcnQge1xuICBEZXZpY2VSZWdpc3RyeUVudHJ5TXV0YWJsZVBhcmFtcyxcbiAgdXBkYXRlRGV2aWNlUmVnaXN0cnlFbnRyeSxcbn0gZnJvbSBcIi4uLy4uLy4uL2RhdGEvZGV2aWNlX3JlZ2lzdHJ5XCI7XG5pbXBvcnQge1xuICByZWNvbmZpZ3VyZU5vZGUsXG4gIFpIQURldmljZSxcbiAgWkhBRW50aXR5UmVmZXJlbmNlLFxufSBmcm9tIFwiLi4vLi4vLi4vZGF0YS96aGFcIjtcbmltcG9ydCB7IGhhU3R5bGUgfSBmcm9tIFwiLi4vLi4vLi4vcmVzb3VyY2VzL3N0eWxlc1wiO1xuaW1wb3J0IHsgSG9tZUFzc2lzdGFudCB9IGZyb20gXCIuLi8uLi8uLi90eXBlc1wiO1xuaW1wb3J0IHsgSXRlbVNlbGVjdGVkRXZlbnQsIE5vZGVTZXJ2aWNlRGF0YSB9IGZyb20gXCIuL3R5cGVzXCI7XG5pbXBvcnQgeyBuYXZpZ2F0ZSB9IGZyb20gXCIuLi8uLi8uLi9jb21tb24vbmF2aWdhdGVcIjtcbmltcG9ydCB7IFVuc3Vic2NyaWJlRnVuYywgSGFzc0V2ZW50IH0gZnJvbSBcImhvbWUtYXNzaXN0YW50LWpzLXdlYnNvY2tldFwiO1xuaW1wb3J0IHsgZm9ybWF0QXNQYWRkZWRIZXggfSBmcm9tIFwiLi9mdW5jdGlvbnNcIjtcbmltcG9ydCB7IGNvbXB1dGVTdGF0ZU5hbWUgfSBmcm9tIFwiLi4vLi4vLi4vY29tbW9uL2VudGl0eS9jb21wdXRlX3N0YXRlX25hbWVcIjtcblxuZGVjbGFyZSBnbG9iYWwge1xuICAvLyBmb3IgZmlyZSBldmVudFxuICBpbnRlcmZhY2UgSEFTU0RvbUV2ZW50cyB7XG4gICAgXCJ6aGEtZGV2aWNlLXJlbW92ZWRcIjoge1xuICAgICAgZGV2aWNlPzogWkhBRGV2aWNlO1xuICAgIH07XG4gIH1cbn1cblxuQGN1c3RvbUVsZW1lbnQoXCJ6aGEtZGV2aWNlLWNhcmRcIilcbmNsYXNzIFpIQURldmljZUNhcmQgZXh0ZW5kcyBMaXRFbGVtZW50IHtcbiAgQHByb3BlcnR5KCkgcHVibGljIGhhc3MhOiBIb21lQXNzaXN0YW50O1xuICBAcHJvcGVydHkoKSBwdWJsaWMgZGV2aWNlPzogWkhBRGV2aWNlO1xuICBAcHJvcGVydHkoeyB0eXBlOiBCb29sZWFuIH0pIHB1YmxpYyBuYXJyb3c/OiBib29sZWFuO1xuICBAcHJvcGVydHkoeyB0eXBlOiBCb29sZWFuIH0pIHB1YmxpYyBzaG93SGVscD86IGJvb2xlYW4gPSBmYWxzZTtcbiAgQHByb3BlcnR5KHsgdHlwZTogQm9vbGVhbiB9KSBwdWJsaWMgc2hvd0FjdGlvbnM/OiBib29sZWFuO1xuICBAcHJvcGVydHkoeyB0eXBlOiBCb29sZWFuIH0pIHB1YmxpYyBpc0pvaW5QYWdlPzogYm9vbGVhbjtcbiAgQHByb3BlcnR5KCkgcHJpdmF0ZSBfc2VydmljZURhdGE/OiBOb2RlU2VydmljZURhdGE7XG4gIEBwcm9wZXJ0eSgpIHByaXZhdGUgX2FyZWFzOiBBcmVhUmVnaXN0cnlFbnRyeVtdID0gW107XG4gIEBwcm9wZXJ0eSgpIHByaXZhdGUgX3NlbGVjdGVkQXJlYUluZGV4OiBudW1iZXIgPSAtMTtcbiAgQHByb3BlcnR5KCkgcHJpdmF0ZSBfdXNlckdpdmVuTmFtZT86IHN0cmluZztcbiAgcHJpdmF0ZSBfdW5zdWJBcmVhcz86IFVuc3Vic2NyaWJlRnVuYztcbiAgcHJpdmF0ZSBfdW5zdWJFbnRpdGllcz86IFVuc3Vic2NyaWJlRnVuYztcblxuICBwdWJsaWMgZGlzY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgc3VwZXIuZGlzY29ubmVjdGVkQ2FsbGJhY2soKTtcbiAgICBpZiAodGhpcy5fdW5zdWJBcmVhcykge1xuICAgICAgdGhpcy5fdW5zdWJBcmVhcygpO1xuICAgIH1cbiAgICBpZiAodGhpcy5fdW5zdWJFbnRpdGllcykge1xuICAgICAgdGhpcy5fdW5zdWJFbnRpdGllcygpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICBzdXBlci5jb25uZWN0ZWRDYWxsYmFjaygpO1xuICAgIHRoaXMuX3Vuc3ViQXJlYXMgPSBzdWJzY3JpYmVBcmVhUmVnaXN0cnkodGhpcy5oYXNzLmNvbm5lY3Rpb24sIChhcmVhcykgPT4ge1xuICAgICAgdGhpcy5fYXJlYXMgPSBhcmVhcztcbiAgICB9KTtcbiAgICB0aGlzLmhhc3MuY29ubmVjdGlvblxuICAgICAgLnN1YnNjcmliZUV2ZW50cygoZXZlbnQ6IEhhc3NFdmVudCkgPT4ge1xuICAgICAgICBpZiAodGhpcy5kZXZpY2UpIHtcbiAgICAgICAgICB0aGlzLmRldmljZSEuZW50aXRpZXMuZm9yRWFjaCgoZGV2aWNlRW50aXR5KSA9PiB7XG4gICAgICAgICAgICBpZiAoZXZlbnQuZGF0YS5vbGRfZW50aXR5X2lkID09PSBkZXZpY2VFbnRpdHkuZW50aXR5X2lkKSB7XG4gICAgICAgICAgICAgIGRldmljZUVudGl0eS5lbnRpdHlfaWQgPSBldmVudC5kYXRhLmVudGl0eV9pZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSwgXCJlbnRpdHlfcmVnaXN0cnlfdXBkYXRlZFwiKVxuICAgICAgLnRoZW4oKHVuc3ViKSA9PiAodGhpcy5fdW5zdWJFbnRpdGllcyA9IHVuc3ViKSk7XG4gIH1cblxuICBwcm90ZWN0ZWQgZmlyc3RVcGRhdGVkKGNoYW5nZWRQcm9wZXJ0aWVzOiBQcm9wZXJ0eVZhbHVlcyk6IHZvaWQge1xuICAgIHN1cGVyLmZpcnN0VXBkYXRlZChjaGFuZ2VkUHJvcGVydGllcyk7XG4gICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKFwiaGFzcy1zZXJ2aWNlLWNhbGxlZFwiLCAoZXYpID0+XG4gICAgICB0aGlzLnNlcnZpY2VDYWxsZWQoZXYpXG4gICAgKTtcbiAgICB0aGlzLl9zZXJ2aWNlRGF0YSA9IHtcbiAgICAgIGllZWVfYWRkcmVzczogdGhpcy5kZXZpY2UhLmllZWUsXG4gICAgfTtcbiAgfVxuXG4gIHByb3RlY3RlZCB1cGRhdGVkKGNoYW5nZWRQcm9wZXJ0aWVzOiBQcm9wZXJ0eVZhbHVlcyk6IHZvaWQge1xuICAgIGlmIChjaGFuZ2VkUHJvcGVydGllcy5oYXMoXCJkZXZpY2VcIikpIHtcbiAgICAgIGlmICghdGhpcy5fYXJlYXMgfHwgIXRoaXMuZGV2aWNlIHx8ICF0aGlzLmRldmljZS5hcmVhX2lkKSB7XG4gICAgICAgIHRoaXMuX3NlbGVjdGVkQXJlYUluZGV4ID0gMDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX3NlbGVjdGVkQXJlYUluZGV4ID1cbiAgICAgICAgICB0aGlzLl9hcmVhcy5maW5kSW5kZXgoXG4gICAgICAgICAgICAoYXJlYSkgPT4gYXJlYS5hcmVhX2lkID09PSB0aGlzLmRldmljZSEuYXJlYV9pZFxuICAgICAgICAgICkgKyAxO1xuICAgICAgfVxuICAgICAgdGhpcy5fdXNlckdpdmVuTmFtZSA9IHRoaXMuZGV2aWNlIS51c2VyX2dpdmVuX25hbWU7XG4gICAgfVxuICAgIHN1cGVyLnVwZGF0ZShjaGFuZ2VkUHJvcGVydGllcyk7XG4gIH1cblxuICBwcm90ZWN0ZWQgc2VydmljZUNhbGxlZChldik6IHZvaWQge1xuICAgIC8vIENoZWNrIGlmIHRoaXMgaXMgZm9yIHVzXG4gICAgaWYgKGV2LmRldGFpbC5zdWNjZXNzICYmIGV2LmRldGFpbC5zZXJ2aWNlID09PSBcInJlbW92ZVwiKSB7XG4gICAgICBmaXJlRXZlbnQodGhpcywgXCJ6aGEtZGV2aWNlLXJlbW92ZWRcIiwge1xuICAgICAgICBkZXZpY2U6IHRoaXMuZGV2aWNlLFxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgcHJvdGVjdGVkIHJlbmRlcigpOiBUZW1wbGF0ZVJlc3VsdCB8IHZvaWQge1xuICAgIHJldHVybiBodG1sYFxuICAgICAgPGhhLWNhcmQgaGVhZGVyPVwiJHt0aGlzLmlzSm9pblBhZ2UgPyB0aGlzLmRldmljZSEubmFtZSA6IFwiXCJ9XCI+XG4gICAgICAgICR7XG4gICAgICAgICAgdGhpcy5pc0pvaW5QYWdlXG4gICAgICAgICAgICA/IGh0bWxgXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImluZm9cIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RlbFwiPiR7dGhpcy5kZXZpY2UhLm1vZGVsfTwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1hbnVmXCI+XG4gICAgICAgICAgICAgICAgICAgICR7dGhpcy5oYXNzIS5sb2NhbGl6ZShcbiAgICAgICAgICAgICAgICAgICAgICBcInVpLmRpYWxvZ3MuemhhX2RldmljZV9pbmZvLm1hbnVmXCIsXG4gICAgICAgICAgICAgICAgICAgICAgXCJtYW51ZmFjdHVyZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRldmljZSEubWFudWZhY3R1cmVyXG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgYFxuICAgICAgICAgICAgOiBcIlwiXG4gICAgICAgIH1cbiAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtY29udGVudFwiPlxuICAgICAgICAgIDxkbD5cbiAgICAgICAgICAgIDxkdD5JRUVFOjwvZHQ+XG4gICAgICAgICAgICA8ZGQgY2xhc3M9XCJ6aGEtaW5mb1wiPiR7dGhpcy5kZXZpY2UhLmllZWV9PC9kZD5cbiAgICAgICAgICAgIDxkdD5Od2s6PC9kdD5cbiAgICAgICAgICAgIDxkZCBjbGFzcz1cInpoYS1pbmZvXCI+JHtmb3JtYXRBc1BhZGRlZEhleCh0aGlzLmRldmljZSEubndrKX08L2RkPlxuICAgICAgICAgICAgPGR0PkxRSTo8L2R0PlxuICAgICAgICAgICAgPGRkIGNsYXNzPVwiemhhLWluZm9cIj4ke3RoaXMuZGV2aWNlIS5scWkgfHxcbiAgICAgICAgICAgICAgdGhpcy5oYXNzIS5sb2NhbGl6ZShcInVpLmRpYWxvZ3MuemhhX2RldmljZV9pbmZvLnVua25vd25cIil9PC9kZD5cbiAgICAgICAgICAgIDxkdD5SU1NJOjwvZHQ+XG4gICAgICAgICAgICA8ZGQgY2xhc3M9XCJ6aGEtaW5mb1wiPiR7dGhpcy5kZXZpY2UhLnJzc2kgfHxcbiAgICAgICAgICAgICAgdGhpcy5oYXNzIS5sb2NhbGl6ZShcInVpLmRpYWxvZ3MuemhhX2RldmljZV9pbmZvLnVua25vd25cIil9PC9kZD5cbiAgICAgICAgICAgIDxkdD4ke3RoaXMuaGFzcyEubG9jYWxpemUoXG4gICAgICAgICAgICAgIFwidWkuZGlhbG9ncy56aGFfZGV2aWNlX2luZm8ubGFzdF9zZWVuXCJcbiAgICAgICAgICAgICl9OjwvZHQ+XG4gICAgICAgICAgICA8ZGQgY2xhc3M9XCJ6aGEtaW5mb1wiPiR7dGhpcy5kZXZpY2UhLmxhc3Rfc2VlbiB8fFxuICAgICAgICAgICAgICB0aGlzLmhhc3MhLmxvY2FsaXplKFwidWkuZGlhbG9ncy56aGFfZGV2aWNlX2luZm8udW5rbm93blwiKX08L2RkPlxuICAgICAgICAgICAgPGR0PiR7dGhpcy5oYXNzIS5sb2NhbGl6ZShcbiAgICAgICAgICAgICAgXCJ1aS5kaWFsb2dzLnpoYV9kZXZpY2VfaW5mby5wb3dlcl9zb3VyY2VcIlxuICAgICAgICAgICAgKX06PC9kdD5cbiAgICAgICAgICAgIDxkZCBjbGFzcz1cInpoYS1pbmZvXCI+JHt0aGlzLmRldmljZSEucG93ZXJfc291cmNlIHx8XG4gICAgICAgICAgICAgIHRoaXMuaGFzcyEubG9jYWxpemUoXCJ1aS5kaWFsb2dzLnpoYV9kZXZpY2VfaW5mby51bmtub3duXCIpfTwvZGQ+XG4gICAgICAgICAgICAke1xuICAgICAgICAgICAgICB0aGlzLmRldmljZSEucXVpcmtfYXBwbGllZFxuICAgICAgICAgICAgICAgID8gaHRtbGBcbiAgICAgICAgICAgICAgICAgICAgPGR0PlxuICAgICAgICAgICAgICAgICAgICAgICR7dGhpcy5oYXNzIS5sb2NhbGl6ZShcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidWkuZGlhbG9ncy56aGFfZGV2aWNlX2luZm8ucXVpcmtcIlxuICAgICAgICAgICAgICAgICAgICAgICl9OlxuICAgICAgICAgICAgICAgICAgICA8L2R0PlxuICAgICAgICAgICAgICAgICAgICA8ZGQgY2xhc3M9XCJ6aGEtaW5mb1wiPiR7dGhpcy5kZXZpY2UhLnF1aXJrX2NsYXNzfTwvZGQ+XG4gICAgICAgICAgICAgICAgICBgXG4gICAgICAgICAgICAgICAgOiBcIlwiXG4gICAgICAgICAgICB9XG4gICAgICAgICAgPC9kbD5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzcz1cImRldmljZS1lbnRpdGllc1wiPlxuICAgICAgICAgICR7dGhpcy5kZXZpY2UhLmVudGl0aWVzLm1hcChcbiAgICAgICAgICAgIChlbnRpdHkpID0+IGh0bWxgXG4gICAgICAgICAgICAgIDxwYXBlci1pY29uLWl0ZW1cbiAgICAgICAgICAgICAgICBAY2xpY2s9XCIke3RoaXMuX29wZW5Nb3JlSW5mb31cIlxuICAgICAgICAgICAgICAgIC5lbnRpdHk9XCIke2VudGl0eX1cIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPHN0YXRlLWJhZGdlXG4gICAgICAgICAgICAgICAgICAuc3RhdGVPYmo9XCIke3RoaXMuaGFzcyEuc3RhdGVzW2VudGl0eS5lbnRpdHlfaWRdfVwiXG4gICAgICAgICAgICAgICAgICBzbG90PVwiaXRlbS1pY29uXCJcbiAgICAgICAgICAgICAgICA+PC9zdGF0ZS1iYWRnZT5cbiAgICAgICAgICAgICAgICAkeyF0aGlzLmlzSm9pblBhZ2VcbiAgICAgICAgICAgICAgICAgID8gaHRtbGBcbiAgICAgICAgICAgICAgICAgICAgICA8cGFwZXItaXRlbS1ib2R5PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5hbWVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgJHt0aGlzLl9jb21wdXRlRW50aXR5TmFtZShlbnRpdHkpfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2Vjb25kYXJ5IGVudGl0eS1pZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAke2VudGl0eS5lbnRpdHlfaWR9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8L3BhcGVyLWl0ZW0tYm9keT5cbiAgICAgICAgICAgICAgICAgICAgYFxuICAgICAgICAgICAgICAgICAgOiBcIlwifVxuICAgICAgICAgICAgICA8L3BhcGVyLWljb24taXRlbT5cbiAgICAgICAgICAgIGBcbiAgICAgICAgICApfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImVkaXRhYmxlXCI+XG4gICAgICAgICAgPHBhcGVyLWlucHV0XG4gICAgICAgICAgICB0eXBlPVwic3RyaW5nXCJcbiAgICAgICAgICAgIEBjaGFuZ2U9XCIke3RoaXMuX3NhdmVDdXN0b21OYW1lfVwiXG4gICAgICAgICAgICAudmFsdWU9XCIke3RoaXMuX3VzZXJHaXZlbk5hbWV9XCJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiJHt0aGlzLmhhc3MhLmxvY2FsaXplKFxuICAgICAgICAgICAgICBcInVpLmRpYWxvZ3MuemhhX2RldmljZV9pbmZvLnpoYV9kZXZpY2VfY2FyZC5kZXZpY2VfbmFtZV9wbGFjZWhvbGRlclwiXG4gICAgICAgICAgICApfVwiXG4gICAgICAgICAgPjwvcGFwZXItaW5wdXQ+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwibm9kZS1waWNrZXJcIj5cbiAgICAgICAgICA8cGFwZXItZHJvcGRvd24tbWVudVxuICAgICAgICAgICAgbGFiZWw9XCIke3RoaXMuaGFzcyEubG9jYWxpemUoXG4gICAgICAgICAgICAgIFwidWkuZGlhbG9ncy56aGFfZGV2aWNlX2luZm8uemhhX2RldmljZV9jYXJkLmFyZWFfcGlja2VyX2xhYmVsXCJcbiAgICAgICAgICAgICl9XCJcbiAgICAgICAgICAgIGNsYXNzPVwiZmxleFwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPHBhcGVyLWxpc3Rib3hcbiAgICAgICAgICAgICAgc2xvdD1cImRyb3Bkb3duLWNvbnRlbnRcIlxuICAgICAgICAgICAgICAuc2VsZWN0ZWQ9XCIke3RoaXMuX3NlbGVjdGVkQXJlYUluZGV4fVwiXG4gICAgICAgICAgICAgIEBpcm9uLXNlbGVjdD1cIiR7dGhpcy5fc2VsZWN0ZWRBcmVhQ2hhbmdlZH1cIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8cGFwZXItaXRlbT5cbiAgICAgICAgICAgICAgICAke3RoaXMuaGFzcyEubG9jYWxpemUoXCJ1aS5kaWFsb2dzLnpoYV9kZXZpY2VfaW5mby5ub19hcmVhXCIpfVxuICAgICAgICAgICAgICA8L3BhcGVyLWl0ZW0+XG5cbiAgICAgICAgICAgICAgJHt0aGlzLl9hcmVhcy5tYXAoXG4gICAgICAgICAgICAgICAgKGVudHJ5KSA9PiBodG1sYFxuICAgICAgICAgICAgICAgICAgPHBhcGVyLWl0ZW0gYXJlYT1cIiR7ZW50cnl9XCI+JHtlbnRyeS5uYW1lfTwvcGFwZXItaXRlbT5cbiAgICAgICAgICAgICAgICBgXG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L3BhcGVyLWxpc3Rib3g+XG4gICAgICAgICAgPC9wYXBlci1kcm9wZG93bi1tZW51PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgJHtcbiAgICAgICAgICB0aGlzLnNob3dBY3Rpb25zXG4gICAgICAgICAgICA/IGh0bWxgXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtYWN0aW9uc1wiPlxuICAgICAgICAgICAgICAgICAgPG13Yy1idXR0b24gQGNsaWNrPVwiJHt0aGlzLl9vblJlY29uZmlndXJlTm9kZUNsaWNrfVwiPlxuICAgICAgICAgICAgICAgICAgICAke3RoaXMuaGFzcyEubG9jYWxpemUoXG4gICAgICAgICAgICAgICAgICAgICAgXCJ1aS5kaWFsb2dzLnpoYV9kZXZpY2VfaW5mby5idXR0b25zLnJlY29uZmlndXJlXCJcbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgIDwvbXdjLWJ1dHRvbj5cbiAgICAgICAgICAgICAgICAgICR7dGhpcy5zaG93SGVscFxuICAgICAgICAgICAgICAgICAgICA/IGh0bWxgXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaGVscC10ZXh0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICR7dGhpcy5oYXNzIS5sb2NhbGl6ZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInVpLmRpYWxvZ3MuemhhX2RldmljZV9pbmZvLnNlcnZpY2VzLnJlY29uZmlndXJlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIGBcbiAgICAgICAgICAgICAgICAgICAgOiBcIlwifVxuXG4gICAgICAgICAgICAgICAgICA8aGEtY2FsbC1zZXJ2aWNlLWJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAuaGFzcz1cIiR7dGhpcy5oYXNzfVwiXG4gICAgICAgICAgICAgICAgICAgIGRvbWFpbj1cInpoYVwiXG4gICAgICAgICAgICAgICAgICAgIHNlcnZpY2U9XCJyZW1vdmVcIlxuICAgICAgICAgICAgICAgICAgICAuc2VydmljZURhdGE9XCIke3RoaXMuX3NlcnZpY2VEYXRhfVwiXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICR7dGhpcy5oYXNzIS5sb2NhbGl6ZShcbiAgICAgICAgICAgICAgICAgICAgICBcInVpLmRpYWxvZ3MuemhhX2RldmljZV9pbmZvLmJ1dHRvbnMucmVtb3ZlXCJcbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgIDwvaGEtY2FsbC1zZXJ2aWNlLWJ1dHRvbj5cbiAgICAgICAgICAgICAgICAgICR7dGhpcy5zaG93SGVscFxuICAgICAgICAgICAgICAgICAgICA/IGh0bWxgXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaGVscC10ZXh0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICR7dGhpcy5oYXNzIS5sb2NhbGl6ZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInVpLmRpYWxvZ3MuemhhX2RldmljZV9pbmZvLnNlcnZpY2VzLnJlbW92ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICBgXG4gICAgICAgICAgICAgICAgICAgIDogXCJcIn1cbiAgICAgICAgICAgICAgICAgICR7dGhpcy5kZXZpY2UhLnBvd2VyX3NvdXJjZSA9PT0gXCJNYWluc1wiXG4gICAgICAgICAgICAgICAgICAgID8gaHRtbGBcbiAgICAgICAgICAgICAgICAgICAgICAgIDxtd2MtYnV0dG9uIEBjbGljaz0ke3RoaXMuX29uQWRkRGV2aWNlc0NsaWNrfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgJHt0aGlzLmhhc3MhLmxvY2FsaXplKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLnpoYS5jb21tb24uYWRkX2RldmljZXNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9td2MtYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgJHt0aGlzLnNob3dIZWxwXG4gICAgICAgICAgICAgICAgICAgICAgICAgID8gaHRtbGBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoYS1zZXJ2aWNlLWRlc2NyaXB0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5oYXNzPVwiJHt0aGlzLmhhc3N9XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9tYWluPVwiemhhXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VydmljZT1cInBlcm1pdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiaGVscC10ZXh0MlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIlwifVxuICAgICAgICAgICAgICAgICAgICAgIGBcbiAgICAgICAgICAgICAgICAgICAgOiBcIlwifVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICBgXG4gICAgICAgICAgICA6IFwiXCJcbiAgICAgICAgfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvaGEtY2FyZD5cbiAgICBgO1xuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBfb25SZWNvbmZpZ3VyZU5vZGVDbGljaygpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBpZiAodGhpcy5oYXNzKSB7XG4gICAgICBhd2FpdCByZWNvbmZpZ3VyZU5vZGUodGhpcy5oYXNzLCB0aGlzLmRldmljZSEuaWVlZSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfY29tcHV0ZUVudGl0eU5hbWUoZW50aXR5OiBaSEFFbnRpdHlSZWZlcmVuY2UpOiBzdHJpbmcge1xuICAgIGlmICh0aGlzLmhhc3Muc3RhdGVzW2VudGl0eS5lbnRpdHlfaWRdKSB7XG4gICAgICByZXR1cm4gY29tcHV0ZVN0YXRlTmFtZSh0aGlzLmhhc3Muc3RhdGVzW2VudGl0eS5lbnRpdHlfaWRdKTtcbiAgICB9XG4gICAgcmV0dXJuIGVudGl0eS5uYW1lO1xuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBfc2F2ZUN1c3RvbU5hbWUoZXZlbnQpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBpZiAodGhpcy5oYXNzKSB7XG4gICAgICBjb25zdCB2YWx1ZXM6IERldmljZVJlZ2lzdHJ5RW50cnlNdXRhYmxlUGFyYW1zID0ge1xuICAgICAgICBuYW1lX2J5X3VzZXI6IGV2ZW50LnRhcmdldC52YWx1ZSxcbiAgICAgICAgYXJlYV9pZDogdGhpcy5kZXZpY2UhLmFyZWFfaWQgPyB0aGlzLmRldmljZSEuYXJlYV9pZCA6IHVuZGVmaW5lZCxcbiAgICAgIH07XG5cbiAgICAgIGF3YWl0IHVwZGF0ZURldmljZVJlZ2lzdHJ5RW50cnkoXG4gICAgICAgIHRoaXMuaGFzcyxcbiAgICAgICAgdGhpcy5kZXZpY2UhLmRldmljZV9yZWdfaWQsXG4gICAgICAgIHZhbHVlc1xuICAgICAgKTtcblxuICAgICAgdGhpcy5kZXZpY2UhLnVzZXJfZ2l2ZW5fbmFtZSA9IGV2ZW50LnRhcmdldC52YWx1ZTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9vcGVuTW9yZUluZm8oZXY6IE1vdXNlRXZlbnQpOiB2b2lkIHtcbiAgICBmaXJlRXZlbnQodGhpcywgXCJoYXNzLW1vcmUtaW5mb1wiLCB7XG4gICAgICBlbnRpdHlJZDogKGV2LmN1cnJlbnRUYXJnZXQgYXMgYW55KS5lbnRpdHkuZW50aXR5X2lkLFxuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBfc2VsZWN0ZWRBcmVhQ2hhbmdlZChldmVudDogSXRlbVNlbGVjdGVkRXZlbnQpIHtcbiAgICBpZiAoIXRoaXMuZGV2aWNlIHx8ICF0aGlzLl9hcmVhcykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLl9zZWxlY3RlZEFyZWFJbmRleCA9IGV2ZW50IS50YXJnZXQhLnNlbGVjdGVkO1xuICAgIGNvbnN0IGFyZWEgPSB0aGlzLl9hcmVhc1t0aGlzLl9zZWxlY3RlZEFyZWFJbmRleCAtIDFdOyAvLyBhY2NvdW50IGZvciBObyBBcmVhXG4gICAgaWYgKFxuICAgICAgKCFhcmVhICYmICF0aGlzLmRldmljZS5hcmVhX2lkKSB8fFxuICAgICAgKGFyZWEgJiYgYXJlYS5hcmVhX2lkID09PSB0aGlzLmRldmljZS5hcmVhX2lkKVxuICAgICkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IG5ld0FyZWFJZCA9IGFyZWEgPyBhcmVhLmFyZWFfaWQgOiB1bmRlZmluZWQ7XG4gICAgYXdhaXQgdXBkYXRlRGV2aWNlUmVnaXN0cnlFbnRyeSh0aGlzLmhhc3MhLCB0aGlzLmRldmljZS5kZXZpY2VfcmVnX2lkLCB7XG4gICAgICBhcmVhX2lkOiBuZXdBcmVhSWQsXG4gICAgICBuYW1lX2J5X3VzZXI6IHRoaXMuZGV2aWNlIS51c2VyX2dpdmVuX25hbWUsXG4gICAgfSk7XG4gICAgdGhpcy5kZXZpY2UhLmFyZWFfaWQgPSBuZXdBcmVhSWQ7XG4gIH1cblxuICBwcml2YXRlIF9vbkFkZERldmljZXNDbGljaygpIHtcbiAgICBuYXZpZ2F0ZSh0aGlzLCBcImFkZC9cIiArIHRoaXMuZGV2aWNlIS5pZWVlKTtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgc3R5bGVzKCk6IENTU1Jlc3VsdFtdIHtcbiAgICByZXR1cm4gW1xuICAgICAgaGFTdHlsZSxcbiAgICAgIGNzc2BcbiAgICAgICAgOmhvc3QoOm5vdChbbmFycm93XSkpIC5kZXZpY2UtZW50aXRpZXMge1xuICAgICAgICAgIG1heC1oZWlnaHQ6IDIyNXB4O1xuICAgICAgICAgIG92ZXJmbG93OiBhdXRvO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgICAgICAgIHBhZGRpbmc6IDRweDtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGxlZnQ7XG4gICAgICAgIH1cbiAgICAgICAgaGEtY2FyZCB7XG4gICAgICAgICAgZmxleDogMSAwIDEwMCU7XG4gICAgICAgICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gICAgICAgICAgbWluLXdpZHRoOiA0MjVweDtcbiAgICAgICAgfVxuICAgICAgICAuZGV2aWNlIHtcbiAgICAgICAgICB3aWR0aDogMzAlO1xuICAgICAgICB9XG4gICAgICAgIC5kZXZpY2UgLm5hbWUge1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICB9XG4gICAgICAgIC5kZXZpY2UgLm1hbnVmIHtcbiAgICAgICAgICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5LXRleHQtY29sb3IpO1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgICAgIH1cbiAgICAgICAgLmV4dHJhLWluZm8ge1xuICAgICAgICAgIG1hcmdpbi10b3A6IDhweDtcbiAgICAgICAgfVxuICAgICAgICAubWFudWYsXG4gICAgICAgIC56aGEtaW5mbyxcbiAgICAgICAgLmVudGl0eS1pZCB7XG4gICAgICAgICAgY29sb3I6IHZhcigtLXNlY29uZGFyeS10ZXh0LWNvbG9yKTtcbiAgICAgICAgfVxuICAgICAgICAuaW5mbyB7XG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDE2cHg7XG4gICAgICAgIH1cbiAgICAgICAgZGwge1xuICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxMjVweCAxZnI7XG4gICAgICAgIH1cbiAgICAgICAgZGwgZHQge1xuICAgICAgICAgIHBhZGRpbmctbGVmdDogMTJweDtcbiAgICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICB9XG4gICAgICAgIGRsIGRkIHtcbiAgICAgICAgICBtYXgtd2lkdGg6IDIwMHB4O1xuICAgICAgICB9XG4gICAgICAgIHBhcGVyLWljb24taXRlbSB7XG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgIHBhZGRpbmctdG9wOiA0cHg7XG4gICAgICAgICAgcGFkZGluZy1ib3R0b206IDRweDtcbiAgICAgICAgfVxuICAgICAgICAuZWRpdGFibGUge1xuICAgICAgICAgIHBhZGRpbmctbGVmdDogMjhweDtcbiAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAyOHB4O1xuICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICAgICAgICB9XG4gICAgICAgIC5oZWxwLXRleHQge1xuICAgICAgICAgIGNvbG9yOiBncmV5O1xuICAgICAgICAgIHBhZGRpbmc6IDE2cHg7XG4gICAgICAgIH1cbiAgICAgICAgLmZsZXgge1xuICAgICAgICAgIC1tcy1mbGV4OiAxIDEgMC4wMDAwMDAwMDFweDtcbiAgICAgICAgICAtd2Via2l0LWZsZXg6IDE7XG4gICAgICAgICAgZmxleDogMTtcbiAgICAgICAgICAtd2Via2l0LWZsZXgtYmFzaXM6IDAuMDAwMDAwMDAxcHg7XG4gICAgICAgICAgZmxleC1iYXNpczogMC4wMDAwMDAwMDFweDtcbiAgICAgICAgfVxuICAgICAgICAubm9kZS1waWNrZXIge1xuICAgICAgICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICAgICAgICAgIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIC1tcy1mbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAgIC13ZWJraXQtZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAgIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgLXdlYmtpdC1hbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgcGFkZGluZy1sZWZ0OiAyOHB4O1xuICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDI4cHg7XG4gICAgICAgICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gICAgICAgIH1cbiAgICAgIGAsXG4gICAgXTtcbiAgfVxufVxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBIVE1MRWxlbWVudFRhZ05hbWVNYXAge1xuICAgIFwiemhhLWRldmljZS1jYXJkXCI6IFpIQURldmljZUNhcmQ7XG4gIH1cbn1cbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFBQTs7Ozs7Ozs7Ozs7OztBQ1pBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQy9CQTtBQUNBO0FBRUE7QUFDQTtBQUVBOzs7O0FBR0E7Ozs7Ozs7Ozs7Ozs7QUEwQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBOzs7QUF0RUE7QUFDQTtBQVFBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBSUE7QUFDQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBREE7QUFJQTtBQUNBO0FBREE7QUFJQTtBQUNBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFEQTtBQXZCQTtBQTJCQTs7OztBQXhDQTtBQUNBO0FBeUVBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUtBO0FBSUE7QUFFQTtBQUFBO0FBQUE7O0FBZUE7QUFaQTtBQUtBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7O0FBUUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUFlQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBcEJBO0FBQ0E7QUFHQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7Ozs7QUFiQTtBQUNBO0FBdUJBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM0JBO0FBRUE7QUFDQTtBQVdBO0FBSUE7QUFBQTtBQUtBO0FBS0E7QUFBQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBTUE7QUFDQTtBQUdBO0FBQUE7QUFIQTtBQVVBO0FBSUE7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3REE7QUFDQTtBQW9CQTtBQUtBO0FBQUE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUdBO0FBQ0E7QUFBQTtBQURBO0FBSEE7QUFZQTtBQUlBO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBTUE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFNQTtBQUlBO0FBSUE7QUFFQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFRQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7Ozs7Ozs7Ozs7Ozs7QUNySkE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNkQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFXQTtBQUNBO0FBSUE7QUFJQTtBQUtBO0FBR0E7QUFFQTtBQUNBO0FBWUE7QUFBQTtBQUFBO0FBQUE7QUFJQTtBQUlBO0FBQ0E7O0FBK1lBO0FBMVlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFpQkE7QUFTQTtBQUdBO0FBR0E7QUFFQTtBQUdBO0FBRUE7QUFZQTtBQTZCQTtBQVNBO0FBT0E7QUFnQkE7QUFnRUE7QUE1S0E7QUFRQTtBQWNBO0FBR0E7QUFLQTtBQUtBO0FBR0E7QUFJQTtBQStCQTtBQVZBO0FBbURBO0FBS0E7QUFVQTtBQVVBO0FBVUE7QUFtQkE7QUE5Q0E7QUFJQTtBQWdCQTtBQUlBO0FBS0E7QUFJQTtBQVdBO0FBUkE7QUFrQkE7QUFFQTs7Ozs7QUFDQTtBQUNBOztBQUFBOzs7Ozs7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBQUE7QUFNQTs7Ozs7O0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBSEE7QUFJQTs7Ozs7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFtRkE7QUFDQTs7O0FBQUE7QUF0WkE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBVkE7QUFEQTtBQUNBO0FBd1pBO0FBQUE7Ozs7OztBIiwic291cmNlUm9vdCI6IiJ9