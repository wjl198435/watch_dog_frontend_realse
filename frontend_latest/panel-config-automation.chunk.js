(self["webpackJsonp"] = self["webpackJsonp"] || []).push([["panel-config-automation"],{

/***/ "./node_modules/@material/mwc-base/form-element.js":
/*!*********************************************************!*\
  !*** ./node_modules/@material/mwc-base/form-element.js ***!
  \*********************************************************/
/*! exports provided: defaultConverter, notEqual, UpdatingElement, customElement, property, query, queryAll, eventOptions, html, svg, TemplateResult, SVGTemplateResult, supportsAdoptingStyleSheets, CSSResult, unsafeCSS, css, LitElement, classMap, observer, addHasRemoveClass, BaseElement, FormElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormElement", function() { return FormElement; });
/* harmony import */ var _base_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base-element */ "./node_modules/@material/mwc-base/base-element.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defaultConverter", function() { return _base_element__WEBPACK_IMPORTED_MODULE_0__["defaultConverter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "notEqual", function() { return _base_element__WEBPACK_IMPORTED_MODULE_0__["notEqual"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UpdatingElement", function() { return _base_element__WEBPACK_IMPORTED_MODULE_0__["UpdatingElement"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "customElement", function() { return _base_element__WEBPACK_IMPORTED_MODULE_0__["customElement"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "property", function() { return _base_element__WEBPACK_IMPORTED_MODULE_0__["property"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "query", function() { return _base_element__WEBPACK_IMPORTED_MODULE_0__["query"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "queryAll", function() { return _base_element__WEBPACK_IMPORTED_MODULE_0__["queryAll"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "eventOptions", function() { return _base_element__WEBPACK_IMPORTED_MODULE_0__["eventOptions"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "html", function() { return _base_element__WEBPACK_IMPORTED_MODULE_0__["html"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "svg", function() { return _base_element__WEBPACK_IMPORTED_MODULE_0__["svg"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TemplateResult", function() { return _base_element__WEBPACK_IMPORTED_MODULE_0__["TemplateResult"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SVGTemplateResult", function() { return _base_element__WEBPACK_IMPORTED_MODULE_0__["SVGTemplateResult"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "supportsAdoptingStyleSheets", function() { return _base_element__WEBPACK_IMPORTED_MODULE_0__["supportsAdoptingStyleSheets"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CSSResult", function() { return _base_element__WEBPACK_IMPORTED_MODULE_0__["CSSResult"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "unsafeCSS", function() { return _base_element__WEBPACK_IMPORTED_MODULE_0__["unsafeCSS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "css", function() { return _base_element__WEBPACK_IMPORTED_MODULE_0__["css"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LitElement", function() { return _base_element__WEBPACK_IMPORTED_MODULE_0__["LitElement"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "classMap", function() { return _base_element__WEBPACK_IMPORTED_MODULE_0__["classMap"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "observer", function() { return _base_element__WEBPACK_IMPORTED_MODULE_0__["observer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addHasRemoveClass", function() { return _base_element__WEBPACK_IMPORTED_MODULE_0__["addHasRemoveClass"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BaseElement", function() { return _base_element__WEBPACK_IMPORTED_MODULE_0__["BaseElement"]; });

/**
@license
Copyright 2018 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/


class FormElement extends _base_element__WEBPACK_IMPORTED_MODULE_0__["BaseElement"] {
    createRenderRoot() {
        return this.attachShadow({ mode: 'open', delegatesFocus: true });
    }
    click() {
        if (this.formElement) {
            this.formElement.focus();
            this.formElement.click();
        }
    }
    setAriaLabel(label) {
        if (this.formElement) {
            this.formElement.setAttribute('aria-label', label);
        }
    }
    firstUpdated() {
        super.firstUpdated();
        this.mdcRoot.addEventListener('change', (e) => {
            this.dispatchEvent(new Event('change', e));
        });
    }
}
//# sourceMappingURL=form-element.js.map

/***/ }),

/***/ "./node_modules/lit-html/directives/if-defined.js":
/*!********************************************************!*\
  !*** ./node_modules/lit-html/directives/if-defined.js ***!
  \********************************************************/
/*! exports provided: ifDefined */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ifDefined", function() { return ifDefined; });
/* harmony import */ var _lit_html_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lit-html.js */ "./node_modules/lit-html/lit-html.js");
/**
 * @license
 * Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */

/**
 * For AttributeParts, sets the attribute if the value is defined and removes
 * the attribute if the value is undefined.
 *
 * For other part types, this directive is a no-op.
 */
const ifDefined = Object(_lit_html_js__WEBPACK_IMPORTED_MODULE_0__["directive"])((value) => (part) => {
    if (value === undefined && part instanceof _lit_html_js__WEBPACK_IMPORTED_MODULE_0__["AttributePart"]) {
        if (value !== part.value) {
            const name = part.committer.name;
            part.committer.element.removeAttribute(name);
        }
    }
    else {
        part.setValue(value);
    }
});
//# sourceMappingURL=if-defined.js.map

/***/ }),

/***/ "./src/common/datetime/format_date_time.ts":
/*!*************************************************!*\
  !*** ./src/common/datetime/format_date_time.ts ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var fecha__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fecha */ "./node_modules/fecha/src/fecha.js");

// Check for support of native locale string options
function toLocaleStringSupportsOptions() {
    try {
        new Date().toLocaleString("i");
    }
    catch (e) {
        return e.name === "RangeError";
    }
    return false;
}
/* harmony default export */ __webpack_exports__["default"] = (toLocaleStringSupportsOptions()
    ? (dateObj, locales) => dateObj.toLocaleString(locales, {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "2-digit",
    })
    : (dateObj) => fecha__WEBPACK_IMPORTED_MODULE_0__["default"].format(dateObj, "haDateTime"));


/***/ }),

/***/ "./src/components/device/ha-device-trigger-picker.ts":
/*!***********************************************************!*\
  !*** ./src/components/device/ha-device-trigger-picker.ts ***!
  \***********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _data_device_automation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../data/device_automation */ "./src/data/device_automation.ts");
/* harmony import */ var _components_ha_paper_dropdown_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/ha-paper-dropdown-menu */ "./src/components/ha-paper-dropdown-menu.ts");
/* harmony import */ var _ha_device_automation_picker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ha-device-automation-picker */ "./src/components/device/ha-device-automation-picker.ts");





let HaDeviceTriggerPicker = class HaDeviceTriggerPicker extends _ha_device_automation_picker__WEBPACK_IMPORTED_MODULE_4__["HaDeviceAutomationPicker"] {
    constructor() {
        super(_data_device_automation__WEBPACK_IMPORTED_MODULE_2__["localizeDeviceAutomationTrigger"], _data_device_automation__WEBPACK_IMPORTED_MODULE_2__["fetchDeviceTriggers"], (deviceId) => ({
            device_id: deviceId || "",
            platform: "device",
            domain: "",
            entity_id: "",
        }));
        this.NO_AUTOMATION_TEXT = "No triggers";
        this.UNKNOWN_AUTOMATION_TEXT = "Unknown trigger";
    }
};
HaDeviceTriggerPicker = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["customElement"])("ha-device-trigger-picker")
], HaDeviceTriggerPicker);


/***/ }),

/***/ "./src/components/entity/ha-entity-toggle.ts":
/*!***************************************************!*\
  !*** ./src/components/entity/ha-entity-toggle.ts ***!
  \***************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _polymer_paper_icon_button_paper_icon_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-icon-button/paper-icon-button */ "./node_modules/@polymer/paper-icon-button/paper-icon-button.js");
/* harmony import */ var _common_const__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/const */ "./src/common/const.ts");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _data_haptics__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../data/haptics */ "./src/data/haptics.ts");
/* harmony import */ var _common_entity_compute_state_domain__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../common/entity/compute_state_domain */ "./src/common/entity/compute_state_domain.ts");
/* harmony import */ var _common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../common/entity/compute_state_name */ "./src/common/entity/compute_state_name.ts");
/* harmony import */ var _ha_switch__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../ha-switch */ "./src/components/ha-switch.ts");








const isOn = (stateObj) => stateObj !== undefined && !_common_const__WEBPACK_IMPORTED_MODULE_2__["STATES_OFF"].includes(stateObj.state);
class HaEntityToggle extends lit_element__WEBPACK_IMPORTED_MODULE_3__["LitElement"] {
    constructor() {
        super(...arguments);
        this._isOn = false;
    }
    render() {
        if (!this.stateObj) {
            return lit_element__WEBPACK_IMPORTED_MODULE_3__["html"] `
        <ha-switch disabled></ha-switch>
      `;
        }
        if (this.stateObj.attributes.assumed_state) {
            return lit_element__WEBPACK_IMPORTED_MODULE_3__["html"] `
        <paper-icon-button
          aria-label=${`Turn ${Object(_common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_6__["computeStateName"])(this.stateObj)} off`}
          icon="hass:flash-off"
          @click=${this._turnOff}
          ?state-active=${!this._isOn}
        ></paper-icon-button>
        <paper-icon-button
          aria-label=${`Turn ${Object(_common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_6__["computeStateName"])(this.stateObj)} on`}
          icon="hass:flash"
          @click=${this._turnOn}
          ?state-active=${this._isOn}
        ></paper-icon-button>
      `;
        }
        return lit_element__WEBPACK_IMPORTED_MODULE_3__["html"] `
      <ha-switch
        aria-label=${`Toggle ${Object(_common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_6__["computeStateName"])(this.stateObj)} ${this._isOn ? "off" : "on"}`}
        .checked=${this._isOn}
        @change=${this._toggleChanged}
      ></ha-switch>
    `;
    }
    firstUpdated(changedProps) {
        super.firstUpdated(changedProps);
        this.addEventListener("click", (ev) => ev.stopPropagation());
    }
    updated(changedProps) {
        if (changedProps.has("stateObj")) {
            this._isOn = isOn(this.stateObj);
        }
    }
    _toggleChanged(ev) {
        const newVal = ev.target.checked;
        if (newVal !== this._isOn) {
            this._callService(newVal);
        }
    }
    _turnOn() {
        this._callService(true);
    }
    _turnOff() {
        this._callService(false);
    }
    // We will force a re-render after a successful call to re-sync the toggle
    // with the state. It will be out of sync if our service call did not
    // result in the entity to be turned on. Since the state is not changing,
    // the resync is not called automatic.
    async _callService(turnOn) {
        if (!this.hass || !this.stateObj) {
            return;
        }
        Object(_data_haptics__WEBPACK_IMPORTED_MODULE_4__["forwardHaptic"])("light");
        const stateDomain = Object(_common_entity_compute_state_domain__WEBPACK_IMPORTED_MODULE_5__["computeStateDomain"])(this.stateObj);
        let serviceDomain;
        let service;
        if (stateDomain === "lock") {
            serviceDomain = "lock";
            service = turnOn ? "unlock" : "lock";
        }
        else if (stateDomain === "cover") {
            serviceDomain = "cover";
            service = turnOn ? "open_cover" : "close_cover";
        }
        else if (stateDomain === "group") {
            serviceDomain = "homeassistant";
            service = turnOn ? "turn_on" : "turn_off";
        }
        else {
            serviceDomain = stateDomain;
            service = turnOn ? "turn_on" : "turn_off";
        }
        const currentState = this.stateObj;
        // Optimistic update.
        this._isOn = turnOn;
        await this.hass.callService(serviceDomain, service, {
            entity_id: this.stateObj.entity_id,
        });
        setTimeout(async () => {
            // If after 2 seconds we have not received a state update
            // reset the switch to it's original state.
            if (this.stateObj === currentState) {
                this._isOn = isOn(this.stateObj);
            }
        }, 2000);
    }
    static get styles() {
        return lit_element__WEBPACK_IMPORTED_MODULE_3__["css"] `
      :host {
        white-space: nowrap;
        min-width: 38px;
      }
      paper-icon-button {
        color: var(
          --paper-icon-button-inactive-color,
          var(--primary-text-color)
        );
        transition: color 0.5s;
      }
      paper-icon-button[state-active] {
        color: var(--paper-icon-button-active-color, var(--primary-color));
      }
      ha-switch {
        padding: 13px 5px;
      }
    `;
    }
}
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_3__["property"])()
], HaEntityToggle.prototype, "stateObj", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_3__["property"])()
], HaEntityToggle.prototype, "_isOn", void 0);
customElements.define("ha-entity-toggle", HaEntityToggle);


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
const MwcSwitch = customElements.get("mwc-switch");
let HaSwitch = class HaSwitch extends MwcSwitch {
    firstUpdated() {
        super.firstUpdated();
        this.style.setProperty("--mdc-theme-secondary", "var(--primary-color)");
        this.classList.toggle("slotted", Boolean(this._slot.assignedNodes().length));
    }
    static get styles() {
        return [
            _material_mwc_switch_mwc_switch_css__WEBPACK_IMPORTED_MODULE_3__["style"],
            lit_element__WEBPACK_IMPORTED_MODULE_1__["css"] `
        :host {
          display: flex;
          flex-direction: row;
          align-items: center;
        }
        .mdc-switch:not(.mdc-switch--checked) .mdc-switch__thumb {
          background-color: var(--paper-toggle-button-unchecked-button-color);
          border-color: var(--paper-toggle-button-unchecked-button-color);
        }
        .mdc-switch:not(.mdc-switch--checked) .mdc-switch__track {
          background-color: var(--paper-toggle-button-unchecked-bar-color);
          border-color: var(--paper-toggle-button-unchecked-bar-color);
        }
        :host(.slotted) .mdc-switch {
          margin-right: 24px;
        }
      `,
        ];
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["query"])("slot")
], HaSwitch.prototype, "_slot", void 0);
HaSwitch = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["customElement"])("ha-switch")
], HaSwitch);



/***/ }),

/***/ "./src/data/automation.ts":
/*!********************************!*\
  !*** ./src/data/automation.ts ***!
  \********************************/
/*! exports provided: deleteAutomation, showAutomationEditor, getAutomationEditorInitData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteAutomation", function() { return deleteAutomation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showAutomationEditor", function() { return showAutomationEditor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAutomationEditorInitData", function() { return getAutomationEditorInitData; });
/* harmony import */ var _common_navigate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/navigate */ "./src/common/navigate.ts");

const deleteAutomation = (hass, id) => hass.callApi("DELETE", `config/automation/config/${id}`);
let inititialAutomationEditorData;
const showAutomationEditor = (el, data) => {
    inititialAutomationEditorData = data;
    Object(_common_navigate__WEBPACK_IMPORTED_MODULE_0__["navigate"])(el, "/config/automation/new");
};
const getAutomationEditorInitData = () => {
    const data = inititialAutomationEditorData;
    inititialAutomationEditorData = undefined;
    return data;
};


/***/ }),

/***/ "./src/panels/config/automation/ha-automation-editor.ts":
/*!**************************************************************!*\
  !*** ./src/panels/config/automation/ha-automation-editor.ts ***!
  \**************************************************************/
/*! exports provided: HaAutomationEditor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HaAutomationEditor", function() { return HaAutomationEditor; });
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _polymer_app_layout_app_header_app_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/app-layout/app-header/app-header */ "./node_modules/@polymer/app-layout/app-header/app-header.js");
/* harmony import */ var _polymer_app_layout_app_toolbar_app_toolbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/app-layout/app-toolbar/app-toolbar */ "./node_modules/@polymer/app-layout/app-toolbar/app-toolbar.js");
/* harmony import */ var _polymer_paper_icon_button_paper_icon_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/paper-icon-button/paper-icon-button */ "./node_modules/@polymer/paper-icon-button/paper-icon-button.js");
/* harmony import */ var lit_html_directives_class_map__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lit-html/directives/class-map */ "./node_modules/lit-html/directives/class-map.js");
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.mjs");
/* harmony import */ var _components_ha_fab__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/ha-fab */ "./src/components/ha-fab.ts");
/* harmony import */ var _components_ha_paper_icon_button_arrow_prev__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/ha-paper-icon-button-arrow-prev */ "./src/components/ha-paper-icon-button-arrow-prev.ts");
/* harmony import */ var _layouts_ha_app_layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../layouts/ha-app-layout */ "./src/layouts/ha-app-layout.js");
/* harmony import */ var _js_automation__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../js/automation */ "./src/panels/config/js/automation.tsx");
/* harmony import */ var _common_preact_unmount__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../common/preact/unmount */ "./src/common/preact/unmount.ts");
/* harmony import */ var _common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../common/entity/compute_state_name */ "./src/common/entity/compute_state_name.ts");
/* harmony import */ var _resources_styles__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../resources/styles */ "./src/resources/styles.ts");
/* harmony import */ var _data_automation__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../data/automation */ "./src/data/automation.ts");
/* harmony import */ var _common_navigate__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../common/navigate */ "./src/common/navigate.ts");
/* harmony import */ var _common_util_compute_rtl__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../common/util/compute_rtl */ "./src/common/util/compute_rtl.ts");
















