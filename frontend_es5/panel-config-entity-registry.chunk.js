(self["webpackJsonp"] = self["webpackJsonp"] || []).push([["panel-config-entity-registry"],{

/***/ "./src/common/entity/binary_sensor_icon.ts":
/*!*************************************************!*\
  !*** ./src/common/entity/binary_sensor_icon.ts ***!
  \*************************************************/
/*! exports provided: binarySensorIcon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "binarySensorIcon", function() { return binarySensorIcon; });
/** Return an icon representing a binary sensor state. */
var binarySensorIcon = function (state) {
    var activated = state.state && state.state === "off";
    switch (state.attributes.device_class) {
        case "battery":
            return activated ? "hass:battery" : "hass:battery-outline";
        case "cold":
            return activated ? "hass:thermometer" : "hass:snowflake";
        case "connectivity":
            return activated ? "hass:server-network-off" : "hass:server-network";
        case "door":
            return activated ? "hass:door-closed" : "hass:door-open";
        case "garage_door":
            return activated ? "hass:garage" : "hass:garage-open";
        case "gas":
        case "power":
        case "problem":
        case "safety":
        case "smoke":
            return activated ? "hass:shield-check" : "hass:alert";
        case "heat":
            return activated ? "hass:thermometer" : "hass:fire";
        case "light":
            return activated ? "hass:brightness-5" : "hass:brightness-7";
        case "lock":
            return activated ? "hass:lock" : "hass:lock-open";
        case "moisture":
            return activated ? "hass:water-off" : "hass:water";
        case "motion":
            return activated ? "hass:walk" : "hass:run";
        case "occupancy":
            return activated ? "hass:home-outline" : "hass:home";
        case "opening":
            return activated ? "hass:square" : "hass:square-outline";
        case "plug":
            return activated ? "hass:power-plug-off" : "hass:power-plug";
        case "presence":
            return activated ? "hass:home-outline" : "hass:home";
        case "sound":
            return activated ? "hass:music-note-off" : "hass:music-note";
        case "vibration":
            return activated ? "hass:crop-portrait" : "hass:vibrate";
        case "window":
            return activated ? "hass:window-closed" : "hass:window-open";
        default:
            return activated ? "hass:radiobox-blank" : "hass:checkbox-marked-circle";
    }
};


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

/***/ "./src/common/entity/cover_icon.ts":
/*!*****************************************!*\
  !*** ./src/common/entity/cover_icon.ts ***!
  \*****************************************/
/*! exports provided: coverIcon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "coverIcon", function() { return coverIcon; });
/* harmony import */ var _domain_icon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domain_icon */ "./src/common/entity/domain_icon.ts");

var coverIcon = function (state) {
    var open = state.state !== "closed";
    switch (state.attributes.device_class) {
        case "garage":
            return open ? "hass:garage-open" : "hass:garage";
        case "door":
            return open ? "hass:door-open" : "hass:door-closed";
        case "shutter":
            return open ? "hass:window-shutter-open" : "hass:window-shutter";
        case "blind":
            return open ? "hass:blinds-open" : "hass:blinds";
        case "window":
            return open ? "hass:window-open" : "hass:window-closed";
        default:
            return Object(_domain_icon__WEBPACK_IMPORTED_MODULE_0__["domainIcon"])("cover", state.state);
    }
};


/***/ }),

/***/ "./src/common/entity/domain_icon.ts":
/*!******************************************!*\
  !*** ./src/common/entity/domain_icon.ts ***!
  \******************************************/
/*! exports provided: domainIcon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "domainIcon", function() { return domainIcon; });
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../const */ "./src/common/const.ts");
/**
 * Return the icon to be used for a domain.
 *
 * Optionally pass in a state to influence the domain icon.
 */

var fixedIcons = {
    alert: "hass:alert",
    alexa: "hass:amazon-alexa",
    automation: "hass:playlist-play",
    calendar: "hass:calendar",
    camera: "hass:video",
    climate: "hass:thermostat",
    configurator: "hass:settings",
    conversation: "hass:text-to-speech",
    device_tracker: "hass:account",
    fan: "hass:fan",
    google_assistant: "hass:google-assistant",
    group: "hass:google-circles-communities",
    history_graph: "hass:chart-line",
    homeassistant: "hass:home-assistant",
    homekit: "hass:home-automation",
    image_processing: "hass:image-filter-frames",
    input_boolean: "hass:drawing",
    input_datetime: "hass:calendar-clock",
    input_number: "hass:ray-vertex",
    input_select: "hass:format-list-bulleted",
    input_text: "hass:textbox",
    light: "hass:lightbulb",
    mailbox: "hass:mailbox",
    notify: "hass:comment-alert",
    persistent_notification: "hass:bell",
    person: "hass:account",
    plant: "hass:flower",
    proximity: "hass:apple-safari",
    remote: "hass:remote",
    scene: "hass:google-pages",
    script: "hass:file-document",
    sensor: "hass:eye",
    simple_alarm: "hass:bell",
    sun: "hass:white-balance-sunny",
    switch: "hass:flash",
    timer: "hass:timer",
    updater: "hass:cloud-upload",
    vacuum: "hass:robot-vacuum",
    water_heater: "hass:thermometer",
    weather: "hass:weather-cloudy",
    weblink: "hass:open-in-new",
    zone: "hass:map-marker",
};
var domainIcon = function (domain, state) {
    if (domain in fixedIcons) {
        return fixedIcons[domain];
    }
    switch (domain) {
        case "alarm_control_panel":
            switch (state) {
                case "armed_home":
                    return "hass:bell-plus";
                case "armed_night":
                    return "hass:bell-sleep";
                case "disarmed":
                    return "hass:bell-outline";
                case "triggered":
                    return "hass:bell-ring";
                default:
                    return "hass:bell";
            }
        case "binary_sensor":
            return state && state === "off"
                ? "hass:radiobox-blank"
                : "hass:checkbox-marked-circle";
        case "cover":
            return state === "closed" ? "hass:window-closed" : "hass:window-open";
        case "lock":
            return state && state === "unlocked" ? "hass:lock-open" : "hass:lock";
        case "media_player":
            return state && state !== "off" && state !== "idle"
                ? "hass:cast-connected"
                : "hass:cast";
        case "zwave":
            switch (state) {
                case "dead":
                    return "hass:emoticon-dead";
                case "sleeping":
                    return "hass:sleep";
                case "initializing":
                    return "hass:timer-sand";
                default:
                    return "hass:z-wave";
            }
        default:
            // tslint:disable-next-line
            console.warn("Unable to find icon for domain " + domain + " (" + state + ")");
            return _const__WEBPACK_IMPORTED_MODULE_0__["DEFAULT_DOMAIN_ICON"];
    }
};


/***/ }),

/***/ "./src/common/entity/input_dateteime_icon.ts":
/*!***************************************************!*\
  !*** ./src/common/entity/input_dateteime_icon.ts ***!
  \***************************************************/
/*! exports provided: inputDateTimeIcon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inputDateTimeIcon", function() { return inputDateTimeIcon; });
/* harmony import */ var _domain_icon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domain_icon */ "./src/common/entity/domain_icon.ts");
/** Return an icon representing an input datetime state. */

var inputDateTimeIcon = function (state) {
    if (!state.attributes.has_date) {
        return "hass:clock";
    }
    if (!state.attributes.has_time) {
        return "hass:calendar";
    }
    return Object(_domain_icon__WEBPACK_IMPORTED_MODULE_0__["domainIcon"])("input_datetime");
};


/***/ }),

/***/ "./src/common/entity/sensor_icon.ts":
/*!******************************************!*\
  !*** ./src/common/entity/sensor_icon.ts ***!
  \******************************************/
/*! exports provided: sensorIcon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sensorIcon", function() { return sensorIcon; });
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../const */ "./src/common/const.ts");
/* harmony import */ var _domain_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./domain_icon */ "./src/common/entity/domain_icon.ts");


var fixedDeviceClassIcons = {
    humidity: "hass:water-percent",
    illuminance: "hass:brightness-5",
    temperature: "hass:thermometer",
    pressure: "hass:gauge",
    power: "hass:flash",
    signal_strength: "hass:wifi",
};
var sensorIcon = function (state) {
    var dclass = state.attributes.device_class;
    if (dclass && dclass in fixedDeviceClassIcons) {
        return fixedDeviceClassIcons[dclass];
    }
    if (dclass === "battery") {
        var battery = Number(state.state);
        if (isNaN(battery)) {
            return "hass:battery-unknown";
        }
        var batteryRound = Math.round(battery / 10) * 10;
        if (batteryRound >= 100) {
            return "hass:battery";
        }
        if (batteryRound <= 0) {
            return "hass:battery-alert";
        }
        // Will return one of the following icons: (listed so extractor picks up)
        // hass:battery-10
        // hass:battery-20
        // hass:battery-30
        // hass:battery-40
        // hass:battery-50
        // hass:battery-60
        // hass:battery-70
        // hass:battery-80
        // hass:battery-90
        // We obscure 'hass' in iconname so this name does not get picked up
        return "hass" + ":battery-" + batteryRound;
    }
    var unit = state.attributes.unit_of_measurement;
    if (unit === _const__WEBPACK_IMPORTED_MODULE_0__["UNIT_C"] || unit === _const__WEBPACK_IMPORTED_MODULE_0__["UNIT_F"]) {
        return "hass:thermometer";
    }
    return Object(_domain_icon__WEBPACK_IMPORTED_MODULE_1__["domainIcon"])("sensor");
};


/***/ }),

/***/ "./src/common/entity/state_icon.ts":
/*!*****************************************!*\
  !*** ./src/common/entity/state_icon.ts ***!
  \*****************************************/
/*! exports provided: stateIcon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stateIcon", function() { return stateIcon; });
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../const */ "./src/common/const.ts");
/* harmony import */ var _binary_sensor_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./binary_sensor_icon */ "./src/common/entity/binary_sensor_icon.ts");
/* harmony import */ var _compute_domain__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./compute_domain */ "./src/common/entity/compute_domain.ts");
/* harmony import */ var _domain_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./domain_icon */ "./src/common/entity/domain_icon.ts");
/* harmony import */ var _cover_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./cover_icon */ "./src/common/entity/cover_icon.ts");
/* harmony import */ var _sensor_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sensor_icon */ "./src/common/entity/sensor_icon.ts");
/* harmony import */ var _input_dateteime_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./input_dateteime_icon */ "./src/common/entity/input_dateteime_icon.ts");







var domainIcons = {
    binary_sensor: _binary_sensor_icon__WEBPACK_IMPORTED_MODULE_1__["binarySensorIcon"],
    cover: _cover_icon__WEBPACK_IMPORTED_MODULE_4__["coverIcon"],
    sensor: _sensor_icon__WEBPACK_IMPORTED_MODULE_5__["sensorIcon"],
    input_datetime: _input_dateteime_icon__WEBPACK_IMPORTED_MODULE_6__["inputDateTimeIcon"],
};
var stateIcon = function (state) {
    if (!state) {
        return _const__WEBPACK_IMPORTED_MODULE_0__["DEFAULT_DOMAIN_ICON"];
    }
    if (state.attributes.icon) {
        return state.attributes.icon;
    }
    var domain = Object(_compute_domain__WEBPACK_IMPORTED_MODULE_2__["computeDomain"])(state.entity_id);
    if (domain in domainIcons) {
        return domainIcons[domain](state);
    }
    return Object(_domain_icon__WEBPACK_IMPORTED_MODULE_3__["domainIcon"])(domain, state.state);
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

/***/ "./src/common/util/render-status.ts":
/*!******************************************!*\
  !*** ./src/common/util/render-status.ts ***!
  \******************************************/
/*! exports provided: afterNextRender, nextRender */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "afterNextRender", function() { return afterNextRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nextRender", function() { return nextRender; });
var afterNextRender = function (cb) {
    requestAnimationFrame(function () { return setTimeout(cb, 0); });
};
var nextRender = function () {
    return new Promise(function (resolve) {
        afterNextRender(resolve);
    });
};


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

/***/ "./src/data/entity_registry.ts":
/*!*************************************!*\
  !*** ./src/data/entity_registry.ts ***!
  \*************************************/
/*! exports provided: computeEntityRegistryName, updateEntityRegistryEntry, removeEntityRegistryEntry, subscribeEntityRegistry */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "computeEntityRegistryName", function() { return computeEntityRegistryName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateEntityRegistryEntry", function() { return updateEntityRegistryEntry; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeEntityRegistryEntry", function() { return removeEntityRegistryEntry; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subscribeEntityRegistry", function() { return subscribeEntityRegistry; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var home_assistant_js_websocket__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! home-assistant-js-websocket */ "./node_modules/home-assistant-js-websocket/dist/haws.es.js");
/* harmony import */ var _common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/entity/compute_state_name */ "./src/common/entity/compute_state_name.ts");
/* harmony import */ var _common_util_debounce__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/util/debounce */ "./src/common/util/debounce.ts");




var computeEntityRegistryName = function (hass, entry) {
    if (entry.name) {
        return entry.name;
    }
    var state = hass.states[entry.entity_id];
    return state ? Object(_common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_2__["computeStateName"])(state) : null;
};
var updateEntityRegistryEntry = function (hass, entityId, updates) {
    return hass.callWS(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ type: "config/entity_registry/update", entity_id: entityId }, updates));
};
var removeEntityRegistryEntry = function (hass, entityId) {
    return hass.callWS({
        type: "config/entity_registry/remove",
        entity_id: entityId,
    });
};
var fetchEntityRegistry = function (conn) {
    return conn.sendMessagePromise({
        type: "config/entity_registry/list",
    });
};
var subscribeEntityRegistryUpdates = function (conn, store) {
    return conn.subscribeEvents(Object(_common_util_debounce__WEBPACK_IMPORTED_MODULE_3__["debounce"])(function () {
        return fetchEntityRegistry(conn).then(function (entities) {
            return store.setState(entities, true);
        });
    }, 500, true), "entity_registry_updated");
};
var subscribeEntityRegistry = function (conn, onChange) {
    return Object(home_assistant_js_websocket__WEBPACK_IMPORTED_MODULE_1__["createCollection"])("_entityRegistry", fetchEntityRegistry, subscribeEntityRegistryUpdates, conn, onChange);
};


