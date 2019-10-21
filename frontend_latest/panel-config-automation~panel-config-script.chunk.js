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
const hasLocation = (stateObj) => {
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
// interface OnChangeComponent {
//   props: {
//     index: number;
//     onChange(index: number, data: object);
//   };
// }
// export function onChangeEvent(this: OnChangeComponent, prop, ev) {
function onChangeEvent(prop, ev) {
    const origData = this.props[prop];
    if (ev.target.value === origData[ev.target.name]) {
        return;
    }
    const data = Object.assign({}, origData);
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
    () => null, mountEl);
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





let HaDeviceActionPicker = class HaDeviceActionPicker extends _ha_device_automation_picker__WEBPACK_IMPORTED_MODULE_4__["HaDeviceAutomationPicker"] {
    constructor() {
        super(_data_device_automation__WEBPACK_IMPORTED_MODULE_2__["localizeDeviceAutomationAction"], _data_device_automation__WEBPACK_IMPORTED_MODULE_2__["fetchDeviceActions"], (deviceId) => ({
            device_id: deviceId || "",
            domain: "",
            entity_id: "",
        }));
        this.NO_AUTOMATION_TEXT = "No actions";
        this.UNKNOWN_AUTOMATION_TEXT = "Unknown action";
    }
};
HaDeviceActionPicker = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["customElement"])("ha-device-action-picker")
], HaDeviceActionPicker);


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









const NO_AUTOMATION_KEY = "NO_AUTOMATION";
const UNKNOWN_AUTOMATION_KEY = "UNKNOWN_AUTOMATION";
class HaDeviceAutomationPicker extends lit_element__WEBPACK_IMPORTED_MODULE_5__["LitElement"] {
    constructor(localizeDeviceAutomation, fetchDeviceAutomations, createNoAutomation) {
        super();
        this.NO_AUTOMATION_TEXT = "No automations";
        this.UNKNOWN_AUTOMATION_TEXT = "Unknown automation";
        this._automations = [];
        // Trigger an empty render so we start with a clean DOM.
        // paper-listbox does not like changing things around.
        this._renderEmpty = false;
        this._localizeDeviceAutomation = localizeDeviceAutomation;
        this._fetchDeviceAutomations = fetchDeviceAutomations;
        this._createNoAutomation = createNoAutomation;
    }
    get _key() {
        if (!this.value ||
            Object(_data_device_automation__WEBPACK_IMPORTED_MODULE_7__["deviceAutomationsEqual"])(this._createNoAutomation(this.deviceId), this.value)) {
            return NO_AUTOMATION_KEY;
        }
        const idx = this._automations.findIndex((automation) => Object(_data_device_automation__WEBPACK_IMPORTED_MODULE_7__["deviceAutomationsEqual"])(automation, this.value));
        if (idx === -1) {
            return UNKNOWN_AUTOMATION_KEY;
        }
        return `${this._automations[idx].device_id}_${idx}`;
    }
    render() {
        if (this._renderEmpty) {
            return lit_element__WEBPACK_IMPORTED_MODULE_5__["html"] ``;
        }
        return lit_element__WEBPACK_IMPORTED_MODULE_5__["html"] `
      <ha-paper-dropdown-menu
        .label=${this.label}
        .value=${this.value
            ? this._localizeDeviceAutomation(this.hass, this.value)
            : ""}
        ?disabled=${this._automations.length === 0}
      >
        <paper-listbox
          slot="dropdown-content"
          .selected=${this._key}
          attr-for-selected="key"
          @iron-select=${this._automationChanged}
        >
          <paper-item
            key=${NO_AUTOMATION_KEY}
            .automation=${this._createNoAutomation(this.deviceId)}
            hidden
          >
            ${this.NO_AUTOMATION_TEXT}
          </paper-item>
          <paper-item
            key=${UNKNOWN_AUTOMATION_KEY}
            .automation=${this.value}
            hidden
          >
            ${this.UNKNOWN_AUTOMATION_TEXT}
          </paper-item>
          ${this._automations.map((automation, idx) => lit_element__WEBPACK_IMPORTED_MODULE_5__["html"] `
              <paper-item
                key=${`${this.deviceId}_${idx}`}
                .automation=${automation}
              >
                ${this._localizeDeviceAutomation(this.hass, automation)}
              </paper-item>
            `)}
        </paper-listbox>
      </ha-paper-dropdown-menu>
    `;
    }
    updated(changedProps) {
        super.updated(changedProps);
        if (changedProps.has("deviceId")) {
            this._updateDeviceInfo();
        }
        // The value has changed, force the listbox to update
        if (changedProps.has("value") || changedProps.has("_renderEmpty")) {
            const listbox = this.shadowRoot.querySelector("paper-listbox");
            if (listbox) {
                listbox._selectSelected(this._key);
            }
        }
    }
    async _updateDeviceInfo() {
        this._automations = this.deviceId
            ? await this._fetchDeviceAutomations(this.hass, this.deviceId)
            : // No device, clear the list of automations
                [];
        // If there is no value, or if we have changed the device ID, reset the value.
        if (!this.value || this.value.device_id !== this.deviceId) {
            this._setValue(this._automations.length
                ? this._automations[0]
                : this._createNoAutomation(this.deviceId));
        }
        this._renderEmpty = true;
        await this.updateComplete;
        this._renderEmpty = false;
    }
    _automationChanged(ev) {
        this._setValue(ev.detail.item.automation);
    }
    _setValue(automation) {
        if (this.value && Object(_data_device_automation__WEBPACK_IMPORTED_MODULE_7__["deviceAutomationsEqual"])(automation, this.value)) {
            return;
        }
        this.value = automation;
        setTimeout(() => {
            Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_6__["fireEvent"])(this, "change");
        }, 0);
    }
    static get styles() {
        return lit_element__WEBPACK_IMPORTED_MODULE_5__["css"] `
      ha-paper-dropdown-menu {
        width: 100%;
      }
      paper-listbox {
        min-width: 200px;
      }
      paper-item {
        cursor: pointer;
      }
    `;
    }
}
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





let HaDeviceConditionPicker = class HaDeviceConditionPicker extends _ha_device_automation_picker__WEBPACK_IMPORTED_MODULE_4__["HaDeviceAutomationPicker"] {
    constructor() {
        super(_data_device_automation__WEBPACK_IMPORTED_MODULE_2__["localizeDeviceAutomationCondition"], _data_device_automation__WEBPACK_IMPORTED_MODULE_2__["fetchDeviceConditions"], (deviceId) => ({
            device_id: deviceId || "",
            condition: "device",
            domain: "",
            entity_id: "",
        }));
        this.NO_AUTOMATION_TEXT = "No conditions";
        this.UNKNOWN_AUTOMATION_TEXT = "Unknown condition";
    }
};
HaDeviceConditionPicker = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["customElement"])("ha-device-condition-picker")
], HaDeviceConditionPicker);


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












let HaDevicePicker = class HaDevicePicker extends Object(_mixins_subscribe_mixin__WEBPACK_IMPORTED_MODULE_8__["SubscribeMixin"])(lit_element__WEBPACK_IMPORTED_MODULE_7__["LitElement"]) {
    constructor() {
        super(...arguments);
        this._sortedDevices = Object(memoize_one__WEBPACK_IMPORTED_MODULE_6__["default"])((devices) => {
            if (!devices || devices.length === 1) {
                return devices || [];
            }
            const sorted = [...devices];
            sorted.sort((a, b) => Object(_common_string_compare__WEBPACK_IMPORTED_MODULE_11__["compare"])(a.name || "", b.name || ""));
            return sorted;
        });
    }
    hassSubscribe() {
        return [
            Object(_data_device_registry__WEBPACK_IMPORTED_MODULE_10__["subscribeDeviceRegistry"])(this.hass.connection, (devices) => {
                this.devices = devices;
            }),
        ];
    }
    render() {
        return lit_element__WEBPACK_IMPORTED_MODULE_7__["html"] `
      <paper-dropdown-menu-light .label=${this.label}>
        <paper-listbox
          slot="dropdown-content"
          .selected=${this._value}
          attr-for-selected="data-device-id"
          @iron-select=${this._deviceChanged}
        >
          <paper-item data-device-id="">
            No device
          </paper-item>
          ${this._sortedDevices(this.devices).map((device) => lit_element__WEBPACK_IMPORTED_MODULE_7__["html"] `
              <paper-item data-device-id=${device.id}>
                ${device.name_by_user || device.name}
              </paper-item>
            `)}
        </paper-listbox>
      </paper-dropdown-menu-light>
    `;
    }
    get _value() {
        return this.value || "";
    }
    _deviceChanged(ev) {
        const newValue = ev.detail.item.dataset.deviceId;
        if (newValue !== this._value) {
            this.value = newValue;
            setTimeout(() => {
                Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_9__["fireEvent"])(this, "value-changed", { value: newValue });
                Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_9__["fireEvent"])(this, "change");
            }, 0);
        }
    }
    static get styles() {
        return lit_element__WEBPACK_IMPORTED_MODULE_7__["css"] `
      paper-dropdown-menu-light {
        width: 100%;
      }
      paper-listbox {
        min-width: 200px;
      }
      paper-item {
        cursor: pointer;
      }
    `;
    }
};
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











const rowRenderer = (root, _owner, model) => {
    if (!root.firstElementChild) {
        root.innerHTML = `
      <style>
        paper-icon-item {
          margin: -10px;
          padding: 0;
        }
      </style>
      <paper-icon-item>
        <state-badge state-obj="[[item]]" slot="item-icon"></state-badge>
        <paper-item-body two-line="">
          <div class='name'>[[_computeStateName(item)]]</div>
          <div secondary>[[item.entity_id]]</div>
        </paper-item-body>
      </paper-icon-item>
    `;
    }
    root.querySelector("state-badge").stateObj = model.item;
    root.querySelector(".name").textContent = Object(_common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_8__["computeStateName"])(model.item);
    root.querySelector("[secondary]").textContent = model.item.entity_id;
};
class HaEntityPicker extends lit_element__WEBPACK_IMPORTED_MODULE_9__["LitElement"] {
    constructor() {
        super(...arguments);
        this._getStates = Object(memoize_one__WEBPACK_IMPORTED_MODULE_6__["default"])((hass, domainFilter, entityFilter) => {
            let states = [];
            if (!hass) {
                return [];
            }
            let entityIds = Object.keys(hass.states);
            if (domainFilter) {
                entityIds = entityIds.filter((eid) => eid.substr(0, eid.indexOf(".")) === domainFilter);
            }
            states = entityIds.sort().map((key) => hass.states[key]);
            if (entityFilter) {
                states = states.filter((stateObj) => 
                // We always want to include the entity of the current value
                stateObj.entity_id === this.value || entityFilter(stateObj));
            }
            return states;
        });
    }
    updated(changedProps) {
        super.updated(changedProps);
        if (changedProps.has("hass") && !this._opened) {
            this._hass = this.hass;
        }
    }
    render() {
        const states = this._getStates(this._hass, this.domainFilter, this.entityFilter);
        return lit_element__WEBPACK_IMPORTED_MODULE_9__["html"] `
      <vaadin-combo-box-light
        item-value-path="entity_id"
        item-label-path="entity_id"
        .items=${states}
        .value=${this._value}
        .allowCustomValue=${this.allowCustomEntity}
        .renderer=${rowRenderer}
        @opened-changed=${this._openedChanged}
        @value-changed=${this._valueChanged}
      >
        <paper-input
          .autofocus=${this.autofocus}
          .label=${this.label === undefined && this._hass
            ? this._hass.localize("ui.components.entity.entity-picker.entity")
            : this.label}
          .value=${this._value}
          .disabled=${this.disabled}
          class="input"
          autocapitalize="none"
          autocomplete="off"
          autocorrect="off"
          spellcheck="false"
        >
          ${this.value
            ? lit_element__WEBPACK_IMPORTED_MODULE_9__["html"] `
                <paper-icon-button
                  aria-label="Clear"
                  slot="suffix"
                  class="clear-button"
                  icon="hass:close"
                  no-ripple
                >
                  Clear
                </paper-icon-button>
              `
            : ""}
          ${states.length > 0
            ? lit_element__WEBPACK_IMPORTED_MODULE_9__["html"] `
                <paper-icon-button
                  aria-label="Show entities"
                  slot="suffix"
                  class="toggle-button"
                  .icon=${this._opened ? "hass:menu-up" : "hass:menu-down"}
                >
                  Toggle
                </paper-icon-button>
              `
            : ""}
        </paper-input>
      </vaadin-combo-box-light>
    `;
    }
    get _value() {
        return this.value || "";
    }
    _openedChanged(ev) {
        this._opened = ev.detail.value;
    }
    _valueChanged(ev) {
        const newValue = ev.detail.value;
        if (newValue !== this._value) {
            this.value = ev.detail.value;
            setTimeout(() => {
                Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_10__["fireEvent"])(this, "value-changed", { value: this.value });
                Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_10__["fireEvent"])(this, "change");
            }, 0);
        }
    }
    static get styles() {
        return lit_element__WEBPACK_IMPORTED_MODULE_9__["css"] `
      paper-input > paper-icon-button {
        width: 24px;
        height: 24px;
        padding: 2px;
        color: var(--secondary-text-color);
      }
      [hidden] {
        display: none;
      }
    `;
    }
}
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
customElements.define("ha-entity-picker", HaEntityPicker);


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




let HaCodeEditor = class HaCodeEditor extends lit_element__WEBPACK_IMPORTED_MODULE_3__["UpdatingElement"] {
    constructor() {
        super(...arguments);
        this.autofocus = false;
        this.rtl = false;
        this.error = false;
        this._value = "";
    }
    set value(value) {
        this._value = value;
    }
    get value() {
        return this.codemirror ? this.codemirror.getValue() : this._value;
    }
    get hasComments() {
        return this.shadowRoot.querySelector("span.cm-comment") ? true : false;
    }
    connectedCallback() {
        super.connectedCallback();
        if (!this.codemirror) {
            return;
        }
        this.codemirror.refresh();
        if (this.autofocus !== false) {
            this.codemirror.focus();
        }
    }
    update(changedProps) {
        super.update(changedProps);
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
    }
    firstUpdated(changedProps) {
        super.firstUpdated(changedProps);
        this._load();
    }
    async _load() {
        const loaded = await Object(_resources_codemirror_ondemand__WEBPACK_IMPORTED_MODULE_1__["loadCodeMirror"])();
        const codeMirror = loaded.codeMirror;
        const shadowRoot = this.attachShadow({ mode: "open" });
        shadowRoot.innerHTML = `
    <style>
      ${loaded.codeMirrorCss}
      .CodeMirror {
        height: var(--code-mirror-height, auto);
        direction: var(--code-mirror-direction, ltr);
      }
      .CodeMirror-scroll {
        max-height: var(--code-mirror-max-height, --code-mirror-height);
      }
      .CodeMirror-gutters {
        border-right: 1px solid var(--paper-input-container-color, var(--secondary-text-color));
        background-color: var(--paper-dialog-background-color, var(--primary-background-color));
        transition: 0.2s ease border-right;
      }
      :host(.error-state) .CodeMirror-gutters {
        border-color: var(--error-state-color, red);
      }
      .CodeMirror-focused .CodeMirror-gutters {
        border-right: 2px solid var(--paper-input-container-focus-color, var(--primary-color));
      }
      .CodeMirror-linenumber {
        color: var(--paper-dialog-color, var(--primary-text-color));
      }
      .rtl .CodeMirror-vscrollbar {
        right: auto;
        left: 0px;
      }
      .rtl-gutter {
        width: 20px;
      }
    </style>`;
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
        this.codemirror.on("changes", () => this._onChange());
    }
    _onChange() {
        const newValue = this.value;
        if (newValue === this._value) {
            return;
        }
        this._value = newValue;
        Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_2__["fireEvent"])(this, "value-changed", { value: this._value });
    }
    _calcGutters() {
        return this.rtl ? ["rtl-gutter", "CodeMirror-linenumbers"] : [];
    }
    _setScrollBarDirection() {
        if (this.codemirror) {
            this.codemirror.getWrapperElement().classList.toggle("rtl", this.rtl);
        }
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



/***/ }),

/***/ "./src/components/ha-combo-box.js":
/*!****************************************!*\
  !*** ./src/components/ha-combo-box.js ***!
  \****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_paper_icon_button_paper_icon_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/paper-icon-button/paper-icon-button */ "./node_modules/@polymer/paper-icon-button/paper-icon-button.js");
/* harmony import */ var _polymer_paper_input_paper_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-input/paper-input */ "./node_modules/@polymer/paper-input/paper-input.js");
/* harmony import */ var _polymer_paper_item_paper_item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-item/paper-item */ "./node_modules/@polymer/paper-item/paper-item.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _vaadin_vaadin_combo_box_vaadin_combo_box_light__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @vaadin/vaadin-combo-box/vaadin-combo-box-light */ "./node_modules/@vaadin/vaadin-combo-box/vaadin-combo-box-light.js");
/* harmony import */ var _mixins_events_mixin__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../mixins/events-mixin */ "./src/mixins/events-mixin.js");









class HaComboBox extends Object(_mixins_events_mixin__WEBPACK_IMPORTED_MODULE_6__["EventsMixin"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_4__["PolymerElement"]) {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_3__["html"]`
      <style>
        paper-input > paper-icon-button {
          width: 24px;
          height: 24px;
          padding: 2px;
          color: var(--secondary-text-color);
        }
        [hidden] {
          display: none;
        }
      </style>
      <vaadin-combo-box-light
        items="[[_items]]"
        item-value-path="[[itemValuePath]]"
        item-label-path="[[itemLabelPath]]"
        value="{{value}}"
        opened="{{opened}}"
        allow-custom-value="[[allowCustomValue]]"
        on-change="_fireChanged"
      >
        <paper-input
          autofocus="[[autofocus]]"
          label="[[label]]"
          class="input"
          value="[[value]]"
        >
          <paper-icon-button
            slot="suffix"
            class="clear-button"
            icon="hass:close"
            hidden$="[[!value]]"
            >Clear</paper-icon-button
          >
          <paper-icon-button
            slot="suffix"
            class="toggle-button"
            icon="[[_computeToggleIcon(opened)]]"
            hidden$="[[!items.length]]"
            >Toggle</paper-icon-button
          >
        </paper-input>
        <template>
          <style>
            paper-item {
              margin: -5px -10px;
              padding: 0;
            }
          </style>
          <paper-item>[[_computeItemLabel(item, itemLabelPath)]]</paper-item>
        </template>
      </vaadin-combo-box-light>
    `;
  }

  static get properties() {
    return {
      allowCustomValue: Boolean,
      items: {
        type: Object,
        observer: "_itemsChanged",
      },
      _items: Object,
      itemLabelPath: String,
      itemValuePath: String,
      autofocus: Boolean,
      label: String,
      opened: {
        type: Boolean,
        value: false,
        observer: "_openedChanged",
      },
      value: {
        type: String,
        notify: true,
      },
    };
  }

  _openedChanged(newVal) {
    if (!newVal) {
      this._items = this.items;
    }
  }

  _itemsChanged(newVal) {
    if (!this.opened) {
      this._items = newVal;
    }
  }

  _computeToggleIcon(opened) {
    return opened ? "hass:menu-up" : "hass:menu-down";
  }

  _computeItemLabel(item, itemLabelPath) {
    return itemLabelPath ? item[itemLabelPath] : item;
  }

  _fireChanged(ev) {
    ev.stopPropagation();
    this.fire("change");
  }
}

customElements.define("ha-combo-box", HaComboBox);


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
const MwcFab = customElements.get("mwc-fab");
let HaFab = class HaFab extends MwcFab {
    // We override the render method because we don't have an icon font and mwc-fab doesn't support our svg-icon sets.
    // Based on version mwc-fab 0.8
    render() {
        const classes = {
            "mdc-fab--mini": this.mini,
            "mdc-fab--exited": this.exited,
            "mdc-fab--extended": this.extended,
        };
        const showLabel = this.label !== "" && this.extended;
        return _material_mwc_base_base_element__WEBPACK_IMPORTED_MODULE_1__["html"] `
      <button
        .ripple="${Object(_material_mwc_ripple_ripple_directive_js__WEBPACK_IMPORTED_MODULE_2__["ripple"])()}"
        class="mdc-fab ${Object(_material_mwc_base_base_element__WEBPACK_IMPORTED_MODULE_1__["classMap"])(classes)}"
        ?disabled="${this.disabled}"
        aria-label="${this.label || this.icon}"
      >
        ${showLabel && this.showIconAtEnd ? this.label : ""}
        ${this.icon
            ? _material_mwc_base_base_element__WEBPACK_IMPORTED_MODULE_1__["html"] `
              <ha-icon .icon=${this.icon}></ha-icon>
            `
            : ""}
        ${showLabel && !this.showIconAtEnd ? this.label : ""}
      </button>
    `;
    }
};
HaFab = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_material_mwc_base_base_element__WEBPACK_IMPORTED_MODULE_1__["customElement"])("ha-fab")
], HaFab);



/***/ }),

/***/ "./src/components/ha-form.js":
/*!***********************************!*\
  !*** ./src/components/ha-form.js ***!
  \***********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_paper_checkbox_paper_checkbox__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/paper-checkbox/paper-checkbox */ "./node_modules/@polymer/paper-checkbox/paper-checkbox.js");
/* harmony import */ var _polymer_paper_dropdown_menu_paper_dropdown_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-dropdown-menu/paper-dropdown-menu */ "./node_modules/@polymer/paper-dropdown-menu/paper-dropdown-menu.js");
/* harmony import */ var _polymer_paper_icon_button_paper_icon_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-icon-button/paper-icon-button */ "./node_modules/@polymer/paper-icon-button/paper-icon-button.js");
/* harmony import */ var _polymer_paper_input_paper_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/paper-input/paper-input */ "./node_modules/@polymer/paper-input/paper-input.js");
/* harmony import */ var _polymer_paper_item_paper_item__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/paper-item/paper-item */ "./node_modules/@polymer/paper-item/paper-item.js");
/* harmony import */ var _polymer_paper_listbox_paper_listbox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @polymer/paper-listbox/paper-listbox */ "./node_modules/@polymer/paper-listbox/paper-listbox.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _ha_paper_slider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ha-paper-slider */ "./src/components/ha-paper-slider.js");
/* harmony import */ var _mixins_events_mixin__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../mixins/events-mixin */ "./src/mixins/events-mixin.js");












/*
 * @appliesMixin EventsMixin
 */
class HaForm extends Object(_mixins_events_mixin__WEBPACK_IMPORTED_MODULE_9__["EventsMixin"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_7__["PolymerElement"]) {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_6__["html"]`
      <style>
        .error {
          color: red;
        }
        paper-checkbox {
          display: inline-block;
          padding: 22px 0;
        }
      </style>
      <template is="dom-if" if="[[_isArray(schema)]]" restamp="">
        <template is="dom-if" if="[[error.base]]">
          <div class="error">[[computeError(error.base, schema)]]</div>
        </template>

        <template is="dom-repeat" items="[[schema]]">
          <ha-form
            data="[[_getValue(data, item)]]"
            schema="[[item]]"
            error="[[_getValue(error, item)]]"
            on-data-changed="_valueChanged"
            compute-error="[[computeError]]"
            compute-label="[[computeLabel]]"
            compute-suffix="[[computeSuffix]]"
          ></ha-form>
        </template>
      </template>
      <template is="dom-if" if="[[!_isArray(schema)]]" restamp="">
        <template is="dom-if" if="[[error]]">
          <div class="error">[[computeError(error, schema)]]</div>
        </template>

        <template
          is="dom-if"
          if='[[_equals(schema.type, "string")]]'
          restamp=""
        >
          <template
            is="dom-if"
            if='[[_includes(schema.name, "password")]]'
            restamp=""
          >
            <paper-input
              type="[[_passwordFieldType(unmaskedPassword)]]"
              label="[[computeLabel(schema)]]"
              value="{{data}}"
              required="[[schema.required]]"
              auto-validate="[[schema.required]]"
              error-message="Required"
            >
              <paper-icon-button
                toggles
                active="{{unmaskedPassword}}"
                slot="suffix"
                icon="[[_passwordFieldIcon(unmaskedPassword)]]"
                id="iconButton"
                title="Click to toggle between masked and clear password"
              >
              </paper-icon-button>
            </paper-input>
          </template>
          <template
            is="dom-if"
            if='[[!_includes(schema.name, "password")]]'
            restamp=""
          >
            <paper-input
              label="[[computeLabel(schema)]]"
              value="{{data}}"
              required="[[schema.required]]"
              auto-validate="[[schema.required]]"
              error-message="Required"
            ></paper-input>
          </template>
        </template>

        <template
          is="dom-if"
          if='[[_equals(schema.type, "integer")]]'
          restamp=""
        >
          <template is="dom-if" if="[[_isRange(schema)]]" restamp="">
            <div>
              [[computeLabel(schema)]]
              <ha-paper-slider
                pin=""
                value="{{data}}"
                min="[[schema.valueMin]]"
                max="[[schema.valueMax]]"
              ></ha-paper-slider>
            </div>
          </template>
          <template is="dom-if" if="[[!_isRange(schema)]]" restamp="">
            <paper-input
              label="[[computeLabel(schema)]]"
              value="{{data}}"
              type="number"
              required="[[schema.required]]"
              auto-validate="[[schema.required]]"
              error-message="Required"
            ></paper-input>
          </template>
        </template>

        <template is="dom-if" if='[[_equals(schema.type, "float")]]' restamp="">
          <!-- TODO -->
          <paper-input
            label="[[computeLabel(schema)]]"
            value="{{data}}"
            required="[[schema.required]]"
            auto-validate="[[schema.required]]"
            error-message="Required"
          >
            <span suffix="" slot="suffix">[[computeSuffix(schema)]]</span>
          </paper-input>
        </template>

        <template
          is="dom-if"
          if='[[_equals(schema.type, "boolean")]]'
          restamp=""
        >
          <div>
            <paper-checkbox checked="{{data}}"
              >[[computeLabel(schema)]]</paper-checkbox
            >
          </div>
        </template>

        <template
          is="dom-if"
          if='[[_equals(schema.type, "select")]]'
          restamp=""
        >
          <paper-dropdown-menu label="[[computeLabel(schema)]]">
            <paper-listbox
              slot="dropdown-content"
              attr-for-selected="item-name"
              selected="{{data}}"
            >
              <template is="dom-repeat" items="[[schema.options]]">
                <paper-item item-name$="[[_optionValue(item)]]"
                  >[[_optionLabel(item)]]</paper-item
                >
              </template>
            </paper-listbox>
          </paper-dropdown-menu>
        </template>
      </template>
    `;
  }

  static get properties() {
    return {
      data: {
        type: Object,
        notify: true,
      },
      schema: Object,
      error: Object,

      // A function that computes the label to be displayed for a given
      // schema object.
      computeLabel: {
        type: Function,
        value: () => (schema) => schema && schema.name,
      },

      // A function that computes the suffix to be displayed for a given
      // schema object.
      computeSuffix: {
        type: Function,
        value: () => (schema) =>
          schema &&
          schema.description &&
          schema.description.unit_of_measurement,
      },

      // A function that computes an error message to be displayed for a
      // given error ID, and relevant schema object
      computeError: {
        type: Function,
        value: () => (error, schema) => error, // eslint-disable-line no-unused-vars
      },
    };
  }

  focus() {
    const input = this.shadowRoot.querySelector(
      "ha-form, paper-input, ha-paper-slider, paper-checkbox, paper-dropdown-menu"
    );

    if (!input) {
      return;
    }

    input.focus();
  }

  _isArray(val) {
    return Array.isArray(val);
  }

  _isRange(schema) {
    return "valueMin" in schema && "valueMax" in schema;
  }

  _equals(a, b) {
    return a === b;
  }

  _includes(a, b) {
    return a.indexOf(b) >= 0;
  }

  _getValue(obj, item) {
    if (obj) {
      return obj[item.name];
    }
    return null;
  }

  _valueChanged(ev) {
    let value = ev.detail.value;
    if (ev.model.item.type === "integer") {
      value = Number(ev.detail.value);
    }
    this.set(["data", ev.model.item.name], value);
  }

  _passwordFieldType(unmaskedPassword) {
    return unmaskedPassword ? "text" : "password";
  }

  _passwordFieldIcon(unmaskedPassword) {
    return unmaskedPassword ? "hass:eye-off" : "hass:eye";
  }

  _optionValue(item) {
    return Array.isArray(item) ? item[0] : item;
  }

  _optionLabel(item) {
    return Array.isArray(item) ? item[1] : item;
  }
}

customElements.define("ha-form", HaForm);


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
/* harmony import */ var _polymer_paper_dropdown_menu_paper_dropdown_menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/paper-dropdown-menu/paper-dropdown-menu */ "./node_modules/@polymer/paper-dropdown-menu/paper-dropdown-menu.js");

const paperDropdownClass = customElements.get("paper-dropdown-menu");
// patches paper drop down to properly support RTL - https://github.com/PolymerElements/paper-dropdown-menu/issues/183
class HaPaperDropdownClass extends paperDropdownClass {
    ready() {
        super.ready();
        // wait to check for direction since otherwise direction is wrong even though top level is RTL
        setTimeout(() => {
            if (window.getComputedStyle(this).direction === "rtl") {
                this.style.textAlign = "right";
            }
        }, 100);
    }
}
customElements.define("ha-paper-dropdown-menu", HaPaperDropdownClass);


/***/ }),

/***/ "./src/components/ha-paper-slider.js":
/*!*******************************************!*\
  !*** ./src/components/ha-paper-slider.js ***!
  \*******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_paper_slider_paper_slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/paper-slider/paper-slider */ "./node_modules/@polymer/paper-slider/paper-slider.js");


/**
 * @polymer
 * @customElement
 * @appliesMixin paper-slider
 */
const PaperSliderClass = customElements.get("paper-slider");

class HaPaperSlider extends PaperSliderClass {
  static get template() {
    const tpl = document.createElement("template");
    tpl.innerHTML = PaperSliderClass.template.innerHTML;
    const styleEl = document.createElement("style");
    styleEl.innerHTML = `
      .pin > .slider-knob > .slider-knob-inner {
        font-size:  var(--ha-paper-slider-pin-font-size, 10px);
        line-height: normal;
      }

      .pin > .slider-knob > .slider-knob-inner::before {
        top: unset;
        margin-left: unset;

        bottom: calc(15px + var(--calculated-paper-slider-height)/2);
        left: 50%;
        width: 2.2em;
        height: 2.2em;

        -webkit-transform-origin: left bottom;
        transform-origin: left bottom;
        -webkit-transform: rotate(-45deg) scale(0) translate(0);
        transform: rotate(-45deg) scale(0) translate(0);
      }

      .pin.expand > .slider-knob > .slider-knob-inner::before {
        -webkit-transform: rotate(-45deg) scale(1) translate(7px, -7px);
        transform: rotate(-45deg) scale(1) translate(7px, -7px);
      }

      .pin > .slider-knob > .slider-knob-inner::after {
        top: unset;
        font-size: unset;

        bottom: calc(15px + var(--calculated-paper-slider-height)/2);
        left: 50%;
        margin-left: -1.1em;
        width: 2.2em;
        height: 2.1em;

        -webkit-transform-origin: center bottom;
        transform-origin: center bottom;
        -webkit-transform: scale(0) translate(0);
        transform: scale(0) translate(0);
      }

      .pin.expand > .slider-knob > .slider-knob-inner::after {
        -webkit-transform: scale(1) translate(0, -10px);
        transform: scale(1) translate(0, -10px);
      }

      :host([dir="rtl"]) .pin.expand > .slider-knob > .slider-knob-inner::after {
        -webkit-transform: scale(1) translate(0, -17px) scaleX(-1) !important;
        transform: scale(1) translate(0, -17px) scaleX(-1) !important;
        }
    `;
    tpl.content.appendChild(styleEl);
    return tpl;
  }
}
customElements.define("ha-paper-slider", HaPaperSlider);


/***/ }),

/***/ "./src/components/ha-service-picker.js":
/*!*********************************************!*\
  !*** ./src/components/ha-service-picker.js ***!
  \*********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _ha_combo_box__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ha-combo-box */ "./src/components/ha-combo-box.js");
/* harmony import */ var _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../mixins/localize-mixin */ "./src/mixins/localize-mixin.js");







/*
 * @appliesMixin LocalizeMixin
 */
class HaServicePicker extends Object(_mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_3__["default"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_1__["PolymerElement"]) {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_0__["html"]`
      <ha-combo-box
        label="[[localize('ui.components.service-picker.service')]]"
        items="[[_services]]"
        value="{{value}}"
        allow-custom-value=""
      ></ha-combo-box>
    `;
  }

  static get properties() {
    return {
      hass: {
        type: Object,
        observer: "_hassChanged",
      },
      _services: Array,
      value: {
        type: String,
        notify: true,
      },
    };
  }

  _hassChanged(hass, oldHass) {
    if (!hass) {
      this._services = [];
      return;
    }
    if (oldHass && hass.services === oldHass.services) {
      return;
    }
    const result = [];

    Object.keys(hass.services)
      .sort()
      .forEach((domain) => {
        const services = Object.keys(hass.services[domain]).sort();

        for (let i = 0; i < services.length; i++) {
          result.push(`${domain}.${services[i]}`);
        }
      });

    this._services = result;
  }
}

customElements.define("ha-service-picker", HaServicePicker);


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
/*
Wrapper for paper-textarea.

paper-textarea crashes on iOS when created programmatically. This only impacts
our automation and script editors as they are using Preact. Polymer is using
template elements and does not have this issue.

paper-textarea issue: https://github.com/PolymerElements/paper-input/issues/556
WebKit issue: https://bugs.webkit.org/show_bug.cgi?id=174629
*/





class HaTextarea extends _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__["PolymerElement"] {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__["html"]`
      <style>
        :host {
          display: block;
        }
      </style>
      <paper-textarea
        label="[[label]]"
        placeholder="[[placeholder]]"
        value="{{value}}"
      ></paper-textarea>
    `;
  }

  static get properties() {
    return {
      name: String,
      label: String,
      placeholder: String,
      value: {
        type: String,
        notify: true,
      },
    };
  }
}

customElements.define("ha-textarea", HaTextarea);


/***/ }),

/***/ "./src/layouts/ha-app-layout.js":
/*!**************************************!*\
  !*** ./src/layouts/ha-app-layout.js ***!
  \**************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_app_layout_app_header_layout_app_header_layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/app-layout/app-header-layout/app-header-layout */ "./node_modules/@polymer/app-layout/app-header-layout/app-header-layout.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
/*
This code is copied from app-header-layout.
'fullbleed' support is removed as Home Assisstant doesn't use it.
transform: translate(0) is added.
*/
/*
  FIXME(polymer-modulizer): the above comments were extracted
  from HTML and may be out of place here. Review them and
  then delete this comment!
*/




class HaAppLayout extends customElements.get("app-header-layout") {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__["html"]`
      <style>
        :host {
          display: block;
          /**
         * Force app-header-layout to have its own stacking context so that its parent can
         * control the stacking of it relative to other elements (e.g. app-drawer-layout).
         * This could be done using \`isolation: isolate\`, but that's not well supported
         * across browsers.
         */
          position: relative;
          z-index: 0;
        }

        #wrapper ::slotted([slot="header"]) {
          @apply --layout-fixed-top;
          z-index: 1;
        }

        #wrapper.initializing ::slotted([slot="header"]) {
          position: relative;
        }

        :host([has-scrolling-region]) {
          height: 100%;
        }

        :host([has-scrolling-region]) #wrapper ::slotted([slot="header"]) {
          position: absolute;
        }

        :host([has-scrolling-region])
          #wrapper.initializing
          ::slotted([slot="header"]) {
          position: relative;
        }

        :host([has-scrolling-region]) #wrapper #contentContainer {
          @apply --layout-fit;
          overflow-y: auto;
          -webkit-overflow-scrolling: touch;
        }

        :host([has-scrolling-region]) #wrapper.initializing #contentContainer {
          position: relative;
        }

        #contentContainer {
          /* Create a stacking context here so that all children appear below the header. */
          position: relative;
          z-index: 0;
          /* Using 'transform' will cause 'position: fixed' elements to behave like
           'position: absolute' relative to this element. */
          transform: translate(0);
        }

        @media print {
          :host([has-scrolling-region]) #wrapper #contentContainer {
            overflow-y: visible;
          }
        }
      </style>

      <div id="wrapper" class="initializing">
        <slot id="headerSlot" name="header"></slot>

        <div id="contentContainer"><slot></slot></div>
        <slot id="fab" name="fab"></slot>
      </div>
    `;
  }
}
customElements.define("ha-app-layout", HaAppLayout);


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
/* tslint:disable-next-line */
const SubscribeMixin = (superClass) => 
// @ts-ignore
class extends superClass {
    static get properties() {
        return {
            hass: {},
        };
    }
    connectedCallback() {
        super.connectedCallback();
        this.__checkSubscribed();
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        if (this.__unsubs) {
            while (this.__unsubs.length) {
                this.__unsubs.pop()();
            }
            this.__unsubs = undefined;
        }
    }
    updated(changedProps) {
        super.updated(changedProps);
        if (changedProps.has("hass")) {
            this.__checkSubscribed();
        }
    }
    hassSubscribe() {
        super.hassSubscribe();
        return [];
    }
    __checkSubscribed() {
        if (this.__unsubs !== undefined ||
            !this.isConnected ||
            this.hass === undefined) {
            return;
        }
        this.__unsubs = this.hassSubscribe();
    }
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ConditionEdit; });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.mjs");
/* harmony import */ var _polymer_paper_dropdown_menu_paper_dropdown_menu_light__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-dropdown-menu/paper-dropdown-menu-light */ "./node_modules/@polymer/paper-dropdown-menu/paper-dropdown-menu-light.js");
/* harmony import */ var _polymer_paper_listbox_paper_listbox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-listbox/paper-listbox */ "./node_modules/@polymer/paper-listbox/paper-listbox.js");
/* harmony import */ var _polymer_paper_item_paper_item__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/paper-item/paper-item */ "./node_modules/@polymer/paper-item/paper-item.js");
/* harmony import */ var _device__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./device */ "./src/panels/config/js/condition/device.tsx");
/* harmony import */ var _logical__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./logical */ "./src/panels/config/js/condition/logical.tsx");
/* harmony import */ var _numeric_state__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./numeric_state */ "./src/panels/config/js/condition/numeric_state.tsx");
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./state */ "./src/panels/config/js/condition/state.tsx");
/* harmony import */ var _sun__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./sun */ "./src/panels/config/js/condition/sun.tsx");
/* harmony import */ var _template__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./template */ "./src/panels/config/js/condition/template.tsx");
/* harmony import */ var _time__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./time */ "./src/panels/config/js/condition/time.tsx");
/* harmony import */ var _zone__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./zone */ "./src/panels/config/js/condition/zone.tsx");












