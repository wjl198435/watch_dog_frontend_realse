(self["webpackJsonp"] = self["webpackJsonp"] || []).push([["panel-config-automation~panel-config-script"],{

/***/ "./src/common/entity/has_location.ts":
/*!*******************************************!*\
  !*** ./src/common/entity/has_location.ts ***!
  \*******************************************/
/*! exports provided: hasLocation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasLocation", function() { return hasLocation; });
var hasLocation = function (stateObj) {
    return ("latitude" in stateObj.attributes && "longitude" in stateObj.attributes);
};


/***/ }),

/***/ "./src/common/preact/event.ts":
/*!************************************!*\
  !*** ./src/common/preact/event.ts ***!
  \************************************/
/*! exports provided: onChangeEvent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onChangeEvent", function() { return onChangeEvent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// interface OnChangeComponent {
//   props: {
//     index: number;
//     onChange(index: number, data: object);
//   };
// }

// export function onChangeEvent(this: OnChangeComponent, prop, ev) {
function onChangeEvent(prop, ev) {
    var origData = this.props[prop];
    if (ev.target.value === origData[ev.target.name]) {
        return;
    }
    var data = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, origData);
    if (ev.target.value) {
        data[ev.target.name] = ev.target.value;
    }
    else {
        delete data[ev.target.name];
    }
    this.props.onChange(this.props.index, data);
}


/***/ }),

/***/ "./src/common/preact/unmount.ts":
/*!**************************************!*\
  !*** ./src/common/preact/unmount.ts ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return unmount; });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.mjs");

function unmount(mountEl) {
    Object(preact__WEBPACK_IMPORTED_MODULE_0__["render"])(
    // @ts-ignore
    function () { return null; }, mountEl);
}


/***/ }),

/***/ "./src/components/device/ha-device-action-picker.ts":
/*!**********************************************************!*\
  !*** ./src/components/device/ha-device-action-picker.ts ***!
  \**********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _data_device_automation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../data/device_automation */ "./src/data/device_automation.ts");
/* harmony import */ var _components_ha_paper_dropdown_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/ha-paper-dropdown-menu */ "./src/components/ha-paper-dropdown-menu.ts");
/* harmony import */ var _ha_device_automation_picker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ha-device-automation-picker */ "./src/components/device/ha-device-automation-picker.ts");





var HaDeviceActionPicker = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(HaDeviceActionPicker, _super);
    function HaDeviceActionPicker() {
        var _this = _super.call(this, _data_device_automation__WEBPACK_IMPORTED_MODULE_2__["localizeDeviceAutomationAction"], _data_device_automation__WEBPACK_IMPORTED_MODULE_2__["fetchDeviceActions"], function (deviceId) { return ({
            device_id: deviceId || "",
            domain: "",
            entity_id: "",
        }); }) || this;
        _this.NO_AUTOMATION_TEXT = "No actions";
        _this.UNKNOWN_AUTOMATION_TEXT = "Unknown action";
        return _this;
    }
    HaDeviceActionPicker = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["customElement"])("ha-device-action-picker")
    ], HaDeviceActionPicker);
    return HaDeviceActionPicker;
}(_ha_device_automation_picker__WEBPACK_IMPORTED_MODULE_4__["HaDeviceAutomationPicker"]));


/***/ }),

/***/ "./src/components/device/ha-device-automation-picker.ts":
/*!**************************************************************!*\
  !*** ./src/components/device/ha-device-automation-picker.ts ***!
  \**************************************************************/
/*! exports provided: HaDeviceAutomationPicker */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HaDeviceAutomationPicker", function() { return HaDeviceAutomationPicker; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _polymer_paper_input_paper_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-input/paper-input */ "./node_modules/@polymer/paper-input/paper-input.js");
/* harmony import */ var _polymer_paper_item_paper_item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-item/paper-item */ "./node_modules/@polymer/paper-item/paper-item.js");
/* harmony import */ var _polymer_paper_item_paper_item_body__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/paper-item/paper-item-body */ "./node_modules/@polymer/paper-item/paper-item-body.js");
/* harmony import */ var _polymer_paper_listbox_paper_listbox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/paper-listbox/paper-listbox */ "./node_modules/@polymer/paper-listbox/paper-listbox.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../common/dom/fire_event */ "./src/common/dom/fire_event.ts");
/* harmony import */ var _data_device_automation__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../data/device_automation */ "./src/data/device_automation.ts");
/* harmony import */ var _components_ha_paper_dropdown_menu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/ha-paper-dropdown-menu */ "./src/components/ha-paper-dropdown-menu.ts");









var NO_AUTOMATION_KEY = "NO_AUTOMATION";
var UNKNOWN_AUTOMATION_KEY = "UNKNOWN_AUTOMATION";
var HaDeviceAutomationPicker = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(HaDeviceAutomationPicker, _super);
    function HaDeviceAutomationPicker(localizeDeviceAutomation, fetchDeviceAutomations, createNoAutomation) {
        var _this = _super.call(this) || this;
        _this.NO_AUTOMATION_TEXT = "No automations";
        _this.UNKNOWN_AUTOMATION_TEXT = "Unknown automation";
        _this._automations = [];
        // Trigger an empty render so we start with a clean DOM.
        // paper-listbox does not like changing things around.
        _this._renderEmpty = false;
        _this._localizeDeviceAutomation = localizeDeviceAutomation;
        _this._fetchDeviceAutomations = fetchDeviceAutomations;
        _this._createNoAutomation = createNoAutomation;
        return _this;
    }
    Object.defineProperty(HaDeviceAutomationPicker.prototype, "_key", {
        get: function () {
            var _this = this;
            if (!this.value ||
                Object(_data_device_automation__WEBPACK_IMPORTED_MODULE_7__["deviceAutomationsEqual"])(this._createNoAutomation(this.deviceId), this.value)) {
                return NO_AUTOMATION_KEY;
            }
            var idx = this._automations.findIndex(function (automation) {
                return Object(_data_device_automation__WEBPACK_IMPORTED_MODULE_7__["deviceAutomationsEqual"])(automation, _this.value);
            });
            if (idx === -1) {
                return UNKNOWN_AUTOMATION_KEY;
            }
            return this._automations[idx].device_id + "_" + idx;
        },
        enumerable: true,
        configurable: true
    });
    HaDeviceAutomationPicker.prototype.render = function () {
        var _this = this;
        if (this._renderEmpty) {
            return Object(lit_element__WEBPACK_IMPORTED_MODULE_5__["html"])(templateObject_1 || (templateObject_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])([""], [""])));
        }
        return Object(lit_element__WEBPACK_IMPORTED_MODULE_5__["html"])(templateObject_3 || (templateObject_3 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      <ha-paper-dropdown-menu\n        .label=", "\n        .value=", "\n        ?disabled=", "\n      >\n        <paper-listbox\n          slot=\"dropdown-content\"\n          .selected=", "\n          attr-for-selected=\"key\"\n          @iron-select=", "\n        >\n          <paper-item\n            key=", "\n            .automation=", "\n            hidden\n          >\n            ", "\n          </paper-item>\n          <paper-item\n            key=", "\n            .automation=", "\n            hidden\n          >\n            ", "\n          </paper-item>\n          ", "\n        </paper-listbox>\n      </ha-paper-dropdown-menu>\n    "], ["\n      <ha-paper-dropdown-menu\n        .label=", "\n        .value=",
            "\n        ?disabled=", "\n      >\n        <paper-listbox\n          slot=\"dropdown-content\"\n          .selected=", "\n          attr-for-selected=\"key\"\n          @iron-select=", "\n        >\n          <paper-item\n            key=", "\n            .automation=", "\n            hidden\n          >\n            ", "\n          </paper-item>\n          <paper-item\n            key=", "\n            .automation=", "\n            hidden\n          >\n            ", "\n          </paper-item>\n          ",
            "\n        </paper-listbox>\n      </ha-paper-dropdown-menu>\n    "])), this.label, this.value
            ? this._localizeDeviceAutomation(this.hass, this.value)
            : "", this._automations.length === 0, this._key, this._automationChanged, NO_AUTOMATION_KEY, this._createNoAutomation(this.deviceId), this.NO_AUTOMATION_TEXT, UNKNOWN_AUTOMATION_KEY, this.value, this.UNKNOWN_AUTOMATION_TEXT, this._automations.map(function (automation, idx) { return Object(lit_element__WEBPACK_IMPORTED_MODULE_5__["html"])(templateObject_2 || (templateObject_2 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n              <paper-item\n                key=", "\n                .automation=", "\n              >\n                ", "\n              </paper-item>\n            "], ["\n              <paper-item\n                key=", "\n                .automation=", "\n              >\n                ", "\n              </paper-item>\n            "])), _this.deviceId + "_" + idx, automation, _this._localizeDeviceAutomation(_this.hass, automation)); }));
    };
    HaDeviceAutomationPicker.prototype.updated = function (changedProps) {
        _super.prototype.updated.call(this, changedProps);
        if (changedProps.has("deviceId")) {
            this._updateDeviceInfo();
        }
        // The value has changed, force the listbox to update
        if (changedProps.has("value") || changedProps.has("_renderEmpty")) {
            var listbox = this.shadowRoot.querySelector("paper-listbox");
            if (listbox) {
                listbox._selectSelected(this._key);
            }
        }
    };
    HaDeviceAutomationPicker.prototype._updateDeviceInfo = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var _a, _b;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _a = this;
                        if (!this.deviceId) return [3 /*break*/, 2];
                        return [4 /*yield*/, this._fetchDeviceAutomations(this.hass, this.deviceId)];
                    case 1:
                        _b = _c.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        _b = [];
                        _c.label = 3;
                    case 3:
                        _a._automations = _b;
                        // If there is no value, or if we have changed the device ID, reset the value.
                        if (!this.value || this.value.device_id !== this.deviceId) {
                            this._setValue(this._automations.length
                                ? this._automations[0]
                                : this._createNoAutomation(this.deviceId));
                        }
                        this._renderEmpty = true;
                        return [4 /*yield*/, this.updateComplete];
                    case 4:
                        _c.sent();
                        this._renderEmpty = false;
                        return [2 /*return*/];
                }
            });
        });
    };
    HaDeviceAutomationPicker.prototype._automationChanged = function (ev) {
        this._setValue(ev.detail.item.automation);
    };
    HaDeviceAutomationPicker.prototype._setValue = function (automation) {
        var _this = this;
        if (this.value && Object(_data_device_automation__WEBPACK_IMPORTED_MODULE_7__["deviceAutomationsEqual"])(automation, this.value)) {
            return;
        }
        this.value = automation;
        setTimeout(function () {
            Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_6__["fireEvent"])(_this, "change");
        }, 0);
    };
    Object.defineProperty(HaDeviceAutomationPicker, "styles", {
        get: function () {
            return Object(lit_element__WEBPACK_IMPORTED_MODULE_5__["css"])(templateObject_4 || (templateObject_4 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      ha-paper-dropdown-menu {\n        width: 100%;\n      }\n      paper-listbox {\n        min-width: 200px;\n      }\n      paper-item {\n        cursor: pointer;\n      }\n    "], ["\n      ha-paper-dropdown-menu {\n        width: 100%;\n      }\n      paper-listbox {\n        min-width: 200px;\n      }\n      paper-item {\n        cursor: pointer;\n      }\n    "])));
        },
        enumerable: true,
        configurable: true
    });
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_5__["property"])()
    ], HaDeviceAutomationPicker.prototype, "hass", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_5__["property"])()
    ], HaDeviceAutomationPicker.prototype, "label", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_5__["property"])()
    ], HaDeviceAutomationPicker.prototype, "deviceId", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_5__["property"])()
    ], HaDeviceAutomationPicker.prototype, "value", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_5__["property"])()
    ], HaDeviceAutomationPicker.prototype, "_automations", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_5__["property"])()
    ], HaDeviceAutomationPicker.prototype, "_renderEmpty", void 0);
    return HaDeviceAutomationPicker;
}(lit_element__WEBPACK_IMPORTED_MODULE_5__["LitElement"]));

var templateObject_1, templateObject_2, templateObject_3, templateObject_4;


/***/ }),

/***/ "./src/components/device/ha-device-condition-picker.ts":
/*!*************************************************************!*\
  !*** ./src/components/device/ha-device-condition-picker.ts ***!
  \*************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _data_device_automation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../data/device_automation */ "./src/data/device_automation.ts");
/* harmony import */ var _components_ha_paper_dropdown_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/ha-paper-dropdown-menu */ "./src/components/ha-paper-dropdown-menu.ts");
/* harmony import */ var _ha_device_automation_picker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ha-device-automation-picker */ "./src/components/device/ha-device-automation-picker.ts");





var HaDeviceConditionPicker = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(HaDeviceConditionPicker, _super);
    function HaDeviceConditionPicker() {
        var _this = _super.call(this, _data_device_automation__WEBPACK_IMPORTED_MODULE_2__["localizeDeviceAutomationCondition"], _data_device_automation__WEBPACK_IMPORTED_MODULE_2__["fetchDeviceConditions"], function (deviceId) { return ({
            device_id: deviceId || "",
            condition: "device",
            domain: "",
            entity_id: "",
        }); }) || this;
        _this.NO_AUTOMATION_TEXT = "No conditions";
        _this.UNKNOWN_AUTOMATION_TEXT = "Unknown condition";
        return _this;
    }
    HaDeviceConditionPicker = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["customElement"])("ha-device-condition-picker")
    ], HaDeviceConditionPicker);
    return HaDeviceConditionPicker;
}(_ha_device_automation_picker__WEBPACK_IMPORTED_MODULE_4__["HaDeviceAutomationPicker"]));


/***/ }),

/***/ "./src/components/device/ha-device-picker.ts":
/*!***************************************************!*\
  !*** ./src/components/device/ha-device-picker.ts ***!
  \***************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _polymer_paper_input_paper_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-input/paper-input */ "./node_modules/@polymer/paper-input/paper-input.js");
/* harmony import */ var _polymer_paper_item_paper_item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-item/paper-item */ "./node_modules/@polymer/paper-item/paper-item.js");
/* harmony import */ var _polymer_paper_item_paper_item_body__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/paper-item/paper-item-body */ "./node_modules/@polymer/paper-item/paper-item-body.js");
/* harmony import */ var _polymer_paper_dropdown_menu_paper_dropdown_menu_light__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/paper-dropdown-menu/paper-dropdown-menu-light */ "./node_modules/@polymer/paper-dropdown-menu/paper-dropdown-menu-light.js");
/* harmony import */ var _polymer_paper_listbox_paper_listbox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @polymer/paper-listbox/paper-listbox */ "./node_modules/@polymer/paper-listbox/paper-listbox.js");
/* harmony import */ var memoize_one__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! memoize-one */ "./node_modules/memoize-one/dist/memoize-one.esm.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _mixins_subscribe_mixin__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../mixins/subscribe-mixin */ "./src/mixins/subscribe-mixin.ts");
/* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../common/dom/fire_event */ "./src/common/dom/fire_event.ts");
/* harmony import */ var _data_device_registry__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../data/device_registry */ "./src/data/device_registry.ts");
/* harmony import */ var _common_string_compare__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../common/string/compare */ "./src/common/string/compare.ts");












var HaDevicePicker = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(HaDevicePicker, _super);
    function HaDevicePicker() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._sortedDevices = Object(memoize_one__WEBPACK_IMPORTED_MODULE_6__["default"])(function (devices) {
            if (!devices || devices.length === 1) {
                return devices || [];
            }
            var sorted = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])(devices);
            sorted.sort(function (a, b) { return Object(_common_string_compare__WEBPACK_IMPORTED_MODULE_11__["compare"])(a.name || "", b.name || ""); });
            return sorted;
        });
        return _this;
    }
    HaDevicePicker.prototype.hassSubscribe = function () {
        var _this = this;
        return [
            Object(_data_device_registry__WEBPACK_IMPORTED_MODULE_10__["subscribeDeviceRegistry"])(this.hass.connection, function (devices) {
                _this.devices = devices;
            }),
        ];
    };
    HaDevicePicker.prototype.render = function () {
        return Object(lit_element__WEBPACK_IMPORTED_MODULE_7__["html"])(templateObject_2 || (templateObject_2 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      <paper-dropdown-menu-light .label=", ">\n        <paper-listbox\n          slot=\"dropdown-content\"\n          .selected=", "\n          attr-for-selected=\"data-device-id\"\n          @iron-select=", "\n        >\n          <paper-item data-device-id=\"\">\n            No device\n          </paper-item>\n          ", "\n        </paper-listbox>\n      </paper-dropdown-menu-light>\n    "], ["\n      <paper-dropdown-menu-light .label=", ">\n        <paper-listbox\n          slot=\"dropdown-content\"\n          .selected=", "\n          attr-for-selected=\"data-device-id\"\n          @iron-select=", "\n        >\n          <paper-item data-device-id=\"\">\n            No device\n          </paper-item>\n          ",
            "\n        </paper-listbox>\n      </paper-dropdown-menu-light>\n    "])), this.label, this._value, this._deviceChanged, this._sortedDevices(this.devices).map(function (device) { return Object(lit_element__WEBPACK_IMPORTED_MODULE_7__["html"])(templateObject_1 || (templateObject_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n              <paper-item data-device-id=", ">\n                ", "\n              </paper-item>\n            "], ["\n              <paper-item data-device-id=", ">\n                ", "\n              </paper-item>\n            "])), device.id, device.name_by_user || device.name); }));
    };
    Object.defineProperty(HaDevicePicker.prototype, "_value", {
        get: function () {
            return this.value || "";
        },
        enumerable: true,
        configurable: true
    });
    HaDevicePicker.prototype._deviceChanged = function (ev) {
        var _this = this;
        var newValue = ev.detail.item.dataset.deviceId;
        if (newValue !== this._value) {
            this.value = newValue;
            setTimeout(function () {
                Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_9__["fireEvent"])(_this, "value-changed", { value: newValue });
                Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_9__["fireEvent"])(_this, "change");
            }, 0);
        }
    };
    Object.defineProperty(HaDevicePicker, "styles", {
        get: function () {
            return Object(lit_element__WEBPACK_IMPORTED_MODULE_7__["css"])(templateObject_3 || (templateObject_3 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      paper-dropdown-menu-light {\n        width: 100%;\n      }\n      paper-listbox {\n        min-width: 200px;\n      }\n      paper-item {\n        cursor: pointer;\n      }\n    "], ["\n      paper-dropdown-menu-light {\n        width: 100%;\n      }\n      paper-listbox {\n        min-width: 200px;\n      }\n      paper-item {\n        cursor: pointer;\n      }\n    "])));
        },
        enumerable: true,
        configurable: true
    });
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_7__["property"])()
    ], HaDevicePicker.prototype, "hass", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_7__["property"])()
    ], HaDevicePicker.prototype, "label", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_7__["property"])()
    ], HaDevicePicker.prototype, "value", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_7__["property"])()
    ], HaDevicePicker.prototype, "devices", void 0);
    HaDevicePicker = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_7__["customElement"])("ha-device-picker")
    ], HaDevicePicker);
    return HaDevicePicker;
}(Object(_mixins_subscribe_mixin__WEBPACK_IMPORTED_MODULE_8__["SubscribeMixin"])(lit_element__WEBPACK_IMPORTED_MODULE_7__["LitElement"])));
var templateObject_1, templateObject_2, templateObject_3;


/***/ }),

/***/ "./src/components/entity/ha-entity-picker.ts":
/*!***************************************************!*\
  !*** ./src/components/entity/ha-entity-picker.ts ***!
  \***************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _polymer_paper_icon_button_paper_icon_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-icon-button/paper-icon-button */ "./node_modules/@polymer/paper-icon-button/paper-icon-button.js");
/* harmony import */ var _polymer_paper_input_paper_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-input/paper-input */ "./node_modules/@polymer/paper-input/paper-input.js");
/* harmony import */ var _polymer_paper_item_paper_icon_item__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/paper-item/paper-icon-item */ "./node_modules/@polymer/paper-item/paper-icon-item.js");
/* harmony import */ var _polymer_paper_item_paper_item_body__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/paper-item/paper-item-body */ "./node_modules/@polymer/paper-item/paper-item-body.js");
/* harmony import */ var _vaadin_vaadin_combo_box_vaadin_combo_box_light__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @vaadin/vaadin-combo-box/vaadin-combo-box-light */ "./node_modules/@vaadin/vaadin-combo-box/vaadin-combo-box-light.js");
/* harmony import */ var memoize_one__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! memoize-one */ "./node_modules/memoize-one/dist/memoize-one.esm.js");
/* harmony import */ var _state_badge__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./state-badge */ "./src/components/entity/state-badge.ts");
/* harmony import */ var _common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../common/entity/compute_state_name */ "./src/common/entity/compute_state_name.ts");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../common/dom/fire_event */ "./src/common/dom/fire_event.ts");











var rowRenderer = function (root, _owner, model) {
    if (!root.firstElementChild) {
        root.innerHTML = "\n      <style>\n        paper-icon-item {\n          margin: -10px;\n          padding: 0;\n        }\n      </style>\n      <paper-icon-item>\n        <state-badge state-obj=\"[[item]]\" slot=\"item-icon\"></state-badge>\n        <paper-item-body two-line=\"\">\n          <div class='name'>[[_computeStateName(item)]]</div>\n          <div secondary>[[item.entity_id]]</div>\n        </paper-item-body>\n      </paper-icon-item>\n    ";
    }
    root.querySelector("state-badge").stateObj = model.item;
    root.querySelector(".name").textContent = Object(_common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_8__["computeStateName"])(model.item);
    root.querySelector("[secondary]").textContent = model.item.entity_id;
};
var HaEntityPicker = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(HaEntityPicker, _super);
    function HaEntityPicker() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._getStates = Object(memoize_one__WEBPACK_IMPORTED_MODULE_6__["default"])(function (hass, domainFilter, entityFilter) {
            var states = [];
            if (!hass) {
                return [];
            }
            var entityIds = Object.keys(hass.states);
            if (domainFilter) {
                entityIds = entityIds.filter(function (eid) { return eid.substr(0, eid.indexOf(".")) === domainFilter; });
            }
            states = entityIds.sort().map(function (key) { return hass.states[key]; });
            if (entityFilter) {
                states = states.filter(function (stateObj) {
                    // We always want to include the entity of the current value
                    return stateObj.entity_id === _this.value || entityFilter(stateObj);
                });
            }
            return states;
        });
        return _this;
    }
    HaEntityPicker.prototype.updated = function (changedProps) {
        _super.prototype.updated.call(this, changedProps);
        if (changedProps.has("hass") && !this._opened) {
            this._hass = this.hass;
        }
    };
    HaEntityPicker.prototype.render = function () {
        var states = this._getStates(this._hass, this.domainFilter, this.entityFilter);
        return Object(lit_element__WEBPACK_IMPORTED_MODULE_9__["html"])(templateObject_3 || (templateObject_3 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      <vaadin-combo-box-light\n        item-value-path=\"entity_id\"\n        item-label-path=\"entity_id\"\n        .items=", "\n        .value=", "\n        .allowCustomValue=", "\n        .renderer=", "\n        @opened-changed=", "\n        @value-changed=", "\n      >\n        <paper-input\n          .autofocus=", "\n          .label=", "\n          .value=", "\n          .disabled=", "\n          class=\"input\"\n          autocapitalize=\"none\"\n          autocomplete=\"off\"\n          autocorrect=\"off\"\n          spellcheck=\"false\"\n        >\n          ", "\n          ", "\n        </paper-input>\n      </vaadin-combo-box-light>\n    "], ["\n      <vaadin-combo-box-light\n        item-value-path=\"entity_id\"\n        item-label-path=\"entity_id\"\n        .items=", "\n        .value=", "\n        .allowCustomValue=", "\n        .renderer=", "\n        @opened-changed=", "\n        @value-changed=", "\n      >\n        <paper-input\n          .autofocus=", "\n          .label=",
            "\n          .value=", "\n          .disabled=", "\n          class=\"input\"\n          autocapitalize=\"none\"\n          autocomplete=\"off\"\n          autocorrect=\"off\"\n          spellcheck=\"false\"\n        >\n          ",
            "\n          ",
            "\n        </paper-input>\n      </vaadin-combo-box-light>\n    "])), states, this._value, this.allowCustomEntity, rowRenderer, this._openedChanged, this._valueChanged, this.autofocus, this.label === undefined && this._hass
            ? this._hass.localize("ui.components.entity.entity-picker.entity")
            : this.label, this._value, this.disabled, this.value
            ? Object(lit_element__WEBPACK_IMPORTED_MODULE_9__["html"])(templateObject_1 || (templateObject_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n                <paper-icon-button\n                  aria-label=\"Clear\"\n                  slot=\"suffix\"\n                  class=\"clear-button\"\n                  icon=\"hass:close\"\n                  no-ripple\n                >\n                  Clear\n                </paper-icon-button>\n              "], ["\n                <paper-icon-button\n                  aria-label=\"Clear\"\n                  slot=\"suffix\"\n                  class=\"clear-button\"\n                  icon=\"hass:close\"\n                  no-ripple\n                >\n                  Clear\n                </paper-icon-button>\n              "]))) : "", states.length > 0
            ? Object(lit_element__WEBPACK_IMPORTED_MODULE_9__["html"])(templateObject_2 || (templateObject_2 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n                <paper-icon-button\n                  aria-label=\"Show entities\"\n                  slot=\"suffix\"\n                  class=\"toggle-button\"\n                  .icon=", "\n                >\n                  Toggle\n                </paper-icon-button>\n              "], ["\n                <paper-icon-button\n                  aria-label=\"Show entities\"\n                  slot=\"suffix\"\n                  class=\"toggle-button\"\n                  .icon=", "\n                >\n                  Toggle\n                </paper-icon-button>\n              "])), this._opened ? "hass:menu-up" : "hass:menu-down") : "");
    };
    Object.defineProperty(HaEntityPicker.prototype, "_value", {
        get: function () {
            return this.value || "";
        },
        enumerable: true,
        configurable: true
    });
    HaEntityPicker.prototype._openedChanged = function (ev) {
        this._opened = ev.detail.value;
    };
    HaEntityPicker.prototype._valueChanged = function (ev) {
        var _this = this;
        var newValue = ev.detail.value;
        if (newValue !== this._value) {
            this.value = ev.detail.value;
            setTimeout(function () {
                Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_10__["fireEvent"])(_this, "value-changed", { value: _this.value });
                Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_10__["fireEvent"])(_this, "change");
            }, 0);
        }
    };
    Object.defineProperty(HaEntityPicker, "styles", {
        get: function () {
            return Object(lit_element__WEBPACK_IMPORTED_MODULE_9__["css"])(templateObject_4 || (templateObject_4 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      paper-input > paper-icon-button {\n        width: 24px;\n        height: 24px;\n        padding: 2px;\n        color: var(--secondary-text-color);\n      }\n      [hidden] {\n        display: none;\n      }\n    "], ["\n      paper-input > paper-icon-button {\n        width: 24px;\n        height: 24px;\n        padding: 2px;\n        color: var(--secondary-text-color);\n      }\n      [hidden] {\n        display: none;\n      }\n    "])));
        },
        enumerable: true,
        configurable: true
    });
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_9__["property"])({ type: Boolean })
    ], HaEntityPicker.prototype, "autofocus", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_9__["property"])({ type: Boolean })
    ], HaEntityPicker.prototype, "disabled", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_9__["property"])({ type: Boolean, attribute: "allow-custom-entity" })
    ], HaEntityPicker.prototype, "allowCustomEntity", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_9__["property"])()
    ], HaEntityPicker.prototype, "hass", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_9__["property"])()
    ], HaEntityPicker.prototype, "label", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_9__["property"])()
    ], HaEntityPicker.prototype, "value", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_9__["property"])({ attribute: "domain-filter" })
    ], HaEntityPicker.prototype, "domainFilter", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_9__["property"])()
    ], HaEntityPicker.prototype, "entityFilter", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_9__["property"])({ type: Boolean })
    ], HaEntityPicker.prototype, "_opened", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_9__["property"])()
    ], HaEntityPicker.prototype, "_hass", void 0);
    return HaEntityPicker;
}(lit_element__WEBPACK_IMPORTED_MODULE_9__["LitElement"]));
customElements.define("ha-entity-picker", HaEntityPicker);
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;


/***/ }),

/***/ "./src/components/ha-code-editor.ts":
/*!******************************************!*\
  !*** ./src/components/ha-code-editor.ts ***!
  \******************************************/
/*! exports provided: HaCodeEditor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HaCodeEditor", function() { return HaCodeEditor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _resources_codemirror_ondemand__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../resources/codemirror.ondemand */ "./src/resources/codemirror.ondemand.ts");
/* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/dom/fire_event */ "./src/common/dom/fire_event.ts");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");




var HaCodeEditor = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(HaCodeEditor, _super);
    function HaCodeEditor() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.autofocus = false;
        _this.rtl = false;
        _this.error = false;
        _this._value = "";
        return _this;
    }
    Object.defineProperty(HaCodeEditor.prototype, "value", {
        get: function () {
            return this.codemirror ? this.codemirror.getValue() : this._value;
        },
        set: function (value) {
            this._value = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HaCodeEditor.prototype, "hasComments", {
        get: function () {
            return this.shadowRoot.querySelector("span.cm-comment") ? true : false;
        },
        enumerable: true,
        configurable: true
    });
    HaCodeEditor.prototype.connectedCallback = function () {
        _super.prototype.connectedCallback.call(this);
        if (!this.codemirror) {
            return;
        }
        this.codemirror.refresh();
        if (this.autofocus !== false) {
            this.codemirror.focus();
        }
    };
    HaCodeEditor.prototype.update = function (changedProps) {
        _super.prototype.update.call(this, changedProps);
        if (!this.codemirror) {
            return;
        }
        if (changedProps.has("mode")) {
            this.codemirror.setOption("mode", this.mode);
        }
        if (changedProps.has("autofocus")) {
            this.codemirror.setOption("autofocus", this.autofocus !== false);
        }
        if (changedProps.has("_value") && this._value !== this.value) {
            this.codemirror.setValue(this._value);
        }
        if (changedProps.has("rtl")) {
            this.codemirror.setOption("gutters", this._calcGutters());
            this._setScrollBarDirection();
        }
        if (changedProps.has("error")) {
            this.classList.toggle("error-state", this.error);
        }
    };
    HaCodeEditor.prototype.firstUpdated = function (changedProps) {
        _super.prototype.firstUpdated.call(this, changedProps);
        this._load();
    };
    HaCodeEditor.prototype._load = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var loaded, codeMirror, shadowRoot;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Object(_resources_codemirror_ondemand__WEBPACK_IMPORTED_MODULE_1__["loadCodeMirror"])()];
                    case 1:
                        loaded = _a.sent();
                        codeMirror = loaded.codeMirror;
                        shadowRoot = this.attachShadow({ mode: "open" });
                        shadowRoot.innerHTML = "\n    <style>\n      " + loaded.codeMirrorCss + "\n      .CodeMirror {\n        height: var(--code-mirror-height, auto);\n        direction: var(--code-mirror-direction, ltr);\n      }\n      .CodeMirror-scroll {\n        max-height: var(--code-mirror-max-height, --code-mirror-height);\n      }\n      .CodeMirror-gutters {\n        border-right: 1px solid var(--paper-input-container-color, var(--secondary-text-color));\n        background-color: var(--paper-dialog-background-color, var(--primary-background-color));\n        transition: 0.2s ease border-right;\n      }\n      :host(.error-state) .CodeMirror-gutters {\n        border-color: var(--error-state-color, red);\n      }\n      .CodeMirror-focused .CodeMirror-gutters {\n        border-right: 2px solid var(--paper-input-container-focus-color, var(--primary-color));\n      }\n      .CodeMirror-linenumber {\n        color: var(--paper-dialog-color, var(--primary-text-color));\n      }\n      .rtl .CodeMirror-vscrollbar {\n        right: auto;\n        left: 0px;\n      }\n      .rtl-gutter {\n        width: 20px;\n      }\n    </style>";
                        this.codemirror = codeMirror(shadowRoot, {
                            value: this._value,
                            lineNumbers: true,
                            tabSize: 2,
                            mode: this.mode,
                            autofocus: this.autofocus !== false,
                            viewportMargin: Infinity,
                            extraKeys: {
                                Tab: "indentMore",
                                "Shift-Tab": "indentLess",
                            },
                            gutters: this._calcGutters(),
                        });
                        this._setScrollBarDirection();
                        this.codemirror.on("changes", function () { return _this._onChange(); });
                        return [2 /*return*/];
                }
            });
        });
    };
    HaCodeEditor.prototype._onChange = function () {
        var newValue = this.value;
        if (newValue === this._value) {
            return;
        }
        this._value = newValue;
        Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_2__["fireEvent"])(this, "value-changed", { value: this._value });
    };
    HaCodeEditor.prototype._calcGutters = function () {
        return this.rtl ? ["rtl-gutter", "CodeMirror-linenumbers"] : [];
    };
    HaCodeEditor.prototype._setScrollBarDirection = function () {
        if (this.codemirror) {
            this.codemirror.getWrapperElement().classList.toggle("rtl", this.rtl);
        }
    };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_3__["property"])()
    ], HaCodeEditor.prototype, "mode", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_3__["property"])()
    ], HaCodeEditor.prototype, "autofocus", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_3__["property"])()
    ], HaCodeEditor.prototype, "rtl", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_3__["property"])()
    ], HaCodeEditor.prototype, "error", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_3__["property"])()
    ], HaCodeEditor.prototype, "_value", void 0);
    HaCodeEditor = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_3__["customElement"])("ha-code-editor")
    ], HaCodeEditor);
    return HaCodeEditor;
}(lit_element__WEBPACK_IMPORTED_MODULE_3__["UpdatingElement"]));



/***/ }),

/***/ "./src/components/ha-fab.ts":
/*!**********************************!*\
  !*** ./src/components/ha-fab.ts ***!
  \**********************************/
/*! exports provided: HaFab */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HaFab", function() { return HaFab; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _material_mwc_base_base_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material/mwc-base/base-element */ "./node_modules/@material/mwc-base/base-element.js");
/* harmony import */ var _material_mwc_ripple_ripple_directive_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material/mwc-ripple/ripple-directive.js */ "./node_modules/@material/mwc-ripple/ripple-directive.js");
/* harmony import */ var _material_mwc_fab__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material/mwc-fab */ "./node_modules/@material/mwc-fab/mwc-fab.js");