/***/ }),

/***/ "./src/panels/config/entity_registry/ha-config-entity-registry.ts":
/*!************************************************************************!*\
  !*** ./src/panels/config/entity_registry/ha-config-entity-registry.ts ***!
  \************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _data_entity_registry__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../data/entity_registry */ "./src/data/entity_registry.ts");
/* harmony import */ var _layouts_hass_subpage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../layouts/hass-subpage */ "./src/layouts/hass-subpage.ts");
/* harmony import */ var _layouts_hass_loading_screen__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../layouts/hass-loading-screen */ "./src/layouts/hass-loading-screen.ts");
/* harmony import */ var _components_data_table_ha_data_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/data-table/ha-data-table */ "./src/components/data-table/ha-data-table.ts");
/* harmony import */ var _components_ha_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/ha-icon */ "./src/components/ha-icon.ts");
/* harmony import */ var _components_ha_switch__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/ha-switch */ "./src/components/ha-switch.ts");
/* harmony import */ var _common_entity_domain_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../common/entity/domain_icon */ "./src/common/entity/domain_icon.ts");
/* harmony import */ var _common_entity_state_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../common/entity/state_icon */ "./src/common/entity/state_icon.ts");
/* harmony import */ var _common_entity_compute_domain__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../common/entity/compute_domain */ "./src/common/entity/compute_domain.ts");
/* harmony import */ var _ha_config_section__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../ha-config-section */ "./src/panels/config/ha-config-section.js");
/* harmony import */ var _show_dialog_entity_registry_detail__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./show-dialog-entity-registry-detail */ "./src/panels/config/entity_registry/show-dialog-entity-registry-detail.ts");
/* harmony import */ var memoize_one__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! memoize-one */ "./node_modules/memoize-one/dist/memoize-one.esm.js");














var HaConfigEntityRegistry = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(HaConfigEntityRegistry, _super);
    function HaConfigEntityRegistry() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._showDisabled = false;
        _this._columns = Object(memoize_one__WEBPACK_IMPORTED_MODULE_13__["default"])(function (_language) {
            return {
                icon: {
                    title: "",
                    type: "icon",
                    template: function (icon) { return Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_1 || (templateObject_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n            <ha-icon slot=\"item-icon\" .icon=", "></ha-icon>\n          "], ["\n            <ha-icon slot=\"item-icon\" .icon=", "></ha-icon>\n          "])), icon); },
                },
                name: {
                    title: _this.hass.localize("ui.panel.config.entity_registry.picker.headers.name"),
                    sortable: true,
                    filterable: true,
                    direction: "asc",
                },
                entity_id: {
                    title: _this.hass.localize("ui.panel.config.entity_registry.picker.headers.entity_id"),
                    sortable: true,
                    filterable: true,
                },
                platform: {
                    title: _this.hass.localize("ui.panel.config.entity_registry.picker.headers.integration"),
                    sortable: true,
                    filterable: true,
                    template: function (platform) {
                        return Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_2 || (templateObject_2 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n              ", "\n            "], ["\n              ",
                            "\n            "])), _this.hass.localize("component." + platform + ".config.title") ||
                            platform);
                    },
                },
                disabled_by: {
                    title: _this.hass.localize("ui.panel.config.entity_registry.picker.headers.enabled"),
                    type: "icon",
                    template: function (disabledBy) { return Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_3 || (templateObject_3 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n            <ha-icon\n              slot=\"item-icon\"\n              .icon=", "\n            ></ha-icon>\n          "], ["\n            <ha-icon\n              slot=\"item-icon\"\n              .icon=", "\n            ></ha-icon>\n          "])), disabledBy ? "hass:cancel" : "hass:check-circle"); },
                },
            };
        });
        _this._filteredEntities = Object(memoize_one__WEBPACK_IMPORTED_MODULE_13__["default"])(function (entities, showDisabled) {
            return (showDisabled
                ? entities
                : entities.filter(function (entity) { return !Boolean(entity.disabled_by); })).map(function (entry) {
                var state = _this.hass.states[entry.entity_id];
                return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, entry), { icon: state
                        ? Object(_common_entity_state_icon__WEBPACK_IMPORTED_MODULE_9__["stateIcon"])(state)
                        : Object(_common_entity_domain_icon__WEBPACK_IMPORTED_MODULE_8__["domainIcon"])(Object(_common_entity_compute_domain__WEBPACK_IMPORTED_MODULE_10__["computeDomain"])(entry.entity_id)), name: Object(_data_entity_registry__WEBPACK_IMPORTED_MODULE_2__["computeEntityRegistryName"])(_this.hass, entry) ||
                        _this.hass.localize("state.default.unavailable") });
            });
        });
        return _this;
    }
    HaConfigEntityRegistry.prototype.disconnectedCallback = function () {
        _super.prototype.disconnectedCallback.call(this);
        if (this._unsubEntities) {
            this._unsubEntities();
        }
    };
    HaConfigEntityRegistry.prototype.render = function () {
        if (!this.hass || this._entities === undefined) {
            return Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_4 || (templateObject_4 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n        <hass-loading-screen></hass-loading-screen>\n      "], ["\n        <hass-loading-screen></hass-loading-screen>\n      "])));
        }
        return Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_5 || (templateObject_5 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      <hass-subpage\n        header=\"", "\"\n      >\n        <ha-config-section .isWide=", ">\n          <span slot=\"header\">\n            ", "\n          </span>\n          <span slot=\"introduction\">\n            ", "\n            <p>\n              ", "\n            </p>\n            <a href=\"/config/integrations\">\n              ", "\n            </a>\n            <ha-switch\n              ?checked=", "\n              @change=", "\n              >", "</ha-switch\n            >\n          </span>\n          <ha-data-table\n            .columns=", "\n            .data=", "\n            @row-click=", "\n            id=\"entity_id\"\n          >\n          </ha-data-table>\n        </ha-config-section>\n      </hass-subpage>\n    "], ["\n      <hass-subpage\n        header=\"",
            "\"\n      >\n        <ha-config-section .isWide=", ">\n          <span slot=\"header\">\n            ",
            "\n          </span>\n          <span slot=\"introduction\">\n            ",
            "\n            <p>\n              ",
            "\n            </p>\n            <a href=\"/config/integrations\">\n              ",
            "\n            </a>\n            <ha-switch\n              ?checked=", "\n              @change=", "\n              >",
            "</ha-switch\n            >\n          </span>\n          <ha-data-table\n            .columns=", "\n            .data=", "\n            @row-click=", "\n            id=\"entity_id\"\n          >\n          </ha-data-table>\n        </ha-config-section>\n      </hass-subpage>\n    "])), this.hass.localize("ui.panel.config.entity_registry.caption"), this.isWide, this.hass.localize("ui.panel.config.entity_registry.picker.header"), this.hass.localize("ui.panel.config.entity_registry.picker.introduction"), this.hass.localize("ui.panel.config.entity_registry.picker.introduction2"), this.hass.localize("ui.panel.config.entity_registry.picker.integrations_page"), this._showDisabled, this._showDisabledChanged, this.hass.localize("ui.panel.config.entity_registry.picker.show_disabled"), this._columns(this.hass.language), this._filteredEntities(this._entities, this._showDisabled), this._openEditEntry);
    };
    HaConfigEntityRegistry.prototype.firstUpdated = function (changedProps) {
        _super.prototype.firstUpdated.call(this, changedProps);
        Object(_show_dialog_entity_registry_detail__WEBPACK_IMPORTED_MODULE_12__["loadEntityRegistryDetailDialog"])();
    };
    HaConfigEntityRegistry.prototype.updated = function (changedProps) {
        var _this = this;
        _super.prototype.updated.call(this, changedProps);
        if (!this._unsubEntities) {
            this._unsubEntities = Object(_data_entity_registry__WEBPACK_IMPORTED_MODULE_2__["subscribeEntityRegistry"])(this.hass.connection, function (entities) {
                _this._entities = entities;
            });
        }
    };
    HaConfigEntityRegistry.prototype._showDisabledChanged = function (ev) {
        this._showDisabled = ev.target.checked;
    };
    HaConfigEntityRegistry.prototype._openEditEntry = function (ev) {
        var entryId = ev.detail.id;
        var entry = this._entities.find(function (entity) { return entity.entity_id === entryId; });
        if (!entry) {
            return;
        }
        Object(_show_dialog_entity_registry_detail__WEBPACK_IMPORTED_MODULE_12__["showEntityRegistryDetailDialog"])(this, {
            entry: entry,
        });
    };
    Object.defineProperty(HaConfigEntityRegistry, "styles", {
        get: function () {
            return Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["css"])(templateObject_6 || (templateObject_6 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      a {\n        color: var(--primary-color);\n      }\n      ha-data-table {\n        margin-bottom: 24px;\n        margin-top: 0px;\n      }\n      ha-switch {\n        margin-top: 16px;\n      }\n    "], ["\n      a {\n        color: var(--primary-color);\n      }\n      ha-data-table {\n        margin-bottom: 24px;\n        margin-top: 0px;\n      }\n      ha-switch {\n        margin-top: 16px;\n      }\n    "])));
        },
        enumerable: true,
        configurable: true
    });
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
    ], HaConfigEntityRegistry.prototype, "hass", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
    ], HaConfigEntityRegistry.prototype, "isWide", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
    ], HaConfigEntityRegistry.prototype, "_entities", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
    ], HaConfigEntityRegistry.prototype, "_showDisabled", void 0);
    return HaConfigEntityRegistry;
}(lit_element__WEBPACK_IMPORTED_MODULE_1__["LitElement"]));
customElements.define("ha-config-entity-registry", HaConfigEntityRegistry);
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6;


/***/ }),

/***/ "./src/panels/config/entity_registry/show-dialog-entity-registry-detail.ts":
/*!*********************************************************************************!*\
  !*** ./src/panels/config/entity_registry/show-dialog-entity-registry-detail.ts ***!
  \*********************************************************************************/
/*! exports provided: loadEntityRegistryDetailDialog, showEntityRegistryDetailDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadEntityRegistryDetailDialog", function() { return loadEntityRegistryDetailDialog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showEntityRegistryDetailDialog", function() { return showEntityRegistryDetailDialog; });
/* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../common/dom/fire_event */ "./src/common/dom/fire_event.ts");

