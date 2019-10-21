(self["webpackJsonp"] = self["webpackJsonp"] || []).push([[4],{

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

/***/ "./src/components/entity/state-badge.ts":
/*!**********************************************!*\
  !*** ./src/components/entity/state-badge.ts ***!
  \**********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _ha_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ha-icon */ "./src/components/ha-icon.ts");
/* harmony import */ var _common_entity_compute_state_domain__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/entity/compute_state_domain */ "./src/common/entity/compute_state_domain.ts");
/* harmony import */ var _common_entity_state_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common/entity/state_icon */ "./src/common/entity/state_icon.ts");





var StateBadge = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(StateBadge, _super);
    function StateBadge() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    StateBadge.prototype.render = function () {
        var stateObj = this.stateObj;
        if (!stateObj) {
            return Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_1 || (templateObject_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])([""], [""])));
        }
        return Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_2 || (templateObject_2 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      <ha-icon\n        id=\"icon\"\n        data-domain=", "\n        data-state=", "\n        .icon=", "\n      ></ha-icon>\n    "], ["\n      <ha-icon\n        id=\"icon\"\n        data-domain=", "\n        data-state=", "\n        .icon=", "\n      ></ha-icon>\n    "])), Object(_common_entity_compute_state_domain__WEBPACK_IMPORTED_MODULE_3__["computeStateDomain"])(stateObj), stateObj.state, this.overrideIcon || Object(_common_entity_state_icon__WEBPACK_IMPORTED_MODULE_4__["stateIcon"])(stateObj));
    };
    StateBadge.prototype.updated = function (changedProps) {
        if (!changedProps.has("stateObj") || !this.stateObj) {
            return;
        }
        var stateObj = this.stateObj;
        var iconStyle = {
            color: "",
            filter: "",
        };
        var hostStyle = {
            backgroundImage: "",
        };
        if (stateObj) {
            // hide icon if we have entity picture
            if ((stateObj.attributes.entity_picture && !this.overrideIcon) ||
                this.overrideImage) {
                var imageUrl = this.overrideImage || stateObj.attributes.entity_picture;
                if (this.hass) {
                    imageUrl = this.hass.hassUrl(imageUrl);
                }
                hostStyle.backgroundImage = "url(" + imageUrl + ")";
                iconStyle.display = "none";
            }
            else {
                if (stateObj.attributes.hs_color) {
                    var hue = stateObj.attributes.hs_color[0];
                    var sat = stateObj.attributes.hs_color[1];
                    if (sat > 10) {
                        iconStyle.color = "hsl(" + hue + ", 100%, " + (100 - sat / 2) + "%)";
                    }
                }
                if (stateObj.attributes.brightness) {
                    var brightness = stateObj.attributes.brightness;
                    if (typeof brightness !== "number") {
                        var errorMessage = "Type error: state-badge expected number, but type of " + stateObj.entity_id + ".attributes.brightness is " + typeof brightness + " (" + brightness + ")";
                        // tslint:disable-next-line
                        console.warn(errorMessage);
                    }
                    // lowest brighntess will be around 50% (that's pretty dark)
                    iconStyle.filter = "brightness(" + (brightness + 245) / 5 + "%)";
                }
            }
        }
        Object.assign(this._icon.style, iconStyle);
        Object.assign(this.style, hostStyle);
    };
    Object.defineProperty(StateBadge, "styles", {
        get: function () {
            return Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["css"])(templateObject_3 || (templateObject_3 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      :host {\n        position: relative;\n        display: inline-block;\n        width: 40px;\n        color: var(--paper-item-icon-color, #44739e);\n        border-radius: 50%;\n        height: 40px;\n        text-align: center;\n        background-size: cover;\n        line-height: 40px;\n        vertical-align: middle;\n      }\n\n      ha-icon {\n        transition: color 0.3s ease-in-out, filter 0.3s ease-in-out;\n      }\n\n      /* Color the icon if light or sun is on */\n      ha-icon[data-domain=\"light\"][data-state=\"on\"],\n      ha-icon[data-domain=\"switch\"][data-state=\"on\"],\n      ha-icon[data-domain=\"binary_sensor\"][data-state=\"on\"],\n      ha-icon[data-domain=\"fan\"][data-state=\"on\"],\n      ha-icon[data-domain=\"sun\"][data-state=\"above_horizon\"] {\n        color: var(--paper-item-icon-active-color, #fdd835);\n      }\n\n      /* Color the icon if unavailable */\n      ha-icon[data-state=\"unavailable\"] {\n        color: var(--state-icon-unavailable-color);\n      }\n    "], ["\n      :host {\n        position: relative;\n        display: inline-block;\n        width: 40px;\n        color: var(--paper-item-icon-color, #44739e);\n        border-radius: 50%;\n        height: 40px;\n        text-align: center;\n        background-size: cover;\n        line-height: 40px;\n        vertical-align: middle;\n      }\n\n      ha-icon {\n        transition: color 0.3s ease-in-out, filter 0.3s ease-in-out;\n      }\n\n      /* Color the icon if light or sun is on */\n      ha-icon[data-domain=\"light\"][data-state=\"on\"],\n      ha-icon[data-domain=\"switch\"][data-state=\"on\"],\n      ha-icon[data-domain=\"binary_sensor\"][data-state=\"on\"],\n      ha-icon[data-domain=\"fan\"][data-state=\"on\"],\n      ha-icon[data-domain=\"sun\"][data-state=\"above_horizon\"] {\n        color: var(--paper-item-icon-active-color, #fdd835);\n      }\n\n      /* Color the icon if unavailable */\n      ha-icon[data-state=\"unavailable\"] {\n        color: var(--state-icon-unavailable-color);\n      }\n    "])));
        },
        enumerable: true,
        configurable: true
    });
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
    ], StateBadge.prototype, "stateObj", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
    ], StateBadge.prototype, "overrideIcon", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
    ], StateBadge.prototype, "overrideImage", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["query"])("ha-icon")
    ], StateBadge.prototype, "_icon", void 0);
    return StateBadge;
}(lit_element__WEBPACK_IMPORTED_MODULE_1__["LitElement"]));
customElements.define("state-badge", StateBadge);
var templateObject_1, templateObject_2, templateObject_3;


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNC5jaHVuay5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9jb21tb24vZW50aXR5L2JpbmFyeV9zZW5zb3JfaWNvbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL2VudGl0eS9jb21wdXRlX29iamVjdF9pZC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL2VudGl0eS9jb21wdXRlX3N0YXRlX2RvbWFpbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL2VudGl0eS9jb21wdXRlX3N0YXRlX25hbWUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9lbnRpdHkvY292ZXJfaWNvbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL2VudGl0eS9kb21haW5faWNvbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL2VudGl0eS9pbnB1dF9kYXRldGVpbWVfaWNvbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL2VudGl0eS9zZW5zb3JfaWNvbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL2VudGl0eS9zdGF0ZV9pY29uLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2VudGl0eS9zdGF0ZS1iYWRnZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIYXNzRW50aXR5IH0gZnJvbSBcImhvbWUtYXNzaXN0YW50LWpzLXdlYnNvY2tldFwiO1xuXG4vKiogUmV0dXJuIGFuIGljb24gcmVwcmVzZW50aW5nIGEgYmluYXJ5IHNlbnNvciBzdGF0ZS4gKi9cblxuZXhwb3J0IGNvbnN0IGJpbmFyeVNlbnNvckljb24gPSAoc3RhdGU6IEhhc3NFbnRpdHkpID0+IHtcbiAgY29uc3QgYWN0aXZhdGVkID0gc3RhdGUuc3RhdGUgJiYgc3RhdGUuc3RhdGUgPT09IFwib2ZmXCI7XG4gIHN3aXRjaCAoc3RhdGUuYXR0cmlidXRlcy5kZXZpY2VfY2xhc3MpIHtcbiAgICBjYXNlIFwiYmF0dGVyeVwiOlxuICAgICAgcmV0dXJuIGFjdGl2YXRlZCA/IFwiaGFzczpiYXR0ZXJ5XCIgOiBcImhhc3M6YmF0dGVyeS1vdXRsaW5lXCI7XG4gICAgY2FzZSBcImNvbGRcIjpcbiAgICAgIHJldHVybiBhY3RpdmF0ZWQgPyBcImhhc3M6dGhlcm1vbWV0ZXJcIiA6IFwiaGFzczpzbm93Zmxha2VcIjtcbiAgICBjYXNlIFwiY29ubmVjdGl2aXR5XCI6XG4gICAgICByZXR1cm4gYWN0aXZhdGVkID8gXCJoYXNzOnNlcnZlci1uZXR3b3JrLW9mZlwiIDogXCJoYXNzOnNlcnZlci1uZXR3b3JrXCI7XG4gICAgY2FzZSBcImRvb3JcIjpcbiAgICAgIHJldHVybiBhY3RpdmF0ZWQgPyBcImhhc3M6ZG9vci1jbG9zZWRcIiA6IFwiaGFzczpkb29yLW9wZW5cIjtcbiAgICBjYXNlIFwiZ2FyYWdlX2Rvb3JcIjpcbiAgICAgIHJldHVybiBhY3RpdmF0ZWQgPyBcImhhc3M6Z2FyYWdlXCIgOiBcImhhc3M6Z2FyYWdlLW9wZW5cIjtcbiAgICBjYXNlIFwiZ2FzXCI6XG4gICAgY2FzZSBcInBvd2VyXCI6XG4gICAgY2FzZSBcInByb2JsZW1cIjpcbiAgICBjYXNlIFwic2FmZXR5XCI6XG4gICAgY2FzZSBcInNtb2tlXCI6XG4gICAgICByZXR1cm4gYWN0aXZhdGVkID8gXCJoYXNzOnNoaWVsZC1jaGVja1wiIDogXCJoYXNzOmFsZXJ0XCI7XG4gICAgY2FzZSBcImhlYXRcIjpcbiAgICAgIHJldHVybiBhY3RpdmF0ZWQgPyBcImhhc3M6dGhlcm1vbWV0ZXJcIiA6IFwiaGFzczpmaXJlXCI7XG4gICAgY2FzZSBcImxpZ2h0XCI6XG4gICAgICByZXR1cm4gYWN0aXZhdGVkID8gXCJoYXNzOmJyaWdodG5lc3MtNVwiIDogXCJoYXNzOmJyaWdodG5lc3MtN1wiO1xuICAgIGNhc2UgXCJsb2NrXCI6XG4gICAgICByZXR1cm4gYWN0aXZhdGVkID8gXCJoYXNzOmxvY2tcIiA6IFwiaGFzczpsb2NrLW9wZW5cIjtcbiAgICBjYXNlIFwibW9pc3R1cmVcIjpcbiAgICAgIHJldHVybiBhY3RpdmF0ZWQgPyBcImhhc3M6d2F0ZXItb2ZmXCIgOiBcImhhc3M6d2F0ZXJcIjtcbiAgICBjYXNlIFwibW90aW9uXCI6XG4gICAgICByZXR1cm4gYWN0aXZhdGVkID8gXCJoYXNzOndhbGtcIiA6IFwiaGFzczpydW5cIjtcbiAgICBjYXNlIFwib2NjdXBhbmN5XCI6XG4gICAgICByZXR1cm4gYWN0aXZhdGVkID8gXCJoYXNzOmhvbWUtb3V0bGluZVwiIDogXCJoYXNzOmhvbWVcIjtcbiAgICBjYXNlIFwib3BlbmluZ1wiOlxuICAgICAgcmV0dXJuIGFjdGl2YXRlZCA/IFwiaGFzczpzcXVhcmVcIiA6IFwiaGFzczpzcXVhcmUtb3V0bGluZVwiO1xuICAgIGNhc2UgXCJwbHVnXCI6XG4gICAgICByZXR1cm4gYWN0aXZhdGVkID8gXCJoYXNzOnBvd2VyLXBsdWctb2ZmXCIgOiBcImhhc3M6cG93ZXItcGx1Z1wiO1xuICAgIGNhc2UgXCJwcmVzZW5jZVwiOlxuICAgICAgcmV0dXJuIGFjdGl2YXRlZCA/IFwiaGFzczpob21lLW91dGxpbmVcIiA6IFwiaGFzczpob21lXCI7XG4gICAgY2FzZSBcInNvdW5kXCI6XG4gICAgICByZXR1cm4gYWN0aXZhdGVkID8gXCJoYXNzOm11c2ljLW5vdGUtb2ZmXCIgOiBcImhhc3M6bXVzaWMtbm90ZVwiO1xuICAgIGNhc2UgXCJ2aWJyYXRpb25cIjpcbiAgICAgIHJldHVybiBhY3RpdmF0ZWQgPyBcImhhc3M6Y3JvcC1wb3J0cmFpdFwiIDogXCJoYXNzOnZpYnJhdGVcIjtcbiAgICBjYXNlIFwid2luZG93XCI6XG4gICAgICByZXR1cm4gYWN0aXZhdGVkID8gXCJoYXNzOndpbmRvdy1jbG9zZWRcIiA6IFwiaGFzczp3aW5kb3ctb3BlblwiO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gYWN0aXZhdGVkID8gXCJoYXNzOnJhZGlvYm94LWJsYW5rXCIgOiBcImhhc3M6Y2hlY2tib3gtbWFya2VkLWNpcmNsZVwiO1xuICB9XG59O1xuIiwiLyoqIENvbXB1dGUgdGhlIG9iamVjdCBJRCBvZiBhIHN0YXRlLiAqL1xuZXhwb3J0IGNvbnN0IGNvbXB1dGVPYmplY3RJZCA9IChlbnRpdHlJZDogc3RyaW5nKTogc3RyaW5nID0+IHtcbiAgcmV0dXJuIGVudGl0eUlkLnN1YnN0cihlbnRpdHlJZC5pbmRleE9mKFwiLlwiKSArIDEpO1xufTtcbiIsImltcG9ydCB7IEhhc3NFbnRpdHkgfSBmcm9tIFwiaG9tZS1hc3Npc3RhbnQtanMtd2Vic29ja2V0XCI7XG5pbXBvcnQgeyBjb21wdXRlRG9tYWluIH0gZnJvbSBcIi4vY29tcHV0ZV9kb21haW5cIjtcblxuZXhwb3J0IGNvbnN0IGNvbXB1dGVTdGF0ZURvbWFpbiA9IChzdGF0ZU9iajogSGFzc0VudGl0eSkgPT4ge1xuICByZXR1cm4gY29tcHV0ZURvbWFpbihzdGF0ZU9iai5lbnRpdHlfaWQpO1xufTtcbiIsImltcG9ydCB7IEhhc3NFbnRpdHkgfSBmcm9tIFwiaG9tZS1hc3Npc3RhbnQtanMtd2Vic29ja2V0XCI7XG5pbXBvcnQgeyBjb21wdXRlT2JqZWN0SWQgfSBmcm9tIFwiLi9jb21wdXRlX29iamVjdF9pZFwiO1xuXG5leHBvcnQgY29uc3QgY29tcHV0ZVN0YXRlTmFtZSA9IChzdGF0ZU9iajogSGFzc0VudGl0eSk6IHN0cmluZyA9PiB7XG4gIHJldHVybiBzdGF0ZU9iai5hdHRyaWJ1dGVzLmZyaWVuZGx5X25hbWUgPT09IHVuZGVmaW5lZFxuICAgID8gY29tcHV0ZU9iamVjdElkKHN0YXRlT2JqLmVudGl0eV9pZCkucmVwbGFjZSgvXy9nLCBcIiBcIilcbiAgICA6IHN0YXRlT2JqLmF0dHJpYnV0ZXMuZnJpZW5kbHlfbmFtZSB8fCBcIlwiO1xufTtcbiIsIi8qKiBSZXR1cm4gYW4gaWNvbiByZXByZXNlbnRpbmcgYSBjb3ZlciBzdGF0ZS4gKi9cbmltcG9ydCB7IEhhc3NFbnRpdHkgfSBmcm9tIFwiaG9tZS1hc3Npc3RhbnQtanMtd2Vic29ja2V0XCI7XG5pbXBvcnQgeyBkb21haW5JY29uIH0gZnJvbSBcIi4vZG9tYWluX2ljb25cIjtcblxuZXhwb3J0IGNvbnN0IGNvdmVySWNvbiA9IChzdGF0ZTogSGFzc0VudGl0eSk6IHN0cmluZyA9PiB7XG4gIGNvbnN0IG9wZW4gPSBzdGF0ZS5zdGF0ZSAhPT0gXCJjbG9zZWRcIjtcbiAgc3dpdGNoIChzdGF0ZS5hdHRyaWJ1dGVzLmRldmljZV9jbGFzcykge1xuICAgIGNhc2UgXCJnYXJhZ2VcIjpcbiAgICAgIHJldHVybiBvcGVuID8gXCJoYXNzOmdhcmFnZS1vcGVuXCIgOiBcImhhc3M6Z2FyYWdlXCI7XG4gICAgY2FzZSBcImRvb3JcIjpcbiAgICAgIHJldHVybiBvcGVuID8gXCJoYXNzOmRvb3Itb3BlblwiIDogXCJoYXNzOmRvb3ItY2xvc2VkXCI7XG4gICAgY2FzZSBcInNodXR0ZXJcIjpcbiAgICAgIHJldHVybiBvcGVuID8gXCJoYXNzOndpbmRvdy1zaHV0dGVyLW9wZW5cIiA6IFwiaGFzczp3aW5kb3ctc2h1dHRlclwiO1xuICAgIGNhc2UgXCJibGluZFwiOlxuICAgICAgcmV0dXJuIG9wZW4gPyBcImhhc3M6YmxpbmRzLW9wZW5cIiA6IFwiaGFzczpibGluZHNcIjtcbiAgICBjYXNlIFwid2luZG93XCI6XG4gICAgICByZXR1cm4gb3BlbiA/IFwiaGFzczp3aW5kb3ctb3BlblwiIDogXCJoYXNzOndpbmRvdy1jbG9zZWRcIjtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIGRvbWFpbkljb24oXCJjb3ZlclwiLCBzdGF0ZS5zdGF0ZSk7XG4gIH1cbn07XG4iLCIvKipcbiAqIFJldHVybiB0aGUgaWNvbiB0byBiZSB1c2VkIGZvciBhIGRvbWFpbi5cbiAqXG4gKiBPcHRpb25hbGx5IHBhc3MgaW4gYSBzdGF0ZSB0byBpbmZsdWVuY2UgdGhlIGRvbWFpbiBpY29uLlxuICovXG5pbXBvcnQgeyBERUZBVUxUX0RPTUFJTl9JQ09OIH0gZnJvbSBcIi4uL2NvbnN0XCI7XG5cbmNvbnN0IGZpeGVkSWNvbnMgPSB7XG4gIGFsZXJ0OiBcImhhc3M6YWxlcnRcIixcbiAgYWxleGE6IFwiaGFzczphbWF6b24tYWxleGFcIixcbiAgYXV0b21hdGlvbjogXCJoYXNzOnBsYXlsaXN0LXBsYXlcIixcbiAgY2FsZW5kYXI6IFwiaGFzczpjYWxlbmRhclwiLFxuICBjYW1lcmE6IFwiaGFzczp2aWRlb1wiLFxuICBjbGltYXRlOiBcImhhc3M6dGhlcm1vc3RhdFwiLFxuICBjb25maWd1cmF0b3I6IFwiaGFzczpzZXR0aW5nc1wiLFxuICBjb252ZXJzYXRpb246IFwiaGFzczp0ZXh0LXRvLXNwZWVjaFwiLFxuICBkZXZpY2VfdHJhY2tlcjogXCJoYXNzOmFjY291bnRcIixcbiAgZmFuOiBcImhhc3M6ZmFuXCIsXG4gIGdvb2dsZV9hc3Npc3RhbnQ6IFwiaGFzczpnb29nbGUtYXNzaXN0YW50XCIsXG4gIGdyb3VwOiBcImhhc3M6Z29vZ2xlLWNpcmNsZXMtY29tbXVuaXRpZXNcIixcbiAgaGlzdG9yeV9ncmFwaDogXCJoYXNzOmNoYXJ0LWxpbmVcIixcbiAgaG9tZWFzc2lzdGFudDogXCJoYXNzOmhvbWUtYXNzaXN0YW50XCIsXG4gIGhvbWVraXQ6IFwiaGFzczpob21lLWF1dG9tYXRpb25cIixcbiAgaW1hZ2VfcHJvY2Vzc2luZzogXCJoYXNzOmltYWdlLWZpbHRlci1mcmFtZXNcIixcbiAgaW5wdXRfYm9vbGVhbjogXCJoYXNzOmRyYXdpbmdcIixcbiAgaW5wdXRfZGF0ZXRpbWU6IFwiaGFzczpjYWxlbmRhci1jbG9ja1wiLFxuICBpbnB1dF9udW1iZXI6IFwiaGFzczpyYXktdmVydGV4XCIsXG4gIGlucHV0X3NlbGVjdDogXCJoYXNzOmZvcm1hdC1saXN0LWJ1bGxldGVkXCIsXG4gIGlucHV0X3RleHQ6IFwiaGFzczp0ZXh0Ym94XCIsXG4gIGxpZ2h0OiBcImhhc3M6bGlnaHRidWxiXCIsXG4gIG1haWxib3g6IFwiaGFzczptYWlsYm94XCIsXG4gIG5vdGlmeTogXCJoYXNzOmNvbW1lbnQtYWxlcnRcIixcbiAgcGVyc2lzdGVudF9ub3RpZmljYXRpb246IFwiaGFzczpiZWxsXCIsXG4gIHBlcnNvbjogXCJoYXNzOmFjY291bnRcIixcbiAgcGxhbnQ6IFwiaGFzczpmbG93ZXJcIixcbiAgcHJveGltaXR5OiBcImhhc3M6YXBwbGUtc2FmYXJpXCIsXG4gIHJlbW90ZTogXCJoYXNzOnJlbW90ZVwiLFxuICBzY2VuZTogXCJoYXNzOmdvb2dsZS1wYWdlc1wiLFxuICBzY3JpcHQ6IFwiaGFzczpmaWxlLWRvY3VtZW50XCIsXG4gIHNlbnNvcjogXCJoYXNzOmV5ZVwiLFxuICBzaW1wbGVfYWxhcm06IFwiaGFzczpiZWxsXCIsXG4gIHN1bjogXCJoYXNzOndoaXRlLWJhbGFuY2Utc3VubnlcIixcbiAgc3dpdGNoOiBcImhhc3M6Zmxhc2hcIixcbiAgdGltZXI6IFwiaGFzczp0aW1lclwiLFxuICB1cGRhdGVyOiBcImhhc3M6Y2xvdWQtdXBsb2FkXCIsXG4gIHZhY3V1bTogXCJoYXNzOnJvYm90LXZhY3V1bVwiLFxuICB3YXRlcl9oZWF0ZXI6IFwiaGFzczp0aGVybW9tZXRlclwiLFxuICB3ZWF0aGVyOiBcImhhc3M6d2VhdGhlci1jbG91ZHlcIixcbiAgd2VibGluazogXCJoYXNzOm9wZW4taW4tbmV3XCIsXG4gIHpvbmU6IFwiaGFzczptYXAtbWFya2VyXCIsXG59O1xuXG5leHBvcnQgY29uc3QgZG9tYWluSWNvbiA9IChkb21haW46IHN0cmluZywgc3RhdGU/OiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuICBpZiAoZG9tYWluIGluIGZpeGVkSWNvbnMpIHtcbiAgICByZXR1cm4gZml4ZWRJY29uc1tkb21haW5dO1xuICB9XG5cbiAgc3dpdGNoIChkb21haW4pIHtcbiAgICBjYXNlIFwiYWxhcm1fY29udHJvbF9wYW5lbFwiOlxuICAgICAgc3dpdGNoIChzdGF0ZSkge1xuICAgICAgICBjYXNlIFwiYXJtZWRfaG9tZVwiOlxuICAgICAgICAgIHJldHVybiBcImhhc3M6YmVsbC1wbHVzXCI7XG4gICAgICAgIGNhc2UgXCJhcm1lZF9uaWdodFwiOlxuICAgICAgICAgIHJldHVybiBcImhhc3M6YmVsbC1zbGVlcFwiO1xuICAgICAgICBjYXNlIFwiZGlzYXJtZWRcIjpcbiAgICAgICAgICByZXR1cm4gXCJoYXNzOmJlbGwtb3V0bGluZVwiO1xuICAgICAgICBjYXNlIFwidHJpZ2dlcmVkXCI6XG4gICAgICAgICAgcmV0dXJuIFwiaGFzczpiZWxsLXJpbmdcIjtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZXR1cm4gXCJoYXNzOmJlbGxcIjtcbiAgICAgIH1cblxuICAgIGNhc2UgXCJiaW5hcnlfc2Vuc29yXCI6XG4gICAgICByZXR1cm4gc3RhdGUgJiYgc3RhdGUgPT09IFwib2ZmXCJcbiAgICAgICAgPyBcImhhc3M6cmFkaW9ib3gtYmxhbmtcIlxuICAgICAgICA6IFwiaGFzczpjaGVja2JveC1tYXJrZWQtY2lyY2xlXCI7XG5cbiAgICBjYXNlIFwiY292ZXJcIjpcbiAgICAgIHJldHVybiBzdGF0ZSA9PT0gXCJjbG9zZWRcIiA/IFwiaGFzczp3aW5kb3ctY2xvc2VkXCIgOiBcImhhc3M6d2luZG93LW9wZW5cIjtcblxuICAgIGNhc2UgXCJsb2NrXCI6XG4gICAgICByZXR1cm4gc3RhdGUgJiYgc3RhdGUgPT09IFwidW5sb2NrZWRcIiA/IFwiaGFzczpsb2NrLW9wZW5cIiA6IFwiaGFzczpsb2NrXCI7XG5cbiAgICBjYXNlIFwibWVkaWFfcGxheWVyXCI6XG4gICAgICByZXR1cm4gc3RhdGUgJiYgc3RhdGUgIT09IFwib2ZmXCIgJiYgc3RhdGUgIT09IFwiaWRsZVwiXG4gICAgICAgID8gXCJoYXNzOmNhc3QtY29ubmVjdGVkXCJcbiAgICAgICAgOiBcImhhc3M6Y2FzdFwiO1xuXG4gICAgY2FzZSBcInp3YXZlXCI6XG4gICAgICBzd2l0Y2ggKHN0YXRlKSB7XG4gICAgICAgIGNhc2UgXCJkZWFkXCI6XG4gICAgICAgICAgcmV0dXJuIFwiaGFzczplbW90aWNvbi1kZWFkXCI7XG4gICAgICAgIGNhc2UgXCJzbGVlcGluZ1wiOlxuICAgICAgICAgIHJldHVybiBcImhhc3M6c2xlZXBcIjtcbiAgICAgICAgY2FzZSBcImluaXRpYWxpemluZ1wiOlxuICAgICAgICAgIHJldHVybiBcImhhc3M6dGltZXItc2FuZFwiO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHJldHVybiBcImhhc3M6ei13YXZlXCI7XG4gICAgICB9XG5cbiAgICBkZWZhdWx0OlxuICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG4gICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgIFwiVW5hYmxlIHRvIGZpbmQgaWNvbiBmb3IgZG9tYWluIFwiICsgZG9tYWluICsgXCIgKFwiICsgc3RhdGUgKyBcIilcIlxuICAgICAgKTtcbiAgICAgIHJldHVybiBERUZBVUxUX0RPTUFJTl9JQ09OO1xuICB9XG59O1xuIiwiLyoqIFJldHVybiBhbiBpY29uIHJlcHJlc2VudGluZyBhbiBpbnB1dCBkYXRldGltZSBzdGF0ZS4gKi9cbmltcG9ydCB7IGRvbWFpbkljb24gfSBmcm9tIFwiLi9kb21haW5faWNvblwiO1xuaW1wb3J0IHsgSGFzc0VudGl0eSB9IGZyb20gXCJob21lLWFzc2lzdGFudC1qcy13ZWJzb2NrZXRcIjtcblxuZXhwb3J0IGNvbnN0IGlucHV0RGF0ZVRpbWVJY29uID0gKHN0YXRlOiBIYXNzRW50aXR5KTogc3RyaW5nID0+IHtcbiAgaWYgKCFzdGF0ZS5hdHRyaWJ1dGVzLmhhc19kYXRlKSB7XG4gICAgcmV0dXJuIFwiaGFzczpjbG9ja1wiO1xuICB9XG4gIGlmICghc3RhdGUuYXR0cmlidXRlcy5oYXNfdGltZSkge1xuICAgIHJldHVybiBcImhhc3M6Y2FsZW5kYXJcIjtcbiAgfVxuICByZXR1cm4gZG9tYWluSWNvbihcImlucHV0X2RhdGV0aW1lXCIpO1xufTtcbiIsIi8qKiBSZXR1cm4gYW4gaWNvbiByZXByZXNlbnRpbmcgYSBzZW5zb3Igc3RhdGUuICovXG5pbXBvcnQgeyBIYXNzRW50aXR5IH0gZnJvbSBcImhvbWUtYXNzaXN0YW50LWpzLXdlYnNvY2tldFwiO1xuaW1wb3J0IHsgVU5JVF9DLCBVTklUX0YgfSBmcm9tIFwiLi4vY29uc3RcIjtcbmltcG9ydCB7IGRvbWFpbkljb24gfSBmcm9tIFwiLi9kb21haW5faWNvblwiO1xuXG5jb25zdCBmaXhlZERldmljZUNsYXNzSWNvbnMgPSB7XG4gIGh1bWlkaXR5OiBcImhhc3M6d2F0ZXItcGVyY2VudFwiLFxuICBpbGx1bWluYW5jZTogXCJoYXNzOmJyaWdodG5lc3MtNVwiLFxuICB0ZW1wZXJhdHVyZTogXCJoYXNzOnRoZXJtb21ldGVyXCIsXG4gIHByZXNzdXJlOiBcImhhc3M6Z2F1Z2VcIixcbiAgcG93ZXI6IFwiaGFzczpmbGFzaFwiLFxuICBzaWduYWxfc3RyZW5ndGg6IFwiaGFzczp3aWZpXCIsXG59O1xuXG5leHBvcnQgY29uc3Qgc2Vuc29ySWNvbiA9IChzdGF0ZTogSGFzc0VudGl0eSkgPT4ge1xuICBjb25zdCBkY2xhc3MgPSBzdGF0ZS5hdHRyaWJ1dGVzLmRldmljZV9jbGFzcztcblxuICBpZiAoZGNsYXNzICYmIGRjbGFzcyBpbiBmaXhlZERldmljZUNsYXNzSWNvbnMpIHtcbiAgICByZXR1cm4gZml4ZWREZXZpY2VDbGFzc0ljb25zW2RjbGFzc107XG4gIH1cbiAgaWYgKGRjbGFzcyA9PT0gXCJiYXR0ZXJ5XCIpIHtcbiAgICBjb25zdCBiYXR0ZXJ5ID0gTnVtYmVyKHN0YXRlLnN0YXRlKTtcbiAgICBpZiAoaXNOYU4oYmF0dGVyeSkpIHtcbiAgICAgIHJldHVybiBcImhhc3M6YmF0dGVyeS11bmtub3duXCI7XG4gICAgfVxuICAgIGNvbnN0IGJhdHRlcnlSb3VuZCA9IE1hdGgucm91bmQoYmF0dGVyeSAvIDEwKSAqIDEwO1xuICAgIGlmIChiYXR0ZXJ5Um91bmQgPj0gMTAwKSB7XG4gICAgICByZXR1cm4gXCJoYXNzOmJhdHRlcnlcIjtcbiAgICB9XG4gICAgaWYgKGJhdHRlcnlSb3VuZCA8PSAwKSB7XG4gICAgICByZXR1cm4gXCJoYXNzOmJhdHRlcnktYWxlcnRcIjtcbiAgICB9XG4gICAgLy8gV2lsbCByZXR1cm4gb25lIG9mIHRoZSBmb2xsb3dpbmcgaWNvbnM6IChsaXN0ZWQgc28gZXh0cmFjdG9yIHBpY2tzIHVwKVxuICAgIC8vIGhhc3M6YmF0dGVyeS0xMFxuICAgIC8vIGhhc3M6YmF0dGVyeS0yMFxuICAgIC8vIGhhc3M6YmF0dGVyeS0zMFxuICAgIC8vIGhhc3M6YmF0dGVyeS00MFxuICAgIC8vIGhhc3M6YmF0dGVyeS01MFxuICAgIC8vIGhhc3M6YmF0dGVyeS02MFxuICAgIC8vIGhhc3M6YmF0dGVyeS03MFxuICAgIC8vIGhhc3M6YmF0dGVyeS04MFxuICAgIC8vIGhhc3M6YmF0dGVyeS05MFxuICAgIC8vIFdlIG9ic2N1cmUgJ2hhc3MnIGluIGljb25uYW1lIHNvIHRoaXMgbmFtZSBkb2VzIG5vdCBnZXQgcGlja2VkIHVwXG4gICAgcmV0dXJuIGAke1wiaGFzc1wifTpiYXR0ZXJ5LSR7YmF0dGVyeVJvdW5kfWA7XG4gIH1cblxuICBjb25zdCB1bml0ID0gc3RhdGUuYXR0cmlidXRlcy51bml0X29mX21lYXN1cmVtZW50O1xuICBpZiAodW5pdCA9PT0gVU5JVF9DIHx8IHVuaXQgPT09IFVOSVRfRikge1xuICAgIHJldHVybiBcImhhc3M6dGhlcm1vbWV0ZXJcIjtcbiAgfVxuICByZXR1cm4gZG9tYWluSWNvbihcInNlbnNvclwiKTtcbn07XG4iLCIvKiogUmV0dXJuIGFuIGljb24gcmVwcmVzZW50aW5nIGEgc3RhdGUuICovXG5pbXBvcnQgeyBIYXNzRW50aXR5IH0gZnJvbSBcImhvbWUtYXNzaXN0YW50LWpzLXdlYnNvY2tldFwiO1xuaW1wb3J0IHsgREVGQVVMVF9ET01BSU5fSUNPTiB9IGZyb20gXCIuLi9jb25zdFwiO1xuaW1wb3J0IHsgYmluYXJ5U2Vuc29ySWNvbiB9IGZyb20gXCIuL2JpbmFyeV9zZW5zb3JfaWNvblwiO1xuXG5pbXBvcnQgeyBjb21wdXRlRG9tYWluIH0gZnJvbSBcIi4vY29tcHV0ZV9kb21haW5cIjtcbmltcG9ydCB7IGRvbWFpbkljb24gfSBmcm9tIFwiLi9kb21haW5faWNvblwiO1xuaW1wb3J0IHsgY292ZXJJY29uIH0gZnJvbSBcIi4vY292ZXJfaWNvblwiO1xuaW1wb3J0IHsgc2Vuc29ySWNvbiB9IGZyb20gXCIuL3NlbnNvcl9pY29uXCI7XG5pbXBvcnQgeyBpbnB1dERhdGVUaW1lSWNvbiB9IGZyb20gXCIuL2lucHV0X2RhdGV0ZWltZV9pY29uXCI7XG5cbmNvbnN0IGRvbWFpbkljb25zID0ge1xuICBiaW5hcnlfc2Vuc29yOiBiaW5hcnlTZW5zb3JJY29uLFxuICBjb3ZlcjogY292ZXJJY29uLFxuICBzZW5zb3I6IHNlbnNvckljb24sXG4gIGlucHV0X2RhdGV0aW1lOiBpbnB1dERhdGVUaW1lSWNvbixcbn07XG5cbmV4cG9ydCBjb25zdCBzdGF0ZUljb24gPSAoc3RhdGU6IEhhc3NFbnRpdHkpID0+IHtcbiAgaWYgKCFzdGF0ZSkge1xuICAgIHJldHVybiBERUZBVUxUX0RPTUFJTl9JQ09OO1xuICB9XG4gIGlmIChzdGF0ZS5hdHRyaWJ1dGVzLmljb24pIHtcbiAgICByZXR1cm4gc3RhdGUuYXR0cmlidXRlcy5pY29uO1xuICB9XG5cbiAgY29uc3QgZG9tYWluID0gY29tcHV0ZURvbWFpbihzdGF0ZS5lbnRpdHlfaWQpO1xuXG4gIGlmIChkb21haW4gaW4gZG9tYWluSWNvbnMpIHtcbiAgICByZXR1cm4gZG9tYWluSWNvbnNbZG9tYWluXShzdGF0ZSk7XG4gIH1cbiAgcmV0dXJuIGRvbWFpbkljb24oZG9tYWluLCBzdGF0ZS5zdGF0ZSk7XG59O1xuIiwiaW1wb3J0IHtcbiAgTGl0RWxlbWVudCxcbiAgVGVtcGxhdGVSZXN1bHQsXG4gIGNzcyxcbiAgQ1NTUmVzdWx0LFxuICBodG1sLFxuICBwcm9wZXJ0eSxcbiAgUHJvcGVydHlWYWx1ZXMsXG4gIHF1ZXJ5LFxufSBmcm9tIFwibGl0LWVsZW1lbnRcIjtcbmltcG9ydCBcIi4uL2hhLWljb25cIjtcbmltcG9ydCB7IGNvbXB1dGVTdGF0ZURvbWFpbiB9IGZyb20gXCIuLi8uLi9jb21tb24vZW50aXR5L2NvbXB1dGVfc3RhdGVfZG9tYWluXCI7XG5pbXBvcnQgeyBzdGF0ZUljb24gfSBmcm9tIFwiLi4vLi4vY29tbW9uL2VudGl0eS9zdGF0ZV9pY29uXCI7XG5pbXBvcnQgeyBIYXNzRW50aXR5IH0gZnJvbSBcImhvbWUtYXNzaXN0YW50LWpzLXdlYnNvY2tldFwiO1xuLy8gTm90IGR1cGxpY2F0ZSwgdGhpcyBpcyBmb3IgdHlwaW5nLlxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG5pbXBvcnQgeyBIYUljb24gfSBmcm9tIFwiLi4vaGEtaWNvblwiO1xuaW1wb3J0IHsgSG9tZUFzc2lzdGFudCB9IGZyb20gXCIuLi8uLi90eXBlc1wiO1xuXG5jbGFzcyBTdGF0ZUJhZGdlIGV4dGVuZHMgTGl0RWxlbWVudCB7XG4gIHB1YmxpYyBoYXNzPzogSG9tZUFzc2lzdGFudDtcbiAgQHByb3BlcnR5KCkgcHVibGljIHN0YXRlT2JqPzogSGFzc0VudGl0eTtcbiAgQHByb3BlcnR5KCkgcHVibGljIG92ZXJyaWRlSWNvbj86IHN0cmluZztcbiAgQHByb3BlcnR5KCkgcHVibGljIG92ZXJyaWRlSW1hZ2U/OiBzdHJpbmc7XG4gIEBxdWVyeShcImhhLWljb25cIikgcHJpdmF0ZSBfaWNvbiE6IEhhSWNvbjtcblxuICBwcm90ZWN0ZWQgcmVuZGVyKCk6IFRlbXBsYXRlUmVzdWx0IHwgdm9pZCB7XG4gICAgY29uc3Qgc3RhdGVPYmogPSB0aGlzLnN0YXRlT2JqO1xuXG4gICAgaWYgKCFzdGF0ZU9iaikge1xuICAgICAgcmV0dXJuIGh0bWxgYDtcbiAgICB9XG5cbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxoYS1pY29uXG4gICAgICAgIGlkPVwiaWNvblwiXG4gICAgICAgIGRhdGEtZG9tYWluPSR7Y29tcHV0ZVN0YXRlRG9tYWluKHN0YXRlT2JqKX1cbiAgICAgICAgZGF0YS1zdGF0ZT0ke3N0YXRlT2JqLnN0YXRlfVxuICAgICAgICAuaWNvbj0ke3RoaXMub3ZlcnJpZGVJY29uIHx8IHN0YXRlSWNvbihzdGF0ZU9iail9XG4gICAgICA+PC9oYS1pY29uPlxuICAgIGA7XG4gIH1cblxuICBwcm90ZWN0ZWQgdXBkYXRlZChjaGFuZ2VkUHJvcHM6IFByb3BlcnR5VmFsdWVzKSB7XG4gICAgaWYgKCFjaGFuZ2VkUHJvcHMuaGFzKFwic3RhdGVPYmpcIikgfHwgIXRoaXMuc3RhdGVPYmopIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3Qgc3RhdGVPYmogPSB0aGlzLnN0YXRlT2JqO1xuXG4gICAgY29uc3QgaWNvblN0eWxlOiBQYXJ0aWFsPENTU1N0eWxlRGVjbGFyYXRpb24+ID0ge1xuICAgICAgY29sb3I6IFwiXCIsXG4gICAgICBmaWx0ZXI6IFwiXCIsXG4gICAgfTtcbiAgICBjb25zdCBob3N0U3R5bGU6IFBhcnRpYWw8Q1NTU3R5bGVEZWNsYXJhdGlvbj4gPSB7XG4gICAgICBiYWNrZ3JvdW5kSW1hZ2U6IFwiXCIsXG4gICAgfTtcbiAgICBpZiAoc3RhdGVPYmopIHtcbiAgICAgIC8vIGhpZGUgaWNvbiBpZiB3ZSBoYXZlIGVudGl0eSBwaWN0dXJlXG4gICAgICBpZiAoXG4gICAgICAgIChzdGF0ZU9iai5hdHRyaWJ1dGVzLmVudGl0eV9waWN0dXJlICYmICF0aGlzLm92ZXJyaWRlSWNvbikgfHxcbiAgICAgICAgdGhpcy5vdmVycmlkZUltYWdlXG4gICAgICApIHtcbiAgICAgICAgbGV0IGltYWdlVXJsID0gdGhpcy5vdmVycmlkZUltYWdlIHx8IHN0YXRlT2JqLmF0dHJpYnV0ZXMuZW50aXR5X3BpY3R1cmU7XG4gICAgICAgIGlmICh0aGlzLmhhc3MpIHtcbiAgICAgICAgICBpbWFnZVVybCA9IHRoaXMuaGFzcy5oYXNzVXJsKGltYWdlVXJsKTtcbiAgICAgICAgfVxuICAgICAgICBob3N0U3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgke2ltYWdlVXJsfSlgO1xuICAgICAgICBpY29uU3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKHN0YXRlT2JqLmF0dHJpYnV0ZXMuaHNfY29sb3IpIHtcbiAgICAgICAgICBjb25zdCBodWUgPSBzdGF0ZU9iai5hdHRyaWJ1dGVzLmhzX2NvbG9yWzBdO1xuICAgICAgICAgIGNvbnN0IHNhdCA9IHN0YXRlT2JqLmF0dHJpYnV0ZXMuaHNfY29sb3JbMV07XG4gICAgICAgICAgaWYgKHNhdCA+IDEwKSB7XG4gICAgICAgICAgICBpY29uU3R5bGUuY29sb3IgPSBgaHNsKCR7aHVlfSwgMTAwJSwgJHsxMDAgLSBzYXQgLyAyfSUpYDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHN0YXRlT2JqLmF0dHJpYnV0ZXMuYnJpZ2h0bmVzcykge1xuICAgICAgICAgIGNvbnN0IGJyaWdodG5lc3MgPSBzdGF0ZU9iai5hdHRyaWJ1dGVzLmJyaWdodG5lc3M7XG4gICAgICAgICAgaWYgKHR5cGVvZiBicmlnaHRuZXNzICE9PSBcIm51bWJlclwiKSB7XG4gICAgICAgICAgICBjb25zdCBlcnJvck1lc3NhZ2UgPSBgVHlwZSBlcnJvcjogc3RhdGUtYmFkZ2UgZXhwZWN0ZWQgbnVtYmVyLCBidXQgdHlwZSBvZiAke1xuICAgICAgICAgICAgICBzdGF0ZU9iai5lbnRpdHlfaWRcbiAgICAgICAgICAgIH0uYXR0cmlidXRlcy5icmlnaHRuZXNzIGlzICR7dHlwZW9mIGJyaWdodG5lc3N9ICgke2JyaWdodG5lc3N9KWA7XG4gICAgICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihlcnJvck1lc3NhZ2UpO1xuICAgICAgICAgIH1cbiAgICAgICAgICAvLyBsb3dlc3QgYnJpZ2hudGVzcyB3aWxsIGJlIGFyb3VuZCA1MCUgKHRoYXQncyBwcmV0dHkgZGFyaylcbiAgICAgICAgICBpY29uU3R5bGUuZmlsdGVyID0gYGJyaWdodG5lc3MoJHsoYnJpZ2h0bmVzcyArIDI0NSkgLyA1fSUpYDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBPYmplY3QuYXNzaWduKHRoaXMuX2ljb24uc3R5bGUsIGljb25TdHlsZSk7XG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLnN0eWxlLCBob3N0U3R5bGUpO1xuICB9XG5cbiAgc3RhdGljIGdldCBzdHlsZXMoKTogQ1NTUmVzdWx0IHtcbiAgICByZXR1cm4gY3NzYFxuICAgICAgOmhvc3Qge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgd2lkdGg6IDQwcHg7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1wYXBlci1pdGVtLWljb24tY29sb3IsICM0NDczOWUpO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgIGhlaWdodDogNDBweDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICBsaW5lLWhlaWdodDogNDBweDtcbiAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICAgIH1cblxuICAgICAgaGEtaWNvbiB7XG4gICAgICAgIHRyYW5zaXRpb246IGNvbG9yIDAuM3MgZWFzZS1pbi1vdXQsIGZpbHRlciAwLjNzIGVhc2UtaW4tb3V0O1xuICAgICAgfVxuXG4gICAgICAvKiBDb2xvciB0aGUgaWNvbiBpZiBsaWdodCBvciBzdW4gaXMgb24gKi9cbiAgICAgIGhhLWljb25bZGF0YS1kb21haW49XCJsaWdodFwiXVtkYXRhLXN0YXRlPVwib25cIl0sXG4gICAgICBoYS1pY29uW2RhdGEtZG9tYWluPVwic3dpdGNoXCJdW2RhdGEtc3RhdGU9XCJvblwiXSxcbiAgICAgIGhhLWljb25bZGF0YS1kb21haW49XCJiaW5hcnlfc2Vuc29yXCJdW2RhdGEtc3RhdGU9XCJvblwiXSxcbiAgICAgIGhhLWljb25bZGF0YS1kb21haW49XCJmYW5cIl1bZGF0YS1zdGF0ZT1cIm9uXCJdLFxuICAgICAgaGEtaWNvbltkYXRhLWRvbWFpbj1cInN1blwiXVtkYXRhLXN0YXRlPVwiYWJvdmVfaG9yaXpvblwiXSB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1wYXBlci1pdGVtLWljb24tYWN0aXZlLWNvbG9yLCAjZmRkODM1KTtcbiAgICAgIH1cblxuICAgICAgLyogQ29sb3IgdGhlIGljb24gaWYgdW5hdmFpbGFibGUgKi9cbiAgICAgIGhhLWljb25bZGF0YS1zdGF0ZT1cInVuYXZhaWxhYmxlXCJdIHtcbiAgICAgICAgY29sb3I6IHZhcigtLXN0YXRlLWljb24tdW5hdmFpbGFibGUtY29sb3IpO1xuICAgICAgfVxuICAgIGA7XG4gIH1cbn1cblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgSFRNTEVsZW1lbnRUYWdOYW1lTWFwIHtcbiAgICBcInN0YXRlLWJhZGdlXCI6IFN0YXRlQmFkZ2U7XG4gIH1cbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwic3RhdGUtYmFkZ2VcIiwgU3RhdGVCYWRnZSk7XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFFQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDbERBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ0ZBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDSkE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDTEE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDcEJBO0FBQUE7QUFBQTtBQUFBOzs7O0FBSUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDM0dBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNWQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDakRBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaENBO0FBVUE7QUFDQTtBQUNBO0FBT0E7QUFBQTtBQUFBOztBQTZHQTtBQXRHQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFRQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUNBO0FBZ0NBOzs7QUFBQTtBQTFHQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUF3R0E7QUFBQTtBQVFBOzs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==