function AutomationEditor(mountEl, props, mergeEl) {
    return Object(preact__WEBPACK_IMPORTED_MODULE_5__["render"])(Object(preact__WEBPACK_IMPORTED_MODULE_5__["h"])(_js_automation__WEBPACK_IMPORTED_MODULE_9__["default"], props), mountEl, mergeEl);
}
class HaAutomationEditor extends lit_element__WEBPACK_IMPORTED_MODULE_0__["LitElement"] {
    constructor() {
        super();
        this._configChanged = this._configChanged.bind(this);
    }
    static get properties() {
        return {
            hass: {},
            automation: {},
            creatingNew: {},
            isWide: {},
            _errors: {},
            _dirty: {},
            _config: {},
        };
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        if (this._rendered) {
            Object(_common_preact_unmount__WEBPACK_IMPORTED_MODULE_10__["default"])(this._rendered);
            this._rendered = undefined;
        }
    }
    render() {
        if (!this.hass) {
            return;
        }
        return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"] `
      <ha-app-layout has-scrolling-region>
        <app-header slot="header" fixed>
          <app-toolbar>
            <ha-paper-icon-button-arrow-prev
              @click=${this._backTapped}
            ></ha-paper-icon-button-arrow-prev>
            <div main-title>
              ${this.automation
            ? Object(_common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_11__["computeStateName"])(this.automation)
            : this.hass.localize("ui.panel.config.automation.editor.default_name")}
            </div>
            ${this.creatingNew
            ? ""
            : lit_element__WEBPACK_IMPORTED_MODULE_0__["html"] `
                  <paper-icon-button
                    icon="hass:delete"
                    @click=${this._delete}
                  ></paper-icon-button>
                `}
          </app-toolbar>
        </app-header>

        <div class="content">
          ${this._errors
            ? lit_element__WEBPACK_IMPORTED_MODULE_0__["html"] `
                <div class="errors">${this._errors}</div>
              `
            : ""}
          <div
            id="root"
            class="${Object(lit_html_directives_class_map__WEBPACK_IMPORTED_MODULE_4__["classMap"])({
            rtl: Object(_common_util_compute_rtl__WEBPACK_IMPORTED_MODULE_15__["computeRTL"])(this.hass),
        })}"
          ></div>
        </div>
        <ha-fab
          slot="fab"
          ?is-wide="${this.isWide}"
          ?dirty="${this._dirty}"
          icon="hass:content-save"
          .title="${this.hass.localize("ui.panel.config.automation.editor.save")}"
          @click=${this._saveAutomation}
          class="${Object(lit_html_directives_class_map__WEBPACK_IMPORTED_MODULE_4__["classMap"])({
            rtl: Object(_common_util_compute_rtl__WEBPACK_IMPORTED_MODULE_15__["computeRTL"])(this.hass),
        })}"
        ></ha-fab>
      </ha-app-layout>
    `;
    }
    updated(changedProps) {
        super.updated(changedProps);
        const oldAutomation = changedProps.get("automation");
        if (changedProps.has("automation") &&
            this.automation &&
            this.hass &&
            // Only refresh config if we picked a new automation. If same ID, don't fetch it.
            (!oldAutomation ||
                oldAutomation.attributes.id !== this.automation.attributes.id)) {
            this.hass
                .callApi("GET", `config/automation/config/${this.automation.attributes.id}`)
                .then((config) => {
                // Normalize data: ensure trigger, action and condition are lists
                // Happens when people copy paste their automations into the config
                for (const key of ["trigger", "condition", "action"]) {
                    const value = config[key];
                    if (value && !Array.isArray(value)) {
                        config[key] = [value];
                    }
                }
                this._dirty = false;
                this._config = config;
            }, (resp) => {
                alert(resp.status_code === 404
                    ? this.hass.localize("ui.panel.config.automation.editor.load_error_not_editable")
                    : this.hass.localize("ui.panel.config.automation.editor.load_error_unknown", "err_no", resp.status_code));
                history.back();
            });
        }
        if (changedProps.has("creatingNew") && this.creatingNew && this.hass) {
            this._dirty = false;
            this._config = Object.assign({ alias: this.hass.localize("ui.panel.config.automation.editor.default_name"), description: "", trigger: [{ platform: "state" }], condition: [], action: [{ service: "" }] }, Object(_data_automation__WEBPACK_IMPORTED_MODULE_13__["getAutomationEditorInitData"])());
        }
        if (changedProps.has("_config") && this.hass) {
            this._rendered = AutomationEditor(this.shadowRoot.querySelector("#root"), {
                automation: this._config,
                onChange: this._configChanged,
                isWide: this.isWide,
                hass: this.hass,
                localize: this.hass.localize,
            }, this._rendered);
        }
    }
    _configChanged(config) {
        // onChange gets called a lot during initial rendering causing recursing calls.
        if (!this._rendered) {
            return;
        }
        this._config = config;
        this._errors = undefined;
        this._dirty = true;
    }
    _backTapped() {
        if (this._dirty &&
            !confirm(this.hass.localize("ui.panel.config.automation.editor.unsaved_confirm"))) {
            return;
        }
        history.back();
    }
    async _delete() {
        if (!confirm("Are you sure you want to delete this automation?")) {
            return;
        }
        await Object(_data_automation__WEBPACK_IMPORTED_MODULE_13__["deleteAutomation"])(this.hass, this.automation.attributes.id);
        history.back();
    }
    _saveAutomation() {
        const id = this.creatingNew
            ? "" + Date.now()
            : this.automation.attributes.id;
        this.hass.callApi("POST", "config/automation/config/" + id, this._config).then(() => {
            this._dirty = false;
            if (this.creatingNew) {
                Object(_common_navigate__WEBPACK_IMPORTED_MODULE_14__["navigate"])(this, `/config/automation/edit/${id}`, true);
            }
        }, (errors) => {
            this._errors = errors.body.message;
            throw errors;
        });
    }
    static get styles() {
        return [
            _resources_styles__WEBPACK_IMPORTED_MODULE_12__["haStyle"],
            lit_element__WEBPACK_IMPORTED_MODULE_0__["css"] `
        ha-card {
          overflow: hidden;
        }
        .errors {
          padding: 20px;
          font-weight: bold;
          color: var(--google-red-500);
        }
        .content {
          padding-bottom: 20px;
        }
        .triggers,
        .script {
          margin-top: -16px;
        }
        .triggers ha-card,
        .script ha-card {
          margin-top: 16px;
        }
        .add-card mwc-button {
          display: block;
          text-align: center;
        }
        .card-menu {
          position: absolute;
          top: 0;
          right: 0;
          z-index: 1;
          color: var(--primary-text-color);
        }
        .rtl .card-menu {
          right: auto;
          left: 0;
        }
        .card-menu paper-item {
          cursor: pointer;
        }
        span[slot="introduction"] a {
          color: var(--primary-color);
        }
        ha-fab {
          position: fixed;
          bottom: 16px;
          right: 16px;
          z-index: 1;
          margin-bottom: -80px;
          transition: margin-bottom 0.3s;
        }

        ha-fab[is-wide] {
          bottom: 24px;
          right: 24px;
        }

        ha-fab[dirty] {
          margin-bottom: 0;
        }

        ha-fab.rtl {
          right: auto;
          left: 16px;
        }

        ha-fab[is-wide].rtl {
          bottom: 24px;
          right: auto;
          left: 24px;
        }
      `,
        ];
    }
}
customElements.define("ha-automation-editor", HaAutomationEditor);


/***/ }),

/***/ "./src/panels/config/automation/ha-automation-picker.ts":
/*!**************************************************************!*\
  !*** ./src/panels/config/automation/ha-automation-picker.ts ***!
  \**************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var lit_html_directives_if_defined__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lit-html/directives/if-defined */ "./node_modules/lit-html/directives/if-defined.js");
/* harmony import */ var _polymer_paper_icon_button_paper_icon_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/paper-icon-button/paper-icon-button */ "./node_modules/@polymer/paper-icon-button/paper-icon-button.js");
/* harmony import */ var _polymer_paper_item_paper_item_body__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/paper-item/paper-item-body */ "./node_modules/@polymer/paper-item/paper-item-body.js");
/* harmony import */ var _polymer_paper_tooltip_paper_tooltip__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @polymer/paper-tooltip/paper-tooltip */ "./node_modules/@polymer/paper-tooltip/paper-tooltip.js");
/* harmony import */ var _layouts_hass_subpage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../layouts/hass-subpage */ "./src/layouts/hass-subpage.ts");
/* harmony import */ var _components_ha_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/ha-card */ "./src/components/ha-card.ts");
/* harmony import */ var _components_ha_fab__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../components/ha-fab */ "./src/components/ha-fab.ts");
/* harmony import */ var _components_entity_ha_entity_toggle__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../components/entity/ha-entity-toggle */ "./src/components/entity/ha-entity-toggle.ts");
/* harmony import */ var _ha_config_section__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../ha-config-section */ "./src/panels/config/ha-config-section.js");
/* harmony import */ var _common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../common/entity/compute_state_name */ "./src/common/entity/compute_state_name.ts");
/* harmony import */ var _common_util_compute_rtl__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../common/util/compute_rtl */ "./src/common/util/compute_rtl.ts");
/* harmony import */ var _resources_styles__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../resources/styles */ "./src/resources/styles.ts");
/* harmony import */ var _common_datetime_format_date_time__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../common/datetime/format_date_time */ "./src/common/datetime/format_date_time.ts");
/* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../common/dom/fire_event */ "./src/common/dom/fire_event.ts");
















let HaAutomationPicker = class HaAutomationPicker extends lit_element__WEBPACK_IMPORTED_MODULE_1__["LitElement"] {
    render() {
        return lit_element__WEBPACK_IMPORTED_MODULE_1__["html"] `
      <hass-subpage
        .header=${this.hass.localize("ui.panel.config.automation.caption")}
      >
        <ha-config-section .isWide=${this.isWide}>
          <div slot="header">
            ${this.hass.localize("ui.panel.config.automation.picker.header")}
          </div>
          <div slot="introduction">
            ${this.hass.localize("ui.panel.config.automation.picker.introduction")}
            <p>
              <a
                href="https://home-assistant.io/docs/automation/editor/"
                target="_blank"
              >
                ${this.hass.localize("ui.panel.config.automation.picker.learn_more")}
              </a>
            </p>
          </div>

          <ha-card
            .heading=${this.hass.localize("ui.panel.config.automation.picker.pick_automation")}
          >
            ${this.automations.length === 0
            ? lit_element__WEBPACK_IMPORTED_MODULE_1__["html"] `
                  <div class="card-content">
                    <p>
                      ${this.hass.localize("ui.panel.config.automation.picker.no_automations")}
                    </p>
                  </div>
                `
            : this.automations.map((automation) => lit_element__WEBPACK_IMPORTED_MODULE_1__["html"] `

                      <div class='automation'>
                        <ha-entity-toggle
                          .hass=${this.hass}
                          .stateObj=${automation}
                        ></ha-entity-toggle>

                        <paper-item-body two-line>
                          <div>${Object(_common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_11__["computeStateName"])(automation)}</div>
                          <div secondary>
                            Last triggered: ${automation.attributes.last_triggered
                ? Object(_common_datetime_format_date_time__WEBPACK_IMPORTED_MODULE_14__["default"])(new Date(automation.attributes.last_triggered), this.hass.language)
                : "never"}
                          </div>
                        </paper-item-body>
                        <div class='actions'>
                          <paper-icon-button
                            .automation=${automation}
                            @click=${this._showInfo}
                            icon="hass:information-outline"
                          ></paper-icon-button>
                          <a
                            href=${Object(lit_html_directives_if_defined__WEBPACK_IMPORTED_MODULE_2__["ifDefined"])(automation.attributes.id
                ? `/config/automation/edit/${automation.attributes.id}`
                : undefined)}
                          >
                            <paper-icon-button
                              icon="hass:pencil"
                              .disabled=${!automation.attributes.id}
                            ></paper-icon-button>
                            ${!automation.attributes.id
                ? lit_element__WEBPACK_IMPORTED_MODULE_1__["html"] `
                                    <paper-tooltip position="left">
                                      Only automations defined in
                                      automations.yaml are editable.
                                    </paper-tooltip>
                                  `
                : ""}
                          </a>
                        </div>
                      </div>
                    </a>
                  `)}
          </ha-card>
        </ha-config-section>

        <a href="/config/automation/new">
          <ha-fab
            slot="fab"
            ?is-wide=${this.isWide}
            icon="hass:plus"
            title=${this.hass.localize("ui.panel.config.automation.picker.add_automation")}
            ?rtl=${Object(_common_util_compute_rtl__WEBPACK_IMPORTED_MODULE_12__["computeRTL"])(this.hass)}
          ></ha-fab
        ></a>
      </hass-subpage>
    `;
    }
    _showInfo(ev) {
        const entityId = ev.currentTarget.automation.entity_id;
        Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_15__["fireEvent"])(this, "hass-more-info", { entityId });
    }
    static get styles() {
        return [
            _resources_styles__WEBPACK_IMPORTED_MODULE_13__["haStyle"],
            lit_element__WEBPACK_IMPORTED_MODULE_1__["css"] `
        :host {
          display: block;
        }

        ha-card {
          margin-bottom: 56px;
        }

        .automation {
          display: flex;
          flex-direction: horizontal;
          align-items: center;
          padding: 0 8px 0 16px;
        }

        .automation a[href] {
          color: var(--primary-text-color);
        }

        ha-entity-toggle {
          margin-right: 16px;
        }

        .actions {
          display: flex;
        }

        ha-fab {
          position: fixed;
          bottom: 16px;
          right: 16px;
          z-index: 1;
        }

        ha-fab[is-wide] {
          bottom: 24px;
          right: 24px;
        }

        ha-fab[rtl] {
          right: auto;
          left: 16px;
        }

        ha-fab[rtl][is-wide] {
          bottom: 24px;
          right: auto;
          left: 24px;
        }

        a {
          color: var(--primary-color);
        }
      `,
        ];
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
], HaAutomationPicker.prototype, "hass", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
], HaAutomationPicker.prototype, "isWide", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
], HaAutomationPicker.prototype, "automations", void 0);
HaAutomationPicker = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["customElement"])("ha-automation-picker")
], HaAutomationPicker);


/***/ }),

/***/ "./src/panels/config/automation/ha-config-automation.js":
/*!**************************************************************!*\
  !*** ./src/panels/config/automation/ha-config-automation.js ***!
  \**************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_app_route_app_route__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/app-route/app-route */ "./node_modules/@polymer/app-route/app-route.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _ha_automation_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ha-automation-editor */ "./src/panels/config/automation/ha-automation-editor.ts");
/* harmony import */ var _ha_automation_picker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ha-automation-picker */ "./src/panels/config/automation/ha-automation-picker.ts");
/* harmony import */ var _common_entity_compute_state_domain__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../common/entity/compute_state_domain */ "./src/common/entity/compute_state_domain.ts");









class HaConfigAutomation extends _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__["PolymerElement"] {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__["html"]`
      <style>
        ha-automation-picker,
        ha-automation-editor {
          height: 100%;
        }
      </style>
      <app-route
        route="[[route]]"
        pattern="/edit/:automation"
        data="{{_routeData}}"
        active="{{_edittingAutomation}}"
      ></app-route>
      <app-route
        route="[[route]]"
        pattern="/new"
        active="{{_creatingNew}}"
      ></app-route>

      <template is="dom-if" if="[[!showEditor]]">
        <ha-automation-picker
          hass="[[hass]]"
          automations="[[automations]]"
          is-wide="[[isWide]]"
        ></ha-automation-picker>
      </template>

      <template is="dom-if" if="[[showEditor]]" restamp="">
        <ha-automation-editor
          hass="[[hass]]"
          automation="[[automation]]"
          is-wide="[[isWide]]"
          creating-new="[[_creatingNew]]"
        ></ha-automation-editor>
      </template>
    `;
  }

  static get properties() {
    return {
      hass: Object,
      route: Object,
      isWide: Boolean,
      _routeData: Object,
      _routeMatches: Boolean,
      _creatingNew: Boolean,
      _edittingAutomation: Boolean,

      automations: {
        type: Array,
        computed: "computeAutomations(hass)",
      },

      automation: {
        type: Object,
        computed:
          "computeAutomation(automations, _edittingAutomation, _routeData)",
      },

      showEditor: {
        type: Boolean,
        computed: "computeShowEditor(_edittingAutomation, _creatingNew)",
      },
    };
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.route = { path: "", prefix: "" };
  }

  computeAutomation(automations, edittingAddon, routeData) {
    if (!automations || !edittingAddon) {
      return null;
    }
    for (var i = 0; i < automations.length; i++) {
      if (automations[i].attributes.id === routeData.automation) {
        return automations[i];
      }
    }
    return null;
  }

  computeAutomations(hass) {
    var automations = [];

    Object.keys(hass.states).forEach(function(key) {
      var entity = hass.states[key];

      if (Object(_common_entity_compute_state_domain__WEBPACK_IMPORTED_MODULE_5__["computeStateDomain"])(entity) === "automation") {
        automations.push(entity);
      }
    });

    return automations.sort(function entitySortBy(entityA, entityB) {
      var nameA = (entityA.attributes.alias || entityA.entity_id).toLowerCase();
      var nameB = (entityB.attributes.alias || entityB.entity_id).toLowerCase();

      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    });
  }

  computeShowEditor(_edittingAutomation, _creatingNew) {
    return _creatingNew || _edittingAutomation;
  }
}

customElements.define("ha-config-automation", HaConfigAutomation);


/***/ }),

/***/ "./src/panels/config/js/automation.tsx":
/*!*********************************************!*\
  !*** ./src/panels/config/js/automation.tsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Automation; });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.mjs");
/* harmony import */ var _polymer_paper_input_paper_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-input/paper-input */ "./node_modules/@polymer/paper-input/paper-input.js");
/* harmony import */ var _ha_config_section__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ha-config-section */ "./src/panels/config/ha-config-section.js");
/* harmony import */ var _components_ha_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/ha-card */ "./src/components/ha-card.ts");
/* harmony import */ var _components_ha_textarea__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/ha-textarea */ "./src/components/ha-textarea.js");
/* harmony import */ var _trigger_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./trigger/index */ "./src/panels/config/js/trigger/index.tsx");
/* harmony import */ var _condition_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./condition/index */ "./src/panels/config/js/condition/index.tsx");
/* harmony import */ var _script_index__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./script/index */ "./src/panels/config/js/script/index.tsx");








class Automation extends preact__WEBPACK_IMPORTED_MODULE_0__["Component"] {
    constructor() {
        super();
        this.onChange = this.onChange.bind(this);
        this.triggerChanged = this.triggerChanged.bind(this);
        this.conditionChanged = this.conditionChanged.bind(this);
        this.actionChanged = this.actionChanged.bind(this);
    }
    onChange(ev) {
        this.props.onChange(Object.assign(Object.assign({}, this.props.automation), { [ev.target.name]: ev.target.value }));
    }
    triggerChanged(trigger) {
        this.props.onChange(Object.assign(Object.assign({}, this.props.automation), { trigger }));
    }
    conditionChanged(condition) {
        this.props.onChange(Object.assign(Object.assign({}, this.props.automation), { condition }));
    }
    actionChanged(action) {
        this.props.onChange(Object.assign(Object.assign({}, this.props.automation), { action }));
    }
    render({ automation, isWide, hass, localize }) {
        const { alias, description, trigger, condition, action } = automation;
        return (Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("div", null,
            Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("ha-config-section", { "is-wide": isWide },
                Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("span", { slot: "header" }, alias),
                Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("span", { slot: "introduction" }, localize("ui.panel.config.automation.editor.introduction")),
                Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("ha-card", null,
                    Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "card-content" },
                        Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("paper-input", { label: localize("ui.panel.config.automation.editor.alias"), name: "alias", value: alias, "onvalue-changed": this.onChange }),
                        Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("ha-textarea", { label: localize("ui.panel.config.automation.editor.description.label"), placeholder: localize("ui.panel.config.automation.editor.description.placeholder"), name: "description", value: description, "onvalue-changed": this.onChange })))),
            Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("ha-config-section", { "is-wide": isWide },
                Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("span", { slot: "header" }, localize("ui.panel.config.automation.editor.triggers.header")),
                Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("span", { slot: "introduction" },
                    Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("p", null, localize("ui.panel.config.automation.editor.triggers.introduction")),
                    Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("a", { href: "https://home-assistant.io/docs/automation/trigger/", target: "_blank" }, localize("ui.panel.config.automation.editor.triggers.learn_more"))),
                Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(_trigger_index__WEBPACK_IMPORTED_MODULE_5__["default"], { trigger: trigger, onChange: this.triggerChanged, hass: hass, localize: localize })),
            Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("ha-config-section", { "is-wide": isWide },
                Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("span", { slot: "header" }, localize("ui.panel.config.automation.editor.conditions.header")),
                Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("span", { slot: "introduction" },
                    Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("p", null, localize("ui.panel.config.automation.editor.conditions.introduction")),
                    Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("a", { href: "https://home-assistant.io/docs/scripts/conditions/", target: "_blank" }, localize("ui.panel.config.automation.editor.conditions.learn_more"))),
                Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(_condition_index__WEBPACK_IMPORTED_MODULE_6__["default"], { condition: condition || [], onChange: this.conditionChanged, hass: hass, localize: localize })),
            Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("ha-config-section", { "is-wide": isWide },
                Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("span", { slot: "header" }, localize("ui.panel.config.automation.editor.actions.header")),
                Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("span", { slot: "introduction" },
                    Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("p", null, localize("ui.panel.config.automation.editor.actions.introduction")),
                    Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("a", { href: "https://home-assistant.io/docs/automation/action/", target: "_blank" }, localize("ui.panel.config.automation.editor.actions.learn_more"))),
                Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(_script_index__WEBPACK_IMPORTED_MODULE_7__["default"], { script: action, onChange: this.actionChanged, hass: hass, localize: localize }))));
    }
}


/***/ }),

/***/ "./src/panels/config/js/trigger/device.tsx":
/*!*************************************************!*\
  !*** ./src/panels/config/js/trigger/device.tsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DeviceTrigger; });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.mjs");
/* harmony import */ var _components_device_ha_device_picker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../components/device/ha-device-picker */ "./src/components/device/ha-device-picker.ts");
/* harmony import */ var _components_device_ha_device_trigger_picker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../components/device/ha-device-trigger-picker */ "./src/components/device/ha-device-trigger-picker.ts");
/* harmony import */ var _components_ha_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../components/ha-form */ "./src/components/ha-form.js");
/* harmony import */ var _data_device_automation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../data/device_automation */ "./src/data/device_automation.ts");





class DeviceTrigger extends preact__WEBPACK_IMPORTED_MODULE_0__["Component"] {
    constructor() {
        super();
        this.devicePicked = this.devicePicked.bind(this);
        this.deviceTriggerPicked = this.deviceTriggerPicked.bind(this);
        this._extraFieldsChanged = this._extraFieldsChanged.bind(this);
        this.state = { device_id: undefined, capabilities: undefined };
    }
    devicePicked(ev) {
        this.setState(Object.assign(Object.assign({}, this.state), { device_id: ev.target.value }));
    }
    deviceTriggerPicked(ev) {
        let trigger = ev.target.value;
        if (this._origTrigger &&
            Object(_data_device_automation__WEBPACK_IMPORTED_MODULE_4__["deviceAutomationsEqual"])(this._origTrigger, trigger)) {
            trigger = this._origTrigger;
        }
        this.props.onChange(this.props.index, trigger);
    }
    /* eslint-disable camelcase */
    render({ trigger, hass }, { device_id, capabilities }) {
        if (device_id === undefined) {
            device_id = trigger.device_id;
        }
        const extraFieldsData = capabilities && capabilities.extra_fields
            ? capabilities.extra_fields.map((item) => {
                return { [item.name]: this.props.trigger[item.name] };
            })
            : undefined;
        return (Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("div", null,
            Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("ha-device-picker", { value: device_id, onChange: this.devicePicked, hass: hass, label: "Device" }),
            Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("ha-device-trigger-picker", { value: trigger, deviceId: device_id, onChange: this.deviceTriggerPicked, hass: hass, label: "Trigger" }),
            extraFieldsData && (Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("ha-form", { data: Object.assign({}, ...extraFieldsData), "onData-changed": this._extraFieldsChanged, schema: this.state.capabilities.extra_fields, computeLabel: this._extraFieldsComputeLabelCallback(hass.localize) }))));
    }
    componentDidMount() {
        if (!this.state.capabilities) {
            this._getCapabilities();
        }
        if (this.props.trigger) {
            this._origTrigger = this.props.trigger;
        }
    }
    componentDidUpdate(prevProps) {
        if (prevProps.trigger !== this.props.trigger) {
            this._getCapabilities();
        }
    }
    async _getCapabilities() {
        const trigger = this.props.trigger;
        const capabilities = trigger.domain
            ? await Object(_data_device_automation__WEBPACK_IMPORTED_MODULE_4__["fetchDeviceTriggerCapabilities"])(this.props.hass, trigger)
            : null;
        this.setState(Object.assign(Object.assign({}, this.state), { capabilities }));
    }
    _extraFieldsChanged(ev) {
        if (!ev.detail.path) {
            return;
        }
        const item = ev.detail.path.replace("data.", "");
        const value = ev.detail.value || undefined;
        this.props.onChange(this.props.index, Object.assign(Object.assign({}, this.props.trigger), { [item]: value }));
    }
    _extraFieldsComputeLabelCallback(localize) {
        // Returns a callback for ha-form to calculate labels per schema object
        return (schema) => localize(`ui.panel.config.automation.editor.triggers.type.device.extra_fields.${schema.name}`) || schema.name;
    }
}
DeviceTrigger.defaultConfig = {
    device_id: "",
    domain: "",
    entity_id: "",
};


/***/ }),

/***/ "./src/panels/config/js/trigger/event.tsx":
/*!************************************************!*\
  !*** ./src/panels/config/js/trigger/event.tsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return EventTrigger; });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.mjs");
/* harmony import */ var _polymer_paper_input_paper_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-input/paper-input */ "./node_modules/@polymer/paper-input/paper-input.js");
/* harmony import */ var _yaml_textarea__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../yaml_textarea */ "./src/panels/config/js/yaml_textarea.tsx");
/* harmony import */ var _common_preact_event__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../common/preact/event */ "./src/common/preact/event.ts");




class EventTrigger extends preact__WEBPACK_IMPORTED_MODULE_0__["Component"] {
    constructor() {
        super();
        this.onChange = _common_preact_event__WEBPACK_IMPORTED_MODULE_3__["onChangeEvent"].bind(this, "trigger");
        this.eventDataChanged = this.eventDataChanged.bind(this);
    }
    /* eslint-disable camelcase */
    // tslint:disable-next-line: variable-name
    eventDataChanged(event_data) {
        this.props.onChange(this.props.index, Object.assign(Object.assign({}, this.props.trigger), { event_data }));
    }
    render({ trigger, localize }) {
        const { event_type, event_data } = trigger;
        return (Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("div", null,
            Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("paper-input", { label: localize("ui.panel.config.automation.editor.triggers.type.event.event_type"), name: "event_type", value: event_type, "onvalue-changed": this.onChange }),
            Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(_yaml_textarea__WEBPACK_IMPORTED_MODULE_2__["default"], { label: localize("ui.panel.config.automation.editor.triggers.type.event.event_data"), value: event_data, onChange: this.eventDataChanged })));
    }
}
EventTrigger.defaultConfig = {
    event_type: "",
    event_data: {},
};


/***/ }),

/***/ "./src/panels/config/js/trigger/geo_location.tsx":
/*!*******************************************************!*\
  !*** ./src/panels/config/js/trigger/geo_location.tsx ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GeolocationTrigger; });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.mjs");
/* harmony import */ var _polymer_paper_radio_button_paper_radio_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-radio-button/paper-radio-button */ "./node_modules/@polymer/paper-radio-button/paper-radio-button.js");
/* harmony import */ var _polymer_paper_radio_group_paper_radio_group__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-radio-group/paper-radio-group */ "./node_modules/@polymer/paper-radio-group/paper-radio-group.js");
/* harmony import */ var _components_entity_ha_entity_picker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../components/entity/ha-entity-picker */ "./src/components/entity/ha-entity-picker.ts");
/* harmony import */ var _common_preact_event__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../common/preact/event */ "./src/common/preact/event.ts");





class GeolocationTrigger extends preact__WEBPACK_IMPORTED_MODULE_0__["Component"] {
    constructor() {
        super();
        this.onChange = _common_preact_event__WEBPACK_IMPORTED_MODULE_4__["onChangeEvent"].bind(this, "trigger");
        this.zonePicked = this.zonePicked.bind(this);
        this.radioGroupPicked = this.radioGroupPicked.bind(this);
    }
    zonePicked(ev) {
        this.props.onChange(this.props.index, Object.assign(Object.assign({}, this.props.trigger), { zone: ev.target.value }));
    }
    radioGroupPicked(ev) {
        this.props.onChange(this.props.index, Object.assign(Object.assign({}, this.props.trigger), { event: ev.target.selected }));
    }
    /* eslint-disable camelcase */
    render({ trigger, hass, localize }) {
        const { source, zone, event } = trigger;
        return (Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("div", null,
            Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("paper-input", { label: localize("ui.panel.config.automation.editor.triggers.type.geo_location.source"), name: "source", value: source, "onvalue-changed": this.onChange }),
            Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("ha-entity-picker", { label: localize("ui.panel.config.automation.editor.triggers.type.geo_location.zone"), value: zone, onChange: this.zonePicked, hass: hass, allowCustomEntity: true, domainFilter: "zone" }),
            Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("label", { id: "eventlabel" }, localize("ui.panel.config.automation.editor.triggers.type.geo_location.event")),
            Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("paper-radio-group", { selected: event, "aria-labelledby": "eventlabel", "onpaper-radio-group-changed": this.radioGroupPicked },
                Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("paper-radio-button", { name: "enter" }, localize("ui.panel.config.automation.editor.triggers.type.geo_location.enter")),
                Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("paper-radio-button", { name: "leave" }, localize("ui.panel.config.automation.editor.triggers.type.geo_location.leave")))));
    }
}
GeolocationTrigger.defaultConfig = {
    source: "",
    zone: "",
    event: "enter",
};


/***/ }),

/***/ "./src/panels/config/js/trigger/homeassistant.tsx":
/*!********************************************************!*\
  !*** ./src/panels/config/js/trigger/homeassistant.tsx ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return HassTrigger; });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.mjs");
/* harmony import */ var _polymer_paper_radio_button_paper_radio_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-radio-button/paper-radio-button */ "./node_modules/@polymer/paper-radio-button/paper-radio-button.js");
/* harmony import */ var _polymer_paper_radio_group_paper_radio_group__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-radio-group/paper-radio-group */ "./node_modules/@polymer/paper-radio-group/paper-radio-group.js");



class HassTrigger extends preact__WEBPACK_IMPORTED_MODULE_0__["Component"] {
    constructor() {
        super();
        this.radioGroupPicked = this.radioGroupPicked.bind(this);
    }
    radioGroupPicked(ev) {
        this.props.onChange(this.props.index, Object.assign(Object.assign({}, this.props.trigger), { event: ev.target.selected }));
    }
    /* eslint-disable camelcase */
    render({ trigger, localize }) {
        const { event } = trigger;
        return (Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("div", null,
            Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("label", { id: "eventlabel" }, localize("ui.panel.config.automation.editor.triggers.type.homeassistant.event")),
            Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("paper-radio-group", { selected: event, "aria-labelledby": "eventlabel", "onpaper-radio-group-changed": this.radioGroupPicked },
                Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("paper-radio-button", { name: "start" }, localize("ui.panel.config.automation.editor.triggers.type.homeassistant.start")),
                Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("paper-radio-button", { name: "shutdown" }, localize("ui.panel.config.automation.editor.triggers.type.homeassistant.shutdown")))));
    }
}
HassTrigger.defaultConfig = {
    event: "start",
};


/***/ }),

/***/ "./src/panels/config/js/trigger/index.tsx":
/*!************************************************!*\
  !*** ./src/panels/config/js/trigger/index.tsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Trigger; });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.mjs");
/* harmony import */ var _material_mwc_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material/mwc-button */ "./node_modules/@material/mwc-button/mwc-button.js");
/* harmony import */ var _components_ha_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../components/ha-card */ "./src/components/ha-card.ts");
/* harmony import */ var _trigger_row__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./trigger_row */ "./src/panels/config/js/trigger/trigger_row.tsx");
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./state */ "./src/panels/config/js/trigger/state.tsx");





class Trigger extends preact__WEBPACK_IMPORTED_MODULE_0__["Component"] {
    constructor() {
        super();
        this.addTrigger = this.addTrigger.bind(this);
        this.triggerChanged = this.triggerChanged.bind(this);
    }
    addTrigger() {
        const trigger = this.props.trigger.concat(Object.assign({ platform: "state" }, _state__WEBPACK_IMPORTED_MODULE_4__["default"].defaultConfig));
        this.props.onChange(trigger);
    }
    triggerChanged(index, newValue) {
        const trigger = this.props.trigger.concat();
        if (newValue === null) {
            trigger.splice(index, 1);
        }
        else {
            trigger[index] = newValue;
        }
        this.props.onChange(trigger);
    }
    render({ trigger, hass, localize }) {
        return (Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "triggers" },
            trigger.map((trg, idx) => (Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(_trigger_row__WEBPACK_IMPORTED_MODULE_3__["default"], { index: idx, trigger: trg, onChange: this.triggerChanged, hass: hass, localize: localize }))),
            Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("ha-card", null,
                Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "card-actions add-card" },
                    Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("mwc-button", { onTap: this.addTrigger }, localize("ui.panel.config.automation.editor.triggers.add"))))));
    }
}


/***/ }),

/***/ "./src/panels/config/js/trigger/mqtt.tsx":
/*!***********************************************!*\
  !*** ./src/panels/config/js/trigger/mqtt.tsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MQTTTrigger; });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.mjs");
/* harmony import */ var _polymer_paper_input_paper_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-input/paper-input */ "./node_modules/@polymer/paper-input/paper-input.js");
/* harmony import */ var _common_preact_event__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../common/preact/event */ "./src/common/preact/event.ts");



class MQTTTrigger extends preact__WEBPACK_IMPORTED_MODULE_0__["Component"] {
    constructor() {
        super();
        this.onChange = _common_preact_event__WEBPACK_IMPORTED_MODULE_2__["onChangeEvent"].bind(this, "trigger");
    }
    /* eslint-disable camelcase */
    render({ trigger, localize }) {
        const { topic, payload } = trigger;
        return (Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("div", null,
            Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("paper-input", { label: localize("ui.panel.config.automation.editor.triggers.type.mqtt.topic"), name: "topic", value: topic, "onvalue-changed": this.onChange }),
            Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("paper-input", { label: localize("ui.panel.config.automation.editor.triggers.type.mqtt.payload"), name: "payload", value: payload, "onvalue-changed": this.onChange })));
    }
}
MQTTTrigger.defaultConfig = {
    topic: "",
};


/***/ }),

/***/ "./src/panels/config/js/trigger/numeric_state.tsx":
/*!********************************************************!*\
  !*** ./src/panels/config/js/trigger/numeric_state.tsx ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return NumericStateTrigger; });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.mjs");
/* harmony import */ var _polymer_paper_input_paper_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-input/paper-input */ "./node_modules/@polymer/paper-input/paper-input.js");
/* harmony import */ var _components_ha_textarea__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../components/ha-textarea */ "./src/components/ha-textarea.js");
/* harmony import */ var _components_entity_ha_entity_picker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../components/entity/ha-entity-picker */ "./src/components/entity/ha-entity-picker.ts");
/* harmony import */ var _common_preact_event__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../common/preact/event */ "./src/common/preact/event.ts");





class NumericStateTrigger extends preact__WEBPACK_IMPORTED_MODULE_0__["Component"] {
    constructor() {
        super();
        this.onChange = _common_preact_event__WEBPACK_IMPORTED_MODULE_4__["onChangeEvent"].bind(this, "trigger");
        this.entityPicked = this.entityPicked.bind(this);
    }
    entityPicked(ev) {
        this.props.onChange(this.props.index, Object.assign(Object.assign({}, this.props.trigger), { entity_id: ev.target.value }));
    }
    /* eslint-disable camelcase */
    render({ trigger, hass, localize }) {
        const { value_template, entity_id, below, above } = trigger;
        let trgFor = trigger.for;
        if (trgFor && (trgFor.hours || trgFor.minutes || trgFor.seconds)) {
            // If the trigger was defined using the yaml dict syntax, convert it to
            // the equivalent string format
            let { hours = 0, minutes = 0, seconds = 0 } = trgFor;
            hours = hours.toString();
            minutes = minutes.toString().padStart(2, "0");
            seconds = seconds.toString().padStart(2, "0");
            trgFor = `${hours}:${minutes}:${seconds}`;
        }
        return (Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("div", null,
            Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("ha-entity-picker", { value: entity_id, onChange: this.entityPicked, hass: hass, allowCustomEntity: true }),
            Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("paper-input", { label: localize("ui.panel.config.automation.editor.triggers.type.numeric_state.above"), name: "above", value: above, "onvalue-changed": this.onChange }),
            Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("paper-input", { label: localize("ui.panel.config.automation.editor.triggers.type.numeric_state.below"), name: "below", value: below, "onvalue-changed": this.onChange }),
            Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("ha-textarea", { label: localize("ui.panel.config.automation.editor.triggers.type.numeric_state.value_template"), name: "value_template", value: value_template, "onvalue-changed": this.onChange, dir: "ltr" }),
            Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("paper-input", { label: localize("ui.panel.config.automation.editor.triggers.type.state.for"), name: "for", value: trgFor, "onvalue-changed": this.onChange })));
    }
}
NumericStateTrigger.defaultConfig = {
    entity_id: "",
};


/***/ }),

/***/ "./src/panels/config/js/trigger/state.tsx":
/*!************************************************!*\
  !*** ./src/panels/config/js/trigger/state.tsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return StateTrigger; });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.mjs");
/* harmony import */ var _polymer_paper_input_paper_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-input/paper-input */ "./node_modules/@polymer/paper-input/paper-input.js");
/* harmony import */ var _components_entity_ha_entity_picker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../components/entity/ha-entity-picker */ "./src/components/entity/ha-entity-picker.ts");
/* harmony import */ var _common_preact_event__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../common/preact/event */ "./src/common/preact/event.ts");




class StateTrigger extends preact__WEBPACK_IMPORTED_MODULE_0__["Component"] {
    constructor() {
        super();
        this.onChange = _common_preact_event__WEBPACK_IMPORTED_MODULE_3__["onChangeEvent"].bind(this, "trigger");
        this.entityPicked = this.entityPicked.bind(this);
    }
    entityPicked(ev) {
        this.props.onChange(this.props.index, Object.assign(Object.assign({}, this.props.trigger), { entity_id: ev.target.value }));
    }
    /* eslint-disable camelcase */
    render({ trigger, hass, localize }) {
        const { entity_id, to } = trigger;
        const trgFrom = trigger.from;
        let trgFor = trigger.for;
        if (trgFor && (trgFor.hours || trgFor.minutes || trgFor.seconds)) {
            // If the trigger was defined using the yaml dict syntax, convert it to
            // the equivalent string format
            let { hours = 0, minutes = 0, seconds = 0 } = trgFor;
            hours = hours.toString();
            minutes = minutes.toString().padStart(2, "0");
            seconds = seconds.toString().padStart(2, "0");
            trgFor = `${hours}:${minutes}:${seconds}`;
        }
        return (Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("div", null,
            Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("ha-entity-picker", { value: entity_id, onChange: this.entityPicked, hass: hass, allowCustomEntity: true }),
            Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("paper-input", { label: localize("ui.panel.config.automation.editor.triggers.type.state.from"), name: "from", value: trgFrom, "onvalue-changed": this.onChange }),
            Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("paper-input", { label: localize("ui.panel.config.automation.editor.triggers.type.state.to"), name: "to", value: to, "onvalue-changed": this.onChange }),
            Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("paper-input", { label: localize("ui.panel.config.automation.editor.triggers.type.state.for"), name: "for", value: trgFor, "onvalue-changed": this.onChange })));
    }
}
StateTrigger.defaultConfig = {
    entity_id: "",
};


/***/ }),

/***/ "./src/panels/config/js/trigger/sun.tsx":
/*!**********************************************!*\
  !*** ./src/panels/config/js/trigger/sun.tsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SunTrigger; });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.mjs");
/* harmony import */ var _polymer_paper_input_paper_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-input/paper-input */ "./node_modules/@polymer/paper-input/paper-input.js");
/* harmony import */ var _polymer_paper_radio_button_paper_radio_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-radio-button/paper-radio-button */ "./node_modules/@polymer/paper-radio-button/paper-radio-button.js");
/* harmony import */ var _polymer_paper_radio_group_paper_radio_group__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/paper-radio-group/paper-radio-group */ "./node_modules/@polymer/paper-radio-group/paper-radio-group.js");
/* harmony import */ var _common_preact_event__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../common/preact/event */ "./src/common/preact/event.ts");





class SunTrigger extends preact__WEBPACK_IMPORTED_MODULE_0__["Component"] {
    constructor() {
        super();
        this.onChange = _common_preact_event__WEBPACK_IMPORTED_MODULE_4__["onChangeEvent"].bind(this, "trigger");
        this.radioGroupPicked = this.radioGroupPicked.bind(this);
    }
    radioGroupPicked(ev) {
        this.props.onChange(this.props.index, Object.assign(Object.assign({}, this.props.trigger), { event: ev.target.selected }));
    }
    /* eslint-disable camelcase */
    render({ trigger, localize }) {
        const { offset, event } = trigger;
        return (Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("div", null,
            Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("label", { id: "eventlabel" }, localize("ui.panel.config.automation.editor.triggers.type.sun.event")),
            Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("paper-radio-group", { selected: event, "aria-labelledby": "eventlabel", "onpaper-radio-group-changed": this.radioGroupPicked },
                Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("paper-radio-button", { name: "sunrise" }, localize("ui.panel.config.automation.editor.triggers.type.sun.sunrise")),
                Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("paper-radio-button", { name: "sunset" }, localize("ui.panel.config.automation.editor.triggers.type.sun.sunset"))),
            Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("paper-input", { label: localize("ui.panel.config.automation.editor.triggers.type.sun.offset"), name: "offset", value: offset, "onvalue-changed": this.onChange })));
    }
}
SunTrigger.defaultConfig = {
    event: "sunrise",
};


/***/ }),

/***/ "./src/panels/config/js/trigger/template.tsx":
/*!***************************************************!*\
  !*** ./src/panels/config/js/trigger/template.tsx ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TemplateTrigger; });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.mjs");
/* harmony import */ var _components_ha_textarea__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../components/ha-textarea */ "./src/components/ha-textarea.js");
/* harmony import */ var _common_preact_event__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../common/preact/event */ "./src/common/preact/event.ts");



class TemplateTrigger extends preact__WEBPACK_IMPORTED_MODULE_0__["Component"] {
    constructor() {
        super();
        this.onChange = _common_preact_event__WEBPACK_IMPORTED_MODULE_2__["onChangeEvent"].bind(this, "trigger");
    }
    render({ trigger, localize }) {
        /* eslint-disable camelcase */
        const { value_template } = trigger;
        return (Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("div", null,
            Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("ha-textarea", { label: localize("ui.panel.config.automation.editor.triggers.type.template.value_template"), name: "value_template", value: value_template, "onvalue-changed": this.onChange, dir: "ltr" })));
    }
}
TemplateTrigger.defaultConfig = {
    value_template: "",
};


/***/ }),

/***/ "./src/panels/config/js/trigger/time.tsx":
/*!***********************************************!*\
  !*** ./src/panels/config/js/trigger/time.tsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TimeTrigger; });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.mjs");
/* harmony import */ var _polymer_paper_input_paper_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-input/paper-input */ "./node_modules/@polymer/paper-input/paper-input.js");
/* harmony import */ var _common_preact_event__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../common/preact/event */ "./src/common/preact/event.ts");



class TimeTrigger extends preact__WEBPACK_IMPORTED_MODULE_0__["Component"] {
    constructor() {
        super();
        this.onChange = _common_preact_event__WEBPACK_IMPORTED_MODULE_2__["onChangeEvent"].bind(this, "trigger");
    }
    /* eslint-disable camelcase */
    render({ trigger, localize }) {
        const { at } = trigger;
        return (Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("div", null,
            Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("paper-input", { label: localize("ui.panel.config.automation.editor.triggers.type.time.at"), name: "at", value: at, "onvalue-changed": this.onChange })));
    }
}
TimeTrigger.defaultConfig = {
    at: "",
};


/***/ }),

/***/ "./src/panels/config/js/trigger/time_pattern.tsx":
/*!*******************************************************!*\
  !*** ./src/panels/config/js/trigger/time_pattern.tsx ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TimePatternTrigger; });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.mjs");
/* harmony import */ var _polymer_paper_input_paper_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-input/paper-input */ "./node_modules/@polymer/paper-input/paper-input.js");
/* harmony import */ var _common_preact_event__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../common/preact/event */ "./src/common/preact/event.ts");



class TimePatternTrigger extends preact__WEBPACK_IMPORTED_MODULE_0__["Component"] {
    constructor() {
        super();
        this.onChange = _common_preact_event__WEBPACK_IMPORTED_MODULE_2__["onChangeEvent"].bind(this, "trigger");
    }
    /* eslint-disable camelcase */
    render({ trigger, localize }) {
        const { hours, minutes, seconds } = trigger;
        return (Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("div", null,
            Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("paper-input", { label: localize("ui.panel.config.automation.editor.triggers.type.time_pattern.hours"), name: "hours", value: hours, "onvalue-changed": this.onChange }),
            Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("paper-input", { label: localize("ui.panel.config.automation.editor.triggers.type.time_pattern.minutes"), name: "minutes", value: minutes, "onvalue-changed": this.onChange }),
            Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("paper-input", { label: localize("ui.panel.config.automation.editor.triggers.type.time_pattern.seconds"), name: "seconds", value: seconds, "onvalue-changed": this.onChange })));
    }
}
TimePatternTrigger.defaultConfig = {
    hours: "",
    minutes: "",
    seconds: "",
};


/***/ }),

/***/ "./src/panels/config/js/trigger/trigger_edit.tsx":
/*!*******************************************************!*\
  !*** ./src/panels/config/js/trigger/trigger_edit.tsx ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TriggerEdit; });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.mjs");
/* harmony import */ var _polymer_paper_dropdown_menu_paper_dropdown_menu_light__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-dropdown-menu/paper-dropdown-menu-light */ "./node_modules/@polymer/paper-dropdown-menu/paper-dropdown-menu-light.js");
/* harmony import */ var _polymer_paper_item_paper_item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-item/paper-item */ "./node_modules/@polymer/paper-item/paper-item.js");
/* harmony import */ var _polymer_paper_listbox_paper_listbox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/paper-listbox/paper-listbox */ "./node_modules/@polymer/paper-listbox/paper-listbox.js");
/* harmony import */ var _device__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./device */ "./src/panels/config/js/trigger/device.tsx");
/* harmony import */ var _event__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./event */ "./src/panels/config/js/trigger/event.tsx");
/* harmony import */ var _geo_location__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./geo_location */ "./src/panels/config/js/trigger/geo_location.tsx");
/* harmony import */ var _homeassistant__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./homeassistant */ "./src/panels/config/js/trigger/homeassistant.tsx");
/* harmony import */ var _mqtt__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./mqtt */ "./src/panels/config/js/trigger/mqtt.tsx");
/* harmony import */ var _numeric_state__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./numeric_state */ "./src/panels/config/js/trigger/numeric_state.tsx");
/* harmony import */ var _time_pattern__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./time_pattern */ "./src/panels/config/js/trigger/time_pattern.tsx");
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./state */ "./src/panels/config/js/trigger/state.tsx");
/* harmony import */ var _sun__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./sun */ "./src/panels/config/js/trigger/sun.tsx");
/* harmony import */ var _template__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./template */ "./src/panels/config/js/trigger/template.tsx");
/* harmony import */ var _time__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./time */ "./src/panels/config/js/trigger/time.tsx");
/* harmony import */ var _webhook__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./webhook */ "./src/panels/config/js/trigger/webhook.tsx");
/* harmony import */ var _zone__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./zone */ "./src/panels/config/js/trigger/zone.tsx");

















const TYPES = {
    device: _device__WEBPACK_IMPORTED_MODULE_4__["default"],
    event: _event__WEBPACK_IMPORTED_MODULE_5__["default"],
    state: _state__WEBPACK_IMPORTED_MODULE_11__["default"],
    geo_location: _geo_location__WEBPACK_IMPORTED_MODULE_6__["default"],
    homeassistant: _homeassistant__WEBPACK_IMPORTED_MODULE_7__["default"],
    mqtt: _mqtt__WEBPACK_IMPORTED_MODULE_8__["default"],
    numeric_state: _numeric_state__WEBPACK_IMPORTED_MODULE_9__["default"],
    sun: _sun__WEBPACK_IMPORTED_MODULE_12__["default"],
    template: _template__WEBPACK_IMPORTED_MODULE_13__["default"],
    time: _time__WEBPACK_IMPORTED_MODULE_14__["default"],
    time_pattern: _time_pattern__WEBPACK_IMPORTED_MODULE_10__["default"],
    webhook: _webhook__WEBPACK_IMPORTED_MODULE_15__["default"],
    zone: _zone__WEBPACK_IMPORTED_MODULE_16__["default"],
};
const OPTIONS = Object.keys(TYPES).sort();
class TriggerEdit extends preact__WEBPACK_IMPORTED_MODULE_0__["Component"] {
    constructor() {
        super();
        this.typeChanged = this.typeChanged.bind(this);
    }
    render({ index, trigger, onChange, hass, localize }) {
        // tslint:disable-next-line: variable-name
        const Comp = TYPES[trigger.platform];
        const selected = OPTIONS.indexOf(trigger.platform);
        if (!Comp) {
            return (Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("div", null,
                localize("ui.panel.config.automation.editor.triggers.unsupported_platform", "platform", trigger.platform),
                Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("pre", null, JSON.stringify(trigger, null, 2))));
        }
        return (Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("div", null,
            Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("paper-dropdown-menu-light", { label: localize("ui.panel.config.automation.editor.triggers.type_select"), "no-animations": true },
                Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("paper-listbox", { slot: "dropdown-content", selected: selected, "oniron-select": this.typeChanged }, OPTIONS.map((opt) => (Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("paper-item", { platform: opt }, localize(`ui.panel.config.automation.editor.triggers.type.${opt}.label`)))))),
            Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(Comp, { index: index, trigger: trigger, onChange: onChange, hass: hass, localize: localize })));
    }
    typeChanged(ev) {
        const type = ev.target.selectedItem.attributes.platform.value;
        if (type !== this.props.trigger.platform) {
            this.props.onChange(this.props.index, Object.assign({ platform: type }, TYPES[type].defaultConfig));
        }
    }
}


/***/ }),

/***/ "./src/panels/config/js/trigger/trigger_row.tsx":
/*!******************************************************!*\
  !*** ./src/panels/config/js/trigger/trigger_row.tsx ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TriggerRow; });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.mjs");
/* harmony import */ var _polymer_paper_menu_button_paper_menu_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-menu-button/paper-menu-button */ "./node_modules/@polymer/paper-menu-button/paper-menu-button.js");
/* harmony import */ var _polymer_paper_icon_button_paper_icon_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-icon-button/paper-icon-button */ "./node_modules/@polymer/paper-icon-button/paper-icon-button.js");
/* harmony import */ var _polymer_paper_item_paper_item__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/paper-item/paper-item */ "./node_modules/@polymer/paper-item/paper-item.js");
/* harmony import */ var _polymer_paper_listbox_paper_listbox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/paper-listbox/paper-listbox */ "./node_modules/@polymer/paper-listbox/paper-listbox.js");
/* harmony import */ var _components_ha_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../components/ha-card */ "./src/components/ha-card.ts");
/* harmony import */ var _trigger_edit__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./trigger_edit */ "./src/panels/config/js/trigger/trigger_edit.tsx");







class TriggerRow extends preact__WEBPACK_IMPORTED_MODULE_0__["Component"] {
    constructor() {
        super();
        this.onDelete = this.onDelete.bind(this);
    }
    render(props) {
        return (Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("ha-card", null,
            Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "card-content" },
                Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "card-menu" },
                    Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("paper-menu-button", { "no-animations": true, "horizontal-align": "right", "horizontal-offset": "-5", "vertical-offset": "-5" },
                        Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("paper-icon-button", { icon: "hass:dots-vertical", slot: "dropdown-trigger" }),
                        Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("paper-listbox", { slot: "dropdown-content" },
                            Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("paper-item", { disabled: true }, props.localize("ui.panel.config.automation.editor.triggers.duplicate")),
                            Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("paper-item", { onTap: this.onDelete }, props.localize("ui.panel.config.automation.editor.triggers.delete"))))),
                Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(_trigger_edit__WEBPACK_IMPORTED_MODULE_6__["default"], Object.assign({}, props)))));
    }
    onDelete() {
        // eslint-disable-next-line
        if (confirm(this.props.localize("ui.panel.config.automation.editor.triggers.delete_confirm"))) {
            this.props.onChange(this.props.index, null);
        }
    }
}


/***/ }),

/***/ "./src/panels/config/js/trigger/webhook.tsx":
/*!**************************************************!*\
  !*** ./src/panels/config/js/trigger/webhook.tsx ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return WebhookTrigger; });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.mjs");
/* harmony import */ var _polymer_paper_input_paper_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-input/paper-input */ "./node_modules/@polymer/paper-input/paper-input.js");
/* harmony import */ var _common_preact_event__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../common/preact/event */ "./src/common/preact/event.ts");



class WebhookTrigger extends preact__WEBPACK_IMPORTED_MODULE_0__["Component"] {
    constructor() {
        super();
        this.onChange = _common_preact_event__WEBPACK_IMPORTED_MODULE_2__["onChangeEvent"].bind(this, "trigger");
    }
    render({ trigger, localize }) {
        const { webhook_id: webhookId } = trigger;
        return (Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("div", null,
            Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("paper-input", { label: localize("ui.panel.config.automation.editor.triggers.type.webhook.webhook_id"), name: "webhook_id", value: webhookId, "onvalue-changed": this.onChange })));
    }
}
WebhookTrigger.defaultConfig = {
    webhook_id: "",
};


/***/ }),

/***/ "./src/panels/config/js/trigger/zone.tsx":
/*!***********************************************!*\
  !*** ./src/panels/config/js/trigger/zone.tsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ZoneTrigger; });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.mjs");
/* harmony import */ var _polymer_paper_radio_button_paper_radio_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-radio-button/paper-radio-button */ "./node_modules/@polymer/paper-radio-button/paper-radio-button.js");
/* harmony import */ var _polymer_paper_radio_group_paper_radio_group__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-radio-group/paper-radio-group */ "./node_modules/@polymer/paper-radio-group/paper-radio-group.js");
/* harmony import */ var _components_entity_ha_entity_picker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../components/entity/ha-entity-picker */ "./src/components/entity/ha-entity-picker.ts");
/* harmony import */ var _common_entity_has_location__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../common/entity/has_location */ "./src/common/entity/has_location.ts");
/* harmony import */ var _common_entity_compute_state_domain__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../common/entity/compute_state_domain */ "./src/common/entity/compute_state_domain.ts");






function zoneAndLocationFilter(stateObj) {
    return Object(_common_entity_has_location__WEBPACK_IMPORTED_MODULE_4__["hasLocation"])(stateObj) && Object(_common_entity_compute_state_domain__WEBPACK_IMPORTED_MODULE_5__["computeStateDomain"])(stateObj) !== "zone";
}
class ZoneTrigger extends preact__WEBPACK_IMPORTED_MODULE_0__["Component"] {
    constructor() {
        super();
        this.radioGroupPicked = this.radioGroupPicked.bind(this);
        this.entityPicked = this.entityPicked.bind(this);
        this.zonePicked = this.zonePicked.bind(this);
    }
    /* eslint-disable camelcase */
    render({ trigger, hass, localize }) {
        const { entity_id, zone, event } = trigger;
        return (Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("div", null,
            Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("ha-entity-picker", { label: localize("ui.panel.config.automation.editor.triggers.type.zone.entity"), value: entity_id, onChange: this.entityPicked, hass: hass, allowCustomEntity: true, entityFilter: zoneAndLocationFilter }),
            Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("ha-entity-picker", { label: localize("ui.panel.config.automation.editor.triggers.type.zone.zone"), value: zone, onChange: this.zonePicked, hass: hass, allowCustomEntity: true, domainFilter: "zone" }),
            Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("label", { id: "eventlabel" }, localize("ui.panel.config.automation.editor.triggers.type.zone.event")),
            Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("paper-radio-group", { selected: event, "aria-labelledby": "eventlabel", "onpaper-radio-group-changed": this.radioGroupPicked },
                Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("paper-radio-button", { name: "enter" }, localize("ui.panel.config.automation.editor.triggers.type.zone.enter")),
                Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("paper-radio-button", { name: "leave" }, localize("ui.panel.config.automation.editor.triggers.type.zone.leave")))));
    }
    entityPicked(ev) {
        this.props.onChange(this.props.index, Object.assign(Object.assign({}, this.props.trigger), { entity_id: ev.target.value }));
    }
    zonePicked(ev) {
        this.props.onChange(this.props.index, Object.assign(Object.assign({}, this.props.trigger), { zone: ev.target.value }));
    }
    radioGroupPicked(ev) {
        this.props.onChange(this.props.index, Object.assign(Object.assign({}, this.props.trigger), { event: ev.target.selected }));
    }
}
ZoneTrigger.defaultConfig = {
    entity_id: "",
    zone: "",
    event: "enter",
};


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFuZWwtY29uZmlnLWF1dG9tYXRpb24uY2h1bmsuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL213Yy1iYXNlL2Zvcm0tZWxlbWVudC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbGl0LWh0bWwvZGlyZWN0aXZlcy9pZi1kZWZpbmVkLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vZGF0ZXRpbWUvZm9ybWF0X2RhdGVfdGltZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9kZXZpY2UvaGEtZGV2aWNlLXRyaWdnZXItcGlja2VyLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2VudGl0eS9oYS1lbnRpdHktdG9nZ2xlLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2hhLXN3aXRjaC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZGF0YS9hdXRvbWF0aW9uLnRzIiwid2VicGFjazovLy8uL3NyYy9wYW5lbHMvY29uZmlnL2F1dG9tYXRpb24vaGEtYXV0b21hdGlvbi1lZGl0b3IudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhbmVscy9jb25maWcvYXV0b21hdGlvbi9oYS1hdXRvbWF0aW9uLXBpY2tlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL2NvbmZpZy9hdXRvbWF0aW9uL2hhLWNvbmZpZy1hdXRvbWF0aW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9wYW5lbHMvY29uZmlnL2pzL2F1dG9tYXRpb24udHN4Iiwid2VicGFjazovLy8uL3NyYy9wYW5lbHMvY29uZmlnL2pzL3RyaWdnZXIvZGV2aWNlLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL2NvbmZpZy9qcy90cmlnZ2VyL2V2ZW50LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL2NvbmZpZy9qcy90cmlnZ2VyL2dlb19sb2NhdGlvbi50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhbmVscy9jb25maWcvanMvdHJpZ2dlci9ob21lYXNzaXN0YW50LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL2NvbmZpZy9qcy90cmlnZ2VyL2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL2NvbmZpZy9qcy90cmlnZ2VyL21xdHQudHN4Iiwid2VicGFjazovLy8uL3NyYy9wYW5lbHMvY29uZmlnL2pzL3RyaWdnZXIvbnVtZXJpY19zdGF0ZS50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhbmVscy9jb25maWcvanMvdHJpZ2dlci9zdGF0ZS50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhbmVscy9jb25maWcvanMvdHJpZ2dlci9zdW4udHN4Iiwid2VicGFjazovLy8uL3NyYy9wYW5lbHMvY29uZmlnL2pzL3RyaWdnZXIvdGVtcGxhdGUudHN4Iiwid2VicGFjazovLy8uL3NyYy9wYW5lbHMvY29uZmlnL2pzL3RyaWdnZXIvdGltZS50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhbmVscy9jb25maWcvanMvdHJpZ2dlci90aW1lX3BhdHRlcm4udHN4Iiwid2VicGFjazovLy8uL3NyYy9wYW5lbHMvY29uZmlnL2pzL3RyaWdnZXIvdHJpZ2dlcl9lZGl0LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL2NvbmZpZy9qcy90cmlnZ2VyL3RyaWdnZXJfcm93LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL2NvbmZpZy9qcy90cmlnZ2VyL3dlYmhvb2sudHN4Iiwid2VicGFjazovLy8uL3NyYy9wYW5lbHMvY29uZmlnL2pzL3RyaWdnZXIvem9uZS50c3giXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG5AbGljZW5zZVxuQ29weXJpZ2h0IDIwMTggR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cblxuTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbnlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbllvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuXG4gICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG5cblVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbmRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbldJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxubGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4qL1xuaW1wb3J0IHsgQmFzZUVsZW1lbnQgfSBmcm9tICcuL2Jhc2UtZWxlbWVudCc7XG5leHBvcnQgKiBmcm9tICcuL2Jhc2UtZWxlbWVudCc7XG5leHBvcnQgY2xhc3MgRm9ybUVsZW1lbnQgZXh0ZW5kcyBCYXNlRWxlbWVudCB7XG4gICAgY3JlYXRlUmVuZGVyUm9vdCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYXR0YWNoU2hhZG93KHsgbW9kZTogJ29wZW4nLCBkZWxlZ2F0ZXNGb2N1czogdHJ1ZSB9KTtcbiAgICB9XG4gICAgY2xpY2soKSB7XG4gICAgICAgIGlmICh0aGlzLmZvcm1FbGVtZW50KSB7XG4gICAgICAgICAgICB0aGlzLmZvcm1FbGVtZW50LmZvY3VzKCk7XG4gICAgICAgICAgICB0aGlzLmZvcm1FbGVtZW50LmNsaWNrKCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgc2V0QXJpYUxhYmVsKGxhYmVsKSB7XG4gICAgICAgIGlmICh0aGlzLmZvcm1FbGVtZW50KSB7XG4gICAgICAgICAgICB0aGlzLmZvcm1FbGVtZW50LnNldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbCcsIGxhYmVsKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBmaXJzdFVwZGF0ZWQoKSB7XG4gICAgICAgIHN1cGVyLmZpcnN0VXBkYXRlZCgpO1xuICAgICAgICB0aGlzLm1kY1Jvb3QuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKGUpID0+IHtcbiAgICAgICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoJ2NoYW5nZScsIGUpKTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Zm9ybS1lbGVtZW50LmpzLm1hcCIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAoYykgMjAxOCBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiBUaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dFxuICogVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0XG4gKiBUaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmUgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0XG4gKiBDb2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhcyBwYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzb1xuICogc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudCBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4gKi9cbmltcG9ydCB7IEF0dHJpYnV0ZVBhcnQsIGRpcmVjdGl2ZSB9IGZyb20gJy4uL2xpdC1odG1sLmpzJztcbi8qKlxuICogRm9yIEF0dHJpYnV0ZVBhcnRzLCBzZXRzIHRoZSBhdHRyaWJ1dGUgaWYgdGhlIHZhbHVlIGlzIGRlZmluZWQgYW5kIHJlbW92ZXNcbiAqIHRoZSBhdHRyaWJ1dGUgaWYgdGhlIHZhbHVlIGlzIHVuZGVmaW5lZC5cbiAqXG4gKiBGb3Igb3RoZXIgcGFydCB0eXBlcywgdGhpcyBkaXJlY3RpdmUgaXMgYSBuby1vcC5cbiAqL1xuZXhwb3J0IGNvbnN0IGlmRGVmaW5lZCA9IGRpcmVjdGl2ZSgodmFsdWUpID0+IChwYXJ0KSA9PiB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQgJiYgcGFydCBpbnN0YW5jZW9mIEF0dHJpYnV0ZVBhcnQpIHtcbiAgICAgICAgaWYgKHZhbHVlICE9PSBwYXJ0LnZhbHVlKSB7XG4gICAgICAgICAgICBjb25zdCBuYW1lID0gcGFydC5jb21taXR0ZXIubmFtZTtcbiAgICAgICAgICAgIHBhcnQuY29tbWl0dGVyLmVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKG5hbWUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBwYXJ0LnNldFZhbHVlKHZhbHVlKTtcbiAgICB9XG59KTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWlmLWRlZmluZWQuanMubWFwIiwiaW1wb3J0IGZlY2hhIGZyb20gXCJmZWNoYVwiO1xuXG4vLyBDaGVjayBmb3Igc3VwcG9ydCBvZiBuYXRpdmUgbG9jYWxlIHN0cmluZyBvcHRpb25zXG5mdW5jdGlvbiB0b0xvY2FsZVN0cmluZ1N1cHBvcnRzT3B0aW9ucygpIHtcbiAgdHJ5IHtcbiAgICBuZXcgRGF0ZSgpLnRvTG9jYWxlU3RyaW5nKFwiaVwiKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiBlLm5hbWUgPT09IFwiUmFuZ2VFcnJvclwiO1xuICB9XG4gIHJldHVybiBmYWxzZTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgKHRvTG9jYWxlU3RyaW5nU3VwcG9ydHNPcHRpb25zKClcbiAgPyAoZGF0ZU9iajogRGF0ZSwgbG9jYWxlczogc3RyaW5nKSA9PlxuICAgICAgZGF0ZU9iai50b0xvY2FsZVN0cmluZyhsb2NhbGVzLCB7XG4gICAgICAgIHllYXI6IFwibnVtZXJpY1wiLFxuICAgICAgICBtb250aDogXCJsb25nXCIsXG4gICAgICAgIGRheTogXCJudW1lcmljXCIsXG4gICAgICAgIGhvdXI6IFwibnVtZXJpY1wiLFxuICAgICAgICBtaW51dGU6IFwiMi1kaWdpdFwiLFxuICAgICAgfSlcbiAgOiAoZGF0ZU9iajogRGF0ZSkgPT4gZmVjaGEuZm9ybWF0KGRhdGVPYmosIFwiaGFEYXRlVGltZVwiKSk7XG4iLCJpbXBvcnQgeyBjdXN0b21FbGVtZW50IH0gZnJvbSBcImxpdC1lbGVtZW50XCI7XG5pbXBvcnQge1xuICBEZXZpY2VUcmlnZ2VyLFxuICBmZXRjaERldmljZVRyaWdnZXJzLFxuICBsb2NhbGl6ZURldmljZUF1dG9tYXRpb25UcmlnZ2VyLFxufSBmcm9tIFwiLi4vLi4vZGF0YS9kZXZpY2VfYXV0b21hdGlvblwiO1xuaW1wb3J0IFwiLi4vLi4vY29tcG9uZW50cy9oYS1wYXBlci1kcm9wZG93bi1tZW51XCI7XG5pbXBvcnQgeyBIYURldmljZUF1dG9tYXRpb25QaWNrZXIgfSBmcm9tIFwiLi9oYS1kZXZpY2UtYXV0b21hdGlvbi1waWNrZXJcIjtcblxuQGN1c3RvbUVsZW1lbnQoXCJoYS1kZXZpY2UtdHJpZ2dlci1waWNrZXJcIilcbmNsYXNzIEhhRGV2aWNlVHJpZ2dlclBpY2tlciBleHRlbmRzIEhhRGV2aWNlQXV0b21hdGlvblBpY2tlcjxEZXZpY2VUcmlnZ2VyPiB7XG4gIHByb3RlY3RlZCBOT19BVVRPTUFUSU9OX1RFWFQgPSBcIk5vIHRyaWdnZXJzXCI7XG4gIHByb3RlY3RlZCBVTktOT1dOX0FVVE9NQVRJT05fVEVYVCA9IFwiVW5rbm93biB0cmlnZ2VyXCI7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoXG4gICAgICBsb2NhbGl6ZURldmljZUF1dG9tYXRpb25UcmlnZ2VyLFxuICAgICAgZmV0Y2hEZXZpY2VUcmlnZ2VycyxcbiAgICAgIChkZXZpY2VJZD86IHN0cmluZykgPT4gKHtcbiAgICAgICAgZGV2aWNlX2lkOiBkZXZpY2VJZCB8fCBcIlwiLFxuICAgICAgICBwbGF0Zm9ybTogXCJkZXZpY2VcIixcbiAgICAgICAgZG9tYWluOiBcIlwiLFxuICAgICAgICBlbnRpdHlfaWQ6IFwiXCIsXG4gICAgICB9KVxuICAgICk7XG4gIH1cbn1cblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgSFRNTEVsZW1lbnRUYWdOYW1lTWFwIHtcbiAgICBcImhhLWRldmljZS10cmlnZ2VyLXBpY2tlclwiOiBIYURldmljZVRyaWdnZXJQaWNrZXI7XG4gIH1cbn1cbiIsImltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWljb24tYnV0dG9uL3BhcGVyLWljb24tYnV0dG9uXCI7XG5cbmltcG9ydCB7IFNUQVRFU19PRkYgfSBmcm9tIFwiLi4vLi4vY29tbW9uL2NvbnN0XCI7XG5pbXBvcnQge1xuICBMaXRFbGVtZW50LFxuICBUZW1wbGF0ZVJlc3VsdCxcbiAgaHRtbCxcbiAgQ1NTUmVzdWx0LFxuICBjc3MsXG4gIHByb3BlcnR5LFxuICBQcm9wZXJ0eVZhbHVlcyxcbn0gZnJvbSBcImxpdC1lbGVtZW50XCI7XG5pbXBvcnQgeyBIb21lQXNzaXN0YW50IH0gZnJvbSBcIi4uLy4uL3R5cGVzXCI7XG5pbXBvcnQgeyBIYXNzRW50aXR5IH0gZnJvbSBcImhvbWUtYXNzaXN0YW50LWpzLXdlYnNvY2tldFwiO1xuaW1wb3J0IHsgZm9yd2FyZEhhcHRpYyB9IGZyb20gXCIuLi8uLi9kYXRhL2hhcHRpY3NcIjtcblxuaW1wb3J0IHsgY29tcHV0ZVN0YXRlRG9tYWluIH0gZnJvbSBcIi4uLy4uL2NvbW1vbi9lbnRpdHkvY29tcHV0ZV9zdGF0ZV9kb21haW5cIjtcbmltcG9ydCB7IGNvbXB1dGVTdGF0ZU5hbWUgfSBmcm9tIFwiLi4vLi4vY29tbW9uL2VudGl0eS9jb21wdXRlX3N0YXRlX25hbWVcIjtcblxuaW1wb3J0IFwiLi4vaGEtc3dpdGNoXCI7XG5cbmNvbnN0IGlzT24gPSAoc3RhdGVPYmo/OiBIYXNzRW50aXR5KSA9PlxuICBzdGF0ZU9iaiAhPT0gdW5kZWZpbmVkICYmICFTVEFURVNfT0ZGLmluY2x1ZGVzKHN0YXRlT2JqLnN0YXRlKTtcblxuY2xhc3MgSGFFbnRpdHlUb2dnbGUgZXh0ZW5kcyBMaXRFbGVtZW50IHtcbiAgLy8gaGFzcyBpcyBub3QgYSBwcm9wZXJ0eSBzbyB0aGF0IHdlIG9ubHkgcmUtcmVuZGVyIG9uIHN0YXRlT2JqIGNoYW5nZXNcbiAgcHVibGljIGhhc3M/OiBIb21lQXNzaXN0YW50O1xuICBAcHJvcGVydHkoKSBwdWJsaWMgc3RhdGVPYmo/OiBIYXNzRW50aXR5O1xuICBAcHJvcGVydHkoKSBwcml2YXRlIF9pc09uOiBib29sZWFuID0gZmFsc2U7XG5cbiAgcHJvdGVjdGVkIHJlbmRlcigpOiBUZW1wbGF0ZVJlc3VsdCB8IHZvaWQge1xuICAgIGlmICghdGhpcy5zdGF0ZU9iaikge1xuICAgICAgcmV0dXJuIGh0bWxgXG4gICAgICAgIDxoYS1zd2l0Y2ggZGlzYWJsZWQ+PC9oYS1zd2l0Y2g+XG4gICAgICBgO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnN0YXRlT2JqLmF0dHJpYnV0ZXMuYXNzdW1lZF9zdGF0ZSkge1xuICAgICAgcmV0dXJuIGh0bWxgXG4gICAgICAgIDxwYXBlci1pY29uLWJ1dHRvblxuICAgICAgICAgIGFyaWEtbGFiZWw9JHtgVHVybiAke2NvbXB1dGVTdGF0ZU5hbWUodGhpcy5zdGF0ZU9iail9IG9mZmB9XG4gICAgICAgICAgaWNvbj1cImhhc3M6Zmxhc2gtb2ZmXCJcbiAgICAgICAgICBAY2xpY2s9JHt0aGlzLl90dXJuT2ZmfVxuICAgICAgICAgID9zdGF0ZS1hY3RpdmU9JHshdGhpcy5faXNPbn1cbiAgICAgICAgPjwvcGFwZXItaWNvbi1idXR0b24+XG4gICAgICAgIDxwYXBlci1pY29uLWJ1dHRvblxuICAgICAgICAgIGFyaWEtbGFiZWw9JHtgVHVybiAke2NvbXB1dGVTdGF0ZU5hbWUodGhpcy5zdGF0ZU9iail9IG9uYH1cbiAgICAgICAgICBpY29uPVwiaGFzczpmbGFzaFwiXG4gICAgICAgICAgQGNsaWNrPSR7dGhpcy5fdHVybk9ufVxuICAgICAgICAgID9zdGF0ZS1hY3RpdmU9JHt0aGlzLl9pc09ufVxuICAgICAgICA+PC9wYXBlci1pY29uLWJ1dHRvbj5cbiAgICAgIGA7XG4gICAgfVxuXG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8aGEtc3dpdGNoXG4gICAgICAgIGFyaWEtbGFiZWw9JHtgVG9nZ2xlICR7Y29tcHV0ZVN0YXRlTmFtZSh0aGlzLnN0YXRlT2JqKX0gJHtcbiAgICAgICAgICB0aGlzLl9pc09uID8gXCJvZmZcIiA6IFwib25cIlxuICAgICAgICB9YH1cbiAgICAgICAgLmNoZWNrZWQ9JHt0aGlzLl9pc09ufVxuICAgICAgICBAY2hhbmdlPSR7dGhpcy5fdG9nZ2xlQ2hhbmdlZH1cbiAgICAgID48L2hhLXN3aXRjaD5cbiAgICBgO1xuICB9XG5cbiAgcHJvdGVjdGVkIGZpcnN0VXBkYXRlZChjaGFuZ2VkUHJvcHMpIHtcbiAgICBzdXBlci5maXJzdFVwZGF0ZWQoY2hhbmdlZFByb3BzKTtcbiAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXYpID0+IGV2LnN0b3BQcm9wYWdhdGlvbigpKTtcbiAgfVxuXG4gIHByb3RlY3RlZCB1cGRhdGVkKGNoYW5nZWRQcm9wczogUHJvcGVydHlWYWx1ZXMpOiB2b2lkIHtcbiAgICBpZiAoY2hhbmdlZFByb3BzLmhhcyhcInN0YXRlT2JqXCIpKSB7XG4gICAgICB0aGlzLl9pc09uID0gaXNPbih0aGlzLnN0YXRlT2JqKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF90b2dnbGVDaGFuZ2VkKGV2KSB7XG4gICAgY29uc3QgbmV3VmFsID0gZXYudGFyZ2V0LmNoZWNrZWQ7XG5cbiAgICBpZiAobmV3VmFsICE9PSB0aGlzLl9pc09uKSB7XG4gICAgICB0aGlzLl9jYWxsU2VydmljZShuZXdWYWwpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX3R1cm5PbigpIHtcbiAgICB0aGlzLl9jYWxsU2VydmljZSh0cnVlKTtcbiAgfVxuXG4gIHByaXZhdGUgX3R1cm5PZmYoKSB7XG4gICAgdGhpcy5fY2FsbFNlcnZpY2UoZmFsc2UpO1xuICB9XG5cbiAgLy8gV2Ugd2lsbCBmb3JjZSBhIHJlLXJlbmRlciBhZnRlciBhIHN1Y2Nlc3NmdWwgY2FsbCB0byByZS1zeW5jIHRoZSB0b2dnbGVcbiAgLy8gd2l0aCB0aGUgc3RhdGUuIEl0IHdpbGwgYmUgb3V0IG9mIHN5bmMgaWYgb3VyIHNlcnZpY2UgY2FsbCBkaWQgbm90XG4gIC8vIHJlc3VsdCBpbiB0aGUgZW50aXR5IHRvIGJlIHR1cm5lZCBvbi4gU2luY2UgdGhlIHN0YXRlIGlzIG5vdCBjaGFuZ2luZyxcbiAgLy8gdGhlIHJlc3luYyBpcyBub3QgY2FsbGVkIGF1dG9tYXRpYy5cbiAgcHJpdmF0ZSBhc3luYyBfY2FsbFNlcnZpY2UodHVybk9uKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgaWYgKCF0aGlzLmhhc3MgfHwgIXRoaXMuc3RhdGVPYmopIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZm9yd2FyZEhhcHRpYyhcImxpZ2h0XCIpO1xuICAgIGNvbnN0IHN0YXRlRG9tYWluID0gY29tcHV0ZVN0YXRlRG9tYWluKHRoaXMuc3RhdGVPYmopO1xuICAgIGxldCBzZXJ2aWNlRG9tYWluO1xuICAgIGxldCBzZXJ2aWNlO1xuXG4gICAgaWYgKHN0YXRlRG9tYWluID09PSBcImxvY2tcIikge1xuICAgICAgc2VydmljZURvbWFpbiA9IFwibG9ja1wiO1xuICAgICAgc2VydmljZSA9IHR1cm5PbiA/IFwidW5sb2NrXCIgOiBcImxvY2tcIjtcbiAgICB9IGVsc2UgaWYgKHN0YXRlRG9tYWluID09PSBcImNvdmVyXCIpIHtcbiAgICAgIHNlcnZpY2VEb21haW4gPSBcImNvdmVyXCI7XG4gICAgICBzZXJ2aWNlID0gdHVybk9uID8gXCJvcGVuX2NvdmVyXCIgOiBcImNsb3NlX2NvdmVyXCI7XG4gICAgfSBlbHNlIGlmIChzdGF0ZURvbWFpbiA9PT0gXCJncm91cFwiKSB7XG4gICAgICBzZXJ2aWNlRG9tYWluID0gXCJob21lYXNzaXN0YW50XCI7XG4gICAgICBzZXJ2aWNlID0gdHVybk9uID8gXCJ0dXJuX29uXCIgOiBcInR1cm5fb2ZmXCI7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNlcnZpY2VEb21haW4gPSBzdGF0ZURvbWFpbjtcbiAgICAgIHNlcnZpY2UgPSB0dXJuT24gPyBcInR1cm5fb25cIiA6IFwidHVybl9vZmZcIjtcbiAgICB9XG5cbiAgICBjb25zdCBjdXJyZW50U3RhdGUgPSB0aGlzLnN0YXRlT2JqO1xuXG4gICAgLy8gT3B0aW1pc3RpYyB1cGRhdGUuXG4gICAgdGhpcy5faXNPbiA9IHR1cm5PbjtcblxuICAgIGF3YWl0IHRoaXMuaGFzcy5jYWxsU2VydmljZShzZXJ2aWNlRG9tYWluLCBzZXJ2aWNlLCB7XG4gICAgICBlbnRpdHlfaWQ6IHRoaXMuc3RhdGVPYmouZW50aXR5X2lkLFxuICAgIH0pO1xuXG4gICAgc2V0VGltZW91dChhc3luYyAoKSA9PiB7XG4gICAgICAvLyBJZiBhZnRlciAyIHNlY29uZHMgd2UgaGF2ZSBub3QgcmVjZWl2ZWQgYSBzdGF0ZSB1cGRhdGVcbiAgICAgIC8vIHJlc2V0IHRoZSBzd2l0Y2ggdG8gaXQncyBvcmlnaW5hbCBzdGF0ZS5cbiAgICAgIGlmICh0aGlzLnN0YXRlT2JqID09PSBjdXJyZW50U3RhdGUpIHtcbiAgICAgICAgdGhpcy5faXNPbiA9IGlzT24odGhpcy5zdGF0ZU9iaik7XG4gICAgICB9XG4gICAgfSwgMjAwMCk7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHN0eWxlcygpOiBDU1NSZXN1bHQge1xuICAgIHJldHVybiBjc3NgXG4gICAgICA6aG9zdCB7XG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgIG1pbi13aWR0aDogMzhweDtcbiAgICAgIH1cbiAgICAgIHBhcGVyLWljb24tYnV0dG9uIHtcbiAgICAgICAgY29sb3I6IHZhcihcbiAgICAgICAgICAtLXBhcGVyLWljb24tYnV0dG9uLWluYWN0aXZlLWNvbG9yLFxuICAgICAgICAgIHZhcigtLXByaW1hcnktdGV4dC1jb2xvcilcbiAgICAgICAgKTtcbiAgICAgICAgdHJhbnNpdGlvbjogY29sb3IgMC41cztcbiAgICAgIH1cbiAgICAgIHBhcGVyLWljb24tYnV0dG9uW3N0YXRlLWFjdGl2ZV0ge1xuICAgICAgICBjb2xvcjogdmFyKC0tcGFwZXItaWNvbi1idXR0b24tYWN0aXZlLWNvbG9yLCB2YXIoLS1wcmltYXJ5LWNvbG9yKSk7XG4gICAgICB9XG4gICAgICBoYS1zd2l0Y2gge1xuICAgICAgICBwYWRkaW5nOiAxM3B4IDVweDtcbiAgICAgIH1cbiAgICBgO1xuICB9XG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcImhhLWVudGl0eS10b2dnbGVcIiwgSGFFbnRpdHlUb2dnbGUpO1xuIiwiaW1wb3J0IHsgQ29uc3RydWN0b3IsIGN1c3RvbUVsZW1lbnQsIENTU1Jlc3VsdCwgY3NzLCBxdWVyeSB9IGZyb20gXCJsaXQtZWxlbWVudFwiO1xuaW1wb3J0IFwiQG1hdGVyaWFsL213Yy1zd2l0Y2hcIjtcbmltcG9ydCB7IHN0eWxlIH0gZnJvbSBcIkBtYXRlcmlhbC9td2Mtc3dpdGNoL213Yy1zd2l0Y2gtY3NzXCI7XG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcbmltcG9ydCB7IFN3aXRjaCB9IGZyb20gXCJAbWF0ZXJpYWwvbXdjLXN3aXRjaFwiO1xuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG5jb25zdCBNd2NTd2l0Y2ggPSBjdXN0b21FbGVtZW50cy5nZXQoXCJtd2Mtc3dpdGNoXCIpIGFzIENvbnN0cnVjdG9yPFN3aXRjaD47XG5cbkBjdXN0b21FbGVtZW50KFwiaGEtc3dpdGNoXCIpXG5leHBvcnQgY2xhc3MgSGFTd2l0Y2ggZXh0ZW5kcyBNd2NTd2l0Y2gge1xuICBAcXVlcnkoXCJzbG90XCIpIHByaXZhdGUgX3Nsb3QhOiBIVE1MU2xvdEVsZW1lbnQ7XG5cbiAgcHJvdGVjdGVkIGZpcnN0VXBkYXRlZCgpIHtcbiAgICBzdXBlci5maXJzdFVwZGF0ZWQoKTtcbiAgICB0aGlzLnN0eWxlLnNldFByb3BlcnR5KFwiLS1tZGMtdGhlbWUtc2Vjb25kYXJ5XCIsIFwidmFyKC0tcHJpbWFyeS1jb2xvcilcIik7XG4gICAgdGhpcy5jbGFzc0xpc3QudG9nZ2xlKFxuICAgICAgXCJzbG90dGVkXCIsXG4gICAgICBCb29sZWFuKHRoaXMuX3Nsb3QuYXNzaWduZWROb2RlcygpLmxlbmd0aClcbiAgICApO1xuICB9XG5cbiAgcHJvdGVjdGVkIHN0YXRpYyBnZXQgc3R5bGVzKCk6IENTU1Jlc3VsdFtdIHtcbiAgICByZXR1cm4gW1xuICAgICAgc3R5bGUsXG4gICAgICBjc3NgXG4gICAgICAgIDpob3N0IHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgfVxuICAgICAgICAubWRjLXN3aXRjaDpub3QoLm1kYy1zd2l0Y2gtLWNoZWNrZWQpIC5tZGMtc3dpdGNoX190aHVtYiB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcGFwZXItdG9nZ2xlLWJ1dHRvbi11bmNoZWNrZWQtYnV0dG9uLWNvbG9yKTtcbiAgICAgICAgICBib3JkZXItY29sb3I6IHZhcigtLXBhcGVyLXRvZ2dsZS1idXR0b24tdW5jaGVja2VkLWJ1dHRvbi1jb2xvcik7XG4gICAgICAgIH1cbiAgICAgICAgLm1kYy1zd2l0Y2g6bm90KC5tZGMtc3dpdGNoLS1jaGVja2VkKSAubWRjLXN3aXRjaF9fdHJhY2sge1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXBhcGVyLXRvZ2dsZS1idXR0b24tdW5jaGVja2VkLWJhci1jb2xvcik7XG4gICAgICAgICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1wYXBlci10b2dnbGUtYnV0dG9uLXVuY2hlY2tlZC1iYXItY29sb3IpO1xuICAgICAgICB9XG4gICAgICAgIDpob3N0KC5zbG90dGVkKSAubWRjLXN3aXRjaCB7XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAyNHB4O1xuICAgICAgICB9XG4gICAgICBgLFxuICAgIF07XG4gIH1cbn1cblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgSFRNTEVsZW1lbnRUYWdOYW1lTWFwIHtcbiAgICBcImhhLXN3aXRjaFwiOiBIYVN3aXRjaDtcbiAgfVxufVxuIiwiaW1wb3J0IHtcbiAgSGFzc0VudGl0eUJhc2UsXG4gIEhhc3NFbnRpdHlBdHRyaWJ1dGVCYXNlLFxufSBmcm9tIFwiaG9tZS1hc3Npc3RhbnQtanMtd2Vic29ja2V0XCI7XG5pbXBvcnQgeyBIb21lQXNzaXN0YW50IH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5pbXBvcnQgeyBuYXZpZ2F0ZSB9IGZyb20gXCIuLi9jb21tb24vbmF2aWdhdGVcIjtcblxuZXhwb3J0IGludGVyZmFjZSBBdXRvbWF0aW9uRW50aXR5IGV4dGVuZHMgSGFzc0VudGl0eUJhc2Uge1xuICBhdHRyaWJ1dGVzOiBIYXNzRW50aXR5QXR0cmlidXRlQmFzZSAmIHtcbiAgICBpZD86IHN0cmluZztcbiAgICBsYXN0X3RyaWdnZXJlZDogc3RyaW5nO1xuICB9O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEF1dG9tYXRpb25Db25maWcge1xuICBhbGlhczogc3RyaW5nO1xuICBkZXNjcmlwdGlvbjogc3RyaW5nO1xuICB0cmlnZ2VyOiBhbnlbXTtcbiAgY29uZGl0aW9uPzogYW55W107XG4gIGFjdGlvbjogYW55W107XG59XG5cbmV4cG9ydCBjb25zdCBkZWxldGVBdXRvbWF0aW9uID0gKGhhc3M6IEhvbWVBc3Npc3RhbnQsIGlkOiBzdHJpbmcpID0+XG4gIGhhc3MuY2FsbEFwaShcIkRFTEVURVwiLCBgY29uZmlnL2F1dG9tYXRpb24vY29uZmlnLyR7aWR9YCk7XG5cbmxldCBpbml0aXRpYWxBdXRvbWF0aW9uRWRpdG9yRGF0YTogUGFydGlhbDxBdXRvbWF0aW9uQ29uZmlnPiB8IHVuZGVmaW5lZDtcblxuZXhwb3J0IGNvbnN0IHNob3dBdXRvbWF0aW9uRWRpdG9yID0gKFxuICBlbDogSFRNTEVsZW1lbnQsXG4gIGRhdGE/OiBQYXJ0aWFsPEF1dG9tYXRpb25Db25maWc+XG4pID0+IHtcbiAgaW5pdGl0aWFsQXV0b21hdGlvbkVkaXRvckRhdGEgPSBkYXRhO1xuICBuYXZpZ2F0ZShlbCwgXCIvY29uZmlnL2F1dG9tYXRpb24vbmV3XCIpO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldEF1dG9tYXRpb25FZGl0b3JJbml0RGF0YSA9ICgpID0+IHtcbiAgY29uc3QgZGF0YSA9IGluaXRpdGlhbEF1dG9tYXRpb25FZGl0b3JEYXRhO1xuICBpbml0aXRpYWxBdXRvbWF0aW9uRWRpdG9yRGF0YSA9IHVuZGVmaW5lZDtcbiAgcmV0dXJuIGRhdGE7XG59O1xuIiwiaW1wb3J0IHtcbiAgTGl0RWxlbWVudCxcbiAgVGVtcGxhdGVSZXN1bHQsXG4gIGh0bWwsXG4gIENTU1Jlc3VsdCxcbiAgY3NzLFxuICBQcm9wZXJ0eURlY2xhcmF0aW9ucyxcbiAgUHJvcGVydHlWYWx1ZXMsXG59IGZyb20gXCJsaXQtZWxlbWVudFwiO1xuaW1wb3J0IFwiQHBvbHltZXIvYXBwLWxheW91dC9hcHAtaGVhZGVyL2FwcC1oZWFkZXJcIjtcbmltcG9ydCBcIkBwb2x5bWVyL2FwcC1sYXlvdXQvYXBwLXRvb2xiYXIvYXBwLXRvb2xiYXJcIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWljb24tYnV0dG9uL3BhcGVyLWljb24tYnV0dG9uXCI7XG5pbXBvcnQgeyBjbGFzc01hcCB9IGZyb20gXCJsaXQtaHRtbC9kaXJlY3RpdmVzL2NsYXNzLW1hcFwiO1xuXG5pbXBvcnQgeyBoLCByZW5kZXIgfSBmcm9tIFwicHJlYWN0XCI7XG5cbmltcG9ydCBcIi4uLy4uLy4uL2NvbXBvbmVudHMvaGEtZmFiXCI7XG5pbXBvcnQgXCIuLi8uLi8uLi9jb21wb25lbnRzL2hhLXBhcGVyLWljb24tYnV0dG9uLWFycm93LXByZXZcIjtcbmltcG9ydCBcIi4uLy4uLy4uL2xheW91dHMvaGEtYXBwLWxheW91dFwiO1xuXG5pbXBvcnQgQXV0b21hdGlvbiBmcm9tIFwiLi4vanMvYXV0b21hdGlvblwiO1xuaW1wb3J0IHVubW91bnRQcmVhY3QgZnJvbSBcIi4uLy4uLy4uL2NvbW1vbi9wcmVhY3QvdW5tb3VudFwiO1xuaW1wb3J0IHsgY29tcHV0ZVN0YXRlTmFtZSB9IGZyb20gXCIuLi8uLi8uLi9jb21tb24vZW50aXR5L2NvbXB1dGVfc3RhdGVfbmFtZVwiO1xuXG5pbXBvcnQgeyBoYVN0eWxlIH0gZnJvbSBcIi4uLy4uLy4uL3Jlc291cmNlcy9zdHlsZXNcIjtcbmltcG9ydCB7IEhvbWVBc3Npc3RhbnQgfSBmcm9tIFwiLi4vLi4vLi4vdHlwZXNcIjtcbmltcG9ydCB7XG4gIEF1dG9tYXRpb25FbnRpdHksXG4gIEF1dG9tYXRpb25Db25maWcsXG4gIGRlbGV0ZUF1dG9tYXRpb24sXG4gIGdldEF1dG9tYXRpb25FZGl0b3JJbml0RGF0YSxcbn0gZnJvbSBcIi4uLy4uLy4uL2RhdGEvYXV0b21hdGlvblwiO1xuaW1wb3J0IHsgbmF2aWdhdGUgfSBmcm9tIFwiLi4vLi4vLi4vY29tbW9uL25hdmlnYXRlXCI7XG5pbXBvcnQgeyBjb21wdXRlUlRMIH0gZnJvbSBcIi4uLy4uLy4uL2NvbW1vbi91dGlsL2NvbXB1dGVfcnRsXCI7XG5cbmZ1bmN0aW9uIEF1dG9tYXRpb25FZGl0b3IobW91bnRFbCwgcHJvcHMsIG1lcmdlRWwpIHtcbiAgcmV0dXJuIHJlbmRlcihoKEF1dG9tYXRpb24sIHByb3BzKSwgbW91bnRFbCwgbWVyZ2VFbCk7XG59XG5cbmV4cG9ydCBjbGFzcyBIYUF1dG9tYXRpb25FZGl0b3IgZXh0ZW5kcyBMaXRFbGVtZW50IHtcbiAgcHVibGljIGhhc3MhOiBIb21lQXNzaXN0YW50O1xuICBwdWJsaWMgYXV0b21hdGlvbiE6IEF1dG9tYXRpb25FbnRpdHk7XG4gIHB1YmxpYyBpc1dpZGU/OiBib29sZWFuO1xuICBwdWJsaWMgY3JlYXRpbmdOZXc/OiBib29sZWFuO1xuICBwcml2YXRlIF9jb25maWc/OiBBdXRvbWF0aW9uQ29uZmlnO1xuICBwcml2YXRlIF9kaXJ0eT86IGJvb2xlYW47XG4gIHByaXZhdGUgX3JlbmRlcmVkPzogdW5rbm93bjtcbiAgcHJpdmF0ZSBfZXJyb3JzPzogc3RyaW5nO1xuXG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpOiBQcm9wZXJ0eURlY2xhcmF0aW9ucyB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGhhc3M6IHt9LFxuICAgICAgYXV0b21hdGlvbjoge30sXG4gICAgICBjcmVhdGluZ05ldzoge30sXG4gICAgICBpc1dpZGU6IHt9LFxuICAgICAgX2Vycm9yczoge30sXG4gICAgICBfZGlydHk6IHt9LFxuICAgICAgX2NvbmZpZzoge30sXG4gICAgfTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5fY29uZmlnQ2hhbmdlZCA9IHRoaXMuX2NvbmZpZ0NoYW5nZWQuYmluZCh0aGlzKTtcbiAgfVxuXG4gIHB1YmxpYyBkaXNjb25uZWN0ZWRDYWxsYmFjaygpOiB2b2lkIHtcbiAgICBzdXBlci5kaXNjb25uZWN0ZWRDYWxsYmFjaygpO1xuICAgIGlmICh0aGlzLl9yZW5kZXJlZCkge1xuICAgICAgdW5tb3VudFByZWFjdCh0aGlzLl9yZW5kZXJlZCk7XG4gICAgICB0aGlzLl9yZW5kZXJlZCA9IHVuZGVmaW5lZDtcbiAgICB9XG4gIH1cblxuICBwcm90ZWN0ZWQgcmVuZGVyKCk6IFRlbXBsYXRlUmVzdWx0IHwgdm9pZCB7XG4gICAgaWYgKCF0aGlzLmhhc3MpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8aGEtYXBwLWxheW91dCBoYXMtc2Nyb2xsaW5nLXJlZ2lvbj5cbiAgICAgICAgPGFwcC1oZWFkZXIgc2xvdD1cImhlYWRlclwiIGZpeGVkPlxuICAgICAgICAgIDxhcHAtdG9vbGJhcj5cbiAgICAgICAgICAgIDxoYS1wYXBlci1pY29uLWJ1dHRvbi1hcnJvdy1wcmV2XG4gICAgICAgICAgICAgIEBjbGljaz0ke3RoaXMuX2JhY2tUYXBwZWR9XG4gICAgICAgICAgICA+PC9oYS1wYXBlci1pY29uLWJ1dHRvbi1hcnJvdy1wcmV2PlxuICAgICAgICAgICAgPGRpdiBtYWluLXRpdGxlPlxuICAgICAgICAgICAgICAke3RoaXMuYXV0b21hdGlvblxuICAgICAgICAgICAgICAgID8gY29tcHV0ZVN0YXRlTmFtZSh0aGlzLmF1dG9tYXRpb24pXG4gICAgICAgICAgICAgICAgOiB0aGlzLmhhc3MubG9jYWxpemUoXG4gICAgICAgICAgICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLmF1dG9tYXRpb24uZWRpdG9yLmRlZmF1bHRfbmFtZVwiXG4gICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAke3RoaXMuY3JlYXRpbmdOZXdcbiAgICAgICAgICAgICAgPyBcIlwiXG4gICAgICAgICAgICAgIDogaHRtbGBcbiAgICAgICAgICAgICAgICAgIDxwYXBlci1pY29uLWJ1dHRvblxuICAgICAgICAgICAgICAgICAgICBpY29uPVwiaGFzczpkZWxldGVcIlxuICAgICAgICAgICAgICAgICAgICBAY2xpY2s9JHt0aGlzLl9kZWxldGV9XG4gICAgICAgICAgICAgICAgICA+PC9wYXBlci1pY29uLWJ1dHRvbj5cbiAgICAgICAgICAgICAgICBgfVxuICAgICAgICAgIDwvYXBwLXRvb2xiYXI+XG4gICAgICAgIDwvYXBwLWhlYWRlcj5cblxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGVudFwiPlxuICAgICAgICAgICR7dGhpcy5fZXJyb3JzXG4gICAgICAgICAgICA/IGh0bWxgXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImVycm9yc1wiPiR7dGhpcy5fZXJyb3JzfTwvZGl2PlxuICAgICAgICAgICAgICBgXG4gICAgICAgICAgICA6IFwiXCJ9XG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgaWQ9XCJyb290XCJcbiAgICAgICAgICAgIGNsYXNzPVwiJHtjbGFzc01hcCh7XG4gICAgICAgICAgICAgIHJ0bDogY29tcHV0ZVJUTCh0aGlzLmhhc3MpLFxuICAgICAgICAgICAgfSl9XCJcbiAgICAgICAgICA+PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8aGEtZmFiXG4gICAgICAgICAgc2xvdD1cImZhYlwiXG4gICAgICAgICAgP2lzLXdpZGU9XCIke3RoaXMuaXNXaWRlfVwiXG4gICAgICAgICAgP2RpcnR5PVwiJHt0aGlzLl9kaXJ0eX1cIlxuICAgICAgICAgIGljb249XCJoYXNzOmNvbnRlbnQtc2F2ZVwiXG4gICAgICAgICAgLnRpdGxlPVwiJHt0aGlzLmhhc3MubG9jYWxpemUoXG4gICAgICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy5hdXRvbWF0aW9uLmVkaXRvci5zYXZlXCJcbiAgICAgICAgICApfVwiXG4gICAgICAgICAgQGNsaWNrPSR7dGhpcy5fc2F2ZUF1dG9tYXRpb259XG4gICAgICAgICAgY2xhc3M9XCIke2NsYXNzTWFwKHtcbiAgICAgICAgICAgIHJ0bDogY29tcHV0ZVJUTCh0aGlzLmhhc3MpLFxuICAgICAgICAgIH0pfVwiXG4gICAgICAgID48L2hhLWZhYj5cbiAgICAgIDwvaGEtYXBwLWxheW91dD5cbiAgICBgO1xuICB9XG5cbiAgcHJvdGVjdGVkIHVwZGF0ZWQoY2hhbmdlZFByb3BzOiBQcm9wZXJ0eVZhbHVlcyk6IHZvaWQge1xuICAgIHN1cGVyLnVwZGF0ZWQoY2hhbmdlZFByb3BzKTtcblxuICAgIGNvbnN0IG9sZEF1dG9tYXRpb24gPSBjaGFuZ2VkUHJvcHMuZ2V0KFwiYXV0b21hdGlvblwiKSBhcyBBdXRvbWF0aW9uRW50aXR5O1xuICAgIGlmIChcbiAgICAgIGNoYW5nZWRQcm9wcy5oYXMoXCJhdXRvbWF0aW9uXCIpICYmXG4gICAgICB0aGlzLmF1dG9tYXRpb24gJiZcbiAgICAgIHRoaXMuaGFzcyAmJlxuICAgICAgLy8gT25seSByZWZyZXNoIGNvbmZpZyBpZiB3ZSBwaWNrZWQgYSBuZXcgYXV0b21hdGlvbi4gSWYgc2FtZSBJRCwgZG9uJ3QgZmV0Y2ggaXQuXG4gICAgICAoIW9sZEF1dG9tYXRpb24gfHxcbiAgICAgICAgb2xkQXV0b21hdGlvbi5hdHRyaWJ1dGVzLmlkICE9PSB0aGlzLmF1dG9tYXRpb24uYXR0cmlidXRlcy5pZClcbiAgICApIHtcbiAgICAgIHRoaXMuaGFzc1xuICAgICAgICAuY2FsbEFwaTxBdXRvbWF0aW9uQ29uZmlnPihcbiAgICAgICAgICBcIkdFVFwiLFxuICAgICAgICAgIGBjb25maWcvYXV0b21hdGlvbi9jb25maWcvJHt0aGlzLmF1dG9tYXRpb24uYXR0cmlidXRlcy5pZH1gXG4gICAgICAgIClcbiAgICAgICAgLnRoZW4oXG4gICAgICAgICAgKGNvbmZpZykgPT4ge1xuICAgICAgICAgICAgLy8gTm9ybWFsaXplIGRhdGE6IGVuc3VyZSB0cmlnZ2VyLCBhY3Rpb24gYW5kIGNvbmRpdGlvbiBhcmUgbGlzdHNcbiAgICAgICAgICAgIC8vIEhhcHBlbnMgd2hlbiBwZW9wbGUgY29weSBwYXN0ZSB0aGVpciBhdXRvbWF0aW9ucyBpbnRvIHRoZSBjb25maWdcbiAgICAgICAgICAgIGZvciAoY29uc3Qga2V5IG9mIFtcInRyaWdnZXJcIiwgXCJjb25kaXRpb25cIiwgXCJhY3Rpb25cIl0pIHtcbiAgICAgICAgICAgICAgY29uc3QgdmFsdWUgPSBjb25maWdba2V5XTtcbiAgICAgICAgICAgICAgaWYgKHZhbHVlICYmICFBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgICAgICAgICAgIGNvbmZpZ1trZXldID0gW3ZhbHVlXTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5fZGlydHkgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuX2NvbmZpZyA9IGNvbmZpZztcbiAgICAgICAgICB9LFxuICAgICAgICAgIChyZXNwKSA9PiB7XG4gICAgICAgICAgICBhbGVydChcbiAgICAgICAgICAgICAgcmVzcC5zdGF0dXNfY29kZSA9PT0gNDA0XG4gICAgICAgICAgICAgICAgPyB0aGlzLmhhc3MubG9jYWxpemUoXG4gICAgICAgICAgICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLmF1dG9tYXRpb24uZWRpdG9yLmxvYWRfZXJyb3Jfbm90X2VkaXRhYmxlXCJcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICA6IHRoaXMuaGFzcy5sb2NhbGl6ZShcbiAgICAgICAgICAgICAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcuYXV0b21hdGlvbi5lZGl0b3IubG9hZF9lcnJvcl91bmtub3duXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiZXJyX25vXCIsXG4gICAgICAgICAgICAgICAgICAgIHJlc3Auc3RhdHVzX2NvZGVcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBoaXN0b3J5LmJhY2soKTtcbiAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgaWYgKGNoYW5nZWRQcm9wcy5oYXMoXCJjcmVhdGluZ05ld1wiKSAmJiB0aGlzLmNyZWF0aW5nTmV3ICYmIHRoaXMuaGFzcykge1xuICAgICAgdGhpcy5fZGlydHkgPSBmYWxzZTtcbiAgICAgIHRoaXMuX2NvbmZpZyA9IHtcbiAgICAgICAgYWxpYXM6IHRoaXMuaGFzcy5sb2NhbGl6ZShcbiAgICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy5hdXRvbWF0aW9uLmVkaXRvci5kZWZhdWx0X25hbWVcIlxuICAgICAgICApLFxuICAgICAgICBkZXNjcmlwdGlvbjogXCJcIixcbiAgICAgICAgdHJpZ2dlcjogW3sgcGxhdGZvcm06IFwic3RhdGVcIiB9XSxcbiAgICAgICAgY29uZGl0aW9uOiBbXSxcbiAgICAgICAgYWN0aW9uOiBbeyBzZXJ2aWNlOiBcIlwiIH1dLFxuICAgICAgICAuLi5nZXRBdXRvbWF0aW9uRWRpdG9ySW5pdERhdGEoKSxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgaWYgKGNoYW5nZWRQcm9wcy5oYXMoXCJfY29uZmlnXCIpICYmIHRoaXMuaGFzcykge1xuICAgICAgdGhpcy5fcmVuZGVyZWQgPSBBdXRvbWF0aW9uRWRpdG9yKFxuICAgICAgICB0aGlzLnNoYWRvd1Jvb3QhLnF1ZXJ5U2VsZWN0b3IoXCIjcm9vdFwiKSxcbiAgICAgICAge1xuICAgICAgICAgIGF1dG9tYXRpb246IHRoaXMuX2NvbmZpZyxcbiAgICAgICAgICBvbkNoYW5nZTogdGhpcy5fY29uZmlnQ2hhbmdlZCxcbiAgICAgICAgICBpc1dpZGU6IHRoaXMuaXNXaWRlLFxuICAgICAgICAgIGhhc3M6IHRoaXMuaGFzcyxcbiAgICAgICAgICBsb2NhbGl6ZTogdGhpcy5oYXNzLmxvY2FsaXplLFxuICAgICAgICB9LFxuICAgICAgICB0aGlzLl9yZW5kZXJlZFxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9jb25maWdDaGFuZ2VkKGNvbmZpZzogQXV0b21hdGlvbkNvbmZpZyk6IHZvaWQge1xuICAgIC8vIG9uQ2hhbmdlIGdldHMgY2FsbGVkIGEgbG90IGR1cmluZyBpbml0aWFsIHJlbmRlcmluZyBjYXVzaW5nIHJlY3Vyc2luZyBjYWxscy5cbiAgICBpZiAoIXRoaXMuX3JlbmRlcmVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuX2NvbmZpZyA9IGNvbmZpZztcbiAgICB0aGlzLl9lcnJvcnMgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5fZGlydHkgPSB0cnVlO1xuICB9XG5cbiAgcHJpdmF0ZSBfYmFja1RhcHBlZCgpOiB2b2lkIHtcbiAgICBpZiAoXG4gICAgICB0aGlzLl9kaXJ0eSAmJlxuICAgICAgIWNvbmZpcm0oXG4gICAgICAgIHRoaXMuaGFzcyEubG9jYWxpemUoXCJ1aS5wYW5lbC5jb25maWcuYXV0b21hdGlvbi5lZGl0b3IudW5zYXZlZF9jb25maXJtXCIpXG4gICAgICApXG4gICAgKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGhpc3RvcnkuYmFjaygpO1xuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBfZGVsZXRlKCkge1xuICAgIGlmICghY29uZmlybShcIkFyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBkZWxldGUgdGhpcyBhdXRvbWF0aW9uP1wiKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBhd2FpdCBkZWxldGVBdXRvbWF0aW9uKHRoaXMuaGFzcywgdGhpcy5hdXRvbWF0aW9uLmF0dHJpYnV0ZXMuaWQhKTtcbiAgICBoaXN0b3J5LmJhY2soKTtcbiAgfVxuXG4gIHByaXZhdGUgX3NhdmVBdXRvbWF0aW9uKCk6IHZvaWQge1xuICAgIGNvbnN0IGlkID0gdGhpcy5jcmVhdGluZ05ld1xuICAgICAgPyBcIlwiICsgRGF0ZS5ub3coKVxuICAgICAgOiB0aGlzLmF1dG9tYXRpb24uYXR0cmlidXRlcy5pZDtcbiAgICB0aGlzLmhhc3MhLmNhbGxBcGkoXG4gICAgICBcIlBPU1RcIixcbiAgICAgIFwiY29uZmlnL2F1dG9tYXRpb24vY29uZmlnL1wiICsgaWQsXG4gICAgICB0aGlzLl9jb25maWdcbiAgICApLnRoZW4oXG4gICAgICAoKSA9PiB7XG4gICAgICAgIHRoaXMuX2RpcnR5ID0gZmFsc2U7XG5cbiAgICAgICAgaWYgKHRoaXMuY3JlYXRpbmdOZXcpIHtcbiAgICAgICAgICBuYXZpZ2F0ZSh0aGlzLCBgL2NvbmZpZy9hdXRvbWF0aW9uL2VkaXQvJHtpZH1gLCB0cnVlKTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIChlcnJvcnMpID0+IHtcbiAgICAgICAgdGhpcy5fZXJyb3JzID0gZXJyb3JzLmJvZHkubWVzc2FnZTtcbiAgICAgICAgdGhyb3cgZXJyb3JzO1xuICAgICAgfVxuICAgICk7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHN0eWxlcygpOiBDU1NSZXN1bHRbXSB7XG4gICAgcmV0dXJuIFtcbiAgICAgIGhhU3R5bGUsXG4gICAgICBjc3NgXG4gICAgICAgIGhhLWNhcmQge1xuICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIH1cbiAgICAgICAgLmVycm9ycyB7XG4gICAgICAgICAgcGFkZGluZzogMjBweDtcbiAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICBjb2xvcjogdmFyKC0tZ29vZ2xlLXJlZC01MDApO1xuICAgICAgICB9XG4gICAgICAgIC5jb250ZW50IHtcbiAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbiAgICAgICAgfVxuICAgICAgICAudHJpZ2dlcnMsXG4gICAgICAgIC5zY3JpcHQge1xuICAgICAgICAgIG1hcmdpbi10b3A6IC0xNnB4O1xuICAgICAgICB9XG4gICAgICAgIC50cmlnZ2VycyBoYS1jYXJkLFxuICAgICAgICAuc2NyaXB0IGhhLWNhcmQge1xuICAgICAgICAgIG1hcmdpbi10b3A6IDE2cHg7XG4gICAgICAgIH1cbiAgICAgICAgLmFkZC1jYXJkIG13Yy1idXR0b24ge1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgfVxuICAgICAgICAuY2FyZC1tZW51IHtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICAgIHotaW5kZXg6IDE7XG4gICAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnktdGV4dC1jb2xvcik7XG4gICAgICAgIH1cbiAgICAgICAgLnJ0bCAuY2FyZC1tZW51IHtcbiAgICAgICAgICByaWdodDogYXV0bztcbiAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICB9XG4gICAgICAgIC5jYXJkLW1lbnUgcGFwZXItaXRlbSB7XG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICB9XG4gICAgICAgIHNwYW5bc2xvdD1cImludHJvZHVjdGlvblwiXSBhIHtcbiAgICAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XG4gICAgICAgIH1cbiAgICAgICAgaGEtZmFiIHtcbiAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgICAgYm90dG9tOiAxNnB4O1xuICAgICAgICAgIHJpZ2h0OiAxNnB4O1xuICAgICAgICAgIHotaW5kZXg6IDE7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogLTgwcHg7XG4gICAgICAgICAgdHJhbnNpdGlvbjogbWFyZ2luLWJvdHRvbSAwLjNzO1xuICAgICAgICB9XG5cbiAgICAgICAgaGEtZmFiW2lzLXdpZGVdIHtcbiAgICAgICAgICBib3R0b206IDI0cHg7XG4gICAgICAgICAgcmlnaHQ6IDI0cHg7XG4gICAgICAgIH1cblxuICAgICAgICBoYS1mYWJbZGlydHldIHtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgICAgICB9XG5cbiAgICAgICAgaGEtZmFiLnJ0bCB7XG4gICAgICAgICAgcmlnaHQ6IGF1dG87XG4gICAgICAgICAgbGVmdDogMTZweDtcbiAgICAgICAgfVxuXG4gICAgICAgIGhhLWZhYltpcy13aWRlXS5ydGwge1xuICAgICAgICAgIGJvdHRvbTogMjRweDtcbiAgICAgICAgICByaWdodDogYXV0bztcbiAgICAgICAgICBsZWZ0OiAyNHB4O1xuICAgICAgICB9XG4gICAgICBgLFxuICAgIF07XG4gIH1cbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwiaGEtYXV0b21hdGlvbi1lZGl0b3JcIiwgSGFBdXRvbWF0aW9uRWRpdG9yKTtcbiIsImltcG9ydCB7XG4gIExpdEVsZW1lbnQsXG4gIFRlbXBsYXRlUmVzdWx0LFxuICBodG1sLFxuICBDU1NSZXN1bHRBcnJheSxcbiAgY3NzLFxuICBwcm9wZXJ0eSxcbiAgY3VzdG9tRWxlbWVudCxcbn0gZnJvbSBcImxpdC1lbGVtZW50XCI7XG5pbXBvcnQgeyBpZkRlZmluZWQgfSBmcm9tIFwibGl0LWh0bWwvZGlyZWN0aXZlcy9pZi1kZWZpbmVkXCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1pY29uLWJ1dHRvbi9wYXBlci1pY29uLWJ1dHRvblwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItaXRlbS9wYXBlci1pdGVtLWJvZHlcIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLXRvb2x0aXAvcGFwZXItdG9vbHRpcFwiO1xuaW1wb3J0IFwiLi4vLi4vLi4vbGF5b3V0cy9oYXNzLXN1YnBhZ2VcIjtcblxuaW1wb3J0IFwiLi4vLi4vLi4vY29tcG9uZW50cy9oYS1jYXJkXCI7XG5pbXBvcnQgXCIuLi8uLi8uLi9jb21wb25lbnRzL2hhLWZhYlwiO1xuaW1wb3J0IFwiLi4vLi4vLi4vY29tcG9uZW50cy9lbnRpdHkvaGEtZW50aXR5LXRvZ2dsZVwiO1xuXG5pbXBvcnQgXCIuLi9oYS1jb25maWctc2VjdGlvblwiO1xuXG5pbXBvcnQgeyBjb21wdXRlU3RhdGVOYW1lIH0gZnJvbSBcIi4uLy4uLy4uL2NvbW1vbi9lbnRpdHkvY29tcHV0ZV9zdGF0ZV9uYW1lXCI7XG5pbXBvcnQgeyBjb21wdXRlUlRMIH0gZnJvbSBcIi4uLy4uLy4uL2NvbW1vbi91dGlsL2NvbXB1dGVfcnRsXCI7XG5pbXBvcnQgeyBoYVN0eWxlIH0gZnJvbSBcIi4uLy4uLy4uL3Jlc291cmNlcy9zdHlsZXNcIjtcbmltcG9ydCB7IEhvbWVBc3Npc3RhbnQgfSBmcm9tIFwiLi4vLi4vLi4vdHlwZXNcIjtcbmltcG9ydCB7IEF1dG9tYXRpb25FbnRpdHkgfSBmcm9tIFwiLi4vLi4vLi4vZGF0YS9hdXRvbWF0aW9uXCI7XG5pbXBvcnQgZm9ybWF0X2RhdGVfdGltZSBmcm9tIFwiLi4vLi4vLi4vY29tbW9uL2RhdGV0aW1lL2Zvcm1hdF9kYXRlX3RpbWVcIjtcbmltcG9ydCB7IGZpcmVFdmVudCB9IGZyb20gXCIuLi8uLi8uLi9jb21tb24vZG9tL2ZpcmVfZXZlbnRcIjtcblxuQGN1c3RvbUVsZW1lbnQoXCJoYS1hdXRvbWF0aW9uLXBpY2tlclwiKVxuY2xhc3MgSGFBdXRvbWF0aW9uUGlja2VyIGV4dGVuZHMgTGl0RWxlbWVudCB7XG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyBoYXNzITogSG9tZUFzc2lzdGFudDtcbiAgQHByb3BlcnR5KCkgcHVibGljIGlzV2lkZSE6IGJvb2xlYW47XG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyBhdXRvbWF0aW9ucyE6IEF1dG9tYXRpb25FbnRpdHlbXTtcblxuICBwcm90ZWN0ZWQgcmVuZGVyKCk6IFRlbXBsYXRlUmVzdWx0IHwgdm9pZCB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8aGFzcy1zdWJwYWdlXG4gICAgICAgIC5oZWFkZXI9JHt0aGlzLmhhc3MubG9jYWxpemUoXCJ1aS5wYW5lbC5jb25maWcuYXV0b21hdGlvbi5jYXB0aW9uXCIpfVxuICAgICAgPlxuICAgICAgICA8aGEtY29uZmlnLXNlY3Rpb24gLmlzV2lkZT0ke3RoaXMuaXNXaWRlfT5cbiAgICAgICAgICA8ZGl2IHNsb3Q9XCJoZWFkZXJcIj5cbiAgICAgICAgICAgICR7dGhpcy5oYXNzLmxvY2FsaXplKFwidWkucGFuZWwuY29uZmlnLmF1dG9tYXRpb24ucGlja2VyLmhlYWRlclwiKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IHNsb3Q9XCJpbnRyb2R1Y3Rpb25cIj5cbiAgICAgICAgICAgICR7dGhpcy5oYXNzLmxvY2FsaXplKFxuICAgICAgICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy5hdXRvbWF0aW9uLnBpY2tlci5pbnRyb2R1Y3Rpb25cIlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgIGhyZWY9XCJodHRwczovL2hvbWUtYXNzaXN0YW50LmlvL2RvY3MvYXV0b21hdGlvbi9lZGl0b3IvXCJcbiAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgJHt0aGlzLmhhc3MubG9jYWxpemUoXG4gICAgICAgICAgICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy5hdXRvbWF0aW9uLnBpY2tlci5sZWFybl9tb3JlXCJcbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8aGEtY2FyZFxuICAgICAgICAgICAgLmhlYWRpbmc9JHt0aGlzLmhhc3MubG9jYWxpemUoXG4gICAgICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLmF1dG9tYXRpb24ucGlja2VyLnBpY2tfYXV0b21hdGlvblwiXG4gICAgICAgICAgICApfVxuICAgICAgICAgID5cbiAgICAgICAgICAgICR7dGhpcy5hdXRvbWF0aW9ucy5sZW5ndGggPT09IDBcbiAgICAgICAgICAgICAgPyBodG1sYFxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAke3RoaXMuaGFzcy5sb2NhbGl6ZShcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLmF1dG9tYXRpb24ucGlja2VyLm5vX2F1dG9tYXRpb25zXCJcbiAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICBgXG4gICAgICAgICAgICAgIDogdGhpcy5hdXRvbWF0aW9ucy5tYXAoXG4gICAgICAgICAgICAgICAgICAoYXV0b21hdGlvbikgPT4gaHRtbGBcblxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9J2F1dG9tYXRpb24nPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGhhLWVudGl0eS10b2dnbGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLmhhc3M9JHt0aGlzLmhhc3N9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIC5zdGF0ZU9iaj0ke2F1dG9tYXRpb259XG4gICAgICAgICAgICAgICAgICAgICAgICA+PC9oYS1lbnRpdHktdG9nZ2xlPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8cGFwZXItaXRlbS1ib2R5IHR3by1saW5lPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PiR7Y29tcHV0ZVN0YXRlTmFtZShhdXRvbWF0aW9uKX08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzZWNvbmRhcnk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgTGFzdCB0cmlnZ2VyZWQ6ICR7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdXRvbWF0aW9uLmF0dHJpYnV0ZXMubGFzdF90cmlnZ2VyZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBmb3JtYXRfZGF0ZV90aW1lKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3IERhdGUoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9tYXRpb24uYXR0cmlidXRlcy5sYXN0X3RyaWdnZXJlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaGFzcy5sYW5ndWFnZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIm5ldmVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wYXBlci1pdGVtLWJvZHk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSdhY3Rpb25zJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhcGVyLWljb24tYnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmF1dG9tYXRpb249JHthdXRvbWF0aW9ufVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBjbGljaz0ke3RoaXMuX3Nob3dJbmZvfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb249XCJoYXNzOmluZm9ybWF0aW9uLW91dGxpbmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICA+PC9wYXBlci1pY29uLWJ1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPSR7aWZEZWZpbmVkKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXV0b21hdGlvbi5hdHRyaWJ1dGVzLmlkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gYC9jb25maWcvYXV0b21hdGlvbi9lZGl0LyR7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdXRvbWF0aW9uLmF0dHJpYnV0ZXMuaWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9YFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IHVuZGVmaW5lZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGFwZXItaWNvbi1idXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb249XCJoYXNzOnBlbmNpbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZGlzYWJsZWQ9JHshYXV0b21hdGlvbi5hdHRyaWJ1dGVzLmlkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID48L3BhcGVyLWljb24tYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAhYXV0b21hdGlvbi5hdHRyaWJ1dGVzLmlkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gaHRtbGBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXBlci10b29sdGlwIHBvc2l0aW9uPVwibGVmdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBPbmx5IGF1dG9tYXRpb25zIGRlZmluZWQgaW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXV0b21hdGlvbnMueWFtbCBhcmUgZWRpdGFibGUuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3BhcGVyLXRvb2x0aXA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICBgXG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L2hhLWNhcmQ+XG4gICAgICAgIDwvaGEtY29uZmlnLXNlY3Rpb24+XG5cbiAgICAgICAgPGEgaHJlZj1cIi9jb25maWcvYXV0b21hdGlvbi9uZXdcIj5cbiAgICAgICAgICA8aGEtZmFiXG4gICAgICAgICAgICBzbG90PVwiZmFiXCJcbiAgICAgICAgICAgID9pcy13aWRlPSR7dGhpcy5pc1dpZGV9XG4gICAgICAgICAgICBpY29uPVwiaGFzczpwbHVzXCJcbiAgICAgICAgICAgIHRpdGxlPSR7dGhpcy5oYXNzLmxvY2FsaXplKFxuICAgICAgICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy5hdXRvbWF0aW9uLnBpY2tlci5hZGRfYXV0b21hdGlvblwiXG4gICAgICAgICAgICApfVxuICAgICAgICAgICAgP3J0bD0ke2NvbXB1dGVSVEwodGhpcy5oYXNzKX1cbiAgICAgICAgICA+PC9oYS1mYWJcbiAgICAgICAgPjwvYT5cbiAgICAgIDwvaGFzcy1zdWJwYWdlPlxuICAgIGA7XG4gIH1cblxuICBwcml2YXRlIF9zaG93SW5mbyhldikge1xuICAgIGNvbnN0IGVudGl0eUlkID0gZXYuY3VycmVudFRhcmdldC5hdXRvbWF0aW9uLmVudGl0eV9pZDtcbiAgICBmaXJlRXZlbnQodGhpcywgXCJoYXNzLW1vcmUtaW5mb1wiLCB7IGVudGl0eUlkIH0pO1xuICB9XG5cbiAgc3RhdGljIGdldCBzdHlsZXMoKTogQ1NTUmVzdWx0QXJyYXkge1xuICAgIHJldHVybiBbXG4gICAgICBoYVN0eWxlLFxuICAgICAgY3NzYFxuICAgICAgICA6aG9zdCB7XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIH1cblxuICAgICAgICBoYS1jYXJkIHtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1NnB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmF1dG9tYXRpb24ge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGhvcml6b250YWw7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICBwYWRkaW5nOiAwIDhweCAwIDE2cHg7XG4gICAgICAgIH1cblxuICAgICAgICAuYXV0b21hdGlvbiBhW2hyZWZdIHtcbiAgICAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS10ZXh0LWNvbG9yKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGhhLWVudGl0eS10b2dnbGUge1xuICAgICAgICAgIG1hcmdpbi1yaWdodDogMTZweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5hY3Rpb25zIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICB9XG5cbiAgICAgICAgaGEtZmFiIHtcbiAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgICAgYm90dG9tOiAxNnB4O1xuICAgICAgICAgIHJpZ2h0OiAxNnB4O1xuICAgICAgICAgIHotaW5kZXg6IDE7XG4gICAgICAgIH1cblxuICAgICAgICBoYS1mYWJbaXMtd2lkZV0ge1xuICAgICAgICAgIGJvdHRvbTogMjRweDtcbiAgICAgICAgICByaWdodDogMjRweDtcbiAgICAgICAgfVxuXG4gICAgICAgIGhhLWZhYltydGxdIHtcbiAgICAgICAgICByaWdodDogYXV0bztcbiAgICAgICAgICBsZWZ0OiAxNnB4O1xuICAgICAgICB9XG5cbiAgICAgICAgaGEtZmFiW3J0bF1baXMtd2lkZV0ge1xuICAgICAgICAgIGJvdHRvbTogMjRweDtcbiAgICAgICAgICByaWdodDogYXV0bztcbiAgICAgICAgICBsZWZ0OiAyNHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgYSB7XG4gICAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xuICAgICAgICB9XG4gICAgICBgLFxuICAgIF07XG4gIH1cbn1cblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgSFRNTEVsZW1lbnRUYWdOYW1lTWFwIHtcbiAgICBcImhhLWF1dG9tYXRpb24tcGlja2VyXCI6IEhhQXV0b21hdGlvblBpY2tlcjtcbiAgfVxufVxuIiwiaW1wb3J0IFwiQHBvbHltZXIvYXBwLXJvdXRlL2FwcC1yb3V0ZVwiO1xuaW1wb3J0IHsgaHRtbCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZ1wiO1xuaW1wb3J0IHsgUG9seW1lckVsZW1lbnQgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWVsZW1lbnRcIjtcblxuaW1wb3J0IFwiLi9oYS1hdXRvbWF0aW9uLWVkaXRvclwiO1xuaW1wb3J0IFwiLi9oYS1hdXRvbWF0aW9uLXBpY2tlclwiO1xuXG5pbXBvcnQgeyBjb21wdXRlU3RhdGVEb21haW4gfSBmcm9tIFwiLi4vLi4vLi4vY29tbW9uL2VudGl0eS9jb21wdXRlX3N0YXRlX2RvbWFpblwiO1xuXG5jbGFzcyBIYUNvbmZpZ0F1dG9tYXRpb24gZXh0ZW5kcyBQb2x5bWVyRWxlbWVudCB7XG4gIHN0YXRpYyBnZXQgdGVtcGxhdGUoKSB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8c3R5bGU+XG4gICAgICAgIGhhLWF1dG9tYXRpb24tcGlja2VyLFxuICAgICAgICBoYS1hdXRvbWF0aW9uLWVkaXRvciB7XG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICB9XG4gICAgICA8L3N0eWxlPlxuICAgICAgPGFwcC1yb3V0ZVxuICAgICAgICByb3V0ZT1cIltbcm91dGVdXVwiXG4gICAgICAgIHBhdHRlcm49XCIvZWRpdC86YXV0b21hdGlvblwiXG4gICAgICAgIGRhdGE9XCJ7e19yb3V0ZURhdGF9fVwiXG4gICAgICAgIGFjdGl2ZT1cInt7X2VkaXR0aW5nQXV0b21hdGlvbn19XCJcbiAgICAgID48L2FwcC1yb3V0ZT5cbiAgICAgIDxhcHAtcm91dGVcbiAgICAgICAgcm91dGU9XCJbW3JvdXRlXV1cIlxuICAgICAgICBwYXR0ZXJuPVwiL25ld1wiXG4gICAgICAgIGFjdGl2ZT1cInt7X2NyZWF0aW5nTmV3fX1cIlxuICAgICAgPjwvYXBwLXJvdXRlPlxuXG4gICAgICA8dGVtcGxhdGUgaXM9XCJkb20taWZcIiBpZj1cIltbIXNob3dFZGl0b3JdXVwiPlxuICAgICAgICA8aGEtYXV0b21hdGlvbi1waWNrZXJcbiAgICAgICAgICBoYXNzPVwiW1toYXNzXV1cIlxuICAgICAgICAgIGF1dG9tYXRpb25zPVwiW1thdXRvbWF0aW9uc11dXCJcbiAgICAgICAgICBpcy13aWRlPVwiW1tpc1dpZGVdXVwiXG4gICAgICAgID48L2hhLWF1dG9tYXRpb24tcGlja2VyPlxuICAgICAgPC90ZW1wbGF0ZT5cblxuICAgICAgPHRlbXBsYXRlIGlzPVwiZG9tLWlmXCIgaWY9XCJbW3Nob3dFZGl0b3JdXVwiIHJlc3RhbXA9XCJcIj5cbiAgICAgICAgPGhhLWF1dG9tYXRpb24tZWRpdG9yXG4gICAgICAgICAgaGFzcz1cIltbaGFzc11dXCJcbiAgICAgICAgICBhdXRvbWF0aW9uPVwiW1thdXRvbWF0aW9uXV1cIlxuICAgICAgICAgIGlzLXdpZGU9XCJbW2lzV2lkZV1dXCJcbiAgICAgICAgICBjcmVhdGluZy1uZXc9XCJbW19jcmVhdGluZ05ld11dXCJcbiAgICAgICAgPjwvaGEtYXV0b21hdGlvbi1lZGl0b3I+XG4gICAgICA8L3RlbXBsYXRlPlxuICAgIGA7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGhhc3M6IE9iamVjdCxcbiAgICAgIHJvdXRlOiBPYmplY3QsXG4gICAgICBpc1dpZGU6IEJvb2xlYW4sXG4gICAgICBfcm91dGVEYXRhOiBPYmplY3QsXG4gICAgICBfcm91dGVNYXRjaGVzOiBCb29sZWFuLFxuICAgICAgX2NyZWF0aW5nTmV3OiBCb29sZWFuLFxuICAgICAgX2VkaXR0aW5nQXV0b21hdGlvbjogQm9vbGVhbixcblxuICAgICAgYXV0b21hdGlvbnM6IHtcbiAgICAgICAgdHlwZTogQXJyYXksXG4gICAgICAgIGNvbXB1dGVkOiBcImNvbXB1dGVBdXRvbWF0aW9ucyhoYXNzKVwiLFxuICAgICAgfSxcblxuICAgICAgYXV0b21hdGlvbjoge1xuICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICAgIGNvbXB1dGVkOlxuICAgICAgICAgIFwiY29tcHV0ZUF1dG9tYXRpb24oYXV0b21hdGlvbnMsIF9lZGl0dGluZ0F1dG9tYXRpb24sIF9yb3V0ZURhdGEpXCIsXG4gICAgICB9LFxuXG4gICAgICBzaG93RWRpdG9yOiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIGNvbXB1dGVkOiBcImNvbXB1dGVTaG93RWRpdG9yKF9lZGl0dGluZ0F1dG9tYXRpb24sIF9jcmVhdGluZ05ldylcIixcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxuXG4gIGRpc2Nvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIHN1cGVyLmRpc2Nvbm5lY3RlZENhbGxiYWNrKCk7XG4gICAgdGhpcy5yb3V0ZSA9IHsgcGF0aDogXCJcIiwgcHJlZml4OiBcIlwiIH07XG4gIH1cblxuICBjb21wdXRlQXV0b21hdGlvbihhdXRvbWF0aW9ucywgZWRpdHRpbmdBZGRvbiwgcm91dGVEYXRhKSB7XG4gICAgaWYgKCFhdXRvbWF0aW9ucyB8fCAhZWRpdHRpbmdBZGRvbikge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXV0b21hdGlvbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChhdXRvbWF0aW9uc1tpXS5hdHRyaWJ1dGVzLmlkID09PSByb3V0ZURhdGEuYXV0b21hdGlvbikge1xuICAgICAgICByZXR1cm4gYXV0b21hdGlvbnNbaV07XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgY29tcHV0ZUF1dG9tYXRpb25zKGhhc3MpIHtcbiAgICB2YXIgYXV0b21hdGlvbnMgPSBbXTtcblxuICAgIE9iamVjdC5rZXlzKGhhc3Muc3RhdGVzKS5mb3JFYWNoKGZ1bmN0aW9uKGtleSkge1xuICAgICAgdmFyIGVudGl0eSA9IGhhc3Muc3RhdGVzW2tleV07XG5cbiAgICAgIGlmIChjb21wdXRlU3RhdGVEb21haW4oZW50aXR5KSA9PT0gXCJhdXRvbWF0aW9uXCIpIHtcbiAgICAgICAgYXV0b21hdGlvbnMucHVzaChlbnRpdHkpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIGF1dG9tYXRpb25zLnNvcnQoZnVuY3Rpb24gZW50aXR5U29ydEJ5KGVudGl0eUEsIGVudGl0eUIpIHtcbiAgICAgIHZhciBuYW1lQSA9IChlbnRpdHlBLmF0dHJpYnV0ZXMuYWxpYXMgfHwgZW50aXR5QS5lbnRpdHlfaWQpLnRvTG93ZXJDYXNlKCk7XG4gICAgICB2YXIgbmFtZUIgPSAoZW50aXR5Qi5hdHRyaWJ1dGVzLmFsaWFzIHx8IGVudGl0eUIuZW50aXR5X2lkKS50b0xvd2VyQ2FzZSgpO1xuXG4gICAgICBpZiAobmFtZUEgPCBuYW1lQikge1xuICAgICAgICByZXR1cm4gLTE7XG4gICAgICB9XG4gICAgICBpZiAobmFtZUEgPiBuYW1lQikge1xuICAgICAgICByZXR1cm4gMTtcbiAgICAgIH1cbiAgICAgIHJldHVybiAwO1xuICAgIH0pO1xuICB9XG5cbiAgY29tcHV0ZVNob3dFZGl0b3IoX2VkaXR0aW5nQXV0b21hdGlvbiwgX2NyZWF0aW5nTmV3KSB7XG4gICAgcmV0dXJuIF9jcmVhdGluZ05ldyB8fCBfZWRpdHRpbmdBdXRvbWF0aW9uO1xuICB9XG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcImhhLWNvbmZpZy1hdXRvbWF0aW9uXCIsIEhhQ29uZmlnQXV0b21hdGlvbik7XG4iLCJpbXBvcnQgeyBoLCBDb21wb25lbnQgfSBmcm9tIFwicHJlYWN0XCI7XG5cbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWlucHV0L3BhcGVyLWlucHV0XCI7XG5pbXBvcnQgXCIuLi9oYS1jb25maWctc2VjdGlvblwiO1xuaW1wb3J0IFwiLi4vLi4vLi4vY29tcG9uZW50cy9oYS1jYXJkXCI7XG5pbXBvcnQgXCIuLi8uLi8uLi9jb21wb25lbnRzL2hhLXRleHRhcmVhXCI7XG5cbmltcG9ydCBUcmlnZ2VyIGZyb20gXCIuL3RyaWdnZXIvaW5kZXhcIjtcbmltcG9ydCBDb25kaXRpb24gZnJvbSBcIi4vY29uZGl0aW9uL2luZGV4XCI7XG5pbXBvcnQgU2NyaXB0IGZyb20gXCIuL3NjcmlwdC9pbmRleFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBdXRvbWF0aW9uIGV4dGVuZHMgQ29tcG9uZW50PGFueT4ge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuXG4gICAgdGhpcy5vbkNoYW5nZSA9IHRoaXMub25DaGFuZ2UuYmluZCh0aGlzKTtcbiAgICB0aGlzLnRyaWdnZXJDaGFuZ2VkID0gdGhpcy50cmlnZ2VyQ2hhbmdlZC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuY29uZGl0aW9uQ2hhbmdlZCA9IHRoaXMuY29uZGl0aW9uQ2hhbmdlZC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuYWN0aW9uQ2hhbmdlZCA9IHRoaXMuYWN0aW9uQ2hhbmdlZC5iaW5kKHRoaXMpO1xuICB9XG5cbiAgcHVibGljIG9uQ2hhbmdlKGV2KSB7XG4gICAgdGhpcy5wcm9wcy5vbkNoYW5nZSh7XG4gICAgICAuLi50aGlzLnByb3BzLmF1dG9tYXRpb24sXG4gICAgICBbZXYudGFyZ2V0Lm5hbWVdOiBldi50YXJnZXQudmFsdWUsXG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgdHJpZ2dlckNoYW5nZWQodHJpZ2dlcikge1xuICAgIHRoaXMucHJvcHMub25DaGFuZ2UoeyAuLi50aGlzLnByb3BzLmF1dG9tYXRpb24sIHRyaWdnZXIgfSk7XG4gIH1cblxuICBwdWJsaWMgY29uZGl0aW9uQ2hhbmdlZChjb25kaXRpb24pIHtcbiAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKHsgLi4udGhpcy5wcm9wcy5hdXRvbWF0aW9uLCBjb25kaXRpb24gfSk7XG4gIH1cblxuICBwdWJsaWMgYWN0aW9uQ2hhbmdlZChhY3Rpb24pIHtcbiAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKHsgLi4udGhpcy5wcm9wcy5hdXRvbWF0aW9uLCBhY3Rpb24gfSk7XG4gIH1cblxuICBwdWJsaWMgcmVuZGVyKHsgYXV0b21hdGlvbiwgaXNXaWRlLCBoYXNzLCBsb2NhbGl6ZSB9KSB7XG4gICAgY29uc3QgeyBhbGlhcywgZGVzY3JpcHRpb24sIHRyaWdnZXIsIGNvbmRpdGlvbiwgYWN0aW9uIH0gPSBhdXRvbWF0aW9uO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxoYS1jb25maWctc2VjdGlvbiBpcy13aWRlPXtpc1dpZGV9PlxuICAgICAgICAgIDxzcGFuIHNsb3Q9XCJoZWFkZXJcIj57YWxpYXN9PC9zcGFuPlxuICAgICAgICAgIDxzcGFuIHNsb3Q9XCJpbnRyb2R1Y3Rpb25cIj5cbiAgICAgICAgICAgIHtsb2NhbGl6ZShcInVpLnBhbmVsLmNvbmZpZy5hdXRvbWF0aW9uLmVkaXRvci5pbnRyb2R1Y3Rpb25cIil9XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIDxoYS1jYXJkPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtY29udGVudFwiPlxuICAgICAgICAgICAgICA8cGFwZXItaW5wdXRcbiAgICAgICAgICAgICAgICBsYWJlbD17bG9jYWxpemUoXCJ1aS5wYW5lbC5jb25maWcuYXV0b21hdGlvbi5lZGl0b3IuYWxpYXNcIil9XG4gICAgICAgICAgICAgICAgbmFtZT1cImFsaWFzXCJcbiAgICAgICAgICAgICAgICB2YWx1ZT17YWxpYXN9XG4gICAgICAgICAgICAgICAgb252YWx1ZS1jaGFuZ2VkPXt0aGlzLm9uQ2hhbmdlfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8aGEtdGV4dGFyZWFcbiAgICAgICAgICAgICAgICBsYWJlbD17bG9jYWxpemUoXG4gICAgICAgICAgICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy5hdXRvbWF0aW9uLmVkaXRvci5kZXNjcmlwdGlvbi5sYWJlbFwiXG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17bG9jYWxpemUoXG4gICAgICAgICAgICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy5hdXRvbWF0aW9uLmVkaXRvci5kZXNjcmlwdGlvbi5wbGFjZWhvbGRlclwiXG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICBuYW1lPVwiZGVzY3JpcHRpb25cIlxuICAgICAgICAgICAgICAgIHZhbHVlPXtkZXNjcmlwdGlvbn1cbiAgICAgICAgICAgICAgICBvbnZhbHVlLWNoYW5nZWQ9e3RoaXMub25DaGFuZ2V9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2hhLWNhcmQ+XG4gICAgICAgIDwvaGEtY29uZmlnLXNlY3Rpb24+XG5cbiAgICAgICAgPGhhLWNvbmZpZy1zZWN0aW9uIGlzLXdpZGU9e2lzV2lkZX0+XG4gICAgICAgICAgPHNwYW4gc2xvdD1cImhlYWRlclwiPlxuICAgICAgICAgICAge2xvY2FsaXplKFwidWkucGFuZWwuY29uZmlnLmF1dG9tYXRpb24uZWRpdG9yLnRyaWdnZXJzLmhlYWRlclwiKX1cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgPHNwYW4gc2xvdD1cImludHJvZHVjdGlvblwiPlxuICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgIHtsb2NhbGl6ZShcbiAgICAgICAgICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy5hdXRvbWF0aW9uLmVkaXRvci50cmlnZ2Vycy5pbnRyb2R1Y3Rpb25cIlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vaG9tZS1hc3Npc3RhbnQuaW8vZG9jcy9hdXRvbWF0aW9uL3RyaWdnZXIvXCJcbiAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge2xvY2FsaXplKFxuICAgICAgICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLmF1dG9tYXRpb24uZWRpdG9yLnRyaWdnZXJzLmxlYXJuX21vcmVcIlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICA8VHJpZ2dlclxuICAgICAgICAgICAgdHJpZ2dlcj17dHJpZ2dlcn1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLnRyaWdnZXJDaGFuZ2VkfVxuICAgICAgICAgICAgaGFzcz17aGFzc31cbiAgICAgICAgICAgIGxvY2FsaXplPXtsb2NhbGl6ZX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2hhLWNvbmZpZy1zZWN0aW9uPlxuXG4gICAgICAgIDxoYS1jb25maWctc2VjdGlvbiBpcy13aWRlPXtpc1dpZGV9PlxuICAgICAgICAgIDxzcGFuIHNsb3Q9XCJoZWFkZXJcIj5cbiAgICAgICAgICAgIHtsb2NhbGl6ZShcInVpLnBhbmVsLmNvbmZpZy5hdXRvbWF0aW9uLmVkaXRvci5jb25kaXRpb25zLmhlYWRlclwiKX1cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgPHNwYW4gc2xvdD1cImludHJvZHVjdGlvblwiPlxuICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgIHtsb2NhbGl6ZShcbiAgICAgICAgICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy5hdXRvbWF0aW9uLmVkaXRvci5jb25kaXRpb25zLmludHJvZHVjdGlvblwiXG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8YVxuICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9ob21lLWFzc2lzdGFudC5pby9kb2NzL3NjcmlwdHMvY29uZGl0aW9ucy9cIlxuICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7bG9jYWxpemUoXG4gICAgICAgICAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcuYXV0b21hdGlvbi5lZGl0b3IuY29uZGl0aW9ucy5sZWFybl9tb3JlXCJcbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgPENvbmRpdGlvblxuICAgICAgICAgICAgY29uZGl0aW9uPXtjb25kaXRpb24gfHwgW119XG4gICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5jb25kaXRpb25DaGFuZ2VkfVxuICAgICAgICAgICAgaGFzcz17aGFzc31cbiAgICAgICAgICAgIGxvY2FsaXplPXtsb2NhbGl6ZX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2hhLWNvbmZpZy1zZWN0aW9uPlxuXG4gICAgICAgIDxoYS1jb25maWctc2VjdGlvbiBpcy13aWRlPXtpc1dpZGV9PlxuICAgICAgICAgIDxzcGFuIHNsb3Q9XCJoZWFkZXJcIj5cbiAgICAgICAgICAgIHtsb2NhbGl6ZShcInVpLnBhbmVsLmNvbmZpZy5hdXRvbWF0aW9uLmVkaXRvci5hY3Rpb25zLmhlYWRlclwiKX1cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgPHNwYW4gc2xvdD1cImludHJvZHVjdGlvblwiPlxuICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgIHtsb2NhbGl6ZShcbiAgICAgICAgICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy5hdXRvbWF0aW9uLmVkaXRvci5hY3Rpb25zLmludHJvZHVjdGlvblwiXG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8YVxuICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9ob21lLWFzc2lzdGFudC5pby9kb2NzL2F1dG9tYXRpb24vYWN0aW9uL1wiXG4gICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHtsb2NhbGl6ZShcInVpLnBhbmVsLmNvbmZpZy5hdXRvbWF0aW9uLmVkaXRvci5hY3Rpb25zLmxlYXJuX21vcmVcIil9XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIDxTY3JpcHRcbiAgICAgICAgICAgIHNjcmlwdD17YWN0aW9ufVxuICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuYWN0aW9uQ2hhbmdlZH1cbiAgICAgICAgICAgIGhhc3M9e2hhc3N9XG4gICAgICAgICAgICBsb2NhbGl6ZT17bG9jYWxpemV9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9oYS1jb25maWctc2VjdGlvbj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cbiIsImltcG9ydCB7IGgsIENvbXBvbmVudCB9IGZyb20gXCJwcmVhY3RcIjtcblxuaW1wb3J0IFwiLi4vLi4vLi4vLi4vY29tcG9uZW50cy9kZXZpY2UvaGEtZGV2aWNlLXBpY2tlclwiO1xuaW1wb3J0IFwiLi4vLi4vLi4vLi4vY29tcG9uZW50cy9kZXZpY2UvaGEtZGV2aWNlLXRyaWdnZXItcGlja2VyXCI7XG5pbXBvcnQgXCIuLi8uLi8uLi8uLi9jb21wb25lbnRzL2hhLWZvcm1cIjtcblxuaW1wb3J0IHtcbiAgZmV0Y2hEZXZpY2VUcmlnZ2VyQ2FwYWJpbGl0aWVzLFxuICBkZXZpY2VBdXRvbWF0aW9uc0VxdWFsLFxufSBmcm9tIFwiLi4vLi4vLi4vLi4vZGF0YS9kZXZpY2VfYXV0b21hdGlvblwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEZXZpY2VUcmlnZ2VyIGV4dGVuZHMgQ29tcG9uZW50PGFueSwgYW55PiB7XG4gIHByaXZhdGUgX29yaWdUcmlnZ2VyO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5kZXZpY2VQaWNrZWQgPSB0aGlzLmRldmljZVBpY2tlZC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuZGV2aWNlVHJpZ2dlclBpY2tlZCA9IHRoaXMuZGV2aWNlVHJpZ2dlclBpY2tlZC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuX2V4dHJhRmllbGRzQ2hhbmdlZCA9IHRoaXMuX2V4dHJhRmllbGRzQ2hhbmdlZC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuc3RhdGUgPSB7IGRldmljZV9pZDogdW5kZWZpbmVkLCBjYXBhYmlsaXRpZXM6IHVuZGVmaW5lZCB9O1xuICB9XG5cbiAgcHVibGljIGRldmljZVBpY2tlZChldikge1xuICAgIHRoaXMuc2V0U3RhdGUoeyAuLi50aGlzLnN0YXRlLCBkZXZpY2VfaWQ6IGV2LnRhcmdldC52YWx1ZSB9KTtcbiAgfVxuXG4gIHB1YmxpYyBkZXZpY2VUcmlnZ2VyUGlja2VkKGV2KSB7XG4gICAgbGV0IHRyaWdnZXIgPSBldi50YXJnZXQudmFsdWU7XG4gICAgaWYgKFxuICAgICAgdGhpcy5fb3JpZ1RyaWdnZXIgJiZcbiAgICAgIGRldmljZUF1dG9tYXRpb25zRXF1YWwodGhpcy5fb3JpZ1RyaWdnZXIsIHRyaWdnZXIpXG4gICAgKSB7XG4gICAgICB0cmlnZ2VyID0gdGhpcy5fb3JpZ1RyaWdnZXI7XG4gICAgfVxuICAgIHRoaXMucHJvcHMub25DaGFuZ2UodGhpcy5wcm9wcy5pbmRleCwgdHJpZ2dlcik7XG4gIH1cblxuICAvKiBlc2xpbnQtZGlzYWJsZSBjYW1lbGNhc2UgKi9cbiAgcHVibGljIHJlbmRlcih7IHRyaWdnZXIsIGhhc3MgfSwgeyBkZXZpY2VfaWQsIGNhcGFiaWxpdGllcyB9KSB7XG4gICAgaWYgKGRldmljZV9pZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBkZXZpY2VfaWQgPSB0cmlnZ2VyLmRldmljZV9pZDtcbiAgICB9XG4gICAgY29uc3QgZXh0cmFGaWVsZHNEYXRhID1cbiAgICAgIGNhcGFiaWxpdGllcyAmJiBjYXBhYmlsaXRpZXMuZXh0cmFfZmllbGRzXG4gICAgICAgID8gY2FwYWJpbGl0aWVzLmV4dHJhX2ZpZWxkcy5tYXAoKGl0ZW0pID0+IHtcbiAgICAgICAgICAgIHJldHVybiB7IFtpdGVtLm5hbWVdOiB0aGlzLnByb3BzLnRyaWdnZXJbaXRlbS5uYW1lXSB9O1xuICAgICAgICAgIH0pXG4gICAgICAgIDogdW5kZWZpbmVkO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxoYS1kZXZpY2UtcGlja2VyXG4gICAgICAgICAgdmFsdWU9e2RldmljZV9pZH1cbiAgICAgICAgICBvbkNoYW5nZT17dGhpcy5kZXZpY2VQaWNrZWR9XG4gICAgICAgICAgaGFzcz17aGFzc31cbiAgICAgICAgICBsYWJlbD1cIkRldmljZVwiXG4gICAgICAgIC8+XG4gICAgICAgIDxoYS1kZXZpY2UtdHJpZ2dlci1waWNrZXJcbiAgICAgICAgICB2YWx1ZT17dHJpZ2dlcn1cbiAgICAgICAgICBkZXZpY2VJZD17ZGV2aWNlX2lkfVxuICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmRldmljZVRyaWdnZXJQaWNrZWR9XG4gICAgICAgICAgaGFzcz17aGFzc31cbiAgICAgICAgICBsYWJlbD1cIlRyaWdnZXJcIlxuICAgICAgICAvPlxuICAgICAgICB7ZXh0cmFGaWVsZHNEYXRhICYmIChcbiAgICAgICAgICA8aGEtZm9ybVxuICAgICAgICAgICAgZGF0YT17T2JqZWN0LmFzc2lnbih7fSwgLi4uZXh0cmFGaWVsZHNEYXRhKX1cbiAgICAgICAgICAgIG9uRGF0YS1jaGFuZ2VkPXt0aGlzLl9leHRyYUZpZWxkc0NoYW5nZWR9XG4gICAgICAgICAgICBzY2hlbWE9e3RoaXMuc3RhdGUuY2FwYWJpbGl0aWVzLmV4dHJhX2ZpZWxkc31cbiAgICAgICAgICAgIGNvbXB1dGVMYWJlbD17dGhpcy5fZXh0cmFGaWVsZHNDb21wdXRlTGFiZWxDYWxsYmFjayhoYXNzLmxvY2FsaXplKX1cbiAgICAgICAgICAvPlxuICAgICAgICApfVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuXG4gIHB1YmxpYyBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBpZiAoIXRoaXMuc3RhdGUuY2FwYWJpbGl0aWVzKSB7XG4gICAgICB0aGlzLl9nZXRDYXBhYmlsaXRpZXMoKTtcbiAgICB9XG4gICAgaWYgKHRoaXMucHJvcHMudHJpZ2dlcikge1xuICAgICAgdGhpcy5fb3JpZ1RyaWdnZXIgPSB0aGlzLnByb3BzLnRyaWdnZXI7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMpIHtcbiAgICBpZiAocHJldlByb3BzLnRyaWdnZXIgIT09IHRoaXMucHJvcHMudHJpZ2dlcikge1xuICAgICAgdGhpcy5fZ2V0Q2FwYWJpbGl0aWVzKCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBfZ2V0Q2FwYWJpbGl0aWVzKCkge1xuICAgIGNvbnN0IHRyaWdnZXIgPSB0aGlzLnByb3BzLnRyaWdnZXI7XG5cbiAgICBjb25zdCBjYXBhYmlsaXRpZXMgPSB0cmlnZ2VyLmRvbWFpblxuICAgICAgPyBhd2FpdCBmZXRjaERldmljZVRyaWdnZXJDYXBhYmlsaXRpZXModGhpcy5wcm9wcy5oYXNzLCB0cmlnZ2VyKVxuICAgICAgOiBudWxsO1xuICAgIHRoaXMuc2V0U3RhdGUoeyAuLi50aGlzLnN0YXRlLCBjYXBhYmlsaXRpZXMgfSk7XG4gIH1cblxuICBwcml2YXRlIF9leHRyYUZpZWxkc0NoYW5nZWQoZXYpIHtcbiAgICBpZiAoIWV2LmRldGFpbC5wYXRoKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IGl0ZW0gPSBldi5kZXRhaWwucGF0aC5yZXBsYWNlKFwiZGF0YS5cIiwgXCJcIik7XG4gICAgY29uc3QgdmFsdWUgPSBldi5kZXRhaWwudmFsdWUgfHwgdW5kZWZpbmVkO1xuXG4gICAgdGhpcy5wcm9wcy5vbkNoYW5nZSh0aGlzLnByb3BzLmluZGV4LCB7XG4gICAgICAuLi50aGlzLnByb3BzLnRyaWdnZXIsXG4gICAgICBbaXRlbV06IHZhbHVlLFxuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBfZXh0cmFGaWVsZHNDb21wdXRlTGFiZWxDYWxsYmFjayhsb2NhbGl6ZSkge1xuICAgIC8vIFJldHVybnMgYSBjYWxsYmFjayBmb3IgaGEtZm9ybSB0byBjYWxjdWxhdGUgbGFiZWxzIHBlciBzY2hlbWEgb2JqZWN0XG4gICAgcmV0dXJuIChzY2hlbWEpID0+XG4gICAgICBsb2NhbGl6ZShcbiAgICAgICAgYHVpLnBhbmVsLmNvbmZpZy5hdXRvbWF0aW9uLmVkaXRvci50cmlnZ2Vycy50eXBlLmRldmljZS5leHRyYV9maWVsZHMuJHtcbiAgICAgICAgICBzY2hlbWEubmFtZVxuICAgICAgICB9YFxuICAgICAgKSB8fCBzY2hlbWEubmFtZTtcbiAgfVxufVxuXG4oRGV2aWNlVHJpZ2dlciBhcyBhbnkpLmRlZmF1bHRDb25maWcgPSB7XG4gIGRldmljZV9pZDogXCJcIixcbiAgZG9tYWluOiBcIlwiLFxuICBlbnRpdHlfaWQ6IFwiXCIsXG59O1xuIiwiaW1wb3J0IHsgaCwgQ29tcG9uZW50IH0gZnJvbSBcInByZWFjdFwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItaW5wdXQvcGFwZXItaW5wdXRcIjtcblxuaW1wb3J0IFlBTUxUZXh0QXJlYSBmcm9tIFwiLi4veWFtbF90ZXh0YXJlYVwiO1xuaW1wb3J0IHsgb25DaGFuZ2VFdmVudCB9IGZyb20gXCIuLi8uLi8uLi8uLi9jb21tb24vcHJlYWN0L2V2ZW50XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEV2ZW50VHJpZ2dlciBleHRlbmRzIENvbXBvbmVudDxhbnk+IHtcbiAgcHJpdmF0ZSBvbkNoYW5nZTogKG9iajogYW55KSA9PiB2b2lkO1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuXG4gICAgdGhpcy5vbkNoYW5nZSA9IG9uQ2hhbmdlRXZlbnQuYmluZCh0aGlzLCBcInRyaWdnZXJcIik7XG4gICAgdGhpcy5ldmVudERhdGFDaGFuZ2VkID0gdGhpcy5ldmVudERhdGFDaGFuZ2VkLmJpbmQodGhpcyk7XG4gIH1cblxuICAvKiBlc2xpbnQtZGlzYWJsZSBjYW1lbGNhc2UgKi9cbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiB2YXJpYWJsZS1uYW1lXG4gIHB1YmxpYyBldmVudERhdGFDaGFuZ2VkKGV2ZW50X2RhdGEpIHtcbiAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKHRoaXMucHJvcHMuaW5kZXgsIHtcbiAgICAgIC4uLnRoaXMucHJvcHMudHJpZ2dlcixcbiAgICAgIGV2ZW50X2RhdGEsXG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgcmVuZGVyKHsgdHJpZ2dlciwgbG9jYWxpemUgfSkge1xuICAgIGNvbnN0IHsgZXZlbnRfdHlwZSwgZXZlbnRfZGF0YSB9ID0gdHJpZ2dlcjtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPHBhcGVyLWlucHV0XG4gICAgICAgICAgbGFiZWw9e2xvY2FsaXplKFxuICAgICAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcuYXV0b21hdGlvbi5lZGl0b3IudHJpZ2dlcnMudHlwZS5ldmVudC5ldmVudF90eXBlXCJcbiAgICAgICAgICApfVxuICAgICAgICAgIG5hbWU9XCJldmVudF90eXBlXCJcbiAgICAgICAgICB2YWx1ZT17ZXZlbnRfdHlwZX1cbiAgICAgICAgICBvbnZhbHVlLWNoYW5nZWQ9e3RoaXMub25DaGFuZ2V9XG4gICAgICAgIC8+XG4gICAgICAgIDxZQU1MVGV4dEFyZWFcbiAgICAgICAgICBsYWJlbD17bG9jYWxpemUoXG4gICAgICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy5hdXRvbWF0aW9uLmVkaXRvci50cmlnZ2Vycy50eXBlLmV2ZW50LmV2ZW50X2RhdGFcIlxuICAgICAgICAgICl9XG4gICAgICAgICAgdmFsdWU9e2V2ZW50X2RhdGF9XG4gICAgICAgICAgb25DaGFuZ2U9e3RoaXMuZXZlbnREYXRhQ2hhbmdlZH1cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuKEV2ZW50VHJpZ2dlciBhcyBhbnkpLmRlZmF1bHRDb25maWcgPSB7XG4gIGV2ZW50X3R5cGU6IFwiXCIsXG4gIGV2ZW50X2RhdGE6IHt9LFxufTtcbiIsImltcG9ydCB7IGgsIENvbXBvbmVudCB9IGZyb20gXCJwcmVhY3RcIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLXJhZGlvLWJ1dHRvbi9wYXBlci1yYWRpby1idXR0b25cIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLXJhZGlvLWdyb3VwL3BhcGVyLXJhZGlvLWdyb3VwXCI7XG5pbXBvcnQgXCIuLi8uLi8uLi8uLi9jb21wb25lbnRzL2VudGl0eS9oYS1lbnRpdHktcGlja2VyXCI7XG5cbmltcG9ydCB7IG9uQ2hhbmdlRXZlbnQgfSBmcm9tIFwiLi4vLi4vLi4vLi4vY29tbW9uL3ByZWFjdC9ldmVudFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHZW9sb2NhdGlvblRyaWdnZXIgZXh0ZW5kcyBDb21wb25lbnQ8YW55PiB7XG4gIHByaXZhdGUgb25DaGFuZ2U6IChvYmo6IGFueSkgPT4gdm9pZDtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcblxuICAgIHRoaXMub25DaGFuZ2UgPSBvbkNoYW5nZUV2ZW50LmJpbmQodGhpcywgXCJ0cmlnZ2VyXCIpO1xuICAgIHRoaXMuem9uZVBpY2tlZCA9IHRoaXMuem9uZVBpY2tlZC5iaW5kKHRoaXMpO1xuICAgIHRoaXMucmFkaW9Hcm91cFBpY2tlZCA9IHRoaXMucmFkaW9Hcm91cFBpY2tlZC5iaW5kKHRoaXMpO1xuICB9XG5cbiAgcHVibGljIHpvbmVQaWNrZWQoZXYpIHtcbiAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKHRoaXMucHJvcHMuaW5kZXgsIHtcbiAgICAgIC4uLnRoaXMucHJvcHMudHJpZ2dlcixcbiAgICAgIHpvbmU6IGV2LnRhcmdldC52YWx1ZSxcbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyByYWRpb0dyb3VwUGlja2VkKGV2KSB7XG4gICAgdGhpcy5wcm9wcy5vbkNoYW5nZSh0aGlzLnByb3BzLmluZGV4LCB7XG4gICAgICAuLi50aGlzLnByb3BzLnRyaWdnZXIsXG4gICAgICBldmVudDogZXYudGFyZ2V0LnNlbGVjdGVkLFxuICAgIH0pO1xuICB9XG5cbiAgLyogZXNsaW50LWRpc2FibGUgY2FtZWxjYXNlICovXG4gIHB1YmxpYyByZW5kZXIoeyB0cmlnZ2VyLCBoYXNzLCBsb2NhbGl6ZSB9KSB7XG4gICAgY29uc3QgeyBzb3VyY2UsIHpvbmUsIGV2ZW50IH0gPSB0cmlnZ2VyO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxwYXBlci1pbnB1dFxuICAgICAgICAgIGxhYmVsPXtsb2NhbGl6ZShcbiAgICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLmF1dG9tYXRpb24uZWRpdG9yLnRyaWdnZXJzLnR5cGUuZ2VvX2xvY2F0aW9uLnNvdXJjZVwiXG4gICAgICAgICAgKX1cbiAgICAgICAgICBuYW1lPVwic291cmNlXCJcbiAgICAgICAgICB2YWx1ZT17c291cmNlfVxuICAgICAgICAgIG9udmFsdWUtY2hhbmdlZD17dGhpcy5vbkNoYW5nZX1cbiAgICAgICAgLz5cbiAgICAgICAgPGhhLWVudGl0eS1waWNrZXJcbiAgICAgICAgICBsYWJlbD17bG9jYWxpemUoXG4gICAgICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy5hdXRvbWF0aW9uLmVkaXRvci50cmlnZ2Vycy50eXBlLmdlb19sb2NhdGlvbi56b25lXCJcbiAgICAgICAgICApfVxuICAgICAgICAgIHZhbHVlPXt6b25lfVxuICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLnpvbmVQaWNrZWR9XG4gICAgICAgICAgaGFzcz17aGFzc31cbiAgICAgICAgICBhbGxvd0N1c3RvbUVudGl0eVxuICAgICAgICAgIGRvbWFpbkZpbHRlcj1cInpvbmVcIlxuICAgICAgICAvPlxuICAgICAgICA8bGFiZWwgaWQ9XCJldmVudGxhYmVsXCI+XG4gICAgICAgICAge2xvY2FsaXplKFxuICAgICAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcuYXV0b21hdGlvbi5lZGl0b3IudHJpZ2dlcnMudHlwZS5nZW9fbG9jYXRpb24uZXZlbnRcIlxuICAgICAgICAgICl9XG4gICAgICAgIDwvbGFiZWw+XG4gICAgICAgIDxwYXBlci1yYWRpby1ncm91cFxuICAgICAgICAgIHNlbGVjdGVkPXtldmVudH1cbiAgICAgICAgICBhcmlhLWxhYmVsbGVkYnk9XCJldmVudGxhYmVsXCJcbiAgICAgICAgICBvbnBhcGVyLXJhZGlvLWdyb3VwLWNoYW5nZWQ9e3RoaXMucmFkaW9Hcm91cFBpY2tlZH1cbiAgICAgICAgPlxuICAgICAgICAgIDxwYXBlci1yYWRpby1idXR0b24gbmFtZT1cImVudGVyXCI+XG4gICAgICAgICAgICB7bG9jYWxpemUoXG4gICAgICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLmF1dG9tYXRpb24uZWRpdG9yLnRyaWdnZXJzLnR5cGUuZ2VvX2xvY2F0aW9uLmVudGVyXCJcbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9wYXBlci1yYWRpby1idXR0b24+XG4gICAgICAgICAgPHBhcGVyLXJhZGlvLWJ1dHRvbiBuYW1lPVwibGVhdmVcIj5cbiAgICAgICAgICAgIHtsb2NhbGl6ZShcbiAgICAgICAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcuYXV0b21hdGlvbi5lZGl0b3IudHJpZ2dlcnMudHlwZS5nZW9fbG9jYXRpb24ubGVhdmVcIlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L3BhcGVyLXJhZGlvLWJ1dHRvbj5cbiAgICAgICAgPC9wYXBlci1yYWRpby1ncm91cD5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuKEdlb2xvY2F0aW9uVHJpZ2dlciBhcyBhbnkpLmRlZmF1bHRDb25maWcgPSB7XG4gIHNvdXJjZTogXCJcIixcbiAgem9uZTogXCJcIixcbiAgZXZlbnQ6IFwiZW50ZXJcIixcbn07XG4iLCJpbXBvcnQgeyBoLCBDb21wb25lbnQgfSBmcm9tIFwicHJlYWN0XCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1yYWRpby1idXR0b24vcGFwZXItcmFkaW8tYnV0dG9uXCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1yYWRpby1ncm91cC9wYXBlci1yYWRpby1ncm91cFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIYXNzVHJpZ2dlciBleHRlbmRzIENvbXBvbmVudDxhbnk+IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcblxuICAgIHRoaXMucmFkaW9Hcm91cFBpY2tlZCA9IHRoaXMucmFkaW9Hcm91cFBpY2tlZC5iaW5kKHRoaXMpO1xuICB9XG5cbiAgcHVibGljIHJhZGlvR3JvdXBQaWNrZWQoZXYpIHtcbiAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKHRoaXMucHJvcHMuaW5kZXgsIHtcbiAgICAgIC4uLnRoaXMucHJvcHMudHJpZ2dlcixcbiAgICAgIGV2ZW50OiBldi50YXJnZXQuc2VsZWN0ZWQsXG4gICAgfSk7XG4gIH1cblxuICAvKiBlc2xpbnQtZGlzYWJsZSBjYW1lbGNhc2UgKi9cbiAgcHVibGljIHJlbmRlcih7IHRyaWdnZXIsIGxvY2FsaXplIH0pIHtcbiAgICBjb25zdCB7IGV2ZW50IH0gPSB0cmlnZ2VyO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8bGFiZWwgaWQ9XCJldmVudGxhYmVsXCI+XG4gICAgICAgICAge2xvY2FsaXplKFxuICAgICAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcuYXV0b21hdGlvbi5lZGl0b3IudHJpZ2dlcnMudHlwZS5ob21lYXNzaXN0YW50LmV2ZW50XCJcbiAgICAgICAgICApfVxuICAgICAgICA8L2xhYmVsPlxuICAgICAgICA8cGFwZXItcmFkaW8tZ3JvdXBcbiAgICAgICAgICBzZWxlY3RlZD17ZXZlbnR9XG4gICAgICAgICAgYXJpYS1sYWJlbGxlZGJ5PVwiZXZlbnRsYWJlbFwiXG4gICAgICAgICAgb25wYXBlci1yYWRpby1ncm91cC1jaGFuZ2VkPXt0aGlzLnJhZGlvR3JvdXBQaWNrZWR9XG4gICAgICAgID5cbiAgICAgICAgICA8cGFwZXItcmFkaW8tYnV0dG9uIG5hbWU9XCJzdGFydFwiPlxuICAgICAgICAgICAge2xvY2FsaXplKFxuICAgICAgICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy5hdXRvbWF0aW9uLmVkaXRvci50cmlnZ2Vycy50eXBlLmhvbWVhc3Npc3RhbnQuc3RhcnRcIlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L3BhcGVyLXJhZGlvLWJ1dHRvbj5cbiAgICAgICAgICA8cGFwZXItcmFkaW8tYnV0dG9uIG5hbWU9XCJzaHV0ZG93blwiPlxuICAgICAgICAgICAge2xvY2FsaXplKFxuICAgICAgICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy5hdXRvbWF0aW9uLmVkaXRvci50cmlnZ2Vycy50eXBlLmhvbWVhc3Npc3RhbnQuc2h1dGRvd25cIlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L3BhcGVyLXJhZGlvLWJ1dHRvbj5cbiAgICAgICAgPC9wYXBlci1yYWRpby1ncm91cD5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuKEhhc3NUcmlnZ2VyIGFzIGFueSkuZGVmYXVsdENvbmZpZyA9IHtcbiAgZXZlbnQ6IFwic3RhcnRcIixcbn07XG4iLCJpbXBvcnQgeyBoLCBDb21wb25lbnQgfSBmcm9tIFwicHJlYWN0XCI7XG5pbXBvcnQgXCJAbWF0ZXJpYWwvbXdjLWJ1dHRvblwiO1xuaW1wb3J0IFwiLi4vLi4vLi4vLi4vY29tcG9uZW50cy9oYS1jYXJkXCI7XG5cbmltcG9ydCBUcmlnZ2VyUm93IGZyb20gXCIuL3RyaWdnZXJfcm93XCI7XG5pbXBvcnQgU3RhdGVUcmlnZ2VyIGZyb20gXCIuL3N0YXRlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRyaWdnZXIgZXh0ZW5kcyBDb21wb25lbnQ8YW55PiB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG5cbiAgICB0aGlzLmFkZFRyaWdnZXIgPSB0aGlzLmFkZFRyaWdnZXIuYmluZCh0aGlzKTtcbiAgICB0aGlzLnRyaWdnZXJDaGFuZ2VkID0gdGhpcy50cmlnZ2VyQ2hhbmdlZC5iaW5kKHRoaXMpO1xuICB9XG5cbiAgcHVibGljIGFkZFRyaWdnZXIoKSB7XG4gICAgY29uc3QgdHJpZ2dlciA9IHRoaXMucHJvcHMudHJpZ2dlci5jb25jYXQoe1xuICAgICAgcGxhdGZvcm06IFwic3RhdGVcIixcbiAgICAgIC4uLihTdGF0ZVRyaWdnZXIgYXMgYW55KS5kZWZhdWx0Q29uZmlnLFxuICAgIH0pO1xuXG4gICAgdGhpcy5wcm9wcy5vbkNoYW5nZSh0cmlnZ2VyKTtcbiAgfVxuXG4gIHB1YmxpYyB0cmlnZ2VyQ2hhbmdlZChpbmRleCwgbmV3VmFsdWUpIHtcbiAgICBjb25zdCB0cmlnZ2VyID0gdGhpcy5wcm9wcy50cmlnZ2VyLmNvbmNhdCgpO1xuXG4gICAgaWYgKG5ld1ZhbHVlID09PSBudWxsKSB7XG4gICAgICB0cmlnZ2VyLnNwbGljZShpbmRleCwgMSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRyaWdnZXJbaW5kZXhdID0gbmV3VmFsdWU7XG4gICAgfVxuXG4gICAgdGhpcy5wcm9wcy5vbkNoYW5nZSh0cmlnZ2VyKTtcbiAgfVxuXG4gIHB1YmxpYyByZW5kZXIoeyB0cmlnZ2VyLCBoYXNzLCBsb2NhbGl6ZSB9KSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3M9XCJ0cmlnZ2Vyc1wiPlxuICAgICAgICB7dHJpZ2dlci5tYXAoKHRyZywgaWR4KSA9PiAoXG4gICAgICAgICAgPFRyaWdnZXJSb3dcbiAgICAgICAgICAgIGluZGV4PXtpZHh9XG4gICAgICAgICAgICB0cmlnZ2VyPXt0cmd9XG4gICAgICAgICAgICBvbkNoYW5nZT17dGhpcy50cmlnZ2VyQ2hhbmdlZH1cbiAgICAgICAgICAgIGhhc3M9e2hhc3N9XG4gICAgICAgICAgICBsb2NhbGl6ZT17bG9jYWxpemV9XG4gICAgICAgICAgLz5cbiAgICAgICAgKSl9XG4gICAgICAgIDxoYS1jYXJkPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWFjdGlvbnMgYWRkLWNhcmRcIj5cbiAgICAgICAgICAgIDxtd2MtYnV0dG9uIG9uVGFwPXt0aGlzLmFkZFRyaWdnZXJ9PlxuICAgICAgICAgICAgICB7bG9jYWxpemUoXCJ1aS5wYW5lbC5jb25maWcuYXV0b21hdGlvbi5lZGl0b3IudHJpZ2dlcnMuYWRkXCIpfVxuICAgICAgICAgICAgPC9td2MtYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2hhLWNhcmQ+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG4iLCJpbXBvcnQgeyBoLCBDb21wb25lbnQgfSBmcm9tIFwicHJlYWN0XCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1pbnB1dC9wYXBlci1pbnB1dFwiO1xuXG5pbXBvcnQgeyBvbkNoYW5nZUV2ZW50IH0gZnJvbSBcIi4uLy4uLy4uLy4uL2NvbW1vbi9wcmVhY3QvZXZlbnRcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTVFUVFRyaWdnZXIgZXh0ZW5kcyBDb21wb25lbnQ8YW55PiB7XG4gIHByaXZhdGUgb25DaGFuZ2U6IChvYmo6IGFueSkgPT4gdm9pZDtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcblxuICAgIHRoaXMub25DaGFuZ2UgPSBvbkNoYW5nZUV2ZW50LmJpbmQodGhpcywgXCJ0cmlnZ2VyXCIpO1xuICB9XG5cbiAgLyogZXNsaW50LWRpc2FibGUgY2FtZWxjYXNlICovXG4gIHB1YmxpYyByZW5kZXIoeyB0cmlnZ2VyLCBsb2NhbGl6ZSB9KSB7XG4gICAgY29uc3QgeyB0b3BpYywgcGF5bG9hZCB9ID0gdHJpZ2dlcjtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPHBhcGVyLWlucHV0XG4gICAgICAgICAgbGFiZWw9e2xvY2FsaXplKFxuICAgICAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcuYXV0b21hdGlvbi5lZGl0b3IudHJpZ2dlcnMudHlwZS5tcXR0LnRvcGljXCJcbiAgICAgICAgICApfVxuICAgICAgICAgIG5hbWU9XCJ0b3BpY1wiXG4gICAgICAgICAgdmFsdWU9e3RvcGljfVxuICAgICAgICAgIG9udmFsdWUtY2hhbmdlZD17dGhpcy5vbkNoYW5nZX1cbiAgICAgICAgLz5cbiAgICAgICAgPHBhcGVyLWlucHV0XG4gICAgICAgICAgbGFiZWw9e2xvY2FsaXplKFxuICAgICAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcuYXV0b21hdGlvbi5lZGl0b3IudHJpZ2dlcnMudHlwZS5tcXR0LnBheWxvYWRcIlxuICAgICAgICAgICl9XG4gICAgICAgICAgbmFtZT1cInBheWxvYWRcIlxuICAgICAgICAgIHZhbHVlPXtwYXlsb2FkfVxuICAgICAgICAgIG9udmFsdWUtY2hhbmdlZD17dGhpcy5vbkNoYW5nZX1cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuKE1RVFRUcmlnZ2VyIGFzIGFueSkuZGVmYXVsdENvbmZpZyA9IHtcbiAgdG9waWM6IFwiXCIsXG59O1xuIiwiaW1wb3J0IHsgaCwgQ29tcG9uZW50IH0gZnJvbSBcInByZWFjdFwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItaW5wdXQvcGFwZXItaW5wdXRcIjtcbmltcG9ydCBcIi4uLy4uLy4uLy4uL2NvbXBvbmVudHMvaGEtdGV4dGFyZWFcIjtcblxuaW1wb3J0IFwiLi4vLi4vLi4vLi4vY29tcG9uZW50cy9lbnRpdHkvaGEtZW50aXR5LXBpY2tlclwiO1xuXG5pbXBvcnQgeyBvbkNoYW5nZUV2ZW50IH0gZnJvbSBcIi4uLy4uLy4uLy4uL2NvbW1vbi9wcmVhY3QvZXZlbnRcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTnVtZXJpY1N0YXRlVHJpZ2dlciBleHRlbmRzIENvbXBvbmVudDxhbnk+IHtcbiAgcHJpdmF0ZSBvbkNoYW5nZTogKG9iajogYW55KSA9PiB2b2lkO1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuXG4gICAgdGhpcy5vbkNoYW5nZSA9IG9uQ2hhbmdlRXZlbnQuYmluZCh0aGlzLCBcInRyaWdnZXJcIik7XG4gICAgdGhpcy5lbnRpdHlQaWNrZWQgPSB0aGlzLmVudGl0eVBpY2tlZC5iaW5kKHRoaXMpO1xuICB9XG5cbiAgcHVibGljIGVudGl0eVBpY2tlZChldikge1xuICAgIHRoaXMucHJvcHMub25DaGFuZ2UodGhpcy5wcm9wcy5pbmRleCwge1xuICAgICAgLi4udGhpcy5wcm9wcy50cmlnZ2VyLFxuICAgICAgZW50aXR5X2lkOiBldi50YXJnZXQudmFsdWUsXG4gICAgfSk7XG4gIH1cblxuICAvKiBlc2xpbnQtZGlzYWJsZSBjYW1lbGNhc2UgKi9cbiAgcHVibGljIHJlbmRlcih7IHRyaWdnZXIsIGhhc3MsIGxvY2FsaXplIH0pIHtcbiAgICBjb25zdCB7IHZhbHVlX3RlbXBsYXRlLCBlbnRpdHlfaWQsIGJlbG93LCBhYm92ZSB9ID0gdHJpZ2dlcjtcbiAgICBsZXQgdHJnRm9yID0gdHJpZ2dlci5mb3I7XG5cbiAgICBpZiAodHJnRm9yICYmICh0cmdGb3IuaG91cnMgfHwgdHJnRm9yLm1pbnV0ZXMgfHwgdHJnRm9yLnNlY29uZHMpKSB7XG4gICAgICAvLyBJZiB0aGUgdHJpZ2dlciB3YXMgZGVmaW5lZCB1c2luZyB0aGUgeWFtbCBkaWN0IHN5bnRheCwgY29udmVydCBpdCB0b1xuICAgICAgLy8gdGhlIGVxdWl2YWxlbnQgc3RyaW5nIGZvcm1hdFxuICAgICAgbGV0IHsgaG91cnMgPSAwLCBtaW51dGVzID0gMCwgc2Vjb25kcyA9IDAgfSA9IHRyZ0ZvcjtcbiAgICAgIGhvdXJzID0gaG91cnMudG9TdHJpbmcoKTtcbiAgICAgIG1pbnV0ZXMgPSBtaW51dGVzLnRvU3RyaW5nKCkucGFkU3RhcnQoMiwgXCIwXCIpO1xuICAgICAgc2Vjb25kcyA9IHNlY29uZHMudG9TdHJpbmcoKS5wYWRTdGFydCgyLCBcIjBcIik7XG5cbiAgICAgIHRyZ0ZvciA9IGAke2hvdXJzfToke21pbnV0ZXN9OiR7c2Vjb25kc31gO1xuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGhhLWVudGl0eS1waWNrZXJcbiAgICAgICAgICB2YWx1ZT17ZW50aXR5X2lkfVxuICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmVudGl0eVBpY2tlZH1cbiAgICAgICAgICBoYXNzPXtoYXNzfVxuICAgICAgICAgIGFsbG93Q3VzdG9tRW50aXR5XG4gICAgICAgIC8+XG4gICAgICAgIDxwYXBlci1pbnB1dFxuICAgICAgICAgIGxhYmVsPXtsb2NhbGl6ZShcbiAgICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLmF1dG9tYXRpb24uZWRpdG9yLnRyaWdnZXJzLnR5cGUubnVtZXJpY19zdGF0ZS5hYm92ZVwiXG4gICAgICAgICAgKX1cbiAgICAgICAgICBuYW1lPVwiYWJvdmVcIlxuICAgICAgICAgIHZhbHVlPXthYm92ZX1cbiAgICAgICAgICBvbnZhbHVlLWNoYW5nZWQ9e3RoaXMub25DaGFuZ2V9XG4gICAgICAgIC8+XG4gICAgICAgIDxwYXBlci1pbnB1dFxuICAgICAgICAgIGxhYmVsPXtsb2NhbGl6ZShcbiAgICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLmF1dG9tYXRpb24uZWRpdG9yLnRyaWdnZXJzLnR5cGUubnVtZXJpY19zdGF0ZS5iZWxvd1wiXG4gICAgICAgICAgKX1cbiAgICAgICAgICBuYW1lPVwiYmVsb3dcIlxuICAgICAgICAgIHZhbHVlPXtiZWxvd31cbiAgICAgICAgICBvbnZhbHVlLWNoYW5nZWQ9e3RoaXMub25DaGFuZ2V9XG4gICAgICAgIC8+XG4gICAgICAgIDxoYS10ZXh0YXJlYVxuICAgICAgICAgIGxhYmVsPXtsb2NhbGl6ZShcbiAgICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLmF1dG9tYXRpb24uZWRpdG9yLnRyaWdnZXJzLnR5cGUubnVtZXJpY19zdGF0ZS52YWx1ZV90ZW1wbGF0ZVwiXG4gICAgICAgICAgKX1cbiAgICAgICAgICBuYW1lPVwidmFsdWVfdGVtcGxhdGVcIlxuICAgICAgICAgIHZhbHVlPXt2YWx1ZV90ZW1wbGF0ZX1cbiAgICAgICAgICBvbnZhbHVlLWNoYW5nZWQ9e3RoaXMub25DaGFuZ2V9XG4gICAgICAgICAgZGlyPVwibHRyXCJcbiAgICAgICAgLz5cbiAgICAgICAgPHBhcGVyLWlucHV0XG4gICAgICAgICAgbGFiZWw9e2xvY2FsaXplKFxuICAgICAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcuYXV0b21hdGlvbi5lZGl0b3IudHJpZ2dlcnMudHlwZS5zdGF0ZS5mb3JcIlxuICAgICAgICAgICl9XG4gICAgICAgICAgbmFtZT1cImZvclwiXG4gICAgICAgICAgdmFsdWU9e3RyZ0Zvcn1cbiAgICAgICAgICBvbnZhbHVlLWNoYW5nZWQ9e3RoaXMub25DaGFuZ2V9XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbihOdW1lcmljU3RhdGVUcmlnZ2VyIGFzIGFueSkuZGVmYXVsdENvbmZpZyA9IHtcbiAgZW50aXR5X2lkOiBcIlwiLFxufTtcbiIsImltcG9ydCB7IGgsIENvbXBvbmVudCB9IGZyb20gXCJwcmVhY3RcIjtcblxuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItaW5wdXQvcGFwZXItaW5wdXRcIjtcbmltcG9ydCBcIi4uLy4uLy4uLy4uL2NvbXBvbmVudHMvZW50aXR5L2hhLWVudGl0eS1waWNrZXJcIjtcblxuaW1wb3J0IHsgb25DaGFuZ2VFdmVudCB9IGZyb20gXCIuLi8uLi8uLi8uLi9jb21tb24vcHJlYWN0L2V2ZW50XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0YXRlVHJpZ2dlciBleHRlbmRzIENvbXBvbmVudDxhbnk+IHtcbiAgcHJpdmF0ZSBvbkNoYW5nZTogKG9iajogYW55KSA9PiB2b2lkO1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuXG4gICAgdGhpcy5vbkNoYW5nZSA9IG9uQ2hhbmdlRXZlbnQuYmluZCh0aGlzLCBcInRyaWdnZXJcIik7XG4gICAgdGhpcy5lbnRpdHlQaWNrZWQgPSB0aGlzLmVudGl0eVBpY2tlZC5iaW5kKHRoaXMpO1xuICB9XG5cbiAgcHVibGljIGVudGl0eVBpY2tlZChldikge1xuICAgIHRoaXMucHJvcHMub25DaGFuZ2UodGhpcy5wcm9wcy5pbmRleCwge1xuICAgICAgLi4udGhpcy5wcm9wcy50cmlnZ2VyLFxuICAgICAgZW50aXR5X2lkOiBldi50YXJnZXQudmFsdWUsXG4gICAgfSk7XG4gIH1cblxuICAvKiBlc2xpbnQtZGlzYWJsZSBjYW1lbGNhc2UgKi9cbiAgcHVibGljIHJlbmRlcih7IHRyaWdnZXIsIGhhc3MsIGxvY2FsaXplIH0pIHtcbiAgICBjb25zdCB7IGVudGl0eV9pZCwgdG8gfSA9IHRyaWdnZXI7XG4gICAgY29uc3QgdHJnRnJvbSA9IHRyaWdnZXIuZnJvbTtcbiAgICBsZXQgdHJnRm9yID0gdHJpZ2dlci5mb3I7XG5cbiAgICBpZiAodHJnRm9yICYmICh0cmdGb3IuaG91cnMgfHwgdHJnRm9yLm1pbnV0ZXMgfHwgdHJnRm9yLnNlY29uZHMpKSB7XG4gICAgICAvLyBJZiB0aGUgdHJpZ2dlciB3YXMgZGVmaW5lZCB1c2luZyB0aGUgeWFtbCBkaWN0IHN5bnRheCwgY29udmVydCBpdCB0b1xuICAgICAgLy8gdGhlIGVxdWl2YWxlbnQgc3RyaW5nIGZvcm1hdFxuICAgICAgbGV0IHsgaG91cnMgPSAwLCBtaW51dGVzID0gMCwgc2Vjb25kcyA9IDAgfSA9IHRyZ0ZvcjtcbiAgICAgIGhvdXJzID0gaG91cnMudG9TdHJpbmcoKTtcbiAgICAgIG1pbnV0ZXMgPSBtaW51dGVzLnRvU3RyaW5nKCkucGFkU3RhcnQoMiwgXCIwXCIpO1xuICAgICAgc2Vjb25kcyA9IHNlY29uZHMudG9TdHJpbmcoKS5wYWRTdGFydCgyLCBcIjBcIik7XG5cbiAgICAgIHRyZ0ZvciA9IGAke2hvdXJzfToke21pbnV0ZXN9OiR7c2Vjb25kc31gO1xuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGhhLWVudGl0eS1waWNrZXJcbiAgICAgICAgICB2YWx1ZT17ZW50aXR5X2lkfVxuICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmVudGl0eVBpY2tlZH1cbiAgICAgICAgICBoYXNzPXtoYXNzfVxuICAgICAgICAgIGFsbG93Q3VzdG9tRW50aXR5XG4gICAgICAgIC8+XG4gICAgICAgIDxwYXBlci1pbnB1dFxuICAgICAgICAgIGxhYmVsPXtsb2NhbGl6ZShcbiAgICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLmF1dG9tYXRpb24uZWRpdG9yLnRyaWdnZXJzLnR5cGUuc3RhdGUuZnJvbVwiXG4gICAgICAgICAgKX1cbiAgICAgICAgICBuYW1lPVwiZnJvbVwiXG4gICAgICAgICAgdmFsdWU9e3RyZ0Zyb219XG4gICAgICAgICAgb252YWx1ZS1jaGFuZ2VkPXt0aGlzLm9uQ2hhbmdlfVxuICAgICAgICAvPlxuICAgICAgICA8cGFwZXItaW5wdXRcbiAgICAgICAgICBsYWJlbD17bG9jYWxpemUoXG4gICAgICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy5hdXRvbWF0aW9uLmVkaXRvci50cmlnZ2Vycy50eXBlLnN0YXRlLnRvXCJcbiAgICAgICAgICApfVxuICAgICAgICAgIG5hbWU9XCJ0b1wiXG4gICAgICAgICAgdmFsdWU9e3RvfVxuICAgICAgICAgIG9udmFsdWUtY2hhbmdlZD17dGhpcy5vbkNoYW5nZX1cbiAgICAgICAgLz5cbiAgICAgICAgPHBhcGVyLWlucHV0XG4gICAgICAgICAgbGFiZWw9e2xvY2FsaXplKFxuICAgICAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcuYXV0b21hdGlvbi5lZGl0b3IudHJpZ2dlcnMudHlwZS5zdGF0ZS5mb3JcIlxuICAgICAgICAgICl9XG4gICAgICAgICAgbmFtZT1cImZvclwiXG4gICAgICAgICAgdmFsdWU9e3RyZ0Zvcn1cbiAgICAgICAgICBvbnZhbHVlLWNoYW5nZWQ9e3RoaXMub25DaGFuZ2V9XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbihTdGF0ZVRyaWdnZXIgYXMgYW55KS5kZWZhdWx0Q29uZmlnID0ge1xuICBlbnRpdHlfaWQ6IFwiXCIsXG59O1xuIiwiaW1wb3J0IHsgaCwgQ29tcG9uZW50IH0gZnJvbSBcInByZWFjdFwiO1xuXG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1pbnB1dC9wYXBlci1pbnB1dFwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItcmFkaW8tYnV0dG9uL3BhcGVyLXJhZGlvLWJ1dHRvblwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItcmFkaW8tZ3JvdXAvcGFwZXItcmFkaW8tZ3JvdXBcIjtcblxuaW1wb3J0IHsgb25DaGFuZ2VFdmVudCB9IGZyb20gXCIuLi8uLi8uLi8uLi9jb21tb24vcHJlYWN0L2V2ZW50XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN1blRyaWdnZXIgZXh0ZW5kcyBDb21wb25lbnQ8YW55PiB7XG4gIHByaXZhdGUgb25DaGFuZ2U6IChvYmo6IGFueSkgPT4gdm9pZDtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcblxuICAgIHRoaXMub25DaGFuZ2UgPSBvbkNoYW5nZUV2ZW50LmJpbmQodGhpcywgXCJ0cmlnZ2VyXCIpO1xuICAgIHRoaXMucmFkaW9Hcm91cFBpY2tlZCA9IHRoaXMucmFkaW9Hcm91cFBpY2tlZC5iaW5kKHRoaXMpO1xuICB9XG5cbiAgcHVibGljIHJhZGlvR3JvdXBQaWNrZWQoZXYpIHtcbiAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKHRoaXMucHJvcHMuaW5kZXgsIHtcbiAgICAgIC4uLnRoaXMucHJvcHMudHJpZ2dlcixcbiAgICAgIGV2ZW50OiBldi50YXJnZXQuc2VsZWN0ZWQsXG4gICAgfSk7XG4gIH1cblxuICAvKiBlc2xpbnQtZGlzYWJsZSBjYW1lbGNhc2UgKi9cbiAgcHVibGljIHJlbmRlcih7IHRyaWdnZXIsIGxvY2FsaXplIH0pIHtcbiAgICBjb25zdCB7IG9mZnNldCwgZXZlbnQgfSA9IHRyaWdnZXI7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxsYWJlbCBpZD1cImV2ZW50bGFiZWxcIj5cbiAgICAgICAgICB7bG9jYWxpemUoXG4gICAgICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy5hdXRvbWF0aW9uLmVkaXRvci50cmlnZ2Vycy50eXBlLnN1bi5ldmVudFwiXG4gICAgICAgICAgKX1cbiAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgPHBhcGVyLXJhZGlvLWdyb3VwXG4gICAgICAgICAgc2VsZWN0ZWQ9e2V2ZW50fVxuICAgICAgICAgIGFyaWEtbGFiZWxsZWRieT1cImV2ZW50bGFiZWxcIlxuICAgICAgICAgIG9ucGFwZXItcmFkaW8tZ3JvdXAtY2hhbmdlZD17dGhpcy5yYWRpb0dyb3VwUGlja2VkfVxuICAgICAgICA+XG4gICAgICAgICAgPHBhcGVyLXJhZGlvLWJ1dHRvbiBuYW1lPVwic3VucmlzZVwiPlxuICAgICAgICAgICAge2xvY2FsaXplKFxuICAgICAgICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy5hdXRvbWF0aW9uLmVkaXRvci50cmlnZ2Vycy50eXBlLnN1bi5zdW5yaXNlXCJcbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9wYXBlci1yYWRpby1idXR0b24+XG4gICAgICAgICAgPHBhcGVyLXJhZGlvLWJ1dHRvbiBuYW1lPVwic3Vuc2V0XCI+XG4gICAgICAgICAgICB7bG9jYWxpemUoXG4gICAgICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLmF1dG9tYXRpb24uZWRpdG9yLnRyaWdnZXJzLnR5cGUuc3VuLnN1bnNldFwiXG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvcGFwZXItcmFkaW8tYnV0dG9uPlxuICAgICAgICA8L3BhcGVyLXJhZGlvLWdyb3VwPlxuXG4gICAgICAgIDxwYXBlci1pbnB1dFxuICAgICAgICAgIGxhYmVsPXtsb2NhbGl6ZShcbiAgICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLmF1dG9tYXRpb24uZWRpdG9yLnRyaWdnZXJzLnR5cGUuc3VuLm9mZnNldFwiXG4gICAgICAgICAgKX1cbiAgICAgICAgICBuYW1lPVwib2Zmc2V0XCJcbiAgICAgICAgICB2YWx1ZT17b2Zmc2V0fVxuICAgICAgICAgIG9udmFsdWUtY2hhbmdlZD17dGhpcy5vbkNoYW5nZX1cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuKFN1blRyaWdnZXIgYXMgYW55KS5kZWZhdWx0Q29uZmlnID0ge1xuICBldmVudDogXCJzdW5yaXNlXCIsXG59O1xuIiwiaW1wb3J0IHsgaCwgQ29tcG9uZW50IH0gZnJvbSBcInByZWFjdFwiO1xuXG5pbXBvcnQgXCIuLi8uLi8uLi8uLi9jb21wb25lbnRzL2hhLXRleHRhcmVhXCI7XG5cbmltcG9ydCB7IG9uQ2hhbmdlRXZlbnQgfSBmcm9tIFwiLi4vLi4vLi4vLi4vY29tbW9uL3ByZWFjdC9ldmVudFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUZW1wbGF0ZVRyaWdnZXIgZXh0ZW5kcyBDb21wb25lbnQ8YW55PiB7XG4gIHByaXZhdGUgb25DaGFuZ2U6IChvYmo6IGFueSkgPT4gdm9pZDtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcblxuICAgIHRoaXMub25DaGFuZ2UgPSBvbkNoYW5nZUV2ZW50LmJpbmQodGhpcywgXCJ0cmlnZ2VyXCIpO1xuICB9XG5cbiAgcHVibGljIHJlbmRlcih7IHRyaWdnZXIsIGxvY2FsaXplIH0pIHtcbiAgICAvKiBlc2xpbnQtZGlzYWJsZSBjYW1lbGNhc2UgKi9cbiAgICBjb25zdCB7IHZhbHVlX3RlbXBsYXRlIH0gPSB0cmlnZ2VyO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8aGEtdGV4dGFyZWFcbiAgICAgICAgICBsYWJlbD17bG9jYWxpemUoXG4gICAgICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy5hdXRvbWF0aW9uLmVkaXRvci50cmlnZ2Vycy50eXBlLnRlbXBsYXRlLnZhbHVlX3RlbXBsYXRlXCJcbiAgICAgICAgICApfVxuICAgICAgICAgIG5hbWU9XCJ2YWx1ZV90ZW1wbGF0ZVwiXG4gICAgICAgICAgdmFsdWU9e3ZhbHVlX3RlbXBsYXRlfVxuICAgICAgICAgIG9udmFsdWUtY2hhbmdlZD17dGhpcy5vbkNoYW5nZX1cbiAgICAgICAgICBkaXI9XCJsdHJcIlxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG4oVGVtcGxhdGVUcmlnZ2VyIGFzIGFueSkuZGVmYXVsdENvbmZpZyA9IHtcbiAgdmFsdWVfdGVtcGxhdGU6IFwiXCIsXG59O1xuIiwiaW1wb3J0IHsgaCwgQ29tcG9uZW50IH0gZnJvbSBcInByZWFjdFwiO1xuXG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1pbnB1dC9wYXBlci1pbnB1dFwiO1xuXG5pbXBvcnQgeyBvbkNoYW5nZUV2ZW50IH0gZnJvbSBcIi4uLy4uLy4uLy4uL2NvbW1vbi9wcmVhY3QvZXZlbnRcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGltZVRyaWdnZXIgZXh0ZW5kcyBDb21wb25lbnQ8YW55PiB7XG4gIHByaXZhdGUgb25DaGFuZ2U6IChvYmo6IGFueSkgPT4gdm9pZDtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcblxuICAgIHRoaXMub25DaGFuZ2UgPSBvbkNoYW5nZUV2ZW50LmJpbmQodGhpcywgXCJ0cmlnZ2VyXCIpO1xuICB9XG5cbiAgLyogZXNsaW50LWRpc2FibGUgY2FtZWxjYXNlICovXG4gIHB1YmxpYyByZW5kZXIoeyB0cmlnZ2VyLCBsb2NhbGl6ZSB9KSB7XG4gICAgY29uc3QgeyBhdCB9ID0gdHJpZ2dlcjtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPHBhcGVyLWlucHV0XG4gICAgICAgICAgbGFiZWw9e2xvY2FsaXplKFxuICAgICAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcuYXV0b21hdGlvbi5lZGl0b3IudHJpZ2dlcnMudHlwZS50aW1lLmF0XCJcbiAgICAgICAgICApfVxuICAgICAgICAgIG5hbWU9XCJhdFwiXG4gICAgICAgICAgdmFsdWU9e2F0fVxuICAgICAgICAgIG9udmFsdWUtY2hhbmdlZD17dGhpcy5vbkNoYW5nZX1cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuKFRpbWVUcmlnZ2VyIGFzIGFueSkuZGVmYXVsdENvbmZpZyA9IHtcbiAgYXQ6IFwiXCIsXG59O1xuIiwiaW1wb3J0IHsgaCwgQ29tcG9uZW50IH0gZnJvbSBcInByZWFjdFwiO1xuXG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1pbnB1dC9wYXBlci1pbnB1dFwiO1xuXG5pbXBvcnQgeyBvbkNoYW5nZUV2ZW50IH0gZnJvbSBcIi4uLy4uLy4uLy4uL2NvbW1vbi9wcmVhY3QvZXZlbnRcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGltZVBhdHRlcm5UcmlnZ2VyIGV4dGVuZHMgQ29tcG9uZW50PGFueT4ge1xuICBwcml2YXRlIG9uQ2hhbmdlOiAob2JqOiBhbnkpID0+IHZvaWQ7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG5cbiAgICB0aGlzLm9uQ2hhbmdlID0gb25DaGFuZ2VFdmVudC5iaW5kKHRoaXMsIFwidHJpZ2dlclwiKTtcbiAgfVxuXG4gIC8qIGVzbGludC1kaXNhYmxlIGNhbWVsY2FzZSAqL1xuICBwdWJsaWMgcmVuZGVyKHsgdHJpZ2dlciwgbG9jYWxpemUgfSkge1xuICAgIGNvbnN0IHsgaG91cnMsIG1pbnV0ZXMsIHNlY29uZHMgfSA9IHRyaWdnZXI7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxwYXBlci1pbnB1dFxuICAgICAgICAgIGxhYmVsPXtsb2NhbGl6ZShcbiAgICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLmF1dG9tYXRpb24uZWRpdG9yLnRyaWdnZXJzLnR5cGUudGltZV9wYXR0ZXJuLmhvdXJzXCJcbiAgICAgICAgICApfVxuICAgICAgICAgIG5hbWU9XCJob3Vyc1wiXG4gICAgICAgICAgdmFsdWU9e2hvdXJzfVxuICAgICAgICAgIG9udmFsdWUtY2hhbmdlZD17dGhpcy5vbkNoYW5nZX1cbiAgICAgICAgLz5cbiAgICAgICAgPHBhcGVyLWlucHV0XG4gICAgICAgICAgbGFiZWw9e2xvY2FsaXplKFxuICAgICAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcuYXV0b21hdGlvbi5lZGl0b3IudHJpZ2dlcnMudHlwZS50aW1lX3BhdHRlcm4ubWludXRlc1wiXG4gICAgICAgICAgKX1cbiAgICAgICAgICBuYW1lPVwibWludXRlc1wiXG4gICAgICAgICAgdmFsdWU9e21pbnV0ZXN9XG4gICAgICAgICAgb252YWx1ZS1jaGFuZ2VkPXt0aGlzLm9uQ2hhbmdlfVxuICAgICAgICAvPlxuICAgICAgICA8cGFwZXItaW5wdXRcbiAgICAgICAgICBsYWJlbD17bG9jYWxpemUoXG4gICAgICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy5hdXRvbWF0aW9uLmVkaXRvci50cmlnZ2Vycy50eXBlLnRpbWVfcGF0dGVybi5zZWNvbmRzXCJcbiAgICAgICAgICApfVxuICAgICAgICAgIG5hbWU9XCJzZWNvbmRzXCJcbiAgICAgICAgICB2YWx1ZT17c2Vjb25kc31cbiAgICAgICAgICBvbnZhbHVlLWNoYW5nZWQ9e3RoaXMub25DaGFuZ2V9XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbihUaW1lUGF0dGVyblRyaWdnZXIgYXMgYW55KS5kZWZhdWx0Q29uZmlnID0ge1xuICBob3VyczogXCJcIixcbiAgbWludXRlczogXCJcIixcbiAgc2Vjb25kczogXCJcIixcbn07XG4iLCJpbXBvcnQgeyBoLCBDb21wb25lbnQgfSBmcm9tIFwicHJlYWN0XCI7XG5cbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWRyb3Bkb3duLW1lbnUvcGFwZXItZHJvcGRvd24tbWVudS1saWdodFwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItaXRlbS9wYXBlci1pdGVtXCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1saXN0Ym94L3BhcGVyLWxpc3Rib3hcIjtcblxuaW1wb3J0IERldmljZVRyaWdnZXIgZnJvbSBcIi4vZGV2aWNlXCI7XG5pbXBvcnQgRXZlbnRUcmlnZ2VyIGZyb20gXCIuL2V2ZW50XCI7XG5pbXBvcnQgR2VvbG9jYXRpb25UcmlnZ2VyIGZyb20gXCIuL2dlb19sb2NhdGlvblwiO1xuaW1wb3J0IEhhc3NUcmlnZ2VyIGZyb20gXCIuL2hvbWVhc3Npc3RhbnRcIjtcbmltcG9ydCBNUVRUVHJpZ2dlciBmcm9tIFwiLi9tcXR0XCI7XG5pbXBvcnQgTnVtZXJpY1N0YXRlVHJpZ2dlciBmcm9tIFwiLi9udW1lcmljX3N0YXRlXCI7XG5pbXBvcnQgVGltZVBhdHRlcm5UcmlnZ2VyIGZyb20gXCIuL3RpbWVfcGF0dGVyblwiO1xuaW1wb3J0IFN0YXRlVHJpZ2dlciBmcm9tIFwiLi9zdGF0ZVwiO1xuaW1wb3J0IFN1blRyaWdnZXIgZnJvbSBcIi4vc3VuXCI7XG5pbXBvcnQgVGVtcGxhdGVUcmlnZ2VyIGZyb20gXCIuL3RlbXBsYXRlXCI7XG5pbXBvcnQgVGltZVRyaWdnZXIgZnJvbSBcIi4vdGltZVwiO1xuaW1wb3J0IFdlYmhvb2tUcmlnZ2VyIGZyb20gXCIuL3dlYmhvb2tcIjtcbmltcG9ydCBab25lVHJpZ2dlciBmcm9tIFwiLi96b25lXCI7XG5cbmNvbnN0IFRZUEVTID0ge1xuICBkZXZpY2U6IERldmljZVRyaWdnZXIsXG4gIGV2ZW50OiBFdmVudFRyaWdnZXIsXG4gIHN0YXRlOiBTdGF0ZVRyaWdnZXIsXG4gIGdlb19sb2NhdGlvbjogR2VvbG9jYXRpb25UcmlnZ2VyLFxuICBob21lYXNzaXN0YW50OiBIYXNzVHJpZ2dlcixcbiAgbXF0dDogTVFUVFRyaWdnZXIsXG4gIG51bWVyaWNfc3RhdGU6IE51bWVyaWNTdGF0ZVRyaWdnZXIsXG4gIHN1bjogU3VuVHJpZ2dlcixcbiAgdGVtcGxhdGU6IFRlbXBsYXRlVHJpZ2dlcixcbiAgdGltZTogVGltZVRyaWdnZXIsXG4gIHRpbWVfcGF0dGVybjogVGltZVBhdHRlcm5UcmlnZ2VyLFxuICB3ZWJob29rOiBXZWJob29rVHJpZ2dlcixcbiAgem9uZTogWm9uZVRyaWdnZXIsXG59O1xuXG5jb25zdCBPUFRJT05TID0gT2JqZWN0LmtleXMoVFlQRVMpLnNvcnQoKTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVHJpZ2dlckVkaXQgZXh0ZW5kcyBDb21wb25lbnQ8YW55PiB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG5cbiAgICB0aGlzLnR5cGVDaGFuZ2VkID0gdGhpcy50eXBlQ2hhbmdlZC5iaW5kKHRoaXMpO1xuICB9XG5cbiAgcHVibGljIHJlbmRlcih7IGluZGV4LCB0cmlnZ2VyLCBvbkNoYW5nZSwgaGFzcywgbG9jYWxpemUgfSkge1xuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogdmFyaWFibGUtbmFtZVxuICAgIGNvbnN0IENvbXAgPSBUWVBFU1t0cmlnZ2VyLnBsYXRmb3JtXTtcbiAgICBjb25zdCBzZWxlY3RlZCA9IE9QVElPTlMuaW5kZXhPZih0cmlnZ2VyLnBsYXRmb3JtKTtcblxuICAgIGlmICghQ29tcCkge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICB7bG9jYWxpemUoXG4gICAgICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy5hdXRvbWF0aW9uLmVkaXRvci50cmlnZ2Vycy51bnN1cHBvcnRlZF9wbGF0Zm9ybVwiLFxuICAgICAgICAgICAgXCJwbGF0Zm9ybVwiLFxuICAgICAgICAgICAgdHJpZ2dlci5wbGF0Zm9ybVxuICAgICAgICAgICl9XG4gICAgICAgICAgPHByZT57SlNPTi5zdHJpbmdpZnkodHJpZ2dlciwgbnVsbCwgMil9PC9wcmU+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKTtcbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxwYXBlci1kcm9wZG93bi1tZW51LWxpZ2h0XG4gICAgICAgICAgbGFiZWw9e2xvY2FsaXplKFxuICAgICAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcuYXV0b21hdGlvbi5lZGl0b3IudHJpZ2dlcnMudHlwZV9zZWxlY3RcIlxuICAgICAgICAgICl9XG4gICAgICAgICAgbm8tYW5pbWF0aW9uc1xuICAgICAgICA+XG4gICAgICAgICAgPHBhcGVyLWxpc3Rib3hcbiAgICAgICAgICAgIHNsb3Q9XCJkcm9wZG93bi1jb250ZW50XCJcbiAgICAgICAgICAgIHNlbGVjdGVkPXtzZWxlY3RlZH1cbiAgICAgICAgICAgIG9uaXJvbi1zZWxlY3Q9e3RoaXMudHlwZUNoYW5nZWR9XG4gICAgICAgICAgPlxuICAgICAgICAgICAge09QVElPTlMubWFwKChvcHQpID0+IChcbiAgICAgICAgICAgICAgPHBhcGVyLWl0ZW0gcGxhdGZvcm09e29wdH0+XG4gICAgICAgICAgICAgICAge2xvY2FsaXplKFxuICAgICAgICAgICAgICAgICAgYHVpLnBhbmVsLmNvbmZpZy5hdXRvbWF0aW9uLmVkaXRvci50cmlnZ2Vycy50eXBlLiR7b3B0fS5sYWJlbGBcbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICA8L3BhcGVyLWl0ZW0+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L3BhcGVyLWxpc3Rib3g+XG4gICAgICAgIDwvcGFwZXItZHJvcGRvd24tbWVudS1saWdodD5cbiAgICAgICAgPENvbXBcbiAgICAgICAgICBpbmRleD17aW5kZXh9XG4gICAgICAgICAgdHJpZ2dlcj17dHJpZ2dlcn1cbiAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2V9XG4gICAgICAgICAgaGFzcz17aGFzc31cbiAgICAgICAgICBsb2NhbGl6ZT17bG9jYWxpemV9XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSB0eXBlQ2hhbmdlZChldikge1xuICAgIGNvbnN0IHR5cGUgPSBldi50YXJnZXQuc2VsZWN0ZWRJdGVtLmF0dHJpYnV0ZXMucGxhdGZvcm0udmFsdWU7XG5cbiAgICBpZiAodHlwZSAhPT0gdGhpcy5wcm9wcy50cmlnZ2VyLnBsYXRmb3JtKSB7XG4gICAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKHRoaXMucHJvcHMuaW5kZXgsIHtcbiAgICAgICAgcGxhdGZvcm06IHR5cGUsXG4gICAgICAgIC4uLlRZUEVTW3R5cGVdLmRlZmF1bHRDb25maWcsXG4gICAgICB9KTtcbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCB7IGgsIENvbXBvbmVudCB9IGZyb20gXCJwcmVhY3RcIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLW1lbnUtYnV0dG9uL3BhcGVyLW1lbnUtYnV0dG9uXCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1pY29uLWJ1dHRvbi9wYXBlci1pY29uLWJ1dHRvblwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItaXRlbS9wYXBlci1pdGVtXCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1saXN0Ym94L3BhcGVyLWxpc3Rib3hcIjtcbmltcG9ydCBcIi4uLy4uLy4uLy4uL2NvbXBvbmVudHMvaGEtY2FyZFwiO1xuXG5pbXBvcnQgVHJpZ2dlckVkaXQgZnJvbSBcIi4vdHJpZ2dlcl9lZGl0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRyaWdnZXJSb3cgZXh0ZW5kcyBDb21wb25lbnQ8YW55PiB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG5cbiAgICB0aGlzLm9uRGVsZXRlID0gdGhpcy5vbkRlbGV0ZS5iaW5kKHRoaXMpO1xuICB9XG5cbiAgcHVibGljIHJlbmRlcihwcm9wcykge1xuICAgIHJldHVybiAoXG4gICAgICA8aGEtY2FyZD5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtY29udGVudFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLW1lbnVcIj5cbiAgICAgICAgICAgIDxwYXBlci1tZW51LWJ1dHRvblxuICAgICAgICAgICAgICBuby1hbmltYXRpb25zXG4gICAgICAgICAgICAgIGhvcml6b250YWwtYWxpZ249XCJyaWdodFwiXG4gICAgICAgICAgICAgIGhvcml6b250YWwtb2Zmc2V0PVwiLTVcIlxuICAgICAgICAgICAgICB2ZXJ0aWNhbC1vZmZzZXQ9XCItNVwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxwYXBlci1pY29uLWJ1dHRvblxuICAgICAgICAgICAgICAgIGljb249XCJoYXNzOmRvdHMtdmVydGljYWxcIlxuICAgICAgICAgICAgICAgIHNsb3Q9XCJkcm9wZG93bi10cmlnZ2VyXCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPHBhcGVyLWxpc3Rib3ggc2xvdD1cImRyb3Bkb3duLWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICA8cGFwZXItaXRlbSBkaXNhYmxlZD5cbiAgICAgICAgICAgICAgICAgIHtwcm9wcy5sb2NhbGl6ZShcbiAgICAgICAgICAgICAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcuYXV0b21hdGlvbi5lZGl0b3IudHJpZ2dlcnMuZHVwbGljYXRlXCJcbiAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgPC9wYXBlci1pdGVtPlxuICAgICAgICAgICAgICAgIDxwYXBlci1pdGVtIG9uVGFwPXt0aGlzLm9uRGVsZXRlfT5cbiAgICAgICAgICAgICAgICAgIHtwcm9wcy5sb2NhbGl6ZShcbiAgICAgICAgICAgICAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcuYXV0b21hdGlvbi5lZGl0b3IudHJpZ2dlcnMuZGVsZXRlXCJcbiAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgPC9wYXBlci1pdGVtPlxuICAgICAgICAgICAgICA8L3BhcGVyLWxpc3Rib3g+XG4gICAgICAgICAgICA8L3BhcGVyLW1lbnUtYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxUcmlnZ2VyRWRpdCB7Li4ucHJvcHN9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9oYS1jYXJkPlxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIG9uRGVsZXRlKCkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxuICAgIGlmIChcbiAgICAgIGNvbmZpcm0oXG4gICAgICAgIHRoaXMucHJvcHMubG9jYWxpemUoXG4gICAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcuYXV0b21hdGlvbi5lZGl0b3IudHJpZ2dlcnMuZGVsZXRlX2NvbmZpcm1cIlxuICAgICAgICApXG4gICAgICApXG4gICAgKSB7XG4gICAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKHRoaXMucHJvcHMuaW5kZXgsIG51bGwpO1xuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHsgaCwgQ29tcG9uZW50IH0gZnJvbSBcInByZWFjdFwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItaW5wdXQvcGFwZXItaW5wdXRcIjtcblxuaW1wb3J0IHsgb25DaGFuZ2VFdmVudCB9IGZyb20gXCIuLi8uLi8uLi8uLi9jb21tb24vcHJlYWN0L2V2ZW50XCI7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBXZWJob29rVHJpZ2dlciBleHRlbmRzIENvbXBvbmVudDxhbnk+IHtcbiAgcHJpdmF0ZSBvbkNoYW5nZTogKG9iajogYW55KSA9PiB2b2lkO1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuXG4gICAgdGhpcy5vbkNoYW5nZSA9IG9uQ2hhbmdlRXZlbnQuYmluZCh0aGlzLCBcInRyaWdnZXJcIik7XG4gIH1cblxuICBwdWJsaWMgcmVuZGVyKHsgdHJpZ2dlciwgbG9jYWxpemUgfSkge1xuICAgIGNvbnN0IHsgd2ViaG9va19pZDogd2ViaG9va0lkIH0gPSB0cmlnZ2VyO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8cGFwZXItaW5wdXRcbiAgICAgICAgICBsYWJlbD17bG9jYWxpemUoXG4gICAgICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy5hdXRvbWF0aW9uLmVkaXRvci50cmlnZ2Vycy50eXBlLndlYmhvb2sud2ViaG9va19pZFwiXG4gICAgICAgICAgKX1cbiAgICAgICAgICBuYW1lPVwid2ViaG9va19pZFwiXG4gICAgICAgICAgdmFsdWU9e3dlYmhvb2tJZH1cbiAgICAgICAgICBvbnZhbHVlLWNoYW5nZWQ9e3RoaXMub25DaGFuZ2V9XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbihXZWJob29rVHJpZ2dlciBhcyBhbnkpLmRlZmF1bHRDb25maWcgPSB7XG4gIHdlYmhvb2tfaWQ6IFwiXCIsXG59O1xuIiwiaW1wb3J0IHsgaCwgQ29tcG9uZW50IH0gZnJvbSBcInByZWFjdFwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItcmFkaW8tYnV0dG9uL3BhcGVyLXJhZGlvLWJ1dHRvblwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItcmFkaW8tZ3JvdXAvcGFwZXItcmFkaW8tZ3JvdXBcIjtcbmltcG9ydCBcIi4uLy4uLy4uLy4uL2NvbXBvbmVudHMvZW50aXR5L2hhLWVudGl0eS1waWNrZXJcIjtcblxuaW1wb3J0IHsgaGFzTG9jYXRpb24gfSBmcm9tIFwiLi4vLi4vLi4vLi4vY29tbW9uL2VudGl0eS9oYXNfbG9jYXRpb25cIjtcbmltcG9ydCB7IGNvbXB1dGVTdGF0ZURvbWFpbiB9IGZyb20gXCIuLi8uLi8uLi8uLi9jb21tb24vZW50aXR5L2NvbXB1dGVfc3RhdGVfZG9tYWluXCI7XG5cbmZ1bmN0aW9uIHpvbmVBbmRMb2NhdGlvbkZpbHRlcihzdGF0ZU9iaikge1xuICByZXR1cm4gaGFzTG9jYXRpb24oc3RhdGVPYmopICYmIGNvbXB1dGVTdGF0ZURvbWFpbihzdGF0ZU9iaikgIT09IFwiem9uZVwiO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBab25lVHJpZ2dlciBleHRlbmRzIENvbXBvbmVudDxhbnk+IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcblxuICAgIHRoaXMucmFkaW9Hcm91cFBpY2tlZCA9IHRoaXMucmFkaW9Hcm91cFBpY2tlZC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuZW50aXR5UGlja2VkID0gdGhpcy5lbnRpdHlQaWNrZWQuYmluZCh0aGlzKTtcbiAgICB0aGlzLnpvbmVQaWNrZWQgPSB0aGlzLnpvbmVQaWNrZWQuYmluZCh0aGlzKTtcbiAgfVxuXG4gIC8qIGVzbGludC1kaXNhYmxlIGNhbWVsY2FzZSAqL1xuICBwdWJsaWMgcmVuZGVyKHsgdHJpZ2dlciwgaGFzcywgbG9jYWxpemUgfSkge1xuICAgIGNvbnN0IHsgZW50aXR5X2lkLCB6b25lLCBldmVudCB9ID0gdHJpZ2dlcjtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGhhLWVudGl0eS1waWNrZXJcbiAgICAgICAgICBsYWJlbD17bG9jYWxpemUoXG4gICAgICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy5hdXRvbWF0aW9uLmVkaXRvci50cmlnZ2Vycy50eXBlLnpvbmUuZW50aXR5XCJcbiAgICAgICAgICApfVxuICAgICAgICAgIHZhbHVlPXtlbnRpdHlfaWR9XG4gICAgICAgICAgb25DaGFuZ2U9e3RoaXMuZW50aXR5UGlja2VkfVxuICAgICAgICAgIGhhc3M9e2hhc3N9XG4gICAgICAgICAgYWxsb3dDdXN0b21FbnRpdHlcbiAgICAgICAgICBlbnRpdHlGaWx0ZXI9e3pvbmVBbmRMb2NhdGlvbkZpbHRlcn1cbiAgICAgICAgLz5cbiAgICAgICAgPGhhLWVudGl0eS1waWNrZXJcbiAgICAgICAgICBsYWJlbD17bG9jYWxpemUoXG4gICAgICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy5hdXRvbWF0aW9uLmVkaXRvci50cmlnZ2Vycy50eXBlLnpvbmUuem9uZVwiXG4gICAgICAgICAgKX1cbiAgICAgICAgICB2YWx1ZT17em9uZX1cbiAgICAgICAgICBvbkNoYW5nZT17dGhpcy56b25lUGlja2VkfVxuICAgICAgICAgIGhhc3M9e2hhc3N9XG4gICAgICAgICAgYWxsb3dDdXN0b21FbnRpdHlcbiAgICAgICAgICBkb21haW5GaWx0ZXI9XCJ6b25lXCJcbiAgICAgICAgLz5cbiAgICAgICAgPGxhYmVsIGlkPVwiZXZlbnRsYWJlbFwiPlxuICAgICAgICAgIHtsb2NhbGl6ZShcbiAgICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLmF1dG9tYXRpb24uZWRpdG9yLnRyaWdnZXJzLnR5cGUuem9uZS5ldmVudFwiXG4gICAgICAgICAgKX1cbiAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgPHBhcGVyLXJhZGlvLWdyb3VwXG4gICAgICAgICAgc2VsZWN0ZWQ9e2V2ZW50fVxuICAgICAgICAgIGFyaWEtbGFiZWxsZWRieT1cImV2ZW50bGFiZWxcIlxuICAgICAgICAgIG9ucGFwZXItcmFkaW8tZ3JvdXAtY2hhbmdlZD17dGhpcy5yYWRpb0dyb3VwUGlja2VkfVxuICAgICAgICA+XG4gICAgICAgICAgPHBhcGVyLXJhZGlvLWJ1dHRvbiBuYW1lPVwiZW50ZXJcIj5cbiAgICAgICAgICAgIHtsb2NhbGl6ZShcbiAgICAgICAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcuYXV0b21hdGlvbi5lZGl0b3IudHJpZ2dlcnMudHlwZS56b25lLmVudGVyXCJcbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9wYXBlci1yYWRpby1idXR0b24+XG4gICAgICAgICAgPHBhcGVyLXJhZGlvLWJ1dHRvbiBuYW1lPVwibGVhdmVcIj5cbiAgICAgICAgICAgIHtsb2NhbGl6ZShcbiAgICAgICAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcuYXV0b21hdGlvbi5lZGl0b3IudHJpZ2dlcnMudHlwZS56b25lLmxlYXZlXCJcbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9wYXBlci1yYWRpby1idXR0b24+XG4gICAgICAgIDwvcGFwZXItcmFkaW8tZ3JvdXA+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBlbnRpdHlQaWNrZWQoZXYpIHtcbiAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKHRoaXMucHJvcHMuaW5kZXgsIHtcbiAgICAgIC4uLnRoaXMucHJvcHMudHJpZ2dlcixcbiAgICAgIGVudGl0eV9pZDogZXYudGFyZ2V0LnZhbHVlLFxuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSB6b25lUGlja2VkKGV2KSB7XG4gICAgdGhpcy5wcm9wcy5vbkNoYW5nZSh0aGlzLnByb3BzLmluZGV4LCB7XG4gICAgICAuLi50aGlzLnByb3BzLnRyaWdnZXIsXG4gICAgICB6b25lOiBldi50YXJnZXQudmFsdWUsXG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIHJhZGlvR3JvdXBQaWNrZWQoZXYpIHtcbiAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKHRoaXMucHJvcHMuaW5kZXgsIHtcbiAgICAgIC4uLnRoaXMucHJvcHMudHJpZ2dlcixcbiAgICAgIGV2ZW50OiBldi50YXJnZXQuc2VsZWN0ZWQsXG4gICAgfSk7XG4gIH1cbn1cblxuKFpvbmVUcmlnZ2VyIGFzIGFueSkuZGVmYXVsdENvbmZpZyA9IHtcbiAgZW50aXR5X2lkOiBcIlwiLFxuICB6b25lOiBcIlwiLFxuICBldmVudDogXCJlbnRlclwiLFxufTtcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ3hDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUMvQkE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckJBO0FBQ0E7QUFLQTtBQUNBO0FBR0E7QUFJQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVpBO0FBQ0E7QUFhQTtBQUNBO0FBaEJBO0FBREE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNWQTtBQUVBO0FBQ0E7QUFXQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBR0E7QUFBQTs7QUFJQTtBQWtJQTtBQWhJQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7O0FBR0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBRUE7O0FBRUE7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFrQkE7QUFDQTtBQUNBO0FBbklBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQW9JQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoS0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUdBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQWlCQTtBQUNBO0FBQ0E7QUFDQTtBQWxDQTtBQUFBO0FBQUE7QUFEQTtBQURBO0FBQ0E7QUFBQTs7Ozs7Ozs7Ozs7OztBQ0pBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQWlCQTtBQUdBO0FBRUE7QUFJQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDdkNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFNQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFzQkE7QUFDQTtBQUNBO0FBQ0E7QUFmQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQUtBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBSUE7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQTs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7Ozs7O0FBS0E7QUFDQTs7QUFFQTtBQUdBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUlBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFHQTtBQU1BO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQVVBO0FBRUE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU1BO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFxRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25WQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFHQTtBQUtBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7OztBQUdBOzs7Ozs7QUFRQTs7Ozs7O0FBUUE7O0FBSUE7QUFDQTs7O0FBR0E7OztBQUtBO0FBQ0E7QUFDQTs7O0FBSUE7QUFDQTs7OztBQUlBOztBQUdBO0FBQ0E7QUFNQTs7Ozs7QUFNQTtBQUNBOzs7O0FBSUE7QUFFQTtBQUdBOzs7O0FBS0E7O0FBR0E7QUFDQTs7Ozs7QUFLQTtBQUNBOzs7OztBQU1BOzs7Ozs7O0FBUUE7O0FBRUE7QUFHQTs7OztBQUlBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFzREE7QUFDQTtBQUNBO0FBQ0E7QUExTEE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBSEE7QUFEQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDOUJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQzVIQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUlBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBTUE7QUFlQTtBQUNBO0FBR0E7QUFDQTtBQUtBO0FBU0E7QUFRQTtBQUNBO0FBR0E7QUFDQTtBQUtBO0FBU0E7QUFRQTtBQUNBO0FBR0E7QUFDQTtBQUtBO0FBT0E7QUFTQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDMUpBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUtBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBTUE7QUFPQTtBQVVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBSUE7QUFFQTtBQUNBO0FBQ0E7QUFNQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ2hJQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQVFBO0FBU0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDbkRBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUlBO0FBRUE7QUFDQTtBQUlBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQVFBO0FBVUE7QUFLQTtBQUtBO0FBS0E7QUFRQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ3JGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFJQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFLQTtBQUtBO0FBS0E7QUFRQTtBQUNBO0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDbkRBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFLQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFTQTtBQUNBO0FBQ0E7QUFPQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDMURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQVFBO0FBVUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ3pDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBSUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFNQTtBQVFBO0FBUUE7QUFTQTtBQVVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUN2RkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBSUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQU1BO0FBUUE7QUFRQTtBQVVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUM5RUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUlBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUtBO0FBS0E7QUFLQTtBQU9BO0FBVUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ2xFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFXQTtBQUNBO0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDbkNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQVVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBUUE7QUFRQTtBQVVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDcERBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBS0E7QUFHQTtBQUNBO0FBRUE7QUFNQTtBQWNBO0FBU0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUlBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ3pHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBTUE7QUFJQTtBQUNBO0FBS0E7QUFRQTtBQUlBO0FBRUE7QUFDQTtBQUNBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUMvREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQVVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUMvQkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQVVBO0FBVUE7QUFLQTtBQUtBO0FBS0E7QUFRQTtBQUVBO0FBQ0E7QUFJQTtBQUVBO0FBQ0E7QUFJQTtBQUVBO0FBQ0E7QUFJQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==