var loadEntityRegistryDetailDialog = function () {
    return Promise.all(/*! import() | entity-registry-detail-dialog */[__webpack_require__.e("vendors~area-registry-detail-dialog~cloud-webhook-manage-dialog~config-entry-system-options~device-r~780fc7fc"), __webpack_require__.e("vendors~area-registry-detail-dialog~cloud-webhook-manage-dialog~config-entry-system-options~device-r~8bd3e4d4"), __webpack_require__.e("vendors~entity-registry-detail-dialog"), __webpack_require__.e("entity-registry-detail-dialog")]).then(__webpack_require__.bind(null, /*! ./dialog-entity-registry-detail */ "./src/panels/config/entity_registry/dialog-entity-registry-detail.ts"));
};
var showEntityRegistryDetailDialog = function (element, systemLogDetailParams) {
    Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_0__["fireEvent"])(element, "show-dialog", {
        dialogTag: "dialog-entity-registry-detail",
        dialogImport: loadEntityRegistryDetailDialog,
        dialogParams: systemLogDetailParams,
    });
};


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFuZWwtY29uZmlnLWVudGl0eS1yZWdpc3RyeS5jaHVuay5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9jb21tb24vZW50aXR5L2JpbmFyeV9zZW5zb3JfaWNvbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL2VudGl0eS9jb21wdXRlX29iamVjdF9pZC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL2VudGl0eS9jb21wdXRlX3N0YXRlX25hbWUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9lbnRpdHkvY292ZXJfaWNvbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL2VudGl0eS9kb21haW5faWNvbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL2VudGl0eS9pbnB1dF9kYXRldGVpbWVfaWNvbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL2VudGl0eS9zZW5zb3JfaWNvbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL2VudGl0eS9zdGF0ZV9pY29uLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vdXRpbC9kZWJvdW5jZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL3V0aWwvcmVuZGVyLXN0YXR1cy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9oYS1pY29uLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2hhLXN3aXRjaC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZGF0YS9lbnRpdHlfcmVnaXN0cnkudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhbmVscy9jb25maWcvZW50aXR5X3JlZ2lzdHJ5L2hhLWNvbmZpZy1lbnRpdHktcmVnaXN0cnkudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhbmVscy9jb25maWcvZW50aXR5X3JlZ2lzdHJ5L3Nob3ctZGlhbG9nLWVudGl0eS1yZWdpc3RyeS1kZXRhaWwudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhbmVscy9jb25maWcvaGEtY29uZmlnLXNlY3Rpb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSGFzc0VudGl0eSB9IGZyb20gXCJob21lLWFzc2lzdGFudC1qcy13ZWJzb2NrZXRcIjtcblxuLyoqIFJldHVybiBhbiBpY29uIHJlcHJlc2VudGluZyBhIGJpbmFyeSBzZW5zb3Igc3RhdGUuICovXG5cbmV4cG9ydCBjb25zdCBiaW5hcnlTZW5zb3JJY29uID0gKHN0YXRlOiBIYXNzRW50aXR5KSA9PiB7XG4gIGNvbnN0IGFjdGl2YXRlZCA9IHN0YXRlLnN0YXRlICYmIHN0YXRlLnN0YXRlID09PSBcIm9mZlwiO1xuICBzd2l0Y2ggKHN0YXRlLmF0dHJpYnV0ZXMuZGV2aWNlX2NsYXNzKSB7XG4gICAgY2FzZSBcImJhdHRlcnlcIjpcbiAgICAgIHJldHVybiBhY3RpdmF0ZWQgPyBcImhhc3M6YmF0dGVyeVwiIDogXCJoYXNzOmJhdHRlcnktb3V0bGluZVwiO1xuICAgIGNhc2UgXCJjb2xkXCI6XG4gICAgICByZXR1cm4gYWN0aXZhdGVkID8gXCJoYXNzOnRoZXJtb21ldGVyXCIgOiBcImhhc3M6c25vd2ZsYWtlXCI7XG4gICAgY2FzZSBcImNvbm5lY3Rpdml0eVwiOlxuICAgICAgcmV0dXJuIGFjdGl2YXRlZCA/IFwiaGFzczpzZXJ2ZXItbmV0d29yay1vZmZcIiA6IFwiaGFzczpzZXJ2ZXItbmV0d29ya1wiO1xuICAgIGNhc2UgXCJkb29yXCI6XG4gICAgICByZXR1cm4gYWN0aXZhdGVkID8gXCJoYXNzOmRvb3ItY2xvc2VkXCIgOiBcImhhc3M6ZG9vci1vcGVuXCI7XG4gICAgY2FzZSBcImdhcmFnZV9kb29yXCI6XG4gICAgICByZXR1cm4gYWN0aXZhdGVkID8gXCJoYXNzOmdhcmFnZVwiIDogXCJoYXNzOmdhcmFnZS1vcGVuXCI7XG4gICAgY2FzZSBcImdhc1wiOlxuICAgIGNhc2UgXCJwb3dlclwiOlxuICAgIGNhc2UgXCJwcm9ibGVtXCI6XG4gICAgY2FzZSBcInNhZmV0eVwiOlxuICAgIGNhc2UgXCJzbW9rZVwiOlxuICAgICAgcmV0dXJuIGFjdGl2YXRlZCA/IFwiaGFzczpzaGllbGQtY2hlY2tcIiA6IFwiaGFzczphbGVydFwiO1xuICAgIGNhc2UgXCJoZWF0XCI6XG4gICAgICByZXR1cm4gYWN0aXZhdGVkID8gXCJoYXNzOnRoZXJtb21ldGVyXCIgOiBcImhhc3M6ZmlyZVwiO1xuICAgIGNhc2UgXCJsaWdodFwiOlxuICAgICAgcmV0dXJuIGFjdGl2YXRlZCA/IFwiaGFzczpicmlnaHRuZXNzLTVcIiA6IFwiaGFzczpicmlnaHRuZXNzLTdcIjtcbiAgICBjYXNlIFwibG9ja1wiOlxuICAgICAgcmV0dXJuIGFjdGl2YXRlZCA/IFwiaGFzczpsb2NrXCIgOiBcImhhc3M6bG9jay1vcGVuXCI7XG4gICAgY2FzZSBcIm1vaXN0dXJlXCI6XG4gICAgICByZXR1cm4gYWN0aXZhdGVkID8gXCJoYXNzOndhdGVyLW9mZlwiIDogXCJoYXNzOndhdGVyXCI7XG4gICAgY2FzZSBcIm1vdGlvblwiOlxuICAgICAgcmV0dXJuIGFjdGl2YXRlZCA/IFwiaGFzczp3YWxrXCIgOiBcImhhc3M6cnVuXCI7XG4gICAgY2FzZSBcIm9jY3VwYW5jeVwiOlxuICAgICAgcmV0dXJuIGFjdGl2YXRlZCA/IFwiaGFzczpob21lLW91dGxpbmVcIiA6IFwiaGFzczpob21lXCI7XG4gICAgY2FzZSBcIm9wZW5pbmdcIjpcbiAgICAgIHJldHVybiBhY3RpdmF0ZWQgPyBcImhhc3M6c3F1YXJlXCIgOiBcImhhc3M6c3F1YXJlLW91dGxpbmVcIjtcbiAgICBjYXNlIFwicGx1Z1wiOlxuICAgICAgcmV0dXJuIGFjdGl2YXRlZCA/IFwiaGFzczpwb3dlci1wbHVnLW9mZlwiIDogXCJoYXNzOnBvd2VyLXBsdWdcIjtcbiAgICBjYXNlIFwicHJlc2VuY2VcIjpcbiAgICAgIHJldHVybiBhY3RpdmF0ZWQgPyBcImhhc3M6aG9tZS1vdXRsaW5lXCIgOiBcImhhc3M6aG9tZVwiO1xuICAgIGNhc2UgXCJzb3VuZFwiOlxuICAgICAgcmV0dXJuIGFjdGl2YXRlZCA/IFwiaGFzczptdXNpYy1ub3RlLW9mZlwiIDogXCJoYXNzOm11c2ljLW5vdGVcIjtcbiAgICBjYXNlIFwidmlicmF0aW9uXCI6XG4gICAgICByZXR1cm4gYWN0aXZhdGVkID8gXCJoYXNzOmNyb3AtcG9ydHJhaXRcIiA6IFwiaGFzczp2aWJyYXRlXCI7XG4gICAgY2FzZSBcIndpbmRvd1wiOlxuICAgICAgcmV0dXJuIGFjdGl2YXRlZCA/IFwiaGFzczp3aW5kb3ctY2xvc2VkXCIgOiBcImhhc3M6d2luZG93LW9wZW5cIjtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIGFjdGl2YXRlZCA/IFwiaGFzczpyYWRpb2JveC1ibGFua1wiIDogXCJoYXNzOmNoZWNrYm94LW1hcmtlZC1jaXJjbGVcIjtcbiAgfVxufTtcbiIsIi8qKiBDb21wdXRlIHRoZSBvYmplY3QgSUQgb2YgYSBzdGF0ZS4gKi9cbmV4cG9ydCBjb25zdCBjb21wdXRlT2JqZWN0SWQgPSAoZW50aXR5SWQ6IHN0cmluZyk6IHN0cmluZyA9PiB7XG4gIHJldHVybiBlbnRpdHlJZC5zdWJzdHIoZW50aXR5SWQuaW5kZXhPZihcIi5cIikgKyAxKTtcbn07XG4iLCJpbXBvcnQgeyBIYXNzRW50aXR5IH0gZnJvbSBcImhvbWUtYXNzaXN0YW50LWpzLXdlYnNvY2tldFwiO1xuaW1wb3J0IHsgY29tcHV0ZU9iamVjdElkIH0gZnJvbSBcIi4vY29tcHV0ZV9vYmplY3RfaWRcIjtcblxuZXhwb3J0IGNvbnN0IGNvbXB1dGVTdGF0ZU5hbWUgPSAoc3RhdGVPYmo6IEhhc3NFbnRpdHkpOiBzdHJpbmcgPT4ge1xuICByZXR1cm4gc3RhdGVPYmouYXR0cmlidXRlcy5mcmllbmRseV9uYW1lID09PSB1bmRlZmluZWRcbiAgICA/IGNvbXB1dGVPYmplY3RJZChzdGF0ZU9iai5lbnRpdHlfaWQpLnJlcGxhY2UoL18vZywgXCIgXCIpXG4gICAgOiBzdGF0ZU9iai5hdHRyaWJ1dGVzLmZyaWVuZGx5X25hbWUgfHwgXCJcIjtcbn07XG4iLCIvKiogUmV0dXJuIGFuIGljb24gcmVwcmVzZW50aW5nIGEgY292ZXIgc3RhdGUuICovXG5pbXBvcnQgeyBIYXNzRW50aXR5IH0gZnJvbSBcImhvbWUtYXNzaXN0YW50LWpzLXdlYnNvY2tldFwiO1xuaW1wb3J0IHsgZG9tYWluSWNvbiB9IGZyb20gXCIuL2RvbWFpbl9pY29uXCI7XG5cbmV4cG9ydCBjb25zdCBjb3Zlckljb24gPSAoc3RhdGU6IEhhc3NFbnRpdHkpOiBzdHJpbmcgPT4ge1xuICBjb25zdCBvcGVuID0gc3RhdGUuc3RhdGUgIT09IFwiY2xvc2VkXCI7XG4gIHN3aXRjaCAoc3RhdGUuYXR0cmlidXRlcy5kZXZpY2VfY2xhc3MpIHtcbiAgICBjYXNlIFwiZ2FyYWdlXCI6XG4gICAgICByZXR1cm4gb3BlbiA/IFwiaGFzczpnYXJhZ2Utb3BlblwiIDogXCJoYXNzOmdhcmFnZVwiO1xuICAgIGNhc2UgXCJkb29yXCI6XG4gICAgICByZXR1cm4gb3BlbiA/IFwiaGFzczpkb29yLW9wZW5cIiA6IFwiaGFzczpkb29yLWNsb3NlZFwiO1xuICAgIGNhc2UgXCJzaHV0dGVyXCI6XG4gICAgICByZXR1cm4gb3BlbiA/IFwiaGFzczp3aW5kb3ctc2h1dHRlci1vcGVuXCIgOiBcImhhc3M6d2luZG93LXNodXR0ZXJcIjtcbiAgICBjYXNlIFwiYmxpbmRcIjpcbiAgICAgIHJldHVybiBvcGVuID8gXCJoYXNzOmJsaW5kcy1vcGVuXCIgOiBcImhhc3M6YmxpbmRzXCI7XG4gICAgY2FzZSBcIndpbmRvd1wiOlxuICAgICAgcmV0dXJuIG9wZW4gPyBcImhhc3M6d2luZG93LW9wZW5cIiA6IFwiaGFzczp3aW5kb3ctY2xvc2VkXCI7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBkb21haW5JY29uKFwiY292ZXJcIiwgc3RhdGUuc3RhdGUpO1xuICB9XG59O1xuIiwiLyoqXG4gKiBSZXR1cm4gdGhlIGljb24gdG8gYmUgdXNlZCBmb3IgYSBkb21haW4uXG4gKlxuICogT3B0aW9uYWxseSBwYXNzIGluIGEgc3RhdGUgdG8gaW5mbHVlbmNlIHRoZSBkb21haW4gaWNvbi5cbiAqL1xuaW1wb3J0IHsgREVGQVVMVF9ET01BSU5fSUNPTiB9IGZyb20gXCIuLi9jb25zdFwiO1xuXG5jb25zdCBmaXhlZEljb25zID0ge1xuICBhbGVydDogXCJoYXNzOmFsZXJ0XCIsXG4gIGFsZXhhOiBcImhhc3M6YW1hem9uLWFsZXhhXCIsXG4gIGF1dG9tYXRpb246IFwiaGFzczpwbGF5bGlzdC1wbGF5XCIsXG4gIGNhbGVuZGFyOiBcImhhc3M6Y2FsZW5kYXJcIixcbiAgY2FtZXJhOiBcImhhc3M6dmlkZW9cIixcbiAgY2xpbWF0ZTogXCJoYXNzOnRoZXJtb3N0YXRcIixcbiAgY29uZmlndXJhdG9yOiBcImhhc3M6c2V0dGluZ3NcIixcbiAgY29udmVyc2F0aW9uOiBcImhhc3M6dGV4dC10by1zcGVlY2hcIixcbiAgZGV2aWNlX3RyYWNrZXI6IFwiaGFzczphY2NvdW50XCIsXG4gIGZhbjogXCJoYXNzOmZhblwiLFxuICBnb29nbGVfYXNzaXN0YW50OiBcImhhc3M6Z29vZ2xlLWFzc2lzdGFudFwiLFxuICBncm91cDogXCJoYXNzOmdvb2dsZS1jaXJjbGVzLWNvbW11bml0aWVzXCIsXG4gIGhpc3RvcnlfZ3JhcGg6IFwiaGFzczpjaGFydC1saW5lXCIsXG4gIGhvbWVhc3Npc3RhbnQ6IFwiaGFzczpob21lLWFzc2lzdGFudFwiLFxuICBob21la2l0OiBcImhhc3M6aG9tZS1hdXRvbWF0aW9uXCIsXG4gIGltYWdlX3Byb2Nlc3Npbmc6IFwiaGFzczppbWFnZS1maWx0ZXItZnJhbWVzXCIsXG4gIGlucHV0X2Jvb2xlYW46IFwiaGFzczpkcmF3aW5nXCIsXG4gIGlucHV0X2RhdGV0aW1lOiBcImhhc3M6Y2FsZW5kYXItY2xvY2tcIixcbiAgaW5wdXRfbnVtYmVyOiBcImhhc3M6cmF5LXZlcnRleFwiLFxuICBpbnB1dF9zZWxlY3Q6IFwiaGFzczpmb3JtYXQtbGlzdC1idWxsZXRlZFwiLFxuICBpbnB1dF90ZXh0OiBcImhhc3M6dGV4dGJveFwiLFxuICBsaWdodDogXCJoYXNzOmxpZ2h0YnVsYlwiLFxuICBtYWlsYm94OiBcImhhc3M6bWFpbGJveFwiLFxuICBub3RpZnk6IFwiaGFzczpjb21tZW50LWFsZXJ0XCIsXG4gIHBlcnNpc3RlbnRfbm90aWZpY2F0aW9uOiBcImhhc3M6YmVsbFwiLFxuICBwZXJzb246IFwiaGFzczphY2NvdW50XCIsXG4gIHBsYW50OiBcImhhc3M6Zmxvd2VyXCIsXG4gIHByb3hpbWl0eTogXCJoYXNzOmFwcGxlLXNhZmFyaVwiLFxuICByZW1vdGU6IFwiaGFzczpyZW1vdGVcIixcbiAgc2NlbmU6IFwiaGFzczpnb29nbGUtcGFnZXNcIixcbiAgc2NyaXB0OiBcImhhc3M6ZmlsZS1kb2N1bWVudFwiLFxuICBzZW5zb3I6IFwiaGFzczpleWVcIixcbiAgc2ltcGxlX2FsYXJtOiBcImhhc3M6YmVsbFwiLFxuICBzdW46IFwiaGFzczp3aGl0ZS1iYWxhbmNlLXN1bm55XCIsXG4gIHN3aXRjaDogXCJoYXNzOmZsYXNoXCIsXG4gIHRpbWVyOiBcImhhc3M6dGltZXJcIixcbiAgdXBkYXRlcjogXCJoYXNzOmNsb3VkLXVwbG9hZFwiLFxuICB2YWN1dW06IFwiaGFzczpyb2JvdC12YWN1dW1cIixcbiAgd2F0ZXJfaGVhdGVyOiBcImhhc3M6dGhlcm1vbWV0ZXJcIixcbiAgd2VhdGhlcjogXCJoYXNzOndlYXRoZXItY2xvdWR5XCIsXG4gIHdlYmxpbms6IFwiaGFzczpvcGVuLWluLW5ld1wiLFxuICB6b25lOiBcImhhc3M6bWFwLW1hcmtlclwiLFxufTtcblxuZXhwb3J0IGNvbnN0IGRvbWFpbkljb24gPSAoZG9tYWluOiBzdHJpbmcsIHN0YXRlPzogc3RyaW5nKTogc3RyaW5nID0+IHtcbiAgaWYgKGRvbWFpbiBpbiBmaXhlZEljb25zKSB7XG4gICAgcmV0dXJuIGZpeGVkSWNvbnNbZG9tYWluXTtcbiAgfVxuXG4gIHN3aXRjaCAoZG9tYWluKSB7XG4gICAgY2FzZSBcImFsYXJtX2NvbnRyb2xfcGFuZWxcIjpcbiAgICAgIHN3aXRjaCAoc3RhdGUpIHtcbiAgICAgICAgY2FzZSBcImFybWVkX2hvbWVcIjpcbiAgICAgICAgICByZXR1cm4gXCJoYXNzOmJlbGwtcGx1c1wiO1xuICAgICAgICBjYXNlIFwiYXJtZWRfbmlnaHRcIjpcbiAgICAgICAgICByZXR1cm4gXCJoYXNzOmJlbGwtc2xlZXBcIjtcbiAgICAgICAgY2FzZSBcImRpc2FybWVkXCI6XG4gICAgICAgICAgcmV0dXJuIFwiaGFzczpiZWxsLW91dGxpbmVcIjtcbiAgICAgICAgY2FzZSBcInRyaWdnZXJlZFwiOlxuICAgICAgICAgIHJldHVybiBcImhhc3M6YmVsbC1yaW5nXCI7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmV0dXJuIFwiaGFzczpiZWxsXCI7XG4gICAgICB9XG5cbiAgICBjYXNlIFwiYmluYXJ5X3NlbnNvclwiOlxuICAgICAgcmV0dXJuIHN0YXRlICYmIHN0YXRlID09PSBcIm9mZlwiXG4gICAgICAgID8gXCJoYXNzOnJhZGlvYm94LWJsYW5rXCJcbiAgICAgICAgOiBcImhhc3M6Y2hlY2tib3gtbWFya2VkLWNpcmNsZVwiO1xuXG4gICAgY2FzZSBcImNvdmVyXCI6XG4gICAgICByZXR1cm4gc3RhdGUgPT09IFwiY2xvc2VkXCIgPyBcImhhc3M6d2luZG93LWNsb3NlZFwiIDogXCJoYXNzOndpbmRvdy1vcGVuXCI7XG5cbiAgICBjYXNlIFwibG9ja1wiOlxuICAgICAgcmV0dXJuIHN0YXRlICYmIHN0YXRlID09PSBcInVubG9ja2VkXCIgPyBcImhhc3M6bG9jay1vcGVuXCIgOiBcImhhc3M6bG9ja1wiO1xuXG4gICAgY2FzZSBcIm1lZGlhX3BsYXllclwiOlxuICAgICAgcmV0dXJuIHN0YXRlICYmIHN0YXRlICE9PSBcIm9mZlwiICYmIHN0YXRlICE9PSBcImlkbGVcIlxuICAgICAgICA/IFwiaGFzczpjYXN0LWNvbm5lY3RlZFwiXG4gICAgICAgIDogXCJoYXNzOmNhc3RcIjtcblxuICAgIGNhc2UgXCJ6d2F2ZVwiOlxuICAgICAgc3dpdGNoIChzdGF0ZSkge1xuICAgICAgICBjYXNlIFwiZGVhZFwiOlxuICAgICAgICAgIHJldHVybiBcImhhc3M6ZW1vdGljb24tZGVhZFwiO1xuICAgICAgICBjYXNlIFwic2xlZXBpbmdcIjpcbiAgICAgICAgICByZXR1cm4gXCJoYXNzOnNsZWVwXCI7XG4gICAgICAgIGNhc2UgXCJpbml0aWFsaXppbmdcIjpcbiAgICAgICAgICByZXR1cm4gXCJoYXNzOnRpbWVyLXNhbmRcIjtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZXR1cm4gXCJoYXNzOnotd2F2ZVwiO1xuICAgICAgfVxuXG4gICAgZGVmYXVsdDpcbiAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxuICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICBcIlVuYWJsZSB0byBmaW5kIGljb24gZm9yIGRvbWFpbiBcIiArIGRvbWFpbiArIFwiIChcIiArIHN0YXRlICsgXCIpXCJcbiAgICAgICk7XG4gICAgICByZXR1cm4gREVGQVVMVF9ET01BSU5fSUNPTjtcbiAgfVxufTtcbiIsIi8qKiBSZXR1cm4gYW4gaWNvbiByZXByZXNlbnRpbmcgYW4gaW5wdXQgZGF0ZXRpbWUgc3RhdGUuICovXG5pbXBvcnQgeyBkb21haW5JY29uIH0gZnJvbSBcIi4vZG9tYWluX2ljb25cIjtcbmltcG9ydCB7IEhhc3NFbnRpdHkgfSBmcm9tIFwiaG9tZS1hc3Npc3RhbnQtanMtd2Vic29ja2V0XCI7XG5cbmV4cG9ydCBjb25zdCBpbnB1dERhdGVUaW1lSWNvbiA9IChzdGF0ZTogSGFzc0VudGl0eSk6IHN0cmluZyA9PiB7XG4gIGlmICghc3RhdGUuYXR0cmlidXRlcy5oYXNfZGF0ZSkge1xuICAgIHJldHVybiBcImhhc3M6Y2xvY2tcIjtcbiAgfVxuICBpZiAoIXN0YXRlLmF0dHJpYnV0ZXMuaGFzX3RpbWUpIHtcbiAgICByZXR1cm4gXCJoYXNzOmNhbGVuZGFyXCI7XG4gIH1cbiAgcmV0dXJuIGRvbWFpbkljb24oXCJpbnB1dF9kYXRldGltZVwiKTtcbn07XG4iLCIvKiogUmV0dXJuIGFuIGljb24gcmVwcmVzZW50aW5nIGEgc2Vuc29yIHN0YXRlLiAqL1xuaW1wb3J0IHsgSGFzc0VudGl0eSB9IGZyb20gXCJob21lLWFzc2lzdGFudC1qcy13ZWJzb2NrZXRcIjtcbmltcG9ydCB7IFVOSVRfQywgVU5JVF9GIH0gZnJvbSBcIi4uL2NvbnN0XCI7XG5pbXBvcnQgeyBkb21haW5JY29uIH0gZnJvbSBcIi4vZG9tYWluX2ljb25cIjtcblxuY29uc3QgZml4ZWREZXZpY2VDbGFzc0ljb25zID0ge1xuICBodW1pZGl0eTogXCJoYXNzOndhdGVyLXBlcmNlbnRcIixcbiAgaWxsdW1pbmFuY2U6IFwiaGFzczpicmlnaHRuZXNzLTVcIixcbiAgdGVtcGVyYXR1cmU6IFwiaGFzczp0aGVybW9tZXRlclwiLFxuICBwcmVzc3VyZTogXCJoYXNzOmdhdWdlXCIsXG4gIHBvd2VyOiBcImhhc3M6Zmxhc2hcIixcbiAgc2lnbmFsX3N0cmVuZ3RoOiBcImhhc3M6d2lmaVwiLFxufTtcblxuZXhwb3J0IGNvbnN0IHNlbnNvckljb24gPSAoc3RhdGU6IEhhc3NFbnRpdHkpID0+IHtcbiAgY29uc3QgZGNsYXNzID0gc3RhdGUuYXR0cmlidXRlcy5kZXZpY2VfY2xhc3M7XG5cbiAgaWYgKGRjbGFzcyAmJiBkY2xhc3MgaW4gZml4ZWREZXZpY2VDbGFzc0ljb25zKSB7XG4gICAgcmV0dXJuIGZpeGVkRGV2aWNlQ2xhc3NJY29uc1tkY2xhc3NdO1xuICB9XG4gIGlmIChkY2xhc3MgPT09IFwiYmF0dGVyeVwiKSB7XG4gICAgY29uc3QgYmF0dGVyeSA9IE51bWJlcihzdGF0ZS5zdGF0ZSk7XG4gICAgaWYgKGlzTmFOKGJhdHRlcnkpKSB7XG4gICAgICByZXR1cm4gXCJoYXNzOmJhdHRlcnktdW5rbm93blwiO1xuICAgIH1cbiAgICBjb25zdCBiYXR0ZXJ5Um91bmQgPSBNYXRoLnJvdW5kKGJhdHRlcnkgLyAxMCkgKiAxMDtcbiAgICBpZiAoYmF0dGVyeVJvdW5kID49IDEwMCkge1xuICAgICAgcmV0dXJuIFwiaGFzczpiYXR0ZXJ5XCI7XG4gICAgfVxuICAgIGlmIChiYXR0ZXJ5Um91bmQgPD0gMCkge1xuICAgICAgcmV0dXJuIFwiaGFzczpiYXR0ZXJ5LWFsZXJ0XCI7XG4gICAgfVxuICAgIC8vIFdpbGwgcmV0dXJuIG9uZSBvZiB0aGUgZm9sbG93aW5nIGljb25zOiAobGlzdGVkIHNvIGV4dHJhY3RvciBwaWNrcyB1cClcbiAgICAvLyBoYXNzOmJhdHRlcnktMTBcbiAgICAvLyBoYXNzOmJhdHRlcnktMjBcbiAgICAvLyBoYXNzOmJhdHRlcnktMzBcbiAgICAvLyBoYXNzOmJhdHRlcnktNDBcbiAgICAvLyBoYXNzOmJhdHRlcnktNTBcbiAgICAvLyBoYXNzOmJhdHRlcnktNjBcbiAgICAvLyBoYXNzOmJhdHRlcnktNzBcbiAgICAvLyBoYXNzOmJhdHRlcnktODBcbiAgICAvLyBoYXNzOmJhdHRlcnktOTBcbiAgICAvLyBXZSBvYnNjdXJlICdoYXNzJyBpbiBpY29ubmFtZSBzbyB0aGlzIG5hbWUgZG9lcyBub3QgZ2V0IHBpY2tlZCB1cFxuICAgIHJldHVybiBgJHtcImhhc3NcIn06YmF0dGVyeS0ke2JhdHRlcnlSb3VuZH1gO1xuICB9XG5cbiAgY29uc3QgdW5pdCA9IHN0YXRlLmF0dHJpYnV0ZXMudW5pdF9vZl9tZWFzdXJlbWVudDtcbiAgaWYgKHVuaXQgPT09IFVOSVRfQyB8fCB1bml0ID09PSBVTklUX0YpIHtcbiAgICByZXR1cm4gXCJoYXNzOnRoZXJtb21ldGVyXCI7XG4gIH1cbiAgcmV0dXJuIGRvbWFpbkljb24oXCJzZW5zb3JcIik7XG59O1xuIiwiLyoqIFJldHVybiBhbiBpY29uIHJlcHJlc2VudGluZyBhIHN0YXRlLiAqL1xuaW1wb3J0IHsgSGFzc0VudGl0eSB9IGZyb20gXCJob21lLWFzc2lzdGFudC1qcy13ZWJzb2NrZXRcIjtcbmltcG9ydCB7IERFRkFVTFRfRE9NQUlOX0lDT04gfSBmcm9tIFwiLi4vY29uc3RcIjtcbmltcG9ydCB7IGJpbmFyeVNlbnNvckljb24gfSBmcm9tIFwiLi9iaW5hcnlfc2Vuc29yX2ljb25cIjtcblxuaW1wb3J0IHsgY29tcHV0ZURvbWFpbiB9IGZyb20gXCIuL2NvbXB1dGVfZG9tYWluXCI7XG5pbXBvcnQgeyBkb21haW5JY29uIH0gZnJvbSBcIi4vZG9tYWluX2ljb25cIjtcbmltcG9ydCB7IGNvdmVySWNvbiB9IGZyb20gXCIuL2NvdmVyX2ljb25cIjtcbmltcG9ydCB7IHNlbnNvckljb24gfSBmcm9tIFwiLi9zZW5zb3JfaWNvblwiO1xuaW1wb3J0IHsgaW5wdXREYXRlVGltZUljb24gfSBmcm9tIFwiLi9pbnB1dF9kYXRldGVpbWVfaWNvblwiO1xuXG5jb25zdCBkb21haW5JY29ucyA9IHtcbiAgYmluYXJ5X3NlbnNvcjogYmluYXJ5U2Vuc29ySWNvbixcbiAgY292ZXI6IGNvdmVySWNvbixcbiAgc2Vuc29yOiBzZW5zb3JJY29uLFxuICBpbnB1dF9kYXRldGltZTogaW5wdXREYXRlVGltZUljb24sXG59O1xuXG5leHBvcnQgY29uc3Qgc3RhdGVJY29uID0gKHN0YXRlOiBIYXNzRW50aXR5KSA9PiB7XG4gIGlmICghc3RhdGUpIHtcbiAgICByZXR1cm4gREVGQVVMVF9ET01BSU5fSUNPTjtcbiAgfVxuICBpZiAoc3RhdGUuYXR0cmlidXRlcy5pY29uKSB7XG4gICAgcmV0dXJuIHN0YXRlLmF0dHJpYnV0ZXMuaWNvbjtcbiAgfVxuXG4gIGNvbnN0IGRvbWFpbiA9IGNvbXB1dGVEb21haW4oc3RhdGUuZW50aXR5X2lkKTtcblxuICBpZiAoZG9tYWluIGluIGRvbWFpbkljb25zKSB7XG4gICAgcmV0dXJuIGRvbWFpbkljb25zW2RvbWFpbl0oc3RhdGUpO1xuICB9XG4gIHJldHVybiBkb21haW5JY29uKGRvbWFpbiwgc3RhdGUuc3RhdGUpO1xufTtcbiIsIi8vIEZyb206IGh0dHBzOi8vZGF2aWR3YWxzaC5uYW1lL2phdmFzY3JpcHQtZGVib3VuY2UtZnVuY3Rpb25cblxuLy8gUmV0dXJucyBhIGZ1bmN0aW9uLCB0aGF0LCBhcyBsb25nIGFzIGl0IGNvbnRpbnVlcyB0byBiZSBpbnZva2VkLCB3aWxsIG5vdFxuLy8gYmUgdHJpZ2dlcmVkLiBUaGUgZnVuY3Rpb24gd2lsbCBiZSBjYWxsZWQgYWZ0ZXIgaXQgc3RvcHMgYmVpbmcgY2FsbGVkIGZvclxuLy8gTiBtaWxsaXNlY29uZHMuIElmIGBpbW1lZGlhdGVgIGlzIHBhc3NlZCwgdHJpZ2dlciB0aGUgZnVuY3Rpb24gb24gdGhlXG4vLyBsZWFkaW5nIGVkZ2UsIGluc3RlYWQgb2YgdGhlIHRyYWlsaW5nLlxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBiYW4tdHlwZXNcbmV4cG9ydCBjb25zdCBkZWJvdW5jZSA9IDxUIGV4dGVuZHMgRnVuY3Rpb24+KFxuICBmdW5jOiBULFxuICB3YWl0LFxuICBpbW1lZGlhdGUgPSBmYWxzZVxuKTogVCA9PiB7XG4gIGxldCB0aW1lb3V0O1xuICAvLyBAdHMtaWdub3JlXG4gIHJldHVybiBmdW5jdGlvbiguLi5hcmdzKSB7XG4gICAgLy8gdHNsaW50OmRpc2FibGU6bm8tdGhpcy1hc3NpZ25tZW50XG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzO1xuICAgIGNvbnN0IGxhdGVyID0gKCkgPT4ge1xuICAgICAgdGltZW91dCA9IG51bGw7XG4gICAgICBpZiAoIWltbWVkaWF0ZSkge1xuICAgICAgICBmdW5jLmFwcGx5KGNvbnRleHQsIGFyZ3MpO1xuICAgICAgfVxuICAgIH07XG4gICAgY29uc3QgY2FsbE5vdyA9IGltbWVkaWF0ZSAmJiAhdGltZW91dDtcbiAgICBjbGVhclRpbWVvdXQodGltZW91dCk7XG4gICAgdGltZW91dCA9IHNldFRpbWVvdXQobGF0ZXIsIHdhaXQpO1xuICAgIGlmIChjYWxsTm93KSB7XG4gICAgICBmdW5jLmFwcGx5KGNvbnRleHQsIGFyZ3MpO1xuICAgIH1cbiAgfTtcbn07XG4iLCJleHBvcnQgY29uc3QgYWZ0ZXJOZXh0UmVuZGVyID0gKGNiOiAoKSA9PiB2b2lkKTogdm9pZCA9PiB7XG4gIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiBzZXRUaW1lb3V0KGNiLCAwKSk7XG59O1xuXG5leHBvcnQgY29uc3QgbmV4dFJlbmRlciA9ICgpID0+IHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgYWZ0ZXJOZXh0UmVuZGVyKHJlc29sdmUpO1xuICB9KTtcbn07XG4iLCJpbXBvcnQgeyBDb25zdHJ1Y3RvciB9IGZyb20gXCJsaXQtZWxlbWVudFwiO1xuaW1wb3J0IFwiQHBvbHltZXIvaXJvbi1pY29uL2lyb24taWNvblwiO1xuLy8gTm90IGR1cGxpY2F0ZSwgdGhpcyBpcyBmb3IgdHlwaW5nLlxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG5pbXBvcnQgeyBJcm9uSWNvbkVsZW1lbnQgfSBmcm9tIFwiQHBvbHltZXIvaXJvbi1pY29uL2lyb24taWNvblwiO1xuXG5jb25zdCBpcm9uSWNvbkNsYXNzID0gY3VzdG9tRWxlbWVudHMuZ2V0KFwiaXJvbi1pY29uXCIpIGFzIENvbnN0cnVjdG9yPFxuICBJcm9uSWNvbkVsZW1lbnRcbj47XG5cbmxldCBsb2FkZWQgPSBmYWxzZTtcblxuZXhwb3J0IGNsYXNzIEhhSWNvbiBleHRlbmRzIGlyb25JY29uQ2xhc3Mge1xuICBwcml2YXRlIF9pY29uc2V0TmFtZT86IHN0cmluZztcblxuICBwdWJsaWMgbGlzdGVuKFxuICAgIG5vZGU6IEV2ZW50VGFyZ2V0IHwgbnVsbCxcbiAgICBldmVudE5hbWU6IHN0cmluZyxcbiAgICBtZXRob2ROYW1lOiBzdHJpbmdcbiAgKTogdm9pZCB7XG4gICAgc3VwZXIubGlzdGVuKG5vZGUsIGV2ZW50TmFtZSwgbWV0aG9kTmFtZSk7XG5cbiAgICBpZiAoIWxvYWRlZCAmJiB0aGlzLl9pY29uc2V0TmFtZSA9PT0gXCJtZGlcIikge1xuICAgICAgbG9hZGVkID0gdHJ1ZTtcbiAgICAgIGltcG9ydCgvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcIm1kaS1pY29uc1wiICovIFwiLi4vcmVzb3VyY2VzL21kaS1pY29uc1wiKTtcbiAgICB9XG4gIH1cbn1cblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgSFRNTEVsZW1lbnRUYWdOYW1lTWFwIHtcbiAgICBcImhhLWljb25cIjogSGFJY29uO1xuICB9XG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcImhhLWljb25cIiwgSGFJY29uKTtcbiIsImltcG9ydCB7IENvbnN0cnVjdG9yLCBjdXN0b21FbGVtZW50LCBDU1NSZXN1bHQsIGNzcywgcXVlcnkgfSBmcm9tIFwibGl0LWVsZW1lbnRcIjtcbmltcG9ydCBcIkBtYXRlcmlhbC9td2Mtc3dpdGNoXCI7XG5pbXBvcnQgeyBzdHlsZSB9IGZyb20gXCJAbWF0ZXJpYWwvbXdjLXN3aXRjaC9td2Mtc3dpdGNoLWNzc1wiO1xuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG5pbXBvcnQgeyBTd2l0Y2ggfSBmcm9tIFwiQG1hdGVyaWFsL213Yy1zd2l0Y2hcIjtcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxuY29uc3QgTXdjU3dpdGNoID0gY3VzdG9tRWxlbWVudHMuZ2V0KFwibXdjLXN3aXRjaFwiKSBhcyBDb25zdHJ1Y3RvcjxTd2l0Y2g+O1xuXG5AY3VzdG9tRWxlbWVudChcImhhLXN3aXRjaFwiKVxuZXhwb3J0IGNsYXNzIEhhU3dpdGNoIGV4dGVuZHMgTXdjU3dpdGNoIHtcbiAgQHF1ZXJ5KFwic2xvdFwiKSBwcml2YXRlIF9zbG90ITogSFRNTFNsb3RFbGVtZW50O1xuXG4gIHByb3RlY3RlZCBmaXJzdFVwZGF0ZWQoKSB7XG4gICAgc3VwZXIuZmlyc3RVcGRhdGVkKCk7XG4gICAgdGhpcy5zdHlsZS5zZXRQcm9wZXJ0eShcIi0tbWRjLXRoZW1lLXNlY29uZGFyeVwiLCBcInZhcigtLXByaW1hcnktY29sb3IpXCIpO1xuICAgIHRoaXMuY2xhc3NMaXN0LnRvZ2dsZShcbiAgICAgIFwic2xvdHRlZFwiLFxuICAgICAgQm9vbGVhbih0aGlzLl9zbG90LmFzc2lnbmVkTm9kZXMoKS5sZW5ndGgpXG4gICAgKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBzdGF0aWMgZ2V0IHN0eWxlcygpOiBDU1NSZXN1bHRbXSB7XG4gICAgcmV0dXJuIFtcbiAgICAgIHN0eWxlLFxuICAgICAgY3NzYFxuICAgICAgICA6aG9zdCB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICAgICAgLm1kYy1zd2l0Y2g6bm90KC5tZGMtc3dpdGNoLS1jaGVja2VkKSAubWRjLXN3aXRjaF9fdGh1bWIge1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXBhcGVyLXRvZ2dsZS1idXR0b24tdW5jaGVja2VkLWJ1dHRvbi1jb2xvcik7XG4gICAgICAgICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1wYXBlci10b2dnbGUtYnV0dG9uLXVuY2hlY2tlZC1idXR0b24tY29sb3IpO1xuICAgICAgICB9XG4gICAgICAgIC5tZGMtc3dpdGNoOm5vdCgubWRjLXN3aXRjaC0tY2hlY2tlZCkgLm1kYy1zd2l0Y2hfX3RyYWNrIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wYXBlci10b2dnbGUtYnV0dG9uLXVuY2hlY2tlZC1iYXItY29sb3IpO1xuICAgICAgICAgIGJvcmRlci1jb2xvcjogdmFyKC0tcGFwZXItdG9nZ2xlLWJ1dHRvbi11bmNoZWNrZWQtYmFyLWNvbG9yKTtcbiAgICAgICAgfVxuICAgICAgICA6aG9zdCguc2xvdHRlZCkgLm1kYy1zd2l0Y2gge1xuICAgICAgICAgIG1hcmdpbi1yaWdodDogMjRweDtcbiAgICAgICAgfVxuICAgICAgYCxcbiAgICBdO1xuICB9XG59XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIEhUTUxFbGVtZW50VGFnTmFtZU1hcCB7XG4gICAgXCJoYS1zd2l0Y2hcIjogSGFTd2l0Y2g7XG4gIH1cbn1cbiIsImltcG9ydCB7IGNyZWF0ZUNvbGxlY3Rpb24sIENvbm5lY3Rpb24gfSBmcm9tIFwiaG9tZS1hc3Npc3RhbnQtanMtd2Vic29ja2V0XCI7XG5pbXBvcnQgeyBIb21lQXNzaXN0YW50IH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5pbXBvcnQgeyBjb21wdXRlU3RhdGVOYW1lIH0gZnJvbSBcIi4uL2NvbW1vbi9lbnRpdHkvY29tcHV0ZV9zdGF0ZV9uYW1lXCI7XG5pbXBvcnQgeyBkZWJvdW5jZSB9IGZyb20gXCIuLi9jb21tb24vdXRpbC9kZWJvdW5jZVwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIEVudGl0eVJlZ2lzdHJ5RW50cnkge1xuICBlbnRpdHlfaWQ6IHN0cmluZztcbiAgbmFtZTogc3RyaW5nO1xuICBwbGF0Zm9ybTogc3RyaW5nO1xuICBjb25maWdfZW50cnlfaWQ/OiBzdHJpbmc7XG4gIGRldmljZV9pZD86IHN0cmluZztcbiAgZGlzYWJsZWRfYnk6IHN0cmluZyB8IG51bGw7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRW50aXR5UmVnaXN0cnlFbnRyeVVwZGF0ZVBhcmFtcyB7XG4gIG5hbWU/OiBzdHJpbmcgfCBudWxsO1xuICBkaXNhYmxlZF9ieT86IHN0cmluZyB8IG51bGw7XG4gIG5ld19lbnRpdHlfaWQ/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjb25zdCBjb21wdXRlRW50aXR5UmVnaXN0cnlOYW1lID0gKFxuICBoYXNzOiBIb21lQXNzaXN0YW50LFxuICBlbnRyeTogRW50aXR5UmVnaXN0cnlFbnRyeVxuKTogc3RyaW5nIHwgbnVsbCA9PiB7XG4gIGlmIChlbnRyeS5uYW1lKSB7XG4gICAgcmV0dXJuIGVudHJ5Lm5hbWU7XG4gIH1cbiAgY29uc3Qgc3RhdGUgPSBoYXNzLnN0YXRlc1tlbnRyeS5lbnRpdHlfaWRdO1xuICByZXR1cm4gc3RhdGUgPyBjb21wdXRlU3RhdGVOYW1lKHN0YXRlKSA6IG51bGw7XG59O1xuXG5leHBvcnQgY29uc3QgdXBkYXRlRW50aXR5UmVnaXN0cnlFbnRyeSA9IChcbiAgaGFzczogSG9tZUFzc2lzdGFudCxcbiAgZW50aXR5SWQ6IHN0cmluZyxcbiAgdXBkYXRlczogUGFydGlhbDxFbnRpdHlSZWdpc3RyeUVudHJ5VXBkYXRlUGFyYW1zPlxuKTogUHJvbWlzZTxFbnRpdHlSZWdpc3RyeUVudHJ5PiA9PlxuICBoYXNzLmNhbGxXUzxFbnRpdHlSZWdpc3RyeUVudHJ5Pih7XG4gICAgdHlwZTogXCJjb25maWcvZW50aXR5X3JlZ2lzdHJ5L3VwZGF0ZVwiLFxuICAgIGVudGl0eV9pZDogZW50aXR5SWQsXG4gICAgLi4udXBkYXRlcyxcbiAgfSk7XG5cbmV4cG9ydCBjb25zdCByZW1vdmVFbnRpdHlSZWdpc3RyeUVudHJ5ID0gKFxuICBoYXNzOiBIb21lQXNzaXN0YW50LFxuICBlbnRpdHlJZDogc3RyaW5nXG4pOiBQcm9taXNlPHZvaWQ+ID0+XG4gIGhhc3MuY2FsbFdTKHtcbiAgICB0eXBlOiBcImNvbmZpZy9lbnRpdHlfcmVnaXN0cnkvcmVtb3ZlXCIsXG4gICAgZW50aXR5X2lkOiBlbnRpdHlJZCxcbiAgfSk7XG5cbmNvbnN0IGZldGNoRW50aXR5UmVnaXN0cnkgPSAoY29ubikgPT5cbiAgY29ubi5zZW5kTWVzc2FnZVByb21pc2Uoe1xuICAgIHR5cGU6IFwiY29uZmlnL2VudGl0eV9yZWdpc3RyeS9saXN0XCIsXG4gIH0pO1xuXG5jb25zdCBzdWJzY3JpYmVFbnRpdHlSZWdpc3RyeVVwZGF0ZXMgPSAoY29ubiwgc3RvcmUpID0+XG4gIGNvbm4uc3Vic2NyaWJlRXZlbnRzKFxuICAgIGRlYm91bmNlKFxuICAgICAgKCkgPT5cbiAgICAgICAgZmV0Y2hFbnRpdHlSZWdpc3RyeShjb25uKS50aGVuKChlbnRpdGllcykgPT5cbiAgICAgICAgICBzdG9yZS5zZXRTdGF0ZShlbnRpdGllcywgdHJ1ZSlcbiAgICAgICAgKSxcbiAgICAgIDUwMCxcbiAgICAgIHRydWVcbiAgICApLFxuICAgIFwiZW50aXR5X3JlZ2lzdHJ5X3VwZGF0ZWRcIlxuICApO1xuXG5leHBvcnQgY29uc3Qgc3Vic2NyaWJlRW50aXR5UmVnaXN0cnkgPSAoXG4gIGNvbm46IENvbm5lY3Rpb24sXG4gIG9uQ2hhbmdlOiAoZW50aXRpZXM6IEVudGl0eVJlZ2lzdHJ5RW50cnlbXSkgPT4gdm9pZFxuKSA9PlxuICBjcmVhdGVDb2xsZWN0aW9uPEVudGl0eVJlZ2lzdHJ5RW50cnlbXT4oXG4gICAgXCJfZW50aXR5UmVnaXN0cnlcIixcbiAgICBmZXRjaEVudGl0eVJlZ2lzdHJ5LFxuICAgIHN1YnNjcmliZUVudGl0eVJlZ2lzdHJ5VXBkYXRlcyxcbiAgICBjb25uLFxuICAgIG9uQ2hhbmdlXG4gICk7XG4iLCJpbXBvcnQge1xuICBMaXRFbGVtZW50LFxuICBUZW1wbGF0ZVJlc3VsdCxcbiAgaHRtbCxcbiAgY3NzLFxuICBDU1NSZXN1bHQsXG4gIHByb3BlcnR5LFxufSBmcm9tIFwibGl0LWVsZW1lbnRcIjtcblxuaW1wb3J0IHsgSG9tZUFzc2lzdGFudCB9IGZyb20gXCIuLi8uLi8uLi90eXBlc1wiO1xuaW1wb3J0IHtcbiAgRW50aXR5UmVnaXN0cnlFbnRyeSxcbiAgY29tcHV0ZUVudGl0eVJlZ2lzdHJ5TmFtZSxcbiAgc3Vic2NyaWJlRW50aXR5UmVnaXN0cnksXG59IGZyb20gXCIuLi8uLi8uLi9kYXRhL2VudGl0eV9yZWdpc3RyeVwiO1xuaW1wb3J0IFwiLi4vLi4vLi4vbGF5b3V0cy9oYXNzLXN1YnBhZ2VcIjtcbmltcG9ydCBcIi4uLy4uLy4uL2xheW91dHMvaGFzcy1sb2FkaW5nLXNjcmVlblwiO1xuaW1wb3J0IFwiLi4vLi4vLi4vY29tcG9uZW50cy9kYXRhLXRhYmxlL2hhLWRhdGEtdGFibGVcIjtcbmltcG9ydCBcIi4uLy4uLy4uL2NvbXBvbmVudHMvaGEtaWNvblwiO1xuaW1wb3J0IFwiLi4vLi4vLi4vY29tcG9uZW50cy9oYS1zd2l0Y2hcIjtcbmltcG9ydCB7IGRvbWFpbkljb24gfSBmcm9tIFwiLi4vLi4vLi4vY29tbW9uL2VudGl0eS9kb21haW5faWNvblwiO1xuaW1wb3J0IHsgc3RhdGVJY29uIH0gZnJvbSBcIi4uLy4uLy4uL2NvbW1vbi9lbnRpdHkvc3RhdGVfaWNvblwiO1xuaW1wb3J0IHsgY29tcHV0ZURvbWFpbiB9IGZyb20gXCIuLi8uLi8uLi9jb21tb24vZW50aXR5L2NvbXB1dGVfZG9tYWluXCI7XG5pbXBvcnQgXCIuLi9oYS1jb25maWctc2VjdGlvblwiO1xuaW1wb3J0IHtcbiAgc2hvd0VudGl0eVJlZ2lzdHJ5RGV0YWlsRGlhbG9nLFxuICBsb2FkRW50aXR5UmVnaXN0cnlEZXRhaWxEaWFsb2csXG59IGZyb20gXCIuL3Nob3ctZGlhbG9nLWVudGl0eS1yZWdpc3RyeS1kZXRhaWxcIjtcbmltcG9ydCB7IFVuc3Vic2NyaWJlRnVuYyB9IGZyb20gXCJob21lLWFzc2lzdGFudC1qcy13ZWJzb2NrZXRcIjtcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxuaW1wb3J0IHsgSGFTd2l0Y2ggfSBmcm9tIFwiLi4vLi4vLi4vY29tcG9uZW50cy9oYS1zd2l0Y2hcIjtcbmltcG9ydCBtZW1vaXplIGZyb20gXCJtZW1vaXplLW9uZVwiO1xuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG5pbXBvcnQge1xuICBEYXRhVGFibGVDb2x1bW5Db250YWluZXIsXG4gIFJvd0NsaWNrZWRFdmVudCxcbn0gZnJvbSBcIi4uLy4uLy4uL2NvbXBvbmVudHMvZGF0YS10YWJsZS9oYS1kYXRhLXRhYmxlXCI7XG5cbmNsYXNzIEhhQ29uZmlnRW50aXR5UmVnaXN0cnkgZXh0ZW5kcyBMaXRFbGVtZW50IHtcbiAgQHByb3BlcnR5KCkgcHVibGljIGhhc3MhOiBIb21lQXNzaXN0YW50O1xuICBAcHJvcGVydHkoKSBwdWJsaWMgaXNXaWRlPzogYm9vbGVhbjtcbiAgQHByb3BlcnR5KCkgcHJpdmF0ZSBfZW50aXRpZXM/OiBFbnRpdHlSZWdpc3RyeUVudHJ5W107XG4gIEBwcm9wZXJ0eSgpIHByaXZhdGUgX3Nob3dEaXNhYmxlZCA9IGZhbHNlO1xuICBwcml2YXRlIF91bnN1YkVudGl0aWVzPzogVW5zdWJzY3JpYmVGdW5jO1xuXG4gIHByaXZhdGUgX2NvbHVtbnMgPSBtZW1vaXplKFxuICAgIChfbGFuZ3VhZ2UpOiBEYXRhVGFibGVDb2x1bW5Db250YWluZXIgPT4ge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgaWNvbjoge1xuICAgICAgICAgIHRpdGxlOiBcIlwiLFxuICAgICAgICAgIHR5cGU6IFwiaWNvblwiLFxuICAgICAgICAgIHRlbXBsYXRlOiAoaWNvbikgPT4gaHRtbGBcbiAgICAgICAgICAgIDxoYS1pY29uIHNsb3Q9XCJpdGVtLWljb25cIiAuaWNvbj0ke2ljb259PjwvaGEtaWNvbj5cbiAgICAgICAgICBgLFxuICAgICAgICB9LFxuICAgICAgICBuYW1lOiB7XG4gICAgICAgICAgdGl0bGU6IHRoaXMuaGFzcy5sb2NhbGl6ZShcbiAgICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLmVudGl0eV9yZWdpc3RyeS5waWNrZXIuaGVhZGVycy5uYW1lXCJcbiAgICAgICAgICApLFxuICAgICAgICAgIHNvcnRhYmxlOiB0cnVlLFxuICAgICAgICAgIGZpbHRlcmFibGU6IHRydWUsXG4gICAgICAgICAgZGlyZWN0aW9uOiBcImFzY1wiLFxuICAgICAgICB9LFxuICAgICAgICBlbnRpdHlfaWQ6IHtcbiAgICAgICAgICB0aXRsZTogdGhpcy5oYXNzLmxvY2FsaXplKFxuICAgICAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcuZW50aXR5X3JlZ2lzdHJ5LnBpY2tlci5oZWFkZXJzLmVudGl0eV9pZFwiXG4gICAgICAgICAgKSxcbiAgICAgICAgICBzb3J0YWJsZTogdHJ1ZSxcbiAgICAgICAgICBmaWx0ZXJhYmxlOiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgICBwbGF0Zm9ybToge1xuICAgICAgICAgIHRpdGxlOiB0aGlzLmhhc3MubG9jYWxpemUoXG4gICAgICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy5lbnRpdHlfcmVnaXN0cnkucGlja2VyLmhlYWRlcnMuaW50ZWdyYXRpb25cIlxuICAgICAgICAgICksXG4gICAgICAgICAgc29ydGFibGU6IHRydWUsXG4gICAgICAgICAgZmlsdGVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICB0ZW1wbGF0ZTogKHBsYXRmb3JtKSA9PlxuICAgICAgICAgICAgaHRtbGBcbiAgICAgICAgICAgICAgJHt0aGlzLmhhc3MubG9jYWxpemUoYGNvbXBvbmVudC4ke3BsYXRmb3JtfS5jb25maWcudGl0bGVgKSB8fFxuICAgICAgICAgICAgICAgIHBsYXRmb3JtfVxuICAgICAgICAgICAgYCxcbiAgICAgICAgfSxcbiAgICAgICAgZGlzYWJsZWRfYnk6IHtcbiAgICAgICAgICB0aXRsZTogdGhpcy5oYXNzLmxvY2FsaXplKFxuICAgICAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcuZW50aXR5X3JlZ2lzdHJ5LnBpY2tlci5oZWFkZXJzLmVuYWJsZWRcIlxuICAgICAgICAgICksXG4gICAgICAgICAgdHlwZTogXCJpY29uXCIsXG4gICAgICAgICAgdGVtcGxhdGU6IChkaXNhYmxlZEJ5KSA9PiBodG1sYFxuICAgICAgICAgICAgPGhhLWljb25cbiAgICAgICAgICAgICAgc2xvdD1cIml0ZW0taWNvblwiXG4gICAgICAgICAgICAgIC5pY29uPSR7ZGlzYWJsZWRCeSA/IFwiaGFzczpjYW5jZWxcIiA6IFwiaGFzczpjaGVjay1jaXJjbGVcIn1cbiAgICAgICAgICAgID48L2hhLWljb24+XG4gICAgICAgICAgYCxcbiAgICAgICAgfSxcbiAgICAgIH07XG4gICAgfVxuICApO1xuXG4gIHByaXZhdGUgX2ZpbHRlcmVkRW50aXRpZXMgPSBtZW1vaXplKFxuICAgIChlbnRpdGllczogRW50aXR5UmVnaXN0cnlFbnRyeVtdLCBzaG93RGlzYWJsZWQ6IGJvb2xlYW4pID0+XG4gICAgICAoc2hvd0Rpc2FibGVkXG4gICAgICAgID8gZW50aXRpZXNcbiAgICAgICAgOiBlbnRpdGllcy5maWx0ZXIoKGVudGl0eSkgPT4gIUJvb2xlYW4oZW50aXR5LmRpc2FibGVkX2J5KSlcbiAgICAgICkubWFwKChlbnRyeSkgPT4ge1xuICAgICAgICBjb25zdCBzdGF0ZSA9IHRoaXMuaGFzcyEuc3RhdGVzW2VudHJ5LmVudGl0eV9pZF07XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgLi4uZW50cnksXG4gICAgICAgICAgaWNvbjogc3RhdGVcbiAgICAgICAgICAgID8gc3RhdGVJY29uKHN0YXRlKVxuICAgICAgICAgICAgOiBkb21haW5JY29uKGNvbXB1dGVEb21haW4oZW50cnkuZW50aXR5X2lkKSksXG4gICAgICAgICAgbmFtZTpcbiAgICAgICAgICAgIGNvbXB1dGVFbnRpdHlSZWdpc3RyeU5hbWUodGhpcy5oYXNzISwgZW50cnkpIHx8XG4gICAgICAgICAgICB0aGlzLmhhc3MhLmxvY2FsaXplKFwic3RhdGUuZGVmYXVsdC51bmF2YWlsYWJsZVwiKSxcbiAgICAgICAgfTtcbiAgICAgIH0pXG4gICk7XG5cbiAgcHVibGljIGRpc2Nvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIHN1cGVyLmRpc2Nvbm5lY3RlZENhbGxiYWNrKCk7XG4gICAgaWYgKHRoaXMuX3Vuc3ViRW50aXRpZXMpIHtcbiAgICAgIHRoaXMuX3Vuc3ViRW50aXRpZXMoKTtcbiAgICB9XG4gIH1cblxuICBwcm90ZWN0ZWQgcmVuZGVyKCk6IFRlbXBsYXRlUmVzdWx0IHwgdm9pZCB7XG4gICAgaWYgKCF0aGlzLmhhc3MgfHwgdGhpcy5fZW50aXRpZXMgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIGh0bWxgXG4gICAgICAgIDxoYXNzLWxvYWRpbmctc2NyZWVuPjwvaGFzcy1sb2FkaW5nLXNjcmVlbj5cbiAgICAgIGA7XG4gICAgfVxuICAgIHJldHVybiBodG1sYFxuICAgICAgPGhhc3Mtc3VicGFnZVxuICAgICAgICBoZWFkZXI9XCIke3RoaXMuaGFzcy5sb2NhbGl6ZShcbiAgICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy5lbnRpdHlfcmVnaXN0cnkuY2FwdGlvblwiXG4gICAgICAgICl9XCJcbiAgICAgID5cbiAgICAgICAgPGhhLWNvbmZpZy1zZWN0aW9uIC5pc1dpZGU9JHt0aGlzLmlzV2lkZX0+XG4gICAgICAgICAgPHNwYW4gc2xvdD1cImhlYWRlclwiPlxuICAgICAgICAgICAgJHt0aGlzLmhhc3MubG9jYWxpemUoXG4gICAgICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLmVudGl0eV9yZWdpc3RyeS5waWNrZXIuaGVhZGVyXCJcbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIDxzcGFuIHNsb3Q9XCJpbnRyb2R1Y3Rpb25cIj5cbiAgICAgICAgICAgICR7dGhpcy5oYXNzLmxvY2FsaXplKFxuICAgICAgICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy5lbnRpdHlfcmVnaXN0cnkucGlja2VyLmludHJvZHVjdGlvblwiXG4gICAgICAgICAgICApfVxuICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICR7dGhpcy5oYXNzLmxvY2FsaXplKFxuICAgICAgICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLmVudGl0eV9yZWdpc3RyeS5waWNrZXIuaW50cm9kdWN0aW9uMlwiXG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8YSBocmVmPVwiL2NvbmZpZy9pbnRlZ3JhdGlvbnNcIj5cbiAgICAgICAgICAgICAgJHt0aGlzLmhhc3MubG9jYWxpemUoXG4gICAgICAgICAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcuZW50aXR5X3JlZ2lzdHJ5LnBpY2tlci5pbnRlZ3JhdGlvbnNfcGFnZVwiXG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8aGEtc3dpdGNoXG4gICAgICAgICAgICAgID9jaGVja2VkPSR7dGhpcy5fc2hvd0Rpc2FibGVkfVxuICAgICAgICAgICAgICBAY2hhbmdlPSR7dGhpcy5fc2hvd0Rpc2FibGVkQ2hhbmdlZH1cbiAgICAgICAgICAgICAgPiR7dGhpcy5oYXNzLmxvY2FsaXplKFxuICAgICAgICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLmVudGl0eV9yZWdpc3RyeS5waWNrZXIuc2hvd19kaXNhYmxlZFwiXG4gICAgICAgICAgICAgICl9PC9oYS1zd2l0Y2hcbiAgICAgICAgICAgID5cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgPGhhLWRhdGEtdGFibGVcbiAgICAgICAgICAgIC5jb2x1bW5zPSR7dGhpcy5fY29sdW1ucyh0aGlzLmhhc3MubGFuZ3VhZ2UpfVxuICAgICAgICAgICAgLmRhdGE9JHt0aGlzLl9maWx0ZXJlZEVudGl0aWVzKHRoaXMuX2VudGl0aWVzLCB0aGlzLl9zaG93RGlzYWJsZWQpfVxuICAgICAgICAgICAgQHJvdy1jbGljaz0ke3RoaXMuX29wZW5FZGl0RW50cnl9XG4gICAgICAgICAgICBpZD1cImVudGl0eV9pZFwiXG4gICAgICAgICAgPlxuICAgICAgICAgIDwvaGEtZGF0YS10YWJsZT5cbiAgICAgICAgPC9oYS1jb25maWctc2VjdGlvbj5cbiAgICAgIDwvaGFzcy1zdWJwYWdlPlxuICAgIGA7XG4gIH1cblxuICBwcm90ZWN0ZWQgZmlyc3RVcGRhdGVkKGNoYW5nZWRQcm9wcyk6IHZvaWQge1xuICAgIHN1cGVyLmZpcnN0VXBkYXRlZChjaGFuZ2VkUHJvcHMpO1xuICAgIGxvYWRFbnRpdHlSZWdpc3RyeURldGFpbERpYWxvZygpO1xuICB9XG5cbiAgcHJvdGVjdGVkIHVwZGF0ZWQoY2hhbmdlZFByb3BzKSB7XG4gICAgc3VwZXIudXBkYXRlZChjaGFuZ2VkUHJvcHMpO1xuICAgIGlmICghdGhpcy5fdW5zdWJFbnRpdGllcykge1xuICAgICAgdGhpcy5fdW5zdWJFbnRpdGllcyA9IHN1YnNjcmliZUVudGl0eVJlZ2lzdHJ5KFxuICAgICAgICB0aGlzLmhhc3MuY29ubmVjdGlvbixcbiAgICAgICAgKGVudGl0aWVzKSA9PiB7XG4gICAgICAgICAgdGhpcy5fZW50aXRpZXMgPSBlbnRpdGllcztcbiAgICAgICAgfVxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9zaG93RGlzYWJsZWRDaGFuZ2VkKGV2OiBFdmVudCkge1xuICAgIHRoaXMuX3Nob3dEaXNhYmxlZCA9IChldi50YXJnZXQgYXMgSGFTd2l0Y2gpLmNoZWNrZWQ7XG4gIH1cblxuICBwcml2YXRlIF9vcGVuRWRpdEVudHJ5KGV2OiBDdXN0b21FdmVudCk6IHZvaWQge1xuICAgIGNvbnN0IGVudHJ5SWQgPSAoZXYuZGV0YWlsIGFzIFJvd0NsaWNrZWRFdmVudCkuaWQ7XG4gICAgY29uc3QgZW50cnkgPSB0aGlzLl9lbnRpdGllcyEuZmluZChcbiAgICAgIChlbnRpdHkpID0+IGVudGl0eS5lbnRpdHlfaWQgPT09IGVudHJ5SWRcbiAgICApO1xuICAgIGlmICghZW50cnkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgc2hvd0VudGl0eVJlZ2lzdHJ5RGV0YWlsRGlhbG9nKHRoaXMsIHtcbiAgICAgIGVudHJ5LFxuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIGdldCBzdHlsZXMoKTogQ1NTUmVzdWx0IHtcbiAgICByZXR1cm4gY3NzYFxuICAgICAgYSB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbiAgICAgIH1cbiAgICAgIGhhLWRhdGEtdGFibGUge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAyNHB4O1xuICAgICAgICBtYXJnaW4tdG9wOiAwcHg7XG4gICAgICB9XG4gICAgICBoYS1zd2l0Y2gge1xuICAgICAgICBtYXJnaW4tdG9wOiAxNnB4O1xuICAgICAgfVxuICAgIGA7XG4gIH1cbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwiaGEtY29uZmlnLWVudGl0eS1yZWdpc3RyeVwiLCBIYUNvbmZpZ0VudGl0eVJlZ2lzdHJ5KTtcbiIsImltcG9ydCB7IGZpcmVFdmVudCB9IGZyb20gXCIuLi8uLi8uLi9jb21tb24vZG9tL2ZpcmVfZXZlbnRcIjtcbmltcG9ydCB7IEVudGl0eVJlZ2lzdHJ5RW50cnkgfSBmcm9tIFwiLi4vLi4vLi4vZGF0YS9lbnRpdHlfcmVnaXN0cnlcIjtcblxuZXhwb3J0IGludGVyZmFjZSBFbnRpdHlSZWdpc3RyeURldGFpbERpYWxvZ1BhcmFtcyB7XG4gIGVudHJ5OiBFbnRpdHlSZWdpc3RyeUVudHJ5O1xufVxuXG5leHBvcnQgY29uc3QgbG9hZEVudGl0eVJlZ2lzdHJ5RGV0YWlsRGlhbG9nID0gKCkgPT5cbiAgaW1wb3J0KC8qIHdlYnBhY2tDaHVua05hbWU6IFwiZW50aXR5LXJlZ2lzdHJ5LWRldGFpbC1kaWFsb2dcIiAqLyBcIi4vZGlhbG9nLWVudGl0eS1yZWdpc3RyeS1kZXRhaWxcIik7XG5cbmV4cG9ydCBjb25zdCBzaG93RW50aXR5UmVnaXN0cnlEZXRhaWxEaWFsb2cgPSAoXG4gIGVsZW1lbnQ6IEhUTUxFbGVtZW50LFxuICBzeXN0ZW1Mb2dEZXRhaWxQYXJhbXM6IEVudGl0eVJlZ2lzdHJ5RGV0YWlsRGlhbG9nUGFyYW1zXG4pOiB2b2lkID0+IHtcbiAgZmlyZUV2ZW50KGVsZW1lbnQsIFwic2hvdy1kaWFsb2dcIiwge1xuICAgIGRpYWxvZ1RhZzogXCJkaWFsb2ctZW50aXR5LXJlZ2lzdHJ5LWRldGFpbFwiLFxuICAgIGRpYWxvZ0ltcG9ydDogbG9hZEVudGl0eVJlZ2lzdHJ5RGV0YWlsRGlhbG9nLFxuICAgIGRpYWxvZ1BhcmFtczogc3lzdGVtTG9nRGV0YWlsUGFyYW1zLFxuICB9KTtcbn07XG4iLCJpbXBvcnQgeyBodG1sIH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2h0bWwtdGFnXCI7XG5pbXBvcnQgeyBQb2x5bWVyRWxlbWVudCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL3BvbHltZXItZWxlbWVudFwiO1xuXG5pbXBvcnQgXCIuLi8uLi9yZXNvdXJjZXMvaGEtc3R5bGVcIjtcblxuY2xhc3MgSGFDb25maWdTZWN0aW9uIGV4dGVuZHMgUG9seW1lckVsZW1lbnQge1xuICBzdGF0aWMgZ2V0IHRlbXBsYXRlKCkge1xuICAgIHJldHVybiBodG1sYFxuICAgICAgPHN0eWxlIGluY2x1ZGU9XCJpcm9uLWZsZXggaGEtc3R5bGVcIj5cbiAgICAgICAgLmNvbnRlbnQge1xuICAgICAgICAgIHBhZGRpbmc6IDI4cHggMjBweCAwO1xuICAgICAgICAgIG1heC13aWR0aDogMTA0MHB4O1xuICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICB9XG5cbiAgICAgICAgLmhlYWRlciB7XG4gICAgICAgICAgQGFwcGx5IC0tcGFwZXItZm9udC1kaXNwbGF5MTtcbiAgICAgICAgICBvcGFjaXR5OiB2YXIoLS1kYXJrLXByaW1hcnktb3BhY2l0eSk7XG4gICAgICAgIH1cblxuICAgICAgICAudG9nZXRoZXIge1xuICAgICAgICAgIG1hcmdpbi10b3A6IDMycHg7XG4gICAgICAgIH1cblxuICAgICAgICAuaW50cm8ge1xuICAgICAgICAgIEBhcHBseSAtLXBhcGVyLWZvbnQtc3ViaGVhZDtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBtYXgtd2lkdGg6IDQwMHB4O1xuICAgICAgICAgIG1hcmdpbi1yaWdodDogNDBweDtcbiAgICAgICAgICBvcGFjaXR5OiB2YXIoLS1kYXJrLXByaW1hcnktb3BhY2l0eSk7XG4gICAgICAgIH1cblxuICAgICAgICAucGFuZWwge1xuICAgICAgICAgIG1hcmdpbi10b3A6IC0yNHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLnBhbmVsIDo6c2xvdHRlZCgqKSB7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMjRweDtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgfVxuXG4gICAgICAgIC5uYXJyb3cuY29udGVudCB7XG4gICAgICAgICAgbWF4LXdpZHRoOiA2NDBweDtcbiAgICAgICAgfVxuICAgICAgICAubmFycm93IC50b2dldGhlciB7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICAgICAgfVxuICAgICAgICAubmFycm93IC5oZWFkZXIge1xuICAgICAgICAgIEBhcHBseSAtLXBhcGVyLWZvbnQtaGVhZGxpbmU7XG4gICAgICAgIH1cbiAgICAgICAgLm5hcnJvdyAuaW50cm8ge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDA7XG4gICAgICAgICAgbWF4LXdpZHRoOiA1MDBweDtcbiAgICAgICAgfVxuICAgICAgPC9zdHlsZT5cbiAgICAgIDxkaXYgY2xhc3MkPVwiW1tjb21wdXRlQ29udGVudENsYXNzZXMoaXNXaWRlKV1dXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJoZWFkZXJcIj48c2xvdCBuYW1lPVwiaGVhZGVyXCI+PC9zbG90PjwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzJD1cIltbY29tcHV0ZUNsYXNzZXMoaXNXaWRlKV1dXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImludHJvXCI+PHNsb3QgbmFtZT1cImludHJvZHVjdGlvblwiPjwvc2xvdD48L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwicGFuZWwgZmxleC1hdXRvXCI+PHNsb3Q+PC9zbG90PjwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIGA7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGhhc3M6IHtcbiAgICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgfSxcblxuICAgICAgbmFycm93OiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICB9LFxuXG4gICAgICBpc1dpZGU6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgdmFsdWU6IGZhbHNlLFxuICAgICAgfSxcbiAgICB9O1xuICB9XG5cbiAgY29tcHV0ZUNvbnRlbnRDbGFzc2VzKGlzV2lkZSkge1xuICAgIHZhciBjbGFzc2VzID0gXCJjb250ZW50IFwiO1xuXG4gICAgcmV0dXJuIGlzV2lkZSA/IGNsYXNzZXMgOiBjbGFzc2VzICsgXCJuYXJyb3dcIjtcbiAgfVxuXG4gIGNvbXB1dGVDbGFzc2VzKGlzV2lkZSkge1xuICAgIHZhciBjbGFzc2VzID0gXCJ0b2dldGhlciBsYXlvdXQgXCI7XG5cbiAgICByZXR1cm4gY2xhc3NlcyArIChpc1dpZGUgPyBcImhvcml6b250YWxcIiA6IFwidmVydGljYWwgbmFycm93XCIpO1xuICB9XG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcImhhLWNvbmZpZy1zZWN0aW9uXCIsIEhhQ29uZmlnU2VjdGlvbik7XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFFQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDbERBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ0ZBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ0xBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ3BCQTtBQUFBO0FBQUE7QUFBQTs7OztBQUlBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQzNHQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDVkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ2pEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDaENBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUMvQkE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUEE7QUFLQTtBQUlBO0FBRUE7QUFBQTtBQUFBOztBQWVBO0FBWkE7QUFLQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBOztBQVFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25DQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBR0E7QUFBQTtBQUFBOztBQW1DQTtBQWhDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQWtCQTtBQUNBOzs7QUFBQTtBQWpDQTtBQUFBO0FBQUE7QUFEQTtBQURBO0FBQ0E7QUFtQ0E7QUFBQTtBQW5DQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVEE7QUFFQTtBQUNBO0FBaUJBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFLQTtBQUFBO0FBTUE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFHQTtBQUNBO0FBQUE7QUFEQTtBQUhBO0FBWUE7QUFJQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pFQTtBQVVBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFPQTtBQU9BO0FBQUE7QUFBQTtBQUFBO0FBSUE7QUFHQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBTUE7QUFDQTtBQUNBO0FBR0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBR0E7QUFDQTtBQUdBO0FBRUE7QUFkQTs7QUE0SEE7QUEzR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUlBO0FBTUE7QUFLQTtBQUlBO0FBS0E7QUFPQTtBQWFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQVlBOzs7QUFBQTtBQXhMQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFzTEE7QUFBQTtBQUVBOzs7Ozs7Ozs7Ozs7OztBQ2xPQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBT0E7QUFDQTtBQUFBO0FBRUE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkJBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUErRUE7QUFDQTtBQUVBO0FBQ0E7OztBQUVBO0FBQ0E7QUFFQTtBQUNBOzs7QUF4RkE7QUFDQTtBQTBEQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7QUFDQTtBQUZBO0FBVEE7QUFjQTs7OztBQTdFQTtBQUNBO0FBMkZBOzs7O0EiLCJzb3VyY2VSb290IjoiIn0=