const TYPES = {
    and: _logical__WEBPACK_IMPORTED_MODULE_5__["default"],
    device: _device__WEBPACK_IMPORTED_MODULE_4__["default"],
    numeric_state: _numeric_state__WEBPACK_IMPORTED_MODULE_6__["default"],
    or: _logical__WEBPACK_IMPORTED_MODULE_5__["default"],
    state: _state__WEBPACK_IMPORTED_MODULE_7__["default"],
    sun: _sun__WEBPACK_IMPORTED_MODULE_8__["default"],
    template: _template__WEBPACK_IMPORTED_MODULE_9__["default"],
    time: _time__WEBPACK_IMPORTED_MODULE_10__["default"],
    zone: _zone__WEBPACK_IMPORTED_MODULE_11__["default"],
};
const OPTIONS = Object.keys(TYPES).sort();
class ConditionEdit extends preact__WEBPACK_IMPORTED_MODULE_0__["Component"] {
    constructor() {
        super();
        this.typeChanged = this.typeChanged.bind(this);
    }
    typeChanged(ev) {
        const type = ev.target.selectedItem.attributes.condition.value;
        if (type !== this.props.condition.condition) {
            this.props.onChange(this.props.index, Object.assign({ condition: type }, TYPES[type].defaultConfig));
        }
    }
    render({ index, condition, onChange, hass, localize }) {
        // tslint:disable-next-line: variable-name
        const Comp = TYPES[condition.condition];
        const selected = OPTIONS.indexOf(condition.condition);
        if (!Comp) {
            return (Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("div", null,
                localize("ui.panel.config.automation.editor.conditions.unsupported_condition", "condition", condition.condition),
                Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("pre", null, JSON.stringify(condition, null, 2))));
        }
        return (Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("div", null,
            Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("paper-dropdown-menu-light", { label: localize("ui.panel.config.automation.editor.conditions.type_select"), "no-animations": true },
                Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("paper-listbox", { slot: "dropdown-content", selected: selected, "oniron-select": this.typeChanged }, OPTIONS.map((opt) => (Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("paper-item", { condition: opt }, localize(`ui.panel.config.automation.editor.conditions.type.${opt}.label`)))))),
            Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(Comp, { index: index, condition: condition, onChange: onChange, hass: hass, localize: localize })));
    }
}


/***/ }),

/***/ "./src/panels/config/js/condition/condition_row.tsx":
/*!**********************************************************!*\
  !*** ./src/panels/config/js/condition/condition_row.tsx ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ConditionRow; });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.mjs");
/* harmony import */ var _polymer_paper_menu_button_paper_menu_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-menu-button/paper-menu-button */ "./node_modules/@polymer/paper-menu-button/paper-menu-button.js");
/* harmony import */ var _polymer_paper_icon_button_paper_icon_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-icon-button/paper-icon-button */ "./node_modules/@polymer/paper-icon-button/paper-icon-button.js");
/* harmony import */ var _polymer_paper_listbox_paper_listbox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/paper-listbox/paper-listbox */ "./node_modules/@polymer/paper-listbox/paper-listbox.js");
/* harmony import */ var _polymer_paper_item_paper_item__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/paper-item/paper-item */ "./node_modules/@polymer/paper-item/paper-item.js");
/* harmony import */ var _components_ha_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../components/ha-card */ "./src/components/ha-card.ts");
/* harmony import */ var _condition_edit__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./condition_edit */ "./src/panels/config/js/condition/condition_edit.tsx");







class ConditionRow extends preact__WEBPACK_IMPORTED_MODULE_0__["Component"] {
    constructor() {
        super();
        this.onDelete = this.onDelete.bind(this);
    }
    onDelete() {
        // eslint-disable-next-line
        if (confirm(this.props.localize("ui.panel.config.automation.editor.conditions.delete_confirm"))) {
            this.props.onChange(this.props.index, null);
        }
    }
    render(props) {
        return (Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("ha-card", null,
            Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "card-content" },
                Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "card-menu" },
                    Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("paper-menu-button", { "no-animations": true, "horizontal-align": "right", "horizontal-offset": "-5", "vertical-offset": "-5" },
                        Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("paper-icon-button", { icon: "hass:dots-vertical", slot: "dropdown-trigger" }),
                        Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("paper-listbox", { slot: "dropdown-content" },
                            Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("paper-item", { disabled: true }, props.localize("ui.panel.config.automation.editor.conditions.duplicate")),
                            Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("paper-item", { onTap: this.onDelete }, props.localize("ui.panel.config.automation.editor.conditions.delete"))))),
                Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(_condition_edit__WEBPACK_IMPORTED_MODULE_6__["default"], Object.assign({}, props)))));
    }
}


/***/ }),

/***/ "./src/panels/config/js/condition/device.tsx":
/*!***************************************************!*\
  !*** ./src/panels/config/js/condition/device.tsx ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DeviceCondition; });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.mjs");
/* harmony import */ var _components_device_ha_device_picker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../components/device/ha-device-picker */ "./src/components/device/ha-device-picker.ts");
/* harmony import */ var _components_device_ha_device_condition_picker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../components/device/ha-device-condition-picker */ "./src/components/device/ha-device-condition-picker.ts");
/* harmony import */ var _components_ha_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../components/ha-form */ "./src/components/ha-form.js");
/* harmony import */ var _data_device_automation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../data/device_automation */ "./src/data/device_automation.ts");





class DeviceCondition extends preact__WEBPACK_IMPORTED_MODULE_0__["Component"] {
    constructor() {
        super();
        this.devicePicked = this.devicePicked.bind(this);
        this.deviceConditionPicked = this.deviceConditionPicked.bind(this);
        this._extraFieldsChanged = this._extraFieldsChanged.bind(this);
        this.state = { device_id: undefined, capabilities: undefined };
    }
    devicePicked(ev) {
        this.setState(Object.assign(Object.assign({}, this.state), { device_id: ev.target.value }));
    }
    deviceConditionPicked(ev) {
        let condition = ev.target.value;
        if (this._origCondition &&
            Object(_data_device_automation__WEBPACK_IMPORTED_MODULE_4__["deviceAutomationsEqual"])(this._origCondition, condition)) {
            condition = this._origCondition;
        }
        this.props.onChange(this.props.index, condition);
    }
    /* eslint-disable camelcase */
    render({ condition, hass }, { device_id, capabilities }) {
        if (device_id === undefined) {
            device_id = condition.device_id;
        }
        const extraFieldsData = capabilities && capabilities.extra_fields
            ? capabilities.extra_fields.map((item) => {
                return { [item.name]: this.props.condition[item.name] };
            })
            : undefined;
        return (Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("div", null,
            Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("ha-device-picker", { value: device_id, onChange: this.devicePicked, hass: hass, label: "Device" }),
            Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("ha-device-condition-picker", { value: condition, deviceId: device_id, onChange: this.deviceConditionPicked, hass: hass, label: "Condition" }),
            extraFieldsData && (Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("ha-form", { data: Object.assign({}, ...extraFieldsData), "onData-changed": this._extraFieldsChanged, schema: this.state.capabilities.extra_fields, computeLabel: this._extraFieldsComputeLabelCallback(hass.localize) }))));
    }
    componentDidMount() {
        if (!this.state.capabilities) {
            this._getCapabilities();
        }
        if (this.props.condition) {
            this._origCondition = this.props.condition;
        }
    }
    componentDidUpdate(prevProps) {
        if (prevProps.condition !== this.props.condition) {
            this._getCapabilities();
        }
    }
    async _getCapabilities() {
        const condition = this.props.condition;
        const capabilities = condition.domain
            ? await Object(_data_device_automation__WEBPACK_IMPORTED_MODULE_4__["fetchDeviceConditionCapabilities"])(this.props.hass, condition)
            : null;
        this.setState(Object.assign(Object.assign({}, this.state), { capabilities }));
    }
    _extraFieldsChanged(ev) {
        if (!ev.detail.path) {
            return;
        }
        const item = ev.detail.path.replace("data.", "");
        const value = ev.detail.value || undefined;
        this.props.onChange(this.props.index, Object.assign(Object.assign({}, this.props.condition), { [item]: value }));
    }
    _extraFieldsComputeLabelCallback(localize) {
        // Returns a callback for ha-form to calculate labels per schema object
        return (schema) => localize(`ui.panel.config.automation.editor.condition.type.device.extra_fields.${schema.name}`) || schema.name;
    }
}
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Condition; });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.mjs");
/* harmony import */ var _material_mwc_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material/mwc-button */ "./node_modules/@material/mwc-button/mwc-button.js");
/* harmony import */ var _components_ha_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../components/ha-card */ "./src/components/ha-card.ts");
/* harmony import */ var _condition_row__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./condition_row */ "./src/panels/config/js/condition/condition_row.tsx");




class Condition extends preact__WEBPACK_IMPORTED_MODULE_0__["Component"] {
    constructor() {
        super();
        this.addCondition = this.addCondition.bind(this);
        this.conditionChanged = this.conditionChanged.bind(this);
    }
    addCondition() {
        const condition = this.props.condition.concat({
            condition: "state",
        });
        this.props.onChange(condition);
    }
    conditionChanged(index, newValue) {
        const condition = this.props.condition.concat();
        if (newValue === null) {
            condition.splice(index, 1);
        }
        else {
            condition[index] = newValue;
        }
        this.props.onChange(condition);
    }
    render({ condition, hass, localize }) {
        return (Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "triggers" },
            condition.map((cnd, idx) => (Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(_condition_row__WEBPACK_IMPORTED_MODULE_3__["default"], { index: idx, condition: cnd, onChange: this.conditionChanged, hass: hass, localize: localize }))),
            Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("ha-card", null,
                Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "card-actions add-card" },
                    Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("mwc-button", { onTap: this.addCondition }, localize("ui.panel.config.automation.editor.conditions.add"))))));
    }
}


/***/ }),

/***/ "./src/panels/config/js/condition/logical.tsx":
/*!****************************************************!*\
  !*** ./src/panels/config/js/condition/logical.tsx ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LogicalCondition; });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.mjs");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index */ "./src/panels/config/js/condition/index.tsx");


class LogicalCondition extends preact__WEBPACK_IMPORTED_MODULE_0__["Component"] {
    constructor() {
        super();
        this._mounted = false;
        this.conditionChanged = this.conditionChanged.bind(this);
    }
    conditionChanged(conditions) {
        if (this._mounted) {
            this.props.onChange(this.props.index, Object.assign(Object.assign({}, this.props.condition), { conditions }));
        }
    }
    componentWillMount() {
        this._mounted = true;
    }
    componentWillUnmount() {
        this._mounted = false;
    }
    /* eslint-disable camelcase */
    render({ condition, hass, localize }) {
        return (Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("div", null,
            Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(_index__WEBPACK_IMPORTED_MODULE_1__["default"], { condition: condition.conditions || [], onChange: this.conditionChanged, hass: hass, localize: localize })));
    }
}
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return NumericStateCondition; });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.mjs");
/* harmony import */ var _polymer_paper_input_paper_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-input/paper-input */ "./node_modules/@polymer/paper-input/paper-input.js");
/* harmony import */ var _components_ha_textarea__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../components/ha-textarea */ "./src/components/ha-textarea.js");
/* harmony import */ var _components_entity_ha_entity_picker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../components/entity/ha-entity-picker */ "./src/components/entity/ha-entity-picker.ts");
/* harmony import */ var _common_preact_event__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../common/preact/event */ "./src/common/preact/event.ts");





class NumericStateCondition extends preact__WEBPACK_IMPORTED_MODULE_0__["Component"] {
    constructor() {
        super();
        this.onChange = _common_preact_event__WEBPACK_IMPORTED_MODULE_4__["onChangeEvent"].bind(this, "condition");
        this.entityPicked = this.entityPicked.bind(this);
    }
    entityPicked(ev) {
        this.props.onChange(this.props.index, Object.assign(Object.assign({}, this.props.condition), { entity_id: ev.target.value }));
    }
    /* eslint-disable camelcase */
    render({ condition, hass, localize }) {
        const { value_template, entity_id, below, above } = condition;
        return (Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("div", null,
            Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("ha-entity-picker", { value: entity_id, onChange: this.entityPicked, hass: hass, allowCustomEntity: true }),
            Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("paper-input", { label: localize("ui.panel.config.automation.editor.conditions.type.numeric_state.above"), name: "above", value: above, "onvalue-changed": this.onChange }),
            Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("paper-input", { label: localize("ui.panel.config.automation.editor.conditions.type.numeric_state.below"), name: "below", value: below, "onvalue-changed": this.onChange }),
            Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("ha-textarea", { label: localize("ui.panel.config.automation.editor.conditions.type.numeric_state.value_template"), name: "value_template", value: value_template, "onvalue-changed": this.onChange, dir: "ltr" })));
    }
}
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return StateCondition; });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.mjs");
/* harmony import */ var _polymer_paper_input_paper_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-input/paper-input */ "./node_modules/@polymer/paper-input/paper-input.js");
/* harmony import */ var _components_entity_ha_entity_picker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../components/entity/ha-entity-picker */ "./src/components/entity/ha-entity-picker.ts");
/* harmony import */ var _common_preact_event__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../common/preact/event */ "./src/common/preact/event.ts");




class StateCondition extends preact__WEBPACK_IMPORTED_MODULE_0__["Component"] {
    constructor() {
        super();
        this.onChange = _common_preact_event__WEBPACK_IMPORTED_MODULE_3__["onChangeEvent"].bind(this, "condition");
        this.entityPicked = this.entityPicked.bind(this);
    }
    entityPicked(ev) {
        this.props.onChange(this.props.index, Object.assign(Object.assign({}, this.props.condition), { entity_id: ev.target.value }));
    }
    /* eslint-disable camelcase */
    render({ condition, hass, localize }) {
        const { entity_id, state } = condition;
        const cndFor = condition.for;
        return (Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("div", null,
            Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("ha-entity-picker", { value: entity_id, onChange: this.entityPicked, hass: hass, allowCustomEntity: true }),
            Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("paper-input", { label: localize("ui.panel.config.automation.editor.conditions.type.state.state"), name: "state", value: state, "onvalue-changed": this.onChange }),
            cndFor && Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("pre", null,
                "For: ",
                JSON.stringify(cndFor, null, 2))));
    }
}
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SunCondition; });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.mjs");
/* harmony import */ var _polymer_paper_input_paper_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-input/paper-input */ "./node_modules/@polymer/paper-input/paper-input.js");
/* harmony import */ var _polymer_paper_radio_button_paper_radio_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-radio-button/paper-radio-button */ "./node_modules/@polymer/paper-radio-button/paper-radio-button.js");
/* harmony import */ var _polymer_paper_radio_group_paper_radio_group__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/paper-radio-group/paper-radio-group */ "./node_modules/@polymer/paper-radio-group/paper-radio-group.js");
/* harmony import */ var _common_preact_event__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../common/preact/event */ "./src/common/preact/event.ts");





class SunCondition extends preact__WEBPACK_IMPORTED_MODULE_0__["Component"] {
    constructor() {
        super();
        this.onChange = _common_preact_event__WEBPACK_IMPORTED_MODULE_4__["onChangeEvent"].bind(this, "condition");
        this.afterPicked = this.radioGroupPicked.bind(this, "after");
        this.beforePicked = this.radioGroupPicked.bind(this, "before");
    }
    radioGroupPicked(key, ev) {
        const condition = Object.assign({}, this.props.condition);
        if (ev.target.selected) {
            condition[key] = ev.target.selected;
        }
        else {
            delete condition[key];
        }
        this.props.onChange(this.props.index, condition);
    }
    render({ condition, localize }) {
        /* eslint-disable camelcase */
        const { after, after_offset, before, before_offset } = condition;
        return (Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("div", null,
            Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("label", { id: "beforelabel" }, localize("ui.panel.config.automation.editor.conditions.type.sun.before")),
            Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("paper-radio-group", { "allow-empty-selection": true, selected: before, "aria-labelledby": "beforelabel", "onpaper-radio-group-changed": this.beforePicked },
                Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("paper-radio-button", { name: "sunrise" }, localize("ui.panel.config.automation.editor.conditions.type.sun.sunrise")),
                Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("paper-radio-button", { name: "sunset" }, localize("ui.panel.config.automation.editor.conditions.type.sun.sunset"))),
            Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("paper-input", { label: localize("ui.panel.config.automation.editor.conditions.type.sun.before_offset"), name: "before_offset", value: before_offset, "onvalue-changed": this.onChange, disabled: before === undefined }),
            Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("label", { id: "afterlabel" }, localize("ui.panel.config.automation.editor.conditions.type.sun.after")),
            Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("paper-radio-group", { "allow-empty-selection": true, selected: after, "aria-labelledby": "afterlabel", "onpaper-radio-group-changed": this.afterPicked },
                Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("paper-radio-button", { name: "sunrise" }, localize("ui.panel.config.automation.editor.conditions.type.sun.sunrise")),
                Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("paper-radio-button", { name: "sunset" }, localize("ui.panel.config.automation.editor.conditions.type.sun.sunset"))),
            Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("paper-input", { label: localize("ui.panel.config.automation.editor.conditions.type.sun.after_offset"), name: "after_offset", value: after_offset, "onvalue-changed": this.onChange, disabled: after === undefined })));
    }
}
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TemplateCondition; });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.mjs");
/* harmony import */ var _components_ha_textarea__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../components/ha-textarea */ "./src/components/ha-textarea.js");
/* harmony import */ var _common_preact_event__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../common/preact/event */ "./src/common/preact/event.ts");



class TemplateCondition extends preact__WEBPACK_IMPORTED_MODULE_0__["Component"] {
    constructor() {
        super();
        this.onChange = _common_preact_event__WEBPACK_IMPORTED_MODULE_2__["onChangeEvent"].bind(this, "condition");
    }
    render({ condition, localize }) {
        /* eslint-disable camelcase */
        const { value_template } = condition;
        return (Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("div", null,
            Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("ha-textarea", { label: localize("ui.panel.config.automation.editor.conditions.type.template.value_template"), name: "value_template", value: value_template, "onvalue-changed": this.onChange, dir: "ltr" })));
    }
}
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TimeCondition; });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.mjs");
/* harmony import */ var _polymer_paper_input_paper_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-input/paper-input */ "./node_modules/@polymer/paper-input/paper-input.js");
/* harmony import */ var _common_preact_event__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../common/preact/event */ "./src/common/preact/event.ts");



class TimeCondition extends preact__WEBPACK_IMPORTED_MODULE_0__["Component"] {
    constructor() {
        super();
        this.onChange = _common_preact_event__WEBPACK_IMPORTED_MODULE_2__["onChangeEvent"].bind(this, "condition");
    }
    /* eslint-disable camelcase */
    render({ condition, localize }) {
        const { after, before } = condition;
        return (Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("div", null,
            Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("paper-input", { label: localize("ui.panel.config.automation.editor.conditions.type.time.after"), name: "after", value: after, "onvalue-changed": this.onChange }),
            Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("paper-input", { label: localize("ui.panel.config.automation.editor.conditions.type.time.before"), name: "before", value: before, "onvalue-changed": this.onChange })));
    }
}
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ZoneCondition; });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.mjs");
/* harmony import */ var _components_entity_ha_entity_picker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../components/entity/ha-entity-picker */ "./src/components/entity/ha-entity-picker.ts");
/* harmony import */ var _common_entity_has_location__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../common/entity/has_location */ "./src/common/entity/has_location.ts");
/* harmony import */ var _common_entity_compute_state_domain__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../common/entity/compute_state_domain */ "./src/common/entity/compute_state_domain.ts");




function zoneAndLocationFilter(stateObj) {
    return Object(_common_entity_has_location__WEBPACK_IMPORTED_MODULE_2__["hasLocation"])(stateObj) && Object(_common_entity_compute_state_domain__WEBPACK_IMPORTED_MODULE_3__["computeStateDomain"])(stateObj) !== "zone";
}
class ZoneCondition extends preact__WEBPACK_IMPORTED_MODULE_0__["Component"] {
    constructor() {
        super();
        this.entityPicked = this.entityPicked.bind(this);
        this.zonePicked = this.zonePicked.bind(this);
    }
    entityPicked(ev) {
        this.props.onChange(this.props.index, Object.assign(Object.assign({}, this.props.condition), { entity_id: ev.target.value }));
    }
    zonePicked(ev) {
        this.props.onChange(this.props.index, Object.assign(Object.assign({}, this.props.condition), { zone: ev.target.value }));
    }
    /* eslint-disable camelcase */
    render({ condition, hass, localize }) {
        const { entity_id, zone } = condition;
        return (Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("div", null,
            Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("ha-entity-picker", { label: localize("ui.panel.config.automation.editor.conditions.type.zone.entity"), value: entity_id, onChange: this.entityPicked, hass: hass, allowCustomEntity: true, entityFilter: zoneAndLocationFilter }),
            Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("ha-entity-picker", { label: localize("ui.panel.config.automation.editor.conditions.type.zone.zone"), value: zone, onChange: this.zonePicked, hass: hass, allowCustomEntity: true, domainFilter: "zone" })));
    }
}
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Action; });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.mjs");
/* harmony import */ var _polymer_paper_dropdown_menu_paper_dropdown_menu_light__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-dropdown-menu/paper-dropdown-menu-light */ "./node_modules/@polymer/paper-dropdown-menu/paper-dropdown-menu-light.js");
/* harmony import */ var _polymer_paper_listbox_paper_listbox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-listbox/paper-listbox */ "./node_modules/@polymer/paper-listbox/paper-listbox.js");
/* harmony import */ var _polymer_paper_item_paper_item__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/paper-item/paper-item */ "./node_modules/@polymer/paper-item/paper-item.js");
/* harmony import */ var _call_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./call_service */ "./src/panels/config/js/script/call_service.tsx");
/* harmony import */ var _condition__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./condition */ "./src/panels/config/js/script/condition.tsx");
/* harmony import */ var _delay__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./delay */ "./src/panels/config/js/script/delay.tsx");
/* harmony import */ var _device__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./device */ "./src/panels/config/js/script/device.tsx");
/* harmony import */ var _event__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./event */ "./src/panels/config/js/script/event.tsx");
/* harmony import */ var _scene__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./scene */ "./src/panels/config/js/script/scene.tsx");
/* harmony import */ var _wait__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./wait */ "./src/panels/config/js/script/wait.tsx");











const TYPES = {
    service: _call_service__WEBPACK_IMPORTED_MODULE_4__["default"],
    delay: _delay__WEBPACK_IMPORTED_MODULE_6__["default"],
    wait_template: _wait__WEBPACK_IMPORTED_MODULE_10__["default"],
    condition: _condition__WEBPACK_IMPORTED_MODULE_5__["default"],
    event: _event__WEBPACK_IMPORTED_MODULE_8__["default"],
    device_id: _device__WEBPACK_IMPORTED_MODULE_7__["default"],
    scene: _scene__WEBPACK_IMPORTED_MODULE_9__["default"],
};
const OPTIONS = Object.keys(TYPES).sort();
function getType(action) {
    const keys = Object.keys(TYPES);
    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < keys.length; i++) {
        if (keys[i] in action) {
            return keys[i];
        }
    }
    return null;
}
class Action extends preact__WEBPACK_IMPORTED_MODULE_0__["Component"] {
    constructor() {
        super();
        this.typeChanged = this.typeChanged.bind(this);
    }
    typeChanged(ev) {
        const newType = ev.target.selectedItem.attributes.action.value;
        const oldType = getType(this.props.action);
        if (oldType !== newType) {
            this.props.onChange(this.props.index, TYPES[newType].defaultConfig);
        }
    }
    render({ index, action, onChange, hass, localize }) {
        const type = getType(action);
        // tslint:disable-next-line: variable-name
        const Comp = type && TYPES[type];
        // @ts-ignore
        const selected = OPTIONS.indexOf(type);
        if (!Comp) {
            return (Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("div", null,
                localize("ui.panel.config.automation.editor.actions.unsupported_action", "action", type),
                Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("pre", null, JSON.stringify(action, null, 2))));
        }
        return (Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("div", null,
            Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("paper-dropdown-menu-light", { label: localize("ui.panel.config.automation.editor.actions.type_select"), "no-animations": true },
                Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("paper-listbox", { slot: "dropdown-content", selected: selected, "oniron-select": this.typeChanged }, OPTIONS.map((opt) => (Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("paper-item", { action: opt }, localize(`ui.panel.config.automation.editor.actions.type.${opt}.label`)))))),
            Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(Comp, { index: index, action: action, onChange: onChange, hass: hass, localize: localize })));
    }
}


/***/ }),

/***/ "./src/panels/config/js/script/action_row.tsx":
/*!****************************************************!*\
  !*** ./src/panels/config/js/script/action_row.tsx ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Action; });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.mjs");
/* harmony import */ var _polymer_paper_menu_button_paper_menu_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-menu-button/paper-menu-button */ "./node_modules/@polymer/paper-menu-button/paper-menu-button.js");
/* harmony import */ var _polymer_paper_icon_button_paper_icon_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-icon-button/paper-icon-button */ "./node_modules/@polymer/paper-icon-button/paper-icon-button.js");
/* harmony import */ var _polymer_paper_item_paper_item__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/paper-item/paper-item */ "./node_modules/@polymer/paper-item/paper-item.js");
/* harmony import */ var _polymer_paper_listbox_paper_listbox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/paper-listbox/paper-listbox */ "./node_modules/@polymer/paper-listbox/paper-listbox.js");
/* harmony import */ var _components_ha_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../components/ha-card */ "./src/components/ha-card.ts");
/* harmony import */ var _action_edit__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./action_edit */ "./src/panels/config/js/script/action_edit.tsx");







class Action extends preact__WEBPACK_IMPORTED_MODULE_0__["Component"] {
    constructor() {
        super();
        this.onDelete = this.onDelete.bind(this);
    }
    onDelete() {
        // eslint-disable-next-line
        if (confirm(this.props.localize("ui.panel.config.automation.editor.actions.delete_confirm"))) {
            this.props.onChange(this.props.index, null);
        }
    }
    render(props) {
        return (Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("ha-card", null,
            Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "card-content" },
                Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "card-menu" },
                    Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("paper-menu-button", { "no-animations": true, "horizontal-align": "right", "horizontal-offset": "-5", "vertical-offset": "-5" },
                        Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("paper-icon-button", { icon: "hass:dots-vertical", slot: "dropdown-trigger" }),
                        Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("paper-listbox", { slot: "dropdown-content" },
                            Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("paper-item", { disabled: true }, props.localize("ui.panel.config.automation.editor.actions.duplicate")),
                            Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("paper-item", { onTap: this.onDelete }, props.localize("ui.panel.config.automation.editor.actions.delete"))))),
                Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(_action_edit__WEBPACK_IMPORTED_MODULE_6__["default"], Object.assign({}, props)))));
    }
}


/***/ }),

/***/ "./src/panels/config/js/script/call_service.tsx":
/*!******************************************************!*\
  !*** ./src/panels/config/js/script/call_service.tsx ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CallServiceAction; });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.mjs");
/* harmony import */ var _components_ha_service_picker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../components/ha-service-picker */ "./src/components/ha-service-picker.js");
/* harmony import */ var _yaml_textarea__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../yaml_textarea */ "./src/panels/config/js/yaml_textarea.tsx");



class CallServiceAction extends preact__WEBPACK_IMPORTED_MODULE_0__["Component"] {
    constructor() {
        super();
        this.serviceChanged = this.serviceChanged.bind(this);
        this.serviceDataChanged = this.serviceDataChanged.bind(this);
    }
    serviceChanged(ev) {
        this.props.onChange(this.props.index, Object.assign(Object.assign({}, this.props.action), { service: ev.target.value }));
    }
    serviceDataChanged(data) {
        this.props.onChange(this.props.index, Object.assign(Object.assign({}, this.props.action), { data }));
    }
    render({ action, hass, localize }) {
        const { service, data } = action;
        return (Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("div", null,
            Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("ha-service-picker", { hass: hass, value: service, onChange: this.serviceChanged }),
            Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(_yaml_textarea__WEBPACK_IMPORTED_MODULE_2__["default"], { label: localize("ui.panel.config.automation.editor.actions.type.service.service_data"), value: data, onChange: this.serviceDataChanged })));
    }
}
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ConditionAction; });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.mjs");
/* harmony import */ var _condition_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../condition/state */ "./src/panels/config/js/condition/state.tsx");
/* harmony import */ var _condition_condition_edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../condition/condition_edit */ "./src/panels/config/js/condition/condition_edit.tsx");



class ConditionAction extends preact__WEBPACK_IMPORTED_MODULE_0__["Component"] {
    // eslint-disable-next-line
    render({ action, index, onChange, hass, localize }) {
        return (Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(_condition_condition_edit__WEBPACK_IMPORTED_MODULE_2__["default"], { condition: action, onChange: onChange, index: index, hass: hass, localize: localize }));
    }
}
ConditionAction.defaultConfig = Object.assign({ condition: "state" }, _condition_state__WEBPACK_IMPORTED_MODULE_1__["default"].defaultConfig);


/***/ }),

/***/ "./src/panels/config/js/script/delay.tsx":
/*!***********************************************!*\
  !*** ./src/panels/config/js/script/delay.tsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DelayAction; });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.mjs");
/* harmony import */ var _polymer_paper_input_paper_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-input/paper-input */ "./node_modules/@polymer/paper-input/paper-input.js");
/* harmony import */ var _common_preact_event__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../common/preact/event */ "./src/common/preact/event.ts");



class DelayAction extends preact__WEBPACK_IMPORTED_MODULE_0__["Component"] {
    constructor() {
        super();
        this.onChange = _common_preact_event__WEBPACK_IMPORTED_MODULE_2__["onChangeEvent"].bind(this, "action");
    }
    render({ action, localize }) {
        const { delay } = action;
        return (Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("div", null,
            Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("paper-input", { label: localize("ui.panel.config.automation.editor.actions.type.delay.delay"), name: "delay", value: delay, "onvalue-changed": this.onChange })));
    }
}
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DeviceActionEditor; });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.mjs");
/* harmony import */ var _components_device_ha_device_picker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../components/device/ha-device-picker */ "./src/components/device/ha-device-picker.ts");
/* harmony import */ var _components_device_ha_device_action_picker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../components/device/ha-device-action-picker */ "./src/components/device/ha-device-action-picker.ts");



class DeviceActionEditor extends preact__WEBPACK_IMPORTED_MODULE_0__["Component"] {
    constructor() {
        super();
        this.devicePicked = this.devicePicked.bind(this);
        this.deviceActionPicked = this.deviceActionPicked.bind(this);
        this.state = { device_id: undefined };
    }
    render() {
        const { action, hass } = this.props;
        const deviceId = this.state.device_id || action.device_id;
        return (Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("div", null,
            Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("ha-device-picker", { value: deviceId, onChange: this.devicePicked, hass: hass, label: "Device" }),
            Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("ha-device-action-picker", { value: action, deviceId: deviceId, onChange: this.deviceActionPicked, hass: hass, label: "Action" })));
    }
    devicePicked(ev) {
        this.setState({ device_id: ev.target.value });
    }
    deviceActionPicked(ev) {
        const deviceAction = Object.assign({}, ev.target.value);
        this.props.onChange(this.props.index, deviceAction);
    }
}
DeviceActionEditor.defaultConfig = {
    device_id: "",
    domain: "",
    entity_id: "",
};


/***/ }),

/***/ "./src/panels/config/js/script/event.tsx":
/*!***********************************************!*\
  !*** ./src/panels/config/js/script/event.tsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return EventActionForm; });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.mjs");
/* harmony import */ var _polymer_paper_input_paper_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-input/paper-input */ "./node_modules/@polymer/paper-input/paper-input.js");
/* harmony import */ var _yaml_textarea__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../yaml_textarea */ "./src/panels/config/js/yaml_textarea.tsx");
/* harmony import */ var _common_preact_event__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../common/preact/event */ "./src/common/preact/event.ts");




class EventActionForm extends preact__WEBPACK_IMPORTED_MODULE_0__["Component"] {
    constructor() {
        super();
        this.onChange = _common_preact_event__WEBPACK_IMPORTED_MODULE_3__["onChangeEvent"].bind(this, "action");
        this.serviceDataChanged = this.serviceDataChanged.bind(this);
    }
    static get defaultConfig() {
        return {
            event: "",
            event_data: {},
        };
    }
    render() {
        const { action: { event, event_data }, localize, } = this.props;
        return (Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("div", null,
            Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("paper-input", { label: localize("ui.panel.config.automation.editor.actions.type.event.event"), name: "event", value: event, "onvalue-changed": this.onChange }),
            Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(_yaml_textarea__WEBPACK_IMPORTED_MODULE_2__["default"], { label: localize("ui.panel.config.automation.editor.actions.type.event.service_data"), value: event_data, onChange: this.serviceDataChanged })));
    }
    serviceDataChanged(eventData) {
        this.props.onChange(this.props.index, Object.assign(Object.assign({}, this.props.action), { event_data: eventData }));
    }
}


/***/ }),

/***/ "./src/panels/config/js/script/index.tsx":
/*!***********************************************!*\
  !*** ./src/panels/config/js/script/index.tsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Script; });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.mjs");
/* harmony import */ var _material_mwc_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material/mwc-button */ "./node_modules/@material/mwc-button/mwc-button.js");
/* harmony import */ var _components_ha_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../components/ha-card */ "./src/components/ha-card.ts");
/* harmony import */ var _action_row__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./action_row */ "./src/panels/config/js/script/action_row.tsx");




class Script extends preact__WEBPACK_IMPORTED_MODULE_0__["Component"] {
    constructor() {
        super();
        this.addAction = this.addAction.bind(this);
        this.actionChanged = this.actionChanged.bind(this);
    }
    addAction() {
        const script = this.props.script.concat({
            service: "",
        });
        this.props.onChange(script);
    }
    actionChanged(index, newValue) {
        const script = this.props.script.concat();
        if (newValue === null) {
            script.splice(index, 1);
        }
        else {
            script[index] = newValue;
        }
        this.props.onChange(script);
    }
    render({ script, hass, localize }) {
        return (Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "script" },
            script.map((act, idx) => (Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(_action_row__WEBPACK_IMPORTED_MODULE_3__["default"], { index: idx, action: act, onChange: this.actionChanged, hass: hass, localize: localize }))),
            Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("ha-card", null,
                Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "card-actions add-card" },
                    Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("mwc-button", { onTap: this.addAction }, localize("ui.panel.config.automation.editor.actions.add"))))));
    }
}


/***/ }),

/***/ "./src/panels/config/js/script/scene.tsx":
/*!***********************************************!*\
  !*** ./src/panels/config/js/script/scene.tsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SceneAction; });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.mjs");
/* harmony import */ var _components_entity_ha_entity_picker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../components/entity/ha-entity-picker */ "./src/components/entity/ha-entity-picker.ts");


class SceneAction extends preact__WEBPACK_IMPORTED_MODULE_0__["Component"] {
    constructor() {
        super();
        this.sceneChanged = this.sceneChanged.bind(this);
    }
    sceneChanged(ev) {
        this.props.onChange(this.props.index, Object.assign(Object.assign({}, this.props.action), { scene: ev.target.value }));
    }
    render({ action, hass }) {
        const { scene } = action;
        return (Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("div", null,
            Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("ha-entity-picker", { value: scene, onChange: this.sceneChanged, hass: hass, domainFilter: "scene", allowCustomEntity: true })));
    }
}
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return WaitAction; });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.mjs");
/* harmony import */ var _polymer_paper_input_paper_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-input/paper-input */ "./node_modules/@polymer/paper-input/paper-input.js");
/* harmony import */ var _components_ha_textarea__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../components/ha-textarea */ "./src/components/ha-textarea.js");
/* harmony import */ var _common_preact_event__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../common/preact/event */ "./src/common/preact/event.ts");