// tslint:disable-next-line
var MwcFab = customElements.get("mwc-fab");
var HaFab = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(HaFab, _super);
    function HaFab() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // We override the render method because we don't have an icon font and mwc-fab doesn't support our svg-icon sets.
    // Based on version mwc-fab 0.8
    HaFab.prototype.render = function () {
        var classes = {
            "mdc-fab--mini": this.mini,
            "mdc-fab--exited": this.exited,
            "mdc-fab--extended": this.extended,
        };
        var showLabel = this.label !== "" && this.extended;
        return Object(_material_mwc_base_base_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_2 || (templateObject_2 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      <button\n        .ripple=\"", "\"\n        class=\"mdc-fab ", "\"\n        ?disabled=\"", "\"\n        aria-label=\"", "\"\n      >\n        ", "\n        ", "\n        ", "\n      </button>\n    "], ["\n      <button\n        .ripple=\"", "\"\n        class=\"mdc-fab ", "\"\n        ?disabled=\"", "\"\n        aria-label=\"", "\"\n      >\n        ", "\n        ",
            "\n        ", "\n      </button>\n    "])), Object(_material_mwc_ripple_ripple_directive_js__WEBPACK_IMPORTED_MODULE_2__["ripple"])(), Object(_material_mwc_base_base_element__WEBPACK_IMPORTED_MODULE_1__["classMap"])(classes), this.disabled, this.label || this.icon, showLabel && this.showIconAtEnd ? this.label : "", this.icon
            ? Object(_material_mwc_base_base_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_1 || (templateObject_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n              <ha-icon .icon=", "></ha-icon>\n            "], ["\n              <ha-icon .icon=", "></ha-icon>\n            "])), this.icon) : "", showLabel && !this.showIconAtEnd ? this.label : "");
    };
    HaFab = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_material_mwc_base_base_element__WEBPACK_IMPORTED_MODULE_1__["customElement"])("ha-fab")
    ], HaFab);
    return HaFab;
}(MwcFab));

var templateObject_1, templateObject_2;


/***/ }),

/***/ "./src/components/ha-paper-dropdown-menu.ts":
/*!**************************************************!*\
  !*** ./src/components/ha-paper-dropdown-menu.ts ***!
  \**************************************************/
/*! exports provided: HaPaperDropdownClass */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HaPaperDropdownClass", function() { return HaPaperDropdownClass; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _polymer_paper_dropdown_menu_paper_dropdown_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-dropdown-menu/paper-dropdown-menu */ "./node_modules/@polymer/paper-dropdown-menu/paper-dropdown-menu.js");


var paperDropdownClass = customElements.get("paper-dropdown-menu");
// patches paper drop down to properly support RTL - https://github.com/PolymerElements/paper-dropdown-menu/issues/183
var HaPaperDropdownClass = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(HaPaperDropdownClass, _super);
    function HaPaperDropdownClass() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HaPaperDropdownClass.prototype.ready = function () {
        var _this = this;
        _super.prototype.ready.call(this);
        // wait to check for direction since otherwise direction is wrong even though top level is RTL
        setTimeout(function () {
            if (window.getComputedStyle(_this).direction === "rtl") {
                _this.style.textAlign = "right";
            }
        }, 100);
    };
    return HaPaperDropdownClass;
}(paperDropdownClass));

customElements.define("ha-paper-dropdown-menu", HaPaperDropdownClass);


/***/ }),

/***/ "./src/components/ha-textarea.js":
/*!***************************************!*\
  !*** ./src/components/ha-textarea.js ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_paper_input_paper_textarea__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/paper-input/paper-textarea */ "./node_modules/@polymer/paper-input/paper-textarea.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      <style>\n        :host {\n          display: block;\n        }\n      </style>\n      <paper-textarea\n        label=\"[[label]]\"\n        placeholder=\"[[placeholder]]\"\n        value=\"{{value}}\"\n      ></paper-textarea>\n    "]);

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
Wrapper for paper-textarea.

paper-textarea crashes on iOS when created programmatically. This only impacts
our automation and script editors as they are using Preact. Polymer is using
template elements and does not have this issue.

paper-textarea issue: https://github.com/PolymerElements/paper-input/issues/556
WebKit issue: https://bugs.webkit.org/show_bug.cgi?id=174629
*/




var HaTextarea =
/*#__PURE__*/
function (_PolymerElement) {
  _inherits(HaTextarea, _PolymerElement);

  function HaTextarea() {
    _classCallCheck(this, HaTextarea);

    return _possibleConstructorReturn(this, _getPrototypeOf(HaTextarea).apply(this, arguments));
  }

  _createClass(HaTextarea, null, [{
    key: "template",
    get: function get() {
      return Object(_polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__["html"])(_templateObject());
    }
  }, {
    key: "properties",
    get: function get() {
      return {
        name: String,
        label: String,
        placeholder: String,
        value: {
          type: String,
          notify: true
        }
      };
    }
  }]);

  return HaTextarea;
}(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__["PolymerElement"]);

customElements.define("ha-textarea", HaTextarea);

/***/ }),

/***/ "./src/mixins/subscribe-mixin.ts":
/*!***************************************!*\
  !*** ./src/mixins/subscribe-mixin.ts ***!
  \***************************************/
/*! exports provided: SubscribeMixin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubscribeMixin", function() { return SubscribeMixin; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

/* tslint:disable-next-line */
var SubscribeMixin = function (superClass) {
    // @ts-ignore
    return /** @class */ (function (_super) {
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(class_1, _super);
        function class_1() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Object.defineProperty(class_1, "properties", {
            get: function () {
                return {
                    hass: {},
                };
            },
            enumerable: true,
            configurable: true
        });
        class_1.prototype.connectedCallback = function () {
            _super.prototype.connectedCallback.call(this);
            this.__checkSubscribed();
        };
        class_1.prototype.disconnectedCallback = function () {
            _super.prototype.disconnectedCallback.call(this);
            if (this.__unsubs) {
                while (this.__unsubs.length) {
                    this.__unsubs.pop()();
                }
                this.__unsubs = undefined;
            }
        };
        class_1.prototype.updated = function (changedProps) {
            _super.prototype.updated.call(this, changedProps);
            if (changedProps.has("hass")) {
                this.__checkSubscribed();
            }
        };
        class_1.prototype.hassSubscribe = function () {
            _super.prototype.hassSubscribe.call(this);
            return [];
        };
        class_1.prototype.__checkSubscribed = function () {
            if (this.__unsubs !== undefined ||
                !this.isConnected ||
                this.hass === undefined) {
                return;
            }
            this.__unsubs = this.hassSubscribe();
        };
        return class_1;
    }(superClass));
};


/***/ }),

/***/ "./src/panels/config/js/condition/condition_edit.tsx":
/*!***********************************************************!*\
  !*** ./src/panels/config/js/condition/condition_edit.tsx ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.mjs");
/* harmony import */ var _polymer_paper_dropdown_menu_paper_dropdown_menu_light__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-dropdown-menu/paper-dropdown-menu-light */ "./node_modules/@polymer/paper-dropdown-menu/paper-dropdown-menu-light.js");
/* harmony import */ var _polymer_paper_listbox_paper_listbox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/paper-listbox/paper-listbox */ "./node_modules/@polymer/paper-listbox/paper-listbox.js");
/* harmony import */ var _polymer_paper_item_paper_item__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/paper-item/paper-item */ "./node_modules/@polymer/paper-item/paper-item.js");
/* harmony import */ var _device__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./device */ "./src/panels/config/js/condition/device.tsx");
/* harmony import */ var _logical__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./logical */ "./src/panels/config/js/condition/logical.tsx");
/* harmony import */ var _numeric_state__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./numeric_state */ "./src/panels/config/js/condition/numeric_state.tsx");
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./state */ "./src/panels/config/js/condition/state.tsx");
/* harmony import */ var _sun__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./sun */ "./src/panels/config/js/condition/sun.tsx");
/* harmony import */ var _template__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./template */ "./src/panels/config/js/condition/template.tsx");
/* harmony import */ var _time__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./time */ "./src/panels/config/js/condition/time.tsx");
/* harmony import */ var _zone__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./zone */ "./src/panels/config/js/condition/zone.tsx");













var TYPES = {
    and: _logical__WEBPACK_IMPORTED_MODULE_6__["default"],
    device: _device__WEBPACK_IMPORTED_MODULE_5__["default"],
    numeric_state: _numeric_state__WEBPACK_IMPORTED_MODULE_7__["default"],
    or: _logical__WEBPACK_IMPORTED_MODULE_6__["default"],
    state: _state__WEBPACK_IMPORTED_MODULE_8__["default"],
    sun: _sun__WEBPACK_IMPORTED_MODULE_9__["default"],
    template: _template__WEBPACK_IMPORTED_MODULE_10__["default"],
    time: _time__WEBPACK_IMPORTED_MODULE_11__["default"],
    zone: _zone__WEBPACK_IMPORTED_MODULE_12__["default"],
};
var OPTIONS = Object.keys(TYPES).sort();
var ConditionEdit = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(ConditionEdit, _super);
    function ConditionEdit() {
        var _this = _super.call(this) || this;
        _this.typeChanged = _this.typeChanged.bind(_this);
        return _this;
    }
    ConditionEdit.prototype.typeChanged = function (ev) {
        var type = ev.target.selectedItem.attributes.condition.value;
        if (type !== this.props.condition.condition) {
            this.props.onChange(this.props.index, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ condition: type }, TYPES[type].defaultConfig));
        }
    };
    ConditionEdit.prototype.render = function (_a) {
        var index = _a.index, condition = _a.condition, onChange = _a.onChange, hass = _a.hass, localize = _a.localize;
        // tslint:disable-next-line: variable-name
        var Comp = TYPES[condition.condition];
        var selected = OPTIONS.indexOf(condition.condition);
        if (!Comp) {
            return (Object(preact__WEBPACK_IMPORTED_MODULE_1__["h"])("div", null,
                localize("ui.panel.config.automation.editor.conditions.unsupported_condition", "condition", condition.condition),
                Object(preact__WEBPACK_IMPORTED_MODULE_1__["h"])("pre", null, JSON.stringify(condition, null, 2))));
        }
        return (Object(preact__WEBPACK_IMPORTED_MODULE_1__["h"])("div", null,
            Object(preact__WEBPACK_IMPORTED_MODULE_1__["h"])("paper-dropdown-menu-light", { label: localize("ui.panel.config.automation.editor.conditions.type_select"), "no-animations": true },
                Object(preact__WEBPACK_IMPORTED_MODULE_1__["h"])("paper-listbox", { slot: "dropdown-content", selected: selected, "oniron-select": this.typeChanged }, OPTIONS.map(function (opt) { return (Object(preact__WEBPACK_IMPORTED_MODULE_1__["h"])("paper-item", { condition: opt }, localize("ui.panel.config.automation.editor.conditions.type." + opt + ".label"))); }))),
            Object(preact__WEBPACK_IMPORTED_MODULE_1__["h"])(Comp, { index: index, condition: condition, onChange: onChange, hass: hass, localize: localize })));
    };
    return ConditionEdit;
}(preact__WEBPACK_IMPORTED_MODULE_1__["Component"]));
/* harmony default export */ __webpack_exports__["default"] = (ConditionEdit);


/***/ }),

/***/ "./src/panels/config/js/condition/condition_row.tsx":
/*!**********************************************************!*\
  !*** ./src/panels/config/js/condition/condition_row.tsx ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.mjs");
/* harmony import */ var _polymer_paper_menu_button_paper_menu_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-menu-button/paper-menu-button */ "./node_modules/@polymer/paper-menu-button/paper-menu-button.js");
/* harmony import */ var _polymer_paper_icon_button_paper_icon_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/paper-icon-button/paper-icon-button */ "./node_modules/@polymer/paper-icon-button/paper-icon-button.js");
/* harmony import */ var _polymer_paper_listbox_paper_listbox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/paper-listbox/paper-listbox */ "./node_modules/@polymer/paper-listbox/paper-listbox.js");
/* harmony import */ var _polymer_paper_item_paper_item__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @polymer/paper-item/paper-item */ "./node_modules/@polymer/paper-item/paper-item.js");
/* harmony import */ var _components_ha_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../components/ha-card */ "./src/components/ha-card.ts");
/* harmony import */ var _condition_edit__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./condition_edit */ "./src/panels/config/js/condition/condition_edit.tsx");








var ConditionRow = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(ConditionRow, _super);
    function ConditionRow() {
        var _this = _super.call(this) || this;
        _this.onDelete = _this.onDelete.bind(_this);
        return _this;
    }
    ConditionRow.prototype.onDelete = function () {
        // eslint-disable-next-line
        if (confirm(this.props.localize("ui.panel.config.automation.editor.conditions.delete_confirm"))) {
            this.props.onChange(this.props.index, null);
        }
    };
    ConditionRow.prototype.render = function (props) {
        return (Object(preact__WEBPACK_IMPORTED_MODULE_1__["h"])("ha-card", null,
            Object(preact__WEBPACK_IMPORTED_MODULE_1__["h"])("div", { class: "card-content" },
                Object(preact__WEBPACK_IMPORTED_MODULE_1__["h"])("div", { class: "card-menu" },
                    Object(preact__WEBPACK_IMPORTED_MODULE_1__["h"])("paper-menu-button", { "no-animations": true, "horizontal-align": "right", "horizontal-offset": "-5", "vertical-offset": "-5" },
                        Object(preact__WEBPACK_IMPORTED_MODULE_1__["h"])("paper-icon-button", { icon: "hass:dots-vertical", slot: "dropdown-trigger" }),
                        Object(preact__WEBPACK_IMPORTED_MODULE_1__["h"])("paper-listbox", { slot: "dropdown-content" },
                            Object(preact__WEBPACK_IMPORTED_MODULE_1__["h"])("paper-item", { disabled: true }, props.localize("ui.panel.config.automation.editor.conditions.duplicate")),
                            Object(preact__WEBPACK_IMPORTED_MODULE_1__["h"])("paper-item", { onTap: this.onDelete }, props.localize("ui.panel.config.automation.editor.conditions.delete"))))),
                Object(preact__WEBPACK_IMPORTED_MODULE_1__["h"])(_condition_edit__WEBPACK_IMPORTED_MODULE_7__["default"], Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, props)))));
    };
    return ConditionRow;
}(preact__WEBPACK_IMPORTED_MODULE_1__["Component"]));
/* harmony default export */ __webpack_exports__["default"] = (ConditionRow);


/***/ }),

/***/ "./src/panels/config/js/condition/device.tsx":
/*!***************************************************!*\
  !*** ./src/panels/config/js/condition/device.tsx ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.mjs");
/* harmony import */ var _components_device_ha_device_picker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../components/device/ha-device-picker */ "./src/components/device/ha-device-picker.ts");
/* harmony import */ var _components_device_ha_device_condition_picker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../components/device/ha-device-condition-picker */ "./src/components/device/ha-device-condition-picker.ts");
/* harmony import */ var _components_ha_form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../components/ha-form */ "./src/components/ha-form.js");
/* harmony import */ var _data_device_automation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../data/device_automation */ "./src/data/device_automation.ts");






var DeviceCondition = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(DeviceCondition, _super);
    function DeviceCondition() {
        var _this = _super.call(this) || this;
        _this.devicePicked = _this.devicePicked.bind(_this);
        _this.deviceConditionPicked = _this.deviceConditionPicked.bind(_this);
        _this._extraFieldsChanged = _this._extraFieldsChanged.bind(_this);
        _this.state = { device_id: undefined, capabilities: undefined };
        return _this;
    }
    DeviceCondition.prototype.devicePicked = function (ev) {
        this.setState(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this.state), { device_id: ev.target.value }));
    };
    DeviceCondition.prototype.deviceConditionPicked = function (ev) {
        var condition = ev.target.value;
        if (this._origCondition &&
            Object(_data_device_automation__WEBPACK_IMPORTED_MODULE_5__["deviceAutomationsEqual"])(this._origCondition, condition)) {
            condition = this._origCondition;
        }
        this.props.onChange(this.props.index, condition);
    };
    /* eslint-disable camelcase */
    DeviceCondition.prototype.render = function (_a, _b) {
        var _this = this;
        var condition = _a.condition, hass = _a.hass;
        var device_id = _b.device_id, capabilities = _b.capabilities;
        if (device_id === undefined) {
            device_id = condition.device_id;
        }
        var extraFieldsData = capabilities && capabilities.extra_fields
            ? capabilities.extra_fields.map(function (item) {
                var _a;
                return _a = {}, _a[item.name] = _this.props.condition[item.name], _a;
            })
            : undefined;
        return (Object(preact__WEBPACK_IMPORTED_MODULE_1__["h"])("div", null,
            Object(preact__WEBPACK_IMPORTED_MODULE_1__["h"])("ha-device-picker", { value: device_id, onChange: this.devicePicked, hass: hass, label: "Device" }),
            Object(preact__WEBPACK_IMPORTED_MODULE_1__["h"])("ha-device-condition-picker", { value: condition, deviceId: device_id, onChange: this.deviceConditionPicked, hass: hass, label: "Condition" }),
            extraFieldsData && (Object(preact__WEBPACK_IMPORTED_MODULE_1__["h"])("ha-form", { data: Object.assign.apply(Object, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])([{}], extraFieldsData)), "onData-changed": this._extraFieldsChanged, schema: this.state.capabilities.extra_fields, computeLabel: this._extraFieldsComputeLabelCallback(hass.localize) }))));
    };
    DeviceCondition.prototype.componentDidMount = function () {
        if (!this.state.capabilities) {
            this._getCapabilities();
        }
        if (this.props.condition) {
            this._origCondition = this.props.condition;
        }
    };
    DeviceCondition.prototype.componentDidUpdate = function (prevProps) {
        if (prevProps.condition !== this.props.condition) {
            this._getCapabilities();
        }
    };
    DeviceCondition.prototype._getCapabilities = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var condition, capabilities, _a;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        condition = this.props.condition;
                        if (!condition.domain) return [3 /*break*/, 2];
                        return [4 /*yield*/, Object(_data_device_automation__WEBPACK_IMPORTED_MODULE_5__["fetchDeviceConditionCapabilities"])(this.props.hass, condition)];
                    case 1:
                        _a = _b.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        _a = null;
                        _b.label = 3;
                    case 3:
                        capabilities = _a;
                        this.setState(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this.state), { capabilities: capabilities }));
                        return [2 /*return*/];
                }
            });
        });
    };
    DeviceCondition.prototype._extraFieldsChanged = function (ev) {
        var _a;
        if (!ev.detail.path) {
            return;
        }
        var item = ev.detail.path.replace("data.", "");
        var value = ev.detail.value || undefined;
        this.props.onChange(this.props.index, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this.props.condition), (_a = {}, _a[item] = value, _a)));
    };
    DeviceCondition.prototype._extraFieldsComputeLabelCallback = function (localize) {
        // Returns a callback for ha-form to calculate labels per schema object
        return function (schema) {
            return localize("ui.panel.config.automation.editor.condition.type.device.extra_fields." + schema.name) || schema.name;
        };
    };
    return DeviceCondition;
}(preact__WEBPACK_IMPORTED_MODULE_1__["Component"]));
/* harmony default export */ __webpack_exports__["default"] = (DeviceCondition);
DeviceCondition.defaultConfig = {
    device_id: "",
    domain: "",
    entity_id: "",
};


/***/ }),

/***/ "./src/panels/config/js/condition/index.tsx":
/*!**************************************************!*\
  !*** ./src/panels/config/js/condition/index.tsx ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.mjs");
/* harmony import */ var _material_mwc_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material/mwc-button */ "./node_modules/@material/mwc-button/mwc-button.js");
/* harmony import */ var _components_ha_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../components/ha-card */ "./src/components/ha-card.ts");
/* harmony import */ var _condition_row__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./condition_row */ "./src/panels/config/js/condition/condition_row.tsx");





var Condition = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(Condition, _super);
    function Condition() {
        var _this = _super.call(this) || this;
        _this.addCondition = _this.addCondition.bind(_this);
        _this.conditionChanged = _this.conditionChanged.bind(_this);
        return _this;
    }
    Condition.prototype.addCondition = function () {
        var condition = this.props.condition.concat({
            condition: "state",
        });
        this.props.onChange(condition);
    };
    Condition.prototype.conditionChanged = function (index, newValue) {
        var condition = this.props.condition.concat();
        if (newValue === null) {
            condition.splice(index, 1);
        }
        else {
            condition[index] = newValue;
        }
        this.props.onChange(condition);
    };
    Condition.prototype.render = function (_a) {
        var _this = this;
        var condition = _a.condition, hass = _a.hass, localize = _a.localize;
        return (Object(preact__WEBPACK_IMPORTED_MODULE_1__["h"])("div", { class: "triggers" },
            condition.map(function (cnd, idx) { return (Object(preact__WEBPACK_IMPORTED_MODULE_1__["h"])(_condition_row__WEBPACK_IMPORTED_MODULE_4__["default"], { index: idx, condition: cnd, onChange: _this.conditionChanged, hass: hass, localize: localize })); }),
            Object(preact__WEBPACK_IMPORTED_MODULE_1__["h"])("ha-card", null,
                Object(preact__WEBPACK_IMPORTED_MODULE_1__["h"])("div", { class: "card-actions add-card" },
                    Object(preact__WEBPACK_IMPORTED_MODULE_1__["h"])("mwc-button", { onTap: this.addCondition }, localize("ui.panel.config.automation.editor.conditions.add"))))));
    };
    return Condition;
}(preact__WEBPACK_IMPORTED_MODULE_1__["Component"]));
/* harmony default export */ __webpack_exports__["default"] = (Condition);


/***/ }),

/***/ "./src/panels/config/js/condition/logical.tsx":
/*!****************************************************!*\
  !*** ./src/panels/config/js/condition/logical.tsx ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.mjs");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index */ "./src/panels/config/js/condition/index.tsx");



var LogicalCondition = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(LogicalCondition, _super);
    function LogicalCondition() {
        var _this = _super.call(this) || this;
        _this._mounted = false;
        _this.conditionChanged = _this.conditionChanged.bind(_this);
        return _this;
    }
    LogicalCondition.prototype.conditionChanged = function (conditions) {
        if (this._mounted) {
            this.props.onChange(this.props.index, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this.props.condition), { conditions: conditions }));
        }
    };
    LogicalCondition.prototype.componentWillMount = function () {
        this._mounted = true;
    };
    LogicalCondition.prototype.componentWillUnmount = function () {
        this._mounted = false;
    };
    /* eslint-disable camelcase */
    LogicalCondition.prototype.render = function (_a) {
        var condition = _a.condition, hass = _a.hass, localize = _a.localize;
        return (Object(preact__WEBPACK_IMPORTED_MODULE_1__["h"])("div", null,
            Object(preact__WEBPACK_IMPORTED_MODULE_1__["h"])(_index__WEBPACK_IMPORTED_MODULE_2__["default"], { condition: condition.conditions || [], onChange: this.conditionChanged, hass: hass, localize: localize })));
    };
    return LogicalCondition;
}(preact__WEBPACK_IMPORTED_MODULE_1__["Component"]));
/* harmony default export */ __webpack_exports__["default"] = (LogicalCondition);
LogicalCondition.defaultConfig = {
    conditions: [{ condition: "state" }],
};


/***/ }),

/***/ "./src/panels/config/js/condition/numeric_state.tsx":
/*!**********************************************************!*\
  !*** ./src/panels/config/js/condition/numeric_state.tsx ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.mjs");
/* harmony import */ var _polymer_paper_input_paper_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-input/paper-input */ "./node_modules/@polymer/paper-input/paper-input.js");
/* harmony import */ var _components_ha_textarea__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../components/ha-textarea */ "./src/components/ha-textarea.js");
/* harmony import */ var _components_entity_ha_entity_picker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../components/entity/ha-entity-picker */ "./src/components/entity/ha-entity-picker.ts");
/* harmony import */ var _common_preact_event__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../common/preact/event */ "./src/common/preact/event.ts");






var NumericStateCondition = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(NumericStateCondition, _super);
    function NumericStateCondition() {
        var _this = _super.call(this) || this;
        _this.onChange = _common_preact_event__WEBPACK_IMPORTED_MODULE_5__["onChangeEvent"].bind(_this, "condition");
        _this.entityPicked = _this.entityPicked.bind(_this);
        return _this;
    }
    NumericStateCondition.prototype.entityPicked = function (ev) {
        this.props.onChange(this.props.index, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this.props.condition), { entity_id: ev.target.value }));
    };
    /* eslint-disable camelcase */
    NumericStateCondition.prototype.render = function (_a) {
        var condition = _a.condition, hass = _a.hass, localize = _a.localize;
        var value_template = condition.value_template, entity_id = condition.entity_id, below = condition.below, above = condition.above;
        return (Object(preact__WEBPACK_IMPORTED_MODULE_1__["h"])("div", null,
            Object(preact__WEBPACK_IMPORTED_MODULE_1__["h"])("ha-entity-picker", { value: entity_id, onChange: this.entityPicked, hass: hass, allowCustomEntity: true }),
            Object(preact__WEBPACK_IMPORTED_MODULE_1__["h"])("paper-input", { label: localize("ui.panel.config.automation.editor.conditions.type.numeric_state.above"), name: "above", value: above, "onvalue-changed": this.onChange }),
            Object(preact__WEBPACK_IMPORTED_MODULE_1__["h"])("paper-input", { label: localize("ui.panel.config.automation.editor.conditions.type.numeric_state.below"), name: "below", value: below, "onvalue-changed": this.onChange }),
            Object(preact__WEBPACK_IMPORTED_MODULE_1__["h"])("ha-textarea", { label: localize("ui.panel.config.automation.editor.conditions.type.numeric_state.value_template"), name: "value_template", value: value_template, "onvalue-changed": this.onChange, dir: "ltr" })));
    };
    return NumericStateCondition;
}(preact__WEBPACK_IMPORTED_MODULE_1__["Component"]));
/* harmony default export */ __webpack_exports__["default"] = (NumericStateCondition);
NumericStateCondition.defaultConfig = {
    entity_id: "",
};


/***/ }),

/***/ "./src/panels/config/js/condition/state.tsx":
/*!**************************************************!*\
  !*** ./src/panels/config/js/condition/state.tsx ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.mjs");
/* harmony import */ var _polymer_paper_input_paper_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-input/paper-input */ "./node_modules/@polymer/paper-input/paper-input.js");
/* harmony import */ var _components_entity_ha_entity_picker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../components/entity/ha-entity-picker */ "./src/components/entity/ha-entity-picker.ts");
/* harmony import */ var _common_preact_event__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../common/preact/event */ "./src/common/preact/event.ts");





var StateCondition = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(StateCondition, _super);
    function StateCondition() {
        var _this = _super.call(this) || this;
        _this.onChange = _common_preact_event__WEBPACK_IMPORTED_MODULE_4__["onChangeEvent"].bind(_this, "condition");
        _this.entityPicked = _this.entityPicked.bind(_this);
        return _this;
    }
    StateCondition.prototype.entityPicked = function (ev) {
        this.props.onChange(this.props.index, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this.props.condition), { entity_id: ev.target.value }));
    };
    /* eslint-disable camelcase */
    StateCondition.prototype.render = function (_a) {
        var condition = _a.condition, hass = _a.hass, localize = _a.localize;
        var entity_id = condition.entity_id, state = condition.state;
        var cndFor = condition.for;
        return (Object(preact__WEBPACK_IMPORTED_MODULE_1__["h"])("div", null,
            Object(preact__WEBPACK_IMPORTED_MODULE_1__["h"])("ha-entity-picker", { value: entity_id, onChange: this.entityPicked, hass: hass, allowCustomEntity: true }),
            Object(preact__WEBPACK_IMPORTED_MODULE_1__["h"])("paper-input", { label: localize("ui.panel.config.automation.editor.conditions.type.state.state"), name: "state", value: state, "onvalue-changed": this.onChange }),
            cndFor && Object(preact__WEBPACK_IMPORTED_MODULE_1__["h"])("pre", null,
                "For: ",
                JSON.stringify(cndFor, null, 2))));
    };
    return StateCondition;
}(preact__WEBPACK_IMPORTED_MODULE_1__["Component"]));
/* harmony default export */ __webpack_exports__["default"] = (StateCondition);
StateCondition.defaultConfig = {
    entity_id: "",
    state: "",
};


/***/ }),

/***/ "./src/panels/config/js/condition/sun.tsx":
/*!************************************************!*\
  !*** ./src/panels/config/js/condition/sun.tsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.mjs");
/* harmony import */ var _polymer_paper_input_paper_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-input/paper-input */ "./node_modules/@polymer/paper-input/paper-input.js");
/* harmony import */ var _polymer_paper_radio_button_paper_radio_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/paper-radio-button/paper-radio-button */ "./node_modules/@polymer/paper-radio-button/paper-radio-button.js");
/* harmony import */ var _polymer_paper_radio_group_paper_radio_group__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/paper-radio-group/paper-radio-group */ "./node_modules/@polymer/paper-radio-group/paper-radio-group.js");
/* harmony import */ var _common_preact_event__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../common/preact/event */ "./src/common/preact/event.ts");






var SunCondition = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(SunCondition, _super);
    function SunCondition() {
        var _this = _super.call(this) || this;
        _this.onChange = _common_preact_event__WEBPACK_IMPORTED_MODULE_5__["onChangeEvent"].bind(_this, "condition");
        _this.afterPicked = _this.radioGroupPicked.bind(_this, "after");
        _this.beforePicked = _this.radioGroupPicked.bind(_this, "before");
        return _this;
    }
    SunCondition.prototype.radioGroupPicked = function (key, ev) {
        var condition = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this.props.condition);
        if (ev.target.selected) {
            condition[key] = ev.target.selected;
        }
        else {
            delete condition[key];
        }
        this.props.onChange(this.props.index, condition);
    };
    SunCondition.prototype.render = function (_a) {
        var condition = _a.condition, localize = _a.localize;
        /* eslint-disable camelcase */
        var after = condition.after, after_offset = condition.after_offset, before = condition.before, before_offset = condition.before_offset;
        return (Object(preact__WEBPACK_IMPORTED_MODULE_1__["h"])("div", null,
            Object(preact__WEBPACK_IMPORTED_MODULE_1__["h"])("label", { id: "beforelabel" }, localize("ui.panel.config.automation.editor.conditions.type.sun.before")),
            Object(preact__WEBPACK_IMPORTED_MODULE_1__["h"])("paper-radio-group", { "allow-empty-selection": true, selected: before, "aria-labelledby": "beforelabel", "onpaper-radio-group-changed": this.beforePicked },
                Object(preact__WEBPACK_IMPORTED_MODULE_1__["h"])("paper-radio-button", { name: "sunrise" }, localize("ui.panel.config.automation.editor.conditions.type.sun.sunrise")),
                Object(preact__WEBPACK_IMPORTED_MODULE_1__["h"])("paper-radio-button", { name: "sunset" }, localize("ui.panel.config.automation.editor.conditions.type.sun.sunset"))),
            Object(preact__WEBPACK_IMPORTED_MODULE_1__["h"])("paper-input", { label: localize("ui.panel.config.automation.editor.conditions.type.sun.before_offset"), name: "before_offset", value: before_offset, "onvalue-changed": this.onChange, disabled: before === undefined }),
            Object(preact__WEBPACK_IMPORTED_MODULE_1__["h"])("label", { id: "afterlabel" }, localize("ui.panel.config.automation.editor.conditions.type.sun.after")),
            Object(preact__WEBPACK_IMPORTED_MODULE_1__["h"])("paper-radio-group", { "allow-empty-selection": true, selected: after, "aria-labelledby": "afterlabel", "onpaper-radio-group-changed": this.afterPicked },
                Object(preact__WEBPACK_IMPORTED_MODULE_1__["h"])("paper-radio-button", { name: "sunrise" }, localize("ui.panel.config.automation.editor.conditions.type.sun.sunrise")),
                Object(preact__WEBPACK_IMPORTED_MODULE_1__["h"])("paper-radio-button", { name: "sunset" }, localize("ui.panel.config.automation.editor.conditions.type.sun.sunset"))),
            Object(preact__WEBPACK_IMPORTED_MODULE_1__["h"])("paper-input", { label: localize("ui.panel.config.automation.editor.conditions.type.sun.after_offset"), name: "after_offset", value: after_offset, "onvalue-changed": this.onChange, disabled: after === undefined })));
    };
    return SunCondition;
}(preact__WEBPACK_IMPORTED_MODULE_1__["Component"]));
/* harmony default export */ __webpack_exports__["default"] = (SunCondition);
SunCondition.defaultConfig = {};


/***/ }),

/***/ "./src/panels/config/js/condition/template.tsx":
/*!*****************************************************!*\
  !*** ./src/panels/config/js/condition/template.tsx ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.mjs");
/* harmony import */ var _components_ha_textarea__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../components/ha-textarea */ "./src/components/ha-textarea.js");
/* harmony import */ var _common_preact_event__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../common/preact/event */ "./src/common/preact/event.ts");




var TemplateCondition = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(TemplateCondition, _super);
    function TemplateCondition() {
        var _this = _super.call(this) || this;
        _this.onChange = _common_preact_event__WEBPACK_IMPORTED_MODULE_3__["onChangeEvent"].bind(_this, "condition");
        return _this;
    }
    TemplateCondition.prototype.render = function (_a) {
        var condition = _a.condition, localize = _a.localize;
        /* eslint-disable camelcase */
        var value_template = condition.value_template;
        return (Object(preact__WEBPACK_IMPORTED_MODULE_1__["h"])("div", null,
            Object(preact__WEBPACK_IMPORTED_MODULE_1__["h"])("ha-textarea", { label: localize("ui.panel.config.automation.editor.conditions.type.template.value_template"), name: "value_template", value: value_template, "onvalue-changed": this.onChange, dir: "ltr" })));
    };
    return TemplateCondition;
}(preact__WEBPACK_IMPORTED_MODULE_1__["Component"]));
/* harmony default export */ __webpack_exports__["default"] = (TemplateCondition);
TemplateCondition.defaultConfig = {
    value_template: "",
};


/***/ }),

/***/ "./src/panels/config/js/condition/time.tsx":
/*!*************************************************!*\
  !*** ./src/panels/config/js/condition/time.tsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.mjs");
/* harmony import */ var _polymer_paper_input_paper_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-input/paper-input */ "./node_modules/@polymer/paper-input/paper-input.js");
/* harmony import */ var _common_preact_event__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../common/preact/event */ "./src/common/preact/event.ts");




var TimeCondition = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(TimeCondition, _super);
    function TimeCondition() {
        var _this = _super.call(this) || this;
        _this.onChange = _common_preact_event__WEBPACK_IMPORTED_MODULE_3__["onChangeEvent"].bind(_this, "condition");
        return _this;
    }
    /* eslint-disable camelcase */
    TimeCondition.prototype.render = function (_a) {
        var condition = _a.condition, localize = _a.localize;
        var after = condition.after, before = condition.before;
        return (Object(preact__WEBPACK_IMPORTED_MODULE_1__["h"])("div", null,
            Object(preact__WEBPACK_IMPORTED_MODULE_1__["h"])("paper-input", { label: localize("ui.panel.config.automation.editor.conditions.type.time.after"), name: "after", value: after, "onvalue-changed": this.onChange }),
            Object(preact__WEBPACK_IMPORTED_MODULE_1__["h"])("paper-input", { label: localize("ui.panel.config.automation.editor.conditions.type.time.before"), name: "before", value: before, "onvalue-changed": this.onChange })));
    };
    return TimeCondition;
}(preact__WEBPACK_IMPORTED_MODULE_1__["Component"]));
/* harmony default export */ __webpack_exports__["default"] = (TimeCondition);
TimeCondition.defaultConfig = {};


/***/ }),

/***/ "./src/panels/config/js/condition/zone.tsx":
/*!*************************************************!*\
  !*** ./src/panels/config/js/condition/zone.tsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.mjs");
/* harmony import */ var _components_entity_ha_entity_picker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../components/entity/ha-entity-picker */ "./src/components/entity/ha-entity-picker.ts");
/* harmony import */ var _common_entity_has_location__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../common/entity/has_location */ "./src/common/entity/has_location.ts");
/* harmony import */ var _common_entity_compute_state_domain__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../common/entity/compute_state_domain */ "./src/common/entity/compute_state_domain.ts");





function zoneAndLocationFilter(stateObj) {
    return Object(_common_entity_has_location__WEBPACK_IMPORTED_MODULE_3__["hasLocation"])(stateObj) && Object(_common_entity_compute_state_domain__WEBPACK_IMPORTED_MODULE_4__["computeStateDomain"])(stateObj) !== "zone";
}
var ZoneCondition = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(ZoneCondition, _super);
    function ZoneCondition() {
        var _this = _super.call(this) || this;
        _this.entityPicked = _this.entityPicked.bind(_this);
        _this.zonePicked = _this.zonePicked.bind(_this);
        return _this;
    }
    ZoneCondition.prototype.entityPicked = function (ev) {
        this.props.onChange(this.props.index, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this.props.condition), { entity_id: ev.target.value }));
    };
    ZoneCondition.prototype.zonePicked = function (ev) {
        this.props.onChange(this.props.index, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this.props.condition), { zone: ev.target.value }));
    };
    /* eslint-disable camelcase */
    ZoneCondition.prototype.render = function (_a) {
        var condition = _a.condition, hass = _a.hass, localize = _a.localize;
        var entity_id = condition.entity_id, zone = condition.zone;
        return (Object(preact__WEBPACK_IMPORTED_MODULE_1__["h"])("div", null,
            Object(preact__WEBPACK_IMPORTED_MODULE_1__["h"])("ha-entity-picker", { label: localize("ui.panel.config.automation.editor.conditions.type.zone.entity"), value: entity_id, onChange: this.entityPicked, hass: hass, allowCustomEntity: true, entityFilter: zoneAndLocationFilter }),
            Object(preact__WEBPACK_IMPORTED_MODULE_1__["h"])("ha-entity-picker", { label: localize("ui.panel.config.automation.editor.conditions.type.zone.zone"), value: zone, onChange: this.zonePicked, hass: hass, allowCustomEntity: true, domainFilter: "zone" })));
    };
    return ZoneCondition;
}(preact__WEBPACK_IMPORTED_MODULE_1__["Component"]));
/* harmony default export */ __webpack_exports__["default"] = (ZoneCondition);
ZoneCondition.defaultConfig = {
    entity_id: "",
    zone: "",
};


/***/ }),

/***/ "./src/panels/config/js/script/action_edit.tsx":
/*!*****************************************************!*\
  !*** ./src/panels/config/js/script/action_edit.tsx ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.mjs");
/* harmony import */ var _polymer_paper_dropdown_menu_paper_dropdown_menu_light__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-dropdown-menu/paper-dropdown-menu-light */ "./node_modules/@polymer/paper-dropdown-menu/paper-dropdown-menu-light.js");
/* harmony import */ var _polymer_paper_listbox_paper_listbox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/paper-listbox/paper-listbox */ "./node_modules/@polymer/paper-listbox/paper-listbox.js");
/* harmony import */ var _polymer_paper_item_paper_item__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/paper-item/paper-item */ "./node_modules/@polymer/paper-item/paper-item.js");
/* harmony import */ var _call_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./call_service */ "./src/panels/config/js/script/call_service.tsx");
/* harmony import */ var _condition__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./condition */ "./src/panels/config/js/script/condition.tsx");
/* harmony import */ var _delay__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./delay */ "./src/panels/config/js/script/delay.tsx");
/* harmony import */ var _device__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./device */ "./src/panels/config/js/script/device.tsx");
/* harmony import */ var _event__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./event */ "./src/panels/config/js/script/event.tsx");
/* harmony import */ var _scene__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./scene */ "./src/panels/config/js/script/scene.tsx");
/* harmony import */ var _wait__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./wait */ "./src/panels/config/js/script/wait.tsx");












var TYPES = {
    service: _call_service__WEBPACK_IMPORTED_MODULE_5__["default"],
    delay: _delay__WEBPACK_IMPORTED_MODULE_7__["default"],
    wait_template: _wait__WEBPACK_IMPORTED_MODULE_11__["default"],
    condition: _condition__WEBPACK_IMPORTED_MODULE_6__["default"],
    event: _event__WEBPACK_IMPORTED_MODULE_9__["default"],
    device_id: _device__WEBPACK_IMPORTED_MODULE_8__["default"],
    scene: _scene__WEBPACK_IMPORTED_MODULE_10__["default"],
};
var OPTIONS = Object.keys(TYPES).sort();
function getType(action) {
    var keys = Object.keys(TYPES);
    // tslint:disable-next-line: prefer-for-of
    for (var i = 0; i < keys.length; i++) {
        if (keys[i] in action) {
            return keys[i];
        }
    }
    return null;
}
var Action = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(Action, _super);
    function Action() {
        var _this = _super.call(this) || this;
        _this.typeChanged = _this.typeChanged.bind(_this);
        return _this;
    }
    Action.prototype.typeChanged = function (ev) {
        var newType = ev.target.selectedItem.attributes.action.value;
        var oldType = getType(this.props.action);
        if (oldType !== newType) {
            this.props.onChange(this.props.index, TYPES[newType].defaultConfig);
        }
    };
    Action.prototype.render = function (_a) {
        var index = _a.index, action = _a.action, onChange = _a.onChange, hass = _a.hass, localize = _a.localize;
        var type = getType(action);
        // tslint:disable-next-line: variable-name
        var Comp = type && TYPES[type];
        // @ts-ignore
        var selected = OPTIONS.indexOf(type);
        if (!Comp) {
            return (Object(preact__WEBPACK_IMPORTED_MODULE_1__["h"])("div", null,
                localize("ui.panel.config.automation.editor.actions.unsupported_action", "action", type),
                Object(preact__WEBPACK_IMPORTED_MODULE_1__["h"])("pre", null, JSON.stringify(action, null, 2))));
        }
        return (Object(preact__WEBPACK_IMPORTED_MODULE_1__["h"])("div", null,
            Object(preact__WEBPACK_IMPORTED_MODULE_1__["h"])("paper-dropdown-menu-light", { label: localize("ui.panel.config.automation.editor.actions.type_select"), "no-animations": true },
                Object(preact__WEBPACK_IMPORTED_MODULE_1__["h"])("paper-listbox", { slot: "dropdown-content", selected: selected, "oniron-select": this.typeChanged }, OPTIONS.map(function (opt) { return (Object(preact__WEBPACK_IMPORTED_MODULE_1__["h"])("paper-item", { action: opt }, localize("ui.panel.config.automation.editor.actions.type." + opt + ".label"))); }))),
            Object(preact__WEBPACK_IMPORTED_MODULE_1__["h"])(Comp, { index: index, action: action, onChange: onChange, hass: hass, localize: localize })));
    };
    return Action;
}(preact__WEBPACK_IMPORTED_MODULE_1__["Component"]));
/* harmony default export */ __webpack_exports__["default"] = (Action);


/***/ }),

/***/ "./src/panels/config/js/script/action_row.tsx":
/*!****************************************************!*\
  !*** ./src/panels/config/js/script/action_row.tsx ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.mjs");
/* harmony import */ var _polymer_paper_menu_button_paper_menu_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-menu-button/paper-menu-button */ "./node_modules/@polymer/paper-menu-button/paper-menu-button.js");
/* harmony import */ var _polymer_paper_icon_button_paper_icon_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/paper-icon-button/paper-icon-button */ "./node_modules/@polymer/paper-icon-button/paper-icon-button.js");
/* harmony import */ var _polymer_paper_item_paper_item__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/paper-item/paper-item */ "./node_modules/@polymer/paper-item/paper-item.js");
/* harmony import */ var _polymer_paper_listbox_paper_listbox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @polymer/paper-listbox/paper-listbox */ "./node_modules/@polymer/paper-listbox/paper-listbox.js");
/* harmony import */ var _components_ha_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../components/ha-card */ "./src/components/ha-card.ts");
/* harmony import */ var _action_edit__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./action_edit */ "./src/panels/config/js/script/action_edit.tsx");








var Action = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(Action, _super);
    function Action() {
        var _this = _super.call(this) || this;
        _this.onDelete = _this.onDelete.bind(_this);
        return _this;
    }
    Action.prototype.onDelete = function () {
        // eslint-disable-next-line
        if (confirm(this.props.localize("ui.panel.config.automation.editor.actions.delete_confirm"))) {
            this.props.onChange(this.props.index, null);
        }
    };
    Action.prototype.render = function (props) {
        return (Object(preact__WEBPACK_IMPORTED_MODULE_1__["h"])("ha-card", null,
            Object(preact__WEBPACK_IMPORTED_MODULE_1__["h"])("div", { class: "card-content" },
                Object(preact__WEBPACK_IMPORTED_MODULE_1__["h"])("div", { class: "card-menu" },
                    Object(preact__WEBPACK_IMPORTED_MODULE_1__["h"])("paper-menu-button", { "no-animations": true, "horizontal-align": "right", "horizontal-offset": "-5", "vertical-offset": "-5" },
                        Object(preact__WEBPACK_IMPORTED_MODULE_1__["h"])("paper-icon-button", { icon: "hass:dots-vertical", slot: "dropdown-trigger" }),
                        Object(preact__WEBPACK_IMPORTED_MODULE_1__["h"])("paper-listbox", { slot: "dropdown-content" },
                            Object(preact__WEBPACK_IMPORTED_MODULE_1__["h"])("paper-item", { disabled: true }, props.localize("ui.panel.config.automation.editor.actions.duplicate")),
                            Object(preact__WEBPACK_IMPORTED_MODULE_1__["h"])("paper-item", { onTap: this.onDelete }, props.localize("ui.panel.config.automation.editor.actions.delete"))))),
                Object(preact__WEBPACK_IMPORTED_MODULE_1__["h"])(_action_edit__WEBPACK_IMPORTED_MODULE_7__["default"], Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, props)))));
    };
    return Action;
}(preact__WEBPACK_IMPORTED_MODULE_1__["Component"]));
/* harmony default export */ __webpack_exports__["default"] = (Action);


/***/ }),

/***/ "./src/panels/config/js/script/call_service.tsx":
/*!******************************************************!*\
  !*** ./src/panels/config/js/script/call_service.tsx ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.mjs");
/* harmony import */ var _components_ha_service_picker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../components/ha-service-picker */ "./src/components/ha-service-picker.js");
/* harmony import */ var _yaml_textarea__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../yaml_textarea */ "./src/panels/config/js/yaml_textarea.tsx");




var CallServiceAction = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(CallServiceAction, _super);
    function CallServiceAction() {
        var _this = _super.call(this) || this;
        _this.serviceChanged = _this.serviceChanged.bind(_this);
        _this.serviceDataChanged = _this.serviceDataChanged.bind(_this);
        return _this;
    }
    CallServiceAction.prototype.serviceChanged = function (ev) {
        this.props.onChange(this.props.index, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this.props.action), { service: ev.target.value }));
    };
    CallServiceAction.prototype.serviceDataChanged = function (data) {
        this.props.onChange(this.props.index, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this.props.action), { data: data }));
    };
    CallServiceAction.prototype.render = function (_a) {
        var action = _a.action, hass = _a.hass, localize = _a.localize;
        var service = action.service, data = action.data;
        return (Object(preact__WEBPACK_IMPORTED_MODULE_1__["h"])("div", null,
            Object(preact__WEBPACK_IMPORTED_MODULE_1__["h"])("ha-service-picker", { hass: hass, value: service, onChange: this.serviceChanged }),
            Object(preact__WEBPACK_IMPORTED_MODULE_1__["h"])(_yaml_textarea__WEBPACK_IMPORTED_MODULE_3__["default"], { label: localize("ui.panel.config.automation.editor.actions.type.service.service_data"), value: data, onChange: this.serviceDataChanged })));
    };
    return CallServiceAction;
}(preact__WEBPACK_IMPORTED_MODULE_1__["Component"]));
/* harmony default export */ __webpack_exports__["default"] = (CallServiceAction);
CallServiceAction.defaultConfig = {
    alias: "",
    service: "",
    data: {},
};


/***/ }),

/***/ "./src/panels/config/js/script/condition.tsx":
/*!***************************************************!*\
  !*** ./src/panels/config/js/script/condition.tsx ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.mjs");
/* harmony import */ var _condition_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../condition/state */ "./src/panels/config/js/condition/state.tsx");
/* harmony import */ var _condition_condition_edit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../condition/condition_edit */ "./src/panels/config/js/condition/condition_edit.tsx");




var ConditionAction = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(ConditionAction, _super);
    function ConditionAction() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // eslint-disable-next-line
    ConditionAction.prototype.render = function (_a) {
        var action = _a.action, index = _a.index, onChange = _a.onChange, hass = _a.hass, localize = _a.localize;
        return (Object(preact__WEBPACK_IMPORTED_MODULE_1__["h"])(_condition_condition_edit__WEBPACK_IMPORTED_MODULE_3__["default"], { condition: action, onChange: onChange, index: index, hass: hass, localize: localize }));
    };
    return ConditionAction;
}(preact__WEBPACK_IMPORTED_MODULE_1__["Component"]));
/* harmony default export */ __webpack_exports__["default"] = (ConditionAction);
ConditionAction.defaultConfig = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ condition: "state" }, _condition_state__WEBPACK_IMPORTED_MODULE_2__["default"].defaultConfig);


/***/ }),

/***/ "./src/panels/config/js/script/delay.tsx":
/*!***********************************************!*\
  !*** ./src/panels/config/js/script/delay.tsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.mjs");
/* harmony import */ var _polymer_paper_input_paper_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-input/paper-input */ "./node_modules/@polymer/paper-input/paper-input.js");
/* harmony import */ var _common_preact_event__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../common/preact/event */ "./src/common/preact/event.ts");




var DelayAction = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(DelayAction, _super);
    function DelayAction() {
        var _this = _super.call(this) || this;
        _this.onChange = _common_preact_event__WEBPACK_IMPORTED_MODULE_3__["onChangeEvent"].bind(_this, "action");
        return _this;
    }
    DelayAction.prototype.render = function (_a) {
        var action = _a.action, localize = _a.localize;
        var delay = action.delay;
        return (Object(preact__WEBPACK_IMPORTED_MODULE_1__["h"])("div", null,
            Object(preact__WEBPACK_IMPORTED_MODULE_1__["h"])("paper-input", { label: localize("ui.panel.config.automation.editor.actions.type.delay.delay"), name: "delay", value: delay, "onvalue-changed": this.onChange })));
    };
    return DelayAction;
}(preact__WEBPACK_IMPORTED_MODULE_1__["Component"]));
/* harmony default export */ __webpack_exports__["default"] = (DelayAction);
DelayAction.defaultConfig = {
    delay: "",
};


/***/ }),

/***/ "./src/panels/config/js/script/device.tsx":
/*!************************************************!*\
  !*** ./src/panels/config/js/script/device.tsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.mjs");
/* harmony import */ var _components_device_ha_device_picker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../components/device/ha-device-picker */ "./src/components/device/ha-device-picker.ts");
/* harmony import */ var _components_device_ha_device_action_picker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../components/device/ha-device-action-picker */ "./src/components/device/ha-device-action-picker.ts");




var DeviceActionEditor = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(DeviceActionEditor, _super);
    function DeviceActionEditor() {
        var _this = _super.call(this) || this;
        _this.devicePicked = _this.devicePicked.bind(_this);
        _this.deviceActionPicked = _this.deviceActionPicked.bind(_this);
        _this.state = { device_id: undefined };
        return _this;
    }
    DeviceActionEditor.prototype.render = function () {
        var _a = this.props, action = _a.action, hass = _a.hass;
        var deviceId = this.state.device_id || action.device_id;
        return (Object(preact__WEBPACK_IMPORTED_MODULE_1__["h"])("div", null,
            Object(preact__WEBPACK_IMPORTED_MODULE_1__["h"])("ha-device-picker", { value: deviceId, onChange: this.devicePicked, hass: hass, label: "Device" }),
            Object(preact__WEBPACK_IMPORTED_MODULE_1__["h"])("ha-device-action-picker", { value: action, deviceId: deviceId, onChange: this.deviceActionPicked, hass: hass, label: "Action" })));
    };
    DeviceActionEditor.prototype.devicePicked = function (ev) {
        this.setState({ device_id: ev.target.value });
    };
    DeviceActionEditor.prototype.deviceActionPicked = function (ev) {
        var deviceAction = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, ev.target.value);
        this.props.onChange(this.props.index, deviceAction);
    };
    DeviceActionEditor.defaultConfig = {
        device_id: "",
        domain: "",
        entity_id: "",
    };
    return DeviceActionEditor;
}(preact__WEBPACK_IMPORTED_MODULE_1__["Component"]));
/* harmony default export */ __webpack_exports__["default"] = (DeviceActionEditor);


/***/ }),

/***/ "./src/panels/config/js/script/event.tsx":
/*!***********************************************!*\
  !*** ./src/panels/config/js/script/event.tsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.mjs");
/* harmony import */ var _polymer_paper_input_paper_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-input/paper-input */ "./node_modules/@polymer/paper-input/paper-input.js");
/* harmony import */ var _yaml_textarea__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../yaml_textarea */ "./src/panels/config/js/yaml_textarea.tsx");
/* harmony import */ var _common_preact_event__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../common/preact/event */ "./src/common/preact/event.ts");





var EventActionForm = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(EventActionForm, _super);
    function EventActionForm() {
        var _this = _super.call(this) || this;
        _this.onChange = _common_preact_event__WEBPACK_IMPORTED_MODULE_4__["onChangeEvent"].bind(_this, "action");
        _this.serviceDataChanged = _this.serviceDataChanged.bind(_this);
        return _this;
    }
    Object.defineProperty(EventActionForm, "defaultConfig", {
        get: function () {
            return {
                event: "",
                event_data: {},
            };
        },
        enumerable: true,
        configurable: true
    });
    EventActionForm.prototype.render = function () {
        var _a = this.props, _b = _a.action, event = _b.event, event_data = _b.event_data, localize = _a.localize;
        return (Object(preact__WEBPACK_IMPORTED_MODULE_1__["h"])("div", null,
            Object(preact__WEBPACK_IMPORTED_MODULE_1__["h"])("paper-input", { label: localize("ui.panel.config.automation.editor.actions.type.event.event"), name: "event", value: event, "onvalue-changed": this.onChange }),
            Object(preact__WEBPACK_IMPORTED_MODULE_1__["h"])(_yaml_textarea__WEBPACK_IMPORTED_MODULE_3__["default"], { label: localize("ui.panel.config.automation.editor.actions.type.event.service_data"), value: event_data, onChange: this.serviceDataChanged })));
    };
    EventActionForm.prototype.serviceDataChanged = function (eventData) {
        this.props.onChange(this.props.index, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this.props.action), { event_data: eventData }));
    };
    return EventActionForm;
}(preact__WEBPACK_IMPORTED_MODULE_1__["Component"]));
/* harmony default export */ __webpack_exports__["default"] = (EventActionForm);


/***/ }),

/***/ "./src/panels/config/js/script/index.tsx":
/*!***********************************************!*\
  !*** ./src/panels/config/js/script/index.tsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.mjs");
/* harmony import */ var _material_mwc_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material/mwc-button */ "./node_modules/@material/mwc-button/mwc-button.js");
/* harmony import */ var _components_ha_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../components/ha-card */ "./src/components/ha-card.ts");
/* harmony import */ var _action_row__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./action_row */ "./src/panels/config/js/script/action_row.tsx");





var Script = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(Script, _super);
    function Script() {
        var _this = _super.call(this) || this;
        _this.addAction = _this.addAction.bind(_this);
        _this.actionChanged = _this.actionChanged.bind(_this);
        return _this;
    }
    Script.prototype.addAction = function () {
        var script = this.props.script.concat({
            service: "",
        });
        this.props.onChange(script);
    };
    Script.prototype.actionChanged = function (index, newValue) {
        var script = this.props.script.concat();
        if (newValue === null) {
            script.splice(index, 1);
        }
        else {
            script[index] = newValue;
        }
        this.props.onChange(script);
    };
    Script.prototype.render = function (_a) {
        var _this = this;
        var script = _a.script, hass = _a.hass, localize = _a.localize;
        return (Object(preact__WEBPACK_IMPORTED_MODULE_1__["h"])("div", { class: "script" },
            script.map(function (act, idx) { return (Object(preact__WEBPACK_IMPORTED_MODULE_1__["h"])(_action_row__WEBPACK_IMPORTED_MODULE_4__["default"], { index: idx, action: act, onChange: _this.actionChanged, hass: hass, localize: localize })); }),
            Object(preact__WEBPACK_IMPORTED_MODULE_1__["h"])("ha-card", null,
                Object(preact__WEBPACK_IMPORTED_MODULE_1__["h"])("div", { class: "card-actions add-card" },
                    Object(preact__WEBPACK_IMPORTED_MODULE_1__["h"])("mwc-button", { onTap: this.addAction }, localize("ui.panel.config.automation.editor.actions.add"))))));
    };
    return Script;
}(preact__WEBPACK_IMPORTED_MODULE_1__["Component"]));
/* harmony default export */ __webpack_exports__["default"] = (Script);


/***/ }),

/***/ "./src/panels/config/js/script/scene.tsx":
/*!***********************************************!*\
  !*** ./src/panels/config/js/script/scene.tsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.mjs");
/* harmony import */ var _components_entity_ha_entity_picker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../components/entity/ha-entity-picker */ "./src/components/entity/ha-entity-picker.ts");



var SceneAction = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(SceneAction, _super);
    function SceneAction() {
        var _this = _super.call(this) || this;
        _this.sceneChanged = _this.sceneChanged.bind(_this);
        return _this;
    }
    SceneAction.prototype.sceneChanged = function (ev) {
        this.props.onChange(this.props.index, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this.props.action), { scene: ev.target.value }));
    };
    SceneAction.prototype.render = function (_a) {
        var action = _a.action, hass = _a.hass;
        var scene = action.scene;
        return (Object(preact__WEBPACK_IMPORTED_MODULE_1__["h"])("div", null,
            Object(preact__WEBPACK_IMPORTED_MODULE_1__["h"])("ha-entity-picker", { value: scene, onChange: this.sceneChanged, hass: hass, domainFilter: "scene", allowCustomEntity: true })));
    };
    return SceneAction;
}(preact__WEBPACK_IMPORTED_MODULE_1__["Component"]));
/* harmony default export */ __webpack_exports__["default"] = (SceneAction);
SceneAction.defaultConfig = {
    alias: "",
    scene: "",
};


/***/ }),

/***/ "./src/panels/config/js/script/wait.tsx":
/*!**********************************************!*\
  !*** ./src/panels/config/js/script/wait.tsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.mjs");
/* harmony import */ var _polymer_paper_input_paper_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-input/paper-input */ "./node_modules/@polymer/paper-input/paper-input.js");
/* harmony import */ var _components_ha_textarea__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../components/ha-textarea */ "./src/components/ha-textarea.js");
/* harmony import */ var _common_preact_event__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../common/preact/event */ "./src/common/preact/event.ts");





var WaitAction = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(WaitAction, _super);
    function WaitAction() {
        var _this = _super.call(this) || this;
        _this.onChange = _common_preact_event__WEBPACK_IMPORTED_MODULE_4__["onChangeEvent"].bind(_this, "action");
        _this.onTemplateChange = _this.onTemplateChange.bind(_this);
        return _this;
    }
    // Gets fired on mount. If empty, onChangeEvent removes attribute.
    // Without the attribute this action is no longer matched to this component.
    WaitAction.prototype.onTemplateChange = function (ev) {
        var _a;
        this.props.onChange(this.props.index, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this.props.action), (_a = {}, _a[ev.target.getAttribute("name")] = ev.target.value, _a)));
    };
    WaitAction.prototype.render = function (_a) {
        var action = _a.action, localize = _a.localize;
        /* eslint-disable camelcase */
        var wait_template = action.wait_template, timeout = action.timeout;
        return (Object(preact__WEBPACK_IMPORTED_MODULE_1__["h"])("div", null,
            Object(preact__WEBPACK_IMPORTED_MODULE_1__["h"])("ha-textarea", { label: localize("ui.panel.config.automation.editor.actions.type.wait_template.wait_template"), name: "wait_template", value: wait_template, "onvalue-changed": this.onTemplateChange, dir: "ltr" }),
            Object(preact__WEBPACK_IMPORTED_MODULE_1__["h"])("paper-input", { label: localize("ui.panel.config.automation.editor.actions.type.wait_template.timeout"), name: "timeout", value: timeout, "onvalue-changed": this.onChange })));
    };
    return WaitAction;
}(preact__WEBPACK_IMPORTED_MODULE_1__["Component"]));
/* harmony default export */ __webpack_exports__["default"] = (WaitAction);
WaitAction.defaultConfig = {
    wait_template: "",
    timeout: "",
};


/***/ }),

/***/ "./src/panels/config/js/yaml_textarea.tsx":
/*!************************************************!*\
  !*** ./src/panels/config/js/yaml_textarea.tsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.mjs");
/* harmony import */ var js_yaml__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! js-yaml */ "./node_modules/js-yaml/index.js");
/* harmony import */ var js_yaml__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(js_yaml__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_ha_code_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/ha-code-editor */ "./src/components/ha-code-editor.ts");




var isEmpty = function (obj) {
    for (var key in obj) {
        if (obj.hasOwnProperty(key)) {
            return false;
        }
    }
    return true;
};
var YAMLTextArea = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(YAMLTextArea, _super);
    function YAMLTextArea(props) {
        var _this = _super.call(this, props) || this;
        var value;
        try {
            value =
                props.value && !isEmpty(props.value)
                    ? js_yaml__WEBPACK_IMPORTED_MODULE_2___default.a.safeDump(props.value)
                    : undefined;
        }
        catch (err) {
            alert("There was an error converting to YAML: " + err);
        }
        _this.state = {
            isvalid: true,
            value: value,
        };
        _this.onChange = _this.onChange.bind(_this);
        return _this;
    }
    YAMLTextArea.prototype.onChange = function (ev) {
        var value = ev.detail.value;
        var parsed;
        var isValid = true;
        if (value) {
            try {
                parsed = js_yaml__WEBPACK_IMPORTED_MODULE_2___default.a.safeLoad(value);
                isValid = true;
            }
            catch (err) {
                // Invalid YAML
                isValid = false;
            }
        }
        else {
            parsed = {};
        }
        this.setState({
            value: value,
            isValid: isValid,
        });
        if (isValid) {
            this.props.onChange(parsed);
        }
    };
    YAMLTextArea.prototype.render = function (_a, _b) {
        var label = _a.label;
        var value = _b.value, isValid = _b.isValid;
        var style = {
            minWidth: 300,
            width: "100%",
        };
        return (Object(preact__WEBPACK_IMPORTED_MODULE_1__["h"])("div", null,
            Object(preact__WEBPACK_IMPORTED_MODULE_1__["h"])("p", null, label),
            Object(preact__WEBPACK_IMPORTED_MODULE_1__["h"])("ha-code-editor", { mode: "yaml", style: style, value: value, error: isValid === false, "onvalue-changed": this.onChange })));
    };
    return YAMLTextArea;
}(preact__WEBPACK_IMPORTED_MODULE_1__["Component"]));
/* harmony default export */ __webpack_exports__["default"] = (YAMLTextArea);


/***/ }),

/***/ "./src/resources/codemirror.ondemand.ts":
/*!**********************************************!*\
  !*** ./src/resources/codemirror.ondemand.ts ***!
  \**********************************************/