class WaitAction extends preact__WEBPACK_IMPORTED_MODULE_0__["Component"] {
    constructor() {
        super();
        this.onChange = _common_preact_event__WEBPACK_IMPORTED_MODULE_3__["onChangeEvent"].bind(this, "action");
        this.onTemplateChange = this.onTemplateChange.bind(this);
    }
    // Gets fired on mount. If empty, onChangeEvent removes attribute.
    // Without the attribute this action is no longer matched to this component.
    onTemplateChange(ev) {
        this.props.onChange(this.props.index, Object.assign(Object.assign({}, this.props.action), { [ev.target.getAttribute("name")]: ev.target.value }));
    }
    render({ action, localize }) {
        /* eslint-disable camelcase */
        const { wait_template, timeout } = action;
        return (Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("div", null,
            Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("ha-textarea", { label: localize("ui.panel.config.automation.editor.actions.type.wait_template.wait_template"), name: "wait_template", value: wait_template, "onvalue-changed": this.onTemplateChange, dir: "ltr" }),
            Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("paper-input", { label: localize("ui.panel.config.automation.editor.actions.type.wait_template.timeout"), name: "timeout", value: timeout, "onvalue-changed": this.onChange })));
    }
}
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return YAMLTextArea; });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.mjs");
/* harmony import */ var js_yaml__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! js-yaml */ "./node_modules/js-yaml/index.js");
/* harmony import */ var js_yaml__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(js_yaml__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_ha_code_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/ha-code-editor */ "./src/components/ha-code-editor.ts");