/*! exports provided: loadCodeMirror */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadCodeMirror", function() { return loadCodeMirror; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var loaded;
var loadCodeMirror = function () { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(void 0, void 0, void 0, function () {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
        if (!loaded) {
            loaded = Promise.all(/*! import() | codemirror */[__webpack_require__.e("vendors~codemirror"), __webpack_require__.e("codemirror")]).then(__webpack_require__.bind(null, /*! ./codemirror */ "./src/resources/codemirror.ts"));
        }
        return [2 /*return*/, loaded];
    });
}); };


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFuZWwtY29uZmlnLWF1dG9tYXRpb25+cGFuZWwtY29uZmlnLXNjcmlwdC5jaHVuay5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9jb21tb24vZW50aXR5L2hhc19sb2NhdGlvbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL3ByZWFjdC9ldmVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL3ByZWFjdC91bm1vdW50LnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2RldmljZS9oYS1kZXZpY2UtYWN0aW9uLXBpY2tlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9kZXZpY2UvaGEtZGV2aWNlLWF1dG9tYXRpb24tcGlja2VyLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2RldmljZS9oYS1kZXZpY2UtY29uZGl0aW9uLXBpY2tlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9kZXZpY2UvaGEtZGV2aWNlLXBpY2tlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9lbnRpdHkvaGEtZW50aXR5LXBpY2tlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9oYS1jb2RlLWVkaXRvci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9oYS1mYWIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaGEtcGFwZXItZHJvcGRvd24tbWVudS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9oYS10ZXh0YXJlYS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbWl4aW5zL3N1YnNjcmliZS1taXhpbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL2NvbmZpZy9qcy9jb25kaXRpb24vY29uZGl0aW9uX2VkaXQudHN4Iiwid2VicGFjazovLy8uL3NyYy9wYW5lbHMvY29uZmlnL2pzL2NvbmRpdGlvbi9jb25kaXRpb25fcm93LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL2NvbmZpZy9qcy9jb25kaXRpb24vZGV2aWNlLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL2NvbmZpZy9qcy9jb25kaXRpb24vaW5kZXgudHN4Iiwid2VicGFjazovLy8uL3NyYy9wYW5lbHMvY29uZmlnL2pzL2NvbmRpdGlvbi9sb2dpY2FsLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL2NvbmZpZy9qcy9jb25kaXRpb24vbnVtZXJpY19zdGF0ZS50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhbmVscy9jb25maWcvanMvY29uZGl0aW9uL3N0YXRlLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL2NvbmZpZy9qcy9jb25kaXRpb24vc3VuLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL2NvbmZpZy9qcy9jb25kaXRpb24vdGVtcGxhdGUudHN4Iiwid2VicGFjazovLy8uL3NyYy9wYW5lbHMvY29uZmlnL2pzL2NvbmRpdGlvbi90aW1lLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL2NvbmZpZy9qcy9jb25kaXRpb24vem9uZS50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhbmVscy9jb25maWcvanMvc2NyaXB0L2FjdGlvbl9lZGl0LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL2NvbmZpZy9qcy9zY3JpcHQvYWN0aW9uX3Jvdy50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhbmVscy9jb25maWcvanMvc2NyaXB0L2NhbGxfc2VydmljZS50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhbmVscy9jb25maWcvanMvc2NyaXB0L2NvbmRpdGlvbi50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhbmVscy9jb25maWcvanMvc2NyaXB0L2RlbGF5LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL2NvbmZpZy9qcy9zY3JpcHQvZGV2aWNlLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL2NvbmZpZy9qcy9zY3JpcHQvZXZlbnQudHN4Iiwid2VicGFjazovLy8uL3NyYy9wYW5lbHMvY29uZmlnL2pzL3NjcmlwdC9pbmRleC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhbmVscy9jb25maWcvanMvc2NyaXB0L3NjZW5lLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL2NvbmZpZy9qcy9zY3JpcHQvd2FpdC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhbmVscy9jb25maWcvanMveWFtbF90ZXh0YXJlYS50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3Jlc291cmNlcy9jb2RlbWlycm9yLm9uZGVtYW5kLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEhhc3NFbnRpdHkgfSBmcm9tIFwiaG9tZS1hc3Npc3RhbnQtanMtd2Vic29ja2V0XCI7XG5cbmV4cG9ydCBjb25zdCBoYXNMb2NhdGlvbiA9IChzdGF0ZU9iajogSGFzc0VudGl0eSkgPT4ge1xuICByZXR1cm4gKFxuICAgIFwibGF0aXR1ZGVcIiBpbiBzdGF0ZU9iai5hdHRyaWJ1dGVzICYmIFwibG9uZ2l0dWRlXCIgaW4gc3RhdGVPYmouYXR0cmlidXRlc1xuICApO1xufTtcbiIsIi8vIGludGVyZmFjZSBPbkNoYW5nZUNvbXBvbmVudCB7XG4vLyAgIHByb3BzOiB7XG4vLyAgICAgaW5kZXg6IG51bWJlcjtcbi8vICAgICBvbkNoYW5nZShpbmRleDogbnVtYmVyLCBkYXRhOiBvYmplY3QpO1xuLy8gICB9O1xuLy8gfVxuXG4vLyBleHBvcnQgZnVuY3Rpb24gb25DaGFuZ2VFdmVudCh0aGlzOiBPbkNoYW5nZUNvbXBvbmVudCwgcHJvcCwgZXYpIHtcbmV4cG9ydCBmdW5jdGlvbiBvbkNoYW5nZUV2ZW50KHRoaXM6IGFueSwgcHJvcCwgZXYpIHtcbiAgY29uc3Qgb3JpZ0RhdGEgPSB0aGlzLnByb3BzW3Byb3BdO1xuXG4gIGlmIChldi50YXJnZXQudmFsdWUgPT09IG9yaWdEYXRhW2V2LnRhcmdldC5uYW1lXSkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGNvbnN0IGRhdGEgPSB7IC4uLm9yaWdEYXRhIH07XG5cbiAgaWYgKGV2LnRhcmdldC52YWx1ZSkge1xuICAgIGRhdGFbZXYudGFyZ2V0Lm5hbWVdID0gZXYudGFyZ2V0LnZhbHVlO1xuICB9IGVsc2Uge1xuICAgIGRlbGV0ZSBkYXRhW2V2LnRhcmdldC5uYW1lXTtcbiAgfVxuXG4gIHRoaXMucHJvcHMub25DaGFuZ2UodGhpcy5wcm9wcy5pbmRleCwgZGF0YSk7XG59XG4iLCJpbXBvcnQgeyByZW5kZXIgfSBmcm9tIFwicHJlYWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVubW91bnQobW91bnRFbCkge1xuICByZW5kZXIoXG4gICAgLy8gQHRzLWlnbm9yZVxuICAgICgpID0+IG51bGwsXG4gICAgbW91bnRFbFxuICApO1xufVxuIiwiaW1wb3J0IHsgY3VzdG9tRWxlbWVudCB9IGZyb20gXCJsaXQtZWxlbWVudFwiO1xuaW1wb3J0IHtcbiAgRGV2aWNlQWN0aW9uLFxuICBmZXRjaERldmljZUFjdGlvbnMsXG4gIGxvY2FsaXplRGV2aWNlQXV0b21hdGlvbkFjdGlvbixcbn0gZnJvbSBcIi4uLy4uL2RhdGEvZGV2aWNlX2F1dG9tYXRpb25cIjtcbmltcG9ydCBcIi4uLy4uL2NvbXBvbmVudHMvaGEtcGFwZXItZHJvcGRvd24tbWVudVwiO1xuaW1wb3J0IHsgSGFEZXZpY2VBdXRvbWF0aW9uUGlja2VyIH0gZnJvbSBcIi4vaGEtZGV2aWNlLWF1dG9tYXRpb24tcGlja2VyXCI7XG5cbkBjdXN0b21FbGVtZW50KFwiaGEtZGV2aWNlLWFjdGlvbi1waWNrZXJcIilcbmNsYXNzIEhhRGV2aWNlQWN0aW9uUGlja2VyIGV4dGVuZHMgSGFEZXZpY2VBdXRvbWF0aW9uUGlja2VyPERldmljZUFjdGlvbj4ge1xuICBwcm90ZWN0ZWQgTk9fQVVUT01BVElPTl9URVhUID0gXCJObyBhY3Rpb25zXCI7XG4gIHByb3RlY3RlZCBVTktOT1dOX0FVVE9NQVRJT05fVEVYVCA9IFwiVW5rbm93biBhY3Rpb25cIjtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcihcbiAgICAgIGxvY2FsaXplRGV2aWNlQXV0b21hdGlvbkFjdGlvbixcbiAgICAgIGZldGNoRGV2aWNlQWN0aW9ucyxcbiAgICAgIChkZXZpY2VJZD86IHN0cmluZykgPT4gKHtcbiAgICAgICAgZGV2aWNlX2lkOiBkZXZpY2VJZCB8fCBcIlwiLFxuICAgICAgICBkb21haW46IFwiXCIsXG4gICAgICAgIGVudGl0eV9pZDogXCJcIixcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxufVxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBIVE1MRWxlbWVudFRhZ05hbWVNYXAge1xuICAgIFwiaGEtZGV2aWNlLWFjdGlvbi1waWNrZXJcIjogSGFEZXZpY2VBY3Rpb25QaWNrZXI7XG4gIH1cbn1cbiIsImltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWlucHV0L3BhcGVyLWlucHV0XCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1pdGVtL3BhcGVyLWl0ZW1cIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWl0ZW0vcGFwZXItaXRlbS1ib2R5XCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1saXN0Ym94L3BhcGVyLWxpc3Rib3hcIjtcbmltcG9ydCB7XG4gIExpdEVsZW1lbnQsXG4gIFRlbXBsYXRlUmVzdWx0LFxuICBodG1sLFxuICBjc3MsXG4gIENTU1Jlc3VsdCxcbiAgcHJvcGVydHksXG59IGZyb20gXCJsaXQtZWxlbWVudFwiO1xuaW1wb3J0IHsgSG9tZUFzc2lzdGFudCB9IGZyb20gXCIuLi8uLi90eXBlc1wiO1xuaW1wb3J0IHsgZmlyZUV2ZW50IH0gZnJvbSBcIi4uLy4uL2NvbW1vbi9kb20vZmlyZV9ldmVudFwiO1xuaW1wb3J0IHtcbiAgRGV2aWNlQXV0b21hdGlvbixcbiAgZGV2aWNlQXV0b21hdGlvbnNFcXVhbCxcbn0gZnJvbSBcIi4uLy4uL2RhdGEvZGV2aWNlX2F1dG9tYXRpb25cIjtcbmltcG9ydCBcIi4uLy4uL2NvbXBvbmVudHMvaGEtcGFwZXItZHJvcGRvd24tbWVudVwiO1xuXG5jb25zdCBOT19BVVRPTUFUSU9OX0tFWSA9IFwiTk9fQVVUT01BVElPTlwiO1xuY29uc3QgVU5LTk9XTl9BVVRPTUFUSU9OX0tFWSA9IFwiVU5LTk9XTl9BVVRPTUFUSU9OXCI7XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBIYURldmljZUF1dG9tYXRpb25QaWNrZXI8XG4gIFQgZXh0ZW5kcyBEZXZpY2VBdXRvbWF0aW9uXG4+IGV4dGVuZHMgTGl0RWxlbWVudCB7XG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyBoYXNzITogSG9tZUFzc2lzdGFudDtcbiAgQHByb3BlcnR5KCkgcHVibGljIGxhYmVsPzogc3RyaW5nO1xuICBAcHJvcGVydHkoKSBwdWJsaWMgZGV2aWNlSWQ/OiBzdHJpbmc7XG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyB2YWx1ZT86IFQ7XG4gIHByb3RlY3RlZCBOT19BVVRPTUFUSU9OX1RFWFQgPSBcIk5vIGF1dG9tYXRpb25zXCI7XG4gIHByb3RlY3RlZCBVTktOT1dOX0FVVE9NQVRJT05fVEVYVCA9IFwiVW5rbm93biBhdXRvbWF0aW9uXCI7XG4gIEBwcm9wZXJ0eSgpIHByaXZhdGUgX2F1dG9tYXRpb25zOiBUW10gPSBbXTtcblxuICAvLyBUcmlnZ2VyIGFuIGVtcHR5IHJlbmRlciBzbyB3ZSBzdGFydCB3aXRoIGEgY2xlYW4gRE9NLlxuICAvLyBwYXBlci1saXN0Ym94IGRvZXMgbm90IGxpa2UgY2hhbmdpbmcgdGhpbmdzIGFyb3VuZC5cbiAgQHByb3BlcnR5KCkgcHJpdmF0ZSBfcmVuZGVyRW1wdHkgPSBmYWxzZTtcblxuICBwcml2YXRlIF9sb2NhbGl6ZURldmljZUF1dG9tYXRpb246IChcbiAgICBoYXNzOiBIb21lQXNzaXN0YW50LFxuICAgIGF1dG9tYXRpb246IFRcbiAgKSA9PiBzdHJpbmc7XG4gIHByaXZhdGUgX2ZldGNoRGV2aWNlQXV0b21hdGlvbnM6IChcbiAgICBoYXNzOiBIb21lQXNzaXN0YW50LFxuICAgIGRldmljZUlkOiBzdHJpbmdcbiAgKSA9PiBQcm9taXNlPFRbXT47XG4gIHByaXZhdGUgX2NyZWF0ZU5vQXV0b21hdGlvbjogKGRldmljZUlkPzogc3RyaW5nKSA9PiBUO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIGxvY2FsaXplRGV2aWNlQXV0b21hdGlvbjogSGFEZXZpY2VBdXRvbWF0aW9uUGlja2VyPFxuICAgICAgVFxuICAgID5bXCJfbG9jYWxpemVEZXZpY2VBdXRvbWF0aW9uXCJdLFxuICAgIGZldGNoRGV2aWNlQXV0b21hdGlvbnM6IEhhRGV2aWNlQXV0b21hdGlvblBpY2tlcjxcbiAgICAgIFRcbiAgICA+W1wiX2ZldGNoRGV2aWNlQXV0b21hdGlvbnNcIl0sXG4gICAgY3JlYXRlTm9BdXRvbWF0aW9uOiBIYURldmljZUF1dG9tYXRpb25QaWNrZXI8VD5bXCJfY3JlYXRlTm9BdXRvbWF0aW9uXCJdXG4gICkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5fbG9jYWxpemVEZXZpY2VBdXRvbWF0aW9uID0gbG9jYWxpemVEZXZpY2VBdXRvbWF0aW9uO1xuICAgIHRoaXMuX2ZldGNoRGV2aWNlQXV0b21hdGlvbnMgPSBmZXRjaERldmljZUF1dG9tYXRpb25zO1xuICAgIHRoaXMuX2NyZWF0ZU5vQXV0b21hdGlvbiA9IGNyZWF0ZU5vQXV0b21hdGlvbjtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0IF9rZXkoKSB7XG4gICAgaWYgKFxuICAgICAgIXRoaXMudmFsdWUgfHxcbiAgICAgIGRldmljZUF1dG9tYXRpb25zRXF1YWwoXG4gICAgICAgIHRoaXMuX2NyZWF0ZU5vQXV0b21hdGlvbih0aGlzLmRldmljZUlkKSxcbiAgICAgICAgdGhpcy52YWx1ZVxuICAgICAgKVxuICAgICkge1xuICAgICAgcmV0dXJuIE5PX0FVVE9NQVRJT05fS0VZO1xuICAgIH1cblxuICAgIGNvbnN0IGlkeCA9IHRoaXMuX2F1dG9tYXRpb25zLmZpbmRJbmRleCgoYXV0b21hdGlvbikgPT5cbiAgICAgIGRldmljZUF1dG9tYXRpb25zRXF1YWwoYXV0b21hdGlvbiwgdGhpcy52YWx1ZSEpXG4gICAgKTtcblxuICAgIGlmIChpZHggPT09IC0xKSB7XG4gICAgICByZXR1cm4gVU5LTk9XTl9BVVRPTUFUSU9OX0tFWTtcbiAgICB9XG5cbiAgICByZXR1cm4gYCR7dGhpcy5fYXV0b21hdGlvbnNbaWR4XS5kZXZpY2VfaWR9XyR7aWR4fWA7XG4gIH1cblxuICBwcm90ZWN0ZWQgcmVuZGVyKCk6IFRlbXBsYXRlUmVzdWx0IHwgdm9pZCB7XG4gICAgaWYgKHRoaXMuX3JlbmRlckVtcHR5KSB7XG4gICAgICByZXR1cm4gaHRtbGBgO1xuICAgIH1cbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxoYS1wYXBlci1kcm9wZG93bi1tZW51XG4gICAgICAgIC5sYWJlbD0ke3RoaXMubGFiZWx9XG4gICAgICAgIC52YWx1ZT0ke3RoaXMudmFsdWVcbiAgICAgICAgICA/IHRoaXMuX2xvY2FsaXplRGV2aWNlQXV0b21hdGlvbih0aGlzLmhhc3MsIHRoaXMudmFsdWUpXG4gICAgICAgICAgOiBcIlwifVxuICAgICAgICA/ZGlzYWJsZWQ9JHt0aGlzLl9hdXRvbWF0aW9ucy5sZW5ndGggPT09IDB9XG4gICAgICA+XG4gICAgICAgIDxwYXBlci1saXN0Ym94XG4gICAgICAgICAgc2xvdD1cImRyb3Bkb3duLWNvbnRlbnRcIlxuICAgICAgICAgIC5zZWxlY3RlZD0ke3RoaXMuX2tleX1cbiAgICAgICAgICBhdHRyLWZvci1zZWxlY3RlZD1cImtleVwiXG4gICAgICAgICAgQGlyb24tc2VsZWN0PSR7dGhpcy5fYXV0b21hdGlvbkNoYW5nZWR9XG4gICAgICAgID5cbiAgICAgICAgICA8cGFwZXItaXRlbVxuICAgICAgICAgICAga2V5PSR7Tk9fQVVUT01BVElPTl9LRVl9XG4gICAgICAgICAgICAuYXV0b21hdGlvbj0ke3RoaXMuX2NyZWF0ZU5vQXV0b21hdGlvbih0aGlzLmRldmljZUlkKX1cbiAgICAgICAgICAgIGhpZGRlblxuICAgICAgICAgID5cbiAgICAgICAgICAgICR7dGhpcy5OT19BVVRPTUFUSU9OX1RFWFR9XG4gICAgICAgICAgPC9wYXBlci1pdGVtPlxuICAgICAgICAgIDxwYXBlci1pdGVtXG4gICAgICAgICAgICBrZXk9JHtVTktOT1dOX0FVVE9NQVRJT05fS0VZfVxuICAgICAgICAgICAgLmF1dG9tYXRpb249JHt0aGlzLnZhbHVlfVxuICAgICAgICAgICAgaGlkZGVuXG4gICAgICAgICAgPlxuICAgICAgICAgICAgJHt0aGlzLlVOS05PV05fQVVUT01BVElPTl9URVhUfVxuICAgICAgICAgIDwvcGFwZXItaXRlbT5cbiAgICAgICAgICAke3RoaXMuX2F1dG9tYXRpb25zLm1hcChcbiAgICAgICAgICAgIChhdXRvbWF0aW9uLCBpZHgpID0+IGh0bWxgXG4gICAgICAgICAgICAgIDxwYXBlci1pdGVtXG4gICAgICAgICAgICAgICAga2V5PSR7YCR7dGhpcy5kZXZpY2VJZH1fJHtpZHh9YH1cbiAgICAgICAgICAgICAgICAuYXV0b21hdGlvbj0ke2F1dG9tYXRpb259XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAke3RoaXMuX2xvY2FsaXplRGV2aWNlQXV0b21hdGlvbih0aGlzLmhhc3MsIGF1dG9tYXRpb24pfVxuICAgICAgICAgICAgICA8L3BhcGVyLWl0ZW0+XG4gICAgICAgICAgICBgXG4gICAgICAgICAgKX1cbiAgICAgICAgPC9wYXBlci1saXN0Ym94PlxuICAgICAgPC9oYS1wYXBlci1kcm9wZG93bi1tZW51PlxuICAgIGA7XG4gIH1cblxuICBwcm90ZWN0ZWQgdXBkYXRlZChjaGFuZ2VkUHJvcHMpIHtcbiAgICBzdXBlci51cGRhdGVkKGNoYW5nZWRQcm9wcyk7XG5cbiAgICBpZiAoY2hhbmdlZFByb3BzLmhhcyhcImRldmljZUlkXCIpKSB7XG4gICAgICB0aGlzLl91cGRhdGVEZXZpY2VJbmZvKCk7XG4gICAgfVxuXG4gICAgLy8gVGhlIHZhbHVlIGhhcyBjaGFuZ2VkLCBmb3JjZSB0aGUgbGlzdGJveCB0byB1cGRhdGVcbiAgICBpZiAoY2hhbmdlZFByb3BzLmhhcyhcInZhbHVlXCIpIHx8IGNoYW5nZWRQcm9wcy5oYXMoXCJfcmVuZGVyRW1wdHlcIikpIHtcbiAgICAgIGNvbnN0IGxpc3Rib3ggPSB0aGlzLnNoYWRvd1Jvb3QhLnF1ZXJ5U2VsZWN0b3IoXCJwYXBlci1saXN0Ym94XCIpITtcbiAgICAgIGlmIChsaXN0Ym94KSB7XG4gICAgICAgIGxpc3Rib3guX3NlbGVjdFNlbGVjdGVkKHRoaXMuX2tleSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBfdXBkYXRlRGV2aWNlSW5mbygpIHtcbiAgICB0aGlzLl9hdXRvbWF0aW9ucyA9IHRoaXMuZGV2aWNlSWRcbiAgICAgID8gYXdhaXQgdGhpcy5fZmV0Y2hEZXZpY2VBdXRvbWF0aW9ucyh0aGlzLmhhc3MsIHRoaXMuZGV2aWNlSWQpXG4gICAgICA6IC8vIE5vIGRldmljZSwgY2xlYXIgdGhlIGxpc3Qgb2YgYXV0b21hdGlvbnNcbiAgICAgICAgW107XG5cbiAgICAvLyBJZiB0aGVyZSBpcyBubyB2YWx1ZSwgb3IgaWYgd2UgaGF2ZSBjaGFuZ2VkIHRoZSBkZXZpY2UgSUQsIHJlc2V0IHRoZSB2YWx1ZS5cbiAgICBpZiAoIXRoaXMudmFsdWUgfHwgdGhpcy52YWx1ZS5kZXZpY2VfaWQgIT09IHRoaXMuZGV2aWNlSWQpIHtcbiAgICAgIHRoaXMuX3NldFZhbHVlKFxuICAgICAgICB0aGlzLl9hdXRvbWF0aW9ucy5sZW5ndGhcbiAgICAgICAgICA/IHRoaXMuX2F1dG9tYXRpb25zWzBdXG4gICAgICAgICAgOiB0aGlzLl9jcmVhdGVOb0F1dG9tYXRpb24odGhpcy5kZXZpY2VJZClcbiAgICAgICk7XG4gICAgfVxuICAgIHRoaXMuX3JlbmRlckVtcHR5ID0gdHJ1ZTtcbiAgICBhd2FpdCB0aGlzLnVwZGF0ZUNvbXBsZXRlO1xuICAgIHRoaXMuX3JlbmRlckVtcHR5ID0gZmFsc2U7XG4gIH1cblxuICBwcml2YXRlIF9hdXRvbWF0aW9uQ2hhbmdlZChldikge1xuICAgIHRoaXMuX3NldFZhbHVlKGV2LmRldGFpbC5pdGVtLmF1dG9tYXRpb24pO1xuICB9XG5cbiAgcHJpdmF0ZSBfc2V0VmFsdWUoYXV0b21hdGlvbjogVCkge1xuICAgIGlmICh0aGlzLnZhbHVlICYmIGRldmljZUF1dG9tYXRpb25zRXF1YWwoYXV0b21hdGlvbiwgdGhpcy52YWx1ZSkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy52YWx1ZSA9IGF1dG9tYXRpb247XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBmaXJlRXZlbnQodGhpcywgXCJjaGFuZ2VcIik7XG4gICAgfSwgMCk7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHN0eWxlcygpOiBDU1NSZXN1bHQge1xuICAgIHJldHVybiBjc3NgXG4gICAgICBoYS1wYXBlci1kcm9wZG93bi1tZW51IHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICB9XG4gICAgICBwYXBlci1saXN0Ym94IHtcbiAgICAgICAgbWluLXdpZHRoOiAyMDBweDtcbiAgICAgIH1cbiAgICAgIHBhcGVyLWl0ZW0ge1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICB9XG4gICAgYDtcbiAgfVxufVxuIiwiaW1wb3J0IHsgY3VzdG9tRWxlbWVudCB9IGZyb20gXCJsaXQtZWxlbWVudFwiO1xuaW1wb3J0IHtcbiAgRGV2aWNlQ29uZGl0aW9uLFxuICBmZXRjaERldmljZUNvbmRpdGlvbnMsXG4gIGxvY2FsaXplRGV2aWNlQXV0b21hdGlvbkNvbmRpdGlvbixcbn0gZnJvbSBcIi4uLy4uL2RhdGEvZGV2aWNlX2F1dG9tYXRpb25cIjtcbmltcG9ydCBcIi4uLy4uL2NvbXBvbmVudHMvaGEtcGFwZXItZHJvcGRvd24tbWVudVwiO1xuaW1wb3J0IHsgSGFEZXZpY2VBdXRvbWF0aW9uUGlja2VyIH0gZnJvbSBcIi4vaGEtZGV2aWNlLWF1dG9tYXRpb24tcGlja2VyXCI7XG5cbkBjdXN0b21FbGVtZW50KFwiaGEtZGV2aWNlLWNvbmRpdGlvbi1waWNrZXJcIilcbmNsYXNzIEhhRGV2aWNlQ29uZGl0aW9uUGlja2VyIGV4dGVuZHMgSGFEZXZpY2VBdXRvbWF0aW9uUGlja2VyPFxuICBEZXZpY2VDb25kaXRpb25cbj4ge1xuICBwcm90ZWN0ZWQgTk9fQVVUT01BVElPTl9URVhUID0gXCJObyBjb25kaXRpb25zXCI7XG4gIHByb3RlY3RlZCBVTktOT1dOX0FVVE9NQVRJT05fVEVYVCA9IFwiVW5rbm93biBjb25kaXRpb25cIjtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcihcbiAgICAgIGxvY2FsaXplRGV2aWNlQXV0b21hdGlvbkNvbmRpdGlvbixcbiAgICAgIGZldGNoRGV2aWNlQ29uZGl0aW9ucyxcbiAgICAgIChkZXZpY2VJZD86IHN0cmluZykgPT4gKHtcbiAgICAgICAgZGV2aWNlX2lkOiBkZXZpY2VJZCB8fCBcIlwiLFxuICAgICAgICBjb25kaXRpb246IFwiZGV2aWNlXCIsXG4gICAgICAgIGRvbWFpbjogXCJcIixcbiAgICAgICAgZW50aXR5X2lkOiBcIlwiLFxuICAgICAgfSlcbiAgICApO1xuICB9XG59XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIEhUTUxFbGVtZW50VGFnTmFtZU1hcCB7XG4gICAgXCJoYS1kZXZpY2UtY29uZGl0aW9uLXBpY2tlclwiOiBIYURldmljZUNvbmRpdGlvblBpY2tlcjtcbiAgfVxufVxuIiwiaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItaW5wdXQvcGFwZXItaW5wdXRcIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWl0ZW0vcGFwZXItaXRlbVwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItaXRlbS9wYXBlci1pdGVtLWJvZHlcIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWRyb3Bkb3duLW1lbnUvcGFwZXItZHJvcGRvd24tbWVudS1saWdodFwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItbGlzdGJveC9wYXBlci1saXN0Ym94XCI7XG5pbXBvcnQgbWVtb2l6ZU9uZSBmcm9tIFwibWVtb2l6ZS1vbmVcIjtcbmltcG9ydCB7XG4gIExpdEVsZW1lbnQsXG4gIFRlbXBsYXRlUmVzdWx0LFxuICBodG1sLFxuICBjc3MsXG4gIENTU1Jlc3VsdCxcbiAgY3VzdG9tRWxlbWVudCxcbiAgcHJvcGVydHksXG59IGZyb20gXCJsaXQtZWxlbWVudFwiO1xuaW1wb3J0IHsgVW5zdWJzY3JpYmVGdW5jIH0gZnJvbSBcImhvbWUtYXNzaXN0YW50LWpzLXdlYnNvY2tldFwiO1xuaW1wb3J0IHsgU3Vic2NyaWJlTWl4aW4gfSBmcm9tIFwiLi4vLi4vbWl4aW5zL3N1YnNjcmliZS1taXhpblwiO1xuXG5pbXBvcnQgeyBIb21lQXNzaXN0YW50IH0gZnJvbSBcIi4uLy4uL3R5cGVzXCI7XG5pbXBvcnQgeyBmaXJlRXZlbnQgfSBmcm9tIFwiLi4vLi4vY29tbW9uL2RvbS9maXJlX2V2ZW50XCI7XG5pbXBvcnQge1xuICBEZXZpY2VSZWdpc3RyeUVudHJ5LFxuICBzdWJzY3JpYmVEZXZpY2VSZWdpc3RyeSxcbn0gZnJvbSBcIi4uLy4uL2RhdGEvZGV2aWNlX3JlZ2lzdHJ5XCI7XG5pbXBvcnQgeyBjb21wYXJlIH0gZnJvbSBcIi4uLy4uL2NvbW1vbi9zdHJpbmcvY29tcGFyZVwiO1xuXG5AY3VzdG9tRWxlbWVudChcImhhLWRldmljZS1waWNrZXJcIilcbmNsYXNzIEhhRGV2aWNlUGlja2VyIGV4dGVuZHMgU3Vic2NyaWJlTWl4aW4oTGl0RWxlbWVudCkge1xuICBAcHJvcGVydHkoKSBwdWJsaWMgaGFzcz86IEhvbWVBc3Npc3RhbnQ7XG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyBsYWJlbD86IHN0cmluZztcbiAgQHByb3BlcnR5KCkgcHVibGljIHZhbHVlPzogc3RyaW5nO1xuICBAcHJvcGVydHkoKSBwdWJsaWMgZGV2aWNlcz86IERldmljZVJlZ2lzdHJ5RW50cnlbXTtcblxuICBwcml2YXRlIF9zb3J0ZWREZXZpY2VzID0gbWVtb2l6ZU9uZSgoZGV2aWNlcz86IERldmljZVJlZ2lzdHJ5RW50cnlbXSkgPT4ge1xuICAgIGlmICghZGV2aWNlcyB8fCBkZXZpY2VzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgcmV0dXJuIGRldmljZXMgfHwgW107XG4gICAgfVxuICAgIGNvbnN0IHNvcnRlZCA9IFsuLi5kZXZpY2VzXTtcbiAgICBzb3J0ZWQuc29ydCgoYSwgYikgPT4gY29tcGFyZShhLm5hbWUgfHwgXCJcIiwgYi5uYW1lIHx8IFwiXCIpKTtcbiAgICByZXR1cm4gc29ydGVkO1xuICB9KTtcblxuICBwdWJsaWMgaGFzc1N1YnNjcmliZSgpOiBVbnN1YnNjcmliZUZ1bmNbXSB7XG4gICAgcmV0dXJuIFtcbiAgICAgIHN1YnNjcmliZURldmljZVJlZ2lzdHJ5KHRoaXMuaGFzcyEuY29ubmVjdGlvbiEsIChkZXZpY2VzKSA9PiB7XG4gICAgICAgIHRoaXMuZGV2aWNlcyA9IGRldmljZXM7XG4gICAgICB9KSxcbiAgICBdO1xuICB9XG5cbiAgcHJvdGVjdGVkIHJlbmRlcigpOiBUZW1wbGF0ZVJlc3VsdCB8IHZvaWQge1xuICAgIHJldHVybiBodG1sYFxuICAgICAgPHBhcGVyLWRyb3Bkb3duLW1lbnUtbGlnaHQgLmxhYmVsPSR7dGhpcy5sYWJlbH0+XG4gICAgICAgIDxwYXBlci1saXN0Ym94XG4gICAgICAgICAgc2xvdD1cImRyb3Bkb3duLWNvbnRlbnRcIlxuICAgICAgICAgIC5zZWxlY3RlZD0ke3RoaXMuX3ZhbHVlfVxuICAgICAgICAgIGF0dHItZm9yLXNlbGVjdGVkPVwiZGF0YS1kZXZpY2UtaWRcIlxuICAgICAgICAgIEBpcm9uLXNlbGVjdD0ke3RoaXMuX2RldmljZUNoYW5nZWR9XG4gICAgICAgID5cbiAgICAgICAgICA8cGFwZXItaXRlbSBkYXRhLWRldmljZS1pZD1cIlwiPlxuICAgICAgICAgICAgTm8gZGV2aWNlXG4gICAgICAgICAgPC9wYXBlci1pdGVtPlxuICAgICAgICAgICR7dGhpcy5fc29ydGVkRGV2aWNlcyh0aGlzLmRldmljZXMpLm1hcChcbiAgICAgICAgICAgIChkZXZpY2UpID0+IGh0bWxgXG4gICAgICAgICAgICAgIDxwYXBlci1pdGVtIGRhdGEtZGV2aWNlLWlkPSR7ZGV2aWNlLmlkfT5cbiAgICAgICAgICAgICAgICAke2RldmljZS5uYW1lX2J5X3VzZXIgfHwgZGV2aWNlLm5hbWV9XG4gICAgICAgICAgICAgIDwvcGFwZXItaXRlbT5cbiAgICAgICAgICAgIGBcbiAgICAgICAgICApfVxuICAgICAgICA8L3BhcGVyLWxpc3Rib3g+XG4gICAgICA8L3BhcGVyLWRyb3Bkb3duLW1lbnUtbGlnaHQ+XG4gICAgYDtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0IF92YWx1ZSgpIHtcbiAgICByZXR1cm4gdGhpcy52YWx1ZSB8fCBcIlwiO1xuICB9XG5cbiAgcHJpdmF0ZSBfZGV2aWNlQ2hhbmdlZChldikge1xuICAgIGNvbnN0IG5ld1ZhbHVlID0gZXYuZGV0YWlsLml0ZW0uZGF0YXNldC5kZXZpY2VJZDtcblxuICAgIGlmIChuZXdWYWx1ZSAhPT0gdGhpcy5fdmFsdWUpIHtcbiAgICAgIHRoaXMudmFsdWUgPSBuZXdWYWx1ZTtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBmaXJlRXZlbnQodGhpcywgXCJ2YWx1ZS1jaGFuZ2VkXCIsIHsgdmFsdWU6IG5ld1ZhbHVlIH0pO1xuICAgICAgICBmaXJlRXZlbnQodGhpcywgXCJjaGFuZ2VcIik7XG4gICAgICB9LCAwKTtcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgZ2V0IHN0eWxlcygpOiBDU1NSZXN1bHQge1xuICAgIHJldHVybiBjc3NgXG4gICAgICBwYXBlci1kcm9wZG93bi1tZW51LWxpZ2h0IHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICB9XG4gICAgICBwYXBlci1saXN0Ym94IHtcbiAgICAgICAgbWluLXdpZHRoOiAyMDBweDtcbiAgICAgIH1cbiAgICAgIHBhcGVyLWl0ZW0ge1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICB9XG4gICAgYDtcbiAgfVxufVxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBIVE1MRWxlbWVudFRhZ05hbWVNYXAge1xuICAgIFwiaGEtZGV2aWNlLXBpY2tlclwiOiBIYURldmljZVBpY2tlcjtcbiAgfVxufVxuIiwiaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItaWNvbi1idXR0b24vcGFwZXItaWNvbi1idXR0b25cIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWlucHV0L3BhcGVyLWlucHV0XCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1pdGVtL3BhcGVyLWljb24taXRlbVwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItaXRlbS9wYXBlci1pdGVtLWJvZHlcIjtcbmltcG9ydCBcIkB2YWFkaW4vdmFhZGluLWNvbWJvLWJveC92YWFkaW4tY29tYm8tYm94LWxpZ2h0XCI7XG5pbXBvcnQgbWVtb2l6ZU9uZSBmcm9tIFwibWVtb2l6ZS1vbmVcIjtcblxuaW1wb3J0IFwiLi9zdGF0ZS1iYWRnZVwiO1xuXG5pbXBvcnQgeyBjb21wdXRlU3RhdGVOYW1lIH0gZnJvbSBcIi4uLy4uL2NvbW1vbi9lbnRpdHkvY29tcHV0ZV9zdGF0ZV9uYW1lXCI7XG5pbXBvcnQge1xuICBMaXRFbGVtZW50LFxuICBUZW1wbGF0ZVJlc3VsdCxcbiAgaHRtbCxcbiAgY3NzLFxuICBDU1NSZXN1bHQsXG4gIHByb3BlcnR5LFxuICBQcm9wZXJ0eVZhbHVlcyxcbn0gZnJvbSBcImxpdC1lbGVtZW50XCI7XG5pbXBvcnQgeyBIb21lQXNzaXN0YW50IH0gZnJvbSBcIi4uLy4uL3R5cGVzXCI7XG5pbXBvcnQgeyBIYXNzRW50aXR5IH0gZnJvbSBcImhvbWUtYXNzaXN0YW50LWpzLXdlYnNvY2tldFwiO1xuaW1wb3J0IHsgUG9seW1lckNoYW5nZWRFdmVudCB9IGZyb20gXCIuLi8uLi9wb2x5bWVyLXR5cGVzXCI7XG5pbXBvcnQgeyBmaXJlRXZlbnQgfSBmcm9tIFwiLi4vLi4vY29tbW9uL2RvbS9maXJlX2V2ZW50XCI7XG5cbmV4cG9ydCB0eXBlIEhhRW50aXR5UGlja2VyRW50aXR5RmlsdGVyRnVuYyA9IChlbnRpdHlJZDogSGFzc0VudGl0eSkgPT4gYm9vbGVhbjtcblxuY29uc3Qgcm93UmVuZGVyZXIgPSAoXG4gIHJvb3Q6IEhUTUxFbGVtZW50LFxuICBfb3duZXIsXG4gIG1vZGVsOiB7IGl0ZW06IEhhc3NFbnRpdHkgfVxuKSA9PiB7XG4gIGlmICghcm9vdC5maXJzdEVsZW1lbnRDaGlsZCkge1xuICAgIHJvb3QuaW5uZXJIVE1MID0gYFxuICAgICAgPHN0eWxlPlxuICAgICAgICBwYXBlci1pY29uLWl0ZW0ge1xuICAgICAgICAgIG1hcmdpbjogLTEwcHg7XG4gICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgfVxuICAgICAgPC9zdHlsZT5cbiAgICAgIDxwYXBlci1pY29uLWl0ZW0+XG4gICAgICAgIDxzdGF0ZS1iYWRnZSBzdGF0ZS1vYmo9XCJbW2l0ZW1dXVwiIHNsb3Q9XCJpdGVtLWljb25cIj48L3N0YXRlLWJhZGdlPlxuICAgICAgICA8cGFwZXItaXRlbS1ib2R5IHR3by1saW5lPVwiXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz0nbmFtZSc+W1tfY29tcHV0ZVN0YXRlTmFtZShpdGVtKV1dPC9kaXY+XG4gICAgICAgICAgPGRpdiBzZWNvbmRhcnk+W1tpdGVtLmVudGl0eV9pZF1dPC9kaXY+XG4gICAgICAgIDwvcGFwZXItaXRlbS1ib2R5PlxuICAgICAgPC9wYXBlci1pY29uLWl0ZW0+XG4gICAgYDtcbiAgfVxuXG4gIHJvb3QucXVlcnlTZWxlY3RvcihcInN0YXRlLWJhZGdlXCIpIS5zdGF0ZU9iaiA9IG1vZGVsLml0ZW07XG4gIHJvb3QucXVlcnlTZWxlY3RvcihcIi5uYW1lXCIpIS50ZXh0Q29udGVudCA9IGNvbXB1dGVTdGF0ZU5hbWUobW9kZWwuaXRlbSk7XG4gIHJvb3QucXVlcnlTZWxlY3RvcihcIltzZWNvbmRhcnldXCIpIS50ZXh0Q29udGVudCA9IG1vZGVsLml0ZW0uZW50aXR5X2lkO1xufTtcblxuY2xhc3MgSGFFbnRpdHlQaWNrZXIgZXh0ZW5kcyBMaXRFbGVtZW50IHtcbiAgQHByb3BlcnR5KHsgdHlwZTogQm9vbGVhbiB9KSBwdWJsaWMgYXV0b2ZvY3VzPzogYm9vbGVhbjtcbiAgQHByb3BlcnR5KHsgdHlwZTogQm9vbGVhbiB9KSBwdWJsaWMgZGlzYWJsZWQ/OiBib29sZWFuO1xuICBAcHJvcGVydHkoeyB0eXBlOiBCb29sZWFuLCBhdHRyaWJ1dGU6IFwiYWxsb3ctY3VzdG9tLWVudGl0eVwiIH0pXG4gIHB1YmxpYyBhbGxvd0N1c3RvbUVudGl0eTtcbiAgQHByb3BlcnR5KCkgcHVibGljIGhhc3M/OiBIb21lQXNzaXN0YW50O1xuICBAcHJvcGVydHkoKSBwdWJsaWMgbGFiZWw/OiBzdHJpbmc7XG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyB2YWx1ZT86IHN0cmluZztcbiAgQHByb3BlcnR5KHsgYXR0cmlidXRlOiBcImRvbWFpbi1maWx0ZXJcIiB9KSBwdWJsaWMgZG9tYWluRmlsdGVyPzogc3RyaW5nO1xuICBAcHJvcGVydHkoKSBwdWJsaWMgZW50aXR5RmlsdGVyPzogSGFFbnRpdHlQaWNrZXJFbnRpdHlGaWx0ZXJGdW5jO1xuICBAcHJvcGVydHkoeyB0eXBlOiBCb29sZWFuIH0pIHByaXZhdGUgX29wZW5lZD86IGJvb2xlYW47XG4gIEBwcm9wZXJ0eSgpIHByaXZhdGUgX2hhc3M/OiBIb21lQXNzaXN0YW50O1xuXG4gIHByaXZhdGUgX2dldFN0YXRlcyA9IG1lbW9pemVPbmUoXG4gICAgKFxuICAgICAgaGFzczogdGhpc1tcImhhc3NcIl0sXG4gICAgICBkb21haW5GaWx0ZXI6IHRoaXNbXCJkb21haW5GaWx0ZXJcIl0sXG4gICAgICBlbnRpdHlGaWx0ZXI6IHRoaXNbXCJlbnRpdHlGaWx0ZXJcIl1cbiAgICApID0+IHtcbiAgICAgIGxldCBzdGF0ZXM6IEhhc3NFbnRpdHlbXSA9IFtdO1xuXG4gICAgICBpZiAoIWhhc3MpIHtcbiAgICAgICAgcmV0dXJuIFtdO1xuICAgICAgfVxuICAgICAgbGV0IGVudGl0eUlkcyA9IE9iamVjdC5rZXlzKGhhc3Muc3RhdGVzKTtcblxuICAgICAgaWYgKGRvbWFpbkZpbHRlcikge1xuICAgICAgICBlbnRpdHlJZHMgPSBlbnRpdHlJZHMuZmlsdGVyKFxuICAgICAgICAgIChlaWQpID0+IGVpZC5zdWJzdHIoMCwgZWlkLmluZGV4T2YoXCIuXCIpKSA9PT0gZG9tYWluRmlsdGVyXG4gICAgICAgICk7XG4gICAgICB9XG5cbiAgICAgIHN0YXRlcyA9IGVudGl0eUlkcy5zb3J0KCkubWFwKChrZXkpID0+IGhhc3MhLnN0YXRlc1trZXldKTtcblxuICAgICAgaWYgKGVudGl0eUZpbHRlcikge1xuICAgICAgICBzdGF0ZXMgPSBzdGF0ZXMuZmlsdGVyKFxuICAgICAgICAgIChzdGF0ZU9iaikgPT5cbiAgICAgICAgICAgIC8vIFdlIGFsd2F5cyB3YW50IHRvIGluY2x1ZGUgdGhlIGVudGl0eSBvZiB0aGUgY3VycmVudCB2YWx1ZVxuICAgICAgICAgICAgc3RhdGVPYmouZW50aXR5X2lkID09PSB0aGlzLnZhbHVlIHx8IGVudGl0eUZpbHRlciEoc3RhdGVPYmopXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgICByZXR1cm4gc3RhdGVzO1xuICAgIH1cbiAgKTtcblxuICBwcm90ZWN0ZWQgdXBkYXRlZChjaGFuZ2VkUHJvcHM6IFByb3BlcnR5VmFsdWVzKSB7XG4gICAgc3VwZXIudXBkYXRlZChjaGFuZ2VkUHJvcHMpO1xuXG4gICAgaWYgKGNoYW5nZWRQcm9wcy5oYXMoXCJoYXNzXCIpICYmICF0aGlzLl9vcGVuZWQpIHtcbiAgICAgIHRoaXMuX2hhc3MgPSB0aGlzLmhhc3M7XG4gICAgfVxuICB9XG5cbiAgcHJvdGVjdGVkIHJlbmRlcigpOiBUZW1wbGF0ZVJlc3VsdCB8IHZvaWQge1xuICAgIGNvbnN0IHN0YXRlcyA9IHRoaXMuX2dldFN0YXRlcyhcbiAgICAgIHRoaXMuX2hhc3MsXG4gICAgICB0aGlzLmRvbWFpbkZpbHRlcixcbiAgICAgIHRoaXMuZW50aXR5RmlsdGVyXG4gICAgKTtcblxuICAgIHJldHVybiBodG1sYFxuICAgICAgPHZhYWRpbi1jb21iby1ib3gtbGlnaHRcbiAgICAgICAgaXRlbS12YWx1ZS1wYXRoPVwiZW50aXR5X2lkXCJcbiAgICAgICAgaXRlbS1sYWJlbC1wYXRoPVwiZW50aXR5X2lkXCJcbiAgICAgICAgLml0ZW1zPSR7c3RhdGVzfVxuICAgICAgICAudmFsdWU9JHt0aGlzLl92YWx1ZX1cbiAgICAgICAgLmFsbG93Q3VzdG9tVmFsdWU9JHt0aGlzLmFsbG93Q3VzdG9tRW50aXR5fVxuICAgICAgICAucmVuZGVyZXI9JHtyb3dSZW5kZXJlcn1cbiAgICAgICAgQG9wZW5lZC1jaGFuZ2VkPSR7dGhpcy5fb3BlbmVkQ2hhbmdlZH1cbiAgICAgICAgQHZhbHVlLWNoYW5nZWQ9JHt0aGlzLl92YWx1ZUNoYW5nZWR9XG4gICAgICA+XG4gICAgICAgIDxwYXBlci1pbnB1dFxuICAgICAgICAgIC5hdXRvZm9jdXM9JHt0aGlzLmF1dG9mb2N1c31cbiAgICAgICAgICAubGFiZWw9JHt0aGlzLmxhYmVsID09PSB1bmRlZmluZWQgJiYgdGhpcy5faGFzc1xuICAgICAgICAgICAgPyB0aGlzLl9oYXNzLmxvY2FsaXplKFwidWkuY29tcG9uZW50cy5lbnRpdHkuZW50aXR5LXBpY2tlci5lbnRpdHlcIilcbiAgICAgICAgICAgIDogdGhpcy5sYWJlbH1cbiAgICAgICAgICAudmFsdWU9JHt0aGlzLl92YWx1ZX1cbiAgICAgICAgICAuZGlzYWJsZWQ9JHt0aGlzLmRpc2FibGVkfVxuICAgICAgICAgIGNsYXNzPVwiaW5wdXRcIlxuICAgICAgICAgIGF1dG9jYXBpdGFsaXplPVwibm9uZVwiXG4gICAgICAgICAgYXV0b2NvbXBsZXRlPVwib2ZmXCJcbiAgICAgICAgICBhdXRvY29ycmVjdD1cIm9mZlwiXG4gICAgICAgICAgc3BlbGxjaGVjaz1cImZhbHNlXCJcbiAgICAgICAgPlxuICAgICAgICAgICR7dGhpcy52YWx1ZVxuICAgICAgICAgICAgPyBodG1sYFxuICAgICAgICAgICAgICAgIDxwYXBlci1pY29uLWJ1dHRvblxuICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIkNsZWFyXCJcbiAgICAgICAgICAgICAgICAgIHNsb3Q9XCJzdWZmaXhcIlxuICAgICAgICAgICAgICAgICAgY2xhc3M9XCJjbGVhci1idXR0b25cIlxuICAgICAgICAgICAgICAgICAgaWNvbj1cImhhc3M6Y2xvc2VcIlxuICAgICAgICAgICAgICAgICAgbm8tcmlwcGxlXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgQ2xlYXJcbiAgICAgICAgICAgICAgICA8L3BhcGVyLWljb24tYnV0dG9uPlxuICAgICAgICAgICAgICBgXG4gICAgICAgICAgICA6IFwiXCJ9XG4gICAgICAgICAgJHtzdGF0ZXMubGVuZ3RoID4gMFxuICAgICAgICAgICAgPyBodG1sYFxuICAgICAgICAgICAgICAgIDxwYXBlci1pY29uLWJ1dHRvblxuICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIlNob3cgZW50aXRpZXNcIlxuICAgICAgICAgICAgICAgICAgc2xvdD1cInN1ZmZpeFwiXG4gICAgICAgICAgICAgICAgICBjbGFzcz1cInRvZ2dsZS1idXR0b25cIlxuICAgICAgICAgICAgICAgICAgLmljb249JHt0aGlzLl9vcGVuZWQgPyBcImhhc3M6bWVudS11cFwiIDogXCJoYXNzOm1lbnUtZG93blwifVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIFRvZ2dsZVxuICAgICAgICAgICAgICAgIDwvcGFwZXItaWNvbi1idXR0b24+XG4gICAgICAgICAgICAgIGBcbiAgICAgICAgICAgIDogXCJcIn1cbiAgICAgICAgPC9wYXBlci1pbnB1dD5cbiAgICAgIDwvdmFhZGluLWNvbWJvLWJveC1saWdodD5cbiAgICBgO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXQgX3ZhbHVlKCkge1xuICAgIHJldHVybiB0aGlzLnZhbHVlIHx8IFwiXCI7XG4gIH1cblxuICBwcml2YXRlIF9vcGVuZWRDaGFuZ2VkKGV2OiBQb2x5bWVyQ2hhbmdlZEV2ZW50PGJvb2xlYW4+KSB7XG4gICAgdGhpcy5fb3BlbmVkID0gZXYuZGV0YWlsLnZhbHVlO1xuICB9XG5cbiAgcHJpdmF0ZSBfdmFsdWVDaGFuZ2VkKGV2OiBQb2x5bWVyQ2hhbmdlZEV2ZW50PHN0cmluZz4pIHtcbiAgICBjb25zdCBuZXdWYWx1ZSA9IGV2LmRldGFpbC52YWx1ZTtcbiAgICBpZiAobmV3VmFsdWUgIT09IHRoaXMuX3ZhbHVlKSB7XG4gICAgICB0aGlzLnZhbHVlID0gZXYuZGV0YWlsLnZhbHVlO1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGZpcmVFdmVudCh0aGlzLCBcInZhbHVlLWNoYW5nZWRcIiwgeyB2YWx1ZTogdGhpcy52YWx1ZSB9KTtcbiAgICAgICAgZmlyZUV2ZW50KHRoaXMsIFwiY2hhbmdlXCIpO1xuICAgICAgfSwgMCk7XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIGdldCBzdHlsZXMoKTogQ1NTUmVzdWx0IHtcbiAgICByZXR1cm4gY3NzYFxuICAgICAgcGFwZXItaW5wdXQgPiBwYXBlci1pY29uLWJ1dHRvbiB7XG4gICAgICAgIHdpZHRoOiAyNHB4O1xuICAgICAgICBoZWlnaHQ6IDI0cHg7XG4gICAgICAgIHBhZGRpbmc6IDJweDtcbiAgICAgICAgY29sb3I6IHZhcigtLXNlY29uZGFyeS10ZXh0LWNvbG9yKTtcbiAgICAgIH1cbiAgICAgIFtoaWRkZW5dIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgIH1cbiAgICBgO1xuICB9XG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcImhhLWVudGl0eS1waWNrZXJcIiwgSGFFbnRpdHlQaWNrZXIpO1xuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBIVE1MRWxlbWVudFRhZ05hbWVNYXAge1xuICAgIFwiaGEtZW50aXR5LXBpY2tlclwiOiBIYUVudGl0eVBpY2tlcjtcbiAgfVxufVxuIiwiaW1wb3J0IHsgbG9hZENvZGVNaXJyb3IgfSBmcm9tIFwiLi4vcmVzb3VyY2VzL2NvZGVtaXJyb3Iub25kZW1hbmRcIjtcbmltcG9ydCB7IGZpcmVFdmVudCB9IGZyb20gXCIuLi9jb21tb24vZG9tL2ZpcmVfZXZlbnRcIjtcbmltcG9ydCB7XG4gIFVwZGF0aW5nRWxlbWVudCxcbiAgcHJvcGVydHksXG4gIGN1c3RvbUVsZW1lbnQsXG4gIFByb3BlcnR5VmFsdWVzLFxufSBmcm9tIFwibGl0LWVsZW1lbnRcIjtcbmltcG9ydCB7IEVkaXRvciB9IGZyb20gXCJjb2RlbWlycm9yXCI7XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIEhBU1NEb21FdmVudHMge1xuICAgIFwiZWRpdG9yLXNhdmVcIjogdW5kZWZpbmVkO1xuICB9XG59XG5cbkBjdXN0b21FbGVtZW50KFwiaGEtY29kZS1lZGl0b3JcIilcbmV4cG9ydCBjbGFzcyBIYUNvZGVFZGl0b3IgZXh0ZW5kcyBVcGRhdGluZ0VsZW1lbnQge1xuICBwdWJsaWMgY29kZW1pcnJvcj86IEVkaXRvcjtcbiAgQHByb3BlcnR5KCkgcHVibGljIG1vZGU/OiBzdHJpbmc7XG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyBhdXRvZm9jdXMgPSBmYWxzZTtcbiAgQHByb3BlcnR5KCkgcHVibGljIHJ0bCA9IGZhbHNlO1xuICBAcHJvcGVydHkoKSBwdWJsaWMgZXJyb3IgPSBmYWxzZTtcbiAgQHByb3BlcnR5KCkgcHJpdmF0ZSBfdmFsdWUgPSBcIlwiO1xuXG4gIHB1YmxpYyBzZXQgdmFsdWUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3ZhbHVlID0gdmFsdWU7XG4gIH1cblxuICBwdWJsaWMgZ2V0IHZhbHVlKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuY29kZW1pcnJvciA/IHRoaXMuY29kZW1pcnJvci5nZXRWYWx1ZSgpIDogdGhpcy5fdmFsdWU7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGhhc0NvbW1lbnRzKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnNoYWRvd1Jvb3QhLnF1ZXJ5U2VsZWN0b3IoXCJzcGFuLmNtLWNvbW1lbnRcIikgPyB0cnVlIDogZmFsc2U7XG4gIH1cblxuICBwdWJsaWMgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgc3VwZXIuY29ubmVjdGVkQ2FsbGJhY2soKTtcbiAgICBpZiAoIXRoaXMuY29kZW1pcnJvcikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLmNvZGVtaXJyb3IucmVmcmVzaCgpO1xuICAgIGlmICh0aGlzLmF1dG9mb2N1cyAhPT0gZmFsc2UpIHtcbiAgICAgIHRoaXMuY29kZW1pcnJvci5mb2N1cygpO1xuICAgIH1cbiAgfVxuXG4gIHByb3RlY3RlZCB1cGRhdGUoY2hhbmdlZFByb3BzOiBQcm9wZXJ0eVZhbHVlcyk6IHZvaWQge1xuICAgIHN1cGVyLnVwZGF0ZShjaGFuZ2VkUHJvcHMpO1xuXG4gICAgaWYgKCF0aGlzLmNvZGVtaXJyb3IpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoY2hhbmdlZFByb3BzLmhhcyhcIm1vZGVcIikpIHtcbiAgICAgIHRoaXMuY29kZW1pcnJvci5zZXRPcHRpb24oXCJtb2RlXCIsIHRoaXMubW9kZSk7XG4gICAgfVxuICAgIGlmIChjaGFuZ2VkUHJvcHMuaGFzKFwiYXV0b2ZvY3VzXCIpKSB7XG4gICAgICB0aGlzLmNvZGVtaXJyb3Iuc2V0T3B0aW9uKFwiYXV0b2ZvY3VzXCIsIHRoaXMuYXV0b2ZvY3VzICE9PSBmYWxzZSk7XG4gICAgfVxuICAgIGlmIChjaGFuZ2VkUHJvcHMuaGFzKFwiX3ZhbHVlXCIpICYmIHRoaXMuX3ZhbHVlICE9PSB0aGlzLnZhbHVlKSB7XG4gICAgICB0aGlzLmNvZGVtaXJyb3Iuc2V0VmFsdWUodGhpcy5fdmFsdWUpO1xuICAgIH1cbiAgICBpZiAoY2hhbmdlZFByb3BzLmhhcyhcInJ0bFwiKSkge1xuICAgICAgdGhpcy5jb2RlbWlycm9yLnNldE9wdGlvbihcImd1dHRlcnNcIiwgdGhpcy5fY2FsY0d1dHRlcnMoKSk7XG4gICAgICB0aGlzLl9zZXRTY3JvbGxCYXJEaXJlY3Rpb24oKTtcbiAgICB9XG4gICAgaWYgKGNoYW5nZWRQcm9wcy5oYXMoXCJlcnJvclwiKSkge1xuICAgICAgdGhpcy5jbGFzc0xpc3QudG9nZ2xlKFwiZXJyb3Itc3RhdGVcIiwgdGhpcy5lcnJvcik7XG4gICAgfVxuICB9XG5cbiAgcHJvdGVjdGVkIGZpcnN0VXBkYXRlZChjaGFuZ2VkUHJvcHM6IFByb3BlcnR5VmFsdWVzKTogdm9pZCB7XG4gICAgc3VwZXIuZmlyc3RVcGRhdGVkKGNoYW5nZWRQcm9wcyk7XG4gICAgdGhpcy5fbG9hZCgpO1xuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBfbG9hZCgpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBjb25zdCBsb2FkZWQgPSBhd2FpdCBsb2FkQ29kZU1pcnJvcigpO1xuXG4gICAgY29uc3QgY29kZU1pcnJvciA9IGxvYWRlZC5jb2RlTWlycm9yO1xuXG4gICAgY29uc3Qgc2hhZG93Um9vdCA9IHRoaXMuYXR0YWNoU2hhZG93KHsgbW9kZTogXCJvcGVuXCIgfSk7XG5cbiAgICBzaGFkb3dSb290IS5pbm5lckhUTUwgPSBgXG4gICAgPHN0eWxlPlxuICAgICAgJHtsb2FkZWQuY29kZU1pcnJvckNzc31cbiAgICAgIC5Db2RlTWlycm9yIHtcbiAgICAgICAgaGVpZ2h0OiB2YXIoLS1jb2RlLW1pcnJvci1oZWlnaHQsIGF1dG8pO1xuICAgICAgICBkaXJlY3Rpb246IHZhcigtLWNvZGUtbWlycm9yLWRpcmVjdGlvbiwgbHRyKTtcbiAgICAgIH1cbiAgICAgIC5Db2RlTWlycm9yLXNjcm9sbCB7XG4gICAgICAgIG1heC1oZWlnaHQ6IHZhcigtLWNvZGUtbWlycm9yLW1heC1oZWlnaHQsIC0tY29kZS1taXJyb3ItaGVpZ2h0KTtcbiAgICAgIH1cbiAgICAgIC5Db2RlTWlycm9yLWd1dHRlcnMge1xuICAgICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCB2YXIoLS1wYXBlci1pbnB1dC1jb250YWluZXItY29sb3IsIHZhcigtLXNlY29uZGFyeS10ZXh0LWNvbG9yKSk7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXBhcGVyLWRpYWxvZy1iYWNrZ3JvdW5kLWNvbG9yLCB2YXIoLS1wcmltYXJ5LWJhY2tncm91bmQtY29sb3IpKTtcbiAgICAgICAgdHJhbnNpdGlvbjogMC4ycyBlYXNlIGJvcmRlci1yaWdodDtcbiAgICAgIH1cbiAgICAgIDpob3N0KC5lcnJvci1zdGF0ZSkgLkNvZGVNaXJyb3ItZ3V0dGVycyB7XG4gICAgICAgIGJvcmRlci1jb2xvcjogdmFyKC0tZXJyb3Itc3RhdGUtY29sb3IsIHJlZCk7XG4gICAgICB9XG4gICAgICAuQ29kZU1pcnJvci1mb2N1c2VkIC5Db2RlTWlycm9yLWd1dHRlcnMge1xuICAgICAgICBib3JkZXItcmlnaHQ6IDJweCBzb2xpZCB2YXIoLS1wYXBlci1pbnB1dC1jb250YWluZXItZm9jdXMtY29sb3IsIHZhcigtLXByaW1hcnktY29sb3IpKTtcbiAgICAgIH1cbiAgICAgIC5Db2RlTWlycm9yLWxpbmVudW1iZXIge1xuICAgICAgICBjb2xvcjogdmFyKC0tcGFwZXItZGlhbG9nLWNvbG9yLCB2YXIoLS1wcmltYXJ5LXRleHQtY29sb3IpKTtcbiAgICAgIH1cbiAgICAgIC5ydGwgLkNvZGVNaXJyb3ItdnNjcm9sbGJhciB7XG4gICAgICAgIHJpZ2h0OiBhdXRvO1xuICAgICAgICBsZWZ0OiAwcHg7XG4gICAgICB9XG4gICAgICAucnRsLWd1dHRlciB7XG4gICAgICAgIHdpZHRoOiAyMHB4O1xuICAgICAgfVxuICAgIDwvc3R5bGU+YDtcblxuICAgIHRoaXMuY29kZW1pcnJvciA9IGNvZGVNaXJyb3Ioc2hhZG93Um9vdCwge1xuICAgICAgdmFsdWU6IHRoaXMuX3ZhbHVlLFxuICAgICAgbGluZU51bWJlcnM6IHRydWUsXG4gICAgICB0YWJTaXplOiAyLFxuICAgICAgbW9kZTogdGhpcy5tb2RlLFxuICAgICAgYXV0b2ZvY3VzOiB0aGlzLmF1dG9mb2N1cyAhPT0gZmFsc2UsXG4gICAgICB2aWV3cG9ydE1hcmdpbjogSW5maW5pdHksXG4gICAgICBleHRyYUtleXM6IHtcbiAgICAgICAgVGFiOiBcImluZGVudE1vcmVcIixcbiAgICAgICAgXCJTaGlmdC1UYWJcIjogXCJpbmRlbnRMZXNzXCIsXG4gICAgICB9LFxuICAgICAgZ3V0dGVyczogdGhpcy5fY2FsY0d1dHRlcnMoKSxcbiAgICB9KTtcbiAgICB0aGlzLl9zZXRTY3JvbGxCYXJEaXJlY3Rpb24oKTtcbiAgICB0aGlzLmNvZGVtaXJyb3IhLm9uKFwiY2hhbmdlc1wiLCAoKSA9PiB0aGlzLl9vbkNoYW5nZSgpKTtcbiAgfVxuXG4gIHByaXZhdGUgX29uQ2hhbmdlKCk6IHZvaWQge1xuICAgIGNvbnN0IG5ld1ZhbHVlID0gdGhpcy52YWx1ZTtcbiAgICBpZiAobmV3VmFsdWUgPT09IHRoaXMuX3ZhbHVlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuX3ZhbHVlID0gbmV3VmFsdWU7XG4gICAgZmlyZUV2ZW50KHRoaXMsIFwidmFsdWUtY2hhbmdlZFwiLCB7IHZhbHVlOiB0aGlzLl92YWx1ZSB9KTtcbiAgfVxuXG4gIHByaXZhdGUgX2NhbGNHdXR0ZXJzKCk6IHN0cmluZ1tdIHtcbiAgICByZXR1cm4gdGhpcy5ydGwgPyBbXCJydGwtZ3V0dGVyXCIsIFwiQ29kZU1pcnJvci1saW5lbnVtYmVyc1wiXSA6IFtdO1xuICB9XG5cbiAgcHJpdmF0ZSBfc2V0U2Nyb2xsQmFyRGlyZWN0aW9uKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmNvZGVtaXJyb3IpIHtcbiAgICAgIHRoaXMuY29kZW1pcnJvci5nZXRXcmFwcGVyRWxlbWVudCgpLmNsYXNzTGlzdC50b2dnbGUoXCJydGxcIiwgdGhpcy5ydGwpO1xuICAgIH1cbiAgfVxufVxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBIVE1MRWxlbWVudFRhZ05hbWVNYXAge1xuICAgIFwiaGEtY29kZS1lZGl0b3JcIjogSGFDb2RlRWRpdG9yO1xuICB9XG59XG4iLCJpbXBvcnQge1xuICBjbGFzc01hcCxcbiAgaHRtbCxcbiAgY3VzdG9tRWxlbWVudCxcbiAgQ29uc3RydWN0b3IsXG59IGZyb20gXCJAbWF0ZXJpYWwvbXdjLWJhc2UvYmFzZS1lbGVtZW50XCI7XG5pbXBvcnQgeyByaXBwbGUgfSBmcm9tIFwiQG1hdGVyaWFsL213Yy1yaXBwbGUvcmlwcGxlLWRpcmVjdGl2ZS5qc1wiO1xuXG5pbXBvcnQgXCJAbWF0ZXJpYWwvbXdjLWZhYlwiO1xuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG5pbXBvcnQgeyBGYWIgfSBmcm9tIFwiQG1hdGVyaWFsL213Yy1mYWJcIjtcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxuY29uc3QgTXdjRmFiID0gY3VzdG9tRWxlbWVudHMuZ2V0KFwibXdjLWZhYlwiKSBhcyBDb25zdHJ1Y3RvcjxGYWI+O1xuXG5AY3VzdG9tRWxlbWVudChcImhhLWZhYlwiKVxuZXhwb3J0IGNsYXNzIEhhRmFiIGV4dGVuZHMgTXdjRmFiIHtcbiAgLy8gV2Ugb3ZlcnJpZGUgdGhlIHJlbmRlciBtZXRob2QgYmVjYXVzZSB3ZSBkb24ndCBoYXZlIGFuIGljb24gZm9udCBhbmQgbXdjLWZhYiBkb2Vzbid0IHN1cHBvcnQgb3VyIHN2Zy1pY29uIHNldHMuXG4gIC8vIEJhc2VkIG9uIHZlcnNpb24gbXdjLWZhYiAwLjhcbiAgcHJvdGVjdGVkIHJlbmRlcigpIHtcbiAgICBjb25zdCBjbGFzc2VzID0ge1xuICAgICAgXCJtZGMtZmFiLS1taW5pXCI6IHRoaXMubWluaSxcbiAgICAgIFwibWRjLWZhYi0tZXhpdGVkXCI6IHRoaXMuZXhpdGVkLFxuICAgICAgXCJtZGMtZmFiLS1leHRlbmRlZFwiOiB0aGlzLmV4dGVuZGVkLFxuICAgIH07XG4gICAgY29uc3Qgc2hvd0xhYmVsID0gdGhpcy5sYWJlbCAhPT0gXCJcIiAmJiB0aGlzLmV4dGVuZGVkO1xuICAgIHJldHVybiBodG1sYFxuICAgICAgPGJ1dHRvblxuICAgICAgICAucmlwcGxlPVwiJHtyaXBwbGUoKX1cIlxuICAgICAgICBjbGFzcz1cIm1kYy1mYWIgJHtjbGFzc01hcChjbGFzc2VzKX1cIlxuICAgICAgICA/ZGlzYWJsZWQ9XCIke3RoaXMuZGlzYWJsZWR9XCJcbiAgICAgICAgYXJpYS1sYWJlbD1cIiR7dGhpcy5sYWJlbCB8fCB0aGlzLmljb259XCJcbiAgICAgID5cbiAgICAgICAgJHtzaG93TGFiZWwgJiYgdGhpcy5zaG93SWNvbkF0RW5kID8gdGhpcy5sYWJlbCA6IFwiXCJ9XG4gICAgICAgICR7dGhpcy5pY29uXG4gICAgICAgICAgPyBodG1sYFxuICAgICAgICAgICAgICA8aGEtaWNvbiAuaWNvbj0ke3RoaXMuaWNvbn0+PC9oYS1pY29uPlxuICAgICAgICAgICAgYFxuICAgICAgICAgIDogXCJcIn1cbiAgICAgICAgJHtzaG93TGFiZWwgJiYgIXRoaXMuc2hvd0ljb25BdEVuZCA/IHRoaXMubGFiZWwgOiBcIlwifVxuICAgICAgPC9idXR0b24+XG4gICAgYDtcbiAgfVxufVxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBIVE1MRWxlbWVudFRhZ05hbWVNYXAge1xuICAgIFwiaGEtZmFiXCI6IEhhRmFiO1xuICB9XG59XG4iLCJpbXBvcnQgXCJAcG9seW1lci9wYXBlci1kcm9wZG93bi1tZW51L3BhcGVyLWRyb3Bkb3duLW1lbnVcIjtcbmltcG9ydCB7IENvbnN0cnVjdG9yIH0gZnJvbSBcImxpdC1lbGVtZW50XCI7XG5pbXBvcnQgeyBQb2x5bWVyRWxlbWVudCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyXCI7XG5cbmNvbnN0IHBhcGVyRHJvcGRvd25DbGFzcyA9IGN1c3RvbUVsZW1lbnRzLmdldChcbiAgXCJwYXBlci1kcm9wZG93bi1tZW51XCJcbikgYXMgQ29uc3RydWN0b3I8UG9seW1lckVsZW1lbnQ+O1xuXG4vLyBwYXRjaGVzIHBhcGVyIGRyb3AgZG93biB0byBwcm9wZXJseSBzdXBwb3J0IFJUTCAtIGh0dHBzOi8vZ2l0aHViLmNvbS9Qb2x5bWVyRWxlbWVudHMvcGFwZXItZHJvcGRvd24tbWVudS9pc3N1ZXMvMTgzXG5leHBvcnQgY2xhc3MgSGFQYXBlckRyb3Bkb3duQ2xhc3MgZXh0ZW5kcyBwYXBlckRyb3Bkb3duQ2xhc3Mge1xuICBwdWJsaWMgcmVhZHkoKSB7XG4gICAgc3VwZXIucmVhZHkoKTtcbiAgICAvLyB3YWl0IHRvIGNoZWNrIGZvciBkaXJlY3Rpb24gc2luY2Ugb3RoZXJ3aXNlIGRpcmVjdGlvbiBpcyB3cm9uZyBldmVuIHRob3VnaCB0b3AgbGV2ZWwgaXMgUlRMXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBpZiAod2luZG93LmdldENvbXB1dGVkU3R5bGUodGhpcykuZGlyZWN0aW9uID09PSBcInJ0bFwiKSB7XG4gICAgICAgIHRoaXMuc3R5bGUudGV4dEFsaWduID0gXCJyaWdodFwiO1xuICAgICAgfVxuICAgIH0sIDEwMCk7XG4gIH1cbn1cblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgSFRNTEVsZW1lbnRUYWdOYW1lTWFwIHtcbiAgICBcImhhLXBhcGVyLWRyb3Bkb3duLW1lbnVcIjogSGFQYXBlckRyb3Bkb3duQ2xhc3M7XG4gIH1cbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwiaGEtcGFwZXItZHJvcGRvd24tbWVudVwiLCBIYVBhcGVyRHJvcGRvd25DbGFzcyk7XG4iLCIvKlxuV3JhcHBlciBmb3IgcGFwZXItdGV4dGFyZWEuXG5cbnBhcGVyLXRleHRhcmVhIGNyYXNoZXMgb24gaU9TIHdoZW4gY3JlYXRlZCBwcm9ncmFtbWF0aWNhbGx5LiBUaGlzIG9ubHkgaW1wYWN0c1xub3VyIGF1dG9tYXRpb24gYW5kIHNjcmlwdCBlZGl0b3JzIGFzIHRoZXkgYXJlIHVzaW5nIFByZWFjdC4gUG9seW1lciBpcyB1c2luZ1xudGVtcGxhdGUgZWxlbWVudHMgYW5kIGRvZXMgbm90IGhhdmUgdGhpcyBpc3N1ZS5cblxucGFwZXItdGV4dGFyZWEgaXNzdWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9Qb2x5bWVyRWxlbWVudHMvcGFwZXItaW5wdXQvaXNzdWVzLzU1NlxuV2ViS2l0IGlzc3VlOiBodHRwczovL2J1Z3Mud2Via2l0Lm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MTc0NjI5XG4qL1xuXG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1pbnB1dC9wYXBlci10ZXh0YXJlYVwiO1xuaW1wb3J0IHsgaHRtbCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZ1wiO1xuaW1wb3J0IHsgUG9seW1lckVsZW1lbnQgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWVsZW1lbnRcIjtcblxuY2xhc3MgSGFUZXh0YXJlYSBleHRlbmRzIFBvbHltZXJFbGVtZW50IHtcbiAgc3RhdGljIGdldCB0ZW1wbGF0ZSgpIHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxzdHlsZT5cbiAgICAgICAgOmhvc3Qge1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICB9XG4gICAgICA8L3N0eWxlPlxuICAgICAgPHBhcGVyLXRleHRhcmVhXG4gICAgICAgIGxhYmVsPVwiW1tsYWJlbF1dXCJcbiAgICAgICAgcGxhY2Vob2xkZXI9XCJbW3BsYWNlaG9sZGVyXV1cIlxuICAgICAgICB2YWx1ZT1cInt7dmFsdWV9fVwiXG4gICAgICA+PC9wYXBlci10ZXh0YXJlYT5cbiAgICBgO1xuICB9XG5cbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBuYW1lOiBTdHJpbmcsXG4gICAgICBsYWJlbDogU3RyaW5nLFxuICAgICAgcGxhY2Vob2xkZXI6IFN0cmluZyxcbiAgICAgIHZhbHVlOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgbm90aWZ5OiB0cnVlLFxuICAgICAgfSxcbiAgICB9O1xuICB9XG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcImhhLXRleHRhcmVhXCIsIEhhVGV4dGFyZWEpO1xuIiwiaW1wb3J0IHtcbiAgTGl0RWxlbWVudCxcbiAgQ29uc3RydWN0b3IsXG4gIFByb3BlcnR5VmFsdWVzLFxuICBQcm9wZXJ0eURlY2xhcmF0aW9ucyxcbn0gZnJvbSBcImxpdC1lbGVtZW50XCI7XG5pbXBvcnQgeyBVbnN1YnNjcmliZUZ1bmMgfSBmcm9tIFwiaG9tZS1hc3Npc3RhbnQtanMtd2Vic29ja2V0XCI7XG5pbXBvcnQgeyBIb21lQXNzaXN0YW50IH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSGFzc1N1YnNjcmliZUVsZW1lbnQge1xuICBoYXNzU3Vic2NyaWJlKCk6IFVuc3Vic2NyaWJlRnVuY1tdO1xufVxuXG4vKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmUgKi9cbmV4cG9ydCBjb25zdCBTdWJzY3JpYmVNaXhpbiA9IDxUIGV4dGVuZHMgTGl0RWxlbWVudD4oXG4gIHN1cGVyQ2xhc3M6IENvbnN0cnVjdG9yPFQ+XG4pOiBDb25zdHJ1Y3RvcjxUICYgSGFzc1N1YnNjcmliZUVsZW1lbnQ+ID0+XG4gIC8vIEB0cy1pZ25vcmVcbiAgY2xhc3MgZXh0ZW5kcyBzdXBlckNsYXNzIHtcbiAgICBwcml2YXRlIGhhc3M/OiBIb21lQXNzaXN0YW50O1xuICAgIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZSAqL1xuICAgIHByaXZhdGUgX191bnN1YnM/OiBVbnN1YnNjcmliZUZ1bmNbXTtcblxuICAgIHN0YXRpYyBnZXQgcHJvcGVydGllcygpOiBQcm9wZXJ0eURlY2xhcmF0aW9ucyB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBoYXNzOiB7fSxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgcHVibGljIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgICAgc3VwZXIuY29ubmVjdGVkQ2FsbGJhY2soKTtcbiAgICAgIHRoaXMuX19jaGVja1N1YnNjcmliZWQoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZGlzY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgICBzdXBlci5kaXNjb25uZWN0ZWRDYWxsYmFjaygpO1xuICAgICAgaWYgKHRoaXMuX191bnN1YnMpIHtcbiAgICAgICAgd2hpbGUgKHRoaXMuX191bnN1YnMubGVuZ3RoKSB7XG4gICAgICAgICAgdGhpcy5fX3Vuc3Vicy5wb3AoKSEoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9fdW5zdWJzID0gdW5kZWZpbmVkO1xuICAgICAgfVxuICAgIH1cblxuICAgIHByb3RlY3RlZCB1cGRhdGVkKGNoYW5nZWRQcm9wczogUHJvcGVydHlWYWx1ZXMpIHtcbiAgICAgIHN1cGVyLnVwZGF0ZWQoY2hhbmdlZFByb3BzKTtcbiAgICAgIGlmIChjaGFuZ2VkUHJvcHMuaGFzKFwiaGFzc1wiKSkge1xuICAgICAgICB0aGlzLl9fY2hlY2tTdWJzY3JpYmVkKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGhhc3NTdWJzY3JpYmUoKTogVW5zdWJzY3JpYmVGdW5jW10ge1xuICAgICAgc3VwZXIuaGFzc1N1YnNjcmliZSgpO1xuICAgICAgcmV0dXJuIFtdO1xuICAgIH1cblxuICAgIHByaXZhdGUgX19jaGVja1N1YnNjcmliZWQoKTogdm9pZCB7XG4gICAgICBpZiAoXG4gICAgICAgIHRoaXMuX191bnN1YnMgIT09IHVuZGVmaW5lZCB8fFxuICAgICAgICAhKCh0aGlzIGFzIHVua25vd24pIGFzIEVsZW1lbnQpLmlzQ29ubmVjdGVkIHx8XG4gICAgICAgIHRoaXMuaGFzcyA9PT0gdW5kZWZpbmVkXG4gICAgICApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdGhpcy5fX3Vuc3VicyA9IHRoaXMuaGFzc1N1YnNjcmliZSgpO1xuICAgIH1cbiAgfTtcbiIsImltcG9ydCB7IGgsIENvbXBvbmVudCB9IGZyb20gXCJwcmVhY3RcIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWRyb3Bkb3duLW1lbnUvcGFwZXItZHJvcGRvd24tbWVudS1saWdodFwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItbGlzdGJveC9wYXBlci1saXN0Ym94XCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1pdGVtL3BhcGVyLWl0ZW1cIjtcblxuaW1wb3J0IERldmljZUNvbmRpdGlvbiBmcm9tIFwiLi9kZXZpY2VcIjtcbmltcG9ydCBMb2dpY2FsQ29uZGl0aW9uIGZyb20gXCIuL2xvZ2ljYWxcIjtcbmltcG9ydCBOdW1lcmljU3RhdGVDb25kaXRpb24gZnJvbSBcIi4vbnVtZXJpY19zdGF0ZVwiO1xuaW1wb3J0IFN0YXRlQ29uZGl0aW9uIGZyb20gXCIuL3N0YXRlXCI7XG5pbXBvcnQgU3VuQ29uZGl0aW9uIGZyb20gXCIuL3N1blwiO1xuaW1wb3J0IFRlbXBsYXRlQ29uZGl0aW9uIGZyb20gXCIuL3RlbXBsYXRlXCI7XG5pbXBvcnQgVGltZUNvbmRpdGlvbiBmcm9tIFwiLi90aW1lXCI7XG5pbXBvcnQgWm9uZUNvbmRpdGlvbiBmcm9tIFwiLi96b25lXCI7XG5cbmNvbnN0IFRZUEVTID0ge1xuICBhbmQ6IExvZ2ljYWxDb25kaXRpb24sXG4gIGRldmljZTogRGV2aWNlQ29uZGl0aW9uLFxuICBudW1lcmljX3N0YXRlOiBOdW1lcmljU3RhdGVDb25kaXRpb24sXG4gIG9yOiBMb2dpY2FsQ29uZGl0aW9uLFxuICBzdGF0ZTogU3RhdGVDb25kaXRpb24sXG4gIHN1bjogU3VuQ29uZGl0aW9uLFxuICB0ZW1wbGF0ZTogVGVtcGxhdGVDb25kaXRpb24sXG4gIHRpbWU6IFRpbWVDb25kaXRpb24sXG4gIHpvbmU6IFpvbmVDb25kaXRpb24sXG59O1xuXG5jb25zdCBPUFRJT05TID0gT2JqZWN0LmtleXMoVFlQRVMpLnNvcnQoKTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29uZGl0aW9uRWRpdCBleHRlbmRzIENvbXBvbmVudDxhbnk+IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcblxuICAgIHRoaXMudHlwZUNoYW5nZWQgPSB0aGlzLnR5cGVDaGFuZ2VkLmJpbmQodGhpcyk7XG4gIH1cblxuICBwdWJsaWMgdHlwZUNoYW5nZWQoZXYpIHtcbiAgICBjb25zdCB0eXBlID0gZXYudGFyZ2V0LnNlbGVjdGVkSXRlbS5hdHRyaWJ1dGVzLmNvbmRpdGlvbi52YWx1ZTtcblxuICAgIGlmICh0eXBlICE9PSB0aGlzLnByb3BzLmNvbmRpdGlvbi5jb25kaXRpb24pIHtcbiAgICAgIHRoaXMucHJvcHMub25DaGFuZ2UodGhpcy5wcm9wcy5pbmRleCwge1xuICAgICAgICBjb25kaXRpb246IHR5cGUsXG4gICAgICAgIC4uLlRZUEVTW3R5cGVdLmRlZmF1bHRDb25maWcsXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgcmVuZGVyKHsgaW5kZXgsIGNvbmRpdGlvbiwgb25DaGFuZ2UsIGhhc3MsIGxvY2FsaXplIH0pIHtcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IHZhcmlhYmxlLW5hbWVcbiAgICBjb25zdCBDb21wID0gVFlQRVNbY29uZGl0aW9uLmNvbmRpdGlvbl07XG4gICAgY29uc3Qgc2VsZWN0ZWQgPSBPUFRJT05TLmluZGV4T2YoY29uZGl0aW9uLmNvbmRpdGlvbik7XG5cbiAgICBpZiAoIUNvbXApIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAge2xvY2FsaXplKFxuICAgICAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcuYXV0b21hdGlvbi5lZGl0b3IuY29uZGl0aW9ucy51bnN1cHBvcnRlZF9jb25kaXRpb25cIixcbiAgICAgICAgICAgIFwiY29uZGl0aW9uXCIsXG4gICAgICAgICAgICBjb25kaXRpb24uY29uZGl0aW9uXG4gICAgICAgICAgKX1cbiAgICAgICAgICA8cHJlPntKU09OLnN0cmluZ2lmeShjb25kaXRpb24sIG51bGwsIDIpfTwvcHJlPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICk7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxwYXBlci1kcm9wZG93bi1tZW51LWxpZ2h0XG4gICAgICAgICAgbGFiZWw9e2xvY2FsaXplKFxuICAgICAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcuYXV0b21hdGlvbi5lZGl0b3IuY29uZGl0aW9ucy50eXBlX3NlbGVjdFwiXG4gICAgICAgICAgKX1cbiAgICAgICAgICBuby1hbmltYXRpb25zXG4gICAgICAgID5cbiAgICAgICAgICA8cGFwZXItbGlzdGJveFxuICAgICAgICAgICAgc2xvdD1cImRyb3Bkb3duLWNvbnRlbnRcIlxuICAgICAgICAgICAgc2VsZWN0ZWQ9e3NlbGVjdGVkfVxuICAgICAgICAgICAgb25pcm9uLXNlbGVjdD17dGhpcy50eXBlQ2hhbmdlZH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7T1BUSU9OUy5tYXAoKG9wdCkgPT4gKFxuICAgICAgICAgICAgICA8cGFwZXItaXRlbSBjb25kaXRpb249e29wdH0+XG4gICAgICAgICAgICAgICAge2xvY2FsaXplKFxuICAgICAgICAgICAgICAgICAgYHVpLnBhbmVsLmNvbmZpZy5hdXRvbWF0aW9uLmVkaXRvci5jb25kaXRpb25zLnR5cGUuJHtvcHR9LmxhYmVsYFxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIDwvcGFwZXItaXRlbT5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvcGFwZXItbGlzdGJveD5cbiAgICAgICAgPC9wYXBlci1kcm9wZG93bi1tZW51LWxpZ2h0PlxuICAgICAgICA8Q29tcFxuICAgICAgICAgIGluZGV4PXtpbmRleH1cbiAgICAgICAgICBjb25kaXRpb249e2NvbmRpdGlvbn1cbiAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2V9XG4gICAgICAgICAgaGFzcz17aGFzc31cbiAgICAgICAgICBsb2NhbGl6ZT17bG9jYWxpemV9XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG4iLCJpbXBvcnQgeyBoLCBDb21wb25lbnQgfSBmcm9tIFwicHJlYWN0XCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1tZW51LWJ1dHRvbi9wYXBlci1tZW51LWJ1dHRvblwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItaWNvbi1idXR0b24vcGFwZXItaWNvbi1idXR0b25cIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWxpc3Rib3gvcGFwZXItbGlzdGJveFwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItaXRlbS9wYXBlci1pdGVtXCI7XG5pbXBvcnQgXCIuLi8uLi8uLi8uLi9jb21wb25lbnRzL2hhLWNhcmRcIjtcblxuaW1wb3J0IENvbmRpdGlvbkVkaXQgZnJvbSBcIi4vY29uZGl0aW9uX2VkaXRcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29uZGl0aW9uUm93IGV4dGVuZHMgQ29tcG9uZW50PGFueT4ge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuXG4gICAgdGhpcy5vbkRlbGV0ZSA9IHRoaXMub25EZWxldGUuYmluZCh0aGlzKTtcbiAgfVxuXG4gIHB1YmxpYyBvbkRlbGV0ZSgpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcbiAgICBpZiAoXG4gICAgICBjb25maXJtKFxuICAgICAgICB0aGlzLnByb3BzLmxvY2FsaXplKFxuICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLmF1dG9tYXRpb24uZWRpdG9yLmNvbmRpdGlvbnMuZGVsZXRlX2NvbmZpcm1cIlxuICAgICAgICApXG4gICAgICApXG4gICAgKSB7XG4gICAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKHRoaXMucHJvcHMuaW5kZXgsIG51bGwpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyByZW5kZXIocHJvcHMpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGhhLWNhcmQ+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWNvbnRlbnRcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1tZW51XCI+XG4gICAgICAgICAgICA8cGFwZXItbWVudS1idXR0b25cbiAgICAgICAgICAgICAgbm8tYW5pbWF0aW9uc1xuICAgICAgICAgICAgICBob3Jpem9udGFsLWFsaWduPVwicmlnaHRcIlxuICAgICAgICAgICAgICBob3Jpem9udGFsLW9mZnNldD1cIi01XCJcbiAgICAgICAgICAgICAgdmVydGljYWwtb2Zmc2V0PVwiLTVcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8cGFwZXItaWNvbi1idXR0b25cbiAgICAgICAgICAgICAgICBpY29uPVwiaGFzczpkb3RzLXZlcnRpY2FsXCJcbiAgICAgICAgICAgICAgICBzbG90PVwiZHJvcGRvd24tdHJpZ2dlclwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxwYXBlci1saXN0Ym94IHNsb3Q9XCJkcm9wZG93bi1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgPHBhcGVyLWl0ZW0gZGlzYWJsZWQ+XG4gICAgICAgICAgICAgICAgICB7cHJvcHMubG9jYWxpemUoXG4gICAgICAgICAgICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLmF1dG9tYXRpb24uZWRpdG9yLmNvbmRpdGlvbnMuZHVwbGljYXRlXCJcbiAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgPC9wYXBlci1pdGVtPlxuICAgICAgICAgICAgICAgIDxwYXBlci1pdGVtIG9uVGFwPXt0aGlzLm9uRGVsZXRlfT5cbiAgICAgICAgICAgICAgICAgIHtwcm9wcy5sb2NhbGl6ZShcbiAgICAgICAgICAgICAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcuYXV0b21hdGlvbi5lZGl0b3IuY29uZGl0aW9ucy5kZWxldGVcIlxuICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA8L3BhcGVyLWl0ZW0+XG4gICAgICAgICAgICAgIDwvcGFwZXItbGlzdGJveD5cbiAgICAgICAgICAgIDwvcGFwZXItbWVudS1idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPENvbmRpdGlvbkVkaXQgey4uLnByb3BzfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvaGEtY2FyZD5cbiAgICApO1xuICB9XG59XG4iLCJpbXBvcnQgeyBoLCBDb21wb25lbnQgfSBmcm9tIFwicHJlYWN0XCI7XG5cbmltcG9ydCBcIi4uLy4uLy4uLy4uL2NvbXBvbmVudHMvZGV2aWNlL2hhLWRldmljZS1waWNrZXJcIjtcbmltcG9ydCBcIi4uLy4uLy4uLy4uL2NvbXBvbmVudHMvZGV2aWNlL2hhLWRldmljZS1jb25kaXRpb24tcGlja2VyXCI7XG5pbXBvcnQgXCIuLi8uLi8uLi8uLi9jb21wb25lbnRzL2hhLWZvcm1cIjtcblxuaW1wb3J0IHtcbiAgZmV0Y2hEZXZpY2VDb25kaXRpb25DYXBhYmlsaXRpZXMsXG4gIGRldmljZUF1dG9tYXRpb25zRXF1YWwsXG59IGZyb20gXCIuLi8uLi8uLi8uLi9kYXRhL2RldmljZV9hdXRvbWF0aW9uXCI7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEZXZpY2VDb25kaXRpb24gZXh0ZW5kcyBDb21wb25lbnQ8YW55LCBhbnk+IHtcbiAgcHJpdmF0ZSBfb3JpZ0NvbmRpdGlvbjtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuZGV2aWNlUGlja2VkID0gdGhpcy5kZXZpY2VQaWNrZWQuYmluZCh0aGlzKTtcbiAgICB0aGlzLmRldmljZUNvbmRpdGlvblBpY2tlZCA9IHRoaXMuZGV2aWNlQ29uZGl0aW9uUGlja2VkLmJpbmQodGhpcyk7XG4gICAgdGhpcy5fZXh0cmFGaWVsZHNDaGFuZ2VkID0gdGhpcy5fZXh0cmFGaWVsZHNDaGFuZ2VkLmJpbmQodGhpcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHsgZGV2aWNlX2lkOiB1bmRlZmluZWQsIGNhcGFiaWxpdGllczogdW5kZWZpbmVkIH07XG4gIH1cblxuICBwdWJsaWMgZGV2aWNlUGlja2VkKGV2KSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IC4uLnRoaXMuc3RhdGUsIGRldmljZV9pZDogZXYudGFyZ2V0LnZhbHVlIH0pO1xuICB9XG5cbiAgcHVibGljIGRldmljZUNvbmRpdGlvblBpY2tlZChldikge1xuICAgIGxldCBjb25kaXRpb24gPSBldi50YXJnZXQudmFsdWU7XG4gICAgaWYgKFxuICAgICAgdGhpcy5fb3JpZ0NvbmRpdGlvbiAmJlxuICAgICAgZGV2aWNlQXV0b21hdGlvbnNFcXVhbCh0aGlzLl9vcmlnQ29uZGl0aW9uLCBjb25kaXRpb24pXG4gICAgKSB7XG4gICAgICBjb25kaXRpb24gPSB0aGlzLl9vcmlnQ29uZGl0aW9uO1xuICAgIH1cbiAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKHRoaXMucHJvcHMuaW5kZXgsIGNvbmRpdGlvbik7XG4gIH1cblxuICAvKiBlc2xpbnQtZGlzYWJsZSBjYW1lbGNhc2UgKi9cbiAgcHVibGljIHJlbmRlcih7IGNvbmRpdGlvbiwgaGFzcyB9LCB7IGRldmljZV9pZCwgY2FwYWJpbGl0aWVzIH0pIHtcbiAgICBpZiAoZGV2aWNlX2lkID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGRldmljZV9pZCA9IGNvbmRpdGlvbi5kZXZpY2VfaWQ7XG4gICAgfVxuICAgIGNvbnN0IGV4dHJhRmllbGRzRGF0YSA9XG4gICAgICBjYXBhYmlsaXRpZXMgJiYgY2FwYWJpbGl0aWVzLmV4dHJhX2ZpZWxkc1xuICAgICAgICA/IGNhcGFiaWxpdGllcy5leHRyYV9maWVsZHMubWFwKChpdGVtKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4geyBbaXRlbS5uYW1lXTogdGhpcy5wcm9wcy5jb25kaXRpb25baXRlbS5uYW1lXSB9O1xuICAgICAgICAgIH0pXG4gICAgICAgIDogdW5kZWZpbmVkO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxoYS1kZXZpY2UtcGlja2VyXG4gICAgICAgICAgdmFsdWU9e2RldmljZV9pZH1cbiAgICAgICAgICBvbkNoYW5nZT17dGhpcy5kZXZpY2VQaWNrZWR9XG4gICAgICAgICAgaGFzcz17aGFzc31cbiAgICAgICAgICBsYWJlbD1cIkRldmljZVwiXG4gICAgICAgIC8+XG4gICAgICAgIDxoYS1kZXZpY2UtY29uZGl0aW9uLXBpY2tlclxuICAgICAgICAgIHZhbHVlPXtjb25kaXRpb259XG4gICAgICAgICAgZGV2aWNlSWQ9e2RldmljZV9pZH1cbiAgICAgICAgICBvbkNoYW5nZT17dGhpcy5kZXZpY2VDb25kaXRpb25QaWNrZWR9XG4gICAgICAgICAgaGFzcz17aGFzc31cbiAgICAgICAgICBsYWJlbD1cIkNvbmRpdGlvblwiXG4gICAgICAgIC8+XG4gICAgICAgIHtleHRyYUZpZWxkc0RhdGEgJiYgKFxuICAgICAgICAgIDxoYS1mb3JtXG4gICAgICAgICAgICBkYXRhPXtPYmplY3QuYXNzaWduKHt9LCAuLi5leHRyYUZpZWxkc0RhdGEpfVxuICAgICAgICAgICAgb25EYXRhLWNoYW5nZWQ9e3RoaXMuX2V4dHJhRmllbGRzQ2hhbmdlZH1cbiAgICAgICAgICAgIHNjaGVtYT17dGhpcy5zdGF0ZS5jYXBhYmlsaXRpZXMuZXh0cmFfZmllbGRzfVxuICAgICAgICAgICAgY29tcHV0ZUxhYmVsPXt0aGlzLl9leHRyYUZpZWxkc0NvbXB1dGVMYWJlbENhbGxiYWNrKGhhc3MubG9jYWxpemUpfVxuICAgICAgICAgIC8+XG4gICAgICAgICl9XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG5cbiAgcHVibGljIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGlmICghdGhpcy5zdGF0ZS5jYXBhYmlsaXRpZXMpIHtcbiAgICAgIHRoaXMuX2dldENhcGFiaWxpdGllcygpO1xuICAgIH1cbiAgICBpZiAodGhpcy5wcm9wcy5jb25kaXRpb24pIHtcbiAgICAgIHRoaXMuX29yaWdDb25kaXRpb24gPSB0aGlzLnByb3BzLmNvbmRpdGlvbjtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcykge1xuICAgIGlmIChwcmV2UHJvcHMuY29uZGl0aW9uICE9PSB0aGlzLnByb3BzLmNvbmRpdGlvbikge1xuICAgICAgdGhpcy5fZ2V0Q2FwYWJpbGl0aWVzKCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBfZ2V0Q2FwYWJpbGl0aWVzKCkge1xuICAgIGNvbnN0IGNvbmRpdGlvbiA9IHRoaXMucHJvcHMuY29uZGl0aW9uO1xuXG4gICAgY29uc3QgY2FwYWJpbGl0aWVzID0gY29uZGl0aW9uLmRvbWFpblxuICAgICAgPyBhd2FpdCBmZXRjaERldmljZUNvbmRpdGlvbkNhcGFiaWxpdGllcyh0aGlzLnByb3BzLmhhc3MsIGNvbmRpdGlvbilcbiAgICAgIDogbnVsbDtcbiAgICB0aGlzLnNldFN0YXRlKHsgLi4udGhpcy5zdGF0ZSwgY2FwYWJpbGl0aWVzIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBfZXh0cmFGaWVsZHNDaGFuZ2VkKGV2KSB7XG4gICAgaWYgKCFldi5kZXRhaWwucGF0aCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBpdGVtID0gZXYuZGV0YWlsLnBhdGgucmVwbGFjZShcImRhdGEuXCIsIFwiXCIpO1xuICAgIGNvbnN0IHZhbHVlID0gZXYuZGV0YWlsLnZhbHVlIHx8IHVuZGVmaW5lZDtcblxuICAgIHRoaXMucHJvcHMub25DaGFuZ2UodGhpcy5wcm9wcy5pbmRleCwge1xuICAgICAgLi4udGhpcy5wcm9wcy5jb25kaXRpb24sXG4gICAgICBbaXRlbV06IHZhbHVlLFxuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBfZXh0cmFGaWVsZHNDb21wdXRlTGFiZWxDYWxsYmFjayhsb2NhbGl6ZSkge1xuICAgIC8vIFJldHVybnMgYSBjYWxsYmFjayBmb3IgaGEtZm9ybSB0byBjYWxjdWxhdGUgbGFiZWxzIHBlciBzY2hlbWEgb2JqZWN0XG4gICAgcmV0dXJuIChzY2hlbWEpID0+XG4gICAgICBsb2NhbGl6ZShcbiAgICAgICAgYHVpLnBhbmVsLmNvbmZpZy5hdXRvbWF0aW9uLmVkaXRvci5jb25kaXRpb24udHlwZS5kZXZpY2UuZXh0cmFfZmllbGRzLiR7XG4gICAgICAgICAgc2NoZW1hLm5hbWVcbiAgICAgICAgfWBcbiAgICAgICkgfHwgc2NoZW1hLm5hbWU7XG4gIH1cbn1cblxuKERldmljZUNvbmRpdGlvbiBhcyBhbnkpLmRlZmF1bHRDb25maWcgPSB7XG4gIGRldmljZV9pZDogXCJcIixcbiAgZG9tYWluOiBcIlwiLFxuICBlbnRpdHlfaWQ6IFwiXCIsXG59O1xuIiwiaW1wb3J0IHsgaCwgQ29tcG9uZW50IH0gZnJvbSBcInByZWFjdFwiO1xuaW1wb3J0IFwiQG1hdGVyaWFsL213Yy1idXR0b25cIjtcbmltcG9ydCBcIi4uLy4uLy4uLy4uL2NvbXBvbmVudHMvaGEtY2FyZFwiO1xuXG5pbXBvcnQgQ29uZGl0aW9uUm93IGZyb20gXCIuL2NvbmRpdGlvbl9yb3dcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29uZGl0aW9uIGV4dGVuZHMgQ29tcG9uZW50PGFueT4ge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuXG4gICAgdGhpcy5hZGRDb25kaXRpb24gPSB0aGlzLmFkZENvbmRpdGlvbi5iaW5kKHRoaXMpO1xuICAgIHRoaXMuY29uZGl0aW9uQ2hhbmdlZCA9IHRoaXMuY29uZGl0aW9uQ2hhbmdlZC5iaW5kKHRoaXMpO1xuICB9XG5cbiAgcHVibGljIGFkZENvbmRpdGlvbigpIHtcbiAgICBjb25zdCBjb25kaXRpb24gPSB0aGlzLnByb3BzLmNvbmRpdGlvbi5jb25jYXQoe1xuICAgICAgY29uZGl0aW9uOiBcInN0YXRlXCIsXG4gICAgfSk7XG5cbiAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKGNvbmRpdGlvbik7XG4gIH1cblxuICBwdWJsaWMgY29uZGl0aW9uQ2hhbmdlZChpbmRleCwgbmV3VmFsdWUpIHtcbiAgICBjb25zdCBjb25kaXRpb24gPSB0aGlzLnByb3BzLmNvbmRpdGlvbi5jb25jYXQoKTtcblxuICAgIGlmIChuZXdWYWx1ZSA9PT0gbnVsbCkge1xuICAgICAgY29uZGl0aW9uLnNwbGljZShpbmRleCwgMSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbmRpdGlvbltpbmRleF0gPSBuZXdWYWx1ZTtcbiAgICB9XG5cbiAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKGNvbmRpdGlvbik7XG4gIH1cblxuICBwdWJsaWMgcmVuZGVyKHsgY29uZGl0aW9uLCBoYXNzLCBsb2NhbGl6ZSB9KSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3M9XCJ0cmlnZ2Vyc1wiPlxuICAgICAgICB7Y29uZGl0aW9uLm1hcCgoY25kLCBpZHgpID0+IChcbiAgICAgICAgICA8Q29uZGl0aW9uUm93XG4gICAgICAgICAgICBpbmRleD17aWR4fVxuICAgICAgICAgICAgY29uZGl0aW9uPXtjbmR9XG4gICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5jb25kaXRpb25DaGFuZ2VkfVxuICAgICAgICAgICAgaGFzcz17aGFzc31cbiAgICAgICAgICAgIGxvY2FsaXplPXtsb2NhbGl6ZX1cbiAgICAgICAgICAvPlxuICAgICAgICApKX1cbiAgICAgICAgPGhhLWNhcmQ+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtYWN0aW9ucyBhZGQtY2FyZFwiPlxuICAgICAgICAgICAgPG13Yy1idXR0b24gb25UYXA9e3RoaXMuYWRkQ29uZGl0aW9ufT5cbiAgICAgICAgICAgICAge2xvY2FsaXplKFwidWkucGFuZWwuY29uZmlnLmF1dG9tYXRpb24uZWRpdG9yLmNvbmRpdGlvbnMuYWRkXCIpfVxuICAgICAgICAgICAgPC9td2MtYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2hhLWNhcmQ+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG4iLCJpbXBvcnQgeyBoLCBDb21wb25lbnQgfSBmcm9tIFwicHJlYWN0XCI7XG5cbmltcG9ydCBDb25kaXRpb24gZnJvbSBcIi4vaW5kZXhcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTG9naWNhbENvbmRpdGlvbiBleHRlbmRzIENvbXBvbmVudDxhbnksIGFueT4ge1xuICBwcml2YXRlIF9tb3VudGVkID0gZmFsc2U7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5jb25kaXRpb25DaGFuZ2VkID0gdGhpcy5jb25kaXRpb25DaGFuZ2VkLmJpbmQodGhpcyk7XG4gIH1cblxuICBwdWJsaWMgY29uZGl0aW9uQ2hhbmdlZChjb25kaXRpb25zKSB7XG4gICAgaWYgKHRoaXMuX21vdW50ZWQpIHtcbiAgICAgIHRoaXMucHJvcHMub25DaGFuZ2UodGhpcy5wcm9wcy5pbmRleCwge1xuICAgICAgICAuLi50aGlzLnByb3BzLmNvbmRpdGlvbixcbiAgICAgICAgY29uZGl0aW9ucyxcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBjb21wb25lbnRXaWxsTW91bnQoKSB7XG4gICAgdGhpcy5fbW91bnRlZCA9IHRydWU7XG4gIH1cblxuICBwdWJsaWMgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgdGhpcy5fbW91bnRlZCA9IGZhbHNlO1xuICB9XG5cbiAgLyogZXNsaW50LWRpc2FibGUgY2FtZWxjYXNlICovXG4gIHB1YmxpYyByZW5kZXIoeyBjb25kaXRpb24sIGhhc3MsIGxvY2FsaXplIH0pIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPENvbmRpdGlvblxuICAgICAgICAgIGNvbmRpdGlvbj17Y29uZGl0aW9uLmNvbmRpdGlvbnMgfHwgW119XG4gICAgICAgICAgb25DaGFuZ2U9e3RoaXMuY29uZGl0aW9uQ2hhbmdlZH1cbiAgICAgICAgICBoYXNzPXtoYXNzfVxuICAgICAgICAgIGxvY2FsaXplPXtsb2NhbGl6ZX1cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuKExvZ2ljYWxDb25kaXRpb24gYXMgYW55KS5kZWZhdWx0Q29uZmlnID0ge1xuICBjb25kaXRpb25zOiBbeyBjb25kaXRpb246IFwic3RhdGVcIiB9XSxcbn07XG4iLCJpbXBvcnQgeyBoLCBDb21wb25lbnQgfSBmcm9tIFwicHJlYWN0XCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1pbnB1dC9wYXBlci1pbnB1dFwiO1xuaW1wb3J0IFwiLi4vLi4vLi4vLi4vY29tcG9uZW50cy9oYS10ZXh0YXJlYVwiO1xuaW1wb3J0IFwiLi4vLi4vLi4vLi4vY29tcG9uZW50cy9lbnRpdHkvaGEtZW50aXR5LXBpY2tlclwiO1xuXG5pbXBvcnQgeyBvbkNoYW5nZUV2ZW50IH0gZnJvbSBcIi4uLy4uLy4uLy4uL2NvbW1vbi9wcmVhY3QvZXZlbnRcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTnVtZXJpY1N0YXRlQ29uZGl0aW9uIGV4dGVuZHMgQ29tcG9uZW50PGFueT4ge1xuICBwcml2YXRlIG9uQ2hhbmdlOiAob2JqOiBhbnkpID0+IHZvaWQ7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG5cbiAgICB0aGlzLm9uQ2hhbmdlID0gb25DaGFuZ2VFdmVudC5iaW5kKHRoaXMsIFwiY29uZGl0aW9uXCIpO1xuICAgIHRoaXMuZW50aXR5UGlja2VkID0gdGhpcy5lbnRpdHlQaWNrZWQuYmluZCh0aGlzKTtcbiAgfVxuXG4gIHB1YmxpYyBlbnRpdHlQaWNrZWQoZXYpIHtcbiAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKHRoaXMucHJvcHMuaW5kZXgsIHtcbiAgICAgIC4uLnRoaXMucHJvcHMuY29uZGl0aW9uLFxuICAgICAgZW50aXR5X2lkOiBldi50YXJnZXQudmFsdWUsXG4gICAgfSk7XG4gIH1cblxuICAvKiBlc2xpbnQtZGlzYWJsZSBjYW1lbGNhc2UgKi9cbiAgcHVibGljIHJlbmRlcih7IGNvbmRpdGlvbiwgaGFzcywgbG9jYWxpemUgfSkge1xuICAgIGNvbnN0IHsgdmFsdWVfdGVtcGxhdGUsIGVudGl0eV9pZCwgYmVsb3csIGFib3ZlIH0gPSBjb25kaXRpb247XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxoYS1lbnRpdHktcGlja2VyXG4gICAgICAgICAgdmFsdWU9e2VudGl0eV9pZH1cbiAgICAgICAgICBvbkNoYW5nZT17dGhpcy5lbnRpdHlQaWNrZWR9XG4gICAgICAgICAgaGFzcz17aGFzc31cbiAgICAgICAgICBhbGxvd0N1c3RvbUVudGl0eVxuICAgICAgICAvPlxuICAgICAgICA8cGFwZXItaW5wdXRcbiAgICAgICAgICBsYWJlbD17bG9jYWxpemUoXG4gICAgICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy5hdXRvbWF0aW9uLmVkaXRvci5jb25kaXRpb25zLnR5cGUubnVtZXJpY19zdGF0ZS5hYm92ZVwiXG4gICAgICAgICAgKX1cbiAgICAgICAgICBuYW1lPVwiYWJvdmVcIlxuICAgICAgICAgIHZhbHVlPXthYm92ZX1cbiAgICAgICAgICBvbnZhbHVlLWNoYW5nZWQ9e3RoaXMub25DaGFuZ2V9XG4gICAgICAgIC8+XG4gICAgICAgIDxwYXBlci1pbnB1dFxuICAgICAgICAgIGxhYmVsPXtsb2NhbGl6ZShcbiAgICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLmF1dG9tYXRpb24uZWRpdG9yLmNvbmRpdGlvbnMudHlwZS5udW1lcmljX3N0YXRlLmJlbG93XCJcbiAgICAgICAgICApfVxuICAgICAgICAgIG5hbWU9XCJiZWxvd1wiXG4gICAgICAgICAgdmFsdWU9e2JlbG93fVxuICAgICAgICAgIG9udmFsdWUtY2hhbmdlZD17dGhpcy5vbkNoYW5nZX1cbiAgICAgICAgLz5cbiAgICAgICAgPGhhLXRleHRhcmVhXG4gICAgICAgICAgbGFiZWw9e2xvY2FsaXplKFxuICAgICAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcuYXV0b21hdGlvbi5lZGl0b3IuY29uZGl0aW9ucy50eXBlLm51bWVyaWNfc3RhdGUudmFsdWVfdGVtcGxhdGVcIlxuICAgICAgICAgICl9XG4gICAgICAgICAgbmFtZT1cInZhbHVlX3RlbXBsYXRlXCJcbiAgICAgICAgICB2YWx1ZT17dmFsdWVfdGVtcGxhdGV9XG4gICAgICAgICAgb252YWx1ZS1jaGFuZ2VkPXt0aGlzLm9uQ2hhbmdlfVxuICAgICAgICAgIGRpcj1cImx0clwiXG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbihOdW1lcmljU3RhdGVDb25kaXRpb24gYXMgYW55KS5kZWZhdWx0Q29uZmlnID0ge1xuICBlbnRpdHlfaWQ6IFwiXCIsXG59O1xuIiwiaW1wb3J0IHsgaCwgQ29tcG9uZW50IH0gZnJvbSBcInByZWFjdFwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItaW5wdXQvcGFwZXItaW5wdXRcIjtcbmltcG9ydCBcIi4uLy4uLy4uLy4uL2NvbXBvbmVudHMvZW50aXR5L2hhLWVudGl0eS1waWNrZXJcIjtcblxuaW1wb3J0IHsgb25DaGFuZ2VFdmVudCB9IGZyb20gXCIuLi8uLi8uLi8uLi9jb21tb24vcHJlYWN0L2V2ZW50XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0YXRlQ29uZGl0aW9uIGV4dGVuZHMgQ29tcG9uZW50PGFueT4ge1xuICBwcml2YXRlIG9uQ2hhbmdlOiAob2JqOiBhbnkpID0+IHZvaWQ7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG5cbiAgICB0aGlzLm9uQ2hhbmdlID0gb25DaGFuZ2VFdmVudC5iaW5kKHRoaXMsIFwiY29uZGl0aW9uXCIpO1xuICAgIHRoaXMuZW50aXR5UGlja2VkID0gdGhpcy5lbnRpdHlQaWNrZWQuYmluZCh0aGlzKTtcbiAgfVxuXG4gIHB1YmxpYyBlbnRpdHlQaWNrZWQoZXYpIHtcbiAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKHRoaXMucHJvcHMuaW5kZXgsIHtcbiAgICAgIC4uLnRoaXMucHJvcHMuY29uZGl0aW9uLFxuICAgICAgZW50aXR5X2lkOiBldi50YXJnZXQudmFsdWUsXG4gICAgfSk7XG4gIH1cblxuICAvKiBlc2xpbnQtZGlzYWJsZSBjYW1lbGNhc2UgKi9cbiAgcHVibGljIHJlbmRlcih7IGNvbmRpdGlvbiwgaGFzcywgbG9jYWxpemUgfSkge1xuICAgIGNvbnN0IHsgZW50aXR5X2lkLCBzdGF0ZSB9ID0gY29uZGl0aW9uO1xuICAgIGNvbnN0IGNuZEZvciA9IGNvbmRpdGlvbi5mb3I7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxoYS1lbnRpdHktcGlja2VyXG4gICAgICAgICAgdmFsdWU9e2VudGl0eV9pZH1cbiAgICAgICAgICBvbkNoYW5nZT17dGhpcy5lbnRpdHlQaWNrZWR9XG4gICAgICAgICAgaGFzcz17aGFzc31cbiAgICAgICAgICBhbGxvd0N1c3RvbUVudGl0eVxuICAgICAgICAvPlxuICAgICAgICA8cGFwZXItaW5wdXRcbiAgICAgICAgICBsYWJlbD17bG9jYWxpemUoXG4gICAgICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy5hdXRvbWF0aW9uLmVkaXRvci5jb25kaXRpb25zLnR5cGUuc3RhdGUuc3RhdGVcIlxuICAgICAgICAgICl9XG4gICAgICAgICAgbmFtZT1cInN0YXRlXCJcbiAgICAgICAgICB2YWx1ZT17c3RhdGV9XG4gICAgICAgICAgb252YWx1ZS1jaGFuZ2VkPXt0aGlzLm9uQ2hhbmdlfVxuICAgICAgICAvPlxuICAgICAgICB7Y25kRm9yICYmIDxwcmU+Rm9yOiB7SlNPTi5zdHJpbmdpZnkoY25kRm9yLCBudWxsLCAyKX08L3ByZT59XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbihTdGF0ZUNvbmRpdGlvbiBhcyBhbnkpLmRlZmF1bHRDb25maWcgPSB7XG4gIGVudGl0eV9pZDogXCJcIixcbiAgc3RhdGU6IFwiXCIsXG59O1xuIiwiaW1wb3J0IHsgaCwgQ29tcG9uZW50IH0gZnJvbSBcInByZWFjdFwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItaW5wdXQvcGFwZXItaW5wdXRcIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLXJhZGlvLWJ1dHRvbi9wYXBlci1yYWRpby1idXR0b25cIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLXJhZGlvLWdyb3VwL3BhcGVyLXJhZGlvLWdyb3VwXCI7XG5cbmltcG9ydCB7IG9uQ2hhbmdlRXZlbnQgfSBmcm9tIFwiLi4vLi4vLi4vLi4vY29tbW9uL3ByZWFjdC9ldmVudFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdW5Db25kaXRpb24gZXh0ZW5kcyBDb21wb25lbnQ8YW55PiB7XG4gIHByaXZhdGUgb25DaGFuZ2U6IChvYmo6IGFueSkgPT4gdm9pZDtcbiAgcHJpdmF0ZSBhZnRlclBpY2tlZDogKG9iajogYW55KSA9PiB2b2lkO1xuICBwcml2YXRlIGJlZm9yZVBpY2tlZDogKG9iajogYW55KSA9PiB2b2lkO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG5cbiAgICB0aGlzLm9uQ2hhbmdlID0gb25DaGFuZ2VFdmVudC5iaW5kKHRoaXMsIFwiY29uZGl0aW9uXCIpO1xuICAgIHRoaXMuYWZ0ZXJQaWNrZWQgPSB0aGlzLnJhZGlvR3JvdXBQaWNrZWQuYmluZCh0aGlzLCBcImFmdGVyXCIpO1xuICAgIHRoaXMuYmVmb3JlUGlja2VkID0gdGhpcy5yYWRpb0dyb3VwUGlja2VkLmJpbmQodGhpcywgXCJiZWZvcmVcIik7XG4gIH1cblxuICBwdWJsaWMgcmFkaW9Hcm91cFBpY2tlZChrZXksIGV2KSB7XG4gICAgY29uc3QgY29uZGl0aW9uID0geyAuLi50aGlzLnByb3BzLmNvbmRpdGlvbiB9O1xuXG4gICAgaWYgKGV2LnRhcmdldC5zZWxlY3RlZCkge1xuICAgICAgY29uZGl0aW9uW2tleV0gPSBldi50YXJnZXQuc2VsZWN0ZWQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRlbGV0ZSBjb25kaXRpb25ba2V5XTtcbiAgICB9XG5cbiAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKHRoaXMucHJvcHMuaW5kZXgsIGNvbmRpdGlvbik7XG4gIH1cblxuICBwdWJsaWMgcmVuZGVyKHsgY29uZGl0aW9uLCBsb2NhbGl6ZSB9KSB7XG4gICAgLyogZXNsaW50LWRpc2FibGUgY2FtZWxjYXNlICovXG4gICAgY29uc3QgeyBhZnRlciwgYWZ0ZXJfb2Zmc2V0LCBiZWZvcmUsIGJlZm9yZV9vZmZzZXQgfSA9IGNvbmRpdGlvbjtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGxhYmVsIGlkPVwiYmVmb3JlbGFiZWxcIj5cbiAgICAgICAgICB7bG9jYWxpemUoXG4gICAgICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy5hdXRvbWF0aW9uLmVkaXRvci5jb25kaXRpb25zLnR5cGUuc3VuLmJlZm9yZVwiXG4gICAgICAgICAgKX1cbiAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgPHBhcGVyLXJhZGlvLWdyb3VwXG4gICAgICAgICAgYWxsb3ctZW1wdHktc2VsZWN0aW9uXG4gICAgICAgICAgc2VsZWN0ZWQ9e2JlZm9yZX1cbiAgICAgICAgICBhcmlhLWxhYmVsbGVkYnk9XCJiZWZvcmVsYWJlbFwiXG4gICAgICAgICAgb25wYXBlci1yYWRpby1ncm91cC1jaGFuZ2VkPXt0aGlzLmJlZm9yZVBpY2tlZH1cbiAgICAgICAgPlxuICAgICAgICAgIDxwYXBlci1yYWRpby1idXR0b24gbmFtZT1cInN1bnJpc2VcIj5cbiAgICAgICAgICAgIHtsb2NhbGl6ZShcbiAgICAgICAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcuYXV0b21hdGlvbi5lZGl0b3IuY29uZGl0aW9ucy50eXBlLnN1bi5zdW5yaXNlXCJcbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9wYXBlci1yYWRpby1idXR0b24+XG4gICAgICAgICAgPHBhcGVyLXJhZGlvLWJ1dHRvbiBuYW1lPVwic3Vuc2V0XCI+XG4gICAgICAgICAgICB7bG9jYWxpemUoXG4gICAgICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLmF1dG9tYXRpb24uZWRpdG9yLmNvbmRpdGlvbnMudHlwZS5zdW4uc3Vuc2V0XCJcbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9wYXBlci1yYWRpby1idXR0b24+XG4gICAgICAgIDwvcGFwZXItcmFkaW8tZ3JvdXA+XG5cbiAgICAgICAgPHBhcGVyLWlucHV0XG4gICAgICAgICAgbGFiZWw9e2xvY2FsaXplKFxuICAgICAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcuYXV0b21hdGlvbi5lZGl0b3IuY29uZGl0aW9ucy50eXBlLnN1bi5iZWZvcmVfb2Zmc2V0XCJcbiAgICAgICAgICApfVxuICAgICAgICAgIG5hbWU9XCJiZWZvcmVfb2Zmc2V0XCJcbiAgICAgICAgICB2YWx1ZT17YmVmb3JlX29mZnNldH1cbiAgICAgICAgICBvbnZhbHVlLWNoYW5nZWQ9e3RoaXMub25DaGFuZ2V9XG4gICAgICAgICAgZGlzYWJsZWQ9e2JlZm9yZSA9PT0gdW5kZWZpbmVkfVxuICAgICAgICAvPlxuXG4gICAgICAgIDxsYWJlbCBpZD1cImFmdGVybGFiZWxcIj5cbiAgICAgICAgICB7bG9jYWxpemUoXG4gICAgICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy5hdXRvbWF0aW9uLmVkaXRvci5jb25kaXRpb25zLnR5cGUuc3VuLmFmdGVyXCJcbiAgICAgICAgICApfVxuICAgICAgICA8L2xhYmVsPlxuICAgICAgICA8cGFwZXItcmFkaW8tZ3JvdXBcbiAgICAgICAgICBhbGxvdy1lbXB0eS1zZWxlY3Rpb25cbiAgICAgICAgICBzZWxlY3RlZD17YWZ0ZXJ9XG4gICAgICAgICAgYXJpYS1sYWJlbGxlZGJ5PVwiYWZ0ZXJsYWJlbFwiXG4gICAgICAgICAgb25wYXBlci1yYWRpby1ncm91cC1jaGFuZ2VkPXt0aGlzLmFmdGVyUGlja2VkfVxuICAgICAgICA+XG4gICAgICAgICAgPHBhcGVyLXJhZGlvLWJ1dHRvbiBuYW1lPVwic3VucmlzZVwiPlxuICAgICAgICAgICAge2xvY2FsaXplKFxuICAgICAgICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy5hdXRvbWF0aW9uLmVkaXRvci5jb25kaXRpb25zLnR5cGUuc3VuLnN1bnJpc2VcIlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L3BhcGVyLXJhZGlvLWJ1dHRvbj5cbiAgICAgICAgICA8cGFwZXItcmFkaW8tYnV0dG9uIG5hbWU9XCJzdW5zZXRcIj5cbiAgICAgICAgICAgIHtsb2NhbGl6ZShcbiAgICAgICAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcuYXV0b21hdGlvbi5lZGl0b3IuY29uZGl0aW9ucy50eXBlLnN1bi5zdW5zZXRcIlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L3BhcGVyLXJhZGlvLWJ1dHRvbj5cbiAgICAgICAgPC9wYXBlci1yYWRpby1ncm91cD5cblxuICAgICAgICA8cGFwZXItaW5wdXRcbiAgICAgICAgICBsYWJlbD17bG9jYWxpemUoXG4gICAgICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy5hdXRvbWF0aW9uLmVkaXRvci5jb25kaXRpb25zLnR5cGUuc3VuLmFmdGVyX29mZnNldFwiXG4gICAgICAgICAgKX1cbiAgICAgICAgICBuYW1lPVwiYWZ0ZXJfb2Zmc2V0XCJcbiAgICAgICAgICB2YWx1ZT17YWZ0ZXJfb2Zmc2V0fVxuICAgICAgICAgIG9udmFsdWUtY2hhbmdlZD17dGhpcy5vbkNoYW5nZX1cbiAgICAgICAgICBkaXNhYmxlZD17YWZ0ZXIgPT09IHVuZGVmaW5lZH1cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuKFN1bkNvbmRpdGlvbiBhcyBhbnkpLmRlZmF1bHRDb25maWcgPSB7fTtcbiIsImltcG9ydCB7IGgsIENvbXBvbmVudCB9IGZyb20gXCJwcmVhY3RcIjtcbmltcG9ydCBcIi4uLy4uLy4uLy4uL2NvbXBvbmVudHMvaGEtdGV4dGFyZWFcIjtcblxuaW1wb3J0IHsgb25DaGFuZ2VFdmVudCB9IGZyb20gXCIuLi8uLi8uLi8uLi9jb21tb24vcHJlYWN0L2V2ZW50XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRlbXBsYXRlQ29uZGl0aW9uIGV4dGVuZHMgQ29tcG9uZW50PGFueT4ge1xuICBwcml2YXRlIG9uQ2hhbmdlOiAob2JqOiBhbnkpID0+IHZvaWQ7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG5cbiAgICB0aGlzLm9uQ2hhbmdlID0gb25DaGFuZ2VFdmVudC5iaW5kKHRoaXMsIFwiY29uZGl0aW9uXCIpO1xuICB9XG5cbiAgcHVibGljIHJlbmRlcih7IGNvbmRpdGlvbiwgbG9jYWxpemUgfSkge1xuICAgIC8qIGVzbGludC1kaXNhYmxlIGNhbWVsY2FzZSAqL1xuICAgIGNvbnN0IHsgdmFsdWVfdGVtcGxhdGUgfSA9IGNvbmRpdGlvbjtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGhhLXRleHRhcmVhXG4gICAgICAgICAgbGFiZWw9e2xvY2FsaXplKFxuICAgICAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcuYXV0b21hdGlvbi5lZGl0b3IuY29uZGl0aW9ucy50eXBlLnRlbXBsYXRlLnZhbHVlX3RlbXBsYXRlXCJcbiAgICAgICAgICApfVxuICAgICAgICAgIG5hbWU9XCJ2YWx1ZV90ZW1wbGF0ZVwiXG4gICAgICAgICAgdmFsdWU9e3ZhbHVlX3RlbXBsYXRlfVxuICAgICAgICAgIG9udmFsdWUtY2hhbmdlZD17dGhpcy5vbkNoYW5nZX1cbiAgICAgICAgICBkaXI9XCJsdHJcIlxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG4oVGVtcGxhdGVDb25kaXRpb24gYXMgYW55KS5kZWZhdWx0Q29uZmlnID0ge1xuICB2YWx1ZV90ZW1wbGF0ZTogXCJcIixcbn07XG4iLCJpbXBvcnQgeyBoLCBDb21wb25lbnQgfSBmcm9tIFwicHJlYWN0XCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1pbnB1dC9wYXBlci1pbnB1dFwiO1xuXG5pbXBvcnQgeyBvbkNoYW5nZUV2ZW50IH0gZnJvbSBcIi4uLy4uLy4uLy4uL2NvbW1vbi9wcmVhY3QvZXZlbnRcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGltZUNvbmRpdGlvbiBleHRlbmRzIENvbXBvbmVudDxhbnk+IHtcbiAgcHJpdmF0ZSBvbkNoYW5nZTogKG9iajogYW55KSA9PiB2b2lkO1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuXG4gICAgdGhpcy5vbkNoYW5nZSA9IG9uQ2hhbmdlRXZlbnQuYmluZCh0aGlzLCBcImNvbmRpdGlvblwiKTtcbiAgfVxuXG4gIC8qIGVzbGludC1kaXNhYmxlIGNhbWVsY2FzZSAqL1xuICBwdWJsaWMgcmVuZGVyKHsgY29uZGl0aW9uLCBsb2NhbGl6ZSB9KSB7XG4gICAgY29uc3QgeyBhZnRlciwgYmVmb3JlIH0gPSBjb25kaXRpb247XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxwYXBlci1pbnB1dFxuICAgICAgICAgIGxhYmVsPXtsb2NhbGl6ZShcbiAgICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLmF1dG9tYXRpb24uZWRpdG9yLmNvbmRpdGlvbnMudHlwZS50aW1lLmFmdGVyXCJcbiAgICAgICAgICApfVxuICAgICAgICAgIG5hbWU9XCJhZnRlclwiXG4gICAgICAgICAgdmFsdWU9e2FmdGVyfVxuICAgICAgICAgIG9udmFsdWUtY2hhbmdlZD17dGhpcy5vbkNoYW5nZX1cbiAgICAgICAgLz5cbiAgICAgICAgPHBhcGVyLWlucHV0XG4gICAgICAgICAgbGFiZWw9e2xvY2FsaXplKFxuICAgICAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcuYXV0b21hdGlvbi5lZGl0b3IuY29uZGl0aW9ucy50eXBlLnRpbWUuYmVmb3JlXCJcbiAgICAgICAgICApfVxuICAgICAgICAgIG5hbWU9XCJiZWZvcmVcIlxuICAgICAgICAgIHZhbHVlPXtiZWZvcmV9XG4gICAgICAgICAgb252YWx1ZS1jaGFuZ2VkPXt0aGlzLm9uQ2hhbmdlfVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG4oVGltZUNvbmRpdGlvbiBhcyBhbnkpLmRlZmF1bHRDb25maWcgPSB7fTtcbiIsImltcG9ydCB7IGgsIENvbXBvbmVudCB9IGZyb20gXCJwcmVhY3RcIjtcbmltcG9ydCBcIi4uLy4uLy4uLy4uL2NvbXBvbmVudHMvZW50aXR5L2hhLWVudGl0eS1waWNrZXJcIjtcbmltcG9ydCB7IGhhc0xvY2F0aW9uIH0gZnJvbSBcIi4uLy4uLy4uLy4uL2NvbW1vbi9lbnRpdHkvaGFzX2xvY2F0aW9uXCI7XG5pbXBvcnQgeyBjb21wdXRlU3RhdGVEb21haW4gfSBmcm9tIFwiLi4vLi4vLi4vLi4vY29tbW9uL2VudGl0eS9jb21wdXRlX3N0YXRlX2RvbWFpblwiO1xuXG5mdW5jdGlvbiB6b25lQW5kTG9jYXRpb25GaWx0ZXIoc3RhdGVPYmopIHtcbiAgcmV0dXJuIGhhc0xvY2F0aW9uKHN0YXRlT2JqKSAmJiBjb21wdXRlU3RhdGVEb21haW4oc3RhdGVPYmopICE9PSBcInpvbmVcIjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgWm9uZUNvbmRpdGlvbiBleHRlbmRzIENvbXBvbmVudDxhbnk+IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcblxuICAgIHRoaXMuZW50aXR5UGlja2VkID0gdGhpcy5lbnRpdHlQaWNrZWQuYmluZCh0aGlzKTtcbiAgICB0aGlzLnpvbmVQaWNrZWQgPSB0aGlzLnpvbmVQaWNrZWQuYmluZCh0aGlzKTtcbiAgfVxuXG4gIHB1YmxpYyBlbnRpdHlQaWNrZWQoZXYpIHtcbiAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKHRoaXMucHJvcHMuaW5kZXgsIHtcbiAgICAgIC4uLnRoaXMucHJvcHMuY29uZGl0aW9uLFxuICAgICAgZW50aXR5X2lkOiBldi50YXJnZXQudmFsdWUsXG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgem9uZVBpY2tlZChldikge1xuICAgIHRoaXMucHJvcHMub25DaGFuZ2UodGhpcy5wcm9wcy5pbmRleCwge1xuICAgICAgLi4udGhpcy5wcm9wcy5jb25kaXRpb24sXG4gICAgICB6b25lOiBldi50YXJnZXQudmFsdWUsXG4gICAgfSk7XG4gIH1cblxuICAvKiBlc2xpbnQtZGlzYWJsZSBjYW1lbGNhc2UgKi9cbiAgcHVibGljIHJlbmRlcih7IGNvbmRpdGlvbiwgaGFzcywgbG9jYWxpemUgfSkge1xuICAgIGNvbnN0IHsgZW50aXR5X2lkLCB6b25lIH0gPSBjb25kaXRpb247XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxoYS1lbnRpdHktcGlja2VyXG4gICAgICAgICAgbGFiZWw9e2xvY2FsaXplKFxuICAgICAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcuYXV0b21hdGlvbi5lZGl0b3IuY29uZGl0aW9ucy50eXBlLnpvbmUuZW50aXR5XCJcbiAgICAgICAgICApfVxuICAgICAgICAgIHZhbHVlPXtlbnRpdHlfaWR9XG4gICAgICAgICAgb25DaGFuZ2U9e3RoaXMuZW50aXR5UGlja2VkfVxuICAgICAgICAgIGhhc3M9e2hhc3N9XG4gICAgICAgICAgYWxsb3dDdXN0b21FbnRpdHlcbiAgICAgICAgICBlbnRpdHlGaWx0ZXI9e3pvbmVBbmRMb2NhdGlvbkZpbHRlcn1cbiAgICAgICAgLz5cbiAgICAgICAgPGhhLWVudGl0eS1waWNrZXJcbiAgICAgICAgICBsYWJlbD17bG9jYWxpemUoXG4gICAgICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy5hdXRvbWF0aW9uLmVkaXRvci5jb25kaXRpb25zLnR5cGUuem9uZS56b25lXCJcbiAgICAgICAgICApfVxuICAgICAgICAgIHZhbHVlPXt6b25lfVxuICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLnpvbmVQaWNrZWR9XG4gICAgICAgICAgaGFzcz17aGFzc31cbiAgICAgICAgICBhbGxvd0N1c3RvbUVudGl0eVxuICAgICAgICAgIGRvbWFpbkZpbHRlcj1cInpvbmVcIlxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG4oWm9uZUNvbmRpdGlvbiBhcyBhbnkpLmRlZmF1bHRDb25maWcgPSB7XG4gIGVudGl0eV9pZDogXCJcIixcbiAgem9uZTogXCJcIixcbn07XG4iLCJpbXBvcnQgeyBoLCBDb21wb25lbnQgfSBmcm9tIFwicHJlYWN0XCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1kcm9wZG93bi1tZW51L3BhcGVyLWRyb3Bkb3duLW1lbnUtbGlnaHRcIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWxpc3Rib3gvcGFwZXItbGlzdGJveFwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItaXRlbS9wYXBlci1pdGVtXCI7XG5cbmltcG9ydCBDYWxsU2VydmljZUFjdGlvbiBmcm9tIFwiLi9jYWxsX3NlcnZpY2VcIjtcbmltcG9ydCBDb25kaXRpb25BY3Rpb24gZnJvbSBcIi4vY29uZGl0aW9uXCI7XG5pbXBvcnQgRGVsYXlBY3Rpb24gZnJvbSBcIi4vZGVsYXlcIjtcbmltcG9ydCBEZXZpY2VBY3Rpb24gZnJvbSBcIi4vZGV2aWNlXCI7XG5pbXBvcnQgRXZlbnRBY3Rpb24gZnJvbSBcIi4vZXZlbnRcIjtcbmltcG9ydCBTY2VuZUFjdGlvbiBmcm9tIFwiLi9zY2VuZVwiO1xuaW1wb3J0IFdhaXRBY3Rpb24gZnJvbSBcIi4vd2FpdFwiO1xuXG5jb25zdCBUWVBFUyA9IHtcbiAgc2VydmljZTogQ2FsbFNlcnZpY2VBY3Rpb24sXG4gIGRlbGF5OiBEZWxheUFjdGlvbixcbiAgd2FpdF90ZW1wbGF0ZTogV2FpdEFjdGlvbixcbiAgY29uZGl0aW9uOiBDb25kaXRpb25BY3Rpb24sXG4gIGV2ZW50OiBFdmVudEFjdGlvbixcbiAgZGV2aWNlX2lkOiBEZXZpY2VBY3Rpb24sXG4gIHNjZW5lOiBTY2VuZUFjdGlvbixcbn07XG5cbmNvbnN0IE9QVElPTlMgPSBPYmplY3Qua2V5cyhUWVBFUykuc29ydCgpO1xuXG5mdW5jdGlvbiBnZXRUeXBlKGFjdGlvbikge1xuICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMoVFlQRVMpO1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IHByZWZlci1mb3Itb2ZcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKGtleXNbaV0gaW4gYWN0aW9uKSB7XG4gICAgICByZXR1cm4ga2V5c1tpXTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIG51bGw7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFjdGlvbiBleHRlbmRzIENvbXBvbmVudDxhbnk+IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcblxuICAgIHRoaXMudHlwZUNoYW5nZWQgPSB0aGlzLnR5cGVDaGFuZ2VkLmJpbmQodGhpcyk7XG4gIH1cblxuICBwdWJsaWMgdHlwZUNoYW5nZWQoZXYpIHtcbiAgICBjb25zdCBuZXdUeXBlID0gZXYudGFyZ2V0LnNlbGVjdGVkSXRlbS5hdHRyaWJ1dGVzLmFjdGlvbi52YWx1ZTtcbiAgICBjb25zdCBvbGRUeXBlID0gZ2V0VHlwZSh0aGlzLnByb3BzLmFjdGlvbik7XG5cbiAgICBpZiAob2xkVHlwZSAhPT0gbmV3VHlwZSkge1xuICAgICAgdGhpcy5wcm9wcy5vbkNoYW5nZSh0aGlzLnByb3BzLmluZGV4LCBUWVBFU1tuZXdUeXBlXS5kZWZhdWx0Q29uZmlnKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgcmVuZGVyKHsgaW5kZXgsIGFjdGlvbiwgb25DaGFuZ2UsIGhhc3MsIGxvY2FsaXplIH0pIHtcbiAgICBjb25zdCB0eXBlID0gZ2V0VHlwZShhY3Rpb24pO1xuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogdmFyaWFibGUtbmFtZVxuICAgIGNvbnN0IENvbXAgPSB0eXBlICYmIFRZUEVTW3R5cGVdO1xuICAgIC8vIEB0cy1pZ25vcmVcbiAgICBjb25zdCBzZWxlY3RlZCA9IE9QVElPTlMuaW5kZXhPZih0eXBlKTtcblxuICAgIGlmICghQ29tcCkge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICB7bG9jYWxpemUoXG4gICAgICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy5hdXRvbWF0aW9uLmVkaXRvci5hY3Rpb25zLnVuc3VwcG9ydGVkX2FjdGlvblwiLFxuICAgICAgICAgICAgXCJhY3Rpb25cIixcbiAgICAgICAgICAgIHR5cGVcbiAgICAgICAgICApfVxuICAgICAgICAgIDxwcmU+e0pTT04uc3RyaW5naWZ5KGFjdGlvbiwgbnVsbCwgMil9PC9wcmU+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKTtcbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxwYXBlci1kcm9wZG93bi1tZW51LWxpZ2h0XG4gICAgICAgICAgbGFiZWw9e2xvY2FsaXplKFxuICAgICAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcuYXV0b21hdGlvbi5lZGl0b3IuYWN0aW9ucy50eXBlX3NlbGVjdFwiXG4gICAgICAgICAgKX1cbiAgICAgICAgICBuby1hbmltYXRpb25zXG4gICAgICAgID5cbiAgICAgICAgICA8cGFwZXItbGlzdGJveFxuICAgICAgICAgICAgc2xvdD1cImRyb3Bkb3duLWNvbnRlbnRcIlxuICAgICAgICAgICAgc2VsZWN0ZWQ9e3NlbGVjdGVkfVxuICAgICAgICAgICAgb25pcm9uLXNlbGVjdD17dGhpcy50eXBlQ2hhbmdlZH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7T1BUSU9OUy5tYXAoKG9wdCkgPT4gKFxuICAgICAgICAgICAgICA8cGFwZXItaXRlbSBhY3Rpb249e29wdH0+XG4gICAgICAgICAgICAgICAge2xvY2FsaXplKFxuICAgICAgICAgICAgICAgICAgYHVpLnBhbmVsLmNvbmZpZy5hdXRvbWF0aW9uLmVkaXRvci5hY3Rpb25zLnR5cGUuJHtvcHR9LmxhYmVsYFxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIDwvcGFwZXItaXRlbT5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvcGFwZXItbGlzdGJveD5cbiAgICAgICAgPC9wYXBlci1kcm9wZG93bi1tZW51LWxpZ2h0PlxuICAgICAgICA8Q29tcFxuICAgICAgICAgIGluZGV4PXtpbmRleH1cbiAgICAgICAgICBhY3Rpb249e2FjdGlvbn1cbiAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2V9XG4gICAgICAgICAgaGFzcz17aGFzc31cbiAgICAgICAgICBsb2NhbGl6ZT17bG9jYWxpemV9XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG4iLCJpbXBvcnQgeyBoLCBDb21wb25lbnQgfSBmcm9tIFwicHJlYWN0XCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1tZW51LWJ1dHRvbi9wYXBlci1tZW51LWJ1dHRvblwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItaWNvbi1idXR0b24vcGFwZXItaWNvbi1idXR0b25cIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWl0ZW0vcGFwZXItaXRlbVwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItbGlzdGJveC9wYXBlci1saXN0Ym94XCI7XG5pbXBvcnQgXCIuLi8uLi8uLi8uLi9jb21wb25lbnRzL2hhLWNhcmRcIjtcblxuaW1wb3J0IEFjdGlvbkVkaXQgZnJvbSBcIi4vYWN0aW9uX2VkaXRcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWN0aW9uIGV4dGVuZHMgQ29tcG9uZW50PGFueT4ge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuXG4gICAgdGhpcy5vbkRlbGV0ZSA9IHRoaXMub25EZWxldGUuYmluZCh0aGlzKTtcbiAgfVxuXG4gIHB1YmxpYyBvbkRlbGV0ZSgpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcbiAgICBpZiAoXG4gICAgICBjb25maXJtKFxuICAgICAgICB0aGlzLnByb3BzLmxvY2FsaXplKFxuICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLmF1dG9tYXRpb24uZWRpdG9yLmFjdGlvbnMuZGVsZXRlX2NvbmZpcm1cIlxuICAgICAgICApXG4gICAgICApXG4gICAgKSB7XG4gICAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKHRoaXMucHJvcHMuaW5kZXgsIG51bGwpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyByZW5kZXIocHJvcHMpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGhhLWNhcmQ+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWNvbnRlbnRcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1tZW51XCI+XG4gICAgICAgICAgICA8cGFwZXItbWVudS1idXR0b25cbiAgICAgICAgICAgICAgbm8tYW5pbWF0aW9uc1xuICAgICAgICAgICAgICBob3Jpem9udGFsLWFsaWduPVwicmlnaHRcIlxuICAgICAgICAgICAgICBob3Jpem9udGFsLW9mZnNldD1cIi01XCJcbiAgICAgICAgICAgICAgdmVydGljYWwtb2Zmc2V0PVwiLTVcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8cGFwZXItaWNvbi1idXR0b25cbiAgICAgICAgICAgICAgICBpY29uPVwiaGFzczpkb3RzLXZlcnRpY2FsXCJcbiAgICAgICAgICAgICAgICBzbG90PVwiZHJvcGRvd24tdHJpZ2dlclwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxwYXBlci1saXN0Ym94IHNsb3Q9XCJkcm9wZG93bi1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgPHBhcGVyLWl0ZW0gZGlzYWJsZWQ+XG4gICAgICAgICAgICAgICAgICB7cHJvcHMubG9jYWxpemUoXG4gICAgICAgICAgICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLmF1dG9tYXRpb24uZWRpdG9yLmFjdGlvbnMuZHVwbGljYXRlXCJcbiAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgPC9wYXBlci1pdGVtPlxuICAgICAgICAgICAgICAgIDxwYXBlci1pdGVtIG9uVGFwPXt0aGlzLm9uRGVsZXRlfT5cbiAgICAgICAgICAgICAgICAgIHtwcm9wcy5sb2NhbGl6ZShcbiAgICAgICAgICAgICAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcuYXV0b21hdGlvbi5lZGl0b3IuYWN0aW9ucy5kZWxldGVcIlxuICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA8L3BhcGVyLWl0ZW0+XG4gICAgICAgICAgICAgIDwvcGFwZXItbGlzdGJveD5cbiAgICAgICAgICAgIDwvcGFwZXItbWVudS1idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPEFjdGlvbkVkaXQgey4uLnByb3BzfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvaGEtY2FyZD5cbiAgICApO1xuICB9XG59XG4iLCJpbXBvcnQgeyBoLCBDb21wb25lbnQgfSBmcm9tIFwicHJlYWN0XCI7XG5pbXBvcnQgXCIuLi8uLi8uLi8uLi9jb21wb25lbnRzL2hhLXNlcnZpY2UtcGlja2VyXCI7XG5cbmltcG9ydCBZQU1MVGV4dEFyZWEgZnJvbSBcIi4uL3lhbWxfdGV4dGFyZWFcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FsbFNlcnZpY2VBY3Rpb24gZXh0ZW5kcyBDb21wb25lbnQ8YW55PiB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG5cbiAgICB0aGlzLnNlcnZpY2VDaGFuZ2VkID0gdGhpcy5zZXJ2aWNlQ2hhbmdlZC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuc2VydmljZURhdGFDaGFuZ2VkID0gdGhpcy5zZXJ2aWNlRGF0YUNoYW5nZWQuYmluZCh0aGlzKTtcbiAgfVxuXG4gIHB1YmxpYyBzZXJ2aWNlQ2hhbmdlZChldikge1xuICAgIHRoaXMucHJvcHMub25DaGFuZ2UodGhpcy5wcm9wcy5pbmRleCwge1xuICAgICAgLi4udGhpcy5wcm9wcy5hY3Rpb24sXG4gICAgICBzZXJ2aWNlOiBldi50YXJnZXQudmFsdWUsXG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgc2VydmljZURhdGFDaGFuZ2VkKGRhdGEpIHtcbiAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKHRoaXMucHJvcHMuaW5kZXgsIHsgLi4udGhpcy5wcm9wcy5hY3Rpb24sIGRhdGEgfSk7XG4gIH1cblxuICBwdWJsaWMgcmVuZGVyKHsgYWN0aW9uLCBoYXNzLCBsb2NhbGl6ZSB9KSB7XG4gICAgY29uc3QgeyBzZXJ2aWNlLCBkYXRhIH0gPSBhY3Rpb247XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGhhLXNlcnZpY2UtcGlja2VyXG4gICAgICAgICAgaGFzcz17aGFzc31cbiAgICAgICAgICB2YWx1ZT17c2VydmljZX1cbiAgICAgICAgICBvbkNoYW5nZT17dGhpcy5zZXJ2aWNlQ2hhbmdlZH1cbiAgICAgICAgLz5cbiAgICAgICAgPFlBTUxUZXh0QXJlYVxuICAgICAgICAgIGxhYmVsPXtsb2NhbGl6ZShcbiAgICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLmF1dG9tYXRpb24uZWRpdG9yLmFjdGlvbnMudHlwZS5zZXJ2aWNlLnNlcnZpY2VfZGF0YVwiXG4gICAgICAgICAgKX1cbiAgICAgICAgICB2YWx1ZT17ZGF0YX1cbiAgICAgICAgICBvbkNoYW5nZT17dGhpcy5zZXJ2aWNlRGF0YUNoYW5nZWR9XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbihDYWxsU2VydmljZUFjdGlvbiBhcyBhbnkpLmRlZmF1bHRDb25maWcgPSB7XG4gIGFsaWFzOiBcIlwiLFxuICBzZXJ2aWNlOiBcIlwiLFxuICBkYXRhOiB7fSxcbn07XG4iLCJpbXBvcnQgeyBoLCBDb21wb25lbnQgfSBmcm9tIFwicHJlYWN0XCI7XG5cbmltcG9ydCBTdGF0ZUNvbmRpdGlvbiBmcm9tIFwiLi4vY29uZGl0aW9uL3N0YXRlXCI7XG5pbXBvcnQgQ29uZGl0aW9uRWRpdCBmcm9tIFwiLi4vY29uZGl0aW9uL2NvbmRpdGlvbl9lZGl0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbmRpdGlvbkFjdGlvbiBleHRlbmRzIENvbXBvbmVudDxhbnk+IHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXG4gIHB1YmxpYyByZW5kZXIoeyBhY3Rpb24sIGluZGV4LCBvbkNoYW5nZSwgaGFzcywgbG9jYWxpemUgfSkge1xuICAgIHJldHVybiAoXG4gICAgICA8Q29uZGl0aW9uRWRpdFxuICAgICAgICBjb25kaXRpb249e2FjdGlvbn1cbiAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlfVxuICAgICAgICBpbmRleD17aW5kZXh9XG4gICAgICAgIGhhc3M9e2hhc3N9XG4gICAgICAgIGxvY2FsaXplPXtsb2NhbGl6ZX1cbiAgICAgIC8+XG4gICAgKTtcbiAgfVxufVxuXG4oQ29uZGl0aW9uQWN0aW9uIGFzIGFueSkuZGVmYXVsdENvbmZpZyA9IHtcbiAgY29uZGl0aW9uOiBcInN0YXRlXCIsXG4gIC4uLihTdGF0ZUNvbmRpdGlvbiBhcyBhbnkpLmRlZmF1bHRDb25maWcsXG59O1xuIiwiaW1wb3J0IHsgaCwgQ29tcG9uZW50IH0gZnJvbSBcInByZWFjdFwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItaW5wdXQvcGFwZXItaW5wdXRcIjtcbmltcG9ydCB7IG9uQ2hhbmdlRXZlbnQgfSBmcm9tIFwiLi4vLi4vLi4vLi4vY29tbW9uL3ByZWFjdC9ldmVudFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEZWxheUFjdGlvbiBleHRlbmRzIENvbXBvbmVudDxhbnk+IHtcbiAgcHJpdmF0ZSBvbkNoYW5nZTogKG9iajogYW55KSA9PiB2b2lkO1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuXG4gICAgdGhpcy5vbkNoYW5nZSA9IG9uQ2hhbmdlRXZlbnQuYmluZCh0aGlzLCBcImFjdGlvblwiKTtcbiAgfVxuXG4gIHB1YmxpYyByZW5kZXIoeyBhY3Rpb24sIGxvY2FsaXplIH0pIHtcbiAgICBjb25zdCB7IGRlbGF5IH0gPSBhY3Rpb247XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxwYXBlci1pbnB1dFxuICAgICAgICAgIGxhYmVsPXtsb2NhbGl6ZShcbiAgICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLmF1dG9tYXRpb24uZWRpdG9yLmFjdGlvbnMudHlwZS5kZWxheS5kZWxheVwiXG4gICAgICAgICAgKX1cbiAgICAgICAgICBuYW1lPVwiZGVsYXlcIlxuICAgICAgICAgIHZhbHVlPXtkZWxheX1cbiAgICAgICAgICBvbnZhbHVlLWNoYW5nZWQ9e3RoaXMub25DaGFuZ2V9XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbihEZWxheUFjdGlvbiBhcyBhbnkpLmRlZmF1bHRDb25maWcgPSB7XG4gIGRlbGF5OiBcIlwiLFxufTtcbiIsImltcG9ydCB7IGgsIENvbXBvbmVudCB9IGZyb20gXCJwcmVhY3RcIjtcblxuaW1wb3J0IFwiLi4vLi4vLi4vLi4vY29tcG9uZW50cy9kZXZpY2UvaGEtZGV2aWNlLXBpY2tlclwiO1xuaW1wb3J0IFwiLi4vLi4vLi4vLi4vY29tcG9uZW50cy9kZXZpY2UvaGEtZGV2aWNlLWFjdGlvbi1waWNrZXJcIjtcbmltcG9ydCB7IEhvbWVBc3Npc3RhbnQgfSBmcm9tIFwiLi4vLi4vLi4vLi4vdHlwZXNcIjtcbmltcG9ydCB7IERldmljZUFjdGlvbiB9IGZyb20gXCIuLi8uLi8uLi8uLi9kYXRhL3NjcmlwdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEZXZpY2VBY3Rpb25FZGl0b3IgZXh0ZW5kcyBDb21wb25lbnQ8XG4gIHtcbiAgICBpbmRleDogbnVtYmVyO1xuICAgIGFjdGlvbjogRGV2aWNlQWN0aW9uO1xuICAgIGhhc3M6IEhvbWVBc3Npc3RhbnQ7XG4gICAgb25DaGFuZ2UoaW5kZXg6IG51bWJlciwgYWN0aW9uOiBEZXZpY2VBY3Rpb24pO1xuICB9LFxuICB7XG4gICAgZGV2aWNlX2lkOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIH1cbj4ge1xuICBwdWJsaWMgc3RhdGljIGRlZmF1bHRDb25maWc6IERldmljZUFjdGlvbiA9IHtcbiAgICBkZXZpY2VfaWQ6IFwiXCIsXG4gICAgZG9tYWluOiBcIlwiLFxuICAgIGVudGl0eV9pZDogXCJcIixcbiAgfTtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuZGV2aWNlUGlja2VkID0gdGhpcy5kZXZpY2VQaWNrZWQuYmluZCh0aGlzKTtcbiAgICB0aGlzLmRldmljZUFjdGlvblBpY2tlZCA9IHRoaXMuZGV2aWNlQWN0aW9uUGlja2VkLmJpbmQodGhpcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHsgZGV2aWNlX2lkOiB1bmRlZmluZWQgfTtcbiAgfVxuXG4gIHB1YmxpYyByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBhY3Rpb24sIGhhc3MgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgZGV2aWNlSWQgPSB0aGlzLnN0YXRlLmRldmljZV9pZCB8fCBhY3Rpb24uZGV2aWNlX2lkO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxoYS1kZXZpY2UtcGlja2VyXG4gICAgICAgICAgdmFsdWU9e2RldmljZUlkfVxuICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmRldmljZVBpY2tlZH1cbiAgICAgICAgICBoYXNzPXtoYXNzfVxuICAgICAgICAgIGxhYmVsPVwiRGV2aWNlXCJcbiAgICAgICAgLz5cbiAgICAgICAgPGhhLWRldmljZS1hY3Rpb24tcGlja2VyXG4gICAgICAgICAgdmFsdWU9e2FjdGlvbn1cbiAgICAgICAgICBkZXZpY2VJZD17ZGV2aWNlSWR9XG4gICAgICAgICAgb25DaGFuZ2U9e3RoaXMuZGV2aWNlQWN0aW9uUGlja2VkfVxuICAgICAgICAgIGhhc3M9e2hhc3N9XG4gICAgICAgICAgbGFiZWw9XCJBY3Rpb25cIlxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgZGV2aWNlUGlja2VkKGV2KSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGRldmljZV9pZDogZXYudGFyZ2V0LnZhbHVlIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBkZXZpY2VBY3Rpb25QaWNrZWQoZXYpIHtcbiAgICBjb25zdCBkZXZpY2VBY3Rpb24gPSB7IC4uLmV2LnRhcmdldC52YWx1ZSB9O1xuICAgIHRoaXMucHJvcHMub25DaGFuZ2UodGhpcy5wcm9wcy5pbmRleCwgZGV2aWNlQWN0aW9uKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgaCwgQ29tcG9uZW50IH0gZnJvbSBcInByZWFjdFwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItaW5wdXQvcGFwZXItaW5wdXRcIjtcblxuaW1wb3J0IFlBTUxUZXh0QXJlYSBmcm9tIFwiLi4veWFtbF90ZXh0YXJlYVwiO1xuaW1wb3J0IHsgb25DaGFuZ2VFdmVudCB9IGZyb20gXCIuLi8uLi8uLi8uLi9jb21tb24vcHJlYWN0L2V2ZW50XCI7XG5pbXBvcnQgeyBMb2NhbGl6ZUZ1bmMgfSBmcm9tIFwiLi4vLi4vLi4vLi4vY29tbW9uL3RyYW5zbGF0aW9ucy9sb2NhbGl6ZVwiO1xuaW1wb3J0IHsgRXZlbnRBY3Rpb24gfSBmcm9tIFwiLi4vLi4vLi4vLi4vZGF0YS9zY3JpcHRcIjtcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgaW5kZXg6IG51bWJlcjtcbiAgYWN0aW9uOiBFdmVudEFjdGlvbjtcbiAgbG9jYWxpemU6IExvY2FsaXplRnVuYztcbiAgb25DaGFuZ2U6IChpbmRleDogbnVtYmVyLCBhY3Rpb246IEV2ZW50QWN0aW9uKSA9PiB2b2lkO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFdmVudEFjdGlvbkZvcm0gZXh0ZW5kcyBDb21wb25lbnQ8UHJvcHM+IHtcbiAgcHJpdmF0ZSBvbkNoYW5nZTogKGV2ZW50OiBFdmVudCkgPT4gdm9pZDtcblxuICBzdGF0aWMgZ2V0IGRlZmF1bHRDb25maWcoKTogRXZlbnRBY3Rpb24ge1xuICAgIHJldHVybiB7XG4gICAgICBldmVudDogXCJcIixcbiAgICAgIGV2ZW50X2RhdGE6IHt9LFxuICAgIH07XG4gIH1cblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuXG4gICAgdGhpcy5vbkNoYW5nZSA9IG9uQ2hhbmdlRXZlbnQuYmluZCh0aGlzLCBcImFjdGlvblwiKTtcbiAgICB0aGlzLnNlcnZpY2VEYXRhQ2hhbmdlZCA9IHRoaXMuc2VydmljZURhdGFDaGFuZ2VkLmJpbmQodGhpcyk7XG4gIH1cblxuICBwdWJsaWMgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIGFjdGlvbjogeyBldmVudCwgZXZlbnRfZGF0YSB9LFxuICAgICAgbG9jYWxpemUsXG4gICAgfSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxwYXBlci1pbnB1dFxuICAgICAgICAgIGxhYmVsPXtsb2NhbGl6ZShcbiAgICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLmF1dG9tYXRpb24uZWRpdG9yLmFjdGlvbnMudHlwZS5ldmVudC5ldmVudFwiXG4gICAgICAgICAgKX1cbiAgICAgICAgICBuYW1lPVwiZXZlbnRcIlxuICAgICAgICAgIHZhbHVlPXtldmVudH1cbiAgICAgICAgICBvbnZhbHVlLWNoYW5nZWQ9e3RoaXMub25DaGFuZ2V9XG4gICAgICAgIC8+XG4gICAgICAgIDxZQU1MVGV4dEFyZWFcbiAgICAgICAgICBsYWJlbD17bG9jYWxpemUoXG4gICAgICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy5hdXRvbWF0aW9uLmVkaXRvci5hY3Rpb25zLnR5cGUuZXZlbnQuc2VydmljZV9kYXRhXCJcbiAgICAgICAgICApfVxuICAgICAgICAgIHZhbHVlPXtldmVudF9kYXRhfVxuICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLnNlcnZpY2VEYXRhQ2hhbmdlZH1cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIHNlcnZpY2VEYXRhQ2hhbmdlZChldmVudERhdGEpIHtcbiAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKHRoaXMucHJvcHMuaW5kZXgsIHtcbiAgICAgIC4uLnRoaXMucHJvcHMuYWN0aW9uLFxuICAgICAgZXZlbnRfZGF0YTogZXZlbnREYXRhLFxuICAgIH0pO1xuICB9XG59XG4iLCJpbXBvcnQgeyBoLCBDb21wb25lbnQgfSBmcm9tIFwicHJlYWN0XCI7XG5pbXBvcnQgXCJAbWF0ZXJpYWwvbXdjLWJ1dHRvblwiO1xuaW1wb3J0IFwiLi4vLi4vLi4vLi4vY29tcG9uZW50cy9oYS1jYXJkXCI7XG5cbmltcG9ydCBBY3Rpb25Sb3cgZnJvbSBcIi4vYWN0aW9uX3Jvd1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTY3JpcHQgZXh0ZW5kcyBDb21wb25lbnQ8YW55PiB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG5cbiAgICB0aGlzLmFkZEFjdGlvbiA9IHRoaXMuYWRkQWN0aW9uLmJpbmQodGhpcyk7XG4gICAgdGhpcy5hY3Rpb25DaGFuZ2VkID0gdGhpcy5hY3Rpb25DaGFuZ2VkLmJpbmQodGhpcyk7XG4gIH1cblxuICBwdWJsaWMgYWRkQWN0aW9uKCkge1xuICAgIGNvbnN0IHNjcmlwdCA9IHRoaXMucHJvcHMuc2NyaXB0LmNvbmNhdCh7XG4gICAgICBzZXJ2aWNlOiBcIlwiLFxuICAgIH0pO1xuXG4gICAgdGhpcy5wcm9wcy5vbkNoYW5nZShzY3JpcHQpO1xuICB9XG5cbiAgcHVibGljIGFjdGlvbkNoYW5nZWQoaW5kZXgsIG5ld1ZhbHVlKSB7XG4gICAgY29uc3Qgc2NyaXB0ID0gdGhpcy5wcm9wcy5zY3JpcHQuY29uY2F0KCk7XG5cbiAgICBpZiAobmV3VmFsdWUgPT09IG51bGwpIHtcbiAgICAgIHNjcmlwdC5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzY3JpcHRbaW5kZXhdID0gbmV3VmFsdWU7XG4gICAgfVxuXG4gICAgdGhpcy5wcm9wcy5vbkNoYW5nZShzY3JpcHQpO1xuICB9XG5cbiAgcHVibGljIHJlbmRlcih7IHNjcmlwdCwgaGFzcywgbG9jYWxpemUgfSkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzPVwic2NyaXB0XCI+XG4gICAgICAgIHtzY3JpcHQubWFwKChhY3QsIGlkeCkgPT4gKFxuICAgICAgICAgIDxBY3Rpb25Sb3dcbiAgICAgICAgICAgIGluZGV4PXtpZHh9XG4gICAgICAgICAgICBhY3Rpb249e2FjdH1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmFjdGlvbkNoYW5nZWR9XG4gICAgICAgICAgICBoYXNzPXtoYXNzfVxuICAgICAgICAgICAgbG9jYWxpemU9e2xvY2FsaXplfVxuICAgICAgICAgIC8+XG4gICAgICAgICkpfVxuICAgICAgICA8aGEtY2FyZD5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1hY3Rpb25zIGFkZC1jYXJkXCI+XG4gICAgICAgICAgICA8bXdjLWJ1dHRvbiBvblRhcD17dGhpcy5hZGRBY3Rpb259PlxuICAgICAgICAgICAgICB7bG9jYWxpemUoXCJ1aS5wYW5lbC5jb25maWcuYXV0b21hdGlvbi5lZGl0b3IuYWN0aW9ucy5hZGRcIil9XG4gICAgICAgICAgICA8L213Yy1idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvaGEtY2FyZD5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cbiIsImltcG9ydCB7IGgsIENvbXBvbmVudCB9IGZyb20gXCJwcmVhY3RcIjtcbmltcG9ydCBcIi4uLy4uLy4uLy4uL2NvbXBvbmVudHMvZW50aXR5L2hhLWVudGl0eS1waWNrZXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2NlbmVBY3Rpb24gZXh0ZW5kcyBDb21wb25lbnQ8YW55PiB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG5cbiAgICB0aGlzLnNjZW5lQ2hhbmdlZCA9IHRoaXMuc2NlbmVDaGFuZ2VkLmJpbmQodGhpcyk7XG4gIH1cblxuICBwdWJsaWMgc2NlbmVDaGFuZ2VkKGV2OiBhbnkpIHtcbiAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKHRoaXMucHJvcHMuaW5kZXgsIHtcbiAgICAgIC4uLnRoaXMucHJvcHMuYWN0aW9uLFxuICAgICAgc2NlbmU6IGV2LnRhcmdldC52YWx1ZSxcbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyByZW5kZXIoeyBhY3Rpb24sIGhhc3MgfSkge1xuICAgIGNvbnN0IHsgc2NlbmUgfSA9IGFjdGlvbjtcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8aGEtZW50aXR5LXBpY2tlclxuICAgICAgICAgIHZhbHVlPXtzY2VuZX1cbiAgICAgICAgICBvbkNoYW5nZT17dGhpcy5zY2VuZUNoYW5nZWR9XG4gICAgICAgICAgaGFzcz17aGFzc31cbiAgICAgICAgICBkb21haW5GaWx0ZXI9XCJzY2VuZVwiXG4gICAgICAgICAgYWxsb3dDdXN0b21FbnRpdHlcbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuKFNjZW5lQWN0aW9uIGFzIGFueSkuZGVmYXVsdENvbmZpZyA9IHtcbiAgYWxpYXM6IFwiXCIsXG4gIHNjZW5lOiBcIlwiLFxufTtcbiIsImltcG9ydCB7IGgsIENvbXBvbmVudCB9IGZyb20gXCJwcmVhY3RcIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWlucHV0L3BhcGVyLWlucHV0XCI7XG5cbmltcG9ydCBcIi4uLy4uLy4uLy4uL2NvbXBvbmVudHMvaGEtdGV4dGFyZWFcIjtcblxuaW1wb3J0IHsgb25DaGFuZ2VFdmVudCB9IGZyb20gXCIuLi8uLi8uLi8uLi9jb21tb24vcHJlYWN0L2V2ZW50XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFdhaXRBY3Rpb24gZXh0ZW5kcyBDb21wb25lbnQ8YW55PiB7XG4gIHByaXZhdGUgb25DaGFuZ2U6IChvYmo6IGFueSkgPT4gdm9pZDtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcblxuICAgIHRoaXMub25DaGFuZ2UgPSBvbkNoYW5nZUV2ZW50LmJpbmQodGhpcywgXCJhY3Rpb25cIik7XG4gICAgdGhpcy5vblRlbXBsYXRlQ2hhbmdlID0gdGhpcy5vblRlbXBsYXRlQ2hhbmdlLmJpbmQodGhpcyk7XG4gIH1cblxuICAvLyBHZXRzIGZpcmVkIG9uIG1vdW50LiBJZiBlbXB0eSwgb25DaGFuZ2VFdmVudCByZW1vdmVzIGF0dHJpYnV0ZS5cbiAgLy8gV2l0aG91dCB0aGUgYXR0cmlidXRlIHRoaXMgYWN0aW9uIGlzIG5vIGxvbmdlciBtYXRjaGVkIHRvIHRoaXMgY29tcG9uZW50LlxuICBwdWJsaWMgb25UZW1wbGF0ZUNoYW5nZShldikge1xuICAgIHRoaXMucHJvcHMub25DaGFuZ2UodGhpcy5wcm9wcy5pbmRleCwge1xuICAgICAgLi4udGhpcy5wcm9wcy5hY3Rpb24sXG4gICAgICBbZXYudGFyZ2V0LmdldEF0dHJpYnV0ZShcIm5hbWVcIildOiBldi50YXJnZXQudmFsdWUsXG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgcmVuZGVyKHsgYWN0aW9uLCBsb2NhbGl6ZSB9KSB7XG4gICAgLyogZXNsaW50LWRpc2FibGUgY2FtZWxjYXNlICovXG4gICAgY29uc3QgeyB3YWl0X3RlbXBsYXRlLCB0aW1lb3V0IH0gPSBhY3Rpb247XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxoYS10ZXh0YXJlYVxuICAgICAgICAgIGxhYmVsPXtsb2NhbGl6ZShcbiAgICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLmF1dG9tYXRpb24uZWRpdG9yLmFjdGlvbnMudHlwZS53YWl0X3RlbXBsYXRlLndhaXRfdGVtcGxhdGVcIlxuICAgICAgICAgICl9XG4gICAgICAgICAgbmFtZT1cIndhaXRfdGVtcGxhdGVcIlxuICAgICAgICAgIHZhbHVlPXt3YWl0X3RlbXBsYXRlfVxuICAgICAgICAgIG9udmFsdWUtY2hhbmdlZD17dGhpcy5vblRlbXBsYXRlQ2hhbmdlfVxuICAgICAgICAgIGRpcj1cImx0clwiXG4gICAgICAgIC8+XG4gICAgICAgIDxwYXBlci1pbnB1dFxuICAgICAgICAgIGxhYmVsPXtsb2NhbGl6ZShcbiAgICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLmF1dG9tYXRpb24uZWRpdG9yLmFjdGlvbnMudHlwZS53YWl0X3RlbXBsYXRlLnRpbWVvdXRcIlxuICAgICAgICAgICl9XG4gICAgICAgICAgbmFtZT1cInRpbWVvdXRcIlxuICAgICAgICAgIHZhbHVlPXt0aW1lb3V0fVxuICAgICAgICAgIG9udmFsdWUtY2hhbmdlZD17dGhpcy5vbkNoYW5nZX1cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuKFdhaXRBY3Rpb24gYXMgYW55KS5kZWZhdWx0Q29uZmlnID0ge1xuICB3YWl0X3RlbXBsYXRlOiBcIlwiLFxuICB0aW1lb3V0OiBcIlwiLFxufTtcbiIsImltcG9ydCB7IGgsIENvbXBvbmVudCB9IGZyb20gXCJwcmVhY3RcIjtcbmltcG9ydCB5YW1sIGZyb20gXCJqcy15YW1sXCI7XG5pbXBvcnQgXCIuLi8uLi8uLi9jb21wb25lbnRzL2hhLWNvZGUtZWRpdG9yXCI7XG5cbmNvbnN0IGlzRW1wdHkgPSAob2JqOiBvYmplY3QpID0+IHtcbiAgZm9yIChjb25zdCBrZXkgaW4gb2JqKSB7XG4gICAgaWYgKG9iai5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIHJldHVybiB0cnVlO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgWUFNTFRleHRBcmVhIGV4dGVuZHMgQ29tcG9uZW50PGFueSwgYW55PiB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgbGV0IHZhbHVlOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gICAgdHJ5IHtcbiAgICAgIHZhbHVlID1cbiAgICAgICAgcHJvcHMudmFsdWUgJiYgIWlzRW1wdHkocHJvcHMudmFsdWUpXG4gICAgICAgICAgPyB5YW1sLnNhZmVEdW1wKHByb3BzLnZhbHVlKVxuICAgICAgICAgIDogdW5kZWZpbmVkO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgYWxlcnQoYFRoZXJlIHdhcyBhbiBlcnJvciBjb252ZXJ0aW5nIHRvIFlBTUw6ICR7ZXJyfWApO1xuICAgIH1cblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBpc3ZhbGlkOiB0cnVlLFxuICAgICAgdmFsdWUsXG4gICAgfTtcblxuICAgIHRoaXMub25DaGFuZ2UgPSB0aGlzLm9uQ2hhbmdlLmJpbmQodGhpcyk7XG4gIH1cblxuICBwdWJsaWMgb25DaGFuZ2UoZXYpIHtcbiAgICBjb25zdCB2YWx1ZSA9IGV2LmRldGFpbC52YWx1ZTtcbiAgICBsZXQgcGFyc2VkO1xuICAgIGxldCBpc1ZhbGlkID0gdHJ1ZTtcblxuICAgIGlmICh2YWx1ZSkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgcGFyc2VkID0geWFtbC5zYWZlTG9hZCh2YWx1ZSk7XG4gICAgICAgIGlzVmFsaWQgPSB0cnVlO1xuICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIC8vIEludmFsaWQgWUFNTFxuICAgICAgICBpc1ZhbGlkID0gZmFsc2U7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHBhcnNlZCA9IHt9O1xuICAgIH1cblxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgdmFsdWUsXG4gICAgICBpc1ZhbGlkLFxuICAgIH0pO1xuICAgIGlmIChpc1ZhbGlkKSB7XG4gICAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKHBhcnNlZCk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIHJlbmRlcih7IGxhYmVsIH0sIHsgdmFsdWUsIGlzVmFsaWQgfSkge1xuICAgIGNvbnN0IHN0eWxlOiBhbnkgPSB7XG4gICAgICBtaW5XaWR0aDogMzAwLFxuICAgICAgd2lkdGg6IFwiMTAwJVwiLFxuICAgIH07XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxwPntsYWJlbH08L3A+XG4gICAgICAgIDxoYS1jb2RlLWVkaXRvclxuICAgICAgICAgIG1vZGU9XCJ5YW1sXCJcbiAgICAgICAgICBzdHlsZT17c3R5bGV9XG4gICAgICAgICAgdmFsdWU9e3ZhbHVlfVxuICAgICAgICAgIGVycm9yPXtpc1ZhbGlkID09PSBmYWxzZX1cbiAgICAgICAgICBvbnZhbHVlLWNoYW5nZWQ9e3RoaXMub25DaGFuZ2V9XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG4iLCJpbnRlcmZhY2UgTG9hZGVkQ29kZU1pcnJvciB7XG4gIGNvZGVNaXJyb3I6IGFueTtcbiAgY29kZU1pcnJvckNzczogYW55O1xufVxuXG5sZXQgbG9hZGVkOiBQcm9taXNlPExvYWRlZENvZGVNaXJyb3I+O1xuXG5leHBvcnQgY29uc3QgbG9hZENvZGVNaXJyb3IgPSBhc3luYyAoKTogUHJvbWlzZTxMb2FkZWRDb2RlTWlycm9yPiA9PiB7XG4gIGlmICghbG9hZGVkKSB7XG4gICAgbG9hZGVkID0gaW1wb3J0KC8qIHdlYnBhY2tDaHVua05hbWU6IFwiY29kZW1pcnJvclwiICovIFwiLi9jb2RlbWlycm9yXCIpO1xuICB9XG4gIHJldHVybiBsb2FkZWQ7XG59O1xuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFHQTs7Ozs7Ozs7Ozs7OztBQ05BO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUN4QkE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUdBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1JBO0FBQ0E7QUFLQTtBQUNBO0FBR0E7QUFBQTtBQUlBO0FBQUE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQVhBO0FBQ0E7O0FBWUE7QUFkQTtBQURBO0FBQ0E7QUFlQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFTQTtBQUNBO0FBSUE7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQXVCQTtBQUFBO0FBbEJBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQXNCQTtBQUNBO0FBQ0E7O0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBS0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7OztBQUFBO0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7QUFnQ0E7QUFqQ0E7QUFDQTtBQW9DQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7OztBQUNBO0FBQUE7QUFDQTs7QUFBQTs7O0FBRUE7OztBQUhBO0FBS0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7QUFBQTtBQUNBOzs7OztBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFXQTs7O0FBQUE7QUF2S0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBR0E7QUFBQTtBQUFBO0FBSUE7QUFBQTtBQUFBO0FBOEpBO0FBQUE7QUEzS0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZCQTtBQUNBO0FBS0E7QUFDQTtBQUdBO0FBQUE7QUFNQTtBQUFBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVpBO0FBQ0E7O0FBYUE7QUFqQkE7QUFEQTtBQUNBO0FBa0JBO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzVCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVVBO0FBR0E7QUFDQTtBQUlBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQStEQTtBQTdEQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQWlCQTtBQUlBO0FBRUE7QUFBQTtBQUNBO0FBQ0E7OztBQUFBO0FBRUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQVdBOzs7QUFBQTtBQTFFQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFKQTtBQURBO0FBQ0E7QUE0RUE7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQVlBO0FBSUE7QUFLQTtBQUNBO0FBZUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBYUE7QUFNQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUdBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBOztBQXdHQTtBQXJHQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBTUE7QUFlQTtBQXFCQTtBQVlBO0FBbENBO0FBQ0E7QUFVQTtBQWFBO0FBY0E7QUFFQTtBQUFBO0FBQ0E7QUFDQTs7O0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUNBO0FBV0E7OztBQUFBO0FBaEpBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBREE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQXVJQTtBQUFBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFNQTtBQUNBO0FBQ0E7QUFlQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQWtJQTtBQWhJQTtBQUlBO0FBQ0E7QUFDQTtBQU5BO0FBQ0E7QUFDQTs7O0FBQUE7QUFNQTtBQUFBO0FBQ0E7QUFDQTs7O0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7O0FBQ0E7O0FBQUE7QUFFQTtBQUVBO0FBRUE7QUFpQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFySUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBTkE7QUFEQTtBQUNBO0FBd0lBO0FBQUE7QUF4SUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakJBO0FBTUE7QUFFQTtBQUdBO0FBQ0E7QUFHQTtBQUFBO0FBQUE7O0FBMkJBO0FBMUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBWUE7QUFIQTtBQU9BO0FBMUJBO0FBREE7QUFDQTtBQTJCQTtBQUFBO0FBM0JBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZkE7QUFJQTtBQUlBO0FBQ0E7QUFBQTtBQUFBOztBQVVBO0FBVEE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBOztBQVFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzNCQTs7Ozs7Ozs7OztBQVdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBWUE7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUpBO0FBU0E7Ozs7QUExQkE7QUFDQTtBQTRCQTs7Ozs7Ozs7Ozs7Ozs7OztBQy9CQTtBQUNBO0FBR0E7QUFDQTtBQUFBO0FBQUE7O0FBZ0RBO0FBM0NBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFoREE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsQkE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFHQTs7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBSUE7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFLQTtBQUdBO0FBRUE7QUFFQTtBQU1BO0FBY0E7QUFTQTtBQUNBO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQUE7QUFDQTtBQUFBO0FBR0E7O0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFPQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBTUE7QUFJQTtBQUNBO0FBS0E7QUFRQTtBQUlBO0FBQ0E7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQy9EQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBSUE7QUFBQTtBQUdBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBTUE7QUFPQTtBQVVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7O0FBQ0E7QUFFQTtBQUNBOztBQUFBOzs7QUFDQTs7O0FBRkE7QUFHQTs7Ozs7QUFDQTtBQUVBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUlBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUtBO0FBQ0E7QUFBQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQy9IQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQUE7QUFDQTtBQUFBO0FBR0E7QUFDQTs7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQVNBO0FBQ0E7QUFDQTtBQU9BO0FBQ0E7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hEQTtBQUVBO0FBRUE7QUFBQTtBQUVBO0FBQUE7QUFEQTtBQUdBOztBQUNBO0FBRUE7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFRQTtBQUNBO0FBQUE7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3Q0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQUE7QUFFQTtBQUFBO0FBR0E7QUFDQTs7QUFDQTtBQUVBO0FBQ0E7QUFJQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQU1BO0FBUUE7QUFRQTtBQVdBO0FBQ0E7QUFBQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFBQTtBQUVBO0FBQUE7QUFHQTtBQUNBOztBQUNBO0FBRUE7QUFDQTtBQUlBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFNQTtBQVFBOztBQUFBO0FBR0E7QUFDQTtBQUFBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuREE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQUE7QUFLQTtBQUFBO0FBR0E7QUFDQTtBQUNBOztBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFLQTtBQU1BO0FBS0E7QUFPQTtBQVVBO0FBS0E7QUFNQTtBQUtBO0FBT0E7QUFXQTtBQUNBO0FBQUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzR0E7QUFDQTtBQUVBO0FBRUE7QUFBQTtBQUVBO0FBQUE7QUFHQTs7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQVdBO0FBQ0E7QUFBQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsQ0E7QUFDQTtBQUVBO0FBRUE7QUFBQTtBQUVBO0FBQUE7QUFHQTs7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQVFBO0FBVUE7QUFDQTtBQUFBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQUFBO0FBR0E7QUFDQTs7QUFDQTtBQUVBO0FBQ0E7QUFJQTtBQUVBO0FBQ0E7QUFJQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQVVBO0FBWUE7QUFDQTtBQUFBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUdBOztBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUtBO0FBR0E7QUFDQTtBQUVBO0FBTUE7QUFjQTtBQVNBO0FBQ0E7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFHQTs7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQU9BO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFNQTtBQUlBO0FBQ0E7QUFLQTtBQVFBO0FBSUE7QUFDQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQy9EQTtBQUNBO0FBRUE7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUdBO0FBQ0E7O0FBQ0E7QUFFQTtBQUNBO0FBSUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFFQTtBQUVBO0FBS0E7QUFTQTtBQUNBO0FBQUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xEQTtBQUVBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7O0FBYUE7QUFaQTtBQUNBO0FBQUE7QUFDQTtBQVNBO0FBQ0E7QUFBQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BCQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBRUE7QUFBQTtBQUdBOztBQUNBO0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQVVBO0FBQ0E7QUFBQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvQkE7QUFFQTtBQUNBO0FBSUE7QUFBQTtBQWlCQTtBQUFBO0FBRUE7QUFDQTtBQUNBOztBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQU1BO0FBU0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQTNDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBd0NBO0FBQUE7QUF2REE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUEE7QUFDQTtBQUVBO0FBQ0E7QUFXQTtBQUFBO0FBVUE7QUFBQTtBQUdBO0FBQ0E7O0FBQ0E7QUFaQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQUE7QUFTQTtBQUNBO0FBSUE7QUFFQTtBQVFBO0FBU0E7QUFFQTtBQUNBO0FBSUE7QUFDQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUdBO0FBQ0E7O0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFTQTtBQUNBO0FBQ0E7QUFPQTtBQUNBO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4REE7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQUFBO0FBR0E7O0FBQ0E7QUFFQTtBQUNBO0FBSUE7QUFFQTtBQUFBO0FBQ0E7QUFFQTtBQUVBO0FBU0E7QUFDQTtBQUFBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JDQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBQUE7QUFFQTtBQUFBO0FBR0E7QUFDQTs7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7QUFDQTtBQUlBO0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBU0E7QUFVQTtBQUNBO0FBQUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkRBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFTQTtBQUNBO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFFQTtBQUVBOztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBOzs7OztBIiwic291cmNlUm9vdCI6IiJ9