const isEmpty = (obj) => {
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            return false;
        }
    }
    return true;
};
class YAMLTextArea extends preact__WEBPACK_IMPORTED_MODULE_0__["Component"] {
    constructor(props) {
        super(props);
        let value;
        try {
            value =
                props.value && !isEmpty(props.value)
                    ? js_yaml__WEBPACK_IMPORTED_MODULE_1___default.a.safeDump(props.value)
                    : undefined;
        }
        catch (err) {
            alert(`There was an error converting to YAML: ${err}`);
        }
        this.state = {
            isvalid: true,
            value,
        };
        this.onChange = this.onChange.bind(this);
    }
    onChange(ev) {
        const value = ev.detail.value;
        let parsed;
        let isValid = true;
        if (value) {
            try {
                parsed = js_yaml__WEBPACK_IMPORTED_MODULE_1___default.a.safeLoad(value);
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
            value,
            isValid,
        });
        if (isValid) {
            this.props.onChange(parsed);
        }
    }
    render({ label }, { value, isValid }) {
        const style = {
            minWidth: 300,
            width: "100%",
        };
        return (Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("div", null,
            Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("p", null, label),
            Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("ha-code-editor", { mode: "yaml", style: style, value: value, error: isValid === false, "onvalue-changed": this.onChange })));
    }
}


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
let loaded;
const loadCodeMirror = async () => {
    if (!loaded) {
        loaded = Promise.all(/*! import() | codemirror */[__webpack_require__.e("vendors~codemirror"), __webpack_require__.e("codemirror")]).then(__webpack_require__.bind(null, /*! ./codemirror */ "./src/resources/codemirror.ts"));
    }
    return loaded;
};


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFuZWwtY29uZmlnLWF1dG9tYXRpb25+cGFuZWwtY29uZmlnLXNjcmlwdC5jaHVuay5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9jb21tb24vZW50aXR5L2hhc19sb2NhdGlvbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL3ByZWFjdC9ldmVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL3ByZWFjdC91bm1vdW50LnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2RldmljZS9oYS1kZXZpY2UtYWN0aW9uLXBpY2tlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9kZXZpY2UvaGEtZGV2aWNlLWF1dG9tYXRpb24tcGlja2VyLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2RldmljZS9oYS1kZXZpY2UtY29uZGl0aW9uLXBpY2tlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9kZXZpY2UvaGEtZGV2aWNlLXBpY2tlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9lbnRpdHkvaGEtZW50aXR5LXBpY2tlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9oYS1jb2RlLWVkaXRvci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9oYS1jb21iby1ib3guanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaGEtZmFiLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2hhLWZvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaGEtcGFwZXItZHJvcGRvd24tbWVudS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9oYS1wYXBlci1zbGlkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaGEtc2VydmljZS1waWNrZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaGEtdGV4dGFyZWEuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xheW91dHMvaGEtYXBwLWxheW91dC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbWl4aW5zL3N1YnNjcmliZS1taXhpbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL2NvbmZpZy9qcy9jb25kaXRpb24vY29uZGl0aW9uX2VkaXQudHN4Iiwid2VicGFjazovLy8uL3NyYy9wYW5lbHMvY29uZmlnL2pzL2NvbmRpdGlvbi9jb25kaXRpb25fcm93LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL2NvbmZpZy9qcy9jb25kaXRpb24vZGV2aWNlLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL2NvbmZpZy9qcy9jb25kaXRpb24vaW5kZXgudHN4Iiwid2VicGFjazovLy8uL3NyYy9wYW5lbHMvY29uZmlnL2pzL2NvbmRpdGlvbi9sb2dpY2FsLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL2NvbmZpZy9qcy9jb25kaXRpb24vbnVtZXJpY19zdGF0ZS50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhbmVscy9jb25maWcvanMvY29uZGl0aW9uL3N0YXRlLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL2NvbmZpZy9qcy9jb25kaXRpb24vc3VuLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL2NvbmZpZy9qcy9jb25kaXRpb24vdGVtcGxhdGUudHN4Iiwid2VicGFjazovLy8uL3NyYy9wYW5lbHMvY29uZmlnL2pzL2NvbmRpdGlvbi90aW1lLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL2NvbmZpZy9qcy9jb25kaXRpb24vem9uZS50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhbmVscy9jb25maWcvanMvc2NyaXB0L2FjdGlvbl9lZGl0LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL2NvbmZpZy9qcy9zY3JpcHQvYWN0aW9uX3Jvdy50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhbmVscy9jb25maWcvanMvc2NyaXB0L2NhbGxfc2VydmljZS50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhbmVscy9jb25maWcvanMvc2NyaXB0L2NvbmRpdGlvbi50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhbmVscy9jb25maWcvanMvc2NyaXB0L2RlbGF5LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL2NvbmZpZy9qcy9zY3JpcHQvZGV2aWNlLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL2NvbmZpZy9qcy9zY3JpcHQvZXZlbnQudHN4Iiwid2VicGFjazovLy8uL3NyYy9wYW5lbHMvY29uZmlnL2pzL3NjcmlwdC9pbmRleC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhbmVscy9jb25maWcvanMvc2NyaXB0L3NjZW5lLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL2NvbmZpZy9qcy9zY3JpcHQvd2FpdC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhbmVscy9jb25maWcvanMveWFtbF90ZXh0YXJlYS50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3Jlc291cmNlcy9jb2RlbWlycm9yLm9uZGVtYW5kLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEhhc3NFbnRpdHkgfSBmcm9tIFwiaG9tZS1hc3Npc3RhbnQtanMtd2Vic29ja2V0XCI7XG5cbmV4cG9ydCBjb25zdCBoYXNMb2NhdGlvbiA9IChzdGF0ZU9iajogSGFzc0VudGl0eSkgPT4ge1xuICByZXR1cm4gKFxuICAgIFwibGF0aXR1ZGVcIiBpbiBzdGF0ZU9iai5hdHRyaWJ1dGVzICYmIFwibG9uZ2l0dWRlXCIgaW4gc3RhdGVPYmouYXR0cmlidXRlc1xuICApO1xufTtcbiIsIi8vIGludGVyZmFjZSBPbkNoYW5nZUNvbXBvbmVudCB7XG4vLyAgIHByb3BzOiB7XG4vLyAgICAgaW5kZXg6IG51bWJlcjtcbi8vICAgICBvbkNoYW5nZShpbmRleDogbnVtYmVyLCBkYXRhOiBvYmplY3QpO1xuLy8gICB9O1xuLy8gfVxuXG4vLyBleHBvcnQgZnVuY3Rpb24gb25DaGFuZ2VFdmVudCh0aGlzOiBPbkNoYW5nZUNvbXBvbmVudCwgcHJvcCwgZXYpIHtcbmV4cG9ydCBmdW5jdGlvbiBvbkNoYW5nZUV2ZW50KHRoaXM6IGFueSwgcHJvcCwgZXYpIHtcbiAgY29uc3Qgb3JpZ0RhdGEgPSB0aGlzLnByb3BzW3Byb3BdO1xuXG4gIGlmIChldi50YXJnZXQudmFsdWUgPT09IG9yaWdEYXRhW2V2LnRhcmdldC5uYW1lXSkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGNvbnN0IGRhdGEgPSB7IC4uLm9yaWdEYXRhIH07XG5cbiAgaWYgKGV2LnRhcmdldC52YWx1ZSkge1xuICAgIGRhdGFbZXYudGFyZ2V0Lm5hbWVdID0gZXYudGFyZ2V0LnZhbHVlO1xuICB9IGVsc2Uge1xuICAgIGRlbGV0ZSBkYXRhW2V2LnRhcmdldC5uYW1lXTtcbiAgfVxuXG4gIHRoaXMucHJvcHMub25DaGFuZ2UodGhpcy5wcm9wcy5pbmRleCwgZGF0YSk7XG59XG4iLCJpbXBvcnQgeyByZW5kZXIgfSBmcm9tIFwicHJlYWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVubW91bnQobW91bnRFbCkge1xuICByZW5kZXIoXG4gICAgLy8gQHRzLWlnbm9yZVxuICAgICgpID0+IG51bGwsXG4gICAgbW91bnRFbFxuICApO1xufVxuIiwiaW1wb3J0IHsgY3VzdG9tRWxlbWVudCB9IGZyb20gXCJsaXQtZWxlbWVudFwiO1xuaW1wb3J0IHtcbiAgRGV2aWNlQWN0aW9uLFxuICBmZXRjaERldmljZUFjdGlvbnMsXG4gIGxvY2FsaXplRGV2aWNlQXV0b21hdGlvbkFjdGlvbixcbn0gZnJvbSBcIi4uLy4uL2RhdGEvZGV2aWNlX2F1dG9tYXRpb25cIjtcbmltcG9ydCBcIi4uLy4uL2NvbXBvbmVudHMvaGEtcGFwZXItZHJvcGRvd24tbWVudVwiO1xuaW1wb3J0IHsgSGFEZXZpY2VBdXRvbWF0aW9uUGlja2VyIH0gZnJvbSBcIi4vaGEtZGV2aWNlLWF1dG9tYXRpb24tcGlja2VyXCI7XG5cbkBjdXN0b21FbGVtZW50KFwiaGEtZGV2aWNlLWFjdGlvbi1waWNrZXJcIilcbmNsYXNzIEhhRGV2aWNlQWN0aW9uUGlja2VyIGV4dGVuZHMgSGFEZXZpY2VBdXRvbWF0aW9uUGlja2VyPERldmljZUFjdGlvbj4ge1xuICBwcm90ZWN0ZWQgTk9fQVVUT01BVElPTl9URVhUID0gXCJObyBhY3Rpb25zXCI7XG4gIHByb3RlY3RlZCBVTktOT1dOX0FVVE9NQVRJT05fVEVYVCA9IFwiVW5rbm93biBhY3Rpb25cIjtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcihcbiAgICAgIGxvY2FsaXplRGV2aWNlQXV0b21hdGlvbkFjdGlvbixcbiAgICAgIGZldGNoRGV2aWNlQWN0aW9ucyxcbiAgICAgIChkZXZpY2VJZD86IHN0cmluZykgPT4gKHtcbiAgICAgICAgZGV2aWNlX2lkOiBkZXZpY2VJZCB8fCBcIlwiLFxuICAgICAgICBkb21haW46IFwiXCIsXG4gICAgICAgIGVudGl0eV9pZDogXCJcIixcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxufVxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBIVE1MRWxlbWVudFRhZ05hbWVNYXAge1xuICAgIFwiaGEtZGV2aWNlLWFjdGlvbi1waWNrZXJcIjogSGFEZXZpY2VBY3Rpb25QaWNrZXI7XG4gIH1cbn1cbiIsImltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWlucHV0L3BhcGVyLWlucHV0XCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1pdGVtL3BhcGVyLWl0ZW1cIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWl0ZW0vcGFwZXItaXRlbS1ib2R5XCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1saXN0Ym94L3BhcGVyLWxpc3Rib3hcIjtcbmltcG9ydCB7XG4gIExpdEVsZW1lbnQsXG4gIFRlbXBsYXRlUmVzdWx0LFxuICBodG1sLFxuICBjc3MsXG4gIENTU1Jlc3VsdCxcbiAgcHJvcGVydHksXG59IGZyb20gXCJsaXQtZWxlbWVudFwiO1xuaW1wb3J0IHsgSG9tZUFzc2lzdGFudCB9IGZyb20gXCIuLi8uLi90eXBlc1wiO1xuaW1wb3J0IHsgZmlyZUV2ZW50IH0gZnJvbSBcIi4uLy4uL2NvbW1vbi9kb20vZmlyZV9ldmVudFwiO1xuaW1wb3J0IHtcbiAgRGV2aWNlQXV0b21hdGlvbixcbiAgZGV2aWNlQXV0b21hdGlvbnNFcXVhbCxcbn0gZnJvbSBcIi4uLy4uL2RhdGEvZGV2aWNlX2F1dG9tYXRpb25cIjtcbmltcG9ydCBcIi4uLy4uL2NvbXBvbmVudHMvaGEtcGFwZXItZHJvcGRvd24tbWVudVwiO1xuXG5jb25zdCBOT19BVVRPTUFUSU9OX0tFWSA9IFwiTk9fQVVUT01BVElPTlwiO1xuY29uc3QgVU5LTk9XTl9BVVRPTUFUSU9OX0tFWSA9IFwiVU5LTk9XTl9BVVRPTUFUSU9OXCI7XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBIYURldmljZUF1dG9tYXRpb25QaWNrZXI8XG4gIFQgZXh0ZW5kcyBEZXZpY2VBdXRvbWF0aW9uXG4+IGV4dGVuZHMgTGl0RWxlbWVudCB7XG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyBoYXNzITogSG9tZUFzc2lzdGFudDtcbiAgQHByb3BlcnR5KCkgcHVibGljIGxhYmVsPzogc3RyaW5nO1xuICBAcHJvcGVydHkoKSBwdWJsaWMgZGV2aWNlSWQ/OiBzdHJpbmc7XG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyB2YWx1ZT86IFQ7XG4gIHByb3RlY3RlZCBOT19BVVRPTUFUSU9OX1RFWFQgPSBcIk5vIGF1dG9tYXRpb25zXCI7XG4gIHByb3RlY3RlZCBVTktOT1dOX0FVVE9NQVRJT05fVEVYVCA9IFwiVW5rbm93biBhdXRvbWF0aW9uXCI7XG4gIEBwcm9wZXJ0eSgpIHByaXZhdGUgX2F1dG9tYXRpb25zOiBUW10gPSBbXTtcblxuICAvLyBUcmlnZ2VyIGFuIGVtcHR5IHJlbmRlciBzbyB3ZSBzdGFydCB3aXRoIGEgY2xlYW4gRE9NLlxuICAvLyBwYXBlci1saXN0Ym94IGRvZXMgbm90IGxpa2UgY2hhbmdpbmcgdGhpbmdzIGFyb3VuZC5cbiAgQHByb3BlcnR5KCkgcHJpdmF0ZSBfcmVuZGVyRW1wdHkgPSBmYWxzZTtcblxuICBwcml2YXRlIF9sb2NhbGl6ZURldmljZUF1dG9tYXRpb246IChcbiAgICBoYXNzOiBIb21lQXNzaXN0YW50LFxuICAgIGF1dG9tYXRpb246IFRcbiAgKSA9PiBzdHJpbmc7XG4gIHByaXZhdGUgX2ZldGNoRGV2aWNlQXV0b21hdGlvbnM6IChcbiAgICBoYXNzOiBIb21lQXNzaXN0YW50LFxuICAgIGRldmljZUlkOiBzdHJpbmdcbiAgKSA9PiBQcm9taXNlPFRbXT47XG4gIHByaXZhdGUgX2NyZWF0ZU5vQXV0b21hdGlvbjogKGRldmljZUlkPzogc3RyaW5nKSA9PiBUO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIGxvY2FsaXplRGV2aWNlQXV0b21hdGlvbjogSGFEZXZpY2VBdXRvbWF0aW9uUGlja2VyPFxuICAgICAgVFxuICAgID5bXCJfbG9jYWxpemVEZXZpY2VBdXRvbWF0aW9uXCJdLFxuICAgIGZldGNoRGV2aWNlQXV0b21hdGlvbnM6IEhhRGV2aWNlQXV0b21hdGlvblBpY2tlcjxcbiAgICAgIFRcbiAgICA+W1wiX2ZldGNoRGV2aWNlQXV0b21hdGlvbnNcIl0sXG4gICAgY3JlYXRlTm9BdXRvbWF0aW9uOiBIYURldmljZUF1dG9tYXRpb25QaWNrZXI8VD5bXCJfY3JlYXRlTm9BdXRvbWF0aW9uXCJdXG4gICkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5fbG9jYWxpemVEZXZpY2VBdXRvbWF0aW9uID0gbG9jYWxpemVEZXZpY2VBdXRvbWF0aW9uO1xuICAgIHRoaXMuX2ZldGNoRGV2aWNlQXV0b21hdGlvbnMgPSBmZXRjaERldmljZUF1dG9tYXRpb25zO1xuICAgIHRoaXMuX2NyZWF0ZU5vQXV0b21hdGlvbiA9IGNyZWF0ZU5vQXV0b21hdGlvbjtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0IF9rZXkoKSB7XG4gICAgaWYgKFxuICAgICAgIXRoaXMudmFsdWUgfHxcbiAgICAgIGRldmljZUF1dG9tYXRpb25zRXF1YWwoXG4gICAgICAgIHRoaXMuX2NyZWF0ZU5vQXV0b21hdGlvbih0aGlzLmRldmljZUlkKSxcbiAgICAgICAgdGhpcy52YWx1ZVxuICAgICAgKVxuICAgICkge1xuICAgICAgcmV0dXJuIE5PX0FVVE9NQVRJT05fS0VZO1xuICAgIH1cblxuICAgIGNvbnN0IGlkeCA9IHRoaXMuX2F1dG9tYXRpb25zLmZpbmRJbmRleCgoYXV0b21hdGlvbikgPT5cbiAgICAgIGRldmljZUF1dG9tYXRpb25zRXF1YWwoYXV0b21hdGlvbiwgdGhpcy52YWx1ZSEpXG4gICAgKTtcblxuICAgIGlmIChpZHggPT09IC0xKSB7XG4gICAgICByZXR1cm4gVU5LTk9XTl9BVVRPTUFUSU9OX0tFWTtcbiAgICB9XG5cbiAgICByZXR1cm4gYCR7dGhpcy5fYXV0b21hdGlvbnNbaWR4XS5kZXZpY2VfaWR9XyR7aWR4fWA7XG4gIH1cblxuICBwcm90ZWN0ZWQgcmVuZGVyKCk6IFRlbXBsYXRlUmVzdWx0IHwgdm9pZCB7XG4gICAgaWYgKHRoaXMuX3JlbmRlckVtcHR5KSB7XG4gICAgICByZXR1cm4gaHRtbGBgO1xuICAgIH1cbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxoYS1wYXBlci1kcm9wZG93bi1tZW51XG4gICAgICAgIC5sYWJlbD0ke3RoaXMubGFiZWx9XG4gICAgICAgIC52YWx1ZT0ke3RoaXMudmFsdWVcbiAgICAgICAgICA/IHRoaXMuX2xvY2FsaXplRGV2aWNlQXV0b21hdGlvbih0aGlzLmhhc3MsIHRoaXMudmFsdWUpXG4gICAgICAgICAgOiBcIlwifVxuICAgICAgICA/ZGlzYWJsZWQ9JHt0aGlzLl9hdXRvbWF0aW9ucy5sZW5ndGggPT09IDB9XG4gICAgICA+XG4gICAgICAgIDxwYXBlci1saXN0Ym94XG4gICAgICAgICAgc2xvdD1cImRyb3Bkb3duLWNvbnRlbnRcIlxuICAgICAgICAgIC5zZWxlY3RlZD0ke3RoaXMuX2tleX1cbiAgICAgICAgICBhdHRyLWZvci1zZWxlY3RlZD1cImtleVwiXG4gICAgICAgICAgQGlyb24tc2VsZWN0PSR7dGhpcy5fYXV0b21hdGlvbkNoYW5nZWR9XG4gICAgICAgID5cbiAgICAgICAgICA8cGFwZXItaXRlbVxuICAgICAgICAgICAga2V5PSR7Tk9fQVVUT01BVElPTl9LRVl9XG4gICAgICAgICAgICAuYXV0b21hdGlvbj0ke3RoaXMuX2NyZWF0ZU5vQXV0b21hdGlvbih0aGlzLmRldmljZUlkKX1cbiAgICAgICAgICAgIGhpZGRlblxuICAgICAgICAgID5cbiAgICAgICAgICAgICR7dGhpcy5OT19BVVRPTUFUSU9OX1RFWFR9XG4gICAgICAgICAgPC9wYXBlci1pdGVtPlxuICAgICAgICAgIDxwYXBlci1pdGVtXG4gICAgICAgICAgICBrZXk9JHtVTktOT1dOX0FVVE9NQVRJT05fS0VZfVxuICAgICAgICAgICAgLmF1dG9tYXRpb249JHt0aGlzLnZhbHVlfVxuICAgICAgICAgICAgaGlkZGVuXG4gICAgICAgICAgPlxuICAgICAgICAgICAgJHt0aGlzLlVOS05PV05fQVVUT01BVElPTl9URVhUfVxuICAgICAgICAgIDwvcGFwZXItaXRlbT5cbiAgICAgICAgICAke3RoaXMuX2F1dG9tYXRpb25zLm1hcChcbiAgICAgICAgICAgIChhdXRvbWF0aW9uLCBpZHgpID0+IGh0bWxgXG4gICAgICAgICAgICAgIDxwYXBlci1pdGVtXG4gICAgICAgICAgICAgICAga2V5PSR7YCR7dGhpcy5kZXZpY2VJZH1fJHtpZHh9YH1cbiAgICAgICAgICAgICAgICAuYXV0b21hdGlvbj0ke2F1dG9tYXRpb259XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAke3RoaXMuX2xvY2FsaXplRGV2aWNlQXV0b21hdGlvbih0aGlzLmhhc3MsIGF1dG9tYXRpb24pfVxuICAgICAgICAgICAgICA8L3BhcGVyLWl0ZW0+XG4gICAgICAgICAgICBgXG4gICAgICAgICAgKX1cbiAgICAgICAgPC9wYXBlci1saXN0Ym94PlxuICAgICAgPC9oYS1wYXBlci1kcm9wZG93bi1tZW51PlxuICAgIGA7XG4gIH1cblxuICBwcm90ZWN0ZWQgdXBkYXRlZChjaGFuZ2VkUHJvcHMpIHtcbiAgICBzdXBlci51cGRhdGVkKGNoYW5nZWRQcm9wcyk7XG5cbiAgICBpZiAoY2hhbmdlZFByb3BzLmhhcyhcImRldmljZUlkXCIpKSB7XG4gICAgICB0aGlzLl91cGRhdGVEZXZpY2VJbmZvKCk7XG4gICAgfVxuXG4gICAgLy8gVGhlIHZhbHVlIGhhcyBjaGFuZ2VkLCBmb3JjZSB0aGUgbGlzdGJveCB0byB1cGRhdGVcbiAgICBpZiAoY2hhbmdlZFByb3BzLmhhcyhcInZhbHVlXCIpIHx8IGNoYW5nZWRQcm9wcy5oYXMoXCJfcmVuZGVyRW1wdHlcIikpIHtcbiAgICAgIGNvbnN0IGxpc3Rib3ggPSB0aGlzLnNoYWRvd1Jvb3QhLnF1ZXJ5U2VsZWN0b3IoXCJwYXBlci1saXN0Ym94XCIpITtcbiAgICAgIGlmIChsaXN0Ym94KSB7XG4gICAgICAgIGxpc3Rib3guX3NlbGVjdFNlbGVjdGVkKHRoaXMuX2tleSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBfdXBkYXRlRGV2aWNlSW5mbygpIHtcbiAgICB0aGlzLl9hdXRvbWF0aW9ucyA9IHRoaXMuZGV2aWNlSWRcbiAgICAgID8gYXdhaXQgdGhpcy5fZmV0Y2hEZXZpY2VBdXRvbWF0aW9ucyh0aGlzLmhhc3MsIHRoaXMuZGV2aWNlSWQpXG4gICAgICA6IC8vIE5vIGRldmljZSwgY2xlYXIgdGhlIGxpc3Qgb2YgYXV0b21hdGlvbnNcbiAgICAgICAgW107XG5cbiAgICAvLyBJZiB0aGVyZSBpcyBubyB2YWx1ZSwgb3IgaWYgd2UgaGF2ZSBjaGFuZ2VkIHRoZSBkZXZpY2UgSUQsIHJlc2V0IHRoZSB2YWx1ZS5cbiAgICBpZiAoIXRoaXMudmFsdWUgfHwgdGhpcy52YWx1ZS5kZXZpY2VfaWQgIT09IHRoaXMuZGV2aWNlSWQpIHtcbiAgICAgIHRoaXMuX3NldFZhbHVlKFxuICAgICAgICB0aGlzLl9hdXRvbWF0aW9ucy5sZW5ndGhcbiAgICAgICAgICA/IHRoaXMuX2F1dG9tYXRpb25zWzBdXG4gICAgICAgICAgOiB0aGlzLl9jcmVhdGVOb0F1dG9tYXRpb24odGhpcy5kZXZpY2VJZClcbiAgICAgICk7XG4gICAgfVxuICAgIHRoaXMuX3JlbmRlckVtcHR5ID0gdHJ1ZTtcbiAgICBhd2FpdCB0aGlzLnVwZGF0ZUNvbXBsZXRlO1xuICAgIHRoaXMuX3JlbmRlckVtcHR5ID0gZmFsc2U7XG4gIH1cblxuICBwcml2YXRlIF9hdXRvbWF0aW9uQ2hhbmdlZChldikge1xuICAgIHRoaXMuX3NldFZhbHVlKGV2LmRldGFpbC5pdGVtLmF1dG9tYXRpb24pO1xuICB9XG5cbiAgcHJpdmF0ZSBfc2V0VmFsdWUoYXV0b21hdGlvbjogVCkge1xuICAgIGlmICh0aGlzLnZhbHVlICYmIGRldmljZUF1dG9tYXRpb25zRXF1YWwoYXV0b21hdGlvbiwgdGhpcy52YWx1ZSkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy52YWx1ZSA9IGF1dG9tYXRpb247XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBmaXJlRXZlbnQodGhpcywgXCJjaGFuZ2VcIik7XG4gICAgfSwgMCk7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHN0eWxlcygpOiBDU1NSZXN1bHQge1xuICAgIHJldHVybiBjc3NgXG4gICAgICBoYS1wYXBlci1kcm9wZG93bi1tZW51IHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICB9XG4gICAgICBwYXBlci1saXN0Ym94IHtcbiAgICAgICAgbWluLXdpZHRoOiAyMDBweDtcbiAgICAgIH1cbiAgICAgIHBhcGVyLWl0ZW0ge1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICB9XG4gICAgYDtcbiAgfVxufVxuIiwiaW1wb3J0IHsgY3VzdG9tRWxlbWVudCB9IGZyb20gXCJsaXQtZWxlbWVudFwiO1xuaW1wb3J0IHtcbiAgRGV2aWNlQ29uZGl0aW9uLFxuICBmZXRjaERldmljZUNvbmRpdGlvbnMsXG4gIGxvY2FsaXplRGV2aWNlQXV0b21hdGlvbkNvbmRpdGlvbixcbn0gZnJvbSBcIi4uLy4uL2RhdGEvZGV2aWNlX2F1dG9tYXRpb25cIjtcbmltcG9ydCBcIi4uLy4uL2NvbXBvbmVudHMvaGEtcGFwZXItZHJvcGRvd24tbWVudVwiO1xuaW1wb3J0IHsgSGFEZXZpY2VBdXRvbWF0aW9uUGlja2VyIH0gZnJvbSBcIi4vaGEtZGV2aWNlLWF1dG9tYXRpb24tcGlja2VyXCI7XG5cbkBjdXN0b21FbGVtZW50KFwiaGEtZGV2aWNlLWNvbmRpdGlvbi1waWNrZXJcIilcbmNsYXNzIEhhRGV2aWNlQ29uZGl0aW9uUGlja2VyIGV4dGVuZHMgSGFEZXZpY2VBdXRvbWF0aW9uUGlja2VyPFxuICBEZXZpY2VDb25kaXRpb25cbj4ge1xuICBwcm90ZWN0ZWQgTk9fQVVUT01BVElPTl9URVhUID0gXCJObyBjb25kaXRpb25zXCI7XG4gIHByb3RlY3RlZCBVTktOT1dOX0FVVE9NQVRJT05fVEVYVCA9IFwiVW5rbm93biBjb25kaXRpb25cIjtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcihcbiAgICAgIGxvY2FsaXplRGV2aWNlQXV0b21hdGlvbkNvbmRpdGlvbixcbiAgICAgIGZldGNoRGV2aWNlQ29uZGl0aW9ucyxcbiAgICAgIChkZXZpY2VJZD86IHN0cmluZykgPT4gKHtcbiAgICAgICAgZGV2aWNlX2lkOiBkZXZpY2VJZCB8fCBcIlwiLFxuICAgICAgICBjb25kaXRpb246IFwiZGV2aWNlXCIsXG4gICAgICAgIGRvbWFpbjogXCJcIixcbiAgICAgICAgZW50aXR5X2lkOiBcIlwiLFxuICAgICAgfSlcbiAgICApO1xuICB9XG59XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIEhUTUxFbGVtZW50VGFnTmFtZU1hcCB7XG4gICAgXCJoYS1kZXZpY2UtY29uZGl0aW9uLXBpY2tlclwiOiBIYURldmljZUNvbmRpdGlvblBpY2tlcjtcbiAgfVxufVxuIiwiaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItaW5wdXQvcGFwZXItaW5wdXRcIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWl0ZW0vcGFwZXItaXRlbVwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItaXRlbS9wYXBlci1pdGVtLWJvZHlcIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWRyb3Bkb3duLW1lbnUvcGFwZXItZHJvcGRvd24tbWVudS1saWdodFwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItbGlzdGJveC9wYXBlci1saXN0Ym94XCI7XG5pbXBvcnQgbWVtb2l6ZU9uZSBmcm9tIFwibWVtb2l6ZS1vbmVcIjtcbmltcG9ydCB7XG4gIExpdEVsZW1lbnQsXG4gIFRlbXBsYXRlUmVzdWx0LFxuICBodG1sLFxuICBjc3MsXG4gIENTU1Jlc3VsdCxcbiAgY3VzdG9tRWxlbWVudCxcbiAgcHJvcGVydHksXG59IGZyb20gXCJsaXQtZWxlbWVudFwiO1xuaW1wb3J0IHsgVW5zdWJzY3JpYmVGdW5jIH0gZnJvbSBcImhvbWUtYXNzaXN0YW50LWpzLXdlYnNvY2tldFwiO1xuaW1wb3J0IHsgU3Vic2NyaWJlTWl4aW4gfSBmcm9tIFwiLi4vLi4vbWl4aW5zL3N1YnNjcmliZS1taXhpblwiO1xuXG5pbXBvcnQgeyBIb21lQXNzaXN0YW50IH0gZnJvbSBcIi4uLy4uL3R5cGVzXCI7XG5pbXBvcnQgeyBmaXJlRXZlbnQgfSBmcm9tIFwiLi4vLi4vY29tbW9uL2RvbS9maXJlX2V2ZW50XCI7XG5pbXBvcnQge1xuICBEZXZpY2VSZWdpc3RyeUVudHJ5LFxuICBzdWJzY3JpYmVEZXZpY2VSZWdpc3RyeSxcbn0gZnJvbSBcIi4uLy4uL2RhdGEvZGV2aWNlX3JlZ2lzdHJ5XCI7XG5pbXBvcnQgeyBjb21wYXJlIH0gZnJvbSBcIi4uLy4uL2NvbW1vbi9zdHJpbmcvY29tcGFyZVwiO1xuXG5AY3VzdG9tRWxlbWVudChcImhhLWRldmljZS1waWNrZXJcIilcbmNsYXNzIEhhRGV2aWNlUGlja2VyIGV4dGVuZHMgU3Vic2NyaWJlTWl4aW4oTGl0RWxlbWVudCkge1xuICBAcHJvcGVydHkoKSBwdWJsaWMgaGFzcz86IEhvbWVBc3Npc3RhbnQ7XG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyBsYWJlbD86IHN0cmluZztcbiAgQHByb3BlcnR5KCkgcHVibGljIHZhbHVlPzogc3RyaW5nO1xuICBAcHJvcGVydHkoKSBwdWJsaWMgZGV2aWNlcz86IERldmljZVJlZ2lzdHJ5RW50cnlbXTtcblxuICBwcml2YXRlIF9zb3J0ZWREZXZpY2VzID0gbWVtb2l6ZU9uZSgoZGV2aWNlcz86IERldmljZVJlZ2lzdHJ5RW50cnlbXSkgPT4ge1xuICAgIGlmICghZGV2aWNlcyB8fCBkZXZpY2VzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgcmV0dXJuIGRldmljZXMgfHwgW107XG4gICAgfVxuICAgIGNvbnN0IHNvcnRlZCA9IFsuLi5kZXZpY2VzXTtcbiAgICBzb3J0ZWQuc29ydCgoYSwgYikgPT4gY29tcGFyZShhLm5hbWUgfHwgXCJcIiwgYi5uYW1lIHx8IFwiXCIpKTtcbiAgICByZXR1cm4gc29ydGVkO1xuICB9KTtcblxuICBwdWJsaWMgaGFzc1N1YnNjcmliZSgpOiBVbnN1YnNjcmliZUZ1bmNbXSB7XG4gICAgcmV0dXJuIFtcbiAgICAgIHN1YnNjcmliZURldmljZVJlZ2lzdHJ5KHRoaXMuaGFzcyEuY29ubmVjdGlvbiEsIChkZXZpY2VzKSA9PiB7XG4gICAgICAgIHRoaXMuZGV2aWNlcyA9IGRldmljZXM7XG4gICAgICB9KSxcbiAgICBdO1xuICB9XG5cbiAgcHJvdGVjdGVkIHJlbmRlcigpOiBUZW1wbGF0ZVJlc3VsdCB8IHZvaWQge1xuICAgIHJldHVybiBodG1sYFxuICAgICAgPHBhcGVyLWRyb3Bkb3duLW1lbnUtbGlnaHQgLmxhYmVsPSR7dGhpcy5sYWJlbH0+XG4gICAgICAgIDxwYXBlci1saXN0Ym94XG4gICAgICAgICAgc2xvdD1cImRyb3Bkb3duLWNvbnRlbnRcIlxuICAgICAgICAgIC5zZWxlY3RlZD0ke3RoaXMuX3ZhbHVlfVxuICAgICAgICAgIGF0dHItZm9yLXNlbGVjdGVkPVwiZGF0YS1kZXZpY2UtaWRcIlxuICAgICAgICAgIEBpcm9uLXNlbGVjdD0ke3RoaXMuX2RldmljZUNoYW5nZWR9XG4gICAgICAgID5cbiAgICAgICAgICA8cGFwZXItaXRlbSBkYXRhLWRldmljZS1pZD1cIlwiPlxuICAgICAgICAgICAgTm8gZGV2aWNlXG4gICAgICAgICAgPC9wYXBlci1pdGVtPlxuICAgICAgICAgICR7dGhpcy5fc29ydGVkRGV2aWNlcyh0aGlzLmRldmljZXMpLm1hcChcbiAgICAgICAgICAgIChkZXZpY2UpID0+IGh0bWxgXG4gICAgICAgICAgICAgIDxwYXBlci1pdGVtIGRhdGEtZGV2aWNlLWlkPSR7ZGV2aWNlLmlkfT5cbiAgICAgICAgICAgICAgICAke2RldmljZS5uYW1lX2J5X3VzZXIgfHwgZGV2aWNlLm5hbWV9XG4gICAgICAgICAgICAgIDwvcGFwZXItaXRlbT5cbiAgICAgICAgICAgIGBcbiAgICAgICAgICApfVxuICAgICAgICA8L3BhcGVyLWxpc3Rib3g+XG4gICAgICA8L3BhcGVyLWRyb3Bkb3duLW1lbnUtbGlnaHQ+XG4gICAgYDtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0IF92YWx1ZSgpIHtcbiAgICByZXR1cm4gdGhpcy52YWx1ZSB8fCBcIlwiO1xuICB9XG5cbiAgcHJpdmF0ZSBfZGV2aWNlQ2hhbmdlZChldikge1xuICAgIGNvbnN0IG5ld1ZhbHVlID0gZXYuZGV0YWlsLml0ZW0uZGF0YXNldC5kZXZpY2VJZDtcblxuICAgIGlmIChuZXdWYWx1ZSAhPT0gdGhpcy5fdmFsdWUpIHtcbiAgICAgIHRoaXMudmFsdWUgPSBuZXdWYWx1ZTtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBmaXJlRXZlbnQodGhpcywgXCJ2YWx1ZS1jaGFuZ2VkXCIsIHsgdmFsdWU6IG5ld1ZhbHVlIH0pO1xuICAgICAgICBmaXJlRXZlbnQodGhpcywgXCJjaGFuZ2VcIik7XG4gICAgICB9LCAwKTtcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgZ2V0IHN0eWxlcygpOiBDU1NSZXN1bHQge1xuICAgIHJldHVybiBjc3NgXG4gICAgICBwYXBlci1kcm9wZG93bi1tZW51LWxpZ2h0IHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICB9XG4gICAgICBwYXBlci1saXN0Ym94IHtcbiAgICAgICAgbWluLXdpZHRoOiAyMDBweDtcbiAgICAgIH1cbiAgICAgIHBhcGVyLWl0ZW0ge1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICB9XG4gICAgYDtcbiAgfVxufVxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBIVE1MRWxlbWVudFRhZ05hbWVNYXAge1xuICAgIFwiaGEtZGV2aWNlLXBpY2tlclwiOiBIYURldmljZVBpY2tlcjtcbiAgfVxufVxuIiwiaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItaWNvbi1idXR0b24vcGFwZXItaWNvbi1idXR0b25cIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWlucHV0L3BhcGVyLWlucHV0XCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1pdGVtL3BhcGVyLWljb24taXRlbVwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItaXRlbS9wYXBlci1pdGVtLWJvZHlcIjtcbmltcG9ydCBcIkB2YWFkaW4vdmFhZGluLWNvbWJvLWJveC92YWFkaW4tY29tYm8tYm94LWxpZ2h0XCI7XG5pbXBvcnQgbWVtb2l6ZU9uZSBmcm9tIFwibWVtb2l6ZS1vbmVcIjtcblxuaW1wb3J0IFwiLi9zdGF0ZS1iYWRnZVwiO1xuXG5pbXBvcnQgeyBjb21wdXRlU3RhdGVOYW1lIH0gZnJvbSBcIi4uLy4uL2NvbW1vbi9lbnRpdHkvY29tcHV0ZV9zdGF0ZV9uYW1lXCI7XG5pbXBvcnQge1xuICBMaXRFbGVtZW50LFxuICBUZW1wbGF0ZVJlc3VsdCxcbiAgaHRtbCxcbiAgY3NzLFxuICBDU1NSZXN1bHQsXG4gIHByb3BlcnR5LFxuICBQcm9wZXJ0eVZhbHVlcyxcbn0gZnJvbSBcImxpdC1lbGVtZW50XCI7XG5pbXBvcnQgeyBIb21lQXNzaXN0YW50IH0gZnJvbSBcIi4uLy4uL3R5cGVzXCI7XG5pbXBvcnQgeyBIYXNzRW50aXR5IH0gZnJvbSBcImhvbWUtYXNzaXN0YW50LWpzLXdlYnNvY2tldFwiO1xuaW1wb3J0IHsgUG9seW1lckNoYW5nZWRFdmVudCB9IGZyb20gXCIuLi8uLi9wb2x5bWVyLXR5cGVzXCI7XG5pbXBvcnQgeyBmaXJlRXZlbnQgfSBmcm9tIFwiLi4vLi4vY29tbW9uL2RvbS9maXJlX2V2ZW50XCI7XG5cbmV4cG9ydCB0eXBlIEhhRW50aXR5UGlja2VyRW50aXR5RmlsdGVyRnVuYyA9IChlbnRpdHlJZDogSGFzc0VudGl0eSkgPT4gYm9vbGVhbjtcblxuY29uc3Qgcm93UmVuZGVyZXIgPSAoXG4gIHJvb3Q6IEhUTUxFbGVtZW50LFxuICBfb3duZXIsXG4gIG1vZGVsOiB7IGl0ZW06IEhhc3NFbnRpdHkgfVxuKSA9PiB7XG4gIGlmICghcm9vdC5maXJzdEVsZW1lbnRDaGlsZCkge1xuICAgIHJvb3QuaW5uZXJIVE1MID0gYFxuICAgICAgPHN0eWxlPlxuICAgICAgICBwYXBlci1pY29uLWl0ZW0ge1xuICAgICAgICAgIG1hcmdpbjogLTEwcHg7XG4gICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgfVxuICAgICAgPC9zdHlsZT5cbiAgICAgIDxwYXBlci1pY29uLWl0ZW0+XG4gICAgICAgIDxzdGF0ZS1iYWRnZSBzdGF0ZS1vYmo9XCJbW2l0ZW1dXVwiIHNsb3Q9XCJpdGVtLWljb25cIj48L3N0YXRlLWJhZGdlPlxuICAgICAgICA8cGFwZXItaXRlbS1ib2R5IHR3by1saW5lPVwiXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz0nbmFtZSc+W1tfY29tcHV0ZVN0YXRlTmFtZShpdGVtKV1dPC9kaXY+XG4gICAgICAgICAgPGRpdiBzZWNvbmRhcnk+W1tpdGVtLmVudGl0eV9pZF1dPC9kaXY+XG4gICAgICAgIDwvcGFwZXItaXRlbS1ib2R5PlxuICAgICAgPC9wYXBlci1pY29uLWl0ZW0+XG4gICAgYDtcbiAgfVxuXG4gIHJvb3QucXVlcnlTZWxlY3RvcihcInN0YXRlLWJhZGdlXCIpIS5zdGF0ZU9iaiA9IG1vZGVsLml0ZW07XG4gIHJvb3QucXVlcnlTZWxlY3RvcihcIi5uYW1lXCIpIS50ZXh0Q29udGVudCA9IGNvbXB1dGVTdGF0ZU5hbWUobW9kZWwuaXRlbSk7XG4gIHJvb3QucXVlcnlTZWxlY3RvcihcIltzZWNvbmRhcnldXCIpIS50ZXh0Q29udGVudCA9IG1vZGVsLml0ZW0uZW50aXR5X2lkO1xufTtcblxuY2xhc3MgSGFFbnRpdHlQaWNrZXIgZXh0ZW5kcyBMaXRFbGVtZW50IHtcbiAgQHByb3BlcnR5KHsgdHlwZTogQm9vbGVhbiB9KSBwdWJsaWMgYXV0b2ZvY3VzPzogYm9vbGVhbjtcbiAgQHByb3BlcnR5KHsgdHlwZTogQm9vbGVhbiB9KSBwdWJsaWMgZGlzYWJsZWQ/OiBib29sZWFuO1xuICBAcHJvcGVydHkoeyB0eXBlOiBCb29sZWFuLCBhdHRyaWJ1dGU6IFwiYWxsb3ctY3VzdG9tLWVudGl0eVwiIH0pXG4gIHB1YmxpYyBhbGxvd0N1c3RvbUVudGl0eTtcbiAgQHByb3BlcnR5KCkgcHVibGljIGhhc3M/OiBIb21lQXNzaXN0YW50O1xuICBAcHJvcGVydHkoKSBwdWJsaWMgbGFiZWw/OiBzdHJpbmc7XG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyB2YWx1ZT86IHN0cmluZztcbiAgQHByb3BlcnR5KHsgYXR0cmlidXRlOiBcImRvbWFpbi1maWx0ZXJcIiB9KSBwdWJsaWMgZG9tYWluRmlsdGVyPzogc3RyaW5nO1xuICBAcHJvcGVydHkoKSBwdWJsaWMgZW50aXR5RmlsdGVyPzogSGFFbnRpdHlQaWNrZXJFbnRpdHlGaWx0ZXJGdW5jO1xuICBAcHJvcGVydHkoeyB0eXBlOiBCb29sZWFuIH0pIHByaXZhdGUgX29wZW5lZD86IGJvb2xlYW47XG4gIEBwcm9wZXJ0eSgpIHByaXZhdGUgX2hhc3M/OiBIb21lQXNzaXN0YW50O1xuXG4gIHByaXZhdGUgX2dldFN0YXRlcyA9IG1lbW9pemVPbmUoXG4gICAgKFxuICAgICAgaGFzczogdGhpc1tcImhhc3NcIl0sXG4gICAgICBkb21haW5GaWx0ZXI6IHRoaXNbXCJkb21haW5GaWx0ZXJcIl0sXG4gICAgICBlbnRpdHlGaWx0ZXI6IHRoaXNbXCJlbnRpdHlGaWx0ZXJcIl1cbiAgICApID0+IHtcbiAgICAgIGxldCBzdGF0ZXM6IEhhc3NFbnRpdHlbXSA9IFtdO1xuXG4gICAgICBpZiAoIWhhc3MpIHtcbiAgICAgICAgcmV0dXJuIFtdO1xuICAgICAgfVxuICAgICAgbGV0IGVudGl0eUlkcyA9IE9iamVjdC5rZXlzKGhhc3Muc3RhdGVzKTtcblxuICAgICAgaWYgKGRvbWFpbkZpbHRlcikge1xuICAgICAgICBlbnRpdHlJZHMgPSBlbnRpdHlJZHMuZmlsdGVyKFxuICAgICAgICAgIChlaWQpID0+IGVpZC5zdWJzdHIoMCwgZWlkLmluZGV4T2YoXCIuXCIpKSA9PT0gZG9tYWluRmlsdGVyXG4gICAgICAgICk7XG4gICAgICB9XG5cbiAgICAgIHN0YXRlcyA9IGVudGl0eUlkcy5zb3J0KCkubWFwKChrZXkpID0+IGhhc3MhLnN0YXRlc1trZXldKTtcblxuICAgICAgaWYgKGVudGl0eUZpbHRlcikge1xuICAgICAgICBzdGF0ZXMgPSBzdGF0ZXMuZmlsdGVyKFxuICAgICAgICAgIChzdGF0ZU9iaikgPT5cbiAgICAgICAgICAgIC8vIFdlIGFsd2F5cyB3YW50IHRvIGluY2x1ZGUgdGhlIGVudGl0eSBvZiB0aGUgY3VycmVudCB2YWx1ZVxuICAgICAgICAgICAgc3RhdGVPYmouZW50aXR5X2lkID09PSB0aGlzLnZhbHVlIHx8IGVudGl0eUZpbHRlciEoc3RhdGVPYmopXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgICByZXR1cm4gc3RhdGVzO1xuICAgIH1cbiAgKTtcblxuICBwcm90ZWN0ZWQgdXBkYXRlZChjaGFuZ2VkUHJvcHM6IFByb3BlcnR5VmFsdWVzKSB7XG4gICAgc3VwZXIudXBkYXRlZChjaGFuZ2VkUHJvcHMpO1xuXG4gICAgaWYgKGNoYW5nZWRQcm9wcy5oYXMoXCJoYXNzXCIpICYmICF0aGlzLl9vcGVuZWQpIHtcbiAgICAgIHRoaXMuX2hhc3MgPSB0aGlzLmhhc3M7XG4gICAgfVxuICB9XG5cbiAgcHJvdGVjdGVkIHJlbmRlcigpOiBUZW1wbGF0ZVJlc3VsdCB8IHZvaWQge1xuICAgIGNvbnN0IHN0YXRlcyA9IHRoaXMuX2dldFN0YXRlcyhcbiAgICAgIHRoaXMuX2hhc3MsXG4gICAgICB0aGlzLmRvbWFpbkZpbHRlcixcbiAgICAgIHRoaXMuZW50aXR5RmlsdGVyXG4gICAgKTtcblxuICAgIHJldHVybiBodG1sYFxuICAgICAgPHZhYWRpbi1jb21iby1ib3gtbGlnaHRcbiAgICAgICAgaXRlbS12YWx1ZS1wYXRoPVwiZW50aXR5X2lkXCJcbiAgICAgICAgaXRlbS1sYWJlbC1wYXRoPVwiZW50aXR5X2lkXCJcbiAgICAgICAgLml0ZW1zPSR7c3RhdGVzfVxuICAgICAgICAudmFsdWU9JHt0aGlzLl92YWx1ZX1cbiAgICAgICAgLmFsbG93Q3VzdG9tVmFsdWU9JHt0aGlzLmFsbG93Q3VzdG9tRW50aXR5fVxuICAgICAgICAucmVuZGVyZXI9JHtyb3dSZW5kZXJlcn1cbiAgICAgICAgQG9wZW5lZC1jaGFuZ2VkPSR7dGhpcy5fb3BlbmVkQ2hhbmdlZH1cbiAgICAgICAgQHZhbHVlLWNoYW5nZWQ9JHt0aGlzLl92YWx1ZUNoYW5nZWR9XG4gICAgICA+XG4gICAgICAgIDxwYXBlci1pbnB1dFxuICAgICAgICAgIC5hdXRvZm9jdXM9JHt0aGlzLmF1dG9mb2N1c31cbiAgICAgICAgICAubGFiZWw9JHt0aGlzLmxhYmVsID09PSB1bmRlZmluZWQgJiYgdGhpcy5faGFzc1xuICAgICAgICAgICAgPyB0aGlzLl9oYXNzLmxvY2FsaXplKFwidWkuY29tcG9uZW50cy5lbnRpdHkuZW50aXR5LXBpY2tlci5lbnRpdHlcIilcbiAgICAgICAgICAgIDogdGhpcy5sYWJlbH1cbiAgICAgICAgICAudmFsdWU9JHt0aGlzLl92YWx1ZX1cbiAgICAgICAgICAuZGlzYWJsZWQ9JHt0aGlzLmRpc2FibGVkfVxuICAgICAgICAgIGNsYXNzPVwiaW5wdXRcIlxuICAgICAgICAgIGF1dG9jYXBpdGFsaXplPVwibm9uZVwiXG4gICAgICAgICAgYXV0b2NvbXBsZXRlPVwib2ZmXCJcbiAgICAgICAgICBhdXRvY29ycmVjdD1cIm9mZlwiXG4gICAgICAgICAgc3BlbGxjaGVjaz1cImZhbHNlXCJcbiAgICAgICAgPlxuICAgICAgICAgICR7dGhpcy52YWx1ZVxuICAgICAgICAgICAgPyBodG1sYFxuICAgICAgICAgICAgICAgIDxwYXBlci1pY29uLWJ1dHRvblxuICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIkNsZWFyXCJcbiAgICAgICAgICAgICAgICAgIHNsb3Q9XCJzdWZmaXhcIlxuICAgICAgICAgICAgICAgICAgY2xhc3M9XCJjbGVhci1idXR0b25cIlxuICAgICAgICAgICAgICAgICAgaWNvbj1cImhhc3M6Y2xvc2VcIlxuICAgICAgICAgICAgICAgICAgbm8tcmlwcGxlXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgQ2xlYXJcbiAgICAgICAgICAgICAgICA8L3BhcGVyLWljb24tYnV0dG9uPlxuICAgICAgICAgICAgICBgXG4gICAgICAgICAgICA6IFwiXCJ9XG4gICAgICAgICAgJHtzdGF0ZXMubGVuZ3RoID4gMFxuICAgICAgICAgICAgPyBodG1sYFxuICAgICAgICAgICAgICAgIDxwYXBlci1pY29uLWJ1dHRvblxuICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIlNob3cgZW50aXRpZXNcIlxuICAgICAgICAgICAgICAgICAgc2xvdD1cInN1ZmZpeFwiXG4gICAgICAgICAgICAgICAgICBjbGFzcz1cInRvZ2dsZS1idXR0b25cIlxuICAgICAgICAgICAgICAgICAgLmljb249JHt0aGlzLl9vcGVuZWQgPyBcImhhc3M6bWVudS11cFwiIDogXCJoYXNzOm1lbnUtZG93blwifVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIFRvZ2dsZVxuICAgICAgICAgICAgICAgIDwvcGFwZXItaWNvbi1idXR0b24+XG4gICAgICAgICAgICAgIGBcbiAgICAgICAgICAgIDogXCJcIn1cbiAgICAgICAgPC9wYXBlci1pbnB1dD5cbiAgICAgIDwvdmFhZGluLWNvbWJvLWJveC1saWdodD5cbiAgICBgO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXQgX3ZhbHVlKCkge1xuICAgIHJldHVybiB0aGlzLnZhbHVlIHx8IFwiXCI7XG4gIH1cblxuICBwcml2YXRlIF9vcGVuZWRDaGFuZ2VkKGV2OiBQb2x5bWVyQ2hhbmdlZEV2ZW50PGJvb2xlYW4+KSB7XG4gICAgdGhpcy5fb3BlbmVkID0gZXYuZGV0YWlsLnZhbHVlO1xuICB9XG5cbiAgcHJpdmF0ZSBfdmFsdWVDaGFuZ2VkKGV2OiBQb2x5bWVyQ2hhbmdlZEV2ZW50PHN0cmluZz4pIHtcbiAgICBjb25zdCBuZXdWYWx1ZSA9IGV2LmRldGFpbC52YWx1ZTtcbiAgICBpZiAobmV3VmFsdWUgIT09IHRoaXMuX3ZhbHVlKSB7XG4gICAgICB0aGlzLnZhbHVlID0gZXYuZGV0YWlsLnZhbHVlO1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGZpcmVFdmVudCh0aGlzLCBcInZhbHVlLWNoYW5nZWRcIiwgeyB2YWx1ZTogdGhpcy52YWx1ZSB9KTtcbiAgICAgICAgZmlyZUV2ZW50KHRoaXMsIFwiY2hhbmdlXCIpO1xuICAgICAgfSwgMCk7XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIGdldCBzdHlsZXMoKTogQ1NTUmVzdWx0IHtcbiAgICByZXR1cm4gY3NzYFxuICAgICAgcGFwZXItaW5wdXQgPiBwYXBlci1pY29uLWJ1dHRvbiB7XG4gICAgICAgIHdpZHRoOiAyNHB4O1xuICAgICAgICBoZWlnaHQ6IDI0cHg7XG4gICAgICAgIHBhZGRpbmc6IDJweDtcbiAgICAgICAgY29sb3I6IHZhcigtLXNlY29uZGFyeS10ZXh0LWNvbG9yKTtcbiAgICAgIH1cbiAgICAgIFtoaWRkZW5dIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgIH1cbiAgICBgO1xuICB9XG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcImhhLWVudGl0eS1waWNrZXJcIiwgSGFFbnRpdHlQaWNrZXIpO1xuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBIVE1MRWxlbWVudFRhZ05hbWVNYXAge1xuICAgIFwiaGEtZW50aXR5LXBpY2tlclwiOiBIYUVudGl0eVBpY2tlcjtcbiAgfVxufVxuIiwiaW1wb3J0IHsgbG9hZENvZGVNaXJyb3IgfSBmcm9tIFwiLi4vcmVzb3VyY2VzL2NvZGVtaXJyb3Iub25kZW1hbmRcIjtcbmltcG9ydCB7IGZpcmVFdmVudCB9IGZyb20gXCIuLi9jb21tb24vZG9tL2ZpcmVfZXZlbnRcIjtcbmltcG9ydCB7XG4gIFVwZGF0aW5nRWxlbWVudCxcbiAgcHJvcGVydHksXG4gIGN1c3RvbUVsZW1lbnQsXG4gIFByb3BlcnR5VmFsdWVzLFxufSBmcm9tIFwibGl0LWVsZW1lbnRcIjtcbmltcG9ydCB7IEVkaXRvciB9IGZyb20gXCJjb2RlbWlycm9yXCI7XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIEhBU1NEb21FdmVudHMge1xuICAgIFwiZWRpdG9yLXNhdmVcIjogdW5kZWZpbmVkO1xuICB9XG59XG5cbkBjdXN0b21FbGVtZW50KFwiaGEtY29kZS1lZGl0b3JcIilcbmV4cG9ydCBjbGFzcyBIYUNvZGVFZGl0b3IgZXh0ZW5kcyBVcGRhdGluZ0VsZW1lbnQge1xuICBwdWJsaWMgY29kZW1pcnJvcj86IEVkaXRvcjtcbiAgQHByb3BlcnR5KCkgcHVibGljIG1vZGU/OiBzdHJpbmc7XG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyBhdXRvZm9jdXMgPSBmYWxzZTtcbiAgQHByb3BlcnR5KCkgcHVibGljIHJ0bCA9IGZhbHNlO1xuICBAcHJvcGVydHkoKSBwdWJsaWMgZXJyb3IgPSBmYWxzZTtcbiAgQHByb3BlcnR5KCkgcHJpdmF0ZSBfdmFsdWUgPSBcIlwiO1xuXG4gIHB1YmxpYyBzZXQgdmFsdWUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3ZhbHVlID0gdmFsdWU7XG4gIH1cblxuICBwdWJsaWMgZ2V0IHZhbHVlKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuY29kZW1pcnJvciA/IHRoaXMuY29kZW1pcnJvci5nZXRWYWx1ZSgpIDogdGhpcy5fdmFsdWU7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGhhc0NvbW1lbnRzKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnNoYWRvd1Jvb3QhLnF1ZXJ5U2VsZWN0b3IoXCJzcGFuLmNtLWNvbW1lbnRcIikgPyB0cnVlIDogZmFsc2U7XG4gIH1cblxuICBwdWJsaWMgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgc3VwZXIuY29ubmVjdGVkQ2FsbGJhY2soKTtcbiAgICBpZiAoIXRoaXMuY29kZW1pcnJvcikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLmNvZGVtaXJyb3IucmVmcmVzaCgpO1xuICAgIGlmICh0aGlzLmF1dG9mb2N1cyAhPT0gZmFsc2UpIHtcbiAgICAgIHRoaXMuY29kZW1pcnJvci5mb2N1cygpO1xuICAgIH1cbiAgfVxuXG4gIHByb3RlY3RlZCB1cGRhdGUoY2hhbmdlZFByb3BzOiBQcm9wZXJ0eVZhbHVlcyk6IHZvaWQge1xuICAgIHN1cGVyLnVwZGF0ZShjaGFuZ2VkUHJvcHMpO1xuXG4gICAgaWYgKCF0aGlzLmNvZGVtaXJyb3IpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoY2hhbmdlZFByb3BzLmhhcyhcIm1vZGVcIikpIHtcbiAgICAgIHRoaXMuY29kZW1pcnJvci5zZXRPcHRpb24oXCJtb2RlXCIsIHRoaXMubW9kZSk7XG4gICAgfVxuICAgIGlmIChjaGFuZ2VkUHJvcHMuaGFzKFwiYXV0b2ZvY3VzXCIpKSB7XG4gICAgICB0aGlzLmNvZGVtaXJyb3Iuc2V0T3B0aW9uKFwiYXV0b2ZvY3VzXCIsIHRoaXMuYXV0b2ZvY3VzICE9PSBmYWxzZSk7XG4gICAgfVxuICAgIGlmIChjaGFuZ2VkUHJvcHMuaGFzKFwiX3ZhbHVlXCIpICYmIHRoaXMuX3ZhbHVlICE9PSB0aGlzLnZhbHVlKSB7XG4gICAgICB0aGlzLmNvZGVtaXJyb3Iuc2V0VmFsdWUodGhpcy5fdmFsdWUpO1xuICAgIH1cbiAgICBpZiAoY2hhbmdlZFByb3BzLmhhcyhcInJ0bFwiKSkge1xuICAgICAgdGhpcy5jb2RlbWlycm9yLnNldE9wdGlvbihcImd1dHRlcnNcIiwgdGhpcy5fY2FsY0d1dHRlcnMoKSk7XG4gICAgICB0aGlzLl9zZXRTY3JvbGxCYXJEaXJlY3Rpb24oKTtcbiAgICB9XG4gICAgaWYgKGNoYW5nZWRQcm9wcy5oYXMoXCJlcnJvclwiKSkge1xuICAgICAgdGhpcy5jbGFzc0xpc3QudG9nZ2xlKFwiZXJyb3Itc3RhdGVcIiwgdGhpcy5lcnJvcik7XG4gICAgfVxuICB9XG5cbiAgcHJvdGVjdGVkIGZpcnN0VXBkYXRlZChjaGFuZ2VkUHJvcHM6IFByb3BlcnR5VmFsdWVzKTogdm9pZCB7XG4gICAgc3VwZXIuZmlyc3RVcGRhdGVkKGNoYW5nZWRQcm9wcyk7XG4gICAgdGhpcy5fbG9hZCgpO1xuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBfbG9hZCgpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBjb25zdCBsb2FkZWQgPSBhd2FpdCBsb2FkQ29kZU1pcnJvcigpO1xuXG4gICAgY29uc3QgY29kZU1pcnJvciA9IGxvYWRlZC5jb2RlTWlycm9yO1xuXG4gICAgY29uc3Qgc2hhZG93Um9vdCA9IHRoaXMuYXR0YWNoU2hhZG93KHsgbW9kZTogXCJvcGVuXCIgfSk7XG5cbiAgICBzaGFkb3dSb290IS5pbm5lckhUTUwgPSBgXG4gICAgPHN0eWxlPlxuICAgICAgJHtsb2FkZWQuY29kZU1pcnJvckNzc31cbiAgICAgIC5Db2RlTWlycm9yIHtcbiAgICAgICAgaGVpZ2h0OiB2YXIoLS1jb2RlLW1pcnJvci1oZWlnaHQsIGF1dG8pO1xuICAgICAgICBkaXJlY3Rpb246IHZhcigtLWNvZGUtbWlycm9yLWRpcmVjdGlvbiwgbHRyKTtcbiAgICAgIH1cbiAgICAgIC5Db2RlTWlycm9yLXNjcm9sbCB7XG4gICAgICAgIG1heC1oZWlnaHQ6IHZhcigtLWNvZGUtbWlycm9yLW1heC1oZWlnaHQsIC0tY29kZS1taXJyb3ItaGVpZ2h0KTtcbiAgICAgIH1cbiAgICAgIC5Db2RlTWlycm9yLWd1dHRlcnMge1xuICAgICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCB2YXIoLS1wYXBlci1pbnB1dC1jb250YWluZXItY29sb3IsIHZhcigtLXNlY29uZGFyeS10ZXh0LWNvbG9yKSk7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXBhcGVyLWRpYWxvZy1iYWNrZ3JvdW5kLWNvbG9yLCB2YXIoLS1wcmltYXJ5LWJhY2tncm91bmQtY29sb3IpKTtcbiAgICAgICAgdHJhbnNpdGlvbjogMC4ycyBlYXNlIGJvcmRlci1yaWdodDtcbiAgICAgIH1cbiAgICAgIDpob3N0KC5lcnJvci1zdGF0ZSkgLkNvZGVNaXJyb3ItZ3V0dGVycyB7XG4gICAgICAgIGJvcmRlci1jb2xvcjogdmFyKC0tZXJyb3Itc3RhdGUtY29sb3IsIHJlZCk7XG4gICAgICB9XG4gICAgICAuQ29kZU1pcnJvci1mb2N1c2VkIC5Db2RlTWlycm9yLWd1dHRlcnMge1xuICAgICAgICBib3JkZXItcmlnaHQ6IDJweCBzb2xpZCB2YXIoLS1wYXBlci1pbnB1dC1jb250YWluZXItZm9jdXMtY29sb3IsIHZhcigtLXByaW1hcnktY29sb3IpKTtcbiAgICAgIH1cbiAgICAgIC5Db2RlTWlycm9yLWxpbmVudW1iZXIge1xuICAgICAgICBjb2xvcjogdmFyKC0tcGFwZXItZGlhbG9nLWNvbG9yLCB2YXIoLS1wcmltYXJ5LXRleHQtY29sb3IpKTtcbiAgICAgIH1cbiAgICAgIC5ydGwgLkNvZGVNaXJyb3ItdnNjcm9sbGJhciB7XG4gICAgICAgIHJpZ2h0OiBhdXRvO1xuICAgICAgICBsZWZ0OiAwcHg7XG4gICAgICB9XG4gICAgICAucnRsLWd1dHRlciB7XG4gICAgICAgIHdpZHRoOiAyMHB4O1xuICAgICAgfVxuICAgIDwvc3R5bGU+YDtcblxuICAgIHRoaXMuY29kZW1pcnJvciA9IGNvZGVNaXJyb3Ioc2hhZG93Um9vdCwge1xuICAgICAgdmFsdWU6IHRoaXMuX3ZhbHVlLFxuICAgICAgbGluZU51bWJlcnM6IHRydWUsXG4gICAgICB0YWJTaXplOiAyLFxuICAgICAgbW9kZTogdGhpcy5tb2RlLFxuICAgICAgYXV0b2ZvY3VzOiB0aGlzLmF1dG9mb2N1cyAhPT0gZmFsc2UsXG4gICAgICB2aWV3cG9ydE1hcmdpbjogSW5maW5pdHksXG4gICAgICBleHRyYUtleXM6IHtcbiAgICAgICAgVGFiOiBcImluZGVudE1vcmVcIixcbiAgICAgICAgXCJTaGlmdC1UYWJcIjogXCJpbmRlbnRMZXNzXCIsXG4gICAgICB9LFxuICAgICAgZ3V0dGVyczogdGhpcy5fY2FsY0d1dHRlcnMoKSxcbiAgICB9KTtcbiAgICB0aGlzLl9zZXRTY3JvbGxCYXJEaXJlY3Rpb24oKTtcbiAgICB0aGlzLmNvZGVtaXJyb3IhLm9uKFwiY2hhbmdlc1wiLCAoKSA9PiB0aGlzLl9vbkNoYW5nZSgpKTtcbiAgfVxuXG4gIHByaXZhdGUgX29uQ2hhbmdlKCk6IHZvaWQge1xuICAgIGNvbnN0IG5ld1ZhbHVlID0gdGhpcy52YWx1ZTtcbiAgICBpZiAobmV3VmFsdWUgPT09IHRoaXMuX3ZhbHVlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuX3ZhbHVlID0gbmV3VmFsdWU7XG4gICAgZmlyZUV2ZW50KHRoaXMsIFwidmFsdWUtY2hhbmdlZFwiLCB7IHZhbHVlOiB0aGlzLl92YWx1ZSB9KTtcbiAgfVxuXG4gIHByaXZhdGUgX2NhbGNHdXR0ZXJzKCk6IHN0cmluZ1tdIHtcbiAgICByZXR1cm4gdGhpcy5ydGwgPyBbXCJydGwtZ3V0dGVyXCIsIFwiQ29kZU1pcnJvci1saW5lbnVtYmVyc1wiXSA6IFtdO1xuICB9XG5cbiAgcHJpdmF0ZSBfc2V0U2Nyb2xsQmFyRGlyZWN0aW9uKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmNvZGVtaXJyb3IpIHtcbiAgICAgIHRoaXMuY29kZW1pcnJvci5nZXRXcmFwcGVyRWxlbWVudCgpLmNsYXNzTGlzdC50b2dnbGUoXCJydGxcIiwgdGhpcy5ydGwpO1xuICAgIH1cbiAgfVxufVxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBIVE1MRWxlbWVudFRhZ05hbWVNYXAge1xuICAgIFwiaGEtY29kZS1lZGl0b3JcIjogSGFDb2RlRWRpdG9yO1xuICB9XG59XG4iLCJpbXBvcnQgXCJAcG9seW1lci9wYXBlci1pY29uLWJ1dHRvbi9wYXBlci1pY29uLWJ1dHRvblwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItaW5wdXQvcGFwZXItaW5wdXRcIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWl0ZW0vcGFwZXItaXRlbVwiO1xuaW1wb3J0IHsgaHRtbCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZ1wiO1xuaW1wb3J0IHsgUG9seW1lckVsZW1lbnQgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWVsZW1lbnRcIjtcbmltcG9ydCBcIkB2YWFkaW4vdmFhZGluLWNvbWJvLWJveC92YWFkaW4tY29tYm8tYm94LWxpZ2h0XCI7XG5cbmltcG9ydCB7IEV2ZW50c01peGluIH0gZnJvbSBcIi4uL21peGlucy9ldmVudHMtbWl4aW5cIjtcblxuY2xhc3MgSGFDb21ib0JveCBleHRlbmRzIEV2ZW50c01peGluKFBvbHltZXJFbGVtZW50KSB7XG4gIHN0YXRpYyBnZXQgdGVtcGxhdGUoKSB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8c3R5bGU+XG4gICAgICAgIHBhcGVyLWlucHV0ID4gcGFwZXItaWNvbi1idXR0b24ge1xuICAgICAgICAgIHdpZHRoOiAyNHB4O1xuICAgICAgICAgIGhlaWdodDogMjRweDtcbiAgICAgICAgICBwYWRkaW5nOiAycHg7XG4gICAgICAgICAgY29sb3I6IHZhcigtLXNlY29uZGFyeS10ZXh0LWNvbG9yKTtcbiAgICAgICAgfVxuICAgICAgICBbaGlkZGVuXSB7XG4gICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgfVxuICAgICAgPC9zdHlsZT5cbiAgICAgIDx2YWFkaW4tY29tYm8tYm94LWxpZ2h0XG4gICAgICAgIGl0ZW1zPVwiW1tfaXRlbXNdXVwiXG4gICAgICAgIGl0ZW0tdmFsdWUtcGF0aD1cIltbaXRlbVZhbHVlUGF0aF1dXCJcbiAgICAgICAgaXRlbS1sYWJlbC1wYXRoPVwiW1tpdGVtTGFiZWxQYXRoXV1cIlxuICAgICAgICB2YWx1ZT1cInt7dmFsdWV9fVwiXG4gICAgICAgIG9wZW5lZD1cInt7b3BlbmVkfX1cIlxuICAgICAgICBhbGxvdy1jdXN0b20tdmFsdWU9XCJbW2FsbG93Q3VzdG9tVmFsdWVdXVwiXG4gICAgICAgIG9uLWNoYW5nZT1cIl9maXJlQ2hhbmdlZFwiXG4gICAgICA+XG4gICAgICAgIDxwYXBlci1pbnB1dFxuICAgICAgICAgIGF1dG9mb2N1cz1cIltbYXV0b2ZvY3VzXV1cIlxuICAgICAgICAgIGxhYmVsPVwiW1tsYWJlbF1dXCJcbiAgICAgICAgICBjbGFzcz1cImlucHV0XCJcbiAgICAgICAgICB2YWx1ZT1cIltbdmFsdWVdXVwiXG4gICAgICAgID5cbiAgICAgICAgICA8cGFwZXItaWNvbi1idXR0b25cbiAgICAgICAgICAgIHNsb3Q9XCJzdWZmaXhcIlxuICAgICAgICAgICAgY2xhc3M9XCJjbGVhci1idXR0b25cIlxuICAgICAgICAgICAgaWNvbj1cImhhc3M6Y2xvc2VcIlxuICAgICAgICAgICAgaGlkZGVuJD1cIltbIXZhbHVlXV1cIlxuICAgICAgICAgICAgPkNsZWFyPC9wYXBlci1pY29uLWJ1dHRvblxuICAgICAgICAgID5cbiAgICAgICAgICA8cGFwZXItaWNvbi1idXR0b25cbiAgICAgICAgICAgIHNsb3Q9XCJzdWZmaXhcIlxuICAgICAgICAgICAgY2xhc3M9XCJ0b2dnbGUtYnV0dG9uXCJcbiAgICAgICAgICAgIGljb249XCJbW19jb21wdXRlVG9nZ2xlSWNvbihvcGVuZWQpXV1cIlxuICAgICAgICAgICAgaGlkZGVuJD1cIltbIWl0ZW1zLmxlbmd0aF1dXCJcbiAgICAgICAgICAgID5Ub2dnbGU8L3BhcGVyLWljb24tYnV0dG9uXG4gICAgICAgICAgPlxuICAgICAgICA8L3BhcGVyLWlucHV0PlxuICAgICAgICA8dGVtcGxhdGU+XG4gICAgICAgICAgPHN0eWxlPlxuICAgICAgICAgICAgcGFwZXItaXRlbSB7XG4gICAgICAgICAgICAgIG1hcmdpbjogLTVweCAtMTBweDtcbiAgICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICA8L3N0eWxlPlxuICAgICAgICAgIDxwYXBlci1pdGVtPltbX2NvbXB1dGVJdGVtTGFiZWwoaXRlbSwgaXRlbUxhYmVsUGF0aCldXTwvcGFwZXItaXRlbT5cbiAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgIDwvdmFhZGluLWNvbWJvLWJveC1saWdodD5cbiAgICBgO1xuICB9XG5cbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBhbGxvd0N1c3RvbVZhbHVlOiBCb29sZWFuLFxuICAgICAgaXRlbXM6IHtcbiAgICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgICBvYnNlcnZlcjogXCJfaXRlbXNDaGFuZ2VkXCIsXG4gICAgICB9LFxuICAgICAgX2l0ZW1zOiBPYmplY3QsXG4gICAgICBpdGVtTGFiZWxQYXRoOiBTdHJpbmcsXG4gICAgICBpdGVtVmFsdWVQYXRoOiBTdHJpbmcsXG4gICAgICBhdXRvZm9jdXM6IEJvb2xlYW4sXG4gICAgICBsYWJlbDogU3RyaW5nLFxuICAgICAgb3BlbmVkOiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIHZhbHVlOiBmYWxzZSxcbiAgICAgICAgb2JzZXJ2ZXI6IFwiX29wZW5lZENoYW5nZWRcIixcbiAgICAgIH0sXG4gICAgICB2YWx1ZToge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIG5vdGlmeTogdHJ1ZSxcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxuXG4gIF9vcGVuZWRDaGFuZ2VkKG5ld1ZhbCkge1xuICAgIGlmICghbmV3VmFsKSB7XG4gICAgICB0aGlzLl9pdGVtcyA9IHRoaXMuaXRlbXM7XG4gICAgfVxuICB9XG5cbiAgX2l0ZW1zQ2hhbmdlZChuZXdWYWwpIHtcbiAgICBpZiAoIXRoaXMub3BlbmVkKSB7XG4gICAgICB0aGlzLl9pdGVtcyA9IG5ld1ZhbDtcbiAgICB9XG4gIH1cblxuICBfY29tcHV0ZVRvZ2dsZUljb24ob3BlbmVkKSB7XG4gICAgcmV0dXJuIG9wZW5lZCA/IFwiaGFzczptZW51LXVwXCIgOiBcImhhc3M6bWVudS1kb3duXCI7XG4gIH1cblxuICBfY29tcHV0ZUl0ZW1MYWJlbChpdGVtLCBpdGVtTGFiZWxQYXRoKSB7XG4gICAgcmV0dXJuIGl0ZW1MYWJlbFBhdGggPyBpdGVtW2l0ZW1MYWJlbFBhdGhdIDogaXRlbTtcbiAgfVxuXG4gIF9maXJlQ2hhbmdlZChldikge1xuICAgIGV2LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIHRoaXMuZmlyZShcImNoYW5nZVwiKTtcbiAgfVxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJoYS1jb21iby1ib3hcIiwgSGFDb21ib0JveCk7XG4iLCJpbXBvcnQge1xuICBjbGFzc01hcCxcbiAgaHRtbCxcbiAgY3VzdG9tRWxlbWVudCxcbiAgQ29uc3RydWN0b3IsXG59IGZyb20gXCJAbWF0ZXJpYWwvbXdjLWJhc2UvYmFzZS1lbGVtZW50XCI7XG5pbXBvcnQgeyByaXBwbGUgfSBmcm9tIFwiQG1hdGVyaWFsL213Yy1yaXBwbGUvcmlwcGxlLWRpcmVjdGl2ZS5qc1wiO1xuXG5pbXBvcnQgXCJAbWF0ZXJpYWwvbXdjLWZhYlwiO1xuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG5pbXBvcnQgeyBGYWIgfSBmcm9tIFwiQG1hdGVyaWFsL213Yy1mYWJcIjtcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxuY29uc3QgTXdjRmFiID0gY3VzdG9tRWxlbWVudHMuZ2V0KFwibXdjLWZhYlwiKSBhcyBDb25zdHJ1Y3RvcjxGYWI+O1xuXG5AY3VzdG9tRWxlbWVudChcImhhLWZhYlwiKVxuZXhwb3J0IGNsYXNzIEhhRmFiIGV4dGVuZHMgTXdjRmFiIHtcbiAgLy8gV2Ugb3ZlcnJpZGUgdGhlIHJlbmRlciBtZXRob2QgYmVjYXVzZSB3ZSBkb24ndCBoYXZlIGFuIGljb24gZm9udCBhbmQgbXdjLWZhYiBkb2Vzbid0IHN1cHBvcnQgb3VyIHN2Zy1pY29uIHNldHMuXG4gIC8vIEJhc2VkIG9uIHZlcnNpb24gbXdjLWZhYiAwLjhcbiAgcHJvdGVjdGVkIHJlbmRlcigpIHtcbiAgICBjb25zdCBjbGFzc2VzID0ge1xuICAgICAgXCJtZGMtZmFiLS1taW5pXCI6IHRoaXMubWluaSxcbiAgICAgIFwibWRjLWZhYi0tZXhpdGVkXCI6IHRoaXMuZXhpdGVkLFxuICAgICAgXCJtZGMtZmFiLS1leHRlbmRlZFwiOiB0aGlzLmV4dGVuZGVkLFxuICAgIH07XG4gICAgY29uc3Qgc2hvd0xhYmVsID0gdGhpcy5sYWJlbCAhPT0gXCJcIiAmJiB0aGlzLmV4dGVuZGVkO1xuICAgIHJldHVybiBodG1sYFxuICAgICAgPGJ1dHRvblxuICAgICAgICAucmlwcGxlPVwiJHtyaXBwbGUoKX1cIlxuICAgICAgICBjbGFzcz1cIm1kYy1mYWIgJHtjbGFzc01hcChjbGFzc2VzKX1cIlxuICAgICAgICA/ZGlzYWJsZWQ9XCIke3RoaXMuZGlzYWJsZWR9XCJcbiAgICAgICAgYXJpYS1sYWJlbD1cIiR7dGhpcy5sYWJlbCB8fCB0aGlzLmljb259XCJcbiAgICAgID5cbiAgICAgICAgJHtzaG93TGFiZWwgJiYgdGhpcy5zaG93SWNvbkF0RW5kID8gdGhpcy5sYWJlbCA6IFwiXCJ9XG4gICAgICAgICR7dGhpcy5pY29uXG4gICAgICAgICAgPyBodG1sYFxuICAgICAgICAgICAgICA8aGEtaWNvbiAuaWNvbj0ke3RoaXMuaWNvbn0+PC9oYS1pY29uPlxuICAgICAgICAgICAgYFxuICAgICAgICAgIDogXCJcIn1cbiAgICAgICAgJHtzaG93TGFiZWwgJiYgIXRoaXMuc2hvd0ljb25BdEVuZCA/IHRoaXMubGFiZWwgOiBcIlwifVxuICAgICAgPC9idXR0b24+XG4gICAgYDtcbiAgfVxufVxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBIVE1MRWxlbWVudFRhZ05hbWVNYXAge1xuICAgIFwiaGEtZmFiXCI6IEhhRmFiO1xuICB9XG59XG4iLCJpbXBvcnQgXCJAcG9seW1lci9wYXBlci1jaGVja2JveC9wYXBlci1jaGVja2JveFwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItZHJvcGRvd24tbWVudS9wYXBlci1kcm9wZG93bi1tZW51XCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1pY29uLWJ1dHRvbi9wYXBlci1pY29uLWJ1dHRvblwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItaW5wdXQvcGFwZXItaW5wdXRcIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWl0ZW0vcGFwZXItaXRlbVwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItbGlzdGJveC9wYXBlci1saXN0Ym94XCI7XG5pbXBvcnQgeyBodG1sIH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2h0bWwtdGFnXCI7XG5pbXBvcnQgeyBQb2x5bWVyRWxlbWVudCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL3BvbHltZXItZWxlbWVudFwiO1xuXG5pbXBvcnQgXCIuL2hhLXBhcGVyLXNsaWRlclwiO1xuaW1wb3J0IHsgRXZlbnRzTWl4aW4gfSBmcm9tIFwiLi4vbWl4aW5zL2V2ZW50cy1taXhpblwiO1xuXG4vKlxuICogQGFwcGxpZXNNaXhpbiBFdmVudHNNaXhpblxuICovXG5jbGFzcyBIYUZvcm0gZXh0ZW5kcyBFdmVudHNNaXhpbihQb2x5bWVyRWxlbWVudCkge1xuICBzdGF0aWMgZ2V0IHRlbXBsYXRlKCkge1xuICAgIHJldHVybiBodG1sYFxuICAgICAgPHN0eWxlPlxuICAgICAgICAuZXJyb3Ige1xuICAgICAgICAgIGNvbG9yOiByZWQ7XG4gICAgICAgIH1cbiAgICAgICAgcGFwZXItY2hlY2tib3gge1xuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICBwYWRkaW5nOiAyMnB4IDA7XG4gICAgICAgIH1cbiAgICAgIDwvc3R5bGU+XG4gICAgICA8dGVtcGxhdGUgaXM9XCJkb20taWZcIiBpZj1cIltbX2lzQXJyYXkoc2NoZW1hKV1dXCIgcmVzdGFtcD1cIlwiPlxuICAgICAgICA8dGVtcGxhdGUgaXM9XCJkb20taWZcIiBpZj1cIltbZXJyb3IuYmFzZV1dXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImVycm9yXCI+W1tjb21wdXRlRXJyb3IoZXJyb3IuYmFzZSwgc2NoZW1hKV1dPC9kaXY+XG4gICAgICAgIDwvdGVtcGxhdGU+XG5cbiAgICAgICAgPHRlbXBsYXRlIGlzPVwiZG9tLXJlcGVhdFwiIGl0ZW1zPVwiW1tzY2hlbWFdXVwiPlxuICAgICAgICAgIDxoYS1mb3JtXG4gICAgICAgICAgICBkYXRhPVwiW1tfZ2V0VmFsdWUoZGF0YSwgaXRlbSldXVwiXG4gICAgICAgICAgICBzY2hlbWE9XCJbW2l0ZW1dXVwiXG4gICAgICAgICAgICBlcnJvcj1cIltbX2dldFZhbHVlKGVycm9yLCBpdGVtKV1dXCJcbiAgICAgICAgICAgIG9uLWRhdGEtY2hhbmdlZD1cIl92YWx1ZUNoYW5nZWRcIlxuICAgICAgICAgICAgY29tcHV0ZS1lcnJvcj1cIltbY29tcHV0ZUVycm9yXV1cIlxuICAgICAgICAgICAgY29tcHV0ZS1sYWJlbD1cIltbY29tcHV0ZUxhYmVsXV1cIlxuICAgICAgICAgICAgY29tcHV0ZS1zdWZmaXg9XCJbW2NvbXB1dGVTdWZmaXhdXVwiXG4gICAgICAgICAgPjwvaGEtZm9ybT5cbiAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgIDwvdGVtcGxhdGU+XG4gICAgICA8dGVtcGxhdGUgaXM9XCJkb20taWZcIiBpZj1cIltbIV9pc0FycmF5KHNjaGVtYSldXVwiIHJlc3RhbXA9XCJcIj5cbiAgICAgICAgPHRlbXBsYXRlIGlzPVwiZG9tLWlmXCIgaWY9XCJbW2Vycm9yXV1cIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiZXJyb3JcIj5bW2NvbXB1dGVFcnJvcihlcnJvciwgc2NoZW1hKV1dPC9kaXY+XG4gICAgICAgIDwvdGVtcGxhdGU+XG5cbiAgICAgICAgPHRlbXBsYXRlXG4gICAgICAgICAgaXM9XCJkb20taWZcIlxuICAgICAgICAgIGlmPSdbW19lcXVhbHMoc2NoZW1hLnR5cGUsIFwic3RyaW5nXCIpXV0nXG4gICAgICAgICAgcmVzdGFtcD1cIlwiXG4gICAgICAgID5cbiAgICAgICAgICA8dGVtcGxhdGVcbiAgICAgICAgICAgIGlzPVwiZG9tLWlmXCJcbiAgICAgICAgICAgIGlmPSdbW19pbmNsdWRlcyhzY2hlbWEubmFtZSwgXCJwYXNzd29yZFwiKV1dJ1xuICAgICAgICAgICAgcmVzdGFtcD1cIlwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPHBhcGVyLWlucHV0XG4gICAgICAgICAgICAgIHR5cGU9XCJbW19wYXNzd29yZEZpZWxkVHlwZSh1bm1hc2tlZFBhc3N3b3JkKV1dXCJcbiAgICAgICAgICAgICAgbGFiZWw9XCJbW2NvbXB1dGVMYWJlbChzY2hlbWEpXV1cIlxuICAgICAgICAgICAgICB2YWx1ZT1cInt7ZGF0YX19XCJcbiAgICAgICAgICAgICAgcmVxdWlyZWQ9XCJbW3NjaGVtYS5yZXF1aXJlZF1dXCJcbiAgICAgICAgICAgICAgYXV0by12YWxpZGF0ZT1cIltbc2NoZW1hLnJlcXVpcmVkXV1cIlxuICAgICAgICAgICAgICBlcnJvci1tZXNzYWdlPVwiUmVxdWlyZWRcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8cGFwZXItaWNvbi1idXR0b25cbiAgICAgICAgICAgICAgICB0b2dnbGVzXG4gICAgICAgICAgICAgICAgYWN0aXZlPVwie3t1bm1hc2tlZFBhc3N3b3JkfX1cIlxuICAgICAgICAgICAgICAgIHNsb3Q9XCJzdWZmaXhcIlxuICAgICAgICAgICAgICAgIGljb249XCJbW19wYXNzd29yZEZpZWxkSWNvbih1bm1hc2tlZFBhc3N3b3JkKV1dXCJcbiAgICAgICAgICAgICAgICBpZD1cImljb25CdXR0b25cIlxuICAgICAgICAgICAgICAgIHRpdGxlPVwiQ2xpY2sgdG8gdG9nZ2xlIGJldHdlZW4gbWFza2VkIGFuZCBjbGVhciBwYXNzd29yZFwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPC9wYXBlci1pY29uLWJ1dHRvbj5cbiAgICAgICAgICAgIDwvcGFwZXItaW5wdXQ+XG4gICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICA8dGVtcGxhdGVcbiAgICAgICAgICAgIGlzPVwiZG9tLWlmXCJcbiAgICAgICAgICAgIGlmPSdbWyFfaW5jbHVkZXMoc2NoZW1hLm5hbWUsIFwicGFzc3dvcmRcIildXSdcbiAgICAgICAgICAgIHJlc3RhbXA9XCJcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxwYXBlci1pbnB1dFxuICAgICAgICAgICAgICBsYWJlbD1cIltbY29tcHV0ZUxhYmVsKHNjaGVtYSldXVwiXG4gICAgICAgICAgICAgIHZhbHVlPVwie3tkYXRhfX1cIlxuICAgICAgICAgICAgICByZXF1aXJlZD1cIltbc2NoZW1hLnJlcXVpcmVkXV1cIlxuICAgICAgICAgICAgICBhdXRvLXZhbGlkYXRlPVwiW1tzY2hlbWEucmVxdWlyZWRdXVwiXG4gICAgICAgICAgICAgIGVycm9yLW1lc3NhZ2U9XCJSZXF1aXJlZFwiXG4gICAgICAgICAgICA+PC9wYXBlci1pbnB1dD5cbiAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICA8L3RlbXBsYXRlPlxuXG4gICAgICAgIDx0ZW1wbGF0ZVxuICAgICAgICAgIGlzPVwiZG9tLWlmXCJcbiAgICAgICAgICBpZj0nW1tfZXF1YWxzKHNjaGVtYS50eXBlLCBcImludGVnZXJcIildXSdcbiAgICAgICAgICByZXN0YW1wPVwiXCJcbiAgICAgICAgPlxuICAgICAgICAgIDx0ZW1wbGF0ZSBpcz1cImRvbS1pZlwiIGlmPVwiW1tfaXNSYW5nZShzY2hlbWEpXV1cIiByZXN0YW1wPVwiXCI+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICBbW2NvbXB1dGVMYWJlbChzY2hlbWEpXV1cbiAgICAgICAgICAgICAgPGhhLXBhcGVyLXNsaWRlclxuICAgICAgICAgICAgICAgIHBpbj1cIlwiXG4gICAgICAgICAgICAgICAgdmFsdWU9XCJ7e2RhdGF9fVwiXG4gICAgICAgICAgICAgICAgbWluPVwiW1tzY2hlbWEudmFsdWVNaW5dXVwiXG4gICAgICAgICAgICAgICAgbWF4PVwiW1tzY2hlbWEudmFsdWVNYXhdXVwiXG4gICAgICAgICAgICAgID48L2hhLXBhcGVyLXNsaWRlcj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgPHRlbXBsYXRlIGlzPVwiZG9tLWlmXCIgaWY9XCJbWyFfaXNSYW5nZShzY2hlbWEpXV1cIiByZXN0YW1wPVwiXCI+XG4gICAgICAgICAgICA8cGFwZXItaW5wdXRcbiAgICAgICAgICAgICAgbGFiZWw9XCJbW2NvbXB1dGVMYWJlbChzY2hlbWEpXV1cIlxuICAgICAgICAgICAgICB2YWx1ZT1cInt7ZGF0YX19XCJcbiAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICAgIHJlcXVpcmVkPVwiW1tzY2hlbWEucmVxdWlyZWRdXVwiXG4gICAgICAgICAgICAgIGF1dG8tdmFsaWRhdGU9XCJbW3NjaGVtYS5yZXF1aXJlZF1dXCJcbiAgICAgICAgICAgICAgZXJyb3ItbWVzc2FnZT1cIlJlcXVpcmVkXCJcbiAgICAgICAgICAgID48L3BhcGVyLWlucHV0PlxuICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgIDwvdGVtcGxhdGU+XG5cbiAgICAgICAgPHRlbXBsYXRlIGlzPVwiZG9tLWlmXCIgaWY9J1tbX2VxdWFscyhzY2hlbWEudHlwZSwgXCJmbG9hdFwiKV1dJyByZXN0YW1wPVwiXCI+XG4gICAgICAgICAgPCEtLSBUT0RPIC0tPlxuICAgICAgICAgIDxwYXBlci1pbnB1dFxuICAgICAgICAgICAgbGFiZWw9XCJbW2NvbXB1dGVMYWJlbChzY2hlbWEpXV1cIlxuICAgICAgICAgICAgdmFsdWU9XCJ7e2RhdGF9fVwiXG4gICAgICAgICAgICByZXF1aXJlZD1cIltbc2NoZW1hLnJlcXVpcmVkXV1cIlxuICAgICAgICAgICAgYXV0by12YWxpZGF0ZT1cIltbc2NoZW1hLnJlcXVpcmVkXV1cIlxuICAgICAgICAgICAgZXJyb3ItbWVzc2FnZT1cIlJlcXVpcmVkXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8c3BhbiBzdWZmaXg9XCJcIiBzbG90PVwic3VmZml4XCI+W1tjb21wdXRlU3VmZml4KHNjaGVtYSldXTwvc3Bhbj5cbiAgICAgICAgICA8L3BhcGVyLWlucHV0PlxuICAgICAgICA8L3RlbXBsYXRlPlxuXG4gICAgICAgIDx0ZW1wbGF0ZVxuICAgICAgICAgIGlzPVwiZG9tLWlmXCJcbiAgICAgICAgICBpZj0nW1tfZXF1YWxzKHNjaGVtYS50eXBlLCBcImJvb2xlYW5cIildXSdcbiAgICAgICAgICByZXN0YW1wPVwiXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8cGFwZXItY2hlY2tib3ggY2hlY2tlZD1cInt7ZGF0YX19XCJcbiAgICAgICAgICAgICAgPltbY29tcHV0ZUxhYmVsKHNjaGVtYSldXTwvcGFwZXItY2hlY2tib3hcbiAgICAgICAgICAgID5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC90ZW1wbGF0ZT5cblxuICAgICAgICA8dGVtcGxhdGVcbiAgICAgICAgICBpcz1cImRvbS1pZlwiXG4gICAgICAgICAgaWY9J1tbX2VxdWFscyhzY2hlbWEudHlwZSwgXCJzZWxlY3RcIildXSdcbiAgICAgICAgICByZXN0YW1wPVwiXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxwYXBlci1kcm9wZG93bi1tZW51IGxhYmVsPVwiW1tjb21wdXRlTGFiZWwoc2NoZW1hKV1dXCI+XG4gICAgICAgICAgICA8cGFwZXItbGlzdGJveFxuICAgICAgICAgICAgICBzbG90PVwiZHJvcGRvd24tY29udGVudFwiXG4gICAgICAgICAgICAgIGF0dHItZm9yLXNlbGVjdGVkPVwiaXRlbS1uYW1lXCJcbiAgICAgICAgICAgICAgc2VsZWN0ZWQ9XCJ7e2RhdGF9fVwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDx0ZW1wbGF0ZSBpcz1cImRvbS1yZXBlYXRcIiBpdGVtcz1cIltbc2NoZW1hLm9wdGlvbnNdXVwiPlxuICAgICAgICAgICAgICAgIDxwYXBlci1pdGVtIGl0ZW0tbmFtZSQ9XCJbW19vcHRpb25WYWx1ZShpdGVtKV1dXCJcbiAgICAgICAgICAgICAgICAgID5bW19vcHRpb25MYWJlbChpdGVtKV1dPC9wYXBlci1pdGVtXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgICAgPC9wYXBlci1saXN0Ym94PlxuICAgICAgICAgIDwvcGFwZXItZHJvcGRvd24tbWVudT5cbiAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgIDwvdGVtcGxhdGU+XG4gICAgYDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgZGF0YToge1xuICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICAgIG5vdGlmeTogdHJ1ZSxcbiAgICAgIH0sXG4gICAgICBzY2hlbWE6IE9iamVjdCxcbiAgICAgIGVycm9yOiBPYmplY3QsXG5cbiAgICAgIC8vIEEgZnVuY3Rpb24gdGhhdCBjb21wdXRlcyB0aGUgbGFiZWwgdG8gYmUgZGlzcGxheWVkIGZvciBhIGdpdmVuXG4gICAgICAvLyBzY2hlbWEgb2JqZWN0LlxuICAgICAgY29tcHV0ZUxhYmVsOiB7XG4gICAgICAgIHR5cGU6IEZ1bmN0aW9uLFxuICAgICAgICB2YWx1ZTogKCkgPT4gKHNjaGVtYSkgPT4gc2NoZW1hICYmIHNjaGVtYS5uYW1lLFxuICAgICAgfSxcblxuICAgICAgLy8gQSBmdW5jdGlvbiB0aGF0IGNvbXB1dGVzIHRoZSBzdWZmaXggdG8gYmUgZGlzcGxheWVkIGZvciBhIGdpdmVuXG4gICAgICAvLyBzY2hlbWEgb2JqZWN0LlxuICAgICAgY29tcHV0ZVN1ZmZpeDoge1xuICAgICAgICB0eXBlOiBGdW5jdGlvbixcbiAgICAgICAgdmFsdWU6ICgpID0+IChzY2hlbWEpID0+XG4gICAgICAgICAgc2NoZW1hICYmXG4gICAgICAgICAgc2NoZW1hLmRlc2NyaXB0aW9uICYmXG4gICAgICAgICAgc2NoZW1hLmRlc2NyaXB0aW9uLnVuaXRfb2ZfbWVhc3VyZW1lbnQsXG4gICAgICB9LFxuXG4gICAgICAvLyBBIGZ1bmN0aW9uIHRoYXQgY29tcHV0ZXMgYW4gZXJyb3IgbWVzc2FnZSB0byBiZSBkaXNwbGF5ZWQgZm9yIGFcbiAgICAgIC8vIGdpdmVuIGVycm9yIElELCBhbmQgcmVsZXZhbnQgc2NoZW1hIG9iamVjdFxuICAgICAgY29tcHV0ZUVycm9yOiB7XG4gICAgICAgIHR5cGU6IEZ1bmN0aW9uLFxuICAgICAgICB2YWx1ZTogKCkgPT4gKGVycm9yLCBzY2hlbWEpID0+IGVycm9yLCAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVudXNlZC12YXJzXG4gICAgICB9LFxuICAgIH07XG4gIH1cblxuICBmb2N1cygpIHtcbiAgICBjb25zdCBpbnB1dCA9IHRoaXMuc2hhZG93Um9vdC5xdWVyeVNlbGVjdG9yKFxuICAgICAgXCJoYS1mb3JtLCBwYXBlci1pbnB1dCwgaGEtcGFwZXItc2xpZGVyLCBwYXBlci1jaGVja2JveCwgcGFwZXItZHJvcGRvd24tbWVudVwiXG4gICAgKTtcblxuICAgIGlmICghaW5wdXQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpbnB1dC5mb2N1cygpO1xuICB9XG5cbiAgX2lzQXJyYXkodmFsKSB7XG4gICAgcmV0dXJuIEFycmF5LmlzQXJyYXkodmFsKTtcbiAgfVxuXG4gIF9pc1JhbmdlKHNjaGVtYSkge1xuICAgIHJldHVybiBcInZhbHVlTWluXCIgaW4gc2NoZW1hICYmIFwidmFsdWVNYXhcIiBpbiBzY2hlbWE7XG4gIH1cblxuICBfZXF1YWxzKGEsIGIpIHtcbiAgICByZXR1cm4gYSA9PT0gYjtcbiAgfVxuXG4gIF9pbmNsdWRlcyhhLCBiKSB7XG4gICAgcmV0dXJuIGEuaW5kZXhPZihiKSA+PSAwO1xuICB9XG5cbiAgX2dldFZhbHVlKG9iaiwgaXRlbSkge1xuICAgIGlmIChvYmopIHtcbiAgICAgIHJldHVybiBvYmpbaXRlbS5uYW1lXTtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBfdmFsdWVDaGFuZ2VkKGV2KSB7XG4gICAgbGV0IHZhbHVlID0gZXYuZGV0YWlsLnZhbHVlO1xuICAgIGlmIChldi5tb2RlbC5pdGVtLnR5cGUgPT09IFwiaW50ZWdlclwiKSB7XG4gICAgICB2YWx1ZSA9IE51bWJlcihldi5kZXRhaWwudmFsdWUpO1xuICAgIH1cbiAgICB0aGlzLnNldChbXCJkYXRhXCIsIGV2Lm1vZGVsLml0ZW0ubmFtZV0sIHZhbHVlKTtcbiAgfVxuXG4gIF9wYXNzd29yZEZpZWxkVHlwZSh1bm1hc2tlZFBhc3N3b3JkKSB7XG4gICAgcmV0dXJuIHVubWFza2VkUGFzc3dvcmQgPyBcInRleHRcIiA6IFwicGFzc3dvcmRcIjtcbiAgfVxuXG4gIF9wYXNzd29yZEZpZWxkSWNvbih1bm1hc2tlZFBhc3N3b3JkKSB7XG4gICAgcmV0dXJuIHVubWFza2VkUGFzc3dvcmQgPyBcImhhc3M6ZXllLW9mZlwiIDogXCJoYXNzOmV5ZVwiO1xuICB9XG5cbiAgX29wdGlvblZhbHVlKGl0ZW0pIHtcbiAgICByZXR1cm4gQXJyYXkuaXNBcnJheShpdGVtKSA/IGl0ZW1bMF0gOiBpdGVtO1xuICB9XG5cbiAgX29wdGlvbkxhYmVsKGl0ZW0pIHtcbiAgICByZXR1cm4gQXJyYXkuaXNBcnJheShpdGVtKSA/IGl0ZW1bMV0gOiBpdGVtO1xuICB9XG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcImhhLWZvcm1cIiwgSGFGb3JtKTtcbiIsImltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWRyb3Bkb3duLW1lbnUvcGFwZXItZHJvcGRvd24tbWVudVwiO1xuaW1wb3J0IHsgQ29uc3RydWN0b3IgfSBmcm9tIFwibGl0LWVsZW1lbnRcIjtcbmltcG9ydCB7IFBvbHltZXJFbGVtZW50IH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXJcIjtcblxuY29uc3QgcGFwZXJEcm9wZG93bkNsYXNzID0gY3VzdG9tRWxlbWVudHMuZ2V0KFxuICBcInBhcGVyLWRyb3Bkb3duLW1lbnVcIlxuKSBhcyBDb25zdHJ1Y3RvcjxQb2x5bWVyRWxlbWVudD47XG5cbi8vIHBhdGNoZXMgcGFwZXIgZHJvcCBkb3duIHRvIHByb3Blcmx5IHN1cHBvcnQgUlRMIC0gaHR0cHM6Ly9naXRodWIuY29tL1BvbHltZXJFbGVtZW50cy9wYXBlci1kcm9wZG93bi1tZW51L2lzc3Vlcy8xODNcbmV4cG9ydCBjbGFzcyBIYVBhcGVyRHJvcGRvd25DbGFzcyBleHRlbmRzIHBhcGVyRHJvcGRvd25DbGFzcyB7XG4gIHB1YmxpYyByZWFkeSgpIHtcbiAgICBzdXBlci5yZWFkeSgpO1xuICAgIC8vIHdhaXQgdG8gY2hlY2sgZm9yIGRpcmVjdGlvbiBzaW5jZSBvdGhlcndpc2UgZGlyZWN0aW9uIGlzIHdyb25nIGV2ZW4gdGhvdWdoIHRvcCBsZXZlbCBpcyBSVExcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGlmICh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzKS5kaXJlY3Rpb24gPT09IFwicnRsXCIpIHtcbiAgICAgICAgdGhpcy5zdHlsZS50ZXh0QWxpZ24gPSBcInJpZ2h0XCI7XG4gICAgICB9XG4gICAgfSwgMTAwKTtcbiAgfVxufVxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBIVE1MRWxlbWVudFRhZ05hbWVNYXAge1xuICAgIFwiaGEtcGFwZXItZHJvcGRvd24tbWVudVwiOiBIYVBhcGVyRHJvcGRvd25DbGFzcztcbiAgfVxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJoYS1wYXBlci1kcm9wZG93bi1tZW51XCIsIEhhUGFwZXJEcm9wZG93bkNsYXNzKTtcbiIsImltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLXNsaWRlci9wYXBlci1zbGlkZXJcIjtcblxuLyoqXG4gKiBAcG9seW1lclxuICogQGN1c3RvbUVsZW1lbnRcbiAqIEBhcHBsaWVzTWl4aW4gcGFwZXItc2xpZGVyXG4gKi9cbmNvbnN0IFBhcGVyU2xpZGVyQ2xhc3MgPSBjdXN0b21FbGVtZW50cy5nZXQoXCJwYXBlci1zbGlkZXJcIik7XG5cbmNsYXNzIEhhUGFwZXJTbGlkZXIgZXh0ZW5kcyBQYXBlclNsaWRlckNsYXNzIHtcbiAgc3RhdGljIGdldCB0ZW1wbGF0ZSgpIHtcbiAgICBjb25zdCB0cGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGVtcGxhdGVcIik7XG4gICAgdHBsLmlubmVySFRNTCA9IFBhcGVyU2xpZGVyQ2xhc3MudGVtcGxhdGUuaW5uZXJIVE1MO1xuICAgIGNvbnN0IHN0eWxlRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gICAgc3R5bGVFbC5pbm5lckhUTUwgPSBgXG4gICAgICAucGluID4gLnNsaWRlci1rbm9iID4gLnNsaWRlci1rbm9iLWlubmVyIHtcbiAgICAgICAgZm9udC1zaXplOiAgdmFyKC0taGEtcGFwZXItc2xpZGVyLXBpbi1mb250LXNpemUsIDEwcHgpO1xuICAgICAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xuICAgICAgfVxuXG4gICAgICAucGluID4gLnNsaWRlci1rbm9iID4gLnNsaWRlci1rbm9iLWlubmVyOjpiZWZvcmUge1xuICAgICAgICB0b3A6IHVuc2V0O1xuICAgICAgICBtYXJnaW4tbGVmdDogdW5zZXQ7XG5cbiAgICAgICAgYm90dG9tOiBjYWxjKDE1cHggKyB2YXIoLS1jYWxjdWxhdGVkLXBhcGVyLXNsaWRlci1oZWlnaHQpLzIpO1xuICAgICAgICBsZWZ0OiA1MCU7XG4gICAgICAgIHdpZHRoOiAyLjJlbTtcbiAgICAgICAgaGVpZ2h0OiAyLjJlbTtcblxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IGxlZnQgYm90dG9tO1xuICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0IGJvdHRvbTtcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpIHNjYWxlKDApIHRyYW5zbGF0ZSgwKTtcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKSBzY2FsZSgwKSB0cmFuc2xhdGUoMCk7XG4gICAgICB9XG5cbiAgICAgIC5waW4uZXhwYW5kID4gLnNsaWRlci1rbm9iID4gLnNsaWRlci1rbm9iLWlubmVyOjpiZWZvcmUge1xuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKC00NWRlZykgc2NhbGUoMSkgdHJhbnNsYXRlKDdweCwgLTdweCk7XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZykgc2NhbGUoMSkgdHJhbnNsYXRlKDdweCwgLTdweCk7XG4gICAgICB9XG5cbiAgICAgIC5waW4gPiAuc2xpZGVyLWtub2IgPiAuc2xpZGVyLWtub2ItaW5uZXI6OmFmdGVyIHtcbiAgICAgICAgdG9wOiB1bnNldDtcbiAgICAgICAgZm9udC1zaXplOiB1bnNldDtcblxuICAgICAgICBib3R0b206IGNhbGMoMTVweCArIHZhcigtLWNhbGN1bGF0ZWQtcGFwZXItc2xpZGVyLWhlaWdodCkvMik7XG4gICAgICAgIGxlZnQ6IDUwJTtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IC0xLjFlbTtcbiAgICAgICAgd2lkdGg6IDIuMmVtO1xuICAgICAgICBoZWlnaHQ6IDIuMWVtO1xuXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyIGJvdHRvbTtcbiAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyIGJvdHRvbTtcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDApIHRyYW5zbGF0ZSgwKTtcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwKSB0cmFuc2xhdGUoMCk7XG4gICAgICB9XG5cbiAgICAgIC5waW4uZXhwYW5kID4gLnNsaWRlci1rbm9iID4gLnNsaWRlci1rbm9iLWlubmVyOjphZnRlciB7XG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKSB0cmFuc2xhdGUoMCwgLTEwcHgpO1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpIHRyYW5zbGF0ZSgwLCAtMTBweCk7XG4gICAgICB9XG5cbiAgICAgIDpob3N0KFtkaXI9XCJydGxcIl0pIC5waW4uZXhwYW5kID4gLnNsaWRlci1rbm9iID4gLnNsaWRlci1rbm9iLWlubmVyOjphZnRlciB7XG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKSB0cmFuc2xhdGUoMCwgLTE3cHgpIHNjYWxlWCgtMSkgIWltcG9ydGFudDtcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKSB0cmFuc2xhdGUoMCwgLTE3cHgpIHNjYWxlWCgtMSkgIWltcG9ydGFudDtcbiAgICAgICAgfVxuICAgIGA7XG4gICAgdHBsLmNvbnRlbnQuYXBwZW5kQ2hpbGQoc3R5bGVFbCk7XG4gICAgcmV0dXJuIHRwbDtcbiAgfVxufVxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwiaGEtcGFwZXItc2xpZGVyXCIsIEhhUGFwZXJTbGlkZXIpO1xuIiwiaW1wb3J0IHsgaHRtbCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZ1wiO1xuaW1wb3J0IHsgUG9seW1lckVsZW1lbnQgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWVsZW1lbnRcIjtcblxuaW1wb3J0IFwiLi9oYS1jb21iby1ib3hcIjtcblxuaW1wb3J0IExvY2FsaXplTWl4aW4gZnJvbSBcIi4uL21peGlucy9sb2NhbGl6ZS1taXhpblwiO1xuXG4vKlxuICogQGFwcGxpZXNNaXhpbiBMb2NhbGl6ZU1peGluXG4gKi9cbmNsYXNzIEhhU2VydmljZVBpY2tlciBleHRlbmRzIExvY2FsaXplTWl4aW4oUG9seW1lckVsZW1lbnQpIHtcbiAgc3RhdGljIGdldCB0ZW1wbGF0ZSgpIHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxoYS1jb21iby1ib3hcbiAgICAgICAgbGFiZWw9XCJbW2xvY2FsaXplKCd1aS5jb21wb25lbnRzLnNlcnZpY2UtcGlja2VyLnNlcnZpY2UnKV1dXCJcbiAgICAgICAgaXRlbXM9XCJbW19zZXJ2aWNlc11dXCJcbiAgICAgICAgdmFsdWU9XCJ7e3ZhbHVlfX1cIlxuICAgICAgICBhbGxvdy1jdXN0b20tdmFsdWU9XCJcIlxuICAgICAgPjwvaGEtY29tYm8tYm94PlxuICAgIGA7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGhhc3M6IHtcbiAgICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgICBvYnNlcnZlcjogXCJfaGFzc0NoYW5nZWRcIixcbiAgICAgIH0sXG4gICAgICBfc2VydmljZXM6IEFycmF5LFxuICAgICAgdmFsdWU6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICBub3RpZnk6IHRydWUsXG4gICAgICB9LFxuICAgIH07XG4gIH1cblxuICBfaGFzc0NoYW5nZWQoaGFzcywgb2xkSGFzcykge1xuICAgIGlmICghaGFzcykge1xuICAgICAgdGhpcy5fc2VydmljZXMgPSBbXTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKG9sZEhhc3MgJiYgaGFzcy5zZXJ2aWNlcyA9PT0gb2xkSGFzcy5zZXJ2aWNlcykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCByZXN1bHQgPSBbXTtcblxuICAgIE9iamVjdC5rZXlzKGhhc3Muc2VydmljZXMpXG4gICAgICAuc29ydCgpXG4gICAgICAuZm9yRWFjaCgoZG9tYWluKSA9PiB7XG4gICAgICAgIGNvbnN0IHNlcnZpY2VzID0gT2JqZWN0LmtleXMoaGFzcy5zZXJ2aWNlc1tkb21haW5dKS5zb3J0KCk7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzZXJ2aWNlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIHJlc3VsdC5wdXNoKGAke2RvbWFpbn0uJHtzZXJ2aWNlc1tpXX1gKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICB0aGlzLl9zZXJ2aWNlcyA9IHJlc3VsdDtcbiAgfVxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJoYS1zZXJ2aWNlLXBpY2tlclwiLCBIYVNlcnZpY2VQaWNrZXIpO1xuIiwiLypcbldyYXBwZXIgZm9yIHBhcGVyLXRleHRhcmVhLlxuXG5wYXBlci10ZXh0YXJlYSBjcmFzaGVzIG9uIGlPUyB3aGVuIGNyZWF0ZWQgcHJvZ3JhbW1hdGljYWxseS4gVGhpcyBvbmx5IGltcGFjdHNcbm91ciBhdXRvbWF0aW9uIGFuZCBzY3JpcHQgZWRpdG9ycyBhcyB0aGV5IGFyZSB1c2luZyBQcmVhY3QuIFBvbHltZXIgaXMgdXNpbmdcbnRlbXBsYXRlIGVsZW1lbnRzIGFuZCBkb2VzIG5vdCBoYXZlIHRoaXMgaXNzdWUuXG5cbnBhcGVyLXRleHRhcmVhIGlzc3VlOiBodHRwczovL2dpdGh1Yi5jb20vUG9seW1lckVsZW1lbnRzL3BhcGVyLWlucHV0L2lzc3Vlcy81NTZcbldlYktpdCBpc3N1ZTogaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTE3NDYyOVxuKi9cblxuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItaW5wdXQvcGFwZXItdGV4dGFyZWFcIjtcbmltcG9ydCB7IGh0bWwgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvaHRtbC10YWdcIjtcbmltcG9ydCB7IFBvbHltZXJFbGVtZW50IH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvcG9seW1lci1lbGVtZW50XCI7XG5cbmNsYXNzIEhhVGV4dGFyZWEgZXh0ZW5kcyBQb2x5bWVyRWxlbWVudCB7XG4gIHN0YXRpYyBnZXQgdGVtcGxhdGUoKSB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8c3R5bGU+XG4gICAgICAgIDpob3N0IHtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgfVxuICAgICAgPC9zdHlsZT5cbiAgICAgIDxwYXBlci10ZXh0YXJlYVxuICAgICAgICBsYWJlbD1cIltbbGFiZWxdXVwiXG4gICAgICAgIHBsYWNlaG9sZGVyPVwiW1twbGFjZWhvbGRlcl1dXCJcbiAgICAgICAgdmFsdWU9XCJ7e3ZhbHVlfX1cIlxuICAgICAgPjwvcGFwZXItdGV4dGFyZWE+XG4gICAgYDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgbmFtZTogU3RyaW5nLFxuICAgICAgbGFiZWw6IFN0cmluZyxcbiAgICAgIHBsYWNlaG9sZGVyOiBTdHJpbmcsXG4gICAgICB2YWx1ZToge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIG5vdGlmeTogdHJ1ZSxcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJoYS10ZXh0YXJlYVwiLCBIYVRleHRhcmVhKTtcbiIsIi8qKlxuQGxpY2Vuc2VcbkNvcHlyaWdodCAoYykgMjAxNSBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG5UaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0xJQ0VOU0UudHh0XG5UaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9BVVRIT1JTLnR4dFxuVGhlIGNvbXBsZXRlIHNldCBvZiBjb250cmlidXRvcnMgbWF5IGJlIGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0XG5Db2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhcyBwYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzb1xuc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudCBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vUEFURU5UUy50eHRcbiovXG4vKlxuVGhpcyBjb2RlIGlzIGNvcGllZCBmcm9tIGFwcC1oZWFkZXItbGF5b3V0LlxuJ2Z1bGxibGVlZCcgc3VwcG9ydCBpcyByZW1vdmVkIGFzIEhvbWUgQXNzaXNzdGFudCBkb2Vzbid0IHVzZSBpdC5cbnRyYW5zZm9ybTogdHJhbnNsYXRlKDApIGlzIGFkZGVkLlxuKi9cbi8qXG4gIEZJWE1FKHBvbHltZXItbW9kdWxpemVyKTogdGhlIGFib3ZlIGNvbW1lbnRzIHdlcmUgZXh0cmFjdGVkXG4gIGZyb20gSFRNTCBhbmQgbWF5IGJlIG91dCBvZiBwbGFjZSBoZXJlLiBSZXZpZXcgdGhlbSBhbmRcbiAgdGhlbiBkZWxldGUgdGhpcyBjb21tZW50IVxuKi9cbmltcG9ydCBcIkBwb2x5bWVyL2FwcC1sYXlvdXQvYXBwLWhlYWRlci1sYXlvdXQvYXBwLWhlYWRlci1sYXlvdXRcIjtcbmltcG9ydCB7IGh0bWwgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvaHRtbC10YWdcIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BvbHltZXIvcG9seW1lci1lbGVtZW50XCI7XG5cbmNsYXNzIEhhQXBwTGF5b3V0IGV4dGVuZHMgY3VzdG9tRWxlbWVudHMuZ2V0KFwiYXBwLWhlYWRlci1sYXlvdXRcIikge1xuICBzdGF0aWMgZ2V0IHRlbXBsYXRlKCkge1xuICAgIHJldHVybiBodG1sYFxuICAgICAgPHN0eWxlPlxuICAgICAgICA6aG9zdCB7XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgLyoqXG4gICAgICAgICAqIEZvcmNlIGFwcC1oZWFkZXItbGF5b3V0IHRvIGhhdmUgaXRzIG93biBzdGFja2luZyBjb250ZXh0IHNvIHRoYXQgaXRzIHBhcmVudCBjYW5cbiAgICAgICAgICogY29udHJvbCB0aGUgc3RhY2tpbmcgb2YgaXQgcmVsYXRpdmUgdG8gb3RoZXIgZWxlbWVudHMgKGUuZy4gYXBwLWRyYXdlci1sYXlvdXQpLlxuICAgICAgICAgKiBUaGlzIGNvdWxkIGJlIGRvbmUgdXNpbmcgXFxgaXNvbGF0aW9uOiBpc29sYXRlXFxgLCBidXQgdGhhdCdzIG5vdCB3ZWxsIHN1cHBvcnRlZFxuICAgICAgICAgKiBhY3Jvc3MgYnJvd3NlcnMuXG4gICAgICAgICAqL1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICB6LWluZGV4OiAwO1xuICAgICAgICB9XG5cbiAgICAgICAgI3dyYXBwZXIgOjpzbG90dGVkKFtzbG90PVwiaGVhZGVyXCJdKSB7XG4gICAgICAgICAgQGFwcGx5IC0tbGF5b3V0LWZpeGVkLXRvcDtcbiAgICAgICAgICB6LWluZGV4OiAxO1xuICAgICAgICB9XG5cbiAgICAgICAgI3dyYXBwZXIuaW5pdGlhbGl6aW5nIDo6c2xvdHRlZChbc2xvdD1cImhlYWRlclwiXSkge1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIDpob3N0KFtoYXMtc2Nyb2xsaW5nLXJlZ2lvbl0pIHtcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIH1cblxuICAgICAgICA6aG9zdChbaGFzLXNjcm9sbGluZy1yZWdpb25dKSAjd3JhcHBlciA6OnNsb3R0ZWQoW3Nsb3Q9XCJoZWFkZXJcIl0pIHtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIH1cblxuICAgICAgICA6aG9zdChbaGFzLXNjcm9sbGluZy1yZWdpb25dKVxuICAgICAgICAgICN3cmFwcGVyLmluaXRpYWxpemluZ1xuICAgICAgICAgIDo6c2xvdHRlZChbc2xvdD1cImhlYWRlclwiXSkge1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIDpob3N0KFtoYXMtc2Nyb2xsaW5nLXJlZ2lvbl0pICN3cmFwcGVyICNjb250ZW50Q29udGFpbmVyIHtcbiAgICAgICAgICBAYXBwbHkgLS1sYXlvdXQtZml0O1xuICAgICAgICAgIG92ZXJmbG93LXk6IGF1dG87XG4gICAgICAgICAgLXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6IHRvdWNoO1xuICAgICAgICB9XG5cbiAgICAgICAgOmhvc3QoW2hhcy1zY3JvbGxpbmctcmVnaW9uXSkgI3dyYXBwZXIuaW5pdGlhbGl6aW5nICNjb250ZW50Q29udGFpbmVyIHtcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIH1cblxuICAgICAgICAjY29udGVudENvbnRhaW5lciB7XG4gICAgICAgICAgLyogQ3JlYXRlIGEgc3RhY2tpbmcgY29udGV4dCBoZXJlIHNvIHRoYXQgYWxsIGNoaWxkcmVuIGFwcGVhciBiZWxvdyB0aGUgaGVhZGVyLiAqL1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICB6LWluZGV4OiAwO1xuICAgICAgICAgIC8qIFVzaW5nICd0cmFuc2Zvcm0nIHdpbGwgY2F1c2UgJ3Bvc2l0aW9uOiBmaXhlZCcgZWxlbWVudHMgdG8gYmVoYXZlIGxpa2VcbiAgICAgICAgICAgJ3Bvc2l0aW9uOiBhYnNvbHV0ZScgcmVsYXRpdmUgdG8gdGhpcyBlbGVtZW50LiAqL1xuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDApO1xuICAgICAgICB9XG5cbiAgICAgICAgQG1lZGlhIHByaW50IHtcbiAgICAgICAgICA6aG9zdChbaGFzLXNjcm9sbGluZy1yZWdpb25dKSAjd3JhcHBlciAjY29udGVudENvbnRhaW5lciB7XG4gICAgICAgICAgICBvdmVyZmxvdy15OiB2aXNpYmxlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgPC9zdHlsZT5cblxuICAgICAgPGRpdiBpZD1cIndyYXBwZXJcIiBjbGFzcz1cImluaXRpYWxpemluZ1wiPlxuICAgICAgICA8c2xvdCBpZD1cImhlYWRlclNsb3RcIiBuYW1lPVwiaGVhZGVyXCI+PC9zbG90PlxuXG4gICAgICAgIDxkaXYgaWQ9XCJjb250ZW50Q29udGFpbmVyXCI+PHNsb3Q+PC9zbG90PjwvZGl2PlxuICAgICAgICA8c2xvdCBpZD1cImZhYlwiIG5hbWU9XCJmYWJcIj48L3Nsb3Q+XG4gICAgICA8L2Rpdj5cbiAgICBgO1xuICB9XG59XG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJoYS1hcHAtbGF5b3V0XCIsIEhhQXBwTGF5b3V0KTtcbiIsImltcG9ydCB7XG4gIExpdEVsZW1lbnQsXG4gIENvbnN0cnVjdG9yLFxuICBQcm9wZXJ0eVZhbHVlcyxcbiAgUHJvcGVydHlEZWNsYXJhdGlvbnMsXG59IGZyb20gXCJsaXQtZWxlbWVudFwiO1xuaW1wb3J0IHsgVW5zdWJzY3JpYmVGdW5jIH0gZnJvbSBcImhvbWUtYXNzaXN0YW50LWpzLXdlYnNvY2tldFwiO1xuaW1wb3J0IHsgSG9tZUFzc2lzdGFudCB9IGZyb20gXCIuLi90eXBlc1wiO1xuXG5leHBvcnQgaW50ZXJmYWNlIEhhc3NTdWJzY3JpYmVFbGVtZW50IHtcbiAgaGFzc1N1YnNjcmliZSgpOiBVbnN1YnNjcmliZUZ1bmNbXTtcbn1cblxuLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lICovXG5leHBvcnQgY29uc3QgU3Vic2NyaWJlTWl4aW4gPSA8VCBleHRlbmRzIExpdEVsZW1lbnQ+KFxuICBzdXBlckNsYXNzOiBDb25zdHJ1Y3RvcjxUPlxuKTogQ29uc3RydWN0b3I8VCAmIEhhc3NTdWJzY3JpYmVFbGVtZW50PiA9PlxuICAvLyBAdHMtaWdub3JlXG4gIGNsYXNzIGV4dGVuZHMgc3VwZXJDbGFzcyB7XG4gICAgcHJpdmF0ZSBoYXNzPzogSG9tZUFzc2lzdGFudDtcbiAgICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmUgKi9cbiAgICBwcml2YXRlIF9fdW5zdWJzPzogVW5zdWJzY3JpYmVGdW5jW107XG5cbiAgICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKTogUHJvcGVydHlEZWNsYXJhdGlvbnMge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgaGFzczoge30sXG4gICAgICB9O1xuICAgIH1cblxuICAgIHB1YmxpYyBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICAgIHN1cGVyLmNvbm5lY3RlZENhbGxiYWNrKCk7XG4gICAgICB0aGlzLl9fY2hlY2tTdWJzY3JpYmVkKCk7XG4gICAgfVxuXG4gICAgcHVibGljIGRpc2Nvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgICAgc3VwZXIuZGlzY29ubmVjdGVkQ2FsbGJhY2soKTtcbiAgICAgIGlmICh0aGlzLl9fdW5zdWJzKSB7XG4gICAgICAgIHdoaWxlICh0aGlzLl9fdW5zdWJzLmxlbmd0aCkge1xuICAgICAgICAgIHRoaXMuX191bnN1YnMucG9wKCkhKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fX3Vuc3VicyA9IHVuZGVmaW5lZDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgdXBkYXRlZChjaGFuZ2VkUHJvcHM6IFByb3BlcnR5VmFsdWVzKSB7XG4gICAgICBzdXBlci51cGRhdGVkKGNoYW5nZWRQcm9wcyk7XG4gICAgICBpZiAoY2hhbmdlZFByb3BzLmhhcyhcImhhc3NcIikpIHtcbiAgICAgICAgdGhpcy5fX2NoZWNrU3Vic2NyaWJlZCgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHByb3RlY3RlZCBoYXNzU3Vic2NyaWJlKCk6IFVuc3Vic2NyaWJlRnVuY1tdIHtcbiAgICAgIHN1cGVyLmhhc3NTdWJzY3JpYmUoKTtcbiAgICAgIHJldHVybiBbXTtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9fY2hlY2tTdWJzY3JpYmVkKCk6IHZvaWQge1xuICAgICAgaWYgKFxuICAgICAgICB0aGlzLl9fdW5zdWJzICE9PSB1bmRlZmluZWQgfHxcbiAgICAgICAgISgodGhpcyBhcyB1bmtub3duKSBhcyBFbGVtZW50KS5pc0Nvbm5lY3RlZCB8fFxuICAgICAgICB0aGlzLmhhc3MgPT09IHVuZGVmaW5lZFxuICAgICAgKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHRoaXMuX191bnN1YnMgPSB0aGlzLmhhc3NTdWJzY3JpYmUoKTtcbiAgICB9XG4gIH07XG4iLCJpbXBvcnQgeyBoLCBDb21wb25lbnQgfSBmcm9tIFwicHJlYWN0XCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1kcm9wZG93bi1tZW51L3BhcGVyLWRyb3Bkb3duLW1lbnUtbGlnaHRcIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWxpc3Rib3gvcGFwZXItbGlzdGJveFwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItaXRlbS9wYXBlci1pdGVtXCI7XG5cbmltcG9ydCBEZXZpY2VDb25kaXRpb24gZnJvbSBcIi4vZGV2aWNlXCI7XG5pbXBvcnQgTG9naWNhbENvbmRpdGlvbiBmcm9tIFwiLi9sb2dpY2FsXCI7XG5pbXBvcnQgTnVtZXJpY1N0YXRlQ29uZGl0aW9uIGZyb20gXCIuL251bWVyaWNfc3RhdGVcIjtcbmltcG9ydCBTdGF0ZUNvbmRpdGlvbiBmcm9tIFwiLi9zdGF0ZVwiO1xuaW1wb3J0IFN1bkNvbmRpdGlvbiBmcm9tIFwiLi9zdW5cIjtcbmltcG9ydCBUZW1wbGF0ZUNvbmRpdGlvbiBmcm9tIFwiLi90ZW1wbGF0ZVwiO1xuaW1wb3J0IFRpbWVDb25kaXRpb24gZnJvbSBcIi4vdGltZVwiO1xuaW1wb3J0IFpvbmVDb25kaXRpb24gZnJvbSBcIi4vem9uZVwiO1xuXG5jb25zdCBUWVBFUyA9IHtcbiAgYW5kOiBMb2dpY2FsQ29uZGl0aW9uLFxuICBkZXZpY2U6IERldmljZUNvbmRpdGlvbixcbiAgbnVtZXJpY19zdGF0ZTogTnVtZXJpY1N0YXRlQ29uZGl0aW9uLFxuICBvcjogTG9naWNhbENvbmRpdGlvbixcbiAgc3RhdGU6IFN0YXRlQ29uZGl0aW9uLFxuICBzdW46IFN1bkNvbmRpdGlvbixcbiAgdGVtcGxhdGU6IFRlbXBsYXRlQ29uZGl0aW9uLFxuICB0aW1lOiBUaW1lQ29uZGl0aW9uLFxuICB6b25lOiBab25lQ29uZGl0aW9uLFxufTtcblxuY29uc3QgT1BUSU9OUyA9IE9iamVjdC5rZXlzKFRZUEVTKS5zb3J0KCk7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbmRpdGlvbkVkaXQgZXh0ZW5kcyBDb21wb25lbnQ8YW55PiB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG5cbiAgICB0aGlzLnR5cGVDaGFuZ2VkID0gdGhpcy50eXBlQ2hhbmdlZC5iaW5kKHRoaXMpO1xuICB9XG5cbiAgcHVibGljIHR5cGVDaGFuZ2VkKGV2KSB7XG4gICAgY29uc3QgdHlwZSA9IGV2LnRhcmdldC5zZWxlY3RlZEl0ZW0uYXR0cmlidXRlcy5jb25kaXRpb24udmFsdWU7XG5cbiAgICBpZiAodHlwZSAhPT0gdGhpcy5wcm9wcy5jb25kaXRpb24uY29uZGl0aW9uKSB7XG4gICAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKHRoaXMucHJvcHMuaW5kZXgsIHtcbiAgICAgICAgY29uZGl0aW9uOiB0eXBlLFxuICAgICAgICAuLi5UWVBFU1t0eXBlXS5kZWZhdWx0Q29uZmlnLFxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIHJlbmRlcih7IGluZGV4LCBjb25kaXRpb24sIG9uQ2hhbmdlLCBoYXNzLCBsb2NhbGl6ZSB9KSB7XG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiB2YXJpYWJsZS1uYW1lXG4gICAgY29uc3QgQ29tcCA9IFRZUEVTW2NvbmRpdGlvbi5jb25kaXRpb25dO1xuICAgIGNvbnN0IHNlbGVjdGVkID0gT1BUSU9OUy5pbmRleE9mKGNvbmRpdGlvbi5jb25kaXRpb24pO1xuXG4gICAgaWYgKCFDb21wKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIHtsb2NhbGl6ZShcbiAgICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLmF1dG9tYXRpb24uZWRpdG9yLmNvbmRpdGlvbnMudW5zdXBwb3J0ZWRfY29uZGl0aW9uXCIsXG4gICAgICAgICAgICBcImNvbmRpdGlvblwiLFxuICAgICAgICAgICAgY29uZGl0aW9uLmNvbmRpdGlvblxuICAgICAgICAgICl9XG4gICAgICAgICAgPHByZT57SlNPTi5zdHJpbmdpZnkoY29uZGl0aW9uLCBudWxsLCAyKX08L3ByZT5cbiAgICAgICAgPC9kaXY+XG4gICAgICApO1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8cGFwZXItZHJvcGRvd24tbWVudS1saWdodFxuICAgICAgICAgIGxhYmVsPXtsb2NhbGl6ZShcbiAgICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLmF1dG9tYXRpb24uZWRpdG9yLmNvbmRpdGlvbnMudHlwZV9zZWxlY3RcIlxuICAgICAgICAgICl9XG4gICAgICAgICAgbm8tYW5pbWF0aW9uc1xuICAgICAgICA+XG4gICAgICAgICAgPHBhcGVyLWxpc3Rib3hcbiAgICAgICAgICAgIHNsb3Q9XCJkcm9wZG93bi1jb250ZW50XCJcbiAgICAgICAgICAgIHNlbGVjdGVkPXtzZWxlY3RlZH1cbiAgICAgICAgICAgIG9uaXJvbi1zZWxlY3Q9e3RoaXMudHlwZUNoYW5nZWR9XG4gICAgICAgICAgPlxuICAgICAgICAgICAge09QVElPTlMubWFwKChvcHQpID0+IChcbiAgICAgICAgICAgICAgPHBhcGVyLWl0ZW0gY29uZGl0aW9uPXtvcHR9PlxuICAgICAgICAgICAgICAgIHtsb2NhbGl6ZShcbiAgICAgICAgICAgICAgICAgIGB1aS5wYW5lbC5jb25maWcuYXV0b21hdGlvbi5lZGl0b3IuY29uZGl0aW9ucy50eXBlLiR7b3B0fS5sYWJlbGBcbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICA8L3BhcGVyLWl0ZW0+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L3BhcGVyLWxpc3Rib3g+XG4gICAgICAgIDwvcGFwZXItZHJvcGRvd24tbWVudS1saWdodD5cbiAgICAgICAgPENvbXBcbiAgICAgICAgICBpbmRleD17aW5kZXh9XG4gICAgICAgICAgY29uZGl0aW9uPXtjb25kaXRpb259XG4gICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlfVxuICAgICAgICAgIGhhc3M9e2hhc3N9XG4gICAgICAgICAgbG9jYWxpemU9e2xvY2FsaXplfVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgaCwgQ29tcG9uZW50IH0gZnJvbSBcInByZWFjdFwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItbWVudS1idXR0b24vcGFwZXItbWVudS1idXR0b25cIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWljb24tYnV0dG9uL3BhcGVyLWljb24tYnV0dG9uXCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1saXN0Ym94L3BhcGVyLWxpc3Rib3hcIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWl0ZW0vcGFwZXItaXRlbVwiO1xuaW1wb3J0IFwiLi4vLi4vLi4vLi4vY29tcG9uZW50cy9oYS1jYXJkXCI7XG5cbmltcG9ydCBDb25kaXRpb25FZGl0IGZyb20gXCIuL2NvbmRpdGlvbl9lZGl0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbmRpdGlvblJvdyBleHRlbmRzIENvbXBvbmVudDxhbnk+IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcblxuICAgIHRoaXMub25EZWxldGUgPSB0aGlzLm9uRGVsZXRlLmJpbmQodGhpcyk7XG4gIH1cblxuICBwdWJsaWMgb25EZWxldGUoKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXG4gICAgaWYgKFxuICAgICAgY29uZmlybShcbiAgICAgICAgdGhpcy5wcm9wcy5sb2NhbGl6ZShcbiAgICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy5hdXRvbWF0aW9uLmVkaXRvci5jb25kaXRpb25zLmRlbGV0ZV9jb25maXJtXCJcbiAgICAgICAgKVxuICAgICAgKVxuICAgICkge1xuICAgICAgdGhpcy5wcm9wcy5vbkNoYW5nZSh0aGlzLnByb3BzLmluZGV4LCBudWxsKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgcmVuZGVyKHByb3BzKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxoYS1jYXJkPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1jb250ZW50XCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtbWVudVwiPlxuICAgICAgICAgICAgPHBhcGVyLW1lbnUtYnV0dG9uXG4gICAgICAgICAgICAgIG5vLWFuaW1hdGlvbnNcbiAgICAgICAgICAgICAgaG9yaXpvbnRhbC1hbGlnbj1cInJpZ2h0XCJcbiAgICAgICAgICAgICAgaG9yaXpvbnRhbC1vZmZzZXQ9XCItNVwiXG4gICAgICAgICAgICAgIHZlcnRpY2FsLW9mZnNldD1cIi01XCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPHBhcGVyLWljb24tYnV0dG9uXG4gICAgICAgICAgICAgICAgaWNvbj1cImhhc3M6ZG90cy12ZXJ0aWNhbFwiXG4gICAgICAgICAgICAgICAgc2xvdD1cImRyb3Bkb3duLXRyaWdnZXJcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8cGFwZXItbGlzdGJveCBzbG90PVwiZHJvcGRvd24tY29udGVudFwiPlxuICAgICAgICAgICAgICAgIDxwYXBlci1pdGVtIGRpc2FibGVkPlxuICAgICAgICAgICAgICAgICAge3Byb3BzLmxvY2FsaXplKFxuICAgICAgICAgICAgICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy5hdXRvbWF0aW9uLmVkaXRvci5jb25kaXRpb25zLmR1cGxpY2F0ZVwiXG4gICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIDwvcGFwZXItaXRlbT5cbiAgICAgICAgICAgICAgICA8cGFwZXItaXRlbSBvblRhcD17dGhpcy5vbkRlbGV0ZX0+XG4gICAgICAgICAgICAgICAgICB7cHJvcHMubG9jYWxpemUoXG4gICAgICAgICAgICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLmF1dG9tYXRpb24uZWRpdG9yLmNvbmRpdGlvbnMuZGVsZXRlXCJcbiAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgPC9wYXBlci1pdGVtPlxuICAgICAgICAgICAgICA8L3BhcGVyLWxpc3Rib3g+XG4gICAgICAgICAgICA8L3BhcGVyLW1lbnUtYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxDb25kaXRpb25FZGl0IHsuLi5wcm9wc30gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2hhLWNhcmQ+XG4gICAgKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgaCwgQ29tcG9uZW50IH0gZnJvbSBcInByZWFjdFwiO1xuXG5pbXBvcnQgXCIuLi8uLi8uLi8uLi9jb21wb25lbnRzL2RldmljZS9oYS1kZXZpY2UtcGlja2VyXCI7XG5pbXBvcnQgXCIuLi8uLi8uLi8uLi9jb21wb25lbnRzL2RldmljZS9oYS1kZXZpY2UtY29uZGl0aW9uLXBpY2tlclwiO1xuaW1wb3J0IFwiLi4vLi4vLi4vLi4vY29tcG9uZW50cy9oYS1mb3JtXCI7XG5cbmltcG9ydCB7XG4gIGZldGNoRGV2aWNlQ29uZGl0aW9uQ2FwYWJpbGl0aWVzLFxuICBkZXZpY2VBdXRvbWF0aW9uc0VxdWFsLFxufSBmcm9tIFwiLi4vLi4vLi4vLi4vZGF0YS9kZXZpY2VfYXV0b21hdGlvblwiO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGV2aWNlQ29uZGl0aW9uIGV4dGVuZHMgQ29tcG9uZW50PGFueSwgYW55PiB7XG4gIHByaXZhdGUgX29yaWdDb25kaXRpb247XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLmRldmljZVBpY2tlZCA9IHRoaXMuZGV2aWNlUGlja2VkLmJpbmQodGhpcyk7XG4gICAgdGhpcy5kZXZpY2VDb25kaXRpb25QaWNrZWQgPSB0aGlzLmRldmljZUNvbmRpdGlvblBpY2tlZC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuX2V4dHJhRmllbGRzQ2hhbmdlZCA9IHRoaXMuX2V4dHJhRmllbGRzQ2hhbmdlZC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuc3RhdGUgPSB7IGRldmljZV9pZDogdW5kZWZpbmVkLCBjYXBhYmlsaXRpZXM6IHVuZGVmaW5lZCB9O1xuICB9XG5cbiAgcHVibGljIGRldmljZVBpY2tlZChldikge1xuICAgIHRoaXMuc2V0U3RhdGUoeyAuLi50aGlzLnN0YXRlLCBkZXZpY2VfaWQ6IGV2LnRhcmdldC52YWx1ZSB9KTtcbiAgfVxuXG4gIHB1YmxpYyBkZXZpY2VDb25kaXRpb25QaWNrZWQoZXYpIHtcbiAgICBsZXQgY29uZGl0aW9uID0gZXYudGFyZ2V0LnZhbHVlO1xuICAgIGlmIChcbiAgICAgIHRoaXMuX29yaWdDb25kaXRpb24gJiZcbiAgICAgIGRldmljZUF1dG9tYXRpb25zRXF1YWwodGhpcy5fb3JpZ0NvbmRpdGlvbiwgY29uZGl0aW9uKVxuICAgICkge1xuICAgICAgY29uZGl0aW9uID0gdGhpcy5fb3JpZ0NvbmRpdGlvbjtcbiAgICB9XG4gICAgdGhpcy5wcm9wcy5vbkNoYW5nZSh0aGlzLnByb3BzLmluZGV4LCBjb25kaXRpb24pO1xuICB9XG5cbiAgLyogZXNsaW50LWRpc2FibGUgY2FtZWxjYXNlICovXG4gIHB1YmxpYyByZW5kZXIoeyBjb25kaXRpb24sIGhhc3MgfSwgeyBkZXZpY2VfaWQsIGNhcGFiaWxpdGllcyB9KSB7XG4gICAgaWYgKGRldmljZV9pZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBkZXZpY2VfaWQgPSBjb25kaXRpb24uZGV2aWNlX2lkO1xuICAgIH1cbiAgICBjb25zdCBleHRyYUZpZWxkc0RhdGEgPVxuICAgICAgY2FwYWJpbGl0aWVzICYmIGNhcGFiaWxpdGllcy5leHRyYV9maWVsZHNcbiAgICAgICAgPyBjYXBhYmlsaXRpZXMuZXh0cmFfZmllbGRzLm1hcCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHsgW2l0ZW0ubmFtZV06IHRoaXMucHJvcHMuY29uZGl0aW9uW2l0ZW0ubmFtZV0gfTtcbiAgICAgICAgICB9KVxuICAgICAgICA6IHVuZGVmaW5lZDtcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8aGEtZGV2aWNlLXBpY2tlclxuICAgICAgICAgIHZhbHVlPXtkZXZpY2VfaWR9XG4gICAgICAgICAgb25DaGFuZ2U9e3RoaXMuZGV2aWNlUGlja2VkfVxuICAgICAgICAgIGhhc3M9e2hhc3N9XG4gICAgICAgICAgbGFiZWw9XCJEZXZpY2VcIlxuICAgICAgICAvPlxuICAgICAgICA8aGEtZGV2aWNlLWNvbmRpdGlvbi1waWNrZXJcbiAgICAgICAgICB2YWx1ZT17Y29uZGl0aW9ufVxuICAgICAgICAgIGRldmljZUlkPXtkZXZpY2VfaWR9XG4gICAgICAgICAgb25DaGFuZ2U9e3RoaXMuZGV2aWNlQ29uZGl0aW9uUGlja2VkfVxuICAgICAgICAgIGhhc3M9e2hhc3N9XG4gICAgICAgICAgbGFiZWw9XCJDb25kaXRpb25cIlxuICAgICAgICAvPlxuICAgICAgICB7ZXh0cmFGaWVsZHNEYXRhICYmIChcbiAgICAgICAgICA8aGEtZm9ybVxuICAgICAgICAgICAgZGF0YT17T2JqZWN0LmFzc2lnbih7fSwgLi4uZXh0cmFGaWVsZHNEYXRhKX1cbiAgICAgICAgICAgIG9uRGF0YS1jaGFuZ2VkPXt0aGlzLl9leHRyYUZpZWxkc0NoYW5nZWR9XG4gICAgICAgICAgICBzY2hlbWE9e3RoaXMuc3RhdGUuY2FwYWJpbGl0aWVzLmV4dHJhX2ZpZWxkc31cbiAgICAgICAgICAgIGNvbXB1dGVMYWJlbD17dGhpcy5fZXh0cmFGaWVsZHNDb21wdXRlTGFiZWxDYWxsYmFjayhoYXNzLmxvY2FsaXplKX1cbiAgICAgICAgICAvPlxuICAgICAgICApfVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuXG4gIHB1YmxpYyBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBpZiAoIXRoaXMuc3RhdGUuY2FwYWJpbGl0aWVzKSB7XG4gICAgICB0aGlzLl9nZXRDYXBhYmlsaXRpZXMoKTtcbiAgICB9XG4gICAgaWYgKHRoaXMucHJvcHMuY29uZGl0aW9uKSB7XG4gICAgICB0aGlzLl9vcmlnQ29uZGl0aW9uID0gdGhpcy5wcm9wcy5jb25kaXRpb247XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMpIHtcbiAgICBpZiAocHJldlByb3BzLmNvbmRpdGlvbiAhPT0gdGhpcy5wcm9wcy5jb25kaXRpb24pIHtcbiAgICAgIHRoaXMuX2dldENhcGFiaWxpdGllcygpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgX2dldENhcGFiaWxpdGllcygpIHtcbiAgICBjb25zdCBjb25kaXRpb24gPSB0aGlzLnByb3BzLmNvbmRpdGlvbjtcblxuICAgIGNvbnN0IGNhcGFiaWxpdGllcyA9IGNvbmRpdGlvbi5kb21haW5cbiAgICAgID8gYXdhaXQgZmV0Y2hEZXZpY2VDb25kaXRpb25DYXBhYmlsaXRpZXModGhpcy5wcm9wcy5oYXNzLCBjb25kaXRpb24pXG4gICAgICA6IG51bGw7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IC4uLnRoaXMuc3RhdGUsIGNhcGFiaWxpdGllcyB9KTtcbiAgfVxuXG4gIHByaXZhdGUgX2V4dHJhRmllbGRzQ2hhbmdlZChldikge1xuICAgIGlmICghZXYuZGV0YWlsLnBhdGgpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgaXRlbSA9IGV2LmRldGFpbC5wYXRoLnJlcGxhY2UoXCJkYXRhLlwiLCBcIlwiKTtcbiAgICBjb25zdCB2YWx1ZSA9IGV2LmRldGFpbC52YWx1ZSB8fCB1bmRlZmluZWQ7XG5cbiAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKHRoaXMucHJvcHMuaW5kZXgsIHtcbiAgICAgIC4uLnRoaXMucHJvcHMuY29uZGl0aW9uLFxuICAgICAgW2l0ZW1dOiB2YWx1ZSxcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgX2V4dHJhRmllbGRzQ29tcHV0ZUxhYmVsQ2FsbGJhY2sobG9jYWxpemUpIHtcbiAgICAvLyBSZXR1cm5zIGEgY2FsbGJhY2sgZm9yIGhhLWZvcm0gdG8gY2FsY3VsYXRlIGxhYmVscyBwZXIgc2NoZW1hIG9iamVjdFxuICAgIHJldHVybiAoc2NoZW1hKSA9PlxuICAgICAgbG9jYWxpemUoXG4gICAgICAgIGB1aS5wYW5lbC5jb25maWcuYXV0b21hdGlvbi5lZGl0b3IuY29uZGl0aW9uLnR5cGUuZGV2aWNlLmV4dHJhX2ZpZWxkcy4ke1xuICAgICAgICAgIHNjaGVtYS5uYW1lXG4gICAgICAgIH1gXG4gICAgICApIHx8IHNjaGVtYS5uYW1lO1xuICB9XG59XG5cbihEZXZpY2VDb25kaXRpb24gYXMgYW55KS5kZWZhdWx0Q29uZmlnID0ge1xuICBkZXZpY2VfaWQ6IFwiXCIsXG4gIGRvbWFpbjogXCJcIixcbiAgZW50aXR5X2lkOiBcIlwiLFxufTtcbiIsImltcG9ydCB7IGgsIENvbXBvbmVudCB9IGZyb20gXCJwcmVhY3RcIjtcbmltcG9ydCBcIkBtYXRlcmlhbC9td2MtYnV0dG9uXCI7XG5pbXBvcnQgXCIuLi8uLi8uLi8uLi9jb21wb25lbnRzL2hhLWNhcmRcIjtcblxuaW1wb3J0IENvbmRpdGlvblJvdyBmcm9tIFwiLi9jb25kaXRpb25fcm93XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbmRpdGlvbiBleHRlbmRzIENvbXBvbmVudDxhbnk+IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcblxuICAgIHRoaXMuYWRkQ29uZGl0aW9uID0gdGhpcy5hZGRDb25kaXRpb24uYmluZCh0aGlzKTtcbiAgICB0aGlzLmNvbmRpdGlvbkNoYW5nZWQgPSB0aGlzLmNvbmRpdGlvbkNoYW5nZWQuYmluZCh0aGlzKTtcbiAgfVxuXG4gIHB1YmxpYyBhZGRDb25kaXRpb24oKSB7XG4gICAgY29uc3QgY29uZGl0aW9uID0gdGhpcy5wcm9wcy5jb25kaXRpb24uY29uY2F0KHtcbiAgICAgIGNvbmRpdGlvbjogXCJzdGF0ZVwiLFxuICAgIH0pO1xuXG4gICAgdGhpcy5wcm9wcy5vbkNoYW5nZShjb25kaXRpb24pO1xuICB9XG5cbiAgcHVibGljIGNvbmRpdGlvbkNoYW5nZWQoaW5kZXgsIG5ld1ZhbHVlKSB7XG4gICAgY29uc3QgY29uZGl0aW9uID0gdGhpcy5wcm9wcy5jb25kaXRpb24uY29uY2F0KCk7XG5cbiAgICBpZiAobmV3VmFsdWUgPT09IG51bGwpIHtcbiAgICAgIGNvbmRpdGlvbi5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25kaXRpb25baW5kZXhdID0gbmV3VmFsdWU7XG4gICAgfVxuXG4gICAgdGhpcy5wcm9wcy5vbkNoYW5nZShjb25kaXRpb24pO1xuICB9XG5cbiAgcHVibGljIHJlbmRlcih7IGNvbmRpdGlvbiwgaGFzcywgbG9jYWxpemUgfSkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzPVwidHJpZ2dlcnNcIj5cbiAgICAgICAge2NvbmRpdGlvbi5tYXAoKGNuZCwgaWR4KSA9PiAoXG4gICAgICAgICAgPENvbmRpdGlvblJvd1xuICAgICAgICAgICAgaW5kZXg9e2lkeH1cbiAgICAgICAgICAgIGNvbmRpdGlvbj17Y25kfVxuICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuY29uZGl0aW9uQ2hhbmdlZH1cbiAgICAgICAgICAgIGhhc3M9e2hhc3N9XG4gICAgICAgICAgICBsb2NhbGl6ZT17bG9jYWxpemV9XG4gICAgICAgICAgLz5cbiAgICAgICAgKSl9XG4gICAgICAgIDxoYS1jYXJkPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWFjdGlvbnMgYWRkLWNhcmRcIj5cbiAgICAgICAgICAgIDxtd2MtYnV0dG9uIG9uVGFwPXt0aGlzLmFkZENvbmRpdGlvbn0+XG4gICAgICAgICAgICAgIHtsb2NhbGl6ZShcInVpLnBhbmVsLmNvbmZpZy5hdXRvbWF0aW9uLmVkaXRvci5jb25kaXRpb25zLmFkZFwiKX1cbiAgICAgICAgICAgIDwvbXdjLWJ1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9oYS1jYXJkPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgaCwgQ29tcG9uZW50IH0gZnJvbSBcInByZWFjdFwiO1xuXG5pbXBvcnQgQ29uZGl0aW9uIGZyb20gXCIuL2luZGV4XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExvZ2ljYWxDb25kaXRpb24gZXh0ZW5kcyBDb21wb25lbnQ8YW55LCBhbnk+IHtcbiAgcHJpdmF0ZSBfbW91bnRlZCA9IGZhbHNlO1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuY29uZGl0aW9uQ2hhbmdlZCA9IHRoaXMuY29uZGl0aW9uQ2hhbmdlZC5iaW5kKHRoaXMpO1xuICB9XG5cbiAgcHVibGljIGNvbmRpdGlvbkNoYW5nZWQoY29uZGl0aW9ucykge1xuICAgIGlmICh0aGlzLl9tb3VudGVkKSB7XG4gICAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKHRoaXMucHJvcHMuaW5kZXgsIHtcbiAgICAgICAgLi4udGhpcy5wcm9wcy5jb25kaXRpb24sXG4gICAgICAgIGNvbmRpdGlvbnMsXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgIHRoaXMuX21vdW50ZWQgPSB0cnVlO1xuICB9XG5cbiAgcHVibGljIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIHRoaXMuX21vdW50ZWQgPSBmYWxzZTtcbiAgfVxuXG4gIC8qIGVzbGludC1kaXNhYmxlIGNhbWVsY2FzZSAqL1xuICBwdWJsaWMgcmVuZGVyKHsgY29uZGl0aW9uLCBoYXNzLCBsb2NhbGl6ZSB9KSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxDb25kaXRpb25cbiAgICAgICAgICBjb25kaXRpb249e2NvbmRpdGlvbi5jb25kaXRpb25zIHx8IFtdfVxuICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmNvbmRpdGlvbkNoYW5nZWR9XG4gICAgICAgICAgaGFzcz17aGFzc31cbiAgICAgICAgICBsb2NhbGl6ZT17bG9jYWxpemV9XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbihMb2dpY2FsQ29uZGl0aW9uIGFzIGFueSkuZGVmYXVsdENvbmZpZyA9IHtcbiAgY29uZGl0aW9uczogW3sgY29uZGl0aW9uOiBcInN0YXRlXCIgfV0sXG59O1xuIiwiaW1wb3J0IHsgaCwgQ29tcG9uZW50IH0gZnJvbSBcInByZWFjdFwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItaW5wdXQvcGFwZXItaW5wdXRcIjtcbmltcG9ydCBcIi4uLy4uLy4uLy4uL2NvbXBvbmVudHMvaGEtdGV4dGFyZWFcIjtcbmltcG9ydCBcIi4uLy4uLy4uLy4uL2NvbXBvbmVudHMvZW50aXR5L2hhLWVudGl0eS1waWNrZXJcIjtcblxuaW1wb3J0IHsgb25DaGFuZ2VFdmVudCB9IGZyb20gXCIuLi8uLi8uLi8uLi9jb21tb24vcHJlYWN0L2V2ZW50XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE51bWVyaWNTdGF0ZUNvbmRpdGlvbiBleHRlbmRzIENvbXBvbmVudDxhbnk+IHtcbiAgcHJpdmF0ZSBvbkNoYW5nZTogKG9iajogYW55KSA9PiB2b2lkO1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuXG4gICAgdGhpcy5vbkNoYW5nZSA9IG9uQ2hhbmdlRXZlbnQuYmluZCh0aGlzLCBcImNvbmRpdGlvblwiKTtcbiAgICB0aGlzLmVudGl0eVBpY2tlZCA9IHRoaXMuZW50aXR5UGlja2VkLmJpbmQodGhpcyk7XG4gIH1cblxuICBwdWJsaWMgZW50aXR5UGlja2VkKGV2KSB7XG4gICAgdGhpcy5wcm9wcy5vbkNoYW5nZSh0aGlzLnByb3BzLmluZGV4LCB7XG4gICAgICAuLi50aGlzLnByb3BzLmNvbmRpdGlvbixcbiAgICAgIGVudGl0eV9pZDogZXYudGFyZ2V0LnZhbHVlLFxuICAgIH0pO1xuICB9XG5cbiAgLyogZXNsaW50LWRpc2FibGUgY2FtZWxjYXNlICovXG4gIHB1YmxpYyByZW5kZXIoeyBjb25kaXRpb24sIGhhc3MsIGxvY2FsaXplIH0pIHtcbiAgICBjb25zdCB7IHZhbHVlX3RlbXBsYXRlLCBlbnRpdHlfaWQsIGJlbG93LCBhYm92ZSB9ID0gY29uZGl0aW9uO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8aGEtZW50aXR5LXBpY2tlclxuICAgICAgICAgIHZhbHVlPXtlbnRpdHlfaWR9XG4gICAgICAgICAgb25DaGFuZ2U9e3RoaXMuZW50aXR5UGlja2VkfVxuICAgICAgICAgIGhhc3M9e2hhc3N9XG4gICAgICAgICAgYWxsb3dDdXN0b21FbnRpdHlcbiAgICAgICAgLz5cbiAgICAgICAgPHBhcGVyLWlucHV0XG4gICAgICAgICAgbGFiZWw9e2xvY2FsaXplKFxuICAgICAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcuYXV0b21hdGlvbi5lZGl0b3IuY29uZGl0aW9ucy50eXBlLm51bWVyaWNfc3RhdGUuYWJvdmVcIlxuICAgICAgICAgICl9XG4gICAgICAgICAgbmFtZT1cImFib3ZlXCJcbiAgICAgICAgICB2YWx1ZT17YWJvdmV9XG4gICAgICAgICAgb252YWx1ZS1jaGFuZ2VkPXt0aGlzLm9uQ2hhbmdlfVxuICAgICAgICAvPlxuICAgICAgICA8cGFwZXItaW5wdXRcbiAgICAgICAgICBsYWJlbD17bG9jYWxpemUoXG4gICAgICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy5hdXRvbWF0aW9uLmVkaXRvci5jb25kaXRpb25zLnR5cGUubnVtZXJpY19zdGF0ZS5iZWxvd1wiXG4gICAgICAgICAgKX1cbiAgICAgICAgICBuYW1lPVwiYmVsb3dcIlxuICAgICAgICAgIHZhbHVlPXtiZWxvd31cbiAgICAgICAgICBvbnZhbHVlLWNoYW5nZWQ9e3RoaXMub25DaGFuZ2V9XG4gICAgICAgIC8+XG4gICAgICAgIDxoYS10ZXh0YXJlYVxuICAgICAgICAgIGxhYmVsPXtsb2NhbGl6ZShcbiAgICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLmF1dG9tYXRpb24uZWRpdG9yLmNvbmRpdGlvbnMudHlwZS5udW1lcmljX3N0YXRlLnZhbHVlX3RlbXBsYXRlXCJcbiAgICAgICAgICApfVxuICAgICAgICAgIG5hbWU9XCJ2YWx1ZV90ZW1wbGF0ZVwiXG4gICAgICAgICAgdmFsdWU9e3ZhbHVlX3RlbXBsYXRlfVxuICAgICAgICAgIG9udmFsdWUtY2hhbmdlZD17dGhpcy5vbkNoYW5nZX1cbiAgICAgICAgICBkaXI9XCJsdHJcIlxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG4oTnVtZXJpY1N0YXRlQ29uZGl0aW9uIGFzIGFueSkuZGVmYXVsdENvbmZpZyA9IHtcbiAgZW50aXR5X2lkOiBcIlwiLFxufTtcbiIsImltcG9ydCB7IGgsIENvbXBvbmVudCB9IGZyb20gXCJwcmVhY3RcIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWlucHV0L3BhcGVyLWlucHV0XCI7XG5pbXBvcnQgXCIuLi8uLi8uLi8uLi9jb21wb25lbnRzL2VudGl0eS9oYS1lbnRpdHktcGlja2VyXCI7XG5cbmltcG9ydCB7IG9uQ2hhbmdlRXZlbnQgfSBmcm9tIFwiLi4vLi4vLi4vLi4vY29tbW9uL3ByZWFjdC9ldmVudFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdGF0ZUNvbmRpdGlvbiBleHRlbmRzIENvbXBvbmVudDxhbnk+IHtcbiAgcHJpdmF0ZSBvbkNoYW5nZTogKG9iajogYW55KSA9PiB2b2lkO1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuXG4gICAgdGhpcy5vbkNoYW5nZSA9IG9uQ2hhbmdlRXZlbnQuYmluZCh0aGlzLCBcImNvbmRpdGlvblwiKTtcbiAgICB0aGlzLmVudGl0eVBpY2tlZCA9IHRoaXMuZW50aXR5UGlja2VkLmJpbmQodGhpcyk7XG4gIH1cblxuICBwdWJsaWMgZW50aXR5UGlja2VkKGV2KSB7XG4gICAgdGhpcy5wcm9wcy5vbkNoYW5nZSh0aGlzLnByb3BzLmluZGV4LCB7XG4gICAgICAuLi50aGlzLnByb3BzLmNvbmRpdGlvbixcbiAgICAgIGVudGl0eV9pZDogZXYudGFyZ2V0LnZhbHVlLFxuICAgIH0pO1xuICB9XG5cbiAgLyogZXNsaW50LWRpc2FibGUgY2FtZWxjYXNlICovXG4gIHB1YmxpYyByZW5kZXIoeyBjb25kaXRpb24sIGhhc3MsIGxvY2FsaXplIH0pIHtcbiAgICBjb25zdCB7IGVudGl0eV9pZCwgc3RhdGUgfSA9IGNvbmRpdGlvbjtcbiAgICBjb25zdCBjbmRGb3IgPSBjb25kaXRpb24uZm9yO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8aGEtZW50aXR5LXBpY2tlclxuICAgICAgICAgIHZhbHVlPXtlbnRpdHlfaWR9XG4gICAgICAgICAgb25DaGFuZ2U9e3RoaXMuZW50aXR5UGlja2VkfVxuICAgICAgICAgIGhhc3M9e2hhc3N9XG4gICAgICAgICAgYWxsb3dDdXN0b21FbnRpdHlcbiAgICAgICAgLz5cbiAgICAgICAgPHBhcGVyLWlucHV0XG4gICAgICAgICAgbGFiZWw9e2xvY2FsaXplKFxuICAgICAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcuYXV0b21hdGlvbi5lZGl0b3IuY29uZGl0aW9ucy50eXBlLnN0YXRlLnN0YXRlXCJcbiAgICAgICAgICApfVxuICAgICAgICAgIG5hbWU9XCJzdGF0ZVwiXG4gICAgICAgICAgdmFsdWU9e3N0YXRlfVxuICAgICAgICAgIG9udmFsdWUtY2hhbmdlZD17dGhpcy5vbkNoYW5nZX1cbiAgICAgICAgLz5cbiAgICAgICAge2NuZEZvciAmJiA8cHJlPkZvcjoge0pTT04uc3RyaW5naWZ5KGNuZEZvciwgbnVsbCwgMil9PC9wcmU+fVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG4oU3RhdGVDb25kaXRpb24gYXMgYW55KS5kZWZhdWx0Q29uZmlnID0ge1xuICBlbnRpdHlfaWQ6IFwiXCIsXG4gIHN0YXRlOiBcIlwiLFxufTtcbiIsImltcG9ydCB7IGgsIENvbXBvbmVudCB9IGZyb20gXCJwcmVhY3RcIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWlucHV0L3BhcGVyLWlucHV0XCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1yYWRpby1idXR0b24vcGFwZXItcmFkaW8tYnV0dG9uXCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1yYWRpby1ncm91cC9wYXBlci1yYWRpby1ncm91cFwiO1xuXG5pbXBvcnQgeyBvbkNoYW5nZUV2ZW50IH0gZnJvbSBcIi4uLy4uLy4uLy4uL2NvbW1vbi9wcmVhY3QvZXZlbnRcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3VuQ29uZGl0aW9uIGV4dGVuZHMgQ29tcG9uZW50PGFueT4ge1xuICBwcml2YXRlIG9uQ2hhbmdlOiAob2JqOiBhbnkpID0+IHZvaWQ7XG4gIHByaXZhdGUgYWZ0ZXJQaWNrZWQ6IChvYmo6IGFueSkgPT4gdm9pZDtcbiAgcHJpdmF0ZSBiZWZvcmVQaWNrZWQ6IChvYmo6IGFueSkgPT4gdm9pZDtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuXG4gICAgdGhpcy5vbkNoYW5nZSA9IG9uQ2hhbmdlRXZlbnQuYmluZCh0aGlzLCBcImNvbmRpdGlvblwiKTtcbiAgICB0aGlzLmFmdGVyUGlja2VkID0gdGhpcy5yYWRpb0dyb3VwUGlja2VkLmJpbmQodGhpcywgXCJhZnRlclwiKTtcbiAgICB0aGlzLmJlZm9yZVBpY2tlZCA9IHRoaXMucmFkaW9Hcm91cFBpY2tlZC5iaW5kKHRoaXMsIFwiYmVmb3JlXCIpO1xuICB9XG5cbiAgcHVibGljIHJhZGlvR3JvdXBQaWNrZWQoa2V5LCBldikge1xuICAgIGNvbnN0IGNvbmRpdGlvbiA9IHsgLi4udGhpcy5wcm9wcy5jb25kaXRpb24gfTtcblxuICAgIGlmIChldi50YXJnZXQuc2VsZWN0ZWQpIHtcbiAgICAgIGNvbmRpdGlvbltrZXldID0gZXYudGFyZ2V0LnNlbGVjdGVkO1xuICAgIH0gZWxzZSB7XG4gICAgICBkZWxldGUgY29uZGl0aW9uW2tleV07XG4gICAgfVxuXG4gICAgdGhpcy5wcm9wcy5vbkNoYW5nZSh0aGlzLnByb3BzLmluZGV4LCBjb25kaXRpb24pO1xuICB9XG5cbiAgcHVibGljIHJlbmRlcih7IGNvbmRpdGlvbiwgbG9jYWxpemUgfSkge1xuICAgIC8qIGVzbGludC1kaXNhYmxlIGNhbWVsY2FzZSAqL1xuICAgIGNvbnN0IHsgYWZ0ZXIsIGFmdGVyX29mZnNldCwgYmVmb3JlLCBiZWZvcmVfb2Zmc2V0IH0gPSBjb25kaXRpb247XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxsYWJlbCBpZD1cImJlZm9yZWxhYmVsXCI+XG4gICAgICAgICAge2xvY2FsaXplKFxuICAgICAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcuYXV0b21hdGlvbi5lZGl0b3IuY29uZGl0aW9ucy50eXBlLnN1bi5iZWZvcmVcIlxuICAgICAgICAgICl9XG4gICAgICAgIDwvbGFiZWw+XG4gICAgICAgIDxwYXBlci1yYWRpby1ncm91cFxuICAgICAgICAgIGFsbG93LWVtcHR5LXNlbGVjdGlvblxuICAgICAgICAgIHNlbGVjdGVkPXtiZWZvcmV9XG4gICAgICAgICAgYXJpYS1sYWJlbGxlZGJ5PVwiYmVmb3JlbGFiZWxcIlxuICAgICAgICAgIG9ucGFwZXItcmFkaW8tZ3JvdXAtY2hhbmdlZD17dGhpcy5iZWZvcmVQaWNrZWR9XG4gICAgICAgID5cbiAgICAgICAgICA8cGFwZXItcmFkaW8tYnV0dG9uIG5hbWU9XCJzdW5yaXNlXCI+XG4gICAgICAgICAgICB7bG9jYWxpemUoXG4gICAgICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLmF1dG9tYXRpb24uZWRpdG9yLmNvbmRpdGlvbnMudHlwZS5zdW4uc3VucmlzZVwiXG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvcGFwZXItcmFkaW8tYnV0dG9uPlxuICAgICAgICAgIDxwYXBlci1yYWRpby1idXR0b24gbmFtZT1cInN1bnNldFwiPlxuICAgICAgICAgICAge2xvY2FsaXplKFxuICAgICAgICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy5hdXRvbWF0aW9uLmVkaXRvci5jb25kaXRpb25zLnR5cGUuc3VuLnN1bnNldFwiXG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvcGFwZXItcmFkaW8tYnV0dG9uPlxuICAgICAgICA8L3BhcGVyLXJhZGlvLWdyb3VwPlxuXG4gICAgICAgIDxwYXBlci1pbnB1dFxuICAgICAgICAgIGxhYmVsPXtsb2NhbGl6ZShcbiAgICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLmF1dG9tYXRpb24uZWRpdG9yLmNvbmRpdGlvbnMudHlwZS5zdW4uYmVmb3JlX29mZnNldFwiXG4gICAgICAgICAgKX1cbiAgICAgICAgICBuYW1lPVwiYmVmb3JlX29mZnNldFwiXG4gICAgICAgICAgdmFsdWU9e2JlZm9yZV9vZmZzZXR9XG4gICAgICAgICAgb252YWx1ZS1jaGFuZ2VkPXt0aGlzLm9uQ2hhbmdlfVxuICAgICAgICAgIGRpc2FibGVkPXtiZWZvcmUgPT09IHVuZGVmaW5lZH1cbiAgICAgICAgLz5cblxuICAgICAgICA8bGFiZWwgaWQ9XCJhZnRlcmxhYmVsXCI+XG4gICAgICAgICAge2xvY2FsaXplKFxuICAgICAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcuYXV0b21hdGlvbi5lZGl0b3IuY29uZGl0aW9ucy50eXBlLnN1bi5hZnRlclwiXG4gICAgICAgICAgKX1cbiAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgPHBhcGVyLXJhZGlvLWdyb3VwXG4gICAgICAgICAgYWxsb3ctZW1wdHktc2VsZWN0aW9uXG4gICAgICAgICAgc2VsZWN0ZWQ9e2FmdGVyfVxuICAgICAgICAgIGFyaWEtbGFiZWxsZWRieT1cImFmdGVybGFiZWxcIlxuICAgICAgICAgIG9ucGFwZXItcmFkaW8tZ3JvdXAtY2hhbmdlZD17dGhpcy5hZnRlclBpY2tlZH1cbiAgICAgICAgPlxuICAgICAgICAgIDxwYXBlci1yYWRpby1idXR0b24gbmFtZT1cInN1bnJpc2VcIj5cbiAgICAgICAgICAgIHtsb2NhbGl6ZShcbiAgICAgICAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcuYXV0b21hdGlvbi5lZGl0b3IuY29uZGl0aW9ucy50eXBlLnN1bi5zdW5yaXNlXCJcbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9wYXBlci1yYWRpby1idXR0b24+XG4gICAgICAgICAgPHBhcGVyLXJhZGlvLWJ1dHRvbiBuYW1lPVwic3Vuc2V0XCI+XG4gICAgICAgICAgICB7bG9jYWxpemUoXG4gICAgICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLmF1dG9tYXRpb24uZWRpdG9yLmNvbmRpdGlvbnMudHlwZS5zdW4uc3Vuc2V0XCJcbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9wYXBlci1yYWRpby1idXR0b24+XG4gICAgICAgIDwvcGFwZXItcmFkaW8tZ3JvdXA+XG5cbiAgICAgICAgPHBhcGVyLWlucHV0XG4gICAgICAgICAgbGFiZWw9e2xvY2FsaXplKFxuICAgICAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcuYXV0b21hdGlvbi5lZGl0b3IuY29uZGl0aW9ucy50eXBlLnN1bi5hZnRlcl9vZmZzZXRcIlxuICAgICAgICAgICl9XG4gICAgICAgICAgbmFtZT1cImFmdGVyX29mZnNldFwiXG4gICAgICAgICAgdmFsdWU9e2FmdGVyX29mZnNldH1cbiAgICAgICAgICBvbnZhbHVlLWNoYW5nZWQ9e3RoaXMub25DaGFuZ2V9XG4gICAgICAgICAgZGlzYWJsZWQ9e2FmdGVyID09PSB1bmRlZmluZWR9XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbihTdW5Db25kaXRpb24gYXMgYW55KS5kZWZhdWx0Q29uZmlnID0ge307XG4iLCJpbXBvcnQgeyBoLCBDb21wb25lbnQgfSBmcm9tIFwicHJlYWN0XCI7XG5pbXBvcnQgXCIuLi8uLi8uLi8uLi9jb21wb25lbnRzL2hhLXRleHRhcmVhXCI7XG5cbmltcG9ydCB7IG9uQ2hhbmdlRXZlbnQgfSBmcm9tIFwiLi4vLi4vLi4vLi4vY29tbW9uL3ByZWFjdC9ldmVudFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUZW1wbGF0ZUNvbmRpdGlvbiBleHRlbmRzIENvbXBvbmVudDxhbnk+IHtcbiAgcHJpdmF0ZSBvbkNoYW5nZTogKG9iajogYW55KSA9PiB2b2lkO1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuXG4gICAgdGhpcy5vbkNoYW5nZSA9IG9uQ2hhbmdlRXZlbnQuYmluZCh0aGlzLCBcImNvbmRpdGlvblwiKTtcbiAgfVxuXG4gIHB1YmxpYyByZW5kZXIoeyBjb25kaXRpb24sIGxvY2FsaXplIH0pIHtcbiAgICAvKiBlc2xpbnQtZGlzYWJsZSBjYW1lbGNhc2UgKi9cbiAgICBjb25zdCB7IHZhbHVlX3RlbXBsYXRlIH0gPSBjb25kaXRpb247XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxoYS10ZXh0YXJlYVxuICAgICAgICAgIGxhYmVsPXtsb2NhbGl6ZShcbiAgICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLmF1dG9tYXRpb24uZWRpdG9yLmNvbmRpdGlvbnMudHlwZS50ZW1wbGF0ZS52YWx1ZV90ZW1wbGF0ZVwiXG4gICAgICAgICAgKX1cbiAgICAgICAgICBuYW1lPVwidmFsdWVfdGVtcGxhdGVcIlxuICAgICAgICAgIHZhbHVlPXt2YWx1ZV90ZW1wbGF0ZX1cbiAgICAgICAgICBvbnZhbHVlLWNoYW5nZWQ9e3RoaXMub25DaGFuZ2V9XG4gICAgICAgICAgZGlyPVwibHRyXCJcbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuKFRlbXBsYXRlQ29uZGl0aW9uIGFzIGFueSkuZGVmYXVsdENvbmZpZyA9IHtcbiAgdmFsdWVfdGVtcGxhdGU6IFwiXCIsXG59O1xuIiwiaW1wb3J0IHsgaCwgQ29tcG9uZW50IH0gZnJvbSBcInByZWFjdFwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItaW5wdXQvcGFwZXItaW5wdXRcIjtcblxuaW1wb3J0IHsgb25DaGFuZ2VFdmVudCB9IGZyb20gXCIuLi8uLi8uLi8uLi9jb21tb24vcHJlYWN0L2V2ZW50XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRpbWVDb25kaXRpb24gZXh0ZW5kcyBDb21wb25lbnQ8YW55PiB7XG4gIHByaXZhdGUgb25DaGFuZ2U6IChvYmo6IGFueSkgPT4gdm9pZDtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcblxuICAgIHRoaXMub25DaGFuZ2UgPSBvbkNoYW5nZUV2ZW50LmJpbmQodGhpcywgXCJjb25kaXRpb25cIik7XG4gIH1cblxuICAvKiBlc2xpbnQtZGlzYWJsZSBjYW1lbGNhc2UgKi9cbiAgcHVibGljIHJlbmRlcih7IGNvbmRpdGlvbiwgbG9jYWxpemUgfSkge1xuICAgIGNvbnN0IHsgYWZ0ZXIsIGJlZm9yZSB9ID0gY29uZGl0aW9uO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8cGFwZXItaW5wdXRcbiAgICAgICAgICBsYWJlbD17bG9jYWxpemUoXG4gICAgICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy5hdXRvbWF0aW9uLmVkaXRvci5jb25kaXRpb25zLnR5cGUudGltZS5hZnRlclwiXG4gICAgICAgICAgKX1cbiAgICAgICAgICBuYW1lPVwiYWZ0ZXJcIlxuICAgICAgICAgIHZhbHVlPXthZnRlcn1cbiAgICAgICAgICBvbnZhbHVlLWNoYW5nZWQ9e3RoaXMub25DaGFuZ2V9XG4gICAgICAgIC8+XG4gICAgICAgIDxwYXBlci1pbnB1dFxuICAgICAgICAgIGxhYmVsPXtsb2NhbGl6ZShcbiAgICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLmF1dG9tYXRpb24uZWRpdG9yLmNvbmRpdGlvbnMudHlwZS50aW1lLmJlZm9yZVwiXG4gICAgICAgICAgKX1cbiAgICAgICAgICBuYW1lPVwiYmVmb3JlXCJcbiAgICAgICAgICB2YWx1ZT17YmVmb3JlfVxuICAgICAgICAgIG9udmFsdWUtY2hhbmdlZD17dGhpcy5vbkNoYW5nZX1cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuKFRpbWVDb25kaXRpb24gYXMgYW55KS5kZWZhdWx0Q29uZmlnID0ge307XG4iLCJpbXBvcnQgeyBoLCBDb21wb25lbnQgfSBmcm9tIFwicHJlYWN0XCI7XG5pbXBvcnQgXCIuLi8uLi8uLi8uLi9jb21wb25lbnRzL2VudGl0eS9oYS1lbnRpdHktcGlja2VyXCI7XG5pbXBvcnQgeyBoYXNMb2NhdGlvbiB9IGZyb20gXCIuLi8uLi8uLi8uLi9jb21tb24vZW50aXR5L2hhc19sb2NhdGlvblwiO1xuaW1wb3J0IHsgY29tcHV0ZVN0YXRlRG9tYWluIH0gZnJvbSBcIi4uLy4uLy4uLy4uL2NvbW1vbi9lbnRpdHkvY29tcHV0ZV9zdGF0ZV9kb21haW5cIjtcblxuZnVuY3Rpb24gem9uZUFuZExvY2F0aW9uRmlsdGVyKHN0YXRlT2JqKSB7XG4gIHJldHVybiBoYXNMb2NhdGlvbihzdGF0ZU9iaikgJiYgY29tcHV0ZVN0YXRlRG9tYWluKHN0YXRlT2JqKSAhPT0gXCJ6b25lXCI7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFpvbmVDb25kaXRpb24gZXh0ZW5kcyBDb21wb25lbnQ8YW55PiB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG5cbiAgICB0aGlzLmVudGl0eVBpY2tlZCA9IHRoaXMuZW50aXR5UGlja2VkLmJpbmQodGhpcyk7XG4gICAgdGhpcy56b25lUGlja2VkID0gdGhpcy56b25lUGlja2VkLmJpbmQodGhpcyk7XG4gIH1cblxuICBwdWJsaWMgZW50aXR5UGlja2VkKGV2KSB7XG4gICAgdGhpcy5wcm9wcy5vbkNoYW5nZSh0aGlzLnByb3BzLmluZGV4LCB7XG4gICAgICAuLi50aGlzLnByb3BzLmNvbmRpdGlvbixcbiAgICAgIGVudGl0eV9pZDogZXYudGFyZ2V0LnZhbHVlLFxuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIHpvbmVQaWNrZWQoZXYpIHtcbiAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKHRoaXMucHJvcHMuaW5kZXgsIHtcbiAgICAgIC4uLnRoaXMucHJvcHMuY29uZGl0aW9uLFxuICAgICAgem9uZTogZXYudGFyZ2V0LnZhbHVlLFxuICAgIH0pO1xuICB9XG5cbiAgLyogZXNsaW50LWRpc2FibGUgY2FtZWxjYXNlICovXG4gIHB1YmxpYyByZW5kZXIoeyBjb25kaXRpb24sIGhhc3MsIGxvY2FsaXplIH0pIHtcbiAgICBjb25zdCB7IGVudGl0eV9pZCwgem9uZSB9ID0gY29uZGl0aW9uO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8aGEtZW50aXR5LXBpY2tlclxuICAgICAgICAgIGxhYmVsPXtsb2NhbGl6ZShcbiAgICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLmF1dG9tYXRpb24uZWRpdG9yLmNvbmRpdGlvbnMudHlwZS56b25lLmVudGl0eVwiXG4gICAgICAgICAgKX1cbiAgICAgICAgICB2YWx1ZT17ZW50aXR5X2lkfVxuICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmVudGl0eVBpY2tlZH1cbiAgICAgICAgICBoYXNzPXtoYXNzfVxuICAgICAgICAgIGFsbG93Q3VzdG9tRW50aXR5XG4gICAgICAgICAgZW50aXR5RmlsdGVyPXt6b25lQW5kTG9jYXRpb25GaWx0ZXJ9XG4gICAgICAgIC8+XG4gICAgICAgIDxoYS1lbnRpdHktcGlja2VyXG4gICAgICAgICAgbGFiZWw9e2xvY2FsaXplKFxuICAgICAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcuYXV0b21hdGlvbi5lZGl0b3IuY29uZGl0aW9ucy50eXBlLnpvbmUuem9uZVwiXG4gICAgICAgICAgKX1cbiAgICAgICAgICB2YWx1ZT17em9uZX1cbiAgICAgICAgICBvbkNoYW5nZT17dGhpcy56b25lUGlja2VkfVxuICAgICAgICAgIGhhc3M9e2hhc3N9XG4gICAgICAgICAgYWxsb3dDdXN0b21FbnRpdHlcbiAgICAgICAgICBkb21haW5GaWx0ZXI9XCJ6b25lXCJcbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuKFpvbmVDb25kaXRpb24gYXMgYW55KS5kZWZhdWx0Q29uZmlnID0ge1xuICBlbnRpdHlfaWQ6IFwiXCIsXG4gIHpvbmU6IFwiXCIsXG59O1xuIiwiaW1wb3J0IHsgaCwgQ29tcG9uZW50IH0gZnJvbSBcInByZWFjdFwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItZHJvcGRvd24tbWVudS9wYXBlci1kcm9wZG93bi1tZW51LWxpZ2h0XCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1saXN0Ym94L3BhcGVyLWxpc3Rib3hcIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWl0ZW0vcGFwZXItaXRlbVwiO1xuXG5pbXBvcnQgQ2FsbFNlcnZpY2VBY3Rpb24gZnJvbSBcIi4vY2FsbF9zZXJ2aWNlXCI7XG5pbXBvcnQgQ29uZGl0aW9uQWN0aW9uIGZyb20gXCIuL2NvbmRpdGlvblwiO1xuaW1wb3J0IERlbGF5QWN0aW9uIGZyb20gXCIuL2RlbGF5XCI7XG5pbXBvcnQgRGV2aWNlQWN0aW9uIGZyb20gXCIuL2RldmljZVwiO1xuaW1wb3J0IEV2ZW50QWN0aW9uIGZyb20gXCIuL2V2ZW50XCI7XG5pbXBvcnQgU2NlbmVBY3Rpb24gZnJvbSBcIi4vc2NlbmVcIjtcbmltcG9ydCBXYWl0QWN0aW9uIGZyb20gXCIuL3dhaXRcIjtcblxuY29uc3QgVFlQRVMgPSB7XG4gIHNlcnZpY2U6IENhbGxTZXJ2aWNlQWN0aW9uLFxuICBkZWxheTogRGVsYXlBY3Rpb24sXG4gIHdhaXRfdGVtcGxhdGU6IFdhaXRBY3Rpb24sXG4gIGNvbmRpdGlvbjogQ29uZGl0aW9uQWN0aW9uLFxuICBldmVudDogRXZlbnRBY3Rpb24sXG4gIGRldmljZV9pZDogRGV2aWNlQWN0aW9uLFxuICBzY2VuZTogU2NlbmVBY3Rpb24sXG59O1xuXG5jb25zdCBPUFRJT05TID0gT2JqZWN0LmtleXMoVFlQRVMpLnNvcnQoKTtcblxuZnVuY3Rpb24gZ2V0VHlwZShhY3Rpb24pIHtcbiAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKFRZUEVTKTtcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBwcmVmZXItZm9yLW9mXG4gIGZvciAobGV0IGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xuICAgIGlmIChrZXlzW2ldIGluIGFjdGlvbikge1xuICAgICAgcmV0dXJuIGtleXNbaV07XG4gICAgfVxuICB9XG4gIHJldHVybiBudWxsO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBY3Rpb24gZXh0ZW5kcyBDb21wb25lbnQ8YW55PiB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG5cbiAgICB0aGlzLnR5cGVDaGFuZ2VkID0gdGhpcy50eXBlQ2hhbmdlZC5iaW5kKHRoaXMpO1xuICB9XG5cbiAgcHVibGljIHR5cGVDaGFuZ2VkKGV2KSB7XG4gICAgY29uc3QgbmV3VHlwZSA9IGV2LnRhcmdldC5zZWxlY3RlZEl0ZW0uYXR0cmlidXRlcy5hY3Rpb24udmFsdWU7XG4gICAgY29uc3Qgb2xkVHlwZSA9IGdldFR5cGUodGhpcy5wcm9wcy5hY3Rpb24pO1xuXG4gICAgaWYgKG9sZFR5cGUgIT09IG5ld1R5cGUpIHtcbiAgICAgIHRoaXMucHJvcHMub25DaGFuZ2UodGhpcy5wcm9wcy5pbmRleCwgVFlQRVNbbmV3VHlwZV0uZGVmYXVsdENvbmZpZyk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIHJlbmRlcih7IGluZGV4LCBhY3Rpb24sIG9uQ2hhbmdlLCBoYXNzLCBsb2NhbGl6ZSB9KSB7XG4gICAgY29uc3QgdHlwZSA9IGdldFR5cGUoYWN0aW9uKTtcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IHZhcmlhYmxlLW5hbWVcbiAgICBjb25zdCBDb21wID0gdHlwZSAmJiBUWVBFU1t0eXBlXTtcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgY29uc3Qgc2VsZWN0ZWQgPSBPUFRJT05TLmluZGV4T2YodHlwZSk7XG5cbiAgICBpZiAoIUNvbXApIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAge2xvY2FsaXplKFxuICAgICAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcuYXV0b21hdGlvbi5lZGl0b3IuYWN0aW9ucy51bnN1cHBvcnRlZF9hY3Rpb25cIixcbiAgICAgICAgICAgIFwiYWN0aW9uXCIsXG4gICAgICAgICAgICB0eXBlXG4gICAgICAgICAgKX1cbiAgICAgICAgICA8cHJlPntKU09OLnN0cmluZ2lmeShhY3Rpb24sIG51bGwsIDIpfTwvcHJlPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICk7XG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8cGFwZXItZHJvcGRvd24tbWVudS1saWdodFxuICAgICAgICAgIGxhYmVsPXtsb2NhbGl6ZShcbiAgICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLmF1dG9tYXRpb24uZWRpdG9yLmFjdGlvbnMudHlwZV9zZWxlY3RcIlxuICAgICAgICAgICl9XG4gICAgICAgICAgbm8tYW5pbWF0aW9uc1xuICAgICAgICA+XG4gICAgICAgICAgPHBhcGVyLWxpc3Rib3hcbiAgICAgICAgICAgIHNsb3Q9XCJkcm9wZG93bi1jb250ZW50XCJcbiAgICAgICAgICAgIHNlbGVjdGVkPXtzZWxlY3RlZH1cbiAgICAgICAgICAgIG9uaXJvbi1zZWxlY3Q9e3RoaXMudHlwZUNoYW5nZWR9XG4gICAgICAgICAgPlxuICAgICAgICAgICAge09QVElPTlMubWFwKChvcHQpID0+IChcbiAgICAgICAgICAgICAgPHBhcGVyLWl0ZW0gYWN0aW9uPXtvcHR9PlxuICAgICAgICAgICAgICAgIHtsb2NhbGl6ZShcbiAgICAgICAgICAgICAgICAgIGB1aS5wYW5lbC5jb25maWcuYXV0b21hdGlvbi5lZGl0b3IuYWN0aW9ucy50eXBlLiR7b3B0fS5sYWJlbGBcbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICA8L3BhcGVyLWl0ZW0+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L3BhcGVyLWxpc3Rib3g+XG4gICAgICAgIDwvcGFwZXItZHJvcGRvd24tbWVudS1saWdodD5cbiAgICAgICAgPENvbXBcbiAgICAgICAgICBpbmRleD17aW5kZXh9XG4gICAgICAgICAgYWN0aW9uPXthY3Rpb259XG4gICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlfVxuICAgICAgICAgIGhhc3M9e2hhc3N9XG4gICAgICAgICAgbG9jYWxpemU9e2xvY2FsaXplfVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgaCwgQ29tcG9uZW50IH0gZnJvbSBcInByZWFjdFwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItbWVudS1idXR0b24vcGFwZXItbWVudS1idXR0b25cIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWljb24tYnV0dG9uL3BhcGVyLWljb24tYnV0dG9uXCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1pdGVtL3BhcGVyLWl0ZW1cIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWxpc3Rib3gvcGFwZXItbGlzdGJveFwiO1xuaW1wb3J0IFwiLi4vLi4vLi4vLi4vY29tcG9uZW50cy9oYS1jYXJkXCI7XG5cbmltcG9ydCBBY3Rpb25FZGl0IGZyb20gXCIuL2FjdGlvbl9lZGl0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFjdGlvbiBleHRlbmRzIENvbXBvbmVudDxhbnk+IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcblxuICAgIHRoaXMub25EZWxldGUgPSB0aGlzLm9uRGVsZXRlLmJpbmQodGhpcyk7XG4gIH1cblxuICBwdWJsaWMgb25EZWxldGUoKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXG4gICAgaWYgKFxuICAgICAgY29uZmlybShcbiAgICAgICAgdGhpcy5wcm9wcy5sb2NhbGl6ZShcbiAgICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy5hdXRvbWF0aW9uLmVkaXRvci5hY3Rpb25zLmRlbGV0ZV9jb25maXJtXCJcbiAgICAgICAgKVxuICAgICAgKVxuICAgICkge1xuICAgICAgdGhpcy5wcm9wcy5vbkNoYW5nZSh0aGlzLnByb3BzLmluZGV4LCBudWxsKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgcmVuZGVyKHByb3BzKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxoYS1jYXJkPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1jb250ZW50XCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtbWVudVwiPlxuICAgICAgICAgICAgPHBhcGVyLW1lbnUtYnV0dG9uXG4gICAgICAgICAgICAgIG5vLWFuaW1hdGlvbnNcbiAgICAgICAgICAgICAgaG9yaXpvbnRhbC1hbGlnbj1cInJpZ2h0XCJcbiAgICAgICAgICAgICAgaG9yaXpvbnRhbC1vZmZzZXQ9XCItNVwiXG4gICAgICAgICAgICAgIHZlcnRpY2FsLW9mZnNldD1cIi01XCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPHBhcGVyLWljb24tYnV0dG9uXG4gICAgICAgICAgICAgICAgaWNvbj1cImhhc3M6ZG90cy12ZXJ0aWNhbFwiXG4gICAgICAgICAgICAgICAgc2xvdD1cImRyb3Bkb3duLXRyaWdnZXJcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8cGFwZXItbGlzdGJveCBzbG90PVwiZHJvcGRvd24tY29udGVudFwiPlxuICAgICAgICAgICAgICAgIDxwYXBlci1pdGVtIGRpc2FibGVkPlxuICAgICAgICAgICAgICAgICAge3Byb3BzLmxvY2FsaXplKFxuICAgICAgICAgICAgICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy5hdXRvbWF0aW9uLmVkaXRvci5hY3Rpb25zLmR1cGxpY2F0ZVwiXG4gICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIDwvcGFwZXItaXRlbT5cbiAgICAgICAgICAgICAgICA8cGFwZXItaXRlbSBvblRhcD17dGhpcy5vbkRlbGV0ZX0+XG4gICAgICAgICAgICAgICAgICB7cHJvcHMubG9jYWxpemUoXG4gICAgICAgICAgICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLmF1dG9tYXRpb24uZWRpdG9yLmFjdGlvbnMuZGVsZXRlXCJcbiAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgPC9wYXBlci1pdGVtPlxuICAgICAgICAgICAgICA8L3BhcGVyLWxpc3Rib3g+XG4gICAgICAgICAgICA8L3BhcGVyLW1lbnUtYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxBY3Rpb25FZGl0IHsuLi5wcm9wc30gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2hhLWNhcmQ+XG4gICAgKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgaCwgQ29tcG9uZW50IH0gZnJvbSBcInByZWFjdFwiO1xuaW1wb3J0IFwiLi4vLi4vLi4vLi4vY29tcG9uZW50cy9oYS1zZXJ2aWNlLXBpY2tlclwiO1xuXG5pbXBvcnQgWUFNTFRleHRBcmVhIGZyb20gXCIuLi95YW1sX3RleHRhcmVhXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhbGxTZXJ2aWNlQWN0aW9uIGV4dGVuZHMgQ29tcG9uZW50PGFueT4ge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuXG4gICAgdGhpcy5zZXJ2aWNlQ2hhbmdlZCA9IHRoaXMuc2VydmljZUNoYW5nZWQuYmluZCh0aGlzKTtcbiAgICB0aGlzLnNlcnZpY2VEYXRhQ2hhbmdlZCA9IHRoaXMuc2VydmljZURhdGFDaGFuZ2VkLmJpbmQodGhpcyk7XG4gIH1cblxuICBwdWJsaWMgc2VydmljZUNoYW5nZWQoZXYpIHtcbiAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKHRoaXMucHJvcHMuaW5kZXgsIHtcbiAgICAgIC4uLnRoaXMucHJvcHMuYWN0aW9uLFxuICAgICAgc2VydmljZTogZXYudGFyZ2V0LnZhbHVlLFxuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIHNlcnZpY2VEYXRhQ2hhbmdlZChkYXRhKSB7XG4gICAgdGhpcy5wcm9wcy5vbkNoYW5nZSh0aGlzLnByb3BzLmluZGV4LCB7IC4uLnRoaXMucHJvcHMuYWN0aW9uLCBkYXRhIH0pO1xuICB9XG5cbiAgcHVibGljIHJlbmRlcih7IGFjdGlvbiwgaGFzcywgbG9jYWxpemUgfSkge1xuICAgIGNvbnN0IHsgc2VydmljZSwgZGF0YSB9ID0gYWN0aW9uO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxoYS1zZXJ2aWNlLXBpY2tlclxuICAgICAgICAgIGhhc3M9e2hhc3N9XG4gICAgICAgICAgdmFsdWU9e3NlcnZpY2V9XG4gICAgICAgICAgb25DaGFuZ2U9e3RoaXMuc2VydmljZUNoYW5nZWR9XG4gICAgICAgIC8+XG4gICAgICAgIDxZQU1MVGV4dEFyZWFcbiAgICAgICAgICBsYWJlbD17bG9jYWxpemUoXG4gICAgICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy5hdXRvbWF0aW9uLmVkaXRvci5hY3Rpb25zLnR5cGUuc2VydmljZS5zZXJ2aWNlX2RhdGFcIlxuICAgICAgICAgICl9XG4gICAgICAgICAgdmFsdWU9e2RhdGF9XG4gICAgICAgICAgb25DaGFuZ2U9e3RoaXMuc2VydmljZURhdGFDaGFuZ2VkfVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG4oQ2FsbFNlcnZpY2VBY3Rpb24gYXMgYW55KS5kZWZhdWx0Q29uZmlnID0ge1xuICBhbGlhczogXCJcIixcbiAgc2VydmljZTogXCJcIixcbiAgZGF0YToge30sXG59O1xuIiwiaW1wb3J0IHsgaCwgQ29tcG9uZW50IH0gZnJvbSBcInByZWFjdFwiO1xuXG5pbXBvcnQgU3RhdGVDb25kaXRpb24gZnJvbSBcIi4uL2NvbmRpdGlvbi9zdGF0ZVwiO1xuaW1wb3J0IENvbmRpdGlvbkVkaXQgZnJvbSBcIi4uL2NvbmRpdGlvbi9jb25kaXRpb25fZWRpdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb25kaXRpb25BY3Rpb24gZXh0ZW5kcyBDb21wb25lbnQ8YW55PiB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxuICBwdWJsaWMgcmVuZGVyKHsgYWN0aW9uLCBpbmRleCwgb25DaGFuZ2UsIGhhc3MsIGxvY2FsaXplIH0pIHtcbiAgICByZXR1cm4gKFxuICAgICAgPENvbmRpdGlvbkVkaXRcbiAgICAgICAgY29uZGl0aW9uPXthY3Rpb259XG4gICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZX1cbiAgICAgICAgaW5kZXg9e2luZGV4fVxuICAgICAgICBoYXNzPXtoYXNzfVxuICAgICAgICBsb2NhbGl6ZT17bG9jYWxpemV9XG4gICAgICAvPlxuICAgICk7XG4gIH1cbn1cblxuKENvbmRpdGlvbkFjdGlvbiBhcyBhbnkpLmRlZmF1bHRDb25maWcgPSB7XG4gIGNvbmRpdGlvbjogXCJzdGF0ZVwiLFxuICAuLi4oU3RhdGVDb25kaXRpb24gYXMgYW55KS5kZWZhdWx0Q29uZmlnLFxufTtcbiIsImltcG9ydCB7IGgsIENvbXBvbmVudCB9IGZyb20gXCJwcmVhY3RcIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWlucHV0L3BhcGVyLWlucHV0XCI7XG5pbXBvcnQgeyBvbkNoYW5nZUV2ZW50IH0gZnJvbSBcIi4uLy4uLy4uLy4uL2NvbW1vbi9wcmVhY3QvZXZlbnRcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGVsYXlBY3Rpb24gZXh0ZW5kcyBDb21wb25lbnQ8YW55PiB7XG4gIHByaXZhdGUgb25DaGFuZ2U6IChvYmo6IGFueSkgPT4gdm9pZDtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcblxuICAgIHRoaXMub25DaGFuZ2UgPSBvbkNoYW5nZUV2ZW50LmJpbmQodGhpcywgXCJhY3Rpb25cIik7XG4gIH1cblxuICBwdWJsaWMgcmVuZGVyKHsgYWN0aW9uLCBsb2NhbGl6ZSB9KSB7XG4gICAgY29uc3QgeyBkZWxheSB9ID0gYWN0aW9uO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8cGFwZXItaW5wdXRcbiAgICAgICAgICBsYWJlbD17bG9jYWxpemUoXG4gICAgICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy5hdXRvbWF0aW9uLmVkaXRvci5hY3Rpb25zLnR5cGUuZGVsYXkuZGVsYXlcIlxuICAgICAgICAgICl9XG4gICAgICAgICAgbmFtZT1cImRlbGF5XCJcbiAgICAgICAgICB2YWx1ZT17ZGVsYXl9XG4gICAgICAgICAgb252YWx1ZS1jaGFuZ2VkPXt0aGlzLm9uQ2hhbmdlfVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG4oRGVsYXlBY3Rpb24gYXMgYW55KS5kZWZhdWx0Q29uZmlnID0ge1xuICBkZWxheTogXCJcIixcbn07XG4iLCJpbXBvcnQgeyBoLCBDb21wb25lbnQgfSBmcm9tIFwicHJlYWN0XCI7XG5cbmltcG9ydCBcIi4uLy4uLy4uLy4uL2NvbXBvbmVudHMvZGV2aWNlL2hhLWRldmljZS1waWNrZXJcIjtcbmltcG9ydCBcIi4uLy4uLy4uLy4uL2NvbXBvbmVudHMvZGV2aWNlL2hhLWRldmljZS1hY3Rpb24tcGlja2VyXCI7XG5pbXBvcnQgeyBIb21lQXNzaXN0YW50IH0gZnJvbSBcIi4uLy4uLy4uLy4uL3R5cGVzXCI7XG5pbXBvcnQgeyBEZXZpY2VBY3Rpb24gfSBmcm9tIFwiLi4vLi4vLi4vLi4vZGF0YS9zY3JpcHRcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGV2aWNlQWN0aW9uRWRpdG9yIGV4dGVuZHMgQ29tcG9uZW50PFxuICB7XG4gICAgaW5kZXg6IG51bWJlcjtcbiAgICBhY3Rpb246IERldmljZUFjdGlvbjtcbiAgICBoYXNzOiBIb21lQXNzaXN0YW50O1xuICAgIG9uQ2hhbmdlKGluZGV4OiBudW1iZXIsIGFjdGlvbjogRGV2aWNlQWN0aW9uKTtcbiAgfSxcbiAge1xuICAgIGRldmljZV9pZDogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICB9XG4+IHtcbiAgcHVibGljIHN0YXRpYyBkZWZhdWx0Q29uZmlnOiBEZXZpY2VBY3Rpb24gPSB7XG4gICAgZGV2aWNlX2lkOiBcIlwiLFxuICAgIGRvbWFpbjogXCJcIixcbiAgICBlbnRpdHlfaWQ6IFwiXCIsXG4gIH07XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLmRldmljZVBpY2tlZCA9IHRoaXMuZGV2aWNlUGlja2VkLmJpbmQodGhpcyk7XG4gICAgdGhpcy5kZXZpY2VBY3Rpb25QaWNrZWQgPSB0aGlzLmRldmljZUFjdGlvblBpY2tlZC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuc3RhdGUgPSB7IGRldmljZV9pZDogdW5kZWZpbmVkIH07XG4gIH1cblxuICBwdWJsaWMgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgYWN0aW9uLCBoYXNzIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IGRldmljZUlkID0gdGhpcy5zdGF0ZS5kZXZpY2VfaWQgfHwgYWN0aW9uLmRldmljZV9pZDtcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8aGEtZGV2aWNlLXBpY2tlclxuICAgICAgICAgIHZhbHVlPXtkZXZpY2VJZH1cbiAgICAgICAgICBvbkNoYW5nZT17dGhpcy5kZXZpY2VQaWNrZWR9XG4gICAgICAgICAgaGFzcz17aGFzc31cbiAgICAgICAgICBsYWJlbD1cIkRldmljZVwiXG4gICAgICAgIC8+XG4gICAgICAgIDxoYS1kZXZpY2UtYWN0aW9uLXBpY2tlclxuICAgICAgICAgIHZhbHVlPXthY3Rpb259XG4gICAgICAgICAgZGV2aWNlSWQ9e2RldmljZUlkfVxuICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmRldmljZUFjdGlvblBpY2tlZH1cbiAgICAgICAgICBoYXNzPXtoYXNzfVxuICAgICAgICAgIGxhYmVsPVwiQWN0aW9uXCJcbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIGRldmljZVBpY2tlZChldikge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBkZXZpY2VfaWQ6IGV2LnRhcmdldC52YWx1ZSB9KTtcbiAgfVxuXG4gIHByaXZhdGUgZGV2aWNlQWN0aW9uUGlja2VkKGV2KSB7XG4gICAgY29uc3QgZGV2aWNlQWN0aW9uID0geyAuLi5ldi50YXJnZXQudmFsdWUgfTtcbiAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKHRoaXMucHJvcHMuaW5kZXgsIGRldmljZUFjdGlvbik7XG4gIH1cbn1cbiIsImltcG9ydCB7IGgsIENvbXBvbmVudCB9IGZyb20gXCJwcmVhY3RcIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWlucHV0L3BhcGVyLWlucHV0XCI7XG5cbmltcG9ydCBZQU1MVGV4dEFyZWEgZnJvbSBcIi4uL3lhbWxfdGV4dGFyZWFcIjtcbmltcG9ydCB7IG9uQ2hhbmdlRXZlbnQgfSBmcm9tIFwiLi4vLi4vLi4vLi4vY29tbW9uL3ByZWFjdC9ldmVudFwiO1xuaW1wb3J0IHsgTG9jYWxpemVGdW5jIH0gZnJvbSBcIi4uLy4uLy4uLy4uL2NvbW1vbi90cmFuc2xhdGlvbnMvbG9jYWxpemVcIjtcbmltcG9ydCB7IEV2ZW50QWN0aW9uIH0gZnJvbSBcIi4uLy4uLy4uLy4uL2RhdGEvc2NyaXB0XCI7XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIGluZGV4OiBudW1iZXI7XG4gIGFjdGlvbjogRXZlbnRBY3Rpb247XG4gIGxvY2FsaXplOiBMb2NhbGl6ZUZ1bmM7XG4gIG9uQ2hhbmdlOiAoaW5kZXg6IG51bWJlciwgYWN0aW9uOiBFdmVudEFjdGlvbikgPT4gdm9pZDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXZlbnRBY3Rpb25Gb3JtIGV4dGVuZHMgQ29tcG9uZW50PFByb3BzPiB7XG4gIHByaXZhdGUgb25DaGFuZ2U6IChldmVudDogRXZlbnQpID0+IHZvaWQ7XG5cbiAgc3RhdGljIGdldCBkZWZhdWx0Q29uZmlnKCk6IEV2ZW50QWN0aW9uIHtcbiAgICByZXR1cm4ge1xuICAgICAgZXZlbnQ6IFwiXCIsXG4gICAgICBldmVudF9kYXRhOiB7fSxcbiAgICB9O1xuICB9XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcblxuICAgIHRoaXMub25DaGFuZ2UgPSBvbkNoYW5nZUV2ZW50LmJpbmQodGhpcywgXCJhY3Rpb25cIik7XG4gICAgdGhpcy5zZXJ2aWNlRGF0YUNoYW5nZWQgPSB0aGlzLnNlcnZpY2VEYXRhQ2hhbmdlZC5iaW5kKHRoaXMpO1xuICB9XG5cbiAgcHVibGljIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICBhY3Rpb246IHsgZXZlbnQsIGV2ZW50X2RhdGEgfSxcbiAgICAgIGxvY2FsaXplLFxuICAgIH0gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8cGFwZXItaW5wdXRcbiAgICAgICAgICBsYWJlbD17bG9jYWxpemUoXG4gICAgICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy5hdXRvbWF0aW9uLmVkaXRvci5hY3Rpb25zLnR5cGUuZXZlbnQuZXZlbnRcIlxuICAgICAgICAgICl9XG4gICAgICAgICAgbmFtZT1cImV2ZW50XCJcbiAgICAgICAgICB2YWx1ZT17ZXZlbnR9XG4gICAgICAgICAgb252YWx1ZS1jaGFuZ2VkPXt0aGlzLm9uQ2hhbmdlfVxuICAgICAgICAvPlxuICAgICAgICA8WUFNTFRleHRBcmVhXG4gICAgICAgICAgbGFiZWw9e2xvY2FsaXplKFxuICAgICAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcuYXV0b21hdGlvbi5lZGl0b3IuYWN0aW9ucy50eXBlLmV2ZW50LnNlcnZpY2VfZGF0YVwiXG4gICAgICAgICAgKX1cbiAgICAgICAgICB2YWx1ZT17ZXZlbnRfZGF0YX1cbiAgICAgICAgICBvbkNoYW5nZT17dGhpcy5zZXJ2aWNlRGF0YUNoYW5nZWR9XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBzZXJ2aWNlRGF0YUNoYW5nZWQoZXZlbnREYXRhKSB7XG4gICAgdGhpcy5wcm9wcy5vbkNoYW5nZSh0aGlzLnByb3BzLmluZGV4LCB7XG4gICAgICAuLi50aGlzLnByb3BzLmFjdGlvbixcbiAgICAgIGV2ZW50X2RhdGE6IGV2ZW50RGF0YSxcbiAgICB9KTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgaCwgQ29tcG9uZW50IH0gZnJvbSBcInByZWFjdFwiO1xuaW1wb3J0IFwiQG1hdGVyaWFsL213Yy1idXR0b25cIjtcbmltcG9ydCBcIi4uLy4uLy4uLy4uL2NvbXBvbmVudHMvaGEtY2FyZFwiO1xuXG5pbXBvcnQgQWN0aW9uUm93IGZyb20gXCIuL2FjdGlvbl9yb3dcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2NyaXB0IGV4dGVuZHMgQ29tcG9uZW50PGFueT4ge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuXG4gICAgdGhpcy5hZGRBY3Rpb24gPSB0aGlzLmFkZEFjdGlvbi5iaW5kKHRoaXMpO1xuICAgIHRoaXMuYWN0aW9uQ2hhbmdlZCA9IHRoaXMuYWN0aW9uQ2hhbmdlZC5iaW5kKHRoaXMpO1xuICB9XG5cbiAgcHVibGljIGFkZEFjdGlvbigpIHtcbiAgICBjb25zdCBzY3JpcHQgPSB0aGlzLnByb3BzLnNjcmlwdC5jb25jYXQoe1xuICAgICAgc2VydmljZTogXCJcIixcbiAgICB9KTtcblxuICAgIHRoaXMucHJvcHMub25DaGFuZ2Uoc2NyaXB0KTtcbiAgfVxuXG4gIHB1YmxpYyBhY3Rpb25DaGFuZ2VkKGluZGV4LCBuZXdWYWx1ZSkge1xuICAgIGNvbnN0IHNjcmlwdCA9IHRoaXMucHJvcHMuc2NyaXB0LmNvbmNhdCgpO1xuXG4gICAgaWYgKG5ld1ZhbHVlID09PSBudWxsKSB7XG4gICAgICBzY3JpcHQuc3BsaWNlKGluZGV4LCAxKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2NyaXB0W2luZGV4XSA9IG5ld1ZhbHVlO1xuICAgIH1cblxuICAgIHRoaXMucHJvcHMub25DaGFuZ2Uoc2NyaXB0KTtcbiAgfVxuXG4gIHB1YmxpYyByZW5kZXIoeyBzY3JpcHQsIGhhc3MsIGxvY2FsaXplIH0pIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzcz1cInNjcmlwdFwiPlxuICAgICAgICB7c2NyaXB0Lm1hcCgoYWN0LCBpZHgpID0+IChcbiAgICAgICAgICA8QWN0aW9uUm93XG4gICAgICAgICAgICBpbmRleD17aWR4fVxuICAgICAgICAgICAgYWN0aW9uPXthY3R9XG4gICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5hY3Rpb25DaGFuZ2VkfVxuICAgICAgICAgICAgaGFzcz17aGFzc31cbiAgICAgICAgICAgIGxvY2FsaXplPXtsb2NhbGl6ZX1cbiAgICAgICAgICAvPlxuICAgICAgICApKX1cbiAgICAgICAgPGhhLWNhcmQ+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtYWN0aW9ucyBhZGQtY2FyZFwiPlxuICAgICAgICAgICAgPG13Yy1idXR0b24gb25UYXA9e3RoaXMuYWRkQWN0aW9ufT5cbiAgICAgICAgICAgICAge2xvY2FsaXplKFwidWkucGFuZWwuY29uZmlnLmF1dG9tYXRpb24uZWRpdG9yLmFjdGlvbnMuYWRkXCIpfVxuICAgICAgICAgICAgPC9td2MtYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2hhLWNhcmQ+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG4iLCJpbXBvcnQgeyBoLCBDb21wb25lbnQgfSBmcm9tIFwicHJlYWN0XCI7XG5pbXBvcnQgXCIuLi8uLi8uLi8uLi9jb21wb25lbnRzL2VudGl0eS9oYS1lbnRpdHktcGlja2VyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNjZW5lQWN0aW9uIGV4dGVuZHMgQ29tcG9uZW50PGFueT4ge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuXG4gICAgdGhpcy5zY2VuZUNoYW5nZWQgPSB0aGlzLnNjZW5lQ2hhbmdlZC5iaW5kKHRoaXMpO1xuICB9XG5cbiAgcHVibGljIHNjZW5lQ2hhbmdlZChldjogYW55KSB7XG4gICAgdGhpcy5wcm9wcy5vbkNoYW5nZSh0aGlzLnByb3BzLmluZGV4LCB7XG4gICAgICAuLi50aGlzLnByb3BzLmFjdGlvbixcbiAgICAgIHNjZW5lOiBldi50YXJnZXQudmFsdWUsXG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgcmVuZGVyKHsgYWN0aW9uLCBoYXNzIH0pIHtcbiAgICBjb25zdCB7IHNjZW5lIH0gPSBhY3Rpb247XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGhhLWVudGl0eS1waWNrZXJcbiAgICAgICAgICB2YWx1ZT17c2NlbmV9XG4gICAgICAgICAgb25DaGFuZ2U9e3RoaXMuc2NlbmVDaGFuZ2VkfVxuICAgICAgICAgIGhhc3M9e2hhc3N9XG4gICAgICAgICAgZG9tYWluRmlsdGVyPVwic2NlbmVcIlxuICAgICAgICAgIGFsbG93Q3VzdG9tRW50aXR5XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbihTY2VuZUFjdGlvbiBhcyBhbnkpLmRlZmF1bHRDb25maWcgPSB7XG4gIGFsaWFzOiBcIlwiLFxuICBzY2VuZTogXCJcIixcbn07XG4iLCJpbXBvcnQgeyBoLCBDb21wb25lbnQgfSBmcm9tIFwicHJlYWN0XCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1pbnB1dC9wYXBlci1pbnB1dFwiO1xuXG5pbXBvcnQgXCIuLi8uLi8uLi8uLi9jb21wb25lbnRzL2hhLXRleHRhcmVhXCI7XG5cbmltcG9ydCB7IG9uQ2hhbmdlRXZlbnQgfSBmcm9tIFwiLi4vLi4vLi4vLi4vY29tbW9uL3ByZWFjdC9ldmVudFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBXYWl0QWN0aW9uIGV4dGVuZHMgQ29tcG9uZW50PGFueT4ge1xuICBwcml2YXRlIG9uQ2hhbmdlOiAob2JqOiBhbnkpID0+IHZvaWQ7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG5cbiAgICB0aGlzLm9uQ2hhbmdlID0gb25DaGFuZ2VFdmVudC5iaW5kKHRoaXMsIFwiYWN0aW9uXCIpO1xuICAgIHRoaXMub25UZW1wbGF0ZUNoYW5nZSA9IHRoaXMub25UZW1wbGF0ZUNoYW5nZS5iaW5kKHRoaXMpO1xuICB9XG5cbiAgLy8gR2V0cyBmaXJlZCBvbiBtb3VudC4gSWYgZW1wdHksIG9uQ2hhbmdlRXZlbnQgcmVtb3ZlcyBhdHRyaWJ1dGUuXG4gIC8vIFdpdGhvdXQgdGhlIGF0dHJpYnV0ZSB0aGlzIGFjdGlvbiBpcyBubyBsb25nZXIgbWF0Y2hlZCB0byB0aGlzIGNvbXBvbmVudC5cbiAgcHVibGljIG9uVGVtcGxhdGVDaGFuZ2UoZXYpIHtcbiAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKHRoaXMucHJvcHMuaW5kZXgsIHtcbiAgICAgIC4uLnRoaXMucHJvcHMuYWN0aW9uLFxuICAgICAgW2V2LnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJuYW1lXCIpXTogZXYudGFyZ2V0LnZhbHVlLFxuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIHJlbmRlcih7IGFjdGlvbiwgbG9jYWxpemUgfSkge1xuICAgIC8qIGVzbGludC1kaXNhYmxlIGNhbWVsY2FzZSAqL1xuICAgIGNvbnN0IHsgd2FpdF90ZW1wbGF0ZSwgdGltZW91dCB9ID0gYWN0aW9uO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8aGEtdGV4dGFyZWFcbiAgICAgICAgICBsYWJlbD17bG9jYWxpemUoXG4gICAgICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy5hdXRvbWF0aW9uLmVkaXRvci5hY3Rpb25zLnR5cGUud2FpdF90ZW1wbGF0ZS53YWl0X3RlbXBsYXRlXCJcbiAgICAgICAgICApfVxuICAgICAgICAgIG5hbWU9XCJ3YWl0X3RlbXBsYXRlXCJcbiAgICAgICAgICB2YWx1ZT17d2FpdF90ZW1wbGF0ZX1cbiAgICAgICAgICBvbnZhbHVlLWNoYW5nZWQ9e3RoaXMub25UZW1wbGF0ZUNoYW5nZX1cbiAgICAgICAgICBkaXI9XCJsdHJcIlxuICAgICAgICAvPlxuICAgICAgICA8cGFwZXItaW5wdXRcbiAgICAgICAgICBsYWJlbD17bG9jYWxpemUoXG4gICAgICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy5hdXRvbWF0aW9uLmVkaXRvci5hY3Rpb25zLnR5cGUud2FpdF90ZW1wbGF0ZS50aW1lb3V0XCJcbiAgICAgICAgICApfVxuICAgICAgICAgIG5hbWU9XCJ0aW1lb3V0XCJcbiAgICAgICAgICB2YWx1ZT17dGltZW91dH1cbiAgICAgICAgICBvbnZhbHVlLWNoYW5nZWQ9e3RoaXMub25DaGFuZ2V9XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbihXYWl0QWN0aW9uIGFzIGFueSkuZGVmYXVsdENvbmZpZyA9IHtcbiAgd2FpdF90ZW1wbGF0ZTogXCJcIixcbiAgdGltZW91dDogXCJcIixcbn07XG4iLCJpbXBvcnQgeyBoLCBDb21wb25lbnQgfSBmcm9tIFwicHJlYWN0XCI7XG5pbXBvcnQgeWFtbCBmcm9tIFwianMteWFtbFwiO1xuaW1wb3J0IFwiLi4vLi4vLi4vY29tcG9uZW50cy9oYS1jb2RlLWVkaXRvclwiO1xuXG5jb25zdCBpc0VtcHR5ID0gKG9iajogb2JqZWN0KSA9PiB7XG4gIGZvciAoY29uc3Qga2V5IGluIG9iaikge1xuICAgIGlmIChvYmouaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFlBTUxUZXh0QXJlYSBleHRlbmRzIENvbXBvbmVudDxhbnksIGFueT4ge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIGxldCB2YWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICAgIHRyeSB7XG4gICAgICB2YWx1ZSA9XG4gICAgICAgIHByb3BzLnZhbHVlICYmICFpc0VtcHR5KHByb3BzLnZhbHVlKVxuICAgICAgICAgID8geWFtbC5zYWZlRHVtcChwcm9wcy52YWx1ZSlcbiAgICAgICAgICA6IHVuZGVmaW5lZDtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGFsZXJ0KGBUaGVyZSB3YXMgYW4gZXJyb3IgY29udmVydGluZyB0byBZQU1MOiAke2Vycn1gKTtcbiAgICB9XG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgaXN2YWxpZDogdHJ1ZSxcbiAgICAgIHZhbHVlLFxuICAgIH07XG5cbiAgICB0aGlzLm9uQ2hhbmdlID0gdGhpcy5vbkNoYW5nZS5iaW5kKHRoaXMpO1xuICB9XG5cbiAgcHVibGljIG9uQ2hhbmdlKGV2KSB7XG4gICAgY29uc3QgdmFsdWUgPSBldi5kZXRhaWwudmFsdWU7XG4gICAgbGV0IHBhcnNlZDtcbiAgICBsZXQgaXNWYWxpZCA9IHRydWU7XG5cbiAgICBpZiAodmFsdWUpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHBhcnNlZCA9IHlhbWwuc2FmZUxvYWQodmFsdWUpO1xuICAgICAgICBpc1ZhbGlkID0gdHJ1ZTtcbiAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAvLyBJbnZhbGlkIFlBTUxcbiAgICAgICAgaXNWYWxpZCA9IGZhbHNlO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBwYXJzZWQgPSB7fTtcbiAgICB9XG5cbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHZhbHVlLFxuICAgICAgaXNWYWxpZCxcbiAgICB9KTtcbiAgICBpZiAoaXNWYWxpZCkge1xuICAgICAgdGhpcy5wcm9wcy5vbkNoYW5nZShwYXJzZWQpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyByZW5kZXIoeyBsYWJlbCB9LCB7IHZhbHVlLCBpc1ZhbGlkIH0pIHtcbiAgICBjb25zdCBzdHlsZTogYW55ID0ge1xuICAgICAgbWluV2lkdGg6IDMwMCxcbiAgICAgIHdpZHRoOiBcIjEwMCVcIixcbiAgICB9O1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8cD57bGFiZWx9PC9wPlxuICAgICAgICA8aGEtY29kZS1lZGl0b3JcbiAgICAgICAgICBtb2RlPVwieWFtbFwiXG4gICAgICAgICAgc3R5bGU9e3N0eWxlfVxuICAgICAgICAgIHZhbHVlPXt2YWx1ZX1cbiAgICAgICAgICBlcnJvcj17aXNWYWxpZCA9PT0gZmFsc2V9XG4gICAgICAgICAgb252YWx1ZS1jaGFuZ2VkPXt0aGlzLm9uQ2hhbmdlfVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuIiwiaW50ZXJmYWNlIExvYWRlZENvZGVNaXJyb3Ige1xuICBjb2RlTWlycm9yOiBhbnk7XG4gIGNvZGVNaXJyb3JDc3M6IGFueTtcbn1cblxubGV0IGxvYWRlZDogUHJvbWlzZTxMb2FkZWRDb2RlTWlycm9yPjtcblxuZXhwb3J0IGNvbnN0IGxvYWRDb2RlTWlycm9yID0gYXN5bmMgKCk6IFByb21pc2U8TG9hZGVkQ29kZU1pcnJvcj4gPT4ge1xuICBpZiAoIWxvYWRlZCkge1xuICAgIGxvYWRlZCA9IGltcG9ydCgvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcImNvZGVtaXJyb3JcIiAqLyBcIi4vY29kZW1pcnJvclwiKTtcbiAgfVxuICByZXR1cm4gbG9hZGVkO1xufTtcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUVBO0FBQUE7QUFBQTtBQUNBO0FBR0E7Ozs7Ozs7Ozs7Ozs7QUNOQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDeEJBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFHQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNSQTtBQUNBO0FBS0E7QUFDQTtBQUdBO0FBSUE7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBWEE7QUFDQTtBQVlBO0FBQ0E7QUFmQTtBQURBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNWQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBU0E7QUFDQTtBQUlBO0FBRUE7QUFDQTtBQUVBO0FBeUJBO0FBU0E7QUEzQkE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBc0JBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBS0E7QUFDQTtBQUVBO0FBSUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBOztBQUVBOzs7QUFHQTtBQUNBOzs7QUFHQTs7O0FBR0E7QUFDQTs7O0FBR0E7O0FBRUE7O0FBR0E7QUFDQTs7QUFFQTs7QUFFQTs7O0FBSUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTs7Ozs7Ozs7OztBQVVBO0FBQ0E7QUFDQTtBQXhLQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFHQTtBQUFBO0FBQUE7QUFJQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcENBO0FBQ0E7QUFLQTtBQUNBO0FBR0E7QUFNQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVpBO0FBQ0E7QUFhQTtBQUNBO0FBbEJBO0FBREE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFVQTtBQUdBO0FBQ0E7QUFJQTtBQUdBO0FBQUE7O0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQStEQTtBQTdEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7O0FBRUE7Ozs7O0FBS0E7QUFFQTtBQUNBOztBQUVBOzs7QUFJQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOzs7Ozs7Ozs7O0FBVUE7QUFDQTtBQUNBO0FBM0VBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUpBO0FBREE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBWUE7QUFJQTtBQUtBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FBY0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTs7QUFhQTtBQU1BO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBR0E7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBd0dBO0FBckdBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFNQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FBT0E7QUFDQTs7Ozs7Ozs7OztBQVVBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQUtBOzs7O0FBSUE7QUFDQTs7O0FBR0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTs7Ozs7Ozs7OztBQVVBO0FBQ0E7QUFDQTtBQWpKQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQURBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUF5SUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMU1BO0FBQ0E7QUFDQTtBQWVBO0FBQUE7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFrSUE7QUFoSUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFFQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUE2QkE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUF0SUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBTkE7QUFEQTtBQUNBO0FBQUE7Ozs7Ozs7Ozs7Ozs7QUNqQkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwSEE7QUFNQTtBQUVBO0FBR0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBM0JBO0FBREE7QUFDQTtBQUFBOzs7Ozs7Ozs7Ozs7O0FDZkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDeFFBO0FBQUE7QUFBQTtBQUFBO0FBSUE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFRQTs7Ozs7Ozs7Ozs7OztBQzNCQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ3RFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUM1REE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUM1Q0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDcEZBO0FBQUE7QUFBQTtBQUNBO0FBR0E7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDbEVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFJQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFLQTtBQUdBO0FBRUE7QUFFQTtBQU1BO0FBY0E7QUFTQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDaEdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQU9BO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFNQTtBQUlBO0FBQ0E7QUFLQTtBQVFBO0FBSUE7QUFDQTs7Ozs7Ozs7Ozs7OztBQy9EQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFJQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQU1BO0FBT0E7QUFVQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUlBO0FBRUE7QUFDQTtBQUNBO0FBTUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUMvSEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQVNBO0FBQ0E7QUFDQTtBQU9BO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUN4REE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBRkE7QUFHQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBUUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQzdDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBSUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBTUE7QUFRQTtBQVFBO0FBV0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ2xFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFJQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQU1BO0FBUUE7O0FBQUE7QUFHQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNuREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFLQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFLQTtBQU1BO0FBS0E7QUFPQTtBQVVBO0FBS0E7QUFNQTtBQUtBO0FBT0E7QUFXQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7QUMzR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBV0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ2xDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFRQTtBQVVBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7OztBQ3ZDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFJQTtBQUVBO0FBQ0E7QUFJQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFVQTtBQVlBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ2hFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBS0E7QUFHQTtBQUNBO0FBRUE7QUFNQTtBQWNBO0FBU0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ3ZHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFPQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBTUE7QUFJQTtBQUNBO0FBS0E7QUFRQTtBQUlBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUMvREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFJQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBS0E7QUFTQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ2xEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFTQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7QUNwQkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQVVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUMvQkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUlBO0FBaUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFNQTtBQVNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBM0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUN0QkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFXQTtBQVVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFaQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFTQTtBQUNBO0FBSUE7QUFFQTtBQVFBO0FBU0E7QUFFQTtBQUNBO0FBSUE7QUFDQTs7Ozs7Ozs7Ozs7OztBQ2hFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBU0E7QUFDQTtBQUNBO0FBT0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ3hEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUlBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFTQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNyQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQVNBO0FBVUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDdkRBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQVNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUMxRUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBIiwic291cmNlUm9vdCI6IiJ9